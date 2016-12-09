---
menu:
  main:
    parent: "Math"
title: "mod"
---

# mod

Return the modulus after division

## Syntax

```eve
y = mod[value, by]
```

## Attributes

- `value` - the number to be divided
- `by` - the number by which to divide `value`

## Description

Modulo division calculates the modulus (the remainder) after dividing `value` by `by`. If `value` is a set of size `N`, then `by` can either be a scalar or another set of size `N`.

## Examples

Keeps the value of an angle between the range [π, -π]:

```eve
search
  value = 30
  angle = mod[value, by: 2 * pi[]]
  pi2pi = if angle > pi[] then angle - 2 * pi[]
          if angle < pi[] * -1 then angle + 2 * pi[]
          else angle
        
bind @view
  [#value | value: "{{value}} -> {{pi2pi}}"]
```  

## See Also

[ceil](ceil.md) | [floor](floor.md) | [round](round.md)