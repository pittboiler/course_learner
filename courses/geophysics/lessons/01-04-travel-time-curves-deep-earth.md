# Geophysics · Lesson 1.4: Travel-time curves and the deep Earth

> ⏱ ~15 min · Module 1: Seismology & Earth structure · Builds on: [1.3](01-03-wave-equation-ray-theory.md), [1.2](01-02-seismic-wave-zoo.md) · Unlocks: [1.5](01-05-seismic-tomography.md), [5.1](05-01-free-oscillations-earth-density.md)

## Why this matters

Between 1900 and 1936 a handful of people, using nothing but arrival times written on smoked paper, worked out that the Earth has a crust, a mantle, a liquid core and a solid inner core — and got the depths right to within a few percent. No sample of any of it has ever been recovered. This lesson is how they did it.

The method is the most successful inversion in the history of the Earth sciences, and it has a hard limit that is just as important as its successes: **travel times can only see structure that produces turning rays.** Understanding exactly what that excludes is what makes [5.1](05-01-free-oscillations-earth-density.md) necessary.

## The idea

**Plot arrival time against distance and the slope hands you the ray parameter.** [1.3](01-03-wave-equation-ray-theory.md) showed $p = dT/d\Delta$. So a single curve $T(\Delta)$, assembled from many earthquakes recorded at many stations, encodes the ray parameter of every ray — and $p$ fixes the depth each ray bottomed at, through $p = r_t/v(r_t)$.

**Turn the curve inside out and you get velocity versus depth.** The formal machinery is the Herglotz–Wiechert inversion, and its logic is disarmingly simple: rays arriving at short distance bottomed shallow, rays arriving further out bottomed deeper, and the accumulated slope information can be integrated to give the depth at which the velocity reaches any given value. **The travel-time curve is a velocity-depth profile in disguise.**

**Kinks in the curve are boundaries in the Earth.** A sudden velocity increase makes rays pile up: over a range of distances you receive three arrivals instead of one — a **triplication**. Mohorovičić found one in 1909 in a Croatian earthquake and named the crust–mantle boundary. The 410 and 660 km discontinuities announce themselves the same way, and [5.2](05-02-mineral-physics-transition-zone.md) explains what they are.

**A velocity *decrease* does the opposite, and it is invisible.** If velocity falls with depth, rays are refracted downward instead of turning, so **no ray bottoms inside a low-velocity zone**. The zone contributes nothing to the travel-time curve except a gap — a range of distances with no arrivals, and a jump beyond it. You can detect that something is there, but travel times alone cannot tell you what.

**The biggest such gap is the core.** At 2891 km depth the P velocity crashes from about 13.7 to about 8.0 km/s as the mantle gives way to liquid iron. Rays that graze the core emerge at 103 degrees; the very next ray in is bent so sharply downward that it does not come back until 143 degrees. Between those two numbers, no direct P arrives anywhere on Earth. Beno Gutenberg measured that shadow in 1913 and got the core's depth right to within about 15 km.

**And a faint arrival inside the shadow gave us the inner core.** In 1936 Inge Lehmann noticed weak P energy arriving where the shadow should have been empty, and showed that it required a *solid* inner core to reflect and refract energy back into the gap. One anomalous phase, one new layer of the planet.

## The formal version

**Ray parameter from the curve.**

$$p = \frac{dT}{d\Delta},$$

with $\Delta$ in radians and $p$ in s/rad. Convert from s/degree by multiplying by $180/\pi = 57.30$. At the turning radius,

$$p = \frac{r_t}{v(r_t)}.$$

**Herglotz–Wiechert inversion.** For a spherically symmetric Earth in which $r/v$ increases monotonically outward, a ray with parameter $p_1$ arriving at distance $\Delta_1$ bottoms at radius $r_1$ given by

$$\ln\!\left(\frac{r_0}{r_1}\right) = \frac{1}{\pi}\int_0^{\Delta_1}\cosh^{-1}\!\left(\frac{p(\Delta)}{p_1}\right)d\Delta,$$

with $r_0$ the Earth's radius. *In words: integrate the observed ray parameters out to the distance of interest, and the answer tells you how deep that last ray went.* Then $v(r_1) = r_1/p_1$, and sweeping $\Delta_1$ traces out the whole velocity-depth profile.

