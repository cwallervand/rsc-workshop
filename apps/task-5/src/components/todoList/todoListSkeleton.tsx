import { type FC } from "react";

import { Skeleton } from "@repo/ui/skeleton";
import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";

export const TodoListSkeleton: FC = () => {
  return (
    <ul>
      {Array.from({ length: 3 }).map((_, index) => (
        <li key={`todoSkeleton-${index}`} className="mb-2">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>
                <Skeleton className="h-6 w-[250px]" />
              </CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-[200px]" />
              </CardDescription>
            </CardHeader>
          </Card>
        </li>
      ))}
    </ul>
  );
};
