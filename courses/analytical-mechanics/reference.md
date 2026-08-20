# Analytical Mechanics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Mechanics done twice. **Lagrange** says: write one scalar $L=T-V$ in whatever
coordinates fit the constraints, and the equations of motion are its derivatives.
**Hamilton** says: trade velocity for momentum, and the same physics becomes a
flow on phase space with an algebra attached. In between sits the payoff both
share — every continuous symmetry is a conserved quantity. Use this card to look
up which formalism to reach for, what a symbol means, and the standard tables
(kinetic energies, moments of inertia, generating functions) the lessons use
without restating.

## Notation

Units are SI. "Generalized" quantities carry whatever units the coordinate does,
so each such row states the rule rather than a fixed unit.

| Symbol | Means | Units | First used |
|---|---|---|---|
| $J[y]$ | a **functional** — eats a whole function, returns one number | those of the integrand times $x$ | [1.1](lessons/01-01-calculus-of-variations.md) |
| $F(x,y,y')$ | the cost density inside a functional; $x,y,y'$ are three independent slots | varies | [1.1](lessons/01-01-calculus-of-variations.md) |
| $\eta(x)$, $\varepsilon$ | the wiggle shape (vanishing at the pinned ends) and its small size | same as $y$; dimensionless | [1.1](lessons/01-01-calculus-of-variations.md) |
| $\delta y$, $\delta J$ | the variation of the path, and the resulting first-order change in $J$ | same as $y$; same as $J$ | [1.1](lessons/01-01-calculus-of-variations.md) |
| $q_i$, $\dot q_i$ | generalized coordinate and its velocity — any numbers that fix the configuration | m or rad; per second | [1.2](lessons/01-02-least-action-lagrange.md) |
| $L(q,\dot q,t)$ | the **Lagrangian** $T-V$ — one scalar that generates all the dynamics | J | [1.2](lessons/01-02-least-action-lagrange.md) |
| $S[q]$ | the **action** $\int L\,dt$ — one number per candidate path | J·s | [1.2](lessons/01-02-least-action-lagrange.md) |
| $n$, $N$, $k$ | degrees of freedom, raw coordinates, independent constraints; $n=N-k$ | counts | [1.3](lessons/01-03-generalized-coordinates-constraints.md) |
| $g(q,t)=0$ | a holonomic constraint equation | varies | [1.3](lessons/01-03-generalized-coordinates-constraints.md) |
| $\lambda$ | Lagrange multiplier — the constraint's shadow price; here literally the constraint force | energy per unit of $g$ (N for a length constraint) | [1.3](lessons/01-03-generalized-coordinates-constraints.md) |
| $Q_i$ | generalized force $\lambda\,\partial g/\partial q_i$ conjugate to $q_i$ | energy per unit of $q_i$ (N or N·m) | [1.3](lessons/01-03-generalized-coordinates-constraints.md) |
| $\delta\mathbf r_a$ | virtual displacement — a hypothetical move consistent with the constraints, at frozen time | m | [1.3](lessons/01-03-generalized-coordinates-constraints.md) |
| $U_{\text{eff}}(q)$ | effective potential — real $V$ plus a disguised kinetic term, so one coordinate moves in 1-D | J | [1.4](lessons/01-04-lagrangian-applications.md) |
| $\Omega$ | an externally imposed (driven) rotation rate — a parameter, not a coordinate | rad/s | [1.4](lessons/01-04-lagrangian-applications.md) |
| $\ell$ | angular momentum of a planar orbit, $\ell = mr^2\dot\theta$ (also used for a length) | kg·m²/s | [1.4](lessons/01-04-lagrangian-applications.md) |
| $p_i=\partial L/\partial\dot q_i$ | conjugate (canonical) momentum — **not** necessarily $m\dot q_i$ | J·s per unit of $q_i$: kg·m/s for a length, kg·m²/s for an angle | [2.1](lessons/02-01-cyclic-coordinates-momenta.md) |
| $\epsilon$, $\eta_i$ | the symmetry knob, and its **generator** $\partial Q_i/\partial\epsilon$ at $\epsilon=0$ | varies | [2.2](lessons/02-02-noethers-theorem.md) |
| $F(q,t)$ | the boundary function a symmetry may shift $L$ by, as $dF/dt$ | J·s | [2.2](lessons/02-02-noethers-theorem.md) |
| $I$ | the Noether charge $\sum_i p_i\eta_i - F$ | J·s | [2.2](lessons/02-02-noethers-theorem.md) |
| $h$ | the **energy function** (Jacobi integral) $\sum_i p_i\dot q_i - L$, in $(q,\dot q,t)$ | J | [2.3](lessons/02-03-energy-and-hamiltonian.md) |
| $T_2,T_1,T_0$ | the pieces of $T$ of degree 2, 1, 0 in the velocities | J | [2.3](lessons/02-03-energy-and-hamiltonian.md) |
| $E$ | the true mechanical energy $T+V$ — a *different object* from $h$ | J | [2.3](lessons/02-03-energy-and-hamiltonian.md) |
| $H(q,p,t)$ | the **Hamiltonian** — the same $h$, rewritten in $(q,p)$ | J | [3.1](lessons/03-01-legendre-hamiltons-equations.md) |
| $(\dot q,\dot p)$ | the phase-space velocity field — a planar vector field for one DOF | varies | [3.2](lessons/03-02-phase-space-liouville.md) |
| $\{f,g\}$ | Poisson bracket — the algebraic engine of the dynamics | (units of $f$)(units of $g$) per J·s | [3.3](lessons/03-03-poisson-brackets.md) |
| $\delta_{ij}$, $\epsilon_{ijk}$ | Kronecker delta (1 if $i=j$) and the fully antisymmetric Levi-Civita symbol | dimensionless | [3.3](lessons/03-03-poisson-brackets.md) |
| $[\hat f,\hat g]$, $\hbar$ | the quantum commutator $\hat f\hat g-\hat g\hat f$, and the reduced Planck constant | J·s | [3.3](lessons/03-03-poisson-brackets.md) |
| $(Q,P)$, $K$ | the new phase-space coordinates after a transformation, and the new Hamiltonian | varies; J | [3.4](lessons/03-04-canonical-transformations.md) |
| $M$, $\mathsf J$ | the Jacobian $\partial(Q,P)/\partial(q,p)$, and the symplectic matrix $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ | dimensionless | [3.4](lessons/03-04-canonical-transformations.md) |
| $F_1,F_2,F_3,F_4$ | the four types of generating function, labelled by which variables they hold | J·s | [3.4](lessons/03-04-canonical-transformations.md) |
| $S(q,\alpha,t)$ | Hamilton's **principal function** — the action as a *field* over configuration space | J·s | [4.1](lessons/04-01-hamilton-jacobi.md) |
| $W(q,\alpha)$ | Hamilton's **characteristic function**, the abbreviated action $\int p\,dq$ | J·s | [4.1](lessons/04-01-hamilton-jacobi.md) |
| $\alpha_i$, $\beta_i$ | the separation constants (new momenta) and their conjugate constants (new coordinates) | J or J·s; varies | [4.1](lessons/04-01-hamilton-jacobi.md) |
| $J=\oint p\,dq$ | the **action variable** — the area a closed orbit encloses in phase space | J·s | [4.2](lessons/04-02-action-angle-integrability.md) |
| $\theta$, $\omega(J)$ | the **angle variable** (advances by 1 per orbit) and its rate $\partial H/\partial J = 1/T$ | cycles; cycles per second | [4.2](lessons/04-02-action-angle-integrability.md) |
| $\boldsymbol\eta = \mathbf q-\mathbf q_0$ | displacement from equilibrium (a vector; not 1.1's wiggle $\eta$) | m or rad | [4.3](lessons/04-03-small-oscillations.md) |
| $M_{ij}$, $K_{ij}$ | mass matrix (from $T$) and stiffness matrix (Hessian of $V$) — both symmetric | kg·m²; N/m or N·m | [4.3](lessons/04-03-small-oscillations.md) |
| $\mathbf a_i$, $\xi_i$ | mode shape (ratios only) and normal coordinate of mode $i$ | dimensionless; varies | [4.3](lessons/04-03-small-oscillations.md) |
| $\mu$ | reduced mass $m_1m_2/(m_1+m_2)$ (in 4.5, mass per unit length instead) | kg (kg/m in 4.5) | [4.3](lessons/04-03-small-oscillations.md) |
| $I_{ij}$, $I_1,I_2,I_3$ | the inertia tensor and its principal moments (eigenvalues) | kg·m² | [4.4](lessons/04-04-rigid-body-dynamics.md) |
| $\boldsymbol\omega$, $\boldsymbol\tau$ | angular velocity vector and torque vector, components in the body frame | rad/s; N·m | [4.4](lessons/04-04-rigid-body-dynamics.md) |
| $(\phi,\theta,\psi)$ | Euler angles: precession, nutation, spin — the 3 rotational coordinates | rad | [4.4](lessons/04-04-rigid-body-dynamics.md) |
| $\phi(x,t)$ | a **field** — one dynamical value per point; $x$ is a label, not a coordinate | m (a displacement) | [4.5](lessons/04-05-classical-fields.md) |
| $\mathcal L$, $\mathcal H$, $\mathcal S$ | Lagrangian density, energy density, energy flux | J/m; J/m; W | [4.5](lessons/04-05-classical-fields.md) |
| $\partial_\mu$ | spacetime derivative, $\mu$ running over $\{t,x\}$ and summed when repeated | varies | [4.5](lessons/04-05-classical-fields.md) |
| $\tau$, $c$ | string tension-like stiffness and the wave speed $\sqrt{\tau/\mu}$ | N; m/s | [4.5](lessons/04-05-classical-fields.md) |

## Definitions

### Functional

A machine that eats an entire function and returns a single number — arc length
of a curve, time to slide down a ramp, action of a trajectory.

$$J[y] = \int_a^b F\big(x,\,y(x),\,y'(x)\big)\,dx$$

*Introduced:* [1.1](lessons/01-01-calculus-of-variations.md)

### Variation

A small, endpoint-preserving deformation of the whole curve — the functional-space
analogue of the nudge $dx$. The extremal condition is that the first-order change
vanishes for *every* admissible wiggle.

$$\delta y = \varepsilon\,\eta,\quad \eta(a)=\eta(b)=0, \qquad \delta J = \left.\frac{d}{d\varepsilon}J[y+\varepsilon\eta]\right|_{\varepsilon=0} = 0$$

*Introduced:* [1.1](lessons/01-01-calculus-of-variations.md)

### Euler–Lagrange equation

One differential equation, holding at every point, that replaces searching over
infinitely many curves.

$$\frac{\partial F}{\partial y} - \frac{d}{dx}\frac{\partial F}{\partial y'} = 0$$

*Introduced:* [1.1](lessons/01-01-calculus-of-variations.md)

### Action

The running total of $L=T-V$ over a trip. One number per candidate path.

$$S[q] = \int_{t_1}^{t_2} L(q,\dot q,t)\,dt$$

*Introduced:* [1.2](lessons/01-02-least-action-lagrange.md)

### Hamilton's principle

Among all paths sharing the same pinned endpoints, the real motion is the one you
can nudge without changing the action to first order. "Least" is historical;
**stationary** is honest.

$$\delta S = 0$$

*Introduced:* [1.2](lessons/01-02-least-action-lagrange.md)

### Lagrangian

Kinetic minus potential energy — the difference, not the sum. Defined up to a
total time derivative: $L$ and $L + dF/dt$ give identical equations of motion
(the Lagrangian's gauge freedom).

$$L = T - V$$

*Introduced:* [1.2](lessons/01-02-least-action-lagrange.md)

### Generalized coordinates

Any independent numbers that pin down the configuration — angles, arc lengths,
distances — chosen so the constraints are satisfied automatically. Their count is
the number of degrees of freedom.

*Introduced:* [1.3](lessons/01-03-generalized-coordinates-constraints.md)

### Holonomic constraint

A tie between coordinates expressible as an equation (no velocities): "stay on
this surface," "keep this length." Each independent one removes one DOF. A
velocity condition that can't be integrated to this form (rolling without
slipping) is **nonholonomic** and removes none.

$$g(q_1,\dots,q_N,t) = 0$$

*Introduced:* [1.3](lessons/01-03-generalized-coordinates-constraints.md)

### D'Alembert's principle

Ideal constraint forces are perpendicular to the motions they allow, so they do
no work on any allowed wiggle — which is exactly why $T-V$ works under constraints
and the reaction forces never appear.

$$\sum_a \mathbf F^{\text{(constraint)}}_a\cdot\delta\mathbf r_a = 0$$

*Introduced:* [1.3](lessons/01-03-generalized-coordinates-constraints.md)

### Lagrange multiplier

Keep the redundant coordinate, adjoin the constraint, and $\lambda$ hands you back
the force that enforces it. Read as a rate it is a **shadow price**: the same
object as the multiplier in constrained optimization and the marginal utility of
wealth in consumer theory.

$$\frac{d}{dt}\frac{\partial L}{\partial\dot q_i} - \frac{\partial L}{\partial q_i} = \lambda\,\frac{\partial g}{\partial q_i}, \qquad g(q)=0, \qquad Q_i = \lambda\,\frac{\partial g}{\partial q_i}$$

*Introduced:* [1.3](lessons/01-03-generalized-coordinates-constraints.md)

### Effective potential

When one coordinate's rate is externally fixed or conserved, the rest moves like a
1-D particle in a bowl you can draw. Its valleys are stable equilibria, its
hilltops unstable — stability by eye, no linearization.

$$m_{\text{eff}}\ddot q = -\frac{dU_{\text{eff}}}{dq}, \qquad U_{\text{eff}}'(q_0)=0 \text{ with } U_{\text{eff}}''(q_0)>0 \iff \text{stable}$$

*Introduced:* [1.4](lessons/01-04-lagrangian-applications.md)

### Conjugate momentum

The derivative of $L$ by a velocity. This is *the* definition of momentum in
analytical mechanics; the everyday $m\dot x$ is only its simplest value.

$$p_i = \frac{\partial L}{\partial\dot q_i}$$

*Introduced:* [2.1](lessons/02-01-cyclic-coordinates-momenta.md)

### Cyclic coordinate

A coordinate absent from $L$ (its velocity may still appear). $L$ is flat along it,
so there is no push on its momentum — and the momentum is conserved.

$$\frac{\partial L}{\partial q_i} = 0 \;\Longrightarrow\; \dot p_i = 0$$

*Introduced:* [2.1](lessons/02-01-cyclic-coordinates-momenta.md)

### Continuous symmetry

A knob $\epsilon$ you can turn that deforms every trajectory into another one the
physics can't distinguish — meaning $L$ changes by at most a total time derivative.
Its **generator** is the first-order direction each coordinate moves.

$$\eta_i = \left.\frac{\partial Q_i}{\partial\epsilon}\right|_{\epsilon=0}, \qquad \left.\frac{d}{d\epsilon}L(Q,\dot Q,t)\right|_{\epsilon=0} = \frac{dF}{dt}$$

*Introduced:* [2.2](lessons/02-02-noethers-theorem.md)

### Noether charge

Contract each conjugate momentum with the generator, subtract the boundary
function, and you have a constant of the motion — *on solutions*, since the proof
uses Lagrange's equations.

$$I = \sum_i \frac{\partial L}{\partial\dot q_i}\,\eta_i - F, \qquad \dot I = 0$$

*Introduced:* [2.2](lessons/02-02-noethers-theorem.md)

### Energy function

Weight each velocity by its own momentum, sum, subtract $L$. It changes only
through $L$'s explicit clock-dependence — so it is conserved exactly when the
clock-shift is a symmetry.

$$h = \sum_i p_i\dot q_i - L, \qquad \frac{dh}{dt} = -\frac{\partial L}{\partial t}$$

*Introduced:* [2.3](lessons/02-03-energy-and-hamiltonian.md)

### Legendre transform

The honest way to swap "value at a point" for "slope": describe a convex curve by
its tangent lines instead of its points, losing nothing. The same machine that
turns internal energy into the thermodynamic free energies.

$$H(q,p,t) = \sum_i p_i\dot q_i - L(q,\dot q,t), \quad \text{every } \dot q_i \text{ eliminated in favor of } p$$

*Introduced:* [3.1](lessons/03-01-legendre-hamiltons-equations.md)

### Phase space

The $(q,p)$ space in which one point is a complete instantaneous state. Dynamics
is a vector field on it; trajectories never cross.

*Introduced:* [3.2](lessons/03-02-phase-space-liouville.md)

### Liouville's theorem

The phase flow is an incompressible fluid: a blob of initial conditions may shear,
stretch and wrap forever, but its volume never changes. Consequence: Hamiltonian
systems have **no attractors** — fixed points are centers or saddles, never spirals.

$$\nabla\cdot(\dot q,\dot p) = \frac{\partial^2 H}{\partial q\,\partial p} - \frac{\partial^2 H}{\partial p\,\partial q} = 0$$

*Introduced:* [3.2](lessons/03-02-phase-space-liouville.md)

### Poisson bracket

One algebraic operation that encodes all of the dynamics: how fast an observable
changes, and whether it changes at all.

$$\{f,g\} = \sum_i\left(\frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i}\right)$$

*Introduced:* [3.3](lessons/03-03-poisson-brackets.md)

### Canonical transformation

A change of phase-space coordinates that keeps Hamilton's equations looking like
Hamilton's equations. Equivalently: it preserves the fundamental bracket;
equivalently: it preserves oriented phase-space area.

$$\{Q,P\} = 1 \iff M^\top \mathsf J M = \mathsf J \iff \det M = +1$$

*Introduced:* [3.4](lessons/03-04-canonical-transformations.md)

### Generating function

Hand over one function of mixed old/new variables, take two partial derivatives,
and you have a canonical map **for free** — no bracket check needed.

*Introduced:* [3.4](lessons/03-04-canonical-transformations.md)

### Hamilton–Jacobi equation

Demand that the new Hamiltonian be *zero*, so every new coordinate and momentum
freezes. What remains is one PDE for the action, and the motion then drops out by
differentiation alone.

$$H\!\left(q,\ \frac{\partial S}{\partial q},\ t\right) + \frac{\partial S}{\partial t} = 0, \qquad S = W(q,\alpha) - Et \ \text{ when } \partial H/\partial t = 0$$

*Introduced:* [4.1](lessons/04-01-hamilton-jacobi.md)

### Complete integral

Any solution of the Hamilton–Jacobi PDE carrying $n$ independent constants — one
per degree of freedom. That is all you ever need; the general solution is wasted
effort. The constants *are* the new conserved momenta.

*Introduced:* [4.1](lessons/04-01-hamilton-jacobi.md)

### Action variable

Label a closed orbit not by its energy but by the **area it encloses**. That area
is conserved, so it acts as a momentum that never moves.

$$J = \oint p\,dq$$

*Introduced:* [4.2](lessons/04-02-action-angle-integrability.md)

### Angle variable

The partner coordinate: "how far around the loop you are." Because $H=H(J)$ alone,
it advances at a constant rate, and that rate is the frequency.

$$\theta = \frac{\partial W}{\partial J}, \qquad \dot\theta = \frac{\partial H}{\partial J} = \omega(J) = \frac{1}{T}$$

*Introduced:* [4.2](lessons/04-02-action-angle-integrability.md)

### Integrable system

A system with as many independent conserved quantities as degrees of freedom,
*pairwise Poisson-commuting*. Then motion winds uniformly on an $n$-torus at
constant frequencies (quasi-periodic). Generic systems are **not** integrable.

$$\{F_i,F_j\} = 0 \ \ \forall i,j \;\Longrightarrow\; H = H(J_1,\dots,J_n), \quad \dot\theta_i = \omega_i = \text{const}$$

*Introduced:* [4.2](lessons/04-02-action-angle-integrability.md)

### Adiabatic invariant

Turn a knob **slowly** — over many periods — and the orbit's enclosed area stays
put even as its energy and shape drift. Yank it suddenly and $J$ jumps; the theorem
says nothing about fast changes.

$$J \approx \text{const under slow parameter change}$$

*Introduced:* [4.2](lessons/04-02-action-angle-integrability.md)

### Normal mode

A collective pattern in which *every* coordinate oscillates at one shared
frequency in lockstep. Any motion whatsoever is a superposition of them.

$$(K - \omega^2 M)\,\mathbf a = \mathbf 0, \qquad \det(K-\omega^2M) = 0$$

*Introduced:* [4.3](lessons/04-03-small-oscillations.md)

### Inertia tensor

The rotational stand-in for mass — a *matrix*, because mass spread about one axis
leaks into the response about another. That is why $\mathbf L$ and $\boldsymbol\omega$
generally point different ways.

$$I_{ij} = \int\rho\,(r^2\delta_{ij} - x_ix_j)\,dV, \qquad \mathbf L = I\boldsymbol\omega, \qquad T_{\text{rot}} = \tfrac12\,\boldsymbol\omega^\top I\,\boldsymbol\omega$$

*Introduced:* [4.4](lessons/04-04-rigid-body-dynamics.md)

### Principal axes

The three perpendicular body directions in which $I$ acts like plain
multiplication — its eigenvectors. Spin about one and $\mathbf L\parallel\boldsymbol\omega$,
with no wobble. Any symmetry axis is automatically principal.

*Introduced:* [4.4](lessons/04-04-rigid-body-dynamics.md)

### Lagrangian density

What $L$ becomes when the coordinate index turns continuous: Lagrangian per unit
length, depending on the field and its slopes in *both* space and time.

$$L = \int\mathcal L\,dx, \qquad S[\phi] = \iint\mathcal L\big(\phi,\partial_t\phi,\partial_x\phi\big)\,dx\,dt$$

*Introduced:* [4.5](lessons/04-05-classical-fields.md)

### Noether current

In a field theory a symmetry conserves not a number but a **local flow**: nothing
vanishes here and reappears there, it travels. The space integral of the density
is the conserved charge.

$$\partial_t\rho + \partial_x j = 0 \;\Longrightarrow\; Q = \int\rho\,dx = \text{const}$$

*Introduced:* [4.5](lessons/04-05-classical-fields.md)

## Formulas and rules

### Lagrangian vs. Hamiltonian — which route to take

| | **Lagrangian** | **Hamiltonian** |
|---|---|---|
| State is described by | configuration $q_i$ and velocity $\dot q_i$ — velocity is *derived* from $q$ | position $q_i$ and momentum $p_i$, **independent equals** on phase space |
| Space it lives on | configuration space, dimension $n$ | phase space, dimension $2n$ |
| Central scalar | $L = T - V$ | $H = \sum_i p_i\dot q_i - L$, all velocities eliminated |
| Equations of motion | $n$ **second**-order: $\dfrac{d}{dt}\dfrac{\partial L}{\partial\dot q_i} = \dfrac{\partial L}{\partial q_i}$ | $2n$ **first**-order: $\dot q_i = \dfrac{\partial H}{\partial p_i}$, $\ \dot p_i = -\dfrac{\partial H}{\partial q_i}$ |
| Conservation shows up as | a coordinate missing from $L$ (cyclic) | a coordinate missing from $H$, or $\{f,H\}=0$ |
| Allowed coordinate changes | relabel $q$ only; velocities follow | any symplectic mix of $q$ **and** $p$ |
| Reach for it when | writing down a system from scratch, handling constraints, curvilinear coordinates, going to fields | you want conserved quantities, phase portraits, perturbation theory, canonical/action–angle tricks, or the bridge to quantum and statistical mechanics |
| Passes to the other by | Legendre transform in the velocities | inverse Legendre transform |

*From* [1.2](lessons/01-02-least-action-lagrange.md), [2.3](lessons/02-03-energy-and-hamiltonian.md), [3.1](lessons/03-01-legendre-hamiltons-equations.md) *and* [3.4](lessons/03-04-canonical-transformations.md)

### Symmetry ⇒ conserved quantity

Each row: turn the knob, nothing changes, something is conserved.

| Symmetry | Generator $\eta$ | Noether charge $I$ | Physical name |
|---|---|---|---|
| shift one coordinate, $q_i\to q_i+\epsilon$ (cyclic) | $\eta_i = 1$ | $p_i = \partial L/\partial\dot q_i$ | that coordinate's conjugate momentum |
| translate everything, $x_a\to x_a+\epsilon$ | $\eta_a = 1$ | $\sum_a m_a\dot x_a$ | total linear momentum |
| rotate the plane by $\epsilon$ | $\eta_x=-y,\ \eta_y=x$ | $m(x\dot y - y\dot x)$ | angular momentum $\ell_z$ |
| rotate about the $z$-axis (polar/cylindrical) | $\eta_\phi = 1$ | $p_\phi = mr^2\dot\phi$ | axial angular momentum |
| Galilean boost, $x_a\to x_a+\epsilon t$ | $\eta_a = t$ | $Pt - Mx_{\text{cm}}$ (here $F=\sum_a m_ax_a\neq0$) | center of mass moves uniformly |
| shift the clock, $\partial L/\partial t = 0$ | — (acts on $t$, not on a $q$) | $h = \sum_i p_i\dot q_i - L$ | the energy function |
| field with no explicit $t$ | — | $\mathcal H = \dot\phi\,\partial\mathcal L/\partial\dot\phi - \mathcal L$ | energy density + flux (a conserved *current*) |

*From* [2.1](lessons/02-01-cyclic-coordinates-momenta.md), [2.2](lessons/02-02-noethers-theorem.md), [2.3](lessons/02-03-energy-and-hamiltonian.md) *and* [4.5](lessons/04-05-classical-fields.md)

### The energy function: two independent switches

$$h = T_2 - T_0 + V \qquad\text{vs.}\qquad E = T_2 + T_1 + T_0 + V$$

| | $T$ pure quadratic ($T_1=T_0=0$) | $T$ carries $T_1$ or $T_0$ (driven/moving constraint) |
|---|---|---|
| $\partial L/\partial t = 0$ | $h$ conserved **and** $h=E$ — the textbook case | $h$ conserved but $h\neq E$; $E$ is *not* conserved (bead on a spun hoop) |
| $L$ has explicit $t$ | $h = E$ at every instant, but neither is constant (driven oscillator) | neither conserved nor equal |

Euler's homogeneous-function theorem is what does the work: if $f$ is homogeneous
of degree $n$ in the velocities, then $\sum_i\dot q_i\,\partial f/\partial\dot q_i = nf$,
so $\sum_i \dot q_i\,\partial L/\partial\dot q_i = 2T_2 + T_1$.

*From* [2.3](lessons/02-03-energy-and-hamiltonian.md)

### Kinetic energies to copy down

The lessons use these without re-deriving them; step 2 of every problem is picking
the right row.

| Setting | $T$ |
|---|---|
| line / plane, Cartesian | $\tfrac12 m\dot x^2$; $\ \tfrac12 m(\dot x^2+\dot y^2)$ |
| plane polar $(r,\theta)$ | $\tfrac12 m(\dot r^2 + r^2\dot\theta^2)$ |
| cylindrical $(\rho,\phi,z)$ | $\tfrac12 m(\dot\rho^2 + \rho^2\dot\phi^2 + \dot z^2)$ |
| spherical $(r,\theta,\phi)$ | $\tfrac12 m(\dot r^2 + r^2\dot\theta^2 + r^2\sin^2\theta\,\dot\phi^2)$ |
| bead on a circle of radius $R$ | $\tfrac12 mR^2\dot\theta^2$ |
| bead on the curve $y=f(x)$ | $\tfrac12 m\big(1 + f'(x)^2\big)\dot x^2$ |
| bead on a hoop spun at rate $\Omega$ | $\tfrac12 mR^2\dot\theta^2 + \tfrac12 mR^2\Omega^2\sin^2\theta$ (second term is $T_0$) |
| two chained rods (double pendulum), second bob | $v_2^2 = \ell_1^2\dot\theta_1^2 + \ell_2^2\dot\theta_2^2 + 2\ell_1\ell_2\dot\theta_1\dot\theta_2\cos(\theta_1-\theta_2)$ |
| rigid body about its center | $\tfrac12\boldsymbol\omega^\top I\,\boldsymbol\omega$ |

Common potentials: uniform gravity $V=mgz$ (or $-mg\ell\cos\theta$ measured from a
pivot), spring $V=\tfrac12 k(r-\ell_0)^2$, central $V=V(r)$. For a charge $q$ in an
electromagnetic field the Lagrangian is velocity-coupled,
$L = \tfrac12 mv^2 - q\varphi + q\,\mathbf v\cdot\mathbf A$, giving the canonical
momentum $\mathbf p = m\mathbf v + q\mathbf A$ — the origin of minimal coupling.

*From* [1.2](lessons/01-02-least-action-lagrange.md), [1.3](lessons/01-03-generalized-coordinates-constraints.md), [1.4](lessons/01-04-lagrangian-applications.md) *and* [2.1](lessons/02-01-cyclic-coordinates-momenta.md)

### A first integral for free — Beltrami

When the integrand has **no explicit independent variable**, the second-order
Euler–Lagrange equation integrates once by itself:

$$\frac{\partial F}{\partial x} = 0 \;\Longrightarrow\; F - y'\frac{\partial F}{\partial y'} = \text{const}$$

With $x\to t$ and $F\to L$ this *is* the energy function: "no explicit $x$" and "no
explicit $t$" are the same theorem. Use it only when $\partial F/\partial x = 0$.

*From* [1.1](lessons/01-01-calculus-of-variations.md) *and* [2.3](lessons/02-03-energy-and-hamiltonian.md)

### Standard Hamiltonians

| System | $H$ |
|---|---|
| free particle | $\dfrac{p^2}{2m}$ |
| harmonic oscillator | $\dfrac{p^2}{2m} + \tfrac12 m\omega^2q^2$ |
| uniform gravity | $\dfrac{p^2}{2m} + mgz$ |
| plane pendulum | $\dfrac{p_\theta^2}{2m\ell^2} + mg\ell(1-\cos\theta)$; separatrix at $H=2mg\ell$ |
| central force (plane polar) | $\dfrac{p_r^2}{2m} + \dfrac{p_\theta^2}{2mr^2} + V(r)$ |
| relativistic free particle | $\sqrt{p^2c^2 + m^2c^4}\ \to\ mc^2 + \dfrac{p^2}{2m}$ at low speed |
| charge in an EM field | $\dfrac{(\mathbf p - q\mathbf A)^2}{2m} + q\varphi$ |
| effective radial problem | $U_{\text{eff}}(r) = V(r) + \dfrac{\ell^2}{2mr^2}$ (centrifugal barrier) |

*From* [1.4](lessons/01-04-lagrangian-applications.md), [3.1](lessons/03-01-legendre-hamiltons-equations.md) *and* [3.2](lessons/03-02-phase-space-liouville.md)

### Poisson bracket toolkit

$$\dot f = \{f,H\} + \frac{\partial f}{\partial t}, \qquad f \text{ conserved} \iff \{f,H\} = 0 \ \ (\text{if } \partial f/\partial t = 0)$$

$$\{q_i,q_j\} = 0, \qquad \{p_i,p_j\} = 0, \qquad \{q_i,p_j\} = \delta_{ij}$$

| Law | Statement |
|---|---|
| antisymmetry | $\{f,g\} = -\{g,f\}$, hence $\{f,f\} = 0$ |
| bilinearity | $\{af+bg,\,h\} = a\{f,h\} + b\{g,h\}$ |
| Leibniz (ordered!) | $\{fg,\,h\} = f\{g,h\} + \{f,h\}g$ |
| Jacobi | $\{f,\{g,h\}\} + \{g,\{h,f\}\} + \{h,\{f,g\}\} = 0$ |
| Poisson's theorem | $f,g$ conserved $\Rightarrow \{f,g\}$ conserved |

Worth having memorized: $\{q,p^2\} = 2p$, $\{q^2,p\} = 2q$, $\{L_x,L_y\} = L_z$
(and cyclic), $\{L_z,x\} = y$, $\{L_z,p_x\} = p_y$ — angular momentum **generates**
rotations. Dirac's rule sends $\{f,g\}\to\frac{1}{i\hbar}[\hat f,\hat g]$, so
$\{q,p\}=1$ becomes $[\hat q,\hat p]=i\hbar$.

*From* [3.3](lessons/03-03-poisson-brackets.md)

### Generating functions — the four types

| Type | Depends on | Generates |
|---|---|---|
| $F_1(q,Q)$ | old & new coordinate | $p = \dfrac{\partial F_1}{\partial q}, \quad P = -\dfrac{\partial F_1}{\partial Q}$ |
| $F_2(q,P)$ | old coordinate, new momentum | $p = \dfrac{\partial F_2}{\partial q}, \quad Q = \dfrac{\partial F_2}{\partial P}$ |
| $F_3(p,Q)$ | old momentum, new coordinate | $q = -\dfrac{\partial F_3}{\partial p}, \quad P = -\dfrac{\partial F_3}{\partial Q}$ |
| $F_4(p,P)$ | old & new momentum | $q = -\dfrac{\partial F_4}{\partial p}, \quad Q = \dfrac{\partial F_4}{\partial P}$ |

Sign mnemonic: start from $q$ and $p = +\partial F/\partial q$; start from $p$ and
$q = -\partial F/\partial p$; the new-coordinate slot ($Q$ in $F_1,F_3$) always
carries the minus for $P$. New Hamiltonian: $K = H + \partial F/\partial t$.

Three to keep in your pocket: identity $F_2 = qP$; point transformation
$F_2 = f(q)P$ giving $Q=f(q),\ P = p/f'(q)$; exchange $F_1 = qQ$ giving
$Q = p,\ P = -q$. And the oscillator's action–angle generator
$F_1 = \tfrac12 m\omega q^2\cot Q$, which sends
$q = \sqrt{2P/m\omega}\,\sin Q$, $p = \sqrt{2m\omega P}\,\cos Q$ and $H\to K=\omega P$.

*From* [3.4](lessons/03-04-canonical-transformations.md)

### Action–angle and the frequency shortcut

$$J = \oint p\,dq \;\Longrightarrow\; H = H(J) \;\Longrightarrow\; \omega = \frac{\partial H}{\partial J} = \frac1T$$

| System | $J$ | $H(J)$ | $\omega$ |
|---|---|---|---|
| harmonic oscillator | $2\pi E/\omega_0$ | $\dfrac{\omega_0}{2\pi}J$ | $\omega_0/2\pi$, amplitude-independent |
| particle in a box of width $L$ | $2L\sqrt{2mE}$ | $\dfrac{J^2}{8mL^2}$ | $\dfrac{J}{4mL^2} = \dfrac{v}{2L}$ |
| anharmonic, $H = \alpha J^{3/2}$ | — | $\alpha J^{3/2}$ | $\tfrac32\alpha J^{1/2}$ — grows with amplitude |

Bohr–Sommerfeld quantization: $\oint p\,dq = nh$. For the box this reproduces
$E_n = n^2\pi^2\hbar^2/(2mL^2)$ exactly. Adiabatic scaling for a slowly shortened
pendulum: $E\propto\ell^{-1/2}$, angular amplitude $\theta_0\propto\ell^{-3/4}$.

*From* [4.2](lessons/04-02-action-angle-integrability.md)

### Small oscillations, start to finish

1. Locate the equilibrium $\mathbf q_0$ (**first** — the linear term in $V$ vanishes only there).
2. $K_{ij} = \partial^2V/\partial q_i\partial q_j$ at $\mathbf q_0$; $M_{ij}$ read off $T$ at $\mathbf q_0$.
3. Solve $\det(K-\omega^2M) = 0$ for the $n$ roots $\omega_i^2$.
4. For each root, the null vector of $K-\omega^2_iM$ is the mode shape $\mathbf a_i$.
5. Superpose: $\boldsymbol\eta(t) = \sum_i \mathbf a_i(A_i\cos\omega_it + B_i\sin\omega_it)$.

$$M\ddot{\boldsymbol\eta} + K\boldsymbol\eta = \mathbf 0, \qquad \mathbf a_i^\top M\,\mathbf a_j = 0 \ (i\neq j), \qquad L = \tfrac12\sum_i(\dot\xi_i^2 - \omega_i^2\xi_i^2)$$

Sanity checks: a neutral direction (free translation or rotation) always appears
as $\omega = 0$; $\omega_i^2 < 0$ means you expanded about a saddle, not a well.
Two masses and three equal springs between walls give $\omega^2 = k/m$ with
$\mathbf a=(1,1)$ and $\omega^2 = 3k/m$ with $\mathbf a=(1,-1)$; a diatomic
molecule gives $\omega^2 = k/\mu$ with $\mu = m_1m_2/(m_1+m_2)$.

*From* [4.3](lessons/04-03-small-oscillations.md)

### Rigid bodies: moments, axis theorems, Euler's equations

Standard principal moments about the center of mass (mass $M$):

| Body | Moments |
|---|---|
| thin rod, length $\ell$ | $\tfrac1{12}M\ell^2$ transverse; $0$ along its own axis |
| thin plate, sides $a\times b$ | $\tfrac1{12}Mb^2$, $\ \tfrac1{12}Ma^2$, $\ \tfrac1{12}M(a^2+b^2)$ |
| hoop, radius $R$ | $MR^2$ about its axis; $\tfrac12MR^2$ about a diameter |
| disk or solid cylinder, radius $R$ | $\tfrac12MR^2$ about its axis; $\tfrac14MR^2 + \tfrac1{12}M\ell^2$ transverse |
| solid sphere / thin shell | $\tfrac25MR^2$ / $\tfrac23MR^2$ |
| solid cube, side $a$ | $\tfrac16Ma^2$ about any axis through the center |

$$\text{parallel axis: } I = I_{\text{cm}} + Md^2, \qquad \text{perpendicular axis (planar bodies only): } I_3 = I_1 + I_2$$

$$I_1\dot\omega_1 = (I_2-I_3)\,\omega_2\omega_3 + \tau_1 \quad\text{and cyclic } 1\to2\to3\to1$$

Free symmetric top ($I_1=I_2\neq I_3$, no torque): $\omega_3$ is frozen and
$(\omega_1,\omega_2)$ rotates in the body frame at
$\Omega = \dfrac{I_3-I_1}{I_1}\omega_3$. **Tennis-racket theorem:** steady spin about
the largest or smallest principal axis is stable, about the **intermediate** axis
exponentially unstable — the sign of $(I_2-I_3)(I_3-I_1)$ decides.

*From* [4.4](lessons/04-04-rigid-body-dynamics.md)

### Fields: the continuum limit

$$\mathcal L = \tfrac12\mu(\partial_t\phi)^2 - \tfrac12\tau(\partial_x\phi)^2 \quad\text{with } \mu = \frac{m}{a},\ \tau = ka \text{ held fixed as } a\to0$$

$$\partial_\mu\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)} - \frac{\partial\mathcal L}{\partial\phi} = 0 \quad\text{i.e.}\quad \partial_t\frac{\partial\mathcal L}{\partial(\partial_t\phi)} + \partial_x\frac{\partial\mathcal L}{\partial(\partial_x\phi)} - \frac{\partial\mathcal L}{\partial\phi} = 0$$

| Density | Field equation |
|---|---|
| $\tfrac12\mu\dot\phi^2 - \tfrac12\tau\phi'^2$ | $\ddot\phi = c^2\phi''$, $\ c^2 = \tau/\mu$ (wave equation) |
| the above $-\ \tfrac12\kappa\phi^2$ | $\mu\ddot\phi - \tau\phi'' + \kappa\phi = 0$ (Klein–Gordon; lowest frequency $\sqrt{\kappa/\mu}$) |
| $\tfrac12\dot\phi^2 - \tfrac12\phi'^2 - \tfrac12m^2\phi^2$ | $\ddot\phi - \phi'' + m^2\phi = 0$, dispersion $\omega^2 = k^2 + m^2$ |

Energy density and flux for the string:
$\mathcal H = \tfrac12\mu\dot\phi^2 + \tfrac12\tau\phi'^2$, $\ \mathcal S = -\tau\dot\phi\phi'$,
obeying $\partial_t\mathcal H + \partial_x\mathcal S = 0$ on solutions.

*From* [4.5](lessons/04-05-classical-fields.md)

### Small identities the lessons use without stating

$$\sum_i \dot q_i\frac{\partial f}{\partial\dot q_i} = nf \ \ (f \text{ homogeneous of degree } n \text{ in } \dot q) \qquad \text{(Euler)}$$

$$1 - \cos\theta = 2\sin^2\tfrac\theta2, \qquad \cos2\theta = 2\cos^2\theta - 1, \qquad \sin\theta\cos\theta = \tfrac12\sin2\theta$$

$$\cosh^2u - \sinh^2u = 1, \qquad \cos A + \cos B = 2\cos\tfrac{A+B}2\cos\tfrac{A-B}2 \ \ \text{(beats)}$$

Area of an ellipse with semi-axes $a,b$ is $\pi ab$ — that is how $\oint p\,dq$ is
evaluated for the oscillator, and how the phase-space blob's area is measured.

*From* [1.1](lessons/01-01-calculus-of-variations.md), [2.3](lessons/02-03-energy-and-hamiltonian.md), [4.2](lessons/04-02-action-angle-integrability.md) *and* [4.3](lessons/04-03-small-oscillations.md)

## Assumed, not taught here

This is a Tier 1 course: it moves fast and assumes the refreshers below. Every row
points at where the fact is actually derived.

| Fact | Where it's taught |
|---|---|
| Newton's second law, force as $-V'(x)$, free-body reasoning | [mechanics-refresher 1.2](../mechanics-refresher/lessons/01-02-newtons-laws.md) |
| Work, energy, conservative forces and potential energy | [mechanics-refresher 2.2](../mechanics-refresher/lessons/02-02-potential-energy-conservation.md) |
| Simple harmonic motion, $\omega = \sqrt{k/m}$, amplitude and period | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Damping, driving, resonance and beats | [mechanics-refresher 3.2](../mechanics-refresher/lessons/03-02-damped-driven-oscillations.md) |
| Moment of inertia, torque, rotational kinematics | [mechanics-refresher 4.1](../mechanics-refresher/lessons/04-01-rotational-dynamics.md) |
| Angular momentum and its conservation | [mechanics-refresher 4.2](../mechanics-refresher/lessons/04-02-angular-momentum.md) |
| Central orbits and the effective potential $V + \ell^2/2mr^2$ | [mechanics-refresher 5.2](../mechanics-refresher/lessons/05-02-orbits-effective-potential.md) |
| Second-order linear ODEs and their solutions | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Linear systems, eigenvalue solutions of $\dot{\mathbf x} = A\mathbf x$ | [ode-refresher 3.1](../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md) |
| Phase portraits: fixed points, centers, saddles, Jacobian linearization | [ode-refresher 3.2](../ode-refresher/lessons/03-02-phase-portraits-stability.md) |
| Separation of variables for PDEs (used on Hamilton–Jacobi) | [ode-refresher 4.2](../ode-refresher/lessons/04-02-intro-pdes-separation.md) |
| Chain rule, product rule, implicit differentiation | [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) |
| Taylor expansion about a point (used on $V$ near equilibrium) | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Integration by parts — the move that kills the boundary term in 1.1 | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Loop integrals and accumulation (what $\oint p\,dq$ means) | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Partial derivatives, gradients, equality of mixed partials (Liouville's cancellation) | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Lagrange multipliers as shadow prices, second-derivative tests | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| Divergence, and "divergence-free means incompressible" | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| Determinants as area-scaling factors ($\det M = 1$) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Eigenvalues and eigenvectors | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| Spectral theorem, quadratic forms, simultaneous diagonalization | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Magnetic force $q\mathbf v\times\mathbf B$ and the vector potential $\mathbf A$ | [em-refresher 3.1](../em-refresher/lessons/03-01-magnetic-force.md), [4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md) |
| The multiplier read as a price (marginal utility of wealth) — the same $\lambda$ | [micro-refresher 1.2](../micro-refresher/lessons/01-02-utility-maximization-marshallian-demand.md) |

**The recurring bridge:** the multiplier $\lambda$ in
[1.3](lessons/01-03-generalized-coordinates-constraints.md) *is* the constrained
optimum's multiplier in
[calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md)
*is* the shadow price of the budget in
[micro-refresher 1.2](../micro-refresher/lessons/01-02-utility-maximization-marshallian-demand.md).
Adjoin $\lambda g$ to the objective and $\lambda$ prices the constraint — here in
newtons, there in utils per dollar.

## Pitfalls

### Variational calculus

- $\dfrac{d}{dx}\dfrac{\partial F}{\partial y'}$ is a **total** derivative of a **partial** one; the two cannot be swapped. Most common E–L error there is. *([1.1](lessons/01-01-calculus-of-variations.md))*
- Euler–Lagrange enforces $\delta J = 0$, i.e. *stationary*, not minimal — "least action" is a historical label, not a guarantee. *([1.1](lessons/01-01-calculus-of-variations.md), [1.2](lessons/01-02-least-action-lagrange.md))*
- Beltrami is not a separate theorem: it is E–L plus "no explicit $x$." Use it only when $\partial F/\partial x=0$. *([1.1](lessons/01-01-calculus-of-variations.md))*
- Hamilton's principle **pins** both endpoints; that is what kills the boundary term. Free endpoints give extra conditions, not the equations of motion. *([1.2](lessons/01-02-least-action-lagrange.md))*

### Building the Lagrangian

- $L = T - V$, never $T + V$. The minus sign flips the sign of every force. *([1.2](lessons/01-02-least-action-lagrange.md))*
- More coordinates is not more physics: carrying a constraint-violating coordinate reintroduces the reaction force you worked to remove. Keep it only when you *want* that force. *([1.3](lessons/01-03-generalized-coordinates-constraints.md))*
- Coordinates must be independent **and** cover all allowed configurations — using $x$ for a pendulum fails near $\pm90$ degrees. *([1.3](lessons/01-03-generalized-coordinates-constraints.md))*
- Don't substitute a conservation law into $L$ and then vary — that changes what is held fixed and flips the centrifugal sign. Derive the E–L equations *first*, then substitute. *([1.4](lessons/01-04-lagrangian-applications.md))*
- $U_{\text{eff}}$ is not a potential energy: it is $V$ plus a disguised kinetic term, entering $h$ with a **minus** ($h = T_2 - T_0 + V$). Getting the flip wrong turns stable equilibria unstable. *([1.4](lessons/01-04-lagrangian-applications.md), [2.3](lessons/02-03-energy-and-hamiltonian.md))*
- For chained bodies, do not drop the cross term in $T$ (the $\cos(\theta_1-\theta_2)$ coupling) — it silently decouples the arms with no error message. *([1.4](lessons/01-04-lagrangian-applications.md))*

### Momentum and conservation

- The conjugate momentum is $\partial L/\partial\dot q$, **not** $m\dot q$ — with velocity-coupled terms (magnetic fields, rotating frames) they genuinely differ, and only the canonical one is conserved. *([2.1](lessons/02-01-cyclic-coordinates-momenta.md), [3.1](lessons/03-01-legendre-hamiltons-equations.md))*
- Only the **bare** $q_i$ matters for cyclicity; $\dot q_i$ may appear all over $L$. And "cyclic" doesn't require an angle — any absent coordinate qualifies. *([2.1](lessons/02-01-cyclic-coordinates-momenta.md))*
- A symmetry may shift $L$ by a total derivative $dF/dt$; forget the $-F$ term in the Noether charge and you get the wrong constant (the Galilean boost is exactly this case). *([2.2](lessons/02-02-noethers-theorem.md))*
- Noether's $\dot I = 0$ holds **on solutions** — the symmetry is a property of $L$, the conservation a property of actual motion. *([2.2](lessons/02-02-noethers-theorem.md))*

### Energy versus the energy function

- "$L$ has no explicit $t$" proves **$h$** is conserved, not that *energy* is. On a driven hoop $h$ is constant while $E = T+V$ is not. *([2.3](lessons/02-03-energy-and-hamiltonian.md))*
- Conversely, an explicitly time-dependent system can still have $h = E$ at every instant — it just isn't constant. The two switches are orthogonal. *([2.3](lessons/02-03-energy-and-hamiltonian.md))*
- $T_0$ came from kinetic energy, not potential; filing it under $V$ flips the centrifugal sign. *([2.3](lessons/02-03-energy-and-hamiltonian.md))*

### Passing to the Hamiltonian

- You are not finished until **every** $\dot q$ is eliminated in favor of $p$; an $H$ still containing velocities is not a function on phase space and its partials are meaningless. *([3.1](lessons/03-01-legendre-hamiltons-equations.md))*
- $H = T+V$ only for time-independent constraints and velocity-independent potentials — and even then, write it in $(q,p)$: $\frac{p^2}{2m}$, never $\frac12m\dot x^2$. *([3.1](lessons/03-01-legendre-hamiltons-equations.md))*

### Phase space and canonical maps

- Liouville preserves **volume**, not shape: a blob generically stretches into a thin filament of the same area. Trajectories may converge in one direction if they spread in another; only all-round contraction is banned. *([3.2](lessons/03-02-phase-space-liouville.md))*
- A damped pendulum spiralling to rest does not violate Liouville — it isn't Hamiltonian; its flow has divergence $-\gamma < 0$. *([3.2](lessons/03-02-phase-space-liouville.md))*
- The bracket's sign convention is load-bearing: fix $\{q,p\} = +1$ and $\dot f = \{f,H\}$, and never mix in a text that flips it — a stray sign reverses time. *([3.3](lessons/03-03-poisson-brackets.md))*
- $\{f,H\} = 0 \Rightarrow$ conserved assumes $\partial f/\partial t = 0$; otherwise use the full $df/dt = \{f,H\} + \partial f/\partial t$. *([3.3](lessons/03-03-poisson-brackets.md))*
- Keep the Leibniz rule **ordered** ($\{fg,h\} = f\{g,h\} + \{f,h\}g$) — classically pedantic, quantum-mechanically essential. *([3.3](lessons/03-03-poisson-brackets.md))*
- Not every smooth phase-space map is legal: $Q = 2q,\ P = p$ gives $\{Q,P\}=2$ and breaks Hamilton's equations. A generating function, by contrast, needs no check. *([3.4](lessons/03-04-canonical-transformations.md))*
- $\det M = \pm1$ pins to $+1$: symplectic maps preserve **orientation** too, so the reflection $Q=q,\ P=-p$ is not canonical. *([3.4](lessons/03-04-canonical-transformations.md))*

### Hamilton–Jacobi and action–angle

- In the PDE, $\partial S/\partial q$ is an **unknown** you solve for, not a derivative you evaluate — that only comes after. *([4.1](lessons/04-01-hamilton-jacobi.md))*
- $S$ here is a *field* over configuration space, not one number attached to one trajectory; you need a **complete** integral, never the general solution. *([4.1](lessons/04-01-hamilton-jacobi.md))*
- With $J = \oint p\,dq$ the angle advances by $1$ per orbit, so $\omega = \partial H/\partial J$ is in cycles per second — for the oscillator that's $\omega_0/2\pi$, not $\omega_0$. *([4.2](lessons/04-02-action-angle-integrability.md))*
- $J$ is an **area**, $E$ is a height: don't write $\partial H/\partial E$. And $J$ is invariant only under *slow* change. *([4.2](lessons/04-02-action-angle-integrability.md))*
- Integrability needs $n$ conserved quantities that are independent **and** Poisson-commute; generic systems have no such set. *([4.2](lessons/04-02-action-angle-integrability.md))*

### Modes and rigid bodies

- You cannot diagonalize $K$ alone unless $M\propto\mathbb 1$: solve the **generalized** problem, and orthogonality is $\mathbf a_i^\top M\mathbf a_j = 0$, not the plain dot product. *([4.3](lessons/04-03-small-oscillations.md))*
- Expand only about a **stable** equilibrium, and locate $\mathbf q_0$ first; a negative $\omega^2$ means you sat on a saddle. *([4.3](lessons/04-03-small-oscillations.md))*
- A mode shape fixes **ratios and relative signs** only — same sign is in phase, opposite sign is half a period out. *([4.3](lessons/04-03-small-oscillations.md))*
- $\mathbf L = I\boldsymbol\omega$ is a *matrix* relation: $\mathbf L\parallel\boldsymbol\omega$ only along a principal axis. That misalignment *is* the wobble. *([4.4](lessons/04-04-rigid-body-dynamics.md))*
- Torque-free means $\mathbf L$ is constant **in the space frame**; $\boldsymbol\omega$ still moves in the body frame. Conserved-in-space is not constant-in-body. *([4.4](lessons/04-04-rigid-body-dynamics.md))*
- Fix Euler's index cycle once ($\dot\omega_1$ carries $I_2-I_3$, advancing $1\to2\to3\to1$); backwards flips every stability verdict. *([4.4](lessons/04-04-rigid-body-dynamics.md))*

### Fields

- $x$ is a **label** (the old bead index), not a dynamical coordinate; only $\phi$ is dynamical, which is why $x$ and $t$ enter $\mathcal L$ symmetrically. *([4.5](lessons/04-05-classical-fields.md))*
- $\partial_\mu\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)}$ is a **sum** over $\mu\in\{t,x\}$. Drop the spatial term and you delete the $\phi''$ — that is, you delete the wave. *([4.5](lessons/04-05-classical-fields.md))*

### Symbol collisions to watch

- $J$ is a functional in 1.1, the symplectic matrix in 3.4 (written $\mathsf J$ here), and the action variable in 4.2. *([1.1](lessons/01-01-calculus-of-variations.md), [3.4](lessons/03-04-canonical-transformations.md), [4.2](lessons/04-02-action-angle-integrability.md))*
- $M$ is the transformation Jacobian in 3.4 and the mass matrix in 4.3; $K$ is the new Hamiltonian in 3.4 and the stiffness matrix in 4.3. *([3.4](lessons/03-04-canonical-transformations.md), [4.3](lessons/04-03-small-oscillations.md))*
- $\mu$ is a reduced mass in 4.3, a mass per unit length in 4.5, and a spacetime index in the same lesson; $\tau$ is a torque in 4.4 and a string stiffness in 4.5. *([4.3](lessons/04-03-small-oscillations.md), [4.4](lessons/04-04-rigid-body-dynamics.md), [4.5](lessons/04-05-classical-fields.md))*
- $\eta$ is the variational wiggle in 1.1, a Noether generator in 2.2, and the displacement-from-equilibrium vector in 4.3. *([1.1](lessons/01-01-calculus-of-variations.md), [2.2](lessons/02-02-noethers-theorem.md), [4.3](lessons/04-03-small-oscillations.md))*
