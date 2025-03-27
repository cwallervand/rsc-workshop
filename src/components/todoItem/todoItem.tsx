import { type Todo } from "@prisma/client";
import { type FC } from "react";

import { ToggleTodoStatus } from "~/components/todoItem/toggleTodoStatus";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <Card className="flex flex-row justify-between">
      <CardHeader className="p-4">
        <div className="flex flex-row items-center gap-2">
          <CardTitle>{todo.title}</CardTitle>
        </div>
        <CardDescription>{todo.description}</CardDescription>
      </CardHeader>
      <div className="flex flex-col justify-center px-4">
        <ToggleTodoStatus todo={todo} />
      </div>
    </Card>
  );
};
