---
menu:
  main:
    parent: "General"
title: "sort"
---

# sort

generates an ordering for a set

## Syntax


```eve
// Sort one or more values
index = sort[value]
index = sort[value: (value1, value2, ...)]

// Sort one or more values, and specify the direction for each
index = sort[value direction]
index = sort[value: (value1, value2, ...), direction: ("up", "down", ...)]

// Sort according to some grouping
index = sort[value per]
index = sort[value direction per]
```

## Arguments

- `value` - one or more variables to sort. More than one variable can be provided using a list e.g. `sort[value: (value1, ..., valueN)]`, and they will be sorted in turn.
- `direction - _optional_` - one or more directions by which to sort `value`. If no direction is provided, all variables are sorted from smallest to largest. Possible values are:
  - "up" for sorting from smallest to largest.
  - "down" for sorting from largest to smallest.
- `per - _optional_` - Instead of sorting the whole set, `per` allows you to divide the set into groups and sort each one.

The output is a set of indices, each of which maps to an element of the sorted variable. For example, if the value is `("A", "C", "D", "B")`, then index is `(1, 3, 4, 2)`.

## Description

Sort generates an index that describes the ordering of an input value. It's important to remember that variables in Eve are sets, and therefore have no ordering. Because of this, `sort` does not reorder value, but it generates a set of indices, each of which maps to an element in value.

Sort is flexible, and can generate an ordering over multiple dimensions, directions, and groupings.

`index = sort[value]` generates an ordering of `value` from smallest to largest.

`index = sort[value direction]` generates an ordering of `value` in a given `direction`. Acceptable values are "up" and "down". 

`index = sort[value: (value1, ... , valueN)]` generates an ordering of a list of values, ordering by `value1` first, then `value2`, and so on. For example, if you have `#person` records with name, age and height attributes, you could sort as follows:

```eve
search
  [#person name age height]
  index = sort[value: (age, name, height)]
``` 

This will sort the people first by age, then by name, then by height.

`index = sort[value: (value1, ... , valueN), direction: (direction1, ... , directionN)]` does the same as above, but you can specify the direction you sort each variable. Acceptable value for direction are "up" and "down". By default, values are sorted in the "up" direction.

`index = sort[value per]` sorts `value`, grouped by `per`. This divides `value` into groups according to the elements of `per`, and each one is sorted.

## Examples

We have #student records with grade (1 - 12), teacher, GPA (0.0 - 4.0) attributes. We can sort the students by grade:

```eve
search
  [#student name grade]
  index = sort[value: grade]

bind @browser
  [#div sort: index, text: "{{index}} - {{name}} {{grade}}"]
```

The browser handles the task of rendering the divs in the order specified by the `sort`attribute. Taking this further, we can choose the direction of the sortted set, whether "up" or "down". The default direction is "up" when none is specified.

```eve
search
  [#student name grade]
  index = sort[value: grade, direction: "down"]
  
bind @browser
  [#div sort: index, text: "{{index}} - {{name}} {{grade}}"]
```

You can also sort across multiple axes of a record. For instance, we can sort grade from 9 to 12, then sort by name from Z - A.

```eve
search
  [#student name grade]
  index = sort[value: (grade, name) , direction: ("up","down")]

bind @browser
  [#div sort: index, text: "{{index}} - {{name}} {{grade}}"]
```

This can be extended to sort any number of attributes

```eve
search
  [#student name grade teacher GPA]
  index = sort[value: (grade, teacher, name, GPA) , direction: ("up", "down", "up", "down")]

bind @browser
  [#div sort: index, text: "{{index}} - {{name}} {{grade}} {{teacher}} {{GPA}}"]
```

Finally, we can group sorted attributes with the per argument. Here you can see the difference between sorting by name *then* grade, and sorting by name *per* grade.

```eve
search
  [#student name grade GPA]
  index = sort[value: (GPA, name), per: grade]
  
bind @browser
  [#div sort: index, text: "{{index}} - {{name}} {{grade}}"]
```

When you sort per grade, then name is first grouped by grade, and each of those groups is then sorted. This is why index goes from 1-6 instead of 1-20 as in the other examples; Although there are still 20 elements in index, the maximum is 6 because no grade has more than 6 students. You might want to sort data this way in order to display it in a nested structure, such as this:

```eve
search
	[#student name grade teacher]
  index = sort[value: name, per: grade]
  
bind @browser
  [#div grade children: 
    [#h3 sort: 0, text: "Grade: {{grade}}"]
  	[#div sort: index, text: "{{index}} {{name}}"]]
```

---

Commit some test data

```eve
commit
  [#student name: "Mach", grade: 9, teacher: "Mr. Black", GPA: "1.0"]
  [#student name: "Pok", grade: 9, teacher: "Mrs. Brown", GPA: "3.4"]
  [#student name: "Karima", grade: 9, teacher: "Mr. Black", GPA: "2.4"]
  [#student name: "Garth", grade: 9, teacher: "Mrs. Brown", GPA: "2.8"]
  [#student name: "Berta", grade: 9, teacher: "Mr. Black", GPA: "2.7"]
  [#student name: "Maxine", grade: 10, teacher: "Mr. Red", GPA: "4.0"]
  [#student name: "Gwyn", grade: 10, teacher: "Mrs. Blue", GPA: "2.5"]
  [#student name: "Ilse", grade: 10, teacher: "Mr. Red", GPA: "3.0"]
  [#student name: "Hobert", grade: 11, teacher: "Ms. Green", GPA: "3.2"]
  [#student name: "Arlean", grade: 10, teacher: "Mr. Red", GPA: "2.4"]
  [#student name: "Ty", grade: 10, teacher: "Mrs. Blue", GPA: "1.7"]
  [#student name: "Kermit", grade: 11, teacher: "Ms. Green", GPA: "2.9"]
  [#student name: "Cortez", grade: 11, teacher: "Mrs. Orange", GPA: "2.3"]
  [#student name: "Polly", grade: 11, teacher: "Ms. Green", GPA: "2.1"]
  [#student name: "Damion", grade: 12, teacher: "Mrs. Purple", GPA: "3.8"]
  [#student name: "Gretchen", grade: 12, teacher: "Mrs. Yellow", GPA: "2.8"]
  [#student name: "Octavio", grade: 12, teacher: "Mrs. Purple", GPA: "3.4"]
  [#student name: "Pa", grade: 12, teacher: "Mrs. Yellow", GPA: "3.5"]
  [#student name: "Elwanda", grade: 10, teacher: "Mrs. Blue", GPA: "1.3"]
  [#student name: "Guadalupe", grade: 11, teacher: "Mrs. Orange", GPA: "3.7"]
```