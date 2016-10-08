---
menu:
  main:
    parent: "Math"
title: "sin"
---

# sin

Calculate the sine of an angle

## Syntax

```eve
y = sin[radians]
y = sin[degrees]
```

## Attributes

- `radians` - the angle in radians
- `degrees` - the angle in degrees

## Description

`y = sin[degrees]` calculates the sine of an input in degrees. 

`y = sin[radians]` calculates the sine of an input in radians.

`sin` operates element-wise on its inputs.

## Examples

```eve
search
  y = sin[degrees: 90]
  
bind @browser
  [#div text: y]
```

## See Also

[cos](../cos) | [tan](../tan) 