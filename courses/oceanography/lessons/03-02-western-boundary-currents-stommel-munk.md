# Physical Oceanography · Lesson 3.2: Western boundary currents — Stommel and Munk

> ⏱ ~15 min · Module 3: The wind-driven circulation · Builds on: [3.1](03-01-sverdrup-balance-interior-gyre.md), [2.5](02-05-potential-vorticity-stratified-ocean.md) · Unlocks: [3.3](03-03-gulf-stream-kuroshio.md), [3.4](03-04-mesoscale-eddies-baroclinic-instability.md)

## Why this matters

Every ocean basin has a fast, narrow, warm current pressed against its **western** edge and nothing comparable on its eastern edge. The Gulf Stream, the Kuroshio, the Agulhas, the Brazil Current, the East Australian Current — all on the west. The Canary, California, Benguela and Peru currents on the eastern sides are broad, slow, cold and diffuse. This is one of the most conspicuous asymmetries in the natural world, and until 1948 nobody could explain it.

Henry Stommel's explanation is two pages long and turns entirely on the fact that the Coriolis parameter varies with latitude. Remove that variation — put the ocean on a rotating disc rather than a sphere — and the asymmetry disappears completely: the return flow splits evenly between the two coasts. **The Gulf Stream exists because the Earth is round.**

## The idea

**Something has to bring the water back.** [3.1](03-01-sverdrup-balance-interior-gyre.md) showed the Sverdrup interior flows equatorward across the whole basin, at about 50 Sv. Mass conservation demands an equal poleward return, and it cannot be in the interior, because the interior is entirely accounted for. So it must be in a boundary layer — a region so narrow that the terms neglected in Sverdrup theory (friction, and the relative vorticity that goes with strong shear) come back into play.

**Friction lets a boundary layer exist; $\beta$ decides which side.** This is the crux, and it is cleanest as a statement about exponentials. Adding friction to the Sverdrup balance produces a differential equation whose homogeneous solution is $e^{-\beta x/r}$ — a *decaying* exponential in the eastward direction, because $\beta > 0$. A boundary layer must decay away from its coast into the interior. Starting from a western coast, "away from the coast" means increasing $x$, and $e^{-\beta x/r}$ obligingly decays. Starting from an eastern coast, away means *decreasing* $x$, where the same function **grows without bound**. There is no admissible eastern boundary layer. Set $\beta = 0$ and both exponentials become available, and the symmetry returns.

**The vorticity story, in words.** Follow a column round the gyre. In the interior it drifts equatorward, shedding planetary vorticity to absorb the wind's anticyclonic input — that is the Sverdrup balance. On the return leg it goes poleward, *gaining* planetary vorticity at a great rate because the return is fast. That gain has to be destroyed, and only friction can destroy it. Friction is only strong enough where the shear is enormous — a narrow, fast current scraping along a wall. **The boundary current is narrow because that is the only way to make friction big enough.**

**Two closures, two boundary layers, same width to order of magnitude.** Stommel used bottom friction; Munk used lateral eddy viscosity. Stommel's layer decays monotonically from a maximum at the wall. Munk's satisfies no-slip at the wall, so the velocity is zero there, peaks about 100 km offshore, and **overshoots into a weak countercurrent** further out. The overshoot is observed — the Gulf Stream does have a southward flow on its offshore flank — which is one reason Munk's version is preferred.

## The formal version

**The vorticity equation with friction.** Let $\psi$ be the volume-transport streamfunction ($U = -\partial\psi/\partial y$, $V = \partial\psi/\partial x$, both in m² s⁻¹, so $\psi$ is in m³ s⁻¹).

*Stommel (1948), bottom friction with coefficient $r$ (units s⁻¹):*
$$\beta\frac{\partial\psi}{\partial x} + r\,\nabla^2\psi = \frac{1}{\rho_0}\,\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau.$$

*Munk (1950), lateral eddy viscosity $A_h$ (units m² s⁻¹):*
$$\beta\frac{\partial\psi}{\partial x} - A_h\,\nabla^4\psi = \frac{1}{\rho_0}\,\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau.$$

*In words: the Sverdrup balance, plus a friction term that only matters where gradients are sharp.* Away from boundaries the friction terms are negligible and both reduce to [3.1](03-01-sverdrup-balance-interior-gyre.md).

