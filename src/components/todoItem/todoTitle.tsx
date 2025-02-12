"use client";
import { type FC, useState, useOptimistic, useTransition } from "react";
import { type Todo } from "@prisma/client";

import { CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Check } from "lucide-react";

import { Pencil } from "~/components/icons/pencil";

import { updateTodoTitle } from "~/server/serverFunctions";

type TodoTitleProps = {
  todo: Todo;
};

export const TodoTitle: FC<TodoTitleProps> = ({ todo }) => {
  const [optimisticTodo, updateOptimisticTodoTitle] = useOptimistic(
    todo,
    (currentTodo: Todo, optimisitcTodoTitle: string) => ({
      ...currentTodo,
      title: optimisitcTodoTitle,
    }),
  );
  const [isPending, startTransition] = useTransition();

  const [isEditTitleMode, setIsEditTitleMode] = useState(false);
  const editTitleInputId = `editTitleInput-${todo.id}`;

  const handleUpdateTodoTitle = async (event: React.FormEvent) => {
    const inputElement = document.getElementById(
      editTitleInputId,
    ) as HTMLInputElement;

    const newTitle = inputElement.value;
    setIsEditTitleMode(false);

    startTransition(async () => {
      try {
        updateOptimisticTodoTitle(newTitle);
        await updateTodoTitle(todo.id, newTitle);
      } catch {
        updateOptimisticTodoTitle(todo.title);
      }

    });
  };

  return (
    <>
      {isEditTitleMode ? (
        <form onSubmit={handleUpdateTodoTitle} className="flex gap-2">
          <Input
            id={editTitleInputId}
            type="text"
            name="title"
            defaultValue={optimisticTodo.title}
          />
          <Button
            variant="ghost"
            type="submit"
            size="icon"
            className="border-0 [&_svg]:size-6"
          >
            <Check className="text-green-700" />
          </Button>
        </form>
      ) : (
        <CardTitle>{optimisticTodo.title}</CardTitle>
      )}
      {!isEditTitleMode && (
        <Button
          variant="ghost"
          type="button"
          size="icon"
          className="border-0 [&_svg]:size-5"
          onClick={() => {
            setIsEditTitleMode(!isEditTitleMode);
          }}
        >
          <Pencil strokeWidth={1.8} />
        </Button>
      )}
    </>
  );
};
