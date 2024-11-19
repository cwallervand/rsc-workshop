import { getTodos } from "~/server/serverFunctions";

import { TodosForm } from "~/components/todo/todosForm";

export const TodosWidget = async () => {
  console.log("### TodosWidget ###");
  const todos = await getTodos();

  return <TodosForm todos={todos} />;
};
