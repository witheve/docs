# Set Operator

Sets the value of an attribute on a record

## Syntax

```eve
record.attribute := value
```

## Description

`record.attribute := value` sets `attribute` to `value`. If `record` already has an attribute with a value, then this will overwrite it. Otherwise, if `record` doesn't have an attribute with this name already, then `:=` will create the attribute and set it to `value`.

`attribute` can be an attribute already on the record, or it can be a new attribute.

`value` can be a string or number literal, a record, or a variable bound to one of these.  

## Examples

Set the `age` of `#student`s that don't already have an age.

```eve
match
  student = [#student]
  age = if student.age then student.age
        else if student.grade then student.grade + 6
bind
  student.age := age
```

## See Also

[add operator](../add) | [remove operator](../remove) | [merge operator](../merge) | [action phase](../action-phase)