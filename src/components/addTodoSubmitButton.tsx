"use client";

import { type FC } from "react";
import { useFormStatus } from "react-dom";

export const AddTodoSubmitButton: FC = () => {
  const status = useFormStatus();

  return (
    <button type="submit" disabled={status.pending} className="h-20 rounded-full transition-all duration-300 ease-in-out bg-kantega-purple text-lg text-white uppercase font-light px-16 hover:bg-kantega-purple-light focus:bg-kantega-purple-light active:bg-kantega-purple-light outline-none z-30">
      Add
    </button>
  );
};
