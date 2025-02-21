"use server";

import { revalidatePath } from "next/cache";
import { type Todo } from "@prisma/client";

import { db } from "~/server/db";

const DELAY_CAUSED_BY_SOME_EVIL = 1500;

export async function addTodo(formData: FormData) {
  await delay(DELAY_CAUSED_BY_SOME_EVIL); // Leve me alone

  const todo = {
    title: formData.get("title") as string,
    description: formData.get("description") as string | null,
  };

  await db.todo.create({
    data: todo,
  });

  revalidatePath("/");
}

export async function getTodos(): Promise<Todo[]> {
  await delay(DELAY_CAUSED_BY_SOME_EVIL); // Leve me alone
  const todos: Todo[] = await db.todo.findMany();

  return todos;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
