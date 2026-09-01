# Geophysics — Syllabus

> Earth & Space · Tier 2 · ~33 lessons · Prereqs: [mechanics-refresher](../mechanics-refresher/syllabus.md), [pdes](../pdes/syllabus.md) · Roadmap id: `geophysics`

## Goal

Read the Earth as a physics problem: infer its layered structure, thermal state, rheology and dynamics from the signals it leaks to the surface — seismic waves, gravity, magnetism, and heat. You will move fluently between the four classical "windows" (elastic, gravitational, magnetic, thermal), quantifying each with the wave equation, potential theory and diffusion you already own from [`pdes`](../pdes/syllabus.md); then go inward to the deep Earth, where free oscillations and mineral physics supply the density and phase structure that travel times alone cannot; and finish with the method that underlies all of it — the inverse problem — and the applied surveying that pays for the field.

Deliberately skipped: instrumentation and sensor engineering, computational seismology as code (we reason with scalings and closed forms), earthquake *statistics* and hazard engineering (owned by [`geology`](../geology/syllabus.md) 2.7), and everything about other planets ([`planetary-science`](../planetary-science/syllabus.md)). This is the quantitative companion to `geology`: every place that course said "the numbers live in geophysics," they live here.

## Scope discipline

This course sits downstream of six built courses and is cited by name roughly forty times
from [`geology`](../geology/syllabus.md). Each topic has **one owner**; a ceded topic is used
freely here and cited to its owner rather than re-derived. See the reference card's
"Assumed, not taught here" table.

| Topic | Owner | This course's role |
|---|---|---|
| Ocean tides — tidal potential, equilibrium tide, dynamical response, the 3.5 TW dissipation budget | [oceanography 5.3](../oceanography/lessons/05-03-tides-equilibrium-dynamical.md) | 2.5 owns the **solid** Earth's response: Love numbers, the body tide, loading, and rotational wobbles |
| Earthquake statistics and hazard — Gutenberg–Richter, $b$-values, recurrence, intensity, ground motion | [`geology`](../geology/syllabus.md) 2.7 | 1.6–1.7 own the **source physics**: moment tensor, stress drop, rupture scaling, static triggering |
| Minerals, rocks, structural geology, plate boundaries as field objects, dating practice | [`geology`](../geology/syllabus.md) | used freely and cited; this course runs no descriptive-geology lesson |
| Least squares, normal equations, conditioning, the SVD | [numerical-analysis 5.1](../numerical-analysis/lessons/05-01-least-squares-normal-equations.md), [3.2](../numerical-analysis/lessons/03-02-cholesky-conditioning.md) | 6.1 owns the **geophysical** inverse problem: damping, resolution, the null space |
| Stress and strain tensors, elastic moduli, Mohr's circle | [mechanics-of-materials 1.1](../mechanics-of-materials/lessons/01-01-normal-shear-stress.md), [4.2](../mechanics-of-materials/lessons/04-02-mohrs-circle.md), [materials-science 4.1](../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) | 1.1 owns the tensor form and the two-modulus reduction that seismic speeds require |
| Creep mechanisms — diffusion vs dislocation, Arrhenius temperature dependence | [materials-science 4.2](../materials-science/lessons/04-02-plastic-deformation-schmid.md), [4.4](../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md) | 4.6 owns mantle viscosity as a **measured**, depth-varying number |
| The wave equation, d'Alembert solutions, dispersion, normal modes of a bounded domain | [`pdes`](../pdes/syllabus.md), [waves-optics](../waves-optics/syllabus.md) | 1.3 and 5.1 apply them to a self-gravitating elastic sphere |
| The heat equation, the semi-infinite solid, penetration depth $\sqrt{\kappa t}$ | [`pdes`](../pdes/syllabus.md), [heat-transfer 2.2](../heat-transfer/lessons/02-02-semi-infinite-solid.md) | 4.1 and 4.3 own the geotherm and seafloor cooling |
| Rayleigh–Bénard instability, Stokes flow, boundary layers | [fluid-dynamics 4.3](../fluid-dynamics/lessons/04-03-instability-kh-rb.md), [3.3](../fluid-dynamics/lessons/03-03-stokes-flow.md), [3.4](../fluid-dynamics/lessons/03-04-boundary-layers.md) | 4.4 owns the mantle's Rayleigh number and its boundary-layer scalings |
| Maxwell's equations, magnetic diffusion, skin depth | [`em-refresher`](../em-refresher/syllabus.md), [plasma-physics 3.2](../plasma-physics/lessons/03-02-ideal-mhd-frozen-flux.md) | 3.2 owns the geodynamo; 6.3 owns electromagnetic sounding of the Earth |
| The radioactive decay law | [intro-nuclear-engineering 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) | 4.2 owns the radiogenic heat budget |
| Satellite altimetry, GRACE as an **ocean** instrument | [oceanography 6.5](../oceanography/lessons/06-05-observing-the-ocean.md) | 2.7 owns time-variable gravity as a solid-Earth and cryosphere method |
| Differentiation, planetary thermal evolution, impact history, comparative planetology | [`planetary-science`](../planetary-science/syllabus.md) | cited; this course is Earth-only |
| Fourier transforms, sampling, filtering, spectral estimation | [`fourier-analysis`](../fourier-analysis/syllabus.md), [`signals-systems`](../signals-systems/syllabus.md) | used as a tool in 5.1 and 6.2, never re-derived |
| **Seismic wave physics, source theory, gravity and the geoid, geomagnetism, heat flow and convection, the deep Earth, geophysical inversion** | **this course** | — |

