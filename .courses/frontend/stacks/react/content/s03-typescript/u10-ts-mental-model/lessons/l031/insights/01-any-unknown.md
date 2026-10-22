---
id: i01
kind: insight
title: "any против unknown"
minutes: 3
---

# `any` против `unknown`

`any` совместим почти со всем и **глушит** следующую проверку. Ошибка уезжает в runtime. `unknown` тоже значит «не знаю», но читать поля и передавать дальше нельзя, пока тип не сужен.

```ts
function read(input: unknown) {
  if (typeof input === 'string') return input.toUpperCase();
  return '';
}
```

На границе с JSON, `postMessage` и сторонним SDK берите `unknown`, не `any`.

Коротко: _`any` — дыра, `unknown` — дверь с проверкой_.
