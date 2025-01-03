"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { type Todo } from "@prisma/client";

import { db } from "~/server/db";

const selectedTodosSchema = z.object({
  selectedTodos: z.coerce.number().array(),
});

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
    await delay(1000);

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
  console.log("------------ getTodos ------------");
  await delay(1000);
  const todos: Todo[] = await db.todo.findMany();

  return todos;
}

export async function setTodoDoneStatus(id: number, done: boolean) {
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

export async function setTodosDone(formData: FormData /*ids: number[]*/) {
  const rawFormData = {
    selectedTodos: formData.getAll("selectedTodos"),
  };

  try {
    const selectedTodos = selectedTodosSchema.parse(rawFormData).selectedTodos;
    await delay(1000);

    await db.todo.updateMany({
      where: {
        id: {
          in: selectedTodos,
        },
      },
      data: {
        done: true,
      },
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

export async function deleteTodos(formData: FormData) {
  const rawFormData = {
    selectedTodos: formData.getAll("selectedTodos"),
  };

  try {
    const selectedTodos = selectedTodosSchema.parse(rawFormData).selectedTodos;
    await delay(1000);
    await db.todo.deleteMany({
      where: {
        id: {
          in: selectedTodos,
        },
      },
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

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
