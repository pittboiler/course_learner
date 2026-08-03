# Relativity (SR + GR) · Lesson 5.2: Matter in curved spacetime and local conservation

> ⏱ ~15 min · Module 5: General relativity and the Einstein equations · Builds on: [5.1 The equivalence principle](#/lesson/relativity/05-01-equivalence-principle.md), [4.4 Covariant derivatives and Christoffel symbols](#/lesson/relativity/04-04-covariant-derivative-christoffel.md), [3.3 The stress–energy tensor](#/lesson/relativity/03-03-stress-energy-tensor.md), [4.7 Ricci, scalar curvature, and the Einstein tensor](#/lesson/relativity/04-07-ricci-einstein-tensor.md) · Unlocks: 5.3 (the Einstein field equations), 5.4 (the Einstein–Hilbert action)

## Why this matters

Einstein's equation reads $G_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu}$ — curvature on the left, *matter* on the right. Before we can write it down (next lesson) we need the right-hand side: **how do you put physics onto a curved background?** The answer turns out to be almost embarrassingly simple — one substitution rule promotes any special-relativistic law to a curved spacetime. But packing matter onto curved geometry also forces a genuinely new idea, one with no Newtonian ancestor: **there is no coordinate-independent notion of the total energy of the universe.** Energy can leak into and out of the gravitational field itself, and the conservation law survives only *locally*. Understanding exactly what "$\nabla_\mu T^{\mu\nu}=0$" does and does not promise is the whole lesson — and it doubles as the equation of motion for the matter, which is why free particles fall along geodesics.

Throughout: signature $(-,+,+,+)$, so a flat local frame has $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,+1,+1)$; $c$ and $G$ are kept explicit. The four-velocity $u^\mu=dx^\mu/d\tau$ is normalized to $u^\mu u_\mu=-c^2$.

## The idea

You already know all the physics you need in flat spacetime: Maxwell's equations, the continuity equation, the stress–energy tensor $T^{\mu\nu}$ ([3.3](#/lesson/relativity/03-03-stress-energy-tensor.md)). The equivalence principle ([5.1](#/lesson/relativity/05-01-equivalence-principle.md)) says that in a freely falling frame, physics is *locally* the physics of special relativity — gravity disappears at a point. So the recipe for "physics in a gravitational field" writes itself: take the special-relativistic law, and make it into a genuine tensor equation that holds in *any* coordinates. A tensor equation true in the local free-fall frame is true everywhere.

There are exactly two things in an SR law that aren't already coordinate-independent, and each has a fix:

- The flat metric $\eta_{\mu\nu}$ knows about a special class of (inertial) coordinates. **Replace it with the general metric $g_{\mu\nu}$.**
- The partial derivative $\partial_\mu$ is not a tensor operation on a curved manifold — differentiating a vector's components mixes in how the coordinate basis twists ([4.4](#/lesson/relativity/04-04-covariant-derivative-christoffel.md)). **Replace it with the covariant derivative $\nabla_\mu$**, which corrects for that twist with Christoffel symbols and *does* produce a tensor.

That's the entire rule. It has a nickname — **"comma goes to semicolon"** — from the old notation where $\partial_\mu$ was a comma ($V^\nu{}_{,\mu}$) and $\nabla_\mu$ a semicolon ($V^\nu{}_{;\mu}$). Promote the commas to semicolons, promote $\eta$ to $g$, and you have taken a law from the blackboard of special relativity and written it on curved spacetime. When you integrate, the flat volume element $d^4x$ becomes the invariant volume $\sqrt{-g}\,d^4x$ (the curved-space upgrade of [2.4](#/lesson/relativity/02-04-invariants-levi-civita.md)'s $\sqrt{-\eta}\,d^4x=d^4x$).

Apply this to the one law that matters most — the conservation of energy and momentum, $\partial_\mu T^{\mu\nu}=0$ — and out comes

