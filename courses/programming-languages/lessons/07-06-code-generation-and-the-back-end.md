# Programming Languages · Lesson 7.6: Code generation and the back end

> ⏱ ~15 min · Module 7: Compilation · Builds on: [7.5 (abstract interpretation)](07-05-abstract-interpretation.md), [7.2 (SSA)](07-02-control-flow-graphs-dominance-and-ssa.md) · Unlocks: — (final lesson)

## Why this matters

The last mile. You have an optimized IR full of virtual registers, phi-functions and abstract instructions, and a machine with sixteen real registers, no phi-functions, and a specific instruction set. Closing that gap is the back end.

Three problems live here, and each is genuinely hard in a different way. **Instruction selection** is a tiling problem — the machine may have one instruction doing what three IR instructions do, and finding those matches well is a tree-covering search. **Register allocation** is graph colouring, which is NP-complete, so the allocator is a heuristic that sometimes gives up and **spills** to memory. And the calling convention is a contract that must be honoured exactly, because the code on the other side was compiled separately.

There is also a piece of honesty owed at the end of the course: **a compiler cannot fix a bad algorithm.** Everything in Module 7 attacks constant factors, and knowing which costs it can and cannot remove is the practical payoff of having read it.

## The idea

**Instruction selection: cover the tree.** The IR says `t1 = b * c; t2 = a + t1`. If the machine has a fused multiply-add, one instruction covers both IR nodes. The task is to tile the IR with machine instructions at least cost, which is a dynamic program over the expression tree ([`algorithms` 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md)) — and an optimal one exists for trees, which is why compilers describe their targets with pattern-matching rules rather than hand-written emitters.

**Register allocation: colour the graph.** Two variables **interfere** if both are live at the same point ([Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)). Build a graph with variables as nodes and interference as edges; assigning $k$ registers with no two interfering variables sharing one is exactly a $k$-colouring. Graph colouring is NP-complete, so real allocators use Chaitin's heuristic — repeatedly remove a node with fewer than $k$ neighbours, colour the rest, then colour it — and **spill** a variable to memory when no such node exists.

**Phi elimination.** No machine has a phi-function, so each one becomes **copies at the ends of the predecessor blocks**: $x_3 \leftarrow \phi(x_1, x_2)$ becomes `mov x3, x1` at the end of the first predecessor and `mov x3, x2` at the end of the second. Most of these copies then disappear, because the allocator **coalesces** — if $x_1$ and $x_3$ do not interfere, give them the same register and the move is gone.

## The formal version

**Instruction selection as tiling.** Each machine instruction is a *tile*: a small IR pattern plus a cost. Cover the IR tree with tiles so every node is covered exactly once, minimizing total cost. On a tree this is solved optimally by dynamic programming in linear time; on a DAG (after CSE) it is NP-complete, so compilers use heuristics or restrict to trees.

**Interference and colouring.** Variables $u, v$ interfere if there is a program point where both are live — computed directly from [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)'s liveness sets. A $k$-colouring assigns each node one of $k$ registers with no edge joining same-coloured nodes.

**Chaitin's algorithm.** *(card: [chaitins register allocation](../reference.md#chaitins-register-allocation))*

1. **Simplify:** while some node has degree $< k$, remove it and push it on a stack. (A node with fewer than $k$ neighbours can always be coloured once the rest are.)
2. **Spill:** if every remaining node has degree $\ge k$, pick one to spill — by a heuristic, usually $\mathrm{degree}/\mathrm{uses}$, preferring high-degree variables used rarely — and remove it.
3. **Select:** pop the stack, assigning each node a colour differing from its already-coloured neighbours.

**Spilling** rewrites the variable to live in memory, with a load before each use and a store after each definition. It costs memory traffic and, importantly, **shortens live ranges**, which often makes the rest colourable — so spilling once can rescue the whole allocation.

**The calling convention.** A contract fixing which registers hold arguments, which hold the return value, which the callee must preserve (**callee-saved**) and which the caller must ([**caller-saved**]), plus the stack frame layout and alignment. It must be followed exactly, because the caller and callee may come from different compilers or languages — it is the ABI, and it is why a C function compiled by GCC can be called from Rust.

**Peephole optimization.** A final pass over short instruction windows, applying local rewrites: `mov r1, r1` deleted, `add r, 0` deleted, `mul r, 2` becoming a shift (*strength reduction*), two adjacent loads of the same address merged. Small, local, and worth a few percent.

