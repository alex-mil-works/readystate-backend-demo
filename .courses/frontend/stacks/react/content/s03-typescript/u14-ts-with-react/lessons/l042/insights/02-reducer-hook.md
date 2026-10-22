---
id: i02
kind: insight
title: "Действие как union"
minutes: 3
---

# Действие как union

Редьюсер — обычная функция. Действия различают тегом, как в прошлом уроке.

```ts
type Action = { type: 'inc' } | { type: 'set'; value: number };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'set':
      return action.value;
  }
}
```

Свой хук возвращает кортеж, если порядок стабилен: `[boolean, () => void]`. Объект — когда полей много и их читают по имени.

Коротко: _тип действия защищает dispatch, тип возврата хука — вызывающего_.
