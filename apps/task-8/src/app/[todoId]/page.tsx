import { getTodo } from "../../server/serverFunctions";

export default async function Page({
  params,
}: {
  params: Promise<{ todoId: string }>;
}) {
  const todoId = (await params).todoId;
  const todo = await getTodo(parseInt(todoId));
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <h1>{todo.title}</h1>
      {todo.description && <p>{todo.description}</p>}
    </main>
  );
}
