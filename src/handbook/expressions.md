---
menu:
  main:
    parent: "Core Language"
title: "Expressions"
weight: 4
---

# Expressions

Expressions are used to perform calculations using constants and attributes of objects, e.g. `party.burgers / party.guest-count` would calculate the ratio of burgers to the number of guests. Note that `guest-count` is a variable, not an expression. In expressions, you are required to add whitespace between operators. This helps with readability, but it also allows us to add more characters to names.

Operators are defined over sets, so you could do something like `cheese-slices = guest.burgers * 2`, which would multiply every guest's burger count by two. There is a pitfall here: if you perform an operation on disjoint sets (they have no attribute in common) with differing cardinality (their sets have a different number of elements), the result will be a [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) of the two sets. This is usually not a desired behavior, but sometimes it is what you want to do, e.g. if you wanted to calculate the distance from every point in a set to every point in another set, a Cartesian product would be useful.

## See Also

[aggregates](../aggregates) | [functions](../functions) | [if-then](../if-then) | [is](../is) | [string interpolation](../string-interpolation)