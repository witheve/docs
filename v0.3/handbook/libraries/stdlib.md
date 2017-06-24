---
layout: default
title: "Standard Library"
---
{% raw %}

# Standard Library

## Aggregates

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>gather/sort</b> - Generates an ordering for a set
    </td>
  </tr>

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
        index = sort[for: GPA]</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>gather/count</b> - Returns the number of elements in a set
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>gather/sum</b> - Returns the sum of values in a set of attributes
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

## Math

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/floor</b> - Rounds a number down
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/ceiling</b> - Rounds a number up
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/round</b> - Rounds a number to the nearest integer
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/sin</b> - Sine of an angle
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>degrees</strong> - the angle in degrees</li>
      </ul>
    </td>
    <td>
      <code>// r calculated to 1
        r = math/sin[degrees: 90]</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/cos</b> - Cosine of an angle
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>degrees</strong> - the angle in degrees</li>
      </ul>
    </td>
    <td>
      <code>// r calculated to 0
        r = math/cos[degrees: 90]</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/tan</b> - Tangent of an angle
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>degrees</strong> - the angle in degrees</li>
      </ul>
    </td>
    <td>
      <code>// r calculated to 1
        r = math/tan[degrees: 45]</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/max</b> - The greater of two values
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/min</b> - The lesser of two values
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/mod</b> - Modulo division
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/absolute</b> - Absolute value of a number
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/to-fixed</b> - Formats a number as a string to a certain number of decimal places
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>math/range</b> - Generates a range of numbers
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>random/number</b> - Generates a random number between 1 and 0
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

## Strings

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>string/replace</b> - Replaces a string of text with another
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>string/get</b> - Gets a character from a specific location in a string
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>string/uppercase</b> -Converts a string to uppercase
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>string/lowercase</b> - Converts a string to lowercase
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>string/index-of</b> - Returns the position of the first occurrence of a specified value in a string
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
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>string/codepoint-length</b> - Returns the length of a string in Unicode code points.
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

## HTML

The HTML library is a low level interface for creating HTML elements and responding to events in the browser.

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/element</b> - renders a record in the browser as an html element of your choosing
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>tagname</strong> - determines the type of html element rendered in the browser; can be any html element given as a string</li>
        <li><strong>style</strong> - (optional) - specific CSS styles can be defined, but must be entered as a subrecord</li>
        <li><strong>text</strong> - (optional) - defines text within the html element</li>
        <li><strong>#</strong> - (optional) - any other tags on the record will be applied to the element as classes</li>
        <li><strong>class</strong> - (optional) defines one or more classes for the element</li>
        <li>Other attributes - (optional) - other attribute-value pairs will be applied directly to the element for integration with existing JS libraries or debugging</li>
      </ul>
    </td>
    <td>
      <code>// commits a div in the browser with the text “Hello world!” and the class “hello”
