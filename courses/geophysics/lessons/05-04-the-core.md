# Geophysics · Lesson 5.4: The core

> ⏱ ~15 min · Module 5: The deep Earth · Builds on: [5.1](05-01-free-oscillations-earth-density.md), [3.2](03-02-the-geodynamo.md), [4.2](04-02-radiogenic-heat-budget.md) · Unlocks: [5.5](05-05-anisotropy-mantle-flow.md), [6.1](06-01-the-linear-inverse-problem.md)

## Why this matters

The core is a third of the Earth's mass, the source of the magnetic field, and the single biggest uncertainty in the planet's energy budget. Everything we know about it comes from four kinds of measurement — seismic velocities and density from [5.1](05-01-free-oscillations-earth-density.md), the magnetic field from Module 3, laboratory and computational mineral physics at extreme pressure, and the heat budget of [4.2](04-02-radiogenic-heat-budget.md).

Putting them together produces a picture that has been substantially rewritten in the last fifteen years. A revision to one laboratory number — the thermal conductivity of iron at core conditions — turned a comfortable story into a genuine paradox: **the modern core may not need to convect at its top, and the inner core may be far too young to have powered the dynamo through most of Earth history.** The rock record says the field was there anyway.

## The idea

**The outer core is a liquid iron alloy, and it is too light to be pure iron.** Its density from PREM is about 10,900 kg/m³, while iron at the same pressure and temperature would be nearer 12,000. **Roughly ten percent of the outer core by mass is something lighter** — sulphur, oxygen, silicon, carbon, hydrogen, in some combination that remains genuinely unsettled.

**The inner core is solid, and it is freezing outward.** Discovered by Inge Lehmann in 1936 from faint arrivals inside the shadow zone ([1.4](01-04-travel-time-curves-deep-earth.md)), it is iron that has crystallized as the core cooled. Its density deficit relative to pure iron is only 4 to 5 percent, against the outer core's 10 — **the light elements prefer the liquid**, and are expelled at the freezing front.

**That expulsion is probably what runs the dynamo.** Light material released at the inner-core boundary is buoyant and rises through the outer core, driving compositional convection — which, as [3.2](03-02-the-geodynamo.md) showed, is thermodynamically far more effective than thermal convection at the same power.

**Then the conductivity revision.** Until about 2012, iron's thermal conductivity at core conditions was thought to be around 30 W m⁻¹ K⁻¹, so conduction along the core's adiabat could carry only a few terawatts and everything else had to convect. First-principles calculations and new experiments raised the figure to 70–150, which means **conduction alone can carry more heat than the core is thought to supply.** If so, the top of the core is thermally stratified rather than convecting, and the dynamo must be driven from below.

**And the inner core becomes young.** Higher conductivity means the core must cool faster to sustain any convection at all, which brings the onset of inner-core crystallization forward to perhaps 0.5 to 1 billion years ago. But palaeomagnetism shows a field at 3.5 Ga ([3.3](03-03-paleomagnetism.md)). **Something else powered the dynamo for most of Earth history, and what that was is an open question.**

## The formal version

**Structure.**

| Boundary | Radius | Depth | Pressure | Temperature |
|---|---|---|---|---|
| core–mantle | 3480 km | 2891 km | 136 GPa | ~4000 K |
| inner-core | 1220 km | 5150 km | 329 GPa | ~5700 K |
| centre | 0 | 6371 km | 364 GPa | ~6000 K |

**Densities and the light-element deficit.**

| Region | PREM density | Pure Fe at same $P,T$ | Deficit |
|---|---|---|---|
| outer core | 9900–12,200 (mean ~10,900) | ~12,000 | ~10% |
| inner core | 12,800–13,100 | ~13,500 | ~4–5% |

*In words: the liquid is much lighter than iron, the solid only slightly — so the light elements partition into the melt.* The candidates, with their signatures:

| Element | Evidence for | Difficulty |
|---|---|---|
| O | cosmochemically abundant; partitions into melt strongly | requires high-temperature core formation |
| Si | matches Earth's Mg/Si ratio deficit | isotopic constraints are debated |
| S | volatile, alloys readily with Fe | Earth is depleted in volatiles |
| C, H | small amounts plausible | poorly constrained at core pressure |

**The core adiabat and conductive heat flow.** A convecting core is nearly adiabatic, with

$$\left(\frac{dT}{dr}\right)_{\text{ad}} = -\frac{\alpha g T}{c_p} \approx -0.88\ \mathrm{K\,km^{-1}}\ \text{near the CMB}.$$

The heat flux that pure conduction carries along that gradient is

