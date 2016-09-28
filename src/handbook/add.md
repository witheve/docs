---
menu:
  main:
    parent: "Update Operators"
title: "Add: +="
weight: 1
---

# Add Operator

Adds a value to an attribute on a record

## Syntax

```eve
record.attribute += value
```

## Description

`record.attribute += value` adds `value` to `attribute`. If `record` already has an attribute with a value, then `value` will be added to the set. Otherwise, if `record` doesn't have an attribute with this name already, then `:=` will create the attribute and set it to `value`.

`attribute` can be an attribute already on the record, or it can be a new attribute.

`value` can be a string or number literal, a record, or a variable bound to one of these.  

## Examples

```

```

## See Also

[set operator](../set) | [remove operator](../remove) | [merge operator](../merge) | [bind](../bind) | [commit](../commit)