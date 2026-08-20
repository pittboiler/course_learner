# Relativity (SR + GR) · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Relativity is one idea applied twice. **Special relativity:** the only physics is
what every observer agrees on, so write everything as invariants and tensors.
**General relativity:** gravity is not a force but the shape of the arena, so the
metric $g_{\mu\nu}$ becomes the dynamical field and free particles just go
straight. This card holds the conventions (get the signature wrong and every sign
below flips), the index machinery, the standard metrics with what each one
describes, and the formulas you'd otherwise be flipping through six modules to
find.

**Signature convention — this course is $(-,+,+,+)$ ("mostly plus"), everywhere,
without exception.** So $\eta_{\mu\nu}=\operatorname{diag}(-1,+1,+1,+1)$, timelike
intervals have $ds^2<0$, and $p^\mu p_\mu=-m^2c^2$. Landau and most
particle-physics texts use $(+,-,-,-)$, which flips the sign of every invariant
below; the physics is identical, the intermediate signs are not. Curvature follows
**Carroll's convention**, $R^\rho{}_{\sigma\mu\nu}=\partial_\mu\Gamma^\rho{}_{\nu\sigma}-\cdots$,
with $R_{\mu\nu}=R^\lambda{}_{\mu\lambda\nu}$ — checked against the sanity anchor that
a sphere of radius $a$ has $R=+2/a^2$. Factors of $c$ and $G$ are kept explicit
throughout except where a lesson says otherwise.

**The underlying geometry** — manifolds, connections, curvature, forms — is
developed as mathematics in [differential-geometry](../differential-geometry/reference.md).
Module 4 here is the physicist's-pragmatic, component-based version of the same
material; when you want the coordinate-free statement or a proof, look there
rather than here.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $c$ | speed of light in vacuum — a property of spacetime, not a relative velocity | [1.1](lessons/01-01-postulates-simultaneity.md) |
| $\beta = v/c$ | speed as a fraction of light speed; $0\le\beta<1$ for anything real | [1.2](lessons/01-02-lorentz-transformations.md) |
| $\gamma = (1-\beta^2)^{-1/2}$ | Lorentz factor — the universal stretch; $\gamma\ge1$ always | [1.2](lessons/01-02-lorentz-transformations.md) |
| $\Delta\tau$, $\tau$ | proper time — what a clock carried along the worldline actually reads | [1.3](lessons/01-03-dilation-contraction-paradoxes.md) |
| $L_0$ | proper length — an object's length in its own rest frame (the longest reading) | [1.3](lessons/01-03-dilation-contraction-paradoxes.md) |
| $\Delta s^2$, $ds^2$ | the interval — **one signed symbol**, not a square; negative for timelike | [1.4](lessons/01-04-spacetime-interval-causality.md) |
| $x^\mu=(ct,x,y,z)$ | position four-vector; the $c$ makes every slot a length | [1.5](lessons/01-05-four-vectors-momentum.md) |
| $u^\mu$ | four-velocity $dx^\mu/d\tau=\gamma(c,\mathbf v)$; always $u\cdot u=-c^2$ | [1.5](lessons/01-05-four-vectors-momentum.md) |
| $p^\mu=(E/c,\mathbf p)$ | four-momentum; its invariant length is the mass | [1.5](lessons/01-05-four-vectors-momentum.md) |
| $s$ | the collision invariant $(\sum E_i)^2-c^2\lvert\sum\vec p_i\rvert^2$; $\sqrt s$ is the CM energy | [1.6](lessons/01-06-relativistic-dynamics-optics.md) |
| $\eta_{\mu\nu}$ | flat (Minkowski) metric $\operatorname{diag}(-1,+1,+1,+1)$ — its own inverse | [2.1](lessons/02-01-index-notation-minkowski-metric.md) |
| $\delta^\mu{}_\nu$ | Kronecker delta: $1$ if the indices match, else $0$ | [2.1](lessons/02-01-index-notation-minkowski-metric.md) |
| $\Lambda^\mu{}_\nu$ | the Lorentz boost as a matrix; upper index = row, lower = column | [2.2](lessons/02-02-vectors-covectors-transformations.md) |
| $T^{(\mu\nu)}$, $T^{[\mu\nu]}$ | symmetric / antisymmetric part, each with the $\tfrac12$ included | [2.3](lessons/02-03-tensors-algebra.md) |
| $\partial_\mu=\partial/\partial x^\mu$ | four-gradient — a **covector** (lower index), by the chain rule | [2.4](lessons/02-04-invariants-levi-civita.md) |
| $\Box=\partial_\mu\partial^\mu$ | d'Alembertian $-\tfrac1{c^2}\partial_t^2+\nabla^2$ — the invariant wave operator | [2.4](lessons/02-04-invariants-levi-civita.md) |
| $\epsilon_{\mu\nu\rho\sigma}$ | Levi-Civita symbol, totally antisymmetric, $\epsilon_{0123}=+1$ (so $\epsilon^{0123}=-1$) | [2.4](lessons/02-04-invariants-levi-civita.md) |
| $J^\mu=(c\rho,\mathbf J)$ | four-current; $\partial_\mu J^\mu=0$ is charge conservation | [2.4](lessons/02-04-invariants-levi-civita.md) |
| $\mathcal L$ | Lagrangian **density** — Lagrangian per unit volume, a Lorentz scalar | [3.1](lessons/03-01-field-action-euler-lagrange.md) |
| $\pi^\mu_a=\partial\mathcal L/\partial(\partial_\mu\phi_a)$ | the field's canonical momentum density, one per field index $a$ | [3.2](lessons/03-02-noether-fields.md) |
| $T^{\mu\nu}$ | stress–energy tensor — the *current of four-momentum* | [3.3](lessons/03-03-stress-energy-tensor.md) |
| $\rho$, $p$ | rest-frame energy (or mass) density and isotropic pressure of a fluid | [3.3](lessons/03-03-stress-energy-tensor.md) |
| $\mu=mc/\hbar$ | inverse Compton wavelength — the mass term's coefficient, an inverse **length** | [3.4](lessons/03-04-scalar-field.md) |
| $A^\mu=(\phi/c,\mathbf A)$ | electromagnetic four-potential (scalar and vector potential in one object) | [3.5](lessons/03-05-em-field-theory.md) |
| $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$ | field-strength tensor: $\mathbf E$ in the time–space block, $\mathbf B$ in the space–space block | [3.5](lessons/03-05-em-field-theory.md) |
| $\tilde F^{\mu\nu}=\tfrac12\epsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}$ | the dual field tensor — swaps $\mathbf E\leftrightarrow c\mathbf B$ | [2.4](lessons/02-04-invariants-levi-civita.md) |
| $g_{\mu\nu}(x)$, $g^{\mu\nu}$ | the metric field and its matrix inverse; $g\equiv\det g_{\mu\nu}<0$ | [4.2](lessons/04-02-tensors-on-manifolds.md) |
| $\sqrt{-g}\,d^4x$ | invariant volume element on a curved manifold | [5.2](lessons/05-02-matter-curved-spacetime.md) |
| $\nabla_\mu$ | covariant derivative — the honest derivative that returns a tensor | [4.4](lessons/04-04-covariant-derivative-christoffel.md) |
| $\Gamma^\lambda{}_{\mu\nu}$ | Christoffel symbols — how the basis twists; **not** a tensor | [4.4](lessons/04-04-covariant-derivative-christoffel.md) |
| $R^\rho{}_{\sigma\mu\nu}$ | Riemann tensor — rotation per unit area around a tiny $\mu\nu$-loop | [4.6](lessons/04-06-riemann-geodesic-deviation.md) |
| $\xi^\mu$ | separation of two neighbouring geodesics (4.6); the gauge vector field (5.6) | [4.6](lessons/04-06-riemann-geodesic-deviation.md) |
| $R_{\mu\nu}$, $R$ | Ricci tensor and Ricci (scalar) curvature — the volume-changing part | [4.7](lessons/04-07-ricci-einstein-tensor.md) |
| $C_{\rho\sigma\mu\nu}$ | Weyl tensor — Riemann with all traces removed; free, shape-shearing gravity | [4.7](lessons/04-07-ricci-einstein-tensor.md) |
| $G_{\mu\nu}=R_{\mu\nu}-\tfrac12g_{\mu\nu}R$ | Einstein tensor — the uniquely divergence-free curvature | [4.7](lessons/04-07-ricci-einstein-tensor.md) |
| $\Phi$ | Newtonian gravitational potential (energy per unit mass, negative in a well) | [5.1](lessons/05-01-equivalence-principle.md) |
| $\kappa=8\pi G/c^4$ | the coupling constant of the field equations (**not** the surface gravity of 6.5) | [5.3](lessons/05-03-einstein-field-equations.md) |
| $\Lambda$ | cosmological constant (**not** the boost matrix $\Lambda^\mu{}_\nu$ of 2.2) | [5.3](lessons/05-03-einstein-field-equations.md) |
| $h_{\mu\nu}$, $\bar h_{\mu\nu}$ | metric perturbation $g=\eta+h$, and its trace-reversed partner | [5.6](lessons/05-06-linearized-gravity-waves.md) |
| $h_+$, $h_\times$ | the two gravitational-wave polarizations, plus and cross | [5.6](lessons/05-06-linearized-gravity-waves.md) |
| $Q_{ij}$ | mass quadrupole moment — the leading gravitational radiator | [5.6](lessons/05-06-linearized-gravity-waves.md) |
| $r_s=2GM/c^2$ | Schwarzschild radius; $f(r)\equiv1-r_s/r$ is the factor that runs the metric | [6.1](lessons/06-01-schwarzschild-solution.md) |
| $E$, $L$ | conserved energy and angular momentum **per unit mass** along an orbit | [6.2](lessons/06-02-orbits-precession-light-bending.md) |
| $V_{\rm eff}(r)$ | effective radial potential that reduces the orbit to 1-D motion | [6.2](lessons/06-02-orbits-precession-light-bending.md) |
| $K=R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma}$ | Kretschmann scalar — the coordinate-free test for a real singularity | [6.3](lessons/06-03-black-holes-horizons.md) |
| $a=J/Mc$ | Kerr spin parameter, a **length** (**not** the cosmological $a(t)$ of 6.6) | [6.4](lessons/06-04-kerr-charged-holes.md) |
| $\Delta$, $\Sigma$, $r_+$ | Kerr's radial and angular functions, and its horizon radius | [6.4](lessons/06-04-kerr-charged-holes.md) |
| $\kappa$, $A$, $S_{BH}$, $T_H$ | surface gravity, horizon area, Bekenstein–Hawking entropy, Hawking temperature | [6.5](lessons/06-05-black-hole-thermodynamics.md) |
| $\ell_P=\sqrt{\hbar G/c^3}$ | Planck length, $\approx1.616\times10^{-35}$ m | [6.5](lessons/06-05-black-hole-thermodynamics.md) |
| $a(t)$ | cosmic scale factor; only *ratios* are physical, so we set $a(t_0)=1$ | [6.6](lessons/06-06-flrw-metric.md) |
| $k$ | spatial curvature constant, normalizable to $-1$, $0$, $+1$ | [6.6](lessons/06-06-flrw-metric.md) |
| $\chi$ | comoving radial distance — frozen; proper distance is $d=a(t)\chi$ | [6.6](lessons/06-06-flrw-metric.md) |
| $H=\dot a/a$, $H_0$ | Hubble parameter and its present value, $\approx70$ km s⁻¹ Mpc⁻¹ | [6.6](lessons/06-06-flrw-metric.md) |
| $z$ | redshift, $1+z=\lambda_{\rm obs}/\lambda_{\rm emit}=a(t_0)/a(t_e)$ | [6.6](lessons/06-06-flrw-metric.md) |
| $w=p/(\rho c^2)$ | equation-of-state parameter: $0$ matter, $\tfrac13$ radiation, $-1$ vacuum | [6.7](lessons/06-07-friedmann-equations.md) |
| $\rho_c$, $\Omega_i=\rho_i/\rho_c$ | critical density and the density parameters that sum to $1$ | [6.7](lessons/06-07-friedmann-equations.md) |

## Definitions

### Inertial frame

A frame in which a free particle moves in a straight line at constant speed — no
acceleration, no rotation. Uniform motion inside one is undetectable from inside.

*Introduced:* [1.1](lessons/01-01-postulates-simultaneity.md)

### Einstein's postulates

