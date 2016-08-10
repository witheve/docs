# If

`If` allows conditional equivalence, and works a lot like `if` in other languages. Our `if` has two components: The keyword `if` followed by a conditional; and the keyword `then` followed by one or more return objects. An optional `else` keyword indicates the default value:

```
burger-switch = if guest.burgers = 1 then "burger"
                else "burgers"
```

This block is used to switch between the singular and plural for displaying the number of burgers each guest is eating. `If` statements can be composed, permitting the creation of complex conditional statements. For instance, instead of inviting friends and their spouses in two blocks (the first two blocks in the example program), I could have done it in a single block using an `if` statement:

```
[@"my party" date]
friend = [#friend busy-dates != date]
guest = if friend then friend
        if friend.spouse then friend.spouse
```

This is equivalent to a `union/and` operator, which combines elements from disparate sets into the same set. The second way to use `if` is in conjunction with the `else` keyword:

```
burgers = if guest = [@Arthur] then 3
          else if guest = [#hungry] then 2
          else if guest = [#vegetarian] then 0
          else 1
```

This is equivalent to a `choose/or` operator, selecting only the first branch with a non-empty body. A bug in this program is that if some guest is tagged both `#hungry` and `#vegetarian`, that guest will actually receive two burgers. Therefore, while order of statements usually does not matter in Eve, `if` statements are one area where it does.

A final feature of the if statement is multiple returns. For instance, we could have done this:

```
(burgers, status) = if guest = [@Arthur] then (3, #fed)
                    else if guest = [#hungry] then (2, #fed)
                    else if guest = [#vegetarian] then (0, #needsfood)
                    else (1, #fed)
```