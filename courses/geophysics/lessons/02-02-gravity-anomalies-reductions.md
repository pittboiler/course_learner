# Geophysics · Lesson 2.2: Gravity anomalies and reductions

> ⏱ ~15 min · Module 2: Gravity, the figure of the Earth & geodesy · Builds on: [2.1](02-01-figure-of-the-earth.md) · Unlocks: [2.3](02-03-isostasy-airy-pratt.md), [2.6](02-06-flexure-of-the-lithosphere.md), [6.3](06-03-electrical-electromagnetic-methods.md)

## Why this matters

A gravimeter reads about 981,000 mGal. The geology you want is worth perhaps 50 mGal — one part in twenty thousand. Everything else is latitude, elevation, the shape of the Earth, the rock between you and sea level, the hills next door, the tides, and the instrument's own drift. **Gravity interpretation is almost entirely the art of subtracting things you already understand.**

The corrections are not bookkeeping. Each one encodes a physical model, and *which* corrections you apply determines *what question* your anomaly answers. The free-air anomaly and the Bouguer anomaly over the same mountain differ by hundreds of mGal and tell you completely different things — one says whether the mountain is supported, the other says what is underneath it.

## The idea

**Start from what the ellipsoid predicts.** [2.1](02-01-figure-of-the-earth.md) gave normal gravity $\gamma(\phi)$ — what you would measure standing on a featureless reference ellipsoid at your latitude. Subtract it. What remains is everything the ellipsoid does not know about, which is your station's height and the geology around it.

**Correct for being high up.** You are further from the centre of mass than the ellipsoid surface, so gravity is weaker. The **free-air correction** adds back what that height cost you: about 0.3086 mGal per metre. Add it and you have the **free-air anomaly** — which still contains the attraction of all the rock between the ellipsoid and your feet.

**Then, if you want, remove that rock too.** The **Bouguer correction** subtracts the attraction of an infinite horizontal slab of rock of your station's height. Do it and you have the **Bouguer anomaly** — a picture of the subsurface with topography stripped away.

**And then fix the fact that the world is not an infinite slab.** The **terrain correction** accounts for hills that stick up above the slab and valleys that fail to fill it. Here is the trap that catches everyone: **it is always positive**. A hill above the station pulls *upward*, reducing measured gravity; a valley beside the station is missing rock that the slab model assumed was there pulling *downward*. Both make the reading too small, so both are corrected the same way.

**The two anomalies answer different questions.** Over a mountain range in isostatic equilibrium, the free-air anomaly is near zero — because the mountain's extra mass is exactly cancelled by the mass deficit of its root — while the Bouguer anomaly is hugely negative, because the Bouguer correction removed the mountain and left the root's deficit exposed. **Free-air asks "is it supported?"; Bouguer asks "what is down there?"** That distinction is the entire content of [2.3](02-03-isostasy-airy-pratt.md).

## The formal version

**The free-air (vertical gradient) correction.** Differentiating $g = GM/r^2$:

$$\frac{\partial g}{\partial r} = -\frac{2GM}{r^3} = -\frac{2g}{r} = -3.086\times10^{-6}\ \mathrm{s^{-2}} = -0.3086\ \mathrm{mGal\,m^{-1}}.$$

*In words: gravity falls by about 0.3 mGal for every metre you climb.* So the correction **added** to a station at height $h$ is $+0.3086\,h$ mGal.

**The Bouguer slab correction.** The attraction of an infinite horizontal slab of thickness $h$ and density $\rho$ is

$$g_B = 2\pi G\rho h.$$

*In words: an infinite sheet's pull does not depend on how far away you are, only on how much mass per unit area it has.* Numerically, with $2\pi G = 4.1932\times10^{-10}$:

$$g_B = 0.04193\,\rho\,h\ \mathrm{mGal} \quad (\rho\ \text{in}\ \mathrm{g\,cm^{-3}},\ h\ \text{in}\ \mathrm{m}).$$