(1) The laws of physics take the same form in every inertial frame — no frame is
preferred. (2) Light propagates in vacuum at the same $c$ in every inertial frame,
regardless of how the source moves. Everything else is bookkeeping on these two.

*Introduced:* [1.1](lessons/01-01-postulates-simultaneity.md)

### Relativity of simultaneity

"At the same time" is a judgment each observer makes with light signals, and
observers in relative motion make it differently. Two events simultaneous in $S$
and separated by $L$ **along** the boost direction are separated in time in $S'$ by

$$\Delta t' = \frac{\gamma v L}{c^2}$$

with the leading event (farther along the boost) occurring *earlier* in $S'$.
Separations perpendicular to the boost stay simultaneous.

*Introduced:* [1.1](lessons/01-01-postulates-simultaneity.md)

### Lorentz factor

The one number that measures how relativistic a motion is: the stretch the
transformation applies. Never less than $1$; blows up at $c$.

$$\gamma = \frac{1}{\sqrt{1-v^2/c^2}} = \frac{1}{\sqrt{1-\beta^2}} \ \ge\ 1$$

*Introduced:* [1.2](lessons/01-02-lorentz-transformations.md)

### Lorentz transformation

The unique **linear** coordinate change between inertial frames that keeps light's
speed at $c$ — Galileo's $x-vt$ with a stretch, plus the new feature that time
mixes with position.

$$x' = \gamma(x-vt), \qquad t' = \gamma\!\left(t-\frac{vx}{c^2}\right), \qquad y'=y,\ z'=z$$

*Introduced:* [1.2](lessons/01-02-lorentz-transformations.md)

### Proper time

The time actually elapsed on **one** clock present at both events — equivalently
the arc length along a worldline, in time units. Frame-invariant, and always the
*shortest* coordinate time between the two events.

$$c^2\,d\tau^2 = -ds^2, \qquad \Delta\tau = \frac{\Delta t}{\gamma}$$

*Introduced:* [1.3](lessons/01-03-dilation-contraction-paradoxes.md), invariantly [1.4](lessons/01-04-spacetime-interval-causality.md), curved [4.3](lessons/04-03-metric-proper-time.md)

### Proper length

An object's length measured in its own rest frame — where it is longest. Any frame
that sees it move measures $L_0/\gamma$ along the direction of motion only.

*Introduced:* [1.3](lessons/01-03-dilation-contraction-paradoxes.md)

### Event

A point of spacetime: a where **and** a when, $(t,x,y,z)$. Not a happening you can
give a duration — a single point.

*Introduced:* [1.4](lessons/01-04-spacetime-interval-causality.md)

### Invariant interval

The one combination of coordinate differences that every inertial observer
computes to the same number — the spacetime analogue of squared distance, with
time entering opposite in sign.

$$\Delta s^2 = -c^2\Delta t^2 + \Delta x^2 + \Delta y^2 + \Delta z^2 = \eta_{\mu\nu}\Delta x^\mu \Delta x^\nu$$

*Introduced:* [1.4](lessons/01-04-spacetime-interval-causality.md)

### Timelike, null, spacelike

The sign of the interval sorts every pair of events, frame-independently, into the
causal skeleton: reachable by a massive particle, by light only, or not at all.

| Type | Sign | Meaning |
|---|---|---|
| timelike | $\Delta s^2<0$ | a massive particle can be at both; time order is absolute |
| null (lightlike) | $\Delta s^2=0$ | connected only by a light signal, $\lvert\Delta\mathbf x\rvert=c\lvert\Delta t\rvert$ |
| spacelike | $\Delta s^2>0$ | no causal link; some frame calls them simultaneous |

*Introduced:* [1.4](lessons/01-04-spacetime-interval-causality.md)

### Light cone

The null surface through an event, drawn at $45^\circ$ when $ct$ is the vertical
axis. Its interior is the absolute future and past; the outside wedges are
"elsewhere." Curvature tips and opens cones from point to point but never lets a
worldline out of its own.

*Introduced:* [1.4](lessons/01-04-spacetime-interval-causality.md), tipped by gravity in [6.3](lessons/06-03-black-holes-horizons.md)

### Four-vector

Four numbers **with a transformation law**: they shuffle under a boost exactly as
$(ct,x,y,z)$ does. Four numbers stapled together by hand are not one, and
contracting them proves nothing.

$$V'^\mu = \Lambda^\mu{}_\nu V^\nu$$

*Introduced:* [1.5](lessons/01-05-four-vectors-momentum.md), transformation law [2.2](lessons/02-02-vectors-covectors-transformations.md)

### Four-velocity

Position differentiated by the **invariant** parameter $\tau$ — never by
frame-dependent $t$. Its length is the same for every particle at every speed.

$$u^\mu = \frac{dx^\mu}{d\tau} = \gamma(c,\mathbf v), \qquad u\cdot u = -c^2$$

*Introduced:* [1.5](lessons/01-05-four-vectors-momentum.md)

### Four-momentum

Mass times four-velocity: energy and momentum are one object seen along time
versus space. Its invariant length is the (frame-independent) mass.

$$p^\mu = m u^\mu = \left(\frac Ec,\ \mathbf p\right), \qquad \mathbf p=\gamma m\mathbf v, \quad E=\gamma mc^2, \quad p\cdot p = -m^2c^2$$

*Introduced:* [1.5](lessons/01-05-four-vectors-momentum.md)

### Invariant mass of a system

The length of the **summed** four-momentum — not the sum of the individual masses.
Kinetic energy counts, so two back-to-back photons have nonzero invariant mass and
a hot box of gas weighs more than the same atoms cold.

$$M^2c^4 = \Big(\sum_i E_i\Big)^2 - c^2\Big\lvert\sum_i \vec p_i\Big\rvert^2 \equiv s$$

*Introduced:* [1.6](lessons/01-06-relativistic-dynamics-optics.md)

### Einstein summation convention

An index repeated once **up** and once **down** in a term is silently summed over
$0,1,2,3$. A summed (dummy) index never survives and may be renamed; a free index
must appear once per term, in the same position, in every term.

$$A^\mu B_\mu \equiv \sum_{\mu=0}^{3} A^\mu B_\mu$$

*Introduced:* [2.1](lessons/02-01-index-notation-minkowski-metric.md)

### Minkowski metric

The lookup table for spacetime dot products in an inertial frame. Symmetric, its
own inverse, and carrying the single minus sign that is all of special relativity.

$$\eta_{\mu\nu} = \eta^{\mu\nu} = \operatorname{diag}(-1,+1,+1,+1), \qquad A\cdot B = \eta_{\mu\nu}A^\mu B^\nu$$

*Introduced:* [2.1](lessons/02-01-index-notation-minkowski-metric.md)

### Raising and lowering indices

The metric converts a vector's components between contravariant (up) and covariant
(down) form. Same geometric object, different clothes — in flat space only the
time slot changes, by a sign.

$$V_\mu = \eta_{\mu\nu}V^\nu \ \ (V_0=-V^0), \qquad V^\mu = \eta^{\mu\nu}V_\nu$$

*Introduced:* [2.1](lessons/02-01-index-notation-minkowski-metric.md), with $g$ in [4.3](lessons/04-03-metric-proper-time.md)

### Covector

Anything transforming like a gradient $\partial_\mu\phi$ — by the **inverse** boost
matrix. Picture it as a stack of level surfaces; the vector is an arrow, and the
contraction is the number of surfaces the arrow pierces, a count no boost changes.

$$W'_\mu = (\Lambda^{-1})^\nu{}_\mu W_\nu$$

*Introduced:* [2.2](lessons/02-02-vectors-covectors-transformations.md)

### Tensor

A multi-index object carrying one $\Lambda$ per upper index and one $\Lambda^{-1}$
per lower index — equivalently, a machine that eats $p$ covectors and $q$ vectors
and returns a number, linearly in each slot. The payoff: **a tensor equation true
in one frame is true in all of them.**

*Introduced:* [2.3](lessons/02-03-tensors-algebra.md), on manifolds [4.2](lessons/04-02-tensors-on-manifolds.md)

### Contraction

Set one upper index equal to one lower index and sum — feeding one of the
machine's outputs back into one of its inputs. Drops the rank by $(1,1)$ and is
legal precisely because $\Lambda$ meets $\Lambda^{-1}$ and cancels.

$$T^\mu{}_{\mu\rho}, \qquad \text{trace of }T^{\mu\nu} = \eta_{\mu\nu}T^{\mu\nu}\ \ (\textbf{not } \textstyle\sum_\mu T^{\mu\mu})$$

*Introduced:* [2.3](lessons/02-03-tensors-algebra.md)

### Quotient theorem

If an indexed array always spits out a tensor when fed a tensor, it *was* a tensor
all along. The usual way to prove tensor-hood without checking the transformation
law head-on.

*Introduced:* [2.3](lessons/02-03-tensors-algebra.md)

### Levi-Civita symbol

The totally antisymmetric four-index object fixed by $\epsilon_{0123}=+1$: the 4-D
heir of the cross product and the determinant. It builds duals and oriented
4-volume. Strictly a *density* — in curved space use $\sqrt{-g}\,\epsilon_{\mu\nu\rho\sigma}$.

*Introduced:* [2.4](lessons/02-04-invariants-levi-civita.md)

### Four-divergence

The covector $\partial_\mu$ contracted with a four-vector — a scalar. Setting it to
zero is the universal grammar of a conservation law: what piles up here is exactly
what flowed in from around it.

$$\partial_\mu J^\mu = \frac1c\frac{\partial J^0}{\partial t}+\nabla\cdot\mathbf J = 0$$

*Introduced:* [2.4](lessons/02-04-invariants-levi-civita.md)

### Lagrangian density

The field-theory replacement for $L$: energy bookkeeping *per unit volume*, built
from the field and its four gradients, and required to be a **Lorentz scalar** so
that every observer computes the same action $S=\int\mathcal L\,d^4x$.

*Introduced:* [3.1](lessons/03-01-field-action-euler-lagrange.md)

### Noether current (field version)

Every continuous symmetry of the action gives not a conserved number but a
conserved **current**: contract the field's canonical momentum density with the
direction the symmetry pushes the field.

$$J^\mu = \frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,\delta\phi_a\ \ (-K^\mu), \qquad \partial_\mu J^\mu = 0, \qquad Q=\int J^0 d^3x$$

The $-K^\mu$ correction appears when the symmetry moves the coordinates and
$\mathcal L$ shifts by a total divergence $\partial_\mu K^\mu$.

*Introduced:* [3.2](lessons/03-02-noether-fields.md)

### Stress–energy tensor

The **current of four-momentum**: $T^{\mu\nu}$ is the flux of the $\nu$-component of
four-momentum across a surface of constant $x^\mu$. Symmetric, locally conserved,
and the entire right-hand side of Einstein's equations.

| Block | Is |
|---|---|
| $T^{00}$ | energy density |
| $T^{0i}=T^{i0}$ | energy flux **=** momentum density (why light exerts pressure) |
| $T^{ij}$ | stress: pressure on the diagonal, shear off it |

*Introduced:* [3.3](lessons/03-03-stress-energy-tensor.md); defined variationally in [5.4](lessons/05-04-einstein-hilbert-action.md)

### Perfect fluid

Matter with no shear stress and no heat conduction — in its rest frame just an
energy density and an isotropic pressure. The workhorse source for stars and for
the whole universe.

$$T^{\mu\nu} = \left(\rho+\frac{p}{c^2}\right)u^\mu u^\nu + p\,g^{\mu\nu}, \qquad \text{dust: } p=0,\ T^{\mu\nu}=\rho\,u^\mu u^\nu$$

*Introduced:* [3.3](lessons/03-03-stress-energy-tensor.md), on curved backgrounds [5.2](lessons/05-02-matter-curved-spacetime.md)

### Klein–Gordon field

The simplest relativistic field: a single number at each point, with a wave
equation plus a mass term that gives its ripples a **minimum frequency**. Its
quanta are relativistic particles of mass $m$.

$$\mathcal L = -\tfrac12\eta^{\mu\nu}\partial_\mu\phi\,\partial_\nu\phi - \tfrac12\mu^2\phi^2 \ \Longrightarrow\ (\Box-\mu^2)\phi=0, \qquad \mu=\frac{mc}{\hbar}$$

*Introduced:* [3.4](lessons/03-04-scalar-field.md)

### Four-potential and field-strength tensor

