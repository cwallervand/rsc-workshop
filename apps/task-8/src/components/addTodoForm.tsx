import { addTodo } from "../server/serverFunctions";
import { TodoFormInput } from "@repo/ui/todo-form-input";

type AddTodoFormProps = {
  className?: string;
};

export const AddTodoForm = ({ className }: AddTodoFormProps) => {
  return (
    <form action={addTodo} className={className}>
      <TodoFormInput></TodoFormInput>
    </form>
  );
};
