# Functional Analysis · Lesson 1.3: The standard examples — ℓᵖ, C[a,b], Lᵖ

> ⏱ ~15 min · Module 1: Metric, normed, and Banach spaces · Builds on: [1.2 Normed and Banach spaces](01-02-normed-banach-spaces.md) · Unlocks: [1.4 Finite vs infinite dimensions](01-04-finite-vs-infinite-dimensions.md)

## Why this matters

Every theorem you'll meet in this course — projections, dual spaces, the spectral theorem — gets its meaning by being tested against a handful of concrete spaces. These are the animals in the zoo: sequence spaces $\ell^p$, the continuous functions $C[a,b]$, and the integrable functions $L^p[a,b]$. If you know their norms cold, when they're complete, and how they include one another, then abstract statements stop being abstract — you can always ask "what does this say for $\ell^2$?" and get a real answer. This lesson stocks the zoo.

## The idea

There are two ways to build a vector out of infinitely many numbers, and each gives a family of spaces.

**Sequences.** Take $x = (x_1, x_2, x_3, \dots)$. To call it "small" you can add up how big its entries are — but raw entries might sum to infinity, so you weight by a power $p$: $\sum |x_n|^p$. If that total is finite, $x$ lives in $\ell^p$, and its size is the $p$-th root of the total. Larger $p$ punishes big spikes less and small tails more; at the extreme $p=\infty$ you stop summing entirely and just ask for the largest entry.

**Functions.** Do the same with a continuous knob instead of a discrete index: replace $\sum$ by $\int$. A function on $[a,b]$ is "small in $L^p$" if $\int |f|^p$ is finite, and its size is the $p$-th root of that. The continuous functions $C[a,b]$ with the "biggest value" norm are the function-world analogue of $\ell^\infty$.

The one subtlety that makes all of this *work* as geometry: for the triangle inequality to hold, $\left(\sum|x_n+y_n|^p\right)^{1/p} \le \left(\sum|x_n|^p\right)^{1/p} + \left(\sum|y_n|^p\right)^{1/p}$. That's **Minkowski's inequality**, and it rests on **Hölder's inequality**. Those two facts are the entire reason the $p$-norm is a norm.

## The formal version

Fix a real number $p$ with $1 \le p < \infty$, and let $q$ be its **conjugate exponent**, defined by $\tfrac1p + \tfrac1q = 1$ (so $q = \tfrac{p}{p-1}$; the pair $p=q=2$ is self-conjugate).

**Sequence spaces.**
$$\ell^p = \Big\{ x=(x_n)_{n\ge 1} : \textstyle\sum_{n=1}^\infty |x_n|^p < \infty \Big\}, \qquad \|x\|_p = \Big(\sum_{n=1}^\infty |x_n|^p\Big)^{1/p}.$$
$$\ell^\infty = \big\{ x : \sup_n |x_n| < \infty \big\}, \qquad \|x\|_\infty = \sup_n |x_n|.$$

In words: $\ell^p$ is the sequences whose $p$-th powers are summable, measured by the $p$-th root of that sum; $\ell^\infty$ is the bounded sequences, measured by their largest entry.

**Function spaces.** On $[a,b]$,
$$C[a,b] = \{ f : [a,b]\to\mathbb{R} \text{ continuous} \}, \qquad \|f\|_\infty = \max_{t\in[a,b]} |f(t)|,$$
$$L^p[a,b] = \Big\{ f : \textstyle\int_a^b |f|^p\,dt < \infty \Big\}, \qquad \|f\|_p = \Big(\int_a^b |f(t)|^p\,dt\Big)^{1/p}.$$

In words: $C[a,b]$ with the **sup norm** (the tallest point of the graph) and $L^p$ with the **$p$-integral norm**.

**Hölder's inequality.** For $x\in\ell^p$, $y\in\ell^q$ (conjugate exponents),
$$\sum_{n} |x_n y_n| \;\le\; \|x\|_p\,\|y\|_q,$$
and likewise $\int |fg| \le \|f\|_p\|g\|_q$. In words: the $p$-size and the $q$-size together control the pairing $\sum x_n y_n$ — this is the workhorse that bounds "inner-product-like" sums. (At $p=q=2$ it *is* the Cauchy–Schwarz inequality of Lesson 2.1.)

**Minkowski's inequality (the triangle inequality).** For $x,y \in \ell^p$,
$$\|x+y\|_p \;\le\; \|x\|_p + \|y\|_p,$$
and the same for $L^p$. In words: the $p$-norm satisfies the triangle inequality, so it is genuinely a norm. This is what Hölder is *for*.

