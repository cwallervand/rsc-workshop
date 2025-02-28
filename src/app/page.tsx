import { TodosWidget } from "~/components/todoList/todosWidget";

export default function HomePage() {
  return (
    <>
      <header className="bg-gradient-to-r from-kantega-purple to-kantega-purple-light text-kantega-white py-20 relative overflow-hidden">
        <h1 className="text-9xl font-bold font-bolder text-center m-0 relative z-10">Tudlu</h1>
        <span className="bg-[url(/flyt-dark.svg)] absolute inset-0 bg-no-repeat bg-right-bottom mt-[20px] mb-[-40px] mr-[-65px]" />
      </header>

      <main className="container mx-auto px-4">
        <section>
          <TodosWidget />
        </section>
      </main>
    </>
  );
}
