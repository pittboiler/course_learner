# Grad Game Theory — Syllabus

> Tier 2 · 30 lessons · Prereqs: [`game-theory-refresher`](../game-theory-refresher/syllabus.md), [`probability-theory`](../probability-theory/syllabus.md), [`real-analysis`](../real-analysis/syllabus.md) · Roadmap id: `grad-game-theory`

## Goal

Rebuild game theory at the graduate level: not "what is a Nash equilibrium" but "why does one exist, when is it unique, and what does it predict in the games that matter." Open with the mathematical engine — convexity, correspondences, and the Brouwer/Kakutani fixed-point theorems — then use it to *prove* equilibrium existence rather than assert it. Work through the four pillars a first-year PhD sequence covers: equilibrium refinements in dynamic and repeated games (the folk theorems), games of incomplete information (Bayesian games, auctions, signaling), mechanism design (the revelation principle, VCG, Myerson's optimal auction), and cooperative theory (the core, the Shapley value, stable matching). You will be able to model a strategic situation precisely, prove an equilibrium exists, compute it, and design a mechanism that implements a desired outcome. Deliberately kept lighter: repeated games with imperfect/private monitoring beyond a first look, epistemic foundations (common-knowledge/type-space formalism) past what Bayesian games need, algorithmic and computational game theory, and the full cooperative-solution zoo (nucleolus, bargaining sets mentioned, not developed). A tier-2 course — it assumes the modeling vocabulary of `game-theory-refresher`, the probability of `probability-theory` (expectations, distributions, conditioning), and the rigor of `real-analysis` (continuity, compactness, sup/inf, and reading an $\varepsilon$–$\delta$ proof).

## Dangerous Checklist

When you finish, you can:

- [ ] State and use the Brouwer and Kakutani fixed-point theorems, and check the hypotheses (convexity, compactness, hemicontinuity)
- [ ] Prove existence of a mixed-strategy Nash equilibrium via Kakutani
- [ ] Solve zero-sum games with the minimax theorem and LP duality
- [ ] Compute subgame-perfect equilibria by backward induction, and apply the folk theorem to an infinitely repeated game
- [ ] Solve for Bayes–Nash equilibrium in a Bayesian game, including first- and second-price auctions
- [ ] Prove and apply the revenue equivalence theorem
- [ ] Identify pooling vs separating equilibria in a signaling game and apply a refinement
- [ ] Use the revelation principle and design a dominant-strategy (VCG) or Bayesian-optimal (Myerson) mechanism
- [ ] Explain why efficient bargaining can be impossible (Myerson–Satterthwaite)
- [ ] Compute the core and the Shapley value of a coalitional game
- [ ] Find a stable matching with the Gale–Shapley algorithm and reason about its properties

## Modules

### Module 1: Mathematical foundations — optimization, fixed points, and utility

The engine room: the theorems that make existence proofs possible.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Convex sets, convex functions, and separating hyperplanes | Master the geometry every existence proof leans on | convex set/hull, convex/concave functions, separating & supporting hyperplanes |
| 1.2 | Correspondences and Berge's maximum theorem | Handle set-valued best responses and their continuity | correspondence, upper/lower hemicontinuity, Berge's maximum theorem |
| 1.3 | Brouwer and Kakutani fixed-point theorems | Get the two theorems that deliver equilibria | Brouwer FPT, Kakutani FPT, closed graph, application template |
| 1.4 | Zero-sum games, minimax, and LP duality | Solve strictly competitive games exactly | value of a game, minimax theorem, linear programming duality |
| 1.5 | Expected utility and the von Neumann–Morgenstern axioms | Justify the payoff numbers players maximize | lotteries, vNM axioms, expected-utility representation, risk attitudes |

**Boss problem 1:** State the best-response correspondence of a two-player game as a map on the product of mixed-strategy simplices; verify the Kakutani hypotheses (nonempty/convex/compact-valued, closed graph) hold, and identify exactly where each would fail if payoffs weren't continuous or strategies weren't mixed.

### Module 2: Nash equilibrium — existence and structure

From "a fixed point exists" to the central solution concept and its refinements.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Normal-form games, dominance, and rationalizability | Prune a game before solving it | strict/weak dominance, iterated deletion, rationalizability, best-response sets |
| 2.2 | Nash equilibrium and mixed strategies | Define the solution concept precisely | pure/mixed Nash equilibrium, indifference conditions, support |
| 2.3 | Existence of Nash equilibrium | Prove Nash's theorem — the payoff of Module 1 | Nash's existence theorem, Kakutani application, existence for finite games |
| 2.4 | Computing and characterizing equilibria | Actually find the equilibria of a game | support enumeration, Lemke–Howson idea, equilibrium multiplicity |
| 2.5 | Correlated equilibrium | Generalize Nash and connect to learning | correlated equilibrium, the LP formulation, no-regret dynamics link |

**Boss problem 2:** For a two-player game with a $3\times3$ payoff matrix, find all Nash equilibria (pure and mixed) via support enumeration, then find a correlated equilibrium that Pareto-dominates every Nash equilibrium and interpret the correlating device.

### Module 3: Dynamic and repeated games

Time, threats, and the enormous set of behaviors reputation makes possible.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Extensive-form games and behavior strategies | Model sequential play and information | game tree, information sets, perfect vs imperfect recall, Kuhn's theorem |
| 3.2 | Backward induction and subgame perfection | Rule out non-credible threats | subgame-perfect equilibrium, backward induction, one-shot deviation principle |
| 3.3 | Repeated games: finite and infinite horizons | See how repetition changes incentives | stage game, discounting, trigger strategies, the value of a relationship |
| 3.4 | The folk theorems | Characterize what repetition can sustain | Nash-threat & subgame-perfect folk theorems, minmax payoffs, feasible set |
| 3.5 | Bargaining | Solve who-gets-what two ways | Nash bargaining solution (axioms), Rubinstein alternating offers, outside options |

**Boss problem 3:** In the infinitely repeated prisoner's dilemma, find the critical discount factor above which grim-trigger sustains cooperation as a subgame-perfect equilibrium; then show the same threat supports a whole interval of average payoffs, illustrating the folk theorem.

### Module 4: Games of incomplete information

When players don't know each other's types — auctions, signaling, and belief-based equilibria.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Bayesian games and Bayes–Nash equilibrium | Model and solve games with private information | Harsanyi types, common prior, Bayes–Nash equilibrium |
| 4.2 | Auctions and equilibrium bidding | Derive optimal bids in the canonical auctions | first-/second-price, private values, Bayes–Nash bidding strategies |
| 4.3 | The revenue equivalence theorem | Prove a surprising invariance across auction formats | revenue equivalence, envelope/payoff-equivalence argument, reserve prices |
| 4.4 | Perfect Bayesian and sequential equilibrium | Add beliefs to dynamic incomplete-information games | beliefs, sequential rationality, PBE, consistency, sequential equilibrium |
| 4.5 | Signaling games and refinements | Separate credible information from cheap talk | signaling (Spence), pooling/separating equilibria, intuitive criterion |

**Boss problem 4:** In a first-price sealed-bid auction with $n$ bidders whose valuations are i.i.d. uniform on $[0,1]$, derive the symmetric Bayes–Nash bidding strategy $b(v)=\tfrac{n-1}{n}v$, compute the seller's expected revenue, and verify it equals the second-price auction's revenue (revenue equivalence).

### Module 5: Mechanism design

Reverse game theory: design the rules so that self-interested play yields the outcome you want.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Social choice and impossibility | See the limits before designing | Arrow's theorem, Gibbard–Satterthwaite, strategy-proofness |
| 5.2 | The revelation principle and incentive compatibility | Reduce all mechanisms to truthful direct ones | direct mechanism, revelation principle, IC & IR constraints |
| 5.3 | Dominant-strategy mechanisms: VCG | Implement efficient outcomes with truthful dominance | Vickrey–Clarke–Groves, pivot payments, efficiency, budget balance issues |
| 5.4 | Bayesian mechanism design and the optimal auction | Design for expected performance | Myerson's optimal auction, virtual valuations, revenue maximization |
| 5.5 | The limits of efficient design | Understand when no good mechanism exists | Myerson–Satterthwaite, budget balance vs efficiency vs voluntary participation |

**Boss problem 5:** Design Myerson's revenue-optimal auction for a single good with two bidders drawn from given (regular) distributions: compute the virtual valuations, state the allocation and payment rules, find the optimal reserve price, and contrast the outcome with the efficient (VCG) allocation.

### Module 6: Cooperative game theory and matching

When binding agreements are possible: fair division, coalitions, and market design.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Coalitional games and the core | Ask which outcomes no coalition can improve upon | transferable utility, characteristic function, the core, balancedness |
| 6.2 | The Shapley value | Divide value fairly by marginal contribution | Shapley axioms, the value formula, applications to cost sharing |
| 6.3 | Stable matching and market design | Match two sides so no pair wants to deviate | Gale–Shapley deferred acceptance, stability, strategy-proofness, applications |
| 6.4 | Evolutionary game theory | Replace rationality with selection dynamics | evolutionarily stable strategy, replicator dynamics, stability of equilibria |
| 6.5 | Learning in games and the Nash program | Ask whether and how equilibrium arises | fictitious play, no-regret → correlated equilibrium, the Nash program (capstone synthesis) |

**Boss problem 6:** For a 3-player coalitional game given by its characteristic function, determine whether the core is nonempty (and describe it), compute the Shapley value, and check whether the Shapley value lies in the core — interpreting what it means when it does and doesn't.

## Sources of truth

- Osborne & Rubinstein, *A Course in Game Theory* (primary; definitions and the noncooperative core)
- Fudenberg & Tirole, *Game Theory* (dynamic games, refinements, repeated games)
- Myerson, *Game Theory: Analysis of Conflict* (mechanism design and the Bayesian viewpoint)
- Maschler, Solan & Zamir, *Game Theory* (cooperative theory and careful proofs); Mas-Colell, Whinston & Green Part IV (mechanism design, shared with `grad-micro`)

## Notes

- This course and [`grad-micro`](../grad-micro/syllabus.md) share an optimization/fixed-point foundation (Module 1 here overlaps grad-micro's Module 1) and both cover mechanism design; the treatments are complementary — this course is game-theory-first, grad-micro is market-first. Oligopoly in grad-micro is this course's methods applied.
