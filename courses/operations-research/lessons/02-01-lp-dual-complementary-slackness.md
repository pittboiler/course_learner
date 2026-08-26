# Operations Research · Lesson 2.1: The LP dual & complementary slackness

> ⏱ ~15 min · Module 2: Duality, Sensitivity & Network Structure · Builds on: [1.3 The simplex method](01-03-the-simplex-method.md), [1.2 Vertices, bases & the fundamental theorem](01-02-vertices-bases-fundamental-theorem.md), [`convex-optimization` 3.1–3.2](../../convex-optimization/lessons/03-01-lagrangian-dual-function.md) · Unlocks: [2.2 Shadow prices & sensitivity analysis](02-02-shadow-prices-sensitivity.md)

## Why this matters

Someone hands you a production plan and says "this is optimal." How do you check? Re-running simplex is a proof by exhaustion, and on a real model that's minutes of compute you'd rather not spend. Duality gives you a *certificate*: a second, small vector of numbers that anyone can verify by arithmetic in a few seconds. It also does something simplex alone never does — it hands you a **price for every resource**, which is the number your operations manager actually wants. The optimal $x$ says what to build; the dual $y$ says what your machine-hours are worth, which of them are the bottleneck, and what you'd pay for one more. Every commercial LP solver reports these by default, and 2.2 is entirely about reading them.

## The idea

Two ways to look at the same factory.

**The producer's view (primal):** I have fixed stocks of resources. Choose a production plan $x$ to maximize profit without exceeding any stock. Answer: a plan.

**The accountant's view (dual):** forget producing. A competitor offers to buy your *entire* resource stock outright, and asks you to quote a per-unit price $y_i$ on each resource $i$. You want a price list that is (a) *credible* — for every product you could have made, the resources it consumes must be priced at least as high as the profit that product would have earned, otherwise you'd obviously rather produce than sell; and (b) as *cheap as possible*, because the competitor is the one paying and you have to make the offer attractive. Answer: a price list.

The astonishing fact is that the cheapest credible price list costs the competitor **exactly** what the best production plan would have earned. Not approximately. Exactly. The market can't tell the difference between your factory and your inventory, correctly priced.

That equality is *strong duality*, and once you have it, certification is free: any credible price list is an upper bound on what production can earn, so if someone shows you a plan and a price list with matching values, both are optimal and there is nothing left to check.

## The formal version

### What we are importing, and the one place LP is better behaved

LP duality is the **affine special case** of the Lagrangian duality you already built in [`convex-optimization` 3.1](../../convex-optimization/lessons/03-01-lagrangian-dual-function.md) (the Lagrangian and the dual function), [3.2](../../convex-optimization/lessons/03-02-strong-duality-slater.md) (strong duality and Slater), [3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md) (KKT), and [3.4](../../convex-optimization/lessons/03-04-geometry-of-duality.md) (the geometry). Attach a multiplier $y_i \ge 0$ to each constraint $a_i^Tx \le b_i$, form the Lagrangian, minimize out $x$, and what drops out is precisely the LP below. Complementary slackness is KKT condition four. **We are not re-deriving any of that here** — it is a prerequisite, and the whole geometric story (supporting hyperplanes, the duality gap as a vertical distance) lives there.

There is exactly one place LP is *better behaved* than the general convex case, and it is worth stating precisely.

> **Strong duality for LP.** If the primal has a feasible solution and a finite optimal value, then the dual also has an optimal solution and $c^Tx^* = b^Ty^*$. More generally, exactly one of three things happens: both have finite optima and the values are equal; one is unbounded and the other infeasible; or **both** are infeasible. There is a duality gap only in that last case.

*In words: for a linear program you get zero duality gap unless both problems are infeasible — no interior point, no constraint qualification, nothing to check.*

