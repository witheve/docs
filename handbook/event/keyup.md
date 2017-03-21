---
menu:
  main:
    parent: "@event"
title: "keyup"
---

# keyup

key up event

## Syntax

```
[#keyup]
[#keyup element]
```

## Attributes

- `element` - the element on which the key was released.

## Description

When a key is released when an element in the DOM is focused, a `#keyup` record is created in the `@event` database.

## Examples

```eve
search @event
  event = [#keyup key]

commit @browser
  [#span text: "key released: {{key}}" event]
```

## See Also
[keydown](../keydown)
