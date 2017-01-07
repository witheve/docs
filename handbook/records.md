---
menu:
  main:
    parent: "Core Language"
title: "Records"
weight: 1
---

# Records

Records are `attribute: value` pairs associated to a unique ID

## Syntax

```eve
// A record with an attribute
[attribute]

// A record with an attribute of given value
[attribute: value]

// A record with N attributes of given values
[attribute1: value1, ... , attributeN: valueN]

// A record nested within another record
[attribute1: [attribute2: value]]

// Equates a record and a variable
r = [attribute ...]

// Accessing an attribute on a record
r.attribute

// Join two records
[attribute1: attribute2]
[attribute2]
```

## Description

Records are the predominant datatype in Eve. Records are used in two ways:

1. In a `search` you supply a pattern of attributes to match records in a supplied database.
2. In a `bind` or `commit`, you supply a pattern of attributes to insert into a database.

`[attribute]` matches all records with the given attribute.

`[attribute1 ... attributeN]` matches all records with the given attributes.

`[attribute1: variable1, ... , attributeN: variableN]` the expanded form of the above pattern. If the variable assignment is omitted, then the attribute values are assigned to variables equaling their name. If the variable assignment is included, the variables can be used to access their respective attributes instead of the attributes' names.

`[attribute: value]` matches all records with the given attribute bound to specified value.

`[attribute > value]` matches all records with the given attribute bound filtered on a value. The inequality `>` can be one of the inequality operators.

`[attribute1: value1, ... , attributeN: valueN]` is the general case for records. This matches all records with all of the given attributes filtered on the given values.

`[attribute1: [attribute2: value]]` nests a record within another record.

`r = [attribute ...]` equates a record to a variable `r`.

`r.attribute` accesses the value of `attribute` on variable `r`.

## Examples

Match all records with a name, and bind a `#div` for each one.

```eve
search
  [name]

bind @browser
  [#div text: name]
```

Records can have multiple attributes

```eve
search
  [#student name grade school]

bind @browser
  [#div text: "{{name}} is in {{grade}}th grade at {{school}}"]
```

Join records by binding attributes from one record into another record. Equate records with variables. Access record attributes using dot notation.

```eve
search
  school = [#school name address]
  student = [#student school: name]

bind @browser
  [#div text: "{{student.name}} attends {{school.name}} at {{address}}"]
```

Records can be nested.

```eve
commit
  [name: "Jeremy" spouse: [name: "Wendy"]]
```

Dot notation can be composed for deep access to records

```eve
search
  Jeremy = [name: "Jeremy"]

bind @browser
  [#div text: "{{Jeremy.name}} is married to {{Jeremy.spouse.name}}"]
```

Using dot notation to access record attributes means conditioning the block to have those attributes available.
These two following blocks point to the same results:

**without dot notation**
```eve
search
  [#student name grade school]

bind @browser
  [#div text: "{{name}} is in {{grade}}th grade at {{school}}"]
```

**with dot notation**
```eve
search
  [#student]

bind @browser
  [#div text: "{{student.name}} is in {{student.grade}}th grade at {{student.school}}"]
```

They get executed only if there's at least one student with a name, a grade and a school attribute.

## See Also

[search](../search) | [bind](../bind) | [commit](../commit) | [tags](../tags) | [databases](../databases) | [equality](../equality) | [inequality](../inequality) | [joins](../joins)
