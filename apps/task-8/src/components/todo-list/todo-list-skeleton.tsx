import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { Skeleton } from "@repo/ui/skeleton";

export function TodoListSkeleton(): JSX.Element {
  return (
    <ul>
      {Array.from({ length: 3 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key -- Using index as key because items are static and will not change
        <li className="mb-2" key={`todoSkeleton-${index}`}>
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
}
