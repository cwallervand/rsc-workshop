"use client";
import { type FC, useOptimistic, useState, useRef } from "react";
import { type Todo } from "@prisma/client";

import { CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import { Pencil } from "~/components/icons/pencil";

import { updateTodoTitle } from "~/server/serverFunctions";

type TodoTitleProps = {
  todo: Todo;
};

export const TodoTitle: FC<TodoTitleProps> = ({ todo }) => {
  const [optimisticTodo, updateOptimisticTodoTitle] = useOptimistic(
    todo,
    (currentTodo: Todo, optimisticTitle: string) => ({
      ...currentTodo,
      title: optimisticTitle,
    }),
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditTitleMode, setIsEditTitleMode] = useState(false);

  // TODO: form data validation
  // TODO: Set back to no edit mode on save
  async function updateTitleAction() {
    const newTitle = inputRef.current?.value ?? optimisticTodo.title;
    updateOptimisticTodoTitle(newTitle);
    await updateTodoTitle(todo.id, newTitle);
  }

  return (
    <>
      {isEditTitleMode ? (
        <form action={updateTitleAction}>
          <Input
            type="text"
            name="title"
            placeholder={optimisticTodo.title}
            ref={inputRef}
          />
        </form>
      ) : (
        <CardTitle>{optimisticTodo.title}</CardTitle>
      )}

      <Button
        variant="ghost"
        type="submit"
        size="icon"
        className="border-0 [&_svg]:size-5"
        onClick={() => {
          setIsEditTitleMode(!isEditTitleMode);
        }}
      >
        <Pencil strokeWidth={1.8} />
      </Button>
    </>
  );
};
