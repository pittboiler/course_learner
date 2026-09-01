# Geophysics · Lesson 3.1: The main field

> ⏱ ~15 min · Module 3: Geomagnetism, palaeomagnetism & plate kinematics · Builds on: [`em-refresher`](../../em-refresher/syllabus.md), [2.4](02-04-the-geoid.md) · Unlocks: [3.2](03-02-the-geodynamo.md), [3.3](03-03-paleomagnetism.md)

## Why this matters

The Earth has a magnetic field that has been used for navigation for a thousand years and understood for barely a century. About 90 percent of it is a dipole, tilted some 9 degrees from the rotation axis, and to a very good approximation the field at any point on the surface depends on one thing: your latitude.

That is an extraordinarily useful fact, because it runs backwards. A rock that recorded the field direction when it formed is recording the latitude at which it formed — and comparing that with where the rock is now measures how far the continent has moved. Everything in [3.3](03-03-paleomagnetism.md) and [3.4](03-04-magnetic-anomalies-reversals.md) rests on the geometry established here.

The field also contains a second gift. Its spatial spectrum, extrapolated downward, tells you how deep the source is — and the answer, obtained without a single seismogram, is the radius of the core.

## The idea

**Describe the field with elements, not components.** At any point the field is a vector, so it takes three numbers. Geomagnetism uses a mixture of Cartesian and angular ones, because they are what an instrument naturally measures: the **horizontal intensity** $H$, the **vertical (downward) intensity** $Z$, the **declination** $D$ (the angle from true north to magnetic north, what a compass gets wrong), and the **inclination** $I$ (how far below horizontal the field points).

**A dipole's radial component is twice its tangential one.** This is pure geometry — a fact about the $1/r^3$ dipole field, not about the Earth. It has the immediate consequence

$$\tan I = 2\tan\lambda,$$

so the field dips at 0° at the magnetic equator, 45° at latitude 26.6°, 63.4° at latitude 45°, and 90° at the pole. **The dip angle knows your latitude.**

**The field is not a pure dipole, and the departures matter.** Roughly 10 percent is non-dipole — patches of anomalous field, most famously the South Atlantic Anomaly, where the field is weak enough that satellites there suffer radiation damage. The non-dipole field also **drifts westward** at about 0.2 degrees per year, which is one of the few direct pieces of evidence about flow at the top of the core.

**Nothing about it is static.** Declination in London has swung through 35 degrees since records began; the north magnetic dip pole has accelerated from about 15 km/yr in the 1990s to over 50 km/yr, crossing from Canada into the Arctic Ocean. The dipole moment itself has fallen about 9 percent since 1840. This **secular variation** is fast — decades to centuries — which by itself proves the source is fluid.

**And the spectrum locates the source.** Short-wavelength field components fall off with distance faster than long-wavelength ones. So the *shape* of the field's spatial power spectrum at the surface, extrapolated inward, has a radius at which it becomes flat — and that radius is where the source is. It comes out near 3400 km, within a few percent of the seismological core radius. **The magnetic field independently discovers the core.**

## The formal version

**Geomagnetic elements.** With $X$ north, $Y$ east, $Z$ down:

$$H = \sqrt{X^2+Y^2}, \qquad F = \sqrt{H^2+Z^2}, \qquad \tan D = \frac{Y}{X}, \qquad \tan I = \frac{Z}{H}.$$

Units: nanotesla. Surface field strengths run from about 24,000 nT (South Atlantic) to 66,000 nT (near the poles).

**The geocentric axial dipole (GAD).** For a dipole of moment $m$ at the centre, aligned with the rotation axis, at latitude $\lambda$ and radius $a$:

$$Z = 2B_0\sin\lambda, \qquad H = B_0\cos\lambda, \qquad F = B_0\sqrt{1+3\sin^2\lambda},$$

$$\boxed{\ \tan I = 2\tan\lambda\ }, \qquad B_0 = \frac{\mu_0 m}{4\pi a^3} \approx 30{,}000\ \mathrm{nT}.$$

*In words: the vertical component grows as the sine of latitude, the horizontal shrinks as the cosine, and their ratio is twice the tangent.* The present dipole moment is $m \approx 7.7\times10^{22}\ \mathrm{A\,m^2}$.

**The spherical-harmonic expansion.** Outside the source region the field is a potential field, $\mathbf B = -\nabla V$ with $\nabla^2 V = 0$, so

