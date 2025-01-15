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

I denne oppgaven skal du bruke litt tid på å utforske hvordan klient-komponenter og server-komponenter blir rendret og brukt i applikasjonen.

- Hva rendres på server?
- Hva rendres på klient?
- Hvordan brukes klient-komponenter og server-komponenter om hverandre?
- Hva skjer hvis du f.eks prøver å bruke `useState` i en server-komponent?
