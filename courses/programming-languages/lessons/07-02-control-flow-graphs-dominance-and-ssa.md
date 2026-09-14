# Programming Languages · Lesson 7.2: Control-flow graphs, dominance and SSA

> ⏱ ~15 min · Module 7: Compilation · Builds on: [7.1 (the compiler pipeline and IRs)](07-01-the-compiler-pipeline-and-irs.md), [6.2 (state and the store)](06-02-state-references-and-the-store.md) · Unlocks: [7.3 (dataflow analysis)](07-03-dataflow-analysis-as-a-fixed-point.md), [7.4 (classical optimizations)](07-04-classical-optimizations.md)

## Why this matters

[Lesson 7.1](07-01-the-compiler-pipeline-and-irs.md) lowered the program into basic blocks and noted that the block structure is now a graph. This lesson builds that graph and then performs a change of representation that is the single most consequential idea in modern compiler design.

The problem it solves is the one [Lesson 6.2](06-02-state-references-and-the-store.md) created. Once a variable can be assigned more than once, the question "where did this value come from?" has no local answer — you must trace back through the control-flow graph to find which assignment reached this use. **Static single assignment form** makes the answer syntactic by giving each assignment its own name, and then the question is answered by *reading the name*.

Every major compiler built since about 1990 uses it: LLVM's IR is SSA by definition, GCC's GIMPLE moved to it, and so did the JVM's and V8's optimizers. The technical content is one clever piece of graph theory — the **dominance frontier** — which computes exactly where the renaming needs help.

## The idea

**Control-flow graph.** Nodes are basic blocks; an edge $B \to C$ means control can pass from the end of $B$ to the start of $C$. Add a distinguished entry block. Loops are cycles in this graph, and they are *found* rather than given, because [Lesson 7.1](07-01-the-compiler-pipeline-and-irs.md)'s lowering threw the `while` away.

**Dominance.** $B$ **dominates** $C$ if every path from the entry to $C$ passes through $B$. In words: *you cannot get to $C$ without going through $B$*, so anything $B$ established is still true on entry to $C$, on every execution. That is why dominance is the compiler's notion of "definitely already happened".

**SSA.** Rename so that **every variable is assigned exactly once**. Then each use refers to exactly one definition, by name, and "where did this come from?" is answered by looking at the name — no traversal.

The obvious obstacle: what about a variable assigned in both arms of an `if`? At the join, two definitions arrive. SSA answers with a fiction:

$$x_3 \;\leftarrow\; \phi(x_1, x_2)$$

a **phi-function**, meaning "$x_3$ is $x_1$ if we came from the first predecessor, $x_2$ if from the second". It is not a real instruction — it is a *note* recording a merge, and [Lesson 7.6](07-06-code-generation-and-the-back-end.md) removes it before code generation.

The question this lesson answers is: **where exactly do phi-functions go?** Putting one at every join for every variable is correct and wasteful. The dominance frontier says precisely where they are needed.

## The formal version

**Definition (dominance).** $B \mathrel{\mathrm{dom}} C$ iff every path from entry to $C$ contains $B$. Every block dominates itself. The **immediate dominator** $\mathrm{idom}(C)$ is the closest strict dominator of $C$; the immediate-dominator relation forms the **dominator tree**.

**Computation.** A fixed point, in the style of [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md):

$$\mathrm{Dom}(\text{entry}) = \{\text{entry}\}, \qquad \mathrm{Dom}(C) = \{C\} \cup \bigcap_{P \in \mathrm{pred}(C)} \mathrm{Dom}(P)$$

Initialize every non-entry block to the full set and iterate to a fixed point. The intersection is the "every path" quantifier, and starting from the *largest* set and shrinking is what makes the least-fixed-point reasoning come out right for a **must** property.

