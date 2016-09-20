# Eve Quickstart Tutorial

Welcome to the Eve quickstart tutorial. We're going to get you writing your first Eve program, so let's get started! 

## The Basics

Eve is a pattern matching language; all you do in Eve is use patterns to match "data", and then update or create new "data" based on what you found. Before we get into what "data" means in Eve, let's get something on the screen:

```
bind
  [tag: "div", text: "Hello, world"]
```

**Notes:**
* Click *compile and run* button to see output
* As Eve is valid [markdown][1] you must enclose code blocks in ``` (see [the raw version][2]).

What's going on here? Based on the keywords alone, it looks like we're binding some text in a div to the browser. And that's exactly what this code does. The `bind` keyword tells Eve that we are binding data to a `record`. In Eve, records are sets of `attribute:value` pairs associated with a unique ID. Records live in a database, a place to store all the relevant data and state your program needs. In the `block` of code above, we're creating a new record `[tag: "div", text: "Hello, world"]` and "binding" it to the `@browser` database. 

That's how you create records, but how do you match records already in a database? Let's look at another block of code:

```
match
  [name]
bind
  [tag: "div", text: "Hello, world"]
```

You'll notice with this new block, the text in the browser has disappeared. Where did it go? Eve programs are composed of `blocks`, each of which follow a specific pattern: in the `match phase`, Eve matches the specified records against a database. If all of the records are matched, then the block continues to the `action phase` to update or create new records. One example of an action is a `bind`. 

The first block omitted the match phase, so the bind is always satisfied, and thus the bound text was displayed. However, the second block contains a match phase, which is matching records with a `name` attribute. We need at least on record with a `name` attribute to satisfy this block, so let's add that:   

```
commit
  [name: "Celia"]
```

`commit` is the other action Eve can take aside from `bind`. Without worrying about the difference between commit and bind, you can see that since we added a record with a `name` attribute, this satisfied the `match` in the previous block, which then wrote "Hello, world" back to the screen.

We can use matched records by referencing their attributes:

```
match
  [name]
