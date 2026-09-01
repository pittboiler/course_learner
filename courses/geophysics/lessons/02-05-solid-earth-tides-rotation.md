# Geophysics · Lesson 2.5: Solid-Earth tides and rotation

> ⏱ ~15 min · Module 2: Gravity, the figure of the Earth & geodesy · Builds on: [2.1](02-01-figure-of-the-earth.md), [2.2](02-02-gravity-anomalies-reductions.md), [oceanography 5.3](../../oceanography/lessons/05-03-tides-equilibrium-dynamical.md) · Unlocks: [2.7](02-07-space-geodesy.md), [4.6](04-06-mantle-rheology-post-glacial-rebound.md)

## Why this matters

Twice a day the ground beneath you rises and falls by about a third of a metre. You do not notice, because your house, the road and the surveyor's benchmark all rise with you — there is no local reference to move against. But a gravimeter notices, a GNSS receiver notices, and any measurement at the sub-decimetre level has to remove it.

The body tide is also the only routine experiment that deforms the *entire planet* on demand, with a perfectly known forcing. Where a seismologist must wait for an earthquake, the tide arrives on schedule twice a day, and the ratio of response to forcing — the Love numbers — measures the whole Earth's elasticity in one number.

**Scope.** The tidal potential, the equilibrium tide, the ocean's dynamical response and the 3.5 TW dissipation budget all belong to [oceanography 5.3](../../oceanography/lessons/05-03-tides-equilibrium-dynamical.md), which is built and derives them properly. This lesson takes the forcing as given and owns what the **solid** Earth does with it, together with the rotational consequences.

## The idea

**The solid Earth is elastic, so it responds to the tidal potential — but not fully.** A completely fluid Earth would deform until its surface became an equipotential, giving the equilibrium tide of about 54 cm. Rock resists. The real Earth manages about 61 percent of that, so the ground goes up and down by roughly 33 cm.

**Three numbers describe the response, and they are called Love numbers.** $h$ says how far the surface moves radially, $l$ how far it moves horizontally, and $k$ how much *additional* potential the redistributed mass creates. All three are ratios of response to forcing, all are dimensionless, and all are measured to three or four digits — making them among the best-determined bulk properties of the planet.

**A gravimeter sees a combination of them, not just the ground moving.** Three effects superpose: the direct tidal acceleration, the fact that you have been lifted further from the centre of mass, and the extra attraction of the mass that has been redistributed. They combine into a single **gravimetric factor** of about 1.16.

**The tide is not quite in phase, and that lag is the engine of everything else.** Because the Earth is slightly anelastic, and much more because the *oceans* dissipate energy against the seafloor, the bulge lags the Moon. A lagging bulge exerts a torque: it slows the Earth's spin and accelerates the Moon outward. Days lengthen by about 2.3 ms per century and the Moon retreats 3.8 cm per year.

**And the rotation axis itself is not fixed.** It wanders around the figure axis on a 433-day **Chandler wobble** — a free oscillation of a slightly non-spherical spinning body, whose period is measurably longer than a rigid Earth's would be, because the Earth flexes. It precesses on a 26,000-year cycle as the Sun and Moon torque the equatorial bulge, and it nods with an 18.6-year nutation as the lunar orbit plane rotates.

**The length of day is a competition, and the loser tells you about ice.** Tidal friction lengthens the day; the mass returning toward the poles after deglaciation makes the Earth more compact and shortens it. The observed rate is smaller than the tidal prediction by exactly the amount that glacial rebound accounts for — so the clock on your wall is, in a real sense, a record of the last ice age.

## The formal version

**Love numbers.** For a tidal potential $V_2$ at the surface, the responses are

$$\delta r = h\,\frac{V_2}{g}, \qquad \delta\mathbf{u}_{\text{horiz}} = l\,\frac{\nabla_H V_2}{g}, \qquad V_{\text{induced}} = k\,V_2.$$

*In words: $h$ converts the tidal potential into a vertical displacement, $l$ into a horizontal one, and $k$ into the extra gravitational potential of the mass that moved.* For the Earth at semidiurnal periods:

$$h_2 \approx 0.61, \qquad k_2 \approx 0.30, \qquad l_2 \approx 0.085.$$

A perfectly rigid Earth would have $h = k = l = 0$; a perfectly fluid one, $h \to 1 + k$ with the surface becoming equipotential.

**The gravimetric factor.** A gravimeter records

$$\delta g = \delta\left(1 + h_2 - \tfrac32 k_2\right)\ \text{times the rigid-Earth tidal gravity}, \qquad \delta = 1 + h_2 - \tfrac32 k_2 \approx 1.16.$$

