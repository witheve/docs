---
menu:
  main:
    parent: "Records"
title: "Tags"
weight: 2
---

# Tag Selector

The tag selector is a shortcut for the `tag` attribute on records

## Syntax

```eve
#tag

#"tag with spaces"
```

## Description

The tag selector `#` is a shortcut for the `tag` attribute, e.g. `[#person]` is a shortcut for `[tag: "person"]`. 

The tag selector is useful for selecting a group of similar records. 

Tags are useful for making a record unique. For instance, in a single database, many disparate records might have an age attribute. e.g. `[age]` might select unrelated records if you're only interested in ages of employees. A more specific record would be `[#employee age]`, which would match only records that are both tagged "employee" and have an `age` attribute.

Multiple tags can be used to further specify a record. For instance:

```eve
[#employee wage]
[#employee #part-time wage]
```

The first record matches all `#employees`, while the second matches only those who are also `#part-time`. Any number of tags can be used in this way.

## Tips

Tags are useful for creating switches. Add a tag to a record to include it in a set. Then, when you don't want that record in the set anymore, just remove the tag. The record will no longer match the set. 

## Examples

Search for students and display their names and the grade they're in.

```eve
search
  [#student name grade]

bind @browser
  [#div text: "{{name}} is in {{grade}}th grade."]
```

Add students with good marks to the honor roll. When a student's GPA falls below 3.5, he or she will not make the honor roll because this block will not add the `#honor-roll` tag.

```eve
search
  students = [#student gpa >= 3.5]

bind
  students += #honor-roll
```

Display the honor roll

```eve
search
  [#student #honor-roll name]

bind @browser
  [#div text: "{{name}} is a smarty pants"]
```

## See Also

[records](../records) | [search](../search) | [sets](../sets) 