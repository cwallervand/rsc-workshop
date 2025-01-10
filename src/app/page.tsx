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
        <ClientComponent />
      </section>
    </main>
  );
}
