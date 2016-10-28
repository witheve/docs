---
menu:
  main:
    parent: "Date & Time"
title: "date"
---

# date

provides the current date

## Syntax

```eve
[#date day month year]
```

## Attributes

- `day` - current numeric day
- `month` - current numeric month
- `year` - current numeric year

## Description

Provides the current day as reported by the system clock.

Time updates at the frequency of the smallest selected in the record.

## Examples

Prints the current date as a formatted string.

```eve
search
  [#date month day year]

bind @browser
  [#div text: "Today is {{month}}/{{day}}/{{year}}"]
```

## See Also

[time](time.md)