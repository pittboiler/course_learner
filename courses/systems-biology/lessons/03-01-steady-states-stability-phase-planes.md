# Systems Biology · Lesson 3.1: Steady states, stability & phase planes in the cell

> ⏱ ~15 min · Module 3: Dynamics, feedback & bistability · Builds on: [2.5](02-05-incoherent-ffl-temporal-programs.md), [1.2](01-02-mass-action-rate-odes.md), [`dynamical-systems` 1.3](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md) · Unlocks: [3.2](03-02-bistability-toggle-switch.md) (bistability & the toggle switch)

## Why this matters

Module 2 got a long way with one trick: hold the input constant, and every circuit collapses to $\dot Y = \beta - \alpha Y$, a linear equation you can solve in closed form. That trick is now exhausted. **The moment a circuit feeds back on itself, the production term contains the variable you are solving for**, the equation stops being solvable, and the questions Module 3 asks — is there memory, is there a clock, is the output robust — are questions about a nonlinear system.

You do not need closed-form solutions to answer them. You need fixed points and their stability, and [`dynamical-systems`](../../dynamical-systems/syllabus.md) has already given you all 24 lessons of that machinery. **This lesson does not re-derive any of it.** Its job is the translation layer: what changes when the state variables are concentrations rather than abstract coordinates.

Three things change, and none is cosmetic. Concentrations **cannot be negative**, so half the phase plane is off the table and fixed points living there are not solutions to anything. The nonlinearities are always **Hill functions** ([1.4](01-04-cooperativity-hill-ultrasensitivity.md)), which have a specific sigmoidal geometry, and that geometry — not general theory — controls how many fixed points you get. And every classification has a **biological reading**: a stable node is a cell fate, a saddle is a decision threshold, a spiral is a damped oscillation, a limit cycle is a clock. By the end of this lesson you should be able to look at a phase portrait and say what the cell does.

## The idea

**A fixed point is a steady state, and stability is whether it survives being nudged.** The cell is nudged constantly — by noise ([4.3](04-03-stochastic-gene-expression.md)), by division, by whatever the environment is doing — so **an unstable steady state is a mathematical object with no experimental existence.** You will never find a cell sitting at one. What you *can* find is a cell sitting near one, briefly, on its way somewhere else: an unstable state is a watershed, not a destination.

**The whole method is one picture.** Draw the curve where $\dot u = 0$ and the curve where $\dot v = 0$. These are the **nullclines**. Where they cross, both derivatives vanish and nothing changes — a fixed point. Off the crossings, one derivative is zero and the other is not, so the flow crosses each nullcline in a fixed direction, and that is enough to sketch the whole flow without solving anything.

**Then linearize.** Near a fixed point, replace the nonlinear system by its best linear approximation — the **Jacobian** — and read the eigenvalues. Negative real parts, perturbations decay, the state is stable. One positive, one negative: a **saddle**, stable along one direction and unstable along the other, and the stable direction extends globally into a **separatrix** that divides the plane into basins. Hartman–Grobman ([`dynamical-systems` 1.4](../../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md)) says this is legitimate whenever no eigenvalue sits on the imaginary axis.

**The biological content is in the last step, and it is the step textbooks skip.** A separatrix in a phase plane is a *threshold in a cell*: on one side the progenitor becomes a neuron, on the other a glial cell, and the boundary is not written in any molecule — it is a property of the flow. **A cell fate is a basin of attraction.** That sentence is what Module 3 is for, and it is why [3.2](03-02-bistability-toggle-switch.md) exists.

## The formal version

**The procedure, as a checklist.** Given a circuit:

1. **Write the ODEs.** Species, reactions, rates, $\dot{\mathbf{x}} = S\mathbf{v}(\mathbf{x})$ ([1.2](01-02-mass-action-rate-odes.md)). Use conservation laws to eliminate variables *first* — a phase plane holds two dimensions and no more, and moiety conservation is usually what gets you there.
2. **Nondimensionalize.** Scale each concentration by its Hill threshold $K$ and time by a decay rate $\alpha$. This is not tidiness: it collapses six parameters into two, and the two that survive are the ones the behaviour actually depends on.
3. **Find the nullclines.** Solve $\dot u = 0$ for $u$ in terms of $v$, and $\dot v = 0$ for $v$ in terms of $u$.
4. **Locate the fixed points** at the intersections — *within the positive quadrant only*.
5. **Compute the Jacobian** $J_{ij} = \partial f_i/\partial x_j$ and evaluate it at each fixed point.
6. **Classify** from $\operatorname{tr}J$ and $\det J$ ([`dynamical-systems` 1.3](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md)).
7. **Read the biology.**

