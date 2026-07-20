# Probability Theory · Lesson 2.5: $L^p$ spaces and the key inequalities

> ⏱ ~15 min · Module 2: Random variables and expectation · Builds on: [2.3](02-03-lebesgue-integral-expectation.md), [2.4](02-04-convergence-theorems.md) · Unlocks: Module 3 — [3.1](03-01-independence.md)

## Why this matters

Almost every theorem in this course is, underneath, one of five inequalities being pushed hard. The weak law of large numbers ([4.2](04-02-laws-of-large-numbers.md)) is a two-line consequence of **Chebyshev**; the fact that variance is never negative is **Jensen**; the bound $|\rho|\le 1$ on correlation is **Cauchy–Schwarz**; and the reason conditional expectation is a clean orthogonal *projection* ([5.1](05-01-conditional-expectation.md)) is that $L^2$ is a Hilbert space. This lesson is the toolkit. Learn to reach for the right inequality reflexively and half the proofs ahead write themselves.

## The idea

You have one number about a random variable — say a mean, or a second moment — and you want to say something about a completely different question, like "how often is $X$ far from its mean?" Inequalities are the currency exchange: they convert a moment you *have* into a bound on a probability you *want*, always in the safe direction (you never claim more than you can prove).

Four moves cover most of it:

- **Markov / Chebyshev** turn a bounded moment into a *tail bound*: if the average is small, the variable can't be large too often.
- **Jensen** handles *convexity*: bending a curve and then averaging beats averaging first — so $\mathbb E[\varphi(X)]\ge\varphi(\mathbb E[X])$ for convex $\varphi$.
- **Hölder / Cauchy–Schwarz** control *products*: $\mathbb E|XY|$ is capped by the sizes of $X$ and $Y$ measured separately.
- **Minkowski** is the *triangle inequality* — it's what lets us call $\|\cdot\|_p$ a genuine norm and treat random variables as points in a space with distances.

And one structural payoff: with $p=2$, the size-of-$X$ measure comes from an inner product $\langle X,Y\rangle=\mathbb E[XY]$. That makes $L^2$ a geometry — lengths, angles, right angles — and geometry is why so much later material becomes "just drop a perpendicular."

## The formal version

Throughout, $(\Omega,\mathcal F,\mathbb P)$ is a **probability** space (total mass $\mathbb P(\Omega)=1$), $X,Y$ are random variables, and $\mathbb E$ is the Lebesgue integral $\mathbb E[X]=\int_\Omega X\,d\mathbb P$ from [2.3](02-03-lebesgue-integral-expectation.md).

**$L^p$ norms and spaces.** For $1\le p<\infty$ define
$$\|X\|_p=\big(\mathbb E|X|^p\big)^{1/p},\qquad L^p=\{X:\|X\|_p<\infty\}.$$
In words: $\|X\|_p$ is a single number measuring the "size" of $X$ through its $p$-th moment; $L^p$ collects the variables whose $p$-th moment is finite. Two variables equal **almost surely** (differing only on a set of probability $0$) are treated as the same point — otherwise $\|X\|_p=0$ wouldn't force $X=0$.

**Moment nesting.** On a probability space, if $1\le r\le p$ then $L^p\subseteq L^r$ and $\|X\|_r\le\|X\|_p$.
In words: higher moments are a *stronger* requirement — controlling $\mathbb E|X|^p$ automatically controls every lower moment. (This is special to total mass $1$; see Watch out.)

**Markov's inequality.** If $X\ge 0$ and $a>0$,
$$\mathbb P(X\ge a)\le\frac{\mathbb E[X]}{a}.$$
In words: a nonnegative variable with small mean rarely takes big values — a mean of $\mu$ can't hide more than a $\mu/a$ fraction of its mass above level $a$.

**Chebyshev's inequality.** If $\mu=\mathbb E[X]$ and $k>0$,
$$\mathbb P(|X-\mu|\ge k)\le\frac{\operatorname{Var}(X)}{k^2}.$$
In words: a small variance pins $X$ near its mean; being $k$ away is at most a $\operatorname{Var}(X)/k^2$ event. This is the exact bound that proves the weak law in [4.2](04-02-laws-of-large-numbers.md).

