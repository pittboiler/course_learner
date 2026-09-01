# Geophysics · Lesson 1.6: Earthquake sources and magnitude

> ⏱ ~15 min · Module 1: Seismology & Earth structure · Builds on: [1.1](01-01-the-elastic-earth.md), [1.2](01-02-seismic-wave-zoo.md) · Unlocks: [1.7](01-07-rupture-physics-source-scaling.md), [3.5](03-05-plate-kinematics-euler-poles.md)

## Why this matters

So far the earthquake has been a convenient bang — a source of waves and nothing more. Now it becomes the object of study. An earthquake is a patch of fault that slipped, and everything you want to know about it (how big, on what plane, in what direction, releasing how much energy) is encoded in the waves it radiated.

There is also a piece of public-facing physics here that is routinely mangled. "Magnitude 7" is a precisely defined quantity with a physical meaning, the scale is logarithmic in a specific way, and the scale most people have heard of — Richter's — has not been used for large earthquakes in decades, for a reason worth understanding.

## The idea

**An earthquake is elastic rebound.** Harry Fielding Reid, surveying across the San Andreas after 1906, found the ground on either side had been slowly bending for decades and then snapped back. Plate motion loads elastic strain into rock; friction holds a fault locked; when the stress exceeds what friction can hold, the fault slips and the rock springs back to its unstrained shape. **The earthquake is the release, not the loading** — the energy was put in over centuries and comes out in seconds.

**The right measure of size is the seismic moment, and it is a product of three things.** How much fault area slipped, how far it slipped, and how stiff the rock is. Nothing else. A small slip on a huge fault and a large slip on a small fault can be the same earthquake as far as the far field is concerned, and the moment is what they share.

**A slipping fault radiates as a double couple.** The intuition: slip does not push the surroundings outward like an explosion — it shears them. Represent that with two pairs of opposing forces, and the resulting far-field P-wave radiation has four quadrants, alternately compressional and dilatational, separated by two perpendicular **nodal planes** across which the first motion flips sign.

**Which produces the beachball, and one irreducible ambiguity.** Plot, for each station, whether the first P motion was up or down, projected onto a sphere around the source. The pattern separates into shaded (up-first) and unshaded (down-first) quadrants divided by two great circles. One of those circles is the fault; the other, perpendicular to it, is the **auxiliary plane** — and slip on it would produce *exactly* the same radiation. **Seismograms alone can never choose between them.** Aftershock distributions, surface ruptures or known tectonics settle it.

**Magnitude scales measure a wiggle; moment magnitude measures the fault.** Richter's original $M_L$, and its descendants $m_b$ and $M_s$, are logarithms of a wave amplitude at a specified period. They work well over a limited range and then **saturate**: a 20-second surface wave simply cannot register the difference between a rupture lasting 100 s and one lasting 300 s, so $M_s$ stops growing near 8.3 while the earthquakes keep getting bigger. Moment magnitude $M_w$ is derived from $M_0$ and never saturates, which is why every large modern earthquake is quoted in it.

## The formal version

**Seismic moment.**

$$\boxed{\ M_0 = \mu\,A\,\bar d\ }$$

with $\mu$ the shear modulus of the rock (about 30 GPa in the crust, 70 GPa in the upper mantle), $A$ the ruptured area in m², and $\bar d$ the average slip in metres. Units: N·m. *In words: moment is stiffness times how much fault moved times how far it moved.*

**Moment magnitude.** For $M_0$ in N·m,

$$M_w = \frac{2}{3}\left(\log_{10}M_0 - 9.1\right) = \frac23\log_{10}M_0 - 6.07.$$

*In words: every increase of one in $M_w$ means the moment went up by a factor of $10^{1.5} = 31.6$.* The awkward constant exists solely to make $M_w$ agree with the older scales in the range where those worked, so that a century of catalogues remains usable.

**Consequences of the factor $3/2$.** Per unit of magnitude:

| Quantity | Factor per magnitude unit |
|---|---|
| ground-motion amplitude | $\times 10$ |
| seismic moment | $\times 31.6$ |
| radiated energy | $\times 31.6$ |

*So a magnitude 8 is not twice a magnitude 4 — it is a thousand times the amplitude and about thirty million times the energy.*

**Radiated energy.** Only a small fraction of the released strain energy leaves as seismic waves; the rest goes into friction and fracture. A workable relation is

