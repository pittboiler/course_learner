# Programming & Data Structures · Lesson 2.3: Linked lists

> ⏱ ~15 min · Module 2: Linear structures · Builds on: [2.2 (arrays and dynamic arrays)](02-02-arrays-and-dynamic-arrays.md) · Unlocks: 2.4 (stacks and queues)

## Why this matters

The linked list is the array's exact complement: it gives up the address formula and gets back cheap splicing. Every cost in [Lesson 2.1's](02-01-abstract-data-types-and-interfaces.md) table flips.

It is also the structure most often reached for on a half-remembered slogan — *"linked lists have $\Theta(1)$ insertion and deletion"* — which is true only with a qualifier that does most of the work: **given a reference to the node**. Given an index, a linked list is no better than an array and considerably worse in practice. Learning where that qualifier binds is the point of the lesson, and it is a genuinely useful piece of judgement rather than trivia.

The other reason it matters is structural: a node holding a value and a reference to another node is the building block for almost everything left in this course. Trees are nodes with two references ([3.1](03-01-binary-trees-and-binary-search-trees.md)), hash-table chains are linked lists ([2.5](02-05-hash-tables.md)), and adjacency lists are lists of lists ([4.2](04-02-graphs-representations-and-traversal.md)). Pointer surgery is a skill you will use for the rest of the course.

## The idea

**A node is a value plus a reference.** A singly linked list is a chain of them, plus a `head` pointing at the first; the last node's `next` is null, which is how you know you have arrived.

There is no address formula. To reach the $i$-th element you start at the head and follow $i$ links — $\Theta(i)$, and $\Theta(n)$ in the worst case. **That is not an implementation weakness; it is the price of the design.** The nodes are wherever the allocator put them, which is exactly what frees you from shifting.

**Splicing is three writes and no movement.** To insert `x` after node `b`:

```
x.next <- b.next
b.next <- x
```

Two assignments, $\Theta(1)$, regardless of how long the list is or where in it you are. Nothing else moves, because nothing else *has* a position that depends on where you are.

**Deletion needs the predecessor.** To remove node `c` you must set `b.next ← c.next`, and `b` is the node *before* `c`. A singly linked list gives you no way to walk backwards, so if all you hold is `c`, you must find `b` by scanning from the head — $\Theta(n)$. A **doubly linked** list adds a `prev` reference to every node, which makes deletion genuinely $\Theta(1)$ from a bare node reference, at the cost of one more pointer per node and one more thing to keep consistent.

**Where the qualifier binds.** Say it precisely:

- "Insert after a node I hold": $\Theta(1)$.
- "Insert at index $i$": $\Theta(i)$ to walk there, then $\Theta(1)$ — so $\Theta(n)$ overall, the same class as the array.
- "Delete a node I hold": $\Theta(1)$ doubly, $\Theta(n)$ singly.
- "Delete at index $i$": $\Theta(n)$ either way.

**Half the operations are only fast if you were already standing in the right place**, and you were only standing there because you were iterating. That is the real access pattern linked lists serve.

## The formal version

**Representation invariant.** Following `next` from `head` reaches exactly `size` nodes and then null; no node is reachable twice (the list is acyclic); if doubly linked, `p.next.prev = p` for every non-final `p`. Every operation may break these mid-flight and must restore them before returning — [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) discipline again.

**Operations, singly linked.**

```
INSERT-AFTER(b, x):        DELETE-AFTER(b):           GET(i):
    x.next <- b.next           b.next <- b.next.next      p <- head
    b.next <- x                size <- size - 1           repeat i times:  p <- p.next
    size <- size + 1                                      return p.value
```

**Cost vector, and the qualifier made explicit.**

