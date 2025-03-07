import { AddTodoForm } from "~/components/addTodoForm";
import { TodosWidget } from "~/components/todoList/todosWidget";

export default function HomePage() {
  return (
    <>
      <header className="bg-gradient-to-r from-kantega-purple to-kantega-purple-light text-kantega-white py-20 relative overflow-hidden z-20">
        <h1 className="text-9xl font-bold font-bolder text-center m-0 relative z-10">Tudlu</h1>
        <span className="bg-[url(/flyt-gray.svg)] absolute inset-0 bg-no-repeat bg-right-bottom mt-[20px] mb-[-40px] mr-[-20px] opacity-20" />
      </header>

      <main className="container mx-auto px-4 relative z-20">
        <section className="-mt-14">
          <AddTodoForm className="mb-16" />
        </section>
        <section>
          <TodosWidget />
        </section>
      </main>
    </>
  );
}
