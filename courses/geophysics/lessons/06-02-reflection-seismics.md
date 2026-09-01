# Geophysics · Lesson 6.2: Reflection seismics

> ⏱ ~15 min · Module 6: Inversion & applied geophysics · Builds on: [1.3](01-03-wave-equation-ray-theory.md), [6.1](06-01-the-linear-inverse-problem.md) · Unlocks: [6.3](06-03-electrical-electromagnetic-methods.md)

## Why this matters

Reflection seismology is the most commercially important geophysical method ever developed, and the most technically refined. It found essentially every oil and gas field of the last century, it images the crust to Moho depths in academic surveys, and it is now the primary tool for characterizing carbon-storage reservoirs. The industry that runs it has, for decades, been among the largest users of scientific computing in the world.

The physics is [1.3](01-03-wave-equation-ray-theory.md)'s Snell's law applied to a downgoing wave and its echo. What makes the method powerful is not the physics but the **processing**: a raw seismic record is nearly unusable, and turning it into an image is a sequence of steps each of which is worth understanding, because each embeds an assumption that can fail.

## The idea

**A reflection happens where the acoustic impedance changes.** Impedance is density times velocity. A wave hitting a boundary between two materials of different impedance sends part of its energy back, with an amplitude set by the contrast — and, importantly, with a **sign**: going from stiff to soft reverses the polarity of the reflected pulse.

**The travel time to a flat reflector is a hyperbola in offset.** A geophone directly above the reflection point records the two-way vertical time $t_0$; one further away records a longer path and a later arrival. The relationship is exactly Pythagorean, and the curvature of the resulting hyperbola **is** the velocity of the overburden.

**So the same data give both the image and the velocity needed to make it.** Fit the hyperbola, extract the stacking velocity, use it to flatten the gather (the **normal moveout** correction), then add all the traces together. Signal adds coherently and noise does not, so a 60-fold stack improves the signal-to-noise ratio nearly eightfold.

**But a stacked section is not a picture of the subsurface.** It is plotted in two-way time and assumes every reflection came from directly beneath the midpoint. Dipping reflectors appear too deep, at too shallow a dip, and displaced down-dip; a point scatterer appears as a hyperbola spread across the whole section. **Migration** repositions the energy and collapses the diffractions, and it is best understood as an approximate solution of the inverse problem of [6.1](06-01-the-linear-inverse-problem.md).

**Resolution is set by wavelength, and it is worse than people expect.** Two reflectors closer than about a quarter of a wavelength cannot be separated vertically. Horizontally, before migration, everything within the **Fresnel zone** contributes to one trace, and at 2 km depth that zone is hundreds of metres across. Migration shrinks it dramatically — which is the real reason migration matters.

## The formal version

**Acoustic impedance and the reflection coefficient.** For normal incidence at a boundary between media of impedance $Z = \rho v$:

$$\boxed{\ R = \frac{Z_2 - Z_1}{Z_2 + Z_1}\ }, \qquad T = 1 - R.$$

*In words: the fraction of amplitude reflected is the impedance contrast divided by the impedance sum.* $R$ is **negative** when the wave passes into a lower-impedance medium, which reverses the polarity of the reflected wavelet — the basis of "bright spot" gas detection.

**Two-way travel time.** For a flat reflector at depth $z$ beneath a layer of velocity $V$, recorded at source–receiver offset $x$:

$$t(x) = \sqrt{t_0^2 + \frac{x^2}{V^2}}, \qquad t_0 = \frac{2z}{V}.$$

*In words: the arrival time as a function of offset is a hyperbola whose apex is the zero-offset time.*

**Normal moveout.**

$$\Delta t_{NMO} = t(x) - t_0,$$

and inverting for the velocity,

$$V = \frac{x}{\sqrt{t(x)^2 - t_0^2}}.$$

For a stack of layers, the velocity recovered this way is the **stacking velocity**, close to the root-mean-square velocity; interval velocities are extracted from it by the **Dix equation**:

$$V_{\text{int},n}^2 = \frac{V_{\text{rms},n}^2 t_n - V_{\text{rms},n-1}^2 t_{n-1}}{t_n - t_{n-1}}.$$

**Common midpoint gathering and stacking.** Sort traces by the midpoint between source and receiver; all traces in one CMP gather illuminate the same subsurface point. Apply NMO to flatten, then sum. With **fold** $n$:

