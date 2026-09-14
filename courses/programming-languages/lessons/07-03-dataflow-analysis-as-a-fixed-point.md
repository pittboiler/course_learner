# Programming Languages · Lesson 7.3: Dataflow analysis as a lattice fixed point

> ⏱ ~15 min · Module 7: Compilation · Builds on: [7.2 (control-flow graphs and SSA)](07-02-control-flow-graphs-dominance-and-ssa.md), [2.3 (denotational semantics and fixed points)](02-03-denotational-semantics-and-fixed-points.md) · Unlocks: [7.4 (classical optimizations)](07-04-classical-optimizations.md), [7.5 (abstract interpretation)](07-05-abstract-interpretation.md)

## Why this matters

Every optimization in [Lesson 7.4](07-04-classical-optimizations.md) needs a fact that is not locally visible. *Can I delete this store?* — only if the variable is never read again. *Can I reuse this computation?* — only if the expression is already computed on every path here. *Can I fold this into a constant?* — only if one definition reaches this use.

You could write four analyses. You do not have to: **all four are the same algorithm with four parameters set differently**, and the algorithm is the least-fixed-point iteration you already met in [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md). Recognizing that is what turns a list of compiler techniques into one technique — and it is the framework [Lesson 7.5](07-05-abstract-interpretation.md) generalizes to arbitrary abstract domains.

The termination argument is worth the price of admission on its own: it is *why* the iteration stops, it is checkable, and when someone proposes an analysis that does not terminate you will be able to say which condition it violates.

## The idea

Attach a **set of facts** to every point in the control-flow graph, then push the facts around the edges until nothing changes.

Four choices define an analysis, and nothing else does:

1. **Direction.** *Forward* — facts flow along edges, answering "what has already happened?" *Backward* — facts flow against edges, answering "what will be needed?"
2. **Meet.** At a merge, combine the incoming facts with **union** (a *may* analysis: true on *some* path) or **intersection** (a *must* analysis: true on *every* path).
3. **Transfer function.** What one block does to the facts, always of the shape $\mathrm{OUT} = \mathrm{gen} \cup (\mathrm{IN} \setminus \mathrm{kill})$: the block generates some facts and destroys others.
4. **Boundary value.** The facts at the entry (forward) or exit (backward).

Set them four ways and you get reaching definitions, available expressions, live variables and very busy expressions. Set them a fifth way and you get whatever analysis you need.

## The formal version

**The equations.** For a forward analysis:

$$\mathrm{IN}[B] = \bigwedge_{P\in\mathrm{pred}(B)} \mathrm{OUT}[P] \qquad\qquad \mathrm{OUT}[B] = \mathrm{gen}[B] \cup (\mathrm{IN}[B] \setminus \mathrm{kill}[B])$$

with $\bigwedge$ the meet — union for *may*, intersection for *must*. For a backward analysis, swap $\mathrm{IN}$ with $\mathrm{OUT}$ and $\mathrm{pred}$ with $\mathrm{succ}$.

**The algorithm.** Initialize every block to the meet's identity ($\emptyset$ for union, the full set for intersection), set the boundary, and iterate until no set changes.

