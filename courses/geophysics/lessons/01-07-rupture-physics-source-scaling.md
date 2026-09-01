# Geophysics · Lesson 1.7: Rupture physics and source scaling

> ⏱ ~15 min · Module 1: Seismology & Earth structure · Builds on: [1.6](01-06-earthquake-sources-magnitude.md), [1.1](01-01-the-elastic-earth.md) · Unlocks: [4.5](04-05-plate-driving-forces.md), [6.1](06-01-the-linear-inverse-problem.md)

## Why this matters

[1.6](01-06-earthquake-sources-magnitude.md) gave one number for an earthquake, and one number is not enough. Two events of identical $M_w$ can shake a city very differently: one may radiate its energy in a short violent pulse, the other in a long gentle rumble; one may throw its energy toward the city and the other away from it. The moment cannot tell them apart, because the moment is an integral over the whole rupture and forgets how the slip was distributed in space and time.

This lesson supplies the missing quantities — stress drop, rupture velocity, duration, corner frequency, directivity — and then uses them to answer the question P2 of the last lesson forced: **how do earthquakes actually scale as they get bigger?** The answer is one of the most robust empirical facts in the subject, and it is not the one most people guess.

## The idea

**Stress drop, not stress, is what an earthquake measures.** The absolute stress on a fault before it slips is essentially unknown — it is very hard to measure and estimates span an order of magnitude. What seismology *can* measure is the **change**: how much lower the stress was after the earthquake than before. That is the stress drop $\Delta\sigma$, and it is set by the geometry: a given amount of slip over a given fault dimension relaxes a definite amount of stress.

**And the astonishing empirical fact is that stress drop hardly varies.** Across earthquakes spanning eight orders of magnitude in moment — from tiny mining tremors to the largest subduction events — stress drops cluster between about 1 and 10 MPa. That is a factor of ten, against a factor of a hundred million in size. **Earthquakes are, to first order, self-similar: big ones are scaled-up small ones.**

**Which forces slip to grow with length.** If $\Delta\sigma \sim \mu\bar d/L$ is roughly constant, then $\bar d \propto L$: a rupture ten times longer slips ten times further. Since $M_0 = \mu A\bar d \sim \mu L^2\cdot L$, we get $M_0 \propto L^3$. Bigger earthquakes are bigger almost entirely by being **larger and longer-lasting**, not by being locally more violent. This is what P2 of [1.6](01-06-earthquake-sources-magnitude.md) discovered the hard way.

**Rupture is a crack running at roughly the shear speed.** Slip does not happen everywhere at once; a rupture front propagates across the fault at typically 70 to 90 percent of the shear velocity — around 2.5 to 3 km/s in the crust. So duration is length over rupture velocity, and a 500 km rupture necessarily takes over two minutes.

**Because the rupture moves, it Dopplers its own radiation.** A station ahead of the advancing front receives all the energy compressed into a short interval, because the front is chasing its own waves; a station behind receives the same energy stretched out. **Same moment, same magnitude, up to three times the peak shaking on one side.** Directivity is a first-order control on damage and is why identical earthquakes do very different things to identical cities.

**And an earthquake changes the stress on its neighbours.** Slip on one fault loads some nearby faults and unloads others, in a four-lobed pattern. Changes as small as 0.01 MPa — a ten-thousandth of the ambient stress — measurably alter aftershock rates. This is **Coulomb stress transfer**, and it is why earthquakes come in sequences.

## The formal version

**Static stress drop.** For a circular rupture of radius $a$ with average slip $\bar d$,

$$\Delta\sigma = \frac{7\pi}{16}\frac{\mu\,\bar d}{a}.$$

For a long rectangular rupture of width $W$ (the smaller dimension, usually the down-dip extent), the working approximation is

$$\boxed{\ \Delta\sigma \approx \frac{\mu\,\bar d}{W}\ }$$

