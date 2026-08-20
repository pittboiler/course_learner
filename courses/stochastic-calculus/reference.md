# Stochastic Calculus · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Ordinary calculus assumes the path you differentiate along is smooth. Brownian
motion is not: it is continuous, nowhere differentiable, and of infinite length
on every interval. One quantity survives that roughness — the **quadratic
variation** $[W]_t = t$ — and the entire subject is the bookkeeping that follows
from it: a new integral (Itô), a chain rule with an extra term (Itô's lemma),
the SDEs it lets you solve, and two translations out of probability (Girsanov's
change of measure, Feynman–Kac's PDE). Mid-problem, this card is mostly the
multiplication table, the Itô-lemma forms, and the solved-SDE table.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $W_t$ | standard Brownian motion — the noise everything is driven by | [1.1](lessons/01-01-random-walks-to-brownian-motion.md) |
| $\Delta W_k$ | one increment $W_{t_k} - W_{t_{k-1}}$; typical size $\sqrt{\Delta t}$, **not** $\Delta t$ | [1.4](lessons/01-04-pathological-paths.md) |
| $\Pi$, $\|\Pi\|$ | a partition of $[0,T]$, and its mesh (the longest subinterval) | [1.5](lessons/01-05-quadratic-variation-martingale-property.md) |
| $\mathcal{F}_t$ | the filtration — everything knowable by time $t$ | [1.3](lessons/01-03-filtrations-adaptedness-markov.md) |
| $[X]_t$ | quadratic variation — accumulated squared movement of $X$ | [1.5](lessons/01-05-quadratic-variation-martingale-property.md) |
| $[X,Y]_t$ | quadratic covariation — the cross term $\int dX\,dY$ | [2.5](lessons/02-05-quadratic-variation-dwdw-rules.md) |
| $\mathcal{E}_t$ | the exponential martingale $\exp(\theta W_t - \tfrac12\theta^2 t)$ | [1.5](lessons/01-05-quadratic-variation-martingale-property.md) |
| $\tau$, $t\wedge\tau$ | a stopping time, and "run until $t$ or until $\tau$, whichever first" | [1.6](lessons/01-06-stopping-times-optional-stopping.md) |
| $\int_0^T H_t\,dW_t$ | Itô integral — integrand locked in at the **left** endpoint | [2.1](lessons/02-01-why-riemann-stieltjes-fails.md) |
| $\int H\circ dW$ | the **Stratonovich** integral (midpoint sampling), a different object | [2.1](lessons/02-01-why-riemann-stieltjes-fails.md) |
| $\xi_k$ | the position held over block $k$ of a simple integrand, fixed at $t_k$ | [2.2](lessons/02-02-ito-integral-simple-integrands.md) |
| $\mathcal{L}^2$ | admissible integrands: adapted with $\mathbb{E}\int_0^T H^2\,dt < \infty$ | [2.3](lessons/02-03-ito-isometry-general-integral.md) |
| $\mu$, $\sigma$ | drift (predictable trend) and diffusion (noise intensity) of $dX$ | [3.2](lessons/03-02-ito-processes-general-formula.md) |
| $\theta$ (OU) | reversion **speed** — not the mean; the mean is $\mu$ | [3.5](lessons/03-05-ornstein-uhlenbeck-process.md) |
| $\theta_t$ (Girsanov) | the drift being removed, in units of volatility — the market price of risk | [4.2](lessons/04-02-girsanov-theorem.md) |
| $Z$, $Z_t$ | Radon–Nikodym derivative $dQ/dP$, and its density **process** | [4.1](lessons/04-01-radon-nikodym-equivalent-measures.md) |
| $Q \sim P$ | equivalent measures — same null sets, so translation runs both ways | [4.1](lessons/04-01-radon-nikodym-equivalent-measures.md) |
| $W^P$, $W^Q$ | a Brownian motion **tagged with the measure** it is Brownian under | [4.2](lessons/04-02-girsanov-theorem.md) |
| $\mathcal{A}$ | infinitesimal generator $\mu\partial_x + \tfrac12\sigma^2\partial_{xx}$ | [3.2](lessons/03-02-ito-processes-general-formula.md), [4.4](lessons/04-04-infinitesimal-generator.md) |
| $\mathbb{E}_x[\cdot]$ | expectation for the diffusion started at $X_0 = x$ | [4.4](lessons/04-04-infinitesimal-generator.md) |
| $\mathcal{A}^*$ | the **adjoint** generator — what densities evolve by | [4.6](lessons/04-06-fokker-planck-kolmogorov.md) |
| $p(t,x)$ | the probability density of $X_t$ (not a payoff, not a price) | [4.6](lessons/04-06-fokker-planck-kolmogorov.md) |
| $\Phi$ | standard normal CDF | [3.4](lessons/03-04-geometric-brownian-motion.md) |

## Definitions

### Standard Brownian motion

Pure randomness accumulating in continuous time: start at zero, take independent
Gaussian steps whose variance is the time elapsed, and never jump.

$$W_0 = 0;\quad \text{increments over disjoint windows independent};\quad W_t - W_s \sim \mathcal{N}(0,\, t-s);\quad t\mapsto W_t \text{ continuous a.s.}$$

*Introduced:* [1.1](lessons/01-01-random-walks-to-brownian-motion.md)

### Donsker's invariance principle

Every finite-variance random walk, rescaled by space $1/\sqrt n$ and time $1/n$,
converges to the *same* Brownian motion — the coin you flipped is forgotten.

$$W^{(n)}_t = \frac{1}{\sqrt n}S_{\lfloor nt\rfloor} \;\xrightarrow{d}\; W_t \quad\text{on path space}$$

*Introduced:* [1.1](lessons/01-01-random-walks-to-brownian-motion.md)

### Gaussian process

A process all of whose finite snapshots are jointly normal — so a mean function
and a covariance function determine everything about it.

$$m(t) = \mathbb{E}[W_t] = 0, \qquad K(s,t) = \operatorname{Cov}(W_s, W_t) = \min(s,t)$$

*Introduced:* [1.2](lessons/01-02-gaussian-structure-of-bm.md)

### Filtration

The growing record of what is known: a family of σ-algebras that only ever gains
information, $\mathcal{F}_s \subseteq \mathcal{F}_t$ for $s \le t$. The natural
filtration of Brownian motion is $\mathcal{F}_t = \sigma(W_u : u \le t)$.

*Introduced:* [1.3](lessons/01-03-filtrations-adaptedness-markov.md)

### Adapted process

A process that never peeks: $X_t$ is $\mathcal{F}_t$-measurable for every $t$.
This is about *information*, not smoothness — the running maximum is adapted
though it has kinks; the smooth process $t \mapsto W_{t+1}$ is not.

*Introduced:* [1.3](lessons/01-03-filtrations-adaptedness-markov.md)

### Markov property

The present value summarizes the past: conditioning on the whole history gives
the same answer as conditioning on where the process stands now.

$$\mathbb{E}[f(W_t)\mid \mathcal{F}_s] = \mathbb{E}[f(W_t)\mid W_s], \qquad W_t \mid \mathcal{F}_s \sim \mathcal{N}(W_s,\, t-s)$$

The **strong Markov property** upgrades $s$ to a stopping time $\tau$: after
$\tau$, the process $W_{\tau+u} - W_\tau$ is a fresh Brownian motion independent
of $\mathcal{F}_\tau$.

*Introduced:* [1.3](lessons/01-03-filtrations-adaptedness-markov.md)

### Total variation

The total up-and-down distance a path travels. For Brownian motion it is
**infinite on every interval**, which is exactly what kills Riemann–Stieltjes
integration against $W$.

$$\sup_{\Pi}\sum_k |W_{t_{k+1}} - W_{t_k}| = \infty \quad\text{a.s.}$$

*Introduced:* [1.4](lessons/01-04-pathological-paths.md)

### Quadratic variation

The one thing that survives the roughness: sum the *squares* of the increments
and, as the partition refines, you get a deterministic number — the elapsed time.

$$[W]_t = \lim_{\|\Pi\|\to 0}\sum_k (W_{t_k} - W_{t_{k-1}})^2 = t, \qquad d[W]_t = dt$$

Nonzero quadratic variation is the signature of genuine roughness: a smooth
(finite-variation) function has $[f] \equiv 0$.

*Introduced:* [1.5](lessons/01-05-quadratic-variation-martingale-property.md)

### Martingale

A fair game: given everything so far, the expected future value is the current
value. Zero *drift*, not zero movement — a martingale still fluctuates.

$$\mathbb{E}[M_t \mid \mathcal{F}_s] = M_s \quad (s \le t), \qquad \text{hence}\quad \mathbb{E}[M_t] = \mathbb{E}[M_0]$$

*Introduced:* [1.5](lessons/01-05-quadratic-variation-martingale-property.md)

### Exponential martingale

The exponential of a Brownian motion, with exactly enough drift subtracted to
hold its mean at $1$. It is the density that changes measure.

$$\mathcal{E}_t = \exp\!\Big(\theta W_t - \tfrac12\theta^2 t\Big), \qquad d\mathcal{E}_t = \theta\,\mathcal{E}_t\,dW_t, \qquad \mathbb{E}[\mathcal{E}_t] = 1$$

*Introduced:* [1.5](lessons/01-05-quadratic-variation-martingale-property.md)

### Stopping time

A random alarm you can't set using the future: whether it has rung by time $t$ is
decidable from $\mathcal{F}_t$. First-hitting and first-exit times qualify; "the
last zero before $T$" and "the time of the maximum" do not.

$$\{\tau \le t\} \in \mathcal{F}_t \quad\text{for every } t$$

*Introduced:* [1.6](lessons/01-06-stopping-times-optional-stopping.md)

### Simple (elementary) process

A step integrand: hold the position $\xi_k$ across block $(t_k, t_{k+1}]$, where
$\xi_k$ is decided at the block's **start** ($\mathcal{F}_{t_k}$-measurable).

$$H_t = \sum_{k=0}^{n-1}\xi_k\,\mathbf{1}_{(t_k,\,t_{k+1}]}(t), \qquad \int_0^T H\,dW = \sum_k \xi_k\big(W_{t_{k+1}} - W_{t_k}\big)$$

*Introduced:* [2.2](lessons/02-02-ito-integral-simple-integrands.md)

### Itô integral

The limit of Riemann sums that evaluate the integrand *before* each increment —
the only non-anticipating choice, and the one that makes the integral a
martingale.

$$\int_0^T H_t\,dW_t = \lim_{\|\Pi\|\to 0}\sum_k H_{t_k}\big(W_{t_{k+1}} - W_{t_k}\big) \quad (L^2 \text{ limit}),\qquad H \in \mathcal{L}^2$$

*Introduced:* [2.1](lessons/02-01-why-riemann-stieltjes-fails.md), constructed in [2.2](lessons/02-02-ito-integral-simple-integrands.md)–[2.3](lessons/02-03-ito-isometry-general-integral.md)

### Stratonovich integral

The midpoint-sampling alternative. It obeys the ordinary chain rule (no
correction term) but is **not** a martingale, so no mean-zero shortcut.

$$\int_0^T H\circ dW = \int_0^T H\,dW + \tfrac12\,[H, W]_T$$

*Introduced:* [2.1](lessons/02-01-why-riemann-stieltjes-fails.md)

### Local martingale

Driftless only in a localized sense: there are stopping times $\tau_n \uparrow \infty$
with each $M_{t\wedge\tau_n}$ a true martingale, but $\mathbb{E}[M_t] = 0$ can
fail globally. An Itô integral is a *true* martingale when
$\mathbb{E}\int_0^T H^2\,dt < \infty$; without that, only local.

*Introduced:* [2.4](lessons/02-04-ito-integral-as-martingale.md)

### Quadratic covariation

The surviving second-order product of two rough processes — the reason the
stochastic product rule has a third term.

$$d[X,Y]_t = dX_t\,dY_t, \qquad [X,Y]_t = 0 \text{ whenever either has finite variation}$$

*Introduced:* [2.5](lessons/02-05-quadratic-variation-dwdw-rules.md), used in [3.6](lessons/03-06-product-rule-integration-by-parts.md)

### Itô process

Anything that is a trend plus a martingale wiggle, with adapted coefficients.

$$dX_t = \mu_t\,dt + \sigma_t\,dW_t, \qquad X_t = X_0 + \int_0^t\mu_s\,ds + \int_0^t\sigma_s\,dW_s, \qquad d[X]_t = \sigma_t^2\,dt$$

*Introduced:* [3.2](lessons/03-02-ito-processes-general-formula.md)

### Stochastic differential equation

An ODE with a noise term, and *shorthand for an integral equation* — there is no
$\dot W$ to divide by. A **strong solution** is an adapted, continuous process
driven by the given Brownian motion that satisfies the integral identity.

$$dX_t = \mu(t,X_t)\,dt + \sigma(t,X_t)\,dW_t \;\Longleftrightarrow\; X_t = x_0 + \int_0^t\mu(s,X_s)\,ds + \int_0^t\sigma(s,X_s)\,dW_s$$

*Introduced:* [3.3](lessons/03-03-stochastic-differential-equations.md)

### Geometric Brownian motion

Multiplicative noise: the process moves by *proportions*, so it stays positive
and is lognormal. The stock model behind Black–Scholes.

$$dS_t = \mu S_t\,dt + \sigma S_t\,dW_t \;\Longrightarrow\; S_t = S_0\exp\!\Big(\big(\mu - \tfrac12\sigma^2\big)t + \sigma W_t\Big)$$

*Introduced:* [3.4](lessons/03-04-geometric-brownian-motion.md)

### Volatility drag

The gap $\tfrac12\sigma^2$ between the rate the *mean* of a GBM grows ($\mu$) and
the rate the *median/typical path* grows ($\mu - \tfrac12\sigma^2$). Volatility
lowers what you'll typically see, never the average.

*Introduced:* [3.4](lessons/03-04-geometric-brownian-motion.md)

### Ornstein–Uhlenbeck process

Mean reversion: a restoring drift pulls the process back toward $\mu$ at speed
$\theta$, so unlike Brownian motion it has an equilibrium.

$$dX_t = \theta(\mu - X_t)\,dt + \sigma\,dW_t, \qquad X_\infty \sim \mathcal{N}\!\Big(\mu,\ \frac{\sigma^2}{2\theta}\Big)$$

*Introduced:* [3.5](lessons/03-05-ornstein-uhlenbeck-process.md)

### Brownian bridge

Brownian motion conditioned to land at a fixed value — pinned at both ends. On
$[0,1]$ from $0$ to $0$ it has covariance $\min(s,t) - st$, which vanishes at
$t = 1$ as the pinning demands.

$$B_t = W_t - t\,W_1, \qquad \operatorname{Cov}(B_s, B_t) = \min(s,t) - st$$

*Introduced:* [1.2](lessons/01-02-gaussian-structure-of-bm.md) (P3); its SDE is tabulated below

### Equivalent measures

Two probability measures that agree on what's *possible* (same null sets) while
disagreeing on how likely things are — so you can translate in both directions.

$$Q \sim P \iff Q \ll P \text{ and } P \ll Q$$

*Introduced:* [4.1](lessons/04-01-radon-nikodym-equivalent-measures.md)

### Radon–Nikodym derivative

The path-by-path reweighting factor, a likelihood ratio: how much more likely an
outcome is under $Q$ than under $P$.

$$Z = \frac{dQ}{dP} \ \ge 0, \qquad \mathbb{E}_P[Z] = 1, \qquad \mathbb{E}_Q[X] = \mathbb{E}_P[ZX]$$

Its **density process** $Z_t = \mathbb{E}_P[Z\mid\mathcal{F}_t]$ is a
$P$-martingale with $Z_0 = 1$.

*Introduced:* [4.1](lessons/04-01-radon-nikodym-equivalent-measures.md)

### Novikov's condition

The integrability check that makes Girsanov's density a *true* martingale, so
that $Q$ is an honest probability measure.

$$\mathbb{E}_P\!\left[\exp\!\Big(\tfrac12\int_0^T\theta_t^2\,dt\Big)\right] < \infty$$

*Introduced:* [4.2](lessons/04-02-girsanov-theorem.md)

### Complete market

Every payoff can be manufactured by trading — because every martingale on a
Brownian filtration is a stochastic integral, and its integrand *is* the hedge.
Adding an untraded independent noise breaks completeness.

*Introduced:* [4.3](lessons/04-03-martingale-representation.md)

### Infinitesimal generator

The drift half of Itô's formula, read as an operator: the expected instantaneous
rate of change of $f$ along the diffusion.

$$\mathcal{A}f(x) = \mu(x)f'(x) + \tfrac12\sigma(x)^2 f''(x) = \lim_{t\to 0}\frac{\mathbb{E}_x[f(X_t)] - f(x)}{t}$$

*Introduced:* [4.4](lessons/04-04-infinitesimal-generator.md)

### Stationary distribution

The density a diffusion relaxes to, where drift-transport and diffusion-spreading
exactly cancel. It requires a *confining* drift — Brownian motion has none.

$$\mathcal{A}^*p_\infty = 0 \quad\Longrightarrow\quad X_0 \sim p_\infty \ \Rightarrow\ X_t \sim p_\infty \ \forall t$$

*Introduced:* [4.6](lessons/04-06-fokker-planck-kolmogorov.md)

## Formulas and rules

### Brownian motion: the standard facts

| Quantity | Value |
|---|---|
| $\mathbb{E}[W_t]$, $\operatorname{Var}(W_t)$, $\mathbb{E}[W_t^2]$ | $0$, $t$, $t$ |
| $\operatorname{Cov}(W_s, W_t)$ | $\min(s,t)$ — the shared history, the *earlier* time |
| $\mathbb{E}[W_t^3]$ (any odd moment) | $0$ |
| $\mathbb{E}[W_t^4]$, $\operatorname{Var}(W_t^2)$ | $3t^2$, $2t^2$ |
| $\mathbb{E}\lvert W_{t+\Delta t} - W_t\rvert$ | $\sqrt{2/\pi}\,\sqrt{\Delta t}$ |
| $W_t \mid \mathcal{F}_s$ | $\mathcal{N}(W_s,\ t-s)$ |
| self-similarity | $W_{ct} \overset{d}{=} \sqrt c\,W_t$ (space $\sim\sqrt{\text{time}}$) |
| time inversion | $\widetilde W_t = t\,W_{1/t}$ ($\widetilde W_0 = 0$) is again a Brownian motion |
| Hölder regularity | $\alpha$-Hölder for every $\alpha < \tfrac12$, never for $\alpha = \tfrac12$ |
| total variation / quadratic variation on $[0,T]$ | $\infty$ (random) / $T$ (deterministic) |

*From* [1.1](lessons/01-01-random-walks-to-brownian-motion.md), [1.2](lessons/01-02-gaussian-structure-of-bm.md), [1.4](lessons/01-04-pathological-paths.md), [1.5](lessons/01-05-quadratic-variation-martingale-property.md)

### The Gaussian toolkit

Used constantly and stated nowhere in the lessons — this is the table to look at
when a computation stalls.

$$\text{MGF:}\quad \mathbb{E}\big[e^{\theta Z}\big] = e^{\theta^2\sigma^2/2}\quad (Z \sim \mathcal{N}(0,\sigma^2)) \qquad\Longrightarrow\qquad \mathbb{E}\big[e^{\sigma W_t}\big] = e^{\sigma^2 t/2}$$

$$\text{regression:}\quad \mathbb{E}[Y\mid X] = \mathbb{E}[Y] + \frac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}\big(X - \mathbb{E}[X]\big)$$

$$\text{conditional covariance:}\quad \operatorname{Cov}(X, Y \mid U) = \operatorname{Cov}(X,Y) - \frac{\operatorname{Cov}(X,U)\operatorname{Cov}(Y,U)}{\operatorname{Var}(U)}$$

Differentiating the MGF gives the two tilted moments that appear whenever you
change measure: $\mathbb{E}[Ze^{\theta Z}] = \theta\sigma^2 e^{\theta^2\sigma^2/2}$
and $\mathbb{E}[Z^2 e^{\theta Z}] = (\sigma^2 + \theta^2\sigma^4)e^{\theta^2\sigma^2/2}$.
For jointly Gaussian variables, uncorrelated **does** imply independent — which
is why "independent increments" and "zero-covariance increments" coincide here.

*Used by* [1.2](lessons/01-02-gaussian-structure-of-bm.md), [1.5](lessons/01-05-quadratic-variation-martingale-property.md), [3.4](lessons/03-04-geometric-brownian-motion.md), [4.1](lessons/04-01-radon-nikodym-equivalent-measures.md)

### The Brownian martingales, and what they compute

$$W_t; \qquad W_t^2 - t; \qquad \mathcal{E}_t = e^{\theta W_t - \frac12\theta^2 t}; \qquad W_t^3 - 3\!\int_0^t\! W_s\,ds$$

More generally $g(t, W_t)$ is a martingale exactly when $\partial_t g + \tfrac12\partial_{xx}g = 0$
(the backward heat equation) — the first two and the exponential are all
solutions of that one PDE.

**Optional stopping.** $\mathbb{E}[M_\tau] = \mathbb{E}[M_0]$ provided one of:
$\tau$ bounded; $M$ bounded with $\tau < \infty$ a.s.; $\mathbb{E}[\tau] < \infty$
with bounded increments; or $\{M_{t\wedge\tau}\}$ uniformly integrable.

**Doob's inequalities.** $\displaystyle\mathbb{P}\Big(\sup_{s\le t}|M_s| \ge \lambda\Big) \le \frac{\mathbb{E}|M_t|}{\lambda}$
and $\displaystyle\mathbb{E}\Big[\sup_{s\le t}M_s^2\Big] \le 4\,\mathbb{E}[M_t^2]$.

Exit results for Brownian motion started at $0$, band $(-a, b)$ with $a, b > 0$:

| Question | Martingale used | Answer |
|---|---|---|
| $\mathbb{P}(\text{hit } b \text{ before } -a)$ | $W_t$ | $\dfrac{a}{a+b}$ |
| $\mathbb{E}[\tau]$ | $W_t^2 - t$ | $ab$ (so $a^2$ for a symmetric band) |
| $\mathbb{E}[e^{-\lambda\tau}]$, symmetric band $(-a,a)$ | $\mathcal{E}_t$ with $\theta = \sqrt{2\lambda}$ | $\dfrac{1}{\cosh(a\sqrt{2\lambda})}$ |

*From* [1.5](lessons/01-05-quadratic-variation-martingale-property.md), [1.6](lessons/01-06-stopping-times-optional-stopping.md), [3.1](lessons/03-01-itos-lemma-for-bm.md)

### The Itô integral: properties you compute with

| Property | Statement |
|---|---|
| linearity | $I(aH + bG) = aI(H) + bI(G)$ |
| mean zero | $\mathbb{E}\big[\int_0^T H\,dW\big] = 0$ — *delete it inside any expectation* |
| martingale | $\mathbb{E}\big[\int_0^t H\,dW \mid \mathcal{F}_s\big] = \int_0^s H\,dW$ |
| **Itô isometry** | $\mathbb{E}\big[\big(\int_0^T H\,dW\big)^2\big] = \mathbb{E}\int_0^T H_t^2\,dt$ |
| polarized isometry | $\mathbb{E}\big[\int H\,dW \int G\,dW\big] = \mathbb{E}\int_0^T H_tG_t\,dt$ |
| quadratic variation | $d\big[\int H\,dW\big]_t = H_t^2\,dt$ (pathwise; the isometry is its expectation) |
| Wiener integral | $H$ **deterministic** $\Rightarrow \int_0^T H\,dW \sim \mathcal{N}\big(0, \int_0^T H^2\,dt\big)$ |

Gaussianity needs a *deterministic* integrand. With a random one you still get
mean zero and the isometry variance, but the law is something else — for example
$\int_0^T W\,dW = \tfrac12 W_T^2 - \tfrac12 T$ is a shifted chi-square.

**The benchmark integral, three ways to sample:**

$$\text{Itô (left)}\ \tfrac12 W_T^2 - \tfrac12 T \qquad \text{Stratonovich (mid)}\ \tfrac12 W_T^2 \qquad \text{right}\ \tfrac12 W_T^2 + \tfrac12 T$$

*From* [2.1](lessons/02-01-why-riemann-stieltjes-fails.md)–[2.4](lessons/02-04-ito-integral-as-martingale.md)

### The $dW$ multiplication table

Keep every product of order $dt$, discard everything smaller. This is quadratic
variation written as bookkeeping, and it is the whole difference from ordinary
calculus.

| $\times$ | $dt$ | $dW$ |
|---|---|---|
| **$dt$** | $0$ | $0$ |
| **$dW$** | $0$ | $dt$ |

With several drivers, $dW^i\,dW^j = \rho_{ij}\,dt$ ($=dt$ if $i=j$, $=0$ if
independent). The size argument behind the table: $\Delta W \sim \sqrt{\Delta t}$,
so $(\Delta W)^2 \sim \Delta t$ **survives**, while
$\Delta t\,\Delta W \sim (\Delta t)^{3/2}$ and $(\Delta t)^2$ vanish.

The consequence you use every time:

$$dX = \mu\,dt + \sigma\,dW \quad\Longrightarrow\quad (dX)^2 = \sigma^2\,dt$$

Only the diffusion coefficient enters — the drift contributes nothing to
quadratic variation.

*From* [2.5](lessons/02-05-quadratic-variation-dwdw-rules.md)

### Itô's lemma

**Function of Brownian motion** ($f \in C^2$):

$$df(W_t) = f'(W_t)\,dW_t + \tfrac12 f''(W_t)\,dt$$

**General (Itô process $dX = \mu\,dt + \sigma\,dW$, $f \in C^{1,2}$):**

$$df(t, X_t) = \underbrace{\Big(\partial_t f + \mu\,\partial_x f + \tfrac12\sigma^2\,\partial_{xx}f\Big)}_{\text{drift} \;=\; \partial_t f + \mathcal{A}f}dt \;+\; \underbrace{\sigma\,\partial_x f}_{\text{diffusion}}\,dW_t$$

**Two processes** ($f(X,Y)$, the form behind the product rule):

$$df = \partial_x f\,dX + \partial_y f\,dY + \tfrac12\partial_{xx}f\,d[X] + \partial_{xy}f\,d[X,Y] + \tfrac12\partial_{yy}f\,d[Y]$$

**Several dimensions.** For $X \in \mathbb{R}^n$ driven by $m$ independent
Brownian motions, $dX_i = \mu_i\,dt + \sum_{j=1}^m \sigma_{ij}\,dW^j$, write
$a = \sigma\sigma^{\mathsf T}$ (so $dX_i\,dX_k = a_{ik}\,dt$). Then for
$f(t, x_1,\dots,x_n) \in C^{1,2}$:

$$df = \Big(\partial_t f + \sum_i \mu_i\,\partial_i f + \tfrac12\sum_{i,k} a_{ik}\,\partial_{ik} f\Big)dt \;+\; \sum_{i,j}\sigma_{ij}\,\partial_i f\;dW^j$$

**Martingale criterion.** $f(t, X_t)$ is a (local) martingale iff its drift
vanishes: $\partial_t f + \mathcal{A}f = 0$. Among functions of $W_t$ alone
(no explicit $t$), only affine $f$ qualify.

*From* [3.1](lessons/03-01-itos-lemma-for-bm.md)–[3.2](lessons/03-02-ito-processes-general-formula.md), multi-dimensional form used by [3.6](lessons/03-06-product-rule-integration-by-parts.md)

### Product rule and integration by parts

$$d(X_tY_t) = X_t\,dY_t + Y_t\,dX_t + \underbrace{d[X,Y]_t}_{dX_t\,dY_t}, \qquad d[X,Y]_t = \rho\,\sigma_X\sigma_Y\,dt$$

$$\int_0^T X\,dY = X_TY_T - X_0Y_0 - \int_0^T Y\,dX - [X,Y]_T$$

The cross term is zero whenever one factor has finite variation (a deterministic
or smooth $Y$, e.g. $Y_t = t$), and the formulas collapse to the classical ones.
Two useful consequences:

$$\int_0^t s\,dW_s = t\,W_t - \int_0^t W_s\,ds, \qquad \int_0^T e^{-t}\,dW_t = e^{-T}W_T + \int_0^T e^{-t}W_t\,dt$$

*From* [3.6](lessons/03-06-product-rule-integration-by-parts.md)

### Existence and uniqueness for SDEs

A unique strong solution with $\mathbb{E}[\sup_{t\le T}X_t^2] < \infty$ exists if,
for some constant $K$ and all $t, x, y$:

$$|\mu(t,x) - \mu(t,y)| + |\sigma(t,x) - \sigma(t,y)| \le K|x-y| \quad(\textbf{Lipschitz})$$
$$|\mu(t,x)| + |\sigma(t,x)| \le K(1 + |x|) \quad(\textbf{linear growth})$$

Linear growth rules out finite-time explosion ($\dot x = x^2$ blows up at
$t = 1/x_0$); Lipschitz rules out non-uniqueness (square-root-type coefficients
like $\sqrt{|x|}$ or $x^{2/3}$ fail at $0$, and solutions can branch there).
*Verify a candidate solution by applying Itô's lemma and matching the $dt$ and
$dW$ coefficients.*

*From* [3.3](lessons/03-03-stochastic-differential-equations.md)

### Solved SDEs

| Process | SDE | Solution | Mean | Variance |
|---|---|---|---|---|
| Arithmetic BM | $dX = \mu\,dt + \sigma\,dW$ | $X_0 + \mu t + \sigma W_t$ | $X_0 + \mu t$ | $\sigma^2 t$ |
| **Geometric BM** | $dS = \mu S\,dt + \sigma S\,dW$ | $S_0\,e^{(\mu - \frac12\sigma^2)t + \sigma W_t}$ (lognormal) | $S_0e^{\mu t}$ | $S_0^2e^{2\mu t}\big(e^{\sigma^2 t} - 1\big)$ |
| Exponential martingale | $dY = \sigma Y\,dW$ | $Y_0\,e^{\sigma W_t - \frac12\sigma^2 t}$ | $Y_0$ | $Y_0^2\big(e^{\sigma^2 t} - 1\big)$ |
| **Ornstein–Uhlenbeck** | $dX = \theta(\mu - X)\,dt + \sigma\,dW$ | $\mu + (X_0-\mu)e^{-\theta t} + \sigma\!\int_0^t\! e^{-\theta(t-s)}dW_s$ | $\mu + (X_0-\mu)e^{-\theta t}$ | $\dfrac{\sigma^2}{2\theta}\big(1 - e^{-2\theta t}\big)$ |
| **Brownian bridge** ($0\to0$ on $[0,1]$) | $dB = -\dfrac{B_t}{1-t}\,dt + dW$ | $(1-t)\!\int_0^t\!\dfrac{dW_s}{1-s} \;\overset{d}{=}\; W_t - t\,W_1$ | $0$ | $t(1-t)$ |

**Method per row.** GBM: take logs — $\log$ is concave, so Itô's correction is
negative and $d(\log S) = (\mu - \tfrac12\sigma^2)dt + \sigma\,dW$. OU:
integrating factor $e^{\theta t}$, with **no** Itô correction because the noise is
additive and $e^{\theta t}x$ is linear in $x$. Bridge: same integrating-factor
idea with the time-dependent factor $1/(1-t)$.

**Reading the rows.** OU's variance saturates at $\sigma^2/2\theta$ (the
stationary law $\mathcal{N}(\mu, \sigma^2/2\theta)$, autocovariance
$\frac{\sigma^2}{2\theta}e^{-\theta|h|}$, half-life $\ln 2/\theta$); GBM's mean
grows at $\mu$ while its **median** $S_0e^{(\mu - \frac12\sigma^2)t}$ grows more
slowly; the bridge's variance vanishes at both ends because it is pinned.

