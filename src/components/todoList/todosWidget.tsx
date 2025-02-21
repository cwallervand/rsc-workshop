'use client';

import { getTodos } from "~/server/serverFunctions";

import { type Todo } from "@prisma/client";
import { useEffect, useState } from "react";

import { CheckBadge } from "~/components/icons/check-badge";
import { Card, CardTitle } from "~/components/ui/card";
import { TodoList } from "~/components/todoList/todoList";

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