Compare with the general convex statement: there you need **Slater's condition** — a strictly feasible point, $f_i(x) < 0$ — before strong duality is guaranteed. Slater explicitly exempts *affine* constraints: they need only hold, not hold strictly. An LP is nothing but affine constraints, so Slater is satisfied by any feasible point at all. That is the entire reason LP duality is unconditional, and it's why we can lean on it as an everyday tool rather than a theorem with hypotheses to verify.

### The construction rules

Fix the course's standard form: **primal** is maximize $c^Tx$ subject to $Ax \le b$, $x \ge 0$, with $A$ an $m \times n$ matrix, $x \in \mathbb{R}^n$ the decision vector, $b \in \mathbb{R}^m$ the resource stocks, $c \in \mathbb{R}^n$ the unit profits. Its **dual** is

$$\min\ b^Ty \quad \text{subject to}\quad A^Ty \ge c,\quad y \ge 0,$$

with $y \in \mathbb{R}^m$ — one dual variable per primal constraint.

You never need to redo the Lagrangian. Read the dual off this table:

| Primal — **maximize** $c^Tx$ | Dual — **minimize** $b^Ty$ |
|---|---|
| $m$ constraints | $m$ variables $y_1,\dots,y_m$ |
| $n$ variables | $n$ constraints |
| right-hand sides $b$ | objective coefficients $b$ |
| objective coefficients $c$ | right-hand sides $c$ |
| column $j$ of $A$ | coefficients of dual constraint $j$ |
| constraint $i$ is $\le b_i$ | $y_i \ge 0$ |
| constraint $i$ is $= b_i$ | $y_i$ **free** |
| constraint $i$ is $\ge b_i$ | $y_i \le 0$ |
| $x_j \ge 0$ | dual constraint $j$ is $\ge c_j$ |
| $x_j$ **free** | dual constraint $j$ is $= c_j$ |
| $x_j \le 0$ | dual constraint $j$ is $\le c_j$ |

*In words: constraints and variables trade places; the objective and the right-hand side trade places; $A$ gets transposed; and the "natural" sign for a max problem ($\le$ constraints, $\ge 0$ variables) produces the natural sign on the other side, while reversing one reverses its partner and an equality produces a free partner.*

The mnemonic that keeps the signs straight: a $\le$ row is the *natural* row in a max problem, so it gets a *natural* ($\ge 0$) price; an equality is the middle case, so it gets the middle case (free); a $\ge$ row is backwards, so its price is backwards ($\le 0$). Same three-way pattern, read across.

**Units are a real error catch.** If $b_i$ is measured in machine-hours and $c_j$ in dollars per batch, then $b^Ty$ must come out in dollars, so $y_i$ is in **dollars per machine-hour**. Check the dual constraint too: $\sum_i a_{ij} y_i \ge c_j$ has $a_{ij}$ in machine-hours per batch times $y_i$ in dollars per machine-hour, giving dollars per batch — the units of $c_j$. If your dual's units don't come out that way, you transposed something wrong. Do this check; it costs ten seconds and catches most construction errors.

### Weak duality, in two lines

Let $x$ be any primal-feasible point and $y$ any dual-feasible point. Then

$$c^Tx \;\le\; (A^Ty)^Tx \;=\; y^T\!Ax \;\le\; y^Tb \;=\; b^Ty.$$

The first inequality holds because $A^Ty \ge c$ and $x \ge 0$ (multiplying an inequality by a nonnegative vector preserves it); the second because $Ax \le b$ and $y \ge 0$. That's the whole proof.

$$\boxed{\,c^Tx \;\le\; b^Ty \quad \text{for every feasible } x \text{ and every feasible } y.\,}$$

Three corollaries do all the work:

1. **Any** dual-feasible $y$ — not just the optimal one — gives an upper bound $b^Ty$ on the primal optimum. Guess a price list, get a bound.
2. If you exhibit a feasible pair with $c^Tx = b^Ty$, **both are optimal**, and you have proved it without a solver. This is the certificate.
3. If the primal is unbounded, no dual-feasible $y$ can exist (it would cap an uncapped objective), so **the dual is infeasible**. Symmetrically, an unbounded dual forces an infeasible primal. The converse does *not* hold: an infeasible dual leaves the primal either unbounded *or* infeasible. Both-infeasible really happens — max $2x_1 - x_2$ subject to $x_1 - x_2 \le 1$, $-x_1 + x_2 \le -2$, $x \ge 0$ demands $x_1 - x_2 \le 1$ and $x_1 - x_2 \ge 2$ at once, and its dual is infeasible for the mirror-image reason. That is the single case with a genuine LP duality gap.

### Complementary slackness

Subtract the two ends of the weak-duality chain and regroup:

$$b^Ty - c^Tx \;=\; \underbrace{y^T(b - Ax)}_{\ge\,0} \;+\; \underbrace{x^T(A^Ty - c)}_{\ge\,0}.$$

Both terms are sums of products of nonnegative numbers. The gap is zero exactly when every one of those products is zero. So a feasible pair $(x, y)$ is optimal **if and only if**, for every $i$ and every $j$,

$$\boxed{\;y_i\big(b_i - (Ax)_i\big) = 0 \qquad\text{and}\qquad x_j\big((A^Ty)_j - c_j\big) = 0.\;}$$

Two readings, and you want both:

- **Resource side.** If constraint $i$ has slack left over ($(Ax)_i < b_i$), then $y_i = 0$: *a resource you didn't finish using is worth nothing at the margin.* Contrapositive: if the price $y_i$ is positive, the resource is fully consumed.
- **Product side.** If you make product $j$ in positive quantity ($x_j > 0$), then $(A^Ty)_j = c_j$: *anything you actually produce breaks even at the internal prices* — the priced-out cost of its inputs exactly equals its profit. Contrapositive: if a product's inputs cost strictly more than it earns, you make none of it.

**The operational payoff — and this is the skill the lesson is for.** Given a claimed primal optimum $x$, you can solve for $y$ directly, with no second simplex run:

1. Compute the slack in every primal constraint. Every constraint with slack forces $y_i = 0$.
2. Every $x_j > 0$ turns dual constraint $j$ into an **equality**.
3. Solve the resulting small linear system for the remaining $y_i$.
4. **Verify** — this step is not optional. Check that the $y$ you got is dual *feasible* (all constraints satisfied, all signs right), and that $b^Ty = c^Tx$. If either check fails, the claimed $x$ was not optimal.

Step 3 is usually a $2\times 2$ or $3\times 3$ system, because at a nondegenerate vertex the number of tight constraints matches the number of unknowns left.

## Picture

![Two panels side by side: the primal maximize problem and the dual minimize problem, with coral arrows linking each primal constraint to its dual variable and each primal variable to its dual constraint, and the complementary slackness conditions listed below](assets/02-01-fig1.svg)

## Worked examples

### Example 1 — the dual of the dual is the primal

Take a small primal $P$:

$$\max\ 2x_1 + 3x_2 \quad \text{s.t.}\quad x_1 + 2x_2 \le 8,\quad 3x_1 + x_2 \le 9,\quad x \ge 0,$$

so $A = \begin{pmatrix}1 & 2\\ 3 & 1\end{pmatrix}$, $b = (8,9)^T$, $c = (2,3)^T$. Straight off the table, the dual $D$ is

$$\min\ 8y_1 + 9y_2 \quad \text{s.t.}\quad y_1 + 3y_2 \ge 2,\quad 2y_1 + y_2 \ge 3,\quad y \ge 0.$$

