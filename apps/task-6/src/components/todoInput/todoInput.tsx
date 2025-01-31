import { AddTodoSubmitButton } from "~/components/addTodoSubmitButton";

export const TodoInput = () => {
  return (
    <div className="flex rounded-full shadow-xl outline outline-transparent transition-all duration-300 ease-in-out has-[:focus]:shadow-2xl has-[:focus]:outline-orange-600 has-[button:focus]:outline-orange-500 has-[button:hover]:outline-orange-500">
      <div className="flex h-20 w-full items-center rounded-l-full bg-background px-3 py-2 text-base">
        <div className="flex w-full flex-col">
          <input
            className="px-8 text-lg focus:outline-none"
            type="text"
            name="title"
            placeholder="Todo"
          />
          <input
            className="px-8 text-sm focus:outline-none"
            type="text"
            name="description"
            placeholder="Description"
          />
        </div>
      </div>

      <AddTodoSubmitButton />
    </div>
  );
};