*From* [3.2](lessons/03-02-ito-processes-general-formula.md), [3.4](lessons/03-04-geometric-brownian-motion.md), [3.5](lessons/03-05-ornstein-uhlenbeck-process.md); the bridge extends [1.2](lessons/01-02-gaussian-structure-of-bm.md)

### Change of measure

$$\mathbb{E}_Q[X] = \mathbb{E}_P[ZX], \qquad \mathbb{E}_P[X] = \mathbb{E}_Q[Z^{-1}X], \qquad \mathbb{E}_Q[X\mid\mathcal{F}_s] = \frac{\mathbb{E}_P[Z_tX\mid\mathcal{F}_s]}{Z_s}$$

The archetype: reweighting $\mathcal{N}(0,1)$ into $\mathcal{N}(\theta,1)$ uses
$Z = e^{\theta x - \theta^2/2}$ — the exponential martingale. It moves the
**mean** and leaves the **variance** alone.

*From* [4.1](lessons/04-01-radon-nikodym-equivalent-measures.md)

### Girsanov's theorem

Reweight the probability of each path, and a drifted process becomes a plain
Brownian motion. Let $\theta_t$ be adapted and satisfy Novikov; define

$$Z_t = \exp\!\left(-\int_0^t\theta_s\,dW_s - \tfrac12\int_0^t\theta_s^2\,ds\right), \qquad \frac{dQ}{dP} = Z_T.$$

