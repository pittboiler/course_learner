# Relativity (SR + GR) · Lesson 6.6: Cosmology I — the cosmological principle and the FLRW metric

> ⏱ ~15 min · Module 6: Solutions — black holes & cosmology · Builds on: [4.3 The metric & proper time](#/lesson/relativity/04-03-metric-proper-time.md), [5.3 The Einstein field equations](#/lesson/relativity/05-03-einstein-field-equations.md), [6.1 The Schwarzschild solution](#/lesson/relativity/06-01-schwarzschild-solution.md), [1.6 Relativistic Doppler](#/lesson/relativity/01-06-relativistic-dynamics-optics.md) · Unlocks: the Friedmann equations (6.7)

## Why this matters

Schwarzschild solved the field equations for the emptiness *around* a single mass. Now point general relativity at the biggest possible target: **the whole universe at once.** That sounds hopeless — a metric with every galaxy, every star? — until you use the one fact that makes cosmology a physics problem rather than an infinite catalogue: averaged over large enough patches, the universe is *featureless*. Same density everywhere, no special direction, no center, no edge. That single symmetry assumption collapses the space of possible metrics down to essentially **one**, with just a single unknown function of time in it: the scale factor $a(t)$. Read that metric and the expanding universe falls out — Hubble's law, the cosmological redshift, the Big Bang all hide in $a(t)$. This lesson builds that metric and reads its geometry; the next ([6.7](#/lesson/relativity/06-07-friedmann-equations.md)) feeds it to Einstein's equations to find how $a(t)$ actually moves. Signature $(-,+,+,+)$ throughout, with $c$ and $G$ kept explicit.

## The idea

Zoom out. A single galaxy is a lump; a cluster of galaxies is a bigger lump; but once you average over patches larger than about **100 Mpc** (a few hundred million light-years), the lumps wash out and the cosmos looks like a smooth, uniform gas whose "molecules" are galaxies. Two claims sharpen this:

- **Homogeneous** — the universe looks the *same at every place*. No point is special; there is no center of the expansion.
- **Isotropic** — from any given place it looks the *same in every direction*. No axis, no preferred way to point.

Together these are the **cosmological principle**, and they are not philosophy — they are measured. Galaxy surveys (millions of galaxies mapped by SDSS and others) show the same statistical clumpiness in every direction and every region; and the cosmic microwave background — the relic glow of the hot early universe — is the same temperature across the whole sky to about **one part in $10^5$**. The universe really is, on large scales, as boring as a physicist could hope.

Now the payoff. If space is the same everywhere and in every direction *at each instant*, then the only thing it can do over time is **breathe uniformly** — grow or shrink by an overall factor, the same factor everywhere, with no distortion. Picture galaxies painted onto a grid drawn on a rubber sheet. Each galaxy sits at a fixed grid label — its **comoving coordinate** — and never moves relative to the grid. What changes is the *spacing of the grid itself*: stretch the sheet and every pair of galaxies drifts apart, not because they are flying through space but because the space between them is expanding. That overall stretch is the **scale factor** $a(t)$. Everything else in cosmology is bookkeeping on top of this one picture.

## The formal version

**The FLRW metric.** The unique metric consistent with a spacetime that is spatially homogeneous and isotropic at every time is the **Friedmann–Lemaître–Robertson–Walker** line element:

$$ds^2 = -c^2\,dt^2 + a(t)^2\left[\frac{dr^2}{1-k r^2} + r^2\,d\Omega^2\right], \qquad d\Omega^2 = d\theta^2 + \sin^2\theta\,d\phi^2 .$$

In words: proper time is carried by the universal cosmic clock $t$ (the time read by observers who see the universe as isotropic), while all of space is a fixed shape multiplied by a single time-dependent size $a(t)$. Symbol by symbol:

- $t$ — **cosmic time**, the proper time of a "comoving" observer at rest with respect to the average matter (and the CMB). Isotropy singles it out.
- $(r,\theta,\phi)$ — **comoving coordinates**. A galaxy participating in the smooth expansion keeps *fixed* $(r,\theta,\phi)$ for all time. The grid labels.
- $a(t)$ — the **scale factor**, the one dynamical unknown. It carries the physical size; the coordinates are just labels. Only *ratios* of $a$ at different times are physical, so we are free to normalize $a(t_0)=1$ today ($t_0$ = present).
- $k$ — the **spatial curvature constant**, which can always be scaled to one of $\{-1,\,0,\,+1\}$: **open**, **flat**, **closed**. It fixes the *shape* of space; $a(t)$ fixes its size. (With this normalization $r$ is dimensionless and $a$ carries length; texts that set $a(t_0)=1$ instead let $k$ carry units. Either way physics lives in ratios.)

**In words, the whole metric:** time ticks normally ($-c^2dt^2$), and space is a rigid template — flat, spherical, or hyperbolic — inflated by the factor $a(t)^2$. GR's job (next lesson) is only to find $a(t)$.

**Comoving vs. proper distance.** The comoving separation between us and a galaxy is a fixed number $\chi$ (the radial coordinate distance, $\chi=\int_0^r dr'/\sqrt{1-kr'^2}$). The physically measured **proper distance** at time $t$ — what a chain of rulers laid end to end right now would read — is

