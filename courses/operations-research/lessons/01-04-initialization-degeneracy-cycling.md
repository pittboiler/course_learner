# Operations Research · Lesson 1.4: Initialization, degeneracy & cycling

> ⏱ ~15 min · Module 1: Linear Programming & the Simplex Method · Builds on: [1.2 Vertices, bases & the fundamental theorem](01-02-vertices-bases-fundamental-theorem.md), [1.3 The simplex method](01-03-the-simplex-method.md) · Unlocks: [2.1 The LP dual & complementary slackness](02-01-lp-dual-complementary-slackness.md)

## Why this matters

[Lesson 1.3](01-03-the-simplex-method.md) gave you a working engine, but it started the car for you and promised the road always goes uphill. Both promises were conditional. Real LPs carry minimum-production contracts, blending requirements, and flow-balance equalities — constraints under which the origin isn't feasible, so there's no obvious vertex to start from. They also carry redundant constraints that pile onto one corner, making simplex take pivots that change nothing. This lesson supplies the missing half: how to *find* a starting vertex, how to know when there is none, and what to do when the algorithm stalls.

## The idea

**Gap 1: where do you start?** In 1.3 every constraint was $\le$ with a nonnegative right-hand side, so setting all decision variables to zero satisfied everything: the origin was a vertex, the slack variables formed a ready-made basis, and simplex could take it from there. Add one constraint like "produce at least 4 units" and that gift disappears. The fix is delightfully cheap: if you can't find a feasible point, *invent* one. Add a fake variable to each troublesome constraint that absorbs whatever shortfall exists, so the constraint is satisfied by fiat. Now you have a starting basis — of a **different, easier** problem. Then spend a first run of simplex driving those fake variables to zero. When they hit zero you are standing on a genuine vertex of the real problem, and you can start the real optimization. That's the **two-phase method**: Phase I finds a corner, Phase II walks it.

And if the fakes *refuse* to go to zero? Then no genuine feasible point exists. Phase I is not just an initializer — it is the standard infeasibility detector, and it returns a proof rather than a shrug.

**Gap 2: does every pivot help?** In 1.3, each pivot moved to a new vertex with a strictly better objective, which is why the method can't visit a vertex twice and must terminate. That argument breaks at a **degenerate** vertex — a corner where more constraints are tight than the two-dimensional (or $n$-dimensional) geometry requires. Three lines crossing at a single point in the plane is the picture. At such a corner, one basic variable sits at zero, several different bases describe the same point, and a pivot can swap bases without moving an inch. The objective stays put. Do that forever and you have **cycling**.

## The formal version

### The initialization problem, precisely

Take a constraint $x_1 + x_2 \ge 10$. In [1.1](01-01-formulating-linear-programs.md) you converted it to equality form by subtracting a **surplus variable** $s_1 \ge 0$:

$$x_1 + x_2 - s_1 = 10.$$

*In words: total output minus the amount by which you beat the requirement equals the requirement.* Set the decision variables to zero, as the origin start would: $s_1 = -10 < 0$, violating $s_1 \ge 0$. The surplus column is $-1$, not $+1$, so it cannot serve as a basis column with a nonnegative value. Same story with an equality constraint, which has no slack column at all. **You cannot read off a starting basis.**

### Phase I: artificial variables

For each constraint that lacks a usable basis column ($\ge$ and $=$ constraints), add an **artificial variable** $a_i \ge 0$:

$$x_1 + x_2 - s_1 + a_1 = 10.$$

Now $a_1 = 10$, $x = 0$, $s_1 = 0$ is a legal basic solution — of the *augmented* problem. It is not feasible for the original, and the size of $a_1$ measures exactly how badly it fails. So:

$$\boxed{\text{Phase I: } \min\; w_{\text{art}} = \sum_i a_i \quad \text{subject to the augmented constraints}, \; x, s, a \ge 0.}$$