Steps 3 to 6 are pure [`dynamical-systems`](../../dynamical-systems/syllabus.md). Steps 1, 2 and 7 are this course.

**Non-negativity, and why it is a theorem rather than a caveat.** Concentrations live in $\mathbb{R}^n_{\ge0}$. That set is **forward-invariant** whenever

$$x_i = 0 \;\Longrightarrow\; f_i(\mathbf{x}) \ge 0 ,$$

*In words: if the flow on each coordinate plane points inward (or along it), a trajectory that starts with non-negative concentrations keeps them forever.* Mass-action systems satisfy this automatically, because every term that *removes* species $i$ carries a factor of $x_i$ and therefore vanishes when $x_i = 0$ — the only surviving terms are productions, which are non-negative. **So the positive quadrant is a trap, and everything interesting happens inside it.**

The consequence for step 4 is blunt. A polynomial system can have fixed points at negative concentrations; they are real numbers and the algebra reports them, and **they are not steady states of anything**. For $\dot x = b - kx^2$ the fixed points are $x = \pm\sqrt{b/k}$, and the negative one — unstable, since $f'(x) = -2kx > 0$ there — is a fiction. Discard it before classifying, not after.

**Hill nullclines are sigmoids, and steepness controls the intersection count.** A gene regulated by a partner has $\dot u = \beta\,h(v) - \alpha u$, so its nullcline is $u = (\beta/\alpha)h(v)$ — the input function itself, rescaled. **The number of fixed points is the number of times two sigmoids cross**, and that is a question about their steepness:

$$n = 1 \;\Rightarrow\; \text{a hyperbola: at most one crossing away from the origin.}$$
$$n \ge 2 \;\Rightarrow\; \text{a genuine S-shape: up to three crossings.}$$

**This is where $n>1$ from [1.4](01-04-cooperativity-hill-ultrasensitivity.md) finally cashes out.** Every circuit in Modules 2 and 3 that needs more than one steady state needs a sigmoid steep enough to cross its partner three times, and Example 1 makes the geometry explicit.

**Reading a phase portrait as biology.**

| Classification | Dynamics | What the cell is doing |
|---|---|---|
| Stable node | monotone return | a **committed state** — a cell fate, a steady expression level |
| Stable spiral | damped oscillation | overshoot and ringing after a stimulus; a transient pulse |
| Saddle | repelled along one direction | a **threshold**; its stable manifold is the decision boundary |
| Unstable node/spiral | departure | never observed at rest — usually encircled by a limit cycle |
| Limit cycle | sustained oscillation | a **clock** ([3.4](03-04-oscillations-repressilator-hopf.md)) |

**Fast–slow structure, again.** If one variable is much faster ([1.1](01-01-systems-view-of-the-cell.md)), write $\varepsilon\dot u = f(u,v)$, $\dot v = g(u,v)$ with $\varepsilon \ll 1$. In the phase plane this is visible immediately: **trajectories shoot almost horizontally onto the $u$-nullcline and then crawl along it.** That nullcline is the **slow manifold**, and the two-dimensional problem has become a one-dimensional one living on a curve. When the curve is S-shaped, the crawl can run off a fold and jump — which is the relaxation oscillator of [3.4](03-04-oscillations-repressilator-hopf.md) and the reason that lesson can talk about the cell cycle at all.

**What linearization does not tell you.** Three genuine limits, worth holding onto:

- **Nothing global.** Eigenvalues describe an infinitesimal neighbourhood. *How big* the basin of a stable state is, and whether a physiological perturbation escapes it, are separate questions, answered by Lyapunov functions ([`dynamical-systems` 2.2](../../dynamical-systems/lessons/02-02-lyapunov-functions.md)) or by trapping regions and Poincaré–Bendixson ([2.4](../../dynamical-systems/lessons/02-04-poincare-bendixson.md)).
- **Nothing at a bifurcation.** When an eigenvalue's real part hits zero, Hartman–Grobman fails and the linear picture is silent about which way the system tips. Those points are exactly the interesting parameter values, which is why [3.2](03-02-bistability-toggle-switch.md) and [3.4](03-04-oscillations-repressilator-hopf.md) need bifurcation theory and not just eigenvalues.
- **Nothing about transients.** A Jacobian with non-orthogonal eigenvectors can amplify a perturbation by a large factor *before* the decay wins. Both eigenvalues negative guarantees the end state, not the path.

