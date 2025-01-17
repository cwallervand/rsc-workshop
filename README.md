# React Server Components workshop - Todo App

## Workshop beskrivelse

Med React 19 innføres en av de mest spennende nyhetene i React på lang tid: React Server Components (RSCs).

"Hva er React Server Components?" spør du kanskje. Veldig kort fortalt kan RSCs sees på som server-side rendering (SSR) på steroider.

Litt mindre kort fortalt kan RSCs selv hente data og rendres i sin helhet på serveren. Den produserte HTMLen fra komponenten blir så streamet til klienten hvor den flettes automagisk inn i komponent-treet 🤯

"Hva er så fordelene med dette? Hvordan skiller det seg fra måten vi skrev komponenter på tidligere? Hvorfor skal jeg bry meg?". Du stiller mange spørsmål.

I løpet av denne workshopen så kommer du til å bli litt klokere på alt dette. Vi kommer til å starte med en presentasjon på en liten halvtime før du selv skal få lov til å bygge en React-applikasjon som bruker React Server Components.

## Oppsett

Hvis du har Docker så kan du initialisere applikasjonen i en dev container. Alternativt så kan du initialisere applikasjonen manuelt.

### Manuelt

1. `npm i`
2. `npm run db:generate`
3. `npm run db:seed`

### Med dev container (Docker)

## Oppgaver

### Oppgave 1: Hello Server Component!

```
git checkout task-1
```

I denne oppgaven skal du utforske litt hvordan klient- og server-komponenter blir rendret og hvordan komposisjon kan gjøres.

Start applikasjonen med `npm run dev` og [åpne den i nettleseren](http://localhost:3000).

Åpne filen [src/app/page.tsx](./src/app/page.tsx) og utforsk hvordan de forskjellige komponentene oppfører seg.
Akkurat nå er det kun en enkelt komponent som er i bruk; [ServerComponent](./src/components/serverComponent.tsx).

- Hvor kjøres / rendres komponenten? Se i loggene på server og på klient.
- Er den med innkludert i JS-bundle på klienten?
- Hvordan brukes klient-komponenter og server-komponenter om hverandre?
- Hva skjer hvis du f.eks prøver å bruke `useState` i en server-komponent?

Fjern kommentarene fra de andre komponentene (gjerne en etter en) og utforsk videre.

### Oppgave 2: Refaktorer TodosWidget til å være en server komponent

```
git checkout task-2
```

Fra og med denne opgpaven så skal det videreutvikles en TODO app. Noe funksjonalitet er allerede på plass, men akkurat nå så er dette en ganske ubrukelig TODO-app da den bare lister ut noen TODO-er uten at man kan gjøre noe med de.
Dette skal vi fikse etter hvert, men akkurat nå skal du fokusere på å refaktorere komponenten [TodosWidget](./src/components/todoList/todosWidget.tsx) til å være en server komponent.

Det er allerede satt opp en database (SQLite) som er populert med noen TODO-er.
Prisma er brukt som ORM og det finnes allerede en definert `Todo` type. Definisjonen er i [schema.prisma](./prisma/schema.prisma).

TODO-er kan hentes fra databasen slik:

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

### Oppgave 3: Opprette en ny TODO

```
git checkout task-3
```

I denne oppgaven så skal det implementeres funksjonalitet for å opprette en ny TODO.

Her er noen krav for denne featuren:

- En TODO må ha en tittel
- En TODO kan ha en beskrivelse
- Mens det skrives til databasen så skal lagre-knappen disables.
- [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) skal brukes for å ta i mot dataene som blir sendt til serveren
- [`zod`](https://zod.dev/) skal brukes for å validere dataene
- Det skal legges til støtte for feilhåndtering, men feilhåndtering skal ikke håndteres i denne oppgaven

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
  <summary>Hint 2: Hvordan bruke <code>zod</code> for å validere FormData</summary>
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
  <summary>Hint 3: Hvordan bruke Server Functions til å gjøre en form submit</summary>
  <p>Bruk en <i>Server Function</i> for å gjøre form submit</p>
  <p><a href="https://react.dev/reference/react-dom/components/form#handle-form-submission-with-a-server-function">Dokumentasjon</a></p>
</details>
<details>
  <summary>Hint 4: En ny måte å hente status på form status</summary>
  <p>Bruk <code>useFormStatus</code> for å sette <code>disabled</code> på lagre-knappen</p>
  <p><a href="https://react.dev/reference/react-dom/components/form#display-a-pending-state-during-form-submission">Dokumentasjon</a></p>
</details>

### Oppgave 4: Bedre UX med Suspense

Ppå grunn av ondsinnede skapninger i back-end så tar det ufattelig lang tid å hente listen med TODO-er fra serveren.
Dette kan vi dessverre ikke gjøre noe med så da må vi bare jobbe med det vi har.
Per nå så får vi ingenting tilbake fra serveren før alle TODO-er er ferdig behandlet (rendret på server). Vi er utolmodige mennesker og vil ha visuell feedback med en gang!

I React så finnes det en komponent som heter [Suspense](https://react.dev/reference/react/Suspense). Denne lar deg vise en fallback mens man venter på at det som skal rendres inne i Suspense er klart for å vises.

Her er noen krav for denne featuren:

- I denne oppgaven skal du bruke Suspense til å forbedre den opplevde tregheten i TODO-appen.
- Skjemaet for å registrere en ny TODO skal vises selv om man venter på svar for å hente alle TODO-ene.
- Mens man venter på å få TODO-ene så skal det vises en liste med TODO-skjelett. Det finnes allerede en komponent [TodoListSkeleton](./src/components/todoList/todoListSkeleton.tsx) som du kan bruke.

### Oppgave 5: Endre status på en TODO + optimistisk UI

I denne oppgaven skal du legge til en feature for å endre statusen på en TODO (gjort / ikke gjort).

Her er noen krav for denne featuren:

- Hver todo skal vise en indikasjon på status
- Man skal lett kunne endre statusen på en TODO
- UIet skal oppdateres med en gang man har endret status til å reflektere den nye statusen. Til dette skal man bruke [useOptimistic].(https://react.dev/reference/react/useOptimistic)
- Ved oppdateringsfeil skal UIet vise den faktiske statusen på TODO-en.
