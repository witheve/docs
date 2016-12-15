---
menu:
  main:
    parent: "Strings"
title: "substring"
---

# substring

Extracts a substring from a given text.

## Syntax

```eve
// extract a substring from text
value = substring[text, from, to]

// extract a substring, counting characters according to `as`
value = substring[text, from, to, as]
```

## Attributes

- `text` - the text from which to extract the substring.
- `from` _optional_ - the beginning index of the substring, inclusive. If `from` is not included as an argument, it defaults to the beginning of the string, which is at index 1.
- `to` _optional_ - the ending index of the substring, inclusive. If not included, this defaults to the end of the `text`.
- `as` _optional_ - sets the method by which to count characters. Can be one of
  - "symbols" (default) - counts the visible symbols in the string. Characters that span multiple bytes (such as Unicode characters) are counted as a single symbol.
  - "code-points" - counts the characters as code-points
  - "bytes" (not yet implemented) - counts the characters as bytes

## Description

`value = substring[text, from, to]` extracts a substring from a given `text` beginning at `from` and ending at `to`, inclusive. Both `from` and `to` are indices bounded by the length of the string (as counted by distinct symbols), the first character being at index 1.

`value = substring[text, from, to, as]` extracts a substring as above, but characters are counted according to `as`.

## Examples

Extract the substring "hello" from the text "hello world"

```
search
  value = substring[text: "hello world", to: 5]

bind @view
  [#value | value]
```

Extract a substring from the middle of a string

```
search
  value = substring[text: "the quick brown fox", from: 5 to: 10]

bind @view
  [#value | value]
```

When characters that span multiple code-points are present in `text` (such as some Unicode characters), substring defaults to counting those characters as a single symbol. Let's say we want to extract the substring "Poodle" in the text "🐩 Poodle!":

```
search
  value = substring[text: "🐩 Poodle!", from: 3 to: 8]

bind @view
  [#value | value]
```

This gets us exactly what we want. However, if we choose to count by "code-points", then the 🐩 character counts as two characters instead of one, so we have to account for this:

```
search
  value = substring[text: "🐩 Poodle!", from: 3 to: 9, as: "code-points"]

bind @view
  [#value | value]
```

## See Also

[join](../join) | [length](../length) | [split](../split)
