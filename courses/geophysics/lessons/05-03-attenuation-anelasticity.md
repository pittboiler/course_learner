# Geophysics · Lesson 5.3: Attenuation and anelasticity

> ⏱ ~15 min · Module 5: The deep Earth · Builds on: [1.1](01-01-the-elastic-earth.md), [1.5](01-05-seismic-tomography.md), [5.1](05-01-free-oscillations-earth-density.md) · Unlocks: [5.5](05-05-anisotropy-mantle-flow.md), [4.6](04-06-mantle-rheology-post-glacial-rebound.md)

## Why this matters

Everything so far has treated the Earth as perfectly elastic: a wave passes and the rock returns exactly to where it started. It does not, quite. A small fraction of the energy is lost to internal friction on every cycle, and the wave decays. The parameter that measures the loss is $Q$, and it turns out to be one of the most useful things a seismogram carries.

The reason is a sharp contrast in sensitivity. Seismic **velocity** changes by a few percent for a few hundred kelvin, and is affected roughly equally by temperature, composition and melt. **Attenuation** changes by a factor of two for the same temperature change, and is dominated by temperature and by the presence of a fluid phase. So where velocity is ambiguous — the recurring problem of [1.5](01-05-seismic-tomography.md) — attenuation is diagnostic.

There is also a subtlety that has to be got right or seismology does not close: **a medium that attenuates must also be dispersive.** Velocity depends on frequency, by about a percent between one second and one thousand seconds, and ignoring it means body-wave models and normal-mode models describe different planets.

## The idea

**Real rock has internal friction.** Grain boundaries slide, dislocations move, and — where a melt phase is present — fluid is squeezed between grains. Each of these dissipates a little energy per cycle of a passing wave. Nothing about it is mysterious; it is the same anelasticity that makes a struck bell eventually stop ringing.

**$Q$ is the inverse of the fractional loss.** Define $1/Q$ as the fraction of the stored energy lost per radian of oscillation. High $Q$ means a good bell; low $Q$ means a lump of putty. The Earth's mantle runs $Q$ of a few hundred, dropping to under 100 in the asthenosphere.

**The loss is almost entirely in shear.** Two quality factors exist, $Q_\mu$ for shear and $Q_\kappa$ for compression, and observation makes them wildly different: $Q_\mu$ is a few hundred, $Q_\kappa$ is effectively infinite. **Squeezing rock uniformly costs almost nothing; shearing it costs real energy** — which is intuitive, since all the dissipation mechanisms involve things sliding past one another.

**Which means S waves are attenuated far more than P waves**, and high frequencies far more than low. This is why teleseismic S arrivals are smooth and long-period while P arrivals are sharp, and why the highest frequencies are gone from any wave that has crossed the mantle.

**$Q$ is exponentially sensitive to temperature, which makes it a thermometer.** A hundred kelvin changes $Q$ by nearly a factor of two — several times more sensitive than velocity — and a small fraction of partial melt collapses it. So a low-$Q$ region is hot, or wet, or partly molten, and pairing $Q$ with velocity separates those possibilities from composition.

**And attenuation forces dispersion.** Causality — the requirement that a medium cannot respond before it is disturbed — links the frequency dependence of attenuation to that of velocity through the Kramers–Kronig relations. Since $Q$ is roughly constant over the seismic band, velocity must increase logarithmically with frequency, by about 1 percent per three decades. **Ignoring this makes a normal-mode Earth model and a body-wave Earth model disagree by more than their error bars.**

## The formal version

**Definition of $Q$.**

$$\frac{1}{Q} = -\frac{1}{2\pi}\frac{\Delta E}{E},$$

the fractional energy loss per cycle divided by $2\pi$. *In words: $1/Q$ is the fraction of the stored energy that is dissipated per radian.*

**Amplitude decay.** For a wave of angular frequency $\omega$ travelling for time $t$:

$$A(t) = A_0\exp\!\left(-\frac{\omega t}{2Q}\right),$$

or in terms of distance $x$ and wavelength $\lambda$,

$$A(x) = A_0\exp\!\left(-\frac{\pi x}{Q\lambda}\right).$$

*In words: a wave loses a fixed fraction of its amplitude per wavelength travelled, so the decay is exponential in distance measured in wavelengths.*

**The $t^*$ operator.** Collecting the path integral of attenuation:

