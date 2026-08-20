# Probability & Statistics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Probability is one unit of belief-weight spread over the things that could
happen; statistics is that machinery run backwards, from data to a claim about
the world. The spine of the course is short: attach numbers to outcomes (random
variables), summarize them (expectation and variance), watch what happens when
you add many of them up (LLN and CLT), and then use that limiting shape to
estimate, bracket, and test. Most of what you'll want mid-problem is a
distribution's mean and variance, a $\Phi$ or critical value, or the exact
wording of an interpretation — all tabulated below.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\Omega$, $\omega$ | the sample space (list of everything that could happen) and one outcome in it | [1.1](lessons/01-01-sample-spaces-events-axioms.md) |
| $A$, $A \subseteq \Omega$ | an event — a yes/no question about the result, i.e. a subset of outcomes | [1.1](lessons/01-01-sample-spaces-events-axioms.md) |
| $\mathbb{P}(A)$ | the weight event $A$ carries, a number in $[0,1]$ | [1.1](lessons/01-01-sample-spaces-events-axioms.md) |
| $A^c$, $A\cup B$, $A\cap B$, $\varnothing$ | not-$A$, $A$-or-$B$, $A$-and-$B$, the impossible event | [1.1](lessons/01-01-sample-spaces-events-axioms.md) |
| $\lvert A\rvert$ | how many outcomes are in $A$ — a **count**, not a probability | [1.1](lessons/01-01-sample-spaces-events-axioms.md) |
| $\binom{n}{k}$ | "$n$ choose $k$" — the number of unordered size-$k$ subsets | [1.1](lessons/01-01-sample-spaces-events-axioms.md) |
| $\mathbb{P}(A\mid B)$ | probability of $A$ after zooming into the world where $B$ happened | [1.2](lessons/01-02-conditional-probability-bayes.md) |
| $H$, $E$ | hypothesis (cause) and evidence, the two roles in Bayes | [1.2](lessons/01-02-conditional-probability-bayes.md) |
| $X$, $X(\omega)$ | a random variable — a **function** from outcomes to numbers | [1.3](lessons/01-03-random-variables-distributions.md) |
| $p(x)$ | pmf — the probability mass sitting exactly on the value $x$ (discrete) | [1.3](lessons/01-03-random-variables-distributions.md) |
| $f(x)$ | pdf — probability **per unit $x$** (continuous); not itself a probability | [1.3](lessons/01-03-random-variables-distributions.md) |
| $F(x)$ | CDF $\mathbb{P}(X\le x)$ — the running total of probability from the far left | [1.3](lessons/01-03-random-variables-distributions.md) |
| $\mathbb{E}[X]$, $\mu$ | expectation — the balance point of the distribution | [2.1](lessons/02-01-expectation-variance-moments.md) |
| $\mathrm{Var}(X)$, $\sigma$ | average squared wobble around $\mu$, and its square root (back in $X$'s units) | [2.1](lessons/02-01-expectation-variance-moments.md) |
| $X \sim \text{Binomial}(n,p)$ | "$\sim$" reads *is distributed as* — names the family and its parameters | [2.2](lessons/02-02-discrete-distributions.md) |
| $\lambda$ | a rate: mean events per interval (Poisson), or events per unit time (exponential) | [2.2](lessons/02-02-discrete-distributions.md) |
| $\mathcal{N}(\mu,\sigma^2)$ | the normal (bell) with that mean and **variance** (not SD) as its parameters | [2.3](lessons/02-03-continuous-distributions.md) |
| $Z$, $z$ | the standard normal $\mathcal{N}(0,1)$, and a standardized value $(x-\mu)/\sigma$ | [2.3](lessons/02-03-continuous-distributions.md) |
| $\Phi(z)$ | standard-normal CDF — area to the **left** of $z$ | [2.3](lessons/02-03-continuous-distributions.md) |
| $p(x,y)$, $p_X(x)$ | joint pmf of a pair, and the marginal you get by summing the other out | [3.1](lessons/03-01-joint-distributions-covariance.md) |
| $\mathrm{Cov}(X,Y)$, $\rho$ | co-movement of two variables, and its unitless version in $[-1,1]$ | [3.1](lessons/03-01-joint-distributions-covariance.md) |
| i.i.d. | independent and identically distributed — same law, no influence on each other | [3.2](lessons/03-02-sums-and-law-of-large-numbers.md) |
| $S_n$, $\bar X_n$ | the sum $X_1+\cdots+X_n$ and the sample mean $S_n/n$ | [3.2](lessons/03-02-sums-and-law-of-large-numbers.md) |
| $\varepsilon$ | a tolerance you pick — the half-width of an "close enough" window | [3.2](lessons/03-02-sums-and-law-of-large-numbers.md) |
| $\text{SE}$ | standard error — the SD of an *estimator*, e.g. $\sigma/\sqrt n$ for $\bar X$ | [3.2](lessons/03-02-sums-and-law-of-large-numbers.md) |
| $\theta$, $\hat\theta$ | the unknown parameter, and the estimator (recipe) aimed at it | [4.1](lessons/04-01-estimation-and-mle.md) |
| $s^2$, $s$ | sample variance (divisor $n-1$) and sample standard deviation | [4.1](lessons/04-01-estimation-and-mle.md) |
| $L(\theta)$, $\ell(\theta)$ | likelihood of the data as a function of $\theta$, and its log | [4.1](lessons/04-01-estimation-and-mle.md) |
| $\alpha$, $1-\alpha$ | the error rate you tolerate, and the confidence level | [4.2](lessons/04-02-confidence-intervals.md) |
| $z_{\alpha/2}$, $t_{n-1,\alpha/2}$ | critical values: how many standard errors to reach out on each side | [4.2](lessons/04-02-confidence-intervals.md) |
| $H_0$, $H_1$, $\mu_0$ | null hypothesis, alternative, and the value the null pins $\mu$ to | [4.3](lessons/04-03-hypothesis-testing.md) |
| $\beta$, $1-\beta$ | Type II error rate (a miss) and power (correctly rejecting a false $H_0$) | [4.3](lessons/04-03-hypothesis-testing.md) |
| $\nu$, "df" | degrees of freedom — free coordinates left after the constraints; $\nu=n-1$ for $s^2$ | [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md) |
| $\chi^2_k$ | chi-square with $k$ df — the law of a sum of $k$ independent squared standard normals | [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md) |
| $t_\nu$, $T$ | Student's $t$ with $\nu$ df, and a statistic following it | [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md) |

## Definitions

### Sample space and event

The list of everything that could happen, and any yes/no question you can answer
once you see the result. An event is a *subset* of the list.

$$A \subseteq \Omega, \qquad \text{``the die showed even''} = \{2,4,6\}$$

*Introduced:* [1.1](lessons/01-01-sample-spaces-events-axioms.md)

### Kolmogorov axioms

Three rules that make "spreading one unit of weight over the outcomes" precise:
no negative weight, the whole space weighs 1, and non-overlapping events add.

$$\mathbb{P}(A)\ge 0, \qquad \mathbb{P}(\Omega)=1, \qquad A\cap B=\varnothing \Rightarrow \mathbb{P}(A\cup B)=\mathbb{P}(A)+\mathbb{P}(B)$$

*Introduced:* [1.1](lessons/01-01-sample-spaces-events-axioms.md)

### Equally likely model

When the outcomes are symmetric — a fair die, a shuffled deck — probability
collapses into counting: an event's share is the fraction of outcomes it grabs.

$$\mathbb{P}(A) = \frac{\lvert A\rvert}{\lvert\Omega\rvert} \quad (\Omega \text{ finite, outcomes symmetric})$$

*Introduced:* [1.1](lessons/01-01-sample-spaces-events-axioms.md)

### Conditional probability

Learning that $B$ happened kills every outcome outside $B$; you re-weigh the
survivors so they again total 1. It asks: of the weight inside $B$, what share
also lands in $A$?

$$\mathbb{P}(A\mid B) = \frac{\mathbb{P}(A\cap B)}{\mathbb{P}(B)}, \qquad \mathbb{P}(B)>0$$

*Introduced:* [1.2](lessons/01-02-conditional-probability-bayes.md)

### Independence

Learning $B$ tells you nothing about $A$ — the zoom doesn't move the needle.
**Not** the same as disjoint: disjoint events with positive probability are
maximally *dependent*.

$$\mathbb{P}(A\cap B) = \mathbb{P}(A)\,\mathbb{P}(B) \quad\Longleftrightarrow\quad \mathbb{P}(A\mid B)=\mathbb{P}(A)$$

*Introduced:* [1.2](lessons/01-02-conditional-probability-bayes.md)

### Bayes' theorem

The flip: models hand you $\mathbb{P}(\text{evidence}\mid\text{cause})$, but you
want $\mathbb{P}(\text{cause}\mid\text{evidence})$. The price of the flip is that
you must supply a prior.

$$\mathbb{P}(H\mid E) = \frac{\mathbb{P}(E\mid H)\,\mathbb{P}(H)}{\mathbb{P}(E)}, \qquad \text{posterior} \propto \text{likelihood}\times\text{prior}$$

*Introduced:* [1.2](lessons/01-02-conditional-probability-bayes.md)

### Random variable

A rule that reads an outcome and hands you a number — not random, not a
variable, just a function. "$X=x$" is shorthand for the event
$\{\omega : X(\omega)=x\}$.

$$X:\Omega\to\mathbb{R}$$

*Introduced:* [1.3](lessons/01-03-random-variables-distributions.md)

### Probability mass function (pmf)

A table of weights, one per value the variable can take, totalling 1. Discrete
variables only.

$$p(x)=\mathbb{P}(X=x)\ \ge 0, \qquad \sum_x p(x)=1$$

*Introduced:* [1.3](lessons/01-03-random-variables-distributions.md)

### Probability density function (pdf)

Probability spread as *height per unit length*; you read off actual probability
as **area**, never as height. A density may exceed 1; only its area is capped.

$$f(x)\ge 0, \quad \int_{-\infty}^{\infty} f = 1, \quad \mathbb{P}(a\le X\le b)=\int_a^b f(x)\,dx, \quad \mathbb{P}(X=c)=0$$

*Introduced:* [1.3](lessons/01-03-random-variables-distributions.md)

### Cumulative distribution function (CDF)

How much probability has piled up at or to the left of $x$ — the running total.
Works for both kinds: a staircase for discrete (jump height $=p(x)$), a smooth
climb for continuous (slope $=f(x)$).

$$F(x)=\mathbb{P}(X\le x), \qquad \mathbb{P}(a<X\le b)=F(b)-F(a), \qquad f(x)=F'(x)$$

*Introduced:* [1.3](lessons/01-03-random-variables-distributions.md)

### Expectation

The point where the distribution balances if you hang each value's probability
on a beam — the long-run average.

$$\mathbb{E}[X]=\sum_x x\,p(x) \qquad\text{or}\qquad \mathbb{E}[X]=\int_{-\infty}^{\infty} x f(x)\,dx$$

*Introduced:* [2.1](lessons/02-01-expectation-variance-moments.md)

### Variance and standard deviation

The average *squared* distance from the balance point, and its square root —
which drags the spread back into the units you can talk about.

$$\mathrm{Var}(X)=\mathbb{E}\big[(X-\mu)^2\big]=\mathbb{E}[X^2]-\mu^2, \qquad \sigma=\sqrt{\mathrm{Var}(X)}$$

*Introduced:* [2.1](lessons/02-01-expectation-variance-moments.md)

### Moment

The $k$-th moment is $\mathbb{E}[X^k]$: the mean is the 1st, the variance is
built from the 1st and 2nd, and higher ones describe finer shape (3rd →
skewness, 4th → kurtosis).

*Introduced:* [2.1](lessons/02-01-expectation-variance-moments.md)

### LOTUS

To average a *transformed* payoff you don't need the distribution of $g(X)$ —
just push each value through $g$ and weight by $X$'s original probabilities.

$$\mathbb{E}[g(X)]=\sum_x g(x)\,p(x) \qquad\text{or}\qquad \int_{-\infty}^{\infty} g(x)f(x)\,dx$$

*Introduced:* [2.1](lessons/02-01-expectation-variance-moments.md)

### Poisson limit of the binomial

Many trials, each almost never succeeding, but a steady expected count — that is
a Poisson. This is *why* Poisson models rare events.

$$\binom{n}{k}p^k(1-p)^{n-k} \longrightarrow \frac{e^{-\lambda}\lambda^k}{k!} \qquad (n\to\infty,\ p\to 0,\ np=\lambda \text{ fixed})$$

*Introduced:* [2.2](lessons/02-02-discrete-distributions.md)

### Memorylessness

Having waited already buys you nothing: the *remaining* wait is distributed like
a brand-new one. The exponential is the only continuous distribution with this
property (the geometric is the discrete one).

$$\mathbb{P}(X>s+t\mid X>s)=\mathbb{P}(X>t)$$

*Introduced:* [2.3](lessons/02-03-continuous-distributions.md)

### Standardizing (z-score)

Every normal is the one standard normal in disguise — shifted by $\mu$, stretched
by $\sigma$. Subtract and divide, and a single table of $\Phi$ answers every
normal question.

$$Z=\frac{X-\mu}{\sigma}\sim\mathcal{N}(0,1), \qquad \mathbb{P}(X\le x)=\Phi\!\left(\frac{x-\mu}{\sigma}\right)$$

*Introduced:* [2.3](lessons/02-03-continuous-distributions.md)

### Joint distribution and marginals

One table (or surface) giving the weight of every combination $(x,y)$; collapse a
row or column by summing the other variable out to recover one variable alone.

$$p(x,y)=\mathbb{P}(X=x,\,Y=y), \qquad p_X(x)=\sum_y p(x,y)$$

*Introduced:* [3.1](lessons/03-01-joint-distributions-covariance.md)

### Covariance

The tilt of the scatter cloud, as a number: average how far $X$ sits from its own
mean times how far $Y$ sits from its. Sign = direction of co-movement; size is
uninterpretable because it carries units.

$$\mathrm{Cov}(X,Y)=\mathbb{E}\big[(X-\mu_X)(Y-\mu_Y)\big]=\mathbb{E}[XY]-\mathbb{E}[X]\mathbb{E}[Y], \qquad \mathrm{Cov}(X,X)=\mathrm{Var}(X)$$

*Introduced:* [3.1](lessons/03-01-joint-distributions-covariance.md)

### Correlation

Covariance with both spreads divided out — a scale-free, unitless measure of how
tightly the cloud hugs a straight line.

$$\rho=\mathrm{Corr}(X,Y)=\frac{\mathrm{Cov}(X,Y)}{\sigma_X\sigma_Y}\in[-1,1]$$

*Introduced:* [3.1](lessons/03-01-joint-distributions-covariance.md)

### i.i.d. and the sample mean

Independent copies of the same experiment, and their average. The average is
**unbiased** for every $n$, and its spread shrinks like $1/\sqrt n$.

$$\bar X_n=\frac{1}{n}\sum_{i=1}^n X_i, \qquad \mathbb{E}[\bar X_n]=\mu, \qquad \mathrm{Var}(\bar X_n)=\frac{\sigma^2}{n}$$

*Introduced:* [3.2](lessons/03-02-sums-and-law-of-large-numbers.md)

### Standard error

The standard deviation of an *estimator*, not of the data. Data scatter with
$\sigma$; the mean of $n$ of them scatters with $\sigma/\sqrt n$.

$$\text{SE}(\bar X)=\frac{\sigma}{\sqrt n}, \qquad \text{estimated SE}=\frac{s}{\sqrt n}$$

*Introduced:* [3.2](lessons/03-02-sums-and-law-of-large-numbers.md), used throughout [4.1](lessons/04-01-estimation-and-mle.md)–[4.3](lessons/04-03-hypothesis-testing.md)

### Law of Large Numbers (weak)

Pick any error window, however tight; the chance the sample mean lands outside it
goes to zero as data pours in. The average piles up on the truth.

$$\mathbb{P}\big(\lvert\bar X_n-\mu\rvert>\varepsilon\big)\to 0 \quad\text{as } n\to\infty \qquad (\bar X_n\to\mu \text{ in probability})$$

*Introduced:* [3.2](lessons/03-02-sums-and-law-of-large-numbers.md)

### Central Limit Theorem

Pile up many independent finite-variance pieces and the sum forgets what its
pieces looked like: only the mean and variance survive, and the shape is a bell.

$$Z_n=\frac{\bar X_n-\mu}{\sigma/\sqrt n}\longrightarrow \mathcal{N}(0,1), \qquad \bar X_n\approx\mathcal{N}\!\Big(\mu,\tfrac{\sigma^2}{n}\Big), \qquad S_n\approx\mathcal{N}(n\mu,\,n\sigma^2)$$

*Introduced:* [3.3](lessons/03-03-central-limit-theorem.md)

### Continuity correction

An integer $k$ owns the strip from $k-\tfrac12$ to $k+\tfrac12$; when a continuous
bell stands in for a discrete count, include that half-unit or you systematically
under-count the boundary.

$$\mathbb{P}(S_n\ge k)\approx\mathbb{P}\big(\mathcal{N}>k-\tfrac12\big), \qquad \mathbb{P}(S_n\le k)\approx\mathbb{P}\big(\mathcal{N}<k+\tfrac12\big)$$

*Introduced:* [3.3](lessons/03-03-central-limit-theorem.md)

### Estimator, bias, consistency

A statistic is any recipe run on the sample; an estimator is one aimed at a
parameter. Because the input is random the output is random. Ask two things: is
it aimed right (bias), and is it tight (SE)?

$$\text{bias}(\hat\theta)=\mathbb{E}[\hat\theta]-\theta, \qquad \text{unbiased} \iff \text{bias}=0, \qquad \text{consistent} \iff \hat\theta\to\theta \text{ as } n\to\infty$$

*Introduced:* [4.1](lessons/04-01-estimation-and-mle.md)

### Sample variance

The average-ish squared spread around $\bar X$. The divisor is $n-1$: you already
spent one degree of freedom locating the center, so deviations from $\bar X$ come
out slightly too small and $n-1$ corrects exactly for it.

$$s^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\bar X)^2, \qquad \mathbb{E}[s^2]=\sigma^2 \ \text{ exactly, for every } n\ge 2$$

