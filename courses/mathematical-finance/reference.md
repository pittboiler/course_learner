# Mathematical Finance · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course prices things it cannot forecast. One move does all the work: if a
traded portfolio reproduces a payoff in every state, no-arbitrage forces their
prices to match — and that replication price is always a discounted expectation
under a manufactured measure. The card holds the bookkeeping you need mid-problem:
the exact hypotheses of the two fundamental theorems, the full Black–Scholes
assumption list, the Greeks table, and the numéraire/measure-change ledger. The
Itô machinery that drives all of it lives on the
[stochastic calculus card](../stochastic-calculus/reference.md).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\omega$, $\{\omega_1,\dots,\omega_n\}$ | a state of the world at the future date; the finite list of what can happen | [1.1](lessons/01-01-arbitrage-law-of-one-price.md) |
| $P_0$, $P_T(\omega)$ | a portfolio's cost today, and its payoff in state $\omega$ | [1.1](lessons/01-01-arbitrage-law-of-one-price.md) |
| $F$ | forward price — the delivery price agreed today for a purchase at $T$ | [1.1](lessons/01-01-arbitrage-law-of-one-price.md) |
| $u$, $d$ | gross up/down factors: $S_u = uS_0$, $S_d = dS_0$, with $d<u$ | [1.2](lessons/01-02-replication-complete-markets.md) |
| $R = 1+r$ | gross riskless return over one period — one dollar in the bond becomes $R$ | [1.2](lessons/01-02-replication-complete-markets.md) |
| $\Delta$, $B$ | the replicating portfolio: $\Delta$ shares of stock, $B$ **dollars** in the bond | [1.2](lessons/01-02-replication-complete-markets.md) |
| $q$, $1-q$ | risk-neutral probabilities of the up/down state — pricing weights, not beliefs | [1.3](lessons/01-03-one-period-model-pricing-measure.md) |
| $\psi_u,\psi_d$, $\psi$ | Arrow–Debreu state prices: today's cost of one dollar delivered in one state | [1.3](lessons/01-03-one-period-model-pricing-measure.md) |
| $\mathbb{P}$, $\mathbb{Q}$ | the physical (real-world) measure and the risk-neutral pricing measure | [1.3](lessons/01-03-one-period-model-pricing-measure.md) |
| $\theta$, $D$ | portfolio holdings vector; payoff matrix (row = asset, column = state) | [1.4](lessons/01-04-fundamental-theorem-asset-pricing.md) |
| $(x)^+$ | $\max(x,0)$ — the hockey-stick that makes a payoff an option | [1.5](lessons/01-05-binomial-model-risk-neutral-valuation.md) |
| $B_t = e^{rt}$ | money-market account; the default numéraire (also $e^{\int_0^t r_s ds}$ when $r$ is random) | [2.1](lessons/02-01-continuous-time-market-self-financing.md) |
| $\varphi_t$, $\psi_t$ | trading strategy: shares of stock and units of bank account held at $t$ | [2.1](lessons/02-01-continuous-time-market-self-financing.md) |
| $X_t$, $\tilde X_t = X_t/B_t$ | portfolio wealth, and wealth measured in numéraire units (discounted) | [2.1](lessons/02-01-continuous-time-market-self-financing.md) |
| $\mu$, $\sigma$ | real-world drift and volatility of the stock; $\sigma$ is the same under $\mathbb{P}$ and $\mathbb{Q}$ | [2.1](lessons/02-01-continuous-time-market-self-financing.md) |
| $W_t$, $W^{\mathbb{Q}}_t$ | Brownian motion under $\mathbb{P}$, and the Girsanov-shifted one under $\mathbb{Q}$ | [2.1](lessons/02-01-continuous-time-market-self-financing.md) |
| $V(t,S)$; $V_t, V_S, V_{SS}$ | option value and its partials in time and spot | [2.2](lessons/02-02-black-scholes-pde-delta-hedging.md) |
| $\lambda$ (also written $\theta$) | market price of risk $(\mu-r)/\sigma$ — excess return per unit of volatility | [2.3](lessons/02-03-risk-neutral-pricing-girsanov-feynman-kac.md) |
| $N(x)$, $\varphi(x)=N'(x)$ | standard-normal CDF and density | [2.4](lessons/02-04-black-scholes-formula.md) |
| $d_1$, $d_2$ | the two Black–Scholes arguments; always $d_1 = d_2 + \sigma\sqrt{T} > d_2$ | [2.4](lessons/02-04-black-scholes-formula.md) |
| $\Delta,\Gamma,\Theta,\nu,\rho$ | the Greeks: spot, curvature, time, volatility, rate sensitivities | [2.5](lessons/02-05-greeks-dynamic-hedging.md) |
| $\sigma_{\text{imp}}(K,T)$ | implied volatility — the market price rewritten in volatility units | [2.6](lessons/02-06-implied-volatility-smile.md) |
| $w$, $\Sigma$, $\mathbf{1}$ | portfolio weights (summing to 1), covariance matrix, all-ones vector | [3.1](lessons/03-01-mean-variance-efficient-frontier.md) |
| $\mu_p$, $\sigma_p$, $r_f$ | portfolio mean and standard deviation; risk-free rate | [3.1](lessons/03-01-mean-variance-efficient-frontier.md) |
| $\beta_i$, $\alpha_i$, $R_M$ | market exposure, excess return above the SML, market return | [3.2](lessons/03-02-capm.md) |
| $m$ | stochastic discount factor / pricing kernel — one number per state | [3.3](lessons/03-03-expected-utility-stochastic-discount-factor.md) |
| $\beta$ (Module 3) | the investor's **impatience** discount factor, just below 1 — not a CAPM beta | [3.3](lessons/03-03-expected-utility-stochastic-discount-factor.md) |
| $\gamma$ | coefficient of relative risk aversion (CRRA) | [3.3](lessons/03-03-expected-utility-stochastic-discount-factor.md) |
| $\pi_t$, $c_t$ | fraction of wealth in the risky asset; consumption **rate** | [3.4](lessons/03-04-merton-optimal-consumption-portfolio.md) |
| $\rho$ (Module 3) | subjective time-discount **rate** in the HJB — not the Greek rho, not a correlation | [3.4](lessons/03-04-merton-optimal-consumption-portfolio.md) |
| $P(t,T)$ | price today of a zero-coupon bond paying one dollar at $T$; $P(T,T)=1$ | [4.1](lessons/04-01-term-structure-bond-pricing.md) |
| $y(t,T)$, $f(t,T)$, $r_t$ | yield to $T$, instantaneous forward rate at horizon $T$, short rate | [4.1](lessons/04-01-term-structure-bond-pricing.md) |
| $\tau = T-t$ | time to maturity | [4.1](lessons/04-01-term-structure-bond-pricing.md) |
| $a$, $b$ | short-rate mean-reversion speed and long-run level | [4.2](lessons/04-02-short-rate-models-vasicek-cir.md) |
| $A(t,T)$, $B(t,T)$ | affine bond coefficients: $P = \exp(A - B r_t)$ | [4.2](lessons/04-02-short-rate-models-vasicek-cir.md) |
| $Q^N$, $Q^T$ | the martingale measure attached to numéraire $N$; the $T$-forward measure | [4.3](lessons/04-03-forward-measures-changing-numeraire.md) |
| $F(t,T) = S_t/P(t,T)$ | forward price as a ratio of traded assets — a $Q^T$-martingale | [4.3](lessons/04-03-forward-measures-changing-numeraire.md) |
| $\tau$ (Module 4.4) | a **stopping time** — an exercise rule using no future information | [4.4](lessons/04-04-american-options-optimal-stopping.md) |
| $g(S)$, $S^*(t)$ | intrinsic value; the exercise boundary (free boundary) | [4.4](lessons/04-04-american-options-optimal-stopping.md) |
| $\underline{\pi}(H)$, $\overline{\pi}(H)$, $\mathcal{Q}$ | sub-/super-replication price bounds; the set of all EMMs | [4.5](lessons/04-05-incomplete-markets-model-risk.md) |

## Definitions

### Arbitrage

Free money: a position that can never lose and either costs nothing while it
might win, or pays you upfront while it can't lose. Probabilities never enter —
only which states are *possible*.

$$\text{Type A: } P_0 \le 0,\ P_T(\omega)\ge 0\ \forall\omega,\ P_T(\omega)>0 \text{ some }\omega; \qquad \text{Type B: } P_0 < 0,\ P_T(\omega)\ge 0\ \forall\omega.$$

*Introduced:* [1.1](lessons/01-01-arbitrage-law-of-one-price.md)

