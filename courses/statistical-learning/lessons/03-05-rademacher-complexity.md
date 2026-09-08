# Statistical Learning Theory · Lesson 3.5: Rademacher complexity

> ⏱ ~15 min · Module 3: Statistical learning theory · Builds on: [3.3 (shattering & the VC dimension)](03-03-shattering-and-the-vc-dimension.md), [3.4 (VC bounds & sample complexity)](03-04-vc-bounds-and-sample-complexity.md) · Unlocks: 4.2 (RKHS & the representer theorem), 5.5 (why does deep learning generalize?)

## Why this matters

The [VC dimension](../reference.md#vc-dimension) is a single integer stapled to a hypothesis class before anyone has seen a single data point. That is its strength — and it buys two weaknesses you have already felt in [3.4](03-04-vc-bounds-and-sample-complexity.md), where the agnostic bound demanded 22,392 samples for a class of rectangles:

- it is **distribution-blind**, taking the worst case over every dataset the world could hand you, including the ones your data will never look like;
- it is defined only for **binary-valued** classes, so it says nothing about regression, about margins, or about anything that outputs a real number.

Rademacher complexity fixes both. And it does something no other quantity in this module does: it turns "how much capacity does my model really have?" into **an experiment you can actually run** — throw the labels away, replace them with coin flips, and see how well you fit. That experiment is the one that broke classical theory's account of deep learning, which is where [5.5](05-05-why-does-deep-learning-generalize.md) picks this up.

## The idea

Here is the whole lesson in one move.

Take your sample $x_1,\dots,x_n$. **Delete the labels.** Replace each one with an independent fair coin flip $\sigma_i \in \{-1,+1\}$ — pure noise, carrying no information about $x_i$ whatsoever. Now ask your hypothesis class to fit *those*.

> **Rademacher complexity is how well a class can correlate with pure noise, averaged over the noise.**

Why is that the right question? Because a class that can chase meaningless labels will also chase the meaningless part of your *real* labels. If it can fit anything, then fitting your training set tells you nothing — a good training error is what you would have gotten from garbage. Low Rademacher complexity is a certificate of honesty: **this class could not have faked it.**

A miniature, three sample points. If $\mathcal H$ is just the two constants $+1$ and $-1$, then against a pattern like $(+,-,+)$ the best it can do is agree with two of three — averaged over all eight patterns, $1/2$. If $\mathcal H$ is *all* $2^3 = 8$ functions on those points, some member says exactly what the coins said, every time: $1$.

One class is pinned down by its own poverty. The other is at the ceiling, and its training error is worthless. The Picture below is that comparison in full.

## The formal version

Let $\mathcal F$ be a class of real-valued functions on $\mathcal X$ and $S = (x_1,\dots,x_n)$ a fixed sample. Let $\sigma = (\sigma_1,\dots,\sigma_n)$ be independent **Rademacher variables**: $\Pr(\sigma_i = +1) = \Pr(\sigma_i = -1) = 1/2$.

**Definition ([empirical Rademacher complexity](../reference.md#rademacher-complexity)).**

$$\hat{\mathfrak R}_S(\mathcal F) \;=\; \mathbb E_\sigma\Bigl[\;\sup_{f\in\mathcal F}\;\frac1n\sum_{i=1}^n \sigma_i\, f(x_i)\Bigr].$$

*In words:* draw a random $\pm1$ label for each sample point, let the class pick its single best-correlating member, record that correlation, and average over the coins. The **Rademacher complexity** $\mathfrak R_n(\mathcal F) = \mathbb E_S[\hat{\mathfrak R}_S(\mathcal F)]$ averages over samples too; the hatted version is the one you can compute, and that is the point.

**It is never negative.** For any *fixed* $f$, $\mathbb E_\sigma[\frac1n\sum_i\sigma_i f(x_i)] = 0$, and the expectation of a supremum is at least the supremum of the expectations ([Jensen](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md)), so $\hat{\mathfrak R}_S \ge 0$. Individual coin patterns can score negative; the average cannot.

**Theorem (Rademacher generalization bound).** Let $\mathcal F$ be a class of functions into $[0,1]$ — think of it as the *loss* class, $f(x,y) = \ell(h(x),y)$. With probability at least $1-\delta$ over the sample, **every** $h$ satisfies

$$R(h) \;\le\; \hat R_S(h) \;+\; 2\hat{\mathfrak R}_S(\mathcal F) \;+\; 3\sqrt{\frac{\ln(2/\delta)}{2n}}.$$

*In words:* true risk is at most training risk, plus twice the class's noise-fitting ability on this very sample, plus a shrinking confidence term. Structurally it is [3.2](03-02-finite-classes-and-uniform-convergence.md)'s bound with $\hat{\mathfrak R}_S$ in the slot where $\sqrt{\ln|\mathcal H|/2n}$ used to sit — the capacity penalty just got a better occupant.

**Lemma ([Massart](../reference.md#massarts-lemma)).** If $\mathcal F$ is finite and $|f(x_i)| \le B$ for all $f$ and all $i$, then

$$\hat{\mathfrak R}_S(\mathcal F) \;\le\; B\sqrt{\frac{2\ln|\mathcal F|}{n}}.$$

Note what this recovers: $\sqrt{\ln|\mathcal F|/n}$, exactly the rate [3.2](03-02-finite-classes-and-uniform-convergence.md) got from the union bound and [Hoeffding](../reference.md#hoeffdings-inequality). **The two frameworks agree where they overlap**, which is the sanity check you want before trusting the new one anywhere else. The gain is that Massart is only an *upper* bound on $\hat{\mathfrak R}_S$ — when your data is benign, the true value is smaller, and the bound follows it down.

**The identity that makes it an experiment.** For $\pm1$-valued $h$ and $\pm1$ labels, $\mathbf 1[h(x_i)\ne\sigma_i] = \tfrac12(1 - \sigma_i h(x_i))$. Average over $i$, take the best $h$, average over $\sigma$:

$$\mathbb E_\sigma\Bigl[\min_{h\in\mathcal H}\ \frac1n\bigl|\{i : h(x_i)\ne\sigma_i\}\bigr|\Bigr] \;=\; \frac{1 - \hat{\mathfrak R}_S(\mathcal H)}{2}.$$

*In words:* **the best training error you can achieve on random labels *is* the Rademacher complexity, rescaled.** Complexity $1$ means zero error on noise. Complexity $0$ means you do no better than coin-flipping. This is a measurement, not a theorem you apply — and it is the whole of [5.5](05-05-why-does-deep-learning-generalize.md)'s evidence.

**Two payoffs, stated not proved.** It is **data-dependent** — computed on your actual sample, so it can sit far below whatever the worst case forces on VC. And it handles **real-valued** classes: a margin-based loss is a Lipschitz function of a real-valued score, and Rademacher complexity passes through a Lipschitz map at a cost of the Lipschitz constant (Talagrand's contraction lemma). That is the bridge to margins in [4.3](04-03-maximum-margin-classifiers.md) and to the norm balls of [4.2](04-02-rkhs-and-the-representer-theorem.md).

## Picture

![Two panels side by side, each listing the eight plus-or-minus labellings of three sample points. In the left panel a two-function class scores one on two patterns and one third on the other six, averaging one half. In the right panel the full class scores one on every pattern, averaging one.](assets/03-05-fig1.svg)

Same three points, same eight coin-flip patterns, two classes. The bottom row is the only thing that differs: the best correlation the class manages against that column, and Rademacher complexity is that row's average.

The left class is stuck — six of the eight patterns are out of reach, and it scrapes $1/3$ on each. The right class hits $1$ every time. Asked to fit the random labels, they miss a quarter and none respectively: $(1-\tfrac12)/2 = \tfrac14$ and $(1-1)/2 = 0$, by the identity above.

## Worked examples

**Example 1 (mechanical): thresholds on the line.** Take the threshold class

$$\mathcal H = \{h_t\},\qquad h_t(x) = +1 \text{ if } x > t,\quad -1 \text{ otherwise},$$

and three sample points $x_1 < x_2 < x_3$. Sliding $t$ realises exactly four patterns on this sample:

$$(-,-,-),\quad (-,-,+),\quad (-,+,+),\quad (+,+,+).$$

Now enumerate all $2^3 = 8$ coin-flip patterns. For a $\pm1$-valued class, $\frac1n\sum_i\sigma_i h(x_i) = 1 - \frac{2k}{n}$ where $k$ is the number of disagreements — so the best score is set by the **smallest Hamming distance from $\sigma$ to a realisable pattern**:

| $\sigma$ | nearest realisable | distance | best score |
|---|---|---|---|
| $(-,-,-)$ | itself | 0 | $1$ |
| $(-,-,+)$ | itself | 0 | $1$ |
| $(-,+,+)$ | itself | 0 | $1$ |
| $(+,+,+)$ | itself | 0 | $1$ |
| $(+,+,-)$ | $(+,+,+)$ | 1 | $1/3$ |
| $(+,-,+)$ | $(-,-,+)$ | 1 | $1/3$ |
| $(+,-,-)$ | $(-,-,-)$ | 1 | $1/3$ |
| $(-,+,-)$ | $(-,-,-)$ | 1 | $1/3$ |

$$\hat{\mathfrak R}_S(\mathcal H) \;=\; \frac{4\cdot 1 + 4\cdot\frac13}{8} \;=\; \frac{16/3}{8} \;=\; \frac{2}{3}.$$

The structure is worth naming: **every pattern the class realises scores $1$, and the rest score by how close they come.** So $\hat{\mathfrak R}_S$ is essentially a measure of how much of the $2^n$-cube the class covers — which is [3.3](03-03-shattering-and-the-vc-dimension.md)'s growth function, seen with a distance attached rather than counted.

Compare the three capacity readings for this class: $d_{\mathrm{VC}} = 1$; Massart with $|\mathcal F| = 4$, $B = 1$, $n = 3$ gives $\sqrt{2\ln 4/3} = 0.961$; the exact answer is $0.667$. Massart is loose here because $n = 3$ is tiny, and it is loose *upward* — which is the safe direction.

**Example 2 (why you'd care): when is the bound worth anything?** Take a finite class of $|\mathcal F| = 10^6$ loss functions bounded in $[0,1]$, so $B = 1$.

| $n$ | Massart bound on $\hat{\mathfrak R}_S$ | capacity term $2\hat{\mathfrak R}_S$ | verdict |
|---|---|---|---|
| $100$ | $0.526$ | $1.051$ | exceeds $1$ — the bound says risk is at most something bigger than the largest risk there is. **Vacuous.** |
| $10^4$ | $0.0526$ | $0.105$ | a real promise: train to $0.05$ and your true risk is under $0.16$ plus slack. |

A million hypotheses and a hundred samples buys you nothing, and the bound is honest enough to say so out loud rather than returning a small number.

Now the *other* use, the one with no theorem attached: fit your model to random labels and read the identity backwards. Zero training error on noise means $\hat{\mathfrak R}_S(\mathcal H) = 1$, the capacity term is $2$, and **no bound of this shape can say anything** about that class on that data. That is not a defect to be patched — it is a measurement, and it is exactly what a modern network reports ([5.5](05-05-why-does-deep-learning-generalize.md)).

## Watch out

- **You might think** $\hat{\mathfrak R}_S$ could come out negative, since some coin pattern's best correlation genuinely is (P2 has one). **But actually** the average is always $\ge 0$: any fixed $f$ has expected correlation $0$, and a supremum can only beat that. A negative *column* is fine; a negative *average* is a computational error.
- **You might think** the $\hat{\mathfrak R}_S(\mathcal F)$ in the bound is the complexity of your hypothesis class. **But actually** it is the complexity of the **loss class** $\{(x,y)\mapsto \ell(h(x),y)\}$. For 0-1 loss on $\pm1$ hypotheses the two differ by exactly a factor of two — $\hat{\mathfrak R}_S(\text{loss class}) = \tfrac12\hat{\mathfrak R}_S(\mathcal H)$, because $\ell = (1-yh(x))/2$ and $-\sigma_i y_i$ is itself a Rademacher variable — so the bound's $2\hat{\mathfrak R}_S(\mathcal F)$ is $\hat{\mathfrak R}_S(\mathcal H)$ with no factor at all. Dropping or double-counting that $2$ is the most common arithmetic slip in this subject.
- **You might think** a small $\hat{\mathfrak R}_S$ is a property of your learning algorithm. **But actually** it depends on the **class and the sample only** — the algorithm never appears in the definition. That is why it cannot resolve [5.5](05-05-why-does-deep-learning-generalize.md)'s puzzle alone: the class is identical whether you train on real or random labels, so any class-only quantity is blind to the difference.

## One-liner

> Rademacher complexity is the best correlation your class can achieve with coin flips, averaged over the coins — a capacity measure you can *measure*, on your own data, by throwing the labels away and seeing how well you still fit.

## Problems

**P1 (🟢)** A finite loss class with $|\mathcal F| = 5000$, bounded in $[0,1]$ so $B = 1$. Use Massart's lemma throughout; note $2\ln|\mathcal F| = 17.03$.

(a) Bound $\hat{\mathfrak R}_S(\mathcal F)$ at $n = 200$ and at $n = 5000$.
(b) Give the smallest $n$ for which the capacity term $2\hat{\mathfrak R}_S(\mathcal F)$ is guaranteed to be at most $1/2$.
(c) A hypothesis achieves training risk $0.05$. At $\delta = 0.05$, evaluate the full bound at $n = 200$ and $n = 5000$, and say in one sentence which term dominates in each case.

**P2 (🟡)** Three sample points and a class of exactly three hypotheses, given by their values on $(x_1,x_2,x_3)$:

$$h_a = (+1,+1,-1), \qquad h_b = (-1,+1,+1), \qquad h_c = (+1,-1,+1).$$

(a) Enumerate all $2^3$ coin-flip patterns and compute $\hat{\mathfrak R}_S(\mathcal H)$ exactly as a fraction. (b) One pattern gives a negative best score — identify it and explain why that is not a contradiction. (c) Compare your answer with the Picture's two-hypothesis class and say, in one sentence, what actually drives $\hat{\mathfrak R}_S$.

**P3 (🔴, optional)** Let $\mathcal H$ be **all** functions from a 3-point sample $S$ to $\{-1,+1\}$.

(a) Show $\hat{\mathfrak R}_S(\mathcal H) = 1$ exactly, and show the same argument gives $1$ for any $n$. (b) Substitute into the generalization bound and into the noise-fitting identity, and state what each one reports. (c) Massart gives $\sqrt{2\ln 8/3} = 1.18$ here. Reconcile that with (a), and say what it shows about using Massart on a class whose size grows with $n$.

<details>
<summary>Solutions</summary>

**P1** (a) Massart gives $\hat{\mathfrak R}_S \le \sqrt{2\ln|\mathcal F|/n} = \sqrt{17.03/n}$.

- $n = 200$: $\sqrt{17.03/200} = \sqrt{0.08517} = \mathbf{0.2918}$, so $2\hat{\mathfrak R}_S \le 0.5837$.
- $n = 5000$: $\sqrt{17.03/5000} = \sqrt{0.003407} = \mathbf{0.0584}$, so $2\hat{\mathfrak R}_S \le 0.1167$.

(b) Require $2\sqrt{17.03/n} \le 1/2$, i.e. $\sqrt{17.03/n} \le 1/4$, i.e. $n \ge 16 \cdot 17.03 = 272.55$. So $n = \mathbf{273}$. (Check: at $n = 272$ the term is $0.5005 > 1/2$; at $n = 273$ it is $0.4996$.)

(c) The confidence term is $3\sqrt{\ln(2/0.05)/(2n)} = 3\sqrt{3.689/(2n)}$.

| $n$ | training | $2\hat{\mathfrak R}_S$ | confidence | bound |
|---|---|---|---|---|
| $200$ | $0.05$ | $0.5837$ | $0.2881$ | $\mathbf{0.9218}$ |
| $5000$ | $0.05$ | $0.1167$ | $0.0576$ | $\mathbf{0.2244}$ |

At $n = 200$ the capacity term dominates and the bound is nearly worthless — it barely rules out a coin flip. At $n = 5000$ the capacity term still dominates but everything has shrunk enough that the bound is a genuine promise; note that the training risk itself, $0.05$, is by then the *smallest* of the three, which is the signature of a regime where more data would help less than a better model.

**P2** (a) For a $\pm1$-valued class the score against $\sigma$ is $\frac13\sum_i \sigma_i h(x_i)$, so multiply by 3 and work with integer dot products.

| $\sigma$ | $3\times$ score, $h_a$ | $h_b$ | $h_c$ | best ($\times 3$) | best |
|---|---|---|---|---|---|
| $(+,+,+)$ | $1$ | $1$ | $1$ | $1$ | $1/3$ |
| $(+,+,-)$ | $3$ | $-1$ | $-1$ | $3$ | $1$ |
| $(+,-,+)$ | $-1$ | $-1$ | $3$ | $3$ | $1$ |
| $(+,-,-)$ | $1$ | $-3$ | $1$ | $1$ | $1/3$ |
| $(-,+,+)$ | $-1$ | $3$ | $-1$ | $3$ | $1$ |
| $(-,+,-)$ | $1$ | $1$ | $-3$ | $1$ | $1/3$ |
| $(-,-,+)$ | $-3$ | $1$ | $1$ | $1$ | $1/3$ |
| $(-,-,-)$ | $-1$ | $-1$ | $-1$ | $-1$ | $-1/3$ |

Summing the "best ($\times3$)" column: $1+3+3+1+3+1+1-1 = 12$. Then

$$\hat{\mathfrak R}_S(\mathcal H) \;=\; \frac{1}{8}\cdot\frac{12}{3} \;=\; \frac{4}{8} \;=\; \boxed{\tfrac12}.$$

The three realised patterns score $1$; four patterns lie at Hamming distance 1 and score $1/3$; one lies at distance 2 and scores $-1/3$.

(b) The pattern $(-,-,-)$. Every hypothesis has two $+1$s, so every one of them disagrees with $(-,-,-)$ in at least two places: the minimum Hamming distance is 2, giving $1 - 2\cdot\frac23 = -\frac13$. This is not a contradiction because the definition averages the supremum over $\sigma$ — it never claims the supremum is non-negative for each $\sigma$. Non-negativity of the *average* is guaranteed (Jensen), and $1/2 > 0$ as required. The reason a single column can go negative is that $\mathcal H$ is **not symmetric**: it contains $h_a$ but not $-h_a$. Add the three negations and no column can be negative, since one of $\pm h$ always correlates non-negatively.

(c) Both classes have $\hat{\mathfrak R}_S = 1/2$ despite one having two hypotheses and the other three. **What drives $\hat{\mathfrak R}_S$ is which sign patterns the class realises on this sample — the geometry of its restriction to $S$ — not how many functions it contains.** Three hypotheses arranged to cover three scattered corners of the cube are worth exactly as much as two arranged at antipodes. This is why counting hypotheses (Massart, or [3.2](03-02-finite-classes-and-uniform-convergence.md)'s $\ln|\mathcal H|$) is always an over-estimate, and why a data-dependent measure can beat it.

**P3** (a) Fix any $\sigma \in \{-1,+1\}^3$. Because $\mathcal H$ contains *every* function into $\{-1,+1\}$, it contains the function $h(x_i) = \sigma_i$. For that $h$,

$$\frac13\sum_{i=1}^{3}\sigma_i h(x_i) \;=\; \frac13\sum_{i=1}^{3}\sigma_i^2 \;=\; \frac13\cdot 3 \;=\; 1,$$

and no $\pm1$-valued function can exceed $1$ since each term is at most $1$. So the supremum is exactly $1$ for **every** $\sigma$, and averaging $1$ over the eight patterns gives $\hat{\mathfrak R}_S(\mathcal H) = 1$. Nothing used $n = 3$: the same $h = \sigma$ works for any $n$, so the answer is $1$ regardless of sample size. Note $1$ is the ceiling for a $\pm1$-valued class, so this class is maximally complex on every sample.

(b) The bound becomes $R(h) \le \hat R_S(h) + 2 + 3\sqrt{\ln(2/\delta)/2n}$. Since every 0-1 risk is at most $1$, this is **true and completely empty** — it never excludes anything, at any $n$. The identity gives $(1 - 1)/2 = 0$: the class fits *any* labelling of $S$ with zero training error, random ones included. Those are the same fact said twice. Together they are the cleanest statement of what "training error means nothing" means: the training error is zero whether or not there is any signal, so observing zero is not evidence of anything.

(c) There is no conflict, because Massart is an **upper** bound and $1.18 > 1$ — it is simply loose, and here it is loose past the point of saying anything, since $1$ is the trivial ceiling. The reason is that $|\mathcal H| = 2^n$ for this class, so the $n$ cancels:

$$\sqrt{\frac{2\ln|\mathcal H|}{n}} = \sqrt{\frac{2n\ln 2}{n}} = \sqrt{2\ln 2} \approx 1.177,$$

**a constant above $1$, at every $n$.** The lesson: Massart's $\sqrt{\ln|\mathcal F|/n}$ only decays when $|\mathcal F|$ is fixed, or at least sub-exponential in $n$. Once the class grows exponentially with the sample, counting hypotheses stops working entirely, and you need the exact quantity or a structural bound — which is precisely the gap [3.3](03-03-shattering-and-the-vc-dimension.md)'s growth function and Sauer's lemma were built to close.

</details>

## Flashback

**From Lesson 3.3 (Shattering and the VC dimension):** Let $\mathcal H_2$ be the class of **unions of at most two closed intervals** on $\mathbb R$ — label $+1$ inside, $-1$ outside.

(a) Prove $d_{\mathrm{VC}}(\mathcal H_2) = 4$, both directions. (b) Give the Sauer bound on $\Pi_{\mathcal H_2}(20)$ and compare it with $2^{20}$. (c) Take a set $S$ of 4 points that $\mathcal H_2$ shatters. What is $\hat{\mathfrak R}_S(\mathcal H_2)$, and what does the Rademacher bound then promise on such a sample?

<details>
<summary>Solution</summary>

(a) The key observation: a labelling of $k$ points on the line needs one interval per **maximal run of consecutive $+1$s**, so $\mathcal H_2$ realises exactly those labellings with at most two positive runs.

*Lower bound.* Take any four points $x_1 < x_2 < x_3 < x_4$. Every one of the $2^4 = 16$ labellings has at most **two** positive runs — the most you can get on four points is the alternating $(+,-,+,-)$ or $(-,+,-,+)$, both with two. So all 16 are realisable and $S$ is shattered; hence $d_{\mathrm{VC}} \ge 4$. (Unlike [3.3](03-03-shattering-and-the-vc-dimension.md)'s half-planes, here *every* 4-set works — the "some set" quantifier is satisfied generously.)

*Upper bound.* Take any five points $x_1 < \dots < x_5$ and the labelling $(+,-,+,-,+)$. It has three positive runs, so it needs three disjoint intervals and no union of two can realise it. Since the argument used only the ordering, it applies to **every** 5-set — which is what the upper bound requires. Hence no 5-set is shattered and $d_{\mathrm{VC}}(\mathcal H_2) = \mathbf 4$.

(b) With $d = 4$, $n = 20$:

$$\Pi_{\mathcal H_2}(20) \;\le\; \sum_{i=0}^{4}\binom{20}{i} \;=\; 1 + 20 + 190 + 1140 + 4845 \;=\; 6196,$$

against $2^{20} = 1{,}048{,}576$ — a factor of about 169 smaller, and the gap widens polynomially fast. That collapse from exponential to polynomial is what makes the class learnable at all.

(c) If $\mathcal H_2$ shatters $S$, then **on that sample** its restriction is the full class of all $2^4$ labellings, so by P3's argument $\hat{\mathfrak R}_S(\mathcal H_2) = \mathbf 1$: for every coin pattern there is a member matching it exactly.

So the bound promises **nothing** on such a sample — the capacity term is $2$ and the inequality is trivially true. This is the honest reading of shattering: a shattered sample is one on which the class can fit anything, so training error on it carries zero information, and *no* class-based bound can rescue it. It is also why the guarantee must come from $n$ being comfortably **larger** than $d_{\mathrm{VC}}$ — once $n > 4$ the class can no longer reproduce every pattern, $\hat{\mathfrak R}_S$ drops below $1$, and the bound starts to say something. The VC dimension is exactly the sample size at which that stops being automatic.

</details>

## Connections

- **Backward:** this is [3.3](03-03-shattering-and-the-vc-dimension.md)'s growth function with a metric attached — instead of counting how many sign patterns a class realises, you measure how close it gets to the ones it misses. And it reproduces [3.2](03-02-finite-classes-and-uniform-convergence.md)'s $\sqrt{\ln|\mathcal H|/n}$ through Massart's lemma, so the two capacity stories are one story.
- **Forward:** the Lipschitz-contraction route to real-valued classes is what turns a *margin* into a capacity bound, which is [4.3](04-03-maximum-margin-classifiers.md) and boss problem 4; the same machinery bounds the complexity of an RKHS norm ball in [4.2](04-02-rkhs-and-the-representer-theorem.md), where a smaller norm literally means a smaller class. And [5.5](05-05-why-does-deep-learning-generalize.md) runs the noise experiment on a real network, finds $\hat{\mathfrak R}_S \approx 1$, and has to explain why the model generalizes anyway — the identity in this lesson is what makes that experiment a measurement rather than an anecdote.
- **Sideways:** the "fit random labels and see" move is the theorist's version of a **permutation test** — build the null by destroying the label–feature relationship and see whether your statistic still looks impressive. Econometrics uses it for inference and [`machine-learning` 4.3](../../machine-learning/lessons/04-03-diagnosing-models-in-practice.md) uses it to catch leakage; here the same shuffle is a capacity measurement, which is a nice illustration of one experiment answering different questions depending on what you were worried about.
