'use client';
import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { Button } from "~/components/ui/button";
import { CheckBadge } from "~/components/icons/check-badge";

type ToggleTodoStatusProps = {
  todo: Todo;
};

export const ToggleTodoStatus: FC<ToggleTodoStatusProps> = ({ todo }) => {
  return (
    <Button
      variant="ghost"
      type="submit"
      size="icon"
      className="rounded-full relative border-0 [&_svg]:size-8"
      onClick={() => {
        console.log('Implement optimistic UI with useOptimistic hook!')
      }}
    >

      <span className={`border-2 border-current hover:text-kantega-teal-light hover:bg-kantega-white rounded-full w-full h-full relative flex items-center justify-center ${todo.done ? "text-kantega-teal" : "text-[#e6e6e6]"}`}>
        <CheckBadge done={todo.done} className="absolute -left-1 -bottom-2 !w-14 !h-14 -rotate-6" />
      </span>

    </Button>
  );
};