```
commit
  [#html/element #hello tagname: “div” text: “Hello world!”]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>Dynamic class record</b> - uses boolean logic to determine whether an element has a certain class
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li>Requires an `if` statement in the search block that returns true or false</li>
      </ul>
    </td>
    <td>
      <code>// if the text “Hello world!” is in a record tagged #html/element with the tagname “div”, apply the class “header” to that element
```
search
  hello = [#html/element tagname text: “Hello world!”]
  header = if tagname = “div” then “true” else “false”

bind
  hello <- [class: [header]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/listener/hover</b> - adds a listener to an html element to make it responsive when it is being hovered over in browser; required to use the <code>#html/hovered</code>, <code>#html/event/hover-in</code>, and <code>#html/event/hover-out</code> tags
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li>Apply the tag to an element to make it responsive to hovering</li>
      </ul>
    </td>
    <td>
      <code>// commit a div to the browser with the text “Hover over me!” that will change its record if it is hovered over
```
commit
  [#ui/div #html/listener/hover text: “Hover over me!”]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/hovered</b> - a tag given by Eve to an html element being currently hovered over; requires <code>#html/listener/hover</code>
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li>Tag applied by Eve</li>
      </ul>
    </td>
    <td>
      <code>// if a #ui/a element with the hover listener is being hovered over, add a style to make the font bold
```
search
  element = [#ui/a #html/hovered]

bind
  element.style <- [font-weight: bold]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/event/(hover-in, hover-out)</b> - monitors when the mouse enters or leaves a particular element in the browser; requires <code>#html/listener/hover</code>
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>element</strong> - (optional) - the element that the mouse is entering or leaving</li>
      </ul>
    </td>
    <td>
      <code>// when the mouse enters an anchor tag, make the color red; the color will not revert when the mouse leaves
```
search
  [#html/event/hover-in element: anchor]
  anchor = [#ui/a]

bind
  anchor.style <- [color: red]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/event/change</b> - monitors specific changes in text input or form elements in the browser
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>element</strong> - (optional) - the changed element</li>
        <li><strong>value</strong> - (optional) - the current value of a form element in the browser</li>
      </ul>
    </td>
    <td>
      <code>// looks for any element tagged #question that has the magic word and adds the tag #magic-word to it
```
search
  [#html/event/change value: “please” element: question]
  question = [#question]

bind
  question <- [#magic-word]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/event/(click, double-click, mouse-down, mouse-up)</b> - monitors mouse events in the browser; <code>#html/event/click</code> and <code>#html/event/double-click</code> currently work for the left mouse button only
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>element</strong> - (optional) - the element to be monitored; includes clicks on any children within the element</li>
        <li><strong>target</strong> - (optional) - the exact element to be monitored; does not include any children</li>
        <li><strong>page-x</strong> - (optional) - the x-coordinate of the mouse pointer relative to the page</li>
        <li><strong>page-y</strong> - (optional) - the y-coordinate of the mouse pointer relative to the page</li>
        <li><strong>window-x</strong> - (optional) - the x-coordinate of the mouse pointer relative to the window</li>
        <li><strong>window-y</strong> - (optional) - the y-coordinate of the mouse pointer relative to the page</li>
        <li><strong>button</strong> - (optional) - the mouse button whose click is monitored; options are:
          <ul>
            <li>“left” - left mouse button; if no button argument is provided, this is the default</li>
            <li>“right” - right mouse button</li>
            <li>“middle” - middle mouse button</li>
            <li>3, 4, 5, ... - additional numbered mouse buttons</li>
          </ul>
        </li>
      </ul>
    </td>
    <td>
      <code>// looks for a right click in any h1 element and posts the message “Right clicked!”
```
search
  [#html/event/mouse-up element: [#ui/h1] button: “right”]

commit
  [#ui/div text: “Right clicked!”]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/listener/context-menu</b> - prevents the context menu from opening when an element is right clicked in the browser; useful in cases where you want to use right clicks on the element for your own purposes
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li>Apply the tag to the element whose context menu you want to prevent</li>
      </ul>
    </td>
    <td>
      <code>// commits an h1 element whose context menu won’t open if right clicked
```
commit
  [#ui/h1 #html/listener/context-menu text: “Don’t inspect me”]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/event/(key-up, key-down)</b> - monitors when a key has been pressed or released
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>element</strong> - (optional) - the element which has focus during key-up or key-down</li>
        <li><strong>key-code</strong> - the key code of the key to be monitored</li>
        <li><strong>key</strong> - (optional) - the key to be monitored; an alternative to key-code for a premade list of keys:
          <ul>
            <li>"tab</li>
            <li>"enter"</li>
            <li>"shift"</li>
            <li>"control"</li>
            <li>"alt"</li>
            <li>"escape"</li>
            <li>"left"</li>
            <li>"up"</li>
            <li>"right"</li>
            <li>"down"</li>
            <li>"meta"</li>
          </ul>
        </li>
      </ul>
    </td>
    <td>
      <code>// when the escape key is released, commits a gentle reminder for the user
```
search
  [#html/event/key-up key: “escape”]

commit
  [#ui/div text: “THERE IS NO ESCAPE”]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/event/(focus, blur)</b> - monitors when a form element in the browser either gains or loses focus
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>element</strong> - (optional) - the element to be monitored</li>
        <li><strong>value</strong> - (optional) - the value of the form element when it gains or loses focus</li>
      </ul>
    </td>
    <td>
      <code>// when the important element loses focus, commits a message to help the user
```
search
  [#html/event/blur element: [#important]]

commit
  [#ui.div text: “Stay focused!”]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#html/trigger/(focus, blur)</b> - focuses or blurs a specific form element in the browser; must be used only with commit, not bind
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li>Apply the tag to the element to gain or lose focus</li>
      </ul>
    </td>
    <td>
      <code>// when a form element is found in the browser with the name “first-name”, focuses on that element
```
search
  first = [#ui/input name: “first-name”]

commit
  first <- [#html/trigger/focus]
```</code>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <strong>Note:</strong> Despite being a one-time trigger, Eve does not currently remove the tag once focus or blur has occurred, resulting in a state desynced from the real world. This bug is currently being fixed.
    </td>
  </tr>
</table>

## Canvas

The canvas library is an interface for drawing graphics in the browser using the [HTML canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#canvas/root</b> - creates an HTML canvas for drawing rich graphics
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>width</strong> - the width of the canvas in pixels</li>
        <li><strong>height</strong> - the height of the canvas in pixels</li>
        <li><strong>children</strong> - (optional) - paths are written as child records; while optional, without any children, the canvas will be blank</li>
      </ul>
    </td>
    <td><code>// creates a canvas tagged #my-canvas that is 160 pixels wide by 90 pixel tall
```
commit
  [#canvas/root #my-canvas width: 160 height: 90]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#canvas/path</b> - defines the paths that are drawn as well as their style and appearance
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>fillStyle</strong> - (optional) - sets the color, gradient, or pattern used to fill the drawing; if undefined, the default is black</li>
        <li><strong>strokeStyle</strong> - (optional) - sets the color, gradient, or pattern used for the strokes; if undefined, the path will default to a black fill style</li>
        <li><strong>lineWidth</strong> - (optional) - sets the width of strokes in pixels; if undefined, the default is 1px</li>
        <li><strong>lineCap</strong> - (optional) - sets the style of end caps on lines; options are:
          <ul>
            <li>“butt” - a flat edge; if undefined, butt is default</li>
            <li>“round” - a rounded end cap</li>
            <li>“square” - ends are squared off by a box with an equal width and half the height of the line's thickness</li>
          </ul>
        </li>
        <li><strong>lineJoin</strong> - (optional) - sets the style of corners where two lines meet; options are:
          <ul>
            <li>“miter” - a sharp corner; if undefined, miter is default</li>
            <li>“round” - a rounded corner</li>
            <li>“bevel” - a beveled corner</li>
          </ul>
        </li>
        <li><strong>children</strong> - (optional) - each individual operation in the path is written as a child record; while optional, without any children, the canvas will be blank</li>
      </ul>
    </td>
    <td><code>// adds a #canvas/path to #my-canvas with a black stroke, a line width of 2 pixels and beveled corners
```
search
  canvas = [#canvas/root #my-canvas]

commit
  canvas.children := [#canvas/path strokeStyle: “#000000” lineWidth: 2 lineJoin: bevel]
```</code>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <strong>Note about operations:</strong> Each individual path is written as a child record of #canvas/path with a type attribute whose value defines the path. No tags are necessary. Paths are drawn by default in the order they are given as children, such that the last child will appear on top of all the others, and the first child will be at the bottom. Adding a sort attribute to a child path allows you to manually define the order in which they are drawn. Paths originate in the upper left corner, so x coordinates originate at the left edge of the canvas and move to the right, and y coordinates originate at the top edge of the canvas and move to the bottom. Eve canvas operations follow the same rules as those outlined by <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D">Mozilla Developer Network for canvas rendering</a>, making it an excellent source of further documentation.</td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>moveTo</b> - moves the path to a specified location without drawing a line; the default starting coordinates are (0,0)
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>x</strong> - the horizontal coordinate to move to, in pixels</li>
        <li><strong>y</strong> - the vertical coordinate to move to, in pixels</li>
      </ul>
    </td>
    <td><code>// creates a 100x100 canvas and moves the path 20 pixels right and 15 pixels down from the top left corner of the canvas without drawing a line
```
commit
  [#canvas/root width: 100 height: 100 children:
    [#canvas/path children:
      [type: “moveTo” x: 20 y: 15]]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>lineTo</b> - moves the path to a specified location and draws a line; the default starting coordinates are (0,0)
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>x</strong> - the horizontal coordinate to move to, in pixels</li>
        <li><strong>y</strong> - the vertical coordinate to move to, in pixels</li>
      </ul>
    </td>
    <td><code>// draws a black line from the top left corner of a 100x100 canvas to the center
```
commit
  [#canvas/root width: 100 height: 100 children:
    [#canvas/path strokeStyle: “#000000” children:
      [type: “lineTo” x: 50 y: 50]]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>bezierQuadraticCurveTo</b> - draws a Bézier curve
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>cp1x</strong> - the x coordinate of the first control point</li>
        <li><strong>cp1y</strong> - the y coordinate of the first control point</li>
        <li><strong>cp2x</strong> - the x coordinate of the second control point</li>
        <li><strong>cp2y</strong> - the y coordinate of the second control point</li>
        <li><strong>x</strong> - the x coordinate of the end point</li>
        <li><strong>y</strong> - the y coordinate of the end point</li>
      </ul>
    </td>
    <td><code>// draws a red Bézier curve starting at (20, 25) and ending at (40, 50)
```
commit
  [#canvas/root width: 100 height: 100 children:
    [#canvas/path strokeStyle: “rgb(255, 0, 0)” children:
      [type: “moveTo” x: 20 y: 25]
      [type: “bezierQuadraticCurveTo” <strong>cp1x</strong>: 20 <strong>cp1y</strong>: 0 <strong>cp2x</strong>: 30 <strong>cp2y</strong>: 30  x: 40 y: 50]]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>quadraticCurveTo</b> - draws a quadratic curve
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>cpx</strong> - the x coordinate of the control point</li>
        <li><strong>cpy</strong> - the y coordinate of the control point</li>
        <li><strong>y</strong> - the x coordinate of the end point</li>
        <li><strong>y</strong> - the y coordinate of the end point</li>
      </ul>
    </td>
    <td><code></code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>arc</b> - draws an arc curve
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>y</strong> - the x coordinate of the center of the curve</li>
        <li><strong>y</strong> - the y coordinate of the center of the curve</li>
        <li><strong>radius</strong> - the radius of the curve in pixels</li>
        <li><strong>startAngle</strong> - the starting angle of the curve in radians</li>
        <li><strong>endAngle</strong> - the ending angle of the curve in radians</li>
        <li><strong>anticlockwise</strong> - (optional) - values can be true or false; true draws the arc counterclockwise, false draws the arc clockwise</li>
      </ul>
    </td>
    <td><code>// draws an arc that circumscribes ¾ of a 40 pixel-wide circle in the middle of the canvas
```
commit
  [#canvas/root width: 100 height: 100 children:
    [#canvas/path children:
      [type: “arc” x: 50 y: 50 radius: 20 startAngle: 0 endAngle: 1.5 * 3.14]]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>arcTo</b> - draws an arc curve; particularly useful for creating an arc between two tangents
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>x1</strong> - the x coordinate of the starting point of the curve</li>
        <li><strong>y1</strong> - the y coordinate of the starting point of the curve</li>
        <li><strong>x2</strong> - the x coordinate of the ending point of the curve</li>
        <li><strong>y2</strong> - the y coordinate of the ending point of the curve</li>
        <li>radius - the radius of the curve in pixels</li>
      </ul>
    </td>
    <td><code>// draws an arc that connects two perpendicular lines with a circular curve
```
commit
  [#canvas/root width: 100 height: 100 children:
    [#canvas/path children:
      [type: “lineTo” x: 50 y: 0]
      [type: “arcTo: x1: 50 y1: 0 x2: 55 y2: 5 radius: 5]
      [type: “lineTo” x: 55 y: 55]]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>ellipse</b> - draws an elliptical curve
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>y</strong> - the x coordinate of the center of the curve</li>
        <li><strong>y</strong> - the y coordinate of the center of the curve</li>
        <li><strong>radiusX</strong> - the horizontal radius of the curve</li>
        <li><strong>radiusY</strong> - the vertical radius of the curve</li>
        <li><strong>rotation</strong> - the rotation of the ellipse in radians</li>
        <li><strong>startAngle</strong> - the starting angle of the curve in radians</li>
        <li><strong>endAngle</strong> - the ending angle of the curve in radians</li>
        <li><strong>anticlockwise</strong> - (optional) - values can be true or false; true draws the arc counterclockwise, false draws the arc clockwise</li>
      </ul>
    </td>
    <td><code>// draws a green oval in the center of the canvas that is 20 pixels wide and 30 pixels high
```
commit
  [#canvas/root width: 100 height: 100 children:
    [#canvas/path fillStyle: “#00ff00” children:
      [type: “ellipse” x: 50 y: 50 radiusX: 10 radiusY: 15 rotation: 0 startAngle: 0 endAngle: 2 * 3.14]]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>rect</b> - draws a rectangle
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>y</strong> - the x coordinate of the upper left corner of the rectangle</li>
        <li><strong>y</strong> - the y coordinate of the upper left corner of the rectangle</li>
        <li><strong>width</strong> - the width of the rectangle in pixels</li>
        <li><strong>height</strong> - the height of the rectangle in pixels</li>
      </ul>
    </td>
    <td><code>// draws a blue square with black borders in the middle of the canvas
```
commit
  [#canvas/root width: 100 height: 100 children:
    [#canvas/path fillStyle: “#0000ff” strokeStyle: “#000000” children:
      [type: “rect” x: 40 y: 40 width: 20 height: 20]]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>closePath</b> - draws a line from the position of the path back to the beginning of the path
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li>No arguments</li>
      </ul>
    </td>
    <td><code>// returns the path to (10, 10) from (20, 40) to create a triangle
```
commit
  [#canvas/root width: 100 height: 100 children:
    [#canvas/path children:
      [type: “moveTo” x: 10 y: 10]
      [type: “lineTo” x: 20 y: 10]
      [type: “lineTo” x: 20 y: 40]
      [type: “closePath”]]]
```</code>
    </td>
  </tr>
</table>

## UI

The UI library provides a shorthand for adding standard HTML elements, as well as some ready-made components for interactive apps, to the browser. The ready-made UI components - `#ui/button`, `#ui/column`, `#ui/row`, and `#ui/autocomplete` - come with a set of default styles to make them quicker and easier to get started with.

**Note**: In the future we are considering moving all of the HTML shortcuts from `#ui` to `#html`, so that `#ui` will have only the pre-styled components for building apps. If and when this change happens, it will be announced and the documentation will change to reflect it.

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#ui/...</b> - renders a record in the browser as an html element of your choosing
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li>the <code>#ui</code> tag supports the following html elements:
          <ul>
            <li><code>#ui/row</code></li>
            <li><code>#ui/column</code></li>
            <li><code>#ui/spacer</code></li>
            <li><code>#ui/input</code></li>
            <li><code>#ui/text</code></li>
            <li><code>#ui/a</code></li>
            <li><code>#ui/style</code></li>
            <li><code>#ui/link</code></li>
            <li><code>#ui/div</code></li>
            <li><code>#ui/span</code></li>
            <li><code>#ui/img</code></li>
            <li><code>#ui/h1</code></li>
            <li><code>#ui/h2</code></li>
            <li><code>#ui/h3</code></li>
            <li><code>#ui/ul</code></li>
            <li><code>#ui/ol</code></li>
            <li><code>#ui/li</code></li>
          </ul>
        </li>
        <li><strong>style</strong> - (optional) - specific CSS styles can be defined, but must be entered as a subrecord</li>
        <li><strong>text</strong> - (optional) - defines text within the html element</li>
        <li><strong>#</strong> - (optional) - any other tags on the record will be applied to the element as classes</li>
        <li><strong>class</strong> - (optional) defines one or more classes for the element</li>
        <li>Other attributes - (optional) - other attribute-value pairs will be applied directly to the element for integration with existing JS libraries or debugging</li>
      </ul>
    </td>
    <td><code>// commits a div in the browser with the text “Hello world!”
```
commit
  [#ui/div text: “Hello world!”]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#ui/(column, row)</b> - renders a column or row in the browser whose children are drawn vertically for #ui/column and horizontally for #ui/row
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>children</strong> - (optional) - the children contained within the column or row</li>
        <li><strong>style</strong> - (optional) - specific CSS styles can be defined, but must be entered as a subrecord</li>
        <li><strong>text</strong> - (optional) - defines text within the column or row</li>
        <li><strong>#</strong> - (optional) - any other tags on the record will be applied to the column or row as classes</li>
        <li><strong>class</strong> - (optional) defines one or more classes for the element</li>
        <li>Other attributes - (optional) - other attribute-value pairs will be applied directly to the column or row for integration with existing JS libraries or debugging</li>
      </ul>
    </td>
    <td><code>// creates 3 very wise divs in the browser stacked on top of one another
```
commit
  [#ui/column children:
    [#ui/div text: “See no evil.”]
    [#ui/div text: “Hear no evil.”]
    [#ui/div text: “Speak no evil.”]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#ui/button</b> - renders a button in the browser
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li> - (optional) - preset options for class are:
          <ul>
            <li>“inset” - an inset button style</li>
            <li>“flat” - a flat button style</li>
            <li>If class is not specified, there is a plain default style that will be used</li>
          </ul>
        </li>
        <li><strong>icon</strong> - (optional) - adds an icon to the button; utilizes <a href="http://ionicons.com/">Ionicons</a>, omitting the “ion-” before icon names</li>
        <li><strong>style</strong> - (optional) - specific CSS styles can be defined, but must be entered as a subrecord</li>
        <li><strong>text</strong> - (optional) - defines text in the button</li>
        <li><strong>#</strong> - (optional) - any other tags on the record will be applied to the button as classes</li>
        <li>Other attributes - (optional) - other attribute-value pairs will be applied directly to the button for integration with existing JS libraries or debugging</li>
      </ul>
    </td>
    <td><code></code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#ui/autocomplete</b> - renders as its child a #ui/autocomplete/input form in the browser that offers autocomplete options based on a list of possible responses
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>completion</strong> - the list of possible responses, given as a subrecord with the attribute “text” whose value is the list; requires the use of a pipe in the #ui record if matching against multiple search records for one autocomplete field</li>
        <li><strong>Note</strong>: Once an autocomplete option has been selected, #ui/autocomplete automatically gains a <strong>selected</strong> attribute whose value is the completion record; in the case of the example shown here, the <strong>selected</strong> attribute would be whichever <code>#state</code> record was chosen</li>
        <li><strong>placeholder</strong> - (optional) - the placeholder text for the input field</li>
        <li><strong>style</strong> - (optional) - specific CSS styles can be defined, but must be entered as a subrecord</li>
        <li><strong>#</strong> - (optional) - any other tags on the record will be applied to the autocomplete as classes</li>
        <li><strong>class</strong> - (optional) defines one or more classes for the autocomplete</li>
        <li>Other attributes - (optional) - other attribute-value pairs will be applied directly to the autocomplete for integration with existing JS libraries or debugging</li>
      </ul>
    </td>
    <td><code>// creates an autocomplete form with the class “birth-state” and the placeholder “Which state were you born in?”, where the autocomplete options are the names of any #state records found
```
search
  [#state name]

commit
  [#ui/autocomplete #birth-state placeholder: “Where state were you born in?” | completion: [text: name]]
```</code>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <strong>Note about autocomplete:</strong> <code>#ui/autocomplete</code> has a set of events that it emits and responds to. Other components may end up implementing these same events in the future, but they are currently exclusive to <code>#ui/autocomplete</code>.
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#ui/event/clear</b> - clears the specified autocomplete input field
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>autocomplete</strong> - the autocomplete element to clear</li>
      </ul>
    </td>
    <td><code>// clears an autocomplete field if it loses focus
```
search
  autocomplete = [#ui/autocomplete]
  [#html/event/blur element: [#ui/autocomplete/input autocomplete]]

commit
  [#ui/event/clear autocomplete]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#ui/event/open</b> - monitors for the autocomplete dropdown list opening; must be used only with commit if searching with this tag
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>autocomplete</strong> - the autocomplete being opened</li>
      </ul>
    </td>
    <td><code>// changes the font color of the autocomplete input to red when the list is opened; the color will not revert once the menu is closed unless another block is specifically written to do so
```
search
  autocomplete = [#ui/autocomplete]
  input = [#ui/autocomplete/input autocomplete]
  [#ui/event/open autocomplete]

commit
  input.style <- [color: #ff0000]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#ui/event/close</b> - monitors for the autocomplete dropdown list closing; must be used only with commit if searching with this tag
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>autocomplete</strong> - the autocomplete being closed</li>
      </ul>
    </td>
    <td><code>// changes the font color of the autocomplete input to black when the list is closed; reverts the change in the example for #ui/event/open
```
search
  autocomplete = [#ui/autocomplete]
  input = [#ui/autocomplete/input autocomplete]
  [#ui/event/close autocomplete]

commit
  input.style <- [color: #000000]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#ui/event/select</b> - monitors for an autocomplete option being selected; must be used only with commit if searching with this tag
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>autocomplete</strong> - the autocomplete being closed</li>
      </ul>
    </td>
    <td><code>// as a follow-up to the #ui/autocomplete example, this waits for the user to pick a birth state, then creates a new autocomplete tagged #birth-county to ask which county within that particular state the user was born in
```
search
  birth-state = [#ui/autocomplete #birth-state selected]
  selected = [#state name counties]
  [#ui/event/select autocomplete: birth-state]

commit
  [#ui/autocomplete #birth-county placeholder: “Which county?” | completion: [text: counties]]
```</code>
    </td>
  </tr>
</table>

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#ui/event/change</b> - monitors for a change in the value of the autocomplete input field
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>autocomplete</strong> - the autocomplete whose input field changed</li>
      </ul>
    </td>
    <td><code>// when an autocomplete asking what the magic word is changes to the correct answer, adds the tag #magic-word to the autocomplete
```
search
  [#ui/event/change autocomplete]
  autocomplete = [#ui/autocomplete placeholder: “What’s the magic word?” value: “please”]

bind
  autocomplete <- [#magic-word]
```</code>
    </td>
  </tr>
</table>

## System

The system library provides various system-level utilities for Eve.

<table class="libitem">
  <tr>
    <td colspan="2">
      <b>#system/timer</b> - starts a timer at the specified resolution
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        <li><strong>resolution</strong> - the frequency in milliseconds of the timer.</li>
        <li><strong>year</strong> - (optional) - the current year</li>
        <li><strong>month</strong> - (optional) - the current month (1 - 12)</li>
        <li><strong>day</strong> - (optional) - the current day of the month (1 - 31)</li>
        <li><strong>weekday</strong> - (optional) - the current day of the week (1 - 7, where 1 is Sunday)</li>
        <li><strong>hour</strong> - (optional) - the current hour (0 - 23)</li>
        <li><strong>minute</strong> - (optional) - the current minute (0 - 59)</li>
        <li><strong>second</strong> - (optional) - the current second (0 - 59)</li>
        <li><strong>millisecond</strong> - (optional) - the current millisecond (0 - 999)</li>
        <li><strong>timestamp</strong> - (optional) - the current time represented as the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC</li>
        <li><strong>tick</strong> - (optional) - the number of ticks of the timer since it was created</li>
      </ul>
    </td>
    <td>
      <code>
Commits a timer that ticks every 1000 milliseconds

```
commit
  [#system/timer resolution: 1000]
```

Displays the current time

```
search
  [#system/timer hour minute second]

bind
  [#ui/text text: "{{hour}}:{{minute}}:{{second}}"]
```
      </code>
    </td>
  </tr>
</table>

{% endraw %}