Two things about this formula deserve emphasis. First, **it needs no assumed model** — it is a genuine inversion, not a fit. Second, its one hypothesis is the monotonicity of $r/v$, and that hypothesis is exactly what a low-velocity zone violates.

**Travel-time branches and triplications.** Where velocity jumps at a discontinuity, the $T(\Delta)$ curve develops a reversed segment and three branches overlap. The signature in the data is:

- a **forward branch** from rays turning above the discontinuity,
- a **backward (retrograde) branch** from rays turning just below it, arriving at *decreasing* distance as $p$ decreases,
- a **second forward branch** from rays well below it.

*In words: a velocity jump makes a fold in the travel-time curve, and inside the fold you get three arrivals for one earthquake.*

**Phase nomenclature.** Capital letters name legs of the path:

| Symbol | Leg |
|---|---|
| P, S | compressional / shear leg in the mantle |
| c | reflection off the core–mantle boundary (e.g. PcP) |
| K | compressional leg through the **outer core** (e.g. PKP) |
| I | compressional leg through the **inner core** (e.g. PKIKP) |
| i | reflection off the inner-core boundary (PKiKP) |
| n | head wave along the Moho (Pn) |

So **PKIKP** is: down through the mantle, through the outer core, through the inner core, and back out the same way.

**Key depths, as read this way.**

| Boundary | Depth | Evidence |
|---|---|---|
| Moho | 5–70 km | Pn triplication (Mohorovičić, 1909) |
| 410 and 660 discontinuities | 410, 660 km | upper-mantle triplications |
| Core–mantle boundary | 2891 km | P shadow 103°–143°, no S beyond ~103° (Gutenberg, 1913) |
| Inner-core boundary | 5150 km | PKIKP arrivals inside the shadow (Lehmann, 1936) |

## Picture

![Left: a cross-section of the Earth as a circle with a dashed inner circle marking the outer core where velocity drops to 8 kilometres per second. A source sits at the top. Three blue rays leave it and curve back to the surface at increasing distances, the deepest just grazing the core and emerging at 103 degrees. A coral ray leaves more steeply, kinks sharply downward on entering the core, crosses it, and emerges past 143 degrees, labelled PKP. A thick grey arc between 103 and 143 degrees marks the shadow zone. Right: the travel-time curve, time against epicentral distance, showing the P branch rising and flattening and terminating at 103 degrees, a shaded band from 103 to 143 degrees labelled no direct P, and a separate coral PKP branch beginning at 143 degrees at much greater travel time. A note says the slope of the curve is the ray parameter and fixes the depth each ray bottomed at](assets/01-04-fig1.svg)

The shadow is not an absence of data. It is the single most informative feature on the plot.

## Worked examples

**Example 1 (mechanical — from a slope to a depth).** A teleseismic P arrival at $\Delta = 40^\circ$ has a local travel-time-curve slope of $7.8\ \mathrm{s\,deg^{-1}}$. Find the ray parameter in s/rad, and the depth at which this ray bottomed, given that the mantle velocity at the turning radius is $11.0\ \mathrm{km\,s^{-1}}$.

$$p = 7.8\ \mathrm{s\,deg^{-1}} \times \frac{180}{\pi} = 7.8\times57.30 = 447\ \mathrm{s\,rad^{-1}}.$$

At the turning point $p = r_t/v(r_t)$, so

$$r_t = p\,v(r_t) = 447\times11.0 = 4917\ \mathrm{km},$$

$$\text{depth} = 6371 - 4917 = 1454\ \mathrm{km}.$$

A ray recorded 40 degrees away — roughly London to Cairo — bottomed 1450 km down, halfway to the core. Note how little information was needed: one slope and one velocity.

