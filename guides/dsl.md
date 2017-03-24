# Eve JavaScript/TypeScript DSL

The forthcoming v0.3 release of Eve supports a domain specific langauge (DSL) that interacts with the Eve server, allowing you to intermix Javascript and Eve code. There are several benefits to using the DSL:

1) The syntax is native Javascript, so if you know JS you can write in the DSL
2) You can use the DSL with Javascript functions and libraries
3) The DSL can be used "a la carte", so you can use as much of Eve as you need to for your project. Thus you can write an entire application in Eve, just use it as a datastore, or anywhere inbetween. This makes it easy to integrate Eve with an existing Javascript application.
4) You can easily import data into Eve. If you can get your data in Javascript, you can use it in Eve.

## Using the DSL

To use the DSL, import it into your application.

```javascript
import {Program} from "./runtime/dsl2";
```

Then you instantiate a new Eve program, naming it however you want.

```javascript
let program = new Program("program name");
```

Writing DSL code is similar to writing native Eve code; you attach blocks to the `program`, which search for records and then return records. Blocks in the DSL operate as a `bind` would in native Eve. Let's look at the DSL block syntax:

```javascript
  program.block("block description", ({find, record}) => {
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

If would like to commit records instead of binding them, you can use the `commit()` method in place of `block()`. The implicatino here is that you can no longer create blocks which both commit and bind records at the same time, which we've found is not a common case.

The DSL supports methods which mirror a couple of the Eve update operators. They are:

### add()

 dds attribute/value pairs to a record. These added values do not contribute to the identity of a record, allowing you to add multiple values toa single record. This is equivalent to the Eve `+=` operator. For example:

```javascript
  program.block("every friend is on the guest list", ({find, record}) => {
    // search for records tagged "friend"
    let friend = find("friend");
    return [
      // bind a single record tagged "guest-list", with every friend as a guest
      record("guest-list").add({guest: friend})
    ];
  });
```

### remove()

Removes attribute/value pairs from a record. This is equivalent to the Eve `-=` oeprator. For example:

```javascript
  program.block("blacklisted friends cannot come to the party", ({find, record}) => {
    let blacklisted = find("blacklisted");
    let guests = find("guest-list")
    return [
      // remove anyone blacklisted from the guestlist
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

The DSL does not contain an equivalent for the Eve general set operator `:=`, but you can mimick its behavior by chaining the `add()` and `remove()` operators. For example:

```javascript
  program.block("Set ARtemis' salary to 10", ({find, record}) => {
    let artemis = find("employee", {name: "Artemis"});
    return [
      artemis.remove("salary").add("salary",10)
    ];
  });
```

In summary:

- Add a value: `person.salary += 10` <-> `person.add("salary", 10)`
- Remove a value: `person.remove("salary, 10)` <-> `person.salary -= 10`
- Set a value: `person.remove("salary").add("salary", 10)` <-> `person.salary := 10`
- Remove an attribute `person.remove("salary")` <-> `person.salary := none`
- Remove a record `person.remove()` <-> `person := none`


## Subblocks

In the DSL `not()`, `union()`, and `choose()` are subblocks, which have their own body, but act as they do in the Eve syntax. Let's look at each of these.

### not()

The `not()` sub block works similary to `not()` from the Eve syntax; it performs an anti-join on the records inside and outside of the `not()`

```javascript
program.block("Elements with no parents are roots.", ({find, record, lib, not}) => {
    let elem = find("html/element/element");
    not(() => {
        find("html/element/element", {children: elem});
    });
    return [
        record("html/element/root", "html/element/instance", {element: elem, tagname: elem.tagname})
    ];
})
```

### choose()

```javascript
program.commit("Clicking a record toggles it open/closed", ({find, choose}) => {
    let recordHeader = find("tag-browser/record-header");
    let record = find("tag-browser/record", {children: recordHeader});
    find("html/event/click", {element: recordHeader});
    let [open] = choose(
        () => { record.open == "true"; return "false"; },
        () => "true"
    )
    return [
        record.remove("open").add("open", open)
    ];
});
```



## Watchers

Watchers are a new feature native to the DSL that allow you to monitor changes in specific records and react to them with a callback function. Like blocks, watchers also attach to a `program`.

```javascript
  program.watch("Export information about people", ({find, lookup, record}) => {
    // search for records tagged person
    let person = find("person");
    // lookup attributes and values related to each person
    let {attribute, value} = lookup(person);
    return [
      // Add these attributes and values to the person, which creates a diff to which we can react
      person.add(attribute, value)
    ];
  })
  // React to each addition or removal
  .asDiffs((diff) => {
    for(let [e, a, v] of diff.adds) {
      // ... do something ...
    }
  });
```