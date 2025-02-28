# Oppgave 5: Endre status på et gjøremål + optimistisk UI

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
