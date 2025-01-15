import { TodosWidget } from "~/components/todoList/todosWidget";

export default async function HomePage() {
  console.log("### HomePage ###");
  return (
    <>
      <header className="bg-gradient-to-r from-teal-300 to-indigo-600 text-white py-20">
        <h1 className="text-9xl font-bold font-bolder text-center m-0">Tudlu</h1>
      </header>

      <main className="container mx-auto px-4">
        <section>
          <TodosWidget />
        </section>
      </main>
    </>
  );
}
