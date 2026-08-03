# Relativity (SR + GR) · Lesson 6.2: Orbits in Schwarzschild — precession and light bending

> ⏱ ~15 min · Module 6: Solutions — black holes & cosmology · Builds on: [6.1 The Schwarzschild solution](#/lesson/relativity/06-01-schwarzschild-solution.md), [4.5 Geodesics](#/lesson/relativity/04-05-geodesics.md) · Unlocks: 6.3 (horizons and the black-hole interior)

## Why this matters

Newton's gravity already fit the solar system to spectacular precision — so how do you *test* a replacement? You look where the two theories quietly disagree. General relativity, applied to the Schwarzschild metric of [6.1](#/lesson/relativity/06-01-schwarzschild-solution.md), makes three sharp predictions that Newton cannot: the ellipse of a bound orbit slowly **rotates** (Mercury's stubborn 43 arcseconds per century, unexplained for 60 years), starlight grazing the Sun is **bent by exactly twice** the naive amount, and — closest to a black hole — there is an **innermost stable orbit** below which matter simply falls in. These are not thought experiments. Mercury's precession was GR's first triumph; Eddington's 1919 measurement of the bent starlight made Einstein a household name overnight. This lesson extracts all three from a single object: the geodesic in Schwarzschild spacetime, packaged as a 1-D effective potential.

## The idea

