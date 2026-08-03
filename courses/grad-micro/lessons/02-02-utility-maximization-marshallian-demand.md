# Grad Microeconomics · Lesson 2.2: Utility maximization and Marshallian demand

> ⏱ ~15 min · Module 2: Consumer theory · Builds on: [2.1 Preferences and utility representation](02-01-preferences-utility-representation.md) · Unlocks: [2.3 Expenditure minimization and duality](02-03-expenditure-minimization-duality.md)

## Why this matters

Everything downstream in consumer theory — the Slutsky decomposition, welfare measures, the demand curves that feed general equilibrium — is a derivative of one object: the **demand function** $x(p,m)$ that says how much of each good a consumer buys at prices $p$ with income $m$. This lesson builds that object from scratch as the solution to a constrained optimization: maximize utility subject to a budget. That is exactly the machinery of Module 1, so 2.2 is where the abstract toolkit (Weierstrass existence, Lagrange/KKT, the envelope theorem) stops being scaffolding and starts *paying rent*. The payoff line is **Roy's identity** — a formula that reads demand straight off the value function with one derivative, and which falls out of the envelope theorem in three lines.

## The idea

A consumer faces prices and has a fixed amount of money. She wants the best bundle she can afford. "Affordable" carves out a triangle in good-space (the **budget set**); "best" is the highest indifference curve she can reach. The answer is the point where the highest reachable indifference curve just *touches* the budget line — tangency.

Tangency has a clean economic reading. The slope of an indifference curve is the **marginal rate of substitution** (MRS): how many units of good 2 she'd trade for one more unit of good 1 and stay equally happy — her *internal* exchange rate. The slope of the budget line is the *market* exchange rate, $p_1/p_2$. If those disagree, she's leaving value on the table: whenever her internal rate beats the market's, she should trade at the market and move to a better indifference curve. She stops exactly when the two rates equalize. That equilibrium condition — **MRS = price ratio** — is the whole first-order story.

Two caveats the picture already hints at. If preferences aren't smoothly curved (perfect substitutes: two goods she treats as interchangeable), the best point is a *corner* — spend everything on the cheaper-per-util good — and there's no tangency at all. And if we scale every price *and* her income by the same factor, the budget triangle doesn't move an inch, so neither does her choice: demand cares only about *relative* prices and *real* income.

## The formal version

**The utility maximization problem (UMP).** With price vector $p = (p_1,\dots,p_n) \gg 0$ (all prices strictly positive), income $m > 0$, and continuous utility $u:\mathbb{R}^n_+ \to \mathbb{R}$, the consumer solves
$$\max_{x \in \mathbb{R}^n_+} \ u(x) \quad \text{subject to} \quad p \cdot x \le m .$$
The feasible set $B(p,m) = \{x \in \mathbb{R}^n_+ : p\cdot x \le m\}$ is the **budget set**. *In words:* pick the bundle you like best out of everything you can afford.

**Existence.** For $p \gg 0$ and $m$ finite, $B(p,m)$ is closed and bounded, hence **compact**; a continuous function on a compact set attains its maximum (Weierstrass). So a solution *exists*. *In words:* a well-defined budget triangle plus a continuous ranking guarantees there is a best bundle — no optimization is chasing a max that isn't there. (This is the [real-analysis](../../real-analysis/syllabus.md) extreme-value theorem, and it needs $p \gg 0$: if some price were $0$ the set would be unbounded.)

**Uniqueness.** If $u$ is **strictly quasiconcave**, the maximizer is unique, so $x(p,m)$ is a genuine (single-valued) function, not a set. *In words:* strictly convex preferences never leave you indifferent between two affordable best bundles — the tangency point is one point.

**First-order conditions.** For an interior optimum ($x \gg 0$) with $u$ differentiable, form the Lagrangian $\mathcal{L} = u(x) + \lambda(m - p\cdot x)$. Stationarity gives, for every good $i$,
$$\frac{\partial u}{\partial x_i} = \lambda\, p_i \quad\Longrightarrow\quad \frac{\partial u/\partial x_i}{\partial u/\partial x_j} = \frac{p_i}{p_j} = \text{MRS}_{ij}.$$
*In words:* marginal utility per dollar is equalized across all goods — the last dollar buys the same happiness whichever good you spend it on — which is the same thing as MRS = price ratio. The multiplier $\lambda = \partial u/\partial x_i \,/\, p_i$ is the **marginal utility of income**: the extra utility from one more dollar of budget, and (by the envelope theorem below) $\lambda = \partial V/\partial m$. When a good is not consumed, the condition relaxes to the KKT inequality $\partial u/\partial x_i \le \lambda p_i$ from [1.3](01-03-inequality-constraints-kuhn-tucker.md) — a **corner solution**.

