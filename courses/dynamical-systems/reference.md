# Dynamical Systems & Chaos · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is the art of reading a nonlinear system without solving it. Three
questions, over and over: *where does the flow stop* (fixed points), *what does it
do nearby* (linearize, then classify), and *how does that story rewrite itself as
a knob turns* (bifurcations, and past a threshold, chaos). The two tables you'll
reach for most are the trace–determinant classification and the bifurcation table;
both are below, with the eigenvalue condition spelled out for every row.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\dot x$, $\dot{\mathbf x}$ | rate of change in time, $dx/dt$ — the velocity the state is assigned at its current position | [1.1](lessons/01-01-flows-on-the-line.md) |
| $f(x)$ in $\dot x=f(x)$ | the **velocity field**, not a solution; its **zeros** are the equilibria | [1.1](lessons/01-01-flows-on-the-line.md) |
| $x^*$, $\mathbf x^*$ | a fixed point (equilibrium) — where the velocity vanishes | [1.1](lessons/01-01-flows-on-the-line.md) |
| $\eta$, $\mathbf u$ | the small displacement from a fixed point, $\mathbf u=\mathbf x-\mathbf x^*$ | [1.1](lessons/01-01-flows-on-the-line.md) |
| $A$, $\lambda_{1,2}$, $\mathbf v_{1,2}$ | the matrix of a linear system, its eigenvalues (growth rates) and eigenvectors (invariant rays) | [1.2](lessons/01-02-linear-systems-plane.md) |
| $\alpha\pm i\omega$ | a complex eigenvalue pair: $\alpha$ is the spiral's growth rate, $\omega$ its angular speed | [1.2](lessons/01-02-linear-systems-plane.md) |
| $\tau$, $\Delta$ | trace and determinant of a $2\times2$ matrix — the sum and product of its eigenvalues | [1.3](lessons/01-03-trace-determinant-classification.md) |
| $J$, $D\mathbf f(\mathbf x^*)$ | the Jacobian: the matrix of first partials, evaluated **at** the fixed point | [1.4](lessons/01-04-linearization-hartman-grobman.md) |
| $E(x,y)$ | a conserved quantity — constant along each trajectory, different from orbit to orbit | [2.1](lessons/02-01-conservative-reversible-systems.md) |
| $V(x)$ | a **potential**, in $\ddot x=-V'(x)$ — the landscape the state rolls downhill on | [2.1](lessons/02-01-conservative-reversible-systems.md) |
| $V(\mathbf x)$, $\dot V$ | a **Lyapunov function** and its rate along the flow. Same letter, different job — read the context | [2.2](lessons/02-02-lyapunov-functions.md) |
| $\varphi(x,y)$ | a Dulac function — the weight you multiply the field by before taking its divergence | [2.4](lessons/02-04-poincare-bendixson.md) |
| $I_C$, $I(\mathbf x^*)$ | index of a loop / of a fixed point — net counterclockwise turns of the field | [2.5](lessons/02-05-index-theory.md) |
| $\mu$ | the bifurcation parameter — the one knob you turn | [3.1](lessons/03-01-saddle-node-transcritical.md) |
| $\mu_c$, $r_c$ | the critical (threshold) value of that knob | [3.1](lessons/03-01-saddle-node-transcritical.md) |
| $\sigma,\ \rho,\ \beta$ | Lorenz parameters: Prandtl number, driving (Rayleigh), aspect ratio. Some texts write $r$ for $\rho$ and $b$ for $\beta$ | [4.1](lessons/04-01-lorenz-system.md) |
| $\boldsymbol\delta(t)$ | separation between two nearby trajectories; $\boldsymbol\delta_0$ its initial size | [4.2](lessons/04-02-sensitive-dependence.md) |
| $\lambda$ (Module 4) | a **Lyapunov exponent** — the exponential rate at which neighbors separate. Not an eigenvalue | [4.4](lessons/04-04-lyapunov-exponents.md) |
| $\langle\,\cdot\,\rangle$ | long-time average along a trajectory | [4.4](lessons/04-04-lyapunov-exponents.md) |
| $N(\epsilon)$, $d$, $d_C$ | boxes of side $\epsilon$ needed to cover a set; box-counting and correlation dimension | [4.5](lessons/04-05-fractal-dimension.md) |
| $f^{\,n}$ | the $n$-fold **iterate** $f\circ f\circ\cdots\circ f$ — never the power $f(x)^n$ | [5.1](lessons/05-01-maps-cobweb.md) |
| $\lambda=f'(x^*)$ | the **multiplier** of a map's fixed point; stability is $\lvert\lambda\rvert<1$ | [5.1](lessons/05-01-maps-cobweb.md) |
| $r$, $r_n$, $r_\infty$ | logistic parameter; the $n$-th period-doubling value; their accumulation point | [5.2](lessons/05-02-logistic-map-period-doubling.md) |
| $\delta$, $\alpha$ (Module 5) | Feigenbaum constants: parameter-gap ratio and state-scaling ratio | [5.3](lessons/05-03-feigenbaum-universality.md) |
| $\varepsilon$ | the channel gap in intermittency, $\varepsilon\propto r-r_c$ | [5.4](lessons/05-04-intermittency-routes.md) |
| $\sigma$ (Module 5) | the left-**shift** on symbol sequences. Unrelated to the Lorenz $\sigma$ | [5.5](lessons/05-05-symbolic-dynamics-ergodicity.md) |

## Definitions

### Fixed point

A place where the velocity is zero, so the state placed there never moves.

$$\text{flow: } f(x^*)=0 \ \text{ or }\ \mathbf f(\mathbf x^*)=\mathbf 0 \qquad\text{versus}\qquad \text{map: } f(x^*)=x^*$$

*Introduced:* [1.1](lessons/01-01-flows-on-the-line.md) *(map version:* [5.1](lessons/05-01-maps-cobweb.md)*)*

### Stable, unstable, half-stable

Stable = every nearby trajectory converges to it; unstable = nearby trajectories
leave; **half-stable** = attracting from one side, repelling from the other (the
graph of $f$ grazes zero without crossing, as in $\dot x=x^2$ at the origin).

*Introduced:* [1.1](lessons/01-01-flows-on-the-line.md)

### Phase line, phase portrait

The state space decorated with the flow's arrows — a line with arrows in 1-D, a
plane of trajectories in 2-D. The whole qualitative story, with no $x(t)$ in sight.

*Introduced:* [1.1](lessons/01-01-flows-on-the-line.md), [1.5](lessons/01-05-phase-portraits.md)

### Invariant line

A ray the flow can never carry you off — for $\dot{\mathbf x}=A\mathbf x$ these are
exactly the eigendirections, where motion collapses to the 1-D problem
$\dot s=\lambda s$.

*Introduced:* [1.2](lessons/01-02-linear-systems-plane.md)

### Stable and unstable manifold

The trajectories flowing **into** a saddle (tangent to the $\lambda<0$
eigenvector) and those flowing **out** (tangent to the $\lambda>0$ eigenvector).

*Introduced:* [1.2](lessons/01-02-linear-systems-plane.md)

### Jacobian

The local gain of the flow: how each velocity component responds to a small push
in each coordinate, evaluated at the fixed point.

$$J=\begin{pmatrix} f_x & f_y \\ g_x & g_y\end{pmatrix}\Bigg|_{(x^*,y^*)}, \qquad \dot{\mathbf u}\approx J\,\mathbf u$$

*Introduced:* [1.4](lessons/01-04-linearization-hartman-grobman.md)

### Hyperbolic fixed point

No eigenvalue of $J$ sits on the imaginary axis — every direction is definitely
expanding or definitely contracting. "Hyperbolic" means *the linearization can be
trusted*; it does **not** mean "saddle."

