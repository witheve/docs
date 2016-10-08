---
menu:
  main:
    parent: "Eve Programs"
title: "Sets"
weight: 2
---

# Set Semantics

Expressions and actions in Eve work over sets.

## Description

[Sets](https://en.wikipedia.org/wiki/Set_(mathematics)) are unordered collections where every element of the collection is unique. For example, `{"a", "b", "c"}` is a set, while `{"a", "a", "b", "c"}` is not. Furthermoer, `{"a", "b", "c"}` and `{"c", "b", "a"}` are equivalent sets, even though the order of elements is different.

## Examples

```
{1, 2, 3, 4} // Every element is unique           
{1, 2, 3, 1} // One is repeated twice, so this is not a set
{4, 3, 2, 1} // This set is the same as the first, despite the order of elements
{"Steve", 1, {1, 2}} // Elements can be nonhomogeneous, as long as each one is unique
{{"a", 1}, {"a", 2}, {"a", 3}} // Sets within sets can be used to repeat values
```

## See Also

[programming model](../model) | [functions](../functions) | [aggregates](../aggregates) | [cartesian product](../glossary/#cartesian-product)