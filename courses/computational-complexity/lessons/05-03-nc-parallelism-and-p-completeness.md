# Complexity Theory · Lesson 5.3: NC, parallelism & P-completeness

> ⏱ ~15 min · Module 5: Circuits, approximation & the barriers · Builds on: [4.5 (PCP)](04-05-probabilistically-checkable-proofs.md), [5.1 (Boolean circuits and P/poly)](05-01-boolean-circuits-and-p-poly.md), [2.5 (L and NL)](02-05-l-nl-and-nl-completeness.md) · Unlocks: [5.6 (the barriers)](05-06-relativization-natural-proofs-algebrization.md)

## Why this matters

[Lesson 5.1](05-01-boolean-circuits-and-p-poly.md) measured circuits by **size**, which is sequential work. This lesson measures them by **depth**, and depth is parallel time: a circuit of depth $d$ evaluates in $d$ steps if you have enough processors to do every gate at a level simultaneously.

That makes circuit depth the natural formalization of the question every engineer eventually asks: *can this be parallelized?* Not "can I use threads", but "does throwing a thousand processors at it give a thousandfold speedup, or does it give almost nothing?"

The theory gives a clean answer with a familiar shape. $\mathsf{NC}$ is the class of problems solvable in polylogarithmic depth with polynomially many gates — genuinely parallel. And there are **P-complete** problems, hardest in $\mathsf{P}$ under logspace reductions, which are in $\mathsf{NC}$ only if $\mathsf{NC} = \mathsf{P}$. Nobody believes that, so **"this problem is P-complete" is the standard evidence that it is inherently sequential**, the way NP-completeness is evidence that a problem is intractable.

It also lets [Lesson 2.5](02-05-l-nl-and-nl-completeness.md)'s point about reduction strength recur one class up, in a setting where the reason is vivid: you cannot define P-completeness with polynomial-time reductions, because a polynomial-time reduction can simply solve the problem.

## The idea

**Depth is parallel time.** Lay a circuit out in levels. Every gate at level $i$ depends only on gates at earlier levels, so all gates at a level can fire at once. With one processor per gate, evaluation takes as many steps as the circuit is deep, regardless of how wide it is. Size counts total work; depth counts the critical path.

An $n$-bit addition is the standard illustration. Ripple-carry is depth $\Theta(n)$ — each carry waits for the last. Carry-lookahead computes all carries by a prefix computation of depth $O(\log n)$, with $O(n)$ gates. **Same problem, same work up to constants, exponentially different latency**, and that difference is exactly the thing depth measures.

**The classes.** $\mathsf{NC}^k$ is decided by circuit families of polynomial size and depth $O(\log^k n)$ with fan-in 2. $\mathsf{AC}^k$ is the same with **unbounded** fan-in AND and OR gates, which lets one level do more. Then

$$\mathsf{AC}^0 \subsetneq \mathsf{NC}^1 \subseteq \mathsf{L} \subseteq \mathsf{NL} \subseteq \mathsf{AC}^1 \subseteq \mathsf{NC}^2 \subseteq \cdots \subseteq \mathsf{NC} \subseteq \mathsf{P},$$

with $\mathsf{NC} = \bigcup_k \mathsf{NC}^k$. Note where the space classes land: **logspace sits between $\mathsf{NC}^1$ and $\mathsf{NC}^2$**, so the parallel hierarchy and the space hierarchy interleave rather than being separate stories. That is not a coincidence — small space and shallow depth are both statements about how little must be held at once.

The one strict containment in that chain, $\mathsf{AC}^0\subsetneq\mathsf{NC}^1$, comes from the parity lower bound: **parity is not in $\mathsf{AC}^0$**, by Furst–Saxe–Sipser and Håstad's switching lemma. Constant depth with unbounded fan-in cannot count modulo 2, and that is one of the few unconditional lower bounds anyone has ([5.2](05-02-karp-lipton-and-the-lower-bound-program.md)).

