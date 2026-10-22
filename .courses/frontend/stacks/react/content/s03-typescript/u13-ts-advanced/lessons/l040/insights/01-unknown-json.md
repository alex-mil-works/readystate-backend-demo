---
id: i01
kind: insight
title: "JSON не знает ваш type"
minutes: 3
---

# JSON не знает ваш type

`response.json()` в типах DOM часто выглядит как `Promise<any>`. Это дыра. На границе считайте тело `unknown`, пока парсер не вернёт узкий тип.

```ts
const body: unknown = await response.json();
const user = parseUser(body);
```

`parseUser` либо возвращает `User`, либо бросает. После него компилятор и данные согласны.

Коротко: _тип результата парсера — единственный честный User_.
