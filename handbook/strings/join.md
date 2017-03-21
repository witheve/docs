---
menu:
  main:
    parent: "Strings"
title: "join"
---

# join

Joins a set of tokens into one or more contiguous strings 

## Syntax

```eve
// join tokens into a string
text = join[token, given, index, with]

// group tokens before joining
text = join[token, given, index, with, per]
```

## Attributes

- `token` - set of strings to be joined
- `given` - establishes the set being joined. If tokens are not unique, you can add attributes here that will make them unique. Must at least provide `token` as part of the given set, or only the first one will be returned.
- `index` - indicates where each `token` is ordered in `text`.
- `with` - inserted between every element in `token`.
- `per` - _optional_ - one or more attributes by which to group `token`.

## Description

`text = join[token, given, index, with]` joins elements of `token` in an order specified by `index`, inserting `with` between each token. Returns the joined string.

`text = join[token, given, index, with, per]` groups `token` according to the values of `per` before joining.

## Examples

Split a sentence into tokens, and join the tokens into a sentence again

```eve
search
  // Split the sentence into words
  (token, index) = split[text: "the quick brown fox", by: " "]

  // Join the words back into a sentence, but with hyphens instead of spaces
  text = join[token given: token, index with: "-"]

bind @view
  [#value | value: text] // Expected "the-quick-brown-fox"
```

---

Since join is an aggregate, set semantics play an important part here; if we don't specify what makes each token unique, then the results can be surprising. The following example will demonstrate this.

Let's split the phrase "hello world" into letters:

```eve
search
  //token = (h, e, l, l, o, w, o, r, l, d)
  (token, index) = split[text: "hello world", by: ""]

bind
  [#phrase token index]

bind @view
  [#value | value: token]
```

Let's join this phrase back together. Like last time, we'll join with a `-`. Notice that some tokens ("l" and "o") should appear multiple times in the phrase. To correctly join them, we add `index` as part of the `given` set:

```eve
search
  [#phrase token index]
  // given = (("h", 1), ("e", 2), ("l", 3), ("l", 4) ... ("l", 10), ("d", 11)) 
  // without including index, the result is "h-e-l-o- -w-r-d". Try it and see!
  text = join[token given: (token, index) index with: "-"]

bind @view
  [#value | value: text]
```

The result expected result is "h-e-l-l-o- -w-o-r-l-d".

## See Also

[split](../split) | [substring](../substring) | [length](../length)
