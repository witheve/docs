# time

provides the current time

## Syntax

```
[#time hours minutes seconds milliseconds]
```

## Attributes

- hours - current hour
- minutes - current minute
- seconds - current second
- milliseconds - current millisecond

## Description

Provides the current time in UTC. To convert the time to a specific timezone, use ...

Time updates at the frequency of the smallest unit of time selected.

## Examples

Prints the current time as a formatted string.

```
match
  [#time hours minutes seconds]
bind
  [#div text: "The time is {{hours}}:{{minutes}}:{{seconds}}"]
```

## See Also