---
menu:
  main:
    parent: "Math"
title: "abs"
---

# abs

The absolute value of a number

## Syntax

```eve
y = abs[value]
```

## Attributes

- `value` - a set of numbers

## Description

`y = abs[value]` returns the absolute value of the elements in `value`. Every positive number is kept positive, but every negative number is made positive.

## Examples

Get the absolute value of a number

```eve
match
  y = abs[value: -3]
bind @browser
  [#div text: y]
```

Displays the number `3`.

## See Also

[sign](../sign) |