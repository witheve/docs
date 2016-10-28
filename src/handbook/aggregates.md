---
menu:
  main:
    parent: "Expressions"
title: "Aggregates"
weight: 2
---

# Aggregates

aggregates reduce a set of values to a single value

## Description

Aggregates are functions that take an input set and produce an output set, typically with a different cardinality than the input set. Examples of aggregates include `sum`, `count`, and `average`. Each of these takes a set of numbers as an input, and typically produces a single number as output.

Aggregates are called just like other functions in Eve. For instance, the `count` aggregate is called like so:

```eve
employee-count = count[value: employees]
```

Aggregates don't always produce a single output value. In some instances, you may want to group your input according to a desired dimension (department, grade, state, country, zip code, etc.) and then aggregate based on those groupings. Extending the example above, we could count the employees in each department:

```eve
employee-count = count[value: employees, per: department]
```

Now, `employee-count` will have a count for each department, instead of a single count over all departments. For more complete examples, see the doc files for specific aggregates.

## Tip

Aggregates have similar behavior to the `reduce()` function in many other langauges.

## See Also

[count](../statistics/count)

