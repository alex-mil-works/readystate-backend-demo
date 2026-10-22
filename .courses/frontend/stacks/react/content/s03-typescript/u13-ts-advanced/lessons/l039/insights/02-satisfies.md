---
id: i02
kind: insight
title: "satisfies не расширяет"
minutes: 3
---

# `satisfies` не расширяет

Аннотация `const routes: Record<string, string>` делает ключи просто `string`. Автодополнение по `home` пропадает.

`satisfies` проверяет, что выражение подходит под тип, и **оставляет** узкий тип литерала.

```ts
const routes = {
  home: '/',
  lesson: '/courses/:id',
} satisfies Record<string, `/${string}`>;
routes.home;
```

Коротко: _аннотация задаёт тип переменной, `satisfies` только проверяет_.
