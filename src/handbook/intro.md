# Introduction

## Notable Features

- Eve programs aren't talking to a database, they _are_ the database. That means no plumbing, no impedance mismatch, and no extra infrastructure is needed.

- Everything is data. The file system, http requests, the DOM... That means everything can be queried and everything can be reacted to.

- Eve's semantics were built for concurrency, asynchrony, and distribution. There are no promises, or thread synchronizations, or borrows. 

- Eve programs practice literate programming, since there's no incidental ordering imposed by the language.  

- Another result of a lack of ordering is that programs grow very organically through composition.

- Eve programs are naturally tiny.

- Correctness can be defined globally through integrity constraints, allowing people to safely contribute to an application without worrying about checking every possible invariant locally.

## See Also

[getting eve](../installation) | [running eve](../running) | [eve programs](../programs) | [core language](../core-language)