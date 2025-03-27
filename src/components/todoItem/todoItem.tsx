"use client";
import { type Todo } from "@prisma/client";
import { type FC, startTransition, useOptimistic, useState } from "react";

import { ToggleTodoStatus } from "~/components/todoItem/toggleTodoStatus";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Pencil } from "~/components/icons/pencil";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { updateTitle } from "~/server/serverFunctions";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [optimisticTitle, setOptimisticTitle] = useOptimistic(
    todo.title,
    (_: string, newTitle: string) => newTitle,
  );

  async function handleUpdateTitle(formData: FormData) {
    const title = formData.get("title") as string;

    startTransition(async () => {
      try {
        setOptimisticTitle(title);
        await updateTitle(title, todo.id);
      } catch {
        setOptimisticTitle(todo.title);
      } finally {
        setEdit(false);
      }
    });
  }

  function handleEditTodo() {
    setEdit(!edit);
  }

  return (
    <Card className="flex flex-row justify-between">
      <CardHeader className="p-4">
        <div className="flex flex-row items-center gap-2">
          {!edit ? (
            <>
              <CardTitle>{optimisticTitle}</CardTitle>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={handleEditTodo}
              >
                <Pencil />
              </Button>
            </>
          ) : (
            <form className="flex gap-2" action={handleUpdateTitle}>
              <Input defaultValue={todo.title} name={"title"} autoFocus={true}/>
              <Button type={"submit"} variant="default">
                Lagre
              </Button>
            </form>
          )}
        </div>
        <CardDescription>{todo.description}</CardDescription>
      </CardHeader>
      <div className="flex flex-col justify-center px-4">
        <ToggleTodoStatus todo={todo} />
      </div>
    </Card>
  );
};
