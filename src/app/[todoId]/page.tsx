export default async function Page({
  params,
}: {
  params: Promise<{ todoId: string }>;
}) {
  const todoId = (await params).todoId;
  return <main className="p-4">This is TODO with id {todoId}</main>;
}
