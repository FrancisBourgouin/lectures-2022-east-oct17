# WTH

## useEffect

Handle side effects in JS (Asynchronous code, Event Listeners)

- Accepts a callback
- Will run the content of the callback
- Will put the returned fct of the callback on hold

```jsx
useEffect(() => {
  console.log("Run now");

  return () => console.log("Will run when component is re-rendered");
});
```

- Can take as a second parameter a list of variables to watch for
- Careful! Not a deep equality

```jsx
useEffect(() => {
  console.log("That value changed");
}, [someValue]);
```

- If there is no variables in the list, it will only trigger on mount

```jsx
useEffect(() => {
  console.log("Will show once** (on mount)");
}, []);
```
