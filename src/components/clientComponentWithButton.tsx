"use client";
import { useState } from "react";

import { ServerComponent } from "~/components/serverComponent";
import { ClientComponent } from "~/components/clientComponent";

export const ClientComponentWithButton = () => {
  console.log("### ClientComponentWithButton ###");
  const [renderServerComponent, setRenderServerComponent] = useState(false);
  return (
    <ClientComponent message="I am a ClientComponent, please click my button!">
      <div className="mb-4">
        <button className="client" onClick={() => setRenderServerComponent(true)}>
          Show ServerComponent!
        </button>
      </div>
      {renderServerComponent && <ServerComponent message="ServerComponent rendered by button click!" />}
    </ClientComponent>
  );
};
