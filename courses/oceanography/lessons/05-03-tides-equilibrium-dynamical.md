# Physical Oceanography · Lesson 5.3: Tides — equilibrium and dynamical theory

> ⏱ ~15 min · Module 5: Waves, tides and the equatorial ocean · Builds on: [5.1](05-01-internal-waves.md), [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) · Unlocks: [5.4](05-04-equatorial-waves-undercurrent.md)

## Why this matters

Tides are the one ocean phenomenon everyone has seen, and the standard explanation of them — two bulges of water, one under the moon and one opposite, sweeping round the Earth as it turns — is wrong in almost every particular that matters. It predicts a range of about half a metre; the observed range runs from a few centimetres in the Mediterranean to sixteen metres in the Bay of Fundy. It predicts high water beneath the moon; the actual phase lag is hours and varies from place to place. It predicts a wave travelling westward; real tides rotate around fixed nodal points scattered across every ocean basin.

The equilibrium theory is nonetheless indispensable, because it gets the **forcing** exactly right. What it gets wrong is the **response**, and the gap between the two is the whole of dynamical tidal theory: the ocean is a forced, damped, resonant system whose basins have their own natural periods, and it responds accordingly.

Tides also matter far beyond the shoreline. They dissipate 3.5 TW — a number that can be inferred from the Earth's slowing rotation alone — and about a third of that goes into the deep ocean as internal tides ([5.1](05-01-internal-waves.md)), where it supplies a large share of the mixing energy that [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) showed the overturning requires. **The moon stirs the abyss.**

## The idea

**The tide-raising force is a difference, not a pull.** The moon's gravity accelerates the whole Earth, and only the *departure* from the mean acceleration is felt as a tidal force. That difference is the gradient of the moon's field across the Earth, so it falls off as $1/r^3$ rather than $1/r^2$.

**Which is why the moon beats the sun.** The sun is 27 million times more massive but 390 times further away. On a $1/r^2$ law the sun would win by a factor of 180; on a $1/r^3$ law it loses by a factor of 2.2. **The extra power of $r$ is the whole reason lunar tides dominate**, and it is a good test of whether someone has understood the mechanism.

**Two bulges, because the force is quadrupolar.** On the near side the moon pulls water toward it more than it pulls the Earth; on the far side it pulls the Earth away from the water. Both produce an outward force. So there are two high waters per lunar day, not one.

**And the equilibrium answer is far too small.** Even a perfectly responsive global ocean would show a range of about 0.53 m for the moon. Observed ranges are commonly 2 to 4 m and reach 16 m. The excess is not extra forcing; it is **resonance**.

**Because the ocean cannot keep up.** A tidal bulge would have to travel westward at 460 m s⁻¹ at the equator to stay under the moon, and the fastest a long wave can travel in a 4 km ocean is $\sqrt{gH} = 200\ \mathrm{m\,s^{-1}}$. **The forcing outruns the ocean's ability to respond**, so the tide is not an equilibrium bulge but a forced wave, propagating at its own speed, reflecting off coasts, and interfering with itself.

**Which produces amphidromes.** In a rotating basin, the forced wave and its reflections combine into a pattern that rotates about nodal points where the range is zero — **amphidromic points** — with the range growing outward and high water occurring at successively later hours as you go round. The North Sea has three. Every ocean basin has several. **The tide is a wave going round a basin, not a bulge going round the Earth.**

## The formal version

**The tide-generating potential.** For a body of mass $M$ at distance $d$, the tidal potential at a point on the Earth's surface at angle $\psi$ from the sub-body point is

$$\Phi_t = -\frac{GM R_E^2}{d^3}\,P_2(\cos\psi), \qquad P_2(x) = \frac{3x^2-1}{2}.$$

*In words: the tidal potential is quadrupolar and falls off as the inverse cube of distance.* The $1/d^3$ is the essential feature and follows from taking the gradient of a $1/d^2$ field.

**The equilibrium tide.** Setting $g\eta = -\Phi_t$ and using $g = GM_E/R_E^2$:

