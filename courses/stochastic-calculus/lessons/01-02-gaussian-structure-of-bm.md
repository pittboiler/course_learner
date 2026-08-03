# Stochastic Calculus · Lesson 1.2: The Gaussian structure of BM

> ⏱ ~15 min · Module 1: Brownian motion · Builds on: [1.1 Random walks to Brownian motion](01-01-random-walks-to-brownian-motion.md) · Unlocks: [1.3 Filtrations, adaptedness, and the Markov property](01-03-filtrations-adaptedness-markov.md)

## Why this matters

Brownian motion is a **Gaussian process**, and that is enormously convenient: a Gaussian is completely pinned down by its mean and covariance, so *everything* about BM — any joint distribution, any correlation, any best linear prediction — is computable from two functions, $\mathbb{E}[W_t] = 0$ and $\text{Cov}(W_s, W_t) = \min(s,t)$. No higher moments to chase, no messy dependence structure. This single covariance formula is the workhorse you'll reach for constantly: to compute variances of Itô integrals, to check whether a process is a martingale, to predict the future from the present. Master $\min(s,t)$ and you can compute nearly anything about BM by hand.

## The idea

Two facts combine. First, **joint normality**: any finite collection $(W_{t_1}, \ldots, W_{t_k})$ is jointly Gaussian, because each $W_{t_i}$ is a sum of independent Gaussian increments, and stacking independent normals through linear combinations keeps everything normal. So the *entire* finite-dimensional structure of BM is a big multivariate normal — determined by means (all zero) and covariances.

Second, the **covariance is the shared history**. Ask how correlated $W_s$ and $W_t$ are for $s < t$. Write $W_t = W_s + (W_t - W_s)$: the value at $t$ is the value at $s$ plus a *fresh, independent* increment over $(s, t]$. Since that increment is independent of everything up to time $s$, it contributes nothing to the covariance with $W_s$. What's left is the variance of the part they *share* — the history up to the earlier time $s$ (the picture). Hence $\text{Cov}(W_s, W_t) = \text{Var}(W_s) = s = \min(s,t)$. The covariance is just "how much past do these two moments have in common."

Once you have this, prediction is free: because everything is jointly Gaussian, the best prediction of a later (or earlier) value given an observed one is a simple linear regression, with the slope read straight off the covariance.

## The formal version

Brownian motion is a **Gaussian process**: for any $0 \leq t_1 < \cdots < t_k$, the vector $(W_{t_1}, \ldots, W_{t_k})$ has a multivariate normal distribution. A Gaussian process is *completely determined* by its **mean function** $m(t) = \mathbb{E}[W_t]$ and **covariance function** $K(s,t) = \text{Cov}(W_s, W_t)$. For standard BM,

$$m(t) = 0, \qquad K(s,t) = \text{Cov}(W_s, W_t) = \min(s,t).$$

*In words:* BM is the mean-zero Gaussian process whose covariance between two times is the earlier time — this pair of facts is equivalent to the four defining properties from [1.1](01-01-random-walks-to-brownian-motion.md). **Conditioning** is then pure Gaussian algebra: for jointly normal $(X, Y)$,

$$\mathbb{E}[Y \mid X] = \mathbb{E}[Y] + \frac{\text{Cov}(X,Y)}{\text{Var}(X)}\big(X - \mathbb{E}[X]\big).$$

*In words:* the best estimate of one Gaussian given another is a straight line through the means with slope $\text{Cov}/\text{Var}$ — and for BM every ingredient is a $\min$.

## Picture

