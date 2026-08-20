# Radiation Detection & Shielding · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is one long chain: radiation deposits energy → a detector turns that
energy into carriers → carriers become a pulse, a spectrum, and a count with a
Poisson error bar → the count becomes an activity, then a dose, then a risk → and
a shield brings the dose back down. **Units are the whole game.** Most of what
goes wrong in this subject is a gray quoted as a sievert, a curie multiplied as a
becquerel, or a rate square-rooted as if it were a count — so the unit and
weighting-factor tables below are the part of this card you will open most.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $E$, $E'$ | incident photon energy; the same photon's energy after a Compton scatter | [1.1](lessons/01-01-photon-photoelectric-compton.md) |
| $\theta$ | photon deflection angle in a Compton scatter ($180^\circ$ = straight back) | [1.1](lessons/01-01-photon-photoelectric-compton.md) |
| $m_ec^2$ | electron rest energy, $0.511$ MeV — the constant that sets every escape and annihilation feature | [1.1](lessons/01-01-photon-photoelectric-compton.md) |
| $T$, $T_{\max}$ | recoil-electron energy; its maximum, which is the Compton edge | [1.1](lessons/01-01-photon-photoelectric-compton.md) |
| $Z$, $A$ | atomic number (how many electrons/how strong the nuclear field); mass number | [1.1](lessons/01-01-photon-photoelectric-compton.md) |
| $\sigma$ | cross section — effective target area per atom or nucleus, quoted in barns | [1.1](lessons/01-01-photon-photoelectric-compton.md) |
| $\mu$ | linear attenuation coefficient — chance per unit length a photon is removed | [1.2](lessons/01-02-photon-pair-production-total-attenuation.md) |
| $\mu/\rho$ | mass attenuation coefficient — the same thing per gram, so it ignores packing | [1.2](lessons/01-02-photon-pair-production-total-attenuation.md) |
| $w_i$ | mass fraction of ingredient $i$ in a mixture | [1.2](lessons/01-02-photon-pair-production-total-attenuation.md) |
| $S = -\,dE/dx$ | stopping power — MeV a charged particle sheds per cm of material | [1.3](lessons/01-03-charged-particles-stopping-power-range.md) |
| $z$, $v$ | the projectile's charge number and speed (not the target's) | [1.3](lessons/01-03-charged-particles-stopping-power-range.md) |
| $\rho x$ | mass thickness (g/cm²) — a slab weighed per unit area instead of measured | [1.3](lessons/01-03-charged-particles-stopping-power-range.md) |
| $W$ | mean energy spent per ion pair in a gas, about 30 eV | [1.3](lessons/01-03-charged-particles-stopping-power-range.md) |
| $R_{\text{CSDA}}$ | range — how far the particle gets before stopping | [1.3](lessons/01-03-charged-particles-stopping-power-range.md) |
| $f_{\max}$ | largest fraction of its energy a neutron can lose in one elastic hit | [1.4](lessons/01-04-neutron-interactions.md) |
| $\sigma_a$, $\sigma_0$ | absorption cross section; its value at thermal energy ($0.025$ eV) | [1.4](lessons/01-04-neutron-interactions.md) |
| $N_0$, $M$ | primary ion pairs made by one event; the gas multiplication (gain) applied to them | [1.5](lessons/01-05-gas-filled-detectors.md) |
| $\tau$ | dead time — how long the detector is blind after a pulse | [1.5](lessons/01-05-gas-filled-detectors.md) |
| $n$, $m$ | true interaction rate; the lower rate actually recorded | [1.5](lessons/01-05-gas-filled-detectors.md) |
| $Y$, $\eta$, $\delta$ | scintillator light yield; PMT photocathode quantum efficiency; per-dynode multiplication | [1.6](lessons/01-06-scintillation-semiconductor-detectors.md) |
| $w$ | energy cost of **one information carrier** (e–h pair, photoelectron) — the currency that sets resolution | [1.6](lessons/01-06-scintillation-semiconductor-detectors.md) |
| $N$ | carriers made by one pulse ([1.6](lessons/01-06-scintillation-semiconductor-detectors.md), [2.3](lessons/02-03-energy-resolution-pulse-height.md)) — but raw *counts* in a measurement from [2.1](lessons/02-01-counting-statistics-poisson-gaussian.md) on. Two different $N$'s | [1.6](lessons/01-06-scintillation-semiconductor-detectors.md) |
| $F$ | Fano factor — how much *better* than Poisson real carrier production is | [2.3](lessons/02-03-energy-resolution-pulse-height.md) |
| FWHM, $R$ | peak width at half its height; $R$ = that width as a fraction of the energy | [2.3](lessons/02-03-energy-resolution-pulse-height.md) |
| $c$; $m$, $b$ | MCA channel number; the slope (keV/channel) and offset of the energy calibration | [2.4](lessons/02-04-gamma-ray-spectroscopy.md) |
| $G$, $B$ | gross counts in the peak window; background counts in an equal-width window | [2.2](lessons/02-02-error-propagation-dead-time.md) |
| $\varepsilon_{\text{abs}}$, $\varepsilon_{\text{int}}$ | counts per particle **emitted**; counts per particle **arriving at the detector** | [2.5](lessons/02-05-efficiency-detection-limits.md) |
| $\Omega$ | solid angle the detector subtends at the source (steradians) | [2.5](lessons/02-05-efficiency-detection-limits.md) |
| $y$ | gamma yield / branching ratio — fraction of decays that emit *your* line | [2.5](lessons/02-05-efficiency-detection-limits.md) |
| $L_C$, $L_D$ | Currie critical level (decide after counting); detection limit (capability before counting) | [2.5](lessons/02-05-efficiency-detection-limits.md) |
| $A$ | activity — decays per second (Bq) | [2.5](lessons/02-05-efficiency-detection-limits.md) |
| $D$, $K$, $K_{col}$ | absorbed dose; kerma; the collision (ionizing) part of kerma | [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md) |
| $X$ | exposure — ionization charge liberated per kilogram **of air only** | [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md) |
| $\Phi$, $\Psi$ | particle fluence (per cm²); energy fluence $\Psi=\Phi E$ | [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md) |
| $\mu_{en}/\rho$ | mass energy-**absorption** coefficient — fraction of beam energy *kept*, not merely removed | [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md) |
| $w_R$, $w_T$ | radiation weighting factor (how densely it ionizes); tissue weighting factor (how much risk that organ carries) | [3.2](lessons/03-02-equivalent-effective-dose.md) |
| $H_T$, $E$ | equivalent dose to tissue $T$; effective dose. Note $E$ also means photon energy in Module 1 | [3.2](lessons/03-02-equivalent-effective-dose.md) |
| $\Gamma$ | dose-rate constant — dose rate at 1 m from 1 unit of activity of that nuclide | [3.3](lessons/03-03-dose-from-a-source.md) |
| $\dot D$, $\dot H$ | dose rate / equivalent-dose rate (the dot means "per unit time") | [3.3](lessons/03-03-dose-from-a-source.md) |
| $r$ | LNT nominal risk coefficient, about $5\times10^{-2}$ fatal cancers per Sv | [3.4](lessons/03-04-biological-effects-risk.md) |
| HVL, TVL | thickness that cuts the beam to a half; to a tenth | [4.1](lessons/04-01-exponential-attenuation-hvl.md) |
| $B$ | **buildup factor** ($\ge 1$) — not the background counts of [2.2](lessons/02-02-error-propagation-dead-time.md). Context disambiguates | [4.2](lessons/04-02-buildup-factors.md) |
| $\mu x$ | shield thickness in **mean free paths** — dimensionless, and what buildup tables are indexed by | [4.2](lessons/04-02-buildup-factors.md) |
| $S_L$, $S_A$, $S_V$ | source strength per unit length / area / volume | [4.3](lessons/04-03-point-kernel-method.md) |
| $\Theta$ | total angle a line source subtends at the field point | [4.3](lessons/04-03-point-kernel-method.md) |
| $\xi$, $\bar n$ | average logarithmic energy decrement per collision; collisions needed to thermalize | [4.4](lessons/04-04-neutron-moderation-shielding.md) |

