---
id: i01
kind: insight
title: "Доступное имя"
minutes: 3
---

# Доступное имя

Имя поля скринридер берёт из `label` (через `for`/`id` или обёртку), иначе из `aria-label` / `aria-labelledby`. Placeholder исчезает при вводе и плохо контрастен: это подсказка, не подпись.

```html
<label for="query">Поиск</label>
<input id="query" name="query">
```

Кнопка-иконка без текста обязана получить имя: видимый текст, `aria-label` или visually hidden текст. Голая svg внутри button объявляется пустой.

Коротко: _имя остаётся, когда курсор уже в поле_.
