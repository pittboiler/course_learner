# Planetary Science · Lesson 5.5: Asteroids, comets and the Kuiper belt

> ⏱ ~15 min · Module 5: The outer solar system and small bodies · Builds on: [1.3](01-03-accretion-dust-to-planetesimals.md), [5.3](05-03-ocean-worlds.md), [5.4](05-04-rings-satellite-systems.md) · Unlocks: [6.2](06-02-demographics-selection-effects.md)

## Why this matters

The small bodies are the leftovers — the planetesimals of [1.3](01-03-accretion-dust-to-planetesimals.md) that never got swept up. That makes them the least altered material available, and it is why meteorites, which are fragments of them, date the solar system ([1.5](01-05-meteorites-isotopic-clocks.md)) and record where their parent bodies formed ([1.6](01-06-cosmochemistry-volatile-delivery.md)).

They are also a record of the solar system's dynamical history, written in a form that is unusually easy to read. **The asteroid belt's structure is not a smooth distribution with random gaps — it has sharp gaps at exactly computable places**, and the same resonance mathematics that carved Saturn's Cassini Division carves them.

And there is a practical reason: some of them cross Earth's orbit. Understanding how bodies get from the main belt to the near-Earth population is the physics behind impact-hazard assessment, and the answer turns out to involve a force so weak it was dismissed for a century.

## The idea

**The asteroid belt is depleted, not crowded.** Its total mass is about $4\%$ of the Moon's — roughly $2.4\times10^{21}$ kg — spread over a region 1.5 AU wide. Models of planetesimal accretion say there should have been hundreds of times more. **Something removed 99.9 percent of it**, and the candidates are Jupiter's resonances sweeping through during migration ([1.4](01-04-giant-planets-migration.md)) and the belt having formed depleted in the first place.

**The Kirkwood gaps are the clearest fossil.** Plot the number of asteroids against semi-major axis and there are sharp, deep gaps — at 2.50, 2.82, 2.96 and 3.28 AU. **Each is at a mean-motion resonance with Jupiter**: 3:1, 5:2, 7:3 and 2:1. The mechanism is exactly [5.4](05-04-rings-satellite-systems.md)'s: repeated kicks at the same orbital phase pump the eccentricity until the body crosses a planet's orbit and is scattered or destroyed.

**The gaps empty in a few million years**, which raises an obvious question: after 4.5 billion years, why is anything still arriving in them? Something must be *delivering* bodies into the resonances continuously.

**And what does it is the Yarkovsky effect, which is absurdly weak and completely decisive.** A rotating asteroid absorbs sunlight on its dayside and re-radiates it — but with a thermal lag, so the hottest point is on the afternoon side, not at noon. Photons carry momentum, so the asymmetric re-radiation gives a tiny net thrust. **For a kilometre-sized body it changes the semi-major axis by about $10^{-4}$ AU per million year** — a drift of a few metres a year.

**Over hundreds of millions of years that is enough to walk an asteroid into a resonance, where the resonance takes over and throws it out of the belt.** Yarkovsky is the conveyor belt and the resonances are the exit. This is now the accepted explanation for the near-Earth population, and it was confirmed directly: the drift of asteroid Bennu has been measured by radar over decades and matches the prediction.

**The related YORP effect changes spin instead of orbit**, and it explains why small asteroids have a distribution of spin rates far from random, why so many are top-shaped with equatorial ridges, and why binary asteroids are common — spin one up past its rotational breakup limit and it sheds material.

**Comets come from two reservoirs, distinguished dynamically rather than by appearance.** Short-period Jupiter-family comets come from the scattered disk beyond Neptune, on low-inclination orbits. Long-period comets come from the **Oort cloud**, a roughly spherical shell at $10^{4}$–$10^{5}$ AU, and arrive from all directions. **The Oort cloud is not primordial in place** — bodies formed among the giant planets and were flung out there, where passing stars and the galactic tide circularized and randomized their orbits.

## The formal version