Then $Q \sim P$ and

$$\widetilde W_t = W_t + \int_0^t\theta_s\,ds \quad\text{is a standard Brownian motion under } Q.$$

**Drift-removal recipe.** For $dX = \mu_t\,dt + \sigma_t\,dW^P$, take
$\theta_t = \mu_t/\sigma_t$; then $dX = \sigma_t\,dW^Q$ — a $Q$-martingale. For
pricing, take $\theta = \frac{\mu - r}{\sigma}$ (the market price of risk) so the
stock drifts at the risk-free rate:

$$dS = \mu S\,dt + \sigma S\,dW^P \quad\xrightarrow{\ Q\ }\quad dS = rS\,dt + \sigma S\,dW^Q, \qquad d\big(e^{-rt}S_t\big) = \sigma e^{-rt}S_t\,dW^Q$$

| Changes under $Q$ | Does **not** change under $Q$ |
|---|---|
| the drift $\mu$ (removed, shifted, or installed) | the diffusion coefficient $\sigma$ |
| which processes are martingales | the quadratic variation $[X]$ (a pathwise limit) |
| expectations, $\mathbb{E}_P \to \mathbb{E}_Q$ | the null sets — which paths are possible at all |

If a change of measure appears to have altered a volatility, the computation is
wrong. Always tag a Brownian motion with its measure: $W^Q = W^P + \int\theta\,ds$
is Brownian under $Q$ and carries drift $\theta$ under $P$.

