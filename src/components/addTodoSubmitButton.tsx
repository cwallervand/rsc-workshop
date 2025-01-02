"use client";
import { type FC } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "~/components/ui/button";

export const AddTodoSubmitButton: FC = () => {
  const status = useFormStatus();

  return (
    <Button type="submit" disabled={status.pending} className="bg-green-700">
      Add
    </Button>
  );
};
