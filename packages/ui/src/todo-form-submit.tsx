"use client";

export interface TodoFormSubmitButtonProps {
  isDisabled?: boolean
};

export function TodoFormSubmitButton({ isDisabled }: TodoFormSubmitButtonProps): JSX.Element {
  return (
    <button className="h-20 rounded-none rounded-r-full transition-all duration-300 ease-in-out bg-kantega-red text-lg text-white uppercase font-light px-16 hover:bg-kantega-red-light focus:bg-kantega-red-light active:bg-kantega-red-light outline-none" disabled={isDisabled} type="submit">
      Add
    </button>
  );
}