*From* [4.2](lessons/04-02-girsanov-theorem.md)

### Martingale representation

On a Brownian filtration there are no martingales *except* stochastic integrals:
for $M$ a martingale with $M_T \in L^2$ there is a unique adapted $H$ with

$$M_t = M_0 + \int_0^t H_s\,dW_s, \qquad\text{equivalently}\qquad X = \mathbb{E}[X] + \int_0^T H_s\,dW_s \ \ (X \in L^2, \ \mathcal{F}_T\text{-measurable}).$$

The theorem gives existence, not a formula. In practice: write the value process
$M_t = \mathbb{E}_Q[\text{discounted payoff}\mid\mathcal{F}_t]$, apply Itô, and
read $H$ off the $dW$ coefficient — $M_0$ is the price, $H$ is the hedge.
(Clark–Ocone, $H_t = \mathbb{E}[D_tX\mid\mathcal{F}_t]$, is the constructive
version; Malliavin calculus is not developed in this course.)

*From* [4.3](lessons/04-03-martingale-representation.md)

### Generators and Dynkin's formula

$$\frac{d}{dt}\mathbb{E}[f(X_t)] = \mathbb{E}[\mathcal{A}f(X_t)] \qquad\Longrightarrow\qquad \text{moments solve ODEs}$$

