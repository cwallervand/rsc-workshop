import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { TodoItem } from "~/components/todo/todoItem";

export const TodoList: FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="mb-2">
          <TodoItem
            title={todo.title}
            description={todo.description}
            id={todo.id}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  );
};
