# Objects

Objects are the predominant datatype in Eve. In the proposed syntax, objects are a set of attribute:value pairs enclosed in square brackets:

```
object = [ attribute1: value1 attribute2: value2 ... attributeN: valueN]
```

Objects are essentially pattern matches against the Eve DB, i.e. objects ask Eve to find all the entities that match the supplied attribute shape. For example, our first object in the program is `[@"my party" date]`. The resulting object will consist of all the facts matching a `name` attribute with value "my party" and a date attribute with any value.

The object also binds `date` to the top level `date` variable, accessible outside of the object (but only within the block). If you want to use `date` to mean something else, then you can alias it using the bind operator (see the next section).

Objects can be bound to a variable, e.g. `party = [@"my party" date]`. This provides a handle to the object, allowing you to access and mutate attributes using dot notation, e.g. `party.date`.