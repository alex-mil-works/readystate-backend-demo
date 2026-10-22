---
id: i01
kind: insight
title: "Настоящий контрол"
minutes: 3
---

# Настоящий контрол

`input`, `textarea`, `select` и `button` уже умеют фокус, значение и клавиатуру. Самодельный «инпут» из div не попадает в отправку формы и в доступное дерево как поле.

```html
<form action="/login" method="post">
  <label>Email <input name="email" type="email" required></label>
  <button type="submit">Войти</button>
</form>
```

У кнопки внутри формы по умолчанию type=submit. Кнопка «отмена» или «показать пароль» должна быть `type="button"`, иначе она отправит форму.

Коротко: _поле — элемент формы, не стилизованный div_.
