# Eve JavaScript/TypeScript DSL

The forthcoming v0.3 release of Eve supports a domain specific language (DSL) that interacts with the Eve runtime, allowing you to intermix Javascript and Eve code. There are several benefits to using the DSL:

1) The syntax is native Javascript, so if you know JS you can write in the DSL
2) You can interact with Javascript functions and libraries
3) The DSL can be used "a la carte", so you can use as much of Eve as you need to for your project. Thus you can write an entire application in Eve, just use it as a datastore, or anywhere between. This makes it easy to integrate Eve with an existing Javascript application.
4) You can easily import data into Eve. If you can get your data in Javascript, you can use it in Eve.

This DSL guide is for users who are already familiar with Eve semantics. For those new to Eve, we'll have more fundamental guides released in the near future.

## Summary of DSL 

| | JavaScript/TypeScript DSL | Eve |
|-----|---------------------------|-----|
| find a record | `find("person", {salary})` | `[#person salary]` |
| bind/commit a record | `record("person", {salary})` | `[#person salary]` |
| not | `not(() => person.salary)` | `not(person.salary)` |
| choose | `choose(() => { person.salary; return 1; }, () => 0)` | `if person.salary then 1 else 0` |
| union | `union(() => person.salary, () => person.wage)` | `if person.salary then person.salary if person.wage then person.wage` |
| Add a value | `person.add("salary", 10)` | `person.salary += 10` |
| Remove a value | `person.remove("salary, 10)` | `person.salary -= 10` |
| Set a value | `person.remove("salary").add("salary", 10)` | `person.salary := 10` |
| Remove an attribute | `person.remove("salary")` | `person.salary := none` |
| Remove a record | `person.remove()` | `person := none` |
| functions | `lib.math.sin(number)` | `sin[degrees: number]` |
| aggregates | `gather(person).per(person.dept).count()` | `count[given: person, per: person.dept]` |

## Using the DSL

This guide is written for ES6. For added readability, we make frequent use of [destructuring][1] and [arrow functions][2]. We recommend using TypeScript 2.1.0 or later.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Arrow_functions

To use the DSL, import it into your application.

```javascript
import {Program} from "witheve";
```

Then you instantiate a new Eve program, naming it however you want.

```javascript
let program = new Program("program name");
```

Writing DSL code is similar to writing native Eve code; you attach blocks to the `program`, which search for records and then return records. Blocks in the DSL operate as a either a `bind` or `commit`. Let's look at the DSL block syntax in the case of `bind`:

```javascript
program.bind("block description", ({find, record}) => {
  // search for records tagged "person"
  let person = find("person");
  return [
    // bind a record tagged "greeting" with an attribute "message"
    record("greeting", {message: `Hello ${person.name}`})
  ];
});
```

The equivalent Eve block would be

```eve
search
  person = [#person]

bind
  [#greeting message: "Hello {{person.name}}"]
```

The identity of a `record()` is established by everything within the parentheses. Therefore, the record `record("greeting", {message: `Hello ${person.name}`})` will create one record for every `person.name`.

If would like to commit records instead of binding them, you can use the `commit()` method in place of `bind()`. The implication here is that you can no longer create blocks which both commit and bind records at the same time.

The DSL supports methods which mirror a couple of the Eve update operators. They are:

### add()

 Adds attribute/value pairs to a record. These added values do not contribute to the identity of a record, allowing you to add multiple values to a single record. This is equivalent to the Eve `+=` operator. For example:

```javascript
program.bind("Invite classmates to my party", ({find, record}) => {
  // search for records tagged "friend"
  let student = find("student");
  return [
    // bind a single record tagged "guest-list", with every student as a guest
    record("guest-list").add({guest: student})
  ];
});
```

### remove()

Removes attribute/value pairs from a record. This is equivalent to the Eve `-=` operator. Remove should only be used in the context of a `commit` block. For example:

```javascript
program.commit("blacklisted people cannot come to the party", ({find, record}) => {
  let blacklisted = find("blacklisted");
  let guests = find("guest-list")
  return [
    // remove anyone blacklisted from the guest list
    guests.remove({guest: blacklisted})
  ];
});
```

You can also use `remove()` to completely delete records or attributes on a record. This is equivalent to `:= none` in Eve. For example:

```javascript
// completely remove the target record
record.remove() 
// remove the attribute on the target record
record.remove("attribute")
```

The DSL does not contain an equivalent for the Eve set operator `:=`, but you can mimic its behavior by chaining the `add()` and `remove()` operators. For example:

```javascript
program.bind("Reassign Artemis' teacher", ({find, record}) => {
  let artemis = find("student", {name: "Artemis"});
  let teacher = find("teacher", {name: "Smith"});
  return [
    artemis.remove("teacher").add("teacher", teacher)
  ];
});
```

## Sub-Blocks

In the DSL `not()`, `union()`, and `choose()` are sub-blocks, which have their own body. Let's look at each of these.

### not()

The `not()` sub block works similarly to `not()` from the Eve syntax; it performs an anti-join on the records inside and outside of the `not()`. To use not, include it in the parameter list at the beginning of the block.

```javascript
program.bind("Tag students without any citations.", ({find, record, not}) => {
    let students = find("student");
    not(() => {
        find("student", {citation});
    });
    return [
        students.add("tag","good-standing")
    ];
})
```

### choose()

Choose() and union() expressions are behind the mechanics of the if expression in the Eve syntax. In the DSL, we expose these directly. First, `choose()` takes a list of sub-blocks, which contain any valid Eve code to join, filter, or compute their results. Each sub-block is executed in order until one is found valid. This return value of the first valid sub-block is taken as the return value.

