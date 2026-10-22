---
id: i01
kind: insight
title: "Рендер заморожен"
minutes: 3
---

# Рендер заморожен

Каждый рендер получает свои props, state и обработчики. `setState` не переписывает уже идущую функцию. Он просит React посчитать дерево ещё раз.

```jsx
function Counter() {
  const [n, setN] = useState(0);
  function onClick() {
    setN(n + 1);
    console.log(n);
  }
  return <button onClick={onClick}>{n}</button>;
}
```

Лог покажет число этого рендера, даже если клик уже запланировал +1. На экране новое число появится в следующем снимке.

Коротко: _state в обработчике — константа этого рендера_.
