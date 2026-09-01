# Planetary Science · Lesson 6.4: Exoplanet atmospheres

> ⏱ ~15 min · Module 6: Exoplanets and habitability · Builds on: [3.3](03-03-remote-spectroscopy.md), [4.1](04-01-atmospheric-structure.md), [4.4](04-04-atmospheric-circulation.md), [6.2](06-02-demographics-selection-effects.md) · Unlocks: [6.5](06-05-habitability-and-its-limits.md)

## Why this matters

Everything so far in Module 6 has treated an exoplanet as a point with a mass, a radius and an orbit. **This lesson is where a planet acquires a chemistry, a temperature structure and a wind.**

The techniques are ingenious and the signals are tiny — a hot Jupiter's atmosphere adds about a thousand parts per million to its transit depth, and an Earth-like atmosphere around an M dwarf about thirty. But they work, and they deliver things that sound impossible: **the composition of an atmosphere 100 light years away, the temperature of its dayside, and the speed of its winds.**

They also deliver the field's most persistent frustration. **A large fraction of measured transmission spectra are flat**, and a flat spectrum is ambiguous between "the atmosphere is heavy" and "there are clouds in the way."

## The idea

**Transmission spectroscopy: measure the transit depth as a function of wavelength.** During transit, a thin annulus of the planet's atmosphere is backlit by the star. At wavelengths where the atmosphere absorbs strongly, it is opaque out to a greater height, so **the planet looks slightly bigger** and the transit is slightly deeper. Plot depth against wavelength and the wiggles are the atmosphere's absorption spectrum.

**The signal's size is set by the scale height** ([4.1](04-01-atmospheric-structure.md)), because that is the vertical distance over which opacity changes. And since $H\propto1/\mu$, **the amplitude of the wiggles measures the mean molecular weight.** A hydrogen atmosphere ($\mu = 2.3$) gives features roughly eight times larger than a steam or CO$_2$ atmosphere ($\mu\approx18$–44).

**That is the measurement that breaks [6.3](06-03-mass-radius-composition.md)'s degeneracy.** A sub-Neptune whose mass and radius are equally consistent with a water world and with a rocky core plus hydrogen has, in transmission, either large features or small ones — and nothing in between.

**Emission and phase curves: watch the planet's own light.** Just before and after the planet passes *behind* the star (secondary eclipse), the system's combined light drops by the planet's contribution — **so the eclipse depth is the planet's dayside brightness.** And around the whole orbit, the planet shows varying fractions of its day and night sides, so the total flux rises and falls: **the phase curve.**

**Two numbers come out of a phase curve, and they are both remarkable.**

*Amplitude* measures the day–night temperature contrast, hence how efficiently the circulation redistributes heat ([4.4](04-04-atmospheric-circulation.md)). A large amplitude means a hot day and a frozen night; a small one means an atmosphere that moves heat around.

*Offset* — the peak of the phase curve does not coincide with secondary eclipse. It comes *early*, because the hottest point is displaced downwind of the substellar point by the winds. **Measuring that offset measures a wind speed on a planet that is a single unresolved point of light.**

**And then the clouds.** Aerosols high in an atmosphere are grey — they absorb and scatter at all wavelengths — so they raise the opaque level uniformly and **flatten the transmission spectrum.** Many observed spectra, particularly of cooler planets, are flat or muted, and disentangling "high mean molecular weight" from "clouds over a hydrogen atmosphere" is the field's central methodological problem ([4.5](04-05-photochemistry-hazes-evolution.md) supplied the photochemistry that makes the hazes).

## The formal version

**The transmission signal.** The atmosphere adds an annulus of thickness $N_H\,H$, where $N_H$ is the number of scale heights over which the opacity changes appreciably (typically 5–10 across a strong band):

$$\Delta\delta = \frac{(R_p+N_HH)^2-R_p^2}{R_\star^2} \approx \frac{2R_pN_HH}{R_\star^2},$$

$$\boxed{\ \Delta\delta \approx \frac{2R_pN_HH}{R_\star^2}, \qquad H = \frac{kT}{\mu m_H g}\ }$$

*In words: the signal is bigger for a big, hot, low-gravity planet with a light atmosphere, around a small star.*

