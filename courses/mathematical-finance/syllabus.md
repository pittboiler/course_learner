# Mathematical Finance — Syllabus

> Tier 2 · ~22 lessons · Prereqs: [`stochastic-calculus`](../stochastic-calculus/syllabus.md), [`probability-theory`](../probability-theory/syllabus.md), [`grad-micro`](../grad-micro/syllabus.md) · Roadmap id: `mathematical-finance`

## Goal

Learn to price and hedge derivatives the way modern quantitative finance does: by ruling out arbitrage rather than by forecasting. Build the logic from one-period and binomial models up to the fundamental theorem of asset pricing — no arbitrage is equivalent to the existence of an equivalent martingale (risk-neutral) measure — then turn the crank of stochastic calculus to derive the Black–Scholes PDE and formula two ways (delta-hedging and risk-neutral expectation), read the Greeks, and understand the volatility smile. Finally connect prices back to preferences through mean–variance analysis, the CAPM, and the stochastic discount factor, and close with interest-rate models and a look at where the clean theory breaks. Deliberately skips: fixed-income and credit-derivative depth, the exotic-option zoo, numerical-methods engineering (trees/Monte Carlo/PDE solvers as production code), and market microstructure. A tier-2 course — it assumes the Itô/Girsanov/Feynman–Kac machinery of `stochastic-calculus`, the measure-theoretic probability of `probability-theory`, and the choice-under-uncertainty and equilibrium ideas of `grad-micro`.

## Dangerous Checklist

When you finish, you can:

- [ ] Spot an arbitrage and use the law of one price to bound or pin down a price
- [ ] Replicate a derivative payoff with a self-financing portfolio and read off its price
- [ ] State the fundamental theorem of asset pricing and explain why no arbitrage ⟺ an equivalent martingale measure
- [ ] Price a derivative in one-period and multi-step binomial models, via replication and via risk-neutral probabilities, and show they agree
- [ ] Set up a continuous-time market and write the self-financing condition for a portfolio
- [ ] Derive the Black–Scholes PDE by delta-hedging and solve it for a European call
- [ ] Re-derive the same price as a risk-neutral expectation using Girsanov and Feynman–Kac
- [ ] Compute the Greeks and describe how a delta-hedger uses them dynamically
- [ ] Back out implied volatility and explain what the volatility smile is telling you
- [ ] Build the mean–variance efficient frontier and derive the CAPM beta relation
- [ ] Price any asset with a stochastic discount factor and connect it to marginal utility
- [ ] Price a zero-coupon bond in a short-rate model (Vasicek/CIR) and explain the term structure

## Modules

### Module 1: No-arbitrage and risk-neutral pricing

The whole subject in miniature — price by ruling out free money, and discover the risk-neutral measure hiding inside.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Arbitrage and the law of one price | Price without forecasting by ruling out free lunches | arbitrage, law of one price, payoffs and states, forward price |
| 1.2 | Replication and complete markets | Manufacture a payoff from traded assets and price it | replicating portfolio, spanning, complete vs incomplete markets |
| 1.3 | The one-period model and the pricing measure | Find the risk-neutral probabilities in a single step | state prices, risk-neutral measure, discounting, numéraire |
| 1.4 | The fundamental theorem of asset pricing | Connect no-arbitrage to the existence of a martingale measure | FTAP, equivalent martingale measure, no-arbitrage ⟺ EMM, market completeness ⟺ uniqueness |
| 1.5 | The binomial model and risk-neutral valuation | Price and hedge across many steps and take the limit | binomial tree, backward induction, delta-hedging, convergence to Black–Scholes |

**Boss problem 1:** In a two-step binomial tree, price a European call two ways — build the self-financing replicating portfolio step by step, and take the discounted expectation under the risk-neutral measure — and show they give the same price. Then let the step size shrink and show the risk-neutral parameters converge to the continuous-time (Black–Scholes) limit.

### Module 2: The Black–Scholes model

Push the binomial logic to continuous time, where stochastic calculus does the heavy lifting.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The continuous-time market and self-financing portfolios | Set up traded assets as Itô processes and constrain trading | geometric Brownian motion, self-financing condition, wealth dynamics, admissibility |
| 2.2 | Deriving the Black–Scholes PDE by delta-hedging | Remove risk locally and force a PDE on the price | delta-hedging, Itô's lemma applied, riskless portfolio, the Black–Scholes PDE |
| 2.3 | Risk-neutral pricing via Girsanov and Feynman–Kac | Solve the PDE as an expectation under the martingale measure | Girsanov's theorem, market price of risk, Feynman–Kac, discounted-price martingale |
| 2.4 | The Black–Scholes formula | Get and interpret the closed-form call and put prices | the call/put formula, $N(d_1),N(d_2)$, put–call parity, log-normality |
| 2.5 | The Greeks and dynamic hedging | Measure and manage a book's sensitivities | delta, gamma, theta, vega, rho, gamma–theta tradeoff, rebalancing |
| 2.6 | Implied volatility and the smile | Read the market's own volatility back out of prices | implied volatility, the smile/skew, why constant-$\sigma$ fails, model limitations |

