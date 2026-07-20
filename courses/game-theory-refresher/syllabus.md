# Game Theory — Syllabus

> Tier 0 · 12 lessons · Prereqs: [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md) · Roadmap id: `game-theory-refresher`

## Goal

Intermediate-to-advanced non-cooperative game theory, pitched to prepare for a graduate course (and the optimization-and-fixed-points opening of `grad-game-theory`). Not a rudimentary "here's the prisoner's dilemma" tour: it develops static and dynamic games, mixed strategies with the existence theorem stated properly, repeated games and the Folk Theorem, games of incomplete information (Bayesian and perfect Bayesian equilibrium), auctions, and an introduction to mechanism design. Expected-payoff reasoning leans on `prob-stat-refresher`. Simple 2×2 examples anchor each idea, then are generalized. Deliberately kept lighter: the topological fixed-point proofs behind existence (stated, used, not proved — that's `real-analysis`/grad), cooperative-game solution concepts beyond bargaining, and evolutionary dynamics.

## Dangerous Checklist

When you finish, you can:

- [ ] Write a game in normal form and solve it by iterated deletion of dominated strategies
- [ ] Find all pure-strategy Nash equilibria via best responses
- [ ] Compute mixed-strategy equilibria using the indifference principle, and state Nash's existence theorem
- [ ] Solve strategic market models (Cournot, Bertrand) for equilibrium
- [ ] Solve extensive-form games by backward induction and identify subgame-perfect equilibria
- [ ] Use commitment and first-mover advantage (Stackelberg) and diagnose the hold-up problem
- [ ] Determine when cooperation is sustainable in a repeated game (Folk Theorem, trigger strategies)
- [ ] Model incomplete information as a Bayesian game and find Bayes–Nash equilibria
- [ ] Derive equilibrium bidding in first- and second-price auctions and state revenue equivalence
- [ ] Analyze a signaling game with perfect Bayesian equilibrium, and read a basic mechanism-design result

## Modules

### Module 1: Static games of complete information

The foundation: simultaneous moves, common knowledge.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Normal form, dominance, and rationalizability | Represent a game and prune it by rationality | normal form, strict/weak dominance, iterated deletion, rationalizability, best response |
| 1.2 | Nash equilibrium | Find mutual best responses in pure strategies | Nash equilibrium, best-response correspondence, coordination/anti-coordination games |
| 1.3 | Mixed strategies and existence | Compute mixed equilibria and know they always exist | mixed strategy, indifference principle, expected payoff, Nash's existence theorem (statement) |
| 1.4 | Strategic market models | Apply Nash to oligopoly and commons | Cournot, Bertrand, tragedy of the commons, comparative statics of equilibrium |

**Boss problem 1:** Find every Nash equilibrium (pure and mixed) of a given 2×2 game, then solve an $n$-firm Cournot model for the symmetric equilibrium and take its limit as $n\to\infty$, comparing to monopoly and perfect competition.

### Module 2: Dynamic games of complete information

Sequential moves, credibility, and cooperation over time.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Extensive form and backward induction | Model timing and solve by rolling back | game tree, information sets, backward induction, first-mover reasoning |
| 2.2 | Subgame perfection and commitment | Rule out incredible threats; value commitment | subgame-perfect equilibrium, credible threats, Stackelberg, hold-up problem |
| 2.3 | Repeated games and the Folk Theorem | Sustain cooperation with the shadow of the future | finitely/infinitely repeated games, trigger strategies, discounting, Folk Theorem |

**Boss problem 2:** Solve a multi-stage entry/pricing game for its subgame-perfect equilibrium, then show in an infinitely repeated prisoner's dilemma the exact discount factor above which grim-trigger sustains cooperation.

### Module 3: Games of incomplete information

Hidden types, beliefs, and the games that dominate modern economics.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Bayesian games | Model private information and solve for Bayes–Nash equilibrium | types, beliefs, Bayesian game, Bayes–Nash equilibrium, Harsanyi doctrine |
| 3.2 | Auctions | Derive equilibrium bidding and compare formats | first-/second-price, private values, symmetric BNE, revenue equivalence |
| 3.3 | Signaling and perfect Bayesian equilibrium | Solve games where actions reveal type | perfect Bayesian equilibrium, sequential rationality, signaling (Spence), separating/pooling |

**Boss problem 3:** In a first-price sealed-bid auction with values uniform on $[0,1]$, derive the symmetric equilibrium bidding strategy, compute expected revenue, and verify revenue equivalence against the second-price auction.

### Module 4: Bargaining and mechanism design

Designing the game, not just playing it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Bargaining | Split surplus cooperatively and non-cooperatively | Nash bargaining solution, axioms, Rubinstein alternating offers, SPE division |
| 4.2 | Mechanism design and social choice | Design rules that implement good outcomes | incentive compatibility, revelation principle, VCG/second-price truthfulness, Arrow / Gibbard–Satterthwaite (statement) |

**Boss problem 4:** Solve the Rubinstein alternating-offers game for its subgame-perfect division and take the no-friction limit to recover the Nash bargaining split; then show truthful bidding is a dominant strategy in a second-price auction and connect it to the revelation principle.

## Sources of truth

- Osborne, *An Introduction to Game Theory* (definitions, examples, problem style)
- Gibbons, *Game Theory for Applied Economists* (applications, extensive-form and Bayesian games)
- Fudenberg & Tirole, *Game Theory* (the rigor level this course prepares you for)
