import { type FC } from "react";
import { type Todo } from "@prisma/client";
import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <Card className="flex flex-row justify-between">
      <CardHeader className="gap-2 p-4">
        <CardTitle>{todo.title}</CardTitle>
        <CardDescription>{todo.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
