---
id: i02
kind: insight
title: async/await — синтаксис над промисами
minutes: 4
---

# async/await — синтаксис над промисами

`async function` всегда возвращает промис. `return 1` становится `Promise.resolve(1)`. `throw` — rejection.

`await` приостанавливает **только эту** функцию: fulfilled отдаёт value, rejected бросает reason в ближайший `try/catch`.

```js
async function load() {
  try {
    const data = await fetchJson();
    return data.id;
  } catch {
    return null;
  }
}
```

Вызывающий всё равно получает промис сразу. `await` не делает функцию синхронной снаружи.

## Ловушки

1. Забытый `await`: переменная хранит промис, а не данные.
2. `try/catch` без `await` не ловит rejection.
3. Независимые операции, которые ждут друг друга через цепочку `await`, можно стартовать параллельно и собрать `Promise.all`.
