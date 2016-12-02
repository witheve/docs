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
// Blocks contain Eve code and can execute actions
```
search
  .....

bind
  .....

commit
  .....
```

// Blocks that are disabled are not executed
```eve disabled
search
  ....
```

// Non-Eve blocks are not parsed or executed
```javascript
function() {
  ...
}
```

// Blocks that omit the search action are satisfied by default
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

A `block` is the fundamental unit of Eve code. Eve programs are made up of a series of blocks, each of which can perform actions:

1. A block searches one or more databases for records.
2. A block binds or commits new records in one or more databases.

Blocks execute when the records they search for exist or change. If a block doesn't search for any records, then the block executes by default, but it can never update bound or committed records.

Blocks can have any number of `search`, `commit`, and `bind` actions, each of which can reference any number of databases. If a block has multiple `search` actions, it will only execute if _all_ searches are satisfied.

Blocks automatically keep bound and committed records up-to-date with matched records. When a record matching a search changes, those changes are reflected automatically in bound and committed records within that block.  

## Specifying a Block

Blocks are specified using two fences to deliniate the beginning and end of the block. Code fences are matching pairs of either three consecutive ticks (```) or tildes (~~~). This style of code block is the same as supported by [CommonMark](http://spec.commonmark.org/0.26/#fenced-code-blocks). However, we don't currently support specifying code blocks via indention.

## Info Strings

You can specify the type of code within a block with an info string, written directly after the block's opening code fence. By default, any block without an info string are assumed to contain Eve code.

~~~
```
// An implicit block of Eve code. This block is parsed and executed
  ...
```

```eve
// An explicit block of Eve code. This block is parsed and executed
  ...
```

```eve disabled
// An explicit block of Eve code. This block is parsed, but not executed
  ...
```

```javascript
// An explicit block of Javascript code. This block is ignored
// by the Eve compiler entirely
  ...
```
~~~

## Tips

Although they are similar, it's important not to think of blocks like functions in other languages. Blocks don't have a name, and you don't "call" them like you do functions. Instead, you "use" a block by searching for the records it binds of commits.

Likewise, there is no "main" block. Since Eve is declarative and there is no order, there is no particular starting point for a program. As a close analog, any block that does not search for records will be the first to execute when the program starts. For instance:

```eve
commit
  [#student name: "Sally"]
  [#student name: "Ingrid"]
```

This block has no `search` action, so it doesn't depend on any other records. Thus, it can be viewed as a "root" of the program. A program may contain many such root blocks.

## Examples

A block with search and bind actions. The bind action adds the `#div` to the `@browser` database.

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