The unbiasedness is proved, not asserted, in [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md); it needs no normality and no large $n$.

*Introduced:* [4.1](lessons/04-01-estimation-and-mle.md); *derived in* [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md)

### Sampling distribution

The distribution of an estimator across all the samples you *could* have drawn.
Its center answers "is it biased?", its spread is the standard error.

$$\bar X \approx \mathcal{N}\!\left(\mu,\ \frac{\sigma^2}{n}\right) \quad\text{(by the CLT)}$$

*Introduced:* [4.1](lessons/04-01-estimation-and-mle.md)

### Likelihood and maximum likelihood

Hold the data you actually saw fixed and let $\theta$ vary: which $\theta$ makes
this data likeliest? Maximize the **log**-likelihood — same peak, and it turns a
product into a sum.

$$L(\theta)=\prod_{i=1}^n f(x_i;\theta), \qquad \ell(\theta)=\sum_{i=1}^n \log f(x_i;\theta), \qquad \hat\theta=\arg\max_\theta \ell(\theta)$$

*Introduced:* [4.1](lessons/04-01-estimation-and-mle.md)

### Confidence interval

The CLT read backwards: "$\bar X$ lands within $1.96$ SEs of $\mu$" and "$\mu$ is
within $1.96$ SEs of $\bar X$" are the same statement, so a bracket drawn around
wherever $\bar X$ landed catches $\mu$ at the stated rate.

