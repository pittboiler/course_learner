# Cosmology — Syllabus

> Physics · Tier 2 · ~20 lessons · Prereqs: [relativity](../relativity/syllabus.md) · Roadmap id: `cosmology`

## Goal

Turn the FLRW-and-Friedmann coda of `relativity` into a working theory of the actual universe — its expansion, contents, history, and origin. You will model the expanding universe (Hubble's law, cosmological redshift, the cosmic distance measures), read the cosmic energy budget of the $\Lambda$CDM concordance model (matter, radiation, curvature, dark energy) off the Friedmann equations, run the thermal history forward from a hot Big Bang through freeze-out, nucleosynthesis, and recombination, and explain the two great fossils that pin the model down: the light-element abundances and the cosmic microwave background with its acoustic peaks. You will then track how tiny density ripples grow by gravitational instability into galaxies (the matter power spectrum, the case for dark matter), and see how cosmic inflation both fixes the horizon and flatness problems and seeds those ripples in the first place — closing with dark energy, cosmic acceleration, and a taste of the distance ladder that measures it all. Deliberately kept lighter: the full general-relativistic (gauge-dependent) perturbation theory — we work the Newtonian and physical-intuition versions — and the specialist's CMB-analysis and Boltzmann-code machinery (we read the physics of the power spectrum, not compute it numerically). A tier-2 course: it assumes `relativity`'s fluency with the FLRW metric, the scale factor, and the Friedmann equations, and leans on thermal/statistical reasoning (Boltzmann factors, equilibrium distributions) at the level a physics degree supplies.

## Dangerous Checklist

When you finish, you can:

- [ ] State the cosmological principle and derive Hubble's law from it, distinguishing cosmic expansion from motion through space
- [ ] Relate redshift, scale factor, and lookback time, and compute comoving, luminosity, and angular-diameter distances from a given expansion history
- [ ] Write the Friedmann, fluid, and acceleration equations, and solve for $a(t)$ in the radiation-, matter-, and $\Lambda$-dominated eras
- [ ] Read the $\Lambda$CDM energy budget: track how each component's density scales with $a$, locate the equality epochs, and compute the age and fate of a given universe
- [ ] Run the thermal history: convert temperature to scale factor, count relativistic degrees of freedom, and decide when a species freezes out by comparing its reaction rate to $H$
- [ ] Estimate the primordial helium abundance from the neutron-to-proton freeze-out, and explain why the light elements are a baryometer
- [ ] Use the Saha equation to locate recombination and last scattering, and explain the origin and blackbody spectrum of the CMB
- [ ] Carry out a Jeans/linear-perturbation analysis and describe how density contrasts grow in the radiation, matter, and $\Lambda$ eras
- [ ] Marshal the evidence for dark matter (rotation curves, clusters, lensing, the CMB) and read the shape of the matter power spectrum
- [ ] Explain the physics of the CMB acoustic peaks and what their positions and heights measure about the universe
- [ ] State the horizon and flatness problems and show how inflation solves them and seeds a near-scale-invariant spectrum of primordial perturbations
- [ ] Explain the evidence for cosmic acceleration, characterize dark energy by its equation of state $w$, and sketch how the distance ladder measures $H_0$

## Modules

### Module 1: The expanding universe and the Friedmann equations

Build the kinematics and dynamics of a homogeneous, isotropic universe, then read its contents off the equations of motion.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The cosmological principle and Hubble's law | See why homogeneity + isotropy forces $v=Hd$ | cosmological principle, homogeneity/isotropy, Hubble's law, expansion vs. peculiar motion, Hubble time |
| 1.2 | The FLRW metric and comoving coordinates | Set up the geometry: one scale factor, one curvature | FLRW metric, scale factor $a(t)$, comoving vs. proper distance, spatial curvature $k$, Hubble parameter $H(t)$ |
| 1.3 | Redshift and cosmic distances | Turn "how far / how long ago" into observables | cosmological redshift, $1+z=a_0/a$, lookback time, comoving/luminosity/angular-diameter distance, the distance duality |
| 1.4 | The Friedmann, fluid, and acceleration equations | Get the universe's equations of motion and what drives them | Friedmann equation, fluid (continuity) equation, acceleration equation, equation of state $w=p/\rho c^2$, why $\Lambda$ accelerates |
| 1.5 | The cosmic energy budget and $\Lambda$CDM | Read the concordance model off the density parameters | critical density, $\Omega_m,\Omega_r,\Omega_k,\Omega_\Lambda$, $\rho\propto a^{-3(1+w)}$, equality epochs, era-by-era solutions for $a(t)$ |

**Boss problem 1:** For a flat universe of matter plus a cosmological constant ($\Omega_m+\Omega_\Lambda=1$), solve the Friedmann equation to show $a(t)\propto\sinh^{2/3}\!\big(\tfrac{3}{2}\sqrt{\Omega_\Lambda}\,H_0 t\big)$; find the redshift of matter–$\Lambda$ equality and the present age $t_0$ in terms of $H_0$, $\Omega_m$, $\Omega_\Lambda$, and evaluate both for $\Omega_m=0.3,\ \Omega_\Lambda=0.7$.

### Module 2: Thermal history and Big Bang nucleosynthesis

Run the clock backward to a hot, dense plasma and forward again through the freeze-outs that fixed the universe's composition.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The hot Big Bang and thermal equilibrium | Set up the plasma: temperature, species, and entropy | $T\propto 1/a$, equilibrium distributions, relativistic energy density, effective degrees of freedom $g_*$, entropy conservation |
| 2.2 | Decoupling and freeze-out | Decide when a reaction can no longer keep up with expansion | reaction rate $\Gamma$ vs. $H$, the freeze-out condition $\Gamma\sim H$, equilibrium vs. relic abundance, the Boltzmann-equation picture |
| 2.3 | Relics and the neutrino background | Track what falls out of equilibrium and survives | neutrino decoupling, $e^+e^-$ annihilation, $T_\nu/T_\gamma=(4/11)^{1/3}$, the cosmic neutrino background, WIMP relic-abundance taste |
| 2.4 | Big Bang nucleosynthesis | Forge the light elements and turn them into a measurement | neutron/proton ratio, the deuterium bottleneck, $^4$He mass fraction $Y_p$, D/H and the baryon density, abundances as a baryometer |

**Boss problem 2:** Take the neutron-to-proton ratio to freeze out at $T_f\approx0.8$ MeV with $\Delta m_{np}c^2=1.29$ MeV; compute $(n/p)$ at freeze-out from the Boltzmann factor, account for neutron decay until deuterium forms to get $(n/p)\approx1/7$, and show the primordial helium mass fraction is $Y_p=\tfrac{2(n/p)}{1+(n/p)}\approx0.25$.

### Module 3: The CMB and structure formation

The two observational pillars that turned cosmology into precision science — and the gravitational growth that links them.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Recombination and the origin of the CMB | Find where the universe turned transparent | Saha equation, recombination, last-scattering surface, photon decoupling, the CMB blackbody spectrum and its temperature |
| 3.2 | Gravitational instability and linear growth | Watch small overdensities grow — or fail to | Jeans length and mass, the linear growth equation, growing/decaying modes, growth suppressed in radiation and $\Lambda$ eras |
| 3.3 | Dark matter: the evidence and the candidates | Assemble the case that most matter is dark and cold | galaxy rotation curves, cluster masses, gravitational lensing, the Bullet Cluster, baryon budget, cold vs. hot dark matter |
| 3.4 | The matter power spectrum | Characterize the statistics of the cosmic density field | density contrast $\delta$, power spectrum $P(k)$, the transfer function and its turnover at matter–radiation equality, $\sigma_8$ |
| 3.5 | CMB anisotropies and acoustic oscillations | Understand the ripples in the microwave sky | primary anisotropies, Sachs–Wolfe effect, photon–baryon acoustic oscillations, the sound horizon, baryon loading |
| 3.6 | Reading the CMB power spectrum | Extract cosmology from the peak pattern | angular power spectrum $C_\ell$, the first peak and spatial flatness, peak-height ratios and $\Omega_b/\Omega_m$, damping tail, degeneracies |

**Boss problem 3:** Using the comoving sound horizon at last scattering ($r_s\approx150$ Mpc) and the comoving distance to it ($\approx14$ Gpc), estimate the angular scale $\theta_1$ of the first acoustic peak and the multipole $\ell_1\approx\pi/\theta_1$; show a spatially flat universe lands the peak near $1^\circ$ ($\ell_1\approx200$), and explain qualitatively how positive spatial curvature would shift it.

### Module 4: Inflation, dark energy, and observational cosmology

The origin of the initial conditions and the energy that is pulling the universe apart — plus how we measure any of it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The horizon and flatness problems | See why the hot Big Bang needs finely tuned initial conditions | particle horizon, causal patches at last scattering, the flatness fine-tuning, the relic (monopole) problem |
| 4.2 | The inflationary mechanism | Fix the problems with a burst of accelerated expansion | a slow-rolling scalar field, quasi–de Sitter expansion, slow-roll parameters $\epsilon,\eta$, e-folds $N$, graceful exit and reheating |
| 4.3 | Primordial perturbations from inflation | Stretch quantum fluctuations into the seeds of structure | quantum fluctuations of the inflaton, freezing at horizon crossing, near-scale-invariant spectrum, spectral index $n_s$, tensor modes |
| 4.4 | Dark energy and cosmic acceleration | Confront the evidence that expansion is speeding up | Type Ia supernovae, the accelerating universe, the cosmological constant, equation of state $w$, quintessence, the cosmological-constant problem |
| 4.5 | The cosmic distance ladder and observational cosmology | Rebuild $H_0$ rung by rung and meet the open puzzles | parallax, Cepheids, SNe Ia standard candles, BAO as a standard ruler, the Hubble tension, the pillars of precision cosmology |

**Boss problem 4:** For chaotic inflation with $V(\phi)=\tfrac12 m^2\phi^2$ (in units $M_\text{Pl}=1$), compute the slow-roll parameters $\epsilon$ and $\eta$, the number of e-folds $N(\phi)$ from field value $\phi$ to the end of inflation, and the field value giving $N=60$; then predict the spectral index $n_s=1-6\epsilon+2\eta$ at that value and compare with the observed $n_s\approx0.965$.

## Sources of truth

- Barbara Ryden, *Introduction to Cosmology* (primary; notation, level, and the physical-intuition-first approach)
- Scott Dodelson & Fabian Schmidt, *Modern Cosmology* (the perturbation theory, CMB, and structure-formation reference)
- Daniel Baumann, *Cosmology* (inflation and the modern pedagogical framing)
- Edward Kolb & Michael Turner, *The Early Universe* (thermal history and nucleosynthesis)

## Notes

- 2026-08-04: Course planned. 20 lessons across 4 modules, matching the roadmap estimate. FLRW/Friedmann get one fast module (1.2–1.5) rather than a from-scratch derivation, since `relativity`'s final module already builds them from the Einstein equations — this course treats that as prior knowledge and spends its budget on contents, thermal history, the CMB, structure, and inflation. Structure-formation lessons (3.2, 3.4) use the Newtonian/Jeans and heuristic-transfer-function treatment per the scope note (no full GR perturbation theory).