**Boss problem 2:** Derive the Black–Scholes price of a European call two ways — solve the Black–Scholes PDE (reduced to the heat equation) with the call's boundary condition, and evaluate the discounted risk-neutral expectation $e^{-rT}\mathbb{E}^{\mathbb{Q}}[(S_T-K)^+]$ directly — and show they agree. Then differentiate to get the delta and verify it equals $N(d_1)$.

### Module 3: Preferences, portfolios, and equilibrium

Where do prices come from if not from arbitrage alone? Back to preferences — the bridge to `grad-micro` and `grad-macro`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Mean–variance analysis and the efficient frontier | Trade off risk and return over a set of assets | portfolio mean/variance, diversification, efficient frontier, tangency portfolio |
| 3.2 | The CAPM | Derive equilibrium expected returns from market risk | market portfolio, beta, security market line, systematic vs idiosyncratic risk |
| 3.3 | Expected utility and the stochastic discount factor | Price any asset by marginal utility in every state | expected utility, SDF/pricing kernel, $p=\mathbb{E}[m\,x]$, risk premia, links to the EMM |
| 3.4 | Merton's optimal consumption and portfolio problem | Choose how to invest and consume over time optimally | dynamic programming, HJB equation, Merton portfolio rule, the bridge to grad-macro asset pricing |

**Boss problem 3:** Start from the SDF pricing equation $p=\mathbb{E}[m\,x]$. Show that assuming a risk-free asset and a market factor recovers the CAPM beta relation, and separately show that the risk-neutral measure is just the SDF re-weighting of physical probabilities — i.e. connect $m$, the equivalent martingale measure, and marginal utility in one picture.

### Module 4: Interest rates and extensions

Let the discount rate itself be random, then survey what lies past the clean complete-market world.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The term structure and bond pricing | Price a zero-coupon bond and read the yield curve | zero-coupon bonds, yield curve, forward rates, discount factors |
| 4.2 | Short-rate models: Vasicek and CIR | Model the short rate as a diffusion and price bonds | Ornstein–Uhlenbeck, mean reversion, affine term structure, Vasicek vs CIR |
| 4.3 | Forward measures and changing numéraire | Price by choosing the most convenient reference asset | numéraire change, the $T$-forward measure, bond as numéraire, simplifying expectations |
| 4.4 | American options and optimal stopping (taste) | Price a claim you can exercise early | early exercise, optimal stopping, free-boundary problem, exercise premium |
| 4.5 | Incomplete markets and model risk (note) | Know where the theory stops giving one answer | incompleteness, non-unique EMM, stochastic volatility, model risk, calibration |

**Boss problem 4:** In the Vasicek model, solve for the price of a zero-coupon bond by computing the risk-neutral expectation of the discount factor $\mathbb{E}^{\mathbb{Q}}[\exp(-\int_0^T r_s\,ds)]$, using the Gaussian distribution of the integrated short rate. Show the result is affine in the current short rate, extract the implied yield curve, and explain why it can slope up or down but never take an arbitrary shape.

## Sources of truth

- Shreve, *Stochastic Calculus for Finance I & II* (primary; binomial in Vol. I, continuous-time in Vol. II)
- Björk, *Arbitrage Theory in Continuous Time* (arbitrage pricing, term structure, changes of numéraire)
- Hull, *Options, Futures, and Other Derivatives* (institutional grounding, the Greeks, market intuition)
- Duffie, *Dynamic Asset Pricing Theory* (state prices, the SDF, equilibrium foundations)

## Notes

- The engine of this course is [`stochastic-calculus`](../stochastic-calculus/syllabus.md): Itô's lemma, Girsanov's theorem, and Feynman–Kac are what turn the no-arbitrage principle into computable prices. Module 2 is essentially that toolkit applied to one problem.
- Risk-neutral pricing reduces the Black–Scholes PDE to the heat equation from [`pdes`](../pdes/syllabus.md) — the same parabolic equation, solved with a payoff boundary condition.
- The stochastic discount factor in Module 3 is [`grad-micro`](../grad-micro/syllabus.md)'s choice-under-uncertainty (expected utility, marginal utility, Arrow–Pratt) applied to asset markets, and Merton's problem connects directly to [`grad-macro`](../grad-macro/syllabus.md) consumption-based asset pricing.
