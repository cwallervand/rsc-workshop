import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { Card, CardDescription, CardHeader } from "~/components/ui/card";

import { TodoItemMenu } from "~/components/todoItem/todoItemMenu";
import { ToggleTodoStatus } from "~/components/todoItem/toggleTodoStatus";
import { TodoTitle } from "~/components/todoItem/todoTitle";

type TodoItem2Props = {
  todo: Todo;
};

export const TodoItem2: FC<TodoItem2Props> = ({ todo }) => {
  console.log("### TodoItem2 ###");

  return (
    <Card className="flex flex-row justify-between">
      <CardHeader className="p-4">
        <div className="flex flex-row items-center gap-2">
          <TodoTitle todo={todo} />
        </div>

        <CardDescription>{todo.description}</CardDescription>
      </CardHeader>
      <div className="flex flex-col items-center px-4">
        <TodoItemMenu todo={todo} />
        <ToggleTodoStatus todo={todo} />
      </div>
    </Card>
  );
};