## Dangerous Checklist

When you finish, you can:

- [ ] Write the stress and strain tensors for a deforming rock and reduce Hooke's law to two moduli
- [ ] Classify a seismogram's arrivals (P, S, Rayleigh, Love) and explain each wave's particle motion and why it travels at the speed it does
- [ ] Locate an earthquake and estimate its epicentral distance from S–P times, and read structure off a travel-time curve
- [ ] Apply Snell's law and the ray parameter to trace a ray through a layered Earth and explain the core shadow zone
- [ ] Compute a seismic moment and moment magnitude $M_w$ from fault geometry, slip, and rigidity, and read a focal mechanism
- [ ] Estimate a stress drop and a rupture duration, and say why big earthquakes are long rather than strong
- [ ] Reduce a gravity reading to free-air and Bouguer anomalies and say what each correction removes
- [ ] Solve an Airy or Pratt isostasy problem for root depth or compensation, and predict the anomaly signature of a compensated load
- [ ] Explain the geoid as an equipotential surface and relate its undulations to density structure
- [ ] Compute a flexural parameter and decide whether a load is supported by a root or by plate strength
- [ ] Separate the solid Earth's tidal response from the ocean's, and use Love numbers to say how much the ground moves
- [ ] Read a plate velocity off a GNSS time series, an interseismic strain rate off an InSAR interferogram, and an ice-mass loss off time-variable gravity
- [ ] Compute the main dipole field's elements (inclination, declination) at a point and describe the geodynamo qualitatively
- [ ] Read paleolatitude from fossil inclination and a spreading rate from seafloor magnetic stripes
- [ ] Compute a plate velocity from an Euler pole and test a triple junction for stability
- [ ] Build a steady-state geotherm from Fourier's law with radiogenic heat, and estimate ocean-floor age from half-space cooling
- [ ] Estimate the mantle's Rayleigh number and argue whether — and how vigorously — it convects
- [ ] Name the plate driving forces and rank their contributions with order-of-magnitude estimates
- [ ] Extract a mantle viscosity from a post-glacial rebound history and say which depth range it applies to
- [ ] Use free oscillations, the total mass and the moment of inertia to constrain the Earth's density profile
- [ ] Apply the Adams–Williamson equation, and recognize when a density jump demands a phase change instead
- [ ] Explain the 410 and 660 discontinuities as mineral phase transitions and predict how a Clapeyron slope deflects them in a slab
- [ ] Interpret a low-$Q$ region as hot or partially molten, and read mantle flow direction from shear-wave splitting
- [ ] Set up a linear inverse problem, damp it, and state honestly what the resolution matrix and the null space allow you to claim
- [ ] Convert a reflection section from two-way time to depth, correct for normal moveout, and say what migration fixes
- [ ] Choose an electrical or electromagnetic method for a target at a given depth, and compute a skin depth

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
| 1.7 | Rupture physics & source scaling | Estimate stress drop and duration, and explain how earthquakes scale | stress drop $\Delta\sigma$, rupture velocity, corner frequency, self-similarity, directivity, Coulomb triggering |

