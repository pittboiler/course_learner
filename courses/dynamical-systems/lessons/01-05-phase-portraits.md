# Dynamical Systems & Chaos · Lesson 1.5: Drawing phase portraits

> ⏱ ~15 min · Module 1: Flows on the line and the plane · Builds on: [Lesson 1.4](01-04-linearization-hartman-grobman.md) · Unlocks: [Lesson 2.1](02-01-conservative-reversible-systems.md)

## Why this matters

You now have every local tool: find the fixed points, linearize, read off node/saddle/spiral from the Jacobian. But a list of fixed points is not understanding — you want the *global* movie. Where does a trajectory started *here* end up? Which equilibrium wins? Is there a knife-edge dividing two fates? This lesson stitches the local pictures into one drawing that answers all of those at a glance, without ever solving the ODE. That drawing — the phase portrait — is the native language of everything downstream: it is how [analytical-mechanics](../../analytical-mechanics/syllabus.md) reads a pendulum's energy landscape, and how [grad-micro](../../grad-micro/syllabus.md) asks whether price adjustment settles to equilibrium.

## The idea

Two equations,
$$\dot x = f(x,y), \qquad \dot y = g(x,y),$$
assign a velocity arrow to every point of the plane. The phase portrait is just that arrow field, summarized by a few well-chosen curves.

The trick is to first ignore *most* of the information and ask only about **signs**. Draw the two curves where each velocity component vanishes — the **nullclines**. On $\dot x = 0$ the flow has no horizontal push, so trajectories cross it moving *straight up or down*; on $\dot y = 0$ they cross moving *straight left or right*. Where an $\dot x=0$ curve meets a $\dot y=0$ curve, *both* velocities vanish — that's a fixed point.

