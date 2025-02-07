import { type Todo } from "@prisma/client";
import { Card, CardDescription, CardHeader } from "./card";
import { ToggleTodoStatus } from "./toggle-todo-status";

type TodoItemProps = {
  todo: Todo;
  titleComponent: JSX.Element;
};

export function TodoItem({ todo, titleComponent }: TodoItemProps): JSX.Element {
  return (
    <Card className="flex flex-row justify-between">
      <CardHeader className="p-4">
        <div className="flex flex-row items-center gap-2">{titleComponent}</div>
        <CardDescription>{todo.description}</CardDescription>
      </CardHeader>
      
      <div className="flex flex-col items-center px-4">
        <ToggleTodoStatus todo={todo} />
      </div>
    </Card>
  );
}
