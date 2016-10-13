---
menu:
  main:
    parent: "Actions"
title: "search"
weight: 1
---

# search

signifies the beginning of the search phase

## Syntax

```eve
search

search @context

search (@context1, @context2, ... @contextN)
```

## Description

`search` signifies the beginning of the search phase of a block. By default, searched records are drawn from a default local context.

`search @context` draws searched records from a particular context.

`search (@context1, ... @contextN)` draws searched records from multiple contexts.

## Examples

search a record

```eve
search
  [name]
  
bind
  [#div text: name]  
```

Omit the search phase

```eve
bind
  [#div text: "Hello, world"]
```

## See Also

[bind](../bind) | [commit](../commit) | [databases](../databases) | [records](../records)