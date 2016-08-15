# Functions

**Note: This section of the proposal is not implemented yet**

It turns out that functions as they exist in other languages are mostly obviated by Eve's tag semantics. Consider the following two statements

```
x = sin(90)                // A typical function call
[#sin deg: 90, return: x]  // An Eve object
```

These statements accomplish the same objective, of storing the sine of an angle in a result variable. The Eve syntax is at a disadvantage though, because it cannot be composed into an expression like a typical function. Therefore, we propose the following syntax for functions in Eve:

```
x = sin[deg: 90]
```

which is sugar for:

```
[#sin #function deg: 90, return: x]
```

The return attribute is implicitly the value of `sin[deg]`, so now the object can be used and composed like functions in other languages. We're proposing this syntax for several reasons.

- Square brackets draw attention to the fact that the function call is nothing more than a regular object.
- Explicit parameters are self-documenting, which makes the code more readable if you're not familiar with the function signature.
- Explicit parameters permit arguments in any order, which makes optional arguments easy to implement.
- Finally, since functions are really just objects, you can extend a function so it can be used in new ways. For example, we could extend the `sin` function to support radians:


        Calculate the sine of an angle given in radians
        ```
        match
          return = sin[angle: value? * π / 180]
        bind
          sin[rad: value?, return]
        ```

The `?` notation here indicates that the value is an input. We can use the extended function like so:

```
x = sin[rad: π / 2]
```