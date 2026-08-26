# Operations Research · Lesson 1.3: The simplex method

> ⏱ ~15 min · Module 1: Linear Programming & the Simplex Method · Builds on: [1.2 Vertices, bases & the fundamental theorem](01-02-vertices-bases-fundamental-theorem.md), [`convex-optimization` 2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md), [`linalg-refresher` 1.3](../../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md) · Unlocks: [1.4 Initialization, degeneracy & cycling](01-04-initialization-degeneracy-cycling.md)

## Why this matters

[1.2](01-02-vertices-bases-fundamental-theorem.md) proved that an optimal LP solution sits at a **vertex**, and that there are only finitely many. That is a theorem, not an algorithm: a problem with $n$ variables and $m$ constraints has up to $\binom{n+m}{m}$ bases, which for a modest 50-variable, 50-constraint model is about $10^{29}$ — you will not be enumerating those. The simplex method is the fix, and it is the one genuinely OR-native algorithm in this library: [`convex-optimization`](../../convex-optimization/syllabus.md) teaches interior-point methods, not this. Everything in Module 2 — duals, shadow prices, sensitivity ranging — is read straight off the final simplex tableau, so this lesson is the machine the rest of the course reads output from.

## The idea

Stand at a vertex of the feasible polytope. Look at the edges leaving it. Walk down whichever edge makes the objective go up. Arrive at the next vertex. Repeat. Stop when every edge leaving your current vertex makes things worse or stays flat.

That is the whole algorithm. Two things make it work rather than merely sound plausible.

**First, "adjacent" is cheap in algebra.** A vertex is a **basic feasible solution** ([1.2](01-02-vertices-bases-fundamental-theorem.md)): pick $m$ of the variables to be **basic**, force the other $n$ to zero (**nonbasic**), and solve. Two vertices are adjacent — joined by an edge of the polytope — exactly when their bases differ in **one** variable. So "slide along an edge" and "swap one variable into the basis and one out" are the same move seen from two sides. That move is called a **pivot**, and it costs one round of Gauss–Jordan elimination.

**Second, local means global.** Normally "no better neighbour" would only tell you you are at a local optimum. But an LP is a convex problem — linear objective, polyhedral feasible set — and for convex problems every local optimum is global. That is [`convex-optimization` 2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md), and we cite it rather than reprove it. It is what upgrades simplex from a hill-climbing heuristic into an exact method with a certificate.

So the design question is only: at a given vertex, which edge goes up, and how far can I walk before I fall off the polytope? Those are the **optimality test** and the **ratio test**.

## The formal version

Work in slack form from [1.1](01-01-formulating-linear-programs.md): maximize $c^Tx$ subject to $Ax + s = b$, $x, s \ge 0$, with $m$ constraints. Call the full variable list $x_1,\dots,x_n,s_1,\dots,s_m$. A basis $B$ is a choice of $m$ of them; $N$ is the rest, all set to zero.

### The convention — stated once, held for the whole course

Write the objective row as an equation in $z$:

$$z \;-\; \sum_{j} \bar{c}_j\, x_j \;=\; z_0 .$$

The number **stored in the tableau's $z$ row** under column $j$ is therefore $-\bar{c}_j$, and the number stored at the right end is the current objective value $z_0$.

*In words: the $z$ row holds minus the reduced costs. A **negative** entry is an opportunity.*

That sign flip is where readers get lost, so fix it with one sentence and never revisit it: **negative in the $z$ row means "increasing this variable raises $z$."** Basic variables always show $0$ there.

### 1. Reduced costs and the optimality test

The **reduced cost** $\bar{c}_j$ is the rate at which $z$ improves per unit increase of the nonbasic variable $x_j$, *after* the basic variables readjust to keep $Ax + s = b$ satisfied. Formally, with $A_B$ the $m \times m$ matrix of basic columns (invertible — see [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md)) and $c_B$ the matching objective coefficients,

$$\bar{c}_j \;=\; c_j \;-\; c_B^T A_B^{-1} A_j .$$

