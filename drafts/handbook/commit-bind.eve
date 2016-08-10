# Commit vs. Bind

We have two fences for the `action` phase, with differing semantics. The `commit` fence tells Eve that any object behind the fence should persist in the database, even if the supporting data in the `match` phase is removed. For example:

```
match
  [#session-connect]
commit
  [@"my party" date: 2]
```

The use of `commit` here means that if `#session-connect` ever exists in the database, then the object `[@"my party" date: 2]` exists even if `#session-connect` is removed in the future. In fact `#session-connect` exists for only a single tick of compiler time, so if we didn't use `commit`, then the party would only exist for an instant and disappear.

By contrast, the `bind` fence tells Eve that any object behind the fence is bound to the data in the `match` phase, and therefore only exists if that data exists. For example:

```
match
  party = [@"my party" date]
  friend = [#friend busy-dates != date]
bind
  friend += #invited
```

The behavior of this code is that a `friend` is `#invited` as long as they are not busy during the date of the party. Let's say my friend `@Arthur`'s calendar is initially clear, and so he is originally `#invited`. Then some time later, `@Arthur` suddenly adds the party date to his list of busy dates. Now, he no longer satisfies the conditions of the block. Therefore, Eve removes `#invited` from `@Arthur`, and he no longer shows up on the guest list, which also subsequently lowers the burger count. Had we used the `commit` fence, then his initial invitation would be permanent until we explicitly remove it.

## Commit global

By default, any changes made to the database are per session. This means any facts added to the database are only visible to the session that added them. `Commit` can be optionally followed by the `global` keyword, which indicates that the fenced objects are available globally to all sessions connected to Eve.

This is useful if you want to create a networked application. For our example, I might ask all my friends to write the following query:

    Hi friends. Please edit the following Eve code for my party planning app.
    Just fill in your name, the dates you are busy, and add your spouse as well.
    You can also add either of the following tags: #hungry, and #vegetarian.

    ```
    match
      [#session-connect]
    commit global
      [#friend name busy-dates spouse]
    ```

Now, when my friends execute that block (filled in with their details), their data is available to my party planning application.