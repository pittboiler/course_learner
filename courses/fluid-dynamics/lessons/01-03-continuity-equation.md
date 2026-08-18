# Fluid Dynamics · Lesson 1.3: Conservation of mass and the continuity equation

> ⏱ ~15 min · Module 1: Kinematics and the governing equations · Builds on: [1.2 Lagrangian vs Eulerian, and the material derivative](01-02-lagrangian-eulerian-material-derivative.md) · Unlocks: [1.4 Forces in a fluid and the stress tensor](01-04-stress-tensor.md)

## Why this matters

Every equation of motion for a fluid rests on one unglamorous fact: mass doesn't appear or vanish. Turn that bookkeeping into a PDE and you get the **continuity equation** — the first of the governing equations, and the one that never has an exception (mass is conserved even when momentum and energy are being traded away). It also hands you the single most-used modeling assumption in the whole subject: **incompressibility**, $\nabla\cdot\mathbf{u}=0$. Knowing exactly what that assumption buys you — and exactly when it's a lie — is the difference between a clean calculation and a wrong one.

## The idea

Draw an imaginary box fixed in space and watch fluid stream through it. Mass can't be created inside, so the only way the amount of stuff in the box can change is by flowing in or out through the walls. **Rate of mass piling up inside = net rate of mass flowing in.** That's the entire physical content; the rest is turning "net flow through the walls" into calculus.

The quantity that crosses a wall is the **mass flux** $\rho\mathbf{u}$ — density times velocity, kilograms per second per square meter of wall. Add up the flux over all the walls and you have the net outflow. Divergence theorem converts that surface tally into a volume integral of $\nabla\cdot(\rho\mathbf{u})$, and since the box was arbitrary, the integrands must balance point by point.

There's a second way to see the same law: instead of a fixed box, ride along with a parcel of fluid (the Lagrangian view from [1.2](01-02-lagrangian-eulerian-material-derivative.md)). The parcel's *mass* is fixed, but its *volume* can change — squeeze it and its density rises. "Volume changing" is exactly what $\nabla\cdot\mathbf{u}$ measures, so a parcel's density obeys $\tfrac{D\rho}{Dt} = -\rho\,\nabla\cdot\mathbf{u}$. Same equation, different chair.

## The formal version

Fix a control volume $V$ with boundary surface $S$ and outward unit normal $\mathbf{n}$. Let $\rho(\mathbf{x},t)$ be the density (kg/m³) and $\mathbf{u}(\mathbf{x},t)$ the velocity field (m/s). The mass inside is $\int_V \rho\,dV$, and the mass leaving per second through $S$ is $\oint_S \rho\,\mathbf{u}\cdot\mathbf{n}\,dS$. Conservation of mass says increase = net inflow = minus the outflow:

$$\frac{d}{dt}\int_V \rho\,dV \;=\; -\oint_S \rho\,\mathbf{u}\cdot\mathbf{n}\,dS.$$

*In words: the stuff inside grows exactly as fast as stuff flows in through the walls.* Because $V$ is fixed in space we can pull $d/dt$ inside as $\partial_t$, and the **divergence theorem** (from [`calc-refresher`](../../calc-refresher/syllabus.md)) turns the surface integral into a volume integral, $\oint_S \rho\mathbf{u}\cdot\mathbf{n}\,dS = \int_V \nabla\cdot(\rho\mathbf{u})\,dV$:

$$\int_V \Big[\,\partial_t\rho + \nabla\cdot(\rho\mathbf{u})\,\Big]\,dV = 0.$$

This holds for *every* control volume, however small, so the bracket must vanish everywhere — giving the **continuity equation**:

$$\boxed{\;\partial_t\rho + \nabla\cdot(\rho\mathbf{u}) = 0\;}$$

*In words: the local density rises at exactly the rate mass flux converges onto the point.* The term $\nabla\cdot(\rho\mathbf{u})$ is the **net mass flux per unit volume** — positive where flux spreads out (density must be dropping), negative where it piles in.