**Resonance locations.** A belt object at $a$ is in a $p{:}q$ mean-motion resonance with Jupiter ($a_J = 5.2028$ AU) when $P_J/P = p/q$, so

$$a = a_J\left(\frac{q}{p}\right)^{2/3}.$$

| Resonance | Predicted $a$ (AU) | Observed gap |
|---|---|---|
| 3:1 | 2.501 | 2.50 |
| 5:2 | 2.825 | 2.82 |
| 7:3 | 2.957 | 2.96 |
| 2:1 | 3.278 | 3.27 |

**Four predictions, four gaps, no free parameters.** The 3:1 gap is the source of most ordinary chondrite meteorites.

**Not every resonance empties, and the exceptions are informative.** The 3:2 resonance at $a = 3.972$ AU is *populated* — the Hilda group — and the 1:1 is populated by the Trojans at Jupiter's L4 and L5 points. **A resonance protects when the resonant argument librates about a stable configuration and destabilizes when it does not**, and which happens depends on the resonance's order and on the secular architecture.

**Belt populations.**

| Group | $a$ range (AU) | Note |
|---|---|---|
| Hungarias | 1.78–2.00 | inside the 4:1 |
| main belt inner | 2.06–2.50 | dominated by S-types (dry) |
| main belt middle | 2.50–2.82 | — |
| main belt outer | 2.82–3.28 | dominated by C-types (hydrated) |
| Cybeles | 3.3–3.5 | — |
| Hildas | ~3.97 | **3:2 resonance, stable** |
| Trojans | 5.20 | **1:1, at L4 and L5** |

**The S-to-C compositional gradient across the belt** is the surviving imprint of the NC/CC dichotomy of [1.6](01-06-cosmochemistry-volatile-delivery.md) and of the frost line of [1.2](01-02-condensation-frost-line.md), partially scrambled by migration.

**The Yarkovsky effect.** The diurnal component, for a body of radius $R$, density $\rho$, at distance $a$ from the Sun:

$$\frac{da}{dt} \propto \frac{\Phi}{\rho R}\,f(\Theta), \qquad \Phi = \frac{\pi R^2 F}{mc},$$

with $\Theta$ the thermal parameter (a function of thermal inertia, spin rate and size). *In words: the drift scales as $1/(\rho R)$ — small bodies drift fastest, and above a few tens of kilometres the effect is negligible.*

| $R$ | $|da/dt|$ |
|---|---|
| 0.1 km | $\sim10^{-3}$ AU Myr$^{-1}$ |
| 1 km | $\sim10^{-4}$ AU Myr$^{-1}$ |
| 10 km | $\sim10^{-5}$ AU Myr$^{-1}$ |
| 100 km | negligible |

**The sign depends on the spin direction**: prograde rotators drift outward, retrograde inward. This produces an observable signature — the two sides of an asteroid family, produced by a single collisional breakup, spread apart in $a$ with a size dependence, and **measuring that spread dates the family.**

**Comet reservoirs, classified by the Tisserand parameter** with respect to Jupiter:

$$T_J = \frac{a_J}{a} + 2\sqrt{\frac{a}{a_J}\left(1-e^2\right)}\cos i,$$

which is approximately conserved under Jupiter's perturbations.

| Class | $T_J$ | Source | Inclinations |
|---|---|---|---|
| Jupiter-family | 2–3 | scattered disk / Kuiper belt | low, $<30°$ |
| Halley-type | $<2$ | Oort cloud | all |
| Long-period | $<2$ | Oort cloud | **isotropic** |

**The isotropy of long-period comet orbits is the entire evidence for the Oort cloud's spherical shape**, and it is a purely statistical argument — nobody has ever observed an Oort cloud object in place.

**The trans-Neptunian populations.**

| Population | $a$ | Note |
|---|---|---|
| classical Kuiper belt | 42–48 AU | dynamically cold, low $e$ and $i$ |
| resonant (plutinos) | 39.4 AU | **3:2 with Neptune** — Pluto is one |
| scattered disk | $>50$ AU, high $e$ | source of Jupiter-family comets |
| detached | $>50$ AU, perihelion $>40$ | Sedna; origin debated |
| Oort cloud | $10^{4}$–$10^{5}$ AU | inferred, never directly seen |

