import { type FC } from "react";
import { type Todo } from "@prisma/client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { CheckBadge } from "~/components/icons/check-badge";
import { TodoItemMenu } from "~/components/todo/todoItemMenu";

import { completeTodo, deleteTodo } from "~/server/serverFunctions";

export const TodoItem: FC<
  Pick<Todo, "title" | "description" | "id" | "completed">
> = ({ id, title, description, completed }) => {
  console.log("### TodoItem ###");

  const handleCompleteTodo = async () => {
    "use server";
    await completeTodo(id);
  };

  const handleDeleteTodo = async () => {
    "use server";
    await deleteTodo(id);
  };

  return (
    <Card className="aliign-be flex flex-row justify-between">
      <CardHeader className="p-4">
        <div className="flex flex-row gap-2">
          <CardTitle>{title}</CardTitle>
          {completed && <CheckBadge />}
        </div>

        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex flex-col items-center px-4">
        <TodoItemMenu
          completeTodo={handleCompleteTodo}
          deleteTodo={handleDeleteTodo}
        />
        <input
          type="checkbox"
          name="selectedTodos"
          value={id}
          className="h-4 w-4"
        />
      </div>
    </Card>
  );
};
