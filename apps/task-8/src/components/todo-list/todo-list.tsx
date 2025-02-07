import { type Todo } from "@prisma/client";
import { TodoItem } from "@repo/ui/todo-item";

export type TodoListProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoListProps): JSX.Element {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className="mb-2" key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}
