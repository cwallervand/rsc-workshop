"use client";
import { type FC } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { CheckBadge } from "~/components/icons/check-badge";
import { Trash } from "~/components/icons/trash";

import { EllipsisHostizontal } from "~/components/icons/ellipsis-horizontal";

type TodoItemMenuProps = {
  completeTodo: () => Promise<void>;
  deleteTodo: () => Promise<void>;
};

export const TodoItemMenu: FC<TodoItemMenuProps> = ({
  completeTodo,
  deleteTodo,
}) => {
  console.log("### TodoItemMenu ###");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisHostizontal className="size-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={completeTodo}>
          <CheckBadge />
          Mark as completed
        </DropdownMenuItem>
        <DropdownMenuItem onClick={deleteTodo}>
          <Trash />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
