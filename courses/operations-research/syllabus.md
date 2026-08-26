# Operations Research — Syllabus

> Engineering · Tier 1 · ~16 lessons · Prereqs: [linalg-refresher](../linalg-refresher/syllabus.md), [convex-optimization](../convex-optimization/syllabus.md) · Roadmap id: `operations-research`

## Goal

Turn a messy real-world decision — how to route trucks, staff a call center, stock a warehouse, schedule a factory — into a crisp mathematical program, solve it, and read the answer back as a decision plus its price. You'll learn the simplex engine and, more importantly, how to *interrogate* a solved LP: which resources are binding, what each is worth at the margin, and how far the data can move before the answer changes. Then you branch out to the decisions LP can't express — indivisible yes/no choices, decisions that unfold in stages, and systems driven by randomness — through integer programming, dynamic programming, queueing, and inventory theory.

**Deliberately scoped, because this library already teaches the neighbours.** The *theory* of convex programs — polyhedra, Lagrangian duality, strong duality, KKT, interior-point methods — is [convex-optimization](../convex-optimization/syllabus.md), and the *algorithms and theorems* of network flow — max-flow/min-cut, Ford–Fulkerson, bipartite matching — are [graph-theory](../graph-theory/syllabus.md). This course cites both rather than re-deriving them, and spends its budget on what is distinctly operations research: the simplex method, economic interpretation and sensitivity, integer and dynamic programming, and stochastic models. Heavy metaheuristics and deep stochastic programming are out of scope; simulation and nonlinear programming get a taste.

## Dangerous Checklist

When you finish, you can:

- [ ] Formulate a verbal decision problem as a linear program in standard form, naming every decision variable, constraint, and objective term
- [ ] Connect the corners of a feasible polytope to basic feasible solutions, and say why an optimum always sits at one
- [ ] Run the simplex method by hand on a small LP, including two-phase initialization and an anti-cycling rule
- [ ] Write the dual of any LP and use complementary slackness to certify optimality without re-solving
- [ ] Read dual variables as shadow prices and compute the range over which a shadow price stays valid
- [ ] Recognize when an LP is guaranteed to have an integral optimum, and model transportation, assignment, and min-cost-flow problems
- [ ] Encode logical conditions (either/or, fixed charges, indicators) with binary variables
- [ ] Solve a small integer program by branch-and-bound and tighten a relaxation with a cutting plane
- [ ] Set up and solve a deterministic DP by backward recursion, and a stochastic DP as a Markov decision process
- [ ] Compute the steady-state performance of M/M/1 and M/M/c queues and apply Little's law to any stable system
- [ ] Explain why pooling servers beats splitting them, and quantify the difference
- [ ] Size an order quantity with EOQ and a stocking level with the newsvendor critical-ratio rule

## Modules

### Module 1: Linear Programming & the Simplex Method

From a word problem to a solved LP. The modeling step and the simplex engine are this module's real content; the convexity that makes it all work is imported from [convex-optimization](../convex-optimization/syllabus.md).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Formulating linear programs | Translate a resource-allocation story into objective + constraints in standard form | decision variables, linear objective, inequality/equality constraints, standard & slack form, common modeling patterns |
| 1.2 | Vertices, bases & the fundamental theorem | Connect polytope corners to basic feasible solutions and see why an optimum is always at one | extreme points, basic vs nonbasic variables, basis, fundamental theorem of LP, degeneracy previewed |
| 1.3 | The simplex method | Walk corner to corner, improving the objective each pivot | reduced costs, entering/leaving variables, ratio test, the simplex tableau, optimality condition |
| 1.4 | Initialization, degeneracy & cycling | Get a starting vertex when none is obvious, and avoid stalling forever | two-phase method, Big-M, artificial variables, degenerate pivots, Bland's rule, unboundedness detection |

**Boss problem 1:** Wyndor Glass wants to maximize profit $3x_1 + 5x_2$ (thousands of dollars) subject to $x_1 \le 4$, $2x_2 \le 12$, $3x_1 + 2x_2 \le 18$, $x_1,x_2 \ge 0$. Sketch the feasible polytope and list all its vertices. Then run simplex from the origin, showing each tableau, and report the optimal vertex, the objective value, which constraints are binding, and which variables are basic at the optimum. *(Answers to check against: vertices $(0,0), (4,0), (4,3), (2,6), (0,6)$; optimum at $(2,6)$ with $z = 36$; constraints 2 and 3 binding; $x_1, x_2$ and the slack of constraint 1 basic.)*

### Module 2: Duality, Sensitivity & Network Structure

The part of LP that earns its keep in practice: not the optimal vector, but the prices attached to it and how far you can trust them. Network models close the module as the family of LPs whose optima come out integral for free.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The LP dual & complementary slackness | Build the dual of any LP and certify a claimed optimum without re-solving | dual construction rules, weak & strong duality for LP, complementary slackness, dual of the dual |
| 2.2 | Shadow prices & sensitivity analysis | Price each resource at the margin and find how far the data can move | shadow price = dual variable, RHS ranging, objective-coefficient ranging, allowable increase/decrease, binding vs slack |
| 2.3 | Network models & integrality | Model transportation, assignment, and min-cost-flow problems and know when integrality is free | supply/demand balance, node-arc incidence, total unimodularity, integrality theorem, min-cost flow as the umbrella model |

