---
id: i02
kind: insight
title: "Зелёная сборка — не валидация данных"
minutes: 3
---

# Зелёная сборка — не валидация данных

Компилятор видит только то, что вы ему сказали. `JSON.parse`, `response.json()`, `localStorage` и DOM для него — `any` или `unknown`, пока вы сами не сузите значение.

```ts
const raw = JSON.parse(text) as User;
raw.id.toUpperCase();
```

`as User` — это **утверждение**, не проверка. Если в JSON нет `id`, ошибка будет уже в runtime.

Коротко: _TypeScript ловит несогласованность кода, а не форму ответа сервера_.
