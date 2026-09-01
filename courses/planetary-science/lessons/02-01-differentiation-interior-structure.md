# Planetary Science · Lesson 2.1: Differentiation and interior structure

> ⏱ ~15 min · Module 2: Planetary interiors and surfaces · Builds on: [1.3](01-03-accretion-dust-to-planetesimals.md), [1.5](01-05-meteorites-isotopic-clocks.md) · Unlocks: [2.2](02-02-thermal-evolution-heat-transport.md), [2.3](02-03-magnetic-fields-dynamo.md), [3.1](03-01-mass-density-moment-of-inertia.md)

## Why this matters

Nobody has drilled deeper than 12 km into any planet, including this one. Yet we say with confidence that Earth has an iron core 3480 km in radius, that Mercury's core fills five-sixths of its radius, and that the Moon's is tiny. Those are not guesses. They come from two numbers you can measure from a distance — a body's **mass** and its **moment of inertia** — plus the physics of what happens when a planet melts.

This lesson is the physics half. [3.1](03-01-mass-density-moment-of-inertia.md) is the measurement half, and it is worth knowing in advance that the measurement is weaker than it looks: one number cannot determine two unknowns, and the figure below shows exactly how the ambiguity bites.

## The idea

**Melt a mixed-up ball of rock and metal and it sorts itself.** Iron is about twice as dense as silicate rock, and once both are liquid the iron sinks. This is **differentiation**, and it is irreversible: once the metal is at the centre it stays there. A body that has differentiated has a metal core, a silicate mantle, and — after further partial melting — a low-density crust floated on top.

**Whether it happened depends on whether the body ever got hot enough, which depends mostly on when it formed and how big it is.** There are three heat sources, and they arrive at different times:

- **$^{26}$Al decay**, the dominant one, delivering its energy in the first few million years ([1.5](01-05-meteorites-isotopic-clocks.md)). A body larger than about 20–30 km that accreted within about 2 Myr of the CAIs melts on this alone; one that accreted 5 Myr later does not, because the $^{26}$Al has decayed away.
- **Accretional heating**, the kinetic energy of infalling material, which matters for large bodies and grows as $M^2/R$.
- **Core formation itself**, which is *self-amplifying*: dropping iron to the centre releases gravitational energy that heats the body further and makes more of it melt.

**So differentiation is a threshold phenomenon, and meteorites confirm it.** Iron meteorites are core fragments of bodies that melted; chondrites are from bodies that never did. Some iron meteorites have *older* Hf–W ages than the chondrites do — their parent bodies formed first, caught the $^{26}$Al, and melted, while the chondrite parents formed a couple of million years later and stayed cold. **The differentiated bodies are the older ones**, which is the opposite of the intuitive ordering and is one of the neatest results in the subject.

**Now, how do you detect a core from outside?** Mass over volume gives the mean density, which tells you the *average* composition but nothing about the arrangement — a well-mixed ball and a differentiated one with the same ingredients have identical mean density. What distinguishes them is how the mass is distributed in radius, and the quantity that measures that is the **moment of inertia**.

**A uniform sphere has $C/MR^2 = 0.4$ exactly. Concentrating mass toward the centre lowers it.** Earth's is 0.3307, well below 0.4, and that number alone proves Earth is strongly centrally condensed. The Moon's is 0.3931, barely below 0.4, which says the Moon is nearly uniform and its core must be small.

**But here is the catch, and it is the point of this lesson's figure.** $C/MR^2$ is *one* number, and a two-layer planet has *two* unknowns: how big the core is and how dense it is. Plot $C/MR^2$ against core size at fixed density contrast and you get a U-shaped curve — 0.4 at both ends, dipping in the middle — so any observed value below the minimum has **two** solutions: a small very dense core, or a large moderately dense one. Breaking that degeneracy needs an independent constraint.

## The formal version

**Hydrostatic equilibrium.** In a fluid or long-term-weak solid, pressure supports weight:

$$\frac{dP}{dr} = -\rho(r)\,g(r), \qquad g(r) = \frac{Gm(r)}{r^2}, \qquad m(r) = \int_0^r 4\pi r'^2\rho(r')\,dr'.$$

*In words: the pressure at any depth is the weight of everything above it, per unit area.* For a body of uniform density this integrates to a central pressure

$$P_c = \frac{3GM^2}{8\pi R^4}.$$