$$V = a\sum_{\ell=1}^{\infty}\sum_{m=0}^{\ell}\left[\left(\frac{a}{r}\right)^{\ell+1}\!\!\left(g_\ell^m\cos m\varphi + h_\ell^m\sin m\varphi\right) + \left(\frac{r}{a}\right)^{\ell}\!\!\left(q_\ell^m\cos m\varphi + s_\ell^m\sin m\varphi\right)\right]P_\ell^m(\cos\theta).$$

*In words: terms that die outward come from inside the Earth; terms that grow outward come from outside it.* The **Gauss coefficients** $g_\ell^m, h_\ell^m$ are internal, the $q,s$ external. The **International Geomagnetic Reference Field (IGRF)** tabulates the internal coefficients to degree 13, updated every five years with their secular-variation rates.

The dipole terms: $g_1^0 \approx -29{,}400$ nT (the axial dipole), with $g_1^1$ and $h_1^1$ giving the tilt of about 9.4°.

**Gauss's separation.** Because internal and external terms have different radial dependence, measuring the field over a closed surface separates them uniquely. Gauss did this in 1839 and showed **the field is overwhelmingly internal** — the first proof that the Earth itself is the magnet, not something outside it.

**The Lowes–Mauersberger spectrum.** The mean-square field of degree $\ell$ over a sphere of radius $r$:

$$R_\ell(r) = (\ell+1)\left(\frac{a}{r}\right)^{2\ell+4}\sum_{m=0}^{\ell}\left[(g_\ell^m)^2 + (h_\ell^m)^2\right].$$

*In words: the power in each wavelength band, continued to any radius.* At the source, the spectrum should be roughly flat ("white"). Observed at the surface, $R_\ell$ falls approximately geometrically, $R_\ell \propto q^\ell$ with $q \approx 0.27$–$0.30$ for $2 \le \ell \le 13$. Flatness at radius $c$ requires

$$q\left(\frac{a}{c}\right)^{2} = 1 \;\Longrightarrow\; c = a\sqrt{q}.$$

Above $\ell \approx 14$ the spectrum flattens abruptly — that is the **crustal field**, magnetized rock in the lithosphere, which swamps the core field at short wavelength and is the signal exploited in [3.4](03-04-magnetic-anomalies-reversals.md).

**Poles, three kinds.**

| Pole | Definition |
|---|---|
| geomagnetic pole | where the axis of the best-fitting *dipole* meets the surface |
| magnetic (dip) pole | where the *actual* field is vertical, $I = 90^\circ$ |
| geographic pole | rotation axis |

The dip poles are not antipodal to each other, because the non-dipole field is not symmetric.

## Picture

![Left: a circle representing the Earth with a dashed rotation axis, crossed by blue dipole field lines looping from one pole to the other. At a point on the surface at mid-latitude, a coral vector diagram shows the downward component Z, the horizontal component H, the total field F as their resultant, and the inclination angle I between H and F. A note says that tan I equals two tan lambda, that the dip angle knows your latitude and nothing else, and that this is the whole of palaeomagnetism. Right: a graph of inclination against latitude, with the blue curve rising steeply from zero at the equator through 63.4 degrees at latitude 45 to 90 degrees at the pole, lying everywhere above a dashed straight line labelled I equals lambda would be the naive guess. A closing note says the factor of two is geometry, not physics: the radial component of a dipole is twice the tangential one](assets/03-01-fig1.svg)

Everything else in this module is this one relation, read backwards.

## Worked examples

**Example 1 (mechanical — the field at a site).** At latitude 45.0°N, assuming a geocentric axial dipole with $B_0 = 30{,}000$ nT, find $Z$, $H$, $F$ and $I$. Then find the dipole moment implied by $B_0$.

$$Z = 2\times30{,}000\times\sin45^\circ = 60{,}000\times0.7071 = 42{,}426\ \mathrm{nT},$$
$$H = 30{,}000\times\cos45^\circ = 21{,}213\ \mathrm{nT},$$
$$F = 30{,}000\sqrt{1+3(0.5)} = 30{,}000\times1.5811 = 47{,}434\ \mathrm{nT},$$
$$\tan I = \frac{42{,}426}{21{,}213} = 2.000 \;\Rightarrow\; I = 63.43^\circ.$$

Check: $\tan I = 2\tan45^\circ = 2$. ✓

