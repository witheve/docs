# Match Phase

used to gather information from one or more databases

## Description

In the match phase of a block, you gather all the information you need to complete the block. This phase is prefaced with the `match` keyword, and continues until the action phase, as indicated by a  `bind` or `commit`. 

The match phase is all-or-nothing; if all of the records in the match phase are found, then the block proceeds to the action phase. If any of the records in the match phase are not found, then the action phase cannot proceed.

## Records in the Match Phase

In the match phase, you match records in the Eve DB, whereas in the action phase, you can create or update records.

`[attribute: value, ...]` matches records with the given attributes in the Eve DB.

## See Also

[match](../match) | [bind](../bind) | [commit](../commit) | [contexts](../context)