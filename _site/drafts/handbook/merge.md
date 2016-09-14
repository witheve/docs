# Merge Operator

Merges one record into another

## Syntax

```
record <- [attribute: value, ... ]
```

## Description

`record <- [attribute: value, ... ]` merges the anonymous record `[attribute: value, ... ]` into the record bound to `record`. This is useful in setting multiple attributes on a record at once.

## Examples

Match celia and merge a record

```
match
  celia = [@Celia]
bind
  celia <- [#student grade: 10, school: "East"]
```

## See Also

[set operator](set.md) | [add operator](add.md) | [remove operator](remove.md) | [action phase](action-phase.md)