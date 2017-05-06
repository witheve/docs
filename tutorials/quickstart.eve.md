# Quickstart

## Adding records to Eve

```eve
commit
  [tag: "greeting" text: "hello world"]
```

## Finding records in Eve

```eve
search
  [#greeting text]

bind
  [#ui/div text]
```

## Records update as data changes

```eve
search
  [#time seconds]

bind 
  [#ui/div text: seconds]
```

Change bind to commit and see what happens

## Reacting to events

Create a button to click

```eve
commit
  [#ui/button #increment text: "+1"]
```

React to clicks on that button by creating a record.

```
search
  click = [#event/click element: [#increment]]

commit
  [#clicked click]
```

## Count the number of clicks

We can't count the clicks directly, because they only last an instant. But we committed a #clicked record, so it lasts until it is removed explicitly.

```
search
  how-many = count[given: [#clicked]]

bind
  [#ui/div text: "The button has been clicked {{how-many}} times"]
```

## Concepts introduced

- committing records
- tags
- searching records
- binding records
- displaying text to the screen
- blocks are reactive
- multiple tags
- nested records
- handles on records
- uniqueness
- event lifetime
- aggregates
- string interpolation