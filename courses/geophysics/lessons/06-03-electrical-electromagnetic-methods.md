# Geophysics · Lesson 6.3: Electrical and electromagnetic methods

> ⏱ ~15 min · Module 6: Inversion & applied geophysics · Builds on: [`em-refresher`](../../em-refresher/syllabus.md), [6.1](06-01-the-linear-inverse-problem.md) · Unlocks: the course is finished

## Why this matters

Seismic methods measure elastic properties, which respond to the rock frame. Electrical methods measure resistivity, which responds almost entirely to the **fluid in the pores**. They are therefore not a cheaper alternative to seismics but a different instrument, sensitive to different things: groundwater, contamination, hydrothermal alteration, permafrost, sulphide mineralization, and — via magnetotellurics — the water and melt content of the mantle.

They also span an enormous range of scale from one set of equations. The same skin-depth relation that says ground-penetrating radar sees two metres says magnetotellurics sees four hundred kilometres. The difference is entirely the frequency.

## The idea

**Rock-forming minerals are insulators; the pore water is not.** Quartz, feldspar and olivine have resistivities of $10^{10}$ Ω·m or more. A wet sandstone has 10 Ω·m. Essentially all current flows through the connected brine in the pores, so **resistivity is a measurement of porosity and pore-water salinity**, with the mineralogy nearly irrelevant. The exceptions matter commercially: clays conduct through surface ions on their platelets, and metallic sulphides and graphite conduct electronically.

**DC resistivity injects current and measures voltage.** Four electrodes: two to drive current into the ground, two to measure the resulting potential difference. The ratio, scaled by a purely geometric factor, gives an **apparent resistivity** — the resistivity of the uniform half-space that would have given the same reading. Widen the array and the current samples deeper, so a sequence of expanding arrays is a depth sounding.

**Induced polarization looks for what resistivity cannot distinguish.** Switch the current off and some ground continues to hold a decaying voltage — it stored charge. Disseminated metallic grains and clays do this strongly; barren rock does not. **IP is how disseminated sulphide ore bodies are found**, since they are often too sparse to change the bulk resistivity much but polarize strongly.

**Electromagnetic methods need no electrodes, and depth is set by frequency.** A time-varying magnetic field induces currents in the ground, which produce a secondary field that is measured. The governing scale is the **skin depth**: low frequencies diffuse deep, high frequencies stay shallow. **You choose your depth of investigation by choosing your frequency**, not by turning up the power.

**Magnetotellurics uses the ionosphere and the thunderstorms as its transmitter.** Natural electromagnetic variations — from micro-hertz geomagnetic storms up to kilohertz lightning — illuminate the Earth for free. Recording the electric and magnetic fields at the surface over a wide band gives resistivity from tens of metres to hundreds of kilometres, and it is the only method that senses conductivity in the deep mantle.

**And ground-penetrating radar breaks the rule, which is why it works.** At radar frequencies in resistive ground, displacement current dominates conduction current, and the field propagates as a **wave** rather than diffusing. The skin-depth formula no longer applies, losses are much lower, and penetration is far better than the diffusive estimate — in ice, kilometres. In clay, where the transition frequency is high, the wave regime is never reached and GPR fails.

## The formal version

**Archie's law.** For a clean, clay-free rock saturated with brine:

$$\rho = a\,\rho_w\,\phi^{-m}S^{-n},$$

with $\rho_w$ the pore-water resistivity, $\phi$ porosity, $S$ water saturation, and empirical constants $a\approx1$, $m\approx2$ (the cementation exponent), $n\approx2$. *In words: resistivity falls steeply with porosity and with salinity, and rises steeply as water is displaced by oil or gas.* The last is the basis of resistivity well logging.

**Typical resistivities.**

| Material | $\rho$ (Ω·m) |
|---|---|
| seawater | 0.2 |
| clay | 1–100 |
| sand, saturated | 50–500 |
| sand, dry | $10^3$–$10^4$ |
| crystalline basement | $10^3$–$10^5$ |
| ice | $10^4$–$10^7$ |
| massive sulphide | $10^{-3}$–1 |

