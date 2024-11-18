import { Button } from "~/components/ui/button";
import { TodoList } from "~/components/todo/todoList";
import { marksAsCompleted } from "~/server/serverFunctions";

export const TodosWidget = () => {
  return (
    <>
      <form>
        <div className="selected-todos-actions mb-4 flex flex-row justify-center gap-2">
          <Button formAction={marksAsCompleted}>Mark as completed</Button>
          {/* <Button variant="destructive">Delete</Button> */}
        </div>
        <TodoList />
      </form>
    </>
  );
};
