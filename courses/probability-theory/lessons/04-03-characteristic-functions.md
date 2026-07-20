# Probability Theory · Lesson 4.3: Characteristic functions

> ⏱ ~15 min · Module 4: Convergence and the limit theorems · Builds on: [3.4 Sums of independent random variables](03-04-sums-of-random-variables.md), [2.3 The Lebesgue integral and expectation](02-03-lebesgue-integral-expectation.md) · Unlocks: [4.4 Weak convergence](04-04-weak-convergence.md)

## Why this matters

In [3.4](03-04-sums-of-random-variables.md) you added independent random variables and paid the price: the density of $X+Y$ is a **convolution** $\int f_X(x)f_Y(s-x)\,dx$, an integral that gets uglier every time you add another term. Yet the whole endgame of this course — the laws of large numbers, and above all the Central Limit Theorem — is about what happens to sums $X_1+\dots+X_n$ as $n\to\infty$. We need a device that turns "add independent variables" into something you can iterate $n$ times without drowning. The characteristic function is that device: it converts convolution into ordinary multiplication, it pins down the distribution uniquely, and — the deep fact — its pointwise convergence *is* convergence in distribution. It is the single tool that makes the CLT provable.

## The idea

Think of what logarithms did for multiplication: a hard operation (multiply) became an easy one (add) in a transformed world, and you could always transform back. The characteristic function does the mirror image for probability. Adding independent randomness is hard (convolution); but in the transformed world it becomes **multiplication**, which you can do in your sleep. Transform your distribution, multiply, transform back — the convolution slog evaporates.

The transform is an average of a little spinning arrow. For each frequency $t$, attach to the outcome $X$ the unit complex number $e^{itX}$ — a point on the unit circle at angle $tX$ — and average it over all the randomness. That average, one complex number per $t$, is $\varphi_X(t)$. Because you are averaging arrows that all have length $1$, the result can never have length more than $1$; and because independent randomness makes the arrows of $X$ and $Y$ spin *independently*, the average of their product factors into the product of their averages. That factorization is the whole game.

## The formal version

**Definition (characteristic function).** For a real random variable $X$, its **characteristic function** is the function $\varphi_X:\mathbb R\to\mathbb C$,

$$\varphi_X(t) \;=\; \mathbb E\!\left[e^{itX}\right] \;=\; \mathbb E[\cos tX] \;+\; i\,\mathbb E[\sin tX], \qquad t\in\mathbb R,$$

