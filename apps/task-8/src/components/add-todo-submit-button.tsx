"use client";

import { useFormStatus } from "react-dom";

export function AddTodoSubmitButton(): JSX.Element {
  const status = useFormStatus();

  return (
    <button
      className="h-20 rounded-none rounded-r-full bg-orange-600 px-16 text-lg font-light uppercase text-white outline-none transition-all duration-300 ease-in-out hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500"
      disabled={status.pending}
      type="submit"
    >
      Add
    </button>
  );
};
