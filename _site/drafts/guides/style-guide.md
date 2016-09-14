# Eve Style Guide

## Conventions

# Comments

Add a space after the comment marker

```
// This is correct
//This is incorrect
```

# Naming

As much as possible, don't abbreviate names. The goal of an Eve program is to be as readable as possible. An abbreviation that makes sense to you might night make sense to someone else, or even yourself when you revisit the program in a year.

Multi-word names should be joined by dashes `-`, not underscores `_`


# Program layout

Blocks should be preceeded by at least a one line comment, indicating the purpose of the Blocks

# Commas

Although Eve treats commas as white-space, they should be used as follows:

In records, separate attributes with commas after a bind

```
// More readable
[#person name age: 30, height: 5, hair-color: "brown"]

// Less readable
[#person name age: 30 height: 5 hair-color: "brown"]
```

# Indention

Eve does not enforce indention, but it is important for readability

## Blocks

`match`. `commit`, and `bind` should be the only lines at zero indention. Everything else should be indented.

```
// Good
match
  [...]
bind
  [...]
```

But not this:

```
// Bad
match
[...]
bind
[...]
```

## If-Then

Each arm of an `if-then` statement should be at the same indention level. The `then` portion of the statement can be on a new line if the `if` portion is exceptionally long, but it should be indented once.

```
foo = if bar then baz
      if bar2 then baz2
      if bar then baz3
```

## Nested records

When nested records are placed on a new line, they should be indented once past the parent record.

Nested records should appear on their own line if you are nesting more than one.