(Note the transpose at work: the dual's first constraint uses **column 1** of $A$, namely $(1,3)$.)

Now dualize $D$. The table is stated for max problems, so first flip $D$ into one by negating the objective and the constraints:

$$\max\ (-8)y_1 + (-9)y_2 \quad \text{s.t.}\quad -y_1 - 3y_2 \le -2,\quad -2y_1 - y_2 \le -3,\quad y \ge 0.$$

This is standard form with $\tilde c = -b$, $\tilde b = -c$, $\tilde A = -A^T$. Apply the rules again, calling the new dual variables $w$:

$$\min\ \tilde b^Tw = -2w_1 - 3w_2 \quad \text{s.t.}\quad \tilde A^Tw = -Aw \ge -c \ \Rightarrow\ \begin{cases} -w_1 - 2w_2 \ge -8\\ -3w_1 - w_2 \ge -9\end{cases},\quad w \ge 0.$$

Multiply each constraint by $-1$ (flipping the inequality) and turn the minimization back into a maximization:

$$\max\ 2w_1 + 3w_2 \quad \text{s.t.}\quad w_1 + 2w_2 \le 8,\quad 3w_1 + w_2 \le 9,\quad w \ge 0.$$

That is $P$ again. *In words: "dual" is an involution — there is no primal and dual, only two faces of one problem, and which one you call primal is a matter of who asked.* Practical consequence: every theorem above works in both directions, so "any feasible primal is a **lower** bound on the dual optimum" is the same statement as corollary 1.

### Example 2 — certifying the Wyndor optimum (boss problem 2, parts a and b)

Wyndor Glass, from [1.1](01-01-formulating-linear-programs.md) and Module 1's boss problem: $x_1$ and $x_2$ are batches per week of two products, earning 3 and 5 thousand dollars per batch. Plants 1, 2, 3 have 4, 12, and 18 production hours per week available.

$$\max\ 3x_1 + 5x_2 \quad \text{s.t.}\quad x_1 \le 4,\quad 2x_2 \le 12,\quad 3x_1 + 2x_2 \le 18,\quad x \ge 0.$$

**(a) The dual.** Here $A = \begin{pmatrix}1 & 0\\ 0 & 2\\ 3 & 2\end{pmatrix}$, $b = (4, 12, 18)^T$, $c = (3,5)^T$. Three $\le$ constraints give three variables $y_1, y_2, y_3 \ge 0$; two nonnegative variables give two $\ge$ constraints, built from the **columns** of $A$:

$$\min\ 4y_1 + 12y_2 + 18y_3 \quad \text{s.t.}\quad \underbrace{y_1 + 3y_3 \ge 3}_{\text{from column } x_1},\quad \underbrace{2y_2 + 2y_3 \ge 5}_{\text{from column } x_2},\quad y \ge 0.$$

$y_i$ is the value of one more production hour at plant $i$, in **thousands of dollars per hour** (because $b_i$ is hours and the objective is in thousands of dollars). Dual constraint 1 reads: *the plant time a batch of product 1 consumes — one hour at plant 1, three at plant 3 — must be priced at no less than the 3 thousand dollars that batch earns.* Constraint 2 says the same for product 2 (two hours at plant 2, two at plant 3, versus 5 thousand dollars).

**(b) Solve for $y$ by complementary slackness at $x^* = (2, 6)$.** First the slacks:

| Constraint | Left side at $(2,6)$ | RHS | Status |
|---|---|---|---|
| (1) $x_1$ | $2$ | 4 | slack 2 |
| (2) $2x_2$ | $12$ | 12 | tight |
| (3) $3x_1 + 2x_2$ | $6 + 12 = 18$ | 18 | tight |

Primal objective: $z^* = 3(2) + 5(6) = 36$ thousand dollars.

Now apply the two rules.

- Constraint (1) has slack, so $y_1 = 0$. (Plant 1 has spare hours; another one is worth nothing.)
- $x_1 = 2 > 0$, so dual constraint 1 is an equality: $y_1 + 3y_3 = 3$. With $y_1 = 0$, $\;y_3 = 1$.
- $x_2 = 6 > 0$, so dual constraint 2 is an equality: $2y_2 + 2y_3 = 5$. With $y_3 = 1$, $\;2y_2 = 3$, so $y_2 = \tfrac32$.

So $y^* = (0,\ \tfrac32,\ 1)$ — no simplex on the dual, just three substitutions.

**Verification, both halves.**

*Dual feasibility.* Constraint 1: $y_1 + 3y_3 = 0 + 3 = 3 \ge 3$ ✓ (tight, as required). Constraint 2: $2y_2 + 2y_3 = 3 + 2 = 5 \ge 5$ ✓ (tight). Signs: $(0, 1.5, 1) \ge 0$ ✓.

*Objective match.* $b^Ty^* = 4(0) + 12(\tfrac32) + 18(1) = 0 + 18 + 18 = 36$, and $c^Tx^* = 36$. Equal ✓.

Both feasible, values equal — by weak duality corollary 2, $(2,6)$ and $(0, \tfrac32, 1)$ are both optimal, certified. Reading it back: plant 1 time is free at the margin, plant 2 time is worth 1.5 thousand dollars per hour, plant 3 time is worth 1 thousand dollars per hour. That's the whole point of Module 2, and [2.2](02-02-shadow-prices-sensitivity.md) asks *how far* those prices hold.

### You already had the dual — it was in the tableau

Run simplex on the primal in slack form, with slack $s_i$ added to constraint $i$. When you stop, the final objective row reads

$$z + 0\,x_1 + 0\,x_2 + 0\,s_1 + \tfrac32 s_2 + 1\,s_3 = 36,$$

and those slack coefficients $(0, \tfrac32, 1)$ are exactly $y^*$. That is not a coincidence: the reduced cost of $s_i$ is $c_B B^{-1} A_{s_i} - 0 = (c_B B^{-1})_i$, and $y^T = c_B B^{-1}$ is the dual solution. With basis $\{s_1, x_1, x_2\}$ here, solving $B^Ty = c_B$ gives back the identical three equations complementary slackness produced. So a primal solve delivers the dual for free — which is why every solver reports dual values (often labelled "shadow price" or "pi") in its default output, and why nobody in practice ever solves the dual separately just to get $y$.

## Watch out

- **You might read complementary slackness as "tight constraint, positive price."** Only one direction is guaranteed: slack $\Rightarrow$ price zero. Tight does **not** imply positive price: a *degenerate* optimum can have a binding constraint with $y_i = 0$ (the constraint happens to pass through the vertex without actually limiting anything). Degeneracy — the same phenomenon that stalls simplex in [1.4](01-04-initialization-degeneracy-cycling.md) — also makes the dual solution non-unique, which is why 2.2 will insist on checking a shadow price's validity range.
- **You might drop the sign rules when a constraint isn't $\le$.** A $\ge$ constraint in a max problem gives a *nonpositive* dual variable, and an equality gives a *free* one. Forcing every $y_i \ge 0$ out of habit produces a dual that is infeasible at the true optimum, and then your certificate fails for no reason. Run the units check and the sign table before you trust a hand-built dual.
- **You might treat a matching objective value alone as a certificate.** It certifies nothing unless *both* points are feasible. Complementary slackness applied to a non-optimal $x$ will cheerfully hand you a $y$ that reproduces $c^Tx$ but violates a dual constraint — see P3.

## One-liner

> Transpose the problem and constraints become prices: any credible price list caps your profit, a matching pair proves optimality, and complementary slackness — idle resource, zero price; produced good, break-even — lets you read the prices straight off a claimed solution.

## Problems

**P1 (🟢)** Write the dual of

$$\max\ 4x_1 + x_2 + 3x_3 \quad\text{s.t.}\quad \begin{aligned} x_1 + 2x_2 + x_3 &\le 10\\ 2x_1 - x_2 + 4x_3 &\ge 3\\ x_1 + x_3 &= 5\end{aligned} \qquad x_1, x_2 \ge 0,\ x_3 \text{ free}.$$

State the sign restriction on each dual variable and say which dual relation is an equality, with the reason in each case.

**P2 (🟡)** For

$$\max\ 5x_1 + 4x_2 \quad\text{s.t.}\quad 6x_1 + 4x_2 \le 24,\quad x_1 + 2x_2 \le 6,\quad -x_1 + x_2 \le 1,\quad x \ge 0,$$

a colleague claims the optimum is $x^* = (3, \tfrac32)$. Use complementary slackness to find the dual solution without solving anything by simplex, then verify dual feasibility and the objective match to certify (or refute) the claim.

**P3 (🔴, optional)** For

$$\max\ 3x_1 + 2x_2 \quad\text{s.t.}\quad x_1 + x_2 \le 4,\quad x_1 + 3x_2 \le 6,\quad x \ge 0,$$

someone claims $x = (3,1)$ is optimal. Apply complementary slackness, and explain both *how the certification fails* and *what the failure tells you to do next*.

<details>
<summary>Solutions</summary>

**P1** Three constraints give three dual variables $y_1, y_2, y_3$; three variables give three dual constraints. The constraint matrix is

$$A = \begin{pmatrix} 1 & 2 & 1\\ 2 & -1 & 4\\ 1 & 0 & 1\end{pmatrix},$$

and dual constraint $j$ is built from **column** $j$ of $A$: column 1 is $(1,2,1)$, column 2 is $(2,-1,0)$, column 3 is $(1,4,1)$. So

$$\min\ 10y_1 + 3y_2 + 5y_3 \quad\text{s.t.}\quad \begin{aligned} y_1 + 2y_2 + y_3 &\ge 4 && (x_1 \ge 0)\\ 2y_1 - y_2 &\ge 1 && (x_2 \ge 0)\\ y_1 + 4y_2 + y_3 &= 3 && (x_3 \text{ free})\end{aligned}$$

with $y_1 \ge 0$ (its constraint is $\le$ in a max problem), $y_2 \le 0$ (its constraint is $\ge$), $y_3$ free (its constraint is an equality).

*Check.* Counts: 3 primal constraints and 3 primal variables became 3 dual variables and 3 dual constraints ✓. Right-hand sides $(10,3,5)$ of the primal became the dual objective coefficients, and the primal objective $(4,1,3)$ became the dual right-hand sides ✓. Sign spot-check on $y_2$: rewriting $2x_1 - x_2 + 4x_3 \ge 3$ as $-2x_1 + x_2 - 4x_3 \le -3$ with a legitimate nonnegative multiplier $u_2 \ge 0$ contributes $-3u_2$ to the dual objective and $-2u_2$ to dual constraint 1; substituting $y_2 = -u_2 \le 0$ turns those into $+3y_2$ and $+2y_2$, exactly what's written ✓. Units-free sanity: the free variable $x_3$ produced the only equality, and the only $\ge$ row produced the only nonpositive variable ✓.

**P2** Evaluate the constraints at $(3, 1.5)$:

| Constraint | Value | RHS | Status |
|---|---|---|---|
| (1) $6x_1 + 4x_2$ | $18 + 6 = 24$ | 24 | tight |
| (2) $x_1 + 2x_2$ | $3 + 3 = 6$ | 6 | tight |
| (3) $-x_1 + x_2$ | $-3 + 1.5 = -1.5$ | 1 | slack 2.5 |

Feasible ✓, and $c^Tx = 5(3) + 4(1.5) = 15 + 6 = 21$.

Complementary slackness. Constraint (3) has slack, so $y_3 = 0$. Both $x_1 > 0$ and $x_2 > 0$, so both dual constraints are equalities (dual constraint $j$ uses column $j$ of $A$: column 1 is $(6,1,-1)$, column 2 is $(4,2,1)$):

$$6y_1 + y_2 - y_3 = 5, \qquad 4y_1 + 2y_2 + y_3 = 4.$$

With $y_3 = 0$: from the second, $2y_1 + y_2 = 2$. Subtracting from the first, $4y_1 = 3$, so $y_1 = \tfrac34$ and $y_2 = 2 - 2(\tfrac34) = \tfrac12$. Thus $y = (\tfrac34, \tfrac12, 0)$.

*Verification.* Dual feasibility: $y \ge 0$ ✓; constraint 1 gives $6(\tfrac34) + \tfrac12 - 0 = 4.5 + 0.5 = 5 \ge 5$ ✓; constraint 2 gives $4(\tfrac34) + 2(\tfrac12) + 0 = 3 + 1 = 4 \ge 4$ ✓. Objective match: $b^Ty = 24(\tfrac34) + 6(\tfrac12) + 1(0) = 18 + 3 = 21 = c^Tx$ ✓. The claim is **certified**: $(3, 1.5)$ is optimal, and the resource prices are $\tfrac34$ and $\tfrac12$ per unit on constraints 1 and 2, zero on constraint 3.

**P3** At $(3,1)$: constraint 1 gives $3 + 1 = 4$, tight; constraint 2 gives $3 + 3 = 6$, tight. Feasible, and $c^Tx = 9 + 2 = 11$. Both constraints are tight, so the resource-side rule gives no information about $y$. Both variables are positive, so both dual constraints must be equalities (columns of $A$ are $(1,1)$ and $(1,3)$):

$$y_1 + y_2 = 3, \qquad y_1 + 3y_2 = 2.$$

Subtracting, $2y_2 = -1$, so $y_2 = -\tfrac12$ and $y_1 = \tfrac72$.

**The certification fails at the feasibility step:** the dual requires $y \ge 0$, and $y_2 = -\tfrac12 < 0$. So no dual-feasible $y$ complements $(3,1)$, and by complementary slackness $(3,1)$ is **not** optimal — even though $b^Ty = 4(\tfrac72) + 6(-\tfrac12) = 14 - 3 = 11$ reproduces the primal value exactly. That matching number is precisely the trap in the last "Watch out" bullet: without feasibility it certifies nothing.

*What the failure tells you.* The negative price sits on constraint 2, the one $x_2$ leans on most heavily ($3$ units per batch versus $1$). A negative shadow price means holding that constraint tight is *costing* you — so make less $x_2$ and drop off constraint 2. Following that, set $x_2 = 0$ and push $x_1$ to its limit: $x_1 = 4$ (constraint 1 binds; constraint 2 gives $4 \le 6$, slack). Value $3(4) = 12 > 11$. Certify it: constraint 2 slack forces $y_2 = 0$; $x_1 > 0$ forces $y_1 + y_2 = 3$, so $y = (3, 0)$. Dual feasible? $y \ge 0$ ✓, and constraint 2 of the dual reads $y_1 + 3y_2 = 3 \ge 2$ ✓ (slack, consistent with $x_2 = 0$). Objective: $b^Ty = 4(3) + 6(0) = 12 = c^Tx$ ✓. So $(4,0)$ is the true optimum with value 12.

</details>

## Flashback

**From Lesson 1.4 (Initialization, degeneracy & cycling)** — a fresh two-phase setup, different data and a different constraint mix from the one you did there:

$$\max\ 2x_1 + 3x_2 \quad\text{s.t.}\quad x_1 + x_2 \ge 3,\quad x_1 + 2x_2 \le 8,\quad x \ge 0.$$

The origin is not feasible, so simplex has no obvious starting vertex. Set up Phase I, run **one** pivot using Bland's rule to break the entering-variable tie, and state whether the original LP is feasible and what basic feasible solution you end at.

<details>
<summary>Solution</summary>

**Setup.** The $\ge$ constraint needs a *surplus* variable subtracted, then an *artificial* variable added to supply a starting basis; the $\le$ constraint just needs a slack:

$$x_1 + x_2 - s_1 + a_1 = 3, \qquad x_1 + 2x_2 + s_2 = 8, \qquad x_1, x_2, s_1, s_2, a_1 \ge 0.$$

Phase I minimizes total artificial infeasibility: $\min\ a_1$, equivalently $\max\ w = -a_1$. Starting basis $\{a_1, s_2\}$ gives $a_1 = 3$, $s_2 = 8$, $x = (0,0)$ — feasible for the Phase I problem, which is the point of the artificial.

**Phase I objective row.** From the first equation, $a_1 = 3 - x_1 - x_2 + s_1$, so

$$w = -a_1 = -3 + x_1 + x_2 - s_1.$$

Reduced costs (for a max): $x_1$ has $+1$, $x_2$ has $+1$, $s_1$ has $-1$. Both $x_1$ and $x_2$ improve $w$ at the same rate — a tie. **Bland's rule** breaks it by smallest index: enter $x_1$.

**Ratio test.** Column of $x_1$ is $(1, 1)$ with right-hand side $(3, 8)$: ratios $3/1 = 3$ and $8/1 = 8$. The minimum is 3, so $a_1$ leaves.

**After the pivot.** $x_1 = 3$, $s_2 = 8 - 3 = 5$, and $a_1 = 0$, giving $w = 0$.

**Conclusion.** Phase I ended with objective $0$ and the artificial driven out of the basis, so the original LP is **feasible**, and we finish at the basic feasible solution $x = (3, 0)$ with basis $\{x_1, s_2\}$. Phase II starts there with the real objective $2x_1 + 3x_2$.

*Check.* $(3,0)$ satisfies $x_1 + x_2 = 3 \ge 3$ (tight, as expected — the artificial's constraint is exactly binding) and $x_1 + 2x_2 = 3 \le 8$ (slack 5, matching $s_2 = 5$) ✓. It is a genuine vertex: two of the constraints $x_1 + x_2 \ge 3$ and $x_2 \ge 0$ are tight in two dimensions ✓. Had Phase I stopped with $w < 0$ — some artificial stuck at a positive value — the original LP would have been infeasible instead.

</details>

## Connections

- **Backward:** the dual solution is the row-0 slack coefficients of [1.3](01-03-the-simplex-method.md)'s final tableau, so simplex was computing $y$ all along; and the "which constraints are tight" bookkeeping is exactly the basic/nonbasic split from [1.2](01-02-vertices-bases-fundamental-theorem.md). Degeneracy from [1.4](01-04-initialization-degeneracy-cycling.md) reappears here as non-uniqueness of $y$.
- **Forward:** [2.2](02-02-shadow-prices-sensitivity.md) renames $y_i$ the *shadow price* and computes the right-hand-side range over which it stays valid — for Wyndor's constraint 3, that range turns out to be 12 to 24. [2.3](02-03-network-models-integrality.md) uses duality on network LPs, where the dual variables become node potentials. In Module 3, [3.2](03-02-branch-and-bound-cutting-planes.md) leans on weak duality constantly: every LP-relaxation bound that prunes a branch-and-bound node is corollary 1 in disguise.
- **Sideways:** complementary slackness *is* KKT condition four from [`convex-optimization` 3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md), and $y_i$ *is* the Lagrange multiplier of constraint $i$ — the same object that prices a budget constraint in consumer theory ([`grad-micro`](../../grad-micro/syllabus.md)) and that reappears as the marginal-value interpretation in [`convex-optimization` 3.4](../../convex-optimization/lessons/03-04-geometry-of-duality.md). On network LPs the primal–dual pair specializes to max-flow / min-cut, proved graph-theoretically in [`graph-theory` 4.1](../../graph-theory/lessons/04-01-flow-networks-maxflow-mincut.md): the min cut is the LP dual of the max flow, and the theorem is strong duality wearing a combinatorial hat.
