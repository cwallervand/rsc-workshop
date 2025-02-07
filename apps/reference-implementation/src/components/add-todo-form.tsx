import { TodoFormInput } from "@repo/ui/todo-form-input";
import { addTodo } from "~/server/server-functions";

type AddTodoFormProps = {
  className?: string;
};

export function AddTodoForm({ className }: AddTodoFormProps): JSX.Element {
  return (
    <form action={addTodo} className={className}>
      <TodoFormInput />
    </form>
  );
}