### Law of one price

Same future cash in every scenario means the same price now — otherwise buy the
cheap one, sell the dear one, and pocket the gap risk-free.

$$X_T(\omega) = Y_T(\omega)\ \forall\omega \;\Longrightarrow\; X_0 = Y_0.$$

*Introduced:* [1.1](lessons/01-01-arbitrage-law-of-one-price.md)

### Replicating portfolio

A basket of traded assets that reproduces a derivative's payoff in every state;
its cost today is then the derivative's only arbitrage-free price.

$$\Delta S_u + RB = V_u,\quad \Delta S_d + RB = V_d \;\Longrightarrow\; V_0 = \Delta S_0 + B.$$

*Introduced:* [1.2](lessons/01-02-replication-complete-markets.md)

### Complete market

Every payoff you can dream up is manufacturable from traded assets. It's a rank
count, not an asset count: the marketed payoffs must span the whole state space.

$$\operatorname{rank}(D) = n \quad (n = \text{number of states}).$$

*Introduced:* [1.2](lessons/01-02-replication-complete-markets.md) · restated as FTAP II in [1.4](lessons/01-04-fundamental-theorem-asset-pricing.md)

### State price (Arrow–Debreu price)

What one dollar delivered in a single specified state costs today. Any payoff is
a bundle of these, so state prices price everything by one dot product.

$$V_0 = \sum_s \psi_s\,V(\omega_s), \qquad \psi_s = \frac{q_s}{R}, \qquad \sum_s \psi_s = \frac{1}{R}.$$

*Introduced:* [1.3](lessons/01-03-one-period-model-pricing-measure.md)

### Risk-neutral measure

The synthetic odds under which every asset drifts at the riskless rate, so that
pricing collapses to "discount the expected payoff." Not anyone's belief.

$$q = \frac{R-d}{u-d}, \qquad V_0 = \frac{1}{R}\mathbb{E}^{\mathbb{Q}}[V_1].$$

*Introduced:* [1.3](lessons/01-03-one-period-model-pricing-measure.md)

### Numéraire

The asset you quote all other prices *in units of*. Discounting is just dividing
by it; every positive traded asset is a legal choice.

*Introduced:* [1.3](lessons/01-03-one-period-model-pricing-measure.md) · exploited in [4.3](lessons/04-03-forward-measures-changing-numeraire.md)

### Equivalent martingale measure (EMM)

A probability that agrees with reality about what is *possible* (strictly
positive on every state $\mathbb{P}$ charges) and under which every asset's
numéraire-discounted price is a martingale.

$$q_i > 0\ \forall i, \qquad S_0^{(k)} = \mathbb{E}^{\mathbb{Q}}\big[\text{discounted payoff of }k\big].$$

*Introduced:* [1.4](lessons/01-04-fundamental-theorem-asset-pricing.md)

### Self-financing strategy

Once you start, no cash enters or leaves: all wealth change comes from prices
moving, and every rebalance is funded from inside the portfolio.

$$dX_t = \varphi_t\,dS_t + \psi_t\,dB_t \iff S_t\,d\varphi_t + B_t\,d\psi_t + d\varphi_t\,dS_t = 0.$$

*Introduced:* [2.1](lessons/02-01-continuous-time-market-self-financing.md)

### Admissible strategy

Self-financing *and* with wealth bounded below — you may borrow, but your losses
can't run to minus infinity. Without it, doubling strategies re-import arbitrage
into continuous time.

$$X_t \ge -c \ \text{ for some constant } c,\ \text{ all } t.$$

*Introduced:* [2.1](lessons/02-01-continuous-time-market-self-financing.md)

### Market price of risk

How much extra drift the market pays per unit of volatility — a Sharpe-ratio-like
number. Girsanov shifts the Brownian motion by exactly this much.

$$\lambda = \frac{\mu - r}{\sigma}, \qquad W^{\mathbb{Q}}_t = W_t + \lambda t.$$

*Introduced:* [2.3](lessons/02-03-risk-neutral-pricing-girsanov-feynman-kac.md)

### Implied volatility

The one volatility that makes the Black–Scholes formula reproduce the market
price — a change of coordinates on the price, never a forecast. Unique because
vega is strictly positive.

$$C_{BS}(\sigma_{\text{imp}}) = C_{\text{market}}.$$

*Introduced:* [2.6](lessons/02-06-implied-volatility-smile.md)

### Volatility smile / skew

Implied vol plotted against strike. Black–Scholes predicts a flat line; equities
show a downward skew, FX a symmetric smile — the market saying the risk-neutral
density is fatter-tailed and more skewed than log-normal.

*Introduced:* [2.6](lessons/02-06-implied-volatility-smile.md)

### Efficient frontier

The upper branch of the hyperbola traced by minimum-variance portfolios: the most
expected return available at each level of risk. The lower branch is dominated.

$$\min_w\ \tfrac12 w^\top\Sigma w \quad\text{s.t.}\quad w^\top\mu = \mu_{\text{target}},\ w^\top\mathbf{1}=1.$$

*Introduced:* [3.1](lessons/03-01-mean-variance-efficient-frontier.md)

### Tangency portfolio

The risky mix with the highest Sharpe ratio — where the line from the risk-free
rate touches the frontier. With a risk-free asset, everyone holds this one bundle
and differs only in how much cash they pair with it (two-fund separation).

$$w_{\text{tan}} \propto \Sigma^{-1}(\mu - r_f\mathbf{1}).$$

*Introduced:* [3.1](lessons/03-01-mean-variance-efficient-frontier.md)

### Sharpe ratio

Reward per unit of risk — the slope of the Capital Market Line.

$$S = \frac{\mu_p - r_f}{\sigma_p}, \qquad S^2_{\max} = (\mu - r_f\mathbf{1})^\top\Sigma^{-1}(\mu - r_f\mathbf{1}).$$

*Introduced:* [3.1](lessons/03-01-mean-variance-efficient-frontier.md)

### Beta

How much of the market's move an asset inherits — the only risk a diversified
holder can't shed, hence the only risk that is paid for.

$$\beta_i = \frac{\operatorname{Cov}(R_i,R_M)}{\operatorname{Var}(R_M)}.$$

*Introduced:* [3.2](lessons/03-02-capm.md)

### Alpha

Expected return above what the security market line grants. Zero for every asset
inside the CAPM by construction; a measured nonzero alpha means mispricing or a
missing factor.

$$\alpha_i = \mathbb{E}[R_i] - \big(r_f + \beta_i(\mathbb{E}[R_M]-r_f)\big).$$

*Introduced:* [3.2](lessons/03-02-capm.md)

### Stochastic discount factor (SDF)

One random number per state saying what a dollar delivered there is worth to you
— impatience times relative hunger. It prices every asset in the economy.

$$m = \beta\,\frac{u'(c_1)}{u'(c_0)} > 0, \qquad p = \mathbb{E}[m\,x].$$

*Introduced:* [3.3](lessons/03-03-expected-utility-stochastic-discount-factor.md)

### Zero-coupon bond

The simplest derivative: payoff exactly one dollar at $T$. Its price is the
market's discount factor for that horizon, and under stochastic rates it becomes
an expectation rather than a multiplication.

$$P(t,T) = \mathbb{E}^{\mathbb{Q}}_t\!\left[\exp\!\left(-\int_t^T r_s\,ds\right)\right].$$

*Introduced:* [4.1](lessons/04-01-term-structure-bond-pricing.md)

### Yield

The single flat rate that would reproduce a bond's price over its whole life.
Plot it against maturity and you have the yield curve.

$$P(t,T) = e^{-y(t,T)(T-t)} \iff y(t,T) = -\frac{\ln P(t,T)}{T-t}.$$

*Introduced:* [4.1](lessons/04-01-term-structure-bond-pricing.md)

### Instantaneous forward rate

The rate you can lock in *today* for an instant of borrowing starting at $T$ —
the marginal cost of extending the horizon, hence a log-derivative of price.

$$f(t,T) = -\frac{\partial \ln P(t,T)}{\partial T}, \qquad P(t,T) = \exp\!\left(-\int_t^T f(t,u)\,du\right).$$

*Introduced:* [4.1](lessons/04-01-term-structure-bond-pricing.md)

### Short rate

The rate on a loan over the next instant — the near end of the curve.

$$r_t = f(t,t) = \lim_{T\to t} y(t,T).$$

*Introduced:* [4.1](lessons/04-01-term-structure-bond-pricing.md)

### Affine term structure

The whole curve is generated by one number, today's short rate, through two
deterministic functions of maturity. It follows whenever the drift and the
*squared* diffusion of $r$ are both affine in $r$.

