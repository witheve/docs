---
menu:
  main:
    parent: "Eve Programs"
title: "Blocks"
weight: 4
---

# Blocks

blocks compose Eve programs

## Syntax

~~~eve
```
// A block with all three actions
search
  .....

bind
  .....

commit
  .....
```

```
// Blocks that omit the search action are satisfied by default
bind
  .....
```

```
commit
  .....
```
~~~

## Description




## Examples

A block with match and bind actions

```eve
search
  [name]

bind @browser
  [#div text: name]
```

A block with only a commit action, 

```eve
commit
  [name: "Roger"]
```

## See Also

[search](../search) | [bind](../bind) | [commit](../commit)
