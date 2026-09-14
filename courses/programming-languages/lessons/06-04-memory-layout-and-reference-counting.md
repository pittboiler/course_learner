# Programming Languages · Lesson 6.4: Memory layout, allocation and reference counting

> ⏱ ~15 min · Module 6: Runtime · Builds on: [6.2 (state and the store)](06-02-state-references-and-the-store.md), [5.6 (ownership and linearity)](05-06-ownership-linearity-and-borrow-checking.md) · Unlocks: [6.5 (tracing garbage collection)](06-05-tracing-garbage-collection.md), [7.6 (code generation)](07-06-code-generation-and-the-back-end.md)

## Why this matters

[Lesson 6.2](06-02-state-references-and-the-store.md) introduced a store $\sigma : \mathrm{Loc}\to\mathrm{Value}$ and said nothing about removing entries from it. A real machine has finite memory, so somebody must decide when a location can be reused, and [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md)'s axis 5 named the four candidates: you, a counter, a collector, or the type system. [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md) did the last; this lesson does the first two and the layout they operate on, and [Lesson 6.5](06-05-tracing-garbage-collection.md) does the third.

The layout half is not background detail. **Whether a value goes on the stack or the heap is decided by a compile-time analysis, and the answer determines whether its deallocation is free or a problem** — so the two halves of this lesson are the same question asked twice.

## The idea

**The stack is free because of a structural fact.** Calls nest: if `outer` calls `inner`, then `inner` returns before `outer` does. So the lifetimes of activation records are perfectly nested — last in, first out — and "deallocate" is one register move that pops the top. No search, no bookkeeping, no fragmentation.

**The heap is hard because nothing is nested.** A heap object's lifetime is whatever the program's references make it, so freeing requires knowing that nobody still refers to it. That knowledge is not local, and every memory-management strategy is an answer to how to obtain it.

**What decides which?** A value may live on the stack exactly when its lifetime is contained in its frame's. A compiler proves this with **escape analysis**: if a reference to the value can be observed after the frame dies — returned, stored in a heap object, or captured by an escaping closure — the value **escapes** and must be heap-allocated. Otherwise it is stack-allocated, or kept purely in registers.

**Reference counting** is the simplest heap answer: store a count with each object, increment on every new reference, decrement on every dropped one, and free at zero. It is prompt, it is local, and it cannot collect cycles.

## The formal version

**Activation record (stack frame).** On a call, push a record containing the return address, the saved frame pointer, the arguments, the local variables, and spilled registers. On return, pop it. The frame pointer chains records into the call stack, and the whole mechanism costs a few instructions per call.

**Escape analysis, by cases.** A value escapes its frame if any of:

- a reference to it is **returned**;
- a reference is **stored into** a heap object or a global;
- it is **captured by a closure** that itself escapes ([Lesson 6.1](06-01-names-scope-and-closures.md) — the captured environment must outlive the defining call, which is exactly why closures allocate);
- a reference is **passed to** a function that might do any of the above (so the analysis is interprocedural, or conservative).

Being unable to prove a value does not escape forces heap allocation, so the analysis is **sound but incomplete** in the by-now-familiar direction: it may heap-allocate something that would have been safe on the stack, never the reverse. Java's HotSpot does this to stack-allocate short-lived objects, and Go's compiler will report its decisions with `-gcflags=-m`.

**Reference counting.** Each object carries $\mathrm{rc}$.

$$\mathrm{rc}{+}{+} \text{ on creating a reference} \qquad \mathrm{rc}{-}{-} \text{ on destroying one} \qquad \mathrm{rc} = 0 \Rightarrow \text{free, and decrement its children}$$

The last clause is why freeing one object can cascade.

**Its three properties, and they are the whole story.**

