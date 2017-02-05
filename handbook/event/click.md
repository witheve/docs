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

Initialize the DOM with a `button` element:

```eve
commit @browser
  [#button #btnHello text: "Click Me"]
```

Listen for `click` event emitted from `button` element it gets clicked:

```eve
search @session @browser @event
  btn = [#click element: [#button #btnHello]]

commit @view
  [#value | value: "{{btn.text}} has been clicked"] // it will print "Click Me has been clicked"
```


## See Also
[change](../change)
