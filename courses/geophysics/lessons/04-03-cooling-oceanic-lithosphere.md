# Geophysics · Lesson 4.3: Cooling of the oceanic lithosphere

> ⏱ ~15 min · Module 4: Heat flow, rheology & geodynamics · Builds on: [4.1](04-01-conduction-and-the-geotherm.md), [2.3](02-03-isostasy-airy-pratt.md), [heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md) · Unlocks: [4.4](04-04-mantle-convection-rayleigh-number.md), [4.5](04-05-plate-driving-forces.md)

## Why this matters

Two-thirds of the Earth's solid surface is ocean floor, and its depth is not random. It is 2.5 km at the ridge crest and 5.5 to 6 km in the old basins, and the transition follows a curve so simple that a single square root describes it: **the seafloor deepens as the square root of its age.**

The reason is diffusion. New lithosphere is created hot at a ridge, and from that moment it does nothing but cool by conduction into the ocean above. Cooling makes it denser, denser makes it sink ([2.3](02-03-isostasy-airy-pratt.md)), and the depth of the ocean at any point is a thermometer reading the age of the plate beneath it.

This is the single most successful quantitative prediction in plate tectonics — and the place where it fails, both at old ages and at young ones, teaches you two more things.

## The idea

**Treat the plate as a half-space that starts hot and is suddenly exposed to cold water.** No length scale is imposed: the lithosphere does not "know" how thick it is supposed to be, it simply cools from the top down, and the cold layer thickens with time. The mathematics is the classic semi-infinite-solid problem ([heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md)) and the answer is an error function.

**Everything then follows from the one length scale that diffusion supplies.** Heat diffuses a distance of order $\sqrt{\kappa t}$ in time $t$, and that is the only length in the problem. So:

- the thermal thickness of the plate goes as $\sqrt{t}$;
- the surface heat flux, being the temperature drop divided by that thickness, goes as $1/\sqrt{t}$;
- the total thermal contraction, being an integral of the cooling over the layer, goes as $\sqrt{t}$;
- and therefore the seafloor depth goes as $\sqrt{t}$ too.

**Two constants fit the whole world ocean.** Depth in metres is about $2500 + 350\sqrt{t}$ with $t$ in Myr, and heat flow about $480/\sqrt{t}\ \mathrm{mW\,m^{-2}}$. Both are derivable from mantle properties with no fitting.

**At old ages the seafloor flattens, and the half-space model over-predicts the depth.** Beyond about 80 Myr the observed depth stops following $\sqrt{t}$ and levels off near 5.5 to 6 km. Something is supplying heat from below, stopping the plate from thickening indefinitely. The usual fix is the **plate model** — a layer of fixed thickness with a hot base — but *why* the base is held hot is the interesting question.

**At young ages the measured heat flow is far below prediction, and that is not an error either.** Fresh ocean crust is porous and fractured, and seawater circulates vigorously through it, carrying heat away by advection. A heat-flow probe pushed into the sediment measures only the *conductive* part, and misses the rest. **The deficit is a measurement of hydrothermal circulation**, and integrated globally it amounts to something like 10 TW.

## The formal version

**Half-space cooling.** A half-space initially at $T_m$, with its surface held at $T_s$ from $t=0$:

$$\boxed{\ T(z,t) = T_s + (T_m - T_s)\,\mathrm{erf}\!\left(\frac{z}{2\sqrt{\kappa t}}\right)\ }$$

*In words: the temperature profile is a fixed shape that stretches downward as the square root of time.*

**Thermal thickness.** Since $\mathrm{erf}(1) = 0.84$, the depth $z = 2\sqrt{\kappa t}$ is where the temperature has recovered 84 percent of the mantle value — a conventional definition of the plate's base:

$$y_T \approx 2\sqrt{\kappa t}.$$

**Surface heat flux.** Differentiating the error function at $z=0$:

$$q(t) = \frac{k(T_m-T_s)}{\sqrt{\pi\kappa t}}.$$

*In words: the flux is the temperature drop divided by the diffusion length, times conductivity.* With $k = 3.3\ \mathrm{W\,m^{-1}\,K^{-1}}$, $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$, $T_m-T_s = 1300$ K:

$$q \approx \frac{480}{\sqrt{t}}\ \mathrm{mW\,m^{-2}} \quad (t \text{ in Myr}).$$

Note that $q\to\infty$ as $t\to0$: the model has an integrable singularity at the ridge axis, which is fine for computing totals and meaningless pointwise.

**Subsidence.** Thermal contraction of the cooling column, balanced isostatically against seawater:

$$d(t) - d_r = \frac{2\rho_m\alpha(T_m-T_s)}{\rho_m-\rho_w}\sqrt{\frac{\kappa t}{\pi}}.$$

*In words: the plate contracts as it cools, and the ocean fills the gap.* With $\rho_m = 3300$, $\rho_w = 1000\ \mathrm{kg\,m^{-3}}$, $\alpha = 3\times10^{-5}\ \mathrm{K^{-1}}$, $T_m-T_s = 1300$ K, $\kappa = 10^{-6}$:

$$d(t) \approx 2500 + 355\sqrt{t}\ \mathrm{metres} \quad (t\text{ in Myr}),$$

against the empirical fit $2500 + 350\sqrt t$. **Two mantle properties and a diffusivity reproduce the bathymetry of the world ocean.**

**The plate model.** Imposing a fixed basal temperature at depth $y_{L}$ (typically 95–125 km) gives, at large $t$, an exponential approach to a constant depth:

$$d(t) \to d_\infty - B\exp\!\left(-\frac{t}{\tau}\right), \qquad \tau = \frac{y_L^2}{\pi^2\kappa} \approx 60\text{–}70\ \mathrm{Myr}.$$

*In words: once the diffusion length reaches the plate's base, cooling stops and the depth levels off.* Candidate mechanisms for holding the base hot: small-scale convection stripping the bottom of the plate, radiogenic heating, and heat delivered by mantle flow.

**Hydrothermal circulation.** Measured conductive heat flow falls below the half-space prediction for crust younger than about 65 Myr, and the discrepancy is largest at the youngest ages. Beyond 65 Myr, accumulated sediment seals the crust and the two agree. The integrated deficit — the **hydrothermal heat flux** — is of order 10 TW, roughly a quarter of the Earth's entire heat output, and it is the energy source for mid-ocean-ridge hydrothermal vents.

## Picture

![Left: a cross-section from a ridge crest. A blue curve starts at 2500 metres depth at the ridge and deepens smoothly, reaching 5000 metres at 50 million years, then flattening after a dashed vertical line at 80 million years labelled real seafloor flattens here. A dashed coral curve continues to deepen without limit, labelled square root of t alone would keep sinking. A note says the flattening is the plate model: the lithosphere stops thickening once heat arrives from below. Right: a plot of heat flow against age. A dashed coral curve labelled predicted, proportional to one over the square root of age, rises steeply at young ages. A solid blue curve labelled measured lies well below it at young ages and merges with it beyond about 60 million years. A vertical arrow between them at young age is labelled the missing heat is carried by circulating seawater, not by rock. A closing note says a conductive thermometer cannot see heat that leaves by convection through the crust](assets/04-03-fig1.svg)

Both departures from the curve are results, not errors.

## Worked examples

**Example 1 (mechanical — depth, heat flow and thickness at 50 Myr).** Using $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$ and the constants above, find the seafloor depth, the heat flow and the thermal thickness of 50 Myr crust.

$$t = 50\ \mathrm{Myr} = 50\times3.156\times10^{13} = 1.578\times10^{15}\ \mathrm{s}.$$

*Depth.*
$$d = 2500 + 355\sqrt{50} = 2500 + 355\times7.071 = 2500 + 2510 = 5010\ \mathrm{m}.$$

Observed depths on 50 Myr crust cluster near 5.0 to 5.2 km. ✓

*Heat flow.*
$$q = \frac{480}{\sqrt{50}} = \frac{480}{7.071} = 68\ \mathrm{mW\,m^{-2}}.$$

*Thermal thickness.*
$$y_T = 2\sqrt{\kappa t} = 2\sqrt{10^{-6}\times1.578\times10^{15}} = 2\sqrt{1.578\times10^{9}} = 2\times39{,}724 = 79{,}400\ \mathrm{m} = 79\ \mathrm{km}.$$

Compare with the elastic thickness of about 27 km that a flexure study would find at this age ([2.6](02-06-flexure-of-the-lithosphere.md)) — the *elastic* plate is the cold upper third of the *thermal* plate, because the lower part is hot enough to creep rather than bend.

