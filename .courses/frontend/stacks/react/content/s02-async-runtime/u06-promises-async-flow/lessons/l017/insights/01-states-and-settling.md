---
id: i01
kind: insight
title: Три состояния и один исход
minutes: 3
---

# Три состояния и один исход

`Promise` хранит **результат будущей операции**. Состояния: `pending`, `fulfilled` (есть value), `rejected` (есть reason).

Переход pending → settled случается **один раз**. Повторный `resolve` или `reject` в том же executor игнорируется.

```js
const p = new Promise((resolve, reject) => {
  resolve(1);
  reject(new Error('late')); // ignored
});
```

Коротко: _промис — одноразовый контейнер результата, не канал событий_.

## В проде

1. Повторный запрос — **новый** промис, а не «перезапуск» старого.
2. Несколько `then` читают одно и то же settled-значение.
3. Код executor до `resolve` всё ещё синхронный и блокирует стек.
