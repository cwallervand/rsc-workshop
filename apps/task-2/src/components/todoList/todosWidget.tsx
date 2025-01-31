'use client';
import { type Todo } from "@prisma/client";
import { useEffect, useState } from "react";

import { CheckBadge } from "@repo/ui/icons/check-badge";
// import { Card, CardTitle } from "~/components/ui/card";
import { Card, CardTitle } from "@repo/ui/card";

import { TodoList } from "../todoList/todoList";

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getTodos = async (): Promise<Todo[]> => {
  await delay(1500);
  return Promise.resolve([
    {
      id: 1,
      title: "Oppgave 1: Hello Server Component!",
      description:
        "Utforsk hvordan ClientComponent og ServerComponent komponentene blir rendret. Utforsk de forskjellige komposisjonsmønsterene. Hva skjer på server og hva skjer på klienten? ",
      done: true,
      createdAt: new Date(),
    },
  ]);
};


export const TodosWidget = () => {
  console.log('### TodosWidget ###');
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos()
      setTodos(data);

    }
    void fetchData();
  }, []);

  if (todos != null) {
    if (todos.length === 0) {
      return (
        <Card className="border-2 border-green-700 p-4 text-center text-green-700">
          <CardTitle className="flex items-center justify-center gap-2">
            You got nothing to do <CheckBadge className="inline-block size-7" />
          </CardTitle>
        </Card>
      );
    }
    else {
      return <TodoList todos={todos} />
    }
  } else {
    return null;
  }
};
