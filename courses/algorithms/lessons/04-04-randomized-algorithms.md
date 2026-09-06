# Algorithms · Lesson 4.4: Randomized algorithms

> ⏱ ~15 min · Module 4: Intractability & advanced algorithms · Builds on: [4.3 (approximation algorithms)](04-03-approximation-algorithms.md) · Course complete

## Why this matters

[Lesson 4.3](04-03-approximation-algorithms.md) gave up optimality to keep a guarantee. This lesson gives up **determinism** instead — and often gets a simpler, faster algorithm that is still exactly correct.

Randomness buys two different things, and it is worth separating them. Sometimes it buys **speed with certainty preserved**: randomized quicksort returns a correctly sorted array every single time, and the coin flips only affect how long it takes. Sometimes it buys **a working algorithm where no simple deterministic one is known**: Karger's min-cut is a page of code that finds a global minimum cut, where the deterministic alternatives are considerably more involved.

The judgement content is one distinction and one habit. The distinction: **expected running time is averaged over the algorithm's own coin flips, not over the inputs** — which means an adversary who knows your code and picks the worst input still cannot slow you down. That is a genuinely stronger guarantee than average-case analysis, and confusing the two is the single most common error here. The habit: when an algorithm can be wrong, **compute the amplification** — a failure probability of $1/1225$ sounds fatal until you notice that repetition drives it below the machine's own hardware error rate for a few thousand cheap runs.

## The idea

**Two species.**

A **Las Vegas** algorithm is *always correct*; its **running time** is a random variable. Randomized quicksort is the canonical case: whatever the coins say, the output is sorted; bad luck costs time, never correctness.

A **Monte Carlo** algorithm runs in a *fixed* time bound and is *sometimes wrong*. Karger's min-cut is one: it always returns a cut, but not necessarily the smallest. When the error is **one-sided** — it can only err in one direction — repetition fixes it, because a single lucky run is a proof.

**Where the randomness lives.** [Lesson 1.4](01-04-sorting-and-the-comparison-lower-bound.md) noted that quicksort with a *deterministic* pivot rule has a $\Theta(n^2)$ worst case, and that median-of-three only moves which inputs are bad. The reason is a game: a deterministic rule is public, so the adversary picks the input **after** seeing your algorithm and wins. Randomizing the pivot changes who moves last — the adversary must commit to the input first, and then your coins are flipped. There is no input that is bad for randomized quicksort, only unlucky runs, and the unluckiness is yours to re-roll rather than theirs to arrange.

