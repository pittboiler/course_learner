# Planetary Science — Syllabus

> Earth & Space · Tier 2 · ~33 lessons · Prereqs: [mechanics-refresher](../mechanics-refresher/syllabus.md), [thermodynamics-physics](../thermodynamics-physics/syllabus.md) · Roadmap id: `planetary-science`

## Goal

Turn "there are eight planets" into a working physicist's model of how worlds are built, heated, resurfaced, wrapped in air, and measured from a hundred million kilometres away. You will reason quantitatively about **formation** (a collapsing disk, a frost line, accreting planetesimals, isotopic clocks and provenance), **interiors** (differentiation, thermal evolution, dynamos, and the moment-of-inertia argument that detects a core without landing on anything), **surfaces** (impact chronology, volcanism, tectonics, and the Moon as the calibration standard for all of it), **measurement** (mass, gravity, tidal response, spectroscopy and magnetospheres — how anything at all is known about a body nobody has drilled), **atmospheres** (structure, circulation, the greenhouse, photochemistry and escape), and the **outer solar system** (giant interiors, tidal heating, ocean worlds, rings and small bodies). It closes on exoplanets: detection, debiased demographics, atmospheric characterization, and a hard look at what the habitable zone does and does not tell you.

Deliberately skipped: spacecraft-mission and instrument engineering, orbital mechanics as a design discipline ([`orbital-mechanics`](../orbital-mechanics/syllabus.md) owns it), stellar astrophysics ([`astrophysics`](../astrophysics/syllabus.md)), Earth's own geophysics and climate ([`geophysics`](../geophysics/syllabus.md), [`climate-science`](../climate-science/syllabus.md)), and astrobiology beyond the habitable-zone framework and its critique.

## Scope discipline

This course sits alongside seven built courses that overlap it, and is cited by name from
[`geology`](../geology/syllabus.md), [`geophysics`](../geophysics/syllabus.md) and
[`climate-science`](../climate-science/syllabus.md). Each topic has **one owner**; a ceded
topic is used freely here and cited to its owner rather than re-derived. See the reference
card's "Assumed, not taught here" table.