**Example 2 (why you'd care — the missing heat at young ages).** At 2 Myr the half-space model predicts $q = 480/\sqrt2 = 339\ \mathrm{mW\,m^{-2}}$. Measured values on 2 Myr crust average roughly 150 mW/m². Diagnose.

*The deficit.*
$$\frac{339-150}{339} = 56\%.$$

**More than half the predicted heat is not arriving at the probe.**

*What it is not.* It is not a failure of the cooling model, because the same model works beautifully for depth at the same ages — the bathymetry of young crust follows $\sqrt t$ faithfully. Nor is it instrument error, because the deficit is systematic, reproducible, and vanishes at older ages in a specific pattern.

*What it is.* Young oceanic crust is fractured, porous and covered by little or no sediment. Seawater enters through fractures, is heated at depth, and returns to the ocean — **carrying heat by advection past the sediment layer that the probe sits in.** A conductive heat-flow probe measures $-k\,dT/dz$ in the sediment and is blind to anything that bypasses it in a fluid.

*Why the deficit disappears with age.* Two things happen. Sediment accumulates, and a continuous, low-permeability sediment blanket seals the crust hydrologically. And the crust itself is progressively cemented and its permeability drops. By about 65 Myr the seal is complete, and measured conductive heat flow rises to meet the theoretical curve — **which is a striking confirmation, because the model that fails at young ages is exactly the model that succeeds at old ones.**

*The scale of it.* Integrating the deficit over all crust younger than 65 Myr gives a hydrothermal heat flux of roughly 10 TW — about a fifth to a quarter of the Earth's entire heat loss ([4.2](04-02-radiogenic-heat-budget.md)), and enough to cycle the entire volume of the world ocean through the crust every few hundred thousand years. That circulation is the dominant control on ocean chemistry for several elements, and it powers the hydrothermal vent ecosystems.

*The transferable lesson.* **A systematic discrepancy that is confined to one part of parameter space and disappears in a physically predictable way is usually a missing mechanism, not a wrong model.** Had the deficit been present at all ages, or random, the cooling model would have been in trouble. That it is present only where the crust is permeable, and absent where sediment seals it, identifies the mechanism unambiguously — the same style of argument as the tomographic ratio tests in [1.5](01-05-seismic-tomography.md) and the gravity-to-uplift ratio in [2.7](02-07-space-geodesy.md).

## Watch out

- **You might think** the thermal and elastic thicknesses are the same plate. **Actually** the thermal plate is defined by an isotherm near 1300 °C and the elastic plate by one near 450 °C, so the elastic thickness is roughly a third of the thermal thickness at any age. Both go as $\sqrt t$; they differ by a constant factor.
- **You might think** the seafloor flattening at old ages disproves half-space cooling. **Actually** it shows that the half-space idealization — infinite depth, no heat from below — eventually breaks, which is unsurprising. The half-space model is excellent for the first 70 Myr, which covers most of the ocean floor by area, and the departure beyond that is a genuine constraint on what happens at the base of the plate.
- **You might think** you can date a piece of seafloor from its depth. **Actually** you can, to first order, and it is a standard reconnaissance technique — but sediment loading, hotspot swells, plateaus and dynamic topography all shift the depth by hundreds of metres to kilometres. Magnetic anomalies ([3.4](03-04-magnetic-anomalies-reversals.md)) are the reliable clock; bathymetry is the cheap estimate.

## One-liner

> Ocean floor is a slab of mantle cooling by diffusion into the sea, so its thickness and its subsidence both go as the square root of its age — and the two places where that law fails measure hydrothermal circulation and whatever keeps the base of the plate hot.

## Problems

**P1 (🟢)** Using $d(t) = 2500 + 355\sqrt t$ metres and $q(t) = 480/\sqrt t\ \mathrm{mW\,m^{-2}}$ with $t$ in Myr, and $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$. (a) Compute the depth, heat flow and thermal thickness of 20 Myr crust. (b) Repeat for 100 Myr crust. (c) Comment on which of the three quantities is most useful for estimating age from a single measurement.

**P2 (🟡)** A survey finds seafloor at 4300 m depth with a measured conductive heat flow of $95\ \mathrm{mW\,m^{-2}}$. (a) Estimate the age from the depth. (b) Estimate the age from the heat flow. (c) The two disagree; give the most likely explanation and say which estimate you would trust. (d) Magnetic anomalies date the crust at 28 Myr; comment.

**P3 (🔴, bridges to [4.4](04-04-mantle-convection-rayleigh-number.md))** (a) Compute the thermal thickness of the plate at 80 Myr and at 160 Myr. (b) The observed seafloor depth at 160 Myr is about 5800 m; compute what the half-space model predicts and the discrepancy. (c) Using the plate-model time constant $\tau = y_L^2/(\pi^2\kappa)$, find the plate thickness $y_L$ implied by a flattening timescale of 65 Myr. (d) Compare with your answer to (a) and explain physically why flattening sets in when it does, and what it implies must be happening at the base of the plate.

<details>
<summary>Solutions</summary>

**P1** (a) At 20 Myr:
$$d = 2500 + 355\sqrt{20} = 2500 + 355\times4.472 = 2500 + 1588 = 4088\ \mathrm{m},$$
$$q = \frac{480}{4.472} = 107\ \mathrm{mW\,m^{-2}},$$
$$t = 20\times3.156\times10^{13} = 6.312\times10^{14}\ \mathrm{s}, \quad y_T = 2\sqrt{10^{-6}\times6.312\times10^{14}} = 2\times25{,}124 = 50\ \mathrm{km}.$$

(b) At 100 Myr:
$$d = 2500 + 355\times10 = 6050\ \mathrm{m}, \qquad q = \frac{480}{10} = 48\ \mathrm{mW\,m^{-2}},$$
$$t = 3.156\times10^{15}\ \mathrm{s}, \quad y_T = 2\sqrt{3.156\times10^{9}} = 2\times56{,}178 = 112\ \mathrm{km}.$$

(c) **Depth**, by a wide margin. It is a single, cheap, globally available measurement (bathymetry is mapped everywhere from altimetry — [2.7](02-07-space-geodesy.md)), and it varies monotonically and substantially with age.

Heat flow is far noisier: it requires a probe deployment, it is corrupted by hydrothermal circulation at young ages, and its $1/\sqrt t$ dependence means that at old ages a large change in age produces a small change in flux — 48 against 42 mW/m² between 100 and 130 Myr, well within the scatter. Thermal thickness is not measured at all; it is inferred.

**P2** (a) $$4300 = 2500 + 355\sqrt t \;\Rightarrow\; \sqrt t = \frac{1800}{355} = 5.070 \;\Rightarrow\; t = 25.7\ \mathrm{Myr}.$$

(b) $$95 = \frac{480}{\sqrt t} \;\Rightarrow\; \sqrt t = \frac{480}{95} = 5.053 \;\Rightarrow\; t = 25.5\ \mathrm{Myr}.$$

(c) In fact they **agree** — 25.7 against 25.5 Myr, well within the precision of either method. This is the expected outcome for crust old enough to be sediment-sealed but young enough for both signals to be strong, and it is a reassuring consistency check rather than a puzzle. (Had the heat-flow estimate come out much *younger* — i.e. the flux too high — one would suspect a nearby hydrothermal discharge site or a hotspot; had it come out much older, an unsealed permeable crust or a thick insulating sediment blanket.)

(d) Magnetic anomalies give 28 Myr against roughly 25.6 Myr from the thermal methods — a 9 percent difference. The magnetic age is the one to trust: it is a direct dating of the crust against an independently calibrated timescale, whereas both thermal estimates depend on model constants ($355$ and $480$) that carry perhaps 5 to 10 percent uncertainty in $\alpha$, $\kappa$ and $T_m$.

The direction of the discrepancy is also unsurprising. Sediment loading depresses the basement below the bare-rock prediction *and* insulates it; the depth estimate is measured to the sediment surface, not to the basement. Both effects push the thermal estimates in the direction observed. **Nine percent agreement between a magnetic clock and a diffusion calculation with no fitted parameters is a good result, not a discrepancy.**

**P3** (a) $$t = 80\ \mathrm{Myr} = 2.525\times10^{15}\ \mathrm{s}: \quad y_T = 2\sqrt{2.525\times10^{9}} = 2\times50{,}249 = 100\ \mathrm{km}.$$
$$t = 160\ \mathrm{Myr} = 5.050\times10^{15}\ \mathrm{s}: \quad y_T = 2\sqrt{5.050\times10^{9}} = 2\times71{,}063 = 142\ \mathrm{km}.$$

(b) $$d_{\text{predicted}} = 2500 + 355\sqrt{160} = 2500 + 355\times12.649 = 2500 + 4490 = 6990\ \mathrm{m}.$$
$$\text{observed} = 5800\ \mathrm{m}, \qquad \text{discrepancy} = 1190\ \mathrm{m}.$$

**The half-space model over-predicts the depth of old seafloor by more than a kilometre** — a large, systematic error that no adjustment of constants can fix, since the same constants work at 50 Myr.

(c) $$\tau = \frac{y_L^2}{\pi^2\kappa} \;\Rightarrow\; y_L = \sqrt{\pi^2\kappa\tau} = \sqrt{9.8696\times10^{-6}\times65\times3.156\times10^{13}}.$$
$$65\times3.156\times10^{13} = 2.051\times10^{15}, \quad \times10^{-6} = 2.051\times10^{9}, \quad \times9.8696 = 2.025\times10^{10}.$$
$$y_L = \sqrt{2.025\times10^{10}} = 1.42\times10^{5}\ \mathrm{m} = 142\ \mathrm{km}.$$

(d) Compare with (a): the half-space thermal thickness reaches 100 km at 80 Myr and 142 km at 160 Myr. **The plate-model thickness of 142 km is exactly the thickness the half-space would have reached by 160 Myr** — and flattening is observed to set in well before that, from about 80 Myr.

The physical picture is this. As long as the diffusion front $2\sqrt{\kappa t}$ is well inside the layer that can be cooled, the plate does not know it has a bottom and half-space cooling applies exactly. Once the front approaches the depth at which heat is being resupplied from below, further cooling stops: the plate reaches a steady thickness, its heat flow levels off at a constant value, and its density — and hence the seafloor depth — stops changing.

So the flattening tells us there **is** a bottom, at somewhere between 100 and 145 km, held at close to mantle temperature. What holds it there is the real question, and the leading candidates are:

- **small-scale convection** beneath the plate, which strips off the cold lower boundary layer as fast as it forms — plausible because the lower part of the plate is hot enough to have low viscosity, and the Rayleigh number of that sublayer becomes supercritical at about the right age ([4.4](04-04-mantle-convection-rayleigh-number.md));
- **hotspot and plume reheating**, which is demonstrably real but is patchy rather than global;
- **radiogenic heating within the plate**, which is too small by an order of magnitude ([4.2](04-02-radiogenic-heat-budget.md)).

The first is the standard explanation, and the timing works: the onset age of flattening should be roughly when the sub-plate boundary layer becomes convectively unstable, and estimates of that put it in the 70 to 100 Myr range. **The flattening of the seafloor is thus indirect evidence for convection on a scale far smaller than the plates themselves.**

</details>

## Flashback

**From Lesson 4.2 (Radiogenic heat and the heat budget):** Take $Q = 46$ TW, $H = 24$ TW, $Q_{\text{core}} = 9$ TW, mantle mass $4.0\times10^{24}$ kg, $c_p = 1200\ \mathrm{J\,kg^{-1}\,K^{-1}}$. (a) Compute the Urey ratio. (b) Compute the mantle cooling rate in K/Gyr. (c) Compute the heat production 2 Gyr ago for $^{40}$K alone, given a present contribution of 4.0 TW and a half-life of 1.25 Gyr.

<details>
<summary>Solution</summary>

(a) $$\mathrm{Ur} = \frac{24}{46} = 0.52.$$

(b) $$Q_{\text{cool}} = 46 - 24 - 9 = 13\ \mathrm{TW},$$
$$\left|\frac{dT}{dt}\right| = \frac{1.3\times10^{13}}{4.0\times10^{24}\times1200} = \frac{1.3\times10^{13}}{4.8\times10^{27}} = 2.71\times10^{-15}\ \mathrm{K\,s^{-1}},$$
$$= 2.71\times10^{-15}\times3.156\times10^{16} = 86\ \mathrm{K\ per\ Gyr}.$$

Note how sensitive this is: raising the radiogenic estimate from 20 to 24 TW drops the cooling rate from 105 to 86 K/Gyr, a 19 percent change. **The cooling history of the planet is only as well known as the Urey ratio**, which is why the geoneutrino measurement matters.

(c) $$H_K(2\ \mathrm{Ga}) = 4.0\times2^{2/1.25} = 4.0\times2^{1.6} = 4.0\times3.03 = 12.1\ \mathrm{TW}.$$

Potassium alone supplied three times as much heat 2 billion years ago as it does now.

</details>

## Connections

- **Backward:** the diffusion solution is [heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md)'s semi-infinite solid, with the geotherm framework of [4.1](04-01-conduction-and-the-geotherm.md) made time-dependent; the subsidence is Pratt-style isostasy from [2.3](02-03-isostasy-airy-pratt.md), with thermal contraction supplying the density change.
- **Forward:** [4.4](04-04-mantle-convection-rayleigh-number.md) treats the small-scale convection invoked to explain flattening; [4.5](04-05-plate-driving-forces.md) shows that the same cooling that deepens the seafloor is what makes the plate dense enough to sink, so this lesson supplies the physics behind slab pull.
- **Sideways:** the elastic thickness that tracks the 450 °C isotherm in [2.6](02-06-flexure-of-the-lithosphere.md) is this same thermal structure read mechanically, and P3 of that lesson used the $\sqrt t$ law to predict it. [`geology` 2.2](../../geology/lessons/02-02-plate-boundaries.md) and [`oceanography`](../../oceanography/syllabus.md) both rely on the resulting bathymetry — the abyssal plains and mid-ocean ridges of the world ocean are the shape of a diffusion solution.
