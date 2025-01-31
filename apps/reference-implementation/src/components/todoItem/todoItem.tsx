import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { Card, CardDescription, CardHeader } from "@repo/ui/card";

import { ToggleTodoStatus } from "~/components/todoItem/toggleTodoStatus";
import { TodoTitle } from "./todoTitle";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <Card className="flex flex-row justify-between">
      <CardHeader className="p-4">
        <div className="flex flex-row items-center gap-2">
          <TodoTitle todo={todo} />
        </div>

        <CardDescription>{todo.description}</CardDescription>
      </CardHeader>
      <div className="flex flex-col items-center px-4">
        <ToggleTodoStatus todo={todo} />
      </div>
    </Card>
  );
};
