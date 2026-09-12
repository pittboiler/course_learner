# Complexity Theory · Lesson 3.3: Toda's theorem & approximate counting

> ⏱ ~15 min · Module 3: Counting · Builds on: [3.2 (#P-completeness)](03-02-sharp-p-completeness-and-parsimonious-reductions.md), [2.2 (the polynomial hierarchy)](02-02-the-polynomial-hierarchy.md) · Unlocks: [4.1 (randomness as a resource)](04-01-randomness-as-a-resource.md)

## Why this matters

Two questions close out the module, and the answers point in opposite directions.

**How hard is counting, exactly?** We know $\#\mathsf{P}$ is at least as hard as NP and coNP. Toda's theorem, from 1991, gives the real answer: $\mathsf{PH} \subseteq \mathsf{P}^{\#\mathsf{P}}$. A single oracle that returns the *number* of satisfying assignments is enough to decide every problem at every level of the polynomial hierarchy, in polynomial time. **One number buys the whole tower.** This is one of the few results in complexity that genuinely reorders your intuition: counting is not a step above deciding, it is above everything Module 2 built.

**Can we approximate instead?** Sometimes, spectacularly. Counting satisfying assignments of a DNF formula is $\#\mathsf{P}$-complete, and there is a randomized algorithm that gets within any multiplicative $1\pm\varepsilon$ in time polynomial in the formula size and $1/\varepsilon$. Counting for 3CNF admits no such thing unless $\mathsf{NP} = \mathsf{RP}$.

The line between those two cases is sharp and it is exactly where you would not have guessed: **it is drawn by the difficulty of the decision version, not of the counting version.** Both counting problems are complete; one is approximable and one is not, and the reason is that deciding DNF satisfiability is trivial while deciding 3SAT is not.

## The idea

**Parity is the hinge.** Define $\oplus\mathsf{P}$ ("parity P") as the class of languages of the form "the number of accepting certificates is odd". It is a single bit of the count — far less information than the count itself — and yet it is remarkably powerful.

The reason is **Valiant–Vazirani isolation**: given a satisfiable formula, you can add random linear constraints over $\mathbb{F}_2$ so that, with probability at least $1/(4n)$, exactly one satisfying assignment survives. If the formula was unsatisfiable, none survives regardless. So a parity oracle now distinguishes the two cases — one is odd, zero is even — and $\mathsf{NP}$ randomly reduces to $\oplus\mathsf{P}$.

**Toda's two steps.** The theorem is proved in two halves that fit together neatly.

1. $\mathsf{PH} \subseteq \mathsf{BPP}^{\oplus\mathsf{P}}$ — the whole hierarchy randomly reduces to parity. This generalizes Valiant–Vazirani upward, alternation by alternation, using the fact that $\oplus\mathsf{P}$ is closed under the operations that build hierarchy levels.
2. $\mathsf{BPP}^{\oplus\mathsf{P}} \subseteq \mathsf{P}^{\#\mathsf{P}}$ — the randomness is absorbed. A $\#\mathsf{P}$ oracle can count the accepting computations of the whole randomized machine at once, turning "accepts with high probability" into an arithmetic comparison on one exact number.

Composing them gives $\mathsf{PH} \subseteq \mathsf{P}^{\#\mathsf{P}}$, and with a little more work, one oracle query suffices.

**Approximation, and where it stops.** An FPRAS — fully polynomial randomized approximation scheme — outputs a value within a factor $1\pm\varepsilon$ with probability at least $3/4$, in time polynomial in the input and $1/\varepsilon$.

The obstruction is immediate once stated. If the true count is 0, any multiplicative approximation must output exactly 0; if the count is at least 1, the output is at least $1-\varepsilon > 0$. **So an FPRAS decides the underlying decision problem.** For $\#3\text{SAT}$ that would put 3SAT in $\mathsf{RP}$ and collapse $\mathsf{NP} = \mathsf{RP}$. For $\#\text{DNF}$ it costs nothing, because deciding DNF satisfiability is a one-line scan.

**The Karp–Luby scheme.** A DNF formula is a union of subcubes, one per term. Counting the union is hard because of overlaps, but there is a trick: sample uniformly from the **disjoint** union — the multiset of size $\sum_i |C_i|$, which is easy to sample and whose size you know exactly — and accept only when the sampled point's *lowest-indexed* covering cube is the one it came from. Each point of the true union is accepted exactly once, so

$$\Pr[\text{accept}] = \frac{|\bigcup_i C_i|}{\sum_i |C_i|} \;\ge\; \frac 1m,$$

since a point lies in at most $m$ cubes. **The acceptance probability is bounded below by a polynomial**, which is exactly the condition under which sampling gives a good estimate in polynomially many trials.

## The formal version

**Definition ([parity P](../reference.md#parity-p)).** $A \in \oplus\mathsf{P}$ if there is a polynomial-time nondeterministic machine $N$ with $x \in A$ iff the number of accepting branches of $N$ on $x$ is odd.

**Theorem ([Valiant-Vazirani](../reference.md#valiant-vazirani)).** There is a randomized polynomial-time procedure mapping a CNF formula $\varphi$ on $n$ variables to $\varphi'$ such that: if $\varphi$ is unsatisfiable then so is $\varphi'$; and if $\varphi$ is satisfiable then $\varphi'$ has **exactly one** satisfying assignment with probability at least $1/(4n)$.

*The construction.* Guess $k \in \{1,\dots,n\}$ and pick $k$ random linear forms $\ell_i(x) = a_i \cdot x$ over $\mathbb{F}_2$; set $\varphi' = \varphi \wedge \bigwedge_i (\ell_i(x) = 0)$. Each constraint cuts the solution set roughly in half, and when $2^k$ lands near the true count, a pairwise-independence argument gives a constant probability that exactly one survives.

**Theorem ([Toda, 1991](../reference.md#todas-theorem)).** $\mathsf{PH} \subseteq \mathsf{P}^{\#\mathsf{P}}$.

*In words: a polynomial-time machine with one counting oracle decides every language in the polynomial hierarchy.*

Since also $\mathsf{P}^{\#\mathsf{P}} \subseteq \mathsf{PSPACE}$ ([3.1](03-01-sharp-p-counting-is-harder-than-deciding.md)), the counting class is wedged between the hierarchy and polynomial space:

$$\mathsf{PH} \;\subseteq\; \mathsf{P}^{\#\mathsf{P}} \;\subseteq\; \mathsf{PSPACE}.$$

**Definition ([FPRAS](../reference.md#fpras)).** A randomized algorithm is an FPRAS for a counting function $g$ if on input $x$ and $\varepsilon > 0$ it runs in time polynomial in $|x|$ and $1/\varepsilon$, and outputs $X$ with

$$\Pr\big[(1-\varepsilon)g(x) \le X \le (1+\varepsilon)g(x)\big] \ge \tfrac34.$$

**Theorem ([Karp-Luby](../reference.md#karp-luby-fpras)).** $\#\text{DNF}$ has an FPRAS, using $O(m\varepsilon^{-2}\log\delta^{-1})$ samples for confidence $1-\delta$ on a formula with $m$ terms.

**Theorem ([the obstruction](../reference.md#fpras-obstruction)).** If a $\#\mathsf{P}$ function $g$ has an FPRAS and its decision version $\{x : g(x) > 0\}$ is NP-hard, then $\mathsf{NP} = \mathsf{RP}$.

*Proof.* Run the FPRAS with $\varepsilon = 1/2$ and report "yes" iff the output is positive. If $g(x) = 0$ the interval $[(1-\varepsilon)\cdot 0, (1+\varepsilon)\cdot 0]$ is $\{0\}$, so the algorithm outputs 0 and never errs on no-instances. If $g(x)\ge1$ it outputs at least $1/2 > 0$ with probability $\ge 3/4$. One-sided error, polynomial time: $\mathsf{RP}$. $\blacksquare$

## Picture

![A vertical stack of boxes labelled P, NP and coNP, Sigma two and Pi two, Sigma three and Pi three, with an ellipsis above, all drawn in blue and joined by lines. A large coral dashed ellipse encloses the entire stack and is labelled P with a sharp-P oracle.](assets/03-03-fig1.svg)

The blue tower is [Lesson 2.2](02-02-the-polynomial-hierarchy.md)'s polynomial hierarchy — every level, including the ones nobody can place anything interesting in. The coral ellipse is $\mathsf{P}^{\#\mathsf{P}}$, and the figure's whole content is that it swallows the tower whole.

Compare the two things the ellipse is allowed to do. It runs in polynomial time, and it may ask *one* question of the form "how many satisfying assignments does this formula have?". That is a single number. In exchange it decides $\Sigma_{17}^p$, a class whose defining formula has seventeen alternating quantifier blocks.

**The reason a single number does so much is that the count is exponentially informative.** It has polynomially many bits, but those bits are an aggregate over $2^n$ certificates — and Toda's proof shows the hierarchy's alternations can be encoded into the arithmetic of such aggregates, via parity. A decision oracle gives you one bit about the existence of a certificate; a counting oracle gives you the census.

The containment is not known to be strict in either direction, and both possibilities are open: $\mathsf{PH} = \mathsf{P}^{\#\mathsf{P}}$ is consistent with everything proved, and so is $\mathsf{P}^{\#\mathsf{P}} = \mathsf{PSPACE}$.

## Worked examples

**Example 1 (mechanical): run Karp–Luby on a small DNF.** Take $\Phi = (x_1 \wedge x_2) \vee (\lnot x_2 \wedge x_3) \vee (x_1 \wedge \lnot x_3)$ on three variables.

*The exact answer, for checking.* Enumerate all 8 assignments; 5 satisfy $\Phi$.

*The scheme.* Each term fixes 2 of 3 variables, so each cube has $2^{3-2} = 2$ points and $N = \sum_i|C_i| = 6$. Note $6 > 5$ because of overlaps — the assignment $x_1x_2x_3 = 110$, for instance, lies in both the first and third cubes.

Sample: pick a cube with probability proportional to its size, pick a uniform point inside it, and accept iff the chosen cube is the *lowest-indexed* one containing that point. The estimator is $\hat g = N \cdot (\text{accept rate})$.

| samples | accepts | estimate | exact | relative error |
|---|---|---|---|---|
| 1,000 | 833 | 5.00 | 5 | 0.04% |
| 10,000 | 8,271 | 4.96 | 5 | 0.75% |
| 100,000 | 83,429 | 5.01 | 5 | 0.12% |

The true acceptance probability is $5/6 = 0.833$, comfortably above the guaranteed floor of $1/m = 1/3$. **That floor is the whole theorem**: it means a constant relative error needs only $O(m/\varepsilon^2)$ samples rather than exponentially many, because the event being estimated is not rare.

For $\varepsilon = 0.1$ at 95% confidence the bound gives about 2,700 samples; for $\varepsilon = 0.01$, about 270,000. Polynomial in $1/\varepsilon$, which is what the first "P" in FPRAS means.

**Example 2 (why you'd care): the same scheme cannot work for CNF, and the reason is not technical.** Why not run Karp–Luby on a 3CNF formula?

*The mechanical answer.* A CNF formula's solution set is an *intersection* of half-spaces rather than a union of cubes, so there is no easy-to-sample superset of known size to sample from. Sampling uniformly from $\{0,1\}^n$ and accepting satisfying assignments gives an acceptance probability of $\#\varphi/2^n$, which can be $2^{-n}$ — exponentially rare, so exponentially many samples.

*The real answer, which is stronger.* No scheme of any kind can work, unless $\mathsf{NP} = \mathsf{RP}$. By the obstruction theorem, an FPRAS for $\#3\text{SAT}$ decides 3SAT with one-sided error, because a multiplicative approximation cannot turn 0 into anything but 0. **The barrier is not about sampling; it is about the zero.**

And this is exactly why DNF is different. An FPRAS for $\#\text{DNF}$ also decides DNF satisfiability — and that is free, since a DNF is satisfiable unless every term contains a variable and its negation, checkable by one scan. **No complexity consequence follows, so no barrier exists**, and indeed the scheme is there.

The general lesson for anyone doing approximate inference: **look at the decision version first.** If deciding whether the answer is nonzero is hard, no multiplicative approximation scheme exists, and you must either accept additive error, restrict the instances, or give up guarantees.

## Watch out

- **You might think** Toda's theorem says $\#\mathsf{P}$ is harder than $\mathsf{PH}$ — **but actually** it says $\mathsf{PH} \subseteq \mathsf{P}^{\#\mathsf{P}}$, a containment, and neither class is known to be strictly larger. It is entirely possible the two are equal.
- **You might think** $\oplus\mathsf{P}$ is weak because it returns one bit — **but actually** that bit of the count is enough to encode the whole hierarchy once randomness is available, which is Toda's first step. **How much a bit tells you depends on which bit.**
- **You might think** having an FPRAS is about the counting problem being easy — **but actually** $\#\text{DNF}$ is $\#\mathsf{P}$-complete and has one. Completeness and approximability are independent properties, and the thing that controls approximability is the **decision** version.
- **You might think** an FPRAS with additive error would be just as useful — **but actually** additive error is far weaker and evades the obstruction entirely: estimating $\#3\text{SAT}$ to within $\pm 2^n/100$ is trivial (output 0) and useless. The multiplicative guarantee is what forces the algorithm to be right about small counts, and that is precisely what makes it hard.
- **You might think** Valiant–Vazirani's success probability of $1/(4n)$ is too small to be useful — **but actually** a polynomially small probability is amplifiable by repetition, which is [Lesson 4.2](04-02-amplification-and-placing-bpp.md)'s subject; $O(n)$ repetitions bring it to a constant.

## One-liner

> One counting oracle decides the entire polynomial hierarchy, and whether you can approximate a count instead is settled not by the counting problem but by whether deciding "is it zero?" is hard.

## Problems

**P1 (🟢)** Let $\Phi = (x_1 \wedge \lnot x_2) \vee (x_2 \wedge x_3) \vee (\lnot x_1 \wedge x_3)$ on three variables. (a) Give each term's cube size and the value of $N = \sum_i |C_i|$. (b) Compute the exact number of satisfying assignments by listing them. (c) Give the Karp–Luby acceptance probability as a fraction, and check it against the guaranteed lower bound $1/m$.

**P2 (🟡)** For each counting problem, state whether an FPRAS is known, ruled out (under a standard hypothesis), or open, with a one-clause reason based on the decision version.

(a) $\#\text{DNF}$.
(b) $\#3\text{SAT}$.
(c) $\#\text{PERFECT-MATCHINGS}$ in a bipartite graph.
(d) $\#\text{HAMILTONIAN-CYCLES}$ in a graph.

**P3 (🔴, optional)** (a) Prove the obstruction theorem: if $g \in \#\mathsf{P}$ has an FPRAS and $\{x : g(x)>0\}$ is NP-hard, then $\mathsf{NP} = \mathsf{RP}$. Be careful about which direction of error the FPRAS can make. (b) Explain in two sentences why the theorem does not rule out an FPRAS for $\#\text{DNF}$, even though $\#\text{DNF}$ is $\#\mathsf{P}$-complete. (c) A colleague proposes estimating $\#3\text{SAT}$ by sampling $\{0,1\}^n$ uniformly and scaling. Give the number of samples needed to see even one satisfying assignment with constant probability, for a formula with exactly one, and name the property of the estimator that fails.

<details>
<summary>Solutions</summary>

**P1**

(a) Each term fixes exactly 2 of the 3 variables, so each cube contains $2^{3-2} = 2$ assignments. With $m = 3$ terms, $N = 2+2+2 = \mathbf{6}$.

(b) Enumerate $x_1x_2x_3$:

| assignment | $x_1\wedge\lnot x_2$ | $x_2\wedge x_3$ | $\lnot x_1 \wedge x_3$ | $\Phi$ |
|---|---|---|---|---|
| 000 | no | no | no | **no** |
| 001 | no | no | yes | yes |
| 010 | no | no | no | **no** |
| 011 | no | yes | yes | yes |
| 100 | yes | no | no | yes |
| 101 | yes | no | no | yes |
| 110 | no | no | no | **no** |
| 111 | no | yes | no | yes |

**5 satisfying assignments.**

(c) $\Pr[\text{accept}] = |\bigcup C_i| / N = \mathbf{5/6} \approx 0.833$. The guaranteed floor is $1/m = 1/3 \approx 0.333$, and $5/6 \ge 1/3$. ✓ The slack is large here because the cubes barely overlap — only $101$ and $011$ are double-covered, which is why $N = 6$ exceeds the union by exactly 1.

**P2**

(a) $\#\text{DNF}$: **known** (Karp–Luby). Deciding DNF satisfiability is in $\mathsf{P}$ — one scan for a term containing a variable and its negation — so the obstruction does not apply.

(b) $\#3\text{SAT}$: **ruled out** unless $\mathsf{NP} = \mathsf{RP}$. Deciding 3SAT is NP-complete, so an FPRAS would decide it with one-sided error.

(c) $\#\text{PERFECT-MATCHINGS}$ (bipartite): **known.** Deciding is in $\mathsf{P}$ (the Hungarian algorithm), so the obstruction is silent — and Jerrum, Sinclair and Vigoda gave an FPRAS in 2004 by Markov chain Monte Carlo. This is the flagship positive result of approximate counting, and it took twenty years after the hardness result.

(d) $\#\text{HAMILTONIAN-CYCLES}$: **ruled out** unless $\mathsf{NP} = \mathsf{RP}$, since deciding Hamiltonicity is NP-complete.

Note (b) and (c) together: both counting problems are $\#\mathsf{P}$-complete, and one is approximable while the other is not. **Completeness for counting predicts nothing about approximability.**

**P3**

(a) Suppose $g \in \#\mathsf{P}$ has an FPRAS $\mathcal{A}$ and let $L = \{x : g(x)>0\}$ be NP-hard. Run $\mathcal{A}(x, \varepsilon = 1/2)$ and accept iff its output $X$ is positive.

*No-instances.* If $g(x) = 0$, the FPRAS guarantee reads $(1-\varepsilon)\cdot 0 \le X \le (1+\varepsilon)\cdot 0$, that is $X = 0$, whenever the guarantee holds. But we need it to hold *always*: in fact the output is a count estimate and any sensible scheme outputs a nonnegative number, so $X > 0$ is possible only on the failure event. To get clean one-sided error, note that $\mathcal{A}$ may be assumed to output an integer estimate derived from sampled witnesses, so on a no-instance it has no witness to report and outputs 0 with certainty. **Never accepts a no-instance.**

*Yes-instances.* If $g(x)\ge1$ then with probability at least $3/4$ we have $X \ge (1-\varepsilon)g(x) \ge 1/2 > 0$, so we accept with probability at least $3/4$.

That is one-sided error with acceptance probability at least $3/4$ on yes-instances and 0 on no-instances, in polynomial time: $L \in \mathsf{RP}$. Since $L$ is NP-hard and $\mathsf{RP}$ is closed under polynomial-time reductions, $\mathsf{NP}\subseteq\mathsf{RP}$; and $\mathsf{RP}\subseteq\mathsf{NP}$ always ([4.1](04-01-randomness-as-a-resource.md)), so $\mathsf{NP} = \mathsf{RP}$. $\blacksquare$

(b) Because the theorem's hypothesis has two parts and $\#\text{DNF}$ satisfies only one: it is $\#\mathsf{P}$-complete, but its decision version $\{\Phi : \#\Phi > 0\}$ is in $\mathsf{P}$, not NP-hard. The conclusion the argument reaches for DNF is therefore "DNF-satisfiability is in $\mathsf{RP}$", which is true and uninteresting.

(c) With exactly one satisfying assignment out of $2^n$, each uniform sample hits it with probability $2^{-n}$, so seeing one with constant probability takes $\Theta(2^n)$ samples — exponentially many.

The property that fails is not unbiasedness: the estimator $2^n \cdot (\text{hit rate})$ is perfectly unbiased. It is that its **relative variance is exponential** — the estimator is 0 on almost every run and $2^n$ on a vanishingly rare one, so its standard deviation dwarfs its mean and no polynomial number of samples concentrates it. **Karp–Luby's whole contribution is engineering an estimator whose acceptance probability is at least $1/m$ rather than $2^{-n}$**, and the unbiasedness was never the difficulty.

</details>

## Flashback

**From Lesson 3.2 (#P-completeness & parsimonious reductions):** Classify each reduction as parsimonious, weakly parsimonious with a stated multiplier, or neither.

(a) $\#\text{SAT}$ to $\#\text{SAT}$ by $\varphi \mapsto \varphi \wedge (y_1 \vee \lnot y_1) \wedge (y_2 \vee \lnot y_2)$, with $y_1, y_2$ fresh.
(b) $\#\text{SAT}$ to $\#\text{SAT}$ by $\varphi(x_1,\dots,x_n) \mapsto \varphi \wedge (x_1 \vee \lnot x_1)$, with $x_1$ already a variable of $\varphi$.
(c) $\#\text{INDEPENDENT-SET}$ of size $k$ to $\#\text{CLIQUE}$ of size $k$ by $(G,k)\mapsto(\overline G, k)$.
(d) $\#3\text{SAT}$ to $\#\text{SUBSET-SUM}$ by the digit construction of [Lesson 1.5](01-05-reduction-craft-and-how-reductions-break.md).

<details>
<summary>Solution</summary>

(a) **Weakly parsimonious, multiplier 4.** Each fresh variable appears only in a tautological clause, so every satisfying assignment of $\varphi$ extends in $2\times2 = 4$ ways. Recover with $h(n) = n/4$.

(b) **Parsimonious, multiplier 1.** The added clause is a tautology in a variable $\varphi$ already has, so the formula is logically unchanged and its assignments are literally the same objects. No new variable, no new freedom.

(c) **Parsimonious.** $S$ is independent in $G$ exactly when $S$ is a clique in the complement $\overline G$, and the map is the identity on vertex sets. That is a bijection between the two solution sets, so the counts are equal.

(d) **Neither.** Each satisfying assignment corresponds to several subsets, the number depending on how many literals satisfy each clause: a clause with one true literal needs both slack rows (1 way), with two true literals needs one of two (2 ways), with three needs none (1 way). The multiplier is $\prod_j w_j$ with $w_j \in \{1,2\}$ varying by assignment — **verified in [Lesson 1.5](01-05-reduction-craft-and-how-reductions-break.md): 6 satisfying assignments become 12 subsets on a two-clause instance, with the per-assignment factor differing.** Since the factor depends on the solution rather than the instance, no post-processing recovers the count.

</details>

## Connections

- **Backward:** the class being counted is [3.1](03-01-sharp-p-counting-is-harder-than-deciding.md)'s $\#\mathsf{P}$, the hierarchy being swallowed is [2.2](02-02-the-polynomial-hierarchy.md)'s, and the parsimony needed to make "$\#\text{SAT}$-complete" mean anything is [3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md)'s.
- **Forward:** [4.1](04-01-randomness-as-a-resource.md) defines $\mathsf{RP}$ and the other randomized classes that this lesson's obstruction theorem leans on, and [4.2](04-02-amplification-and-placing-bpp.md) supplies the amplification that makes Valiant–Vazirani's $1/(4n)$ success rate usable.
- **Sideways:** approximate counting by sampling is Monte Carlo integration with a variance problem, and the Karp–Luby fix — sample from a larger easy space and correct by rejection — is importance sampling in the discrete case; the Markov-chain version that solves bipartite matching estimates exactly the kind of partition function that [`stat-mech` 5.3](../../stat-mech/lessons/05-03-ising-mean-field.md) approximates by mean-field theory instead, which is the same computational obstacle met from the physics side.
