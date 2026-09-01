# Geophysics · Lesson 2.3: Isostasy — Airy and Pratt

> ⏱ ~15 min · Module 2: Gravity, the figure of the Earth & geodesy · Builds on: [2.2](02-02-gravity-anomalies-reductions.md) · Unlocks: [2.6](02-06-flexure-of-the-lithosphere.md), [4.3](04-03-cooling-oceanic-lithosphere.md), [4.6](04-06-mantle-rheology-post-glacial-rebound.md)

## Why this matters

The Himalaya are five kilometres of rock sitting on a planet that flows. They should have sunk. That they have not is the observation that isostasy explains, and the explanation is a single idea — Archimedes, applied to continents.

The evidence came from an error. In the 1850s the Great Trigonometrical Survey of India found that the deflection of a plumb line near the Himalaya was about a third of what the visible mountains should produce. Pratt and Airy proposed two different resolutions, both of which turned out to be right, in different places. The dispute is a useful one to inherit, because the two models make different predictions and choosing between them is a real diagnostic about what is going on underneath.

## The idea

**Below some depth, the Earth cannot support lateral stress differences.** The mantle flows on geological timescales ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)). So below a certain level — the **depth of compensation** — the pressure must be the same everywhere horizontally, or material would flow from high pressure to low until it was.

**That single condition is all of isostasy.** Take any column of rock from the surface down to the compensation depth. Its total weight per unit area must equal that of every other column. High topography must therefore be paid for by a mass deficit somewhere below it. **Mountains float.**

**Airy: pay with a root.** Keep the crust's density fixed and let its thickness vary. A mountain is the top of a thickened crustal block whose light material extends far down into the denser mantle — exactly an iceberg, with rock instead of ice. Since crust and mantle differ in density by only about 15 percent, the root must be roughly six times the height of the mountain.

**Pratt: pay with density.** Keep the base flat at a fixed depth and let density vary. Tall regions are tall because their rock is *lighter*, not because there is more of it. Every column has the same mass; the light ones simply stand higher.

**Both are right, in different settings.** Airy describes crustal thickening — mountain belts, continental crust, anywhere tectonics has piled rock up. Pratt describes thermal expansion — mid-ocean ridges, where hot mantle is light mantle and the crust is the same thickness everywhere. Real compensation is often a mixture, and separating them is a genuine research question.

**And both are *local*, which is their shared failure.** Each assumes the column beneath a load supports that load and nothing else, as though the lithosphere were a stack of independent pistons. Real lithosphere has flexural strength: it bends, distributing a load sideways over hundreds of kilometres. Narrow loads — seamounts, volcanoes, ice caps — are not locally compensated at all. That is [2.6](02-06-flexure-of-the-lithosphere.md).

## The formal version

**The compensation condition.** For columns of the same cross-sectional area extending to the depth of compensation $D$:

$$\int_0^{D}\rho(z)\,dz = \text{the same for every column}.$$

*In words: equal mass per unit area, hence equal pressure at the bottom.*

**Airy isostasy.** Crust of density $\rho_c$ and reference thickness $T$ floats on mantle of density $\rho_m$. For subaerial topography of height $h$, the root depth $r$ below the reference crustal base satisfies

$$\boxed{\ r = h\,\frac{\rho_c}{\rho_m - \rho_c}\ }$$

*In words: the root's buoyancy deficit must equal the weight of the mountain above.* With $\rho_c = 2800$ and $\rho_m = 3300$: $r = 5.6\,h$.

For **submarine** topography — an ocean basin of water depth $d$, water density $\rho_w$ — the crust thins by an "antiroot"

$$r_{\text{anti}} = d\,\frac{\rho_c - \rho_w}{\rho_m - \rho_c}.$$

**Pratt isostasy.** Compensation depth $D$ measured from sea level, with a column of height $h$ above sea level having density $\rho_h$:

$$\rho_h (D + h) = \rho_0 D \;\Longrightarrow\; \boxed{\ \rho_h = \rho_0\frac{D}{D+h}\ }$$

with $\rho_0$ the density of a column standing exactly at sea level. *In words: taller columns must be lighter in exact inverse proportion to their length.*

