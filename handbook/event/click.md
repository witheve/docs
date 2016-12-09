---
menu:
  main:
    parent: "@event"
title: "click"
---

# click

click event

## Syntax

```
[#click]
[#click element]
[#click #direct-target element]
```

## Attributes

- `#direct-target` - selects only directly clicked elements, as opposed to elements to which the event bubbles.
- `element` - the element that was clicked.

## Description

When an element in the DOM is clicked, a `#click` record is created in the `@event` database.

## Examples

## See Also