**DC resistivity.** With current $I$ injected and potential difference $\Delta V$ measured,

$$\rho_a = K\frac{\Delta V}{I},$$

where $K$ is a geometric factor depending only on electrode positions. For the **Wenner** array (four equally spaced electrodes, spacing $a$):

$$K = 2\pi a.$$

*In words: apparent resistivity is what you would infer if the ground were uniform.* Depth of investigation is roughly $a/2$ for Wenner, so expanding the array sounds deeper.

**Equivalence — the null space of DC resistivity.** For a thin conductive layer embedded in resistive ground, the data determine only the **conductance**

$$S = \frac{t}{\rho} = \sigma t,$$

not $\sigma$ and $t$ separately. A 5 m layer at 10 Ω·m and a 50 m layer at 100 Ω·m are indistinguishable. The dual problem, **suppression**, is that a thin layer of intermediate resistivity between two contrasting layers may produce no detectable signature at all. Both are instances of [6.1](06-01-the-linear-inverse-problem.md)'s null space.

**Induced polarization.** Quantified as **chargeability**,

$$M = \frac{1}{V_0}\int_{t_1}^{t_2}V(t)\,dt,$$

the normalized area under the decaying voltage curve, in milliseconds. Frequency-domain equivalents use the phase shift between current and voltage.

**Skin depth.** For a diffusive electromagnetic field in a conductor,

$$\delta = \sqrt{\frac{2}{\omega\mu\sigma}} \approx 503\sqrt{\frac{\rho}{f}}\ \mathrm{metres} \quad (\rho\ \text{in}\ \Omega\text{m},\ f\ \text{in Hz}).$$

*In words: depth of investigation grows as the square root of resistivity and falls as the square root of frequency.*

**Magnetotellurics.** From orthogonal horizontal electric and magnetic field components, the impedance $Z = E_x/H_y$ gives the **Cagniard apparent resistivity**

$$\rho_a = \frac{1}{\omega\mu}|Z|^2,$$

as a function of frequency; inverting $\rho_a(f)$ gives resistivity against depth. MT is uniquely valuable in the mantle because conductivity there is controlled by temperature, water content and melt fraction — the very quantities that seismic velocity ([1.5](01-05-seismic-tomography.md)) and attenuation ([5.3](05-03-attenuation-anelasticity.md)) also probe, with different sensitivities.

**The wave–diffusion transition.** Conduction current dominates below, and displacement current above, the frequency

$$f_t = \frac{\sigma}{2\pi\varepsilon} = \frac{1}{2\pi\rho\,\varepsilon_0\varepsilon_r}.$$

Above $f_t$ the field propagates as a wave with velocity

$$v = \frac{c}{\sqrt{\varepsilon_r}},$$

and the skin-depth formula no longer applies. This is the regime GPR operates in — and $f_t$ is what decides whether it can.

## Picture

