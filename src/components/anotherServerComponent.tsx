import React from "react";

import { getComponentTypeClass } from "~/components/utils/componentTypeUtils";


type AnotherServerComponentProps = {
  message?: string;
  children?: React.ReactNode;
}

export const AnotherServerComponent = ({ message = "Hello Another Server Component!", children }: AnotherServerComponentProps) => {
  console.log("### AnotherServerComponent ###");
  return (
    <div className={getComponentTypeClass}>
      <p>{message}</p>
      {children}
    </div>
  );
};