**The material-derivative form.** Expand the divergence with the product rule, $\nabla\cdot(\rho\mathbf{u}) = \mathbf{u}\cdot\nabla\rho + \rho\,\nabla\cdot\mathbf{u}$, and recognize the material derivative $\tfrac{D}{Dt} = \partial_t + \mathbf{u}\cdot\nabla$ from [1.2](01-02-lagrangian-eulerian-material-derivative.md):

$$\frac{D\rho}{Dt} + \rho\,\nabla\cdot\mathbf{u} = 0.$$

*In words: following a parcel, its density changes only because it is being compressed or expanded.* If $\nabla\cdot\mathbf{u}>0$ (velocity spreading apart, the parcel expanding), $\tfrac{D\rho}{Dt}<0$ — it thins out, exactly as intuition demands.

**Incompressible flow.** Suppose each parcel keeps its density as it moves, $\tfrac{D\rho}{Dt}=0$. Then the continuity equation collapses to

$$\nabla\cdot\mathbf{u} = 0 \qquad(\text{divergence-free / solenoidal velocity}).$$

*In words: whatever volume of fluid flows into any region flows back out — the velocity field is volume-preserving.* Be precise about the claim: **this is not that the fluid physically cannot be compressed** (all real fluids can). It is that density *changes* are negligible in this flow. Quantitatively, that holds when the flow speed is small compared with the speed of sound $c$ — Mach number $M = U/c \ll 1$, in practice $M \lesssim 0.3$ — and when there's no strong heating or gravitational stratification driving density variations. Water almost always qualifies; air does too, until you approach a third of the sound speed.

**Streamfunction preview (2-D).** In two dimensions, $\nabla\cdot\mathbf{u}=0$ is *automatically* satisfied by writing the velocity as derivatives of a single scalar $\psi(x,y)$, the **streamfunction**:

$$u = \frac{\partial\psi}{\partial y}, \qquad v = -\frac{\partial\psi}{\partial x} \quad\Longrightarrow\quad \nabla\cdot\mathbf{u} = \partial_x\partial_y\psi - \partial_y\partial_x\psi = 0.$$

*In words: any $\psi$ you pick gives a legal incompressible flow for free.* Better still, $\mathbf{u}\cdot\nabla\psi = 0$, so $\psi$ is constant along the flow — **streamlines are the level curves of $\psi$**, and the difference $\Delta\psi$ between two streamlines equals the volume flow rate between them. (Full treatment in [2.4](02-04-irrotational-flow-velocity-potential.md)–[2.5](02-05-complex-potential.md).)

## Picture

![Left: a fixed control-volume box with mass-flux arrows crossing each face, the rate of density change inside equal to net inflow. Right: a 2-D straining flow entering the sides and leaving top and bottom, deforming a square parcel into an equal-area rectangle.](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — is this flow incompressible?).** Test the 2-D field $\mathbf{u} = (x^2 y,\; -x y^2)$. Compute

$$\nabla\cdot\mathbf{u} = \partial_x(x^2 y) + \partial_y(-x y^2) = 2xy - 2xy = 0.$$

Divergence-free everywhere, so it's a legal incompressible flow. Since it's 2-D and divergence-free, it has a streamfunction. Integrate $u = \partial_y\psi = x^2 y$ in $y$:

$$\psi = \tfrac12 x^2 y^2 + f(x).$$

