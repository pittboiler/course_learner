# Probability & Statistics · Lesson 4.4: Sampling distributions — chi-square and Student's $t$

> ⏱ ~15 min · Module 4: Statistical inference · Builds on: [4.1 Estimation, MLE, and sampling distributions](04-01-estimation-and-mle.md), [4.2 Confidence intervals](04-02-confidence-intervals.md), [4.3 Hypothesis testing](04-03-hypothesis-testing.md) · Unlocks: econometrics, statistical-learning (course complete)

## Why this matters

Module 4 handed you two things on trust. [4.1](04-01-estimation-and-mle.md) asserted that dividing by $n-1$ — not $n$ — makes the sample variance unbiased, and left it at that. [4.2](04-02-confidence-intervals.md) and [4.3](04-03-hypothesis-testing.md) told you to swap $z$ for $t_{n-1}$ the moment $\sigma$ is unknown, then quoted a table of multipliers with no account of where the distribution came from. Both instructions are right. Neither was earned.

This lesson pays that debt. It is short, and it turns three memorized rules into one story: estimating the centre costs a degree of freedom, the leftover spread has a distribution of its own (chi-square), and dividing a bell by that leftover is exactly Student's $t$. It also explains the folk rule everyone quotes — *above $n=30$, just use $z$* — instead of leaving it as superstition.

## The idea

Start with the smallest possible case. You have **one** observation. What is the spread of the population? You have no idea — a single point can't tell you how scattered the data are. But look at what the naive formula does: the one deviation from the sample mean is $X_1 - \bar X = 0$, so $\frac1n\sum(X_i-\bar X)^2 = 0$. It reports *zero spread*, with total confidence, on no evidence at all. The $n-1$ version reports $0/0$ — undefined — which is the honest answer.

That is the whole phenomenon in miniature. $\bar X$ is not the true centre $\mu$; it is the centre **fitted to your data**, and it always sits closer to your data than $\mu$ does. So deviations measured from $\bar X$ are systematically too small, and the shortfall isn't a rounding error — it is exactly one $\sigma^2$'s worth, every time. You had $n$ numbers, you spent one on locating the centre, and $n-1$ are left to say anything about spread. That leftover count is what "**degrees of freedom**" means.

Now the second half. To standardize $\bar X$ you divide by its standard error. With $\sigma$ known that divisor is a fixed number and you get a clean bell. With $\sigma$ unknown you divide by $s/\sqrt n$ instead — and $s$ is *itself an estimate*, wobbling from sample to sample. You are measuring with a ruler of uncertain length. Most of the time the ruler is about right. But sometimes it reads short, and dividing by a too-small number throws the ratio far out. That is why the resulting distribution — Student's $t$ — is bell-shaped but **fat-tailed**, and why it needs a bigger multiplier than $1.96$ to bracket 95 percent of its mass.

## The formal version

### Why the divisor is $n-1$

