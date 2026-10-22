---
id: i01
kind: insight
title: Как промис становится rejected
minutes: 3
---

# Как промис становится rejected

Обычные пути:

1. `reject(reason)` в executor.
2. `throw` внутри executor — промис отклоняется этим значением.
3. `throw` или возврат rejected-промиса внутри `then`.

`catch`, который сам не бросает, **восстанавливает** цепочку: следующий `then` снова fulfilled.

Необработанный rejection не рвёт текущий стек. Он всплывает позже как unhandled rejection. Код сразу после `promise.then(...)` уже выполнился.

Коротко: _ошибка промиса — это reason, а не синхронный throw у вызывающего, пока тот не сделал `await`_.