$$\boxed{\ \eta(\psi) = A\,P_2(\cos\psi), \qquad A = \frac{M}{M_E}\frac{R_E^4}{d^3}\ }$$

*In words: the equilibrium sea surface takes the shape of the forcing potential, with an amplitude set by the mass ratio and the fourth power of Earth's radius over the cube of the distance.*

| Body | $M/M_E$ | $R_E^4/d^3$ (m) | $A$ (m) | Range $\tfrac32 A$ |
|---|---|---|---|---|
| Moon | $1.230\times10^{-2}$ | 29.0 | **0.357** | 0.535 m |
| Sun | $3.331\times10^{5}$ | $4.92\times10^{-7}$ | **0.164** | 0.246 m |

The range is $\tfrac32 A$ because $P_2$ runs from $+1$ at the sub-body point to $-\tfrac12$ at 90 degrees away.

$$\frac{A_{\text{moon}}}{A_{\text{sun}}} = 2.18.$$

**Spring and neap.** When sun and moon align (new and full moon) the two potentials add; at quadrature they oppose:

$$\text{spring range} = \tfrac32(A_m + A_s) = 0.78\ \mathrm{m}, \qquad \text{neap range} = \tfrac32(A_m - A_s) = 0.29\ \mathrm{m},$$

a ratio of 2.7 — which the real ocean reproduces well even though the absolute values are wrong by a factor of five. **The ocean's response amplifies the forcing but does not distort its spring–neap structure**, because both constituents have nearly the same period and therefore experience nearly the same basin response.

**The main constituents.**

| Symbol | Period | Origin | Relative amplitude |
|---|---|---|---|
| M2 | 12.4206 h | principal lunar semidiurnal | 100 |
| S2 | 12.0000 h | principal solar semidiurnal | 47 |
| N2 | 12.6583 h | lunar ellipticity | 19 |
| K1 | 23.9345 h | luni-solar diurnal | 58 |
| O1 | 25.8193 h | principal lunar diurnal | 41 |

The **form factor** $F = (K_1+O_1)/(M_2+S_2)$ classifies a port: $F<0.25$ semidiurnal (Atlantic Europe), $0.25<F<3$ mixed (US west coast), $F>3$ diurnal (Gulf of Mexico, parts of the South China Sea).

**Why the equilibrium theory fails, quantitatively.** The tidal bulge must circle the Earth once per lunar day. At the equator that requires a phase speed of

$$c_{\text{required}} = \frac{2\pi R_E}{24.84\ \mathrm{h}} = \frac{4.00\times10^{7}}{8.94\times10^{4}} = 448\ \mathrm{m\,s^{-1}},$$

but a shallow-water wave in a 4 km ocean travels at

$$c = \sqrt{gH} = \sqrt{9.81\times4000} = 198\ \mathrm{m\,s^{-1}}.$$

**The ocean is too slow by a factor of 2.3.** The response is therefore not in phase with the forcing at all; it is a forced oscillation driven above its natural frequency, which means it responds *out of phase*, and the whole equilibrium picture collapses.

**Laplace's tidal equations and the dynamical response.** The correct problem is the shallow-water equations on a rotating sphere with the tidal potential as a forcing term:

$$\frac{\partial\mathbf{u}}{\partial t} + f\hat{\mathbf z}\times\mathbf{u} = -g\nabla(\eta - \eta_{\text{eq}}), \qquad \frac{\partial\eta}{\partial t} + \nabla\cdot(H\mathbf{u}) = 0.$$

*In words: the ocean is driven by the difference between its actual surface and the equilibrium surface, so the forcing vanishes if the ocean ever catches up — which it never does.* These have no analytic solution for a real basin and are solved numerically; modern global tidal models, constrained by altimetry, are accurate to a few centimetres in the deep ocean.

**Resonance.** A semi-enclosed basin of length $L$ and depth $H$ has a quarter-wave resonant period

$$T_{\text{res}} = \frac{4L}{\sqrt{gH}}.$$

