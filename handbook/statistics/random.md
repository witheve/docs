---
menu:
  main:
    parent: "Statistics"
title: "random"
---

# random

Generates a random number between 0 and 1

## Syntax

```eve
y = random[seed]
```

## Attributes

- `seed` - initializes the random number generator. The seed itself does not need to be random.

## Description

`y = random[seed]` generates a pseudorandom number drawn from the [standard uniform distribution][1], meaning the generated number is restricted to be between 0 and 1. To generate a number between a custom range, see the examples.  

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
