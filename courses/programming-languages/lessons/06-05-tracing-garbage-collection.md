# Programming Languages · Lesson 6.5: Tracing garbage collection

> ⏱ ~15 min · Module 6: Runtime · Builds on: [6.4 (memory layout and reference counting)](06-04-memory-layout-and-reference-counting.md), [6.1 (names, scope and closures)](06-01-names-scope-and-closures.md) · Unlocks: [7.1 (the compiler pipeline)](07-01-the-compiler-pipeline-and-irs.md), [7.6 (code generation)](07-06-code-generation-and-the-back-end.md)

## Why this matters

[Lesson 6.4](06-04-memory-layout-and-reference-counting.md) ended with a specific failure: reference counting asks *how many references point here?*, which is a local question with a cheap answer and the wrong answer for cycles. Tracing asks a different question — *can the program still get here?* — and that one question dissolves the cycle problem entirely, because reachability does not care about the shape of the graph.

The cost is that reachability is a **global** property, so answering it means walking the heap, which is why tracing collectors have pauses and reference counting does not. Everything else in this lesson — copying, generational collection, write barriers — is engineering aimed at that one cost, and knowing which technique attacks which part of it is what lets you read a GC tuning flag and predict what it will do.

This is the last of [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md)'s axis-5 answers, and it completes the set: manual, ownership ([Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md)), counting ([Lesson 6.4](06-04-memory-layout-and-reference-counting.md)), tracing.

## The idea

**The criterion is reachability, not liveness.** An object is *live* if the program will use it again — undecidable, by Rice's theorem ([`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)). An object is *reachable* if a path of pointers leads to it from a **root**, and that is a graph traversal. Every collector uses reachability as a **conservative approximation** of liveness: reachable-but-never-used objects are retained, which wastes memory and is safe, while unreachable objects are provably never used, so freeing them is sound.

That is the same sound-but-incomplete bargain as every type system in this course, made in the same direction.

**Roots** are the places a program can start following pointers from: the machine registers, the stack frames' local variables, the global variables, and — a detail [Lesson 6.1](06-01-names-scope-and-closures.md) makes inevitable — every live closure's captured environment.

**Three algorithms, three answers to "and then what?"**

- **Mark and sweep:** mark everything reachable, then walk the whole heap freeing what is unmarked. Simple, leaves the survivors where they are, and therefore fragments.
- **Copying (Cheney):** copy the reachable objects into a fresh space and abandon the old one. Compacts for free, allocation becomes a pointer bump, and it costs double the address space.
- **Generational:** collect the young objects often and the old ones rarely, on the empirical grounds that most objects die young.

## The formal version

**Mark and sweep.**

$$\textbf{mark: } W \leftarrow \text{roots};\quad \textbf{while } W \ne \emptyset:\ o \leftarrow \mathrm{pop}(W);\ \textbf{if } o \text{ unmarked}:\ \mathrm{mark}(o);\ W \leftarrow W \cup \mathrm{fields}(o)$$

$$\textbf{sweep: } \textbf{for each } o \text{ in the heap}:\ \textbf{if } \mathrm{marked}(o)\ \text{then unmark else free}$$

Mark costs $O(\text{live})$; sweep costs $O(\text{heap})$. **The survivors do not move**, which is why the free space ends up scattered — *fragmentation* — so a later large allocation can fail even though the total free space is ample.

