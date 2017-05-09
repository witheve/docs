# Quickstart

In this document we're going to give a 5 minute introduction to concepts essential to Eve. If you've never used Eve before, you're in the right place.

Eve represents data as records, key value pairs attached to a unique ID. Eve programs are made up of small composable blocks that search for and create records. Let's start with a block that adds a record to Eve:

```eve
commit
  [#ui/button #increment text: "+1"]
```

This record has two tags (`#ui/button` and `#increment`), and an attribute "text" with the value "+1". Although tags are attributes like any other, they have special syntax because they are used often. Every time you click this button, a record is created representing the click. You can react to this event by searching for the `#event/click` record that is created on a click:

```
search
  event = [#event/click element: [#increment]]

commit
  [#clicked event]
```

Eve finds every record matching the supplied patterns, and then commits records dependent on them. If no records match the search, then the block does not run at all. A block will only run if every record in a search matches at least one result.

In Eve, `=` represents equality (not assignment), so the variable `event` is a handle on the `#event/click `record.

Names are identities in Eve; because they have the same name, the `event` handle is the same as `event` in `#clicked`. Now Try removing `event` from the `#clicked` record. You will see that with this change, you can only ever create a single `#clicked` record. By binding the `event` handle to the `#clicked` record, we assure that each committed record is unique, an important concept in Eve. 

Now let's count the number of times the button has been clicked. Make sure the `event` is back in `#clicked`, and then we can count those records directly:

```
search
  how-many = count[given: [#clicked]]

bind
  [#ui/div text: "The button has been clicked {{how-many}} times"]
```

This block searches for every unique `#clicked`, and then counts them, returning that value in the variable `how-many`. Then we display this value in a div using the string-interpolation operator `{{ ... }}`. An important thing to remember here is that this block will only run when the button has been clicked at least once. Before then, there are no `#clicked` records to count. Because the div is bound instead of committed, it updates automatically to reflect the current number of clicks. Try changing `bind` to `commit` and see what happens when you click the button again.
 
## Summary

That's it for the 5 minute introduction to Eve. To summarize:

- Eve programs are made up of blocks
- Data are represented by records, key value pairs associated to a unique ID
- There are three actions associated with records: search, bind, and commit.
- Blocks update records automatically to reflect changes in data
- Bound records are replaced when data changes, while committed records must be removed manually
- Records are unique, uniqueness is determined by a record's attributes and their values.

This will get you started with Eve, but there's still more to learn. From here, you can advance to Level 2 of the introductory tutorial, or dive right in to the editor and try out the concepts you've just learned.