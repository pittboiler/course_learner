# Planetary Science · Lesson 2.3: Magnetic fields and the dynamo

> ⏱ ~15 min · Module 2: Planetary interiors and surfaces · Builds on: [2.1](02-01-differentiation-interior-structure.md), [2.2](02-02-thermal-evolution-heat-transport.md) · Unlocks: [2.7](02-07-moon-earth-moon-system.md), [3.4](03-04-magnetospheres-solar-wind.md), [5.1](05-01-giant-ice-giant-interiors.md)

## Why this matters

A planetary magnetic field is the most sensitive remote probe of a deep interior that exists. It cannot be faked by surface geology, it responds to conditions thousands of kilometres down, and it is measurable by any spacecraft that flies past once. **A field means there is a liquid, conducting, convecting layer inside — right now.** No field means one of those three is missing, and working out which is missing tells you about the planet's thermal history.

It also matters for the surface. A magnetic field deflects the solar wind, which changes how an atmosphere is eroded ([3.4](03-04-magnetospheres-solar-wind.md)) — although, as that lesson will argue, by considerably less than the popular account claims.

## The idea

**A planetary field cannot be a permanent magnet.** Iron loses its permanent magnetization above the Curie temperature, about 1040 K for pure iron, and every planetary core is far hotter than that. So whatever is making the field is doing it *now*, actively.

**Nor can it be a leftover.** A field frozen into a stationary conductor decays as its currents dissipate ohmically, and the decay time for Earth's core is about 25,000 years. Against 4.5 billion years, that is nothing. **The field we measure today was regenerated within the last few tens of thousands of years**, and something must be regenerating it continuously.

**That something is a dynamo: moving conducting fluid converting kinetic energy into magnetic energy.** The mechanism is a feedback loop. A conductor moving through a magnetic field generates an electric current; that current makes its own magnetic field; if the flow is arranged correctly the new field reinforces the old one. It is self-exciting, like an electrical generator with no permanent magnet in it, and like such a generator it needs a seed field to start — the interstellar or solar field is more than enough.

**"Arranged correctly" is doing real work in that sentence, and it is where rotation comes in.** Purely radial convection would not do it; the flow has to be helical, twisting as it rises, so that a field line stretched outward by an upwelling is also rotated into a new direction where it can add to the existing field rather than cancel it. Rotation supplies that twist through the Coriolis force. **This is why rotation is a requirement and not a detail**, and it is why Venus — same size as Earth, certainly with a liquid core — has no field.

**So the checklist is three items.**

1. **A large volume of electrically conducting fluid.** Molten iron in rocky planets; metallic hydrogen in Jupiter and Saturn; a hot ionic water–ammonia fluid in Uranus and Neptune; possibly a salty ocean in Ganymede.
2. **Vigorous convection to stir it.** This is the thermal-history requirement — the core must be losing heat fast enough to convect, which needs the mantle above it to keep carrying that heat away ([2.2](02-02-thermal-evolution-heat-transport.md)).
3. **Rotation to organize the flow into helical columns.**

**Every planet's magnetic state is a statement about which of these it has.** Earth has all three. Mars had all three and lost the second when its core stopped convecting, leaving a fossil record magnetized into its ancient crust. Venus almost certainly has the first and third but fails the second, because its stagnant lid does not carry heat away from the mantle fast enough for the core to convect. **Venus is the cleanest demonstration that a magnetic field is about heat flow, not about iron.**

## The formal version

**Free decay.** In a stationary conductor Maxwell's equations reduce to a diffusion equation for the field,

$$\frac{\partial\mathbf B}{\partial t} = \eta_m\nabla^2\mathbf B, \qquad \eta_m = \frac{1}{\mu_0\sigma},$$

with $\eta_m$ the **magnetic diffusivity**. The fundamental mode of a sphere of radius $L$ decays as $e^{-t/\tau}$ with

$$\boxed{\ \tau = \frac{\mu_0\sigma L^2}{\pi^2}\ }$$

*In words: without regeneration, a field diffuses away in this time.* For Earth's core ($\sigma\approx5\times10^{5}\ \mathrm{S\,m^{-1}}$, $L = 3.48\times10^{6}$ m):

$$\tau = \frac{4\pi\times10^{-7}\times5\times10^{5}\times(3.48\times10^{6})^2}{\pi^2} = 7.7\times10^{11}\ \mathrm{s} = 2.4\times10^{4}\ \mathrm{yr}.$$

**Twenty-four thousand years.** Note this also sets the timescale of geomagnetic secular variation and constrains how fast reversals can happen.

**The magnetic Reynolds number.** Adding fluid motion $\mathbf u$ gives the induction equation:

