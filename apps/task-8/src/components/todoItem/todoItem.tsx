import { type Todo } from "@prisma/client";
import { type FC } from "react";
import { TodoItemMenu } from "../todoItem/todoItemMenu";
import { TodoTitle } from "../todoItem/todoTitle";
import { ToggleTodoStatus } from "../todoItem/toggleTodoStatus";
import { Card, CardDescription, CardHeader } from "../ui/card";

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
        <TodoItemMenu todo={todo} />
        <ToggleTodoStatus todo={todo} />
      </div>
    </Card>
  );
};