| Topic | Owner | This course's role |
|---|---|---|
| Two-body orbits, orbital elements, transfers, patched conics, gravity assists, Lagrange points | [`orbital-mechanics`](../orbital-mechanics/syllabus.md) | 5.2 owns **tidal evolution and mean-motion resonances**, which that course does not treat |
| Stellar structure, the main sequence, star formation, the initial mass function | [astrophysics 2.5](../astrophysics/lessons/02-05-main-sequence.md), [3.1](../astrophysics/lessons/03-01-star-formation-jeans.md) | 1.1 inherits the young Sun; 6.5 uses main-sequence brightening |
| Blackbody radiation, radiative transfer, opacity, scattering | [astrophysics 1.2](../astrophysics/lessons/01-02-blackbody-spectra-hr-diagram.md), [1.3](../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md), [atmospheric-science 3.1](../atmospheric-science/lessons/03-01-solar-terrestrial-radiation.md), [3.3](../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md) | 3.3 and 4.2 apply them to planetary surfaces and atmospheres |
| Hydrostatic balance, lapse rates, potential temperature, Coriolis, geostrophy, the Hadley circulation | [atmospheric-science 1.2](../atmospheric-science/lessons/01-02-hydrostatic-equation-barometric-law.md)–[1.4](../atmospheric-science/lessons/01-04-potential-temperature.md), [4.2](../atmospheric-science/lessons/04-02-coriolis-effect.md)–[4.4](../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) | 4.1 and 4.4 own the **comparative** versions, where rotation rate, gravity and composition differ by orders of magnitude |
| Earth's greenhouse, radiative forcing, feedbacks, climate sensitivity, the carbon cycle | [`climate-science`](../climate-science/syllabus.md) | 4.2 owns the comparative greenhouse and the runaway; Earth's own climate is cited, not re-derived |
| Solar wind, magnetopause, reconnection, particle drifts and mirrors | [plasma-physics 5.3](../plasma-physics/lessons/05-03-solar-wind-magnetospheres.md), [5.4](../plasma-physics/lessons/05-04-magnetic-reconnection.md) | 3.4 owns the **comparative planetary response**: intrinsic versus induced magnetospheres, sputtering, aurorae as diagnostics |
| Seismology, gravity reductions, isostasy, flexure, space geodesy, mantle convection, the dynamo mechanism, the deep Earth | [`geophysics`](../geophysics/syllabus.md) | that course is Earth-only; 2.2, 2.3, 3.1 and 3.2 own the comparative versions and the remote-measurement techniques |
| Rocks, minerals, terrestrial impact structures, stratigraphy and relative dating as field practice | [`geology`](../geology/syllabus.md) | 2.4 and 2.6 own cratering and surface reading as **planetary** methods, applied where no one can visit |
| The radioactive decay law and decay chains | [intro-nuclear-engineering 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) | 1.5 owns meteorite dating practice — CAIs, isochrons, short-lived radionuclides |
| Thermodynamic potentials, adiabats, the Clausius–Clapeyron relation | [`thermodynamics-physics`](../thermodynamics-physics/syllabus.md) | assumed throughout Modules 4 and 5 |
| Phase diagrams, high-pressure polymorphs, crystal structures | [materials-science 3.1](../materials-science/lessons/03-01-phase-diagrams-lever-rule.md), [`geophysics`](../geophysics/syllabus.md) 5.2 | 5.1 owns **metallic hydrogen and superionic ice** |
| Origin of life, metabolism, the biology behind biosignatures | [`evolution-ecology`](../evolution-ecology/syllabus.md), [`biochemistry`](../biochemistry/syllabus.md) | 6.5 owns the habitable-zone framework and its limits; the biology is cited |
| Selection effects, debiasing, likelihood and prior reasoning | [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md), [`statistical-learning`](../statistical-learning/syllabus.md) | 6.2 owns the transit-probability correction and occurrence-rate inference |
| **Planet formation, planetary interiors and surfaces, remote measurement of planets, planetary atmospheres, the outer solar system, small bodies, exoplanets and habitability** | **this course** | — |

## Dangerous Checklist

When you finish, you can:

- [ ] Explain the nebular hypothesis and why a collapsing cloud flattens into a disk
- [ ] Locate a frost line from an equilibrium-temperature profile and say why gas giants form beyond it
- [ ] Trace accretion from dust grains to planetesimals to protoplanets, and name where each step stalls
- [ ] Explain core accretion, disk migration, and how resonant chains constrain the early solar system's rearrangement
- [ ] Date the solar system from a meteorite isochron and explain what a radiometric clock actually measures
- [ ] Use isotopic anomalies and D/H ratios to identify where a planet's material — and its water — came from
- [ ] Predict a planet's layered interior from differentiation and hydrostatic equilibrium
- [ ] Estimate whether a body is still geologically hot by comparing conductive, convective and radiogenic timescales
- [ ] State the magnetic-dynamo requirements and explain why some planets have fields and others do not
- [ ] Date a planetary surface from its crater density and say why the constant-flux assumption fails
- [ ] Read a planet's volcanic and tectonic style from its interior state, and explain the mobile-lid/stagnant-lid divide
- [ ] Infer a geologic history from surface features by superposition and relative dating
- [ ] Reconstruct the Moon's origin from the Earth–Moon angular-momentum budget, and explain why lunar samples calibrate the chronology of every other surface
- [ ] Weigh a planet and detect its core from mean density and the moment-of-inertia factor alone
- [ ] Use gravity, topography and the tidal Love number $k_2$ to detect a subsurface ocean or measure a lithosphere's strength
- [ ] Read surface composition off a reflectance or thermal-emission spectrum, and say what the method cannot see
- [ ] Distinguish an intrinsic from an induced magnetosphere, and explain how each controls atmospheric loss
- [ ] Build an atmosphere's temperature profile and compute an equilibrium versus surface temperature
- [ ] Predict a planet's circulation regime from its rotation rate, and explain superrotation and banded jets
- [ ] Explain how photochemistry makes hazes, and how isotopic fractionation records an atmosphere's lost history
- [ ] Compare atmospheric-escape mechanisms and predict which gases a planet keeps or loses
- [ ] Explain Mercury, Venus, Earth and Mars as one story with different dials
- [ ] Describe giant and ice-giant interiors, and explain metallic hydrogen and superionic ice
- [ ] Compute tidal heating and resonance conditions, and explain why Io is volcanic and Europa is not frozen through
- [ ] Argue from $k_2$, induced fields and plumes that a moon has a subsurface ocean
- [ ] Apply the Roche limit and resonance dynamics to explain where rings are and why they end where they do
- [ ] Map the small-body reservoirs, and estimate how the Yarkovsky effect feeds the near-Earth population
- [ ] Detect an exoplanet by transit and radial velocity and extract its radius, mass and density
- [ ] Convert a detection count into an occurrence rate by correcting for transit probability and detection efficiency
- [ ] Read a mass–radius diagram for composition, and explain the radius valley
- [ ] Interpret a transmission spectrum and a phase curve, and state what clouds do to both
- [ ] Test a world against the habitable zone — and give three serious criticisms of that framework

