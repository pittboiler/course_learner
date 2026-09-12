# Complexity Theory · Lesson 2.6: Immerman–Szelepcsényi & the class map

> ⏱ ~15 min · Module 2: Space complexity & the polynomial hierarchy · Builds on: [2.4 (TQBF and PSPACE)](02-04-tqbf-and-pspace-completeness.md), [2.5 (L and NL)](02-05-l-nl-and-nl-completeness.md) · Unlocks: [3.1 (counting)](03-01-sharp-p-counting-is-harder-than-deciding.md), [5.6 (the barriers)](05-06-relativization-natural-proofs-algebrization.md)

## Why this matters

[Lesson 2.1](02-01-conp-and-the-shape-of-np.md) made the case that NP and coNP are probably different, and that the reason is structural: a yes-instance of SAT has a one-line certificate and a no-instance seems to have none. Nobody knows a short proof of unsatisfiability, and nobody expects one.

Run the identical argument for space. A yes-instance of PATH has a certificate — the path. A no-instance seems to have none: how would you certify, in a few pointers, that *no* path exists? The analogy says $\mathsf{NL} \ne \mathsf{coNL}$.

**The analogy is wrong**, and that is the content of this lesson. Immerman and Szelepcsényi proved independently in 1987 — twenty years after the question was posed, and with essentially the same argument — that $\mathsf{NL} = \mathsf{coNL}$. Non-reachability *does* have a short nondeterministic certificate, and the trick is so simple in retrospect that its twenty-year delay is itself instructive.

Then we draw the map. Module 2 has produced seven classes and a dozen containments, and it is worth having all of it on one page, together with the honest accounting of which containments anyone has managed to make strict. The answer is three, all from [Lesson 1.3](01-03-the-hierarchy-theorems.md), and none of them is one you care about.

## The idea

**The certificate is a number.**

Suppose someone tells you that exactly $c$ vertices are reachable from $s$, and you believe them. Then you can certify that $t$ is *not* reachable: walk through all vertices in order, and for each one either skip it or claim it is reachable and prove it by exhibiting a path. Count the ones you proved. **If your count reaches $c$, you have found every reachable vertex** — and if $t$ was not among them, $t$ is unreachable.

That is the whole idea. A nondeterministic machine can do this in logspace: it holds the current vertex, a counter, and the target, and it re-guesses each path rather than storing any of them. Branches that skip a genuinely reachable vertex simply fail to reach the count $c$ and are discarded.

The only difficulty left is **where $c$ comes from**, since nobody is allowed to hand it over. It is computed, and the computation is the clever part: inductively, one distance at a time.

**Inductive counting.** Let $c_i$ be the number of vertices reachable from $s$ in at most $i$ steps. Then $c_0 = 1$, and $c_n$ is the answer, since a path in an $n$-vertex graph need never exceed $n-1$ edges.

Given $c_{i-1}$, compute $c_i$: for each vertex $v$, decide whether $v \in R_i$ by the certification scheme above, run at level $i-1$. Specifically, walk through all $u$, guess-and-verify membership of $u$ in $R_{i-1}$, count the verifications, and watch for $u = v$ or an edge $u \to v$. If the count reaches $c_{i-1}$ and no such $u$ appeared, $v \notin R_i$; if such a $u$ appeared, $v \in R_i$. Tally the $v$'s that are in, and that tally is $c_i$.

Everything stored is a constant number of vertex names and counters: $O(\log n)$ bits. The same computation is redone from scratch at every level and for every vertex, which costs enormous time. **The trade is the module's signature move once more — buy space with time.**

## The formal version

