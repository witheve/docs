---
menu:
  main:
    parent: "Strings"
title: "urlencode"
---

# urlencode

the urlencoded, websafe, version of a string.

## Syntax

```eve
safe = urlencode[text]
```

## Attributes

- `text` - the string to be encoded
- `safe` - a url-safe, encoded string

## Description

`safe = urlencode[text]` converts `text` into a url-safe string (e.g. replacing a space with `%20`), returning it to `safe`.

## Examples

Urlencodes a mathematical expression

```eve
search
  z = urlencode[text: "x * 2"]
  
bind @browser
  [#div text: z]
```

## See Also

[concat](../concat) | [join](../join) | [char-at](../char-at) | [substring](../substring) | [length](../length) | [replace](../replace) | [split](../split)
