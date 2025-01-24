"use client";

export interface TodoFormSubmitButtonProps {
  isDisabled?: boolean
};

export function TodoFormSubmitButton({ isDisabled }: TodoFormSubmitButtonProps): JSX.Element {
  return (
    <button className="h-20 rounded-none rounded-r-full transition-all duration-300 ease-in-out ui-bg-kantega-red text-lg text-white uppercase font-light px-16 hover:ui-bg-kantega-red-light focus:ui-bg-kantega-red-light active:ui-bg-kantega-red-light outline-none" disabled={isDisabled} type="submit">
      Add
    </button>
  );
}
