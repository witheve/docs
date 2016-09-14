# Name Selector

The name selector is a shortcut for the `name` attribute on records

## Syntax

```
@name

@"name with spaces"
```

## Description

The name selector is used to select a specific named record from the Eve DB. Named records are any record with a `name` attribute specified. For instance, `[@"my party"]` is shorthand for `[name: "my party"]`.

## Examples

Add someone with a name

```
commit
  [name: "Celia"]
```

Add someone with a name using the name operator

```
commit
  [@Celia]
```

Match someone with a name, then use the name attribute

```
match
  celia = [@Celia]
bind
  [#div text: "My friend's name is {{celia.name}}"]
```

## See Also

[tag selector](tags.md) | [records](records.md)