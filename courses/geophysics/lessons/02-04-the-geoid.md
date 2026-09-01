# Geophysics · Lesson 2.4: The geoid

> ⏱ ~15 min · Module 2: Gravity, the figure of the Earth & geodesy · Builds on: [2.1](02-01-figure-of-the-earth.md), [2.2](02-02-gravity-anomalies-reductions.md) · Unlocks: [2.7](02-07-space-geodesy.md), [4.4](04-04-mantle-convection-rayleigh-number.md)

## Why this matters

"Height above sea level" is a phrase that sounds simple and is not. Sea level is not a sphere, not an ellipsoid, and not even a fixed surface — it is wherever the ocean settles under gravity, and gravity varies because the Earth's interior is lumpy. The surface it settles onto is the **geoid**, and it departs from the best-fitting ellipsoid by up to about 100 metres.

Two very different audiences care. Engineers care because GPS reports height above the *ellipsoid* while water flows downhill relative to the *geoid*, and confusing them has built canals that run uphill. Geophysicists care because the geoid is the only observable that is sensitive to the deepest mantle — it weights long wavelengths so heavily that it is essentially a photograph of density structure a thousand kilometres down, and reading it correctly turns out to require knowing how viscosity varies with depth.

## The idea

**The geoid is the equipotential surface that mean sea level follows.** Pick the level surface of the geopotential that best matches the average ocean surface, and extend it under the continents. That is the geoid. It is where a plumb line points perpendicular, where a spirit level lies flat, and where still water sits.

**It is not the ellipsoid.** The ellipsoid of [2.1](02-01-figure-of-the-earth.md) is a smooth mathematical fiction that captures rotation and the leading flattening. The geoid is the real thing, and it bulges up over mass excesses and sags over deficits. The vertical separation between them is the **geoid height** $N$, ranging from about $-106$ m south of India to about $+80$ m near New Guinea.

**Which gives the height relation everyone needs and nobody remembers.** GPS measures $h$, the height above the ellipsoid. Surveying and hydraulics need $H$, the height above the geoid. They differ by $N$: $H = h - N$. Getting this wrong by 40 m is entirely possible, and in flat terrain 40 m is the difference between drainage and flooding.

**Gravity anomalies and the geoid see different things.** Gravity is the *gradient* of the potential, and differentiating amplifies short wavelengths. The geoid is the potential itself, and it therefore emphasizes long wavelengths. Quantitatively, a given gravity anomaly produces a geoid signal about a hundred times larger at continental scale than at survey scale. **So gravity anomalies map the crust and the geoid maps the deep mantle** — the same data, filtered two ways.

**And the deep mantle turns out to be subtle.** A dense sinking slab attracts, which should raise the geoid. But it also drags the surface down above it, creating a mass deficit that lowers the geoid. Which effect wins depends on how easily the mantle flows — and the observed answer, geoid *highs* over subduction zones, is only reproducible if viscosity increases substantially with depth. One of the strongest constraints on mantle rheology comes from a map of sea level.

## The formal version

**The disturbing potential.** Write the true geopotential $W$ as the ellipsoid's normal potential $U$ plus a remainder:

$$T = W - U.$$

*In words: $T$ is everything the reference model does not know about.*

**Bruns' formula.** The geoid height is the disturbing potential divided by normal gravity:

$$\boxed{\ N = \frac{T}{\gamma}\ }$$

*In words: to convert a potential anomaly into a height, divide by $g$ — because raising a surface by $N$ against gravity $\gamma$ changes its potential by $\gamma N$.* This is the whole content of the relation, and it is exact to the accuracy of the linearization.

**Gravity anomaly and geoid, degree by degree.** Expanding both in spherical harmonics, the anomaly at degree $\ell$ relates to the geoid at the same degree by

$$\Delta g_\ell = \frac{(\ell-1)\gamma}{R}N_\ell \qquad\Longleftrightarrow\qquad N_\ell = \frac{R}{(\ell-1)\gamma}\,\Delta g_\ell.$$

*In words: converting gravity to geoid divides by $\ell$, so broad features are amplified and narrow ones suppressed.* Degree $\ell$ corresponds to a wavelength of roughly $2\pi R/\ell$, so $\ell=2$ is planetary and $\ell = 100$ is about 400 km.

