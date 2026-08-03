# Mathematical Finance · Lesson 3.3: Expected utility and the stochastic discount factor

> ⏱ ~15 min · Module 3: Preferences, portfolios, and equilibrium · Builds on: [3.2 The CAPM](03-02-capm.md) · Unlocks: [3.4 Merton's optimal consumption and portfolio problem](03-04-merton-optimal-consumption-portfolio.md)

## Why this matters

So far this course has two pricing stories that look unrelated. Module 1–2: **no-arbitrage** — price by replication and risk-neutral expectation, never mentioning anyone's preferences. Module 3 so far: **equilibrium** — the CAPM says expected returns line up with market beta because investors dislike risk. This lesson collapses both into a *single equation*:

$$p = \mathbb{E}[m\,x].$$

The price $p$ of any asset is the expected value of its payoff $x$ times one common object $m$, the **stochastic discount factor**. Everything falls out of it: the risk-free rate, the risk premium of any asset, the CAPM as a special case, and — the punchline — the risk-neutral measure $Q$ from [1.3](01-03-one-period-model-pricing-measure.md)/[1.4](01-04-fundamental-theorem-asset-pricing.md) is *literally* $m$ reweighting the real-world probabilities. No-arbitrage pricing and marginal-utility pricing turn out to be the same sentence written in two alphabets. This is **Boss problem 3**, and it's the conceptual keystone of the whole course.

## The idea

An investor consumes $c_0$ today and $c_1$ tomorrow, and tomorrow is uncertain. A dollar tomorrow is worth less than a dollar today for two reasons: **impatience** (you'd rather have it now) and **which state it arrives in** (a dollar delivered in a bad state — when you're already poor — is worth more to you than a dollar in a good state, because marginal utility is higher when consumption is low).

The stochastic discount factor $m$ bundles both effects into a single random number, one value per future state:

$$m = \beta\,\frac{u'(c_1)}{u'(c_0)}.$$

$\beta$ (a number just below 1) is impatience; $u'(c_1)/u'(c_0)$ is *your hunger* in that state relative to today. In bad states $c_1$ is low, $u'(c_1)$ is high, so $m$ is high — you discount those payoffs *less*. To price any asset, weight its payoff in each state by how much you'd value a dollar there ($m$) and average: $p = \mathbb{E}[m\,x]$. That's it. An asset is expensive if it tends to pay off exactly when you're hungry.

The magic is that this same $m$ prices *everything* — stocks, bonds, options — because it's a property of the investor, not of the asset. Fix $m$, and every price in the economy is one expectation away.

## The formal version

**The consumption Euler equation.** The investor maximizes $u(c_0) + \beta\,\mathbb{E}[u(c_1)]$. Buying $\xi$ units of an asset that costs $p$ today and pays $x$ (random) tomorrow means $c_0 = e_0 - p\,\xi$ and $c_1 = e_1 + x\,\xi$, where $e_0,e_1$ are endowments. Set $\partial/\partial\xi = 0$ at the optimum $\xi=0$:

$$-p\,u'(c_0) + \beta\,\mathbb{E}[u'(c_1)\,x] = 0 \;\Longrightarrow\; \boxed{\,p = \mathbb{E}\!\left[\beta\frac{u'(c_1)}{u'(c_0)}\,x\right] = \mathbb{E}[m\,x],\quad m = \beta\frac{u'(c_1)}{u'(c_0)}.}$$

*In words:* at the optimum, the utility you give up buying one more unit today equals the discounted expected utility of its payoff tomorrow. Rearranged, that's the pricing equation. Note $m > 0$ always (marginal utility is positive) — remember that, it's the whole engine behind $Q$ below.

For a **gross return** $R = x/p$ (payoff per dollar invested), divide by $p$:

$$1 = \mathbb{E}[m\,R].$$

**Corollary 1 — the risk-free rate.** A risk-free asset has certain return $R_f$, so $1 = \mathbb{E}[m R_f] = R_f\,\mathbb{E}[m]$:

$$R_f = \frac{1}{\mathbb{E}[m]}.$$

*In words:* the price of a sure dollar tomorrow is $\mathbb{E}[m]$; its return is the reciprocal. (Compare [1.3](01-03-one-period-model-pricing-measure.md): state prices summed to $1/R$.)