$$\bar X \pm z_{\alpha/2}\,\frac{\sigma}{\sqrt n} \quad (\sigma \text{ known}), \qquad \bar X \pm t_{n-1,\,\alpha/2}\,\frac{s}{\sqrt n} \quad (\sigma \text{ unknown})$$

*Introduced:* [4.2](lessons/04-02-confidence-intervals.md)

### Margin of error

The half-width of the interval — the "plus or minus" people quote. Meaningless
without its confidence level and its $n$.

$$\text{margin} = z_{\alpha/2}\,\frac{\sigma}{\sqrt n}$$

*Introduced:* [4.2](lessons/04-02-confidence-intervals.md)

### Null and alternative hypothesis

The null is the boring explanation you assume in order to try to embarrass it;
the alternative says which directions of surprise count. You never prove $H_0$ —
you only fail to embarrass it.

$$H_0:\mu=\mu_0 \quad\text{vs.}\quad H_1:\mu\neq\mu_0 \ (\text{two-sided}) \ \text{ or } \ H_1:\mu>\mu_0 \ (\text{one-sided})$$

*Introduced:* [4.3](lessons/04-03-hypothesis-testing.md)

### Test statistic

One number saying how many standard errors the data sit from what the null
predicts. Under $H_0$ it is approximately standard normal, by the CLT.

