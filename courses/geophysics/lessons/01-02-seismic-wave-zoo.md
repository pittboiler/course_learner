# Geophysics · Lesson 1.2: The seismic wave zoo

> ⏱ ~15 min · Module 1: Seismology & Earth structure · Builds on: [1.1](01-01-the-elastic-earth.md) · Unlocks: [1.3](01-03-wave-equation-ray-theory.md), [1.4](01-04-travel-time-curves-deep-earth.md)

## Why this matters

A seismogram is not a single squiggle. It is a sequence of distinct arrivals, each of which took a different path through a different part of the Earth and each of which shakes the ground in a characteristic direction. Learning to name them is the first skill in seismology, and it pays immediately: the gap between the first two arrivals gives you the distance to the earthquake, and the presence or absence of the third and fourth tells you what the wave passed through on the way.

There are only four names to learn. Every complication after that — the fifty-odd labelled phases on a real global record — is these four bouncing, converting and taking different routes.

## The idea

**Two waves travel through the volume, and there are only two because there are only two moduli.** [1.1](01-01-the-elastic-earth.md) established that an isotropic solid resists exactly two things: volume change and shape change. So a disturbance can propagate in exactly two ways.

- **P waves** (primary, or pressure) compress and dilate the rock *along* the direction of travel, like sound in air. They involve volume change, so they feel both $K$ and $\mu$, and they are the fastest thing the Earth has. They arrive first — hence the name.
- **S waves** (secondary, or shear) displace the rock *across* the direction of travel, like a whip crack running down a rope. Pure shape change, no volume change, so they feel only $\mu$. Slower, and — the crucial fact — **impossible in a liquid**.

**Two more waves are trapped at the surface, and they exist only because the surface exists.** The free surface is a boundary where stress must vanish, and that boundary condition permits solutions that hug it, decaying exponentially with depth and travelling along it.

- **Rayleigh waves** move the ground in a *retrograde ellipse* in the vertical plane containing the direction of travel — up-and-backward at the top of the swing, like a particle in an ocean swell run in reverse. They exist at any free surface, even a uniform half-space.
- **Love waves** move the ground *horizontally, perpendicular* to the direction of travel. They exist only when a slow layer overlies faster material, so the shear energy can bounce between the surface and the layer's base and be trapped. **A uniform half-space has no Love waves at all** — their very presence tells you the Earth is layered.

**Surface waves win at distance, and the reason is geometry, not physics.** A body wave spreads over an expanding *sphere*, so its energy per unit area falls as $1/r^2$ and its amplitude as $1/r$. A surface wave spreads over an expanding *ring* — it is stuck in two dimensions — so its energy falls as $1/r$ and its amplitude as $1/\sqrt r$. Over thousands of kilometres that difference is decisive, which is why the largest wiggle on a distant seismogram is nearly always a surface wave, and why surface waves are what damage cities.

**Surface waves are dispersive, and that is a gift.** A surface wave's amplitude dies off within roughly one wavelength of depth, so a long-period wave samples deeper rock than a short-period one. Since the Earth generally gets faster with depth, **long periods travel faster and arrive first**, spreading the wave train out into a long dispersed tail. Measuring how speed varies with period is therefore a direct measurement of how velocity varies with depth — the basis of surface-wave tomography.

## The formal version

**Body-wave speeds** (derived in [1.3](01-03-wave-equation-ray-theory.md)):

$$v_p = \sqrt{\frac{\lambda+2\mu}{\rho}} = \sqrt{\frac{K + \tfrac43\mu}{\rho}}, \qquad v_s = \sqrt{\frac{\mu}{\rho}}.$$

*In words: the P speed is set by resistance to compression plus a shear contribution; the S speed is set by rigidity alone.* For a Poisson solid ($\lambda=\mu$, $\nu = 1/4$), $v_p/v_s = \sqrt3$.

**S-wave polarization.** An S wave's displacement lies in the plane perpendicular to the ray, so it needs two components. Conventionally these are resolved relative to the vertical plane containing the ray:

- **SV** — displacement in that vertical plane;
- **SH** — displacement horizontal and perpendicular to it.

*In words: SV is the shear component that moves the ground up-and-down-ish; SH is the component that moves it side-to-side.* The split matters because at an interface SV converts into P and SH does not, so SH problems stay clean while SV problems couple. Love waves are built from trapped SH; Rayleigh waves from coupled P and SV.

