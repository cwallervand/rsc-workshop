import React from "react";

type AnotherServerComponentProps = {
  message?: string;
  children?: React.ReactNode;
}

export const AnotherServerComponent = ({ message = "Hello Another Server Component!", children }: AnotherServerComponentProps) => {
  console.log("### AnotherServerComponent ###");
  return (
    <div className="server">
      <p>{message}</p>
      {children}
    </div>
  );
};