| Planet | $H$ | $\Delta\delta$ ($N_H = 5$) |
|---|---|---|
| hot Jupiter ($1.4R_J$, 1500 K, $\mu = 2.3$, $g = 10$), Sun-like star | 542 km | **1100 ppm** |
| sub-Neptune ($2.5R_\oplus$, 700 K, $\mu = 2.3$, $g = 10$), $0.5R_\odot$ star | 253 km | 333 ppm |
| Earth-like ($1R_\oplus$, 290 K, $\mu = 28$, $g = 9.8$), $0.2R_\odot$ star | 8.8 km | **29 ppm** |

**Every factor in the last row works against you** — small planet, cool, heavy atmosphere, high gravity — and only the small star helps. That 29 ppm is at the edge of JWST's capability and requires stacking many transits.

**Mean molecular weight as the discriminator.** For the same planet, changing $\mu$ from 2.3 (H$_2$/He) to 18 (steam) shrinks the features by $18/2.3 = 7.8$. **This is a large, unambiguous factor**, which is why a single well-measured transmission spectrum can settle a composition that mass and radius cannot.

**Secondary eclipse depth.** The planet-to-star flux ratio in the thermal infrared:

$$\frac{F_p}{F_\star} = \left(\frac{R_p}{R_\star}\right)^2\frac{B_\lambda(T_p)}{B_\lambda(T_\star)},$$

which in the Rayleigh–Jeans limit ($hc/\lambda\ll kT$) simplifies to

$$\frac{F_p}{F_\star} \approx \left(\frac{R_p}{R_\star}\right)^2\frac{T_p}{T_\star}.$$

*In words: the eclipse depth is the transit depth times the temperature ratio.* For a hot Jupiter at 1500 K around a 5800 K star, that is $0.010\times0.259 = 2600$ ppm — comparable to the transit depth itself, and much easier than the transmission signal.

**Phase-curve amplitude and heat redistribution.** Define the redistribution efficiency $\varepsilon_{\text{red}}$ so that

$$T_{\text{day}} = T_0\left(1-\tfrac{\varepsilon_{\text{red}}}{2}\right)^{1/4}\cdot(\ldots), \qquad T_{\text{night}} \to T_{\text{day}}\ \text{as}\ \varepsilon_{\text{red}}\to1.$$

The observable is the ratio:

$$A = \frac{F_{\text{day}}-F_{\text{night}}}{F_{\text{day}}+F_{\text{night}}}.$$

The physics is the competition of [4.4](04-04-atmospheric-circulation.md):

$$\frac{\tau_{\text{rad}}}{\tau_{\text{adv}}}, \qquad \tau_{\text{rad}}\sim\frac{Pc_p}{g\sigma T^3}, \qquad \tau_{\text{adv}}\sim\frac{a_p}{U}.$$

*In words: if radiation is fast compared with winds, the night side is cold and the amplitude is large.* Since $\tau_{\text{rad}}\propto T^{-3}$, **hotter planets radiate faster, redistribute less, and show larger contrasts** — a trend clearly present in the data.

**Hot-spot offset.** The peak of the phase curve leads secondary eclipse by a phase $\Delta\phi$ corresponding to the displacement of the hottest point:

$$\Delta\phi \sim \frac{U\,\tau_{\text{rad}}}{2\pi a_p}.$$

Measured offsets for hot Jupiters are typically 10–30 degrees eastward, implying equatorial jets of **1–5 km s$^{-1}$** — consistent with the superrotation of [4.4](04-04-atmospheric-circulation.md), scaled to a far hotter, faster-forced atmosphere.

**Clouds and hazes.** A grey aerosol layer at pressure $P_c$ truncates the spectrum: below the cloud deck nothing is visible, so features are muted by

$$\text{muting factor} \approx \frac{\ln(P_c/P_{\text{top}})}{\ln(P_{\text{base}}/P_{\text{top}})}.$$

**A high cloud deck removes the signal entirely.** Distinguishing clouds from high $\mu$ requires either observing at wavelengths where a strong band pokes above the deck, or combining transmission with emission — since clouds affect the two differently.

**What has actually been detected.** Water in dozens of hot Jupiters and warm Neptunes; carbon dioxide, methane, sulphur dioxide (a photochemical product, [4.5](04-05-photochemistry-hazes-evolution.md)) in the best-observed; sodium and potassium in the hottest; and — the frontier — **CO$_2$ and CH$_4$ in the sub-Neptune regime**, where the mean-molecular-weight measurement decides what these planets are.

## Picture