For the Gulf of Maine plus Bay of Fundy, $L \approx 270\ \mathrm{km}$ and $H \approx 75\ \mathrm{m}$:

$$T_{\text{res}} = \frac{4\times2.7\times10^{5}}{\sqrt{9.81\times75}} = \frac{1.08\times10^{6}}{27.1} = 3.98\times10^{4}\ \mathrm{s} = 11.1\ \mathrm{h},$$

against the M2 period of 12.42 h — **within 11 percent**, which for a lightly damped resonator is close enough to produce the world's largest tides.

**Dissipation and the recession of the moon.** Tidal friction transfers angular momentum from the Earth's rotation to the moon's orbit. Consequences, all measured:

| Quantity | Value | How known |
|---|---|---|
| Total tidal dissipation | 3.5 TW | Earth's spin-down; satellite altimetry |
| Deep-ocean share | about 1 TW | altimetric detection of internal tides |
| Lunar recession | 3.8 cm yr⁻¹ | lunar laser ranging |
| Lengthening of the day | 2.3 ms per century | ancient eclipse records, atomic clocks |

## Picture

![An amphidromic system. Twelve blue co-tidal lines radiate like clock hands from a central point, labelled 0 to 11 hours, showing where high water occurs at each hour of the tidal cycle. Three dashed grey co-range circles surround the centre, marking ranges of 1, 2 and 3 metres growing outward. A coral dot marks the amphidromic point itself, where the range is zero and all hours meet, and a curved coral arrow shows high water rotating anticlockwise as it does in the northern hemisphere](assets/05-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — why the moon wins).** Compute the equilibrium tidal amplitude for the moon and the sun, and their ratio. Take $M_E = 5.972\times10^{24}$ kg, $R_E = 6.371\times10^{6}$ m, $M_m = 7.348\times10^{22}$ kg, $d_m = 3.844\times10^{8}$ m, $M_s = 1.989\times10^{30}$ kg, $d_s = 1.496\times10^{11}$ m.

*Moon.*
$$\frac{M_m}{M_E} = 1.2304\times10^{-2}, \qquad \frac{R_E^4}{d_m^3} = \frac{1.6473\times10^{27}}{5.6805\times10^{25}} = 29.00\ \mathrm{m},$$
$$A_m = 1.2304\times10^{-2}\times29.00 = 0.357\ \mathrm{m}.$$

*Sun.*
$$\frac{M_s}{M_E} = 3.3305\times10^{5}, \qquad \frac{R_E^4}{d_s^3} = \frac{1.6473\times10^{27}}{3.3479\times10^{33}} = 4.920\times10^{-7}\ \mathrm{m},$$
$$A_s = 3.3305\times10^{5}\times4.920\times10^{-7} = 0.164\ \mathrm{m}.$$

*Ratio:* $0.357/0.164 = 2.18$.

*The counterfactual that makes the point.* If the tidal force went as $1/d^2$ — that is, if it were the direct gravitational attraction rather than its gradient — the ratio would be

$$\frac{M_m/d_m^2}{M_s/d_s^2} = \frac{7.348\times10^{22}/(3.844\times10^{8})^2}{1.989\times10^{30}/(1.496\times10^{11})^2} = \frac{4.973\times10^{5}}{8.888\times10^{7}} = 5.6\times10^{-3},$$

so the **sun** would dominate by a factor of 180. The observed 2.2:1 in favour of the moon is direct evidence that the tidal force is a gradient. It is one of the cleanest cases in geophysics where a power law can be read off a ratio of two observations.

**Example 2 (why you'd care — weighing the ocean's mixing energy from the length of the day).** The Earth's day is lengthening by 2.3 ms per century. Infer the total tidal dissipation, and connect it to [4.3](04-03-diapycnal-mixing-abyssal-recipe.md).

*The Earth's moment of inertia.*
$$I = 0.3307\,M_E R_E^2 = 0.3307\times5.972\times10^{24}\times(6.371\times10^{6})^2 = 8.02\times10^{37}\ \mathrm{kg\,m^2}.$$