**Boss problem 2:** Take the Wyndor LP from Module 1. (a) Write its dual and state what each dual variable prices. (b) Using complementary slackness at the known primal optimum $(2,6)$, solve for the dual variables without running simplex on the dual, and verify strong duality. (c) Compute the range of the third constraint's right-hand side (18) over which its shadow price stays valid, and say what happens to the optimal basis at each end of that range. *(Answers to check against: dual optimum $y = (0, 3/2, 1)$ with dual objective 36; the shadow price 1 on constraint 3 holds for RHS between 12 and 24.)*

### Module 3: Integer & Dynamic Programming

When decisions are indivisible or unfold in stages, LP alone breaks down. Integer programming models yes/no choices and branch-and-bound solves them; dynamic programming conquers staged decisions by recursion — deterministic first, then under uncertainty.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Modeling with integer variables | Encode logic and indivisibility with binary and integer variables | binary indicators, either/or & big-M logic, fixed-charge models, set covering, why rounding an LP fails |
| 3.2 | Branch-and-bound & cutting planes | Solve integer programs by tree search with LP bounds, and tighten the relaxation | LP relaxation, branching, pruning by bound/infeasibility/integrality, valid inequalities, Gomory cuts, branch-and-cut, integrality gap |
| 3.3 | Deterministic dynamic programming | Break a multistage problem into recursive stage decisions | stages & states, principle of optimality, backward recursion, value function, knapsack and shortest-path as DPs |
| 3.4 | Stochastic dynamic programming | Optimize sequential decisions under uncertainty | Markov decision process, transition probabilities, expected-cost recursion, value iteration, optimal policy |

**Boss problem 3:** A hiker's knapsack holds 50 units of capacity. Three items have values $(60, 100, 120)$ and weights $(10, 20, 30)$; each may be taken at most once. (a) Solve it by a 0–1 dynamic-programming table over remaining capacity, showing the value function at each stage. (b) Solve it again by branch-and-bound on the LP relaxation, showing the bound at each node and why each pruned node was pruned. (c) Confirm both give the same optimum, and state the integrality gap at the root. *(Answers to check against: optimum is items 2 and 3, value 220, weight 50; the root LP relaxation gives 240 by filling greedily in value-density order ($6, 5, 4$ per unit weight) — items 1 and 2 whole, then $\tfrac23$ of item 3 — so the integrality gap is 20.)*

### Module 4: Queueing & Inventory

Randomness in arrivals and service means we manage systems by their steady-state averages. Little's law ties them together; M/M/· queues give closed forms; inventory models turn the same probabilistic reasoning into order-quantity and stocking decisions.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Poisson arrivals & Little's law | Model random arrivals and relate throughput, population, and wait | Poisson process, exponential interarrivals, memorylessness, $L = \lambda W$, why Little's law needs almost no assumptions |
| 4.2 | The M/M/1 queue | Compute steady-state length, wait, and utilization for a single server | Kendall notation, birth–death chain, utilization $\rho$, $L, L_q, W, W_q$, the blow-up as $\rho \to 1$ |
| 4.3 | M/M/c, pooling & networks of queues | Size multi-server systems and chain queues together | Erlang-C, server pooling vs splitting, stability condition, Jackson networks |
| 4.4 | Inventory: EOQ & the newsvendor | Choose order quantities and one-shot stocking levels | economic order quantity, holding/ordering trade-off, robustness of EOQ, newsvendor critical ratio, underage vs overage cost |
| 4.5 | A taste of simulation & nonlinear programming | Estimate performance by Monte Carlo and recognize when a program goes nonlinear | discrete-event simulation, random-variate generation, replication & confidence, convex vs nonconvex programs, KKT link to [convex-optimization](../convex-optimization/syllabus.md) |

**Boss problem 4:** A repair shop receives jobs as a Poisson process at $\lambda = 15$/hour; each identical technician works at $\mu = 20$/hour. (a) With one technician (M/M/1), find $\rho$, $L$, $L_q$, $W$, and $W_q$. (b) Demand doubles to $\lambda = 30$/hour and management adds a second technician. Compare pooling them into one M/M/2 station against running two independent M/M/1 stations at $\lambda = 15$ each — give $W_q$ for both and explain *why* pooling wins. (c) The shop also stocks a part used at $D = 1200$/year, with ordering cost 50 dollars and holding cost 3 dollars/unit/year — compute the EOQ and the resulting annual cost, then show that ordering 20 percent above EOQ raises total cost by less than 2 percent. *(Answers to check against: (a) $\rho = 0.75$, $L = 3$, $L_q = 2.25$, $W = 0.2$ h, $W_q = 0.15$ h; (b) M/M/2 gives $W_q \approx 0.0643$ h versus 0.15 h for two separate M/M/1 stations; (c) EOQ = 200 units, annual cost 600 dollars, and the 20 percent overshoot costs about 1.7 percent extra.)*

## Sources of truth

- Hillier & Lieberman, *Introduction to Operations Research* — overall scope, notation, and the modeling voice.
- Bertsimas & Tsitsiklis, *Introduction to Linear Optimization* — rigor for LP geometry, simplex, and duality.
- Winston, *Operations Research: Applications and Algorithms* — network, integer, and dynamic programming worked-example conventions.
- Ross, *Introduction to Probability Models* — queueing and stochastic-model results.
