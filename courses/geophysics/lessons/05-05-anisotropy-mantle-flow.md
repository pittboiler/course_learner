# Geophysics · Lesson 5.5: Anisotropy and mantle flow

> ⏱ ~15 min · Module 5: The deep Earth · Builds on: [1.2](01-02-seismic-wave-zoo.md), [4.6](04-06-mantle-rheology-post-glacial-rebound.md), [5.3](05-03-attenuation-anelasticity.md) · Unlocks: [6.1](06-01-the-linear-inverse-problem.md)

## Why this matters

Tomography ([1.5](01-05-seismic-tomography.md)) shows where the mantle is hot and cold. It does not show which way it is moving. Yet mantle flow is the thing the whole of Module 4 was about, and until the 1980s it was entirely inferred — from plate motions at the surface, from convection theory, from where the slabs are.

Seismic **anisotropy** measures it directly. Mantle rock deforming by dislocation creep ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)) rotates its olivine crystals into alignment, and aligned crystals make the rock's seismic velocity depend on direction. A shear wave crossing such rock **splits** into a fast and a slow component, and the two numbers that come out — a fast direction and a delay time — are a flow azimuth and a layer thickness.

**It is the only direct measurement of the direction of mantle flow we have.**

## The idea

**Olivine is a very anisotropic crystal.** A single crystal transmits P waves at 9.9 km/s along one axis and 7.7 km/s along another — an 18 percent difference. Randomly oriented grains average this out and the rock is isotropic. Align them, and it is not.

**Deformation aligns them, and only one creep mechanism does.** Under **dislocation creep**, crystals deform by slip on preferred planes, which physically rotates each grain toward a common orientation — the fast axis ends up pointing along the shear direction. Under **diffusion creep**, deformation happens by atoms migrating between grain boundaries with no rotation, and no fabric develops ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)). **So anisotropy is evidence for dislocation creep as well as for flow.**

**A shear wave entering anisotropic rock splits.** Its polarization decomposes into a component along the fast axis and one along the slow, which travel at different speeds and emerge separated in time. This is exactly optical birefringence, with elastic waves instead of light.

**Two measurements come out, and both mean something.** The **fast polarization direction** $\phi$ gives the horizontal projection of the flow direction. The **delay time** $\delta t$ gives the thickness of anisotropic rock times its strength, so with a typical 4 percent anisotropy a 1.5 s delay implies about 170 km of aligned mantle.

**And a null result is informative too.** If flow is *vertical* — beneath an upwelling plume, say — the fast axes are vertical, a vertically travelling shear wave sees no horizontal contrast, and there is **no splitting**. A station recording nulls from all back-azimuths is telling you about vertical flow, not about bad data.

**The great ambiguity is depth.** SKS splitting integrates everything between the core–mantle boundary and the surface and cannot say where the anisotropy is. Frozen fabric in ancient lithosphere and active flow in today's asthenosphere give identical single-station measurements, and separating them needs additional information.

## The formal version

**Anisotropy defined.** Velocity depends on propagation direction and on polarization. Two kinds matter for the mantle:

- **Azimuthal anisotropy**: velocity varies with the compass direction of propagation. Measured by shear-wave splitting.
- **Radial (polarization) anisotropy**: horizontally polarized shear waves travel at a different speed from vertically polarized ones, $v_{SH}\ne v_{SV}$. Quantified by

$$\xi = \left(\frac{v_{SH}}{v_{SV}}\right)^2.$$

*In words: $\xi>1$ means horizontally polarized S waves are faster, which is the signature of horizontally aligned fabric and therefore of horizontal flow.* PREM has $\xi>1$ in the upper 220 km.

**Shear-wave splitting.** For a wave crossing a layer of thickness $L$ with fast and slow shear velocities $v_f$ and $v_s$:

$$\boxed{\ \delta t = L\left(\frac{1}{v_s} - \frac{1}{v_f}\right) \approx \frac{L}{\bar v}\cdot\frac{\Delta v}{\bar v}\ }$$

*In words: the delay is the path length times the fractional anisotropy, divided by the mean velocity.*

**The measurement.** SKS and SKKS phases are ideal: they convert from P to S at the core–mantle boundary on the way out, so they enter the mantle **radially polarized** with a known initial polarization. Any transverse-component energy at the station must have been produced by splitting on the way up, and the entire signal is therefore receiver-side. Typical observations:

