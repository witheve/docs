# Action Phase

used to update or create records

## Description

In the action phase of a block, you can add or modify records using information collected in the match phase.  

The `action` phase of a block indicates that we are changing the Eve DB in some way. This phase is preceded by either `bind` or `commit`. While the `match` phase can be omitted, the `action` phase is required; the block doesn't do anything without an `action`.

The transition to the `action` phase means we're no longer able to use any statements available in the `match` phase, e.g. `if`, `not`, aggregates, some expressions, etc.

## Records and the Action Phase

In the action phase, you create or update records, whereas in the match phase you match records in the Eve DB.

## Examples

A block with only an action phase

```
bind
  [#div text: "Hello, world"]
```

## See Also

[bind](bind.md) | [commit](commit.md) | [match](match.md) | [match phase](match-phase.md) | [contexts](context.md)