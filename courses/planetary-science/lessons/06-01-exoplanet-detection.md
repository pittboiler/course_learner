# Planetary Science · Lesson 6.1: Exoplanet detection

> ⏱ ~15 min · Module 6: Exoplanets and habitability · Builds on: [3.1](03-01-mass-density-moment-of-inertia.md), [5.4](05-04-rings-satellite-systems.md) · Unlocks: [6.2](06-02-demographics-selection-effects.md), [6.3](06-03-mass-radius-composition.md), [6.4](06-04-exoplanet-atmospheres.md)

## Why this matters

Everything in Modules 1 through 5 was built from one planetary system. **Module 6 is where the sample size goes from eight to six thousand**, and where the formation theory of Module 1 finally gets tested against something other than the system it was reverse-engineered from.

But the sample is not a random draw. Every detection method has a sharp, computable bias, and **almost every surprising claim about exoplanets that turned out to be wrong was a selection effect misread as a discovery.** Understanding what each method can and cannot see is therefore not preliminary throat-clearing — it is the substance, and [6.2](06-02-demographics-selection-effects.md) is built entirely on it.

## The idea

**Two methods do almost all the work, and they measure different things.**

*Transits.* If the orbit is edge-on enough, the planet crosses the star's disk once per orbit and blocks a fraction of its light equal to the ratio of areas. **The depth gives the planet's radius**, in units of the star's; the period gives the orbit; the duration and shape give the orbital geometry.

*Radial velocity.* The star and planet orbit their common centre of mass, so the star moves too, and its spectrum shifts periodically by the Doppler effect. **The amplitude gives the planet's mass**, times $\sin i$ — because a face-on orbit produces no line-of-sight motion at all.

**Neither alone tells you what a planet is.** A radius without a mass could be a rock or a puffball; a mass without a radius could be anything. **Only a planet that both transits and is detected in radial velocity has a measured density**, and density is the entry point to composition ([6.3](06-03-mass-radius-composition.md)). This is why the same targets are observed twice by different instruments, and why the subset with both is far smaller than the total.

**The scale of the signals is worth internalizing.** Jupiter transiting the Sun dims it by 1 percent — easy. Earth transiting the Sun dims it by 84 parts per million — the reason Kepler had to be a space telescope. Jupiter makes the Sun wobble by 12.5 m/s, a comfortable measurement; **Earth makes it wobble by 9 centimetres per second**, which is at the very edge of what the best spectrographs achieve and is comparable to the noise from the star's own surface convection.

**And the biases follow immediately from those formulas.**

- Transits favour **large planets** (depth $\propto R_p^2$) around **small stars** (depth $\propto1/R_\star^2$) on **short periods** — because the geometric probability of a transit is $R_\star/a$, and because more transits accumulate in a fixed survey.
- Radial velocity favours **massive planets** on **short periods** ($K\propto M_p P^{-1/3}$) around **low-mass stars**.

**Both favour big and close. Neither favours anything like Earth.** So the raw catalogue of known exoplanets is not remotely a fair sample of what exists, and this is entirely predictable — which means it is correctable, which is [6.2](06-02-demographics-selection-effects.md)'s subject.

**Three other methods fill in the gaps.** *Direct imaging* sees young, hot, widely separated giants — the only method that collects the planet's own photons. *Microlensing* is sensitive to planets beyond the snow line at kiloparsec distances, and is the only method whose sensitivity peaks where planet formation theory says planets should form — but each event happens once and never repeats. *Transit timing variations* measure masses in multi-planet systems from the planets' mutual tugs, and it is how the TRAPPIST-1 masses were obtained.

## The formal version

**Transit depth.**

$$\boxed{\ \delta = \left(\frac{R_p}{R_\star}\right)^2\ }$$

| System | $\delta$ |
|---|---|
| Jupiter / Sun | 1.01% |
| Earth / Sun | 84 ppm |
| $2\,R_\oplus$ / $0.5\,R_\odot$ | 1340 ppm |
| Earth / $0.2\,R_\odot$ M dwarf | 2100 ppm |