| Quantity | Typical value |
|---|---|
| $\delta t$ | 0.5–2.0 s (global average ~1.0 s) |
| implied layer thickness | 100–200 km at 4% anisotropy |
| aggregate olivine anisotropy | 3–5% |
| single-crystal olivine | up to 18% |

**Interpreting the fast direction.**

| Setting | Expected fast axis |
|---|---|
| simple asthenospheric shear under a moving plate | parallel to absolute plate motion |
| beneath a craton with ancient fabric | parallel to old orogenic structures, unrelated to present motion |
| around a subducting slab | trench-parallel or trench-normal, depending on hydration and flow geometry |
| above a vertical plume | nulls, or weak and inconsistent splitting |

**Water changes the answer.** In hydrous olivine the dominant slip system changes, and the fast axis can end up **perpendicular** to the shear direction rather than parallel — the so-called B-type fabric. This matters in the mantle wedge above subduction zones, which is wet, and it is one reason trench-parallel fast axes there are not straightforward to read.

**Inner-core anisotropy.** PKIKP travels about 3 percent faster along polar paths than equatorial ones ([5.4](05-04-the-core.md)). The mechanism is disputed — solidification texture, deformation, or magnetically controlled growth — and the anisotropy is layered and hemispherically asymmetric.

**Crustal anisotropy.** In the crust, anisotropy usually comes from **aligned cracks** held open by the stress field rather than from crystal alignment, so the fast direction tracks the maximum horizontal compressive stress. Changes in crustal splitting have been proposed as an earthquake precursor; the evidence remains contested.

## Picture

![Left: a box containing many short blue line segments all tilted the same way, representing olivine grains aligned by shear, with a coral arrow beneath labelled flow direction. Notes state that dislocation creep rotates the fast a-axis of every olivine crystal toward the direction of shear, so the rock remembers which way it flowed, and that single-crystal olivine is 18 percent anisotropic while a partly aligned aggregate manages 3 to 5 percent, enough to split a shear wave by a second or two. Right: a diagram of shear-wave splitting. An SKS ray travels upward through a shaded anisotropic layer about 170 kilometres thick. One pulse goes in; two pulses come out, drawn as a coral fast pulse and a blue slow pulse offset by a delay of about 1.5 seconds and orthogonally polarized. A caption says the fast direction gives the flow azimuth and the delay gives how much anisotropic rock the wave crossed — two numbers, one flow field](assets/05-05-fig1.svg)

Birefringence, in rock, with the crystals combed into line by the flow you are trying to measure.

## Worked examples

**Example 1 (mechanical — from a delay time to a layer thickness).** A station records SKS splitting with $\delta t = 1.5$ s. The mantle beneath has a mean shear velocity of $4.5\ \mathrm{km\,s^{-1}}$ and an aggregate anisotropy of 4 percent. How thick is the anisotropic layer?

*Fast and slow velocities.*
$$v_f = 4.5\times1.02 = 4.59\ \mathrm{km\,s^{-1}}, \qquad v_s = 4.5\times0.98 = 4.41\ \mathrm{km\,s^{-1}}.$$

*Slownesses.*
$$\frac{1}{v_s} - \frac{1}{v_f} = \frac{1}{4.41} - \frac{1}{4.59} = 0.22676 - 0.21786 = 8.897\times10^{-3}\ \mathrm{s\,km^{-1}}.$$

*Layer thickness.*
$$L = \frac{\delta t}{8.897\times10^{-3}} = \frac{1.5}{8.897\times10^{-3}} = 169\ \mathrm{km}.$$

**About 170 km** — comfortably matching the depth extent of the asthenosphere, which is the standard interpretation of average continental splitting.

*Note the trade-off built into the answer.* Only the product $L\times(\Delta v/v)$ is measured. The same 1.5 s comes from 170 km at 4 percent, 340 km at 2 percent, or 85 km at 8 percent. Quoting a thickness requires assuming an anisotropy strength, and that assumption should always be stated.

