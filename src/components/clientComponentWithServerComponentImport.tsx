"use client";

import { ClientComponent } from "~/components/clientComponent";
import { ServerComponent } from "~/components/serverComponent";

export const ClientComponentWithServerComponentImport = () => {
  console.log("### ClientComponentWithServerComponentImport ###");
  return (
    <ClientComponent message="I am a ClientComponent and I have a ServerComponent child! Please refresh the page!">
      <ServerComponent message="Rule of thumb: Do not import server components in client components." />
    </ClientComponent>
  );
};