## Picture

![Left panel: the phase plane of a mutual-activation two-gene circuit drawn in the positive quadrant, with a blue sigmoidal u-nullcline and a coral sigmoidal v-nullcline crossing three times, at the origin, at a saddle at one half and one half, and at a high ON state at two and two. A green dashed separatrix runs through the saddle and cuts the quadrant into the basin of the OFF state near the origin and the much larger basin of the ON state. Grey trajectories with arrowheads flow into one attractor or the other. Right panel: the trace-determinant plane with the discriminant parabola drawn, showing all three fixed points on the vertical line where the trace equals minus two, with the saddle below the horizontal axis, the ON state inside the stable-node region, and the OFF state sitting exactly on the parabola as a degenerate star.](assets/03-01-fig1.svg)

## Worked examples

### Example 1 (mechanical — a mutual-activation circuit, start to finish)

Two transcription factors, each activating the other's gene, each degrading first-order. Nondimensionalized (concentrations in units of the activation threshold $K$, time in units of $1/\alpha$):

$$\dot u = \alpha\,\frac{v^{2}}{1+v^{2}} - u, \qquad \dot v = \alpha\,\frac{u^{2}}{1+u^{2}} - v, \qquad \alpha = 2.5$$

Here $\alpha$ is the maximal production rate relative to decay — the **gain**. Take $n = 2$. Note the contrast with [3.2](03-02-bistability-toggle-switch.md), which runs the same analysis on *mutual repression*: a positive loop built from two plus signs instead of two minus signs.

**Step 3 — nullclines.** Write $h(x) = x^2/(1+x^2)$.

$$\dot u = 0:\; u = 2.5\,h(v) \qquad\qquad \dot v = 0:\; v = 2.5\,h(u)$$

Two sigmoids, each rising from 0 to 2.5, and mirror images of each other across the diagonal. They are the blue and coral curves in the figure.

**Step 4 — fixed points.** The system is symmetric under $u \leftrightarrow v$. Because $g(x) \equiv 2.5\,h(x)$ is *monotonically increasing*, the composition $g\circ g$ has no fixed points that $g$ does not already have — a monotone increasing map has no 2-cycles — so **every fixed point lies on the diagonal.** Set $u = v = s$:

$$s = \frac{2.5\,s^{2}}{1+s^{2}} \;\Longrightarrow\; s\big(1+s^{2}\big) = 2.5\,s^{2} \;\Longrightarrow\; s\big(s^{2} - 2.5\,s + 1\big) = 0$$

$$s = 0, \qquad s = \frac{2.5 \pm \sqrt{6.25-4}}{2} = \frac{2.5\pm 1.5}{2} = 0.5 \ \text{ or } \ 2 .$$

Three fixed points, all in the positive quadrant: $(0,0)$, $(0.5,0.5)$, $(2,2)$. Check the middle one: $2.5(0.25)/1.25 = 0.5$ ✓.

**Step 5 — Jacobian.** With $h'(x) = 2x/(1+x^2)^2$,

$$J = \begin{pmatrix} -1 & \alpha h'(v) \\ \alpha h'(u) & -1 \end{pmatrix} \;\xrightarrow{\;u=v=s\;}\; \begin{pmatrix} -1 & c \\ c & -1\end{pmatrix}, \qquad c \equiv \frac{2\alpha s}{(1+s^{2})^{2}} .$$

This matrix has eigenvalues $-1 \pm c$, with eigenvectors $(1,1)^\top$ and $(1,-1)^\top$ — **along the diagonal and across it**, which is exactly the symmetry doing the work.

**Step 6 — classify.**

| Fixed point | $c$ | Eigenvalues | $\operatorname{tr}J$ | $\det J$ | Type |
|---|---|---|---|---|---|
| $(0,0)$ | $0$ | $-1,\,-1$ | $-2$ | $1$ | **stable star** |
| $(0.5,0.5)$ | $1.6$ | $+0.6,\,-2.6$ | $-2$ | $-1.56$ | **saddle** |
| $(2,2)$ | $0.4$ | $-0.6,\,-1.4$ | $-2$ | $0.84$ | **stable node** |

Check $c$ at $s=0.5$: $2(2.5)(0.5)/(1.25)^2 = 2.5/1.5625 = 1.6$ ✓. At $s=2$: $2(2.5)(2)/(5)^2 = 10/25 = 0.4$ ✓. Determinants: $1-c^2$, giving $1$, $-1.56$, $0.84$ ✓.

