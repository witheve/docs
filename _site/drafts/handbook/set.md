# Set Operator

Sets the value of an attribute on a record

## Syntax

```
record.attribute := value
```

## Description

`record.attribute := value` sets `attribute` to `value`. If `record` already has an attribute with a value, then this will overwrite it. If `record` doesn't have an attribute with this name already, then this will create the attribute and set it to `value`.

`attribute` can be an attribute already on the record, or it can be a new attribute.

`value` can be a string or number literal, a record, or a variable bound to one of these.  

## Examples

Set the `age` of `#student`s that don't have one already

```
match
  student = [#student]
  age = if student.age then student.age
        else if student.grade then student.grade + 6
bind
  student.age := age
```

## See Also

[add operator](add.md) | [remove operator](remove.md) | [merge operator](merge.md) | [action phase](action-phase.md)