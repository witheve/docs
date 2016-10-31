---
menu:
  main:
    parent: "Equivalence"
title: "Inequality"
weight: 2
---

# Inequality

inequality operators filter records

## Syntax

```eve
// Inequality Operators
>, >=, <, <=, !=

// Inside of records
[attribute >= value]
[attribute >= variable]

// Outside of records
variable >= value
variable >= variable
value <= variable >= value
variable <= variable >= variable
```

## Description

Attributes can be filtered using inequality operators, including `>`, `>=`, `<`, `<=` and `!=`.

`>`, `>=`, `<`, `<=` can only filter using values that can be sorted. For instance, you can use these operators to filter numbers, but you cannot filter records this way.

`!=` tests only for inequality, and doesn't compare whether an attribute is greater or less than a particular value. Therefore, `!=` can be used to filter any value.

You can use inequality operators inside records or outside of them. Inside of records, you can filter an attribute on a single value. Outside of records, you have more freedom to filter on multiple values. For instance, if you want only records with an attribute between a maximum and minimum value, you can write something like `min-value < variable > max-value`.

## Examples

Select students with a low GPA

```eve
search @test-data
  [#student name GPA < 2.0]

bind @browser
  [#div text: "{{name}} needs a tutor."]
```

Select students with a GPA over 2.0 but less than 3.0

```eve
search @test-data
  [#student name GPA]
  2.0 >= GPA < 3.0

bind @browser
  [#div text: "{{name}} is doing fine"]
```

You can be very specific with filters. Select students named "John" in 11th or 12th grade with a GPA between 2.0 and 3.0, and who don't attend "West" high school.

```eve
search @test-data
  students = [#student name: "John", grade >= 11, school != "West" ]
  2.0 >= students.GPA < 3.0

bind @browser
  [#div text: "{{name}} is doing fine"]  
```

## See Also

[equality](../equality) | [joins](../joins) | [equivalence](,,/equivalence)