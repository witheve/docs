# Eve Quickstart Tutorial

Welcome to the Eve quickstart tutorial. We're going to get you writing your first Eve program, so let's get started! 

## Part 1

Eve is a pattern matching language, meaning that all you do in Eve is use patterns to match records, and then update or create new records based on what was found. Let's start with a simple pattern: we're going to match any records with a `name` attribute, and then create a div to display the name: 

```
match
  [name]
bind @browser
  [tag: "div", text: name]
```

This is a **block**, the fundamental unit of an Eve program. Eve programs are composed of blocks, each of which follow a specific pattern:

1. __Match__ - Eve uses patterns to match records in the database. The record in this case is `[name]`, which is asking for all records with a name attribute. The match phase is all-or-nothing; if all of the records in the match phase are found, then the block proceeds to the action phase. If any of the records in the match phase are not found, then the action phase cannot proceed.

2. __Action__ - Eve uses the data gathered in the match phase to update or create records. The action in this case is a `bind`, which tells Eve to update records continuously as their supporting records update, replacing the old record. This also means if the data that supports a bound record disappears, the bound record disappears as well. You can also optionally specify where to bind the record. Here, we bind the record to `@browser` for display.

Aside from the structure of the block, you'll notice some of the core Eve syntax here. Records are specified using square brackets: `[]`. In the match phase, records specify the attributes you want to match in the database. Here we want to match all records with a `name` attribute.

In the action phase, square brackets indicate the record you are creating. This record actually has two attributes: `tag` and `text`. The `tag` attribute is useful for distinguishing records, so it's very common in Eve programs. Next, the `text` attribute is bound to `name` using the bind operator, `:`. The bind operator tells Eve that `text` and `name` are one and the same; every time name changes, text changes as well. We can also see that `name` in the match phase and `name` in the action phase are the same thing; **anything with the same name within a block represents the same thing**. 

You'll notice that this block doesn't do anything. There is no output displaying a name. That's because there are no names in the database. Remember: since the match phase isn't satisfied, then the action phase cannot proceed. Then let's go ahead and satisfy the match phase:

```
commit
  [name: "Celia"]
```

After adding this block, you'll now see the name "Celia" displayed in the browser. What happened here? First, notice this block has no match phase. That's fine, it means that the match phase is by default satisfied, so the action phase will always run. This block has a different action though: `commit`. Whereas `bind` updates records and removes the old versions, `commit` updates records and keeps the old versions.

Another thing to notice is that order of blocks does not matter. First we wrote code to display a `name`, and then we added a `name`.

Let's get a little more complicated; let's display the grade and school of students. Even though there are no students in the database yet, we can still write the code that would display them:

```
match
  [#student name grade school]
bind @browser
  [#div text: "{{name}} is a {{grade}}th grade student at {{school}}."]
```

This block is similar to the first one, but we've introduced some new concepts. First, let's look at the record we're matching: `[#student name grade school]`. A piece of new syntax here is `#student`, which is shorthand for `tag: student`. With that knowledge, the record we're matching is everything tagged "student" with `name`, `grade`, and `school` attributes.

In the action phase, we're again binding to `@browser`. This time we use the shorthand `#div` instead of `tag: "div"`, and again we have a text attribute. This time, the text attribute is bound to a string. Notice that we use the string interpolation operator `{{}}` to insert data from a record into a string. Think of it like a placeholder.

Once again, this block doesn't have any output. Why? The match phase isn't satisfied. In order to satisfy the match phase, we need at least one `#student` with a `name`, `grade` and `school`. All we have right now is a record with a name attribute. So let's add the necessary facts to Celia:  

```
match
  celia = [@Celia]
bind
  celia <- [#student grade: 10, school: "East", age: 16]
```

Let's go over the new syntax introduced here. First, look at the match phase. Just like `#` is a shorthand for `tag`, the `@` operator is a shorthand for `name`. So instead of writing `[name: "Celia"]` we can write `[@Celia]`. Also, notice that we are setting the record equal to the variable `celia`. **In Eve, the equality operator `=` means equality, not assignment**. So the statement `celia = [@Celia]` means that `celia` and `[@Celia]` are one and the same.

Next, look at the action phase. Here we use the merge operator `<-` to combine two records: `celia` and `[#student grade: 10, school: "East"]`. Merging two records means that the record on the left hand side of the operator will receive the attributes of the record on the right hand side. So the total effect of this block is to add `#student`, a `grade`, and a `school` to `@Celia`. This is exactly what we needed to satisfy the previous block, so you should now see the sentence "Celia is a 10th grade student at East" displayed in the browser.    

## Part 2

Celia is cool and all, but let's add some more students to our database:

```
commit
  [#student @Diedra grade: 12 school: "West"]
  [#student @Michaela grade: 12 school: "West"]
  [#student @Jermaine grade: 9]
```

Notice that after these student are added, two more sentences appear on the screen about `@Diedra` and `@Michaela`. That's because Eve works on sets, so when we ask for `[#student name grade school]`, we want _all_ the records that match, which includes `@Celia`, and now Diedra and Michaela. Furthermore, **Eve's functions and operators work over sets**. This means we can write a statement as if it applies to a single element, but that statement will work even if there are more elements in the set. Therefore, even though we haven't expressed any loops, the sentence is printed as many times as there are matched records. 

But what about poor `@Jermaine`? Why isn't he in the list? The reason is that he doesn't have a `school`, so he doesn't satisfy the match. Go ahead and add one, and he'll show up on the list.

Notice also that the list is not (necessarliy) in the order that the students were added in the list. Recompile the program a few times to see that thte order changes. That's because **there is no ordering in Eve; blocks are not ordered, statements are not ordered, and results are therefore not ordered**. If you want the students to be ordered, you have to impose an ordering. Let's sort them alphabetically by name, by adding a `sort` attribute to the `#div`.   

```
match
  [#student name grade school]
bind @browser
  [#div sort: name, text: "{{name}} is a {{grade}}th grade student at {{school}}."]
```

This time when you recompile your program, the order will stay fixed.

## Part 3

Let's make thing a little more interesting. We'll add some records about the schools the students attend:

```
commit
  [#school @West address: "1234 Main Street"]
  [#school @East address: "5678 Broad Street"]
```

What if we wanted to print the name of the students, and the address of the school they each attend? **We can match two records and then "join" them together by associating attributes from one record with the other**:

```
match
  school = [#school name address]
  student = [#student school: name]
bind
  [#div text: "{{student.name}} attends {{school.name}} at {{address}}"]
```

In the match phase, we are matching `student = [#school name address]` and `school = [#student school: name]`. Remember that in Eve, things named the same are the same. So, `name` in the student record is the same `name` in the school record. This relates the two records.

In the action phase, we introduce dot notation on records. This allows you to access attributes of records without matching them. For instance, matching on `name` in both the student and school records would be problematic, because the result would be all students and schools with the same name. We don't want that. Instead, we use dot notation to access the student name.

## Part 4

So far we've focused on moving data around. Now let's create some new data from already existing data. Recall back in Part 1 that we added an `age` attribute to `@Celia`, but the other `#students` don't have ages. Therefore the following block only displays Celia's age. 

```
match
  [#student name age]
bind 
  [#div text: "{{name}} is {{age}} years old"]
```

What if we knew that students entered first grade at 6 years old? If we know a student's grade, then we can calculate the age! Let's set up a block to do that:

```
match
  student = [#student]
  age = if student.age then student.age
        else if student.grade then student.grade + 6
bind
  student.age := age
```

Here we introduce the `if-then` expression. As an expression, Eve's `if-then` returns a value. In our case, we want the expression to return an age. If the `#student` already has an age (as is the case for `@Celia`), then return that age. Students who do not satisfy the condition move on to the next branch of the expression, which state that if the student has a `grade`, return the grade + 6. **In Eve, whitespace matters for expressions**, so `student.grade + 6` is legitimate, while `student.grade+6` is an error.

In the action phase, we introduce the action operator set `:=`, which sets an attribute to a specified value regardless of what it was before the block executed. That value can be anything, from a number, to a string, to another record.   

Another important class of expressions in Eve are aggregate, which take a set of values and turn them into a single value. This is akin to the "fold" or "reduce" function in many language. Let's count the total number of `#students` in the school district:  

```
match
  students = [#student]
  total-students = count[given: students]
bind
  [#div text: "{{total-students}} are in the school district"]
```

Notice the new syntax for `count`. Count is like a function in other languages because it has a return value, but in actuality it is the same as any other record; `total = count[given: students]` is shorthand for `[@count #function given: students, value: total]`. 

One special thing about functions and aggregates in general are that the arguments are explicit. This means you can pass in arguments in any order, and you can provide optional arguments or alternative calling patterns. For instance, count has an optional argument `per` that allows you group the output:

```
match
  students = [#student school]
  students-per-school = count[given: students, per: school]
bind
  [#div text: "{{students-per-school}} attend {{school}}"]
```

This block will output the number of students who attend each school.

## Learning more

Now that you've learned the basics of Eve, you're ready to learn more advanced concepts. You can learn more using the following resources:

- The Eve Handbook
- Eve syntax reference
- Example applications
- Tutorials
- Guides
- Community