**Gravity signatures.** Over the interior of a fully compensated load, wide compared with $D$:

| Anomaly | Compensated topography | Uncompensated topography |
|---|---|---|
| Free-air | $\approx 0$ | large, positive, tracks topography |
| Bouguer | large and negative, mirrors topography | $\approx 0$ |

**The isostatic anomaly.** Compute the predicted root or density structure from the topography, calculate its gravity effect, and subtract that too:

$$\Delta g_{\text{iso}} = \Delta g_B + g_{\text{root}}.$$

*In words: the residual after removing both the topography and the compensation it should have.* A near-zero isostatic anomaly means the region is in equilibrium. A significant non-zero value means something else is going on — active uplift, subduction dragging the surface down, or a load being held by lithospheric strength.

**Vertical motion when equilibrium is broken.** If a load of thickness $t$ and density $\rho_L$ is placed on the lithosphere, the equilibrium depression is

$$w = t\,\frac{\rho_L}{\rho_m}.$$

Remove the load and the surface rebounds by the same amount — over a time set by mantle viscosity, which is the measurement in [4.6](04-06-mantle-rheology-post-glacial-rebound.md).

## Picture

![Left panel labelled Airy, same density different thickness: four blue crustal blocks of identical density 2800 standing on mantle of density 3300, with taller blocks having proportionally deeper roots extending below a common line, and one block cut down as an antiroot. A coral line beneath is labelled depth of compensation, where pressure is equal everywhere. Text notes that a 5 km peak needs 28 km of root, six units of root per unit of mountain, exactly an iceberg with different densities, and that Airy is right for crustal thickening in mountain belts and continents. Right panel labelled Pratt, same depth different density: four coral columns of differing shading all reaching down to a common flat compensation depth, labelled with densities 3200, 3120, 3048 and 3140, the lightest being the tallest. Text notes that every column has the same mass so the tall ones must be less dense, and that Pratt is right for thermal expansion at mid-ocean ridges where hot mantle is light mantle and the crust never thickens](assets/02-03-fig1.svg)

Both diagrams satisfy the same equation. What differs is which variable is allowed to move.

## Worked examples

**Example 1 (mechanical — the Tibetan root).** The Tibetan Plateau stands $h = 5.0$ km above sea level. Take $\rho_c = 2800$, $\rho_m = 3300\ \mathrm{kg\,m^{-3}}$, and a reference crustal thickness of 35 km.

$$r = h\frac{\rho_c}{\rho_m-\rho_c} = 5.0\times\frac{2800}{500} = 5.0\times5.6 = 28.0\ \mathrm{km}.$$

$$\text{total crustal thickness} = 35 + 28 = 63\ \mathrm{km}.$$

Seismic refraction beneath Tibet finds a Moho at 65 to 75 km. **The prediction is right to within about 15 percent from one line of arithmetic** — and the residual is itself informative, since a deeper-than-predicted Moho means either a lighter crust, a denser mantle, or some support from a source other than the root.

*The gravity check.* The root's density contrast is $-500\ \mathrm{kg\,m^{-3}}$ over 28 km, so from the slab formula of [2.2](02-02-gravity-anomalies-reductions.md):

$$\Delta g_B \approx 2\pi G\Delta\rho\,r = 4.1932\times10^{-10}\times(-500)\times2.8\times10^{4} = -5.87\times10^{-3}\ \mathrm{m\,s^{-2}} = -587\ \mathrm{mGal}.$$

Observed Bouguer anomalies over Tibet run around $-500$ mGal. Again, right size, small residual.

