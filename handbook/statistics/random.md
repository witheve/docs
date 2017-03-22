---
menu:
  main:
    parent: "Statistics"
title: "random"
---

# random

generates a random number between 0 and 1

## Syntax

```eve
y = random[seed]
```

## Attributes

- `seed` - initializes the random number generator. The seed itself does not need to be random.

## Description

`y = random[seed]` generates a pseudorandom number drawn from the [standard uniform distribution][1], meaning the generated number is restricted to be between 0 and 1. To generate a number between a custom range, see the examples.
`random` requires a seed as an argument because there is no such thing as a truely random number generator. Instead, "random number generators" are equations that produce results (based on original numbers) that are unpredicatble to humans, but repeatable. For instance, `7 * i % 11` is a simple pseudorandom number generator: the numbers it produces seem to have no relation at all with `i` itself. Therefore it is functionally random to humans, but with the same value for `i`, the same output is produced. In this example, `i` is the seed. A good value to use as a seed is the time in milliseconds, since it is always changing, insuring that you will almost never get the same seed twice (this does not mean you will always get a different number, however).

[1]: https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)#Standard_uniform

## Examples

Prints a random number every second. The time attribute in `#div` is used to make each generated number unique for display purposes.

```eve
search 
  [#time minutes seconds]
  x = random[seed: seconds]

commit @browser
  [#div time: "{{minutes}}{{seconds}}"  text: x]
```

Generate a random number between `min` and `max`

```eve
search
  min = 5
  max = 10
  x = random[seed: 1] * (max - min) + min

bind @browser
  [#div text: x]
```

Generate 10 random numbers

```eve
search
  i = range[from: 1, to: 10]
  x = random[seed: i]

bind @browser
  [#div text: x]
```

### Example Usage

- [Flappy Bird](https://github.com/witheve/Eve/blob/master/examples/flappy.eve)

## See Also

[gaussian][../gaussian]