**P-completeness.** Define $B$ to be **P-complete** if $B\in\mathsf{P}$ and every $A\in\mathsf{P}$ satisfies $A\le_{\mathsf{L}} B$ — a **logspace** reduction, for the reason [Lesson 2.5](02-05-l-nl-and-nl-completeness.md) gave: with polynomial-time reductions every nontrivial problem in $\mathsf{P}$ would be complete, since the reduction could solve the problem and output a fixed instance.

The canonical P-complete problem is **CIRCUIT-VALUE**: given a circuit and an input, what does it output? Hardness is immediate from [5.1](05-01-boolean-circuits-and-p-poly.md)'s tableau — any polynomial-time computation *is* a circuit evaluation, and building the circuit from the machine is a logspace task.

And the payoff: **if any P-complete problem is in $\mathsf{NC}$, then $\mathsf{NC} = \mathsf{P}$**, because $\mathsf{NC}$ is closed under logspace reductions. So P-completeness is evidence of inherent sequentiality, conditional on $\mathsf{NC}\ne\mathsf{P}$ — a conjecture in exactly the same epistemic position as $\mathsf{P}\ne\mathsf{NP}$, and believed for the same kind of reason.

## The formal version

**Definition ([NC and AC](../reference.md#nc-and-ac)).** $A\in\mathsf{NC}^k$ if there is a uniform circuit family of size $n^{O(1)}$ and depth $O(\log^k n)$ over fan-in-2 AND, OR and NOT deciding $A$. $\mathsf{AC}^k$ is the same with unbounded fan-in. $\mathsf{NC} = \bigcup_k\mathsf{NC}^k = \bigcup_k\mathsf{AC}^k$.

*Uniformity matters here* — without it $\mathsf{NC}^1$ would contain undecidable languages by [5.1](05-01-boolean-circuits-and-p-poly.md)'s unary trick. The standard convention is logspace-uniform: a logspace machine writes down $C_n$ given $1^n$.

**Proposition ([the chain](../reference.md#nc-hierarchy)).** $\mathsf{AC}^k\subseteq\mathsf{NC}^{k+1}\subseteq\mathsf{AC}^{k+1}$, and $\mathsf{NC}^1\subseteq\mathsf{L}\subseteq\mathsf{NL}\subseteq\mathsf{AC}^1$.

*The middle inclusion worth seeing:* $\mathsf{NL}\subseteq\mathsf{AC}^1$ because st-connectivity is solvable by repeated squaring of the adjacency matrix — $\log n$ squarings, each a matrix product of depth $O(1)$ with unbounded fan-in. And $\mathsf{AC}^k\subseteq\mathsf{NC}^{k+1}$ because an unbounded fan-in gate on $m$ inputs becomes a binary tree of depth $\log m = O(\log n)$.

**Theorem ([parity is not in AC-zero](../reference.md#parity-not-in-ac0)).** Any constant-depth-$d$ unbounded-fan-in circuit computing $\mathrm{PARITY}$ on $n$ bits has size $2^{\Omega(n^{1/(d-1)})}$.

*The mechanism.* Håstad's switching lemma: applying a random restriction — fixing most inputs to random values — collapses a small depth-2 circuit to a shallow decision tree with high probability, so repeated restrictions flatten the whole circuit. Parity survives restriction (a restricted parity is still a parity), so if the circuit were small it would flatten to a constant while parity does not. **Restriction is the handle that constant depth provides and general circuits do not.**

**Definition ([P-completeness](../reference.md#p-completeness)).** $B$ is P-complete if $B\in\mathsf{P}$ and $A\le_{\mathsf{L}}B$ for all $A\in\mathsf{P}$.

**Theorem ([CIRCUIT-VALUE is P-complete](../reference.md#circuit-value-problem)).** $\text{CVP} = \{\langle C, x\rangle : C(x) = 1\}$ is P-complete.

*Membership.* Evaluate gates in topological order: polynomial time.

*Hardness.* Let $A\in\mathsf{P}$ be decided by $M$ in time $n^k$. By [5.1](05-01-boolean-circuits-and-p-poly.md)'s tableau construction, build the circuit $C_{M,n}$ simulating $M$ on inputs of length $n$; then $x\in A\iff C_{M,n}(x) = 1$. The construction is logspace: the circuit is a regular grid of identical constant-size blocks, so a logspace machine emits it with two counters. $\blacksquare$

**Corollary ([the sequentiality argument](../reference.md#nc-vs-p)).** If some P-complete problem is in $\mathsf{NC}$ then $\mathsf{NC} = \mathsf{P}$.

*Proof.* $\mathsf{NC}$ is closed under $\le_{\mathsf{L}}$ (compose the logspace reduction with the shallow circuit, using [2.5](02-05-l-nl-and-nl-completeness.md)'s recompute-on-demand trick). If the P-complete $B \in\mathsf{NC}$ then every $A\in\mathsf{P}$ reduces to it and is in $\mathsf{NC}$. $\blacksquare$

**Some P-complete problems.** CIRCUIT-VALUE; linear programming; maximum flow; depth-first-search ordering; the lexicographically first maximal independent set. **Note that all are in $\mathsf{P}$** — these are tractable problems believed to be inherently sequential, which is a completely different claim from intractability.

## Picture

![A vertical stack of seven boxes joined by lines, reading from top to bottom P, NC, NC squared, NL, L, NC one, AC zero, with a short note beside each: CIRCUIT-VALUE is complete here; polylog depth, poly size; depth log squared n, matrix inverse and PATH; PATH; undirected connectivity; depth log n, addition and majority; depth constant, not parity.](assets/05-03-fig1.svg)

The tower reads downward from $\mathsf{P}$ to $\mathsf{AC}^0$, and the striking feature is that **the space classes sit inside it rather than beside it**. $\mathsf{L}$ and $\mathsf{NL}$ are sandwiched between $\mathsf{NC}^1$ and $\mathsf{NC}^2$, which says something real: a computation that holds little state can be made shallow, and a shallow computation holds little state.

Exactly one containment in the picture is known to be strict: $\mathsf{AC}^0\subsetneq\mathsf{NC}^1$, by the parity lower bound. Every other line is open, including $\mathsf{NC}\subseteq\mathsf{P}$, which is the one this lesson is about.

**Read the two ends as engineering advice.** A problem at the bottom parallelizes beautifully — addition, majority, sorting networks. A problem complete for the top does not, unless the conjecture fails. And the notes name the representative problems, which is how the theory is actually used: you recognize your problem as an instance of maximum flow, learn it is P-complete, and stop looking for the parallel algorithm.

One caution the figure cannot carry. $\mathsf{NC}$ requires **polylogarithmic** depth with **polynomially many** processors, which is a strong demand. Plenty of problems parallelize usefully in practice — a constant-factor or $\sqrt{n}$-factor speedup — without being anywhere near $\mathsf{NC}$. The class draws a line worth knowing, not the only line worth caring about.

## Worked examples

**Example 1 (mechanical): compute depth for two adders.** Add two $n$-bit numbers, $n = 64$.

*Ripple-carry.* Carry $c_{i+1}$ depends on $c_i$ through a constant-depth block, so the critical path is $\Theta(n)$: about $2n = \mathbf{128}$ gate delays, with $O(n)$ gates.

*Carry-lookahead via prefix computation.* Define for each bit position the pair (generate, propagate). Carries are the prefix products of these pairs under an associative operator, and a prefix computation over $n$ elements has depth $2\log_2 n$ using $O(n)$ operators (a Ladner–Fischer or Brent–Kung tree). At $n = 64$: $2\log_2 64 = \mathbf{12}$ levels, each of constant depth.

| adder | depth | gates |
|---|---|---|
| ripple-carry | $\Theta(n)$, about 128 at $n=64$ | $O(n)$ |
| prefix (lookahead) | $O(\log n)$, about 12 at $n=64$ | $O(n)$ |

**Same asymptotic work, depth $128$ versus $12$.** Addition is therefore in $\mathsf{NC}^1$, and this is the concrete reason every real processor uses a prefix adder — the transformation that buys it is exactly the one $\mathsf{NC}$ formalizes, replacing a chain of dependencies with a tree.

**Example 2 (why you'd care): recognizing an inherently sequential problem.** You have a pipeline whose bottleneck is a maximum-flow computation on a large graph, and a cluster sitting idle. Should you look for a parallel max-flow algorithm?

Maximum flow is **P-complete** under logspace reductions. So a genuinely parallel algorithm — polylog depth, polynomially many processors — would put a P-complete problem in $\mathsf{NC}$ and hence prove $\mathsf{NC} = \mathsf{P}$. That is a major open conjecture, believed false.

**The engineering conclusion is not "do not use the cluster".** It is a redirection, and the specific redirection is what makes the theory worth knowing:

- **Do not** look for a parallel algorithm with the same guarantees. The literature has been looking since the 1980s.
- **Do** parallelize elsewhere — run many independent flow computations at once, partition the graph and accept approximate answers, or use a different formulation whose parallel version is known.
- **Do** check whether your instances have structure that escapes the hardness. P-completeness is worst case, like every result in this course, and planar max-flow does have better parallel algorithms.

This is exactly the response pattern NP-hardness triggers — approximate, restrict, or re-formulate — transplanted one level down. **The two theories play the same role at different scales**: NP-completeness tells you to stop looking for a polynomial algorithm, P-completeness tells you to stop looking for a parallel one.

## Watch out

- **You might think** $\mathsf{NC}$ means "parallelizable in practice" — **but actually** it demands polylogarithmic depth with polynomially many processors, which is far stronger than any useful notion of practical speedup. A problem outside $\mathsf{NC}$ may still parallelize well by a constant factor, and one inside may need more processors than atoms.
- **You might think** P-completeness means a problem is hard — **but actually** every P-complete problem is in $\mathsf{P}$ and therefore tractable. It means the problem is *hardest within* a tractable class, and the consequence is about parallelism, not about running time.
- **You might think** P-completeness could be defined with polynomial-time reductions — **but actually** that trivializes: the reduction would just solve the problem and output a fixed yes- or no-instance, making every nontrivial problem in $\mathsf{P}$ complete. **The reduction must be weaker than the class**, which is [2.5](02-05-l-nl-and-nl-completeness.md)'s principle applied again.
- **You might think** the $\mathsf{NC}$ definition is unaffected by uniformity — **but actually** without it the unary trick of [5.1](05-01-boolean-circuits-and-p-poly.md) puts undecidable languages in $\mathsf{NC}^1$. All the statements here assume logspace-uniform families.
- **You might think** the parity lower bound is a step toward general circuit lower bounds — **but actually** it depends entirely on constant depth, through the switching lemma's random restrictions. A circuit of depth $\log n$ does not simplify under restriction, and the technique gives nothing there.

## One-liner

> Depth is parallel time, NC is the class of genuinely parallel problems, and a P-complete problem is one you should stop trying to parallelize — the same advice NP-completeness gives about polynomial algorithms, one level down.

## Problems

**P1 (🟢)** (a) Give the depth of a ripple-carry adder and of a prefix adder on $n = 256$ bits, in gate-delay units, using $\Theta(n)$ and $2\log_2 n$ respectively. (b) State which class addition belongs to. (c) State the depth of an unbounded-fan-in OR over $n$ inputs, and the depth of the same OR rebuilt with fan-in 2, and say which containment in the chain this illustrates.

**P2 (🟡)** For each statement, say whether it is true, false, or open, with a one-clause reason.

(a) Every P-complete problem is NP-complete.
(b) If CIRCUIT-VALUE is in $\mathsf{NC}$ then $\mathsf{L} = \mathsf{P}$.
(c) $\mathsf{AC}^0 \ne \mathsf{NC}^1$.
(d) Maximum flow is in $\mathsf{P}$ and is not known to be in $\mathsf{NC}$.

**P3 (🔴, optional)** (a) Prove that $\mathsf{NC}$ is closed under logspace reductions, naming the technique that handles the intermediate string. (b) Use it to prove that if any P-complete problem lies in $\mathsf{NC}$ then $\mathsf{NC} = \mathsf{P}$. (c) Explain in two sentences why the analogous statement for NP — "if any NP-complete problem is in $\mathsf{P}$ then $\mathsf{P} = \mathsf{NP}$" — has the identical proof shape, and name the one structural ingredient both arguments need.

<details>
<summary>Solutions</summary>

**P1**

(a) Ripple-carry: $\Theta(n)$, so about $2n = \mathbf{512}$ gate delays at $n = 256$. Prefix: $2\log_2 256 = 2\times 8 = \mathbf{16}$ levels.

The ratio is 32 at this width and grows without bound — the reason the transformation is worth the extra wiring.

(b) Addition is in $\mathbf{\mathsf{NC}^1}$: polynomial size ($O(n)$ gates) and depth $O(\log n)$ with fan-in 2.

(c) An unbounded-fan-in OR over $n$ inputs has depth **1**. Rebuilt with fan-in 2 it becomes a balanced binary tree of depth $\lceil\log_2 n\rceil$.

This illustrates $\mathsf{AC}^k\subseteq\mathsf{NC}^{k+1}$: each unbounded gate costs a $\log n$ factor of depth when converted to fan-in 2, so constant depth becomes $O(\log n)$ depth, $O(\log n)$ depth becomes $O(\log^2 n)$, and so on.

**P2**

(a) **False.** P-complete problems are in $\mathsf{P}$; an NP-complete problem in $\mathsf{P}$ would give $\mathsf{P} = \mathsf{NP}$. The two notions of completeness are for different classes under different reductions and coincide only if $\mathsf{P} = \mathsf{NP}$.

(b) **Does not follow.** CIRCUIT-VALUE in $\mathsf{NC}$ gives $\mathsf{NC} = \mathsf{P}$, and nothing more. Since $\mathsf{L}\subseteq\mathsf{NC}^2\subseteq\mathsf{NC}$, the conclusion $\mathsf{NC} = \mathsf{P}$ is strictly weaker than $\mathsf{L} = \mathsf{P}$: it would put every polynomial-time problem at polylogarithmic depth without putting any of them in logarithmic space. Whether $\mathsf{NC} = \mathsf{P}$ implies $\mathsf{L} = \mathsf{P}$ is itself open.

(c) **True**, and this is the one strict containment in the chain. Parity is in $\mathsf{NC}^1$ (a binary XOR tree of depth $\log n$) and provably not in $\mathsf{AC}^0$ (Furst–Saxe–Sipser, Håstad).

(d) **True.** Max-flow has polynomial-time algorithms and is P-complete under logspace reductions, so it is in $\mathsf{NC}$ only if $\mathsf{NC} = \mathsf{P}$ — which is open and believed false.

**P3**

(a) Let $A\le_{\mathsf{L}}B$ via $f$, and let $B\in\mathsf{NC}$ with circuits $\{D_m\}$ of depth $\log^k m$. To decide $A$ on input $x$: compute $f(x)$ and feed it to $D_{|f(x)|}$.

The problem is that $f(x)$ is not stored anywhere — a logspace transducer writes to a write-only tape. The technique is [Lesson 2.5](02-05-l-nl-and-nl-completeness.md)'s **recompute-on-demand**: to supply the $i$-th bit of $f(x)$, re-run the transducer from the start, counting output symbols, and emit the $i$-th. Each bit of $f(x)$ is thus computable in logspace, hence (by $\mathsf{L}\subseteq\mathsf{NC}^2$) by a circuit of depth $O(\log^2 n)$ and polynomial size.

Wire one such circuit per bit of $f(x)$ — polynomially many, in parallel, so no depth is added beyond one copy — then feed the results into $D_{|f(x)|}$. Total depth $O(\log^2 n) + O(\log^k n) = O(\log^{\max(2,k)} n)$, polynomial size. So $A \in\mathsf{NC}$. $\blacksquare$

(b) Let $B$ be P-complete and suppose $B\in\mathsf{NC}$. Take any $A\in\mathsf{P}$. By completeness $A\le_{\mathsf{L}}B$, and by (a) $\mathsf{NC}$ is closed under $\le_{\mathsf{L}}$, so $A\in\mathsf{NC}$. Since $A$ was arbitrary, $\mathsf{P}\subseteq\mathsf{NC}$; the reverse inclusion is immediate because a polylog-depth polynomial-size uniform circuit is evaluable in polynomial time. Hence $\mathsf{NC} = \mathsf{P}$. $\blacksquare$

(c) The proof shape is identical: *completeness* says everything in the big class reduces to $B$, and *closure* says the small class absorbs anything reducing into it, so $B$ landing in the small class drags the whole big class down with it.

The structural ingredient both arguments need is that **the reduction be weak enough for the small class to be closed under it**. For NP-completeness, $\mathsf{P}$ is closed under $\le_p$; for P-completeness, $\mathsf{NC}$ is closed under $\le_{\mathsf{L}}$ but *not* under $\le_p$ — which is exactly why P-completeness must be defined with logspace reductions and why using polynomial-time ones would make the notion vacuous.

</details>

## Flashback

**From Lesson 4.5 (probabilistically checkable proofs):** A PCP verifier uses $r = 2\log_2 n$ coins and $q = 3$ queries on inputs of length $n = 64$. (a) Give the number of coin sequences and the bound on proof length in bits. (b) Give the total number of bits read to push the soundness error below $10^{-6}$ by independent repetition. (c) State which class $\mathsf{PCP}(2\log n, 3)$ is contained in, and why the containment is the easy direction.

<details>
<summary>Solution</summary>

(a) Coin sequences: $2^{r} = 2^{2\log_2 64} = 64^2 = \mathbf{4096}$. Proof length: at most $q\,2^{r} = 3\times4096 = \mathbf{12{,}288}$ bits.

(b) Each repetition halves the soundness error, so $k$ repetitions give $2^{-k}$; solving $2^{-k}\le10^{-6}$ gives $k \ge 19.93$, so $k = 20$. Total bits read: $20\times3 = \mathbf{60}$.

Sixty bits of a twelve-thousand-bit proof, for confidence better than one in a million.

(c) $\mathsf{PCP}(2\log n, 3)\subseteq\mathsf{NP}$. This is the **easy** direction because the proof has polynomial length ($3n^2$ bits here), so a nondeterministic machine can guess the entire proof as its certificate and then deterministically check **all** $4096$ coin sequences — there are only polynomially many, so no randomness is needed in the simulation. The hard direction is the reverse inclusion, which is the PCP theorem itself.

</details>

## Connections

- **Backward:** the circuits being measured are [5.1](05-01-boolean-circuits-and-p-poly.md)'s, now by depth rather than size, and the tableau that made $\mathsf{P}\subseteq\mathsf{P/poly}$ is what makes CIRCUIT-VALUE P-complete. The logspace reductions and the recompute-on-demand trick are [2.5](02-05-l-nl-and-nl-completeness.md)'s, reused verbatim.
- **Forward:** [5.6](05-06-relativization-natural-proofs-algebrization.md) explains why the parity lower bound, impressive as it is, does not generalize — random restrictions need constant depth, and natural proofs explain the wider obstruction.
- **Sideways:** prefix computation is the workhorse of practical parallelism and the same associative-scan idea behind parallel prefix sums, carry-lookahead adders in [`digital-logic` 2.3](../../digital-logic/lessons/02-03-arithmetic-circuits.md), and the parallel scan primitives in GPU programming; depth as latency and size as area is precisely the trade a chip designer makes in [`computer-architecture`](../../computer-architecture/syllabus.md).