$$M_t^f = f(X_t) - \int_0^t\mathcal{A}f(X_s)\,ds \ \text{ is a martingale}, \qquad \mathbb{E}_x[f(X_\tau)] = f(x) + \mathbb{E}_x\!\left[\int_0^\tau\mathcal{A}f(X_s)\,ds\right]$$

Dynkin's formula needs the same kind of integrability as optional stopping
($\mathbb{E}_x[\tau] < \infty$, or localize with $\tau\wedge n$).
$f$ is **harmonic** ($\mathcal{A}f = 0$) exactly when $f(X_t)$ is a martingale.

| Process | Generator $\mathcal{A}f$ | Harmonic functions |
|---|---|---|
| Brownian motion | $\tfrac12 f''$ | affine $f(x) = ax + b$ |
| Geometric BM | $\mu x f' + \tfrac12\sigma^2x^2f''$ | $f = $ const, and $x^{1 - 2\mu/\sigma^2}$ |
| Ornstein–Uhlenbeck | $\theta(\mu - x)f' + \tfrac12\sigma^2f''$ | $f = $ const |

*From* [4.4](lessons/04-04-infinitesimal-generator.md)

### Feynman–Kac: expectations are PDEs

$$u(t,x) = \mathbb{E}\big[e^{-r(T-t)}g(X_T)\,\big|\,X_t = x\big] \quad\Longleftrightarrow\quad \partial_t u + \mu(x)\partial_x u + \tfrac12\sigma(x)^2\partial_{xx}u - ru = 0,\quad u(T,x) = g(x)$$

