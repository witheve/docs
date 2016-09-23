# Functions

## Syntax

```eve
value = fn[argument]

value = fn[argument1, ..., argumentN]

(value1, value2) = fn[argument1, ..., argumentN]

[@fn #function argument1, ... argumentN, value1, ..., valueN]
```

## Description

Functions as they exist in other languages are mostly obviated by Eve's tag semantics. Consider the following two statements

```eve
x = sin(90)                // A typical function call
[#sin deg: 90, return: x]  // An Eve record
```

These statements accomplish the same objective, of storing the sine of an angle in a result variable. The Eve syntax is at a disadvantage though, because it cannot be composed into an expression like a typical function. Therefore, specific Eve records can be used as if they were functions:

```eve
x = sin[degrees: 90]
```

which is sugar for:

```eve
[#sin #function degrees: 90, return: x]
```

The return attribute is implicitly the value of `sin[deg]`, so now the object can be used and composed like functions in other languages. We're proposing this syntax for several reasons.

- Square brackets draw attention to the fact that the function call is nothing more than a regular object.
- Explicit parameters are self-documenting, which makes the code more readable if you're not familiar with the function signature.
- Explicit parameters permit arguments in any order, which makes optional arguments easy to implement.
- Finally, since functions are really just objects, you can extend a function so it can be used in new ways. For example, we could extend the `sin` function to support radians:

~~~eve
Calculate the sine of an angle given in radians
```
match
  return = sin[degrees: value? * π / 180]
bind
  sin[custom-coordinates: value?, return]
```
~~~

The `?` notation here indicates that the value is an input. We can use the extended function like so:

```eve
x = sin[custom-coordinates: π / 2]
```

## Examples

## See Also