![Left: a box filled with grey circles representing insulating mineral grains, with a blue line threading the gaps between them labelled current follows the brine in the pores. Notes give Archie's law and state that resistivity measures porosity and pore-water salinity rather than the mineral, which is why electrical methods find groundwater, contamination plumes and hydrothermal alteration, and why a clay layer stops them dead. A closing line notes that only the conductance of a thin layer is determined — equivalence. Right: a log-log plot of depth of investigation against frequency, with a straight blue line labelled with the skin-depth formula running from 50 kilometres at 0.01 hertz through about 500 metres at a kilohertz to about a metre at 100 megahertz. Regions are labelled magnetotellurics for the whole crust and mantle, controlled-source electromagnetics in the middle, and ground-penetrating radar at the high-frequency end with a note that here the rule breaks. A caption says that above the transition frequency GPR propagates as a wave rather than a diffusion and sees much further](assets/06-03-fig1.svg)

One equation, seven decades of frequency, and eight orders of magnitude of depth.

## Worked examples

**Example 1 (mechanical — choosing a frequency).** You need to image a conductive body at 50 km depth in crust of 100 Ω·m. (a) What period must you record? (b) What would 100 Hz reach? (c) What resistivity would let 1 Hz reach 50 km?

(a) $$\delta = 503\sqrt{\frac{\rho}{f}} \;\Longrightarrow\; f = \rho\left(\frac{503}{\delta}\right)^2 = 100\left(\frac{503}{5.0\times10^{4}}\right)^2 = 100\times(1.006\times10^{-2})^2 = 100\times1.012\times10^{-4},$$
$$f = 1.01\times10^{-2}\ \mathrm{Hz}, \qquad T = \frac{1}{f} \approx 100\ \mathrm{s}.$$

**A hundred-second period** — well within the band of natural geomagnetic variations, which is exactly why magnetotellurics can do this and no controlled source can.

(b) $$\delta = 503\sqrt{\frac{100}{100}} = 503\ \mathrm{m}.$$

Half a kilometre. **A factor of $10^4$ in frequency is a factor of 100 in depth**, because of the square root — which is why the frequency band must be enormous to span a useful depth range.

(c) $$\rho = f\left(\frac{\delta}{503}\right)^2 = 1\times\left(\frac{5.0\times10^{4}}{503}\right)^2 = (99.4)^2 = 9880\ \Omega\,\mathrm{m}.$$

About $10^{4}$ Ω·m — cold, dry cratonic crust. **In a resistive shield you see far deeper at any given frequency**, which is both an advantage and a warning: the same instrument reaches very different depths in different terrain, so nominal "depth of investigation" figures quoted without a resistivity are meaningless.

**Example 2 (why you'd care — the method fails and the failure is the answer).** A GPR survey is run at 100 MHz to map a shallow aquifer. Over dry sand ($\rho = 3000\ \Omega\,\mathrm{m}$, $\varepsilon_r = 5$) it images clearly to 8 m. Over an adjacent clay-rich area ($\rho = 15\ \Omega\,\mathrm{m}$, $\varepsilon_r = 25$) it returns nothing below 0.5 m. Explain, and say what to do instead.

*Compute the transition frequency in each.*

*Dry sand:* $\varepsilon = 5\times8.854\times10^{-12} = 4.43\times10^{-11}$,
$$f_t = \frac{1}{2\pi\rho\varepsilon} = \frac{1}{2\pi\times3000\times4.43\times10^{-11}} = \frac{1}{8.35\times10^{-7}} = 1.2\times10^{6}\ \mathrm{Hz} = 1.2\ \mathrm{MHz}.$$

At 100 MHz the survey is running nearly two decades **above** $f_t$, deep in the wave regime. Losses are governed by the small loss tangent, not by diffusion, and metres of penetration are entirely expected.

*Clay:* $\varepsilon = 25\times8.854\times10^{-12} = 2.21\times10^{-10}$,
$$f_t = \frac{1}{2\pi\times15\times2.21\times10^{-10}} = \frac{1}{2.08\times10^{-8}} = 4.8\times10^{7}\ \mathrm{Hz} = 48\ \mathrm{MHz}.$$

At 100 MHz the survey is barely a factor of two above $f_t$ — **on the boundary between wave and diffusion**, where losses are severe. The diffusive skin depth there would be

$$\delta = 503\sqrt{\frac{15}{10^{8}}} = 503\times3.87\times10^{-4} = 0.19\ \mathrm{m},$$

consistent with the observed half-metre of useful penetration.

*Also worth noting: the wave velocity differs too.*
$$v_{\text{sand}} = \frac{c}{\sqrt5} = 0.134\ \mathrm{m\,ns^{-1}}, \qquad v_{\text{clay}} = \frac{c}{\sqrt{25}} = 0.060\ \mathrm{m\,ns^{-1}},$$

so even where a clay section does return echoes, converting travel time to depth with the sand velocity would overestimate depths by more than a factor of two.

*What to do instead.* Change the physics, not the instrument. The clay's low resistivity is fatal to GPR and **ideal** for DC resistivity or a time-domain electromagnetic survey — those methods rely on conduction, so a conductive target is a strong one. Concretely: an electrical resistivity tomography line across the clay area, with electrode spacing chosen for a depth of investigation of 10 to 20 m, would map the same aquifer that GPR cannot see.

*The transferable point, and a fitting one to end the course on.* **The failure of a method is a measurement.** GPR's silence over the clay is not a null result; it is a statement that the ground is conductive, which is itself information about lithology and water content. This is the same reasoning as every other diagnostic in the course: the absence of S waves through the outer core ([1.4](01-04-travel-time-curves-deep-earth.md)), the absence of Love waves where there is no waveguide ([1.2](01-02-seismic-wave-zoo.md)), the null SKS splitting above a plume ([5.5](05-05-anisotropy-mantle-flow.md)).

**A method that fails informatively — for a reason you can compute in advance — is doing its job.** Knowing *why* it will fail, before going to the field, is most of what applied geophysics consists of.

## Watch out

- **You might think** apparent resistivity is the resistivity of the ground at the depth of investigation. **Actually** it is the resistivity of the uniform half-space that would give the same reading — a weighted average over everything the current sampled. Interpreting a sounding curve requires an inversion, and the apparent-resistivity curve can even be non-monotonic in ways the true profile is not.
- **You might think** more current gives more depth. **Actually** depth of investigation in EM methods is set by the skin depth, which depends on frequency and resistivity and not at all on source strength. More power improves signal-to-noise at a given depth; it does not extend the depth. This is the single most common misconception about the methods.
- **You might think** a resistive anomaly means hard rock and a conductive one means ore. **Actually** the conductor might be graphite, clay, saline groundwater or a fault zone, and the resistor might be dry sand rather than granite. Resistivity alone is severely non-unique, which is why IP (which separates metallic conductors from ionic ones) and joint interpretation with seismics or gravity are standard rather than optional.

## One-liner

> Current flows through the water, not the rock, so resistivity is a fluid measurement — and depth of investigation is bought with frequency rather than power, from radar's metres to magnetotellurics' hundreds of kilometres.

## Problems

**P1 (🟢)** (a) Compute the skin depth in 50 Ω·m ground at 10 Hz. (b) At 0.1 Hz. (c) What frequency is needed to reach 10 km in 200 Ω·m crust?

**P2 (🟡)** A clean sandstone has porosity 0.22 and is saturated with brine of resistivity 0.15 Ω·m. Take Archie's constants $a=1$, $m=2$, $n=2$. (a) Compute its resistivity when fully water-saturated. (b) Compute it when the water saturation falls to 0.30, the rest being hydrocarbon. (c) Compute the ratio, and explain why this makes resistivity logging the standard hydrocarbon indicator. (d) A shaly interval nearby reads 4 Ω·m; explain why Archie's law should not be applied to it.

**P3 (🔴, bridges to [6.1](06-01-the-linear-inverse-problem.md))** A DC resistivity sounding over layered ground detects a conductive layer at depth and returns a conductance $S = \sigma t = 0.50$ S. (a) Write three distinct layer models consistent with this measurement. (b) State the name of this ambiguity and identify the null direction in terms of $\sigma$ and $t$. (c) A second survey using time-domain electromagnetics over the same site returns a best-fitting layer thickness of 25 m. Combine the two and give the resistivity. (d) Explain why the electromagnetic method can constrain thickness when DC resistivity cannot, in terms of what each measurement is sensitive to.

<details>
<summary>Solutions</summary>

**P1** (a) $$\delta = 503\sqrt{\frac{50}{10}} = 503\sqrt{5} = 503\times2.236 = 1125\ \mathrm{m}.$$

(b) $$\delta = 503\sqrt{\frac{50}{0.1}} = 503\sqrt{500} = 503\times22.36 = 11{,}250\ \mathrm{m} = 11.2\ \mathrm{km}.$$

A factor of 100 in frequency gives a factor of 10 in depth — the square root again.

(c) $$f = \rho\left(\frac{503}{\delta}\right)^2 = 200\left(\frac{503}{10^{4}}\right)^2 = 200\times(5.03\times10^{-2})^2 = 200\times2.530\times10^{-3} = 0.506\ \mathrm{Hz}.$$

About 0.5 Hz, a 2 s period — comfortably in the magnetotelluric band.

**P2** (a) $$\rho = a\rho_w\phi^{-m}S^{-n} = 1\times0.15\times(0.22)^{-2}\times1 = \frac{0.15}{0.0484} = 3.10\ \Omega\,\mathrm{m}.$$

(b) $$\rho = \frac{0.15}{0.0484}\times(0.30)^{-2} = 3.10\times\frac{1}{0.09} = 3.10\times11.11 = 34.4\ \Omega\,\mathrm{m}.$$

(c) $$\frac{34.4}{3.10} = 11.1 = (0.30)^{-2}.$$

**An eleven-fold increase in resistivity** from displacing 70 percent of the water. Because hydrocarbons are insulators, they interrupt the only conductive path in the rock, and with $n \approx 2$ the response is quadratic in the water that remains.

This is why resistivity logging works so well: an eleven-fold change is enormous and unambiguous against measurement noise, and — crucially — it is a **direct** hydrocarbon indicator rather than an inference from structure. Compare the seismic bright spot of [6.2](06-02-reflection-seismics.md), where a few percent of gas produces nearly the same response as a full column; resistivity, being quadratic in saturation, distinguishes a commercial column from a fizz. The two are routinely used together for exactly this complementarity.

(d) Because Archie's law assumes **all** conduction is through the pore fluid, with the matrix insulating. Clay minerals conduct through exchangeable cations bound to their charged platelet surfaces — an additional, parallel conduction path that is independent of porosity and saturation.

The consequence is systematic and dangerous: a shaly interval reads *low* resistivity for reasons that have nothing to do with water saturation, so applying Archie would infer high water saturation and conclude the interval is wet when it may hold hydrocarbons. Correcting for it requires a shaly-sand model (Waxman–Smits or similar) that adds a clay conduction term, with the clay content estimated independently — typically from a gamma-ray log. **Missing hydrocarbon-bearing shaly sands by naive application of Archie's law is a well-documented and expensive class of error.**

**P3** (a) Any $(\sigma, t)$ with $\sigma t = 0.50$ S. Three examples:

- $t = 10$ m, $\sigma = 0.050\ \mathrm{S\,m^{-1}}$, i.e. $\rho = 20\ \Omega\,\mathrm{m}$;
- $t = 25$ m, $\sigma = 0.020\ \mathrm{S\,m^{-1}}$, i.e. $\rho = 50\ \Omega\,\mathrm{m}$;
- $t = 100$ m, $\sigma = 0.005\ \mathrm{S\,m^{-1}}$, i.e. $\rho = 200\ \Omega\,\mathrm{m}$.

All three produce identical DC sounding curves.

(b) The ambiguity is **equivalence** (specifically, S-equivalence for a conductive layer). The null direction is the curve $\sigma t = \text{constant}$ in the two-parameter space — equivalently, in logarithmic coordinates, the straight line $\ln\sigma + \ln t = \text{const}$, along which the data do not change at all. In the language of [6.1](06-01-the-linear-inverse-problem.md): the model has two parameters, the data constrain one combination, and the orthogonal combination lies in the null space.

(c) $$\sigma = \frac{S}{t} = \frac{0.50}{25} = 0.020\ \mathrm{S\,m^{-1}}, \qquad \rho = \frac{1}{\sigma} = 50\ \Omega\,\mathrm{m}.$$

(d) Because the two methods are sensitive to different physics.

**DC resistivity** measures a steady-state current distribution. In the steady state, current crossing a thin conductive layer is governed entirely by how much total conductance the layer offers — a thin, very conductive sheet and a thick, mildly conductive one present the same obstacle to the current, and the surface potential field cannot tell them apart. The measurement is genuinely a functional of $\sigma t$ alone.

**Time-domain electromagnetics** measures a *transient*. A step change in the transmitter induces eddy currents that diffuse downward and outward, and the **rate** at which they decay depends on the layer's geometry as well as its conductance — the diffusion time through a layer scales as $\mu\sigma t^2$, which contains $t$ and $\sigma$ in a different combination than $\sigma t$. So the decay curve carries information that the DC measurement does not.

Two measurements, two different combinations of the same two parameters, and the intersection is a point. **This is the closing instance of the pattern that has run through the whole course**: a single observable defines a surface in model space; the way out is never a better measurement of the same kind, but a measurement whose sensitivity differs. It was true for velocity and attenuation ([5.3](05-03-attenuation-anelasticity.md)), for gravity and uplift ([2.7](02-07-space-geodesy.md)), for two rebound wavelengths ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)), for mass and moment of inertia ([5.1](05-01-free-oscillations-earth-density.md)), and it is true here.

