"use client";
import { useState } from "react";

import { ServerComponent } from "./serverComponent";

import { ClientComponent } from "./clientComponent";


export const ClientComponentWithButton = () => {
  console.log("### ClientComponentWithButton ###");
  const [renderServerComponent, setRenderServerComponent] = useState(false);
  return (
    <ClientComponent message="I am a ClientComponent, please click my button!">
      <div>
        <button className="client" onClick={() => setRenderServerComponent(true)}>
          Show ServerComponent!
        </button>
      </div>
      {renderServerComponent && <ServerComponent message="I am defined as a ServerComponent, but I am actually included in the JS bundle!" />}
    </ClientComponent>
  );
};
