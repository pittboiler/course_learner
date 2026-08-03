# Astrophysics — Syllabus

> Tier 2 · 30 lessons · Prereqs: [`mechanics-refresher`](../mechanics-refresher/syllabus.md), [`em-refresher`](../em-refresher/syllabus.md), [`stat-mech`](../stat-mech/syllabus.md), [`relativity`](../relativity/syllabus.md), [`quantum-mechanics`](../quantum-mechanics/syllabus.md) · Roadmap id: `astrophysics`

## Goal

The capstone: use everything. Astrophysics is where the whole curriculum pays off — gravity from `mechanics-refresher` and `relativity`, radiation from `em-refresher`, degeneracy pressure and the Saha equation from `stat-mech`, fusion tunneling and spectral lines from `quantum-mechanics`. Build the subject from the tools of measurement (luminosity, spectra, the distance ladder) up through stellar structure and evolution, the compact objects stars leave behind (white dwarfs, neutron stars, black holes — where quantum degeneracy meets general relativity), the galaxies stars live in, and the cosmology that contains it all. The emphasis is on *order-of-magnitude physical reasoning and the key equations*: you will be able to estimate a star's lifetime, derive the Chandrasekhar mass, explain why the sky is dark and the universe expands, and read the physics off an observation. Deliberately kept lighter: observational technique and instrumentation depth, detailed numerical radiative-transfer and stellar-atmosphere modeling, planetary science and exoplanets (noted, not developed), and magnetohydrodynamics beyond a first look. A tier-2 capstone — it assumes all five prerequisite courses and leans on them constantly rather than re-deriving; cross-subject bridges are called out explicitly in each lesson.

## Dangerous Checklist

When you finish, you can:

- [ ] Work with luminosity, flux, and magnitudes, and explain the rungs of the cosmic distance ladder
- [ ] Use blackbody radiation and spectral lines to read a star's temperature, composition, and motion, and place it on the HR diagram
- [ ] Apply the virial theorem and dynamical timescales to estimate masses and lifetimes
- [ ] Write the four equations of stellar structure and explain what sets a star's luminosity
- [ ] Explain nuclear energy generation (pp-chain, CNO) including why quantum tunneling makes fusion possible
- [ ] Trace a star's evolution from a collapsing cloud through the main sequence to its death, and say what determines the endpoint
- [ ] Derive the electron-degeneracy-supported white dwarf and the Chandrasekhar mass limit
- [ ] Describe neutron stars, pulsars, black-hole accretion, and the Eddington limit
- [ ] Explain galaxy rotation curves and the dynamical evidence for dark matter
- [ ] Derive the Friedmann equations and describe the thermal history of the universe (BBN, the CMB)
- [ ] Explain the evidence for dark energy and the accelerating universe, and sketch the concordance (ΛCDM) model

## Modules

### Module 1: Radiation, matter, and measurement

How we know anything at all: turning light into physics.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Scales, luminosity, flux, and the distance ladder | Get the units and distances astronomy runs on | luminosity vs flux, inverse-square law, magnitudes, parallax, standard candles, the distance ladder |
| 1.2 | Blackbody radiation, spectra, and the HR diagram | Read temperature and class off a star's light | blackbody (from `stat-mech`), Wien/Stefan–Boltzmann, spectral classes, the HR diagram |
| 1.3 | Radiative transfer and spectral lines | Understand how light and matter interact in a star | optical depth, emission/absorption, the radiative transfer equation, line formation, Saha equation |
| 1.4 | Gravitational dynamics in astrophysics | Reuse mechanics to weigh and time astronomical systems | virial theorem, dynamical/free-fall timescales, two-body & Kepler, N-body idea |

**Boss problem 1:** Use the virial theorem to estimate the mass of a galaxy cluster from its galaxies' velocity dispersion and size, compare it to the luminous (stellar) mass, and interpret the discrepancy — the historical first evidence for dark matter (Zwicky).

