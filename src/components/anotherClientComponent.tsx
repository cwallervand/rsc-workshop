"use client";

import { AnotherServerComponent } from "~/components/anotherServerComponent";

type AnotherClientComponentProps = {
  message?: string;
}

export const AnotherClientComponent = ({ message = "Hello Another Client Component!" }: AnotherClientComponentProps) => {
  console.log("### ClientComponent ###");
  return (
    <div className="client">
      <p>{message}</p>
      <AnotherServerComponent message="I am a Another Server Component imported in AnotherClientComponent!" />
    </div>
  );
};
