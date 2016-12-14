---
menu:
  main:
    parent: "Strings"
title: "length"
---

# length

Returns the length of a string 

## Syntax

```eve
len = length[text]
len = length[text, as]
```

## Attributes

- `text` - set of strings to be joined
- `as` _optional_ - sets the method by which to count characters. Can be one of
  - "symbols" (default) - counts the visible symbols in the string. Characters that span multiple bytes (such as Unicode characters) are counted as a single symbol.
  - "code-points" - counts the characters as code-points
  - "bytes" (not yet implemented) - counts the characters as bytes

## Description

`len = length[text]` returns the number of symbols in a string.

`len = length[text, as]` returns the number of characters in a string, determined by `as`.

## Examples

Count the number of characters in a string. We expect a `len` of 5:

```eve
seach
  len = length[text: "Hello"]

bind @view
  [#value | value: len]
```

This time, let's throw a Unicode snowman in the mix. In symbols, this is counted as a single character. We expect a `len` of 9 here:

```eve
seach
  len = length[text: "Poodle: 🐩", as "symbols"]

bind @view
  [#value | value: len]
```

But when we count code-points, the snowman is counted as 2. We expect a `len` of 10 here: 

```eve
seach
  len = length[text: "Poodle: 🐩", as: "code-points"]

bind @view
  [#value | value: len]
```

## See Also

[split](../split) | [split](../join) 
