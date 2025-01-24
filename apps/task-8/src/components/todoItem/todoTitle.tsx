"use client";

import { type Todo } from "@prisma/client";
import { Check } from "lucide-react";
import { type FC, useOptimistic, useState, useTransition } from "react";
import { updateTodoTitle } from "../../server/serverFunctions";
import { Pencil } from "../icons/pencil";
import { Button } from "../ui/button";
import { CardTitle } from "../ui/card";
import { Input } from "../ui/input";

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
    event.preventDefault();
    // TODO: fin input fra form
    const inputElement = document.getElementById(
      editTitleInputId,
    ) as HTMLInputElement;

    const newTitle = inputElement.value;
    setIsEditTitleMode(false);

    startTransition(async () => {
      updateOptimisticTodoTitle(newTitle);

      await updateTodoTitle(todo.id, newTitle);
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