**[Amplification](../reference.md#amplification).** If a Monte Carlo algorithm with one-sided error succeeds with probability $p$, then $T$ independent runs all fail with probability $(1-p)^T \le e^{-pT}$. The exponent is what makes this practical: to reach failure probability $\delta$ you need only

$$T \ \ge\ \frac{1}{p}\ln\frac1\delta,$$

so improving the answer from "hopeless" to "certain beyond hardware reliability" costs a **logarithmic** number of extra runs, not a proportional one.

## The formal version

**Randomized quicksort.** Choose the pivot uniformly at random from the current subarray.

**Theorem.** The expected number of comparisons is $2(n+1)H_n - 4n \approx 1.39\, n\log_2 n$.

*Proof.* Let $z_1 < z_2 < \cdots < z_n$ be the sorted elements and let $X_{ij}$ indicate that $z_i$ and $z_j$ are ever compared. Two elements are compared exactly when one of them is the **first** pivot chosen from the set $\{z_i, \dots, z_j\}$ — if any strictly-between element is picked first, the two land in different subarrays and never meet again. All $j-i+1$ of those elements are equally likely to be picked first, so

$$\Pr[X_{ij} = 1] = \frac{2}{j-i+1}.$$

By linearity of expectation (which needs no independence — the $X_{ij}$ are highly dependent, and it does not matter),

$$E[\text{comparisons}] = \sum_{i<j}\frac{2}{j-i+1} = \sum_{k=2}^{n}\frac{2(n-k+1)}{k} = 2(n+1)H_n - 4n. \qquad \blacksquare$$

| $n$ | expected | $n\log_2 n$ | worst case $\binom n2$ |
|---|---|---|---|
| 100 | 648 | 664 | 4,950 |
| 1,000 | 10,986 | 9,966 | 499,500 |
| $10^6$ | 24,785,482 | 19,931,569 | $5.0\times 10^{11}$ |

*(Formula machine-verified against simulation: 3,000 trials at $n=100$ averaged 647.)*

The worst case is still $\Theta(n^2)$ — it has not gone away. What changed is that reaching it now requires a run of astronomically bad luck rather than an input, and the probability of exceeding $c\,n\log n$ falls polynomially in $n$.

**[Karger's min cut](../reference.md#kargers-contraction-algorithm).** Repeat: pick a **uniformly random edge** and contract it, merging its endpoints and keeping parallel edges (dropping self-loops). Stop at two supernodes; the edges between them are the returned cut.

**Theorem.** A fixed minimum cut $C$ survives with probability $\ge \dfrac{2}{n(n-1)}$.

*Proof sketch.* If $|C| = k$, every vertex has degree $\ge k$ (otherwise its own single-vertex cut would be smaller), so the graph has $\ge nk/2$ edges and the chance the first contraction destroys $C$ is $\le k/(nk/2) = 2/n$. The same argument at each step, with $i$ supernodes remaining, gives $\le 2/i$. Multiplying the survival probabilities:

$$\prod_{i=3}^{n}\left(1 - \frac2i\right) = \frac{2}{n(n-1)} = \binom n2^{-1}. \qquad \blacksquare$$

Each run is $O(n^2)$ (or $O(m\,\alpha(n))$ with the union-find of [Lesson 2.4](02-04-amortized-analysis-and-union-find.md)). Running it $\binom n2 \ln n$ times gives failure probability $\le 1/n$, for $O(n^4\log n)$ total. **Karger–Stein** recurses on the contraction instead of restarting, reaching $O(n^2\log^3 n)$.

The theorem has a free corollary that no deterministic algorithm gives you: since distinct minimum cuts are disjoint events each of probability $\ge \binom n2^{-1}$, a graph has **at most $\binom n2$ minimum cuts**.

**Freivalds' algorithm (fingerprinting).** To check whether $AB = C$ for $n\times n$ matrices without multiplying: pick a random $r \in \{0,1\}^n$ and test $A(Br) \stackrel?= Cr$. Three matrix–vector products, $O(n^2)$.

If $AB = C$ it always accepts. If $AB \ne C$ it accepts with probability $\le 1/2$. So $k$ rounds give error $\le 2^{-k}$: at $k=40$ that is $9\times 10^{-13}$, and at $k=100$ it is $8\times 10^{-31}$ — smaller than the probability that a cosmic ray flips a bit during the computation. **Verifying is asymptotically cheaper than computing**, which is the same asymmetry NP is built on ([Lesson 4.1](04-01-p-np-and-polynomial-time-reductions.md)), here made concrete and practical.

## Picture

![On the left, a six-vertex graph: two triangles, 0-1-2 and 3-4-5, joined by a single red edge from 2 to 3 labelled the min cut. Below it, two boxes: bridge survives, answers 1, correct; and bridge contracted, answers 3, wrong. A caption notes that nothing inside a single run detects the bad case, which is why the algorithm keeps the smallest answer seen. On the right, a chart with independent runs from 0 to 20,000 on the horizontal axis and the chance every run missed the min cut on a logarithmic vertical axis from 1 down to 1e-8. A blue line falls steadily and straight; two red points mark 1,225 runs reaching 1/e and 16,925 runs reaching 1e-6.](assets/04-04-fig1.svg)

The left panel is one run's coin flip, laid bare. This graph's minimum cut is the single bridge $\{2,3\}$. Contract any other edge and the bridge is still there; contract the bridge and it is gone forever, and the algorithm will confidently return a cut of size 3.

**Nothing inside the run can tell which happened.** There is no check, no invariant, no assertion — the algorithm has no access to the right answer. That is what makes it Monte Carlo rather than Las Vegas, and it is why the outer loop keeps the **minimum over all runs**: the error is one-sided (the returned value is always the size of *some* cut, hence $\ge$ the minimum), so any single lucky run is correct and more runs can only help.

The right panel is why that is enough. At $n=50$ a single run succeeds with probability $\ge 1/1225$, which taken alone is not an algorithm. But the failure curve is a **straight line on a log axis** — geometric decay — so 1,225 runs reach $1/e$, and 16,925 runs reach one in a million. Each run costs $O(n^2)$, so the whole thing is still polynomial.

**That is the entire bargain of Monte Carlo design: build something that is almost always wrong but cheap and independent, then buy certainty by the logarithm.** It is worth noticing how loose the guarantee is — on this particular graph the empirical success rate is about 37%, not the promised 0.07% — because the bound must hold for the worst graph, not this one.

## Worked examples

**Example 1 (mechanical): amplification arithmetic.** A Monte Carlo primality test with one-sided error $\le 1/4$ per round (Miller–Rabin's bound).

| rounds | error bound $4^{-k}$ |
|---|---|
| 5 | $9.8\times 10^{-4}$ |
| 10 | $9.5\times 10^{-7}$ |
| 20 | $9.1\times 10^{-13}$ |
| 40 | $8.3\times 10^{-25}$ |

Twenty rounds put the error below one in a trillion; forty put it far below the chance of an undetected memory error during the same computation. This is why OpenSSL and every other library generates "probable primes" and ships them in production keys: at 40 rounds, the mathematical uncertainty is no longer the weakest link in the system.

Note the shape of the trade — the error falls **geometrically** in the work, so the marginal cost of another nine of reliability is constant. Very few engineering knobs behave that well.

**Example 2 (why you'd care): the [three guarantees, and who gets to move last](../reference.md#who-moves-last).** Sort $10^6$ elements.

| algorithm | guarantee | can an adversary who knows your code force the bad case? |
|---|---|---|
| quicksort, last-element pivot | $\Theta(n^2)$ worst, $\Theta(n\log n)$ average over *random inputs* | **yes** — feed it sorted data |
| quicksort, median-of-three | same worst case, harder to hit by accident | **yes** — a known adversarial construction exists |
| **randomized** quicksort | $\Theta(n\log n)$ **expected**, over the algorithm's coins | **no** — the input is committed before the coins are flipped |
| merge sort | $\Theta(n\log n)$ worst case, always | no |

The middle two rows are what people usually mean by "average case", and the last column is why that guarantee is weak: averaging over inputs assumes the inputs are random, and in a server the inputs arrive from whoever is sending you requests.

Randomized quicksort's expectation is over a different sample space, and that is the whole point. There is **no bad input** — only unlucky runs, at $\approx 2.5\times 10^7$ expected comparisons against a worst case of $5\times 10^{11}$ that would need luck of roughly $2^{-n}$ to approach.

**This is the same argument as [Lesson 2.4's](02-04-amortized-analysis-and-union-find.md) three kinds of guarantee**, now with the adversary written into the table — and it is worth keeping straight, because *worst-case*, *amortized* and *expected* are three different promises and only one of them survives someone actively trying to break you.

## Watch out

- **You might think** "expected $O(n\log n)$" is average-case analysis — **but actually** the average is over the **algorithm's coin flips**, not over inputs. Average-case needs an input distribution you have to justify; expected running time needs nothing about the input at all. **Every** input has expected running time $O(n\log n)$.
- **You might think** a fixed random seed is fine "for reproducibility" — **but actually** it makes the algorithm deterministic again and hands the adversary back the last move. This is not hypothetical: hash-flooding denial-of-service attacks against fixed-seed hash tables took down web frameworks in 2011, and the fix was a per-process random key (SipHash).
- **You might think** Las Vegas and Monte Carlo are stylistic labels — **but actually** they determine what repetition buys you. Repeating a Las Vegas algorithm reduces the chance of a *slow* run; repeating a one-sided Monte Carlo algorithm reduces the chance of a *wrong* answer. Repeating a **two-sided** Monte Carlo algorithm requires majority voting, and the analysis is a Chernoff bound rather than a product.
- **You might think** Karger's $1/1225$ success rate makes it useless — **but actually** amplification is logarithmic in the target error, and 17,000 runs of an $O(n^2)$ procedure is still polynomial. Judge a Monte Carlo algorithm by $\frac1p\ln\frac1\delta$ times the cost of one run, never by one run's success rate.
- **You might think** randomization removes the bad case — **but actually** randomized quicksort's worst case is still $\Theta(n^2)$. What changed is that no *input* triggers it; you now need bad luck, and you can re-roll.
- **You might think** you can substitute a fast PRNG anywhere — **but actually** the proofs assume genuine independence. For quicksort's expectation a decent PRNG is fine; for anything security-facing (hash seeds, nonces, key generation) a predictable generator restores exactly the attack the randomization was there to prevent.

## One-liner

> Randomness moves the adversary's turn from after your algorithm to before your coin flips — and when the answer can still be wrong, amplification buys certainty by the logarithm.

## Problems

**P1 (🟢)** Classify each as Las Vegas or Monte Carlo, and say what repetition buys.

(a) Randomized quicksort. (b) Karger's min cut. (c) Freivalds' matrix-product check. (d) Miller–Rabin primality. (e) A hash table with a random per-process seed.

**P2 (🟡)** You run Karger's algorithm on a graph with $n = 100$ vertices.

(a) Give the guaranteed success probability of a single run. (b) How many independent runs give failure probability at most $10^{-6}$? (c) At $O(n^2)$ per run, what is the total cost, and is it polynomial? (d) Your implementation returns the same cut on all 68,000 runs. Give two possible explanations and how you would tell them apart.

**P3 (🔴)** A service sorts user-supplied records with randomized quicksort and stores them in a hash table. During an incident review, an engineer proposes: *"Seed the RNG from a constant so incidents are reproducible. The expected running time doesn't depend on the seed, so this is free."*

(a) Is the claim about expected running time correct? (b) Explain what the change costs, precisely, in terms of who moves last. (c) Give the concrete attack against the sort and against the hash table, with a cost estimate for $10^4$ colliding keys. (d) Propose a design that gets both reproducibility and safety, and say what property of the randomness each part relies on.

<details>
<summary>Solutions</summary>

**P1**

| | class | what repetition buys |
|---|---|---|
| (a) randomized quicksort | **Las Vegas** | nothing for correctness — it is always right. Re-running only re-rolls the *time*, and you would not normally bother. |
| (b) Karger's min cut | **Monte Carlo**, one-sided | correctness. It always returns a real cut, so the answer is never *too small*; taking the minimum over $T$ runs drives failure to $(1-p)^T$. |
| (c) Freivalds | **Monte Carlo**, one-sided | correctness. It never rejects a true equality; $k$ rounds cut the false-accept probability to $2^{-k}$. |
| (d) Miller–Rabin | **Monte Carlo**, one-sided | correctness. A "composite" verdict is certain (a witness was found); "probably prime" has error $\le 4^{-k}$ after $k$ rounds. |
| (e) randomly-seeded hash table | **Las Vegas** in effect | nothing — you would not re-run it. The randomness is not there for repetition; it is there so **no fixed key set** is bad, which converts an adversary-choosable worst case into an unluckiness you own. |

The pattern: **one-sided error is what makes repetition work.** A single lucky run of (b), (c) or (d) is self-certifying — it exhibits a small cut, a mismatch, or a witness — so more runs can only improve the answer.

**P2** (a)

$$p \ \ge\ \frac{2}{n(n-1)} = \frac{2}{100\cdot 99} = \frac{2}{9900} = 2.02\times 10^{-4} = \frac{1}{4950}.$$

(b) We need $(1-p)^T \le 10^{-6}$. Using $(1-p)^T \le e^{-pT}$:

$$T \ \ge\ \frac{\ln(10^6)}{p} = \frac{13.8155}{2.02\times10^{-4}} \approx 68{,}387 \text{ runs.}$$

(Direct computation of $(1-p)^{68387}$ gives $9.9\times 10^{-7}$ ✓.)

(c) $68{,}387 \times O(n^2) = 68{,}387 \times 10^4 \approx 6.8\times 10^{8}$ elementary operations — under a second in compiled code.

**Yes, polynomial.** In general the run count is $\frac1p\ln\frac1\delta = \binom n2 \ln\frac1\delta$, which is $O(n^2\log\frac1\delta)$, so the total is $O(n^4\log\frac1\delta)$ — polynomial in $n$ and in $\log\frac1\delta$. Karger–Stein reduces this to $O(n^2\log^3 n)$ by recursing on the contracted graph rather than restarting from scratch, on the observation that early contractions are the safe ones.

(d) Two explanations, and they call for opposite responses:

1. **The graph has a unique minimum cut that is easy to hit.** The $\binom n2^{-1}$ bound is worst-case; on graphs with one clearly-cheapest cut the real success rate is far higher (on the lesson's six-vertex example it is about 37% against a bound of 6.7%). Getting the same answer 68,000 times out of 68,000 would still be surprising at $p \approx 1/4950$ unless the true rate is near 1.
2. **The randomness is broken** — the RNG is seeded identically each run, or the "random edge" selection is not uniform (a classic bug: picking a random *vertex* then a random incident edge, which biases toward low-degree vertices).

**How to tell them apart:** log the *sequence of contractions* for several runs. If the sequences are identical, the randomness is broken. If they differ but converge on the same cut, the graph is simply easy. A second check: run on a graph with a known-hard structure — e.g. two cliques joined by a single edge, where the bound is nearly tight — and confirm the empirical success rate is close to the theoretical one rather than 1.

**P3** (a) **Yes, narrowly — and that is what makes the proposal dangerous.** The expectation $2(n+1)H_n - 4n$ is over the coin flips, and it is the same value for any fixed seed *averaged over inputs*. What the claim quietly assumes is that the input is not chosen with knowledge of the seed.

(b) It **hands the last move back to the adversary.** With a random seed the order of play is: adversary commits to the input, then you flip coins — so there is no input that is bad for you. With a constant seed the algorithm is a **deterministic function of the input**, so the order becomes: you publish your algorithm (including the seed, which is now in the source code or reconstructible from a few observed timings), then the adversary picks the input. That is exactly the game [Lesson 1.4](01-04-sorting-and-the-comparison-lower-bound.md) described for median-of-three, and it is the reason randomization worked in the first place. The guarantee does not degrade gracefully — it reverts fully to worst case.

(c) **Against the sort.** With the seed known, the pivot sequence is predictable, so an attacker simulates the algorithm and constructs an input on which every pivot is the extreme remaining element. That is the $\Theta(n^2)$ worst case: for $n = 10^4$ records, $\binom{10^4}{2} \approx 5\times10^{7}$ comparisons per request instead of $\approx 1.3\times10^5$ — about **380× more work**, achievable from a single ordinary-looking request.

**Against the hash table.** With a fixed hash seed the attacker precomputes $10^4$ keys that all hash to the same bucket. Every lookup then scans a bucket of length $O(n)$, so building the table costs $\sum_{i<n} i = 5\times 10^7$ comparisons instead of $10^4$ — the table degenerates from $O(1)$ expected to $\Theta(n)$ per operation. This is the **hash-flooding** attack that took down PHP, Python, Ruby, Java and Node in 2011–2012; the fix across all of them was a per-process random key (SipHash), not a better hash function.

Both attacks cost the attacker nothing at request time — the expensive work is precomputation done once — and both are invisible in load testing with benign inputs.

(d) **Split reproducibility from unpredictability.**

- **Seed randomly per process** from the OS entropy source, and **log the seed**. An incident is then reproduced by replaying with the logged seed, which gives full determinism after the fact while the seed remains unpredictable before it. This is the standard answer and it costs nothing.
- For the hash table, use a **keyed** hash (SipHash) with a per-process random key, never a fixed-seed general-purpose hash. This relies on the key being *unpredictable to the attacker*, not merely varying — a counter would be reproducible and useless.
- For the sort, a decent PRNG suffices, because the property needed is only that the pivot sequence is **not predictable in advance**; the expectation proof does not need cryptographic quality. For the hash key it does not suffice: the attacker there gets to observe outputs and work backwards, so the key must come from a cryptographically secure source.

The distinction in that last pair is the practical payoff of knowing *where the randomness is doing its work*. Quicksort's coins protect against an adversary who chose the input beforehand; a hash key protects against one who is watching and adapting. Same technique, different threat model, different quality of randomness required.

</details>

## Flashback

**From Lesson 4.2 (the NP-complete zoo):** You want to prove a new problem $B$ is NP-complete.

(a) List the four obligations. (b) Which one do broken proofs most often skip, and what does skipping it allow? (c) Sketch the 3-SAT → Independent Set reduction's two gadgets and what each enforces. (d) Given that Independent Set is NP-complete, how much work is it to conclude the same for Vertex Cover?

<details>
<summary>Solution</summary>

(a) **1.** $B \in \mathsf{NP}$ — a polynomially-short certificate and a polynomial-time verifier. **2.** A map $f$ from a known NP-complete $A$ to $B$. **3.** Both directions: $x \in A \Rightarrow f(x) \in B$ **and** $f(x) \in B \Rightarrow x \in A$. **4.** $f$ computable in polynomial time, with polynomially-sized output.

(b) The **reverse direction of (3)**, $f(x)\in B \Rightarrow x \in A$. Skipping it allows a "reduction" that maps everything to a fixed yes-instance, which proves nothing. Substantively, it is the direction asserting the gadgets **cannot be cheated** — that any solution to the constructed instance decodes back to a genuine solution of the original.

(Obligation 4 is the other common miss, and in a subtler way: a map that solves the source instance by brute force before emitting a canonical target is answer-preserving and worthless.)

(c) **Clause gadget:** a **triangle** on the three literal-occurrences of each clause. An independent set takes at most one vertex per triangle, so demanding $m$ vertices from $m$ clauses forces exactly one per clause — the choice of *which literal satisfies this clause*.

**Consistency gadget:** an **edge** between every occurrence of $x$ and every occurrence of $\lnot x$ in different clauses. This forbids choosing both, so the set of chosen literals is a consistent partial assignment.

(d) **Almost none.** Map $(G,k) \mapsto (G, n-k)$: $S$ is independent iff $V\setminus S$ is a vertex cover, so $G$ has an independent set of size $\ge k$ iff it has a cover of size $\le n-k$. The graph is unchanged and the number takes one subtraction — the map is $O(1)$ beyond copying the input, and both directions follow from the same one-line equivalence. Add a verifier (the cover itself, checked in $O(m)$) and Vertex Cover is NP-complete. This is what transitivity buys: after the first hard reduction, most of the zoo is a paragraph each.

</details>

## Connections

- **Backward:** this closes a loop opened in [Lesson 1.4](01-04-sorting-and-the-comparison-lower-bound.md), where median-of-three could not fix quicksort's worst case because a deterministic rule lets the adversary move last — randomization is the fix that lesson pointed at. The three-guarantees table is [Lesson 2.4's](02-04-amortized-analysis-and-union-find.md) *worst-case / amortized / expected*, and the verify-is-cheaper-than-compute asymmetry in Freivalds is [Lesson 4.1's](04-01-p-np-and-polynomial-time-reductions.md) definition of NP made operational.
- **Forward (out of this course):** [computational-complexity](../../computational-complexity/syllabus.md) formalizes the randomized classes — **BPP**, **RP**, **ZPP** — and asks whether randomness adds power at all (the widely-believed answer is $\mathsf{P}=\mathsf{BPP}$, i.e. it buys convenience, not capability). [cryptography](../../cryptography/syllabus.md) inverts the roles: Miller–Rabin generates the primes, and the hardness of factoring them is the security assumption.
- **Sideways:** the concentration inequalities behind amplification are [probability-theory](../../probability-theory/syllabus.md)'s Markov, Chebyshev and Chernoff bounds; the indicator-variable trick in the quicksort proof is linearity of expectation used without independence, which is that course's most reusable move. Monte Carlo integration in [computational-physics](../../computational-physics/syllabus.md) is the same bargain in continuous form — error $O(1/\sqrt T)$ regardless of dimension — and randomized rounding in [operations-research](../../operations-research/syllabus.md) joins this lesson to [4.3](04-03-approximation-algorithms.md), turning fractional LP solutions into integral ones with a proved expected ratio.