$$q_{\text{ad}} = k\left|\frac{dT}{dr}\right|_{\text{ad}},$$

and the total is $Q_{\text{ad}} = q_{\text{ad}}\times4\pi r_c^2$ with $4\pi r_c^2 = 1.52\times10^{14}\ \mathrm{m^2}$.

**The criterion for convection.** The core convects only where the actual heat flux **exceeds** $q_{\text{ad}}$. Where it is less, the layer is stably stratified and heat is carried by conduction alone. *In words: a fluid that can conduct away all the heat it is given has no reason to move.*

**Inner-core anisotropy.** PKIKP waves travelling along polar paths arrive about 3 percent earlier than equatorial ones, implying the inner core's iron crystals are aligned. Candidate causes include solidification texture, deformation by flow, and a preferred growth direction imposed by the magnetic field. The anisotropy is layered and hemispherically asymmetric, and none of the explanations is settled.

**D″ and the base of the mantle.** The lowermost few hundred kilometres of the mantle contain:

- a **seismic discontinuity** at its top, most likely the post-perovskite transition ([5.2](05-02-mineral-physics-transition-zone.md));
- two **large low-shear-velocity provinces (LLSVPs)** beneath Africa and the Pacific, thousands of kilometres across, probably chemically distinct and dynamically supported ([2.4](02-04-the-geoid.md));
- **ultra-low-velocity zones (ULVZs)**, patches tens of kilometres thick with velocity reductions of 10 to 30 percent, plausibly partial melt.

## Picture

![A cross-section of the core: an outer circle for the core–mantle boundary annotated 2891 kilometres, 136 gigapascals, 4000 kelvin; a coral-shaded liquid outer core labelled 10,900 kilograms per cubic metre; and a blue inner core annotated 5150 kilometres, 329 gigapascals, about 5700 kelvin. A note states that pure iron at these pressures would be about 10 percent denser than the outer core is, so roughly a tenth of the core by mass is something lighter — sulphur, oxygen or silicon. To the right, a bar chart of the new core paradox in terawatts: a short grey bar of 4 for heat conducted along the adiabat using the old conductivity of 30, a tall coral bar of 13 for the same quantity using the revised conductivity of 100, and a blue bar of 10 for the total core heat flow, with a dashed line at 10 showing that the revised conduction exceeds it. A caption says that if conduction alone can carry more heat than the core supplies, the top of the core does not need to convect — and asks what has been running the dynamo for 3.5 billion years](assets/05-04-fig1.svg)

One laboratory number moved, and the history of the geodynamo became an open problem.

## Worked examples

**Example 1 (mechanical — how much heat does conduction carry?).** Compute the adiabatic conductive heat flow at the core–mantle boundary for the old and new conductivities, taking the adiabatic gradient as $0.88\ \mathrm{K\,km^{-1}}$ and the CMB area as $1.52\times10^{14}\ \mathrm{m^2}$.

*Old value, $k = 30\ \mathrm{W\,m^{-1}\,K^{-1}}$:*
$$q_{\text{ad}} = 30\times0.88\times10^{-3} = 2.64\times10^{-2}\ \mathrm{W\,m^{-2}} = 26\ \mathrm{mW\,m^{-2}},$$
$$Q_{\text{ad}} = 2.64\times10^{-2}\times1.52\times10^{14} = 4.0\times10^{12}\ \mathrm{W} = 4.0\ \mathrm{TW}.$$

*New value, $k = 100\ \mathrm{W\,m^{-1}\,K^{-1}}$:*
$$q_{\text{ad}} = 100\times0.88\times10^{-3} = 8.8\times10^{-2}\ \mathrm{W\,m^{-2}} = 88\ \mathrm{mW\,m^{-2}},$$
$$Q_{\text{ad}} = 8.8\times10^{-2}\times1.52\times10^{14} = 1.34\times10^{13}\ \mathrm{W} = 13.4\ \mathrm{TW}.$$

*Compare with the core's actual heat flow*, estimated at 5 to 15 TW ([4.2](04-02-radiogenic-heat-budget.md)) with a central value near 10 TW.

**With the old conductivity, conduction carried 4 TW and convection had 6 TW to work with. With the new one, conduction alone would carry 13 TW — more than the core supplies.**

