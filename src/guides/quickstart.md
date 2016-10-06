---
menu:
  main:
    parent: "Guides"
title: "Quickstart"
---

# Eve Quick Start Tutorial

~~~eve
```
bind @browser
  [tag: "div", text: "Hello, world"]
```
~~~

Hello world! At its core, Eve is a pattern matching language. You match patterns of data by searching a database, then update or create new data based on what you've found. In this example, we created a [`record`][records] that has two attributes: a tag attribute with the value `"div"` and a text attribute with the value `"Hello, world"`. We bound this record to the browser, which is how we displayed our venerable message.

The three backticks ``` are called a code fence. Code fences let us embed Eve code in normal documents written in Markdown. That’s how Eve programs are written, by the way; everything in a code fence is a [block][blocks] of Eve code, while everything outside is prose describing the program. In fact, this quick start guide is an example of an executable Eve program! In the subsequent blocks, you won’t see any code fences, but they still exist in the [document’s source][quickstart-source].

So far we’ve created a record that displays “Hello, world!” but as I said, Eve is a pattern matching language. Let’s search for something:

```eve
search
  [name]

bind @browser
  [tag: "div", text: "Hello, world"]
```

Our message disappeared! Before, we bound without searching, so the message displayed by default. Now we're binding in the presence of a search, so the bound record only exists if all the searched records are found. Here, we're searching for all records with a `name` attribute, but we haven't added any to Eve so none are found. With no matching records, the `bind` cannot execute, so the message disappears from the screen.

This is the flow of an Eve block: you search for records in a database, and if all the records you searched for are found, you can modify the found records or create new ones. If any of the records you search for are not found, then you cannot perform any actions on the database.

So to display our message, all we need is a record with a name attribute. We can create a permanent that satisfies this search with the [`commit`][commit] action: 

```eve
commit
  [name: "Celia"]
```

Hello, world… again! [`commit`][commit] permanently updates or creates a record that will persist even if its supporting records change. Since we aren't searching for anything in this block, the commit executes by default and adds a record with a name attribute of `"Celia"`. The addition of this new record satisfies the search in the previous block, so “Hello, world!” appears on the screen again.

But why search for records? Well, we can use the matching records to created new records:

```eve
search
  [name]

