# Match phase

The match phase is used to gather information from one or more databases.

## Syntax

```
match
match @context
match (@context1, @context2, ... @contextN)
```

## Description

In the match phase of a block, you gather all the information you need to complete the block. This phase is prefaced with the `match` keyword, and continues until the action phase, as indicated by a  `bind` or `commit`. 

The match phase is all-or-nothing; if all of the records in the match phase are found, then the block proceeds to the action phase. If any of the records in the match phase are not found, then the action phase cannot proceed.

## Examples

Match a record

```
match
  [name]
bind
  [#div text: name]  
```

Omit the match phase

```
bind
  [#div text: "Hello, world"]
```

## See Also

[bind](bind.md) | [commit](commit.md) | [contexts](context.md)