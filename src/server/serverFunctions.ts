"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { type Todo } from "@prisma/client";

import { db } from "~/server/db";

const DELAY_CAUSED_BY_SOME_EVIL = 1500;

export async function addTodo(formData: FormData) {
  const rawFormData = {
    title: formData.get("title"),
    description: formData.get("description"),
  };

  const createTodoSchema = z.object({
    title: z.string().min(1),
    description: z.string().nullish(),
  });

  try {
    const validTodo = createTodoSchema.parse(rawFormData);
    await delay(DELAY_CAUSED_BY_SOME_EVIL);

    await db.todo.create({
      data: validTodo,
    });
    revalidatePath("/");
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation failed:", error.errors);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}

export async function getTodos(): Promise<Todo[]> {
  await delay(DELAY_CAUSED_BY_SOME_EVIL);
  const todos: Todo[] = await db.todo.findMany();

  return todos;
}

export async function getTodo(id: number): Promise<Todo> {
  const todo: Todo | null = await db.todo.findUnique({
    where: { id },
  });

  if (!todo) {
    throw new Error(`Todo with ID ${id} not found`);
  }

  return todo;
}

export async function setTodoDoneStatus(id: number, done: boolean) {
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