*In words: make the lies as small as possible.* Since every $a_i \ge 0$, the minimum is $\ge 0$, and:

- **Minimum $= 0$.** Every artificial has been driven to zero, so the remaining values satisfy the original constraints. The final Phase I basis is a genuine basic feasible solution (BFS) of the original LP — exactly the object [1.2](01-02-vertices-bases-fundamental-theorem.md) says an optimum lives at. Discard the artificial columns and go to Phase II.
- **Minimum $> 0$.** No assignment of $x, s \ge 0$ makes all the artificials vanish, so **the original LP is infeasible** — and this is a proof, not a guess, because Phase I terminated at a *provable* minimum.

To keep 1.3's machinery untouched (we always maximize, and the entering column is the most negative row-0 entry), run Phase I as $\max\, w = -\sum_i a_i$. Minimizing the sum and maximizing its negative are the same thing; the target is now a ceiling, $w = 0$.

**The bookkeeping step everyone trips on.** The tableau's row 0 must express the objective in **nonbasic** variables only — a basic variable's column must read zero in row 0. The artificials start out *basic*, so writing $w + \sum_i a_i = 0$ is not yet a valid row 0. Substitute them out first. With one artificial, $a_1 = 10 - x_1 - x_2 + s_1$, so

$$w = -a_1 = -10 + x_1 + x_2 - s_1 \quad\Longleftrightarrow\quad w - x_1 - x_2 + s_1 = -10 .$$

Mechanically: **subtract each artificial's constraint row from row 0.** Skip this and the tableau claims you are already optimal at $w = 0$ while artificials still sit in the basis.

### Phase II

Delete the artificial columns (never let one back in), restore the true objective $z = c^Tx$, and clear row 0 the same way — add multiples of the constraint rows until every basic column reads zero. Then run simplex exactly as in [1.3](01-03-the-simplex-method.md).

### The Big-M alternative

Instead of two runs, keep the real objective and *tax* the artificials: maximize $c^Tx - M\sum_i a_i$ with $M$ a constant chosen huge relative to every $c_j$. Any solution with a positive artificial is penalized so heavily that simplex evicts artificials first, effectively doing Phase I and Phase II in one pass; if the final answer still has $a_i > 0$, the LP is infeasible. Honest drawback: **choosing $M$ is awkward** (too small and the penalty loses to the real objective, corrupting the answer; too large and $M$ swamps the genuine coefficients in floating-point arithmetic, so the differences that decide pivots are lost to roundoff — the cancellation problem of [`numerical-analysis` 1.2](../../numerical-analysis/lessons/01-02-cancellation-error-propagation.md)). That is why production codes prefer two-phase, where no magic constant is needed.

### What infeasibility looks like

Maximize $z = x_1 + x_2$ subject to $x_1 + x_2 \le 3$, $2x_1 + x_2 \ge 8$, $x \ge 0$. Augmented: $x_1 + x_2 + s_1 = 3$ and $2x_1 + x_2 - s_2 + a_1 = 8$, with row 0 for $w = -a_1$ obtained by subtracting the $a_1$ row:

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $a_1$ | RHS |
|---|---|---|---|---|---|---|
| $w$ | -2 | -1 | 0 | 1 | 0 | -8 |
| $s_1$ | 1 | 1 | 1 | 0 | 0 | 3 |
| $a_1$ | 2 | 1 | 0 | -1 | 1 | 8 |

Entering $x_1$ (row-0 entry $-2$); ratio test $3/1 = 3$ versus $8/2 = 4$, so $s_1$ leaves. Pivot on the $s_1$ row:

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $a_1$ | RHS |
|---|---|---|---|---|---|---|
| $w$ | 0 | 1 | 2 | 1 | 0 | -2 |
| $x_1$ | 1 | 1 | 1 | 0 | 0 | 3 |
| $a_1$ | 0 | -1 | -2 | -1 | 1 | 2 |

