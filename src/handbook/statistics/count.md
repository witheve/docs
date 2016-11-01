---
menu:
  main:
    parent: "Statistics"
title: "count"
---

# count

Returns the number of elements in a set

## Syntax

```eve
y = count[given]
y = count[given, per]
```

## Attributes

- `given` - the set to count over
- `per` - _optional_ - one or more attributes by which to group `given`.

## Description

`y = count[given]` counts the number of elements in `given`.

`y = count[given, per]` counts the number of elements in `given`, grouped by the attribute(s) provided in `per`. For instance, `class-size = count[given: students, per: grade]` would count the number of students in each grade. You can group along multiple axes; the pervious example could be extended to work across multiple schools by doing `class-size = count[given: students, per: (grade, school)]`. See the examples section to see these in action.

## Examples

Before we get to the `count` examples, let's add some students. Each `#student` has a `grade` and a `school`. Grades are one of 10, 11, or 12. Schools are one of "West" and "East".

```eve
commit
  [#student name: "Diedra" grade: 10 school: "West"]
  [#student name: "Celia" grade: 10 school: "West"]
  [#student name: "Michaela" grade: 11 school: "West"]
  [#student name: "Jermaine" grade: 11 school: "West"]
  [#student name: "Issac" grade: 12 school: "West"]
  [#student name: "Jamar" grade: 12 school: "West"]
  [#student name: "Yee" grade: 10 school: "East"]
  [#student name: "Johanne" grade: 10 school: "East"]
  [#student name: "Mertie" grade: 10 school: "East"]
  [#student name: "Elmira" grade: 11 school: "East"]
```

First let's count the total number of students in the school district.

```eve
search
  students = [#student]
  enrollment = count[given: students]

bind @view
  [#value | value: "There are {{enrollment}} students in the district"]
```

Now let's count the number of students in each school.

```eve
search
  students = [#student school]
  school-enrollment = count[given: students, per: school]

bind @view
  [#value | value: "{{school-enrollment}} attend {{school}}"]
```

We could have similarly counted the number of students in each grade across the district.

```eve
search
  students = [#student grade]
  grade-enrollment = count[given: students, per: grade]

bind @view
  [#value | value: "{{grade-enrollment}} students are in {{grade}}th grade"]
```

Finally, we can count the number of students per grade, per school. 

```eve
search
  students = [#student grade school]
  grade-school-enrollment = count[given: students, per: (grade, school)]

bind @view
  [#value | value: "{{grade-school-enrollment}} students are in {{grade}}th grade at {{school}}"]
```

### Example Usage

- [TodoMVC](http://play.witheve.com/#/examples/todomvc.eve)
- [Tic-Tac-Toe](http://play.witheve.com/#/examples/tic-tac-toe.eve)

## See Also

[sum](../../math/sum) | [aggregates](../../aggregates)