# Aggregates

Aggregates are functions that take an input set and produce an output set, typically with a different cardinality than the input set. Aggregates are called just like other functions in Eve. For example, `count` takes an input set of cardinality `N` and produces a set of cardinality `1` as the result. A familiar analogue in other languages is the `reduce()` function. Here is an example of an aggregate in use:

```eve
total-burgers = sum[value: burgers, given: (burgers, guest)]
```

One important consideration when using an aggregate is the input set. Due to set semantics, the result may not be what you expect if the input set contains duplicate elements.

Recall that a set is an unordered collection of unique elements. In our example, `burgers = (3, 0, 1, 2, 1)`, which as a set is `{3, 0, 1, 2}`. Thus `sum[value: burgers, given: burgers] = 6`, which is not what we expect. However, when we say `sum[value: burgers, given: (burgers, guests)]` then each burger is associated with a corresponding guest, making each element unique, e.g. `(burgers, guest) = {{3, Arthur}, {0, Carol}, {1, Duncan}, {2, James}, {1, Sam}}`. Summing burgers given this set yields the expected result of `7`, because the duplicated 1 is now unique.

## Available Aggregates

- sum
- count