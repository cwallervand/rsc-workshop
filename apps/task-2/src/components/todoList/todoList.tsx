import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { TodoItem } from "../todoItem/todoItem";

export type TodoListProps = {
  todos: Todo[];
};

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="mb-2">
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
