---
layout: default
title: Syntax Reference
---

{% raw %}

# Syntax Reference

## Records and Patterns

<table>
  <tr>
    <td>Eve represents data as attribute-value pairs called records. They can have many attributes and attributes can have many values.</td>
    <td><code class="language-eve-document">
```
commit
  [tag: "person" age: 30, name: "Jeff"]
  [tag: "boat" tag: "expensive" type: "yacht"]
```
</code></td>
  </tr>

  <tr>
    <td>The tag attribute is used to indicate the type of a record. <code>#foo</code> is short for <code>tag: "foo"</code>.</td>
    <td><code class="language-eve-document">
```
search
  [#person] = [tag: "person"]
```
</code></td>
  </tr>

  <tr>
    <td>You can alias an attribute to a different name like <code class="language-eve-document">age: person-age</code>. Without an alias, the name of the attribute is bound to its value.</td>
    <td><code class="language-eve-document">
```
search
  // These do the same thing.
  person-age = 20
  [#person age: person-age]

  age = 20
  [#person age]
```
</code></td>
  </tr>

  <tr>
    <td>Records can be nested to find or create relationships.

      <strong>Note</strong>: All records in Eve are global. The Ryan record can still be matched on its own.</td>
    <td><code class="language-eve-document">
```
commit
  [#person name: "Chris" brother:
    [#person name: "Ryan"]
    [#person name: "Jeff" age: 20]]
```
</code></td>
  </tr>

  <tr>
    <td>Attributes can also be accessed using dot notation.</td>
    <td><code class="language-eve-document">
```
search
  person = [#person]
  person.brother = [name: "Ryan"]
```
</code></td>
  </tr>

  <tr>
    <td>You can search for records by pattern. Eve will match records based on the pattern of attributes you provide. Any attributes you don’t provide a value for will be filled in from the matches.</td>
    <td><code class="language-eve-document">
```
search
  me = [#person brother]
bind
  [#my-family me relative: brother]
```
</code></td>
  </tr>
</table>

## Program Structure: Search, Bind, and Commit

