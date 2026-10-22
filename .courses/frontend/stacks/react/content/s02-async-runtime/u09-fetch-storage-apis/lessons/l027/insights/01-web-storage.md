---
id: i01
kind: insight
title: Строки на origin
minutes: 3
---

# Строки на origin

`localStorage` и `sessionStorage` хранят **строки** в рамках origin (схема + хост + порт).

`setItem('n', 1)` запишет `'1'`. `getItem` всегда возвращает строку или `null`. Объект кладут через `JSON.stringify`, и этот JSON не проверяет форму за вас.

`localStorage` общий для вкладок origin и переживает перезапуск. `sessionStorage` живёт в **этой** вкладке. Оба API **синхронные**: большой объём на главном потоке — это long task.

Квота может бросить исключение на `setItem`. В части приватных режимов storage недоступен.

Это не место для токенов и секретов. Любой XSS читает storage так же, как ваш код. Для сессии с httpOnly-cookie storage не нужен.

Коротко: _storage — маленький строковый карман origin, не база и не тайник_.