$$\operatorname{Re}\lambda_i \neq 0 \ \text{ for all } i$$

*Introduced:* [1.4](lessons/01-04-linearization-hartman-grobman.md)

### Nullcline

A curve where one velocity component vanishes: the flow crosses it straight up/down
($\dot x=0$) or straight left/right ($\dot y=0$). Fixed points are where an
$\dot x=0$ curve meets a $\dot y=0$ curve.

*Introduced:* [1.5](lessons/01-05-phase-portraits.md)

### Separatrix

A trajectory that divides regions of different fate — canonically the **stable**
manifold of a saddle, which is the watershed between basins.

*Introduced:* [1.5](lessons/01-05-phase-portraits.md)

### Basin of attraction

Every initial condition that eventually reaches a given attractor. The attractor is
the destination; the basin is the whole set of places you could have started.

*Introduced:* [1.5](lessons/01-05-phase-portraits.md), [4.3](lessons/04-03-strange-attractors.md)

### Conserved quantity

A function the flow cannot change along any one trajectory, so each orbit is
trapped on a single level curve $E=c$. Different orbits carry different $c$.

$$\dot E = E_x f + E_y g = 0 \qquad\text{everywhere}$$

*Introduced:* [2.1](lessons/02-01-conservative-reversible-systems.md)

### Reversible system

Run the clock backward and flip the velocity, and the movie is unchanged — the
phase portrait is mirror-symmetric across the $x$-axis.

$$f(x,-y)=-f(x,y), \qquad g(x,-y)=g(x,y)$$

*Introduced:* [2.1](lessons/02-01-conservative-reversible-systems.md)

### Nonlinear center

A fixed point genuinely surrounded by closed orbits — certified, not guessed. Pure
imaginary eigenvalues alone never certify it; a conserved quantity with an isolated
minimum, or reversibility, does.

*Introduced:* [2.1](lessons/02-01-conservative-reversible-systems.md)

### Lyapunov function

An invented "energy" shaped like a bowl with its bottom at the fixed point, which
the flow can never climb.

$$V(\mathbf 0)=0,\quad V(\mathbf x)>0 \ (\mathbf x\neq\mathbf 0), \qquad \dot V=\nabla V\cdot\mathbf f \le 0$$

*Introduced:* [2.2](lessons/02-02-lyapunov-functions.md)

### Limit cycle

A closed orbit standing alone — no other closed orbit crowds beside it, so
neighbors have no choice but to spiral in (stable), out (unstable), or one of each
(semi-stable). Self-sustained oscillation: the *system* picks the amplitude, you
only pick the phase.

*Introduced:* [2.3](lessons/02-03-limit-cycles.md)

### Omega-limit set

The trajectory's long-run destination: every point it returns arbitrarily close to
as $t\to\infty$. In the plane it can only be a fixed point or a closed orbit.

*Introduced:* [2.4](lessons/02-04-poincare-bendixson.md)

### Trapping region

A closed bounded region the flow enters and never leaves. Made into an **annulus**
(a ring) when you need to exclude a fixed point sitting in the middle.

*Introduced:* [2.4](lessons/02-04-poincare-bendixson.md)

### Index

The net number of counterclockwise turns the vector field makes as you walk once
counterclockwise around a loop. An integer, so it cannot change under continuous
deformation that doesn't cross a fixed point.

$$I_C=\frac{1}{2\pi}\oint_C d\phi,\qquad \phi=\operatorname{atan2}(g,f)$$

*Introduced:* [2.5](lessons/02-05-index-theory.md)

### Bifurcation

A parameter value where the *shape of the story* changes — the number of fixed
points, or their stability type, is different on the two sides.

*Introduced:* [3.1](lessons/03-01-saddle-node-transcritical.md)

### Bifurcation diagram

Every fixed point $x^*$ (or cycle amplitude) plotted against $\mu$, **solid where
stable, dashed where unstable**. One glance gives you how many equilibria exist and
which one the system actually sits in.

*Introduced:* [3.1](lessons/03-01-saddle-node-transcritical.md)

### Hysteresis

The up-jump and the down-jump happen at different parameter values, so the state
depends on which way you came. The signature of a subcritical branch plus a fold.

*Introduced:* [3.2](lessons/03-02-pitchfork-symmetry.md) *(Hopf version:* [3.3](lessons/03-03-hopf-bifurcation.md)*)*

### Normal form

The simplest polynomial that still produces a given bifurcation — every real system
crossing that threshold is smoothly equivalent to it nearby. The toy *is* the local
truth.

*Introduced:* [3.1](lessons/03-01-saddle-node-transcritical.md), [3.4](lessons/03-04-normal-forms-structural-stability.md)

### Topological equivalence and conjugacy

A continuous, continuously invertible change of coordinates carrying trajectories
onto trajectories and preserving the direction of time. Bend and stretch; never cut
or glue. For maps the same idea is written as a commuting square.

$$h\circ f = g\circ h \quad\Longleftrightarrow\quad g=h\circ f\circ h^{-1}$$

*Introduced:* [3.4](lessons/03-04-normal-forms-structural-stability.md), [5.5](lessons/05-05-symbolic-dynamics-ergodicity.md)

### Structural stability

Perturb the **equations** (not the state) a little and get back a qualitatively
identical phase portrait. Hyperbolic things are structurally stable; borderline
things are not.

*Introduced:* [3.4](lessons/03-04-normal-forms-structural-stability.md)

### Codimension

How many independent conditions the vector field must satisfy for the phenomenon to
occur — i.e. how many dials you must set exactly. Saddle-node, transcritical,
pitchfork and Hopf are all **codimension 1**; a cusp is codimension 2.

*Introduced:* [3.4](lessons/03-04-normal-forms-structural-stability.md)

### Genericity

A property is generic if it holds for an open dense set of systems — "almost all."
Structural stability is generic; bifurcations are the measure-zero exceptions.

*Introduced:* [3.4](lessons/03-04-normal-forms-structural-stability.md)

### Sensitive dependence on initial conditions

Two trajectories a hair apart pull apart exponentially, so an error you couldn't
measure becomes an error you can't ignore. Deterministic amplification, not noise.

$$\lVert\boldsymbol\delta(t)\rVert \approx \lVert\boldsymbol\delta_0\rVert\,e^{\lambda t},\qquad \lambda>0$$

*Introduced:* [4.2](lessons/04-02-sensitive-dependence.md)

### Chaos (working definition)

Bounded, deterministic, never-repeating motion that amplifies tiny differences. All
three clauses are load-bearing:

1. **aperiodic** long-term behavior (no fixed point, cycle, or quasiperiodic orbit);
2. **sensitive dependence** ($\lambda>0$);
3. on a **bounded attractor**.

*Introduced:* [4.2](lessons/04-02-sensitive-dependence.md)

### Attractor

The smallest closed trapped set that a whole open cloud of starting points drains
into: **invariant**, **attracting an open neighborhood**, and **minimal**.

*Introduced:* [4.3](lessons/04-03-strange-attractors.md)

### Strange attractor

An attractor you still can't predict on: attracting transversely, expanding
tangentially. Stretch-and-fold gives it fractal (non-integer) dimension. "Attracting"
governs approach from outside; "strange" governs neighbors already on it.

*Introduced:* [4.3](lessons/04-03-strange-attractors.md)

### Lyapunov exponent

The long-run average exponential rate at which a neighbor separates from a reference
trajectory — the slope of $\ln$-separation against time.

$$\lambda=\lim_{t\to\infty}\frac{1}{t}\ln\frac{\lVert\boldsymbol\delta(t)\rVert}{\lVert\boldsymbol\delta_0\rVert}$$

*Introduced:* [4.4](lessons/04-04-lyapunov-exponents.md)