**What a compiler cannot do.** It will not change your $O(n^2)$ algorithm into an $O(n\log n)$ one, will not fix a cache-hostile data layout, and will not parallelize a loop with a genuine dependence. **Optimization is a constant-factor business** — usually a large constant, sometimes 10× or more, and never a change of complexity class. The algorithm and the data layout are yours.

## Picture

![Five circular nodes labelled a, b, c, d and e, connected by edges: a to b, b to c, a to d, b to d, c to e, and d to e. The nodes are drawn in three different colours, with a and c sharing one, b and d sharing another, and e a third. Text below notes that two variables interfere when both are live at the same point, that a k-colouring assigns k registers with no two interfering variables sharing one, and that if none exists something spills to memory -- and choosing what to spill is the whole art.](assets/07-06-fig1.svg)

Five variables, six interference edges, and three colours suffice. Note that $a$ and $c$ share a register despite both being used — they simply are never live at the same time, so one register serves both. **That reuse is the entire point of allocation**, and it is why a function with fifty local variables can run in a dozen registers.

Chaitin's heuristic on this graph with $k = 3$: every node has degree $\le 3$, and $e$ has degree 2, so simplify removes $e$ first, then the rest cascade, and select colours them all with no spill.

## Worked examples

**Example 1 (mechanical): allocate registers for a loop.** From [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)'s liveness result, `i`, `n` and `s` are all live throughout the loop body.

*Interference graph:* all three pairwise edges — a triangle.

*With $k = 3$:* every node has degree 2 < 3, so simplify removes all three, and select assigns three distinct registers. **No spill**, and the loop runs entirely in registers.

*With $k = 2$:* every node has degree 2 = $k$, so simplify stalls immediately and something must spill. The heuristic picks by $\mathrm{degree}/\mathrm{uses}$: all three have degree 2, so the tie breaks on use count, and `n` — read once per iteration in the guard, never written — is the cheapest to reload. Spill `n`; the remaining graph is a single edge between `i` and `s`, colourable with 2.

**The cost:** one load of `n` per iteration. That is the honest accounting for register pressure, and it is why a hot loop with many live values is slower than its instruction count suggests.