No negative entry in row 0: Phase I is optimal at $w = -2$, i.e. $\sum a_i = 2 > 0$. **Infeasible.** The $a_1$ row *is* the certificate: it says $a_1 = 2 + x_2 + 2s_1 + s_2$, and a sum of nonnegatives can never be $-2$, so $a_1 = 0$ is impossible. Translated back, it is the combination $2\times(\text{constraint 1}) - (\text{constraint 2})$: $2x_1 + 2x_2 \le 6$ while $2x_1 + x_2 \ge 8$ forces $x_2 \le -2$. This kind of "certificate of infeasibility" is a Farkas-type statement — the LP shadow of the separating hyperplane in [`convex-optimization` 1.1](../../convex-optimization/lessons/01-01-convex-sets-separating-hyperplane.md), and it reappears as a dual ray in [2.1](02-01-lp-dual-complementary-slackness.md).

### Degeneracy

**Definition.** A basic feasible solution is **degenerate** if some *basic* variable equals zero.

*In words: the basis carries a variable that isn't actually doing anything.* Geometrically, with $n$ decision variables a vertex is pinned down by $n$ tight constraints; degeneracy means **more than $n$ constraints are tight there**. In the plane: three lines through one point. Consequences:

1. **The ratio test ties.** Two rows achieve the minimum ratio; one leaves, and the other's basic variable lands at zero.
2. **A pivot may not improve anything.** If the minimum ratio is $0$, the entering variable enters at value zero: the basis changes but the point does not, and $z$ is unchanged. That is a **degenerate pivot**.
3. **Vertex $\leftrightarrow$ basis becomes many-to-one.** The clean correspondence from [1.2](01-02-vertices-bases-fundamental-theorem.md) breaks: several bases now describe the same geometric corner.

### Cycling and Bland's rule

The termination argument of [1.3](01-03-the-simplex-method.md) was "each pivot strictly improves $z$, and there are finitely many bases, so we stop." Degenerate pivots void it: a run of them can return to a basis already visited and loop forever — **cycling**. Facts, straight:

- Cycling is **possible**. Beale's classic 3-constraint, 7-variable example does it.
- Cycling is **extremely rare in practice**. Real codes see stalling (long runs of degenerate pivots) far more often than true cycles, and handle both by perturbing the right-hand side slightly or by switching pivot rules.
- **Bland's rule provably prevents it.** Among all eligible entering columns (negative row-0 entry), choose the one with the **smallest variable index**; if the ratio test ties, let the tied basic variable with the **smallest index** leave. Simplex with Bland's rule never cycles and therefore always terminates.
- **It is not the default**, because it is slow: always grabbing the lowest-indexed improving column ignores how *steep* that column is, so it typically needs many more pivots than Dantzig's most-negative rule. Codes run the fast rule and switch to Bland's only as an escape hatch after detecting a stall.

### Unboundedness, one more time

Closing the loop from 1.3: if the entering column has **no positive entry**, no basic variable ever hits zero as the entering variable grows, so nothing blocks it — the objective improves without limit and the LP is unbounded. Practically, an unbounded profit is almost always a **missing constraint**, not a business opportunity: you forgot a capacity, a market size, or a budget. Treat unboundedness as a modeling bug report.

## Picture

![Left panel a two-dimensional feasible region with the origin outside it because of a greater-or-equal constraint, with the Phase I move to the vertex 4,0 and the Phase II path to the optimum 3,4; right panel a degenerate vertex where three constraint lines meet at the point 2,2 with the redundant constraint highlighted](assets/01-04-fig1.svg)

## Worked examples

### Example 1 — a complete two-phase run

A shop makes two products with profit 4 and 3 (hundreds of dollars per unit). A standing contract requires at least 4 units total; machine time and finishing time are limited:

$$\max\; z = 4x_1 + 3x_2 \quad\text{s.t.}\quad x_1 + x_2 \ge 4,\;\; 2x_1 + x_2 \le 10,\;\; x_1 + 3x_2 \le 15,\;\; x \ge 0.$$

Augmented form — surplus $s_1$ and artificial $a_1$ on the contract row, slacks $s_2, s_3$ on the others:

$$x_1 + x_2 - s_1 + a_1 = 4, \qquad 2x_1 + x_2 + s_2 = 10, \qquad x_1 + 3x_2 + s_3 = 15.$$

**Phase I.** Basis $\{a_1, s_2, s_3\} = (4, 10, 15)$. Row 0 for $w = -a_1$ is (row 0) $-$ ($a_1$ row):

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | $a_1$ | RHS |
|---|---|---|---|---|---|---|---|
| $w$ | -1 | -1 | 1 | 0 | 0 | 0 | -4 |
| $a_1$ | 1 | 1 | -1 | 0 | 0 | 1 | 4 |
| $s_2$ | 2 | 1 | 0 | 1 | 0 | 0 | 10 |
| $s_3$ | 1 | 3 | 0 | 0 | 1 | 0 | 15 |

Row 0 ties at $-1$; take the smaller index, $x_1$. Ratios $4/1 = 4$, $10/2 = 5$, $15/1 = 15$, so $a_1$ leaves. Pivot on the $a_1$ row (pivot element 1):

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | $a_1$ | RHS |
|---|---|---|---|---|---|---|---|
| $w$ | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| $x_1$ | 1 | 1 | -1 | 0 | 0 | 1 | 4 |
| $s_2$ | 0 | -1 | 2 | 1 | 0 | -2 | 2 |
| $s_3$ | 0 | 2 | 1 | 0 | 1 | -1 | 11 |

$w = 0$ in one pivot. The BFS is $x = (4,0)$ with $s_2 = 2$, $s_3 = 11$ — check it against the *original* constraints: $4 + 0 = 4 \ge 4$ (tight, so $s_1 = 0$), $8 \le 10$ (slack 2), $4 \le 15$ (slack 11). A genuine vertex.

**Phase II.** Drop the $a_1$ column, restore $z = 4x_1 + 3x_2$, i.e. row 0 $= (-4, -3, 0, 0, 0 \mid 0)$. Since $x_1$ is basic, add $4\times$ its row to clear that column:

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
|---|---|---|---|---|---|---|
| $z$ | 0 | 1 | -4 | 0 | 0 | 16 |
| $x_1$ | 1 | 1 | -1 | 0 | 0 | 4 |
| $s_2$ | 0 | -1 | 2 | 1 | 0 | 2 |
| $s_3$ | 0 | 2 | 1 | 0 | 1 | 11 |

Entering $s_1$ ($-4$). Ratios: skip the $x_1$ row (entry $-1$); $2/2 = 1$ and $11/1 = 11$, so $s_2$ leaves. Pivot on element 2:

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
|---|---|---|---|---|---|---|
| $z$ | 0 | -1 | 0 | 2 | 0 | 20 |
| $x_1$ | 1 | 0.5 | 0 | 0.5 | 0 | 5 |
| $s_1$ | 0 | -0.5 | 1 | 0.5 | 0 | 1 |
| $s_3$ | 0 | 2.5 | 0 | -0.5 | 1 | 10 |

Now $x = (5,0)$, $z = 20$. Entering $x_2$ ($-1$). Ratios: $5/0.5 = 10$, skip the $s_1$ row, $10/2.5 = 4$ — so $s_3$ leaves. Pivot on element 2.5:

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
|---|---|---|---|---|---|---|
| $z$ | 0 | 0 | 0 | 1.8 | 0.4 | 24 |
| $x_1$ | 1 | 0 | 0 | 0.6 | -0.2 | 3 |
| $s_1$ | 0 | 0 | 1 | 0.4 | 0.2 | 3 |
| $x_2$ | 0 | 1 | 0 | -0.2 | 0.4 | 4 |