*Dipole moment.*
$$m = \frac{4\pi a^3 B_0}{\mu_0} = \frac{4\pi(6.371\times10^{6})^3\times3.0\times10^{-5}}{4\pi\times10^{-7}} = (2.586\times10^{20})\times\frac{3.0\times10^{-5}}{10^{-7}} = 2.586\times10^{20}\times300$$
$$= 7.76\times10^{22}\ \mathrm{A\,m^2}.$$

**Example 2 (why you'd care — finding the core with a compass).** Use the observed geomagnetic power spectrum to locate the source depth, and compare with seismology.

*The reasoning.* Field components of degree $\ell$ generated at radius $c$ appear at the surface attenuated by $(c/a)^{\ell+2}$ in amplitude, hence $(c/a)^{2\ell+4}$ in power. If the source is "white" — equal power at all wavelengths, which is what you expect from a turbulent dynamo with no preferred scale — then the surface spectrum must fall geometrically, with a ratio per degree of $(c/a)^{2}$.

*The measurement.* Fitting $R_\ell \propto q^\ell$ to the IGRF coefficients over $2\le\ell\le13$ gives $q \approx 0.27$ to $0.30$.

$$c = a\sqrt q: \qquad q = 0.27 \Rightarrow c = 6371\times0.5196 = 3311\ \mathrm{km},$$
$$q = 0.30 \Rightarrow c = 6371\times0.5477 = 3490\ \mathrm{km}.$$

*Against seismology.* The core–mantle boundary is at 3480 km ([1.4](01-04-travel-time-curves-deep-earth.md)). The magnetic estimate brackets it.

*Why this is a genuinely strong result.* Two measurements that share no instruments, no physics and no assumptions agree on the size of an object nobody has seen. Seismology found the core from a shadow zone in arrival times; geomagnetism finds it from the slope of a power spectrum. **When two independent methods with completely different failure modes agree, the conclusion is about as secure as observational science gets.**

*And it comes with a caveat that turns out to be a second result.* The fit only works for $\ell \le 13$. Above that the surface spectrum flattens out, and continuing it downward to 3480 km would give absurdly large fields — the continuation amplifies short wavelengths violently. The resolution is that degrees above about 14 are *not* coming from the core at all: they are the **crustal field**, produced by magnetized rock within a few tens of kilometres of the surface, which barely attenuates over that distance and therefore has a nearly flat spectrum.

So the spectrum does not just locate the core; it also draws a line at $\ell \approx 14$ separating two entirely different sources. Everything below that line is the dynamo ([3.2](03-02-the-geodynamo.md)); everything above it is rock ([3.4](03-04-magnetic-anomalies-reversals.md)). **The wavelength at which one signal ends and the other begins is itself a measurement**, and it sets a hard limit on how much detail of the core's field we can ever see from the surface.

## Watch out

- **You might think** a compass points to the magnetic pole. **Actually** it points along the local horizontal field, which is not a great circle to the dip pole except by coincidence, because the field is not a perfect dipole. Declination is a local quantity that must be read off a chart, not computed from pole positions.
- **You might think** the geomagnetic and magnetic poles are the same. **Actually** the geomagnetic poles are defined by the best-fitting dipole and are exactly antipodal; the dip poles, where the field is genuinely vertical, are not antipodal and sit hundreds of kilometres away. Palaeomagnetism uses the *geomagnetic* (dipole) definition throughout.
- **You might think** the falling dipole moment means a reversal is imminent. **Actually** the present rate of decay would take about a thousand years to reach zero, the field has fluctuated by comparable amounts before without reversing, and reversals occur on average about every few hundred thousand years — but with enormous irregularity ([3.4](03-04-magnetic-anomalies-reversals.md)). The honest statement is that the field is weakening and nobody can forecast what happens next.

## One-liner

> Ninety percent of the Earth's field is a tilted dipole, so the dip angle at any site measures its latitude — and the field's spatial spectrum, continued downward, independently locates the fluid that generates it.

## Problems

**P1 (🟢)** At latitude 30.0°S, assuming a geocentric axial dipole with $B_0 = 30{,}000$ nT. (a) Compute $Z$, $H$ and $F$. (b) Compute $I$, stating its sign convention. (c) State how $I$ would differ at 30.0°N.

**P2 (🟡)** A magnetic survey at a site measures $X = 18{,}500$ nT, $Y = -3200$ nT, $Z = 45{,}100$ nT. (a) Compute $H$, $F$, $D$ and $I$. (b) Assuming a geocentric axial dipole, compute the latitude implied by $I$. (c) The site's true geographic latitude is 58.0°N. Comment on the discrepancy and name two causes.

**P3 (🔴, bridges to [3.2](03-02-the-geodynamo.md))** The geomagnetic power spectrum satisfies $R_\ell \propto q^{\ell}$ with $q = 0.28$ over $2\le\ell\le13$. (a) Compute the implied source radius. (b) Compute the ratio by which a degree-13 field component is attenuated in amplitude between the source radius and the Earth's surface. (c) Repeat for degree 30, and use the answer to explain quantitatively why core field components above degree 14 are unobservable. (d) The crustal field has a nearly flat spectrum at the surface. Explain what source depth that implies, and why the two spectra must cross.

<details>
<summary>Solutions</summary>

**P1** (a) $\lambda = -30.0^\circ$, so $\sin\lambda = -0.5$, $\cos\lambda = 0.8660$.
$$Z = 2\times30{,}000\times(-0.5) = -30{,}000\ \mathrm{nT},$$
$$H = 30{,}000\times0.8660 = 25{,}981\ \mathrm{nT},$$
$$F = 30{,}000\sqrt{1+3(0.25)} = 30{,}000\times1.3229 = 39{,}686\ \mathrm{nT}.$$

Check: $\sqrt{30{,}000^2 + 25{,}981^2} = \sqrt{9.0\times10^{8}+6.75\times10^{8}} = \sqrt{1.575\times10^{9}} = 39{,}686$. ✓

(b) $$\tan I = \frac{Z}{H} = \frac{-30{,}000}{25{,}981} = -1.1547 \;\Rightarrow\; I = -49.1^\circ.$$

By convention $I$ is **positive downward**, so a negative inclination means the field points *upward* out of the ground — which is what happens in the southern hemisphere.

(c) At 30.0°N, $I = +49.1^\circ$: the same magnitude, opposite sign. $H$ and $F$ are unchanged, since both depend on $\lambda$ only through even functions.

**P2** (a) $$H = \sqrt{18{,}500^2 + (-3200)^2} = \sqrt{3.4225\times10^{8}+1.024\times10^{7}} = \sqrt{3.5249\times10^{8}} = 18{,}775\ \mathrm{nT}.$$
$$F = \sqrt{18{,}775^2 + 45{,}100^2} = \sqrt{3.5250\times10^{8}+2.0340\times10^{9}} = \sqrt{2.3865\times10^{9}} = 48{,}852\ \mathrm{nT}.$$
$$D = \arctan\frac{-3200}{18{,}500} = \arctan(-0.17297) = -9.8^\circ \ \text{(i.e. } 9.8^\circ\ \text{west)}.$$
$$I = \arctan\frac{45{,}100}{18{,}775} = \arctan(2.4021) = 67.4^\circ.$$

(b) $$\tan\lambda = \frac{\tan I}{2} = \frac{2.4021}{2} = 1.2011 \;\Rightarrow\; \lambda = 50.2^\circ\mathrm{N}.$$

(c) The dipole latitude, 50.2°, is about 8 degrees short of the true 58.0°. Two causes:

- **The dipole is tilted** by about 9.4° from the rotation axis, so *geomagnetic* latitude differs from *geographic* latitude by up to that amount depending on longitude. This is the dominant effect and is entirely expected.
- **The non-dipole field**, roughly 10 percent of the total, perturbs the local inclination by several degrees in a way that varies from region to region and drifts with time.

For a *single* present-day site these are systematic errors, not noise, and cannot be averaged away. The reason palaeomagnetism nevertheless works is that both effects wander over centuries to millennia, so **averaging many samples spanning a few thousand years recovers the geocentric axial dipole** — the GAD hypothesis, which is [3.3](03-03-paleomagnetism.md)'s central assumption and its main vulnerability.

**P3** (a) $$c = a\sqrt q = 6371\times\sqrt{0.28} = 6371\times0.5292 = 3372\ \mathrm{km}.$$

(b) Amplitude attenuation from radius $c$ to radius $a$ for degree $\ell$ is $(c/a)^{\ell+2}$:

$$\left(\frac{3372}{6371}\right)^{15} = (0.5292)^{15}.$$
$$\log_{10}(0.5292) = -0.27633, \quad \times15 = -4.145, \quad \Rightarrow\ 7.2\times10^{-5}.$$

A degree-13 core feature is reduced by a factor of about **14,000** by the time it reaches the surface.

(c) For $\ell = 30$: $(0.5292)^{32}$, and $-0.27633\times32 = -8.843$, giving $1.44\times10^{-9}$.

So a degree-30 component is attenuated by a factor of about $7\times10^{8}$. Even if the core generated degree-30 field as strong as its degree-13 field — several thousand nT at the source — it would arrive at the surface at the level of $10^{-5}$ nT, some nine orders of magnitude below the ambient field and far beneath any instrument's noise floor. **The mantle is a low-pass filter of extreme severity**, and no improvement in magnetometers will change that; the limit is geometric.

(d) A **flat** surface spectrum implies a source at essentially the surface. Repeating the argument: a source at radius $c$ produces a surface spectrum falling as $(c/a)^{2\ell+4}$, and flatness requires $(c/a) \approx 1$, i.e. $c \approx a$. Concretely, magnetized crust within a few tens of kilometres of the surface gives $(c/a)^2 \approx 0.99$, so the spectrum barely decays across the observable degree range.

The two spectra **must** cross because they have opposite slopes in $\ell$ relative to each other: the core's contribution falls steeply with degree while the crust's is nearly constant. At low degree the core wins by orders of magnitude; at high degree the crust wins for the same reason. The crossover — near $\ell = 14$, a wavelength of about 3000 km — is a real physical boundary in the data, and it is why the two are studied by different communities with different instruments. Global satellite missions map the core field at long wavelength; aeromagnetic surveys flying a few hundred metres above the ground map the crustal field at short wavelength, where satellite altitude would have attenuated it away.

</details>

## Flashback

**From Lesson 2.7 (Space geodesy):** A GNSS transect across a locked strike-slip fault gives far-field velocities of $\pm 20$ mm/yr. At 12 km from the fault the velocity is 8.4 mm/yr. (a) Find the locking depth. (b) Compute the annual moment accumulation for a 150 km segment with $\mu = 30$ GPa. (c) State how many years are needed to accumulate an $M_w\,7.2$.

<details>
<summary>Solution</summary>

(a) $V = 40$ mm/yr, $V/\pi = 12.732$.
$$8.4 = 12.732\arctan\frac{12}{D} \;\Rightarrow\; \arctan\frac{12}{D} = 0.6598\ \mathrm{rad} \;\Rightarrow\; \frac{12}{D} = \tan(0.6598) = 0.7757,$$
$$D = 15.5\ \mathrm{km}.$$

(b) $$A = 1.55\times10^{4}\times1.50\times10^{5} = 2.325\times10^{9}\ \mathrm{m^2},$$
$$\dot M_0 = \mu A V = 3.0\times10^{10}\times2.325\times10^{9}\times0.040 = 2.79\times10^{18}\ \mathrm{N\,m\,yr^{-1}}.$$

(c) $$\log_{10}M_0 = 1.5\times7.2 + 9.1 = 19.9 \;\Rightarrow\; M_0 = 7.94\times10^{19}\ \mathrm{N\,m}.$$
$$T = \frac{7.94\times10^{19}}{2.79\times10^{18}} = 28\ \mathrm{yr}.$$

As always, this is a long-term average moment balance, not a countdown — and it assumes the whole locked area participates in each event, which [1.6](01-06-earthquake-sources-magnitude.md) P3 flagged as an over-estimate of release.

</details>

## Connections

- **Backward:** the spherical-harmonic expansion and the internal/external separation are the same potential-theory machinery as the geoid's in [2.4](02-04-the-geoid.md) — with the crucial difference that a magnetic field has both internal and external sources, so the separation is a genuine measurement rather than a convention. The core radius recovered in Example 2 is [1.4](01-04-travel-time-curves-deep-earth.md)'s, obtained by an entirely different route.
- **Forward:** [3.2](03-02-the-geodynamo.md) asks what fluid motion generates this field and why it is dipole-dominated; [3.3](03-03-paleomagnetism.md) runs $\tan I = 2\tan\lambda$ backwards on ancient rocks; [3.4](03-04-magnetic-anomalies-reversals.md) works entirely in the crustal-field regime above degree 14 that Example 2 identified.
- **Sideways:** the dipole field and its potential are [`em-refresher`](../../em-refresher/syllabus.md)'s magnetostatics; the Legendre expansion is [`mathematical-methods-physics`](../../mathematical-methods-physics/syllabus.md)'s. [`geology` 2.1](../../geology/lessons/02-01-evidence-for-drift.md) uses the results of this chain — palaeolatitudes and apparent polar wander — as the historical evidence that convinced geologists continents move, and cites this module for the quantitative treatment.