bind
  [#div, text: "Hello, {{name}}"]
```

This block will print "Hello, Celia". Notice that instead of `tag: "div"` this time we've used the shortcut `#div`. Tags are a useful way to refer to collections of related records, so we've made it easy to use tags, but they are the same as any other attribute on a record.

Let's get a little more complicated; let's display the grade and school of students. Even though there are no students in the database yet, we can still write the code that would display them:

```
match
  [#student name grade school]
bind
  [#div text: "{{name}} is a {{grade}}th grade student at {{school}}."]
```

 Now that we're matching on more attributes, this block is no longer satisfied by the record we added earlier; we're missing a "student" tag, as well as grade and school attributes. Let's add them to Celia:

```
match
  celia = [@Celia]
bind
  celia <- [#student grade: 10, school: "East", age: 16]
```

In a similar fashion to `#`, the `@` operator is shorthand for the name attribute, so `[@Celia]` is the same as `[name: "Celia"]`. We set this record equal to the variable `celia`. **In Eve, the equality operator `=` means equality, not assignment**. We can use this variable in several ways, one way being to merge data into the record using the merge operator `<-`. With the addition of this block, you should see the sentence "Celia is a 10th grade student at East." in the browser. 

Celia is cool and all, but let's add some more students to our database:

```
commit
  [#student @Diedra grade: 12 school: "West"]
  [#student @Michaela grade: 11 school: "West"]
  [#student @Jermaine grade: 9]
```

Three sentences are now printed, one for each student that satisfies the record. Eve works on sets, so when we match `[#student name grade school]`, we match _all_ the records with the given pattern. This includes `@Celia`, `@Diedra` and `@Michaela`. Therefore, when we bind the record `[#div text: "{{name}} ... "]`, we are actually binding three records, one for each matching `#student`.

Try re-compiling the program a couple times, and you'll see the order of sentences sometimes changes. This is because **there is no ordering in Eve; blocks are not ordered, statements are not ordered, and results are therefore not ordered**. If you want to order elements, you must impose an ordering yourself. We can ask the browser to draw elements in an order with the "sort" attribute: 

```
match
  [#student name grade school]
bind
  [#div sort: name, text: "{{name}} is a student at {{school}} in grade {{grade}}."]
```

This time when you recompile your program, the order will stay fixed.

Let's make thing a little more interesting. We'll add some records about the schools the students attend:

```
commit
  [#school @West address: "1234 Main Street"]
  [#school @East address: "5678 Broad Street"]
```

Now let's the name of the students, and the address of the school they each attend. How? **We can match two records and then "join" them together by associating attributes from one record with the other**:

```
match
  school = [#school name address]
  student = [#student school: name]
bind
  [#div text: "{{student.name}} attends {{school.name}} at {{address}}"]
```

**In Eve, things named the same are the same**. So, `name` in the student record is the same `name` in the school record. By using `name` in both records, we join them together. Be careful though, because this will be wrong:

```
match
  school = [#school name address]
  student = [#student name school: name]
bind
  [#div text: "{{student.name}} attends {{school.name}} at {{address}}"]
```

This asks for students with the same name as their school, which doesn't match any records; there are no students with the name "East" or "West". Instead, we can access the school's name using the dot operator.

## Advanced Eve

Recall back in Part 1 that we added an `age` attribute to `@Celia`, but the other `#students` don't have ages. Therefore the following block only displays Celia's age: 

```
match
  [#student name age]
bind
  [#div text: "{{name}} is {{age}} years old"]
```

Let's pretend that all students entered first grade at 6 years old? Therefore, with a student's grade we can calculate their age and add it to the student's record.

```
match
  student = [#student]
  age = if student.age then student.age
        else if student.grade then student.grade + 6
bind
  student.age := age
```

This block selects all students, and uses `if-then` to conditionally set the student's age. If the student already has an age, we set it to that. Otherwise, if the student has a grade, we can calculate the age. We set the value on an attribute with the `:=` operator, which sets an attribute to a specified value regardless of what it was before the block executed. That value can be anything, from a number, to a string, to another record.

An important class of expressions in Eve are aggregates, which take a set of values and turn them into a single value. This is akin to the "fold" or "reduce" function in many language. Let's count the total number of `#students` in the school district:  

```
match
  students = [#student]
  total-students = count[given: students]
bind
  [#div text: "{{total-students}} are in the school district"]
```

Notice the syntax for `count`. Count is like a function in other languages because it has a return value, so it can be used inline in expressions. But in actuality it is the same as any other record in Eve; `total = count[given: students]` is shorthand for `[@count #function given: students, value: total]`. 

One special thing about functions and aggregates in general are that the arguments are explicit. This means you can pass in arguments in any order, and you can provide optional arguments or alternative calling patterns. For instance, count has an optional argument `per` that allows you group the output:

```
match
  students = [#student school]
  students-per-school = count[given: students, per: school]
bind
  [#div text: "{{students-per-school}} attend {{school}}"]
```

This block will output the number of students who attend each school.

## Extra Credit

At this point, you know everything necessary about Eve to complete this extra credit portion (the only additional knowledge you need is knowledge of HTML and forms). Let's review some of the key concepts:

- Records are sets of attribute:value pairs.
- You do everything in Eve by matching records and creating/updating records.
- Records live in databases.
- There is no ordering in Eve.
- Things with the same name are the same.

Your extra credit task is to build a form that allows you to add students to the database. Take a moment to think about how this might be done in Eve, given everything above. 

First, let's make the form. You've already displayed a `#div`, and in the same way we can draw `#input`s and a `#button`:

```
bind
  [#div children: 
    [#div    sort: 1, text: "Name:"]
    [#input  sort: 2, @name-input]
    [#div    sort: 3, text: "Grade:"]
    [#input  sort: 4, @grade-input]
    [#div    sort: 5, text: "School:"]
    [#input  sort: 6, @school-input]
    [#button sort: 7, @submit text: "submit"]]
```

We've added some names to the inputs and the button so we can easily match them from other blocks. Now that we have a form, we need to take the values in the inputs, and create a new record when the submit button is clicked.

Remember, everything in Eve is a record, and the `#click` event is no different. We can react to a `#click` by matching on it, and the form elements we just created. Then we take their values, create a record, and reset the inputs: 

```
match
  [#click element: [@submit]]
  name = [@name-input]
  grade = [@grade-input]
  school = [@school-input]
commit
  // save the new student
  [#student name: name.value, grade: grade.value, school: school.value]
  // Reset the form
  name.value := ""
  grade.value := ""
  school.value := ""
```

## Learning more

Now that you've learned the basics of Eve, you're ready to learn more advanced concepts. You can learn more using the following resources:

- The Eve Handbook
- Eve syntax reference
- Example applications
- Tutorials
- Guides
- Community
 
[1]: http://incidentalcomplexity.com/#eve--markdown
[2]: https://raw.githubusercontent.com/witheve/docs/master/drafts/guides/quickstart.md
