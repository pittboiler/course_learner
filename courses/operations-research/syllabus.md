# Operations Research — Syllabus

> Engineering · Tier 1 · ~20 lessons · Prereqs: [linalg-refresher](../linalg-refresher/syllabus.md), [convex-optimization](../convex-optimization/syllabus.md) · Roadmap id: `operations-research`

## Goal

Turn a messy real-world decision — how to route trucks, staff a call center, stock a warehouse, schedule a factory — into a crisp mathematical program, solve it, and read the answer back as a decision plus its price. You'll master linear programming end to end (formulation, the geometry that makes it work, the simplex engine, duality, and sensitivity), then branch out to networks, integer and dynamic programming, and the stochastic side: queues and inventory. We deliberately skip heavy metaheuristics and deep stochastic programming; simulation and nonlinear programming get a taste, with the convex machinery deferred to [convex-optimization](../convex-optimization/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Formulate a verbal decision problem as a linear program in standard form, naming every decision variable, constraint, and objective term
- [ ] Explain *why* an LP optimum sits at a vertex of the feasible polytope, and connect vertices to basic feasible solutions
- [ ] Run the simplex method by hand on a small LP, including two-phase initialization and an anti-cycling rule
- [ ] Write the dual of any LP and use weak/strong duality to certify optimality without re-solving
- [ ] Read dual variables as shadow prices and compute the range over which a shadow price stays valid (sensitivity analysis)
- [ ] Solve shortest-path and max-flow problems and state the max-flow / min-cut theorem
- [ ] Model transportation, assignment, and min-cost-flow problems and recognize when an LP is guaranteed integral
- [ ] Encode logical conditions (either/or, fixed charges, indicators) with binary variables
- [ ] Solve a small integer program by branch-and-bound and tighten it with a cutting plane
- [ ] Set up and solve a deterministic DP by backward recursion, and a stochastic DP as a Markov decision process
- [ ] Compute the steady-state performance of M/M/1 and M/M/c queues and apply Little's law to any stable system
- [ ] Size an order quantity with EOQ and a stocking level with the newsvendor critical-ratio rule

## Modules

### Module 1: Linear Programming & the Simplex Method

From a word problem to a solved LP: how to model it, why the geometry guarantees a corner optimum, and the mechanical engine that finds that corner.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Formulating Linear Programs | Translate a resource-allocation story into objective + constraints in standard form | decision variables, linear objective, inequality/equality constraints, standard & slack form |
| 1.2 | The Geometry of the Feasible Polytope | See the feasible set as a polytope and the objective as a sweeping hyperplane | half-spaces, polyhedra, convexity, level sets, bounded vs unbounded |
| 1.3 | Vertices & Basic Feasible Solutions | Connect corners of the polytope to algebraic basic feasible solutions | extreme points, basis, basic vs nonbasic variables, fundamental theorem of LP |
| 1.4 | The Simplex Method | Walk corner to corner, improving the objective each pivot | reduced costs, pivoting, entering/leaving variables, the simplex tableau |
| 1.5 | Initialization & Degeneracy | Get a starting vertex when none is obvious, and avoid cycling | two-phase / Big-M, artificial variables, degeneracy, Bland's rule |

**Boss problem 1:** Wyndor Glass wants to maximize profit $3x_1 + 5x_2$ (thousands of dollars) subject to $x_1 \le 4$, $2x_2 \le 12$, $3x_1 + 2x_2 \le 18$, $x_1,x_2 \ge 0$. Sketch the feasible polytope, list all its vertices, then run simplex from the origin and report the optimal vertex, the objective value, and which constraints are binding there.

### Module 2: Duality, Sensitivity & Network Optimization

Every LP has a shadow LP whose variables are prices; exploiting that gives optimality certificates, sensitivity ranges, and a whole family of network models that solve faster than general LPs.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | LP Duality | Build the dual of any LP and bound the primal with it | dual construction, weak duality, strong duality, dual of the dual |
| 2.2 | Complementary Slackness & Shadow Prices | Certify optimality and price each constraint economically | complementary slackness, shadow prices, marginal value of a resource |
| 2.3 | Sensitivity Analysis | Find how far data can move before the solution structure changes | RHS ranging, objective-coefficient ranging, allowable increase/decrease |
| 2.4 | Shortest Paths & Max-Flow / Min-Cut | Solve routing and throughput problems on graphs | Dijkstra/Bellman-Ford, flow networks, augmenting paths, max-flow = min-cut |
| 2.5 | Transportation, Assignment & Min-Cost Flow | Recognize and solve the integral network LPs | supply/demand balance, total unimodularity, Hungarian intuition, min-cost flow |

