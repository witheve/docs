# ceil

Round a number up to the nearest integer.

## Syntax

```
y = ceil[value]
```

## Attributes

- value - a set of numbers

## Description

`y = ceil[value]` rounds the elements of `value` up to the nearest integers. 

## Examples

```
match
  y = ceil[value: 34.2]
bind
  [#div text: value]
```

## See Also

[floor](floor.md) | [fix](fix.md) | [round](round.md)