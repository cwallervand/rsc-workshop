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
  toggleDoneStatus: () => Promise<void>;
  deleteTodo: () => Promise<void>;
  todoDone: boolean;
};

export const TodoItemMenu: FC<TodoItemMenuProps> = ({
  toggleDoneStatus,
  deleteTodo,
  todoDone,
}) => {
  console.log("### TodoItemMenu ###");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisHostizontal className="size-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={toggleDoneStatus}>
          <CheckBadge />
          {todoDone ? "Set at not done" : "Set as done"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={deleteTodo}>
          <Trash />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
