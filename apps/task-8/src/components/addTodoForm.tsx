import { addTodo } from "../server/serverFunctions";
import { TodoInput } from "./todoInput/todoInput";

type AddTodoFormProps = {
  className?: string;
};

export const AddTodoForm = ({ className }: AddTodoFormProps) => {
  return (
    <form action={addTodo} className={className}>
      <TodoInput />
    </form>
  );
};
