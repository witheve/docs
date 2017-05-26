---
title: "Standard Library"
---

##  Aggregates

## gather/sort - Generates an ordering for a set

<table>

  <tr>
    <td>
      <ul>
        <li><strong>for</strong> - the set to sort</li>
        <li><strong>per</strong> - (optional) - one or more attributes by which to group `for`</li>
        <li><strong>direction</strong> - (optional) - direction in which to sort `for`. Possible values are:
          <ul>
            <li>'up' - smallest to largest; default option</li>
            <li>'down' - largest to smallest</li>
          </ul>
        </li>
      </ul>
    </td>
    <td>
      <code>// sorts the students by GPA
[#student GPA]
index = sort[value: GPA]</code>
    </td>
  </tr>

  <tr>
    <td>
      <h3>gather/count</h3> - Returns the number of elements in a set
    </td>
  </tr>
  <tr>
    <td>
      <ul>
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
    <td>
      <h3>gather/sum</h3> - Returns the sum of values in a set of attributes
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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

<h2>
  Math
</h2>

<table>
  <tr>
    <td>
      <h3>+</h3> - Adds two numbers
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
    <td>
      <h3>-</h3> - Subtracts two numbers
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
    <td>
      <h3>*</h3> - Multiplies two numbers
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
    <td>
      <h3>/</h3> - Divides two numbers
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
    <td>
      <h3>math/floor</h3> - Rounds a number down
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>value</strong> - the number to be rounded down</li>
      </ul>
    </td>
    <td>
      <code>// x rounded down to 34
x = math/floor[value: 34.2]</code>
    </td>
  </tr>

  <tr>
    <td>
      <h3>math/ceiling</h3> - Rounds a number up
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>value</strong> - the number to be rounded up</li>
      </ul>
    </td>
    <td>
      <code>// x rounded up to 35
x = math/ceiling[value: 34.2]</code>
    </td>
  </tr>

  <tr>
    <td>
      <h3>math/round</h3> - Rounds a number to the nearest integer
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>value</strong> - the number to be rounded to the nearest integer</li>
      </ul>
    </td>
    <td>
      <code>// x rounded to 34
x = math/floor[value: 34.2]</code>
    </td>
  </tr>

  <tr>
    <td>
      <h3>math/sin</h3> - Sine of an angle
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>deg</strong> - the angle in degrees</li>
      </ul>
    </td>
    <td>
      <code>// r calculated to 1
r = math/sin[deg: 90]</code>
    </td>
  </tr>

  <tr>
    <td>
      <h3>math/cos</h3> - Cosine of an angle
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>deg</strong> - the angle in degrees</li>
      </ul>
    </td>
    <td>
      <code>// r calculated to 0
r = math/cos[deg: 90]</code>
    </td>
  </tr>

  <tr>
    <td>
      <h3>math/tan</h3> - Tangent of an angle
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>deg</strong> - the angle in degrees</li>
      </ul>
    </td>
    <td>
      <code>// r calculated to 1
r = math/tan[deg: 45]</code>
    </td>
  </tr>

  <tr>
    <td>
      <h3>math/max</h3> - The greater of two values
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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
    <td>
      <h3>math/min</h3> - The lesser of two values
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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
    <td>
      <h3>math/mod</h3> - Modulo division
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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
    <td>
      <h3>math/absolute</h3> - Absolute value of a number
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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
    <td>
      <h3>math/to-fixed</h3> - Formats a number as a string to a certain number of decimal places
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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
    <td>
      <h3>math/range</h3> - Generates a range of numbers
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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
    <td>
      <h3>random/number</h3> - Generates a random number between 1 and 0
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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

<h2>
  Strings
</h2>

<table>
  <tr>
    <td>
      <h3>string/replace</h3> - Replaces a string of text with another
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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
    <td>
      <h3>string/get</h3> - Gets a character from a specific location in a string
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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
    <td>
      <h3>string/uppercase</h3> -Converts a string to uppercase
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>text</strong> - the text to be converted</li>
      </ul>
    </td>
    <td>
      <code>funny = "lol"
really-funny = string/uppercase[text: funny]</code>
    </td>
  </tr>

  <tr>
    <td>
      <h3>string/lowercase</h3> - Converts a string to lowercase
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>text</strong> - the text to be converted</li>
      </ul>
    </td>
    <td>
      <code>really-funny = "LOL"
down-a-notch = string/uppercase[text: really-funny]</code>
    </td>
  </tr>

  <tr>
    <td>
      <h3>string/index-of</h3> - Returns the position of the first occurrence of a specified value in a string
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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
    <td>
      <h3>string/codepoint-length</h3> - Returns the length of a string in Unicode code points.
    </td>
  </tr>

  <tr>
    <td>
      <ul>
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

<link rel="stylesheet" type="text/css" href="style.css">