**Stokes' integral.** The global version — recovering $N$ everywhere from gravity anomalies everywhere:

$$N(\theta,\lambda) = \frac{R}{4\pi\gamma}\iint_\sigma \Delta g\,S(\psi)\,d\sigma,$$

with $S(\psi)$ Stokes' function of the angular distance $\psi$. Its practical importance is what it demands: **the geoid at any point depends on gravity everywhere on Earth.** A regional survey cannot determine a regional geoid without a global model to supply the long wavelengths — which is what satellite missions provide.

**Deflection of the vertical.** The tilt between the geoid and the ellipsoid normal:

$$\xi = -\frac{1}{\gamma}\frac{\partial T}{R\,\partial\phi}\ \text{(north–south)}, \qquad \eta = -\frac{1}{\gamma}\frac{\partial T}{R\cos\phi\,\partial\lambda}\ \text{(east–west)}.$$

Values reach tens of arcseconds near mountain ranges. This is the quantity the Indian survey measured near the Himalaya in the 1850s, and its shortfall relative to prediction is what launched isostasy ([2.3](02-03-isostasy-airy-pratt.md)).

**Height systems, plainly.**

| Symbol | Name | Measured from | Given by |
|---|---|---|---|
| $h$ | ellipsoidal height | reference ellipsoid | GNSS |
| $H$ | orthometric height | geoid | levelling; "height above sea level" |
| $N$ | geoid height | ellipsoid to geoid | a geoid model |

$$H = h - N.$$

## Picture

![A cross-section with three surfaces. A straight blue line labelled ellipsoid; above it an undulating coral line labelled geoid; above that an irregular grey line labelled topography. At one point, vertical arrows measure h from the ellipsoid to the topographic surface, labelled as what GPS measures, H from the geoid to the topographic surface, labelled height above sea level, and N from the ellipsoid to the geoid, labelled geoid height up to plus or minus 100 metres. Notes state that H equals h minus N, that water flows downhill in H and never in h, that a canal surveyed with raw GPS heights can run uphill, and that the geoid is an equipotential so a plumb line hangs perpendicular to it and still water follows it. At the right, a graph of geoid height against spherical harmonic degree for a fixed 50 mGal gravity anomaly, falling steeply from 325 metres at degree 2 through 34 metres at degree 20 to 3 metres at degree 100, with the formula N approximately equals R delta g over quantity l minus one times gamma, and a note that the geoid weights long wavelengths by one over l, so it is a map of the deep mantle while gravity is a map of the crust](assets/02-04-fig1.svg)

Same field, two derivatives apart, two completely different scientific instruments.

## Worked examples

**Example 1 (mechanical — the height that matters).** A GNSS receiver on a construction site reports an ellipsoidal height of $h = 214.6$ m. The regional geoid model gives $N = -38.2$ m. (a) Find the orthometric height. (b) A second site 12 km away has $h = 213.9$ m and $N = -39.5$ m; which site is higher above sea level, and by how much? (c) What would a naive comparison of raw GPS heights have concluded?

(a) $$H = h - N = 214.6 - (-38.2) = 252.8\ \mathrm{m}.$$

(b) $$H_2 = 213.9 - (-39.5) = 253.4\ \mathrm{m}.$$

Site 2 is higher, by $253.4 - 252.8 = 0.6$ m.

(c) Raw ellipsoidal heights say site 1 is higher by $214.6-213.9 = 0.7$ m. **The sign is wrong.** Over 12 km the geoid sloped by 1.3 m, more than the topographic difference, and water put on site 1 would flow toward site 2 rather than away from it.

This is not a contrived example. Geoid slopes of 0.1 m/km are ordinary in mountainous terrain, and any project where the elevation differences are of that order — irrigation canals, drainage, flood mapping, pipeline gradients — must use orthometric heights. The standard failure mode is a survey done entirely in GNSS with no geoid model applied, which is internally consistent, precise, and points water in the wrong direction.

