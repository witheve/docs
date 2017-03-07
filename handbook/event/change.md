---
menu:
  main:
    parent: "@event"
title: "change"
---

# change

change event

## Syntax

```
[#change]
[#change element]
[#change #direct-target element]
```

## Attributes

- `#direct-target` - selects only directly changed elements, as opposed to elements to which the event bubbles.
- `element` - the element that changed.

## Description

When an element in the DOM has changed, a `#change` record is created in the `@event` database.

## Examples

Initialize the DOM with a `select` element:

```eve
commit @browser
  [#select #countries children: 
    [#option text: "italy"] 
    [#option text: "france"] 
    [#option text: "spain"]
  ]
```

Listen for `change` event emitted from `select` element when a country has been selected:

```eve
search @session @browser @event
  element = [#change element: [#select #countries]]

commit @view
  [#value | value: "{{element.value}}"] // it will print "italy", "france" or "spain"
```

## See Also
[click](../click)
