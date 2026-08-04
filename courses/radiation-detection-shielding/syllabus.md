# Radiation Detection & Shielding — Syllabus

> Engineering · Tier 2 · ~20 lessons · Prereqs: [intro-nuclear-engineering](../intro-nuclear-engineering/syllabus.md) · Roadmap id: `radiation-detection-shielding`

## Goal

Turn "radiation exists" into "I can measure it, read the spectrum, quote the dose with an uncertainty, and design a shield to a target." You'll trace each radiation type from how it deposits energy, through the detector that turns that energy into a pulse, to the counting statistics and dosimetry that make a number defensible — and finish able to size a shield with buildup. It deliberately skips the internals of Monte-Carlo transport codes (you'll use point-kernel hand methods instead) and the depth of medical-physics treatment planning.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute the Compton edge, backscatter peak, and total attenuation coefficient for a given photon energy, and say which interaction dominates
- [ ] Estimate a charged particle's range from its stopping power, and explain the Bragg peak
- [ ] Predict a gas detector's behavior from the applied-voltage region (ionization / proportional / Geiger–Müller)
- [ ] Choose between NaI, HPGe, and a semiconductor for a stated measurement and defend it on resolution vs efficiency
- [ ] Propagate Poisson counting uncertainty through a net-count and dead-time correction
- [ ] Read a gamma spectrum — identify photopeak, Compton continuum, escape and backscatter peaks — and energy-calibrate it
- [ ] Compute the minimum detectable activity (Currie MDA) for a counting setup
- [ ] Convert between absorbed dose, kerma, equivalent dose, and effective dose using $w_R$ and $w_T$
- [ ] Estimate the dose rate at a distance from a point gamma source using its dose-rate constant
- [ ] Distinguish deterministic from stochastic effects and apply the LNT model to a risk estimate
- [ ] Size an attenuation shield including the buildup factor, and design a neutron shield combining moderation and capture
- [ ] Apply time–distance–shielding and ALARA to bring an exposure under a regulatory limit

## Modules

### Module 1: Radiation interactions & detector physics

How each radiation type dumps its energy, and the three detector families that convert that energy into a countable pulse.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Photon interactions I: photoelectric & Compton | Compute cross-section trends and the Compton-scattered energies | photoelectric $\propto Z^n/E^3$, Compton kinematics, Compton edge, backscatter |
| 1.2 | Photon interactions II: pair production & total attenuation | Combine the three processes into one attenuation coefficient | pair production threshold, $\mu$ vs $\mu/\rho$, dominance-by-energy map |
| 1.3 | Charged particles: stopping power & range | Estimate energy loss and range; explain the Bragg peak | Bethe stopping power, specific ionization, CSDA range, Bragg peak |
| 1.4 | Neutron interactions: scattering & capture | Predict neutron behavior from cross sections and energy | elastic/inelastic scatter, $(n,\gamma)$ capture, $1/v$ law, thermalization |
| 1.5 | Gas-filled detectors | Map applied voltage to the ionization / proportional / GM regions | ion pairs, gas multiplication, the six-region curve, quenching |
| 1.6 | Scintillation & semiconductor detectors | Trace a pulse from light/charge to signal; compare detector materials | scintillator + PMT, band gap & e–h pairs, NaI vs HPGe, pulse formation |

**Boss problem 1:** A 2.00 MeV gamma enters a detector. (a) Find the Compton-edge electron energy and the backscatter-photon energy. (b) Show it exceeds the pair-production threshold and give the kinetic energy shared by the electron–positron pair. (c) You must resolve this line from a 1.78 MeV neighbor — choose between a 3″ NaI(Tl) and a coaxial HPGe detector, and justify the pick on resolution, efficiency, and the escape peaks each will show.

### Module 2: Counting statistics & spectroscopy

Every count is a random draw; this module turns raw pulses into calibrated energies and defensible numbers with error bars.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Counting statistics I: Poisson & Gaussian | Attach the right uncertainty to a raw count | Poisson $\sigma=\sqrt{N}$, Gaussian limit, confidence intervals |
| 2.2 | Counting statistics II: propagation & dead time | Propagate error through nets/rates and correct for dead time | error propagation, net = gross − background, paralyzable vs non-paralyzable dead time |
| 2.3 | Energy resolution & pulse-height spectra | Quantify resolution and read a pulse-height distribution | FWHM, resolution %, Fano factor, MCA channels |
| 2.4 | Gamma-ray spectroscopy | Identify every feature in a spectrum and energy-calibrate it | photopeak, Compton continuum, single/double-escape, sum & backscatter peaks, calibration line |
| 2.5 | Efficiency & detection limits | Compute activity from counts and the minimum detectable activity | absolute/intrinsic efficiency, branching ratio, Currie critical level & MDA |