**Completeness (all are Banach).** $\ell^p$ $(1\le p\le\infty)$, $C[a,b]$ with $\|\cdot\|_\infty$, and $L^p[a,b]$ are all complete — every Cauchy sequence converges *inside the space*. For $L^p$ this completeness is the **Riesz–Fischer theorem**, which needs the Lebesgue integral; we cite it from [real analysis](../../real-analysis/syllabus.md) and do not reprove it here.

## Concrete instance

Take the sequence $x = (1, \tfrac12, \tfrac13, \dots) = (1/n)_{n\ge1}$ and watch its $p$-norm as $p$ grows.

- $p=1$: $\|x\|_1 = \sum 1/n = \infty$. **Not** in $\ell^1$ — the harmonic series diverges.
- $p=2$: $\|x\|_2 = \big(\sum 1/n^2\big)^{1/2} = \big(\pi^2/6\big)^{1/2} \approx 1.283$. In $\ell^2$.
- $p=\infty$: $\|x\|_\infty = \sup 1/n = 1$. In $\ell^\infty$.

So a single sequence can sit in $\ell^2$ and $\ell^\infty$ but fall out of $\ell^1$, and its norm *shrinks* as $p$ grows: $\infty \to 1.283 \to 1$. That monotone drop is general — larger $p$ forgives the slowly-decaying tail.

