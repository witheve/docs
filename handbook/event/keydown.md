---
menu:
  main:
    parent: "@event"
title: "keydown"
---

# keydown

key down event

## Syntax

```
[#keydown]
[#keydown element]
```

## Attributes

- `element` - the element on which the key was pressed.

## Description

When a key is pressed when an element in the DOM is focused, a `#keydown` record is created in the `@event` database.

## Examples

```eve
search @event
  event = [#keydown key]

commit @browser
  [#span text: "key pressed: {{key}}" event]
```

## See Also
[keyup](../keyup)
