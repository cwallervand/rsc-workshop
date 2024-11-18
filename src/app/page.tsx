import { Suspense } from "react";
import { AddTodoForm } from "~/components/addTodoForm";
import { TodosWidget } from "~/components/todo/todosWidget";
import { TodoListSkeleton } from "~/components/todo/todoListSkeleton";

export default async function HomePage() {
  return (
    <main className="p-4">
      <section>
        <AddTodoForm className="mb-6" />
      </section>
      <section>
        <Suspense fallback={<TodoListSkeleton />}>
          <TodosWidget />
        </Suspense>
      </section>
    </main>
  );
}
