# Geophysics · Lesson 4.6: Mantle rheology and post-glacial rebound

> ⏱ ~15 min · Module 4: Heat flow, rheology & geodynamics · Builds on: [2.3](02-03-isostasy-airy-pratt.md), [2.7](02-07-space-geodesy.md), [4.4](04-04-mantle-convection-rayleigh-number.md) · Unlocks: [5.2](05-02-mineral-physics-transition-zone.md), [6.1](06-01-the-linear-inverse-problem.md)

## Why this matters

Every result in Module 4 has contained a viscosity, and every one of them has taken it on faith. [4.4](04-04-mantle-convection-rayleigh-number.md) assumed $\nu = 10^{17}\ \mathrm{m^2\,s^{-1}}$ and showed that the Rayleigh number cannot be used to recover it, because $\delta \propto \nu^{1/3}$. [4.5](04-05-plate-driving-forces.md) showed that plate velocity is set by viscous resistance rather than by driving force. **The mantle's viscosity is the central unknown of geodynamics, and this lesson is where it gets measured.**

The measurement is possible because of an accident of geological history: the Pleistocene ice sheets loaded the crust for tens of thousands of years and were then removed, essentially instantaneously on a geological timescale. The Earth has been relaxing ever since, at a rate we can watch. **A vanished ice sheet is a rheology experiment with a known forcing and a measurable response.**

## The idea

**The same rock is elastic on short timescales and viscous on long ones.** A seismic wave passes through the mantle in seconds and the mantle behaves as a perfect elastic solid ([1.1](01-01-the-elastic-earth.md)). An ice sheet sits on it for ten thousand years and the mantle flows like a fluid. There is no contradiction: the material is **viscoelastic**, and which behaviour you see depends on how long you look.

**The dividing line is the Maxwell time, and it is surprisingly short.** $\tau_M = \eta/\mu$, viscosity over rigidity, comes out at around 250 years for the mantle. Anything faster than that is elastic; anything slower is viscous. Seismic waves are eight orders of magnitude on the fast side; ice ages are two orders on the slow side. **Nothing in geophysics sits near the boundary**, which is why the two regimes are usually treated as separate subjects.

**Load the Earth and it relaxes on a timescale set by viscosity and by the load's width.** A viscous half-space under a sinusoidal load relaxes exponentially, with a time constant proportional to viscosity and inversely proportional to the load's wavelength. Broad loads relax slowly; narrow ones quickly.

**Which turns the width of the ice sheet into a depth probe.** A load of wavelength $\lambda$ drives flow to a depth of roughly $\lambda/2$. So a small load samples the shallow mantle and a continental ice sheet samples the whole upper mantle and beyond. **Comparing loads of different sizes recovers viscosity as a function of depth** — the same reasoning as surface-wave dispersion in [1.2](01-02-seismic-wave-zoo.md), transplanted to a different physics.

**And the experiment is still running.** Fennoscandia is rising at up to 9 mm/yr with about 100 m still to come; Hudson Bay similarly. GNSS measures the rate, gravimetry measures the mass flow, and the secular change in $J_2$ measures the whole-planet effect ([2.5](02-05-solid-earth-tides-rotation.md)). Three independent observables of one process.

## The formal version

**Maxwell viscoelasticity.** A spring and a dashpot in series: the total strain rate is the sum of an elastic and a viscous part,

$$\dot\varepsilon = \frac{\dot\sigma}{\mu} + \frac{\sigma}{\eta}.$$

*In words: apply a stress and the material deforms instantly by $\sigma/\mu$, then keeps deforming at $\sigma/\eta$.* The crossover is the **Maxwell time**

$$\boxed{\ \tau_M = \frac{\eta}{\mu}\ }$$

With $\eta = 10^{21}$ Pa·s and $\mu = 1.4\times10^{11}$ Pa: $\tau_M = 7.1\times10^{9}\ \mathrm{s} = 226\ \mathrm{yr}$.