$$d(t) = a(t)\,\chi .$$

In words: comoving distance is frozen; proper distance grows because $a(t)$ grows. Galaxies are not moving *through* space — their comoving coordinates are constant. Space itself is expanding underneath them.

**The Hubble parameter.** Differentiate $d(t)=a(t)\chi$ at fixed comoving $\chi$:

$$\dot d = \dot a\,\chi = \frac{\dot a}{a}\,(a\chi) = H(t)\,d, \qquad \boxed{H(t) \equiv \frac{\dot a}{a}}$$

where $\dot a = da/dt$. Evaluated today this is **Hubble's law**, $v = H_0\,d$: recession speed is proportional to distance, with $H_0 \equiv H(t_0)\approx 70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$. In words: the expansion rate $H$ is the fractional growth rate of every distance per unit time, and it makes *every* comoving pair recede at a speed set by how far apart they are — exactly the pattern you'd see from any galaxy, which is why the uniform recession has no center.

**The cosmological redshift.** Light travels on null radial paths, $ds^2=0 \Rightarrow c\,dt = a(t)\,d\chi$. Track two successive wave crests emitted at $t_e$ and $t_e+\delta t_e$ and received at $t_0$ and $t_0+\delta t_0$. Both crests cross the *same fixed comoving distance* $\chi$, so $\int_{t_e}^{t_0} c\,dt/a = \int_{t_e+\delta t_e}^{t_0+\delta t_0} c\,dt/a$; subtracting the overlapping middle gives $\delta t_e/a(t_e) = \delta t_0/a(t_0)$. Since a wave period is proportional to its wavelength ($\delta t = \lambda/c$),

$$1 + z \equiv \frac{\lambda_{\text{obs}}}{\lambda_{\text{emit}}} = \frac{a(t_0)}{a(t_{\text{emit}})} .$$

In words: light's wavelength stretches by exactly the factor the universe grew while the light was in flight. The **redshift** $z$ is a direct readout of relative size — see a galaxy at $z=2$ and you are seeing light from an era when the universe was $1/(1+z)=1/3$ of its present size. This is a *geometric* stretch of space, not a Doppler shift (the "Watch out" and Problem 3 make that precise), though for nearby galaxies it reduces to the familiar Doppler formula (Problem 2).

**The three geometries and curvature.** The constant $k$ sets the shape of the spatial slices:

| $k$ | geometry | spatial slice | volume | angles of a triangle |
|---|---|---|---|---|
| $+1$ | **closed** | 3-sphere | finite | $>180^\circ$ |
| $0$ | **flat** | Euclidean $\mathbb{R}^3$ | infinite | $=180^\circ$ |
| $-1$ | **open** | hyperbolic | infinite | $<180^\circ$ |

Which one we live in is not decided by the metric — it is decided by *how much stuff* the universe contains. Plugging FLRW into Einstein's equations ([6.7](#/lesson/relativity/06-07-friedmann-equations.md)) will tie the sign of $k$ to whether the total density exceeds, equals, or falls short of a **critical density**: over-dense $\Rightarrow$ closed, exactly critical $\Rightarrow$ flat, under-dense $\Rightarrow$ open. (Measurements put us within a percent of flat.)

**Setting up the dynamics.** The metric has one unknown, $a(t)$, and one geometric constant, $k$. Feed this metric and a perfect-fluid stress–energy tensor $T^{\mu\nu}$ (density $\rho$, pressure $p$) into $G_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu}$ and the ten field equations collapse — by homogeneity and isotropy — to just **two** ordinary differential equations for $a(t)$, the **Friedmann equations**. That reduction is the whole content of the next lesson; here we have built the stage.

## Picture