**Corollary 2 — the risk premium.** Expand $1 = \mathbb{E}[mR] = \mathbb{E}[m]\mathbb{E}[R] + \operatorname{Cov}(m,R)$ and use $R_f = 1/\mathbb{E}[m]$:

$$\mathbb{E}[R] - R_f = -\frac{\operatorname{Cov}(m,R)}{\mathbb{E}[m]} = -R_f\,\operatorname{Cov}(m,R).$$

*In words:* an asset earns a premium above the risk-free rate **only** to the extent it covaries *negatively* with $m$ — i.e. it pays off in good states (low $m$) and disappoints in bad states (high $m$). An asset that does the opposite — pays off when you're hungry ($\operatorname{Cov}(m,R)>0$) — is **insurance**, and you accept a return *below* $R_f$ to hold it. Risk itself (variance) earns nothing; only covariance with marginal utility is priced. The **size** of this covariance is governed by risk aversion: with CRRA utility $u'(c)=c^{-\gamma}$, $m = \beta(c_1/c_0)^{-\gamma}$, and the Arrow–Pratt coefficient $\gamma$ scales how violently $m$ swings with consumption — high $\gamma$ means large $|\operatorname{Cov}(m,R)|$ and fat premia.

**Corollary 3 — the CAPM is a special case.** Suppose $m$ is **affine in the market return**, $m = a - b\,R_M$ (Boss problem 3, part 1). Then $\operatorname{Cov}(m,R_i) = -b\operatorname{Cov}(R_M,R_i)$, so Corollary 2 gives $\mathbb{E}[R_i]-R_f = \frac{b}{\mathbb{E}[m]}\operatorname{Cov}(R_M,R_i)$. Applying that to the market itself and dividing kills the unknown constants:

$$\mathbb{E}[R_i]-R_f = \beta_i\big(\mathbb{E}[R_M]-R_f\big),\qquad \beta_i = \frac{\operatorname{Cov}(R_M,R_i)}{\operatorname{Var}(R_M)}.$$

*In words:* the CAPM of [3.2](03-02-capm.md) is exactly the SDF equation under the assumption that a single market factor drives marginal utility. The SDF framework contains the CAPM and says precisely what extra assumption it costs.

**Corollary 4 — the risk-neutral measure is $m$ (Boss problem 3, part 2).** Define a new probability measure $Q$ by the **Radon–Nikodym density**

$$\frac{dQ}{dP} = \frac{m}{\mathbb{E}[m]} = R_f\,m.$$

This is legal: $m>0$ makes it positive, and $\mathbb{E}^P[R_f m] = R_f\,\mathbb{E}[m] = 1$ makes it integrate to 1 — so $Q$ is a genuine probability measure, equivalent to $P$ (same null sets, since $m>0$). Now rewrite the price:

$$p = \mathbb{E}^P[m\,x] = \frac{1}{R_f}\,\mathbb{E}^P[R_f m\,x] = \frac{1}{R_f}\,\mathbb{E}^P\!\left[\frac{dQ}{dP}\,x\right] = \frac{1}{R_f}\,\mathbb{E}^Q[x].$$

*In words:* the two pricing formulas are the **same equation**. Left side: physical probabilities $P$, state-dependent discounting by $m$ (marginal-utility pricing). Right side: reweighted probabilities $Q$, flat discounting by $R_f$ (risk-neutral pricing). The reweighting $dQ/dP = R_f m$ tilts probability *toward* high-marginal-utility (bad) states — which is why $Q$ is "pessimistic" and prices risk. Under $Q$ every asset returns $R_f$ (check: $\mathbb{E}^Q[R] = \mathbb{E}^P[R_f m R] = R_f\cdot 1 = R_f$), the martingale property from [1.3](01-03-one-period-model-pricing-measure.md).

This closes the loop with Module 1. There, state prices were $\psi_s = q_s/R$; here, in a finite-state economy with physical probabilities $P_s$, the state price of state $s$ is $\psi_s = P_s\,m_s$ — *probability times marginal utility* — and $q_s = R_f\,\psi_s = P_s\,m_s/\mathbb{E}[m]$ is exactly the $Q$-probability. The EMM, state prices, and marginal utility are three names for one object.

## Picture

The whole lesson is one hub with four spokes: start from $p=\mathbb{E}[m\,x]$ and every result in asset pricing is a short walk away. This is the "one picture" Boss problem 3 asks you to draw.

