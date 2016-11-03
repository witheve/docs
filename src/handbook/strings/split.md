---
menu:
  main:
    parent: "Strings"
title: "split"
---

# split

splits a string at the given delimiter 

## Syntax

```eve
(token, index) = split[text, by]
```

## Attributes

- `text` - the text to be split 
- `by` - the delimiter at which to split the text. An empty string will split the text at every character.
- `token` - the recovered tokens after the split
- `index` - the indices of the tokens in the original text  

## Description

`(token, index) = split[text, by]` splits a `text` into `tokens` according to the given delimiter, `by`. Returns `token` and `index` of those tokens in the original string.

## Examples

Splits a string at every character

```eve
search
  (token, index) = split[text: "hello, world", by: ""]
  
bind @browser
  [#div text: "{{token}} {{index}}"]
```

Split a sentence into words and display them in order

```eve
search
  (token, index) = split[text: "the quick brown fox", by: " "]
  
bind @browser
  [#div sort: index, text: token]
```

## See Also

[concat](../concat) | [join](../join) | [char-at](../char-at) | [find](../find) | [length](../length) | [replace](../replace)