![Left: an early small comoving grid with three galaxies at grid nodes and an arrow to a larger grid at the present time — the same galaxies at the same comoving nodes but now farther apart, with a short blue light wave stretching into a long red wave below (cosmological redshift, 1+z = a(t0)/a(te) = lambda_obs/lambda_emit). Right: the three spatial geometries — a closed sphere (k=+1), a flat perspective grid (k=0), and an open saddle (k=-1) — with a note that k is tied to total density in Lesson 6.7.](assets/06-06-fig1.svg)

The galaxies never leave their grid intersections — their comoving coordinates are frozen. What grows is $a(t)$, the spacing of the grid itself, and light in flight stretches by the very same factor. The three shapes on the right are the only spatial geometries a homogeneous, isotropic space can have; which one is ours is a question about density, answered next lesson.

## Worked examples

**Example 1 (mechanical — reading size and redshift off $a$).** We observe a quasar at redshift $z=1$. What was the universe doing when that light left? Normalize $a(t_0)=1$. Directly,

$$1+z = \frac{a(t_0)}{a(t_{\text{emit}})} \;\Rightarrow\; a(t_{\text{emit}}) = \frac{1}{1+z} = \frac{1}{2}.$$

So the light was emitted when every distance was **half** its present value — the observable universe was linearly half as big, hence $2^3 = 8$ times denser in volume. Its wavelengths have since doubled ($\lambda_{\text{obs}}=2\lambda_{\text{emit}}$): ultraviolet emission arrives as visible light. Notice we extracted all of this *without knowing $a(t)$'s functional form* — the redshift alone fixes the ratio of sizes. That is why redshift is cosmology's master ruler.

**Example 2 (why you'd care — Hubble's law and a first distance).** Take $H_0 = 70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$ and a galaxy at proper distance $d = 100$ Mpc. Its recession speed follows from $v=H_0 d$:

$$v = 70\ \frac{\mathrm{km/s}}{\mathrm{Mpc}} \times 100\ \mathrm{Mpc} = 7000\ \mathrm{km/s}.$$

This is not a peculiar motion through space — it is the grid stretching, $\dot d = (\dot a/a)\,d$. The light arrives redshifted; for this modest speed the shift is approximately $z \approx v/c = 7000/300000 \approx 0.023$, and inverting Hubble's law is exactly how the distance was *inferred* in the first place: measure $z$, get $v\approx cz$, divide by $H_0$. The Hubble parameter's reciprocal even sets a natural timescale — $1/H_0 \approx 14$ billion years, a back-of-envelope age of the universe, because $H_0=\dot a/a$ is the fractional growth rate and $1/H_0$ is roughly how long ago $a$ would have been zero if it had always grown at today's rate.

## Watch out

- **You might think the cosmological redshift is a Doppler shift.** It isn't. In the comoving frame every galaxy is *at rest* — its coordinates don't change — so nothing is "moving away" in the special-relativistic sense. The wavelength grows because the space the wave lives in grows: $1+z=a(t_0)/a(t_e)$, a geometric statement, not the SR formula $\sqrt{(1+\beta)/(1-\beta)}$. The two agree only for nearby sources (Problem 2), where the distinction can't be tested; for large $z$ the Doppler formula gives the *wrong* answer, and worse, it can't even produce $z>$ its ceiling. Cosmological redshift has no ceiling — arbitrarily large $z$ is fine.
- **You might think expanding space means everything expands.** It doesn't. Only unbound, comoving systems ride the expansion. Atoms, planets, the solar system, the galaxy — anything held together by a force (electromagnetic, gravitational) that overwhelms the cosmic stretch — keep their size. The rubber sheet stretches, but glued-down patches don't. "Space expands" is a statement about the large-scale average, not about rulers or you.
- **You might treat $a(t)$ as having an absolute size.** It doesn't — only ratios $a(t_1)/a(t_2)$ are physical, which is why we're free to set $a(t_0)=1$. Never write "the universe is $a$ meters across." Write "the universe has grown by a factor $a(t_0)/a(t_e)$."
- **You might think superluminal recession violates relativity.** Beyond the Hubble distance $d_H=c/H_0$, the recession speed $v=H_0 d$ exceeds $c$ — and that's allowed (Problem 3). Relativity forbids anything from *overtaking a light signal locally*; it says nothing about the growth rate of the distance between two objects that are each sitting still in their own patch of space.

## One-liner

