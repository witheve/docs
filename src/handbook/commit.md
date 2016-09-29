---
menu:
  main:
    parent: "Actions"
title: "commit"
weight: 3
---

# commit

adds or updates records while keeping old versions

## Syntax

```eve
commit

commit @context

commit (@context1, ..., @contextN)
```

## Description

`commit` signifies the beginning of the action phase of a block. The semantics of commit are to update or create new objects, while leaving previous versions in tact. By default, committed records are directed to a default local context.

`commit @context` directs committed records to a particular context.

`commit (@context1, ..., @contextN)` directs committed records to multiple contexts.

## Bind vs. Commit

Bind and commit are both action fences, so they have close but very different behavior. Let's look at how the two differ. Consider the following block that reads the current time, and prints it to the screen:

```eve
match
  [#time seconds]
commit
  [#div text: seconds]
```

When you run this, you'll see that every second you a new number gets added to the screen, while all the previous numbers remain. That's the behavior of commit. When you commit something, you're adding it to the database permanently i.e. **if the supporting records are removed, the committed records stay**.

Now let's look at what bind does:

```eve
match
  [#time seconds]
bind
  [#div text: seconds]
```

Instead of keeping the old record, bind replaces it with a new record. Therefore we only ever have one time on the screen, the current time. That's because the display of the old time was supported by data that is no longer there. With a bind, **if the supporting records are removed, then the bound records are removed**.

## Tips

When matching on an event like a `#click`, a `commit` is usually more appropriate than bind. When an event occurs, a record representing the event is added to a database. That record exists for exactly one "instant", and then it is removed from the database. During that "instant", any block matching on that event will be satisfied. 

If you `bind` on the event, then the result will disappear as soon as the event does. This means the result will be ephemeral, disappearing as soon as the event does. However, If you `commit` on the event, then that result will persist after the event has been removed.

## Examples

Initialize a counter when a session connects

```eve
match
  [#session-connect]
commit
  [#counter count: 0]
```
Increment a counter when a button is clicked

```eve
match
  [#click element: [#count-button diff counter]]
commit
  counter.count := counter.count + diff
```

## See Also

[bind](../bind) | [databases](../databases) | [match](../match)
