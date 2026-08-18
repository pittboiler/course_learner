# Measure Theory · Lesson 3.4: Completeness — Riesz–Fischer

> ⏱ ~15 min · Module 3: $L^p$ spaces and modes of convergence · Builds on: [3.3](03-03-lp-holder-minkowski.md) (Minkowski gives the triangle inequality), [3.1](03-01-modes-of-convergence.md) (subsequence extraction), MCT/Fatou [2.4](02-04-monotone-convergence-fatou.md) and DCT [2.5](02-05-dominated-convergence.md) · Unlocks: [4.1](04-01-product-measures.md), and all of Banach/Hilbert space theory in [functional-analysis](../../functional-analysis/syllabus.md)

## Why this matters

Way back in [Lesson 1.1](01-01-where-riemann-fails.md), one of the three sins of the Riemann integral was that it gives you *no complete space of integrable functions*: you can write down a Cauchy sequence of Riemann-integrable functions whose limit is not Riemann-integrable, so limits fall out of the world. Lebesgue's whole payoff is here. The **Riesz–Fischer theorem** says $L^p(\mu)$ is *complete* — every Cauchy sequence has a limit that stays inside $L^p$. That single word, "complete," is the license to define functions as limits, and it is precisely the property [functional-analysis](../../functional-analysis/syllabus.md) turns into the definition of a **Banach space**. The special case $p=2$ makes $L^2$ a Hilbert space, which is exactly why a Fourier series converges *in mean* to the function it represents ([fourier-analysis](../../fourier-analysis/syllabus.md)).

## The idea

A metric space is **complete** when every sequence that *looks like* it should converge (its terms bunch up — a Cauchy sequence) actually *does* converge, to a point still in the space. The rationals $\mathbb{Q}$ fail this: $3, 3.1, 3.14, \dots$ is Cauchy but its limit $\pi$ escapes. The reals $\mathbb{R}$ are the completion that plugs every such hole. Riemann-integrable functions under the $L^1$ distance behave like $\mathbb{Q}$; Lebesgue's $L^p$ behaves like $\mathbb{R}$.

Proving completeness by grabbing an arbitrary Cauchy sequence and chasing its limit is awkward — a Cauchy sequence hands you nothing concrete to converge *to*. The trick that makes the proof almost mechanical is a reduction: **a normed space is complete if and only if every absolutely summable series converges.** "Absolutely summable" ($\sum_n \lVert f_n\rVert < \infty$) is a much stronger hypothesis than "Cauchy," and it comes with a free gift — the pointwise sum $\sum_n |f_n|$ is a ready-made *dominating function*. Bound its norm with Minkowski, force it to be finite a.e. with the Monotone Convergence Theorem, and then let Dominated Convergence carry the partial sums home. Every heavy tool from Module 2 gets used exactly once.

## The formal version

Throughout, $(X,\mathcal{M},\mu)$ is a measure space and $1 \le p \le \infty$. Recall from [3.3](03-03-lp-holder-minkowski.md) that $\lVert f\rVert_p = \left(\int_X |f|^p\,d\mu\right)^{1/p}$ for $p<\infty$ and $\lVert f\rVert_\infty = \operatorname*{ess\,sup}|f|$, and that **Minkowski's inequality** $\lVert f+g\rVert_p \le \lVert f\rVert_p + \lVert g\rVert_p$ is what makes $\lVert\cdot\rVert_p$ a genuine norm on $L^p(\mu)$ (whose elements are functions identified when they agree $\mu$-a.e.).

**Definition (Banach space).** A normed vector space $(V,\lVert\cdot\rVert)$ is a **Banach space** if it is complete in the metric $d(f,g)=\lVert f-g\rVert$: every Cauchy sequence — one with $\lVert f_n - f_m\rVert \to 0$ as $n,m\to\infty$ — converges to some limit $f\in V$.

*In words:* a Banach space is a normed space with no missing limit points.

**Lemma (the absolutely-summable criterion).** A normed vector space $V$ is complete **if and only if** every absolutely summable series converges in $V$ — that is, $\sum_{n=1}^\infty \lVert f_n\rVert < \infty$ implies the partial sums $s_N = \sum_{n=1}^N f_n$ converge to some $s\in V$.

*In words:* to test completeness you never have to face a general Cauchy sequence; it is enough to sum the series whose norms already form a convergent series of numbers.

**Theorem (Riesz–Fischer).** For every $1\le p\le\infty$, $L^p(\mu)$ is a Banach space.