![Hub-and-spoke diagram: the pricing equation p = E[m x] at the center, with arrows to the risk-free rate 1/E[m], the risk premium minus Cov(m,R)/E[m], the CAPM beta relation when m is affine in the market return, and the risk-neutral measure dQ/dP = R_f m](assets/03-03-expected-utility-stochastic-discount-factor-fig1.svg)

## Worked examples

**Example 1 (a two-state economy, end to end).** Log utility $u(c)=\ln c$ so $u'(c)=1/c$; time-discount $\beta = 0.95$. Consumption today $c_0 = 1$. Tomorrow, two equally likely states ($P = \tfrac12,\tfrac12$): **good**, $c_1 = 1.2$; **bad**, $c_1 = 0.8$. Price a risky asset paying $x = 2$ in the good state and $x = 0.5$ in the bad state.

*Step 1 — the SDF, state by state.* $m = \beta\,u'(c_1)/u'(c_0) = 0.95\,(c_0/c_1)$:

$$m_{\text{good}} = 0.95/1.2 = 0.7917,\qquad m_{\text{bad}} = 0.95/0.8 = 1.1875.$$

Higher in the bad state — you value a dollar more when poor. ✓

*Step 2 — risk-free rate.* $\mathbb{E}[m] = \tfrac12(0.7917) + \tfrac12(1.1875) = 0.9896$, so $R_f = 1/0.9896 = 1.0105$ (a 1.05% risk-free rate).

*Step 3 — price the asset.* $p = \mathbb{E}[m\,x] = \tfrac12(0.7917\cdot 2) + \tfrac12(1.1875\cdot 0.5) = 0.7917 + 0.2969 = 1.0885.$

*Step 4 — verify via the risk-neutral measure.* The density $dQ/dP = m/\mathbb{E}[m]$ in each state:

$$\Big(\tfrac{dQ}{dP}\Big)_{\text{good}} = \frac{0.7917}{0.9896} = 0.80,\qquad \Big(\tfrac{dQ}{dP}\Big)_{\text{bad}} = \frac{1.1875}{0.9896} = 1.20.$$

So risk-neutral probabilities $Q_{\text{good}} = 0.5(0.80) = 0.4$, $Q_{\text{bad}} = 0.5(1.20) = 0.6$ (sum to 1 ✓). $Q$ tilts weight from the good state (0.5→0.4) toward the bad (0.5→0.6). Now

$$p = \frac{1}{R_f}\,\mathbb{E}^Q[x] = \frac{0.4(2) + 0.6(0.5)}{1.0105} = \frac{1.1}{1.0105} = 1.0885. \checkmark$$

Identical price. Physical probabilities with state-dependent $m$, or risk-neutral probabilities with flat discounting — same number, as promised.

**Example 2 (affine $m$ gives the CAPM, the algebra).** Assume $m = a - b\,R_M$. For any asset $i$ with return $R_i$:

$$\operatorname{Cov}(m,R_i) = \operatorname{Cov}(a - bR_M,\,R_i) = -b\,\operatorname{Cov}(R_M,R_i).$$

Corollary 2: $\mathbb{E}[R_i]-R_f = -\operatorname{Cov}(m,R_i)/\mathbb{E}[m] = \dfrac{b}{\mathbb{E}[m]}\operatorname{Cov}(R_M,R_i)$. This holds for *every* asset, including the market portfolio $M$ itself:

$$\mathbb{E}[R_M]-R_f = \frac{b}{\mathbb{E}[m]}\operatorname{Var}(R_M).$$

Divide the first by the second — the messy factor $b/\mathbb{E}[m]$ cancels:

$$\frac{\mathbb{E}[R_i]-R_f}{\mathbb{E}[R_M]-R_f} = \frac{\operatorname{Cov}(R_M,R_i)}{\operatorname{Var}(R_M)} = \beta_i \;\Longrightarrow\; \mathbb{E}[R_i]-R_f = \beta_i\big(\mathbb{E}[R_M]-R_f\big).$$

The security market line, recovered from $p=\mathbb{E}[m\,x]$ plus one assumption: marginal utility is linear in the market. (That assumption holds exactly under quadratic utility or joint-normal returns — the two classic CAPM foundations.)

## Watch out

