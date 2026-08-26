# Aerodynamics · Lesson 1.2: Potential flow recalled, and the elementary-flow kit

> ⏱ ~15 min · Module 1: Aerodynamic forces and potential flow · Builds on: [`fluid-dynamics` 2.4](../../fluid-dynamics/lessons/02-04-irrotational-flow-velocity-potential.md), [`fluid-dynamics` 2.5](../../fluid-dynamics/lessons/02-05-complex-potential.md) · Unlocks: [1.3 The cylinder, pressure coefficient, and Kutta–Joukowski](01-03-cylinder-pressure-coefficient-kutta-joukowski.md), [2.2 The vortex sheet and thin-airfoil equation](02-02-vortex-sheet-thin-airfoil-equation.md)

## Why this matters

Air is viscous, and yet the most useful theory of lift ignores viscosity entirely. That is not laziness: outside a thin layer on the surface, the flow over a wing at flight Reynolds numbers really is inviscid and irrotational to excellent accuracy, and [potential flow](../reference.md#potential-flow) is exact there.

You have already built the machinery. [`fluid-dynamics` 2.4](../../fluid-dynamics/lessons/02-04-irrotational-flow-velocity-potential.md) reduced the Euler equation to Laplace's equation, and [2.5](../../fluid-dynamics/lessons/02-05-complex-potential.md) supplied the kit of elementary solutions. **This lesson is a reload, not a re-derivation** — a fast pass to fix notation, followed by the part that is genuinely aerodynamic: using superposition to *build bodies*, and seeing why that leads to the vortex sheet that models an airfoil.

## The idea

Two hypotheses collapse the whole problem.

**Irrotational**: $\nabla\times\mathbf{V} = 0$, so the velocity is a gradient, $\mathbf{V} = \nabla\phi$.

**Incompressible**: $\nabla\cdot\mathbf{V} = 0$.

Together they give $\nabla^2\phi = 0$ — **linear**, and linearity is the entire engine of what follows. Add two solutions and you get a solution; the velocity fields simply add.

Why is a flow over a wing irrotational? [`fluid-dynamics` 2.3](../../fluid-dynamics/lessons/02-03-kelvin-circulation-theorem.md)'s Kelvin theorem answers it: a fluid element that starts irrotational stays irrotational under inviscid, barotropic forces. The air far upstream is uniform and therefore irrotational, so it stays that way — **except** where viscosity acts, which is the thin boundary layer and the wake. Outside those, potential flow is not an approximation but a consequence.

**The aerodynamicist's use of superposition is different from the mathematician's.** You do not solve a boundary-value problem on a given shape. Instead you *add singularities to a uniform stream until a streamline happens to trace out a body you like* — and then declare that streamline to be the surface. Since no flow crosses a streamline, replacing it with a solid wall changes nothing.

That is a strange inversion, and it is the whole method:

**Direct problem** (hard): given a shape, find the flow.
**Indirect problem** (easy): given some singularities, find what shape they produce.

A source in a stream produces a semi-infinite body. A source-and-sink pair produces a closed oval. A doublet produces a circle. And a *continuous distribution* of vortices along a line produces — as [2.2](02-02-vortex-sheet-thin-airfoil-equation.md) will show — an airfoil.

## The formal version

**Governing equations.**

$$\boxed{\;\mathbf{V} = \nabla\phi, \qquad \nabla^2\phi = 0.\;}$$

In two dimensions a **stream function** $\psi$ also exists, with

$$u = \frac{\partial\phi}{\partial x} = \frac{\partial\psi}{\partial y}, \qquad v = \frac{\partial\phi}{\partial y} = -\frac{\partial\psi}{\partial x},$$

and in polar coordinates

$$V_r = \frac{\partial\phi}{\partial r} = \frac{1}{r}\frac{\partial\psi}{\partial\theta}, \qquad V_\theta = \frac{1}{r}\frac{\partial\phi}{\partial\theta} = -\frac{\partial\psi}{\partial r}.$$

**$\psi = $ constant is a streamline**, and the difference $\psi_2-\psi_1$ is the volume flow per unit span between two streamlines. That flux interpretation is what makes the body-building method work.

**The kit.** Every one of these satisfies $\nabla^2\phi = 0$, and any sum of them does too.

| Flow | $\phi$ | $\psi$ | Velocity |
|---|---|---|---|
| Uniform stream $V_\infty$ along $x$ | $V_\infty x = V_\infty r\cos\theta$ | $V_\infty y = V_\infty r\sin\theta$ | $u = V_\infty$, $v = 0$ |
| Source, strength $\Lambda$ | $\dfrac{\Lambda}{2\pi}\ln r$ | $\dfrac{\Lambda}{2\pi}\theta$ | $V_r = \dfrac{\Lambda}{2\pi r}$, $V_\theta = 0$ |
| Doublet, strength $\kappa$ | $\dfrac{\kappa}{2\pi}\dfrac{\cos\theta}{r}$ | $-\dfrac{\kappa}{2\pi}\dfrac{\sin\theta}{r}$ | $V_r = -\dfrac{\kappa\cos\theta}{2\pi r^2}$, $V_\theta = -\dfrac{\kappa\sin\theta}{2\pi r^2}$ |
| Vortex, circulation $\Gamma$ | $-\dfrac{\Gamma}{2\pi}\theta$ | $\dfrac{\Gamma}{2\pi}\ln r$ | $V_r = 0$, $V_\theta = -\dfrac{\Gamma}{2\pi r}$ |

**Sign conventions to fix now.** $\Lambda>0$ is a source (outflow), $\Lambda<0$ a sink. $\Gamma>0$ is taken **clockwise** here, which is the sense that produces *upward* lift on a left-to-right stream — the aerodynamics convention, and the opposite of the mathematician's positive-counterclockwise habit. Getting this backwards flips the sign of every lift in the course.

**Body building.** Superpose, find the stagnation points, and identify the streamline through them.

**Semi-infinite (Rankine) body** — source of strength $\Lambda$ at the origin in a stream $V_\infty$:

$$\psi = V_\infty r\sin\theta+\frac{\Lambda}{2\pi}\theta.$$

$$\boxed{\;x_{\rm stag} = -\frac{\Lambda}{2\pi V_\infty}, \qquad \text{far-downstream half-width } h = \frac{\Lambda}{2V_\infty}.\;}$$

*In words: the source pushes the stream aside, and the body it forms is exactly wide enough to carry the source's volume flux.* That is why $h$ depends only on $\Lambda/V_\infty$ — mass conservation and nothing else.

**Rankine oval** — source $+\Lambda$ at $x = -a$ and sink $-\Lambda$ at $x = +a$:

$$\boxed{\;\text{half-length } \ell = \sqrt{a^2+\frac{\Lambda a}{\pi V_\infty}},\;}$$

with the half-height found by solving $\psi = 0$ on the $y$-axis. Varying $\Lambda a/V_\infty$ sweeps the oval from nearly flat to nearly circular.

**Cylinder** — a doublet in a stream. The limit of the oval as the source and sink merge; this is [`fluid-dynamics` 2.6](../../fluid-dynamics/lessons/02-06-flow-past-cylinder-lift.md)'s case and [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)'s starting point.

**Why this is not enough.** Sources and doublets produce fore-aft symmetric bodies, and a symmetric flow produces **no lift**. The only element in the kit that breaks the symmetry is the **vortex** — which is why lift, in this whole theory, is synonymous with circulation.

**The route to an airfoil.** A single vortex gives a lifting cylinder. A *sheet* of vortices of varying strength $\gamma(s)$ laid along a curved line gives an arbitrary thin lifting shape:

$$\Gamma = \int\gamma(s)\,ds,$$

which is exactly the model [2.2](02-02-vortex-sheet-thin-airfoil-equation.md) sets up and [2.3](02-03-symmetric-thin-airfoil.md) solves.

**What potential flow cannot do.** It has no viscosity, so no boundary layer, no skin friction, no separation, and — famously — **no drag at all** ([1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)). It also cannot determine the circulation by itself; $\Gamma$ is a free parameter until a physical condition fixes it, which is the Kutta condition of [2.1](02-01-airfoil-geometry-kutta-condition.md).

## Picture

![A two-panel figure. Left: four elementary flows drawn as small streamline patterns in a row — a uniform stream as parallel horizontal lines, a source as radial rays emanating from a point, a doublet as two lobes of curved streamlines looping from one side to the other, and a vortex as concentric circles — each labelled with its potential and stream function. Right: a superposition sequence showing a uniform stream plus a source producing a semi-infinite body with its stagnation point marked upstream of the source and its width asymptoting downstream, above a second frame showing a uniform stream plus a source and sink pair producing a closed Rankine oval with two stagnation points, and a third frame showing a uniform stream plus a doublet producing a circle.](assets/01-02-fig1.svg)

Left: the four building blocks. Only the vortex is not fore-aft symmetric, and only the vortex can make lift.

Right: the indirect method. Add singularities, look for a closed streamline, and call it a body. Bringing the source and sink of the middle frame together in the limit gives the circle of the bottom one.

## Worked examples

**Example 1 (a source in a stream, and reading the body it makes).** A source of strength $\Lambda = 12$ m²/s sits at the origin in a stream $V_\infty = 30$ m/s. Find the stagnation point, the body's far-downstream width, and the maximum surface speed.

*Stagnation point.* On the $x$-axis upstream the velocity is $V_\infty+\Lambda/(2\pi x)$ with $x<0$:

$$V_\infty+\frac{\Lambda}{2\pi x} = 0 \quad\Longrightarrow\quad x_{\rm stag} = -\frac{\Lambda}{2\pi V_\infty} = -\frac{12}{2\pi(30)} = -\frac{12}{188.50} = -0.0637\ \mathrm{m}.$$

**The nose of the body sits 6.4 cm upstream of the source.**

*Far-downstream width.* The dividing streamline is $\psi = \Lambda/2$ (its value at the stagnation point, where $\theta = \pi$ and $r\sin\theta = 0$). Far downstream $\theta\to0$, so

$$V_\infty h+\frac{\Lambda}{2\pi}(0) = \frac{\Lambda}{2} \quad\Longrightarrow\quad h = \frac{\Lambda}{2V_\infty} = \frac{12}{60} = 0.200\ \mathrm{m},$$

a full width of $0.400$ m.

*Sanity check by mass conservation.* Far downstream the body has width $2h$ and the flow outside it has recovered to $V_\infty$. The source injects $\Lambda = 12$ m²/s of fluid per unit span, and that fluid occupies a strip of width $2h$ moving at $V_\infty$:

$$2hV_\infty = 2(0.200)(30) = 12\ \mathrm{m^2/s} = \Lambda\ \checkmark$$

**The body's downstream width is entirely a statement of where the source's fluid went.**

*Maximum surface speed.* Sweeping the surface streamline and evaluating $|\mathbf{V}| = \sqrt{u^2+v^2}$ gives a maximum of

$$V_{\max} = 37.79\ \mathrm{m/s} \quad\text{at}\quad (x,y) = (0.066,\ 0.130)\ \mathrm{m},$$

i.e. about $63°$ around from the nose. The corresponding pressure coefficient (defined properly in [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)) is

$$C_p = 1-\left(\frac{V}{V_\infty}\right)^2 = 1-\left(\frac{37.79}{30}\right)^2 = 1-1.587 = -0.587.$$

*Reading it.* The flow accelerates to $126\%$ of free stream over the shoulder — suction — then decelerates toward $V_\infty$ far downstream. At the nose $V = 0$ and $C_p = +1$, the stagnation value.

**That deceleration from the shoulder aft is an adverse pressure gradient**, and it is the reason a real body of this shape would develop a thickening boundary layer and eventually separate ([3.3](03-03-separation-stall-drag-polar.md)). Potential flow gives you the pressure distribution that *drives* the viscous behaviour, even though it cannot compute the viscous behaviour itself. **That division of labour is how the whole subject is organized.**

**Example 2 (a closed body, and what the kit can and cannot make).** Put a source $+\Lambda = 12$ m²/s at $x = -0.5$ m and a sink $-\Lambda$ at $x = +0.5$ m in the same $30$ m/s stream.

*Half-length.* On the $x$-axis, the stream plus source plus sink gives

$$u = V_\infty+\frac{\Lambda}{2\pi}\left[\frac{1}{x+a}-\frac{1}{x-a}\right] = 0$$

at the stagnation points. Solving,

$$\ell = \sqrt{a^2+\frac{\Lambda a}{\pi V_\infty}} = \sqrt{0.25+\frac{12(0.5)}{\pi(30)}} = \sqrt{0.25+0.06366} = \sqrt{0.31366} = 0.560\ \mathrm{m}.$$

*Half-height.* On the $y$-axis, $\psi = 0$ requires

$$V_\infty h+\frac{\Lambda}{2\pi}\left[\arctan\frac{h}{a}-\arctan\frac{h}{-a}\right] = 0,$$

which solves numerically to $h = 0.1605$ m.

*The oval's proportions.*

$$\frac{h}{\ell} = \frac{0.1605}{0.560} = 0.287,$$

a body about $29\%$ as thick as it is long — a plausible strut or fuselage cross-section.

*What the parameter does.* The single group $\Lambda/(V_\infty a)$ controls the shape:

| $\Lambda/(V_\infty a)$ | Body |
|---|---|
| $\to0$ | a thin sliver — the source and sink nearly cancel |
| $0.8$ (this case) | a $29\%$-thick oval |
| large | approaches a circle of radius $\sqrt{\Lambda a/(\pi V_\infty)}$ |

**In the limit $a\to0$ with $\Lambda a$ held fixed, the pair becomes a doublet and the oval becomes exactly a circle** — which is the cylinder of [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md).

*Now the limitation, and it is the point of the example.* Every body this kit produces is **fore-aft symmetric**, because sources and sinks and doublets are. A symmetric body in a symmetric flow has a symmetric pressure distribution, which integrates to:

$$\text{lift} = 0, \qquad \text{drag} = 0.$$

**No amount of sources and doublets will ever produce lift.** An airfoil is not a Rankine oval with a sharp tail — it is a shape carrying *circulation*, and circulation comes only from the vortex.

*Where that leaves us.* Two things are still missing, and the next several lessons supply them in order:

**A lifting element.** The vortex — added to the cylinder in [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md), and distributed as a sheet along an airfoil in [2.2](02-02-vortex-sheet-thin-airfoil-equation.md).

**A rule to fix how much.** Potential flow permits *any* circulation; the physics of a sharp trailing edge picks one, and that is the **Kutta condition** of [2.1](02-01-airfoil-geometry-kutta-condition.md).

## Watch out

- **You might expect potential flow to give drag.** It gives exactly zero ([1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)). Drag needs viscosity, which arrives in Module 3.
- **You might use the counterclockwise-positive vortex convention.** This course takes $\Gamma>0$ clockwise, so that a left-to-right stream gets upward lift. Mixing conventions inverts every lift.
- **You might confuse source strength with volume flow rate per unit length.** $\Lambda$ *is* the volume flux per unit span, in m²/s. It is not a velocity.
- **You might expect the source's body to close.** A single source produces a semi-infinite body; only a matched source-and-sink pair closes.
- **You might apply potential flow inside the boundary layer.** It describes the *outer* flow; its surface pressure is the boundary condition the boundary layer sees, not the flow at the wall.
- **You might think a doublet is a physical object.** It is a mathematical limit of a source and sink brought together, and like the source it is a singularity that must live *inside* the body it creates.
- **You might forget that superposition needs the same reference frame and the same free stream.** Adding two solutions with different $V_\infty$ gives nonsense.

## One-liner

> Irrotational plus incompressible gives $\nabla^2\phi = 0$, so solutions add — and the aerodynamicist exploits that backwards, dropping sources and doublets into a stream until a streamline traces a body, then adding vortices because they are the only element in the kit that can make lift.

## Problems

**P1 (🟢)** A source of strength $\Lambda = 20$ m²/s sits in a stream of $V_\infty = 25$ m/s. (a) Find the stagnation point. (b) Find the body's far-downstream half-width. (c) Verify by mass conservation.

**P2 (🟡)** A uniform stream $V_\infty = 40$ m/s flows past a source of strength $\Lambda = 30$ m²/s at the origin. (a) Find the stagnation point. (b) Find the velocity components at the point $(x,y) = (0,\ 0.15)$ m. (c) Find the speed and $C_p$ there. (d) Determine whether that point lies on the body surface.

**P3 (🔴)** A Rankine oval is formed by a source and sink of strength $\Lambda$ at $x = \mp a$ in a stream $V_\infty$, with $a = 0.4$ m, $V_\infty = 50$ m/s. (a) Find the $\Lambda$ that gives a half-length of $0.50$ m. (b) Find the corresponding half-height and thickness ratio. (c) Find the maximum surface speed and the minimum $C_p$. (d) Explain why this shape, despite being a perfectly sensible strut section, produces exactly zero lift and zero drag in this theory — and state which of those two zeros is the more misleading.

<details>
<summary>Solutions</summary>

**P1** (a) $$x_{\rm stag} = -\frac{\Lambda}{2\pi V_\infty} = -\frac{20}{2\pi(25)} = -\frac{20}{157.08} = -0.1273\ \mathrm{m}.$$

(b) $$h = \frac{\Lambda}{2V_\infty} = \frac{20}{50} = 0.400\ \mathrm{m}.$$

(c) The body far downstream is $2h = 0.800$ m wide, carrying the source's fluid at $V_\infty$:

$$2hV_\infty = 0.800(25) = 20\ \mathrm{m^2/s} = \Lambda\ \checkmark$$

**P2** (a) $$x_{\rm stag} = -\frac{30}{2\pi(40)} = -\frac{30}{251.33} = -0.1194\ \mathrm{m}.$$

(b) At $(0,\ 0.15)$: $r = 0.15$ m, $\theta = 90°$, so $x = 0$ and $y = 0.15$.

$$u = V_\infty+\frac{\Lambda}{2\pi}\frac{x}{r^2} = 40+\frac{30}{2\pi}\frac{0}{0.0225} = 40.000\ \mathrm{m/s},$$

$$v = \frac{\Lambda}{2\pi}\frac{y}{r^2} = \frac{30}{6.2832}\cdot\frac{0.15}{0.0225} = 4.7746(6.6667) = 31.831\ \mathrm{m/s}.$$

(c) $$V = \sqrt{40.000^2+31.831^2} = \sqrt{1600.0+1013.2} = \sqrt{2613.2} = 51.12\ \mathrm{m/s},$$

$$C_p = 1-\left(\frac{51.12}{40}\right)^2 = 1-1.6333 = -0.633.$$

(d) The body surface is the streamline $\psi = \Lambda/2 = 15$ m²/s. At this point,

$$\psi = V_\infty y+\frac{\Lambda}{2\pi}\theta = 40(0.15)+\frac{30}{2\pi}\left(\frac{\pi}{2}\right) = 6.000+7.500 = 13.500\ \mathrm{m^2/s}.$$

$$13.500 \neq 15.000,$$

so **the point is not on the surface** — it lies *inside* the body (since $\psi<\Lambda/2$ on the upper half means it is between the axis and the dividing streamline).

*Where the surface actually is at $\theta = 90°$:*

$$40y+7.500 = 15.000 \quad\Longrightarrow\quad y = \frac{7.500}{40} = 0.1875\ \mathrm{m}.$$

The surface is at $0.1875$ m, not $0.15$ m.

*Why this check matters.* The potential-flow solution is defined everywhere, including inside the body where it is physically meaningless — it is describing the flow that the source would produce if the body were not there. **Always verify that a point is on the correct streamline before quoting a surface pressure**, or you will report the pressure at a location that is inside the metal.

**P3** (a) $$\ell^2 = a^2+\frac{\Lambda a}{\pi V_\infty} \quad\Longrightarrow\quad \Lambda = \frac{\pi V_\infty\left(\ell^2-a^2\right)}{a}.$$

$$\Lambda = \frac{\pi(50)\left(0.25-0.16\right)}{0.4} = \frac{157.08(0.09)}{0.4} = \frac{14.137}{0.4} = 35.34\ \mathrm{m^2/s}.$$

(b) The half-height solves $\psi = 0$ on the $y$-axis. With $\arctan(h/(-a)) = \pi-\arctan(h/a)$ for $h>0$,

$$V_\infty h+\frac{\Lambda}{2\pi}\left[2\arctan\frac{h}{a}-\pi\right] = 0,$$

$$50h+\frac{35.34}{2\pi}\left[2\arctan\frac{h}{0.4}-\pi\right] = 0, \qquad 50h = 5.625\left[\pi-2\arctan\frac{h}{0.4}\right].$$

Solving numerically:

$$\boxed{h = 0.234\ \mathrm{m}.}$$

*Check:* $\arctan(0.234/0.4) = \arctan(0.585) = 0.5296$ rad, so the right side is $5.625\left[3.1416-1.0592\right] = 5.625(2.0824) = 11.71$, and the left side is $50(0.234) = 11.71$ ✓.

$$\frac{h}{\ell} = \frac{0.234}{0.500} = 0.469.$$

**A thickness ratio of 47%** — a fat oval, closer to a circle than to a strut. (For comparison, Example 2's oval was 29%.)

(c) Sweeping the surface streamline numerically and evaluating $|\mathbf{V}|$ at each point:

$$V_{\max} = 72.05\ \mathrm{m/s} \quad\text{at}\quad (x,y) = (0.259,\ 0.209)\ \mathrm{m},$$

about $39°$ around from the nose — near, but not exactly at, the widest point.

$$C_{p,\min} = 1-\left(\frac{72.05}{50}\right)^2 = 1-2.076 = -1.076.$$

*Sanity check against the limiting cases.* A vanishingly thin body has $V_{\max}\to V_\infty$ and $C_{p,\min}\to0$; a circular cylinder — the $h/\ell\to1$ limit — has $V_{\max} = 2V_\infty$ and $C_{p,\min} = -3$ ([1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)). This oval at $h/\ell = 0.47$ reaches $1.44V_\infty$ and $C_p = -1.08$, sitting between them ✓. **Fatter bodies force the flow to accelerate more and suffer deeper suction peaks** — the reason thick sections have low critical Mach numbers ([4.6](04-06-subsonic-compressibility-transonic.md)).

(d) *Why zero lift.* The source and sink are symmetric about $x = 0$, so the whole flow field satisfies $u(x,-y) = u(x,y)$ and $v(x,-y) = -v(x,y)$. The speed — and therefore the pressure — is symmetric top-to-bottom. Integrating a top-bottom-symmetric pressure over a top-bottom-symmetric body gives no net vertical force.

**Nothing in the kit so far breaks that symmetry.** Only a vortex can, and there is none here.

*Why zero drag.* The flow is *also* fore-aft symmetric: the sink at $+a$ mirrors the source at $-a$, so the pressure at $(x,y)$ equals the pressure at $(-x,y)$. The high pressure at the nose is exactly matched by high pressure at the tail, and the two push in opposite directions. This is **d'Alembert's paradox** ([`fluid-dynamics` 2.6](../../fluid-dynamics/lessons/02-06-flow-past-cylinder-lift.md)).

*Which zero is more misleading — and it is the drag.*

**The zero lift is honest.** This body genuinely produces no lift. It is symmetric and unloaded, and adding circulation (which viscosity would have to supply) is what a real lifting shape does. The theory is telling the truth: *to get lift, break the symmetry*.

**The zero drag is a lie**, and a large one. A real strut of these proportions at $V_\infty = 50$ m/s would have a drag coefficient of order $0.1$ based on frontal area — not from any failure of the pressure integration, but because the **adverse pressure gradient aft of the widest point separates the boundary layer**, destroying the pressure recovery that the inviscid theory counts on. The nose pressure is real; the matching tail pressure never arrives.

*The practical consequence, and it is the organizing principle of the whole course:* **use potential flow for lift and for the pressure distribution, and never for drag.** Module 2 builds lift on exactly this foundation and gets it right to a few percent. Module 3 has to reintroduce viscosity from scratch to get drag at all.

*One refinement worth knowing.* The fore-aft symmetry that kills the drag is destroyed by a **sharp trailing edge** — which is why airfoils have one, and why they *do* generate lift in potential flow once the Kutta condition ([2.1](02-01-airfoil-geometry-kutta-condition.md)) picks the circulation. They still have zero *pressure* drag in the inviscid theory, but the lift is real and accurate.

</details>

## Connections

- **Backward:** $\nabla^2\phi = 0$ and the $\phi$–$\psi$ pair are [`fluid-dynamics` 2.4](../../fluid-dynamics/lessons/02-04-irrotational-flow-velocity-potential.md)'s; the elementary-flow kit and the complex-potential route to it are [2.5](../../fluid-dynamics/lessons/02-05-complex-potential.md)'s; the irrotationality that licenses all of it is Kelvin's theorem, [2.3](../../fluid-dynamics/lessons/02-03-kelvin-circulation-theorem.md).
- **Forward:** [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md) adds the vortex and gets lift; [2.2](02-02-vortex-sheet-thin-airfoil-equation.md) distributes vortices into a sheet and gets an airfoil.
- **Sideways:** $\nabla^2\phi = 0$ is Laplace's equation, identical to electrostatics in a charge-free region ([`em-refresher`](../../em-refresher/syllabus.md)) and to steady heat conduction ([`heat-transfer`](../../heat-transfer/syllabus.md)); a source is a point charge, a doublet a dipole, and superposition is the method of images in all three.
