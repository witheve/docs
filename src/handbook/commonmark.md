---
menu:
  main:
    parent: "Appendix"
title: "CommonMark"
weight: 2
---

# CommonMark

Eve documents are compatible with CommonMark

## Syntax

### Headings

```
# heading1
## heading2
### heading3
```

### Emphasis

```
*italic*
_italic_
**bold**
__bold__
```

### Links

```
[link](address)

[link][ref]
[ref] : address
```

### Lists

```
- list item
- list item2
  - sublist item

* list item
* list item2
  * sublist item

1. ordered list1
2. ordered list2

1) ordered list1
2) ordered list2
```

### Quotes

```
> blockquote
```

### Code

~~~
```
  a block of code
```

`Inline code` with backticks
~~~

## Description

CommonMark is an effort to standardize and remove ambiguity from the Markdown language. Eve uses CommonMark as the basis for formatting and rendering prose contained in Eve files. Eve code is written as code blocks within a document specified in CommonMark. Code blocks are delinated by code fences, three backtics before and after Eve code. Everything within a code block is treated as Eve code.

## Examples

## See Also

[literate programming](../literate-programming) | [blocks](../blocks) | [programming model](../model)