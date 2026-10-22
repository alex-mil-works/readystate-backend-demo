---
id: i01
kind: insight
title: "Публичный объект props"
minutes: 3
---

# Публичный объект props

Компонент — функция от props. Тип props экспортируют, если его собирают снаружи.

```tsx
type ButtonProps = {
  label: string;
  disabled?: boolean;
  onPress: (id: string) => void;
  children?: React.ReactNode;
};

function Button({ label, onPress, children }: ButtonProps) {
  return <button onClick={() => onPress(label)}>{children ?? label}</button>;
}
```

`React.ReactNode` — то, что можно положить в дерево: строка, элемент, массив, `null`. Это не `ReactElement`.

Коротко: _контракт компонента — это type props, не обёртка FC_.
