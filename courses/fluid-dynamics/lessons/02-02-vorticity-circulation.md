# Fluid Dynamics · Lesson 2.2: Vorticity and circulation

> ⏱ ~15 min · Module 2: Ideal (inviscid) flow · Builds on: [2.1 Bernoulli's theorem](02-01-bernoulli.md) · Unlocks: [2.3 Kelvin's circulation theorem](02-03-kelvin-circulation-theorem.md)

## Why this matters

A hurricane, a bathtub drain, the tip vortex trailing a wing, the lift that holds a plane up — all of them are stories about *spin* in a fluid. But "spin" is slippery. A fluid can whirl around in giant circles while each little parcel of it never turns at all; and a fluid moving in dead-straight lines can be spinning like mad. To make lift computable (that's [2.6](02-06-flow-past-cylinder-lift.md)) and to state the deepest conservation law of ideal flow (Kelvin's theorem, [2.3](02-03-kelvin-circulation-theorem.md)) we need two clean instruments: **vorticity**, which measures spin *locally*, and **circulation**, its *integral* around a loop. This lesson builds both and shows the one example that breaks everyone's intuition.

## The idea

Drop a tiny paddlewheel into the flow and let the current carry it. Two things can happen. It might just *ride along* — translating, maybe curving around a bend — while its little cross keeps pointing the same way, never turning on its own axle. Or it might *spin*. **Vorticity is exactly the paddlewheel's spin rate** (times two, by convention). It's a purely local test: freeze the fluid everywhere except a speck around the wheel, and ask whether that speck rotates.

Here's the trap. "Going in circles" (the *streamlines* are loops) and "spinning" (the *parcels* rotate) are **completely independent**. A merry-go-round platform: every horse goes in a circle *and* each horse turns to always face forward — that's rotation, vorticity. But a chairlift swinging around a big bend: the chairs travel a circular path while each chair stays upright the whole way — circular streamlines, **zero** spin. Fluids do both. The single most surprising object in this course, the free vortex, has perfectly circular streamlines and *no local spin anywhere* except at one singular point.

**Circulation** is the bookkeeping that ties local spin to the large scale: walk around a closed loop, add up how much the flow pushes you *along* your path, and you get a number — the net "swirl" threaded through that loop.

## The formal version

**Vorticity.** For a velocity field $\mathbf{u}(\mathbf{x},t)$ (units m/s), the vorticity is its curl:

$$\boldsymbol\omega \;=\; \nabla\times\mathbf{u}, \qquad [\boldsymbol\omega] = \mathrm{s^{-1}}.$$

*In words: vorticity is a vector field measuring the local rate and axis of rotation of fluid parcels.* The precise statement behind the paddlewheel picture: a fluid element's instantaneous angular velocity is $\boldsymbol\Omega_{\text{local}} = \tfrac12\boldsymbol\omega$, so **the paddlewheel spins at rate $\tfrac12|\boldsymbol\omega|$** about the axis $\boldsymbol\omega/|\boldsymbol\omega|$. A flow with $\boldsymbol\omega = \mathbf{0}$ *everywhere* is called **irrotational** — no paddlewheel anywhere spins, however the flow curves.

**Circulation.** Around a closed curve $C$ (with a chosen direction), the circulation is the line integral of velocity along it:

$$\Gamma \;=\; \oint_C \mathbf{u}\cdot d\boldsymbol\ell, \qquad [\Gamma] = \mathrm{m^2/s}.$$

*In words: $\Gamma$ adds up the component of velocity pointing along the loop — how much the flow "goes around" $C$.*

**Stokes' theorem** (straight from [`calc-refresher`](../../calc-refresher/syllabus.md)) welds the two together. For any surface $S$ spanning $C$,

$$\boxed{\;\Gamma = \oint_C \mathbf{u}\cdot d\boldsymbol\ell = \iint_S (\nabla\times\mathbf{u})\cdot d\mathbf{A} = \iint_S \boldsymbol\omega\cdot d\mathbf{A}.\;}$$

*In words: circulation around a loop equals the flux of vorticity through any surface capping it* — the total local spin threaded through the loop. This is the master identity of the whole module.

