# Atmospheric Science · Lesson 5.1: Vorticity & circulation

> ⏱ ~15 min · Module 5: Vorticity, waves & vertical motion · Builds on: [4.2 The Coriolis effect](04-02-coriolis-effect.md), [`fluid-dynamics` 2.2](../../fluid-dynamics/lessons/02-02-vorticity-circulation.md) · Unlocks: 5.2 (potential vorticity), 5.3 (Rossby waves)

## Why this matters

Module 4 got you the wind from the pressure field. But the wind is not what a forecaster actually watches evolve — it is far too tied to the instantaneous pressure pattern, which is itself a consequence rather than a cause. What *evolves*, and what has a clean conservation law behind it, is **spin**. Switching from velocity to vorticity is the single most productive change of variable in dynamic meteorology: it turns a vector field into a scalar one, it makes the rotating frame's contribution a simple additive constant, and it leads directly to the conserved quantity of [5.2](05-02-potential-vorticity.md) and the waves of [5.3](05-03-rossby-waves-beta-effect.md). This lesson sets up that change of variable and finds what makes vorticity grow — which turns out to be the thing that deepens every low-pressure system on the planet.

## The idea

**Vorticity is local spin.** Drop a tiny paddle wheel into the flow. If it turns, the flow has vorticity there; the rate at which it turns, doubled, *is* the vorticity. This is a property of each point in the fluid, not of the flow as a whole — a river can be perfectly straight and still full of vorticity if it flows faster in the middle than at the banks.

**Two ways to make a paddle wheel turn.** This is the point people find surprising:

- **Curvature.** The flow bends. Air going around a low-pressure centre is turning, and a paddle wheel carried along with it turns too.
- **Shear.** The flow is straight, but faster on one side than the other. The paddle wheel's blades on the fast side get pushed harder than those on the slow side, so it spins — even though nothing is curving.

Both count, and their sum is the vorticity. This matters practically: the strongest vorticity in the mid-latitude atmosphere is often the *shear* vorticity on the flank of a jet stream, in flow that is dead straight.

**Rotation adds a constant.** We measure winds in a rotating frame, so a parcel that looks motionless to us is in fact going around Earth's axis once a day. That planetary spin has its own vorticity — and it is exactly $f$, the Coriolis parameter of [4.2](04-02-coriolis-effect.md), which acquires a second and much more natural interpretation here: **$f$ is the vorticity of the Earth itself**, as seen in the local horizontal plane. Adding it to the vorticity we observe gives the **absolute vorticity**, the spin as an inertial observer would measure it, and that is the quantity physics acts on.

**And what changes it: stretching.** Take a spinning column of air and squeeze it horizontally so it gets taller and thinner. It spins faster — the same reason a skater speeds up by pulling their arms in. Convergence into a column stretches it and amplifies its spin; divergence flattens it and slows the spin. That single mechanism, applied to a column with the Earth's own vorticity already in it, is enough to spin up a cyclone from nothing, and it is the whole content of the vorticity equation.

## The formal version

**Definition.** For horizontal flow $(u, v)$, the vertical component of vorticity — the only one that matters at synoptic scale — is

$$\boxed{\ \zeta = \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y}\ }$$

*In words: how much the northward wind changes as you go east, minus how much the eastward wind changes as you go north.* Units are s⁻¹. Sign convention: **positive is counterclockwise**, which in the Northern Hemisphere means **cyclonic**. (In the Southern Hemisphere cyclonic circulation has $\zeta < 0$, matching $f < 0$ there — the signs stay consistent.)

**Circulation, and the link to vorticity.** The **circulation** around a closed curve $C$ is

$$\Gamma = \oint_C \mathbf{v}\cdot d\boldsymbol{\ell},$$

the net "going around." By Stokes' theorem ([`calc-refresher` 5.3](../../calc-refresher/lessons/05-03-green-stokes-divergence.md)),

$$\Gamma = \iint_A \zeta\,dA,$$

so **vorticity is circulation per unit area** — the local, pointwise version of a global quantity. The general fluid treatment is [`fluid-dynamics` 2.2](../../fluid-dynamics/lessons/02-02-vorticity-circulation.md); what is new here is the rotating frame.

