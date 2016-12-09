---
menu:
  main:
    parent: "Core Language"
title: "Actions"
weight: 3
---

# Actions

## Description

There are three actions in Eve: `search`, `bind`, and `commit`.

`search` is used when you want to gather records from one or more databases. These records are called "supporting records", because they are used as a basis for bound or committed records.

`bind` and `commit` actions are used when you want to update records in one or more databases, but they differ in the way the updates are performed.

- bound records last only as long as their supporting records. When supporting records changes, then bound records changes accordingly, replacing any previously bound records.

- committed records persist past the lifetime of their supporting records. When supporting records change, then a new record is committed, leaving any previously committed records still intact.

## Examples

```eve

```

## See Also

[search](../search) | [bind](../bind) | [commit](../commit)
