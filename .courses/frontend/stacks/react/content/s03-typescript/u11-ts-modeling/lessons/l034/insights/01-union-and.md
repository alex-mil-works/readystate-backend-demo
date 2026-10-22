---
id: i01
kind: insight
title: "Или и и"
minutes: 3
---

# Или и и

`A | B` — значение подходит под один из типов. Читать можно только общее. `A & B` — значение обязано иметь поля обоих.

```ts
type Id = string | number;

function text(id: Id) {
  return typeof id === 'string' ? id.toUpperCase() : String(id);
}
```

До проверки `id.toUpperCase()` — ошибка: у `number` этого метода нет.

Коротко: _union сужают, intersection складывают_.
