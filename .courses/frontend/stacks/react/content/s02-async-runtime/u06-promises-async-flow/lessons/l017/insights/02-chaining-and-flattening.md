---
id: i02
kind: insight
title: then всегда даёт новый промис
minutes: 3
---

# then всегда даёт новый промис

`then` / `catch` / `finally` не мутируют исходный промис. Они возвращают новый.

`return` из колбэка становится value следующего шага. Если вернуть промис, цепочка **ждёт и разворачивает** его: вложенного `Promise<Promise<T>>` в следующем `then` нет.

```js
Promise.resolve(1)
  .then((n) => n + 1)
  .then((n) => Promise.resolve(n * 2));
// следующий then получит 4, не объект Promise
```

Нет `return` — дальше приходит `undefined`. `throw` или rejected-промис уводят цепочку в rejection, пока её не поймает `catch`.