**Example 2 (why you'd care — frozen fabric or living flow?).** A station on an Archean craton records $\delta t = 1.2$ s with a fast axis at 060°. Absolute plate motion there is toward 275°. Two interpretations compete: ancient lithospheric fabric frozen in during a 2.7 Ga orogeny, or present-day asthenospheric flow. How would you decide?

*Why the fast axis alone does not settle it.* If asthenospheric shear beneath a moving plate were responsible, the fast axis should parallel the absolute plate motion — 275°, or its equivalent 095°. The observed 060° is 35 degrees off. That is suggestive of frozen fabric, but not decisive: mantle flow is not required to be parallel to plate motion, and where the plate moves slowly relative to the underlying mantle it need not be.

*What actually distinguishes them: the depth of the anisotropy.* Frozen fabric lives in the lithospheric mantle, above about 200 km; active flow lives in the asthenosphere below it. SKS integrates both and cannot separate them. So the discriminating measurements are the ones with **depth resolution**:

- **Surface-wave azimuthal anisotropy.** Different periods sample different depths ([1.2](01-02-seismic-wave-zoo.md)), so a dispersion study returns fast direction *as a function of depth*. If the 060° fabric is confined to the top 150 km and something else appears below, the case for frozen lithosphere is made.
- **Multiple-layer splitting analysis.** With two anisotropic layers of different orientation, the apparent splitting parameters vary with the wave's back-azimuth in a characteristic, period-dependent way. Fitting that variation recovers both layers separately. A station showing a clean $90^\circ$-periodic back-azimuthal pattern has one layer; a $180^\circ$ pattern indicates two.
- **Comparison with surface geology.** If 060° parallels the strike of the 2.7 Ga orogenic belt exposed at the surface, the coincidence is strong evidence for a lithospheric origin — the fabric was created in that deformation and has been carried along ever since.
- **Regional pattern.** Frozen fabric follows geological boundaries and changes abruptly across sutures. Asthenospheric flow is smooth over hundreds of kilometres and ignores surface geology.

*Why this is the characteristic difficulty of the method.* Splitting is a **path-integrated** measurement with excellent lateral resolution — one station samples a cone perhaps 50 km across — and essentially **no depth resolution**. That combination is unusual and it dictates how the technique is used: as a dense map of a vertically integrated quantity, interpreted by bringing in depth information from elsewhere.

It is the same structural problem as everywhere else in this course. A single observable defines a surface in model space; you get a point by intersecting it with an observable of different sensitivity. Here the missing dimension is depth, and surface waves supply it. **The formal name for what SKS splitting cannot see is a null space, and [6.1](06-01-the-linear-inverse-problem.md) is where that becomes precise.**

## Watch out

- **You might think** a null measurement means the station is bad or the mantle isotropic. **Actually** nulls arise whenever the incoming polarization happens to align with the fast or slow axis, and also when the fast axis is *vertical*. Nulls from all back-azimuths are a real result — most naturally read as vertical flow, as beneath an upwelling.
- **You might think** the fast axis always parallels the flow. **Actually** that holds for dry olivine deforming in the common A-type regime. In wet mantle, particularly the wedge above a subducting slab, B-type fabric develops and the fast axis is **perpendicular** to the shear direction. Reading a trench-parallel fast axis as trench-parallel flow may be exactly backwards.
- **You might think** more delay means faster flow. **Actually** $\delta t$ measures the *amount* of aligned rock, not the rate at which it is moving. Alignment saturates once strain exceeds a few hundred percent, so a slowly deforming thick layer and a rapidly deforming one of the same thickness give the same splitting.

## One-liner

> Flowing mantle rotates its olivine crystals into line, aligned crystals split a shear wave, and the two numbers that result — fast direction and delay — are the only direct measurement of which way the mantle is moving.

## Problems

**P1 (🟢)** A station records $\delta t = 0.9$ s. The anisotropic layer has a mean shear velocity of $4.4\ \mathrm{km\,s^{-1}}$ and 5 percent anisotropy. (a) Compute the fast and slow velocities. (b) Compute the difference in slowness. (c) Compute the layer thickness.

**P2 (🟡)** Two nearby stations record $\delta t = 1.6$ s with fast axis 100°, and $\delta t = 0.3$ s with fast axis 105°. Absolute plate motion is toward 100°. (a) Interpret the first station. (b) Interpret the second, giving two possible explanations. (c) State one measurement that would distinguish them. (d) Using 4 percent anisotropy and $\bar v = 4.5\ \mathrm{km\,s^{-1}}$, compute the implied layer thickness at each station.

**P3 (🔴, bridges to [6.1](06-01-the-linear-inverse-problem.md))** A station sits above a suspected mantle plume. SKS measurements from twelve back-azimuths all return nulls. (a) List the three distinct situations that produce a null, and say which can be excluded using twelve different back-azimuths. (b) State what the surviving explanation implies about the flow. (c) Explain why the null result is a *stronger* constraint on flow geometry than a typical splitting measurement, despite containing less data. (d) A colleague argues that nulls prove nothing because they are also what you would see if the instrument were broken. Give the observational check that settles it.

<details>
<summary>Solutions</summary>

**P1** (a) $$v_f = 4.4\times1.025 = 4.51\ \mathrm{km\,s^{-1}}, \qquad v_s = 4.4\times0.975 = 4.29\ \mathrm{km\,s^{-1}}.$$

(b) $$\frac{1}{4.29} - \frac{1}{4.51} = 0.23310 - 0.22173 = 1.137\times10^{-2}\ \mathrm{s\,km^{-1}}.$$

(c) $$L = \frac{0.9}{1.137\times10^{-2}} = 79\ \mathrm{km}.$$

**P2** (a) A large delay with the fast axis **exactly parallel to absolute plate motion** is the textbook signature of **simple asthenospheric shear beneath a moving plate**: the plate drags the top of the asthenosphere along, the resulting shear aligns olivine with the direction of motion, and a thick layer of aligned rock accumulates.

(b) A very small delay with a similar orientation. Two readings:

- **A thin anisotropic layer.** The same flow geometry, but far less aligned rock beneath this station — perhaps a thinner asthenospheric channel, or a region where deformation has been too small to develop full fabric.
- **Destructive interference between two layers.** If a lithospheric fabric and an asthenospheric fabric have orientations roughly 90° apart, their effects partially cancel and the *apparent* splitting is small even though both layers are strongly anisotropic. The residual fast axis then need not resemble either layer's true orientation.

A third possibility deserves mention: **vertical or complex flow** beneath this particular station, which would also suppress the horizontal contrast.

(c) **Examine the back-azimuthal dependence of the apparent splitting parameters.** A single anisotropic layer gives apparent $\phi$ and $\delta t$ that are constant with back-azimuth (with nulls every 90°). Two layers give a characteristic $90^\circ$-periodic *variation* in both parameters. So a station whose apparent splitting varies systematically with the direction the wave came from has two layers; one whose parameters are stable has a single thin layer.

A second, independent check is **surface-wave azimuthal anisotropy**, which resolves the fast direction with depth and would show the two layers directly.

(d) Using $\Delta v/v = 0.04$ and $\bar v = 4.5$:
$$v_f = 4.59,\quad v_s = 4.41, \qquad \frac{1}{v_s}-\frac{1}{v_f} = 8.897\times10^{-3}\ \mathrm{s\,km^{-1}}.$$
$$L_1 = \frac{1.6}{8.897\times10^{-3}} = 180\ \mathrm{km}, \qquad L_2 = \frac{0.3}{8.897\times10^{-3}} = 34\ \mathrm{km}.$$

**P3** (a) Three situations give a null:

1. **The medium is isotropic** — no anisotropy to split the wave.
2. **The incoming polarization is parallel to the fast or the slow axis** — the wave is already an eigenpolarization, so it propagates unsplit.
3. **The fast axis is vertical** — a near-vertically travelling SKS wave, polarized in the horizontal plane, sees no contrast between its two horizontal components.

Twelve different back-azimuths **exclude case 2**. SKS is radially polarized, so its polarization direction at the station equals the back-azimuth; twelve distinct back-azimuths give twelve distinct polarizations, and a horizontal fast axis could be parallel to at most a couple of them. Systematic nulls across all of them cannot be a coincidence of orientation.

That leaves an isotropic mantle or a vertical fast axis.

(b) A **vertical fast axis** means the olivine a-axes point up, which under A-type fabric means the shear direction is vertical: **the flow beneath the station is predominantly vertical**. That is precisely what a plume conduit or a strong upwelling should produce, and it is the expected signature.

(The isotropic alternative is possible in principle but implausible here: it would require the mantle beneath to be deforming by diffusion creep, or not deforming at all, in a region independently suspected of vigorous upwelling.)

(c) Because a normal splitting measurement returns two numbers that are consistent with a large family of models — any combination of layer thickness and anisotropy strength giving the same product, at any depth, with any of several fabric types. It **constrains a product and an azimuth**, and leaves the geometry largely open.

A systematic null across all back-azimuths, by contrast, rules out **every model with a substantial horizontally-oriented fabric anywhere along the path**. That is a statement about the entire column, not about an integral through it — a much stronger logical form. **The null excludes a whole region of model space rather than confining the answer to a surface within it**, which is why null-rich stations are prized in plume studies.

(d) **Check the transverse-component energy on phases that are known to split, and check that the instrument records anything at all correctly.** Concretely:

- Look at other phases from the same events — direct S, ScS, or local S from regional earthquakes. If those show splitting while SKS does not, the instrument is fine and the nulls are real.
- Check the **horizontal component orientations** by comparing the observed SKS polarization direction with the known back-azimuth. If they agree, the horizontals are correctly oriented and functioning; a broken or misoriented horizontal channel would show up immediately as a polarization that does not track back-azimuth.
- Verify that neighbouring stations in the same network, recording the same events, produce normal splitting. A regional null anomaly confined to one station over a suspected plume is a result; a null at every station in the network is an instrumentation or processing problem.

The general principle is worth naming: **a negative result is only as good as the demonstration that a positive result would have been detected.** Establishing that sensitivity is not a formality; it is the whole content of the claim.

</details>

## Flashback

**From Lesson 5.4 (The core):** The outer core's mean density is $10{,}900\ \mathrm{kg\,m^{-3}}$, against $12{,}000$ for pure iron at the same conditions. (a) Compute the fractional density deficit. (b) The core adiabatic gradient is $0.88\ \mathrm{K\,km^{-1}}$ and the CMB area is $1.52\times10^{14}\ \mathrm{m^2}$; compute the conductive heat flow along the adiabat for $k = 80\ \mathrm{W\,m^{-1}\,K^{-1}}$. (c) If the core's total heat flow is 11 TW, state whether the top of the core convects.

<details>
<summary>Solution</summary>

(a) $$\frac{12{,}000-10{,}900}{12{,}000} = \frac{1100}{12{,}000} = 9.2\%.$$

(b) $$q_{\text{ad}} = 80\times0.88\times10^{-3} = 7.04\times10^{-2}\ \mathrm{W\,m^{-2}},$$
$$Q_{\text{ad}} = 7.04\times10^{-2}\times1.52\times10^{14} = 1.07\times10^{13}\ \mathrm{W} = 10.7\ \mathrm{TW}.$$

(c) The total heat flow of 11 TW just exceeds the 10.7 TW that conduction can carry, so **the top of the core convects, but only barely** — with a margin of 0.3 TW out of 11, about 3 percent.

That is uncomfortably marginal given that both numbers carry uncertainties of tens of percent. A slightly higher conductivity, or a slightly lower core heat flow, flips the sign and produces a stably stratified layer at the top of the core. This is exactly the knife-edge that makes the new core paradox of [5.4](05-04-the-core.md) a live problem rather than a settled calculation.

</details>

## Connections

- **Backward:** the SH/SV distinction that splitting exploits is [1.2](01-02-seismic-wave-zoo.md)'s; the dislocation creep that produces the fabric is [4.6](04-06-mantle-rheology-post-glacial-rebound.md)'s, and the fact that only dislocation creep aligns crystals makes anisotropy a rheology diagnostic as well as a flow one; the inner-core anisotropy is [5.4](05-04-the-core.md)'s.
- **Forward:** [6.1](06-01-the-linear-inverse-problem.md) formalizes the depth null space that Example 2 works around, and the multiple-layer analysis of P2 is a small inverse problem in its own right.
- **Sideways:** shear-wave splitting is elastic birefringence, formally identical to optical birefringence in a uniaxial crystal ([`waves-optics`](../../waves-optics/syllabus.md)) — a calcite crystal and the asthenosphere split a wave by the same mathematics. The lattice-preferred orientation produced by slip is the texture development of [materials-science 4.2](../../materials-science/lessons/04-02-plastic-deformation-schmid.md), where rolling a metal sheet aligns its grains for the same reason and with the same anisotropic consequences.
