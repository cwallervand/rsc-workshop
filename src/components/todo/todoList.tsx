import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { TodoItem } from "~/components/todo/todoItem";

export type TodoListProps = {
  todos: Todo[];
};

export const TodoList: FC<TodoListProps> = ({ todos }) => {
  console.log("### TodoList ###", todos);
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="mb-2">
          <TodoItem
            title={todo.title}
            description={todo.description}
            id={todo.id}
            done={todo.done}
          />
        </li>
      ))}
    </ul>
  );
};
