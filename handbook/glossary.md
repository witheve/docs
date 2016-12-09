---
menu:
  main:
    parent: "Appendix"
title: "Glossary"
weight: 100
---

# Glossary

## Cardinality

[Cardinality](https://en.wikipedia.org/wiki/Cardinality) is the number of elements in a set. For example, the set `(5, 4, 2)` contains three elements, so the cardinality of the set is 3.

## Cartesian Product

The [Cartesian product](https://en.wikipedia.org/wiki/Cartesian_product) `A × B` of two sets `A` and `B` is the set of ordered pairs `(a,b)` where `a ∈ A` and `b ∈ B`. For example, if `A = (1, 2)` and `B = ("A", "B")`, then `A x B = ((1,"A"), (1, "B"), (2, "A"), (2, "B"))`.

## Entity

Entities are unique IDs in the Eve DB. An entity can represent anything - a person, a business, a message, an application, a button, etc.

## Fact 

Facts describe entities. Each fact is composed of an attribute and a value, and is associated with a specific entity. Facts might be a person's age, an employee's salary, a department's budget, etc.

## Provenance

Provenance is the record and history of data and its place of origin. In Eve, provenance tells you how a value is calculated by looking back at the history of its computation. Provenance can be used to precisely identify the cause of unexpected data in your application.

## Record

Records are composed of facts. In Eve, you select records from the database by supplying a pattern of attributes, and any records matching that pattern are returned to you. For example, a record might be the ages, salaries, and departments of employees.

## Referential Transparency

An expression is [referentially transparency](https://en.wikipedia.org/wiki/Referential_transparency) if it can be replaced with its result without changing the behavior of the program. Expression that are not referentially transparent tend to have side effects, or rely on state that is not supplied as part of the input arguments, but through a side channel.  

## Set

In mathematics, a [set](https://en.wikipedia.org/wiki/Set_(mathematics)) is a collection of elements where each element is unique. Sets have no order, so position in the set does not imply uniqueness. For example `(1, 2, 3)` is a set, whereas `(1, 2, 1, 3)` is not a set, because 1 appears twice. Furthermore, this means that `(1, 2, 3)` is equivalent to `(3, 1, 2)`, `(3, 2, 1)`, and `(1, 3, 2)` because they have the same elements regardless of order. Elements of a set can be anything, and therefore can be sets themselves. To make the previous collection a set we could do the following: `((1,A), (2,B), (1,C), (3,D))`.

