---
menu:
  main:
    parent: "Math"
title: "range"
---

# range

Generates a set of numbers between two values 

## Syntax

```eve
y = range[from, to]
y = range[from, to, increment]
```

## Attributes

- `from` - the start of the range. Does not need to be an integer.
- `to` - the end of the range. Does not need to be an integer.
- `increment` - specifies the increment by which the elements are separated. By default, this value is `1`.

## Description

`y = range[from, to]` generates a set of numbers starting at `from` and ending at `to`, in increments of 1. The range generated includes `from` and `to`.

`y = range[from, to, increment]` generates a set of numbers starting at `from` and ending at `to` inclusive, at a specified `increment`. The range generated will start at `from` and include as many elements as possible until the next element exceeds `to`. Depending on the chosen increment, this could potentially exclude `to` from the generated range.

## Examples

Generate and display the integers between 1 and 10. In this example, `y = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)`:

```eve
search
  y = range[from: 1, to: 10]

bind @browser
  [#div sort: y, text: y]
```

Generate and display the odd integers between 1 and 10. In this example, `y = (1, 3, 5, 7, 9)`. Notice the set does not include `10` in this case.

```eve
search
  y = range[from: 1, to: 10, increment: 2]

bind @browser
  [#div sort: y, text: y]
```

We can use range and Eve's join semantics to generate indicies for a grid of cells.

```eve
search
  i = range[from: 1 to: 5]
  j = range[from: 1 to: 5]
  coordinate = "({{i}}, {{j}})"

bind @browser
  [#div sort: coordinate, text: coordinate]
``` 

Will display:

```
(1, 1)
(1, 2)
(1, 3)
...
(5, 4)
(5, 5)
```

### Example Usage

- [Tic-Tac-Toe](http://play.witheve.com/#/examples/tic-tac-toe.eve)

## See Also

