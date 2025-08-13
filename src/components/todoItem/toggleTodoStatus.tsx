"use client";

import { type FC, useOptimistic } from "react";
import { type Todo } from "@prisma/client";

import { Button } from "~/components/ui/button";
import { CheckBadge } from "~/components/icons/check-badge";

import { updateTodoStatus } from "~/server/serverFunctions";

type ToggleTodoStatusProps = {
  todo: Todo;
};

export const ToggleTodoStatus: FC<ToggleTodoStatusProps> = ({ todo }) => {
  const [optimisticTodoStatus, setOptimisticTodoStatus] = useOptimistic(todo.done);

  async function updateTodoStatusAction(formData: FormData) {
    const currentTodoStatus = formData.get("done") === "true";
    const newStatus = !currentTodoStatus;
    setOptimisticTodoStatus(newStatus);
    try {
      await updateTodoStatus(todo.id, newStatus);
    } catch {
      console.log("Failed to update todo status");
    }
  };

  console.log("ToggleTodoStatus", optimisticTodoStatus
  );
  return (
    <form action={updateTodoStatusAction}>
      <input type="hidden" name="done" value={optimisticTodoStatus ? "true" : "false"} />
      <Button
        variant="ghost"
        type="submit"
        size="icon"
        className="rounded-full relative border-0 [&_svg]:size-8"
      >
        <span className={`border-2 border-current hover:text-kantega-teal-light hover:bg-kantega-white rounded-full w-full h-full relative flex items-center justify-center ${optimisticTodoStatus ? "text-kantega-teal" : "text-[#e6e6e6]"}`}>
          <CheckBadge done={optimisticTodoStatus} className="absolute -left-1 -bottom-2 !w-14 !h-14 -rotate-6" />
        </span>
      </Button>
    </form>
  );
};
