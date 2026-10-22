---
id: i01
kind: insight
title: "Две оси"
minutes: 3
---

# Две оси

Контейнер с `display: flex` выстраивает детей в один ряд. `flex-direction: column` меняет главную ось на вертикаль. `justify-content` двигает вдоль главной, `align-items` — поперёк.

```css
.row { display: flex; gap: 8px; align-items: center; justify-content: space-between; }
```

`gap` даёт промежуток без margin на детях и без схлопывания.

Коротко: _сначала ось, потом распределение свободного места_.
