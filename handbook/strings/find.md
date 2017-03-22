---
menu:
  main:
    parent: "Strings"
title: "find"
---

# find

finds a string within a larger string (optinally case-sensitive), starting from the starting index (which defaults to 1).

## Syntax

```eve
(string-position, result-index) = find[text, subtext, case-sensitive, from]
```

## Attributes

- `text` - the larger text to be searched within
- `subtext` - the string to find in `text`
- `case-sensitive` - the recovered tokens after the split
- `string-position` - the positions of the occurences of `subtext` in the original text
- `result-index` - the index of this occurence in all occurences of `subtext` in `text`

## Description

`(string-position, result-index) = find[text, subtext, case-sensitive, from]` finds all the occurences of `subtext` in `text`, by default case-insensitively. For each match, it returns the position in the string (index starting at one) and the number of the match (for instance, the first match is one, the second match is two). If `from` is specified, it starts the search at that index, inclusively.

## Examples

Find all occurences of the string "hello" in `str` (case-insensitive, starting at the first index)

```eve
search
  str = "ahellobhellochello"
  (a, b) = find[text: str, subtext: "hello"]

bind @browser
  [#div text: "{{a}}, {{b}}"]
```

Find all occurences of a capital 'X' in a string

```eve
search
  str = "xxxXxxXxXXX"
  (a, b) = find[text: str, subtext: "X", case-sensitive: true]

bind @browser
  [#div text: "{{a}}, {{b}}"]
```

Find occurences of 'X' after the first one

```eve
search
  str = "xxxXxxXxXXX"
  (a, b) = find[text: str, subtext: "X", case-sensitive: true, from: 5]

bind @browser
  [#div text: "{{a}}, {{b}}"]
```

## See Also

[concat](../concat) | [join](../join) | [char-at](../char-at) | [substring](../substring) | [length](../length) | [replace](../replace) | [split](../split)
