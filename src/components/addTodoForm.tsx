import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

import { addTodo } from "~/server/serverFunctions";

type AddTodoFormProps = {
  className?: string;
};

export const AddTodoForm = ({ className }: AddTodoFormProps) => {
  return (
    <form action={addTodo} className={className}>
      <div className="flex flex-row gap-2">
        <Input type="text" name="title" placeholder="Todo" />
        <Button type="submit" className="bg-green-700">
          Add
        </Button>
      </div>
      <details>
        <summary>Details</summary>
        <Textarea name="description" placeholder="Description" />
      </details>
    </form>
  );
};
