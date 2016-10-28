---
menu:
  main:
    parent: "Actions"
title: "bind"
weight: 2
---

# bind

updates or creates records, syncing them with matched records

## Syntax

```eve
bind

bind @database1, ..., @databaseN
```

## Description

`bind` updates or creates new records with a lifetime equal to matched records within the block. Matched records are any records found in a search action. If matched records change during program execution, all bound records change accordingly. If any matched records are removed (i.e. they no longer match the search), bound records and updates are removed as well.

By default, bound records are directed to a default local database.

`bind @database1, ..., @databaseN` directs bound records to one or more databases.

## Bind vs. Commit

While bind and commit both update records in a database, they do so with slightly different behavior; a bound record has the same lifetime as its supporting records, whereas a committed record exists in the database until it is removed intentionally. Let's take a closer look at this distinction and what the implications are.

Consider the following block that reads the current time, and prints it to the screen:

```eve
search
  [#time seconds]

bind @browser
  [#div text: seconds]
```

In this block we search for the current time and bind it to a message that displays it. The message exists as long as the current time stays the same (1 second obviously). When the time changes, the current message disappears and is replaced with a new message, displaying the new time. This is the behavior of bind; **bound records persist only as long as their matching records**. 

Now let's look at what commit does in contrast:

```eve
search
  [#time seconds]

commit @browser
  [#div text: seconds]
```

Comapred to the previous block, we only changed `bind` to `commit`. When you run this block, at first you'll see a single message like before. However, you'll notice that messages begin to accumulate every second. Unlike with bind, **committed records persist in the database until they are intentionally removed**.
 
To make things very concrete, we can actually mimic the behavior of a bind using two blocks that commit. We've already got the first one (the one just above), that commits messages to `@browser`. Now all we need is a second block, one that removes old committed messages from `@browser`:

```eve
search 
  [#time seconds]

search @browser
  s = seconds - 1
  // Do some math to handle the roll over at 60 seconds
  last-time = s - 60 * floor[value: s / 60]
  msg = [#div text: last-time]
  
commit @browser
  msg := none
```

This block searches for the message that was displayed during the previous second, and sets it to `none`, thereby removing it from `@browser`. Therefore, only the message bound to the the current time is displayed on the screen. This behavior is identical to that of the block that binds these messages instead of committing them!

### An Execution Perspective

Another way to understand `bind` vs. `commit` is by looking at how the databases change over each tick of the Eve evaluator. We'll consider the same program as before, looking at how its state changes over time. First, consider the bind case. When the program starts, there's nothing in any databases; the program is a blank slate. At `t1` the first `#time` is added to `@session`. This addition is bound to a `#div`, which is added to `@browser`. These changes are summarized in the first column of the table below.

At `t2`, a new `#time` is added to `@session`, and the one from `t1` is removed. Since we used a bind, this causes the existing `#div` to be removed from `@browser`, but it is replaced with a new `#div` reflecting the current time. At `t3`, the same operations takes place, and this process continues until the program is terminated.

<table class="dataTable">
  <tr>
    <th>
       
    </th>
    <th>
t0
    </th>
    <th>
t1
    </th>
    <th>
t2
    </th>
    <th>
t3
    </th>
  </tr>
  <tr>
    <td>
delta
    </td>
    <td>

    </td>
    <td>
+ [#time seconds: 39]
+ [#div text: "39"]
    </td>
    <td>
+ [#time seconds: 40]
- [#time seconds: 39]
+ [#div text: "40"]
- [#div text: "39"]
    </td>
    <td>
+ [#time seconds: 41]
- [#time seconds: 40]
+ [#div text: "41"]
- [#div text: "40"]
    </td>  
  </tr>
  <tr>
    <td>
@session
    </td>
    <td>
[ ]
    </td>
    <td>
[[#time seconds: 39]]
    </td>
    <td>
[[#time seconds: 40]]
    </td>
    <td>
[[#time seconds: 41]]
    </td>  
  </tr>
  <tr>
    <td>
@browser
    </td>
    <td>
[ ]
    </td>
    <td>
[[#div text: 39]]
    </td>
    <td>
[[#div text: 40]]
    </td>
    <td>
[[#div text: 41]]
    </td>  
  </tr>
</table>

Let's perform the same analysis in the commit case. In this program, things start off the same; initially the database is empty, and at `t1` a `#time` and a `#div` are added to their respective databases. At `t2`, things get more interesting. While the old `#time` is still replaced, the `#div` displaying the old time is not replaced since we committed it to `@browser`. Indeed, in subsequent rounds of execution, the contents of `@browser` keeps growing. 

<table class="dataTable">
  <tr>
    <th>
       
    </th>
    <th>
t0
    </th>
    <th>
t1
    </th>
    <th>
t2
    </th>
    <th>
t3
    </th>
  </tr>
  <tr>
    <td>
delta
    </td>
    <td>
    </td>
    <td>
+ [#time seconds: 39]
+ [#div text: "39"]
    </td>
    <td>
+ [#time seconds: 40]
- [#time seconds: 39]
+ [#div text: "40"]
    </td>
    <td>
+ [#time seconds: 41]
- [#time seconds: 40]
+ [#div text: "41"]
    </td>  
  </tr>
  <tr>
    <td>
@session
    </td>
    <td>
[ ]
    </td>
    <td>
[[#time seconds: 39]]
    </td>
    <td>
[[#time seconds: 40]]
    </td>
    <td>
[[#time seconds: 41]]
    </td>  
  </tr>
  <tr>
    <td>
@browser
    </td>
    <td>
[ ]
    </td>
    <td>
[[#div text: 39]]
    </td>
    <td>
[[#div text: 39],
 [#div text: 40]]
    </td>
    <td>
[[#div text: 39], 
 [#div text: 40], 
 [#div text: 41]]
    </td>  
  </tr>
</table>

## Tips

When you want to display data in an interface element like a `#div`, a bind is usually the more appropriate choice compared to a commit. A bind will keep the interface element always up-to-date, whereas a commit will leave lingering elements that no longer reflect the current state of the program.

When searching for an event like a `#click`, a commit is usually more appropriate than bind. When an event occurs, a record representing the event is added to a database. That record exists for exactly one "instant", and then it is removed from the database. During that "instant", any block searching for that event will be satisfied and can execute a bind or commit action. If you `bind` on the event, then the result will disappear as soon as the event does. However, if you `commit` on the event, then that result will persist after the event has been removed.

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