**Copying (Cheney's algorithm).** Divide the heap in two. Allocate only in *from-space*. On collection, copy each reachable object into *to-space*, leaving a **forwarding pointer** behind so the second reference to an object finds the new address instead of copying it again. Cheney's trick is to use to-space itself as the work queue: a `scan` pointer chases an `alloc` pointer, and the traversal finishes when they meet — a breadth-first walk needing **no auxiliary stack**.

$$\text{cost } O(\text{live}) \text{ only; free space is contiguous; allocation is a pointer bump}$$

**Nothing is proportional to the garbage.** A copying collector never touches a dead object, so a heap that is 95% garbage collects almost instantly. In exchange it needs twice the address space and moves every survivor, which invalidates every raw pointer the program holds — the reason a language with a copying collector cannot casually hand addresses to C.

**Generational collection.** The **weak generational hypothesis**: *most objects die young*. It is an empirical claim, and it holds strongly for the allocation patterns of functional and object-oriented programs — short-lived temporaries, intermediate lists, boxed values.

So split the heap by age. Collect the **nursery** frequently with a copying collector (cheap, because almost everything there is dead and cost is $O(\text{live})$); promote survivors to an older generation collected rarely.

**The problem this creates, and the barrier that fixes it.** Collecting the nursery alone requires knowing which nursery objects are reachable — including from **old-to-young pointers**, which a nursery-only trace would never see. Scanning the whole old generation to find them would defeat the purpose.

The fix is a **write barrier**: a few instructions inserted by the compiler on *every* pointer store, recording any store of a young reference into an old object. Those records (a card table or remembered set) are treated as extra roots.

$$\text{cost: a small tax on every pointer write, paid by the whole program, so that collections stay cheap}$$

That is the trade to remember: **generational collection moves cost from the collector into the mutator**, which is usually a large net win and is never free.

**The two axes you actually tune.** *Throughput* (fraction of total time not collecting) versus *pause time* (longest single stop). Batch collectors maximize throughput with long pauses; concurrent and incremental collectors (Go's, Java's ZGC and Shenandoah) shorten pauses by doing most of the work alongside the program, paying with barriers and lower throughput. **You cannot maximize both**, and which you want is a property of your application, not of the collector.

## Picture

![Six circular nodes. A, B and C are drawn in one colour and D, E and F in another. An arrow labelled root points into A. Edges run from A to B, B to C, C back to B, D to E and E back to D. F has no edges. Beneath, two labels: MARKED live A, B, C; and SWEPT D, E, F. A caption notes that the live set contains its own cycle -- B and C -- and tracing handles it, because reachability rather than counting is the criterion, and that F has reference count zero and is the only thing counting frees.](assets/06-05-fig1.svg)

The live set $\{A, B, C\}$ **contains a cycle**, $B \leftrightarrow C$, and the collector is untroubled: it marked $B$ from $A$, marked $C$ from $B$, and found $B$ already marked when it followed $C$'s edge. The dead set contains a cycle too, $D \leftrightarrow E$, and it is reclaimed. **Reachability is insensitive to cycles in both directions**, which is exactly what reference counting could not manage.

## Worked examples

**Example 1 (mechanical): run all three on one heap.** The Picture's heap: $A\to B$, $B\to C$, $C\to B$, $D\to E$, $E\to D$, $F$ isolated, root $\{A\}$.

*Mark and sweep.* Breadth-first from the roots:

| step | pop | mark | queue after |
|---|---|---|---|
| 1 | $A$ | $A$ | $B$ |
| 2 | $B$ | $B$ | $C$ |
| 3 | $C$ | $C$ | $B$ (already marked, skipped) |

Mark order $A, B, C$; live set $\{A,B,C\}$. Sweep walks all six and frees **$D$, $E$, $F$**.

*Reference counting, for contrast.* Counts are $A{:}1$, $B{:}2$, $C{:}1$, $D{:}1$, $E{:}1$, $F{:}0$. It frees **$F$ only** — promptly, with no collection — and leaks $D$ and $E$ forever. Three objects reclaimed versus one, and the difference is entirely the two cycles.

*Copying.* To-space fills in scan order: $A$ at offset 0, $B$ at 1, $C$ at 2. When $C$'s edge to $B$ is scanned, $B$'s forwarding pointer is found and the reference is updated rather than $B$ being copied twice. **To-space holds exactly $[A, B, C]$, contiguous**, from-space is abandoned wholesale, and $D$, $E$ and $F$ were never touched at all.

**Example 2 (why you'd care): why the nursery is nearly free.** Suppose a program allocates 1000 short-lived objects and 10 survive to be promoted.

*Copying collection of the nursery* costs $O(\text{live}) = O(10)$. The 990 dead objects are never examined — not marked, not swept, not freed. Resetting the nursery is one pointer assignment.

*Mark-and-sweep over the same region* costs $O(\text{live})$ to mark plus $O(\text{heap}) = O(1000)$ to sweep, because the sweep must visit every object to discover it is unmarked.

**A hundredfold difference in the work, from the same reachability information** — and it is why generational collectors put a copying collector in the nursery specifically. The hypothesis that most objects die young is exactly the hypothesis that makes $O(\text{live})$ much smaller than $O(\text{heap})$ there.

**And the bill.** Every pointer store in the whole program now executes a write barrier, whether or not it is the rare old-to-young store the barrier exists to catch. A tight loop writing references pays on every iteration. So the accounting is: **the collector got dramatically cheaper and the mutator got slightly more expensive**, and generational collection wins whenever the collector's saving exceeds the barrier's spread-out cost — which for typical allocation-heavy programs it does by a wide margin, and for a program that allocates almost nothing and writes many pointers it may not.

## Watch out

- **You might think** a collector frees objects the program will not use again — **but actually** it frees *unreachable* objects, and reachable-but-dead ones are retained. A stale entry in a global cache, a listener never unregistered, or a closure capturing a large structure ([Lesson 6.1](06-01-names-scope-and-closures.md)) is a memory leak in a garbage-collected language, and a common one.
- **You might think** a copying collector wastes half the memory — **but actually** it needs twice the *address space*, not twice the resident memory, and in exchange allocation becomes a pointer bump and fragmentation disappears. On a 64-bit machine address space is cheap; the real costs are moving survivors and invalidating raw pointers.
- **You might think** "garbage collection is slow" is a useful claim — **but actually** the two axes are throughput and pause time, and they trade against each other. A batch collector can beat manual allocation on throughput for allocation-heavy workloads while being unusable for a real-time system, and a low-pause collector gives back throughput to get there.

## One-liner

> Ask *reachable from a root?* instead of *how many references?* and cycles stop being a problem — at the price of a global traversal, which copying makes proportional to the survivors and generational collection makes rare, by taxing every pointer write.

## Problems

**P1 (🟢)** A heap has $R_1 \to X$, $X \to Y$, $Y \to Z$, $Z \to X$, $P \to Q$, $Q \to P$, and $W$ isolated. Roots are $\{R_1\}$; $R_1$ is a root object, not in the heap.

(a) Give the mark order from a breadth-first traversal.
(b) Give the live set and the swept set.
(c) Give the reference count of each heap object.
(d) Say which objects a reference-counting collector frees, and which it leaks.

**P2 (🟡)** For each scenario, say which collector performs better and why, in one sentence each.

(a) A heap of 1 GB in which 990 MB is garbage at collection time.
(b) A heap of 1 GB in which 990 MB is live at collection time.
(c) A program that allocates heavily in a loop, with almost every object dying immediately.
(d) A program that allocates almost nothing but writes references between long-lived objects constantly.

**P3 (🔴)** A team's service has a 200 ms pause every 30 seconds and a 99th-percentile latency requirement of 50 ms.

(a) Name the two tuning axes and say which one they are failing.
(b) Give two distinct changes that would reduce the pause, and state what each costs.
(c) The team discovers memory use grows steadily despite the collector running. Name the most likely cause and say why a collector cannot fix it.
(d) A colleague proposes switching to reference counting to eliminate pauses. Give the two things this would break, referring to [Lesson 6.4](06-04-memory-layout-and-reference-counting.md).

<details>
<summary>Solutions</summary>

**P1**

(a) Breadth-first from $R_1$: pop $R_1$, enqueue $X$; pop $X$, mark it, enqueue $Y$; pop $Y$, mark it, enqueue $Z$; pop $Z$, mark it, enqueue $X$ — already marked, skipped.

**Mark order: $X, Y, Z$.**

(b) **Live: $\{X, Y, Z\}$. Swept: $\{P, Q, W\}$.**

Note the live set contains the cycle $X\to Y\to Z\to X$ and the dead set contains the cycle $P\leftrightarrow Q$. Both are handled without comment, which is the property being demonstrated.

(c) Counting incoming references:

| object | rc | from |
|---|---|---|
| $X$ | 2 | $R_1$ and $Z$ |
| $Y$ | 1 | $X$ |
| $Z$ | 1 | $Y$ |
| $P$ | 1 | $Q$ |
| $Q$ | 1 | $P$ |
| $W$ | **0** | nothing |

(d) **Frees $W$ only** (count zero, promptly). **Leaks $P$ and $Q$** — a cycle with no external references, each keeping the other at 1.

And if the root $R_1$ were dropped, counting would *still* leak $X$, $Y$ and $Z$: $X$'s count would fall to 1, held by $Z$ from inside the cycle, and the cascade would stop. **Tracing reclaims five of six objects on a root drop; counting reclaims one, ever.**

**P2**

(a) **Copying wins decisively.** Its cost is $O(\text{live}) = O(10\ \mathrm{MB})$ and it never touches the 990 MB of garbage, whereas mark-and-sweep must sweep the entire 1 GB to discover what is unmarked.

(b) **Mark-and-sweep wins.** With 990 MB live, a copying collector must physically move nearly the whole heap — 990 MB of copying plus the pointer updates — while mark-and-sweep marks the same set without moving anything and sweeps the small remainder. Copying's advantage is proportional to how much is *dead*, and here almost nothing is.

(c) **A generational collector with a copying nursery wins.** This is the weak generational hypothesis holding perfectly: nursery collections cost $O(\text{live})$ with a tiny live set, the dead objects are never examined, and resetting the nursery is a pointer assignment.

(d) **A non-generational collector wins** — or at least, generational collection's advantage disappears. The program allocates little, so collections are rare and cheap regardless of the algorithm, but the write barrier taxes every one of the many pointer stores. The cost was moved into the mutator and the collector had nothing to save, so the trade is a net loss. (This is the case that keeps "generational is always better" from being true.)

**P3**

(a) The two axes are **throughput** (fraction of time not collecting) and **pause time** (longest single stop). They are failing **pause time**: a 200 ms stop blows a 50 ms p99 outright, and no amount of throughput compensates, because a single pause lands on whatever requests are in flight.

(Note the throughput is actually fine — 200 ms per 30 s is under 1% of wall time. This is the standard diagnostic: a healthy throughput number tells you nothing about tail latency.)

(b) *Accept criterion:* any two changes that genuinely shorten the maximum stop, each with its cost named.

1. **Switch to a concurrent or incremental collector** (Go's collector, Java's ZGC or Shenandoah). Most of the marking runs alongside the program, and the stop-the-world portion shrinks to a few milliseconds. *Cost:* lower throughput — the collector and mutator contend for CPU — plus read or write barriers on the mutator, and higher memory use since collection now races against allocation.

2. **Reduce the live set, or the allocation rate.** A copying collector's pause is $O(\text{live})$, so cutting the live heap cuts the pause proportionally; cutting the allocation rate makes collections less frequent. Concretely: object pooling, avoiding boxed values in hot paths, or moving a large stable cache out of the collected heap. *Cost:* programmer effort, and code that is harder to read — this is manual memory management leaking back in.

(A third: **shrink the nursery** so each young collection has less to scan. *Cost:* more frequent collections and more premature promotion, which pushes work into the expensive old-generation collections. Tuning heap sizes trades pause length against pause frequency, and it is not free in either direction.)

(c) **The most likely cause is a reachable-but-dead object graph** — a leak in the Watch-out sense. Typical culprits: an unbounded cache or map that is never evicted from, a listener or callback registered and never unregistered, a static collection accumulating entries, or a closure capturing a large structure and being retained ([Lesson 6.1](06-01-names-scope-and-closures.md)).

A collector cannot fix it because **the objects are genuinely reachable**. The collector's criterion is reachability, and reachability is a *correct* conservative approximation of liveness — a path of pointers leads from a root to every one of these objects, so freeing them would be unsound. The collector is not being imprecise; the program is still holding on.

The only fix is in the program: drop the references — evict from the cache, unregister the listener, null the field, or use a weak reference so the entry does not contribute to reachability. That the fix is a **weak reference** is the same mechanism [Lesson 6.4](06-04-memory-layout-and-reference-counting.md) offered for breaking a counting cycle, used here for the mirror-image problem.

(d) Two things it would break, both from [Lesson 6.4](06-04-memory-layout-and-reference-counting.md):

1. **Cycles would leak.** Any cyclic structure in the service — a doubly linked list, parent pointers, an observer holding its subject — is reclaimed by tracing today and would leak permanently under counting. Given (c) already shows the service has a memory-growth problem, adopting a scheme that *cannot* reclaim a whole class of garbage is precisely the wrong direction, and the team would need weak references everywhere or a backup tracing collector — reintroducing the pauses.

2. **The pauses would not actually disappear, and throughput would fall.** Every pointer assignment in the program pays an increment and a decrement, atomically if references cross threads, so the cost is spread over the whole program rather than removed. And freeing one object can cascade through an arbitrarily long chain, so dropping the root of a large structure produces an unbounded burst of frees — a pause, arriving unpredictably at a mutator instruction rather than at a collector safepoint, which is *harder* to reason about for tail latency, not easier.

The right move for a latency requirement is (b)'s first option: a concurrent collector, which attacks pause time directly and keeps reachability as the criterion.

</details>

## Flashback

**From Lesson 5.6 (Ownership, linearity and borrow checking):** Ownership types decide every deallocation at compile time, with no run-time cost and no collector — at the price of rejecting programs, the doubly linked list being the standard case.

(a) State what a tracing collector does with a doubly linked list, and why it is untroubled.
(b) [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md) P3(d) said the collector "pays for that" and pointed here. Give the two costs precisely, and say which one a real-time system cannot accept.

<details>
<summary>Solution</summary>

(a) A tracing collector handles it **without any special provision at all**. Each node is reachable from the list head, so the mark phase reaches every node by following `next` pointers; the `prev` pointers are simply additional edges that lead to already-marked nodes and are skipped. When the head becomes unreachable, the entire structure — back edges and all — becomes unreachable together and is reclaimed in one collection.

It is untroubled because **reachability is a property of the graph as a whole, not of any node's local edge count**. The `prev` pointers are exactly the edges that break reference counting (they hold every node's count above zero) and exactly the edges that cost tracing nothing, because reaching an already-marked node is a no-op. That asymmetry is the single clearest statement of why the two techniques differ: one asks a local question and the other a global one, and cycles are precisely where local information is insufficient.

Ownership's difficulty is different again: the structure has no tree of exclusive owners, so it violates the *static* discipline rather than any run-time counting — which is why [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md)'s repairs were to move the check to run time (`Rc`/`Weak`) or to abandon pointers for indices.

(b) The two costs:

1. **Run-time work proportional to the live set**, performed by a collector the program does not control. Marking costs $O(\text{live})$, sweeping $O(\text{heap})$, and the collector also needs **headroom** — a collected heap typically needs several times the live set to perform acceptably, because collection frequency rises sharply as the heap fills. Generational designs additionally tax every pointer store with a write barrier.

2. **Unpredictable latency.** Collections happen when the allocator decides, not when the program does, so a pause can land at any allocation — including in the middle of a request, an audio callback, or a control loop. P3 is exactly this: the throughput cost was under 1% and the service still failed its requirement.

**A real-time system cannot accept the second.** Throughput cost is budgetable — you can provision for a collector that uses 5% of CPU. A pause of unbounded and unpredictable length is not budgetable at all: a hard real-time deadline is a guarantee about the *worst* case, and "usually 2 ms, occasionally 200 ms" fails it however good the average is.

That is why embedded, automotive, audio and game-engine code gravitates to manual management or ownership types: both decide deallocation at points the program chooses, so the cost is where the programmer put it. It is also why low-pause concurrent collectors exist and why they trade away throughput to get there — they are buying back predictability, which is the currency that actually matters for these systems.

</details>

## Connections

- **Backward:** the cycle that defeated reference counting in [Lesson 6.4](06-04-memory-layout-and-reference-counting.md) is reclaimed here without comment, and closures' captured environments ([Lesson 6.1](06-01-names-scope-and-closures.md)) are roots — which is why a retained closure is a leak. This completes [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md)'s axis 5, alongside [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md).
- **Forward:** the write barrier is code the compiler inserts on every pointer store, so it is a code-generation concern ([Lesson 7.6](07-06-code-generation-and-the-back-end.md)), and the collector needs the compiler to tell it where the roots are — a stack map, emitted by the back end.
- **Sideways:** reachability as a conservative approximation of liveness is the same bargain as every type system in Module 4 and every analysis in [Lesson 7.5](07-05-abstract-interpretation.md) — undecidable property, decidable over-approximation, erring in the safe direction. The traversal itself is [`algorithms` 3.1](../../algorithms/lessons/03-01-graph-search-bfs-and-dfs.md)'s breadth-first search, with the heap as the graph.