No negative row-0 entry: **optimal**, $x^* = (3,4)$, $z^* = 24$.

*Verification.* Feasibility in the **original** constraints: $3 + 4 = 7 \ge 4$ (surplus 3, matching the basic $s_1 = 3$); $2(3) + 4 = 10 \le 10$ (tight); $3 + 3(4) = 15 \le 15$ (tight). Optimality, two ways: (i) the five vertices of the region are $(4,0), (5,0), (3,4), (0,5), (0,4)$ with $z = 16, 20, 24, 15, 12$, so $24$ is the max; (ii) the row-0 slack entries give prices $y = (0, 1.8, 0.4)$, and $b^Ty = 4(0) + 10(1.8) + 15(0.4) = 24 = z^*$ — the dual objective matches, the certificate of [2.1](02-01-lp-dual-complementary-slackness.md).

### Example 2 — a degenerate vertex, a wasted pivot, and Bland's price

$$\max\; z = x_1 + 3x_2 \quad\text{s.t.}\quad x_1 + x_2 \le 4,\;\; x_1 \le 2,\;\; x_1 + 2x_2 \le 6,\;\; x \ge 0.$$

At $(2,2)$ all three constraints are tight — $4 \le 4$, $2 \le 2$, $6 \le 6$ — three lines through one point in the plane (panel (b) of the figure). The first constraint is in fact **redundant**: it is implied by the other two, and it touches the region only at that single corner. That is the usual source of degeneracy in practice: a constraint someone added "for safety" that happens to graze a vertex.

Run simplex with **Bland's rule** (smallest index) from the origin, basis $\{s_1, s_2, s_3\} = (4,2,6)$, row 0 $= (-1, -3, 0,0,0 \mid 0)$. Both $x_1$ and $x_2$ are eligible; Bland takes $x_1$. Ratios $4, 2, 6$, so $s_2$ leaves, landing at $(2,0)$ with $z = 2$. Now only $x_2$ is eligible, and its ratio test **ties**: $2/1$ in the $s_1$ row and $4/2$ in the $s_3$ row. Bland breaks the tie by smallest index, so $s_1$ leaves:

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
|---|---|---|---|---|---|---|
| $z$ | 0 | 0 | 3 | -2 | 0 | 8 |
| $x_2$ | 0 | 1 | 1 | -1 | 0 | 2 |
| $x_1$ | 1 | 0 | 0 | 1 | 0 | 2 |
| $s_3$ | 0 | 0 | -2 | 1 | 1 | **0** |

There it is: $s_3$ is **basic at zero** — a degenerate BFS at the point $(2,2)$, $z = 8$. Not optimal ($s_2$ has row-0 entry $-2$), so pivot: the $s_2$ column has positive entries in the $x_1$ row (ratio $2/1 = 2$) and the $s_3$ row (ratio $\mathbf{0/1 = 0}$). The minimum ratio is **zero**, so $s_2$ enters at value zero and $s_3$ leaves. The new basis is $\{x_1, x_2, s_2\}$ — and after the pivot $x_1 = 2$, $x_2 = 2$, $z = 8$. **Same point, same objective, different basis: a degenerate pivot.** Two bases, one vertex.

The run does finish: the next pivot brings in $s_1$, $x_1$ leaves, and we land at $(0,3)$ with $z = 9$, where row 0 is $(0.5, 0, 0, 0, 1.5 \mid 9)$ — all nonnegative, optimal. *Verification:* vertices $(0,0), (2,0), (2,2), (0,3)$ give $z = 0, 2, 8, 9$, so $z^* = 9$ at $(0,3)$.

Total: four pivots, one of them pure overhead. Dantzig's most-negative rule would have entered $x_2$ first (row-0 entry $-3$ beats $-1$) and reached $(0,3)$ in **one** pivot. That is Bland's rule in a nutshell — guaranteed to terminate, in no hurry to do it.

