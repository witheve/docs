---
menu:
  main:
    parent: "Actions"
title: "match"
weight: 1
---

# match

signifies the beginning of the match phase

## Syntax

```eve
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

```eve
match
  [name]
bind
  [#div text: name]  
```

Omit the match phase

```eve
bind
  [#div text: "Hello, world"]
```

## See Also

[bind](../bind) | [commit](../commit) | [contexts](../context) | [match phase](../match-phase) | [action phase](../action-phase)