import { getTodos } from "~/server/serverFunctions";

import { TodosForm } from "~/components/todo/todosForm";
import { CheckBadge } from "~/components/icons/check-badge";
import { Card, CardTitle } from "~/components/ui/card";

export const TodosWidget = async () => {
  console.log("### TodosWidget ###");
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

  return <TodosForm todos={todos} />;
};