1. **Prompt.** An object is freed at the exact instruction its last reference dies. This is a genuine advantage: destructors run deterministically, so a file handle closes when it goes out of scope. C++'s RAII, Rust's `Rc`, Swift's ARC and Python's primary mechanism all rely on it.
2. **Expensive in the aggregate.** Every reference assignment costs an increment and a decrement, and in a multithreaded program those must be *atomic*, which is an order of magnitude worse. Counting is spread across the whole program rather than concentrated in a collector.
3. **It cannot collect cycles.** Two objects referring to each other keep each other's count at one, forever, even when nothing else refers to either.

**The cycle problem, precisely.** Let $A$ point to $B$ and $B$ point to $A$, with a root pointing to $A$. Then $\mathrm{rc}(A) = 2$ and $\mathrm{rc}(B) = 1$. Drop the root: $\mathrm{rc}(A)$ falls to 1, not 0, so nothing is freed and $B$'s count is never touched. **Both leak, and no local decrement can discover it** — the counts are individually correct and collectively wrong, because a count records *how many* references exist and not *where they come from*.

The standard repairs: **weak references** (a reference that does not contribute to the count, used to break a known cycle by hand — Rust's `Weak`, Swift's `weak`/`unowned`, and P3(b) of [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md)'s doubly linked list), or a **backup tracing collector** run occasionally to catch what counting missed. CPython does exactly the latter: reference counting for everything, plus a cycle detector.

## Picture

![Two panels. The left, labelled STACK, shows three nested activation records stacked vertically -- main, outer and inner -- with an arrow beside them annotated grows and pops. The right, labelled HEAP, shows six circles scattered with no order, annotated no order, freed on demand. Below, text states that a stack frame dies exactly when its call returns so deallocation is free -- one register move -- and that anything outliving its call must go on the heap, where somebody has to decide.](assets/06-04-fig1.svg)

The left panel has a structure and the right does not, and that is the entire difference in cost. The stack's discipline is imposed by the call graph for free; the heap has no such discipline available, so every strategy in this lesson and the next is an attempt to manufacture one.

## Worked examples

**Example 1 (mechanical): escape analysis on four functions.**

| function | escapes? | allocation |
|---|---|---|
| `f() { let p = Point(1,2); return p.x }` | **no** — only a field's value leaves | stack (or registers) |
| `g() { let p = Point(1,2); return p }` | **yes** — the reference is returned | heap |
| `h(v) { let p = Point(1,2); v.push(p); }` | **yes** — stored into a heap object | heap |
| `k() { let p = Point(1,2); return \_ -> p.x }` | **yes** — captured by an escaping closure | heap |

The first and second differ by one character and by an allocation. The fourth is [Lesson 6.1](06-01-names-scope-and-closures.md)'s point arriving as a cost: **a closure's captured environment must outlive the defining call, so capture forces heap allocation** — which is why a closure over a large structure is a memory hazard, and why Go's compiler reports "moved to heap" for exactly these cases.

**Example 2 (why you'd care): counting a heap, and where it fails.** Take the heap of Boss problem 6: $A\to B$, $B\to C$, $C\to B$, $D\to E$, $E\to D$, $F$ isolated, with the single root $A$.

*Counts while $A$ is rooted:*

| object | rc | contributors |
|---|---|---|
| $A$ | 1 | the root |
| $B$ | 2 | $A$ and $C$ |
| $C$ | 1 | $B$ |
| $D$ | 1 | $E$ |
| $E$ | 1 | $D$ |
| $F$ | **0** | nothing |

**$F$ is freed immediately** — its count reached zero the moment its last reference died, with no collection cycle, and that promptness is reference counting's selling point.

*Now drop the root.* $\mathrm{rc}(A)$ falls to 0, so $A$ is freed and $B$ is decremented to 1. **And there it stops.** $B$'s remaining reference is from $C$, and $C$'s is from $B$ — the live chain contained a cycle, so counting frees $A$ and leaks $B$ and $C$. $D$ and $E$ were already unreachable and already leaking.

**Final tally: reference counting frees $F$ promptly and $A$ on the drop, and leaks $B$, $C$, $D$ and $E$.** Tracing ([Lesson 6.5](06-05-tracing-garbage-collection.md)) frees $D$, $E$ and $F$ while $A$ is rooted and everything once it is dropped, because it asks *reachable from a root?* rather than *how many references?* — and reachability is insensitive to cycles.

**The design conclusion.** Reference counting alone is sufficient only where cycles cannot occur, which is why it works so well for the tree-shaped data ownership types encourage ([Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md)) and why every language that relies on it either exposes weak references (Swift, Rust) or ships a cycle detector as well (CPython). **It is not a weaker collector; it is a different trade** — prompt and incremental, versus complete and batched.

## Watch out

- **You might think** stack allocation is an optimization the programmer controls — **but actually** in most managed languages it is a compiler decision driven by escape analysis, and a small source change (returning the object instead of a field) silently moves it to the heap. Reading your compiler's escape report is the only reliable way to know.
- **You might think** reference counting is simpler than tracing and therefore cheaper — **but actually** its cost is *higher* in aggregate for allocation-heavy programs, because every pointer assignment pays, and atomically so when shared between threads. What it buys is not throughput but **promptness and predictability**: no pauses, and destructors at deterministic points.
- **You might think** a cycle is a rare pathology — **but actually** doubly linked lists, parent pointers in trees, observer registrations and any cyclic object graph all produce them, and they are common enough that no production system relies on counting alone.

## One-liner

> A stack frame's lifetime is settled by the call graph, so freeing it is one instruction — everything that outlives its call goes on the heap, where a reference count buys promptness and locality and cannot see a cycle.

## Problems

**P1 (🟢)** For each, say whether the value escapes and therefore where it is allocated.

(a) `fn a() -> i32 { let v = vec![1,2,3]; v.len() as i32 }`
(b) `fn b() -> Vec<i32> { let v = vec![1,2,3]; v }`
(c) `fn c(g: &mut Vec<Vec<i32>>) { let v = vec![1,2,3]; g.push(v); }`
(d) `fn d() -> impl Fn() -> usize { let v = vec![1,2,3]; move || v.len() }`

**P2 (🟡)** A heap has objects $P, Q, R, S$ with $P\to Q$, $Q\to R$, $R\to Q$, and $S$ isolated. The roots are $\{P\}$.

(a) Give the reference count of each object.
(b) Say which objects a reference-counting collector frees while $P$ is rooted.
(c) The root is now dropped. Give the objects freed and the objects leaked, with the reason.
(d) State the smallest change to the heap's edges that would let reference counting reclaim everything, and say what it costs.

**P3 (🔴)** A designer proposes reference counting with **deferred** decrements: increments happen immediately, decrements are pushed onto a buffer and applied in a batch when the buffer fills.

(a) State one performance advantage of this.
(b) Give a concrete way the observable behaviour changes, referring to the property named in the Formal version as reference counting's main advantage.
(c) State whether the cycle problem is affected.
(d) A colleague concludes that with deferred decrements you may as well use tracing. Assess this in two sentences, naming what deferred counting still provides that tracing does not.

<details>
<summary>Solutions</summary>

**P1**

(a) **Does not escape.** Only `v.len()`, an `i32`, leaves the function; no reference to the vector survives the frame. The vector's *buffer* is a heap allocation in Rust regardless (a `Vec` always owns heap storage), but the `Vec` struct itself — the pointer, length and capacity — lives on the stack and is dropped at the end of the frame. **Stack**, with a heap buffer freed deterministically on drop.

(b) **Escapes** — the `Vec` is returned, so ownership moves to the caller and the value must outlive the frame. In Rust this is a *move* of the three-word struct, and the buffer it points at was already on the heap; in a garbage-collected language the object itself would be heap-allocated for this reason.

(c) **Escapes** — a reference is stored into `g`, which the caller owns, so the value's lifetime is now the caller's. Heap.

(d) **Escapes** — `v` is captured by a `move` closure that is returned, so the captured environment must outlive the call. **This is the closure case**, and it is why returning a closure always costs an allocation for its environment: the environment is precisely [Lesson 6.1](06-01-names-scope-and-closures.md)'s captured bindings, and they cannot live on a dead frame.

**P2**

(a) Count the incoming references, including the root:

| object | rc | from |
|---|---|---|
| $P$ | 1 | the root |
| $Q$ | 2 | $P$ and $R$ |
| $R$ | 1 | $Q$ |
| $S$ | **0** | nothing |

(b) **$S$ only.** Its count is zero, so it is freed immediately, with no collection cycle needed — the promptness property.

Nothing else can be freed: $P$ is rooted, and $Q$ and $R$ both have live incoming references.

(c) Dropping the root decrements $P$ to 0, so **$P$ is freed**, and freeing it decrements its child $Q$ from 2 to 1. The cascade stops there: $Q$'s remaining reference is from $R$, and $R$'s is from $Q$.

**Freed: $P$ (and $S$, earlier). Leaked: $Q$ and $R$.**

The reason: $Q$ and $R$ form a cycle, so each keeps the other's count above zero. Their counts are individually correct — there really is one reference to each — and collectively meaningless, because both references originate inside the unreachable region. A count records *how many* references exist, never *where they come from*, and that is exactly the information needed to detect this.

(d) **Remove the edge $R\to Q$** — one edge, the back edge closing the cycle.

Then $\mathrm{rc}(Q) = 1$ (from $P$ alone) and $\mathrm{rc}(R) = 1$ (from $Q$). Dropping the root frees $P$, which decrements $Q$ to 0, which frees $Q$ and decrements $R$ to 0, which frees $R$. **The whole structure is reclaimed by cascade**, because the reference graph is now a tree and the counts are a correct summary of reachability on a tree.

What it costs: $R$ can no longer reach $Q$. If the program needed that traversal — a parent pointer, a back link, an observer's reference to its subject — the edge was carrying real information, and removing it means finding another way to get it. The standard substitute is a **weak reference**: keep the link for traversal but exclude it from the count, so $\mathrm{rc}(Q)$ stays 1 and the cascade works. The cost of *that* is that the link may dangle, so every use must check whether the target is still alive — which is a run-time check, and a possible failure, at every traversal.

**P3**

(a) **It removes the cost from the hot path and amortizes it.** An immediate decrement on every dropped reference means a read-modify-write per pointer assignment, and in a multithreaded program an *atomic* one, which is expensive and contended. Buffering turns many scattered decrements into one batch, which has better cache behaviour and — the bigger win — lets non-atomic buffering replace atomic counting, since the buffer can be thread-local and drained under one synchronization rather than one per reference.

(b) **Promptness is lost.** An object whose last reference dies is no longer freed at that instruction; it is freed when the buffer is next drained, which may be much later or, at program exit, never.

The concrete consequence is about **destructors**: a file handle, a database connection or a mutex guard relying on "freed when the last reference dies" now closes at an unpredictable point. That breaks RAII — `with`-block semantics, deterministic `close()`, releasing a lock on scope exit — which is the single property that made reference counting attractive in C++, Swift and Python in the first place.

(It also raises peak memory, since dead objects linger until the drain.)

(c) **No — the cycle problem is entirely unaffected.**

Deferral changes *when* a decrement is applied, not *what* it computes. A cyclic group's counts never reach zero under immediate decrements, and applying the same decrements later yields the same counts. Cycles still leak, and a backup tracing collector or weak references are still required.

(d) The colleague has a real point and overstates it. Deferring decrements does surrender promptness — the property that distinguished counting from tracing — and reintroduces a batched, pause-like phase, so the two designs converge considerably; and since cycles still leak, deferred counting has given up its advantage while keeping its main disadvantage.

What it still provides that tracing does not: **the cost is proportional to the garbage, not to the live set.** A tracing collector's work scales with how much is *reachable*, so a program with a large live heap pays on every cycle even when almost nothing died; a counting collector touches only objects whose counts changed, so a program with a big stable working set and little churn does very little work. It also needs no heap headroom, no read or write barrier for the basic scheme, and no global stop-the-world phase — the drains are bounded and incremental, which keeps the *worst-case* pause short even though promptness is gone. That is why deferred and coalesced reference counting is a real production technique rather than a compromise nobody ships.

</details>

## Flashback

**From Lesson 3.4 (Evaluation strategies):** Call-by-need substitutes a **thunk** — a heap cell holding either an unevaluated term with its environment, or the value once forced — and all copies of the parameter share that one cell.

(a) State why a thunk must be heap-allocated, using this lesson's escape criterion.
(b) [Lesson 3.4](03-04-evaluation-strategies.md) noted that laziness has a space-leak problem strict languages do not. Explain it in terms of what a reference count or a collector can see.

<details>
<summary>Solution</summary>

(a) Because a thunk **escapes** the frame that created it, on two of the four counts.

It is created when a function is applied, and it is substituted into the body — so a reference to it is stored wherever the parameter occurs, and it must survive until the last of those occurrences is forced. Since the body may return the thunk, store it in a data structure, or capture it in a closure, the thunk's lifetime is not contained in the caller's frame.

Sharper still: a thunk *is* a closure — it holds an unevaluated expression together with the environment its free variables need, which is exactly [Lesson 6.1](06-01-names-scope-and-closures.md)'s closure record. Example 1's fourth row already established that a captured environment forces heap allocation, and the same argument applies unchanged.

(b) Because **a thunk retains everything its captured environment refers to, and neither a count nor a collector can tell that forcing it would release most of that.**

The mechanism: an unforced thunk holds an environment, which holds references to whatever the deferred expression mentions. A collector asks only "is this reachable?", and the answer is yes — the thunk is live, so its environment is live, so everything the environment points at is live. A reference count says the same thing for the same reason.

The classic instance is [Lesson 3.4](03-04-evaluation-strategies.md)'s `foldl (+) 0 [1..1000000]`. The accumulator is never forced, so the heap holds a chain of a million unforced additions, each retaining its operands — linear space for a computation whose *result* is one machine word. A strict evaluator would have collapsed each step to a number immediately, and the whole thing runs in constant space.

The crucial point is that **no amount of collector cleverness fixes this**, because the retained data genuinely *is* reachable: the thunk could still be forced, and forcing it needs its operands. The collector is not being conservative or imprecise — it is correct. The only fix is to force earlier, which is why the repair is a strictness annotation (`foldl'`, a bang pattern) or a compiler strictness analysis ([Lesson 7.5](07-05-abstract-interpretation.md)) that proves the value will be needed and evaluates it eagerly. **The leak is a property of the evaluation strategy, not of the memory manager**, which is why it belongs to [Lesson 3.4](03-04-evaluation-strategies.md)'s trade and shows up here only as a symptom.

</details>

## Connections

- **Backward:** the store of [Lesson 6.2](06-02-state-references-and-the-store.md) is what needs entries removed, and closures ([Lesson 6.1](06-01-names-scope-and-closures.md)) are the standard reason a value escapes its frame. Reference counting is the run-time fallback [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md) P3(b) reached for when static ownership could not express a cyclic structure.
- **Forward:** [Lesson 6.5](06-05-tracing-garbage-collection.md) is the third answer, which trades promptness for completeness and handles the cycles counting cannot. Activation-record layout and the calling convention are [Lesson 7.6](07-06-code-generation-and-the-back-end.md)'s concern.
- **Sideways:** escape analysis is a program analysis in exactly [Lesson 7.5](07-05-abstract-interpretation.md)'s sense — sound, incomplete, and deliberately erring toward the heap — and the "prompt and incremental versus batched and complete" trade recurs whenever a system must reclaim a shared resource.