**Boss problem 1:** A shallow earthquake gives a P arrival at 10:00:30 and an S arrival at 10:00:55 at one station, with crustal $v_p=6.0$ km/s and $v_p/v_s=\sqrt{3}$. (a) Find the epicentral distance. (b) The rupture broke a patch 10 km × 5 km with mean slip 0.5 m in crust of rigidity $\mu=30$ GPa; compute the seismic moment $M_0$ and moment magnitude $M_w$. (c) Estimate the static stress drop using $\Delta\sigma \approx \mu\bar{d}/W$ with $W$ the fault width, and say whether the answer is typical. (d) With a rupture velocity of $0.8\,v_s$, estimate how long the rupture lasted, and explain why a magnitude-9 event lasts minutes rather than being proportionally "stronger". *(Answers: ~205 km; $M_0\approx7.5\times10^{17}$ N·m, $M_w\approx5.9$; $\Delta\sigma\approx3$ MPa, squarely typical; ~3.6 s.)*

### Module 2: Gravity, the figure of the Earth & geodesy

The Earth's shape and its gravity are the same fact seen two ways. Reduce raw gravity to anomalies, use them to weigh the crust, map the geoid, let the plate bend, and finish with the space geodesy that now measures all of it in real time.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The figure of the Earth | Explain why the Earth is an ellipsoid and write normal gravity | geopotential, reference ellipsoid, centrifugal term, normal gravity formula |
| 2.2 | Gravity anomalies & reductions | Reduce a reading to free-air and Bouguer anomalies | latitude correction, free-air correction, Bouguer slab, terrain correction |
| 2.3 | Isostasy: Airy & Pratt | Compute crustal roots / density compensation for a load | Airy roots, Pratt density columns, compensation depth, local vs regional compensation |
| 2.4 | The geoid | Read the geoid as an equipotential and link undulations to density | equipotential surface, geoid height $N$, Bruns' relation, mass anomalies |
| 2.5 | Solid-Earth tides & rotation | Separate the body tide from the ocean tide and track the Earth's wobbles | tidal potential, Love numbers $h,k,l$, body tide, loading, Chandler wobble, precession, length-of-day |
| 2.6 | Flexure of the lithosphere | Decide whether a load is held up by a root or by plate strength | thin elastic plate, flexural rigidity $D$, elastic thickness $T_e$, flexural parameter $\alpha$, forebulge, seamount moats |
| 2.7 | Space geodesy | Measure plate motion, strain and mass change from orbit | GNSS time series, InSAR interferograms, satellite altimetry, time-variable gravity (GRACE), reference frames |

**Boss problem 2:** A plateau of height $h=5$ km sits on crust of density $\rho_c=2800$ kg/m³ over mantle $\rho_m=3300$ kg/m³. (a) Using Airy isostasy, find the depth of its compensating root. (b) State the signs and rough magnitude of the free-air and Bouguer anomalies expected over the (fully compensated) plateau interior, justifying each. (c) The lithosphere has elastic thickness $T_e=25$ km, $E=70$ GPa, $\nu=0.25$; compute the flexural rigidity and the flexural parameter $\alpha=(4D/\Delta\rho\,g)^{1/4}$, and state the load width below which Airy isostasy fails. (d) A GNSS station on the plateau shows 8 mm/yr of horizontal motion relative to the stable interior; name two distinct processes that could produce it and one observation that would tell them apart. *(Answers: root $\approx 28$ km; free-air $\approx 0$, Bouguer $\approx -590$ mGal; $D\approx9.7\times10^{22}$ N·m, $\alpha\approx59$ km, so loads narrower than roughly $\alpha$ are plate-supported.)*

