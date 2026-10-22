---
id: i01
kind: insight
title: "Типы стираются"
minutes: 3
---

# Типы стираются

TypeScript — это проверка **до** запуска. Компилятор читает аннотации и вывод типов, затем отдаёт обычный JavaScript. В браузере типов уже нет.

```ts
function len(value: string) {
  return value.length;
}
```

После `tsc` останется функция с `value.length`. Аннотация `: string` не превращается в runtime-проверку.

Коротко: _тип живёт в сборке, не в движке JavaScript_.