## Definitions

### Photoelectric effect

The photon is swallowed whole by a tightly bound inner electron — all of its
energy deposited on the spot. A low-energy, high-$Z$ process, which is why shields
and detector crystals are made of heavy elements.

$$\sigma_{pe} \propto \frac{Z^{\,n}}{E^{3}}, \qquad n \approx 4\text{–}5$$

*Introduced:* [1.1](lessons/01-01-photon-photoelectric-compton.md)

### Compton scattering

The photon glances off a nearly-free outer electron like a cue ball: it survives,
turned by an angle $\theta$ and poorer by whatever the recoil electron took.

$$E' = \frac{E}{1 + \dfrac{E}{m_ec^2}(1-\cos\theta)}, \qquad T = E - E'$$

*Introduced:* [1.1](lessons/01-01-photon-photoelectric-compton.md)

### Compton edge

The sharp upper cliff of the electron continuum — the most a single scatter can
give the electron, which happens at a full $180^\circ$ reversal. It is *not* a
gamma line, and it always sits below the photopeak.

$$T_{\max} = E - E'(180^\circ)$$

*Introduced:* [1.1](lessons/01-01-photon-photoelectric-compton.md)

### Backscatter peak

The other half of the same $180^\circ$ event: the surviving photon, scattered in
the shielding *around* the detector and limping back in. Edge plus backscatter
always sum to $E$.

$$E_{\text{bs}} = E'(180^\circ) = \frac{E}{1 + \dfrac{2E}{m_ec^2}} \;\xrightarrow[E\to\infty]{}\; \frac{m_ec^2}{2} = 0.256\ \text{MeV}$$

*Introduced:* [1.1](lessons/01-01-photon-photoelectric-compton.md), labelled on a real spectrum in [2.4](lessons/02-04-gamma-ray-spectroscopy.md)

### Pair production

Above a hard threshold a photon vanishes and becomes an electron–positron pair in
a nucleus's field; the leftover energy is the pair's kinetic energy.

$$E_{\text{th}} = 2m_ec^2 = 1.022\ \text{MeV}, \qquad T_{e^-}+T_{e^+} = E - 1.022\ \text{MeV}, \qquad \sigma_{pp}\propto Z^2$$

*Introduced:* [1.2](lessons/01-02-photon-pair-production-total-attenuation.md)

### Annihilation radiation

The positron, once stopped, meets an electron and both convert back to energy as
two back-to-back photons of $0.511$ MeV each — the origin of the fixed $0.511$ MeV
line and of escape peaks.

*Introduced:* [1.2](lessons/01-02-photon-pair-production-total-attenuation.md)

### Escape peaks

What the spectrum shows when one or both annihilation photons leak out of the
crystal before depositing. They exist only above the $1.022$ MeV threshold.

$$E_{\text{SE}} = E - 0.511\ \text{MeV}, \qquad E_{\text{DE}} = E - 1.022\ \text{MeV}$$

*Introduced:* [1.2](lessons/01-02-photon-pair-production-total-attenuation.md), read off spectra in [2.4](lessons/02-04-gamma-ray-spectroscopy.md)

### Linear attenuation coefficient

The chance per unit length that a photon is removed from the beam — the three
interaction channels are independent removals, so their coefficients simply add.

$$\mu = \mu_{pe} + \mu_C + \mu_{pp} \qquad [\mu] = \text{cm}^{-1}$$

*Introduced:* [1.2](lessons/01-02-photon-pair-production-total-attenuation.md)

### Mass attenuation coefficient

Attenuation per gram instead of per centimetre, so it doesn't care whether the
material is compressed or fluffed. This — not $\mu$ — is what tables list and what
transfers between materials.

$$\frac{\mu}{\rho}\ \ (\text{cm}^2/\text{g}), \qquad \left(\frac{\mu}{\rho}\right)_{\text{mix}} = \sum_i w_i\left(\frac{\mu}{\rho}\right)_i$$

*Introduced:* [1.2](lessons/01-02-photon-pair-production-total-attenuation.md), reused for shield sizing in [4.1](lessons/04-01-exponential-attenuation-hvl.md)

### Mass energy-absorption coefficient

The absorption cousin of $\mu/\rho$: the fraction of the beam's energy the medium
actually *keeps* per unit mass thickness. Use it for dose; use $\mu$ for
attenuation. They are not interchangeable.

$$D = \Psi\left(\frac{\mu_{en}}{\rho}\right) \quad \text{under charged-particle equilibrium}$$

*Introduced:* [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md)

### Stopping power

How fast a charged particle bleeds energy along its path. It rises as the particle
slows — which is exactly why it spikes at the end of the track.

$$-\frac{dE}{dx} \;\propto\; \frac{z^2}{v^2}\,n\,\ln\!\left(\frac{2m_ev^2}{I}\right), \qquad n = \frac{N_A Z \rho}{A}$$

*Introduced:* [1.3](lessons/01-03-charged-particles-stopping-power-range.md)

### Specific ionization

Stopping power converted from MeV/cm into ion-pairs/cm — literally the signal a
gas detector will collect.

$$\text{SI} = \frac{1}{W}\left(-\frac{dE}{dx}\right)$$

*Introduced:* [1.3](lessons/01-03-charged-particles-stopping-power-range.md)

### CSDA range

Total path length under the continuous-slowing-down approximation: integrate the
reciprocal stopping power from the starting energy down to zero. Sharp and
reproducible for heavy charged particles, fuzzy for electrons.

$$R_{\text{CSDA}} = \int_0^{E_0}\frac{dE}{-dE/dx}$$

*Introduced:* [1.3](lessons/01-03-charged-particles-stopping-power-range.md)

### Bragg peak

The spike in energy deposited per unit depth just before the particle stops — the
$1/v^2$ term running away as the particle crawls. The basis of proton therapy.

*Introduced:* [1.3](lessons/01-03-charged-particles-stopping-power-range.md)

### Bremsstrahlung

X-rays radiated by a *light* charged particle decelerating near a nucleus. It
scales with $Z$, which is why you never shield a beta source with lead first.

$$f \approx 3.5\times10^{-4}\,Z\,E_{\max} \quad (E_{\max}\ \text{in MeV})$$

*Introduced:* [1.3](lessons/01-03-charged-particles-stopping-power-range.md)

### Elastic and inelastic neutron scattering

