# Eve Quickstart Tutorial

Welcome to the Eve quick(er) start tutorial. This tutorial follows the same example as the quickstart tutorial, but with only the most important facts you need to know. The progressive nature of the examples should be illustrative.

## Part 1

```
match
  [name]
bind @browser
  [tag: "div", text: name]
```

- Eve is a pattern matching language; all you do in Eve is use patterns to match records, and then update or create new records based on what was found.

- Eve programs are composed of blocks.

- Blocks have two phases, a match phase and an action phase.

- In the match phase, you gather records from Eve using patterns. The match phase begins with the `match` keyword.

- In the action phase, you create or modify records. The action phase begins with either the `bind` or `commit` keywords. 

- The action phase only executes if every record if the match phase is fully satisfied i.e. every record in the match phase has at least one result.

- Within a block, variables with the same name are equivalent.

- `bind` starts the action phase, and tells Eve to update records continuously as their supporting records change. The old record is overwritten.

```
commit
  [name: "Celia"]
```

- Eve has no order; you can use records before they are defined.

- `commit` starts the action phase and tells eve to create new records as their supporting data changes. The old record persists.

```
match
  [#student name grade school]
bind @browser
  [#div text: "{{name}} is a {{grade}}th grade student at {{school}}."]
```

- You can match records on multiple attributes

- `#` is a shortcut for the `tag` attribute.

- `{{}}` inserts data into a string 

```
match
  celia = [@Celia]
bind
  celia <- [#student grade: 10, school: "East", age: 16]
```

- You can equate a record with a variable.

- The `=` operator means equality. Eve does not have assignment.

- `@` is a shortcut for the `name` attribute

- `<-` merges one record with another

## Part 2

```
commit
  [#student @Diedra grade: 12 school: "West"]
  [@Diedra school: "West" grade: 12 #student]
  [#student @Michaela grade: 12 school: "West"]
  [#student @Jermaine grade: 9]
```

- Every variable is a set, which are collections of unique, unordered elements. This means you cannot have duplicate records.

- Eve functions and operators work over sets, much like the map function in some languages. You can write an expression once and without a loop, it will apply to all elements in the set.

- Records cannot be partially matched; all attributes must be present for a record to match.

```
match
  [#student name grade school]
bind @browser
  [#div sort: name, text: "{{name}} is a {{grade}}th grade student at {{school}}."]
```

- There is no ordering in Eve; blocks are not ordered, statements are not ordered, and results are therefore not ordered. Ordering is always explicitly stated.


## Part 3


```
commit
  [#school @West address: "1234 Main Street"]
  [#school @East address: "5678 Broad Street"]
```

```
match
  school = [#school name address]
  student = [#student school: name]
bind
  [#div text: "{{student.name}} attends {{school.name}} at {{address}}"]
```

- We can match two records and then "join" them together by associating attributes from one record with the other

- Attributes can be accessed on records using dot notation.

## Part 4

```
match
  [#student name age]
bind 
  [#div text: "{{name}} is {{age}} years old"]
```

```
match
  student = [#student]
  age = if student.age then student.age
        else if student.grade then student.grade + 6
bind
  student.age := age
```

- Whitespace matters for expressions. Whitespace is required around operators for readability.

- `if-then` is an expression with a return value.

- `:=` sets an attribute to a value, overwriting the previous value. 

```
match
  students = [#student]
  total-students = count[given: students]
bind
  [#div text: "{{total-students}} are in the school district"]
```

- aggregates take reduce a set of values down to a single value, much like the fold or reduce functions in other languages.

- function arguments are written explicitly.

- Order of arguments does not matters

```
match
  students = [#student school]
  students-per-school = count[given: students, per: school]
bind
  [#div text: "{{students-per-school}} attend {{school}}"]
```

- Some arguments may be optional.

## Learning more

Now that you've learned the basics of Eve, you're ready to learn more advanced concepts. You can learn more using the following resources:

- The Eve Handbook
- Eve syntax reference
- Example applications
- Tutorials
- Guides
- Community