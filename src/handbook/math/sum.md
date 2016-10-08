---
menu:
  main:
    parent: "Math"
title: "sum"
---

# sum

Sum the elements in a set

## Syntax

```eve
y = sum[given]
y = sum[given, per]
```

## Arguments

- `given` - the variable to be summed
- `per` - _optional_ - specifies the set over which you are summing

## Description

`y = sum[given]` returns the sum of elements in a set. The set must be entirely numeric or a runtime-error occurs.

## Examples

```eve
search @test-data
  [#employee salary department]
  department-salary-budgets = sum[given: salary, per: department]

bind @browser
  [#div text: "{{ department }}: {{ department-salary-budgets }}"]
```

## See Also

[count](../../statistics/count) | [aggregates](../../aggregates)