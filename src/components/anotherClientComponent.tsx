"use client";
import { type ReactNode, useState } from "react";


import { AnotherServerComponent } from "~/components/anotherServerComponent";
import { useComponentTypeClass } from "~/components/utils/useComponentTypeClass";

type AnotherClientComponentProps = {
  message?: string;
  slot: ReactNode
}

export const AnotherClientComponent = ({ message = "Hello Another Client Component!", slot }: AnotherClientComponentProps) => {
  console.log("### AnotherClientComponent ###");
  const componentTypeClass = useComponentTypeClass();
  const [renderAnotherServerComponent, setRenderAnotherServerComponent] = useState(false);
  return (
    <div className={componentTypeClass}>
      <p>{message}</p>
      <div>
        <button className="client" onClick={() => setRenderAnotherServerComponent(true)}>
          Click me!
        </button>
      </div>
      {slot}
      {renderAnotherServerComponent && <AnotherServerComponent message="I am a Another Server Component imported in AnotherClientComponent!" />}
    </div>
  );
};