Let $X_1,\dots,X_n$ be i.i.d. with mean $\mu$ and variance $\sigma^2$, and recall [the sample variance](../reference.md#sample-variance) $s^2 = \frac{1}{n-1}\sum_i (X_i-\bar X)^2$. Everything follows from one algebraic identity. Write each deviation as $X_i - \bar X = (X_i-\mu) - (\bar X-\mu)$ and square:

$$\sum_{i=1}^n (X_i-\bar X)^2 = \sum_{i=1}^n (X_i-\mu)^2 - 2(\bar X-\mu)\sum_{i=1}^n (X_i-\mu) + n(\bar X-\mu)^2.$$

The middle sum is $\sum_i (X_i-\mu) = n\bar X - n\mu = n(\bar X-\mu)$, so the middle term is $-2n(\bar X-\mu)^2$ and two of the three terms collapse into one:

$$\boxed{\ \sum_{i=1}^n (X_i-\bar X)^2 = \sum_{i=1}^n (X_i-\mu)^2 - n(\bar X-\mu)^2.\ }$$

*In words: squared spread around the sample mean is squared spread around the true mean, minus a penalty — and the penalty is never negative.* This is the "too small" claim, now exact rather than hand-waved.

Take expectations. Each $\mathbb{E}[(X_i-\mu)^2] = \sigma^2$ by [the definition of variance](../reference.md#variance-and-standard-deviation), so the first sum contributes $n\sigma^2$. And $\mathbb{E}[(\bar X-\mu)^2] = \operatorname{Var}(\bar X) = \sigma^2/n$ from [3.2](03-02-sums-and-law-of-large-numbers.md), so the penalty contributes $n\cdot\sigma^2/n = \sigma^2$:

$$\mathbb{E}\!\left[\sum_{i=1}^n (X_i-\bar X)^2\right] = n\sigma^2 - \sigma^2 = (n-1)\,\sigma^2 \qquad\Longrightarrow\qquad \mathbb{E}[s^2] = \sigma^2.$$

*In words: the squared deviations fall short by exactly one $\sigma^2$ — one observation's worth — so dividing by $n-1$ instead of $n$ corrects it precisely.* Note what this did **not** need: no normality, no large $n$. Any i.i.d. sample with a finite variance, any $n\ge 2$. That debt is paid.

### Chi-square: the distribution of the leftover spread

Unbiasedness only pins down the *average* of $s^2$. To build an interval you need its whole distribution, and that requires a new family.

**Definition.** If $Z_1,\dots,Z_k$ are independent standard normals, then

$$\chi^2_k \;=\; Z_1^2 + Z_2^2 + \cdots + Z_k^2$$

is the **chi-square distribution with $k$ degrees of freedom**. *In words: add up $k$ independent squared bells.* It lives on $x>0$ (a sum of squares can't be negative), is right-skewed, and has density proportional to $x^{k/2-1}e^{-x/2}$. Two facts do all the work:

$$\mathbb{E}[\chi^2_k] = k, \qquad \operatorname{Var}(\chi^2_k) = 2k.$$

The mean is immediate: $\mathbb{E}[Z^2] = \operatorname{Var}(Z) = 1$, added $k$ times.

**The theorem (stated, not proved).** If the $X_i$ are i.i.d. **normal** $\mathcal{N}(\mu,\sigma^2)$, then

$$\frac{(n-1)s^2}{\sigma^2} \;\sim\; \chi^2_{n-1}, \qquad\text{and } s^2 \text{ is independent of } \bar X.$$

*In words: measure the total squared spread in units of $\sigma^2$ and it is a sum of $n-1$ squared standard normals — and it carries no information about where the centre landed.*

Why $n-1$ and not $n$? The $n$ deviations $X_i-\bar X$ are not free: they satisfy one linear constraint, $\sum_i (X_i-\bar X)=0$. Fix any $n-1$ of them and the last is forced. So although you started with $n$ independent normal directions, the deviations occupy an $(n-1)$-dimensional subspace of them, and rotating to an orthonormal basis of that subspace turns the sum of squares into $n-1$ squared independent standard normals. (The rotation argument is the proof; it needs the [orthogonality machinery of linear algebra](../../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) and belongs to `econometrics`. Take the result.)

Consistency check, and it is a good one: $\mathbb{E}[\chi^2_{n-1}] = n-1$ gives $\mathbb{E}\!\left[(n-1)s^2/\sigma^2\right] = n-1$, i.e. $\mathbb{E}[s^2]=\sigma^2$. The chi-square fact re-derives the unbiasedness we proved by hand — two roads, one answer.

### Student's $t$: a bell divided by a wobbling ruler

**Definition.** If $Z\sim\mathcal{N}(0,1)$ and $V\sim\chi^2_\nu$ are **independent**, then

$$T \;=\; \frac{Z}{\sqrt{V/\nu}}$$

has **Student's $t$ distribution with $\nu$ degrees of freedom**, written $T\sim t_\nu$. *In words: a standard normal divided by the square root of an independent chi-square scaled to average 1.* Its density is

$$f_\nu(t) \;=\; c_\nu\left(1+\frac{t^2}{\nu}\right)^{-(\nu+1)/2},$$

with $c_\nu$ whatever constant makes the area 1. Symmetric about 0, bell-shaped — and the shape of that formula is the entire point, as we'll see in a moment.

**The payoff.** Take an i.i.d. normal sample and standardize $\bar X$ using $s$ rather than $\sigma$. Multiply top and bottom by $\sqrt n/\sigma$:

$$\frac{\bar X-\mu}{s/\sqrt n} \;=\; \underbrace{\frac{\bar X-\mu}{\sigma/\sqrt n}}_{Z\ \sim\ \mathcal{N}(0,1)} \Bigg/ \underbrace{\frac{s}{\sigma}}_{\sqrt{V/(n-1)},\ \ V=\frac{(n-1)s^2}{\sigma^2}\sim\chi^2_{n-1}} \;\sim\; t_{n-1}.$$

Every piece is now accounted for: $Z$ is standard normal by the CLT (exactly normal here, since the data are), $V$ is chi-square with $n-1$ degrees of freedom by the theorem above, and the two are independent — which is precisely the independence of $\bar X$ and $s^2$ that the theorem also supplied. That is where $t_{n-1,\alpha/2}$ in [4.2](04-02-confidence-intervals.md) comes from, and where the $t$-statistic of [4.3](04-03-hypothesis-testing.md) comes from. Debt paid.

**Why the tails are heavy.** Two ways to see it, and they agree.

- *Mechanically:* the normal's density dies like $e^{-t^2/2}$ — brutally fast. The $t$ density dies like $\lvert t\rvert^{-(\nu+1)}$ — a mere power law. Polynomial decay always loses to exponential decay eventually, so far enough out, the $t$ density sits above the normal, for every $\nu$.
- *Intuitively:* $T = Z/(s/\sigma)$. When $s$ happens to come out 20 percent below $\sigma$, $T$ is 25 percent larger than the $Z$ it was built from. Small samples make $s$ genuinely unreliable (P2 quantifies exactly how unreliable), so occasional short rulers inflate occasional $T$'s — mass gets pushed out of the shoulders and into the tails.

**Why it converges to the normal.** As $\nu\to\infty$, the LLN forces $V/\nu\to 1$: the chi-square, being an average of $\nu$ squared standard normals, stops wobbling. The ruler becomes exact and $T\to Z$. In the density, $\left(1+t^2/\nu\right)^{-(\nu+1)/2}\to e^{-t^2/2}$, the normal's shape. Concretely, from [the card's table](../reference.md#critical-values): $t_{5,0.025}=2.571$ (31 percent above $1.96$), $t_{15,0.025}=2.131$ (9 percent), $t_{30,0.025}=2.042$ (4 percent). **That is the "$n$ above 30, just use $z$" rule of thumb** — not a law, just the point where the correction drops below the other errors in your setup.

## Picture

![Three symmetric bell curves on a common axis: the standard normal dashed grey, t with 8 degrees of freedom in blue, and t with 2 degrees of freedom in coral, with the t curves showing lower peaks and, in a magnified right-tail inset, both t tails lying above the normal](assets/04-04-fig1.svg)

All three curves enclose area 1, so a lower peak has to be paid for somewhere — and it is paid in the tails. The $t$ with 2 degrees of freedom (coral) is visibly squashed at the top and visibly raised at the far right; the $t$ with 8 (blue) has already crept most of the way back to the normal near the peak, but the magnified inset shows it still riding above the normal out past 3. That gap is the whole reason $t_{\nu,\alpha/2}>z_{\alpha/2}$: to capture the same middle 95 percent you must reach further out, because more mass is out there. Watch the coral curve climb toward the dashed one as $\nu$ grows from 2 to 8 to $\infty$ — that is the convergence, drawn.

## Worked examples

**Example 1 (the $n-1$ correction, verified end to end at $n=2$).** With two observations, $\bar X = \frac{X_1+X_2}{2}$, so the two deviations are

$$X_1-\bar X = \frac{X_1-X_2}{2}, \qquad X_2-\bar X = -\frac{X_1-X_2}{2},$$

and their squares sum to $\frac{(X_1-X_2)^2}{4}\cdot 2 = \frac{(X_1-X_2)^2}{2}$. Now, $\mathbb{E}[(X_1-X_2)^2] = \operatorname{Var}(X_1-X_2) = 2\sigma^2$ — the means cancel in the difference, and variances add for independent draws. Therefore

$$\mathbb{E}\!\left[\sum_i (X_i-\bar X)^2\right] = \frac{2\sigma^2}{2} = \sigma^2 = (n-1)\sigma^2 \quad\text{at } n=2. \ \checkmark$$

Dividing that by $n=2$ would report $\sigma^2/2$ — half the truth, forever, no matter how many times you repeat the experiment. Dividing by $n-1=1$ is exactly right. Notice too that the two deviations are perfect mirror images: knowing one gives you the other for free. One degree of freedom, visible in the algebra.

**Example 2 (what ignoring the $t$ actually costs).** A lab has $n=6$ measurements, so $\nu = n-1 = 5$, and $\sigma$ is unknown. The correct 95 percent interval uses $t_{5,0.025}=2.571$. Suppose an impatient analyst uses $1.96$ instead. How much confidence does that interval really carry?

For $t_5$, the mass within $\pm 1.96$ is about $0.893$. So the "95 percent" interval is really an **89 percent** interval — the analyst is quietly running a one-in-nine miss rate while reporting one-in-twenty, and the interval is $\frac{2.571-1.96}{2.571} \approx 24$ percent too narrow. Run the same comparison at $n=31$ ($\nu=30$, $t=2.042$) and the interval is only 4 percent too narrow, with true coverage about 94.1 percent — a rounding error next to the modelling assumptions. Same mistake, two sample sizes, and the difference between a real problem and a shrug. This is why [4.2](04-02-confidence-intervals.md)'s materials-lab problem at $n=16$ insisted on $t_{15,0.025}=2.131$.

## Watch out

- You might think that because $s^2$ is unbiased for $\sigma^2$, $s$ is unbiased for $\sigma$. It is not: $\mathbb{E}[s] < \sigma$ always (strictly, unless $s$ is constant). The square root is a concave function, and averaging then bending is not the same as bending then averaging — the same $\mathbb{E}[g(X)]\ne g(\mathbb{E}[X])$ trap from [2.1](02-01-expectation-variance-moments.md). Unbiasedness does not survive a nonlinear transformation.
- You might think the $t$ is there to rescue you from non-normal data. It is not — it is exact only *when the data are normal*, and it fixes one specific problem: an unknown $\sigma$ replaced by a random $s$. Skewed data with small $n$ break the $t$ interval just as they break the $z$ interval; the fix there is more data or a different method, never a bigger multiplier.
- You might think degrees of freedom is just another name for the sample size. It's the number of *free* coordinates left after the constraints: one constraint here ($\sum_i(X_i-\bar X)=0$), so $n-1$. Fit two parameters and you'd lose two. Note also that $\chi^2_k$ is **not** symmetric, so an interval for $\sigma^2$ is *not* of the form "estimate plus-or-minus something" — you must read two different tail values off the chi-square.
- You might treat the fat tails as a mild curiosity. They are load-bearing: $\operatorname{Var}(t_\nu) = \frac{\nu}{\nu-2}$ only for $\nu>2$, and is **infinite** for $\nu\le 2$. At $\nu=1$ the $t$ is the Cauchy distribution, which has no mean at all — the CLT does not apply to it, and its sample average never settles down.

## One-liner

> Estimating the centre costs one degree of freedom — that is the $n-1$; the leftover squared spread, measured in $\sigma^2$ units, is a $\chi^2_{n-1}$; and a bell divided by that wobbling ruler is Student's $t$, fat-tailed because the ruler sometimes reads short.

## Problems

**P1 (🟢)** A sample of five readings is $\{6,\ 9,\ 10,\ 13,\ 12\}$. (a) Compute $\bar X$ and $s^2$, and also the "naive" version $\frac1n\sum_i (X_i-\bar X)^2$. (b) Now suppose you were told the true mean is $\mu=11$. Compute $\sum_i (X_i-\mu)^2$ and verify the identity $\sum_i (X_i-\bar X)^2 = \sum_i (X_i-\mu)^2 - n(\bar X-\mu)^2$ numerically. (c) One sentence: which of the two sums is smaller, and why must it always be so?

**P2 (🟡)** Let $X_1,\dots,X_n$ be i.i.d. $\mathcal{N}(\mu,\sigma^2)$, so that $V = (n-1)s^2/\sigma^2 \sim \chi^2_{n-1}$. Using only $\mathbb{E}[\chi^2_k]=k$ and $\operatorname{Var}(\chi^2_k)=2k$: (a) re-derive $\mathbb{E}[s^2]=\sigma^2$. (b) Show $\operatorname{Var}(s^2) = \dfrac{2\sigma^4}{n-1}$. (c) With $\sigma = 4$ and $n = 9$, compute the standard deviation of $s^2$ and compare it to $\sigma^2$ itself. Comment in one sentence on what this says about estimating a variance from a small sample.

**P3 (🔴)** (a) Starting from $T = \dfrac{\bar X-\mu}{s/\sqrt n}$ for an i.i.d. normal sample, show algebraically that $T = \dfrac{Z}{\sqrt{V/(n-1)}}$ with $Z\sim\mathcal{N}(0,1)$ and $V\sim\chi^2_{n-1}$, and say exactly which stated fact supplies the independence that the $t$ definition requires. (b) A physicist reports a measurement from $n=6$ runs as $\bar X \pm 1.96\,s/\sqrt6$ and calls it a 95 percent interval. Given that $\mathbb{P}(\lvert t_5\rvert \le 1.96)\approx 0.893$ and $t_{5,\,0.025}=2.571$, state the interval's true confidence level and the factor by which its width should be multiplied to fix it.

<details>
<summary>Solutions</summary>

**P1** (a) The sum is $6+9+10+13+12 = 50$, so $\bar X = 50/5 = 10$. Deviations from 10: $-4,\,-1,\,0,\,3,\,2$; squares $16,\,1,\,0,\,9,\,4$, summing to $\sum_i (X_i-\bar X)^2 = 30$. Hence

$$s^2 = \frac{30}{n-1} = \frac{30}{4} = 7.5, \qquad \text{naive version} = \frac{30}{5} = 6.$$

(b) Deviations from $\mu=11$: $-5,\,-2,\,-1,\,2,\,1$; squares $25,\,4,\,1,\,4,\,1$, summing to $\sum_i (X_i-\mu)^2 = 35$. The penalty term is $n(\bar X-\mu)^2 = 5\,(10-11)^2 = 5$. So

$$\sum_i (X_i-\mu)^2 - n(\bar X-\mu)^2 = 35 - 5 = 30 = \sum_i (X_i-\bar X)^2. \ \checkmark$$

(c) The sum around $\bar X$ (30) is smaller than the sum around $\mu$ (35). It must always be: the penalty $n(\bar X-\mu)^2$ is a square, hence never negative. Deeper reason — $\bar X$ is the *minimizer* of $\sum_i (X_i - c)^2$ over all constants $c$, so no other centre, including the true $\mu$, can give a smaller sum of squares.

Check: the naive value 6 sits below $s^2 = 7.5$, and the ratio is $6/7.5 = 0.8 = (n-1)/n = 4/5$ — exactly the systematic shrinkage the $n-1$ divisor undoes. ✓

**P2** (a) Solve for $s^2$: from $V = (n-1)s^2/\sigma^2$ we get $s^2 = \dfrac{\sigma^2}{n-1}V$. Expectation is linear, so

$$\mathbb{E}[s^2] = \frac{\sigma^2}{n-1}\,\mathbb{E}[V] = \frac{\sigma^2}{n-1}\,(n-1) = \sigma^2.$$

(b) Variance picks up the square of the constant, $\operatorname{Var}(aV) = a^2\operatorname{Var}(V)$:

$$\operatorname{Var}(s^2) = \left(\frac{\sigma^2}{n-1}\right)^{2}\operatorname{Var}(V) = \frac{\sigma^4}{(n-1)^2}\cdot 2(n-1) = \frac{2\sigma^4}{n-1}.$$

(c) With $\sigma = 4$, $\sigma^2 = 16$ and $\sigma^4 = 256$, and $n-1 = 8$:

$$\operatorname{Var}(s^2) = \frac{2(256)}{8} = 64, \qquad \text{SD}(s^2) = \sqrt{64} = 8.$$

That is **half of $\sigma^2 = 16$**. So a nine-point sample routinely returns $s^2$ values like 8 or 24 when the truth is 16 — the estimate is unbiased but wildly imprecise. In general the relative noise is $\text{SD}(s^2)/\sigma^2 = \sqrt{2/(n-1)}$, which is what makes the ruler in $T = Z/(s/\sigma)$ wobble, and therefore what makes the $t$ tails fat at small $n$.

Check: to pin a variance down to within 10 percent you need $\sqrt{2/(n-1)}\le 0.1$, i.e. $n-1\ge 200$, i.e. $n\ge 201$ — variances are far more expensive to estimate than means. ✓

**P3** (a) Multiply numerator and denominator by $\sqrt n/\sigma$ (legal — it is one nonzero constant applied to both):

$$T = \frac{\bar X-\mu}{s/\sqrt n} = \frac{(\bar X-\mu)\big/(\sigma/\sqrt n)}{s/\sigma} = \frac{Z}{s/\sigma}, \qquad Z = \frac{\bar X-\mu}{\sigma/\sqrt n}\sim\mathcal{N}(0,1)$$

(exactly normal, since the $X_i$ are normal and $\bar X$ has mean $\mu$ and variance $\sigma^2/n$). For the denominator, with $V = (n-1)s^2/\sigma^2\sim\chi^2_{n-1}$,

$$\frac{s}{\sigma} = \sqrt{\frac{s^2}{\sigma^2}} = \sqrt{\frac{(n-1)s^2/\sigma^2}{n-1}} = \sqrt{\frac{V}{n-1}} \qquad\Longrightarrow\qquad T = \frac{Z}{\sqrt{V/(n-1)}} \sim t_{n-1}.$$

The independence requirement is supplied by the **second half of the same theorem**: for an i.i.d. normal sample, $\bar X$ and $s^2$ are independent. $Z$ is a function of $\bar X$ alone and $V$ of $s^2$ alone, so $Z$ and $V$ are independent — which is exactly what the definition of $t_\nu$ demands. Without that clause the ratio would not be a $t$.

(b) With $n=6$, the correct reference distribution is $t_5$, not the standard normal. The interval reaches out $1.96$ estimated standard errors, and $\mathbb{P}(\lvert t_5\rvert\le 1.96)\approx 0.893$, so its true confidence level is about **89.3 percent**, not 95 — roughly a one-in-nine miss rate instead of one-in-twenty. To fix it, replace the multiplier $1.96$ with $t_{5,0.025}=2.571$, i.e. multiply the width by

$$\frac{2.571}{1.96} \approx 1.31 \quad (\text{about 31 percent wider}).$$

Check: the fix must *widen*, since the reported interval was over-confident, and it does. And the same repair at $n=31$ would be a factor $2.042/1.96\approx 1.04$ — the correction shrinking away with $n$, exactly as the picture predicts. ✓

</details>

## Flashback

**From Lesson 3.1 (Joint distributions, covariance, and correlation):** Two measurement errors $X$ and $Y$ have $\operatorname{Var}(X)=9$, $\operatorname{Var}(Y)=16$, and correlation $\rho = 0.5$. Find $\operatorname{Var}(X+Y)$ and $\operatorname{Var}(X-Y)$, and give the standard deviation of each.

<details>
<summary>Solution</summary>

First recover the covariance from the correlation, using $\rho = \operatorname{Cov}(X,Y)/(\sigma_X\sigma_Y)$ with $\sigma_X = 3$, $\sigma_Y = 4$:

$$\operatorname{Cov}(X,Y) = \rho\,\sigma_X\sigma_Y = 0.5 \times 3 \times 4 = 6.$$

Then apply $\operatorname{Var}(X\pm Y) = \operatorname{Var}(X)+\operatorname{Var}(Y)\pm 2\operatorname{Cov}(X,Y)$:

$$\operatorname{Var}(X+Y) = 9+16+12 = 37, \qquad \operatorname{Var}(X-Y) = 9+16-12 = 13,$$

so the standard deviations are $\sqrt{37}\approx 6.08$ and $\sqrt{13}\approx 3.61$.

Check two things. Positive correlation makes the sum more variable and the difference *less* variable than independence would ($9+16=25$) — the errors partly move together, so they partly cancel in the difference. And standard deviations never add: $3+4=7 \ne 6.08$. ✓ (That cancelling-in-the-difference fact is exactly what Example 1 above used at $n=2$, in the independent case where the covariance term vanishes.)

</details>

## Connections

- **Backward:** the derivation of $\mathbb{E}[s^2]=\sigma^2$ runs entirely on $\operatorname{Var}(\bar X)=\sigma^2/n$ from [3.2](03-02-sums-and-law-of-large-numbers.md) and the definition of variance from [2.1](02-01-expectation-variance-moments.md) — no new machinery, just one clever way of splitting a deviation. The $t$-statistic is [4.3](04-03-hypothesis-testing.md)'s test statistic and [4.2](04-02-confidence-intervals.md)'s interval multiplier, now with a derivation attached instead of a table.
- **Forward:** every regression coefficient in **econometrics** is reported with a $t$-statistic whose degrees of freedom are $n$ minus the number of fitted coefficients — the same "one constraint per estimated parameter" bookkeeping, generalized. Chi-square reappears as the reference distribution for variance tests, goodness-of-fit tests, and likelihood-ratio tests; the $F$ distribution, which compares two variances, is a ratio of two independent chi-squares.
- **Sideways (linear algebra):** the degrees-of-freedom count is a *dimension* count. The deviation vector $(X_1-\bar X,\dots,X_n-\bar X)$ is the original data vector with its projection onto the all-ones direction removed — it lives in the orthogonal complement, a subspace of dimension $n-1$. That is [projection](../../linalg-refresher/lessons/04-02-projection-least-squares.md) doing statistics, and it is the honest reason the $n-1$ is a $n-1$.

*Course complete. You can now estimate a parameter, wrap it in an interval, test a claim about it, and — as of this lesson — say why the interval is the width it is and why the divisor is the divisor it is.*
