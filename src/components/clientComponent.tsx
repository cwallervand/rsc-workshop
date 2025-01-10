"use client";

type ClientComponentProps = {
  message?: string;
  children?: React.ReactNode;
}

export const ClientComponent = ({ message = "Hello Client Component!", children }: ClientComponentProps) => {
  console.log("### ClientComponent ###");
  return (
    <div>
      <p className="text-xl">{message}</p>
      {children}
    </div>
  );
};