**Marshallian (Walrasian) demand.** The solution is the demand function $x(p,m) = \arg\max_{x \in B(p,m)} u(x)$. Two properties:

- **Homogeneous of degree zero:** $x(tp, tm) = x(p,m)$ for all $t > 0$. *In words:* scale all prices and income together and nothing changes — **no money illusion**; only relative prices and real income matter. (Proof: $tp\cdot x \le tm \iff p\cdot x \le m$, so $B(tp,tm) = B(p,m)$; identical constraint set and objective give the identical argmax.)
- **Walras' law:** if $u$ satisfies **local nonsatiation** (for every $x$ and every $\varepsilon>0$ there is a $y$ within distance $\varepsilon$ with $u(y) > u(x)$), then $p\cdot x(p,m) = m$ — the budget binds. *In words:* if there's always something marginally better nearby, you never leave money unspent, so the constraint holds with equality. (Monotone preferences — more is better — are the usual sufficient condition.)

**Indirect utility.** Plug demand back in: $V(p,m) = u\big(x(p,m)\big) = \max_{x\in B(p,m)} u(x)$. It is the **value function** of the UMP, and it inherits:

1. **homogeneous of degree 0** in $(p,m)$ (same budget-set argument);
2. **nonincreasing in each $p_i$**, **increasing in $m$** (a higher price shrinks the budget set; more income enlarges it);
3. **quasiconvex in $p$** (the set $\{p : V(p,m) \le \bar v\}$ is convex);
4. **continuous** in $(p,m)$ on $p\gg 0,\ m>0$ (the maximum theorem, [1.5](01-05-monotone-comparative-statics-dynamic-programming.md)).

*In words:* $V$ reports the best utility achievable at given prices and income, and it moves in the common-sense directions.

**Roy's identity (the payoff of Module 1).** For $p \gg 0$, $m>0$ with $V$ differentiable and $\partial V/\partial m \ne 0$,
$$\boxed{\ x_i(p,m) = -\,\frac{\partial V/\partial p_i}{\partial V/\partial m}\ }.$$
*In words:* Marshallian demand for good $i$ is minus the ratio of the value function's price-sensitivity to its income-sensitivity — you recover *behavior* (demand) from the *value* alone, with no need to re-solve the optimization.

*Derivation via the envelope theorem ([1.4](01-04-envelope-theorem-duality.md)).* Along the optimum, $V(p,m) = \mathcal{L}\big(x(p,m),\lambda(p,m); p,m\big)$. The envelope theorem says the total derivative of the value equals the *partial* of the Lagrangian in the parameter (the choice-variable terms vanish at the optimum because they satisfy the FOCs). Differentiating $\mathcal{L} = u(x) + \lambda(m - p\cdot x)$:
$$\frac{\partial V}{\partial p_i} = \frac{\partial \mathcal{L}}{\partial p_i} = -\lambda\, x_i, \qquad \frac{\partial V}{\partial m} = \frac{\partial \mathcal{L}}{\partial m} = \lambda .$$
The first also confirms $\partial V/\partial p_i \le 0$ (property 2); dividing kills $\lambda$ and leaves $-x_i$, which is Roy's identity. That $\lambda$ appears in *both* partials — marginal utility of income in each — is the whole trick.

## Picture

