import { type FC } from "react";

import { Button } from "~/components/ui/button";

type FormAction =
  | string
  | ((formData: FormData) => void | Promise<void>)
  | undefined;

type TodosActionsProps = {
  marksAsCompletedFormAction: FormAction;
  deleteTodosFormAction: FormAction;
};

export const TodosActions: FC<TodosActionsProps> = ({
  marksAsCompletedFormAction,
  deleteTodosFormAction,
}) => (
  <div className="selected-todos-actions mb-4 flex flex-row justify-center gap-2">
    <Button formAction={marksAsCompletedFormAction}>Mark as completed</Button>
    <Button variant="destructive" formAction={deleteTodosFormAction}>
      Delete
    </Button>
  </div>
);
