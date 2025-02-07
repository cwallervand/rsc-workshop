"use client";

import { type Todo } from "@prisma/client";
import { CheckBadge } from "@repo/ui/icons";
import { useOptimistic, useTransition } from "react";
import { setTodoDoneStatus } from "~/server/server-functions";

type ToggleTodoStatusProps = {
  todo: Todo;
};

export function ToggleTodoStatus({ todo }: ToggleTodoStatusProps): JSX.Element {
  const [isPending, startTransition] = useTransition();

  const [optimisticTodo, toggleOptimisticTodoStatus] = useOptimistic(
    todo,
    (currentTodo: Todo, optimisitcDoneStatus: boolean) => ({
      ...currentTodo,
      done: optimisitcDoneStatus,
    }),
  );

  const handleToggleTodoStatus = () => {
    startTransition(async () => {
      toggleOptimisticTodoStatus(!optimisticTodo.done);
      await setTodoDoneStatus(todo.id, !optimisticTodo.done);
    });
  };

  return (
    <button
      className="border-0 [&_svg]:size-8"
      onClick={handleToggleTodoStatus}
      type="submit"
    >
      <CheckBadge
        className={`${optimisticTodo.done ? "text-green-700" : "text-red-700"}`}
      />
    </button>
  );
}
