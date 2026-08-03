# Information Theory · Lesson 4.1: Differential entropy

> ⏱ ~15 min · Module 4: Continuous information and the bridges · Builds on: [3.5 Codes in practice](03-05-codes-in-practice.md) · Unlocks: [4.2 The Gaussian channel and water-filling](04-02-gaussian-channel-water-filling.md)

## Why this matters

Everything so far — entropy, mutual information, capacity — lived on finite alphabets, where $H \geq 0$ counts bits honestly. But real signals are continuous: a voltage, a pixel intensity, a Gaussian noise sample. To talk about the capacity of a wire or a wireless channel (the whole point of Module 4), we need an entropy for densities. The natural candidate, $h(X) = -\int f \log f$, works — but it comes with a warning label. It can be **negative**, it **changes when you rescale your axes**, and it is emphatically **not** the amount of information in a continuous sample (that's infinite). The payoff: even though $h$ alone is a slippery, coordinate-dependent quantity, the *differences* we actually care about — mutual information, capacity, KL divergence — are rock-solid and invariant. This lesson is about trusting the differences and distrusting the absolute number.

## The idea

Take a continuous random variable and chop its range into little bins of width $\Delta$. Each bin holds probability $\approx f(x)\Delta$, so you get a discrete distribution, and you can compute its ordinary entropy $H^\Delta$. As you shrink the bins to resolve $X$ ever more finely, $H^\Delta$ blows up — it takes infinitely many bits to pin down a real number exactly. The blow-up is a clean $\log(1/\Delta)$ term, the "resolution tax," and it's the same for *every* density. If you subtract it off, what remains is a finite number that depends on the *shape* of $f$:

$$H^\Delta \approx \underbrace{\Big(-\int f\log f\Big)}_{\text{shape}} + \underbrace{\log\tfrac{1}{\Delta}}_{\text{resolution tax}}.$$

**Differential entropy is that shape term** — the finite residue after you strip away the infinite resolution cost. Because you threw away the divergent piece by hand, the leftover is no longer a bit count: it can be negative, and it shifts if you change units (measuring in millimeters instead of meters adds a constant). But the divergent tax is *universal*, so whenever you subtract two differential entropies, the tax — and any unit-change constant — cancels exactly. That's why $I(X;Y)$ and capacity survive intact while $h$ itself wobbles.

## The formal version

**Differential entropy.** For a continuous random variable $X$ with density $f(x)$,

$$h(X) = -\int_{-\infty}^{\infty} f(x)\,\log f(x)\,dx = \mathbb{E}\big[-\log f(X)\big].$$

In words: the average surprise $-\log f(X)$, exactly as in the discrete case — but with an integral against a *density* instead of a sum over a mass function, and $f$ can exceed $1$, which is what lets the average go negative.

**It is not the limit of discrete entropy.** With bin width $\Delta$,

$$H^\Delta = h(X) + \log\tfrac{1}{\Delta} + o(1) \xrightarrow{\ \Delta \to 0\ } +\infty.$$

In words: the discrete entropy of a finer and finer quantization diverges; $h(X)$ is only the finite part left after removing $\log(1/\Delta)$, so $h$ is *not* "the entropy of a continuous variable" — no such finite number exists.

**Scaling law.** For a constant $a \neq 0$,

$$h(aX) = h(X) + \log|a|, \qquad h(X + c) = h(X).$$

In words: stretching the axis by $a$ adds $\log|a|$ (differential entropy is *not* scale-invariant), while shifting does nothing. So the numerical value of $h$ depends on your choice of units — it is not a physical invariant.

**Differences are invariant.** Mutual information and relative entropy,

$$I(X;Y) = h(X) - h(X\mid Y), \qquad D(f\,\|\,g) = \int f\log\frac{f}{g},$$

are unchanged by any smooth invertible change of coordinates. In words: the coordinate-dependent pieces appear identically in both terms of a difference and cancel, so the quantities that describe *channels and comparisons* are physically meaningful even though $h$ alone is not.

**Maximum-entropy property.** Among all densities on $\mathbb{R}$ with a fixed variance $\sigma^2$, the Gaussian $\mathcal{N}(0,\sigma^2)$ uniquely maximizes $h$, and

$$h\big(\mathcal{N}(0,\sigma^2)\big) = \tfrac{1}{2}\log\!\big(2\pi e\,\sigma^2\big).$$

In words: under a "fixed power" (variance) budget, the bell curve is the most uncertain distribution you can build — a fact we cash in for channel capacity in [4.2](04-02-gaussian-channel-water-filling.md) and prove in [4.4](04-04-maximum-entropy-stat-mech.md).

## Concrete instance

Two densities, computed from the definition. (Base-2 logs give *bits*, natural logs give *nats*; the formulas hold in either, and I'll write $\log$ throughout.)

**Uniform on $[0,a]$.** Here $f(x) = 1/a$ on the interval, $0$ outside:

$$h = -\int_0^a \frac{1}{a}\log\frac{1}{a}\,dx = -\log\frac{1}{a} = \log a.$$

For $a = 8$: $h = 3$ bits. For $a = \tfrac{1}{2}$: $h = \log \tfrac12 = -1$ bit — **negative**. A tightly concentrated density has a density value $f > 1$, so $-\log f < 0$, and the average comes out below zero. This is your first proof that $h$ is not counting bits.

**Gaussian $\mathcal{N}(0,\sigma^2)$.** With $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}}\,e^{-x^2/(2\sigma^2)}$,

