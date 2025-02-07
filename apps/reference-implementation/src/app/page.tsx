import { Suspense } from "react";
import { AddTodoForm } from "~/components/add-todo-form";
import { TodosWidget } from "~/components/todoList/todo-widget";
import { TodoListSkeleton } from "~/components/todoList/todo-list-skeleton";

export default function HomePage(): JSX.Element {
  return (
    <>
      <header className="bg-gradient-to-r from-teal-300 to-indigo-600 py-20 text-white">
        <h1 className="font-bolder m-0 text-center text-9xl font-bold">
          Tudlu
        </h1>
      </header>

      <main className="container mx-auto px-4">
        <section className="-mt-14">
          <AddTodoForm className="mb-16" />
        </section>

        <section>
          <Suspense fallback={<TodoListSkeleton />}>
            <TodosWidget />
          </Suspense>
        </section>
      </main>
    </>
  );
}
