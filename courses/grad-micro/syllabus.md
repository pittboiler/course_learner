# Grad Microeconomics — Syllabus

> Tier 2 · 31 lessons · Prereqs: [`micro-refresher`](../micro-refresher/syllabus.md), [`real-analysis`](../real-analysis/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md) · Roadmap id: `grad-micro`

## Goal

Rebuild microeconomics as the first-year PhD sequence teaches it: axioms, theorems, and proofs, not just supply-and-demand pictures. Open with the optimization toolkit the whole subject runs on — convexity, the Kuhn–Tucker conditions, the envelope theorem, duality, and dynamic programming — then develop consumer and producer theory as constrained optimization with duality throughout. Build general equilibrium to its two crown jewels (existence of Walrasian equilibrium via fixed points, and the two welfare theorems), then confront what breaks the idealized picture: asymmetric information (adverse selection, signaling, screening, moral hazard, mechanism design) and market failures (monopoly, externalities, public goods). You will be able to set up and solve a constrained-optimization model, move fluently between primal and dual (utility/expenditure, profit/cost), prove existence and efficiency results, and analyze a market with informational or structural frictions. Deliberately kept lighter: dynamic general equilibrium and macro foundations (dynamic programming is introduced as a tool, not pursued into growth theory), the deep contract-theory literature beyond the canonical models, behavioral/experimental micro (noted, not developed), and full social-choice theory (Arrow as a capstone, not a module). A tier-2 course — it assumes the economic intuition of `micro-refresher`, the proof and analysis machinery of `real-analysis` (compactness, continuity, concavity, the implicit function theorem), and the `linalg-refresher` toolkit (quadratic forms, definiteness, Jacobians) for second-order conditions and comparative statics.

## Dangerous Checklist

When you finish, you can:

- [ ] Solve a constrained optimization with the Kuhn–Tucker conditions and check second-order/constraint-qualification conditions
- [ ] Use the envelope theorem and duality to move between value functions and their derivatives
- [ ] Derive Marshallian and Hicksian demand and connect them via the Slutsky equation
- [ ] State the axioms for rational preferences and for expected utility, and measure risk aversion (Arrow–Pratt)
- [ ] Recover a firm's technology from its cost or profit function (duality) and derive factor demands
- [ ] Define a Walrasian equilibrium and prove one exists using a fixed-point theorem
- [ ] State and prove the First and Second Welfare Theorems and explain their assumptions
- [ ] Analyze adverse selection, signaling, and screening in a market with hidden information
- [ ] Solve a principal–agent (moral hazard) problem for the optimal contract
- [ ] Use the revelation principle to design an incentive-compatible mechanism
- [ ] Analyze monopoly pricing, oligopoly (Cournot/Bertrand), externalities, and public-goods provision

## Modules

### Module 1: The optimization toolkit

Every result in the course is an optimization in disguise — master the machinery first.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Convexity, concavity, and quasiconcavity | Recognize the structure that guarantees clean optima | convex sets, concave/quasiconcave functions, Hessian tests, why convexity matters |
| 1.2 | Unconstrained and equality-constrained optimization | Solve with Lagrange and read the multipliers | first/second-order conditions, Lagrange multipliers, bordered Hessian |
| 1.3 | Inequality constraints: Kuhn–Tucker | Handle corner solutions and non-binding constraints | KKT conditions, complementary slackness, constraint qualification |
| 1.4 | The envelope theorem and duality | Differentiate value functions and exploit primal–dual structure | envelope theorem, value function, duality, comparative statics preview |
| 1.5 | Monotone comparative statics and dynamic programming | Get comparative statics without calculus, and optimize over time | supermodularity/Topkis, the maximum theorem, Bellman equation, value/policy functions |

**Boss problem 1:** For $\max_{x\ge 0} f(x)$ subject to $g(x)\le b$, write the KKT conditions, solve a concrete two-good case with a corner solution, then use the envelope theorem to compute how the optimal value responds to $b$ (and identify the multiplier as the shadow price).

### Module 2: Consumer theory

Choice as constrained optimization, and the duality that runs through all of it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Preferences and utility representation | Ground demand in axioms about choice | rational preferences, continuity, monotonicity, convexity, utility representation |
| 2.2 | Utility maximization: Marshallian demand | Solve the consumer's primal problem | budget set, Marshallian demand, indirect utility function, Roy's identity |
| 2.3 | Expenditure minimization and duality | Solve the dual and connect the two | Hicksian demand, expenditure function, Shephard's lemma, duality diagram |
| 2.4 | The Slutsky equation and comparative statics | Decompose a price change and sign it | substitution vs income effects, Slutsky equation, Slutsky matrix, integrability |
| 2.5 | Choice under uncertainty | Extend choice to risky prospects | expected utility (vNM), risk aversion, Arrow–Pratt, certainty equivalent, stochastic dominance |
| 2.6 | Revealed preference | Recover preferences from choices alone | WARP, SARP, GARP, Afriat's theorem, testing rationality |

**Boss problem 2:** For Cobb–Douglas utility, derive Marshallian demand, indirect utility, the expenditure function, and Hicksian demand; verify Roy's identity, Shephard's lemma, and the Slutsky equation all hold, and confirm the Slutsky substitution matrix is negative semidefinite and symmetric.

