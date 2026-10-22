---
id: i01
kind: insight
title: "Из чего коробка"
minutes: 3
---

# Из чего коробка

Снаружи внутрь: margin, border, padding, content. При `content-box` заявленная `width` — только контент. Padding и border добавляются сверху, и блок становится шире родителя.

```css
*, *::before, *::after { box-sizing: border-box; }
```

С `border-box` width включает padding и border. Так проще делить строку на проценты и не ловить вылезание.

Коротко: _border-box делает width честной внешней шириной содержимого с полями_.