**Boss problem 2:** Take the Wyndor LP from Module 1. Write its dual, solve the dual using complementary slackness at the known primal optimum, and verify strong duality holds. Interpret each dual variable as a shadow price, then compute the range of the third resource's right-hand side ($18$) over which its shadow price stays valid.

### Module 3: Integer & Dynamic Programming

When decisions are indivisible or unfold in stages, LP alone breaks down. Integer programming models the yes/no choices; branch-and-bound and cuts solve them; dynamic programming conquers staged decisions by recursion — deterministic first, then under uncertainty.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Modeling with Integer Variables | Encode logic and indivisibility with binary and integer variables | binary indicators, either/or & big-M logic, fixed-charge & set-covering models |
| 3.2 | Branch-and-Bound | Solve integer programs by systematic tree search with LP bounds | LP relaxation, branching, pruning by bound/infeasibility/integrality |
| 3.3 | Cutting Planes (a taste) | Tighten a relaxation by adding valid inequalities | valid inequalities, Gomory cuts, integrality gap, branch-and-cut idea |
| 3.4 | Deterministic Dynamic Programming | Break a multistage problem into recursive stage decisions | stages/states, principle of optimality, backward recursion, value function |
| 3.5 | Stochastic Dynamic Programming | Optimize sequential decisions under uncertainty | Markov decision process, expected-cost recursion, value iteration, policy |

**Boss problem 3:** A hiker's knapsack holds $50$ units. Three items have values $(60, 100, 120)$ and weights $(10, 20, 30)$; each may be taken at most once. Find the maximum-value packing two ways — by a $0$–$1$ dynamic-programming table over remaining capacity, and by branch-and-bound on the LP relaxation — and confirm both give the same optimum and value.

### Module 4: Queueing & Stochastic Models

Randomness in arrivals and service means we manage systems by their steady-state averages. Little's law ties them together; M/M/· queues give closed forms; inventory models turn the same probabilistic reasoning into order-quantity and stocking decisions. We close with a taste of simulation and nonlinear programming.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Poisson Arrivals & Little's Law | Model random arrivals and relate throughput, inventory, and wait | Poisson process, exponential interarrivals, memorylessness, $L = \lambda W$ |
| 4.2 | The M/M/1 Queue | Compute steady-state length, wait, and utilization for a single server | birth-death chain, utilization $\rho$, steady-state $L, L_q, W, W_q$ |
| 4.3 | M/M/c & Networks of Queues | Size multi-server systems and chain queues together | Erlang-C, server pooling, Jackson networks, stability |
| 4.4 | Inventory Models: EOQ & the Newsvendor | Choose order quantities and one-shot stocking levels | economic order quantity, holding/ordering trade-off, newsvendor critical ratio |
| 4.5 | A Taste of Simulation & Nonlinear Programming | Estimate performance by Monte Carlo and recognize when a program goes nonlinear | discrete-event simulation, random-variate generation, convex vs nonconvex programs, KKT link to [convex-optimization](../convex-optimization/syllabus.md) |

**Boss problem 4:** A repair shop receives jobs as a Poisson process at $\lambda = 15$/hour; each of its identical technicians works at $\mu = 20$/hour. (a) With one technician (M/M/1), find $\rho$, $L$, $W$, and $W_q$. (b) Demand doubles to $\lambda = 30$/hour and management adds a second technician. Compare pooling them into one M/M/2 station versus running two independent M/M/1 stations, and say which gives shorter average wait and why. (c) The shop also stocks a part used $D = 1200$/year, ordering cost $50$ dollars, holding cost $3$ dollars/unit/year — compute its EOQ.

## Sources of truth

- Hillier & Lieberman, *Introduction to Operations Research* — overall scope, notation, and the modeling voice.
- Bertsimas & Tsitsiklis, *Introduction to Linear Optimization* — rigor for LP geometry, simplex, and duality.
- Winston, *Operations Research: Applications and Algorithms* — network, integer, and dynamic programming worked-example conventions.
- Ross, *Introduction to Probability Models* — queueing and stochastic-model results.