**Theorem ([Immerman-Szelepcsenyi](../reference.md#immerman-szelepcsenyi-theorem)).** For space-constructible $s(n) \ge \log n$,

$$\mathrm{NSPACE}(s(n)) = \mathrm{coNSPACE}(s(n)).$$

In particular $\mathsf{NL} = \mathsf{coNL}$, and $\mathsf{NPSPACE} = \mathsf{coNPSPACE}$ (though that also follows from Savitch).

*Proof for NL, via non-reachability.* It suffices to put $\overline{\text{PATH}}$ in $\mathsf{NL}$, since PATH is NL-complete under logspace reductions ([2.5](02-05-l-nl-and-nl-completeness.md)) and complements of complete problems carry the class.

Write $R_i$ for the set of vertices reachable from $s$ in at most $i$ steps and $c_i = |R_i|$.

*Subroutine $\textsf{InSet}(v, i, c_{i-1})$ — decides $v \in R_i$, given $c_{i-1}$:*

```
count <- 0 ; found <- false
for u = 1 to n:
    guess whether u is in R_{i-1}
    if guessed yes:
        guess a path s -> u of length <= i-1, one vertex at a time
        if the path is invalid: reject this branch
        count <- count + 1
        if u = v or (u -> v is an edge): found <- true
if count < c_{i-1}: reject this branch   # missed one: invalid run
return found
```

Every accepting branch has verified all $c_{i-1}$ members of $R_{i-1}$, so `found` is correct on those branches, and on no branch is a wrong `true` returned.

*Main loop:* $c_0 \leftarrow 1$; for $i = 1$ to $n$, set $c_i \leftarrow \#\{v : \textsf{InSet}(v,i,c_{i-1})\}$ by looping $v$ over all vertices. Finally, run $\textsf{InSet}(t, n, c_{n-1})$ and accept iff it returns false.

*Space.* The live variables are $i$, $v$, $u$, `count`, $c_{i-1}$, $c_i$, the current vertex of the guessed path, and a path-length counter: eight numbers in $[0,n]$, so $O(\log n)$ bits. The guessed paths are never stored, only walked. $\blacksquare$

**The map.** Collecting Modules 1 and 2:

$$\mathsf{L} \;\subseteq\; \mathsf{NL} \;\subseteq\; \mathsf{P} \;\subseteq\; \mathsf{NP} \;\subseteq\; \mathsf{PH} \;\subseteq\; \mathsf{PSPACE} \;\subseteq\; \mathsf{EXP},$$

with $\mathsf{NL} = \mathsf{coNL}$, $\mathsf{PSPACE} = \mathsf{NPSPACE}$, and every containment shown open — except that the *composites* $\mathsf{L} \subsetneq \mathsf{PSPACE}$, $\mathsf{NL} \subsetneq \mathsf{PSPACE}$ and $\mathsf{P} \subsetneq \mathsf{EXP}$ are strict, by the hierarchy theorems.

| class | complete problem | closed under complement? |
|---|---|---|
| $\mathsf{NL}$ | PATH | **yes** (this lesson) |
| $\mathsf{P}$ | CIRCUIT-VALUE ([5.3](05-03-nc-parallelism-and-p-completeness.md)) | yes (deterministic) |
| $\mathsf{NP}$ | SAT | **open** |
| $\mathsf{PH}$ | none, unless it collapses | yes, level by level, if it collapses |
| $\mathsf{PSPACE}$ | TQBF | yes (deterministic) |
| $\mathsf{EXP}$ | succinct circuit value | yes |

**NP is the odd one out.** Every other class in the table is known to be closed under complement, and NP's status is open — which is one more reason to find $\mathsf{NP} \ne \mathsf{coNP}$ plausible, and also a warning that plausibility arguments of this shape have failed before. That is exactly what happened to $\mathsf{NL}$ versus $\mathsf{coNL}$.

## Picture

![A vertical stack of seven boxes, from L at the bottom through NL, P, NP, PH, PSPACE to EXP at the top, each joined to the next by a line labelled contains. To the left of each box is a short note naming a representative problem. To the right, three coral brackets span from L to PSPACE, from NL to PSPACE, and from P to EXP, annotated as the only strict containments proved.](assets/02-06-fig1.svg)

Seven classes and six containments, of which **zero are known to be strict.** Every individual step in that chain could, as far as anyone has proved, be an equality.

The three coral brackets are what the hierarchy theorems deliver, and notice their shape: each spans *several* steps. That is the honest summary of the field — we can prove that some step inside a long span is strict, and never which one. $\mathsf{P} \subsetneq \mathsf{EXP}$ tells you that at least one of $\mathsf{P} \subseteq \mathsf{NP}$, $\mathsf{NP} \subseteq \mathsf{PH}$, $\mathsf{PH} \subseteq \mathsf{PSPACE}$, $\mathsf{PSPACE} \subseteq \mathsf{EXP}$ is strict, and that is all it tells you.

One consequence is worth extracting carefully, because it is often stated loosely. **Three of those four steps, if proved strict, would give $\mathsf{P} \ne \mathsf{PSPACE}$; the fourth would give nothing.** The three are the ones lying between $\mathsf{P}$ and $\mathsf{PSPACE}$: strictness at $\mathsf{P} \subseteq \mathsf{NP}$, at $\mathsf{NP} \subseteq \mathsf{PH}$, or at $\mathsf{PH} \subseteq \mathsf{PSPACE}$ each forces $\mathsf{P} \subsetneq \mathsf{PSPACE}$, since the strict step sits inside that span. Strictness at $\mathsf{PSPACE} \subseteq \mathsf{EXP}$ sits outside it and leaves $\mathsf{P} = \mathsf{PSPACE}$ entirely possible.

So the hierarchy theorem's bracket is compatible with a world in which $\mathsf{P} = \mathsf{NP} = \mathsf{PH} = \mathsf{PSPACE}$ and only the last step is strict. Nobody believes that world, and nobody can rule it out.

Finally, BQP is not on the line, and deliberately so: it contains $\mathsf{P}$, sits inside $\mathsf{PSPACE}$, and is incomparable with NP as far as anyone knows — see [`quantum-computing` 6.1](../../quantum-computing/lessons/06-01-bqp-and-the-complexity-landscape.md), which builds on this map rather than extending it.

## Worked examples

**Example 1 (mechanical): run inductive counting.** Take the digraph on $\{0,\dots,5\}$ with edges $0\to1$, $0\to2$, $1\to3$, $2\to3$, $3\to5$, $4\to0$, $4\to5$, and $s = 0$.

| $i$ | $R_i$ | $c_i$ |
|---|---|---|
| 0 | $\{0\}$ | 1 |
| 1 | $\{0,1,2\}$ | 3 |
| 2 | $\{0,1,2,3\}$ | 4 |
| 3 | $\{0,1,2,3,5\}$ | 5 |
| 4 | $\{0,1,2,3,5\}$ | 5 |
| 5 | $\{0,1,2,3,5\}$ | 5 |

The count stabilizes at 5, and **vertex 4 is unreachable** — it has edges *out* to 0 and 5, but none in.

Now see how a logspace machine certifies that. With $c_5 = 5$ in hand, it walks $u = 0,1,2,3,4,5$, guessing membership in $R_5$ and verifying each guess with a re-guessed path: $0$ (trivially), $1$ (via $0\to1$), $2$ (via $0\to2$), $3$ (via $0\to1\to3$), $5$ (via $0\to1\to3\to5$). That is five verifications, matching $c_5$, and 4 was never among them. **Branch accepts: 4 is unreachable.**

What stops a branch from lying? Suppose it skips vertex 3 and claims 4 instead. It cannot verify 4 — no path exists — so that branch dies at the verification step. Suppose it skips 3 and claims nothing extra: then its count reaches only 4, short of $c_5 = 5$, and the final check rejects the branch. **Every lie is caught by either the path check or the count check.**

**Example 2 (why you'd care): what the theorem cost the intuition.** Before 1987 the consensus was that $\mathsf{NL} \ne \mathsf{coNL}$, for exactly the reason stated at the top: reachability has obvious witnesses and non-reachability has none. The argument felt as solid as the corresponding one for NP.

It was wrong, and the reason repays study. The intuition implicitly assumed a certificate must be a *direct object* — a path, an assignment, a structure you exhibit. The actual certificate is a **count**, a global aggregate that licenses a sequence of local verifications. Nothing in the definition of nondeterminism forbids that; the intuition simply never considered it.

Two lessons follow, and both apply directly to the rest of this course.

First, **an argument of the form "I cannot imagine a certificate" is not evidence.** It is a report on the imagination. This is the single most common informal argument in complexity and it has a documented failure.

Second, and more usefully: the same move — *certify a negative claim by counting, then verify the count* — is exactly what [Module 3](03-01-sharp-p-counting-is-harder-than-deciding.md) is built on, and it is also the shape of [Lesson 4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)'s sumcheck protocol, where coNP gets short *interactive* proofs by the same trick of proving a claim about a total rather than about a witness. **Counting is how negatives get certified**, and this lesson is the first appearance of the pattern.

## Watch out

- **You might think** $\mathsf{NL} = \mathsf{coNL}$ suggests $\mathsf{NP} = \mathsf{coNP}$ — **but actually** the proof uses the configuration graph's *bounded size*, which is what makes the count small enough to carry in logspace. An NP computation tree has $2^{n^k}$ nodes, so the analogous count needs exponentially many bits and cannot be a certificate. The technique does not transfer, and nobody has found one that does.
- **You might think** the inductive counting machine is a normal algorithm — **but actually** it is thoroughly nondeterministic: most branches reject, and correctness is a statement about the surviving ones. Reading `guess whether u is in R_{i-1}` as a decision the machine makes is the commonest confusion; it makes both, and the count check kills the wrong ones.
- **You might think** the strict containments in the map tell you something about P versus NP — **but actually** $\mathsf{P} \subsetneq \mathsf{EXP}$ spans four open steps and identifies none of them. It is entirely consistent with $\mathsf{P} = \mathsf{NP} = \mathsf{PH} = \mathsf{PSPACE}$ and $\mathsf{PSPACE} \ne \mathsf{EXP}$.
- **You might think** a class being closed under complement makes it easier — **but actually** it says nothing about difficulty. PSPACE is closed under complement and is believed far harder than NP, which is not known to be.

## One-liner

> Non-reachability has a certificate after all — the number of reachable vertices — and the twenty years it took to find it is a standing warning about arguments from failure of imagination.

## Problems

**P1 (🟢)** For the digraph on $\{0,\dots,5\}$ with edges $0\to2$, $2\to4$, $4\to2$, $1\to0$, $3\to1$, $5\to3$, and $s = 0$: (a) give $R_i$ and $c_i$ for $i = 0,1,2,3$; (b) state the value at which $c_i$ stabilizes and list the unreachable vertices; (c) give the number of verifications a certifying branch performs when proving vertex 5 unreachable.

**P2 (🟡)** (a) Name the two checks in the $\textsf{InSet}$ subroutine that together prevent a branch from lying, and say which kind of lie each catches. (b) Give the total space used by the algorithm, listing the quantities held. (c) Explain in one sentence why the same algorithm cannot be adapted to show $\mathsf{NP} = \mathsf{coNP}$, referring to a specific quantity.

**P3 (🔴, optional)** Consider these four statements. For each, say what it would imply about the other three, treating the map as the only available facts.

(a) $\mathsf{P} = \mathsf{NP}$.
(b) $\mathsf{P} = \mathsf{PSPACE}$.
(c) $\mathsf{NP} = \mathsf{PSPACE}$.
(d) $\mathsf{PSPACE} = \mathsf{EXP}$.

Then state which single one of the four is known to be **false**, or state that none is, with the reason.

<details>
<summary>Solutions</summary>

**P1**

(a) Edges out of the reachable frontier: $0 \to 2$, then $2 \to 4$, then $4 \to 2$ (already present).

| $i$ | $R_i$ | $c_i$ |
|---|---|---|
| 0 | $\{0\}$ | 1 |
| 1 | $\{0,2\}$ | 2 |
| 2 | $\{0,2,4\}$ | 3 |
| 3 | $\{0,2,4\}$ | 3 |

(b) Stabilizes at $\mathbf{c = 3}$. Unreachable: $\mathbf{1, 3, 5}$ — each of them has edges leading *into* the reachable part but none coming from it, which is exactly the situation a symmetric (undirected) notion of connectivity would miss.

(c) The branch verifies every member of $R$, which is 3 vertices — $0$ by the empty path, $2$ via $0\to2$, and $4$ via $0\to2\to4$. **3 verifications.** It then observes that 5 was not among them and that the count matched $c = 3$, and accepts.

**P2**

(a) **The path check** catches a branch that claims a vertex is reachable when it is not: the branch must exhibit a path, and no valid path exists, so it dies. **The count check** catches a branch that skips a vertex that *is* reachable: skipping means the tally falls short of $c_{i-1}$, and the final comparison rejects. Together they force every surviving branch to have enumerated $R_{i-1}$ exactly.

(b) $O(\log n)$ bits, holding: the level $i$; the vertex $v$ being tested; the loop vertex $u$; the running `count`; the previous level's $c_{i-1}$; the accumulating $c_i$; the current vertex of the path being guessed; and the path's length counter. Eight numbers in $[0,n]$, each $\lceil\log_2(n+1)\rceil$ bits. **No set, list or graph is ever stored.**

(c) Because the quantity being counted — the number of reachable configurations — is $n^{O(1)}$ for a logspace machine but $2^{n^{O(1)}}$ for a polynomial-time nondeterministic one, so the count itself would need exponentially many bits and could not be carried, let alone verified, within the resource bound.

**P3**

The relevant containments are $\mathsf{P} \subseteq \mathsf{NP} \subseteq \mathsf{PSPACE} \subseteq \mathsf{EXP}$, together with $\mathsf{P} \subsetneq \mathsf{EXP}$.

(a) $\mathsf{P} = \mathsf{NP}$ implies nothing about (b), (c) or (d) on its own. It is consistent with $\mathsf{P} = \mathsf{NP} \ne \mathsf{PSPACE}$, in which case (b) and (c) are false, and it says nothing about (d).

(b) $\mathsf{P} = \mathsf{PSPACE}$ **implies (a) and (c)**, since it sandwiches NP: $\mathsf{P} \subseteq \mathsf{NP} \subseteq \mathsf{PSPACE} = \mathsf{P}$ forces all three equal. It also implies **(d) is false**: if $\mathsf{PSPACE} = \mathsf{EXP}$ as well, then $\mathsf{P} = \mathsf{EXP}$, contradicting the hierarchy theorem.

(c) $\mathsf{NP} = \mathsf{PSPACE}$ implies nothing about (a) — it is consistent with $\mathsf{P} \ne \mathsf{NP} = \mathsf{PSPACE}$ — and nothing about (d).

(d) $\mathsf{PSPACE} = \mathsf{EXP}$ implies **(b) is false**, by the same sandwich as above: $\mathsf{P} = \mathsf{PSPACE} = \mathsf{EXP}$ would contradict $\mathsf{P} \subsetneq \mathsf{EXP}$. It implies nothing about (a) or (c).

*Which is known false?* **None of them individually.** What is known is that (b) and (d) cannot both hold, because together they give $\mathsf{P} = \mathsf{EXP}$, contradicting the time hierarchy theorem. Every one of the four is, on its own, consistent with everything proved — which is a fair and slightly bleak summary of Module 2.

</details>

## Flashback

**From Lesson 2.4 (TQBF & PSPACE-completeness):** In the generalized geography game, players alternately move along directed edges to previously unvisited vertices, and a player unable to move loses. Take the graph $0\to1$, $0\to2$, $1\to3$, $2\to3$, $3\to4$, starting at vertex 0. (a) Determine whether Player 1 wins. (b) If so, give a winning first move; if not, explain why both openings fail. (c) State the maximum number of moves any play of this game can last.

<details>
<summary>Solution</summary>

(a) and (b). Both of Player 1's openings lead to the same place, which is what makes this instance instructive.

- **$0 \to 1$:** Player 2 must play $1 \to 3$ (the only edge). Player 1 then plays $3 \to 4$. Player 2 is at vertex 4, which has no outgoing edges. **Player 2 loses.**
- **$0 \to 2$:** Player 2 must play $2 \to 3$. Player 1 plays $3 \to 4$. **Player 2 loses** identically.

So **Player 1 wins**, and *both* openings are winning — the two branches merge at vertex 3, after which the parity of the remaining path decides everything.

(c) Each move consumes a vertex and no vertex repeats, so a play visits at most all 5 vertices and therefore lasts at most **4 moves**. The longest actual play here is exactly 3 moves ($0\to1\to3\to4$), and the bound $|V|-1$ is what guarantees the recursive strategy evaluator's stack stays polynomial — the condition that puts this game in PSPACE rather than EXPTIME.

</details>

## Connections

- **Backward:** the theorem is about [2.5](02-05-l-nl-and-nl-completeness.md)'s PATH and uses [2.3](02-03-space-as-a-resource-and-savitch.md)'s configuration graph, and the reason it works — the graph is polynomially sized — is precisely the reason it fails to transfer to NP.
- **Forward:** counting as a certificate is the theme of [Module 3](03-01-sharp-p-counting-is-harder-than-deciding.md), where the counts stop being small and the class $\#\mathsf{P}$ appears; and [4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md) certifies a coNP claim interactively by proving a statement about a sum, which is the same pattern with algebra added.
- **Sideways:** the guess-verify-and-count structure is inclusion-exclusion's cousin — you establish a negative by accounting for a total — and the same move drives the "count the reachable states, then conclude the rest are dead" analyses used in model checking, where it is the reason a reachability count is worth computing before asking any safety question.