**Relaxation of a viscous half-space.** For a load of wavelength $\lambda$ removed at $t=0$, the remaining depression decays as $e^{-t/\tau}$ with

$$\tau = \frac{4\pi\eta}{\rho g\lambda}.$$

*In words: thicker fluid or narrower load means faster relaxation.* Note the direction: **broad loads relax more slowly**, because the material has further to flow.

**Depth sampled.** Flow driven by a load of wavelength $\lambda$ penetrates to a depth of order $\lambda/2$. This is what makes different-sized loads sample different depths:

| Load | $\lambda$ | Depth sampled | Inferred $\eta$ (Pa·s) |
|---|---|---|---|
| Lake Bonneville | ~200 km | ~100 km | $\sim10^{20}$ |
| Fennoscandia | ~3000 km | ~1500 km | $\sim10^{21}$ |
| Laurentide (Hudson Bay) | ~3000+ km | deeper still | $10^{21}$–$10^{22}$ |
| geoid over slabs ([2.4](02-04-the-geoid.md)) | whole mantle | lower mantle | $10^{22}$–$10^{23}$ |

**Creep mechanisms.** Two dominate, with quite different consequences:

| Mechanism | Stress dependence | Grain-size dependence | Where |
|---|---|---|---|
| diffusion creep | $\dot\varepsilon\propto\sigma$ (Newtonian, $n=1$) | strong, $\propto d^{-2}$ or $d^{-3}$ | low stress, fine grains, deep mantle |
| dislocation creep | $\dot\varepsilon\propto\sigma^{n}$, $n\approx3.5$ | none | high stress, coarse grains, upper mantle |

*In words: diffusion creep gives a genuine viscosity; dislocation creep makes the mantle shear-thinning, so it flows more easily where it is being deformed hardest.* Dislocation creep also **aligns crystals**, which is what makes the mantle seismically anisotropic ([5.5](05-05-anisotropy-mantle-flow.md)).

**Temperature and pressure dependence.**

$$\eta \propto \exp\!\left(\frac{E^* + PV^*}{RT}\right),$$

with activation energy $E^* \approx 300\ \mathrm{kJ\,mol^{-1}}$ and activation volume $V^*$. *In words: viscosity is exponentially sensitive to temperature, so small thermal anomalies produce large viscosity contrasts.* A 100 K temperature drop at 1600 K raises viscosity by a factor of about four.

**Why rebound is such a good experiment.** The forcing is known independently (ice-sheet reconstructions from glacial geology), it was removed abruptly, the response is large (hundreds of metres), and it is measured by three independent techniques. Few problems in solid-Earth geophysics are this well posed.

## Picture

![Left: a Maxwell material drawn as a blue spring in series with a coral dashpot, labelled with a rigidity of 1.4 times ten to the eleventh pascals and a viscosity of ten to the twenty-first pascal seconds. Below, a logarithmic timescale from one second through one year to ten thousand years, with a coral mark at the Maxwell time of about 250 years dividing an elastic regime on the left from a viscous regime on the right. A note says seismic waves at seconds never notice the dashpot while ice sheets at ten thousand years never notice the spring, and that everything in geodynamics depends on which side of the Maxwell time the problem sits. Right: a plot of uplift against time since deglaciation, rising steeply then flattening toward a dashed asymptote labelled full recovery, 850 metres. A coral marker partway up is labelled today, 750 metres done, 100 metres to go, 9 millimetres per year. A closing note gives the relaxation time formula and says that fitting the curve reads off the viscosity of the mantle](assets/04-06-fig1.svg)

Two hundred and fifty years is the whole difference between a rock and a fluid.

## Worked examples

**Example 1 (mechanical — the Fennoscandian viscosity).** Fennoscandia deglaciated about 10,000 years ago and its uplift decays with a relaxation time of about 4400 yr over a load wavelength of 3000 km. Take $\rho = 3300\ \mathrm{kg\,m^{-3}}$, $g = 10\ \mathrm{m\,s^{-2}}$. Find the mantle viscosity and the Maxwell time.