| Body | $\bar\rho$ (kg m$^{-3}$) | $g$ (m s$^{-2}$) | $P_c$, uniform | $P_c$, actual |
|---|---|---|---|---|
| Earth | 5513 | 9.82 | 173 GPa | 364 GPa |
| Mercury | 5425 | 3.70 | 24.5 GPa | ~40 GPa |
| Mars | 3932 | 3.73 | 24.8 GPa | ~42 GPa |
| Moon | 3346 | 1.62 | 4.7 GPa | ~5 GPa |

The uniform estimate is low by about a factor of two for the big bodies, because real density rises inward and the overlying weight is therefore larger. Use it as an order-of-magnitude anchor, never as a value.

**Hydrostatic equilibrium also decides a body's shape.** Above a radius of roughly 200–400 km (higher for rocky bodies, lower for icy ones) self-gravity overcomes material strength and the body relaxes to a sphere. Below it, shape is set by strength and collision history — which is why Vesta (263 km) is nearly round and Mathilde (27 km) is a lumpy potato.

**The moment of inertia.** For a spherically symmetric body,

$$C = \frac{8\pi}{3}\int_0^R \rho(r)\,r^4\,dr.$$

*In words: mass counts more the further out it sits — weighted by $r^2$ in the integrand's physics and by $r^4$ once the shell volume element is included.* Normalized:

$$\boxed{\ \frac{C}{MR^2}: \quad 0.4\ \text{uniform}, \quad <0.4\ \text{centrally condensed}, \quad \to0\ \text{point mass at the centre}\ }$$

**The two-layer model.** Core of density $\rho_c$ out to $xR$, mantle of density $\rho_m$ beyond, with $x = R_{\text{core}}/R$:

$$\frac{C}{MR^2} = \frac{2}{5}\,\frac{\rho_c x^5 + \rho_m(1-x^5)}{\rho_c x^3 + \rho_m(1-x^3)}.$$

*In words: it depends only on the density ratio and the core's fractional radius, not on the absolute densities.* Note it equals 0.4 at both $x=0$ and $x=1$ — a body that is all mantle and a body that is all core are each uniform.

| $\rho_c/\rho_m$ | minimum $C/MR^2$ | at $x=$ |
|---|---|---|
| 1.8 | 0.3557 | 0.731 |
| 2.1 | 0.3439 | 0.719 |
| 2.5 | 0.3307 | 0.705 |
| 3.0 | 0.3169 | 0.690 |

**Read the third row.** A density contrast of 2.5 can *just* produce Earth's 0.3307, and only at one specific core size. Any smaller contrast cannot produce it at all — which turns the moment of inertia into a lower bound on how dense Earth's core must be, without assuming anything about its composition.

**Observed values.**

| Body | $C/MR^2$ | Reading |
|---|---|---|
| Earth | 0.3307 | large dense core, strongly differentiated |
| Mercury | 0.346 | very large core, ~83 percent of the radius |
| Mars | 0.3644 | substantial core, roughly half the radius |
| Moon | 0.3931 | **nearly uniform** — core under 25 percent of the radius |
| Sun | ~0.07 | extreme central condensation, for comparison |

## Picture

![A plot of the moment-of-inertia factor C over M R squared against core radius as a fraction of planet radius, from 0 to 1. Three U-shaped curves are drawn for core-to-mantle density ratios of 1.8, 2.5 and 3.0; each starts at 0.400 when the core fraction is zero, dips to a minimum near a core fraction of 0.7, and returns to 0.400 when the core fills the whole body. Horizontal dashed lines mark the observed values for the Moon at 0.3931, Mars at 0.3644, Mercury at 0.346 and Earth at 0.3307, plus a line at 0.400 labelled uniform. Two dots mark where the Mars line crosses the density-ratio-2.5 curve, joined by a double-headed arrow showing that core fractions of about 0.44 and 0.91 both fit the same measurement](assets/02-01-fig1.svg)

The double-headed arrow is the lesson. One measured number, two admissible planets — and no amount of care in measuring $C/MR^2$ will separate them.

## Worked examples

