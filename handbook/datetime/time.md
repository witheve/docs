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
[#time year 
       month 
       day 
       hours 
       hours-24 
       minutes 
       seconds 
       time-string 
       time seconds 
       frames 
       ampm]
```

## Attributes

- `year` - the current year
- `month` - the current month from 0 to 11
- `day` - the current day of the month from 1 to 31
- `hours` - current hour from 0 to 11
- `hours-24` - current hour from 0 to 23
- `minutes` - current minute from 0 to 59
- `seconds` - current second from 0 to 59
- `time-string` - the current time in a string of the form `HH:MM AM/PM`
- `timestamp` - the number of milliseconds since midnight January 1, 1970
- `ampm` - a string indicating morning or evening
- `frames` - the number of frames elapsed since the program began. This fastest updating attribute on `#time`, refreshing evey 16 milliseconds.

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

### Example Usage

- [Clock](http://play.witheve.com/#/examples/clock.eve)
- [CRM](http://play.witheve.com/#/examples/CRM.eve)