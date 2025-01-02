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

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  console.log("### TodoItem ###");

  return (
    <Card className="aliign-be flex flex-row justify-between">
      <CardHeader className="p-4">
        <div className="flex flex-row gap-2">
          <CardTitle>{todo.title}</CardTitle>
          {todo.done && <CheckBadge />}
        </div>

        <CardDescription>{todo.description}</CardDescription>
      </CardHeader>
      <div className="flex flex-col items-center px-4">
        <TodoItemMenu todo={todo} />
        <input
          type="checkbox"
          name="selectedTodos"
          value={todo.id}
          className="h-4 w-4"
        />
      </div>
    </Card>
  );
};
