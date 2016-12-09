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
y = sum[value, given]
y = sum[value, given, per]
```

## Arguments

- `value` - the variable or attribute to be summed
- `given` - the record from which the value can be accessed
- `per` - _optional_ - specifies the set over which you are summing

## Description

`y = sum[value, given]` returns the sum of elements in a set. The set must be entirely numeric or a runtime-error occurs.

## Examples

Context data:
```eve
commit
  [#employee salary: 100, department: "hunting"]
  [#employee salary: 200, department: "hunting"]
  [#employee salary: 300, department: "gathering"]
```

Get sum of all matching records:
```eve
search
  employee = [#employee salary department]
  total-salary = sum[value:salary, given: employee]

bind @browser
  [#div text: "Total: {{ total-salary }}" ]
```

Get sum of matching records grouped by department:
```eve
search
  employee = [#employee salary department]
  total-salary = sum[value:salary, given: employee, per: department]

bind @browser
  [#div text: "{{department}} : {{ total-salary }}" ]
```

## See Also

[count](../../statistics/count) | [aggregates](../../aggregates)