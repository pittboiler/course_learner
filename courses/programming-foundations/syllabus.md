# Programming & Data Structures — Syllabus

> Computer Science · Tier 0 · ~15 lessons · Prereqs: none · Roadmap id: `programming-foundations`

## Goal

Build the mental model of a working programmer: how a machine walks through instructions, and how the classic data structures store information so that the operations you care about are fast. You'll learn to pick the right structure for a job and defend the choice with Big-O, and you'll get a first taste of recursion and backtracking. This course deliberately skips language-specific syntax, systems programming, and clever algorithm design (that's `algorithms`) — it's the on-ramp to both.

## Dangerous Checklist

When you finish, you can:

- [ ] Trace a program by hand through variables, branches, and loops and predict its output
- [ ] Decompose a task into functions and explain what each one promises to its caller
- [ ] Write a recursive function, identify its base case, and unwind its call stack on paper
- [ ] Give the Big-O of a loop or recursive routine and say what it means as input grows
- [ ] Separate an abstract data type from its implementation and name the interface either exposes
- [ ] Choose between an array, a linked list, a stack, and a queue for a given access pattern
- [ ] Explain how a hash table turns a key into O(1) average lookup, and when it degrades
- [ ] Insert into and search a binary search tree, and say why balance controls the cost
- [ ] Use a heap to serve highest-priority items and justify its O(log n) per operation
- [ ] Represent a graph two ways and traverse it breadth-first and depth-first
- [ ] Sort by comparison and state why O(n log n) is the wall for elementary methods
- [ ] Solve a small constraint puzzle by backtracking and prune a dead branch early

## Modules

### Module 1: Programming & recursion

From a single instruction to a self-calling function — the raw machinery of computation, plus the yardstick (Big-O) we'll measure everything against.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Values, variables, and control flow | Trace straight-line, branching, and looping code by hand | values & types, assignment, `if`/`else`, `while`/`for`, boolean logic |
| 1.2 | Functions and decomposition | Split a problem into functions with clear contracts | parameters & return, scope, call/return, pre/postconditions |
| 1.3 | Recursion and the call stack | Write and unwind a recursive routine | base vs recursive case, the call stack, recursion ↔ iteration |
| 1.4 | Big-O: counting operations | State and compare growth rates of code | asymptotic notation, dominant term, best/worst/average case |

**Boss problem 1:** Write a recursive function `power(b, n)` that computes bⁿ using only multiplication, then a faster version using the identity bⁿ = (b^⌊n/2⌋)² · (b if n odd). Trace both call stacks for n = 5, and give the Big-O of each in terms of the number of multiplications.

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