- **Variance is not priced; covariance with $m$ is.** An asset can be wildly volatile and command *zero* premium if that volatility is uncorrelated with $m$ (idiosyncratic risk). Only the part of risk that moves with marginal utility — with the bad states — earns compensation. This is the SDF version of "diversifiable risk isn't rewarded."
- **Sign of the premium follows $-\operatorname{Cov}(m,R)$, which is easy to flip.** Pro-cyclical asset (pays in good states) → $\operatorname{Cov}(m,R)<0$ → *positive* premium. Insurance asset (pays in bad states) → $\operatorname{Cov}(m,R)>0$ → premium *below* $R_f$, possibly negative. Gold and put options routinely have low or negative premia for exactly this reason.
- **$dQ/dP = R_f\,m$, not $m$.** The density must average to 1 under $P$; raw $m$ averages to $\mathbb{E}[m] = 1/R_f$. Forgetting the $R_f$ factor gives a "measure" whose total mass is $1/R_f \ne 1$.
- **$m$ prices assets; it is not itself a return.** $m = \beta u'(c_1)/u'(c_0)$ is a marginal rate of substitution, a pure number with units of "today's utility per tomorrow's utility." Don't read $\mathbb{E}[m]$ as an expected return — its *reciprocal* is the (gross) risk-free return.
- **The equation needs a correctly-priced asset.** $1 = \mathbb{E}[mR]$ and the premium formula hold for returns $R = x/p$ where $p$ is the *right* price. Plug in an arbitrary made-up return and $\mathbb{E}[mR]\ne 1$; the covariance formula will not equal the true premium.

## One-liner

> Every price is $p=\mathbb{E}[m\,x]$ with $m=\beta\,u'(c_1)/u'(c_0)$; the risk-free rate is $1/\mathbb{E}[m]$, the premium is $-\operatorname{Cov}(m,R)/\mathbb{E}[m]$, the CAPM is "$m$ affine in the market," and the risk-neutral measure is just $m$ reweighting the odds ($dQ/dP=R_f m$).

## Problems

**P1 (🟢)** An investor has CRRA log utility $u(c)=\ln c$ with $\beta = 0.98$ and $c_0 = 1$. Tomorrow: **boom** with probability 0.6, $c_1 = 1.1$; **bust** with probability 0.4, $c_1 = 0.9$.
(a) Compute the SDF $m$ in each state and $\mathbb{E}[m]$.
(b) Find the risk-free gross return $R_f$.
(c) Price an asset paying $x = 1.5$ in the boom and $x = 1.0$ in the bust.

**P2 (🟡)** In a two-state economy with $P = (\tfrac12,\tfrac12)$ over (good, bad), the SDF is $m = (\tfrac23,\ \tfrac43)$, so $\mathbb{E}[m]=1$ and $R_f = 1$. Two correctly-priced assets:
- Asset A (pro-cyclical): gross returns $R_A = (1.2,\ 0.9)$ over (good, bad).
- Asset B (counter-cyclical): gross returns $R_B = (0.8,\ 1.1)$.

For each, compute $\mathbb{E}[R]$, $\operatorname{Cov}(m,R)$, and the risk premium $-\operatorname{Cov}(m,R)/\mathbb{E}[m]$; confirm it equals $\mathbb{E}[R]-R_f$, and explain the sign in one sentence.

**P3 (🔴 — Boss problem 3)** Starting from $p=\mathbb{E}[m\,x]$ alone, in one connected argument:
(a) assuming $m = a - b\,R_M$ is affine in the market return, derive the CAPM beta relation $\mathbb{E}[R_i]-R_f = \beta_i(\mathbb{E}[R_M]-R_f)$;
(b) defining $dQ/dP = R_f\,m$, show $Q$ is an equivalent probability measure and that $p=\mathbb{E}[m\,x]$ becomes $p = \mathbb{E}^Q[x]/R_f$ — i.e. the SDF and the equivalent martingale measure are the same object. State where each of the two facts $m>0$ and $\mathbb{E}[m]=1/R_f$ is used.

<details>
<summary>Solutions</summary>