**Example 2 (why you'd care — sizing the core from the shadow).** Use the shadow-zone geometry to estimate the core radius, with mantle P velocity $13.7\ \mathrm{km\,s^{-1}}$ just above the boundary.

The last ray to return is the one that *grazes* the core: at its deepest it is horizontal, right at the core–mantle boundary, so its turning radius **is** the core radius, and

$$p_{\text{graze}} = \frac{r_c}{v_{\text{CMB}}}.$$

Measure the slope of the travel-time curve at the end of the P branch, where the shadow begins: observation gives about $4.4\ \mathrm{s\,deg^{-1}}$ there, so

$$p_{\text{graze}} = 4.4\times57.30 = 252\ \mathrm{s\,rad^{-1}}, \qquad r_c = 252\times13.7 = 3452\ \mathrm{km}.$$

Against the modern value of 3480 km, that is an error of under one percent — from the slope of a curve.

*Now the other half, which is the physically interesting part: why is the shadow 40 degrees wide?* Consider the first ray to enter the core, arriving at incidence $i_1$ just under 90 degrees. Snell's law across the boundary gives

$$\sin i_2 = \frac{v_{\text{core}}}{v_{\text{mantle}}}\sin i_1 = \frac{8.0}{13.7}\times1.00 = 0.584 \;\Rightarrow\; i_2 = 35.7^\circ.$$

**The refracted ray leaves the boundary at only 36 degrees from the radial direction — it dives almost straight for the centre.** A ray that would have emerged at 104 degrees is instead thrown deep into the core and does not resurface until well past 143 degrees. That single Snell calculation is the entire explanation of the shadow: not absorption, not blocking, but a velocity drop so severe that the refraction overshoots.

*Two footnotes that matter.* The shadow is not perfectly dark — diffraction around the core edge (the phase Pdiff) leaks low-frequency energy into it, which is precisely where ray theory's high-frequency assumption breaks down ([1.3](01-03-wave-equation-ray-theory.md)). And **S waves show no equivalent to PKP at all**: nothing shear-polarized crosses the outer core, because $\mu = 0$ there. The P shadow is partial and geometric; the S shadow beyond about 103 degrees is total and tells you the core is liquid.

## Watch out

- **You might think** the shadow zone means seismic energy is absorbed by the core. **Actually** it is refracted, not absorbed. All the energy that entered is still travelling; it simply emerges somewhere else, as PKP. Energy is conserved and the "missing" arrivals reappear beyond 143 degrees, often as several closely spaced branches.
- **You might think** a low-velocity zone shows up as slow arrivals. **Actually** it shows up as *no* arrivals — a distance range where the direct phase is missing, followed by a step in the curve. Since no ray bottoms in it, no arrival carries its velocity, and travel-time data can bound its depth extent but cannot resolve its interior. Recovering what is inside needs surface waves ([1.2](01-02-seismic-wave-zoo.md)), free oscillations ([5.1](05-01-free-oscillations-earth-density.md)) or attenuation ([5.3](05-03-attenuation-anelasticity.md)).
- **You might think** the travel-time curve gives you the Earth's density. **Actually** it gives velocity, and velocity depends on *both* moduli and density: $v_p = \sqrt{(K+\tfrac43\mu)/\rho}$. Two unknowns per depth, one equation. **Nothing in this lesson determines density**, which is why the whole of [5.1](05-01-free-oscillations-earth-density.md) exists, and why claims that "seismology showed the core is iron" are shorthand for a much longer argument involving mass, moment of inertia and mineral physics.

## One-liner

> The slope of the travel-time curve is the ray parameter, the ray parameter is a turning depth, and the places where the curve kinks or breaks are the places where the Earth changes.

## Problems

**P1 (🟢)** A P arrival at $\Delta = 60^\circ$ has travel-time-curve slope $6.2\ \mathrm{s\,deg^{-1}}$, and the mantle velocity at its turning radius is $12.4\ \mathrm{km\,s^{-1}}$. (a) Convert the slope to s/rad. (b) Find the turning radius and depth. (c) Without recomputing, say whether a ray arriving at 80 degrees bottomed shallower or deeper, and why.

**P2 (🟡)** A station at $\Delta = 120^\circ$ from a large earthquake records no direct P, but does record a clear arrival 21 minutes after origin time. (a) Name the most likely phase and describe its path. (b) At $\Delta = 120^\circ$ the station also records no S arrival at all, at any time in the first hour. What does that establish about the outer core, and why is it a stronger statement than the P shadow? (c) A second station at $\Delta = 115^\circ$ records a weak, high-frequency P-like pulse. Give two candidate explanations and say what would distinguish them.

**P3 (🔴, bridges to [5.2](05-02-mineral-physics-transition-zone.md))** A mantle velocity profile rises smoothly from 8.1 km/s at the Moho, then jumps discontinuously from 9.0 to 10.2 km/s at 410 km depth, then continues smoothly. (a) Sketch, in words, the shape of the $T(\Delta)$ curve near the distance range where rays bottom close to 410 km, and name the feature. (b) Explain why three arrivals are received at some distances, and identify which of the three has travelled deepest. (c) Now suppose instead that velocity *drops* from 9.0 to 8.4 km/s at 410 km before resuming its rise. Describe how the observations change, and state precisely what a travel-time dataset could and could not determine about the low-velocity layer.

<details>
<summary>Solutions</summary>

**P1** (a) $$p = 6.2\times57.30 = 355\ \mathrm{s\,rad^{-1}}.$$

(b) $$r_t = p\,v(r_t) = 355\times12.4 = 4402\ \mathrm{km}, \qquad \text{depth} = 6371-4402 = 1969\ \mathrm{km}.$$

(c) **Deeper.** Travel-time curves for the Earth are concave down: the slope $p = dT/d\Delta$ *decreases* with distance. A smaller $p$ means a smaller $r_t/v(r_t)$, and since $r/v$ increases outward in the mantle, a smaller value of it corresponds to a smaller radius — a deeper turning point. Which is the general principle from [1.3](01-03-wave-equation-ray-theory.md): record further away to see deeper.

**P2** (a) **PKP** — down through the mantle, refracted steeply into the liquid outer core, across it, refracted back out at the core–mantle boundary, and up through the mantle to the station. (At 120 degrees this is inside the classical shadow, so strictly one expects PKP branches to become strong only past about 143 degrees; a 21-minute arrival at 120 degrees is most likely PKiKP, reflected off the inner-core boundary, or diffracted Pdiff. Naming PKP-family core phases and describing the core leg is the substance of the answer.)

(b) It establishes that **the outer core is liquid**. S waves require $\mu \ne 0$ ([1.1](01-01-the-elastic-earth.md)); a liquid has $\mu = 0$ exactly, so no shear wave can cross. This is stronger than the P shadow for two reasons. First, the P shadow is a *geometric* effect — a velocity drop of the right size and sharpness would produce it whether the core were liquid or merely very slow — whereas the total absence of S is a statement about a material property with no alternative explanation. Second, the S shadow is not a band but a half-space: **nothing** shear-polarized arrives beyond about 103 degrees by a direct path, at any distance, ever. One observation, one enormous conclusion.

(c) Two candidates:
- **Pdiff** — P energy diffracted around the curved core–mantle boundary into the geometric shadow. Diffraction is strongly frequency-dependent, so Pdiff is *low*-frequency and emergent.
- **PKiKP** — P reflected off the inner-core boundary, which does arrive inside the shadow and is *high*-frequency and impulsive.

The stated observation — weak but **high-frequency** — points to PKiKP. The distinguishing test is exactly the frequency content, and secondarily the move-out: measuring the arrival at several distances gives $dT/d\Delta$, and the two phases have very different slopes. Historically this is the discrimination Lehmann made, and it is how the inner core was found.

**P3** (a) The curve develops a **triplication**: a fold with three overlapping branches, appearing over a limited range of distances, with the middle branch running *backwards* (arriving at decreasing distance as ray parameter decreases). Away from the fold the curve is smooth and single-valued.

(b) Three families of rays reach the same distance by different routes:
1. rays turning **above** 410 km, in the slower material;
2. rays reflected or turning **just below** the jump — these are on the retrograde branch, and are the ones that fold the curve;
3. rays turning **well below** 410 km, in fast material, which overtake and eventually dominate.

The deepest-travelled of the three is the last, on the far forward branch, and it is also the *earliest* arrival at large distance, because its extra path length is more than repaid by the higher velocity it enjoyed.

The reason a jump *must* produce this fold is worth stating: the turning depth is a continuous function of $p$ within each smooth segment, but the velocity jump means no ray turns in the depth interval spanned by the jump. Turning depth therefore skips a range, and the corresponding arrivals skip with it — producing overlap rather than a gap, because the deeper rays are fast enough to catch up.

(c) With a velocity **drop**, everything reverses. No ray turns anywhere in the low-velocity layer, nor for some depth below it — rays are bent downward on entry and only resume turning once velocity has climbed back above 9.0 km/s. The observations become:

- a **gap** in distance with no direct arrivals, rather than an overlap with three;
- a **step** in the travel-time curve at the far edge of the gap, where arrivals resume abruptly;
- possibly a weak reflection off the top of the layer, since the velocity drop is an impedance contrast.

What a travel-time dataset **can** determine: the depth of the top of the layer (from where turning rays cease), and an integral constraint on the total delay accumulated by rays that pass through it — enough to bound the product of thickness and velocity deficit.

What it **cannot** determine: the velocity *inside* the layer, its thickness, or its lower boundary independently — no ray bottoms there, so no arrival carries that information, and infinitely many layer models fit the same gap and the same step. This is not a resolution limitation to be beaten with better instruments; it is a **null space** in the strict sense of [6.1](06-01-the-linear-inverse-problem.md), and it is why the asthenospheric low-velocity zone was contentious for decades and was eventually pinned down by surface waves and free oscillations, which do not rely on turning rays at all.

</details>

## Flashback

**From Lesson 1.3 (The wave equation and ray theory):** A crustal refraction line runs over a layer with $v(z) = 5.5 + 0.020\,z$ km/s ($z$ in km). (a) Find the ray parameter of a ray that bottoms at 40 km depth. (b) Find its take-off angle at the surface. (c) Find the source–receiver range.

<details>
<summary>Solution</summary>

(a) At the turning depth the ray is horizontal and $p = 1/v(z_t)$:

$$v(40) = 5.5 + 0.020\times40 = 6.30\ \mathrm{km\,s^{-1}}, \qquad p = \frac{1}{6.30} = 0.1587\ \mathrm{s\,km^{-1}}.$$

(b) At the surface $v = 5.5$ km/s, so

$$\sin i_0 = p\,v_0 = 0.1587\times5.5 = 0.873 \;\Rightarrow\; i_0 = 60.8^\circ \text{ from the vertical}.$$

(c) The ray is a circular arc of radius

$$R = \frac{1}{pk} = \frac{1}{0.1587\times0.020} = 315.1\ \mathrm{km},$$

centred at height $v_0/k = 5.5/0.020 = 275$ km above the surface. Half-range:

$$\sqrt{R^2 - (v_0/k)^2} = \sqrt{315.1^2 - 275^2} = \sqrt{99{,}288 - 75{,}625} = \sqrt{23{,}663} = 153.8\ \mathrm{km},$$

$$x = 2\times153.8 = 308\ \mathrm{km}.$$

Roughly eight times the turning depth — the same order as every other case in this course, and the reason a crustal refraction line must be hundreds of kilometres long to see the Moho.

</details>

## Connections

- **Backward:** the conserved ray parameter and the turning condition are [1.3](01-03-wave-equation-ray-theory.md)'s; the vanishing rigidity of a liquid, which kills S at the core, is [1.1](01-01-the-elastic-earth.md)'s.
- **Forward:** [1.5](01-05-seismic-tomography.md) drops spherical symmetry and inverts the *residuals* from this curve for three-dimensional structure. The discontinuities located here are identified as mineral phase changes in [5.2](05-02-mineral-physics-transition-zone.md), the core is assembled in [5.4](05-04-the-core.md), and the density that this lesson conspicuously cannot supply arrives in [5.1](05-01-free-oscillations-earth-density.md). The formal statement of what a dataset cannot see is [6.1](06-01-the-linear-inverse-problem.md).
- **Sideways:** [`geology` 5.1](../../geology/lessons/05-01-earths-internal-structure.md) runs this same evidence chain qualitatively, and explicitly hands the Herglotz–Wiechert step here; it also supplies the meteoritic and moment-of-inertia arguments that constrain what the layers are *made of*, which travel times alone never touch.
