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

search @database1, ..., @databaseN
```

## Description

`search` signifies the beginning of the search phase of a block. By default, searched records are drawn from a default local database.

`search @database1, ... @databaseN` draws searched records from one or more databases.

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