**Example 2 (why you'd care — the new core paradox in full).** Trace the consequences of Example 1, and lay out the candidate escapes.

*Consequence 1: a stratified top.* If the heat arriving at the base of the mantle is less than what conduction along the adiabat could carry, the uppermost core has no need to convect and becomes **thermally stratified** — a stagnant layer perhaps a few hundred kilometres thick. Seismology offers weak but non-zero support: some studies find a slightly anomalous velocity structure in the outermost core, consistent with stratification.

*Consequence 2: the dynamo must be driven from below.* A stratified lid does not kill the dynamo, but it changes it. Convection must be powered by compositional buoyancy released at the inner-core boundary, rising through the lid's base. That is workable for the modern Earth.

*Consequence 3: the inner core becomes young.* Here is where it breaks. Higher conductivity means more of the core's heat leaves by conduction, so to sustain any convection at all the core must be cooling faster than previously thought. Faster cooling means the temperature crossed the iron melting curve more recently. Estimates of the inner core's age accordingly dropped from a few billion years to roughly **0.5 to 1 Ga**.

*The contradiction.* Palaeomagnetism finds a geomagnetic field at 3.5 Ga, and possibly 4.2 Ga from zircon studies ([3.3](03-03-paleomagnetism.md)). For most of that time there was no inner core, so **no compositional buoyancy** — and thermal convection alone, in a core whose heat is largely conducted away along the adiabat, struggles to supply the required power.

*Candidate escapes, none conclusive.*

- **Exsolution.** If the early core dissolved MgO or SiO₂ at the extreme temperatures of core formation, those compounds would precipitate out as it cooled, releasing compositional buoyancy at the *top* of the core rather than the bottom. This is currently the most-discussed resolution and it neatly supplies buoyancy without an inner core.
- **Higher CMB heat flow.** If the mantle extracts 15 to 20 TW rather than 10, thermal convection remains viable throughout. This shifts the problem to the mantle: what sets the heat flow out of the core is the structure of D″, which is where the post-perovskite thermometer of [5.2](05-02-mineral-physics-transition-zone.md) becomes valuable.
- **The conductivity is wrong.** Experimental and computational values still disagree by a factor of two or more. If the true value is nearer 50 than 100, the paradox softens considerably.
- **Radiogenic potassium in the core.** If $^{40}$K partitioned into the core during formation, it supplies internal heating and eases the budget. Geochemical arguments are unfavourable but not decisive.

*What to take from this.* **A well-established picture was overturned by a revision to a single material property**, and the overturning was not a matter of interpretation — it followed from an arithmetic comparison of two numbers, as in Example 1. It is a good illustration of where the leverage sits in this subject: the core's dynamics are not limited by seismic resolution or by magnetic observations, both of which are excellent, but by how well we know the properties of iron at 136 GPa. **The bottleneck is mineral physics, and it has been for a decade.**

## Watch out

- **You might think** the inner core is solid because it is cold. **Actually** it is the hottest part of the planet, at roughly 5700 K. It is solid because pressure raises iron's melting point faster than the temperature rises with depth — the geotherm crosses the melting curve from below. **Pressure freezes it, not cold.**
- **You might think** the light-element problem is nearly solved. **Actually** the density deficit is well measured and the identity of the light elements is not. Each candidate implies a different history of core formation and a different chemistry at the core–mantle boundary, and the constraints from seismology (density and velocity) admit several combinations. This is a live non-uniqueness of exactly the kind [6.1](06-01-the-linear-inverse-problem.md) formalizes.
- **You might think** inner-core super-rotation is established. **Actually** it is contested. Reported differential rotation rates have ranged from a fraction of a degree per year down to essentially zero, and recent work suggests oscillation rather than steady rotation. The signal is small, the data are from a limited set of repeating earthquakes, and alternative explanations involving changes at the inner-core boundary are not excluded.

## One-liner

> The core is a liquid iron alloy about ten percent too light to be iron, freezing onto a solid ball that may be younger than a billion years — which leaves the dynamo's first three billion years unexplained.

## Problems

**P1 (🟢)** Take the core adiabatic gradient as $0.85\ \mathrm{K\,km^{-1}}$ and the CMB area as $1.52\times10^{14}\ \mathrm{m^2}$. (a) Compute the adiabatic conductive heat flux for $k = 60\ \mathrm{W\,m^{-1}\,K^{-1}}$. (b) Compute the total conductive heat flow. (c) If the core supplies 10 TW, state whether the top of the core convects.

**P2 (🟡)** The outer core's mean density is $10{,}900\ \mathrm{kg\,m^{-3}}$ and pure iron at the same conditions would be $12{,}100\ \mathrm{kg\,m^{-3}}$. (a) Compute the fractional density deficit. (b) The inner core is $13{,}000$ against a pure-iron $13{,}600$; compute its deficit. (c) Explain what the difference between the two deficits implies about the freezing process, and what buoyancy consequence follows.

**P3 (🔴, bridges to [6.1](06-01-the-linear-inverse-problem.md))** Seismology constrains the outer core through two observables: its density $\rho$ and its bulk sound speed $\Phi^{1/2}$. Suppose three light-element candidates — oxygen, silicon and sulphur — each lower the density and change the sound speed, with the following (schematic) sensitivities per weight percent added:

| Element | $\Delta\rho$ (kg m⁻³ per wt%) | $\Delta\Phi^{1/2}$ (m s⁻¹ per wt%) |
|---|---|---|
| O | $-110$ | $+40$ |
| Si | $-70$ | $+15$ |
| S | $-90$ | $+5$ |

(a) Write the system relating the three unknown weight percentages to the two observed anomalies. (b) State how many equations and unknowns there are, and what follows. (c) Give an explicit family of compositions that would fit an observed $\Delta\rho = -1200\ \mathrm{kg\,m^{-3}}$ and $\Delta\Phi^{1/2} = +300\ \mathrm{m\,s^{-1}}$, treating sulphur as a free parameter. (d) Name one non-seismic constraint that would reduce the ambiguity and explain its logic.

<details>
<summary>Solutions</summary>

**P1** (a) $$q_{\text{ad}} = k\left|\frac{dT}{dr}\right| = 60\times0.85\times10^{-3} = 5.1\times10^{-2}\ \mathrm{W\,m^{-2}} = 51\ \mathrm{mW\,m^{-2}}.$$

(b) $$Q_{\text{ad}} = 5.1\times10^{-2}\times1.52\times10^{14} = 7.75\times10^{12}\ \mathrm{W} = 7.8\ \mathrm{TW}.$$

(c) The core supplies 10 TW, which exceeds the 7.8 TW that conduction alone can carry. The excess of 2.2 TW **must** be carried by convection, so **yes, the top of the core convects** — but with a much smaller margin than the classical picture assumed. At $k=60$ the paradox is present but not acute, which is why the true value of $k$ matters so much.

**P2** (a) $$\frac{12{,}100-10{,}900}{12{,}100} = \frac{1200}{12{,}100} = 9.9\%.$$

(b) $$\frac{13{,}600-13{,}000}{13{,}600} = \frac{600}{13{,}600} = 4.4\%.$$

(c) The solid is much closer to pure iron than the liquid, which means **the light elements are strongly excluded from the crystallizing solid** — they partition into the melt, exactly as impurities are excluded when water freezes.

The buoyancy consequence is central to the dynamo. As the inner core grows, the liquid immediately adjacent to the freezing front is left enriched in light elements and is therefore **less dense than the outer core above it**. That fluid is buoyant and rises, driving **compositional convection** from the bottom of the outer core all the way up ([3.2](03-02-the-geodynamo.md)). Because this releases gravitational potential energy directly rather than passing through a heat engine, it evades the Carnot penalty and is roughly ten times more effective per watt than thermal convection at driving a dynamo.

Quantitatively the two deficits also give the light-element fractionation: about 10 percent by mass in the liquid against 4 percent in the solid, so roughly 6 percent of the mass of every kilogram frozen is expelled upward as buoyant material.

**P3** (a) With $x_O$, $x_{Si}$, $x_S$ the weight percentages:

$$-110\,x_O - 70\,x_{Si} - 90\,x_S = \Delta\rho,$$
$$+40\,x_O + 15\,x_{Si} + 5\,x_S = \Delta\Phi^{1/2}.$$

(b) **Two equations, three unknowns.** The system is underdetermined: its solution set is a one-parameter family (a line in the three-dimensional composition space), and no amount of improvement in the seismic measurements will collapse it to a point. This is a **null space** in the sense of [6.1](06-01-the-linear-inverse-problem.md) — there is a direction in composition space along which the two observables do not change at all.

(c) Treat $x_S = s$ as free and solve for the other two:

$$-110x_O - 70x_{Si} = -1200 + 90s,$$
$$40x_O + 15x_{Si} = 300 - 5s.$$

From the second, $x_{Si} = (300 - 5s - 40x_O)/15 = 20 - 0.3333s - 2.6667x_O$. Substituting into the first:

$$-110x_O - 70(20 - 0.3333s - 2.6667x_O) = -1200 + 90s$$
$$-110x_O - 1400 + 23.333s + 186.67x_O = -1200 + 90s$$
$$76.67x_O = 200 + 66.667s$$
$$x_O = 2.609 + 0.8696\,s.$$

Then

$$x_{Si} = 20 - 0.3333s - 2.6667(2.609 + 0.8696s) = 20 - 0.3333s - 6.957 - 2.319s = 13.04 - 2.652\,s.$$

So the family is

$$\left(x_O,\ x_{Si},\ x_S\right) = \left(2.61 + 0.870\,s,\ \ 13.04 - 2.652\,s,\ \ s\right).$$

Checking $s = 0$: $(2.6,\ 13.0,\ 0)$ — an oxygen-and-silicon core. Checking $s = 4.9$ (where $x_{Si}$ reaches zero): $(6.9,\ 0,\ 4.9)$ — an oxygen-and-sulphur core. **Both fit the seismic data exactly, and they are chemically completely different planets.**

(Physical plausibility does bound $s$: all three must be non-negative, giving $0 \le s \le 4.92$. Non-negativity is itself a constraint, and this is a small illustration of how prior information — even something as weak as "concentrations cannot be negative" — shrinks a null space.)

(d) Several would work; the logic is what matters.

- **Cosmochemistry and the bulk-Earth composition.** The Earth's overall Mg/Si and Fe/Si ratios, measured on chondritic meteorites and mantle rocks, constrain how much silicon can be missing from the mantle — and missing silicon must be somewhere, plausibly the core. This bounds $x_{Si}$ directly, and fixing one unknown in a two-equation, three-unknown system determines the rest.
- **Silicon isotopes.** Metal–silicate partitioning of Si fractionates its isotopes at high temperature, so if the core took up substantial silicon, the silicate Earth should be isotopically heavy relative to chondrites. Measuring that offset constrains $x_{Si}$ independently of any seismic data.
- **Core-formation experiments.** Partitioning coefficients measured in the laboratory at the pressures and temperatures of core formation say how much of each element *could* have entered the metal, given a plausible magma-ocean history. This is a prior on the composition rather than a measurement of it, but a physically grounded one.

In every case the structure of the argument is identical to the remedies elsewhere in this course: **you break a null space by importing information of a different kind, not by measuring the same two things more precisely.**

</details>

## Flashback

**From Lesson 5.3 (Attenuation and anelasticity):** A 0.2 Hz S wave travels 400 s through mantle with $Q_\mu = 250$. (a) Compute $t^*$. (b) Compute the surviving amplitude fraction. (c) A parallel P-wave path has $Q_\alpha = \tfrac94 Q_\mu$; compute its $t^*$ and surviving fraction at the same frequency, and comment.

<details>
<summary>Solution</summary>

(a) $$t^* = \frac{400}{250} = 1.6\ \mathrm{s}.$$

(b) $$\frac{A}{A_0} = e^{-\pi f t^*} = e^{-\pi(0.2)(1.6)} = e^{-1.005} = 0.366.$$

About 37 percent survives.

(c) $$Q_\alpha = 2.25\times250 = 562.5, \qquad t^*_P = \frac{400}{562.5} = 0.711\ \mathrm{s},$$
$$\frac{A}{A_0} = e^{-\pi(0.2)(0.711)} = e^{-0.447} = 0.640.$$

The P wave retains 64 percent against the S wave's 37 percent over the same path and frequency. **The P wave is roughly 1.75 times less attenuated**, purely because only $4/9$ of its strain energy is in shear and shear is where essentially all the dissipation happens.

The practical consequence is the one noted in [5.3](05-03-attenuation-anelasticity.md): at higher frequencies the gap widens exponentially, which is why teleseismic P arrivals stay sharp and impulsive while S arrivals become long-period swells.

</details>

## Connections

- **Backward:** the core's density and radius come from [5.1](05-01-free-oscillations-earth-density.md)'s mass, moment-of-inertia and normal-mode constraints; its liquid state from the absence of S waves in [1.4](01-04-travel-time-curves-deep-earth.md); its heat budget from [4.2](04-02-radiogenic-heat-budget.md); the dynamo it powers from [3.2](03-02-the-geodynamo.md), whose P3 already flagged the inner-core age problem.
- **Forward:** [5.5](05-05-anisotropy-mantle-flow.md) treats the inner core's anisotropy alongside the mantle's; [6.1](06-01-the-linear-inverse-problem.md) formalizes the composition null space of P3.
- **Sideways:** the exclusion of light elements from the freezing solid is the same partitioning that produces zone refining in [materials-science 3.3](../../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md), and is why an ice cube is fresher than the water it froze from. The pressure dependence of the melting curve is the Clausius–Clapeyron relation of [5.2](05-02-mineral-physics-transition-zone.md) applied to melting rather than to a solid–solid transition. [`geology` 5.1](../../geology/lessons/05-01-earths-internal-structure.md) assembles the evidence for the core's existence and composition for a general audience, and [`planetary-science`](../../planetary-science/syllabus.md) 2.1 and 2.3 run the same reasoning comparatively across the terrestrial planets.
