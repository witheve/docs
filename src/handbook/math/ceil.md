---
menu:
  main:
    parent: "Math"
title: "ceil"
---

# ceil

Round a number up to the nearest integer.

## Syntax

```eve
y = ceil[value]
```

## Attributes

- `value` - a set of numbers

## Description

`y = ceil[value]` rounds the elements of `value` up to the nearest integers. 

## Examples

Calculate the ceiling of `34.2`

```eve
match
  y = ceil[value: 34.2]
bind
  [#div text: y]
```

The result is `35`.

## See Also

[floor](../floor) | [fix](../fix) | [round](../round)