# Quickstart

In this document we're going to give a 5 minute introduction to concepts essential to Eve. If you've never used Eve before, you're in the right place.

## Adding records to Eve

Eve represents data as records, key value pairs attached to a unique ID. Eve programs are made up of small composable blocks that search for and create records. Let's start with a block that adds a record to Eve:

```eve
commit
  [#greeting text: "hello world"]
```

This record is tagged `#greeting`, and has an attribute "text" with the value "hello world". Although tags are attributes like any other,they have special syntax because they are used often.

## Finding records in Eve

We can search for records, and then bind new records to those that are found. Eve finds every record matching the supplied patterns, and then binds records dependent on them. If no records match the search, then the block does not run at all. A block will only run if every record in a search matches at least one result. Let's search for the `#greeting` we just committed, and then display it in a div:

```eve
search
  [#greeting text]

bind
  [#ui/div text]
```

Names are identities in Eve; because they have the same name, the `text` in `#greeting` is bound to the `text` in the div. Go ahead and add another `#greeting` record to the first block to see what happens when more than one record matches the search. 

## Records update as data changes

Blocks in Eve react automatically to changes in data. When a record changes, any bound records are automatically updated. Let's search for the current time, and display it in a div:

```eve
search
  [#time seconds]

bind 
  [#ui/div text: seconds]
```

As the time changes, the output updates to reflect the current state of the `#time` record. Records can also be committed in response to a `search`, but the behavior is a little different. Try changing `bind` to `commit` in the above block and see what happens.

## Reacting to events

Let's draw a button on the screen:

```eve
commit
  [#ui/button #increment text: "+1"]
```

Every time you click this button, a record is created representing the click. You can react to this event by searching for the `#event/click` record:

```
search
  event = [#event/click element: [#increment]]

commit
  [#clicked event]
```

Events in Eve are removed as soon as they are created; however the `#clicked` record is committed, meaning it will persist in Eve until explicitly removed. In Eve, `=` represents equality (not assignment), so the variable `event` is a handle on the `#event/click `record. Try removing `event` from the `#clicked` record. You will see that you can only ever create a single `#clicked` record. By binding the `event` handle to the `#clicked` record, we assure that each committed record is unique, an important concept in Eve. 

## Count the number of clicks

Now let's count the number of times the button has been clicked. Make sure the `event` is back in `#clicked`, and then we can count those records directly:

```
search
  how-many = count[given: [#clicked]]

bind
  [#ui/div text: "The button has been clicked {{how-many}} times"]
```

This block searches for every unique `#clicked`, and then counts them, returning that value in the variable `how-many`. Then we display this value in a div using the string-interpolation operator `{{ ... }}`. An important thing to remember here is that this block will only run when the button has been clicked at least once. Before then, there are no `#clicked` records to count.

## Summary

That's it for the 5 minute introduction to Eve. To summarize:

- Eve programs are made up of blocks
- Data are represented by records, key value pairs associated to a unique ID
- There are three actions associated with records: search, bind, and commit.
- Blocks update records automatically to reflect changes in data
- Bound records are replaced when data changes, while committed records must be removed manually
- Records are unique, uniqueness is determined by a record's attributes and their values.

This will get you started with Eve, but there's still more to learn. From here, you can advance to Level 2 of the introductory tutorial, or dive right in to the editor and try out the concepts you've just learned.