$$P(t,T) = \exp\!\big(A(t,T) - B(t,T)\,r_t\big), \qquad y(t,T) = \frac{B(t,T)r_t - A(t,T)}{\tau}.$$

*Introduced:* [4.2](lessons/04-02-short-rate-models-vasicek-cir.md)

### Feller condition

The inequality that keeps a CIR rate strictly positive: near zero the upward
drift must beat the vanishing noise.

$$2ab \ge \sigma^2.$$

*Introduced:* [4.2](lessons/04-02-short-rate-models-vasicek-cir.md)

### $T$-forward measure

The martingale measure attached to the $T$-bond as numéraire. Because
$P(T,T)=1$, the random discount factor disappears into the density and reappears
as one deterministic bond price out front.

$$V_t = P(t,T)\,\mathbb{E}^{Q^T}[X_T \mid \mathcal F_t].$$

*Introduced:* [4.3](lessons/04-03-forward-measures-changing-numeraire.md)

### American option

A claim exercisable at any time up to $T$, so pricing means optimizing over
exercise rules, not just taking an expectation.

$$V_0 = \sup_{\tau \le T}\ \mathbb{E}^{\mathbb{Q}}\!\big[e^{-r\tau}g(S_\tau)\big], \qquad \tau \text{ a stopping time}.$$

*Introduced:* [4.4](lessons/04-04-american-options-optimal-stopping.md)

### Snell envelope

The value process of an optimal-stopping problem: the smallest supermartingale
that never sits below the payoff. Exercise the first time the two touch.

$$V_t = \max\big(g(S_t),\ e^{-r\Delta t}\,\mathbb{E}^{\mathbb{Q}}_t[V_{t+\Delta t}]\big).$$

*Introduced:* [4.4](lessons/04-04-american-options-optimal-stopping.md)

### Smooth pasting

The extra condition that locates the unknown exercise boundary: value *and*
delta glue together across it with no kink.

$$V(t,S^*) = g(S^*), \qquad \frac{\partial V}{\partial S}(t,S^*) = g'(S^*).$$

*Introduced:* [4.4](lessons/04-04-american-options-optimal-stopping.md)

### No-arbitrage price interval

What incompleteness leaves you: not a price but a range, one endpoint per extreme
choice of pricing measure — equivalently, the cheapest super-hedge and the
dearest sub-hedge.

$$\underline{\pi}(H) = \inf_{Q\in\mathcal{Q}} \mathbb{E}^{Q}[H], \qquad \overline{\pi}(H) = \sup_{Q\in\mathcal{Q}} \mathbb{E}^{Q}[H].$$

*Introduced:* [4.5](lessons/04-05-incomplete-markets-model-risk.md)

## Formulas and rules

### Forwards and carry

| Situation | Arbitrage-free forward price |
|---|---|
| Non-dividend asset, continuous rate | $F = S_0 e^{rT}$ |
| Discrete compounding | $F = S_0(1+r)^T$ |
| Known cash dividend $D$ at $t_d$ | $F = \big(S_0 - De^{-rt_d}\big)e^{rT} = S_0e^{rT} - De^{r(T-t_d)}$ |
| Storage cost $c$ paid at $t_c$ | $F = S_0e^{rT} + c\,e^{r(T-t_c)}$ |
| Under stochastic rates | $F(t,T) = S_t/P(t,T)$, a $Q^T$-martingale |

Cash-and-carry is the proof in one line: borrow, buy, deliver. Frictions turn the
equality into a narrow no-arbitrage band, not a different formula.

*From* [1.1](lessons/01-01-arbitrage-law-of-one-price.md), [4.3](lessons/04-03-forward-measures-changing-numeraire.md)

### One-period pricing, four equivalent dialects

$$V_0 = \underbrace{\Delta S_0 + B}_{\text{replication}} = \underbrace{\psi_u V_u + \psi_d V_d}_{\text{state prices}} = \underbrace{\tfrac{1}{R}\big[qV_u + (1-q)V_d\big]}_{\text{risk-neutral}} = \underbrace{\mathbb{E}^{\mathbb{P}}[m\,V_1]}_{\text{marginal utility}}$$

$$\Delta = \frac{V_u - V_d}{S_u - S_d}, \quad B = \frac{V_u - \Delta S_u}{R}, \quad q = \frac{R-d}{u-d} = \frac{RS_0 - S_d}{S_u - S_d}, \quad \psi_s = \frac{q_s}{R} = \mathbb{P}_s m_s.$$

Existence of a genuine probability is the no-arbitrage condition:
$0 < q < 1 \iff d < R < u$. Under $\mathbb{Q}$ the stock earns exactly $R$:
$\mathbb{E}^{\mathbb{Q}}[S_1] = RS_0$.

*From* [1.2](lessons/01-02-replication-complete-markets.md), [1.3](lessons/01-03-one-period-model-pricing-measure.md), [3.3](lessons/03-03-expected-utility-stochastic-discount-factor.md)

### The two fundamental theorems of asset pricing — exact hypotheses

**Setting.** Finitely many states $\omega_1,\dots,\omega_n$; $d$ assets with
today's discounted price vector $S_0\in\mathbb{R}^d$ and discounted payoff matrix
$D\in\mathbb{R}^{d\times n}$; a portfolio $\theta$ costs $\theta^\top S_0$ and
pays $\theta^\top D$. Discounting is by a strictly positive numéraire. The
physical measure $\mathbb{P}$ charges every listed state.

| | Statement | The count behind it |
|---|---|---|
| **FTAP I** | No arbitrage $\iff$ an **equivalent** martingale measure $\mathbb{Q}$ exists | Separating hyperplane; in finite dimensions Farkas/Stiemke: exactly one of "arbitrage exists" or "a strictly positive state-price vector exists" holds |
| **FTAP II** | Given no arbitrage: market complete $\iff$ that $\mathbb{Q}$ is **unique** | EMMs are the strictly positive solutions of $Dq = S_0$, $\sum_i q_i = 1$ — an affine slice of dimension $n - \operatorname{rank}(D)$. Full rank gives a point; a deficit gives a whole family |

Load-bearing fine print, in order of how often it's dropped:

- **Equivalent, not merely martingale.** Every $q_i > 0$. A boundary weighting can
  still make the discounted stock a martingale while deleting a state — pricing
  with it manufactures arbitrage.
- **Martingale in the *discounted* price.** The raw stock drifts; $S_t/N_t$ does not.
- **Completeness is $\operatorname{rank}(D)=n$**, not $d \ge n$ — redundant assets
  add columns, not span.
- **Continuous time needs more.** "No arbitrage" must be strengthened to **No Free
  Lunch with Vanishing Risk (NFLVR)** plus **admissibility**, and the separation
  becomes Hahn–Banach (Kreps–Yan). The punchline survives: NFLVR $\iff$ an EMM
  exists; completeness $\iff$ it is unique.

*From* [1.4](lessons/01-04-fundamental-theorem-asset-pricing.md), [2.1](lessons/02-01-continuous-time-market-self-financing.md), [4.5](lessons/04-05-incomplete-markets-model-risk.md)

### Binomial model and the CRR limit

$$V_{\text{node}} = \frac{1}{R}\big[qV_{\text{up}} + (1-q)V_{\text{down}}\big], \qquad V_0 = R^{-N}\sum_{k=0}^{N}\binom{N}{k}q^k(1-q)^{N-k}\,g\big(S_0u^kd^{N-k}\big).$$

Node-by-node hedge: $\Delta = \dfrac{V_{\text{up}}-V_{\text{down}}}{S_{\text{up}}-S_{\text{down}}}$, re-solved at *every* node. The tree
recombines ($ud = du$), so $N$ steps give $N+1$ terminal nodes.

**CRR calibration** to volatility $\sigma$ and rate $r$ over $\Delta t = T/N$:

$$u = e^{\sigma\sqrt{\Delta t}}, \quad d = e^{-\sigma\sqrt{\Delta t}} = 1/u, \quad R = e^{r\Delta t}, \quad q = \tfrac12 + \tfrac12\Big(\tfrac{r}{\sigma} - \tfrac{\sigma}{2}\Big)\sqrt{\Delta t} + O(\Delta t).$$

Per step, $\mathbb{E}^{\mathbb{Q}}[X_i] = (r-\tfrac{\sigma^2}{2})\Delta t$ and
$\operatorname{Var}^{\mathbb{Q}}[X_i] = \sigma^2\Delta t + O(\Delta t^2)$, so by the CLT
$\ln(S_T/S_0) \Rightarrow \mathcal N\big((r-\tfrac{\sigma^2}{2})T,\ \sigma^2T\big)$ and the tree price converges to Black–Scholes.