**Rayleigh-wave speed.** In a uniform half-space, the Rayleigh speed $c_R$ solves a cubic in $(c_R/v_s)^2$. For a Poisson solid the root is

$$c_R = 0.9194\,v_s.$$

*In words: Rayleigh waves run at about 92 percent of the shear speed.* In a uniform half-space this is a single number — **no dispersion**. Real Rayleigh waves are dispersive purely because the real Earth is layered.

**Love-wave speed.** For a layer of shear speed $v_{s1}$ and thickness $H$ over a half-space of shear speed $v_{s2} > v_{s1}$, the Love-wave phase velocity $c$ always satisfies

$$v_{s1} < c < v_{s2},$$

approaching $v_{s1}$ at short period (energy confined to the layer) and $v_{s2}$ at long period (energy leaks deep into the half-space). *In words: a Love wave is faster the longer its period, because a longer period lets it feel more of the fast rock underneath.* If $v_{s2} \le v_{s1}$ there is no trapping and no Love wave.

**Group versus phase velocity.** The phase velocity $c(T)$ is the speed of a single-period wavefront; the **group velocity**

$$U = \frac{d\omega}{dk} = c - \lambda\frac{dc}{d\lambda}$$

is the speed at which energy — and therefore the arrival you actually pick — travels. For Earth surface waves $U < c$, and the group-velocity curve has a minimum near 20 s period. Energy piles up at that minimum, producing the large late-arriving pulse called the **Airy phase**.

**Geometric spreading.**

$$A_{\text{body}} \propto \frac1r, \qquad A_{\text{surface}} \propto \frac{1}{\sqrt r}.$$

## Picture

![Four panels of particle motion. P waves are drawn as vertical bars alternately bunched and spread along a horizontal propagation arrow, labelled as compression along the ray. S waves are a transverse sine wave across the propagation direction, labelled as shear across the ray and noting it needs a non-zero shear modulus. Rayleigh waves are drawn as vertical ellipses at the free surface with arrows showing retrograde circulation, shrinking with depth, with a note that amplitude dies within about one wavelength so long periods sample deeper. Love waves are a horizontal transverse wiggle inside a layer above a dashed interface, with a note that they need a slow layer over a fast one and do not exist in a uniform half-space. Below, a synthetic seismogram at 300 km distance shows a flat trace, then a small sharp P onset at 50 seconds, a larger S onset at 87 seconds, and a large smooth Rayleigh arrival at 94 seconds labelled latest and largest](assets/01-02-fig1.svg)

The order P, S, Love, Rayleigh is fixed by the physics and never varies. Only the spacing changes, and the spacing is the distance.

## Worked examples

**Example 1 (mechanical — reading the record).** A local earthquake occurs 300 km away in crust with $v_p = 6.00$, $v_s = 3.46\ \mathrm{km\,s^{-1}}$. Predict the arrival times of P, S and Rayleigh, and the S–P interval.

$$t_P = \frac{300}{6.00} = 50.0\ \mathrm{s}, \qquad t_S = \frac{300}{3.46} = 86.7\ \mathrm{s}.$$

$$c_R = 0.9194\times3.46 = 3.18\ \mathrm{km\,s^{-1}} \;\Rightarrow\; t_R = \frac{300}{3.18} = 94.3\ \mathrm{s}.$$

$$t_S - t_P = 36.7\ \mathrm{s}.$$

Two things worth noticing. First, the S–P interval is proportional to distance:

$$t_S - t_P = \Delta\left(\frac{1}{v_s} - \frac{1}{v_p}\right) \;\Rightarrow\; \Delta = \frac{t_S-t_P}{1/v_s - 1/v_p}.$$

With $v_p/v_s = \sqrt3$ this reduces to the field rule $\Delta \approx 8.2\,(t_S-t_P)$ km with the interval in seconds — the calculation every seismologist does in their head. Second, S and Rayleigh arrive only 7.6 s apart here, so at local distances the record is crowded; at teleseismic distances the same speed difference opens the gap to many minutes and the phases separate cleanly.