bind @browser
  [#div, text: "Hello, {{name}}"]
```

Since we matched on a record with a name attribute, we now have a reference to that name, and we can inject it in a string using `{{ ... }}` embedding. We can also swap out `tag: "div"` for the sugared `#div`. Tags are used a lot in Eve to talk about collections of related records. For example, we could search for all records with a `#student` tag, with name, grade, and school attributes.

```eve
search
  [#student name grade school]

bind @browser
  [#div text: "{{name}} is a {{grade}}th grade student at {{school}}."]
```

Since we're matching on more attributes, this block is no longer satisfied by the record we added earlier; we're missing a `#student` tag, as well as grade and school attributes. Even though these are missing at this moment, we can still write the code that would display them.

Let’s get our div back by adding the missing attributes to Celia:

```eve
search
  celia = [name: “Celia”]

bind
  celia <- [#student grade: 10, school: "East", age: 16]
```

You can define variables within blocks. Variables are handles on records that allow you to change them. In this case, we’re using the merge operator `<-` to combine two records. With the addition of this block, the sentence "Celia is a 10th grade student at East." appears in the browser.

Celia is cool and all, but let's add some more students to our database:

```eve
commit
  [#student name: “Diedra”, grade: 12, school: "West"]
  [#student name: “Michelle”, grade: 11, school: "West"]
  [#student name: “Jermaine”, grade: 9]
```

Three sentences are now printed, one for each student that matches the search. Eve works on sets, so when we search for `[#student name grade school]`, we find _all_ records that match the given pattern. This includes Celia, Diedra and Michelle. Therefore, when we bind the record `[#div text: "{{name}} is a ... "]`, we are actually binding three records, one for each matching `#student`.

If you re-compile the program a couple times, you'll see the order of sentences changes. This is because **there is no ordering in Eve; blocks are not ordered, statements are not ordered, and results are not ordered**. If you want to order elements, you must impose an ordering yourself. We can ask the browser to draw elements in an order with the "sort" attribute: 

```eve
search
  [#student name grade school]

bind @browser
  [#div sort: name, text: "{{name}} is a {{grade}}th grade student at {{school}}."]
```

This time when you recompile your program, the order will stay fixed, sorted aphabetically by name.

Let's make things a little more interesting by adding some records about the schools the students attend:

```eve
commit
  [#school name: “West”, address: "1234 Main Street"]
  [#school name: “East”, address: "5678 Broad Street"]
```

Let's display the address of the school each student attends. Although `#student`s and `#school`s are in different records, **we can relate two records by associating attributes from one record with attributes from the other.** In this case, we want to relate the `name` attribute on `#schools` with the `school` attribute on `#students`. This compares the values of the attributes between records, and matches up those with the same value. For instance, since Celia's school is "East", she can join with the `#school` named "East".

Our first attempt may come out looking a little something like this:

```eve
search
  school = [#school name address]
  student = [#student name school: name] 

bind @browser
  [#div text: "{{student.name}} attends {{school.name}} at {{address}}"]
```

But that didn’t work. How come? We’re trying to match for students who attend one of schools from the `#school` records, but in Eve, **things with the same name are identical**. That means in this example we're searching for `#student`s that have the same name as a `#school`. This won’t match any records in the database.

Instead, we can use the dot operator to specifically ask for the name attribute in the `#school` records, and rename our variables to get a cleaner block:

```eve
search
  schools = [#school address]
  students = [#student school: school.name]

bind @browser
  [#div text: "{{students.name}} attends {{schools.name}} at {{address}}"]
```

This creates an implicit [join][joins] over the school name without mixing up the names of the students and the names of the schools, giving us our desired output. You can actually bind attributes to any name you want to avoid collisions in a block:

```eve
search
  [#school name: school-name address]
  [#student name: student-name school: school-name]

bind @browser
  [#div text: "{{student-name}} attends {{school-name}} at {{address}}"]
```

## Advanced Eve

Recall when we added our students, Celia was the only one we added an `age` to. Therefore, the following block only displays Celia's age, even though we ask for all the `#student`s:

```eve
search
  [#student name age]

bind @browser
  [#div text: "{{name}} is {{age}} years old"]
```

Let's pretend that all students enter first grade at six years old. Therefore, if we know a student's grade, we can calculate their age and add it to the student's record:

```eve
search
  student = [#student]
  calculated-age = if student.age then student.age
                   else if student.grade then student.grade + 5

bind @browser
  student.age := calculated-age
```

This block selects all students, and uses `if-then` to set the student's calculated age. If the student already has an age, we set it to that. Otherwise, if the student has no age, we can calculate it with some arithmetic. The `:=` operator sets an attribute to a specified value regardless of what it was before the block executed. That value can be anything, from a number, to a string, to another record.

## Aggregates

So far everything we’ve done has used one record at a time, but what happens when we want to work over a group of records, such as counting how many students there are? To solve such a problem, we’ll need to use an aggregate. Aggregates take a set of values and turn them into a single value, akin to "fold" or "reduce" functions in other languages. In this case, we’ll use the aggregate `count` to figure out how many `#students` are in the school district:  

```eve
search
  students = [#student]
  total-students = count[given: students]

bind 
  [#div text: "{{total-students}} are in the school district"]
```

A quick note on the syntax for `count` - it feels a lot like a function in other languages, since it has a return value and can be used inline in expressions. Under the hood, functions are actually records; `total = count[given: students]` is shorthand for `[#count #function given: students, value: total]`. This distinction won’t materially change the way you use `count`, but it goes to show that everything in Eve resolves down to working with records.

While `given` is a required argument in `count`, aggregates (and functions in general) can also have optional arguments. Let's say we want to know how many students attend each school. We can use the optional argument `per` to count students grouped by the school they attend:

```eve
search
  students = [#student school]
  students-per-school = count[given: students, per: school]

bind
  [#div text: "{{students-per-school}} attend {{school}}"]
```

All function-like records in Eve specify their arguments as attributes.  This means you specify the argument and its value, unlike in other languages where the order of the values determines to which attribute they belong. As with everything else in Eve, order doesn’t matter.

## Extra Credit

At this point, you know everything necessary about Eve to complete this extra credit portion (the only additional knowledge you need is domain knowledge of HTML and forms). Let's review some of the key concepts:

- Eve programs are composed of blocks of code that search for and update records.
- Records are sets of `attribute: value` pairs attached to a unique ID.
- Eve works with sets, which have no ordering and contain unique elements.
- Things with the same name are equivalent.

Your extra credit task is to build a form that allows you to add students to the database. Take a moment to think about how this might be done in Eve, given everything we’ve learned so far.

First, let's make the form. We’ve already displayed a `#div`, and in the same way we can draw `#input`s and a `#button`:

```eve
bind @browser
  [#div children: 
    [#div sort: 1, text: "Name:"]
    [#input #name-input sort: 2]
    [#div sort: 3, text: "Grade:"]
    [#input #grade-input sort: 4]
    [#div sort: 5, text: "School:"]
    [#input #school-input sort: 6]
    [#button #submit sort: 7 text: "submit"]]
```

We've added some tags to the inputs and the button so we can easily search for them from other blocks. Now that we have a form, we need to define what happens when the submit button is clicked.

Remember, since everything in Eve is a record, the `#click` event is no different. When a user clicks the mouse, Eve records that click in the database. 

This record exists only for an instant, but we can react to it by searching for `[#click element: [#submit]]`. This record represents a `#click` on our `#submit` button. Then, all we need to do is capture the values of the input boxes and save them as a `#student` record:

```eve
search
  [#click element: [#submit]]
  name = [#name-input]
  grade = [#grade-input]
  school = [#school-input]

commit
  // save the new student
  [#student name: name.value, grade: grade.value, school: school.value]
  // reset the form
  name.value := ""
  grade.value := ""
  school.value := ""
```

## Learning more

If you want to learn more about Eve, we have some resources to help with that:

- Example applications - See some working programs and explore how they work.
- Tutorials - Step by step instructions on building Eve applications.
- [The Eve Handbook](https://witheve.github.io/docs) - Everything you need to know about Eve.
- [Eve syntax reference](https://witheve.github.io/assets/docs/SyntaxReference.pdf) - Eve's syntax in one page.
- Guides - In-depth documents on topics relating to Eve.

We also invite you to join the Eve community! There are several ways to get involved:

- Join our [mailing list](https://groups.google.com/forum/#!forum/eve-talk) and get involved with the latest discussions on Eve.
- Impact the future of Eve by getting involved with our [Request for Comments](https://github.com/witheve/rfcs) process.
- Read our [development diary](http://incidentalcomplexity.com/).
- Follow us on [twitter](https://twitter.com/with_eve).


[records]: https://witheve.github.io/docs/handbook/records/
[blocks]: https://witheve.github.io/docs/handbook/blocks/
[bind]: https://witheve.github.io/docs/handbook/bind/
[commit]: https://witheve.github.io/docs/handbook/commit/
[joins]: https://witheve.github.io/docs/handbook/joins/
[quickstart-source]: https://raw.githubusercontent.com/witheve/docs/src/guides/quickstart.md