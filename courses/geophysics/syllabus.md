# Geophysics — Syllabus

> Earth & Space · Tier 2 · ~21 lessons · Prereqs: [mechanics-refresher](../mechanics-refresher/syllabus.md), [pdes](../pdes/syllabus.md) · Roadmap id: `geophysics`

## Goal

Read the Earth as a physics problem: infer its layered structure, thermal state, and dynamics from the signals it leaks to the surface — seismic waves, gravity, magnetism, and heat. You will move fluently between the four "windows" (elastic, gravitational, magnetic, thermal), quantifying each with the wave equation, potential theory, and diffusion you already own from `pdes`. This course deliberately skips the full inverse-theory machinery (we take tomography and source inversion on faith at the "what it buys you" level) and all instrumentation engineering; it is the quantitative companion to `geology`.

## Dangerous Checklist

When you finish, you can:

- [ ] Classify a seismogram's arrivals (P, S, Rayleigh, Love) and explain each wave's particle motion and why it travels at the speed it does
- [ ] Locate an earthquake and estimate its epicentral distance from S–P times, and read structure off a travel-time curve
- [ ] Apply Snell's law and the ray parameter to trace a ray through a layered Earth and explain the core shadow zone
- [ ] Compute a seismic moment and moment magnitude $M_w$ from fault geometry, slip, and rigidity
- [ ] Reduce a gravity reading to free-air and Bouguer anomalies and say what each correction removes
- [ ] Solve an Airy or Pratt isostasy problem for root depth or compensation, and predict the anomaly signature of a compensated load
- [ ] Explain the geoid as an equipotential surface and relate its undulations to density structure
- [ ] Describe the geodynamo qualitatively and compute the main dipole field's elements (inclination, declination) at a point
- [ ] Read paleolatitude from fossil inclination and a spreading rate from seafloor magnetic stripes
- [ ] Build a steady-state geotherm from Fourier's law with radiogenic heat, and estimate ocean-floor age from half-space cooling
- [ ] Estimate the mantle's Rayleigh number and argue whether — and how vigorously — it convects
- [ ] Name the plate driving forces and rank their contributions with order-of-magnitude estimates

## Modules

### Module 1: Seismology & Earth structure

The Earth's loudest signal. Build the elastic Earth, launch waves through it, and invert their travel times into the layered planet — then read the source that shook it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The elastic Earth | Describe deformation with stress, strain, and two elastic moduli | stress/strain tensors, Hooke's law, bulk & shear modulus, Lamé parameters |
| 1.2 | Seismic wave zoo | Identify P, S, Rayleigh, and Love waves by speed and particle motion | body vs surface waves, P/S velocities, polarization, dispersion |
| 1.3 | The wave equation & ray theory | Derive seismic speeds and trace rays with the ray parameter | elastic wave equation, $v_p,v_s$ in terms of moduli, Snell's law, ray parameter $p$ |
| 1.4 | Travel-time curves & the deep Earth | Invert travel times into a velocity-depth profile | $T(\Delta)$ curves, Herglotz–Wiechert idea, low-velocity zones, core shadow zone |
| 1.5 | Seismic tomography | Explain how ray delays image 3-D mantle structure | reference model, travel-time residuals, back-projection, resolution/coverage |
| 1.6 | Earthquake sources & magnitude | Quantify a rupture: moment, magnitude, focal mechanism | elastic rebound, seismic moment $M_0$, $M_w$, double-couple, beachballs |

**Boss problem 1:** A shallow earthquake gives a P arrival at 10:00:30 and an S arrival at 10:00:55 at one station, with crustal $v_p=6.0$ km/s and $v_p/v_s=\sqrt{3}$. (a) Find the epicentral distance. (b) The rupture broke a patch 10 km × 5 km with mean slip 0.5 m in crust of rigidity $\mu=30$ GPa; compute the seismic moment $M_0$ and moment magnitude $M_w$. *(Answer: ~205 km; $M_0\approx7.5\times10^{17}$ N·m, $M_w\approx5.8$.)*

### Module 2: Gravity, the figure of the Earth & tides

The Earth's shape and its gravity are the same fact seen two ways. Reduce raw gravity to anomalies, use them to weigh the crust (isostasy), map the geoid, and close with the tidal bulge that rotation and the Moon impose.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The figure of the Earth | Explain why the Earth is an ellipsoid and write normal gravity | geopotential, reference ellipsoid, centrifugal term, normal gravity formula |
| 2.2 | Gravity anomalies & reductions | Reduce a reading to free-air and Bouguer anomalies | latitude correction, free-air correction, Bouguer slab, terrain correction |
| 2.3 | Isostasy: Airy & Pratt | Compute crustal roots / density compensation for a load | Airy roots, Pratt density columns, compensation depth, flexure idea |
| 2.4 | The geoid | Read the geoid as an equipotential and link undulations to density | equipotential surface, geoid height $N$, Bruns' relation, mass anomalies |
| 2.5 | Earth's rotation & tides | Derive the tidal bulge and the sign of key rotational effects | tidal potential, equilibrium tide, Love numbers (taste), length-of-day, precession |

