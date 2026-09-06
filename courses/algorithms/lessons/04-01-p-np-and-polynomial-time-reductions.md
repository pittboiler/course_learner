# Algorithms · Lesson 4.1: P, NP & polynomial-time reductions

> ⏱ ~15 min · Module 4: Intractability & advanced algorithms · Builds on: [3.5 (max-flow / min-cut)](03-05-max-flow-and-min-cut.md) · Unlocks: 4.2 (the NP-complete zoo)

## Why this matters

Every lesson so far handed you an algorithm. This one hands you a *reason to stop looking*.

That is worth more than it sounds. The most expensive mistake in practice is not choosing a slow algorithm — it is spending three weeks trying to make an exponential algorithm polynomial when no such algorithm is known to exist for **any** problem in its family, and the whole field has been trying since 1971. Recognizing "this is NP-hard" converts a doomed engineering project into a design decision: approximate it (Lesson 4.3), randomize it (Lesson 4.4), restrict the input, or accept exponential time on instances you can afford.

The judgement content is entirely about **precision**, because almost every popular sentence about P and NP is wrong. NP does not stand for "not polynomial." NP-hard does not mean "in NP." "Exponential" is not the definition of anything here. And above all: reductions have a **direction**, and getting it backwards proves the opposite of what you wanted — a mistake that appears in real papers and real code reviews.

## The idea

Everything here is about **decision problems**: questions with a yes/no answer. "Is there a vertex cover of size $\le k$?" rather than "find the smallest vertex cover." This is not a restriction that loses anything — if you can answer the decision question fast you can usually find the object fast by asking it a few more times — and it buys a clean theory, because a yes/no problem is just a *set of strings*: those whose answer is yes.

**P** is the set of decision problems solvable in polynomial time. Everything in Modules 1–3 lives here.