> Homogeneous + isotropic forces the metric to be one rigid spatial shape ($k$) times a single breathing size $a(t)$ — from which Hubble's law ($v=\dot a\,\chi=H_0 d$) and the redshift ($1+z=a(t_0)/a(t_e)$) drop out as pure geometry, no galaxy actually moving.

## Problems

**P1 (🟢)** A galaxy's light is observed at redshift $z=2$. (a) Find the ratio $a(t_0)/a(t_{\text{emit}})$. (b) By what linear factor has the universe expanded since the light was emitted, and by what factor has a comoving volume grown? (c) A hydrogen line emitted at $121.6$ nm (ultraviolet) is observed at what wavelength?

**P2 (🟡)** Show that for a nearby galaxy the cosmological redshift reduces to Hubble's law and to the low-speed Doppler formula: expand $a(t_e)$ to first order in the light-travel time to get $z \approx H_0 d/c$, and hence the recession speed $v \approx cz$. Then find the recession speed of a galaxy at $z=0.1$ (give it in km/s and as a fraction of $c$).

**P3 (🔴, optional)** Explain, in physical terms, (a) why the cosmological redshift is *not* a Doppler shift, and (b) how a sufficiently distant galaxy can have a recession speed $v=H_0 d > c$ without violating relativity. For (b), find the proper distance (the "Hubble distance") at which $v=c$, using $H_0=70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}$.

<details>
<summary>Solutions</summary>

**P1** (a) By definition $1+z = a(t_0)/a(t_{\text{emit}})$, so with $z=2$,
$$\frac{a(t_0)}{a(t_{\text{emit}})} = 1+z = 3.$$
(b) The universe has grown by a **linear factor of 3** since emission (every proper distance tripled); a comoving volume, scaling as $a^3$, has grown by $3^3 = 27$. Equivalently, at emission the universe was $1/3$ its present linear size and $1/27$ its present volume — so $27$ times denser (for pressureless matter).
(c) Wavelengths stretch by the same factor $1+z=3$:
$$\lambda_{\text{obs}} = (1+z)\,\lambda_{\text{emit}} = 3 \times 121.6\ \mathrm{nm} = 364.8\ \mathrm{nm},$$
in the near-ultraviolet/violet — the Lyman-$\alpha$ line, redshifted out of the far-UV. (At higher $z$ this same line lands in the visible and then the infrared, which is how distant quasars are found.)

**P2** Consider a galaxy whose light took time $\Delta t = t_0 - t_e$ to reach us; for a nearby galaxy $\Delta t$ is small and the proper distance is $d \approx c\,\Delta t$. Taylor-expand the scale factor about the present:
$$a(t_e) = a(t_0 - \Delta t) \approx a(t_0) - \dot a(t_0)\,\Delta t = a(t_0)\Big[1 - \tfrac{\dot a(t_0)}{a(t_0)}\Delta t\Big] = a(t_0)\big[1 - H_0\,\Delta t\big].$$
Then
$$1 + z = \frac{a(t_0)}{a(t_e)} \approx \frac{1}{1 - H_0\Delta t} \approx 1 + H_0\,\Delta t \quad\Rightarrow\quad z \approx H_0\,\Delta t = H_0\,\frac{d}{c}.$$
So $cz \approx H_0 d$, which is **Hubble's law** with recession speed $v \equiv cz$, i.e. $v \approx H_0 d$ — and $z \approx v/c$ is precisely the **low-speed Doppler shift**. The cosmological and Doppler pictures coincide exactly in this near limit (which is why Hubble could interpret his redshifts as velocities). For $z=0.1$:
$$v \approx cz = 0.1\,c = 0.1 \times 3.00\times10^5\ \mathrm{km/s} = 3.0\times10^4\ \mathrm{km/s} = 0.1\,c.$$
(The exact FLRW recession speed differs from $cz$ at second order in $z$; at $z=0.1$ the correction is a few percent, negligible for this estimate.)

**P3** (a) In comoving coordinates every galaxy participating in the smooth expansion is *at rest*: its coordinates $(r,\theta,\phi)$ never change. Nothing is moving through space, so there is no relative velocity to plug into a Doppler formula. The light's wavelength grows for a different reason entirely — the wave is stretched along with the space it propagates through, by exactly the factor $a(t_0)/a(t_e)$ that the universe grew during transit. A true Doppler shift comes from a source's motion *through* space in a fixed spacetime; the cosmological shift comes from the geometry *of* spacetime changing while the light is in flight. (For nearby sources the two are numerically indistinguishable — P2 — but conceptually and for large $z$ they are different effects, and only the geometric one has no upper limit on $z$.)