![Left, a transmission spectrum: transit depth in parts per million against wavelength from 0.5 to 5 micrometres. A blue curve labelled clear hydrogen-rich shows a baseline near 14,700 ppm with prominent bumps at 1.4, 1.9 and 2.7 micrometres marked water, at 3.3 marked methane and at 4.3 marked carbon dioxide, rising several hundred ppm above the baseline. A flat dashed coral line labelled cloudy or high mean molecular weight shows no features at all. Notes explain that band amplitude is approximately twice the planet radius times the scale height times the number of scale heights, divided by the square of the stellar radius, and that since scale height is inversely proportional to mean molecular weight the size of the wiggles measures that quantity, which is what breaks the water-versus-hydrogen degeneracy; and that a flat spectrum is ambiguous between a heavy atmosphere and clouds muting a hydrogen one. Right, a phase curve: planet flux against orbital phase from transit through secondary eclipse and back. A blue curve with a large amplitude is labelled poor redistribution and a dashed coral curve with a small amplitude efficient redistribution. A vertical line marks secondary eclipse and a second line slightly before it marks the peak, with an arrow labelled hot-spot offset, winds carry heat downwind of noon. Notes explain that the amplitude gives the day-night contrast and hence redistribution efficiency, the offset gives the wind speed at the photosphere, and the eclipse depth gives the dayside brightness temperature](assets/06-04-fig1.svg)

Two techniques, four measurements — composition, mean molecular weight, dayside temperature, and wind speed — from a source that is never resolved.

## Worked examples

**Example 1 (mechanical — how big is the signal?).** A sub-Neptune has $R_p = 2.5\,R_\oplus$, $T = 700$ K, $g = 10\ \mathrm{m\,s^{-2}}$, around a $0.5\,R_\odot$ star. Compute the transmission signal for a hydrogen atmosphere ($\mu = 2.3$) and for a steam atmosphere ($\mu = 18$), taking $N_H = 5$.

*Hydrogen:*

$$H = \frac{kT}{\mu m_Hg} = \frac{1.381\times10^{-23}\times700}{2.3\times1.661\times10^{-27}\times10} = \frac{9.667\times10^{-21}}{3.820\times10^{-26}} = 2.530\times10^{5}\ \mathrm{m} = 253\ \mathrm{km}.$$

$$R_p = 2.5\times6.371\times10^{6} = 1.593\times10^{7}\ \mathrm{m}, \qquad R_\star = 0.5\times6.957\times10^{8} = 3.479\times10^{8}\ \mathrm{m}.$$

$$\Delta\delta = \frac{2\times1.593\times10^{7}\times5\times2.530\times10^{5}}{(3.479\times10^{8})^2} = \frac{4.031\times10^{13}}{1.210\times10^{17}} = 3.33\times10^{-4} = 333\ \mathrm{ppm}.$$

*Steam:* $H$ is smaller by $18/2.3 = 7.83$, so

$$\Delta\delta = \frac{333}{7.83} = 43\ \mathrm{ppm}.$$

**333 ppm versus 43 ppm — a factor of eight, and both are measurable by JWST.** So a handful of transits settles which kind of planet this is, and the answer is not a marginal statistical preference but a large, obvious difference in the size of the features.

**This is the single most valuable measurement in the sub-Neptune regime**, because it decides whether the most common planets in the galaxy are miniature Neptunes with thick hydrogen envelopes or water worlds — two completely different formation histories.