Why it's true in one line: $e^{-rt}u(t,X_t)$ is a conditional expectation of a
fixed random variable, hence a martingale, hence drift-free — and Itô says its
drift is the bracket above.

| Case | Equation |
|---|---|
| $r = 0$ | $\partial_t u + \mathcal{A}u = 0$ — the **backward Kolmogorov** equation |
| Brownian motion, $r = 0$ | $\partial_t u + \tfrac12\partial_{xx}u = 0$; with $\tau = T-t$, the heat equation $\partial_\tau u = \tfrac12\partial_{xx}u$ |
| GBM under $Q$ | $\partial_t V + rS\partial_S V + \tfrac12\sigma^2S^2\partial_{SS}V - rV = 0$ — **Black–Scholes** |
| running cost $f(X_s)$ | same PDE with $-f(x)$ added on the left |

The condition is **terminal**, not initial: you know the payoff at maturity and
solve backward. Use the drift of whichever measure the expectation is taken
under — for pricing that is $r$, not $\mu$.

*From* [4.5](lessons/04-05-feynman-kac.md)

### Fokker–Planck: densities move forward

$$\partial_t p(t,x) = -\partial_x\big[\mu(x)p\big] + \tfrac12\partial_{xx}\big[\sigma(x)^2p\big] = \mathcal{A}^*p, \qquad \partial_t p + \partial_x J = 0,\ \ J = \mu p - \tfrac12\partial_x(\sigma^2p)$$

The coefficients sit **inside** the derivatives — that is what makes
$\mathcal{A}^*$ the adjoint, $\int(\mathcal{A}f)p\,dx = \int f(\mathcal{A}^*p)\,dx$.
Observables evolve backward by $\mathcal{A}$; densities evolve forward by
$\mathcal{A}^*$.

| Process | Forward equation | Density / stationary law |
|---|---|---|
| Brownian motion | $\partial_t p = \tfrac12\partial_{xx}p$ (heat equation) | $p(t,x) = \frac{1}{\sqrt{2\pi t}}e^{-x^2/2t}$; **no** stationary law |
| Ornstein–Uhlenbeck | $\partial_t p = -\partial_x[\theta(\mu-x)p] + \tfrac12\sigma^2\partial_{xx}p$ | $p_\infty \propto e^{-\theta(x-\mu)^2/\sigma^2}$, i.e. $\mathcal{N}(\mu, \sigma^2/2\theta)$ |
| Geometric BM | $\partial_t p = -\partial_x(\mu x p) + \tfrac12\sigma^2\partial_{xx}(x^2p)$ | lognormal density |

Fastest route to a stationary density in one dimension: set the current to zero,
$\mu p_\infty = \tfrac12\big(\sigma^2p_\infty\big)'$, and solve that first-order
ODE. For the Langevin velocity equation
$m\,dV = -\gamma V\,dt + \sqrt{2\gamma k_BT}\,dW$ — an OU process with
$\theta = \gamma/m$, $\mu = 0$ — it returns $\mathcal{N}(0, k_BT/m)$, the
Maxwell–Boltzmann law and the fluctuation–dissipation theorem.