For the standard crustal density $\rho = 2670\ \mathrm{kg\,m^{-3}}$: $g_B = 0.1119\,h$ mGal.

**The two anomalies.**

$$\boxed{\ \Delta g_{FA} = g_{\text{obs}} - \gamma(\phi) + 0.3086\,h\ }$$

$$\boxed{\ \Delta g_{B} = \Delta g_{FA} - 0.1119\,h + TC\ }$$

with $TC \ge 0$ the terrain correction. The **combined elevation correction** is $0.3086 - 0.1119 = 0.1967\ \mathrm{mGal\,m^{-1}}$ for standard density.

**Other corrections, briefly.**

| Correction | Removes | Size |
|---|---|---|
| Drift | instrument spring creep | up to ~0.1 mGal/day; removed by repeat base readings |
| Earth tide | the solid-Earth body tide ([2.5](02-05-solid-earth-tides-rotation.md)) | up to ±0.3 mGal, predictable |
| Eötvös | vertical Coriolis effect of a moving platform | $\approx 7.5\,v\cos\phi\sin\alpha$ mGal for $v$ in knots |
| Isostatic | the predicted root of a compensated load | tens to hundreds of mGal |

The Eötvös correction is easy to underestimate: a ship steaming east at 10 knots at 45° latitude generates a spurious 53 mGal, larger than most targets. Marine and airborne gravity live or die on navigation accuracy.

**Choosing the reduction density.** The Bouguer correction needs $\rho$, which is what you are trying to find out. **Nettleton's method** resolves the circularity: compute the Bouguer anomaly over a topographic feature for several trial densities and pick the one for which the anomaly shows *least* correlation with topography. If $\rho$ is too low, hills appear as highs; too high, and they appear as lows.

**The forward problem for simple bodies.** For interpretation you need the anomaly a body would produce. Two workhorses:

$$\text{sphere of radius } R \text{ at depth } d:\quad \Delta g_{\max} = \frac{4}{3}\pi G\,\Delta\rho\,\frac{R^3}{d^2},$$

$$\text{slab of thickness } t:\quad \Delta g = 2\pi G\,\Delta\rho\,t.$$

*In words: a compact body's anomaly dies as the inverse square of its depth; a broad layer's does not die at all.* The half-width of a sphere's anomaly is $x_{1/2} \approx 0.766\,d$ — the standard depth rule of thumb.

## Picture

![Left: a cross-section showing a hilly land surface above a horizontal line marked as the ellipsoid, with the rock between them shaded. A station sits on the surface at height h, marked in coral. The hill above the station and the valley beside it are picked out in blue, with a note that the hill above pulls up while the valley beside is missing mass that would have pulled down, so the terrain correction is always positive. Right: a correction ladder for a station at 1500 metres at 45 degrees latitude. Observed gravity 980100.0 mGal, minus normal gravity 980620.0 which removes latitude and the ellipsoid, plus a free-air correction of 462.9 which removes being further from the centre, giving a free-air anomaly of minus 57.1. Then minus a Bouguer slab correction of 167.9 which removes the rock between the station and the ellipsoid, giving a Bouguer anomaly of minus 225.0 mGal. A closing note says that a near-zero free-air anomaly with a hugely negative Bouguer anomaly is the signature of a compensated mountain with a low-density root beneath it](assets/02-02-fig1.svg)

Two numbers from one reading, answering two different questions.

## Worked examples

**Example 1 (mechanical — the full reduction).** A station at latitude 45.000°, elevation 1500 m, reads $g_{\text{obs}} = 9.801000\ \mathrm{m\,s^{-2}}$. The terrain correction is $+3.4$ mGal. Compute the free-air and Bouguer anomalies.

*Normal gravity.* From [2.1](02-01-figure-of-the-earth.md), $\gamma(45^\circ) = 9.806199\ \mathrm{m\,s^{-2}}$. Converting everything to mGal ($1\ \mathrm{m\,s^{-2}} = 10^{5}$ mGal):

