# Convex Optimization — Syllabus

> Mathematics · Tier 1 · ~18 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md), [linalg-refresher](../linalg-refresher/syllabus.md), [real-analysis](../real-analysis/syllabus.md) · Roadmap id: `convex-optimization`

## Goal

Learn to recognize when an optimization problem is *convex* — the watershed that separates problems you can solve globally and reliably from problems you can only hope about — and to exploit that structure all the way through. You will build the vocabulary of convex sets and functions, learn to model real problems as LPs, QPs, SOCPs, and SDPs, wield Lagrangian duality and the KKT conditions (and *see* them as separating and supporting hyperplanes), run the core algorithms from gradient descent to interior-point methods, and apply all of it to least-squares, SVMs, portfolios, and control. Deliberately skipped: the theory of nonconvex and global optimization, combinatorial/integer optimization (that lives near `graph-theory`), and the engineering of production solvers — you'll understand *why* the methods work, not ship one.

## Dangerous Checklist

When you finish, you can:

- [ ] Prove a set is convex directly, and build new convex sets from old ones with the operations that preserve convexity
- [ ] Draw a separating or supporting hyperplane for a picture and state exactly what it certifies
- [ ] Decide whether a function is convex three ways: definition, Hessian $\succeq 0$, and epigraph
- [ ] Recognize whether an optimization problem is convex and rewrite it in standard form
- [ ] Model a problem as an LP, QP, SOCP, or SDP — and pick the *tightest* class that fits
- [ ] Form the Lagrangian and the dual function, and use weak duality to bound the optimum from below
- [ ] State Slater's condition and decide when strong duality (zero gap) holds
- [ ] Write the KKT conditions for a problem and use them to solve or certify a small convex program
- [ ] Read a Lagrange multiplier as a shadow price — the sensitivity of the optimum to its constraint
- [ ] Run gradient and subgradient descent, choose a step size, and state the convergence rate
- [ ] Set up Newton's method and explain why it converges quadratically near the optimum
- [ ] Turn a constrained problem into a smooth barrier problem and trace the central path to the solution

## Modules

### Module 1: Convex sets and convex functions

The whole course rests on two shapes and one picture: convex sets, convex functions, and the separating hyperplane. Get fluent here and everything downstream is bookkeeping.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Convex sets and the separating hyperplane | See convexity geometrically and state the one theorem everything leans on | convex set, line-segment definition, hyperplanes and halfspaces, separating & supporting hyperplane theorems |
| 1.2 | A zoo of convex sets, and operations that preserve convexity | Build convex sets you can recognize instantly, and combine them safely | polyhedra, norm balls, ellipsoids, the PSD cone; intersection, affine images, sums, that preserve convexity |
| 1.3 | Convex functions and the epigraph | Connect convex functions to convex sets through one clean picture | convex/concave function, Jensen's inequality, epigraph, first- and second-order conditions ($\nabla^2 f \succeq 0$) |
| 1.4 | Recognizing convexity in the wild | Certify convexity of messy expressions without ever computing a Hessian | operations preserving convexity (nonneg. combinations, max, composition), sublevel sets, log-concavity (a taste) |

**Boss problem 1:** Prove that the log-sum-exp function $f(x) = \log\sum_{i=1}^n e^{x_i}$ is convex in two independent ways — (a) show its Hessian is positive semidefinite by writing it as $\operatorname{diag}(z) - zz^\top$ for a probability vector $z$ and invoking Cauchy–Schwarz, and (b) build it up from convexity-preserving operations. Then use convexity (or a direct argument) to prove the sandwich $\max_i x_i \le f(x) \le \max_i x_i + \log n$, and explain in one sentence why log-sum-exp is called the "soft max."

### Module 2: Convex problems and how to model with them

