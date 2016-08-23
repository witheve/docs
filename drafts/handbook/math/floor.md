# floor

Round a number down to the nearest integer.

## Syntax

```
y = floor[value]
```

## Attributes

- value - a set of numbers

## Description

`y = floor[value]` rounds the elements of `value` down to the nearest integers. 

## Examples

```
match
  y = floor[value: 34.2]
bind
  [#div text: value]
```

## See Also

ceil | fix | round