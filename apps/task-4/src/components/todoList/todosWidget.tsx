import { getTodos } from "~/server/serverFunctions";

import { CheckBadge } from "@repo/ui/icons";
import { Card, CardTitle } from "@repo/ui/card";
import { TodoList } from "./todoList";

export const TodosWidget = async () => {
  const todos = await getTodos();

  if (todos.length === 0) {
    return (
      <Card className="border-2 border-green-700 p-4 text-center text-green-700">
        <CardTitle className="flex items-center justify-center gap-2">
          You got nothing to do <CheckBadge className="inline-block size-7" />
        </CardTitle>
      </Card>
    );
  }

  return <TodoList todos={todos}></TodoList>;
};
