---
id: i02
kind: insight
title: "Тип из функции"
minutes: 3
---

# Тип из функции

Если функция уже описывает результат, не дублируйте его вручную.

```ts
async function loadUser() {
  return { id: '1', name: 'Ann' };
}
type Loaded = Awaited<ReturnType<typeof loadUser>>;
```

`ReturnType` берёт возврат. `Awaited` снимает `Promise`. Параметры читает `Parameters<typeof fn>`.

Коротко: _тип API выводят из реализации, когда реализация и есть контракт_.