$$\frac{S}{N} \text{ improves by } \sqrt{n}.$$

*In words: signal adds in phase, noise adds in quadrature.*

**Migration.** For a dipping reflector of true dip $\theta$, the unmigrated section shows apparent dip $\theta_a$ with

$$\tan\theta_a = \sin\theta,$$

so dips are always **under-stated**, and the reflector is displaced down-dip and plotted too deep. Migration is the operation that undoes this: it moves each sample to the location that could have produced it, and in the process collapses diffraction hyperbolae from point scatterers back to points.

**Resolution.**

| Direction | Limit |
|---|---|
| vertical | $\lambda/4$ (the "tuning thickness") |
| horizontal, unmigrated | Fresnel zone radius $\approx\sqrt{\lambda z/2}$ |
| horizontal, after 3-D migration | $\approx\lambda/4$ |

**Noise to be removed.**

| Type | Nature |
|---|---|
| ground roll | high-amplitude, low-velocity surface waves ([1.2](01-02-seismic-wave-zoo.md)) |
| multiples | energy reflected more than once, mimicking a deeper reflector |
| ghosts | the down-going reflection from the sea surface or the base of weathering |
| diffractions | edges and points, collapsed by migration |

## Picture

![Left: a common midpoint gather drawn as a set of vertical blue traces against offset and time, with a coral reflection event curving downward and to the right as a hyperbola, annotated with the formula t equals the square root of t-zero squared plus x squared over V squared. A note says far traces arrive later because the path is longer — normal moveout — and that the curvature is the velocity. Centre: the same gather after normal-moveout correction, with the event now a straight horizontal coral line, and beside it a single strong stacked trace. A note says sixty traces added together give signal times sixty and random noise times the square root of sixty, improving the ratio 7.7-fold. Right: a diagram showing a blue true reflector dipping gently and a dashed coral curve below and to the side of it labelled as what the unmigrated section shows — too deep, too shallow a dip, displaced down-dip. A note says migration moves energy back to where it came from and collapses diffractions, and that it is an inverse problem rather than a cosmetic one](assets/06-02-fig1.svg)

The hyperbola is the measurement. Everything after it is inversion.

## Worked examples

**Example 1 (mechanical — a reflection, start to finish).** A flat reflector lies at 1000 m depth beneath a layer of velocity $2000\ \mathrm{m\,s^{-1}}$. (a) Find the zero-offset two-way time. (b) Find the arrival time at 800 m offset and the NMO. (c) Invert your own numbers to recover the velocity.

(a) $$t_0 = \frac{2z}{V} = \frac{2\times1000}{2000} = 1.000\ \mathrm{s}.$$

(b) $$t(800) = \sqrt{t_0^2 + \frac{x^2}{V^2}} = \sqrt{1.000 + \frac{6.4\times10^{5}}{4.0\times10^{6}}} = \sqrt{1.000+0.160} = \sqrt{1.160} = 1.0770\ \mathrm{s},$$
$$\Delta t_{NMO} = 1.0770 - 1.000 = 0.0770\ \mathrm{s} = 77.0\ \mathrm{ms}.$$

(c) $$V = \frac{x}{\sqrt{t^2-t_0^2}} = \frac{800}{\sqrt{1.160-1.000}} = \frac{800}{\sqrt{0.160}} = \frac{800}{0.4000} = 2000\ \mathrm{m\,s^{-1}}. \quad\checkmark$$

**The data determine the velocity that is needed to process the data.** That self-sufficiency — no external velocity information required — is what makes reflection seismics practical.