**Step 7 — read it.** The circuit is **bistable**: an OFF state with both genes silent and an ON state with both high, separated by a threshold. The saddle's unstable direction is $(1,1)$ — along the diagonal — so a nudge that raises *both* genes together is the one that flips the switch, while a nudge that raises one and lowers the other decays fastest ($\lambda = -2.6$). **The stable manifold of the saddle is the separatrix**, the green dashed curve, and it meets the axes near $u \approx 0.96$ and $v \approx 0.96$: a cell must push *both* factors to roughly the threshold concentration to commit.

**Two things worth noticing.**

First, **the OFF state is stable no matter how large $\alpha$ gets**, because $h'(0) = 0$ for $n = 2$: the Jacobian at the origin is $-I$ and the circuit is invisible to itself there. A Hill function with $n \ge 2$ is *flat* at the origin, so a silent mutual-activation pair cannot bootstrap itself. **With $n = 1$ this fails** — $h'(0) = 1$, the origin becomes a saddle, and the circuit has only one stable state. That is P1, and it is the intersection-counting claim made concrete.

Second, at $\alpha = 2$ the two non-trivial roots collide at $s = 1$ with $c = 1$, so one eigenvalue is exactly zero: a **saddle-node bifurcation** ([`dynamical-systems` 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)). Below $\alpha = 2$ the ON state does not exist. Turning gain into a switch is [3.2](03-02-bistability-toggle-switch.md)'s subject, and the whole S-curve is waiting there.

### Example 2 (why you'd care — negative feedback, ringing, and why two genes can never make a clock)

Now flip one sign: $X$ activates $Y$, and $Y$ represses $X$. A negative loop of length two.

$$\dot x = \frac{2}{1+y^{2}} - x, \qquad \dot y = x - y$$

**Fixed point.** $\dot y = 0$ gives $y = x$; substituting into $\dot x = 0$ gives $x(1+x^2) = 2$, i.e. $x^3 + x = 2$, whose only real root is $x = 1$. So $(1,1)$, and it is unique — a negative loop cannot be bistable, which P3 proves in general.

**Jacobian.** $\partial\dot x/\partial y = -2\cdot 2y/(1+y^2)^2 = -4/4 = -1$ at $y=1$:

$$J = \begin{pmatrix} -1 & -1 \\ 1 & -1\end{pmatrix}, \qquad \operatorname{tr}J = -2, \quad \det J = 1 + 1 = 2, \quad \operatorname{tr}^2 - 4\det = 4 - 8 = -4 < 0$$

$$\lambda = -1 \pm i \qquad \Longrightarrow\qquad \textbf{stable spiral.}$$

**Read it.** The circuit **rings**: perturb it and the output oscillates back to baseline with angular frequency 1 and envelope $e^{-t}$, so the period is $2\pi \approx 6.3$ time units and roughly one visible overshoot before the amplitude falls below a tenth. Restore units — if the decay rate is $\alpha = 0.023\ \text{min}^{-1}$ (the *E. coli* dilution rate of [2.1](02-01-input-functions-promoter-logic.md)), that period is $2\pi/\alpha \approx 270$ min. This is the **damped second-order response** of [`control-systems` 2.2](../../control-systems/lessons/02-02-second-order-response.md), with damping ratio $\zeta = -\operatorname{tr}J/(2\sqrt{\det J}) = 2/(2\sqrt2) = 0.71$ — the textbook well-damped setpoint. Negative feedback with lag overshoots; that is not a modelling artifact, it is what negative feedback with lag does.

**Now the result that makes this example worth its space.** For *any* two-node circuit in which neither gene regulates itself,

$$\dot x = f(y) - \alpha_x x, \qquad \dot y = g(x) - \alpha_y y \qquad\Longrightarrow\qquad \operatorname{tr}J = -(\alpha_x + \alpha_y) < 0 \ \text{ always.}$$