A problem is easy or hard depending on how you *write* it. This module gives you the standard problem classes — a ladder of ever-more-expressive cones — and the modeling reflexes to climb only as high as you must.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The convex optimization problem: why local means global | State standard form and know exactly what convexity buys you | standard form, feasible set, optimal value, local $\Rightarrow$ global, optimality via $\nabla f$ over the feasible set |
| 2.2 | Linear and quadratic programs | Recognize and set up the two workhorse classes | LP, QP, polyhedral feasible sets, least-squares as a QP, geometry of the LP optimum at a vertex |
| 2.3 | Second-order cone programs | Handle Euclidean-norm and robust constraints exactly | second-order (ice-cream) cone, SOCP standard form, robust linear programming, LP/QP $\subseteq$ SOCP |
| 2.4 | Semidefinite programs and the conic ladder | Optimize over matrices, and see the LP $\subseteq$ SOCP $\subseteq$ SDP hierarchy | matrix variables, $X \succeq 0$, linear matrix inequalities, Schur complements, SDP as the top of the ladder |

**Boss problem 2:** Consider the constrained least-squares problem $\min_x \lVert Ax - b\rVert_2$ subject to $\lVert x\rVert_1 \le t$. (a) Reformulate it as an SOCP by introducing epigraph variables and splitting the $\ell_1$ ball into linear constraints. (b) Then express the single quadratic constraint $\lVert Ax-b\rVert_2 \le s$ as a linear matrix inequality via a Schur complement, thereby exhibiting it as an SDP constraint — concretely demonstrating SOCP $\subseteq$ SDP. State in one line why you'd still solve it as an SOCP in practice.

### Module 3: Duality and the KKT conditions

Every convex problem has a shadow twin — the dual — that lower-bounds it, and at the optimum the two shake hands. The handshake conditions are KKT, and their meaning is entirely geometric: gradients balancing against supporting hyperplanes.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Lagrangian and the dual function | Turn constraints into prices and get a free lower bound | Lagrangian, Lagrange multipliers, dual function as a pointwise infimum, weak duality, the duality gap |
| 3.2 | Strong duality and Slater's condition | Know when the gap closes and the dual solves the primal | dual problem, strong duality, Slater's constraint qualification, the geometry of zero gap |
| 3.3 | The KKT conditions | Write down and use the master optimality conditions | stationarity, primal/dual feasibility, complementary slackness, KKT as necessary-and-sufficient in the convex case |
| 3.4 | The geometry of duality: hyperplanes, subgradients, shadow prices | Read KKT as a picture and a multiplier as a sensitivity | supporting-hyperplane view, subgradients & optimality for nonsmooth $f$, multipliers as shadow prices / sensitivities |

**Boss problem 3:** Solve the *water-filling* problem: maximize $\sum_{i=1}^n \log(\alpha_i + x_i)$ subject to $x \succeq 0$ and $\mathbf{1}^\top x = 1$, with fixed constants $\alpha_i > 0$. Form the Lagrangian, write the KKT conditions, and derive the closed-form solution $x_i = \max\{0,\ \nu - \alpha_i\}$ where $\nu$ is chosen so the budget binds. Draw the "water level $\nu$ poured over a floor of heights $\alpha_i$" picture, and interpret $\nu$ as the shadow price of the budget constraint — the same object as a Lagrange multiplier in `grad-micro`'s consumer problem.

### Module 4: Algorithms, from first-order to interior-point

How the solutions actually get computed. We climb from the cheapest, most general method (a step downhill) to the fast, structure-hungry method (interior-point) that made convex optimization a practical technology.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | First-order methods: gradient and subgradient descent | Take principled downhill steps, even when the gradient doesn't exist | gradient descent, step-size rules, linear convergence & condition number, subgradients, $O(1/\sqrt{k})$ for nonsmooth |
| 4.2 | Newton's method | Use curvature to converge blazingly fast near the optimum | Newton step, quadratic local convergence, affine invariance, damped Newton, self-concordance (a taste) |
| 4.3 | Barrier and interior-point methods | Solve constrained problems by walking a smooth path from the interior | log-barrier, the central path, barrier method, primal-dual interior-point, polynomial-time in practice |

