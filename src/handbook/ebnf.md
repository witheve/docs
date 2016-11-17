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
newline = "\n";
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
uuid ="⦑" (unicode - specials)  "⦒";
```

## Keywords and Identifiers

```ebnf
query-action = "search";
update-action = "bind" | "commit";
action = query-action | update-action;
if = "if";
then = "then";
else = "else";
is = "is";
not = "not";
none = "none";
keyword = search | action | if | then | else | boolean | is | not | none;
non-special-non-numeric = non-special - numeric;
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
attribute = tag | attribute-not | identifier {whitespace+ comparator whitespace+ expression};
name = "@" (identifier | string);
tag = "#" (identifier | string);
attribute-not = not "(" whitespace* identifier [comparator whitespace+ expression] ")";
attribute-access = identifier whitespace* {"." whitespace* identifier}+;
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
comment = "//" {unicode | whitespace - newline} newline;
statement = record | function | not-statement | if-statement | comparison | comment;
```

## Update Statements

```ebnf
create = (identifier whitespace+ equality whitespace+ record) | record;
delete = (identifier | attribute-access) whitespace+ ":=" whitespace+ none;
merge = (identifier | attribute-access) whitespace+ "<-" whitespace+ record;
tag-update = (identifier | attribute-access) whitespace+ ("+=" | "-=") whitespace+ tag;
attribute-update = attribute-access whitespace+ (":=" | "+=" | "-=") whitespace+ expression;
update-operation = create | delete | merge | tag-update | attribute-update;
```

## If-Then

```ebnf
group = "(" expression {whitespace+ expression} ")";
binding-group = "(" identifier {whitespace+ identifier} ")";
if-result = (group | expression);
if-expression = if whitespace+ {statement whitespace+} then whitespace+ if-result;
else-if-expression = else whitespace+ if whitespace+ {statement whitespace+} then whitespace+ if-result;
else-expression = else whitespace+ if-result;
if-statement = (identifier | binding-group) whitespace+ equality whitespace+
               if-expression
               {whitespace+ (if-expression | else-if-expression)}
               [else-expression];
```

## Sections

```ebnf
database-declaration = name | {name whitespace+};
search-section = search whitespace+ [database-declaration whitespace+] {statement whitespace};
update-section = update-action whitespace+ [database-declaration whitespace+] {action-statement whitespace};
section = search-section | update-section;
```

## Program and Blocks

```ebnf
fence-symbol = "```" | "~~~";
start-fence = newline fence-symbol [whitespace* (unicode - newline)] newline;
end-fence = newline fence-symbol newline;
block = start-fence {section} end-fence;
program = {unicode | whitespace | block};
```
