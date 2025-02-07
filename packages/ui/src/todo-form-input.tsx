import { TodoFormSubmitButton } from "./todo-form-submit";

export type TodoFormInputProps = {
  isPending?: boolean;
};

export function TodoFormInput({ isPending }: TodoFormInputProps): JSX.Element {
  return (
    <div className="has-[:focus]:shadow-2xl ease-in-out duration-300 shadow-xl transition-all flex rounded-full outline outline-transparent has-[:focus]:ui-outline-kantega-red has-[button:hover]:ui-outline-kantega-red-light has-[button:focus]:ui-outline-kantega-red-light">
      <div className="flex items-center h-20 w-full rounded-l-full bg-background px-3 py-2 text-base">
        <div className="flex flex-col w-full">
          <input
            className="focus:outline-none px-8 text-lg"
            name="title"
            placeholder="Todo"
            type="text"
          />
          <input
            className="focus:outline-none px-8 text-sm"
            name="description"
            placeholder="Description"
            type="text"
          />
        </div>
      </div>

      <TodoFormSubmitButton isDisabled={isPending} />
    </div>
  );
}