$$-\log f(x) = \tfrac12\log(2\pi\sigma^2) + \frac{x^2}{2\sigma^2}\log e,$$

so taking the expectation and using $\mathbb{E}[X^2] = \sigma^2$,

$$h = \tfrac12\log(2\pi\sigma^2) + \frac{\mathbb{E}[X^2]}{2\sigma^2}\log e = \tfrac12\log(2\pi\sigma^2) + \tfrac12\log e = \tfrac12\log(2\pi e\,\sigma^2).$$

Both obey the scaling law: doubling $a$ or $\sigma$ adds exactly $\log 2 = 1$ bit, as $h(aX) = h(X) + \log|a|$ demands.

## Worked examples

**Example 1 (mechanical — the two integrals, and the negativity).**
The uniform computation above is a one-liner because $\log f$ is constant on the support; the only subtlety is remembering $f = 1/a$ (not $1$) so that $\int_0^a f\,dx = 1$. The verdict $h(\text{Uniform}[0,a]) = \log a$ crosses zero at $a = 1$: wider than a unit interval → positive, narrower → negative. There is nothing pathological here — $h$ simply is not a bit count, and $h < 0$ is a legal, common value.

For the Gaussian, the whole trick is that the exponent is quadratic, so $-\log f$ is a *constant plus a multiple of $x^2$*, and the expectation of $x^2$ is handed to you as the variance $\sigma^2$ — no hard integral, just $\mathbb{E}[X^2]=\sigma^2$. The result $\tfrac12\log(2\pi e\sigma^2)$ is the number that sets Gaussian-channel capacity in the next lesson.

