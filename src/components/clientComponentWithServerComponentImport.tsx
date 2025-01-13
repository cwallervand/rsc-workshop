"use client";

import { ClientComponent } from "~/components/clientComponent";
import { ServerComponent } from "~/components/serverComponent";

export const ClientComponentWithServerComponentImport = () => {
  console.log("### ClientComponentWithServerComponentImport ###");
  return (
    <ClientComponent message="I am a ClientComponent and I have a ServerComponent child (passed as a prop)! Also, I am included in the JS bundle!">
      <ServerComponent />
    </ClientComponent>
  );
};
