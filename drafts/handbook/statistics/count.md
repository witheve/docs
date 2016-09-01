# count

Returns the number of elements in a set

## Syntax

```
y = count[given]
y = count[given, per]
```

## Attributes

- given - the set to count over
- per - _optional_ - one or more attributes by which to group `given`.

## Description

`y = count[given]` counts the number of elements in `given`.

`y = count[given, per]` counts the number of elements in `given`, grouped by the attribute(s) provided in `per`. For instance, `class-size = count[given: students, per: grade]` would count the number of students in each grade. You can group along multiple axes; the pervious example could be extended to work across multiple schools by doing `class-size = count[given: students, per: (grade, school)`. See the examples section to see these in action.

## Examples

Before we get to the `count` examples, let's add some students. Each `#student` has a `grade` and a `school`. Grades are one of 10, 11, or 12. Schools are one of "West" and "East".

```
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
```

First let's count the total number of students in the school district.

```
match
  students = [#student]
  enrollment = count[given: students]
bind
  [#div sort: 1 text: "There are {{enrollment}} students in the district"]
```

Now let's count the number of students in each school.

```
match
  students = [#student school]
  school-enrollment = count[given: students, per: school]
bind
  [#div sort: 2 text: "{{school-enrollment}} attend {{school}}"]
```

We could have similarly counted the number of students in each grade across the district.

```
match
  students = [#student grade]
  grade-enrollment = count[given: students, per: grade]
bind
  [#div sort: 3 text: "{{grade-enrollment}} students are in {{grade}}th grade"]
```

Finally, we can count the number of students per grade, per school. 

```
match
  students = [#student grade school]
  grade-school-enrollment = count[given: students, per: (grade, school)]
bind
  [#div sort: 4 text: "{{grade-school-enrollment}} students are in {{grade}}th grade at {{school}}"]
```

### Example Usage

- [TodoMVC](https://github.com/witheve/Eve/blob/master/examples/todomvc.eve#L31)
- [Tic-Tac-Toe](https://github.com/witheve/Eve/blob/master/examples/tic-tac-toe.eve#L67)

