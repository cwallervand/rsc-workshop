# Oppgave 5: Endre tittel på et gjøremål + optimistisk UI

```
git checkout task-5
```

I denne oppgaven skal du legge til en feature for å endre tittelen på et gjøremål.

Her er noen krav for denne featuren:

- Bruk `onSubmit` for å oppdatere UI og lagre ny tittel i databasen.
- Det skal være to moduser for tittelen på et gjøremål: visningsmodus og redigeringsmodus.
- UI-et skal oppdateres med en gang man har endret tittelen (selv om man ikke har fått svar fra server): man skal med en gang gå til visningsmodus og den nye tittelen skal vises. For å få til dette må man blant annet bruke [useOptimistic](https://react.dev/reference/react/useOptimistic).
- Ved oppdateringsfeil skal UI-et vise den faktiske tittelen på gjøremålet.

Komponenten [`<Pencil />`](./src/components/icons/pencil.tsx) kan for eksempel brukes til å toggle mellom visningsmodus og redigeringsmodus.

<details>
  <summary>Hint 1: Ny komponent</summary>
  <p>Det vil sikkert være ryddig å ha funksjonaliteten for tittelen i en egen komponent ;)</p>
</details>
<details>
  <summary>Hint 2: <q>An optimistic state update occurred outside a transition or action</q></summary>
  <p>Bruk <code><a href="https://react.dev/reference/react/startTransition">startTransition</a></code></p>
</details>
<details>
  <summary>Hint 3: "Hjelp! UI-et oppdateres ikke med en gang!"</summary>
  Metoden som oppdaterer modusen for tittelen skal ikke være inne i <code>startTransition</code>.
</details>
<details>
  <summary>Hint 4: "Hjelp! UI-et oppdateres fortsatt ikke!"</summary>
  Bruker du tilfeldigvis <code>action</code> på formet ditt?
</details>