**Example 2 (why you'd care — reading the deep mantle, and the sign problem).** The geoid over the western Pacific subduction zones is high, by tens of metres. A cold subducted slab is dense. Is the explanation simply "dense rock attracts"?

*The naive calculation.* A slab of excess density $\Delta\rho \approx 50\ \mathrm{kg\,m^{-3}}$, 100 km thick, extending over a large region, produces a positive potential anomaly and hence a geoid high. So far so good.

*Why it cannot be that simple.* The slab is not sitting in a rigid box; it is sinking through a viscous fluid. Its downward pull drags the surface above it down — **dynamic topography**, a depression of perhaps a few hundred metres — and that depression is itself a mass deficit, because rock has been replaced by water or air. It also deflects the core–mantle boundary upward beneath it, another mass anomaly. **The observed geoid is the sum of the internal load and the boundary deflections it induces, and the two have opposite signs.**

*Which one wins depends on viscosity.* If the mantle has uniform viscosity, the boundary deflections very nearly cancel the direct effect, and the calculation gives a small geoid *low* over slabs — the opposite of what is observed. If viscosity increases with depth, a sinking load in the stiff lower mantle deforms the surface less effectively, the cancellation is incomplete, and the direct attraction wins: a geoid **high**.

*The result.* Matching the observed geoid requires the lower mantle to be roughly 10 to 100 times more viscous than the upper mantle. This is one of the two independent lines of evidence on the mantle's viscosity profile — the other being post-glacial rebound ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)), which samples the upper mantle much more sensitively. That the two methods, one from ancient ice sheets and one from a map of sea level, agree on an increase with depth is a genuinely strong result.

*The transferable lesson.* **In a convecting planet, a density anomaly is never observed in isolation** — it comes with the flow it drives and the boundary deformation that flow produces. Any interpretation that adds up buried masses while treating the surface as rigid will get the sign wrong. This is the same reasoning that makes dynamic topography a first-order term in [4.4](04-04-mantle-convection-rayleigh-number.md), and the reason the excess flattening of [2.1](02-01-figure-of-the-earth.md) has a convective as well as a glacial explanation.

## Watch out

- **You might think** the geoid is "sea level extended under the continents", full stop. **Actually** that is the definition, but the extension is not a simple projection: under a mountain the geoid lies *inside* the rock, and defining orthometric height rigorously requires assumptions about the density of the rock between the geoid and the surface. Different countries make different assumptions, which is why national height datums disagree by decimetres.
- **You might think** a geoid high means high topography. **Actually** the correlation is weak, because the geoid is dominated by wavelengths far longer than any mountain range and by density structure far deeper than any crust. The largest geoid low on Earth, south of India, sits over ordinary ocean; the topographic Himalaya barely register in the global geoid.
- **You might think** more accurate local gravity gives a more accurate local geoid. **Actually** Stokes' integral says the geoid at a point depends on gravity *everywhere*. Local data fix the short wavelengths; the long wavelengths must come from a global satellite model. Regional geoid computation is always a merge of the two, and the errors live at the join.

## One-liner

> The geoid is the equipotential that water finds, and because it is the potential rather than its gradient it suppresses the crust and reveals the deep mantle — where the sign of its signal turns out to measure viscosity.

## Problems

**P1 (🟢)** A benchmark has ellipsoidal height $h = 87.35$ m and the geoid model gives $N = 44.10$ m. (a) Compute the orthometric height. (b) A second benchmark 5 km away has $h = 88.02$ m, $N = 44.55$ m. Which is higher above sea level? (c) Compute the average geoid slope between them in m/km.

**P2 (🟡)** A gravity anomaly of amplitude 40 mGal is present at two different wavelengths: one at spherical harmonic degree $\ell = 4$, one at $\ell = 60$. Take $R = 6371$ km and $\gamma = 9.8\ \mathrm{m\,s^{-2}}$. (a) Compute the corresponding geoid heights. (b) Compute the approximate spatial wavelength of each. (c) State which of the two a shipborne gravity survey covering a 300 km × 300 km box could detect, and which it could not, explaining why.

**P3 (🔴, bridges to [4.4](04-04-mantle-convection-rayleigh-number.md))** A dense anomaly of excess mass $\delta M$ sits in the mantle at depth $d$. It produces (i) a direct positive potential anomaly, and (ii) a dynamic depression of the surface above it, of mass deficit $-\alpha\,\delta M$ with $0 < \alpha < 1$ depending on viscosity structure. (a) Write an expression for the net geoid anomaly's sign in terms of $\alpha$. (b) Explain physically why $\alpha$ decreases when the anomaly sits in a more viscous layer. (c) Observations show geoid highs over subduction zones and geoid highs over the two large low-velocity provinces at the core–mantle boundary — which are *light*, not dense. Explain how a light anomaly can also give a geoid high, and what that implies. (d) State what would have to be true for the geoid to be uninformative about viscosity.

<details>
<summary>Solutions</summary>

**P1** (a) $$H = 87.35 - 44.10 = 43.25\ \mathrm{m}.$$

(b) $$H_2 = 88.02 - 44.55 = 43.47\ \mathrm{m}.$$
The second benchmark, by 0.22 m. (Note that the raw ellipsoidal heights would have said the same thing here — the second is higher by 0.67 m — but the *magnitude* is off by a factor of three, which matters for a gradient.)

(c) $$\frac{44.55-44.10}{5} = \frac{0.45}{5} = 0.090\ \mathrm{m\,km^{-1}}.$$

**P2** (a) $$N_\ell = \frac{R\,\Delta g}{(\ell-1)\gamma}, \qquad \Delta g = 40\ \mathrm{mGal} = 4.0\times10^{-4}\ \mathrm{m\,s^{-2}}.$$

$$N_4 = \frac{6.371\times10^{6}\times4.0\times10^{-4}}{3\times9.8} = \frac{2548}{29.4} = 86.7\ \mathrm{m}.$$

$$N_{60} = \frac{2548}{59\times9.8} = \frac{2548}{578.2} = 4.4\ \mathrm{m}.$$

(b) $$\lambda \approx \frac{2\pi R}{\ell}: \qquad \lambda_4 = \frac{4.003\times10^{4}}{4} = 10{,}000\ \mathrm{km}, \qquad \lambda_{60} = \frac{4.003\times10^{4}}{60} = 667\ \mathrm{km}.$$

(c) The survey box is 300 km on a side.

- **Degree 60** ($\lambda = 667$ km): about half a wavelength fits in the box. This is detectable in principle, though the survey sees only part of the feature and cannot determine its full amplitude without extending beyond it.
- **Degree 4** ($\lambda = 10{,}000$ km): the box spans 3 percent of a wavelength. Across it, the anomaly varies almost linearly and is indistinguishable from a constant offset plus a small tilt — both of which are removed by the survey's own datum and levelling. **It is invisible, not because it is weak, but because it is uniform on the scale of the measurement.**

This is exactly why Stokes' integral needs global data, and why the long-wavelength geoid was essentially unknown until satellites: no ground survey, however dense, can measure a signal it cannot get outside of.

**P3** (a) The direct effect scales with $+\delta M$ and the surface deficit with $-\alpha\,\delta M$, so the net is proportional to $(1-\alpha)\,\delta M$ times a positive geometric factor. Hence

$$\text{net geoid anomaly} > 0 \iff \alpha < 1, \qquad < 0 \iff \alpha > 1.$$

The interesting regime is that $\alpha$ can exceed 1: the surface deflection is felt at the observation point from *closer range* than the buried mass, so its smaller mass can nonetheless dominate the potential. A uniform-viscosity mantle gives exactly this, and hence the wrong sign.

(b) Because the surface deflection is a *flow* response. The buried load exerts a downward force; the mantle must flow to accommodate a surface depression, and the amount of depression achieved for a given force falls as the resisting viscosity rises. If the anomaly sits in a stiff lower mantle, its stress is transmitted only weakly to the surface, the depression is small, $\alpha$ is small, and the direct attraction dominates. **Viscosity controls how much of a buried load's signature is cancelled by the deformation it causes** — which is why a static gravity map is a rheological measurement.

(c) A **light** anomaly does the reverse of everything: it repels (negative direct potential), but it pushes the surface *up*, creating a topographic mass excess above it. If that positive boundary term outweighs the negative direct term — which happens when the anomaly is deep and the boundary is comparatively close to the observer — the net is a geoid high.

For the LLSVPs this is what is observed, and it implies they are **dynamically supported**: they are buoyant, they are pushing the surface up, and the associated dynamic topography is large enough to flip the sign. It also implies they are long-lived features maintained by flow rather than passive piles, and — because the required boundary deflection depends on viscosity — the amplitude constrains the lower mantle's viscosity independently of the slab argument.

(d) The geoid would be uninformative about viscosity if the boundary deflections were either negligible or exactly proportional to the internal load regardless of depth. Concretely: if the surface were **rigid** (no dynamic topography at all, $\alpha = 0$), the geoid would just be a map of buried mass, and no rheological information would enter. Equally, if the mantle were **inviscid**, the surface would adjust instantly and completely to cancel every internal load ($\alpha$ fixed by geometry alone), and again viscosity would drop out.

The geoid is informative precisely because the mantle is in between — stiff enough that deflections are incomplete, mobile enough that they occur — and because $\alpha$ depends on *where* in the depth range the load sits. It is a nice illustration of a general principle: **a measurement constrains a parameter only where the response is neither saturated nor absent**, and much of experimental design is finding that window.

</details>

## Flashback

**From Lesson 2.3 (Isostasy — Airy and Pratt):** A volcanic island rises 2.0 km above the surrounding seafloor, which lies at 4.0 km water depth. Take $\rho_w = 1030$, $\rho_c = 2900$, $\rho_m = 3300\ \mathrm{kg\,m^{-3}}$. (a) Compute the Airy root required to support the island, treating the load as replacing water with rock. (b) The island is 40 km across. Comment on whether Airy compensation is the right model, and what the alternative is.

<details>
<summary>Solution</summary>

(a) The load is the rock that has replaced water, plus the subaerial part. Working relative to the surrounding seafloor column, the island adds 4.0 km of rock in place of water below sea level, plus 2.0 km of rock above it. The excess mass per unit area is

$$\sigma = 4.0\times10^{3}(\rho_c-\rho_w) + 2.0\times10^{3}\rho_c = 4.0\times10^{3}\times1870 + 2.0\times10^{3}\times2900$$
$$= 7.48\times10^{6} + 5.80\times10^{6} = 1.328\times10^{7}\ \mathrm{kg\,m^{-2}}.$$

Supporting it by a root of density contrast $\rho_c - \rho_m = -400\ \mathrm{kg\,m^{-3}}$:

$$r = \frac{\sigma}{\rho_m-\rho_c} = \frac{1.328\times10^{7}}{400} = 3.32\times10^{4}\ \mathrm{m} = 33\ \mathrm{km}.$$

(b) **Airy is the wrong model here.** The load is 40 km across, while the root it would require is 33 km deep — the load's width is comparable to the depth of its supposed compensation, and local (column-by-column) isostasy is only valid when the load is *much broader* than the compensation depth ([2.2](02-02-gravity-anomalies-reductions.md), P3).

The alternative is **regional compensation by flexure**: the oceanic lithosphere is an elastic plate that bends under the island, distributing its weight over a region several hundred kilometres across, with a surrounding moat and a low ring-shaped forebulge. Real oceanic islands show exactly this — the Hawaiian chain sits in a pronounced moat with a peripheral bulge — and their gravity signature is a large positive free-air anomaly rather than the near-zero one that local compensation would give. The quantitative treatment, and the elastic thickness that comes out of it, is [2.6](02-06-flexure-of-the-lithosphere.md).

</details>

## Connections

- **Backward:** the ellipsoid the geoid is measured against, and the normal gravity $\gamma$ in Bruns' formula, are [2.1](02-01-figure-of-the-earth.md)'s; the gravity anomalies related to $N$ degree by degree are [2.2](02-02-gravity-anomalies-reductions.md)'s; the deflection of the vertical is the observation that started [2.3](02-03-isostasy-airy-pratt.md).
- **Forward:** [2.7](02-07-space-geodesy.md) measures the geoid from orbit and watches it change with time; [4.4](04-04-mantle-convection-rayleigh-number.md) supplies the convective flow whose dynamic topography flips the geoid's sign; [4.6](04-06-mantle-rheology-post-glacial-rebound.md) provides the independent viscosity estimate that Example 2's argument must be consistent with.
- **Sideways:** the spherical-harmonic expansion and the $1/\ell$ weighting are the same machinery as the geomagnetic field's expansion in [3.1](03-01-the-main-field.md), where the analogous depth-discrimination argument separates core field from crustal field. The distinction between a potential and its gradient — and the fact that they are different instruments — is a general feature of potential theory and reappears in [6.1](06-01-the-linear-inverse-problem.md) as a statement about which model components the data can resolve.