**Definition (dominance frontier).** *(card: [dominance and the dominance frontier](../reference.md#dominance-and-the-dominance-frontier))*

$$\mathrm{DF}(B) \;=\; \{\,C \;:\; B \text{ dominates some predecessor of } C,\ \text{and } B \text{ does not strictly dominate } C\,\}$$

In words: **$\mathrm{DF}(B)$ is the set of blocks where $B$'s influence stops.** You can reach $C$ from $B$, but you can also reach $C$ *without* $B$ — so at $C$, whatever $B$ defined may or may not be the current value, and a merge is needed.

**Theorem (Cytron et al., 1991).** If a variable $v$ is assigned in the set of blocks $S$, then phi-functions for $v$ are needed exactly at the **iterated dominance frontier** of $S$:

$$\mathrm{DF}^+(S) = \bigcup_{n\ge 1} \mathrm{DF}^n(S), \qquad \mathrm{DF}(S) = \bigcup_{B\in S}\mathrm{DF}(B)$$

Iterated, because a phi-function is itself a definition, and may require further phi-functions downstream.

**Loop headers are in their own dominance frontier.** If $H$ is a loop header with a back edge $L \to H$, then $H$ dominates $L$ (you cannot reach the loop body without entering through the header), and $H$ does not strictly dominate itself — so $H \in \mathrm{DF}(H)$. **That is why a variable modified in a loop always needs a phi at the header**, and it is the cleanest illustration of what the definition captures.

**Renaming.** Walk the dominator tree, maintaining a stack of current names per variable. At a definition, push a fresh name; at a use, read the stack top; at each successor's phi-functions, fill in the argument for this predecessor edge; pop on the way out.

**Why SSA pays.** Several analyses become trivial:

- **use-def chains are free** — each use names its single definition;
- **constant propagation** is a walk, not a dataflow problem, because a name has one value;
- **dead-code elimination** is "this name has no uses";
- **variable capture during inlining** ([Lesson 3.1](03-01-the-untyped-lambda-calculus.md)) is impossible, since every name is distinct by construction.

And note what SSA *is*, conceptually: it converts **mutation into binding**. Where [Lesson 6.2](06-02-state-references-and-the-store.md) P3(c) observed that rebinding a name recovers local reasoning, SSA performs exactly that transformation mechanically — which is why an SSA program reads like a functional one, and why SSA and CPS are equivalent ([Lesson 7.1](07-01-the-compiler-pipeline-and-irs.md)'s Flashback).

## Picture

![A control-flow graph of four nodes. B0 at the top has an edge down to B1, B1 has an edge down to B2, and a curved back edge runs from B2 up to B1, labelled back edge. B1 also has an edge right to B3. Beside the graph, five facts are listed: dom of B1 is the set containing B0 and B1; idom of B1 is B0; DF of B1 is the set containing B1 itself; DF of B2 is the set containing B1; and DF of B3 is empty. Below, text notes that i is defined in B0 and B2, that the union of their dominance frontiers is the single block B1, so exactly one phi is needed, shown as i2 assigned phi of i0 from B0 and i1 from B2. A closing line states that a loop header is in its own dominance frontier, and that is what the back edge buys.](assets/07-02-fig1.svg)

$\mathrm{DF}(B_1) = \{B_1\}$ is the fact to sit with. $B_1$ dominates $B_2$, which is its own predecessor via the back edge — so $B_1$ dominates a predecessor of itself, and does not strictly dominate itself. A loop header is where control arrives both from outside and from the previous iteration, and those are two different values: exactly the situation a phi records.

## Worked examples

**Example 1 (mechanical): compute everything for the loop graph.** Blocks $B_0$ (entry), $B_1$ (header), $B_2$ (body), $B_3$ (exit), with edges $B_0\to B_1$, $B_1\to B_2$, $B_2\to B_1$, $B_1\to B_3$.

| block | $\mathrm{Dom}$ | $\mathrm{idom}$ | $\mathrm{DF}$ |
|---|---|---|---|
| $B_0$ | $\{B_0\}$ | — | $\emptyset$ |
| $B_1$ | $\{B_0, B_1\}$ | $B_0$ | $\{B_1\}$ |
| $B_2$ | $\{B_0, B_1, B_2\}$ | $B_1$ | $\{B_1\}$ |
| $B_3$ | $\{B_0, B_1, B_3\}$ | $B_1$ | $\emptyset$ |

Check one by hand. $\mathrm{Dom}(B_3) = \{B_3\} \cup \mathrm{Dom}(B_1) = \{B_3, B_0, B_1\}$, since $B_1$ is its only predecessor. And $B_2 \notin \mathrm{Dom}(B_3)$ — you can exit the loop without ever running the body, if the guard fails first.

Now place phi-functions for `i`, defined in $B_0$ (initialized) and $B_2$ (incremented). $\mathrm{DF}(\{B_0, B_2\}) = \emptyset \cup \{B_1\} = \{B_1\}$, and iterating adds nothing new since $\mathrm{DF}(B_1) = \{B_1\}$ is already included.

**Exactly one phi, at $B_1$:**

$$B_1: \quad i_2 \leftarrow \phi(i_0 \ \text{from}\ B_0,\ \ i_1\ \text{from}\ B_2)$$

**Example 2 (why you'd care): renaming makes an analysis disappear.** Before SSA:

```
      x = 1
      if (c) { x = 2 }
      y = x + 1
```

To fold `x + 1` the compiler must ask *which* `x` reaches the use, and the answer is "either" — so it must run a reaching-definitions analysis ([Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)), find two definitions arrive, and conclude the value is unknown.

After SSA:

```
B0:   x0 = 1
B1:   x1 = 2
B2:   x2 = phi(x0, x1)
      y0 = x2 + 1
```

Now `x2` names its definition directly, and the definition is a phi with two distinct constant arguments — so the value is not constant, and the compiler knows this **by reading one instruction**. No traversal, no fixed point.

And when the answer *is* constant the payoff is sharper still:

```
      x = 1
      if (c) { x = 1 }
      y = x + 1
```

becomes `x2 = phi(x0, x1)` with `x0 = 1` and `x1 = 1`. A phi whose arguments are all the same constant **is** that constant, so `x2 = 1`, `y0 = 2`, and the whole thing folds — again by local inspection. This is why SSA-based **sparse conditional constant propagation** is both simpler and more powerful than the classical dataflow version, and why it is the standard algorithm.

**The general pattern:** SSA does not make the analyses cleverer. It *moves work from analysis time to construction time* — the dominance-frontier computation runs once, and every subsequent analysis reads the resulting names instead of re-deriving what reaches where.

## Watch out

- **You might think** a phi-function is an instruction the machine executes — **but actually** it is a notation for a merge, and no hardware has one. [Lesson 7.6](07-06-code-generation-and-the-back-end.md) eliminates phis before code generation by inserting copies at the ends of the predecessor blocks, and doing that correctly in the presence of simultaneous phis is a real subtlety (the "lost copy" and "swap" problems).
- **You might think** phi-functions belong at every join — **but actually** they belong at the iterated dominance frontier of the definition sites, which is usually far smaller. Putting them everywhere is correct and produces an IR bloated enough to slow every later pass, which is why Cytron's theorem matters practically and not just aesthetically.
- **You might think** dominance is about reachability — **but actually** it is the opposite quantifier. *$C$ is reachable from $B$* says **some** path exists; *$B$ dominates $C$* says **every** path to $C$ goes through $B$. That some/every distinction is the may/must distinction of [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md), and it is why dominance is computed with intersection rather than union.

## One-liner

> Give every assignment its own name and a use answers "where did this come from?" by itself — with phi-functions exactly at the dominance frontier, which is where a block's influence stops.

## Problems

**P1 (🟢)** For the diamond CFG with edges $B_0\to B_1$, $B_0\to B_2$, $B_1\to B_3$, $B_2\to B_3$:

(a) Give $\mathrm{Dom}(C)$ for each block.
(b) Give $\mathrm{idom}(C)$ for each non-entry block.
(c) Give $\mathrm{DF}(B)$ for each block.
(d) A variable `x` is assigned in $B_1$ and $B_2$. Say where its phi-functions go.

**P2 (🟡)** Convert to SSA, giving every definition a numbered name and inserting phi-functions where needed.

```
      a = 1
      b = 2
      if (c) { a = 3 } else { b = 4 }
      d = a + b
```

**P3 (🔴)** Consider the CFG $B_0\to B_1$, $B_1\to B_2$, $B_1\to B_3$, $B_2\to B_4$, $B_3\to B_4$, $B_4\to B_1$ — an `if`/`else` inside a loop.

(a) Give the dominator tree.
(b) Give $\mathrm{DF}(B)$ for every block.
(c) A variable `x` is assigned in $B_0$, $B_2$ and $B_3$. Compute the iterated dominance frontier and say exactly which blocks get a phi for `x`.
(d) Explain why the iteration in $\mathrm{DF}^+$ is necessary here — that is, name a phi that the *first* application of $\mathrm{DF}$ does not find, or state that none exists and say why.

<details>
<summary>Solutions</summary>

**P1**

(a) Every path to any block starts at $B_0$, so $B_0$ dominates everything. $B_1$ and $B_2$ are on alternative paths, so neither dominates the other or $B_3$.

$$\mathrm{Dom}(B_0)=\{B_0\},\quad \mathrm{Dom}(B_1)=\{B_0,B_1\},\quad \mathrm{Dom}(B_2)=\{B_0,B_2\},\quad \mathrm{Dom}(B_3)=\{B_0,B_3\}$$

$\mathrm{Dom}(B_3)$ is the interesting one: $B_3$'s predecessors are $B_1$ and $B_2$, and $\mathrm{Dom}(B_1)\cap\mathrm{Dom}(B_2) = \{B_0\}$, so only $B_0$ and $B_3$ itself.

(b) $\mathrm{idom}(B_1) = \mathrm{idom}(B_2) = \mathrm{idom}(B_3) = B_0$. The dominator tree is flat: $B_0$ with three children.

(c) $\mathrm{DF}(B_0) = \emptyset$ — $B_0$ dominates every block, so its influence never stops.

$\mathrm{DF}(B_1) = \{B_3\}$ — $B_1$ dominates its own predecessor-of-$B_3$ role, and does not strictly dominate $B_3$ (you can reach $B_3$ via $B_2$).

$\mathrm{DF}(B_2) = \{B_3\}$, symmetrically. $\mathrm{DF}(B_3) = \emptyset$ — $B_3$ has no successors.

(d) $\mathrm{DF}(\{B_1,B_2\}) = \{B_3\}$, and iterating adds nothing since $\mathrm{DF}(B_3)=\emptyset$.

**One phi, at $B_3$:** $x_3 \leftarrow \phi(x_1, x_2)$.

**P2** Blocks: $B_0$ (the two initial assignments and the test), $B_1$ (`a = 3`), $B_2$ (`b = 4`), $B_3$ (the join with `d = a + b`).

`a` is assigned in $B_0$ and $B_1$; `b` in $B_0$ and $B_2$. By P1(c), $\mathrm{DF}(B_0)=\emptyset$, $\mathrm{DF}(B_1)=\mathrm{DF}(B_2)=\{B_3\}$, so **both** variables need a phi at $B_3$:

```
B0:   a0 = 1
      b0 = 2
      ifFalse c goto B2

B1:   a1 = 3
      goto B3

B2:   b1 = 4

B3:   a2 = phi(a1 from B1, a0 from B2)
      b2 = phi(b0 from B1, b1 from B2)
      d0 = a2 + b2
```

Two points worth noting. First, **`a` needs a phi even though only one branch assigns it** — the other incoming value is $a_0$ from $B_0$, which flows through $B_2$ unchanged, and the merge still has two distinct incoming names. Second, the phi arguments are ordered by predecessor edge, so $a_2$'s first argument comes from $B_1$ and its second from $B_2$; getting that correspondence wrong is the classic SSA-construction bug.

**P3**

(a) $B_0$ dominates everything. $B_1$ is the loop header and every path to $B_2$, $B_3$ and $B_4$ passes through it. $B_2$ and $B_3$ are alternatives, so neither dominates $B_4$; $B_4$'s dominators are $\{B_0, B_1, B_4\}$.

Dominator tree:

```
B0
└── B1
    ├── B2
    ├── B3
    └── B4
```

(b)

| block | $\mathrm{DF}$ | why |
|---|---|---|
| $B_0$ | $\emptyset$ | dominates everything |
| $B_1$ | $\{B_1\}$ | dominates $B_4$, a predecessor of $B_1$ via the back edge, and does not strictly dominate itself |
| $B_2$ | $\{B_4\}$ | dominates itself, a predecessor of $B_4$; does not strictly dominate $B_4$ (reachable via $B_3$) |
| $B_3$ | $\{B_4\}$ | symmetric to $B_2$ |
| $B_4$ | $\{B_1\}$ | dominates itself, a predecessor of $B_1$; does not strictly dominate $B_1$ |

(c) `x` is assigned in $S = \{B_0, B_2, B_3\}$.

*First application:* $\mathrm{DF}(S) = \mathrm{DF}(B_0)\cup\mathrm{DF}(B_2)\cup\mathrm{DF}(B_3) = \emptyset \cup \{B_4\} \cup \{B_4\} = \{B_4\}$.

*Second application:* the phi at $B_4$ is itself a definition of `x`, so add $B_4$ to the definition set and take its frontier: $\mathrm{DF}(B_4) = \{B_1\}$. So $B_1$ joins.

*Third application:* $B_1$ is now a definition site too; $\mathrm{DF}(B_1) = \{B_1\}$, already present. Fixed point reached.

$$\mathrm{DF}^+(\{B_0,B_2,B_3\}) = \{B_4,\ B_1\}$$

**Phi-functions for `x` go in $B_4$ and $B_1$:**

```
B1:   x4 = phi(x0 from B0, x3 from B4)
B4:   x3 = phi(x1 from B2, x2 from B3)
```

(d) **The iteration is necessary, and the phi it finds is the one at $B_1$.**

The first application of $\mathrm{DF}$ returns only $\{B_4\}$, because $B_1$ is not in the dominance frontier of any *original* definition site: $\mathrm{DF}(B_0)=\emptyset$, and $\mathrm{DF}(B_2)=\mathrm{DF}(B_3)=\{B_4\}$. Nothing in that first round mentions $B_1$.

But the phi placed at $B_4$ **is a new definition of `x`**, and its value flows around the back edge into $B_1$ — where it meets the original definition arriving from $B_0$. Two different values reach $B_1$, so a merge is required there, and only the second round discovers it by taking $\mathrm{DF}(B_4) = \{B_1\}$.

This is exactly why the theorem is stated with $\mathrm{DF}^+$ rather than $\mathrm{DF}$: **phi-functions are definitions, so inserting them can create the need for more.** Loops are where it bites, because the back edge carries a phi's result back to a point the first round did not reach — and the iteration is guaranteed to terminate because the definition set only grows and is bounded by the number of blocks.

</details>

## Flashback

**From Lesson 6.2 (State, references and the environment-store model):** P3 considered abandoning the store and implementing assignment by *rebinding* the name in the environment, and the solution noted this recovers local reasoning about values but raises a scoping problem.

SSA renames every assignment.

(a) State the relationship between SSA and that proposal.
(b) The proposal's problem was what happens when a rebinding occurs inside an inner scope. State what SSA does about the corresponding situation, and name the construct.

<details>
<summary>Solution</summary>

(a) **SSA is that proposal, carried out by the compiler instead of by the language.**

[Lesson 6.2](06-02-state-references-and-the-store.md) P3 asked what happens if assignment produces a *new binding* rather than mutating a cell. SSA does precisely that to the IR: `x = x + 1` becomes `x1 = x0 + 1`, a fresh name bound to a value, with no cell overwritten. After conversion the IR has no mutation at all — every name is bound once and never changes — which is why an SSA program can be read as a functional one and why SSA and CPS are inter-translatable.

And it recovers exactly the benefit P3(b) identified: **local reasoning about values.** Two occurrences of `x2` in SSA denote the same value, unconditionally, with no alias analysis and no check for intervening assignments — so common-subexpression elimination, constant propagation and value numbering become syntactic. That is the same gain, obtained without changing the source language, because the renaming happens in a representation the programmer never sees.

(b) The corresponding situation is **control flow rejoining**: two paths each with their own binding of the name, meeting at a block that must use one of them. P3's version was an inner scope's rebinding escaping to the outer scope, and the two possible answers there were "it dies with the block" or "it escapes".

SSA gives a third answer that neither of P3's options offered: **name the merge explicitly, with a phi-function.** Rather than deciding whether the inner binding survives, SSA introduces a *new* binding at the join whose value depends on which predecessor was taken:

$$x_3 \leftarrow \phi(x_1, x_2)$$

So the question "which binding is in scope after the branch?" is answered by "a third one, and here is how it relates to the other two". That is why SSA needs no scoping rule at all — the dominator tree *is* the scope structure (a definition is in scope exactly at the blocks it dominates), and every point where that structure is ambiguous is precisely a dominance-frontier block, where a phi resolves it.

The cost, as the Watch out notes, is that a phi is a fiction with no machine instruction behind it, so it must be eliminated before code generation ([Lesson 7.6](07-06-code-generation-and-the-back-end.md)) — which is the price of having dodged the scoping question rather than answered it.

</details>

## Connections

- **Backward:** the basic blocks are [Lesson 7.1](07-01-the-compiler-pipeline-and-irs.md)'s, and the graph must *recover* the loop structure that lowering discarded. Turning mutation into binding is [Lesson 6.2](06-02-state-references-and-the-store.md) P3's proposal, performed by the compiler; the dominance fixed point is [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)'s machinery on a finite lattice.
- **Forward:** [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) computes facts over this graph, and the may/must distinction there is the reachability/dominance distinction here. [Lesson 7.4](07-04-classical-optimizations.md)'s optimizations consume both, and [Lesson 7.6](07-06-code-generation-and-the-back-end.md) must eliminate the phis.
- **Sideways:** the dominator computation is a fixed point over a finite lattice ordered by set inclusion, exactly like [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)'s analyses and [Lesson 1.4](01-04-recursive-descent-and-ll1.md)'s FIRST/FOLLOW — the third appearance of the same computation pattern, which is why it stops being a trick.