**The four classical analyses.** *(card: [the dataflow framework](../reference.md#the-dataflow-framework))*

| analysis | direction | meet | facts | used by |
|---|---|---|---|---|
| reaching definitions | forward | may (∪) | which definitions may reach here | constant propagation |
| available expressions | forward | must (∩) | which expressions are already computed on every path | common-subexpression elimination |
| live variables | backward | may (∪) | which variables may be read later | dead-store elimination, register allocation |
| very busy expressions | backward | must (∩) | which expressions will be computed on every path from here | code hoisting |

**Why initialization differs, and it is not arbitrary.** A *may* analysis starts every block at $\emptyset$ and grows; a *must* analysis starts at the **full set** and shrinks. Starting a must-analysis at $\emptyset$ would leave it there — the intersection of empty sets is empty, and the iteration would report that nothing is available anywhere, which is safe and useless. **The optimistic start is what lets a must-property survive a loop**, since a fact can hold around a cycle only if it is assumed on the way in and never contradicted.

**Termination.** Three conditions, and all three are needed:

1. the facts form a **finite lattice** (finitely many subsets of a finite set);
2. the transfer functions are **monotone** — a larger input never yields a smaller output;
3. each iteration moves in one direction in the lattice (may: only grows; must: only shrinks).

A monotone function on a finite lattice reaches a fixed point in at most the lattice's height, which bounds the iterations. This is **exactly [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)'s Kleene theorem**, with a finite lattice in place of a CPO — and finiteness is what turns "the limit of a chain" into "an algorithm that halts".

**What the fixed point means.** Just as the loop semantics was the *least* fixed point — assuming nothing the equations did not force — a may-analysis's least fixed point is the *smallest* set of facts consistent with the flow, so it never claims a definition reaches somewhere it does not. **The direction of approximation is the safety property**, and getting it backwards makes an unsound optimizer.

## Picture

![Four knobs listed with their settings: direction, either forward meaning what reached here or backward meaning what is needed later; meet, either union meaning MAY on some path or intersection meaning MUST on every path; transfer, always OUT equals gen union the difference of IN and kill; and boundary, the value at entry for forward or exit for backward. Below a dashed rule, a table of four analyses: reaching definitions, forward, may by union; available expressions, forward, must by intersection; live variables, backward, may by union; very busy expressions, backward, must by intersection. A caption notes that all four are the same loop and that termination follows from monotone transfer on a finite lattice.](assets/07-03-fig1.svg)

The table has four rows because there are two binary choices and every combination is a real analysis with a real use. **That is the strongest evidence the framework is the right abstraction** — not that it covers the analyses people had, but that the empty cells were also worth filling.

## Worked examples

**Example 1 (mechanical): reaching definitions on a loop.** The CFG of [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md): $B_0\to B_1$, $B_1\to B_2$, $B_2\to B_1$, $B_1\to B_3$. Definitions: $d_1: i{=}0$ and $d_3: s{=}0$ in $B_0$; $d_2: i{=}i{+}1$ and $d_4: s{=}s{+}i$ in $B_2$.

$\mathrm{gen}[B_0]=\{d_1,d_3\}$, $\mathrm{kill}[B_0]=\{d_2,d_4\}$ (they define the same variables); $\mathrm{gen}[B_2]=\{d_2,d_4\}$, $\mathrm{kill}[B_2]=\{d_1,d_3\}$; $B_1$ and $B_3$ generate and kill nothing.

Forward, may (union), starting from $\emptyset$ everywhere:

| block | IN | OUT |
|---|---|---|
| $B_0$ | $\emptyset$ | $\{d_1,d_3\}$ |
| $B_1$ | $\{d_1,d_2,d_3,d_4\}$ | $\{d_1,d_2,d_3,d_4\}$ |
| $B_2$ | $\{d_1,d_2,d_3,d_4\}$ | $\{d_2,d_4\}$ |
| $B_3$ | $\{d_1,d_2,d_3,d_4\}$ | $\{d_1,d_2,d_3,d_4\}$ |

**Three iterations** to the fixed point. Read the header: **all four definitions reach $B_1$** — the initial ones on the first arrival and the incremented ones around the back edge — which is exactly why a constant-propagator cannot fold `i` there, and exactly why [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md) put a phi-function at $B_1$. The two computations are reporting the same fact in two notations.

**Example 2 (why you'd care): liveness pays twice.** Same graph, now backward. Say $B_1$ reads `i` and `n` (the guard), $B_2$ reads `i` and `s` and writes both, $B_3$ reads `s`, and $B_0$ writes `i` and `s`.

| block | IN (live on entry) | OUT (live on exit) |
|---|---|---|
| $B_0$ | $\{n\}$ | $\{i,n,s\}$ |
| $B_1$ | $\{i,n,s\}$ | $\{i,n,s\}$ |
| $B_2$ | $\{i,n,s\}$ | $\{i,n,s\}$ |
| $B_3$ | $\{s\}$ | $\emptyset$ |

**Four iterations.** Two independent payoffs fall out of this one table.

*Dead-store elimination.* A store to $v$ at a point where $v \notin \mathrm{OUT}$ is dead — nobody will read it — so the instruction can be deleted. Here $\mathrm{OUT}[B_3]=\emptyset$, so any final assignment in $B_3$ is dead. The optimization is a one-line test against the analysis's output.

*Register allocation.* Two variables **interfere** if both are live at the same point, so they cannot share a register. The interference graph of [Lesson 7.6](07-06-code-generation-and-the-back-end.md) is read directly off these sets: here $i$, $n$ and $s$ are simultaneously live throughout the loop, so all three interfere pairwise and the loop needs three registers.

**One analysis, two consumers that look unrelated** — and this is the general pattern. Compilers run a handful of analyses and many optimizations, because the analyses are where the information is and the optimizations are thin decision procedures on top. That is also why the framework matters: adding an analysis is setting four parameters, and every optimization that wants it is then a few lines.

## Watch out

- **You might think** a must-analysis should start from $\emptyset$ like a may-analysis — **but actually** it must start from the **full set**. Intersection with $\emptyset$ is $\emptyset$, so the pessimistic start is a fixed point immediately and reports nothing available anywhere. Optimistic initialization plus iteration to a fixed point is what makes a must-property survive a cycle.
- **You might think** more iterations mean a better answer — **but actually** the iteration *terminates* at the fixed point and further passes change nothing. What varies with effort is the **lattice** you chose, not how long you run: a richer domain gives more precision at more cost per step, which is [Lesson 7.5](07-05-abstract-interpretation.md)'s subject.
- **You might think** a dataflow answer is exact — **but actually** it is a sound approximation. Reaching definitions considers every *path in the graph*, including paths no execution takes (a branch and its opposite both being followed), so it reports definitions that never actually reach. Erring toward "more definitions reach" is safe — it only prevents optimizations — and erring the other way would be a miscompile.

## One-liner

> Four knobs — direction, meet, transfer, boundary — give you every classical dataflow analysis as one iteration, and it halts because a monotone function on a finite lattice reaches its fixed point.

## Problems

**P1 (🟢)** For each analysis, state the direction, the meet operator, and whether the initial value at non-boundary blocks is empty or full.

(a) reaching definitions  (b) available expressions  (c) live variables  (d) very busy expressions

**P2 (🟡)** A straight-line block sequence $B_1 \to B_2 \to B_3$ with:

- $B_1$: `x = a + b` — generates the expression `a+b`, kills nothing
- $B_2$: `a = 5` — kills every expression mentioning `a`
- $B_3$: `y = a + b`

(a) Run available expressions forward with intersection, giving IN and OUT for each block.
(b) State whether the `a+b` in $B_3$ can be replaced by `x`, and why.
(c) Now delete $B_2$. Redo (a) and (b).

**P3 (🔴)** A compiler writer proposes a new analysis: **"definitely non-null"** — at each point, the set of pointer variables that are definitely not null.

(a) Give the four parameters: direction, meet, transfer (say what generates and what kills), and boundary.
(b) State whether the initial value at non-boundary blocks should be empty or full, with the reason.
(c) A branch `if (p != null) { ... } else { ... }` gives different information on its two outgoing edges. State the problem this poses for the framework as stated, and name the standard extension that handles it.
(d) The analysis is used to delete redundant null checks. State which direction of error would be a miscompile and which merely loses an optimization, and say which way the analysis must therefore err.

<details>
<summary>Solutions</summary>

**P1**

| analysis | direction | meet | initial value |
|---|---|---|---|
| (a) reaching definitions | forward | union (may) | **empty** |
| (b) available expressions | forward | intersection (must) | **full** |
| (c) live variables | backward | union (may) | **empty** |
| (d) very busy expressions | backward | intersection (must) | **full** |

The pattern is exactly two rules: **may ⟹ union ⟹ start empty and grow; must ⟹ intersection ⟹ start full and shrink.** Direction is independent of both.

**P2**

(a) Forward, must (intersection). The universe of expressions is $\{a{+}b\}$; boundary $\mathrm{IN}[B_1] = \emptyset$ (nothing is available on entry to the program).

| block | IN | OUT | why |
|---|---|---|---|
| $B_1$ | $\emptyset$ | $\{a{+}b\}$ | gen = $\{a{+}b\}$ |
| $B_2$ | $\{a{+}b\}$ | $\emptyset$ | kill = every expression mentioning `a` |
| $B_3$ | $\emptyset$ | $\{a{+}b\}$ | gen = $\{a{+}b\}$ |

(b) **No.** $\mathrm{IN}[B_3] = \emptyset$, so `a+b` is **not** available on entry to $B_3$ — the assignment `a = 5` in $B_2$ killed it. Replacing the second `a+b` with `x` would use the stale value computed from the *old* `a`, giving the wrong answer.

This is the analysis earning its keep: the two expressions are syntactically identical and compute different values, and only the kill set records why.

(c) With $B_2$ deleted, the sequence is $B_1 \to B_3$:

| block | IN | OUT |
|---|---|---|
| $B_1$ | $\emptyset$ | $\{a{+}b\}$ |
| $B_3$ | $\{a{+}b\}$ | $\{a{+}b\}$ |

**Yes**, the `a+b` in $B_3$ can now be replaced by `x`. It is available on entry — computed on every path to $B_3$ (there is one) with no intervening assignment to `a` or `b` — so `y = x` computes the same value with one fewer addition. That is common-subexpression elimination, and [Lesson 7.4](07-04-classical-optimizations.md) does it properly.

**P3**

(a) *Accept criterion:* a forward must-analysis with gen and kill sets that reflect what establishes and what destroys non-nullness.

- **Direction: forward.** The property is about what has already been established at this point, so information flows along edges from predecessors.
- **Meet: intersection (must).** A variable is definitely non-null here only if it is non-null on **every** path reaching here; if one path leaves it possibly-null, the guarantee is gone.
- **Transfer:** $\mathrm{gen}[B]$ = variables assigned a definitely-non-null value in $B$ (a fresh allocation, a non-null literal, a copy from a definitely-non-null variable, or a variable dereferenced in $B$ — since if the dereference did not crash, it was non-null). $\mathrm{kill}[B]$ = variables assigned a possibly-null value in $B$ (a call returning a nullable, `p = null`, or a copy from a possibly-null variable).
- **Boundary:** $\mathrm{IN}[\text{entry}] = \emptyset$ — nothing is known about parameters or globals on entry, unless the language provides non-null types ([Lesson 5.1](05-01-algebraic-data-types-and-pattern-matching.md)'s `Option`) that let you start with more.

(b) **Full** — every variable assumed definitely non-null at non-boundary blocks initially.

This is P1's rule: it is a must-analysis using intersection, so the initial value must be the meet's identity, which is the full set. Starting from $\emptyset$ would make $\emptyset$ an immediate fixed point at every block (the intersection of empty sets is empty), and the analysis would conclude nothing is ever non-null — safe, and completely useless.

The optimistic start is also what lets the property survive a loop: a variable non-null before the loop and never assigned inside it should stay non-null at the header, and that conclusion requires assuming it on the back edge and finding no contradiction.

(c) **The problem:** the framework as stated computes one $\mathrm{OUT}[B]$ per block, delivered identically to every successor. But `if (p != null)` establishes different facts on its two edges — on the true edge `p` is definitely non-null, on the false edge it is definitely null — and a single $\mathrm{OUT}$ set cannot express both. The block-level framework simply loses the information the test produced, which is precisely the information a null-check optimizer most wants.

**The standard extension is edge-based transfer functions**, usually called **conditional constant propagation** or more generally *flow-sensitive path-sensitive* analysis: give each outgoing edge of a conditional its own transfer function, so $\mathrm{OUT}$ becomes a family indexed by successor, and $\mathrm{IN}[B] = \bigwedge_{P} \mathrm{OUT}[P \to B]$.

(In an SSA-based compiler the same effect is obtained more cheaply with **predicated definitions** — inserting a fresh name for `p` on the true branch whose definition records the refinement. This is the mechanism behind flow typing in TypeScript, Kotlin's smart casts and Rust's `if let`, all of which narrow a type inside a branch.)

(d) **Erring toward "definitely non-null" when the variable might be null is a miscompile**; erring toward "possibly null" when it is definitely non-null merely loses an optimization.

The reasoning: the optimizer deletes a null check when the analysis says the variable is definitely non-null. If that claim is wrong, a null pointer reaches a dereference with no check, and the program crashes (or worse, in a language without a trap, corrupts memory) — a program that was correct before compilation is now wrong. If the analysis is merely too conservative, a redundant check survives and the program runs slightly slower while remaining correct.

So **the analysis must err toward "possibly null"** — that is, it must *under*-approximate the set of definitely-non-null variables. That is the general rule for a must-analysis: since the optimization fires on membership, the computed set must be a subset of the true one, and the optimistic initialization of (b) is safe only because the iteration then shrinks it until every equation is satisfied.

This is the same soundness-versus-completeness direction as every type system in Module 4 and every analysis in [Lesson 7.5](07-05-abstract-interpretation.md): approximate toward the answer whose consequences are safe, and accept the lost opportunities.

</details>

## Flashback

**From Lesson 2.3 (Denotational semantics and least fixed points):** A loop's meaning is $\mathrm{lfp}\,F = \bigsqcup_n F^n(\bot)$, and the iteration terminates only in the limit — the chain $F^n(\bot)$ is infinite for a loop that can run arbitrarily many times.

Dataflow analysis iterates to a fixed point too, and it terminates in finitely many steps.

(a) State the single structural difference that makes this one finite.
(b) [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) rejected larger fixed points because they assert termination the equation never forced. State what the corresponding wrong answer would be for a live-variable analysis, and why it is wrong.

<details>
<summary>Solution</summary>

(a) **The lattice is finite here and infinite there.**

In [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) the domain was the partial functions $\Sigma \rightharpoonup \Sigma$, ordered by extension. That lattice has infinite ascending chains — each $F^n(\bot)$ is defined on strictly more states than the last, for ever — so the least upper bound exists but is reached only in the limit, and there is no algorithm that computes it.

Here the domain is the **subsets of a finite set** (the definitions in the program, or its variables, or its expressions), ordered by inclusion. Every ascending chain has length at most $|{\text{set}}|$, so the iteration must stabilize within that many rounds. Finiteness is what converts Kleene's theorem from an existence statement into a terminating algorithm, and it is the *only* thing that changed — the monotonicity argument, the least-fixed-point reasoning and the direction of approximation are identical.

This is also why [Lesson 7.5](07-05-abstract-interpretation.md) must introduce **widening**: as soon as you want a domain that is *not* finite — intervals of integers, say — the ascending chain can be infinite again, and something must force termination artificially.

(b) For live variables, the analysis is a **may** analysis computing a least fixed point, so the wrong answer would be a **larger** fixed point: claiming more variables are live than the equations force.

Concretely, the largest fixed point is "every variable is live everywhere". It satisfies all the equations — live sets propagate backward and nothing shrinks — and it is useless in the same way the identity function was a useless meaning for `while true do skip`: it asserts something the program's structure never required.

Why it is wrong in the operational sense: liveness drives dead-store elimination and register allocation. Declaring everything live everywhere would make *no* store dead (so no dead code is ever removed) and make *every* pair of variables interfere (so the register allocator would need one register per variable in the program and spill constantly). The compiler would still be **correct** — over-approximating liveness is the safe direction — but it would optimize nothing.

Note the asymmetry with (a)'s lesson, and it is the useful part: for a may-analysis the *larger* fixed points are safe-but-useless, so the least one is both correct and most informative. For a **must**-analysis the direction reverses — the smallest fixed point (the empty set everywhere) is the safe-but-useless one, which is exactly why P1's must-analyses start from the full set and shrink. **In both cases you want the extreme fixed point on the side away from safety**, and the initialization is what puts you there.

</details>

## Connections

- **Backward:** the graph and its predecessors are [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)'s, and the may/must split is that lesson's reachability/dominance distinction — some path versus every path — reappearing as union versus intersection. The fixed-point machinery is [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)'s on a finite lattice, and FIRST/FOLLOW in [Lesson 1.4](01-04-recursive-descent-and-ll1.md) was the same computation.
- **Forward:** [Lesson 7.4](07-04-classical-optimizations.md) is the catalogue of optimizations these analyses license, one analysis per optimization. [Lesson 7.5](07-05-abstract-interpretation.md) generalizes the framework from sets of syntactic facts to arbitrary abstract domains, where the lattice may be infinite and widening is required. Liveness feeds the interference graph of [Lesson 7.6](07-06-code-generation-and-the-back-end.md).
- **Sideways:** SSA ([Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)) makes several of these analyses unnecessary by encoding the answer in the names — Example 1's reaching-definitions result at the loop header is the same fact as the phi-function placed there, which is a good illustration that representation and analysis are substitutes.
