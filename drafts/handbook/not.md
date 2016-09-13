# not

excludes records from the results


# Syntax

```
not([ ... ])
```

## Description

Not is an anti-join operator, which takes a body of records. For example, we can get a list of people who are not invited to the party:

```
friends not invited to the party
  friends = [#friend]
  not(friends = [#invited])
```