### Module 3: Producer theory

The firm as a dual of the consumer — technology, cost, and profit.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Production sets and technology | Describe what a firm can do | production set, transformation function, returns to scale, free disposal |
| 3.2 | Cost minimization | Find the cheapest way to produce | conditional factor demand, cost function, Shephard's lemma, cost duality |
| 3.3 | Profit maximization and supply | Solve the firm's primal and recover technology | profit function, Hotelling's lemma, supply/factor-demand, the law of supply |
| 3.4 | Aggregation and the firm | Move from one firm to industry supply | aggregation across firms, the "as-if" representative firm, efficiency of profit-maximization |

**Boss problem 3:** Given a cost function claimed to come from some technology, use its curvature (concavity in prices, homogeneity, Shephard's lemma) to test whether it is a valid cost function, recover the conditional factor demands, and reconstruct the underlying production set's key properties.

### Module 4: General equilibrium and welfare

Many markets at once — existence, efficiency, and their limits.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Partial equilibrium and surplus | Warm up with one market done rigorously | supply/demand, consumer/producer surplus, deadweight loss, quasilinear utility |
| 4.2 | The Edgeworth box and Walrasian equilibrium | Model a full exchange economy | exchange economy, Pareto set, contract curve, Walrasian (competitive) equilibrium |
| 4.3 | Existence of Walrasian equilibrium | Prove equilibrium exists — the payoff of Module 1 | excess demand, Walras' law, fixed-point proof (Arrow–Debreu) |
| 4.4 | The two welfare theorems | Connect competitive markets to efficiency | First & Second Welfare Theorems, Pareto efficiency, supporting prices |
| 4.5 | The core and equivalence | Show competition and coalition-proofness coincide | the core of an economy, core convergence, Debreu–Scarf theorem |
| 4.6 | Uniqueness, stability, and their failure | Learn the limits of the GE program | tâtonnement stability, gross substitutes, the Sonnenschein–Mantel–Debreu theorem |

**Boss problem 4:** In a two-good, two-consumer exchange economy with given Cobb–Douglas preferences and endowments, solve for the Walrasian equilibrium price ratio and allocation, verify it lies on the contract curve (First Welfare Theorem), and show any Pareto-efficient allocation can be decentralized by some price and transfers (Second Welfare Theorem).

### Module 5: Information economics

Drop the assumption that everyone knows everything — and watch markets change.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Adverse selection: the market for lemons | See how hidden quality can unravel a market | asymmetric information, adverse selection, market unraveling (Akerlof) |
| 5.2 | Signaling | Let the informed party credibly reveal type | signaling (Spence), single-crossing, separating/pooling equilibria |
| 5.3 | Screening | Let the uninformed party design a menu | screening (Rothschild–Stiglitz), self-selection, menu of contracts |
| 5.4 | Moral hazard and the principal–agent problem | Design incentives when actions are hidden | hidden action, incentive compatibility, the optimal contract, risk–incentive tradeoff |
| 5.5 | Mechanism design in markets | Design rules that elicit private information | revelation principle, incentive compatibility, individual rationality, implementation |

**Boss problem 5:** Solve a principal–agent problem with two effort levels and two outcomes: find the optimal wage contract when effort is observable (first best), then when it is hidden, and show how the optimal contract trades off insurance against incentives when the agent is risk-averse.

### Module 6: Market structure, externalities, and welfare

The canonical departures from perfect competition — and how to think about fixing them.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Monopoly and price discrimination | Analyze a single seller's pricing power | monopoly pricing, markup, deadweight loss, first/second/third-degree price discrimination |
| 6.2 | Oligopoly | Apply game theory to a few competing firms | Cournot, Bertrand, Stackelberg, the Bertrand paradox, capacity constraints |
| 6.3 | Externalities and the Coase theorem | Handle costs and benefits outside the price system | externalities, Pigouvian taxes, the Coase theorem, property rights |
| 6.4 | Public goods | Explain why markets underprovide shared goods | non-rivalry/non-excludability, free-riding, Samuelson condition, Lindahl prices |
| 6.5 | Social choice and welfare | Ask whether "society's preferences" even make sense | Arrow's impossibility theorem, social welfare functions, the aggregation problem (capstone) |

**Boss problem 6:** Compare the Cournot duopoly outcome to monopoly and to perfect competition for linear demand: find each equilibrium quantity, price, and total surplus, quantify the deadweight loss in each, and show how the outcome converges to the competitive one as the number of firms grows.

## Sources of truth

- Mas-Colell, Whinston & Green, *Microeconomic Theory* (primary; the standard first-year text)
- Jehle & Reny, *Advanced Microeconomic Theory* (clean proofs and worked structure)
- Kreps, *A Course in Microeconomic Theory* / *Microeconomic Foundations* (conceptual depth, choice and information)
- Varian, *Microeconomic Analysis* (duality and comparative statics done crisply)

## Notes

- Shares an optimization/fixed-point foundation with [`grad-game-theory`](../grad-game-theory/syllabus.md) (Module 1 in both) and overlaps on mechanism design and oligopoly — the game-theory course is methods-first, this one market-first; the Cournot/Bertrand and mechanism-design lessons here are those methods applied to markets.
