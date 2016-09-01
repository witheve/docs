# range

Generates a set of numbers between two values 

## Syntax

```
y = range[from, to]
y = range[from, to, increment] // Not implemented yet
```

## Attributes

- from - the start of the range. Does not need to be an integer.
- to - the end of the range. Does not need to be an integer.

## Description

`y = range[from, to]` generates a set of numbers starting at `from` and ending at `to`, in increments of 1. The current behavior of range is to exclude `to` from the generated set.

## Examples

Generate and display the numbers between 1 and 10. In this example, `y` should be `{1, 2, 3, 4, 5, 6, 7, 8, 9}`

```
match
  y = range[from: 1, to: 10]
commit
  [#div sort: y, text: y]
```

### Example Usage

- [Tic-Tac-Toe](https://github.com/witheve/Eve/blob/master/examples/tic-tac-toe.eve#L25)
