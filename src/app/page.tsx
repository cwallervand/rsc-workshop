
import { ServerComponent } from "~/components/serverComponent";
import { ClientComponent } from "~/components/clientComponent";
import { ClientComponentWithSlot } from "~/components/clientComponentWithSlot";
import { ClientComponentWithButton } from "~/components/clientComponentWithButton";
import { ClientComponentWithServerComponentImport } from "~/components/clientComponentWithServerComponentImport";

export default function HomePage() {
  return (
    <main>
      <section className="flex flex-col items-center min-h-screen py-2 gap-4 relative">
        <div className="absolute bottom-2 right-2 flex flex-col justify-center gap-4 mb-4 border-2 border-slate-500 bg-slate-100 p-4 rounded-xl">
          <h2 className="text-xl">What do the colors mean?</h2>
          <div className="server">Components rendered on the server are orange</div>
          <div className="client">Components rendered on the client are blue</div>
        </div>

        <ServerComponent />

        {/* <ServerComponent message="Hello there!">
          <ServerComponent message="I am a ServerComponent and I have a ServerComponent parent!" />
        </ServerComponent> */}

        <ClientComponent />

        {/* <ClientComponent message="I have a ClientComponent child!">
          <ClientComponent message="I am a ClientComponent and I have a ClientComponent parent!" />
        </ClientComponent> */}

        {/* <ClientComponent message="I am a ClientComponent and I have a ServerComponent child!">
          <ServerComponent message="I am a ServerComponent inside another ClientComponent!" />
        </ClientComponent> */}

        {/* <ServerComponent message="I am a ServerComponent and I have a ClientComponent child!">
          <ClientComponent message="I am a ClientComponent and I have a ServerComponent parent!" />
        </ServerComponent> */}

        {/* <ClientComponentWithSlot
          slot={<ServerComponent message="I am a ServerComponent passed as a prop to ClientComponent!" />}
        /> */}

        {/* <ClientComponentWithButton /> */}

        {/* <ClientComponentWithServerComponentImport /> */}
      </section>
    </main>
  );
}