$$g_{\text{obs}} = 980{,}100.0\ \mathrm{mGal}, \qquad \gamma = 980{,}619.9\ \mathrm{mGal}.$$

*Free-air.*
$$\Delta g_{FA} = 980{,}100.0 - 980{,}619.9 + 0.3086\times1500 = -519.9 + 462.9 = -57.0\ \mathrm{mGal}.$$

*Bouguer.*
$$g_B = 0.1119\times1500 = 167.9\ \mathrm{mGal},$$
$$\Delta g_B = -57.0 - 167.9 + 3.4 = -221.5\ \mathrm{mGal}.$$

*Reading the result.* A free-air anomaly of $-57$ mGal is small — the topography here is close to being supported from below. A Bouguer anomaly of $-222$ mGal is very large and negative, which after removing the visible rock can only mean **a substantial mass deficit at depth**: a thickened, low-density crustal root. This is the standard signature of a mountain belt, and quantifying it is [2.3](02-03-isostasy-airy-pratt.md).

**Example 2 (why you'd care — finding a basin you cannot see).** A sedimentary basin is suspected beneath a flat plain. A gravity survey finds a broad Bouguer low of $-32$ mGal, roughly 40 km across, relative to the surrounding bedrock. Sediments have $\rho = 2300\ \mathrm{kg\,m^{-3}}$ and basement $\rho = 2700\ \mathrm{kg\,m^{-3}}$. How deep is the basin?

*Choose the right model.* The anomaly is 40 km wide, and the answer is going to be a few kilometres deep. Since width greatly exceeds depth, the infinite-slab formula is a good approximation in the basin's middle:

$$\Delta g = 2\pi G\,\Delta\rho\,t, \qquad \Delta\rho = 2300-2700 = -400\ \mathrm{kg\,m^{-3}}.$$

$$t = \frac{\Delta g}{2\pi G\Delta\rho} = \frac{-32\ \mathrm{mGal}}{4.1932\times10^{-10}\times(-400)} = \frac{-3.2\times10^{-4}\ \mathrm{m\,s^{-2}}}{-1.677\times10^{-7}\ \mathrm{s^{-2}}} = 1908\ \mathrm{m}.$$

**About 1.9 km of sediment.**

*Why this is a real technique and what it costs.* Gravity is cheap, fast and needs no source — a crew with a meter and good GPS can cover a basin in weeks, where a seismic reflection survey ([6.2](06-02-reflection-seismics.md)) costs orders of magnitude more. So gravity is used for reconnaissance: find the basin, map its outline, estimate its depth, then spend the seismic budget where it matters.

*But now the honest caveat.* The calculation assumed a density contrast. Suppose the sediments were actually $\rho = 2450$ instead, giving $\Delta\rho = -250$; then $t = 3.05$ km. **A 6 percent error in density became a 60 percent error in depth.** And worse, the same $-32$ mGal is produced exactly by a thin, very low-density layer, by a thick, mildly low-density layer, or by a deeper density change with no basin at all. Nothing in the data chooses between them.

This is **non-uniqueness**, and in potential-field work it is not an edge case but the normal condition — a consequence of the fact that a potential field outside a body depends only on the field on a bounding surface, so infinitely many internal distributions produce identical measurements. The practical resolution is always the same: bring in independent information. A single borehole giving true sediment density collapses the ambiguity immediately; a seismic line gives the geometry and lets gravity supply the density. The formal statement of what a potential-field dataset can and cannot determine is [6.1](06-01-the-linear-inverse-problem.md).

## Watch out

- **You might think** the terrain correction can be negative when the station sits in a valley. **Actually** it is always positive, in every terrain. The Bouguer slab model assumes rock fills everything up to the station's elevation and nothing above it. Hills violate that by adding mass above (which pulls up, reducing $g$); valleys violate it by removing mass below (which fails to pull down, also reducing $g$). Both errors have the same sign, so the correction always adds.
- **You might think** the free-air correction accounts for the air. **Actually** it accounts for nothing but height — the name means "as if there were only free air between the station and the ellipsoid", i.e. no rock. It is a pure geometric correction for distance from the centre of mass.
- **You might think** a bigger Bouguer anomaly means a bigger body. **Actually** it means a bigger $\Delta\rho\times\text{volume}$ at a shallower depth, and those three trade off completely. The *shape* of the anomaly constrains depth (through the half-width rule), and only the *product* of density contrast and volume is determined. Quoting "a 5 km deep, 400 kg/m³ body" from gravity alone, without saying what fixed the density, is overclaiming.

## One-liner

> Subtract latitude, add back height, optionally remove the rock in between, and always add for the terrain — then read the free-air anomaly to ask whether topography is supported and the Bouguer anomaly to ask what is underneath it.

## Problems

**P1 (🟢)** A station at latitude 60.000° and elevation 850 m reads $g_{\text{obs}} = 9.815000\ \mathrm{m\,s^{-2}}$. The terrain correction is $+1.8$ mGal, and $\gamma(60^\circ) = 9.819180\ \mathrm{m\,s^{-2}}$. (a) Compute the free-air anomaly. (b) Compute the Bouguer anomaly using standard density. (c) State in one sentence what the pair of numbers suggests.

**P2 (🟡)** A buried spherical ore body of radius 60 m has density $4200\ \mathrm{kg\,m^{-3}}$ in host rock of $2700\ \mathrm{kg\,m^{-3}}$, with its centre 150 m deep. (a) Compute the peak gravity anomaly. (b) Compute the half-width of the anomaly. (c) A survey with 0.02 mGal precision and 50 m station spacing is proposed — will it detect and resolve the body? (d) The same body at 400 m depth: recompute the peak anomaly and comment.

**P3 (🔴, bridges to [2.3](02-03-isostasy-airy-pratt.md))** A traverse crosses a 3000 m high plateau. In the plateau's interior the free-air anomaly is $+8$ mGal and the Bouguer anomaly is $-330$ mGal. At the plateau's edge, over a steep 3000 m escarpment, the free-air anomaly rises to $+120$ mGal. (a) Interpret the interior pair. (b) Compute the crustal root implied by the Bouguer anomaly, treating it as a slab of density contrast $-500\ \mathrm{kg\,m^{-3}}$. (c) Explain why the free-air anomaly is large and positive at the edge but near zero in the interior, even though the topography is 3000 m in both places. (d) State what this edge effect implies about the *wavelength* at which isostatic compensation works, and connect it to the choice a geophysicist must make between a free-air and a Bouguer map.

<details>
<summary>Solutions</summary>

**P1** (a) In mGal: $g_{\text{obs}} = 981{,}500.0$, $\gamma = 981{,}918.0$.
$$\Delta g_{FA} = 981{,}500.0 - 981{,}918.0 + 0.3086\times850 = -418.0 + 262.3 = -155.7\ \mathrm{mGal}.$$

(b) $$g_B = 0.1119\times850 = 95.1\ \mathrm{mGal},$$
$$\Delta g_B = -155.7 - 95.1 + 1.8 = -249.0\ \mathrm{mGal}.$$

(c) A strongly negative free-air anomaly means the topography is **more than compensated** — there is a mass deficit even before removing the visible rock — and the very negative Bouguer anomaly confirms a large low-density root. Taken together they suggest thick, light crust, more than enough to support the modest 850 m of elevation, which is characteristic of a region that has been thickened and then eroded.

**P2** (a) $$\Delta\rho = 4200-2700 = 1500\ \mathrm{kg\,m^{-3}}, \qquad R = 60\ \mathrm{m}, \qquad d = 150\ \mathrm{m}.$$
$$\Delta g_{\max} = \frac43\pi G\Delta\rho\frac{R^3}{d^2} = \frac43\pi(6.674\times10^{-11})(1500)\frac{2.16\times10^{5}}{2.25\times10^{4}}.$$
$$\frac43\pi\times6.674\times10^{-11} = 2.795\times10^{-10}; \quad \times1500 = 4.193\times10^{-7}; \quad \times9.60 = 4.025\times10^{-6}\ \mathrm{m\,s^{-2}}.$$
$$\Delta g_{\max} = 0.40\ \mathrm{mGal}.$$

(b) $$x_{1/2} = 0.766\,d = 0.766\times150 = 115\ \mathrm{m}.$$

(c) **Detect, yes; resolve, marginally.** The peak of 0.40 mGal is twenty times the 0.02 mGal precision, so detection is comfortable. But the full width at half maximum is $2\times115 = 230$ m, and with 50 m spacing only about five stations fall on the anomaly — just enough to define its shape and hence estimate depth, with no margin. Halving the station spacing across the anomaly, once found by a coarse reconnaissance pass, is the standard practice and would be worth doing here.

(d) $$\Delta g_{\max} \propto d^{-2}: \qquad 0.40\times\left(\frac{150}{400}\right)^2 = 0.40\times0.1406 = 0.056\ \mathrm{mGal}.$$

Still nominally three times the instrument precision, but now the half-width is $0.766\times400 = 306$ m, so the anomaly is broad and shallow-sloped — and at that amplitude it is comparable to the noise from imperfect terrain corrections, station elevation errors and near-surface density variation. **In practice this body would be at or beyond the limit of a ground gravity survey.** The inverse-square falloff is brutal: gravity is a superb tool for shallow targets and a poor one for deep ones, which is why deep exploration uses seismic methods instead.

**P3** (a) The interior free-air anomaly of $+8$ mGal is essentially zero on the scale of the numbers involved, so **the plateau is in isostatic equilibrium** — its excess mass above sea level is balanced by a mass deficit below. The $-330$ mGal Bouguer anomaly is the exposed signature of that deficit once the visible rock is stripped away.

(b) $$\Delta g = 2\pi G\Delta\rho\,t \;\Rightarrow\; t = \frac{-3.30\times10^{-3}\ \mathrm{m\,s^{-2}}}{4.1932\times10^{-10}\times(-500)} = \frac{-3.30\times10^{-3}}{-2.097\times10^{-7}} = 15{,}740\ \mathrm{m}.$$

A root about **16 km** thick. Cross-check with Airy isostasy ([2.3](02-03-isostasy-airy-pratt.md)): $r = h\rho_c/(\rho_m-\rho_c) = 3000\times2800/500 = 16.8$ km. The two agree to within 6 percent, which is the point — the gravity measurement and the buoyancy calculation are independent routes to the same root.

(c) Because **compensation is a statement about columns, not about points.** In the plateau's interior, the excess topographic mass in the column directly beneath the station is balanced by the root's deficit in the same column, and since both are broad compared with their separation, their gravitational effects at the surface nearly cancel.

At the edge, the geometry breaks. The station on the escarpment has the full mass of the plateau on one side and none on the other, while the compensating root lies 30 to 40 km below — much *further* away than the nearby topography. Distance matters: the near, shallow excess mass pulls strongly, the deep deficit only weakly, and the cancellation fails. The result is a large positive free-air anomaly at the edge, typically paired with a negative one just outside it. **Edge effects are the free-air anomaly's characteristic signature and they appear wherever topography changes abruptly** — which is why free-air maps of the oceans light up continental margins, trenches and seamounts so vividly.

(d) It implies that **isostatic compensation is a long-wavelength phenomenon**. Loads much broader than the depth of compensation (roughly 30 to 100 km) are compensated and produce near-zero free-air anomalies; loads much narrower are not locally compensated at all — they are held up by the strength of the lithosphere, which is the flexure of [2.6](02-06-flexure-of-the-lithosphere.md). The free-air anomaly is therefore a **high-pass filter** on the density structure: it sees only what is uncompensated, meaning the short wavelengths and the edges.

The practical consequence for a working geophysicist is a genuine choice of map. Use **free-air** when the question is about support, dynamics and short-wavelength structure — marine surveys are almost always presented this way, and satellite altimetry ([2.7](02-07-space-geodesy.md)) delivers free-air anomalies directly. Use **Bouguer** when the question is about subsurface density structure and the topography is a nuisance to be removed — the standard for continental crustal studies and for exploration. Presenting the wrong one is not merely a stylistic error; a Bouguer map of an ocean basin is dominated by the enormous correction for replacing water with rock and hides the very features the survey was flown to see.

</details>

## Flashback

**From Lesson 2.1 (The figure of the Earth):** (a) Compute normal gravity at latitude 20° using the International Gravity Formula. (b) A survey line runs due north for 40 km at that latitude. Compute the change in normal gravity along it, in mGal. (c) State the positional accuracy in latitude, in metres, needed to keep the resulting error below 0.02 mGal.

<details>
<summary>Solution</summary>

(a) At $\phi = 20^\circ$: $\sin^2\phi = 0.11698$, $\sin^2 40^\circ = 0.41318$.
$$\gamma = 9.780327\left(1 + 0.0053024\times0.11698 - 0.0000058\times0.41318\right)$$
$$= 9.780327(1 + 6.2028\times10^{-4} - 2.40\times10^{-6}) = 9.780327\times1.00061788 = 9.786370\ \mathrm{m\,s^{-2}}.$$

(b) Differentiate the leading term with respect to latitude:
$$\frac{d\gamma}{d\phi} \approx 9.780327\times0.0053024\times2\sin\phi\cos\phi = 9.780327\times0.0053024\times\sin40^\circ$$
$$= 0.051858\times0.64279 = 0.033334\ \mathrm{m\,s^{-2}\,rad^{-1}}.$$

Forty kilometres of northward travel is $\Delta\phi = 40/6371 = 6.278\times10^{-3}$ rad, so

$$\Delta\gamma = 0.033334\times6.278\times10^{-3} = 2.093\times10^{-4}\ \mathrm{m\,s^{-2}} = 20.9\ \mathrm{mGal}.$$

(c) The gradient per metre of northward displacement is

$$\frac{20.9\ \mathrm{mGal}}{40{,}000\ \mathrm{m}} = 5.23\times10^{-4}\ \mathrm{mGal\,m^{-1}}.$$

$$\delta y = \frac{0.02}{5.23\times10^{-4}} = 38\ \mathrm{m}.$$

**Position must be known to better than about 40 m north–south** — trivial with modern GNSS, but a serious constraint before satellite positioning, and the reason early gravity surveys were tied to triangulation networks. Note the corresponding requirement in *elevation* is far tighter: at 0.1967 mGal/m combined elevation correction, 0.02 mGal demands height to 10 cm. **Vertical accuracy, not horizontal, is what limits ground gravity surveying** — a fact that also explains why airborne gravity had to wait for differential GPS.

</details>

## Connections

- **Backward:** normal gravity $\gamma(\phi)$ and the ellipsoid are [2.1](02-01-figure-of-the-earth.md)'s; the anomaly is defined as a departure from that reference and is meaningless without it.
- **Forward:** [2.3](02-03-isostasy-airy-pratt.md) turns the Bouguer anomaly into a root depth and the free-air anomaly into a test of compensation; [2.4](02-04-the-geoid.md) works with the potential rather than its gradient; [2.6](02-06-flexure-of-the-lithosphere.md) explains the short-wavelength loads that P3 showed are *not* compensated; and [2.7](02-07-space-geodesy.md) obtains these same anomalies from orbit, over oceans where no ground survey is possible.
- **Sideways:** the inverse-square decay and the non-uniqueness of Example 2 are shared with magnetic surveying ([3.4](03-04-magnetic-anomalies-reversals.md)) and with the electrical methods of [6.3](06-03-electrical-electromagnetic-methods.md) — all potential-field problems have the same formal structure. [`geology` 2.6](../../geology/lessons/02-06-mountain-building.md) uses the Bouguer signature of a root as evidence for how mountain belts are held up, and cites this lesson for the reductions.
