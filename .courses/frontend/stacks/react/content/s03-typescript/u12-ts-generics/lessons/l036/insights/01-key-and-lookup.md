---
id: i01
kind: insight
title: "Ключ и значение связаны"
minutes: 3
---

# Ключ и значение связаны

Если ключ и объект независимы, возврат становится union всех полей. Связка `K extends keyof T` заставляет результат быть типом **этого** поля.

```ts
function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

`prop(user, 'id')` имеет тип поля `id`, не `string | number | undefined` наугад.

Коротко: _ключ — не строка вообще, а имя из этого объекта_.
