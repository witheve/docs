# match

signifies the beginning of the match phase

## Syntax

```
match
match @context
match (@context1, @context2, ... @contextN)
```

## Description

`match` signifies the beginning of the match phase of a block. By default, matched records are drawn from a default local context.

`match @context` draws matched records from a particular context.

`match (@context1, ... @contextN)` draws matched records from multiple contexts.

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

[bind](bind.md) | [commit](commit.md) | [contexts](context.md) | [match phase](match-phase.md) | [action phase](action-phase.md)