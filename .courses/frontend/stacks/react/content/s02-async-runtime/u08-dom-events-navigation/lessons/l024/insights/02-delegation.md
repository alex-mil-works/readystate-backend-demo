---
id: i02
kind: insight
title: Один слушатель на предка
minutes: 3
---

# Один слушатель на предка

Делегирование: слушатель на стабильном предке, а цель узнаёте по `event.target`. Новые дети не нуждаются в своём `addEventListener`.

```js
list.addEventListener('click', (event) => {
  const row = event.target.closest('li');
  if (!row || !list.contains(row)) return;
  select(row.dataset.id);
});
```

`closest` нужен, потому что клик часто попадает во вложенный `span`, а не в сам `li`.

В React `onClick` на компоненте в итоге тоже оказывается слушателем DOM (часто на корне), но модель «синтетического» события не отменяет правила браузера: `preventDefault` всё ещё про действие по умолчанию, а не про фреймворк. Делегирование на списке остаётся обычным DOM-приёмом, даже если список рисует React.
