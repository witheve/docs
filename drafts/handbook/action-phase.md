# Phase 2: Action

The `action` phase of a block indicates that we are changing the Eve DB in some way. This phase is preceded by either the `bind` or `commit` fences (explained below). While the `match` phase can be omitted, omitting the `action` phase is probably an error, i.e. the block doesn't do anything without an `action`.

The transition to the `action` phase means we're no longer able to use any statements available in the `match` phase, e.g. `if`, `not`, aggregates, expressions, etc.

##### Adding and Removing Objects

Objects can be added to Eve after an `action` fence:

```
commit
  [@"my party" date: 2]
```

Objects can be removed from Eve using the `none` keyword. For example, we could remove `@"my party"` like so:

```
commit
  [@"my party"] := none
```