*From* [1.5](lessons/01-05-binomial-model-risk-neutral-valuation.md)

### The continuous-time market

| Object | Equation | Reading |
|---|---|---|
| Bank account | $dB_t = rB_t\,dt$, $B_t = e^{rt}$ | no $dW$, so it is the yardstick |
| Stock (GBM) | $dS_t = \mu S_t\,dt + \sigma S_t\,dW_t$ | percentage returns have constant statistics |
| Solution | $S_t = S_0\exp\big((\mu - \tfrac12\sigma^2)t + \sigma W_t\big)$ | log-normal, never negative |
| Wealth | $X_t = \varphi_tS_t + \psi_tB_t$ | a definition, not a dynamic |
| Self-financing | $dX_t = \varphi_t\,dS_t + \psi_t\,dB_t$ | an imposed constraint |
| Discounted | $d\tilde X_t = \varphi_t\,d\tilde S_t$ | in numéraire units only the stock position moves wealth |

$\mathbb{E}[S_t] = S_0e^{\mu t}$ but the median path grows at $\mu - \tfrac12\sigma^2$ — the volatility drag.

*From* [2.1](lessons/02-01-continuous-time-market-self-financing.md)

### Black–Scholes: every assumption, listed

1. One risky asset following GBM with **constant** $\mu$ and **constant** $\sigma$ — continuous paths, no jumps.
2. **Constant** riskless rate $r$; borrowing and lending at the same rate.
3. Trading is **continuous**, frictionless, and in arbitrarily divisible amounts — no transaction costs, no bid–ask spread, no taxes.
4. **Short selling** is unrestricted.
5. The hedging strategy is **self-financing** and **admissible** (wealth bounded below).
6. No dividends over the option's life (the vanilla version).
7. **European** exercise — payoff at the fixed date $T$ only.
8. No arbitrage, and the market is complete (one Brownian driver, one traded risky asset), so the EMM is unique.

Consequences worth naming: $S_T$ is log-normal under $\mathbb{Q}$; the price
depends on $S, K, T, r, \sigma$ and **never on $\mu$**; assumption 1 is the one the
smile falsifies, assumption 3 the one gamma-hedging P&L punishes.

*From* [2.2](lessons/02-02-black-scholes-pde-delta-hedging.md), [2.4](lessons/02-04-black-scholes-formula.md), [2.6](lessons/02-06-implied-volatility-smile.md)

### The Black–Scholes PDE and its data

$$V_t + \tfrac12\sigma^2S^2V_{SS} + rSV_S - rV = 0, \qquad V(T,S) = \text{payoff}(S).$$

Derivation in one line: hold $\Pi = V - V_S\,S$, the $dW$ and $\mu$ terms cancel,
and no-arbitrage forces $d\Pi = r\Pi\,dt$.

| Claim | Terminal condition | $S \to 0$ | $S \to \infty$ |
|---|---|---|---|
| Call | $(S-K)^+$ | $V = 0$ | $V \sim S - Ke^{-r(T-t)}$ |
| Put | $(K-S)^+$ | $V = Ke^{-r(T-t)}$ | $V \to 0$ |
| Forward | $S - K$ | — | $V = S - Ke^{-r(T-t)}$ exactly (zero gamma) |

Under $\tau = T-t$, $x = \ln S$ it becomes the constant-coefficient equation
$u_\tau = \tfrac12\sigma^2u_{xx} + (r-\tfrac12\sigma^2)u_x - ru$, and after
$u = e^{\alpha x + \beta\tau}w$ with $\alpha = \tfrac12 - r/\sigma^2$, the bare heat
equation. Sanity checks: $V=S$ and $V=e^{-r(T-t)}K$ both solve the PDE.

*From* [2.2](lessons/02-02-black-scholes-pde-delta-hedging.md), [2.4](lessons/02-04-black-scholes-formula.md)

### Risk-neutral pricing: the change of measure and the bridge to the PDE

$$dS = \mu S\,dt + \sigma S\,dW \;\xrightarrow{\ W^{\mathbb{Q}} = W + \lambda t,\ \lambda = (\mu-r)/\sigma\ }\; dS = rS\,dt + \sigma S\,dW^{\mathbb{Q}}, \qquad d\tilde S_t = \sigma\tilde S_t\,dW^{\mathbb{Q}}_t.$$

$$V(t,S) = e^{-r(T-t)}\,\mathbb{E}^{\mathbb{Q}}\big[\text{payoff}(S_T) \mid S_t = S\big], \qquad S_T = S_t\exp\!\Big(\big(r-\tfrac{\sigma^2}{2}\big)(T-t) + \sigma\big(W^{\mathbb{Q}}_T - W^{\mathbb{Q}}_t\big)\Big).$$

**Feynman–Kac, coefficient matching.** If $u_t + b(x)u_x + \tfrac12a(x)^2u_{xx} - ru = 0$
with $u(T,x)=g(x)$, then $u(t,x) = \mathbb{E}\big[e^{-r(T-t)}g(X_T) \mid X_t=x\big]$
along $dX = b(X)dt + a(X)dW$. Black–Scholes has $b = rS$, $a = \sigma S$ — exactly
the $\mathbb{Q}$-dynamics. Equivalently: **the PDE says the discounted price has no
drift under $\mathbb{Q}$.** Girsanov changes drift, never $\sigma$.

