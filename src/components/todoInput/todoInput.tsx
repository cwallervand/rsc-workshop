import { AddTodoSubmitButton } from "~/components/addTodoSubmitButton";

export const TodoInput = () => {
  return (
    <>

      <div className="ease-in-out duration-300 transition-all flex rounded-full relative">
        <div className="flex items-center h-20 w-full rounded-l-full px-3 py-2 text-base z-30">
          <div className="flex flex-col w-full">
            <input className="focus:outline-none px-8 text-lg bg-transparent" type="text" name="title" placeholder="Todo" />
            <input className="focus:outline-none px-8 text-sm bg-transparent" type="text" name="description" placeholder="Description" />
          </div>
        </div>

        <AddTodoSubmitButton />

        <div className="absolute top-[-4px] right-[-4px] bottom-[-4px] left-[-4px] bg-kantega-white rounded-full p-2 z-20"></div>
        <div className="absolute top-[-8px] right-[-8px] bottom-[-8px] left-[-8px] rounded-full p-1 z-10 bg-gradient-to-t from-[50%] to-[50%] from-kantega-purple to-kantega-transparent"></div>
      </div>

    </>
  );
};
