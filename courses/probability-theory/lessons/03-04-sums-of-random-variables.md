# Probability Theory · Lesson 3.4: Sums of independent random variables

> ⏱ ~15 min · Module 3: Independence and sums · Builds on: [3.1](03-01-independence.md), [3.2](03-02-product-measures-fubini.md) · Unlocks: Module 4 — [4.1](04-01-modes-of-convergence.md)

## Why this matters

Every limit theorem in this course is a statement about one object: the sum $S_n = X_1 + \cdots + X_n$. The weak and strong laws of large numbers say $S_n/n$ settles to a constant; the central limit theorem says $S_n$, recentered and rescaled, becomes normal. Before you can take *any* limit, you have to understand a single sum — how its **distribution**, its **mean**, and its **variance** each behave when you add two independent pieces. That is this lesson. Get it right and Module 4 is mostly bookkeeping; get it wrong and every theorem downstream is a mystery.

## The idea

Three questions, three different answers, and the whole subject hides in the gap between them.

**Distribution** is the hard one. If $X$ and $Y$ are independent and you want the law of $X + Y$, you must account for *every* way the total can land at a value $z$: any split $x + (z - x) = z$ contributes, weighted by how likely each piece is. Summing (integrating) over all splits is an operation with a name — **convolution** — and it smears the two distributions together into a new, usually smoother shape. Add two flat dice-like boxes and you get a tent.

**Mean** is the easy one. Averages just add: $\mathbb E[X + Y] = \mathbb E[X] + \mathbb E[Y]$, *always*, independent or not. No smearing, no conditions.

**Variance** is the one that pays the bills. Spreads add too — but **only when the pieces are independent** (more precisely, uncorrelated). Independence kills the cross-term, and $\operatorname{Var}(S_n) = \sum \operatorname{Var}(X_i)$. That single fact is why the standard deviation of a sum grows like $\sqrt n$, not $n$ — and that $\sqrt n$ is the exact scaling knob behind both the law of large numbers and the CLT.

## The formal version

Throughout, $X, Y$ are real random variables on $(\Omega, \mathcal F, \mathbb P)$ with laws (distributions) $\mu_X, \mu_Y$ — the pushforward measures from Module 2 — and CDFs $F_X(t) = \mathbb P(X \le t)$.

**Convolution (the law of a sum).** If $X$ and $Y$ are *independent*, the law of $X + Y$ is the **convolution** $\mu_X * \mu_Y$:

$$\mathbb P(X + Y \le z) \;=\; \int_{\mathbb R} F_X(z - y)\,d\mu_Y(y).$$

> In words: to have $X + Y \le z$, condition on $Y = y$; then $X$ must land at or below $z - y$, which happens with probability $F_X(z - y)$ — now average that over all $y$ using $Y$'s law.

If $X$ and $Y$ have densities $f_X, f_Y$, differentiating in $z$ gives the density form:

$$f_{X+Y}(z) \;=\; \int_{\mathbb R} f_X(z - x)\,f_Y(x)\,dx.$$

> In words: sum the joint density $f_X(z-x)f_Y(x)$ over every split $x + (z-x) = z$.

**Derivation (via Fubini on the product law).** This is where [3.2](03-02-product-measures-fubini.md) earns its keep. Independence means the joint law is the product measure $\mu_X \otimes \mu_Y$ on $\mathbb R^2$. The event $\{X + Y \le z\}$ is the region $A_z = \{(x,y) : x + y \le z\}$, so

$$\mathbb P(X+Y \le z) = (\mu_X \otimes \mu_Y)(A_z) = \iint_{\mathbb R^2} \mathbf 1_{\{x + y \le z\}}\,d\mu_X(x)\,d\mu_Y(y).$$

Fubini–Tonelli (legal: the integrand is nonnegative and measurable) lets us do the $x$-integral first, holding $y$ fixed. For fixed $y$, $\mathbf 1_{\{x+y\le z\}} = \mathbf 1_{\{x \le z - y\}}$, and integrating that against $\mu_X$ gives exactly $F_X(z - y)$. The outer $y$-integral against $\mu_Y$ leaves $\int F_X(z-y)\,d\mu_Y(y)$. That is the convolution formula — it is Fubini applied to a product measure, nothing more.