*In words:* Cauchy sequences of $L^p$ functions have $L^p$ limits — the space of integrable functions is closed under the limits its own norm demands.

**A companion fact you get for free.** The proof will show that whenever $f_n \to f$ in $L^p$ (with $p<\infty$), **some subsequence $f_{n_k}\to f$ pointwise $\mu$-a.e.** This is the subsequence-extraction engine from [Lesson 3.1](03-01-modes-of-convergence.md); it is not decoration, it is the literal mechanism of the proof.

**Dense subspaces (how completeness gets *used*).** Two nice subclasses sit densely inside $L^p$ for $1\le p<\infty$:
- **simple functions** (finite combinations $\sum_k a_k \mathbf{1}_{E_k}$ with $\mu(E_k)<\infty$) are dense in $L^p(\mu)$ — this is the simple-function approximation theorem of [2.2](02-02-simple-functions-integral.md) upgraded to the $L^p$ norm;
- for Lebesgue measure on $\mathbb{R}^n$, **step functions** and **continuous compactly-supported functions** are dense in $L^p$.

*In words:* every $L^p$ function is an $L^p$-limit of these tame functions. Density plus **completeness** is the standard two-step move of analysis: prove an inequality or define an operator on the easy dense class, then extend to all of $L^p$ by taking limits — legal *because* the limits stay in $L^p$.

## Concrete instance

Here is the criterion lemma proved in full — the equivalence the whole theorem rides on.

**($\Rightarrow$) Complete $\implies$ absolutely summable series converge.** Suppose $V$ is complete and $\sum_n \lVert f_n\rVert = M < \infty$. Let $s_N = \sum_{n=1}^N f_n$. For $N > K$, the triangle inequality gives
$$\lVert s_N - s_K\rVert = \Big\lVert \sum_{n=K+1}^{N} f_n\Big\rVert \le \sum_{n=K+1}^{N}\lVert f_n\rVert \le \sum_{n=K+1}^{\infty}\lVert f_n\rVert.$$
The right side is the tail of the *convergent* number series $\sum_n\lVert f_n\rVert$, so it $\to 0$ as $K\to\infty$. Hence $(s_N)$ is Cauchy, and by completeness it converges. ✓

**($\Leftarrow$) Absolutely summable series converge $\implies$ complete.** Let $(f_n)$ be any Cauchy sequence. *Extract a fast subsequence:* using Cauchyness, pick indices $n_1 < n_2 < \cdots$ so that
$$\lVert f_{n_{k+1}} - f_{n_k}\rVert < 2^{-k}\qquad(k\ge 1).$$
(Choose $n_k$ so that $\lVert f_a - f_b\rVert < 2^{-k}$ for all $a,b\ge n_k$.) The telescoping series
$$f_{n_1} + \sum_{k=1}^{\infty}\big(f_{n_{k+1}} - f_{n_k}\big)$$
is absolutely summable, since $\sum_k \lVert f_{n_{k+1}}-f_{n_k}\rVert < \sum_k 2^{-k} = 1 < \infty$. By hypothesis it converges to some $f\in V$; but its $K$-th partial sum telescopes to exactly $f_{n_{K+1}}$, so the subsequence $f_{n_k}\to f$. Finally, *a Cauchy sequence with a convergent subsequence converges to the same limit*: given $\varepsilon>0$, choose $N$ with $\lVert f_a - f_b\rVert < \varepsilon/2$ for $a,b\ge N$, then choose $k$ with $n_k\ge N$ and $\lVert f_{n_k}-f\rVert<\varepsilon/2$; for any $n\ge N$,
$$\lVert f_n - f\rVert \le \lVert f_n - f_{n_k}\rVert + \lVert f_{n_k}-f\rVert < \tfrac{\varepsilon}{2}+\tfrac{\varepsilon}{2} = \varepsilon.$$
So $f_n\to f$ and $V$ is complete. ✓ $\blacksquare$

Notice the *only* place completeness of the ambient space was needed in ($\Leftarrow$) is that the absolutely summable series converges — everything else is the subsequence trick. That is why proving Riesz–Fischer reduces entirely to handling one absolutely summable series.

## Worked examples

**Example 1 — Riesz–Fischer for $1\le p<\infty$ (the main construction).**
By the lemma it suffices to sum one absolutely summable series. Let $f_n\in L^p(\mu)$ with $\sum_n \lVert f_n\rVert_p = M<\infty$.