**NP** is the set of decision problems whose **yes**-answers can be *checked* in polynomial time, given a short hint. Nobody hands you the answer; the definition says that *if* someone did, you could verify it fast. The hint is called a **[certificate](../reference.md#np-certificate-verifier)**.

- Is this formula satisfiable? Certificate: a satisfying assignment. Check by evaluating.
- Does this graph have a Hamiltonian cycle? Certificate: the cycle. Check by walking it.
- Is this number composite? Certificate: a nontrivial factor. Check by dividing.

The name is short for **nondeterministic polynomial**, which is a statement about a machine that guesses. It is *not* "non-polynomial", and the confusion matters: $P \subseteq NP$, because if you can solve a problem fast you can verify it fast by ignoring the certificate and solving it yourself.

So NP captures problems where **finding is hard but checking is easy** — the shape of most optimization we actually care about. And the great open question is whether that asymmetry is real: is there anything you can check fast but not find fast?

**Reductions** are how hardness gets transferred. Writing $A \le_p B$ means: there is a polynomial-time function $f$ turning instances of $A$ into instances of $B$, preserving the answer. If you had a fast solver for $B$, you could solve $A$ by converting and calling it — so **$B$ is at least as hard as $A$**, up to polynomial factors.

Read that sentence twice, because the direction is the single most-confused thing in the subject. To prove your problem is hard, the **known-hard problem goes on the left**.

## The formal version

**Definition (P).** $A \in \mathsf{P}$ if some algorithm decides $x \in A$ in time $O(|x|^c)$ for a constant $c$.

**Definition (NP).** $A \in \mathsf{NP}$ if there is a polynomial-time **verifier** $V$ and a polynomial $p$ such that

$$x \in A \iff \exists\, y \ \text{with} \ |y| \le p(|x|) \ \text{and}\ V(x,y) = \text{accept}.$$

Two conditions, both load-bearing: the certificate $y$ must be **polynomially short**, and $V$ must run in **polynomial time**. Drop either and the definition becomes vacuous — with an unbounded certificate you could supply the entire truth table.

Note the asymmetry: the definition only constrains **yes** instances. There is no requirement that a "no" have a short certificate — that is the class **co-NP**, and whether $\mathsf{NP} = \text{co-}\mathsf{NP}$ is a second open question. In practice this is why "here is a satisfying assignment" is a one-line proof of satisfiability while "this formula is unsatisfiable" has no known short proof.

**Definition (polynomial-time / Karp reduction).** $A \le_p B$ if there is a polynomial-time computable $f$ with

$$x \in A \iff f(x) \in B.$$

The $\iff$ is **both directions** and both must be proved. "Every yes-instance maps to a yes-instance" alone is not a reduction — it would let you map everything to a fixed yes-instance of $B$ and prove nothing.

**Two facts that do all the work.**

1. If $A \le_p B$ and $B \in \mathsf{P}$, then $A \in \mathsf{P}$. *(Solve $A$ by converting and calling $B$'s solver; polynomial composed with polynomial is polynomial.)*
2. $\le_p$ is **transitive**: $A \le_p B$ and $B \le_p C$ give $A \le_p C$. *(Compose the two conversions.)*

Fact 1 read in the contrapositive is the hardness tool: if $A$ has no polynomial algorithm, neither does $B$. Fact 2 is why the zoo grows — one reduction from an already-hard problem suffices.

**[Definitions (hardness)](../reference.md#np-hard-vs-np-complete).** $B$ is **NP-hard** if $A \le_p B$ for *every* $A \in \mathsf{NP}$. $B$ is **NP-complete** if it is NP-hard **and** in NP.

NP-hard is a lower bound only, so an NP-hard problem may be far worse than NP — the halting problem is NP-hard and not even decidable ([theory-of-computation 4.1](../../theory-of-computation/lessons/04-01-diagonalization-and-the-halting-problem.md)). NP-complete means "hardest *within* NP", and it is the useful notion: if any one NP-complete problem is in P, then $\mathsf{P} = \mathsf{NP}$ and all of them are.

**[Theorem (Cook–Levin, 1971; stated)](../reference.md#cooklevin-theorem-stated).** SAT is NP-complete.

The proof encodes an arbitrary polynomial-time verifier's computation as a Boolean formula that is satisfiable exactly when the verifier accepts. It is the bootstrap: it produces the first NP-complete problem out of the definition alone, and after it, everything else is a reduction. ([computational-complexity](../../computational-complexity/syllabus.md) does the proof; this course does the reductions.)

## Picture

![On the left, an Euler diagram for the world in which P is not equal to NP: a large ellipse labelled NP contains a smaller blue ellipse labelled P holding sorting, flow and shortest paths, and a separate red ellipse labelled NP-complete holding SAT and clique, with a note that factoring and graph isomorphism live in the gap between them. On the right, the same diagram if P equals NP, with everything collapsed into one region. Below, a row of boxes: an instance x of A feeds into a polynomial-time conversion f, whose output feeds any solver for B, producing yes or no. Captions note that the known-hard problem goes on the left, and that correctness needs both directions of the equivalence.](assets/04-01-fig1.svg)

Three things to take from it.

**The gap is real and inhabited.** If $\mathsf{P} \ne \mathsf{NP}$, there are problems in NP that are neither in P nor NP-complete (Ladner's theorem guarantees this). **Factoring** is the famous suspected resident: nobody has a polynomial algorithm, and nobody has proved it NP-complete — and essentially all deployed public-key cryptography is betting on that particular square of the diagram staying occupied.

**The right-hand world is not "everything becomes fast."** If $\mathsf P = \mathsf{NP}$, one polynomial algorithm for SAT would, through the web of reductions, give polynomial algorithms for scheduling, protein folding, circuit minimization, and finding proofs of mathematical theorems of bounded length. That last one is why most people find it implausible: it would mean mathematical creativity is mechanizable in polynomial time.

**The bottom row is the whole reduction discipline.** The arrow points *from* your instance *through* the converter *into* the solver you are assuming exists. That direction is what makes the conclusion "B is at least as hard as A". Reducing your new problem **to** SAT is a perfectly good way to *solve* it — that is what SAT solvers are for — but it proves nothing about its hardness.

## Worked examples

**Example 1 (mechanical): exhibit a verifier.** Take **Subset-Sum**: given integers $S = \{a_1,\dots,a_n\}$ and a target $t$, is there a subset summing to exactly $t$?

- **Certificate:** the subset, written as $n$ bits. Length $n \le |x|$ ✓ polynomial.
- **Verifier:** add up the selected numbers and compare with $t$. With $b$-bit integers that is $O(nb)$ ✓ polynomial.
- Therefore **Subset-Sum $\in$ NP**.

Note what this argument did *not* do: it made no attempt to find the subset. Brute force over all $2^n$ subsets is exponential, and none of that appears in the proof. **Membership in NP is a claim about checking, and the checking is usually trivial** — which is why "is it in NP?" is almost never the interesting question. The interesting question is whether it is in P.

**Example 2 (why you'd care): the asymmetry, in numbers.** A SAT instance with $n = 100$ variables and 400 clauses.

| | work |
|---|---|
| **verify** one given assignment | read $400 \times 3 = 1{,}200$ literals |
| **search** all assignments | $2^{100} \approx 1.27\times 10^{30}$ |

At a billion assignments per second, the search takes $1.3 \times 10^{21}$ seconds — about $4\times 10^{13}$ years, roughly **3,000 times the current age of the universe**. Verification takes microseconds.

And notice how fast the cliff arrives:

| $n$ | $2^n$ | time at $10^9$/s |
|---|---|---|
| 20 | $10^6$ | 1 ms |
| 40 | $1.1\times 10^{12}$ | 18 minutes |
| 60 | $1.2\times 10^{18}$ | 37 years |
| 100 | $1.3\times 10^{30}$ | $4\times10^{13}$ years |

Twenty more variables costs a factor of a million. This is [Lesson 1.1's](01-01-asymptotic-notation.md) growth table with the last column filled in, and it is why "just buy a faster machine" is not a strategy: a computer a **billion** times faster moves the reachable $n$ from 60 to 90.

The practical caveat worth knowing: modern SAT solvers routinely dispatch industrial instances with *millions* of variables. They are still exponential in the worst case; real instances have structure, and heuristics exploit it. **NP-hardness is a statement about the worst case, not a prediction about your input** — which is precisely why "it's NP-hard" ends the search for a *guarantee*, not the search for a working tool.

## Watch out

- **You might think** NP means "not polynomial" — **but actually** it means *nondeterministic polynomial*, and $\mathsf{P}\subseteq\mathsf{NP}$. Sorting is in NP. Saying "this problem is NP" as a synonym for "this problem is hard" is backwards: everything easy is also in NP.
- **You might think** NP-hard and NP-complete are interchangeable — **but actually** NP-hard is only a lower bound and includes undecidable problems. NP-complete = NP-hard **and in NP**. To claim completeness you owe two proofs: a verifier, and a reduction from something already hard.
- **You might think** the reduction direction is a matter of taste — **but actually** it inverts the conclusion. *"I reduced my scheduling problem to SAT, so scheduling is NP-hard"* is **wrong** — that shows scheduling is no harder than SAT, which is how you'd *solve* it. The correct proof reduces 3-SAT **to** scheduling.
- **You might think** proving "yes maps to yes" is enough — **but actually** you must prove **both** directions. Without $f(x)\in B \Rightarrow x\in A$, the map $f(x) = (\text{a fixed satisfiable formula})$ would "reduce" everything to SAT.
- **You might think** NP-hard means your instances are hopeless — **but actually** it constrains the **worst case over all inputs**. Real SAT and TSP instances with millions of variables are solved daily. What you lose is the *guarantee*, and the right response is to measure on your actual inputs rather than to give up or to keep looking for a polynomial algorithm.
- **You might think** a problem being in NP is informative — **but actually** almost every problem you meet is in NP, and the verifier is usually a one-line observation. It is the floor of the discussion, not the content.

## One-liner

> P is what you can solve fast, NP is what you can *check* fast, and a reduction $A \le_p B$ moves hardness rightward — so the known-hard problem always goes on the left.

## Problems

**P1 (🟢)** For each problem, give a certificate and say what the verifier does, or explain why no short certificate is apparent.

(a) **Clique:** does $G$ contain $k$ mutually adjacent vertices? (b) **Graph 3-colouring:** can $G$ be coloured with 3 colours, no edge monochromatic? (c) **Tautology:** is this Boolean formula true under *every* assignment? (d) **Composite:** is $N$ composite?

**P2 (🟡)** A teammate writes in a design doc: *"Our route-optimization problem is NP. I proved it by reducing it to the Travelling Salesman Problem, which is NP-complete. So there's no point looking for a polynomial algorithm."*

(a) Identify every error in that sentence — there are three. (b) State what their reduction *does* establish. (c) State exactly what they would need to prove instead, in the correct direction. (d) Suppose they do prove it. Does that mean their production instances are unsolvable? Answer carefully.

**P3 (🔴)** Define $\text{MAX-CUT-}k$: given a graph $G$ and integer $k$, is there a cut with at least $k$ edges crossing?

(a) Prove $\text{MAX-CUT-}k \in \mathsf{NP}$. (b) [Lesson 3.5](03-05-max-flow-and-min-cut.md) computed *minimum* cuts in polynomial time. MAX-CUT is NP-complete. Explain why "min is easy, max must be easy too" fails here, and give a second pair of problems where the same asymmetry appears. (c) A colleague proposes solving MAX-CUT by negating all capacities and running min-cut. Say precisely what goes wrong. (d) Given a hypothetical polynomial algorithm for the *decision* problem $\text{MAX-CUT-}k$, describe how to find an actual maximum cut in polynomial time, and count the calls.

<details>
<summary>Solutions</summary>

**P1** (a) **Clique.** Certificate: the list of $k$ vertices. Verifier: check all $\binom k2$ pairs are edges — $O(k^2)$ lookups. ✓ In NP.

(b) **3-colouring.** Certificate: the colour assignment, one of 3 values per vertex ($O(n)$). Verifier: scan every edge and check its endpoints differ — $O(m)$. ✓ In NP.

(c) **Tautology.** **No short certificate is apparent**, and this is the interesting one. A satisfying assignment proves *satisfiability*, but "true under every assignment" is a claim about all $2^n$ assignments, and listing them is not polynomially short. Tautology is the complement of "is $\lnot\varphi$ satisfiable", so it sits in **co-NP**, and it is co-NP-complete. It is in NP only if $\mathsf{NP} = \text{co-}\mathsf{NP}$, which is open.

This is exactly the yes/no asymmetry in the definition: NP only ever promises short proofs for **yes**.

(d) **Composite.** Certificate: a nontrivial factor $d$. Verifier: check $1 < d < N$ and $N \bmod d = 0$ — one division on $\log N$-bit numbers. ✓ In NP.

Worth noting: primality (the complement) is *also* in NP, by a much cleverer certificate (Pratt), and since 2002 both are known to be in **P** outright by the AKS algorithm. So this pair is in $\mathsf P$, which puts it in NP and co-NP — and it is a good reminder that "I can't find a polynomial algorithm" is not evidence of hardness.

**P2** (a) Three errors:

1. **"Our problem is NP."** Category error — NP is a *set of problems*, so a problem is *in* NP, and being in NP says nothing about hardness. Sorting is in NP. They almost certainly meant NP-**hard**.
2. **The reduction runs the wrong way.** They showed *their problem* $\le_p$ TSP. That proves their problem is **no harder than** TSP, which is the opposite of a hardness result — and it is exactly what you'd do to *solve* it.
3. **"So there's no point looking for a polynomial algorithm."** Even granting NP-hardness, this does not follow as stated: NP-hardness rules out a polynomial algorithm only *if* $\mathsf P \ne \mathsf{NP}$, which is unproved. (The honest sentence is "no polynomial algorithm is known, and finding one would resolve a famous open problem.")

(b) It establishes that their problem is **in NP-hard's shadow rather than its source**: routing is polynomial-time reducible to TSP, so any TSP solver solves it. That is a genuinely useful engineering result — it means they can throw their instances at an off-the-shelf TSP or MILP solver — but it is a *solution strategy*, not a lower bound.

(c) They need a reduction in the other direction: take a known NP-complete problem (TSP, or better, Hamiltonian Cycle, which reduces to TSP cleanly) and show

$$\text{Hamiltonian Cycle} \ \le_p\ \text{their routing problem},$$

with a polynomial-time map $f$ and a proof of **both** directions of $x \in \text{HC} \iff f(x) \in \text{Routing}$. Plus, for completeness rather than just hardness, a verifier showing their problem is in NP.

(d) **No.** NP-hardness is a worst-case statement over *all* inputs of all sizes. It says no algorithm is fast on every instance; it says nothing about the instances they actually have, which are structured (real road networks, realistic vehicle counts, time windows). Commercial routing software solves instances with thousands of stops daily using branch-and-cut and good heuristics.

What the hardness result *does* buy them is a decision: stop searching for an exact polynomial algorithm, and pick from the four honest responses — exponential-but-tuned exact solving (MILP), approximation with a proven ratio (Lesson 4.3), heuristics measured on real data, or a restricted problem statement that is provably easier.

**P3** (a) **Certificate:** the vertex partition — one bit per vertex, so $n$ bits ✓ polynomially short. **Verifier:** scan every edge and count those whose endpoints got different bits; accept if the count is $\ge k$. That is $O(m)$ ✓ polynomial. Hence $\text{MAX-CUT-}k \in \mathsf{NP}$.

(b) "Min is easy so max is easy" fails because **the two problems are not related by any transformation that preserves polynomial-time solvability**. They share the word "cut" and nothing else structurally: min-cut is solved by a duality with flows (every cut is an upper bound on flow, so a matching pair certifies both), and no such dual object exists for max-cut. Extremal direction is not a property that transfers.

The concrete reason the flow machinery does not carry over: max-flow min-cut works because **augmenting until stuck is optimal**, and that argument uses the *minimality* direction essentially. There is no "augmenting path" whose exhaustion certifies a maximum cut.

Two more pairs with the same asymmetry:

| easy direction | hard direction |
|---|---|
| shortest path (Dijkstra, $O(m\log n)$) | **longest simple path** (NP-hard; a Hamiltonian path is the extreme case) |
| minimum spanning tree (Kruskal, $O(m\log n)$) | **minimum-degree spanning tree**, or minimum Steiner tree (NP-hard) |
| 2-SAT (linear, via SCCs — [Lesson 3.2](03-02-topological-sort-and-strongly-connected-components.md)) | **3-SAT** (NP-complete) |

The last pair is the sharpest: one more literal per clause moves a linear-time problem to the canonical hard one.

(c) Negating capacities produces **negative capacities**, which the max-flow machinery is not merely slow on but *undefined* on. Concretely:

- The residual-graph construction assumes $0 \le f(u,v) \le c(u,v)$; with $c < 0$ that interval is empty and no valid flow exists.
- Weak duality ($|f| \le \operatorname{cap}(S,T)$) is proved by dropping a term because it is non-negative. With negative capacities the inequality reverses and the max-flow min-cut theorem does not hold.
- Even ignoring the algorithm, "minimum cut of the negated graph" would be the **maximum-weight cut of the original with all cuts allowed** — but min-cut also requires the cut to separate a specified $s$ and $t$, whereas MAX-CUT is a **global** partition with no designated terminals. Two different problems.

This is the same shape as [Lesson 3.3's](03-03-dijkstras-shortest-paths.md) "add a constant to remove negative edges": a syntactic transformation that leaves the algorithm's stated preconditions violated, so the guarantee simply does not apply.

(d) **Search reduces to decision by binary search, then greedy fixing.**

*Step 1 — find the optimal value.* The number of crossing edges is between $0$ and $m$, so binary-search $k$ over $[0, m]$, calling the decision oracle each time. That is $\lceil \log_2(m+1)\rceil$ calls and returns $\text{OPT}$.

*Step 2 — find an actual cut of that value.* Fix vertices one at a time. Add a constraint forcing $v_1$ and $v_2$ to the same side (implementable by merging them into a single vertex, summing parallel edges) and ask whether a cut of value $\text{OPT}$ still exists. If yes, commit to that merge; if no, they must be on opposite sides, so merge $v_1$ with $v_2$'s *complement* side instead. Each of the $n-1$ remaining vertices is resolved with $O(1)$ oracle calls.

**Total: $O(\log m + n)$ oracle calls**, each on an instance no larger than the original — polynomial. This is the general reason the theory can restrict attention to decision problems without losing the optimization ones: *self-reducibility* makes them polynomially equivalent.

</details>

## Flashback

**From Lesson 3.4 (Bellman–Ford & Floyd–Warshall):** You must compute shortest paths on a graph with negative edges.

(a) Which algorithm, and what is its cost? (b) How does it detect a negative cycle, and what is the limitation of that test? (c) You now need *all-pairs* shortest paths on a sparse graph with negative edges. What are your two options and which wins? (d) Which loop of Floyd–Warshall must be outermost, and what breaks otherwise?

<details>
<summary>Solution</summary>

(a) **Bellman–Ford**, $\Theta(nm)$: relax every edge $|V|-1$ times. The bound comes from the invariant that after round $k$, $d[v]$ is at most the weight of the best path using $\le k$ edges — and with no negative cycle some shortest path is simple, hence uses at most $|V|-1$ edges.

(b) Run **one extra round**. If any edge still relaxes, a shortest path would need $|V|$ edges, so it repeats a vertex and got cheaper going round — a negative cycle. The limitation: it only detects cycles **reachable from the source**. A negative cycle in a disconnected region leaves every $d$ at $\infty$, no relaxation fires, and the test reports nothing. Fix: add a virtual source with weight-0 edges to every vertex.

(c) **Floyd–Warshall** at $\Theta(n^3)$, or **Johnson's algorithm** at $O(nm\log n)$ — one Bellman–Ford to compute a potential $h$, reweight by $w'(u,v) = w(u,v)+h(u)-h(v)$, then $n$ Dijkstras. On a sparse graph Johnson wins: at $n=10^4$, $m=5\times10^4$ it is about $8.5\times10^9$ steps against Floyd–Warshall's $10^{12}$, a factor of roughly 120. (On a dense graph the comparison flips.)

(d) The **$k$ loop**. $D^{(k)}[i][j]$ is defined as the best $i\to j$ path with intermediates drawn from $\{1..k\}$, and the recursion needs *all* pairs solved for $\{1..k-1\}$ before any of them may use $k$. With $k$ innermost you compute values that reference intermediate sets that were never completed, producing a table that is wrong in a way small test cases often fail to catch.

</details>

## Connections

- **Backward:** the whole module is the negative image of Modules 1–3. [Lesson 3.5's](03-05-max-flow-and-min-cut.md) min-cut had a *certificate* — a cut you could check by hand — and NP is that idea promoted to a definition: a class of problems where a checkable certificate is all we are guaranteed. The growth table is [Lesson 1.1's](01-01-asymptotic-notation.md), read at $n = 100$.
- **Forward:** Lesson 4.2 uses Cook–Levin as a seed and grows the zoo by reduction. Lessons 4.3 and 4.4 are the two honest responses once a problem lands in it.
- **Sideways:** the diagonalization that makes the halting problem undecidable is the same technique one class up — [theory-of-computation 4.1](../../theory-of-computation/lessons/04-01-diagonalization-and-the-halting-problem.md) and [4.4](../../theory-of-computation/lessons/04-04-a-first-look-at-p-vs-np.md) build the computability floor this sits on. The bet that factoring is in the P/NP-complete gap is what [cryptography](../../cryptography/syllabus.md) is built on: RSA is secure only because *nobody* has found the polynomial algorithm, not because anyone proved there isn't one.
