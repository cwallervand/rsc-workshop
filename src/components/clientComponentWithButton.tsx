"use client";
import { useState } from "react";

import { ServerComponent } from "~/components/serverComponent";

import { ClientComponent } from "~/components/clientComponent";


export const ClientComponentWithButton = () => {
  console.log("### ClientComponentWithButton ###");
  const [renderServerComponent, setRenderServerComponent] = useState(false);
  return (
    <ClientComponent message="I am a ClientComponent, please click my button! Also, I am included in the JS bundle!">
      <div>
        <button className="client" onClick={() => setRenderServerComponent(true)}>
          Click me!
        </button>
      </div>
      {renderServerComponent && <ServerComponent message="I am defined as a ServerComponent, but I am actually included in the JS bundle!" />}
    </ClientComponent>
  );
};
