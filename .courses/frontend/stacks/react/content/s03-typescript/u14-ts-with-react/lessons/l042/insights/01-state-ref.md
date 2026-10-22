---
id: i01
kind: insight
title: "State и два вида ref"
minutes: 3
---

# State и два вида ref

Пустое состояние пользователя — `User | null`, не `any` и не non-null assertion при первом рендере.

```tsx
const [user, setUser] = useState<User | null>(null);
const inputRef = useRef<HTMLInputElement>(null);
const paints = useRef(0);
```

Ref на DOM-узел стартует с `null`, пока React не запишет элемент. Ref-счётчик без `null` — просто мутабельный бокс, он не участвует в рендере.

Коротко: _`null` у DOM-ref означает «узла ещё нет», не «сотрём проверку»._