## Watch out

- **You might think a positive Phase I optimum means "the LP is unbounded" or "I pivoted wrong."** It means **infeasible**, full stop — and only if you actually reached the Phase I optimum. A positive $\sum a_i$ *mid-run* means nothing; keep pivoting.
- **You might let an artificial variable back into the basis in Phase II.** Don't — delete the columns outright. An artificial re-entering at a positive value silently returns you to a point that violates the original constraints.
- **You might read a degenerate optimum as "the answer is wrong."** A basic variable at zero is a perfectly valid optimal solution; it just means the corner is over-determined. What it *does* signal is trouble ahead for [2.2](02-02-shadow-prices-sensitivity.md): at a degenerate optimum the shadow prices are not unique, because different optimal bases give different prices.

## One-liner

> When the origin isn't feasible, buy a starting corner with artificial variables and pay for them in Phase I — a zero bill means you have a vertex, a positive bill is a proof of infeasibility; and when too many constraints crowd one corner, expect pivots that move the basis but not the point.

## Problems

**P1 (🟢)** For

$$\max\; z = 2x_1 + 5x_2 \quad\text{s.t.}\quad x_1 + x_2 \ge 3,\;\; 2x_1 + x_2 = 8,\;\; x_1 + 4x_2 \le 20,\;\; x \ge 0,$$

(a) write the augmented form, adding surplus, slack, and artificial variables only where needed, and state the starting basis; (b) write the Phase I objective in terms of the nonbasic variables; (c) name the first entering variable and the row that leaves.

**P2 (🟡)** For $\max z = 2x_1 + x_2$ subject to $x_1 + x_2 \le 5$, $x_1 \le 3$, $x_1 + 2x_2 \le 7$, $x \ge 0$: (a) show that $(3,2)$ is a degenerate BFS by counting tight constraints; (b) starting at the origin with the most-negative rule, show that the second ratio test ties, and give the *two* bases that describe $(3,2)$; (c) does a degenerate pivot ever decrease the objective?

**P3 (🔴)** Run Phase I on $\max z = x_1 + x_2$ subject to $x_1 + 2x_2 \ge 14$, $2x_1 + x_2 \le 6$, $x \ge 0$. State the conclusion, and turn the final tableau row into a one-line proof that needs no tableau.

<details>
<summary>Solutions</summary>

**P1** (a) The $\ge$ row needs a surplus $s_1$ *and* an artificial $a_1$; the equality row has no slack column at all, so it needs an artificial $a_2$; the $\le$ row's slack $s_3$ is already a fine basis column and needs no artificial:

$$x_1 + x_2 - s_1 + a_1 = 3, \qquad 2x_1 + x_2 + a_2 = 8, \qquad x_1 + 4x_2 + s_3 = 20 .$$

Starting basis $\{a_1, a_2, s_3\} = (3, 8, 20)$, with $x_1 = x_2 = s_1 = 0$.

(b) $w_{\text{art}} = a_1 + a_2$, and both are basic, so substitute them out using their rows: $a_1 = 3 - x_1 - x_2 + s_1$ and $a_2 = 8 - 2x_1 - x_2$. Hence

$$w_{\text{art}} = 11 - 3x_1 - 2x_2 + s_1 .$$

(Equivalently, in the maximize convention, $w = -w_{\text{art}} = -11 + 3x_1 + 2x_2 - s_1$, so row 0 is $(-3, -2, 1, 0, 0, 0 \mid -11)$ over the columns $x_1, x_2, s_1, a_1, a_2, s_3$ — obtained by subtracting *both* artificial rows from $w + a_1 + a_2 = 0$.)

(c) Minimizing $w_{\text{art}}$, the coefficient $-3$ on $x_1$ is the most negative, so **$x_1$ enters**. Ratio test on the $x_1$ column: $3/1 = 3$, $8/2 = 4$, $20/1 = 20$. The minimum is 3, so the **first row leaves and $a_1$ exits the basis** — one artificial gone in one pivot.