*From* [4.6](lessons/04-06-fokker-planck-kolmogorov.md)

## Assumed, not taught here

This is a Tier 1 course that deliberately leans on `probability-theory` for the
measure-theoretic construction rather than rebuilding it. Start at that course's
card — [probability-theory reference card](../probability-theory/reference.md) —
for anything measure-theoretic; the rows below point at the specific lesson.

| Fact | Where it's taught |
|---|---|
| σ-algebras as information; measurability | [probability-theory 1.2](../probability-theory/lessons/01-02-sigma-algebras.md), [2.1](../probability-theory/lessons/02-01-random-variables-measurability.md) |
| Conditional expectation; tower property; pulling out what's known | [probability-theory 5.1](../probability-theory/lessons/05-01-conditional-expectation.md), [5.2](../probability-theory/lessons/05-02-conditional-expectation-properties.md) |
| Radon–Nikodym theorem (the existence result behind $dQ/dP$) | [probability-theory 5.1](../probability-theory/lessons/05-01-conditional-expectation.md) |
| Discrete-time martingales and optional stopping (upgraded to continuous time in [1.6](lessons/01-06-stopping-times-optional-stopping.md)) | [probability-theory 5.3](../probability-theory/lessons/05-03-martingales.md), [5.4](../probability-theory/lessons/05-04-stopping-times-optional-stopping.md) |
| Uniform integrability; the martingale convergence theorem | [probability-theory 5.5](../probability-theory/lessons/05-05-martingale-convergence.md) |
| Central limit theorem (Donsker is its functional version) | [probability-theory 4.5](../probability-theory/lessons/04-05-central-limit-theorem.md) |
| Gaussian MGF / characteristic function (value tabulated above) | [probability-theory 4.3](../probability-theory/lessons/04-03-characteristic-functions.md) |
| Jointly Gaussian: uncorrelated $\Rightarrow$ independent | [probability-theory 3.1](../probability-theory/lessons/03-01-independence.md) |
| $L^2$ completeness (Riesz–Fischer) — why the Itô construction converges | [probability-theory 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md), Cauchy sequences in [real-analysis 2.4](../real-analysis/lessons/02-04-cauchy-sequences.md) |
| Extending an integral from simple functions by an $L^2$ limit | [probability-theory 2.3](../probability-theory/lessons/02-03-lebesgue-integral-expectation.md) |
| Picard–Lindelöf (the ODE model for SDE existence/uniqueness) | [dynamical-systems 1.1](../dynamical-systems/lessons/01-01-flows-on-the-line.md) |
| Integrating factor for a linear first-order equation (the OU method) | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| The heat equation and parabolic PDEs, solved analytically | [pdes 2.1](../pdes/lessons/02-01-heat-diffusion-equations.md), [4.2](../pdes/lessons/04-02-heat-equation-line-heat-kernel.md) |
| Kolmogorov extension and continuity theorems (existence of BM, [1.1](lessons/01-01-random-walks-to-brownian-motion.md)) | **stated only here** — no course in the library derives them; take them on faith, and note the continuity criterion is exactly the moment bound $\mathbb{E}\lvert W_t - W_s\rvert^4 = 3\lvert t-s\rvert^2$ |
| Malliavin derivative / Clark–Ocone ([4.3](lessons/04-03-martingale-representation.md)) | **not taught anywhere in the library** — mentioned only as the constructive route to a hedge; nothing in this course depends on it |

## Pitfalls

### Brownian paths

- $\operatorname{Cov}(W_s,W_t)$ is $\min(s,t)$ — the *earlier* time — not $st$ and not $s+t$. *([1.2](lessons/01-02-gaussian-structure-of-bm.md))*
- The *increments* are independent, not the *values*: $W_s$ and $W_t$ are correlated. Decompose into disjoint increments before invoking independence. *([1.1](lessons/01-01-random-walks-to-brownian-motion.md), [1.2](lessons/01-02-gaussian-structure-of-bm.md))*
- Continuous does not buy differentiable anywhere: the difference quotient is $\mathcal{N}(0, 1/h)$ and spreads without bound. There is no $\dot W$, so never write $dW = W'(t)\,dt$ or "solve for $dX/dt$". *([1.4](lessons/01-04-pathological-paths.md), [3.3](lessons/03-03-stochastic-differential-equations.md))*
- Scaling is forced, not chosen: space $1/\sqrt n$ with time $1/n$. Any other pairing collapses or blows up the limit. *([1.1](lessons/01-01-random-walks-to-brownian-motion.md))*
- The pathology is *local* — infinite variation on $[0,\varepsilon]$ for every $\varepsilon > 0$. Small time steps don't dodge it. *([1.4](lessons/01-04-pathological-paths.md))*
- Markov does not mean "the past is irrelevant"; it means the past matters only through the present value. *([1.3](lessons/01-03-filtrations-adaptedness-markov.md))*
- Adaptedness is about information, not regularity — kinky processes can be adapted, smooth ones (like $W_{t+1}$, $W_{2t}$) need not be. *([1.3](lessons/01-03-filtrations-adaptedness-markov.md))*

### Quadratic variation and martingales

- Quadratic variation is **deterministic** ($[W]_t = t$) even though the path is random; total variation is random *and* infinite. *([1.5](lessons/01-05-quadratic-variation-martingale-property.md))*
- $W_t^2$ is not a martingale — it drifts up by its own variance. $W_t^2 - t$ is. Forgetting the compensator is the classic early error, and it is the same term Itô's lemma reinstates. *([1.5](lessons/01-05-quadratic-variation-martingale-property.md), [3.1](lessons/03-01-itos-lemma-for-bm.md))*
- "Martingale" means zero drift, not zero movement and not convergence: $W_t$ has variance $t \to \infty$. *([2.4](lessons/02-04-ito-integral-as-martingale.md))*
- Optional stopping needs a hypothesis. The one-sided hitting time $\tau_1 = \inf\{t: W_t = 1\}$ is the standing counterexample: $\tau_1 < \infty$ a.s. but $\mathbb{E}[W_{\tau_1}] = 1 \ne 0$. Dynkin's formula needs the same care. *([1.6](lessons/01-06-stopping-times-optional-stopping.md), [4.4](lessons/04-04-infinitesimal-generator.md))*
- Not every random time is a stopping time: "last zero before $T$" and "time of the maximum" look forward. First-hitting and first-exit times don't. *([1.6](lessons/01-06-stopping-times-optional-stopping.md))*
- Doob bounds the supremum in expectation/probability only — never pathwise. *([1.6](lessons/01-06-stopping-times-optional-stopping.md))*

### Building and using the integral

