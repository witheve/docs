# round

Round a number to the nearest integer

## Syntax

```eve
y = round[value]
```

## Attributes

- `value` - a set of numbers

## Description

`y = round[value]` rounds the elements of `value` toward the nearest integers.

- For positive numbers - if the fractional part of the number is greater than or equal to 0.5, then the number is rounded up. Otherwise, it is rounded down.
- For negative numbers - if the fractional part of the number is greater than or equal to -0.5, then the number is rounded down to the nearest negative integer. Otherwise, it is rounded up.

## Examples

```eve
match
  y = round[value: 34.5]
  z = round[value: 34.4]
bind
  [#div text: "The round of 34.5 is {{y}}"]
  [#div text: "The round of -34.4 is {{z}}"]
```

## See Also

[floor](../floor) | [ceil](../ceil) | [fix](../fix)