![Left: budget line tangent to an indifference curve at the interior optimum where MRS equals the price ratio, with a higher unaffordable curve above. Right: perfect substitutes, where straight indifference lines meet the budget set only at a corner, so all income goes to one good.](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — Cobb–Douglas, end to end, and Roy's identity verified).** Take $u(x,y) = x^a y^b$ with $a,b>0$, prices $p_1,p_2$, income $m$. Because a strictly increasing transform doesn't change choices, maximize the log $\ln u = a\ln x + b\ln y$ (concave — cleaner FOCs). Lagrangian $\mathcal{L} = a\ln x + b\ln y + \lambda(m - p_1 x - p_2 y)$:
$$\frac{a}{x} = \lambda p_1, \qquad \frac{b}{y} = \lambda p_2 .$$
Divide to get the tangency $\dfrac{a/x}{b/y} = \dfrac{p_1}{p_2}$, i.e. $\dfrac{a}{b}\dfrac{y}{x} = \dfrac{p_1}{p_2}$, so $p_2 y = \dfrac{b}{a}\,p_1 x$. Substitute into the (binding) budget $p_1 x + p_2 y = m$:
$$p_1 x + \frac{b}{a}p_1 x = m \ \Longrightarrow\ p_1 x\cdot\frac{a+b}{a} = m \ \Longrightarrow\ \boxed{x(p,m) = \frac{a}{a+b}\frac{m}{p_1}}, \quad \boxed{y(p,m) = \frac{b}{a+b}\frac{m}{p_2}} .$$
**Constant expenditure shares:** $\dfrac{p_1 x}{m} = \dfrac{a}{a+b}$, independent of prices and income — the signature Cobb–Douglas fact. Note demand is homogeneous of degree $0$: $x$ depends only on the ratio $m/p_1$.

**Indirect utility.** Plug back into $u = x^a y^b$:
$$V(p,m) = \left(\frac{a}{a+b}\frac{m}{p_1}\right)^{a}\left(\frac{b}{a+b}\frac{m}{p_2}\right)^{b} = \underbrace{\frac{a^a b^b}{(a+b)^{a+b}}}_{\text{constant }\kappa}\ \frac{m^{a+b}}{p_1^{a}\,p_2^{b}} .$$
Check homogeneity of degree 0: scaling $(p,m)\mapsto(tp,tm)$ multiplies the numerator by $t^{a+b}$ and the denominator by $t^{a}t^{b}=t^{a+b}$ — they cancel. ✓

**Verify Roy's identity recovers demand.** Since $V = \kappa\, m^{a+b} p_1^{-a} p_2^{-b}$,
$$\frac{\partial V}{\partial p_1} = -a\,\frac{V}{p_1}, \qquad \frac{\partial V}{\partial m} = (a+b)\,\frac{V}{m}.$$
Then
$$-\frac{\partial V/\partial p_1}{\partial V/\partial m} = -\frac{-a\,V/p_1}{(a+b)\,V/m} = \frac{a}{a+b}\frac{m}{p_1} = x(p,m). \checkmark$$
The value function alone regenerated the demand — no re-optimizing. (This is the spine of **Boss Problem 2**; 2.3 will do the same for the expenditure function and Hicksian demand.)

**Example 2 (why you'd care — perfect substitutes, where demand is non-smooth).** Let $u(x,y) = a x + b y$: the goods are interchangeable at a fixed rate. Indifference curves are straight lines of slope $-a/b$, so there is **no interior tangency** unless that slope happens to equal $-p_1/p_2$. The consumer just compares utility-per-dollar, $a/p_1$ versus $b/p_2$, and dumps her whole budget on the winner:
$$x(p,m) = \begin{cases} \dfrac{m}{p_1}, \ y=0 & \text{if } \dfrac{a}{p_1} > \dfrac{b}{p_2},\\[2mm] 0,\ y=\dfrac{m}{p_2} & \text{if } \dfrac{a}{p_1} < \dfrac{b}{p_2},\\[2mm] \text{any point on the budget line} & \text{if } \dfrac{a}{p_1} = \dfrac{b}{p_2}. \end{cases}$$
Demand is a **corner solution** and it *jumps* discontinuously as prices cross the knife-edge $a/p_1 = b/p_2$ — the Weierstrass max still exists, but strict quasiconcavity fails, so uniqueness and smoothness both break. This is the KKT machinery of [1.3](01-03-inequality-constraints-kuhn-tucker.md) in the wild: the non-consumed good sits at its boundary with $\partial u/\partial x_i < \lambda p_i$. (The mirror pathology, Leontief $u=\min\{x/a,\,y/b\}$, gives a *kink* instead of a jump: demand $x = am/(ap_1+bp_2)$ is continuous but not from any tangency.)

## Watch out

- **You might think** scaling all prices makes the consumer poorer, **but actually** if income scales *too*, demand is unchanged — homogeneity of degree $0$. Only *relative* prices $p_i/p_j$ and *real* income $m/p_i$ matter; doubling the unit of account (new dollars for old) does nothing. Real income changes come from prices and income moving *differently*.
- **You might think** the budget always binds, so $p\cdot x = m$ automatically, **but actually** that needs **local nonsatiation**. Without it (e.g. a bliss point, or a good that gives negative utility past some amount) the consumer can strictly prefer to leave money unspent, and Walras' law fails. Monotonicity is the usual guarantee.
- **You might think** Roy's identity is $x_i = +(\partial V/\partial p_i)/(\partial V/\partial m)$, **but actually** the **minus sign is essential**: $\partial V/\partial p_i \le 0$ (a higher price hurts) while $\partial V/\partial m > 0$, so the raw ratio is negative — the minus makes demand positive. Sign-check by remembering the numerator is a *bad* (price up) and the denominator a *good* (income up).
- **You might think** $\lambda$ is just an algebra bookkeeping device, **but actually** it *is* the marginal utility of income, $\lambda = \partial V/\partial m$, and it is the same $\lambda$ that shows up in $\partial V/\partial p_i = -\lambda x_i$. In 2.3 its reciprocal reappears as the marginal utility of *money* in the dual problem.

## One-liner

> Demand is the best affordable bundle — MRS equals the price ratio at an interior optimum — and once you have the value function $V(p,m)$, Roy's identity hands you demand back with a single differentiation, minus sign and all.

## Problems

**P1 (🟢)** A consumer has $u(x,y) = x^{1/3} y^{2/3}$, faces prices $p_1 = 2$, $p_2 = 1$, and has income $m = 90$. Find the Marshallian demands and the expenditure share on each good.

**P2 (🟡)** For quasilinear utility $u(x,y) = \ln x + y$ with prices $p_1, p_2$ and income $m$ (assume an interior solution), derive the Marshallian demands. What is unusual about the demand for good $x$, and what does that say about income effects?

**P3 (🔴, optional)** For the Cobb–Douglas indirect utility $V(p,m) = \kappa\, m^{a+b} p_1^{-a} p_2^{-b}$ of Example 1, (a) verify it is nonincreasing in $p_1$ and increasing in $m$, and (b) confirm the marginal utility of income $\partial V/\partial m$ equals the multiplier $\lambda$ you would get from the FOCs $a/x = \lambda p_1$ at the optimal $x$. (Use the *log* form's $\lambda$, matching Example 1's Lagrangian.)

<details>
<summary>Solutions</summary>

**P1** Cobb–Douglas with $a = 1/3$, $b = 2/3$, so $a+b = 1$. Using the boxed formulas:
$$x = \frac{a}{a+b}\frac{m}{p_1} = \frac{1/3}{1}\cdot\frac{90}{2} = \frac{1}{3}\cdot 45 = 15, \qquad y = \frac{b}{a+b}\frac{m}{p_2} = \frac{2/3}{1}\cdot\frac{90}{1} = 60.$$
Check the budget: $p_1 x + p_2 y = 2(15) + 1(60) = 30 + 60 = 90 = m$. ✓ Expenditure shares: on $x$, $\frac{30}{90} = \frac{1}{3} = a$; on $y$, $\frac{60}{90} = \frac{2}{3} = b$ — the constant Cobb–Douglas shares.

**P2** Maximize $\ln x + y$ s.t. $p_1 x + p_2 y = m$. Lagrangian $\mathcal{L} = \ln x + y + \lambda(m - p_1 x - p_2 y)$:
$$\frac{1}{x} = \lambda p_1, \qquad 1 = \lambda p_2 .$$
The second gives $\lambda = 1/p_2$. Substitute into the first: $\frac{1}{x} = \frac{p_1}{p_2}$, so
$$x(p,m) = \frac{p_2}{p_1}.$$
Then from the budget, $y = \dfrac{m - p_1 x}{p_2} = \dfrac{m - p_2}{p_2} = \dfrac{m}{p_2} - 1$ (valid while $m > p_2$, the interior condition). **What's unusual:** demand for $x$ **does not depend on income $m$** — the entire income effect lands on the numéraire-like good $y$. Quasilinear utility has *zero income effect* on the nonlinear good; this is exactly why quasilinear preferences make consumer surplus an exact welfare measure (no income effect to contaminate it), a fact 4.1 leans on.

**P3** (a) Write $V = \kappa\, m^{a+b} p_1^{-a} p_2^{-b}$ with $\kappa > 0$.
$$\frac{\partial V}{\partial p_1} = -a\,\kappa\, m^{a+b} p_1^{-a-1} p_2^{-b} = -a\,\frac{V}{p_1} < 0 \quad(\text{since }a,V,p_1>0),$$
so $V$ is (strictly) **decreasing** in $p_1$ — nonincreasing as required. And
$$\frac{\partial V}{\partial m} = (a+b)\,\kappa\, m^{a+b-1} p_1^{-a} p_2^{-b} = (a+b)\,\frac{V}{m} > 0,$$
so $V$ is **increasing** in $m$. ✓

(b) From part (a), $\partial V/\partial m = (a+b)V/m$. Now compute the multiplier from the log-form FOC $a/x = \lambda p_1$ at the optimum $x = \frac{a}{a+b}\frac{m}{p_1}$:
$$\lambda = \frac{a}{p_1 x} = \frac{a}{p_1}\cdot\frac{(a+b)p_1}{a\,m} = \frac{a+b}{m}.$$
But the value being differentiated in the log-Lagrangian is $\tilde V = \ln V = \ln\kappa + (a+b)\ln m - a\ln p_1 - b\ln p_2$, whose income derivative is $\partial \tilde V/\partial m = (a+b)/m = \lambda$. ✓ So $\lambda = \partial V/\partial m$ holds for the value function actually maximized — the marginal utility of income *is* the multiplier. (Working with $V = x^a y^b$ directly instead rescales $\lambda$ by the monotone transform's derivative; the identity $\lambda = \partial(\text{value})/\partial m$ is what's invariant, exactly the envelope statement.)

</details>

## Flashback

**From Lessons 1.2 / 1.4 (Lagrange and the envelope theorem):** Solve $\max_{x,y} \, xy$ subject to $x + 4y = 40$. Find the optimum and the value $V(c)$ when the constraint right-hand side is a general $c$ (so $x + 4y = c$). Then verify by direct differentiation that $\dfrac{dV}{dc} = \lambda$, the multiplier — the envelope/shadow-price statement.

<details>
<summary>Solution</summary>

Lagrangian $\mathcal{L} = xy + \lambda(c - x - 4y)$. FOCs: $y = \lambda$ and $x = 4\lambda$. The constraint $x + 4y = c$ becomes $4\lambda + 4\lambda = 8\lambda = c$, so
$$\lambda = \frac{c}{8}, \qquad x = 4\lambda = \frac{c}{2}, \qquad y = \lambda = \frac{c}{8}.$$
At $c = 40$: $\lambda = 5$, $x = 20$, $y = 5$, and $V(40) = xy = 100$. In general
$$V(c) = xy = \frac{c}{2}\cdot\frac{c}{8} = \frac{c^2}{16}.$$
Differentiate directly: $\dfrac{dV}{dc} = \dfrac{2c}{16} = \dfrac{c}{8} = \lambda$. ✓ The multiplier is the **shadow price** of the constraint — the marginal value of relaxing the budget by one unit — which is precisely the envelope theorem, and precisely why $\lambda = \partial V/\partial m$ is the marginal utility of income in this lesson's UMP.

</details>

## Connections

- **Backward ([1.2](01-02-unconstrained-equality-constrained-optimization.md) / [1.3](01-03-inequality-constraints-kuhn-tucker.md) / [1.4](01-04-envelope-theorem-duality.md)):** the UMP *is* equality-constrained optimization (interior) and KKT (corners); Roy's identity *is* the envelope theorem applied to the indirect-utility value function. The Lagrange multiplier reappears here as the marginal utility of income, and the Flashback's shadow-price fact is the same statement.
- **Backward ([2.1](02-01-preferences-utility-representation.md)):** strict quasiconcavity (convex preferences) is what buys uniqueness of demand; local nonsatiation is what buys Walras' law. This lesson is where those axioms cash out as properties of $x(p,m)$.
- **Forward ([2.3](02-03-expenditure-minimization-duality.md)):** the **dual** problem — minimize spending to reach a target utility — yields Hicksian demand $h(p,u)$ and the expenditure function $e(p,u)$, with **Shephard's lemma** as the mirror of Roy's identity. The duality diagram ties $V$ and $e$, $x$ and $h$ into one square.
- **Forward ([2.4](02-04-slutsky-equation-comparative-statics.md)):** the **Slutsky equation** splits $\partial x_i/\partial p_j$ into a substitution and an income effect, connecting the Marshallian demand of this lesson to the Hicksian demand of the next.
- **Sideways ([micro-refresher](../../micro-refresher/syllabus.md)):** this is the rigorous version of the undergraduate "tangency of budget line and indifference curve" and the Cobb–Douglas "spend a constant fraction on each good" rule — now derived, with existence and uniqueness stated as theorems.
- **Sideways ([linalg-refresher](../../linalg-refresher/syllabus.md)):** the second-order condition for the interior optimum is negative definiteness of the bordered Hessian on the budget hyperplane — the quadratic-form machinery that also certifies the strict quasiconcavity assumed here.