**Natural coordinates: curvature and shear.** Writing the flow in terms of speed $V$ along a streamline of radius of curvature $R_s$, with $n$ the across-flow coordinate,

$$\boxed{\ \zeta = \underbrace{\frac{V}{R_s}}_{\text{curvature}} \;-\; \underbrace{\frac{\partial V}{\partial n}}_{\text{shear}}\ }$$

*In words: spin comes from the flow bending and from the flow shearing, and either alone is enough.* Two examples with real numbers:

- A cyclone with $V = 20\ \mathrm{m\,s^{-1}}$ circulating at $R_s = 500$ km has curvature vorticity $20/5\times10^{5} = 4\times10^{-5}\ \mathrm{s^{-1}}$.
- A jet stream whose speed rises by 40 m s⁻¹ over 400 km across its axis has shear vorticity $40/4\times10^{5} = 1\times10^{-4}\ \mathrm{s^{-1}}$ — as large as $f$ itself, in perfectly straight flow.

**Absolute vorticity.** The Earth's rotation contributes $f$, so

$$\eta = \zeta + f.$$

*In words: absolute vorticity is what you observe plus what the planet supplies.* Since $f \approx 10^{-4}\ \mathrm{s^{-1}}$ and typical $\zeta$ is $10^{-5}$ to $10^{-4}$, **the planetary term usually dominates** — a fact with large consequences in [5.2](05-02-potential-vorticity.md) and [5.3](05-03-rossby-waves-beta-effect.md). The ratio $\zeta/f$ is, once again, the Rossby number of [4.1](04-01-pressure-gradient-force-equations-of-motion.md).

**The vorticity equation.** Take the curl of the horizontal momentum equations of [4.1](04-01-pressure-gradient-force-equations-of-motion.md). For a barotropic, frictionless flow the pressure-gradient term drops out entirely (the curl of a gradient is zero), leaving

$$\boxed{\ \frac{D\eta}{Dt} = \frac{D(\zeta+f)}{Dt} = -\,\eta\,\nabla\!\cdot\!\mathbf{v}\ }$$

*In words: a parcel's absolute vorticity changes only when the flow converges or diverges around it.* Three readings, all worth having:

- **Convergence ($\nabla\cdot\mathbf{v} < 0$) increases $\eta$.** Squeezing a column makes it spin faster. This is cyclogenesis.
- **Divergence decreases $\eta$.** Spreading a column out slows its spin.
- **Nothing else matters** at this level of approximation. Pressure gradients do not create vorticity; they only move it around. (The full equation carries a *tilting* term, which converts horizontal vorticity to vertical — negligible at synoptic scale but decisive for tornadoes, in [6.2](06-02-mesoscale-convection-thunderstorms-tornadoes.md) — and a *solenoidal* term that matters in baroclinic flow.)

**Why the planetary term does the work.** Suppose a column starts at rest relative to the ground, $\zeta = 0$, at 45°N so $\eta = f = 1.03\times10^{-4}\ \mathrm{s^{-1}}$. Apply a modest convergence $\nabla\cdot\mathbf{v} = -1\times10^{-5}\ \mathrm{s^{-1}}$:

$$\frac{D\eta}{Dt} = -(1.03\times10^{-4})(-10^{-5}) = 1.03\times10^{-9}\ \mathrm{s^{-2}}.$$

Over 12 hours ($4.32\times10^{4}$ s) that adds $4.4\times10^{-5}\ \mathrm{s^{-1}}$ of vorticity — a substantial cyclonic circulation, **generated entirely out of the Earth's own spin**. Convergence does not create the rotation; it concentrates rotation the planet already had.

## Picture