up to a geometric factor of order one. *In words: stress drop is rigidity times the slip gradient — how far the fault moved, divided by how far you have to go to reach its edge.* Note it is the **smaller** dimension that controls: once a rupture is much longer than it is wide, making it longer adds moment without changing the stress drop.

**Observed range.** $\Delta\sigma \approx 1$–$10$ MPa, with interplate events at the low end and intraplate events several times higher. For comparison, the ambient shear stress at 10 km depth may be 50–100 MPa, so **an earthquake relieves only a few percent of the stress on its fault.**

**Self-similar scaling.** Taking $\Delta\sigma$ constant:

$$\bar d \propto L, \qquad M_0 \propto \Delta\sigma L^3, \qquad L \propto M_0^{1/3}, \qquad T_{\text{dur}} \propto M_0^{1/3}.$$

*In words: a factor of 1000 in moment (two magnitude units) means ten times the length, ten times the slip, and ten times the duration.*

**Rupture velocity and duration.**

$$v_r \approx 0.7\text{–}0.9\,v_s, \qquad T_{\text{dur}} \approx \frac{L}{v_r}.$$

Ruptures faster than $v_s$ — **supershear** — are rare, occur on very straight faults, and produce a shear Mach cone with unusually severe shaking.

**The source spectrum.** The far-field displacement spectrum of a simple rupture is flat at low frequency and falls as $f^{-2}$ above a **corner frequency**:

$$|u(f)| \propto \begin{cases}M_0 & f \ll f_c\\ M_0 (f/f_c)^{-2} & f\gg f_c\end{cases}, \qquad f_c \sim \frac{1}{T_{\text{dur}}} \sim \frac{v_s}{L}.$$

*In words: the flat part measures the whole earthquake; the corner tells you how big it was in space and time.* This is the precise statement of why magnitude scales saturate: $M_s$ reads the spectrum at a fixed 20 s period, and once $f_c$ falls below $1/20$ Hz, that fixed period sits on the falling limb and stops responding to further growth.

**Radiated energy and apparent stress.**

$$E_s \approx \frac{\Delta\sigma}{2\mu}M_0.$$

Because $\Delta\sigma$ varies by a factor of ten, so does the energy at fixed magnitude — which is why an "energy magnitude" $M_e$ is sometimes quoted alongside $M_w$ for damaging events.

**Directivity.** For a unilateral rupture of length $L$ at speed $v_r$, radiating waves of speed $c$, the apparent duration seen at an angle $\theta$ from the rupture direction is

$$T_{\text{app}}(\theta) = \frac{L}{v_r}\left(1 - \frac{v_r}{c}\cos\theta\right).$$

*In words: ahead of the rupture the signal is compressed; behind it, stretched.* Since the same moment is delivered in a shorter time, the forward amplitude rises by roughly the inverse of that factor.

**Coulomb stress change.**

$$\Delta\mathrm{CFS} = \Delta\tau + \mu'\,\Delta\sigma_n,$$

with $\Delta\tau$ the shear-stress change in the slip direction on the receiver fault, $\Delta\sigma_n$ the change in normal stress (unclamping positive), and $\mu'$ an effective friction coefficient of about 0.4. *In words: a fault is brought closer to failure by being sheared harder or by being unclamped.* Positive $\Delta\mathrm{CFS}$ correlates strongly with where aftershocks occur; the four-lobed pattern of positive and negative regions around a rupture is one of the most reproducible results in the field.

## Picture

![Left: a log-log plot of displacement amplitude against frequency showing a flat plateau labelled as measuring the seismic moment, breaking at a corner frequency into a line falling as f to the minus two. A fainter curve below shows a smaller earthquake with a lower plateau but a corner frequency further to the right. A note explains that the plateau measures the whole fault while the corner measures its size, and that a scale reading amplitude at one fixed period is reading the wrong part of the plot, which is why the surface-wave magnitude saturates. Right: a directivity diagram. A rupture runs left to right along a thick line at velocity Vr, starting at a coral dot. A station ahead of it records a short tall pulse of 19 seconds; a station behind records a long low pulse of 52 seconds. A note explains that the rupture chases its own waves so arrivals pile up ahead and spread out behind, giving the same moment and magnitude but roughly three times the shaking on one side of the fault, and that this is a Doppler effect and a first-order hazard control](assets/01-07-fig1.svg)