**Boss problem 2:** A 1332 keV Co-60 photopeak sits on a Compton background. You record 4,000 gross counts in the peak region and 900 counts in an equal-width background region over a 300 s live-time count, with detector full-energy efficiency 2.0% and a 99.9% gamma yield. (a) Net counts and its $1\sigma$ uncertainty. (b) Source activity in Bq with uncertainty. (c) The Currie MDA (in Bq) for this geometry and count time. (d) If the true count rate were 5,000 s⁻¹ with a 5 μs non-paralyzable dead time, what observed rate would you see?

### Module 3: Dosimetry & biological effects

From "energy deposited" to "harm to tissue": the chain of dose quantities and the biology that motivates the weighting factors.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Absorbed dose, kerma & exposure | Define and relate the fundamental energy-deposition quantities | absorbed dose (Gy), kerma, exposure (R), charged-particle equilibrium |
| 3.2 | Equivalent & effective dose | Weight dose for radiation type and organ sensitivity | $w_R$, equivalent dose (Sv), $w_T$, effective dose, committed dose |
| 3.3 | Dose from a source | Compute dose rate at a distance from an external source | dose-rate constant $\Gamma$, inverse-square, flux-to-dose conversion |
| 3.4 | Biological effects & risk | Separate deterministic from stochastic effects and estimate risk | deterministic thresholds, stochastic/LNT, risk coefficients, ALARA rationale |

**Boss problem 3:** A 5.0 mCi Co-60 point source (dose-rate constant $\Gamma \approx 1.29\ \mathrm{mGy\cdot m^2\,h^{-1}\,GBq^{-1}}$, air-kerma basis) sits on a bench. (a) Unshielded whole-body dose rate at 1.5 m. (b) The equivalent-dose rate — and why $w_R$ leaves it essentially unchanged here. (c) Working time at that distance before a worker reaches a 1 mSv weekly limit. (d) Is the acute exposure deterministic or stochastic, and roughly what added lifetime cancer risk does a 1 mSv effective dose imply under LNT?

### Module 4: Shielding design & health physics

Putting material between source and person — attenuation with buildup for photons, moderation-plus-capture for neutrons — under the discipline of ALARA and legal limits.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Exponential attenuation & HVL | Size a narrow-beam shield and use half/tenth-value layers | $I=I_0 e^{-\mu x}$, HVL/TVL, mass thickness, mixtures |
| 4.2 | Buildup factors | Correct a broad-beam shield for scattered photons | broad vs narrow beam, buildup factor $B$, Taylor/Berger forms |
| 4.3 | Point-kernel method | Compute dose from distributed and shielded sources by superposition | point-kernel superposition, line/volume sources, self-absorption |
| 4.4 | Neutron moderation & shielding | Design a neutron shield that slows then captures | lethargy, moderating ratio, thermal capture, hydrogenous shields + absorbers, secondary gammas |
| 4.5 | Health physics, ALARA & limits | Bring an exposure under limit using time, distance, and shielding | time–distance–shielding, occupational/public limits, dose budgeting, ALARA optimization |

**Boss problem 4:** You must reduce the unshielded 1332 keV Co-60 dose rate from Boss problem 3 by a factor of 100 with a lead shield ($\mu \approx 0.0576\ \mathrm{mm^{-1}}$ at this energy; take buildup factor $B\approx 3$ at the resulting thickness). (a) Required lead thickness ignoring buildup. (b) Re-solve including buildup and comment on how many extra HVLs it costs. (c) The source also emits fast neutrons — outline a two-layer shield (name the materials and the job of each) and explain the secondary-gamma penalty. (d) State one time-and-distance change that would cut the needed lead in half.

## Sources of truth

- Knoll, *Radiation Detection and Measurement* — detector physics, statistics, and spectroscopy conventions
- Turner, *Atoms, Radiation, and Radiation Protection* — interaction physics and dosimetry
- Cember & Johnson, *Introduction to Health Physics* — dose quantities, shielding hand-calculations, ALARA
- ICRP 103 — radiation and tissue weighting factors ($w_R$, $w_T$), effective-dose framework
