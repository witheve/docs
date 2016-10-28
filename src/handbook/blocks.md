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

A `block` is the fundamental unit of Eve code. Eve programs are made up of a series of blocks, each of which can perform actions:

1. A block `search`es one or more databases for records.
2. A block `bind`s or `commit`s new records in one or more databases.

Blocks execute when the records they search for exist or change. If a block doesn't search for any records, then the block executes by default, but it can never update bound or committed records.

Blocks can have any number of `search`, `commit`, and `bind` actions, each of which can reference any number of databases. If a block has multiple `search` actions, it will only execute if _all_ searches are satisfied.

Blocks automatically keep bound and committed records up-to-date with matched records. When a record matching a search changes, those changes are reflected automatically in bound and committed records within that block.  

## Tips

Althgouth they are similar, it's important not to think of blocks like functions in other languages. Blocks don't have a name, and you don't "call" them like you do functions. Instead, you "use" a block by creating the records for which it searches.

Likewise, there is no "main" block. Since Eve is declarative and there is no order, there is no particular starting point for a program. As a close analog, any block that does not search for records will execute when the program starts. For instance:

```eve
commit
  [#student name: "Sally"]
  [#student name: "Ingrid"]
```

This block has no `search` action, so it doesn't depend on any other recrods. Thus, it can be viewed as a "root" of the program. A program may contain many such roots.

## Examples

A block with match and bind actions. The bind action adds the `#div` to the `@browser` database.

```eve
search
  [name]

bind @browser
  [#div text: name]
```

A block with only a commit action: 

```eve
commit
  [name: "Roger"]
```

---

Search for a `#click` in `@event`, create a `#request` in `@http`

```eve
search @event
  [#click]

commit @http
  [#request #google url: "https://jsonplaceholder.typicode.com/posts/"]
```
Search for a `#request` with a response, display it in the browser

```eve
search @http
  [#request #google response: [json]]
  json = [#array]
  lookup[record: json, attribute, value: [title body]]

bind @browser
  [#div text: "{{title}}"]
  [#div text: "{{body}}"]
```

## See Also

[search](../search) | [bind](../bind) | [commit](../commit) | [databases](../databases)