Magnitude is the height of the plateau. Everything that decides what the earthquake feels like is in the corner and in the direction.

## Worked examples

**Example 1 (mechanical — stress drop and duration).** Take the $M_w\,7.44$ rupture of [1.6](01-06-earthquake-sources-magnitude.md): $L = 100$ km, $W = 20$ km, $\bar d = 3.0$ m, $\mu = 30$ GPa, in crust with $v_s = 3.5\ \mathrm{km\,s^{-1}}$.

*Stress drop.*
$$\Delta\sigma \approx \frac{\mu\bar d}{W} = \frac{3.0\times10^{10}\times3.0}{2.0\times10^{4}} = \frac{9.0\times10^{10}}{2.0\times10^{4}} = 4.5\times10^{6}\ \mathrm{Pa} = 4.5\ \mathrm{MPa}.$$

Squarely inside the universal 1–10 MPa band.

*Duration.* With $v_r = 0.8\,v_s = 2.8\ \mathrm{km\,s^{-1}}$:
$$T_{\text{dur}} = \frac{L}{v_r} = \frac{100}{2.8} = 35.7\ \mathrm{s}, \qquad f_c \approx \frac{1}{35.7} = 0.028\ \mathrm{Hz},$$

a corner period of about 36 s. Already longer than the 20 s at which $M_s$ is measured — so this event is right at the edge of saturating that scale, exactly as the table in [1.6](01-06-earthquake-sources-magnitude.md) says.

*Energy.*
$$E_s \approx \frac{\Delta\sigma}{2\mu}M_0 = \frac{4.5\times10^{6}}{6.0\times10^{10}}\times1.8\times10^{20} = 7.5\times10^{-5}\times1.8\times10^{20} = 1.35\times10^{16}\ \mathrm{J}.$$

