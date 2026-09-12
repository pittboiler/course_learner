# Complexity Theory · Lesson 5.5: Hardness of approximation

> ⏱ ~15 min · Module 5: Circuits, approximation & the barriers · Builds on: [5.4 (approximation as a class)](05-04-approximation-as-a-class-apx-and-max-3sat.md), [4.5 (PCP)](04-05-probabilistically-checkable-proofs.md) · Unlocks: [6.1 (ETH and SETH)](06-01-eth-seth-and-the-exponential-time-view.md)

## Why this matters

[Lesson 5.4](05-04-approximation-as-a-class-apx-and-max-3sat.md) built an algorithm reaching $7/8$ on MAX-3SAT and asserted that $7/8 + \varepsilon$ is NP-hard for every $\varepsilon > 0$. This lesson earns that assertion, and in doing so explains where *every* inapproximability result comes from.

The mechanism is the one [Lesson 4.5](04-05-probabilistically-checkable-proofs.md) set up: **a soundness gap in a proof system is a hardness gap for an optimization problem.** A PCP verifier that accepts true statements always and false ones at most half the time becomes, mechanically, a formula that is either fully satisfiable or at most $(1-\varepsilon)$-satisfiable — and telling those apart is NP-hard because deciding the original statement was.

That equivalence changed the subject. Before 1992, proving a problem hard to approximate meant designing a bespoke gap-producing reduction, and only a handful existed. Afterwards, every such proof reduces from gap-3SAT, and the field became a systematic search for the exact threshold of each problem.

Some of those thresholds are now known exactly, which is rare and satisfying: $7/8$ for MAX-3SAT, $\ln n$ for set cover, $1/2$ for MAX-CUT if you believe the unique games conjecture. **A matching algorithm and hardness result means the problem is *solved* in a sense that exact NP-hardness never delivers** — you know precisely what is achievable and can stop looking.

## The idea

**Gap problems.** Write $\text{GAP-3SAT}_{c,s}$ for the promise problem: given a 3CNF $\varphi$, promised that either at least a $c$ fraction of clauses is satisfiable (**yes**) or at most an $s$ fraction is (**no**), decide which. Instances in between are excluded by the promise, and the algorithm may do anything on them.

The point of the promise is that an approximation algorithm *solves the gap problem*. If you can approximate MAX-3SAT within a factor better than $s/c$, run it: its output lands above $s$ on yes-instances and cannot on no-instances, so it distinguishes them. **Hardness of the gap problem is therefore hardness of approximation, and the two are the same statement.**

**Where the gap comes from.** [Lesson 4.5](04-05-probabilistically-checkable-proofs.md)'s translation: a PCP verifier with $O(\log n)$ coins and $O(1)$ queries becomes a formula with one variable per proof bit and one constraint per coin sequence. Perfect completeness means a correct proof satisfies every constraint, so $c = 1$. Soundness $1/2$ means every proof fails on half the coin sequences, so at least a constant fraction $\varepsilon$ of constraints fail, giving $s = 1 - \varepsilon$.

**Håstad's sharpening.** The crude accounting above gives some small unnamed $\varepsilon$. Håstad's 2001 result engineers the verifier so the constants are optimal: a 3-query PCP whose test is a single **parity check** on the three bits it reads, with completeness $1-\delta$ and soundness $1/2+\delta$.

Translating that test into clauses gives exactly MAX-3SAT, and the arithmetic lands on $7/8$. So for every $\varepsilon > 0$, approximating MAX-3SAT within $7/8 + \varepsilon$ is NP-hard.

Notice the price: **completeness is $1 - \delta$, not 1.** Håstad gives up perfect completeness to buy the optimal soundness, which is why the hardness is for $7/8 + \varepsilon$ rather than for $7/8$ itself — and why $7/8$ exactly *is* achievable, by [5.4](05-04-approximation-as-a-class-apx-and-max-3sat.md)'s random assignment.

**Why $7/8$ and not something else.** The two sides meet because the random assignment is optimal against an adversary that can make the constraints look locally random. A parity constraint on 3 bits is satisfied by a random assignment with probability exactly $1/2$ per parity, and the encoding arranges that no algorithm can do better than random on a no-instance. **The threshold is where "as good as guessing" and "provably no better than guessing" coincide.**

**Unique games.** Many problems resist exact thresholds by these methods. MAX-CUT has a $0.878$-approximation (Goemans–Williamson, by semidefinite programming) and no matching NP-hardness. Khot's **unique games conjecture** — that a particular gap problem with 2-variable constraints is NP-hard — would supply thresholds for a whole family of such problems at once, including exactly $0.878$ for MAX-CUT. It is the most consequential open conjecture in the area and is genuinely disputed.