**Example 2 (why you'd care — why the surface wave is the one that kills).** At 100 km from a rupture, body and surface waves happen to have equal amplitude. Compare them at 40 km (a nearby city) and at 4000 km (a distant observatory), ignoring attenuation.

Ratios relative to the crossover at $r_0 = 100$ km:

$$\frac{A_{\text{surf}}}{A_{\text{body}}} = \frac{(r/r_0)^{-1/2}}{(r/r_0)^{-1}} = \sqrt{\frac{r}{r_0}}.$$

At $r = 40$ km: $\sqrt{0.4} = 0.63$ — the body waves are half again as large, and near-field damage is dominated by direct S. At $r = 4000$ km: $\sqrt{40} = 6.3$ — the surface wave is six times bigger, which is why teleseismic records are dominated by a long surface-wave train.

*The engineering consequence is the part that matters.* Surface waves are not just large; they are **long-period**. A 20 s Rayleigh wave has a natural period close to that of a 20-storey building, and the resonance is destructive at distances where the short-period body waves have long since faded. This is the mechanism behind one of the most notorious cases in earthquake engineering: in 1985 a magnitude 8.0 earthquake off the Mexican coast did modest damage locally but destroyed mid-rise buildings in Mexico City, 350 km away, because the soft lake-bed sediments beneath the city amplified surface waves at almost exactly the period of the buildings.

*And the seismological consequence.* Because surface-wave amplitude decays so slowly, the surface-wave magnitude $M_s$ can be measured worldwide from a single large event — which is why it was the workhorse magnitude scale for decades, until [1.6](01-06-earthquake-sources-magnitude.md) explains why it saturates and had to be replaced.

## Watch out

- **You might think** S stands for "surface". **Actually** it stands for *secondary* — S waves are body waves, travelling through the interior exactly as P waves do. The surface waves are Love and Rayleigh. The confusion is common and expensive, because "S waves cannot pass through the outer core" is a statement about the deep interior, while "surface waves cannot reach the core at all" is a statement about geometry.
- **You might think** dispersion is a property of the wave. **Actually** it is a property of the *medium as sampled by that wave*. A Rayleigh wave in a genuinely uniform half-space is not dispersive at all — it runs at $0.9194\,v_s$ at every period. Observed dispersion is a direct readout of vertical layering, which is precisely why it is useful.
- **You might think** the first motion on a seismogram tells you the direction to the earthquake. **Actually** the first P motion is up or down depending on which quadrant of the source's radiation pattern you sit in — that is the whole content of a focal mechanism ([1.6](01-06-earthquake-sources-magnitude.md)). Direction comes from the *polarization* of the P arrival across three components, not from its sign.

## One-liner

> Two body waves because there are two moduli, two surface waves because there is a free surface — and the four arrive in a fixed order whose spacing measures the distance to the source.

## Problems

**P1 (🟢)** A station records P at 04:12:19 and S at 04:12:47, in crust with $v_p = 6.2\ \mathrm{km\,s^{-1}}$ and $v_p/v_s = \sqrt3$. (a) Find $v_s$. (b) Find the epicentral distance. (c) Predict when the Rayleigh wave arrives, taking $c_R = 0.92\,v_s$.

**P2 (🟡)** A Love wave is observed with phase velocity 3.9 km/s at 20 s period and 4.4 km/s at 80 s period. (a) What can you say about the shear velocity of the crustal layer and of the mantle beneath it? (b) Which period samples deeper, and why? (c) A second station shows *no* Love waves at all from the same earthquake, though Rayleigh waves are clear. Give the most likely structural explanation.

**P3 (🔴, bridges to [5.5](05-05-anisotropy-mantle-flow.md))** At a station 3000 km from an earthquake, the Rayleigh-wave energy at 100 s period arrives 750 s after origin time, and the energy at 25 s period arrives 882 s after origin time. (a) Compute the group velocity at each period. (b) State which period samples deeper and deduce the sign of the shear-velocity gradient with depth in the upper few hundred kilometres. (c) A third measurement at 40 s gives a group velocity *lower* than both — 3.25 km/s. Explain how that is possible without contradicting (b), and name the resulting arrival.

<details>
<summary>Solutions</summary>

**P1** (a) $v_s = 6.2/\sqrt3 = 3.58\ \mathrm{km\,s^{-1}}$.

(b) $t_S - t_P = 28$ s.
$$\Delta = \frac{t_S-t_P}{1/v_s - 1/v_p} = \frac{28}{1/3.58 - 1/6.2} = \frac{28}{0.2793 - 0.1613} = \frac{28}{0.1180} = 237\ \mathrm{km}.$$

(c) $c_R = 0.92\times3.58 = 3.29\ \mathrm{km\,s^{-1}}$, so the travel time is $237/3.29 = 72.0$ s. The P wave took $237/6.2 = 38.2$ s, so origin time was 04:12:19 minus 38.2 s = 04:11:40.8, and the Rayleigh wave arrives at

$$04{:}11{:}40.8 + 72.0\ \mathrm{s} = 04{:}12{:}52.8.$$

Only about 6 s after the S arrival — at this distance the two are nearly on top of each other.

**P2** (a) A Love wave's phase velocity is always bracketed by the layer and half-space shear speeds: $v_{s1} < c < v_{s2}$. So the crustal shear velocity is **below 3.9 km/s** and the mantle shear velocity is **above 4.4 km/s**. Both numbers are sensible: typical continental crust has $v_s \approx 3.5$ and uppermost mantle $v_s\approx4.5$ km/s.

(b) The 80 s wave. Amplitude decays within roughly a wavelength of depth, and wavelength is $cT$: at 20 s, $\lambda \approx 3.9\times20 = 78$ km; at 80 s, $\lambda\approx 4.4\times80 = 352$ km. The long-period wave has most of its energy in the fast mantle, which is why its velocity has risen toward $v_{s2}$.

(c) **No velocity contrast at that station** — most plausibly, the station sits where the crust is thin or absent, or where crustal and mantle shear velocities are too similar to trap SH energy. The classic case is an oceanic path with very thin crust. The diagnostic is exactly the asymmetry described: Rayleigh waves need only a free surface and are therefore always present, while Love waves need a waveguide and can genuinely be missing. **The absence of a Love wave is a measurement, not a failure of the instrument.**

**P3** (a) Group velocity is distance over travel time of the energy:

$$U(100\ \mathrm{s}) = \frac{3000}{750} = 4.00\ \mathrm{km\,s^{-1}}, \qquad U(25\ \mathrm{s}) = \frac{3000}{882} = 3.40\ \mathrm{km\,s^{-1}}.$$

(b) The 100 s wave samples deeper — its wavelength is roughly $4\times100 = 400$ km against $3.4\times25 = 85$ km — and it is faster. Deeper rock is faster, so **the shear velocity increases with depth** over this range on average.

(c) Group velocity is not phase velocity, and it is not required to be monotonic in period even when phase velocity is. From

$$U = c - \lambda\frac{dc}{d\lambda},$$

$U$ contains the *derivative* of the dispersion curve, so where $c(T)$ steepens, $U$ can dip well below both its short- and long-period values. The Earth's continental Rayleigh-wave group-velocity curve has exactly such a minimum near 20 to 40 s, of about 3.0 to 3.3 km/s, produced by the steep velocity rise across the crust–mantle boundary.

The consequence is observable and has a name. Energy at periods near the minimum all arrives at nearly the same time, because a stationary point of $U(T)$ means a whole band of periods shares one group velocity. That constructive pile-up is the **Airy phase** — the large, slowly-beating arrival at the end of a surface-wave train, and often the largest single amplitude on a distant seismogram.

There is no contradiction with (b): the phase velocity $c(T)$ *is* monotonically increasing here, faithfully reflecting velocity increasing with depth. It is only the group velocity that dips, and it dips because of how fast $c$ is changing, not because anything in the Earth is slow.

</details>

## Connections

- **Backward:** the two moduli of [1.1](01-01-the-elastic-earth.md) are exactly why there are two body waves and no more; the vanishing rigidity of a liquid is what will kill S waves in the outer core in [1.4](01-04-travel-time-curves-deep-earth.md).
- **Forward:** [1.3](01-03-wave-equation-ray-theory.md) derives the speeds quoted here from the elastic wave equation and puts the rays on curved paths. Surface-wave dispersion becomes a tomographic tool in [1.5](01-05-seismic-tomography.md), and the SH/SV distinction introduced here is what makes shear-wave splitting a flow indicator in [5.5](05-05-anisotropy-mantle-flow.md). The very longest-period limit of a surface wave — one that wraps the whole planet and interferes with itself — is a free oscillation, [5.1](05-01-free-oscillations-earth-density.md).
- **Sideways:** dispersion, phase and group velocity are the same mathematics as in [`waves-optics`](../../waves-optics/syllabus.md) and in the dispersive water waves of [fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md) — a Rayleigh wave and an ocean swell are both surface-trapped, both dispersive, and both retrograde-elliptical at the top, differing mainly in which restoring force does the work. The engineering consequence of long-period surface waves — resonance with tall structures — is the hazard side of [`geology` 2.7](../../geology/lessons/02-07-earthquakes-seismic-hazard.md).