**A finite Hölder check.** Let $x=(1,2,2)$ and $y=(2,1,2)$, using $p=q=2$. Left side: $\sum |x_ny_n| = 1\cdot2 + 2\cdot1 + 2\cdot2 = 8$. Right side: $\|x\|_2 = \sqrt{1+4+4}=3$, $\|y\|_2 = \sqrt{4+1+4}=3$, product $9$. Indeed $8 \le 9$. ✓ (Equality would need $x,y$ parallel; here they aren't.)

## Worked examples

**Example 1 (mechanical — Hölder ⟹ Minkowski, and the inclusion $\ell^1\subset\ell^2\subset\ell^\infty$).**

*Hölder from Young.* Young's inequality says for $a,b\ge0$ and conjugate $p,q$, $ab \le \tfrac{a^p}{p} + \tfrac{b^q}{q}$. Normalize so $\|x\|_p = \|y\|_q = 1$; then
$$\sum |x_n y_n| \le \sum\Big(\tfrac{|x_n|^p}{p} + \tfrac{|y_n|^q}{q}\Big) = \tfrac1p\|x\|_p^p + \tfrac1q\|y\|_q^q = \tfrac1p + \tfrac1q = 1 = \|x\|_p\|y\|_q.$$
Scaling $x,y$ back to general size preserves the inequality (both sides are homogeneous). That's Hölder.

*Minkowski from Hölder.* Split $|x_n+y_n|^p = |x_n+y_n|\,|x_n+y_n|^{p-1}$ and use $|x_n+y_n|\le|x_n|+|y_n|$:
$$\sum|x_n+y_n|^p \le \sum|x_n|\,|x_n+y_n|^{p-1} + \sum|y_n|\,|x_n+y_n|^{p-1}.$$
Apply Hölder to each sum, noting $(p-1)q = p$:
$$\le \big(\|x\|_p + \|y\|_p\big)\Big(\sum|x_n+y_n|^p\Big)^{1/q}.$$
Divide both sides by $\big(\sum|x_n+y_n|^p\big)^{1/q}$; since $1-\tfrac1q = \tfrac1p$, the left side becomes $\|x+y\|_p$, giving $\|x+y\|_p \le \|x\|_p + \|y\|_p$. ✓

*The inclusion.* For sequences, smaller $p$ is the **stronger** condition: $\ell^1 \subset \ell^2 \subset \ell^\infty$, all strict. Concretely $x=(1/n)$ lives in $\ell^2$ and $\ell^\infty$ but not $\ell^1$ (from the Concrete instance), witnessing that $\ell^1 \subsetneq \ell^2$. And whenever $x\in\ell^1$, each $|x_n|\le\|x\|_1$ so $x\in\ell^\infty$, with $\|x\|_\infty \le \|x\|_2 \le \|x\|_1$ — norms drop as $p$ rises.

**Example 2 (why you'd care — $C[0,1]$ is Banach in sup but *not complete* in $L^1$).**

Take the steepening ramps that climb from $0$ to $1$ ever more sharply around the midpoint. For $n\ge2$ define the continuous function
$$f_n(t) = \begin{cases} 0, & 0 \le t \le \tfrac12, \\[2pt] n\big(t-\tfrac12\big), & \tfrac12 \le t \le \tfrac12+\tfrac1n, \\[2pt] 1, & \tfrac12+\tfrac1n \le t \le 1. \end{cases}$$
Each $f_n$ is continuous, so $f_n \in C[0,1]$.

*They are $L^1$-Cauchy.* For $m>n$, $f_n$ and $f_m$ agree outside the ramp region and differ by at most $1$ on an interval of width $\le 1/n$, so
$$\|f_n - f_m\|_1 = \int_0^1 |f_n - f_m|\,dt \le \frac1n \xrightarrow{n\to\infty} 0.$$
So $(f_n)$ is Cauchy in the $L^1$ norm.

*But the $L^1$ limit is a discontinuous step.* Pointwise, $f_n(t) \to g(t)$ where $g(t)=0$ for $t\le\tfrac12$ and $g(t)=1$ for $t>\tfrac12$ — the unit step. Indeed $\|f_n - g\|_1 \le 1/n \to 0$, so $g$ *is* the $L^1$ limit. But $g$ has a jump at $\tfrac12$: it is **not continuous**, so $g \notin C[0,1]$.

Conclusion: $\big(C[0,1], \|\cdot\|_1\big)$ has a Cauchy sequence with no limit *inside the space* — it is **not complete**. Yet the very same set $C[0,1]$ *is* complete under the sup norm (a uniform limit of continuous functions is continuous). Same functions, two norms, opposite verdicts. This gap — that $L^1$ contains the missing step but $C$ doesn't — is exactly why we complete $C$ into $L^1$ (the crux of Boss 1).

## Watch out

- **You might think** an element of $L^p$ is a function with a value at each point. **Actually** it's an *equivalence class* of functions equal **almost everywhere** — two functions differing on a set of measure zero are the *same* element. Changing $f$ at a single point doesn't change $\int|f|^p$, so "the value of $f$ at $t=\tfrac12$" is meaningless in $L^p$. (This is also why the step $g$ above is a legitimate $L^1$ element despite its jump.)
- **You might think** the inclusion between $p$-spaces always points one way. **Actually it reverses** between sequences and functions. For **sequences**, $\ell^p \subset \ell^q$ when $p \le q$ (smaller $p$ = stronger). For **functions on a finite interval**, $L^q[a,b] \subset L^p[a,b]$ when $p \le q$ (larger $q$ = stronger) — a finite-measure phenomenon, provable by Hölder against the constant $1$. Memorize both; swapping them is a classic trap.
- **You might think** completeness is a property of the *set*. **Actually** it's a property of the set *plus the norm*. $C[0,1]$ is complete in sup, incomplete in $L^1$ — completeness is metric-dependent, exactly as Lesson [1.1](01-01-metric-spaces-completeness.md) warned.

## One-liner

> $\ell^p$, $C[a,b]$ (sup), and $L^p$ are the standard Banach spaces — Hölder and Minkowski make the $p$-norm a norm, and completeness lives with the *norm*, not the set.

## Problems

**P1 (🟢)** Let $x = (1, \tfrac12, \tfrac14, \tfrac18, \dots) = (2^{-(n-1)})_{n\ge1}$. Compute $\|x\|_1$, $\|x\|_2$, and $\|x\|_\infty$, and confirm $\|x\|_\infty \le \|x\|_2 \le \|x\|_1$.

**P2 (🟡)** Verify Hölder's inequality for $x=(3,0,4)$ and $y=(1,5,1)$ with $p=q=2$: compute both sides and check the inequality. Is it close to equality? What would equality require?

**P3 (🔴, optional)** On $[0,1]$, let $f(t) = t^{-1/3}$. (a) For which $p\ge1$ is $f\in L^p[0,1]$? (b) Use your answer to illustrate the inclusion $L^q[0,1]\subset L^p[0,1]$ for $p\le q$: find a single $p$ and $q$ with $p<q$ such that $f\in L^p$ but $f\notin L^q$.

<details>
<summary>Solutions</summary>

**P1** This is a geometric sequence with ratio $\tfrac12$.
- $\|x\|_1 = \sum_{n\ge0} 2^{-n} = \dfrac{1}{1-\tfrac12} = 2.$
- $\|x\|_2 = \Big(\sum_{n\ge0} (2^{-n})^2\Big)^{1/2} = \Big(\sum 4^{-n}\Big)^{1/2} = \Big(\dfrac{1}{1-\tfrac14}\Big)^{1/2} = \big(\tfrac43\big)^{1/2} = \dfrac{2}{\sqrt3} \approx 1.155.$
- $\|x\|_\infty = \sup 2^{-(n-1)} = 1$ (the first entry).

Check: $1 \le 1.155 \le 2$. ✓ Norms decrease as $p$ increases.

**P2** Left side: $\sum|x_n y_n| = 3\cdot1 + 0\cdot5 + 4\cdot1 = 7.$ Right side: $\|x\|_2 = \sqrt{9+0+16}=5$, $\|y\|_2=\sqrt{1+25+1}=\sqrt{27}=3\sqrt3\approx5.196$; product $= 15\sqrt3 \approx 25.98$. So $7 \le 25.98$ — comfortably true, **not** close to equality. Equality in Cauchy–Schwarz ($p=q=2$) requires $x$ and $y$ **parallel** ($y = cx$); here $y=(1,5,1)$ is nowhere near a multiple of $x=(3,0,4)$ (note $y_2=5\ne0=x_2$), so the gap is large.

**P3** (a) $\int_0^1 |t^{-1/3}|^p\,dt = \int_0^1 t^{-p/3}\,dt$ converges iff the exponent $-p/3 > -1$, i.e. $p/3 < 1$, i.e. $p < 3$. So $f \in L^p[0,1]$ **iff $1 \le p < 3$.**

(b) Pick $p=2$ and $q=3$. Then $f\in L^2$ (since $2<3$) but $f\notin L^3$ (since $q=3$ is not $<3$). This shows $L^3 \not\ni f \in L^2$, so the inclusion runs $L^3[0,1] \subsetneq L^2[0,1]$ — the *larger* exponent gives the smaller space, opposite to the sequence case. (Indeed for any $1\le p<q<3$, $f$ sits in both, and choosing $q\ge3>p$ separates them.)

</details>

## Flashback

**From Lesson 1.1 (Metric spaces and completeness):** Consider the space $X = (0,1]$ (the half-open interval) with the usual metric $d(x,y)=|x-y|$. Show $X$ is **not complete** by exhibiting a Cauchy sequence in $X$ with no limit in $X$. Then state what its completion is.

<details>
<summary>Solution</summary>

Take $x_n = \tfrac1n$ for $n\ge1$; each $x_n \in (0,1]$. It is Cauchy: for $m,n$ large, $|x_n - x_m| = \big|\tfrac1n - \tfrac1m\big| \le \tfrac1n + \tfrac1m \to 0$. Its only possible limit in $\mathbb{R}$ is $0$, since $\tfrac1n \to 0$. But $0 \notin (0,1]$, so the sequence has **no limit inside $X$** — hence $X$ is not complete. The missing point is precisely the left endpoint; adjoining it gives the completion $[0,1]$, which is complete (closed and bounded in $\mathbb{R}$). Same lesson as Example 2 above: completeness is about whether limits land *inside* the space.

</details>

## Connections

- **Backward:** these are the concrete Banach spaces promised in [1.2](01-02-normed-banach-spaces.md) — norm plus completeness. That the *same set* $C[0,1]$ is complete in sup but not in $L^1$ is the metric-dependence of completeness from [1.1](01-01-metric-spaces-completeness.md), made vivid.
- **Forward:** [1.4](01-04-finite-vs-infinite-dimensions.md) uses these spaces to show infinite-dimensional life is genuinely different (unit balls stop being compact). The stars are $p=2$: [2.1](02-01-inner-products-cauchy-schwarz.md) reveals $\ell^2$ and $L^2$ as **Hilbert spaces**, where Hölder becomes Cauchy–Schwarz and geometry (angles, projections) returns.
- **Sideways (measure/probability):** $L^p$ spaces, "almost everywhere," and the Riesz–Fischer completeness theorem come from measure theory — see [real analysis](../../real-analysis/syllabus.md) and [probability theory](../../probability-theory/syllabus.md), where $L^2$ random variables (finite variance) are exactly this space.
- **Sideways (PDEs):** $L^2[a,b]$ is the natural home of Fourier series and eigenfunction expansions — solving heat/wave/Laplace equations is done by expanding data in an orthonormal basis of $L^2$; see [PDEs](../../pdes/syllabus.md).
