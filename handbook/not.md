---
menu:
  main:
    parent: "Records"
title: "not"
weight: 4
---

# not

excludes records from the results

## Syntax

```eve
not([ ... ])
```

## Description

Not is an anti-join operator, which takes a body of records. For example, we can get a list of people who are not invited to the party:

```eve
// friends not invited to the party
search
  friends = [#friend]
  not(friends = [#invited])

bind @view
  [#value | value: "{{friends.name}} wasn't invited to the party"]
```

## Examples

## See Also

[is](../is) | [records](../records) | [match](../search)