Elastic $(n,n)$ is a billiard-ball hit — kinetic energy conserved, the target
recoils. Inelastic $(n,n'\gamma)$ excites the nucleus and emits a gamma, and has a
threshold, so only fast neutrons do it.

$$f_{\max} = \frac{4A}{(1+A)^2}, \qquad \bar f = \frac{2A}{(1+A)^2}$$

*Introduced:* [1.4](lessons/01-04-neutron-interactions.md)

### Radiative capture and $(n,\alpha)$ reactions

A nucleus swallows the neutron. $(n,\gamma)$ hands back a penetrating photon;
$(n,\alpha)$ hands back a charged fragment that stops within microns — which is
why $(n,\alpha)$ absorbers are what both detectors and shields are built from.

*Introduced:* [1.4](lessons/01-04-neutron-interactions.md), exploited for shielding in [4.4](lessons/04-04-neutron-moderation-shielding.md)

### The $1/v$ law

Slow neutrons linger near a nucleus, so they are captured far more readily. The
cross section grows without bound as the neutron slows — the reason every neutron
recipe is "moderate first, then capture."

$$\sigma_a(E) = \sigma_0\sqrt{\frac{E_0}{E}}, \qquad E_0 = 0.025\ \text{eV}$$

*Introduced:* [1.4](lessons/01-04-neutron-interactions.md)

### Thermal neutron

A neutron in thermal equilibrium with the material: about $0.025$ eV, speed
$2200$ m/s at $20\,^\circ$C. The energy at which capture cross sections are
tabulated.

*Introduced:* [1.4](lessons/01-04-neutron-interactions.md)

### Ion pair and the W-value

One freed electron plus its positive ion. It costs about 30 eV of deposited energy
to make one in a gas — the coarse currency that limits a gas detector's resolution.

$$N_0 = \frac{E}{W}, \qquad Q_0 = N_0 e$$

*Introduced:* [1.5](lessons/01-05-gas-filled-detectors.md)

### Gas multiplication (gain)

Above a threshold field each drifting electron ionizes further atoms — a Townsend
avalanche. Because the multiplication $M$ is the *same* for every event, the pulse
grows without losing its proportionality to energy.

$$Q = M\,Q_0 = M N_0 e$$

*Introduced:* [1.5](lessons/01-05-gas-filled-detectors.md)

### Geiger–Müller region

The voltage regime where one avalanche breeds UV photons that discharge the whole
tube, so every event — a 60 keV photon or a 5 MeV alpha — gives the identical large
pulse. Counting only; all energy information is gone.

*Introduced:* [1.5](lessons/01-05-gas-filled-detectors.md)

### Quenching

A few percent of organic vapour or halogen added to a GM tube to soak up the UV
and neutralize the ions, so the discharge stops after one pulse. Organic quenchers
wear out (about $10^9$ counts); halogen ones self-heal.

*Introduced:* [1.5](lessons/01-05-gas-filled-detectors.md)

### Dead time

The interval after each pulse during which the detector is blind, so the observed
rate falls below the true one. Correct for it *before* turning a rate into an
activity.

$$\text{non-paralyzable: } m = \frac{n}{1+n\tau}, \qquad \text{paralyzable: } m = n e^{-n\tau}$$

*Introduced:* [1.5](lessons/01-05-gas-filled-detectors.md), full treatment in [2.2](lessons/02-02-error-propagation-dead-time.md)

### Information carrier

Whatever countable thing the deposited energy is converted into — ion pairs,
photoelectrons at a PMT's first stage, or electron–hole pairs. **The smallest
number anywhere in the chain sets the statistics**; downstream gain only makes the
pulse bigger, never more precise.

$$N = \frac{E}{w}$$

*Introduced:* [1.6](lessons/01-06-scintillation-semiconductor-detectors.md)

### Scintillation chain

Crystal turns energy into visible photons, the PMT photocathode turns a fraction of
them into photoelectrons, and a dynode chain multiplies those about a million-fold.

$$N_{ph} = YE, \qquad N_{pe} = \eta N_{ph}, \qquad G_{PMT} = \delta^{\,n}\approx 10^6$$

*Introduced:* [1.6](lessons/01-06-scintillation-semiconductor-detectors.md)

### Semiconductor detector

A reverse-biased diode acting as a solid-state ion chamber: **no internal
multiplication at all**. Its whole advantage is the tiny pair-creation energy
$w\approx 3$ eV, which manufactures a huge carrier count before any amplification.

*Introduced:* [1.6](lessons/01-06-scintillation-semiconductor-detectors.md)

### Poisson counting statistics

Radioactive counting is rare independent events, so the count carries its own error
bar: mean and variance coincide, and a *single* count is its own uncertainty
estimate.

$$P(N) = \frac{\mu^N e^{-\mu}}{N!}, \qquad \sigma_N = \sqrt{N}, \qquad \frac{\sigma_N}{N} = \frac{1}{\sqrt{N}}$$

*Introduced:* [2.1](lessons/02-01-counting-statistics-poisson-gaussian.md)

### Net counts

Peak minus background — where subtracting the counts **adds** their variances, so
the error bar grows rather than shrinks.

$$N_{\text{net}} = G - B, \qquad \sigma_{\text{net}} = \sqrt{G+B}$$

*Introduced:* [2.2](lessons/02-02-error-propagation-dead-time.md)

### Energy resolution

The photopeak's fractional width — the figure of merit that decides whether two
nearby gamma lines can be told apart. Smaller is better; always quote the energy
it was measured at.

$$R = \frac{\text{FWHM}}{E_0}\times 100\%, \qquad \text{FWHM} = 2\sqrt{2\ln 2}\,\sigma \approx 2.355\,\sigma$$

*Introduced:* [2.3](lessons/02-03-energy-resolution-pulse-height.md)

### Fano factor

Carrier production isn't fully random — a fixed total energy anti-correlates
successive ionizations — so real variance is *below* Poisson.

$$\sigma_N^2 = FN \;\Longrightarrow\; R_{\text{stat}} \approx 2.355\sqrt{\frac{F}{N}}$$

$F \approx 0.06$–$0.15$ for gases and semiconductors; $F \approx 1$ for scintillators
(their photoelectron statistics really are Poisson).

*Introduced:* [2.3](lessons/02-03-energy-resolution-pulse-height.md)

### Photopeak (full-energy peak)

The Gaussian line where the detector caught *all* of the photon's energy. It is the
only feature in a spectrum that is the actual gamma energy; everything else is that
same gamma minus whatever escaped.

*Introduced:* [2.3](lessons/02-03-energy-resolution-pulse-height.md), inventoried against the other features in [2.4](lessons/02-04-gamma-ray-spectroscopy.md)

### Multichannel analyzer (MCA)

An automatic sorter that measures every pulse's height and drops it into a channel,
building the pulse-height histogram one event at a time. Channel maps linearly to
energy once calibrated.

*Introduced:* [2.3](lessons/02-03-energy-resolution-pulse-height.md)

### Absolute vs intrinsic efficiency

Absolute is per particle the source emits *in all directions*; intrinsic is per
particle that actually reaches the detector face. They differ by the geometry
(solid-angle) factor — and only the absolute one is what you divide counts by.

$$\varepsilon_{\text{abs}} = \frac{\Omega}{4\pi}\,\varepsilon_{\text{int}}$$

*Introduced:* [2.5](lessons/02-05-efficiency-detection-limits.md)

### Gamma yield (branching ratio)

The fraction $y$ of decays that emit the particular line you are counting.
Forgetting it — or using the value for the wrong line — is the most common activity
error.

*Introduced:* [2.5](lessons/02-05-efficiency-detection-limits.md)

### Critical level and detection limit (Currie)

$L_C$ is the line you compare a finished measurement against ("did I see it?");
$L_D$ is the smallest true signal you can promise to catch, which converts to the
instrument's minimum detectable activity ("what could this setup see?"). They
control the false-positive and false-negative rates separately.

$$L_C = 2.33\sqrt{B}, \qquad L_D \approx 2.71 + 4.65\sqrt{B}, \qquad \text{MDA} = \frac{L_D}{\varepsilon\,y\,t}$$

*Introduced:* [2.5](lessons/02-05-efficiency-detection-limits.md)

### Absorbed dose

Energy actually deposited per kilogram, at the point in question. The master
physical quantity — defined for any radiation in any material.

$$D = \frac{d\bar\varepsilon}{dm}, \qquad 1\ \text{Gy} = 1\ \text{J/kg}$$

*Introduced:* [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md)

### Kerma

Energy *handed off* to charged particles, counted at the interaction point rather
than where those particles stop. Split into collision kerma (spent on ionization)
and radiative kerma (later radiated away as bremsstrahlung).

$$K = \frac{dE_{tr}}{dm} = K_{col} + K_{rad}$$

*Introduced:* [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md)

### Charged-particle equilibrium (CPE)

Every charged particle leaving a volume is replaced by an identical one entering
it. This is the hinge that lets you compute dose from photon interaction data.

$$D = K_{col} \quad \text{(under CPE)}$$

*Introduced:* [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md)

### Exposure

Ionization charge liberated per kilogram **of air**, for photons only. Historical,
but survey meters are still calibrated in it, so you must be able to convert out
of it.

$$X = \frac{dQ}{dm_{air}}, \qquad 1\ \text{R} = 2.58\times10^{-4}\ \text{C/kg}$$

*Introduced:* [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md)

### Equivalent dose

Absorbed dose re-scored for how densely the radiation ionizes. Same base units as
the gray; the new unit name only flags "already weighted."

$$H_T = \sum_R w_R\,D_{T,R}, \qquad [H_T] = \text{Sv}$$

*Introduced:* [3.2](lessons/03-02-equivalent-effective-dose.md)

### Effective dose

The whole-body-uniform exposure that would carry the same total stochastic risk as
your actual patchy, partial-body one. Because the tissue weights sum to one, $E$ is
almost always *smaller* than the largest organ dose.

$$E = \sum_T w_T H_T, \qquad \sum_T w_T = 1$$

*Introduced:* [3.2](lessons/03-02-equivalent-effective-dose.md)

### Committed dose

For something now lodged inside you, book the entire future dose against the year
of intake.

$$H_T(\tau) = \int_{t_0}^{t_0+\tau}\dot H_T(t)\,dt, \qquad \tau = 50\ \text{yr (adults)},\ 70\ \text{yr (children)}$$

*Introduced:* [3.2](lessons/03-02-equivalent-effective-dose.md)

### Dose-rate constant

One number per nuclide: the dose rate one metre from one unit of its activity. It
is the whole fluence-to-dose chain, summed over the nuclide's gamma lines and
collapsed into a constant you look up.

$$\Gamma = \frac{1}{4\pi}\sum_i n_i E_i\left(\frac{\mu_{en}}{\rho}\right)_i \times(\text{unit conversions})$$

*Introduced:* [3.3](lessons/03-03-dose-from-a-source.md)

### Deterministic effects (tissue reactions)

Enough cells are killed that an organ fails. They have a **threshold**, and above
it the *severity* grows with dose. Everyone above the threshold is affected. Quote
these in gray, never in sieverts of effective dose.

*Introduced:* [3.4](lessons/03-04-biological-effects-risk.md)

### Stochastic effects and the LNT model

A mis-repaired cell may seed a cancer decades later. No threshold, and dose sets
the *probability*, not the severity — you cannot get a little bit of cancer.

$$P_{\text{fatal cancer}} \approx r\,E, \qquad r \approx 5\times10^{-2}\ \text{Sv}^{-1}$$

*Introduced:* [3.4](lessons/03-04-biological-effects-risk.md)

### Half-value layer

The thickness that cuts the beam exactly in half — the whole design problem
reduced to counting halvings. The tenth-value layer is the same idea in factors of
ten.

$$\text{HVL} = \frac{\ln 2}{\mu}, \qquad \text{TVL} = \frac{\ln 10}{\mu} \approx 3.32\,\text{HVL}$$

*Introduced:* [4.1](lessons/04-01-exponential-attenuation-hvl.md)

### Narrow beam vs broad beam

Narrow beam is the collimated idealization $\mu$ was *measured* in: interact once
and you're gone. Broad beam is the real world, where a scattered photon can still
stagger out the far side and reach the person.

*Introduced:* [4.2](lessons/04-02-buildup-factors.md)

### Buildup factor

The single number that repairs the narrow-beam lie: total intensity divided by
uncollided-only intensity. Always at least one, grows with thickness, and is larger
in low-$Z$ materials.

$$I = B\,I_0 e^{-\mu x}, \qquad B = \frac{\text{with scattered photons}}{\text{uncollided only}} \ge 1$$

*Introduced:* [4.2](lessons/04-02-buildup-factors.md)

### Point kernel

The dose one infinitesimal piece of a source delivers at a field point — inverse
square, times attenuation, times buildup. Integrate it over the source and any
shape becomes computable by hand.

$$\dot D_P = \int_{\text{source}} \frac{\Gamma\,dS}{4\pi r^2}\,B(\mu r)\,e^{-\mu r}$$

*Introduced:* [4.3](lessons/04-03-point-kernel-method.md)

### Self-absorption

A thick source hides behind its own material, so the dose at its surface
**saturates** instead of growing with thickness.

$$\phi_{\text{out}} = \frac{S_V}{\mu}\left(1 - e^{-\mu T}\right) \;\xrightarrow[T\to\infty]{}\; \frac{S_V}{\mu}$$

*Introduced:* [4.3](lessons/04-03-point-kernel-method.md)

### Average logarithmic energy decrement

Each elastic collision multiplies the neutron's energy down by the same factor, so
"how many collisions to thermalize" is a division. Hydrogen has the largest
possible value, $\xi = 1$.

$$\xi = 1 + \frac{\alpha\ln\alpha}{1-\alpha}, \quad \alpha=\left(\frac{A-1}{A+1}\right)^2, \qquad \bar n = \frac{\ln(E_0/E_{th})}{\xi}$$

*Introduced:* [4.4](lessons/04-04-neutron-moderation-shielding.md)

### ALARA

As Low As Reasonably Achievable: stay under the limit, then keep going, spending on
time/distance/shielding up to the point where the next increment of protection
costs more than the harm it averts. LNT is *why* the limit is a ceiling and not a
target.

*Introduced:* [4.5](lessons/04-05-health-physics-alara-limits.md)

## Formulas and rules

### Units and conversions — the table this course is really about

| Quantity | SI unit | Old unit | Conversion |
|---|---|---|---|
| Absorbed dose $D$, kerma $K$ | gray, $\text{Gy}=\text{J/kg}$ | rad | $1\ \text{Gy} = 100\ \text{rad}$; $1\ \text{rad} = 10\ \text{mGy}$ |
| Equivalent dose $H$, effective dose $E$ | sievert, $\text{Sv}=\text{J/kg}$ | rem | $1\ \text{Sv} = 100\ \text{rem}$; $1\ \text{rem} = 10\ \text{mSv}$ |
| Exposure $X$ | C/kg (air only) | roentgen, R | $1\ \text{R} = 2.58\times10^{-4}\ \text{C/kg}$ |
| Activity $A$ | becquerel, $\text{Bq} = 1$ decay/s | curie, Ci | $1\ \text{Ci} = 3.7\times10^{10}\ \text{Bq}$; $1\ \text{mCi} = 37\ \text{MBq}$ |
| Cross section $\sigma$ | cm² | barn | $1\ \text{b} = 10^{-24}\ \text{cm}^2$ |
| Fluence $\Phi$ | $\text{cm}^{-2}$ | — | energy fluence $\Psi = \Phi E$ |
| Energy | J | eV, MeV | $1\ \text{MeV} = 1.602\times10^{-13}\ \text{J}$ |

**Gray to sievert is not a unit conversion.** Both are J/kg; the factor between
them is a dimensionless *protection convention* ($w_R$, then $w_T$), not a measured
physical constant. Gray measures energy; sievert measures hazard.

**Exposure bridges** (they use $W/e = 33.97\ \text{J/C}$ for air):

$$1\ \text{R} \;\to\; K_{air} \approx 8.76\ \text{mGy (air)} \;\approx\; 9.3\ \text{mGy (tissue)}$$

*From* [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md), [3.2](lessons/03-02-equivalent-effective-dose.md), [1.4](lessons/01-04-neutron-interactions.md)

### Constants worth having on the page

| Constant | Value | Why it appears |
|---|---|---|
| $m_ec^2$ | $0.511$ MeV | Compton kinematics, the $1.022$ MeV pair threshold, escape peaks |
| $2m_ec^2$ | $1.022$ MeV | pair-production threshold |
| $e$ | $1.602\times10^{-19}$ C | ion pairs and e–h pairs to collected charge |
| $W$ (gas) | $\approx 30$ eV/ion pair ($34$ eV in air) | gas-detector signal size |
| $w$ (Si / Ge) | $3.6$ / $2.96$ eV per e–h pair | semiconductor carrier count |
| $w$ (NaI, effective) | $\approx 100$ eV per photoelectron | scintillator carrier count |
| $W/e$ (air) | $33.97$ J/C | roentgen to air kerma |
| $E_{th}$ (thermal neutron) | $0.025$ eV, $v_0 = 2200$ m/s | where capture cross sections are tabulated |
| $\ln 2$, $\ln 10$ | $0.693$, $2.303$ | HVL and TVL |

### Photon interactions: which one dominates

| Process | Scales as | Owns the regime | Signature it leaves |
|---|---|---|---|
| Photoelectric | $Z^{4\text{–}5}/E^3$ | low $E$, high $Z$ | full-energy deposit; characteristic X-ray or Auger electron |
| Compton | $\propto Z$, falls slowly | the broad middle | Compton continuum + edge; backscatter peak |
| Pair production | $\propto Z^2$, rises above $1.022$ MeV | high $E$, high $Z$ | escape peaks at $E-0.511$ and $E-1.022$; the $0.511$ MeV line |

Crossovers are $Z$-dependent: in lead near $0.5$ MeV and $5$ MeV; in aluminium the
first one drops to roughly $40$–$50$ keV, so **in light materials (tissue, water,
concrete) Compton owns essentially the whole diagnostic-to-MeV range**. Crossing
the pair threshold turns the process *on*, not *up*.

*From* [1.1](lessons/01-01-photon-photoelectric-compton.md) *and* [1.2](lessons/01-02-photon-pair-production-total-attenuation.md)

### Reading a gamma spectrum — every feature from $E$ alone

| Feature | Energy | Exists when |
|---|---|---|
| Photopeak (full-energy) | $E$ | always — the only one that *is* the gamma |
| Compton edge | $T_{\max} = E - E'(180^\circ)$ | always |
| Compton continuum | $0$ up to $T_{\max}$ | always |
| Backscatter peak | $E'(180^\circ)$, and edge + backscatter $= E$ | always (from surrounding material) |
| Single-escape peak | $E - 0.511$ MeV | $E > 1.022$ MeV |
| Double-escape peak | $E - 1.022$ MeV (equals the pair's kinetic energy) | $E > 1.022$ MeV |
| Annihilation line | fixed at $0.511$ MeV, independent of source | positrons annihilating nearby |
| Sum peak | $E_1 + E_2$ | two gammas from one decay within a resolving time |

**Energy calibration** is the reverse move — fit a line through two known peaks and
drop any unknown channel into it. Never assume the intercept is zero.

$$E = mc + b, \qquad m = \frac{E_2-E_1}{c_2-c_1}, \qquad b = E_1 - m c_1$$

*From* [2.4](lessons/02-04-gamma-ray-spectroscopy.md)

### Charged particles: the three scalings that carry the physics

| Scaling | Meaning | Consequence |
|---|---|---|
| $\propto z^2$ | double the charge, quadruple the loss | an alpha stops $4\times$ harder than a proton *at the same speed* |
| $\propto 1/v^2$ | slower is deadlier | the Bragg peak; alpha vs proton at equal *energy* differ by $\sim 16\times$ |
| $\propto n \propto Z/A$ | more target electrons, more collisions | $Z/A \approx 0.5$ for most materials, so mass stopping power is nearly material-independent (hydrogen, $Z/A=1$, is the outlier) |

Handy empirical ranges: alphas in air (4–7 MeV) $R \approx 0.325\,E^{3/2}$ cm;
protons in tissue $R \approx 0.0022\,E^{1.8}$ cm. A 5.5 MeV alpha travels about
4 cm of air, roughly 33 µm of tissue — a sheet of paper stops it. Betas straggle
(no crisp range) and radiate bremsstrahlung, so shield them with low-$Z$ plastic
and only then add lead for the X-rays the plastic makes.

*From* [1.3](lessons/01-03-charged-particles-stopping-power-range.md)

### Neutrons: energy bands and the moderate-then-capture recipe

| Band | Energy | Behaviour |
|---|---|---|
| Fast | $\gtrsim 0.1$ MeV | elastic + inelastic scattering; capture cross section tiny |
| Epithermal | $1$ eV – $0.1$ MeV | slowing down; resonance capture peaks |
| Thermal | $\approx 0.025$ eV | equilibrium with matter; enormous capture cross section |

| Nuclide | Reaction | Thermal $\sigma_a$ | Secondary gamma |
|---|---|---|---|
| $\ce{^{10}B}$ | $\ce{^{10}B(n,\alpha)^{7}Li}$ | $3840$ b | $478$ keV, 94 percent of captures — soft, easy to stop |
| $\ce{^{6}Li}$ | $\ce{^{6}Li(n,\alpha)^{3}H}$ | $940$ b | essentially none — energy leaves as charged particles |
| $\ce{^{3}He}$ | $\ce{^{3}He(n,p)^{3}H}$ | $5330$ b | none; $Q = 0.76$ MeV read as one full-energy pulse |
| $\ce{Cd}$ | $(n,\gamma)$ | $2450$ b | cascade up to about 9 MeV — the worst offender |
| $\ce{^{1}H}$ | $\ce{^{1}H(n,\gamma)^{2}H}$ | $0.33$ b | **2.2 MeV** — born inside your own moderator |

Hydrogen is the best moderator ($f_{\max}=1$, $\xi=1$: about 18 collisions take
2 MeV to thermal, versus about 115 in graphite). Polyethylene packs roughly
$1.2\times$ the hydrogen per cm³ of water, hence a thinner shield. **Shield order
is moderator → absorber → high-$Z$ gamma layer**, never absorber first: thermal
absorbers are nearly transparent to fast neutrons.

*From* [1.4](lessons/01-04-neutron-interactions.md) *and* [4.4](lessons/04-04-neutron-moderation-shielding.md)

### Gas detectors: the six regions of the voltage knob

| Region | What happens | Energy info? | Use |
|---|---|---|---|
| 1 · Recombination | charge lost before collection | no | unusable |
| 2 · Ionization chamber | all primary charge collected, $M=1$ | yes, $Q = Q_0 \propto E$ | dose-rate survey (current mode); no dead-time loss |
| 3 · Proportional | constant gain $M \sim 10^2$–$10^6$ | yes, $Q = MQ_0 \propto E$ | alpha and slow-neutron spectroscopy ($\ce{BF3}$, $\ce{^3He}$ tubes) |
| 4 · Limited proportionality | space charge depresses $M$ for big events | degrading | avoid |
| 5 · Geiger–Müller | whole tube discharges; every pulse identical | **no** | cheap counting, contamination survey; $\tau \approx 50$–$300\ \mu$s |
| 6 · Continuous discharge | tube arcs regardless of radiation | no | damages the detector |

*From* [1.5](lessons/01-05-gas-filled-detectors.md)

### Detector comparison — resolution vs efficiency

| Detector | Carrier, cost $w$ | Typical $R$ at 662 keV | Good at | Bad at |
|---|---|---|---|---|
| Ionization chamber | ion pairs, $\approx 30$ eV | not used for spectra | flat, gain-free dose response over a huge range | tiny pulses (about 29 fC for a 5.5 MeV alpha); single-event counting |
| Proportional counter | ion pairs $\times M$ | few percent (alphas, X-rays) | alpha spectroscopy; windowing on an $(n,\alpha)$ peak to reject gammas | low density, so poor gamma efficiency |
| GM tube | avalanche, saturated | none | rugged, cheap, volt-scale pulses, loud clicks | no energy information; long dead time |
| NaI(Tl) + PMT | photoelectrons, $\approx 100$ eV | about 7 percent measured (2.9 percent statistical floor) | **efficiency** — dense, high-$Z$, room temperature, portable; finding sources | resolving nearby lines (FWHM about 45–60 keV at 1 MeV) |
| HPGe (coaxial) | e–h pairs, $2.96$ eV, $F\approx 0.1$ | about $0.15$–$0.2$ percent | **resolution** — isotope identification, escape-peak structure | needs cooling; smaller crystal, so lower efficiency and longer counts |
| Si | e–h pairs, $3.6$ eV | — | charged particles and X-rays | thin, so poor for MeV gammas |
| CdTe | e–h pairs, $4.4$ eV, $F\approx 0.11$ | about $0.5$ percent at 122 keV | compact room-temperature X-ray spectroscopy | small volumes |

The one-line rule: **NaI to detect and survey; HPGe to identify and resolve.**
Amplification (PMT gain, gas gain) makes the pulse *bigger*, never *more precise* —
the bottleneck is always the smallest carrier count in the chain.

*From* [1.5](lessons/01-05-gas-filled-detectors.md), [1.6](lessons/01-06-scintillation-semiconductor-detectors.md) *and* [2.3](lessons/02-03-energy-resolution-pulse-height.md)

### Counting statistics — the whole relation set

$$\sigma_N = \sqrt{N}, \qquad \frac{\sigma_N}{N} = \frac{1}{\sqrt{N}} \qquad (\text{raw \emph{counts} only, never a rate})$$

$$r = \frac{N}{t}, \qquad \sigma_r = \frac{\sqrt{N}}{t} = \sqrt{\frac{r}{t}}$$

$$\sigma_Q^2 = \sum_i\left(\frac{\partial Q}{\partial x_i}\right)^2\sigma_i^2 \;\Longrightarrow\; \sigma_{a\pm b} = \sqrt{\sigma_a^2+\sigma_b^2}, \qquad \left(\frac{\sigma_Q}{Q}\right)^2 = \left(\frac{\sigma_a}{a}\right)^2+\left(\frac{\sigma_b}{b}\right)^2 \ \ (Q = ab \text{ or } a/b)$$

$$N_{\text{net}} = G - B, \qquad \sigma_{\text{net}} = \sqrt{G+B}, \qquad \frac{\sigma_A}{A} = \frac{\sqrt{G+B}}{G-B}$$

$$\text{optimal time split:}\quad \frac{t_G}{t_B} = \sqrt{\frac{R_G}{R_B}}$$

| Rule of thumb | Statement |
|---|---|
| Gaussian takes over | $N \gtrsim 20$–$30$; below that use exact-Poisson intervals ($N-\sqrt{N}$ can go negative) |
| Confidence bands | $\pm1\sigma \approx 68\%$, $\pm2\sigma \approx 95\%$, $\pm3\sigma \approx 99.7\%$ |
| Precision costs counts | halving the relative error needs $4\times$ the counts, hence $4\times$ the time |
| Detection limit scales | in the background-dominated limit, MDA $\propto 1/\sqrt{t}$ |

**Activity from a photopeak**, once the rate is dead-time corrected:

$$A = \frac{R_{\text{net}}}{\varepsilon\,y}, \qquad R_{\text{net}} = \frac{G-B}{t}$$

**Dead time**, both directions: $\;m = \dfrac{n}{1+n\tau}\;\Longleftrightarrow\;n = \dfrac{m}{1-m\tau}$ (non-paralyzable, saturating at $1/\tau$); $\;m = ne^{-n\tau}$ (paralyzable, peaking at $m = 0.368/\tau$ when $n = 1/\tau$, then folding *back down*).

**Currie levels**: use the plain $\sqrt{B}$ forms only when the background rate is
known essentially exactly; with a **separate equal-time blank** the variance
doubles, so use $L_C = 1.645\sqrt{2B}$ and $L_D \approx 2.71 + 4.65\sqrt{2B}$.

*From* [2.1](lessons/02-01-counting-statistics-poisson-gaussian.md), [2.2](lessons/02-02-error-propagation-dead-time.md) *and* [2.5](lessons/02-05-efficiency-detection-limits.md)

### Radiation weighting factors $w_R$ (ICRP 103)

| Radiation | $w_R$ |
|---|---|
| Photons ($\gamma$, X-rays), electrons ($\beta$), muons | 1 |
| Protons | 2 |
| Neutrons | 2.5–20, a smooth function of energy, peaking near 20 at about 1 MeV (thermal $\approx 2.5$) |
| Alpha particles, fission fragments, heavy ions | 20 |

"$w_R \approx 10$ for neutrons" is an all-purpose stand-in — use the energy-specific
value whenever you have the spectrum. In a mixed field the densely-ionizing
component routinely dominates the hazard while depositing *less* absorbed dose.

### Tissue weighting factors $w_T$ (ICRP 103, sum to 1)

| $w_T$ | Tissues |
|---|---|
| 0.12 each | red bone marrow, colon, lung, stomach, breast, remainder group |
| 0.08 | gonads |
| 0.04 each | thyroid, bladder, liver, oesophagus |
| 0.01 each | skin, bone surface, brain, salivary glands |

For a **uniform whole-body** field every $H_T$ is the same, the weights sum to one,
and $E = H$ — tissue weighting only bites for partial-body exposures.

*From* [3.2](lessons/03-02-equivalent-effective-dose.md)

### The dose ladder, end to end

$$\Phi \;\xrightarrow{\;\times E\;}\; \Psi \;\xrightarrow{\;\times\,\mu_{en}/\rho\;}\; D\ [\text{Gy}] \;\xrightarrow{\;\times w_R\;}\; H\ [\text{Sv}] \;\xrightarrow{\;\times w_T,\ \text{summed}\;}\; E\ [\text{Sv}] \;\xrightarrow{\;\times r\;}\; \text{risk}$$

Watch the unit cascade in every dose problem: MeV → J, then cm²/g against the
coefficient, then g → kg to land in gray.

**Dose rate from a point source**, and its combination with time and shielding:

$$\dot D = \frac{\Gamma A}{d^2}, \qquad H = \dot H_0\left(\frac{d_0}{d}\right)^2 t\,B\,e^{-\mu x}$$

For photons ($w_R=1$) you may read mGy straight across as mSv. That shortcut dies
the moment neutrons or alphas enter.

*From* [3.1](lessons/03-01-absorbed-dose-kerma-exposure.md), [3.2](lessons/03-02-equivalent-effective-dose.md), [3.3](lessons/03-03-dose-from-a-source.md) *and* [4.5](lessons/04-05-health-physics-alara-limits.md)

### Biological landmarks and limits

| Dose (acute, whole body) | Effect |
|---|---|
| $\approx 0.15$ Sv | temporary sterility threshold |
| $\approx 0.5$ Sv | first detectable blood-count changes; cumulative lens-cataract threshold |
| $\approx 1$ Sv | onset of acute radiation syndrome |
| $\approx 2$ Sv | skin erythema (localized) |
| $\approx 4$ Sv | LD50/60 without medical care |
| $\gtrsim 8$ Sv | usually fatal even with treatment |

| Limit (effective dose) | Value |
|---|---|
| Occupational (ICRP) | 20 mSv/yr averaged over 5 yr, not above 50 mSv in any one year |
| Occupational (US NRC) | 50 mSv/yr (5 rem) — always cite your local regulator |
| Public | 1 mSv/yr above natural background |
| Natural background, for scale | about 3 mSv/yr |

Rule of thumb: small and chronic → think **stochastic** (probability); large and
acute (roughly above a few hundred mSv) → think **deterministic** (severity), with
the stochastic risk riding along on top.

*From* [3.4](lessons/03-04-biological-effects-risk.md) *and* [4.5](lessons/04-05-health-physics-alara-limits.md)

### Shielding arithmetic

$$I = I_0 e^{-\mu x} \quad\text{(narrow beam)}, \qquad I = B\,I_0 e^{-\mu x} \quad\text{(broad beam)}$$

$$x = \frac{1}{\mu}\ln\frac{I_0}{I} = \log_2\!\left(\frac{I_0}{I}\right)\times \text{HVL}, \qquad \text{with buildup: } x = \frac{1}{\mu}\ln\!\left(B\cdot\frac{I_0}{I}\right)$$

| Move | Cost / gain |
|---|---|
| $n$ HVLs | reduction of $2^n$ — halvings **multiply**, they never add |
| Buildup factor $B$ | costs $\Delta x = \ln B/\mu$, i.e. exactly $\log_2 B$ extra HVLs ($B=2 \to +1$, $B=4 \to +2$) |
| Doubling the distance | factor of 4 — **worth exactly 2 HVLs of shielding**, and it weighs nothing |
| Halving the time | factor of 2 — worth 1 HVL |
| Stacked slabs | transmissions multiply, so the $\mu x$ exponents add |

$B$ grows with $\mu x$, is **larger in low-$Z$** materials (lead reabsorbs its own
degraded scatter photoelectrically; water and concrete do not), and is
quantity-specific: $B_N > B_E$, and for shielding people you want the **dose**
buildup factor. Because $B$ depends on the thickness you are solving for, iterate —
it converges in one or two rounds.

**Point-kernel geometry results** (unshielded, $\mu\approx 0$):

$$\text{line source: } \dot D = \frac{\Gamma S_L}{4\pi a}\,\Theta, \quad \Theta = 2\arctan\frac{L}{2a}, \qquad \frac{\dot D_{\text{line}}}{\dot D_{\text{point at centre}}} = \frac{\arctan u}{u}, \ u = \frac{L}{2a}$$

$$\text{disk source on axis: } \dot D = \frac{\Gamma S_A}{4}\ln\!\left(1+\frac{R^2}{h^2}\right) \;\xrightarrow[h\gg R]{}\; \frac{\Gamma A_{\text{tot}}}{4\pi h^2}$$

An extended source read up close always gives **less** than the point-at-centre
estimate; far away, the point law re-emerges. With a shield in the way, the line
integral becomes the Sievert integral, $\int e^{-\mu t\sec\theta}\,d\theta$ — table
or numerics, no elementary antiderivative.

*From* [4.1](lessons/04-01-exponential-attenuation-hvl.md), [4.2](lessons/04-02-buildup-factors.md) *and* [4.3](lessons/04-03-point-kernel-method.md)

## Assumed, not taught here

This is a Tier 2 course: it uses the following without re-deriving them, and this
table is where you go to find the derivation.

| Fact | Where it's taught |
|---|---|
| Activity, the decay law $A = A_0e^{-\lambda t}$, and the Bq/Ci definitions | [intro-nuclear-engineering 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) |
| Cross section as an effective area; the barn | [intro-nuclear-engineering 2.1](../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md) |
| Macroscopic cross section $\Sigma$, mean free path, and why $e^{-\Sigma x}$ is exponential | [intro-nuclear-engineering 2.2](../intro-nuclear-engineering/lessons/02-02-macroscopic-cross-section-mean-free-path.md) |
| The $1/v$ law and resonance structure in cross sections | [intro-nuclear-engineering 2.3](../intro-nuclear-engineering/lessons/02-03-energy-dependence-1-over-v-resonances.md) |
| Lethargy, $\xi$, and the collisions-to-thermalize count (used wholesale in 4.4) | [intro-nuclear-engineering 2.4](../intro-nuclear-engineering/lessons/02-04-moderation-slowing-neutrons.md) |
| First pass at photon attenuation and at stopping power | [intro-nuclear-engineering 4.2](../intro-nuclear-engineering/lessons/04-02-photons-through-matter.md), [4.3](../intro-nuclear-engineering/lessons/04-03-charged-particles-through-matter.md) |
| First pass at the Gy/Sv dose ladder and the $w_R$, $w_T$ tables | [intro-nuclear-engineering 4.4](../intro-nuclear-engineering/lessons/04-04-dose-quantities.md) |
| The Poisson distribution and its binomial limit | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Why variances (not standard deviations) add for independent quantities | [prob-stat-refresher 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| The central-limit passage from Poisson to a Gaussian | [prob-stat-refresher 3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) |
| The 68/95/99.7 confidence bands | [prob-stat-refresher 4.2](../prob-stat-refresher/lessons/04-02-confidence-intervals.md) |
| Type-I/type-II errors and power — what the Currie $L_C$ and $L_D$ actually are | [prob-stat-refresher 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) |
| The partial-derivative propagation-of-error formula (stated in 2.2, derived nowhere here) | first-order expansion in [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md); partials in [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Definite integrals as accumulation (the CSDA range and every point-kernel integral) | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Trigonometric substitution — the move that turns the line-source integral into an arctangent | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Relativistic energy–momentum conservation behind the Compton formula, and $E=mc^2$ behind the pair threshold | [relativity 1.5](../relativity/lessons/01-05-four-vectors-momentum.md) |
| The Coulomb force that does all the work in stopping power | [em-refresher 1.1](../em-refresher/lessons/01-01-coulomb-electric-field.md) |

## Pitfalls

### Photon interactions and spectra

- The Compton edge is a *recoil-electron* feature, not a gamma line — it sits below the photopeak by exactly $E'(180^\circ)$. Always identify the highest sharp peak as the full-energy line first. *([1.1](lessons/01-01-photon-photoelectric-compton.md), [2.4](lessons/02-04-gamma-ray-spectroscopy.md))*
- A single Compton scatter can never deposit all of $E$; the photopeak requires the scattered photon to also be caught, which is why bigger, denser detectors have taller photopeaks. *([1.1](lessons/01-01-photon-photoelectric-compton.md))*
- Edge and backscatter are complementary halves of the same $180^\circ$ event and must sum to $E$ — swapping them scrambles your calibration. *([1.1](lessons/01-01-photon-photoelectric-compton.md), [2.4](lessons/02-04-gamma-ray-spectroscopy.md))*
- Single escape is $E-0.511$, double escape is $E-1.022$; and neither exists below the $1.022$ MeV threshold. *([1.2](lessons/01-02-photon-pair-production-total-attenuation.md), [2.4](lessons/02-04-gamma-ray-spectroscopy.md))*
- A low-energy bump that *moves* when you change sources is backscatter; one nailed to $0.511$ MeV is annihilation. *([2.4](lessons/02-04-gamma-ray-spectroscopy.md))*
- Being above $1.022$ MeV does not mean pair production dominates — Compton still rules to several MeV even in lead. *([1.2](lessons/01-02-photon-pair-production-total-attenuation.md))*
- Mixtures weight $(\mu/\rho)_i$ by mass fraction; $\mu/\rho$ is what transfers between materials, $\mu$ is not. *([1.2](lessons/01-02-photon-pair-production-total-attenuation.md), [4.1](lessons/04-01-exponential-attenuation-hvl.md))*

### Charged particles and neutrons

- Penetration is about charge and speed, not energy: at equal energy an alpha stops in microns while a beta travels centimetres. *([1.3](lessons/01-03-charged-particles-stopping-power-range.md))*
- The Bragg peak is not the particle speeding up — it is slowing down, and slow is when $1/v^2$ makes every collision costlier. *([1.3](lessons/01-03-charged-particles-stopping-power-range.md))*
- Never reach for lead first on a beta source: high $Z$ maximizes bremsstrahlung. Low-$Z$ plastic first, lead only for the X-rays it creates. *([1.3](lessons/01-03-charged-particles-stopping-power-range.md))*
- A neutron ionizes **nothing** directly — every neutron signal is a proxy (recoil proton, alpha, triton, or capture gamma). Design around the proxy. *([1.4](lessons/01-04-neutron-interactions.md))*
- A large cross section is a probability of interacting, not a large energy transfer: a $0.025$ eV neutron captured on $\ce{^{10}B}$ produces a 2.3 MeV pulse of *reaction* energy. *([1.4](lessons/01-04-neutron-interactions.md))*
- Inelastic scattering is not a slower elastic bounce — it excites the nucleus, emits a gamma, and has a threshold, so only fast neutrons do it. *([1.4](lessons/01-04-neutron-interactions.md))*
- A lead wall is a fast-neutron sieve. Density stops photons; light nuclei stop neutrons. *([4.4](lessons/04-04-neutron-moderation-shielding.md))*
- Capturing the neutron does not end the job — hydrogen capture hands back a 2.2 MeV gamma born *inside* your moderator, and that line, not the absorber's own, usually sets how much lead the shield secretly costs. *([4.4](lessons/04-04-neutron-moderation-shielding.md))*
- Absorber goes *behind* the moderator, never in front: thermal absorbers obey $1/v$ and are nearly transparent to fast neutrons. *([1.4](lessons/01-04-neutron-interactions.md), [4.4](lessons/04-04-neutron-moderation-shielding.md))*

### Detectors

- The proportional region multiplies *charge*, not energy — and it is the constancy of $M$, not its size, that preserves the energy information. *([1.5](lessons/01-05-gas-filled-detectors.md))*
- A bigger GM pulse means nothing: the whole tube discharges identically for a 60 keV photon and a 5 MeV alpha. *([1.5](lessons/01-05-gas-filled-detectors.md))*
- Gain never improves precision. The PMT's million-fold multiplication makes the pulse big; resolution was already fixed upstream by the photoelectron count. Use the *smallest* carrier number in the chain. *([1.6](lessons/01-06-scintillation-semiconductor-detectors.md))*
- Semiconductors have **no** internal multiplication — their advantage is purely the tiny $w \approx 3$ eV. *([1.6](lessons/01-06-scintillation-semiconductor-detectors.md))*
- HPGe is not simply "better": for raw counting efficiency a big NaI block wins, needs no cooling, and is portable. *([1.6](lessons/01-06-scintillation-semiconductor-detectors.md))*
- The statistical resolution is a **floor, not a promise**: real NaI sits well above it (light-collection and PMT jitter), while real HPGe beats it (Fano factor). *([2.3](lessons/02-03-energy-resolution-pulse-height.md))*
- A wider peak does not mean more counts — width is scatter, area is counts, and the two are independent. *([2.3](lessons/02-03-energy-resolution-pulse-height.md))*
- Quote resolution as a percent *and* name the energy: absolute FWHM grows with energy even as the fraction improves. *([2.3](lessons/02-03-energy-resolution-pulse-height.md))*
- The $\sqrt{N}$ of counting statistics and the $\sqrt{N}$ of peak width are different $N$'s — counts in a measurement versus carriers in one pulse. *([2.3](lessons/02-03-energy-resolution-pulse-height.md))*

### Counting and statistics

- You never need to repeat a count to get an error bar; a single Poisson count already carries $\sigma=\sqrt{N}$. *([2.1](lessons/02-01-counting-statistics-poisson-gaussian.md))*
- $\sqrt{N}$ applies to raw **counts**, never to a rate: take the square root of the integer count, *then* divide by the exact time. "Square root of the rate" is wrong units and a wrong value. *([2.1](lessons/02-01-counting-statistics-poisson-gaussian.md), [2.2](lessons/02-02-error-propagation-dead-time.md))*
- Subtracting a background *increases* the uncertainty: $\sqrt{G+B} > \sqrt{G}$. A weak peak on a big background is the hardest thing to measure. *([2.2](lessons/02-02-error-propagation-dead-time.md), [2.3](lessons/02-03-energy-resolution-pulse-height.md))*
- Below about 20–30 counts the Poisson is skewed and the tidy 68/95 bands fail — $N-\sqrt{N}$ can even go negative. *([2.1](lessons/02-01-counting-statistics-poisson-gaussian.md))*
- A high observed rate does not imply a high true rate: past its peak a *paralyzable* detector folds back over, so an intense source can read deceptively low. Know your detector's dead-time type. *([2.2](lessons/02-02-error-propagation-dead-time.md))*
- Efficiency alone does not convert counts to activity — you also need the yield $y$, and it hides when $y \approx 1$. *([2.5](lessons/02-05-efficiency-detection-limits.md))*
- "Not detected" is decided against $L_C$, not against zero; and $L_C$ (post-count decision) is a different number from $L_D$/MDA (pre-count capability). *([2.5](lessons/02-05-efficiency-detection-limits.md))*
- With a separately-counted blank the net variance doubles — use the $\sqrt{2B}$ forms. *([2.5](lessons/02-05-efficiency-detection-limits.md))*

### Dose quantities and units

- Kerma and dose are the same energy booked at different *places* — release point versus deposition point. They coincide only under CPE, which is exactly why a buildup region exists at surfaces. *([3.1](lessons/03-01-absorbed-dose-kerma-exposure.md))*
- Under CPE dose equals **collision** kerma, not total kerma; the radiative part escapes. *([3.1](lessons/03-01-absorbed-dose-kerma-exposure.md))*
- Exposure is defined only in **air** and only for photons — there is no roentgen for neutrons or for tissue. *([3.1](lessons/03-01-absorbed-dose-kerma-exposure.md))*
- $\mu_{en}$ (energy absorbed) is not $\mu$ (photons removed). Dose calculations use the former. *([3.1](lessons/03-01-absorbed-dose-kerma-exposure.md))*
- $w_R$ and $w_T$ are protection conventions tuned for *low-dose stochastic* risk, not measured constants — applying them to a 40 Gy tumour dose gives an absurd 800 Sv. *([3.2](lessons/03-02-equivalent-effective-dose.md))*
- Gray and sievert are not convertible units; the factor between them is a dimensionless choice. A sievert is an amount of hazard, not an amount of energy. *([3.2](lessons/03-02-equivalent-effective-dose.md))*
- Effective dose is almost always *smaller* than the largest organ dose, because the tissue weights sum to one. *([3.2](lessons/03-02-equivalent-effective-dose.md))*
- Committed dose books 50 years forward onto the year of intake — one bad inhalation can blow a yearly limit on paper the day it happens. *([3.2](lessons/03-02-equivalent-effective-dose.md))*
- The mGy-to-mSv read-across works *only* because $w_R = 1$ for photons; it fails the instant neutrons or alphas appear. *([3.3](lessons/03-03-dose-from-a-source.md))*
- $\Gamma$ is fixed only once you fix its basis (exposure vs air-kerma vs $H^*(10)$, per Ci vs per GBq). The numbers differ severalfold — check the table before you multiply. *([3.3](lessons/03-03-dose-from-a-source.md))*
- LNT gives a small *probability* of a full cancer, not "a little cancer", and the 5 percent per Sv coefficient is a population average, not a personal prophecy. *([3.4](lessons/03-04-biological-effects-risk.md))*
- Regulatory limits are risk-management ceilings, not biological thresholds — for stochastic effects the assumed threshold is zero, which is the entire logic of ALARA. *([3.4](lessons/03-04-biological-effects-risk.md), [4.5](lessons/04-05-health-physics-alara-limits.md))*

### Shielding

- Halvings multiply: two HVLs leave a quarter, ten HVLs leave $1/1024$ — not one twentieth. *([4.1](lessons/04-01-exponential-attenuation-hvl.md))*
- $\mu$ and HVL are energy-dependent; for a multi-line source, shield the *most penetrating* line. *([4.1](lessons/04-01-exponential-attenuation-hvl.md))*
- The bare exponential is **optimistic**, not conservative: it ignores scattered photons *arriving*, so it under-shields. Buildup always makes the shield thicker. *([4.1](lessons/04-01-exponential-attenuation-hvl.md), [4.2](lessons/04-02-buildup-factors.md), [4.5](lessons/04-05-health-physics-alara-limits.md))*
- Use the buildup factor matched to the quantity (**dose**, for shielding people) and to the geometry it was tabulated for. *([4.2](lessons/04-02-buildup-factors.md))*
- Lead and water do not share a buildup factor — low-$Z$ materials have the larger one. *([4.2](lessons/04-02-buildup-factors.md))*
- Lead's edge in the Compton regime is **compactness, not efficiency per gram**: concrete is a hair better per g/cm², just far bulkier. *([4.1](lessons/04-01-exponential-attenuation-hvl.md))*
- Inverse square is a point-source idealization; within about one source diameter, or beside a line or area source, the falloff is slower than $1/d^2$ — integrate instead. *([3.3](lessons/03-03-dose-from-a-source.md), [4.3](lessons/04-03-point-kernel-method.md))*
- A thick source shields itself, so its surface dose saturates; doubling a drum's contents barely moves the reading at its skin. *([4.3](lessons/04-03-point-kernel-method.md))*
- The point kernel carries **both** $e^{-\mu r}$ (down) and $B$ (up) — dropping the buildup term under-predicts the dose. *([4.3](lessons/04-03-point-kernel-method.md))*
- Distance is quadratic: doubling $d$ gives a quarter, and *halving* $d$ quadruples the rate. Each doubling of distance is worth two HVLs of lead you never had to carry. *([4.5](lessons/04-05-health-physics-alara-limits.md))*
- The annual limit is a ceiling, not an allowance to spend down. *([4.5](lessons/04-05-health-physics-alara-limits.md))*