$$z=\frac{\bar X-\mu_0}{\sigma/\sqrt n}$$

*Introduced:* [4.3](lessons/04-03-hypothesis-testing.md)

### p-value

The probability, **computed assuming $H_0$ is true**, of a statistic at least this
extreme. It is *not* the probability that $H_0$ is true.

$$p=\mathbb{P}\big(\text{data this extreme} \mid H_0\big) = 2\big(1-\Phi(\lvert z\rvert)\big) \ \text{two-sided}, \qquad 1-\Phi(z) \ \text{one-sided}$$

*Introduced:* [4.3](lessons/04-03-hypothesis-testing.md)

### Type I and Type II error, power

Two ways to be wrong: a false alarm (reject a true $H_0$, rate $\alpha$) and a
miss (retain a false $H_0$, rate $\beta$). Power is the chance of catching a real
effect.

$$\text{power}=1-\beta=\mathbb{P}(\text{reject } H_0 \mid H_0 \text{ false})$$

*Introduced:* [4.3](lessons/04-03-hypothesis-testing.md)

### Degrees of freedom

How many coordinates are still free after the constraints. The $n$ deviations
$X_i-\bar X$ obey one linear constraint — they sum to zero — so fixing $n-1$ of
them forces the last. Locating the centre with $\bar X$ costs exactly one.

$$\sum_{i=1}^n (X_i-\bar X)=0 \qquad\Longrightarrow\qquad \nu = n-1$$

*Introduced:* [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md)

### The deviation identity

The one line the $n-1$ divisor rests on: spread around $\bar X$ equals spread
around $\mu$ minus a penalty that is never negative — so deviations from the
*fitted* centre are systematically too small, by exactly one $\sigma^2$ on average.

$$\sum_{i=1}^n (X_i-\bar X)^2=\sum_{i=1}^n (X_i-\mu)^2-n(\bar X-\mu)^2 \quad\Longrightarrow\quad \mathbb{E}\Big[\sum_i (X_i-\bar X)^2\Big]=(n-1)\sigma^2$$

*Introduced:* [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md)

### Chi-square distribution

Add up $k$ independent squared standard normals. Lives on $x>0$, right-skewed,
**not symmetric** — so an interval built from it is not "estimate plus or minus".

$$\chi^2_k=Z_1^2+\cdots+Z_k^2, \qquad \mathbb{E}[\chi^2_k]=k, \qquad \mathrm{Var}(\chi^2_k)=2k, \qquad f(x)\propto x^{k/2-1}e^{-x/2}$$

*Introduced:* [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md)

### Sampling distribution of $s^2$ (Fisher)

For an i.i.d. **normal** sample: the total squared spread, measured in $\sigma^2$
units, is a chi-square on $n-1$ df — and it carries no information about where
the centre landed. Stated in this course, not proved (the proof is a rotation).

$$\frac{(n-1)s^2}{\sigma^2}\sim\chi^2_{n-1}, \qquad s^2 \perp \bar X, \qquad \mathrm{Var}(s^2)=\frac{2\sigma^4}{n-1}$$

*Introduced:* [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md)

### Student's $t$ distribution

A standard normal divided by an independent chi-square rescaled to average 1 —
a bell divided by a wobbling ruler. Symmetric, bell-shaped, **heavier-tailed**
than the normal because the divisor sometimes reads short.

$$T=\frac{Z}{\sqrt{V/\nu}} \ \ (Z\sim\mathcal{N}(0,1),\ V\sim\chi^2_\nu \text{ independent}), \qquad f_\nu(t)=\frac{\Gamma\!\left(\frac{\nu+1}{2}\right)}{\sqrt{\nu\pi}\,\Gamma\!\left(\frac{\nu}{2}\right)}\left(1+\frac{t^2}{\nu}\right)^{-\frac{\nu+1}{2}}$$

Here $\Gamma$ is the gamma function, the factorial extended to non-integers
($\Gamma(m)=(m-1)!$ for a positive integer $m$, $\Gamma(1/2)=\sqrt\pi$); you never
need to evaluate it — the constant only normalizes the area to 1.

$$\mathbb{E}[t_\nu]=0 \ (\nu>1), \qquad \mathrm{Var}(t_\nu)=\frac{\nu}{\nu-2} \ (\nu>2), \qquad t_\nu\to\mathcal{N}(0,1) \text{ as } \nu\to\infty$$

