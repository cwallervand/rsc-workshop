# React Server Components workshop - Gjøremålsappen Tudlu

## Workshop beskrivelse

Med React 19 innføres en av de mer spennende nyhetene i React på lang tid: React Server Components (RSCs).

"Hva er React Server Components?" spør du kanskje. Veldig kort fortalt kan RSCs sees på som server-side rendering (SSR) på steroider.

Litt mindre kort fortalt kan RSCs selv hente data og rendres i sin helhet på serveren (eller i et byggsteg).
Den produserte HTMLen fra komponenten blir så sendt til klienten hvor den flettes automagisk inn i komponent-treet 🤯

"Hva er så fordelene med dette? Hvordan skiller det seg fra måten vi skrev komponenter på tidligere? Hvorfor skal jeg bry meg?". Du stiller mange spørsmål.

I løpet av denne workshopen så kommer du til å bli litt klokere på alt dette.
Vi vil bidra med litt faglig input, men vi synes at man lærer best med en "hands on" tilnærming så du skal få lov til å bruke mesteparten av tiden din på å utvikle gjøremålsappen Tudlu.

Denne workshopen passer best for deg som allerede har litt erfaring med React.

## Oppsett

Hvis du har Docker så kan du initialisere applikasjonen i en dev container. Alternativt så kan du initialisere applikasjonen manuelt.

### Manuelt

1. `npm i` - _Installerer nødvendige pakker_
2. `npm run db:generate` - _Setter opp databasen og populerer den med data. Ved spørsmål om navn på migreringen kan du bare trykke enter_
3. `npm run dev` - _Dette gjøres i hver branch for å starte applikasjonen_

### Med dev container (Docker)

## Oppgaver

Det er lagt opp til at du starter med blanke ark i en ny branch for hver oppgave. I hver branch så kommer du til å ha det du trenger av funksjonalitet og komponenter for å løse oppgaven. Hvis du heller vil bruke dine egne komponenter og kode gjennom hele workshopen så må du gjerne gjøre det.

Hvis du i løpet av workshopen står fast eller bare er nysgjerrig på hvordan vi har løst en spesifikk oppgave så ligger vår implementasjon av Tudlu i `main` branchen.

### Oppgave 1: Hello Server Component!

```
git checkout task-1
```

I denne oppgaven skal du utforske litt hvordan klient- og server-komponenter blir rendret og hvordan komposisjon kan gjøres.
Ha i bakhodet at applikasjonen er rendret på server på page request, også komponentene som er marker med `use client`.