*Check.* Two artificials means $w_{\text{art}}$ starts at $3 + 8 = 11$, matching the constant in (b).

**P2** (a) At $(3,2)$: $x_1 + x_2 = 5$ (tight), $x_1 = 3$ (tight), $x_1 + 2x_2 = 7$ (tight). Three tight constraints in a 2-variable problem, where two suffice to pin a vertex, so the vertex is degenerate: in the augmented problem $s_1 = s_2 = s_3 = 0$, and since the basis holds three variables, at least one basic variable must be zero.

(b) Start at the origin, basis $\{s_1, s_2, s_3\} = (5,3,7)$, row 0 $= (-2,-1,0,0,0 \mid 0)$. Most negative is $-2$, so $x_1$ enters; ratios $5/1 = 5$, $3/1 = 3$, $7/1 = 7$ give $s_2$ leaving. At $(3,0)$ the rows read $x_1 = 3 - s_2$, $s_1 = 2 - x_2 + s_2$, $s_3 = 4 - 2x_2 + s_2$, and $z = 6 + x_2 - 2s_2$, so $x_2$ enters. Its ratio test is $2/1 = 2$ in the $s_1$ row and $4/2 = 2$ in the $s_3$ row — **a tie**, the signature of a degenerate vertex ahead. Whichever leaves, the point is $(3,2)$:

- $s_1$ leaves $\Rightarrow$ basis $\{x_1, x_2, s_3\}$ with $s_3 = 0$;
- $s_3$ leaves $\Rightarrow$ basis $\{x_1, x_2, s_1\}$ with $s_1 = 0$.

Two bases, one vertex — the many-to-one correspondence of a degenerate point. (Both give $z = 2(3) + 2 = 8$, which is optimal: the vertices $(0,0), (3,0), (3,2), (0,3.5)$ give $z = 0, 6, 8, 3.5$.)

(c) No. The entering variable is only ever chosen from columns that improve $z$, and it enters at a value $\ge 0$; a degenerate pivot is the boundary case where that value is exactly 0, so $z$ stays **equal**. It never decreases — which is precisely why cycling, not divergence, is the failure mode.

**P3** Augmented: $x_1 + 2x_2 - s_1 + a_1 = 14$ and $2x_1 + x_2 + s_2 = 6$. Basis $\{a_1, s_2\} = (14, 6)$, and $w = -a_1 = -14 + x_1 + 2x_2 - s_1$, so row 0 is $(-1, -2, 1, 0, 0 \mid -14)$ over $x_1, x_2, s_1, s_2, a_1$:

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $a_1$ | RHS |
|---|---|---|---|---|---|---|
| $w$ | -1 | -2 | 1 | 0 | 0 | -14 |
| $a_1$ | 1 | 2 | -1 | 0 | 1 | 14 |
| $s_2$ | 2 | 1 | 0 | 1 | 0 | 6 |

Entering $x_2$ ($-2$); ratios $14/2 = 7$ and $6/1 = 6$, so $s_2$ leaves. Pivot on that row:

| basis | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $a_1$ | RHS |
|---|---|---|---|---|---|---|
| $w$ | 3 | 0 | 1 | 2 | 0 | -2 |
| $a_1$ | -3 | 0 | -1 | -2 | 1 | 2 |
| $x_2$ | 2 | 1 | 0 | 1 | 0 | 6 |

Row 0 has no negative entry, so Phase I is optimal at $w = -2$, i.e. $\min \sum a_i = 2 > 0$: **the LP is infeasible.**

The proof, read off the $a_1$ row: $a_1 = 2 + 3x_1 + s_1 + 2s_2 \ge 2$ for all nonnegative values, so $a_1 = 0$ is unreachable. Without tableaus: $x_1 \ge 0$ and $2x_1 + x_2 \le 6$ give $x_1 + 2x_2 \le 4x_1 + 2x_2 = 2(2x_1 + x_2) \le 12 < 14$. No feasible point exists.