The nullclines slice the plane into a few regions, and inside each region the signs of $\dot x$ and $\dot y$ never change, so the flow points into one of four compass quadrants (↗ ↘ ↖ ↙) throughout. Sketch that coarse arrow in each region, drop in the local picture at every fixed point (from Lesson 1.4's classification), and connect the arrows into smooth trajectories. The result is the whole qualitative story.

## The formal version

**Definition (nullclines).** The **$x$-nullcline** is the set $\{(x,y): f(x,y)=0\}$; the **$y$-nullcline** is $\{(x,y): g(x,y)=0\}$.

*In words:* the $x$-nullcline is where horizontal motion stops, the $y$-nullcline where vertical motion stops.

**Fixed points.** $(x^*,y^*)$ is a fixed point iff it lies on *both* nullclines: $f(x^*,y^*)=g(x^*,y^*)=0$. So fixed points are exactly the intersection points of an $x$-nullcline with a $y$-nullcline.

**Flow on a nullcline.** On the $x$-nullcline $\dot x=0$, so the velocity is $(0,\dot y)$ — purely vertical. On the $y$-nullcline the velocity is $(\dot x,0)$ — purely horizontal. Trajectories therefore *cross* nullclines perpendicular to the zeroed axis (never tangent), except at fixed points where they stop.

**Local assembly.** Near each fixed point, Lesson 1.4 gives the linearization $\dot{\mathbf u}=J\mathbf u$ with Jacobian
$$J=\begin{pmatrix} f_x & f_y \\ g_x & g_y \end{pmatrix}\Bigg|_{(x^*,y^*)}.$$
When the fixed point is hyperbolic (no eigenvalue with zero real part), Hartman–Grobman guarantees the true portrait looks like the linear one nearby — node, saddle, or spiral, with the eigenvectors as the local straight-line directions.

**Definition (separatrix).** A **separatrix** is a trajectory that separates regions of qualitatively different behavior. The workhorse case: the **stable manifold of a saddle** — the pair of trajectories that flow *into* the saddle, tangent there to the stable ($\lambda<0$) eigenvector. It divides the plane into **basins of attraction**, each basin being the set of initial conditions funneling to one particular attractor.

*In words:* a saddle's stable manifold is the ridge-line watershed — start on one side and you roll to one equilibrium, start on the other and you roll to a different one.

## Picture

The bistable competition system worked below, drawn end to end. Blue and red lines are the interior nullclines; the axes are nullclines too (see the example). Four fixed points are marked and classified; gray curves are representative trajectories; the green dashed curve is the separatrix (the saddle's stable manifold) splitting the two basins.

![Phase portrait of a bistable competition system: two straight nullclines crossing, an unstable node at the origin, two stable nodes on the axes, a saddle at (1,1), a green dashed separatrix through the saddle dividing the plane into two basins, with gray trajectories flowing to the two stable nodes.](assets/01-05-fig1.svg)

## Worked examples

**Example 1 (reading a single crossing).** Take $\dot x = y - x^2,\ \dot y = x - y$. The $x$-nullcline is the parabola $y=x^2$; the $y$-nullcline is the line $y=x$. They meet where $x^2=x$, i.e. $x=0$ and $x=1$: fixed points $(0,0)$ and $(1,1)$. On the parabola the flow is vertical; on the line it is horizontal. Test the sign of $\dot y=x-y$ just below the line $y=x$ (say $(1,0)$): $\dot y = 1>0$, so below the line the flow pushes *up*; above it, down. That one sign already tells you trajectories are squeezed toward the line — the skeleton of the portrait before any eigenvalue is computed.

**Example 2 (a full portrait — competition to the death).** Two species with populations $x,y\ge 0$ (Strogatz's "rabbits vs. sheep"):
$$\dot x = x\,(3 - x - 2y), \qquad \dot y = y\,(2 - x - y).$$

*Step 1 — nullclines.* $\dot x=0$ factors as $x=0$ **or** $x+2y=3$. $\dot y=0$ factors as $y=0$ **or** $x+y=2$. So each nullcline is a *pair* of lines: the axes plus one slanted line each.

*Step 2 — fixed points* (each is an $x$-nullcline piece meeting a $y$-nullcline piece):
- $x=0,\ y=0 \Rightarrow (0,0)$
- $y=0,\ x+2y=3 \Rightarrow (3,0)$
- $x=0,\ x+y=2 \Rightarrow (0,2)$
- $x+2y=3,\ x+y=2 \Rightarrow$ subtract: $y=1,\ x=1 \Rightarrow (1,1)$.

*Step 3 — Jacobian.* With $f=3x-x^2-2xy$ and $g=2y-xy-y^2$,
$$J=\begin{pmatrix} 3-2x-2y & -2x \\ -y & 2-x-2y \end{pmatrix}.$$

| Fixed point | $J$ | $\operatorname{tr},\ \det$ | eigenvalues | type |
|---|---|---|---|---|
| $(0,0)$ | $\begin{pmatrix}3&0\\0&2\end{pmatrix}$ | $5,\ 6$ | $3,\ 2$ | unstable node |
| $(3,0)$ | $\begin{pmatrix}-3&-6\\0&-1\end{pmatrix}$ | $-4,\ 3$ | $-3,\ -1$ | stable node |
| $(0,2)$ | $\begin{pmatrix}-1&0\\-2&-2\end{pmatrix}$ | $-3,\ 2$ | $-1,\ -2$ | stable node |
| $(1,1)$ | $\begin{pmatrix}-1&-2\\-1&-1\end{pmatrix}$ | $-2,\ -1$ | $-1\pm\sqrt2$ | **saddle** |

(All four are hyperbolic, so Hartman–Grobman applies at each — the linear labels are the truth nearby.)

*Step 4 — flow directions between the nullclines.* The two slanted lines cross at $(1,1)$ and, with the axes, carve the first quadrant into four regions. Pick one test point in each and read the signs of $\dot x=x(3-x-2y)$ and $\dot y=y(2-x-y)$:

| Region (test point) | $x+2y$ vs $3$ | $x+y$ vs $2$ | $(\dot x,\dot y)$ | arrow |
|---|---|---|---|---|
| near origin $(0.5,0.5)$ | $<3$ | $<2$ | $(+,+)$ | ↗ |
| lower-right $(2.5,0.1)$ | $<3$ | $>2$ | $(+,-)$ | ↘ |
| upper-left $(0.2,1.7)$ | $>3$ | $<2$ | $(-,+)$ | ↖ |
| far corner $(2,1.5)$ | $>3$ | $>2$ | $(-,-)$ | ↙ |

*Step 5 — assemble.* Both single-species states $(3,0)$ and $(0,2)$ are stable nodes; the coexistence state $(1,1)$ is a saddle; the origin repels everything. The saddle's **stable manifold** (green dashed) runs from the origin up through $(1,1)$ and out to the upper right, and it is the **separatrix**: start below it and you drain to $(3,0)$ (rabbits win); start above it and you drain to $(0,2)$ (sheep win). Coexistence is impossible except on the knife-edge itself. This is *competitive exclusion* — and the entire conclusion came from four sign checks and four Jacobians, never from a solution formula.

## Watch out

- You might think a nullcline is a trajectory the flow travels *along* — but it's a curve the flow *crosses* (vertically on $\dot x=0$, horizontally on $\dot y=0$). The only points where a trajectory can rest on a nullcline are the fixed points. (Exception worth noting: an *invariant* line like the axis $x=0$ here is simultaneously a nullcline and a union of trajectories, because $\dot x=0$ holds all along it — invariance, not a coincidence.)
- You might think any two nullclines crossing gives a fixed point — but you need one $\dot x=0$ curve meeting one $\dot y=0$ curve. Where two *pieces of the same* nullcline cross (both from $\dot x=0$), only $\dot x$ vanishes; $\dot y$ generally doesn't, so it's not a fixed point.
- You might think the separatrix is the saddle's *unstable* manifold — but the curve that divides basins of *attractors* is the **stable** manifold (trajectories flowing *in*, tangent to the $\lambda<0$ eigenvector). The unstable manifold instead connects the saddle *out* toward the attractors, threading the interior of each basin.

## One-liner

> Nullclines locate the fixed points and quantize the flow into ↗↘↖↙ regions; the saddle's stable manifold is the watershed deciding which basin — that's the whole portrait, no solving required.

## Problems

Consider the system
$$\dot x = y - x, \qquad \dot y = x^2 - 4y.$$

**P1 (🟢)** Write the two nullclines and find all fixed points.

**P2 (🟡)** Compute the Jacobian and classify each fixed point (node / saddle / spiral, stable or unstable) using trace, determinant, and eigenvalues.

**P3 (🔴, optional)** At the saddle you found, compute the two eigenvectors and state which one is tangent to the **separatrix** (the stable manifold). Give its slope $dy/dx$ at the saddle.

<details>
<summary>Solutions</summary>

**P1** $\dot x=0 \Rightarrow y=x$ (the $x$-nullcline); $\dot y=0 \Rightarrow y=\tfrac{x^2}{4}$ (the $y$-nullcline). Intersecting: $x=\tfrac{x^2}{4}\Rightarrow x^2-4x=0\Rightarrow x=0$ or $x=4$. Fixed points $(0,0)$ and $(4,4)$.

**P2** With $f=y-x,\ g=x^2-4y$,
$$J=\begin{pmatrix} f_x & f_y \\ g_x & g_y \end{pmatrix}=\begin{pmatrix} -1 & 1 \\ 2x & -4 \end{pmatrix}.$$
At $(0,0)$: $J=\begin{pmatrix}-1&1\\0&-4\end{pmatrix}$, upper-triangular so eigenvalues are the diagonal $-1,-4$ (both real, negative, distinct) — a **stable node**. Check: $\operatorname{tr}=-5<0,\ \det=4>0,\ \operatorname{tr}^2-4\det=25-16=9>0$. ✓

At $(4,4)$: $J=\begin{pmatrix}-1&1\\8&-4\end{pmatrix}$, $\operatorname{tr}=-5,\ \det=(-1)(-4)-(1)(8)=4-8=-4<0$. A negative determinant means real eigenvalues of opposite sign — a **saddle**. Explicitly $\lambda^2+5\lambda-4=0\Rightarrow \lambda=\tfrac{-5\pm\sqrt{41}}{2}$, i.e. $\lambda_+\approx0.70>0$ and $\lambda_-\approx-5.70<0$.

**P3** At the saddle $(4,4)$, solve $(J-\lambda I)\mathbf v=0$ with $J=\begin{pmatrix}-1&1\\8&-4\end{pmatrix}$. The first row gives $(-1-\lambda)v_1+v_2=0$, so $v_2=(1+\lambda)v_1$ and $\mathbf v=\big(1,\ 1+\lambda\big)$, with slope $\tfrac{dy}{dx}=1+\lambda$.

- Unstable direction $\lambda_+=\tfrac{-5+\sqrt{41}}{2}\approx0.70$: slope $1+\lambda_+=\tfrac{-3+\sqrt{41}}{2}\approx1.70$.
- Stable direction $\lambda_-=\tfrac{-5-\sqrt{41}}{2}\approx-5.70$: slope $1+\lambda_-=\tfrac{-3-\sqrt{41}}{2}\approx-4.70$.

The **separatrix is the stable manifold**, tangent at the saddle to the $\lambda_-$ eigenvector, with slope $\dfrac{dy}{dx}=\dfrac{-3-\sqrt{41}}{2}\approx-4.70$. (The steep negative slope makes sense: trajectories dive almost vertically onto the saddle along it.)

</details>

## Flashback

**From [Lesson 1.4](01-04-linearization-hartman-grobman.md) (linearization & classification):** For the nonlinear system
$$\dot x = -x - 2y, \qquad \dot y = 2x - y + x^2,$$
compute the Jacobian at the origin (a fixed point) and classify it. This is the same fixed-point read that phase portraits run on, and the *lingua franca* of [analytical-mechanics](../../analytical-mechanics/syllabus.md): a damped oscillator sits at exactly such a fixed point.

<details>
<summary>Solution</summary>

Check $(0,0)$ is a fixed point: $\dot x=0,\ \dot y=0$ there. ✓ With $f=-x-2y,\ g=2x-y+x^2$,
$$J=\begin{pmatrix} -1 & -2 \\ 2+2x & -1 \end{pmatrix}, \qquad J(0,0)=\begin{pmatrix} -1 & -2 \\ 2 & -1 \end{pmatrix}.$$
The nonlinear term $x^2$ contributes $2x$ to $g_x$, which vanishes at the origin — the linearization only sees the linear part, as expected. Now $\operatorname{tr}=-2$, $\det=(-1)(-1)-(-2)(2)=1+4=5$. Discriminant $\operatorname{tr}^2-4\det=4-20=-16<0$, so eigenvalues are complex: $\lambda=\tfrac{-2\pm\sqrt{-16}}{2}=-1\pm2i$. Complex with negative real part $\Rightarrow$ a **stable spiral**. Since the origin is hyperbolic ($\Re\lambda=-1\ne0$), Hartman–Grobman certifies the true nonlinear flow spirals inward there too.

</details>

## Connections

- **Backward:** this is Lesson 1.4's linearization used four times over — one Jacobian per fixed point — plus Lesson 1.3's trace–determinant chart to name each type at a glance. The nullcline sign-reading is the 2-D upgrade of Lesson 1.1's phase-line arrows.
- **Forward:** [Lesson 2.1](02-01-conservative-reversible-systems.md) uses a conserved quantity to draw closed orbits directly (centers that linearization can't confirm); Module 2 then asks the global questions phase portraits raise — can a trajectory close into a limit cycle (2.3–2.4), and how many fixed points must a cycle enclose (2.5, index theory)?
- **Sideways:** phase portraits are the working language of [analytical-mechanics](../../analytical-mechanics/syllabus.md) — position–momentum $(q,p)$ trajectories, with saddles and their separatrices marking the boundary between libration and rotation of a pendulum. The same stable/unstable-manifold picture governs whether Walrasian *tâtonnement* price adjustment converges in [grad-micro](../../grad-micro/syllabus.md).
