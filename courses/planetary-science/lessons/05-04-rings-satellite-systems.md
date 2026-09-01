# Planetary Science · Lesson 5.4: Rings and satellite systems

> ⏱ ~15 min · Module 5: The outer solar system and small bodies · Builds on: [2.7](02-07-moon-earth-moon-system.md), [5.2](05-02-tides-resonances-orbital-evolution.md) · Unlocks: [5.5](05-05-asteroids-comets-kuiper-belt.md), [6.1](06-01-exoplanet-detection.md)

## Why this matters

Saturn's rings are the most legible dynamical system in the solar system. Their inner and outer edges, their gaps, their waves and their sharp boundaries are all explained by two ideas — the Roche limit and mean-motion resonance — and the agreement between prediction and observation is at the percent level.

That makes rings an unusually good laboratory. **The same physics governs protoplanetary disks ([1.1](01-01-protoplanetary-disk.md)), accretion disks around black holes, and galactic spiral structure**, but only in Saturn's rings can you see individual features and match them to individual perturbers. It is also a live controversy: Cassini's final orbits weighed the rings, and the answer suggests they may be far younger than the planet.

## The idea

**Why rings exist where they do: tides beat self-gravity.** Bring a self-gravitating body close to a planet and the tidal force stretching it eventually exceeds the gravity holding it together. Inside that distance — the **Roche limit** — debris cannot accrete into a moon; outside it, it can.

**This is not a statement about destroying an existing moon**; a small solid body is held together by material strength and survives well inside the limit ([2.7](02-07-moon-earth-moon-system.md) P2, Phobos). It is a statement about *accretion*: inside the limit, colliding particles cannot stick because tidal shear pulls them apart faster than their mutual gravity draws them together.

**And the prediction is sharp.** For Saturn, the fluid Roche limit for icy material is 135,276 km. **The A ring's outer edge is at 136,775 km.** One percent, from a formula with no adjustable parameters.

**Why rings have gaps: resonances.** A ring particle in a mean-motion resonance with an exterior moon receives a kick at the same orbital phase every time ([5.2](05-02-tides-resonances-orbital-evolution.md)), so the perturbations add. Its eccentricity is pumped up, its collisions become violent, and it is cleared out. **The Cassini Division's inner edge is at 117,580 km; the 2:1 resonance with Mimas is at 116,883 km.** Again within a percent.

**Why some edges are razor-sharp: shepherding.** A small moon just outside a ring edge takes angular momentum from ring particles that stray outward, pushing them back in; one just inside does the reverse. **A pair of shepherds confines a ring to a width far narrower than it would naturally spread to** — Saturn's F ring, confined by Prometheus and Pandora, is a few hundred kilometres wide when viscous spreading alone would broaden it in centuries.

**Why rings have spiral waves: resonances again, but constructive.** At a resonance the perturbation excites a spiral density wave that propagates away from the resonance and damps. **Measuring the wavelength gives the ring's local surface density directly**, and measuring how fast it damps gives its viscosity. This is how Cassini weighed the rings.

**And that weighing produced the surprise.** Saturn's rings turn out to have a mass of only about $1.5\times10^{19}$ kg — **less than half of Mimas**, a moon 400 km across. A low mass matters because micrometeorites continuously pollute the rings with dark silicate dust, and the rings are strikingly clean and bright, over 95 percent water ice. **A low-mass, clean ring system is a young one** — estimates run 10 to 100 Myr, against a planet 4.5 Gyr old.

**If true, that is startling: Saturn's rings postdate the dinosaurs.** The claim is contested — the pollution rate is uncertain, and ring dynamics may hide or recycle contaminants — but it has shifted the default assumption from "primordial" to "recent, probably from a disrupted moon or comet."

## The formal version