</details>

## Flashback

**From Lesson 1.3 (The simplex method)** — fresh variant, a single pivot rather than a full run. For

$$\max\; z = 5x_1 + 4x_2 \quad\text{s.t.}\quad 6x_1 + 4x_2 \le 24,\;\; x_1 + 2x_2 \le 6,\;\; x \ge 0,$$

start at the origin and perform **one** pivot: name the entering and leaving variables with their ratio test, give the new vertex and objective value, and say whether it is optimal.

<details>
<summary>Solution</summary>

Both constraints are $\le$ with nonnegative right-hand sides, so the origin *is* feasible here (no Phase I needed) — slacks $s_1 = 24$, $s_2 = 6$ form the starting basis and row 0 is $(-5, -4, 0, 0 \mid 0)$.

**Entering:** the most negative row-0 entry is $-5$, so $x_1$ enters (each unit of $x_1$ adds 5 to $z$).

**Ratio test:** $24/6 = 4$ in the $s_1$ row, $6/1 = 6$ in the $s_2$ row. The minimum is 4, so **$s_1$ leaves** — constraint 1 becomes binding first.

**Pivot** on the element 6. The $s_1$ row becomes $x_1 + \tfrac23 x_2 + \tfrac16 s_1 = 4$; subtracting it from the $s_2$ row gives $\tfrac43 x_2 - \tfrac16 s_1 + s_2 = 2$; and row 0 becomes $(0, -\tfrac23, \tfrac56, 0 \mid 20)$.

**New vertex** $x = (4, 0)$ with $z = 20$. Check: $6(4) = 24 \le 24$ (tight, $s_1 = 0$) and $4 \le 6$ (slack $s_2 = 2$, matching the tableau).

**Not optimal:** row 0 still carries $-\tfrac23$ under $x_2$, so trading a unit of $x_1$ for $x_2$ along the binding edge still pays. (Continuing: $x_2$ enters, ratios $4/(2/3) = 6$ versus $2/(4/3) = 1.5$, so $s_2$ leaves and the optimum is $x^* = (3, 1.5)$ with $z^* = 21$.)

</details>

## Connections

- **Backward:** Phase I's success condition is [1.2](01-02-vertices-bases-fundamental-theorem.md)'s fundamental theorem doing its job — it hands you a *basic* feasible solution, i.e. a vertex, which is where the optimum has to live. Degeneracy is the fine print on that lesson's vertex–basis dictionary, and the surplus/artificial bookkeeping is [1.1](01-01-formulating-linear-programs.md)'s standard-form conversion carried to its conclusion.
- **Forward:** [2.1](02-01-lp-dual-complementary-slackness.md) turns the infeasibility certificate you just read off a tableau row into the dual's version of the same statement, and [2.2](02-02-shadow-prices-sensitivity.md) inherits the degeneracy warning — degenerate optima have non-unique shadow prices, so a "resource worth 0 dollars" may be worth plenty on the other side. Branch-and-bound in [3.2](03-02-branch-and-bound-cutting-planes.md) leans on Phase I constantly: pruning a node "by infeasibility" *is* a Phase I that ended positive.
- **Sideways:** the Big-M trade-off is a floating-point story — mixing a huge $M$ with ordinary coefficients destroys precision exactly as in [`numerical-analysis` 1.2](../../numerical-analysis/lessons/01-02-cancellation-error-propagation.md). And the infeasibility certificate is the linear-programming face of the separating-hyperplane theorem in [`convex-optimization` 1.1](../../convex-optimization/lessons/01-01-convex-sets-separating-hyperplane.md): if a point is not in a convex set, something separates it, and here that something is a nonnegative combination of your own constraints.