## The formal version

**Definition ([gap problem](../reference.md#gap-problem)).** For $1 \ge c > s \ge 0$, $\text{GAP-3SAT}_{c,s}$ is the promise problem with yes-instances the 3CNF formulas where some assignment satisfies at least $cm$ clauses, and no-instances those where no assignment satisfies more than $sm$.

**Proposition ([gap hardness is approximation hardness](../reference.md#gap-implies-inapproximability)).** If $\text{GAP-3SAT}_{c,s}$ is NP-hard, then no polynomial-time algorithm approximates MAX-3SAT within a factor better than $s/c$ unless $\mathsf{P} = \mathsf{NP}$.

*Proof.* Suppose $\mathcal{A}$ is a $\rho$-approximation with $\rho > s/c$. On a yes-instance, $\mathrm{OPT}\ge cm$ so $\mathcal{A}$ outputs at least $\rho cm > sm$. On a no-instance, $\mathrm{OPT}\le sm$ so $\mathcal{A}$ outputs at most $sm$. Comparing the output with $sm$ decides the gap problem in polynomial time. $\blacksquare$

**Theorem ([the PCP theorem as gap hardness](../reference.md#pcp-gap-equivalence)).** The PCP theorem $\mathsf{NP} = \mathsf{PCP}(O(\log n), O(1))$ is **equivalent** to: there is a constant $\varepsilon > 0$ with $\text{GAP-3SAT}_{1, 1-\varepsilon}$ NP-hard.

[Lesson 4.5](04-05-probabilistically-checkable-proofs.md)'s P3 proves one direction, with $\varepsilon = 1/(2c)$ for $c = 2^q(q-2)$ clauses per coin sequence. The other direction constructs a verifier from the gap reduction: given a formula from the hard family, the proof is an assignment and the verifier reads the three variables of a random clause.

**Theorem ([Hastad, 2001](../reference.md#hastads-theorem)).** For every $\varepsilon > 0$, it is NP-hard to approximate MAX-3SAT within $7/8 + \varepsilon$. Together with [5.4](05-04-approximation-as-a-class-apx-and-max-3sat.md)'s algorithm, **$7/8$ is a threshold**: achievable, and not improvable.

Equivalently: $\text{GAP-3SAT}_{1-\delta,\,7/8+\delta}$ is NP-hard for every $\delta > 0$.

**Some known and conjectured thresholds.**

| problem | best algorithm | hardness | status |
|---|---|---|---|
| MAX-3SAT | $7/8$ | $7/8+\varepsilon$ NP-hard | **tight** |
| SET-COVER | $\ln n$ | $(1-o(1))\ln n$ NP-hard | **tight** (Feige, Dinur–Steurer) |
| VERTEX-COVER | $2 - \Theta(1/\sqrt{\log n})$ | $1.36$ NP-hard; $2-\varepsilon$ under UGC | gap remains |
| MAX-CUT | $0.878$ (Goemans–Williamson) | $16/17$ NP-hard; $0.878$ under UGC | gap remains |
| general TSP | none | no constant factor unless $\mathsf{P}=\mathsf{NP}$ | **tight** (trivially) |

**Definition ([unique games conjecture](../reference.md#unique-games-conjecture)).** For every $\varepsilon,\delta>0$ there is an alphabet size $k$ such that it is NP-hard to distinguish instances of the 2-variable constraint problem over alphabet $[k]$ — where each constraint is a **bijection** between the two variables' values — that are $(1-\delta)$-satisfiable from those that are at most $\varepsilon$-satisfiable.

If true, it implies that the Goemans–Williamson ratio for MAX-CUT and the factor 2 for vertex cover are both optimal. It remains open, and unlike $\mathsf{P}\ne\mathsf{NP}$ a substantial minority of researchers expect it to be false.

## Picture

![A horizontal line marked with approximation ratios from zero to one. Marks sit at one half labelled MAX-3SAT by random, at seven eighths labelled MAX-3SAT and circled, at 0.878 labelled MAX-CUT by semidefinite programming, and at one labelled knapsack with an FPTAS. Below, a boxed panel headed MAX-3SAT is a threshold, not just a ratio, stating that seven eighths is achievable by a random assignment then derandomized, and that seven eighths plus epsilon is NP-hard by Hastad from the PCP theorem.](assets/05-05-fig1.svg)

The line is the achievable ratio and the marks are where problems sit. Reading it left to right: $1/2$ is what a coin gets you on MAX-3SAT for free, $7/8$ is where MAX-3SAT stops, and $1$ is where problems with an FPTAS live.

The boxed panel is the shape of a solved problem, and it is worth naming as a pattern. **An approximation result is only half an answer.** A ratio of $7/8$ tells you what you can get; it tells you nothing about whether more is available. The hardness result is the other half, and when the two meet — as they do here, and for set cover — the problem is finished: you know the number, you know it is optimal, and further algorithmic work on the worst case is provably wasted.

Contrast MAX-CUT on the same line. The algorithm gives $0.878$ and the NP-hardness stops at $16/17 \approx 0.941$, so **there is a band between $0.878$ and $0.941$ where nobody knows what is true.** Either a better algorithm exists or a better hardness result does, and the unique games conjecture predicts which: it says $0.878$ is exact and the hardness proof is what is missing.

## Worked examples

**Example 1 (mechanical): derive an inapproximability constant.** Suppose you are told $\text{GAP-3SAT}_{1, 0.99}$ is NP-hard. What does that rule out?

By the proposition, no polynomial-time algorithm achieves a ratio better than $s/c = 0.99/1 = 0.99$ unless $\mathsf{P} = \mathsf{NP}$.

Concretely: an algorithm guaranteeing $0.995 \cdot \mathrm{OPT}$ would, on a yes-instance with $\mathrm{OPT} = m$, output at least $0.995m > 0.99m$; on a no-instance with $\mathrm{OPT}\le0.99m$ it outputs at most $0.99m$. Comparing the output with $0.99m$ decides the gap problem. **So a $0.995$-approximation implies $\mathsf{P} = \mathsf{NP}$.**

Note what is *not* ruled out: $0.99$ itself is untouched, and indeed [5.4](05-04-approximation-as-a-class-apx-and-max-3sat.md)'s algorithm already achieves $0.875$. The gap result and the algorithm together confine the truth to $[0.875, 0.99]$, and Håstad's sharper gap closes the interval to the single point $0.875$.

**Example 2 (why you'd care): what changes when a threshold is proved.** You are choosing how to spend effort on an NP-hard optimization problem. Compare three situations.

*MAX-3SAT.* The threshold is known and met. **Stop.** No worst-case algorithm beats $7/8$, and any paper claiming one is either wrong or has proved $\mathsf{P} = \mathsf{NP}$. Remaining effort should go into instance structure, heuristics measured empirically, or a different formulation — not into the worst-case ratio.

*MAX-CUT.* The band $[0.878, 0.941]$ is open. **Effort might pay**, in either direction: a better algorithm or a better hardness proof. And the unique games conjecture tells you which side the community bets on, which is useful information about where to look.

*A problem whose approximability nobody has studied.* First find the tier. Is it in APX at all? An L-reduction from MAX-3SAT settles APX-hardness immediately and rules out a PTAS, and that single reduction is usually much easier than a bespoke gap construction.

**The general point is that a hardness result is an efficiency result for the researcher.** NP-completeness told you to stop looking for an exact polynomial algorithm; a matching inapproximability threshold tells you to stop looking for a better approximation. Both are permissions to redirect, and both are worth more than most positive results because they close a question rather than opening one.

## Watch out

- **You might think** a gap result rules out algorithms that usually do better than the threshold — **but actually** it is a worst-case statement, like everything else in this course. Real SAT instances are routinely solved exactly, and $7/8$ constrains only the guarantee, not the typical behaviour.
- **You might think** the PCP theorem implies the gap version and the reverse is a restatement — **but actually** the two are *equivalent*, and each direction is a construction. The reverse takes a gap-hard formula family and builds a verifier that reads a random clause's three variables.
- **You might think** Håstad's result says a $7/8$-approximation is NP-hard — **but actually** it says $7/8 + \varepsilon$ is, for every $\varepsilon > 0$. The ratio $7/8$ itself is achievable, which is exactly what makes it a threshold rather than a bound; the $\varepsilon$ is doing real work.
- **You might think** the unique games conjecture is a technical hypothesis like $\mathsf{P}\ne\mathsf{NP}$ — **but actually** its status is genuinely contested, subexponential-time algorithms for the problem are known, and a serious minority expect it to be false. Results conditioned on it should be read as weaker than those conditioned on $\mathsf{P}\ne\mathsf{NP}$.
- **You might think** knowing a threshold ends all work on a problem — **but actually** it ends work on the *worst-case approximation ratio*. Average-case behaviour, parameterized algorithms, and structured instance families all remain wide open, and are where the practical wins live.

## One-liner

> A soundness gap in a proof system is a hardness gap for an optimization problem, and when the hardness gap meets the best algorithm — as it does at seven-eighths for MAX-3SAT — the problem is finished.

## Problems

**P1 (🟢)** Suppose $\text{GAP-3SAT}_{1, 0.95}$ is NP-hard. (a) Give the approximation ratio that this rules out, and the form of the conclusion. (b) Explain in one sentence why an algorithm achieving exactly $0.95$ is **not** ruled out. (c) Given that a random assignment achieves $7/8 = 0.875$, state the interval in which the true threshold must lie.

**P2 (🟡)** For each problem, say whether its approximability threshold is known exactly, known only up to a band, or known to be unachievable at any constant, with the relevant numbers.

(a) MAX-3SAT.
(b) MAX-CUT.
(c) SET-COVER.
(d) General (non-metric) travelling salesman.

**P3 (🔴, optional)** (a) Prove the proposition that NP-hardness of $\text{GAP-3SAT}_{c,s}$ rules out approximation better than $s/c$, handling both the yes and the no case explicitly. (b) Explain in two sentences why the promise — excluding instances between $s$ and $c$ — is essential, and what the algorithm is permitted to do on excluded instances. (c) Håstad's verifier has completeness $1-\delta$ rather than 1. State what the corresponding gap problem is and why the resulting hardness is for $7/8+\varepsilon$ rather than $7/8$.

<details>
<summary>Solutions</summary>

**P1**

(a) It rules out any ratio better than $s/c = 0.95/1 = \mathbf{0.95}$. The conclusion has the form: **no polynomial-time algorithm approximates MAX-3SAT within $0.95 + \varepsilon$ for any $\varepsilon > 0$ unless $\mathsf{P} = \mathsf{NP}$.**

(b) Because an algorithm achieving exactly $0.95$ outputs at least $0.95 \cdot \mathrm{OPT}$, which on a yes-instance is at least $0.95m$ — **equal to**, not greater than, the no-instance ceiling of $0.95m$. The comparison "is the output above $0.95m$?" cannot separate the two cases, so no contradiction follows. The gap argument needs strict improvement.

(c) The random assignment guarantees $0.875$ and the gap rules out anything above $0.95$, so the true threshold lies in $\mathbf{[0.875,\ 0.95]}$. Håstad's result narrows this to the single point $0.875$.

**P2**

(a) MAX-3SAT: **known exactly**, at $\mathbf{7/8 = 0.875}$. Achieved by the random assignment plus derandomization; $7/8+\varepsilon$ is NP-hard (Håstad).

(b) MAX-CUT: **known only up to a band**, $[0.878, 16/17 \approx 0.941]$. The Goemans–Williamson semidefinite relaxation achieves $0.878$; NP-hardness is known only above $16/17$. Under the unique games conjecture the threshold is exactly $0.878$.

(c) SET-COVER: **known exactly**, at $\Theta(\ln n)$. Greedy achieves $H_n = \ln n + O(1)$ ([`algorithms` 4.3](../../algorithms/lessons/04-03-approximation-algorithms.md)), and $(1-o(1))\ln n$ is NP-hard (Feige 1998, strengthened by Dinur–Steurer). Note the threshold here grows with $n$ rather than being a constant, so set cover is **not in APX**.

(d) General travelling salesman: **no constant factor at all** unless $\mathsf{P} = \mathsf{NP}$, by the reduction from Hamiltonian cycle that weights non-edges by $\rho n + 1$ — which defeats every constant $\rho$ simultaneously. Tight, in the degenerate sense that nothing is achievable.

**P3**

(a) Let $\mathcal{A}$ run in polynomial time and guarantee output value at least $\rho\,\mathrm{OPT}$ with $\rho > s/c$. Given an instance $\varphi$ with $m$ clauses satisfying the promise, run $\mathcal{A}$ and report **yes** iff its output exceeds $sm$.

*Yes-instances.* Here $\mathrm{OPT}\ge cm$, so $\mathcal{A}$ outputs at least $\rho\,\mathrm{OPT} \ge \rho c m > \frac{s}{c}\cdot cm = sm$, using $\rho > s/c$ and $c>0$. So the test reports yes. ✓

*No-instances.* Here $\mathrm{OPT}\le sm$, and no algorithm can output a value exceeding the optimum, so $\mathcal{A}$'s output is at most $sm$ and the test reports no. ✓

That decides the NP-hard gap problem in polynomial time, so $\mathsf{P} = \mathsf{NP}$. $\blacksquare$

(b) The promise is essential because on an instance with $\mathrm{OPT}$ strictly between $sm$ and $cm$, the test above is **not well-defined as a decision**: the approximation's output could fall on either side of $sm$ and neither answer is correct, since the instance is neither a yes nor a no.

On excluded instances the algorithm is permitted to do **anything at all** — output either answer, or garbage. That is what "promise problem" means, and it is why gap hardness is a weaker-looking but perfectly usable form of hardness: it constrains behaviour only where the promise holds, which is exactly where the approximation argument needs it.

(c) With completeness $1-\delta$, the corresponding gap problem is $\text{GAP-3SAT}_{1-\delta,\;7/8+\delta}$: yes-instances are $(1-\delta)$-satisfiable rather than fully satisfiable.

The hardness is for $7/8 + \varepsilon$ rather than $7/8$ because the ratio ruled out is $s/c = \frac{7/8+\delta}{1-\delta}$, which for small $\delta$ is slightly **above** $7/8$ and tends to $7/8$ as $\delta \to 0$ — approaching the threshold without ever reaching it.

That is exactly the right outcome, and it is forced. If the hardness applied at $7/8$ itself it would contradict [Lesson 5.4](05-04-approximation-as-a-class-apx-and-max-3sat.md)'s deterministic $7/8$-approximation, which exists unconditionally. **The $\varepsilon$ is not slack in the proof; it is the gap between an achievable ratio and the first unachievable one**, and the fact that it can be made arbitrarily small is what makes $7/8$ a threshold.

</details>

## Flashback

**From Lesson 5.4 (approximation as a class):** A 3CNF formula has $m = 160$ clauses, each with three literals over distinct variables. (a) Give the expected number satisfied by a random assignment and the guaranteed lower bound on $\mathrm{OPT}$. (b) Run one step of the method of conditional expectations on $C_1 = (x_1\vee x_2\vee x_3)$, $C_2 = (\lnot x_1\vee x_2\vee x_3)$: give both conditional expectations for $x_1$ and the branch taken. (c) State which tier — FPTAS, PTAS, APX — MAX-3SAT belongs to.

<details>
<summary>Solution</summary>

(a) $\mathbb{E} = \tfrac78\times160 = \mathbf{140}$, and since a random variable attains at least its mean with positive probability, $\mathrm{OPT}\ge\mathbf{140}$.

(b) Start: $E[\emptyset] = 2\times\tfrac78 = 1.75$.

- $x_1 = 1$: $C_1$ is satisfied outright (contributes 1); $C_2$ has $\lnot x_1$ false, leaving $x_2, x_3$ unfixed, so it contributes $1 - 2^{-2} = 0.75$. Total $\mathbf{1.75}$.
- $x_1 = 0$: $C_2$ is satisfied outright (1); $C_1$ has $x_1$ false, leaving $x_2,x_3$, so $0.75$. Total $\mathbf{1.75}$.

**A tie**, at exactly the starting value — which is correct and expected here, since the two clauses are symmetric under flipping $x_1$. Either branch may be taken; the value never falls below $1.75$, as the averaging identity guarantees.

(c) MAX-3SAT is in **APX**, and in fact is APX-complete. It is not in PTAS (hence not in FPTAS), because Håstad's result rules out any ratio above $7/8$, while a PTAS would give ratios arbitrarily close to 1.

</details>

## Connections

- **Backward:** the gap is [4.5](04-05-probabilistically-checkable-proofs.md)'s soundness gap translated, and the algorithm it meets is [5.4](05-04-approximation-as-a-class-apx-and-max-3sat.md)'s. The L-reductions that spread hardness across the APX tier are that lesson's too.
- **Forward:** [6.1](06-01-eth-seth-and-the-exponential-time-view.md) asks the analogous question one level finer — not whether a ratio is achievable, but whether an exponent is — and gets conditional answers of the same flavour, resting on hypotheses stronger than $\mathsf{P}\ne\mathsf{NP}$ just as the unique games results do here.
- **Sideways:** the semidefinite relaxation behind MAX-CUT's $0.878$ is [`convex-optimization`](../../convex-optimization/syllabus.md)'s machinery applied to a combinatorial problem — relax the integrality, solve the convex problem exactly, round the solution — which is the same relax-and-round pattern as the linear-programming relaxations driving branch-and-bound in [`operations-research` 3.2](../../operations-research/lessons/03-02-branch-and-bound-cutting-planes.md).
