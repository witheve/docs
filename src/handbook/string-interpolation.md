# String Interpolation

We support string interpolation (concatenation) using double curly braces embedded in a string, e.g. `"{{ }}"`. In the party program, when we print output, we use string interpolation to format the results:

```eve
bind
  [#div children:
    [#h1 text: "Guest List"]
    [#div text: "{{name}} will eat {{guest.burgers}} {{burger-switch}}" sort: name]
    [#h2 text: "Total burgers needed: {{burgers}}"]]
```

The `div` that prints the guest name is only written once, but because of set semantics, it will be printed as many times as there are elements in the set (in this case we'd expect it to be printed five times). For the same reason, the total burger count will only be printed once.