*In words: the direct tidal pull, plus 61 percent extra from being lifted, minus the attraction of the mass now bulging beneath you.* Tidal gravity variations reach about 0.2 to 0.3 mGal and must be removed from every precise gravity survey ([2.2](02-02-gravity-anomalies-reductions.md)).

**Ocean loading.** The ocean tide is a moving mass load on the crust, which depresses it. Near coasts this **ocean loading** displacement reaches several centimetres — comparable to the body tide, out of phase with it, and strongly dependent on local bathymetry. Any GNSS station within a few hundred kilometres of an ocean needs a loading model.

**Rotational consequences.**

| Motion | Period | Amplitude | Cause |
|---|---|---|---|
| Chandler wobble | 433 days | up to ~9 m at the pole (with the annual term) | free oscillation of a rotating oblate body |
| Annual wobble | 365 days | few metres | seasonal mass redistribution (atmosphere, water) |
| Precession | 25,772 yr | 23.4° cone | solar and lunar torque on the equatorial bulge |
| Nutation | 18.6 yr principal | ~9 arcsec | rotation of the lunar orbital plane |
| LOD variations | days to decades | ms | atmosphere (seasonal), core–mantle coupling (decadal) |

**The Chandler period.** For a **rigid** oblate body, the free (Euler) wobble period is

$$T_{\text{Euler}} = \frac{A}{C-A}\ \text{sidereal days} = \frac{1}{3.27\times10^{-3}} \approx 306\ \mathrm{days}.$$

The observed 433 days is longer because the Earth deforms in response to its own wobble, reducing the restoring torque:

$$T_{\text{Chandler}} = \frac{T_{\text{Euler}}}{1 - k_2/k_s},$$

with $k_s \approx 0.94$ the secular (fluid-limit) Love number. *In words: elasticity lets the bulge follow the axis part-way, which weakens the restoring effect and slows the wobble.*

**Length of day.** Angular momentum $L = C\Omega$ is nearly conserved on short timescales, so

$$\frac{\Delta\mathrm{LOD}}{\mathrm{LOD}} = -\frac{\Delta\Omega}{\Omega} = \frac{\Delta C}{C}.$$

*In words: make the Earth more compact and the day gets shorter; add angular momentum elsewhere and it gets longer.*

## Picture

