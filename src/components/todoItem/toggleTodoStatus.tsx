"use client";

import { type FC, useState } from "react";
import { type Todo } from "@prisma/client";

import { Button } from "~/components/ui/button";
import { CheckBadge } from "~/components/icons/check-badge";

import { updateTodoStatus } from "~/server/serverFunctions";

type ToggleTodoStatusProps = {
  todo: Todo;
};

export const ToggleTodoStatus: FC<ToggleTodoStatusProps> = ({ todo }) => {
  const [todoStatus, setTodoStatus] = useState(todo.done);
  const handleToggleTodoStatus = async () => {
    const newStatus = !todoStatus;
    setTodoStatus(newStatus);
    try {
      await updateTodoStatus(todo.id, newStatus);
    } catch {
      setTodoStatus(todoStatus);
    }
  };

  return (
    <Button
      variant="ghost"
      type="submit"
      size="icon"
      className="rounded-full relative border-0 [&_svg]:size-8"
      onClick={handleToggleTodoStatus}
    >
      <span className={`border-2 border-current hover:text-kantega-teal-light hover:bg-kantega-white rounded-full w-full h-full relative flex items-center justify-center ${todoStatus ? "text-kantega-teal" : "text-[#e6e6e6]"}`}>
        <CheckBadge done={todoStatus} className="absolute -left-1 -bottom-2 !w-14 !h-14 -rotate-6" />
      </span>
    </Button>
  );
};
