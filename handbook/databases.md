# Databases

databases contain records

## Syntax

```eve
// search action
search @database1, ..., @databaseN

// Commit action
commit @database1, ..., @databaseN

// Bind action
bind @database1, ..., @databaseN
```

## Description

`<action> @database` performs the given action, one of `search`, `bind`, or `commit`, on the union of the provided databases.

If no database is provided with an action, then that action is performed on the default `@session` database.

## Creating and Searching Databases

You can create databases on-demand by simply committing a record to one. e.g.

```
commit @my-database
  [#my-record]
```

This block will create a new database called "my-database", which will contain the newly committed record. You can now search for this record in your new database:

```
search @my-database
  [#my-record]

bind @browser
  [#div text: "Found a record!"]
```

## Special Databases

Eve has some built-in databases that have meaning to the runtime.

- @session - the default database when no database is specified with an action.
- @event - contains events originating from the DOM
- @browser - Eve clients in the browser renders records in this database as HTML elements.

## Examples

Display the element that was clicked in the DOM

```eve
search @event
  [#click #direct-target element]

commit @browser
  [#div text: "{{element}} was clicked."]
```

Commit some data in `@session`, and then display it on a button click.

```
commit
  [#for-display text: "Hello"]
```

We are searching over three databases to complete this block.

- the `#click` is in `@event`
- the `#button` is in `@browser`
- the text for display is in `@session`. This needs to be made explicit; since we are searching in other databases, `@session` is not searched implicitly.

```
search @event @browser @session
  [#click element: [#button]]
  [#for-display text]

commit @browser
  [#div text]
```

This block could have been written with two searches for the same effect:

```
search @event @browser
  [#click element: [#button]]

search
  [#for-display text]

commit @browser
  [#div text]
```

## See Also

[search](../search) | [bind](../bind) | [commit](../commit)