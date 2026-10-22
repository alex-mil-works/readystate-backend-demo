---
id: i02
kind: insight
title: "Событие конкретного элемента"
minutes: 3
---

# Событие конкретного элемента

Не пишите `event: any`. У input и у кнопки разные `currentTarget`.

```tsx
function onName(event: React.ChangeEvent<HTMLInputElement>) {
  const value = event.currentTarget.value;
}
```

Клик по кнопке — `React.MouseEvent<HTMLButtonElement>`. Тип элемента и есть constraint.

Коротко: _событие типизируют элементом, который его шлёт_.