*Introduced:* [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md)

### The one-sample $t$-statistic

Why $t_{n-1}$ is the right reference distribution once $s$ replaces $\sigma$: the
same ratio, assembled. Exact for normal data; the independence of $\bar X$ and
$s^2$ is what makes the definition of $t$ apply.

$$\frac{\bar X-\mu}{s/\sqrt n}=\frac{(\bar X-\mu)\big/(\sigma/\sqrt n)}{s/\sigma}=\frac{Z}{\sqrt{V/(n-1)}}\sim t_{n-1}$$

*Introduced:* [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md)

## Formulas and rules

### Working with events

$$\mathbb{P}(A^c)=1-\mathbb{P}(A) \qquad\qquad \mathbb{P}(A\cup B)=\mathbb{P}(A)+\mathbb{P}(B)-\mathbb{P}(A\cap B)$$

$$\mathbb{P}(A\cap B)=\mathbb{P}(A\mid B)\mathbb{P}(B)=\mathbb{P}(B\mid A)\mathbb{P}(A) \qquad \text{(multiplication rule — walk down a tree)}$$

$$\text{total probability:}\quad \mathbb{P}(E)=\sum_{i=1}^n \mathbb{P}(E\mid B_i)\mathbb{P}(B_i) \quad (B_1,\dots,B_n \text{ partition } \Omega)$$

$$\text{Bayes:}\quad \mathbb{P}(H\mid E)=\frac{\mathbb{P}(E\mid H)\mathbb{P}(H)}{\mathbb{P}(E)}$$

**The complement trick** is the most-used line in the subject: "at least one" is
the complement of "none," and a messy union usually has a single clean opposite.
The law of total probability is how you assemble the denominator Bayes needs.

*From* [1.1](lessons/01-01-sample-spaces-events-axioms.md) *and* [1.2](lessons/01-02-conditional-probability-bayes.md)

### Counting (used but not derived here)

| Job | Count |
|---|---|
| arrange $k$ of $n$ items, **order matters** (permutation) | $\dfrac{n!}{(n-k)!}$ |
| choose $k$ of $n$ items, **order irrelevant** (combination) | $\dbinom{n}{k}=\dfrac{n!}{k!\,(n-k)!}$ |
| arrange all $n$ | $n!$ (with $0!=1$) |

Use $\binom{n}{k}$ for hands of cards, committees, or *which* trials succeeded —
that last one is the binomial coefficient in the binomial pmf.

*From* [1.1](lessons/01-01-sample-spaces-events-axioms.md); see *Assumed, not taught here*

### Expectation and variance algebra

$$\mathbb{E}[aX+bY]=a\mathbb{E}[X]+b\mathbb{E}[Y] \qquad \textbf{always — even for dependent } X,Y$$

$$\mathrm{Var}(aX+b)=a^2\mathrm{Var}(X) \qquad \mathrm{Var}(X\pm Y)=\mathrm{Var}(X)+\mathrm{Var}(Y)\pm 2\mathrm{Cov}(X,Y)$$

$$\mathrm{Var}(aX+bY)=a^2\mathrm{Var}(X)+b^2\mathrm{Var}(Y)+2ab\,\mathrm{Cov}(X,Y) \qquad \mathrm{Cov}(aX,bY)=ab\,\mathrm{Cov}(X,Y)$$

$$X,Y \text{ independent} \Rightarrow \mathbb{E}[XY]=\mathbb{E}[X]\mathbb{E}[Y] \Rightarrow \mathrm{Cov}=0 \qquad (\text{the converse is false})$$

**The indicator trick:** to find $\mathbb{E}[\text{count}]$, write the count as a
sum of 0/1 indicators and add their individual means. Linearity never asks how
they relate, so dependence costs you nothing — this is how the binomial's mean
$np$ falls out in one line.

*From* [2.1](lessons/02-01-expectation-variance-moments.md) *and* [3.1](lessons/03-01-joint-distributions-covariance.md)

### The discrete distributions

| Family | pmf $\mathbb{P}(X=k)$ | Mean | Variance | Reach for it when |
|---|---|---|---|---|
| Bernoulli($p$) | $p$ at $k=1$, $1-p$ at $k=0$ | $p$ | $p(1-p)$ | one yes/no trial |
| Binomial($n,p$) | $\dbinom{n}{k}p^k(1-p)^{n-k}$, $k=0,\dots,n$ | $np$ | $np(1-p)$ | successes in a **fixed** number of independent trials |
| Geometric($p$) | $(1-p)^{k-1}p$, $k=1,2,\dots$ | $\dfrac1p$ | $\dfrac{1-p}{p^2}$ | trials **up to and including** the first success; memoryless |
| Poisson($\lambda$) | $\dfrac{e^{-\lambda}\lambda^k}{k!}$, $k=0,1,\dots$ | $\lambda$ | $\lambda$ | rare events per fixed interval, **no ceiling** on the count |

Decision cue in four words: *one trial / fixed trials / wait-for-success /
events-per-interval*. Mean $=$ variance $=\lambda$ is the Poisson's signature; no
other family here shares it.

*From* [2.2](lessons/02-02-discrete-distributions.md)

### The continuous distributions

