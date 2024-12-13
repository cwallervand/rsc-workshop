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

import {
  setTodoDone,
  setTodoNotDone,
  deleteTodo,
} from "~/server/serverFunctions";

export const TodoItem: FC<
  Pick<Todo, "title" | "description" | "id" | "done">
> = ({ id, title, description, done }) => {
  console.log("### TodoItem ###");

  const handleToggleDoneStatus = async () => {
    "use server";

    if (done) {
      await setTodoNotDone(id);
    } else {
      await setTodoDone(id);
    }
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
          {done && <CheckBadge />}
        </div>

        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex flex-col items-center px-4">
        <TodoItemMenu
          toggleDoneStatus={handleToggleDoneStatus}
          deleteTodo={handleDeleteTodo}
          todoDone={done}
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
