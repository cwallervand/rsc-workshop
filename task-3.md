# Oppgave 3: Opprette et nytt gjøremål

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
