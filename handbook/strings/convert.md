---
menu:
  main:
    parent: "Strings"
title: "convert"
---

# convert

converts a number into a string or vice versa.

## Syntax

```eve
converted = convert[value, to]
```

## Attributes

- `converted` - the resulting converted value
- `value` - the value to be converted
- `to` - a string that specifies the target value type, either "number" or "string"

## Description

`converted = convert[value, to]` converts `value` from a number to a string if `to` is set to `"string"`, or if `to` is set to `"number"` converts `value` from a string to a number.

## Examples

Convert a string to a number, multiplies it

```eve
search
  x = convert[value: "1", to: "number"]
  y = x * 2
  
bind @browser
  [#div text: y]
```

Convert a number to a string, gets its length

```eve
search
  str = convert[value: "42", to: "number"]
  c = length[str]
  
bind @browser
  [#div text: c]
```

## See Also

[concat](../concat) | [join](../join) | [char-at](../char-at) | [substring](../substring) | [length](../length) | [replace](../replace) | [split](../split)
