import { type Todo } from "@prisma/client";

const DELAY_CAUSED_BY_SOME_EVIL = 1500;

export async function getTodos(): Promise<Todo[]> {
  await delay(DELAY_CAUSED_BY_SOME_EVIL); // Leve me alone
  // TODO: Get all todos from the database

  return [];
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