**Example 2 (why you'd care — the bright spot, and how to be fooled by one).** A shale ($\rho = 2400\ \mathrm{kg\,m^{-3}}$, $v = 2400\ \mathrm{m\,s^{-1}}$) overlies a sandstone. Compute the reflection coefficient for (a) water-filled sandstone ($\rho = 2500$, $v = 3200$), and (b) gas-filled sandstone ($\rho = 2100$, $v = 2200$). Interpret.

*Impedances.*
$$Z_{\text{shale}} = 2400\times2400 = 5.76\times10^{6},$$
$$Z_{\text{water sand}} = 2500\times3200 = 8.00\times10^{6},$$
$$Z_{\text{gas sand}} = 2100\times2200 = 4.62\times10^{6}\ \ (\mathrm{kg\,m^{-2}\,s^{-1}}).$$

*(a) Water sand.*
$$R = \frac{8.00-5.76}{8.00+5.76} = \frac{2.24}{13.76} = +0.163.$$

*(b) Gas sand.*
$$R = \frac{4.62-5.76}{4.62+5.76} = \frac{-1.14}{10.38} = -0.110.$$

**The sign flips.** Replacing water with gas drops the sandstone's impedance below the shale's, so the reflected wavelet comes back with reversed polarity — and because the contrast is large, with high amplitude. On a section this appears as an unusually strong reflection of opposite polarity to its neighbours: a **bright spot**.

*Why it works so well.* Gas is enormously compressible, so a few percent of gas in the pore space collapses the rock's bulk modulus and hence its P velocity, while barely changing the shear modulus ([1.1](01-01-the-elastic-earth.md), P3). Density drops too. Both push impedance down, and the reflection coefficient responds strongly.

*And why it fools people.* Several things produce a strong, polarity-reversed reflection that is not a gas reservoir:

- **Low-velocity shales and coals**, which have low impedance for reasons of composition rather than fluid content;
- **A few percent of gas** — enough to produce a full bright spot but far too little to be commercial. The velocity response saturates almost immediately with gas saturation, so a 5 percent gas fizz looks nearly identical to an 80 percent gas column. This is the single most expensive ambiguity in the method.
- **Tuning effects**, where two closely spaced reflectors within a quarter-wavelength interfere constructively and mimic a single bright event.

*The remedy is the same as everywhere else in this course: a second observable with different sensitivity.* Here it is **AVO** — amplitude variation with offset. The reflection coefficient at non-normal incidence depends on the *shear* velocity contrast as well as the P and density contrasts, and gas affects $v_p$ and $v_s$ very differently. So measuring how the reflection amplitude changes across the gather — data that stacking deliberately throws away — separates a genuine gas sand from a low-impedance shale.

**That is worth pausing on as a general point about processing.** Stacking improves signal-to-noise by discarding the offset dimension, and for decades that trade was obviously worth making. AVO exists because someone noticed that the discarded dimension contained the answer to a question the stacked section could not resolve. **Every processing step that improves one thing is throwing something away, and it is worth knowing what.**

## Watch out

- **You might think** a seismic section is a picture of the ground. **Actually** it is a plot of amplitude against *two-way time*, not depth, and converting requires a velocity model — the same velocity model that was estimated from the data, with its own errors. A structure that looks like an anticline in time can be a velocity artefact caused by a slow overlying body.
- **You might think** stacking velocity is the rock velocity. **Actually** it is close to the RMS velocity of everything above the reflector, which is systematically higher than the interval velocity of any single layer. Extracting interval velocities requires the Dix equation, and Dix is numerically unstable when layers are thin — small errors in stacking velocity produce large errors in interval velocity.
- **You might think** migration is a display improvement. **Actually** it changes the position of reflectors by hundreds of metres to kilometres in dipping structures, and drilling an unmigrated section is a well-known way to miss a target. It is an inversion, with all the assumptions that entails — most importantly, it needs a velocity model, and a wrong velocity migrates energy to the wrong place.

## One-liner

> The reflection travel-time hyperbola gives both the image and the velocity needed to form it; stacking buys signal-to-noise by throwing away offset, and migration puts the energy back where it came from.

## Problems

**P1 (🟢)** A reflector lies at 1800 m depth beneath a layer of velocity $2400\ \mathrm{m\,s^{-1}}$. (a) Compute the zero-offset two-way time. (b) Compute the arrival time at 1200 m offset. (c) Compute the normal moveout in ms.

**P2 (🟡)** A CMP gather shows a reflection with $t_0 = 1.400$ s and, at 2000 m offset, an arrival at 1.512 s. (a) Compute the stacking velocity. (b) A deeper reflection has $t_0 = 2.100$ s and a stacking velocity of $2900\ \mathrm{m\,s^{-1}}$; use the Dix equation to compute the interval velocity between the two reflectors. (c) Compute the thickness of that interval. (d) Comment on the sensitivity of your answer to a 2 percent error in the deeper stacking velocity.

**P3 (🔴, bridges to [6.1](06-01-the-linear-inverse-problem.md))** A survey uses a 30 Hz dominant frequency in rock of velocity $2500\ \mathrm{m\,s^{-1}}$, imaging a target at 2000 m depth. (a) Compute the dominant wavelength and the vertical resolution. (b) Compute the Fresnel zone radius at the target depth. (c) State the horizontal resolution before and after 3-D migration, and compute the improvement factor. (d) A processor proposes to improve resolution by boosting the high frequencies in the data. Explain what this can and cannot achieve, and connect it to the trade-off curve of [6.1](06-01-the-linear-inverse-problem.md).

<details>
<summary>Solutions</summary>

**P1** (a) $$t_0 = \frac{2\times1800}{2400} = 1.500\ \mathrm{s}.$$

(b) $$t(1200) = \sqrt{1.500^2 + \frac{1200^2}{2400^2}} = \sqrt{2.250 + \frac{1.44\times10^{6}}{5.76\times10^{6}}} = \sqrt{2.250+0.250} = \sqrt{2.500} = 1.5811\ \mathrm{s}.$$

(c) $$\Delta t_{NMO} = 1.5811 - 1.500 = 0.0811\ \mathrm{s} = 81.1\ \mathrm{ms}.$$

**P2** (a) $$V = \frac{x}{\sqrt{t^2-t_0^2}} = \frac{2000}{\sqrt{1.512^2 - 1.400^2}} = \frac{2000}{\sqrt{2.28614 - 1.96000}} = \frac{2000}{\sqrt{0.32614}} = \frac{2000}{0.57109} = 3502\ \mathrm{m\,s^{-1}}.$$

(b) $$V_{\text{int}}^2 = \frac{V_2^2t_2 - V_1^2t_1}{t_2-t_1} = \frac{(2900)^2(2.100) - (3502)^2(1.400)}{2.100-1.400}.$$
$$(2900)^2 = 8.410\times10^{6}; \quad \times2.100 = 1.7661\times10^{7}.$$
$$(3502)^2 = 1.2264\times10^{7}; \quad \times1.400 = 1.7170\times10^{7}.$$
$$V_{\text{int}}^2 = \frac{1.7661\times10^{7} - 1.7170\times10^{7}}{0.700} = \frac{4.91\times10^{5}}{0.700} = 7.014\times10^{5},$$
$$V_{\text{int}} = 837\ \mathrm{m\,s^{-1}}.$$

(c) $$\Delta z = \frac{V_{\text{int}}\,\Delta t}{2} = \frac{837\times0.700}{2} = 293\ \mathrm{m}.$$

(d) An interval velocity of 837 m/s is **physically implausible** for consolidated rock at this depth — it is below the velocity of water. That is the diagnostic, and the cause is visible in the arithmetic: the numerator of the Dix formula is a difference of two numbers ($1.7661$ and $1.7170\times10^{7}$) that agree to within 3 percent. **Catastrophic cancellation.**

Quantitatively: a 2 percent increase in $V_2$ to 2958 m/s gives $V_2^2t_2 = 1.8375\times10^{7}$, so the numerator becomes $1.205\times10^{6}$ and

$$V_{\text{int}} = \sqrt{\frac{1.205\times10^{6}}{0.700}} = \sqrt{1.721\times10^{6}} = 1312\ \mathrm{m\,s^{-1}},$$

a **57 percent change in the answer from a 2 percent change in the input.** Dix inversion is severely ill-conditioned whenever the interval is thin relative to its depth, and this is the standard reason interval velocities from seismic data are so much less reliable than the stacking velocities they come from. In the language of [6.1](06-01-the-linear-inverse-problem.md) and [numerical-analysis 3.2](../../numerical-analysis/lessons/03-02-cholesky-conditioning.md), the problem is badly conditioned, and the usual remedy is the same: regularize, by smoothing the stacking-velocity function before differencing it.

**P3** (a) $$\lambda = \frac{V}{f} = \frac{2500}{30} = 83.3\ \mathrm{m}, \qquad \text{vertical resolution} = \frac{\lambda}{4} = 20.8\ \mathrm{m}.$$

(b) $$r_F \approx \sqrt{\frac{\lambda z}{2}} = \sqrt{\frac{83.3\times2000}{2}} = \sqrt{83{,}300} = 289\ \mathrm{m}.$$

(c) Unmigrated horizontal resolution is the Fresnel zone diameter, $2\times289 = 578$ m. After 3-D migration it collapses to about $\lambda/4 = 20.8$ m.

$$\text{improvement} = \frac{578}{20.8} = 28.$$

**Almost thirty-fold** — which is why migration is not optional for any structural interpretation, and why 3-D migration was transformative rather than incremental.

(d) *What boosting high frequencies can achieve.* Resolution scales as $\lambda/4 = V/(4f)$, so genuinely raising the dominant frequency does improve resolution proportionally. Doubling $f$ to 60 Hz halves the vertical resolution to 10.4 m. If the higher frequencies are **present in the data above the noise**, amplifying them recovers real detail.

*What it cannot achieve.* The Earth is a low-pass filter: attenuation removes high frequencies with depth ([5.3](05-03-attenuation-anelasticity.md)), by $\exp(-\pi f t^*)$. At 2 km depth much of the energy above 60 or 80 Hz is already below the noise floor. **Boosting a frequency band that contains only noise amplifies only noise**, producing a section that looks crisper and contains more artefacts — thin "reflectors" that are noise made coherent by the processing.

*The connection to [6.1](06-01-the-linear-inverse-problem.md).* This is exactly the trade-off curve, in a different guise. Spectral whitening is a form of inverse filtering — deconvolution — and its aggressiveness is a regularization parameter. Too little and the section is over-smoothed, with real thin beds unresolved. Too much and the inversion fits the noise, manufacturing structure. The right amount is set by where the signal spectrum meets the noise spectrum, and that boundary can be measured from the data.

**The principle is identical to choosing $\varepsilon$ at the elbow: resolve as much structure as the data support, and not one bed more.** In both cases the temptation runs the same way — the under-regularized result looks better, right up until someone drills it.

</details>

## Flashback

**From Lesson 6.1 (The linear inverse problem):** A refraction line gives head-wave arrivals at three offsets: $(x,t) = (60, 14.2)$, $(120, 22.0)$, $(180, 29.6)$ km and seconds. (a) Compute the least-squares slope and intercept. (b) Compute the refractor velocity. (c) State how many degrees of freedom remain.

<details>
<summary>Solution</summary>

(a) $\bar x = 120$, $\bar t = (14.2+22.0+29.6)/3 = 21.933$.
$$S_{xx} = (-60)^2 + 0 + (60)^2 = 7200,$$
$$S_{xt} = (-60)(14.2-21.933) + 0 + (60)(29.6-21.933) = 464.0 + 460.0 = 924.0.$$
$$p = \frac{924.0}{7200} = 0.12833\ \mathrm{s\,km^{-1}}, \qquad t_0 = 21.933 - 0.12833\times120 = 21.933 - 15.400 = 6.53\ \mathrm{s}.$$

(b) $$v = \frac{1}{p} = \frac{1}{0.12833} = 7.79\ \mathrm{km\,s^{-1}}.$$

An uppermost-mantle velocity — this is a Pn arrival, and the intercept time of 6.53 s would give the crustal thickness once the near-surface velocity is known.

(c) Three data, two parameters: **one degree of freedom.**

</details>

## Connections

- **Backward:** the Snell geometry and the ray parameter are [1.3](01-03-wave-equation-ray-theory.md)'s; the impedance contrast rests on the moduli of [1.1](01-01-the-elastic-earth.md), and the gas-sand argument is that lesson's fluid-detection result applied commercially; migration and Dix inversion are both instances of the ill-posedness of [6.1](06-01-the-linear-inverse-problem.md).
- **Forward:** [6.3](06-03-electrical-electromagnetic-methods.md) covers the non-seismic methods that complement reflection surveying — cheaper, shallower, and sensitive to different rock properties.
- **Sideways:** the loss of high frequencies with depth is the attenuation of [5.3](05-03-attenuation-anelasticity.md); deconvolution and spectral analysis are [`signals-systems`](../../signals-systems/syllabus.md) and [`fourier-analysis`](../../fourier-analysis/syllabus.md), and stacking is coherent averaging with the same $\sqrt n$ law that governs signal averaging everywhere. The subsurface structures being imaged — traps, unconformities, faults — are [`geology` 5.4](../../geology/lessons/05-04-resources-geologic-hazards.md)'s.
