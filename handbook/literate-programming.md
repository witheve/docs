---
menu:
  main:
    parent: "Eve Programs"
title: "Literate Programming"
weight: 3
---

# Literate Programming

In the spirit of literate programming, Eve programs are primarily prose, interleaved with Eve code. Donald Knuth explains literate programming in his [influential paper][0]:

> The practitioner of literate programming can be regarded as an essayist, whose main concern is with exposition and excellence of style. Such an author ... strives for a program that is comprehensible because its concepts have been introduced in an order that is best for human understanding, using a mixture of formal and informal methods that reinforce each other.

This description fits with the ethos of Eve - that programming is primarily meant to communicate with other humans, not the computer. You'll notice the above Eve program is actually written in two languages: Markdown, used to format the prose; and Eve, which is delineated by standard Markdown code blocks. Only the content within a block is compiled, while everything else is disregarded as a comment.

Writing code this way has several properties that result in higher quality programs:

- **Literate programming forces you to consider a human audience.** While this is usually the first step in writing any document, in programming the audience is typically a machine. For an Eve program, the audience might be your collaborators, your boss, or even your future self when revisiting the program in a year. By considering the audience of your program source, you create an anchor from which the narrative of your program flows, leading to a more coherent document.

- **The human brain is wired to engage with and remember stories.** Think back to a book you read (or maybe a show you watched) last year. You probably remember in great detail all of the characters and their personalities, the pivotal moments of the plot, the descriptions of the various settings, etc. But how much can you remember of a piece of code you haven't looked at for a year? Literate programming adds another dimension to your code that will help you keep more of your program in working memory.

- **Since Eve code blocks can be arranged in any order, literate programming encourages the programmer to arrange them in a way that makes narrative sense.** Code can have a beginning, middle, and end just like a short story. Or like an epic novel, code can have many interwoven storylines. Either way, the structure of the code should follow an order imposed by a narrative, not one imposed by the compiler.

- **Literate programming can help you think about your program more thoroughly.** Through practicing literate programming, you can reveal edge cases, incorrect assumptions, gaps in understanding the problem domain, and shaky implementation details before any code is even written.

Literate programming is a first-class design concept in Eve. We will be writing all of our programs in this manner, and will encourage others to do the same for the reasons above. That said, there is nothing in the syntax that specifically requires literate programming; you can write your program as a series of code blocks without any prose, and it will be perfectly valid.

## CommonMark

Eve is [CommonMark][1] compatible.

## Examples

- [TodoMVC](https://raw.githubusercontent.com/witheve/Eve/master/examples/todomvc.eve)
- [Tic-Tac-Toe](https://raw.githubusercontent.com/witheve/Eve/master/examples/tic-tac-toe.eve)

## See Also

[blocks](../blocks) | [programming model](../model) | [CommonMark](../commonmark)

[0]: http://www.literateprogramming.com/knuthweb.pdf
[1]: http://commonmark.org/
