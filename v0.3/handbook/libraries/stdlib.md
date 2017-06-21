---
layout: default
title: Standard Library
---

# Standard Library

## Aggregates

<table>

  <tr>
    <td colspan="2">
      <b>gather/sort</b> - Generates an ordering for a set
    </td>
  </tr>
  <tr>
    <td>
      <ul class="arglist">
        <li><strong>for</strong> - the set to sort</li>
        <li><strong>per</strong> - (optional) - one or more attributes by which to group `for`</li>
        <li><strong>direction</strong> - (optional) - direction in which to sort `for`. Possible values are:
          <ul class="arglist">
            <li>'up' - smallest to largest; default option</li>
            <li>'down' - largest to smallest</li>
          </ul>
        </li>
      </ul>
    </td>
    <td>
      <code>// sorts the students by GPA
[#student GPA]
index = sort[for: GPA]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>gather/count</b> - Returns the number of elements in a set
    </td>
  </tr>
  <tr>
    <td>
      <ul class="arglist">
        <li><strong>for</strong> - the set to count over</li>
        <li><strong>per</strong> - (optional) - one or more attributes by which to group `for`</li>
      </ul>
    </td>
    <td>
      <code>// counts the number of citizens in each state
residents = [#citizen state]
population = count[given: residents, per: state]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>gather/sum</b> - Returns the sum of values in a set of attributes
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>for</strong> - the set to gather</li>
        <li><strong>value</strong> - the specific variable to be summed</li>
        <li><strong>per</strong> - (optional) - one or more attributes by which to group `for`</li>
      </ul>
    </td>
    <td>
      <code>// returns the sum of salaries for each department
employees = [#employee salary department]
expenses = gather/sum[for: employees, value: employees.salary, per: department]</code>
    </td>
  </tr>
</table>

## Math

<table>
  <tr>
    <td colspan="2">
      <b>+</b> - Adds two numbers
    </td>
  </tr>

  <tr>
    <td>
      Infix notation
    </td>
    <td>
      <code>total-debt = credit-card + debit-card</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>-</b> - Subtracts two numbers
    </td>
  </tr>

  <tr>
    <td>
      Infix notation
    </td>
    <td>
      <code>remaining-debt = total-debt - amount_paid</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>*</b> - Multiplies two numbers
    </td>
  </tr>

  <tr>
    <td>
      Infix notation
    </td>
    <td>
      <code>yearly-payments = monthly-payments * 12</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>/</b> - Divides two numbers
    </td>
  </tr>

  <tr>
    <td>
      Infix notation
    </td>
    <td>
      <code>monthly-payments = yearly-payments / 12</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/floor</b> - Rounds a number down
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>value</strong> - the number to be rounded down</li>
      </ul>
    </td>
    <td>
      <code>// x rounded down to 34
x = math/floor[value: 34.2]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/ceiling</b> - Rounds a number up
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>value</strong> - the number to be rounded up</li>
      </ul>
    </td>
    <td>
      <code>// x rounded up to 35
x = math/ceiling[value: 34.2]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/round</b> - Rounds a number to the nearest integer
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>value</strong> - the number to be rounded to the nearest integer</li>
      </ul>
    </td>
    <td>
      <code>// x rounded to 34
x = math/floor[value: 34.2]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/sin</b> - Sine of an angle
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>degrees</strong> - the angle in degrees</li>
      </ul>
    </td>
    <td>
      <code>// r calculated to 1
r = math/sin[degrees: 90]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/cos</b> - Cosine of an angle
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>degrees</strong> - the angle in degrees</li>
      </ul>
    </td>
    <td>
      <code>// r calculated to 0
r = math/cos[degrees: 90]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/tan</b> - Tangent of an angle
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>degrees</strong> - the angle in degrees</li>
      </ul>
    </td>
    <td>
      <code>// r calculated to 1
r = math/tan[degrees: 45]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/max</b> - The greater of two values
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>a</strong> - a value to compare</li>
        <li><strong>b</strong> - another value to compare</li>
      </ul>
    </td>
    <td>
      <code>// takes the higher score
[#scores pac-man donkey-kong]
best-score = math/min[a: pac-man, b: donkey-kong]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/min</b> - The lesser of two values
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>a</strong> - a value to compare</li>
        <li><strong>b</strong> - another value to compare</li>
      </ul>
    </td>
    <td>
      <code>// takes the lower score
[#scores pac-man donkey-kong]
worst-score = math/min[a: pac-man, b: donkey-kong]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/mod</b> - Modulo division
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>value</strong> - the number to be divided (dividend)</li>
        <li><strong>by</strong> - the number by which to divide (divisor)</li>
      </ul>
    </td>
    <td>
      <code>// m is the remainder, 1
m = math/mod[value: 5, by: 2]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/absolute</b> - Absolute value of a number
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>value</strong> - the number whose absolute value is found</li>
      </ul>
    </td>
    <td>
      <code>// number of hours from the prime meridian
[#city latitude longitude]
hours-from-gmt = math/absolute[value: latitude] / 15</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/to-fixed</b> - Formats a number as a string to a certain number of decimal places
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>a</strong> - the number to be formatted</li>
        <li><strong>b</strong> - the number of decimal places to which `a` will be formatted</li>
      </ul>
    </td>
    <td>
      <code>// pi represented as the string "3.14"
[#circle circumference diameter]
pi = math/to-fixed[a: (circumference / diameter), b: 2]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>math/range</b> - Generates a range of numbers
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>start</strong> - the start of the range</li>
        <li><strong>stop</strong> - the end of the range</li>
      </ul>
    </td>
    <td>
      <code>// generates integers 1 through 10
y = math/range[start: 1, stop: 10]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>random/number</b> - Generates a random number between 1 and 0
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>seed</strong> - a number used to initialize the random number generator</li>
      </ul>
    </td>
    <td>
      <code>// generates a random number every second
[#time minutes seconds]
x = random/number[seed: seconds]</code>
    </td>
  </tr>
</table>

## Strings

<table>
  <tr>
    <td colspan="2">
      <b>string/replace</b> - Replaces a string of text with another
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>text</strong> - the text in which to search for strings and replace them</li>
        <li><strong>replace</strong> - the string to be replaced</li>
        <li><strong>with</strong> - the string that will replace `replace`</li>
      </ul>
    </td>
    <td>
      <code>// Americanized version of British spelling
[#website body]
american-version = string/replace[text: body, replace: "flavour", with: "flavor"]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>string/get</b> - Gets a character from a specific location in a string
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>text</strong> - the text to be searched</li>
        <li><strong>at</strong> - the location to be searched</li>
      </ul>
    </td>
    <td>
      <code>// finds the 17th letter of the alphabet
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
letter = string/get[text: alphabet, at: 17]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>string/uppercase</b> -Converts a string to uppercase
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>text</strong> - the text to be converted</li>
      </ul>
    </td>
    <td>
      <code>funny = "lol"
really-funny = string/uppercase[text: funny]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>string/lowercase</b> - Converts a string to lowercase
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>text</strong> - the text to be converted</li>
      </ul>
    </td>
    <td>
      <code>really-funny = "LOL"
down-a-notch = string/uppercase[text: really-funny]</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>string/index-of</b> - Returns the position of the first occurrence of a specified value in a string
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>text</strong> - the text to be searched</li>
        <li><strong>substring</strong> - the string to be found in `text`</li>
      </ul>
    </td>
    <td>
      <code>// Eve is in developers, starting at an index of 2
index = string/index-of[text: "developers", substring: "eve"</code>
    </td>
  </tr>

  <tr>
    <td colspan="2">
      <b>string/codepoint-length</b> - Returns the length of a string in Unicode code points.
    </td>
  </tr>

  <tr>
    <td>
      <ul class="arglist">
        <li><strong>text</strong> - the string whose length is found</li>
      </ul>
    </td>
    <td>
      <code>// the code point length of the word "unicode"
string = "unicode"
length-in-js = string/codepoint-length[text: string]</code>
    </td>
  </tr>
</table>

