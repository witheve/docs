---
menu:
  main:
    parent: "Actions"
title: "bind"
weight: 2
---

# bind

updates or creates records, syncing them with supporting records

## Syntax

```eve
bind

bind @database

bind (@database1, ..., @databaseN)
```

## Description

`bind` updates or creates new records with a lifetime equal to their supporting records. Supporting records are those within the block that match a search. If those records change, all bound records change accordingly. If supporting records are removed, bound records and updates are removed as well.

By default, bound records are directed to a default local database.

`bind @database` directs bound records to a particular database.

`bind (@database1, ..., @databaseN)` directs bound records to multiple database.

## Bind vs. Commit

While bind and commit both update records in a database, they do so with slightly different behavior; a bound record has the same lifetime as its supporting records, whereas a committed record exists in the database until it is removed intentionally. Let's take a closer look at this distinction and what the implications are. 

Consider the following block that reads the current time, and prints it to the screen:

```eve
search
  [#time seconds]

bind @browser
  [#div text: "current second: {{seconds}}"]
```

In this block we search for the current time and bind a message that displays it. The message exists as long as the current time stays the same (1 second obviously). When the time changes, the current message disappears and is replaced with a new message, displaying the new time. This is the behavior of bind; **bound records persist only as long as their supporting records**. 

For example, the message "current second: 39" is created in `@browser` when the current second is 39. When the current second changes to 40, "current second: 39" is no longer supported by anything, and it is removed from `@browser`. Simultaneously, the new time supports a new message reading "current second: 40", which is added to `@browser`. The effect is that the message displayed on the screen is continually updated to match the current time.

Now let's look at what commit does in contrast:

```eve
search
  [#time seconds]

commit @browser
  [#div text: "current second: {{seconds}}"]
```

In this block, we only changed `bind` to `commit`. When you run it, you'll see a message like before. However, you'll notice the effect of commit is that messages begin to accumulate every second. Unlike with bind, **committed records persist in the database until they are intentionally removed**.

Let's look at the same example as before. When the time is 39, the message is "current second: 39". This record is committed to `@browser`, so it will stay there until it is removed by the program; Eve will not remove it automatically, as it would if the message were bound. When the time changes to 40, a new message reading "current second: 40" is committed to `@browser`. Now there are two messages in `@browser`, and both are displayed.
 
To make things very concrete, we can actually mimic the behavior of a bind using two blocks that commit. We've already got the first one, that adds messages to `@browser`. Now all we need is a second block, one that removes unsupported committed messages from `@browser`:

```eve
search 
  [#time seconds]

search @browser
  s = seconds - 1
  last-time = s - 60 * floor[value: s / 60]
  msg = [#div text: "current second: {{mod[value: last-time, by: 60]}}"]
  
commit @browser
  msg := none
```

This block searches for the message that was displayed during the previous second, and sets it to `none`, thereby removing it from `@browser`. Therefore, only the message displaying the current time is displayed on the screen. This behavior is identical to that of the block that binds these messages instead of committing them!

## Tips

When you want to display data in an interface element like a `#div`, a bind is usually the more appropriate choice comapred to a commit. A bind will keep the interface element always up-to-date, whereas a commit will leave lingering elements that no longer reflect the current state of the program.

When searching for an event like a `#click`, a commit is usually more appropriate than bind. When an event occurs, a record representing the event is added to a database. That record exists for exactly one "instant", and then it is removed from the database. During that "instant", any block searching for that event will be satisfied and can execute a bind or commit action. If you `bind` on the event, then the result will disappear as soon as the event does. However, If you `commit` on the event, then that result will persist after the event has been removed.

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

[commit](../commit) | [databases](../databases) | [search](../search)