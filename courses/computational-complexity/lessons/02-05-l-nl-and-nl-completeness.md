# Complexity Theory · Lesson 2.5: L, NL & NL-completeness

> ⏱ ~15 min · Module 2: Space complexity & the polynomial hierarchy · Builds on: [2.3 (space and Savitch)](02-03-space-as-a-resource-and-savitch.md) · Unlocks: [2.6 (Immerman–Szelepcsényi and the class map)](02-06-immerman-szelepcsenyi-and-the-class-map.md), [5.3 (NC and P-completeness)](05-03-nc-parallelism-and-p-completeness.md)

## Why this matters

Everything so far has been at or above $\mathsf{P}$. This lesson goes below it, to the classes of problems solvable with a handful of pointers and nothing else — logarithmic space.

Two reasons to care, one theoretical and one practical.

**The reduction notion has to change, and seeing why is instructive.** You cannot use polynomial-time reductions to define NL-completeness: a polynomial-time reduction is more powerful than the whole class it is supposed to be comparing things inside, so *every* nontrivial NL problem would be complete and the notion would say nothing. The fix is logspace reductions, and making them compose turns out to require a genuinely clever idea. This is a general lesson about completeness — **the reduction must be weaker than the class** — and it comes up again for P-completeness in [Lesson 5.3](05-03-nc-parallelism-and-p-completeness.md).

**Logspace is the natural home of streaming and pointer-chasing.** A logspace machine is one that reads a huge input it cannot store, keeping only a constant number of indices into it. That is the model for a database scanning a table it cannot fit in memory, and the NL-complete problem — graph reachability — is exactly the operation such systems find hardest to parallelize.

## The idea

**What logspace buys you.** $O(\log n)$ bits is enough to hold a constant number of numbers in the range $1$ to $n$: pointers into the input, and counters up to $n$. That is all. You cannot store a set of vertices, a list, or a copy of anything.

So: can you tell whether a directed graph has a path from $s$ to $t$ using only pointers? Nondeterministically, yes — and easily. Keep the current vertex and a step counter. Guess an outgoing edge, follow it, increment. Accept if you reach $t$; give up after $n$ steps, since any path can be shortened to one without repeats. Two numbers, $O(\log n)$ bits. **That is PATH, and it is the canonical NL problem.**

Deterministically, nobody knows how. You cannot keep a visited set, so depth-first search is unavailable, and every trick anyone has found for the *undirected* case — Reingold's 2004 theorem puts undirected connectivity in $\mathsf{L}$, a hard and beautiful result — breaks on directed graphs. $\mathsf{L}$ versus $\mathsf{NL}$ is open and is the small-scale shadow of $\mathsf{P}$ versus $\mathsf{NP}$.

**Why logspace reductions need care.** A logspace reduction computes $f(x)$ using $O(\log |x|)$ work space. But $f(x)$ itself may be polynomially long — far longer than the space budget — so the machine writes its output to a write-only output tape it can never read back.

Now try to compose two of them. $M_2$ wants to read $M_1$'s output, but nobody may store it. The fix: **run $M_1$ on demand.** Whenever $M_2$ wants the $i$-th symbol of $f_1(x)$, restart $M_1$ from scratch, count output symbols as it emits them, and hand over the $i$-th. This costs enormous time — $M_1$ is re-run once per symbol read — and exactly $O(\log n)$ extra space for the counter. Composition holds, and it holds for the usual reason in this module: **time is cheap when only space is being charged.**

**Two useful facts fall out.** $\mathsf{NL} \subseteq \mathsf{P}$, because a logspace machine's configuration graph has only $n^{O(1)}$ vertices ([2.3](02-03-space-as-a-resource-and-savitch.md)), so reachability in it is a polynomial-time question. And 2SAT is in NL, because a 2CNF formula *is* a graph: each clause $(a \vee b)$ is the pair of implications $\lnot a \Rightarrow b$ and $\lnot b \Rightarrow a$, and the formula is unsatisfiable exactly when some variable $x$ has both $x$ reachable from $\lnot x$ and $\lnot x$ reachable from $x$.

## The formal version