<table>

  <tr>
    <td>Eve programs are <a href="https://guides.github.com/features/mastering-markdown/">markdown documents</a>, with code blocks fenced between three grave (<code>`</code>) or tilde (<code>~</code>) characters. In each block you (optionally) <code>search</code> for patterns, then either <code>bind</code> or <code>commit</code> new or updated records for each match found.

      <strong>Note</strong>: With no search, the records are automatically added once.</td>
    <td><code class="language-eve-document">
# An example Eve program
```
search // Find something interesting
  [#person name]
bind // Do something with it
  [#ui/text text: name]
```
</code></td>
  </tr>

  <tr>
    <td>The  search  section finds records matching its patterns, staying up to date as data changes.<code>If</code>there aren’t any matches, the <code>bind</code> or <code>commit</code> will do nothing.</td>
    <td><code class="language-eve-document">
```
search
  person = [#person name: "Jeff"]
  person.age = 20
```  
</code></td>
  </tr>

  <tr>
    <td>The <code>bind</code> section creates or updated records from your pattern. Since this is a <code>bind</code>, when the search stops matching, those records or updates disappear.</td>
    <td><code class="language-eve-document">
```
search
  person = [#person name: "Jeff" age]
bind
  [#my-age age]
```
</code></td>
  </tr>

  <tr>
    <td>Like <code>bind</code>, the <code>commit</code> section creates or updates records. Unlike <code>bind</code>, it does so permanently.<code>If</code>the search stops matching, the records will remain.</td>
    <td><code class="language-eve-document">
```    
search
  [#html/event/click element]
commit
  [#ui/text text: "You clicked on {{element}}!"]
```
</code></td>
  </tr>

</table>

## Equivalence and Filtering

<table>

  <tr>
    <td>Eve has equivalence instead of assignment. Instead of setting Jeff’s age to 20, equivalence causes us to only find the people whose age is 20.</td>
    <td><code class="language-eve-document">
```
search    
  // Filter for people named "Jeff" who are 20 years old.
  person = [#person name: "Jeff" age]
  age = 20
```
</code></td>
  </tr>

  <tr>
    <td>Nothing can be equivalent to two different values at once.</td>
    <td><code class="language-eve-document">
```
search    
  // Something that always fails.
  x = 10
  x = 100
```
</code></td>
  </tr>

  <tr>
    <td>Using the same variable in two patterns will find pairs where the value is the same.</td>
    <td><code class="language-eve-document">
    
```
search
  // pairs of boats and people with the same age.
  person = [#person age]
  boat = [#boat age]
bind
  [#ui/text text: "{{person.name}} has an old boat"]
```
</code></td>
  </tr>

  <tr>
    <td>You can also filter using inequalities.</td>
    <td><code class="language-eve-document">
```
search    
  // Filter within an attribute.
  cube = [#rectangle width > 30 height]
  height > 30 // Filter a variable.
  cube.depth > 30 // Filter with dot notation.
```  
</code></td>
  </tr>

</table>

## Not

<table>

  <tr>
    <td>You can check for the absence of <strong>any</strong> matching record for a search by wrapping it in <code>not()</code>.</td>
    <td><code class="language-eve-document">
```
search    
  // People who are not employees.
  person = [#person]
  not(person = [#employee])
```
</code></td>
  </tr>

</table>

## If...Then and If...Else

<p><code>If</code> lets your block try multiple branches for a variable. If every branch has no matches, the block fails.</p>

<table>

  <tr>
    <td><code>If … else</code> lets you express ordered choice. <strong>Only the first branch</strong> with matches will contribute values to the variable.</td>
    <td><code class="language-eve-document">
```
search
  [#todo filter]
  switch = if filter = "completed" then 1
           else if filter = "active" then 2    
           else if filter = "all" then 3
```
</code></td>
  </tr>

  <tr>
    <td>Multiple <code>If</code> statements without <code>else</code> let each branch contribute to a variable (equivalent to union).</td>
    <td><code class="language-eve-document">
```
search    
  // All my friends and their spouses are party guests.
  guest = if f = [#friend] then f
          if [#friend spouse] then spouse
```
</code></td>
  </tr>

  <tr>
    <td><code>If</code> can return multiple values each.

<strong>Note</strong>: Each branch must return the same number!</td>
    <td><code class="language-eve-document">
```
search    
  (pts, pass) = if score > 90 then (3, "true")
                if score > 70 then (1, "true")
                else (0, "false")
```
</code></td>
  </tr>

</table>

## Functions and Aggregates

<table>

  <tr>
    <td>Functions are record-like constructs that return values.</td>
    <td><code class="language-eve-document">
```
search
  // The sin function with input in degrees.
  x = sin[degrees: 30]
  // …or radians
  x = sin[radians: 3 *  π / 180]
```
</code></td>
  </tr>

  <tr>
    <td>Aggregates return a value (or value per group) for <strong>all</strong> matches of your search (akin to  reduce()  in other languages). Eve will set collapse inputs to an aggregate. That is, if you have 5 unique salary levels for 100 employees, Eve would add each unique salary once. To adjust this, specify the actual identity (employee) you care about with <code>for</code>. To get a value per group, specify the grouping variables with <code>per</code>.</td>
    <td><code class="language-eve-document">
```
search      
  // *for* specifies the matches to count.
  total-employees = gather/count[for: employee]

  // *value* is the number to add to the sum
  // *per* specifies the groups to sum the matches in.
  budgets = gather/sum[value: employee.salary,
                       for: employee,
                       per: employee.department]
```
</code></td>
  </tr>

</table>

## Update Operators

<p>Besides creating new records, Eve has four operators to modify existing records in <code>bind</code> or <code>commit</code>.</p>

<table>

  <tr>
    <td>(<code>+=</code>) Add value to attribute.</td>
    <td><code class="language-eve-document">
```
search
  chris = [#chris]    
commit
  chris.likes += "pizza"
```
</code></td>
  </tr>

  <tr>
    <td>(<code class="language-eve-document">-=</code>) Remove value of attribute.

<strong>Note</strong>: An attribute with no values ceases to exist.</td>
    <td><code class="language-eve-document">
```
search
  chris = [#chris]    
commit
  chris.likes -= "eggplant"
```
</code></td>
  </tr>

  <tr>
    <td>(<code>:=</code>) Set value of attribute.
Set is the same as removing the current value(s) and adding the new value(s).</td>
    <td><code class="language-eve-document">
```
search
  chris = [#chris]    
commit  
  chris.age := 30
```
</code></td>
  </tr>

  <tr>
    <td>(<code><-</code>) Merge pattern into record.
Attributes from the pattern on the right overwrite those of the record on the left.</td>
    <td><code class="language-eve-document">
```
search
  chris = [#chris]
commit
  chris <- [eye-color: "green", hair-color: "brown"]
```
</code></td>
  </tr>

  <tr>
    <td>The <strong>set</strong> operator with the special value <code>none</code> deletes entire attributes and records.

<strong>Note</strong>: This should usually be done in commits.</td>
    <td><code class="language-eve-document">
```
search
  chris = [#chris]

commit
  chris.likes := none
  chris := none
```
</code></td>
  </tr>

</table>

{% endraw %}