where $i=\sqrt{-1}$ and $e^{i\theta}=\cos\theta+i\sin\theta$ (Euler's formula; the complex exponential $e^{itx}$ and the "one number per frequency" viewpoint are the language of `complex-analysis`). Equivalently it is the **Fourier transform of the law** $\mu_X$ (the pushforward measure of [2.2](02-02-distributions-and-cdfs.md)): $\varphi_X(t)=\int_{\mathbb R} e^{itx}\,d\mu_X(x)$, computed as the Lebesgue integral of [2.3](02-03-lebesgue-integral-expectation.md).

> In words: for each frequency $t$, spin the outcome onto the unit circle at angle $tX$ and take the average arrow. $\varphi_X$ records the answer for every frequency at once.

**It always exists.** Unlike the moment generating function $M_X(t)=\mathbb E[e^{tX}]$, which can be $+\infty$, the characteristic function is defined for *every* $X$ and every $t$: since $|e^{itX}|=|\cos tX+i\sin tX|=1$, the integrand is bounded, and a bounded measurable function is integrable on a probability space ($\mathbb E|e^{itX}|=1<\infty$). No moment assumptions, no tail conditions — it is always there.

**Basic properties.** For any $X$ and real $a,b,t$:

1. $\varphi_X(0)=\mathbb E[e^{0}]=\mathbb E[1]=1$.
2. $|\varphi_X(t)|=|\mathbb E[e^{itX}]|\le \mathbb E|e^{itX}|=1$. (Jensen / triangle inequality for integrals from [2.5](02-05-lp-spaces-inequalities.md): the size of an average is at most the average size.)
3. $\varphi_X(-t)=\mathbb E[e^{-itX}]=\overline{\mathbb E[e^{itX}]}=\overline{\varphi_X(t)}$ (conjugate symmetry, since $\overline{e^{itX}}=e^{-itX}$).
4. $\varphi_{aX+b}(t)=\mathbb E[e^{it(aX+b)}]=e^{itb}\,\mathbb E[e^{i(at)X}]=e^{itb}\varphi_X(at)$ — the rule that rescales a variable's transform.
5. $\varphi_X$ is **uniformly continuous** on $\mathbb R$. *Proof:* for any $t,h$,
$$|\varphi_X(t+h)-\varphi_X(t)| = \big|\mathbb E\big[e^{itX}(e^{ihX}-1)\big]\big| \le \mathbb E\big|e^{ihX}-1\big|.$$
The right side does not depend on $t$; and $|e^{ihX}-1|\le 2$ while $e^{ihX}-1\to 0$ pointwise as $h\to0$, so by dominated convergence ([2.4](02-04-convergence-theorems.md), dominating function $2$) $\mathbb E|e^{ihX}-1|\to 0$. A single bound working for all $t$ is exactly uniform continuity. $\blacksquare$

> In words: $\varphi$ starts at $1$, never leaves the unit disk, is a mirror-conjugate in $\pm t$, transforms simply under shift-and-scale, and is smooth with no jumps anywhere.

**The key property — independence turns convolution into a product.** If $X$ and $Y$ are **independent**, then

$$\boxed{\;\varphi_{X+Y}(t)=\varphi_X(t)\,\varphi_Y(t)\;}$$

*Proof:* $e^{it(X+Y)}=e^{itX}e^{itY}$, and independence lets expectation factor over the (measurable functions of the) independent variables (independence via factorization, Lesson 3.1): $\varphi_{X+Y}(t)=\mathbb E[e^{itX}e^{itY}]=\mathbb E[e^{itX}]\,\mathbb E[e^{itY}]=\varphi_X(t)\varphi_Y(t)$. $\blacksquare$

> In words: the convolution of [3.4](03-04-sums-of-random-variables.md) becomes plain multiplication. Adding independent randomness is multiplying transforms.

Iterating: if $X_1,\dots,X_n$ are **i.i.d.** with common characteristic function $\varphi$, the sum $S_n=X_1+\dots+X_n$ has

$$\varphi_{S_n}(t)=\big(\varphi(t)\big)^{n}.$$

Raising *one* function to the $n$th power replaces $n$-fold convolution. This is the engine the CLT (Lesson 4.5) will run.

**Uniqueness and inversion (stated, and used).** The transform loses nothing:

> **Uniqueness theorem.** $\varphi_X=\varphi_Y$ (as functions on $\mathbb R$) $\iff$ $X$ and $Y$ have the same law $\mu_X=\mu_Y$.

So a distribution is *determined* by its characteristic function. The proof is the **inversion formula**: for any $a<b$ that are continuity points of the CDF,

$$\mathbb P(a<X<b)=\lim_{T\to\infty}\frac{1}{2\pi}\int_{-T}^{T}\frac{e^{-ita}-e^{-itb}}{it}\,\varphi_X(t)\,dt,$$

and when $\varphi_X\in L^1(\mathbb R)$ (absolutely integrable), $X$ has a density recovered by the clean Fourier inversion

$$f_X(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty} e^{-itx}\,\varphi_X(t)\,dt.$$

> In words: the characteristic function is a complete fingerprint — you can always read the probabilities (or the density) back out of it. To identify a distribution, it suffices to recognize its $\varphi$.

**Moments from derivatives.** Smoothness of $\varphi$ at $0$ encodes moments. If $\mathbb E|X|^k<\infty$, then $\varphi_X$ is $k$-times differentiable and

$$\varphi_X^{(k)}(0)=i^k\,\mathbb E[X^k].$$

*Why:* differentiating under the integral pulls down a factor $iX$ each time, $\varphi^{(k)}(t)=\mathbb E[(iX)^k e^{itX}]$ (legal because $|X^k e^{itX}|=|X|^k$ is integrable), then set $t=0$. Taylor-expanding to second order (all the CLT needs),

$$\varphi_X(t)=1+it\,\mathbb E[X]-\tfrac{t^2}{2}\,\mathbb E[X^2]+o(t^2)\qquad(t\to0).$$

> In words: the first two derivatives of $\varphi$ at the origin hand you the mean and the second moment — the transform carries the moments in its curvature at $0$.

**Lévy's continuity theorem (stated — the bridge to Lessons 4.4/4.5).** This is why $\varphi$ owns the limit theorems.

> **Lévy continuity theorem.** Let $X_n$ have characteristic functions $\varphi_{X_n}$.
> - If $X_n\xrightarrow{d}X$ (convergence in distribution, Lesson 4.1), then $\varphi_{X_n}(t)\to\varphi_X(t)$ for every $t\in\mathbb R$.
> - Conversely, if $\varphi_{X_n}(t)\to\psi(t)$ for every $t$ and $\psi$ is continuous at $0$, then $\psi=\varphi_X$ for some random variable $X$ and $X_n\xrightarrow{d}X$.

> In words: convergence in distribution and pointwise convergence of characteristic functions are the *same thing* (given continuity of the limit at $0$). To prove a sequence of distributions converges, prove their $\varphi$'s converge — one number per $t$ at a time.

## Picture

![The map t ↦ φ_X(t) = E[e^{itX}] traced in the complex plane, starting at φ(0)=1 on the boundary of the unit disk and spiralling toward 0](assets/04-03-fig1.svg)

The characteristic function is a *curve in the complex plane*, one point per frequency $t$. It launches from $\varphi(0)=1$ on the boundary, and because $|\varphi(t)|\le 1$ it can never leave the unit disk. For a nondegenerate (non-constant) $X$ the arrow shrinks as $|t|$ grows — for a distribution with a density it spirals in toward $0$ (Riemann–Lebesgue). Reading probabilities back out of this curve is exactly the inversion formula.

## Worked examples

**Example 1 (mechanical — Bernoulli).** Let $X$ take value $1$ with probability $p$ and $0$ with probability $1-p$. Directly from the definition (expectation of a two-point distribution):

$$\varphi_X(t)=\mathbb E[e^{itX}]=(1-p)\,e^{it\cdot 0}+p\,e^{it\cdot 1}=(1-p)+p\,e^{it}.$$

Sanity checks: $\varphi_X(0)=(1-p)+p=1$ ✓, and $|\varphi_X(t)|\le(1-p)+p=1$ ✓. As a bonus, the sum of $n$ independent $\mathrm{Bernoulli}(p)$'s — a $\mathrm{Binomial}(n,p)$ — has characteristic function $\big((1-p)+pe^{it}\big)^{n}$ *for free*, by the key property. The convolution you would have done in [3.4](03-04-sums-of-random-variables.md) to build the binomial is now a single exponentiation.

**Example 2 (why you'd care — the normal, and sum-of-normals in one line).** Let $Z\sim N(0,1)$ (standard normal, density $\tfrac{1}{\sqrt{2\pi}}e^{-x^2/2}$). Completing the square in the Gaussian integral gives the landmark

$$\varphi_Z(t)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty} e^{itx}e^{-x^2/2}\,dx=e^{-t^2/2}.$$

Now use property (4) on $X=\mu+\sigma Z\sim N(\mu,\sigma^2)$ (shift by $\mu$, scale by $\sigma$):

$$\varphi_X(t)=e^{i\mu t}\,\varphi_Z(\sigma t)=e^{i\mu t}\,e^{-(\sigma t)^2/2}=\exp\!\Big(i\mu t-\tfrac{\sigma^2 t^2}{2}\Big).$$

**Sum of independent normals is normal — one line.** Let $X\sim N(\mu_1,\sigma_1^2)$ and $Y\sim N(\mu_2,\sigma_2^2)$ be independent. Multiply their characteristic functions:

$$\varphi_{X+Y}(t)=\varphi_X(t)\varphi_Y(t)=\exp\!\Big(i\mu_1 t-\tfrac{\sigma_1^2t^2}{2}\Big)\exp\!\Big(i\mu_2 t-\tfrac{\sigma_2^2t^2}{2}\Big)=\exp\!\Big(i(\mu_1+\mu_2)t-\tfrac{(\sigma_1^2+\sigma_2^2)t^2}{2}\Big).$$

By uniqueness, this is exactly the characteristic function of $N(\mu_1+\mu_2,\ \sigma_1^2+\sigma_2^2)$ — so $X+Y\sim N(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2)$. Compare this to the convolution integral of two Gaussian densities you would otherwise grind through: multiply, read off the answer, done. This is the payoff advertised at the top.

## Watch out

- You might think you need $\mathbb E[e^{tX}]$ (the MGF) and worry it might be infinite. **The characteristic function always exists** — $|e^{itX}|=1$ makes it integrable no matter how heavy the tails (a Cauchy random variable has no MGF at all but $\varphi(t)=e^{-|t|}$ is perfectly fine). Use $\varphi$, not $M$, when you want guarantees.
- You might think $|\varphi(t)|=1$ for many $t$. For a **nondegenerate** $X$, $|\varphi(t)|<1$ for all $t\ne0$ small enough; equality $|\varphi(t)|=1$ forces the arrows $e^{itX}$ to point the same way almost surely, i.e. $X$ lattice-valued or constant. The generic picture is the arrow strictly *inside* the disk once $t\ne0$.
- You might think Lévy's theorem gives you a.s. or in-probability convergence. It gives **convergence in distribution only** — the weakest mode (Lesson 4.1). Pointwise convergence of $\varphi_n$ says the *laws* line up, nothing about the variables converging on a common sample space.
- You might think differentiability of $\varphi$ is automatic. $\varphi$ is $k$-times differentiable at $0$ **iff** the $k$th moment exists (for even $k$); a distribution with no mean, like Cauchy, has a $\varphi$ with a corner at $0$ ($e^{-|t|}$ is not differentiable there). Smoothness at the origin ↔ existence of moments.

## One-liner

> The characteristic function $\varphi_X(t)=\mathbb E[e^{itX}]$ always exists, lives in the unit disk, determines the law uniquely, turns independent sums into products $\varphi^n$, and converges pointwise exactly when distributions do — which is why it, and it alone, proves the CLT.

## Problems

**P1 (🟢)** Let $X$ be uniform on $\{-1,+1\}$ (each with probability $\tfrac12$). Compute $\varphi_X(t)$, verify $\varphi_X(0)=1$ and $|\varphi_X(t)|\le1$, and say for which $t$ equality $|\varphi_X(t)|=1$ holds — connecting your answer to the "nondegenerate" watch-out.

**P2 (🟡)** Let $X\sim N(\mu,\sigma^2)$, so $\varphi_X(t)=\exp(i\mu t-\sigma^2t^2/2)$. Using $\varphi'(0)=i\,\mathbb E[X]$ and $\varphi''(0)=i^2\,\mathbb E[X^2]=-\mathbb E[X^2]$, recover $\mathbb E[X]=\mu$ and $\mathrm{Var}(X)=\sigma^2$ from the characteristic function alone.

**P3 (🔴, optional)** Let $S_n=X_1+\dots+X_n$ be a sum of $n$ i.i.d. $\mathrm{Bernoulli}(p)$ variables (a $\mathrm{Binomial}(n,p)$), and let $T_n=\tfrac{S_n}{n}$ be the sample mean. Compute $\varphi_{T_n}(t)$, then show $\varphi_{T_n}(t)\to e^{itp}$ pointwise as $n\to\infty$. Identify the limiting distribution using uniqueness, and name which theorem of this course you have just re-proved via Lévy continuity.

<details>
<summary>Solutions</summary>

**P1** By definition, $\varphi_X(t)=\tfrac12 e^{it(-1)}+\tfrac12 e^{it(1)}=\tfrac12(e^{-it}+e^{it})=\cos t$ (Euler: $e^{it}+e^{-it}=2\cos t$). Then $\varphi_X(0)=\cos 0=1$ ✓, and $|\cos t|\le1$ ✓. Equality $|\cos t|=1$ holds exactly at $t=k\pi$, $k\in\mathbb Z$. This does *not* contradict the watch-out: $X$ is **lattice-valued** (supported on the integer lattice, spacing $2$), and for lattice variables $|\varphi|$ returns to $1$ periodically — the "strictly inside the disk for all $t\ne0$" statement is for the non-lattice case. Since $\varphi_X$ is real, $X$ is symmetric about $0$.

**P2** Differentiate $\varphi_X(t)=\exp(i\mu t-\sigma^2 t^2/2)$. First derivative (chain rule, derivative of the exponent is $i\mu-\sigma^2 t$):
$$\varphi_X'(t)=(i\mu-\sigma^2 t)\exp(i\mu t-\sigma^2 t^2/2),\qquad \varphi_X'(0)=(i\mu)\cdot 1=i\mu.$$
Since $\varphi'(0)=i\,\mathbb E[X]$, we read $\mathbb E[X]=\mu$. Second derivative (product rule):
$$\varphi_X''(t)=\Big[(i\mu-\sigma^2 t)^2-\sigma^2\Big]\exp(i\mu t-\sigma^2 t^2/2),\qquad \varphi_X''(0)=(i\mu)^2-\sigma^2=-\mu^2-\sigma^2.$$
Since $\varphi''(0)=-\mathbb E[X^2]$, we get $\mathbb E[X^2]=\mu^2+\sigma^2$, hence $\mathrm{Var}(X)=\mathbb E[X^2]-(\mathbb E[X])^2=(\mu^2+\sigma^2)-\mu^2=\sigma^2$. ✓ The characteristic function's curvature at $0$ delivered both moments with no integration.

**P3** From Example 1, each $X_j$ has $\varphi(t)=(1-p)+pe^{it}$, so $\varphi_{S_n}(t)=\big((1-p)+pe^{it}\big)^{n}$. By the scaling rule (4) with $a=1/n$, $b=0$:
$$\varphi_{T_n}(t)=\varphi_{S_n}\!\big(\tfrac{t}{n}\big)=\Big((1-p)+p\,e^{it/n}\Big)^{n}.$$
Expand the inside for large $n$: $e^{it/n}=1+\tfrac{it}{n}+o\!\big(\tfrac1n\big)$, so
$$(1-p)+p\,e^{it/n}=1+p\Big(\tfrac{it}{n}+o\!\big(\tfrac1n\big)\Big)=1+\tfrac{itp}{n}+o\!\big(\tfrac1n\big).$$
Therefore $\varphi_{T_n}(t)=\big(1+\tfrac{itp}{n}+o(\tfrac1n)\big)^{n}\to e^{itp}$ as $n\to\infty$ (the standard $(1+z/n)^n\to e^{z}$ limit, with $z=itp$). The limit $e^{itp}$ is continuous at $0$, so Lévy's continuity theorem applies. And $e^{itp}=\varphi_c(t)$ for the **constant** $c=p$ (a point mass at $p$: $\mathbb E[e^{it\cdot p}]=e^{itp}$). By uniqueness, $T_n\xrightarrow{d}p$. Convergence in distribution to a constant is the same as convergence in probability to that constant — so you have just re-proved the **Weak Law of Large Numbers** (Lesson 4.2) for Bernoulli variables, via characteristic functions. This is precisely the two-ways-to-prove-the-WLLN move of Boss Problem 4.

</details>

## Flashback

**From Lesson 3.4 (Sums of independent random variables):** Let $X$ and $Y$ be **independent** with $\mathbb E[X]=2,\ \mathrm{Var}(X)=3$ and $\mathbb E[Y]=-1,\ \mathrm{Var}(Y)=5$. Compute $\mathbb E[X+Y]$ and $\mathrm{Var}(X+Y)$. Then compute $\mathrm{Var}(2X-Y)$. Which step *needs* independence and which does not?

<details>
<summary>Solution</summary>

Expectation is linear **always** (independence not needed): $\mathbb E[X+Y]=\mathbb E[X]+\mathbb E[Y]=2+(-1)=1$.

Variance adds for **independent** (indeed just uncorrelated) variables — this is where independence is used, since in general $\mathrm{Var}(X+Y)=\mathrm{Var}(X)+\mathrm{Var}(Y)+2\,\mathrm{Cov}(X,Y)$ and independence kills the covariance term:
$$\mathrm{Var}(X+Y)=\mathrm{Var}(X)+\mathrm{Var}(Y)=3+5=8.$$
For $2X-Y$, pull constants out with the square (variance scales by the square of a constant, and $\mathrm{Var}(-Y)=\mathrm{Var}(Y)$):
$$\mathrm{Var}(2X-Y)=2^2\,\mathrm{Var}(X)+(-1)^2\,\mathrm{Var}(Y)=4\cdot 3+1\cdot 5=17,$$
again using independence to drop the cross term. Linearity of the mean is unconditional; additivity of variance is the independence-powered fact — the same $\mathrm{Var}(\sum X_i)=\sum\mathrm{Var}(X_i)$ that Boss Problem 3 asks you to prove from the definition, and that this lesson repackages as $\varphi_{X+Y}=\varphi_X\varphi_Y$.

</details>

## Connections

- **Backward:** this lesson is the answer to the convolution pain of [3.4](03-04-sums-of-random-variables.md) — independent addition, which was a hard integral there, is multiplication here. The definition is a Lebesgue integral against the law from [2.2](02-02-distributions-and-cdfs.md)–[2.3](02-03-lebesgue-integral-expectation.md), and every "size of an average ≤ average of size" step is the integral triangle inequality from [2.5](02-05-lp-spaces-inequalities.md).
- **Forward:** [4.4 Weak convergence](04-04-weak-convergence.md) makes "convergence in distribution" fully rigorous (portmanteau, tightness, Prokhorov) — the mode that Lévy's theorem certifies. Lesson 4.5 then runs the CLT: normalize $S_n$, Taylor-expand $\varphi$ to second order (the $1+it\mathbb E X-\tfrac{t^2}{2}\mathbb E X^2$ formula above), watch it converge to $e^{-t^2/2}$, and invoke Lévy continuity — every ingredient is on this page.
- **Sideways:** the characteristic function *is* the Fourier transform of a measure, so the inversion and uniqueness theorems here are the probabilist's face of Fourier inversion in `complex-analysis` (contour integration is one route to $\varphi_Z=e^{-t^2/2}$). The same transform reappears wherever independent contributions accumulate — signal processing, the structure functions of `stat-mech`.
