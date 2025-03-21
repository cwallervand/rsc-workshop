# Oppgave 1: Hello Server Component!

```
git checkout task-1
```

I denne oppgaven skal du utforske litt hvordan klient- og server-komponenter blir rendret og hvordan komposisjon kan gjøres.
Ha i bakhodet at applikasjonen er rendret på server på page request, det gjelder også komponentene som er marker med `use client`.

Start applikasjonen med `npm run dev` og [åpne den i nettleseren](http://localhost:3000).

Åpne filen [src/app/page.tsx](./src/app/page.tsx) og utforsk hvordan de forskjellige komponentene oppfører seg.
Akkurat nå er det kun komponentene [`<ServerComponent />`](./src/components/serverComponent.tsx) og [`<ClientComponent />`](./src/components/clientComponent.tsx) som er i bruk.

- Hvor kjøres / rendres komponenten? Se i loggene på server og på klient.
- Er den med innkludert i JS-bundle på klienten?
- Hvordan brukes klient-komponenter og server-komponenter om hverandre?
- Hva skjer hvis du f.eks prøver å bruke `useState` i en server-komponent?

Fjern kommentarene fra de andre komponentene (gjerne en etter en) og utforsk videre.