Start applikasjonen med `npm run dev` og [åpne den i nettleseren](http://localhost:3000).

Åpne filen [src/app/page.tsx](./src/app/page.tsx) og utforsk hvordan de forskjellige komponentene oppfører seg.
Akkurat nå er det kun komponentene [ServerComponent](./src/components/serverComponent.tsx) og [ClientComponent](./src/components/clientComponent.tsx) som er i bruk.

- Hvor kjøres / rendres komponenten? Se i loggene på server og på klient.
- Er den med innkludert i JS-bundle på klienten?
- Hvordan brukes klient-komponenter og server-komponenter om hverandre?
- Hva skjer hvis du f.eks prøver å bruke `useState` i en server-komponent?

Fjern kommentarene fra de andre komponentene (gjerne en etter en) og utforsk videre.

---

### Oppgave 2: Refaktorer TodosWidget til å være en server komponent

```
git checkout task-2
```

Fra og med denne opgpaven så skal gjøremålsapplikasjonen Tudlu videreutvikles. Noe funksjonalitet er allerede på plass, men akkurat nå så er dette en ganske ubrukelig gjøremålsapplikasjon da den bare lister ut noen gjøremål (Tudluer) uten at man kan gjøre noe med de.
Dette skal vi fikse etter hvert, men akkurat nå skal du fokusere på å refaktorere komponenten [TodosWidget](./src/components/todoList/todosWidget.tsx) til å bli en server komponent.

Det er satt opp en database (SQLite) som er populert med noen gjøremål.
Prisma er brukt som ORM og det finnes en definert `Todo` type. Definisjonen er i [schema.prisma](./prisma/schema.prisma).

Gjøremål kan hentes fra databasen slik:

```ts
import { db } from "~/server/db";
import { type Todo } from "@prisma/client";

const todos: Todo[] = await db.todo.findMany();
```

<details>
  <summary>Hint 1</summary>
  <p>Selve datahentingen gjøres i <code>TodosWidget</code></p>
</details>
<details>
  <summary>Hint 2</summary>
  <p>Klienten må kunne hente data fra serveren på en eller annen måte</p>
</details>
<details>
  <summary>Hint 3</summary>
  <p><code>'use server';</code></p>
</details>
<details>
  <summary>Hint 4</summary>
  <p>Det kan være en god ide å ha server-funksjoner samlet i en egen fil.</p>
</details>

---

### Oppgave 3: Opprette et nytt gjøremål

```
git checkout task-3
```

I denne oppgaven så skal det implementeres funksjonalitet for å opprette et nytt gjøremål.

Her er noen krav for denne featuren:

- Et gjøremål må ha en tittel
- Et gjøremål kan ha en beskrivelse
- Mens det skrives til databasen så skal lagre-knappen disables.
- [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) skal brukes for å ta i mot dataene som blir sendt til serveren
- Komponenten [`AddTodoForm`](./src/components/addTodoForm.tsx) skal brukes for å sende data til serveren
- [`zod`](https://zod.dev/) skal brukes for å validere dataene

Når et nytt gjøremål er lagret så må man få oppdatert UIet. Med NextJS så kan man f.eks bruke [`revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath).

Komponentene [Input](./src/components/ui/input.tsx) og [Textarea](./src/components/ui/textarea.tsx) ligger klar til bruk.

<details>
  <summary>Hint 1: Hvordan bruke FormData</summary>
  <p>
    <pre>
      <code>
      function addTodo(formData: FormData) {
        const rawFormData = {
          title: formData.get("title"),
          description: formData.get("description"),
        };
      }
      </code>
    </pre>
  </p>
</details>
<details>
  <summary>Hint 2: Hvordan bruke zod for å validere FormData</summary>
  <p>
    <pre>
      <code>
        function addTodo(formData: FormData) {
          const rawFormData = {
            title: formData.get("title"),
            description: formData.get("description"),
          };
          const createTodoSchema = z.object({
            title: z.string().min(1),
            description: z.string().nullish(),
          });
          try {
            const validTodo = createTodoSchema.parse(rawFormData);
          } catch (error) {}
        }
      </code>
    </pre>
  </p>
</details>
<details>
  <summary>Hint 3: En ny måte å gjøre form submits på</summary>
  <p>Bruk en <i>Server Function</i> for å gjøre form submit</p>
  <p><a href="https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-function">Dokumentasjon</a></p>
</details>
<details>
  <summary>Hint 4: En ny måte å hente form status på</summary>
  <p>Bruk <code>useFormStatus</code> for å sette <code>disabled</code> på lagre-knappen</p>
  <p><a href="https://react.dev/reference/react-dom/components/form#display-a-pending-state-during-form-submission">Dokumentasjon</a></p>
</details>

---

### Oppgave 4: Bedre UX med Suspense

På grunn av ondsinnede skapninger i back-end så tar det ufattelig lang tid å hente listen med gjøremål fra serveren.
Dette kan vi dessverre ikke gjøre noe med så da må vi bare jobbe med det vi har.
Per nå så får vi ingenting tilbake fra serveren før alle gjøremål er ferdig behandlet (som i rendret på server). Vi er utolmodige mennesker og vil ha visuell feedback med en gang!

I React så finnes det en komponent som heter [Suspense](https://react.dev/reference/react/Suspense). Denne lar deg vise en fallback mens man venter på at det som skal rendres inne i Suspense er klart for å vises.

I denne oppgaven skal du bruke Suspense til å forbedre den opplevde tregheten i Tudlu.

Her er noen krav for denne featuren:

- Skjemaet for å registrere en nt nytt gjøremål skal vises selv om man venter på svar for å hente alle gjøremålene.
- Mens man venter på å få gjøremålene fra serveren så skal det vises en liste med gjøremål-skjelett. Det finnes allerede en komponent [TodoListSkeleton](./src/components/todoList/todoListSkeleton.tsx) som du kan bruke.

---

### Oppgave 5: Endre status på et gjøremål + optimistisk UI

I denne oppgaven skal du legge til en feature for å endre statusen på et gjøremål (gjort / ikke gjort).

Her er noen krav for denne featuren:

- Hvert gjøremål i listen skal vise en indikasjon på status
- Man skal lett kunne endre statusen på et gjøremål
- UIet skal oppdateres med en gang man har endret status til å reflektere den nye statusen. Til dette skal man bruke [useOptimistic](https://react.dev/reference/react/useOptimistic).
- Ved oppdateringsfeil skal UIet vise den faktiske statusen på gjøremålet.

<details>
  <summary>Hint 1: Hvordan oppdatere et enkelt felt på en <code>todo</code> mot databasen</summary>
  <p>
    <pre>
      <code>
        db.todo.update({
          where: {
            id,
          },
          data: {
            done,
          },
        });
      </code>
    </pre>
  </p>
</details>
<details>
  <summary>Hint 2: <q>An optimistic state update occurred outside a transition or action</q></summary>
  <p>Bruk <code><a href="https://react.dev/reference/react/useTransition">useTransition</a></code></p>
</details>

---

### Oppgave 6: Endre tittel på et gjøremål + optimistisk UI

I denne oppgaven skal du legge til en feature for å endre tittelen på et gjøremål.

Her er noen krav for denne featuren:

- Det skal være to moduser for tittelen på et gjøremål: visningsmodus og redigeringsmodus.
- UIet skal oppdateres med en gang man har endret tittelen: man skal med en gang gå til visningsmodus og den nye tittelen skal vises. For å få til dette skal man bruke [useOptimistic](https://react.dev/reference/react/useOptimistic).
- Ved oppdateringsfeil skal UIet vise den faktiske tittelen på gjøremålet.
- Bruk `onSubmit` for å oppdatere UI og lagre ny tittel i databasen.

<details>
  <summary>Hint 1: <q>An optimistic state update occurred outside a transition or action</q></summary>
  <p>Bruk <code><a href="https://react.dev/reference/react/useTransition">useTransition</a></code></p>
</details>
<details>
  <summary>Hint 2: "Hjelp! UI-et oppdateres ikke med en gang!"</summary>
  Metoden som oppdaterer modusen for tittelen skal ikke være inne i <code>useTransition</code>.
</details>

## Ressurser

- [Demystifying React Server Components](https://demystifying-rsc.vercel.app/)
- [NextJs Server and Client Composition Patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