*The rate of change of $\omega$.* With $T = 86\,400$ s and $dT/dt = 2.3\times10^{-3}\ \mathrm{s}$ per century $= 2.3\times10^{-3}/(3.156\times10^{9}\ \mathrm{s}) = 7.288\times10^{-13}$:

$$\omega = \frac{2\pi}{T}, \qquad \frac{d\omega}{dt} = -\frac{\omega}{T}\frac{dT}{dt} = -\frac{7.292\times10^{-5}}{86\,400}\times7.288\times10^{-13} = -6.15\times10^{-22}\ \mathrm{s^{-2}}.$$

*The power.*
$$P = \frac{d}{dt}\left(\tfrac12 I\omega^2\right) = I\omega\frac{d\omega}{dt} = 8.02\times10^{37}\times7.292\times10^{-5}\times(-6.15\times10^{-22}) = -3.6\times10^{12}\ \mathrm{W}.$$

**3.6 TW**, against the independently estimated 3.5 TW from altimetry and tide-gauge analysis.

*Why this is remarkable.* The input was a clock reading. Ancient Babylonian and Chinese eclipse records, compared with modern computed eclipse tracks, fix the Earth's cumulative rotational lag over 2700 years; atomic clocks refine it. From that alone, with no oceanography whatsoever, comes the total rate at which the tides dissipate energy — and hence, since about a third of it goes into the deep ocean as internal tides ([5.1](05-01-internal-waves.md)), roughly 1 TW of the 2 TW that [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) needs to sustain the abyssal stratification.

*The point.* **A global integral constraint can be worth more than a field campaign.** No amount of local microstructure profiling could have established the *total* tidal energy budget, because the dissipation is concentrated in places nobody would think to sample. But the whole budget shows up in one number that has been accumulating in the astronomical record for millennia. Whenever a quantity is a global sum of a heavy-tailed distribution ([4.3](04-03-diapycnal-mixing-abyssal-recipe.md), P2), look for an integral constraint before designing a survey.

*One honest caveat.* Not quite all of the 3.6 TW is oceanic — a small part (about 0.1 TW) is solid-Earth tidal friction, and a further correction is needed because glacial isostatic adjustment is *decreasing* the Earth's moment of inertia and partly offsetting the tidal braking. Accounting properly for this raises the *tidal* torque above the naive estimate, and the accepted oceanic figure is 2.5 TW with about 1 TW in the deep ocean.

## Watch out

- **You might think** the far-side bulge exists because of centrifugal force from the Earth–moon barycentre. **Actually** the standard and correct explanation is simply that the tidal force is the *difference* between the local lunar attraction and the mean attraction of the whole Earth: on the far side the Earth is pulled away from the water. The barycentric account can be made to work but is a frequent source of confusion and is unnecessary.
- **You might think** high tide occurs when the moon is overhead. **Actually** the phase lag varies from place to place by up to twelve hours, because the tide is a basin-scale wave with its own travel time. Tide tables are built from harmonic analysis of local records, not from lunar position.
- **You might think** the equilibrium theory's failure means it is useless. **Actually** it gives the *forcing* exactly, including the correct relative amplitudes of every constituent. Modern tidal prediction takes the equilibrium constituents as the input and fits each one's local amplitude and phase from data — the theory supplies the frequencies, and the ocean supplies the response.

## One-liner

> The tide-raising force is the gradient of gravity, so it falls off as the inverse cube of distance and the moon beats the sun despite being minuscule — but the equilibrium half-metre bulge it would raise is not what the ocean does, because the forcing outruns the fastest wave the ocean can support, and the result is a set of waves rotating about nodal points in each basin, resonantly amplified to sixteen metres where a basin's natural period happens to match.

## Problems

**P1 (🟢)** (a) Using $A = (M/M_E)(R_E^4/d^3)$, compute the equilibrium tidal amplitude Jupiter would raise on Earth at its closest approach, $d = 5.88\times10^{11}\ \mathrm{m}$, with $M_J = 1.898\times10^{27}\ \mathrm{kg}$. (b) Express it as a fraction of the moon's 0.357 m. (c) Comment on what this says about claims that planetary alignments influence terrestrial phenomena.

