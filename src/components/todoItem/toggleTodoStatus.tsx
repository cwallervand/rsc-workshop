"use client";

import { type FC, useOptimistic, startTransition } from "react";
import { type Todo } from "@prisma/client";

import { Button } from "~/components/ui/button";
import { CheckBadge } from "~/components/icons/check-badge";

import { setTodoDoneStatus } from "~/server/serverFunctions";

type ToggleTodoStatusProps = {
  todo: Todo;
};

export const ToggleTodoStatus: FC<ToggleTodoStatusProps> = ({ todo }) => {

  const [optimisticTodoStatus, toggleOptimisticTodoStatus] = useOptimistic(
    todo.done,
    (currentTodoStatus: boolean, newTodoStatus: boolean) => (newTodoStatus),
  );

  const handleToggleTodoStatus = () => {
    startTransition(async () => {
      try {
        const newTodoStatus = !optimisticTodoStatus;
        toggleOptimisticTodoStatus(newTodoStatus);
        await setTodoDoneStatus(todo.id, newTodoStatus);
      } catch {
        toggleOptimisticTodoStatus(todo.done)
      }
    });
  };

  return (
    <Button
      variant="ghost"
      type="submit"
      size="icon"
      className="border-0 [&_svg]:size-8"
      onClick={handleToggleTodoStatus}
    >
      <CheckBadge done={optimisticTodoStatus} />
    </Button>
  );
};
