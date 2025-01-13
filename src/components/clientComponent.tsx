"use client";

import { useComponentTypeClass } from "~/components/utils/useComponentTypeClass";

type ClientComponentProps = {
  message?: string;
  children?: React.ReactNode;
}

export const ClientComponent = ({ message = "Hello ClientComponent! I am included in the JS bundle!", children }: ClientComponentProps) => {
  console.log("### ClientComponent ###");
  const componentTypeClass = useComponentTypeClass();
  return (
    <div className={componentTypeClass}>
      <p>{message}</p>
      {children}
    </div>
  );
};