$$E_s \approx \frac{\Delta\sigma}{2\mu}M_0 \approx 5\times10^{-5}M_0,$$

using a typical stress drop $\Delta\sigma \approx 3$ MPa ([1.7](01-07-rupture-physics-source-scaling.md)). Equivalently $\log_{10}E_s \approx 1.5M_w + 4.8$ with $E_s$ in joules.

**The moment tensor.** The complete linear description of a point source is a symmetric $3\times3$ tensor $M_{ij}$, whose components give the strengths of nine force couples. Its decomposition is standard:

- **isotropic** part ($\operatorname{tr}M \ne 0$): a volume change — explosions, some volcanic events;
- **double-couple** part: shear slip on a plane — ordinary earthquakes;
- **compensated linear vector dipole** (CLVD): the leftover, often indicating a complex or non-planar source.

*In words: the moment tensor asks "what pattern of forces at a point would radiate what we observed?", and shear faulting turns out to be a very specific answer.* A large isotropic component is how underground nuclear tests are distinguished from earthquakes — a discrimination with obvious consequences.

**Fault geometry.** Three angles specify the plane and the slip direction:

| Angle | Meaning | Range |
|---|---|---|
| strike $\phi$ | compass direction of the fault's horizontal trace | 0°–360° |
| dip $\delta$ | angle of the plane below horizontal | 0°–90° |
| rake $\lambda$ | direction of slip within the plane, from the strike direction | −180°–180° |

Rake near 0° or 180° is strike-slip; +90° is pure reverse (thrust); −90° is pure normal.

**Magnitude scales and where they die.**

| Scale | Measures | Saturates near |
|---|---|---|
| $M_L$ (Richter) | peak amplitude on a specific short-period instrument | 6.5–7 |
| $m_b$ | P-wave amplitude at ~1 s | 6.5 |
| $M_s$ | surface-wave amplitude at ~20 s | 8.3 |
| $M_w$ | seismic moment | does not saturate |

## Picture

![Left: the double couple, drawn as two coral horizontal arrows pointing in opposite directions above and below a solid horizontal line, and two blue vertical arrows pointing in opposite directions either side of a dashed vertical line, with a note that slip on the solid plane and slip on the dashed plane produce identical far-field radiation, so seismograms cannot tell them apart but aftershocks usually can. Centre: a beachball diagram, a circle divided into four quadrants by two perpendicular lines, with opposite quadrants shaded blue and labelled up and the other two unshaded and labelled down, with a note that shading means compression arrived first, that the two lines are the fault plane and its auxiliary, and that this pattern is strike-slip. Right: a graph of magnitude against true size measured by log moment, showing a straight blue line labelled moment magnitude and a coral curve labelled surface-wave magnitude that follows it at small sizes then flattens near 8.3, with a note that a 20-second wave cannot see a rupture lasting 200 seconds so the surface-wave scale stops growing while the earthquake keeps going](assets/01-06-fig1.svg)

The beachball is a map of first motions, not a picture of the fault. Half of the information you want — which plane is real — is not in it.

## Worked examples

**Example 1 (mechanical — sizing a rupture).** A fault rupture 100 km long and 20 km wide slips an average of 3.0 m in crust with $\mu = 30$ GPa. Find $M_0$, $M_w$ and the radiated energy.

$$A = 1.0\times10^{5}\times2.0\times10^{4} = 2.0\times10^{9}\ \mathrm{m^2}.$$

$$M_0 = \mu A\bar d = 3.0\times10^{10}\times2.0\times10^{9}\times3.0 = 1.8\times10^{20}\ \mathrm{N\,m}.$$

$$M_w = \frac23\left(\log_{10}(1.8\times10^{20}) - 9.1\right) = \frac23(20.255 - 9.1) = \frac23(11.155) = 7.44.$$

$$E_s \approx 5\times10^{-5}\times1.8\times10^{20} = 9.0\times10^{15}\ \mathrm{J}.$$

For scale, that is about 2 megatons of TNT equivalent — and it is the *radiated* energy only; the total released is larger, most of it lost to friction on the fault.