### Lyapunov spectrum

An infinitesimal ball is stretched into an ellipsoid; each principal axis has its own
rate, sorted $\lambda_1\ge\lambda_2\ge\cdots\ge\lambda_n$. $\lambda_1$ is the exponent
above.

*Introduced:* [4.4](lessons/04-04-lyapunov-exponents.md)

### Box-counting dimension

Cover the set with boxes of side $\epsilon$, count only the boxes that touch it, and
read off the exponent by which that count blows up.

$$N(\epsilon)\propto\epsilon^{-d}, \qquad d=\lim_{\epsilon\to0}\frac{\ln N(\epsilon)}{\ln(1/\epsilon)}$$

*Introduced:* [4.5](lessons/04-05-fractal-dimension.md)

### Correlation dimension

The version you can actually estimate from data: instead of counting boxes, count
point-pairs closer than $\epsilon$. This is what Grassberger–Procaccia computes from
a time series.

$$d_C=\lim_{\epsilon\to0}\frac{\ln C(\epsilon)}{\ln\epsilon}, \qquad d_C \le d_{\text{box}}$$

*Introduced:* [4.5](lessons/04-05-fractal-dimension.md)

### Map, orbit, iterate

A rule applied over and over: $x_{n+1}=f(x_n)$. The sequence $\{x_n\}$ is the
**orbit**, the discrete cousin of a trajectory, and $x_n=f^{\,n}(x_0)$.

*Introduced:* [5.1](lessons/05-01-maps-cobweb.md)

### Multiplier

The factor by which a map multiplies the error at each step: $\lambda=f'(x^*)$ at a
fixed point, or the product of slopes around a cycle. **Magnitude** decides stability,
sign decides monotone vs. oscillatory approach.

*Introduced:* [5.1](lessons/05-01-maps-cobweb.md)

### Period-p point

A point the map returns to after exactly $p$ steps and no fewer — that is, a fixed
point of $f^{\,p}$ that isn't a fixed point of any $f^{\,k}$ with $0<k<p$.

*Introduced:* [5.1](lessons/05-01-maps-cobweb.md)

### Universality

The doubling *values* $r_n$ belong to your particular map; the *rates* $\delta$ and
$\alpha$ belong to the whole class of smooth one-humped maps with a quadratic top.

*Introduced:* [5.3](lessons/05-03-feigenbaum-universality.md)

### Intermittency (type I)

Long near-periodic **laminar** stretches punctured by short chaotic **bursts** — the
residue of a tangent bifurcation, whose annihilated fixed points leave a narrow
channel the orbit must crawl through.

*Introduced:* [5.4](lessons/05-04-intermittency-routes.md)

### Itinerary

Forget the exact state; record only which cell of a partition it occupies at each
step. The resulting symbol string is the trajectory's itinerary — and for a
*generating* partition it determines the point exactly.

*Introduced:* [5.5](lessons/05-05-symbolic-dynamics-ergodicity.md)

### Shift map

Delete the first symbol and slide the rest left. Iterating the doubling map
$D(x)=2x \bmod 1$ on numbers **is** the shift on their binary digits.

$$\sigma(s_0s_1s_2\ldots)=(s_1s_2s_3\ldots)$$

*Introduced:* [5.5](lessons/05-05-symbolic-dynamics-ergodicity.md)

### Devaney chaos

Chaos as three simultaneous properties: **sensitive dependence**, **dense periodic
orbits**, and **topological transitivity** (some single orbit is dense). Regularity
everywhere, shot through with mixing.

*Introduced:* [5.5](lessons/05-05-symbolic-dynamics-ergodicity.md)

### Ergodicity

The dynamics stirs everything together: you cannot split the space into two fat
invariant pieces, so almost every orbit roams the whole space.

$$T^{-1}A=A \ \Longrightarrow\ \mu(A)=0 \ \text{ or } \ \mu(A)=1$$

*Introduced:* [5.5](lessons/05-05-symbolic-dynamics-ergodicity.md)

## Formulas and rules

### Stability tests, side by side

The one table to check before anything else — the test changes shape as you move
from a line to a plane to discrete time, and mixing them up is the standard error.

| Setting | Fixed point solves | Stable when | Silent when |
|---|---|---|---|
| 1-D flow $\dot x=f(x)$ | $f(x^*)=0$ | $f'(x^*)<0$ | $f'(x^*)=0$ — read the **sign of $f$** on each side |
| 2-D flow $\dot{\mathbf x}=\mathbf f(\mathbf x)$ | $\mathbf f(\mathbf x^*)=\mathbf 0$ | $\tau<0$ **and** $\Delta>0$ for $J$ | $\operatorname{Re}\lambda=0$ (center, or $\Delta=0$) |
| $n$-D flow | $\mathbf f(\mathbf x^*)=\mathbf 0$ | $\operatorname{Re}\lambda_i<0$ for every $i$ | any $\operatorname{Re}\lambda_i=0$ |
| 1-D map $x_{n+1}=f(x_n)$ | $f(x^*)=x^*$ | $\lvert f'(x^*)\rvert<1$ | $\lvert f'(x^*)\rvert=1$ |
| $p$-cycle of a map | $f^{\,p}(x^*)=x^*$ | $\lvert\prod_{i=0}^{p-1}f'(x_i^*)\rvert<1$ | product of magnitude $1$ |

*From* [1.1](lessons/01-01-flows-on-the-line.md), [1.3](lessons/01-03-trace-determinant-classification.md), [1.4](lessons/01-04-linearization-hartman-grobman.md), [5.1](lessons/05-01-maps-cobweb.md)

### Trace–determinant classification

Two numbers name any $2\times2$ fixed point. The eigenvalues are the roots of
$\lambda^2-\tau\lambda+\Delta=0$, so $\lambda_1+\lambda_2=\tau$ and
$\lambda_1\lambda_2=\Delta$, and the discriminant $\tau^2-4\Delta$ decides real
versus complex.

$$\tau=\operatorname{tr}A=a+d,\qquad \Delta=\det A=ad-bc,\qquad \lambda_{1,2}=\frac{\tau\pm\sqrt{\tau^2-4\Delta}}{2}$$

| Condition on $(\tau,\Delta)$ | Eigenvalues | Type | Stability |
|---|---|---|---|
| $\Delta<0$ | real, **opposite signs** $\lambda_1<0<\lambda_2$ | **saddle** | always unstable |
| $\Delta>0$, $\tau^2>4\Delta$, $\tau<0$ | real, distinct, both negative | **stable node** | stable |
| $\Delta>0$, $\tau^2>4\Delta$, $\tau>0$ | real, distinct, both positive | **unstable node** | unstable |
| $\Delta>0$, $\tau^2=4\Delta$, $\tau<0$ | repeated real $\lambda=\tau/2<0$ | **stable degenerate / star node** | stable |
| $\Delta>0$, $\tau^2=4\Delta$, $\tau>0$ | repeated real $\lambda=\tau/2>0$ | **unstable degenerate / star node** | unstable |
| $\Delta>0$, $\tau^2<4\Delta$, $\tau<0$ | complex $\alpha\pm i\omega$, $\alpha=\tau/2<0$ | **stable spiral (focus)** | stable |
| $\Delta>0$, $\tau^2<4\Delta$, $\tau>0$ | complex $\alpha\pm i\omega$, $\alpha=\tau/2>0$ | **unstable spiral** | unstable |
| $\tau=0$, $\Delta>0$ | pure imaginary $\pm i\sqrt{\Delta}$ | **center** (linear) | neutral — **non-hyperbolic**, verdict deferred |
| $\Delta=0$ | one eigenvalue is $0$ (the other is $\tau$) | degenerate — a line of fixed points | **non-hyperbolic** |