**Stommel's boundary layer.** In the layer, balance the two left-hand terms: $\beta\psi_x \sim r\psi_{xx}$, so

$$\boxed{\ \delta_S = \frac{r}{\beta}\ }$$

The homogeneous solution is $\psi \propto e^{-x/\delta_S}$ measured from the wall, giving

$$\psi(x,y) = \psi_I(y)\left(1 - e^{-x/\delta_S}\right),$$

which satisfies $\psi = 0$ at the wall and matches the interior offshore. The transport $V = \partial\psi/\partial x = (\psi_I/\delta_S)e^{-x/\delta_S}$ is **maximum at the wall** and decays monotonically.

**Why not the east, formally.** The homogeneous equation $\beta\psi_x + r\psi_{xx} = 0$ has solutions $\psi = $ const and $\psi\propto e^{-\beta x/r}$. Only the second can form a boundary layer, and it decays only toward $+x$. Attach it to an eastern wall and it must be used for $x < x_E$, where it grows exponentially away from the coast — physically absurd. **One sign, one coast.**

**Munk's boundary layer.** Balance $\beta\psi_x \sim A_h\psi_{xxxx}$:

$$\boxed{\ \delta_M = \left(\frac{A_h}{\beta}\right)^{1/3}\ }$$

The characteristic equation $A_hk^4 - \beta k = 0$ has $k = 0$ and the three cube roots of $\beta/A_h$:

$$k = \frac{1}{\delta_M}, \qquad k = \frac{1}{\delta_M}\left(-\tfrac12 \pm \tfrac{\sqrt3}{2}i\right).$$

The first grows eastward and is unusable at a western wall; the complex pair has **negative real part**, so both decay eastward while oscillating. Two decaying solutions is exactly enough to satisfy the two conditions a viscous wall imposes — no flow through it and no slip along it. The result is

$$\psi(x,y) = \psi_I(y)\left[1 - e^{-x/2\delta_M}\left(\cos\frac{\sqrt3\,x}{2\delta_M} + \frac{1}{\sqrt3}\sin\frac{\sqrt3\,x}{2\delta_M}\right)\right].$$

**And this is where the counting argument bites.** At an *eastern* wall you need solutions decaying **westward**, and there is exactly **one** — the real root $k = 1/\delta_M$. One decaying solution cannot satisfy two boundary conditions. **The eastern boundary layer is not merely unphysical; it is over-determined and does not exist.** The same counting works for Stommel's second-order equation: one decaying root at the west, zero at the east.

**Widths.** At 30°N, $\beta = 1.982\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$:

| Closure | Parameter | Width | Observed Gulf Stream |
|---|---|---|---|
| Munk | $A_h = 2\times10^{4}\ \mathrm{m^2\,s^{-1}}$ | $\delta_M = 100\ \mathrm{km}$ | 100 km |
| Stommel | $r = 2\times10^{-6}\ \mathrm{s^{-1}}$ | $\delta_S = 100\ \mathrm{km}$ | 100 km |

Both fit — but note what fitting costs. A physically estimated bottom-drag coefficient for a 4000 m ocean gives $r \sim 3\times10^{-8}\ \mathrm{s^{-1}}$ and a 1.5 km boundary layer, sixty times too narrow. **Stommel's model needs an $r$ about seventy times larger than bottom friction can supply.** Munk's $A_h = 2\times10^{4}\ \mathrm{m^2\,s^{-1}}$ is also enormous compared with molecular viscosity ($10^{-6}$) but is a defensible eddy viscosity for a mesoscale-eddy field. That is the honest comparison between the two models: both are tuned, and Munk's tuning is the less embarrassing.

## Picture

![Poleward transport plotted against distance offshore from a western wall, out to 600 km. The dashed grey Stommel curve is maximum right at the wall and decays monotonically toward the broad Sverdrup interior value. The solid blue Munk curve is zero at the wall because of the no-slip condition, rises to a peak about 120 km offshore, falls through the interior value, and overshoots into a countercurrent about 16 percent of the peak in the opposite direction near 485 km before returning](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — width and speed of a boundary current).** For the gyre of [3.1](03-01-sverdrup-balance-interior-gyre.md) — 51.5 Sv returning at 30°N, $\beta = 1.982\times10^{-11}$ — compute the Munk width for $A_h = 2\times10^{4}\ \mathrm{m^2\,s^{-1}}$, and the mean speed if the current occupies the top 1000 m.

