
import { ServerComponent } from "~/components/serverComponent";
import { ClientComponent } from "~/components/clientComponent";
import { ClientComponentWithSlot } from "~/components/clientComponentWithSlot";
import { ClientComponentWithButton } from "~/components/clientComponentWithButton";
import { ClientComponentWithServerComponentImport } from "~/components/clientComponentWithServerComponentImport";

export default async function HomePage() {
  console.log("### HomePage ###");
  return (
    <main>
      <section>
        <ServerComponent />
        {/* <ServerComponent message="Hello there!">
          <ServerComponent message="I am a ServerComponent and I have a ServerComponent parent!" />
        </ServerComponent> */}
        {/* <ServerComponent message="I am a ServerComponent and I have a ClientComponent child!">
          <ClientComponent message="I am a ClientComponent and I have a ServerComponent parent!" />
        </ServerComponent> */}
        {/* <ClientComponent /> */}
        {/* <ClientComponent message="I have a ClientComponent child!">
          <ClientComponent message="I am a ClientComponent and I have a ClientComponent parent!" />
        </ClientComponent> */}
        {/* <ClientComponent message="I am a ClientComponent and I have a ServerComponent child!">
          <ServerComponent message="I am a ServerComponent inside another ClientComponent!" />
        </ClientComponent> */}

        {/* <ClientComponentWithSlot
          slot={<ServerComponent message="I am a ServerComponent passed as a prop to ClientComponent!" />}
        /> */}
        {/* <ClientComponentWithButton /> */}
        {/* <ClientComponentWithServerComponentImport /> */}
      </section>
    </main>
  );
}
