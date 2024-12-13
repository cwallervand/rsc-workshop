import { type FC } from "react";

import { Button } from "~/components/ui/button";

type FormAction =
  | string
  | ((formData: FormData) => void | Promise<void>)
  | undefined;

type TodosActionsProps = {
  setTodosDoneFormAction: FormAction;
  deleteTodosFormAction: FormAction;
};

export const TodosActions: FC<TodosActionsProps> = ({
  setTodosDoneFormAction,
  deleteTodosFormAction,
}) => {
  console.log("### TodosActions ###");
  return (
    <div className="selected-todos-actions mb-4 flex flex-row justify-center gap-2">
      <Button formAction={setTodosDoneFormAction}>Set as done</Button>
      <Button variant="destructive" formAction={deleteTodosFormAction}>
        Delete
      </Button>
    </div>
  );
};
