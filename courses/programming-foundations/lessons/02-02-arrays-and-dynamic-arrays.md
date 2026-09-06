# Programming & Data Structures · Lesson 2.2: Arrays and dynamic arrays

> ⏱ ~15 min · Module 2: Linear structures · Builds on: [2.1 (abstract data types)](02-01-abstract-data-types-and-interfaces.md) · Unlocks: 2.3 (linked lists)

## Why this matters

The array is the only data structure that is not really a data structure — it is what memory *is*. A block of consecutive addresses, all the same size. Everything else in this course is built out of arrays and pointers, and half of it is built out of arrays alone.

Its one superpower comes from arithmetic: because element $i$ sits at a computable address, getting it takes a multiply and an add regardless of $i$ or of how big the array is. Nothing else in this course gives you $\Theta(1)$ access by position, and a surprising amount of engineering is arranging for a problem to be answerable by array indexing.

The judgement content is the **growth policy**. A fixed array cannot grow, so real languages give you a dynamic one that reallocates — and the choice of *how much* to grow is the difference between constant-time appends and quadratic ones. That choice is a two-line change, its consequence is a change of complexity class, and the argument that settles it is a summation you can do on paper.

## The idea

**Contiguity buys arithmetic.** If the array starts at address `base` and each element occupies `w` bytes, then

$$\mathrm{addr}(a[i]) = \mathrm{base} + i \cdot w.$$

One multiply, one add, one memory read. Constant time, and **the only reason arrays are fast.** Take away contiguity and you take away the formula.

**Contiguity is also the whole cost.** Inserting at position $i$ means every later element must move up one slot to make room — $n - i$ moves. Deleting means the same shift downward. There is no way around it: the elements are *where they are* because of the address formula, so changing a position means physically moving data. Front insertion is $\Theta(n)$, and always will be.

