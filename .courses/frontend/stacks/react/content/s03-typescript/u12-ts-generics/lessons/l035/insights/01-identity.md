---
id: i01
kind: insight
title: "Связь входа и выхода"
minutes: 3
---

# Связь входа и выхода

Без generic функция «верни первый элемент» вынуждена вернуть `unknown` или соврать через `any`. Параметр типа запоминает элемент массива.

```ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}
const id = first([{ id: 'a' }]);
```

`id` выводится как `{ id: string } | undefined`, не как `any`.

Коротко: _generic связывает аргумент и результат, а не отключает проверку_.
