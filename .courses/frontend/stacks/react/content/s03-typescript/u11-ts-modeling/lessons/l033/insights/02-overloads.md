---
id: i02
kind: insight
title: "Перегрузки видны снаружи"
minutes: 3
---

# Перегрузки видны снаружи

Несколько сигнатур описывают **разрешённые** вызовы. Реализация снизу шире, но снаружи виден только список overload.

```ts
function area(r: number): number;
function area(w: number, h: number): number;
function area(a: number, b?: number) {
  return b === undefined ? Math.PI * a * a : a * b;
}
```

Перегрузка нужна, когда разные аргументы дают разный смысл. Один union часто честнее, чем три сигнатуры.

Коротко: _overload — публичный список вызовов, тело может быть шире_.