## Modules

### Module 1: Solar-system formation

From a collapsing cloud to a clock-dated architecture: how the disk forms, what condenses where, how solids grow into planets, how the whole system rearranged itself, and how we read the timeline and the provenance off rocks.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The protoplanetary disk | Explain why a collapsing molecular cloud becomes a spinning disk | nebular hypothesis, angular-momentum conservation, disk formation, viscous accretion, the young Sun |
| 1.2 | Condensation and the frost line | Predict what solids condense at each disk radius | equilibrium-temperature profile, condensation sequence, frost/snow line, rock vs. ice, refractory vs. volatile |
| 1.3 | Accretion: dust to planetesimals | Trace solid growth and identify where it stalls | grain sticking, the meter barrier, streaming instability, planetesimals, runaway and oligarchic growth |
| 1.4 | Giant planets and migration | Explain gas-giant formation and how orbits rearrange | core accretion, gas capture, Type I/II migration, Grand Tack, Nice model, resonant chains |
| 1.5 | Meteorites and isotopic clocks | Date the solar system from a rock's isotopes | chondrites, CAIs, radiometric decay, isochrons, short-lived radionuclides ($^{26}$Al), the Hf–W core clock |
| 1.6 | Cosmochemistry: reservoirs and volatile delivery | Say where a planet's material — and its water — came from | the NC/CC isotopic dichotomy, D/H as a provenance tracer, volatile delivery, late veneer, condensation vs. accretion of water |

**Boss problem 1:** Model the disk's equilibrium temperature as $T(r) = 278\,\text{K}\,(r/\text{AU})^{-1/2}$. (a) Find the radius where water ice condenses ($T\approx150$ K) and explain why this frost line divides rocky inner planets from icy giant cores. (b) A CAI and a nearby chondrule differ in $^{26}$Al/$^{27}$Al consistent with a 2-Myr gap; given $^{26}$Al's 0.72-Myr half-life, by what factor did the abundance fall, and why does that make $^{26}$Al a *relative* clock but not an absolute one? (c) Earth's ocean water has D/H $= 1.56\times10^{-4}$; carbonaceous chondrites average $1.4\times10^{-4}$ and Oort-cloud comets about $3\times10^{-4}$. Which reservoir delivered Earth's water, and state one reason the argument is weaker than it looks. (d) Given your answer to (a), explain why Earth — which formed well inside the frost line — has any water at all.

### Module 2: Planetary interiors and surfaces