$$t^* = \int_{\text{path}}\frac{dt}{Q}, \qquad A = A_0\,e^{-\pi f t^*}.$$

*In words: $t^*$ is the accumulated "attenuation time" along a ray, and it alone determines how much of each frequency survives.* Typical teleseismic values: $t^*_P \approx 1$ s, $t^*_S \approx 4$ s.

**Two quality factors.** Attenuation in shear and in bulk combine into the P-wave quality factor:

$$\frac{1}{Q_\alpha} = \frac{L}{Q_\mu} + \frac{1-L}{Q_\kappa}, \qquad L = \frac43\frac{v_s^2}{v_p^2}.$$

For a Poisson solid $L = 4/9$, so with $Q_\kappa \to\infty$, $Q_\alpha = \tfrac94 Q_\mu$. *In words: P waves are attenuated less than S waves by roughly a factor of two, purely because only part of their motion is shear.*

**PREM values.**

| Region | $Q_\mu$ | $Q_\kappa$ |
|---|---|---|
| lithosphere | 600 | 57,823 |
| asthenosphere (80–220 km) | 80 | 57,823 |
| transition zone | 143 | 57,823 |
| lower mantle | 312 | 57,823 |
| outer core | $\infty$ (no shear) | 57,823 |
| inner core | 85 | 1328 |

**Temperature dependence.**

$$Q^{-1} \propto \exp\!\left(-\frac{\alpha H^*}{RT}\right),$$

with $\alpha\approx0.25$ and activation enthalpy $H^*\approx 500\ \mathrm{kJ\,mol^{-1}}$. *In words: attenuation rises steeply with temperature, so $Q$ falls.*

**Frequency dependence.** Observation gives $Q\propto\omega^{\alpha}$ with $\alpha \approx 0.1$–$0.3$ over the seismic band — nearly, but not exactly, constant.

**Physical dispersion.** For $Q$ approximately constant, causality requires

$$v(\omega) = v(\omega_0)\left[1 + \frac{1}{\pi Q}\ln\frac{\omega}{\omega_0}\right].$$

*In words: higher frequencies travel faster, logarithmically, by an amount inversely proportional to $Q$.* This is not optional; a medium that absorbs without dispersing would respond before it was disturbed.

## Picture

![Left: an oscillating blue waveform whose amplitude decays steadily to the right, with a dashed coral envelope labelled with the exponential decay formula. A note says low Q means fast death and high Q means the wave rings on. Below, notes state that one over Q is the fraction of energy lost per radian, that the shear quality factor is about 600 in normal mantle but only 80 in the asthenosphere, that the bulk quality factor is essentially infinite so the Earth loses almost nothing to pure compression and almost everything to shear, and therefore that attenuation is a shear measurement and shear is what temperature, melt and grain boundaries control. Right: a profile of shear quality factor against depth, high near 600 in the lithosphere, dropping sharply to 80 in a shaded band between 80 and 220 kilometres labelled the low-Q zone, the asthenosphere, then recovering to intermediate values through the deeper mantle. A caption says the seismically slow layer and the seismically lossy layer are the same layer](assets/05-03-fig1.svg)

The bell rings; the putty does not. Rock is somewhere in between, and where it sits is a thermometer.

## Worked examples

**Example 1 (mechanical — how much survives the trip?).** A teleseismic P wave has $t^* = 1.0$ s and an S wave $t^* = 4.0$ s. Compare the surviving amplitude at 1 Hz and at 0.05 Hz.

$$A/A_0 = e^{-\pi f t^*}.$$

*P wave at 1 Hz:* $e^{-\pi(1)(1)} = e^{-3.142} = 0.043$ — about 4 percent survives.

*P wave at 0.05 Hz:* $e^{-\pi(0.05)(1)} = e^{-0.157} = 0.855$ — 86 percent survives.

*S wave at 1 Hz:* $e^{-\pi(1)(4)} = e^{-12.57} = 3.5\times10^{-6}$ — **essentially nothing.**

*S wave at 0.05 Hz:* $e^{-\pi(0.05)(4)} = e^{-0.628} = 0.534$ — over half survives.

**This is why teleseismic records look the way they do.** The P arrival is sharp and impulsive because its high frequencies partly survive; the S arrival is a smooth, long-period swell because everything above about 0.1 Hz has been erased. It is also why short-period arrays are used for P-wave studies and broadband instruments for S — the frequencies simply are not there.

