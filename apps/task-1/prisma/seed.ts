import { db } from "~/server/db";

async function main() {
  const oppgave1 = {
    title: "Oppgave 1: Hello Server Component!",
    description:
      "Utforsk hvordan ClientComponent og ServerComponent komponentene blir rendret. Utforsk de forskjellige komposisjonsmønsterene. Hva skjer på server og hva skjer på klienten? ",
    done: true,
  };
  await db.todo.create({
    data: oppgave1,
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