What a planet is made of on the inside, how it loses its heat, how that heat writes itself onto the surface as craters, volcanoes and faults — and the one body whose samples calibrate everything.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Differentiation and interior structure | Predict a planet's layers, and infer a core from its moment of inertia | differentiation, core/mantle/crust, hydrostatic equilibrium, pressure with depth, the $C/MR^2$ argument |
| 2.2 | Thermal evolution and heat transport | Decide whether a body cools by conduction or convection | radiogenic heating, conduction, mantle convection, thermal-diffusion timescale, Rayleigh number, surface-to-volume scaling |
| 2.3 | Magnetic fields and the dynamo | State what it takes to sustain a planetary magnetic field | dynamo requirements, conducting fluid, convection plus rotation, field decay, remanent crustal fields |
| 2.4 | Impact cratering and chronology | Date a surface from its crater density | crater mechanics, simple vs. complex craters, production function, saturation, crater counting, the bombardment history |
| 2.5 | Volcanism and tectonics | Read a planet's volcanic and tectonic style from its interior state | partial melting, effusive vs. explosive, mobile-lid vs. stagnant-lid, resurfacing, why Earth alone has plate tectonics |
| 2.6 | Reading a planetary surface | Infer geologic history by combining surface features | geomorphology, superposition, aeolian/fluvial/glacial features, relative dating, image interpretation |
| 2.7 | The Moon and the Earth–Moon system | Reconstruct the Moon's origin and explain why it dates the solar system | the giant impact, angular-momentum budget, magma ocean and anorthosite crust, lunar sample chronology, tidal recession and laser ranging |

**Boss problem 2:** A lunar highland surface has crater density $N_1$ and an age of 4.4 Gyr; adjacent smooth maria have $N_2 = N_1/200$. (a) Under a *constant* impact flux, estimate the maria's age, then explain why the true declining flux makes this a serious underestimate, and give the approximate real answer. (b) Name the interior process that reset the maria's crater clock, and state one condition from 2.2 required for it. (c) The Earth–Moon system has total angular momentum $3.4\times10^{34}\ \mathrm{kg\,m^2\,s^{-1}}$ and the Earth's polar moment of inertia is $8.04\times10^{37}\ \mathrm{kg\,m^2}$. Compute the Earth's rotation period if all of that angular momentum were in its spin, and say what the answer implies about the impact. (d) Explain why the crater chronology derived from lunar samples has to be *transferred* to Mars rather than measured there, and name the largest uncertainty in doing so.

### Module 3: Measuring a planet

Nobody has drilled another world. Almost everything in Modules 2, 4 and 5 rests on four remote techniques — weighing, tidal probing, spectroscopy and magnetic sounding — and this module owns them, together with what each one cannot determine.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Mass, density and the moment of inertia | Weigh a planet and find its core without landing on it | mass from a satellite's orbit, mean density, precession and $C/MR^2$, two-layer inversion, the core-size/core-density trade-off |
| 3.2 | Gravity, topography and tidal response | Read a lithosphere's strength and detect a subsurface ocean | gravity/topography admittance, elastic thickness on other planets, tidal Love number $k_2$, libration amplitude, ocean detection |
| 3.3 | Remote spectroscopy | Identify surface and atmospheric composition from reflected and emitted light | reflectance spectra, absorption bands, thermal emission and emissivity, thermal inertia, spatial vs. spectral resolution |
| 3.4 | Magnetospheres and the solar wind | Distinguish intrinsic from induced fields and connect them to atmospheric loss | magnetopause standoff, intrinsic vs. induced magnetospheres, sputtering and pickup ions, aurorae as diagnostics, the shielding debate |

