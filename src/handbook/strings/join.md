# join

Joins a set of strings into a single string 

## Syntax

```eve
text = join[token, index, with]
```

## Attributes

- `token` - set of elements to be joined
- `index` - indicates the order of the `tokens` in the joined string
- `with` - inserted between every element in `tokens`

## Description

`text = join[token, index, with]` takes `tokens` tokens together using `with` in an order specified by `index`. Returns the joined string.

## Examples

Split a sentence into tokens

```eve
match
  (token, index) = split[text: "the quick brown fox", by: " "]
bind
  [#token token index]
```

Join the tokens into a sentence again, but with hyphens instead of spaces

```eve
match
  [#token token index]
  text = join[token, index, with: " "]
bind
  [#div text] // Expected "the-quick-brown-fox"
```

## See Also

[concat](../concat) | [join](../join) | [split](../split) | [char-at](../char-at) | [find](../find) | [length](../length) | [replace](../replace)