*In words: the direct gain from one unit of $x_j$, minus what that unit costs you in displaced basic variables.* You will never compute this by hand — Gauss–Jordan on the tableau maintains it for you.

> **Optimality test.** If every $z$-row entry is $\ge 0$ (equivalently, every $\bar{c}_j \le 0$), the current basic feasible solution is **optimal**. Otherwise, choose any column with a negative $z$-row entry as the **entering variable**. Dantzig's rule: take the most negative.

Why it certifies optimality: with all $\bar{c}_j \le 0$, moving any nonbasic variable off zero can only lower $z$. That is a local statement, and convexity ([`convex-optimization` 2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md)) makes it global.

### 2. The ratio test — who leaves

Say $x_q$ enters and we push it from $0$ up to $t \ge 0$. In tableau row $i$, whose basic variable currently sits at $b_i$ and whose entry in column $q$ is $a_{iq}$, that basic variable becomes

$$b_i - a_{iq}\, t .$$

*In words: every unit of $x_q$ eats $a_{iq}$ units of row $i$'s basic variable.*

If $a_{iq} \le 0$ the basic variable stays put or **grows** — that row never blocks you. Only rows with $a_{iq} > 0$ shrink, and the first one to hit zero stops you:

$$\boxed{\,t^* \;=\; \min_{\,i\,:\,a_{iq} > 0} \frac{b_i}{a_{iq}}\,}$$

The minimizing row $r$ is the **pivot row**; its basic variable is the **leaving variable**; $a_{rq}$ is the **pivot element**. The objective climbs by $\bar{c}_q \, t^*$.

> **Unboundedness.** If **no** entry in column $q$ is positive, nothing ever blocks you: $x_q$ increases forever, feasibility holds forever, and $z \to +\infty$. The LP is **unbounded** — stop and report it.

### 3. The pivot — Gauss–Jordan on one column

Make column $q$ into a unit vector with $1$ in row $r$:

1. **Pivot row:** divide row $r$ through by $a_{rq}$.
2. **Every other row $i$, including the $z$ row:** replace row $i$ by $\text{row}_i - a_{iq} \times (\text{new row } r)$.

Relabel row $r$'s basic variable as $x_q$. You are at the adjacent vertex, and the tableau's $z$ row now holds the reduced costs for the *new* basis for free. That is the real reason for the tableau format.

### Why it stops, and how fast

