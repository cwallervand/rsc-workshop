import { type Todo } from "@prisma/client";
import { type FC } from "react";

import { Card, CardDescription, CardHeader } from "~/components/ui/card";

import { TodoTitle } from "~/components/todoItem/todoTitle";
import { ToggleTodoStatus } from "~/components/todoItem/toggleTodoStatus";

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
      <div className="flex flex-col justify-center px-4">
        <ToggleTodoStatus todo={todo} />
      </div>
    </Card>
  );
};