**Jensen's inequality.** If $\varphi:\mathbb R\to\mathbb R$ is convex and $\mathbb E[X]$ is finite,
$$\varphi(\mathbb E[X])\le\mathbb E[\varphi(X)].$$
In words: for a convex (upward-bending) $\varphi$, applying it to the average is no bigger than averaging after applying it.

**Hölder's inequality.** If $p,q>1$ are **conjugate**, $\tfrac1p+\tfrac1q=1$, then
$$\mathbb E|XY|\le\|X\|_p\,\|Y\|_q.$$
In words: the average size of a product is bounded by the two factors' sizes measured in conjugate norms. The symmetric case $p=q=2$ is **Cauchy–Schwarz**: $\mathbb E|XY|\le\|X\|_2\|Y\|_2$.

**Minkowski's inequality (triangle inequality).** For $1\le p<\infty$,
$$\|X+Y\|_p\le\|X\|_p+\|Y\|_p.$$
In words: the size of a sum never exceeds the sum of sizes — the property that makes $\|\cdot\|_p$ a bona fide norm and $L^p$ a normed space.

### Proofs (Tier 1)

**Markov.** Fix $a>0$. Since $X\ge 0$, compare it pointwise to a step at height $a$:
$$a\,\mathbf 1_{\{X\ge a\}}\le X,$$
because where $X\ge a$ the left side is $a\le X$, and where $X<a$ the left side is $0\le X$. Expectations preserve $\le$ (monotonicity, [2.3](02-03-lebesgue-integral-expectation.md)), and $\mathbb E[\mathbf 1_{\{X\ge a\}}]=\mathbb P(X\ge a)$, so $a\,\mathbb P(X\ge a)\le\mathbb E[X]$. Divide by $a$. $\blacksquare$

**Chebyshev.** Apply Markov to the nonnegative variable $(X-\mu)^2$ at level $a=k^2$:
$$\mathbb P(|X-\mu|\ge k)=\mathbb P\big((X-\mu)^2\ge k^2\big)\le\frac{\mathbb E[(X-\mu)^2]}{k^2}=\frac{\operatorname{Var}(X)}{k^2}.\ \blacksquare$$

**Jensen (supporting line).** Convexity means at any point $m$ the curve lies above one of its tangents: there is a slope $c$ (a subgradient) with
$$\varphi(x)\ge\varphi(m)+c\,(x-m)\quad\text{for all }x.$$
Take $m=\mathbb E[X]$ and substitute $x=X$:
$$\varphi(X)\ge\varphi(\mathbb E[X])+c\,(X-\mathbb E[X]).$$
Take expectations. The right side's linear term dies, $\mathbb E[X-\mathbb E[X]]=0$, leaving $\mathbb E[\varphi(X)]\ge\varphi(\mathbb E[X])$. $\blacksquare$

**Moment nesting via Jensen.** For $r\le p$ the map $t\mapsto |t|^{p/r}$ is convex (exponent $p/r\ge 1$). Apply Jensen to $|X|^r$:
$$\big(\mathbb E|X|^r\big)^{p/r}\le\mathbb E\big[(|X|^r)^{p/r}\big]=\mathbb E|X|^p.$$
Raise both sides to the power $1/p$: $\|X\|_r\le\|X\|_p$. (Where did $\mathbb P(\Omega)=1$ enter? In Jensen itself — it needs a probability measure so that $\mathbb E[1]=1$.) $\blacksquare$

