---
id: i01
kind: insight
title: "Между двумя значениями"
minutes: 3
---

# Между двумя значениями

Transition играет, когда свойство меняется: hover, фокус, класс открытой панели. Указывают свойство, длительность и функцию. `transition: all` анимирует и цвет, и ширину, и то, о чём вы не думали.

```css
.panel { transform: translateY(4px); opacity: 0; transition: transform 160ms ease, opacity 160ms ease; }
.panel.is-open { transform: none; opacity: 1; }
```

Состояние «открыто» лучше классом или data-атрибутом, чем ручной перезаписью style на каждом кадре.

Коротко: _переход описывает, какое свойство и как долго догоняет новое значение_.