**P1.** $u'(c)=1/c$, so $m = \beta\,c_0/c_1 = 0.98/c_1$.
(a) $m_{\text{boom}} = 0.98/1.1 = 0.8909$, $m_{\text{bust}} = 0.98/0.9 = 1.0889$. $\mathbb{E}[m] = 0.6(0.8909) + 0.4(1.0889) = 0.5345 + 0.4356 = 0.9701$.
(b) $R_f = 1/\mathbb{E}[m] = 1/0.9701 = 1.0308$ (a 3.08% risk-free rate).
(c) $p = \mathbb{E}[m\,x] = 0.6(0.8909\cdot 1.5) + 0.4(1.0889\cdot 1.0) = 0.6(1.3364) + 0.4(1.0889) = 0.8018 + 0.4356 = 1.2374.$

*Cross-check via $Q$:* densities $0.8909/0.9701 = 0.9184$ (boom), $1.0889/0.9701 = 1.1225$ (bust); $Q = (0.6\cdot0.9184,\ 0.4\cdot1.1225) = (0.5510,\ 0.4490)$ (sums to 1 ✓). $\mathbb{E}^Q[x] = 0.5510(1.5) + 0.4490(1.0) = 0.8266 + 0.4490 = 1.2756$; $p = 1.2756/1.0308 = 1.2374.$ ✓

**P2.** $R_f = 1$, $\mathbb{E}[m]=1$.

Asset A: $\mathbb{E}[R_A] = \tfrac12(1.2) + \tfrac12(0.9) = 1.05$. $\mathbb{E}[mR_A] = \tfrac12(\tfrac23\cdot1.2) + \tfrac12(\tfrac43\cdot0.9) = \tfrac12(0.8) + \tfrac12(1.2) = 1.0$ (confirming A is correctly priced ✓). $\operatorname{Cov}(m,R_A) = \mathbb{E}[mR_A] - \mathbb{E}[m]\mathbb{E}[R_A] = 1 - 1.05 = -0.05$. Premium $= -(-0.05)/1 = +0.05$, and $\mathbb{E}[R_A]-R_f = 1.05 - 1 = 0.05$ ✓. **Positive** premium: A pays more in the good state (low $m$), so it's risky — it fails you when you're hungry — and must offer extra return.

Asset B: $\mathbb{E}[R_B] = \tfrac12(0.8) + \tfrac12(1.1) = 0.95$. $\mathbb{E}[mR_B] = \tfrac12(\tfrac23\cdot0.8) + \tfrac12(\tfrac43\cdot1.1) = \tfrac12(0.5333) + \tfrac12(1.4667) = 1.0$ ✓. $\operatorname{Cov}(m,R_B) = 1 - 0.95 = +0.05$. Premium $= -0.05$, and $\mathbb{E}[R_B]-R_f = 0.95 - 1 = -0.05$ ✓. **Negative** premium: B pays more in the bad state (high $m$), so it's *insurance* — investors accept a return below the risk-free rate for that protection.

**P3.**
(a) *CAPM.* Write any correctly-priced return as $1 = \mathbb{E}[mR_i]$. Expanding the product's expectation, $1 = \mathbb{E}[m]\mathbb{E}[R_i] + \operatorname{Cov}(m,R_i)$, and using $R_f = 1/\mathbb{E}[m]$:
$$\mathbb{E}[R_i] - R_f = -\frac{\operatorname{Cov}(m,R_i)}{\mathbb{E}[m]}.$$
Now impose $m = a - bR_M$: $\operatorname{Cov}(m,R_i) = -b\,\operatorname{Cov}(R_M,R_i)$, so $\mathbb{E}[R_i]-R_f = \frac{b}{\mathbb{E}[m]}\operatorname{Cov}(R_M,R_i)$. This holds for every asset, so in particular for $i=M$: $\mathbb{E}[R_M]-R_f = \frac{b}{\mathbb{E}[m]}\operatorname{Var}(R_M)$. Dividing eliminates $b/\mathbb{E}[m]$:
$$\mathbb{E}[R_i]-R_f = \frac{\operatorname{Cov}(R_M,R_i)}{\operatorname{Var}(R_M)}\big(\mathbb{E}[R_M]-R_f\big) = \beta_i\big(\mathbb{E}[R_M]-R_f\big). \qquad\blacksquare$$