$$\nabla_\mu T^{\mu\nu}=0.$$

Four short words of index notation that, as we'll see, are simultaneously the conservation law *and* the equation of motion for the matter.

## The formal version

**Minimal coupling (the comma-to-semicolon rule).** To promote a special-relativistic law to curved spacetime: (1) replace $\eta_{\mu\nu}\to g_{\mu\nu}$ (and $\eta^{\mu\nu}\to g^{\mu\nu}$); (2) replace every $\partial_\mu\to\nabla_\mu$; (3) replace $d^4x\to\sqrt{-g}\,d^4x$ in integrals, where $g\equiv\det(g_{\mu\nu})<0$.

In words: *keep the equation, upgrade its ingredients to their curved-space versions.* This is called **minimal** coupling because it adds nothing beyond what geometry forces — no gratuitous curvature terms. (There is a mild ambiguity when second derivatives appear, since $\nabla_\mu\nabla_\nu\neq\nabla_\nu\nabla_\mu$ on curved space — that gap is the Riemann tensor — but for the laws we need it does not bite.)

**The stress–energy tensor is the source of gravity.** From [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md), $T^{\mu\nu}$ is the symmetric rank-$(2,0)$ tensor whose components are the densities and fluxes of energy and momentum: $T^{00}$ is the energy density, $T^{0i}/c$ the momentum density, $T^{ij}$ the flux of $i$-momentum through a surface of constant $x^j$ (the stresses — pressure on the diagonal). On curved spacetime it is exactly what sits on the right of Einstein's equation. The workhorse example is the **perfect fluid** — matter with a rest-frame density $\rho$ (so $\rho c^2$ is energy density) and an isotropic pressure $p$, no shear or viscosity:

$$T^{\mu\nu}=\left(\rho+\frac{p}{c^2}\right)u^\mu u^\nu+p\,g^{\mu\nu}.$$

In words: the flow of energy–momentum is carried along the fluid's four-velocity $u^\mu$ (the $u^\mu u^\nu$ term), plus an isotropic pressure that pushes in every direction (the $p\,g^{\mu\nu}$ term). This is the flat-space perfect fluid with the single edit $\eta^{\mu\nu}\to g^{\mu\nu}$ — minimal coupling on a tensor. It describes stars, gas, dust, radiation, and (with $p=-\rho c^2$) even the cosmological vacuum.

**Local conservation.** Minimal coupling sends flat conservation $\partial_\mu T^{\mu\nu}=0$ to

$$\boxed{\;\nabla_\mu T^{\mu\nu}=0.\;}$$

In words: at every point, the energy and momentum flowing out of an infinitesimal region balance what is stored inside — conservation holds *locally*, in each freely falling frame. But note the word: **local**. Unlike the flat case, this does **not** integrate up to a conserved total (we take this apart in Problem 3). Expanding the covariant divergence,

$$\nabla_\mu T^{\mu\nu}=\frac{1}{\sqrt{-g}}\,\partial_\mu\!\left(\sqrt{-g}\,T^{\mu\nu}\right)+\Gamma^\nu_{\mu\lambda}T^{\mu\lambda}=0,$$

the first term is a plain divergence (it would integrate to a boundary term), but the second — the Christoffel term $\Gamma^\nu_{\mu\lambda}T^{\mu\lambda}$ — is a source that does **not** integrate away. Physically it is the exchange of energy and momentum between the matter and the *gravitational field*, which carries energy but is not part of $T^{\mu\nu}$. There is no coordinate-independent "energy of the gravitational field" to add in, so in a general spacetime there is no conserved total energy at all. This is a real, new feature of general relativity, not a bookkeeping nuisance.

**Conservation is the equation of motion.** Here is the payoff that makes $\nabla_\mu T^{\mu\nu}=0$ more than an accounting identity: it *contains the dynamics of the matter.* For pressureless **dust** ($p=0$, $T^{\mu\nu}=\rho u^\mu u^\nu$) it splits cleanly into