$$\boxed{\text{asymptotically stable} \iff \tau<0 \ \textbf{and}\ \Delta>0}$$

That boxed line is the $2\times2$ **Routh–Hurwitz criterion**. Landmarks: crossing
$\Delta=0$ downward makes anything a saddle; crossing $\tau=0$ rightward flips
stable to unstable (through a center, if you're inside the parabola); crossing
$\tau^2=4\Delta$ hardens a spiral into a node.

*From* [1.2](lessons/01-02-linear-systems-plane.md) *and* [1.3](lessons/01-03-trace-determinant-classification.md)

### Solving a linear system in the plane

| Eigenvalue case | General solution |
|---|---|
| real, $\lambda_1\neq\lambda_2$ | $\mathbf x(t)=c_1e^{\lambda_1t}\mathbf v_1+c_2e^{\lambda_2t}\mathbf v_2$ |
| complex $\alpha\pm i\omega$ | $\mathbf x(t)=e^{\alpha t}(\text{vector rotating at rate }\omega)$, so $\lvert\mathbf x\rvert\propto e^{\alpha t}$ |
| repeated $\lambda$, $A=\lambda I$ | $\mathbf x(t)=e^{\lambda t}\mathbf x(0)$ — a **star node**, every ray invariant |
| repeated $\lambda$, defective | $\mathbf x(t)=e^{\lambda t}\big[(c_1+c_2t)\mathbf v+c_2\mathbf w\big]$, $(A-\lambda I)\mathbf w=\mathbf v$ |

Rotation sense: evaluate $\dot{\mathbf x}$ at $(1,0)$ — a positive $y$-component
means counterclockwise.

*From* [1.2](lessons/01-02-linear-systems-plane.md)

### Linearization and Hartman–Grobman

Near a fixed point, Taylor gives $\dot{\mathbf u}=J\mathbf u+O(\lVert\mathbf u\rVert^2)$; drop the remainder and classify $J$.

**Hartman–Grobman.** Near a **hyperbolic** fixed point the nonlinear flow is
topologically conjugate to its linearization — same stability, same type. In plain
terms: the linear answer is qualitatively exact, and you have license to use it.

**When it fails.** If any $\operatorname{Re}\lambda_i=0$ the theorem is silent and
the discarded higher-order terms decide:

- **linear center** ($\tau=0,\Delta>0$) — could be a true center, a slow inward
  spiral, or a slow outward one. Certify it with a conserved quantity or
  reversibility ([2.1](lessons/02-01-conservative-reversible-systems.md)) or a
  Lyapunov function ([2.2](lessons/02-02-lyapunov-functions.md)).
- **zero eigenvalue** ($\Delta=0$) — the setting of a saddle-node bifurcation; use
  a normal-form / center-manifold reduction
  ([3.4](lessons/03-04-normal-forms-structural-stability.md)).

*From* [1.4](lessons/01-04-linearization-hartman-grobman.md)

### Drawing a phase portrait — the recipe

1. **Nullclines.** Draw $f=0$ and $g=0$; their intersections are the fixed points.
2. **Regions.** The nullclines cut the plane into regions of constant sign; in each,
   the flow points into one compass quadrant.
3. **Local pictures.** Classify each fixed point from its Jacobian's $(\tau,\Delta)$.
4. **Connect.** Draw the saddles' stable and unstable manifolds first — the stable
   ones are the separatrices dividing basins — then fill in the rest.

*From* [1.5](lessons/01-05-phase-portraits.md)

### Conservative mechanical systems

$$\ddot x=-V'(x) \iff \dot x=y,\ \dot y=-V'(x), \qquad E(x,y)=\tfrac12y^2+V(x) \ \text{ is conserved}$$

Orbits are the level curves of $E$. A **minimum** of $V$ gives a nonlinear center; a
**maximum** of $V$ gives a saddle, and the level set through it is the separatrix. A
conservative system has **no attractors at all** — no attracting fixed point, no
limit cycle.

*From* [2.1](lessons/02-01-conservative-reversible-systems.md)

### Lyapunov's direct method

$$\dot V=\nabla V\cdot\mathbf f = V_x f_1 + V_y f_2 \qquad\text{(chain rule — never integrate)}$$

| $V$ positive definite and… | Verdict |
|---|---|
| $\dot V\le0$ near $\mathbf x^*$ | **Lyapunov stable** — trajectories that start near stay near |
| $\dot V<0$ for all $\mathbf x\neq\mathbf x^*$ | **asymptotically stable** — they converge |
| $\dot V\equiv0$ | conserved: orbits circle forever at constant $V$ |
| $\dot V<0$ on a bounded $\{V<c\}$ with no other fixed point | that whole sublevel set is a certified piece of the **basin** |

**Where to start guessing:** $V=x^2+y^2$ first, then the weighted quadratic
$V=ax^2+bxy+cy^2$ (positive definite when $a>0$ and $b^2<4ac$), then the physical
energy. A failed $V$ proves nothing.

*From* [2.2](lessons/02-02-lyapunov-functions.md)

### Limit cycles: the polar prototype

$$\dot r=r(1-r^2),\qquad \dot\theta=1$$

The angle winds uniformly; the radius obeys a 1-D flow, so read it with the phase
line. Radial fixed points $r=0$ (unstable spiral) and $r=1$; since
$g'(r)=1-3r^2$ gives $g'(1)=-2<0$, the circle $r=1$ is a **stable limit cycle** and
perturbations decay like $e^{-2t}$. Decoupling $(r,\theta)$ is the standard trick for
any radially symmetric system.

*From* [2.3](lessons/02-03-limit-cycles.md)

### Proving a cycle exists — or cannot

**Poincaré–Bendixson.** A planar trajectory confined for all $t\ge t_0$ to a closed
bounded region containing **no fixed points** must be, or spiral onto, a closed orbit.
Working version: build a closed **annulus** with the field pointing strictly inward
across both boundaries and no fixed point inside.

**Bendixson–Dulac (negative criterion).** On a **simply connected** region $D$, if
some smooth $\varphi$ makes

$$\nabla\cdot(\varphi\,\mathbf f)=\frac{\partial(\varphi f)}{\partial x}+\frac{\partial(\varphi g)}{\partial y}$$

one-signed throughout (and not identically zero), then $D$ contains **no** closed
orbit. Taking $\varphi\equiv1$ is the plain Bendixson criterion; common rescues are
$\varphi=1/(xy)$, $\varphi=e^{ax}$, $\varphi=r^{-k}$.

**Index sum rule.** A closed orbit has index $+1$, so the fixed points it encloses
have indices summing to $+1$.

| Fixed point | Index |
|---|---|
| node, spiral, or center (stable or not — index ignores stability) | $+1$ |
| saddle | $-1$ |
| loop enclosing nothing | $0$ |
| any closed orbit | $+1$ |

Corollaries used constantly: a closed orbit must enclose at least one fixed point,
and it can never enclose only saddles.

**Why the plane is special.** Non-crossing trajectories plus the Jordan curve
theorem force a trapped orbit to be monotone, so **a 2-D continuous flow admits no
chaos**. In 3-D a trajectory can pass over its own past, and the constraint lifts.

*From* [2.4](lessons/02-04-poincare-bendixson.md) *and* [2.5](lessons/02-05-index-theory.md)

### The bifurcation table

All five are codimension 1 — one knob finds them. Diagrams plot $x^*$ (or, for Hopf,
the cycle amplitude $r$) against $\mu$: **solid = stable, dashed = unstable**.

| Bifurcation | Normal form | Condition at threshold | What changes | Diagram shape |
|---|---|---|---|---|
| **Saddle-node (fold)** | $\dot x=\mu+x^2$ (equivalently $\dot x=\mu-x^2$, mirrored in $\mu$) | $f=f_x=0$ with $f_{xx}\neq0$, $f_\mu\neq0$; one **real** eigenvalue through $0$ | a stable/unstable **pair collides and annihilates** — equilibria created or destroyed | sideways half-parabola: two branches on one side of $\mu$ only, **nothing** on the other; upper dashed, lower solid |
| **Transcritical** | $\dot x=\mu x-x^2$ | as above, but $x^*=0$ persists for all $\mu$ | two branches that always exist **cross and swap stability**; nothing appears or vanishes | two straight lines crossing in an X at the origin; solid and dashed trade places at the crossing |
| **Pitchfork, supercritical** | $\dot x=\mu x-x^3$ | odd symmetry $f(-x)=-f(x)$; $f_x=0$ at $\mu_c$ | origin goes unstable and **hands stability to two new branches** $\pm\sqrt{\mu}$ | forward-opening pitchfork, both tines **solid**; smooth, soft, no jump |
| **Pitchfork, subcritical** | $\dot x=\mu x+x^3$ | same, opposite cubic sign | two **unstable** branches $\pm\sqrt{-\mu}$ collapse onto the origin and kill it — nothing nearby catches the state | backward-opening pitchfork, tines **dashed**; add $-x^5$ and you get a fold at $\mu=-\tfrac14$, bistability, and hysteresis |
| **Hopf, supercritical** | $\dot r=\mu r-r^3,\ \dot\theta=\omega$ | complex **pair** crosses: $\alpha(\mu_c)=0$, $\omega\neq0$, $\alpha'(\mu_c)\neq0$; in 2-D, $\tau=0$ with $\Delta>0$ | stable spiral becomes unstable and a **stable limit cycle of radius $\sqrt\mu$** is born | pitchfork shape in the $(\mu,r)$ plane, tine solid — but each point is a whole circle in phase space. **Soft** onset |
| **Hopf, subcritical** | $\dot r=\mu r+r^3,\ \dot\theta=\omega$ | same eigenvalue crossing, cubic coefficient $a>0$ | an **unstable** cycle existing for $\mu<0$ shrinks onto the fixed point and destroys it; amplitude then jumps to a far attractor | backward-opening, tine dashed. **Hard** jump plus hysteresis — the dangerous one (wing flutter, arrhythmia) |
| **Period-doubling (flip)** — maps only | $x_{n+1}=-(1+\mu)x_n+a\,x_n^3$; equivalently $f^{2}$ undergoes a pitchfork at $x^*$ | multiplier $f'(x^*)$ passes through $-1$ | the fixed point goes unstable and a **2-cycle** appears, at $x\approx\pm\sqrt{\mu/a}$ | a branch splits in two in the orbit diagram; repeat forever and you have the cascade |
| *(map fold)* **Tangent / saddle-node of a map** | $u_{n+1}=u_n+\varepsilon+a\,u_n^2$ | $g(x_c)=x_c$ with $g'(x_c)=1$ | a stable/unstable cycle pair collides and vanishes, leaving a narrow **channel** | fold; the leftover channel is what produces intermittency |

Sign conventions worth pinning down: for the flow pitchfork, $-x^3$ is
supercritical; for the map flip, it is $a>0$ that puts the 2-cycle on the
$\mu>0$ side (supercritical), because the map's linear factor already carries a
minus sign. In both cases "supercritical" means *the new branch appears on the side
where the old one has gone unstable*.

*From* [3.1](lessons/03-01-saddle-node-transcritical.md), [3.2](lessons/03-02-pitchfork-symmetry.md), [3.3](lessons/03-03-hopf-bifurcation.md), [3.4](lessons/03-04-normal-forms-structural-stability.md), [5.2](lessons/05-02-logistic-map-period-doubling.md), [5.4](lessons/05-04-intermittency-routes.md)

### Structural stability at a glance

| Object | Structurally stable iff |
|---|---|
| fixed point | hyperbolic — no eigenvalue with zero real part |
| limit cycle | hyperbolic — Floquet multiplier (Poincaré return-map slope) of magnitude $\neq1$ |
| planar system (roughly, Peixoto) | all fixed points and cycles hyperbolic, and no saddle-to-saddle connection |

*From* [3.4](lessons/03-04-normal-forms-structural-stability.md)

### The Lorenz system

$$\dot x=\sigma(y-x),\qquad \dot y=x(\rho-z)-y,\qquad \dot z=xy-\beta z$$

$x$ is the roll's turning rate, $y$ the temperature contrast between rising and
descending fluid, $z$ the departure of the vertical profile from conduction — all
**amplitudes**, not positions. Classic values $\sigma=10$, $\beta=8/3$, $\rho=28$.

| Feature | Value |
|---|---|
| symmetry | invariant under $(x,y,z)\mapsto(-x,-y,z)$ — everything comes in mirror pairs |
| fixed points | origin $O$ for all $\rho$; plus $C^\pm=\big(\pm\sqrt{\beta(\rho-1)},\ \pm\sqrt{\beta(\rho-1)},\ \rho-1\big)$ for $\rho>1$ |
| origin | stable for $\rho<1$; a **saddle** for $\rho>1$ (1-D unstable, 2-D stable) |
| $C^\pm$ die by | a **subcritical** Hopf at $\rho_H=\sigma\dfrac{\sigma+\beta+3}{\sigma-\beta-1}\approx24.74$ — so no stable cycle is born to catch the flow |
| volume contraction | $\nabla\cdot\mathbf f=-(\sigma+1+\beta)\approx-13.67$, so $V(t)=V_0e^{-(\sigma+1+\beta)t}$ |
| Lyapunov spectrum | $(\lambda_1,\lambda_2,\lambda_3)\approx(+0.906,\ 0,\ -14.57)$, sum $\approx-13.67$ |
| attractor dimension | $d\approx2.06$ — a thickened sheet, not a surface, not a solid |

At $\rho=28$ there is no stable fixed point and no stable limit cycle anywhere, yet
the motion is bounded (the quadratic terms cancel in $\frac{d}{dt}(x^2+y^2+z^2)$, so
linear damping wins far out). Bounded, with nothing to rest on: a strange attractor.

*From* [4.1](lessons/04-01-lorenz-system.md), [4.4](lessons/04-04-lyapunov-exponents.md), [4.5](lessons/04-05-fractal-dimension.md)

### The Lyapunov-exponent criterion

The single number that says whether a system is chaotic.

$$\lambda>0 \Rightarrow \textbf{chaos}, \qquad \lambda=0 \Rightarrow \textbf{marginal (limit cycle or torus)}, \qquad \lambda<0 \Rightarrow \textbf{stable fixed point}$$

Two structural facts pin the spectrum down:

$$\sum_{i=1}^{n}\lambda_i=\big\langle\nabla\cdot\mathbf f\big\rangle=\big\langle\operatorname{tr}J\big\rangle \qquad\text{(the sum is the average volume-growth rate)}$$

and **a bounded flow that isn't a fixed point always has one exponent exactly $0$** —
the direction along the trajectory, since nudging a state forward along its own path
costs nothing.

| Attractor | Sign pattern (3-D flow) |
|---|---|
| stable fixed point | $(-,-,-)$ |
| stable limit cycle | $(0,-,-)$ |
| 2-torus (quasiperiodic) | $(0,0,-)$ |
| **strange attractor** | $(+,0,-)$ with **negative sum** |

Practical readings, all from the same exponential law:

$$\text{e-folding time }=\frac1\lambda,\qquad \text{doubling time }=\frac{\ln2}{\lambda},\qquad t_{\text{horizon}}\sim\frac1\lambda\ln\!\left(\frac{a}{\lVert\boldsymbol\delta_0\rVert}\right)$$

with $a$ the attractor's width. The horizon depends only **logarithmically** on your
precision — 1000-fold better measurements buy a fixed $\ln(1000)/\lambda\approx6.9/\lambda$ of extra forecast, never a factor.

For a 1-D map the same quantity is an average of log-slopes along the orbit:

$$\lambda=\lim_{n\to\infty}\frac1n\sum_{i=0}^{n-1}\ln\lvert f'(x_i)\rvert$$

which gives $\lambda=\ln2$ for the tent map, the doubling map, and the logistic map
at $r=4$ (all conjugate to the full two-symbol shift).

*From* [4.2](lessons/04-02-sensitive-dependence.md), [4.4](lessons/04-04-lyapunov-exponents.md), [5.5](lessons/05-05-symbolic-dynamics-ergodicity.md)

### Fractal dimension

Self-similar shortcut: $m$ copies, each scaled down by $r<1$, gives

$$d=\frac{\ln m}{\ln(1/r)} \qquad \text{(log of how many pieces} \div \text{log of how much you shrank)}$$

| Set | pieces $m$ | scale $1/r$ | $d$ |
|---|---|---|---|
| Cantor set (remove middle thirds) | $2$ | $3$ | $\ln2/\ln3\approx0.63$ — a dust: more than points, less than a line |
| Koch curve | $4$ | $3$ | $\ln4/\ln3\approx1.26$ — too wiggly for a curve, too thin for area |
| Sierpiński triangle | $3$ | $2$ | $\ln3/\ln2\approx1.58$ |
| Lorenz attractor | — | — | $\approx2.06$ — a sheet with $0.06$ of Cantor fuzz across it |

*From* [4.5](lessons/04-05-fractal-dimension.md)

### Cobweb diagrams and map dynamics

Draw $y=f(x)$ and the diagonal $y=x$; then alternate **vertical to the curve**
(that height is $x_{n+1}$) and **horizontal to the diagonal** (which copies the
height back onto the input axis). Crossings of the two curves are the fixed points.

| Multiplier $\lambda=f'(x^*)$ | Cobweb behavior |
|---|---|
| $0<\lambda<1$ | monotone **staircase** inward — stable |
| $-1<\lambda<0$ | **spiral** (alternating) inward — stable |
| $\lambda>1$ | diverging staircase — unstable |
| $\lambda<-1$ | diverging spiral — unstable |
| $\lambda=+1$ | tangency to the diagonal: saddle-node / transcritical edge |
| $\lambda=-1$ | **period-doubling (flip)** edge — a 2-cycle is at stake |

A 2-cycle shows up on the cobweb as a closed **box**, its corners alternating
between the curve and the diagonal.

*From* [5.1](lessons/05-01-maps-cobweb.md), [5.2](lessons/05-02-logistic-map-period-doubling.md), [5.4](lessons/05-04-intermittency-routes.md)

### Logistic map landmarks

$$f(x)=r\,x(1-x),\qquad x\in[0,1],\ r\in[0,4],\qquad f'(x)=r(1-2x)$$

| $r$ | What happens |
|---|---|
| $r<1$ | $x^*=0$ stable — extinction |
| $r=1$ | transcritical exchange: $x^*=0$ hands stability to $x^*=1-1/r$ |
| $1<r<3$ | $x^*=1-1/r$ stable, since $f'(x^*)=2-r$ and $\lvert 2-r\rvert<1$ |
| $r_1=3$ | $f'(x^*)=-1$: first period-doubling, stable 2-cycle born |
| $r_2=1+\sqrt6\approx3.449$ | 2-cycle doubles to 4 (its multiplier $-r^2+2r+4$ hits $-1$) |
| $r_3\approx3.544$, $r_4\approx3.5644$ | the cascade, gaps shrinking geometrically |
| $r_\infty\approx3.5699$ | doublings accumulate — **onset of chaos** |
| $r\approx3.83$ | the famous **period-3 window** — order returns, then doubles $3,6,12,\dots$ back into chaos |
| $r=4$ | conjugate to the tent map via $h(\theta)=\sin^2(\pi\theta/2)$; a full two-symbol shift, $\lambda=\ln2$ |
| $r>4$ | orbits escape $[0,1]$ — outside the story |

*From* [5.2](lessons/05-02-logistic-map-period-doubling.md), [5.5](lessons/05-05-symbolic-dynamics-ergodicity.md)

### Feigenbaum constants

The rate at which a doubling cascade accelerates, and the rate at which its forks
narrow — both universal for smooth one-humped maps with a **quadratic** maximum.

$$\delta=\lim_{n\to\infty}\frac{r_n-r_{n-1}}{r_{n+1}-r_n}\approx4.669201609\ldots \qquad \alpha\approx2.502907875\ldots$$

$\delta$ scales the **parameter** axis, $\alpha$ the **state** axis; together they make
the orbit diagram self-similar. Mechanism: the doubling operator
$T[f](x)=\alpha f\big(f(x/\alpha)\big)$ has a universal fixed-point function $g$, and
$\delta$ is the unstable eigenvalue of $T$ linearized about $g$.

*From* [5.3](lessons/05-03-feigenbaum-universality.md)

### Routes to chaos

Chaos does not have one door. Each route has its own fingerprint in the data.

| Route | Mechanism | Fingerprint |
|---|---|---|
| **Period-doubling** (Feigenbaum) | infinite cascade $2\to4\to8\to\cdots$ accumulating at $r_\infty$ | parameter gaps shrink by $\delta\approx4.669$; forks narrow by $\alpha\approx2.503$ |
| **Intermittency** (Pomeau–Manneville, type I) | tangent bifurcation of $f^{\,k}$ leaves a channel where the cycle used to be | laminar phases of length $N\approx\pi/\sqrt{a\varepsilon}\propto(r-r_c)^{-1/2}$, punctuated by bursts of roughly fixed length |
| **Quasiperiodicity** (Ruelle–Takens–Newhouse) | two incommensurate frequencies build a 2-torus, which wrinkles and breaks up | chaos after only a *few* frequency-adding bifurcations, not infinitely many |
| **Crisis** | the chaotic attractor collides with an unstable orbit or its own basin boundary | sudden growth, shrinkage, or disappearance — no cascade, no warning |

*From* [5.4](lessons/05-04-intermittency-routes.md), [5.2](lessons/05-02-logistic-map-period-doubling.md), [5.3](lessons/05-03-feigenbaum-universality.md)

### Symbolic dynamics and ergodicity

**Doubling map** $D(x)=2x\bmod1$ with partition $I_0=[0,\tfrac12)$, $I_1=[\tfrac12,1)$: the itinerary of $x=0.b_1b_2b_3\ldots$ (binary) is exactly $(b_1b_2b_3\ldots)$, and $D$ acts as the left shift. Chaos becomes "reveal the next unknown digit."

**Birkhoff's ergodic theorem.** If $T$ is ergodic for the probability measure $\mu$,
then for $\mu$-almost every $x_0$ and every integrable $g$,

$$\lim_{N\to\infty}\frac1N\sum_{n=0}^{N-1}g\big(T^nx_0\big)=\int g\,d\mu$$

*In words:* the time average along one typical orbit equals the ensemble average over
the whole space — one orbit samples with exactly the right frequencies. This is the
licence statistical mechanics runs on.

*From* [5.5](lessons/05-05-symbolic-dynamics-ergodicity.md)

## Assumed, not taught here

This is a Tier 1 course, so it leans on its prerequisites rather than rederiving
them. Each row points at where the *why* lives.

| Fact | Where it's taught |
|---|---|
| Existence–uniqueness for ODEs — which is *why* trajectories never cross | [ode-refresher 1.1](../ode-refresher/lessons/01-01-odes-solutions-slope-fields.md) |
| $\dot\eta=a\eta$ has solution $\eta_0e^{at}$ — the engine of every linear stability test | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| The damped-oscillator vocabulary (over-, under-, critically damped) that node-vs-spiral reproduces | [ode-refresher 2.2](../ode-refresher/lessons/02-02-oscillations-damping.md) |
| Solving $\dot{\mathbf x}=A\mathbf x$ by eigenvalues, and reading its phase portrait | [ode-refresher 3.1](../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md), [3.2](../ode-refresher/lessons/03-02-phase-portraits-stability.md) |
| Eigenvalues, eigenvectors, the characteristic equation, generalized eigenvectors | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md), [3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| Trace and determinant of a $2\times2$ matrix (and $\det(A-\lambda I)=0$) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Taylor's theorem with remainder — the step that produces every linearization here | [real-analysis 6.3](../real-analysis/lessons/06-03-taylor-theorem-remainder.md), [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Intermediate value theorem — why $f$ keeps one sign between consecutive fixed points | [real-analysis 5.3](../real-analysis/lessons/05-03-intermediate-value-theorem.md) |
| Bounded sequences have convergent subsequences; compactness of closed bounded sets (behind Poincaré–Bendixson) | [real-analysis 2.3](../real-analysis/lessons/02-03-subsequences-bolzano-weierstrass.md), [4.2](../real-analysis/lessons/04-02-compactness-heine-borel.md) |
| Partial derivatives and the gradient — the entries of $J$, and the $\nabla V$ in $\dot V$ | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Divergence of a vector field, as net outflow per unit area | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| Green's theorem in divergence form — the entire proof of Bendixson–Dulac | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Polar coordinates $(r,\theta)$, used for every limit-cycle and Hopf normal form | [precalculus 4.2](../precalculus/lessons/04-02-vectors-parametric-and-polar.md) |
| Homeomorphism, and what "topologically the same" means | [topology 2.1](../topology/lessons/02-01-continuity-and-homeomorphisms.md) |
| Winding number of a loop — the object index theory counts | [topology 6.3](../topology/lessons/06-03-fundamental-group-of-circle.md) |
| Measure, sets of measure zero, and "almost every" — the fine print in ergodicity | [measure-theory 1.3](../measure-theory/lessons/01-03-measures-properties.md), [1.5](../measure-theory/lessons/01-05-lebesgue-measure-rn.md) |

One genuine gap: the **Jordan curve theorem** (a simple closed curve splits the plane
into an inside and an outside) is load-bearing for Poincaré–Bendixson in
[2.4](lessons/02-04-poincare-bendixson.md), and no course in this library proves it.
Take it on faith; the nearest relatives are the plane-separation arguments in
[topology 3.3](../topology/lessons/03-03-connectedness-applications.md).

## Pitfalls

### Reading the linear test

- $f'(x^*)$ is the derivative of the **velocity field**, not of the solution $x(t)$ — differentiate $f$ in $x$, then plug in $x^*$; time never enters. *([1.1](lessons/01-01-flows-on-the-line.md))*
- $f'(x^*)=0$ does **not** mean stable or neutral — it means the test is silent. Fall back to the sign of $f$ on each side; $\dot x=x^2$ is half-stable. Same story at every bifurcation point. *([1.1](lessons/01-01-flows-on-the-line.md), [3.1](lessons/03-01-saddle-node-transcritical.md))*
- Stability lives in the eigenvalue, not the eigenvector; and eigenvectors are defined only up to scale, so $(1,2)$ and $(-3,-6)$ are the same ray. *([1.2](lessons/01-02-linear-systems-plane.md))*
- Evaluate $J$ **at** the fixed point, and separately at each one. $J(x,y)$ is a matrix-valued function; leaving symbolic $x,y$ in it is the classic error. *([1.4](lessons/01-04-linearization-hartman-grobman.md))*
- "Hyperbolic" means "no eigenvalue on the imaginary axis," not "saddle" — stable nodes and spirals are hyperbolic too. And $\operatorname{Re}\lambda=-0.001$ is hyperbolic; only exactly $0$ is borderline. *([1.4](lessons/01-04-linearization-hartman-grobman.md))*

### Trace and determinant

- $\Delta>0$ alone is not stability — it only says the eigenvalues share a sign; they could both be positive. You need $\tau<0$ **and** $\Delta>0$, always both. *([1.3](lessons/01-03-trace-determinant-classification.md))*
- $\tau<0$ alone is not stability either — with $\Delta<0$ you have a saddle whatever $\tau$ is. *([1.3](lessons/01-03-trace-determinant-classification.md))*
- Node vs. spiral is the **parabola** $\tau^2=4\Delta$, not an axis: both live in $\Delta>0$, and only the discriminant separates them. *([1.3](lessons/01-03-trace-determinant-classification.md))*
- A repeated eigenvalue is usually **not** a star node — only $A=\lambda I$ gives that; generically you get one eigendirection and a $t\,e^{\lambda t}$ term. *([1.2](lessons/01-02-linear-systems-plane.md))*
- Complex eigenvalues never mean complex trajectories — the state is always real; take real and imaginary parts. *([1.2](lessons/01-02-linear-systems-plane.md))*

### Centers, and the borderline generally

- A linear center is a **verdict deferred**, not a verdict: report "linear center — nonlinear terms decide," never "center." Certify it only with a conserved quantity or reversibility. *([1.2](lessons/01-02-linear-systems-plane.md), [1.3](lessons/01-03-trace-determinant-classification.md), [1.4](lessons/01-04-linearization-hartman-grobman.md), [2.1](lessons/02-01-conservative-reversible-systems.md))*
- A center is Lyapunov-stable yet **structurally unstable** — the perfect neutrality is exactly what a perturbation destroys. Neutral means fragile. *([3.4](lessons/03-04-normal-forms-structural-stability.md))*
- Structural stability perturbs the **equations**; Lyapunov stability perturbs the **state**. Different questions with the same adjective. *([3.4](lessons/03-04-normal-forms-structural-stability.md))*

### Phase portraits and cycles

- A nullcline is a curve the flow **crosses**, not one it travels along — the only resting places on it are the fixed points. (Exception: a genuinely invariant line, like an axis, is both.) *([1.5](lessons/01-05-phase-portraits.md))*
- Two nullclines crossing only makes a fixed point if one is $\dot x=0$ and the other $\dot y=0$; two branches of the same nullcline crossing does not. *([1.5](lessons/01-05-phase-portraits.md))*
- The basin-dividing separatrix is the saddle's **stable** manifold, not the unstable one. *([1.5](lessons/01-05-phase-portraits.md))*
- "Conserved" means constant along each orbit, not the same number everywhere — distinct level sets are distinct orbits. And in $\ddot x=-V'(x)$ the minus sign is load-bearing: flip it and every center becomes a saddle. *([2.1](lessons/02-01-conservative-reversible-systems.md))*
- A closed orbit is not a limit cycle unless it is **isolated** — the nested orbits around a conservative center are not limit cycles, and conservative systems have none at all. *([2.3](lessons/02-03-limit-cycles.md))*
- The cycle's stability and the enclosed fixed point's stability are independent — in the standard prototype the origin repels while the cycle attracts. And the amplitude is the system's choice, not yours; you only set the phase. *([2.3](lessons/02-03-limit-cycles.md))*
- Poincaré–Bendixson needs **no fixed point** in the region: excise the offender with an inner boundary and use an annulus, not a disk. *([2.4](lessons/02-04-poincare-bendixson.md))*
- Bendixson–Dulac only ever *rules out* cycles, needs a **simply connected** region, and says nothing when the divergence changes sign. Finding $\varphi$ is a guess, not an algorithm. *([2.4](lessons/02-04-poincare-bendixson.md))*
- The trapping trick is a planar privilege — confining a 3-D trajectory to a box does not force a cycle, and that escape hatch is where chaos lives. *([2.4](lessons/02-04-poincare-bendixson.md))*
- Index measures **shape, not stability**: a stable and an unstable node share index $+1$. And a big loop of index $+1$ may enclose several fixed points whose indices merely cancel to $+1$. *([2.5](lessons/02-05-index-theory.md))*

### Bifurcations

- "Goes unstable" and "disappears" are different events: transcritical keeps both fixed points and swaps their labels; saddle-node destroys the pair. *([3.1](lessons/03-01-saddle-node-transcritical.md))*
- The normal form is not a toy — near the threshold it *is* the local truth, up to smooth coordinate change and rescaling. *([3.1](lessons/03-01-saddle-node-transcritical.md), [3.4](lessons/03-04-normal-forms-structural-stability.md))*
- A pitchfork needs the $x\to-x$ symmetry. Add a small constant and it breaks into an **imperfect bifurcation** (a saddle-node plus a surviving branch). *([3.2](lessons/03-02-pitchfork-symmetry.md))*
- The sign of the cubic decides the physics: $-x^3$ saturates (supercritical, smooth, safe); $+x^3$ destabilizes (subcritical, jumps, hysteresis). Subcritical branches are **unstable** — basin boundaries, never observed states. *([3.2](lessons/03-02-pitchfork-symmetry.md), [3.3](lessons/03-03-hopf-bifurcation.md))*
- Branches grow like $\sqrt\mu$, so $dx^*/d\mu$ is **infinite** at onset — a tiny parameter change gives a disproportionate response. *([3.2](lessons/03-02-pitchfork-symmetry.md), [3.3](lessons/03-03-hopf-bifurcation.md))*
- A single **real** eigenvalue through zero is not a Hopf — Hopf needs a genuine complex pair, $\omega\neq0$. *([3.3](lessons/03-03-hopf-bifurcation.md))*
- The linearization tells you *that* a Hopf happens, never *which kind*: super- vs. subcritical is set by the cubic coefficient, i.e. by the nonlinear terms. *([3.3](lessons/03-03-hopf-bifurcation.md))*
- A subcritical Hopf does have a cycle below threshold — an **unstable** one, invisible in simulation but decisive as the basin boundary. *([3.3](lessons/03-03-hopf-bifurcation.md))*
- "Codimension 1" does not mean common — it means a *one-parameter family* will generically run into it, the way a line pierces a surface. *([3.4](lessons/03-04-normal-forms-structural-stability.md))*

### Chaos

- Sensitive dependence is not randomness — nothing noisy is added; the dynamics merely amplifies your uncertainty about the start. *([4.2](lessons/04-02-sensitive-dependence.md))*
- Exponential separation alone is not chaos: $\dot x=x$ and any saddle do it too. You need positive $\lambda$ **on a bounded attractor**, which forces folding. *([4.2](lessons/04-02-sensitive-dependence.md), [4.3](lessons/04-03-strange-attractors.md))*
- A better computer barely helps — the prediction horizon grows only like $\ln$ of your precision. *([4.2](lessons/04-02-sensitive-dependence.md))*
- A strange attractor is not unstable: it attracts transversely and expands only tangentially, between neighbors already on it. *([4.3](lessons/04-03-strange-attractors.md))*
- Attractor and basin are opposites in size and role — a zero-volume destination inside a fat open set of origins (whose boundary may itself be fractal). *([4.3](lessons/04-03-strange-attractors.md))*
- Lorenz $x,y,z$ are pattern **amplitudes**, not spatial positions, and $\rho$ is a dimensionless heating strength. *([4.1](lessons/04-01-lorenz-system.md))*
- The Lorenz Hopf is subcritical, so nothing stable is born at $\rho_H$ — that absence is exactly why the flow has nowhere to relax. *([4.1](lessons/04-01-lorenz-system.md))*
- Dissipative does not mean "collapses to a point": zero volume is compatible with dimension strictly between $2$ and $3$. *([4.1](lessons/04-01-lorenz-system.md), [4.5](lessons/04-05-fractal-dimension.md))*
- A positive $\lambda_i$ does not contradict attraction — it is the **sum** that must be negative. Stretch along one axis, squeeze harder along another. *([4.4](lessons/04-04-lyapunov-exponents.md))*
- Fit $\lambda$ before the plateau: the exponential law holds only while the separation is infinitesimal, and real gaps saturate at the attractor's width. *([4.2](lessons/04-02-sensitive-dependence.md), [4.4](lessons/04-04-lyapunov-exponents.md))*
- "At least one zero exponent" needs the motion to be bounded **and not a fixed point** — a stable fixed point has all-negative exponents. *([4.4](lessons/04-04-lyapunov-exponents.md))*
- $N(\epsilon)$ counts only the boxes that **touch** the set, and dimension is the *slope* of $\ln N$ versus $\ln(1/\epsilon)$, never $N$ itself. Say which dimension you computed: $d_C\le d_{\text{box}}$ in general. *([4.5](lessons/04-05-fractal-dimension.md))*

### Maps and the routes

- Map fixed points solve $f(x)=x$ (the diagonal), not $f(x)=0$ (the flow rule). Carrying the flow rule into discrete time is the single most common Module 5 error. *([5.1](lessons/05-01-maps-cobweb.md))*
- For maps it is the **magnitude** that decides: $f'(x^*)=-0.9$ is stable (spiralling in), $f'(x^*)=-1.5$ is not. The sign only sets monotone vs. oscillatory. *([5.1](lessons/05-01-maps-cobweb.md))*
- $f^2$ means $f\circ f$, not $f(x)^2$ — and when hunting genuine 2-cycles among the roots of $f^2(x)=x$, discard the fixed points of $f$, which always solve it. *([5.1](lessons/05-01-maps-cobweb.md))*
- $f'(x^*)=-1$ is an event, not a non-event: the fixed point is shedding a 2-cycle, visible only in $f^2$. *([5.2](lessons/05-02-logistic-map-period-doubling.md))*
- Not everything past $r_\infty$ is chaos — periodic windows are dense in it, the period-3 one near $r\approx3.83$ most famously. *([5.2](lessons/05-02-logistic-map-period-doubling.md))*
- The doublings are not evenly spaced; they bunch geometrically by $\delta$, which is why infinitely many fit below a finite $r_\infty$. *([5.2](lessons/05-02-logistic-map-period-doubling.md))*
- $\delta$ is not a property of the logistic map, and it is not a Lyapunov exponent: it lives in **parameter** space and describes the *approach* to chaos. Universality also requires a genuinely **quadratic** hump — tent-like or quartic-flat tops are different classes. *([5.3](lessons/05-03-feigenbaum-universality.md))*
- Nearing an intermittency threshold makes the motion look **more** regular: the laminar phases stretch as $\varepsilon^{-1/2}$, the bursts stay the same length. *([5.4](lessons/05-04-intermittency-routes.md))*
- For maps the marginal boundary is $\lvert g'\rvert=1$, not $g'=0$: tangency ($g'=+1$) is the saddle-node edge, $g'=-1$ the period-doubling edge. *([5.4](lessons/05-04-intermittency-routes.md))*
- Coarse-graining is lossless only for a **generating** partition; and conjugacy is an exact equivalence ($h\circ f=g\circ h$ on the nose), not a resemblance — though Lyapunov exponents transfer only under *smooth* conjugacy. *([5.5](lessons/05-05-symbolic-dynamics-ergodicity.md))*
- Ergodicity says $\mu$-**almost** every orbit fills the space; periodic points and dyadic rationals are genuine exceptions that simply carry no weight. *([5.5](lessons/05-05-symbolic-dynamics-ergodicity.md))*