**Boss problem 3:** (a) Mercury has mean density $5427\ \mathrm{kg\,m^{-3}}$ and radius 2440 km. Model it as an iron core ($7000\ \mathrm{kg\,m^{-3}}$) inside a silicate mantle ($3200\ \mathrm{kg\,m^{-3}}$) and solve for the core radius. (b) Compute the $C/MR^2$ your model predicts and compare with the observed 0.346; interpret the discrepancy. (c) Europa's radial tidal amplitude would be about 1 m if it were solid throughout and about 30 m if a global ocean decoupled its ice shell from the interior; the observed value is near 30 m. State what this establishes and which quantity in 3.2 it corresponds to. (d) A reflectance spectrum of a moon shows strong absorptions near 1.5 and 2.0 μm and a weaker one near 3.4 μm. Identify the two materials, and state one composition the technique would be blind to.

### Module 4: Planetary atmospheres

How to build an atmosphere's vertical structure, why it moves the way it does, why surfaces run hotter than sunlight alone allows, how chemistry and escape rewrite it over billions of years — and how these levers explain the four terrestrial planets.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Atmospheric structure | Build a pressure/temperature profile of any atmosphere | hydrostatic balance, scale height, adiabatic lapse rate, troposphere/stratosphere, thermal inversions |
| 4.2 | Energy balance and the greenhouse | Compute equilibrium versus surface temperature | absorbed vs. emitted flux, albedo, equilibrium temperature, optical depth, greenhouse forcing, the runaway |
| 4.3 | Atmospheric escape | Predict which gases a planet keeps or loses | Jeans escape, exosphere and exobase, hydrodynamic escape, non-thermal loss, $v_\text{esc}$ vs. thermal speed |
| 4.4 | Atmospheric circulation | Predict a circulation regime from a planet's rotation rate | thermal Rossby number, Hadley-cell width, superrotation, banded zonal jets, long-lived vortices |
| 4.5 | Photochemistry, hazes and atmospheric evolution | Explain how an atmosphere's chemistry and its lost history are read | photolysis, haze formation, the methane cycle, isotopic fractionation from escape, the faint young Sun |
| 4.6 | The terrestrial planets compared | Explain Mercury–Venus–Earth–Mars as one story with different dials | runaway greenhouse, atmospheric loss, carbonate–silicate cycling, comparative climate, why Earth is the outlier |

**Boss problem 4:** (a) For Earth (albedo 0.30, solar constant $1361\ \mathrm{W\,m^{-2}}$), compute the equilibrium temperature and the greenhouse contribution given a 288 K surface. (b) In a 1000 K exosphere, compute the most-probable thermal speed of atomic hydrogen and of molecular nitrogen, and use the rule "escape is fast when $v_\text{esc}/v_\text{th}\lesssim6$" with $v_\text{esc}=11.2$ km/s to explain why Earth loses H and keeps N$_2$. (c) Repeat for Mars ($v_\text{esc}=5.0$ km/s) and comment. (d) Compute $\Omega^2a^2$ for Earth ($\Omega = 7.292\times10^{-5}\ \mathrm{s^{-1}}$, $a = 6371$ km) and for Venus ($\Omega = 2.99\times10^{-7}\ \mathrm{s^{-1}}$, $a = 6052$ km), take the ratio, and use it to explain why Venus has a single pole-to-pole circulation cell and a superrotating atmosphere while Earth has neither.

### Module 5: The outer solar system and small bodies

Where most of the planetary mass and nearly all of the interesting orbital dynamics live: giant interiors under extreme pressure, moons kept warm by tides, oceans under ice, rings held at the edge of destruction, and the leftovers that never became planets.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Giant and ice-giant interiors | Describe matter inside a giant planet and explain its field | hydrogen phase diagram, metallic hydrogen, superionic ice, $J_2$ and interior structure, why Uranus and Neptune have multipolar fields |
| 5.2 | Tides, resonances and orbital evolution | Compute tidal heating and explain resonant locking | tidal dissipation and $Q$, synchronous rotation, mean-motion resonance, the Laplace resonance, tidal recession and migration |
| 5.3 | Ocean worlds | Argue from evidence that a moon has a subsurface ocean | Europa, Enceladus, Titan, induced magnetic response, plumes, cryovolcanism, ice-shell thickness, habitability of ice-covered oceans |
| 5.4 | Rings and satellite systems | Explain where rings are, why they end, and how long they last | Roche limit, shepherd moons, resonance gaps, spiral density waves, ring age and origin |
| 5.5 | Asteroids, comets and the Kuiper belt | Map the small-body reservoirs and the dynamics that stir them | asteroid belt and Kirkwood gaps, comet families, Kuiper belt, Oort cloud, Yarkovsky/YORP, the near-Earth population and impact hazard |

