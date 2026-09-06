# Algorithms · Lesson 4.3: Approximation algorithms

> ⏱ ~15 min · Module 4: Intractability & advanced algorithms · Builds on: [4.2 (the NP-complete zoo)](04-02-the-np-complete-zoo.md) · Unlocks: 4.4 (randomized algorithms)

## Why this matters

You have proved your problem NP-hard. Now you still have to ship something.

The undisciplined response is to write a heuristic that looks sensible, test it on some instances, and hope. That is not obviously wrong — heuristics often work well — but it leaves you with **no idea how bad it can get**, and this lesson's central example is a case where the heuristic everyone reaches for first is, at fifty vertices, already *worse* than a two-line algorithm nobody would think to try.

An **approximation algorithm** is the disciplined version: it runs in polynomial time and comes with a **proved ratio** — a promise that its answer is never worse than some factor times the optimum, on every input, including ones an adversary picked. You give up optimality and buy a guarantee.

The judgement content is threefold. **One:** the proofs work by comparing your answer to a *lower bound on the optimum you can compute*, never to the optimum itself — you cannot compute that, and if you could you would not be here. **Two:** the ratio is only as good as its **tight example**, and finding one is how you know the analysis is not loose. **Three:** problems differ enormously in how well they can be approximated, from "arbitrarily close" (knapsack) to "no constant factor at all unless P = NP" (general TSP) — and that spread is a *theorem*, not a fact about how hard people have tried.

## The idea

**The trick that makes proofs possible.** You want to say "my answer $\le \rho \cdot \text{OPT}$", but $\text{OPT}$ is exactly the thing you cannot compute. The way out is always the same:

> Find a quantity $L$ you *can* compute, prove $L \le \text{OPT}$, then prove your answer $\le \rho L$.

For vertex cover, $L$ is the size of any **maximal matching**: the matched edges are disjoint, so any cover needs a distinct vertex for each of them, giving $|M| \le \text{OPT}$. Then output both endpoints of every matched edge — a valid cover of size $2|M| \le 2\,\text{OPT}$. Two lines of algorithm and two lines of proof, and it never fails.

**Why the natural heuristic is worse.** The rule everyone proposes first is *repeatedly take the highest-degree vertex*. It is greedy, it is intuitive, and on ordinary graphs it usually beats the matching algorithm. It also has **no constant ratio at all**: on a standard bad family its answer drifts up like $H(k) \approx \ln k$ times the optimum, and it crosses the matching algorithm's guarantee of 2 at around fifty vertices. That is the lesson in miniature: *usually better* and *provably bounded* are different properties, and only one of them survives an adversary.