A free particle in curved spacetime just follows a geodesic — the straightest available path ([4.5](#/lesson/relativity/04-05-geodesics.md)). The Schwarzschild geometry is static and round: it doesn't depend on the time coordinate $t$ or the orbital angle $\phi$. By the same logic that turns a cyclic coordinate into a conserved momentum, each of those symmetries hands you a **constant of motion** — an energy $E$ and an angular momentum $L$, both conserved along the orbit. With $L$ fixed, the angular motion is locked, and the entire problem collapses to the in-and-out motion of the radius $r$ — a bead rolling in a 1-D valley.

That is *exactly* the trick from Newtonian orbits ([mechanics-refresher 5.2](#/lesson/mechanics-refresher/05-02-orbits-effective-potential.md)): reduce the 2-D orbit to a particle of position $r$ in an **effective potential** $V_{\rm eff}(r)$. The punchline is that GR's valley has one extra term that Newton's lacks — an attractive $-r_s L^2/r^3$ pull that dominates at small $r$. That single term does everything. Far out, it's a tiny nudge that keeps a bound orbit from closing perfectly, so the ellipse precesses. Close in, it overwhelms the centrifugal barrier that in Newton's world walls particles off from the center — so the barrier develops a *peak* and then plunges, and anything with enough energy is captured. Newton has no capture and no precession; GR has both, from the same $1/r^3$ correction.

## The formal version

Work in the equatorial plane ($\theta=\pi/2$) with signature $(-,+,+,+)$, keeping $c$ and $G$ explicit. The Schwarzschild line element is

$$ds^2 = -\left(1-\frac{r_s}{r}\right)c^2\,dt^2 + \left(1-\frac{r_s}{r}\right)^{-1}dr^2 + r^2\,d\phi^2, \qquad r_s=\frac{2GM}{c^2},$$

where $M$ is the central mass and $r_s$ its Schwarzschild radius. Let an overdot denote $d/d\tau$ (proper time), so the four-velocity is $u^\mu=\dot x^\mu$.

**Conserved quantities from symmetry.** Because $g_{\mu\nu}$ contains no $t$ and no $\phi$, the vectors $\partial_t$ and $\partial_\phi$ are **Killing vectors** — directions in which the geometry is unchanged — and the contraction of a Killing vector with $u^\mu$ is constant along any geodesic ([5.2](#/lesson/relativity/05-02-matter-curved-spacetime.md)). This gives

$$E \equiv \left(1-\frac{r_s}{r}\right)c^2\,\dot t \quad(\text{energy per unit mass}), \qquad L \equiv r^2\,\dot\phi \quad(\text{angular momentum per unit mass}).$$

*In words:* time-translation symmetry conserves energy; rotational symmetry conserves angular momentum — Noether's theorem, read straight off the metric.

**The orbit becomes an energy equation.** For a massive particle the four-velocity is normalized to $g_{\mu\nu}u^\mu u^\nu=-c^2$. Writing that out and substituting $\dot t = E/[c^2(1-r_s/r)]$ and $\dot\phi=L/r^2$, then multiplying through by $(1-r_s/r)$, everything collapses to

$$\boxed{\;\dot r^2 = \frac{E^2}{c^2} - V_{\rm eff}(r), \qquad V_{\rm eff}(r) = \left(1-\frac{r_s}{r}\right)\!\left(c^2+\frac{L^2}{r^2}\right).\;}$$

*In words:* the radius moves like a 1-D particle of "energy" $E^2/c^2$ in the potential $V_{\rm eff}$; it turns around wherever $V_{\rm eff}(r)=E^2/c^2$. Expanding and using $r_s c^2 = 2GM$,

$$\tfrac12\big(V_{\rm eff}-c^2\big) = \underbrace{-\frac{GM}{r} + \frac{L^2}{2r^2}}_{\text{Newton's }U_{\rm eff}} \;\underbrace{-\;\frac{GM L^2}{c^2 r^3}}_{\text{GR correction}}.$$

The first two terms are precisely the Newtonian effective potential (gravity well plus centrifugal barrier). The extra term $-GML^2/(c^2r^3)=-r_sL^2/(2r^3)$ is **attractive, purely relativistic, and dies as $1/r^3$** — negligible far out, decisive near $r_s$.

**Perihelion precession.** Changing the independent variable from $\tau$ to $\phi$ and writing $u=1/r$ turns the orbit into the Binet equation

$$\frac{d^2u}{d\phi^2} + u = \frac{GM}{L^2} + \frac{3GM}{c^2}\,u^2 .$$

The Newtonian version is the same *without* the last term, and its solution is a closed ellipse. The extra $\tfrac{3GM}{c^2}u^2$ slightly lowers the frequency of the radial oscillation, so the radius returns to its minimum a little *after* one full turn — the perihelion advances each orbit by

$$\Delta\phi = \frac{6\pi GM}{c^2\,a\,(1-e^2)},$$

with $a$ the semi-major axis and $e$ the eccentricity ($a(1-e^2)$ is the semi-latus rectum). *In words:* the ellipse rotates a hair per orbit — the orbit is a slow rosette, not a fixed ellipse.

**Light bending.** A photon follows a *null* geodesic, $g_{\mu\nu}u^\mu u^\nu=0$, so the $c^2$ rest term drops out of $V_{\rm eff}$ and out of the Binet equation, leaving $u''+u=\tfrac{3GM}{c^2}u^2$. Starting from a straight line with impact parameter $b$ (closest approach if it went straight) and perturbing, the total deflection of the ray is

$$\delta = \frac{4GM}{c^2\,b}.$$

This is **twice** the value you get by treating light as a Newtonian particle falling in the equivalence-principle "time" part of gravity alone ([5.1](#/lesson/relativity/05-01-equivalence-principle.md)): half the bending comes from the warping of time, half from the warping of space, and only full GR includes both.

**Innermost stable circular orbit (ISCO).** Circular orbits sit at extrema of $V_{\rm eff}$. Requiring an extremum that is also a stable minimum fails below

$$r_{\rm ISCO} = 3r_s = \frac{6GM}{c^2},$$

the closest a massive particle can circle: inside it there is no stable orbit, and matter spirals in — the inner edge of a black-hole accretion disk.

## Picture

![Left: the Schwarzschild effective potential — the Newtonian curve has a centrifugal barrier rising to +infinity while the GR curve turns over at a finite peak and plunges to r=0, allowing capture; the shallow minimum is a stable circular orbit. Right: a precessing rosette orbit whose perihelion advances each turn.](assets/06-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — circular orbits and the ISCO).** Circular orbits occur where $dV_{\rm eff}/dr=0$. Differentiate $V_{\rm eff}=c^2 - \tfrac{r_sc^2}{r} + \tfrac{L^2}{r^2} - \tfrac{r_sL^2}{r^3}$:

$$\frac{dV_{\rm eff}}{dr} = \frac{r_s c^2}{r^2} - \frac{2L^2}{r^3} + \frac{3r_s L^2}{r^4} = 0 \;\;\Longrightarrow\;\; r_s c^2\, r^2 - 2L^2 r + 3r_s L^2 = 0.$$

This quadratic in $r$ has two roots — an outer stable orbit (a minimum) and an inner unstable one (the peak) — as long as its discriminant is positive:

$$4L^4 - 12\,r_s^2 c^2 L^2 > 0 \;\;\Longleftrightarrow\;\; L^2 > 3\,r_s^2 c^2.$$

At the threshold $L^2 = 3r_s^2 c^2$ the two roots **merge**: the minimum and maximum annihilate, and that marginal orbit is the ISCO. Its radius is the double root $r = L^2/(r_sc^2) = 3r_s^2c^2/(r_sc^2) = 3r_s = 6GM/c^2$. For less angular momentum there are no circular orbits at all — the particle plunges. (Contrast Newton, whose barrier always wins at small $r$: a circular orbit exists for *every* $L$, and there is no innermost one.)

**Example 2 (why you'd care — the bent starlight that made Einstein famous).** A ray grazing a spherical mass at impact parameter $b$ is deflected by $\delta = 4GM/(c^2 b)$. Two things make this the cleanest test of GR. First, the number: it is exactly **double** the "Newtonian" prediction $\delta_N = 2GM/(c^2 b)$ that you get from the equivalence principle applied to time-warping alone — so a measurement doesn't just check *whether* light bends, it checks the factor of 2 that distinguishes GR from a half-hearted patch of Newton. Second, the visibility: the effect is largest for a ray skimming the Sun's edge, but you can only see stars near the Sun during a total eclipse. In May 1919 Eddington's expeditions photographed stars near the eclipsed Sun and found them displaced by about $1.75''$ — GR's full value, not Newton's half. The result ran on front pages worldwide. Turn the same physics outward and it becomes **gravitational lensing**: a foreground galaxy or cluster bends the light of everything behind it into arcs, multiple images, and Einstein rings — today a workhorse for weighing dark matter and detecting exoplanets, developed in `astrophysics` ([black holes and their environments](#/lesson/astrophysics/04-03-black-holes-astrophysics.md)).

## Watch out

- You might think the extra $-r_s L^2/r^3$ term is a small correction that never matters. Far from the mass it *is* tiny — but it changes the *topology* of the potential: it turns the infinite centrifugal wall into a finite peak. That qualitative change (capture, the ISCO) has no Newtonian analog no matter how small the coefficient.
- You might think light bends by $4GM/(c^2b)$ "because photons have effective mass and fall." That reasoning gives only *half* the answer ($2GM/c^2b$). The missing half is the curvature of *space*, which a falling-particle picture ignores entirely. The factor of 2 is the whole point of the 1919 test.
- You might read $E$ and $L$ as literal energy and angular momentum in joules and kg·m²/s. They are **per unit mass** (and $E$ is a conserved-energy parameter, not $\tfrac12 mv^2$). Restore factors of the particle mass $m$ only at the very end if you want SI energies.
- You might expect the precession formula to contain $L$ or $E$. It doesn't — $\Delta\phi$ depends only on the orbit's *geometry* ($a$, $e$) and the central mass, because the observable is the shape's slow rotation, not the speed around it.

## One-liner

> One extra $1/r^3$ term in the effective potential — attractive, relativistic — makes bound orbits precess, doubles the bending of light, and puts a hard inner edge on stable orbits: three precision tests, one geodesic.

## Problems

**P1 (🟢)** Evaluate Mercury's perihelion precession. Use $\Delta\phi = \dfrac{6\pi GM}{c^2 a(1-e^2)}$ per orbit with $GM_\odot = 1.327\times10^{20}\ \mathrm{m^3/s^2}$, $c = 2.998\times10^8\ \mathrm{m/s}$, $a = 5.79\times10^{10}\ \mathrm{m}$, $e = 0.206$. Then multiply by $415$ orbits per century and convert to arcseconds ($1\ \mathrm{rad} = 206{,}265''$). You should land near the famous $43''$.

**P2 (🟡)** Compute the deflection of a light ray grazing the Sun's limb, $\delta = \dfrac{4GM_\odot}{c^2 R_\odot}$, with $R_\odot = 6.96\times10^8\ \mathrm{m}$ and the constants from P1. Convert to arcseconds, and state the value the equivalence principle alone (time-warping only) would have predicted.

**P3 (🔴, optional)** Sketch $V_{\rm eff}(r)=(1-r_s/r)(c^2+L^2/r^2)$ against the Newtonian $c^2 - 2GM/r + L^2/r^2$ (same axes). (a) Show that as $r\to 0$ the GR curve $\to -\infty$ while the Newtonian curve $\to +\infty$, and explain physically why this means GR allows capture but Newton does not. (b) From $r_sc^2 r^2 - 2L^2 r + 3r_sL^2=0$, show the two circular orbits merge when $L^2=3r_s^2c^2$ and that the merged (innermost stable) orbit sits at $r=3r_s=6GM/c^2$.

<details>
<summary>Solutions</summary>

**P1** First the semi-latus rectum: $a(1-e^2) = 5.79\times10^{10}\,(1-0.206^2) = 5.79\times10^{10}\times 0.9576 = 5.544\times10^{10}\ \mathrm{m}$.

Per orbit,
$$\Delta\phi = \frac{6\pi (1.327\times10^{20})}{(2.998\times10^8)^2\,(5.544\times10^{10})} = \frac{2.501\times10^{21}}{(8.988\times10^{16})(5.544\times10^{10})} = \frac{2.501\times10^{21}}{4.983\times10^{27}} = 5.02\times10^{-7}\ \mathrm{rad}.$$

Over a century: $5.02\times10^{-7}\times 415 = 2.083\times10^{-4}\ \mathrm{rad}$. Convert: $2.083\times10^{-4}\times 206{,}265 = 43.0''$ per century. ✓ This is the anomaly left over after subtracting the (much larger) Newtonian precession from other planets' tugs — the residual that Newton could not account for and GR nails.

**P2** 
$$\delta = \frac{4(1.327\times10^{20})}{(8.988\times10^{16})(6.96\times10^8)} = \frac{5.308\times10^{20}}{6.256\times10^{25}} = 8.49\times10^{-6}\ \mathrm{rad}.$$
In arcseconds: $8.49\times10^{-6}\times 206{,}265 = 1.75''$. ✓ The equivalence-principle-only ("Newtonian") prediction is exactly half, $0.875''$; Eddington's $1.75''$ picked GR over the halfway theory.

**P3** (a) As $r\to0$: the GR potential $V_{\rm eff}=(1-r_s/r)(c^2+L^2/r^2)$ is dominated by the cross term $-\tfrac{r_s}{r}\cdot\tfrac{L^2}{r^2}=-\tfrac{r_sL^2}{r^3}\to-\infty$. The Newtonian $L^2/r^2\to+\infty$ with no such term, so it $\to+\infty$. *Physically:* the Newtonian centrifugal barrier is an infinite wall — a particle with any $L$ is always turned back before reaching the center, so it can never be captured. In GR the $-r_sL^2/r^3$ term overtakes the $+L^2/r^2$ barrier at small $r$, so the wall becomes a finite **peak** and then drops to $-\infty$. Any particle whose $E^2/c^2$ exceeds the peak sails over it and falls in — capture, with no Newtonian counterpart.

(b) Circular orbits solve $dV_{\rm eff}/dr=0$, i.e. $r_sc^2 r^2 - 2L^2 r + 3r_sL^2 = 0$ (Example 1). The number of real roots is set by the discriminant $\mathcal D = (2L^2)^2 - 4(r_sc^2)(3r_sL^2) = 4L^4 - 12r_s^2c^2L^2 = 4L^2(L^2 - 3r_s^2c^2)$. For $L^2>3r_s^2c^2$ there are two orbits (stable min + unstable max); they **merge** when $\mathcal D=0$, i.e. $L^2 = 3r_s^2c^2$. At that point the double root is
$$r = \frac{2L^2}{2r_sc^2} = \frac{L^2}{r_sc^2} = \frac{3r_s^2c^2}{r_sc^2} = 3r_s = \frac{6GM}{c^2}. \checkmark$$
Below this radius no stable circular orbit exists — the ISCO, the inner edge of an accretion disk.

</details>

## Flashback

**From Lesson 6.1 (The Schwarzschild solution):** For a non-rotating star or black hole of mass $M$, (a) write the Schwarzschild radius $r_s$ in terms of $G$, $M$, $c$, and (b) compute it for the Sun ($M_\odot=1.99\times10^{30}$ kg), then state which metric coefficient vanishes there and which blows up.

<details>
<summary>Solution</summary>

(a) $r_s = \dfrac{2GM}{c^2}$.

(b) $r_s = \dfrac{2(6.674\times10^{-11})(1.99\times10^{30})}{(2.998\times10^8)^2} = \dfrac{2.657\times10^{20}}{8.988\times10^{16}} \approx 2.95\times10^{3}\ \mathrm{m} \approx 2.95\ \mathrm{km}$ — about 3 km, far inside the Sun, so the Sun has no horizon.

At $r=r_s$ the factor $(1-r_s/r)$ vanishes, so $g_{tt}=-(1-r_s/r)c^2\to 0$ (clocks appear to freeze to a distant observer) while $g_{rr}=(1-r_s/r)^{-1}\to\infty$. This is a *coordinate* singularity of the Schwarzschild chart, not a true one — a distinction lesson 6.3 makes precise. ✓

</details>

## Connections

- **Backward:** this is [mechanics-refresher 5.2](#/lesson/mechanics-refresher/05-02-orbits-effective-potential.md)'s effective-potential method transplanted onto a geodesic — same "freeze $L$, watch $r$ in a 1-D valley" move, with one relativistic term added. The conserved $E$ and $L$ come from the metric's Killing symmetries the way cyclic-coordinate momenta come from a Lagrangian ([4.5](#/lesson/relativity/04-05-geodesics.md)), and the doubled light bending settles the factor-of-2 question raised by the equivalence principle in [5.1](#/lesson/relativity/05-01-equivalence-principle.md).
- **Forward:** the peak that swallows particles is the seed of the horizon in [6.3](#/lesson/relativity/06-03-black-holes-horizons.md); the ISCO at $3r_s$ sets the inner radius (and so the efficiency and spectrum) of accretion, refined once spin is added in [6.4](#/lesson/relativity/06-04-kerr-charged-holes.md).
- **Sideways (astrophysics):** gravitational lensing is this lesson's deflection formula applied to cosmological sources — the tool `astrophysics` uses to map dark matter and hunt exoplanets, and the same bending that produces a black hole's photon ring.
