---
id: i01
kind: insight
title: "Не копировать форму"
minutes: 3
---

# Не копировать форму

Превью, черновик и патч — не новые модели, а проекции существующей.

```ts
type User = { id: string; name: string; role: string };
type Preview = Pick<User, 'id' | 'name'>;
type Draft = Partial<User>;
```

`Omit<User, 'role'>` убирает поле. Если исходный `User` сменится, проекция сменится вместе с ним.

Коротко: _утилита — ссылка на форму, не второй источник правды_.
