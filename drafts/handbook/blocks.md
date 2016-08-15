# Block structure

Blocks themselves have their own structure. Let's focus in on the first block:

```
match
  party = [@"my party" date]
  friend = [#friend busy-dates != date]
bind
  friend += #invited
```

Each block is written in two phases: `match` then `action`. These phases mirror the two Eve commands outlined earlier. In the `match` phase, we ask Eve for known facts, and we might transform those facts using temporary variables. In the `action` phase we perform some action on the Eve DB to either add or remove facts.