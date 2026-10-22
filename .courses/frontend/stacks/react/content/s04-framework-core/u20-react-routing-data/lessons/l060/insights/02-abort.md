---
id: i02
kind: insight
title: "Отмена прошлого запроса"
minutes: 3
---

# Отмена прошлого запроса

Эффект, который грузит урок по id из URL, обязан отменить прошлый запрос, когда id сменился или экран ушёл.

```jsx
useEffect(() => {
  const ctrl = new AbortController();
  loadLesson(id, ctrl.signal).then(setLesson).catch(handle);
  return () => ctrl.abort();
}, [id]);
```

Иначе медленный ответ старого id запишет чужой урок. Игнор `setState` после unmount не отменяет сеть.

Коротко: _cleanup запроса — abort, не пустой catch_.