**[Approximation is not one difficulty](../reference.md#approximability-np-hard-does-not-say-which-row).** Once you can prove ratios, you can also prove that certain ratios are impossible, and problems separate into a hierarchy:

| class | meaning | example |
|---|---|---|
| **FPTAS** | ratio $1+\varepsilon$ for any $\varepsilon$, in time polynomial in $n$ **and** $1/\varepsilon$ | knapsack |
| **PTAS** | ratio $1+\varepsilon$ for any fixed $\varepsilon$, time polynomial in $n$ (may be awful in $1/\varepsilon$) | Euclidean TSP |
| **constant factor** | some fixed $\rho$, no better | vertex cover (2), metric TSP (3/2) |
| **logarithmic** | $\Theta(\log n)$, and provably no better | set cover |
| **none** | no constant factor unless P = NP | general TSP, max clique |

All of these problems are NP-hard. **NP-hardness does not tell you which row you are in**, and the row is what decides your engineering options.

## The formal version

**Definition.** For a minimization problem, an algorithm is a **[$\rho$-approximation](../reference.md#approximation-ratio)** ($\rho \ge 1$) if for every instance it runs in polynomial time and outputs a feasible solution with

$$\text{ALG} \ \le\ \rho \cdot \text{OPT}.$$

For maximization the convention flips: $\text{ALG} \ge \text{OPT}/\rho$. The ratio must hold on **every** input — it is a worst-case guarantee, not an average.

**Theorem (vertex cover, 2-approximation).**

```
APPROX-VERTEX-COVER(G):
    C <- {} ;  E' <- E
    while E' is not empty:
        pick any edge (u,v) in E'
        C <- C + {u, v}
        delete from E' every edge touching u or v
    return C
```

*Proof.* The edges picked form a **matching** $M$ (each pick deletes every edge meeting its endpoints, so no two picked edges share a vertex). $C$ is a valid cover, because the loop exits only when every edge has been deleted, and an edge is deleted only when one of its endpoints entered $C$. Every cover must contain at least one endpoint of each of the $|M|$ disjoint edges, so $\text{OPT} \ge |M|$. And $|C| = 2|M| \le 2\,\text{OPT}$. $\blacksquare$

*[Tightness](../reference.md#tight-example).* On the complete bipartite graph $K_{n,n}$: a maximal matching has $n$ edges, so the algorithm returns all $2n$ vertices, while one side of size $n$ is an optimal cover. Ratio exactly 2 — so the analysis cannot be improved.

Note the shape of that proof: it never mentions what $\text{OPT}$ *is*. It bounds it from below by a computable object and compares against that.

**Theorem (greedy set cover, $H_n$-approximation).** Repeatedly take the set covering the most still-uncovered elements. This achieves ratio $H_n = 1 + \tfrac12 + \cdots + \tfrac1n = \Theta(\ln n)$, and — a striking result of Feige (1998) — **no polynomial algorithm does better than $(1-o(1))\ln n$ unless $\mathsf P = \mathsf{NP}$.** So greedy is essentially optimal, which is not something you can say often.

*Tight family.* Universe split into blocks $B_1,\dots,B_k$ with $|B_i| = 2^i$, plus two sets $A_1, A_2$ each taking half of every block. Then $|A_j| = 2^k - 1 < 2^k = |B_k|$, so greedy grabs $B_k$, then $B_{k-1}$, and so on — $k$ sets, when $\{A_1,A_2\}$ covers everything with **2**. *(Verified: at $|U| = 254$, greedy uses 7 sets against an optimum of 2.)*

**Theorem (metric TSP, 2-approximation).** If the weights satisfy the triangle inequality: build a minimum spanning tree ([Lesson 2.3](02-03-minimum-spanning-trees-kruskal-and-prim.md)), walk around it twice, and shortcut past repeats.

*Proof.* Deleting one edge from an optimal tour leaves a spanning tree, so $\text{MST} \le \text{OPT}$. The double walk costs $2\,\text{MST}$, and shortcutting only helps — by the triangle inequality. So $\text{ALG} \le 2\,\text{MST} \le 2\,\text{OPT}$. $\blacksquare$ (**Christofides** gets 3/2 by adding a minimum matching on the odd-degree vertices instead of doubling every edge.)

**The knapsack FPTAS.** The DP of [Lesson 2.5](02-05-dynamic-programming-and-knapsack.md) indexed by *value* runs in $O(n^2 v_{\max})$ — pseudo-polynomial. Round every value down to a multiple of $\mu = \varepsilon v_{\max}/n$ and run the same DP on $\lfloor v_i/\mu\rfloor$. Each item loses less than $\mu$, so the total loses less than $n\mu = \varepsilon v_{\max} \le \varepsilon\,\text{OPT}$, and the table now has $O(n/\varepsilon)$ value levels: $O(n^3/\varepsilon)$ time. **Genuinely polynomial in the input length and in $1/\varepsilon$.**

**Inapproximability of general TSP.** Take [Lesson 4.2's](04-02-the-np-complete-zoo.md) Hamiltonian-cycle reduction, but weight non-edges $\rho n + 1$ instead of 2. A Hamiltonian cycle gives a tour of cost $n$; without one, every tour uses a non-edge and costs more than $\rho n$. A $\rho$-approximation would tell the cases apart, deciding Hamiltonian Cycle in polynomial time. Hence **no constant-factor approximation for general TSP unless $\mathsf P = \mathsf{NP}$** — for every $\rho$ at once.

## Picture

![On the left, a seven-vertex graph drawn as a cycle 0 through 6 with one extra chord between 1 and 5. Three edges are drawn thick and blue, marking a maximal matching, and four vertices are ringed in red marking an optimal vertex cover of size four. Captions state that taking both endpoints of the matching gives a cover of size six, that the optimum is four, and that the ratio here is 1.5 and never worse than 2. On the right, a chart with k on a logarithmic horizontal axis from 6 to 60 and a ratio on the vertical axis from 1 to about 3.6. A dashed blue horizontal line marks the matching algorithm's guarantee of 2. A red curve, labelled greedy pick the highest-degree vertex, rises steadily from 1.33 at k equals 6, crosses the dashed line at around k equals 16, and reaches 3.35 at k equals 60.](assets/04-03-fig1.svg)

The left panel is the 2-approximation running: it picks three disjoint edges, takes all six endpoints, and returns a cover of size 6 when the optimum is 4. **The ratio here is 1.5, and the guarantee is what matters — 2, always, on every graph.**

The right panel is the point of the lesson. The red curve is the *sensible* heuristic — repeatedly take the highest-degree vertex — measured on the standard bad family, whose optimum is exactly $k$ (verified exhaustively for small $k$). It starts out better than the matching algorithm, which is why the heuristic is so tempting: on the left panel's graph it actually returns the optimal cover of size 4.

Then it crosses. **At around $k = 16$ — a graph with about fifty vertices — the intuitive heuristic is already worse than the algorithm with the proof**, and it keeps climbing like $H(k) \approx \ln k$, without bound. There is no constant $\rho$ for which it is a $\rho$-approximation.

Two habits follow. The graph you would have tested on is the one on the left, where the heuristic wins — **testing cannot establish a ratio, only refute one**. And "greedier" is not "better": the matching algorithm chooses *arbitrarily* at every step and still wins, because the guarantee comes from the lower bound it constructs, not from the cleverness of the choice.

## Worked examples

**Example 1 (mechanical): run the 2-approximation.** The 7-cycle $0{-}1{-}2{-}3{-}4{-}5{-}6{-}0$ plus the chord $\{1,5\}$, edges scanned in the order listed.

| step | edge picked | added to $C$ | edges deleted |
|---|---|---|---|
| 1 | $\{0,1\}$ | $0, 1$ | $\{0,1\},\{1,2\},\{0,6\},\{1,5\}$ |
| 2 | $\{2,3\}$ | $2, 3$ | $\{2,3\},\{3,4\}$ |
| 3 | $\{4,5\}$ | $4, 5$ | $\{4,5\},\{5,6\}$ |

All eight edges are gone. Matching $M = \{\{0,1\},\{2,3\},\{4,5\}\}$, so $\text{OPT} \ge 3$, and the algorithm returns $C = \{0,1,2,3,4,5\}$ of size 6.

The true optimum is $\{0,1,3,5\}$ of size **4** — check every edge: $\{0,1\}$→0, $\{1,2\}$→1, $\{2,3\}$→3, $\{3,4\}$→3, $\{4,5\}$→5, $\{5,6\}$→5, $\{0,6\}$→0, $\{1,5\}$→1 ✓. So the realized ratio is $6/4 = 1.5$, comfortably inside the guarantee of 2 — and note the *lower bound* the proof used, $|M| = 3$, is itself below the true optimum of 4. **The proof is loose and the guarantee still holds; that is what a worst-case bound is for.**

**Example 2 (why you'd care): choosing $\varepsilon$ on a knapsack.** 200 items, values up to $10^6$, capacity large.

| approach | cost | quality |
|---|---|---|
| exact value-DP, $O(n^2 v_{\max})$ | $4\times 10^{10}$ | optimal |
| FPTAS, $\varepsilon = 0.5$ | $1.6\times 10^{7}$ | within 50% |
| FPTAS, $\varepsilon = 0.1$ | $8\times 10^{7}$ | within 10% |
| FPTAS, $\varepsilon = 0.01$ | $8\times 10^{8}$ | within 1% |

Getting within 1% costs **50× less** than exactness, and $\varepsilon$ is a dial you turn at run time rather than a different algorithm. That is what "fully polynomial" buys: the accuracy is a parameter, not a rewrite.

Contrast with general TSP, where no such dial exists at any price — the inapproximability proof above rules out every constant factor simultaneously. **Two NP-hard problems, opposite ends of the hierarchy.** If someone tells you a problem is "NP-hard, so we'll approximate it", the follow-up question is always *which row?*

## Watch out

- **You might think** an approximation ratio is an average-case statement — **but actually** it is worst case over all inputs. "Usually within 5%" is a benchmark result, not a ratio, and the two are routinely confused in engineering write-ups.
- **You might think** a smarter greedy rule gives a better ratio — **but actually** max-degree vertex cover is smarter *and unbounded*, while the arbitrary-edge algorithm is dumber *and 2-approximate*. The guarantee comes from the **lower bound the algorithm constructs**, not from the quality of its choices.
- **You might think** you prove a ratio by comparing to the optimum — **but actually** you cannot compute the optimum, so every proof here goes through a computable lower bound: a matching for vertex cover, an MST for metric TSP, the largest remaining set for set cover. **Finding the right lower bound is the whole design problem.**
- **You might think** metric TSP's 2-approximation works on general TSP — **but actually** the shortcutting step is exactly where the triangle inequality is used, and without it shortcutting can *increase* the cost. The metric assumption is not a technicality; general TSP has no constant-factor approximation at all.
- **You might think** a proved ratio means the algorithm is the right choice — **but actually** a 2-approximation returning 1.9× on your data may lose to an unbounded heuristic returning 1.02×. The guarantee is a *floor*: ship the proved one, **measure both**, keep the guarantee as the fallback.
- **You might think** PTAS and FPTAS are the same — **but actually** a PTAS may run in $O(n^{1/\varepsilon})$, which is useless at $\varepsilon = 0.01$; an FPTAS is polynomial in $1/\varepsilon$ too. Knapsack has an FPTAS; Euclidean TSP has a PTAS whose exponent makes small $\varepsilon$ impractical.

## One-liner

> Bound the optimum from below with something you can actually compute, then bound your answer against *that* — and check the bound is tight, or you have not learned how bad you can be.

## Problems

**P1 (🟢)** Run the matching-based 2-approximation on the graph with edges

$$\{a,b\},\ \{b,c\},\ \{c,d\},\ \{d,e\},\ \{e,f\},\ \{a,f\},\ \{b,e\},$$

scanning them in that order.

(a) Give the matching and the cover it returns. (b) What lower bound on $\text{OPT}$ does the matching give? (c) Find an optimal cover by inspection and give the realized ratio. (d) The lower bound in (b) is not equal to $\text{OPT}$. Does that invalidate the proof? Explain in one sentence.

**P2 (🟡)** A team must place caching servers so every one of 200 regions is served. Each candidate site covers a known subset of regions; they want the fewest sites. They plan to use greedy set cover.

(a) Name the problem and state greedy's guarantee, with a number for $n = 200$. (b) A colleague says "let's spend a week looking for something better than a $\ln n$ factor." Respond, citing the relevant result. (c) On their data greedy picks 12 sites. What, precisely, can they conclude about the true optimum? (d) They can afford exhaustive search if the answer is at most 4 sites out of 60 candidates. Is that feasible? Give the count.

**P3 (🔴)** An engineer must route a delivery vehicle through 40 stops and writes: *"TSP is NP-hard, so I'll use the MST-doubling 2-approximation. It's proved, so we're safe."*

(a) State the condition the 2-approximation requires, and say whether road-network driving times satisfy it. Be careful — the answer is not a clean yes. (b) Suppose the condition fails on some triples. What exactly breaks in the proof? (c) Give the reduction showing that **general** TSP has no constant-factor approximation unless $\mathsf P = \mathsf{NP}$, and say why the same argument does not apply to the metric case. (d) The engineer's real instances have 40 stops. Given (a)–(c), what would you actually recommend, and what role does the approximation guarantee play?

<details>
<summary>Solutions</summary>

**P1** (a) Scanning in order:

| step | edge | added | deleted |
|---|---|---|---|
| 1 | $\{a,b\}$ | $a, b$ | $\{a,b\},\{b,c\},\{a,f\},\{b,e\}$ |
| 2 | $\{c,d\}$ | $c, d$ | $\{c,d\},\{d,e\}$ |
| 3 | $\{e,f\}$ | $e, f$ | $\{e,f\}$ |

Matching $M = \{\{a,b\},\{c,d\},\{e,f\}\}$; cover $C = \{a,b,c,d,e,f\}$, size **6**.

(b) $\text{OPT} \ge |M| = \mathbf{3}$, because the three matched edges are vertex-disjoint and any cover needs a distinct vertex for each.

(c) An optimal cover is $\{b, d, f\}$ — check: $\{a,b\}$→b ✓, $\{b,c\}$→b ✓, $\{c,d\}$→d ✓, $\{d,e\}$→d ✓, $\{e,f\}$→f ✓, $\{a,f\}$→f ✓, $\{b,e\}$→b ✓. Size **3**, and it matches the lower bound so it is certainly optimal.

Realized ratio $6/3 = \mathbf{2}$ — the worst case, achieved. (This graph is $C_6$ plus a chord; the matching happened to pick the three "wrong" edges.)

(d) **No.** The proof only needs $|M| \le \text{OPT}$, an *inequality*. A loose lower bound weakens the conclusion you can draw about this instance, but the chain $\text{ALG} = 2|M| \le 2\,\text{OPT}$ holds regardless of the slack. (Here there is no slack — $|M| = \text{OPT} = 3$ — which is exactly why the ratio came out at the full 2.)

**P2** (a) It is **set cover**: universe = 200 regions, one set per candidate site. Greedy achieves ratio $H_n = \sum_{i=1}^{n} 1/i$ where $n$ is the size of the largest set (or, more loosely, of the universe). With $n = 200$:

$$H_{200} \approx \ln 200 + 0.577 \approx 5.87.$$

So greedy's answer is guaranteed within about **5.9×** the optimum. That is a weak-sounding guarantee, and it is honest.

(b) **Advise against it.** Feige's 1998 theorem says no polynomial-time algorithm achieves ratio $(1-o(1))\ln n$ unless $\mathsf P = \mathsf{NP}$ — so greedy is, up to lower-order terms, **the best possible polynomial algorithm** for set cover. A week spent looking for an asymptotically better ratio is a week spent trying to prove $\mathsf P = \mathsf{NP}$.

What *is* worth a week: an exact solver (ILP with branch-and-cut) if the instance is small, or exploiting structure in their particular data — geographic coverage sets are often intervals or discs, and set cover restricted to such families is easier.

(c) Two conclusions, and it is worth being precise about which is which:

- **A guarantee:** $\text{OPT} \ge 12 / H_{200} \approx 12/5.87 \approx 2.05$, so $\text{OPT} \ge 3$. Weak.
- **A much better bound, for free:** greedy's own trace gives a stronger one. If the largest set has size $s$, then $\text{OPT} \ge \lceil 200/s\rceil$ — you need at least that many sets to cover 200 regions at all. If the biggest candidate site covers 30 regions, $\text{OPT}\ge 7$ and greedy's 12 is within 1.7× of optimal *on this instance*.

The general habit: the worst-case ratio is what you promise, but **instance-specific lower bounds are usually far stronger and cost nothing to compute.** Always report both.

(d) Yes, comfortably:

$$\sum_{k=0}^{4}\binom{60}{k} = 1 + 60 + 1770 + 34220 + 487635 = 523{,}686$$

subsets, each checkable in $O(200)$ region lookups — about $10^8$ elementary operations, seconds of work. So they can **prove** the optimum is $\ge 5$ (or find a solution of size $\le 4$) exactly.

Note what that does for them: combined with greedy's 12, an exhaustive check ruling out $\le 4$ narrows the answer to $[5, 12]$ — a far more useful statement than the $H_n$ guarantee alone. Exhaustive search on a *truncated* range is a standard and underused move.

**P3** (a) The 2-approximation requires the **triangle inequality**: $w(u,w) \le w(u,v) + w(v,w)$ for all triples.

For road driving times the answer is **mostly yes, but not reliably**. Detouring through an intermediate stop cannot be faster than going direct *if* the direct time is a true shortest path — and that is the catch. Real inputs come from a routing API with traffic, turn restrictions, one-way streets and asymmetry ($w(u,v)\ne w(v,u)$), and any of these can produce a triple where going via $v$ is genuinely faster than the quoted direct time. The clean fix is to **enforce** the property: replace $w$ by all-pairs shortest paths ([Lesson 3.4](03-04-bellman-ford-and-floyd-warshall.md)'s Floyd–Warshall — at $n=40$ that is $64{,}000$ operations), after which the triangle inequality holds by construction.

(b) The **shortcutting** step. The proof walks the doubled MST, which visits vertices repeatedly, then skips repeats by jumping directly from the current vertex to the next unvisited one. That jump is charged to the path it replaces, and $w(\text{jump}) \le w(\text{path})$ is *exactly* the triangle inequality applied repeatedly. Without it a shortcut can cost more than the walk it replaces, and the chain $\text{ALG}\le 2\,\text{MST}$ collapses.

Note the earlier steps survive: $\text{MST} \le \text{OPT}$ and $\text{walk} = 2\,\text{MST}$ hold for any weights. It is only the final inequality that needs the metric assumption — which is a good example of reading a proof to find *where* a hypothesis is spent.

(c) Take an instance of Hamiltonian Cycle, a graph $G$ on $n$ vertices. Build a complete weighted graph on the same vertices with

$$w(u,v) = \begin{cases} 1 & \{u,v\} \in E(G),\\ \rho n + 1 & \text{otherwise.}\end{cases}$$

- If $G$ has a Hamiltonian cycle, that tour uses $n$ edges of weight 1, so $\text{OPT} = n$.
- If not, every tour uses at least one non-edge, so $\text{OPT} > \rho n$.

A $\rho$-approximation on the first case must return at most $\rho n$; on the second it must return more than $\rho n$ (it cannot beat the optimum). So its output tells the two cases apart, and Hamiltonian Cycle would be decidable in polynomial time. Since $\rho$ was arbitrary, **no constant-factor approximation exists unless $\mathsf P = \mathsf{NP}$.**

Why this does not touch metric TSP: the constructed weights **violate the triangle inequality** as soon as $\rho n + 1 > 2$, since two weight-1 edges give a path of cost 2 that beats a direct non-edge. The construction's entire power comes from the huge gap it can open between edges and non-edges, and the triangle inequality forbids exactly that gap. **Restricting the input class is what rescues approximability** — the same move that makes bipartite vertex cover polynomial while general vertex cover is not.

(d) **Recommendation: metricize, then solve exactly, and keep the approximation as a floor.**

1. **Metricize.** Run all-pairs shortest paths on the road network to get true point-to-point times. This costs nothing at $n=40$, makes the input genuinely metric, and is the right model anyway — it lets the tour "pass through" a stop.
2. **Solve exactly.** 40 stops is well within reach of a modern exact TSP solver (Concorde, or an MILP with subtour-elimination cuts); instances of tens of thousands of cities have been solved optimally. The Held–Karp DP is $O(n^2 2^n)$, which at $n=40$ is out of reach, but branch-and-cut is not — a standing reminder that **NP-hard does not mean "your instance is unsolvable"** ([Lesson 4.1](04-01-p-np-and-polynomial-time-reductions.md)).
3. **Keep Christofides (3/2), not MST-doubling (2), as the fallback** for when the exact solve times out or the instance grows, and to sanity-check the exact solver's output.

The role of the guarantee is not to be the shipped algorithm. It is to give a **provable bracket**: the MST is a lower bound on the optimum and Christofides an upper one, so before any exact solve you already know the answer lies in $[\text{MST}, 1.5\,\text{OPT}]$ — enough to decide whether the exact solve is worth the compute. The engineer's instinct to reach for the proved algorithm is right; the mistake is treating the guarantee as the goal rather than as the safety net.

</details>

## Flashback

**From Lesson 4.1 (P, NP & reductions):** A teammate says a scheduling problem is NP-hard.

(a) What exactly does that claim rule out, and under what unproved assumption? (b) They justify it by reducing scheduling to SAT. Is that a proof? (c) Give the certificate and verifier that would show the decision version is in NP. (d) Does NP-hardness mean their production instances cannot be solved?

<details>
<summary>Solution</summary>

(a) It rules out a **polynomial-time algorithm that is correct on every input** — and only under the assumption $\mathsf P \ne \mathsf{NP}$, which is unproved. The precise statement is: if a polynomial algorithm existed for this problem, then one would exist for every problem in NP, so $\mathsf P = \mathsf{NP}$.

(b) **No — the direction is backwards.** Reducing scheduling $\le_p$ SAT shows scheduling is *no harder than* SAT, which is a solution strategy (throw it at a SAT solver), not a hardness proof. They need a known-hard problem on the left: 3-SAT $\le_p$ scheduling, with a polynomial map and **both** directions of the equivalence proved.

(c) For "is there a schedule meeting all deadlines with makespan $\le T$?": the **certificate** is the schedule itself — an assignment of jobs to machines and start times, $O(n)$ numbers. The **verifier** checks feasibility (no machine double-booked, precedences respected) and that the makespan is $\le T$, in $O(n\log n)$. Polynomial certificate, polynomial check, so the problem is in NP.

(d) **No.** NP-hardness is worst case over all inputs; it says nothing about the structured instances a real system sees. Scheduling problems with thousands of jobs are solved to optimality daily with MILP and constraint solvers. What the result buys is a decision: stop looking for an exact polynomial algorithm, and choose among approximation, exponential-but-tuned exact solving, heuristics measured on real data, or a restricted problem statement.

</details>

## Connections

- **Backward:** the lower-bound-then-compare proof shape is [Lesson 2.1's](02-01-the-greedy-method-and-interval-scheduling.md) exchange argument in a new key — there you proved greedy *equals* the optimum, here you prove it stays within a factor, and both proofs work by reasoning about the optimum you never compute. The metric TSP bound runs on [Lesson 2.3's](02-03-minimum-spanning-trees-kruskal-and-prim.md) MST, and the knapsack FPTAS is [Lesson 2.5's](02-05-dynamic-programming-and-knapsack.md) DP with the input rounded, which is the standard way a pseudo-polynomial algorithm is turned into a real one.
- **Forward:** Lesson 4.4 is the other honest response — keep the exact answer and give up determinism instead of optimality. The two combine: many of the best approximation algorithms are randomized rounding of a linear-programming relaxation.
- **Sideways:** the "relax, solve, round" pattern is the bridge to [operations-research](../../operations-research/syllabus.md), where the lower bound is an LP relaxation's optimum and the **integrality gap** is the ratio's theoretical floor — [Lesson 3.5's](03-05-max-flow-and-min-cut.md) integrality theorem is the happy case where that gap is 1 and rounding is free. In [machine-learning](../../machine-learning/syllabus.md), $k$-means is NP-hard and Lloyd's algorithm is an unbounded heuristic in exactly this lesson's sense, while $k$-means++ buys a proved $O(\log k)$ expected ratio — approximation and randomization in the same algorithm.