**Example 2 (why you'd care — measuring wind on another world).** A hot Jupiter has $a_p = 0.05$ AU, $T = 1400$ K, $g = 20\ \mathrm{m\,s^{-2}}$, $c_p = 13{,}000\ \mathrm{J\,kg^{-1}\,K^{-1}}$, and its phase-curve peak leads secondary eclipse by 20°. Estimate the wind speed.

First the radiative timescale, at the photosphere, taking $P\approx0.1$ bar:

$$\tau_{\text{rad}} = \frac{Pc_p}{g\sigma T^3} = \frac{10^{4}\times1.3\times10^{4}}{20\times5.67\times10^{-8}\times(1400)^3}.$$

$$(1400)^3 = 2.744\times10^{9}, \qquad \text{denominator} = 20\times5.67\times10^{-8}\times2.744\times10^{9} = 3111,$$
$$\tau_{\text{rad}} = \frac{1.3\times10^{8}}{3111} = 4.18\times10^{4}\ \mathrm{s} \approx 11.6\ \mathrm{h}.$$

Then from $\Delta\phi\sim U\tau_{\text{rad}}/(2\pi a_p)$, with $\Delta\phi = 20° = 0.349$ rad, i.e. a fraction $20/360 = 0.0556$ of the circumference:

$$U = \frac{0.0556\times2\pi a_p}{\tau_{\text{rad}}} = \frac{0.0556\times2\pi\times0.05\times1.496\times10^{11}}{4.18\times10^{4}}.$$

$$2\pi\times7.48\times10^{9} = 4.70\times10^{10}\ \mathrm{m}, \qquad U = \frac{0.0556\times4.70\times10^{10}}{4.18\times10^{4}} = \frac{2.613\times10^{9}}{4.18\times10^{4}} = 6.3\times10^{4}\ \mathrm{m\,s^{-1}}.$$

**That comes out at 63 km/s, which is far too fast** — real hot-Jupiter jets are 1–5 km/s. The estimate is wrong by an order of magnitude, and understanding why is more instructive than the number.

The error is in the geometry: the displacement of the hot spot is not the *planet's orbital* circumference but the *planet's own* circumference. Redoing it with $2\pi R_p$ for $R_p = 1.4\,R_J = 1.0\times10^{8}$ m:

$$U = \frac{0.0556\times2\pi\times1.0\times10^{8}}{4.18\times10^{4}} = \frac{0.0556\times6.28\times10^{8}}{4.18\times10^{4}} = \frac{3.49\times10^{7}}{4.18\times10^{4}} = 835\ \mathrm{m\,s^{-1}}.$$

**About 0.8 km/s — now in the right range**, and consistent with the 1–5 km/s inferred from full circulation models.

**Two lessons, and the second is the general one.** Substantively: a measured phase offset plus an estimated radiative timescale gives a wind speed, and the numbers come out at kilometres per second, an order of magnitude faster than any wind on Earth — as expected for an atmosphere forced by $10^{6}\ \mathrm{W\,m^{-2}}$ of irradiation. Methodologically: **the sanity check on the answer caught a dimensional error that the algebra did not.** Knowing roughly what a planetary wind speed should be is what made 63 km/s recognizable as wrong, and that is worth as much as the formula.

## Watch out

- **You might think a flat transmission spectrum means a heavy atmosphere, but clouds over a hydrogen atmosphere look identical in transmission.** Breaking the tie needs emission spectra, or a strong band that pokes above the cloud deck, or both.
- **You might think transmission and emission probe the same thing, but they probe different regions.** Transmission samples the terminator at low pressure along a long slant path; emission samples the dayside at higher pressure. A planet can show water in emission and a flat transmission spectrum, and both are correct.
- **You might think the signal scales with planet size, but it scales as $R_pH/R_\star^2$**, and $H\propto T/(\mu g)$. A large, dense, cool planet with a heavy atmosphere is a *worse* target than a small puffy hot one.
- **You might think detecting a molecule establishes an abundance, but retrieved abundances are strongly degenerate with the cloud-top pressure and the reference radius.** Published mixing ratios often carry uncertainties of two orders of magnitude even when the detection itself is secure.
- **You might think the phase-curve offset is small enough to ignore, but it is the only direct measurement of wind on an exoplanet** and it is routinely 10–30 degrees.

## One-liner

> The size of the wiggles in a transmission spectrum measures the mean molecular weight, the amplitude of a phase curve measures how well the winds move heat, and the offset of its peak measures how fast they blow.

## Problems

**P1 (🟢)** A hot Jupiter has $R_p = 1.2\,R_J = 8.39\times10^{7}$ m, $T = 1200$ K, $\mu = 2.3$, $g = 15\ \mathrm{m\,s^{-2}}$, around a Sun-like star. (a) Compute $H$. (b) Compute the transmission signal for $N_H = 5$. (c) Compare with its transit depth.

**P2 (🟡)** A secondary eclipse is observed at 4.5 μm. The planet has $R_p/R_\star = 0.10$, $T_p = 1600$ K, $T_\star = 6000$ K. (a) Use the Rayleigh–Jeans approximation to estimate the eclipse depth. (b) Check whether Rayleigh–Jeans is valid at 4.5 μm for both temperatures by comparing $hc/\lambda k$ with each. (c) Comment on which of the two is better approximated.

**P3 (🔴, optional)** A temperate planet of $1\,R_\oplus$ orbits a $0.15\,R_\odot$ M dwarf, with $T = 280$ K and $g = 9.8\ \mathrm{m\,s^{-2}}$. (a) Compute the transmission signal for an N$_2$-dominated atmosphere ($\mu = 28$) with $N_H = 5$. (b) Repeat for a hydrogen-rich atmosphere ($\mu = 2.3$). (c) JWST can reach roughly 10–20 ppm on the best targets after stacking many transits. Assess which case is detectable, and state what a non-detection would and would not establish.

<details>
<summary>Solutions</summary>

**P1** (a) $$H = \frac{1.381\times10^{-23}\times1200}{2.3\times1.661\times10^{-27}\times15} = \frac{1.657\times10^{-20}}{5.730\times10^{-26}} = 2.892\times10^{5}\ \mathrm{m} = 289\ \mathrm{km}.$$

(b) $$\Delta\delta = \frac{2R_pN_HH}{R_\star^2} = \frac{2\times8.39\times10^{7}\times5\times2.892\times10^{5}}{(6.957\times10^{8})^2} = \frac{2.427\times10^{14}}{4.840\times10^{17}}.$$
$$= 5.01\times10^{-4} = 501\ \mathrm{ppm}.$$

(c) $$\delta = \left(\frac{8.39\times10^{7}}{6.957\times10^{8}}\right)^2 = (0.1206)^2 = 0.01455 = 14{,}550\ \mathrm{ppm}.$$

$$\frac{501}{14{,}550} = 3.4\%.$$

**The atmospheric features are about 3 percent of the transit depth.** That ratio, $2N_HH/R_p$, is a useful rule of thumb: the spectral modulation is a few percent of the transit for a hot hydrogen atmosphere, and far less for anything else.

**P2** (a) $$\frac{F_p}{F_\star} \approx \left(\frac{R_p}{R_\star}\right)^2\frac{T_p}{T_\star} = (0.10)^2\times\frac{1600}{6000} = 0.01\times0.2667 = 2.67\times10^{-3} = 2670\ \mathrm{ppm}.$$

(b) The Rayleigh–Jeans limit requires $hc/\lambda\ll kT$, i.e. $T\gg hc/(\lambda k)$:

$$\frac{hc}{\lambda k} = \frac{6.626\times10^{-34}\times2.998\times10^{8}}{4.5\times10^{-6}\times1.381\times10^{-23}} = \frac{1.986\times10^{-25}}{6.215\times10^{-29}} = 3196\ \mathrm{K}.$$

Compare: $T_p = 1600$ K, so $hc/\lambda k / T_p = 2.00$; $T_\star = 6000$ K, so the ratio is 0.533.

(c) **The star is much better approximated.** At 6000 K the ratio is 0.53, so $e^{x}-1\approx x(1+x/2)$ is accurate to about 25 percent; at 1600 K the ratio is 2.0, and the Planck function is far from Rayleigh–Jeans — the exponential is doing real work.

The consequence is that the approximation **underestimates the planet's flux deficit relative to the star**, since the cooler body is further into the Wien regime where its emission falls off faster than linearly in $T$. Computing properly:

$$\frac{B_\lambda(1600)}{B_\lambda(6000)} = \frac{e^{3196/6000}-1}{e^{3196/1600}-1} = \frac{e^{0.5327}-1}{e^{1.9975}-1} = \frac{0.7036}{6.3722} = 0.1104,$$

giving an eclipse depth of $0.01\times0.1104 = 1104$ ppm rather than 2670 — **the approximation is high by a factor of 2.4.**

The practical rule is that Rayleigh–Jeans is adequate for eclipse estimates only well beyond about 5 μm for a 1500 K planet, and one should use the full Planck ratio at shorter wavelengths. This matters because the most sensitive JWST instruments work at 3–5 μm, precisely where the approximation fails.

**P3** (a) $$H = \frac{1.381\times10^{-23}\times280}{28\times1.661\times10^{-27}\times9.8} = \frac{3.867\times10^{-21}}{4.557\times10^{-25}} = 8486\ \mathrm{m} = 8.5\ \mathrm{km}.$$

$$R_\star = 0.15\times6.957\times10^{8} = 1.044\times10^{8}\ \mathrm{m},$$
$$\Delta\delta = \frac{2\times6.371\times10^{6}\times5\times8486}{(1.044\times10^{8})^2} = \frac{5.406\times10^{11}}{1.089\times10^{16}} = 4.96\times10^{-5} = 50\ \mathrm{ppm}.$$

(b) $H$ is larger by $28/2.3 = 12.2$:

$$\Delta\delta = 50\times12.2 = 608\ \mathrm{ppm}.$$

(c) **Both are detectable in principle** — 608 ppm easily, and 50 ppm within reach after stacking many transits on a favourable target, which is why the TRAPPIST-1 planets have received so much JWST time.

**What a non-detection would establish**, and what it would not, is the important part.

*It would establish* that the planet does not have an extended, cloud-free, low-mean-molecular-weight atmosphere. That is a real result: it rules out a hydrogen-rich envelope, which for a $1\,R_\oplus$ planet would have been surprising anyway but is worth excluding, and it is what several TRAPPIST-1 planets have now delivered.

*It would not establish* that the planet has no atmosphere. A flat spectrum is equally consistent with a high-mean-molecular-weight atmosphere whose 50 ppm features fell below the noise, with a thick cloud or haze deck over anything, or with a Venus-like atmosphere that is both heavy and cloudy. **The measurement's null result is much weaker than its positive one**, which is a general feature of transmission spectroscopy and a recurring source of overstatement in press coverage.

The complementary measurement is **thermal emission at secondary eclipse**, which is sensitive to whether the planet redistributes heat at all: a bare rock with no atmosphere has a dayside at the full no-redistribution temperature, while any substantial atmosphere cools it. That test has been applied to TRAPPIST-1 b and c and favours little or no atmosphere on both — a conclusion reached through the energy budget rather than through spectroscopy, and it is the more robust of the two approaches for airless-versus-not.

</details>

## Flashback

**From Lesson 6.2 (Demographics and selection effects):** A survey of 80,000 stars detects 30 transiting planets at 0.4 AU around Sun-like stars, with an estimated detection completeness of 0.7 for signals of this size. (a) Compute the transit probability. (b) Compute the raw detection fraction. (c) Compute the debiased occurrence rate and state the factor by which it exceeds the raw fraction.

<details>
<summary>Solution</summary>

(a) $$p_{\text{tr}} = \frac{R_\odot}{a} = \frac{6.957\times10^{8}}{0.4\times1.496\times10^{11}} = \frac{6.957\times10^{8}}{5.984\times10^{10}} = 0.01163 = 1.16\%.$$

(b) $$\frac{30}{80{,}000} = 3.75\times10^{-4} = 0.0375\%.$$

(c) $$f = \frac{N_{\text{det}}}{N_\star\,p_{\text{tr}}\,C} = \frac{30}{80{,}000\times0.01163\times0.70} = \frac{30}{651.3} = 0.0461 = 4.6\%.$$

$$\frac{0.0461}{3.75\times10^{-4}} = 123.$$

**The debiased rate exceeds the raw fraction by a factor of 123** — 86 from geometry ($1/0.01163$) and 1.43 from completeness ($1/0.70$). As [6.2](06-02-demographics-selection-effects.md) stressed, the geometric term dominates for anything other than very close-in orbits, and both are lower bounds since the searchable stellar sample is smaller than the surveyed one.

</details>

## Connections

- **Backward:** [4.1](04-01-atmospheric-structure.md) supplied the scale height that the entire transmission signal is proportional to; [4.4](04-04-atmospheric-circulation.md) supplied the redistribution physics that phase curves measure; [6.3](06-03-mass-radius-composition.md) left the water-versus-hydrogen degeneracy that the mean molecular weight resolves; [4.5](04-05-photochemistry-hazes-evolution.md) supplied the hazes that flatten spectra.
- **Forward:** [6.5](06-05-habitability-and-its-limits.md) asks what could be detected on a genuinely habitable planet, and whether a biosignature could survive these ambiguities.
- **Sideways:** the underlying radiative transfer and line formation are [astrophysics 1.3](../../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md)'s, and [3.3](03-03-remote-spectroscopy.md) ran the same machinery on solar-system surfaces where the signal is a million times larger. Atmospheric retrieval — inverting a spectrum for composition and structure — is a high-dimensional Bayesian inverse problem of the kind [`statistical-learning`](../../statistical-learning/syllabus.md) treats, and its degeneracies are the reason error bars on retrieved abundances are so wide.
