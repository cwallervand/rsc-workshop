"use client";

import { type Todo } from "@prisma/client";
import Link from "next/link";
import { type FC } from "react";
import { deleteTodo, setTodoDoneStatus } from "../../server/serverFunctions";
import { CheckBadge } from "../icons/check-badge";
import { EllipsisHostizontal } from "../icons/ellipsis-horizontal";
import { Trash } from "../icons/trash";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type TodoItemMenuProps = {
  todo: Todo;
};

export const TodoItemMenu: FC<TodoItemMenuProps> = ({ todo }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisHostizontal className="size-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href={`/${todo.id}`}>Details</Link>
        </DropdownMenuItem>
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
