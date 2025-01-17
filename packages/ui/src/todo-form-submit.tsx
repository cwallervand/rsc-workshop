"use client";

export interface TodoFormSubmitButtonProps {
  isDisabled?: boolean
};

export function TodoFormSubmitButton({ isDisabled }: TodoFormSubmitButtonProps): JSX.Element {
  return (
    <button className="h-20 rounded-none rounded-r-full transition-all duration-300 ease-in-out bg-orange-600 text-lg text-white uppercase font-light px-16 hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500 outline-none" disabled={isDisabled} type="submit">
      Add
    </button>
  );
}