### Module 2: Stellar structure

What holds a star up and what makes it shine.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The equations of stellar structure | Write down what a star is, physically | hydrostatic equilibrium, mass continuity, pressure sources, boundary conditions |
| 2.2 | Energy transport: radiation, convection, and opacity | Explain how energy gets from core to surface | radiative diffusion, opacity, the Eddington approximation, convective instability (Schwarzschild criterion) |
| 2.3 | Nuclear energy generation | Explain the furnace, and why it needs quantum mechanics | pp-chain, CNO cycle, the Gamow peak, tunneling (from `quantum-mechanics`), temperature sensitivity |
| 2.4 | Polytropes and the Lane–Emden equation | Solve a simplified star analytically | polytropic equation of state, Lane–Emden equation, the mass–radius relation |
| 2.5 | The main sequence | Explain where most stars live and for how long | mass–luminosity relation, main-sequence lifetimes, the upper and lower mass limits |

**Boss problem 2:** Build a rough solar model: use hydrostatic equilibrium and the ideal-gas law to estimate the Sun's central temperature and pressure, check it against the temperature fusion requires (via the Gamow peak), and estimate the Sun's main-sequence lifetime from its luminosity and hydrogen fuel.

### Module 3: Stellar evolution and death

Birth, life, and the several ways a star can end.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Star formation | Explain how a cloud becomes a star | Jeans instability/mass, collapse, protostars, the role of cooling (from `stat-mech`) |
| 3.2 | Post-main-sequence evolution | Follow a star off the main sequence | shell burning, red giants, the helium flash, horizontal/asymptotic giant branches |
| 3.3 | Nucleosynthesis and the origin of the elements | Explain where the periodic table comes from | fusion up to iron, the iron peak, s- and r-process, "we are stardust" |
| 3.4 | Stellar death: white dwarfs, supernovae | Reach the endpoints and their triggers | planetary nebulae, core-collapse (Type II) vs thermonuclear (Type Ia) supernovae, remnants |
| 3.5 | The initial mass function and stellar populations | Move from single stars to populations | initial mass function, Population I/II/III, stellar feedback, chemical enrichment |

**Boss problem 3:** Derive the Jeans mass for a molecular cloud of given temperature and density by balancing gravitational and thermal energy, evaluate it for typical star-forming conditions, and explain why a real cloud fragments into many stars rather than collapsing into one.

### Module 4: Compact objects

Where quantum degeneracy meets general relativity.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | White dwarfs and the Chandrasekhar mass | Support a star with degeneracy pressure and find its limit | electron degeneracy (from `stat-mech`), mass–radius relation, relativistic softening, Chandrasekhar mass |
| 4.2 | Neutron stars and pulsars | Push matter to nuclear density | neutron degeneracy, the TOV equation (from `relativity`), pulsars, magnetic fields, the mass limit |
| 4.3 | Black holes in astrophysics | Treat black holes as real objects | formation, the Schwarzschild radius (from `relativity`), the Eddington luminosity, event-horizon observations |
| 4.4 | Accretion | Explain how compact objects light up | accretion disks, the virial/gravitational energy budget, X-ray binaries, AGN engines |
| 4.5 | Gravitational waves and mergers | Hear compact objects collide | inspiral–merger–ringdown, LIGO detections (from `relativity`), multi-messenger astronomy |

**Boss problem 4:** Model a white dwarf as a zero-temperature electron gas: balance nonrelativistic degeneracy pressure against gravity to get the mass–radius relation $R\propto M^{-1/3}$, then show the ultrarelativistic limit gives a mass-independent pressure and hence the maximum (Chandrasekhar) mass $\sim 1.4\,M_\odot$ — the same computation the `stat-mech` Fermi-gas lesson set up, now with the astrophysical payoff.

### Module 5: Galaxies and the interstellar medium

