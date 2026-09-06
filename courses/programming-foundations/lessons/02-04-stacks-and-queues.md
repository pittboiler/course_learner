# Programming & Data Structures · Lesson 2.4: Stacks and queues

> ⏱ ~15 min · Module 2: Linear structures · Builds on: [2.3 (linked lists)](02-03-linked-lists.md) · Unlocks: 2.5 (hash tables)

## Why this matters

[Lessons 2.2](02-02-arrays-and-dynamic-arrays.md) and [2.3](02-03-linked-lists.md) left you with two structures that are each fast at what the other is slow at. This lesson shows the move that gets you out of the trade: **narrow the interface until both implementations are fast.**

A stack and a queue are lists with almost all the operations removed. You cannot index into them, you cannot insert in the middle — you may only add and remove at designated ends. That restriction is not a limitation to work around; it is what buys $\Theta(1)$ on every operation, under *either* backing, and it is a design pattern worth internalizing: **a narrower contract is easier to implement well.**

They are also everywhere. The call stack of [Lesson 1.3](01-03-recursion-and-the-call-stack.md) is literally a stack. Undo is a stack. Expression evaluation is a stack. BFS is a queue ([4.2](04-02-graphs-representations-and-traversal.md)), DFS is a stack, job schedulers are queues, and the difference between breadth-first and depth-first search is *nothing but which of these two you use*.

The judgement content is the array-backed queue. Done naively it is $\Theta(n)$ per dequeue and looks fine in testing; done with a **circular buffer** it is $\Theta(1)$. The gap is one modulo operator, and the reasoning that gets you there is the most transferable thing in the lesson.

## The idea

**A stack is LIFO** — last in, first out. Two operations, both at the same end:

```
push(x)   put x on top
pop()     remove and return the top
peek()    look at the top without removing
```

**A queue is FIFO** — first in, first out. Two operations, at opposite ends:

```
enqueue(x)   add at the back
dequeue()    remove and return the front
```

That is the whole interface in each case, and the smallness is the point.

**Why the stack is easy either way.** Both ends of an array are not equal — the *back* is cheap (append, amortized $\Theta(1)$; remove the last element, $\Theta(1)$, nothing shifts) and the front is expensive. A stack only ever touches one end, so put that end at the array's back and everything is $\Theta(1)$. A linked list is equally happy with the head as the top. **Neither backing has a bad case**, because the stack never asks for the operation either one is bad at.

**Why the queue is not.** A queue touches *both* ends, and for an array one of them is the expensive one. The naive implementation keeps the front at index 0, so every `dequeue` shifts all $n$ remaining elements down — $\Theta(n)$, and a queue of a million elements does $10^6$ moves per dequeue.

