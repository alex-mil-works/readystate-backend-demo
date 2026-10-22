---
id: i01
kind: insight
title: "Совместима форма"
minutes: 3
---

# Совместима форма

Два типа с разными именами совместимы, если у значения есть нужные поля. Имя `interface User` само по себе ничего не запирает.

```ts
type Point = { x: number; y: number };
function draw(p: Point) {
  return p.x + p.y;
}
const dot = { x: 1, y: 2, z: 9 };
draw(dot);
```

`dot` шире `Point`, но поля `x` и `y` на месте, поэтому вызов законен.

Коротко: _проверяется структура, не номинальный штамп_.