**Definition ([L and NL](../reference.md#l-and-nl)).** With the read-only input tape of [2.3](02-03-space-as-a-resource-and-savitch.md),

$$\mathsf{L} = \mathrm{SPACE}(\log n), \qquad \mathsf{NL} = \mathrm{NSPACE}(\log n).$$

**Definition ([logspace reduction](../reference.md#logspace-reduction)).** $A \le_{\mathsf{L}} B$ if there is $f$ computable by a deterministic machine using $O(\log n)$ work space, with a write-only output tape, such that $x \in A \iff f(x) \in B$.

**Lemma ([composition](../reference.md#logspace-composition)).** If $A \le_{\mathsf{L}} B$ and $B \le_{\mathsf{L}} C$ then $A \le_{\mathsf{L}} C$.

*Proof.* Simulate $M_2$ on the virtual input $f_1(x)$. Maintain a counter $i$ for the position of $M_2$'s input head. Whenever $M_2$ reads, re-run $M_1$ on $x$ from the start, discarding output symbols until the $i$-th, and supply it. Space: $M_2$'s work tape, $M_1$'s work tape, and two counters, all $O(\log n)$. $\blacksquare$

**Corollary.** $A \le_{\mathsf{L}} B$ and $B \in \mathsf{L}$ imply $A \in \mathsf{L}$, by the same on-demand trick; likewise for $\mathsf{NL}$.

**Definition.** $B$ is **NL-complete** if $B \in \mathsf{NL}$ and $A \le_{\mathsf{L}} B$ for every $A \in \mathsf{NL}$.

**Theorem ([PATH is NL-complete](../reference.md#path-is-nl-complete)).** $\text{PATH} = \{\langle G, s, t\rangle : G$ is a digraph with a path from $s$ to $t\}$ is NL-complete.

*Membership.* Store the current vertex and a counter. Guess a successor, move, increment; accept on reaching $t$, reject past $n$ steps. Two numbers: $O(\log n)$ space, every branch bounded.

*Hardness.* Let $A \in \mathsf{NL}$ be decided by $N$ in $c\log n$ space. Map $x$ to the configuration graph of $N$ on $x$ — vertices are configurations, edges are legal moves — with $s$ the start configuration and $t$ the (unique, by convention) accepting one. Then $x \in A$ iff a path exists.

The map is computable in logspace: each configuration is $O(\log n)$ bits, so the machine enumerates pairs of configurations in a counter of that size and, for each pair, tests in constant work space whether one moves to the other. It never stores the graph, only the pair it is currently emitting. $\blacksquare$

**Theorem ([NL is inside P](../reference.md#nl-subset-p)).** $\mathsf{NL} \subseteq \mathsf{P}$.

*Proof.* PATH is in $\mathsf{P}$ by breadth-first search. Any $A \in \mathsf{NL}$ reduces to PATH in logspace, hence in polynomial time (a logspace machine runs in polynomial time, since it must halt within its configuration count $n^{O(1)}$). $\blacksquare$

**Theorem ([2SAT is NL-complete](../reference.md#2sat-in-nl)).** 2SAT is in $\mathsf{NL}$, and so is its complement — which is why [Lesson 2.6](02-06-immerman-szelepcsenyi-and-the-class-map.md)'s $\mathsf{NL} = \mathsf{coNL}$ is what makes this statement clean.

*Membership sketch.* Build the implication graph implicitly: its vertices are the $2n$ literals, and $(\lnot a, b)$ is an edge iff the clause $(a \vee b)$ appears — a condition checkable by scanning the input with two pointers. UNSAT-2SAT is then "some $x$ has $x$ reachable from $\lnot x$ **and** $\lnot x$ reachable from $x$", two PATH queries, so the complement of 2SAT is in NL. By $\mathsf{NL} = \mathsf{coNL}$, 2SAT itself is in NL.

## Picture

![Six circles arranged in two rows of three, labelled x one, x two, x three across the top and not x one, not x two, not x three across the bottom. Eight blue arrows connect them, running both between and within rows. Explanatory text below gives the four clauses and states the unsatisfiability criterion.](assets/02-05-fig1.svg)

The clauses are $(x_1 \vee x_2)$, $(\lnot x_1 \vee x_3)$, $(\lnot x_2 \vee \lnot x_3)$, $(x_1 \vee \lnot x_3)$, and each contributes exactly two arrows, because $(a \vee b)$ says both "if not $a$ then $b$" and "if not $b$ then $a$". Four clauses, eight arrows.

**A 2CNF formula is not merely representable as a graph; it is a graph.** Satisfying it means choosing one literal from each complementary pair such that the choice is closed under implication, and that fails exactly when the implications force a variable to be both true and false. Concretely: unsatisfiable iff some $x_i$ has a path from $x_i$ to $\lnot x_i$ *and* a path back.

Here no variable has both, so the formula is satisfiable — its models are $010$ and $101$.

Now count the memory a machine needs to run this test. The current literal: $O(\log n)$ bits. A step counter: $O(\log n)$ bits. The graph itself is never built — an edge is recognized by scanning the input for the corresponding clause. **The whole algorithm fits in a few pointers, which is what puts 2SAT in NL and what separates it so sharply from 3SAT**, where no such graph structure exists and the problem is NP-complete.

## Worked examples

**Example 1 (mechanical): decide a 2CNF by reachability.** Take the formula above. Its implication graph has these edges, listing each clause's two:

| clause | implications |
|---|---|
| $(x_1 \vee x_2)$ | $\lnot x_1 \to x_2$, $\lnot x_2 \to x_1$ |
| $(\lnot x_1 \vee x_3)$ | $x_1 \to x_3$, $\lnot x_3 \to \lnot x_1$ |
| $(\lnot x_2 \vee \lnot x_3)$ | $x_2 \to \lnot x_3$, $x_3 \to \lnot x_2$ |
| $(x_1 \vee \lnot x_3)$ | $\lnot x_1 \to \lnot x_3$, $x_3 \to x_1$ |

Test each variable. From $\lnot x_1$ you reach $x_2$ and $\lnot x_3$, then $\lnot x_1$ again — never $x_1$. From $x_1$ you reach $x_3$, then $\lnot x_2$ and $x_1$ — never $\lnot x_1$. Neither direction closes, so $x_1$ is fine, and the same check passes for $x_2$ and $x_3$.

**Satisfiable.** And the graph even tells you how to build a model: pick any literal with no path to its negation and propagate. Starting from $x_1$: $x_1 \to x_3 \to \lnot x_2$, giving $101$. ✓

**Example 2 (why you'd care): why polynomial-time reductions cannot define NL-completeness.** Suppose we defined NL-completeness using $\le_p$ instead of $\le_{\mathsf{L}}$. Then consider any $B \in \mathsf{NL}$ that is neither $\emptyset$ nor $\Sigma^*$ — say PATH, or 2SAT, or the language of strings with an even number of 1s.

Every $A \in \mathsf{NL}$ would reduce to $B$ in polynomial time, because $\mathsf{NL} \subseteq \mathsf{P}$: on input $x$, **solve $A$ outright** in polynomial time, then output a fixed yes-instance or a fixed no-instance of $B$. That is a valid polynomial-time reduction and it uses $B$ for nothing at all.

So under $\le_p$, every nontrivial NL language would be NL-complete, including trivially easy ones. The notion would carry no information.

**The general principle: a reduction must be weaker than the class it compares within**, or it swallows the problem and the completeness notion degenerates. This is why NP-completeness uses polynomial-time reductions (weaker than NP, assuming $\mathsf{P} \ne \mathsf{NP}$), why NL-completeness uses logspace ones, and why [5.3](05-03-nc-parallelism-and-p-completeness.md)'s P-completeness will use logspace ones too. It is also why PSPACE-completeness can safely use polynomial-time reductions — polynomial time is believed to be much weaker than polynomial space.

## Watch out

- **You might think** the input tape counts against the logspace budget — **but actually** only the work tape does, and without that convention $\mathsf{L}$ would be empty. The output tape is likewise uncharged, and is write-only precisely so that it cannot be abused as extra memory.
- **You might think** logspace reductions compose the obvious way — **but actually** the intermediate string is too long to store, and composition needs the recompute-on-demand trick. The cost is a blow-up in time that nobody is counting, which is the recurring theme of the whole module.
- **You might think** directed and undirected reachability are the same problem — **but actually** the undirected version is in $\mathsf{L}$ (Reingold, 2004) and the directed version is NL-complete. Directedness is the whole difficulty: without it, a random walk finds the target and can be derandomized.
- **You might think** 2SAT being in NL and 3SAT being NP-complete is a small difference of degree — **but actually** it is a change of kind: a 2-clause is an implication, so the instance is a graph and satisfiability is reachability, while a 3-clause is a genuine disjunction with no such reading. **The jump from 2 to 3 is where a graph becomes a formula.**

## One-liner

> Logarithmic space is a handful of pointers, directed reachability is the hardest thing you can do with them, and the reduction notion must be weakened to logspace or every nontrivial problem in the class becomes complete.

## Problems

**P1 (🟢)** Consider the 2CNF formula $(x_1 \vee \lnot x_2) \wedge (x_2 \vee x_3) \wedge (\lnot x_1 \vee \lnot x_3) \wedge (\lnot x_1 \vee x_2)$. (a) List all eight implications. (b) Determine whether any variable has paths in both directions between $x_i$ and $\lnot x_i$. (c) State whether the formula is satisfiable and, if so, give a satisfying assignment.

**P2 (🟡)** A logspace machine on input of length $n$ uses exactly $\lceil 3\log_2 n\rceil$ work cells over a binary work alphabet, with $|Q| = 10$ states. (a) Give the number of configurations as a function of $n$, simplified to a power of $n$ times a constant. (b) Use it to give the largest number of steps a halting run can take. (c) Explain in one sentence how this establishes $\mathsf{L} \subseteq \mathsf{P}$, and why the same argument does **not** immediately give $\mathsf{NL} \subseteq \mathsf{P}$ without a further step.

**P3 (🔴, optional)** (a) Show that if $\text{PATH} \in \mathsf{L}$ then $\mathsf{L} = \mathsf{NL}$. (b) Undirected reachability is in $\mathsf{L}$; explain in one sentence why this does not settle (a). (c) A colleague proposes to put directed PATH in $\mathsf{L}$ as follows: "run the nondeterministic algorithm, but instead of guessing, try all successors in order using a stack of the choices made so far". Give the space this uses in the worst case and name the resource it violates.

<details>
<summary>Solutions</summary>

**P1**

(a) Each clause $(a \vee b)$ gives $\lnot a \to b$ and $\lnot b \to a$:

| clause | implications |
|---|---|
| $(x_1 \vee \lnot x_2)$ | $\lnot x_1 \to \lnot x_2$, $x_2 \to x_1$ |
| $(x_2 \vee x_3)$ | $\lnot x_2 \to x_3$, $\lnot x_3 \to x_2$ |
| $(\lnot x_1 \vee \lnot x_3)$ | $x_1 \to \lnot x_3$, $x_3 \to \lnot x_1$ |
| $(\lnot x_1 \vee x_2)$ | $x_1 \to x_2$, $\lnot x_2 \to \lnot x_1$ |

(b) Check $x_1$. Forward from $x_1$: $x_1 \to \lnot x_3$ and $x_1 \to x_2$; from $\lnot x_3$, $\lnot x_3 \to x_2$; from $x_2$, $x_2 \to x_1$. The reachable set from $x_1$ is $\{\lnot x_3, x_2, x_1\}$ — **$\lnot x_1$ is not in it.**

From $\lnot x_1$: $\lnot x_1 \to \lnot x_2$; from $\lnot x_2$, $\lnot x_2 \to x_3$ and $\lnot x_2 \to \lnot x_1$; from $x_3$, $x_3 \to \lnot x_1$. Reachable set $\{\lnot x_2, x_3, \lnot x_1\}$ — **$x_1$ is not in it.**

So $x_1$ has no contradiction, and by symmetry of the two closed sets neither do $x_2$ or $x_3$: the graph splits into exactly these two components, $\{x_1, x_2, \lnot x_3\}$ and $\{\lnot x_1, \lnot x_2, x_3\}$, which are complementary.

(c) **Satisfiable.** Take the component $\{x_1, x_2, \lnot x_3\}$ as the true literals: $x_1 = 1, x_2 = 1, x_3 = 0$. Verify: $(x_1 \vee \lnot x_2)$ has $x_1$ ✓; $(x_2 \vee x_3)$ has $x_2$ ✓; $(\lnot x_1 \vee \lnot x_3)$ has $\lnot x_3$ ✓; $(\lnot x_1 \vee x_2)$ has $x_2$ ✓.

**P2**

(a) A configuration is (state, input head position, work head position, work tape contents):

$$|Q| \cdot n \cdot s \cdot 2^{s} \quad\text{with } s = \lceil 3\log_2 n\rceil,\qquad 2^{s} = n^3,$$

giving $10 \cdot n \cdot 3\log_2 n \cdot n^3 = 30\,n^4 \log_2 n$. To a clean bound: $O(n^{4+\varepsilon})$, or simply $n^{O(1)}$ — **polynomially many**, which is the only feature that matters.

(b) A halting run never repeats a configuration, so it takes at most $30\,n^4\log_2 n$ steps.

(c) Simulating the machine directly for that many steps is polynomial time, so $\mathsf{L} \subseteq \mathsf{P}$. For $\mathsf{NL}$ the same count bounds the *size of the configuration graph*, but a nondeterministic machine does not have a single run to simulate — you must instead decide **reachability** in that graph, which needs the extra step of observing that reachability on a polynomial-sized graph is solvable in polynomial time by breadth-first search.

**P3**

(a) Suppose $\text{PATH} \in \mathsf{L}$. Let $A \in \mathsf{NL}$. By the completeness theorem $A \le_{\mathsf{L}} \text{PATH}$, and by the corollary to the composition lemma, $A \le_{\mathsf{L}} B$ with $B \in \mathsf{L}$ gives $A \in \mathsf{L}$. So $\mathsf{NL} \subseteq \mathsf{L}$, and the reverse inclusion is trivial. $\blacksquare$

(b) Because undirected reachability is a strictly easier problem: an undirected graph's reachability relation is symmetric, which is what Reingold's construction exploits (it derandomizes a random walk using zig-zag expanders, and the argument needs the walk to be reversible). **Directed PATH is NL-complete and undirected connectivity is not**, so a logspace algorithm for the latter transfers nothing.

(c) The stack holds one choice per step of the path, and a path may have up to $n-1$ vertices, so the stack is $\Theta(n\log n)$ bits in the worst case — **linear space, not logarithmic**. It violates the space bound, which is the only resource being charged. The colleague has described depth-first search, and the reason DFS is unavailable in logspace is exactly this: it must remember where it has been, and remembering is what logspace cannot afford.

</details>

## Flashback

**From Lesson 2.3 (space as a resource & Savitch):** A nondeterministic machine has $|Q| = 4$ states and work alphabet $|\Gamma| = 2$, and uses $s = 12$ work cells on inputs of length $n = 256$. (a) Give the number of configurations, exactly and as a power of 2. (b) Give the space Savitch's construction uses, as an order-of-magnitude expression in $s$, and the recursion depth in this instance. (c) Compare that with the space needed to store an accepting path explicitly, and say in one clause what the comparison is the content of.

<details>
<summary>Solution</summary>

(a) $|Q| \cdot n \cdot s \cdot |\Gamma|^{s} = 4 \cdot 256 \cdot 12 \cdot 2^{12} = 4 \cdot 256 \cdot 12 \cdot 4096 = \mathbf{50{,}331{,}648} = 3 \cdot 2^{24} \approx \mathbf{2^{25.6}}$.

(b) Savitch uses $O(s^2)$ space. The recursion depth is $\log_2(\text{configurations}) = \lceil 25.6 \rceil = \mathbf{26}$ levels, and each frame stores three configuration identifiers of 26 bits, so about 78 bits per frame and roughly $26 \times 78 \approx 2000$ bits in total — which is the constant-times-$s^2$ statement made concrete, with $s^2 = 144$.

(c) An accepting path can have up to 50 million configurations, each needing 26 bits: about $1.3\times10^{9}$ bits to write down. Against Savitch's roughly 2000.

That gap — **six orders of magnitude here, and an exponential in general — is exactly what Savitch's theorem buys**, and it buys it by never holding the path, only the midpoints on the current root-to-leaf branch of the recursion.

</details>

## Connections

- **Backward:** the configuration graph that makes PATH NL-complete is [2.3](02-03-space-as-a-resource-and-savitch.md)'s, and Savitch's theorem applied at $s = \log n$ is what gives $\mathsf{NL} \subseteq \mathrm{SPACE}(\log^2 n)$ and hence one of [1.3](01-03-the-hierarchy-theorems.md)'s three unconditional separations.
- **Forward:** [2.6](02-06-immerman-szelepcsenyi-and-the-class-map.md) proves $\mathsf{NL} = \mathsf{coNL}$, which is what makes the statement "2SAT is in NL" clean rather than a statement about its complement. [5.3](05-03-nc-parallelism-and-p-completeness.md) reuses logspace reductions one class up, to define P-completeness and the limits of parallelism.
- **Sideways:** the implication graph is the same object as the resolution graph for 2-clauses, and the strongly-connected-component algorithm that actually solves 2SAT in linear time is [`algorithms` 3.2](../../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md)'s — a good illustration that a problem's complexity class and its best practical algorithm are different questions.