*Build the candidate.* Define the nonnegative measurable partial sums and their pointwise limit
$$G_N = \sum_{n=1}^{N} |f_n|,\qquad G = \sum_{n=1}^{\infty}|f_n| = \lim_{N\to\infty} G_N \in [0,\infty].$$
By **Minkowski** (extended to $N$ terms), $\lVert G_N\rVert_p \le \sum_{n=1}^N \lVert f_n\rVert_p \le M$, i.e. $\int G_N^{\,p}\,d\mu \le M^p$. Since $t\mapsto t^p$ is increasing, $G_N^{\,p}\uparrow G^p$ pointwise, so the **Monotone Convergence Theorem** ([2.4](02-04-monotone-convergence-fatou.md)) gives
$$\int_X G^p\,d\mu = \lim_{N\to\infty}\int_X G_N^{\,p}\,d\mu \le M^p < \infty.$$
Thus $G\in L^p$, and in particular $G<\infty$ **$\mu$-a.e.** — this finiteness is the entire point.

*Read off the limit.* At each point where $G(x)<\infty$, the series $\sum_n f_n(x)$ converges absolutely in $\mathbb{R}$ (or $\mathbb{C}$), which *is* complete; call its sum $f(x)$, and set $f(x)=0$ on the null set where $G=\infty$. As an a.e. pointwise limit of the measurable partial sums $s_N=\sum_{n=1}^N f_n$, the function $f$ is measurable, and $|f|\le G$ gives $f\in L^p$.

*Close with domination.* For a.e. $x$,
$$|f - s_N| = \Big|\sum_{n>N} f_n\Big| \le \sum_{n>N}|f_n| \le G, \qquad\text{so}\qquad |f - s_N|^p \le G^p \in L^1(\mu).$$
The single integrable function $G^p$ dominates every $|f-s_N|^p$, and $|f-s_N|^p\to 0$ a.e. because $s_N(x)\to f(x)$. The **Dominated Convergence Theorem** ([2.5](02-05-dominated-convergence.md)) delivers
$$\lVert f - s_N\rVert_p^{\,p} = \int_X |f - s_N|^p\,d\mu \xrightarrow[N\to\infty]{} 0,$$
so $s_N\to f$ in $L^p$. The absolutely summable series converges; by the lemma $L^p(\mu)$ is complete. $\blacksquare$

The promised subsequence fact is now visible: given a *general* Cauchy sequence, the lemma's ($\Leftarrow$) step extracts $f_{n_k}$ whose telescoping series is absolutely summable, and this construction shows its partial sums — the $f_{n_k}$ themselves — converge **a.e.** to the limit. So convergence in $L^p$ always drags an a.e.-convergent subsequence along, even though (typewriter counterexample, [3.1](03-01-modes-of-convergence.md)) the *full* sequence need not converge at a single point.

**Example 2 — the $p=\infty$ case (a different flavor: uniform off a null set).**
Let $(f_n)$ be Cauchy in $L^\infty(\mu)$, where $\lVert g\rVert_\infty=\operatorname*{ess\,sup}|g|$. For each pair $n,m$ the inequality $|f_n-f_m|\le \lVert f_n-f_m\rVert_\infty$ holds off a null set $E_{n,m}$; likewise $|f_n|\le\lVert f_n\rVert_\infty$ off a null set $F_n$. The countable union
$$E = \bigcup_{n,m} E_{n,m}\cup\bigcup_n F_n$$
is still null. Off $E$, we have $|f_n(x)-f_m(x)|\le \lVert f_n-f_m\rVert_\infty$ for **all** $n,m$ simultaneously — so the numerical sequences $\big(f_n(x)\big)_n$ are *uniformly* Cauchy on $X\setminus E$. A uniformly Cauchy sequence of functions converges uniformly to a bounded limit $f$ (set $f=0$ on $E$). Uniform convergence off a null set is exactly $\lVert f_n - f\rVert_\infty\to 0$, and $f\in L^\infty$. Hence $L^\infty(\mu)$ is complete. $\blacksquare$

The contrast is worth keeping: for $p<\infty$ the norm is an integral and MCT/DCT do the work; for $p=\infty$ the norm is an essential sup and completeness is just uniform convergence on the good set — the completeness of $\mathbb{R}$ under $\sup$, transported off a null set.

## Watch out

