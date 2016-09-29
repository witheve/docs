---
menu:
  main:
    parent: "Actions"
title: "bind"
weight: 2
---

# bind

adds or updates records while overwriting old versions

## Syntax

```eve
bind

bind @context

bind (@context1, ..., @contextN)
```

## Description

`bind` signifies the beginning of the action phase of a block. The semantics of bind are to update or create new objects, while removing previous versions. By default, bound records are directed to a default local context.

`bind @context` directs bound records to a particular context.

`bind (@context1, ... @contextN)` directs bound records to multiple contexts.

## Bind vs. Commit

Bind and commit are both action fences, so they have close but very different behavior. Let's look at how the two differ. Consider the following block that reads the current time, and prints it to the screen:

```eve
match
  [#time seconds]
commit
  [#div text: seconds]
```

When you run this, you'll see that every second a new second gets added to the screen, while all the previous seconds remain. That's the behavior of commit. When you commit something, you're adding it to a database permanently i.e. **if the supporting records are removed, the committed records stay**.

Now let's look at what bind does:

```eve
match
  [#time seconds]
bind
  [#div text: seconds]
```

Instead of keeping the old record, bind replaces it with a new record. Therefore this block only ever displays the current second. With a bind, **if the supporting records are removed, then the bound records are removed as well**.

## Tips

When you want to display data in an interface element like a `#div`, a bind is usually the more appropriate choice comapred to a commit. A bind will keep the interface element always up-to-date, whereas a commit will leave lingering elements that no longer reflect the current state of the program.

## Examples

Display a formatted time:

```eve
match
  [#time hours minutes seconds]
  (am/pm, adjusted-hours) = if hours >= 12 then ("PM", hours - 12)
                            else if hours = 0 then ("AM", 12)
          									else ("AM", hours)
bind @browser
  [#div text: "The current time is {{adjusted-hours}}:{{minutes}}:{{seconds}} {{am/pm}}"]
```

## See Also

[commit](../commit) | [databases](../databases) | [match](../match)