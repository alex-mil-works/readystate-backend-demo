---
id: i02
kind: insight
title: "Обход ключей"
minutes: 3
---

# Обход ключей

Mapped type проходит по `keyof` и собирает новый тип. Так делают флаги, частичные формы и словари.

```ts
type Flags<T> = { [K in keyof T]: boolean };
type UserFlags = Flags<{ id: string; active: boolean }>;
// { id: boolean; active: boolean }
```

`Record<K, V>` — готовый mapped type: ключи `K`, значения `V`.

Коротко: _mapped type — цикл по ключам на уровне типов_.