- Where you sample is the whole story, not a convention: left, midpoint and right differ by $\pm\tfrac12 T$ for $\int_0^T W\,dW$, and only the left endpoint gives a martingale. Stratonovich integrals get **no** mean-zero shortcut. *([2.1](lessons/02-01-why-riemann-stieltjes-fails.md), [2.4](lessons/02-04-ito-integral-as-martingale.md))*
- $\int_0^T W\,dW \ne \tfrac12 W_T^2$. That is the ordinary-calculus (Stratonovich) answer; Itô owes you $-\tfrac12 T$. *([2.1](lessons/02-01-why-riemann-stieltjes-fails.md))*
- The integrand must be adapted **and** square-integrable. Let $\xi_k$ depend on its own block's increment and the mean-zero proof collapses; drop $\mathbb{E}\int H^2\,dt < \infty$ and you have only a local martingale, where "delete it in expectation" can fail. *([2.2](lessons/02-02-ito-integral-simple-integrands.md), [2.3](lessons/02-03-ito-isometry-general-integral.md), [2.4](lessons/02-04-ito-integral-as-martingale.md))*
- The isometry is $\mathbb{E}\int_0^T H_t^2\,dt$ — square, then integrate in time, then take the expectation. It is not $\big(\mathbb{E}\int H\,dt\big)^2$ or $\int(\mathbb{E}H)^2dt$, and it gives the *variance*, not the law. *([2.3](lessons/02-03-ito-isometry-general-integral.md))*
- Only a **deterministic** integrand makes the integral Gaussian. *([2.2](lessons/02-02-ito-integral-simple-integrands.md), [2.3](lessons/02-03-ito-isometry-general-integral.md))*

### Applying Itô's lemma

- Keeping $dt\,dW$ or $(dt)^2$ is the standard mechanical error; dropping them is exact, not an approximation. And $(dW)^2$ is neither $0$ nor random — it is $dt$. *([2.5](lessons/02-05-quadratic-variation-dwdw-rules.md))*
- Writing $df(W) = f'(W)\,dW$ is *the* error of the subject. If your answer looks like ordinary calculus, you dropped $\tfrac12 f''\,dt$. *([3.1](lessons/03-01-itos-lemma-for-bm.md))*
- The correction uses $\sigma^2$, never $\mu^2$ or $\sigma$: $(dX)^2 = \sigma^2\,dt$, and the drift contributes nothing. The same $\tfrac12\sigma^2$ (not $\tfrac12\sigma$) sits in the generator. *([3.2](lessons/03-02-ito-processes-general-formula.md), [4.4](lessons/04-04-infinitesimal-generator.md))*
- With an explicit $t$ in $f$, the drift has **three** pieces — omitting $\partial_t f$ breaks every discounting and PDE computation. *([3.2](lessons/03-02-ito-processes-general-formula.md))*
- Drift does not transform linearly: a positive drift in $X$ can become a negative drift in $f(X)$ when $f$ is concave — that is volatility drag. *([3.2](lessons/03-02-ito-processes-general-formula.md), [3.4](lessons/03-04-geometric-brownian-motion.md))*
- Stop at second order. $(dW)^3 = (dt)^{3/2}$ vanishes; third-order terms are a jump-process concern, not a Brownian one. *([3.1](lessons/03-01-itos-lemma-for-bm.md))*
- Include the cross term $dX\,dY$ whenever both factors carry (correlated) noise, and omit it when one has finite variation — check before adding. *([3.6](lessons/03-06-product-rule-integration-by-parts.md))*

### Solving SDEs

- $\log S$ drifts at $\mu - \tfrac12\sigma^2$, not $\mu$. This is the signature computation; getting it wrong misprices everything downstream. *([3.4](lessons/03-04-geometric-brownian-motion.md))*
- Volatility drag lowers the median, not the mean: $\mathbb{E}[S_t] = S_0e^{\mu t}$ whatever $\sigma$ is. A positive-drift stock can still be more likely than not to be *down* when $\sigma^2 > 2\mu$. *([3.4](lessons/03-04-geometric-brownian-motion.md))*
- Additive noise needs **no** Itô correction in the integrating-factor step; multiplicative noise does. That is the one structural difference between the OU and GBM solutions. *([3.5](lessons/03-05-ornstein-uhlenbeck-process.md))*
- In the OU parameters, $\theta$ is the reversion *speed* and $\mu$ is the mean — swapping them is easy and fatal. *([3.5](lessons/03-05-ornstein-uhlenbeck-process.md))*
- Match the model to the quantity: GBM for things that stay positive and compound; OU for things that mean-revert or go negative. *([3.4](lessons/03-04-geometric-brownian-motion.md), [3.5](lessons/03-05-ornstein-uhlenbeck-process.md))*
- Glance at Lipschitz and linear growth before solving — non-Lipschitz or superlinear coefficients can give no solution, many solutions, or a finite-time explosion. *([3.3](lessons/03-03-stochastic-differential-equations.md))*
- "The solution" is a whole process (a law over paths), not one simulated trajectory. *([3.3](lessons/03-03-stochastic-differential-equations.md))*

### Changing measure and crossing to PDEs

- Girsanov moves drift and **never** volatility — quadratic variation is measure-invariant. If $\sigma$ changed, the work is wrong. *([4.1](lessons/04-01-radon-nikodym-equivalent-measures.md), [4.2](lessons/04-02-girsanov-theorem.md))*
- Tag every Brownian motion with its measure. $W^Q = W^P + \int\theta\,ds$ is Brownian under $Q$ and drifted under $P$; every drift computation depends on which one you're in. *([4.2](lessons/04-02-girsanov-theorem.md))*
- Absolute continuity is one-directional; Girsanov needs *equivalence*, which comes from $Z > 0$. And a candidate density must satisfy $Z \ge 0$ with $\mathbb{E}_P[Z] = 1$ — Novikov is what guarantees it, and skipping the check can leave you with a strict local martingale and $\mathbb{E}_P[Z_T] < 1$. *([4.1](lessons/04-01-radon-nikodym-equivalent-measures.md), [4.2](lessons/04-02-girsanov-theorem.md))*
- Martingale representation is existence and uniqueness, not a formula — find $H$ by applying Itô to the value process. And it needs a *Brownian* filtration: an extra untraded noise makes the market incomplete and the representation fail. *([4.3](lessons/04-03-martingale-representation.md))*
- Feynman–Kac runs backward from a **terminal** condition, uses the drift of the measure the expectation is taken under (for pricing, $r$, not $\mu$), and carries $-ru$ only when there is discounting. *([4.5](lessons/04-05-feynman-kac.md))*
- Densities evolve by the adjoint $\mathcal{A}^*$, with coefficients *inside* the derivatives; observables evolve by $\mathcal{A}$. Constant coefficients hide the difference — state-dependent ones don't. *([4.6](lessons/04-06-fokker-planck-kolmogorov.md))*
- A stationary distribution is not guaranteed: without a confining drift (Brownian motion, geometric Brownian motion) the density spreads forever. And total probability must stay $1$ — Fokker–Planck is a continuity equation. *([4.6](lessons/04-06-fokker-planck-kolmogorov.md))*