![Left, uniform-speed flow along curved streamlines with a paddle wheel turning at the centre, labelled curvature vorticity V over R; right, straight parallel streamlines whose speed increases across the flow with a paddle wheel turning in the shear, labelled shear vorticity minus dV by dn](assets/05-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — decomposing a jet's vorticity).** A jet stream flows due east at 60 m s⁻¹ along its axis. The speed falls to 20 m s⁻¹ at 300 km to the north and to 20 m s⁻¹ at 300 km to the south. The flow is straight. Find the vorticity on the northern and southern flanks.

Straight flow means $R_s \to \infty$, so the curvature term vanishes and $\zeta = -\partial V/\partial n$, with $n$ pointing to the *left* of the flow (north, here).

*Northern flank:* speed decreases northward, $\partial V/\partial n = (20-60)/3\times10^{5} = -1.33\times10^{-4}\ \mathrm{s^{-1}}$, so

$$\zeta = -(-1.33\times10^{-4}) = +1.33\times10^{-4}\ \mathrm{s^{-1}} \quad\text{(cyclonic)}.$$

*Southern flank:* speed increases as you move north toward the axis, $\partial V/\partial n = +1.33\times10^{-4}$, so $\zeta = -1.33\times10^{-4}\ \mathrm{s^{-1}}$ (anticyclonic).

*The point.* The jet's **cyclonic shear side is its poleward flank**, and the vorticity there exceeds $f$ at 45°N. This is why mid-latitude cyclones form on the poleward side of the jet, and it happens in flow with no curvature at all — an entirely shear-driven effect that a picture of "air going around a low" would never suggest.

**Example 2 (why you'd care — spinning up a hurricane from nothing).** A tropical disturbance at 15°N covers a 400 km-wide area with no relative vorticity. Low-level convergence of $\nabla\cdot\mathbf{v} = -3\times10^{-5}\ \mathrm{s^{-1}}$ sets in and persists for 24 hours. What relative vorticity develops, and what wind does that imply?

At 15°N, $f = 1.4584\times10^{-4}\sin15^\circ = 3.77\times10^{-5}\ \mathrm{s^{-1}}$, so $\eta_0 = f = 3.77\times10^{-5}$.

The equation $D\eta/Dt = -\eta\nabla\cdot\mathbf{v}$ is exponential growth with rate $|\nabla\cdot\mathbf{v}| = 3\times10^{-5}\ \mathrm{s^{-1}}$:

$$\eta(t) = \eta_0e^{|\nabla\cdot\mathbf{v}|t} = 3.77\times10^{-5}\,e^{3\times10^{-5}\times8.64\times10^{4}} = 3.77\times10^{-5}\,e^{2.59} = 3.77\times10^{-5}\times13.3 = 5.02\times10^{-4}\ \mathrm{s^{-1}}.$$

So $\zeta = \eta - f = 5.02\times10^{-4} - 0.38\times10^{-4} = 4.64\times10^{-4}\ \mathrm{s^{-1}}$ — more than **twelve times** the planetary vorticity it started with. Taking a circular vortex of radius 200 km with $\zeta \approx 2V/R$, the implied tangential wind is

$$V \approx \frac{\zeta R}{2} = \frac{4.64\times10^{-4}\times2\times10^{5}}{2} = 46\ \mathrm{m\,s^{-1}}.$$

A tropical storm has become a hurricane in a day, and the *only* input was sustained convergence.

*And it explains the 5-degree rule.* At the equator $f = 0$, so $\eta_0 = 0$ and the equation gives $D\eta/Dt = 0$ — **exponential growth from zero is still zero**. There is no seed vorticity to amplify. This is the mechanism behind the observation in [4.2](04-02-coriolis-effect.md) that no tropical cyclone forms within about 5 degrees of the equator, now derived rather than asserted.

## Watch out

- **You might think** vorticity means the flow is going in circles. **Actually** it means a *paddle wheel* would turn, which straight sheared flow does perfectly well. Conversely, flow can go around a circle with **zero** vorticity if the speed falls off as $1/r$ — that is the irrotational vortex of [`fluid-dynamics` 2.4](../../fluid-dynamics/lessons/02-04-irrotational-flow-velocity-potential.md), and it is the reason "circulation" and "vorticity" are different words.
- **You might think** vorticity is twice the angular velocity of the flow pattern. **Actually** it is twice the angular velocity of a *fluid element* about its own centre, which is a different thing. For solid-body rotation the two coincide ($\zeta = 2\omega$); for anything else they do not.
- **You might think** low pressure causes cyclonic vorticity. **Actually** in the barotropic vorticity equation the pressure term vanishes identically, because the curl of a gradient is zero. Pressure gradients and vorticity are two views of the same balanced state, and what *changes* vorticity is convergence, not pressure.
- **You might think** $f$ is just a coefficient in the momentum equations. **Actually** it *is* a vorticity — the planetary vorticity of the local horizontal plane. Since it usually exceeds the relative vorticity, most of the atmosphere's spin was there before the weather started.

## One-liner

> Vorticity is spin, made by curvature or shear; the Earth contributes $f$ for free; and convergence, by stretching a column, amplifies whatever spin it already had.

## Problems

**P1 (🟢)** A circular vortex rotates as a solid body with angular velocity $\omega = 2\times10^{-5}\ \mathrm{s^{-1}}$. (a) Compute its relative vorticity. (b) At 40°N, compute its absolute vorticity and the ratio $\zeta/f$.

**P2 (🟡)** A column of air at 50°N has $\zeta = 2\times10^{-5}\ \mathrm{s^{-1}}$. It experiences divergence of $+2\times10^{-5}\ \mathrm{s^{-1}}$ for 18 hours. (a) Find its absolute vorticity at the start. (b) Find its absolute and relative vorticity at the end, assuming it stays at 50°N. (c) Interpret the sign of your relative vorticity, and name the surface feature this describes.

**P3 (🔴, optional)** An irrotational (potential) vortex has tangential velocity $V = k/r$ for constant $k$. (a) Using $\zeta = V/R_s - \partial V/\partial n$ with $R_s = r$ and $n$ pointing inward, show that $\zeta = 0$ everywhere except at the origin. (b) Compute the circulation around a circle of radius $r$ centred on the origin, and show it is independent of $r$. (c) Reconcile (a) and (b) with Stokes' theorem.

<details>
<summary>Solutions</summary>

**P1** (a) For solid-body rotation, $\zeta = 2\omega$:

$$\zeta = 2 \times 2\times10^{-5} = 4\times10^{-5}\ \mathrm{s^{-1}}.$$

(b) At 40°N, $f = 1.4584\times10^{-4}\sin40^\circ = 1.4584\times10^{-4}\times0.6428 = 9.37\times10^{-5}\ \mathrm{s^{-1}}$. So

$$\eta = \zeta + f = 4\times10^{-5} + 9.37\times10^{-5} = 1.34\times10^{-4}\ \mathrm{s^{-1}}, \qquad \frac{\zeta}{f} = \frac{4.0}{9.37} = 0.43.$$

*Check.* $\zeta/f = 0.43$ is a Rossby number well below 1, so this vortex is rotation-dominated and behaves quasi-geostrophically — consistent with a synoptic-scale feature rather than a tornado.

**P2** (a) $f$ at 50°N is $1.4584\times10^{-4}\sin50^\circ = 1.117\times10^{-4}\ \mathrm{s^{-1}}$, so

$$\eta_0 = 2\times10^{-5} + 1.117\times10^{-4} = 1.317\times10^{-4}\ \mathrm{s^{-1}}.$$

(b) With constant divergence, $D\eta/Dt = -\eta\nabla\cdot\mathbf{v}$ integrates to exponential *decay*:

$$\eta = \eta_0e^{-|\nabla\cdot\mathbf{v}|t} = 1.317\times10^{-4}\,e^{-2\times10^{-5}\times6.48\times10^{4}} = 1.317\times10^{-4}\,e^{-1.296} = 1.317\times10^{-4}\times0.2736 = 3.60\times10^{-5}\ \mathrm{s^{-1}}.$$

Relative vorticity:

$$\zeta = \eta - f = 3.60\times10^{-5} - 11.17\times10^{-5} = -7.57\times10^{-5}\ \mathrm{s^{-1}}.$$

(c) The relative vorticity is **negative — anticyclonic**. Divergence has not merely destroyed the original cyclonic spin; it has driven the column's absolute vorticity so far below $f$ that the parcel now rotates *backwards* relative to the ground. This describes a **surface anticyclone**: sustained upper-level convergence and low-level divergence, exactly the sinking, spreading motion of the subtropical highs in [4.4](04-04-thermal-wind-general-circulation.md).

*Check.* Note that $\eta$ stayed positive throughout, as it must in the Northern Hemisphere for a stable flow — absolute vorticity going negative would signal inertial instability. It is $\zeta$, not $\eta$, that changes sign.

**P3** (a) With $V = k/r$, streamline radius $R_s = r$, and $n$ pointing inward (so $\partial/\partial n = -\partial/\partial r$):

$$\zeta = \frac{V}{R_s} - \frac{\partial V}{\partial n} = \frac{k/r}{r} + \frac{\partial}{\partial r}\left(\frac{k}{r}\right) = \frac{k}{r^2} - \frac{k}{r^2} = 0.$$

The curvature and shear contributions cancel exactly — the flow bends one way and shears the other, and a paddle wheel carried around does not turn. This works for every $r > 0$; at $r = 0$ the velocity is undefined.

(b) $$\Gamma = \oint\mathbf{v}\cdot d\boldsymbol\ell = V \times 2\pi r = \frac{k}{r}\times2\pi r = 2\pi k,$$

**independent of $r$** — every circle around the origin, however large, has the same circulation.

(c) Stokes' theorem says $\Gamma = \iint\zeta\,dA$, and we have found $\zeta = 0$ almost everywhere yet $\Gamma \ne 0$. There is no contradiction: **Stokes' theorem requires the field to be differentiable throughout the enclosed region**, and this one is singular at the origin. All the vorticity is concentrated in a point — formally a delta function of strength $2\pi k$ at $r = 0$. Any loop enclosing the origin picks it up; any loop that does not encloses zero circulation.

*Check.* This is the same structure as the magnetic field of a wire, or a quantized vortex in a superfluid: a circulation that is topological rather than local. Meteorologically it is the idealization of a vortex whose spin has been concentrated into a tight core — which is why real tornadoes are nearly irrotational outside the funnel and violently rotational inside it.

</details>

## Flashback

**From Lesson 4.1 (The pressure-gradient force & the equations of motion):** Sea-level pressure falls by 9 hPa over 250 km, with $\rho = 1.2\ \mathrm{kg\,m^{-3}}$. (a) Compute the pressure-gradient force per unit mass. (b) Compute the Rossby number for this system at 50°N, taking $U = 18\ \mathrm{m\,s^{-1}}$ and $L = 8\times10^{5}$ m, and say which balance applies.

<details>
<summary>Solution</summary>

(a) $$\left|\frac{1}{\rho}\frac{\partial p}{\partial n}\right| = \frac{1}{1.2}\times\frac{900\ \mathrm{Pa}}{2.5\times10^{5}\ \mathrm{m}} = \frac{3.6\times10^{-3}}{1.2} = 3.0\times10^{-3}\ \mathrm{m\,s^{-2}}.$$

(b) At 50°N, $f = 1.117\times10^{-4}\ \mathrm{s^{-1}}$, so

$$\mathrm{Ro} = \frac{U}{fL} = \frac{18}{1.117\times10^{-4}\times8\times10^{5}} = \frac{18}{89.4} = 0.20.$$

Well below 1, so rotation dominates and the flow is **near-geostrophic** — the pressure-gradient force is almost entirely balanced by Coriolis, with about a 20 percent ageostrophic residual.

*Check.* That residual is not a rounding error to be ignored: as [4.3](04-03-geostrophic-gradient-wind.md) noted, the small ageostrophic part is what produces the convergence — and hence, by this lesson's vorticity equation, the spin-up. The 20 percent is where all the weather lives.

</details>

## Connections

- **Backward:** $f$ was introduced in [4.2](04-02-coriolis-effect.md) as a deflection rate and reappears here as the planet's own vorticity; the circulation–vorticity link and the general vorticity equation come from [`fluid-dynamics` 2.2](../../fluid-dynamics/lessons/02-02-vorticity-circulation.md), with Stokes' theorem from [`calc-refresher` 5.3](../../calc-refresher/lessons/05-03-green-stokes-divergence.md).
- **Forward:** [5.2](05-02-potential-vorticity.md) turns the stretching term into a conservation law by dividing by the column depth; [5.3](05-03-rossby-waves-beta-effect.md) lets $f$ vary with latitude and gets a wave; [5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md) supplies the divergence that this lesson's equation needs as input.
- **Sideways (fluid dynamics):** the conservation of circulation for an inviscid barotropic fluid is Kelvin's theorem, [`fluid-dynamics` 2.3](../../fluid-dynamics/lessons/02-03-kelvin-circulation-theorem.md) — the vorticity equation here is that theorem restated for a rotating frame, with the planetary contribution made explicit.
