---
id: i02
kind: insight
title: "Минимальная проверка"
minutes: 3
---

# Минимальная проверка

Даже без библиотеки сужение пишется явно. Схема вроде Valibot делает то же самое и возвращает output-тип.

```ts
type User = { id: string };

function parseUser(raw: unknown): User {
  if (typeof raw !== 'object' || raw === null || !('id' in raw)) {
    throw new Error('invalid user');
  }
  if (typeof raw.id !== 'string') throw new Error('invalid id');
  return { id: raw.id };
}
```

Не тащите в состояние весь сырой объект через `as User`: лишние и кривые поля останутся.

Коротко: _сначала проверка, потом присваивание в состояние_.