**Pluto is in a 3:2 resonance with Neptune**, which is why it can cross Neptune's orbit and never come close — the same protective mechanism as the Hildas.

**Impact hazard.** The cumulative number of near-Earth objects larger than diameter $D$ goes roughly as

$$N(>D)\propto D^{-1.8},$$

and the mean interval between Earth impacts:

| $D$ | Energy | Mean interval |
|---|---|---|
| 10 m | 10s of kt | ~decade |
| 50 m | ~10 Mt | ~1000 yr |
| 1 km | $10^{5}$ Mt | ~500,000 yr |
| 10 km | $10^{8}$ Mt | ~100 Myr |

## Picture

![A histogram of the relative number of asteroids against semi-major axis in AU, from 2.0 to 3.6. The distribution rises from a low value near 2.1, peaks broadly around 2.7, and falls away past 3.3, but is interrupted by four sharp deep gaps. Vertical dashed coral lines mark the predicted locations of mean-motion resonances with Jupiter — the 3:1 at 2.50 AU, the 5:2 at 2.82, the 7:3 at 2.96 and the 2:1 at 3.28 — and each falls exactly on a gap. A note records that these were predicted from the formula a equals Jupiter's semi-major axis times q over p to the two-thirds power, with no reference to the data. Captions explain that a body in a Kirkwood gap receives a kick from Jupiter at the same orbital phase every time, so its eccentricity grows until it crosses a planet's orbit and is scattered or destroyed, that emptying a gap takes a few million years which is also how the near-Earth population is resupplied, and that what delivers bodies into the gaps is the Yarkovsky effect, a thermal recoil of about ten to the minus four AU per million years](assets/05-05-fig1.svg)

Four vertical lines computed from Kepler's third law and four small integers, and every one lands in a gap.

## Worked examples

**Example 1 (mechanical — locating the Kirkwood gaps).** With $a_J = 5.2028$ AU, compute the 3:1, 5:2, 7:3 and 2:1 resonance locations and compare with the observed gaps.

$$a = 5.2028\left(\frac{q}{p}\right)^{2/3}.$$

$$3{:}1: \quad \left(\tfrac13\right)^{2/3} = 0.48075, \quad a = 5.2028\times0.48075 = 2.501\ \mathrm{AU},$$
$$5{:}2: \quad \left(\tfrac25\right)^{2/3} = 0.54288, \quad a = 2.825\ \mathrm{AU},$$
$$7{:}3: \quad \left(\tfrac37\right)^{2/3} = 0.56833, \quad a = 2.957\ \mathrm{AU},$$
$$2{:}1: \quad \left(\tfrac12\right)^{2/3} = 0.62996, \quad a = 3.278\ \mathrm{AU}.$$

Observed gap centres: 2.50, 2.82, 2.96, 3.27 AU. **Agreement to better than 0.5 percent in every case.**

Now compare with the Hildas at 3.972 AU, the 3:2 resonance:

$$\left(\tfrac23\right)^{2/3} = 0.76314, \quad a = 5.2028\times0.76314 = 3.971\ \mathrm{AU}.$$

**Also exact — but this resonance is a *concentration*, not a gap.** The difference is protective libration: in the 3:2, the resonant argument librates so that the asteroid's conjunctions with Jupiter always occur near its own aphelion, keeping it far from Jupiter and stabilizing the orbit. In the 3:1 and 2:1 the argument circulates, secular resonances overlap, and the eccentricity grows without bound.

**So a resonance is not intrinsically destabilizing** — whether it clears or protects depends on the phase geometry, and getting that right requires the full perturbation theory rather than the location formula alone.