The scalar and vector potentials of electromagnetism are one four-vector; the
fields are its four-dimensional curl. $\mathbf E$ lives in the time–space block,
$\mathbf B$ in the space–space block, and a boost rotates one into the other.

$$A^\mu=\left(\frac{\phi}{c},\mathbf A\right), \qquad F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu = -F_{\nu\mu}$$

*Introduced:* [3.5](lessons/03-05-em-field-theory.md)

### Gauge invariance

Many different four-potentials give identical fields: shift $A_\mu$ by the gradient
of any scalar and $F_{\mu\nu}$ is unchanged, because mixed partials commute. Not a
nuisance — the design principle that builds the fundamental forces.

$$A_\mu \to A_\mu + \partial_\mu\chi \ \Longrightarrow\ F_{\mu\nu}\to F_{\mu\nu}$$

Gauge invariance of the coupling $-J^\mu A_\mu$ *requires* $\partial_\mu J^\mu=0$:
charge conservation is the price of admission.

*Introduced:* [3.5](lessons/03-05-em-field-theory.md), [3.6](lessons/03-06-em-lagrangian-stress-energy.md)

### Manifold

A space that looks like flat $\mathbb R^n$ in any small enough patch, even though
its global shape is something else. You work on it with an **atlas** of overlapping
coordinate **charts** whose transition maps are smooth. Generically **no single
chart covers all of it** — a coordinate breakdown is a failure of the labels, never
of the space.

*Introduced:* [4.1](lessons/04-01-manifolds-tangent-spaces.md); rigorous version in [differential-geometry](../differential-geometry/reference.md#smooth-manifold)

### Tangent space

The private flat vector space $T_pM$ of all velocities a curve through $p$ could
have. Vectors live *at a point*, not on the manifold, so $V\in T_pM$ and $W\in T_qM$
cannot be added or compared without a transport rule.

$$V = V^\mu\,\partial_\mu, \qquad V(f)=\left.\frac{d}{d\lambda}f(\gamma(\lambda))\right|_{0}$$

*Introduced:* [4.1](lessons/04-01-manifolds-tangent-spaces.md); see also [differential-geometry](../differential-geometry/reference.md#tangent-space)

### Tensor field

The Module 2 algebra done **pointwise**, with components that are functions of
position and the constant boost matrix upgraded to the local Jacobian.

$$V'^\mu = \frac{\partial x'^\mu}{\partial x^\alpha}V^\alpha, \qquad \omega'_\mu = \frac{\partial x^\alpha}{\partial x'^\mu}\omega_\alpha$$

*Introduced:* [4.2](lessons/04-02-tensors-on-manifolds.md)

### Metric tensor and line element

A symmetric $(0,2)$ tensor field that answers one question at every point — "how
far apart are these two infinitesimally close events?" — and from that answer
supplies every length, angle, proper time, and light cone. **The metric is the
gravitational field.**

$$ds^2 = g_{\mu\nu}(x)\,dx^\mu dx^\nu, \qquad g^{\mu\nu}g_{\nu\lambda}=\delta^\mu{}_\lambda$$

*Introduced:* [4.3](lessons/04-03-metric-proper-time.md)

### Local inertial frame

At any single point you can choose coordinates with $g_{\mu\nu}=\eta_{\mu\nu}$,
$\partial_\lambda g_{\mu\nu}=0$, and all $\Gamma^\lambda{}_{\mu\nu}=0$ — the freely
falling frame. You cannot kill the **second** derivatives, which is why tides
survive and gravity is real.

*Introduced:* [4.2](lessons/04-02-tensors-on-manifolds.md), [4.3](lessons/04-03-metric-proper-time.md); physically [5.1](lessons/05-01-equivalence-principle.md)

### Covariant derivative

The derivative that subtracts off the twisting of the coordinate basis, so what is
left is the field's genuine change — and is a tensor. Upper index gets $+\Gamma$,
lower index gets $-\Gamma$; on a scalar there is nothing to twist.

$$\nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^\nu{}_{\mu\lambda}V^\lambda, \qquad \nabla_\mu V_\nu = \partial_\mu V_\nu - \Gamma^\lambda{}_{\mu\nu}V_\lambda$$

