---
menu:
  main:
    parent: "Update Operators"
title: "Merge <-"
weight: 4
---

# Merge Operator

Merges one record into another

## Syntax

```eve
record <- [attribute: value, ... ]
```

## Description

`record <- [attribute: value, ... ]` merges the anonymous record `[attribute: value, ... ]` into the record bound to `record`. Merge is useful for setting multiple attributes on a record at once.

## Examples

Match a record and merge a record into it.

```eve
match
  celia = [@Celia]
bind
  celia <- [#student grade: 10, school: "East"]
```

## See Also

[set operator](../set) | [add operator](../add) | [remove operator](../remove) | [action phase](../action-phase)