**Boss problem 5:** (a) Io radiates about $2.5\ \mathrm{W\,m^{-2}}$ from a body of radius 1822 km. Compute its total heat output, and compare its heat production *per unit volume* with Earth's ($46$ TW from a radius of 6371 km). (b) Name the energy source and the orbital configuration that sustains it. (c) Using the fluid Roche limit $d = 2.456\,R_p(\rho_p/\rho_s)^{1/3}$ with Saturn's $R_p = 60{,}268$ km and $\rho_p = 687\ \mathrm{kg\,m^{-3}}$, and an icy satellite density of $900\ \mathrm{kg\,m^{-3}}$, compute the Roche limit and compare it with the A ring's outer edge at 136,775 km. (d) Io's orbital period is 1.769 days and Io, Europa and Ganymede are in a 1:2:4 Laplace resonance; predict the other two periods, and explain what the resonance has to do with your answer to (a).

### Module 6: Exoplanets and habitability

Five thousand worlds, discovered by two techniques with severe and *computable* biases. Extract radii and masses, debias the sample into an occurrence rate, read composition off a mass–radius diagram, characterize an atmosphere — and then confront how little the habitable zone actually claims.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Exoplanet detection | Extract a planet's radius and mass from starlight | transit depth and duration, radial velocity and the Doppler wobble, astrometry, direct imaging, microlensing, timing variations |
| 6.2 | Demographics and selection effects | Turn a pile of detections into an occurrence rate | transit probability $R_\star/a$, detection efficiency, completeness corrections, occurrence rates, hot-Jupiter frequency |
| 6.3 | Mass, radius and composition | Read a mass–radius diagram for what a planet is made of | bulk density, mass–radius relations, degeneracy of composition, super-Earths vs. sub-Neptunes, the radius valley |
| 6.4 | Exoplanet atmospheres | Characterize an atmosphere from transits and phase curves | transmission spectroscopy, scale-height signal, emission spectra, phase curves and heat redistribution, clouds and flat spectra |
| 6.5 | Habitability, and its limits | Test a world against the habitable zone, then criticize the test | habitable-zone boundaries, tidal locking around M dwarfs, biosignatures and false positives, what the framework assumes |

**Boss problem 6:** A Sun-like star ($R_\star = R_\odot$, $M_\star = M_\odot$) shows a transit of depth 1.0 percent with a 300-day period. (a) Compute the planet's radius in Earth radii and its orbital distance in AU. (b) Compute its equilibrium temperature for albedo 0.30 and decide whether it sits in the habitable zone. (c) Given the radius from (a), argue whether *this* body could have a habitable surface, and name a better place to look in the same system. (d) A survey of 150,000 such stars found 20 planets with this period and radius. Compute the geometric transit probability, and use it to estimate what fraction of Sun-like stars host such a planet. State one reason your answer is still a lower bound.

## Sources of truth

- **de Pater & Lissauer, *Planetary Sciences*** — the standard graduate text; conventions, notation and rigor level follow it throughout.
- **Catling & Kasting, *Atmospheric Evolution on Inhabited and Lifeless Worlds*** — Module 4 and the habitability framing of 6.5.
- **Melosh, *Planetary Surface Processes*** (and *Impact Cratering*) — Module 2's cratering, volcanism and surface mechanics.
- **Murray & Dermott, *Solar System Dynamics*** — Module 5's tides, resonances and ring dynamics.
- **Guillot & Gautier, "Giant Planets"** (*Treatise on Geophysics*) — 5.1's interior models and equations of state.
- **Seager, *Exoplanet Atmospheres*; Winn's transit review; Fulton et al. (2017)** — Module 6's detection conventions, demographics and the radius valley.