*Viscosity.*
$$\tau = \frac{4\pi\eta}{\rho g\lambda} \;\Longrightarrow\; \eta = \frac{\tau\rho g\lambda}{4\pi}.$$
$$\tau = 4400\ \mathrm{yr} = 4400\times3.156\times10^{7} = 1.389\times10^{11}\ \mathrm{s}.$$
$$\eta = \frac{1.389\times10^{11}\times3300\times10\times3.0\times10^{6}}{4\pi} = \frac{1.389\times10^{11}\times9.9\times10^{10}}{12.566}.$$
$$= \frac{1.375\times10^{22}}{12.566} = 1.09\times10^{21}\ \mathrm{Pa\,s}.$$

**About $10^{21}$ Pa·s** — the canonical value, and the number quietly assumed throughout this course.

*Maxwell time.*
$$\tau_M = \frac{\eta}{\mu} = \frac{1.09\times10^{21}}{1.4\times10^{11}} = 7.8\times10^{9}\ \mathrm{s} = 247\ \mathrm{yr}.$$

*Cross-check with [4.4](04-04-mantle-convection-rayleigh-number.md).* Converting to kinematic viscosity, $\nu = \eta/\rho = 1.09\times10^{21}/3300 = 3.3\times10^{17}\ \mathrm{m^2\,s^{-1}}$, against the $10^{17}$ assumed in the Rayleigh-number calculation. **Agreement to a factor of three** — which for a quantity spanning many orders of magnitude is a real confirmation, and it means the $Ra \approx 10^8$ estimate stands.

