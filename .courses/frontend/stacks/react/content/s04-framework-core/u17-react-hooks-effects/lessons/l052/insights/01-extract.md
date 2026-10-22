---
id: i01
kind: insight
title: "Вынести поведение"
minutes: 3
---

# Вынести поведение

Повторяются не JSX-кнопки, а связка: state, подписка, очистка. Её выносят в функцию `useOnline` или `useDebounced`.

```jsx
function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = () => setOn((prev) => !prev);
  return [on, toggle];
}
```

Хук может вызывать другие хуки, потому что сам вызывается из компонента. Обычная утилита без use в имени не должна звать useState.

Коротко: _хук переиспользует поведение, компонент — дерево_.