**Example 2 (why you'd care): phi elimination and the copies that vanish.** From [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)'s loop:

```
B1:   i2 = phi(i0 from B0, i1 from B2)
```

Eliminate by inserting copies at the ends of the predecessors:

```
B0:   ...  ;  mov i2, i0
B2:   ...  ;  mov i2, i1
```

Two `mov` instructions where there were none. Now **coalescing**: if $i_0$ and $i_2$ do not interfere — and they do not, since $i_0$ is dead the moment $i_2$ is defined — give them the same register and the first `mov` disappears. Likewise for $i_1$.

**Both copies vanish, and all three SSA names share one register**, which is exactly the original pre-SSA variable `i`. The SSA renaming was a compiler-internal fiction and it has been undone.

**Why this is the right design nonetheless.** SSA made every analysis in [Lessons 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) and [7.4](07-04-classical-optimizations.md) cheaper and more precise, and coalescing removes the representational overhead afterwards. The names existed to let the optimizer reason; the machine never sees them.

**The caveat worth knowing:** coalescing and spilling pull in opposite directions. Coalescing merges live ranges, which *increases* interference degrees and can force a spill that would not otherwise happen; conservative coalescing rules (Briggs, George) exist precisely to merge only when it provably will not. This is the phase-ordering problem of [Lesson 7.4](07-04-classical-optimizations.md) appearing one last time, in the back end.

## Watch out

- **You might think** more optimization always produces faster code — **but actually** the passes interact. Aggressive CSE lengthens live ranges, which raises register pressure, which causes spills, which cost memory traffic — so a CSE that eliminates one addition can cost a load per iteration. Compilers weigh this, imperfectly.
- **You might think** phi-functions are free because they are notation — **but actually** eliminating them inserts real copies, and only coalescing removes them. Doing it correctly in the presence of interdependent phis (the "swap problem", where two phis each want the other's old value) requires a temporary, and getting it wrong is a classic back-end bug.
- **You might think** a good optimizer compensates for a poor algorithm — **but actually** no compiler changes asymptotic complexity. A 10× constant-factor win is a great result and still loses to an algorithm one complexity class better at any meaningful $n$. **The compiler owns the constants; you own the exponent.**

## One-liner

> Tile the IR with machine instructions, colour the interference graph to assign registers and spill when you cannot, turn the phis back into copies and coalesce them away — and remember the compiler is fighting for constant factors, never for a complexity class.

## Problems

**P1 (🟢)** Variables `a`, `b`, `c` have live ranges: `a` from instruction 1 to 5, `b` from 3 to 8, `c` from 6 to 10.

(a) Give the interference graph.
(b) Give the minimum number of registers needed.
(c) State which two variables can share a register, and why.

**P2 (🟡)** An interference graph has five nodes: `p` (degree 4), `q` (degree 3), `r` (degree 2), `s` (degree 2), `t` (degree 3), with `p` adjacent to all others.

(a) Run Chaitin's simplify phase with $k = 4$ and give the stack order.
(b) State whether any spill is needed at $k = 4$.
(c) Redo with $k = 3$: say where simplify stalls and which node the heuristic would spill, given that `p` is used twice and every other node is used ten times.

**P3 (🔴)** A hot loop runs in 100 ms. Profiling shows it is $O(n^2)$ with $n = 10{,}000$, and the compiler's optimizer is disabled.

(a) Enabling `-O2` brings it to 25 ms. State what kind of improvement this is and give two specific optimizations from Module 7 that plausibly contributed.
(b) Rewriting the algorithm to $O(n\log n)$ brings the unoptimized version to 2 ms. Give the approximate ratio of operation counts and say whether the compiler could ever have found this.
(c) State the general rule about what a compiler can and cannot improve.
(d) A colleague proposes spending a week on compiler flags rather than a day on the algorithm. Assess this, and name one circumstance in which they would nonetheless be right.

<details>
<summary>Solutions</summary>

**P1**

(a) Two variables interfere when their live ranges overlap.

- `a` [1,5] and `b` [3,8]: overlap on [3,5] — **interfere**.
- `b` [3,8] and `c` [6,10]: overlap on [6,8] — **interfere**.
- `a` [1,5] and `c` [6,10]: no overlap (`a` dies at 5, `c` is born at 6) — **do not interfere**.

Graph: a path $a - b - c$, with two edges.

(b) **Two registers.** The graph is a path, which is 2-colourable: give `a` and `c` one register and `b` the other. One register is impossible since `a` and `b` interfere.

(c) **`a` and `c` can share**, because their live ranges are disjoint — `a`'s last use is at instruction 5 and `c` is not defined until 6, so at no point does the machine need to hold both values. The register holding `a` is free from instruction 6 onward.

This is the whole mechanism of register allocation in miniature: **registers are reused across time**, and the interference graph is exactly the record of when that is impossible.

**P2**

(a) With $k = 4$, simplify removes any node of degree $< 4$.

| step | candidates (degree < 4) | removed | stack |
|---|---|---|---|
| 1 | `q`(3), `r`(2), `s`(2), `t`(3) | `r` | `r` |
| 2 | degrees drop for `r`'s neighbours | `s` | `r, s` |
| 3 | | `q` | `r, s, q` |
| 4 | | `t` | `r, s, q, t` |
| 5 | `p` now has degree 0 | `p` | `r, s, q, t, p` |

(Any order among the degree-$<4$ nodes is valid; the point is that removing nodes only lowers others' degrees, so once simplify starts it cascades.)

(b) **No spill is needed at $k = 4$.** Simplify emptied the graph, which is Chaitin's success condition: every node was removed at a moment when it had fewer than $k$ neighbours, so the select phase can pop the stack and always find a free colour — each node has at most 3 already-coloured neighbours and 4 colours are available.

(c) With $k = 3$, simplify removes nodes of degree $< 3$: `r`(2) and `s`(2) go first. Removing them lowers the degrees of their neighbours, including `p`.

After removing `r` and `s`, `p`'s degree falls from 4 to 2 (it keeps its edges to `q` and `t`), `q` and `t` lose any edges they had to `r` or `s`. Depending on the exact adjacency, simplify may continue — but take the case where it **stalls** with `p`, `q`, `t` all still at degree $\ge 3$: then a spill is required.

**The heuristic spills `p`.** The metric is $\mathrm{degree}/\mathrm{uses}$: `p` has degree 4 and 2 uses, giving $4/2 = 2$; every other node has degree $\le 3$ and 10 uses, giving at most $0.3$. `p`'s score is far higher, and the metric is designed to prefer exactly this profile — **high degree** (spilling it relieves the most interference) and **few uses** (each spill costs a reload, so a rarely-used variable is cheap to spill).

Spilling `p` removes it and all four of its edges, and the remaining four-node graph is easily 3-colourable.

**P3**

(a) This is a **constant-factor improvement** — a 4× speedup with the same $O(n^2)$ complexity. The work performed is unchanged asymptotically; each unit of it got cheaper.

Two plausible contributors, from Module 7:

- **Loop-invariant code motion** ([Lesson 7.4](07-04-classical-optimizations.md)): hoisting an address computation or a bound out of the inner loop turns $n^2$ evaluations into $n$.
- **Register allocation** ([this lesson](07-06-code-generation-and-the-back-end.md)): unoptimized code typically keeps every local in memory, so an inner loop is a stream of loads and stores; allocating the hot values to registers removes most of that traffic, and on its own often accounts for a 2–3× factor.

(Others: common-subexpression elimination removing a repeated address calculation, strength reduction turning a multiply into a shift, or constant propagation folding a loop bound.)

(b) At $n = 10{,}000$:

$$\frac{n^2}{n\log_2 n} = \frac{10^8}{10^4 \times 13.3} \approx \frac{10^8}{1.33\times 10^5} \approx \mathbf{750\times}$$

**No, the compiler could never have found this.** Changing $O(n^2)$ to $O(n\log n)$ means replacing the algorithm — a different sequence of operations computing the same result by a different method, such as sorting-then-scanning instead of comparing all pairs. A compiler's transformations are *meaning-preserving rewrites of the code you wrote*, and there is no sequence of folding, propagation, CSE, hoisting or scheduling that turns a nested loop over all pairs into a sort. It would have to know the mathematical structure of the problem, not just the semantics of the program.

(Note the measured numbers are consistent with this: 100 ms → 2 ms is 50×, not 750×, because the $O(n\log n)$ version has a larger constant. Complexity wins anyway, and wins by more as $n$ grows.)

(c) **A compiler improves constant factors; it does not change asymptotic complexity.**

It can make each operation cheaper — better instruction selection, fewer memory accesses, better use of registers and the cache — and the total win is frequently large, 2× to 10× and occasionally more. It cannot reduce the *number* of operations the algorithm specifies, because doing so would require reasoning about the problem rather than the program.

The division of labour: **you own the exponent, the compiler owns the constant.**

(d) The colleague is **wrong on the arithmetic and right about one thing worth naming.**

Wrong: a week of flag-tuning is bounded above by what the optimizer can do, which part (a) shows is a 4× constant factor already largely captured by `-O2`. Further flags might find another 20–50%. A day on the algorithm bought 50× — two orders of magnitude more, for one fifth of the effort — and the gap widens with $n$. The expected return is not close.

The circumstance in which they would be right: **when the algorithm is already optimal and the constant factor is where the remaining headroom is.** If the code is a well-chosen $O(n\log n)$ algorithm running at 10% of memory bandwidth, there is no better exponent available, and the remaining wins are precisely the compiler's business — vectorization flags, alignment, `-march=native` to use the target's actual instruction set, profile-guided optimization to improve branch layout and inlining decisions. Numerical kernels, codecs and database inner loops live here, and for them a week of careful flag and pragma work is entirely reasonable.

**The rule is to fix the exponent first and then tune the constant**, and the mistake the colleague is making is doing them in the wrong order — not thinking the second is worthless.

</details>

## Flashback

**From Lesson 7.2 (Control-flow graphs, dominance and SSA):** SSA gives every assignment its own name and inserts phi-functions at the iterated dominance frontier, and the Watch out noted that a phi is a fiction with no machine instruction behind it.

(a) State what happens to the SSA names by the end of the back end.
(b) SSA was introduced to make analyses cheaper and is entirely undone before code generation. State in two sentences why this is a good design rather than wasted work.

<details>
<summary>Solution</summary>

(a) **They are gone.** Phi elimination replaces each phi with copies in the predecessor blocks, and coalescing then merges the SSA names that do not interfere into a single register — typically recovering exactly the original pre-SSA variable, as Example 2 showed for $i_0, i_1, i_2$ all landing in one register holding `i`.

What survives into the machine code is a register assignment, not a name. The subscripts existed only inside the compiler, and by the time instructions are emitted there is no trace of them.

(b) It is a good design because **the representation was chosen for the consumer, and the consumers were the analyses** — SSA made constant propagation a local test, dead-code elimination a use-count check, and use-def chains free, which is a large saving across a dozen passes ([Lessons 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) and [7.4](07-04-classical-optimizations.md)). Undoing it costs one phi-elimination pass plus coalescing, which is cheap and mostly removes its own copies, so the compiler paid a small fixed cost once to make every intermediate pass simpler and more precise.

The general principle this illustrates, and it is the right note to end the course on: **a representation is a tool for a phase, not a commitment for the whole pipeline.** [Lesson 7.1](07-01-the-compiler-pipeline-and-irs.md) made the same point about IRs — real compilers use several at different heights, lowering as they go — and this course has watched the same program wear half a dozen representations: characters, tokens, a parse tree, an AST, a typed AST, three-address code, SSA, and finally machine instructions. Each one existed because it made one question easy to ask, and each was discarded when that question had been answered.

</details>

## Connections

- **Backward:** the interference graph is read off [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)'s liveness sets, the phis come from [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md), and the tension between CSE and register pressure is [Lesson 7.4](07-04-classical-optimizations.md)'s phase-ordering problem in the back end. The write barrier of [Lesson 6.5](06-05-tracing-garbage-collection.md) and the stack maps a collector needs are emitted here.
- **Sideways:** instruction selection on a tree is a dynamic program ([`algorithms` 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md)); register allocation is graph colouring, NP-complete ([`algorithms` 4.2](../../algorithms/lessons/04-02-the-np-complete-zoo.md)), so the allocator is a heuristic — one more sound-but-incomplete approximation in [Lesson 7.5](07-05-abstract-interpretation.md)'s sense, where failure means a spill rather than a wrong answer.

## Closing the course

You started with a string of characters and ended with machine instructions, and the route was seven changes of representation, each made to answer one question:

- **tokens** so that lexing could be a regular problem ([1.3](01-03-lexical-analysis-in-practice.md));
- an **AST** so that structure was explicit and syntax was not ([1.2](01-02-concrete-and-abstract-syntax.md));
- a **resolved tree** so that names meant something ([1.6](01-06-name-resolution-and-the-semantic-phase.md));
- **inference rules** so that "what does it mean?" had an answer independent of any implementation ([2.1](02-01-small-step-operational-semantics.md)–[2.4](02-04-hoare-logic-and-loop-invariants.md));
- **types** so that a class of errors was a compile-time question ([4.1](04-01-the-simply-typed-lambda-calculus.md)–[4.5](04-05-type-soundness-progress-and-preservation.md));
- an **IR in SSA form** so that analyses were cheap ([7.1](07-01-the-compiler-pipeline-and-irs.md)–[7.2](07-02-control-flow-graphs-dominance-and-ssa.md));
- **registers and instructions** because that is what the machine has (this lesson).

Three ideas recurred often enough to be worth naming as the course's actual content.

**Least fixed points.** The meaning of a loop ([2.3](02-03-denotational-semantics-and-fixed-points.md)), FIRST and FOLLOW ([1.4](01-04-recursive-descent-and-ll1.md)), recursion via $Y$ ([3.3](03-03-confluence-and-the-y-combinator.md)), dominance ([7.2](07-02-control-flow-graphs-dominance-and-ssa.md)), every dataflow analysis ([7.3](07-03-dataflow-analysis-as-a-fixed-point.md)) and every abstract interpreter ([7.5](07-05-abstract-interpretation.md)) are one computation: iterate a monotone function from the bottom until nothing changes, and take the limit.

**Sound but not complete.** A type system rejects safe programs ([4.5](04-05-type-soundness-progress-and-preservation.md)), a borrow checker rejects correct ones ([5.6](05-06-ownership-linearity-and-borrow-checking.md)), a collector retains dead objects ([6.5](06-05-tracing-garbage-collection.md)), an alias analysis assumes the worst ([7.4](07-04-classical-optimizations.md)), a register allocator spills when a colouring exists (this lesson). Rice's theorem forces the choice; the design decision is always *which direction to be wrong in*, and the answer is always *the direction whose cost is lost opportunity rather than lost correctness*.

**Choose the representation, and the questions become easy.** Concrete versus abstract syntax, three semantics for one language, Church encodings, SSA, abstract domains — the recurring move in this course was never a cleverer algorithm. It was a change of representation that made the question trivial, and then a way back out.

What you can now do is read a language's manual as a set of coordinates in [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md)'s design space, predict what each choice forced elsewhere, and say what it cost.