From single stars to the structures they build.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | The interstellar medium | Understand the gas between the stars | ISM phases, dust, molecular clouds, heating/cooling, the star-formation cycle |
| 5.2 | The Milky Way | Map our own galaxy | disk/bulge/halo, rotation, the Galactic center black hole, stellar kinematics |
| 5.3 | Galaxies and dark matter | Confront the rotation-curve problem | galaxy morphology, rotation curves, flat curves → dark matter halos, mass-to-light ratios |
| 5.4 | Galaxy formation and active galaxies | Explain how galaxies grow and blaze | hierarchical assembly, mergers, active galactic nuclei, quasars, black-hole/galaxy co-evolution |
| 5.5 | Clusters and large-scale structure | Zoom out to the cosmic web | galaxy clusters, gravitational lensing, the cosmic web, structure as a cosmological probe |

**Boss problem 5:** From a galaxy's flat rotation curve $v(r)\approx$ const at large radius, derive the implied enclosed-mass profile $M(r)\propto r$ and density $\rho\propto r^{-2}$, show it cannot be accounted for by the visible stars and gas, and estimate the dark-matter fraction — the galactic-scale evidence complementing Boss Problem 1's cluster-scale evidence.

### Module 6: Cosmology

The universe as a whole — and the deepest use of everything.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | The expanding universe and the Friedmann equations | Set up the dynamics of the cosmos | cosmological principle, FLRW metric & Friedmann equations (from `relativity`), critical density, $\Omega$ |
| 6.2 | The thermal history and Big Bang nucleosynthesis | Run the universe backward to a hot start | thermal equilibrium (from `stat-mech`), decoupling, BBN and the light-element abundances |
| 6.3 | The cosmic microwave background | Read the universe's baby picture | recombination, last scattering, the CMB blackbody and its anisotropies, acoustic peaks |
| 6.4 | Structure formation and dark matter | Grow galaxies from tiny ripples | gravitational instability, growth of perturbations, cold dark matter, the power spectrum |
| 6.5 | Dark energy and the accelerating universe | Confront the biggest open puzzle | Type Ia supernovae, acceleration, the cosmological constant $\Lambda$, the coincidence/fine-tuning problems |
| 6.6 | The concordance model and frontiers | Assemble the standard model of cosmology and its edges | ΛCDM, inflation, the horizon/flatness problems, open questions (capstone synthesis) |

**Boss problem 6:** Using the Friedmann equations with matter, radiation, and a cosmological constant, identify which component dominates in each era, solve for the scale factor's behavior in the matter- and $\Lambda$-dominated epochs, estimate the redshift of matter–$\Lambda$ equality for the observed density parameters, and explain what the resulting expansion history predicts for the universe's fate.

## Sources of truth

- Carroll & Ostlie, *An Introduction to Modern Astrophysics* (primary; the comprehensive standard, "BOB")
- Maoz, *Astrophysics in a Nutshell* (order-of-magnitude physical reasoning, the level and spirit of this course)
- Kippenhahn & Weigert, *Stellar Structure and Evolution* (stellar interiors); Binney & Tremaine, *Galactic Dynamics* (galaxies)
- Ryden, *Introduction to Cosmology* (the cosmology modules); Shapiro & Teukolsky, *Black Holes, White Dwarfs, and Neutron Stars* (compact objects)

## Notes

- This is the terminal capstone of the roadmap: it depends on `stat-mech`, `relativity`, and `quantum-mechanics` (all Tier 2) plus `mechanics-refresher` and `em-refresher`, and it deliberately re-uses their results rather than re-deriving. Explicit reused bridges: the `stat-mech` Fermi-gas / Chandrasekhar computation (Boss 4), the blackbody/photon gas (1.2, 6.3), the Saha equation (1.3), quantum tunneling and the Gamow peak (2.3), and the `relativity` FLRW/Friedmann equations and Schwarzschild/TOV structure (Modules 4 and 6).
