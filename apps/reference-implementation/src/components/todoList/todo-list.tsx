import { type Todo } from "@prisma/client";
import { TodoItem } from "@repo/ui/todo-item";
import { TodoTitle } from "../todoItem/todo-title";

export type TodoListProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoListProps): JSX.Element {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className="mb-2" key={todo.id}>
          <TodoItem titleComponent={<TodoTitle todo={todo} />} todo={todo} />
        </li>
      ))}
    </ul>
  );
}
