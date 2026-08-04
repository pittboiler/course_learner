# Planetary Science — Syllabus

> Earth & Space · Tier 2 · ~20 lessons · Prereqs: [mechanics-refresher](../mechanics-refresher/syllabus.md), [thermodynamics-physics](../thermodynamics-physics/syllabus.md) · Roadmap id: `planetary-science`

## Goal

Turn "there are eight planets" into a working physicist's model of how worlds are built, heated, resurfaced, and wrapped in air — and how we now find and weigh worlds around other stars. You will reason quantitatively about formation (a collapsing disk, a frost line, accreting planetesimals, isotopic clocks), interiors (differentiation, thermal evolution, dynamos), surfaces (impact chronology, volcanism, tectonics), and atmospheres (structure, the greenhouse, escape), then run the comparative tour that makes the planets a *dataset* rather than a bestiary — closing on exoplanet detection and a taste of habitability. Deliberately skipped: spacecraft-mission and instrument engineering, and astrobiology beyond the habitable-zone concept. The physics leans on `mechanics-refresher` (gravitation, orbits, angular momentum) and `thermodynamics-physics` (energy balance, adiabats, kinetic theory) throughout; it feeds `astrophysics`, `orbital-mechanics`, and `geology`.

## Dangerous Checklist

When you finish, you can:

- [ ] Explain the nebular hypothesis and why a collapsing cloud flattens into a disk (angular-momentum conservation)
- [ ] Locate a frost line from an equilibrium-temperature profile and say why gas giants form beyond it
- [ ] Trace accretion from dust grains to planetesimals to protoplanets, and name where each step stalls
- [ ] Date the solar system from a meteorite isochron and explain what a radiometric clock actually measures
- [ ] Predict a planet's layered interior from differentiation and hydrostatic equilibrium
- [ ] Estimate whether a body is still geologically hot by comparing conductive, convective, and radiogenic timescales
- [ ] Explain the magnetic-dynamo requirements and why some planets have fields and others don't
- [ ] Date a planetary surface from its crater density and read its volcanic/tectonic history
- [ ] Build an atmosphere's temperature profile and compute an equilibrium vs. surface temperature (the greenhouse)
- [ ] Compare atmospheric-escape mechanisms and predict which gases a planet keeps or loses
- [ ] Compare the terrestrial planets, giants, and major moons as a single physical dataset
- [ ] Detect an exoplanet by transit and radial velocity, extract its radius, mass, and density, and test it against the habitable zone

## Modules

### Module 1: Solar-system formation

From a collapsing cloud to a clock-dated architecture: how the disk forms, what condenses where, how solids grow into planets, and how we read the timeline off rocks.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The protoplanetary disk | Explain why a collapsing molecular cloud becomes a spinning disk | nebular hypothesis, angular-momentum conservation, disk formation, the young Sun |
| 1.2 | Condensation and the frost line | Predict what solids condense at each disk radius | equilibrium-temperature profile, condensation sequence, frost/snow line, rock vs. ice |
| 1.3 | Accretion: dust to planetesimals | Trace solid growth and identify where it stalls | grain sticking, the meter barrier, streaming instability, planetesimals, runaway/oligarchic growth |
| 1.4 | Giant planets and migration | Explain gas-giant formation and how orbits rearrange | core accretion, gas capture, disk migration, Grand Tack, Nice model, resonances |
| 1.5 | Meteorites and isotopic clocks | Date the solar system from a rock's isotopes | chondrites, CAIs, radiometric decay, isochrons, short-lived radionuclides ($^{26}$Al) |

**Boss problem 1:** Model the disk's equilibrium temperature as $T(r) = 278\,\text{K}\,(r/\text{AU})^{-1/2}$. (a) Find the radius where water ice condenses ($T \approx 150$ K) and explain why this frost line divides rocky inner planets from icy giant cores. (b) A CAI and a nearby chondrule differ in $^{26}$Al/$^{27}$Al consistent with a 2-Myr gap; given $^{26}$Al's 0.72-Myr half-life, by what factor did the $^{26}$Al abundance fall between them, and why does that make $^{26}$Al a *relative* clock but not an absolute one?

### Module 2: Planetary interiors and surfaces

