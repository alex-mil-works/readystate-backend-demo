---
id: i02
kind: insight
title: Отдать поток значит выйти из задачи
minutes: 3
---

# Отдать поток значит выйти из задачи

`requestAnimationFrame` **не дробит** уже идущий цикл. Колбэк rAF встанет в слот кадра только когда текущая task закончится.

Чтобы разрезать работу:

1. Сделать кусок.
2. Запланировать продолжение через `setTimeout`, `requestAnimationFrame` или `scheduler.yield()`, если он есть.
3. Вернуться из функции.

```js
function chunk(items, i = 0) {
  const end = Math.min(i + 100, items.length);
  for (; i < end; i++) process(items[i]);
  if (i < items.length) setTimeout(() => chunk(items, i));
}
```

rAF уместен, когда следующий кусок должен попасть в кадр. `setTimeout` уместен, когда нужно просто уступить очереди задач, не привязываясь к vsync. Внутри rAF нельзя снова делать бесконечный синхронный объём — кадр застынет так же.