![Two overlapping time intervals [0,s] and [0,t]; their shared portion has length min(s,t), which is the covariance](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (deriving $\text{Cov}(W_s, W_t) = \min(s,t)$).** Take $s < t$. Decompose $W_t = W_s + (W_t - W_s)$. Then

$$\text{Cov}(W_s, W_t) = \text{Cov}(W_s,\, W_s) + \text{Cov}\big(W_s,\, W_t - W_s\big).$$

The first term is $\text{Var}(W_s) = s$. The second is $0$: the increment $W_t - W_s$ lives on the window $(s,t]$, which is disjoint from $[0,s]$, and BM has **independent increments** — independent random variables have zero covariance. Since $W_s = W_s - W_0$ is itself an increment over $[0,s]$, disjoint from $(s,t]$. So $\text{Cov}(W_s, W_t) = s = \min(s,t)$. (By symmetry, for general $s, t$ it's $\min(s,t)$.) This one computation underlies almost every BM variance you'll ever need.

**Example 2 (predicting the past from the future).** Given you observe $W_t$, what's your best estimate of an earlier value $W_s$ (with $s < t$)? Both are mean zero and jointly Gaussian, with $\text{Cov}(W_s, W_t) = s$ and $\text{Var}(W_t) = t$. The regression formula gives

$$\mathbb{E}[W_s \mid W_t] = \frac{\text{Cov}(W_s, W_t)}{\text{Var}(W_t)}\,W_t = \frac{s}{t}\,W_t.$$

So the best guess of where the path was at the earlier time $s$ is the fraction $s/t$ of where it ended up — a straight-line interpolation back toward the origin (since $W_0 = 0$). Conversely, predicting the *future* from the present, $\mathbb{E}[W_t \mid W_s] = \frac{\min(s,t)}{s}W_s = \frac{s}{s}W_s = W_s$ for $s<t$: the best forecast of a future value is *the current value* — a first glimpse of the martingale property ([1.5](01-05-quadratic-variation-martingale-property.md)).

## Watch out

- **You might write $\text{Cov}(W_s, W_t) = st$ or $s+t$.** It's $\min(s,t)$ — the *smaller* time. The intuition ("shared history up to the earlier moment") is the guardrail: two times can only share the past they both have, which ends at the earlier one.
- **You might think uncorrelated would mean independent here — or vice versa.** For *jointly Gaussian* variables, zero covariance **does** imply independence (a special, powerful feature of the normal). That's exactly why "independent increments" and "zero-covariance increments" coincide for BM. Outside the Gaussian world this equivalence fails.
- **You might forget the increments, not the values, are independent.** $W_s$ and $W_t$ are *correlated* (covariance $\min(s,t) > 0$). It's the non-overlapping *increments* $W_s - W_0$ and $W_t - W_s$ that are independent. Decompose into increments before invoking independence.

## One-liner

> Brownian motion is the mean-zero Gaussian process with covariance $\text{Cov}(W_s, W_t) = \min(s,t)$ — the shared history up to the earlier time — and that one formula computes every moment, correlation, and Gaussian prediction about it.

## Problems

**P1 (🟢)** Using $\text{Cov}(W_s, W_t) = \min(s,t)$, compute $\text{Var}(W_t - W_s)$ for $s < t$ directly from $\text{Var}(W_t) + \text{Var}(W_s) - 2\text{Cov}(W_s, W_t)$, and confirm it equals $t - s$.

**P2 (🟡)** Compute $\mathbb{E}[W_s W_t W_u]$ for $s < t < u$. *Hint:* $W_s W_t W_u$ is an odd function of a mean-zero jointly Gaussian vector — think about symmetry ($W \mapsto -W$) before computing anything.

**P3 (🔴, optional)** The **Brownian bridge** is BM conditioned to return to $0$ at time $1$: $B_t = (W_t \mid W_1 = 0)$ for $t \in [0,1]$. Using the Gaussian conditioning formula, find $\mathbb{E}[B_t]$ and show $\text{Cov}(B_s, B_t) = \min(s,t) - st$. *Hint:* condition the pair $(W_s, W_t)$ jointly on $W_1 = 0$, or use $\text{Cov}(W_s, W_t \mid W_1) = \text{Cov}(W_s,W_t) - \frac{\text{Cov}(W_s,W_1)\text{Cov}(W_t,W_1)}{\text{Var}(W_1)}$.

<details>
<summary>Solutions</summary>

**P1** $\text{Var}(W_t - W_s) = \text{Var}(W_t) + \text{Var}(W_s) - 2\text{Cov}(W_s, W_t) = t + s - 2\min(s,t) = t + s - 2s = t - s$ (using $\min(s,t) = s$ for $s<t$). ✓ Matches the defining property $W_t - W_s \sim \mathcal{N}(0, t-s)$.

**P2** The vector $(W_s, W_t, W_u)$ is mean-zero jointly Gaussian, so its distribution is symmetric under $W \mapsto -W$. The product $W_s W_t W_u$ is an *odd* function (flips sign under $W \mapsto -W$), so its expectation equals its own negative: $\mathbb{E}[W_s W_t W_u] = -\mathbb{E}[W_s W_t W_u]$, hence $\mathbb{E}[W_s W_t W_u] = 0$. (All odd moments of a mean-zero Gaussian vanish — no computation needed.)

**P3** Conditioning is linear-Gaussian. $\mathbb{E}[B_t] = \mathbb{E}[W_t \mid W_1 = 0] = \frac{\text{Cov}(W_t, W_1)}{\text{Var}(W_1)}\cdot 0 = 0$. For the covariance, use the conditional-covariance formula with $\text{Cov}(W_s,W_1)=s$, $\text{Cov}(W_t,W_1)=t$, $\text{Var}(W_1)=1$:

$$\text{Cov}(B_s, B_t) = \text{Cov}(W_s, W_t) - \frac{\text{Cov}(W_s,W_1)\,\text{Cov}(W_t,W_1)}{\text{Var}(W_1)} = \min(s,t) - \frac{s\cdot t}{1} = \min(s,t) - st.$$

Check: at $t=1$, $\text{Cov}(B_s, B_1) = s - s = 0$ — the bridge is pinned to $0$ at the endpoint, as it must be. ∎

</details>

## Connections

- **Backward:** joint normality is the CLT/independent-increment structure of [1.1](01-01-random-walks-to-brownian-motion.md) crystallized into one covariance; the conditioning formula is Gaussian regression from [`probability-theory`](../../probability-theory/syllabus.md).
- **Forward:** $\mathbb{E}[W_t \mid W_s] = W_s$ previews the martingale property ([1.5](01-05-quadratic-variation-martingale-property.md)); the covariance $\min(s,t)$ reappears when we compute variances of Itô integrals via the isometry ([2.3](02-03-ito-isometry-general-integral.md)).
- **Sideways (statistics):** a Gaussian process with a chosen covariance kernel is the object behind Gaussian-process regression and Kriging; BM's $\min(s,t)$ kernel is the simplest nontrivial example.
