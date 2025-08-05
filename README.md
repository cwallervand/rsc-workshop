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

- Oppgave 1: Gjør om TodosWidget til å være en server komponent

  `git checkout task-1`

- Oppgave 2: Opprette et nytt gjøremål

  `git checkout task-2`

- Oppgave 3: Bedre UX med Suspense

  `git checkout task-3`

- Oppgave 4: Endre status på et gjøremål + optimistisk UI

  `git checkout task-4`

- Oppgave 5: Endre tittel på et gjøremål + optimistisk UI

  `git checkout task-5`

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
