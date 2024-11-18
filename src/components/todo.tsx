// import { type FC } from "react";
// import { type Todo } from "@prisma/client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
// import { Skeleton } from "~/components/ui/skeleton";
// import { Button } from "~/components/ui/button";
// import { CheckBadge } from "~/components/icons/check-badge";

import { getTodos, marksAsCompleted } from "~/server/serverFunctions";

// const TodoItem: FC<
//   Pick<Todo, "title" | "description" | "id" | "completed">
// > = ({ id, title, description, completed }) => {
//   return (
//     <Card className="aliign-be flex flex-row justify-between">
//       <CardHeader className="p-4">
//         <div className="flex flex-row gap-2">
//           <CardTitle>{title}</CardTitle>
//           {completed && <CheckBadge />}
//         </div>

//         <CardDescription>{description}</CardDescription>
//       </CardHeader>
//       <div className="flex items-center justify-between p-4">
//         <input
//           type="checkbox"
//           name="selectedTodos"
//           value={id}
//           className="h-4 w-4"
//         />
//       </div>
//     </Card>
//   );
// };

// export const TodoList = async () => {
//   const todos = await getTodos();
//   return (
//     <ul className="todo-list">
//       {todos.map((todo) => (
//         <li key={todo.id} className="mb-2">
//           <TodoItem
//             title={todo.title}
//             description={todo.description}
//             id={todo.id}
//             completed={todo.completed}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export const Todos = () => {
//   return (
//     <>
//       <form>
//         <div className="selected-todos-actions mb-4 flex flex-row justify-center gap-2">
//           <Button formAction={marksAsCompleted}>Mark as completed</Button>
//           {/* <Button variant="destructive">Delete</Button> */}
//         </div>
//         <TodoList />
//       </form>
//     </>
//   );
// };
