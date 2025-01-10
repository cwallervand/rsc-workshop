import { AddTodoSubmitButton } from "~/components/addTodoSubmitButton";

export const TodoInput = () => {
  return (
    <div className="group flex shadow-2xl rounded-full">
      <div className="flex items-center h-20 w-full rounded-l-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
        <div className="flex flex-col w-full">
          <input className="focus:outline-none px-8 text-lg" type="text" name="title" placeholder="Todo" />
          <input className="focus:outline-none px-8 text-sm" type="text" name="description" placeholder="Description" />
        </div>
      </div>

      <AddTodoSubmitButton />
    </div>
  );
};
