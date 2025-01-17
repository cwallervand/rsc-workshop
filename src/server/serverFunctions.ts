"use server";

import { type Todo } from "@prisma/client";

import { db } from "~/server/db";

export async function getTodos(): Promise<Todo[]> {
  await delay(1000);
  const todos: Todo[] = await db.todo.findMany();

  return todos;
}
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
