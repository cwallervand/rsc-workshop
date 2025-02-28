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
      className="border-0 [&_svg]:size-8"
      onClick={() => {
        console.log('Implement optimistic UI with useOptimistic hook!')
      }}
    >
      <CheckBadge done={todo.done} />
    </Button>
  );
};