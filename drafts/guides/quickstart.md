# Eve Quickstart Tutorial

Welcome to the Eve quickstart tutorial. We're going to get you writing your first Eve program in about 10 minutes, so, let's get started! 

## What is Eve?

Eve is a "batteries-included" general purpose programming platform composed of a database, a compiler, and a suite of tools for building programs. Eve is a different take on programming; the primary concern of the Eve programmer is to define data, rather than te what to do with data.  

Eve programs are composed of "blocks". Each block has the same flow:

1. Match Phase: Match records using patterns
2. Action Phase: Perform an action (update or create records) based on what was found

Blocks tie together by matching records that other blocks create or modify. By creating these interconnected blocks, the Eve programmer defines how data flows through a program.

## Some Terminology

- **Entity** - Entities are unique IDs in the Eve DB. An entity can represent anything - a person, a business, a message, an application, a button, etc.
- **Fact** - Facts describe entities. Each fact is composed of an attribute and a value, and is associated with a specific entity. Facts might be a person's age, an employee's salary, a department's budget, etc.
- **Record** - Records are composed of facts. In Eve, you select records from the database by supplying a pattern of attributes, and any records matching that pattern are returned to you. For example, a record might be the ages, salaries, and departments of employees.

## Hello World

To start off, let's write the obligatory "Hello World" program for Eve:

```
commit 
  [#div text: "Hello World!"]
```

What's going on here? When you first start Eve, there are no records in the database, so the only thing you can do is create a new record. The record we create is `[#div text: "Hello World!"]`. This record has a "div" tag with a text attribute "Hello World". The `#` operator is a shortcut for the tag attribute (`[#div]` is the same as `[tag: "div"]`). This record is added to the Eve database using the `commit` command. You can think of `commit` just like a commit to a repository; we're adding an unchanging record to the database at a specific point in time.

## Matching Records

Once there are facts in the Eve DB, you can match records. Let's add some facts about students to the Eve DB. This is no different than the Hello World example in the previous block, except this time we're adding four new records about some people:

```
commit
  [#person #student @Diedra grade: 12 school: "West"]
  [#person #student @Celia grade: 10 school: "West"]
  [#person #student @Michaela grade: 11 school: "East"]
  [#person @Jermaine]
```

Similar to `#`, the `@` operator is a shortcut for the name attribute (`[@Diedra]` is the same as `[name: "Diedra"]`). Notice also that records can have multiple tags.

Next we can display those records as text:

```
match
  [#student name]
bind
  [#h1 sort: 1, text: "Students"]
  [#div sort: 2, text: name]
```

This second block is a little different from what we've seen so far. Here, we can see the two phases of a code block in practice:

1. __Match__ - Eve uses patterns to match records in the database. The record in this case is `[#student name]`, which is asking for all records matching a tag "student", with a name attribute. Records in the match phase are called "supporting records" because their 

2. __Action__ - The action phase uses the data gathered in the match phase to update or create records. The action in this case is a `bind`, which adds or updates a record continuously as their supporting records change. If the data that supports a bound record disappears, the bound record disappears as well.

In a way, these two phases can be thought of a big if-then statement. If the records in the match phase exist, then modify the records in the action phase.  

If you look at the output of the second block, you'll notice three things. First, even though we wrote code to display a single name, three names are printed. This is because the variables `name` contains three values: "Diedra", "Celia" and "Michaela"). Since there are three values, Eve creates three divs. Contrast this with the `#h1` record, which is only displayed once. That is because there are no attributes on this record that have more than one value.

Second, notice the `sort` attribute on the `#h1` and `#div`. This is necessary because Eve does not impose an order on statements. Therefore, we need to impose one ourselves. This tells the browser to render the 

A second thing to notice is that Jermaine is not in the output. That's because Jermaine doesn't match the desired record; he is not a `#student`. You could add the tag to where Jermaine is defined, but a way to do this programatically is through "action operators":

```
match
  jermaine = [@Jermaine]
commit
  jermaine += #student
```

This says that every record named "Jermaine" is also tagged `#student`.

```
match
  graduated = [#graduated]
commit
  graduated -= #student
```


## Equivalence and Binding

Now that you can get records into Eve and match records from Eve, we're ready to talk about more advanced topics. Let's display all students who are 18 years old:

```
match 
  [#student age: 18]
bind
  [#div text: "{{}}"]
```

The `{{}}` operator is used to accomplish string interpolation, inserting the values of `name` and `age` into the string for printing. 

## Functions and Aggregates

## Action Operators



commit
  [#student @Diedra grade: 10 school: "West"]
  [#student @Celia grade: 10 school: "West"]
  [#student @Michaela grade: 11 school: "West"]
  [#student @Jermaine grade: 11 school: "West"]
  [#student @Issac grade: 12 school: "West"]
  [#student @Jamar grade: 12 school: "West"]
  [#student @Yee grade: 10 school: "East"]
  [#student @Johanne grade: 10 school: "East"]
  [#student @Mertie grade: 10 school: "East"]
  [#student @Elmira grade: 11 school: "East"]