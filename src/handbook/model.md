---
menu:
  main:
    parent: "Eve Programs"
title: "Programming Model"
weight: 1
---

# Programming Model

At its core, Eve only responds to two commands:

1. What facts do you know about this "record"?
2. Remember a new fact about this "record".

Communication with Eve happens through "records", which are key-value pairs attached to a unique ID.

Computation occurs as a result of relationships between records. For example, I might model myself as a record with an `age` and a `birth-year`. There might also be a record representing the `current-year`. Then I could compute my `age` as my `birth-year` subtracted from the `current-year`.

A key concept here is that age is a derived fact, supported by two other facts: `birth-year` and `current-year`. If either of those supporting facts are removed from Eve, then `age` can no longer be computed. For intuition, think about modeling this calculation in a spreadsheet using three cells.

One last thing to note about control flow is that we have no concept of a loop in Eve. Recursion is one way to recover looping, but set semantics and aggregates often obviate the need for recursion. In Eve, every value is actually a set. With operators defined over sets (think `map()`) and aggregation (think `reduce()`) we can actually do away with most cases where we would be tempted to use a loop.

## See also

[blocks](../blocks) | [literate programming](../literate-programming) | [sets](../sets) | [records](../records)