**Example 1 (mechanical — sizing Mercury's core).** Mercury has $\bar\rho = 5427\ \mathrm{kg\,m^{-3}}$ and $R = 2440$ km. Model it as an iron core at $7000\ \mathrm{kg\,m^{-3}}$ inside a silicate mantle at $3200\ \mathrm{kg\,m^{-3}}$. Find the core radius, then check the predicted $C/MR^2$.

Mean density fixes $x$ directly, because the total mass must come out right:

$$\bar\rho = \rho_c x^3 + \rho_m(1-x^3) \;\Rightarrow\; x^3 = \frac{\bar\rho - \rho_m}{\rho_c - \rho_m} = \frac{5427-3200}{7000-3200} = \frac{2227}{3800} = 0.5861.$$

$$x = 0.5861^{1/3} = 0.8368, \qquad R_{\text{core}} = 0.8368\times2440 = 2042\ \mathrm{km}.$$

**Mercury's core reaches 84 percent of the way to its surface** — the mantle is a 400 km rind. Now the consistency check, with $\rho_c/\rho_m = 7000/3200 = 2.1875$:

$$\frac{C}{MR^2} = \frac25\,\frac{2.1875(0.8368)^5 + (1-0.8368^5)}{2.1875(0.8368)^3 + (1-0.8368^3)} = 0.3508.$$

Observed: **0.346**. The model is high by 0.005, about 1.5 percent.

That small discrepancy is real and it is informative. The model puts too much mass too far out, so the true Mercury is slightly *more* centrally condensed than two uniform layers — which is what you expect once you allow the core's density to rise with depth under 40 GPa of self-compression, and it is also consistent with a solid inner core. The agreement to 1.5 percent from a two-parameter model is the substantive result; the residual is where the next layer of detail lives.

**Example 2 (why you'd care — did the Moon ever melt?).** The Moon's $C/MR^2 = 0.3931$. With a density contrast of 2.1, what core size does that imply, and what does the answer mean?

From the figure's curve, or by solving the two-layer expression, $C/MR^2 = 0.3931$ at $x \approx 0.26$ on the small-core branch:

$$R_{\text{core}} \approx 0.258\times1737 = 448\ \mathrm{km}, \qquad \frac{M_{\text{core}}}{M} = \frac{\rho_c x^3}{\bar\rho} \approx \frac{7000\times0.0172}{3346} \approx 3.7\%.$$

Seismology from the Apollo stations puts the core at 330–350 km, i.e. $x\approx0.20$ and a mass fraction nearer 1.5 percent — the two-layer estimate is high, as it must be, since it is forced to blame all of the departure from 0.4 on a single uniform core.

Compare Earth: core radius 55 percent of $R$, and 32.5 percent of the mass. **The Moon's iron core is a few percent of Earth's mass fraction — a factor of twenty short.**

That deficiency is the single most important compositional fact about the Moon, and it is why the giant-impact hypothesis exists at all. Any theory that forms the Moon out of ordinary solar-system material has to explain where its iron went — and the answer that works is that the Moon was made from silicate mantle material blasted off a differentiated Earth *after* Earth's own iron had already drained to Earth's centre ([2.7](02-07-moon-earth-moon-system.md)). **The moment of inertia is what makes that argument quantitative**, and it was measurable long before anyone landed.

## Watch out

- **You might think mean density reveals a planet's structure, but it reveals only its bulk composition.** A homogeneous Earth and the real layered Earth have exactly the same mass and radius. Structure requires the moment of inertia, and even then only partially.
- **You might think a measured $C/MR^2$ determines the core, but it is one equation in two unknowns and the curve is not monotonic.** Values below the curve's minimum admit two core radii. Breaking the tie needs seismology (Earth, Moon, Mars), a tidal Love number ([3.2](03-02-gravity-topography-tidal-response.md)), or a composition assumption imported from meteorites.
- **You might think differentiation requires a large planet, but it requires early formation more than large size.** Vesta is 263 km across and fully differentiated, with a core, a mantle and a basaltic crust, because it accreted within about 1.5 Myr of the CAIs and caught the $^{26}$Al. Bodies twice its size that formed 3 Myr later are undifferentiated rubble.
- **You might think the uniform-sphere central pressure is a usable estimate, but it is low by roughly a factor of two for Earth-sized bodies.** It is a scaling tool ($P_c \propto M^2/R^4 \propto \rho^2R^2$), not a number to quote.

## One-liner

> Mean density says what a planet is made of; the moment of inertia says how it is stacked — and even that leaves two answers.

## Problems

**P1 (🟢)** A moon has $R = 1560$ km and $\bar\rho = 3010\ \mathrm{kg\,m^{-3}}$. (a) Compute its mass. (b) Compute its surface gravity. (c) Compute the central pressure for a uniform body, in GPa, and state whether the true value is higher or lower and why.

**P2 (🟡)** A body has $\bar\rho = 4200\ \mathrm{kg\,m^{-3}}$, modelled as a core at $7800\ \mathrm{kg\,m^{-3}}$ inside a mantle at $3300\ \mathrm{kg\,m^{-3}}$. (a) Find the core's fractional radius $x$. (b) Find the core's fraction of the total mass. (c) Compute the predicted $C/MR^2$.

**P3 (🔴, optional)** A newly discovered body has $C/MR^2 = 0.375$ and $\bar\rho = 3500\ \mathrm{kg\,m^{-3}}$. (a) Using $\rho_c = 7000$ and $\rho_m = 3200\ \mathrm{kg\,m^{-3}}$, use the mean density alone to find $x$, then check whether the resulting $C/MR^2$ matches. (b) It does not. Explain what that mismatch rules out and what it suggests instead. (c) Propose one measurement that would settle it, and say what each possible outcome would mean.

<details>
<summary>Solutions</summary>

**P1** (a) $$M = \tfrac43\pi R^3\bar\rho = \tfrac43\pi(1.56\times10^{6})^3\times3010 = \tfrac43\pi\times3.796\times10^{18}\times3010.$$
$$M = 1.590\times10^{19}\times3010 = 4.79\times10^{22}\ \mathrm{kg}.$$

(b) $$g = \frac{GM}{R^2} = \frac{6.674\times10^{-11}\times4.79\times10^{22}}{(1.56\times10^{6})^2} = \frac{3.197\times10^{12}}{2.434\times10^{12}} = 1.31\ \mathrm{m\,s^{-2}}.$$

(c) $$P_c = \frac{3GM^2}{8\pi R^4} = \frac{3\times6.674\times10^{-11}\times(4.79\times10^{22})^2}{8\pi(1.56\times10^{6})^4}.$$

$$\text{numerator} = 3\times6.674\times10^{-11}\times2.294\times10^{45} = 4.594\times10^{35},$$
$$\text{denominator} = 8\pi\times5.923\times10^{24} = 1.489\times10^{26},$$
$$P_c = 3.09\times10^{9}\ \mathrm{Pa} = 3.1\ \mathrm{GPa}.$$

The true value is **higher**, because real density increases inward, so there is more weight pressing down on the centre than a uniform model accounts for.

(These numbers are Europa's, to two significant figures.)

**P2** (a) $$x^3 = \frac{\bar\rho-\rho_m}{\rho_c-\rho_m} = \frac{4200-3300}{7800-3300} = \frac{900}{4500} = 0.2000, \qquad x = 0.2^{1/3} = 0.5848.$$

(b) $$\frac{M_{\text{core}}}{M} = \frac{\rho_c x^3}{\bar\rho} = \frac{7800\times0.2000}{4200} = \frac{1560}{4200} = 0.371.$$

The core is 58 percent of the radius but 37 percent of the mass — a useful reminder that fractional radius and fractional mass are very different numbers.

(c) With $\rho_c/\rho_m = 7800/3300 = 2.364$, $x = 0.5848$, $x^3 = 0.2000$, $x^5 = 0.0684$:

$$\frac{C}{MR^2} = \frac25\cdot\frac{2.364(0.0684)+(1-0.0684)}{2.364(0.2000)+(1-0.2000)} = \frac25\cdot\frac{0.1617+0.9316}{0.4728+0.8000} = \frac25\cdot\frac{1.0933}{1.2728}.$$

$$= 0.4\times0.8590 = 0.3436.$$

**P3** (a) $$x^3 = \frac{3500-3200}{7000-3200} = \frac{300}{3800} = 0.07895, \qquad x = 0.4290.$$

With $\rho_c/\rho_m = 2.1875$, $x^3 = 0.07895$, $x^5 = 0.01453$:

$$\frac{C}{MR^2} = \frac25\cdot\frac{2.1875(0.01453)+0.98547}{2.1875(0.07895)+0.92105} = \frac25\cdot\frac{0.03179+0.98547}{0.17270+0.92105} = \frac25\cdot\frac{1.01726}{1.09375}.$$

$$= 0.4\times0.93006 = 0.3720.$$

Predicted 0.3720 against observed 0.375 — the model is *low* by 0.003.

(b) The model predicts the body is slightly **more** centrally condensed than it actually is. A two-layer model with a dense core cannot be made less condensed by adjusting $x$, because $x$ is already pinned by the mean density; and lowering the assumed core density only raises the predicted value toward 0.4 by shrinking the contrast. So the mismatch rules out nothing about the core's *existence* but does rule out this particular density pair.

What it suggests is either (i) the core is less dense than pure iron — an iron–sulphur or iron–silicon alloy, which is exactly what light elements in a core do — or (ii) there is a low-density outer layer that the two-layer model has lumped into the mantle: a thick ice shell or a crust. Both push mass outward and raise $C/MR^2$. A third possibility, that the body is not in hydrostatic equilibrium or is not spherically symmetric, would invalidate the whole framework and should be checked first from its shape.

Note the sign matters here and is easy to get backwards: a *higher* $C/MR^2$ means *less* central condensation.

(c) The measurement to make is the **tidal Love number $k_2$** ([3.2](03-02-gravity-topography-tidal-response.md)), or equivalently the amplitude of forced libration, both of which respond to whether an interior layer is liquid rather than to how the mass is distributed.

- A **large $k_2$** would say a global liquid layer decouples the outer shell from the interior — favouring the low-density-outer-layer reading, with a subsurface ocean under an ice shell.
- A **small $k_2$**, consistent with a solid body throughout, would leave the alloy-core reading, and would then be strengthened by a bulk-composition argument from the meteorite record on how much sulphur or silicon a core of that size can hold.

Either way the point is structural: $C/MR^2$ constrains the mass distribution and nothing else, so breaking its degeneracy requires a measurement sensitive to a *different* property — rigidity, in this case.

</details>

## Flashback

**From Lesson 1.4 (Giant planets and migration):** A disk at 3 AU has aspect ratio $h = 0.045$ around a star of $1\,M_\odot = 3.33\times10^{5}\,M_\oplus$. (a) Compute the minimum gap-opening planet mass, in $M_\oplus$. (b) A $9\,M_\oplus$ core sits there. Does it open a gap? (c) The core's Type I migration time is 200,000 yr and the disk has 2 Myr left. State what happens to it and why that matters for whether this system ends up with a gas giant at 3 AU.

<details>
<summary>Solution</summary>

(a) $$\frac{M_p}{M_\star}\gtrsim 3h^3 = 3(0.045)^3 = 3\times9.1125\times10^{-5} = 2.734\times10^{-4},$$
$$M_p \gtrsim 2.734\times10^{-4}\times3.33\times10^{5} = 91\ M_\oplus.$$

(b) $9\,M_\oplus$ is a factor of ten below the threshold, so **no gap**: it is firmly in the Type I regime.

(c) With a migration time of 0.2 Myr and 2 Myr of disk remaining, the core crosses its own orbital radius roughly ten times over — it spirals inward and is lost to the star, or at best ends up in the innermost disk, long before it can reach the $\sim10\,M_\oplus$ crossover mass and begin runaway gas accretion.

**So this system does not end up with a gas giant at 3 AU**, and that is the Type I problem in a single case: the planet is destroyed by the very disk it needs in order to grow. The escape routes are the ones [1.4](01-04-giant-planets-migration.md) listed — a migration trap at a disk-structure transition where the net torque reverses sign, a lower disk surface density (since $t_{\text{I}}\propto1/\Sigma$), or faster core growth by pebble accretion so the crossover is reached before the migration clock runs out.

</details>

## Connections

- **Backward:** [1.3](01-03-accretion-dust-to-planetesimals.md) built the bodies that differentiate here; [1.5](01-05-meteorites-isotopic-clocks.md) supplies both the $^{26}$Al that melts them and the Hf–W clock that dates the core formation this lesson describes.
- **Forward:** [2.2](02-02-thermal-evolution-heat-transport.md) asks whether the resulting layers are still hot; [2.3](02-03-magnetic-fields-dynamo.md) needs a liquid conducting core to run a dynamo; [3.1](03-01-mass-density-moment-of-inertia.md) is the measurement side — how $M$ and $C/MR^2$ are actually obtained; [2.7](02-07-moon-earth-moon-system.md) turns the Moon's tiny core into an origin story.
- **Sideways:** [`geology` 5.1](../../geology/lessons/05-01-earths-internal-structure.md) assembles the evidence for Earth's own layers from rocks and seismic waves, and [`geophysics`](../../geophysics/syllabus.md) 5.1–5.4 does the deep Earth quantitatively; this lesson owns the comparative version, run on bodies nobody has visited. Hydrostatic equilibrium here is the same balance as the barometric law in [4.1](04-01-atmospheric-structure.md) — the only difference is whether $\rho$ is nearly constant or nearly proportional to $P$.
