---
id: i01
kind: insight
title: 404 — это не rejection
minutes: 3
---

# 404 — это не rejection

`fetch` отклоняет промис, когда запрос **не состоялся**: сеть, CORS-блок, неверный URL на уровне API, abort. Ответ `404` или `500` — это обычный fulfilled `Response`.

Смотрите `response.ok` (статус 200–299) или `response.status` сами.

```js
const res = await fetch('/api/user');
if (!res.ok) throw new Error(`HTTP ${res.status}`);
const user = await res.json();
```

`res.json()` — **второй** промис. Тело ещё нужно прочитать. Повторно прочитать тот же body нельзя: поток уже потреблён.

Коротко: _промис fetch говорит «ответ получен или запрос сорвался», а не «сервер согласен»_.
