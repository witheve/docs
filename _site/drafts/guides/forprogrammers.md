## What is Eve?

Eve is a "batteries-included" general purpose programming platform composed of a database, a compiler, and a suite of tools for building programs. Eve is different from most languages in that it's a pattern matching language; everything you do in Eve is about finding records that match a pattern, and then performing actions based on what was found.   

Eve programs are composed of "blocks". Each block has the same flow:

1. Match Phase: Match records using patterns. If the records are matched, then the block can perform an action. If any of the records are not matched, then no action is performed.
2. Action Phase: Perform an action (update or create records) using what was found in the match phase.

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
- **Record** - Records are composed of facts. In Eve, you select records from the database by supplying a pattern of attributes, and any records matching that pattern are returned to you. For example, a record might be the ages, salaries, and departments of employees.

# Eve for the Imperative Programmer

If you're anything like the typical programmer, you've used imperative programming languages your entire career. Javascript, C, C++, Python, Ruby, Java, Rust, Go -- these are all examples of imperative programming languages.

Practitioners of these languages may find Eve a little foreign at first, because Eve is a type of declarative language. How do you achieve iteration if you can't use a loop? How do you create resuable, maintainable code if you can't create functions?

The purpose of this document is to demystify declarative programming, and enourage you to approach problem solving with a declarative mindset. Let's start by going deeper into what declarative programming is, and how it fits into the imperative world you know so well. 

## Delcarative vs. Imperative Programs

Let's take a look at the difference between imperative and declarative programming with an example. Say we are going to the local deli for a sandwich. The imperative programmer in me would order a sandwich like this:

```
1. Gather materials
  1.a Retrieve the bread from the pantry.
  1.b Retrieve the meat, cheese, mayo, and lettuce from the refridgerator.
  1.c Retrieve a plate from the cupboard.
2. Build sandwich
  2.a Place the plate on the counter
  2.b Place a slice a bread on the plate
  2.c Place cheese on top of bread
  2.d Place meat on top of cheese
  2.e Place lettuce on top of meat
  2.f Place mayo on one side of bread slice
  2.g Place bread on top of lettuce
```
Which is a little absurd right? Have you ever ordered a sandwich this way? Of course not; you probably just tell the clerk what kind of meat and cheese you want, and he does the rest for you. The declarative programmer in me would order the sandwich like this:

```
1. My sandwich has meat, cheese, mayo and lettuce.
```

This program is much shorter than the imperative version. Why? First we left out all the instructions for finding the materials. I don't need to tell the deli clerk where to find the raw materials for the sandwich. Second, I left out the explicit instructions for how to construct the sandwich. I don't really care how the meat, cheese, and lettuce are arranged in the sandwich. Finally, I didn't have to specify that I wanted the sanwich to come on a plate, or that I wanted two slices of bread to contain the sandwich. The deli clerk knows all these things, which makes my life easier.

You might look at these two programs and say "Wait, the second program is cheating; it implicitly relies on the deli clerk's *a priori* knowledge of sandwich making! If the deli clerk didn't know how to make a sandwich, then he would need the imperative program, and the declarative program would be useless". And I would agree with you, but that is exactly the point. 

In the imperative example, I specified a list of instructions to be executed in order. Executing them out of order would yield an erroneous sandwich (what would happen if I executed line 2.g before 2.f?). In the declarative example, I specified how I want my result, and left it up to the machine (the deli clerk) to figure out how to get there.

The art of sandwich making is a strictly human endeavour, so we can't expect the machine to figure out a solution to this program. But, as long as we stay in a domain at which computers excel, we can write some programs that actually produce a result.

## Relational Algebra

What are computers really good at? Processing data. More specifically, performing logical and arithmetic operations on data.
