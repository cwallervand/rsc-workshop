"use client";

import { ClientComponent } from "./clientComponent";
import { ServerComponent } from "./serverComponent";

export const ClientComponentWithServerComponentImport = () => {
  console.log("### ClientComponentWithServerComponentImport ###");
  return (
    <ClientComponent message="I am a ClientComponent and I have a ServerComponent child (passed as a prop)! Please refresh the page!">
      <ServerComponent />
    </ClientComponent>
  );
};