**Boss problem 2:** A plateau of height $h=5$ km sits on crust of density $\rho_c=2800$ kg/m³ over mantle $\rho_m=3300$ kg/m³. (a) Using Airy isostasy, find the depth of its compensating root. (b) State the signs and rough magnitude of the free-air and Bouguer anomalies expected over the (fully compensated) plateau interior, justifying each. *(Answer: root $\approx 28$ km; free-air $\approx 0$; Bouguer strongly negative, slab estimate a few hundred mGal.)*

### Module 3: Geomagnetism & paleomagnetism

The field the core generates, and the tape recorder rocks make of it. Describe the main dipole, sketch the dynamo that sustains it, then use frozen-in magnetization to reconstruct plate motion and time itself.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The main field | Compute the field elements of the geocentric dipole at any point | dipole potential, inclination/declination/intensity, $\tan I = 2\tan\lambda$, IGRF |
| 3.2 | The geodynamo | Explain qualitatively why a convecting, rotating iron core makes a field | magnetic Reynolds number, induction idea, Coriolis, why dipole-dominant |
| 3.3 | Paleomagnetism | Recover ancient pole positions from rock magnetization | remanent magnetization, blocking, apparent polar wander, paleolatitude |
| 3.4 | Magnetic anomalies & reversals | Date the seafloor and measure spreading from magnetic stripes | Vine–Matthews, reversal timescale, magnetostratigraphy, spreading rate |

**Boss problem 3:** (a) Ancient lava at a site records a stable magnetic inclination $I=45°$. Using the dipole relation, find the paleolatitude of the site when it formed. (b) On a seafloor magnetic profile the Brunhes–Matuyama boundary (0.78 Ma) lies 20 km from the ridge axis. Find the half-spreading rate in cm/yr. *(Answer: $\lambda\approx26.6°$; ~2.6 cm/yr.)*

### Module 4: Heat flow & geodynamics

The engine and its exhaust. Set up the geotherm by conduction, fuel it with radiogenic heat, cool the ocean floor as it ages, then let the whole mantle convect — and identify what actually pushes the plates.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Conduction & the geotherm | Build a steady-state temperature-depth profile from Fourier's law | Fourier's law, heat-conduction equation, thermal conductivity, boundary conditions |
| 4.2 | Radiogenic heat & the heat budget | Account for the Earth's heat output and its sources | radiogenic heating $A$, geotherm with sources, surface heat flux, secular cooling |
| 4.3 | Cooling of the oceanic lithosphere | Predict seafloor depth and heat flow versus age | half-space cooling, diffusion length, $\sqrt{t}$ subsidence, plate model |
| 4.4 | Mantle convection & the Rayleigh number | Decide whether a fluid layer convects, and how vigorously | buoyancy vs diffusion, Rayleigh number, critical $Ra$, boundary layers, Nusselt |
| 4.5 | Plate driving forces | Rank the forces that move plates by order of magnitude | ridge push, slab pull, basal drag, force balance on a plate |
| 4.6 | A taste of exploration geophysics | Read a reflection section and a potential-field survey at a first-pass level | seismic reflection & two-way travel time, gravity/magnetic surveying, resolution |

**Boss problem 4:** Take mantle values $g=10$ m/s², thermal expansivity $\alpha=2\times10^{-5}$ K⁻¹, diffusivity $\kappa=10^{-6}$ m²/s, kinematic viscosity $\nu=10^{17}$ m²/s. (a) Oceanic lithosphere thickens as a cooling half-space; estimate the age at which its thermal thickness reaches $L=100$ km. (b) For a whole-mantle layer $d=2900$ km with $\Delta T=3000$ K, compute the Rayleigh number and state whether it convects ($Ra_c\sim10^3$). *(Answer: ~80 Myr; $Ra\sim1\times10^8$, vigorously convecting.)*

## Sources of truth

- **Fowler, *The Solid Earth*** — overall scope, notation, and rigor level for the whole-Earth view.
- **Stein & Wysession, *An Introduction to Seismology, Earthquakes, and Earth Structure*** — Module 1 conventions (wave types, travel times, source theory).
- **Turcotte & Schubert, *Geodynamics*** — Modules 2 & 4 (isostasy, heat conduction, convection, Rayleigh number).
- **Lowrie, *Fundamentals of Geophysics*** — gravity reductions and geomagnetism (Modules 2 & 3).
