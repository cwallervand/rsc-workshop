import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Pencil } from "~/components/icons/pencil";

type TodoTitleProps = {
  todo: Todo;
};

export const TodoTitle: FC<TodoTitleProps> = ({ todo }) => {
  return (
    <>
      <CardTitle>{todo.title}</CardTitle>
      <Button
        variant="ghost"
        type="submit"
        size="icon"
        className="border-0 [&_svg]:size-5"
      >
        <Pencil strokeWidth={1.8} />
      </Button>
    </>
  );
};
