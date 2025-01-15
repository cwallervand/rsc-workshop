# React Server Components workshop - Todo App

## Oppsett

Hvis du har Docker så kan du initialisere applikasjonen i en Web Container. Alternativt så kan du initialisere applikasjonen manuelt.

### Manuelt

1. `npm ci`
2. `npm run db:generate`
3. `npm run db:seed`

### Med web container (Docker)

## Workshop beskrivelse

Med React 19 innføres en av de mest spennende nyhetene i React på lang tid: React Server Components (RSCs).

"Hva er React Server Components?" spør du kanskje. Veldig kort fortalt kan RSCs sees på som server-side rendering (SSR) på steroider.

Litt mindre kort fortalt kan RSCs selv hente data og rendres i sin helhet på serveren. Den produserte HTMLen fra komponenten blir så streamet til klienten hvor den flettes automagisk inn i komponent-treet 🤯

"Hva er så fordelene med dette? Hvordan skiller det seg fra måten vi skrev komponenter på tidligere? Hvorfor skal jeg bry meg?". Du stiller mange spørsmål.

I løpet av denne workshopen så kommer du til å bli litt klokere på alt dette. Vi kommer til å starte med en presentasjon på en liten halvtime før du selv skal få lov til å bygge en React-applikasjon som bruker React Server Components.

## Oppgaver

### Oppgave 1: Hello Server Component!

```
git checkout task-1
```

I denne oppgaven skal du utforske litt hvordan klient- og server-komponenter blir rendret og hvordan komposisjon kan gjøres.

Start applikasjonen med `npm run dev` og [åpne den i nettleseren](http://localhost:3000). Anbefaler å bruke en Chrome-baseret nettleser for godt utviklerverktøy.

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

TODO-er kan hentes fra databasen slik:

```ts
import { db } from "~/server/db";

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
  <p><code>'user server';</code></p>
</details>
<details>
  <summary>Hint 4</summary>
  <p>Det kan være en god ide å ha server-funksjoner samlet i en egen fil.</p>
</details>