Full statements of Girsanov, the Radon–Nikodym density, and Feynman–Kac:
[Girsanov](../stochastic-calculus/reference.md#girsanovs-theorem) and
[Feynman–Kac](../stochastic-calculus/reference.md#feynmankac-expectations-are-pdes).

*From* [2.3](lessons/02-03-risk-neutral-pricing-girsanov-feynman-kac.md)

### The Black–Scholes formula

$$C = S_0N(d_1) - Ke^{-rT}N(d_2), \qquad P = Ke^{-rT}N(-d_2) - S_0N(-d_1),$$

$$d_1 = \frac{\ln(S_0/K) + (r + \tfrac12\sigma^2)T}{\sigma\sqrt{T}}, \qquad d_2 = d_1 - \sigma\sqrt{T}.$$

- $N(d_2) = \mathbb{Q}(S_T > K)$ — the true risk-neutral exercise probability.
- $N(d_1) = \Delta$ — the same event weighted by $S_T$, i.e. computed under the **share numéraire**; always $N(d_1) > N(d_2)$.
- **Put–call parity:** $C - P = S_0 - Ke^{-rT}$ (the payoff difference is a forward), which also gives $\Delta_P = \Delta_C - 1$, equal gamma and equal vega.
- **Key density identity:** $S_0\varphi(d_1) = Ke^{-rT}\varphi(d_2)$ — this is what makes every Greek's extra terms cancel.
- **At-the-money rule of thumb:** $C \approx 0.4\,S_0\sigma\sqrt{T}$.

*From* [2.4](lessons/02-04-black-scholes-formula.md)

### The Greeks

$N'(x) = \varphi(x)$ is the standard-normal density; $T$ is time to expiry.

| Greek | Definition | Call | Put | Sign (long) | What it hedges |
|---|---|---|---|---|---|
| **Delta** $\Delta$ | $\partial V/\partial S$ | $N(d_1)$ | $N(d_1) - 1$ | call $(0,1)$, put $(-1,0)$ | direction: shares to hold per option |
| **Gamma** $\Gamma$ | $\partial^2V/\partial S^2$ | $\dfrac{\varphi(d_1)}{S\sigma\sqrt{T}}$ | same | $>0$ for both | the *drift of delta* — how fast the hedge goes stale |
| **Theta** $\Theta$ | $\partial V/\partial t$ | $-\dfrac{S\varphi(d_1)\sigma}{2\sqrt{T}} - rKe^{-rT}N(d_2)$ | $-\dfrac{S\varphi(d_1)\sigma}{2\sqrt{T}} + rKe^{-rT}N(-d_2)$ | call $<0$; put usually $<0$, can be $>0$ deep in the money | nothing — it is the rent you pay for gamma |
| **Vega** $\nu$ | $\partial V/\partial\sigma$ | $S\varphi(d_1)\sqrt{T}$ | same | $>0$ for both | volatility level; only *other options* carry vega |
| **Rho** $\rho$ | $\partial V/\partial r$ | $KTe^{-rT}N(d_2)$ | $-KTe^{-rT}N(-d_2)$ | call $>0$, put $<0$ | the discounting of the strike |

Gamma and vega both peak near the money (both carry $\varphi(d_1)$) and vanish in
both tails; gamma peaks slightly *below* $K$, not at it. "Vega" is not a Greek
letter — you'll also see $\mathcal{V}$ or "kappa."

*From* [2.5](lessons/02-05-greeks-dynamic-hedging.md)

### Gamma–theta: the PDE as a P&L statement

$$\Theta + \tfrac12\sigma^2S^2\Gamma + rS\Delta - rV = 0 \;\Longrightarrow\; \Theta = -\tfrac12\sigma^2S^2\Gamma - \underbrace{rKe^{-rT}N(d_2)}_{\text{carry}}.$$

$$\text{daily P\&L of a delta-hedged option} \approx \tfrac12\Gamma S^2\big(\sigma_{\text{realized}}^2 - \sigma_{\text{implied}}^2\big)\,dt.$$

A delta-hedged option is a **bet on realized versus implied volatility**: long
gamma pays on movement, short theta bleeds on stillness. Break-even daily move:
$\sigma_{\text{imp}}\sqrt{dt}$ — about $1.26\%$ for $20\%$ vol on a 252-day year.
Position Greeks scale linearly with contract count.

*From* [2.5](lessons/02-05-greeks-dynamic-hedging.md), [2.2](lessons/02-02-black-scholes-pde-delta-hedging.md)

### Inverting for implied vol, and reading the smile

$$\sigma_{n+1} = \sigma_n + \frac{C_{\text{market}} - C_{BS}(\sigma_n)}{\text{vega}(\sigma_n)} \qquad (\text{Newton, with vega as the derivative}).$$

Converges in two or three steps near the money, where vega is large; in the deep
wings vega goes to zero and bisection on the monotone $C_{BS}(\sigma)$ is safer.

**Breeden–Litzenberger:** $q(K) \propto \dfrac{\partial^2C}{\partial K^2}$ — the
risk-neutral density is read off the curvature of prices in the strike. Hence a
flat smile $\iff$ log-normal density; a downward skew $\iff$ extra left-tail mass
(crash premium). No-arbitrage requires $C$ decreasing and convex in $K$; a skew
violates neither. Named causes: volatility clustering, jumps, the leverage effect.

*From* [2.6](lessons/02-06-implied-volatility-smile.md)

### Standard normal, and the Gaussian facts these lessons lean on

$$N(-x) = 1 - N(x), \qquad \varphi(x) = \tfrac{1}{\sqrt{2\pi}}e^{-x^2/2}, \qquad \varphi(0) = 0.3989.$$

| $x$ | $0$ | $0.10$ | $0.15$ | $0.35$ | $0.62$ | $0.80$ | $1.00$ | $1.65$ | $1.96$ |
|---|---|---|---|---|---|---|---|---|---|
| $N(x)$ | $0.5000$ | $0.5398$ | $0.5596$ | $0.6368$ | $0.7324$ | $0.7881$ | $0.8413$ | $0.9505$ | $0.9750$ |
| $\varphi(x)$ | $0.3989$ | $0.3970$ | $0.3945$ | $0.3752$ | $0.3292$ | $0.2897$ | $0.2420$ | $0.1023$ | $0.0584$ |

For $Z \sim \mathcal N(0,1)$ and constants $a$: $\mathbb{E}[e^{aZ}] = e^{a^2/2}$.
For $I \sim \mathcal N(M,V)$: $\mathbb{E}[e^{-I}] = e^{-M + V/2}$ — the moment
generating function at $-1$, and the engine of the Vasicek bond price. For
log-normal $S_T$ under $\mathbb{Q}$: $\mathbb{E}^{\mathbb{Q}}[S_T] = S_0e^{rT}$
(the $\pm\tfrac12\sigma^2T$ terms cancel). Annualizing a daily move:
$\sigma_{\text{ann}} = \sigma_{\text{daily}}\sqrt{252}$.

*From* [2.4](lessons/02-04-black-scholes-formula.md), [2.5](lessons/02-05-greeks-dynamic-hedging.md), [4.2](lessons/04-02-short-rate-models-vasicek-cir.md)

### Portfolio mathematics

$$\mu_p = w^\top\mu, \qquad \sigma_p^2 = w^\top\Sigma w, \qquad \sigma_p^2 = w_1^2\sigma_1^2 + w_2^2\sigma_2^2 + 2w_1w_2\rho\sigma_1\sigma_2 \ \ (\text{two assets}).$$

| Quantity | Formula |
|---|---|
| Minimum-variance weight (two assets) | $w_1 = \dfrac{\sigma_2^2 - \sigma_{12}}{\sigma_1^2 + \sigma_2^2 - 2\sigma_{12}}$ |
| Its variance | $\sigma_{\min}^2 = \dfrac{\sigma_1^2\sigma_2^2(1-\rho^2)}{\sigma_1^2+\sigma_2^2-2\sigma_{12}}$ |
| Frontier weights (Lagrange) | $w = \Sigma^{-1}(\lambda\mu + \gamma\mathbf{1})$, with $A = \mathbf{1}^\top\Sigma^{-1}\mathbf{1}$, $B = \mathbf{1}^\top\Sigma^{-1}\mu$, $C = \mu^\top\Sigma^{-1}\mu$, $D = AC - B^2$ |
| Multipliers | $\lambda = \dfrac{A\mu_{\text{target}} - B}{D}$, $\gamma = \dfrac{C - B\mu_{\text{target}}}{D}$ |
| Tangency weights | $w_{\text{tan}} \propto \Sigma^{-1}(\mu - r_f\mathbf{1})$, normalized to sum to 1 |
| Equal-weight variance, common $\rho$ | $\sigma_p^2 = \tfrac{1}{N}\sigma^2 + \tfrac{N-1}{N}\rho\sigma^2 \to \rho\sigma^2$ |

That last limit is the diversification floor: the $\sigma^2/N$ piece is
idiosyncratic and vanishes; $\rho\sigma^2$ is systematic and is what beta prices.

*From* [3.1](lessons/03-01-mean-variance-efficient-frontier.md), [3.2](lessons/03-02-capm.md)

### CAPM

$$\mathbb{E}[R_i] = r_f + \beta_i\big(\mathbb{E}[R_M] - r_f\big), \qquad \beta_i = \frac{\operatorname{Cov}(R_i,R_M)}{\operatorname{Var}(R_M)}.$$

$$R_i = \alpha_i + \beta_iR_M + \varepsilon_i \;\Longrightarrow\; \operatorname{Var}(R_i) = \underbrace{\beta_i^2\operatorname{Var}(R_M)}_{\text{systematic, priced}} + \underbrace{\operatorname{Var}(\varepsilon_i)}_{\text{idiosyncratic, free}}.$$

Assumptions: all investors mean–variance optimize with identical beliefs, one
common $r_f$ for lending and borrowing, no frictions — then market clearing forces
tangency $=$ market portfolio (value-weighted, *every* asset). Negative beta means
insurance and a required return **below** $r_f$. Using a bad proxy for $M$ is
Roll's critique.

*From* [3.2](lessons/03-02-capm.md)

### The stochastic discount factor, and its four corollaries

$$p = \mathbb{E}[m\,x], \qquad 1 = \mathbb{E}[m\,R], \qquad m = \beta\frac{u'(c_1)}{u'(c_0)} > 0.$$

| Set | Get |
|---|---|
| $x \equiv 1$ | $R_f = 1/\mathbb{E}[m]$ |
| split the covariance | $\mathbb{E}[R] - R_f = -\dfrac{\operatorname{Cov}(m,R)}{\mathbb{E}[m]} = -R_f\operatorname{Cov}(m,R)$ |
| $m = a - bR_M$ (affine in the market) | the CAPM beta relation |
| $\dfrac{d\mathbb{Q}}{d\mathbb{P}} = R_f\,m$ | $p = \dfrac{1}{R_f}\mathbb{E}^{\mathbb{Q}}[x]$ — the EMM *is* the SDF |
| finite states | state price $\psi_s = \mathbb{P}_s m_s$; risk-neutral probability $q_s = R_f\mathbb{P}_sm_s$ |

$m>0$ buys *equivalence*; $\mathbb{E}[m] = 1/R_f$ buys *normalization*. With CRRA
$u'(c) = c^{-\gamma}$, $m = \beta(c_1/c_0)^{-\gamma}$ and $\gamma$ scales how
violently $m$ swings, hence the size of every premium.

*From* [3.3](lessons/03-03-expected-utility-stochastic-discount-factor.md)

### Merton's problem

$$dX_t = \big[(r + \pi_t(\mu-r))X_t - c_t\big]dt + \pi_t\sigma X_t\,dW_t.$$

$$\rho V = V_t + \sup_{\pi,c}\Big\{u(c) + \big[(r+\pi(\mu-r))x - c\big]V_x + \tfrac12\pi^2\sigma^2x^2V_{xx}\Big\} \quad (\text{HJB}).$$

First-order conditions and the CRRA solution:

$$u'(c^*) = V_x, \qquad \pi^* = \frac{\mu-r}{\sigma^2}\cdot\frac{1}{(-xV_{xx}/V_x)} \;\xrightarrow{\ V = f(t)\frac{x^{1-\gamma}}{1-\gamma}\ }\; \pi^* = \frac{\mu-r}{\gamma\sigma^2}, \quad c^* = f(t)^{-1/\gamma}x.$$

$\pi^*$ is constant in wealth, age and horizon — the tangency portfolio scaled by
risk tolerance $1/\gamma$ — because investment opportunities are constant (zero
hedging demand). Log utility ($\gamma=1$, infinite horizon) gives
$\pi^* = (\mu-r)/\sigma^2$ and $c^*/x = \rho$. Finite horizon, no bequest:
$c^*/x = K/(1-e^{-K(T-t)})$ with $K = \tfrac1\gamma\big[\rho - (1-\gamma)(r + \tfrac{(\mu-r)^2}{2\gamma\sigma^2})\big]$.

*From* [3.4](lessons/03-04-merton-optimal-consumption-portfolio.md)

### Term-structure relations

| Relation | Formula |
|---|---|
| Price ↔ yield | $P(t,T) = e^{-y(t,T)(T-t)}$ |
| Forward from prices | $e^{f(t,T)\Delta} = \dfrac{P(t,T)}{P(t,T+\Delta)}$ |
| Yield as an average of forwards | $y(t,T)(T-t) = \int_t^T f(t,u)\,du$ |
| Coupon bond | $\sum_i c_iP(t,T_i) + F\,P(t,T_n)$ — a bundle of zeros |
| Master formula | $P(t,T) = \mathbb{E}^{\mathbb{Q}}_t\big[e^{-\int_t^T r_s\,ds}\big]$ |

Bootstrapping: the shortest bond pins $P(t,T_1)$ alone; substitute and march
outward. Curve shapes — normal (upward), inverted (a recession signal), humped.
On an upward curve forwards sit above spot yields, and a coupon bond's YTM sits
below the same-maturity zero yield.

*From* [4.1](lessons/04-01-term-structure-bond-pricing.md)

### Vasicek and CIR

| | Vasicek | CIR |
|---|---|---|
| SDE under $\mathbb{Q}$ | $dr_t = a(b-r_t)dt + \sigma\,dW^{\mathbb{Q}}_t$ | $dr_t = a(b-r_t)dt + \sigma\sqrt{r_t}\,dW^{\mathbb{Q}}_t$ |
| Law of $r_t$ | Gaussian | scaled non-central chi-square |
| Can $r$ go negative? | yes | no, if $2ab \ge \sigma^2$ |
| Bond price | $\exp(A - Br)$ | $\exp(A - Br)$, different $A,B$ |

$$\mathbb{E}^{\mathbb{Q}}[r_t] = b + (r_0-b)e^{-at}, \qquad \operatorname{Var}(r_t) = \frac{\sigma^2}{2a}\big(1-e^{-2at}\big), \qquad r_\infty \sim \mathcal N\!\Big(b,\ \frac{\sigma^2}{2a}\Big).$$

**Vasicek closed form** (with $\tau = T-t$):

$$B(t,T) = \frac{1-e^{-a\tau}}{a}, \qquad A(t,T) = \big(B-\tau\big)\Big(b - \frac{\sigma^2}{2a^2}\Big) - \frac{\sigma^2B^2}{4a}, \qquad y_\infty = b - \frac{\sigma^2}{2a^2}.$$

Two routes to $A,B$: substitute $P = e^{A-Br}$ into the Feynman–Kac bond PDE
$P_t + a(b-r)P_r + \tfrac12\sigma^2P_{rr} - rP = 0$ and match powers of $r$
($B' = aB - 1$, $A' = abB - \tfrac12\sigma^2B^2$, $A(T,T)=B(T,T)=0$); or compute
$\mathbb{E}^{\mathbb{Q}}[e^{-I}] = e^{-M+V/2}$ for the Gaussian
$I = \int_0^T r_s\,ds$, with $M = r_0B + b(T-B)$ and
$V = \sigma^2\int_0^T B(u,T)^2du$. $B(t,T)$ is also the bond's rate-sensitivity
(its duration in $r$), and the bond's volatility is $\sigma_P = -\sigma B(t,T)$.

*From* [4.2](lessons/04-02-short-rate-models-vasicek-cir.md)

### Numéraire and measure-change bookkeeping

$$V_t = N_t\,\mathbb{E}^{Q^N}\!\left[\frac{X_T}{N_T}\,\middle|\,\mathcal F_t\right] \qquad \text{for any strictly positive traded } N.$$

| Numéraire | Measure | Pricing formula | Why you'd pick it |
|---|---|---|---|
| $B_t = e^{\int_0^t r_s ds}$ | $\mathbb{Q}$ (risk-neutral) | $V_t = \mathbb{E}^{\mathbb{Q}}\big[e^{-\int_t^T r_s ds}X_T \mid \mathcal F_t\big]$ | the default; fine when $r$ is deterministic |
| $P(t,T)$ | $Q^T$ ($T$-forward) | $V_t = P(t,T)\,\mathbb{E}^{Q^T}[X_T \mid \mathcal F_t]$ | $P(T,T)=1$ kills the random discount factor |
| $S_t$ | $Q^S$ (share measure) | $V_t = S_t\,\mathbb{E}^{Q^S}[X_T/S_T \mid \mathcal F_t]$ | payoff-weighted-by-$S$ terms; where $N(d_1)$ comes from |

$$\frac{dQ^{N_2}}{dQ^{N_1}}\bigg|_{\mathcal F_T} = \frac{N_2(T)/N_2(0)}{N_1(T)/N_1(0)}, \qquad \frac{dQ^T}{d\mathbb{Q}}\bigg|_{\mathcal F_T} = \frac{e^{-\int_0^T r_s ds}}{P(0,T)}.$$

**Drift shift (Girsanov, geometrically).** If $dN_t/N_t = r_t\,dt + \sigma_N(t)\,dW^{\mathbb{Q}}_t$
then $W^{Q^N}_t = W^{\mathbb{Q}}_t - \int_0^t\sigma_N(s)\,ds$ is a $Q^N$-Brownian
motion: changing numéraire shifts every drift by the numéraire's own volatility.
For $Q^T$ that shift is the bond volatility $\sigma_P(t,T) = -\sigma B(t,T)$.

**What it buys.** $F(t,T) = S_t/P(t,T)$ is a $Q^T$-martingale, so
$\mathbb{E}^{Q^T}[S_T] = F(0,T)$ — the forward is unbiased under $Q^T$ (and only
under $Q^T$). The price itself is invariant: change the yardstick and the measure
together, and $V_t$ does not move.

*From* [4.3](lessons/04-03-forward-measures-changing-numeraire.md), [1.3](lessons/01-03-one-period-model-pricing-measure.md)

### American options

$$V_T = g(S_T), \qquad V_t = \max\Big(\underbrace{g(S_t)}_{\text{exercise}},\ \underbrace{e^{-r\Delta t}\mathbb{E}^{\mathbb{Q}}_t[V_{t+\Delta t}]}_{\text{continuation}}\Big).$$

In the continuation region $V$ solves the Black–Scholes PDE; in the exercise
region $V = g(S)$; the two meet at $S^*(t)$ under value matching and smooth
pasting — a free-boundary problem, generically numerical.

- **American call, no dividends, $r>0$: never exercise early**, so it equals the European call. Proof: $C^{\text{Eur}}_t \ge S_t - Ke^{-r(T-t)} > S_t - K = \text{intrinsic}$.
- **American put:** early exercise can be optimal when deep in the money — grabbing $K-S$ beats waiting.
- **Dividend-paying call:** the only time early exercise pays is immediately *before* the dividend, when the price drop $D$ exceeds the time value surrendered.
- The early-exercise premium is the American price minus the European price, and it is created entirely at nodes where the $\max$ picks "exercise."

*From* [4.4](lessons/04-04-american-options-optimal-stopping.md)

### Incomplete markets

Completeness is a counting condition: **independent traded assets must at least
match independent sources of risk.** Add a second Brownian driver you can't trade
(stochastic volatility, e.g. Heston $dv_t = \kappa(\theta-v_t)dt + \xi\sqrt{v_t}\,dW^v_t$),
or a jump, or frictions, and the span falls short.

$$\underline{\pi}(H) = \inf_{Q\in\mathcal{Q}}\mathbb{E}^Q[H] = \max\{\text{cost of a portfolio dominated by } H\}, \qquad \overline{\pi}(H) = \sup_{Q\in\mathcal{Q}}\mathbb{E}^Q[H] = \min\{\text{cost of a portfolio dominating } H\}.$$

Replicable claims collapse the interval to a point. To pick a number inside it you
must import information no-arbitrage has: **calibration** (the market chooses the
EMM), **utility-indifference / SDF pricing** (preferences choose it), or a
**hedging criterion** (minimal-martingale or variance-optimal measure). Two models
calibrated to the same vanilla quote can still disagree by tens of percent on an
exotic — that gap is model risk.

*From* [4.5](lessons/04-05-incomplete-markets-model-risk.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Itô's lemma and the rule $(dW)^2 = dt$ | [stochastic calculus 3.1–3.2](../stochastic-calculus/lessons/03-02-ito-processes-general-formula.md) |
| Itô product rule / integration by parts | [stochastic calculus 3.6](../stochastic-calculus/lessons/03-06-product-rule-integration-by-parts.md) |
| GBM: solution, log-normality, volatility drag | [stochastic calculus 3.4](../stochastic-calculus/lessons/03-04-geometric-brownian-motion.md) |
| Ornstein–Uhlenbeck: integrating factor, stationary law (this is Vasicek) | [stochastic calculus 3.5](../stochastic-calculus/lessons/03-05-ornstein-uhlenbeck-process.md) |
| Itô isometry, and that a deterministic integrand gives a Gaussian integral | [stochastic calculus 2.3](../stochastic-calculus/lessons/02-03-ito-isometry-general-integral.md) |
| Equivalent measures and the Radon–Nikodym derivative | [stochastic calculus 4.1](../stochastic-calculus/lessons/04-01-radon-nikodym-equivalent-measures.md) |
| Girsanov's theorem (and Novikov's condition) | [stochastic calculus 4.2](../stochastic-calculus/lessons/04-02-girsanov-theorem.md) |
| Martingale representation — why one Brownian driver means completeness | [stochastic calculus 4.3](../stochastic-calculus/lessons/04-03-martingale-representation.md) |
| Feynman–Kac | [stochastic calculus 4.5](../stochastic-calculus/lessons/04-05-feynman-kac.md) |
| Martingales, supermartingales, optional stopping | [stochastic calculus 1.6](../stochastic-calculus/lessons/01-06-stopping-times-optional-stopping.md), [probability theory 5.3](../probability-theory/lessons/05-03-martingales.md) |
| Conditional expectation and the tower property | [probability theory 5.1](../probability-theory/lessons/05-01-conditional-expectation.md) |
| Central limit theorem (binomial tree $\to$ log-normal) | [probability theory 4.5](../probability-theory/lessons/04-05-central-limit-theorem.md) |
| Gaussian moment generating function, log-normal moments | [probability theory 4.3](../probability-theory/lessons/04-03-characteristic-functions.md) |
| Span, rank, and solving linear systems (replication, completeness) | [linear algebra 1.3](../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md) |
| Positive-definite quadratic forms and $\Sigma^{-1}$ (portfolio variance) | [linear algebra 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Separating-hyperplane theorem (the engine of FTAP I) | [convex optimization 1.1](../convex-optimization/lessons/01-01-convex-sets-separating-hyperplane.md) |
| Hahn–Banach, the infinite-dimensional separation behind NFLVR | [functional analysis 3.2](../functional-analysis/lessons/03-02-dual-spaces-hahn-banach.md) |
| Lagrange multipliers (the efficient frontier) | [calculus 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| Second-order Taylor expansion (the Greeks) | [calculus 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Newton's method and bisection (backing out implied vol) | [numerical analysis 1.5](../numerical-analysis/lessons/01-05-newton-secant.md), [1.4](../numerical-analysis/lessons/01-04-bisection-fixed-point.md) |
| Heat equation and its Gaussian kernel (the second Black–Scholes derivation) | [PDEs 4.2](../pdes/lessons/04-02-heat-equation-line-heat-kernel.md) |
| Expected utility, marginal utility, Arrow–Pratt risk aversion | [grad-micro 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md) |
| Walrasian equilibrium and market clearing (the CAPM's derivation) | [grad-micro 4.2](../grad-micro/lessons/04-02-edgeworth-box-walrasian-equilibrium.md) |
| Arrow–Debreu state-contingent prices, welfare theorems | [grad-micro 4.4](../grad-micro/lessons/04-04-two-welfare-theorems.md) |
| Dynamic programming, Bellman principle, value functions (HJB, Snell) | [grad-macro 1.2](../grad-macro/lessons/01-02-principle-of-optimality.md), [1.5](../grad-macro/lessons/01-05-stochastic-dynamic-programming.md) |
| Consumption-based asset pricing and the equity-premium puzzle | [grad-macro 5.4](../grad-macro/lessons/05-04-consumption-based-asset-pricing.md), [5.5](../grad-macro/lessons/05-05-equity-premium-puzzle.md) |
| Linear and Bernoulli ODEs (solving for $f(t)$ in Merton, $A,B$ in Vasicek) | [ODE refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |

## Pitfalls

### Pricing is not forecasting

- The real-world probability $p$ of an up-move appears in **no** price; if a problem hands it to you it is usually bait. *([1.3](lessons/01-03-one-period-model-pricing-measure.md), [1.5](lessons/01-05-binomial-model-risk-neutral-valuation.md))*
- The drift $\mu$ cancels in the delta-hedge and never appears in Black–Scholes — a bullish view raises no option price. Under $\mathbb{Q}$ the log-return drifts at $r - \sigma^2/2$, never at $\mu$. *([2.2](lessons/02-02-black-scholes-pde-delta-hedging.md), [2.4](lessons/02-04-black-scholes-formula.md), [1.5](lessons/01-05-binomial-model-risk-neutral-valuation.md))*
- $\mathbb{E}^{\mathbb{Q}}[\text{payoff}]$ is a price, not a prediction; reporting it as "the expected payoff" is a category error. Same for the forward rate ($f$ is lockable, not forecast — the gap is the term premium) and for implied vol (a price coordinate that typically prints above subsequent realized vol). *([2.3](lessons/02-03-risk-neutral-pricing-girsanov-feynman-kac.md), [4.1](lessons/04-01-term-structure-bond-pricing.md), [2.6](lessons/02-06-implied-volatility-smile.md))*
- The forward price $S_0e^{rT}$ is a **carry cost**, not the market's guess at $S_T$; two assets with the same spot have the same forward whatever their expected returns. *([1.1](lessons/01-01-arbitrage-law-of-one-price.md))*

### Measure and discounting bookkeeping

- The martingale property is about the **discounted** price. Forget to divide by the numéraire and every check fails. *([1.4](lessons/01-04-fundamental-theorem-asset-pricing.md))*
- Discount at the numéraire's growth $R$, never at the stock's return — that is the entire point of $\mathbb{Q}$. *([1.3](lessons/01-03-one-period-model-pricing-measure.md))*
- **Equivalent** means strictly positive on every possible state. A boundary measure with a zero can still be a martingale measure and still manufacture arbitrage. Correspondingly, $q$ must be strictly inside $(0,1)$: $q = 0$ or $1$ is a market with an arbitrage, not an edge case. *([1.4](lessons/01-04-fundamental-theorem-asset-pricing.md), [1.3](lessons/01-03-one-period-model-pricing-measure.md))*
- The SDF density is $d\mathbb{Q}/d\mathbb{P} = R_f\,m$, not $m$ — raw $m$ integrates to $1/R_f$. *([3.3](lessons/03-03-expected-utility-stochastic-discount-factor.md))*
- Under $Q^T$ the discounting is **already done** by the bond out front; putting an $e^{-\int r}$ back inside double-counts it. And the bond must have the *right* maturity — $P(T,T')\ne 1$ for $T'\ne T$ kills the simplification. *([4.3](lessons/04-03-forward-measures-changing-numeraire.md))*
- Changing measure never changes a price. Two numéraires giving two prices is an arithmetic error. *([4.3](lessons/04-03-forward-measures-changing-numeraire.md))*
- Girsanov changes drift only. If your $\mathbb{Q}$-dynamics have a different $\sigma$, you've made an error — a measure change cannot alter quadratic variation. *([2.3](lessons/02-03-risk-neutral-pricing-girsanov-feynman-kac.md))*
- Feynman–Kac without the $-ru$ term represents an *undiscounted* expectation; the $-r$ in the PDE is exactly the $e^{-r(T-t)}$ out front. *([2.3](lessons/02-03-risk-neutral-pricing-girsanov-feynman-kac.md))*

### Hedging

- Recompute $\Delta$ at **every** node or instant. A static delta is not a hedge; the rate at which it goes stale is gamma. *([1.5](lessons/01-05-binomial-model-risk-neutral-valuation.md), [2.2](lessons/02-02-black-scholes-pde-delta-hedging.md))*
- A delta-hedged book is only *first-order* riskless: you've swapped direction risk for a long-gamma/short-theta volatility bet, and stillness costs you. *([2.5](lessons/02-05-greeks-dynamic-hedging.md))*
- Theta isn't "bad" — it is the rent for gamma, and the PDE is the break-even. Neither sign is good; it's a trade. *([2.5](lessons/02-05-greeks-dynamic-hedging.md), [2.2](lessons/02-02-black-scholes-pde-delta-hedging.md))*
- Delta hedges $S$-risk, not $\sigma$-risk. Only another option carries vega. And vega is a derivative with respect to a parameter the model swears is constant — the smile is that contradiction made visible. *([2.6](lessons/02-06-implied-volatility-smile.md), [2.5](lessons/02-05-greeks-dynamic-hedging.md))*
- $X_t = \varphi_tS_t + \psi_tB_t$ is a definition; its Itô differential carries rebalancing terms. Self-financing is a **separate imposed constraint** that those terms vanish. *([2.1](lessons/02-01-continuous-time-market-self-financing.md))*
- Continuous time also needs **admissibility** (wealth bounded below), or doubling strategies smuggle arbitrage back in. Never quote "no arbitrage $\iff$ EMM" without it. *([2.1](lessons/02-01-continuous-time-market-self-financing.md))*
- $\Delta$ in the one-period model is a ratio of payoff differences, not a probability: it can exceed 1 or go negative. And $B$ is dollars in the bond *today* — the equations already carry $R$, so don't discount it twice. *([1.2](lessons/01-02-replication-complete-markets.md))*

### Completeness, incompleteness, and model risk

- Completeness is $\operatorname{rank}(D) = n$, not "lots of assets." Ten multiples of the bond span a line. *([1.2](lessons/01-02-replication-complete-markets.md), [1.4](lessons/01-04-fundamental-theorem-asset-pricing.md))*
- Incomplete does **not** mean arbitrage exists — it means the EMM isn't unique, so no-arbitrage returns an interval instead of a point. Arbitrage still bounds; it just can't collapse. *([4.5](lessons/04-05-incomplete-markets-model-risk.md), [1.2](lessons/01-02-replication-complete-markets.md))*
- Uniqueness is not correctness. A complete-market model hides its ignorance inside modelling assumptions; an incomplete one is honest about it. *([1.4](lessons/01-04-fundamental-theorem-asset-pricing.md))*
- A perfect calibration to today's vanilla surface pins the marginal law of $S_T$, not the dynamics — necessary, never sufficient, and path-dependent payoffs are where two calibrated models diverge. *([4.5](lessons/04-05-incomplete-markets-model-risk.md))*
- In an incomplete market a hedge reduces risk; it does not zero it. Super-replication is usually far too expensive to be a quote. *([4.5](lessons/04-05-incomplete-markets-model-risk.md))*
- A skew is not an arbitrage — just a non-log-normal density. What *would* be arbitrage is a call price that isn't decreasing and convex in $K$. And never average across the smile: there is no single $\sigma$, only a surface. *([2.6](lessons/02-06-implied-volatility-smile.md))*
- Mean–variance is exact only under joint-normal returns or quadratic utility; variance punishes upside like downside, and $w \propto \Sigma^{-1}\mu$ amplifies estimation error in $\mu$ into extreme weights. *([3.1](lessons/03-01-mean-variance-efficient-frontier.md))*

### Formula-level traps

- $N(d_2)$ is the exercise probability; $N(d_1)$ is the delta (the same event under the share measure). Confusing them is the classic Black–Scholes error. *([2.4](lessons/02-04-black-scholes-formula.md))*
- $r$, $\sigma$, $T$ must share a clock; $\sigma\sqrt{T}$ is total, not per-year, volatility. *([2.4](lessons/02-04-black-scholes-formula.md))*
- Gamma peaks slightly *below* the strike, not exactly at it. *([2.5](lessons/02-05-greeks-dynamic-hedging.md))*
- Newton stalls in the deep wings where vega goes to zero — switch to bisection. *([2.6](lessons/02-06-implied-volatility-smile.md))*
- Own-variance sets no premium; only the systematic slice does, and beta can be negative (insurance earns below $r_f$). Alpha is a disequilibrium statement, zero by construction inside the CAPM. *([3.2](lessons/03-02-capm.md))*
- Premium signs follow $-\operatorname{Cov}(m,R)$: pro-cyclical means positive, insurance means negative. And $m$ is a marginal rate of substitution, not a return — its *reciprocal* mean is the risk-free return. *([3.3](lessons/03-03-expected-utility-stochastic-discount-factor.md))*
- The portfolio rule uses the **value function's** risk aversion $-xV_{xx}/V_x$, not $u''$; they coincide only for CRRA. And $\pi^*$ is constant only because opportunities are — a moving $\mu$ or $\sigma$ adds a hedging demand. *([3.4](lessons/03-04-merton-optimal-consumption-portfolio.md))*
- YTM is a summary of the zero curve, not a discount rate for individual cashflows; price off the zeros. Fix the compounding convention before comparing any two yields. *([4.1](lessons/04-01-term-structure-bond-pricing.md))*
- The forward rate carries a minus sign, $f = -\partial_T\ln P$, because $P$ falls with maturity. *([4.1](lessons/04-01-term-structure-bond-pricing.md))*
- $\mathbb{E}[e^{-I}] = e^{-M + V/2}$ — **plus** half the variance. The convexity term raises the bond price; flipping that sign is the standard error. *([4.2](lessons/04-02-short-rate-models-vasicek-cir.md))*
- "Affine" means affine in the state $r_t$, not in maturity: $y(t,T)$ is very nonlinear in $\tau$. CIR positivity needs the Feller condition, not just the $\sqrt{r}$. *([4.2](lessons/04-02-short-rate-models-vasicek-cir.md))*
- American does not mean early exercise is optimal — only that you hold the right. The continuation value is the discounted expectation of the *American* value one step on, not the European price at that node. And the boundary $S^*(t)$ is unknown and solved for jointly with the price. *([4.4](lessons/04-04-american-options-optimal-stopping.md))*
- The Black–Scholes terminal condition sits at $T$, and you diffuse **backward**; running it forward blows up. *([2.2](lessons/02-02-black-scholes-pde-delta-hedging.md))*

### Symbol collisions to keep straight

- $B$: dollars in the bond ([1.2](lessons/01-02-replication-complete-markets.md)), the money-market account $B_t$ ([2.1](lessons/02-01-continuous-time-market-self-financing.md)), and the Vasicek affine coefficient $B(t,T)$ ([4.2](lessons/04-02-short-rate-models-vasicek-cir.md)).
- $\beta$: impatience in the SDF ([3.3](lessons/03-03-expected-utility-stochastic-discount-factor.md)) versus market exposure ([3.2](lessons/03-02-capm.md)).
- $\rho$: correlation ([3.1](lessons/03-01-mean-variance-efficient-frontier.md)), the Greek rate-sensitivity ([2.5](lessons/02-05-greeks-dynamic-hedging.md)), and the subjective discount rate ([3.4](lessons/03-04-merton-optimal-consumption-portfolio.md)).
- $\tau$: time to maturity ([4.1](lessons/04-01-term-structure-bond-pricing.md)) versus a stopping time ([4.4](lessons/04-04-american-options-optimal-stopping.md)).
- $\lambda$ / $\theta$: both are used for the market price of risk ([2.3](lessons/02-03-risk-neutral-pricing-girsanov-feynman-kac.md)), while $\theta$ is also a portfolio vector ([1.4](lessons/01-04-fundamental-theorem-asset-pricing.md)) and $\Theta$ a Greek ([2.5](lessons/02-05-greeks-dynamic-hedging.md)).
- $\psi$: state prices ([1.3](lessons/01-03-one-period-model-pricing-measure.md)) versus bank-account units held ([2.1](lessons/02-01-continuous-time-market-self-financing.md)).
