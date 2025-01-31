"use client";

import { type FC } from "react";
import { useFormStatus } from "react-dom";

export const AddTodoSubmitButton: FC = () => {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      disabled={status.pending}
      className="h-20 rounded-none rounded-r-full bg-orange-600 px-16 text-lg font-light uppercase text-white outline-none transition-all duration-300 ease-in-out hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500"
    >
      Add
    </button>
  );
};
