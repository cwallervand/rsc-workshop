"use client";

import { type FC, useOptimistic, useTransition } from "react";
import { type Todo } from "@prisma/client";

import { Button } from "~/components/ui/button";
import { CheckBadge } from "~/components/icons/check-badge";

import { setTodoDoneStatus } from "~/server/serverFunctions";

type ToggleTodoStatusProps = {
  todo: Todo;
};

export const ToggleTodoStatus: FC<ToggleTodoStatusProps> = ({ todo }) => {

  const [toggleStatusPending, startTransition] = useTransition();

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
      className="rounded-full relative border-0 [&_svg]:size-8"
      onClick={handleToggleTodoStatus}
      disabled={toggleStatusPending}
    >
      <span className={`border-2 border-current hover:text-kantega-teal-light hover:bg-kantega-white rounded-full w-full h-full relative flex items-center justify-center ${optimisticTodoStatus ? "text-kantega-teal" : "text-[#e6e6e6]"}`}>
        <CheckBadge done={optimisticTodoStatus} className="absolute -left-1 -bottom-2 !w-14 !h-14 -rotate-6" />
      </span>
    </Button>
  );
};
