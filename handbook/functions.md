---
menu:
  main:
    parent: "Expressions"
title: "Functions"
weight: 1
---

# Functions

Functions map one or more arguments to one or more values.

## Syntax

```eve
// A typical function call
value = fn[argument]

// A function call with multiple arguments
value = fn[argument1, ..., argumentN]

// A function call with multiple arguments and multiple return values
(value1, value2) = fn[argument1, ..., argumentN]

// A desugared function call
[#fn #function argument1, ... argumentN, value1, ..., valueN]
```

## Description

Functions as they exist in other languages are mostly obviated by Eve's tag semantics. Consider the following function call in a C-family language.

```c
// A typical function call
x = sin(1.5);                              
```

In Eve, we could match a record that operates similarly:

```eve
[#sin #function radians: 1.5, return: x]
```

These statements accomplish the same objective: store the sine of an angle in a result variable. The Eve syntax is at a disadvantage though, because it cannot be composed into an expression like a typical function. Therefore, specific Eve records can be used as traditional functions:

```eve
x = sin[radians: 1.5]
```

Let's look at what makes Eve functions different.

## Explicit Arguments

A function's arguments are enclosed in square brackets to draw attention to the fact that functions in Eve are just regular records. Also like records, arguments are stated explicitly. This has several advantages over typical calling patterns:

- Explicit arguments are self-documenting, so a reader unfamiliar with the function can understand more about the function without looking up exactly how it works. In the case of `sin`, you don't have to know whether the inputs have to be in radians or degrees; the call-site tells you.

- Eve provides alternative calling patterns for functions. Some languages have two `sin` functions, one for angles in radians and another for angles in degrees. By contrast, Eve has a single `sin` function. If your angles are in radians, you call `sin[radians]`, whereas if your angles are in degrees, you call `sin[degrees]`.

- Like all records, you can state arguments in any order. This opens up an easy path for optional arguments: include the arguments you want and leave out the ones you don't.

## Referential Transparency

All expressions in Eve are referentially transparent, meaning you can replace the expression with its result and the behavior of the program will not change. This in turn means that expressions are side-effect free, and the only thing they depend on is their input arguments. Referential transparency is key to enabling some key features in Eve, like time travel debugging and provenance.

## Set Semantics

In Eve, functions work over sets, meaning that a function will be applied to all elements of the input sets, resulting in an output that is itself a set. For more, see the document on [set semantics](../sets).

## See Also

[aggregate](../aggregates) | [set semantics](../sets)