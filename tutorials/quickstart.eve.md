# Quickstart

In this guide we're going to give a 5 minute introduction to the essential concepts in Eve. If you've never used Eve before, you're in the right place.

## Adding records to Eve

Eve represents data as records, which are key value pairs attached to a unique ID. Eve programs are made up of small composable blocks that search for and create records. Let's start with a block that adds a record to Eve:

```eve
commit
  [#greeting text: "hello world"]
```

This record is tagged `#greeting`, and has an attribute "text" with the value "hello world". Although tags have a special syntax, they are attributes like any other (i.e. #foo = tag: "foo"). We encourage you to classify groups of related records with tags.

## Finding records in Eve

We can search for records, then bind new records to those that are found. Eve finds every record matching the supplied patterns, and then binds records dependent on them. If no records match the search, then the block does not run at all. A block will only run if every pattern in a search matches at least one record. Let's search for the `#greeting` we just committed, and then display it in a text container:

```eve
search
  [#greeting text]

bind
  [#ui/text text]
```

Variables with the same name are equivalent within a block; because they have the same name, the `text` in `[#greeting text]` and `[#ui/text text]` are equivalent. Go ahead and add another `#greeting` record to the first block to see what happens when more than one record matches the search (you can add it on a new line under the one that's there). 

## Records update as data changes

Blocks in Eve react automatically to changes in data. When a record changes, any bound records are automatically updated. Let's search for the current time, and display it in a div:

```eve
search
  [#time seconds]

bind 
  [#ui/text text: seconds]
```

As the time changes, the output updates to reflect the current state of the `#time` record. Records can be committed instead of bound, but the behavior is a little different -- committed records persist until they are removed explicitly. Try changing `bind` to `commit` in the above block and see what happens.

## Reacting to events

Let's draw a button on the screen:

```eve
commit
  [#ui/button #increment text: "+1"]
```

Every time you click this button, a record is created representing the click. You can react to this event by searching for the `#event/click` record:

```eve
search
  event = [#event/click element: [#increment]]

commit
  [#clicked event]
```

Event records in Eve are removed immediately after they are created; however, because the `#clicked` record is committed, it will persist until explicitly removed. In Eve, `=` signifies equality (not assignment), so the variable `event` is a reference to the `#event/click` record. 

The identity of a record is determined by its attribute/value pairs. Two records with the same attributes and values are identical in Eve. We included the `event` attribute in the `#clicked` record to differentiate each record. Without this differentiation, we could only ever create a single `#clicked` record. Try removing `event` from the record and click the button to test this out.

## Count the number of clicks

Now let's count the number of times the button has been clicked. Make sure `event` is back in `#clicked`, and then we can count those records directly:

```eve
search
  how-many = count[for: [#clicked]]

bind
  [#ui/text text: "The button has been clicked {{how-many}} times"]
```

This block searches for every unique `#clicked`, counts them, and returns that value in `how-many`. Then we display this value in a text container using the operator `{{ ... }}`, which inserts the value of the contained variable into the string. An important thing to remember here is that this block will only run when the button has been clicked at least once. Before then, this block will not run because there are no `#clicked` records to count.

## Summary

That's it for the 5 minute introduction to Eve. To summarize:

- Eve programs are made up of blocks.
- Data are represented by records, key value pairs associated to a unique ID.
- There are three actions associated with records: search, bind, and commit.
- Blocks update records automatically to reflect changes in data.
- Bound records are replaced when data changes, while committed records must be removed manually.
- Records are unique, uniqueness is determined by a record's attributes and their values.

This will get you started with Eve, but there's still more to learn. From here, you can advance to Level 2 of the introductory tutorial, or dive right in to the editor and try out the concepts you've just learned.