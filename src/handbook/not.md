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
friends not invited to the party
  friends = [#friend]
  not(friends = [#invited])
```

## Examples

## See Also

[is](../is) |