**P2 (🟡)** A semi-enclosed gulf is 180 km long with a mean depth of 40 m. (a) Compute its quarter-wave resonant period. (b) Compare with the M2 period of 12.42 h and the K1 period of 23.93 h, and say which constituent is closer to resonance. (c) The gulf is deepened by dredging to a mean depth of 55 m. Recompute the resonant period and state the effect on the tidal range. (d) Comment on the practical relevance of (c).

**P3 (🔴, optional)** Angular momentum and the receding moon. (a) The moon's orbital angular momentum is $L = M_m\sqrt{GM_E d}$ (circular orbit, $M_m \ll M_E$). Differentiate to relate $dL/dt$ to $dd/dt$, and evaluate for $dd/dt = 3.8\ \mathrm{cm\,yr^{-1}}$, using $GM_E = 3.986\times10^{14}\ \mathrm{m^3\,s^{-2}}$, $M_m = 7.348\times10^{22}$ kg, $d = 3.844\times10^{8}$ m. (b) The Earth's spin angular momentum is $I\omega$ with $I = 8.02\times10^{37}\ \mathrm{kg\,m^2}$. Using the $d\omega/dt = -6.15\times10^{-22}\ \mathrm{s^{-2}}$ derived in Example 2, compute $d(I\omega)/dt$. (c) Compare (a) and (b) and comment on whether angular momentum balances. (d) Extrapolating backwards at the present rate gives a moon at zero distance about 1.5 billion years ago, which contradicts the 4.5-billion-year age of the Earth–moon system. State the resolution, and connect it to this course's [4.3](04-03-diapycnal-mixing-abyssal-recipe.md).

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{M_J}{M_E} = \frac{1.898\times10^{27}}{5.972\times10^{24}} = 317.8,$$
$$\frac{R_E^4}{d^3} = \frac{1.6473\times10^{27}}{(5.88\times10^{11})^3} = \frac{1.6473\times10^{27}}{2.033\times10^{35}} = 8.103\times10^{-9}\ \mathrm{m},$$
$$A_J = 317.8\times8.103\times10^{-9} = 2.58\times10^{-6}\ \mathrm{m} = 2.6\ \mathrm{\mu m}.$$

(b) $$\frac{2.58\times10^{-6}}{0.357} = 7.2\times10^{-6},$$

about seven parts in a million of the lunar tide.

(c) Two and a half **micrometres** — a fiftieth of the width of a human hair, and far below the amplitude of any measurable oceanographic signal. Since every other planet is smaller, further, or both, the entire solar system beyond the sun and moon contributes a tide of order microns.

The general point: the $1/d^3$ dependence is brutally selective. Doubling the distance cuts the tide by eight, so anything not extremely close raises no tide worth the name however massive it is. Claims that planetary alignments affect earthquakes, weather or anything else on Earth fail on this arithmetic before any other consideration arises — and it is worth noticing that the *same* arithmetic is what makes the moon, an object of negligible mass, the dominant tidal influence.

**P2** (a) $$c = \sqrt{gH} = \sqrt{9.81\times40} = 19.81\ \mathrm{m\,s^{-1}},$$
$$T_{\text{res}} = \frac{4L}{c} = \frac{4\times1.8\times10^{5}}{19.81} = \frac{7.2\times10^{5}}{19.81} = 3.635\times10^{4}\ \mathrm{s} = 10.1\ \mathrm{h}.$$

(b) M2 is 12.42 h and K1 is 23.93 h. The resonant period 10.1 h is 19 percent below M2 and 58 percent below K1, so **M2 is much closer to resonance** — this gulf will be strongly semidiurnal with an amplified range.

(c) $$c = \sqrt{9.81\times55} = 23.23\ \mathrm{m\,s^{-1}}, \qquad T_{\text{res}} = \frac{7.2\times10^{5}}{23.23} = 3.10\times10^{4}\ \mathrm{s} = 8.6\ \mathrm{h}.$$

