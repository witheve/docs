---
menu:
  main:
    parent: "Strings"
title: "substring"
---

# substring

gets the substring of the provided string starting at the specified index (or 1 if not specified) and ending at the other specified index (required).

## Syntax

```eve
substr = substring[text, from, to]
```

## Attributes

- `text` - the text to substring
- `to` - the maximum index of the substring, inclusive.
- `from` - the starting index of the substring, starting at one, inclusive
- `substr` - the final substring

## Description

`substr = substring[text, from, to]` gets a substring of `text` stretching from `from` to `to`, inclusively on both sides: [from, to].
**Note:** String indexing starts at one. If you are an experienced programmer, this might trip you up.

## Examples

Extracts the word "hello" from the string

```eve
search
  greeting = substring[text: "ahellob", from: 2, to: 6]

bind @browser
  [#div text: greeting]
```

## See Also

[concat](../concat) | [join](../join) | [char-at](../char-at) | [find](../find) | [length](../length) | [replace](../replace) | [split](../split)