| Family | pdf $f(x)$ | Mean | Variance | Reach for it when |
|---|---|---|---|---|
| Uniform($a,b$) | $\dfrac{1}{b-a}$ on $[a,b]$ | $\dfrac{a+b}{2}$ | $\dfrac{(b-a)^2}{12}$ | you know only the range, no spot favored |
| Exponential($\lambda$) | $\lambda e^{-\lambda x}$, $x\ge 0$ | $\dfrac1\lambda$ | $\dfrac{1}{\lambda^2}$ | waiting time until the next Poisson event; memoryless |
| Normal $\mathcal{N}(\mu,\sigma^2)$ | $\dfrac{1}{\sigma\sqrt{2\pi}}e^{-(x-\mu)^2/2\sigma^2}$ | $\mu$ | $\sigma^2$ | sums or averages of many independent pieces (the CLT's destination) |

Exponential tail and CDF, worth having cold:

$$\mathbb{P}(X>t)=e^{-\lambda t}, \qquad F(x)=1-e^{-\lambda x}$$

**The Poisson–exponential bridge:** one process, two questions. *How many* in a
fixed window is Poisson($\lambda$); *how long* until the next is
Exponential($\lambda$). "Zero arrivals in the first second" and "the first arrival
comes after one second" are the identical event.

*From* [2.3](lessons/02-03-continuous-distributions.md) *and* [2.2](lessons/02-02-discrete-distributions.md)

### Standard-normal values

$\Phi(z)$ is the area to the **left** of $z$. No lesson tabulates these; this is
the table the worked examples and problems quote from.

| $z$ | $\Phi(z)$ | | $z$ | $\Phi(z)$ |
|---|---|---|---|---|
| $0$ | $0.500$ | | $1.645$ | $0.950$ |
| $0.5$ | $0.691$ | | $1.9$ | $0.971$ |
| $0.9$ | $0.816$ | | $1.96$ | $0.975$ |
| $1.0$ | $0.841$ | | $2.0$ | $0.977$ |
| $1.28$ | $0.900$ | | $2.4$ | $0.992$ |
| $1.5$ | $0.933$ | | $2.576$ | $0.995$ |

$$\Phi(-z)=1-\Phi(z), \qquad \mathbb{P}(Z>z)=1-\Phi(z), \qquad \mathbb{P}(-z<Z<z)=2\Phi(z)-1$$

**68–95–99.7:** about 68 percent of a normal's mass lies within $\pm1\sigma$ of
$\mu$, 95 percent within $\pm2\sigma$, 99.7 percent within $\pm3\sigma$.

*From* [2.3](lessons/02-03-continuous-distributions.md) *and* [3.3](lessons/03-03-central-limit-theorem.md)

### Sums, averages, and the limit theorems

For i.i.d. $X_i$ with mean $\mu$ and variance $\sigma^2$:

| Quantity | Mean | Variance | SD |
|---|---|---|---|
| one $X_i$ | $\mu$ | $\sigma^2$ | $\sigma$ |
| sum $S_n$ | $n\mu$ | $n\sigma^2$ | $\sqrt n\,\sigma$ — **grows** |
| mean $\bar X_n$ | $\mu$ | $\sigma^2/n$ | $\sigma/\sqrt n$ — **shrinks** |

$$\text{Chebyshev:}\quad \mathbb{P}\big(\lvert Y-\mathbb{E}[Y]\rvert\ge\varepsilon\big)\le\frac{\mathrm{Var}(Y)}{\varepsilon^2} \ \Longrightarrow\ \mathbb{P}\big(\lvert\bar X_n-\mu\rvert\ge\varepsilon\big)\le\frac{\sigma^2}{n\varepsilon^2}$$

$$\text{CLT:}\quad \mathbb{P}(\bar X_n\le x)\approx\Phi\!\left(\frac{x-\mu}{\sigma/\sqrt n}\right), \qquad \mathbb{P}(S_n\le x)\approx\Phi\!\left(\frac{x-n\mu}{\sigma\sqrt n}\right)$$

Chebyshev is assumption-free and therefore **loose** — it gives a guaranteed
sample size; the CLT, by naming the shape, typically needs an order of magnitude
fewer observations for the same tolerance. LLN says *whether*; CLT says *how
much*.

*From* [3.2](lessons/03-02-sums-and-law-of-large-numbers.md) *and* [3.3](lessons/03-03-central-limit-theorem.md)

### Critical values

| Confidence $1-\alpha$ | $\alpha/2$ | two-sided $z_{\alpha/2}$ | one-sided $z_\alpha$ |
|---|---|---|---|
| 90 percent | $0.05$ | $1.645$ | $1.282$ |
| 95 percent | $0.025$ | $1.96$ | $1.645$ |
| 99 percent | $0.005$ | $2.576$ | $2.326$ |

Student's $t$ multipliers for a 95 percent two-sided interval, $t_{\nu,\,0.025}$
with $\nu=n-1$ degrees of freedom (no lesson tabulates these; 4.2 quotes the
$\nu=15$ row and 4.4 the $\nu=5$ and $\nu=30$ rows):

| $\nu=n-1$ | 5 | 10 | 15 | 20 | 25 | 30 | $\infty$ |
|---|---|---|---|---|---|---|---|
| $t_{\nu,\,0.025}$ | $2.571$ | $2.228$ | $2.131$ | $2.086$ | $2.060$ | $2.042$ | $1.960$ |

Always $t_{\nu,\alpha/2}>z_{\alpha/2}$ — the extra width is the price of having
estimated $\sigma$ by $s$. The gap all but closes by $n\approx 30$: the multiplier
is 31 percent above $1.96$ at $\nu=5$, 9 percent at $\nu=15$, 4 percent at
$\nu=30$. That last number **is** the "use $z$ above $n=30$" rule of thumb.

What it costs to ignore this — the true coverage of an interval built with $1.96$
when $t_\nu$ is the honest reference:

| $\nu=n-1$ | 5 | 15 | 30 |
|---|---|---|---|
| true coverage of the "95 percent" interval | $0.893$ | $0.931$ | $0.941$ |

*From* [4.2](lessons/04-02-confidence-intervals.md) *and* [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md)

### Inference recipes

$$\text{point estimates:}\quad \bar X=\frac1n\sum X_i, \qquad s^2=\frac{1}{n-1}\sum (X_i-\bar X)^2, \qquad \text{SE}=\frac{s}{\sqrt n}$$

$$\text{MLE:}\quad \ell(\theta)=\sum_i \log f(x_i;\theta), \quad \text{solve } \ell'(\theta)=0, \quad \text{confirm } \ell''(\theta)<0$$

$$\text{CI for a mean:}\quad \bar X\pm z_{\alpha/2}\frac{\sigma}{\sqrt n} \ (\sigma \text{ known}) \qquad \bar X\pm t_{n-1,\alpha/2}\frac{s}{\sqrt n} \ (\sigma \text{ unknown})$$

$$\text{sample size for margin } m:\quad n\ \ge\ \left(\frac{z_{\alpha/2}\,\sigma}{m}\right)^2 \quad \text{(always round \textbf{up})}$$

$$\text{test:}\quad z=\frac{\bar X-\mu_0}{\sigma/\sqrt n}, \qquad \text{reject } H_0 \text{ when } p<\alpha \ \Longleftrightarrow\ \lvert z\rvert>z_{\alpha/2} \ (\text{two-sided})$$

Two MLEs worth remembering because they're the archetypes: $k$ successes in $n$
Bernoulli trials gives $\hat p=k/n$; an i.i.d. Exponential($\lambda$) sample gives
$\hat\lambda=1/\bar X$ (one over the average wait).

**CI–test duality.** Build the interval and you have run every two-sided test at
once:

$$\text{reject } H_0:\mu=\mu_0 \text{ at level } \alpha \iff \mu_0 \text{ lies outside the } (1-\alpha) \text{ CI}$$

**The two errors.**

| | $H_0$ true | $H_0$ false |
|---|---|---|
| **reject $H_0$** | Type I error (rate $\alpha$) | correct (probability $1-\beta$ = power) |
| **retain $H_0$** | correct | Type II error (rate $\beta$) |

Lowering $\alpha$ guards against false alarms but raises $\beta$; the only fix for
both at once is a larger $n$, which shrinks $\sigma/\sqrt n$ and sharpens
everything. Because every width and every SE scales like $1/\sqrt n$: **halving
your uncertainty costs four times the data.**

*From* [4.1](lessons/04-01-estimation-and-mle.md), [4.2](lessons/04-02-confidence-intervals.md), *and* [4.3](lessons/04-03-hypothesis-testing.md)

## Assumed, not taught here

This is a Tier 0 refresher: it uses the following without deriving them. The
formulas you need are tabulated above — this table says where the *why* lives.

| Fact | Where it's taught |
|---|---|
| Sets, subsets, union/intersection/complement, partitions | [proofs-primer 3.1](../proofs-primer/lessons/03-01-sets-and-element-method.md) |
| Factorials and the multiplication (stage-by-stage) counting rule | [discrete-math-intro 3.1](../discrete-math-intro/lessons/03-01-counting-rules-and-permutations.md) |
| Permutations, combinations, and $\binom{n}{k}$ | [discrete-math-intro 3.2](../discrete-math-intro/lessons/03-02-combinations-and-clever-counts.md) |
| Sigma notation, index shifting | [precalculus 3.2](../precalculus/lessons/03-02-sequences-and-sigma-notation.md) |
| Geometric series $\sum ar^k = a/(1-r)$ (behind the geometric pmf summing to 1, and its mean $1/p$) | [precalculus 3.3](../precalculus/lessons/03-03-series-and-infinite-geometric-sum.md) |
| $e^x$, $\ln$, and the log-of-a-product rule that turns $L$ into $\ell$ | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |
| The series $e^x=\sum x^n/n!$, behind the Poisson pmf summing to 1 and its Poisson limit | [calc-refresher 3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md) |
| Derivative rules and the chain rule (differentiating $\ell(\theta)$) | [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) |
| Set the derivative to zero, check the second derivative — the whole of MLE | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Integration by substitution and by parts (means and variances of densities) | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Improper integrals: a density on an infinite range still totalling 1 | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| The Gaussian integral $\int_{-\infty}^{\infty} e^{-x^2/2}dx=\sqrt{2\pi}$ — the bell's normalizer | [calc-refresher 4.3](../calc-refresher/lessons/04-03-multiple-integrals.md) (polar-coordinates trick) |
| Chebyshev's inequality — stated and used in 3.2, proved from Markov | [probability-theory 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md) |
| Cauchy–Schwarz, the reason $\lvert\rho\rvert\le 1$ | [probability-theory 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md); the inner-product version is [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |

Two rows above used to say "taught nowhere." They now have a home:

| Fact | Where it's taught |
|---|---|
| Student's $t$: its density, its degrees of freedom, and why replacing $\sigma$ by $s$ produces exactly $t_{n-1}$ | [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md) — the chi-square is built there too |
| The unbiasedness of $s^2$ under the $n-1$ divisor, $\mathbb{E}[s^2]=\sigma^2$ | [4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md), proved in full from the deviation identity |

One thing 4.4 itself states without proving, and where the proof lives:

| Fact | Where it's taught |
|---|---|
| $(n-1)s^2/\sigma^2\sim\chi^2_{n-1}$ and its independence from $\bar X$ (Fisher's theorem) — a rotation argument | not yet built; the orthogonality it needs is [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) and [4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md), and `econometrics` is the eventual home |

## Pitfalls

### Events, counting, and conditioning

- $\mathbb{P}(A\cup B)=\mathbb{P}(A)+\mathbb{P}(B)$ only for **disjoint** events; otherwise subtract the overlap. *([1.1](lessons/01-01-sample-spaces-events-axioms.md))*
- $\lvert A\rvert/\lvert\Omega\rvert$ needs genuine symmetry. Two dice: count over the 36 ordered **pairs**, never over the 11 sums. *([1.1](lessons/01-01-sample-spaces-events-axioms.md))*
- $\mathbb{P}(A\mid B)\neq\mathbb{P}(B\mid A)$. Swapping them is the prosecutor's fallacy: sensitivity $0.99$ can sit beside a posterior of $0.17$. *([1.2](lessons/01-02-conditional-probability-bayes.md))*
- A high-accuracy test doesn't settle the matter — the **prior** controls the posterior. Rare condition, so distrust a lone positive. *([1.2](lessons/01-02-conditional-probability-bayes.md))*
- Independent is not disjoint — they're nearly opposite. Check $\mathbb{P}(A\cap B)=\mathbb{P}(A)\mathbb{P}(B)$ arithmetically; don't eyeball it. *([1.2](lessons/01-02-conditional-probability-bayes.md))*

### Densities and distributions

- $f(x)$ is **not** a probability and may exceed 1 — Uniform$(0,0.5)$ has height 2. Only areas are probabilities. *([1.3](lessons/01-03-random-variables-distributions.md), [2.3](lessons/02-03-continuous-distributions.md))*
- For continuous $X$, $\mathbb{P}(X=c)=0$, so $\le$ and $<$ are interchangeable. In the **discrete** case they are not — the endpoint carries real mass. *([1.3](lessons/01-03-random-variables-distributions.md))*
- The jump in $F$ at $x$ **equals** $p(x)$ — they're one number seen twice. Use one view per question, don't add both. *([1.3](lessons/01-03-random-variables-distributions.md))*
- $\Phi$ is the **left** tail: $\mathbb{P}(X>73)$ is $1-\Phi(1)$, not $\Phi(1)$. Always ask which side you want. *([2.3](lessons/02-03-continuous-distributions.md))*

### Naming the family

- Binomial has a hard ceiling $n$; Poisson has none. Reach for Poisson only when the count is unbounded, or as the large-$n$ small-$p$ approximation. *([2.2](lessons/02-02-discrete-distributions.md))*
- Two geometric conventions exist. Ours counts trials **including** the success ($k\ge1$, mean $1/p$); the other counts failures before it ($k\ge0$). The mean tells you which you're holding. *([2.2](lessons/02-02-discrete-distributions.md))*
- The mean is not the mode. A right-skewed Poisson peaks just *below* $\lambda$; the tail drags the mean up. *([2.2](lessons/02-02-discrete-distributions.md))*
- "I've waited 10 minutes, so it's due" is false for a memoryless wait — the expected remaining wait is still the full $1/\lambda$. *([2.3](lessons/02-03-continuous-distributions.md))*

### Expectation, variance, and dependence

- $\mathbb{E}[g(X)]\neq g(\mathbb{E}[X])$. LOTUS reweights $g$ by the probabilities; it does not shortcut through the mean. That gap *is* the variance when $g(x)=x^2$. *([2.1](lessons/02-01-expectation-variance-moments.md))*
- Variance is in **squared** units — that's why $\sigma$ exists. *([2.1](lessons/02-01-expectation-variance-moments.md))*
- $\mathrm{Var}(X+Y)\neq\mathrm{Var}(X)+\mathrm{Var}(Y)$ in general — you're missing $2\mathrm{Cov}(X,Y)$. Linearity is free for the mean, never for the variance. And standard deviations never add, not even when covariance vanishes. *([2.1](lessons/02-01-expectation-variance-moments.md), [3.1](lessons/03-01-joint-distributions-covariance.md))*
- $\rho=0$ means no *linear* relationship, not no relationship: $Y=X^2$ with symmetric $X$ is perfectly determined yet uncorrelated. Zero correlation is far weaker than independence. *([3.1](lessons/03-01-joint-distributions-covariance.md))*
- A big covariance means nothing on its own — it carries units and scale. Normalize to $\rho$ before judging strength. *([3.1](lessons/03-01-joint-distributions-covariance.md))*

### Averages and the limit theorems

- The gambler's fallacy, precisely: the **proportion** converges to $\tfrac12$ because $\sigma/\sqrt n\to0$, while the **surplus** $S_n-n\mu$ typically *widens* like $\sqrt n$. Averages self-correct; sums do not. *([1.1](lessons/01-01-sample-spaces-events-axioms.md), [3.2](lessons/03-02-sums-and-law-of-large-numbers.md))*
- "Variances add" is where independence does its work. Positively correlated draws make $\mathrm{Var}(S_n)$ exceed $n\sigma^2$, and averaging cancels noise more slowly. *([3.2](lessons/03-02-sums-and-law-of-large-numbers.md))*
- LLN and CLT are different statements and both hold: one kills the wobble, the other names its shape on the way out. *([3.3](lessons/03-03-central-limit-theorem.md))*
- The CLT does **not** require normal data — it requires i.i.d. with **finite variance**. Heavy tails break it; heavy skew just needs a larger $n$. And it's the sum or average that bells out, never the raw data points. *([3.3](lessons/03-03-central-limit-theorem.md))*
- Approximating a discrete count without the continuity correction is a systematic error, not a rounding one (0.159 versus the exact 0.184 in a Binomial(100, 0.5) tail). *([3.3](lessons/03-03-central-limit-theorem.md))*

### Estimation and inference

- Unbiased is only about the *center* of the sampling distribution — a wildly scattered unbiased estimator is still useless. You want low bias **and** small SE. *([4.1](lessons/04-01-estimation-and-mle.md))*
- SE is the SD of the **estimator**, not of the data: $\sigma$ versus $\sigma/\sqrt n$. Confusing them is the most common inference error there is. *([4.1](lessons/04-01-estimation-and-mle.md))*
- Dividing $s^2$ by $n$ systematically **underestimates** $\sigma^2$, because deviations are measured from $\bar X$, which sits inside the data. *([4.1](lessons/04-01-estimation-and-mle.md))*
- "95 percent probability $\mu$ is in this interval" is wrong. $\mu$ is fixed and the interval is now fixed, so it's already in or out; the 95 belongs to the **procedure** over repeated sampling. *([4.2](lessons/04-02-confidence-intervals.md))*
- $z=1.96$ only when $\sigma$ is **known**. If you estimated the spread with $s$, use $t_{n-1,\alpha/2}$ — ignoring this makes small-sample intervals dishonestly narrow. *([4.2](lessons/04-02-confidence-intervals.md))*
- A wider interval isn't worse, it's more cautious. A quoted "plus or minus" without its confidence level and its $n$ means nothing. *([4.2](lessons/04-02-confidence-intervals.md))*
- A p-value is $\mathbb{P}(\text{data}\mid H_0)$, never $\mathbb{P}(H_0\mid\text{data})$. It cannot give you the probability of a hypothesis. *([4.3](lessons/04-03-hypothesis-testing.md))*
- Failing to reject is "insufficient evidence," not proof of $H_0$ — it also happens when $n$ is simply too small. *([4.3](lessons/04-03-hypothesis-testing.md))*
- The $0.05$ threshold is a convention: treat $p=0.051$ and $p=0.049$ as the same thing. Run 20 tests and expect one "significant" result by chance alone. *([4.3](lessons/04-03-hypothesis-testing.md))*
- $s^2$ is unbiased for $\sigma^2$, but $s$ is **not** unbiased for $\sigma$ — $\mathbb{E}[s]<\sigma$, because the square root is concave. Unbiasedness does not survive a nonlinear transformation. *([4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md))*
- The $t$ does not rescue you from non-normal data. It is *exact* for normal data and fixes exactly one problem: an unknown $\sigma$ replaced by a random $s$. Small-$n$ skew breaks the $t$ interval as badly as the $z$ interval; the fix is more data, not a bigger multiplier. *([4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md))*
- Degrees of freedom is not the sample size — it's what's left after the constraints, one lost per fitted parameter. And $\chi^2_k$ is **not symmetric**, so an interval for $\sigma^2$ is never "estimate plus or minus"; you read two different tails. *([4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md))*
- Variances are far noisier than means: $\mathrm{SD}(s^2)/\sigma^2=\sqrt{2/(n-1)}$, which is 50 percent at $n=9$. Pinning a variance to 10 percent takes $n\ge 201$. That noise is exactly what fattens the $t$ tails at small $n$. *([4.4](lessons/04-04-sampling-distributions-t-and-chi-square.md))*
