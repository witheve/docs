# Records

 are the predominant datatype in Eve. In the proposed syntax, records are a set of attribute:value pairs enclosed in square brackets:

```
record = [ attribute1: value1 attribute2: value2 ... attributeN: valueN]
```

 are essentially pattern matches against the Eve DB, i.e. records ask Eve to find all the entities that match the supplied attribute shape. For example, our first record in the program is `[@"my party" date]`. The resulting record will consist of all the facts matching a `name` attribute with value "my party" and a date attribute with any value.

The record also binds `date` to the top level `date` variable, accessible outside of the record (but only within the block). If you want to use `date` to mean something else, then you can alias it using the bind operator (see the next section).

 can be bound to a variable, e.g. `party = [@"my party" date]`. This provides a handle to the record, allowing you to access and mutate attributes using dot notation, e.g. `party.date`.