**Example 2 (why you'd care — the same magnitude, twice the damage).** A strike-slip earthquake ruptures unilaterally for $L = 60$ km at $v_r = 2.8\ \mathrm{km\,s^{-1}}$. Two cities lie on the fault trace, one 30 km beyond the far end of the rupture and one 30 km behind the epicentre. Compare what they experience, using $c = v_s = 3.5\ \mathrm{km\,s^{-1}}$ for the shear waves that do the damage.

*Nominal duration.*
$$T_0 = \frac{L}{v_r} = \frac{60}{2.8} = 21.4\ \mathrm{s}.$$

*Forward city* ($\theta = 0$):
$$T_{\text{app}} = 21.4\left(1 - \frac{2.8}{3.5}\right) = 21.4(1-0.80) = 21.4\times0.20 = 4.3\ \mathrm{s}.$$

*Backward city* ($\theta = 180^\circ$):
$$T_{\text{app}} = 21.4(1+0.80) = 38.5\ \mathrm{s}.$$

**The same energy is delivered in 4.3 s at one city and 38.5 s at the other** — a ratio of 9. Since peak amplitude scales roughly as the inverse of the duration over which the moment is released, the forward city sees something like nine times the peak velocity, concentrated into a single large pulse.

*Why this is not a curiosity.* That forward pulse is the **near-fault velocity pulse**, and it is the most destructive ground motion known. It is long-period (several seconds), so it resonates with tall and base-isolated structures rather than with small ones; it arrives essentially without warning as a single swing rather than as shaking that builds; and it is not captured by the simple magnitude-and-distance relations that traditional hazard maps were built on. The 1994 Northridge and 1995 Kobe earthquakes both showed severe damage concentrated in the forward-directivity direction, and modern hazard analysis carries an explicit directivity term as a result.

*And note what magnitude does with all this.* Both cities record the same $M_w$. The moment is a property of the fault; directivity is a property of the fault *and the direction you stand in*. **A single scalar cannot encode a vector phenomenon**, and the widespread belief that magnitude predicts shaking is exactly this category error. The distribution of shaking, intensity and hazard is [`geology` 2.7](../../geology/lessons/02-07-earthquakes-seismic-hazard.md)'s subject, and this is the source-side physics behind it.

## Watch out

- **You might think** stress drop is the stress on the fault. **Actually** it is the *change* in stress, typically a few percent of the absolute value. An earthquake does not unload its fault; it nibbles at it. This matters for a common misconception: a big earthquake does not "use up" the strain in a region, which is why aftershocks and even larger triggered events remain possible.
- **You might think** rupture velocity is the speed the ground moves. **Actually** it is the speed at which the *edge of the slipping region* advances — kilometres per second — while the ground itself moves at metres per second at most. Confusing them is the source of alarming but wrong statements about ground velocities.
- **You might think** self-similarity means all earthquakes are the same. **Actually** it means their *scaling* is the same to first order, and the factor-of-ten scatter in $\Delta\sigma$ around that scaling is real, systematic (intraplate events are higher than interplate) and important — it is precisely the part that decides radiated energy and high-frequency shaking at a given magnitude.

## One-liner

> Stress drop is nearly constant across the whole range of earthquakes, so slip grows with length, duration grows with size, and everything that distinguishes two events of equal magnitude lives in the corner frequency and the direction the rupture ran.

## Problems

**P1 (🟢)** A rupture has $W = 15$ km, $\bar d = 1.8$ m, $\mu = 32$ GPa, $L = 45$ km, in crust with $v_s = 3.6\ \mathrm{km\,s^{-1}}$. (a) Compute the stress drop and say whether it is typical. (b) Compute the duration, taking $v_r = 0.8\,v_s$. (c) Compute the corner frequency.

**P2 (🟡)** Two earthquakes have $M_w\,6.0$ and $M_w\,8.0$, with the same stress drop. (a) By what factor do their moments differ? (b) Using $M_0 \propto L^3$, by what factor do their rupture lengths, slips and durations differ? (c) The $M_w\,6.0$ lasted 3 s; predict the duration of the $M_w\,8.0$ and compare with the observed duration of a real magnitude-8 event. (d) Explain, from your answer to (c), why $m_b$ (measured at 1 s period) is useless above about magnitude 6.5.

**P3 (🔴, bridges to [`geology` 2.7](../../geology/lessons/02-07-earthquakes-seismic-hazard.md))** An $M_w\,7.0$ strike-slip earthquake ruptures a fault. A second fault, parallel to the first and 15 km away, is known to be late in its own cycle. (a) The mainshock produces a shear-stress change of $+0.05$ MPa in the slip direction on the second fault and unclamps it by $0.03$ MPa. With $\mu' = 0.4$, compute $\Delta\mathrm{CFS}$ and state whether the second fault has been brought closer to failure. (b) The second fault accumulates stress tectonically at 0.004 MPa/yr. By how many years has the mainshock advanced its clock? (c) Explain why a $\Delta\mathrm{CFS}$ of a few hundredths of a MPa can measurably change aftershock rates when the absolute stress on the fault is of order 100 MPa. (d) A colleague argues that because the effect is so small, Coulomb calculations cannot be useful for forecasting. Give the strongest version of their objection and the strongest reply.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Delta\sigma \approx \frac{\mu\bar d}{W} = \frac{3.2\times10^{10}\times1.8}{1.5\times10^{4}} = \frac{5.76\times10^{10}}{1.5\times10^{4}} = 3.84\times10^{6}\ \mathrm{Pa} = 3.8\ \mathrm{MPa}.$$
Typical — right in the middle of the 1–10 MPa band.

(b) $$v_r = 0.8\times3.6 = 2.88\ \mathrm{km\,s^{-1}}, \qquad T_{\text{dur}} = \frac{45}{2.88} = 15.6\ \mathrm{s}.$$

(c) $$f_c \approx \frac{1}{15.6} = 0.064\ \mathrm{Hz}, \text{ a corner period of about } 16\ \mathrm{s}.$$

**P2** (a) $$10^{1.5\times2.0} = 10^{3} = 1000.$$

(b) $L \propto M_0^{1/3}$, so lengths differ by $1000^{1/3} = 10$. Self-similarity gives $\bar d\propto L$, so slips also differ by **10**. Duration is $L/v_r$ with $v_r$ roughly fixed, so durations differ by **10**.

(c) $$T_{8.0} \approx 10\times3 = 30\ \mathrm{s}.$$

Real magnitude-8 events last roughly 30 to 60 s, so the prediction is right to within a factor of two — good agreement for a scaling argument with no free parameters. (The scatter comes mostly from the factor-of-ten spread in stress drop and from whether the rupture is unilateral or bilateral; a bilateral rupture of the same length finishes in half the time.)

(d) $m_b$ reads the spectrum at 1 Hz. At $M_w\,6.0$ the corner frequency is about $1/3 = 0.33$ Hz, so 1 Hz already sits on the falling $f^{-2}$ limb — barely. By $M_w\,7.0$, $f_c \approx 0.1$ Hz and 1 Hz is a full decade above the corner, where the spectral amplitude has fallen by a factor of 100 relative to the plateau. Growing the earthquake further moves the plateau up but moves the corner left by a compensating amount, and the value at the fixed 1 Hz measuring point barely changes. **The scale stops responding**, which is the definition of saturation, and the threshold sits near magnitude 6.5 exactly because that is where $f_c$ passes decisively below 1 Hz.

**P3** (a) $$\Delta\mathrm{CFS} = \Delta\tau + \mu'\Delta\sigma_n = 0.05 + 0.4\times0.03 = 0.05+0.012 = 0.062\ \mathrm{MPa}.$$

Positive, so **yes** — the second fault has been pushed closer to failure, both by being sheared in its slip direction and by being unclamped.

(b) $$\Delta t = \frac{0.062\ \mathrm{MPa}}{0.004\ \mathrm{MPa\,yr^{-1}}} = 15.5\ \mathrm{yr}.$$

The mainshock has advanced the second fault's clock by about **16 years** — a substantial fraction of a typical interseismic interval, delivered in seconds.

(c) Because **the fault is not choosing between 0 and 100 MPa; it is sitting at the failure threshold and waiting.** A fault late in its cycle is within a hair of the stress at which it will slip, and it is being pushed toward that threshold at a few thousandths of a MPa per year. A step of 0.06 MPa is therefore not "one part in two thousand of the stress" in any meaningful sense — it is fifteen years of tectonic loading, applied instantaneously. What matters is the size of the perturbation relative to the *rate of approach to failure*, not relative to the absolute stress. This is a general lesson about threshold systems and it recurs whenever a small forcing meets a system poised at a critical point.

(d) *The objection, at its strongest.* The absolute stress on the receiving fault is unknown, so we cannot say how close to failure it was; the effective friction $\mu'$ is uncertain by a factor of two and pore-pressure effects are poorly constrained; the calculation assumes an elastic half-space and a slip distribution that is itself an inversion with its own null space ([6.1](06-01-the-linear-inverse-problem.md)); and retrospective successes are vulnerable to selection, since the lobes are large and aftershocks are numerous, so *some* pattern will usually appear to match.

*The reply, at its strongest.* Coulomb modelling does not claim to forecast a specific event; it claims a statistical shift in rate, and that claim has been tested prospectively. The correlation between positive $\Delta\mathrm{CFS}$ lobes and aftershock density holds across many sequences and geometries, and — the strongest part — the *negative* lobes show measurable **quiescence**, which is much harder to obtain by chance than an excess of activity in a large positive region. A model that only ever predicted "more earthquakes near the big one" would not predict fewer earthquakes anywhere. Used as it should be — as a probability multiplier on an underlying rate model rather than as a deterministic forecast — it is one of the few physical ingredients that demonstrably improves aftershock forecasting.

The honest position sits between: the sign of the effect is well established, the magnitude of the effect is uncertain, and it belongs in a hazard calculation as a factor with error bars rather than as a prediction.

</details>

## Flashback

**From Lesson 1.5 (Seismic tomography):** A P wave crosses 600 km of a mantle region that is 1.0 percent slow, against a background velocity of $11.0\ \mathrm{km\,s^{-1}}$. (a) Compute the travel-time residual and its sign. (b) The same region gives $\delta\ln v_s = -2.5\%$. Compute the ratio $\delta\ln v_s/\delta\ln v_p$ and interpret it. (c) State what a measurement of very low $Q$ in the same volume would add.

<details>
<summary>Solution</summary>

(a) $$t_{\text{in}} = \frac{600}{11.0} = 54.5\ \mathrm{s}, \qquad \delta t = -t_{\text{in}}\frac{\delta v}{v} = -54.5\times(-0.010) = +0.55\ \mathrm{s}.$$

Positive — the wave arrives **late**, as slow rock requires.

(b) $$R = \frac{-2.5}{-1.0} = 2.5.$$

Above the 1.7–2.0 expected for a purely thermal anomaly. The shear modulus is being attacked much harder than the bulk modulus, which points to **partial melt** (or, more weakly, to water in nominally anhydrous minerals). A purely thermal reading of $\delta\ln v_s$ would give $\delta T \approx 250$ K, and this ratio says that figure is an **upper bound**, since melt is supplying part of the velocity reduction for free.

(c) It would confirm melt and largely settle the ambiguity. Attenuation is far more sensitive to the presence of a fluid phase than velocity is: a small interconnected melt fraction lowers $Q$ dramatically while lowering $v_s$ only a few percent ([5.3](05-03-attenuation-anelasticity.md)). A normal $Q$ alongside $R = 2.5$ would be genuinely puzzling and would push the interpretation toward composition — for example an eclogite-rich or hydrated region — rather than melt. This is the three-observable chain from Example 2 of [1.5](01-05-seismic-tomography.md): one observable is ambiguous, a ratio kills some options, an independent physical measurement closes it.

</details>

## Connections

- **Backward:** the moment $M_0 = \mu A\bar d$ that this lesson decomposes is [1.6](01-06-earthquake-sources-magnitude.md)'s, and the rigidity in both the moment and the stress drop is [1.1](01-01-the-elastic-earth.md)'s. The saturation mechanism explained here by the corner frequency is the phenomenon [1.6](01-06-earthquake-sources-magnitude.md) could only describe.
- **Forward:** moment rates built from these ruptures are compared with plate velocities in [3.5](03-05-plate-kinematics-euler-poles.md) and with geodetic strain rates in [2.7](02-07-space-geodesy.md); the stress budget on a fault is one term in the plate-scale force balance of [4.5](04-05-plate-driving-forces.md). Recovering the slip distribution on a fault from seismograms is itself an inverse problem with a null space, and is one of the worked settings of [6.1](06-01-the-linear-inverse-problem.md).
- **Sideways:** [`geology` 2.7](../../geology/lessons/02-07-earthquakes-seismic-hazard.md) owns everything this lesson feeds — magnitude–frequency statistics, recurrence, intensity and hazard — and the fault geometry the rupture runs on is [`geology` 2.5](../../geology/lessons/02-05-folds-faults-structures.md). The crack mechanics behind the stress-drop formula is the same fracture mechanics as [materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md): a stress drop is a crack-tip problem, and an earthquake is a shear crack that happens to be 100 km long. The directivity Doppler is the acoustic Doppler effect of [`waves-optics`](../../waves-optics/syllabus.md), with the source moving at a substantial fraction of the wave speed rather than a negligible one — which is why the compression factor is large rather than a small correction.
