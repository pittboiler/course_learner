# Algorithms · Lesson 4.2: The NP-complete zoo

> ⏱ ~15 min · Module 4: Intractability & advanced algorithms · Builds on: [4.1 (P, NP & reductions)](04-01-p-np-and-polynomial-time-reductions.md) · Unlocks: 4.3 (approximation algorithms)

## Why this matters

Cook–Levin gave us **one** NP-complete problem. Karp's 1972 paper turned that into twenty-one, and today the list runs to thousands. None of them needed a new hard proof — each is a reduction from something already on the list, and transitivity does the rest.

That is the practical payoff. When your problem smells hard, you almost never prove it from the definition. You **recognize it**: this is graph colouring wearing a register-allocation costume; this is bin packing with the word "shards" in it; this is set cover with the word "coverage" in it. Then you write one reduction, or often just one paragraph citing an existing one, and the question changes from *"how do I solve this?"* to *"which of the four responses do I take?"*.

The judgement content is the **reduction template** — four obligations, and the discipline to discharge all four. Real broken proofs almost always fail the same way: they check yes→yes and skip the converse, or they build the target instance with a step that is exponential in disguise. This lesson is mostly practice at spotting that.

## The idea

**3-SAT is the root of the zoo.** SAT reduces to 3-SAT (rewrite each long clause as a chain of 3-clauses with fresh variables), so 3-SAT is NP-complete too — and its rigid shape, exactly three literals per clause, makes it by far the easiest thing to reduce *from*. Almost every hardness proof you will ever read starts there.