**Boss problem 4:** For the quadratic $f(x) = \tfrac12 x^\top Q x - b^\top x$ with $Q \succ 0$: (a) show gradient descent with the optimal fixed step size converges linearly with rate governed by the condition number $\kappa = \lambda_{\max}/\lambda_{\min}$, and explain geometrically why an ill-conditioned $Q$ makes it zig-zag; (b) show Newton's method reaches the exact minimizer in a *single* step, and say why; (c) add the constraint $x \succeq 0$, write the log-barrier objective $f(x) - \mu\sum_i \log x_i$, and describe what happens to its minimizer as $\mu \to 0^+$ — i.e. trace the central path.

### Module 5: Applications

Convex optimization earns its keep. Each lesson takes a real problem from a different field, models it in the language of Modules 1–2, and reads its solution through the duality of Module 3.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Least-squares, regularization, and the lasso | Model fitting-plus-simplicity as a convex program and read the geometry | least-squares, Tikhonov/ridge ($\ell_2$), lasso ($\ell_1$) and sparsity, the constraint-set picture, links to `statistical-learning` |
| 5.2 | Support vector machines | Derive the maximum-margin classifier as a QP and pass to its dual | separating hyperplane, geometric margin, hard/soft margin QP, the SVM dual, support vectors, the kernel slot-in |
| 5.3 | Portfolio optimization and optimal control | Recognize two more real problems as QP/SOCP and set them up | Markowitz mean–variance QP, risk–return frontier, robust portfolios (SOCP); LQR and convex model-predictive control |

**Boss problem 5:** Take a small linearly separable dataset in the plane. (a) Write the hard-margin SVM as a QP: minimize $\tfrac12\lVert w\rVert_2^2$ subject to $y_i(w^\top x_i + b) \ge 1$. (b) Form the Lagrangian dual and reduce it to a QP in the multipliers $\alpha_i$. (c) Solve it by hand, identify which points are support vectors (the ones with $\alpha_i > 0$), and recover $w$ and $b$. (d) Using complementary slackness from Module 3, explain why the optimal hyperplane depends only on the support vectors and only through inner products $x_i^\top x_j$ — the hook on which the kernel trick hangs.

## Sources of truth

- Boyd & Vandenberghe, *Convex Optimization* (the primary reference; notation, problem taxonomy, and duality follow it closely — and it's free)
- Nocedal & Wright, *Numerical Optimization* (the algorithms in Module 4, especially Newton and interior-point)
- Bertsekas, *Convex Optimization Theory* (for the cleanest geometric proofs of separation and duality)
- Ben-Tal & Nemirovski, *Lectures on Modern Convex Optimization* (the conic hierarchy and robust modeling, a taste)

## Notes

- **KKT and duality are the same machinery as constrained optimization elsewhere.** The Lagrange multiplier here *is* the shadow price of [`grad-micro`](../grad-micro/syllabus.md) and the constrained best-response / equilibrium condition of [`grad-game-theory`](../grad-game-theory/syllabus.md): a multiplier prices a constraint, and complementary slackness says you only pay for constraints that bind. Name this bridge explicitly whenever it appears (Module 3, Boss problems 3 and 5).
- **This course is the optimization engine under [`statistical-learning`](../statistical-learning/syllabus.md).** Ridge/lasso (5.1) and the SVM (5.2) are exactly its regularized estimators and max-margin classifier — set up here as convex programs, used there as learning methods. Keep the two mutually consistent.
- **Draws continuously on the prereqs:** separating-hyperplane and convergence rigor from [`real-analysis`](../real-analysis/syllabus.md); the PSD cone, LMIs, SVD, and Schur complements from [`linalg-refresher`](../linalg-refresher/syllabus.md); gradients and Hessians from [`calc-refresher`](../calc-refresher/syllabus.md).
- Nonconvex/global optimization and combinatorial (integer) optimization are **out of scope** and noted only where a convex relaxation (e.g. SDP relaxation) is the natural bridge.
