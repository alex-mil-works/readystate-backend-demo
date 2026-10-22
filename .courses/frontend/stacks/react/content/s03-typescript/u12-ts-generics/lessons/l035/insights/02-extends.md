---
id: i02
kind: insight
title: "Ограничение extends"
minutes: 3
---

# Ограничение `extends`

Constraint говорит, на что можно опереться внутри. Вызов с неподходящим аргументом не соберётся.

```ts
function pluckId<T extends { id: string }>(value: T): string {
  return value.id;
}
```

Не заменяйте constraint на `any`, чтобы «прошло». Тогда связь типов пропадёт.

Коротко: _`extends` — минимальная форма, которую функция имеет право читать_.
