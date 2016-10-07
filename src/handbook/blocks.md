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
// Blocks that omit the match action are satisfied by default
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

bind
  [#div text: name]
```

A block with only a commit action

```eve
commit
  [@Stephanie]
```

## See Also

[search](../search) | [bind](../bind) | [commit](../commit)
