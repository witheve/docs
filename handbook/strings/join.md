---
menu:
  main:
    parent: "Strings"
title: "join"
---

# join

Joins a set of strings into a single string 

## Syntax

```eve
text = join[token, given, index, with]
```

## Attributes

- `token` - set of elements to be joined
- `given` - establishes the set being joined, in case tokens are not unique, you can add attributes here that will make them unique. See examples for more. Must at least provide tokens as part of the given set, or only the first token will be returned.
- `index` - indicates the order of the `tokens` in the joined string
- `with` - inserted between every element in `tokens`

## Description

`text = join[token, index, given, with]` takes `tokens` together using `with` in an order specified by `index`. Returns the joined string.

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

You'll notice here that when we display the tokens on their own, we're missing some letters. This is Eve's set semantics at work: the letter `l` is displayed once, and it's not displayed again because this would be a duplicate element in the set. The letters are also probably out of order, because sets are unordered. This is why we need the index when reconstructing the phrase.

So let's join this phrase back together. Like last time, we'll join with a `-`.

```eve
search
  [#phrase token index]
  text = join[token given: token index with: "-"]

bind @view
  [#value | value: text]
```

The output here is "h-e-l-o- -w-r-d", which from the previous block we could have guessed. The problem is that we've joined the tokens, given only the tokens themselves. Since some tokens are duplicate, they are filtered out of the set before it's joined into a string. In order to keep the duplicate tokens, we have to provide more to make them unique. The `index` is a perfect candidate for this:

```eve
search
  [#phrase token index]
  // given = (("h", 1), ("e", 2), ("l", 3), ("l", 4) ... ("l", 10), ("d", 11)) 
  text = join[token given: (token, index) index with: "-"]

bind @view
  [#value | value: text]
```

Now we have the correct result of "h-e-l-l-o- -w-o-r-l-d"

## See Also

[split](../split)