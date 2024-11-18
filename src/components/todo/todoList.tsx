import { TodoItem } from "~/components/todo/todoItem";
import { getTodos } from "~/server/serverFunctions";

export const TodoList = async () => {
  const todos = await getTodos();
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
