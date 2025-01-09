"use client";
import { type FC, useState, useOptimistic, useTransition } from "react";
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
    (currentTodo: Todo, optimisitcTodoTitle: string) => ({
      ...currentTodo,
      title: optimisitcTodoTitle,
    }),
  );
  const [isPending, startTransition] = useTransition();

  const [isEditTitleMode, setIsEditTitleMode] = useState(false);
  const editTitleInputId = `editTitleInput-${todo.id}`;

  const updateTitleAction = () => {
    console.log("_______updateTitleAction________");

    setIsEditTitleMode(false);
  };

  const handleUpdateTodoTitle = () => {
    startTransition(async () => {
      updateOptimisticTodoTitle("test");
      await updateTodoTitle(todo.id, "test");
    });
  };

  return (
    <>
      {isEditTitleMode ? (
        <form action={updateTitleAction}>
          <Input
            id={editTitleInputId}
            type="text"
            name="title"
            defaultValue={todo.title}
          />
        </form>
      ) : (
        <CardTitle>{optimisticTodo.title}</CardTitle>
      )}

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
      <Button type="button" onClick={handleUpdateTodoTitle}>
        Test
      </Button>
    </>
  );
};
