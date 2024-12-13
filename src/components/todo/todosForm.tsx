// "use client";
import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { TodoList } from "~/components/todo/todoList";
import { TodosActions } from "~/components/todo/todosActions";

import { setTodosDone, deleteTodos } from "~/server/serverFunctions";

type TodosFormProps = {
  todos: Todo[];
  TodoListComponent: React.ReactNode;
};
export const TodosForm: FC<TodosFormProps> = ({ todos, TodoListComponent }) => {
  console.log("### TodosForm ###");

  // async function completeTodosFormAction(formData: FormData) {
  //   const selectedTodos = formData.getAll("selectedTodos") as string[];

  //   completedTodosOptimistic(selectedTodos);
  //   await completeTodos(formData);
  // }

  // const [optimisticTodos, completedTodosOptimistic] = useOptimistic(
  //   todos,
  //   (currentTodos: Todo[], selectedTodos: string[]) => {
  //     return currentTodos.map((todo) => {
  //       if (selectedTodos.includes(todo.id.toString())) {
  //         return {
  //           ...todo,
  //           completed: true,
  //         };
  //       }
  //       return todo;
  //     });
  //   },
  // );

  return (
    <form>
      <TodosActions
        setTodosDoneFormAction={setTodosDone}
        deleteTodosFormAction={deleteTodos}
      />
      {/* <TodoList todos={todos} /> */}
      {/* <TodoList2 todos={todos} /> */}
      {TodoListComponent}
    </form>
  );
};
