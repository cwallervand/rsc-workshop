import { db } from "~/server/db";

async function main() {
  const todo = ({
    title: "Test",
    description: "test",
  });
  await db.todo.create({
      data: todo,
    });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
  });
