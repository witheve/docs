---
menu:
  main:
    parent: "Math"
title: "floor"
---

# floor

Round a number down to the nearest integer.

## Syntax

```eve
y = floor[value]
```

## Attributes

- `value` - a set of numbers

## Description

`y = floor[value]` rounds the elements of `value` down to the nearest integers. 

## Examples

Calculate the floor of `34.2`

```eve
search
  y = floor[value: 34.2]
  
bind
  [#div text: value]
```

The result is `34`.

## See Also

[ceil](ceil.md) | [fix](fix.md) | [round](round.md)