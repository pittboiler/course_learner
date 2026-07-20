# Mathematical Microeconomics — Syllabus

> Tier 0 · 15 lessons · Prereqs: [`calc-refresher`](../calc-refresher/syllabus.md) · Roadmap id: `micro-refresher`

## Goal

Intermediate-to-advanced microeconomic theory, pitched to prepare for a graduate sequence (Mas-Colell–Whinston–Green). Not a rudimentary treatment: consumer and producer theory are developed with full duality (Marshallian ↔ Hicksian demand, indirect utility and expenditure functions, Roy's identity, Shephard's lemma, the Slutsky equation), and the course carries through to general equilibrium, the welfare theorems, and information economics. Calculus is used freely — constrained optimization (Lagrangians and the envelope theorem) is the workhorse. Simple premises (e.g. two goods, quasi-concave utility) are stated where they buy clarity, then flagged as the special case of a general result. Deliberately kept lighter: measure-theoretic GE existence proofs, the full fixed-point machinery (that's grad micro + `real-analysis`), and behavioral departures from rationality.

## Dangerous Checklist

When you finish, you can:

- [ ] State the preference axioms and when they guarantee a (differentiable, quasi-concave) utility representation
- [ ] Derive Marshallian demand from utility maximization via the Lagrangian, and check homogeneity and Walras' law
- [ ] Set up the dual expenditure-minimization problem and derive Hicksian demand
- [ ] Move fluently among the four objects — $v$, $e$, Marshallian $x$, Hicksian $h$ — using Roy's identity and Shephard's lemma
- [ ] Decompose a demand response into substitution and income effects with the Slutsky equation, and sign it
- [ ] Represent choice under uncertainty with expected utility and measure risk aversion (Arrow–Pratt)
- [ ] Derive a firm's cost function and conditional factor demands, and its profit-maximizing supply
- [ ] Compute equilibrium, surplus, and deadweight loss under competition, monopoly (with price discrimination), and oligopoly
- [ ] State and apply the two welfare theorems in an Edgeworth box
- [ ] Analyze externalities, public goods, and markets with asymmetric information (adverse selection, signaling)

## Modules

### Module 1: Consumer theory

The full duality-based treatment — the analytical core of the course.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Preferences, utility, and rational choice | State the axioms and when preferences admit a utility function | completeness, transitivity, monotonicity, convexity, MRS, quasi-concavity, representation |
| 1.2 | Utility maximization and Marshallian demand | Solve the consumer's problem with a Lagrangian | UMP, Walrasian/Marshallian demand, tangency (MRS = price ratio), homogeneity, Walras' law, indirect utility |
| 1.3 | Duality: expenditure minimization and Hicksian demand | Run the dual problem and connect the two via envelope results | EMP, Hicksian/compensated demand, expenditure function, Shephard's lemma, Roy's identity |
| 1.4 | The Slutsky equation and comparative statics | Split a price change into substitution and income effects | Slutsky equation, substitution/income effects, normal/inferior/Giffen goods, the Slutsky matrix |

**Boss problem 1:** For a CES (or Cobb–Douglas) utility, derive Marshallian demand, the indirect utility and expenditure functions, and Hicksian demand; then verify Roy's identity, Shephard's lemma, and the Slutsky decomposition all hang together.

### Module 2: Choice under uncertainty

Preferences over lotteries, and the price of risk.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Expected utility | Represent preferences over lotteries with a vNM utility index | lotteries, independence axiom, von Neumann–Morgenstern representation, Allais paradox |
| 2.2 | Risk aversion | Measure and compare risk attitudes, and price risk | concavity ↔ risk aversion, certainty equivalent, risk premium, Arrow–Pratt coefficients, CARA/CRRA |

**Boss problem 2:** An investor with CRRA utility allocates wealth between a safe and a risky asset — solve for the optimal share, compute the risk premium and certainty equivalent, and show how the allocation shifts with the coefficient of relative risk aversion.

### Module 3: Producer theory

The firm, developed dually like the consumer.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Technology and production | Describe technology and its returns | production function, isoquants, MRTS, returns to scale, elasticity of substitution |
| 3.2 | Cost minimization and the cost function | Derive conditional factor demands and cost | CMP, conditional factor demand, cost function, Shephard's lemma (again), short vs. long run |
| 3.3 | Profit maximization and supply | Get the supply curve and profit function | PMP, output supply, factor demand, Hotelling's lemma, profit function convexity |

**Boss problem 3:** For a Cobb–Douglas technology, derive the cost function and conditional factor demands, then the profit-maximizing supply; verify Shephard's and Hotelling's lemmas and relate returns to scale to the shape of average cost.

### Module 4: Markets and market power

From price-takers to strategic firms.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Perfect competition and welfare | Find competitive equilibrium and measure efficiency | partial equilibrium, consumer/producer surplus, allocative efficiency, entry & LR supply |
| 4.2 | Monopoly and price discrimination | Analyze a price-setter and the welfare it destroys | marginal revenue, Lerner index, deadweight loss, first/second/third-degree price discrimination |
| 4.3 | Oligopoly | Solve strategic quantity/price competition | Cournot, Bertrand, Stackelberg, best responses, conjectural interaction (bridge to game theory) |

**Boss problem 4:** For one linear demand and constant marginal cost, compute price, quantity, and deadweight loss under perfect competition, monopoly, and Cournot duopoly, and rank the three on welfare — then show where price discrimination lands.

### Module 5: Equilibrium and market failure

When the invisible hand works, and when it doesn't.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | General equilibrium and the welfare theorems | Prove exchange efficiency and state the two welfare theorems | Edgeworth box, Pareto efficiency, Walrasian equilibrium, First & Second Welfare Theorems, contract curve |
| 5.2 | Externalities and public goods | Diagnose and correct the classic failures | externalities, Pigouvian tax, Coase theorem, public goods, Samuelson condition, free-riding |
| 5.3 | Asymmetric information | Analyze markets that unravel under hidden information | adverse selection (lemons), moral hazard, signaling (Spence), screening |

**Boss problem 5:** In an Edgeworth-box exchange economy, find the competitive equilibrium and show it lies on the contract curve (First Welfare Theorem); then take a lemons market and show how asymmetric information moves the equilibrium away from efficiency.

## Sources of truth

- Varian, *Intermediate Microeconomics* and *Microeconomic Analysis* (the two levels this course spans)
- Nicholson & Snyder, *Microeconomic Theory* (worked-problem style, comparative statics)
- Mas-Colell, Whinston & Green, *Microeconomic Theory* (the rigor level this course prepares you for)