Fix $f$ using the other component: $v = -\partial_x\psi = -(x y^2 + f'(x))$ must equal $-x y^2$, so $f'(x)=0$. Thus $\psi = \tfrac12 x^2 y^2$, and the streamlines are the level curves $x^2 y^2 = \text{const}$, i.e. $xy = \text{const}$ — a family of hyperbolas.

**Example 2 (why you'd care — the compressible term at work).** A gas fills a 1-D region and expands uniformly with velocity $\mathbf{u} = (\varepsilon x,\,0,\,0)$, where $\varepsilon>0$ is a constant expansion rate (units 1/s); take the density spatially uniform at each instant, $\rho=\rho(t)$. Here $\nabla\cdot\mathbf{u} = \varepsilon > 0$: the fluid is spreading, *not* incompressible. The material form gives

$$\frac{D\rho}{Dt} = -\rho\,\nabla\cdot\mathbf{u} = -\varepsilon\rho.$$

With $\rho$ uniform, $\tfrac{D\rho}{Dt} = \tfrac{d\rho}{dt}$, so $\rho(t) = \rho_0\,e^{-\varepsilon t}$: the gas thins exponentially as it expands. This is precisely the term incompressibility throws away — and why you can't use $\nabla\cdot\mathbf{u}=0$ for an expanding gas, a nozzle, or a sound wave.

*Check.* Mass in a co-moving slab of initial length $\ell_0$: the slab stretches as $\ell(t)=\ell_0 e^{\varepsilon t}$ (its endpoints move apart at rate $\varepsilon$), so $\rho\ell = \rho_0 e^{-\varepsilon t}\cdot\ell_0 e^{\varepsilon t} = \rho_0\ell_0$ stays constant. Mass conserved. ✓

## Watch out

- **"Incompressible" is a statement about the *flow*, not the *fluid*.** The same air is treated as incompressible around a cyclist and compressible around a jet — what changes is $M=U/c$, not the molecules. Don't say "air is incompressible"; say "this flow is."
- **$\tfrac{D\rho}{Dt}=0$ is weaker than $\rho=\text{const}$.** Incompressible flow only requires each parcel to keep *its own* density; different parcels may carry different densities (think oil layered over water, or a salinity gradient). That still gives $\nabla\cdot\mathbf{u}=0$, but $\rho$ is not globally constant, so you cannot pull it out of $\nabla\cdot(\rho\mathbf{u})$ blindly.
- **Sign of the divergence.** $\nabla\cdot\mathbf{u}>0$ means expansion and *falling* density ($\tfrac{D\rho}{Dt}<0$) — the minus sign in $\tfrac{D\rho}{Dt}=-\rho\nabla\cdot\mathbf{u}$ trips people up. Outflow drains density; inflow concentrates it.

## One-liner

> Mass conservation on a control volume is $\partial_t\rho + \nabla\cdot(\rho\mathbf{u})=0$; when density barely changes ($M\ll1$) it becomes the volume-preserving law $\nabla\cdot\mathbf{u}=0$.

## Problems

**P1 (🟢)** For the 2-D linear flow $\mathbf{u} = (ax + by,\; cx + dy)$ with constants $a,b,c,d$, find the condition for incompressibility. Then check the specific field $\mathbf{u}=(x+2y,\;3x-y)$.

**P2 (🟡)** The flow $\mathbf{u} = (2xy,\; x^2 - y^2)$ is incompressible (verify). Find its streamfunction $\psi(x,y)$.

**P3 (🔴, optional)** A gas flows steadily in one dimension, $\mathbf{u}=(u(x),0,0)$, with a known steady density profile $\rho(x)=\rho_0\,e^{-x/L}$ ($L>0$). Given $u(0)=U_0$, find $u(x)$, and explain physically why the gas speeds up.

<details>
<summary>Solutions</summary>

**P1** The divergence is
$$\nabla\cdot\mathbf{u} = \partial_x(ax+by) + \partial_y(cx+dy) = a + d.$$
Incompressibility requires $\nabla\cdot\mathbf{u}=0$, i.e. $\boxed{a+d=0}$ — the coefficient matrix has **zero trace**. For $\mathbf{u}=(x+2y,\,3x-y)$: $a=1,\ d=-1$, so $a+d=0$. Incompressible. ✓

*Check.* Only $a$ (the $x$-stretch) and $d$ (the $y$-stretch) affect volume; the shear terms $b,c$ rotate/shear without changing area, so they correctly drop out. The trace of the velocity-gradient matrix *is* the divergence — a fact worth remembering.

**P2** Divergence: $\partial_x(2xy) + \partial_y(x^2-y^2) = 2y - 2y = 0$ ✓. To find $\psi$, integrate $u = \partial_y\psi = 2xy$ in $y$:
$$\psi = x y^2 + f(x).$$
Then $v = -\partial_x\psi = -(y^2 + f'(x))$ must equal $x^2 - y^2$, so $-y^2 - f'(x) = x^2 - y^2 \Rightarrow f'(x) = -x^2 \Rightarrow f(x) = -\tfrac13 x^3$. Hence
$$\boxed{\psi = x y^2 - \tfrac13 x^3.}$$

*Check.* Recompute: $\partial_y\psi = 2xy = u$ ✓ and $-\partial_x\psi = -(y^2 - x^2) = x^2 - y^2 = v$ ✓.

**P3** Steady flow means $\partial_t\rho=0$, so continuity reduces to $\partial_x(\rho u)=0$: the **mass flux $\rho u$ is constant** along the pipe. Evaluate it at $x=0$: $\rho u = \rho(0)\,u(0) = \rho_0 U_0$. Therefore
$$u(x) = \frac{\rho_0 U_0}{\rho(x)} = \frac{\rho_0 U_0}{\rho_0 e^{-x/L}} = U_0\,e^{x/L}.$$
Physically: with the same amount of mass passing each cross-section every second but the gas getting thinner downstream (density falling), the flow must **accelerate** to push the same mass through — exactly the mechanism that speeds gas up in a thinning/expanding duct.

*Check.* Product $\rho u = \rho_0 e^{-x/L}\cdot U_0 e^{x/L} = \rho_0 U_0$, constant ✓. At $x=0$, $u=U_0$ ✓. Dimensions: $[\rho u]=\mathrm{kg\,m^{-2}\,s^{-1}}$, a mass flux, as it should be.

</details>

## Flashback

**From Lesson 1.2 (the material derivative):** A steady 2-D flow $\mathbf{u}=(U,0)$ carries fluid through a fixed temperature field $T(x,y) = T_0\,x/L$ (hotter to the right; $T_0,L$ constants). What is the rate of temperature change $\tfrac{DT}{Dt}$ felt by a moving parcel?

<details>
<summary>Solution</summary>

The material derivative of a scalar is $\tfrac{DT}{Dt} = \partial_t T + \mathbf{u}\cdot\nabla T$. The field is steady, so $\partial_t T = 0$, and $\nabla T = (T_0/L,\,0)$, so
$$\frac{DT}{Dt} = (U,0)\cdot\left(\frac{T_0}{L},\,0\right) = \frac{U T_0}{L}.$$
Even though the temperature at every *fixed point* is constant in time, a *moving parcel* warms steadily at rate $UT_0/L$ as it advects into hotter regions — the whole point of the advective term $\mathbf{u}\cdot\nabla$.

*Check.* Units: $(\mathrm{m/s})\cdot(\mathrm{K/m}) = \mathrm{K/s}$ ✓. If the parcel moved perpendicular to the gradient (along $y$), the dot product would vanish and it would feel no change — correct.

</details>

## Connections

- **Backward:** the two derivations are the two viewpoints of [1.2](01-02-lagrangian-eulerian-material-derivative.md) — the fixed control volume is Eulerian, the co-moving parcel is Lagrangian — stitched together by the material derivative $\tfrac{D}{Dt}=\partial_t+\mathbf{u}\cdot\nabla$. The surface-to-volume step is the divergence theorem from [`calc-refresher`](../../calc-refresher/syllabus.md).
- **Forward:** $\nabla\cdot\mathbf{u}=0$ is the constraint that rides alongside every incompressible equation of motion — the [Euler equation](01-05-euler-equation.md) and [Navier–Stokes](01-06-navier-stokes.md) determine $\mathbf{u}$ and $p$ *subject to* it. The streamfunction previewed here becomes the workhorse of 2-D flow in [2.4](02-04-irrotational-flow-velocity-potential.md)–[2.5](02-05-complex-potential.md).
- **Sideways (complex analysis):** for 2-D incompressible *and* irrotational flow, $\psi$ and the velocity potential $\phi$ are harmonic conjugates, and $w=\phi+i\psi$ is an analytic function — the bridge to [`complex-analysis`](../../complex-analysis/syllabus.md), where every analytic function is secretly a flow. Continuity as a conservation law also mirrors the $\partial_t\rho+\nabla\cdot\mathbf{J}=0$ form of charge conservation and the [diffusion/transport PDEs](../../pdes/syllabus.md).
