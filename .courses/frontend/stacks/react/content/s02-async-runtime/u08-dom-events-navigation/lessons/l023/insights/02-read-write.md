---
id: i02
kind: insight
title: textContent, innerHTML и layout
minutes: 3
---

# textContent, innerHTML и layout

`textContent` пишет и читает **текст**. Разметка не парсится.

`innerHTML` парсит HTML-строку в узлы. Тег `script`, вставленный через `innerHTML`, **не выполняется**. Атрибут-обработчик вроде `onerror` у `<img>` — выполняется. Поэтому строка от пользователя в `innerHTML` — XSS-сток.

Чтение геометрии (`offsetHeight`, `getBoundingClientRect`) может заставить браузер посчитать layout прямо сейчас. Чередование таких чтений и записей стиля в цикле — layout thrashing.

Пишите пачкой, читайте пачкой. Для большого текста предпочитайте `textContent` или `DocumentFragment`, а не серию `innerHTML +=`.