Deepening moves the resonant period **further from** M2 — from a 19 percent mismatch to a 31 percent mismatch — so the amplification falls and the **tidal range decreases**.

(d) This is not a hypothetical. Dredging, land reclamation and barrage construction all change a basin's effective length and depth, and hence its resonant period, and hence its tidal range — sometimes substantially and sometimes in the direction nobody wanted.

Documented cases run both ways. The tidal range in the Bay of Fundy has been calculated to *increase* by tens of centimetres if a tidal barrage were built, because shortening the resonant basin would move it *closer* to M2 resonance — a change with real consequences for flooding in Boston, 500 km away, since the Gulf of Maine and Fundy resonate together. Conversely, several heavily dredged estuaries (the Ems, the Elbe, parts of the Chesapeake) have measurably amplified or altered tidal ranges as their geometry changed.

The general lesson: **a resonant system's response is far more sensitive to geometry than to forcing.** The tidal forcing has not changed in millennia; the range at a given port can change by tens of percent within a human lifetime because someone moved a sandbank.

**P3** (a) $$L = M_m\sqrt{GM_E}\,d^{1/2} \;\Longrightarrow\; \frac{dL}{dt} = \frac{1}{2}M_m\sqrt{GM_E}\,d^{-1/2}\frac{dd}{dt} = \frac{L}{2d}\frac{dd}{dt}.$$

Evaluate $L$:
$$L = 7.348\times10^{22}\times\sqrt{3.986\times10^{14}\times3.844\times10^{8}} = 7.348\times10^{22}\times\sqrt{1.5322\times10^{23}} = 7.348\times10^{22}\times3.914\times10^{11} = 2.876\times10^{34}\ \mathrm{kg\,m^2\,s^{-1}}.$$

With $dd/dt = 3.8\times10^{-2}/3.156\times10^{7} = 1.204\times10^{-9}\ \mathrm{m\,s^{-1}}$:

$$\frac{dL}{dt} = \frac{2.876\times10^{34}}{2\times3.844\times10^{8}}\times1.204\times10^{-9} = 3.741\times10^{25}\times1.204\times10^{-9} = 4.50\times10^{16}\ \mathrm{kg\,m^2\,s^{-2}}.$$

(b) $$\frac{d(I\omega)}{dt} = I\frac{d\omega}{dt} = 8.02\times10^{37}\times(-6.15\times10^{-22}) = -4.93\times10^{16}\ \mathrm{kg\,m^2\,s^{-2}}.$$

(c) The moon gains $4.50\times10^{16}$ and the Earth loses $4.93\times10^{16}$, in the same units. **They agree to 9 percent**, and the balance closes.

The residual is real and interesting rather than an error: not all the Earth's lost spin angular momentum goes to the moon. A small part goes to the *Earth's orbit* about the sun via solar tides, and — more importantly — the moment of inertia $I$ is not constant, because post-glacial rebound is still redistributing mass toward the poles and *decreasing* $I$, which speeds the Earth up and partly offsets the tidal braking. Correcting for this is exactly why the accepted tidal dissipation (2.5 TW oceanic) differs from Example 2's naive 3.6 TW.

(d) Extrapolating the present recession rate backwards gives a "lunar close approach" at about 1.5 Gyr ago, which is impossible. The resolution is that **the present recession rate is anomalously high**, because tidal dissipation depends on the shape of the ocean basins and on how close their resonant periods are to the tidal frequencies — and the current continental configuration happens to place several major basins (notably the North Atlantic) unusually close to semidiurnal resonance.

Over geological time, as continents drift, basins have moved in and out of resonance, and the dissipation rate has varied by a large factor. Reconstructions using paleotidal models find much lower dissipation through most of the Proterozoic and Paleozoic, which comfortably reconciles the recession with a 4.5 Gyr age. This is supported independently by **tidal rhythmites** — laminated sediments that record individual tidal cycles — which show a shorter day and a closer moon in the past, but not nearly as close as naive extrapolation implies.

