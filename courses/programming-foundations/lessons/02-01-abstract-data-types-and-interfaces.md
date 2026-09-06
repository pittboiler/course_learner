# Programming & Data Structures · Lesson 2.1: Abstract data types and interfaces

> ⏱ ~15 min · Module 2: Linear structures · Builds on: [1.4 (Big-O: counting operations)](01-04-big-o-counting-operations.md) · Unlocks: 2.2 (arrays and dynamic arrays)

## Why this matters

Module 1 was about code. Module 2 is about **data**, and it opens with the distinction that organizes everything after it: the difference between *what* a structure does and *how* it is built.

That distinction is worth more than it sounds. It is why you can be handed "a list" and reason about your program's correctness without knowing whether it is an array or a chain of nodes — and it is also why your program can be correct and unusably slow, because the choice you were shielded from is precisely the one that decides the cost. Every remaining lesson in this course is a variation on the same exercise: here is an interface, here are two ways to implement it, here is the cost vector of each, now choose.

The judgement content is **reading a cost vector**. Not "which structure is fastest" — no structure is fastest — but "which operations does my workload actually perform, and which structure is cheap on *those*?" That question has a defensible answer; the other one does not.

## The idea

**An [abstract data type](../reference.md#abstract-data-type-adt) is a set of operations plus their contracts.** It says what you can ask for and what you get back. It says nothing about memory.

```
List ADT
    get(i)          -> the element at position i
    insert(i, x)    -> put x at position i, shifting the rest right
    remove(i)       -> delete the element at position i
    size()          -> how many elements
```

Those four lines are a complete specification of behaviour, and two implementations satisfying them are **interchangeable without changing any caller's correctness**. That is the guarantee, and it is a real one.

**An implementation is a data layout plus algorithms.** A list backed by a contiguous array computes `get(i)` with one multiply-and-add. A list backed by a chain of nodes has to walk $i$ links. Both honour the contract. One is $\Theta(1)$ and the other is $\Theta(n)$.

So the ADT buys you **substitutability**, and the price is that it hides the thing you most need to know. That is not a flaw in the idea — it is the trade. The resolution is to publish the **cost vector** alongside the interface: not just what each operation does, but what each one costs in this particular implementation. A structure is chosen by matching that vector against the operation *mix* your program performs.

**Information hiding** is the discipline that makes it work. A caller that only ever touches the four operations above can be handed either implementation. A caller that reaches inside — indexing the backing array directly, or following a `.next` pointer — has silently welded itself to one, and the swap that was supposed to be free becomes a refactor.

## The formal version

**Definition.** An **abstract data type** is a set of values together with a set of operations, each specified by a precondition and a postcondition ([Lesson 1.2](01-02-functions-contracts-and-invariants.md)). An **implementation** is a concrete representation plus procedures realizing each operation, together with a **representation invariant** — the property that makes an instance valid.

**Two implementations of `List`.**

| operation | array-backed | linked-list-backed |
|---|---|---|
| `get(i)` | $\Theta(1)$ | $\Theta(n)$ |
| `insert(0, x)` (front) | $\Theta(n)$ | $\Theta(1)$ |
| `insert(size, x)` (back) | $\Theta(1)$ amortized | $\Theta(1)$ with a tail pointer |
| `insert(i, x)` (middle) | $\Theta(n)$ | $\Theta(n)$ to find, $\Theta(1)$ to splice |
| `remove(i)` | $\Theta(n)$ | $\Theta(n)$ to find, $\Theta(1)$ to unlink |
| `size()` | $\Theta(1)$ | $\Theta(1)$ with a counter |
| memory per element | 1 slot | 1 slot + 1–2 pointers |
| memory locality | contiguous, cache-friendly | scattered, pointer-chasing |

**Read the table as a shape, not a list of numbers.** The array is fast where position arithmetic helps and slow where things must shift. The linked list is the mirror image: no arithmetic, so no cheap indexing, but no shifting either. **Neither dominates**, which is exactly why both exist.

**The [representation invariant](../reference.md#representation-invariant).** For the array-backed list: `0 ≤ size ≤ capacity`, and `data[0..size−1]` hold the elements in order while `data[size..capacity−1]` are garbage. For the linked version: following `next` from the head reaches exactly `size` nodes and terminates. Every operation may break its invariant in the middle and must restore it before returning — that is the contract each implementation makes with itself, and it is the same shape as [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) loop invariant, hoisted to the level of a type.

**Choosing.** Write down your workload as counts, multiply by the cost vector, compare. If a program does $q$ random reads and $u$ front-insertions:

$$\text{array: } \Theta(q + un), \qquad \text{linked: } \Theta(qn + u).$$

The array wins when $q$ dominates, the list when $u$ does. **That is a calculation, not a preference.**

## Picture

![A blue box in the centre labelled List, the ADT, listing four operations: get of i, insert of i and x, remove of i, and size. It is captioned what it promises. Two arrows lead down to two cost tables. The left, backed by an array, shows get of i at Theta of one, insert at front Theta of n, insert at back Theta of one amortized, remove of i Theta of n, and memory one slot per item. The right, backed by a linked list, shows get of i at Theta of n, insert at front Theta of one, insert at back Theta of one with a tail, remove of i Theta of n to find and Theta of one to unlink, and memory one slot plus one pointer.](assets/02-01-fig1.svg)

**The box at the top is the part your callers see; the two tables are the part that decides whether your program finishes.**

Look at the two `get(i)` rows and the two `insert at front` rows. They are exact opposites — $\Theta(1)$ against $\Theta(n)$, then $\Theta(n)$ against $\Theta(1)$ — and that inversion is the whole lesson. There is no row where one implementation is better at everything, and there could not be: the array's speed comes from contiguity, and contiguity is exactly what makes insertion expensive.

**The "remove(i)" row is the one people misread.** The linked list is often described as having $\Theta(1)$ deletion, and the table says $\Theta(n)$ to find plus $\Theta(1)$ to unlink. Both are true, and which one you get depends on whether you already hold a reference to the node. If you are *iterating* and delete as you go, you are in the $\Theta(1)$ case. If you are given an index, you are in the $\Theta(n)$ case, and the linked list has no advantage at all over the array. **A cost claim about a data structure is only meaningful with the access pattern attached** — that qualifier is developed properly in [Lesson 2.3](02-03-linked-lists.md).

**The memory rows are not a footnote.** A linked list of 32-bit integers with 64-bit pointers spends *twice* as much memory on bookkeeping as on data, and scatters it, so a scan touches a new cache line per element instead of sixteen elements per line. That is a constant factor of roughly an order of magnitude, and it is invisible in every $\Theta$ in the table — a live instance of [Lesson 1.4's](01-04-big-o-counting-operations.md) warning about what asymptotics discard.

## Worked examples

**Example 1 (mechanical): match the workload to the vector.** Three programs, all using a `List` of $n = 10^5$ elements. Which implementation, and why?

| program | operation mix | choice |
|---|---|---|
| (a) render a table: read every element by index, once per frame | $10^5$ `get(i)`, no mutation | **array** |
| (b) an undo log: append at the end, remove from the end | $10^5$ back-insert, $10^5$ back-remove | **array** |
| (c) a scheduler queue: append at the end, remove from the *front* | $10^5$ back-insert, $10^5$ front-remove | **linked** |

The counts make it concrete. In (a), the array does $10^5$ operations and the linked list does $\sum_i i \approx 5\times10^9$ — a factor of 50,000. In (c), the array's front-removals cost $\Theta(n)$ each for $5\times10^9$ total, while the linked list does $2\times10^5$.

**The same two structures, and the winner flips entirely between (a) and (c).** Nothing about the structures changed; the workload did.

(Case (b) is worth a note: a linked list handles it fine *if* it keeps a tail pointer and is doubly linked, and badly otherwise — removing the last node of a singly linked list requires finding its predecessor, which is $\Theta(n)$. The right structure for (b) is a stack, and for (c) a queue: [Lesson 2.4](02-04-stacks-and-queues.md).)

**Example 2 (why you'd care): the interface protected the caller and hid the bill.** A reporting service is written against a `List` interface and works fine in testing with a few hundred rows. In production it handles 50,000 and takes minutes.

The code is unchanged and still correct — that is the ADT doing its job. What happened is that the implementation behind the interface was a linked list, and the report does random access:

```
for i in 0 .. n-1:
    emit(rows.get(i))
```

Against an array that loop is $\Theta(n)$. Against a linked list, each `get(i)` walks $i$ links, so the total is $\sum_{i} i = n(n-1)/2 \approx 1.25\times10^9$ link traversals at $n = 50{,}000$ — seconds to minutes, exactly as reported.

Two fixes, and the choice between them is the lesson:

| fix | cost | when |
|---|---|---|
| swap the implementation to an array | $\Theta(n)$; no caller changes | the workload is genuinely index-heavy |
| iterate instead of indexing (`for x in rows`) | $\Theta(n)$; one caller changes | the report never needed indices |

The second is better here, and it points at something the first misses: **the loop was written against the wrong abstraction.** Asking a sequence for element $i$ when you mean "each element in turn" is a request the interface honours at a price it does not advertise. This is why languages provide iterators — an iterator is a *narrower* interface whose contract is cheap in both implementations, and narrowing the interface is often the real fix.

## Watch out

- **You might think** an ADT tells you what an operation costs — **but actually** it deliberately does not; it tells you what the operation *means*. The cost lives in the implementation, and if nobody publishes it, callers will assume $\Theta(1)$ and be wrong.
- **You might think** one structure is "the fast one" — **but actually** the cost vectors cross. The array beats the list on indexing by a factor of $n$ and loses on front-insertion by the same factor.
- **You might think** substitutability means you can swap implementations freely — **but actually** it preserves *correctness*, not performance. The swap that keeps every test green can multiply your runtime by $n$.
- **You might think** reaching inside the implementation for speed is a fair trade — **but actually** it silently deletes the substitutability you were paying for, and the coupling surfaces years later when someone tries the swap.
- **You might think** $\Theta(1)$ deletion is a property of linked lists — **but actually** it is a property of *holding a reference to the node*. Given an index, deletion is $\Theta(n)$ and the linked list has no edge.
- **You might think** the memory column is a detail — **but actually** pointer overhead plus poor locality is routinely a 10× constant on scans, which is invisible in $\Theta$ and very visible in a profiler.

## One-liner

> The interface says what you may ask; the cost vector says what each question costs — and choosing a structure is matching that vector against the questions your program actually asks.

## Problems

**P1 (🟢)** A `Set` ADT offers `add(x)`, `contains(x)`, `remove(x)`, `size()`. Consider two implementations: an **unsorted array** and a **sorted array**.

(a) Give the cost of each of the four operations, for both implementations. (b) Which is better for a program that does many `contains` and few `add`? (c) Which is better for a program that does many `add` and few `contains`? (d) A colleague says "sorted is strictly better, since binary search beats scanning." Respond.

**P2 (🟡)** A text editor stores the document as a `List` of characters. Profiling shows the dominant operations are: cursor movement (read the character at a position), and typing (insert at the cursor).

(a) Give the cost of a $10^6$-character document under an array-backed list and a linked one, for a session of $10^4$ keystrokes at random positions. (b) Neither is good. Say what is wrong with each. (c) Real editors use a **gap buffer**: an array with a block of spare space kept at the cursor. Give the cost of inserting at the cursor and of moving the cursor by $d$ positions. (d) Explain why the gap buffer beats both, in terms of the *actual* access pattern rather than the worst case.

**P3 (🔴)** A team exposes a `Timeline` ADT for a social feed: `append(post)`, `get(i)`, `remove(i)`, `size()`. It is backed by an array. A new feature needs "remove the oldest $k$ posts" run nightly.

(a) They implement it as $k$ calls to `remove(0)`. Give the cost in terms of $n$ and $k$, and the operation count at $n = 10^7$, $k = 10^5$. (b) Give a $\Theta(n)$ implementation of the same bulk operation, and say why it is not expressible through the existing four-operation interface. (c) They propose adding `removeFirst(k)` to the ADT. State what this costs them in terms of the abstraction, and what it buys. (d) A colleague instead proposes swapping the backing store to a linked list, since "removing from the front is $\Theta(1)$ there." Evaluate this against the *whole* operation mix, given that the feed also serves $10^8$ `get(i)` calls a day.

<details>
<summary>Solutions</summary>

**P1** (a)

| operation | unsorted array | sorted array |
|---|---|---|
| `contains(x)` | $\Theta(n)$ — linear scan | $\Theta(\log n)$ — binary search |
| `add(x)` | $\Theta(n)$ to check for a duplicate, then $\Theta(1)$ to append | $\Theta(\log n)$ to find the position, then $\Theta(n)$ to shift |
| `remove(x)` | $\Theta(n)$ to find, $\Theta(1)$ to remove (swap in the last element) | $\Theta(\log n)$ to find, $\Theta(n)$ to close the gap |
| `size()` | $\Theta(1)$ | $\Theta(1)$ |

The row worth care is `add` on the unsorted array: it is $\Theta(n)$ *because a set must reject duplicates*, so the append itself is cheap but the check is not. Drop the duplicate requirement and it becomes $\Theta(1)$.

(b) **Sorted**, clearly. With $q$ lookups and $u$ additions the totals are $\Theta(q\log n + un)$ against the unsorted $\Theta(qn + un)$, and when $q \gg u$ the first term dominates: $\log n$ versus $n$.

(c) **Unsorted.** Both are $\Theta(n)$ per `add`, but the constants differ enormously — the unsorted version does a scan that can stop early on a hit and touches memory sequentially, while the sorted version always shifts an average of $n/2$ elements, which is a write per element rather than a read.

Sharper: if the caller can guarantee no duplicates (so `add` skips the check), the unsorted array's `add` drops to $\Theta(1)$ amortized while the sorted array's stays $\Theta(n)$ — a change of class.

(d) **They are conflating one operation with the workload.** Binary search does beat scanning, decisively, and if `contains` were the only operation the claim would be right. But sorting is a property the structure must *maintain*, and the maintenance is paid on every `add` and `remove`: keeping the array sorted costs $\Theta(n)$ per insertion forever, in exchange for $\Theta(\log n)$ lookups.

So the comparison is $q\log n + un$ against $qn + un$, and the sorted version wins only when lookups outnumber mutations by enough to pay for the shifting. Concretely at $n = 10^6$: sorted costs $20q + 10^6 u$, unsorted costs $10^6 q + 10^6 u$, so sorted wins whenever $q > 0$ — but that ignores constants, and with $u$ comparable to $q$ the $10^6 u$ term dominates both and the choice barely matters. **The right answer is neither: a hash set does `contains` and `add` in $\Theta(1)$ expected time** ([Lesson 2.5](02-05-hash-tables.md)), which is what you actually reach for when the set does not need to be ordered.

**P2** (a) $n = 10^6$, $10^4$ keystrokes at random positions. Each keystroke is one `get` (to read at the cursor) plus one `insert`.

| | `get(i)` | `insert(i, x)` | total for $10^4$ keystrokes |
|---|---|---|---|
| array | $\Theta(1)$ | $\Theta(n)$ — shift on average $n/2$ | $\approx 10^4 \times 5\times10^5 = 5\times10^9$ |
| linked | $\Theta(n)$ — walk $i$ links | $\Theta(1)$ once positioned | $\approx 10^4 \times 5\times10^5 = 5\times10^9$ |

Both about $5\times10^9$ operations — **seconds per session**, in a program that must respond in milliseconds.

(b) Each is bad at exactly the thing the other is good at, and the workload needs both.

- The **array** indexes instantly but must move half the document on every keystroke. Typing a character in a novel copies half a megabyte.
- The **linked list** splices instantly but must walk from the head to find the cursor. Every keystroke re-traverses half the document to reach a position it was already at a moment ago.

The linked list's failure is the more galling one, because *the information was not lost* — the cursor barely moved between keystrokes, and the structure threw away its position and started over.

(c) A **gap buffer** stores the text in one array with a block of unused slots (the gap) sitting exactly at the cursor:

```
[ t h e   q u i c k | _ _ _ _ _ _ _ | b r o w n   f o x ]
                    ^ gap, at the cursor
```

- **Insert at the cursor:** write one character into the first free slot and shrink the gap by one. $\Theta(1)$.
- **Delete at the cursor:** grow the gap by one. $\Theta(1)$.
- **Move the cursor by $d$:** copy $d$ characters across the gap from one side to the other. $\Theta(d)$.
- (When the gap fills, reallocate and re-centre it: $\Theta(n)$, amortized down by growing the gap geometrically — exactly [Lesson 2.2](02-02-arrays-and-dynamic-arrays.md)'s doubling argument.)

(d) **Because editing is overwhelmingly local, and the gap buffer charges for distance moved rather than for document size.**

The array and linked list are both priced against $n$, the document length. The gap buffer is priced against $d$, how far the cursor travelled — and in real typing $d$ is 0 or 1 almost always. A session of $10^4$ keystrokes typed consecutively costs $\Theta(10^4)$ in a gap buffer against $5\times10^9$ in either of the others, a factor of half a million.

The general move is worth naming: **the worst case ($d = n$, jumping to the far end) is unchanged, but the worst case is not the workload.** The gap buffer is a structure designed around a *measured* access pattern rather than around a theoretical bound — which is only a legitimate move when you can state the pattern and say what happens when it does not hold. Here it degrades gracefully: a big cursor jump costs $\Theta(d)$ once, and then locality resumes.

(Real editors go further — a **piece table** or a **rope** makes even the big jump cheap — but the gap buffer is the one that earns its complexity most obviously.)

**P3** (a) Each `remove(0)` shifts every remaining element down one, costing $\Theta(n)$. Doing it $k$ times:

$$\sum_{j=0}^{k-1}(n - j) \;=\; kn - \frac{k(k-1)}{2} \;=\; \Theta(kn) \text{ for } k \ll n.$$

At $n = 10^7$, $k = 10^5$: about $10^{12} - 5\times10^9 \approx \mathbf{10^{12}}$ element moves — roughly **17 minutes** at $10^9$ moves per second, for a nightly job that deletes 1% of the data.

(b) **Shift once, not $k$ times:** copy `data[k .. n−1]` down to `data[0 .. n−k−1]` in a single pass and set `size ← n − k`.

$$\Theta(n) = 10^7 \text{ moves} \quad\text{— a factor of } 10^5 \text{ better.}$$

(Better still, if the structure keeps a `start` offset rather than always basing at index 0, the whole thing is $\Theta(1)$: just advance `start` by $k$. That is a circular-buffer idea — [Lesson 2.4](02-04-stacks-and-queues.md).)

**Why the interface cannot express it:** the four operations are all *single-element*, and each one must leave the structure in a valid state satisfying the representation invariant. So $k$ removals are necessarily $k$ separate restorations of that invariant, and each restoration is the $\Theta(n)$ shift. The bulk version's saving comes precisely from being allowed to leave the invariant broken in the middle and repair it once at the end — which is a privilege only code *inside* the implementation has.

This is the general reason bulk operations exist on real container libraries (`drain`, `truncate`, `removeRange`): **the abstraction boundary that protects callers also prevents them from amortizing across operations.**

(c) Adding `removeFirst(k)` to the ADT:

*Costs.* The interface gets wider, so every implementation must now provide it, and every implementation is one more thing to specify, test and keep consistent. It also weakens the ADT's claim to be a minimal description of "sequence" — `removeFirst(k)` is expressible in terms of `remove`, so it is there purely for performance, and an interface with performance-motivated operations is one where callers must know cost to use it well. That is a real loss of abstraction.

*Buys.* A factor of $10^5$ on a real workload, and — more durably — it moves the optimization *inside* the boundary, where it can be improved again later (to the $\Theta(1)$ offset trick) without any caller changing. A caller that hand-rolled the bulk shift by reaching into the array would block that.

**The trade is usually worth it, and the reason is that `removeFirst(k)` is a meaningful operation in its own right**, not just a fast path. "Drop the oldest $k$" is a thing the domain actually does. Widening an interface with an operation the domain names is very different from widening it with an implementation detail.

(d) **Swapping to a linked list would be a serious mistake, and the `get(i)` volume is why.**

| operation | daily volume | array | linked list |
|---|---|---|---|
| `get(i)` | $10^8$ | $\Theta(1)$ → $10^8$ | $\Theta(n)$ → up to $10^{15}$ |
| nightly `remove` of $k$ | $10^5$ | $\Theta(n)$ bulk → $10^7$ | $\Theta(k)$ → $10^5$ |

The linked list saves $10^7$ operations once a night and costs up to $10^{15}$ across the day's reads — **eight orders of magnitude in the wrong direction.** Even taking a generous average of $n/2$ links per lookup, the reads dominate everything else by a factor of millions.

The diagnosis is the standard one: **the colleague optimized the operation that was in front of them rather than the operation that runs most.** The nightly deletion is 0.1% of the operation mix; the reads are 99.9%. A cost vector is only useful multiplied by the workload, and the workload here is overwhelmingly indexed reads on an append-mostly feed — which is the array's best case and the linked list's worst.

The correct fix is (b): keep the array, add the bulk operation, and if the nightly cost still matters, keep a `start` offset and make it $\Theta(1)$.

</details>

## Flashback

**From Lesson 1.3 (Recursion and the call stack):** A routine sums a list of numbers recursively.

```
SUM(a, i, n):
    if i = n:  return 0
    return a[i] + SUM(a, i+1, n)
```

(a) Give the number of calls and the maximum stack depth for $n$ elements. (b) At $n = 10^6$, what happens in a language with a 1,000-frame limit? (c) Is the recursive call a tail call? (d) Give a version that is safe at $n = 10^6$ in any language, and say which resource you changed.

<details>
<summary>Solution</summary>

(a) **$n + 1$ calls** (one per element, plus the base case) and **maximum depth $n + 1$**, since each call makes exactly one recursive call and cannot return until it comes back. Time and space are both $\Theta(n)$ here — the call tree is a path, so its node count and its depth coincide.

(b) It **overflows the stack** at a depth of about 1,000 — so it fails at $n \approx 1000$, a thousand times smaller than the stated input. The routine is correct, linear-time, and unusable. Raising the limit only relocates the failure into the operating system's stack, where it becomes a segmentation fault instead of a clean exception.

(c) **No.** The last thing the routine does is the *addition* `a[i] + …`, which cannot happen until the recursive call returns — so the frame has pending work and must be kept. Rewriting with an accumulator makes it a genuine tail call:

```
SUM-ACC(a, i, n, acc):
    if i = n:  return acc
    return SUM-ACC(a, i+1, n, acc + a[i])
```

though that only helps in a language that promises tail-call elimination.

(d) The version safe **in any language** is the iterative one:

```
s <- 0
for i in 0 .. n-1:  s <- s + a[i]
return s
```

**The resource changed is space**, from $\Theta(n)$ stack frames to $\Theta(1)$. The time is identical — $n$ additions either way — which is the point: the recursion was never slow, it was memory-hungry, and only one of those two costs appears in "it's $\Theta(n)$".

</details>

## Connections

- **Backward:** the representation invariant is [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) loop invariant promoted to a type — a claim every operation must restore before returning. The cost vectors are [Lesson 1.4's](01-04-big-o-counting-operations.md) counts, tabulated instead of derived.
- **Forward:** the next four lessons fill this table in. [2.2](02-02-arrays-and-dynamic-arrays.md) proves the array's amortized append; [2.3](02-03-linked-lists.md) makes the "$\Theta(1)$ given a reference" qualifier precise; [2.4](02-04-stacks-and-queues.md) shows that *narrowing* an interface to LIFO or FIFO makes both implementations fast; [2.5](02-05-hash-tables.md) breaks the pattern with a structure that is $\Theta(1)$ expected for lookup by giving up ordering entirely.
- **Sideways:** "specify the operations, hide the representation" is the same discipline as an interface in [`programming-languages`](../../programming-languages/syllabus.md)'s type theory, and as a relation's logical schema versus its physical storage in [`databases`](../../databases/syllabus.md) — where the index you choose is a cost vector decision of exactly this kind. In [`algorithms`](../../algorithms/syllabus.md) the ADTs here are consumed through their interfaces, which is why that course can state "a priority queue costs $O(\log n)$ per operation" and move on.
