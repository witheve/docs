# Glosasry

## [Cardinality](https://en.wikipedia.org/wiki/Cardinality)

The number of elements in a set. For example, the set `{5, 4, 2}` contains three elements, so the cardinality of the set is 3.

## Entity

Entities are unique IDs in the Eve DB. An entity can represent anything - a person, a business, a message, an application, a button, etc.

## Fact 

Facts describe entities. Each fact is composed of an attribute and a value, and is associated with a specific entity. Facts might be a person's age, an employee's salary, a department's budget, etc.

## Record

Records are composed of facts. In Eve, you select records from the database by supplying a pattern of attributes, and any records matching that pattern are returned to you. For example, a record might be the ages, salaries, and departments of employees.

## [Set](https://en.wikipedia.org/wiki/Set_(mathematics))

A set is a collection of elements where each element is unique. Sets have no order, so position in the set does not imply uniqueness. For example `{1, 2, 3}` is a set, whereas `{1, 2, 1, 3}` is not a set, because 1 appears twice. Furthermore, this means that `{1, 2, 3}` is equivalent to `{3, 1, 2}`, `{3, 2, 1}`, and `{1, 3, 2}` because they have the same elements regardless of order. Elements of a set can be anything, and therefore can be sets themselves. To make the previous collection a set we could do the following: `{{1,A}, {2,B}, {1,C}, {3,D}}`.