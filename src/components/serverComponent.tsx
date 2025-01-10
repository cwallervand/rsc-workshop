import React from "react";

type ServerComponentProps = {
  message?: string;
  children?: React.ReactNode;
}

export const ServerComponent = ({ message = "Hello Server Component!", children }: ServerComponentProps) => {
  console.log("### ServerComponent ###");
  return (
    <div className={typeof window === "undefined" ? "server" : "client"}>
      <p>{message}</p>
      {children}
    </div>
  );
};