### Module 3: Geomagnetism, paleomagnetism & plate kinematics

The field the core generates, the tape recorder rocks make of it, and the rigid-plate geometry that recording revealed.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The main field | Compute the field elements of the geocentric dipole at any point | dipole potential, inclination/declination/intensity, $\tan I = 2\tan\lambda$, IGRF, secular variation |
| 3.2 | The geodynamo | Explain qualitatively why a convecting, rotating iron core makes a field | magnetic Reynolds number, induction equation, Coriolis, why dipole-dominant, reversals |
| 3.3 | Paleomagnetism | Recover ancient pole positions from rock magnetization | remanent magnetization, blocking temperature, apparent polar wander, paleolatitude |
| 3.4 | Magnetic anomalies & reversals | Date the seafloor and measure spreading from magnetic stripes | Vine–Matthews, reversal timescale, magnetostratigraphy, spreading rate |
| 3.5 | Plate kinematics on a sphere | Compute plate velocities from an Euler pole and test a triple junction | Euler's theorem, rotation poles, $v=\omega R\sin\theta$, relative vs absolute motion, velocity triangles, triple-junction stability |

**Boss problem 3:** (a) Ancient lava at a site records a stable magnetic inclination $I=45°$. Using the dipole relation, find the paleolatitude of the site when it formed. (b) On a seafloor magnetic profile the Brunhes–Matuyama boundary (0.78 Ma) lies 20 km from the ridge axis. Find the half-spreading rate in cm/yr. (c) Two plates rotate about a common Euler pole at $\omega=0.5°$/Myr. Find the relative velocity at a point $60°$ of arc from the pole, and at a point $10°$ from it. (d) Explain why the *same* boundary can be a spreading ridge at one end and a transform at the other without any change in $\omega$. *(Answers: $\lambda\approx26.6°$; ~2.6 cm/yr; ~4.8 cm/yr and ~0.97 cm/yr.)*

### Module 4: Heat flow, rheology & geodynamics

The engine and its exhaust. Set up the geotherm by conduction, fuel it with radiogenic heat, cool the ocean floor as it ages, let the whole mantle convect, identify what actually pushes the plates — then measure the viscosity that sets the pace.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Conduction & the geotherm | Build a steady-state temperature-depth profile from Fourier's law | Fourier's law, heat-conduction equation, thermal conductivity, boundary conditions |
| 4.2 | Radiogenic heat & the heat budget | Account for the Earth's heat output and its sources | radiogenic heating $A$, geotherm with sources, surface heat flux, secular cooling, the Urey ratio |
| 4.3 | Cooling of the oceanic lithosphere | Predict seafloor depth and heat flow versus age | half-space cooling, diffusion length, $\sqrt{t}$ subsidence, plate model |
| 4.4 | Mantle convection & the Rayleigh number | Decide whether a fluid layer convects, and how vigorously | buoyancy vs diffusion, Rayleigh number, critical $Ra$, boundary layers, Nusselt number |
| 4.5 | Plate driving forces | Rank the forces that move plates by order of magnitude | ridge push, slab pull, basal drag, force balance on a plate |
| 4.6 | Mantle rheology & post-glacial rebound | Extract a mantle viscosity from the Earth's response to an ice load | Maxwell time, viscous relaxation, relaxation time $\tau=4\pi\eta/(\rho g\lambda)$, glacial isostatic adjustment, depth-varying viscosity |