**A fixed array cannot grow**, because the memory after it belongs to someone else. So a **[dynamic array](../reference.md#dynamic-array)** keeps two numbers — `size` (how many elements are in use) and `capacity` (how many fit) — and when `size` reaches `capacity` it allocates a bigger block, copies everything across, and frees the old one. That copy is $\Theta(n)$.

Here is the question the lesson turns on. If appending sometimes costs $\Theta(n)$, how can appending be cheap? The answer is that it depends entirely on **how much bigger** the new block is:

- Grow by **doubling** the capacity: the expensive copies get twice as big but happen half as often, and the two effects cancel. Total cost over $n$ appends is $\Theta(n)$, so each append costs $\Theta(1)$ **amortized**.
- Grow by a **fixed amount** $c$: the copies get bigger and do *not* get rarer. Total cost is $\Theta(n^2/c)$ — quadratic for any constant $c$, including $c = 1000$.

**Factor, not amount.** That is the rule, and it is worth being able to derive rather than recall.

## The formal version

**Doubling: the total is a geometric sum.** Starting from capacity 1 and doubling, reallocations happen when the size reaches $1, 2, 4, \dots, 2^k$, and the copy at that moment moves $2^{k}$ elements. Over $n$ appends the reallocation cost is

$$\sum_{j=0}^{\lfloor \log_2 n\rfloor} 2^j \;=\; 2^{\lfloor \log_2 n\rfloor + 1} - 1 \;<\; 2n.$$

Add the $n$ element-writes for the appends themselves and the total is under $3n$: $\Theta(n)$ for $n$ appends, hence

$$\textbf{amortized } \Theta(1) \textbf{ per append.}$$

*(Machine-verified: for $n = 10^6$ the copies total 1,048,575, about 1.05 per append.)*

**Growing by a constant $c$: the total is an arithmetic sum.** Reallocations happen at sizes $c, 2c, 3c, \dots$, and the $j$-th copies $jc$ elements. Over $n$ appends there are $n/c$ of them:

$$\sum_{j=1}^{n/c} jc \;=\; c\cdot\frac{(n/c)(n/c + 1)}{2} \;\approx\; \frac{n^2}{2c}.$$

Quadratic. At $n = 10^6$ with $c = 1$ that is $5\times10^{11}$ element moves against doubling's $10^6$ — a factor of **half a million** — and choosing $c = 10$ only divides it by ten. *(Verified: $c=1$ gives 499,999,500,000 copies; $c=10$ gives 49,999,600,000.)*

**[Amortized](../reference.md#amortized-cost) means a bound on the total, not on each one.** Any individual append can cost $\Theta(n)$ — the one that triggers a reallocation copies the whole array. The guarantee is that **every** sequence of $n$ appends costs $O(n)$ in total, with no probability anywhere. If your requirement is tail latency rather than throughput, amortized $\Theta(1)$ is the wrong guarantee and pre-allocating to a known capacity is the fix.

(The formal machinery — aggregate, accounting and potential methods — is [`algorithms` 2.4](../../algorithms/lessons/02-04-amortized-analysis-and-union-find.md)'s. This course derives the total directly and states the result.)

**Choosing the factor** is a time-memory trade:

| growth factor | copies per append ($n = 10^6$) | wasted capacity, worst case |
|---|---|---|
| 1.5× | 2.10 | 50% |
| 2× | 1.05 | 100% |
| 4× | 0.35 | 300% |

*(Machine-verified.)* Bigger factors copy less and waste more. Real libraries pick 2 (Java, Python's list internally uses ≈1.125 after an initial ramp, C++ `std::vector` is typically 1.5 or 2), and the argument for 1.5 is that freed blocks can be reused by later allocations, which doubling defeats.

**Cost summary.**

| operation | cost |
|---|---|
| `get(i)` / `set(i, x)` | $\Theta(1)$ |
| append | $\Theta(1)$ amortized, $\Theta(n)$ worst case |
| insert at position $i$ | $\Theta(n - i)$ |
| remove at position $i$ | $\Theta(n - i)$ |
| search for a value | $\Theta(n)$ unsorted, $\Theta(\log n)$ sorted |
| memory | $\Theta(\text{capacity})$, up to 2× the data |

## Picture

![At the top, a row of eight memory cells: five are outlined in dark ink and labelled a[0] through a[4], and three are grey and marked spare capacity. The address formula addr of a[i] equals base plus i times itemsize is given below, annotated that this is the only reason an array is fast. Below a dashed divider, a bar chart of the cost of each successive append, in element writes, against the append number from 1 to 64. Almost every bar is height 1; a few red bars spike at powers of two, doubling in height each time — 4, 8, 16, 32 — while becoming half as frequent. A dashed blue horizontal line near height 3 is labelled amortized approximately 3 writes per append.](assets/02-02-fig1.svg)

**The top half is the whole reason arrays exist.** Five elements in use, three slots of spare capacity, one formula. `size` and `capacity` are different numbers, and keeping them straight — `0 ≤ size ≤ capacity`, with everything past `size` being garbage — is the array's representation invariant.

**The bottom half is the amortization argument, drawn.** Read the red spikes left to right: they double in height (4, 8, 16, 32) and halve in frequency. That is the cancellation. The total area under all the spikes is $1 + 2 + 4 + \cdots < 2n$, so spreading it over $n$ appends gives a bounded average — the dashed line.

**Two things to take from the picture that the formula does not show.** First, the spikes are *real* — one append in this sequence costs 32 times the others, and if that append happens while a user is waiting, they wait 32× longer. The dashed line is an average, not a promise about any individual bar. Second, the largest spike is always the most recent one, and it is always about $n$: as the array grows, the worst single append grows with it without bound. **Amortized $O(1)$ and "no operation is ever slow" are different claims**, and the gap between them is where tail-latency incidents live.

## Worked examples

**Example 1 (mechanical): count the copies.** Append 10 elements to an empty dynamic array with capacity 1, doubling on overflow. How many element-copies?

| append # | size before | capacity | reallocate? | elements copied |
|---|---|---|---|---|
| 1 | 0 | 1 | no | 0 |
| 2 | 1 | 1 | yes → 2 | 1 |
| 3 | 2 | 2 | yes → 4 | 2 |
| 4 | 3 | 4 | no | 0 |
| 5 | 4 | 4 | yes → 8 | 4 |
| 6–8 | 5–7 | 8 | no | 0 |
| 9 | 8 | 8 | yes → 16 | 8 |
| 10 | 9 | 16 | no | 0 |

Total copies: $1 + 2 + 4 + 8 = 15$, plus 10 writes for the appends themselves. **25 operations for 10 appends — 2.5 each**, and the ratio falls toward the limit as $n$ grows.

Now the same 10 appends growing by 1 each time: reallocation on every append after the first, copying $1 + 2 + \cdots + 9 = 45$ elements. **55 operations**, and at $n = 10^6$ the two strategies differ by a factor of half a million.

**Example 2 (why you'd care): the loop that shifts.** A service filters a list of $10^5$ records by removing the ones that fail a check.

```
i <- 0
while i < size:
    if not ok(a[i]):  remove(i)          # shifts everything after i down
    else:             i <- i + 1
```

Correct, and $\Theta(n^2)$. Each `remove(i)` moves the $n - i$ elements after position $i$, and if half the records fail, the total is about

$$\sum \approx \frac{n^2}{4} = 2.5\times10^9 \text{ element moves } \approx \text{ seconds.}$$

The fix is to stop removing and start **compacting** — one pass, writing survivors forward:

```
w <- 0
for r in 0 .. size-1:
    if ok(a[r]):  a[w] <- a[r];  w <- w + 1
size <- w
```

$\Theta(n)$: $10^5$ moves, a factor of 25,000 better. Note the shape — a read index and a write index moving at different speeds, with the invariant *`a[0..w−1]` are the survivors among `a[0..r−1]`*. This **two-pointer compaction** is the standard answer whenever you would otherwise delete from an array in a loop, and it appears again in [Lesson 4.1](04-01-searching-and-elementary-sorting.md).

There is also a bug lurking in the first version that the second cannot have: if you write `for i in 0..size-1` instead of the `while`, then removing at `i` shifts an unexamined element *into* position `i` and the loop skips it. **Mutating a container while iterating it by index is a correctness bug as well as a performance one**, which is why most languages make it an error.

## Watch out

- **You might think** amortized $\Theta(1)$ means no append is slow — **but actually** the append that triggers a reallocation copies the whole array, and that worst case grows with $n$. If tail latency is the constraint, pre-allocate.
- **You might think** growing by 1000 is "basically doubling" — **but actually** any fixed increment gives $\Theta(n^2/c)$. The distinction is factor versus amount, not the size of the amount.
- **You might think** `size` and `capacity` are the same thing — **but actually** conflating them is how you read garbage past the end. The invariant `0 ≤ size ≤ capacity` is the array's contract with itself.
- **You might think** deleting elements in a loop is $\Theta(n)$ — **but actually** it is $\Theta(n^2)$, because each deletion shifts. Compact with two pointers in one pass instead.
- **You might think** an array of objects is contiguous — **but actually** in most managed languages it is contiguous in *references*, and the objects themselves are scattered. You get $\Theta(1)$ indexing and none of the cache benefit, which is why numeric code uses arrays of primitives.
- **You might think** shrinking should mirror growing — **but actually** halving capacity as soon as the array is half empty makes an alternating append/remove sequence reallocate every time, $\Theta(n)$ per operation. Shrink at one quarter full, to leave hysteresis.

## One-liner

> One address formula buys $\Theta(1)$ indexing and charges $\Theta(n)$ for every insertion — and growing by a *factor* rather than an *amount* is what makes appending cheap on average.

## Problems

**P1 (🟢)** A dynamic array starts empty with capacity 1 and doubles when full.

(a) Give the capacity after each of 9 appends. (b) On which appends does a reallocation occur, and how many elements does each copy? (c) Total element-copies for 9 appends. (d) In one sentence, why is the total under $2n$ rather than growing with the number of reallocations?

**P2 (🟡)** A logging library appends one entry per event. Its author, worried about memory, changes the growth policy from doubling to "add 100 slots."

(a) Give the total copy cost for $n$ appends under each policy. (b) At $n = 10^6$, give both numbers. (c) The author's stated goal was to avoid wasting memory. Quantify the memory saved and compare it against the time cost. (d) Give a policy that addresses their concern without changing the complexity class, and say what it gives up.

**P3 (🔴)** A telemetry service holds the last $n = 10^6$ readings in a dynamic array. Every second it appends 1,000 new readings and deletes the 1,000 oldest with `remove(0)` a thousand times.

(a) Give the per-second cost and the operation count. (b) The team pre-allocates capacity $2\times10^6$ to "avoid reallocation." Does this help? Justify with the per-second count. (c) Give a structure or technique that makes both the appends and the deletions $\Theta(1)$ amortized, and state its memory cost. (d) A colleague proposes instead deleting lazily — mark entries dead and compact when half the array is dead. Give the amortized cost per operation, and identify the one workload characteristic that decides whether this beats your answer to (c).

<details>
<summary>Solutions</summary>

**P1** (a) Starting at capacity 1:

| after append | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| size | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| capacity | 1 | 2 | 4 | 4 | 8 | 8 | 8 | 8 | 16 |

(b) Reallocation happens when the array is full at the moment of an append — on appends **2, 3, 5 and 9**, copying **1, 2, 4 and 8** elements respectively.

(c) $1 + 2 + 4 + 8 = \mathbf{15}$ element-copies, plus 9 writes for the appends: 24 operations for 9 appends, about 2.7 each.

(d) Because the copy sizes form a **geometric** series with ratio 2, so the sum is dominated by its last term: $1 + 2 + \cdots + 2^k = 2^{k+1} - 1 < 2 \cdot 2^k \le 2n$. The number of reallocations is only $\log_2 n$, but that is not the reason — the reason is that all the *earlier* copies together cost less than the final one.

**P2** (a)

- **Doubling:** copies total $\sum_{j} 2^j < 2n$, so $\Theta(n)$ overall and $\Theta(1)$ amortized per append.
- **Add 100:** reallocations at sizes $100, 200, 300, \dots$, the $j$-th copying $100j$ elements, with $n/100$ of them:

$$\sum_{j=1}^{n/100} 100j \;=\; 100 \cdot \frac{(n/100)(n/100+1)}{2} \;\approx\; \frac{n^2}{200} \;=\; \Theta(n^2).$$

(b) At $n = 10^6$:

| policy | copies |
|---|---|
| doubling | $\approx 1.05\times10^6$ |
| add 100 | $\approx 5\times10^9$ |

A factor of about **4,800**. At $10^9$ operations per second that is 1 ms against 5 seconds, for the same million log lines.

(c) **The memory saved is at most one array's worth, and it is bounded by a constant factor; the time cost is unbounded.**

Doubling wastes up to 100% of capacity at the moment just after a reallocation — for $10^6$ four-byte entries, at most 4 MB of slack on 4 MB of data. Adding 100 wastes at most 100 slots, or 400 bytes. **So the author traded roughly 4 MB for 5 seconds of CPU per million entries** — and the 4 MB is a one-off while the 5 seconds recurs every million lines.

Worse, the saving is illusory in another way: the quadratic version performs $n/100 = 10^4$ separate allocations, each of which must find a fresh block and copy into it, fragmenting the heap and leaving the old blocks to be collected. The doubling version does 20 allocations. **The memory-conscious policy is also worse for the allocator.**

(d) **Grow by a smaller factor** — 1.25× or 1.5× instead of 2×:

$$\text{copies} \approx \frac{n}{\text{factor} - 1},$$

so 1.5× costs about $2n$ copies (verified: 2.10 per append at $n=10^6$) and 1.25× about $4n$ — still $\Theta(n)$ total, still amortized $\Theta(1)$, while capping wasted capacity at 50% and 25% respectively.

*What it gives up:* a larger constant on the copy cost — 1.5× does about twice the copying of 2× — and more frequent reallocations, which means more allocator traffic. This is exactly the trade real libraries make: `std::vector` implementations commonly use 1.5, and the argument in its favour is that with a factor below the golden ratio $\varphi \approx 1.618$, the sum of all previously freed blocks eventually exceeds the next request, so the allocator can reuse them — which doubling never permits.

**P3** (a) Per second: 1,000 appends (cheap, $\Theta(1)$ amortized each) plus 1,000 `remove(0)` calls, each shifting the whole array down by one:

$$1000 \times \Theta(n) = 1000 \times 10^6 = \mathbf{10^9 \text{ element moves per second}}.$$

That is roughly a full second of CPU to do one second of work — the service is at or past saturation, doing nothing but shifting.

(b) **No, it does not help at all.** Pre-allocation eliminates *reallocation*, which was never the cost: the appends were already $\Theta(1)$ amortized and contributed 1,000 operations per second out of $10^9$.

The $10^9$ comes entirely from the **shifting** in `remove(0)`, and shifting is a consequence of the address formula, not of capacity. Every element after position 0 must physically move down one slot so that index arithmetic keeps working, and there is no amount of spare capacity that changes that. The per-second count after pre-allocation is still $10^9$.

This is the diagnosis worth extracting: **the team optimized the operation they had a name for.** "Reallocation" is a familiar cost with a familiar fix, so it got fixed; the unfamiliar cost was 99.9999% of the bill.

(c) **A circular buffer** (ring buffer): keep the array plus two indices, `head` and `tail`, and let them wrap around modulo the capacity.

- **Append:** write at `tail`, then `tail ← (tail + 1) mod capacity`. $\Theta(1)$.
- **Delete oldest:** `head ← (head + 1) mod capacity`. $\Theta(1)$ — **nothing moves**, because the array no longer insists that logical position 0 is physical index 0.

Per-second cost drops from $10^9$ to $2{,}000$ — a factor of 500,000.

*Memory:* $\Theta(n)$, the same one array, plus two integers. Since the requirement is "the last $10^6$ readings", the capacity can be fixed at $10^6$ and the structure never grows at all: an append past the end simply overwrites the oldest entry, which is exactly the desired retention policy. This is developed in [Lesson 2.4](02-04-stacks-and-queues.md), where it is what makes an array-backed queue work.

(d) **Lazy deletion with compaction at half-dead.**

Marking an entry dead is $\Theta(1)$. Compaction is a single two-pointer pass costing $\Theta(n)$, and it is triggered after at least $n/2$ deletions have accumulated. So the compaction cost per deletion is

$$\frac{\Theta(n)}{n/2} = \Theta(1) \textbf{ amortized,}$$

and every operation is $\Theta(1)$ amortized overall — asymptotically the same as the ring buffer.

*The characteristic that decides between them:* **whether the live entries need to stay contiguous and indexable between compactions** — equivalently, whether reads are by position or by scan.

- If the service serves `get(i)` for the $i$-th *live* reading, lazy deletion is bad: with dead entries interspersed, finding the $i$-th live one requires a scan, $\Theta(n)$ per read. The ring buffer keeps $\Theta(1)$ indexing (`a[(head + i) mod capacity]`).
- If reads are always full scans or tail-only, lazy deletion is fine, and it has a genuine advantage the ring buffer lacks: it tolerates deletion from *anywhere*, not just the front. A ring buffer only makes front-deletion cheap.

Secondarily, lazy deletion holds up to 2× the memory (dead entries are still resident) and has the tail-latency spike of a periodic $\Theta(n)$ compaction, where the ring buffer has no spikes at all. For a fixed-size retention window with indexed reads — this workload — **the ring buffer is the right answer**; lazy deletion is the right answer when deletions are scattered.

</details>

## Flashback

**From Lesson 1.4 (Big-O: counting operations):** Two nested-loop fragments.

```
(a)  for i in 0..n-1:              (b)  for i in 0..n-1:
         for j in 0..n-1:  s++              for j in 0..i-1:  s++
```

(a) Give the exact count for each. (b) Give the $\Theta$ class for each. (c) At $n = 1000$, give both counts. (d) A colleague says (b) is "twice as fast, so a different complexity class." Respond.

<details>
<summary>Solution</summary>

(a) Fragment (a) runs the inner line $n$ times for each of $n$ values of `i`: exactly $n^2$. Fragment (b) runs it $i$ times for each `i`, so

$$\sum_{i=0}^{n-1} i = \frac{n(n-1)}{2}.$$

(b) **Both are $\Theta(n^2)$.** The factor of about $\tfrac12$ is a constant and constants do not affect the class.

(c) At $n = 1000$: (a) is $1{,}000{,}000$; (b) is $1000 \cdot 999 / 2 = \mathbf{499{,}500}$.

(d) **They are right about the factor and wrong about the conclusion.** (b) really is about twice as fast — that is a genuine, measurable 2× and worth having. But a complexity class is defined up to constant factors, so halving the work cannot change it: both grow quadratically, and doubling $n$ quadruples both.

The practical version of the distinction: the 2× is worth taking when you have already decided to run a quadratic algorithm and want it to cost less. It is *not* worth mistaking for progress when the real problem is the quadratic growth itself — which shows up the moment $n$ doubles, at which point (b) is doing twice the work (a) was doing before the change. Moving between rows of the growth table is a different kind of win from moving along one.

</details>

## Connections

- **Backward:** the geometric sum here is [Lesson 1.4's](01-04-big-o-counting-operations.md) counting applied to a sequence of operations rather than a loop, and `0 ≤ size ≤ capacity` is [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) invariant at the level of a type. This lesson fills in the array column of [Lesson 2.1's](02-01-abstract-data-types-and-interfaces.md) cost table.
- **Forward:** [2.3](02-03-linked-lists.md) is the structure that trades the address formula away and gets the opposite cost vector; [2.4](02-04-stacks-and-queues.md) uses the circular-buffer trick from P3 to make an array-backed queue $\Theta(1)$; [2.5](02-05-hash-tables.md) is an array indexed by arithmetic on the *key* instead of the position, and its resizing is this same doubling argument.
- **Sideways:** the formal treatment of amortization — aggregate, accounting and potential methods — is [`algorithms` 2.4](../../algorithms/lessons/02-04-amortized-analysis-and-union-find.md)'s, and the "three kinds of guarantee" distinction (worst-case, amortized, expected) that this lesson's tail-latency warning depends on is developed there. Why contiguous access is 10× faster than pointer-chasing is [`computer-architecture`](../../computer-architecture/syllabus.md)'s cache hierarchy.