![Left: a circle representing the solid Earth with a dashed coral ellipse drawn around it, elongated toward a small grey circle marked moon, labelled body tide about 33 centimetres. Notes state that the equilibrium tide is what a fluid Earth would do at 54 centimetres, that the real Earth is elastic and manages the fraction h2 equal to 0.61 of it, and that these Love numbers are a direct measurement of the whole planet's stiffness with no earthquake required. Right: a small circle with a blue spiral path traced inside it and a coral dot at the centre, labelled polar motion, the Chandler wobble at 433 days beating against an annual term, about 9 metres of travel at the pole. Beside it a rotation axis with a curved coral arrow marked omega, annotated with tidal friction adding 2.3 milliseconds per century and rebound subtracting 0.7. A closing note says that slowing the spin and moving mass toward the poles pull the length of day in opposite directions, and the residual measures how much ice used to sit on Canada](assets/02-05-fig1.svg)

The tide deforms the planet on schedule; the rotation records what the deformation cost.

## Worked examples

**Example 1 (mechanical — how far does the ground move?).** The lunar equilibrium tide has an amplitude of 0.54 m at the sub-lunar point. Compute the body-tide displacement, the induced potential as an equivalent height, and the gravimetric factor.

*Vertical displacement.*
$$\delta r = h_2\times0.54 = 0.61\times0.54 = 0.33\ \mathrm{m}.$$

*Induced potential, as a height.* The mass redistribution adds $k_2$ times the tidal potential, which in geoid-height terms (Bruns, [2.4](02-04-the-geoid.md)) is

$$\delta N_{\text{induced}} = k_2\times0.54 = 0.30\times0.54 = 0.16\ \mathrm{m}.$$

*Gravimetric factor.*
$$\delta = 1 + h_2 - \tfrac32k_2 = 1 + 0.61 - 0.45 = 1.16.$$

So a gravimeter reads 16 percent *more* tidal variation than a rigid Earth would give. Note the competition encoded in that number: being lifted 33 cm reduces gravity by $0.3086\times0.33 = 0.10$ mGal, while the mass that bulged up beneath you increases it — and the elastic response wins, but only just.

**Example 2 (why you'd care — the day is too short).** Tidal friction should be lengthening the day by 2.3 ms per century. Ancient eclipse records and modern timekeeping give about 1.7 ms per century. Show that glacial isostatic adjustment accounts for the difference, given the observed secular change $\dot J_2 = -2.6\times10^{-11}\ \mathrm{yr^{-1}}$.

*From $J_2$ to the moment of inertia.* $J_2 = (C-A)/(Ma^2)$, and the deglacial signal is dominated by the change in $C$:

$$\dot C \approx Ma^2\dot J_2 = 5.97\times10^{24}\times(6.378\times10^{6})^2\times(-2.6\times10^{-11}).$$

$$Ma^2 = 5.97\times10^{24}\times4.068\times10^{13} = 2.429\times10^{38}\ \mathrm{kg\,m^2}.$$

$$\dot C = 2.429\times10^{38}\times(-2.6\times10^{-11}) = -6.31\times10^{27}\ \mathrm{kg\,m^2\,yr^{-1}}.$$

*Over a century.*
$$\Delta C = -6.31\times10^{29}\ \mathrm{kg\,m^2}, \qquad \frac{\Delta C}{C} = \frac{-6.31\times10^{29}}{8.04\times10^{37}} = -7.85\times10^{-9}.$$

*The length-of-day change.*
$$\Delta\mathrm{LOD} = \mathrm{LOD}\times\frac{\Delta C}{C} = 86400\times(-7.85\times10^{-9}) = -6.8\times10^{-4}\ \mathrm{s} = -0.68\ \mathrm{ms\ per\ century}.$$

*The budget.*
$$+2.3\ (\text{tidal}) - 0.68\ (\text{GIA}) = +1.6\ \mathrm{ms\ per\ century},$$

against the observed 1.7. **The books balance to within the uncertainties.**

*Why this is worth pausing on.* Three completely independent lines of evidence meet here, and none of them was designed to test the others. The tidal term comes from lunar laser ranging, which measures the Moon's recession directly. The observed term comes from comparing the timing of eclipses recorded by Babylonian and Chinese astronomers with where the Sun's shadow would have fallen on a uniformly rotating Earth — a 2700-year baseline built from clay tablets. And the GIA term comes from satellite orbit tracking, which senses $J_2$ through the precession of satellite nodes ([2.7](02-07-space-geodesy.md)).

The residual is where the science lives. Because the tidal and eclipse numbers are well determined, the *difference* between them is a direct measurement of how fast mass is moving toward the poles, which depends on mantle viscosity — the same parameter that post-glacial rebound measures from uplift rates ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)). And in recent decades a second contribution has appeared in the same budget with the opposite sign: present-day ice-sheet melting moves water *away* from the poles, increasing $C$ and lengthening the day. **The Earth's rotation is now a monitor of contemporary ice loss**, measurable at the level of a few hundredths of a millisecond per century.

## Watch out

- **You might think** the body tide is negligible compared with the ocean tide. **Actually** the body tide is about 33 cm and the open-ocean equilibrium tide is about 54 cm — the same order. What makes the ocean tide dramatic is its *dynamical* amplification in shelf seas and bays ([oceanography 5.3](../../oceanography/lessons/05-03-tides-equilibrium-dynamical.md)), not its intrinsic size.
- **You might think** you would feel the ground rising 33 cm. **Actually** the body tide has a wavelength of thousands of kilometres, so the ground tilts by only about $10^{-7}$ radians and everything nearby rises together. What is detectable is the *strain* — a few parts in $10^{8}$ — which is exactly why long-baseline strainmeters and gravimeters, not levels, are the instruments that see it.
- **You might think** the Chandler wobble should have decayed away. **Actually** it should, and that is the puzzle: with a $Q$ of order 100 it would damp out in a few decades, yet it persists. Something re-excites it, and the current consensus attributes it mainly to fluctuating ocean-bottom pressure and atmospheric mass. A free oscillation that ought to be dead and is not is always a sign of a forcing you have not accounted for.

## One-liner

> The tide deforms the whole planet by a third of a metre on a known schedule, the Love numbers turn that response into a measurement of the Earth's stiffness, and the lag in the response slows the spin by an amount that the returning ice sheets partly cancel.

## Problems

**P1 (🟢)** At a given site the solar equilibrium tide has an amplitude of 0.25 m. (a) Compute the body-tide vertical displacement with $h_2 = 0.61$. (b) Compute the associated change in gravity from the height change alone, using the free-air gradient. (c) Compute the total tidal gravity variation using the gravimetric factor $\delta = 1.16$ applied to the rigid-Earth value of $0.3086\times0.25$ mGal, and comment on why the two answers differ.