The connection to [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) is direct and worth stating: if tidal dissipation has varied by a factor of several over geological time, and if roughly a third of it drives abyssal mixing, then **the ocean's diapycnal diffusivity — and hence, on the mechanical view of [4.4](04-04-what-drives-the-overturning.md), the strength of the overturning circulation — has varied with continental configuration.** The same argument applies at glacial timescales, where a 120 m sea-level drop removes the shallow shelves where tidal energy is preferentially wasted. **The moon's orbit and the shape of the sea floor are, on this view, boundary conditions on the ocean's circulation.**

</details>

## Flashback

**From Lesson 5.1 (Internal waves):** An internal wave has $\omega = 5.0\times10^{-4}\ \mathrm{s^{-1}}$ in water with $N = 2.5\times10^{-3}\ \mathrm{s^{-1}}$ and $f = 8.0\times10^{-5}\ \mathrm{s^{-1}}$. (a) Confirm the wave can exist and compute the beam angle from the horizontal. (b) The sea floor slopes at a gradient of $0.20$. Compute the slope angle and determine whether it is subcritical, critical or supercritical for this wave. (c) State what happens to the wave on reflection, and what stratification would make this slope critical.

<details>
<summary>Solution</summary>

(a) The band is $f < \omega < N$: $8.0\times10^{-5} < 5.0\times10^{-4} < 2.5\times10^{-3}$. $\checkmark$

$$\sin\beta = \frac{\omega}{N} = \frac{5.0\times10^{-4}}{2.5\times10^{-3}} = 0.200 \;\Longrightarrow\; \beta = 11.5^\circ.$$

(b) $$\gamma = \arctan(0.20) = 11.3^\circ.$$

Since $\gamma = 11.3^\circ < \beta = 11.5^\circ$, the slope is **subcritical** — but only barely, by two tenths of a degree.

(c) On a subcritical slope the beam reflects forward and downslope, and the energy *spreads*: the reflected beam is broader and weaker than the incident one. But at this proximity to criticality the distinction is nearly meaningless. The amplification factor on reflection is

$$\left|\frac{\sin(\beta+\gamma)}{\sin(\beta-\gamma)}\right| = \left|\frac{\sin 22.85^\circ}{\sin 0.227^\circ}\right| = \frac{0.3884}{0.00396} = 98,$$

so the energy density is amplified nearly a hundredfold. **This slope is critical for practical purposes**, and the wave will break on it.

The slope would be *exactly* critical when $\sin\beta = \sin\gamma = \sin(11.3^\circ) = 0.196$, i.e.

$$N_{\text{crit}} = \frac{\omega}{0.196} = \frac{5.0\times10^{-4}}{0.196} = 2.55\times10^{-3}\ \mathrm{s^{-1}},$$

a 2 percent change from the actual $2.5\times10^{-3}$.

*Check.* Note how sharp the transition is: the amplification goes as $1/\sin(\beta-\gamma)$, so a 2 percent change in $N$ moves the system from strongly amplifying to a genuine singularity. **Criticality is not a knife edge you can miss by being slightly off** — it is a broad, strongly-amplifying band around an exact condition, which is why so much of the sea floor mixes vigorously despite the exact condition being met almost nowhere.

</details>

## Connections

- **Backward:** the internal tides these barotropic tides generate over topography are [5.1](05-01-internal-waves.md)'s beams; the energy they deliver is the tidal term in [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)'s 2 TW budget.
- **Forward:** the shallow-water equations used here reappear in [5.4](05-04-equatorial-waves-undercurrent.md) with $f = \beta y$, where they produce the equatorial Kelvin and Rossby waves that carry ENSO; and the resonance argument recurs whenever a basin's geometry sets its response.
- **Sideways (forced oscillators):** the ocean's tidal response is a damped driven oscillator driven *above* resonance in most basins, which is why the response lags the forcing by nearly half a period. The phase-and-amplitude machinery is [`ode-refresher` 2.3](../../ode-refresher/lessons/02-03-forcing-resonance.md)'s, and the tide is arguably its largest physical instance.
