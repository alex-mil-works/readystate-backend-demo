---
id: i01
kind: insight
title: "Тег варианта"
minutes: 3
---

# Тег варианта

У каждого члена union есть общее поле с литералом. После `switch` по этому полю остальные поля становятся известны.

```ts
type Shape =
  | { kind: 'circle'; r: number }
  | { kind: 'rect'; w: number; h: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.r ** 2;
    case 'rect':
      return shape.w * shape.h;
  }
}
```

В ветке `circle` поля `w` нет — и это ошибка компиляции, не сюрприз в UI.

Коротко: _тег делает union исчерпываемым_.