**Example 2 (why you'd care — non-invariance of $h$, invariance of $I$).**
Rescale $X$ to $Y = aX$. Its density is $f_Y(y) = \frac{1}{|a|}f_X(y/a)$ (mass conserved, spread over $|a|$ times the width). Then, substituting $x = y/a$, $dy = |a|\,dx$:

$$h(Y) = -\int \frac{1}{|a|}f_X\!\Big(\tfrac{y}{a}\Big)\Big[\log f_X\!\Big(\tfrac{y}{a}\Big) - \log|a|\Big]dy = -\int f_X(x)\big[\log f_X(x) - \log|a|\big]dx = h(X) + \log|a|.$$

So $h$ genuinely moves when you change units — a red flag if $h$ were meant to be physical. Now watch it heal in a difference. Rescale *both* variables' roles inside mutual information (a change of input units multiplies $X$, and the corresponding conditional density transforms the same way):

$$I(aX;Y) = h(aX) - h(aX\mid Y) = \big[h(X) + \log|a|\big] - \big[h(X\mid Y) + \log|a|\big] = h(X) - h(X\mid Y) = I(X;Y).$$

The $\log|a|$ terms cancel. **Mutual information — and therefore channel capacity $C = \max_f I(X;Y)$ — is well defined and unit-independent even though $h$ is not.** This is exactly why Module 4 can quote a channel's capacity in bits without ever fixing a unit for the signal.

## Watch out

- **You might think $h \geq 0$, but** differential entropy can be negative (any density concentrated enough that $f > 1$ over its bulk, e.g. Uniform$[0,\tfrac12]$ or a narrow Gaussian). It is *not* a count of bits; discrete $H \geq 0$ does not carry over.
- **You might think $h(X)$ is "the information in a continuous sample," but** that quantity is infinite — the quantized entropy $H^\Delta \approx h + \log(1/\Delta)$ diverges as $\Delta \to 0$. $h$ is only the finite residue after subtracting the universal $\log(1/\Delta)$ tax.
- **You might think $h$ is a fixed property of $X$, but** it depends on your coordinates: $h(aX) = h(X) + \log|a|$, and a nonlinear reparametrization shifts it too. Only *differences* — mutual information, capacity, and $D(f\|g)$ — are invariant and physically meaningful.
- **You might think the uniform maximizes uncertainty, but** with a *variance* budget the **Gaussian** is the max-entropy density; the uniform maximizes $h$ only under a hard *range* constraint. Match the constraint to the maximizer.

## One-liner

> Differential entropy $-\int f\log f$ is the finite shape-residue after stripping the infinite $\log(1/\Delta)$ resolution tax — so it can go negative and shifts with your units, and only differences (MI, capacity, KL) mean anything; under a variance budget the Gaussian wins with $h = \tfrac12\log(2\pi e\sigma^2)$.

## Problems

**P1 (🟢)** A signal is uniform on $[0, 4]$. (a) Find $h(X)$ in bits. (b) You now measure the same signal in units $16\times$ finer, i.e. $Y = 16X$, so $Y$ is uniform on $[0,64]$. Find $h(Y)$ two ways — directly, and via the scaling law — and check they agree.

**P2 (🟡)** Let $X \sim \mathcal{N}(0,\sigma^2)$ and let $Z \sim \text{Uniform}[-b, b]$, chosen to have the *same variance* as $X$. (a) Find $b$ in terms of $\sigma$. (b) Compute $h(X)$ and $h(Z)$ and verify $h(X) > h(Z)$ (the max-entropy property, in one instance). Use base-2 logs.

**P3 (🔴, optional)** Show that relative entropy $D(f\|g) = \int f\log(f/g)$ is invariant under the rescaling $x \mapsto y = ax$ (with $a>0$), by transforming both densities. Then explain in one sentence why this makes $D$ — unlike $h$ — a legitimate coordinate-free measure of how far $f$ is from $g$.

<details>
<summary>Solutions</summary>

**P1** (a) $h(X) = \log_2 4 = 2$ bits.
(b) *Direct:* $Y$ uniform on $[0,64]$ has $h(Y) = \log_2 64 = 6$ bits. *Scaling law:* $h(16X) = h(X) + \log_2 16 = 2 + 4 = 6$ bits. ✓ They agree. The extra $4$ bits are pure unit-change bookkeeping (the signal carries no more actual information) — precisely why $h$ is not an invariant.

**P2** (a) $\text{Var}(Z) = \frac{(2b)^2}{12} = \frac{b^2}{3}$. Setting this equal to $\sigma^2$ gives $b = \sqrt{3}\,\sigma$.
(b) Gaussian: $h(X) = \tfrac12\log_2(2\pi e\,\sigma^2)$. Numerically $2\pi e \approx 17.08$, so $h(X) = \tfrac12\log_2(17.08\,\sigma^2) = \tfrac12\big(\log_2 17.08 + \log_2\sigma^2\big) = \tfrac12(4.09) + \log_2\sigma = 2.05 + \log_2\sigma$ bits.
Uniform on $[-b,b] = [-\sqrt3\sigma, \sqrt3\sigma]$ has width $2\sqrt3\,\sigma$, so $h(Z) = \log_2(2\sqrt3\,\sigma) = \log_2(3.46\,\sigma) = 1.79 + \log_2\sigma$ bits.
Since $2.05 > 1.79$, $h(X) > h(Z)$ by about $0.25$ bit at equal variance — the Gaussian is more uncertain, exactly as the max-entropy property predicts. (The $\log_2\sigma$ term is common to both and cancels, so the comparison is unit-free — a difference of differential entropies, honest even though each term alone is not.)

**P3** With $y = ax$ ($a>0$): the transformed densities are $\tilde f(y) = \frac1a f(y/a)$ and $\tilde g(y) = \frac1a g(y/a)$. The *ratio* is scale-free:
$$\frac{\tilde f(y)}{\tilde g(y)} = \frac{\frac1a f(y/a)}{\frac1a g(y/a)} = \frac{f(y/a)}{g(y/a)}.$$
So, substituting $x = y/a$, $dy = a\,dx$:
$$D(\tilde f\|\tilde g) = \int \tilde f(y)\log\frac{\tilde f(y)}{\tilde g(y)}\,dy = \int \frac1a f(x)\log\frac{f(x)}{g(x)}\,a\,dx = \int f(x)\log\frac{f(x)}{g(x)}\,dx = D(f\|g).$$
The $1/a$ from the density transforms and the $a$ from $dy$ cancel, and the $\log|a|$ terms cancel *inside* the ratio before you ever integrate. **One sentence:** because the units drop out of the ratio $f/g$, $D$ measures a genuine discrepancy between the two distributions rather than an artifact of the coordinate you happened to choose — which is why KL, unlike $h$, is a valid invariant.

</details>

## Flashback

**From Lesson 3.4 (The converse and Fano's inequality):** You transmit one of $M = 16$ equally likely codewords over a noisy channel and observe $Y$; a decoder $\hat{X}(Y)$ achieves error probability $P_e = 0.05$. Use Fano's inequality to give the tightest upper bound it provides on the residual uncertainty $H(X\mid Y)$, in bits.

<details>
<summary>Solution</summary>

Fano's inequality: $H(X\mid Y) \leq H_b(P_e) + P_e\log_2(M-1)$, where $H_b$ is the binary entropy function.

Binary-entropy term:
$$H_b(0.05) = -0.05\log_2 0.05 - 0.95\log_2 0.95 = 0.05(4.322) + 0.95(0.074) = 0.216 + 0.070 = 0.286 \text{ bits}.$$
Guessing-among-the-rest term:
$$P_e\log_2(M-1) = 0.05\,\log_2 15 = 0.05(3.907) = 0.195 \text{ bits}.$$
Sum:
$$H(X\mid Y) \leq 0.286 + 0.195 = 0.482 \text{ bits}.$$
Interpretation: even with $\log_2 16 = 4$ bits of message uncertainty at the input, a $5\%$ error rate forces at most about half a bit of leftover uncertainty given the output — and, run in reverse, this is the converse engine: if the rate exceeds capacity, $H(X\mid Y)$ cannot be driven to $0$, so $P_e$ is bounded away from $0$.

</details>

## Connections

- **Backward:** this is the continuous twin of discrete entropy from [1.1](01-01-entropy-uncertainty-surprise.md) — same $\mathbb{E}[-\log f]$ recipe, but the sum becomes an integral and the guarantee $H \geq 0$ is lost. Relative entropy from [1.4](01-04-relative-entropy-kl-jensen.md) survives the crossing *unscathed*, which is exactly what P3 shows.
- **Forward:** [4.2](04-02-gaussian-channel-water-filling.md) uses $h(\mathcal{N}) = \tfrac12\log(2\pi e\sigma^2)$ directly — the additive-Gaussian-noise channel's capacity is a difference of two such terms, so all the unit-dependence cancels and a clean bit-rate falls out. [4.4](04-04-maximum-entropy-stat-mech.md) proves the max-entropy property (Gaussian under a variance constraint) that we used on faith here.
- **Sideways (probability):** the machinery is continuous densities and the change-of-variables formula $f_Y(y) = f_X(x)\,|dx/dy|$ from [probability-theory](../../probability-theory/syllabus.md) — the scaling law $h(aX) = h(X) + \log|a|$ is that Jacobian factor showing up inside the entropy.
- **Sideways (learning):** in [statistical-learning](../../statistical-learning/syllabus.md), differential entropy and continuous mutual information score representations (InfoMax, the information bottleneck) — and the invariance of $I$ under reparametrization is what makes those objectives meaningful across different encoders.
- **Sideways (physics):** the continuous phase-space entropy of [stat-mech](../../stat-mech/syllabus.md) is the same integral $-\int f\log f$ over positions and momenta; its coordinate-dependence is the classical shadow of why the Sackur–Tetrode entropy needs an $h^{3N}$ cell size to fix the "$\log(1/\Delta)$" ambiguity — physics quantizes the very tax we subtracted by hand.
