import { AnotherClientComponent } from "~/components/anotherClientComponent";
import { ClientComponent } from "~/components/clientComponent";
import { ServerComponent } from "~/components/serverComponent";

export default async function HomePage() {
  console.log("### HomePage ###");
  return (
    <main>
      <section>
        <ServerComponent />
        <ServerComponent message="Hello there!">
          <ServerComponent message="I am a Server Component inside another Server Component!" />
        </ServerComponent>
        <ServerComponent message="I have a Client Component child!">
          <ClientComponent message="I am a Client Component inside another Server Component!" />
        </ServerComponent>
        <ClientComponent />
        <ClientComponent message="Hello there!">
          <ServerComponent message="I am a Server Component inside another Client Component!" />
        </ClientComponent>
        <ClientComponent message="I have a Client Component child!">
          <ClientComponent message="I am a Client Component inside another Client Component!" />
        </ClientComponent>
        <AnotherClientComponent />
      </section>
    </main>
  );
}