**Example 2 (why you'd care — attenuation as the tiebreaker).** A tomographic study finds a region of upper mantle with $\delta\ln v_s = -3\%$. Three explanations are on the table: it is 300 K hot; it contains 1 percent partial melt; it is compositionally distinct (eclogite-rich). A separate study measures $Q_\mu = 60$ there against a regional average of 200. Decide.

*What velocity alone permits.* All three explanations can produce $-3\%$ in $v_s$, and [1.5](01-05-seismic-tomography.md) showed that the $\delta\ln v_s/\delta\ln v_p$ ratio narrows the field but does not close it.

*What the $Q$ measurement adds.* Take each hypothesis and ask what it predicts for attenuation.

**Temperature.** Using $Q^{-1}\propto\exp(-\alpha H^*/RT)$ with $\alpha = 0.25$, $H^* = 500\ \mathrm{kJ\,mol^{-1}}$, and a 300 K rise from 1600 K:

$$\frac{Q(1600)}{Q(1900)} = \exp\left[\frac{0.25\times5.0\times10^{5}}{8.314}\left(\frac{1}{1600}-\frac{1}{1900}\right)\right] = \exp\left[1.503\times10^{4}\times9.868\times10^{-5}\right] = \exp(1.483) = 4.4.$$

So 300 K of heating should drop $Q$ from 200 to about 45. **Observed 60 — consistent.**

**Composition.** An eclogite-rich region has different moduli and hence different velocity, but its intrinsic attenuation at the same temperature is comparable to peridotite's. It predicts a velocity anomaly with **little or no $Q$ anomaly**. Observed $Q$ is down by a factor of 3.3. **Excluded.**

**Partial melt.** Melt lowers $Q$ dramatically — a percent of interconnected melt can drop $Q$ by an order of magnitude, far more than it lowers velocity. It predicts $Q$ near 20 or below alongside a modest velocity anomaly. Observed 60 is **too high for substantial melt**, though a trace fraction cannot be excluded.

*Verdict:* **primarily thermal, roughly 300 K hot, with at most a trace of melt.** One extra observable eliminated one hypothesis outright and bounded another.

*Why this works, stated generally.* Velocity depends on $\sqrt{\mu/\rho}$, and $\mu$ responds to everything — temperature, composition, melt, water, pressure. Attenuation depends on the *rate* of thermally activated microscopic processes, which is exponential in $1/T$ and acutely sensitive to whether a fluid phase is present, but comparatively indifferent to which silicate you are looking at. **The two observables have genuinely different physics behind them, which is why their combination is powerful.**

The same reasoning appears throughout this course — the $\delta\ln v_s/\delta\ln v_p$ ratio in [1.5](01-05-seismic-tomography.md), the gravity-to-uplift ratio in [2.7](02-07-space-geodesy.md), the two-wavelength rebound comparison in [4.6](04-06-mantle-rheology-post-glacial-rebound.md). **The pattern is always the same: a single observable is a curve through parameter space; two with different sensitivities intersect at a point.**

## Watch out

- **You might think** attenuation is caused by scattering off small-scale heterogeneity. **Actually** both mechanisms exist and they must be distinguished. **Intrinsic** attenuation converts wave energy to heat; **scattering** attenuation redirects it, removing energy from the direct arrival but keeping it in the wavefield as coda. Only the intrinsic part is a thermometer, and separating them requires measuring the coda energy as well as the direct arrival.
- **You might think** physical dispersion is a small correction that can be ignored. **Actually** it is about 1 percent between body-wave and normal-mode frequencies — larger than the anomalies tomography is trying to image. PREM is specified at a reference period of 1 s for exactly this reason, and comparing a 20 s surface-wave model with a 1 Hz body-wave model without correcting is a systematic error of the same size as the signal.
- **You might think** the outer core's infinite $Q_\mu$ means it is lossless. **Actually** it means there is no shear to lose energy in — $Q_\mu$ is undefined rather than infinite where $\mu = 0$. Its bulk attenuation $Q_\kappa$ is finite and, being one of the few constraints on core physics available from seismology, is worth more than its small effect suggests.

## One-liner

> A wave loses a fixed fraction of its energy per radian, almost all of it in shear — and because that loss is exponential in temperature and collapses in the presence of melt, $Q$ resolves the ambiguities that velocity alone cannot.

## Problems

**P1 (🟢)** A 0.5 Hz S wave travels through a region with $Q_\mu = 100$ for 200 s. (a) Compute $t^*$ for this path. (b) Compute the fraction of amplitude surviving. (c) Repeat for a 0.1 Hz wave and comment.

**P2 (🟡)** (a) Using $1/Q_\alpha = L/Q_\mu + (1-L)/Q_\kappa$ with $L = 4/9$ and $Q_\kappa = 57{,}823$, compute $Q_\alpha$ for a region with $Q_\mu = 150$. (b) Compute the ratio $Q_\alpha/Q_\mu$ and compare with the $9/4$ that the $Q_\kappa\to\infty$ limit gives. (c) Explain physically why P waves are less attenuated than S waves even in the same rock.

**P3 (🔴, bridges to [5.1](05-01-free-oscillations-earth-density.md))** A body-wave study at 1 Hz gives a mantle shear velocity of $4.60\ \mathrm{km\,s^{-1}}$ at some depth. A normal-mode study, at a reference period of 200 s, gives $4.55\ \mathrm{km\,s^{-1}}$ at the same depth. Take $Q_\mu = 200$. (a) Compute the physical-dispersion correction between the two frequencies. (b) Compare with the observed 0.05 km/s discrepancy and comment. (c) Explain in one sentence why a purely elastic Earth model cannot reconcile the two datasets. (d) State which reference period PREM adopts and why the choice matters when quoting a tomographic anomaly.

<details>
<summary>Solutions</summary>

**P1** (a) $$t^* = \frac{t}{Q} = \frac{200}{100} = 2.0\ \mathrm{s}.$$

(b) $$\frac{A}{A_0} = e^{-\pi f t^*} = e^{-\pi(0.5)(2.0)} = e^{-3.142} = 0.043.$$

About 4 percent survives.

(c) $$\frac{A}{A_0} = e^{-\pi(0.1)(2.0)} = e^{-0.628} = 0.534.$$

Over half survives. **A factor of five in frequency changes the surviving amplitude by more than a factor of twelve** — attenuation is a strong low-pass filter, and it is why long-period instruments see deep structure that short-period ones cannot.

**P2** (a) $$\frac{1}{Q_\alpha} = \frac{4/9}{150} + \frac{5/9}{57{,}823} = \frac{0.4444}{150} + \frac{0.5556}{57{,}823}$$
$$= 2.963\times10^{-3} + 9.61\times10^{-6} = 2.973\times10^{-3},$$
$$Q_\alpha = 336.4.$$

(b) $$\frac{Q_\alpha}{Q_\mu} = \frac{336.4}{150} = 2.24,$$

against the limiting value $9/4 = 2.25$. **The bulk term contributes only 0.3 percent of the total attenuation**, which is a quantitative statement of how completely shear dominates.

(c) Because a P wave's deformation is only partly shear. Decompose the motion of a compressional wave: it changes both the volume and the shape of each element ([1.1](01-01-the-elastic-earth.md)). The volume-changing part costs essentially no energy — $Q_\kappa$ is enormous, because uniformly compressing a crystal does not require anything to slide past anything else. The shape-changing part is dissipative. Since only a fraction $L = \tfrac43 v_s^2/v_p^2 = 4/9$ of a P wave's strain energy is in shear, it suffers only $4/9$ of the loss that a pure shear wave of the same frequency would.

**P3** (a) $$\frac{\Delta v}{v} = \frac{1}{\pi Q}\ln\frac{\omega_1}{\omega_2} = \frac{1}{\pi\times200}\ln\frac{2\pi\times1}{2\pi/200} = \frac{1}{628.3}\ln(200) = \frac{5.298}{628.3} = 8.43\times10^{-3}.$$

So the 1 Hz velocity should exceed the 200 s velocity by 0.84 percent:

$$\Delta v = 0.00843\times4.55 = 0.038\ \mathrm{km\,s^{-1}}.$$

(b) Predicted 0.038, observed 0.05 km/s. **Agreement to within about 25 percent**, which given the uncertainty in $Q_\mu$ (a factor of two is common) and in the exact reference frequencies is good.

The important point is not the residual but the sign and magnitude: the discrepancy between the two datasets is **explained**, not merely tolerated. Had the observed difference been 0.5 km/s, or the wrong sign, physical dispersion would not have been the answer.

(c) Because a purely elastic medium is by definition non-dispersive: all frequencies travel at the same speed. Two datasets at different frequencies measuring genuinely different velocities in the same rock is therefore **impossible** in an elastic Earth, and the discrepancy would have to be attributed to error in one or both. Anelasticity resolves it, and causality *requires* it — a medium cannot absorb without dispersing, on pain of responding before it is disturbed.

(d) **PREM is specified at a reference period of 1 s.** The choice matters because any velocity quoted without a reference period is ambiguous at the 1 percent level, which is larger than most of the anomalies tomography reports ([1.5](01-05-seismic-tomography.md), where a 2 percent anomaly is a big one).

Concretely: a surface-wave tomographic model built at 50 s period, compared against PREM's 1 s reference without correction, would show a spurious *slow* anomaly of roughly

$$\frac{1}{\pi\times200}\ln(50) = \frac{3.912}{628.3} = 0.62\%$$

**everywhere** — a uniform bias comparable to real structure. Since the correction depends on $Q$, and $Q$ varies strongly with depth, the bias is not even uniform: it is largest in the low-$Q$ asthenosphere, precisely where the interesting structure is. Joint inversions of body-wave and normal-mode data must therefore solve for the anelastic structure alongside the elastic one, which is why PREM specifies $Q_\mu$ and $Q_\kappa$ as part of the model rather than as an afterthought.

</details>

## Flashback

**From Lesson 5.2 (Mineral physics and the transition zone):** A slab is 600 K colder than ambient mantle. Using $\gamma_{410} = +2.9\ \mathrm{MPa\,K^{-1}}$ with $\rho g = 0.0366\ \mathrm{MPa\,m^{-1}}$, and $\gamma_{660} = -2.5\ \mathrm{MPa\,K^{-1}}$ with $\rho g = 0.0396\ \mathrm{MPa\,m^{-1}}$. (a) Compute the deflection of each discontinuity. (b) Compute the change in transition-zone thickness. (c) State the sign convention you used and check it against physical sense.

<details>
<summary>Solution</summary>

(a) *410:* $$\Delta P = 2.9\times(-600) = -1740\ \mathrm{MPa}, \qquad \Delta z = \frac{-1740}{0.0366} = -47{,}500\ \mathrm{m} = -48\ \mathrm{km}.$$

*660:* $$\Delta P = (-2.5)\times(-600) = +1500\ \mathrm{MPa}, \qquad \Delta z = \frac{+1500}{0.0396} = +37{,}900\ \mathrm{m} = +38\ \mathrm{km}.$$

(b) The 410 rises 48 km and the 660 falls 38 km, so the transition zone thickens by

$$48 + 38 = 86\ \mathrm{km}.$$

(c) Positive $\Delta z$ means deeper. Check: the 410 has a **positive** Clapeyron slope, so cold material needs *less* pressure to transform, so it transforms **shallower** — negative $\Delta z$. ✓ The 660 has a **negative** slope, so cold material needs *more* pressure, transforming **deeper** — positive $\Delta z$. ✓

Both signs are consistent with the physical picture of [5.2](05-02-mineral-physics-transition-zone.md), and the resulting thickening is the observable that receiver-function studies use to map slab temperatures.

</details>

## Connections

- **Backward:** the shear modulus whose dissipation this lesson measures is [1.1](01-01-the-elastic-earth.md)'s; the velocity anomalies whose ambiguity $Q$ resolves are [1.5](01-05-seismic-tomography.md)'s; the $Q$ values quoted are part of PREM, assembled in [5.1](05-01-free-oscillations-earth-density.md).
- **Forward:** [5.5](05-05-anisotropy-mantle-flow.md) uses a third seismic observable — anisotropy — for a fourth kind of information; [4.6](04-06-mantle-rheology-post-glacial-rebound.md)'s creep mechanisms are the same microscopic processes that dissipate seismic energy here, so $Q$ and viscosity are physically linked and low-$Q$ regions are also low-viscosity regions.
- **Sideways:** $Q$ is the same quality factor as in a damped oscillator or a resonant circuit ([`circuits`](../../circuits/syllabus.md)), and the Kramers–Kronig relations linking absorption to dispersion are the same causality argument as in optics ([`waves-optics`](../../waves-optics/syllabus.md)) and in the complex permittivity of a dielectric — one of the tidier instances of the same mathematics turning up in four fields.
