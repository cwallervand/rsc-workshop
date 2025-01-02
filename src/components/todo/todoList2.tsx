import { type FC } from "react";
import { type Todo } from "@prisma/client";

import { TodoItem2 } from "~/components/todo/todoItem2";

export type TodoList2Props = {
  todos: Todo[];
};

export const TodoList2: FC<TodoList2Props> = ({ todos }) => {
  console.log("### TodoList2 ###");
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="mb-2">
          <TodoItem2 todo={todo} />
        </li>
      ))}
    </ul>
  );
};