**The [Roche limit](../reference.md#roche-limit).** For a *fluid* (strengthless) satellite of density $\rho_s$ near a planet of density $\rho_p$ and radius $R_p$:

$$\boxed{\ d_{\text{Roche}} = 2.456\,R_p\left(\frac{\rho_p}{\rho_s}\right)^{1/3}\ }$$

*In words: it depends only on the density ratio, not on the satellite's size.* The rigid-body version, which ignores tidal deformation, has 1.26 in place of 2.456 — **the factor of two between them is why a solid body can survive well inside the fluid limit.**

For Saturn ($R_p = 60{,}268$ km, $\rho_p = 687\ \mathrm{kg\,m^{-3}}$) and an icy satellite ($\rho_s = 900$):

$$d = 2.456\times60{,}268\times\left(\frac{687}{900}\right)^{1/3} = 2.456\times60{,}268\times0.9139 = 135{,}276\ \mathrm{km}.$$

| Ring feature | Radius (km) |
|---|---|
| D ring inner edge | 66,900 |
| B ring outer edge / Cassini Division inner | 117,580 |
| A ring inner edge | 122,170 |
| **Roche limit (icy, fluid)** | **135,276** |
| **A ring outer edge** | **136,775** |
| F ring | 140,180 |
| Mimas | 185,540 |

**Resonance locations.** A ring particle at $a_r$ is in a $p{:}q$ resonance with a moon at $a_m$ when $P_m/P_r = p/q$, so by Kepler's third law

$$a_r = a_m\left(\frac{q}{p}\right)^{2/3}.$$

| Resonance with Mimas | Predicted $a_r$ | Feature |
|---|---|---|
| 2:1 | 116,883 km | **Cassini Division inner edge (117,580)** |
| 3:1 | 89,198 km | a C-ring feature |
| 5:3 | 131,989 km | Encke-region structure |

**Viscous spreading.** A ring, like any accretion disk ([1.1](01-01-protoplanetary-disk.md)), spreads under its own viscosity on a timescale

$$t_\nu \sim \frac{\Delta r^2}{\nu},$$

with $\nu$ set by particle collisions. For Saturn's A ring this is $\sim10^{8}$ yr — **short compared with the age of the solar system**, and one of the arguments that something must be confining the rings, or that they are young, or both.

**Shepherding torque.** A satellite of mass $m_s$ at distance $\Delta a$ from a ring edge exerts a torque

$$T \sim \frac{G^2m_s^2\Sigma a^4}{\Delta a^3\,\Omega^2\,a^3},$$

*In words: shepherding is very strong at close range ($\Delta a^{-3}$) and falls away fast.* Balancing it against viscous spreading gives an equilibrium ring width.

**Spiral density waves.** At a Lindblad resonance the moon launches a trailing spiral wave whose wavelength decreases with distance from the resonance as

$$\lambda(r) = \frac{4\pi^2G\Sigma}{3(m-1)\Omega^2}\frac{a}{(r-r_{\text{res}})},$$

with $m$ the azimuthal wavenumber. **Measuring $\lambda(r)$ from a stellar occultation gives $\Sigma$ directly** — an *in situ* mass measurement of a disk from the outside. Summing over the rings gave Cassini's total ring mass.

**Ring mass and age.**

| Quantity | Value |
|---|---|
| total ring mass | $\sim1.5\times10^{19}$ kg |
| in Mimas masses | ~0.4 |
| composition | $>95\%$ water ice |
| micrometeorite influx | $\sim10^{4}$–$10^{5}$ kg s$^{-1}$ across the rings |
| implied exposure age | **10–100 Myr** |

**Origins proposed for a young ring system:** tidal disruption of a passing comet; tidal stripping of the icy mantle of a Titan-sized moon that spiralled in; or destabilization of a mid-sized moon by a resonance crossing. All are recent-catastrophe models, and none is established.

## Picture

![A radial diagram of Saturn's ring system, with distance from Saturn's centre along the horizontal axis from 60,000 to 250,000 kilometres. Saturn itself is drawn as a coral block ending at 60,268 kilometres, followed by blue bands of varying opacity for the D, C, B, A, F, G and E rings, with the Cassini Division marked as the gap between the B and A rings at 117,580 kilometres. A vertical dashed coral line at 135,276 kilometres marks the Roche limit for a fluid icy satellite, with an arrow pointing inward labelled tides win, no moon can hold together; the A ring's outer edge at 136,775 kilometres lies just outside it. Dots mark the moons Pan and Prometheus embedded near the rings, and Mimas and Enceladus further out. A line beneath connects Mimas at 185,540 kilometres to the position 116,883 kilometres, labelled 2:1 resonance with Mimas giving the Cassini Division. Captions note that the A ring's outer edge sits 1500 kilometres outside the Roche limit, an agreement to one percent from a formula with no free parameters, and that Cassini's gravity measurement puts the ring mass at only about 1.5 times ten to the nineteenth kilograms, less than half of Mimas, implying an age of 10 to 100 million years rather than primordial — which is still contested](assets/05-04-fig1.svg)

Two vertical lines on this diagram were computed from first principles, and both land within one percent of an observed edge.

## Worked examples

**Example 1 (mechanical — where should Saturn's rings end?).** Compute the fluid Roche limit for an icy satellite and compare with the A ring's outer edge; then repeat for a rocky satellite and comment.

*Icy,* $\rho_s = 900\ \mathrm{kg\,m^{-3}}$:

$$\frac{\rho_p}{\rho_s} = \frac{687}{900} = 0.7633, \qquad (0.7633)^{1/3} = 0.9139,$$
$$d = 2.456\times60{,}268\times0.9139 = 135{,}276\ \mathrm{km}.$$

A ring outer edge: 136,775 km. **Difference 1499 km, or 1.1 percent.**

*Rocky,* $\rho_s = 3000\ \mathrm{kg\,m^{-3}}$:

$$\left(\frac{687}{3000}\right)^{1/3} = (0.229)^{1/3} = 0.6117, \qquad d = 2.456\times60{,}268\times0.6117 = 90{,}540\ \mathrm{km}.$$

**A rocky ring would end at 90,500 km — deep inside the B ring.** The fact that Saturn's rings extend to 136,775 km is therefore itself evidence that they are icy, independent of the spectroscopy that confirms it. **The Roche limit is a compositional measurement.**

Two caveats worth attaching. The A ring's edge is not held by the Roche limit alone — it is also maintained by a 7:6 resonance with the co-orbital moons Janus and Epimetheus, so the agreement is partly coincidental in its precision. And the fluid formula assumes a strengthless body; real ring particles are metre-scale and have some cohesion, so the effective limit is a soft boundary rather than a sharp one.

**Example 2 (why you'd care — how old are the rings?).** Micrometeorite influx pollutes the rings at $\dot m \approx 3\times10^{4}\ \mathrm{kg\,s^{-1}}$ over the whole system. If the rings are $1.5\times10^{19}$ kg and are less than 1 percent non-icy contaminant by mass, how long can they have been exposed?

Contaminant mass currently present:

$$M_{\text{cont}} \le 0.01\times1.5\times10^{19} = 1.5\times10^{17}\ \mathrm{kg}.$$

Time to accumulate that much:

$$t = \frac{1.5\times10^{17}}{3\times10^{4}} = 5\times10^{12}\ \mathrm{s} = \frac{5\times10^{12}}{3.156\times10^{7}} = 1.6\times10^{5}\ \mathrm{yr}.$$

**Only 160,000 years** — absurdly short, which tells you the influx figure above is far too high or that most of it does not stay. Using the lower published estimate of $\sim10^{4}\ \mathrm{kg\,s^{-1}}$ *retained*, and allowing the contaminant fraction to be a few percent rather than under one:

$$t = \frac{0.03\times1.5\times10^{19}}{10^{4}} = \frac{4.5\times10^{17}}{10^{4}} = 4.5\times10^{13}\ \mathrm{s} = 1.4\times10^{6}\ \mathrm{yr}.$$

Still very short. Published exposure ages of 10–100 Myr come from more careful treatments that account for what fraction of the impacting mass is retained versus ejected, and for the ballistic redistribution of material within the rings.

**The structure of the argument is what matters, and it is worth being explicit about its weakness.** It is a straightforward exposure-age calculation: divide the accumulated contaminant by the accumulation rate. Its result is inversely proportional to the influx rate, which is uncertain by an order of magnitude and was measured by Cassini's dust detector over a limited sampling. And it assumes contaminants accumulate rather than being removed — but dark material can be ballistically transported to the rings' edges and lost, or buried within particles by regolith overturn, both of which would make the rings look cleaner and hence younger than they are.

**So "the rings are young" is a defensible inference with a real systematic uncertainty, not a measurement.** It is worth holding as the current best guess while being clear that a primordial ring system with efficient cleaning has not been excluded. The independent evidence pointing the same way — the low mass itself, which a primordial ring should not have retained against viscous spreading — is what makes the young-ring picture the working hypothesis.

## Watch out

- **You might think the Roche limit says a moon inside it gets torn apart, but it says debris inside it cannot accrete.** A small body with material strength survives comfortably inside — Phobos, and Saturn's embedded moonlets Pan and Daphnis, are all well inside their fluid limits.
- **You might think a gap means a moon is sitting in it, but most gaps are resonances with moons far outside the rings.** Only a handful (Encke, Keeler) contain an embedded moonlet; the Cassini Division is empty and is cleared by Mimas at 185,540 km.
- **You might think rings are stable structures, but they spread viscously on $10^{8}$ yr** and must be confined by shepherds or resonances. A ring you can see is a ring that something is actively holding together.
- **You might think Saturn's rings are primordial because they look ancient, but Cassini's mass measurement and their cleanliness point to 10–100 Myr.** Treat the young age as the current best inference with a real systematic uncertainty, not as settled.

## One-liner

> Rings sit inside the Roche limit because debris there cannot stick together, and everything else about their structure — edges, gaps, waves — is a resonance with a moon outside.

## Problems

**P1 (🟢)** Jupiter has $R_p = 71{,}492$ km and $\bar\rho = 1326\ \mathrm{kg\,m^{-3}}$. (a) Compute the fluid Roche limit for an icy satellite ($900\ \mathrm{kg\,m^{-3}}$). (b) Do the same for a rocky one ($3000$). (c) Jupiter's main ring extends to about 129,000 km; comment.

**P2 (🟡)** Using $a_r = a_m(q/p)^{2/3}$ with Mimas at $a_m = 185{,}540$ km: (a) Compute the locations of the 3:2, 2:1 and 3:1 resonances. (b) Which of these falls in the rings (inside 136,775 km)? (c) Explain in one sentence why an *exterior* moon clears an *interior* gap rather than the other way round.

**P3 (🔴, optional)** A ring has surface density $\Sigma = 400\ \mathrm{kg\,m^{-2}}$ and spans 122,000 to 137,000 km. (a) Compute its total mass. (b) Compare with Saturn's measured $1.5\times10^{19}$ kg and comment. (c) The rings spread viscously on $t\sim\Delta r^2/\nu$ with $\nu\approx100\ \mathrm{m^2\,s^{-1}}$; compute the spreading time and state what it implies.

<details>
<summary>Solutions</summary>

**P1** (a) $$\left(\frac{1326}{900}\right)^{1/3} = (1.4733)^{1/3} = 1.1377,$$
$$d = 2.456\times71{,}492\times1.1377 = 199{,}760\ \mathrm{km} = 2.79\,R_J.$$

(b) $$\left(\frac{1326}{3000}\right)^{1/3} = (0.442)^{1/3} = 0.7617,$$
$$d = 2.456\times71{,}492\times0.7617 = 133{,}740\ \mathrm{km} = 1.87\,R_J.$$

(c) Jupiter's main ring extends to about 129,000 km, which is **just inside the rocky Roche limit of 133,700 km and far inside the icy one of 199,800 km.**

That is consistent with what is independently known: Jupiter's rings are made of **dust from silicate-rich material**, not ice — they are continuously resupplied by micrometeorite impacts onto the small inner moons Metis, Adrastea, Amalthea and Thebe, which orbit within and just outside the rings. Unlike Saturn's, they are tenuous, dark and dusty rather than bright and icy.

So the Roche-limit comparison correctly identifies the composition once again: a ring ending near the *rocky* limit is a rocky ring. **The same diagnostic, applied to two planets, gives two different and correct answers.**

**P2** (a) $$3{:}2: \quad a_r = 185{,}540\times\left(\frac23\right)^{2/3} = 185{,}540\times0.7631 = 141{,}580\ \mathrm{km}.$$
$$2{:}1: \quad a_r = 185{,}540\times\left(\frac12\right)^{2/3} = 185{,}540\times0.62996 = 116{,}883\ \mathrm{km}.$$
$$3{:}1: \quad a_r = 185{,}540\times\left(\frac13\right)^{2/3} = 185{,}540\times0.48075 = 89{,}198\ \mathrm{km}.$$

(b) The **2:1 at 116,883 km** and the **3:1 at 89,198 km** both fall inside the rings; the 3:2 at 141,580 km lies outside the A ring, in the region of the F ring.

The 2:1 is the Cassini Division (observed inner edge 117,580 km — agreement to 0.6 percent), and the 3:1 corresponds to a known feature in the C ring.

(c) Because a resonance at $a_r = a_m(q/p)^{2/3}$ with $p>q$ puts the ring particle *inside* the moon's orbit, so a moon exterior to the rings has all its low-order resonances located within them — whereas a moon inside the rings would have its resonances outside, where there is nothing to clear.

**P3** (a) $$M = \Sigma\times\pi\left(r_2^2-r_1^2\right) = 400\times\pi\left[(1.37\times10^{8})^2-(1.22\times10^{8})^2\right].$$

$$= 400\times\pi\left[1.877\times10^{16}-1.488\times10^{16}\right] = 400\times\pi\times3.885\times10^{15},$$
$$M = 400\times1.2205\times10^{16} = 4.88\times10^{18}\ \mathrm{kg}.$$

(b) About $4.9\times10^{18}$ kg for the A ring alone, against $1.5\times10^{19}$ kg for the whole system — so the A ring would be roughly a third of the total, with the much more massive B ring making up most of the rest. **The numbers are mutually consistent**, and both are small: the entire ring system is less than half the mass of Mimas, a moon you could drive across in a day.

(c) $$\Delta r = 1.5\times10^{7}\ \mathrm{m}, \qquad t = \frac{(1.5\times10^{7})^2}{100} = \frac{2.25\times10^{14}}{100} = 2.25\times10^{12}\ \mathrm{s}.$$

$$t = \frac{2.25\times10^{12}}{3.156\times10^{7}} = 7.1\times10^{4}\ \mathrm{yr}.$$

**Seventy thousand years** — extraordinarily short. Taken at face value this says the A ring should have spread beyond recognition almost immediately, which it plainly has not.

The resolution is that the assumed $\nu = 100\ \mathrm{m^2\,s^{-1}}$ is far too large; ring viscosity measured from density-wave damping is more like $10^{-2}$ to $1\ \mathrm{m^2\,s^{-1}}$, giving spreading times of $10^{7}$–$10^{9}$ yr. But the qualitative conclusion survives and is important: **the spreading time is short compared with the age of the solar system**, so the rings are not a static structure. Either they are actively confined at their edges by shepherd moons and resonances — which is observed — or they are young, or both.

This is the second independent argument for youth, and it is worth noting that it is dynamical rather than compositional, so it does not share the systematic uncertainties of the pollution argument in Example 2. **Two independent lines pointing the same way is what moved the field's default assumption.**

</details>

## Flashback

**From Lesson 5.2 (Tides, resonances and orbital evolution):** A moon of radius 400 km orbits a planet of mass $8\times10^{25}$ kg at $a = 3.0\times10^{8}$ m with $e = 0.006$ and $k_2/Q = 0.01$. (a) Compute $n$. (b) Compute the tidal heating rate. (c) Compute the heating per unit surface area, taking the moon's surface as $4\pi R^2$, and compare with Europa's $\sim0.05\ \mathrm{W\,m^{-2}}$.

<details>
<summary>Solution</summary>

(a) $$n = \sqrt{\frac{GM_p}{a^3}} = \sqrt{\frac{6.674\times10^{-11}\times8\times10^{25}}{(3.0\times10^{8})^3}} = \sqrt{\frac{5.339\times10^{15}}{2.7\times10^{25}}} = \sqrt{1.977\times10^{-10}}.$$

$$n = 1.406\times10^{-5}\ \mathrm{s^{-1}}, \qquad P = \frac{2\pi}{n} = 4.468\times10^{5}\ \mathrm{s} = 5.17\ \mathrm{d}.$$

(b) $$\dot E = \frac{21}{2}\frac{k_2}{Q}\frac{GM_p^2R_s^5\,n\,e^2}{a^6}.$$

$$GM_p^2 = 6.674\times10^{-11}\times(8\times10^{25})^2 = 6.674\times10^{-11}\times6.4\times10^{51} = 4.271\times10^{41},$$
$$R_s^5 = (4.0\times10^{5})^5 = 1.024\times10^{28}, \qquad a^6 = (3.0\times10^{8})^6 = 7.29\times10^{50},$$
$$n\,e^2 = 1.406\times10^{-5}\times3.6\times10^{-5} = 5.062\times10^{-10}.$$

$$\dot E = 10.5\times0.01\times\frac{4.271\times10^{41}\times1.024\times10^{28}\times5.062\times10^{-10}}{7.29\times10^{50}}.$$

Numerator: $4.271\times10^{41}\times1.024\times10^{28} = 4.374\times10^{69}$; $\times5.062\times10^{-10} = 2.214\times10^{60}$.

$$\dot E = 0.105\times\frac{2.214\times10^{60}}{7.29\times10^{50}} = 0.105\times3.037\times10^{9} = 3.19\times10^{8}\ \mathrm{W}.$$

(c) $$4\pi R^2 = 4\pi(4.0\times10^{5})^2 = 2.011\times10^{12}\ \mathrm{m^2},$$
$$q = \frac{3.19\times10^{8}}{2.011\times10^{12}} = 1.59\times10^{-4}\ \mathrm{W\,m^{-2}} = 0.16\ \mathrm{mW\,m^{-2}}.$$

Against Europa's roughly $50\ \mathrm{mW\,m^{-2}}$, this moon is heated **300 times more weakly.** Using the shell-thickness relation of [5.3](05-03-ocean-worlds.md), $d = 563/q$, such a flux would support an ice shell several thousand kilometres thick — far more than the moon's entire radius. **This body has no ocean and is frozen through**, which is the fate of any moon not held in a resonance with a substantial forced eccentricity.

</details>

## Connections

- **Backward:** [5.2](05-02-tides-resonances-orbital-evolution.md) supplied the mean-motion resonances that carve the gaps and the tidal migration that builds them; [2.7](02-07-moon-earth-moon-system.md) introduced the Roche limit for the Earth–Moon system.
- **Forward:** [5.5](05-05-asteroids-comets-kuiper-belt.md) applies the same resonance mathematics to the Kirkwood gaps in the asteroid belt — the identical physics on a scale a thousand times larger; [6.1](06-01-exoplanet-detection.md) uses stellar occultations, the technique that measures ring structure, to find planets.
- **Sideways:** viscous spreading and angular-momentum transport in a ring are the same disk physics as [1.1](01-01-protoplanetary-disk.md)'s protoplanetary disk and as accretion disks in [`astrophysics`](../../astrophysics/syllabus.md); spiral density waves are the same mechanism proposed for galactic spiral arms. The resonance dynamics is [`orbital-mechanics`](../../orbital-mechanics/syllabus.md)'s restricted three-body problem, extended past where that course stops.
