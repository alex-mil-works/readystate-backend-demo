---
id: i01
kind: insight
title: "Значение принадлежит state"
minutes: 3
---

# Значение принадлежит state

Controlled input показывает `value` и в `onChange` кладёт `event.currentTarget.value` в state. Экран после рендера совпадает с данными, а не с тем, что браузер помнит сам.

```jsx
<input
  value={query}
  onChange={(event) => setQuery(event.currentTarget.value)}
/>
```

`value` без `onChange` замораживает поле. `defaultValue` — другой режим: браузер хранит текст, React задаёт только старт.

Коротко: _controlled значит «источник правды в state на каждый кадр»_.