- **You might think** the limit $f$ must be a genuine, everywhere-defined function — **but** elements of $L^p$ are equivalence classes modulo a.e.-equality, and $f$ is only pinned down a.e. (we freely set it to $0$ on the null set where $G=\infty$). Completeness is a statement about the classes; there is nothing to fix.
- **You might think** $f_n\to f$ in $L^p$ lets you say $f_n(x)\to f(x)$ for (a.e.) $x$ — **but** only a *subsequence* is guaranteed to converge a.e. The typewriter sequence from [3.1](03-01-modes-of-convergence.md) converges to $0$ in $L^p$ while diverging at every point. Claim the subsequence, never the whole sequence.
- **You might think** the absolutely-summable trick is free — **but** it rests entirely on $\lVert\cdot\rVert_p$ being a *norm*, i.e. on Minkowski's inequality from [3.3](03-03-lp-holder-minkowski.md). For $0<p<1$ the triangle inequality fails, $\lVert\cdot\rVert_p$ is not a norm, and this scaffolding collapses.
- **You might think** $\sum_n\lVert f_n\rVert_p<\infty$ is something you must *verify* about a given sequence — **but** in the completeness proof it is the *hypothesis of the criterion*, the deliberate reduction that manufactures a dominating function. You are allowed to assume it.

## One-liner

> $L^p$ is complete because an absolutely summable series carries its own dominating function $\sum_n|f_n|$ — Minkowski + MCT make it finite a.e., and DCT walks the partial sums home.

## Problems

**P1 (🟢)** On $(\mathbb{R},\lambda)$ (Lebesgue measure) let $f_n = \dfrac{1}{n^2}\,\mathbf{1}_{[n,\,n+1]}$. (a) Compute $\lVert f_n\rVert_p$ for $1\le p<\infty$ and show $\sum_n\lVert f_n\rVert_p<\infty$. (b) Conclude the series $\sum_n f_n$ converges in $L^p$, and identify its limit $f$ explicitly. (c) What goes wrong with this argument at $p=\infty$?

