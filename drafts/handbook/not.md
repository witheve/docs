# Not

Not is an anti-join operator, which takes a body of objects. For example, we can get a list of people who are not invited to the party:

```
friends not invited to the party
  friends = [#friend]
  not(friend = [#invited])
```