$$\frac{\partial\mathbf B}{\partial t} = \underbrace{\nabla\times(\mathbf u\times\mathbf B)}_{\text{regeneration}} + \underbrace{\eta_m\nabla^2\mathbf B}_{\text{decay}}.$$

The ratio of the two terms is

$$Rm = \frac{uL}{\eta_m} = \mu_0\sigma uL,$$

*In words: how much faster the flow builds field than diffusion destroys it.* A dynamo requires roughly

$$Rm \gtrsim 40.$$

For Earth's core with $u\approx5\times10^{-4}\ \mathrm{m\,s^{-1}}$ (inferred from westward drift of field features):

$$Rm = 4\pi\times10^{-7}\times5\times10^{5}\times5\times10^{-4}\times3.48\times10^{6} \approx 1100.$$

Comfortably supercritical — Earth's dynamo is not marginal.

**Scaling laws.** Modern dynamo simulations find field strength set mainly by the **buoyancy flux** (the convective power) rather than by rotation rate:

$$B \sim \left(\rho\,\mu_0\right)^{1/2}\left(\frac{F_{\text{buoy}}}{\rho}\right)^{1/3},$$

which correctly predicts Jupiter's field to be an order of magnitude stronger than Earth's without needing to invoke its faster rotation. Rotation still matters, but as a *geometry* requirement — it decides whether the field is dipolar and axial or multipolar and messy, not chiefly how strong it is.

**Observed fields.**

| Body | Surface field (μT) | Status | Which requirement |
|---|---|---|---|
| Jupiter | 428 | active | metallic hydrogen, huge buoyancy flux |
| Earth | 31 | active | all three |
| Uranus | 23 | active but **multipolar and tilted 59°** | thin-shell ionic dynamo ([5.1](05-01-giant-ice-giant-interiors.md)) |
| Saturn | 22 | active, extraordinarily axisymmetric | — |
| Neptune | 14 | active, multipolar, tilted 47° | — |
| Ganymede | 0.72 | **active** | the only moon with one |
| Mercury | 0.3 | active but very weak | thin convecting shell over a stable layer |
| Mars | ~0.0015 (crustal) | **remanent only** | fails (2): core stopped convecting ~4.1 Ga |
| Moon | ~0.0002 (crustal) | remanent only | fails (2), and core is tiny |
| Venus | $<3\times10^{-5}$ | **none** | fails (2): stagnant lid, core not cooling |

**Remanent crustal magnetism.** When rock cools through its Curie temperature in the presence of a field, it locks that field in permanently. Mars's southern highlands carry crustal magnetization strong enough to be measured from orbit, and the northern lowlands and the giant impact basins do not. Reading that pattern gives a startlingly specific result: **Mars had a dynamo, it was strong, and it shut off before the Hellas and Argyre basins formed — so before about 4.1 Ga.** Nothing else could have told us that.

## Picture

