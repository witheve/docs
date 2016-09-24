---
menu:
  main:
    parent: "Guides"
title: "blocks"
---

# Blocks

Blocks compose Eve programs

## Syntax

~~~eve
// A block with a match phase and an action phase
```
match
  .....
bind
  .....
commit
  .....
```

// Blocks that omit the match phase are satisfied by default
```
bind
  .....
```

```
commit
  .....
```
~~~

## Description

Each block is written in two phases: `match` then `action`. In the `match` phase, we ask Eve for known facts, and we might transform those facts using temporary variables. In the `action` phase we perform some action on the Eve DB to either add or remove facts.

## Examples

A block with match and action phases

```eve
match
  [name]
bind
  [#div text: name]
```

A black with only a commit phase

```eve
commit
  [@Stephanie]
```

## See Also

[match](../match) | [bind](../bind) | [commit](../commit)