**Example 2 (why you'd care — where do the meteorites come from?).** A 1 km asteroid drifts by Yarkovsky at $10^{-4}$ AU per Myr. Starting 0.05 AU from the 3:1 resonance, how long until it reaches it, and what happens then?

$$t = \frac{0.05\ \mathrm{AU}}{10^{-4}\ \mathrm{AU\,Myr^{-1}}} = 500\ \mathrm{Myr}.$$

Once in the resonance, the eccentricity is pumped on a timescale of about 1 Myr until the perihelion drops below 1 AU. **The body becomes an Earth-crosser in roughly a million years**, and its subsequent lifetime is a few million more before it hits a planet, falls into the Sun, or is ejected.

Two things follow, and they are the reason this calculation matters.

**First, the near-Earth population is a steady state, not a relic.** Its members have dynamical lifetimes of only a few Myr, so the roughly 30,000 known NEOs cannot be primordial — they must be continuously resupplied. Yarkovsky delivery from the main belt supplies them at the required rate, and this closes the budget.

**Second, it explains the meteorite record.** Ordinary chondrites dominate meteorite falls because the 3:1 resonance at 2.50 AU sits at the inner edge of the belt, in the S-type region, and delivers material efficiently to Earth-crossing orbits. The *cosmic-ray exposure ages* of meteorites — how long they were exposed to cosmic rays as small bodies in space, before landing — cluster at 10–50 Myr for stony meteorites, exactly the transit time this mechanism predicts.

**A force of order a newton, acting on a billion tonnes, sets what falls out of the sky.** That is worth pausing on: Yarkovsky was proposed in 1901, ignored for most of a century as too small to matter, and is now central to both meteoritics and planetary defence — because a tiny acceleration integrated over $10^{8}$ years is not tiny.

## Watch out

- **You might think the Kirkwood gaps are empty space, but they are empty *orbits*.** An asteroid can be physically located at 2.50 AU at any moment; what it cannot do is have a semi-major axis of 2.50 AU for long.
- **You might think every resonance clears, but the 3:2 (Hildas), 1:1 (Trojans) and Neptune's 3:2 (plutinos, including Pluto) are all populated.** Resonances protect as often as they destroy, and which one happens depends on the libration geometry.
- **You might think the belt is dense, but its total mass is 4 percent of the Moon's** and spacecraft have crossed it a dozen times without difficulty. The mean separation between kilometre-sized bodies is of order a million kilometres.
- **You might think Yarkovsky is negligible because it is tiny, but it is the dominant evolutionary process for sub-20 km bodies over $10^{8}$ years.** Any argument that dismisses a small force must state a timescale.
- **You might think the Oort cloud has been observed, but its existence is inferred entirely from the isotropic inclination distribution of long-period comets.** No object has ever been detected in place there.

## One-liner

> The gaps in the asteroid belt are orbits Jupiter has made untenable, and what feeds bodies into them — and eventually onto Earth — is the recoil of afternoon sunlight.

## Problems

**P1 (🟢)** Neptune's semi-major axis is 30.07 AU. (a) Compute the location of the 3:2 resonance with Neptune. (b) Compare with Pluto's 39.48 AU. (c) Compute the 2:1 resonance location.

**P2 (🟡)** A 2 km asteroid has $|da/dt| = 5\times10^{-5}$ AU Myr$^{-1}$. (a) How long to drift 0.08 AU into a resonance? (b) A 0.2 km fragment of the same body drifts ten times faster; repeat. (c) A collisional family formed 200 Myr ago; compute the spread in $a$ for 2 km and 0.2 km members and explain how this dates the family.

**P3 (🔴, optional)** Use $N(>D)\propto D^{-1.8}$ for near-Earth objects, normalized so that there are about 1000 objects larger than 1 km. (a) Estimate the number larger than 140 m (the congressionally mandated survey threshold). (b) Estimate the number larger than 10 km. (c) The mean impact interval for a 1 km object is about 500,000 yr; estimate it for a 140 m object and comment on the practical implication.

<details>
<summary>Solutions</summary>

**P1** (a) $$a = 30.07\times\left(\frac23\right)^{2/3} = 30.07\times0.76314 = 22.95\ \mathrm{AU}.$$

Hmm — that is *interior* to Neptune, and Pluto is exterior. The formula $a = a_m(q/p)^{2/3}$ as written gives the location of a body whose period is *shorter* than the perturber's. For a body with a *longer* period — Pluto orbits more slowly than Neptune — invert the ratio:

$$a = 30.07\times\left(\frac32\right)^{2/3} = 30.07\times1.31037 = 39.40\ \mathrm{AU}.$$

(b) Pluto's is 39.48 AU. **Agreement to 0.2 percent.**

Note the trap the first line walked into: **the ratio must be assigned so that the more distant body has the longer period.** Pluto completes 2 orbits for Neptune's 3, so $P_{\text{Pluto}}/P_{\text{Neptune}} = 3/2$ and $a\propto P^{2/3}$ gives the factor 1.310, not 0.763. Checking the direction against physical sense — is the answer inside or outside the perturber? — catches this immediately.

(c) $$a = 30.07\times2^{2/3} = 30.07\times1.5874 = 47.73\ \mathrm{AU}.$$

This is the twotino population, and it also marks the outer edge of the classical Kuiper belt — the "Kuiper cliff" at about 48 AU, beyond which the object count drops sharply.

**P2** (a) $$t = \frac{0.08}{5\times10^{-5}} = 1600\ \mathrm{Myr} = 1.6\ \mathrm{Gyr}.$$

(b) Ten times faster: $$t = 160\ \mathrm{Myr}.$$

(c) In 200 Myr:

$$\text{2 km members: } \Delta a = 5\times10^{-5}\times200 = 0.010\ \mathrm{AU},$$
$$\text{0.2 km members: } \Delta a = 5\times10^{-4}\times200 = 0.100\ \mathrm{AU}.$$

Because prograde rotators drift outward and retrograde ones inward, the family spreads symmetrically about its origin, so the *full width* is twice these values.

**How this dates the family** is the elegant part. A collisional family starts as a tight cluster in $a$ (all fragments share the parent's orbit, differing only by the modest ejection velocities). Yarkovsky then spreads it, and because $|da/dt|\propto1/D$, **small members spread further than large ones by exactly the ratio of their sizes.** Plotting $a$ against $1/D$ for family members produces a characteristic "V" whose two arms diverge from the family centre, and **the slope of the V is the product of the drift rate and the age.** Since the drift rate can be computed from each body's size, albedo and thermal inertia, the age follows.

This method has dated dozens of asteroid families, giving ages from a few Myr (Karin, 5.8 Myr) to over a Gyr. It is entirely independent of any radiometric or cratering chronology, which makes it a valuable cross-check — and the ages it gives for families whose fragments have also been sampled as meteorites agree with those meteorites' cosmic-ray exposure ages.

**P3** (a) $$N(>D) = 1000\left(\frac{D}{1\ \mathrm{km}}\right)^{-1.8}, \qquad D = 0.14\ \mathrm{km}:$$
$$N = 1000\times(0.14)^{-1.8} = 1000\times e^{1.8\times1.9661} = 1000\times e^{3.5390} = 1000\times34.4 = 3.4\times10^{4}.$$

About 34,000 objects larger than 140 m. (The current best estimate is roughly 25,000, and surveys have found about 40 percent of them.)

(b) $$N = 1000\times(10)^{-1.8} = 1000\times1.585\times10^{-2} = 15.8.$$

About 16 objects larger than 10 km — and in fact all of the largest NEOs are known, since big objects are bright and easy to find. **The completeness of a survey is a strong function of size**, which is precisely the selection effect [6.2](06-02-demographics-selection-effects.md) formalizes for exoplanets.

(c) The impact rate scales with the population, so the mean interval scales inversely:

$$t_{140\ \mathrm{m}} = 500{,}000\ \mathrm{yr}\times\frac{1000}{3.4\times10^{4}} = 500{,}000\times0.0294 = 1.5\times10^{4}\ \mathrm{yr}.$$

About **15,000 years** between 140 m impacts.

The practical implication is the reason 140 m is the survey threshold. An object that size delivers of order $10^{2}$ megatons — enough to devastate a region or, in an ocean, generate a serious tsunami, but not a global catastrophe. **At a 15,000-year mean interval the per-century probability is under one percent**, which is small but not negligible, and unlike most natural hazards it is one that can be eliminated in advance: the population is finite, the objects are findable, and an orbit once determined is predictable for centuries.

That is what distinguishes impact hazard from every other natural hazard, and it is why survey completeness — rather than deflection technology — has been the priority. **The DART mission demonstrated in 2022 that a kinetic impactor can change an asteroid's orbital period measurably**, so the deflection half is no longer hypothetical either; finding the objects remains the binding constraint.

</details>

## Flashback

**From Lesson 5.3 (Ocean worlds):** An icy moon has a surface at 95 K, an ocean at 268 K, and ice conductivity $k(T) = 567/T\ \mathrm{W\,m^{-1}\,K^{-1}}$. (a) Compute $\int k\,dT$ across the shell. (b) Its tidal heat flux is $15\ \mathrm{mW\,m^{-2}}$; compute the shell thickness. (c) Its radius is 600 km; compute the fraction of its radius occupied by the ice shell and comment on whether a lander could plausibly reach the ocean.

<details>
<summary>Solution</summary>

(a) $$\int_{95}^{268}\frac{567}{T}\,dT = 567\ln\frac{268}{95} = 567\ln 2.821 = 567\times1.0372 = 588\ \mathrm{W\,m^{-1}}.$$

(b) $$d = \frac{588}{0.015} = 3.92\times10^{4}\ \mathrm{m} = 39\ \mathrm{km}.$$

(c) $$\frac{39}{600} = 0.065,$$

so the ice shell is about 6.5 percent of the radius.

**A lander could not plausibly drill through it.** The deepest borehole ever made on Earth is 12 km, through rock, with a full industrial apparatus; 39 km of ice at 95 K — which is as strong as granite at that temperature — is far beyond anything deliverable to an outer-solar-system moon.

The realistic approaches are the ones that avoid the problem. **Sample material the moon brings up itself**: fly through a plume, as Cassini did at Enceladus ([5.3](05-03-ocean-worlds.md)), or land on fresh chaos terrain where ocean material may have been emplaced at the surface. Or **sound the shell rather than penetrate it**: ice-penetrating radar can map the ice–water interface from orbit, which is Europa Clipper's approach. A thinner shell would change this calculus considerably — at $q = 50\ \mathrm{mW\,m^{-2}}$ the shell would be 12 km, still formidable but at the edge of conceivable — which is why constraining the heat flux is a first-order mission objective rather than a detail.

</details>

## Connections

- **Backward:** [1.3](01-03-accretion-dust-to-planetesimals.md) made these bodies and explained why the belt's size distribution turns over near 100 km; [1.6](01-06-cosmochemistry-volatile-delivery.md) established the NC/CC dichotomy whose imprint is the belt's S-to-C gradient; [5.4](05-04-rings-satellite-systems.md) supplied the resonance-clearing mechanism at a thousand times smaller scale.
- **Forward:** [6.2](06-02-demographics-selection-effects.md) generalizes this lesson's survey-completeness problem into the central methodological issue of exoplanet demographics.
- **Sideways:** [`geology`](../../geology/syllabus.md) owns terrestrial impact structures as field objects and [2.4](02-04-impact-cratering-chronology.md) owns cratering as a dating method; this lesson owns the impactor population itself. The Tisserand parameter is a Jacobi-integral argument from the restricted three-body problem in [`orbital-mechanics`](../../orbital-mechanics/syllabus.md), and the chaotic eccentricity growth in a resonance is a resonance-overlap instability from [`dynamical-systems`](../../dynamical-systems/syllabus.md).
