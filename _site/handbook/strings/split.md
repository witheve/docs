# split

splits a string at the given delimiter 

## Syntax

```
(token, index) = split[text, by]
```

## Attributes

- text - the text to be split 
- by - the delimiter at which to split the text. An empty string will split the text at every character.
- token - the recovered tokens after the split
- index - the indices of the tokens in the original text  

## Description

Splits a `text` into `tokens` according to the given delimiter, `by`. Returns the `tokens` and the `indices` of those tokens in the original string.

## Examples

Splits a string at every character

```
match
  (token, index) = split[text: "hello, world", by: ""]
bind
  [#div text: token]
  [#div text: index]
```

Split a sentence into words and display them in order

```
match
  (token, index) = split[text: "the quick brown fox", by: " "]
bind
  [#div sort: index, text: token]
```

## See Also

[concat](concat.md) | [join](join.md) | [char-at](char-at.md) | [find](find.md) | [length](length.md) | [replace](replace.md)