| operation | singly linked | doubly linked | array |
|---|---|---|---|
| `get(i)` | $\Theta(i)$ | $\Theta(\min(i, n-i))$ | $\Theta(1)$ |
| insert at front | $\Theta(1)$ | $\Theta(1)$ | $\Theta(n)$ |
| insert at back | $\Theta(1)$ with a tail pointer | $\Theta(1)$ with a tail | $\Theta(1)$ amortized |
| **insert after a held node** | $\Theta(1)$ | $\Theta(1)$ | $\Theta(n)$ |
| **delete a held node** | $\Theta(n)$ — needs the predecessor | $\Theta(1)$ | $\Theta(n)$ |
| delete at back | $\Theta(n)$ | $\Theta(1)$ with a tail | $\Theta(1)$ |
| search for a value | $\Theta(n)$ | $\Theta(n)$ | $\Theta(n)$ |
| memory per element | value + 1 pointer | value + 2 pointers | value |

**The [sentinel trick](../reference.md#linked-list).** Insertion and deletion at the *head* are special cases — there is no predecessor to rewire, so the code needs an `if head == null` branch, and forgetting it is the classic linked-list bug. A **dummy head node** that holds no value removes the special case entirely: every real node now has a predecessor, and one code path handles all positions. This is worth doing every time; the cost is one node and the benefit is deleting a branch that is easy to get wrong and hard to test.

**Memory, which the table understates.** A singly linked list of 4-byte integers with 8-byte pointers spends **twice as much on bookkeeping as on data**, and scatters it: a scan touches a fresh cache line per element, where an array fits sixteen elements in one. The measured gap on a linear traversal is routinely 5–10×, and it is entirely invisible in the $\Theta(n)$ both structures share — a live instance of [Lesson 1.4's](01-04-big-o-counting-operations.md) warning about what asymptotics discard.

## Picture

![Two diagrams. The upper one shows three nodes labelled b, c and d in a row, each a rectangle split into a value cell and a pointer cell, with arrows running b to c and c to d. A new node x is drawn below between b and c, in blue, with two blue arrows: one from b's pointer down into x, and one from x's pointer up into c. The caption reads: first x.next takes b.next, then b.next takes x — Theta of one, two writes and no shifting. The lower diagram shows the same three nodes with the b-to-c and c-to-d arrows dashed and node c outlined in red, and a single blue arc running from b directly over c to d, labelled b.next takes c.next. A caption notes that to unlink c you need b, and a singly linked list gives no way back.](assets/02-03-fig1.svg)

**The upper half is why linked lists exist.** Two pointer writes and the new element is in place. Compare the array: inserting into the middle of a million-element array moves half a million elements; inserting into the middle of a linked list moves nothing, ever, regardless of $n$.

**The order of the two writes is not optional.** `x.next ← b.next` must come first. Do `b.next ← x` first and you have overwritten the only reference to `c`, losing the entire rest of the list — a leak in a manual-memory language, and an unrecoverable corruption in any. Pointer surgery is a sequence of assignments where the ordering is load-bearing, and tracing it on paper before writing it is the habit worth forming.

**The lower half is where the slogan breaks.** Deleting `c` rewires *`b`*, not `c`. So the operation everyone calls "$\Theta(1)$ deletion" needs a node you were not given, and in a singly linked list finding it means walking from the head. The blue arc is drawn *from b* precisely to make that visible.

Note what has and has not happened to `c` after the splice: it is no longer reachable from `head`, but `c.next` still points at `d`. If anyone else holds a reference to `c` they can still traverse the rest of the list through a node that is officially deleted — an aliasing hazard of exactly the kind [Lesson 1.2](01-02-functions-contracts-and-invariants.md) flagged. Careful implementations null out `c.next` on the way out.

## Worked examples

**Example 1 (mechanical): trace the surgery.** A list `head → 3 → 7 → 9 → null`. Perform, in order: insert 5 after the node holding 3; delete the node holding 7.

*Insert 5 after node(3).* Let `b` = node(3), `x` = new node(5).

| step | write | list after |
|---|---|---|
| 1 | `x.next ← b.next` (so `x.next` = node(7)) | `head → 3 → 7 → 9`, with `5 → 7` dangling |
| 2 | `b.next ← x` | `head → 3 → 5 → 7 → 9 → null` ✓ |

*Delete node(7).* Its predecessor is node(5), found by walking `head → 3 → 5` and checking `5.next == node(7)`.

| step | write | list after |
|---|---|---|
| 1 | `p ← head`, walk until `p.next` is node(7) | `p` = node(5), after 2 link-follows |
| 2 | `p.next ← p.next.next` | `head → 3 → 5 → 9 → null` ✓ |

**The insert cost 2 writes and 0 traversals; the delete cost 1 write and 2 traversals.** In a list of a million nodes the insert is unchanged and the delete becomes half a million traversals. Same structure, same slogan, three orders of magnitude apart.

**Example 2 (why you'd care): the loop that made it quadratic.** A service holds $10^5$ events in a singly linked list and reports them:

```
for i in 0 .. size-1:
    emit(list.get(i))
```

Each `get(i)` restarts at the head and walks $i$ links, so the total is

$$\sum_{i=0}^{n-1} i \;=\; \frac{n(n-1)}{2} \;\approx\; 5\times10^9 \text{ link-follows,}$$

seconds of work for a report that touches each element once. Against an array the same loop is $10^5$ operations.

The fix is not to change the structure — it is to stop asking the wrong question:

```
p <- head
while p != null:
    emit(p.value)
    p <- p.next
```

$\Theta(n) = 10^5$ link-follows, a factor of 50,000, **on the same data structure.** The indexed loop threw away its position after every element and started over; the iterator kept it.

This is the practical content of the lesson. `get(i)` is available on a linked list, is correct, and is a trap — and a loop written against the *sequence* abstraction rather than the *indexed* one is cheap under both implementations. When a language gives you a `for x in list` form, that is what it is for.

## Watch out

- **You might think** linked lists have $\Theta(1)$ insertion and deletion — **but actually** that holds *given a reference to the relevant node*. By index, both are $\Theta(n)$, exactly like an array.
- **You might think** holding the node you want to delete is enough — **but actually** in a singly linked list you need its **predecessor**, so it is $\Theta(n)$. Only a doubly linked list makes it $\Theta(1)$.
- **You might think** the order of pointer writes is cosmetic — **but actually** `b.next ← x` before `x.next ← b.next` discards the rest of the list. Write the new node's links first, then rewire the old ones.
- **You might think** a `for i` loop over a linked list is linear — **but actually** it is $\Theta(n^2)$, because each `get(i)` restarts at the head. Iterate with a cursor.
- **You might think** the memory overhead is one pointer — **but actually** it is one or two pointers *plus* the loss of locality, which costs 5–10× on a scan and appears in no complexity class.
- **You might think** head insertion and middle insertion are the same code — **but actually** the head has no predecessor, and the missing `if` is the standard bug. Use a dummy head node and the special case disappears.

## One-liner

> Give up the address formula and splicing becomes free — but only where you are already standing, which is why the honest cost of a linked list is written "$\Theta(1)$ *given a reference to the node*".

## Problems

**P1 (🟢)** A singly linked list: `head → 4 → 8 → 15 → 16 → null`.

(a) Give the exact sequence of pointer writes to insert 11 between 8 and 15, and the number of link-follows needed to get there from `head`. (b) Same for deleting the node holding 15. (c) How many link-follows does `get(3)` require? (d) The list is extended to $n$ nodes. Give the cost of "insert after the node I am currently visiting" and of "insert at index $n/2$", and say why they differ.

**P2 (🟡)** A queue of pending jobs is a singly linked list with a `head` pointer only. Jobs are added at the back and taken from the front.

(a) Give the cost of enqueue (add at back) and dequeue (remove from front). (b) The team adds a `tail` pointer. Give the new costs. (c) They then need "remove the *last* job" for a cancel feature. Give its cost with a tail pointer, and explain why the tail pointer does not help. (d) State the smallest change that makes all three operations $\Theta(1)$, and give its memory cost per node.

**P3 (🔴)** A team stores a document's paragraphs in a doubly linked list so that inserting and deleting mid-document is cheap. The editor also renders the document by iterating from the start. Profiling on a 50,000-paragraph document shows rendering is 8× slower than the array-backed version it replaced, despite both being $\Theta(n)$.

(a) Explain the 8×, given that both are $\Theta(n)$. (b) The team proposes switching back to an array. Give the cost of their edit workload — 200 mid-document insertions per session — under both structures, and say whether the switch is justified. (c) Give a structure that is fast for both, and its costs for render and for mid-document insert. (d) A colleague argues the profiling is misleading because "$\Theta(n)$ is $\Theta(n)$ — the 8× is a constant and will not matter as documents grow." Evaluate this precisely.

<details>
<summary>Solutions</summary>

**P1** (a) Walk `head → 4 → 8`: **1 link-follow** to reach the node holding 8 (call it `b`). Then with `x` = new node(11):

$$\texttt{x.next} \leftarrow \texttt{b.next} \quad(\text{so } x \to 15), \qquad \texttt{b.next} \leftarrow \texttt{x}.$$

**Two writes**, in that order. Result: `head → 4 → 8 → 11 → 15 → 16 → null`.

(b) To delete node(15) we need its predecessor, node(11) after the insertion above (or node(8) in the original list). Walking from `head`: `4 → 8 → 11` is **2 link-follows** in the extended list. Then

$$\texttt{p.next} \leftarrow \texttt{p.next.next}$$

— **one write**. Result: `head → 4 → 8 → 11 → 16 → null`.

(c) `get(3)` starts at `head` (the node holding 4, index 0) and follows `next` three times: **3 link-follows**, reaching index 3.

(d)

| operation | cost | why |
|---|---|---|
| insert after the node I am visiting | $\Theta(1)$ | I already hold the predecessor; two writes, no walking |
| insert at index $n/2$ | $\Theta(n)$ | $n/2$ link-follows to find the predecessor, then two writes |

**They differ only in how the position is specified.** The splice itself is identical and constant-time in both; the whole difference is whether finding the spot costs anything. A linked list has no way to convert an index into a node except by walking, so any index-addressed operation inherits $\Theta(n)$ — which is why the honest statement of a linked list's advantage always contains the phrase "given a reference".

**P2** (a) With only a `head`:

- **Dequeue** (remove from front): $\Theta(1)$ — `head ← head.next`.
- **Enqueue** (add at back): $\Theta(n)$ — walk the whole list to find the last node, then splice.

(b) With a `tail` pointer as well:

- **Enqueue:** $\Theta(1)$ — `tail.next ← x; tail ← x`.
- **Dequeue:** $\Theta(1)$, unchanged. (One care: when the last element is removed, `tail` must be reset to null along with `head`, or it dangles at a freed node — a classic bug.)

Both operations constant time, which is what makes a singly linked list with a tail pointer a perfectly good queue.

(c) **Removing the last job is $\Theta(n)$ even with a tail pointer.**

The tail pointer tells you *where* the last node is, instantly. But deleting it requires setting `secondlast.next ← null` and updating `tail ← secondlast` — and finding the second-to-last node means walking the entire list from `head`, because a singly linked node has no reference to its predecessor.

This is the lesson's core qualifier in its sharpest form: **knowing where a node is does not help you delete it in a singly linked list.** The tail pointer solves the *finding* problem and the deletion problem is a *predecessor* problem.

(d) **Make the list doubly linked** — add a `prev` reference to each node. Then:

| operation | cost |
|---|---|
| enqueue at back | $\Theta(1)$ (`tail.next ← x; x.prev ← tail; tail ← x`) |
| dequeue at front | $\Theta(1)$ |
| remove at back | $\Theta(1)$ (`tail ← tail.prev; tail.next ← null`) |

**Memory cost: one extra pointer per node** — 8 bytes on a 64-bit machine, so a list of 4-byte job ids goes from 12 bytes per node to 20, a 67% increase in overhead for a structure that was already spending more on pointers than on data.

(The structure this produces — insert and remove at both ends in $\Theta(1)$ — is a **deque**, and it is exactly what [Lesson 2.4](02-04-stacks-and-queues.md) builds. A ring buffer over an array gives the same four operations in $\Theta(1)$ with no pointer overhead and good locality, which is why real deques are usually array-backed.)

**P3** (a) **Because $\Theta(n)$ counts operations, not time per operation, and the two structures pay very different prices per element.**

Three compounding effects:

1. **Cache locality.** An array of paragraph references is contiguous, so one 64-byte cache line fetch delivers 8 consecutive references and the hardware prefetcher predicts the next fetch perfectly. Linked nodes are wherever the allocator put them, so each `p ← p.next` is a fresh cache line — and, if the nodes were allocated over time and interleaved with other objects, likely a cache *miss*. A miss to main memory is roughly 100× the cost of an L1 hit.
2. **Pointer chasing is serial.** The address of the next node is not known until the current one is loaded, so the processor cannot issue the loads in parallel or prefetch ahead. Array traversal has no such dependency and can run many loads in flight.
3. **Memory footprint.** With `prev` and `next` at 8 bytes each plus a value reference, the doubly linked version touches 2–3× as many bytes for the same 50,000 paragraphs, so proportionally less of the document fits in cache.

An 8× gap on a pure traversal is entirely typical and is the standard reason experienced engineers are reluctant to reach for linked lists.

(b) Per session: 200 mid-document insertions, 50,000 paragraphs.

| | render (per render) | 200 mid-document inserts |
|---|---|---|
| array | $5\times10^4$, fast constant | $200 \times 2.5\times10^4 = 5\times10^6$ element moves |
| doubly linked | $5\times10^4$, 8× constant | $200 \times 2.5\times10^4 = 5\times10^6$ **link-follows** to locate, then $\Theta(1)$ splices |

**The switch is not justified, and the reason is that the linked list is not actually winning the edit workload either.** Both structures cost $\Theta(n)$ per mid-document insertion — the array because it shifts, the linked list because it must *walk* to the insertion point from the head. The splice being free is irrelevant when finding the spot is not.

So the array loses nothing on edits (identical class, and shifting contiguous memory is fast per element) and wins 8× on every render. Reverting is defensible; the team's mistake was adopting the linked list on the strength of "$\Theta(1)$ insertion" without checking how the insertion point would be located.

*Caveat worth stating:* if the editor holds a **cursor** — a live reference to the current paragraph node — then insertions near the cursor really are $\Theta(1)$ on the linked list and $\Theta(n)$ on the array, and the analysis flips. Whether the application maintains such a cursor is the question that should have been asked first.

(c) **A gap buffer or a piece table** — or, most simply here, an array of paragraph references with a gap maintained at the cursor:

| operation | cost |
|---|---|
| render (full traversal) | $\Theta(n)$ with array locality — the fast constant |
| insert at the cursor | $\Theta(1)$ amortized |
| move the cursor by $d$ | $\Theta(d)$ |

This wins because it is priced against *how far the cursor moved*, not against document length, and editing is overwhelmingly local. Both of the other structures priced everything against $n$.

(For a document that also needs cheap arbitrary jumps and undo, a **rope** — a balanced tree of chunks — gives $\Theta(\log n)$ insert and $\Theta(n)$ render with reasonable locality, at the cost of real implementation complexity.)

(d) **The colleague is asymptotically correct and practically wrong, and it is worth separating the two claims.**

*Where they are right:* 8× is a constant factor, it does not appear in $\Theta$, and it will not grow as documents grow. If the choice were between $\Theta(n)$ with an 8× constant and $\Theta(n^2)$, the constant would indeed be irrelevant at scale.

*Where they are wrong:* the choice here is between two $\Theta(n)$ options, and **when the classes are equal the constant is the entire decision.** Saying "the 8× will not matter as documents grow" inverts the situation — it will matter *exactly as much* at every size, forever, because it scales identically. It is a permanent 8× tax with no size at which it amortizes away.

There is also a threshold argument they have missed. Rendering has a latency budget: below roughly 16 ms a frame feels instant, above ~100 ms it feels sluggish. A constant factor that moves a 10 ms render to 80 ms crosses a perceptual boundary, and no asymptotic reasoning can see that boundary because it lives entirely in the constants. **Asymptotics tell you which algorithm to choose; constants tell you whether the chosen one is usable** — precisely [Lesson 1.4's](01-04-big-o-counting-operations.md) point that Big-O is a summary, and this is a case where the summary has discarded the deciding information.

</details>

## Flashback

**From Lesson 2.1 (Abstract data types and interfaces):** A `List` ADT offers `get(i)`, `insert(i, x)`, `remove(i)`, `size()`.

(a) Give the cost of each under an array-backed implementation. (b) A caller does $10^5$ `get(i)` calls and no mutation. Which implementation, and what is the cost of the wrong choice? (c) What does the ADT guarantee when you swap implementations, and what does it not? (d) A caller reaches into the backing array directly for speed. What has been lost?

<details>
<summary>Solution</summary>

(a) Array-backed `List`: `get(i)` is $\Theta(1)$ (address arithmetic); `insert(i, x)` and `remove(i)` are $\Theta(n - i)$, so $\Theta(n)$ in general, because the elements after position $i$ must shift; `size()` is $\Theta(1)$ from a stored counter.

(b) **The array**, decisively. It costs $10^5$ operations. A linked list costs $\sum_{i<n} i = n(n-1)/2 \approx 5\times10^9$ link-follows for the same loop — a factor of about **50,000**, seconds against microseconds.

(c) Swapping implementations preserves **correctness**: every caller written against the four operations gets the same answers, because both implementations satisfy the same contracts. It preserves nothing about **performance** — the cost vectors differ by a factor of $n$ on two of the four operations, so a swap that keeps every test passing can make the program unusable.

(d) **Substitutability** — the one thing the ADT was providing. A caller that indexes the backing array is welded to the array implementation: the swap that was supposed to be a one-line change now requires finding and rewriting every such caller, and the compiler will not find them for you if the field is public. The speed gained is a few nanoseconds per access; the cost is that the abstraction boundary no longer exists.

</details>

## Connections

- **Backward:** this is the mirror image of [Lesson 2.2](02-02-arrays-and-dynamic-arrays.md) — give up contiguity, lose $\Theta(1)$ indexing, gain $\Theta(1)$ splicing — and it fills the second column of [Lesson 2.1's](02-01-abstract-data-types-and-interfaces.md) cost table. The ordering-sensitive pointer writes are [Lesson 1.1's](01-01-values-variables-and-control-flow.md) tracing discipline applied to references, and the dangling-`c` hazard is [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) aliasing.
- **Forward:** [2.4](02-04-stacks-and-queues.md) narrows the interface to LIFO and FIFO, at which point *both* backings are $\Theta(1)$ and the choice becomes purely about constants. [2.5](02-05-hash-tables.md) uses a linked list per bucket for collision chains. From [3.1](03-01-binary-trees-and-binary-search-trees.md) on, every structure is nodes-with-references — a tree is a node with *two* `next` pointers — so this lesson's surgery is the prerequisite for all of Module 3.
- **Sideways:** the memory-hierarchy reasons a pointer chase costs 5–10× more than a contiguous scan are [`computer-architecture`](../../computer-architecture/syllabus.md)'s; the aliasing and ownership questions raised by "who else holds a reference to this node?" are what [`programming-languages`](../../programming-languages/syllabus.md) formalizes with linear types and borrow checking.