**Hölder (sketch via Young).** Young's inequality: for $u,v\ge 0$ and conjugate $p,q$, $uv\le\frac{u^p}{p}+\frac{v^q}{q}$ (it's the convexity of $\exp$ applied to $\log$). Assume $\|X\|_p,\|Y\|_q>0$ (else a side is $0$ a.s.) and normalize $u=|X|/\|X\|_p$, $v=|Y|/\|Y\|_q$. Then
$$\mathbb E\!\left[\frac{|XY|}{\|X\|_p\|Y\|_q}\right]\le\mathbb E\!\left[\frac{u^p}{p}+\frac{v^q}{q}\right]=\frac1p+\frac1q=1,$$
since $\mathbb E[u^p]=\mathbb E[v^q]=1$ by construction. Multiply through by $\|X\|_p\|Y\|_q$. Cauchy–Schwarz is $p=q=2$. Minkowski follows from Hölder by expanding $\|X+Y\|_p^p=\mathbb E[|X+Y|\,|X+Y|^{p-1}]$ and bounding each piece. $\blacksquare$

**$L^2$ is a Hilbert space.** On $L^2$, define the **inner product** $\langle X,Y\rangle=\mathbb E[XY]$ (finite by Cauchy–Schwarz). It is symmetric, bilinear, and $\langle X,X\rangle=\mathbb E[X^2]=\|X\|_2^2\ge 0$, zero only when $X=0$ a.s. So $\|X\|_2=\sqrt{\langle X,X\rangle}$ is the length induced by an inner product, and Cauchy–Schwarz is exactly the inner-product bound $|\langle X,Y\rangle|\le\|X\|_2\|Y\|_2$. Crucially, $L^2$ is **complete** — every Cauchy sequence converges (the **Riesz–Fischer theorem**) — so $L^2$ is a full Hilbert space, not just an inner-product space. That completeness is what guarantees the orthogonal projection defining conditional expectation in [5.1](05-01-conditional-expectation.md) actually exists.

## Picture

