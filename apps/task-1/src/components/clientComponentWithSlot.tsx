"use client";
import { type ReactNode } from "react";


import { ClientComponent } from "./clientComponent";

type ClientComponentWithSlotProps = {
  slot: ReactNode
}

export const ClientComponentWithSlot = ({ slot }: ClientComponentWithSlotProps) => {
  console.log("### ClientComponentWithSlot ###");
  return (
    <ClientComponent message="I am a ClientComponent and I have a ServerComponent child (passed as a prop)!">
      {slot}
    </ClientComponent>
  );
};
