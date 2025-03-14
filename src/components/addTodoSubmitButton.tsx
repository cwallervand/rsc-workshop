
import { type FC } from "react";

export const AddTodoSubmitButton: FC = () => {
  return (
    <button type="submit" className="h-20 rounded-full transition-all duration-300 ease-in-out bg-kantega-purple text-lg text-white uppercase font-light px-16 hover:bg-kantega-purple-light focus:bg-kantega-purple-light active:bg-kantega-purple-light disabled:opacity-50 outline-none z-30">
      Add
    </button>
  );
};