The fix is to stop insisting that logical position 0 is physical index 0. Keep two indices, `head` and `tail`, and let them **[wrap around](../reference.md#circular-ring-buffer)** modulo the capacity:

```
enqueue(x):  a[tail] <- x;  tail <- (tail + 1) mod capacity;  size <- size + 1
dequeue():   x <- a[head];  head <- (head + 1) mod capacity;  size <- size - 1;  return x
```

Nothing moves. Both operations are $\Theta(1)$, and the array is used as a **ring** rather than as a line. That single change — *move the window, not the data* — is the same idea that made [Lesson 2.2's](02-02-arrays-and-dynamic-arrays.md) telemetry buffer work, and it recurs constantly.

## The formal version

**Representation invariants.**

*Array-backed stack:* `0 ≤ top ≤ capacity`, elements live in `a[0..top−1]`, and `a[top..]` is garbage. `push` writes at `top` and increments; `pop` decrements and reads.

*Circular queue:* `0 ≤ size ≤ capacity`, and the live elements are `a[head]`, `a[(head+1) mod cap]`, …, $size$ of them. The subtlety: `head == tail` holds when the queue is **both** empty and full, so a separate `size` counter (or the convention of deliberately wasting one slot) is required to tell them apart. **Omitting that is the classic ring-buffer bug**, and it is undetectable until the buffer first fills.

**Cost table.**

| operation | array-backed | linked-list-backed |
|---|---|---|
| `push` / `pop` | $\Theta(1)$ amortized / $\Theta(1)$ | $\Theta(1)$ / $\Theta(1)$ |
| `enqueue`, naive array | — | — |
| `enqueue` / `dequeue`, circular | $\Theta(1)$ / $\Theta(1)$ | $\Theta(1)$ / $\Theta(1)$ (head + tail pointer) |
| `enqueue` / `dequeue`, naive array (front at index 0) | $\Theta(1)$ / $\boldsymbol{\Theta(n)}$ | — |
| memory per element | 1 slot (up to 2× with spare capacity) | 1 slot + 1–2 pointers |
| locality | contiguous | scattered |

With the interface narrowed, **both backings hit $\Theta(1)$ on everything**, so the choice is decided entirely by constants — and there the array wins, on locality and on not allocating a node per element. That is why real library stacks and deques are array-backed.

**Two stacks make a queue.** A cute and genuinely useful construction: keep an `in` stack and an `out` stack. `enqueue` pushes onto `in`. `dequeue` pops from `out`, and if `out` is empty, first pours all of `in` into it (which reverses the order, turning LIFO into FIFO).

Any single `dequeue` can cost $\Theta(n)$ — the pour. But each element is moved from `in` to `out` **exactly once** in its lifetime, so over $n$ operations the total transfer work is $\Theta(n)$:

$$\textbf{amortized } \Theta(1) \textbf{ per operation.}$$

This is [Lesson 2.2's](02-02-arrays-and-dynamic-arrays.md) amortization argument in a new setting, and the same caveat applies — the average is bounded, individual operations are not.

**Applications, and why the structure is forced.**

| problem | structure | why |
|---|---|---|
| function calls | stack | the most recent call must finish first — that *is* LIFO |
| undo / redo | stack | the most recent action is undone first |
| matching brackets | stack | the most recently opened must close first |
| breadth-first search | queue | explore all vertices at distance $k$ before any at $k+1$ |
| depth-first search | stack | follow one path as deep as it goes |
| job scheduling, buffering | queue | fairness — arrive first, served first |

The BFS/DFS pair is the sharpest example: **the same traversal loop, with a queue instead of a stack, is a different algorithm with different guarantees** ([4.2](04-02-graphs-representations-and-traversal.md)).

## Picture

![A ring of eight array slots numbered 0 to 7 arranged in a circle. Slots 2 through 6 are outlined in blue and hold the values c, d, e, f and g; slots 7, 0 and 1 are empty. The slot at index 2 is annotated head and the slot at index 7 is annotated tail; the centre reads capacity 8, size 5. To the right, the two operations are given: enqueue writes at tail then advances tail modulo 8, dequeue reads at head then advances head modulo 8. Notes state that both are Theta of one and that the modulo is what buys it, and warn in red that full and empty both give head equals tail, so a separate size counter or one deliberately wasted slot is required. Below, a table compares push-pop and enqueue-dequeue across array-backed and list-backed implementations.](assets/02-04-fig1.svg)

**The ring is the whole idea.** There is no "front of the array" any more — there is a window of live elements that walks around the storage, and the storage never notices. Enqueue advances `tail` by one; dequeue advances `head` by one; the elements sit exactly where they were written and are never touched again until they are read out.

Compare the naive version: it insists that the front lives at index 0, so every dequeue has to drag $n$ elements one step to the left to restore that. **The ring buffer's entire saving comes from dropping a requirement nobody needed.** That is worth generalizing — when an operation is expensive, ask which invariant is forcing the expense and whether the invariant is actually load-bearing.

**The red warning is the bug you will otherwise write.** When `size = 0` the window is empty and `head == tail`. When `size = 8` the window has wrapped all the way round and `head == tail` again. The indices alone cannot distinguish "nothing here" from "completely full", so you must carry a `size` counter — or keep one slot permanently empty so that full means `(tail + 1) mod cap == head`, trading a slot for a branch. Either is fine; neither is optional, and the failure mode is that the buffer silently reports empty at the exact moment it fills, which no small test will reach.

## Worked examples

**Example 1 (mechanical): trace a ring buffer.** Capacity 4, initially empty with `head = tail = 0`, `size = 0`. Perform: `enqueue(a)`, `enqueue(b)`, `enqueue(c)`, `dequeue()`, `dequeue()`, `enqueue(d)`, `enqueue(e)`.

| op | array `[0..3]` | head | tail | size | returns |
|---|---|---|---|---|---|
| start | `[ _, _, _, _ ]` | 0 | 0 | 0 | |
| `enqueue(a)` | `[ a, _, _, _ ]` | 0 | 1 | 1 | |
| `enqueue(b)` | `[ a, b, _, _ ]` | 0 | 2 | 2 | |
| `enqueue(c)` | `[ a, b, c, _ ]` | 0 | 3 | 3 | |
| `dequeue()` | `[ a, b, c, _ ]` | 1 | 3 | 2 | **a** |
| `dequeue()` | `[ a, b, c, _ ]` | 2 | 3 | 1 | **b** |
| `enqueue(d)` | `[ a, b, c, d ]` | 2 | 0 | 2 | |
| `enqueue(e)` | `[ **e**, b, c, d ]` | 2 | 1 | 3 | |

Two things to notice. **The dequeues did not erase anything** — `a` and `b` are still physically present and simply outside the window; only `head` moved. And `enqueue(e)` **wrapped**, writing at index 0 because `tail` was 0, overwriting the dead `a`. The live contents in order are `c, d, e`, read from `head = 2` forward with wrapping ✓.

If the counter were missing and we now enqueued one more, `tail` would reach 2 = `head` with a full buffer, indistinguishable from the empty state at the top of the table.

**Example 2 (why you'd care): the queue that was quadratic.** A message broker holds $10^5$ pending messages in an array-backed queue with the front at index 0, and processes 1,000 per second.

Each `dequeue` shifts the remaining $\approx 10^5$ messages down one slot:

$$1000 \times 10^5 = \mathbf{10^8 \text{ element moves per second}}$$

— roughly a tenth of a second of pure memory copying per second of work, rising linearly with backlog. At $10^6$ pending it is $10^9$ per second and the broker stops keeping up entirely. **The failure mode is that it gets worse exactly when the queue is under pressure**, which is the worst possible time.

With a circular buffer the same second costs 2,000 index updates. A factor of 50,000, and it removes the coupling between backlog size and throughput completely — the broker's speed no longer depends on how far behind it is.

The general shape: **a naive array queue looks fine in every test with a short queue and degrades quadratically under load.** It is worth recognizing on sight, because the symptom (slow under backlog) reads like a capacity problem rather than an algorithmic one.

## Watch out

- **You might think** an array-backed queue is naturally $\Theta(1)$ — **but actually** keeping the front at index 0 makes every dequeue $\Theta(n)$. The ring buffer is what makes it constant.
- **You might think** `head == tail` means empty — **but actually** it means empty *or* full, and telling them apart needs a `size` counter or one sacrificed slot. This bug only appears when the buffer first fills.
- **You might think** a stack and a queue are minor variations — **but actually** swapping one for the other in a graph traversal changes depth-first into breadth-first, with entirely different guarantees. The container *is* the algorithm.
- **You might think** the two-stack queue is $\Theta(n)$ because the pour is — **but actually** each element is poured exactly once, so it is amortized $\Theta(1)$. As always, that bounds the total and not any single operation.
- **You might think** a linked list is the natural queue — **but actually** with the interface narrowed both backings are $\Theta(1)$, and the array wins on constants: no per-element allocation, contiguous memory, no pointer chasing. Real deques are array-backed.
- **You might think** restricting an interface is a loss — **but actually** it is what makes both implementations fast. A `List` forces you to choose which operation to be bad at; a stack does not.

## One-liner

> Take away every operation except the ends, and both backings become $\Theta(1)$ — provided the array is allowed to wrap, because the cost of a naive queue is an invariant nobody needed.

## Problems

**P1 (🟢)** A ring buffer of capacity 5, initially empty, `head = tail = 0`.

(a) Trace `enqueue(p)`, `enqueue(q)`, `enqueue(r)`, `dequeue()`, `enqueue(s)`, `enqueue(t)`, `enqueue(u)`, giving the array, `head`, `tail` and `size` after each. (b) What are the live contents, in order, at the end? (c) At what point does `tail` wrap? (d) After one more `enqueue`, what is `head` and what is `tail`, and how does the code know the buffer is full?

**P2 (🟡)** A team implements a queue as `enqueue = append to the end of a dynamic array`, `dequeue = remove(0)`.

(a) Give the cost of each operation and of $n$ enqueues followed by $n$ dequeues. (b) They test with queues of up to 100 elements and see no problem. Explain why, with numbers. (c) In production the queue reaches $10^5$. Give the cost of a single dequeue and of draining the queue. (d) Give the fix and its cost, and state the one extra piece of state it requires.

**P3 (🔴)** A build system must run tasks respecting dependencies. An engineer writes a traversal that starts from the tasks with no dependencies and repeatedly takes one from a container, runs it, and adds any newly-unblocked tasks to the container.

(a) With the container a **stack**, describe the order tasks run in. With a **queue**, describe it. (b) Both orders are valid. State the property that makes them both correct, and the property that distinguishes them. (c) The engineer wants to run independent tasks in parallel on 8 workers. Which container supports this naturally, and why does the other not? (d) A colleague suggests a stack "because it is faster — no wrapping arithmetic." Evaluate this against the parallelism requirement, and say what actually determines the choice.

<details>
<summary>Solutions</summary>

**P1** (a) Capacity 5:

| op | array `[0..4]` | head | tail | size |
|---|---|---|---|---|
| start | `[ _, _, _, _, _ ]` | 0 | 0 | 0 |
| `enqueue(p)` | `[ p, _, _, _, _ ]` | 0 | 1 | 1 |
| `enqueue(q)` | `[ p, q, _, _, _ ]` | 0 | 2 | 2 |
| `enqueue(r)` | `[ p, q, r, _, _ ]` | 0 | 3 | 3 |
| `dequeue()` → p | `[ p, q, r, _, _ ]` | 1 | 3 | 2 |
| `enqueue(s)` | `[ p, q, r, s, _ ]` | 1 | 4 | 3 |
| `enqueue(t)` | `[ p, q, r, s, t ]` | 1 | **0** | 4 |
| `enqueue(u)` | `[ **u**, q, r, s, t ]` | 1 | 1 | 5 |

(b) Reading `size = 5` elements from `head = 1` with wrapping: indices 1, 2, 3, 4, 0 →

$$q,\ r,\ s,\ t,\ u.$$

(c) `tail` wraps on `enqueue(t)`: it was 4, the last valid index, so after writing there it becomes $(4 + 1) \bmod 5 = 0$. The subsequent `enqueue(u)` then writes at index 0, overwriting the dead `p`.

(d) After one more `enqueue`, nothing should happen — **the buffer is already full**. Note that `head = 1` and `tail = 1` at the end of (a), i.e. `head == tail` with a *full* buffer, which is exactly the ambiguity the lesson warns about.

The code knows it is full from **`size == capacity`** (5 == 5). Without the counter, `head == tail` here would be indistinguishable from the empty state at the top of the table, and an `enqueue` would silently overwrite `q` while a `dequeue` would return garbage. (The alternative convention — refuse to fill the last slot, so full means `(tail + 1) mod cap == head` — costs one slot of capacity and removes the counter.)

**P2** (a)

- `enqueue`: append to a dynamic array, $\Theta(1)$ **amortized**.
- `dequeue`: `remove(0)` shifts every remaining element down one, $\Theta(n)$.

For $n$ enqueues then $n$ dequeues: the enqueues total $\Theta(n)$; the dequeues cost $n, n-1, \dots, 1$ moves, so

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2} = \Theta(n^2).$$

(b) At $n = 100$ the drain costs $100 \cdot 101 / 2 \approx 5{,}050$ element moves — a few microseconds, entirely invisible next to whatever the queue is actually carrying (network I/O, message parsing). There is no threshold to cross and no warning; the code is simply fast enough at that size.

**Quadratic behaviour is undetectable at small $n$ by construction** — that is what "asymptotic" means. A test at $n = 100$ cannot distinguish $\Theta(n)$ from $\Theta(n^2)$ without a second measurement at a different size to compare against, which is the actual missing practice: measure at $n$ and at $10n$ and check the ratio.

(c) At $n = 10^5$:

- **A single dequeue** shifts $\approx 10^5$ elements — around 0.1 ms of pure memory copying for one message.
- **Draining the queue** costs $\sum_{k=1}^{10^5} k \approx 5\times10^9$ element moves — **seconds**, for a queue whose contents would take $10^5$ operations to touch once.

And it degrades under load: a queue twice as long is four times as expensive to drain.

(d) **Use a circular buffer**: keep `head` and `tail` indices and wrap modulo capacity.

- `enqueue`: $\Theta(1)$ amortized (the amortization is only for growth, not for shifting).
- `dequeue`: $\Theta(1)$ — advance `head`, move nothing.
- Draining $n$ elements: $\Theta(n)$ instead of $\Theta(n^2)$ — at $10^5$, that is $10^5$ operations against $5\times10^9$, a factor of 50,000.

**Extra state required: a `head` index** (the naive version implicitly had `head = 0` always), plus a `size` counter to disambiguate full from empty. Two integers, in exchange for a change of complexity class.

(A simpler variant worth knowing when the queue is drained and refilled in phases rather than continuously: keep `head` but never wrap, and compact only when `head` exceeds half the capacity. Same amortized $\Theta(1)$, no modulo, at the cost of transient extra memory.)

**P3** (a) The container decides the traversal order.

- **Stack (LIFO):** the most recently unblocked task runs next. The build dives as deep as it can down one dependency chain, finishing it before returning to siblings — **depth-first**. If task A unblocks B and C, it runs B, then everything B unblocks, and only reaches C when that entire branch is exhausted.
- **Queue (FIFO):** all tasks unblocked at the same "level" run before any task they unblock — **breadth-first**. Everything with zero dependencies runs first, then everything unblocked by those, and so on, level by level.

(b) **What makes both correct:** each is a **topological order** of the dependency graph — a task is only taken from the container once every task it depends on has completed, so the invariant "when a task runs, all its dependencies are done" holds regardless of the container's discipline. Correctness comes from the *unblocking rule*, not from the order.

**What distinguishes them:** the shape of the frontier, and hence the peak number of simultaneously-ready tasks. Depth-first keeps the container small (one path's worth of siblings) and finishes individual chains early; breadth-first grows the container to the full width of the dependency graph and finishes everything at one depth before starting the next. Secondary consequences follow: DFS gives better locality (related tasks run together, so caches and warm file handles are reused) while BFS surfaces failures across the whole graph earlier.

(c) **The queue supports parallelism naturally.**

Under BFS, at any moment the container holds *every* task whose dependencies are satisfied — the entire ready frontier. Eight workers can each take one and run concurrently, and the container refills as they complete. The frontier's width is exactly the available parallelism, and the queue exposes it.

The stack does not, because depth-first is *inherently sequential in shape*: it deliberately keeps the container small by diving, so at most moments there are few ready tasks in it even when the graph has plenty of independent work elsewhere. Workers would idle while a single chain is walked. You *can* parallelize a stack-based traversal — pop several at once — but you are then fighting the discipline that made it depth-first, and the effective parallelism is whatever happens to be on the stack rather than everything that is ready.

This is the general reason `make -j` and Bazel use the in-degree-zero *set* rather than a recursive descent.

(d) **The colleague is right about the microbenchmark and wrong about the decision, by two orders of magnitude of relevance.**

*The speed claim.* It is true that `top++` is marginally cheaper than `(tail + 1) mod cap`, and true that a stack has no wraparound ambiguity to get wrong. But both are $\Theta(1)$ with tiny constants — single-digit nanoseconds. In a build system each container operation is followed by *running a compilation task*, which costs milliseconds to seconds. The container operation is roughly $10^{-6}$ of the work it schedules.

*What it costs.* Choosing the stack forfeits 8-way parallelism. On a build with a wide dependency graph that is close to an 8× wall-clock difference — seconds against minutes on a real project.

*What actually determines the choice:* **the parallelism the workload exposes, and secondarily the failure-reporting behaviour you want.** Use a queue (or, properly, a ready-set with in-degree counting) when you have workers to feed and want failures across the graph surfaced early; use a stack when execution is single-threaded and you want each dependency chain finished promptly with good cache locality — for instance a linker resolving one module's transitive dependencies.

The transferable error is worth naming: **the colleague optimized the operation that is easy to measure rather than the one that dominates.** It is the same mistake as tuning the reallocation policy of a queue whose real cost was shifting.

</details>

## Flashback

**From Lesson 2.2 (Arrays and dynamic arrays):** A dynamic array grows by doubling when it fills.

(a) Give the total element-copy cost over $n$ appends, and the amortized cost per append. (b) A colleague changes the policy to "add 1000 slots each time." Give the new total. (c) At $n = 10^6$, give both numbers. (d) What does amortized $\Theta(1)$ guarantee, and what does it not?

<details>
<summary>Solution</summary>

(a) Reallocations happen at sizes $1, 2, 4, \dots$, the one at size $2^j$ copying $2^j$ elements, so the total is a geometric sum:

$$\sum_{j=0}^{\lfloor\log_2 n\rfloor} 2^j < 2n = \Theta(n),$$

hence **amortized $\Theta(1)$ per append** — the copies double in size but halve in frequency, and the two effects cancel.

(b) With a fixed increment $c = 1000$, reallocations happen at sizes $1000, 2000, 3000, \dots$ and the $j$-th copies $1000j$ elements, with $n/1000$ of them:

$$\sum_{j=1}^{n/1000} 1000 j \approx \frac{n^2}{2000} = \Theta(n^2).$$

**Quadratic for any constant increment**, however large.

(c) At $n = 10^6$: doubling costs about $1.05\times10^6$ copies (≈1 per append); adding 1000 costs about $5\times10^8$ — a factor of roughly **480**.

(d) Amortized $\Theta(1)$ guarantees that **every** sequence of $n$ appends costs $O(n)$ in total, with the constant independent of $n$ and of the sequence. It is a worst-case statement about the aggregate, with no probability in it.

It guarantees **nothing about any individual append**: the one that triggers a reallocation copies the whole array, $\Theta(n)$, and that worst case grows without bound as the array grows. If the requirement is tail latency rather than throughput, this is the wrong guarantee and pre-allocating to a known capacity is the fix.

</details>

## Connections

- **Backward:** the ring buffer is [Lesson 2.2's](02-02-arrays-and-dynamic-arrays.md) "move the window, not the data", and the two-stack queue reuses its amortization argument. The linked backing is [Lesson 2.3's](02-03-linked-lists.md) list with a tail pointer, and this lesson answers [Lesson 2.1's](02-01-abstract-data-types-and-interfaces.md) question of how to escape a cost-vector trade: narrow the interface.
- **Forward:** [4.2](04-02-graphs-representations-and-traversal.md)'s BFS and DFS are the *same loop* with a queue and a stack respectively — the clearest instance in the course of a container determining an algorithm. [4.3](04-03-recursion-revisited-backtracking.md)'s backtracking is a stack made explicit, and [3.3](03-03-heaps-and-priority-queues.md)'s priority queue is a queue whose order is by priority rather than arrival.
- **Sideways:** the call stack of [Lesson 1.3](01-03-recursion-and-the-call-stack.md) is this structure implemented in hardware — which is why any recursion can be rewritten as a loop with an explicit stack. Ring buffers are the standard mechanism for network packet queues and audio buffers in [`computer-networks`](../../computer-networks/syllabus.md) and [`operating-systems`](../../operating-systems/syllabus.md), where the bounded, allocation-free, wrap-around design is exactly what a real-time path needs.
