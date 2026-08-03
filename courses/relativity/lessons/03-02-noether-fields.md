# Relativity (SR + GR) · Lesson 3.2: Noether's theorem for fields

> ⏱ ~15 min · Module 3: Classical field theory · Builds on: [3.1 The field action and Euler–Lagrange](#/lesson/relativity/03-01-field-action-euler-lagrange.md), [2.4 Invariants and the Levi-Civita tensor](#/lesson/relativity/02-04-invariants-levi-civita.md), [analytical-mechanics 2.2 Noether's theorem](#/lesson/analytical-mechanics/02-02-noethers-theorem.md) · Unlocks: 3.3 (the stress–energy tensor), all conservation laws in the course

## Why this matters

Where do conservation laws *come from*? Energy, momentum, angular momentum, electric charge — physics leans on them constantly, yet a first course presents them as separate lucky facts. Noether's theorem reveals they are one fact: **every continuous symmetry of the action produces a conserved quantity, and there are no conserved quantities that aren't shadows of symmetries.** In field theory this reaches its cleanest form. The conserved "charge" of the particle version becomes a conserved **current** $J^\mu$ — a flow, local everywhere in spacetime — and the machinery you build here is exactly what delivers the stress–energy tensor in [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md), the object that will source gravity itself. Conservation of electric charge, of energy–momentum, of everything: all one theorem.

## The idea

Recall the particle version from [analytical-mechanics 2.2](#/lesson/analytical-mechanics/02-02-noethers-theorem.md): turn a knob $\epsilon$ that deforms every trajectory into another the action can't distinguish (slide the whole system, rotate it, start it later), and out drops a number $I = \sum_i (\partial L/\partial\dot q_i)\eta_i - F$ that never changes as the system evolves. Slide ⟹ momentum, rotate ⟹ angular momentum, wait ⟹ energy.

A field $\phi(x)$ has a value at *every* point of spacetime, not just a handful of coordinates $q_i(t)$. So "conserved" gets an upgrade. A single number can't capture how a locally-defined stuff moves around — instead you get a **conserved current** $J^\mu(x)$, a four-vector field obeying

$$\partial_\mu J^\mu = 0.$$

This is a **continuity equation** — the same shape as charge conservation from [em-refresher 4.1](#/lesson/em-refresher/04-01-maxwells-equations.md). Split it into time and space parts (signature $(-,+,+,+)$ throughout, $\partial_\mu = \partial/\partial x^\mu$, $x^0 = ct$):

$$\partial_0 J^0 + \partial_i J^i = 0 \quad\Longleftrightarrow\quad \frac{\partial \rho}{\partial t} = -\nabla\cdot\mathbf J.$$

In words: whatever is stored ($J^0 = \rho$, a density) can only change by flowing across a boundary ($J^i$, the flux). Nothing is created or destroyed — it only moves. Integrate the density over all space and the flux term becomes a surface integral at infinity that vanishes (fields die off), leaving a genuine constant:

$$Q = \int J^0\, d^3x, \qquad \frac{dQ}{dt} = 0.$$

The **charge** $Q$ is the field-theory descendant of the particle's conserved number $I$. So: *symmetry ⟹ current $J^\mu$ with $\partial_\mu J^\mu = 0$ ⟹ conserved charge $Q$.*

## The formal version

**Setup.** A theory of fields $\phi_a(x)$ (the index $a$ labels which field — one for a scalar, four for $A^\mu$, etc.) is defined by an action $S = \int \mathcal L\,d^4x$ with **Lagrangian density** $\mathcal L(\phi_a, \partial_\mu\phi_a)$. On solutions, each field obeys the field Euler–Lagrange equation from [3.1](#/lesson/relativity/03-01-field-action-euler-lagrange.md):

$$\partial_\mu\!\left(\frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\right) - \frac{\partial\mathcal L}{\partial\phi_a} = 0.$$

**Noether's theorem (field version).** Suppose an infinitesimal transformation of the fields, $\phi_a \to \phi_a + \epsilon\,\delta\phi_a$, leaves the action invariant — for an *internal* symmetry that means $\mathcal L$ itself is unchanged to first order, $\delta\mathcal L = 0$. Then the current

$$\boxed{\,J^\mu = \frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,\delta\phi_a\,}$$

(summed over the field index $a$) is conserved: $\partial_\mu J^\mu = 0$.

In words: contract the field's canonical momentum density $\pi^\mu_a \equiv \partial\mathcal L/\partial(\partial_\mu\phi_a)$ with the direction $\delta\phi_a$ that the symmetry pushes the field, and you get a divergence-free current.

**Derivation sketch (the whole engine, two moves).** Compute how $\mathcal L$ changes under the transformation by the chain rule:

$$\delta\mathcal L = \frac{\partial\mathcal L}{\partial\phi_a}\,\delta\phi_a + \frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,\delta(\partial_\mu\phi_a).$$

Now the two moves. **Move 1:** in the first term, use the E–L equation to replace $\partial\mathcal L/\partial\phi_a = \partial_\mu(\partial\mathcal L/\partial(\partial_\mu\phi_a))$. **Move 2:** note $\delta(\partial_\mu\phi_a) = \partial_\mu(\delta\phi_a)$ (variation commutes with the derivative). Substituting both:

$$\delta\mathcal L = \partial_\mu\!\left(\frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\right)\delta\phi_a + \frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,\partial_\mu(\delta\phi_a) = \partial_\mu\!\left(\frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,\delta\phi_a\right),$$

the two terms collapsing by the product rule into a single four-divergence. If the symmetry makes $\delta\mathcal L = 0$, then $\partial_\mu J^\mu = 0$ with $J^\mu$ exactly the boxed current. Compare the particle proof in [2.2](#/lesson/analytical-mechanics/02-02-noethers-theorem.md): *differentiate the invariance condition, feed in the equations of motion.* Identical logic, one spatial index promoted to a spacetime index.

**A refinement (when $\mathcal L$ shifts by a divergence).** Just as the particle version allowed $L$ to change by a total time derivative $dF/dt$, here $\mathcal L$ may change by a total four-divergence, $\delta\mathcal L = \partial_\mu K^\mu$, and still leave the action invariant (the integral becomes a boundary term). The conserved current is then the *improved* $J^\mu = \pi^\mu_a\,\delta\phi_a - K^\mu$. This is precisely what happens for spacetime translations (Problem 3), where the coordinates move and $\mathcal L$ gets carried along.

## Picture

![Three continuous symmetries of the action, each feeding through Noether's theorem into a conserved quantity: spacetime translation to energy and momentum (the stress-energy tensor), internal phase rotation to electric-type charge, and Lorentz rotations/boosts to angular momentum](assets/03-02-fig1.svg)

Two flavors of symmetry populate the left column. **Internal** symmetries rotate the fields among themselves without touching spacetime — the phase rotation $\phi\to e^{i\alpha}\phi$ of a complex field is the prototype, and its charge is the ancestor of electric charge. **Spacetime** symmetries move the coordinates — translations give energy–momentum (the stress–energy tensor $T^{\mu\nu}$, four currents at once, the subject of [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md)); Lorentz rotations and boosts give relativistic angular momentum.

## Worked examples

**Example 1 (mechanical — a real internal symmetry).** Take a complex scalar field $\phi$ with

$$\mathcal L = \partial_\mu\phi^{*}\,\partial^\mu\phi - m^2\,\phi^{*}\phi.$$

Here $\phi$ and its complex conjugate $\phi^{*}$ are treated as two independent fields ($a \in \{\phi, \phi^{*}\}$). The transformation $\phi\to e^{i\alpha}\phi$, $\phi^{*}\to e^{-i\alpha}\phi^{*}$ is a symmetry: $\phi^{*}\phi$ and $\partial_\mu\phi^{*}\partial^\mu\phi$ each pick up $e^{-i\alpha}e^{+i\alpha}=1$, so $\mathcal L$ is untouched, $\delta\mathcal L = 0$. Infinitesimally ($e^{i\alpha}\approx 1+i\alpha$):

$$\delta\phi = i\phi, \qquad \delta\phi^{*} = -i\phi^{*}.$$

The canonical momenta are $\partial\mathcal L/\partial(\partial_\mu\phi) = \partial^\mu\phi^{*}$ and $\partial\mathcal L/\partial(\partial_\mu\phi^{*}) = \partial^\mu\phi$. Assemble the current:

$$J^\mu = \frac{\partial\mathcal L}{\partial(\partial_\mu\phi)}\delta\phi + \frac{\partial\mathcal L}{\partial(\partial_\mu\phi^{*})}\delta\phi^{*} = (\partial^\mu\phi^{*})(i\phi) + (\partial^\mu\phi)(-i\phi^{*}) = i\big(\phi^{*}\partial^\mu\phi - \phi\,\partial^\mu\phi^{*}\big).$$

(Overall constants are conventional — one may rescale $J^\mu$; the physics is $\partial_\mu J^\mu = 0$.) A *real* scalar has no such phase to rotate and carries no such charge — the charge is precisely the field's "complexness." This $J^\mu$ is the blueprint for the electromagnetic four-current: couple $\phi$ to the EM field and this same current is what sources Maxwell's equations.

**Example 2 (why you'd care — energy from time-translation).** Not every symmetry is internal. Slide the time coordinate, $t\to t+\epsilon$ (a spacetime translation in the $0$-direction), and for a field theory with no explicit $x$-dependence the action is invariant. Running Noether's argument on this shift — carefully accounting for the fact that the *coordinates* move, so $\mathcal L$ shifts by a divergence — produces the current

$$T^{\mu}{}_{0} = \frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,\partial_0\phi_a - \delta^\mu_0\,\mathcal L, \qquad \partial_\mu T^{\mu}{}_{0} = 0.$$

Its charge $\int T^0{}_0\,d^3x$ is the **total energy**. The four spacetime translations ($\partial_0$ and the three $\partial_i$) give four conserved currents at once — the rows of the stress–energy tensor $T^{\mu\nu}$. That is exactly the story of [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md), and Problem 3 sets it up. The particle-mechanics precedent is [2.2](#/lesson/analytical-mechanics/02-02-noethers-theorem.md)'s remark that time-translation ⟹ energy, and [analytical-mechanics 2.3](#/lesson/analytical-mechanics/02-03-energy-and-hamiltonian.md)'s energy function; note $T^0{}_0 = \pi\,\dot\phi - \mathcal L$ is the field version of that same Legendre combination.

## Watch out

- **A current, not just a number.** The particle theorem gave a conserved *scalar* $I$; the field theorem gives a conserved *current* $J^\mu$. The scalar charge is recovered only after integrating $J^0$ over all space. Don't expect $J^\mu$ itself to be constant — it flows; it's $\partial_\mu J^\mu$ that vanishes.
- **Conservation holds on-shell.** The derivation used the Euler–Lagrange equations, so $\partial_\mu J^\mu = 0$ is a statement about *actual field configurations*, not arbitrary ones. The symmetry is a property of $\mathcal L$; the conservation is a property of solutions — the same on-shell caveat as the particle case.
- **Internal vs spacetime need different bookkeeping.** For an internal symmetry the coordinates don't move, so $\delta\mathcal L=0$ and the boxed current is the whole story. For a spacetime symmetry the coordinates *do* move, $\mathcal L$ shifts by $\partial_\mu K^\mu$, and you must subtract $K^\mu$ — forgetting it gives the wrong $T^{\mu\nu}$ (the analogue of dropping the $-F$ boundary term in [2.2](#/lesson/analytical-mechanics/02-02-noethers-theorem.md)).
- **The canonical current isn't unique.** You can add any $\partial_\lambda B^{\lambda\mu}$ with $B$ antisymmetric in $\lambda\mu$ without spoiling $\partial_\mu J^\mu=0$ (its divergence vanishes identically). This freedom is used in 3.3 to *symmetrize* the stress–energy tensor (the Belinfante procedure) — the canonical $T^{\mu\nu}$ from translations isn't always symmetric, and gravity needs a symmetric source.

## One-liner

> Every continuous symmetry of the action is a divergence-free current $\partial_\mu J^\mu = 0$; conservation laws are not accidents but the visible shadows of symmetries.

## Problems

**P1 (🟢)** For the complex scalar field with $\mathcal L = \partial_\mu\phi^{*}\partial^\mu\phi - m^2\phi^{*}\phi$ (signature $(-,+,+,+)$), show directly from the Noether current formula that the global phase symmetry $\phi\to e^{i\alpha}\phi$ yields the conserved current

$$J^\mu = i\big(\phi^{*}\partial^\mu\phi - \phi\,\partial^\mu\phi^{*}\big).$$

**P2 (🟡)** Verify $\partial_\mu J^\mu = 0$ for that current by *direct computation*, using the field equations for $\phi$ and $\phi^{*}$. (First find the equations of motion from $\mathcal L$.)

**P3 (🔴, optional)** Argue that invariance under the four spacetime translations $x^\mu\to x^\mu + a^\mu$ (with $a^\mu$ a constant four-vector) yields *four* conserved currents — the rows of the stress–energy tensor $T^{\mu\nu}$. Show that under a translation the field changes by $\delta\phi_a = a^\nu\partial_\nu\phi_a$ and $\mathcal L$ shifts by the divergence $\partial_\mu(a^\mu\mathcal L)$, and deduce (subtracting that divergence, then stripping off the arbitrary $a_\nu$) the canonical stress–energy tensor

$$T^{\mu\nu} = \frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,\partial^\nu\phi_a - \eta^{\mu\nu}\mathcal L, \qquad \partial_\mu T^{\mu\nu} = 0.$$

<details>
<summary>Solutions</summary>

**P1** Treat $\phi$ and $\phi^{*}$ as independent fields. The infinitesimal form of $\phi\to e^{i\alpha}\phi$ is, expanding $e^{i\alpha}\approx 1+i\alpha$ and reading off the coefficient of $\alpha$,

$$\delta\phi = i\phi, \qquad \delta\phi^{*} = -i\phi^{*}.$$

Symmetry check: $\mathcal L$ depends on $\phi,\phi^{*}$ only through the products $\phi^{*}\phi$ and $\partial_\mu\phi^{*}\partial^\mu\phi$, each invariant under $\phi^{*}\phi\to e^{-i\alpha}e^{i\alpha}\phi^{*}\phi = \phi^{*}\phi$. So $\delta\mathcal L = 0$ — a genuine internal symmetry, coordinates untouched, no $K^\mu$ needed.

Canonical momentum densities:

$$\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)} = \partial^\mu\phi^{*}, \qquad \frac{\partial\mathcal L}{\partial(\partial_\mu\phi^{*})} = \partial^\mu\phi,$$

since $\partial_\mu\phi^{*}\partial^\mu\phi = \eta^{\mu\nu}\partial_\mu\phi^{*}\partial_\nu\phi$ is symmetric in the two fields. The Noether current sums over both:

$$J^\mu = \frac{\partial\mathcal L}{\partial(\partial_\mu\phi)}\delta\phi + \frac{\partial\mathcal L}{\partial(\partial_\mu\phi^{*})}\delta\phi^{*} = (\partial^\mu\phi^{*})(i\phi) + (\partial^\mu\phi)(-i\phi^{*}) = i\big(\phi^{*}\partial^\mu\phi - \phi\,\partial^\mu\phi^{*}\big).\ \checkmark$$

(Any real multiple of this is equally a conserved current; the standard normalization inserts the charge coupling. The two terms are complex conjugates of each other times $i$, making $J^\mu$ manifestly real.)

**P2** First the equations of motion. Varying $\phi^{*}$ (treating $\phi$ as fixed): $\partial\mathcal L/\partial\phi^{*} = -m^2\phi$ and $\partial\mathcal L/\partial(\partial_\mu\phi^{*}) = \partial^\mu\phi$, so the E–L equation $\partial_\mu(\partial^\mu\phi) - (-m^2\phi) = 0$ gives

$$\partial_\mu\partial^\mu\phi - m^2\phi = 0 \quad\Longleftrightarrow\quad \Box\phi = m^2\phi,$$

the Klein–Gordon equation ($\Box \equiv \partial_\mu\partial^\mu$). Varying $\phi$ gives the conjugate, $\Box\phi^{*} = m^2\phi^{*}$.

Now differentiate the current, using the product rule:

$$\partial_\mu J^\mu = i\,\partial_\mu\big(\phi^{*}\partial^\mu\phi - \phi\,\partial^\mu\phi^{*}\big) = i\big(\partial_\mu\phi^{*}\,\partial^\mu\phi + \phi^{*}\Box\phi - \partial_\mu\phi\,\partial^\mu\phi^{*} - \phi\,\Box\phi^{*}\big).$$

The two gradient-cross terms $\partial_\mu\phi^{*}\partial^\mu\phi$ and $\partial_\mu\phi\,\partial^\mu\phi^{*}$ are identical and cancel. What remains, using the equations of motion:

$$\partial_\mu J^\mu = i\big(\phi^{*}\Box\phi - \phi\,\Box\phi^{*}\big) = i\big(\phi^{*}(m^2\phi) - \phi\,(m^2\phi^{*})\big) = i\,m^2\big(\phi^{*}\phi - \phi\phi^{*}\big) = 0.\ \checkmark$$

The mass terms cancel because $\phi^{*}\phi = \phi\phi^{*}$. Conservation is exact — but note it used $\Box\phi = m^2\phi$, i.e. it holds *on-shell*, as promised in Watch out.

**P3** Under $x^\mu \to x^\mu + a^\mu$ with $a^\mu$ constant, a field transforms so that its value at the new coordinate equals the old value at the old point; to first order the *functional* change at a fixed coordinate is

$$\delta\phi_a = a^\nu\,\partial_\nu\phi_a.$$

Because $\mathcal L(\phi_a,\partial_\mu\phi_a)$ has no explicit $x$-dependence, it too is just carried along: $\delta\mathcal L = a^\nu\partial_\nu\mathcal L = \partial_\mu(a^\mu\mathcal L)$ (constant $a^\mu$ pulls inside the derivative). So this is the "$\mathcal L$ shifts by a four-divergence" case, with $K^\mu = a^\mu\mathcal L$.

The improved current is the canonical piece minus $K^\mu$:

$$J^\mu = \frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,\delta\phi_a - K^\mu = \frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,a^\nu\partial_\nu\phi_a - a^\mu\mathcal L.$$

Factor out the arbitrary constant $a^\nu$ by writing $a^\mu = \eta^{\mu\nu}a_\nu$... more transparently, write $J^\mu = a_\nu\, T^{\mu\nu}$ where

$$T^{\mu\nu} = \frac{\partial\mathcal L}{\partial(\partial_\mu\phi_a)}\,\partial^\nu\phi_a - \eta^{\mu\nu}\mathcal L$$

(raising the $\nu$ on $\partial_\nu\phi_a$ and on $\delta^\mu_\nu$ with $\eta$). Since $\partial_\mu J^\mu = a_\nu\,\partial_\mu T^{\mu\nu} = 0$ must hold for *every* constant $a_\nu$ — four independent choices — each coefficient vanishes separately:

$$\partial_\mu T^{\mu\nu} = 0 \quad\text{for each } \nu = 0,1,2,3.$$

Four conserved currents, the four rows of $T^{\mu\nu}$: the $\nu=0$ row carries energy (its charge $\int T^{00}d^3x$ is total energy), and the $\nu = i$ rows carry the three momenta. This is the **canonical stress–energy tensor** — the central object of [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md), which then shows it can be symmetrized and, in [Module 5](#/course/relativity), becomes the source term on the right-hand side of the Einstein equations. $\checkmark$

</details>

## Flashback

**From Lesson 3.1 (The field action and Euler–Lagrange):** A real scalar field has Lagrangian density $\mathcal L = -\tfrac12\,\partial_\mu\phi\,\partial^\mu\phi - \tfrac12 m^2\phi^2$ (signature $(-,+,+,+)$). Derive its equation of motion from the field Euler–Lagrange equation, and identify the wave-like equation you get.

<details>
<summary>Solution</summary>

Compute the two pieces of the E–L equation. The field-derivative term:

$$\frac{\partial\mathcal L}{\partial\phi} = -m^2\phi.$$

For the momentum, write the kinetic term with explicit metric, $-\tfrac12\eta^{\alpha\beta}\partial_\alpha\phi\,\partial_\beta\phi$. Differentiating with respect to $\partial_\mu\phi$ (the two factors give a factor of 2 that cancels the $\tfrac12$):

$$\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)} = -\eta^{\mu\beta}\partial_\beta\phi = -\partial^\mu\phi.$$

Assemble $\partial_\mu\big(\partial\mathcal L/\partial(\partial_\mu\phi)\big) - \partial\mathcal L/\partial\phi = 0$:

$$\partial_\mu(-\partial^\mu\phi) - (-m^2\phi) = 0 \quad\Longrightarrow\quad \partial_\mu\partial^\mu\phi - m^2\phi = 0,$$

i.e. $\Box\phi - m^2\phi = 0$, the **Klein–Gordon equation** — the relativistic wave equation for a massive scalar. (Setting $m=0$ gives $\Box\phi=0$, the ordinary wave equation from [em-refresher 4.2](#/lesson/em-refresher/04-02-electromagnetic-waves.md).) Note this is precisely the field equation Problem 2 above needed to prove current conservation — the two lessons interlock. $\checkmark$

</details>

## Connections

- **Backward:** this is the field-theory promotion of [analytical-mechanics 2.2](#/lesson/analytical-mechanics/02-02-noethers-theorem.md) — the conserved scalar $I = \sum_i(\partial L/\partial\dot q_i)\eta_i - F$ becomes a conserved current $J^\mu = \pi^\mu_a\,\delta\phi_a - K^\mu$, the sum over discrete coordinates becoming a spacetime index. The continuity equation $\partial_\mu J^\mu = 0$ is the four-divergence structure from [2.4](#/lesson/relativity/02-04-invariants-levi-civita.md), and charge conservation $\partial_\mu J^\mu=0$ is literally Boss Problem 2 of Module 2.
- **Forward:** the spacetime-translation current (Example 2, Problem 3) is the **stress–energy tensor** $T^{\mu\nu}$, developed fully in [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md) and computed for the scalar field in [3.4](#/lesson/relativity/03-04-scalar-field.md) and the EM field in [3.6](#/lesson/relativity/03-06-em-lagrangian-stress-energy.md). That tensor is the source of gravity: it sits on the right-hand side of the Einstein equations in [5.3](#/lesson/relativity/05-03-einstein-field-equations.md).
- **Sideways (particle physics & the Standard Model):** the internal phase symmetry of Example 1 is the prototype of a **gauge symmetry**. Promoting the global phase $e^{i\alpha}$ to a spacetime-dependent one $e^{i\alpha(x)}$ forces the introduction of the electromagnetic field — the conserved current $J^\mu$ becomes the source in Maxwell's equations ([3.5](#/lesson/relativity/03-05-em-field-theory.md)). Electric charge, color charge, and weak isospin are all Noether charges of internal symmetries — the direct descendants of the particle-mechanics symmetries in [2.2](#/lesson/analytical-mechanics/02-02-noethers-theorem.md).