---

*Syllabus revision (2026-09-01):* extended from 20 lessons and 4 modules to 33 lessons and
6, after a review against the five Earth & Space siblings that had already been expanded
to 29–33. **Lessons 2.1–2.5 keep their numbers**, because [`geology`](../geology/syllabus.md)
and [`geophysics`](../geophysics/syllabus.md) are both built and cite them nine times
between them (2.1 for differentiation and the moment-of-inertia argument, 2.1–2.4 as a
block, 2.3 for the dynamo, 2.5 for the mobile-lid/stagnant-lid comparison). Everything
else was free to move.

The substantive gaps closed. **There was no treatment of how anything is measured** — the
old Module 2 predicted interiors from theory and never confronted an observation, even
though `geology` 5.1 already credits this course with running the moment-of-inertia
argument on Mercury, the Moon and Mars. Module 3 is new and owns mass and $C/MR^2$ (3.1),
gravity, topography and the $k_2$ ocean detector (3.2), reflectance and thermal-emission
spectroscopy (3.3), and magnetospheres (3.4); 2.1's key concepts gained the $C/MR^2$
argument so the existing citation stays honest. **Atmospheres did not move**: the old
module built structure, greenhouse and escape but had no dynamics at all, so 4.4
(circulation, superrotation, banded jets) and 4.5 (photochemistry, hazes, isotopic
evolution) are new. **Old 3.5 carried giants, ice giants, moons, tidal heating and rings
in one 15-minute lesson**; it is now 5.1, 5.2, 5.3 and 5.4, with tidal evolution and
mean-motion resonances — owned by no course in the library, since
[`orbital-mechanics`](../orbital-mechanics/syllabus.md) stops at the restricted
three-body problem — given a lesson of their own. **The Moon had no lesson** despite
being the calibration standard for every crater chronology in the solar system, and the
giant impact appeared only in `geology` 5.2 credited to nobody; it is now 2.7.
Cosmochemistry and volatile provenance became 1.6. Small bodies grew from one survey
lesson to 5.5 with the Yarkovsky effect and the near-Earth population, and exoplanets from
three lessons to five, gaining debiased demographics (6.2) and modern atmospheric
characterization (6.4) — the two halves of the field that did not exist when the original
syllabus's structure was set.

The Scope discipline table is new. It reciprocates the ones `geology` and `geophysics`
already carry, and it settles several overlaps that were previously undeclared: orbital
mechanics, stellar astrophysics, atmospheric dynamics, Earth's climate, space plasma
physics and Earth's geophysics all have owners elsewhere, and this course cites them
rather than re-deriving them.

*Syllabus revision (2026-09-01, second entry):* **Boss problem 2(a) was internally
inconsistent and has been corrected.** As originally written it set the maria at $N_1/10$ relative
to 4.4-Gyr highlands while expecting "the approximate real answer" to be the maria's actual
~3.5 Gyr. Both cannot hold. Using the standard lunar chronology function
$N(1) = 5.44\times10^{-14}(e^{6.93T}-1) + 8.38\times10^{-4}T$, a density of $N_1/10$ corresponds to
4.06 Gyr, whereas the real maria at 3.5 Gyr sit at $N_1/200$ — the highlands carry about 200 times
the maria's crater density, not 10 times. **The ratio has been changed to $N_1/200$**, which makes
the problem self-consistent and sharpens its teaching point: the constant-flux estimate is now
$4.4/200 = 0.022$ Gyr against a true 3.50 Gyr, an error of a factor of 159 rather than 9.
[2.4](lessons/02-04-impact-cratering-chronology.md) was rewritten to match. Found during the
pre-writing numerical pass, in which all six boss problems were reproduced in Python; the other
five checked out exactly.
