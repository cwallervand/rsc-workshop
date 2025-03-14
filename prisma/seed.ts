import { db } from "~/server/db";

async function main() {
  const oppgave1 = {
    title: "Oppgave 1: Hello Server Component!",
    description:
      "Utforsk hvordan ClientComponent og ServerComponent komponentene blir rendret. Utforsk de forskjellige komposisjonsmønsterene. Hva skjer på server og hva skjer på klienten? ",
    done: true,
  };

  const oppgave2 = {
    title: "Oppgave 2: Gjør om TodosWidget til å være en server komponent",
    description: "",
    done: false,
  };

  const oppgave3 = {
    title: "Oppgave 3: Opprette et nytt gjøremål",
    description: "",
    done: false,
  };

  const oppgave4 = {
    title: "Oppgave 4: Bedre UX med Suspense",
    description: "",
    done: false,
  };

  const oppgave5 = {
    title: "Oppgave 5: Endre status på en TODO + optimistisk UI",
    description: "",
    done: false,
  };

  const oppgave6 = {
    title: "Oppgave 6: Endre tittel på en TODO + optimistisk UI",
    description: "",
    done: false,
  };

  await db.todo.createMany({
    data: [oppgave1, oppgave2, oppgave3, oppgave4, oppgave5, oppgave6],
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
  });
