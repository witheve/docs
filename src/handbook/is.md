# is

Tests the truth of a statement

## Syntax

```eve
y = is( ... )
```

## Description

`y = is( ... )` tests the truth of the statement contained in the parentheses. If the statement is true, then `is` returns the value `true`, otherwise it returns `false`.

## Examples

```eve
match
  x = 10
  y = is(20 = x)
  z = is(20 = x * 2)
bind @browser
  [#div text: "y is {{y}}"]
  [#div text: "z is {{x}}"]
```

The output shows that y is `false` while z is `true`.

### Example Usage

- [TodoMVC](https://github.com/witheve/Eve/blob/master/examples/todomvc.eve)

## See Also

[not](../not) |