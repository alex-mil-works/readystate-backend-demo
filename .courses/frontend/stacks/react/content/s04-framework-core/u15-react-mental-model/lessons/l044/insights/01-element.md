---
id: i01
kind: insight
title: "Элемент — это описание"
minutes: 3
---

# Элемент — это описание

JSX не создаёт DOM в момент записи. Он превращается в вызов, который возвращает обычный объект: тип, props, дети.

```jsx
const element = <button type="button">Save</button>;
// { type: 'button', props: { type: 'button', children: 'Save' } }
```

Пока React не применит это описание к документу, кнопки на странице нет.

Коротко: _элемент описывает UI, DOM — следствие_.
