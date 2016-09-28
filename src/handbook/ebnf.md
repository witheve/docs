---
menu:
  main:
    parent: "Appendix"
title: "Grammar"
weight: 1
---


# Eve EBNF grammar

The following specification is expressed in [Extended Backus–Naur Form](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_Form)

## Basics

```ebnf
newline = "\n"
whitespace =  " " | "\t" | "," | newline;
unicode = ? all unicode chars - whitespace ?;
specials = "@" | "#" | "." | "," | "(" | ")" | "[" | "]" | "{" | "}" | "⦑" | "⦒" | ":" | "\"";
non-special = unicode - specials;
```

## Values

```ebnf
none = "none";
boolean = "true" | "false";
numeric = "0" .. "9";
number = ["-"] {numeric} ["." {numeric}];
string-interpolation = "{{" expression "}}";
string = "\"" {string-interpolation | unicode - "\"" | "\\\"" | whitespace} "\"";
uuid ="⦑" (unicode - specials)  "⦒"
```

## Keywords and Identifiers

```ebnf
match = "match";
action = "bind" | "commit";
if = "if";
then = "then";
else = "else";
is = "is";
not = "not";
none = "none";
keyword = match | action | if | then | else | boolean | is | not | none
non-special-non-numeric = non-special - numeric
identifier = (non-special-non-numeric {non-special}) - keyword - "```";
```

## Comparisons

```ebnf
equality = ":" | "=";
comparator = equality | ">" | "<" | ">=" | "<=" | "!=";
comparison = expression whitespace+ comparator whitespace+ expression;
```

## Functions

```ebnf
infix-op = "*" | "+" | "-" | "/";
infix = expression infix-op expression;
function = identifier "[" [attribute] {whitespace+ attribute} "]";
```

## Records and Attributes

```ebnf
record = "[" [attribute] {whitespace+ attribute} "]"
attribute = name | tag | attribute-not | identifier {whitespace+ comparator whitespace+ expression};
name = "@" (identifier | string);
tag = "#" (identifier | string);
attribute-not = not "(" whitespace* identifier [comparator whitespace+ expression] ")";
attribute-access = identifier whitespace* {"." whitespace* identifier}+
```

## Special Forms

```ebnf
not-statement = not "(" statement {whitespace+ statement} ")";
is-expression = is "(" comparison ")";
```

## Expression

```ebnf
expression = number | identifier | function | infix | record | attribute-access;
```

## Statements

```ebnf
comment = "//" {unicode | whitespace - newline} newline
statement = record | function | not-statement | if-statement | comparison | comment
```

## Action Statements

```ebnf
create-action = (identifier whitespace+ equality whitespace+ record) | record
merge-action = (identifier | attribute-access) whitespace+ "<-" whitespace+ record
name-tag-action = (identifier | attribute-access) whitespace+ ("+=" | "-=") whitespace+ (name | tag)
remove-action = (identifier | attribute-access) whitespace+ ":=" whitespace+ none
attribute-action = attribute-access whitespace+ (":=" | "+=" | "-=") whitespace+ expression
action-operation = create-action | merge-action | name-tag-action | remove-action | attribute-action
```

## If-Then

```ebnf
group = "(" expression {whitespace+ expression} ")"
binding-group = "(" identifier {whitespace+ identifier} ")"
if-result = (group | expression);
if-expression = if whitespace+ {statement whitespace+} then whitespace+ if-result;
else-if-expression = else whitespace+ if whitespace+ {statement whitespace+} then whitespace+ if-result;
else-expression = else whitespace+ if-result
if-statement = (identifier | binding-group) whitespace+ equality whitespace+
               if-expression
               {whitespace+ (if-expression | else-if-expression)}
               [else-expression]
```

## Sections

```ebnf
database-declaration = name | "(" {name whitespace+} ")"
match-section = match whitespace+ [database-declaration whitespace+] {statement whitespace}
action-section = action whitespace+ [database-declaration whitespace+] {action-statement whitespace}
section = match-sectiong | action-section
```

## Program and Blocks

```ebnf
fence-symbol = "```"
start-fence = newline fence-symbol [whitespace* (unicode - newline)] newline
end-fence = newline fence-symbol newline
block = start-fence {section} end-fence
program = {unicode | whitespace | block}
```