**P2 (🟡)** (a) Compute the rigid-Earth Euler wobble period from $(C-A)/A = 3.27\times10^{-3}$. (b) Using $T_{\text{Chandler}} = T_{\text{Euler}}/(1-k_2/k_s)$ with $k_s = 0.94$ and the observed 433-day period, solve for $k_2$. (c) Compare with the seismically determined $k_2 \approx 0.30$ and comment on the agreement and on what could explain any discrepancy.

**P3 (🔴, bridges to [4.6](04-06-mantle-rheology-post-glacial-rebound.md))** Present-day ice loss from Greenland and Antarctica totals about 400 Gt/yr, transferred from high latitude to the global ocean. (a) Treating the ice as removed from latitude 75° and spread uniformly over the ocean, argue qualitatively whether $C$ increases or decreases, and hence whether the day lengthens or shortens. (b) The associated $\dot J_2$ from present-day ice loss is estimated at about $+0.5\times10^{-11}\ \mathrm{yr^{-1}}$. Compute its contribution to the length of day in ms per century. (c) Combine with the tidal and GIA terms of Example 2 and state the predicted present-day rate. (d) Explain why separating the GIA and present-day-ice contributions to $\dot J_2$ is difficult, and name one measurement that helps.

<details>
<summary>Solutions</summary>

**P1** (a) $$\delta r = 0.61\times0.25 = 0.153\ \mathrm{m}.$$

(b) $$\delta g_{\text{height}} = -0.3086\ \mathrm{mGal\,m^{-1}}\times0.153\ \mathrm{m} = -0.047\ \mathrm{mGal}.$$

Negative — being lifted reduces gravity.

(c) The rigid-Earth tidal gravity amplitude is $0.3086\times0.25 = 0.077$ mGal; with the gravimetric factor,

$$\delta g_{\text{total}} = 1.16\times0.077 = 0.089\ \mathrm{mGal}.$$

The two answers differ because they are different quantities. Part (b) computed only the effect of *moving the instrument*, which is one of three contributions and has the opposite sign to the direct tidal attraction. Part (c) is the full observable: the direct tidal acceleration, plus the free-air effect of the displacement, plus the attraction of the redistributed mass, in the combination $1 + h_2 - \tfrac32 k_2$. The lesson is that a gravimeter never measures one thing at a time, and interpreting its record requires the whole factor.

**P2** (a) $$T_{\text{Euler}} = \frac{A}{C-A} = \frac{1}{3.27\times10^{-3}} = 305.8\ \text{sidereal days} \approx 306\ \text{days}.$$

(b) $$433 = \frac{305.8}{1-k_2/0.94} \;\Rightarrow\; 1 - \frac{k_2}{0.94} = \frac{305.8}{433} = 0.7062,$$
$$\frac{k_2}{0.94} = 0.2938 \;\Rightarrow\; k_2 = 0.276.$$

(c) Against the seismically and tidally determined $k_2 \approx 0.30$, the agreement is good — about 8 percent. **Two completely different observations of the planet, one a 433-day free wobble of the rotation axis and one the twice-daily response to the Moon, give the same elastic constant.** That is a strong consistency check on the whole picture.

The residual discrepancy has real causes rather than being measurement error. The oceans participate in the wobble and are not included in a purely elastic $k_2$; the mantle is slightly anelastic, so the effective Love number at a 433-day period differs from its value at 12 hours ([5.3](05-03-attenuation-anelasticity.md)); and the core does not follow the mantle's wobble rigidly, which modifies the effective moment of inertia. Each of these is a few percent, and modelling them is how the wobble is turned into a constraint on core–mantle coupling.

**P3** (a) Mass is moved from high latitude — close to the rotation axis — to the global ocean, which is distributed over all latitudes and therefore on average **further** from the axis. So $C$ **increases**, and by $\Delta\mathrm{LOD}/\mathrm{LOD} = \Delta C/C > 0$ the day **lengthens**. This is the opposite sign to GIA, which moves mass back toward the poles.

(b) The arithmetic mirrors Example 2 with the opposite sign and a smaller magnitude:

$$\dot C = Ma^2\dot J_2 = 2.429\times10^{38}\times0.5\times10^{-11} = 1.21\times10^{27}\ \mathrm{kg\,m^2\,yr^{-1}}.$$

Over a century, $\Delta C = 1.21\times10^{29}$, so

