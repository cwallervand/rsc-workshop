import { type FC } from "react";

import { Button } from "~/components/ui/button";

import { Trash } from "~/components/icons/trash";
import { CheckBadge } from "~/components/icons/check-badge";

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
    <div className="selected-todos-actions mb-2 flex h-10 flex-row justify-end gap-2">
      <Button
        variant="outline"
        size="icon"
        formAction={setTodosDoneFormAction}
        className="border-green-700"
      >
        <CheckBadge className="text-green-700" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        formAction={deleteTodosFormAction}
        className="border-red-700"
      >
        <Trash className="text-red-700" />
      </Button>
    </div>
  );
};