**The [gadget](../reference.md#gadget) idea.** A reduction from 3-SAT builds a structure with two kinds of local piece:

- a **choice gadget** per clause, which lets the target problem pick which literal satisfies it, and
- a **consistency gadget** per variable, which forbids setting $x$ true in one place and false in another.

For Independent Set the gadgets are almost embarrassingly simple: a **triangle** per clause (you can pick at most one vertex from a triangle, so you must commit to one satisfying literal) and an **edge** between every literal and its negation (you can never pick both, so your choices are consistent). That is the whole reduction, and it is a good template for what a gadget *is*.

**Then the zoo grows by cheap local moves.** Once Independent Set is hard:

$$\text{Independent Set} \le_p \text{Vertex Cover} \le_p \text{Independent Set}, \qquad \text{Independent Set} \le_p \text{Clique}.$$

Both directions of the first, because $S$ is independent **iff** $V\setminus S$ is a cover — the same graph, complemented set. And Clique because $S$ is independent in $G$ **iff** $S$ is a clique in $\overline G$ — the complement graph, same vertex set. These are three views of one problem, and knowing that lets you convert a hardness result in seconds.

## The formal version

**The [reduction template](../reference.md#the-reduction-checklist-four-obligations).** To prove $B$ is NP-complete you owe **four** things:

1. **$B \in \mathsf{NP}$** — give a certificate and a polynomial verifier.
2. **A map $f$** from instances of a known NP-complete $A$ to instances of $B$.
3. **Both directions**: $x \in A \Rightarrow f(x) \in B$, and $f(x) \in B \Rightarrow x \in A$.
4. **$f$ runs in polynomial time** — including that $|f(x)|$ is polynomial in $|x|$.

Skip (1) and you have proved NP-hardness only. Skip either half of (3) and you have proved nothing. Skip (4) and you have written a slow algorithm, not a reduction.

**Theorem. 3-SAT $\le_p$ Independent Set.**

*Construction.* Given a 3-CNF formula $\varphi$ with clauses $C_1,\dots,C_m$, build $G$:

- one **vertex** per literal-occurrence: $3m$ vertices, labelled $(i,j)$ for the $j$-th literal of clause $C_i$;
- **clause edges**: join all three vertices within each clause (a triangle);
- **conflict edges**: join $(i,j)$ to $(i',j')$ whenever $i \ne i'$ and the two literals are $x$ and $\lnot x$ for the same variable.

Ask for an independent set of size $k = m$.

*($\Rightarrow$)* Let $\alpha$ satisfy $\varphi$. Each clause has at least one true literal; pick one vertex per clause. No two are in the same triangle (one per clause), and no two conflict (both literals are true under $\alpha$, so they cannot be $x$ and $\lnot x$). That is an independent set of size $m$. ✓

*($\Leftarrow$)* Let $S$ be independent with $|S| = m$. The triangles force **at most** one vertex per clause, and there are $m$ clauses, so $S$ has **exactly** one per clause. Set each chosen literal to true; this is consistent because conflict edges rule out choosing both $x$ and $\lnot x$. Variables no chosen literal mentions get any value. Every clause has a true literal, so $\varphi$ is satisfied. ✓

*Cost.* $3m$ vertices and at most $3m + \binom{3m}{2}$ edges, built by one scan over pairs: $O(m^2)$ ✓.

**Theorem. Independent Set $\le_p$ Vertex Cover.** Map $(G,k) \mapsto (G, n-k)$.

*Proof.* $S$ is independent $\iff$ no edge has both ends in $S$ $\iff$ every edge has an end in $V\setminus S$ $\iff$ $V\setminus S$ is a vertex cover. So $G$ has an independent set of size $\ge k$ iff it has a cover of size $\le n-k$. The map is the identity on the graph and one subtraction on the number — clearly polynomial. $\blacksquare$

**Theorem. Independent Set $\le_p$ Clique.** Map $(G,k) \mapsto (\overline G, k)$, where $\overline G$ has an edge exactly where $G$ does not. $S$ is independent in $G$ iff $S$ is a clique in $\overline G$, immediately from the definitions. Building $\overline G$ takes $O(n^2)$. $\blacksquare$

**The rest of the [zoo, by lineage](../reference.md#the-zoo-by-lineage).**

| problem | reduced from | gadget idea |
|---|---|---|
| 3-SAT | SAT | split long clauses with fresh variables |
| Independent Set / Clique / Vertex Cover | 3-SAT | triangle per clause, edge per contradiction |
| Graph 3-colouring | 3-SAT | palette triangle + per-clause OR-gadget |
| Subset-Sum | 3-SAT | digit blocks: one decimal column per variable and per clause |
| Hamiltonian Cycle | 3-SAT / Vertex Cover | "traverse this gadget one way or the other" |
| TSP | Hamiltonian Cycle | weight 1 on edges of $G$, weight 2 elsewhere |
| Set Cover | Vertex Cover | one set per vertex, containing its incident edges |
| Bin Packing / Knapsack (decision) | Subset-Sum | numbers become item sizes |

## Picture

![Nine circles in a row, grouped in threes, labelled with the literals of three clauses: x1, not-x2, x3; then not-x1, x2, x3; then x1, x2, not-x3. Grey arcs above each group of three form a triangle joining the three literals of that clause. Red arcs below join each literal to an occurrence of its negation elsewhere: x1 to not-x1, not-x2 to x2 twice, x3 to not-x3 twice, and not-x1 to x1. Three vertices are double-circled in blue, one per clause, marking an independent set of size three.](assets/04-02-fig1.svg)

The formula is $\varphi = (x_1 \lor \lnot x_2 \lor x_3) \land (\lnot x_1 \lor x_2 \lor x_3) \land (x_1 \lor x_2 \lor \lnot x_3)$.

**Two edge types, two jobs.** The black arcs (clause triangles) enforce *at most one pick per clause* — combined with needing $m$ picks in total, that forces *exactly* one. The red arcs (conflicts) enforce *consistency* across clauses. Neither alone would work: without triangles you could take all three literals of one clause and none of another; without conflict edges you could pick $x_1$ in one clause and $\lnot x_1$ in another and call it an assignment.

**Read the answer off the picture.** The double-circled vertices are $x_1$ (clause 1), $x_2$ (clause 2), $x_1$ (clause 3). Set $x_1 = \text{T}$, $x_2 = \text{T}$; $x_3$ is never chosen, so it is free. Check: clause 1 has $x_1$ ✓, clause 2 has $x_2$ ✓, clause 3 has $x_1$ ✓.

**The size threshold is the whole content.** The graph *always* has an independent set — a single vertex is one. The question is whether it has one of size exactly $m = 3$, and that is satisfiable-or-not translated into graph language. On an unsatisfiable formula the largest independent set is at most $m-1$: for instance the 8-clause formula on three variables that lists every possible clause is unsatisfiable, and its 24-vertex gadget graph has maximum independent set 7, one short of 8. *(Machine-verified.)*

## Worked examples

**Example 1 (mechanical): the three-graph triangle.** Take the 6-cycle $0{-}1{-}2{-}3{-}4{-}5{-}0$ with one chord $\{0,3\}$.

| question | answer | check |
|---|---|---|
| maximum independent set | $\{0, 2, 4\}$, size 3 | no two adjacent ✓ |
| minimum vertex cover | $\{1, 3, 5\}$, size 3 | every edge has an endpoint here ✓ |
| maximum clique in $\overline G$ | $\{0, 2, 4\}$, size 3 | $\overline G$ contains $\{0,2\},\{0,4\},\{2,4\}$ ✓ |

Notice $|{\rm IS}| + |{\rm VC}| = 3 + 3 = 6 = n$, exactly as the theorem says — and the cover is literally the complement of the independent set. **These are not three problems; they are one problem asked three ways.** Solving any of them in polynomial time solves all three, so all three are equally hard, and they stand or fall together.

(Machine-verified by exhaustive search over all $2^6$ subsets.)

**Example 2 (why you'd care): recognizing the costume.** Four real engineering tasks and what they actually are:

| the task | the problem | how you'd know |
|---|---|---|
| assign variables to CPU registers, no two live at once sharing | **graph $k$-colouring** | conflicts are edges, registers are colours |
| pack container images onto the fewest machines | **bin packing** | fixed capacity, minimize bins |
| choose the fewest ad segments covering every target demographic | **set cover** | universe + subsets + minimize count |
| schedule exams so no student has two at once, in the fewest slots | **graph colouring again** | same as register allocation |

All four are NP-hard, and in all four the payoff of noticing is the same: **stop looking for the exact polynomial algorithm.** What you do next is a design choice — and every one of these has a well-studied approximation (Lesson 4.3) or an industrial solver you can throw it at.

The register-allocation case is the nicest historical example: compilers really do run graph colouring, they really do use a heuristic (Chaitin's) rather than an exact algorithm, and the heuristic occasionally spills a variable to memory that a perfect colouring would have kept in a register. That is the cost of NP-hardness, denominated in nanoseconds per function call.

## Watch out

- **You might think** you can prove a problem hard by reducing it *to* something hard — **but actually** that shows only that it is no *harder*. [Lesson 4.1's](04-01-p-np-and-polynomial-time-reductions.md) rule stands: the known-hard problem goes on the **left**.
- **You might think** the $(\Leftarrow)$ direction is a formality — **but actually** it is where broken reductions break, and it is the direction that says your gadgets cannot be *cheated*. In the 3-SAT reduction it is exactly the argument that an independent set of size $m$ must have one vertex per clause and cannot contain a contradictory pair. Without it the construction could admit "solutions" that decode to nothing.
- **You might think** any transformation counts — **but actually** $f$ must be computable in polynomial time **and** produce a polynomially-sized output. "Enumerate every subset and build a set-cover instance from the ones that work" is a valid mathematical map and a worthless reduction.
- **You might think** 3-SAT being hard means 2-SAT is nearly as hard — **but actually** 2-SAT is solvable in **linear** time, by the SCC algorithm from [Lesson 3.2](03-02-topological-sort-and-strongly-connected-components.md): build the implication graph on $2n$ literals, and the formula is satisfiable iff no variable shares an SCC with its negation. One literal per clause is the entire difference between linear and NP-complete.
- **You might think** all NP-complete problems behave alike in practice — **but actually** they differ enormously. Modern SAT solvers dispatch millions of variables; general TSP is far harder to approximate than metric TSP; and knapsack has a fully polynomial approximation scheme while TSP provably has none unless P = NP. **Equivalent in the worst case is not equivalent in practice**, and Lesson 4.3 makes that precise.
- **You might think** a problem must be NP-hard because you cannot solve it — **but actually** primality looked hard for centuries and is in P. Failure to find an algorithm is not evidence; a reduction is.

## One-liner

> Build a gadget that makes the target problem *choose* and another that makes it *stay consistent*, prove both directions, and one hard problem becomes a thousand.

## Problems

**P1 (🟢)** Apply the 3-SAT → Independent Set reduction to

$$\varphi = (x_1 \lor x_2 \lor x_3) \land (\lnot x_1 \lor \lnot x_2 \lor x_3) \land (x_1 \lor \lnot x_2 \lor \lnot x_3).$$

(a) How many vertices and how many clause edges? (b) List every conflict edge. (c) What size independent set are you looking for? (d) Find one, and read off the satisfying assignment it encodes.

**P2 (🟡)** Let $G$ have vertices $\{0,\dots,5\}$ and edges

$$\{0,1\},\ \{1,2\},\ \{2,3\},\ \{3,4\},\ \{4,5\},\ \{0,5\},\ \{0,3\}.$$

(a) Give a maximum independent set and a minimum vertex cover, and verify the complement relation. (b) List the edges of $\overline G$ and give a maximum clique in it. (c) Suppose someone hands you a polynomial algorithm for Clique. Write down, in three lines, how you would use it to solve Vertex Cover. (d) Does that algorithm's existence imply $\mathsf P = \mathsf{NP}$? Justify.

**P3 (🔴)** Four claimed reductions. For each, decide whether it is a valid proof of what it claims, and if not, name precisely which of the four obligations fails.

(a) *"Vertex Cover is NP-hard. Proof: given a Vertex Cover instance $(G,k)$, map it to the Independent Set instance $(G, n-k)$. Independent Set is NP-complete, so Vertex Cover is NP-hard."*

(b) *"3-Colouring $\le_p$ 2-Colouring. Proof: given $G$, delete one vertex from every odd cycle; the result is bipartite, hence 2-colourable."*

(c) *"Subset-Sum is NP-hard. Proof: given a 3-SAT formula, enumerate all $2^n$ assignments; if one satisfies $\varphi$, output the Subset-Sum instance $(\{1\},1)$, otherwise output $(\{2\},1)$."*

(d) *"Hamiltonian Cycle $\le_p$ TSP. Proof: given $G$ on $n$ vertices, build the complete graph on the same vertices with $w(u,v)=1$ if $\{u,v\}\in E(G)$ and $w(u,v)=2$ otherwise, and ask whether there is a tour of length $\le n$."*

<details>
<summary>Solutions</summary>

**P1** (a) $3m = 3 \times 3 = \mathbf{9}$ vertices. Clause edges: one triangle per clause, so $3 \times 3 = \mathbf{9}$.

(b) Write $(i,j)$ for the $j$-th literal of clause $i$ (1-indexed clauses, 1-indexed positions). Literals:

$$C_1: x_1,\ x_2,\ x_3 \qquad C_2: \lnot x_1,\ \lnot x_2,\ x_3 \qquad C_3: x_1,\ \lnot x_2,\ \lnot x_3$$

Conflict edges join a literal to its negation in a *different* clause:

| edge | variable |
|---|---|
| $(1,1)\,x_1 \ — \ (2,1)\,\lnot x_1$ | $x_1$ |
| $(1,2)\,x_2 \ — \ (2,2)\,\lnot x_2$ | $x_2$ |
| $(1,2)\,x_2 \ — \ (3,2)\,\lnot x_2$ | $x_2$ |
| $(1,3)\,x_3 \ — \ (3,3)\,\lnot x_3$ | $x_3$ |
| $(2,1)\,\lnot x_1 \ — \ (3,1)\,x_1$ | $x_1$ |
| $(2,3)\,x_3 \ — \ (3,3)\,\lnot x_3$ | $x_3$ |

**Six** conflict edges, 15 edges in total. (Note $(2,2)\lnot x_2$ and $(3,2)\lnot x_2$ are *not* joined — same polarity, no contradiction.)

(c) Size $k = m = \mathbf{3}$, one per clause.

(d) Take $\{(1,1),\ (2,2),\ (3,1)\} = \{x_1,\ \lnot x_2,\ x_1\}$. Check independence: one per triangle ✓; $x_1$ with $\lnot x_2$ — different variables, no edge ✓; $x_1$ with $x_1$ — same polarity, no edge ✓; $\lnot x_2$ with $x_1$ ✓.

Decoding: $x_1 = \text{T}$, $x_2 = \text{F}$, and $x_3$ is unconstrained. Verify against $\varphi$: $C_1$ has $x_1$ ✓, $C_2$ has $\lnot x_2$ ✓, $C_3$ has $x_1$ ✓. Satisfied for either value of $x_3$. (Machine-verified: $\varphi$ has 5 satisfying assignments and the gadget graph's maximum independent set is exactly 3.)

**P2** (a) **Maximum independent set** $\{0,2,4\}$: check $\{0,2\}$? not an edge ✓; $\{0,4\}$? not an edge ✓; $\{2,4\}$? not an edge ✓. Size 3.

**Minimum vertex cover** $\{1,3,5\}$: $\{0,1\}$→1 ✓, $\{1,2\}$→1 ✓, $\{2,3\}$→3 ✓, $\{3,4\}$→3 ✓, $\{4,5\}$→5 ✓, $\{0,5\}$→5 ✓, $\{0,3\}$→3 ✓. Size 3.

Complement relation: $\{1,3,5\} = V \setminus \{0,2,4\}$ ✓, and $|{\rm IS}| + |{\rm VC}| = 3+3 = 6 = n$ ✓.

(b) $\overline G$ has the pairs that are *not* edges of $G$:

$$\{0,2\},\ \{0,4\},\ \{1,3\},\ \{1,4\},\ \{1,5\},\ \{2,4\},\ \{2,5\},\ \{3,5\}.$$

Maximum clique in $\overline G$: $\{0,2,4\}$ — all three pairs $\{0,2\},\{0,4\},\{2,4\}$ are present ✓. Size 3, matching the independent set as the theorem requires.

(c) Given $(G, k)$, asking for a vertex cover of size $\le k$:

1. Build $\overline G$ in $O(n^2)$.
2. Call the Clique algorithm on $(\overline G,\, n-k)$.
3. Answer **yes** iff it does — because a clique of size $n-k$ in $\overline G$ is an independent set of size $n-k$ in $G$, whose complement is a cover of size $k$.

(d) **Yes.** Clique is NP-complete, so *every* problem in NP reduces to it in polynomial time. A polynomial algorithm for Clique composed with any such reduction gives a polynomial algorithm for that problem, so $\mathsf{NP}\subseteq\mathsf P$; combined with the trivial $\mathsf P\subseteq\mathsf{NP}$, that is $\mathsf P = \mathsf{NP}$.

This is the practical content of NP-completeness: **the problems are welded together.** You are not being told "Clique is hard"; you are being told "Clique is exactly as hard as all of them at once", which is why a polynomial algorithm for any one of them would be front-page news.

**P3** (a) **Invalid — wrong direction (obligation 2).** The map goes *from* Vertex Cover *to* Independent Set, which proves Vertex Cover $\le_p$ Independent Set — i.e. Vertex Cover is **no harder** than Independent Set. That is the opposite of what is claimed.

The fix is a single word: run the same map the other way, Independent Set $(G,k) \mapsto$ Vertex Cover $(G, n-k)$. Here the reduction happens to be valid in both directions, so the conclusion is *true* — but the proof as written does not establish it, and that distinction is the point. A correct statement with an invalid proof is still an invalid proof.

(b) **Invalid — the map does not preserve the answer (obligation 3), and is not polynomial either (obligation 4).** Deleting vertices changes the instance into a *different graph*, so 2-colourability of the result says nothing about 3-colourability of the original: $K_4$ is not 3-colourable, but delete a vertex from every odd cycle and you reach a bipartite graph that is 2-colourable — a "yes" from a "no". Both directions fail.

Separately, "delete one vertex from every odd cycle" is itself NP-hard (it is odd cycle transversal), so the map cannot be computed in polynomial time. Two independent fatal flaws.

The general lesson: a reduction may not *simplify* the instance. It must translate it.

(c) **Invalid — $f$ is not polynomial-time (obligation 4).** The map is perfectly answer-preserving: it outputs a yes-instance exactly when $\varphi$ is satisfiable. But computing it requires solving 3-SAT by brute force in $\Theta(2^n)$ time, so it is not a polynomial-time reduction.

This one is worth dwelling on because it is the purest illustration of *why* obligation 4 exists. Without it, **every** decidable problem would reduce to every non-trivial problem (solve the source instance, then output a canonical yes or no target), and the whole theory would collapse to nothing. The polynomial bound on $f$ is what makes "reduces to" mean "is no harder than".

(d) **Valid.** All four obligations are met:

1. TSP (decision version) is in NP — certificate is the tour, verified by summing $n$ weights.
2. The map is stated explicitly.
3. **Both directions.** ($\Rightarrow$) If $G$ has a Hamiltonian cycle, that same cyclic order is a tour using $n$ edges of $G$, each of weight 1, so length exactly $n \le n$ ✓. ($\Leftarrow$) If there is a tour of length $\le n$, it visits all $n$ vertices and so uses exactly $n$ edges, each of weight at least 1. The total is $\le n$ only if **every** edge has weight exactly 1 — i.e. every edge of the tour is an edge of $G$ — so the tour is a Hamiltonian cycle of $G$ ✓.
4. Building the complete weighted graph is $O(n^2)$ ✓.

The threshold $n$ is doing real work in the $(\Leftarrow)$ direction: it is tight enough that a single weight-2 edge would push the tour over. Choosing that threshold correctly *is* the reduction.

A useful footnote: this same construction shows general TSP is hard to **approximate**, not just to solve — see [Lesson 4.3](04-03-approximation-algorithms.md), where replacing the weight 2 by a huge number turns any constant-factor approximation into a Hamiltonian-cycle detector.

</details>

## Flashback

**From Lesson 3.5 (Max-flow / min-cut):** You have run a max-flow algorithm and it reports a flow of value 12.

(a) How do you *prove* to a sceptic that 12 is maximum? (b) Where does that proof object come from? (c) A colleague points at a saturated edge and says "that's part of the min cut." Are they right? (d) Their implementation omits backward residual edges. What is the symptom?

<details>
<summary>Solution</summary>

(a) **Exhibit a cut of capacity 12.** Since every flow is bounded above by every cut's capacity (weak duality: all flow must cross the boundary), a flow and a cut with the same value certify each other. The sceptic checks two things independently — conservation at each vertex and the sum of the cut edges' capacities — with no need to trust the algorithm.

(b) From the **residual graph at termination**: let $S^\ast$ be the set of vertices reachable from $s$ using edges with positive residual capacity. Since no augmenting path exists, $t \notin S^\ast$, so $(S^\ast, V\setminus S^\ast)$ is a cut; every edge leaving $S^\ast$ must be saturated and every edge entering must carry zero flow, so its capacity equals $|f|$. One BFS after the algorithm stops.

(c) **Not necessarily.** Every cut edge is saturated at optimum, but the converse fails: an edge can be saturated with both endpoints on the source side, in which case it is not in the cut at all. Being in the cut is a property of an edge *relative to the vertex partition*, not of the edge alone. Compute $S^\ast$ and take the edges leaving it.

(d) The algorithm **terminates with a sub-maximal flow and reports no error**. On $s\to a\,(1000)$, $s\to b\,(1000)$, $a\to b\,(1)$, $a\to t\,(1000)$, $b\to t\,(1000)$ an unlucky first path through the middle edge leaves it stuck at 1999 when the answer is 2000. Backward edges are what let the algorithm *cancel* a bad earlier choice, and they are exactly what makes "no augmenting path" equivalent to "maximum".

</details>

## Connections

- **Backward:** the reduction discipline is [Lesson 4.1's](04-01-p-np-and-polynomial-time-reductions.md), applied. The 2-SAT contrast runs on [Lesson 3.2's](03-02-topological-sort-and-strongly-connected-components.md) SCC algorithm, and the Vertex Cover / Independent Set pair connects back to [Lesson 3.5](03-05-max-flow-and-min-cut.md), where min-cut solves minimum vertex cover **exactly** — on bipartite graphs. That contrast is the sharpest one in the module: the same problem is polynomial on bipartite inputs and NP-complete in general.
- **Forward:** Lesson 4.3 takes these exact problems — vertex cover, set cover, TSP — and asks how close you can get with a guarantee. Lesson 4.4 asks what coin flips buy.
- **Sideways:** reduction-as-hardness-transfer is the same move as [theory-of-computation 4.2](../../theory-of-computation/lessons/04-02-reducibility-and-mapping-reductions.md)'s mapping reductions, one level up the difficulty scale — there the source is the halting problem and the conclusion is undecidability rather than intractability, but the template is identical, including the requirement to prove both directions. [computational-complexity](../../computational-complexity/syllabus.md) picks up the classes and hierarchies; [operations-research](../../operations-research/syllabus.md) meets these same problems as integer programs and solves them with branch-and-cut.
