"use client";
import { type FC, useOptimistic } from "react";
import { type Todo } from "@prisma/client";

import { TodosActions } from "~/components/todoList/todosActions";
import { TodoList } from "~/components/todoList/todoList";

import { setTodosDone, deleteTodos } from "~/server/serverFunctions";

type TodosFormProps = {
  todos: Todo[];
};
export const TodosForm: FC<TodosFormProps> = ({ todos }) => {
  async function setTodosDoneFormAction(formData: FormData) {
    const selectedTodos = formData.getAll("selectedTodos") as string[];

    doneTodosOptimistic(selectedTodos);
    await setTodosDone(formData);
  }

  const [optimisticTodos, doneTodosOptimistic] = useOptimistic(
    todos,
    (currentTodos: Todo[], selectedTodos: string[]) => {
      return currentTodos.map((todo) => {
        if (selectedTodos.includes(todo.id.toString())) {
          return {
            ...todo,
            done: true,
          };
        }
        return todo;
      });
    },
  );
  console.log("### TodosForm ###", optimisticTodos);

  return (
    <form className="-mt-12">
      <TodosActions
        setTodosDoneFormAction={setTodosDoneFormAction}
        deleteTodosFormAction={deleteTodos}
      />
      <TodoList todos={optimisticTodos} />
    </form>
  );
};
