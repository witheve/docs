---
menu:
  main:
    parent: "Math"
title: "ceiling"
---

# ceiling

Round a number up to the nearest integer.

## Syntax

```eve
y = ceiling[value]
```

## Attributes

- `value` - a set of numbers

## Description

`y = ceiling[value]` rounds the elements of `value` up to the nearest integers. 

## Examples

Calculate the ceiling of `34.2`

```eve
search
  y = ceiling[value: 34.2]
  
bind @browser
  [#div text: y]
```

The result is `35`.

## See Also

[floor](../floor) | [to-fixed](../to-fixed) | [round](../round)