</details>

## Flashback

**From Lesson 6.2 (Reflection seismics):** A reflector lies at 1500 m depth beneath a layer of velocity $2200\ \mathrm{m\,s^{-1}}$. (a) Compute the zero-offset two-way time. (b) Compute the normal moveout at 900 m offset. (c) The dominant frequency is 25 Hz; compute the vertical resolution.

<details>
<summary>Solution</summary>

(a) $$t_0 = \frac{2\times1500}{2200} = 1.3636\ \mathrm{s}.$$

(b) $$t(900) = \sqrt{1.3636^2 + \frac{900^2}{2200^2}} = \sqrt{1.85942 + \frac{8.1\times10^{5}}{4.84\times10^{6}}} = \sqrt{1.85942+0.16736} = \sqrt{2.02678} = 1.42364\ \mathrm{s},$$
$$\Delta t_{NMO} = 1.42364 - 1.36364 = 0.0600\ \mathrm{s} = 60.0\ \mathrm{ms}.$$

(c) $$\lambda = \frac{2200}{25} = 88\ \mathrm{m}, \qquad \frac{\lambda}{4} = 22\ \mathrm{m}.$$

Beds thinner than about 22 m will not be resolved as separate reflectors — they will interfere into a single composite wavelet whose amplitude depends on the bed thickness (the tuning effect), which is both a limitation and, when calibrated, a way of estimating thicknesses below the resolution limit.