**Mean of a sum (no independence needed).** By linearity of the Lebesgue integral (expectation *is* an integral),

$$\mathbb E[X + Y] = \mathbb E[X] + \mathbb E[Y].$$

> In words: expectation is linear on every integrable pair — correlation is irrelevant.

**Variance of a sum.** Write $\operatorname{Cov}(X,Y) = \mathbb E[(X - \mathbb E X)(Y - \mathbb E Y)]$. Then

$$\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X,Y).$$

If $X, Y$ are independent then $\operatorname{Cov}(X,Y) = 0$ (the expectation factors: $\mathbb E[XY] = \mathbb E X\,\mathbb E Y$), so the cross-term vanishes and $\operatorname{Var}(X+Y) = \operatorname{Var}(X) + \operatorname{Var}(Y)$.

**Theorem (variance of a sum of independent variables).** *If $X_1, \dots, X_n$ are pairwise independent (uncorrelated is enough) with finite variances, then*

$$\operatorname{Var}\!\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n \operatorname{Var}(X_i).$$

*Proof.* Covariance is **bilinear** and symmetric — it is an inner product on centered, square-integrable variables. Center each variable, $\tilde X_i = X_i - \mathbb E X_i$; centering changes no variance or covariance. Then

$$\operatorname{Var}\!\left(\sum_i X_i\right) = \operatorname{Cov}\!\left(\sum_i \tilde X_i,\ \sum_j \tilde X_j\right) = \sum_{i}\sum_{j} \operatorname{Cov}(\tilde X_i, \tilde X_j),$$

expanding by bilinearity. Split the double sum into diagonal ($i = j$) and off-diagonal ($i \ne j$) terms:

$$= \sum_{i} \operatorname{Cov}(\tilde X_i, \tilde X_i) + \sum_{i \ne j} \operatorname{Cov}(\tilde X_i, \tilde X_j) = \sum_i \operatorname{Var}(X_i) + \sum_{i \ne j} \operatorname{Cov}(X_i, X_j).$$

By independence every off-diagonal covariance is $0$, leaving $\sum_i \operatorname{Var}(X_i)$. $\blacksquare$

> In words: variance of a sum is the sum of all the pairwise covariances; independence zeroes out everything off the diagonal, and only the individual variances survive.

## Picture

The cleanest case: two independent Uniform$[0,1]$ variables. Each density $f_X = f_Y$ is a flat box of height $1$ on $[0,1]$. The convolution $f_{X+Y}(z) = \int f_X(z-x)f_Y(x)\,dx$ measures the **overlap length** of the box $[0,1]$ with the sliding, reflected box $[z-1, z]$. As $z$ runs from $0$ to $2$, the boxes slide into and out of registration; the overlap grows linearly to a maximum at $z = 1$ (full overlap, length $1$) and shrinks back — a triangular "tent."

![Convolution of two Uniform[0,1] boxes: the overlap length of a fixed box and a sliding box traces out the triangular density on [0,2], peaking at z=1](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the sum of two independent Uniforms is triangular).** Let $X, Y$ be independent, each Uniform$[0,1]$, so $f_X(x) = \mathbf 1_{[0,1]}(x)$ and likewise $f_Y$. Then

$$f_{X+Y}(z) = \int_{\mathbb R} f_X(z - x)\,f_Y(x)\,dx = \int_0^1 \mathbf 1_{[0,1]}(z - x)\,dx.$$

The indicator $\mathbf 1_{[0,1]}(z-x)$ is $1$ exactly when $0 \le z - x \le 1$, i.e. $z - 1 \le x \le z$. Intersect with the range of integration $x \in [0,1]$: the overlap is $x \in [\max(0, z-1),\ \min(1, z)]$, of length $\min(1,z) - \max(0, z-1)$. Splitting into cases,

$$f_{X+Y}(z) = \begin{cases} z, & 0 \le z \le 1,\\[2pt] 2 - z, & 1 \le z \le 2,\\[2pt] 0, & \text{otherwise.} \end{cases}$$