$$\frac{\Delta C}{C} = \frac{1.21\times10^{29}}{8.04\times10^{37}} = 1.51\times10^{-9}, \qquad \Delta\mathrm{LOD} = 86400\times1.51\times10^{-9} = +0.13\ \mathrm{ms\ per\ century}.$$

(c) $$+2.3\ (\text{tidal}) - 0.68\ (\text{GIA}) + 0.13\ (\text{ice loss}) = +1.75\ \mathrm{ms\ per\ century},$$

matching the observed value closely. Note that the ice-loss term is small but growing, and it is the only term in the budget that is changing on a human timescale.

(d) **Because both are mass redistribution at high latitudes with similar spatial patterns, and $J_2$ is a single number.** GIA is the mantle flowing back under Hudson Bay and Fennoscandia; present-day melting is ice leaving Greenland, a few hundred kilometres away. A single degree-2 coefficient cannot distinguish them, and this is a textbook case of two model parameters projecting onto nearly the same data functional — the resolution problem of [6.1](06-01-the-linear-inverse-problem.md).

Measurements that help:

- **GNSS vertical velocities** on bedrock ([2.7](02-07-space-geodesy.md)). GIA produces steady uplift with a distinctive broad pattern set by the ice sheet's *former* extent; present-day unloading produces uplift centred on where ice is being lost *now*, and — the key discriminator — with an **elastic**, essentially instantaneous response that tracks the melting year by year rather than decaying smoothly over millennia.
- **Time-variable gravity at higher spherical-harmonic degree.** GRACE resolves the mass field to degree 60 or so, and the two processes have different spatial spectra even though their degree-2 projections are similar. Fitting the whole field, not just $J_2$, separates them.
- **The time dependence itself.** GIA is essentially constant over decades; ice loss has accelerated measurably. A trend in the trend belongs to the ice.

</details>

## Flashback

**From Lesson 2.4 (The geoid):** A gravity anomaly of 25 mGal exists at spherical harmonic degree $\ell = 10$. Take $R = 6371$ km, $\gamma = 9.8\ \mathrm{m\,s^{-2}}$. (a) Compute the corresponding geoid height. (b) Compute the approximate wavelength. (c) A GNSS receiver reports $h = 1043.2$ m at a site where the geoid model gives $N = -12.6$ m; find the orthometric height.

<details>
<summary>Solution</summary>

(a) $$N_\ell = \frac{R\Delta g}{(\ell-1)\gamma} = \frac{6.371\times10^{6}\times2.5\times10^{-4}}{9\times9.8} = \frac{1592.8}{88.2} = 18.1\ \mathrm{m}.$$

(b) $$\lambda \approx \frac{2\pi R}{\ell} = \frac{4.003\times10^{4}}{10} = 4000\ \mathrm{km}.$$

(c) $$H = h - N = 1043.2 - (-12.6) = 1055.8\ \mathrm{m}.$$

Worth noticing how large the geoid correction is relative to what a survey typically cares about: 12.6 m is far more than any construction tolerance, and its *gradient* over a project's footprint is what actually matters. This is the practical reason every national mapping agency publishes a geoid model alongside its coordinate system.

</details>

## Connections

- **Backward:** the tidal potential and the equilibrium tide are [oceanography 5.3](../../oceanography/lessons/05-03-tides-equilibrium-dynamical.md)'s, which owns them; the free-air gradient used in the gravimetric factor is [2.2](02-02-gravity-anomalies-reductions.md)'s; $J_2$ and the moments of inertia are [2.1](02-01-figure-of-the-earth.md)'s, and the excess flattening flagged there is measured here as a rate.
- **Forward:** [2.7](02-07-space-geodesy.md) supplies the satellite measurements of $\dot J_2$ and the GNSS uplift rates that separate GIA from present-day ice loss; [4.6](04-06-mantle-rheology-post-glacial-rebound.md) converts the GIA signal into a mantle viscosity; [5.3](05-03-attenuation-anelasticity.md) explains why the Love numbers depend slightly on period.
- **Sideways:** the Love numbers are the planetary version of the elastic response of [1.1](01-01-the-elastic-earth.md), integrated over the whole body rather than measured on a sample — and the same $k_2$ measured for other planets and moons is the standard remote diagnostic of a subsurface ocean, which is [`planetary-science`](../../planetary-science/syllabus.md)'s business. The Chandler wobble is free precession of a rigid body from [`mechanics-refresher`](../../mechanics-refresher/syllabus.md), modified by elasticity; precession and nutation are the same torque-on-a-bulge problem as a spinning top.
