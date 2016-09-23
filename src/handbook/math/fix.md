# fix

Round a number toward zero.

## Syntax

```eve
y = fix[value]
```

## Attributes

- `value` - a set of numbers

## Description

`y = fix[value]` rounds the elements of `value` toward zero. This means that negative numbers will be rounded up to the nearest integer, while positive numbers will be rounded down. 

## Examples

Calculate the fix of `34.7` and `-34.7`

```eve
match
  y = fix[value: 34.7]
  z = fix[value: -34.7]
bind
  [#div text: "The fix of 34.7 is {{y}}"]
  [#div text: "The fix of -34.7 is {{z}}"]
```

We see that the fix of `34.7` is `34`, while the fix of `-34.7` is `-34`. Compare this to rounding the numbers:

```eve
match
  y = round[value: 34.7]
  z = round[value: -34.7]
bind
  [#div text: "The round of 34.7 is {{y}}"]
  [#div text: "The round of -34.7 is {{z}}"]
```

We see that the round of `34.7` is `35`, while the round of `-34.7` is `-35`.

## See Also

[floor](../floor) | [ceil](../ceil) | [round](../round)