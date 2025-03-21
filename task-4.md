# Oppgave 4: Bedre UX med Suspense

```
git checkout task-4
```

På grunn av ondsinnede skapninger i back-end så tar det ufattelig lang tid å hente listen med gjøremål fra serveren.
Dette kan vi dessverre ikke gjøre noe med så da må vi bare jobbe med det vi har.
Per nå så får vi ingenting tilbake fra serveren før alle gjøremål er ferdig behandlet (som i rendret på server). Vi er utolmodige mennesker og vil ha visuell feedback med en gang!

I React så finnes det en komponent som heter [`<Suspense />`](https://react.dev/reference/react/Suspense). Denne lar deg vise en fallback mens man venter på at det som skal rendres inne i Suspense er klart for å vises.

I denne oppgaven skal du bruke Suspense til å forbedre den opplevde tregheten i Tudlu.

Her er noen krav for denne featuren:

- Skjemaet for å registrere et nytt gjøremål skal vises selv om man venter på svar for å hente alle gjøremålene.
- Mens man venter på å få gjøremålene fra serveren så skal det vises en liste med gjøremål-skjelett. Det finnes allerede en komponent [`<TodoListSkeleton />`](./src/components/todoList/todoListSkeleton.tsx) som du kan bruke.

Nye konsepter du trenger å vite om i denne oppgaven er:

- [`<Suspense />`](https://react.dev/reference/react/Suspense) - _Lar deg rendre en fallback inntil alle barn er ferdig lastet_