Each pivot strictly increases $z$ whenever $t^* > 0$. A strictly increasing objective can never revisit a basis, and there are finitely many bases, so the method terminates. **The caveat is immediate:** if some basic variable is already at zero — a **degenerate** basic feasible solution — then $t^*$ can be $0$, the pivot changes the basis but not the point, $z$ does not move, and the argument collapses. Simplex can in principle **cycle** forever. [1.4](01-04-initialization-degeneracy-cycling.md) handles that (Bland's rule), along with the other loose end: how to find a starting vertex when the origin is not feasible.

Complexity, honestly: simplex is **exponential in the worst case** — Klee–Minty constructed deformed cubes in $n$ variables where Dantzig's rule marches through all $2^n$ vertices — yet in practice it is famously fast, typically taking a small multiple of $m$ pivots. Interior-point methods are provably polynomial and are what large modern solvers often reach for on huge sparse models; see [`convex-optimization` 4.3](../../convex-optimization/lessons/04-03-barrier-interior-point.md). Good solvers ship both and pick.

## Picture

![Wyndor feasible polygon with the three constraint lines dashed, the feasible region shaded, and a coral two-arrow simplex path from the origin up to the vertex 0 comma 6 and then right to the optimum 2 comma 6, each visited vertex labelled with its basis and objective value](assets/01-03-fig1.svg)

## Worked examples

### Example 1 — a complete simplex run on Wyndor

$$\max\; z = 3x_1 + 5x_2 \quad \text{s.t.} \quad x_1 \le 4,\;\; 2x_2 \le 12,\;\; 3x_1 + 2x_2 \le 18,\;\; x \ge 0,$$

with $z$ in thousands of dollars per week. Slack form: $x_1 + s_1 = 4$, $2x_2 + s_2 = 12$, $3x_1 + 2x_2 + s_3 = 18$.

The origin is feasible, so start with basis $\{s_1, s_2, s_3\}$ — that is the vertex $(0,0)$, with $s = (4,12,18)$ and $z = 0$.

**Tableau 0.**

| Basic | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
|---|---|---|---|---|---|---|
| $z$ | $-3$ | $-5$ | 0 | 0 | 0 | 0 |
| $s_1$ | 1 | 0 | 1 | 0 | 0 | 4 |
| $s_2$ | 0 | **2** | 0 | 1 | 0 | 12 |
| $s_3$ | 3 | 2 | 0 | 0 | 1 | 18 |

**Iteration 1.**
*Entering:* the $z$ row has two negative entries, $-3$ and $-5$. Most negative is $-5$, so $x_2$ enters ($\bar{c}_2 = 5$: each unit of $x_2$ is worth 5).
*Ratio test on column $x_2$:* row $s_1$ has $a = 0$ — not positive, skipped, $s_1$ never blocks. Row $s_2$: $12/2 = 6$. Row $s_3$: $18/2 = 9$. Minimum is $6$, so **$s_2$ leaves** and the **pivot element is $2$** in row $s_2$.
*Pivot:* divide row $s_2$ by 2 to get $(0,\,1,\,0,\,\tfrac12,\,0 \mid 6)$. Then row $s_3 \leftarrow$ row $s_3 - 2\times$ that; row $s_1$ is unchanged ($a = 0$); $z$ row $\leftarrow z$ row $-(-5)\times$ that, i.e. add $5\times$.

**Tableau 1.**

| Basic | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
|---|---|---|---|---|---|---|
| $z$ | $-3$ | 0 | 0 | $5/2$ | 0 | 30 |
| $s_1$ | 1 | 0 | 1 | 0 | 0 | 4 |
| $x_2$ | 0 | 1 | 0 | $1/2$ | 0 | 6 |
| $s_3$ | **3** | 0 | 0 | $-1$ | 1 | 6 |

New basic solution: $x = (0,6)$, $s = (4,0,6)$, $z = 30$. Sanity: $3(0) + 5(6) = 30$; constraint 2 is now binding ($s_2 = 0$), which is exactly the geometric statement that we walked up the $x_2$ axis until we hit the line $2x_2 = 12$.

**Iteration 2.**
*Entering:* only $-3$ is negative, so $x_1$ enters ($\bar{c}_1 = 3$).
*Ratio test on column $x_1$:* row $s_1$: $4/1 = 4$. Row $x_2$: $a = 0$, skipped. Row $s_3$: $6/3 = 2$. Minimum is $2$, so **$s_3$ leaves** and the **pivot element is $3$**.
*Pivot:* divide row $s_3$ by 3 to get $(1,\,0,\,0,\,-\tfrac13,\,\tfrac13 \mid 2)$. Then row $s_1 \leftarrow$ row $s_1 - 1\times$ that; row $x_2$ unchanged; $z$ row $\leftarrow z$ row $+\,3\times$ that.

**Tableau 2.**

| Basic | $x_1$ | $x_2$ | $s_1$ | $s_2$ | $s_3$ | RHS |
|---|---|---|---|---|---|---|
| $z$ | 0 | 0 | 0 | $3/2$ | 1 | 36 |
| $s_1$ | 0 | 0 | 1 | $1/3$ | $-1/3$ | 2 |
| $x_2$ | 0 | 1 | 0 | $1/2$ | 0 | 6 |
| $x_1$ | 1 | 0 | 0 | $-1/3$ | $1/3$ | 2 |

Every $z$-row entry is $\ge 0$, so no reduced cost is still favourable: **optimal.**

$$x^* = (2,6), \qquad z^* = 36, \qquad \text{basis } \{x_1, x_2, s_1\}.$$

**Verification, three ways.** (i) Feasibility: $x_1 = 2 \le 4$ with slack $2$, matching $s_1 = 2$; $2x_2 = 12 \le 12$, binding, $s_2 = 0$; $3(2) + 2(6) = 18 \le 18$, binding, $s_3 = 0$. All variables $\ge 0$. (ii) Objective: $3(2) + 5(6) = 6 + 30 = 36$, matching the RHS of the $z$ row. (iii) **Cross-check against [1.2](01-02-vertices-bases-fundamental-theorem.md):** that lesson enumerated the polygon's vertices as $(0,0), (4,0), (4,3), (2,6), (0,6)$ with objective values $0, 12, 27, 36, 30$ — the largest is $36$ at $(2,6)$, exactly what simplex returned. I ran that enumeration and it agrees. Note also that both vertices simplex visited, $(0,0)$ and $(0,6)$, are on that list, and that it reached the answer in two pivots while never looking at $(4,0)$ or $(4,3)$ — out of $\binom{5}{3} = 10$ candidate bases.

### Example 2 — reading the final tableau, which is the actual point

A solver would have handed you $x^* = (2,6)$ in microseconds. What you cannot get without understanding the tableau is everything *else* sitting in it:

- **Which constraints bind.** $s_2 = s_3 = 0$: the batch oven (constraint 2) and the assembly line (constraint 3) are the bottlenecks. $s_1 = 2$ means constraint 1 has two units of headroom — buying more of *that* resource is worth exactly nothing.
- **What each bottleneck is worth.** The final $z$-row entries under the slack columns are $(0, \tfrac32, 1)$. Those are the **shadow prices**: one more unit of constraint 2's right-hand side is worth 1.5 thousand dollars, one more of constraint 3 is worth 1 thousand, and one more of constraint 1 is worth zero. Module 2 shows why the numbers land there ([2.1](02-01-lp-dual-complementary-slackness.md), [2.2](02-02-shadow-prices-sensitivity.md)) — the syllabus's Boss Problem 2 asks you to reproduce $y = (0, \tfrac32, 1)$ from duality alone and get the same 36.
- **How far you can trust them.** The tableau columns are also what sensitivity ranging chews on.

**A practical note.** Nobody runs simplex by hand on a real problem; a laptop solves models with a million columns. Hand-execution is a *comprehension* exercise: it makes reduced costs, binding constraints, and "the basis" into objects you can point at rather than words in a solver's log. That is exactly the vocabulary you need to read solver output, to debug a model that returns something absurd, and to follow duality and sensitivity in Module 2.

## Watch out

- **You might think a negative $z$-row entry is bad news.** Under this convention it is the opposite: the $z$ row stores $-\bar{c}_j$, so negative means "push this variable up." If you flip to a convention that stores $\bar{c}_j$ directly, or convert your max to a min, every sign in the optimality test flips too. Pick one convention and hold it — this course holds the one above.
- **You might run the ratio test over all rows.** Only rows with a **strictly positive** entry in the entering column count. A zero or negative entry means that row's basic variable doesn't shrink as the entering variable grows, so it cannot block; including it produces a meaningless or negative ratio and a leaving variable that goes infeasible. And if *no* entry is positive, the answer is not "pick the least bad row" — it is "the LP is unbounded."
- **You might forget the $z$ row during the pivot.** It is a row of the system like any other and must be eliminated too. Skip it once and every subsequent optimality test is wrong while the constraint rows still look perfectly healthy.

## One-liner

> Simplex hops vertex to vertex along polytope edges — a negative $z$-row entry picks the edge, the minimum ratio picks how far, Gauss–Jordan does the hop — and stops when no edge climbs, which convexity promotes from local to global.

## Problems

**P1 (🟢)** A max-LP in this course's convention has reached this tableau:

| Basic | $x_1$ | $x_2$ | $x_3$ | $s_1$ | $s_2$ | RHS |
|---|---|---|---|---|---|---|
| $z$ | 0 | $-2$ | 4 | 3 | 0 | 26 |
| $x_1$ | 1 | 3 | $-1$ | 1 | 0 | 6 |
| $s_2$ | 0 | $-2$ | 5 | 2 | 1 | 10 |

Is it optimal? If not: which variable enters, which leaves, what is the pivot element, and what will the new objective value be? (Answer the last part without doing the pivot.)

**P2 (🟡)** Run simplex to completion on

$$\max\; z = 5x_1 + 4x_2 \quad \text{s.t.} \quad 6x_1 + 4x_2 \le 24,\;\; x_1 + 2x_2 \le 6,\;\; x \ge 0 .$$

Show every tableau, name the entering and leaving variable and the pivot element at each iteration, and report $x^*$, $z^*$, and the final basis. Then verify the optimum by checking feasibility, recomputing $z$ from $x^*$, and enumerating the polygon's vertices.

**P3 (🔴)** Run simplex on

$$\max\; z = x_1 + x_2 \quad \text{s.t.} \quad -x_1 + x_2 \le 1,\;\; x_1 - 2x_2 \le 2,\;\; x \ge 0 .$$

Something goes wrong at the second iteration. Say precisely what the tableau is telling you, and exhibit a family of feasible points whose objective value grows without bound.

<details>
<summary>Solutions</summary>

**P1** Not optimal: the $z$ row contains a negative entry, $-2$ under $x_2$. (The $4$ under $x_3$ and $3$ under $s_1$ are positive — increasing those variables would *lower* $z$.)

*Entering:* $x_2$, the only favourable column, with $\bar{c}_2 = 2$.

*Ratio test on column $x_2$:* row $x_1$ has entry $3 > 0$, ratio $6/3 = 2$. Row $s_2$ has entry $-2$, not positive, skipped — as $x_2$ grows, $s_2 = 10 + 2x_2$ grows too, so it never blocks. Only one candidate, so the minimum is $t^* = 2$.

*Leaving:* $x_1$ (the basic variable of the pivot row). *Pivot element:* $3$.

*New objective:* $z$ climbs by $\bar{c}_2 \, t^* = 2 \times 2 = 4$, from $26$ to $\boxed{30}$.

*Check.* At $t^* = 2$, row $x_1$'s basic variable becomes $6 - 3(2) = 0$ — it hits zero exactly, confirming it is the blocker — and $s_2$ becomes $10 - (-2)(2) = 14 \ge 0$, still feasible.

**P2** Slack form: $6x_1 + 4x_2 + s_1 = 24$, $x_1 + 2x_2 + s_2 = 6$. Origin feasible, basis $\{s_1, s_2\}$.

**Tableau 0** ($x = (0,0)$, $z = 0$):

| Basic | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
|---|---|---|---|---|---|
| $z$ | $-5$ | $-4$ | 0 | 0 | 0 |
| $s_1$ | **6** | 4 | 1 | 0 | 24 |
| $s_2$ | 1 | 2 | 0 | 1 | 6 |

*Iteration 1.* Most negative is $-5$: **$x_1$ enters**. Ratios: $24/6 = 4$ and $6/1 = 6$; minimum $4$, so **$s_1$ leaves**, **pivot element 6**. Divide row $s_1$ by 6 to get $(1,\,\tfrac23,\,\tfrac16,\,0 \mid 4)$; then row $s_2 \leftarrow$ row $s_2 - 1\times$ that, and $z$ row $\leftarrow z$ row $+\,5\times$ that.

**Tableau 1** ($x = (4,0)$, $s = (0,2)$, $z = 20$):

| Basic | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
|---|---|---|---|---|---|
| $z$ | 0 | $-2/3$ | $5/6$ | 0 | 20 |
| $x_1$ | 1 | $2/3$ | $1/6$ | 0 | 4 |
| $s_2$ | 0 | **4/3** | $-1/6$ | 1 | 2 |

*Iteration 2.* Only $-\tfrac23$ is negative: **$x_2$ enters** ($\bar{c}_2 = \tfrac23$). Ratios: row $x_1$: $4 \div \tfrac23 = 6$; row $s_2$: $2 \div \tfrac43 = \tfrac32$. Minimum $\tfrac32$, so **$s_2$ leaves**, **pivot element $\tfrac43$**. Divide row $s_2$ by $\tfrac43$ to get $(0,\,1,\,-\tfrac18,\,\tfrac34 \mid \tfrac32)$; then row $x_1 \leftarrow$ row $x_1 - \tfrac23\times$ that, and $z$ row $\leftarrow z$ row $+\,\tfrac23\times$ that.

**Tableau 2:**

| Basic | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
|---|---|---|---|---|---|
| $z$ | 0 | 0 | $3/4$ | $1/2$ | 21 |
| $x_1$ | 1 | 0 | $1/4$ | $-1/2$ | 3 |
| $x_2$ | 0 | 1 | $-1/8$ | $3/4$ | $3/2$ |

All $z$-row entries $\ge 0$: **optimal.** $x^* = (3, \tfrac32)$, $z^* = 21$, basis $\{x_1, x_2\}$ (both slacks nonbasic, so both constraints bind).

*Verification.* Feasibility: $6(3) + 4(1.5) = 18 + 6 = 24 \le 24$ (binding, $s_1 = 0$); $3 + 2(1.5) = 6 \le 6$ (binding, $s_2 = 0$); both variables $\ge 0$. Objective: $5(3) + 4(1.5) = 15 + 6 = 21$, matching the $z$-row RHS. Vertex enumeration: the polygon has corners $(0,0)$ with $z = 0$, $(4,0)$ with $z = 20$, $(0,3)$ with $z = 12$, and the intersection of the two constraint lines, $(3, \tfrac32)$, with $z = 21$ — the largest, and it is where simplex landed. Also note the $z$-row $\ge 0$ check *is* the "no reduced cost is still favourable" test, so optimality is certified, not just observed.

**P3** Slack form: $-x_1 + x_2 + s_1 = 1$, $x_1 - 2x_2 + s_2 = 2$. Origin feasible.

**Tableau 0** ($x = (0,0)$, $z = 0$):

| Basic | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
|---|---|---|---|---|---|
| $z$ | $-1$ | $-1$ | 0 | 0 | 0 |
| $s_1$ | $-1$ | 1 | 1 | 0 | 1 |
| $s_2$ | **1** | $-2$ | 0 | 1 | 2 |

*Iteration 1.* The $z$ row ties at $-1$; break it by lowest index, so **$x_1$ enters**. Ratios on column $x_1$: row $s_1$ has $-1$, not positive, skipped; row $s_2$ gives $2/1 = 2$. So **$s_2$ leaves**, **pivot element 1**. Row $s_2$ is already divided; row $s_1 \leftarrow$ row $s_1 + 1\times$ it; $z$ row $\leftarrow z$ row $+\,1\times$ it.

**Tableau 1** ($x = (2,0)$, $s = (3,0)$, $z = 2$):

| Basic | $x_1$ | $x_2$ | $s_1$ | $s_2$ | RHS |
|---|---|---|---|---|---|
| $z$ | 0 | $-3$ | 0 | 1 | 2 |
| $s_1$ | 0 | $-1$ | 1 | 1 | 3 |
| $x_1$ | 1 | $-2$ | 0 | 1 | 2 |

*Iteration 2.* $x_2$ enters ($-3$ in the $z$ row, $\bar{c}_2 = 3$). Ratio test on column $x_2$: the entries are $-1$ and $-2$. **No entry is positive**, so no basic variable ever decreases as $x_2$ grows — nothing blocks. **The LP is unbounded**; there is no optimal solution and no leaving variable to choose. Stop.

*The unbounded ray.* Push $x_2 = t \ge 0$ and let the tableau update the basics: $x_1 = 2 + 2t$ and $s_1 = 3 + t$, both $\ge 0$ for every $t \ge 0$. So the family is

$$x(t) = (2 + 2t,\; t), \qquad t \ge 0 .$$

*Check directly against the original constraints.* Constraint 1: $-(2 + 2t) + t = -2 - t \le 1$ for all $t \ge 0$. Constraint 2: $(2 + 2t) - 2t = 2 \le 2$, satisfied with equality for every $t$. Nonnegativity holds. Objective: $z = (2 + 2t) + t = 2 + 3t \to \infty$ — and the rate $3$ is exactly $\bar{c}_2$, as the $z$ row promised. Geometrically the feasible region is an unbounded wedge and $c = (1,1)$ points along it.

</details>

## Flashback

**From Lesson 1.1 (Formulating linear programs)** — fresh variant, a new story with a different resource pair:

A bakery makes croissants and muffins. Each croissant uses 0.1 kg of flour and 6 minutes of oven time; each muffin uses 0.15 kg of flour and 4 minutes. Each day there are 30 kg of flour and 1200 minutes of oven time. Profit is 2 dollars per croissant and 1.50 dollars per muffin, and the bakery will sell everything it makes. Write the LP in standard form, then convert it to slack form and state the basic feasible solution at the origin, naming which variables are basic.

<details>
<summary>Solution</summary>

Decision variables: $x_1$ = croissants per day, $x_2$ = muffins per day (both continuous and $\ge 0$).

Standard form — maximize $c^Tx$ subject to $Ax \le b$, $x \ge 0$:

$$\max\; z = 2x_1 + 1.5x_2 \quad \text{s.t.} \quad 0.1x_1 + 0.15x_2 \le 30, \quad 6x_1 + 4x_2 \le 1200, \quad x_1, x_2 \ge 0,$$

with $z$ in dollars per day, the first constraint in kilograms of flour per day and the second in oven-minutes per day.

Slack form: introduce $s_1 \ge 0$ (unused flour, kg) and $s_2 \ge 0$ (idle oven time, minutes):

$$0.1x_1 + 0.15x_2 + s_1 = 30, \qquad 6x_1 + 4x_2 + s_2 = 1200 .$$

At the origin, $x_1 = x_2 = 0$ are nonbasic and the **basic** variables are $s_1 = 30$ and $s_2 = 1200$, giving $z = 0$. With $m = 2$ constraints the basis has 2 variables, as it must.

*Check.* Units are consistent on each row (kg $=$ kg, minutes $=$ minutes), the slacks are nonnegative so the point is feasible, and "bake nothing" correctly leaves all flour and all oven time unused. This is exactly the starting tableau simplex would open with — and its $z$ row, $(-2,\,-1.5,\,0,\,0 \mid 0)$, says croissants are the entering variable under Dantzig's rule.

</details>

## Connections

- **Backward:** [1.2](01-02-vertices-bases-fundamental-theorem.md) supplied everything simplex assumes — vertices are basic feasible solutions, an optimum is always at one, and there are finitely many. The pivot itself is Gauss–Jordan elimination from [`linalg-refresher` 1.3](../../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md), applied to one column at a time.
- **Forward:** [1.4](01-04-initialization-degeneracy-cycling.md) closes the two gaps left open here — a starting vertex when the origin is infeasible (two-phase and Big-M), and degeneracy, cycling, and Bland's rule. Module 2 then reads the *final* tableau: the $z$-row entries under the slack columns become the dual variables in [2.1](02-01-lp-dual-complementary-slackness.md) and the shadow prices in [2.2](02-02-shadow-prices-sensitivity.md). Branch-and-bound in [3.2](03-02-branch-and-bound-cutting-planes.md) calls simplex thousands of times as its inner loop.
- **Sideways:** the "local optimum is global" guarantee is [`convex-optimization` 2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md), and an LP is that course's simplest case ([`convex-optimization` 2.2](../../convex-optimization/lessons/02-02-linear-quadratic-programs.md)). The rival family of algorithms — cutting through the interior instead of walking the boundary — is [`convex-optimization` 4.3](../../convex-optimization/lessons/04-03-barrier-interior-point.md); simplex's reduced costs are the discrete cousin of the gradient conditions there.
