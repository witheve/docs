# split

splits a string at the given delimiter 

## Syntax

```
(token, index) = split[text, by]
```

## Attributes

- text
- by 

## Description

Splits a `text` into elements according to the given delimiter, `by`. Returns the `tokens` and the `indices` of those tokens in the original string.

## Examples

```
match
  (token, index) = split[text: "hello, world", by: " "]
bind
  [#div text: token]
  [#div text: index]
```

## See Also

[concat](concat.md) | [join](join.md) | [char-at](char-at.md) | [find](find.md) | [length](length.md) | [replace](replace.md)