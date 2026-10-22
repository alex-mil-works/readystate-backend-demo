---
id: i02
kind: insight
title: Отмена через AbortSignal
minutes: 3
---

# Отмена через AbortSignal

`AbortController` отдаёт `signal`. Его передают в `fetch`. `controller.abort()` отклоняет промис с `DOMException`, у которого `name === 'AbortError'`.

Игнорировать результат в `then` — не отмена. Запрос доработает, а поздний `setState` запишет данные уже ушедшего экрана.

```js
const controller = new AbortController();
const res = await fetch(url, { signal: controller.signal });
// на уходе со страницы:
controller.abort();
```

Один `signal` можно отдать нескольким `fetch`. Повторный `abort` безопасен. Для нового запроса нужен **новый** controller: aborted signal уже не «отпускается».

В эффекте React cleanup как раз место для `abort`, иначе гонка двух ответов решается не сетью, а тем, кто последним записал стейт.