The tent of the Picture. Sanity checks: it is nonnegative, its total area is $\tfrac12(2)(1) = 1$, and by symmetry its mean is $1 = \tfrac12 + \tfrac12 = \mathbb E X + \mathbb E Y$. ✓ Two flat, featureless boxes convolve into a peaked shape — a first hint of the smoothing that, iterated, produces the bell curve.

**Example 2 (why you'd care — the $\sqrt n$ scaling that runs Module 4).** Let $X_1, \dots, X_n$ be i.i.d. with mean $\mu$ and variance $\sigma^2 < \infty$, and set $S_n = \sum_i X_i$ and the sample mean $\bar X_n = S_n / n$. Then, using linearity for the means and the theorem for the variances:

$$\mathbb E[S_n] = n\mu, \qquad \operatorname{Var}(S_n) = n\sigma^2, \qquad \operatorname{sd}(S_n) = \sigma\sqrt{n};$$

$$\mathbb E[\bar X_n] = \mu, \qquad \operatorname{Var}(\bar X_n) = \frac{1}{n^2}\operatorname{Var}(S_n) = \frac{\sigma^2}{n} \xrightarrow{n\to\infty} 0.$$

Read those two lines as a preview of everything ahead. The sample mean $\bar X_n$ keeps its aim ($\mathbb E = \mu$) while its spread collapses to zero — so $\bar X_n$ is squeezed onto $\mu$: that is the **weak law of large numbers** ([4.2](04-02-laws-of-large-numbers.md)), which Chebyshev turns into a one-line proof from exactly these two facts. Meanwhile the raw sum's spread $\sigma\sqrt n$ *grows* — so to keep a sum interesting you divide by $\sqrt n$, not $n$: the normalization $S_n / \sqrt n$ has a stable, nonzero variance $\sigma^2$, and that is the correct scaling for the **central limit theorem** ([4.5](04-05-central-limit-theorem.md)). The whole module is built on the arithmetic in this box.

**Stability — families closed under addition.** Convolution usually changes the shape (boxes became a tent). A few special families are *stable*: the sum stays in the family, only the parameters move.

- **Normal:** $N(\mu_1, \sigma_1^2) + N(\mu_2, \sigma_2^2) = N(\mu_1 + \mu_2,\ \sigma_1^2 + \sigma_2^2)$ for independent summands — means add (always) and variances add (independence), and normality is preserved.
- **Poisson:** independent $\text{Pois}(\lambda_1) + \text{Pois}(\lambda_2) = \text{Pois}(\lambda_1 + \lambda_2)$ — the rates add.
- **Binomial from Bernoulli:** a sum of $n$ independent $\text{Bernoulli}(p)$ variables is $\text{Binomial}(n, p)$; more generally $\text{Bin}(m,p) + \text{Bin}(n,p) = \text{Bin}(m+n, p)$ (same $p$).

Each is a convolution identity you *could* grind out by hand, but there's a better tool coming: characteristic functions ([4.3](04-03-characteristic-functions.md)) turn convolution into ordinary multiplication, and all three collapse to one-line checks.

## Watch out

- You might think variances always add. They do not — **means** add unconditionally, but $\operatorname{Var}(X+Y) = \operatorname{Var} X + \operatorname{Var} Y + 2\operatorname{Cov}(X,Y)$, and the cross-term vanishes only under independence (or, weaker, zero correlation). Add a variable to its own negative: $\operatorname{Var}(X + (-X)) = \operatorname{Var}(0) = 0$, nowhere near $2\operatorname{Var}(X)$.
- You might think you can convolve any two densities to get the sum's law. Only under **independence** does the joint law factor as a product measure — that factoring is precisely what made Fubini produce the convolution. For dependent variables the law of $X+Y$ needs the full joint distribution, not $f_X$ and $f_Y$ alone.
- You might read $\operatorname{sd}(S_n) = \sigma\sqrt n$ as "the sum spreads like $n$." It spreads like $\sqrt n$ — *slower* than the mean $n\mu$ grows. That gap is the entire reason $S_n/n \to \mu$ becomes deterministic while $S_n/\sqrt n$ stays random and Gaussian. Sub-linear noise is the mathematical content of "averaging works."
- You might expect every family to be stable. Almost none are — Uniforms became a tent, not a Uniform. Closure under independent addition is special: the **normal**, **Poisson**, and (a cautionary case) the heavy-tailed **Cauchy** are stable; the average of $n$ i.i.d. Cauchys has the *same* Cauchy law as one of them, so the law of large numbers simply fails there. Stability is the exception, and finite variance is what buys you the CLT.

## One-liner

> Adding independent randomness convolves the distributions, always adds the means, and — only because independence kills the covariance — adds the variances, so a sum's noise grows like $\sqrt n$: the single fact that powers every limit theorem.

## Problems

**P1 (🟢)** Let $X \sim N(1, 4)$ and $Y \sim N(3, 9)$ be independent (variances $4$ and $9$). Write down the distribution of $X + Y$, and separately the distribution of $X - Y$. Give the mean and variance in each case, and say in one sentence why the variance is the *same* for the sum and the difference.

**P2 (🟡)** A fair coin is flipped $n$ times; let $S_n$ be the number of heads. Using $S_n = \sum_{i=1}^n X_i$ with $X_i \sim \text{Bernoulli}(1/2)$ independent, compute $\mathbb E[S_n]$ and $\operatorname{Var}(S_n)$ from linearity and the variance theorem — *without* invoking the binomial-variance formula. Then state $\operatorname{Var}(S_n / n)$ and describe its $n \to \infty$ behavior.

**P3 (🔴, optional)** Let $X, Y$ be independent, both $\text{Exponential}(\lambda)$ (density $\lambda e^{-\lambda t}$ for $t \ge 0$). Compute the density of $Z = X + Y$ by convolution, and identify the resulting distribution. (This is the waiting time for the *second* event in a Poisson process.)

<details>
<summary>Solutions</summary>

**P1** Sums of independent normals are normal, with means and variances adding:

$$X + Y \sim N(1 + 3,\ 4 + 9) = N(4,\ 13).$$

For the difference, write $X - Y = X + (-Y)$. Negation shifts the mean's sign but **squares out of the variance**: $\operatorname{Var}(-Y) = (-1)^2 \operatorname{Var}(Y) = 9$, and $-Y \sim N(-3, 9)$. So

$$X - Y \sim N(1 - 3,\ 4 + 9) = N(-2,\ 13).$$

Same variance $13$ for sum and difference because variance ignores the sign of a summand — $\operatorname{Var}(cX) = c^2\operatorname{Var}(X)$ — so flipping $Y$ to $-Y$ leaves its variance, and hence the total, unchanged. (Independence is what lets us add the variances at all; without it a $2\operatorname{Cov}(X,Y)$ term would flip sign between sum and difference and break the symmetry.)

**P2** Each $X_i \sim \text{Bernoulli}(1/2)$ has $\mathbb E[X_i] = 1/2$ and $\operatorname{Var}(X_i) = \mathbb E[X_i^2] - (\mathbb E X_i)^2 = \tfrac12 - \tfrac14 = \tfrac14$ (using $X_i^2 = X_i$ for a $0/1$ variable). By linearity and independence:

$$\mathbb E[S_n] = \sum_{i=1}^n \tfrac12 = \frac n2, \qquad \operatorname{Var}(S_n) = \sum_{i=1}^n \tfrac14 = \frac n4.$$

These match $\text{Binomial}(n, 1/2)$ with $np = n/2$ and $np(1-p) = n/4$ — but we got them from the sum structure, not a memorized formula. For the sample proportion,

$$\operatorname{Var}\!\left(\frac{S_n}{n}\right) = \frac{1}{n^2}\cdot\frac n4 = \frac{1}{4n} \xrightarrow{n\to\infty} 0.$$

The fraction of heads has fixed mean $1/2$ and variance shrinking to $0$, so it concentrates on $1/2$ — the weak law of large numbers for coin flips, and the precise sense in which a fair coin "comes up heads half the time."

**P3** With both densities supported on $[0,\infty)$, the convolution's integrand $f_X(z-x)f_Y(x)$ is nonzero only when $x \ge 0$ **and** $z - x \ge 0$, i.e. $0 \le x \le z$ (and $z \ge 0$). For $z \ge 0$:

$$f_Z(z) = \int_0^z \lambda e^{-\lambda(z-x)}\,\lambda e^{-\lambda x}\,dx = \lambda^2 e^{-\lambda z}\int_0^z e^{-\lambda x}e^{\lambda x}\,dx = \lambda^2 e^{-\lambda z}\int_0^z 1\,dx = \lambda^2 z\, e^{-\lambda z}.$$

So $f_Z(z) = \lambda^2 z\,e^{-\lambda z}$ on $[0,\infty)$ — a $\text{Gamma}(2, \lambda)$ (equivalently Erlang-2) density. Check via the additive rules: $\mathbb E[Z] = \mathbb E X + \mathbb E Y = 1/\lambda + 1/\lambda = 2/\lambda$, and by independence $\operatorname{Var}(Z) = 1/\lambda^2 + 1/\lambda^2 = 2/\lambda^2$, both matching $\text{Gamma}(2,\lambda)$. Interpretation: if events arrive as a Poisson process with rate $\lambda$, then $X$ and $Y$ are consecutive inter-arrival gaps and $Z = X + Y$ is the wait for the second arrival — exponentials convolve into Gammas, and the shape parameter counts the events.

</details>

## Flashback

**From Lesson 3.2 (Product measures and Fubini):** Let $X$ and $Y$ be independent with $X \sim \text{Uniform}[0,2]$ and $Y \sim \text{Uniform}[0,3]$. Using Fubini on the product law, compute $\mathbb E[XY]$ directly as a double integral, and then confirm your answer against the independence shortcut $\mathbb E[XY] = \mathbb E[X]\,\mathbb E[Y]$.

<details>
<summary>Solution</summary>

Independence makes the joint density the product of the marginals: $f_{X,Y}(x,y) = \tfrac12 \mathbf 1_{[0,2]}(x)\cdot \tfrac13 \mathbf 1_{[0,3]}(y) = \tfrac16$ on the rectangle $[0,2]\times[0,3]$. The integrand $xy$ is nonnegative, so Fubini–Tonelli lets the double integral separate into a product of single integrals:

$$\mathbb E[XY] = \iint xy\, f_{X,Y}(x,y)\,dx\,dy = \frac16\int_0^2\!\!\int_0^3 xy\,dy\,dx = \frac16\left(\int_0^2 x\,dx\right)\!\left(\int_0^3 y\,dy\right) = \frac16\cdot 2 \cdot \frac92 = \frac{3}{2}.$$

The shortcut agrees: $\mathbb E[X] = 1$ (midpoint of $[0,2]$), $\mathbb E[Y] = 3/2$ (midpoint of $[0,3]$), so $\mathbb E[X]\mathbb E[Y] = 1\cdot\tfrac32 = \tfrac32$. ✓ The factoring of $\mathbb E[XY]$ into $\mathbb E[X]\,\mathbb E[Y]$ is Fubini on a product measure — the very fact that made $\operatorname{Cov}(X,Y) = 0$ and let variances add in this lesson. $\blacksquare$

</details>

## Connections

- **Backward:** the convolution formula is [3.2](03-02-product-measures-fubini.md)'s Fubini theorem applied to the product law that [3.1](03-01-independence.md) guarantees for independent variables — no new machinery, just the product measure integrated over the half-plane $\{x + y \le z\}$.
- **Forward:** $\operatorname{Var}(S_n) = n\sigma^2$ and $\operatorname{Var}(\bar X_n) = \sigma^2/n$ are the engine of the laws of large numbers ([4.2](04-02-laws-of-large-numbers.md)) via Chebyshev, and the $\sqrt n$ scaling fixes the normalization for the central limit theorem ([4.5](04-05-central-limit-theorem.md)). Characteristic functions ([4.3](04-03-characteristic-functions.md)) will replace convolution with multiplication and make the stability identities one-liners; modes of convergence ([4.1](04-01-modes-of-convergence.md)) give the language for "$S_n/n$ settles down."
- **Sideways (economics/finance):** the $\sqrt n$ law is portfolio diversification made precise — pooling $n$ independent risks makes the *average* loss's standard deviation shrink like $1/\sqrt n$, which is why insurers and index funds work; and the Cauchy cautionary note is why fat-tailed asset returns break naive diversification arguments.