**Vortex lines and tubes.** A **vortex line** is a curve everywhere tangent to $\boldsymbol\omega$ (the field line of vorticity, just as a streamline is a field line of $\mathbf{u}$). Bundle the vortex lines through a small closed curve and you get a **vortex tube**; by Stokes, the circulation around the tube is its **strength**, and — because $\nabla\cdot\boldsymbol\omega = \nabla\cdot(\nabla\times\mathbf{u}) = 0$ — that strength is the same at every cross-section. A vortex tube cannot start or stop in the fluid; this is the backbone of Helmholtz's theorems in [2.3](02-03-kelvin-circulation-theorem.md).

To compute curl for these swirling flows we use the $z$-component in plane polar coordinates $(r,\theta)$, with $\mathbf{u} = u_r\,\hat{\mathbf r} + u_\theta\,\hat{\boldsymbol\theta}$:

$$\omega_z = \frac{1}{r}\frac{\partial(r\,u_\theta)}{\partial r} - \frac{1}{r}\frac{\partial u_r}{\partial\theta}.$$

## Picture

![Left: solid-body rotation, concentric streamlines with a paddlewheel that spins and uniform coral vorticity everywhere. Right: a free vortex, concentric streamlines with a paddlewheel that does not spin for r>0 and a coral vorticity spike at the core; circulation Γ marked around a loop enclosing the core.](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (solid-body rotation — spins *and* goes in circles).** Rotate the fluid like a rigid turntable at angular speed $\Omega$: $u_\theta = \Omega r$, $u_r = 0$. Then

$$\omega_z = \frac1r\frac{\partial}{\partial r}\big(r\cdot\Omega r\big) = \frac1r\frac{\partial}{\partial r}\big(\Omega r^2\big) = \frac1r\,(2\Omega r) = 2\Omega.$$

So $\boldsymbol\omega = 2\Omega\,\hat{\mathbf z}$: **uniform vorticity, everywhere**. The paddlewheel spins at $\tfrac12|\boldsymbol\omega| = \Omega$ — exactly the turntable rate, as it must, since every parcel is locked into the rigid rotation. Circulation around a circle of radius $R$: directly, $\Gamma = u_\theta\cdot 2\pi R = \Omega R\cdot 2\pi R = 2\pi\Omega R^2$; via Stokes, $\Gamma = \iint \boldsymbol\omega\cdot d\mathbf{A} = 2\Omega\cdot\pi R^2$ — same answer. ✓

**Example 2 (the free/line vortex — goes in circles but does *not* spin).** Now the flow that runs the world of aerodynamics: $u_\theta = \dfrac{\Gamma}{2\pi r}$, $u_r = 0$, with $\Gamma$ a constant (speed *falls off* as $1/r$). For every $r>0$,

$$\omega_z = \frac1r\frac{\partial}{\partial r}\!\left(r\cdot\frac{\Gamma}{2\pi r}\right) = \frac1r\frac{\partial}{\partial r}\!\left(\frac{\Gamma}{2\pi}\right) = 0.$$

**The flow is irrotational** — a paddlewheel carried around one of those circular streamlines never spins on its axle, even as it orbits. Yet the circulation around any circle enclosing the center is

$$\Gamma_C = \oint \mathbf{u}\cdot d\boldsymbol\ell = \frac{\Gamma}{2\pi r}\cdot 2\pi r = \Gamma,$$

independent of $r$ — nonzero, and equal to the constant we named $\Gamma$ (that's why we called it that). How can $\Gamma_C \ne 0$ if $\boldsymbol\omega = 0$ everywhere the loop can see? Because it *isn't* zero everywhere: all the vorticity is crushed into the singular core at $r=0$, a **delta-function spike** $\boldsymbol\omega = \Gamma\,\delta^2(\mathbf{x})\,\hat{\mathbf z}$ (the same point-singularity idea as a point source or point charge). Stokes still balances: any loop enclosing the core catches the whole spike and reads $\Gamma$; any loop that avoids the core encloses only irrotational fluid and reads $0$. The vortex is *all* circulation, concentrated at a point.

## Watch out

- **You might think circular streamlines mean the fluid is spinning.** They don't. The free vortex has perfectly circular streamlines and zero vorticity for $r>0$. "Curved path" is a property of the streamline; "spin" is $\nabla\times\mathbf{u}$. Keep them separate.
- **You might think straight streamlines mean no spin.** Also false. Simple shear $\mathbf{u} = (\gamma y,\,0)$ flows in perfectly straight parallel lines, yet $\omega_z = -\gamma \ne 0$: a paddlewheel in shear spins, because the top of it moves faster than the bottom. (This is Problem 1.)
- **You might read $\boldsymbol\omega$ as the flow's angular velocity.** It's *twice* it. The factor of 2 is a convention baked into the curl; forget it and every spin rate is off by half.
- **You might expect the free vortex's circulation to shrink on bigger loops** (the speed does fall off). It doesn't — the $1/r$ decay in speed exactly cancels the $2\pi r$ growth in path length, so $\Gamma$ is the same for every enclosing loop. That constancy *is* Stokes' theorem talking.

## One-liner

> Vorticity $\boldsymbol\omega=\nabla\times\mathbf{u}$ is twice a fluid parcel's spin — a paddlewheel's rate — and its flux through a loop is the circulation $\Gamma=\oint\mathbf{u}\cdot d\boldsymbol\ell$; going in circles and spinning are different things, and the free vortex proves it.

## Problems

**P1 (🟢)** A simple shear flow is $\mathbf{u} = (\gamma y,\,0,\,0)$ with constant shear rate $\gamma$ (units s⁻¹). Compute the vorticity $\boldsymbol\omega$. The streamlines are straight horizontal lines — so does a tiny paddlewheel dropped in this flow spin, and if so, how fast and which way?

**P2 (🟡)** For the free vortex $u_\theta = \Gamma/(2\pi r)$, compute the circulation around (a) a circle of radius $R$ centered on the core, and (b) a *square* loop of side $2R$ that lies entirely in $r>0$ and does **not** enclose the core. Explain the second answer using Stokes' theorem in one sentence — without integrating around the square.

**P3 (🔴, optional)** A **Rankine vortex** models a real tornado: a solid-body core out to radius $a$ smoothly matched to a free vortex outside,
$$u_\theta(r) = \begin{cases}\Omega r, & r \le a,\\[2pt] \Omega a^2/r, & r > a.\end{cases}$$
Find the vorticity in each region, and the circulation around a circle of radius $R>a$. Verify that this circulation equals the flux of vorticity through the core, confirming Stokes' theorem for a loop that sees only the core's spin.

<details>
<summary>Solutions</summary>

**P1** In Cartesian, $\omega_z = \partial_x u_y - \partial_y u_x = \partial_x(0) - \partial_y(\gamma y) = -\gamma$, and $\omega_x=\omega_y=0$. So

$$\boldsymbol\omega = -\gamma\,\hat{\mathbf z}.$$

Nonzero — the paddlewheel **does** spin, at rate $\tfrac12|\boldsymbol\omega| = \tfrac12\gamma$, clockwise (the $-\hat{\mathbf z}$ sense) when $\gamma>0$. Intuition: the fluid at the wheel's top moves right faster than at its bottom, so the wheel gets torqued forward-over-the-top → clockwise. Straight streamlines, real spin.

*Check.* Units: $[\gamma] = \mathrm{s^{-1}} = [\boldsymbol\omega]$ ✓. Sanity: shear is the canonical example of vorticity without curved paths — pure shear is exactly half rotation plus half stretching, so its spin is $\tfrac12\gamma$, matching $\tfrac12|\boldsymbol\omega|$. ✓

**P2** (a) On the circle, $\mathbf{u}$ is tangent with magnitude $\Gamma/(2\pi R)$, and $d\boldsymbol\ell$ has length $2\pi R$:

$$\Gamma_{(a)} = \frac{\Gamma}{2\pi R}\cdot 2\pi R = \Gamma.$$

(b) $\Gamma_{(b)} = 0$. By Stokes, the circulation around the square equals $\iint_S\boldsymbol\omega\cdot d\mathbf{A}$ over any surface it caps; since the square lies wholly in $r>0$ where $\boldsymbol\omega=0$, that flux — and hence the circulation — is zero. (No enclosed core, no spike, no swirl.)

*Check.* The two answers together are the whole point of the lesson: the circulation of a free vortex is $\Gamma$ if the loop encloses the core and $0$ otherwise — a topological, all-or-nothing count of whether the singular vortex line pierces the loop. ✓

**P3** *Core* $r\le a$: solid-body rotation, so from Example 1, $\omega_z = 2\Omega$ (uniform). *Outside* $r>a$: free-vortex form, so from Example 2,

$$\omega_z = \frac1r\frac{\partial}{\partial r}\!\left(r\cdot\frac{\Omega a^2}{r}\right) = \frac1r\frac{\partial}{\partial r}(\Omega a^2) = 0.$$

The vorticity is bottled up entirely inside the core. Circulation around $r=R>a$, directly:

$$\Gamma_R = u_\theta(R)\cdot 2\pi R = \frac{\Omega a^2}{R}\cdot 2\pi R = 2\pi\Omega a^2.$$

Flux of vorticity through the disk of radius $R$: only the core contributes,

$$\iint \boldsymbol\omega\cdot d\mathbf{A} = (2\Omega)\cdot(\pi a^2) = 2\pi\Omega a^2 = \Gamma_R. \;✓$$

Stokes holds, and the outer field is irrotational despite carrying all the circulation — a finite-core version of the free vortex, with the delta spike smeared into a disk.

*Check.* As $a\to 0$ with $2\pi\Omega a^2 = \Gamma$ held fixed (so $\Omega\to\infty$), the core shrinks to a point and the Rankine vortex becomes the ideal free vortex of Example 2, circulation $\Gamma$. Units: $[\Omega a^2] = \mathrm{s^{-1}\,m^2} = \mathrm{m^2/s} = [\Gamma]$ ✓.

</details>

## Flashback

**From Lesson 2.1 (Bernoulli's theorem):** Water ($\rho = 1000\ \mathrm{kg/m^3}$) flows steadily through a horizontal pipe that narrows from a wide section to a throat. In the wide section the speed is $u_1 = 2\ \mathrm{m/s}$; the throat is shaped so continuity forces $u_2 = 6\ \mathrm{m/s}$. Using Bernoulli along a central streamline, find the pressure *drop* $p_1 - p_2$ from the wide section to the throat. (Fresh variant — a contraction, not a Pitot tube.)

<details>
<summary>Solution</summary>

The pipe is horizontal, so the gravity term $\rho g z$ is the same at both stations and cancels. Bernoulli along the streamline gives $p_1 + \tfrac12\rho u_1^2 = p_2 + \tfrac12\rho u_2^2$, so

$$p_1 - p_2 = \tfrac12\rho\,(u_2^2 - u_1^2) = \tfrac12(1000)\big(6^2 - 2^2\big) = 500\times 32 = 16{,}000\ \mathrm{Pa} = 16\ \mathrm{kPa}.$$

*Check.* Faster flow ⇒ lower pressure, so $p_1 > p_2$ and the drop is positive ✓ — the Venturi effect. Units: $\mathrm{(kg/m^3)(m/s)^2} = \mathrm{kg\,m^{-1}s^{-2}} = \mathrm{Pa}$ ✓.

</details>

## Connections

- **Backward:** vorticity and circulation are built from the curl and Stokes' theorem of [`calc-refresher`](../../calc-refresher/syllabus.md); the singular core of the free vortex is the same point-singularity/delta idea used for a point source or a point charge. Bernoulli ([2.1](02-01-bernoulli.md)) will soon get a stronger form precisely *because* many useful flows turn out to be irrotational.
- **Forward:** [2.3 Kelvin's circulation theorem](02-03-kelvin-circulation-theorem.md) shows $\Gamma$ around a material loop is *frozen* in an ideal fluid — so vortex lines move with the flow (Helmholtz), and an initially irrotational flow stays irrotational. That fact makes [2.4](02-04-irrotational-flow-velocity-potential.md)'s velocity potential legitimate and lets [2.6](02-06-flow-past-cylinder-lift.md) put circulation $\Gamma$ around a wing to generate lift $L=\rho U\Gamma$.
- **Sideways:** the irrotational free vortex is one of the elementary building blocks of the 2-D complex potential ([2.5](02-05-complex-potential.md)), where it becomes $w(z) = \frac{-i\Gamma}{2\pi}\ln z$ — the analytic-function machinery shared with [`complex-analysis`](../../complex-analysis/syllabus.md) and [`mathematical-methods-physics`](../../mathematical-methods-physics/syllabus.md). The concentrated-vorticity singularity is a fluid cousin of the winding-number/residue idea there.
