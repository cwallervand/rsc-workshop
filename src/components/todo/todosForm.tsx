"use client";
import { type FC, useOptimistic } from "react";
import { type Todo } from "@prisma/client";

import { Button } from "~/components/ui/button";
import { TodoList } from "~/components/todo/todoList";

import { marksAsCompleted, deleteTodos } from "~/server/serverFunctions";

export const TodosForm: FC<{ todos: Todo[] }> = ({ todos }) => {
  async function marksAsCompletedFormAction(formData: FormData) {
    const selectedTodos = formData.getAll("selectedTodos") as string[];

    markCompletedOptimistic(selectedTodos);
    await marksAsCompleted(formData);
  }

  const [optimisticTodos, markCompletedOptimistic] = useOptimistic(
    todos,
    (currentTodos: Todo[], selectedTodos: string[]) => {
      return currentTodos.map((todo) => {
        if (selectedTodos.includes(todo.id.toString())) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  );

  return (
    <form>
      <div className="selected-todos-actions mb-4 flex flex-row justify-center gap-2">
        <Button formAction={marksAsCompletedFormAction}>
          Mark as completed
        </Button>
        <Button variant="destructive" formAction={deleteTodos}>
          Delete
        </Button>
      </div>
      <TodoList todos={optimisticTodos} />
    </form>
  );
};
