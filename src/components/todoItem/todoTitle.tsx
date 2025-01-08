"use client";
import { type FC, useState } from "react";
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
  console.log("TODO TITLE RENDER");
  const [isEditTitleMode, setIsEditTitleMode] = useState(false);
  const editTitleInputId = `editTitleInput-${todo.id}`;

  const updateTitleAction = () => {
    console.log("_______updateTitleAction________");

    setIsEditTitleMode(false);
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
        <CardTitle>{todo.title}</CardTitle>
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
    </>
  );
};
