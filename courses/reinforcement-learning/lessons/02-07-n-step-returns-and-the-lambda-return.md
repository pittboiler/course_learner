# Reinforcement Learning · Lesson 2.7: n-step returns and the λ-return

> ⏱ ~15 min · Module 2: Model-Free Prediction & Control · Builds on: [2.3 (temporal-difference learning)](02-03-temporal-difference-learning-td0.md), [2.1 (Monte Carlo prediction)](02-01-monte-carlo-prediction.md) · Unlocks: [2.8 (eligibility traces)](02-08-eligibility-traces-backward-view.md), [4.2 (A2C, A3C and advantage estimation)](04-02-a2c-a3c-advantage-estimation.md)

## Why this matters

Module 2 has presented TD(0) and Monte Carlo as rivals. They are not — they are the two ends of a continuum, and **on most problems both ends are worse than the middle.**

That is not a philosophical point. On the standard benchmark below, one-step TD reaches an error of $0.200$, Monte Carlo reaches $0.462$, and a two-step return reaches $0.143$. The best method is neither of the ones you have been taught, and the interpolation parameter is a genuine tuning knob with a real optimum.

The construction that follows — averaging all the $n$-step returns with geometric weights — is also how [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)'s generalized advantage estimation works, and the mechanism that makes it computable online is [Lesson 2.8](02-08-eligibility-traces-backward-view.md)'s eligibility traces.

## The idea

TD(0) uses one real reward and then guesses. Monte Carlo uses every real reward and never guesses. Nothing forces the choice:

$$\begin{aligned} n=1:\quad & G_t^{(1)} = R_{t+1} + \gamma V(S_{t+1}) \\ n=2:\quad & G_t^{(2)} = R_{t+1} + \gamma R_{t+2} + \gamma^2 V(S_{t+2}) \\ &\ \vdots \\ n=\infty:\quad & G_t^{(\infty)} = R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{T-t-1}R_T = G_t \end{aligned}$$

**Use $n$ real rewards, then bootstrap.** Larger $n$ means less bias (more of the target is real) and more variance (more random rewards accumulate). The optimum is interior.

Then a second idea, which is the one that pays. Rather than picking a single $n$, **average all of them** with weights that decay geometrically. The resulting target is the **λ-return**, and it turns out to be far more robust to the choice of its parameter than $n$-step returns are to the choice of $n$.

## The formal version

**The $n$-step return and its update.**

$$G_t^{(n)} = \sum_{k=1}^{n}\gamma^{k-1}R_{t+k} \;+\; \gamma^{n}V(S_{t+n}), \qquad V(S_t) \leftarrow V(S_t) + \alpha\big[G_t^{(n)} - V(S_t)\big]$$