**Example 2 (why you'd care — telling Airy from Pratt at a mid-ocean ridge).** A mid-ocean ridge crest stands 3 km above the surrounding abyssal plain, yet seismic refraction shows the oceanic crust is the same thickness — about 7 km — at the crest as on the flanks. Which model applies, and what is the physical cause?

*Airy is excluded by observation.* Airy compensation of 3 km of relief would demand a root of $3\times5.6 = 16.8$ km of extra crust beneath the ridge. Seismology says there is none. **The crust is not doing the compensating.**

*So the density must vary.* Apply Pratt with $D = 100$ km below sea level and $\rho_0 = 3300$ for the flank column:

$$\rho_h = \rho_0\frac{D}{D+h}.$$

But the ridge stands 3 km *higher* than the flank, so relative to the flank column the ridge column is 3 km longer and must be lighter by

$$\frac{\Delta\rho}{\rho} = -\frac{h}{D+h} = -\frac{3}{103} = -2.9\%, \qquad \Delta\rho \approx -96\ \mathrm{kg\,m^{-3}}.$$

*What produces 3 percent less density?* Heat. Thermal expansion with $\alpha \approx 3\times10^{-5}\ \mathrm{K^{-1}}$ gives

$$\Delta T = \frac{\Delta\rho/\rho}{-\alpha} = \frac{0.029}{3\times10^{-5}} = 970\ \mathrm{K}.$$

**A thousand kelvin, averaged over the top 100 km** — which is exactly the difference between mantle beneath a spreading centre and mantle beneath 80-Myr-old seafloor. The ridge is high because it is hot, and it subsides as it cools.

*Why this matters beyond the classification.* This is the physical content of the $\sqrt{t}$ seafloor subsidence law derived in [4.3](04-03-cooling-oceanic-lithosphere.md): the ocean floor deepens with age because the underlying mantle cools, densifies and contracts, and Pratt isostasy is the bookkeeping that converts a temperature history into a depth history. **The topography of two-thirds of the Earth's solid surface is a thermometer.** And notice the methodological pattern: neither gravity nor seismology alone chose between Airy and Pratt — the seismic crustal thickness eliminated one model, and the density then followed from isostasy. Two observables, one conclusion, exactly as in [1.5](01-05-seismic-tomography.md).

## Watch out

- **You might think** the depth of compensation is a physical boundary. **Actually** it is a modelling choice: the level below which you assert lateral pressure differences have been erased. In Airy it falls out as the base of the deepest root; in Pratt you impose it. Different choices of $D$ in Pratt give different density profiles that fit the same topography equally well — one more instance of non-uniqueness.
- **You might think** a zero free-air anomaly proves isostatic equilibrium. **Actually** it proves equilibrium only at wavelengths long compared with the compensation depth. A narrow, entirely uncompensated seamount held up by plate strength can show a small free-air anomaly if it is small enough, and a broad region can be far out of equilibrium while individual stations read near zero. Test compensation with the **isostatic anomaly**, not the free-air one.
- **You might think** isostasy tells you how fast things move. **Actually** it is a statement of static equilibrium and contains no time at all. How long a disequilibrium takes to relax depends on mantle viscosity, which isostasy never mentions — that is precisely the extra physics in [4.6](04-06-mantle-rheology-post-glacial-rebound.md), and why post-glacial rebound is a viscosity measurement rather than an isostasy measurement.

## One-liner

> Below the depth of compensation the pressure must be equal everywhere, so every mountain is paid for by a mass deficit beneath it — as a light root if the crust thickened, as light rock if it got hot.

## Problems

**P1 (🟢)** A mountain range stands 3.2 km above the surrounding plains. Take $\rho_c = 2750$ and $\rho_m = 3300\ \mathrm{kg\,m^{-3}}$. (a) Compute the Airy root. (b) If the reference crustal thickness is 32 km, what is the total crustal thickness under the range? (c) Estimate the Bouguer anomaly the root would produce.

**P2 (🟡)** An oceanic basin has a water depth of 4.5 km; the adjacent continental shelf stands at sea level. Take $\rho_w = 1030$, $\rho_c = 2800$, $\rho_m = 3300\ \mathrm{kg\,m^{-3}}$. (a) Compute the Airy antiroot — by how much is the crust thinner beneath the basin? (b) If the shelf crust is 30 km thick, how thick is the crust under the basin? (c) Comment on whether that is a plausible oceanic crustal thickness, and what the discrepancy tells you.

**P3 (🔴, bridges to [4.6](04-06-mantle-rheology-post-glacial-rebound.md))** The Antarctic ice sheet is about 2.5 km thick with $\rho_i = 917\ \mathrm{kg\,m^{-3}}$, resting on continental crust; $\rho_m = 3300$. (a) Compute the isostatic depression of the bedrock. (b) Much of the West Antarctic bedrock currently lies 1 to 2 km below sea level. Comment on how much of that is the ice's doing. (c) If the ice sheet melted completely, compute the final equilibrium bedrock elevation change, and state which parts of the answer isostasy alone can and cannot supply. (d) Fennoscandia, deglaciated 10,000 years ago, is still rising at up to 9 mm/yr with an estimated 100 m of uplift still to come. Use the depression formula to estimate the thickness of the ice sheet that sat there, given that about 750 m of rebound has already occurred.

<details>
<summary>Solutions</summary>

**P1** (a) $$r = h\frac{\rho_c}{\rho_m-\rho_c} = 3.2\times\frac{2750}{550} = 3.2\times5.0 = 16.0\ \mathrm{km}.$$

(b) $$32 + 16 = 48\ \mathrm{km}.$$

(c) The root replaces mantle with crust, so $\Delta\rho = 2750-3300 = -550\ \mathrm{kg\,m^{-3}}$ over 16 km:
$$\Delta g \approx 2\pi G\Delta\rho\,r = 4.1932\times10^{-10}\times(-550)\times1.6\times10^{4} = -3.69\times10^{-3}\ \mathrm{m\,s^{-2}} = -369\ \mathrm{mGal}.$$

**P2** (a) $$r_{\text{anti}} = d\frac{\rho_c-\rho_w}{\rho_m-\rho_c} = 4.5\times\frac{2800-1030}{500} = 4.5\times\frac{1770}{500} = 4.5\times3.54 = 15.9\ \mathrm{km}.$$

(b) $$30 - 15.9 = 14.1\ \mathrm{km}.$$

(c) Real oceanic crust is about **7 km** thick, so the Airy prediction of 14 km is roughly double. The model has not failed so much as been applied outside its domain: the calculation assumed the only difference between the two columns is crustal thickness, with identical mantle beneath. In reality **oceanic and continental mantle differ**, and oceanic lithosphere is cooler and denser than the continental mantle at the same depth because it has been cooling from a ridge ([4.3](04-03-cooling-oceanic-lithosphere.md)).

The honest conclusion is that the continent–ocean elevation difference is *not* a pure Airy problem. It is a combination of a genuine crustal thickness contrast (30 km against 7 km, which is most of it) and a Pratt-style density contrast in the mantle. Getting the right answer requires both mechanisms — which is the general situation, and the reason "Airy or Pratt?" is better asked as "how much of each?"

**P3** (a) $$w = t\frac{\rho_i}{\rho_m} = 2.5\times\frac{917}{3300} = 2.5\times0.2779 = 0.69\ \mathrm{km}.$$

About **700 m** of depression.

(b) Roughly a third to a half. If West Antarctic bedrock lies 1 to 2 km below sea level and the ice accounts for about 0.7 km, then between 0.3 and 1.3 km of that depth is **not** the ice's doing — it is genuinely low-standing crust, thinned by the West Antarctic Rift System. This distinction is not academic: a bed that is below sea level *even after* rebound is a bed that seawater can reach, which is the geometric precondition for marine ice-sheet instability. The isostatic calculation is what separates "temporarily pushed down" from "permanently below sea level".

(c) Complete melting removes the load, and the equilibrium response is **+700 m of uplift**, plus the additional complication that global sea level rises by several metres, partly offsetting the change in *relative* elevation.

Isostasy supplies the final equilibrium number and nothing else. What it cannot supply:
- **how long it takes** — that is set by mantle viscosity and load wavelength, and is [4.6](04-06-mantle-rheology-post-glacial-rebound.md)'s subject;
- **the spatial pattern** — the elastic lithosphere spreads the response over a region wider than the ice sheet, producing a peripheral forebulge ([2.6](02-06-flexure-of-the-lithosphere.md));
- **the intermediate states** — including the possibility that rebound outpaces sea-level rise locally, which changes the ice sheet's own stability during the transient.

(d) Total rebound is what has happened plus what remains:

$$w_{\text{total}} = 750 + 100 = 850\ \mathrm{m}.$$

$$t = w_{\text{total}}\frac{\rho_m}{\rho_i} = 850\times\frac{3300}{917} = 850\times3.599 = 3059\ \mathrm{m}.$$

**About 3 km of ice** over Fennoscandia at the last glacial maximum — which is close to independent glaciological reconstructions of the Scandinavian ice sheet, and is one of the cleanest examples in geophysics of reading a vanished object off the shape of what it was sitting on. Note what made it work: the *remaining* uplift was needed, because rebound is asymptotic and the present elevation is not the final one. Measuring that remaining 100 m is a modern geodetic result ([2.7](02-07-space-geodesy.md)), and the rate at which it is being paid off is the viscosity measurement of [4.6](04-06-mantle-rheology-post-glacial-rebound.md).

</details>

## Flashback

**From Lesson 2.2 (Gravity anomalies and reductions):** A station at latitude 30.000° and elevation 2200 m reads $g_{\text{obs}} = 9.788500\ \mathrm{m\,s^{-2}}$, with a terrain correction of $+6.1$ mGal and $\gamma(30^\circ) = 9.793250\ \mathrm{m\,s^{-2}}$. (a) Compute the free-air anomaly. (b) Compute the Bouguer anomaly. (c) Say whether the topography here appears compensated.

<details>
<summary>Solution</summary>

(a) In mGal: $g_{\text{obs}} = 978{,}850.0$, $\gamma = 979{,}325.0$.
$$\Delta g_{FA} = 978{,}850.0 - 979{,}325.0 + 0.3086\times2200 = -475.0 + 678.9 = +203.9\ \mathrm{mGal}.$$

(b) $$g_B = 0.1119\times2200 = 246.2\ \mathrm{mGal},$$
$$\Delta g_B = 203.9 - 246.2 + 6.1 = -36.2\ \mathrm{mGal}.$$

(c) **No — this topography looks largely uncompensated.** The signature is diagnostic and it is the reverse of Example 1's: a large *positive* free-air anomaly (+204 mGal) says the topographic mass is being felt at the surface without an offsetting deficit below, and the small Bouguer anomaly ($-36$ mGal) says that once the visible rock is removed there is almost nothing anomalous left underneath. Compare the compensated case, where free-air is near zero and Bouguer is hugely negative.

Something other than a root is holding this ground up. The candidates are lithospheric flexural strength — a narrow load, such as a volcano or a young uplift, supported regionally rather than locally ([2.6](02-06-flexure-of-the-lithosphere.md)) — or dynamic support from mantle flow ([4.4](04-04-mantle-convection-rayleigh-number.md)). Either way the region is out of isostatic equilibrium, which also means it is not in a steady state: uncompensated topography is either young, or actively maintained, or both.

</details>

## Connections

- **Backward:** the free-air and Bouguer anomalies whose signatures diagnose compensation are [2.2](02-02-gravity-anomalies-reductions.md)'s; the slab formula used for every root calculation here is the same one.
- **Forward:** [2.6](02-06-flexure-of-the-lithosphere.md) replaces the independent-piston assumption with a bending plate, which is what actually supports narrow loads; [4.3](04-03-cooling-oceanic-lithosphere.md) turns Example 2's Pratt argument into the $\sqrt{t}$ subsidence law; [4.6](04-06-mantle-rheology-post-glacial-rebound.md) adds the time dimension isostasy lacks; and [2.7](02-07-space-geodesy.md) measures the resulting motions directly.
- **Sideways:** this is Archimedes' principle with $\rho_c$ and $\rho_m$ in place of ice and seawater, and the iceberg analogy is exact rather than decorative. [`geology` 2.6](../../geology/lessons/02-06-mountain-building.md) uses these results to explain why no continental plateau stands much above 5 km — over-thickened crust has too much gravitational potential energy and spreads sideways — and cites this lesson for the quantitative treatment. The buoyancy bookkeeping is the same as the hydrostatic-equilibrium argument for planetary interiors in [`planetary-science`](../../planetary-science/syllabus.md) 2.1.