</details>

## Connections

- **Backward:** the diffusion of magnetic field into a conductor is the same induction equation as the geodynamo's ([3.2](03-02-the-geodynamo.md)), with $\mathbf u = 0$ — the free-decay limit there is the skin depth here; Maxwell's equations and the conductor boundary conditions are [`em-refresher`](../../em-refresher/syllabus.md)'s. Equivalence is [6.1](06-01-the-linear-inverse-problem.md)'s null space with a field-geophysics name.
- **Forward:** the course is finished. The natural next steps in this library are [`geology`](../../geology/syllabus.md) for the observational, field-facing half of Earth science — it is built and it cites this course throughout — and [`planetary-science`](../../planetary-science/syllabus.md), which runs the same physics comparatively across other worlds. [`oceanography`](../../oceanography/syllabus.md), [`atmospheric-science`](../../atmospheric-science/syllabus.md) and [`climate-science`](../../climate-science/syllabus.md) take over the fluid envelopes.
- **Sideways:** magnetotellurics senses mantle conductivity, which depends on temperature, water content and melt — the same three quantities that seismic velocity ([1.5](01-05-seismic-tomography.md)) and attenuation ([5.3](05-03-attenuation-anelasticity.md)) respond to with different weightings, so joint seismic–MT inversion is one of the more effective ways of separating them. The wave–diffusion transition is the same competition between conduction and displacement current that governs skin effect in [`circuits`](../../circuits/syllabus.md) and shielding in [`em-refresher`](../../em-refresher/syllabus.md). [`geology` 3.6](../../geology/lessons/03-06-groundwater-aquifers-karst.md) owns the hydrogeology that these methods are most often deployed to map.
