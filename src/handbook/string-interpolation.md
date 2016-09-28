---
menu:
  main:
    parent: "Expressions"
title: "String Interpolation"
weight: 5
---

## Syntax

```eve 
"{{ variable }}"
```

## Description

`"{{variable}}"` embeds the value of `variable` within a string.

## Examples

```eve
bind @browser
  [#div children:
    [#h1 text: "Guest List"]
    [#div text: "{{name}} will eat {{guest.burgers}} {{burger-switch}}" sort: name]
    [#h2 text: "Total burgers needed: {{burgers}}"]]
```

## See Also