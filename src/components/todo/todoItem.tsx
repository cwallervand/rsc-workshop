import { type FC } from "react";
import { type Todo } from "@prisma/client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { CheckBadge } from "~/components/icons/check-badge";

export const TodoItem: FC<
  Pick<Todo, "title" | "description" | "id" | "completed">
> = ({ id, title, description, completed }) => {
  return (
    <Card className="aliign-be flex flex-row justify-between">
      <CardHeader className="p-4">
        <div className="flex flex-row gap-2">
          <CardTitle>{title}</CardTitle>
          {completed && <CheckBadge />}
        </div>

        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="flex items-center justify-between p-4">
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
