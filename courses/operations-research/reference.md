# Operations Research · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Operations research is four toolkits: linear programming and its prices, integer
programming for indivisible choices, dynamic programming for staged ones, and
stochastic models for systems driven by randomness. This card holds the
formulation idioms, the simplex and duality mechanics, the sensitivity rules, the
branch-and-bound and DP recursions, and the queueing and inventory formulas —
plus the unit traps and marginal-versus-total confusions that cause most real
errors.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $x$, $c$, $A$, $b$ | decision vector, objective coefficients, constraint matrix, right-hand side | [1.1](lessons/01-01-formulating-linear-programs.md) |
| standard form | maximize $c^Tx$ subject to $Ax \le b$, $x \ge 0$ | [1.1](lessons/01-01-formulating-linear-programs.md) |
| $s_i$ | slack variable — **unused capacity** of constraint $i$, not a bookkeeping fiction | [1.1](lessons/01-01-formulating-linear-programs.md) |
| $m$, $n$ | number of constraints and of variables (slacks included) in slack form | [1.2](lessons/01-02-vertices-bases-fundamental-theorem.md) |
| basic / nonbasic | the $m$ variables solved for / the $n-m$ set to zero | [1.2](lessons/01-02-vertices-bases-fundamental-theorem.md) |
| BFS | basic **feasible** solution — a basic solution with $x \ge 0$ | [1.2](lessons/01-02-vertices-bases-fundamental-theorem.md) |
| $B$ | the basis matrix (the $m$ chosen columns); must be invertible | [1.2](lessons/01-02-vertices-bases-fundamental-theorem.md) |
| $x^*$, $z^*$ | optimal solution and optimal value | [1.2](lessons/01-02-vertices-bases-fundamental-theorem.md) |
| $\bar{c}_j$ | reduced cost of variable $j$ | [1.3](lessons/01-03-the-simplex-method.md) |
| $z$ row | the tableau's objective row. **This course stores $-\bar{c}_j$**, so a *negative* entry is favourable and "all $\ge 0$" means optimal | [1.3](lessons/01-03-the-simplex-method.md) |
| $a_i$ | artificial variable (Phase I only) | [1.4](lessons/01-04-initialization-degeneracy-cycling.md) |
| $y$ | dual variables — one per primal constraint; the **prices** | [2.1](lessons/02-01-lp-dual-complementary-slackness.md) |
| shadow price | $\partial z^*/\partial b_i$ — equals $y_i^*$ | [2.2](lessons/02-02-shadow-prices-sensitivity.md) |
| allowable increase/decrease | how far $b_i$ (or $c_j$) can move before the basis changes | [2.2](lessons/02-02-shadow-prices-sensitivity.md) |
| TU | totally unimodular — every square submatrix has determinant $0, \pm1$ | [2.3](lessons/02-03-network-models-integrality.md) |
| $\delta$ | a binary decision variable, $\delta \in \{0,1\}$ | [3.1](lessons/03-01-modeling-with-integer-variables.md) |
| $M$ | the "big-M" constant in either/or and fixed-charge models | [3.1](lessons/03-01-modeling-with-integer-variables.md) |
| incumbent | best integer solution found so far — a **lower** bound for a max problem | [3.2](lessons/03-02-branch-and-bound-cutting-planes.md) |
| integrality gap | LP relaxation value minus integer optimum | [3.2](lessons/03-02-branch-and-bound-cutting-planes.md) |
| $n$, $s$, $x_n$ | DP stage, state, and decision | [3.3](lessons/03-03-deterministic-dynamic-programming.md) |
| $f_n(s)$ | value function — the best total achievable from stage $n$ onward in state $s$ | [3.3](lessons/03-03-deterministic-dynamic-programming.md) |
| $a$, $p(s'\mid s,a)$ | MDP action and transition probability | [3.4](lessons/03-04-stochastic-dynamic-programming.md) |
| $\gamma$, $V(s)$ | discount factor and MDP value function | [3.4](lessons/03-04-stochastic-dynamic-programming.md) |
| $\lambda$, $\mu$ | arrival rate and per-server service rate (same time unit!) | [4.1](lessons/04-01-poisson-arrivals-littles-law.md) |
| $L$, $W$ | average number **in the system** and average time in the system | [4.1](lessons/04-01-poisson-arrivals-littles-law.md) |
| $L_q$, $W_q$ | average number **waiting** and average waiting time (service excluded) | [4.1](lessons/04-01-poisson-arrivals-littles-law.md) |
| $A/S/c$ | Kendall notation; $M$ = Markovian (Poisson arrivals / exponential service) | [4.1](lessons/04-01-poisson-arrivals-littles-law.md) |
| $\rho$ | utilization. **$\lambda/\mu$ for one server, $\lambda/(c\mu)$ for $c$ servers** | [4.2](lessons/04-02-the-mm1-queue.md) |
| $a = \lambda/\mu$ | **offered load** in erlangs — may exceed 1; not the same as $\rho$ | [4.3](lessons/04-03-mmc-pooling-networks.md) |
| $D$, $S$, $H$, $Q$ | demand rate, ordering cost, holding cost per unit per period, order quantity | [4.4](lessons/04-04-inventory-eoq-newsvendor.md) |
| $c_u$, $c_o$ | underage cost (lost **margin**) and overage cost (cost minus salvage) | [4.4](lessons/04-04-inventory-eoq-newsvendor.md) |

**Two collisions to keep straight.** $n$ is the variable count in Module 1 and the
DP **stage index** in Module 3. And $a$ is an artificial variable in
[1.4](lessons/01-04-initialization-degeneracy-cycling.md), an MDP **action** in
[3.4](lessons/03-04-stochastic-dynamic-programming.md), and the **offered load** in
[4.3](lessons/04-03-mmc-pooling-networks.md).

## Definitions

### Decision variable

Something you **choose**, not merely something that appears in the story. "Hours
used in plant 3" is determined once the production levels are set — that is an
output. Always write the units beside the definition.

*Introduced:* [1.1](lessons/01-01-formulating-linear-programs.md)

### Basic feasible solution

Pick $m$ variables to be basic, set the other $n-m$ to zero, solve the $m \times m$
system. If the result satisfies $x \ge 0$ it is a **BFS**. The correspondence that
drives everything: **BFS ⟺ vertex** of the feasible polytope.

*Introduced:* [1.2](lessons/01-02-vertices-bases-fundamental-theorem.md)

### Fundamental theorem of LP

If a feasible solution exists, a basic feasible one exists; if an optimal solution
exists, an optimal **basic** feasible one exists. This collapses an infinite search
to a finite one — the licence for simplex.

*Introduced:* [1.2](lessons/01-02-vertices-bases-fundamental-theorem.md)

### Degeneracy

A BFS with a **basic** variable equal to zero — geometrically, more constraints
tight at a vertex than the dimension requires. Makes vertex↔basis many-to-one,
allows pivots that improve nothing, and makes shadow prices ambiguous.

*Introduced:* [1.2](lessons/01-02-vertices-bases-fundamental-theorem.md), developed in [1.4](lessons/01-04-initialization-degeneracy-cycling.md)

### Reduced cost

The rate at which the objective improves per unit increase of a nonbasic variable.
All reduced costs unfavourable ⟺ optimal.

*Introduced:* [1.3](lessons/01-03-the-simplex-method.md)

### Two-phase method

Add artificial variables for an obvious starting basis, then **minimize their
sum**. A minimum of zero gives a genuine BFS to start Phase II; a strictly
positive minimum **proves the LP infeasible**.

*Introduced:* [1.4](lessons/01-04-initialization-degeneracy-cycling.md)

### The LP dual

Transpose the problem and constraints become prices. For max $c^Tx$ s.t.
$Ax \le b$, $x \ge 0$, the dual is min $b^Ty$ s.t. $A^Ty \ge c$, $y \ge 0$. For LP
strong duality is **unconditional** whenever either problem is feasible — no
constraint qualification needed, because affine constraints are exempt from
Slater.

*Introduced:* [2.1](lessons/02-01-lp-dual-complementary-slackness.md)

### Complementary slackness

$$y_i\,(b_i - (Ax)_i) = 0, \qquad x_j\,((A^Ty)_j - c_j) = 0$$

*In words: a resource with slack left over is worth nothing, and a product made in
positive quantity has its dual constraint tight.* Lets you solve for $y$ from a
claimed $x$ without a second simplex run.

*Introduced:* [2.1](lessons/02-01-lp-dual-complementary-slackness.md)

### Shadow price

The marginal worth of one more unit of a resource: $y_i^* = \partial z^*/\partial b_i$.
It is a **local slope**, valid only while the optimal basis stays optimal — so a
price is only actionable together with its range.

*Introduced:* [2.2](lessons/02-02-shadow-prices-sensitivity.md)

### Total unimodularity

A matrix is TU if every square submatrix has determinant $0$, $+1$, or $-1$. **If
$A$ is TU and $b$ is integral, every BFS is integral** — by Cramer's rule, since
$\det B = \pm1$. The node–arc incidence matrix of a digraph is TU, which is why
network LPs never need branch-and-bound.

*Introduced:* [2.3](lessons/02-03-network-models-integrality.md)

### Big-M

The constant that switches a constraint off in either/or and fixed-charge models.
Must be **large enough** not to bind when off, and **as small as possible**,
because a loose $M$ weakens the LP relaxation and explodes the search tree.

*Introduced:* [3.1](lessons/03-01-modeling-with-integer-variables.md)

### LP relaxation

Drop the integrality requirements. Gives an **optimistic** bound — an upper bound
for a maximization — which is exactly what branch-and-bound prunes with.

*Introduced:* [3.2](lessons/03-02-branch-and-bound-cutting-planes.md)

### Valid inequality (cut)

A constraint satisfied by every **integer** feasible point but violated by the
current fractional LP solution. Adding it tightens the relaxation without losing
any integer solution.

*Introduced:* [3.2](lessons/03-02-branch-and-bound-cutting-planes.md)

### State (dynamic programming)

Everything you need to know at a stage to make all remaining decisions optimally —
the sufficient summary of the past. Choosing it *is* the modeling work; DP is a
technique, not an algorithm.

*Introduced:* [3.3](lessons/03-03-deterministic-dynamic-programming.md)

### Principle of optimality

Whatever the first decision, the remaining decisions must be optimal for the state
it leaves you in. Hence the backward recursion.

*Introduced:* [3.3](lessons/03-03-deterministic-dynamic-programming.md)

### Markov decision process

States, actions, transition probabilities, rewards, and a discount factor, where
the next state depends only on the current state and action. The solution is a
**policy** — a rule for every state — not a sequence of actions.

*Introduced:* [3.4](lessons/03-04-stochastic-dynamic-programming.md)

### Little's law

$$\boxed{L = \lambda W}$$

Average number in the system = arrival rate × average time in it. Requires almost
**no assumptions** — any arrival process, any service distribution, any discipline,
any number of servers — only long-run stability.

*Introduced:* [4.1](lessons/04-01-poisson-arrivals-littles-law.md)

### Memorylessness

$P(T > s+t \mid T > s) = P(T > t)$ — how long you have already waited tells you
nothing about how much longer you will. The exponential is the only continuous
distribution with this property, which is why it is everywhere in queueing.

*Introduced:* [4.1](lessons/04-01-poisson-arrivals-littles-law.md)

### Pooling

One queue feeding $c$ servers beats $c$ queues feeding one server each, at
identical utilization, because a shared queue never lets a server idle while
someone waits. Pooling variability reduces its effect.

*Introduced:* [4.3](lessons/04-03-mmc-pooling-networks.md)

### Critical ratio

The newsvendor's stocking rule: order up to the quantile where
$P(D \le Q^*) = c_u/(c_u+c_o)$. A **probability**, read off the demand CDF's
horizontal axis.

*Introduced:* [4.4](lessons/04-04-inventory-eoq-newsvendor.md)

## Formulas and rules

### Formulating an LP

| Task | Rule |
|---|---|
| Minimize → maximize | negate the objective |
| $\ge$ → $\le$ | negate both sides |
| Equality | keep in slack form, or split into two inequalities |
| Free variable $x$ | replace with $x^+ - x^-$, both $\ge 0$ |
| Add slack | $Ax \le b$ becomes $Ax + s = b$, $s \ge 0$ |
| Ratio constraint | "at least 30 percent A" is $x_A \ge 0.3\sum x_i$ — **rearrange** to $0.7x_A - 0.3x_B - 0.3x_C \ge 0$ |

**Modeling patterns:** blending/diet, product mix, shift covering (one worker
covers several hours → overlapping constraints), and **multi-period inventory
balance** $I_t = I_{t-1} + x_t - d_t$ — the most reused idiom in OR.

*From* [1.1](lessons/01-01-formulating-linear-programs.md)

### Simplex

| Step | Rule |
|---|---|
| Optimality test | all $z$-row entries $\ge 0$ ⟹ optimal |
| Entering variable | a column with a **negative** $z$-row entry (Dantzig: most negative) |
| Ratio test | $\min_i b_i/a_{ij}$ over rows with $a_{ij} > 0$ only |
| Unbounded | no positive entry in the entering column |
| Pivot | Gauss–Jordan to make the entering column a unit vector — **including the $z$ row** |
| Bases | at most $\binom{n}{m}$, and fewer, since some column sets are singular |

**Termination:** each nondegenerate pivot strictly improves, and bases are finite.
**Complexity:** exponential worst case (Klee–Minty), fast in practice; interior-point
methods are polynomial.

*From* [1.2](lessons/01-02-vertices-bases-fundamental-theorem.md), [1.3](lessons/01-03-the-simplex-method.md)

### Initialization and anti-cycling

| Situation | Fix |
|---|---|
| Origin infeasible | two-phase (minimize $\sum a_i$), or Big-M |
| Phase I optimum $> 0$ | the LP is **infeasible** — a proof, not a guess |
| Phase I optimum $= 0$ | delete the artificial columns, run Phase II |
| Degenerate stalling | Bland's rule (smallest index in, smallest index out) — provably prevents cycling, but slow, so codes use it only as an escape hatch |
| Unbounded | usually a **missing constraint** in the model, not a real opportunity |

*From* [1.4](lessons/01-04-initialization-degeneracy-cycling.md)

### Dual construction

| Primal (max) | Dual (min) |
|---|---|
| $m$ constraints | $m$ variables |
| $n$ variables | $n$ constraints |
| $\le$ constraint | $y_i \ge 0$ |
| $=$ constraint | $y_i$ **free** |
| $\ge$ constraint | $y_i \le 0$ |
| $x_j \ge 0$ | $\ge$ constraint |
| $x_j$ free | $=$ constraint |

**Weak duality:** $c^Tx \le b^Ty$ for any feasible pair — so any feasible dual is an
upper bound, and a matching pair certifies optimality. Dual of the dual is the
primal. The final simplex tableau's slack reduced costs **are** the dual solution.

*From* [2.1](lessons/02-01-lp-dual-complementary-slackness.md)

### Sensitivity

| Quantity | Rule |
|---|---|
| Shadow price | $y_i^*$; **zero for any non-binding constraint** |
| RHS ranging | vary $b_i$ keeping $x_B = B^{-1}b \ge 0$; the endpoints are where a basic variable hits zero |
| Objective ranging | vary $c_j$ keeping every reduced cost's sign |
| Inside the RHS range | $x^*$ moves, $y^*$ does not |
| Inside the $c_j$ range | $y^*$ moves, **$x^*$ does not** — only $z^*$ changes |
| $z^*(b_i)$ | piecewise-linear and **concave**; the shadow price is its (decreasing) slope |

Worked reference (Wyndor): $y^* = (0, 3/2, 1)$, and the shadow price $y_3 = 1$ holds
for $12 \le b_3 \le 24$.

*From* [2.2](lessons/02-02-shadow-prices-sensitivity.md)

### Network models

| Model | Structure |
|---|---|
| Transportation | supplies $s_i$, demands $d_j$, cost $c_{ij}$; needs $\sum s_i = \sum d_j$ (use a dummy otherwise) |
| Assignment | transportation with all supplies and demands 1; LP gives 0/1 free |
| Shortest path | min-cost flow with one unit of supply and demand |
| Max flow | min-cost flow with all costs zero |
| **Min-cost flow** | the umbrella: minimize cost s.t. flow conservation and arc capacities |

**Integrality theorem:** $A$ TU and $b$ integral ⟹ every BFS integral. The node–arc
incidence matrix is TU. **Sufficient, not necessary** — and one side constraint
usually destroys it.

*From* [2.3](lessons/02-03-network-models-integrality.md)

### Integer modeling idioms

| Logic | Constraint |
|---|---|
| At most one / exactly one | $\sum_j \delta_j \le 1$ / $= 1$ |
| If A then B | $\delta_A \le \delta_B$ |
| Either/or | $g_1 \le b_1 + M\delta$ and $g_2 \le b_2 + M(1-\delta)$ |
| Fixed charge | $x \le M\delta$, with the setup cost on $\delta$ |
| Covering / packing / partitioning | $\sum_{j\in S_i}\delta_j \ge 1$ / $\le 1$ / $= 1$ |
| Semi-continuous | $L\delta \le x \le U\delta$ |

**Rounding an LP is not a fix** — it can be infeasible in every direction, and the
true integer optimum can sit nowhere near it.

*From* [3.1](lessons/03-01-modeling-with-integer-variables.md)

### Branch-and-bound

| Step | Rule |
|---|---|
| Bound | solve the LP relaxation — an **upper** bound for a max problem |
| Branch | on fractional $x_j = f$: $x_j \le \lfloor f\rfloor$ and $x_j \ge \lceil f\rceil$ (excludes no integer point) |
| Prune by bound | node LP $\le$ incumbent |
| Prune by infeasibility | node LP has no feasible point |
| Prune by integrality | node LP solution is integral — update the incumbent |
| Optimality gap | best remaining bound minus incumbent; lets solvers stop early |

**Cuts:** add valid inequalities to raise the bound; Gomory cuts come from the
tableau; **branch-and-cut** generates them at tree nodes and is what solvers do.
Formulation quality (a tight $M$) beats algorithmic tuning.

*From* [3.2](lessons/03-02-branch-and-bound-cutting-planes.md)

### Dynamic programming

$$f_n(s) = \max_{x}\big\{r(s,x) + f_{n+1}(s')\big\}$$

| Step | Rule |
|---|---|
| Procedure | tabulate backwards from the final stage, where the answer is trivial |
| Recover the plan | **trace forward** through the argmaxes — the tables give only the value |
| Knapsack recursion | $f_i(c) = \max\{f_{i+1}(c),\ v_i + f_{i+1}(c-w_i)\}$ when $w_i \le c$ |
| Cost | (number of states) × (decisions per state) |
| Curse of dimensionality | a multi-dimensional state multiplies the table size |

**Stochastic version (MDP):**

$$V_n(s) = \max_a\Big\{r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)\,V_{n+1}(s')\Big\}$$

Infinite horizon gives the Bellman **equation** (a fixed point), solved by **value
iteration** — a contraction with modulus $\gamma$, so error shrinks geometrically.
Effective horizon $\approx 1/(1-\gamma)$. The answer is a **policy**.

*From* [3.3](lessons/03-03-deterministic-dynamic-programming.md), [3.4](lessons/03-04-stochastic-dynamic-programming.md)

### Queueing

| Quantity | Relation |
|---|---|
| Little's law | $L = \lambda W$, and $L_q = \lambda W_q$ |
| System vs queue | $W = W_q + 1/\mu$, so $L = L_q + \lambda/\mu$ |
| Stability | $\rho < 1$ |

**M/M/1** ($\rho = \lambda/\mu$): $p_n = (1-\rho)\rho^n$ (geometric),

$$L = \frac{\rho}{1-\rho}, \quad L_q = \frac{\rho^2}{1-\rho}, \quad W = \frac{1}{\mu-\lambda}, \quad W_q = \frac{\rho}{\mu-\lambda}$$

| $\rho$ | 0.5 | 0.8 | 0.9 | 0.95 | 0.99 |
|---|---|---|---|---|---|
| $L$ | 1 | 4 | 9 | 19 | 99 |

**M/M/c** ($a = \lambda/\mu$, $\rho = \lambda/(c\mu)$):

$$P_0 = \left[\sum_{n=0}^{c-1}\frac{a^n}{n!} + \frac{a^c}{c!(1-\rho)}\right]^{-1}, \qquad L_q = P_0\frac{a^c\rho}{c!(1-\rho)^2}$$

Erlang-C is the probability an arrival waits. Square-root staffing:
$c \approx a + \beta\sqrt{a}$ — safety capacity grows like $\sqrt{\text{load}}$.

**Jackson networks:** traffic equations $\lambda_j = r_j + \sum_i \lambda_i p_{ij}$;
each node then behaves as an independent M/M/c in steady state (product form). The
highest-$\rho$ node is the bottleneck.

*From* [4.1](lessons/04-01-poisson-arrivals-littles-law.md), [4.2](lessons/04-02-the-mm1-queue.md), [4.3](lessons/04-03-mmc-pooling-networks.md)

### Inventory

**EOQ.** Total annual cost $= \dfrac{D}{Q}S + \dfrac{Q}{2}H$, minimized at

$$\boxed{Q^* = \sqrt{\frac{2DS}{H}}}, \qquad \text{cost} = \sqrt{2DSH}$$

At $Q^*$ the two cost components are **equal** — a free check on any answer. The
cost curve is very **flat**: 20 percent above $Q^*$ costs about 1.7 percent extra,
so rounding to a convenient order size is nearly free. Reorder point =
$D_{\text{daily}} \times$ lead time, plus safety stock.

**Newsvendor.** Order up to the critical-ratio quantile:

$$P(D \le Q^*) = \frac{c_u}{c_u + c_o}$$

Derived by the marginal argument: one more unit helps with probability $1-F(Q)$ and
hurts with probability $F(Q)$. High ratio ⟹ stock above mean demand.

*From* [4.4](lessons/04-04-inventory-eoq-newsvendor.md)

### Simulation and nonlinear programming

| Item | Rule |
|---|---|
| Discrete-event simulation | keep an event list, jump to the next event, update state, schedule consequences |
| Inverse transform | $F^{-1}(U)$ has distribution $F$; exponential: $X = -\ln(U)/\lambda$ |
| Output is random | replicate, discard the warm-up transient, report a **confidence interval** |
| Cost of precision | error $\propto 1/\sqrt{n}$, so halving the interval takes **4×** the runs |
| Validation | reproduce a case with a known analytic answer (M/M/1) first |
| Convex | local optimum is global; reliable algorithms exist |
| Nonconvex | a zero gradient means only *stationary* — could be a local min or a saddle |
| KKT | generalizes complementary slackness to nonlinear problems, same shadow-price reading |

*From* [4.5](lessons/04-05-simulation-nonlinear-taste.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Convex sets, polyhedra as intersections of half-spaces, separating hyperplanes | [convex-optimization 1.1](../convex-optimization/lessons/01-01-convex-sets-separating-hyperplane.md), [1.2](../convex-optimization/lessons/01-02-convex-set-zoo-operations.md) |
| Why a local optimum of a convex problem is global | [convex-optimization 2.1](../convex-optimization/lessons/02-01-convex-problem-local-global.md) |
| Recognizing convexity | [convex-optimization 1.4](../convex-optimization/lessons/01-04-recognizing-convexity.md) |
| LPs and QPs as convex programs | [convex-optimization 2.2](../convex-optimization/lessons/02-02-linear-quadratic-programs.md) |
| Lagrangian duality, the dual function, strong duality and Slater | [convex-optimization 3.1](../convex-optimization/lessons/03-01-lagrangian-dual-function.md), [3.2](../convex-optimization/lessons/03-02-strong-duality-slater.md) |
| KKT conditions and the geometry of duality | [convex-optimization 3.3](../convex-optimization/lessons/03-03-kkt-conditions.md), [3.4](../convex-optimization/lessons/03-04-geometry-of-duality.md) |
| Interior-point methods | [convex-optimization 4.3](../convex-optimization/lessons/04-03-barrier-interior-point.md) |
| Max-flow / min-cut and Ford–Fulkerson augmenting paths | [graph-theory 4.1](../graph-theory/lessons/04-01-flow-networks-maxflow-mincut.md), [4.2](../graph-theory/lessons/04-02-augmenting-paths-ford-fulkerson.md) |
| Menger's theorem and the flow–matching connection | [graph-theory 4.3](../graph-theory/lessons/04-03-menger-flows-matching.md) |
| Bipartite matching, Hall's theorem, König's theorem | [graph-theory 2.3](../graph-theory/lessons/02-03-bipartite-matching-hall.md), [2.4](../graph-theory/lessons/02-04-konig-covers.md) |
| Walks, paths, connectivity; spanning trees | [graph-theory 1.3](../graph-theory/lessons/01-03-walks-paths-connectivity.md), [2.2](../graph-theory/lessons/02-02-spanning-trees-mst.md) |
| Bases, rank, and solving linear systems | [linalg-refresher 1.2](../linalg-refresher/lessons/01-02-linear-independence-basis-dimension.md), [1.3](../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md) |
| Matrix inverses and the four subspaces | [linalg-refresher 2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) |
| Determinants (behind the Cramer's-rule TU argument) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| The Poisson and exponential distributions | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md), [2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Expectation, variance, and moments | [prob-stat-refresher 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| Conditional probability | [prob-stat-refresher 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) |
| Law of large numbers and the CLT (behind simulation error) | [prob-stat-refresher 3.2](../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md), [3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) |
| Confidence intervals | [prob-stat-refresher 4.2](../prob-stat-refresher/lessons/04-02-confidence-intervals.md) |
| Floating-point cancellation (behind the Big-M warning) | [numerical-analysis 1.2](../numerical-analysis/lessons/01-02-cancellation-error-propagation.md) |

## Pitfalls

### Formulating

- A decision variable is something you **choose** — "hours used" is an output, not a decision. *([1.1](lessons/01-01-formulating-linear-programs.md))*
- "At least 30 percent A" is not $x_A \ge 0.3$ — percentages are *of something*, so write the total out and rearrange. *([1.1](lessons/01-01-formulating-linear-programs.md))*
- A fractional answer is only a bug when the **unit** is indivisible. *([1.1](lessons/01-01-formulating-linear-programs.md))*
- Write units beside every variable — rates and totals are easy to mix. *([1.1](lessons/01-01-formulating-linear-programs.md))*

### Vertices, bases, and simplex

- Not every $m$-subset gives a corner: the columns can be **dependent** (no solution at all) or the solution can be negative (infeasible). *([1.2](lessons/01-02-vertices-bases-fundamental-theorem.md))*
- "Nonbasic ⟹ zero" is guaranteed; "basic ⟹ nonzero" is **not** — a basic variable at zero is degeneracy. *([1.2](lessons/01-02-vertices-bases-fundamental-theorem.md))*
- The number of basic variables is $m$, the constraint count — slacks compete for those slots equally. *([1.2](lessons/01-02-vertices-bases-fundamental-theorem.md))*
- "Optimum at a vertex" does not mean unique — the optimal set *includes* a vertex. *([1.2](lessons/01-02-vertices-bases-fundamental-theorem.md))*
- Under this course's convention a **negative** $z$-row entry is favourable. Flip conventions and every sign flips. *([1.3](lessons/01-03-the-simplex-method.md))*
- The ratio test uses **strictly positive** entries only. *([1.3](lessons/01-03-the-simplex-method.md))*
- Pivot the $z$ row too — skip it once and every later optimality test is wrong. *([1.3](lessons/01-03-the-simplex-method.md))*
- A positive Phase I optimum means **infeasible**, not unbounded — and only once you've actually reached the Phase I optimum. *([1.4](lessons/01-04-initialization-degeneracy-cycling.md))*
- Never let an artificial variable back into the basis in Phase II — delete the columns. *([1.4](lessons/01-04-initialization-degeneracy-cycling.md))*

### Duality and sensitivity

- Complementary slackness guarantees only one direction: **slack ⟹ price zero**. Tight does *not* imply a positive price. *([2.1](lessons/02-01-lp-dual-complementary-slackness.md), [2.2](lessons/02-02-shadow-prices-sensitivity.md))*
- Don't force $y_i \ge 0$ out of habit — a $\ge$ row gives a nonpositive dual variable and an equality gives a free one. *([2.1](lessons/02-01-lp-dual-complementary-slackness.md))*
- A matching objective value certifies nothing unless **both** points are feasible. *([2.1](lessons/02-01-lp-dual-complementary-slackness.md))*
- **Never multiply a shadow price by a large quantity.** Marginal rate, marginal quantity — past the range you must re-solve. *([2.2](lessons/02-02-shadow-prices-sensitivity.md))*
- At a degenerate optimum the shadow price is genuinely ambiguous (left and right derivatives differ) and solvers don't warn you. *([2.2](lessons/02-02-shadow-prices-sensitivity.md))*
- The two rangings behave oppositely: inside a RHS range $x^*$ moves and $y^*$ doesn't; inside a $c_j$ range $y^*$ moves and $x^*$ doesn't. *([2.2](lessons/02-02-shadow-prices-sensitivity.md))*
- Ranges are **one-at-a-time** — change two right-hand sides together and the printed ranges no longer guarantee anything. *([2.2](lessons/02-02-shadow-prices-sensitivity.md))*

### Networks and integrality

- Integer *data* does not give an integer optimum — the **matrix** must be TU. *([2.3](lessons/02-03-network-models-integrality.md))*
- One "harmless" side constraint (a budget, a cardinality cap) destroys TU and turns the problem into a genuine IP. *([2.3](lessons/02-03-network-models-integrality.md))*
- Don't declare $x_{ij} \in \{0,1\}$ on an assignment problem — it's unnecessary and can trigger a needless branch-and-bound search. *([2.3](lessons/02-03-network-models-integrality.md))*
- Check balance ($\sum s_i = \sum d_j$) and insert the dummy **before** solving. *([2.3](lessons/02-03-network-models-integrality.md))*

### Integer programming

- Rounding can be infeasible in every direction, and the true optimum can be nowhere near the rounded point. *([3.1](lessons/03-01-modeling-with-integer-variables.md))*
- A bigger $M$ is not the safe choice — too small deletes valid solutions silently, too large wrecks the relaxation. *([3.1](lessons/03-01-modeling-with-integer-variables.md))*
- $x \le M\delta$ forces $x=0$ when $\delta=0$, but nothing stops $\delta=1$ with $x=0$. *([3.1](lessons/03-01-modeling-with-integer-variables.md))*
- The node LP value is an **upper** bound (optimistic) and the incumbent is the lower one — not the other way round. *([3.2](lessons/03-02-branch-and-bound-cutting-planes.md))*
- "Pruned by bound" means nothing **better** is there — the subtree may hold perfectly good solutions. *([3.2](lessons/03-02-branch-and-bound-cutting-planes.md))*
- A cut is deliberately redundant for the IP and non-redundant for its relaxation. *([3.2](lessons/03-02-branch-and-bound-cutting-planes.md))*

### Dynamic programming

- DP is a **modeling technique**, not an algorithm — the art is choosing the state. *([3.3](lessons/03-03-deterministic-dynamic-programming.md))*
- The value table is the *value*; the plan lives in the argmaxes and needs a forward trace. *([3.3](lessons/03-03-deterministic-dynamic-programming.md))*
- If the remaining cost depends on something the state doesn't record, the recursion is **wrong**, not merely slow. *([3.3](lessons/03-03-deterministic-dynamic-programming.md))*
- Under uncertainty the answer is a **policy**, not a sequence of actions. *([3.4](lessons/03-04-stochastic-dynamic-programming.md))*
- The optimal action in a state generally **differs by stage** in a finite horizon. *([3.4](lessons/03-04-stochastic-dynamic-programming.md))*
- $\gamma = 1$ on an infinite horizon breaks the contraction and value iteration need not converge. *([3.4](lessons/03-04-stochastic-dynamic-programming.md))*
- Take the expectation over successor **values**, not successor one-step rewards. *([3.4](lessons/03-04-stochastic-dynamic-programming.md))*

### Queueing and inventory

- **Mixing time units is the most common error in Module 4** — $\lambda$, $\mu$, and $W$ must share a clock before you combine them. *([4.1](lessons/04-01-poisson-arrivals-littles-law.md), [4.2](lessons/04-02-the-mm1-queue.md), [4.4](lessons/04-04-inventory-eoq-newsvendor.md))*
- Little's law needs **no** distributional assumption — Poisson and exponential belong to M/M/1, not to the law. *([4.1](lessons/04-01-poisson-arrivals-littles-law.md))*
- Use the **effective** arrival rate in Little's law when the system turns customers away. *([4.1](lessons/04-01-poisson-arrivals-littles-law.md))*
- $\rho < 1$ means *stable*, not *fine* — $\rho = 0.99$ is stable and unusable. *([4.2](lessons/04-02-the-mm1-queue.md))*
- $L$ and $W$ include the customer in service; $L_q$ and $W_q$ do not. *([4.2](lessons/04-02-the-mm1-queue.md))*
- Because $W_q$ is convex in $\rho$, averaging utilizations across periods **understates** the wait badly. *([4.2](lessons/04-02-the-mm1-queue.md))*
- With $c$ servers, $\rho = \lambda/(c\mu)$; $\lambda/\mu$ is the offered load $a$, which may exceed 1. *([4.3](lessons/04-03-mmc-pooling-networks.md))*
- Jackson's product form does **not** mean the nodes are independent — only that the steady-state marginals multiply. *([4.3](lessons/04-03-mmc-pooling-networks.md))*
- EOQ tolerates wrong *numbers* but not wrong *structure* — quantity discounts or backorders need a different model. *([4.4](lessons/04-04-inventory-eoq-newsvendor.md))*
- $c_u$ is the lost **margin**, not the selling price; $c_o$ is cost minus salvage. *([4.4](lessons/04-04-inventory-eoq-newsvendor.md))*
- The critical ratio is a **probability** — it locates a quantile, and the answer $Q^*$ is a quantity. *([4.4](lessons/04-04-inventory-eoq-newsvendor.md))*

### Simulation and nonlinear

- One long run is not many short ones — observations within a run are autocorrelated. *([4.5](lessons/04-05-simulation-nonlinear-taste.md))*
- Discard the warm-up: a model booted empty understates congestion. *([4.5](lessons/04-05-simulation-nonlinear-taste.md))*
- A zero gradient proves optimality only in a **convex** problem; otherwise it is merely stationary. *([4.5](lessons/04-05-simulation-nonlinear-taste.md))*
