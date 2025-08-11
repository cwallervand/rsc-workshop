"use server";

import { revalidatePath } from "next/cache";
import { type Todo } from "@prisma/client";

import { db } from "~/server/db";

const DELAY_CAUSED_BY_SOME_EVIL = 1500;

export async function addTodo(formData: FormData) {
  await delay(DELAY_CAUSED_BY_SOME_EVIL);

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
  await delay(DELAY_CAUSED_BY_SOME_EVIL);
  const todos: Todo[] = await db.todo.findMany();

  return todos;
}

export async function updateTodoStatus(id: number, done: boolean) {
  await delay(DELAY_CAUSED_BY_SOME_EVIL);
  await db.todo.update({
    where: {
      id,
    },
    data: {
      done,
    },
  });
  revalidatePath("/");
}

export async function updateTodoTitle(id: number, title: string) {
  await delay(DELAY_CAUSED_BY_SOME_EVIL);
  await db.todo.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });
  revalidatePath("/");
}

export async function deleteTodo(id: number) {
  await db.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
