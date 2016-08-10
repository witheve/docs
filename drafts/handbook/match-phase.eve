# Phase 1: Match

The `match` phase is used to gather all the information you need to complete your block. The `match` phase is prefaced with the `match` keyword, and can potentially be omitted.

In the following block, we want to count all the guests coming to the party. To do this, we need the date of the party, a list of all my friends and their availability, and then a count of the guests on the list. Below, I've annotated what's going on in the `match` phase.

```
match
  party = [@"my party" date]              // Select the party and the date of the party
  friend = [#friend busy-dates != date]   // Select friends who are not busy during the date of the party
```

Let's take a look at other things you can do in the `match` phase: