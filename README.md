# React Server Components workshop - Gjøremålsappen Tudlu

## Workshop beskrivelse

Med React 19 innføres en av de mer spennende nyhetene i React på lang tid: React Server Components (RSCs).

"Hva er React Server Components?" spør du kanskje. Veldig kort fortalt kan RSCs sees på som server-side rendering (SSR) på steroider.

Litt mindre kort fortalt kan RSCs selv hente data og rendres i sin helhet på serveren (eller i et byggsteg).
Den produserte HTMLen fra komponenten blir så sendt til klienten hvor den flettes automagisk inn i komponent-treet 🤯

"Hva er så fordelene med dette? Hvordan skiller det seg fra måten vi skrev komponenter på tidligere? Hvorfor skal jeg bry meg?". Du stiller mange spørsmål.

I løpet av denne workshopen så kommer du til å bli litt klokere på alt dette.
Vi vil bidra med litt faglig input, men vi synes at man lærer best med en "hands on" tilnærming så du skal få lov til å bruke mesteparten av tiden din på å utvikle gjøremålsappen Tudlu.

Denne workshopen passer best for deg som har erfaring med React.

## Oppsett

Du kan initialisere applikasjonen [manuelt](#manuelt) eller, hvis du har [Docker](https://www.docker.com/), så kan applikasjonen initialiseres [med dev container](#med-dev-container-docker).

### Manuelt

1. `npm i` - _Installerer nødvendige pakker_
2. `npm run db:generate` - _Setter opp databasen og populerer den med data. Ved spørsmål om navn på migreringen kan du bare trykke enter_
3. `npm run dev` - _Dette gjøres i hver branch for å starte applikasjonen_
4. [Åpne applikasjonen](http://localhost:3000)

### Med dev container (Docker)

_PS! Når du bruker dev containers er det enklest å kjøre kommandoer fra VSCode sin terminal fremfor terminal, iTerm, Hyper osv._

1. Installer og kjør [Docker](https://www.docker.com/products/docker-desktop/)
2. Installer [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Åpne prosjektet i Dev Container (kommer en liten popup i VSCode)
4. `npm run dev` - _Dette gjøres i hver branch for å starte applikasjonen_
5. [Åpne applikasjonen](http://localhost:3000)

## Oppgaver

Det er lagt opp til at du starter med blanke ark i en ny branch for hver oppgave. I hver branch så kommer du til å ha det du trenger av funksjonalitet og komponenter for å løse oppgaven. Hvis du heller vil bruke dine egne komponenter og kode gjennom hele workshopen så må du gjerne gjøre det.

Hvis du i løpet av workshopen står fast eller bare er nysgjerrig på hvordan vi har løst en spesifikk oppgave så ligger vår implementasjon av Tudlu i `main` branchen.

Detaljer om hver oppgave finner du i en egen README-fil i hver enkelt branch. Dette er oppgavene vi har lagt opp:

- Oppgave 1: Hello Server Component! `git checkout task-1`
- Oppgave 2: Gjør om TodosWidget til å være en server komponent `git checkout task-2`
- Oppgave 3: Opprette et nytt gjøremål `git checkout task-3`
- Oppgave 4: Bedre UX med Suspense `git checkout task-4`
- Oppgave 5: Endre status på et gjøremål + optimistisk UI `git checkout task-5`
- Oppgave 6: Endre tittel på et gjøremål + optimistisk UI `git checkout task-6`

### Oppgave 1: Hello Server Component!

```
git checkout task-1
```

I denne oppgaven skal du utforske litt hvordan klient- og server-komponenter blir rendret og hvordan komposisjon kan gjøres.
Ha i bakhodet at applikasjonen er rendret på server på page request, det gjelder også komponentene som er marker med `use client`.

Start applikasjonen med `npm run dev` og [åpne den i nettleseren](http://localhost:3000).

Åpne filen [src/app/page.tsx](./src/app/page.tsx) og utforsk hvordan de forskjellige komponentene oppfører seg.
Akkurat nå er det kun komponentene [ServerComponent](./src/components/serverComponent.tsx) og [ClientComponent](./src/components/clientComponent.tsx) som er i bruk.

- Hvor kjøres / rendres komponenten? Se i loggene på server og på klient.
- Er den med innkludert i JS-bundle på klienten?
- Hvordan brukes klient-komponenter og server-komponenter om hverandre?
- Hva skjer hvis du f.eks prøver å bruke `useState` i en server-komponent?

Fjern kommentarene fra de andre komponentene (gjerne en etter en) og utforsk videre.

---

### Oppgave 2: Gjør om TodosWidget til å være en server komponent

Hvis du ikke allerede har gjort det så må du gå gjennom [Oppsett](#oppsett) av applikasjonen.

```
git checkout task-2
```

Fra og med denne oppgaven så skal gjøremålsapplikasjonen Tudlu videreutvikles. Noe funksjonalitet er allerede på plass, men akkurat nå så er dette en ganske ubrukelig gjøremålsapplikasjon da den bare lister ut noen gjøremål (Tudluer) uten at man kan gjøre noe med de.
Dette skal vi fikse etter hvert, men akkurat nå skal du fokusere på å gjøre om komponenten [TodosWidget](./src/components/todoList/todosWidget.tsx) til å bli en server komponent; alt av klient-relaterte ting i komponenten skal bort.

Nye konsepter du trenger å vite om i denne oppgaven er:

- [_Server Functions_](https://react.dev/reference/rsc/server-functions) - _Server funksjoner gjør det mulig for (klient)komponenter å kalle på asynkrone funksjoner som utføres på serveren_
- Direktivet [`use server`](https://react.dev/reference/rsc/use-server) - _Brukes for å markere at server-side funksjonalitet kan kalles fra klienten_
- [Asynkrone komponenter med Server Components](https://react.dev/reference/rsc/server-components#async-components-with-server-components) - _Server-komponenter kan være asynkrone_

Det er satt opp en database ([SQLite](https://www.sqlite.org/)) som er populert med noen gjøremål (`Todo`).
Disse gjøremålene skal du hente ut fra databasen og vise i Tudlu-appen.
Til å gjøre CRUD-operasjoner mot databasen så har vi satt opp [Prisma ORM (v5)](https://www.prisma.io/docs/orm). Det er modellen `Todo` man bruker mot databasen. Definisjonen av en `Todo` finner du i [schema.prisma](./prisma/schema.prisma).

Funksjoner som utfører CRUD-operasjoner (disse vil være _Server Functions_) skal ligge i filen [serverFunctions](./src/server/serverFunctions.ts).

Gjøremål kan hentes fra databasen slik:

```ts
import { db } from "~/server/db";
import { type Todo } from "@prisma/client";

const todos: Todo[] = await db.todo.findMany();
```

---

### Oppgave 3: Opprette et nytt gjøremål

```
git checkout task-3
```

I denne oppgaven så skal det implementeres funksjonalitet for å opprette et nytt gjøremål. Et gjøremål har en tittel og en valgfri beskrivelse.

Her er noen krav for denne featuren:

- Mens det skrives til databasen så skal lagre-knappen disables. Dette kan man gjøre med den nye hooken [`useFormStatus`](https://react.dev/reference/react-dom/hooks/useFormStatus).
- [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) skal brukes for å ta i mot dataene som blir sendt til serveren.
- Komponenten [`AddTodoForm`](./src/components/addTodoForm.tsx) skal brukes for å sende form-data til serveren.

Når et nytt gjøremål er lagret så må man få oppdatert UIet. Med NextJS så kan man f.eks bruke [`revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath).

Komponentene [Input](./src/components/ui/input.tsx) og [Textarea](./src/components/ui/textarea.tsx) ligger klar til bruk hvis du ønsker å bruke de.

Nye konsepter du trenger å vite om i denne oppgaven er:

- [_Server Functions_ sammen med _Form Actions_](https://react.dev/reference/rsc/server-functions#using-server-functions-with-form-actions)
- [`useFormStatus`](https://react.dev/reference/react-dom/hooks/useFormStatus) - Hook som gir informasjon om status på siste form submit

<details>
  <summary>Hint 1: Hvordan bruke FormData i server-funksjonen</summary>
  <p>
    <pre>
      <code>
      function addTodo(formData: FormData) {
        const todo = {
          title: formData.get("title") as string,
          description: formData.get("description") as string | null,
        };
      }
      </code>
    </pre>
  </p>
</details>
<details>
  <summary>Hint 2: <code>revalidatePath</code></summary>
  <p>
    <pre>
      <code>revalidatePath("/");</code>
    </pre>
  </p>
</details>

---

### Oppgave 4: Bedre UX med Suspense

```
git checkout task-4
```

På grunn av ondsinnede skapninger i back-end så tar det ufattelig lang tid å hente listen med gjøremål fra serveren.
Dette kan vi dessverre ikke gjøre noe med så da må vi bare jobbe med det vi har.
Per nå så får vi ingenting tilbake fra serveren før alle gjøremål er ferdig behandlet (som i rendret på server). Vi er utolmodige mennesker og vil ha visuell feedback med en gang!

I React så finnes det en komponent som heter [`<Suspense>`](https://react.dev/reference/react/Suspense). Denne lar deg vise en fallback mens man venter på at det som skal rendres inne i Suspense er klart for å vises.

I denne oppgaven skal du bruke Suspense til å forbedre den opplevde tregheten i Tudlu.

Her er noen krav for denne featuren:

- Skjemaet for å registrere en nt nytt gjøremål skal vises selv om man venter på svar for å hente alle gjøremålene.
- Mens man venter på å få gjøremålene fra serveren så skal det vises en liste med gjøremål-skjelett. Det finnes allerede en komponent [TodoListSkeleton](./src/components/todoList/todoListSkeleton.tsx) som du kan bruke.

Nye konsepter du trenger å vite om i denne oppgaven er:

- [`<Suspense>`](https://react.dev/reference/react/Suspense) - _Lar deg rendre en fallback inntil alle barn er ferdig lastet_

---

### Oppgave 5: Endre status på et gjøremål + optimistisk UI

```
git checkout task-5
```

I denne oppgaven skal du legge til en feature for å vise og endre statusen på et gjøremål (gjort / ikke gjort).

Her er noen krav for denne featuren:

- Hvert gjøremål i listen skal vise en indikasjon på status
- Man skal lett kunne endre statusen på et gjøremål
- UI-et skal oppdateres med en gang man har endret status (selv om man ikke har fått svar fra server) til å reflektere den nye statusen. Til dette kan man bruke [useOptimistic](https://react.dev/reference/react/useOptimistic).
- Ved oppdateringsfeil skal UI-et vise den faktiske statusen på gjøremålet.

Det er allerede blitt laget en komponent [ToggleTodoStatus](./src/components/todoItem/toggleTodoStatus.tsx) som du kan bygge videre på hvis du ønsker et utgangspunkt. Denne komponeten er i bruk i [TodoItem](./src/components/todoItem/todoItem.tsx).
Ellers er komponenten [`<CheckBadge />`](./src/components/icons/check-badge.tsx) også tilgjengelig.

Nye konsepter du trenger å vite om i denne oppgaven er:

- [`useOptimistic`](https://react.dev/reference/react/useOptimistic) - _En hook som lar deg gjøre optimistiske oppdateringer i UI_

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
  <p>Bruk <code><a href="https://react.dev/reference/react/startTransition">startTransition</a></code></p>
</details>

---

### Oppgave 6: Endre tittel på et gjøremål + optimistisk UI

```
git checkout task-6
```

I denne oppgaven skal du legge til en feature for å endre tittelen på et gjøremål.

Her er noen krav for denne featuren:

- Det skal være to moduser for tittelen på et gjøremål: visningsmodus og redigeringsmodus.
- UI-et skal oppdateres med en gang man har endret tittelen (selv om man ikke har fått svar fra server): man skal med en gang gå til visningsmodus og den nye tittelen skal vises. For å få til dette kan man bruke [useOptimistic](https://react.dev/reference/react/useOptimistic).
- Ved oppdateringsfeil skal UI-et vise den faktiske tittelen på gjøremålet.
- Bruk `onSubmit` for å oppdatere UI og lagre ny tittel i databasen.

Komponenten [`<Pencil />`](./src/components/icons/pencil.tsx) kan for eksempel brukes til å toggle mellom visningsmodus og redigeringsmodus.

<details>
  <summary>Hint 1: <q>An optimistic state update occurred outside a transition or action</q></summary>
  <p>Bruk <code><a href="https://react.dev/reference/react/startTransition">startTransition</a></code></p>
</details>
<details>
  <summary>Hint 2: "Hjelp! UI-et oppdateres ikke med en gang!"</summary>
  Metoden som oppdaterer modusen for tittelen skal ikke være inne i <code>useTransition</code>.
</details>

## Tech stack

- [T3 Stack](https://create.t3.gg/)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [SQLite](https://www.sqlite.org/)
- [Prisma ORM](https://www.prisma.io/orm)

## Ressurser

- [Demystifying React Server Components](https://demystifying-rsc.vercel.app/)
- [NextJs Server and Client Composition Patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
