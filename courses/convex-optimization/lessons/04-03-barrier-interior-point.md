# Convex Optimization · Lesson 4.3: Barrier and interior-point methods

> ⏱ ~15 min · Module 4: Algorithms, from first-order to interior-point · Builds on: [Lesson 4.2](04-02-newtons-method.md) (Newton's method), [Lesson 3.3](03-03-kkt-conditions.md) (the KKT conditions) · Unlocks: [Lesson 5.1](05-01-least-squares-lasso.md) (least-squares, ridge, and lasso) and all of Module 5

## Why this matters

Newton's method (Lesson 4.2) is a rocket, but it only knows how to solve *unconstrained* smooth problems. Real convex programs have constraints — a portfolio must stay budget-feasible, a controller must respect actuator limits. This lesson is the trick that turned convex optimization from theory into a practical technology in the 1980s–90s: replace the hard boundary of the feasible set with a smooth *wall of infinite potential energy*, so a Newton-driven ball rolling downhill never leaves the interior. Crank a knob and the wall retreats, letting the ball settle onto the true constrained optimum. The path it traces — the **central path** — is what modern interior-point solvers (the engines inside CVXPY, MOSEK, Gurobi) actually walk, and every point on it hands you a *certificate* of how close you are.

## The idea

You want to solve, over $x \in \mathbb{R}^n$,
$$\min\ f_0(x)\quad \text{subject to}\quad f_i(x)\le 0,\ i=1,\dots,m,$$
with all $f_i$ convex (we suppress equality constraints $Ax=b$ for clarity — they ride along unchanged). The pain is the inequalities: an unconstrained method would happily march $x$ straight out of the feasible set.

So build a **wall**. Define a penalty that is nearly $0$ deep in the interior but rises to $+\infty$ as $x$ approaches any constraint boundary $f_i(x)=0$. Add a scaled copy of it to the objective and minimize the sum with Newton's method — an unconstrained problem again. Because the wall is infinitely tall exactly at the boundary, the minimizer is *forced* to stay strictly inside. That single trick converts a constrained problem into a smooth unconstrained one.

The catch: the wall also pushes the minimizer *away* from the true optimum, which usually sits **on** the boundary (an LP optimum is a vertex!). The fix is a knob, $t$. A large $t$ makes the objective loud relative to the wall, so the minimizer hugs the true solution; a small $t$ lets the wall dominate and parks you deep in the interior. Solve for a modest $t$, then increase $t$ and re-solve starting from where you just were (a warm start Newton loves), and repeat. The sequence of minimizers $x^\star(t)$ sweeps out a smooth curve from the deep-interior "analytic center" all the way to the optimum. Walk that curve to the wall and you're done.

## The formal version

Assume the problem is **strictly feasible**: some $x$ has $f_i(x)<0$ for all $i$ (Slater's condition from [Lesson 3.2](03-02-strong-duality-slater.md)). Write $p^\star$ for the optimal value.

**Definition (logarithmic barrier).** On the strict interior $\{x : f_i(x)<0\ \forall i\}$,
$$\phi(x) \;=\; -\sum_{i=1}^m \log\bigl(-f_i(x)\bigr).$$

*In words:* each term $-\log(-f_i(x))$ is small when $f_i(x)$ is comfortably negative and blows up to $+\infty$ as $f_i(x)\to 0^-$ — a smooth wall glued to every constraint surface. $\phi$ is convex (each $-\log(-f_i)$ is a convex nonincreasing function composed with the convex $f_i$; see [Lesson 1.4](01-04-recognizing-convexity.md)), and its gradient is
$$\nabla\phi(x) \;=\; \sum_{i=1}^m \frac{1}{-f_i(x)}\,\nabla f_i(x).$$

**Definition (barrier subproblem and central path).** For a knob value $t>0$, minimize the weighted sum
$$x^\star(t) \;=\; \operatorname{argmin}_x\ \bigl[\,t\,f_0(x) + \phi(x)\,\bigr].$$
The set $\{x^\star(t) : t>0\}$ is the **central path**. (Dividing by $t$, this is equivalently $\min\ f_0(x) + \mu\,\phi(x)$ with barrier weight $\mu = 1/t$; sending $t\to\infty$ is the same as $\mu\to 0^+$.)

*In words:* $x^\star(t)$ is the best point that also pays a smooth toll for getting near the walls; as $t$ grows the toll shrinks in relative terms and $x^\star(t)$ slides toward the true optimum.

**Centrality = perturbed KKT.** Since $t f_0 + \phi$ is convex and smooth, $x^\star(t)$ is characterized by $\nabla\bigl(t f_0 + \phi\bigr)=0$:
$$t\,\nabla f_0\bigl(x^\star(t)\bigr) + \sum_{i=1}^m \frac{1}{-f_i(x^\star(t))}\,\nabla f_i\bigl(x^\star(t)\bigr) = 0.$$
Divide by $t$ and **read off multipliers** $\displaystyle \lambda_i^\star(t) = \frac{1}{-t\,f_i(x^\star(t))} > 0$. Then the equation becomes
$$\nabla f_0\bigl(x^\star(t)\bigr) + \sum_{i=1}^m \lambda_i^\star(t)\,\nabla f_i\bigl(x^\star(t)\bigr) = 0.$$

*In words:* this is **exactly** the KKT stationarity condition of [Lesson 3.3](03-03-kkt-conditions.md), and the $\lambda_i^\star(t)$ are dual-feasible ($\lambda_i^\star(t)>0$). The only KKT condition not met exactly is complementary slackness: instead of $\lambda_i f_i = 0$, the central path satisfies the *relaxed* version
$$-\lambda_i^\star(t)\,f_i\bigl(x^\star(t)\bigr) = \frac{1}{t}\qquad\text{for every }i,$$
which tightens to true complementary slackness $\lambda_i^\star f_i = 0$ as $t\to\infty$. So **the central path is a smooth family of approximate KKT points converging to an exact one.**

**The duality gap is $m/t$ — a free certificate.** Because $x^\star(t)$ minimizes the Lagrangian $L(x,\lambda^\star(t)) = f_0(x)+\sum_i\lambda_i^\star(t)f_i(x)$ (its gradient vanishes, and $L$ is convex in $x$), the dual function value is
$$g\bigl(\lambda^\star(t)\bigr) = f_0\bigl(x^\star(t)\bigr) + \sum_{i=1}^m \lambda_i^\star(t)\,f_i\bigl(x^\star(t)\bigr) = f_0\bigl(x^\star(t)\bigr) - \frac{m}{t}.$$
Weak duality ([Lesson 3.1](03-01-lagrangian-dual-function.md)) says $g(\lambda^\star(t))\le p^\star$, so
$$\boxed{\,f_0\bigl(x^\star(t)\bigr) - p^\star \;\le\; \frac{m}{t}.\,}$$

*In words:* the point on the central path at parameter $t$ is provably within $m/t$ of optimal — and you didn't have to know $p^\star$ to say so. Want $10^{-6}$ accuracy with $m=100$ constraints? Push $t$ to $10^{8}$.

**The barrier method (SUMT).** *Sequential Unconstrained Minimization.* Given a strictly feasible $x$, a starting $t>0$, an increase factor $\gamma>1$, and tolerance $\epsilon$:

1. **Center:** compute $x^\star(t)=\operatorname{argmin}_x\,[t f_0(x)+\phi(x)]$ by Newton's method, *starting from the current $x$*.
2. **Update:** set $x := x^\star(t)$.
3. **Stop** if $m/t < \epsilon$.
4. Otherwise set $t := \gamma\, t$ and go to 1.

The warm start in step 1 is the whole game: $x^\star(t)$ and $x^\star(\gamma t)$ are close (the central path is smooth), so Newton begins inside its quadratic-convergence basin and finishes each centering in a handful of steps.

**Primal-dual interior-point methods** are the practical state of the art. Rather than solving each centering problem to completion, they apply Newton's method *directly* to the perturbed KKT system in the variables $(x,\lambda)$ at once — treating the relaxation $-\lambda_i f_i(x)=1/t$ as $m$ extra equations and nudging $t$ up every iteration. They update primal and dual variables together, need no strictly feasible dual start, and are typically faster and more accurate. Both families run in **polynomial time**: with a self-concordant barrier (the property from Lesson 4.2 that tames Newton), the number of Newton steps to reach accuracy $\epsilon$ grows like $O(\sqrt{m}\,\log(1/\epsilon))$ — the theoretical breakthrough (Karmarkar, Nesterov–Nemirovski) behind why we can solve LPs and SDPs with millions of variables.

## Picture

![A convex polytope feasible region. A red central-path curve starts at the analytic center deep in the interior (t = 0) and bends toward the optimal vertex at the top (t → ∞). Two nested dashed loops are barrier level sets of phi around the analytic center. A green arrow shows the objective decreasing toward the optimal vertex.](assets/04-03-fig1.svg)

The dashed loops are level sets of the barrier $\phi$: they pile up near the walls, so minimizing $\phi$ alone ($t=0$) lands you at the **analytic center**, the point furthest from all constraints in the log sense. As $t$ grows, the objective $f_0$ (decreasing toward the top vertex) wins the tug-of-war and $x^\star(t)$ slides along the red central path, arriving at the optimal vertex $x^\star$ as $t\to\infty$. The barrier method takes discrete hops along this curve, warm-starting Newton at each new $t$.

## Worked examples

**Example 1 (mechanical — a central path you can write down).** Minimize $f_0(x)=x$ over $x\in\mathbb{R}$ subject to $x\ge 1$, i.e. $f_1(x)=1-x\le 0$. Obvious optimum $x^\star=1$, $p^\star=1$, with one constraint ($m=1$).

Barrier: $\phi(x) = -\log(x-1)$, valid for $x>1$. The subproblem is
$$\min_{x>1}\ t\,x - \log(x-1).$$
Set the derivative to zero: $t - \dfrac{1}{x-1}=0 \Rightarrow x-1 = \dfrac1t$, so
$$x^\star(t) = 1 + \frac1t.$$
As $t\to\infty$, $x^\star(t)\to 1 = p^\star$ from *inside* the feasible set — it never touches the wall, just limits onto it. The multiplier is $\lambda_1^\star(t) = \dfrac{1}{-t f_1(x^\star(t))} = \dfrac{1}{t(x^\star(t)-1)} = \dfrac{1}{t\cdot(1/t)} = 1$, matching the true KKT multiplier (stationarity: $f_0'+\lambda f_1' = 1 + 1\cdot(-1)=0$ ✓). And the gap: $f_0(x^\star(t)) - p^\star = (1+\tfrac1t) - 1 = \tfrac1t = \tfrac{m}{t}$, hitting the bound with equality.

**Example 2 (why you'd care — the analytic center).** Consider the box $-1\le x\le 1$ in $\mathbb{R}$: constraints $f_1 = x-1\le0$ and $f_2 = -x-1\le0$ ($m=2$). At $t=0$ the barrier subproblem is just $\min\ \phi(x) = -\log(1-x) - \log(1+x)$. Setting $\phi'(x) = \tfrac{1}{1-x} - \tfrac{1}{1+x} = 0$ gives $x=0$ — the midpoint, symmetric between the two walls. That is the **analytic center**: the launch point of every central path, chosen purely by the geometry of the constraints before any objective enters. Add an objective $f_0(x)=x$ with knob $t$ and stationarity $t + \tfrac{1}{1-x} - \tfrac{1}{1+x}=0$ drags the minimizer left toward $x=-1$ (the true minimizer of $x$ on the box) as $t\to\infty$ — the central path in one dimension.

## Watch out

- You might think a bigger $t$ is always better, so just set $t = 10^{12}$ and solve once. **But** then $t f_0 + \phi$ is wildly ill-conditioned near the boundary and Newton without a good warm start stalls or oversteps out of the interior. The *point* of ramping $t$ gradually (the factor $\gamma$) is to keep every centering problem in Newton's easy regime. One giant leap fails; many warm-started hops succeed.
- You might think $\phi$ is a penalty you can evaluate anywhere. **But** $\phi$ is only defined on the *strict* interior — you need a strictly feasible starting point to even begin. Finding one is a real sub-task (a "phase I" problem, itself solved by the same barrier machinery on an auxiliary program).
- You might confuse the two knobs: $t$ (barrier parameter, $\to\infty$) and $\mu=1/t$ (barrier *weight*, $\to 0^+$) are reciprocals describing the same sweep. And the increase factor $\gamma$ (how much you multiply $t$ by each outer step) is a *third*, unrelated number — do not conflate it with either.
- The multipliers $\lambda_i^\star(t)=1/(-t f_i)$ are always **strictly positive** and dual feasible for every finite $t$; that is exactly why each central-path point yields a valid lower bound. They are only *approximately* complementary-slack ($-\lambda_i f_i = 1/t$, not $0$) until the limit.

## One-liner

> Replace the boundary with a smooth log wall, minimize objective-plus-wall with Newton, and retreat the wall by cranking $t\to\infty$: the minimizers trace the central path to the optimum, each one certifying suboptimality $\le m/t$.

## Problems

**P1 (🟢)** Minimize $f_0(x)=x$ over $x\in\mathbb{R}$ subject to $x\ge 2$ (so $f_1(x)=2-x\le 0$). (a) Write the barrier subproblem and solve for $x^\star(t)$ in closed form. (b) Give the multiplier $\lambda_1^\star(t)$ and the duality gap, and confirm both the KKT stationarity condition and the $m/t$ bound. (c) What is $x^\star(t)$ as $t\to\infty$?

**P2 (🟡)** Prove the duality-gap identity in general: for any strictly feasible convex problem with $m$ inequality constraints, show that the central-path multipliers $\lambda_i^\star(t) = 1/(-t f_i(x^\star(t)))$ produce dual value $g(\lambda^\star(t)) = f_0(x^\star(t)) - m/t$, and hence $f_0(x^\star(t)) - p^\star \le m/t$. State precisely where convexity is used.

**P3 (🔴, optional)** In the barrier method you start at $t^{(0)}$, multiply by $\gamma>1$ each outer step, and stop when $m/t<\epsilon$. Derive a formula for the number of outer (centering) iterations as a function of $m,\epsilon,t^{(0)},\gamma$, and explain in one sentence how it reflects the "polynomial-time" character of the method.

<details>
<summary>Solutions</summary>

**P1** (a) Barrier $\phi(x) = -\log(-f_1) = -\log(x-2)$, valid for $x>2$. Subproblem $\min_{x>2}\ t\,x - \log(x-2)$. Derivative: $t - \dfrac{1}{x-2}=0 \Rightarrow x-2 = \dfrac1t$, so
$$x^\star(t) = 2 + \frac1t.$$
(b) Multiplier $\lambda_1^\star(t) = \dfrac{1}{-t f_1(x^\star(t))} = \dfrac{1}{t\,(x^\star(t)-2)} = \dfrac{1}{t\cdot(1/t)} = 1$. Stationarity check: $f_0'(x) + \lambda_1^\star f_1'(x) = 1 + 1\cdot(-1) = 0$ ✓, and $\lambda_1^\star = 1 > 0$ is dual feasible. Gap: $p^\star = 2$ (optimum at $x=2$), so $f_0(x^\star(t)) - p^\star = (2+\tfrac1t) - 2 = \tfrac1t$, and with $m=1$ the bound $m/t = 1/t$ holds with equality. (c) $x^\star(t) = 2 + 1/t \to 2 = p^\star$ as $t\to\infty$, approached from strictly inside the feasible region.

**P2** By construction $x^\star(t)$ satisfies $t\nabla f_0(x^\star(t)) + \sum_i \tfrac{1}{-f_i(x^\star(t))}\nabla f_i(x^\star(t)) = 0$; dividing by $t$ and setting $\lambda_i^\star(t) = \tfrac{1}{-t f_i(x^\star(t))}$ gives $\nabla f_0 + \sum_i \lambda_i^\star \nabla f_i = 0$, i.e. $\nabla_x L(x^\star(t),\lambda^\star(t)) = 0$ where $L(x,\lambda)=f_0(x)+\sum_i\lambda_i f_i(x)$. **Here is where convexity enters:** with each $f_i$ convex and $\lambda_i^\star(t)\ge 0$, $L(\cdot,\lambda^\star(t))$ is convex in $x$, so a stationary point is a global minimizer. Therefore
$$g(\lambda^\star(t)) = \min_x L(x,\lambda^\star(t)) = L(x^\star(t),\lambda^\star(t)) = f_0(x^\star(t)) + \sum_{i=1}^m \lambda_i^\star(t)\,f_i(x^\star(t)).$$
Each term $\lambda_i^\star(t)\,f_i(x^\star(t)) = \dfrac{1}{-t f_i(x^\star(t))}\cdot f_i(x^\star(t)) = -\dfrac1t$, and there are $m$ of them, so $g(\lambda^\star(t)) = f_0(x^\star(t)) - m/t$. Finally weak duality gives $g(\lambda^\star(t)) \le p^\star$, hence $f_0(x^\star(t)) - p^\star \le m/t$. $\blacksquare$

**P3** After $k$ outer steps the parameter is $t^{(k)} = \gamma^{k}\,t^{(0)}$. We stop as soon as $m/t^{(k)} < \epsilon$, i.e. $\gamma^{k} t^{(0)} > m/\epsilon$, i.e. $\gamma^k > \dfrac{m}{\epsilon\,t^{(0)}}$. Taking logs,
$$k \;>\; \frac{\log\!\bigl(m/(\epsilon\,t^{(0)})\bigr)}{\log\gamma},\qquad\text{so the count is}\qquad k = \left\lceil \frac{\log\!\bigl(m/(\epsilon\,t^{(0)})\bigr)}{\log\gamma}\right\rceil.$$
(If the bracket is $\le 0$ you are already done at $k=0$.) The number of outer iterations grows only **logarithmically** in the accuracy $1/\epsilon$ and in the constraint count $m$; since each centering is a bounded number of Newton steps (self-concordance), the total Newton-step count is polynomial in the problem size and in $\log(1/\epsilon)$ — the formal meaning of "polynomial-time in practice."

</details>

## Flashback

**From [Lesson 3.3](03-03-kkt-conditions.md) (the KKT conditions):** Solve $\min\ x_1^2 + x_2^2$ subject to $x_1 + x_2 \ge 2$. Write the KKT conditions and use them to find the optimizer and the multiplier. (This is the *exact* limit the central path of the barrier method converges to — solving it by hand is what interior-point solvers approximate numerically.)

<details>
<summary>Solution</summary>

Put the constraint in standard form $f_1(x) = 2 - x_1 - x_2 \le 0$, with multiplier $\lambda\ge 0$. Lagrangian $L = x_1^2 + x_2^2 + \lambda(2 - x_1 - x_2)$.

- **Stationarity:** $\partial L/\partial x_1 = 2x_1 - \lambda = 0$ and $\partial L/\partial x_2 = 2x_2 - \lambda = 0$, so $x_1 = x_2 = \lambda/2$.
- **Complementary slackness:** $\lambda\,(2 - x_1 - x_2) = 0$.

If $\lambda = 0$ then $x_1=x_2=0$, which violates $x_1+x_2\ge 2$ — infeasible. So $\lambda > 0$, forcing the constraint to bind: $x_1 + x_2 = 2$. Substituting $x_1=x_2=\lambda/2$ gives $\lambda = 2$, hence
$$x_1^\star = x_2^\star = 1,\qquad \lambda^\star = 2,\qquad p^\star = 1^2 + 1^2 = 2.$$
Dual feasibility $\lambda^\star = 2 \ge 0$ ✓ and primal feasibility $1+1=2$ ✓. Because the problem is convex, KKT is sufficient, so $(1,1)$ is the global optimum. (Geometric check: the smallest circle centered at the origin touching the line $x_1+x_2=2$ meets it at its nearest point $(1,1)$.) The multiplier $\lambda^\star = 2$ is the **shadow price** of the constraint — raise the requirement to $x_1+x_2\ge 2+\delta$ and the optimal value rises by about $\lambda^\star\,\delta = 2\delta$.

</details>

## Connections

- **Backward:** each centering step is precisely the unconstrained Newton minimization of [Lesson 4.2](04-02-newtons-method.md) — self-concordance of the log barrier is what guarantees Newton behaves — and every central-path point is an approximate solution of the KKT system of [Lesson 3.3](03-03-kkt-conditions.md), with the exact multipliers emerging in the limit $t\to\infty$. The $m/t$ certificate is weak duality from [Lesson 3.1](03-01-lagrangian-dual-function.md) cashed in.
- **Forward:** this is the solver under the hood for the rest of the course — the lasso and ridge programs of [Lesson 5.1](05-01-least-squares-lasso.md), the SVM QP of [Lesson 5.2](05-02-support-vector-machines.md), and the portfolio SOCPs of [Lesson 5.3](05-03-portfolio-optimal-control.md) are all handed to an interior-point method exactly like this one.
- **Sideways (statistical learning · economics):** the multipliers $\lambda_i^\star(t)$ the barrier method produces for free are the same **shadow prices** you read off in `grad-micro`'s constrained consumer problem and the KKT/equilibrium conditions of `grad-game-theory` — interior-point methods compute the primal optimum and its economic sensitivities in one sweep. When `statistical-learning` fits an SVM or a lasso, this central-path machinery is what actually returns the numbers.
