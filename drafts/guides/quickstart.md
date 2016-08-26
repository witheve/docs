# Eve Quickstart Tutorial

Welcome to the Eve quickstart tutorial. We're going to get you writing your first Eve program in about 10 minutes, so, let's get started! 

## What is Eve?

Eve is a "batteries-included" general purpose programming platform composed of a database, a compiler, and a suite of tools for building programs. Eve is a different take on programming; the primary concern of the Eve programmer is to define data, rather than te what to do with data.  

Eve programs are composed of "blocks". Each block has the same flow:

1. Match Phase: Match records using patterns
2. Action Phase: Perform an action (update or create records) based on what was found

Blocks tie together by matching records that other blocks create or modify. By creating these interconnected blocks, the Eve programmer defines how data flows through a program.

## Open Your Mind

Before we dive into how to write Eve programs, take a moment to clear your mind of any preconceived notions about what it means to program. Programming in Eve is very different from programming in other languages, so your intuition as a programmer might work against you in some cases.

For example, Eve does not make heavy use of functions, and it has no looping or control flow constructs. What's important in Eve is data. We've found the following pointers to be helpful when starting to learn Eve:

- Pay attention to the presence or absence of data. 
- Pay attention to the shape of records and what makes the data in a record unique
- Don't think in terms of how the machine executes your program.

## Some Terminology

- **Entity** - Entities are unique IDs in the Eve DB. An entity can represent anything - a person, a business, a message, an application, a button, etc.
- **Fact** - Facts describe entities. Each fact is composed of an attribute and a value, and is associated with a specific entity. Facts might be a person's age, an employee's salary, a department's budget, etc.
- **Record** - Records are a composed of facts. In Eve, you select records from the database by supplying a pattern of attributes, and any records matching that pattern are returned to you. For example, a record might be the ages, salaries, and departments of employees.

## Hello World

To start off, let's write the obligatory "Hello World" program for Eve:

```
commit 
  [#div text: "Hello World!"]
```

What's going on here? When you first start Eve, there are no facts in the database, so the only thing you can do is create a new record. The record we create is `[#div text: "Hello World!"]`. This record has a "div" tag with a text attribute "Hello World". The `#` operator is a shortcut for the tag attribute (`[#div]` is the same as `[tag: "div"]`). This record is added to the Eve database using the `commit` command. You can think of `commit` just like a commit to a repository; we're adding an unchanging record to the database at a specific point in time.

## Matching Records

Once there are facts in the Eve DB, you can match records. Let's add some facts about people to the Eve DB. This is no different than the Hello World example in the previous block, except this time we're adding four new records about Ben, Steven, Sally, and Carol:

```
commit
  [#person @Benjamin age: 30]
  [#person @Steven age: 33]
  [#person @Sally age: 25]
  [#person @Carol]
```

The `@` operator is just a shortcut for the name attribute (`[@Sally]` is the same as `[name: "Sally"]`). 

Next we can display those records as text:

```
match
  [#person name age]
bind
  [#div sort: name, text: "{{name}} is {{age}} years old"]
```

This second block is a little different from what we've seen so far. Here, we can see the two phases of a code block in practice:

1. Match - Eve uses patterns to match records in the database. The record in this case is `[#person name age]`, which is asking for all records matching a tag "person", with a name attribute, and an age attribute. Records in the match phase are called "supporting records" because they contain the facts necessary to generate  

2. Action - The action phase uses the data gathered in the match phase to update or create records. The action in this case is a `bind`, which works differently from a `commit`; whereas a `commit` adds or updates a record once, a `bind` adds or updates a record continuously as their supporting records change. 

If you look at the output of the second block, you'll notice two things. First, even though we wrote code to display a single sentence, three sentences are printed. This is because the variables `name` and `age` actually contain 3 values each (age contains the values 30, 33, and 25; name contains the values "Benjamin", "Steven" and "Sally"). Since there are three values, Eve creates three divs.

A second thing to notice is that Carol is not in the output. That's because Carol doesn't match the desired record; she has no age attribute. Try adding one to see what happens!

## Equivalence and Binding

Now that you can get records into Eve and match records from Eve, we're ready to talk about more advanced topics.

## Functions and Aggregates

## Action Operators