$$\delta_M = \left(\frac{2\times10^{4}}{1.982\times10^{-11}}\right)^{1/3} = \left(1.009\times10^{15}\right)^{1/3} = 1.00\times10^{5}\ \mathrm{m} = 100\ \mathrm{km}.$$

$$\bar u = \frac{5.15\times10^{7}}{10^{5}\times10^{3}} = 0.515\ \mathrm{m\,s^{-1}}.$$

Since the Munk profile is peaked rather than uniform, the maximum is roughly twice the mean, around $1\ \mathrm{m\,s^{-1}}$ — which is the Gulf Stream's observed core speed. Three numbers from a wind atlas and an eddy viscosity.

*The Rossby number.* $Ro = U/(f\delta) = 1.0/(7.29\times10^{-5}\times10^{5}) = 0.14$. Not small. The boundary current is genuinely nonlinear, which is why Munk's linear theory gets the width right and the *structure* wrong — and it is the opening for [3.3](03-03-gulf-stream-kuroshio.md)'s inertial correction.

**Example 2 (why you'd care — turn off $\beta$ and watch the asymmetry vanish).** Solve Stommel's problem on an **$f$-plane** ($\beta = 0$) and show the return flow splits equally between the two coasts. Then explain what the result reveals.

*The equation.* With $\beta = 0$, Stommel's balance is $r\nabla^2\psi = \mathrm{curl}\,\tau/\rho_0$ — Poisson's equation with a source, and $\psi = 0$ on all four walls. For a symmetric wind curl in a rectangular basin, the solution is **symmetric about the mid-basin meridian**. Whatever poleward flow appears at the western wall appears identically at the eastern wall.

*Why.* Poisson's equation has no preferred direction. The only thing in the original problem that distinguishes east from west is the term $\beta\psi_x$, which is odd in $x$-derivative and therefore breaks the reflection symmetry $x\to -x$. Removing it restores the symmetry exactly.

*What that reveals.* The asymmetry is **not** caused by friction, by the wind's shape, by the basin's shape, or by the continents. All of those are symmetric under east–west reflection. It is caused solely by $\beta$, which is to say by the sphericity of the Earth combined with its rotation. Stommel demonstrated this in the most convincing possible way: by running the same model with and without a single term.

*The point.* This is a template worth internalizing. When a system shows a striking asymmetry, look for the **one term in the governing equation that is not symmetric under the relevant reflection** — and then verify by deleting it. The asymmetry must live there, because nothing else can produce it. The same reasoning identifies $\beta$ as the source of the westward-only Rossby wave propagation of [2.5](02-05-potential-vorticity-stratified-ocean.md) and of the eastward-only equatorial Kelvin wave of [5.4](05-04-equatorial-waves-undercurrent.md); all three asymmetries are the same term wearing different clothes.

## Watch out

- **You might think** western boundary currents are strong because the western sides of oceans are somehow special. **Actually** the coasts are interchangeable and the asymmetry comes entirely from $\beta$. In the southern hemisphere, where $f < 0$ but $\beta$ is still positive, boundary currents are still on the west (Brazil, Agulhas, East Australian) — the sign of $f$ is irrelevant to the argument.
- **You might think** the boundary layer width depends on the wind or the transport. **Actually** $\delta_M = (A_h/\beta)^{1/3}$ contains neither. A stronger wind gives a faster boundary current of the *same* width — which is exactly what is observed as gyres spin up and down.
- **You might think** the friction coefficients are measurable quantities. **Actually** both $r$ and $A_h$ are tuned to produce the observed width, and neither has an independent determination. The theory's real content is the *structure* — narrow, western, with a specific profile shape — not the numerical width, which is an input dressed as an output.

## One-liner

> The return flow of every gyre is squeezed into a hundred-kilometre jet on the western side of its basin, because the frictional boundary-layer solution is an exponential that decays in only one direction, and the direction is set by $\beta$ — remove the variation of the Coriolis parameter with latitude and the Gulf Stream splits evenly in two.

## Problems

**P1 (🟢)** At 40°N, $\beta = 1.619\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$. (a) Compute the Munk boundary-layer width for $A_h = 5\times10^{3}\ \mathrm{m^2\,s^{-1}}$. (b) Repeat for $A_h = 4\times10^{4}$. (c) By what factor must $A_h$ change to double the boundary-layer width, and comment on how well constrained $\delta_M$ therefore is.

**P2 (🟡)** A subtropical gyre returns 40 Sv in a Munk boundary layer at 25°N, where $\beta = 2.10\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$, with $A_h = 1.5\times10^{4}\ \mathrm{m^2\,s^{-1}}$ and the current confined to the top 800 m. (a) Compute $\delta_M$. (b) Compute the mean speed and estimate the peak. (c) Compute the Rossby number using the peak speed and $f = 6.16\times10^{-5}\ \mathrm{s^{-1}}$, and state whether the linear theory used to derive $\delta_M$ is self-consistent. (d) Compute the Reynolds number $U\delta_M/A_h$ and comment.

**P3 (🔴, optional)** Verify Munk's boundary-layer solution. (a) Show that $\psi = \psi_I\left[1 - e^{-x/2\delta}\left(\cos\frac{\sqrt3 x}{2\delta} + \frac{1}{\sqrt3}\sin\frac{\sqrt3 x}{2\delta}\right)\right]$ satisfies $\psi = 0$ and $\partial\psi/\partial x = 0$ at $x=0$, and $\psi\to\psi_I$ as $x\to\infty$. (b) Find the offshore distance at which $V = \partial\psi/\partial x$ is maximum, in units of $\delta$. (c) Find the first zero of $V$ beyond the wall, in units of $\delta$, and hence locate the start of the countercurrent. (d) Using $\delta = 100$ km, convert (b) and (c) to kilometres and compare with the Gulf Stream's observed core position of 50 to 100 km offshore of the shelf break and its offshore southward recirculation.

<details>
<summary>Solutions</summary>

**P1** (a) $$\delta_M = \left(\frac{5\times10^{3}}{1.619\times10^{-11}}\right)^{1/3} = \left(3.088\times10^{14}\right)^{1/3} = 6.76\times10^{4}\ \mathrm{m} = 67.6\ \mathrm{km}.$$

(b) $$\delta_M = \left(\frac{4\times10^{4}}{1.619\times10^{-11}}\right)^{1/3} = \left(2.471\times10^{15}\right)^{1/3} = 1.35\times10^{5}\ \mathrm{m} = 135\ \mathrm{km}.$$

(c) Since $\delta_M \propto A_h^{1/3}$, doubling the width requires $A_h$ to increase by a factor of $2^3 = 8$.

That cube-root dependence is a double-edged result. It means the predicted width is **insensitive** to the eddy viscosity — an order-of-magnitude error in $A_h$ gives only a factor of 2.15 in $\delta_M$ — so the theory can produce a roughly correct width almost regardless of what you assume. But by the same token, **measuring $\delta_M$ constrains $A_h$ very poorly**: an observed width known to within 20 percent pins $A_h$ only to within a factor of 1.7. The cube root protects the prediction and destroys the inference.

**P2** (a) $$\delta_M = \left(\frac{1.5\times10^{4}}{2.10\times10^{-11}}\right)^{1/3} = \left(7.143\times10^{14}\right)^{1/3} = 8.94\times10^{4}\ \mathrm{m} = 89.4\ \mathrm{km}.$$

(b) $$\bar u = \frac{4.0\times10^{7}}{8.94\times10^{4}\times800} = \frac{4.0\times10^{7}}{7.15\times10^{7}} = 0.559\ \mathrm{m\,s^{-1}},$$

and with the Munk profile's peak roughly twice its mean, $u_{\max}\approx1.1\ \mathrm{m\,s^{-1}}$.

(c) $$Ro = \frac{u_{\max}}{f\,\delta_M} = \frac{1.1}{6.16\times10^{-5}\times8.94\times10^{4}} = \frac{1.1}{5.507} = 0.20.$$

**Not self-consistent.** The derivation of $\delta_M$ neglected the nonlinear advection terms on the grounds that $Ro \ll 1$, and a Rossby number of 0.2 does not satisfy that. The neglected terms are 20 percent of the retained ones — comparable to the accuracy of everything else in the calculation, so the answer is not *wrong*, but the theory is being used at the edge of its validity and cannot be trusted for structural detail. This is precisely why the observed Gulf Stream separates from the coast, meanders and sheds rings, none of which Munk's linear solution contains.

(d) $$Re = \frac{u_{\max}\,\delta_M}{A_h} = \frac{1.1\times8.94\times10^{4}}{1.5\times10^{4}} = \frac{9.83\times10^{4}}{1.5\times10^{4}} = 6.6.$$

Of order 10 — which is the same statement as (c) in different units, and it is reassuring rather than alarming that the two diagnostics agree. A Reynolds number of order 10 is the boundary between a laminar boundary layer and one that will develop instabilities; the real Gulf Stream sits just on the unstable side, which is why it meanders. Note also that $Re \sim Ro \times (f\delta^2/A_h)$, so the two are not independent — the second factor is 33, and it is the ratio of the Munk layer's frictional decay time to the rotation time.

**P3** (a) Write $\eta = x/\delta$ and $c = \cos(\sqrt3\eta/2)$, $s = \sin(\sqrt3\eta/2)$, so

$$\frac{\psi}{\psi_I} = 1 - e^{-\eta/2}\left(c + \tfrac{1}{\sqrt3}s\right).$$

At $\eta=0$: $c=1$, $s=0$, so $\psi/\psi_I = 1 - 1 = 0$. $\checkmark$

As $\eta\to\infty$: $e^{-\eta/2}\to0$, so $\psi\to\psi_I$. $\checkmark$

Differentiate:
$$\frac{\delta}{\psi_I}\frac{d\psi}{dx} = \frac{d}{d\eta}\left[-e^{-\eta/2}\left(c+\tfrac{1}{\sqrt3}s\right)\right] = \tfrac12 e^{-\eta/2}\left(c+\tfrac{1}{\sqrt3}s\right) - e^{-\eta/2}\left(-\tfrac{\sqrt3}{2}s + \tfrac{1}{\sqrt3}\cdot\tfrac{\sqrt3}{2}c\right)$$
$$= e^{-\eta/2}\left[\tfrac12 c + \tfrac{1}{2\sqrt3}s + \tfrac{\sqrt3}{2}s - \tfrac12 c\right] = e^{-\eta/2}\,s\left[\tfrac{1}{2\sqrt3}+\tfrac{\sqrt3}{2}\right] = \frac{2}{\sqrt3}\,e^{-\eta/2}\sin\!\left(\frac{\sqrt3\eta}{2}\right).$$

At $\eta=0$, $\sin 0 = 0$, so $d\psi/dx = 0$. $\checkmark$ (No-slip.)

This is a pleasingly clean result: **the boundary-layer transport profile is exactly $V \propto e^{-\eta/2}\sin(\sqrt3\eta/2)$** — a damped sine.

(b) Maximize: set the derivative of $e^{-\eta/2}\sin(\sqrt3\eta/2)$ to zero.

$$-\tfrac12\sin\!\left(\tfrac{\sqrt3\eta}{2}\right) + \tfrac{\sqrt3}{2}\cos\!\left(\tfrac{\sqrt3\eta}{2}\right) = 0 \;\Longrightarrow\; \tan\!\left(\frac{\sqrt3\eta}{2}\right) = \sqrt3,$$
$$\frac{\sqrt3\eta}{2} = \frac{\pi}{3} \;\Longrightarrow\; \eta = \frac{2\pi}{3\sqrt3} = 1.209.$$

The jet peaks at $x = 1.21\,\delta$.

(c) $V = 0$ when $\sin(\sqrt3\eta/2) = 0$, i.e. $\sqrt3\eta/2 = \pi$:

$$\eta = \frac{2\pi}{\sqrt3} = 3.628.$$

Beyond $x = 3.63\,\delta$ the sine is negative, so $V$ reverses: **the countercurrent begins at $3.63\,\delta$** and reaches its own extremum a little further out (at $\eta = 1.209 + 2\pi/\sqrt3 = 4.84$).

(d) With $\delta = 100$ km: the jet peaks **121 km offshore**, and the countercurrent starts **363 km offshore** and is centred near **484 km**.

Against observation, the peak position is good — the Gulf Stream core off Cape Hatteras sits roughly 50 to 150 km from the shelf break, bracketing 121 km. The countercurrent is qualitatively right and quantitatively too weak: the model predicts a return flow 16 percent of the peak (from the ratio $e^{-4.84/2}/e^{-1.209/2}$ of the two extrema), whereas the observed **recirculation gyre** offshore of the Gulf Stream carries a comparable transport to the Stream itself. The discrepancy is not a failure of the boundary-layer idea but a sign that the real recirculation is driven by something Munk's linear model does not contain — eddy fluxes of potential vorticity from the meandering Stream ([3.4](03-04-mesoscale-eddies-baroclinic-instability.md)). Munk predicts that a countercurrent should be there; he does not predict how big.

</details>

## Flashback

**From Lesson 3.1 (The Sverdrup balance and the interior gyre):** A subpolar basin at 55°N has $\beta = 1.31\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$, zonal width $L_x = 3000\ \mathrm{km}$, and a wind-stress curl of $+1.8\times10^{-7}\ \mathrm{N\,m^{-3}}$ at mid-basin. Take $\rho_0 = 1025$. (a) Compute the Sverdrup transport $V$ and give its direction. (b) Compute the gyre transport in sverdrups. (c) State on which side of the basin the return flow must lie and in which direction it flows, and name the real current that does this job in the North Atlantic.

<details>
<summary>Solution</summary>

(a) $$V = \frac{1}{\rho_0\beta}\,\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau = \frac{1.8\times10^{-7}}{1025\times1.31\times10^{-11}} = \frac{1.8\times10^{-7}}{1.343\times10^{-8}} = +13.4\ \mathrm{m^2\,s^{-1}}.$$

Positive: **poleward** (northward). Note the contrast with the subtropical case — positive curl means upward Ekman pumping, columns are stretched, and a stretched column must move to higher $f$, hence poleward.

(b) $$T = 13.4\times3\times10^{6} = 4.02\times10^{7}\ \mathrm{m^3\,s^{-1}} = 40.2\ \mathrm{Sv}.$$

(c) The return flow is still on the **western** boundary — the $\beta$ argument of this lesson does not care about the sign of the wind curl, only about the sign of $\beta$, which is positive everywhere. But the *direction* reverses: the interior flows poleward, so the western boundary current must flow **equatorward**.

In the North Atlantic this is the **Labrador Current**, running south along the coast of Labrador and Newfoundland, cold and comparatively fresh — the exact counterpart of the Gulf Stream and flowing the other way. (The Oyashio plays the same role in the North Pacific.) The two meet near the Grand Banks, and the resulting front is one of the sharpest in the world ocean.

*Check.* It is worth noticing that the subtropical and subpolar western boundary currents flow in **opposite directions along adjacent stretches of the same coast**, which is a strong and easily-checked prediction of the theory. It is also why the Gulf Stream separates from the coast where it does: it cannot continue north past the point where the opposing Labrador Current arrives.

</details>

## Connections

- **Backward:** the interior transport being returned is [3.1](03-01-sverdrup-balance-interior-gyre.md)'s Sverdrup flow, and the westward selection is the same $\beta$-asymmetry that makes Rossby waves go west in [2.5](02-05-potential-vorticity-stratified-ocean.md) — indeed the group-velocity argument and the exponential argument are two views of one fact.
- **Forward:** the nonlinearity that Munk's theory neglects is [3.3](03-03-gulf-stream-kuroshio.md)'s subject, and the instability of the resulting jet produces the mesoscale eddies of [3.4](03-04-mesoscale-eddies-baroclinic-instability.md); the western boundary current is also the conduit by which the AMOC's upper limb travels north in [4.4](04-04-what-drives-the-overturning.md).
- **Sideways (boundary-layer theory):** this is a textbook singular perturbation problem — a small parameter multiplying the highest derivative, an outer solution (Sverdrup) that cannot satisfy all boundary conditions, and an inner layer whose thickness is set by the balance that restores the lost derivative. The counting of decaying roots that rules out an eastern layer is the standard well-posedness test from [`fluid-dynamics`](../../fluid-dynamics/syllabus.md)'s boundary-layer material.
