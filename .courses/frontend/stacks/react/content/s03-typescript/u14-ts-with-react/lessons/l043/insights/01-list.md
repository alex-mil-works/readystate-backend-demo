---
id: i01
kind: insight
title: "Один компонент, разный элемент"
minutes: 3
---

# Один компонент, разный элемент

Generic-компонент связывает массив, ключ и render-prop одним `T`.

```tsx
type ListProps<T> = {
  items: T[];
  getKey: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
};

function List<T>({ items, getKey, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

Вызов `List` со списком уроков выводит `T` как урок. `getKey` уже не примет число.

Коротко: _`T` у компонента — тот же параметр типа, что у функции_.