*Introduced:* [4.4](lessons/04-04-covariant-derivative-christoffel.md); see also [differential-geometry](../differential-geometry/reference.md#covariant-derivative)

### Christoffel symbols

The bookkeeping that answers "when I step in direction $\mu$, how much of basis
vector $\nu$ leaks into direction $\lambda$?" Computable from the metric alone, and
**not a tensor** — which is exactly why they can be set to zero at a point.

$$\Gamma^\lambda{}_{\mu\nu} = \tfrac12 g^{\lambda\sigma}\big(\partial_\mu g_{\nu\sigma}+\partial_\nu g_{\mu\sigma}-\partial_\sigma g_{\mu\nu}\big) = \Gamma^\lambda{}_{\nu\mu}$$

Fixed uniquely (the **Levi-Civita connection**) by metric compatibility
$\nabla_\lambda g_{\mu\nu}=0$ plus torsion-freeness.

*Introduced:* [4.4](lessons/04-04-covariant-derivative-christoffel.md); see also [differential-geometry](../differential-geometry/reference.md#christoffel-symbols)

### Parallel transport

Carrying a vector along a curve "without turning it" — letting the components
change by exactly the amount needed to cancel the basis twist. On a curved
manifold, transport around a **closed loop** returns the vector *rotated*; that
holonomy is the signature of curvature.

$$\frac{dV^\mu}{d\lambda}+\Gamma^\mu{}_{\nu\rho}\frac{dx^\nu}{d\lambda}V^\rho = 0$$

*Introduced:* [4.4](lessons/04-04-covariant-derivative-christoffel.md); see also [differential-geometry](../differential-geometry/reference.md#parallel-transport)

### Geodesic

The curve that parallel-transports its own tangent — as straight as the geometry
allows. Equivalently it **extremizes** proper time; for a massive particle the
geodesic is the path of *longest* proper time (the stay-at-home twin ages most).

$$\frac{d^2x^\mu}{d\lambda^2}+\Gamma^\mu{}_{\alpha\beta}\frac{dx^\alpha}{d\lambda}\frac{dx^\beta}{d\lambda}=0$$

*Introduced:* [4.5](lessons/04-05-geodesics.md); see also [differential-geometry](../differential-geometry/reference.md#geodesic)

### Affine parameter

A parametrization in which the tangent keeps constant length, so the geodesic
equation has zero on the right. Proper time $\tau$ (or any $a\tau+b$) for a massive
particle; for light $d\tau=0$, so you must use a bookkeeping label $\lambda$ with a
**null** tangent, $g_{\mu\nu}k^\mu k^\nu=0$.

*Introduced:* [4.5](lessons/04-05-geodesics.md)

### Riemann curvature tensor

The rotation a vector suffers per unit area around an infinitesimal loop —
equivalently, the failure of covariant derivatives to commute. Built from
derivatives and products of $\Gamma$, hence **second derivatives of the metric**,
and a genuine tensor.

$$[\nabla_\mu,\nabla_\nu]V^\rho = R^\rho{}_{\sigma\mu\nu}V^\sigma, \qquad R^\rho{}_{\sigma\mu\nu}=\partial_\mu\Gamma^\rho{}_{\nu\sigma}-\partial_\nu\Gamma^\rho{}_{\mu\sigma}+\Gamma^\rho{}_{\mu\lambda}\Gamma^\lambda{}_{\nu\sigma}-\Gamma^\rho{}_{\nu\lambda}\Gamma^\lambda{}_{\mu\sigma}$$

**Flatness theorem:** $R=0$ throughout a region $\iff$ coordinates exist making
$g_{\mu\nu}$ constant there. It is the complete, coordinate-free test.

*Introduced:* [4.6](lessons/04-06-riemann-geodesic-deviation.md); see also [differential-geometry](../differential-geometry/reference.md#riemann-curvature-tensor)

### Geodesic deviation

Curvature's physical face: the **relative acceleration** of two neighbouring
free-fallers. This is tidal gravity, and it is what no change of frame can erase.

$$\frac{D^2\xi^\mu}{d\tau^2} = -R^\mu{}_{\nu\rho\sigma}\,u^\nu\,\xi^\rho\,u^\sigma$$

*Introduced:* [4.6](lessons/04-06-riemann-geodesic-deviation.md); see also [differential-geometry](../differential-geometry/reference.md#geodesic-deviation)

### Ricci tensor and Ricci scalar

Riemann averaged down to the part matter responds to. $R_{\mu\nu}$ governs whether a
small ball of free-falling dust **shrinks in volume**; $R$ is that curvature reduced
to one number per point.

$$R_{\mu\nu}=R^\lambda{}_{\mu\lambda\nu}=R_{\nu\mu}, \qquad R=g^{\mu\nu}R_{\mu\nu}$$

*Introduced:* [4.7](lessons/04-07-ricci-einstein-tensor.md); see also [differential-geometry](../differential-geometry/reference.md#ricci-tensor)

### Weyl tensor

What Ricci throws away: Riemann with every trace subtracted off — the
volume-preserving, shape-shearing curvature that survives in vacuum. It is what a
gravitational wave and the field outside a star are made of, and it vanishes
identically below four dimensions.

*Introduced:* [4.7](lessons/04-07-ricci-einstein-tensor.md)

### Einstein tensor

The one symmetric, second-order-in-$g$ curvature whose covariant divergence
vanishes *identically*, for every metric — a consequence of the contracted Bianchi
identity, not a law imposed. That is why it, and not $R_{\mu\nu}$, may be set equal
to a conserved source.

$$G_{\mu\nu}=R_{\mu\nu}-\tfrac12 g_{\mu\nu}R, \qquad \nabla_\mu G^{\mu\nu}=0 \ \ \text{identically}$$

*Introduced:* [4.7](lessons/04-07-ricci-einstein-tensor.md)

### Equivalence principle

Everything falls the same, so free fall is locally *nothing* and acceleration is
locally gravity. **WEP:** inertial mass equals gravitational mass, so a free
worldline depends only on initial position and velocity. **EEP:** in a small enough
freely falling lab, all non-gravitational physics takes its special-relativistic
form. The load-bearing word is **local** — the removable part is $\Gamma$, the
irremovable residue is Riemann.

*Introduced:* [5.1](lessons/05-01-equivalence-principle.md)

### Minimal coupling ("comma goes to semicolon")

The recipe for putting any special-relativistic law on curved spacetime: replace
$\eta_{\mu\nu}\to g_{\mu\nu}$, $\partial_\mu\to\nabla_\mu$, and $d^4x\to\sqrt{-g}\,d^4x$.
It adds nothing beyond what geometry forces.

*Introduced:* [5.2](lessons/05-02-matter-curved-spacetime.md)

### Einstein field equations

Matter tells spacetime how to curve. Ten coupled, **nonlinear** second-order
equations for $g_{\mu\nu}$ (nonlinear because gravity itself gravitates), of which
four are constraints on initial data.

$$G_{\mu\nu}+\Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}$$

The second half of the theory is the **geodesic equation** — spacetime tells matter
how to move.

*Introduced:* [5.3](lessons/05-03-einstein-field-equations.md)

### Cosmological constant

The only other term the symmetry and conservation requirements permit, so omitting
it is itself a choice. Moved to the right it is a perfect fluid with
$\rho_\Lambda=\Lambda c^2/8\pi G$ and $p_\Lambda=-\rho_\Lambda c^2$ — dark energy.

*Introduced:* [5.3](lessons/05-03-einstein-field-equations.md), [6.8](lessons/06-08-cosmic-history-dark-universe.md)

### Einstein–Hilbert action

Gravity as a field theory whose field is the metric: integrate the simplest
curvature scalar against the invariant volume, vary $g^{\mu\nu}$, and Einstein's
equations fall out.

$$S = \frac{c^4}{16\pi G}\int (R-2\Lambda)\sqrt{-g}\,d^4x + S_{\rm mat}, \qquad T_{\mu\nu}\equiv-\frac{2}{\sqrt{-g}}\frac{\delta S_{\rm mat}}{\delta g^{\mu\nu}}$$

That last expression is the **definition** of stress–energy (the Hilbert
definition), automatically symmetric and conserved.

*Introduced:* [5.4](lessons/05-04-einstein-hilbert-action.md)

### Gravitational redshift

Clocks deeper in a potential well run slower, so light climbing out arrives
reddened. It tracks the **potential**, not the field strength — at the centre of a
hollow shell $\mathbf g=0$ but your clock still runs slow.

$$d\tau = \sqrt{-g_{00}}\,dt, \qquad \frac{\Delta\lambda}{\lambda}\approx\frac{\Delta\Phi}{c^2}$$

*Introduced:* [5.1](lessons/05-01-equivalence-principle.md) (heuristic), [5.5](lessons/05-05-newtonian-limit-redshift.md) (from the metric)

### Trace-reversed perturbation

The repackaging of $h_{\mu\nu}$ that makes the linearized Einstein equations come
out as a clean wave equation. Applying the operation twice returns $h_{\mu\nu}$.

$$\bar h_{\mu\nu} = h_{\mu\nu}-\tfrac12\eta_{\mu\nu}h, \qquad h\equiv\eta^{\mu\nu}h_{\mu\nu}$$

*Introduced:* [5.6](lessons/05-06-linearized-gravity-waves.md)

### Transverse-traceless gauge

The coordinate choice that strips a gravitational wave down to its two physical
numbers. Ten components, minus four gauge functions, minus four harmonic
conditions, leaves **two** polarizations, $h_+$ and $h_\times$, purely spatial and
transverse to the propagation.

*Introduced:* [5.6](lessons/05-06-linearized-gravity-waves.md)

### Schwarzschild radius

The single length that runs the exterior geometry of any spherical mass. For
ordinary bodies it is buried harmlessly inside the matter (Sun ≈ 3 km, Earth ≈ 9 mm),
where the vacuum solution does not even apply.

$$r_s = \frac{2GM}{c^2}$$

*Introduced:* [6.1](lessons/06-01-schwarzschild-solution.md)

### Birkhoff's theorem

*Any* spherically symmetric vacuum solution is necessarily static and equal to
Schwarzschild. So a pulsating or collapsing spherical star has a perfectly static
exterior and broadcasts nothing — there is **no monopole gravitational radiation**.

*Introduced:* [6.1](lessons/06-01-schwarzschild-solution.md)

### Killing vector

A direction in which the geometry is unchanged (the metric has no dependence on
that coordinate). Contracting a Killing vector with $u^\mu$ gives a constant of the
motion — Noether read straight off the metric. Schwarzschild's $\partial_t$ and
$\partial_\phi$ give the conserved $E$ and $L$.

*Introduced:* [6.2](lessons/06-02-orbits-precession-light-bending.md); see also [differential-geometry](../differential-geometry/reference.md#killing-vector)

### Innermost stable circular orbit (ISCO)

The closest a massive particle can stably circle a Schwarzschild hole. Inside it
the effective potential has no minimum and matter spirals in — the inner edge of an
accretion disk.

$$r_{\rm ISCO} = 3r_s = \frac{6GM}{c^2}$$

*Introduced:* [6.2](lessons/06-02-orbits-precession-light-bending.md)

### Event horizon

The surface where light cones have tipped so far that the outgoing edge stands
vertical — a one-way membrane in the **causal structure**, not a physical wall.
Empty vacuum; a local experiment there cannot even detect it.

*Introduced:* [6.3](lessons/06-03-black-holes-horizons.md)

### Coordinate versus true singularity

A blow-up in metric *components* proves nothing — charts can manufacture
infinities. The honest test is a curvature **scalar**. For Schwarzschild the
Kretschmann scalar settles it: finite at $r_s$ (coordinate artifact, removable by
Eddington–Finkelstein or Kruskal charts), divergent at $r=0$ (real).

$$K = R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} = \frac{48G^2M^2}{c^4 r^6}$$

*Introduced:* [6.3](lessons/06-03-black-holes-horizons.md), foreshadowed [4.1](lessons/04-01-manifolds-tangent-spaces.md)

### No-hair theorem

A stationary black hole is completely specified by three numbers — mass $M$,
angular momentum $J$, charge $Q$. Everything else about what fell in is radiated
away. Since real holes neutralize, the astrophysical black hole is **Kerr**.

*Introduced:* [6.4](lessons/06-04-kerr-charged-holes.md)

### Ergosphere

The region between a Kerr hole's horizon and its static limit, where frame dragging
is so strong that "staying at fixed angle" would be a spacelike worldline — you are
**forced** to co-rotate. You are still outside the horizon, so you can still leave;
and because static observers can't exist there, particles can carry negative energy,
which is what the Penrose process mines.

*Introduced:* [6.4](lessons/06-04-kerr-charged-holes.md)

### Surface gravity

Loosely, the acceleration (measured from infinity) of a particle held just at the
horizon. Constant over a stationary horizon — the black-hole zeroth law — and it
plays the role of temperature.

$$\kappa_{\rm Schw} = \frac{c^4}{4GM}$$

*Introduced:* [6.5](lessons/06-05-black-hole-thermodynamics.md)

### Bekenstein–Hawking entropy

A black hole's entropy is one quarter of its horizon **area** in Planck units — one
bit per few Planck tiles. Entropy scaling with *area* rather than volume is the
holographic hint.

$$S_{BH} = \frac{k_B c^3 A}{4G\hbar} = \frac{k_B A}{4\ell_P^2}, \qquad A = 4\pi r_s^2$$

*Introduced:* [6.5](lessons/06-05-black-hole-thermodynamics.md)

### Hawking temperature

Quantum fields near the horizon make the hole glow as a blackbody, at a temperature
set by the surface gravity — and, for Schwarzschild, *inversely* proportional to
mass. Black holes have negative heat capacity: they heat up as they radiate.

$$T_H = \frac{\hbar\kappa}{2\pi k_B c} = \frac{\hbar c^3}{8\pi G M k_B}$$

*Introduced:* [6.5](lessons/06-05-black-hole-thermodynamics.md)

### Cosmological principle

Averaged over patches bigger than about 100 Mpc, the universe is **homogeneous**
(same at every place — no centre) and **isotropic** (same in every direction — no
axis). Measured, not assumed: galaxy surveys and a CMB uniform to one part in $10^5$.

*Introduced:* [6.6](lessons/06-06-flrw-metric.md)

### Scale factor and comoving coordinates

Galaxies sit at fixed grid labels; what grows is the spacing of the grid itself.
Comoving separations are frozen, proper distances are not.

$$d(t) = a(t)\,\chi, \qquad H(t)\equiv\frac{\dot a}{a}, \qquad \dot d = H d$$

Only *ratios* of $a$ are physical — never say the universe is "$a$ metres across."

*Introduced:* [6.6](lessons/06-06-flrw-metric.md)

### Cosmological redshift

Light's wavelength stretches by exactly the factor the universe grew while it was
in flight. This is geometry, **not** a Doppler shift, and it has no ceiling.

$$1+z = \frac{\lambda_{\rm obs}}{\lambda_{\rm emit}} = \frac{a(t_0)}{a(t_e)}$$

*Introduced:* [6.6](lessons/06-06-flrw-metric.md), [6.8](lessons/06-08-cosmic-history-dark-universe.md)

### Critical density and density parameters

The tightrope density that makes space exactly flat, and the dimensionless shares
each component contributes. Their total measures curvature directly.

$$\rho_c = \frac{3H^2}{8\pi G}, \qquad \Omega_i=\frac{\rho_i}{\rho_c}, \qquad \Omega_{\rm total}=1 \iff k=0$$

*Introduced:* [6.7](lessons/06-07-friedmann-equations.md)

### Equation-of-state parameter

The one number that says how a cosmic component behaves — and therefore how fast it
dilutes as the universe grows.

$$p = w\rho c^2: \qquad w=0 \ \text{(matter)}, \quad w=\tfrac13 \ \text{(radiation)}, \quad w=-1 \ \text{(vacuum)}$$

*Introduced:* [6.7](lessons/06-07-friedmann-equations.md)

## Formulas and rules

### Lorentz transformation and its invariants

$$x' = \gamma(x-vt), \quad t'=\gamma\!\left(t-\frac{vx}{c^2}\right); \qquad x=\gamma(x'+vt'), \quad t=\gamma\!\left(t'+\frac{vx'}{c^2}\right)$$

$$\text{velocity addition:}\quad u'=\frac{u-v}{1-uv/c^2}, \qquad u=\frac{u'+v}{1+u'v/c^2}$$

$$\text{four-vector form:}\quad x'^\mu = \Lambda^\mu{}_\nu x^\nu, \qquad ct'=\gamma(ct-\beta x),\ \ x'=\gamma(x-\beta ct)$$

**What is invariant:** $\Delta s^2$, hence $\Delta\tau$; every full contraction
($p_\mu p^\mu=-m^2c^2$, $F_{\mu\nu}F^{\mu\nu}$, $s$); the four-volume $d^4x$ (because
$\det\Lambda=+1$ for proper transformations, from $\Lambda^{\mathsf T}\eta\Lambda=\eta$);
and the sign class (timelike/null/spacelike) of any interval. **What is not:**
$\Delta t$, $\Delta x$, simultaneity, the split of $F$ into $\mathbf E$ and $\mathbf B$,
the time order of a *spacelike* pair.

Two fixed points worth remembering: setting $u=c$ in velocity addition returns $c$
for any $v$; combining any two sub-light speeds stays below $c$.

*From* [1.2](lessons/01-02-lorentz-transformations.md), [1.4](lessons/01-04-spacetime-interval-causality.md), [2.4](lessons/02-04-invariants-levi-civita.md)

### Kinematics: dilation, contraction, Doppler, aberration

| Effect | Formula | The trap |
|---|---|---|
| time dilation | $\Delta t = \gamma\,\Delta\tau$ | $\Delta\tau$ is **one** clock at both events |
| length contraction | $L = L_0/\gamma$ | along the motion only; transverse unchanged |
| simultaneity offset | $\Delta t' = \gamma vL/c^2$ | $L$ is the separation **along** the boost |
| Doppler, receding | $f_{\rm obs}=f_{\rm src}\sqrt{\dfrac{1-\beta}{1+\beta}}$ | $z=\beta$ is only the low-speed limit |
| Doppler, approaching | $f_{\rm obs}=f_{\rm src}\sqrt{\dfrac{1+\beta}{1-\beta}}$ | |
| Doppler, general angle | $f_{\rm obs}=\dfrac{f_{\rm src}}{\gamma(1-\beta\cos\theta)}$ | $\theta$ measured in the **observer's** frame |
| transverse Doppler | $f_{\rm obs}=f_{\rm src}/\gamma$ | pure time dilation; no classical analogue |
| aberration | $\cos\theta'=\dfrac{\cos\theta-\beta}{1-\beta\cos\theta}$ | beams emission into a cone of half-angle $\sim1/\gamma$ |

Useful $\gamma$ values: $\beta=0.6\Rightarrow\gamma=1.25$; $\beta=0.8\Rightarrow\gamma=5/3$;
$\beta=0.99\Rightarrow\gamma\approx7.09$; $\gamma=2\Rightarrow\beta=\sqrt3/2\approx0.866$.

*From* [1.3](lessons/01-03-dilation-contraction-paradoxes.md), [1.6](lessons/01-06-relativistic-dynamics-optics.md)

### Relativistic dynamics

$$\mathbf p = \gamma m\mathbf v, \qquad E=\gamma mc^2, \qquad E^2=(pc)^2+(mc^2)^2, \qquad \mathbf v = \frac{\mathbf p c^2}{E}$$

| Regime | Reads |
|---|---|
| at rest | $E=mc^2$ |
| slow, $v\ll c$ | $E\approx mc^2+\tfrac12 mv^2$ — kinetic energy is the *first correction* |
| massless, $m=0$ | $E=pc$, and the particle is forced to travel at $c$ |

**The pro move for collisions:** conserve the total four-momentum
$\sum_{\rm in}p^\mu=\sum_{\rm out}p^\mu$ (four laws at once), then square it. The
invariant $s$ is the same in every frame, so evaluate it in the lab and impose the
threshold condition in the CM frame:

$$\sqrt{s}\ \ge\ M_{\rm f}c^2, \qquad \text{equality} \iff \text{all products at rest in the CM frame}$$

*From* [1.5](lessons/01-05-four-vectors-momentum.md), [1.6](lessons/01-06-relativistic-dynamics-optics.md)

### Index gymnastics — the rules that self-check your algebra

- Every term of an equation carries the **same free indices in the same up/down
  slots**. $A^\mu=B_\mu$ is nonsense before you compute anything.
- A summed pair must be **one up, one down**. $A^\mu B^\mu$ is illegal; write
  $A^\mu B_\mu$ or $\eta_{\mu\nu}A^\mu B^\nu$.
- Never reuse a live index name as a dummy — rename it.
- Symmetry statements need both indices at the **same height**: $T^{\mu\nu}=T^{\nu\mu}$
  is frame-independent, "$T^\mu{}_\nu$ is symmetric" is not a meaningful statement.
- Symmetry and antisymmetry **are** frame-independent properties; index *values* are not.
- $\partial_\mu$ has a lower index by the chain rule, so $\partial_\mu V^\mu$ is a legal
  contraction and $\partial_\mu x^\nu=\delta_\mu{}^\nu$.

$$T^{(\mu\nu)}=\tfrac12(T^{\mu\nu}+T^{\nu\mu}), \qquad T^{[\mu\nu]}=\tfrac12(T^{\mu\nu}-T^{\nu\mu}), \qquad T^{\mu\nu}=T^{(\mu\nu)}+T^{[\mu\nu]}$$

$$\text{four-gradient: } \partial_\mu=\left(\tfrac1c\partial_t,\nabla\right), \qquad \partial^\mu=\left(-\tfrac1c\partial_t,\nabla\right), \qquad \Box=\partial_\mu\partial^\mu=-\tfrac1{c^2}\partial_t^2+\nabla^2$$

*From* [2.1](lessons/02-01-index-notation-minkowski-metric.md), [2.2](lessons/02-02-vectors-covectors-transformations.md), [2.3](lessons/02-03-tensors-algebra.md), [2.4](lessons/02-04-invariants-levi-civita.md)

### Field theory: action → equation of motion → conserved current

$$S=\int\mathcal L(\phi,\partial_\mu\phi)\,d^4x \quad\Longrightarrow\quad \partial_\mu\!\left(\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)}\right)-\frac{\partial\mathcal L}{\partial\phi}=0$$

The $\partial_\mu(\cdots)$ is a **sum over all four directions**, not one derivative —
drop the spatial terms and you delete the wave. The boundary term dies only because
$\delta\phi$ is pinned on $\partial\Omega$.

| Symmetry | Current | Charge |
|---|---|---|
| internal (e.g. phase rotation $\phi\to e^{i\alpha}\phi$) | $J^\mu=\pi^\mu_a\,\delta\phi_a$ | electric-type charge |
| spacetime translation $x^\mu\to x^\mu+a^\mu$ | $T^\mu{}_\nu=\pi^\mu\,\partial_\nu\phi-\delta^\mu{}_\nu\mathcal L$ | four-momentum $P_\nu=\int T^0{}_\nu\,d^3x$ |
| Lorentz rotations and boosts | angular-momentum current | relativistic angular momentum |

The canonical $T^{\mu\nu}$ is not unique — you may add any $\partial_\lambda B^{\lambda\mu}$
with $B$ antisymmetric. Use that freedom to **symmetrize** (Belinfante–Rosenfeld);
gravity needs a symmetric source. For a spinless scalar the canonical tensor is
already symmetric.

**Worked example — the scalar field.**

$$\mathcal L = -\tfrac12\eta^{\mu\nu}\partial_\mu\phi\,\partial_\nu\phi-\tfrac12\mu^2\phi^2, \qquad (\Box-\mu^2)\phi=0, \qquad \omega^2=c^2k^2+\left(\frac{mc^2}{\hbar}\right)^2$$

$$\mathcal E = T^{00} = \tfrac1{2c^2}(\partial_t\phi)^2+\tfrac12|\nabla\phi|^2+\tfrac12\mu^2\phi^2 \ \ (\text{all three terms} \ge 0)$$

The dispersion relation is the convention-free referee: multiply by $\hbar^2$ and it
*is* $E^2=(pc)^2+(mc^2)^2$. Massless case $\mu=0$: $\Box\phi=0$, $\omega=ck$, no gap.

*From* [3.1](lessons/03-01-field-action-euler-lagrange.md), [3.2](lessons/03-02-noether-fields.md), [3.3](lessons/03-03-stress-energy-tensor.md), [3.4](lessons/03-04-scalar-field.md)

### Electromagnetism, covariantly

**The potentials** (used from 3.5 onward; the definitions themselves are stated
only here — see *Assumed, not taught here*):

$$\mathbf E = -\nabla\phi - \partial_t\mathbf A, \qquad \mathbf B = \nabla\times\mathbf A, \qquad A^\mu=\left(\frac\phi c,\mathbf A\right)$$

**The field tensor** (rows $\mu$, columns $\nu$), with $F_{0i}=E_i/c$ and $F_{ij}=-\epsilon_{ijk}B_k$:

$$F_{\mu\nu}=\begin{pmatrix} 0 & E_x/c & E_y/c & E_z/c \\ -E_x/c & 0 & -B_z & B_y \\ -E_y/c & B_z & 0 & -B_x \\ -E_z/c & -B_y & B_x & 0\end{pmatrix}$$

$$\text{sourced pair:}\quad \partial_\mu F^{\mu\nu}=\mu_0 J^\nu \qquad\qquad \text{homogeneous pair:}\quad \partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=0$$

The homogeneous pair (Faraday, no monopoles) is an **identity** whenever $F=dA$ —
no action required, no new physics. Charge conservation is likewise free:
$\partial_\nu\partial_\mu F^{\mu\nu}=0$ by antisymmetry forces $\partial_\mu J^\mu=0$.

$$\mathcal L = -\frac{1}{4\mu_0}F_{\mu\nu}F^{\mu\nu}-J^\mu A_\mu, \qquad -\tfrac14 F_{\mu\nu}F^{\mu\nu}=\tfrac12\!\left(\frac{E^2}{c^2}-B^2\right)$$

$$T^{\mu\nu}=\frac{1}{\mu_0}\left[F^{\mu\alpha}F^\nu{}_\alpha-\tfrac14\eta^{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}\right], \qquad T^\mu{}_\mu=0$$

| Slot | Is |
|---|---|
| $T^{00}$ | $\tfrac12\left(\varepsilon_0E^2+B^2/\mu_0\right)$ — energy density |
| $T^{0i}$ | $S_i/c$ with $\mathbf S=\tfrac1{\mu_0}\mathbf E\times\mathbf B$ — **not** $S_i$ itself |
| $T^{ij}$ | the Maxwell stress tensor |
| trace | zero — the fingerprint of massless quanta |

With charges present the field alone is not conserved:
$\partial_\mu T^{\mu\nu}=-F^\nu{}_\lambda J^\lambda$, the Lorentz four-force density
(time part = Poynting's theorem, space part = $\rho\mathbf E+\mathbf J\times\mathbf B$).

The two Lorentz invariants of the field are $F_{\mu\nu}F^{\mu\nu}\propto E^2/c^2-B^2$
and $F_{\mu\nu}\tilde F^{\mu\nu}\propto\mathbf E\cdot\mathbf B$; linear electromagnetism
is quadratic in the first alone.

*From* [3.5](lessons/03-05-em-field-theory.md), [3.6](lessons/03-06-em-lagrangian-stress-energy.md)

### The curved-space computational chain

Run it in this order — every step is mechanical once the metric is written down.

$$g_{\mu\nu} \ \to\ \Gamma^\lambda{}_{\mu\nu} \ \to\ R^\rho{}_{\sigma\mu\nu} \ \to\ R_{\mu\nu} \ \to\ R \ \to\ G_{\mu\nu}$$

$$\Gamma^\lambda{}_{\mu\nu}=\tfrac12 g^{\lambda\sigma}(\partial_\mu g_{\nu\sigma}+\partial_\nu g_{\mu\sigma}-\partial_\sigma g_{\mu\nu})$$

$$\nabla_\mu T^\nu{}_\rho = \partial_\mu T^\nu{}_\rho + \Gamma^\nu{}_{\mu\lambda}T^\lambda{}_\rho - \Gamma^\lambda{}_{\mu\rho}T^\nu{}_\lambda \qquad (+\Gamma \text{ per up index},\ -\Gamma \text{ per down})$$

$$\nabla_\mu V^\mu = \frac{1}{\sqrt{-g}}\partial_\mu\!\left(\sqrt{-g}\,V^\mu\right), \qquad \nabla_\lambda g_{\mu\nu}=0$$

**Riemann's symmetries**, all indices down — they cut $4^4=256$ slots to **20**
independent components in 4-D (and just **1** in 2-D, the Gaussian curvature):

$$R_{\rho\sigma\mu\nu}=-R_{\sigma\rho\mu\nu}=-R_{\rho\sigma\nu\mu}, \qquad R_{\rho\sigma\mu\nu}=R_{\mu\nu\rho\sigma}, \qquad R_{\rho[\sigma\mu\nu]}=0$$

$$\text{count in } n \text{ dimensions: } \tfrac{1}{12}n^2(n^2-1); \qquad \text{contracted Bianchi: } \nabla_\mu\!\left(R^{\mu\nu}-\tfrac12 g^{\mu\nu}R\right)=0$$

**Read the curvature physically:** $R_{\mu\nu}$ is the *volume* question (a geodesic
ball of radius $\epsilon$ has $V_{\rm geo}=V_{\rm flat}\big(1-\tfrac{R}{6(n+2)}\epsilon^2+\cdots\big)$);
the Weyl part is the *shape* question, volume-preserving shear. Vacuum means
$R_{\mu\nu}=0$, which is **not** flat — the Weyl part is free to be enormous.

*From* [4.4](lessons/04-04-covariant-derivative-christoffel.md), [4.6](lessons/04-06-riemann-geodesic-deviation.md), [4.7](lessons/04-07-ricci-einstein-tensor.md); coordinate-free versions in [differential-geometry](../differential-geometry/reference.md#riemann-tensor-symmetries)

### Christoffel symbols of the metrics this course uses

The lessons compute these repeatedly and reuse them without restating; here they
are once. Indices run over the coordinates listed, and $x^0=ct$ where a time
coordinate appears. Every symbol not listed (and not obtainable by the symmetry
$\Gamma^\lambda{}_{\mu\nu}=\Gamma^\lambda{}_{\nu\mu}$) vanishes.

| Metric | Nonzero Christoffels |
|---|---|
| flat plane, polar $(r,\phi)$: $ds^2=dr^2+r^2d\phi^2$ | $\Gamma^r{}_{\phi\phi}=-r$, $\Gamma^\phi{}_{r\phi}=1/r$ — **busy, yet $R=0$** |
| 2-sphere radius $a$: $ds^2=a^2(d\theta^2+\sin^2\theta\,d\phi^2)$ | $\Gamma^\theta{}_{\phi\phi}=-\sin\theta\cos\theta$, $\Gamma^\phi{}_{\theta\phi}=\cot\theta$ |
| Schwarzschild, $f\equiv1-r_s/r$ | $\Gamma^0{}_{0r}=\dfrac{r_s}{2r^2f}$, $\Gamma^r{}_{00}=\dfrac{f r_s}{2r^2}$, $\Gamma^r{}_{rr}=-\dfrac{r_s}{2r^2f}$, $\Gamma^r{}_{\theta\theta}=-rf$, $\Gamma^r{}_{\phi\phi}=-rf\sin^2\theta$, $\Gamma^\theta{}_{r\theta}=\Gamma^\phi{}_{r\phi}=1/r$, $\Gamma^\theta{}_{\phi\phi}=-\sin\theta\cos\theta$, $\Gamma^\phi{}_{\theta\phi}=\cot\theta$ |
| flat FLRW: $ds^2=-c^2dt^2+a^2\delta_{ij}dx^idx^j$ | $\Gamma^0{}_{ij}=\dfrac{a\dot a}{c}\delta_{ij}$, $\Gamma^i{}_{0j}=\dfrac{\dot a}{ac}\delta^i{}_j=\dfrac Hc\delta^i{}_j$ |

Curvature checks worth memorizing: the 2-sphere has $R=+2/a^2$ (a sphere must come
out positively curved — use it to test any sign convention); the polar plane has
$R^\rho{}_{\sigma\mu\nu}\equiv0$ despite its nonzero $\Gamma$'s; Schwarzschild has
$R_{\mu\nu}=0$ but $K=48G^2M^2/(c^4r^6)\ne0$.

*From* [4.4](lessons/04-04-covariant-derivative-christoffel.md), [4.5](lessons/04-05-geodesics.md), [4.6](lessons/04-06-riemann-geodesic-deviation.md), [6.1](lessons/06-01-schwarzschild-solution.md), [6.7](lessons/06-07-friedmann-equations.md); see also [differential-geometry](../differential-geometry/reference.md#christoffel-symbols-of-the-standard-metrics)

### The Einstein equations and their limits

$$G_{\mu\nu}+\Lambda g_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu} \qquad\Longleftrightarrow\qquad R_{\mu\nu}=\frac{8\pi G}{c^4}\left(T_{\mu\nu}-\tfrac12 g_{\mu\nu}T\right) \ \ (\Lambda=0)$$

The right-hand form is the **trace-reversed** version — the one to use in the
Newtonian limit and in vacuum, where it reads simply $R_{\mu\nu}=0$.

| Limit | Assumptions | Result |
|---|---|---|
| Newtonian motion | weak, static, slow | $g_{00}=-\left(1+\dfrac{2\Phi}{c^2}\right)$, $\ \ddot x^i=-\partial_i\Phi$ |
| Newtonian field | weak, static, $T_{00}\approx\rho c^2$ | $\nabla^2\Phi=4\pi G\rho$ — this is what **fixes** $\kappa=8\pi G/c^4$ |
| gravitational redshift | weak, static (motion may be fast) | $\dfrac{\Delta\lambda}{\lambda}\approx\dfrac{\Delta\Phi}{c^2}$ |
| linearized gravity | $g=\eta+h$, harmonic gauge $\partial^\mu\bar h_{\mu\nu}=0$ | $\Box\bar h_{\mu\nu}=-\dfrac{16\pi G}{c^4}T_{\mu\nu}$ |
| vacuum wave | $T_{\mu\nu}=0$ | $\Box\bar h_{\mu\nu}=0$, null $k^\mu$, speed exactly $c$ |
| radiation from a source | slow, far field | $\bar h_{ij}\sim\dfrac{2G}{c^4}\dfrac{\ddot Q_{ij}}{r}$ — **quadrupole**, no monopole or dipole |

Gauge freedom: $h_{\mu\nu}\to h_{\mu\nu}-\partial_\mu\xi_\nu-\partial_\nu\xi_\mu$, the exact
analogue of $A_\mu\to A_\mu+\partial_\mu\chi$. Ten components, minus four gauge
functions, minus four harmonic conditions, equals two physical polarizations:

$$h^{\rm TT}_{\mu\nu}=\begin{pmatrix}0&0&0&0\\0&h_+&h_\times&0\\0&h_\times&-h_+&0\\0&0&0&0\end{pmatrix}\cos\!\big[\omega(t-z/c)\big]$$

The prefactor $G/c^4\approx8\times10^{-45}$ (SI) is why spacetime is stiff and why
gravitational radiation is almost unmeasurably feeble.

*From* [5.3](lessons/05-03-einstein-field-equations.md), [5.4](lessons/05-04-einstein-hilbert-action.md), [5.5](lessons/05-05-newtonian-limit-redshift.md), [5.6](lessons/05-06-linearized-gravity-waves.md)

### The standard metrics — what each describes, and its surfaces

| Metric | Line element | Describes | Special surfaces |
|---|---|---|---|
| **Minkowski** | $ds^2=-c^2dt^2+dx^2+dy^2+dz^2$ | flat spacetime, no gravity | none — light cones stand upright everywhere |
| **Weak field** | $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$, $g_{00}=-(1+2\Phi/c^2)$ | almost-flat spacetime; the Newtonian and wave regimes | none |
| **Schwarzschild** | $ds^2=-f\,c^2dt^2+f^{-1}dr^2+r^2d\Omega^2$, $f=1-\dfrac{r_s}{r}$ | vacuum outside **any** static spherical mass (star, planet, hole) | horizon $r=r_s=2GM/c^2$ (**coordinate** singularity); true singularity $r=0$; ISCO $3r_s$ |
| **Kerr** | Boyer–Lindquist, with the cross term $g_{t\phi}\propto\dfrac{r_s r a\sin^2\theta}{\Sigma}$ | vacuum outside a **spinning** mass; the astrophysical black hole | horizon $r_+$; static limit $r_{\rm stat}(\theta)$; ergosphere between them |
| **Reissner–Nordström** | Schwarzschild with $r_s r \to r_s r - r_Q^2$, $r_Q^2=\dfrac{GQ^2}{4\pi\epsilon_0c^4}$ | non-rotating **charged** hole (general case: Kerr–Newman) | two horizons where the factor vanishes |
| **FLRW** | $ds^2=-c^2dt^2+a(t)^2\!\left[\dfrac{dr^2}{1-kr^2}+r^2d\Omega^2\right]$ | homogeneous, isotropic universe | no horizon in the metric; the Hubble distance is $d_H=c/H_0$ |

$$\text{Kerr: } a=\frac{J}{Mc}, \quad \Delta=r^2-r_sr+a^2, \quad \Sigma=r^2+a^2\cos^2\theta$$

$$r_+ = \frac{GM}{c^2}+\sqrt{\left(\frac{GM}{c^2}\right)^2-a^2}, \qquad r_{\rm stat}(\theta)=\frac{GM}{c^2}+\sqrt{\left(\frac{GM}{c^2}\right)^2-a^2\cos^2\theta}$$

The static limit coincides with $r_+$ at the poles and bulges out to $r_s$ at the
equator — an oblate shell around a round horizon. Spin has a ceiling: at
$a=GM/c^2$ (i.e. $J_{\max}=GM^2/c$) the hole is **extremal**, with $r_+=GM/c^2$, exactly
half the Schwarzschild radius; faster would expose a naked singularity, which cosmic
censorship forbids.

*From* [2.1](lessons/02-01-index-notation-minkowski-metric.md), [5.5](lessons/05-05-newtonian-limit-redshift.md), [6.1](lessons/06-01-schwarzschild-solution.md), [6.4](lessons/06-04-kerr-charged-holes.md), [6.6](lessons/06-06-flrw-metric.md)

### Orbits and black-hole formulary

$$E=\left(1-\frac{r_s}{r}\right)c^2\dot t, \qquad L=r^2\dot\phi \qquad (\textbf{per unit mass})$$

$$\dot r^2=\frac{E^2}{c^2}-V_{\rm eff}(r), \qquad V_{\rm eff}(r)=\left(1-\frac{r_s}{r}\right)\!\left(c^2+\frac{L^2}{r^2}\right)$$

$$\tfrac12\big(V_{\rm eff}-c^2\big)=\underbrace{-\frac{GM}{r}+\frac{L^2}{2r^2}}_{\text{Newton}}\underbrace{-\frac{GML^2}{c^2r^3}}_{\text{the whole of GR}}$$

$$\text{Binet: } \frac{d^2u}{d\phi^2}+u=\frac{GM}{L^2}+\frac{3GM}{c^2}u^2 \quad (u=1/r); \qquad \text{light: drop the } GM/L^2 \text{ term}$$

That single $1/r^3$ term does three things: it makes bound orbits precess, it
doubles the deflection of light, and it turns the infinite centrifugal wall into a
finite peak (so capture and an ISCO exist at all).

**Black-hole thermodynamics** — the four laws, with $\kappa\leftrightarrow T$ and
$A\leftrightarrow S$:

$$\text{0th: } \kappa \text{ constant over the horizon}; \qquad \text{1st: } c^2dM=\frac{\kappa c^2}{8\pi G}dA+\Omega_H\,dJ+\Phi\,dQ$$

$$\text{2nd: } \delta A\ge0 \ \text{(Hawking's area theorem)}; \qquad \text{3rd: } \kappa=0 \text{ unreachable in finitely many steps}$$

$$S_{BH}=\frac{k_BA}{4\ell_P^2}, \qquad T_H=\frac{\hbar c^3}{8\pi GMk_B}, \qquad \tau_{\rm evap}\propto M^3$$

Penrose process: extractable energy is capped by the irreducible mass; for a
maximal Kerr hole $M_{\rm irr}=M/\sqrt2$, so
$\Delta E_{\max}=(1-1/\sqrt2)Mc^2\approx0.29\,Mc^2$. The astrophysical realization is
the magnetic Blandford–Znajek mechanism, not a splitting particle.

*From* [6.2](lessons/06-02-orbits-precession-light-bending.md), [6.3](lessons/06-03-black-holes-horizons.md), [6.4](lessons/06-04-kerr-charged-holes.md), [6.5](lessons/06-05-black-hole-thermodynamics.md)

### Cosmology formulary

$$H^2=\left(\frac{\dot a}{a}\right)^2=\frac{8\pi G}{3}\rho-\frac{kc^2}{a^2}+\frac{\Lambda c^2}{3} \qquad\text{(first Friedmann — the energy equation)}$$

$$\frac{\ddot a}{a}=-\frac{4\pi G}{3}\left(\rho+\frac{3p}{c^2}\right)+\frac{\Lambda c^2}{3} \qquad\text{(second — acceleration; pressure gravitates)}$$

$$\dot\rho+3H\left(\rho+\frac{p}{c^2}\right)=0 \qquad\text{(fluid equation} = dE=-p\,dV\text{)}$$

Any **two** of the three imply the third — they are not three independent
constraints on one function $a(t)$.

| Component | $w$ | Dilution $\rho\propto a^{-3(1+w)}$ | Flat solution $a\propto t^{2/[3(1+w)]}$ |
|---|---|---|---|
| radiation | $\tfrac13$ | $a^{-4}$ (volume **and** each photon reddening) | $t^{1/2}$ |
| matter / dust | $0$ | $a^{-3}$ (volume only) | $t^{2/3}$ |
| vacuum / $\Lambda$ | $-1$ | constant | $e^{Ht}$, $H=\sqrt{\Lambda c^2/3}$ (de Sitter) |

$$\rho_c=\frac{3H^2}{8\pi G}, \qquad 1=\Omega_m+\Omega_r+\Omega_\Lambda+\Omega_k, \qquad \Omega_k\equiv-\frac{kc^2}{a^2H^2}$$

| $k$ | Geometry | Volume | Triangle angles |
|---|---|---|---|
| $+1$ | closed (3-sphere) | finite | more than $180^\circ$ |
| $0$ | flat (Euclidean) | infinite | exactly $180^\circ$ |
| $-1$ | open (hyperbolic) | infinite | less than $180^\circ$ |

Because the steepest-diluting component always dominates earliest, the eras run
**radiation → matter → $\Lambda$**, handing off at the equality crossings. Today's
concordance ($\Lambda$CDM) budget: $\Omega_\Lambda\approx0.68$,
$\Omega_{\rm dark\ matter}\approx0.27$, $\Omega_{\rm ordinary}\approx0.05$,
$\Omega_r\sim10^{-4}$ — the visible universe is a 5 percent rind. Naive quantum
field theory overestimates $\rho_\Lambda$ by about $10^{120}$: the
cosmological-constant problem.

*From* [6.6](lessons/06-06-flrw-metric.md), [6.7](lessons/06-07-friedmann-equations.md), [6.8](lessons/06-08-cosmic-history-dark-universe.md)

### The classical tests — what each one actually measures

| Test | What it isolates | Prediction |
|---|---|---|
| Universality of free fall (Eötvös, MICROSCOPE 2017) | $m_i=m_g$, the WEP — the premise, not a consequence | $\lvert\Delta a/a\rvert\lesssim10^{-15}$; none seen |
| Gravitational redshift (Pound–Rebka, GPS) | $g_{00}$ alone — the **time** part of curvature | $\Delta\lambda/\lambda=\Delta\Phi/c^2$ |
| Perihelion precession of Mercury | the $-r_sL^2/2r^3$ term in $V_{\rm eff}$ | $\Delta\phi=\dfrac{6\pi GM}{c^2a(1-e^2)}$, about 43 arcsec/century |
| Deflection of light (1919 eclipse; lensing) | time **and** space curvature — the factor of 2 is the point | $\delta=\dfrac{4GM}{c^2b}$, twice the equivalence-principle estimate |
| Frame dragging (Gravity Probe B; Lense–Thirring) | the off-diagonal $g_{t\phi}$ of a rotating source | precession $\propto J$ |
| ISCO / accretion-disk inner edge | the loss of stable orbits near a hole | $r_{\rm ISCO}=3r_s$ |
| Gravitational waves (LIGO) | quadrupole radiation, transverse, at speed $c$ | two polarizations $h_+,h_\times$; strain $\sim\dfrac{2G\ddot Q}{c^4r}$ |
| Hubble law, CMB isotropy, supernova dimming | FLRW geometry and its expansion history | $v=H_0d$; $1+z=a_0/a_e$; acceleration $\Rightarrow \Omega_\Lambda>0$ |

Two heuristics that are famously *half* right: the falling-photon argument gives the
correct redshift but only half the light bending; the accelerating-rocket box
reproduces uniform gravity but never tides.

*From* [5.1](lessons/05-01-equivalence-principle.md), [5.5](lessons/05-05-newtonian-limit-redshift.md), [5.6](lessons/05-06-linearized-gravity-waves.md), [6.2](lessons/06-02-orbits-precession-light-bending.md), [6.4](lessons/06-04-kerr-charged-holes.md), [6.8](lessons/06-08-cosmic-history-dark-universe.md)

### Numbers worth having on hand

| Quantity | Value |
|---|---|
| $r_s$ of the Sun / Earth | about 3 km / 9 mm |
| $\kappa=8\pi G/c^4$ | about $2.1\times10^{-43}$ s²/(kg·m) — spacetime is stiff |
| $\ell_P=\sqrt{\hbar G/c^3}$ | $1.616\times10^{-35}$ m |
| $H_0$ | about 70 km s⁻¹ Mpc⁻¹; $d_H=c/H_0$ |
| homogeneity scale | about 100 Mpc |
| CMB temperature uniformity | one part in $10^5$ |
| $T_H$ of a solar-mass hole | about $6\times10^{-8}$ K; $\tau_{\rm evap}\sim10^{67}$ yr |
| maximum Penrose extraction | about 29 percent of $Mc^2$ |

*From* [5.3](lessons/05-03-einstein-field-equations.md), [6.1](lessons/06-01-schwarzschild-solution.md), [6.5](lessons/06-05-black-hole-thermodynamics.md), [6.6](lessons/06-06-flrw-metric.md)

## Assumed, not taught here

A Tier 2 course leans on its prerequisites hard. Everything below is *used* in
these lessons without being derived in them.

| Fact | Where it's taught |
|---|---|
| Maxwell's four equations, in differential and integral form | [em-refresher 4.1](../em-refresher/lessons/04-01-maxwells-equations.md) |
| $c=1/\sqrt{\varepsilon_0\mu_0}$ — light as an electromagnetic wave with no rest frame | [em-refresher 4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md) |
| Field energy density and the Poynting vector $\mathbf S=\tfrac1{\mu_0}\mathbf E\times\mathbf B$ | [em-refresher 4.3](../em-refresher/lessons/04-03-energy-poynting.md) |
| The scalar potential $V$ and $\mathbf E=-\nabla V$ | [em-refresher 1.3](../em-refresher/lessons/01-03-electric-potential.md) |
| The **magnetic vector potential**, $\mathbf B=\nabla\times\mathbf A$ | Nowhere in the library derives it; it appears in a Lagrangian example in [analytical-mechanics 2.1](../analytical-mechanics/lessons/02-01-cyclic-coordinates-momenta.md), and the defining relations are stated on this card under *Electromagnetism, covariantly* |
| Hamilton's principle, $\delta S=0$, and the Euler–Lagrange equation | [analytical-mechanics 1.2](../analytical-mechanics/lessons/01-02-least-action-lagrange.md), [1.1](../analytical-mechanics/lessons/01-01-calculus-of-variations.md) |
| Noether's theorem for particles; cyclic coordinates give conserved momenta | [analytical-mechanics 2.2](../analytical-mechanics/lessons/02-02-noethers-theorem.md), [2.1](../analytical-mechanics/lessons/02-01-cyclic-coordinates-momenta.md) |
| Energy as the Noether charge of time translation; the Hamiltonian density | [analytical-mechanics 2.3](../analytical-mechanics/lessons/02-03-energy-and-hamiltonian.md) |
| Continuum limit of a chain of oscillators — the first field theory | [analytical-mechanics 4.5](../analytical-mechanics/lessons/04-05-classical-fields.md) |
| Reducing a central-force orbit to 1-D motion in an effective potential | [mechanics-refresher 5.2](../mechanics-refresher/lessons/05-02-orbits-effective-potential.md) |
| Newtonian gravity, $\Phi=-GM/r$, and Kepler's laws | [mechanics-refresher 5.1](../mechanics-refresher/lessons/05-01-gravitation-kepler.md) |
| Dual spaces, inner products, and the vector–covector correspondence | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Matrices as linear maps; the multilinear view of a tensor | [linalg-refresher 2.1](../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md) |
| Determinants, and $\det$ as an oriented-volume factor | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Open sets, and what a topological space is | [topology 1.3](../topology/lessons/01-03-topological-spaces-axioms.md) |
| Homeomorphism — the "locally looks like $\mathbb R^n$" of a chart | [topology 2.1](../topology/lessons/02-01-continuity-and-homeomorphisms.md) |
| The divergence theorem, used to kill boundary terms in every variation | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Taylor expansion (every "weak field" and "slow motion" step is one) | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| $E=\hbar\omega=h\nu$ and $\mathbf p=\hbar\mathbf k$ (used in 3.4, 5.1, 6.5) | [quantum-mechanics 1.1](../quantum-mechanics/lessons/01-01-why-quantum.md) |
| Entropy as missing information, and the second law | [stat-mech 6.2](../stat-mech/lessons/06-02-entropy-information-arrow.md) |
| Blackbody radiation — what "thermal spectrum" means for Hawking radiation | [stat-mech 4.3](../stat-mech/lessons/04-03-photon-gas-blackbody.md) |
| Manifolds, connections, curvature, forms — the rigorous mathematics | [differential-geometry](../differential-geometry/reference.md) (whole card) |

## Pitfalls

### Conventions and signs

- Signature is a **convention, not a fact** — this course is $(-,+,+,+)$ everywhere. Mixing conventions mid-calculation is the single most common sign error in relativity. *([1.4](lessons/01-04-spacetime-interval-causality.md), [2.1](lessons/02-01-index-notation-minkowski-metric.md), [3.5](lessons/03-05-em-field-theory.md))*
- Don't memorize the sign of a mass term or a $\Box$ — re-derive it from your stated signature. The convention-free referee for Klein–Gordon is the dispersion relation $\omega^2=c^2k^2+(mc^2/\hbar)^2$. *([3.1](lessons/03-01-field-action-euler-lagrange.md), [3.4](lessons/03-04-scalar-field.md))*
- Curvature conventions differ between textbooks in both the overall sign of Riemann and the index ordering; check before copying a formula. The sphere's $R=+2/a^2$ is the sanity anchor. *([4.6](lessons/04-06-riemann-geodesic-deviation.md), [4.7](lessons/04-07-ricci-einstein-tensor.md))*
- $\epsilon^{0123}=-1$, not $+1$: raising all four indices costs one minus sign from $\eta^{00}$. Dropping it corrupts every dual and determinant identity. *([2.4](lessons/02-04-invariants-levi-civita.md))*
- $h_{00}=-2\Phi/c^2$, not $+$. The sign is forced by the signature; flip the convention and it flips too. *([5.5](lessons/05-05-newtonian-limit-redshift.md))*

### Reading "$\Delta s^2$" and the causal structure

- $\Delta s^2$ is **one signed symbol**, not the square of a real number — it is routinely negative. Same for $ds^2$ on a curved manifold. *([1.4](lessons/01-04-spacetime-interval-causality.md), [4.3](lessons/04-03-metric-proper-time.md))*
- Spacelike-separated events have **no** definite time order: some frame calls them simultaneous. Only timelike and null pairs have frame-independent order — which is exactly why only they can be cause and effect. *([1.4](lessons/01-04-spacetime-interval-causality.md))*
- Faster-than-light travel isn't "getting there sooner," it is arriving before you left in some frame. That is what "$c$ is the speed limit" actually means. *([1.4](lessons/01-04-spacetime-interval-causality.md))*
- Expect $u\cdot u$ and $p\cdot p$ to be **negative** in this signature ($-c^2$, $-m^2c^2$) — that is the timelike condition talking, not an error. *([1.5](lessons/01-05-four-vectors-momentum.md))*

### Frames, clocks, and rulers

- The relativity of simultaneity is **not** signal-delay: both observers correct for light travel time using the same $c$, and still disagree. *([1.1](lessons/01-01-postulates-simultaneity.md))*
- Neither observer is "really" right, and neither clock is "really" slow — until someone accelerates. In the twin paradox it is the **change of inertial frame**, not motion, that breaks the symmetry. *([1.1](lessons/01-01-postulates-simultaneity.md), [1.3](lessons/01-03-dilation-contraction-paradoxes.md))*
- Feed $\Delta t=\gamma\Delta\tau$ any time that's lying around and you'll invert the factor and "prove" clocks run fast. Always ask: which **single** clock was at both events? *([1.3](lessons/01-03-dilation-contraction-paradoxes.md))*
- Contraction and the simultaneity offset act **only along the boost**; transverse lengths and transverse simultaneity are untouched. *([1.1](lessons/01-01-postulates-simultaneity.md), [1.3](lessons/01-03-dilation-contraction-paradoxes.md))*
- Velocities do not add; the denominator $1-uv/c^2$ is load-bearing. And $\gamma<1$ is impossible — for $v>c$ it goes imaginary, which is the math refusing superluminal frames. *([1.2](lessons/01-02-lorentz-transformations.md))*

### Dynamics and invariants

- Mass does **not** increase with speed. $m$ is the invariant length of $p^\mu$; what grows is the energy. Say energy, drop "relativistic mass." *([1.5](lessons/01-05-four-vectors-momentum.md))*
- Never differentiate $x^\mu$ by frame-dependent $t$ and call it a four-velocity — divide by the invariant $\tau$. *([1.5](lessons/01-05-four-vectors-momentum.md))*
- Invariant mass does **not** add: $M^2c^4=(\sum E_i)^2-c^2\lvert\sum\vec p_i\rvert^2$, so two back-to-back photons have $M>0$. *([1.6](lessons/01-06-relativistic-dynamics-optics.md))*
- At threshold the products are at rest in the **CM** frame, not the lab — in the lab they all stream forward together, carrying the incoming momentum. *([1.6](lessons/01-06-relativistic-dynamics-optics.md))*
- $z=\beta$ is only the low-speed limit; the exact recession redshift $\sqrt{(1+\beta)/(1-\beta)}$ runs to infinity as $\beta\to1$. And the transverse Doppler shift is a real redshift $1/\gamma$, with no classical analogue — but only for $\theta=90^\circ$ in the **observer's** frame. *([1.6](lessons/01-06-relativistic-dynamics-optics.md))*

### Index discipline

- "Has indices" is not "is a tensor." Christoffel symbols carry three indices and are emphatically not one; a four-vector is four numbers **plus a transformation law**. Use the quotient theorem when in doubt. *([2.2](lessons/02-02-vectors-covectors-transformations.md), [2.3](lessons/02-03-tensors-algebra.md), [4.4](lessons/04-04-covariant-derivative-christoffel.md))*
- A contraction pairs one **up** with one **down**. $A^\mu B^\mu$ and $T^{\mu\mu}$ are illegal; insert the metric first. *([2.1](lessons/02-01-index-notation-minkowski-metric.md), [2.3](lessons/02-03-tensors-algebra.md))*
- Upper and lower indices are not cosmetic: lowering flips the sign of the time component. *([2.2](lessons/02-02-vectors-covectors-transformations.md))*
- $\partial_\mu$ carries its lower index by force of the chain rule, not by convention. *([2.2](lessons/02-02-vectors-covectors-transformations.md), [2.4](lessons/02-04-invariants-levi-civita.md))*
- If your "invariant" still has a dangling free index, you haven't finished contracting. *([2.4](lessons/02-04-invariants-levi-civita.md))*
- Don't reuse a live index name as a summation dummy. *([2.1](lessons/02-01-index-notation-minkowski-metric.md))*
- Talk about symmetry only with both indices at the same height. *([2.3](lessons/02-03-tensors-algebra.md))*
- On a manifold, upper indices ride $\partial x'/\partial x$ and lower indices the inverse $\partial x/\partial x'$ — and $g$, $g^{-1}$ are **fields**, so you cannot slide them past a derivative. *([4.2](lessons/04-02-tensors-on-manifolds.md))*

### Fields, actions, and conservation

- In a field theory $x^\mu$ is a **label**, not a dynamical variable — you vary $\phi$, never the coordinates. *([3.1](lessons/03-01-field-action-euler-lagrange.md))*
- $\partial_\mu\big(\partial\mathcal L/\partial(\partial_\mu\phi)\big)$ is a **sum over all four** directions. Read it as one derivative and you delete the wave. *([3.1](lessons/03-01-field-action-euler-lagrange.md))*
- The boundary term vanishes because you clamped $\delta\phi$ on $\partial\Omega$; with a free boundary it survives and imposes extra conditions. In the Einstein–Hilbert case, $g^{\mu\nu}\delta R_{\mu\nu}$ is *not* zero — it is a boundary term, tamed by Gibbons–Hawking–York. *([3.1](lessons/03-01-field-action-euler-lagrange.md), [5.4](lessons/05-04-einstein-hilbert-action.md))*
- Noether gives a conserved **current**, not a constant; only $\int J^0 d^3x$ is constant. And conservation holds **on shell** — it used the equations of motion. *([3.2](lessons/03-02-noether-fields.md))*
- For a **spacetime** symmetry the coordinates move and $\mathcal L$ shifts by $\partial_\mu K^\mu$; forget to subtract $K^\mu$ and you get the wrong $T^{\mu\nu}$. *([3.2](lessons/03-02-noether-fields.md))*
- $T^{0i}$ and $T^{i0}$ are the same number by symmetry — that is the deep statement that any flow of energy is a density of momentum. An asymmetric $T^{\mu\nu}$ means you still owe the Belinfante symmetrization. *([3.3](lessons/03-03-stress-energy-tensor.md))*
- $T^{0i}$ is $S_i/c$, not the Poynting vector itself; the $c$ is the $x^0=ct$ convention. *([3.6](lessons/03-06-em-lagrangian-stress-energy.md))*
- Only the **sourced** Maxwell pair is dynamics. Faraday and $\nabla\cdot\mathbf B=0$ are identities that follow from $F=dA$; no action produces them. *([3.5](lessons/03-05-em-field-theory.md), [3.6](lessons/03-06-em-lagrangian-stress-energy.md))*
- Gauge freedom is the feature, not the bug — it is what forces the form of $\mathcal L$ and what makes charge conservation mandatory. *([3.5](lessons/03-05-em-field-theory.md))*
- $\mu=mc/\hbar$ is an **inverse length**, not the mass. Setting $\hbar=c=1$ hides this. *([3.4](lessons/03-04-scalar-field.md))*
- A massive field's *phase* velocity exceeds $c$ and that's fine; the signal travels at the group velocity $pc^2/E<c$. *([3.4](lessons/03-04-scalar-field.md))*

### Curvature, coordinates, and what's really there

- A position-dependent metric does **not** mean curved space — the flat plane in polar coordinates has $g_{\phi\phi}=r^2$. Likewise nonzero Christoffels do not mean curvature. Only $R^\rho{}_{\sigma\mu\nu}=0$ throughout certifies flatness. *([4.2](lessons/04-02-tensors-on-manifolds.md), [4.3](lessons/04-03-metric-proper-time.md), [4.4](lessons/04-04-covariant-derivative-christoffel.md), [4.6](lessons/04-06-riemann-geodesic-deviation.md))*
- A coordinate singularity is a failure of the **labels** (the poles of latitude–longitude, $g_{rr}$ at $r_s$). A true singularity survives every chart — test with an invariant like $K$, never with metric components. *([4.1](lessons/04-01-manifolds-tangent-spaces.md), [6.1](lessons/06-01-schwarzschild-solution.md), [6.3](lessons/06-03-black-holes-horizons.md))*
- $\partial_\mu$ is not a coordinate basis of unit vectors — $\lvert\partial_\mu\rvert\ne1$ in general, and length needs the metric. *([4.1](lessons/04-01-manifolds-tangent-spaces.md))*
- Vectors at different points live in different vector spaces. $V+W$ and "$V=W$" are undefined until you supply a transport rule — and on a curved manifold that rule is path-dependent. *([4.1](lessons/04-01-manifolds-tangent-spaces.md))*
- Local flatness kills $g$ and its **first** derivatives at a point, never the second. Tides survive every coordinate change; that residue *is* gravity. *([4.3](lessons/04-03-metric-proper-time.md), [4.6](lessons/04-06-riemann-geodesic-deviation.md), [5.1](lessons/05-01-equivalence-principle.md))*
- A uniformly accelerating frame is **flat** spacetime in funny coordinates ($R=0$, no tides ever); a real mass is not. The equivalence principle is local, full stop. *([5.1](lessons/05-01-equivalence-principle.md))*
- Say a geodesic is **extremal**, not "shortest": for a massive particle's timelike worldline it maximizes proper time. *([4.5](lessons/04-05-geodesics.md))*
- Don't parametrize a light ray by proper time — $d\tau=0$. Use an affine $\lambda$ with a null tangent. *([4.5](lessons/04-05-geodesics.md))*
- The $\Gamma$ term is not a force you can shield against; it isn't even a tensor. *([4.5](lessons/04-05-geodesics.md))*
- "Ricci-flat" is **not** "flat." Vacuum means $R_{\mu\nu}=0$, and the Weyl part is free — which is why the field outside a star, and gravitational waves, exist at all. *([4.7](lessons/04-07-ricci-einstein-tensor.md), [5.3](lessons/05-03-einstein-field-equations.md), [5.4](lessons/05-04-einstein-hilbert-action.md))*
- $R_{\mu\nu}=\kappa T_{\mu\nu}$ is inconsistent — Einstein tried it in 1915. The $-\tfrac12g_{\mu\nu}R$ is exactly what makes the left side conserved. *([4.7](lessons/04-07-ricci-einstein-tensor.md), [5.3](lessons/05-03-einstein-field-equations.md))*
- $R_{\mu\nu}=R^\lambda{}_{\mu\lambda\nu}$ contracts the **first and third** slots; the first two give zero, first and last give a sign flip. *([4.7](lessons/04-07-ricci-einstein-tensor.md))*

### Gravity as a theory

- The source is the whole tensor $T_{\mu\nu}$ — pressure, momentum flux, and field energy all curve spacetime. Mass alone is the Newtonian shadow. *([5.3](lessons/05-03-einstein-field-equations.md), [5.2](lessons/05-02-matter-curved-spacetime.md))*
- $\nabla_\mu T^{\mu\nu}=0$ is **local**. It is not $\partial_\mu(\sqrt{-g}T^{\mu\nu})=0$; the Christoffel term is matter trading energy with the gravitational field, and in a general spacetime there is no conserved total energy at all. *([5.2](lessons/05-02-matter-curved-spacetime.md), [3.3](lessons/03-03-stress-energy-tensor.md))*
- $T^{\mu\nu}$ does not include the gravitational field's own energy — there is no local, coordinate-independent expression for it. *([5.2](lessons/05-02-matter-curved-spacetime.md))*
- $\Lambda$ is not a bolt-on: it is the only other permitted term, so setting it to zero is itself a choice. And $\Lambda$ and vacuum energy are the same thing, moved across the equals sign. *([5.3](lessons/05-03-einstein-field-equations.md), [6.7](lessons/06-07-friedmann-equations.md))*
- $T_{\mu\nu}\equiv-\tfrac{2}{\sqrt{-g}}\delta S_{\rm mat}/\delta g^{\mu\nu}$ is a **definition**; the $-2$ and $\sqrt{-g}$ are chosen so the field equations come out with the standard coefficient. Vary $g^{\mu\nu}$ or $g_{\mu\nu}$, not both, and not $\Gamma$ independently. *([5.4](lessons/05-04-einstein-hilbert-action.md))*
- Gravitational time dilation tracks the **potential**, not the field strength: at the centre of a hollow shell $\mathbf g=0$ and your clock still runs slow. *([5.5](lessons/05-05-newtonian-limit-redshift.md))*
- "Weak field" and "slow motion" are independent assumptions — light is not slow, yet still bends and redshifts in a weak field. *([5.5](lessons/05-05-newtonian-limit-redshift.md))*
- Gauge choices don't change physics; a wave has two degrees of freedom no matter how you slice $h_{\mu\nu}$. Linearized gravity is an approximation — the real theory is nonlinear, and waves themselves gravitate. *([5.6](lessons/05-06-linearized-gravity-waves.md))*
- A gravitational wave doesn't stretch your ruler out of usefulness: a rigid ruler is held by electromagnetic forces and barely moves. LIGO's mirrors hang **free** for exactly this reason. And expect no dipole radiation — mass has one sign and momentum is conserved, so the leading channel is the quadrupole. *([5.6](lessons/05-06-linearized-gravity-waves.md))*

### Black holes

- $r_s$ is not an object's size. For the Sun and Earth it is buried inside real matter, where the vacuum solution doesn't even apply — there is no horizon there. *([6.1](lessons/06-01-schwarzschild-solution.md))*
- The two Schwarzschild factors are **reciprocal**: $-(1-r_s/r)c^2$ on $dt^2$ and $+(1-r_s/r)^{-1}$ on $dr^2$. Swapping them corrupts every redshift and horizon statement. *([4.3](lessons/04-03-metric-proper-time.md), [6.1](lessons/06-01-schwarzschild-solution.md))*
- Birkhoff says the **monopole** channel is silent, not that spherical stars don't gravitate — real radiators break spherical symmetry. *([6.1](lessons/06-01-schwarzschild-solution.md))*
- The horizon is not a surface made of anything; it is a globally defined feature of the causal structure, and a local experiment there detects nothing. *([6.3](lessons/06-03-black-holes-horizons.md))*
- "Frozen at the horizon forever" and "crosses in a finite few microseconds" are the same physics read on two clocks — coordinate $t$ versus proper $\tau$. *([6.3](lessons/06-03-black-holes-horizons.md))*
- Inside, $r$ is **timelike**: $r=0$ is a moment in your future, not a place you could orbit or dodge, and firing engines only changes how soon you arrive. *([6.3](lessons/06-03-black-holes-horizons.md))*
- The ergosphere is outside the horizon — you are forced to co-rotate there, but you can still leave. Frame dragging is geometry, not a force. *([6.4](lessons/06-04-kerr-charged-holes.md))*
- Spin has a ceiling, $J\le GM^2/c$: you cannot spin a hole past extremality by feeding it. *([6.4](lessons/06-04-kerr-charged-holes.md))*
- Black-hole entropy scales with **area**, not volume — double the radius, four times the entropy. And $T_H\propto1/M$ means negative heat capacity: they heat up as they radiate, so evaporation runs away. *([6.5](lessons/06-05-black-hole-thermodynamics.md))*
- The "pair creates at the horizon, one falls in" cartoon is a heuristic, not the derivation; and the information paradox is **open**, not settled. *([6.5](lessons/06-05-black-hole-thermodynamics.md))*

### Cosmology

- Cosmological redshift is **not** a Doppler shift: comoving galaxies aren't moving, the space between them is growing. It has no ceiling, and the special-relativistic formula gives the wrong answer at large $z$. *([6.6](lessons/06-06-flrw-metric.md), [6.8](lessons/06-08-cosmic-history-dark-universe.md))*
- Superluminal recession beyond $d_H=c/H_0$ violates nothing — relativity forbids overtaking a light signal *locally*, not a growing distance. *([6.6](lessons/06-06-flrw-metric.md))*
- "Space expands" does not mean atoms, planets, or you expand. Only unbound comoving systems ride the expansion. *([6.6](lessons/06-06-flrw-metric.md))*
- $a(t)$ has no absolute size; quote ratios, never "the universe is $a$ metres across." *([6.6](lessons/06-06-flrw-metric.md))*
- **Pressure gravitates:** the source of the acceleration equation is $\rho+3p/c^2$, and $w<-\tfrac13$ reverses gravity's sign. That is the entire mechanism of dark energy. *([6.7](lessons/06-07-friedmann-equations.md), [5.2](lessons/05-02-matter-curved-spacetime.md))*
- Radiation's extra power of $a$ is physical, not a fudge: number density falls as $a^{-3}$ **and** each photon reddens as $a^{-1}$. *([6.7](lessons/06-07-friedmann-equations.md), [6.8](lessons/06-08-cosmic-history-dark-universe.md))*
- The two Friedmann equations plus the fluid equation are only **two** independent constraints — don't overdetermine $a(t)$. *([6.7](lessons/06-07-friedmann-equations.md))*
- Dark matter and dark energy are opposites, not two flavours of the same stuff: one clumps and dilutes as $a^{-3}$, the other never dilutes and pushes apart. Acceleration is recent because it had to wait for matter to thin out — gravity did not "turn off." *([6.8](lessons/06-08-cosmic-history-dark-universe.md))*
