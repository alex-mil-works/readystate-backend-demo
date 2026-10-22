---
id: i01
kind: insight
title: "Три исхода, не один null"
minutes: 3
---

# Три исхода, не один null

`user === null` не отличает «ещё грузим» от «сервер отказал» и от «пользователя нет». Для экрана нужны явные фазы.

```jsx
if (status === 'pending') return <p>Загрузка…</p>;
if (status === 'error') return <p>{error}</p>;
return <Profile user={user} />;
```

Переход статуса — обычный state. Данные кладут в state только после проверки формы ответа, не через голое утверждение типа.

Коротко: _pending, error и data — разные экраны_.
