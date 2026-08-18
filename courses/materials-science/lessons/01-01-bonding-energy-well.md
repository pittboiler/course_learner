# Materials Science &amp; Engineering · Lesson 1.1: Bonding &amp; the energy well

> ⏱ ~15 min · Module 1: Structure of Materials · Builds on: [`calc-refresher`](../../calc-refresher/syllabus.md) (first and second derivatives), [`mechanics-refresher` 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) (the harmonic well) · Unlocks: [1.2 Crystal structures &amp; unit cells](01-02-crystal-structures-unit-cells.md)

## Why this matters

Nearly every property you care about in a material — is it hard or soft, does it melt at 80 K or 4000 K, does it stretch like taffy or shatter like glass — traces back to one thing: **how its atoms are glued together, and how hard that glue resists being stretched or squeezed.** Get the bond right and you can predict stiffness, melting point, and thermal expansion from a single curve. This lesson is that curve. Everything downstream in the course — crystals, defects, mechanical failure — is a story about atoms sitting in, or escaping from, the energy well you're about to draw.

## The idea

Two atoms brought together feel two competing urges. Far apart, they **attract** (electron clouds and nuclei arrange to lower energy). Pushed too close, they **repel** violently (electron clouds can't overlap — the Pauli exclusion principle plus nucleus-nucleus repulsion). Somewhere in between there's a sweet spot where the pull and the push exactly cancel: the atoms would rather sit *right there* than anywhere else. That sweet spot is the **equilibrium spacing** $r_0$, and it's the bottom of a valley in the energy landscape — the **bond-energy well**.

Now the key mental picture: **an atom in a bond is a ball resting at the bottom of a valley.** Nudge it and it rolls back — that's a restoring force, exactly the [spring from mechanics 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md). Two numbers about the valley tell you almost everything:

- **How deep is it?** A deep well means you must pump in a lot of energy to yank the atom out. Deep well &#8594; strong bond &#8594; **high melting point and high cohesive energy.**
- **How curved is it at the bottom?** A steep, narrow valley snaps the ball back hard for a tiny nudge — a *stiff spring*. Shallow and wide, and it barely resists. Curvature at the bottom &#8594; **stiffness &#8594; elastic modulus.**

Depth and curvature are related but not the same — that distinction is the whole payoff of this lesson.

**Four kinds of glue.** Not all bonds fill the well the same way. Ranked strongest to weakest:

| Bond | How it holds | Example | Strength |
|------|--------------|---------|----------|
| **Ionic** | electron transferred; +/&#8722; ions attract electrostatically | NaCl (table salt) | very strong |
| **Covalent** | electrons *shared* in directional pairs | diamond, silicon | very strong (often strongest) |
| **Metallic** | ions in a shared "sea" of free electrons | copper, aluminum | strong, non-directional |
| **van der Waals** | weak, fleeting dipole attractions | solid argon, polymer chains | very weak |

Ionic and covalent bonds are the deep, stiff wells — think ceramics and diamond, high-melting and hard. Metallic wells are deep too but non-directional, which is *why metals bend instead of shatter* (a preview of [2.2 dislocations](02-02-dislocations-plastic-flow.md)). Van der Waals wells are shallow puddles: that's why solid argon melts at 84 K and why polymers are soft — the strong covalent bonds run *along* each chain, but only weak van der Waals forces hold neighboring chains together.

## The formal version

Write the total potential energy $U(r)$ of two atoms a distance $r$ apart (in meters) as a sum of an attractive term and a repulsive term. A convenient and standard form (Condon&#8211;Morse):

$$U(r) = -\frac{A}{r^{m}} + \frac{B}{r^{n}}, \qquad n > m > 0,$$

where $A, B > 0$ set the strength of attraction and repulsion, and the exponents satisfy $n > m$ so that **repulsion wins at short range** (it blows up faster as $r \to 0$) while **attraction dominates at long range**. *In words: the first term is the pull that lowers energy as atoms approach; the second is the wall that shoots energy up when they get too close.*

The **force** between the atoms is the negative slope of the energy:

$$F(r) = -\frac{dU}{dr}.$$

*In words: atoms roll "downhill" in energy; force points toward lower $U$.* At **equilibrium** the force vanishes — the bottom of the well:

$$\left.\frac{dU}{dr}\right|_{r_0} = 0 \quad\Longrightarrow\quad r_0 = \text{equilibrium bond length}.$$

*In words: $r_0$ is where the slope of the energy curve is flat — no net push or pull.* This is a *minimum* (not a maximum) because $\left.d^2U/dr^2\right|_{r_0} > 0$: the well curves upward.

Two properties of the well then read off directly:

**1. Well depth = bond strength.** The depth $U_0 = -U(r_0) > 0$ is the energy you must supply to pull the atoms apart to $r \to \infty$ (the **cohesive** or **bond energy**). Deeper well &#8594; more thermal energy needed to break bonds &#8594; **higher melting temperature.**

**2. Well curvature = stiffness.** Expand $U$ near the bottom (Taylor, exactly as in [mechanics 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md)):

$$U(r) \approx U(r_0) + \tfrac12\,\kappa\,(r - r_0)^2, \qquad \kappa \equiv \left.\frac{d^2U}{dr^2}\right|_{r_0}.$$

The linear term drops out because the slope is zero at $r_0$. *In words: near the bottom, every bond is a spring* with spring constant $\kappa$ equal to the curvature. A larger $\kappa$ means a stiffer bond, and the **elastic (Young's) modulus** scales with it — roughly $E \sim \kappa / r_0$ (see [4.1](04-01-elastic-behavior-stress-strain.md)). Steeper, narrower well &#8594; **higher modulus.**

One more feature to file away: the well is **asymmetric** — the repulsive wall on the left is steeper than the attractive tail on the right. When an atom vibrates with thermal energy, this lopsidedness makes its *average* position drift outward as it heats up. That drift is **thermal expansion** ([forward to 5.2](05-02-semiconductors-optics-thermal.md)).

## Picture

![Bond-energy curve U(r) versus interatomic separation r: a well with equilibrium spacing r0 at its minimum, depth U0 marked by a vertical double-arrow, an approximating parabola at the bottom representing the local spring, and notes that a deep well means a high melting point while a steep narrow well means high stiffness.](assets/01-01-fig1.svg)

The blue curve is $U(r)$: a steep repulsive wall on the left, a shallow attractive tail approaching zero on the right, and the well between them. The coral dashed parabola hugging the bottom is the "spring" — the local approximation whose steepness *is* the stiffness.

## Worked examples

**Example 1 (mechanical — find $r_0$).** Take a bond with $U(r) = -\dfrac{A}{r} + \dfrac{B}{r^{9}}$ (so $m = 1$, $n = 9$). Where does it sit?

Differentiate and set to zero:

$$\frac{dU}{dr} = \frac{A}{r^{2}} - \frac{9B}{r^{10}} = 0 \quad\Longrightarrow\quad \frac{A}{r^{2}} = \frac{9B}{r^{10}} \quad\Longrightarrow\quad A\,r^{8} = 9B.$$

$$\boxed{\,r_0 = \left(\frac{9B}{A}\right)^{1/8}.}$$

Confirm it's a minimum by checking curvature. With $d^2U/dr^2 = -\dfrac{2A}{r^{3}} + \dfrac{90B}{r^{11}}$ and substituting $B = A r_0^{8}/9$:

$$\left.\frac{d^2U}{dr^2}\right|_{r_0} = -\frac{2A}{r_0^{3}} + \frac{90}{r_0^{11}}\cdot\frac{A r_0^{8}}{9} = -\frac{2A}{r_0^{3}} + \frac{10A}{r_0^{3}} = \frac{8A}{r_0^{3}} > 0. \checkmark$$

So $\kappa = 8A/r_0^{3}$ — the bond's spring constant, and the well is indeed a minimum.

**Example 2 (why you'd care — compare two materials).** Material **D** (diamond, covalent) has a deep, steeply-curved well; material **G** (solid argon, van der Waals) has a shallow, gently-curved one. Predict which has the higher melting point and which the higher modulus, and why.

- **Melting point** is governed by well *depth*. Breaking bonds to melt requires roughly the cohesive energy $U_0$ worth of thermal jostling. Diamond's covalent well is deep ($U_0$ of order several eV per bond), argon's van der Waals well is a shallow puddle (of order 0.01 eV). So **D melts far higher** — diamond sublimes near 4000 K, solid argon melts at 84 K.
- **Modulus** is governed by well *curvature* $\kappa$. Diamond's well is not just deep but *steep* near $r_0$, giving a huge $\kappa$; argon's is slack. So **D is far stiffer** — diamond's Young's modulus is ~1000 GPa, solid argon's is a fraction of a GPa.

The lesson: depth and curvature usually move together (a tight covalent bond is both deep and steep), but they answer *different* questions — depth &#8594; when it melts, curvature &#8594; how much it stretches under load. A material can in principle have a deep well that's relatively soft near the bottom, decoupling the two.

## Watch out

- **You might think a deeper well automatically means a stiffer material.** They *correlate* but aren't the same quantity: melting point is set by the well **depth** $U_0$, while stiffness is set by the well **curvature** $\kappa = d^2U/dr^2|_{r_0}$. One is how far down the valley goes; the other is how sharply it turns at the bottom. Two wells can be equally deep but differently curved.
- **You might think equilibrium is where the energy is zero.** No — equilibrium is where the *slope* is zero ($dU/dr = 0$), i.e. the bottom of the well, where $U$ is at its **most negative**. $U = 0$ is the far-apart reference (atoms unbound), not the bound state.
- **You might read the minus sign in $F = -dU/dr$ as optional.** It's the restoring mechanism: just right of $r_0$ the slope is positive, so $F$ is negative (pull inward); just left of $r_0$ the slope is negative, so $F$ is positive (push outward). The sign is what makes the atom *return* to $r_0$ instead of running away.

## One-liner

> Every bond is a well: how *deep* it is sets the melting point, and how *curved* it is at the bottom sets the stiffness — and near that bottom, every atom is just a ball on a spring.

## Problems

**P1 (🟢)** For the Lennard&#8211;Jones potential $U(r) = -\dfrac{A}{r^{6}} + \dfrac{B}{r^{12}}$ (the standard model for van der Waals bonds), find the equilibrium spacing $r_0$ in terms of $A$ and $B$.

**P2 (🟡)** A particular bond behaves near its bottom like a spring with curvature $\kappa = \left.d^2U/dr^2\right|_{r_0} = 40\ \mathrm{N/m}$ and equilibrium spacing $r_0 = 0.25\ \mathrm{nm}$. Using the estimate $E \approx \kappa / r_0$ for the Young's modulus, compute $E$ and comment on whether the material is more like a metal (~100&#8211;200 GPa) or a soft polymer (~1&#8211;5 GPa).

**P3 (🔴)** For the general Condon&#8211;Morse form $U(r) = -\dfrac{A}{r^{m}} + \dfrac{B}{r^{n}}$ with $n > m$, show that the well curvature at the bottom is

$$\left.\frac{d^2U}{dr^2}\right|_{r_0} = \frac{A\,m\,(n - m)}{r_0^{\,m+2}}.$$

Then argue in one sentence: for fixed attraction, does a *steeper* repulsive wall (larger $n$) make the bond stiffer or softer?

<details>
<summary>Solutions</summary>

**P1** Differentiate $U = -A r^{-6} + B r^{-12}$:

$$\frac{dU}{dr} = \frac{6A}{r^{7}} - \frac{12B}{r^{13}} = 0 \;\Longrightarrow\; \frac{6A}{r^{7}} = \frac{12B}{r^{13}} \;\Longrightarrow\; 6A\,r^{6} = 12B \;\Longrightarrow\; r_0^{6} = \frac{2B}{A}.$$

$$\boxed{\,r_0 = \left(\frac{2B}{A}\right)^{1/6}.}$$

*Check.* $A$ and $B$ have units that make $A/r^6$ and $B/r^{12}$ both energies, so $B/A$ has units of $r^6$ and $(2B/A)^{1/6}$ comes out as a length. ✓ (This is the textbook LJ result, usually written $r_0 = 2^{1/6}\sigma$.)

**P2** Convert $r_0 = 0.25\ \mathrm{nm} = 0.25\times10^{-9}\ \mathrm{m} = 2.5\times10^{-10}\ \mathrm{m}$:

$$E \approx \frac{\kappa}{r_0} = \frac{40\ \mathrm{N/m}}{2.5\times10^{-10}\ \mathrm{m}} = 1.6\times10^{11}\ \mathrm{Pa} = 160\ \mathrm{GPa}.$$

*Check.* Units: $(\mathrm{N/m})/\mathrm{m} = \mathrm{N/m^2} = \mathrm{Pa}$ ✓. At 160 GPa this sits squarely in the **metal** range (steel is ~200 GPa) — far too stiff to be a soft polymer. A stiffer bond (larger $\kappa$) or a shorter bond (smaller $r_0$) would push $E$ higher still.

**P3** Start from $U = -A r^{-m} + B r^{-n}$.

$$\frac{dU}{dr} = A m\,r^{-m-1} - B n\,r^{-n-1}, \qquad \frac{d^2U}{dr^2} = -A m(m+1)\,r^{-m-2} + B n(n+1)\,r^{-n-2}.$$

At $r_0$ the first derivative is zero: $A m\,r_0^{-m-1} = B n\,r_0^{-n-1}$. Multiply both sides by $r_0^{-1}$ to get the combination we need:

$$A m\,r_0^{-m-2} = B n\,r_0^{-n-2}.$$

Substitute $B n\,r_0^{-n-2} = A m\,r_0^{-m-2}$ into the curvature:

$$\left.\frac{d^2U}{dr^2}\right|_{r_0} = -A m(m+1)\,r_0^{-m-2} + (n+1)\big(A m\,r_0^{-m-2}\big) = A m\,r_0^{-m-2}\big[-(m+1) + (n+1)\big] = \frac{A\,m\,(n-m)}{r_0^{\,m+2}}. \;\blacksquare$$

*Check.* Set $m=1, n=9$: $\kappa = A\cdot 1\cdot 8 / r_0^{3} = 8A/r_0^{3}$, matching Worked Example 1. ✓

**Argument:** since $\kappa \propto (n - m)$, a **steeper repulsive wall (larger $n$) makes the bond stiffer** — a harder wall snaps the atom back more sharply, raising the curvature and hence the modulus.

</details>

## Connections

- **Backward:** finding $r_0$ is just "set the first derivative to zero and check the second is positive" from [`calc-refresher`](../../calc-refresher/syllabus.md) — a min/max problem wearing a physics uniform. The parabola-at-the-bottom is the same universal-well Taylor argument that made [mechanics 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) claim *every* small oscillation is a spring; here the oscillator is a vibrating atom.
- **Forward:** [1.2 Crystal structures](01-02-crystal-structures-unit-cells.md) asks what happens when *many* atoms each seek their $r_0$ simultaneously — they pack into periodic lattices. Well depth resurfaces as cohesive energy and melting point throughout Module 3 (phase diagrams); well curvature becomes the elastic modulus in [4.1](04-01-elastic-behavior-stress-strain.md); and the well's *asymmetry* becomes thermal expansion in [5.2](05-02-semiconductors-optics-thermal.md).
- **Sideways:** the bond well is the same object as the interatomic potential in condensed-matter physics ([`condensed-matter`](../../condensed-matter/syllabus.md)), where its curvature sets the phonon (lattice-vibration) frequencies — the atomic "spring" ringing at $\omega = \sqrt{\kappa/m}$, exactly the harmonic-oscillator frequency from mechanics. And the depth $U_0$ is the latent-heat / cohesion bookkeeping you meet again in [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md).
