---
menu:
  main:
    parent: "Update Operators"
title: "Add: +="
weight: 1
---

# Add Operator

adds a value to an attribute on a record

## Syntax

```eve
// Add a value to an attribute
record.attribute += value

// Add a tag to a record
record += #tag

// Add a name to a record
record += @name
```

## Description

`record.attribute += value` adds `value` to `attribute`. If `record` already has an attribute with a value, then `value` will be added to the set. Otherwise, if `record` doesn't have an attribute with this name already, then `:=` will create the attribute and set it to `value`. As Eve variables are sets, if the value already exists on the attribute, the value cannot be added again.

`attribute` can be an attribute already on the record, or it can be a new attribute.

`value` can be a string or number literal, a variable bound to one of these, or a record.  

`record += #tag` adds `#tag` to `record`. This is shorthand for `record.tag += "tag"`.

`record += @name` adds `@name` to `record`. This is shorthand for `record.name += "name"`.

## Examples

Add the current second to a record. Since Eve works in sets, `time-history` can only ever hold then numbers 0 through 60. This means after one minute passes, no new elements will be added to `tracker.time-history`. 

```eve
search
  tracker = [#seconds-tracker]
  [#time seconds]

commit
  tracker.time-history += seconds
```

We can get around this by adding a record:

```eve
search
  tracker = [#seconds-tracker]
  [#time seconds]

commit
  tracker.time-history += [seconds]
```

Now, instead of adding numbers to `time-history` we are adding records, which are associated with a unique ID. So after the first minute passes, time-history will contain duplicate `seconds`, but the record ID will ensure each one is unique.

---

Add the `#honor-student` tag to any `#student` with a GPA greater than 3.75:

```eve
search
  student = [#student gpa > 3.75]
  
bind
  student += #honor-student
```

## See Also

[set operator](../set) | [remove operator](../remove) | [merge operator](../merge) | [bind](../bind) | [commit](../commit)
