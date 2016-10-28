---
menu:
  main:
    parent: "Date & Time"
title: "time"
---

# time

provides the current time

## Syntax

```eve
[#time hours minutes seconds milliseconds]
```

## Attributes

- `hours` - current hour
- `minutes` - current minute
- `seconds` - current second
- `milliseconds` - current millisecond

## Description

Provides the current time as reported by the system clock.

Time updates at the frequency of the smallest unit of time selected in the record.

## Examples

Prints the current time as a formatted string.

```eve
search
  [#time hours minutes seconds]

bind @browser
  [#div text: "The time is {{hours}}:{{minutes}}:{{seconds}}"]
```

## See Also

[date](date.md)