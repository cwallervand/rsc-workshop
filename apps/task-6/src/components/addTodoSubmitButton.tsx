"use client";

import { type FC } from "react";
import { useFormStatus } from "react-dom";

export const AddTodoSubmitButton: FC = () => {
  const status = useFormStatus();

  return (
    <button type="submit" disabled={status.pending} className="h-20 rounded-none rounded-r-full transition-all duration-300 ease-in-out bg-orange-600 text-lg text-white uppercase font-light px-16 hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500 outline-none">
      Add
    </button>
  );
};