**Example 2 (why you'd care — reading viscosity as a function of depth).** Lake Bonneville, a Pleistocene lake in Utah, was about 200 km across and 300 m deep; its shorelines are now warped upward in the middle by about 65 m, and the relaxation time inferred from its history is roughly 4000 yr. Compare with Fennoscandia.

*Bonneville viscosity.*
$$\eta = \frac{\tau\rho g\lambda}{4\pi} = \frac{(4000\times3.156\times10^{7})\times3300\times10\times2.0\times10^{5}}{12.566}$$
$$= \frac{1.262\times10^{11}\times6.6\times10^{9}}{12.566} = \frac{8.33\times10^{20}}{12.566} = 6.6\times10^{19}\ \mathrm{Pa\,s}.$$

**About $7\times10^{19}$ Pa·s, more than an order of magnitude lower than Fennoscandia's $10^{21}$.**

*Is this a contradiction?* No — the two loads sample different depths. Bonneville's wavelength of 200 km drives flow only to roughly 100 km, so it measures the **asthenosphere**, the low-viscosity channel just below the plate. Fennoscandia's 3000 km wavelength drives flow to more than 1000 km, averaging over the whole upper mantle and transition zone.

*So the disagreement is the result.* Two loads of different sizes, each giving a self-consistent viscosity, and the difference between them says **viscosity increases with depth by more than a factor of ten between 100 km and 1000 km.** Adding the geoid constraint from [2.4](02-04-the-geoid.md) — which requires the lower mantle to be 10 to 100 times stiffer still — gives a profile rising from about $10^{20}$ Pa·s in the asthenosphere to $10^{22}$ or more in the deep mantle.

*Two things make this a good piece of science.* First, **the inference is essentially model-free at the level of the argument**: nothing about the comparison depends on a particular ice history or a particular Earth model, only on the fact that different-wavelength loads probe different depths. Second, the depth dependence has an independent physical explanation — viscosity depends exponentially on $T$ and on $PV^*/RT$ (the Arrhenius form above), and pressure rises far faster than temperature through the mantle, so viscosity should rise with depth. **A measurement and a mechanism, agreeing.**

*And the honest caveat.* The relaxation-time formula used here is for a uniform half-space, so applying it to loads of different wavelengths and then interpreting the differences as depth structure is a bootstrap: strictly, one should invert the observations for a depth-dependent profile directly. Modern GIA studies do exactly that, and they inherit all the resolution and null-space problems of [6.1](06-01-the-linear-inverse-problem.md) — different ice histories trade off against different viscosity profiles, and the two cannot be fully separated by rebound data alone. The order-of-magnitude conclusion survives; the details are model-dependent.

## Watch out

- **You might think** "the mantle is solid" and "the mantle flows" are in conflict. **Actually** both are true, at different timescales, and the Maxwell time tells you which applies. The mantle is a solid in every sense that matters to a seismic wave and a fluid in every sense that matters to an ice sheet.
- **You might think** viscosity is a single number for the mantle. **Actually** it varies by three or four orders of magnitude with depth, and exponentially with temperature — so it also varies laterally, being far lower under ridges and hotspots than under cratons. Quoting "the mantle viscosity" without saying which depth is a category error.
- **You might think** post-glacial rebound measures viscosity cleanly. **Actually** the inversion trades ice history against viscosity: a thicker ice sheet that melted earlier can mimic a stiffer mantle that is still relaxing. Independent constraints on the ice — from glacial geology, from relative sea-level curves at many sites, and now from the elastic-versus-viscous separation of [2.7](02-07-space-geodesy.md) — are what break the trade-off.

## One-liner

> Rock is elastic for anything faster than 250 years and viscous for anything slower, so a melted ice sheet is a rheology experiment — and comparing loads of different widths turns it into a measurement of viscosity as a function of depth.

## Problems

**P1 (🟢)** A deglaciated region has a load wavelength of 2000 km and a relaxation time of 3000 yr, with $\rho = 3300\ \mathrm{kg\,m^{-3}}$ and $g = 10\ \mathrm{m\,s^{-2}}$. (a) Compute the mantle viscosity. (b) Compute the Maxwell time with $\mu = 1.4\times10^{11}$ Pa. (c) Compute the kinematic viscosity.

**P2 (🟡)** (a) Using $\eta \propto \exp(E^*/RT)$ with $E^* = 300\ \mathrm{kJ\,mol^{-1}}$ and $R = 8.314\ \mathrm{J\,mol^{-1}\,K^{-1}}$, compute the factor by which viscosity changes between 1700 K and 1600 K. (b) Repeat for 1700 K versus 1500 K. (c) A mantle plume is 200 K hotter than its surroundings at 1600 K; compute the viscosity contrast and comment on what it implies for how a plume rises.

**P3 (🔴, bridges to [6.1](06-01-the-linear-inverse-problem.md))** Two relative sea-level curves are available from a formerly glaciated region: one from the centre of the former ice sheet and one 800 km outside its margin. (a) Explain qualitatively what each curve looks like, and why the peripheral site behaves differently. (b) A model with a thick ice sheet and a stiff mantle, and a model with a thinner ice sheet and a softer mantle, both fit the central curve equally well. Explain why, in terms of what the central uplift actually measures. (c) State how the peripheral site helps break the trade-off. (d) Name one modern measurement that constrains ice history independently of rebound, and explain the logic.

<details>
<summary>Solutions</summary>

**P1** (a) $$\tau = 3000\times3.156\times10^{7} = 9.468\times10^{10}\ \mathrm{s}.$$
$$\eta = \frac{\tau\rho g\lambda}{4\pi} = \frac{9.468\times10^{10}\times3300\times10\times2.0\times10^{6}}{12.566} = \frac{9.468\times10^{10}\times6.6\times10^{10}}{12.566}$$
$$= \frac{6.249\times10^{21}}{12.566} = 4.97\times10^{20}\ \mathrm{Pa\,s}.$$

(b) $$\tau_M = \frac{4.97\times10^{20}}{1.4\times10^{11}} = 3.55\times10^{9}\ \mathrm{s} = 113\ \mathrm{yr}.$$

(c) $$\nu = \frac{\eta}{\rho} = \frac{4.97\times10^{20}}{3300} = 1.5\times10^{17}\ \mathrm{m^2\,s^{-1}}.$$

**P2** (a) $$\frac{\eta(1600)}{\eta(1700)} = \exp\left[\frac{E^*}{R}\left(\frac{1}{1600}-\frac{1}{1700}\right)\right] = \exp\left[\frac{3.0\times10^{5}}{8.314}\left(6.250\times10^{-4}-5.882\times10^{-4}\right)\right]$$
$$= \exp\left[3.608\times10^{4}\times3.676\times10^{-5}\right] = \exp(1.327) = 3.77.$$

**Cooling by 100 K makes the mantle nearly four times stiffer.**

(b) $$\frac{1}{1500}-\frac{1}{1700} = 6.667\times10^{-4}-5.882\times10^{-4} = 7.843\times10^{-5},$$
$$\exp\left[3.608\times10^{4}\times7.843\times10^{-5}\right] = \exp(2.830) = 17.0.$$

(c) The plume is at 1800 K against 1600 K ambient:
$$\frac{1}{1600}-\frac{1}{1800} = 6.250\times10^{-4}-5.556\times10^{-4} = 6.944\times10^{-5},$$
$$\frac{\eta_{\text{ambient}}}{\eta_{\text{plume}}} = \exp\left[3.608\times10^{4}\times6.944\times10^{-5}\right] = \exp(2.506) = 12.3.$$

**The plume material is roughly twelve times less viscous than its surroundings.**

This is why plumes rise as narrow columns with a bulbous head rather than as broad, gentle upwellings. Low viscosity means the hot material can flow easily *within* the plume while the stiff ambient mantle resists being pushed aside, so the flow self-organizes into a thin conduit — the fluid-dynamical phenomenon of **viscous fingering**. It also means the conduit is self-sustaining: once established, the low-viscosity channel is the path of least resistance, and hot material keeps using it. The asymmetry with slabs is instructive: slabs are cold and therefore *stiff*, so they descend as broad rigid sheets, while plumes are hot and soft and rise as narrow pipes ([4.4](04-04-mantle-convection-rayleigh-number.md)).

**P3** (a) **At the centre**, the land was depressed by roughly 850 m under the ice and has been rebounding ever since. The relative sea-level curve shows sea level *falling* rapidly at first and then more slowly — a decaying exponential — because the land is rising faster than the global ocean is filling.

**At the peripheral site**, 800 km outside the margin, the land sat on the **forebulge**: the ring of uplifted material pushed up by the mantle displaced from beneath the ice ([2.6](02-06-flexure-of-the-lithosphere.md)). As the ice melted and mantle flowed back inward, the forebulge collapsed. So the peripheral site has been *subsiding*, and its relative sea-level curve shows sea level **rising** — the opposite sign.

(b) Because the central uplift measures essentially one thing: **the total amount of rebound remaining, and the rate at which it is being paid off.** A thick ice sheet depresses the crust further, so more rebound remains; a stiff mantle relaxes more slowly, so the remaining rebound is paid off more slowly. Both changes lengthen the observed decay and increase the total, and they can be traded against one another to leave the central curve unchanged.

Formally, the two parameters — ice thickness and viscosity — project onto nearly the same data functional at that one site. That is a **null direction** in exactly the sense of [6.1](06-01-the-linear-inverse-problem.md), and no amount of precision at the centre resolves it.

(c) The peripheral site breaks the trade-off because **forebulge collapse has a different sensitivity to the two parameters than central uplift does.** The forebulge's *position* is set by the flexural and viscous length scales — hence by the mantle's structure — while its *amplitude* scales with the load. Ice thickness and viscosity therefore move the peripheral curve in different combinations than they move the central one, and fitting both simultaneously determines them separately.

This is the general remedy for a null space, and it is worth stating as a principle: **you break a trade-off not with better data of the same kind, but with data of a different kind — one whose sensitivity to the two parameters differs.** Modern GIA inversions use dozens of relative sea-level records spanning the ice sheet and its periphery for precisely this reason.

(d) **Cosmogenic exposure dating** of glacially transported boulders and scoured bedrock. Cosmic rays produce $^{10}$Be and $^{26}$Al in quartz at a known rate, but only in the top couple of metres of rock; a surface buried under ice accumulates nothing. So the concentration measured in a boulder dates the moment the ice uncovered it. Mapping exposure ages across a formerly glaciated region reconstructs the retreat history directly, **with no reference to the solid Earth's response at all** — which is exactly what is needed to break the trade-off, since it constrains one of the two unknowns independently.

Two alternatives are equally acceptable answers. **Elastic-versus-viscous separation** using co-located GNSS and gravity ([2.7](02-07-space-geodesy.md)) isolates the present-day elastic response from the long-term viscous one, constraining modern ice loss and hence the recent part of the load history. And **the geoid over subducting slabs** ([2.4](02-04-the-geoid.md)) constrains lower-mantle viscosity through an entirely unrelated process, fixing one end of the profile so that rebound data need only determine the rest.

</details>

## Flashback

**From Lesson 4.5 (Plate driving forces):** A slab is 100 km thick, has descended 500 km, and has an excess density of $60\ \mathrm{kg\,m^{-3}}$. (a) Compute the slab pull per metre of trench. (b) Ridge push on the same plate is $3.0\times10^{12}$ N/m; compute the ratio. (c) State in one sentence why the plate nevertheless moves at only a few cm/yr.

<details>
<summary>Solution</summary>

(a) $$F_{SP} = \Delta\rho\,g\,h\,L = 60\times10\times1.0\times10^{5}\times5.0\times10^{5} = 60\times10\times5.0\times10^{10} = 3.0\times10^{13}\ \mathrm{N\,m^{-1}}.$$

(b) $$\frac{3.0\times10^{13}}{3.0\times10^{12}} = 10.$$

(c) Because almost all of the slab pull is consumed by viscous resistance to the slab's own descent through the mantle and by the work of bending the plate at the trench, so the *net* force transmitted to the surface plate is small — plate velocity is set by resistance, not by the size of the driving force. And the resistance in question is the viscosity measured in this lesson.

</details>

## Connections

- **Backward:** the elastic behaviour that dominates below the Maxwell time is [1.1](01-01-the-elastic-earth.md)'s; the isostatic depression that rebound is undoing is [2.3](02-03-isostasy-airy-pratt.md)'s, and P3 of that lesson computed the 850 m for Fennoscandia; the forebulge is [2.6](02-06-flexure-of-the-lithosphere.md)'s; the GNSS and gravity observations are [2.7](02-07-space-geodesy.md)'s.
- **Forward:** the viscosity measured here is the input to [4.4](04-04-mantle-convection-rayleigh-number.md)'s Rayleigh number and to [4.5](04-05-plate-driving-forces.md)'s force balance, both of which had to assume it; the dislocation creep introduced here is what aligns olivine crystals and makes the mantle anisotropic in [5.5](05-05-anisotropy-mantle-flow.md); and the ice-history-versus-viscosity trade-off is a worked example of the null space in [6.1](06-01-the-linear-inverse-problem.md).
- **Sideways:** the creep mechanisms and their Arrhenius temperature dependence are [materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md)'s, with dislocation motion from [materials-science 4.2](../../materials-science/lessons/04-02-plastic-deformation-schmid.md) — the mantle creeps by the same mechanisms as a turbine blade, at the same homologous temperature and vastly lower stress. [`geology` 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md) owns the glacial history that supplies the load, and [`geology` 2.4](../../geology/lessons/02-04-how-rock-deforms.md) the brittle–ductile distinction that the Maxwell time formalizes.
