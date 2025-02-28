# Oppgave 2: Gjør om TodosWidget til å være en server komponent

Hvis du ikke allerede har gjort det så må du gå gjennom [Oppsett](./README.md#oppsett) av applikasjonen.

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