(b) The recession speed $v=H_0 d$ is the rate of growth of a *proper distance*, not the speed of any object passing a fixed marker. Relativity's speed limit is *local*: no object may overtake a light signal as it passes through that object's own neighborhood, and no comoving galaxy ever does — locally each galaxy is at rest and light always outruns it. Summing up the local stretching of many intervening patches can make the total distance grow faster than $c$ without any local rule being broken; there is no single inertial frame spanning cosmological distances in which to even state a global speed limit. The recession speed hits $c$ at the **Hubble distance**
$$d_H = \frac{c}{H_0} = \frac{3.00\times10^5\ \mathrm{km/s}}{70\ \mathrm{km\,s^{-1}\,Mpc^{-1}}} \approx 4.3\times10^3\ \mathrm{Mpc} \approx 14\ \mathrm{billion\ light\text{-}years}.$$
Galaxies beyond $d_H$ recede faster than light — and we still see many of them, because the light we receive was emitted long ago when they were closer and $H$ was different. Superluminal recession is a statement about stretching space, not about motion through it.

</details>

## Flashback

**From Lesson 1.6 (Relativistic Doppler):** A star moves directly *away* from Earth at speed $\beta = v/c = 0.2$. Using the special-relativistic longitudinal Doppler formula, find the ratio $\lambda_{\text{obs}}/\lambda_{\text{emit}}$ and the redshift $z$. Compare with the naive estimate $z\approx\beta$, and say in one sentence why this SR calculation is *not* how a cosmological redshift of the same size would be computed.

<details>
<summary>Solution</summary>

For a source receding along the line of sight, the relativistic Doppler formula gives
$$\frac{\lambda_{\text{obs}}}{\lambda_{\text{emit}}} = \sqrt{\frac{1+\beta}{1-\beta}} = \sqrt{\frac{1.2}{0.8}} = \sqrt{1.5} \approx 1.225,$$
so $z = \lambda_{\text{obs}}/\lambda_{\text{emit}} - 1 \approx 0.225$. The naive estimate $z\approx\beta = 0.2$ is close but low by about 12% — the correction is the relativistic (time-dilation) piece that the linear formula misses. This computation assumes the star has a genuine velocity $v$ *through* a fixed Minkowski spacetime; a cosmological redshift of $z=0.225$ would instead be read straight off the expansion, $1+z = a(t_0)/a(t_e) = 1.225$, with the galaxy *at rest* in comoving coordinates and no velocity to insert — same number for nearby sources, entirely different mechanism (this lesson's "Watch out" and P3).

</details>

## Connections

- **Backward:** the FLRW line element is a specific case of the general metric $g_{\mu\nu}(x)$ and line element $ds^2=g_{\mu\nu}dx^\mu dx^\nu$ of [4.3](#/lesson/relativity/04-03-metric-proper-time.md) — here the time–time part is flat ($-c^2dt^2$) and the whole spatial part is one shape scaled by $a(t)^2$. Comoving proper distance is that lesson's proper-length integral. It is a solution *ansatz* for the Einstein equations of [5.3](#/lesson/relativity/05-03-einstein-field-equations.md), the cosmological sibling of the Schwarzschild solution of [6.1](#/lesson/relativity/06-01-schwarzschild-solution.md). And the cosmological redshift generalizes the relativistic Doppler shift of [1.6](#/lesson/relativity/01-06-relativistic-dynamics-optics.md), reducing to it for nearby sources.
- **Forward:** [6.7](#/lesson/relativity/06-07-friedmann-equations.md) plugs this metric and a perfect-fluid $T^{\mu\nu}$ into the Einstein equations to get the two **Friedmann equations** — the equations of motion for $a(t)$ — and solves them era by era; [6.8](#/lesson/relativity/06-08-cosmic-history-dark-universe.md) then reads off cosmic history, the CMB, and dark energy.
- **Sideways (astrophysics):** the same expanding universe is developed from the observational/astrophysical side in [astrophysics 6.1](#/lesson/astrophysics/06-01-expanding-universe-friedmann.md) (Hubble diagram, standard candles, the measured $H_0$); this lesson supplies the GR/metric *origin* of what that course takes as the starting point, and the accelerating (dark-energy) chapter continues in [astrophysics 6.5](#/lesson/astrophysics/06-05-dark-energy-acceleration.md).
