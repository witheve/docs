---
menu:
  main:
    parent: "Equivalence"
title: "Equality"
weight: 1
---

# Equality

`=` and `:` assert the equality of two values

## Syntax

```eve
// Use : in a record to bind an attribute to a value
[attribute: value]

// Use = outside a record to bind an attribute to a value
[attribute]
attribute = value

// Bind a nested record
[attribute1: [attribute2]]
```

## Description

`[attribute: value]` binds `value` to `attribute`, so that only records with attributes of the given value are returned. For instance, `[name: "John"]` selects all records with a name attribute equal to "John". You can achieve the same effect with the `=` operator by first searching for a record. For instance:

```eve
[name]
name = "John"
```

This example further demonstrates that in Eve, variables with the same name are equivalent. Here, `name` inside the record and `name` on the second line are the same. This has particular implications, especially in the context of [joining](../joins) records. For instance:

```eve
search
  [#student name school: name]
  [#school name address]
```

This block searches for `#student`s and `#school`s with the same name. This means if you have a school named "South High School", it won't match unless there is also a student named "South High School". If you want to use attributes, but don't want to join on them, you can access them via dot notation.

```eve
search
  [#student name school: schools.name]
  schools = [#school address]
```

This will correctly allow us to relate students and the addresses of the schools they attend.

## Tips

Eve has two identical equivalency operators, `:` and `=`. They have the same semantic meaning, and could be used interchangeably. However, for readability reasons we encourage you to use `:` to express equality within records, and `=` outside of records. For example `[attribute: value]` is good, while we don't encourage `[attribute = value]`, even though it is semantically equivalent.   

## Examples

The following block will never execute the `bind` action because of a contradiction in the `search`:

```eve
search
  x = 10
  x = 20

bind @browser
  [#div text: "This will never display"]
```

The search action says that `x = 10` and `x = 20`, which is never true. Since there is no order or assignment in Eve, this statement does not first set `x` to 10 and then to 20. To see this more clearly, these two statements could be written as one:`x = 10 = 20`.  

## See Also

[inequality](../inequality) | [joins](../joins)