$$\nabla_\mu(\rho u^\mu)=0\quad(\text{mass continuity})\qquad\text{and}\qquad u^\mu\nabla_\mu u^\nu=0\quad(\text{the geodesic equation}).$$

The second is exactly the geodesic equation of [4.5](#/lesson/relativity/04-05-geodesics.md): free dust particles fall along geodesics — *derived*, not assumed. (Problem 2 does the split.) For a perfect fluid with pressure the same procedure yields the **relativistic Euler equation** (Worked Example 2). So "conservation of $T^{\mu\nu}$" and "the matter's equation of motion" are one statement.

**The consistency that forces $G\propto T$.** The Bianchi identities ([4.7](#/lesson/relativity/04-07-ricci-einstein-tensor.md)) hand us a purely geometric fact: the Einstein tensor is *automatically* divergence-free,

$$\nabla_\mu G^{\mu\nu}=0.$$

If curvature is to equal matter, $G^{\mu\nu}\propto T^{\mu\nu}$, then the geometric identity $\nabla_\mu G^{\mu\nu}=0$ and the physical law $\nabla_\mu T^{\mu\nu}=0$ must be the *same* equation — they are consistent for free. That is not a coincidence; it is the reason the Einstein tensor, and not some other combination of curvature, appears on the left of the field equations. We build that argument in [5.3](#/lesson/relativity/05-03-einstein-field-equations.md); this lesson supplies its right-hand half.

## Picture

![A fluid element sitting on a curved coordinate grid: its four-velocity u^mu points along its worldline, isotropic pressure p pushes outward in every direction, and the whole element carries a stress-energy tensor T^mu-nu that is locally conserved, nabla_mu T^mu-nu = 0](assets/05-02-fig1.svg)

The background geometry is fixed by $g_{\mu\nu}$ (the warped grid). The matter is a little parcel carrying $T^{\mu\nu}$: it streams along its four-velocity $u^\mu$ and pushes outward isotropically with pressure $p$. Local conservation $\nabla_\mu T^{\mu\nu}=0$ is a statement at the *parcel* — energy–momentum flux balances at each point — which is why it can hold even when no global total energy exists.

## Worked examples

**Example 1 (mechanical — comma-to-semicolon in action, and it *is* gravity).** Start from the motion of a free particle in special relativity. "Free" means no four-force, so its four-velocity is constant along the worldline:

$$\frac{du^\nu}{d\tau}=u^\mu\,\partial_\mu u^\nu=0.$$

(The middle step uses $\frac{d}{d\tau}=\frac{dx^\mu}{d\tau}\partial_\mu=u^\mu\partial_\mu$.) Now apply minimal coupling: promote the one partial derivative to a covariant derivative, $\partial_\mu\to\nabla_\mu$:

$$u^\mu\nabla_\mu u^\nu=0.$$

Expand the covariant derivative with its Christoffel symbols ([4.4](#/lesson/relativity/04-04-covariant-derivative-christoffel.md)), $\nabla_\mu u^\nu=\partial_\mu u^\nu+\Gamma^\nu_{\mu\lambda}u^\lambda$:

$$u^\mu\partial_\mu u^\nu+\Gamma^\nu_{\mu\lambda}u^\mu u^\lambda=0\quad\Longleftrightarrow\quad\frac{d^2x^\nu}{d\tau^2}+\Gamma^\nu_{\mu\lambda}\frac{dx^\mu}{d\tau}\frac{dx^\lambda}{d\tau}=0.$$

That is the **geodesic equation**. The single act of turning a comma into a semicolon manufactured the $\Gamma$ term out of nothing — and that term *is* the gravitational force. Free particles move in straight lines in the local frame; in global coordinates the Christoffels bend that "straight line" into a fall. Minimal coupling and the equivalence principle are the same statement seen twice.

**Example 2 (why you'd care — the relativistic Euler equation).** Take the perfect fluid $T^{\mu\nu}=(\rho+p/c^2)u^\mu u^\nu+p\,g^{\mu\nu}$ and impose $\nabla_\mu T^{\mu\nu}=0$. Write $w\equiv\rho+p/c^2$. Using metric compatibility $\nabla_\mu g^{\mu\nu}=0$ (so the metric passes through the derivative — see the Flashback),

$$\nabla_\mu T^{\mu\nu}=\underbrace{\nabla_\mu(w\,u^\mu)\,u^\nu}_{\text{flow}}+\underbrace{w\,u^\mu\nabla_\mu u^\nu}_{\text{acceleration}}+\underbrace{g^{\mu\nu}\nabla_\mu p}_{\text{pressure gradient}}=0.$$

Project this along the flow by contracting with $u_\nu$, using $u_\nu u^\nu=-c^2$ (constant, so $u_\nu\nabla_\mu u^\nu=\tfrac12\nabla_\mu(u_\nu u^\nu)=0$) and $u_\nu g^{\mu\nu}=u^\mu$:

$$-c^2\,\nabla_\mu(w\,u^\mu)+u^\mu\nabla_\mu p=0.$$

This is the relativistic **energy/continuity** equation. Substitute it back to eliminate the flow term, and the leftover is the piece *orthogonal* to $u^\nu$ — the equation of motion for the fluid, the **relativistic Euler equation**:

$$\left(\rho+\frac{p}{c^2}\right)u^\mu\nabla_\mu u^\nu=-\left(g^{\mu\nu}+\frac{u^\mu u^\nu}{c^2}\right)\nabla_\mu p.$$

In words: the fluid element accelerates ($u^\mu\nabla_\mu u^\nu$, its four-acceleration) in response to the pressure gradient projected perpendicular to its motion, with inertia set by $\rho+p/c^2$ — pressure adds to the effective inertia, a purely relativistic effect. In the slow-motion, weak-pressure, weak-field limit ($p\ll\rho c^2$, $v\ll c$) the covariant derivative's Christoffel piece becomes the Newtonian gravitational field $\mathbf g=-\nabla\Phi$ and this collapses to the ordinary Euler equation of fluid dynamics,

$$\rho\left(\frac{\partial\mathbf v}{\partial t}+(\mathbf v\cdot\nabla)\mathbf v\right)=-\nabla p+\rho\,\mathbf g.$$

Set $p=0$ and you are back to dust falling on geodesics (Example 1). One tensor equation, $\nabla_\mu T^{\mu\nu}=0$, holds all of relativistic hydrodynamics.

## Watch out

- **"Local" is the load-bearing word.** $\nabla_\mu T^{\mu\nu}=0$ is *not* $\partial_\mu(\sqrt{-g}\,T^{\mu\nu})=0$; the two differ by the Christoffel term $\Gamma^\nu_{\mu\lambda}T^{\mu\lambda}$. Only the second form is a true divergence that Gauss's theorem turns into a conserved charge. You might think energy is conserved "because $\nabla_\mu T^{\mu\nu}=0$" — but that gives you conservation at a point, not a conserved total. A general expanding or radiating spacetime has *no* conserved total energy (Problem 3).
- **$T^{\mu\nu}$ does not include the gravitational field.** The whole point is that gravity is geometry, not matter, so its energy is not in $T^{\mu\nu}$. That is precisely why $T^{\mu\nu}$ alone isn't globally conserved — energy flows between the matter (in $T$) and the field (in $g$). There is no local, coordinate-independent "energy density of the gravitational field" to patch this up.
- **Minimal coupling has an ordering ambiguity — but rarely one that matters.** Because $\nabla_\mu\nabla_\nu\neq\nabla_\nu\nabla_\mu$, a flat law with two derivatives can promote to inequivalent curved laws differing by a curvature term. For the conservation law and the fluid equations above there are no such second derivatives, so the recipe is unambiguous; be alert only when second derivatives of a field appear.
- **$\rho$ is the rest-frame density, and pressure gravitates.** In $T^{\mu\nu}$, $\rho$ and $p$ are measured in the fluid's own rest frame. The combination that acts as inertia (and, in cosmology, as a source of gravity) is $\rho+p/c^2$ — not $\rho$ alone. Pressure has weight.

## One-liner

> Promote commas to semicolons ($\partial\to\nabla$, $\eta\to g$) to put matter on curved spacetime; the resulting $\nabla_\mu T^{\mu\nu}=0$ is at once the local conservation law and the matter's equation of motion — but only *local*, because energy can trade with the gravitational field.

## Problems

**P1 (🟢)** Write the perfect-fluid stress–energy tensor $T^{\mu\nu}=(\rho+p/c^2)u^\mu u^\nu+p\,g^{\mu\nu}$ in the fluid's local rest frame, where $u^\mu=(c,0,0,0)$ and the metric is locally flat, $g^{\mu\nu}=\eta^{\mu\nu}=\mathrm{diag}(-1,+1,+1,+1)$. Show that the energy density is $T^{00}=\rho c^2$ and the stresses are $T^{ij}=p\,\delta^{ij}$ (with $T^{0i}=0$) — i.e. recover "energy density $\rho c^2$, isotropic pressure $p$."

**P2 (🟡)** For pressureless dust, $T^{\mu\nu}=\rho\,u^\mu u^\nu$, show that $\nabla_\mu T^{\mu\nu}=0$ implies **both** the geodesic equation $u^\mu\nabla_\mu u^\nu=0$ **and** mass continuity $\nabla_\mu(\rho u^\mu)=0$. (Hint: expand with the product rule, then contract the whole thing with $u_\nu$, using $u_\nu u^\nu=-c^2$ and $u_\nu\nabla_\mu u^\nu=0$.) This is the sense in which free particles falling on geodesics is a *consequence* of conservation, connecting to [4.5](#/lesson/relativity/04-05-geodesics.md).

**P3 (🔴, optional)** Explain why general relativity has no coordinate-independent notion of *global* energy conservation. Specifically: (a) show that $\nabla_\mu T^{\mu\nu}=0$ is equivalent to $\partial_\mu(\sqrt{-g}\,T^{\mu\nu})=-\sqrt{-g}\,\Gamma^\nu_{\mu\lambda}T^{\mu\lambda}$, and argue that the Christoffel source term generally spoils the conserved-charge argument that works in flat space. (b) Show that if the spacetime admits a **Killing vector** $\xi^\nu$ — one satisfying $\nabla_\mu\xi_\nu+\nabla_\nu\xi_\mu=0$ — then $J^\mu\equiv T^{\mu\nu}\xi_\nu$ *is* covariantly conserved, $\nabla_\mu J^\mu=0$, which **is** a true divergence and hence yields a genuine conserved charge. What does a *timelike* Killing vector give you?

<details>
<summary>Solutions</summary>

**P1** In the rest frame $u^\mu=(c,0,0,0)$, so the only nonzero product is $u^0u^0=c^2$; all $u^0u^i$ and $u^iu^j$ vanish. With $w=\rho+p/c^2$:

Energy density ($\mu=\nu=0$), using $g^{00}=\eta^{00}=-1$:

$$T^{00}=w\,u^0u^0+p\,g^{00}=\left(\rho+\frac{p}{c^2}\right)c^2+p(-1)=\rho c^2+p-p=\rho c^2.\ \checkmark$$

Momentum density ($\mu=0,\nu=i$), using $u^0u^i=0$ and $g^{0i}=0$:

$$T^{0i}=w\,u^0u^i+p\,g^{0i}=0+0=0.\ \checkmark$$

Stresses ($\mu=i,\nu=j$), using $u^iu^j=0$ and $g^{ij}=\delta^{ij}$:

$$T^{ij}=w\,u^iu^j+p\,g^{ij}=0+p\,\delta^{ij}=p\,\delta^{ij}.\ \checkmark$$

So in matrix form $T^{\mu\nu}=\mathrm{diag}(\rho c^2,\,p,\,p,\,p)$ — energy density on the time-time slot, equal pressure on each spatial diagonal, nothing off-diagonal. This is the Newtonian/non-relativistic content of the perfect fluid: it is exactly "mass-energy $\rho c^2$ at rest, pushing with isotropic pressure $p$." (Cross-check the pressure sign: pressure is the flux of $i$-momentum through a surface of constant $x^i$, positive for outward push — the $+p\,\delta^{ij}$ we found.)

**P2** Start from $T^{\mu\nu}=\rho\,u^\mu u^\nu$ and expand $\nabla_\mu T^{\mu\nu}=0$ with the product rule:

$$\nabla_\mu(\rho u^\mu u^\nu)=\nabla_\mu(\rho u^\mu)\,u^\nu+\rho\,u^\mu\nabla_\mu u^\nu=0.\qquad(\star)$$

Contract $(\star)$ with $u_\nu$. For the first term, $u_\nu u^\nu=-c^2$. For the second, differentiate the normalization $u_\nu u^\nu=-c^2$ (a constant):

$$0=\nabla_\mu(u_\nu u^\nu)=2\,u_\nu\nabla_\mu u^\nu\quad\Longrightarrow\quad u_\nu\nabla_\mu u^\nu=0,$$

so the second term of $(\star)$ contracted with $u_\nu$ vanishes. Hence

$$u_\nu\nabla_\mu T^{\mu\nu}=\nabla_\mu(\rho u^\mu)\,(u_\nu u^\nu)+0=-c^2\,\nabla_\mu(\rho u^\mu)=0\quad\Longrightarrow\quad \boxed{\nabla_\mu(\rho u^\mu)=0,}$$

which is **mass continuity** (the covariant conservation of the rest-mass current $\rho u^\mu$). Now feed this back into $(\star)$: the first term $\nabla_\mu(\rho u^\mu)u^\nu=0$ drops out, leaving

$$\rho\,u^\mu\nabla_\mu u^\nu=0\quad\Longrightarrow\quad\boxed{u^\mu\nabla_\mu u^\nu=0,}$$

(for $\rho\neq0$) — the **geodesic equation**. So conservation of dust's stress–energy *is* the statement "each dust particle falls freely along a geodesic while mass is conserved." Free fall is not an extra postulate; it is baked into $\nabla_\mu T^{\mu\nu}=0$. $\blacksquare$

**P3** (a) The covariant divergence of a symmetric rank-$(2,0)$ tensor is

$$\nabla_\mu T^{\mu\nu}=\partial_\mu T^{\mu\nu}+\Gamma^\mu_{\mu\lambda}T^{\lambda\nu}+\Gamma^\nu_{\mu\lambda}T^{\mu\lambda}.$$

Use the identity $\Gamma^\mu_{\mu\lambda}=\partial_\lambda\ln\sqrt{-g}=\frac{1}{\sqrt{-g}}\partial_\lambda\sqrt{-g}$ (the contracted Christoffel from [4.4](#/lesson/relativity/04-04-covariant-derivative-christoffel.md)). The first two terms then combine into a single divergence:

$$\partial_\mu T^{\mu\nu}+\Gamma^\mu_{\mu\lambda}T^{\lambda\nu}=\frac{1}{\sqrt{-g}}\,\partial_\mu\!\left(\sqrt{-g}\,T^{\mu\nu}\right).$$

Therefore $\nabla_\mu T^{\mu\nu}=0$ is equivalent to

$$\partial_\mu\!\left(\sqrt{-g}\,T^{\mu\nu}\right)=-\sqrt{-g}\,\Gamma^\nu_{\mu\lambda}T^{\mu\lambda}.$$

In flat space (Cartesian coordinates) $\Gamma=0$, so the right side vanishes and $\partial_\mu(\sqrt{-g}\,T^{\mu\nu})=\partial_\mu T^{\mu\nu}=0$ is a genuine divergence. Integrating $T^{0\nu}$ over a spatial slice and using Gauss's theorem then gives conserved four-momentum $P^\nu=\frac1c\int T^{0\nu}\,d^3x$ with $dP^\nu/dt=0$. In a *curved* spacetime the source $-\sqrt{-g}\,\Gamma^\nu_{\mu\lambda}T^{\mu\lambda}$ is generically nonzero, so $\partial_\mu(\sqrt{-g}\,T^{\mu\nu})\neq0$ and the same integral is **not** conserved. Physically, the Christoffel term is the rate at which the matter exchanges energy–momentum with the gravitational field (think of light redshifting as it climbs out of a well, or a photon gas cooling as the universe expands — the matter's energy changes with nothing to "receive" it inside $T^{\mu\nu}$). Since the field's energy has no coordinate-independent local density, there is nothing to add to $T^{\mu\nu}$ to restore a conserved total. Hence: **no coordinate-independent global energy conservation in general.**

(b) Suppose $\xi^\nu$ is a Killing vector, $\nabla_\mu\xi_\nu+\nabla_\nu\xi_\mu=0$ (i.e. $\nabla_\mu\xi_\nu$ is antisymmetric). Define $J^\mu=T^{\mu\nu}\xi_\nu$ and take its divergence with the product rule:

$$\nabla_\mu J^\mu=(\nabla_\mu T^{\mu\nu})\,\xi_\nu+T^{\mu\nu}\,\nabla_\mu\xi_\nu.$$

The first term vanishes by conservation, $\nabla_\mu T^{\mu\nu}=0$. The second vanishes too: $T^{\mu\nu}$ is *symmetric* in $\mu\nu$ while $\nabla_\mu\xi_\nu$ is *antisymmetric*, and the full contraction of a symmetric with an antisymmetric tensor is zero. Hence

$$\nabla_\mu J^\mu=0.$$

But for a *vector*, the covariant divergence is already a true divergence: $\nabla_\mu J^\mu=\frac{1}{\sqrt{-g}}\partial_\mu(\sqrt{-g}\,J^\mu)$, with **no** leftover Christoffel term. So $\partial_\mu(\sqrt{-g}\,J^\mu)=0$, and Gauss's theorem delivers a genuinely conserved charge $Q=\frac1c\int\sqrt{-g}\,J^0\,d^3x$. A symmetry of the spacetime (a Killing vector) is what buys back a conservation law — the general-relativistic echo of Noether. In particular, a **timelike** Killing vector means the geometry is *stationary* (time-independent, like Schwarzschild outside a star), and the conserved charge it yields is a well-defined **total energy**. The reason cosmology (FLRW) and gravitational-wave spacetimes have no conserved total energy is precisely that they admit no timelike Killing vector — the metric genuinely changes with time. $\blacksquare$

</details>

## Flashback

**From Lesson 4.4 (Covariant derivatives and Christoffel symbols):** Metric compatibility states $\nabla_\lambda g_{\mu\nu}=0$ (equivalently $\nabla_\lambda g^{\mu\nu}=0$). Use it to prove that for any vector field $V^\lambda$,

$$\nabla_\mu\!\left(g_{\nu\lambda}V^\lambda\right)=g_{\nu\lambda}\,\nabla_\mu V^\lambda,$$

i.e. lowering an index commutes with covariant differentiation. Then say in one sentence why this is exactly what let us pull $g^{\mu\nu}$ through the derivative when computing $\nabla_\mu T^{\mu\nu}$ for the perfect fluid in Worked Example 2.

<details>
<summary>Solution</summary>

Apply the Leibniz (product) rule for the covariant derivative — it obeys one just like $\partial_\mu$, since $\nabla_\mu$ is built to be a derivation:

$$\nabla_\mu\!\left(g_{\nu\lambda}V^\lambda\right)=(\nabla_\mu g_{\nu\lambda})\,V^\lambda+g_{\nu\lambda}\,\nabla_\mu V^\lambda.$$

By metric compatibility the first term is zero, $\nabla_\mu g_{\nu\lambda}=0$, leaving

$$\nabla_\mu\!\left(g_{\nu\lambda}V^\lambda\right)=g_{\nu\lambda}\,\nabla_\mu V^\lambda.\ \checkmark$$

So the metric behaves like a constant with respect to $\nabla_\mu$ — it slides in and out freely. That is precisely why, in the perfect-fluid computation, the term $\nabla_\mu(p\,g^{\mu\nu})$ became $g^{\mu\nu}\nabla_\mu p$ (the metric passing through) rather than generating extra derivative-of-metric terms: metric compatibility is what makes raising/lowering indices compatible with covariant differentiation. (It is also, quietly, why $u_\nu\nabla_\mu u^\nu=\tfrac12\nabla_\mu(u_\nu u^\nu)$ was legal in Problem 2 — the metric that lowers the index rides through the derivative.)

</details>

## Connections

- **Backward:** this is the stress–energy tensor of [3.3](#/lesson/relativity/03-03-stress-energy-tensor.md) and its flat conservation $\partial_\mu T^{\mu\nu}=0$, minimally coupled ($\partial\to\nabla$, [4.4](#/lesson/relativity/04-04-covariant-derivative-christoffel.md); $\eta\to g$, [4.3](#/lesson/relativity/04-03-metric-proper-time.md)) onto the curved manifold. The geodesic that drops out is [4.5](#/lesson/relativity/04-05-geodesics.md)'s, and the equivalence principle of [5.1](#/lesson/relativity/05-01-equivalence-principle.md) is what licenses the whole recipe. The Killing-vector conservation (Problem 3) is the curved-space descendant of [3.2](#/lesson/relativity/03-02-noether-fields.md)'s Noether currents.
- **Forward:** $\nabla_\mu T^{\mu\nu}=0$ must match the geometric identity $\nabla_\mu G^{\mu\nu}=0$ ([4.7](#/lesson/relativity/04-07-ricci-einstein-tensor.md)), and that consistency is what pins the left-hand side of the **Einstein field equations** in [5.3](#/lesson/relativity/05-03-einstein-field-equations.md); the same $T^{\mu\nu}$ reappears from varying the matter action in [5.4](#/lesson/relativity/05-04-einstein-hilbert-action.md). The perfect fluid built here is the source for cosmology — the Friedmann equations ([6.7](#/lesson/relativity/06-07-friedmann-equations.md)) are $\nabla_\mu T^{\mu\nu}=0$ plus Einstein for a homogeneous fluid, and its energy non-conservation is the redshifting photon gas of the early universe (see `astrophysics` [expanding universe & Friedmann](#/lesson/astrophysics/06-01-expanding-universe-friedmann.md)).
- **Sideways (fluid dynamics & analytical mechanics):** the relativistic Euler equation (Example 2) is the covariant parent of the ordinary Euler equation of fluid mechanics; the projection-along-and-orthogonal-to-$u^\mu$ trick is the same "split a conservation law into energy and momentum pieces" move used for classical fields in [analytical-mechanics 4.5](#/lesson/analytical-mechanics/04-05-classical-fields.md). And the moral that a *symmetry of spacetime* (a Killing vector) is what restores a conserved energy is Noether's theorem ([analytical-mechanics 2.2](#/lesson/analytical-mechanics/02-02-noethers-theorem.md)) speaking in curved space.
