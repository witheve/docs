# round

Round a number to the nearest integer

## Syntax

```
y = round[value]
```

## Attributes

- value - a set of numbers

## Description

`y = round[value]` rounds the elements of `value` toward the nearest integers.

- For positive numbers - if the fractional part of the number is greater than or equal to 0.5, then the number is rounded up. Otherwise, it is rounded down.
- For negative numbers - if the fractional part of the number is greater than or equal to -0.5, then the number is rounded down to the nearest negative integer. Otherwise, it is rounded up.

## Examples

```

```

## See Also

[floor](floor.md) | [ceil](ceil.md) | [fix](fix.md)