**Example 2 (why you'd care — the scale that broke).** The 1960 Chile earthquake and the 2011 Tohoku earthquake were both assigned $M_s \approx 8.3$ at the time by surface-wave methods. Their moments are $2.4\times10^{23}$ and $3.9\times10^{22}$ N·m. Compute $M_w$ for each and diagnose what went wrong.

$$M_w^{\text{Chile}} = \frac23(23.380 - 9.1) = \frac23(14.280) = 9.52.$$

$$M_w^{\text{Tohoku}} = \frac23(22.591 - 9.1) = \frac23(13.491) = 8.99.$$

**The moments differ by a factor of six; the surface-wave magnitudes were indistinguishable.** Chile 1960 remains the largest earthquake ever instrumentally recorded, and $M_s$ could not say so.

*Why.* $M_s$ is measured on waves of about 20 s period, so it responds to whatever the source did within a ~20 s window. The Chile rupture was roughly 1000 km long; at a rupture velocity of about 3 km/s it took over 300 s to complete. **The 20 s wave saw only a small fraction of the earthquake and reported on that fraction faithfully.** Extend the same reasoning and you get the general rule: a magnitude scale saturates once the source duration exceeds the period at which the scale is measured. That is why $m_b$ at 1 s dies first, $M_s$ at 20 s dies later, and $M_w$ — computed from the zero-frequency limit of the displacement spectrum, which by definition contains the whole source — never dies at all.

*The practical consequence is not academic.* Tsunami warning depends on knowing the moment within minutes. A system anchored to $M_s$ would have called Chile 1960 and Tohoku 2011 the same size, and the tsunami risk differs by nearly an order of magnitude. Modern warning centres run rapid moment-tensor inversions and, for the very largest events, use long-period and GNSS data ([2.7](02-07-space-geodesy.md)) precisely because those do not saturate.

## Watch out

- **You might think** the beachball shows the fault plane. **Actually** it shows two candidate planes and no way to choose. This is not a resolution problem; the two are *mathematically* identical sources in the far field. Aftershock alignment, surface rupture, or knowing the regional tectonics breaks the tie.
- **You might think** magnitude measures energy directly. **Actually** it is defined from moment, and the moment-to-energy conversion involves the stress drop, which varies by an order of magnitude between earthquakes. Two events of identical $M_w$ can radiate quite different energies — and it is the energetic one that damages buildings. Distinguishing them is what $M_w$ cannot do and [1.7](01-07-rupture-physics-source-scaling.md) can.
- **You might think** the Richter scale is what is quoted on the news. **Actually** $M_L$ has not been used for significant earthquakes since the 1970s; the number quoted is $M_w$. They agree by construction around magnitude 5 to 6, which is why the substitution went unnoticed by everyone outside the field.

## One-liner

> An earthquake's true size is stiffness times fault area times slip; every scale that measures a wave amplitude instead eventually saturates, and moment magnitude exists to stop that happening.

## Problems

**P1 (🟢)** A rupture 30 km long and 12 km wide slips 1.2 m in crust with $\mu = 32$ GPa. (a) Compute $M_0$. (b) Compute $M_w$. (c) How many such earthquakes would it take to release the moment of a single $M_w\,8.0$?

**P2 (🟡)** Two earthquakes are reported, one at $M_w\,6.0$ and one at $M_w\,7.5$. (a) By what factor do their moments differ? (b) By what factor do their ground-motion amplitudes differ? (c) The smaller one ruptured a fault 10 km × 8 km with 0.35 m of slip in $\mu = 30$ GPa rock — verify its magnitude. (d) If the larger event had the same average slip, how large an area must it have ruptured, and comment on whether that is geometrically plausible for continental crust.

**P3 (🔴, bridges to [3.5](03-05-plate-kinematics-euler-poles.md))** A transform plate boundary 600 km long is locked to a depth of 15 km and the two plates move past one another at 35 mm/yr. (a) Compute the **moment deficit accumulated per year** along the whole boundary, taking $\mu = 30$ GPa. (b) If all of it is released in $M_w\,7.8$ earthquakes, compute the moment of one such event and hence the average recurrence interval. (c) Suppose careful geodesy shows that only 60 percent of the plate motion is accumulating as elastic strain, the rest being taken up by aseismic creep. Recompute the recurrence interval and state which direction this pushes the hazard estimate. (d) Name one physical reason the answer to (b) is an underestimate of the true recurrence interval even before considering creep.

<details>
<summary>Solutions</summary>

**P1** (a) $$A = 3.0\times10^{4}\times1.2\times10^{4} = 3.6\times10^{8}\ \mathrm{m^2}.$$
$$M_0 = 3.2\times10^{10}\times3.6\times10^{8}\times1.2 = 1.382\times10^{19}\ \mathrm{N\,m}.$$

(b) $$M_w = \frac23\left(\log_{10}(1.382\times10^{19}) - 9.1\right) = \frac23(19.141-9.1) = \frac23(10.041) = 6.69.$$

(c) An $M_w\,8.0$ has

$$\log_{10}M_0 = 1.5\times8.0 + 9.1 = 21.1 \;\Rightarrow\; M_0 = 1.26\times10^{21}\ \mathrm{N\,m}.$$

$$N = \frac{1.26\times10^{21}}{1.382\times10^{19}} = 91.$$

About ninety. This is the arithmetic behind a remark that sounds glib but is exactly right: **the largest earthquakes dominate the moment budget so completely that everything else is rounding.** A region's entire century of magnitude-6 events can be undone by one magnitude 8.

**P2** (a) $$10^{1.5\times1.5} = 10^{2.25} = 178.$$

(b) Amplitude goes as $10^{\Delta M}$, so $10^{1.5} = 31.6$.

(c) $$A = 1.0\times10^{4}\times8.0\times10^{3} = 8.0\times10^{7}\ \mathrm{m^2}, \qquad M_0 = 3.0\times10^{10}\times8.0\times10^{7}\times0.35 = 8.4\times10^{17}\ \mathrm{N\,m}.$$
$$M_w = \frac23(17.924-9.1) = \frac23(8.824) = 5.88.$$
Close to the stated 6.0 — the small shortfall is well within the natural scatter of slip and rigidity, and the discrepancy of 0.12 magnitude units corresponds to a moment factor of only 1.5.

(d) Required moment for $M_w\,7.5$: $\log_{10}M_0 = 1.5\times7.5+9.1 = 20.35$, so $M_0 = 2.24\times10^{20}$ N·m. With the same $\bar d = 0.35$ m and $\mu = 30$ GPa:

$$A = \frac{M_0}{\mu\bar d} = \frac{2.24\times10^{20}}{3.0\times10^{10}\times0.35} = \frac{2.24\times10^{20}}{1.05\times10^{10}} = 2.13\times10^{10}\ \mathrm{m^2} = 21{,}300\ \mathrm{km^2}.$$

**Not plausible with that slip.** Continental seismogenic crust is only about 15 to 20 km thick, so a fault of this area would need to be roughly 1100 to 1400 km long — longer than the San Andreas. The resolution is that slip does not stay constant as earthquakes get bigger: real ruptures obey approximate **self-similarity**, with $\bar d$ growing in proportion to rupture length, so an $M_w\,7.5$ has several metres of slip over a few hundred kilometres rather than 0.35 m over a thousand. That scaling is the subject of [1.7](01-07-rupture-physics-source-scaling.md), and this problem is the observation that forces it.

**P3** (a) The boundary accumulates slip deficit at $v = 35\ \mathrm{mm\,yr^{-1}} = 0.035\ \mathrm{m\,yr^{-1}}$ over the locked area

$$A = 6.0\times10^{5}\times1.5\times10^{4} = 9.0\times10^{9}\ \mathrm{m^2}.$$

$$\dot M_0 = \mu A v = 3.0\times10^{10}\times9.0\times10^{9}\times0.035 = 9.45\times10^{18}\ \mathrm{N\,m\,yr^{-1}}.$$

(b) $$\log_{10}M_0 = 1.5\times7.8+9.1 = 20.8 \;\Rightarrow\; M_0 = 6.31\times10^{20}\ \mathrm{N\,m}.$$
$$T = \frac{6.31\times10^{20}}{9.45\times10^{18}} = 67\ \mathrm{yr}.$$

(c) With only 60 percent of the motion stored elastically, $\dot M_0 = 0.60\times9.45\times10^{18} = 5.67\times10^{18}$ N·m/yr, and

$$T = \frac{6.31\times10^{20}}{5.67\times10^{18}} = 111\ \mathrm{yr}.$$

Longer recurrence, so **lower hazard** — fewer large events per century on this boundary. Creep is genuinely good news in this narrow sense, and the creeping section of the central San Andreas is the classic example: it slips continuously, stores little elastic strain, and has produced no great earthquake in the historical record. (The caveat is that creeping and locked patches interact, and a creeping section can act as a barrier that concentrates strain on the locked ones rather than removing it from the system.)

(d) Any of the following:

- **Not all moment is released in the characteristic event.** Aftershocks, smaller earthquakes and post-seismic afterslip take a share, so the recurrence of the specific $M_w\,7.8$ event is longer than a budget that hands it the entire moment rate.
- **The locked depth is not the whole rupture depth.** Ruptures typically extend somewhat below the fully locked zone into the transition region, adding area and hence moment per event.
- **Earthquakes are not periodic.** A moment-balance calculation gives a long-term *average* interval; the actual sequence is irregular, and the average is not the most likely waiting time. Interpreting $T$ as "the next one is due in 67 years" is the single most common misuse of this arithmetic — and connects directly to the Gutenberg–Richter and recurrence statistics owned by [`geology` 2.7](../../geology/lessons/02-07-earthquakes-seismic-hazard.md).

</details>

## Flashback

**From Lesson 1.4 (Travel-time curves and the deep Earth):** A P arrival at $\Delta = 25^\circ$ has travel-time-curve slope $8.6\ \mathrm{s\,deg^{-1}}$. (a) Convert to s/rad. (b) If the mantle velocity at the turning radius is $10.2\ \mathrm{km\,s^{-1}}$, find the turning depth. (c) An S arrival from the same event at the same distance has a much larger slope. Explain, in one sentence, why that is expected, and say whether S bottomed shallower or deeper than P.

<details>
<summary>Solution</summary>

(a) $$p = 8.6\times57.30 = 493\ \mathrm{s\,rad^{-1}}.$$

(b) $$r_t = p\,v(r_t) = 493\times10.2 = 5029\ \mathrm{km}, \qquad \text{depth} = 6371-5029 = 1342\ \mathrm{km}.$$

(c) The ray parameter at the turning point is $r_t/v(r_t)$, and S velocities are roughly $1/\sqrt3$ of P velocities throughout the mantle, so for a ray bottoming at the *same* radius the S ray parameter is about $\sqrt3 \approx 1.73$ times larger — hence a much steeper travel-time curve.

**S bottomed shallower.** Compare like with like: at the same epicentral distance the S ray has $p_S \approx 8.6\times1.73 = 14.9\ \mathrm{s\,deg^{-1}} = 854\ \mathrm{s\,rad^{-1}}$, and with a shear velocity of about $10.2/\sqrt3 = 5.9$ km/s at 1342 km depth, the turning radius would be $854\times5.9 = 5039$ km — essentially the same depth. So in fact, for a Poisson-solid Earth, **P and S rays arriving at the same distance bottom at very nearly the same depth**, which is exactly why comparing $\delta t_P$ and $\delta t_S$ at matched distances is a legitimate way to extract $\delta\ln v_s/\delta\ln v_p$ in [1.5](01-05-seismic-tomography.md). The larger S slope is a statement about slower velocity, not about a different path.

</details>

## Connections

- **Backward:** the rigidity $\mu$ in $M_0 = \mu A\bar d$ is [1.1](01-01-the-elastic-earth.md)'s shear modulus; the first-motion polarity that builds a beachball is read off the P arrival identified in [1.2](01-02-seismic-wave-zoo.md).
- **Forward:** [1.7](01-07-rupture-physics-source-scaling.md) asks what the moment does *not* tell you — stress drop, duration, rupture speed — and fixes the self-similarity problem exposed in P2. Moment rates like P3's are the seismological half of the plate-motion budget computed kinematically in [3.5](03-05-plate-kinematics-euler-poles.md) and geodetically in [2.7](02-07-space-geodesy.md).
- **Sideways:** [`geology` 2.7](../../geology/lessons/02-07-earthquakes-seismic-hazard.md) owns everything downstream of the source — Gutenberg–Richter statistics, recurrence, intensity, ground motion and hazard — and explicitly cites this lesson for the moment tensor. Elastic rebound as a *geological* process, and the faults it happens on, are [`geology` 2.5](../../geology/lessons/02-05-folds-faults-structures.md). The isotropic-component discrimination that separates explosions from earthquakes is the forensic use of the same moment tensor.