**Boss problem 4:** Take mantle values $g=10$ m/s², thermal expansivity $\alpha=2\times10^{-5}$ K⁻¹, diffusivity $\kappa=10^{-6}$ m²/s, kinematic viscosity $\nu=10^{17}$ m²/s. (a) Oceanic lithosphere thickens as a cooling half-space; estimate the age at which its thermal thickness reaches $L=100$ km. (b) For a whole-mantle layer $d=2900$ km with $\Delta T=3000$ K, compute the Rayleigh number and state whether it convects ($Ra_c\sim10^3$). (c) Fennoscandia is still rebounding with a relaxation time of about 4400 yr over a load wavelength of 3000 km; using $\tau=4\pi\eta/(\rho g\lambda)$ with $\rho=3300$ kg/m³, find the mantle viscosity $\eta$, convert it to a kinematic viscosity, and compare it with the value assumed in (b). (d) State one reason the two disagree, and which depth range each is really sampling. *(Answers: ~80 Myr; $Ra\approx1.5\times10^8$, vigorously convecting; $\eta\approx1.1\times10^{21}$ Pa·s, $\nu\approx3\times10^{17}$ m²/s — the same to within a factor of three.)*

### Module 5: The deep Earth

Travel times give velocity, not density, and a velocity jump is not the same fact as a composition change. This module supplies what Module 1 could not: the free oscillations, mineral physics, and anelasticity that turn a velocity model into a planet.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Free oscillations & the Earth's density | Constrain density with modes, total mass, and moment of inertia | normal modes ${}_nS_l$, ${}_nT_l$, the 54-minute mode, mass and $C/MR^2$ constraints, Adams–Williamson, PREM |
| 5.2 | Mineral physics & the transition zone | Explain the 410 and 660 as phase changes, not composition changes | olivine → wadsleyite → ringwoodite → bridgmanite, Clapeyron slope, adiabat vs geotherm, slab deflection |
| 5.3 | Attenuation & anelasticity | Read temperature and melt from how fast a wave dies | quality factor $Q$, $Q_\mu$ vs $Q_\kappa$, physical dispersion, the asthenosphere's low-$Q$ signature |
| 5.4 | The core | Assemble the outer core, the inner core, and the dynamo's power supply | liquid outer core, inner-core growth, latent heat and gravitational energy, core heat flow, D″, the light-element problem |
| 5.5 | Anisotropy & mantle flow | Turn shear-wave splitting into a flow direction | lattice-preferred orientation of olivine, SKS splitting, fast axis and delay time, radial vs azimuthal anisotropy |

**Boss problem 5:** (a) At the top of the lower mantle $v_p=11.0$ km/s, $v_s=6.2$ km/s, $\rho=4400$ kg/m³ and $g=10$ m/s². Compute the seismic parameter $\Phi = v_p^2-\tfrac{4}{3}v_s^2$ and use the Adams–Williamson equation $d\rho/dr = -\rho g/\Phi$ to find the density increase over the next 100 km of depth. (b) Across the 660 km discontinuity density jumps by about 5 percent in under 5 km. Show that self-compression cannot do this, and name what does. (c) Model the Earth as a uniform core of radius 3480 km inside a uniform mantle, with mean density 5515 kg/m³ and moment-of-inertia factor $C/MR^2=0.3307$; solve for the two densities. (d) The real mean core density is about 10,900 kg/m³ — state why the two-layer model overshoots, and what that says about the mantle. *(Answers: $\Phi\approx69.8$ km²/s², $\Delta\rho\approx+63$ kg/m³ per 100 km; $\rho_\text{core}\approx1.25\times10^4$, $\rho_\text{mantle}\approx4.15\times10^3$ kg/m³.)*

### Module 6: Inversion & applied geophysics

Every result in this course is an inference from an incomplete dataset. Make that explicit — then see how the same physics is turned into surveys that find oil, water, ore and archaeology.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | The linear inverse problem | Set up, damp, and honestly report a geophysical inversion | forward vs inverse problem, $\mathbf{Gm}=\mathbf{d}$, over/under-determined systems, damped least squares, resolution matrix, the null space, non-uniqueness |
| 6.2 | Reflection seismics | Turn a reflection section into a picture of the subsurface | two-way travel time, common midpoint gathers, normal moveout, stacking velocity, migration, resolution and the Fresnel zone |
| 6.3 | Electrical & electromagnetic methods | Choose a method for a target at a given depth | resistivity sounding, apparent resistivity, induced polarization, skin depth, magnetotellurics, ground-penetrating radar |

