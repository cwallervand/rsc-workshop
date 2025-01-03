"use client";
import { type FC } from "react";

import { type Todo } from "@prisma/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { CheckBadge } from "~/components/icons/check-badge";
import { Trash } from "~/components/icons/trash";

import { EllipsisHostizontal } from "~/components/icons/ellipsis-horizontal";

import { deleteTodo, setTodoDoneStatus } from "~/server/serverFunctions";

type TodoItemMenuProps = {
  todo: Todo;
};

export const TodoItemMenu: FC<TodoItemMenuProps> = ({ todo }) => {
  console.log("### TodoItemMenu ###");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisHostizontal className="size-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => setTodoDoneStatus(todo.id, !todo.done)}
        >
          <CheckBadge />
          {todo.done ? "Set at not done" : "Set as done"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => deleteTodo(todo.id)}>
          <Trash />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
