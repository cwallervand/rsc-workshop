import { getTodos } from "~/server/serverFunctions";

import { TodosForm } from "~/components/todo/todosForm";
import { CheckBadge } from "~/components/icons/check-badge";
import { Card, CardTitle } from "~/components/ui/card";

export const TodosWidget = async () => {
  console.log("### TodosWidget ###");
  const todos = await getTodos();

  console.log("todos", todos);

  if (todos.length === 0) {
    return (
      <Card className="border-green-700 bg-green-700 p-4 text-center text-white">
        <CardTitle className="flex items-center justify-center gap-2">
          You got nothing to do <CheckBadge className="inline-block size-7" />
        </CardTitle>
      </Card>
    );
  }

  return <TodosForm todos={todos} />;
};