**Read the last two rows.** An Earth-sized planet around a small M dwarf produces a signal 25 times larger than around the Sun. **This is why the search for temperate terrestrial planets has moved almost entirely to M dwarfs**, and it drives the habitability discussion of [6.5](06-05-habitability-and-its-limits.md).

**Transit duration.** For a central transit ($b=0$) with $a\gg R_\star$:

$$T \approx \frac{P}{\pi}\frac{R_\star}{a}, \qquad\text{more generally}\qquad T = \frac{P}{\pi}\arcsin\left[\frac{R_\star}{a}\frac{\sqrt{(1+k)^2-b^2}}{\sin i}\right],$$

with $k = R_p/R_\star$ and $b = (a/R_\star)\cos i$ the impact parameter. *In words: the duration measures $a/R_\star$ and the geometry, which is how a transit yields the stellar density.*

**Transit probability.** For random orbital orientations, the fraction of systems that transit is

$$p_{\text{tr}} = \frac{R_\star}{a}.$$

| Orbit | $p_{\text{tr}}$ |
|---|---|
| 1 AU around the Sun | 0.47% |
| 0.05 AU around the Sun | 9.3% |
| 0.03 AU around a $0.2\,R_\odot$ star | 3.1% |

**Fewer than one in two hundred Earth-analogues transit.** Correcting for this is the first step in any occurrence-rate calculation.

**Radial velocity semi-amplitude.**

$$K = \left(\frac{2\pi G}{P}\right)^{1/3}\frac{M_p\sin i}{(M_\star+M_p)^{2/3}}\frac{1}{\sqrt{1-e^2}},$$

or in practical units:

$$\boxed{\ K \approx 28.4\ \mathrm{m\,s^{-1}}\ \frac{M_p\sin i}{M_J}\left(\frac{M_\star}{M_\odot}\right)^{-2/3}\left(\frac{P}{\mathrm{yr}}\right)^{-1/3}\ }$$

| System | $K$ |
|---|---|
| Jupiter / Sun | 12.5 m s$^{-1}$ |
| hot Jupiter, 3 d / Sun | 141 m s$^{-1}$ |
| Earth / Sun | **8.9 cm s$^{-1}$** |
| Earth-mass at 15 d around $0.3\,M_\odot$ | 58 cm s$^{-1}$ |

**Note the $\sin i$ degeneracy.** Radial velocity alone gives only a *minimum* mass. A transit fixes $i\approx90°$, removing it — which is the other reason the two methods are used together.

**Astrometry.** The star's angular displacement about the barycentre:

$$\alpha = \frac{M_p}{M_\star}\frac{a}{d}.$$

*In words: in arcseconds, with $a$ in AU and $d$ in parsecs.* Jupiter viewed from 10 pc gives 496 μas; **Earth gives 0.3 μas**. Astrometry favours *long* periods, complementing the other two, and Gaia is expected to deliver thousands of giant-planet detections.

**Direct imaging.** The obstacle is contrast, not resolution:

$$\frac{F_p}{F_\star}\Big|_{\text{reflected}} = A_g\left(\frac{R_p}{a}\right)^2 \sim 10^{-9}\ \text{for a Jupiter analogue.}$$

In the thermal infrared a *young* giant, still hot from formation, is far brighter relative to its star ($\sim10^{-5}$), which is why every directly imaged planet so far orbits a young star at tens of AU.

**Microlensing.** A foreground star lenses a background one; a planet adds a brief extra spike. The sensitivity peaks near the Einstein radius,

$$\theta_E = \sqrt{\frac{4GM_\star}{c^2}\frac{d_s-d_l}{d_sd_l}}, \qquad r_E \approx 2\text{–}4\ \mathrm{AU}\ \text{for typical geometries},$$

**exactly the snow-line region where [1.2](01-02-condensation-frost-line.md) says giant planets should form.** Its drawbacks are severe: the event is unrepeatable, the host star is often unidentifiable, and masses come with large uncertainties.