![A horizontal bar chart on a logarithmic axis of surface equatorial magnetic field strength in microtesla, from ten to the minus five up to a thousand. Bars in blue for bodies with an active dynamo: Jupiter at 428, Saturn at 22, Uranus at 23, Neptune at 14, Earth at 31, Ganymede at 0.72 and Mercury at 0.3. Bars in coral for bodies with no dynamo now: Mars at 0.0015 and the Moon at 0.0002, both frozen crustal fields only, and Venus at three times ten to the minus five, no field at all. Below the chart a three-item checklist reads that a dynamo needs a fluid that conducts electricity, convection to stir it, and rotation to organise the stirring, annotated to show that Venus has a conducting fluid but fails on convection and that Mars's is frozen](assets/02-03-fig1.svg)

Nine orders of magnitude, and the split is not by size — Ganymede has a field and Venus does not.

## Worked examples

**Example 1 (mechanical — could Mars run a dynamo today?).** Mars's core has radius $\approx1700$ km and conductivity similar to Earth's. (a) Compute the free-decay time. (b) What flow speed would be needed for $Rm = 40$?

(a) $$\tau = \frac{\mu_0\sigma L^2}{\pi^2} = \frac{4\pi\times10^{-7}\times5\times10^{5}\times(1.7\times10^{6})^2}{\pi^2} = \frac{0.6283\times2.89\times10^{12}}{9.870} = 1.84\times10^{11}\ \mathrm{s}.$$

$$\tau = 5.8\times10^{3}\ \mathrm{yr}.$$

Under six thousand years — a quarter of Earth's, because $\tau\propto L^2$ and Mars's core is half the size. **Any Martian field must be actively maintained on a timescale short compared with anything geological**, which is why the absence of a global field today is such a hard constraint: it does not mean the dynamo stopped recently, it means it is not running at all.

(b) $$Rm = \mu_0\sigma uL = 40 \;\Rightarrow\; u = \frac{40}{4\pi\times10^{-7}\times5\times10^{5}\times1.7\times10^{6}} = \frac{40}{1.068\times10^{6}} = 3.7\times10^{-5}\ \mathrm{m\,s^{-1}}.$$

Only 37 micrometres per second — an order of magnitude *slower* than Earth's core flow. **The threshold is easy to reach.** Mars's core is very likely still liquid (its tidal Love number says so, [3.2](03-02-gravity-topography-tidal-response.md)), and the flow required is undemanding. What is missing is not the ability to convect fast enough but any convection at all: the Martian mantle stopped extracting heat from the core, the core became thermally stratified, and stratified fluid does not overturn no matter how liquid it is.

**Example 2 (why you'd care — why Venus has no field).** Venus is 95 percent of Earth's size, 82 percent of its mass, and has essentially the same bulk composition, so it certainly has a large iron core that is at least partly liquid. It rotates once every 243 days. Why no field?

**The tempting answer is the rotation, and it is wrong.** Test it: the relevant measure of rotational control is the Ekman or Rossby number, and dynamo simulations run at Venus's rotation rate still produce fields — weaker and less dipolar, but present. Moreover Ganymede rotates once every 7.15 days and has a dynamo, and Mercury once every 59 days and has one too. **Slow rotation degrades a dynamo's geometry; it does not switch it off.**

The real answer is requirement 2. A core convects only if the mantle above it draws heat out faster than the core can conduct it away along its own adiabat. Earth's mantle does this because plate tectonics continuously delivers cold lithosphere to depth. Venus has no plate tectonics: it has a single stagnant lid ([2.5](02-05-volcanism-tectonics.md)), which is a far poorer insulator-remover, so the mantle just above the core stays hot. With no temperature gradient to drive it, the core does not convect, and with no convection there is no dynamo — regardless of how liquid the iron is or how fast the planet turns.

There is a second, related possibility that may compound it: Venus may not have started nucleating an inner core. On Earth, inner-core freezing releases both latent heat and buoyant light elements, and that **compositional** convection is now thought to power most of the modern geodynamo. A Venus whose core has never begun to freeze lacks that power source entirely.

**The chain is worth stating in full, because it runs through the whole module: no plate tectonics → poor mantle heat extraction → no core convection → no dynamo.** A magnetic field measured on a flyby is, through that chain, a statement about a planet's surface tectonic style.

## Watch out

- **You might think a planet's field is a permanent magnet or a relic, but both are ruled out by simple numbers** — the Curie temperature by thousands of kelvin, and the relic hypothesis by a 25,000-year decay time against a 4.5-billion-year age.
- **You might think faster rotation means a stronger field, but modern scaling laws put field strength on the convective power, not the rotation rate.** Jupiter's field is strong because its buoyancy flux is enormous, not because its day is ten hours. Rotation controls the field's *geometry* — dipolar versus multipolar — which is why Uranus and Neptune, whose dynamos operate in thin shells, are so disordered.
- **You might think a liquid core is sufficient, but it must also be convecting.** Mars almost certainly has a liquid core right now and no field. Liquidity is necessary, convection is the binding constraint, and convection is a statement about the *mantle*.
- **You might think crustal magnetism means a planet has a field, but it means it once did.** Distinguishing the two requires either mapping the field's spatial structure — a dynamo field is smooth and large-scale, a crustal field is patchy and correlates with geology — or noting that it does not vary in time.

## One-liner

> A magnetic field is a live signal that a planet's core is still convecting, and whether it convects is decided by how fast the mantle above it can carry heat away.

## Problems

**P1 (🟢)** An icy moon has a subsurface salty ocean 100 km thick with conductivity $\sigma = 5\ \mathrm{S\,m^{-1}}$. (a) Compute the free-decay time. (b) Compute the flow speed needed for $Rm = 40$. (c) Comment on whether a self-sustaining dynamo in such an ocean is plausible.

**P2 (🟡)** Ganymede has a metallic core of radius about 700 km with $\sigma = 5\times10^{5}\ \mathrm{S\,m^{-1}}$ and a surface field of $0.72\ \mathrm{\mu T}$. (a) Compute the free-decay time. (b) The field at the core–mantle boundary is larger than the surface field by $(R/R_{\text{core}})^3$; with $R = 2634$ km, compute it. (c) State what the existence of this field implies about Ganymede's interior, and name one thing that must be supplying the heat.

**P3 (🔴, optional)** Earth's inner core is growing as the core cools. (a) Explain in two sentences why inner-core freezing is a more effective dynamo power source than simple thermal convection. (b) The inner core is 1220 km in radius and about 1 Gyr old. Estimate its mean growth rate in mm/yr. (c) Mercury's core is 2020 km in radius but its field is a hundred times weaker than Earth's. Give two distinct explanations consistent with the scaling law $B\sim(\rho\mu_0)^{1/2}(F_{\text{buoy}}/\rho)^{1/3}$, and say what observation would distinguish them.

<details>
<summary>Solutions</summary>

**P1** (a) $$\tau = \frac{\mu_0\sigma L^2}{\pi^2} = \frac{4\pi\times10^{-7}\times5\times(10^{5})^2}{\pi^2} = \frac{6.283\times10^{-6}\times10^{10}}{9.870} = \frac{6.283\times10^{4}}{9.870} = 6.37\times10^{3}\ \mathrm{s}.$$

About **1.8 hours**. Salt water is a poor conductor compared with liquid iron — by five orders of magnitude — and the decay time collapses accordingly.

(b) $$u = \frac{Rm}{\mu_0\sigma L} = \frac{40}{4\pi\times10^{-7}\times5\times10^{5}} = \frac{40}{0.3142} = 127\ \mathrm{m\,s^{-1}}.$$

(c) **Not plausible.** A sustained ocean current of 127 m/s is absurd — Earth's fastest ocean currents are around 2 m/s, and an icy moon's ocean, driven by weak convection and tides, moves at millimetres to centimetres per second. The conductivity is simply too low by a factor of $10^{5}$.

This is exactly why Europa's and Callisto's magnetic signatures are **induced**, not generated: the ocean responds to Jupiter's rotating field as a passive conductor rather than acting as a dynamo. That distinction is the whole basis of subsurface-ocean detection in [3.4](03-04-magnetospheres-solar-wind.md) and [5.3](05-03-ocean-worlds.md) — and it works *because* the ocean is a mediocre conductor, since a perfect one would tell you nothing about its depth or salinity.

**P2** (a) $$\tau = \frac{4\pi\times10^{-7}\times5\times10^{5}\times(7\times10^{5})^2}{\pi^2} = \frac{0.6283\times4.9\times10^{11}}{9.870} = \frac{3.079\times10^{11}}{9.870} = 3.12\times10^{10}\ \mathrm{s}.$$

$$\tau = 989\ \mathrm{yr}.$$

(b) $$B_{\text{cmb}} = B_{\text{surf}}\left(\frac{R}{R_{\text{core}}}\right)^3 = 0.72\times\left(\frac{2634}{700}\right)^3 = 0.72\times(3.763)^3 = 0.72\times53.3 = 38\ \mathrm{\mu T}.$$

Comparable to Earth's *surface* field, though well below Earth's core–mantle-boundary field of several hundred μT.

(c) Ganymede must have a **liquid, electrically conducting, actively convecting metallic core right now** — the 989-year decay time rules out any relic. That is remarkable for a body smaller than Mercury and less massive than Mars, both of which are essentially thermally dead in their silicate portions.

The heat cannot be primordial or radiogenic alone at that size. The leading supply is **tidal heating**, driven by Ganymede's participation in the Laplace resonance with Io and Europa ([5.2](05-02-tides-resonances-orbital-evolution.md)) — either at present or during a past epoch when the resonance was more eccentric — with inner-core freezing plausibly contributing compositional buoyancy on top.

**P3** (a) Freezing the inner core releases latent heat *and* expels light elements (sulphur, oxygen, silicon) that do not fit into the solid, and those light elements are buoyant in the surrounding liquid. Compositional buoyancy is far more efficient than thermal buoyancy because it is not degraded by thermal diffusion and because none of its energy is wasted heating the fluid it rises through.

(b) $$\frac{1220\ \mathrm{km}}{10^{9}\ \mathrm{yr}} = \frac{1.22\times10^{9}\ \mathrm{mm}}{10^{9}\ \mathrm{yr}} = 1.2\ \mathrm{mm\,yr^{-1}}.$$

(c) Two explanations, both allowed by the scaling law, which makes $B$ depend on the buoyancy flux and not on core size:

**(i) Low buoyancy flux.** Mercury's core may be cooling extremely slowly, so $F_{\text{buoy}}$ is small. Since $B\propto F_{\text{buoy}}^{1/3}$, a field 100 times weaker needs a buoyancy flux $10^{6}$ times smaller — a lot, but Mercury's mantle is thin, its lid is stagnant, and a large sulphur content would depress the melting curve so that the core barely freezes.

**(ii) A thin convecting shell over a stably stratified layer.** If only an outer shell of Mercury's core convects while a deep region is stratified, the stable layer acts as a low-pass filter: it lets the slowly varying, large-scale dipole through while attenuating the small-scale, rapidly varying components. This produces a weak but highly axisymmetric field from a normal-strength dynamo.

**The distinguishing observation is the field's spatial structure and its secular variation, not its strength.** Explanation (i) predicts a weak field with ordinary structure — a dipole with the usual quadrupole and octupole content, and normal secular variation. Explanation (ii) predicts an unusually pure, filtered dipole with suppressed higher harmonics and anomalously *slow* secular variation, since the stable layer screens exactly the rapidly changing components.

What MESSENGER found favours (ii): Mercury's field is strongly axisymmetric, and its dipole is offset about 20 percent of the planet's radius northward along the spin axis — a large quadrupole-to-dipole ratio with very little non-axisymmetric structure, which is the signature of filtering rather than of a merely feeble dynamo.

</details>

## Flashback

**From Lesson 2.2 (Thermal evolution and heat transport):** A rocky body has a mantle 900 km thick with $\rho = 3400\ \mathrm{kg\,m^{-3}}$, $\alpha = 3\times10^{-5}\ \mathrm{K^{-1}}$, $g = 1.8\ \mathrm{m\,s^{-2}}$, $\Delta T = 800$ K, $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$ and $\eta = 10^{21}$ Pa s. (a) Compute the Rayleigh number. (b) Is it convecting, taking $Ra_c = 10^{3}$? (c) The body cools and its mantle stiffens to $\eta = 10^{23}$ Pa s while $\Delta T$ falls to 400 K. Recompute $Ra$ and state what has happened to the body.

<details>
<summary>Solution</summary>

(a) $$Ra = \frac{3400\times3\times10^{-5}\times1.8\times800\times(9\times10^{5})^3}{10^{-6}\times10^{21}}.$$

Numerator: $3400\times3\times10^{-5} = 0.102$; $\times1.8 = 0.1836$; $\times800 = 146.9$; $(9\times10^{5})^3 = 7.29\times10^{17}$; product $= 1.071\times10^{20}$.

Denominator: $10^{15}$.

$$Ra = 1.07\times10^{5}.$$

(b) $1.07\times10^{5}$ against $Ra_c = 10^{3}$: **yes, about 100 times supercritical** — convecting, though far less vigorously than Earth's $3.5\times10^{7}$.

(c) $$Ra' = 1.07\times10^{5}\times\frac{400}{800}\times\frac{10^{21}}{10^{23}} = 1.07\times10^{5}\times0.5\times10^{-2} = 5.4\times10^{2}.$$

$Ra' = 540$, now **below** $Ra_c = 10^{3}$. **Convection has stopped.** The mantle has become a rigid conductive shell, and from this moment the body cools only by conduction — on the hopeless $L^2/\kappa$ timescale of [2.2](02-02-thermal-evolution-heat-transport.md), which means it effectively stops cooling at all.

Note the ordering of causes: the viscosity change contributes a factor of 100 and the temperature change only a factor of 2. That is the temperature-dependent-viscosity feedback of [2.2](02-02-thermal-evolution-heat-transport.md) running in its *destabilizing* direction — and once convection ceases, the mantle stops extracting heat from the core, the core stops convecting, and by this lesson's requirement 2 the dynamo dies. This is, in three lines, the history of Mars.

</details>

## Connections

- **Backward:** [2.1](02-01-differentiation-interior-structure.md) supplied the liquid metal core the dynamo needs; [2.2](02-02-thermal-evolution-heat-transport.md) supplied the convection requirement and the thermal history that decides when it fails.
- **Forward:** [2.7](02-07-moon-earth-moon-system.md) reads the Moon's remanent magnetism as evidence for an early lunar dynamo; [3.4](03-04-magnetospheres-solar-wind.md) takes these fields and asks what they do to the solar wind and to atmospheric loss; [5.1](05-01-giant-ice-giant-interiors.md) explains metallic hydrogen and the strange multipolar fields of the ice giants.
- **Sideways:** the induction equation and magnetic Reynolds number are [`plasma-physics`](../../plasma-physics/syllabus.md)'s, and the frozen-flux limit at large $Rm$ is the same idealization used for the solar wind in [plasma-physics 5.3](../../plasma-physics/lessons/05-03-solar-wind-magnetospheres.md). [`geophysics`](../../geophysics/syllabus.md) 3.2 and 5.4 own Earth's own dynamo and core; this lesson owns the comparative question of who has one and why.