(b) *EMM.* Define $dQ/dP = R_f\,m$. It is a valid density because (i) $m>0$ in every state (marginal utility is positive) $\Rightarrow R_f m > 0$, so $Q$ assigns positive probability to exactly the states $P$ does — the two measures are **equivalent**; and (ii) $\mathbb{E}^P[R_f m] = R_f\,\mathbb{E}[m] = R_f\cdot(1/R_f) = 1$, using $\mathbb{E}[m]=1/R_f$ — so total probability is 1. Then for any payoff $x$,
$$p = \mathbb{E}^P[m\,x] = \frac{1}{R_f}\mathbb{E}^P[R_f m\,x] = \frac{1}{R_f}\mathbb{E}^P\!\Big[\frac{dQ}{dP}x\Big] = \frac{1}{R_f}\mathbb{E}^Q[x].$$
So marginal-utility pricing (physical $P$, discount by the random $m$) and risk-neutral pricing (measure $Q$, discount by the constant $R_f$) are the *same* equation. **Where each fact is used:** $m>0$ gives *equivalence* of $Q$ and $P$ (no state gains or loses possibility); $\mathbb{E}[m]=1/R_f$ gives *normalization* (the density integrates to 1). Together they make $R_f m$ a legitimate Radon–Nikodym derivative. $\blacksquare$

*One picture:* $p=\mathbb{E}[m x]$ sits at the center; setting $x\equiv 1$ gives $R_f = 1/\mathbb{E}[m]$; splitting the covariance gives the premium; assuming $m$ affine in $R_M$ gives the CAPM; reweighting by $m$ gives $Q$. Marginal utility, betas, and the EMM are one equation seen from four angles.

</details>

## Flashback

**From [3.2 (The CAPM)](03-02-capm.md):** A stock's return has covariance $\operatorname{Cov}(R_i, R_M) = 0.024$ with the market, whose variance is $\operatorname{Var}(R_M) = 0.04$. The risk-free rate is $R_f = 3\%$ and the expected market return is $\mathbb{E}[R_M] = 10\%$. Find the stock's beta and its equilibrium expected return via the security market line.

<details>
<summary>Solution</summary>

$$\beta_i = \frac{\operatorname{Cov}(R_i,R_M)}{\operatorname{Var}(R_M)} = \frac{0.024}{0.04} = 0.6.$$

Security market line: $\mathbb{E}[R_i] = R_f + \beta_i(\mathbb{E}[R_M]-R_f) = 0.03 + 0.6(0.10 - 0.03) = 0.03 + 0.042 = 0.072 = 7.2\%$.

The stock carries only 60% of the market's systematic risk, so it earns 60% of the market risk premium (4.2 of the market's 7 percentage points) above the risk-free rate. In this lesson's language: this is $\mathbb{E}[R_i]-R_f = -\operatorname{Cov}(m,R_i)/\mathbb{E}[m]$ with $m$ affine in $R_M$.

</details>

## Connections

- **Backward:** the SDF *is* the state-price/EMM machinery of [1.3](01-03-one-period-model-pricing-measure.md) and [1.4](01-04-fundamental-theorem-asset-pricing.md) with preferences attached — state price $\psi_s = P_s\,m_s$, risk-neutral probability $q_s = R_f\,\psi_s = R_f P_s m_s$. No-arbitrage guaranteed *some* positive $m$ exists (FTAP); marginal utility tells you *which* one. And [3.2](03-02-capm.md)'s CAPM is the affine-$m$ special case (Corollary 3).
- **Forward:** [3.4](03-04-merton-optimal-consumption-portfolio.md) makes this dynamic — $m_{t,t+1} = \beta\,u'(c_{t+1})/u'(c_t)$ becomes a chain over time, and the Euler equation becomes the intertemporal first-order condition of the HJB problem. The continuous-time SDF is the state-price density whose drift is $-r$ and whose volatility is the market price of risk.
- **Sideways (macro):** $p=\mathbb{E}[m x]$ with $m=\beta(c_{t+1}/c_t)^{-\gamma}$ *is* consumption-based asset pricing — the equation behind the equity-premium puzzle (real premia are far too large for plausible $\gamma$). See grad-macro's asset-pricing block.
- **Sideways (micro):** everything here — expected utility $\mathbb{E}[u(c)]$, marginal utility, the Arrow–Pratt coefficient $\gamma$ that sizes $\operatorname{Cov}(m,R)$ — is choice under uncertainty applied to asset markets ([`grad-micro`](../../grad-micro/syllabus.md)). The SDF is the marginal rate of substitution between state-contingent consumption, i.e. the slope of the indifference curve over Arrow securities.