**The trace can never reach zero, so a Hopf bifurcation is impossible.** No two-gene circuit of this form sustains an oscillation — it can ring, and the ringing always dies. Sustained oscillation needs either a third node to supply more phase lag ([3.4](03-04-oscillations-repressilator-hopf.md)'s repressilator) or a positive diagonal entry from self-activation ([2.3](02-03-positive-autoregulation.md)) to fight the trace. **This is a hard architectural constraint derived from two entries of a matrix**, and it is the sort of thing phase-plane analysis is for: the conclusion holds for every $f$, every $g$, and every parameter value.

## Watch out

- **You might classify a fixed point the algebra found at a negative concentration.** It is not a steady state. Restrict to the positive quadrant *before* step 5, and remember that the flow on each axis points inward, so the quadrant is invariant and nothing ever leaves it.
- **You might think three nullcline crossings require special parameters.** They require a **sigmoid**, which requires $n > 1$. With $n = 1$ the nullclines are hyperbolas and the geometry forbids the third crossing at any gain — no amount of tuning rescues a non-cooperative switch ([1.4](01-04-cooperativity-hill-ultrasensitivity.md)).
- **You might read "unstable" as "transient".** An unstable fixed point is not a state the cell passes through slowly; it is a state the cell is never in. What it does mark is a *boundary*, and boundaries are measurable — the saddle in Example 1 sets the dose at which a population splits.
- **You might trust eigenvalues about the size of a basin.** They describe an infinitesimal neighbourhood. A stable state whose separatrix runs within one noise standard deviation is not a memory device, however negative its eigenvalues ([4.3](04-03-stochastic-gene-expression.md)).
- **You might carry six parameters through the algebra.** Nondimensionalize first. Example 1's two parameters $(\alpha, n)$ replace $\beta_u, \beta_v, K_u, K_v, \alpha_u, \alpha_v, n$, and only then does "the critical gain is 2" mean anything.
- **You might expect the Jacobian to be constant.** It is evaluated *at a fixed point*, and it differs at each one. In Example 1 the same matrix template gives a star, a saddle and a node, purely through $c$.

## One-liner

> Nullclines find the steady states, the Jacobian classifies them, and the positive quadrant is the only place worth looking — and then you translate: stable node means a committed cell fate, saddle means a threshold whose stable manifold is the decision boundary, spiral means ringing, and how many fixed points you get at all is decided by whether the Hill functions are steep enough to cross three times.

## Problems

**P1 (🟢)** Take Example 1's circuit with the same gain $\alpha = 2.5$ but **$n = 1$**: $\dot u = 2.5\,v/(1+v) - u$, $\dot v = 2.5\,u/(1+u) - v$. (a) Find all fixed points in the positive quadrant. (b) Classify each from the Jacobian. (c) State in one sentence what the circuit can no longer do, and why the Hill coefficient was responsible.

**P2 (🟡)** Suppose $u$ in Example 1 is much faster than $v$ (say $u$ is a phosphorylated protein and $v$ a transcription factor), so the system is $\varepsilon\dot u = 2.5\,h(v) - u$, $\dot v = 2.5\,h(u) - v$ with $\varepsilon \ll 1$ and $h(x) = x^2/(1+x^2)$. (a) Write the reduced one-dimensional system on the slow manifold. (b) Evaluate its stability at $v = 0$, $v = 0.5$ and $v = 2$, and check the answers against Example 1's table. (c) Show in general that the reduced system's eigenvalue equals $\det J / f_u$, where $f_u = \partial f/\partial u$.

**P3 (🔴, bridges to [3.4](03-04-oscillations-repressilator-hopf.md) and [`control-systems`](../../control-systems/syllabus.md))** Consider any two-gene circuit with no autoregulation, $\dot x = f(y) - \alpha_x x$ and $\dot y = g(x) - \alpha_y y$, with $\alpha_x,\alpha_y > 0$. Define the **loop gain** $L = f'(y^*)g'(x^*)/(\alpha_x\alpha_y)$ at a fixed point. (a) Write $\operatorname{tr}J$ and $\det J$ in terms of $\alpha_x,\alpha_y$ and $L$. (b) Show that a **negative** loop ($L<0$) can never produce a saddle, and a **positive** loop can never produce a spiral. (c) State the condition on $L$ for bistability, and say why no circuit of this form can undergo a Hopf bifurcation. (d) Name the two architectural changes that escape the conclusion in (c).

<details>
<summary>Solutions</summary>

**P1 (a)** Write $g(x) = 2.5\,x/(1+x)$, which is monotone increasing, so again all fixed points are on the diagonal:

$$s = \frac{2.5\,s}{1+s} \;\Longrightarrow\; s(1+s) = 2.5\,s \;\Longrightarrow\; s\,(s - 1.5) = 0 \;\Longrightarrow\; s = 0 \ \text{ or } \ s = 1.5 .$$

**Only two fixed points** — the sigmoid has become a hyperbola and the third crossing is gone.

**(b)** With $h_1(x) = x/(1+x)$ and $h_1'(x) = 1/(1+x)^2$, the Jacobian at $u=v=s$ is again $\begin{pmatrix}-1 & c\\ c & -1\end{pmatrix}$ with $c = 2.5/(1+s)^2$, eigenvalues $-1\pm c$.

| $s$ | $c$ | Eigenvalues | Type |
|---|---|---|---|
| $0$ | $2.5$ | $+1.5,\ -3.5$ | **saddle** |
| $1.5$ | $2.5/6.25 = 0.4$ | $-0.6,\ -1.4$ | **stable node** |

**(c)** The circuit is **monostable**: the origin has become a saddle, so a silent cell inevitably switches on and cannot stay off. All memory is gone — there is exactly one attractor.

**Why $n$ was responsible:** $h'(0) = 0$ for $n \ge 2$ and $h'(0) = 1$ for $n = 1$. A quadratic Hill function is *flat* at the origin, so an empty circuit generates no production and OFF stays stable; a hyperbolic one has finite slope there, so a single molecule already produces a finite response and the OFF state leaks upward. Geometrically it is the same statement as "two hyperbolas cross once, two sigmoids can cross three times."

**P2 (a)** Set $\varepsilon = 0$: the fast variable sits on its own nullcline, $u = 2.5\,h(v)$ — the blue curve of the figure, now read as the **slow manifold**. Substituting:

$$\dot v = 2.5\,h\big(2.5\,h(v)\big) - v .$$

**(b)** Differentiate, using the chain rule and writing $c(x) = 2.5\,h'(x)$:

$$\frac{d\dot v}{dv} = 2.5\,h'(u)\cdot 2.5\,h'(v) - 1 = c(u)\,c(v) - 1 \;\xrightarrow{\;u=v=s\;}\; c^{2} - 1 .$$

| $s$ | $c$ | $c^2-1$ | Reduced verdict | Example 1 |
|---|---|---|---|---|
| $0$ | $0$ | $-1$ | stable | stable star ✓ |
| $0.5$ | $1.6$ | $+1.56$ | unstable | saddle ✓ |
| $2$ | $0.4$ | $-0.84$ | stable | stable node ✓ |

**The reduction reproduces every stability verdict**, which it must: the fast direction is strongly attracting, so the only eigenvalue in doubt is the slow one. Note that it cannot reproduce the *type* — a saddle needs two dimensions, and on the slow manifold the saddle is simply a repelling point, which is exactly the information a one-dimensional model can carry.

**(c)** General slow–fast system $\varepsilon\dot u = f(u,v)$, $\dot v = g(u,v)$. The slow manifold is $f(u,v) = 0$; differentiate implicitly for its slope $du/dv = -f_v/f_u$. Then

$$\frac{d}{dv}\,g\big(u(v),v\big) = g_u\frac{du}{dv} + g_v = g_v - \frac{f_v g_u}{f_u} = \frac{f_u g_v - f_v g_u}{f_u} = \boxed{\frac{\det J}{f_u}}$$

Check against (b): here $f_u = -1$ and $\det J = 1-c^2$, so $\det J/f_u = c^2-1$ ✓, matching the table.

**Two consequences worth keeping.** The reduced eigenvalue is the 2D determinant divided by the fast eigenvalue — the standard statement that $\det J = \lambda_{\text{fast}}\lambda_{\text{slow}}$. And the reduction is valid only where $f_u < 0$ (the fast subsystem must be stable, [1.1](01-01-systems-view-of-the-cell.md)); at a **fold** of the slow manifold $f_u = 0$, the formula blows up and the trajectory jumps. That jump is the relaxation oscillator of [3.4](03-04-oscillations-repressilator-hopf.md).

**P3 (a)** $$J = \begin{pmatrix} -\alpha_x & f'(y^*) \\ g'(x^*) & -\alpha_y\end{pmatrix}$$

$$\operatorname{tr}J = -(\alpha_x + \alpha_y), \qquad \det J = \alpha_x\alpha_y - f'g' = \alpha_x\alpha_y\,(1 - L) .$$

**(b)** Since $\alpha_x\alpha_y > 0$:

- **Negative loop, $L<0$:** $\det J = \alpha_x\alpha_y(1-L) > \alpha_x\alpha_y > 0$. A saddle requires $\det J<0$, so **no saddle, ever** — and since the fixed point is then never a saddle, the circuit cannot have the three-fixed-point structure bistability needs.
- **Positive loop, $L>0$:** the discriminant is

$$\operatorname{tr}^2 - 4\det = (\alpha_x+\alpha_y)^2 - 4\alpha_x\alpha_y + 4f'g' = (\alpha_x - \alpha_y)^2 + 4f'g' > 0 ,$$

since $f'g' = L\alpha_x\alpha_y > 0$. Real eigenvalues, so **no spiral, ever.**

**Positive loops give switches and never ring; negative loops ring and never switch.** The sign of the loop, not its strength, decides which.

**(c)** Bistability needs a saddle between two stable states, i.e. $\det J < 0$:

$$\boxed{\;L > 1\;}$$

*In words: the loop gain must exceed unity — the round-trip amplification through both genes must beat the round-trip decay.* This is the same unit-gain criterion as the graphical three-crossing condition of [2.3](02-03-positive-autoregulation.md), now read off a determinant. (Check Example 1: $\alpha_x=\alpha_y=1$, $f'=g'=c$, so $L = c^2$, giving $L = 2.56 > 1$ at the saddle and $L = 0.16 < 1$ at the ON state ✓.)

**No Hopf** because a Hopf bifurcation requires a complex pair to cross the imaginary axis, i.e. $\operatorname{tr}J = 0$ with $\det J > 0$ — and here $\operatorname{tr}J = -(\alpha_x+\alpha_y)$ is **strictly negative for every parameter value**. The trace never even approaches zero. So a two-node circuit of this form has no sustained oscillation, for any $f$, any $g$, any Hill coefficient, any gain.

**(d) Two escapes.**

1. **Add nodes.** Each extra stage adds phase lag; a three-gene repression ring has a circulant Jacobian whose complex eigenvalue pair *can* cross the axis, which is the repressilator's Hopf bifurcation ([3.4](03-04-oscillations-repressilator-hopf.md), [`dynamical-systems` 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md)). Explicit time delay does the same job in a two-variable delay equation — the trace argument above assumes an ODE.
2. **Add self-activation.** With autoregulation the diagonal entry becomes $\partial f_x/\partial x = f'_{\text{self}} - \alpha_x$, which can be positive, so the trace can reach zero. **Activator–repressor relaxation oscillators are built exactly this way** — a self-activating fast variable plus a slow inhibitor — and that is the cell cycle's architecture ([`molecular-cell-biology` 3.1](../../molecular-cell-biology/lessons/03-01-cell-cycle-engine-irreversibility.md)).

**The design reading:** oscillation is expensive in parts. You cannot get a clock out of two genes wired the obvious way, and knowing that before you build one is worth more than any simulation ([4.5](04-05-synthetic-biology-pattern-formation.md)).

</details>

## Flashback

**From Lesson 1.2 (mass action & reaction-rate ODEs):** A receptor cycles between the surface and the interior. Ligand $L$ binds surface receptor $R$ to form complex $C$; $C$ is internalized to $R_i$, destroying the bound ligand; $R_i$ recycles to the surface.

$$\text{R1: } R + L \xrightarrow{k_1} C, \quad \text{R2: } C \xrightarrow{k_{-1}} R + L, \quad \text{R3: } C \xrightarrow{k_3} R_i, \quad \text{R4: } R_i \xrightarrow{k_4} R$$

Order the species $(R,\,L,\,C,\,R_i)$. (a) Write $S$. (b) Find the left null space and state every conservation law; explain why ligand is not conserved. (c) The medium buffers $L$ at a fixed level. Show the system becomes planar, and find the steady state for $k_1[L] = 1$, $k_{-1} = 2$, $k_3 = 1$, $k_4 = 1\ \text{s}^{-1}$ with total receptor $R_T = 100$ per cell.

<details>
<summary>Solution</summary>

**(a)** Four species, four reactions, so $S$ is $4\times4$ — one column per reaction, entries the net change:

$$S = \begin{pmatrix} -1 & +1 & 0 & +1 \\ -1 & +1 & 0 & 0 \\ +1 & -1 & -1 & 0 \\ 0 & 0 & +1 & -1 \end{pmatrix} \quad \begin{matrix} R \\ L \\ C \\ R_i \end{matrix}$$

**(b)** Set $\mathbf{w}^\top S = \mathbf{0}^\top$, one equation per column:

$$\text{R1:}\; -w_R - w_L + w_C = 0, \quad \text{R2: same, negated}, \quad \text{R3:}\; -w_C + w_{R_i} = 0, \quad \text{R4:}\; w_R - w_{R_i} = 0$$

R4 gives $w_R = w_{R_i}$; R3 gives $w_C = w_{R_i} = w_R$; then R1 forces $w_L = w_C - w_R = 0$. One free parameter, so $\dim N(S^\top) = 1$ and $\operatorname{rank}S = 3$:

$$\mathbf{w} = (1,0,1,1): \qquad \boxed{\;R + C + R_i = R_T\;}$$

**Total receptor is conserved; ligand is not, and the null space says so by forcing $w_L = 0$.** Reaction R3 consumes a $C$ — which contains a ligand — and returns only $R_i$, so the ligand is destroyed. **Internalization is an exchange reaction in disguise**: it is the model's boundary, exactly as in [1.2](01-02-mass-action-rate-odes.md)'s branch-point example, and a boundary destroys conservation.

**(c)** Buffering $L$ removes it from the state vector and absorbs its concentration into the rate constant, $k_1' \equiv k_1[L]$. Three species remain, with one conservation law, so

$$3 - 1 = \mathbf{2} \text{ independent ODEs} \;\Longrightarrow\; \text{a phase plane.}$$

Take $C$ and $R_i$ as the state and recover $R = R_T - C - R_i$:

$$\dot C = k_1'\,(R_T - C - R_i) - (k_{-1}+k_3)\,C, \qquad \dot R_i = k_3 C - k_4 R_i$$

Steady state, from $\dot R_i = 0$: $R_i^* = (k_3/k_4)\,C^* = C^*$. Substituting into $\dot C = 0$ with $k_1' = 1$ and $k_{-1}+k_3 = 3$:

$$1\cdot(100 - 2C^*) = 3C^* \;\Longrightarrow\; 100 = 5C^* \;\Longrightarrow\; C^* = 20, \quad R_i^* = 20, \quad R^* = 60 .$$

Check: $\dot C = 1(60) - 3(20) = 0$ ✓ and $\dot R_i = 1(20) - 1(20) = 0$ ✓.

**Read it:** at steady state 40 percent of the cell's receptor is not on the surface, so a ligand-binding assay on intact cells measures $R^* = 60$, not $R_T = 100$. The system is emphatically **not at equilibrium** — a steady flux $k_3C^* = 20$ receptors per second circulates through the internalization loop, paid for by the ligand being destroyed. Steady state with flux, which is [1.2](01-02-mass-action-rate-odes.md)'s central distinction and the reason a live cell's numbers look constant while everything moves.

**And note what the reduction bought:** four coupled ODEs became a two-variable system that this lesson's machinery can handle completely. **Step 1 of the checklist is not preamble — it is what makes a phase plane available at all.**

</details>

## Connections

- **Backward:** [1.2](01-02-mass-action-rate-odes.md) supplies the ODEs and the conservation laws that get a system down to two variables; [1.4](01-04-cooperativity-hill-ultrasensitivity.md) supplies the sigmoids whose steepness sets the number of fixed points; [1.1](01-01-systems-view-of-the-cell.md)'s timescale separation reappears as the slow manifold. The mathematics is [`dynamical-systems` 1.3](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md), [1.4](../../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md) and [1.5](../../dynamical-systems/lessons/01-05-phase-portraits.md), used here rather than rebuilt.
- **Forward:** [3.2](03-02-bistability-toggle-switch.md) runs this exact checklist on mutual *repression* and turns the three-crossing geometry into an exact critical gain and a hysteresis loop; [3.3](03-03-integral-control-exact-adaptation.md) asks which features of a fixed point survive parameter change; [3.4](03-04-oscillations-repressilator-hopf.md) needs the third node that Example 2 proved was necessary, plus limit cycles ([`dynamical-systems` 2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md)) and the Hopf bifurcation ([3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md)).
- **Sideways:** [`molecular-cell-biology` 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) told the feedback story qualitatively and with molecules attached; this is the same story with a Jacobian. The Jacobian *is* the state matrix $A$ of a linearized plant ([`control-systems` 5.1](../../control-systems/lessons/05-01-state-space-modeling.md)), its eigenvalues are the closed-loop poles, and Example 2's spiral is a second-order step response with damping ratio 0.71 ([`control-systems` 2.2](../../control-systems/lessons/02-02-second-order-response.md)); the eigenvector geometry is [`linalg-refresher` 3.1](../../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md).
