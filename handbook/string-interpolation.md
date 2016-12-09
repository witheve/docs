---
menu:
  main:
    parent: "Expressions"
title: "String Interpolation"
weight: 5
---

# String Interpolation

injects the value of an attribute or variable into a string

## Syntax

```eve 
"{{ variable }}"
```

## Description

`"{{ variable }}"` embeds the value of `variable` within a string. `Variable` should be an attribute on a record or the result of an expression.

String interpolation works element-wise on its input. This means the string will be repeated for every unique value in `variable`. 

Multiple variables can be interpolated into strings. If the variables have no relation to each other (i.e. they are not joined or part of the same record), then string interpolation is applied to the cartesian product of the sets. 

## Examples

Display student name, grade and school:

```eve
search
  [#student name grade school]

bind @browser
  [#div text: "{{name}} is a {{grade}}th grade student at {{school}}."]
```

Use string interpolation to display pairs of numbers:

```eve
search 
  i = range[from: 1, to: 10]
  j = range[from: 1, to: 10]

bind @browser
  [#div text: "({{ i }}, {{ j }})"]
```

## See Also

[strings](../strings) | [expressions](../expressions)