**Transit timing variations.** In a multi-planet system, mutual perturbations shift transit times by

$$\Delta t \sim P\,\frac{M_{\text{pert}}}{M_\star}\times(\text{resonance amplification}),$$

which near a resonance can be minutes to hours. **TTVs measure true masses without radial velocity**, which is how the TRAPPIST-1 planets — far too faint for precise spectroscopy — were weighed.

## Picture

![Upper left, a transit light curve: relative brightness against time, flat at 1.000, dropping through an ingress to a flat floor at 0.990 and returning through egress. The depth is marked as delta equals the square of the planet-to-star radius ratio, giving the radius, and the duration between first and last contact is marked as giving the ratio of semi-major axis to stellar radius and the impact parameter. Lower left, a radial velocity curve: stellar line-of-sight velocity in metres per second against orbital phase, a sine wave of amplitude about 12.5, with the amplitude marked K and annotated that the period gives the semi-major axis and K gives the planet mass times the sine of the inclination. Right, a table of what each method reaches: transit gives the radius ratio, with Jupiter over Sun at 1 percent, Earth over Sun at 84 parts per million and Earth around a small M dwarf at 2100 parts per million; radial velocity gives mass times sine i, with Jupiter at 12.5 metres per second, Earth at 9 centimetres per second and a hot Jupiter at 141; astrometry gives mass and inclination, with Jupiter at 10 parsecs producing 496 microarcseconds and Earth 0.3; direct imaging collects the planet's own photons but reaches only young hot wide-orbit giants; microlensing is sensitive beyond the snow line but the event never repeats; and transit timing gives masses from mutual tugs, best in resonant chains. A closing note says transit and radial velocity together give radius and mass, hence density, and only then composition](assets/06-01-fig1.svg)

Two curves, four numbers — depth, duration, period, amplitude — and from them a planet's size, mass, orbit and density.

## Worked examples

**Example 1 (mechanical — characterizing a transiting planet).** A Sun-like star ($R_\star = R_\odot$, $M_\star = M_\odot$) shows transits of depth 1.0 percent with a 300-day period. Find the planet's radius and orbital distance, and the radial-velocity amplitude if it is a gas giant.

*Radius:* $$\frac{R_p}{R_\star} = \sqrt{0.010} = 0.1000, \qquad R_p = 0.1000\times6.957\times10^{8} = 6.957\times10^{7}\ \mathrm{m}.$$

$$\frac{R_p}{R_\oplus} = \frac{6.957\times10^{7}}{6.371\times10^{6}} = 10.9.$$

**Just under Jupiter's 11.2 $R_\oplus$** — this is a gas giant, not a terrestrial planet, and that conclusion follows from the depth alone.

*Orbit:* $$a = \left(\frac{P}{1\ \mathrm{yr}}\right)^{2/3} = \left(\frac{300}{365.25}\right)^{2/3} = (0.8214)^{2/3} = 0.877\ \mathrm{AU}.$$

*Radial velocity,* taking $M_p = 1\,M_J$:

$$K = 28.4\times1\times1\times\left(\frac{300/365.25}{1}\right)^{-1/3} = 28.4\times(0.8214)^{-1/3} = 28.4\times1.0691 = 30.4\ \mathrm{m\,s^{-1}}.$$

**Thirty metres per second is a routine measurement**, so this planet's mass would be easy to confirm — and with both, its density follows.

*Transit probability,* for the debiasing of [6.2](06-02-demographics-selection-effects.md):

$$p_{\text{tr}} = \frac{R_\star}{a} = \frac{6.957\times10^{8}}{0.877\times1.496\times10^{11}} = \frac{6.957\times10^{8}}{1.312\times10^{11}} = 5.30\times10^{-3} = 0.530\%.$$

**Example 2 (why you'd care — could we detect Earth from outside?).** Suppose an alien astronomer observes the Sun from 10 pc. What would each method give?

*Transit.* Depth 84 ppm. Detectable, but only with a space telescope achieving tens of ppm photometry, and only if the orbit happens to be within 0.27° of edge-on — a **0.47 percent** chance. And a 365-day period means you must observe for at least three years to see three transits, the usual detection threshold.

*Radial velocity.* $K = 8.9\ \mathrm{cm\,s^{-1}}$. State-of-the-art spectrographs reach roughly 30 cm/s in practice, and the limiting noise is not the instrument but **the star itself** — granulation, oscillations and magnetic activity on the Sun's surface produce apparent velocity shifts of order 1 m/s on timescales from minutes to years. Extracting a 9 cm/s signal requires modelling stellar noise an order of magnitude larger.

*Astrometry.* 0.3 μas. Gaia's end-of-mission precision is of order 20–30 μas per star for bright targets; **Earth is a hundred times below it.**

*Direct imaging.* Contrast $\sim10^{-10}$ at a separation of 0.1 arcsec. Beyond any existing instrument, and the target of future missions specifically designed for it.

**Every method is marginal or impossible for the one planet we know is interesting.** That is the honest state of the field, and it has two consequences worth carrying into the next four lessons.

**First, the known exoplanet population contains almost nothing like Earth**, not because such planets are rare but because they are the hardest thing to detect. **Second, the way around it is to change the star, not the method**: an Earth-sized planet around a 0.2 $R_\odot$ M dwarf has a 2100 ppm transit depth (25 times deeper), a 58 cm/s radial-velocity signal (6.5 times larger), a 3 percent transit probability (6 times higher), and a 20-day period rather than 365 (so transits accumulate 18 times faster). **The entire observational strategy for finding habitable planets is a consequence of these four ratios** — and [6.5](06-05-habitability-and-its-limits.md) asks what is lost by making that trade.

## Watch out

- **You might think a transit depth gives the planet's radius, but it gives the *ratio* $R_p/R_\star$.** Every planetary radius in the catalogue is only as good as the stellar radius, and revisions to stellar parameters — Gaia's parallaxes, most recently — have moved thousands of planet radii by tens of percent.
- **You might think radial velocity gives the mass, but it gives $M_p\sin i$**, a lower bound. Only a transit, an astrometric detection, or a dynamical constraint from a multi-planet system removes the ambiguity.
- **You might think a non-detection means no planet, but for transits it usually means the orbit is not aligned.** With $p_{\text{tr}}<1\%$ for temperate orbits, the overwhelming majority of such planets can never transit from our line of sight — no improvement in instrumentation changes that.
- **You might think radial-velocity precision is limited by spectrographs, but it is limited by stars.** Granulation and magnetic activity produce velocity jitter at the metre-per-second level, and beating it is a stellar-astrophysics problem, not an engineering one.

## One-liner

> The transit gives you a radius, the wobble gives you a mass, and both of them systematically show you big planets close in — which is a fact about the methods, not about planets.

## Problems

**P1 (🟢)** A star has $R_\star = 0.4\,R_\odot$ and $M_\star = 0.4\,M_\odot$. A planet transits with depth 0.30 percent and period 8.0 d. (a) Compute $R_p$ in Earth radii. (b) Compute $a$ in AU. (c) Compute the transit probability.

**P2 (🟡)** Use $K = 28.4\ \mathrm{m\,s^{-1}}\,(M_p/M_J)(M_\star/M_\odot)^{-2/3}(P/\mathrm{yr})^{-1/3}$. (a) Compute $K$ for a $5\,M_\oplus$ planet with $P = 20$ d around a $0.5\,M_\odot$ star. (b) Repeat for the same planet at $P = 200$ d. (c) A spectrograph reaches 50 cm/s; which is detectable, and state the general bias this creates.

**P3 (🔴, optional)** A survey monitors 200,000 stars for 4 years and requires 3 transits for a detection. (a) What is the longest period it can detect? (b) For a Sun-like star, compute the transit probability at that period. (c) If the survey detects 8 planets of this period and size, and its photometric completeness for such signals is 60 percent, estimate the occurrence rate. State one reason it is a lower bound.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{R_p}{R_\star} = \sqrt{0.0030} = 0.05477, \qquad R_p = 0.05477\times0.4\times6.957\times10^{8} = 1.524\times10^{7}\ \mathrm{m}.$$

$$\frac{R_p}{R_\oplus} = \frac{1.524\times10^{7}}{6.371\times10^{6}} = 2.39.$$

A sub-Neptune — and note that the same 0.30 percent depth around a Sun-like star would imply $R_p = 5.98\,R_\oplus$, a very different planet. **The stellar radius is doing half the work.**

(b) $$a = \left(\frac{M_\star}{M_\odot}\right)^{1/3}\left(\frac{P}{1\ \mathrm{yr}}\right)^{2/3} = (0.4)^{1/3}\left(\frac{8.0}{365.25}\right)^{2/3}.$$

$$(0.4)^{1/3} = 0.7368, \qquad (0.021903)^{2/3} = e^{(2/3)\ln 0.021903} = e^{(2/3)(-3.8213)} = e^{-2.5475} = 0.07824.$$

$$a = 0.7368\times0.07824 = 0.0577\ \mathrm{AU}.$$

(c) $$p_{\text{tr}} = \frac{R_\star}{a} = \frac{0.4\times6.957\times10^{8}}{0.0577\times1.496\times10^{11}} = \frac{2.783\times10^{8}}{8.632\times10^{9}} = 0.0322 = 3.2\%.$$

Seven times better than an Earth-analogue around the Sun, from the combination of a small star and a close orbit.

**P2** (a) $$\frac{M_p}{M_J} = \frac{5}{317.8} = 0.01573, \qquad \left(\frac{P}{\mathrm{yr}}\right) = \frac{20}{365.25} = 0.05476.$$

$$K = 28.4\times0.01573\times(0.5)^{-2/3}\times(0.05476)^{-1/3}.$$

$$(0.5)^{-2/3} = 1.5874, \qquad (0.05476)^{-1/3} = e^{(1/3)\times2.9046} = e^{0.9682} = 2.633.$$

$$K = 28.4\times0.01573\times1.5874\times2.633 = 1.867\ \mathrm{m\,s^{-1}}.$$

(b) $P = 200$ d is ten times longer, and $K\propto P^{-1/3}$:

$$K = 1.867\times10^{-1/3} = 1.867\times0.4642 = 0.867\ \mathrm{m\,s^{-1}}.$$

(c) **Both are detectable** at 50 cm/s — 1.87 and 0.87 m/s are comfortably above it.

But push further: at $P = 2000$ d the same planet gives $0.40\ \mathrm{m\,s^{-1}}$, below threshold. **The bias is toward short periods**, and because $K\propto P^{-1/3}$ the falloff is slow — a factor of ten in period costs only a factor of 2.15 in signal. That is much gentler than the transit method's bias, where the *probability* of even seeing a transit falls as $1/a\propto P^{-2/3}$ and the number of transits observed in a fixed survey falls as $1/P$.

**Radial velocity is therefore the better method for long periods**, which is why the giant planets at several AU — the ones most comparable to Jupiter, and most relevant to testing [1.4](01-04-giant-planets-migration.md) — are known almost entirely from decades-long radial-velocity programmes rather than from transit surveys.

**P3** (a) Three transits in 4 years requires two full periods within the baseline:

$$2P \le 4\ \mathrm{yr} \;\Rightarrow\; P \le 2\ \mathrm{yr} = 730\ \mathrm{d}.$$

(b) $$a = (2)^{2/3} = 1.587\ \mathrm{AU},$$
$$p_{\text{tr}} = \frac{6.957\times10^{8}}{1.587\times1.496\times10^{11}} = \frac{6.957\times10^{8}}{2.374\times10^{11}} = 2.93\times10^{-3} = 0.293\%.$$

(c) The expected number of detections is $N_\star\times f\times p_{\text{tr}}\times C$, with $f$ the occurrence rate and $C$ the completeness:

$$8 = 200{,}000\times f\times0.00293\times0.60,$$
$$f = \frac{8}{200{,}000\times0.00293\times0.60} = \frac{8}{351.6} = 0.0228 = 2.3\%.$$

**One reason it is a lower bound** — and there are several, all pushing the same way:

- **The stellar sample is not uniform.** Some of the 200,000 stars are too faint, too variable or too large for a signal of this size to be detectable at all, so the effective $N_\star$ is smaller than 200,000, which raises $f$.
- **Multi-planet systems are undercounted.** A system with several planets of this type contributes at most one detection per planet, but geometric alignment is correlated within a system, so treating detections as independent draws underestimates the underlying rate.
- **The completeness figure is itself usually optimistic**, being computed by injecting idealized signals into the data rather than signals with the full range of real orbital geometries and stellar-noise realizations.

The general form of the correction, $f = N_{\text{det}}/(N_\star\,p_{\text{tr}}\,C)$, is the whole of occurrence-rate inference, and [6.2](06-02-demographics-selection-effects.md) develops it properly — including the point that $p_{\text{tr}}$ and $C$ both depend on planet radius and period, so the correction must be applied bin by bin rather than as a single number.

</details>

## Flashback

**From Lesson 5.4 (Rings and satellite systems):** Uranus has $R_p = 25{,}559$ km and $\bar\rho = 1271\ \mathrm{kg\,m^{-3}}$. (a) Compute the fluid Roche limit for an icy satellite ($900\ \mathrm{kg\,m^{-3}}$). (b) Uranus's outermost narrow ring, the $\epsilon$ ring, is at 51,150 km; comment. (c) Its innermost moon Cordelia orbits at 49,750 km; state what role it plays.

<details>
<summary>Solution</summary>

(a) $$\left(\frac{1271}{900}\right)^{1/3} = (1.4122)^{1/3} = 1.1223,$$
$$d = 2.456\times25{,}559\times1.1223 = 70{,}450\ \mathrm{km} = 2.76\,R_U.$$

(b) The $\epsilon$ ring at 51,150 km is **well inside** the Roche limit of 70,450 km — consistent with the general rule that rings occupy the region where debris cannot accrete. Uranus's entire ring system lies inside about 51,200 km, comfortably within the limit.

(c) Cordelia at 49,750 km orbits *interior* to the $\epsilon$ ring, and together with Ophelia at 53,760 km, exterior to it, the pair acts as **shepherd moons**. Cordelia takes angular momentum from ring particles that drift inward and Ophelia adds it to those drifting outward, confining the ring to a width of only 20–100 km against the viscous spreading that would otherwise broaden it within centuries.

This is the same mechanism as Prometheus and Pandora at Saturn's F ring, and it is the standard explanation for every narrow ring in the solar system — a ring you can see with sharp edges is a ring something is actively holding.

</details>

## Connections

- **Backward:** [3.1](03-01-mass-density-moment-of-inertia.md) established that masses come from orbits and that what is measured is $GM$ — the same caveat applies to every stellar mass underlying every planet mass here; [5.4](05-04-rings-satellite-systems.md) used stellar occultations, the technique that transits generalize.
- **Forward:** [6.2](06-02-demographics-selection-effects.md) turns the biases computed here into occurrence rates; [6.3](06-03-mass-radius-composition.md) combines radius and mass into density and composition; [6.4](06-04-exoplanet-atmospheres.md) uses transits again, wavelength by wavelength.
- **Sideways:** the Doppler measurement and spectral-line formation are [astrophysics 1.3](../../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md)'s; stellar radii and masses come from [astrophysics 2.5](../../astrophysics/lessons/02-05-main-sequence.md). Extracting a periodic signal buried in correlated noise is the core problem of [`signals-systems`](../../signals-systems/syllabus.md) and [`statistical-learning`](../../statistical-learning/syllabus.md) — and for radial velocity the noise is not instrumental but astrophysical, which is what makes it hard.
