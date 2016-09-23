# Equivalence

Equivalence is used to match and join records 

## Syntax

```eve
// Bind attribute to value
[attribute: value]

// Also bind an attribute to a value
[attribute]
attribute = value

// Join two records using a bind
[#record1 attribute1]
[#record2 attribute2: attribute1]

// Join two records using a name
[#record1 attribute]
[#record2 attribute]

// Bind a nested record
[attribute1: [attribute2]]

// Filter attributes
[attribute > value]
[attribute >= value]
[attribute < value]
[attribute <= value]
[attribute = value]
[attribute != value]
```

## Description

`[attribute: value]` binds `value` to `attribute` using the bind operator `:`. This says that the two are equivalent, and therefore matches only records that satisfy this assertion.

The bind operator can apply to values, variables, or records. `[attribute2: attribute1]` binds `attribute1` to `attribute2`, joining two records together.

`[attribute1: [attribute2]]` shows a nested record. This nesting can be inline as shown, or it can be through a variable e.g.

```eve
record = [...]
[attribute: record]
``` 

Names are another way to say one thing is equivalent to another; within a block, variables with the same name represent the same object or attribute of an object.

Names are a little more permissive in our syntax than other languages. We allow most symbols in a name (with the exception of space, @, #, //, period, question, comma, colon, and grouping symbols). So operators like `-` and `+` are valid symbols in a name. Furthermore, we support Unicode, so you can include symbols (such as letters from the Greek alphabet). Such permissive naming comes at the cost of requiring whitespace in expressions. For example `friend-age` is a name, whereas `friend - age` is subtracting `age` from `friend`.

## Tip

In Eve, the equality operator `=` and the bind operator `:` have the same semantic meaning; they both assert the equivalence of two clauses, and therefore could be used interchangeably. However, by convention `:` is used within records, while `=` is used everywhere else. 

## Examples

## See Also