![Jensen's inequality: a convex curve with the point at (E[X], phi(E[X])) sitting below the point (E[X], E[phi(X)]) on the chord, plus the supporting tangent line at E[X]](assets/02-05-fig1.svg)

The convex curve bends upward, so the **chord** between two sample values sits *above* the curve. Reading off the vertical line at $\mathbb E[X]$: the curve gives $\varphi(\mathbb E[X])$ (bend first), the chord gives $\mathbb E[\varphi(X)]$ (average first), and the chord is higher — that gap *is* Jensen's inequality. The dashed **supporting line** is the tangent used in the proof: the whole curve stays above it, which is why substituting $x=X$ and averaging works.

## Worked examples

**Example 1 (mechanical — Chebyshev on a die).** Let $X$ be a fair die roll, so $\mathbb E[X]=3.5$ and $\operatorname{Var}(X)=\tfrac{35}{12}\approx 2.917$. Bound the chance $X$ lands at least $2$ away from the mean:
$$\mathbb P(|X-3.5|\ge 2)\le\frac{\operatorname{Var}(X)}{2^2}=\frac{35/12}{4}=\frac{35}{48}\approx 0.729.$$
The true probability is $\mathbb P(X\in\{1,6\})=\tfrac13\approx 0.333$. Chebyshev is loose — but it needed nothing except the variance, and it holds for *every* distribution with that variance. Universal beats sharp when you know nothing else.

**Example 2 (why you'd care — variance and correlation for free).** Two one-liners the toolkit hands you:

*Variance is nonnegative.* Take $\varphi(x)=x^2$ (convex). Jensen gives $\big(\mathbb E[X]\big)^2=\varphi(\mathbb E[X])\le\mathbb E[\varphi(X)]=\mathbb E[X^2]$, so
$$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2\ge 0,$$
with equality iff $X$ is a.s. constant. A definition that could have been negative on paper is forced nonnegative by convexity.

*Correlation lives in $[-1,1]$.* Center the variables and apply Cauchy–Schwarz to $X-\mathbb E[X]$ and $Y-\mathbb E[Y]$:
$$|\operatorname{Cov}(X,Y)|=\big|\mathbb E[(X-\mathbb E X)(Y-\mathbb E Y)]\big|\le\|X-\mathbb E X\|_2\,\|Y-\mathbb E Y\|_2=\sqrt{\operatorname{Var}(X)}\sqrt{\operatorname{Var}(Y)}.$$
Divide by the right side: $|\rho|=\dfrac{|\operatorname{Cov}(X,Y)|}{\sigma_X\sigma_Y}\le 1$. The famous bound on correlation is just Cauchy–Schwarz between two centered vectors in $L^2$ — and equality means $Y$ is an exact linear function of $X$ (the vectors are parallel).

## Watch out

- You might think $L^p\subseteq L^r$ for $r\le p$ is a general fact, but it holds **only on finite-measure (here, probability) spaces**. On $\mathbb R$ with Lebesgue measure it *fails*: $f(x)=1/x$ on $[1,\infty)$ is in $L^2$ but not $L^1$. The nesting is a gift of total mass $1$ — Jensen needs a probability measure.
- You might think Jensen works for any nice $\varphi$, but it needs $\varphi$ **convex**; a **concave** $\varphi$ flips the inequality. E.g. $\log$ is concave, so $\mathbb E[\log X]\le\log\mathbb E[X]$ (this is the AM–GM gap). Bending the wrong way reverses the verdict — always check the curvature.
- You might think Chebyshev is telling you the *actual* tail probability, but it's usually far from tight (Example 1: $0.73$ vs. the true $0.33$). Its value is that it asks for nothing but a variance and never lies — use it for proofs and guarantees, not for accurate numbers.
- You might think Hölder pairs any two exponents, but they must be **conjugate**, $\tfrac1p+\tfrac1q=1$ (so $q=\tfrac{p}{p-1}$). Cauchy–Schwarz is only the symmetric $p=q=2$ case; using mismatched exponents breaks the bound.

## One-liner

> Markov/Chebyshev buy tail bounds with a moment, Jensen reads off convexity, Cauchy–Schwarz caps products — and because $\langle X,Y\rangle=\mathbb E[XY]$ makes $L^2$ a Hilbert space, probability inherits geometry.

## Problems

**P1 (🟢)** A factory's daily output $X$ has mean $\mathbb E[X]=200$ and standard deviation $10$. Using only this, give a guaranteed upper bound on $\mathbb P(|X-200|\ge 30)$. Which inequality, and why can't you do better without more information?

**P2 (🟡)** Use Jensen to prove $\mathbb E|X|\le\|X\|_2=\sqrt{\mathbb E[X^2]}$ (a special case of moment nesting), and separately prove $|\mathbb E[X]|\le\mathbb E|X|$. State the convex function you use in each.

**P3 (🔴, optional)** Let $X,Y\in L^2$. Prove the **parallelogram law** $\|X+Y\|_2^2+\|X-Y\|_2^2=2\|X\|_2^2+2\|Y\|_2^2$ directly from $\|Z\|_2^2=\mathbb E[Z^2]$. Then say in one line what this identity signals about $L^2$ that a general $L^p$ ($p\ne 2$) lacks.

<details>
<summary>Solutions</summary>

**P1** This is Chebyshev with $\operatorname{Var}(X)=\sigma^2=100$ and $k=30$:
$$\mathbb P(|X-200|\ge 30)\le\frac{100}{30^2}=\frac{100}{900}=\frac19\approx 0.111.$$
You can't sharpen it without knowing the *distribution*: Chebyshev is tight for a specific worst-case three-point distribution with this mean and variance (mass split to sit exactly at $\pm k$ and at the mean), so $\tfrac19$ is the best bound that holds for *all* distributions with $\sigma=10$. Mean and variance alone determine no more.

**P2** *First bound.* The function $\varphi(t)=t^2$ is convex. Apply Jensen to the random variable $|X|$:
$$\big(\mathbb E|X|\big)^2\le\mathbb E\big[|X|^2\big]=\mathbb E[X^2].$$
Take square roots (both sides $\ge 0$): $\mathbb E|X|\le\sqrt{\mathbb E[X^2]}=\|X\|_2$.

*Second bound.* The function $\varphi(t)=|t|$ is convex. Jensen gives $|\mathbb E[X]|=\big|\varphi(\mathbb E[X])\big|=\varphi(\mathbb E[X])\le\mathbb E[\varphi(X)]=\mathbb E|X|$. (Equivalently: $-|X|\le X\le|X|$ pointwise; take expectations to get $-\mathbb E|X|\le\mathbb E[X]\le\mathbb E|X|$.) Chaining the two: $|\mathbb E[X]|\le\mathbb E|X|\le\|X\|_2$.

**P3** Expand both squares using linearity of expectation:
$$\|X+Y\|_2^2=\mathbb E[(X+Y)^2]=\mathbb E[X^2]+2\mathbb E[XY]+\mathbb E[Y^2],$$
$$\|X-Y\|_2^2=\mathbb E[(X-Y)^2]=\mathbb E[X^2]-2\mathbb E[XY]+\mathbb E[Y^2].$$
Add: the $\pm 2\mathbb E[XY]$ cross terms cancel, leaving
$$\|X+Y\|_2^2+\|X-Y\|_2^2=2\mathbb E[X^2]+2\mathbb E[Y^2]=2\|X\|_2^2+2\|Y\|_2^2.$$
*What it signals:* the parallelogram law holds **iff** the norm comes from an inner product — so it certifies that $\|\cdot\|_2$ is a Hilbert-space (inner-product) norm, a structure $\|\cdot\|_p$ for $p\ne 2$ does **not** have. That inner product is exactly what makes projection — hence conditional expectation — available.

</details>

## Flashback

**From Lesson 2.3 (The Lebesgue integral and expectation):** Let $X$ have density $f(x)=3x^2$ on $[0,1]$ (and $0$ elsewhere). Using the change-of-variables formula $\mathbb E[g(X)]=\int g(x)f(x)\,dx$, compute $\mathbb E[X]$ and $\mathbb E[X^2]$, then read off $\operatorname{Var}(X)$ — and confirm it's nonnegative, consistent with Jensen.

<details>
<summary>Solution</summary>

First check normalization: $\int_0^1 3x^2\,dx=[x^3]_0^1=1$. ✓ Now
$$\mathbb E[X]=\int_0^1 x\cdot 3x^2\,dx=\int_0^1 3x^3\,dx=\Big[\tfrac34 x^4\Big]_0^1=\tfrac34,$$
$$\mathbb E[X^2]=\int_0^1 x^2\cdot 3x^2\,dx=\int_0^1 3x^4\,dx=\Big[\tfrac35 x^5\Big]_0^1=\tfrac35.$$
Then
$$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2=\tfrac35-\Big(\tfrac34\Big)^2=\tfrac35-\tfrac{9}{16}=\tfrac{48-45}{80}=\tfrac{3}{80}>0.$$
Nonnegative, as Jensen guarantees ($\mathbb E[X]^2=\tfrac{9}{16}\le\tfrac35=\mathbb E[X^2]$). $\blacksquare$

</details>

## Connections

- **Backward:** every inequality here rides on the monotonicity and linearity of the Lebesgue integral from [2.3](02-03-lebesgue-integral-expectation.md) — Markov is one pointwise comparison plus $\mathbb E$; Jensen is one tangent-line comparison plus $\mathbb E$. And "$L^p$ identifies a.s.-equal variables" is why the a.e.-negligible sets of [2.4](02-04-convergence-theorems.md) don't disturb any norm.
- **Forward:** Chebyshev is the whole engine of the weak law of large numbers in [4.2](04-02-laws-of-large-numbers.md) — bound $\mathbb P(|\bar X_n-\mu|\ge\varepsilon)$ by $\operatorname{Var}(\bar X_n)/\varepsilon^2\to 0$. The Hilbert-space structure of $L^2$ is what makes conditional expectation an **orthogonal projection** in [5.1](05-01-conditional-expectation.md), and $L^p$ convergence becomes one of the four modes in [4.1](../syllabus.md).
- **Sideways (statistics/econ):** $|\rho|\le 1$ (Example 2) is Cauchy–Schwarz between centered vectors — the same inequality behind least-squares regression, where fitting $Y$ by a linear function of $X$ is literally projecting onto a subspace of $L^2$. Convexity's $\mathbb E[\log X]\le\log\mathbb E[X]$ reappears as Jensen's gap in information theory and in expected-utility theory (risk aversion is concavity of utility).
