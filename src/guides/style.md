---
menu:
  main:
    parent: "Guides"
title: "Style Guide"
---


# Eve Style Guide

## Comments

Add a space after the comment marker to make comments more readable

```eve
// This is correct
//This is incorrect
```

## Naming

As much as possible, don't abbreviate names. The goal in writing an Eve program is to be as readable as possible. An abbreviation that makes sense to you might not make sense to someone else, or even yourself when you revisit the program in a year.

Multi-word names should be joined by dashes `-`, not underscores `_`.

## Program layout

Blocks should be preceeded by at least a one line comment, indicating the purpose of the block.

## Commas

Although Eve treats commas as white-space, they should be used to enhance readability as needed:

In records, separate attributes with commas after a bind

```eve
// More readable
[#person name age: 30, height: 5, hair-color: "brown"]

// Less readable
[#person name age: 30 height: 5 hair-color: "brown"]
```

Commas should also be used to separate items contained in parenthesis, such as in a multiple return.

```eve
// More readable
(val1, val2) = if [#tag1] then (1, false)
               else (0, true)
total = count[given: attr1, per: (attr2, attr3)]

// Less readable
(val1 val2) = if [#tag1] then (1 false)
               else (0 true)
total = count[given: attr1 per: (attr2 attr3)]
```

## Indention

Eve does not enforce indention, but it is important for readability

### Blocks

`search`. `commit`, and `bind` should be the only lines at zero indention. Everything else should be indented.

```eve
// Good
match
  [...]

bind
  [...]
```

But not this:

```eve
// Bad
match
[...]

bind
[...]
```

### If-Then

Each arm of an `if-then` statement should be at the same indention level. The `then` portion of the statement can be on a new line if the `if` portion is exceptionally long, but it should be indented once.

```eve
// Good if layout
value = if bar then baz
        if bar2 then baz2
        else baz3

// Okay, especially if the branch is long
value = if [#long-record attr1 attr2 attr3] 
          then baz
        if [#long-record2 attr1 attr2 attr3] 
          then baz2
        else baz3

// Bad if layout
value = if bar then baz
if bar2 then baz2
else baz3

// Also a bad if layout
value = if bar then baz if bar2 then baz2 else baz3
```

### Nested records

When nested records are placed on a new line, they should be indented once past the parent record. Where possible, nested records should be the final attribute in the parent record.

Nested records should appear on their own line if you are nesting more than one.

```eve

// Okay, but only do this for one level of nesting
[#div text: "hello", children: [#div text: "world"]]

// More readable
[#div text: "hello", children: 
  [#div text: "world"]]

// Also good
[#div children: 
  [#div text: "div1"]
  [#div text: "div2" children:
    [#div text: "div3"]]]  

// Not good
[#div children: [#div text: "div2"] [#div text: "div2"]]

// Also not good
[#div children: 
  [#div text: "world"], text: "hello"]
```

## Newlines

Newlines should preceed and follow every code block. 

Within code blocks, a newline should be added between every action. This enhances readability, especially in the case where multiple actions are needed. For instance, the following code block:

```eve
search @studentDB
  students = [#students]

search @schoolDB
  schools = [#school]
  schools.name = student.school

bind @browser
  [#div text: students.name] 

commit
  [#new-record]
```

is more readable than this code block:

```eve
search @studentDB
  students = [#students]
search @schoolDB
  schools = [#school]
  schools.name = student.school
bind @browser
  [#div text: students.name] 
commit
  [#new-record]
```