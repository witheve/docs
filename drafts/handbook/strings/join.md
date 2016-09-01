# join

Joins a set of strings into a single string 

## Syntax

```
text = join[token, index, with]
```

## Attributes

- token - set of elements to be joined
- index - indicates the order of the `tokens` in the joined string
- with - inserted between every element in `tokens`

## Description

Takes `tokens` and their `indices` and joins them together with `with`, returning the full string as text.

## Examples

Split a sentence into tokens

```
match
  (token, index) = split[text: "the quick brown fox", by: " "]
bind
  [#token token index]
```

Join the tokens into a sentence again, but with hyphens instead of spaces

```
match
  [#token token index]
  text = join[token, index, with: " "]
bind
  [#div text] // Expected "the-quick-brown-fox"
```

## See Also

[concat](concat.md) | [join](join.md) | [split](split.md) | [char-at](char-at.md) | [find](find.md) | [length](length.md) | [replace](replace.md)