**Boss problem 6:** (a) A 2×2 grid of cells is crossed by four straight rays: one along each row and one along each column, each ray of length $L$ per cell. Write the $4\times4$ matrix $\mathbf{G}$ relating the four slownesses to the four travel times, show that it is rank 3, and identify the null vector. Say in words what structure the survey cannot see, and what one extra ray would fix it. (b) A flat reflector lies at 1000 m depth above a half-space of velocity 2000 m/s. Compute the zero-offset two-way time, the arrival time at 800 m offset, and the normal moveout; then invert your own numbers to recover the velocity. (c) You need to image a conductive body at 50 km depth in 100 Ω·m crust. Using the magnetotelluric skin depth $\delta\approx503\sqrt{\rho/f}$ metres, find the period you must record, and explain why ground-penetrating radar is useless here. *(Answers: null vector $(1,-1,-1,1)$ — the checkerboard; $t_0=1.000$ s, $t(x)=1.077$ s, NMO $=77$ ms, $V=2000$ m/s; $f=0.01$ Hz, i.e. 100 s period.)*

## Sources of truth

- **Fowler, *The Solid Earth*** — overall scope, notation, and rigor level for the whole-Earth view; Module 3's plate kinematics follows its treatment.
- **Stein & Wysession, *An Introduction to Seismology, Earthquakes, and Earth Structure*** — Modules 1 and 5 conventions (wave types, travel times, source theory, normal modes, anisotropy) and Module 6's inverse-theory chapter.
- **Turcotte & Schubert, *Geodynamics*** — Modules 2 and 4 (isostasy, flexure, heat conduction, convection, Rayleigh number, viscous rebound).
- **Lowrie, *Fundamentals of Geophysics*** — gravity reductions, geomagnetism, and the applied methods of Module 6.
- **Dziewonski & Anderson (1981), PREM** — the reference density and velocity model quoted throughout Module 5.

---

*Syllabus revision (2026-08-31):* extended from 21 lessons and 4 modules to 33 lessons
and 6, after a review against the four Earth & Space siblings that had already been
expanded to 29–30. **All existing lesson numbers were preserved**, because
[`geology`](../geology/syllabus.md) is built and cites geophysics 1.1–1.6, 2.3, 2.5,
3.2, 3.3–3.4 and 4.1–4.5 about forty times; every addition is an append or a new module.

The substantive gaps closed: **inverse theory**, which the old Goal explicitly waived
even though it is the method of the entire subject and 1.5 hand-waved tomography without
it (now 6.1); **density**, which Module 1 claimed to recover from travel times when
travel times give only velocity — free oscillations, the mass and moment-of-inertia
constraints and Adams–Williamson are now 5.1; **mineral physics** of the 410 and 660,
which `geology` 5.1 already names and points here for (5.2); **flexure**, which
`geology` 2.6 links to 2.3 as "the quantitative treatment" although 2.3 listed it only as
"flexure idea" (now 2.6); **post-glacial rebound**, absent from the entire repository
despite being the classic measurement of the viscosity that 4.4 simply assumed (4.6);
**space geodesy**, leaving Module 2 otherwise stranded in 1965 (2.7); and **plate
kinematics on a sphere** — Euler poles and triple junctions — which no course owned
(3.5). Attenuation (5.3), the core's energy budget (5.4) and anisotropy (5.5) complete
the deep-Earth module.

Old 4.6, "A taste of exploration geophysics," carried reflection seismics, gravity
surveying, magnetic surveying and resolution in one 15-minute lesson; it is now 6.2 and
6.3, and its number was reused for mantle rheology. Old 2.5 duplicated
[oceanography 5.3](../oceanography/lessons/05-03-tides-equilibrium-dynamical.md), which
is built and owns the tidal potential, the equilibrium tide, the dynamical response and
the length-of-day argument; 2.5 is now the **solid**-Earth response only. Earthquake
statistics and hazard were ceded to `geology` 2.7, which owns Gutenberg–Richter properly,
and 1.7 was added to own the source physics `geology` cannot. The Scope discipline table
is new, and reciprocates the one `geology` already carries.
