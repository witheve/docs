## Not Yet Implemented

# date

provides the current date

## Syntax

```
[#date day month year]
```

## Attributes

- day - current numeric day
- month - current numeric month
- year - current numeric year

## Description

Provides the current day as reported by the system clock.

Time updates at the frequency of the smallest selected in the record.

## Examples

Prints the current date as a formatted string.

```
match
  [#date month day year]
bind
  [#div text: "Today is {{month}}/{{day}}/{{year}}"]
```

## See Also

[time](time.md)