```javascript
program.commit("Assign a letter grade.", ({find, choose}) => {
    let student = find("student");
    let [grade] = choose(
        () => { student.grade >= 90; return "A"; },
        () => { student.grade >= 80; return "B"; },
        () => { student.grade >= 70; return "C"; },
        () => { student.grade >= 60; return "D"; },
        () => "F"
    )
    return [
        student.add("letter-grade", {grade}),
    ];
});
```

### union()

Similarly, `union()` takes a body of sub-blocks, but the return for each valid sub-block (instead of just the first as with `choose()`) is taken as the return for the union. One common use of union is to normalize records from different data sources.

```javascript
program.bind("display the student's full names", ({find, record, union}) => {
  let east = find("student", {school: "West HS"});
  let west = find("student", {school: "East HS"});
  let [fullName] = union(
    () => { east.name; return east.name},
    () => { west.firstName; return `${{west.firstName}} ${{west.lastName}}`},
  );
  return [
    record("html/element", {tagname: "div", text: fullName}),
  ];
});
```

### Functions

The standard library in Eve has been redone in the DSL. To use library functions, you must now bring in "lib" explicitly when defining your block. From lib you can access the various standard library functions supported by the runtime so far. 

```javascript
program.bind("display the student's full names", ({find, record, lib}) => {
  find("angle" degrees)
  let result = lib.math.sin(degrees)
  return [
    record("html/element", {tagname: "div", text: result})
  ];
});
```

for now you can find a list of functions in [src/runtime/stdlib.ts](https://github.com/witheve/Eve/blob/refactor-editor/src/runtime/stdlib.ts)

The interface for wrapping functions for use within Eve is also revamped for the new runtime. When writing a function wrapper, you must ensure that the function is reverentially transparent, meaning given the same input, the function returns the same output.

Functions are wrapped using `makeFunction()` e.g.:

```javascript
makeFunction({
  name: "math/sin",             
  args: {a: "number"},
  returns: {result: "number"},
  apply: (a:number) => {
    return [Math.sin(a/180 * Math.PI)];
  }
});
```

### Aggregates

Aggregates like `sum()`, `count()`, and `sort()` are accessed through the `gather()` function. This function defines the input set to the aggregate. You can optionally group the input set with the `per()` function. For example, here is `count()` at work:

```javascript
program.bind("count the number of students in each class", ({find, record, gather}) => {
  let student = find("student")
  let classSize = gather(student).per(student.teacher).count()
  return [
    record("html/element", {tagname: "div", text: `${student.teacher} ${classSize}`})
  ];
});
```

The input set to the `count()` aggregate is the student records, and they are groups according to their teacher attribute. Then, the size of each group is counted and returned in `classSize`, which has the same number of elements as there are teachers.

Aggregates can take arguments as well. For instance, `sort()` takes as arguments the direction by which to sort the input set. Here is `sort()` in use:

```javascript
program.bind("sort the students by last name, then first name per teacher", ({find, record, gather}) => {
  let student = find("student")
  let ix = gather(student.firstName, student.lastName).per(student.teacher).sort("up", "down")
  return [
    record("html/element", {tagname: "div", sort: ix, text: `${student.firstName} ${student.lastName}`})
  ];
});
```

## Importing and Exporting Records 

### Getting Data Into Eve - `inputEAVs()`

You can import raw EAVs into Eve with the `inputEAVs()` function. Currently, `inputEAVs()` mut be called at least once to initialize your program, and it can only be used after you define all blocks. These limitations will be lifted in future versions.

`inputEAVs()` takes as input a list of entity, attribute, value triples. The entity value identifies the record to which the attribute and value belong, so it must be unique to that record. For example:

```javascript
program.inputEavs([[0,"tag","person"],[0,"name","Archibald"])
```

This will create a record tagged "person" with the name attribute "Archibald".

The `appendAsEAVs()` function allows you to destructure an object into a uniquely identified set of EAVs, which can then be input into Eve:

```javascript
import {appendAsEAVs} from "witheve";
let inputs = [];
let archibald = {tag: "person", name: "Archibald"}
appendAsEAVS(inputs, archibald);
program.inputEAVs(inputs);
```

### Getting Records out of Eve - Watchers

Watchers are a third type of block available in the DSL. These allow you to monitor changes in specific records and react to them with a callback function:

```javascript
program.watch("Export information about students", ({find, lookup, record}) => {
  // search for records tagged student
  let student = find("student");
  // lookup attributes and values related to each student
  let {attribute, value} = lookup(student);
  return [
    // Add these attributes and values to the student, creating a diff to which we can react
    student.add(attribute, value)
  ];
})
// React to each addition or removal
.asDiffs((diff) => {
  for(let [e, a, v] of diff.adds) {
    // ... do something ...
  }
  for(let [e, a, v] of diff.removes) {
    // ... do something ...
  }
});
```

If you care about specific attributes, if may be more convenient to write a watcher with `asObjects()` instead of `asDiffs()`:

```javascript
program.watch("Export student GPA", ({find, lookup, record}) => {
  // search for records tagged student
  let student = find("student" {name, GPA});
  return [
    // Add these attributes and values to the student, which creates a diff to which we can react
    record("grade", {name, GPA})
  ];
})
// Handle adds and removes as objects
.asObjects<{name: string, GPA: RawValue}>(({adds, removes}) => {
  for(let id in adds) {
    let {name, GPA} = adds[id];
    // ... do something ...
  }
  for(let id in removes) {
    let {name, GPA} = removes[id];
    // ... do something ...
  }
})
```

Type annotations (between the angle braces `<>`) are necessary for TypeScript, but they can be omitted when using Javascript.
