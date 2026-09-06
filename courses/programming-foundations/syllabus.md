# Programming & Data Structures — Syllabus

> Computer Science · Tier 0 · ~15 lessons · Prereqs: none · Roadmap id: `programming-foundations`

## Goal

Build the mental model of a working programmer: how a machine walks through instructions, and how the classic data structures store information so that the operations you care about are fast. You'll learn to pick the right structure for a job and defend the choice with Big-O, and you'll get a first taste of recursion and backtracking. This course deliberately skips language-specific syntax, systems programming, and clever algorithm design (that's [`algorithms`](../algorithms/syllabus.md)) — it's the on-ramp to both. Code here is language-agnostic pseudocode you **read, trace and cost**, never write: every problem is a hand-trace, an operation count, a broken invariant to find, or a structure to choose under a stated constraint (see the revision note at the foot).

## Scope discipline

This course and [`algorithms`](../algorithms/syllabus.md) both touch asymptotics,
amortized cost, sorting and graph traversal. Each topic has **one owner**; a ceded
topic is still *used* freely here, it is just cited rather than re-derived. Neither
course is a prerequisite for the other — they are entry points into the same field
from different ends, and can be read in either order.

The dividing line: **this course owns the machine model and the data structures —
what a thing *is*, what its operations *cost*, and how to trace it. `algorithms`
owns the formal apparatus and the proofs.** A question of the form "which structure,
and what does each operation cost?" belongs here. A question of the form "prove this
bound is tight" belongs there.

| Topic | Owner | This course's role |
|---|---|---|
| Formal $O$ / $\Omega$ / $\Theta$ / $o$ / $\omega$ definitions with witnesses $c, n_0$; proving one function is $o$ of another | [`algorithms` 1.1](../algorithms/lessons/01-01-asymptotic-notation.md) | 1.4 teaches Big-O **operationally** — count the operations, keep the dominant term — and points there for the definitions |
| Recurrences, recursion trees, the master theorem | [`algorithms` 1.2–1.3](../algorithms/lessons/01-02-recurrences-recursion-trees-substitution.md) | 1.3 counts calls in a recursion by hand and reads the call tree; it never solves a recurrence symbolically |
| Amortized analysis as a technique (aggregate / accounting / potential) | [`algorithms` 2.4](../algorithms/lessons/02-04-amortized-analysis-and-union-find.md) | 2.2 derives the doubling total by direct summation and states the amortized-$O(1)$ result; the potential-function proof is cited |
| The $\Omega(n\log n)$ comparison lower bound and its decision-tree proof | [`algorithms` 1.4](../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md) | 4.1 states the wall as a fact and shows why elementary sorts sit at $\Theta(n^2)$ |
| DFS timestamps, tree/back/forward/cross edge classification, BFS shortest-path proof | [`algorithms` 3.1](../algorithms/lessons/03-01-graph-search-bfs-and-dfs.md) | 4.2 builds the two representations and traces both traversals; the classification machinery is cited |
| Rotation-by-rotation AVL/red-black insertion algorithms | [`algorithms`](../algorithms/syllabus.md) / [`databases`](../databases/syllabus.md) | 3.2 does one rotation by hand and states the height guarantees each scheme buys |

Running the other way, this course **owns** the data structures themselves —
dynamic array, linked list, stack, queue, hash table, BST, heap — and
[`algorithms`](../algorithms/syllabus.md) uses them through their interfaces.

## Dangerous Checklist

When you finish, you can:

- [ ] Trace a program by hand through variables, branches, and loops and predict its output
- [ ] State a function's precondition and postcondition, and find an input on which it breaks its promise
- [ ] Unwind a recursive routine's call stack on paper, count its calls, and give its time *and* space cost
- [ ] Give the Big-O of a loop or recursive routine and say what it means as input grows
- [ ] Separate an abstract data type from its implementation and name the interface either exposes
- [ ] Choose between an array, a linked list, a stack, and a queue for a given access pattern
- [ ] Explain how a hash table turns a key into O(1) average lookup, and when it degrades
- [ ] Insert into and search a binary search tree, and say why balance controls the cost
- [ ] Use a heap to serve highest-priority items and justify its O(log n) per operation
- [ ] Represent a graph two ways and traverse it breadth-first and depth-first
- [ ] Trace an elementary sort, count its comparisons, and say why $O(n\log n)$ is the wall
- [ ] Solve a small constraint puzzle by backtracking and prune a dead branch early

## Modules

### Module 1: Programming & recursion

From a single instruction to a self-calling function — the raw machinery of computation, plus the two things you can say about a piece of code without running it: what it **promises** (its contract and invariants) and what it **costs** (Big-O).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Values, variables, and control flow | Trace straight-line, branching, and looping code by hand | values & types, assignment, `if`/`else`, `while`/`for`, boolean logic |
| 1.2 | Functions, contracts, and invariants | Say what a function promises, and find the input that breaks it | parameters & return, scope & shadowing, preconditions/postconditions, loop invariants (initialization, maintenance, termination), aliasing |
| 1.3 | Recursion and the call stack | Unwind a recursive routine and count what it costs | base vs recursive case, the call stack and its depth, the call tree, recursion ↔ iteration |
| 1.4 | Big-O: counting operations | State and compare growth rates of code | asymptotic notation, dominant term, best/worst/average case |

**Boss problem 1:** Two routines compute $b^n$ by multiplication alone. `SLOW` returns $b \cdot \texttt{SLOW}(b, n-1)$ with $\texttt{SLOW}(b,0)=1$. `FAST` sets $h = \texttt{FAST}(b, \lfloor n/2 \rfloor)$ and returns $h \cdot h$, times an extra $b$ when $n$ is odd. (a) Trace both call stacks for $n = 5$, giving every frame and the value it returns. (b) Count the multiplications each performs for $n = 5$, $n = 16$ and $n = 1000$. (c) Give the Big-O of each in multiplications **and** in stack depth, and state which resource `FAST` improves by more. (d) A colleague replaces `FAST`'s single recursive call with two — `return FAST(b, n/2) * FAST(b, n/2)` — arguing it is "the same thing, just clearer." Give its multiplication count for $n = 16$ and say exactly what was lost.

### Module 2: Linear structures

The workhorses that store items in a line — and the first real lesson that *how* you store data decides *how fast* you can use it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Abstract data types and interfaces | Separate what a structure does from how it's built | ADT vs implementation, interface/contract, information hiding |
| 2.2 | Arrays and dynamic arrays | Reason about indexed storage and amortized growth | contiguous memory, O(1) indexing, resizing, amortized cost |
| 2.3 | Linked lists | Trade indexing for cheap insertion via pointers | nodes & references, singly/doubly linked, insert/delete, traversal |
| 2.4 | Stacks and queues | Model LIFO and FIFO access and pick real uses | push/pop, enqueue/dequeue, array vs list backing, applications |
| 2.5 | Hash tables | Turn a key into near-constant-time lookup | hash function, buckets, collisions & chaining, load factor |

**Boss problem 2:** You must support `insert(x)`, `delete(x)`, and `contains(x)`, all needed as fast as possible, on up to a million integers with no ordering requirement. Pick a structure, give the average Big-O of each operation, and describe the one realistic input pattern that would wreck your performance and why.

### Module 3: Trees & heaps

Break out of the line: hierarchical structures that keep data sorted or prioritized while staying logarithmically cheap.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Binary trees and binary search trees | Search and insert in a BST and read its shape | tree terminology, BST property, in-order traversal, O(height) |
| 3.2 | Balanced trees: the idea | Explain why and how trees stay shallow | worst-case degeneration, rotations (intuition), the O(log n) guarantee |
| 3.3 | Heaps and priority queues | Serve highest-priority items efficiently | heap property, array-backed heap, sift up/down, priority queue ADT |

**Boss problem 3:** You insert the keys 5, 3, 8, 1, 4, 7, 9 into an initially empty BST in that order. Draw the tree and give its height. Now insert the same keys in *sorted* order — draw that tree, give its height, and use the two shapes to explain in one sentence why balancing matters.

### Module 4: Graphs, sorting, and searching

The most general structure (graphs), the operation you'll do most (sorting/searching), and a recursive problem-solving pattern (backtracking) that ties the course together.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Searching and elementary sorting | Search sorted data and sort by comparison | linear vs binary search, selection/insertion sort, the O(n log n) wall |
| 4.2 | Graphs: representations and traversal | Model a network and walk it two ways | vertices/edges, adjacency list vs matrix, BFS and DFS |
| 4.3 | Recursion revisited: backtracking | Solve a constraint puzzle by systematic search | search tree, choose/explore/un-choose, pruning dead branches |

**Boss problem 4:** Place 4 non-attacking queens on a 4×4 board. Sketch the backtracking search as a tree of partial placements (one queen per row), marking where you hit a conflict and must backtrack. State how many complete placements you rejected before finding a valid one, and name the one pruning rule that saved the most work.

## Sources of truth

- Cormen, Leiserson, Rivest & Stein, *Introduction to Algorithms* — for rigor level and Big-O conventions.
- Sedgewick & Wayne, *Algorithms* — for the ADT-first framing and data-structure exposition.
- Abelson & Sussman, *SICP* — for the recursion and decomposition sensibility.


---

*Revision note (2026-09-05):* **the three lessons the Computer Science build brief
flags as the field's weakest fit (1.1–1.3) have been re-aimed, and the overlap with
[`algorithms`](../algorithms/syllabus.md) resolved.**

The brief settles that CS here is taught *analytically* — the platform runs no code,
and drilling implementation is low-value now that an LLM writes it on demand — so
every problem must be one of six archetypes that need no execution. Lessons 1.1 and
1.3 survive that unchanged, because **hand-tracing is already one of the six**:
"predict this loop's output" and "unwind this call stack" are exactly the register
the brief asks for. Only their *checklist* phrasing needed fixing, from "write a
recursive function" to "unwind, count, and cost one".

**Lesson 1.2 genuinely fought the format** and was re-aimed. "Split a problem into
functions" is a design skill that needs code you can run to be worth anything. Its
analytical core — what a function *promises*, and how you'd know it was broken — is
archetype 4 (proof and invariant) and is the more durable half anyway, so the lesson
is now **Functions, contracts, and invariants**: preconditions, postconditions, and
the initialization / maintenance / termination structure of a loop invariant, with
problems that hand you a routine and a claimed postcondition and ask for the input
that violates it. That invariant machinery is then reused directly in 4.1 (binary
search) and 4.3 (backtracking).

**Boss problem 1 was re-aimed** for the same reason: it asked the learner to *write*
two versions of `power(b, n)`. It now supplies both and asks for the trace, the
multiplication counts at three sizes, the Big-O in **time and stack depth**, and a
judgement on a plausible-looking rewrite that silently costs an exponential factor.

Module structure and lesson count are unchanged at 15. Archetype mix as planned:
hand-trace carries Module 1 and Modules 3–4; cost derivation carries 1.4 and 2.2;
design under constraint carries 2.1, 2.5 and 3.2; counterexample construction
appears wherever a structure has a degenerate case (2.5's adversarial keys, 3.1's
sorted insertion, 4.1's adaptive best case). **Reduction and impossibility is
deliberately absent** — it has no purchase at Tier 0 and is left to
[`theory-of-computation`](../theory-of-computation/syllabus.md) and
[`algorithms`](../algorithms/syllabus.md) Module 4 rather than padded in.