**P2 (🟡)** Feel the incompleteness Lebesgue repairs. On $[0,1]$ with the $L^1$-distance $d(f,g)=\int_0^1|f-g|\,dx$, consider the continuous functions
$$f_n(x) = \begin{cases} 0, & 0\le x\le \tfrac12,\\ n\big(x-\tfrac12\big), & \tfrac12 < x < \tfrac12+\tfrac1n,\\ 1, & \tfrac12+\tfrac1n \le x\le 1.\end{cases}$$
Show $(f_n)$ is Cauchy in the $L^1$-distance but has **no continuous** $L^1$-limit. (So $\big(C[0,1],\,d\big)$ is *not* complete — its completion is $L^1[0,1]$, which is why Riesz–Fischer needs Lebesgue's larger space.)

**P3 (🔴, optional)** Prove Riesz–Fischer *directly* from a Cauchy sequence, without invoking the criterion lemma. Let $(f_n)\subset L^p(\mu)$, $1\le p<\infty$, be Cauchy. Extract $n_1<n_2<\cdots$ with $\lVert f_{n_{k+1}}-f_{n_k}\rVert_p<2^{-k}$, and set
$$g = |f_{n_1}| + \sum_{k=1}^{\infty} |f_{n_{k+1}}-f_{n_k}|.$$
Show $g\in L^p$ (so $g<\infty$ a.e.), deduce that $f_{n_k}$ converges pointwise a.e. to some $f\in L^p$ and also in $L^p$, and finally conclude the *whole* sequence $f_n\to f$ in $L^p$.

<details>
<summary>Solutions</summary>

**P1** (a) $|f_n|^p = n^{-2p}\mathbf{1}_{[n,n+1]}$, and $[n,n+1]$ has length $1$, so
$$\lVert f_n\rVert_p = \Big(\int_{\mathbb{R}} n^{-2p}\mathbf{1}_{[n,n+1]}\,d\lambda\Big)^{1/p} = \big(n^{-2p}\big)^{1/p} = n^{-2}.$$
Then $\sum_{n\ge1}\lVert f_n\rVert_p = \sum_{n\ge1} n^{-2} = \pi^2/6 < \infty$ — absolutely summable for *every* $p\in[1,\infty)$.

(b) By the criterion (or Example 1), $\sum_n f_n$ converges in $L^p$. The intervals $[n,n+1]$ have disjoint interiors, so at (a.e.) $x$ at most one term is nonzero: for $x\in[m,m+1)$ the sum is $m^{-2}$. Hence the limit is
$$f(x) = \sum_{n=1}^{\infty}\frac{1}{n^2}\,\mathbf{1}_{[n,n+1]}(x),$$
i.e. $f(x)=\lfloor x\rfloor^{-2}$ on $x\ge1$ and $0$ on $x<1$. (Sanity: $\lVert f\rVert_p^p=\sum_n n^{-2p}<\infty$, so indeed $f\in L^p$.)

(c) At $p=\infty$, $\lVert f_n\rVert_\infty = n^{-2}$ still (it's the essential sup of $f_n$), and these *do* sum. The series even converges in $L^\infty$ here — but that is because the supports march off to infinity and stay disjoint. The point of the caveat is that the $p<\infty$ *method* (bounding $\int G^p$ via MCT) has no $L^\infty$ analogue; for $p=\infty$ you argue via uniform convergence off a null set as in Example 2. This particular series is well-behaved, so nothing "goes wrong" numerically — it simply isn't proved by the integral machine.

**P2** *Cauchy.* Each $f_n$ is a continuous ramp equal to $0$ on $[0,\tfrac12]$, rising to $1$, then $\equiv 1$; all agree off the interval $(\tfrac12,\tfrac12+\tfrac1n)$. For $m\ge n$, $f_n$ and $f_m$ differ only on $(\tfrac12,\tfrac12+\tfrac1n)$, where both lie in $[0,1]$, so $|f_n-f_m|\le 1$ there and
$$d(f_n,f_m)=\int_0^1|f_n-f_m|\,dx \le \frac{1}{n}\xrightarrow[n\to\infty]{}0.$$
Thus $(f_n)$ is Cauchy in the $L^1$-distance.

*No continuous limit.* Let $g=\mathbf{1}_{(1/2,\,1]}$ (value $0$ on $[0,\tfrac12]$, $1$ on $(\tfrac12,1]$). Then $|f_n-g|\le 1$ and is supported on $(\tfrac12,\tfrac12+\tfrac1n)$, so $d(f_n,g)\le \tfrac1n\to0$: the sequence converges in $L^1$ to the *discontinuous* step function $g$. Suppose some continuous $h$ had $d(f_n,h)\to0$. By uniqueness of $L^1$-limits (if $d(f_n,h)\to0$ and $d(f_n,g)\to0$ then $\int|h-g|\le \int|h-f_n|+\int|f_n-g|\to0$, forcing $h=g$ a.e.), $h=g$ a.e. But a continuous $h$ cannot equal $g$ a.e.: $g$ jumps from $0$ to $1$ at $x=\tfrac12$, and any $h$ agreeing with $g$ a.e. on both sides would need $\lim_{x\uparrow 1/2}h=0$ and $\lim_{x\downarrow1/2}h=1$, contradicting continuity at $\tfrac12$. So no continuous limit exists. $\big(C[0,1],d\big)$ is incomplete; completing it is exactly $L^1[0,1]$. $\blacksquare$

**P3** *$g\in L^p$.* Write $g_K = |f_{n_1}| + \sum_{k=1}^{K}|f_{n_{k+1}}-f_{n_k}|\uparrow g$. By Minkowski,
$$\lVert g_K\rVert_p \le \lVert f_{n_1}\rVert_p + \sum_{k=1}^{K}\lVert f_{n_{k+1}}-f_{n_k}\rVert_p < \lVert f_{n_1}\rVert_p + \sum_{k=1}^{\infty}2^{-k} = \lVert f_{n_1}\rVert_p + 1 =: C.$$
Since $g_K^p\uparrow g^p$, MCT gives $\int g^p = \lim_K\int g_K^p \le C^p<\infty$, so $g\in L^p$ and $g<\infty$ a.e.

*Pointwise a.e. limit.* Where $g(x)<\infty$, the telescoping series $f_{n_1}(x)+\sum_k\big(f_{n_{k+1}}(x)-f_{n_k}(x)\big)$ converges absolutely (dominated by $g(x)$), and its $K$-th partial sum is $f_{n_{K+1}}(x)$. So $f_{n_k}(x)\to f(x)$ for a.e. $x$, defining a measurable $f$ with $|f|\le g$, hence $f\in L^p$.

*Subsequence converges in $L^p$.* For a.e. $x$, $|f - f_{n_k}| = \big|\sum_{j\ge k}(f_{n_{j+1}}-f_{n_j})\big| \le \sum_{j\ge k}|f_{n_{j+1}}-f_{n_j}| \le g$, so $|f-f_{n_k}|^p\le g^p\in L^1$ and $|f-f_{n_k}|^p\to0$ a.e. By DCT, $\lVert f-f_{n_k}\rVert_p\to0$.

*Whole sequence.* $(f_n)$ is Cauchy and has the convergent subsequence $f_{n_k}\to f$; the standard $\varepsilon/2$ argument (Concrete instance, ($\Leftarrow$)) upgrades this to $f_n\to f$ in $L^p$. Given $\varepsilon$, pick $N$ with $\lVert f_a-f_b\rVert_p<\varepsilon/2$ for $a,b\ge N$ and $k$ with $n_k\ge N$, $\lVert f_{n_k}-f\rVert_p<\varepsilon/2$; then $\lVert f_n-f\rVert_p\le\lVert f_n-f_{n_k}\rVert_p+\lVert f_{n_k}-f\rVert_p<\varepsilon$ for $n\ge N$. $\blacksquare$

</details>

## Flashback

**From [Lesson 3.3](03-03-lp-holder-minkowski.md) (Hölder, Minkowski, and $L^p$ membership):** On $\big([0,1],\lambda\big)$ let $f(x)=x^{-1/3}$. For which exponents $p\in[1,\infty)$ is $f\in L^p$, and what is $\lVert f\rVert_p$ when it is finite? Then use Hölder (or your answer) to confirm $f\in L^2\subset L^1$.

<details>
<summary>Solution</summary>

$\displaystyle \lVert f\rVert_p^p = \int_0^1 \big(x^{-1/3}\big)^p\,dx = \int_0^1 x^{-p/3}\,dx.$ This integral converges iff the exponent $-p/3 > -1$, i.e. $p/3 < 1$, i.e. $p<3$. For $1\le p<3$,
$$\int_0^1 x^{-p/3}\,dx = \left[\frac{x^{\,1-p/3}}{1-p/3}\right]_0^1 = \frac{1}{1-p/3} = \frac{3}{3-p},$$
so
$$\lVert f\rVert_p = \left(\frac{3}{3-p}\right)^{1/p}\qquad(1\le p<3),\qquad f\notin L^p\ \text{for } p\ge 3.$$
In particular $\lVert f\rVert_2 = (3/1)^{1/2}=\sqrt{3}<\infty$, so $f\in L^2[0,1]$. On the finite-measure space $[0,1]$, Hölder with conjugate exponents $2,2$ gives $\int_0^1|f|\cdot 1\,dx \le \lVert f\rVert_2\,\lVert 1\rVert_2 = \sqrt{3}\cdot 1$, so $f\in L^1$ too — an instance of the nesting $L^2[0,1]\subset L^1[0,1]$ that Hölder guarantees on any finite-measure space. (Consistency check: the formula gives $\lVert f\rVert_1 = 3/2$, and indeed $\sqrt3\approx1.73 \ge 1.5$, matching $\lVert f\rVert_1\le\lVert f\rVert_2$ on a probability space.)

</details>

## Connections

- **Backward:** this is the capstone of Module 3. It cashes in **Minkowski** ([3.3](03-03-lp-holder-minkowski.md)) for the triangle inequality, the **MCT** ([2.4](02-04-monotone-convergence-fatou.md)) to make $\sum_n|f_n|$ finite a.e., the **DCT** ([2.5](02-05-dominated-convergence.md)) to land the limit, and the **subsequence extraction** of [3.1](03-01-modes-of-convergence.md) as the engine of the criterion — and it finally repairs the "no complete space" defect flagged in [1.1](01-01-where-riemann-fails.md).
- **Forward:** completeness is a standing hypothesis for [Module 4](04-01-product-measures.md) and beyond; combined with the dense subspaces above, it is the "prove on a dense set, extend by limits" template used constantly once integrals over product spaces enter.
- **Sideways (functional-analysis):** Riesz–Fischer is *the* founding example — [functional-analysis](../../functional-analysis/syllabus.md) abstracts "complete normed space" into the definition of a **Banach space**, and $L^2$ (norm from an inner product) into a **Hilbert space**. Almost every existence theorem there (projections, bases, bounded operators) needs exactly this completeness.
- **Sideways (fourier-analysis):** because $L^2$ is complete, the partial sums of a Fourier series — a Cauchy sequence in $L^2$ — must converge *in mean* to a limit inside $L^2$. Convergence of Fourier series in mean is Riesz–Fischer wearing a different hat ([fourier-analysis](../../fourier-analysis/syllabus.md)).
- **Sideways (probability-theory):** the space $L^2(\Omega,\mathcal{F},\mathbb{P})$ of finite-variance random variables is complete, which is what lets you *define* limits of random variables (e.g. $L^2$ martingale limits) and know they are still random variables ([probability-theory](../../probability-theory/syllabus.md)).
