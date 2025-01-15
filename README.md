# React Server Components workshop - Todo App

## Oppsett

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

## Oppgave 1: Hello Server Component!

I denne oppgaven skal du utforske litt hvordan klient- og server-komponenter blir rendret og hvordan komposisjon kan gjøres.

Start applikasjonen med `npm run dev` og [åpne den i nettleseren](http://localhost:3000). Anbefaler å bruke en Chrome-baseret nettleser for godt utviklerverktøy.

Åpne filen [src/app/page.tsx](./src/app/page.tsx) og utforsk hvordan de forskjellige komponentene oppfører seg.
Akkurat nå er det kun en enkelt komponent som er i bruk; [ServerComponent](./src/components/serverComponent.tsx).

- Hvor kjøres / rendres komponenten? Se i loggene på server og på klient.
- Er den med innkludert i JS-bundle på klienten?
- Hvordan brukes klient-komponenter og server-komponenter om hverandre?
- Hva skjer hvis du f.eks prøver å bruke `useState` i en server-komponent?

Fjern kommentarene fra de andre komponentene (gjerne en etter en) og utforsk videre.
