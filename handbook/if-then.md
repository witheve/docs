---
menu:
  main:
    parent: "Expressions"
title: "if-then-else"
weight: 3
---

# if-then-else

Conditional equivalence

## Syntax

```eve
// Basic if-then usage
result = if record then value

// if-then-else
result = if record then value
         else value

// union both record1 and record2         
result = if record1 then value1
         if record2 then value2

// choose either record1 or record2
result = if record1 then value1
         else if record2 then value2

// Optional default value
result = if record1 then value1
         else if record2 then value2
         else value3

// Multiple returns

(result1, ..., resultN) = if record then (value1, ..., valueN)

(result1, ..., resultN) = if record then (value1, ..., valueN)
                          else (value1, ..., valueN)

(result1, ..., resultN) = if record1 then (value1, ..., valueN)
                          if record2 then (value1, ..., valueN)

(result1, ..., resultN) = if record1 then (value1, ..., valueN)
                          else if record2 then (value1, ..., valueN)

(result1, ..., resultN) = if record1 then (value1, ..., valueN)
                          else if record2 then (value1, ..., valueN)
                          else (value1, ..., valueN)                                          
```

## Description

The `if` expression allows conditional equivalence, and works a lot like `if` in other languages. Our `if` has two components: The keyword `if` followed by a conditional; and the keyword `then` followed by one or more return objects. An optional `else` keyword indicates the default value.

### `if` as an Expression

In Eve, `if-then-else` is an expression, meaning it has a return value. This return value follows the `then` or `else` keywords. For instance:

```eve
result = if A then B else C
```

The return values here are `B` and `C`, where `A` is a condition that is to be tested. If the condition `A` is satisfied, then result is `B`. If the condition is not satisfied, then the result is `C`. This is similar to the ternary operator in some languages.

You can return multiple values from an `if` statement. For example:

```
(result1, result2) = if A then (B1, B2) else (C1, C2)
```

The return values map directly to the return variables in front of the expression. i.e. if `A` is satisfied, then `result1 = B1` and `result2 = B2`. If it is not satisfied, then `result1 = C1` and `result2 = C2`. 

When using multiple returns, every arm of the expression must have the same number of return values. For example, the following code is not valid, because the second branch is missing a return value:

```eve
(result1, result2) = if record1 then (value1, value2)
                     else 0
```

This will not work, because if `record1` does not exist, then there is no value to map to `result2`.

### Union/And Form

In the union form of if, you can merge values into a single variable

```
// union both record1 and record2         
result = if record1 then value1
         if record2 then value2
```

This says that if `record1` exists, then `result` will hold `value1`. In addition, if `record2` exists, then `result` will also hold `value2`. Since there is no `else` on the second arm of the expression, it will be evaluated even if the condition of the first arm was satisfied. So `result` holds `value1` _and_ `value2`.

### Choose/Or Form

We could have used the choose form to decide between `value1` or `value2`.

```eve
// choose either record1 or record2
result = if record1 then value1
         else if record2 then value2
```

The key difference here is the addition of the `else` keyword on the second arm of the expression. This changes the meaning to be that if record1 exists, then the expression is satisfied and the second arm doesn't get considered; the second arm can only execute if the first arm is not satisfied. So result holds either `value1` _or_ `value2`.

## Examples

In the basic case, `if` can be used as a switch. "if" the first condition is met, "then" use the given value. "else" use the default value. In this first example, we want to print statements like "Jennifer ordered 2 burgers" for every guest coming to a party. If the guest is eating only 1 burger, we don't want to print "Jennifer ordered 1 burgers", so we use an `if-else` statement to handle the singular burger case:

```eve
search
  [#guest burgers]
  singular = if guest.burgers = 1 then ""
             else "s"

bind @browser
  [#div text: "{{guest.name}} ordered {{burger}} burger{{singular}}"]
```

We want to invite friends to the party, and also their spouses. We can accomplish this with an `if` statement that has two `if` arms. This will merge the two variables, `friend` and `friend.spouse` into a single variable, `guest`:

```eve
search
  friend = [#friend]
  guest = if friend then friend
          if friend.spouse then friend.spouse

bind 
  guest += #invited
```

For everyone we invite to the party, we want to set the number of burgers they will be ordering. We know that my friend Arthur eats 3 burgers, guests tagged `#hungry` eat 2 burgers, and guests tagged `#vegetarian` won't be eating any burgers. Everyone else will eat 1 burger. We can use `if-else` to cover each of these cases: 

```eve
search
  guest = [#invited]
  burgers = if guest = [#Arthur] then 3
            else if guest = [#hungry] then 2
            else if guest = [#vegetarian] then 0
            else 1

bind
  guest.burgers := burgers
```

We can use multiple returns with `if` 

```eve
search
  guest = [#invited]
  (burgers, status) = if guest = [#Arthur] then (3, #fed)
                      else if guest = [#hungry] then (2, #fed)
                      else if guest = [#vegetarian] then (0, #needsfood)
                      else (1, #fed)

bind
  guest.tag += status
  guest.burgers := burgers
```

## See Also

[expressions](../expressions) | [records](../records) | [functions](../functions)