What a planet is made of on the inside, how it loses its heat, and how that heat writes itself onto the surface as craters, volcanoes, and faults.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Differentiation and interior structure | Predict a planet's layers from density sorting under gravity | differentiation, core/mantle/crust, hydrostatic equilibrium, pressure with depth |
| 2.2 | Thermal evolution and heat transport | Decide whether a body cools by conduction or convection | radiogenic heating, conduction, mantle convection, thermal-diffusion timescale, Rayleigh number |
| 2.3 | Magnetic fields and the dynamo | State what it takes to sustain a planetary magnetic field | geodynamo, conducting fluid, convection + rotation, field decay, paleomagnetism |
| 2.4 | Impact cratering and chronology | Date a surface from its crater density | crater mechanics, production function, saturation, crater counting, bombardment history |
| 2.5 | Volcanism and tectonics | Read a planet's volcanic and tectonic style from its interior state | partial melting, effusive vs. explosive, plate vs. stagnant-lid tectonics, resurfacing |
| 2.6 | Reading a planetary surface | Infer geologic history by combining surface features | geomorphology, superposition, aeolian/fluvial/glacial features, relative dating |

**Boss problem 2:** A moon's heavily cratered highlands (crater density $N_1$, age 4.4 Gyr) sit beside smooth maria with density $N_2 = N_1/10$. (a) Under a *constant* impact flux, estimate the maria's age, then explain why the true early flux (declining, with a possible late bombardment) makes this an underestimate. (b) The maria are basaltic flood plains — name the interior process that reset their crater clock, and state one interior condition (from Lesson 2.2) required for it to occur.

### Module 3: Planetary atmospheres and the planets

How to build an atmosphere's vertical structure, why surfaces run hotter than sunlight alone allows, why air leaks to space, and how these levers explain the actual planets.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Atmospheric structure | Build a pressure/temperature profile of an atmosphere | hydrostatic balance, scale height, adiabatic lapse rate, troposphere/stratosphere |
| 3.2 | Energy balance and the greenhouse | Compute equilibrium vs. surface temperature | absorbed vs. emitted flux, albedo, equilibrium temperature, greenhouse forcing |
| 3.3 | Atmospheric escape | Predict which gases a planet keeps or loses | Jeans (thermal) escape, exosphere, hydrodynamic escape, non-thermal loss, $v_\text{esc}$ vs. thermal speed |
| 3.4 | The terrestrial planets compared | Explain Mercury–Venus–Earth–Mars as one story with different dials | runaway greenhouse, atmospheric loss, habitability of the surface, comparative climate |
| 3.5 | Giants, ice giants, moons, and rings | Survey the outer solar system's structural physics | gas/ice-giant interiors, metallic hydrogen, tidal heating, ring dynamics, Roche limit |

**Boss problem 3:** For Earth (albedo 0.3, solar constant $1361\ \text{W/m}^2$): (a) compute the equilibrium temperature and compare it to the 288 K surface — what is the greenhouse's contribution in kelvin? (b) In a 1000 K exosphere, compare the thermal speed of hydrogen and of molecular nitrogen to Earth's escape speed (11.2 km/s), and use the rule "escape is fast when $v_\text{esc}/v_\text{th} \lesssim 6$" to explain why Earth loses H but keeps N$_2$ — and why Mars ($v_\text{esc} = 5$ km/s) lost far more.

### Module 4: Small bodies, exoplanets, and habitability

The leftovers that never became planets, the methods that reveal planets around other stars, and the question those methods are ultimately chasing.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Asteroids, comets, and the Kuiper belt | Map the reservoirs of small bodies and what they preserve | asteroid belt, comets, volatiles, Kuiper belt, Oort cloud, dynamical families |
| 4.2 | Exoplanet detection | Extract a planet's radius and mass from starlight | transit depth, radial velocity, Doppler wobble, astrometry, direct imaging, selection effects |
| 4.3 | Exoplanet diversity and characterization | Turn radius + mass into composition, and read an atmosphere | mass–radius relation, density, hot Jupiters, super-Earths, transmission spectroscopy |
| 4.4 | Habitability, a taste | Test a world against the conditions life is thought to need | habitable zone, liquid-water criterion, biosignatures, limits of the framework |

**Boss problem 4:** A Sun-like star ($R_\star = R_\odot$, $M_\star = M_\odot$) shows a transit of depth 1% with a 300-day period. (a) Use the transit depth to get the planet's radius (in Earth radii), and Kepler's third law to get its orbital distance. (b) Compute the planet's equilibrium temperature and decide whether it sits in the habitable zone. (c) Given the radius from (a), argue whether *this* body could have a habitable surface — and what would be the better place to look in the same system.

## Sources of truth

- de Pater & Lissauer, *Planetary Sciences* — the standard graduate text; conventions and rigor level follow it.
- Catling & Kasting, *Atmospheric Evolution on Inhabited and Lifeless Worlds* — atmospheres, escape, and habitability (Module 3–4).
- Melosh, *Planetary Surface Processes* — cratering, volcanism, and tectonics (Module 2).
- Seager, *Exoplanet Atmospheres* / Winn's transit review — detection and characterization conventions (Module 4).