with the convention that if $t+n \ge T$ the bootstrap term is dropped and $G_t^{(n)} = G_t$. *(card: [n-step return](../reference.md#n-step-return))*

**The cost: you must wait $n$ steps.** The update for $S_t$ cannot be made until $R_{t+n}$ and $S_{t+n}$ are known, so an $n$-step method is $n$ steps behind. That delay is what [Lesson 2.8](02-08-eligibility-traces-backward-view.md) removes.

**The error-reduction property.** The worst-case error of the $n$-step target is no worse than $\gamma^n$ times the worst-case error of the current estimate:

$$\max_s\big|\mathbb{E}_\pi[G_t^{(n)}\mid S_t = s] - V^\pi(s)\big| \;\le\; \gamma^n \max_s\big|V(s) - V^\pi(s)\big|$$

This is [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s contraction applied $n$ times — and it guarantees that $n$-step TD converges for every $n$. **Larger $n$ contracts harder**, which is the bias half of the trade-off stated precisely.

**The λ-return.** Average every $n$-step return with weight $(1-\lambda)\lambda^{n-1}$:

$$G_t^\lambda = (1-\lambda)\sum_{n=1}^{\infty}\lambda^{n-1}G_t^{(n)}$$

In words: a geometrically decaying average of all lookahead depths. The factor $(1-\lambda)$ normalizes: $\sum_{n\ge1}(1-\lambda)\lambda^{n-1} = 1$. *(card: [lambda-return](../reference.md#lambda-return))*

For an episodic task the sum must be cut at termination, since $G_t^{(n)} = G_t$ for every $n \ge T-t$. Collecting those terms gives the usable form

$$G_t^\lambda = (1-\lambda)\sum_{n=1}^{T-t-1}\lambda^{n-1}G_t^{(n)} \;+\; \lambda^{T-t-1}G_t,$$

so all the weight beyond the horizon is gathered into a single lump on the full return.

**The two endpoints.** Setting $\lambda = 0$ leaves only the $n=1$ term: $G_t^0 = G_t^{(1)}$, which is **TD(0)**. Setting $\lambda = 1$ sends every finite-$n$ weight to zero and puts all the mass on the terminal lump: $G_t^1 = G_t$, which is **Monte Carlo**. The whole of Module 2 so far is the two ends of this one formula.

**Why averaging beats choosing.** An average of estimators is at least as good as their average quality, and strictly better when their errors are not perfectly correlated — the standard variance-reduction argument behind bagging in [`machine-learning` 2.6](../../machine-learning/lessons/02-06-bagging-and-random-forests.md). The $n$-step returns share the same trajectory, so their errors *are* correlated, and the gain is smaller than for independent estimators — but it is real, and the practical payoff is mostly **robustness**: performance as a function of $\lambda$ is much flatter than performance as a function of $n$.

**This is still the forward view.** As written, $G_t^\lambda$ requires the whole future of the episode. It defines the target but is not an algorithm you can run online — which is exactly what [Lesson 2.8](02-08-eligibility-traces-backward-view.md) fixes.

## Picture

![Left: a bar chart of the weight placed on each n-step return under the lambda-return with lambda equal to 0.7, showing bars decaying geometrically from 0.3 at n equals one, annotated that lambda zero keeps only the first bar giving TD(0) while lambda one pushes all the weight to the end giving Monte Carlo. Right: a plot of root-mean-square error after ten episodes against the step size alpha for a nineteen-state random walk, with a legend showing four curves: n equals two which reaches the lowest minimum, n equals one, n equals eight, and a dashed n equals five hundred and twelve for Monte Carlo which is worst](assets/02-07-fig1.svg)

The right panel is the whole argument of this lesson in one image. Each curve has its own best step size, and comparing methods at a single $\alpha$ would rank them wrongly — which is why the sweep is over $\alpha$ and the comparison is between the *minima*.

## Worked examples

**Example 1 (mechanical): the $n$-step returns of one episode.** With $\gamma = 0.5$ and current estimates $V(B) = 4$, $V(C) = 8$, $V(D) = 2$, consider

$$A \xrightarrow{\ R=1\ } B \xrightarrow{\ R=2\ } C \xrightarrow{\ R=4\ } D \xrightarrow{\ R=8\ } \text{terminal}$$

Compute the targets for $A$:

| $n$ | target | value |
|---|---|---|
| $1$ | $1 + 0.5\,V(B) = 1 + 2$ | $\mathbf{3}$ |
| $2$ | $1 + 0.5(2) + 0.25\,V(C) = 1 + 1 + 2$ | $\mathbf{4}$ |
| $3$ | $1 + 1 + 0.25(4) + 0.125\,V(D) = 1+1+1+0.25$ | $\mathbf{3.25}$ |
| $4 = \infty$ | $1 + 1 + 1 + 0.125(8) = 1+1+1+1$ | $\mathbf{4}$ |

Now the $\lambda$-return at $\lambda = 0.5$. The episode has $T - t = 4$ steps from $A$, so the geometric part runs to $n=3$ and the remainder lumps onto $G_t$:

$$G^\lambda = (1-0.5)\big[0.5^0(3) + 0.5^1(4) + 0.5^2(3.25)\big] + 0.5^3(4)$$
$$= 0.5\big[3 + 2 + 0.8125\big] + 0.5 = 0.5(5.8125) + 0.5 = 2.90625 + 0.5 = \mathbf{3.40625}.$$

Check the weights sum to one: $0.5 + 0.25 + 0.125 + 0.125 = 1$ ✓ — the three geometric weights plus the terminal lump.

Notice $G^\lambda = 3.41$ sits inside the range of the individual targets ($3$ to $4$) and is pulled toward the shorter ones, since they carry more weight. **The $\lambda$-return is always a convex combination of the $n$-step returns**, so it can never be more extreme than the most extreme of them — a boundedness property that matters when individual targets are noisy.

**Example 2 (why you'd care): the sweet spot is real and it is not at either end.** A $19$-state random walk: states in a row, start in the middle, step left or right with probability $\tfrac12$, exiting left gives $-1$ and exiting right gives $+1$, $\gamma = 1$. The true values run linearly from $-0.9$ to $+0.9$.

Run $n$-step TD for $10$ episodes from $V \equiv 0$, sweeping the step size, and record the **best RMS error each $n$ can achieve at its own best $\alpha$** — averaged over $100$ runs:

| $n$ | best $\alpha$ | best RMS error |
|---|---|---|
| $1$ (TD(0)) | $0.75$ | $0.200$ |
| $\mathbf{2}$ | $0.45$ | $\mathbf{0.143}$ |
| $4$ | $0.30$ | $0.149$ |
| $8$ | $0.15$ | $0.177$ |
| $16$ | $0.10$ | $0.222$ |
| $64$ | $0.05$ | $0.338$ |
| $512$ (Monte Carlo) | $0.05$ | $0.462$ |

**A clean U.** The best intermediate method beats one-step TD by $29\%$ and Monte Carlo by a factor of more than three. Neither endpoint is close to optimal, and everything in Module 2 up to now has been an endpoint.

Two further observations from the table, both practically important.

*The best $\alpha$ falls as $n$ rises*, from $0.75$ at $n=1$ to $0.05$ at $n=512$. That is the variance of the target growing: a noisier target must be trusted less. **So $n$ and $\alpha$ cannot be tuned independently** — comparing two values of $n$ at a common step size measures the step size, not the method.

*The curve is asymmetric.* Going from $n=2$ to $n=4$ costs almost nothing ($0.143 \to 0.149$); going from $n=2$ to $n=1$ costs a lot. **Erring long is cheaper than erring short**, which is a useful default when you cannot afford to tune.

## Watch out

- **You might think** larger $n$ is better because the target contains more real data and less guessing — **but actually** the extra real data is *noisy* real data. Every additional reward in the target adds its own variance, and beyond the sweet spot that cost exceeds the bias you removed. The table above is the demonstration: $n = 512$ is more than three times worse than $n = 2$.
- **You might think** $\lambda$ and $n$ are interchangeable parameterizations, with $\lambda$ roughly corresponding to $n \approx 1/(1-\lambda)$ — **but actually** the correspondence is only about the *mean* lookahead. The $\lambda$-return averages over depths rather than committing to one, so it is far less sensitive to getting the parameter wrong. That robustness, not a lower minimum, is the usual reason to prefer it.
- **You might think** the $\lambda$-return is an algorithm — **but actually** it is a *target*, and computing it requires the whole episode. Every implementation you will meet uses the backward view of [Lesson 2.8](02-08-eligibility-traces-backward-view.md), which produces the same updates (exactly, offline; approximately, online) without waiting.

## One-liner

> TD(0) and Monte Carlo are $\lambda = 0$ and $\lambda = 1$ of the same formula, and the useful values of $\lambda$ are in between.

## Problems

**P1 (🟢)** With $\gamma = 1$ and current estimates $V(Y) = 3$, $V(Z) = 10$, consider

$$X \xrightarrow{\ R=2\ } Y \xrightarrow{\ R=-1\ } Z \xrightarrow{\ R=5\ } \text{terminal}$$

(a) Compute $G_t^{(1)}$, $G_t^{(2)}$ and $G_t^{(3)}$ for $X$.
(b) State which equals the Monte Carlo return and why.
(c) Compute $G^\lambda$ for $X$ at $\lambda = 0.5$, remembering the terminal lump.
(d) Verify the weights you used sum to $1$.

**P2 (🟡)** Using Example 2's table:

(a) State the ratio between the best step size at $n=1$ and at $n=8$, and explain the direction of the change.
(b) A colleague compares $n=1$ and $n=8$ both at $\alpha = 0.75$. State which will look better and why the comparison is invalid.
(c) Using the error-reduction property, state the factor by which the $n$-step target's worst-case error beats the current estimate's, at $\gamma = 0.9$ and $n = 8$.
(d) Explain why, despite (c) favouring large $n$, the measured table does not.

**P3 (🔴)** Define the $\lambda$-return's **effective horizon** as the mean lookahead depth $\mathbb{E}[n] = \sum_{n\ge1}n(1-\lambda)\lambda^{n-1}$ (ignoring truncation at termination).

(a) Evaluate the sum in closed form.
(b) Compute the effective horizon at $\lambda = 0.9$ and at $\lambda = 0.95$.
(c) The 19-state random walk's best $n$ was $2$. Give the $\lambda$ whose effective horizon is $2$.
(d) A practitioner reports that $\lambda = 0.9$ works well on a task where the best fixed $n$ is about $4$, contradicting your mapping. Give the most likely explanation, in terms of the shape of the weighting rather than its mean.

<details>
<summary>Solutions</summary>

**P1**

(a) With $\gamma = 1$:

$$G^{(1)} = 2 + V(Y) = 2 + 3 = \mathbf{5}$$
$$G^{(2)} = 2 + (-1) + V(Z) = 1 + 10 = \mathbf{11}$$
$$G^{(3)} = 2 + (-1) + 5 = \mathbf{6}$$

(b) **$G^{(3)}$.** The episode terminates after three rewards, so the three-step return uses every real reward and bootstraps from nothing — that is the definition of the Monte Carlo return. (Equivalently, $G^{(n)} = G^{(3)}$ for every $n \ge 3$.)

(c) With $T - t = 3$, the geometric part runs to $n = 2$ and the rest lumps onto $G_t = 6$:

$$G^\lambda = (1-0.5)\big[0.5^0(5) + 0.5^1(11)\big] + 0.5^2(6) = 0.5(5 + 5.5) + 0.25(6)$$
$$= 0.5(10.5) + 1.5 = 5.25 + 1.5 = \mathbf{6.75}.$$

(d) Weights: $0.5$ on $G^{(1)}$, $0.25$ on $G^{(2)}$, $0.25$ on $G_t$. Sum $= 0.5 + 0.25 + 0.25 = \mathbf{1}$ ✓

**P2**

(a) $0.75 / 0.15 = \mathbf{5}$ — the best step size at $n=1$ is five times larger.

The direction follows from target variance. The one-step target contains a single random reward plus a bootstrap from a low-variance estimate, so it is a reliable signal and can be trusted with a big step. The eight-step target accumulates eight random rewards, so individual targets scatter far more, and a large step would chase that noise. **Noisier target, smaller step** — the same principle that sets learning rates in [`machine-learning` 1.6](../../machine-learning/lessons/01-06-gradient-descent-for-learning.md).

(b) **$n = 1$ will look better**, because $\alpha = 0.75$ is $n=1$'s own optimum and five times $n=8$'s. At that step size the eight-step method is wildly over-stepping on a high-variance target and will perform far worse than its $0.177$ best.

The comparison is invalid because it confounds the method with a hyperparameter the method is highly sensitive to. **The only fair comparison is each method at its own best $\alpha$**, which is why Example 2's table reports minima over a sweep — and why the figure plots whole curves rather than points.

(c) The error-reduction property gives a factor $\gamma^n = 0.9^8 = \mathbf{0.430}$ — the $8$-step target's worst-case error is at most $43\%$ of the current estimate's, against $90\%$ for the one-step target.

(d) Because the error-reduction property bounds only the **bias**, and says nothing about variance.

It is a statement about the *expected* target, $\mathbb{E}[G_t^{(n)}]$, which does contract by $\gamma^n$. But the algorithm does not get the expectation — it gets one noisy sample of it, and the sampling noise grows with $n$ because more random rewards are being summed. So large $n$ wins on the quantity the bound measures and loses on the one it ignores, and the measured RMS error is the sum of the two effects.

**This is the bias–variance trade-off with a theorem on one side and only an empirical curve on the other**, which is precisely why the sweet spot has to be found by experiment.

**P3**

(a) This is the mean of a geometric distribution on $\{1,2,3,\dots\}$ with success probability $1-\lambda$. Summing directly, with $q = \lambda$:

$$\sum_{n\ge1}n(1-\lambda)\lambda^{n-1} = (1-\lambda)\sum_{n\ge1}n\lambda^{n-1} = (1-\lambda)\cdot\frac{1}{(1-\lambda)^2} = \boxed{\frac{1}{1-\lambda}}$$

(b) $\lambda = 0.9$: $\dfrac{1}{0.1} = \mathbf{10}$ steps. $\lambda = 0.95$: $\dfrac{1}{0.05} = \mathbf{20}$ steps.

(Note this is the same $1/(1-\gamma)$ expression as the discount's effective horizon in [Lesson 1.1](01-01-the-rl-problem.md) — the arithmetic of geometric weighting does not care what is being weighted.)

(c) Set $\dfrac{1}{1-\lambda} = 2$, giving $1-\lambda = \tfrac12$ and $\lambda = \mathbf{0.5}$.

(d) *Accept criterion: any explanation turning on the spread of the weights rather than their mean.*

**The $\lambda$-return's weights are spread over every depth, so its behaviour is not well summarized by its mean.** At $\lambda = 0.9$ the weight on $n=1$ is $(1-\lambda) = 0.1$, on $n=2$ it is $0.09$, and so on — there is substantial weight on short lookaheads even though the mean is $10$. A fixed $n = 10$ puts *all* its weight at depth $10$ and none anywhere else, and inherits the full variance of a ten-step target.

So the $\lambda$-return with mean horizon $10$ behaves much more like a short-lookahead method than $n = 10$ does: its variance is dominated by the heavily-weighted early terms, while its bias benefits from the long tail. **A distribution of depths is not equivalent to its mean depth**, and the mapping $n \approx 1/(1-\lambda)$ is a rule of thumb that systematically overstates how aggressive a given $\lambda$ is.

The practical corollary is the one in the "Watch out": $\lambda$ can be set loosely because the averaging hedges, while $n$ must be tuned because it commits.

</details>

## Flashback

**From Lesson 2.3 (Temporal-difference learning, TD(0)):** An agent runs TD(0) with $\gamma = 1$ and $\alpha = 0.5$, all values initialized to $0$, on the episode

$$K \xrightarrow{\ 0\ } L \xrightarrow{\ 0\ } M \xrightarrow{\ 6\ } \text{terminal}$$

repeated three times, updating online in forward order.

(a) Give $V(K)$, $V(L)$, $V(M)$ after each of the three episodes.
(b) State how many episodes are needed before $V(K)$ becomes nonzero, and why.
(c) State what $V(K)$ would be after **one** episode under Monte Carlo with the same $\alpha$.
(d) Name the mechanism from this lesson that would let TD reach $K$ in a single episode, and say which parameter setting makes it behave like your answer to (c).

<details>
<summary>Solution</summary>

(a) Each transition's target is $R + V(\text{next})$, using the values current at that moment.

**Episode 1.** $K\to L$: target $0 + 0 = 0$, no change. $L \to M$: target $0 + 0 = 0$, no change. $M\to$ terminal: target $6 + 0 = 6$, so $V(M) \leftarrow 0 + 0.5(6) = 3$.

$$V(K) = 0,\quad V(L) = 0,\quad V(M) = \mathbf{3}.$$

**Episode 2.** $K\to L$: target $0 + V(L) = 0$, no change. $L\to M$: target $0 + V(M) = 3$, so $V(L) \leftarrow 0 + 0.5(3) = 1.5$. $M\to$ terminal: $V(M) \leftarrow 3 + 0.5(6-3) = 4.5$.

$$V(K) = 0,\quad V(L) = \mathbf{1.5},\quad V(M) = \mathbf{4.5}.$$

**Episode 3.** $K \to L$: target $0 + 1.5 = 1.5$, so $V(K) \leftarrow 0 + 0.5(1.5) = 0.75$. $L \to M$: target $0 + 4.5$, so $V(L) \leftarrow 1.5 + 0.5(4.5-1.5) = 3$. $M$: $V(M) \leftarrow 4.5 + 0.5(1.5) = 5.25$.

$$V(K) = \mathbf{0.75},\quad V(L) = \mathbf{3},\quad V(M) = \mathbf{5.25}.$$

(b) **Three episodes.** The reward is two states away from $K$, and TD(0) moves information exactly one state backwards per episode: episode 1 reaches $M$, episode 2 reaches $L$, episode 3 reaches $K$. With a chain of length $n$ it would take $n$ episodes for the reward to reach the front.

(c) Monte Carlo uses the actual return, which is $0 + 0 + 6 = 6$ from every state. So after one episode

$$V(K) \leftarrow 0 + 0.5(6 - 0) = \mathbf{3},$$

and $V(L)$ and $V(M)$ likewise. **All three states learn immediately.**

(d) An **$n$-step return** (or equivalently a $\lambda$-return with $\lambda > 0$) reaches back further per episode: a $3$-step return from $K$ would carry the full $+6$ in a single episode.

The setting that reproduces (c) exactly is $n \ge 3$ — or $\lambda = 1$, which puts all the weight on the full return and *is* Monte Carlo. Intermediate values sit between the two: at $\lambda = 0.5$, $K$'s target after episode 1 would be a weighted blend of $0$, $0$ and $6$, giving a nonzero but smaller update than MC's.

This is the concrete cost of TD(0) that the whole lesson is about — **one-step bootstrapping is maximally cautious and therefore maximally slow to propagate** — and it is what makes the case for the middle of the spectrum rather than the end.

</details>

## Connections

- **Backward:** $n=1$ is [Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s TD(0) and $n=\infty$ is [Lesson 2.1](02-01-monte-carlo-prediction.md)'s Monte Carlo, so this lesson subsumes both. The error-reduction property is [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s contraction applied $n$ times.
- **Forward:** [Lesson 2.8](02-08-eligibility-traces-backward-view.md) computes the $\lambda$-return's updates online with eligibility traces, removing the need to wait for the episode. The same geometric averaging over lookahead depths is [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)'s generalized advantage estimation, where $\lambda$ trades bias against variance in the *advantage* rather than the value — and $n$-step returns are what A2C actually uses in practice.
- **Sideways:** averaging many estimators with correlated errors to beat any single one is the argument behind bagging in [`machine-learning` 2.6](../../machine-learning/lessons/02-06-bagging-and-random-forests.md), and the geometric weighting is the same exponential smoothing used for time series in [`econometrics`](../../econometrics/syllabus.md), where $1/(1-\lambda)$ is likewise the effective window length.
