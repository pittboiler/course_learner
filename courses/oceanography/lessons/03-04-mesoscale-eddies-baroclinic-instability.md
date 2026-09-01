# Physical Oceanography · Lesson 3.4: Mesoscale eddies and ocean baroclinic instability

> ⏱ ~15 min · Module 3: The wind-driven circulation · Builds on: [1.4](01-04-stratification-buoyancy-frequency.md), [3.3](03-03-gulf-stream-kuroshio.md), [atmospheric-science 4.5](../../atmospheric-science/lessons/04-05-air-masses-fronts-cyclones.md) · Unlocks: [6.1](06-01-southern-ocean-hinge.md), [6.2](06-02-ocean-heat-uptake-circulation.md)

## Why this matters

[atmospheric-science 4.5](../../atmospheric-science/lessons/04-05-air-masses-fronts-cyclones.md) built baroclinic instability and used it to explain mid-latitude weather: a sloping density field stores available potential energy, and the fluid releases it by growing waves that flatten the slopes. That mechanism transfers directly to the ocean. What does not transfer is the **scale**, and the consequences of the scale change are so large that the ocean's version barely resembles the atmosphere's.

The deformation radius — the length at which rotation and stratification balance, and therefore the size the instability prefers — is about 1000 km in the atmosphere and about **30 km** in the ocean. A factor of thirty in length, a thousand in area. The atmosphere fits a handful of these across a hemisphere, so its baroclinic eddies are the recognizable, individually named highs and lows of a weather map. The ocean fits thousands, and they are anonymous, ubiquitous, and carry roughly **ten times more kinetic energy than the mean circulation does**. That last fact is the one that changes everything: the ocean's "mean" flow is a small residual in a violently eddying field, and until satellite altimetry showed this in the 1980s, nobody knew.

## The idea

**Sloping isopycnals are a loaded spring.** Wherever dense water lies alongside light water rather than beneath it, the fluid holds potential energy it could release by flattening — and thermal wind ([2.2](02-02-thermal-wind-acc.md)) says that any vertically sheared current *is* such a configuration. So every strong current is a store of available potential energy, and baroclinic instability is the mechanism that spends it.

**The instability picks the deformation radius.** Disturbances much smaller than $L_d$ are dominated by rotation and cannot lift fluid efficiently; much larger, and the $\beta$-effect stabilizes them. The fastest-growing wave has a wavelength of a few times $L_d$, and the eddies that emerge are correspondingly sized.

**The ocean's $L_d$ is small because the ocean is thin and weakly stratified — in the way that matters.** $L_d$ scales as $NH/f$. The ocean's $N$ in the thermocline is comparable to the atmosphere's, but the *depth-averaged* $N$ over a 4000 m column is much smaller, because most of the ocean is nearly unstratified abyss. Combine a small effective $N$ with a depth of 4 km rather than 10 km and you get tens of kilometres instead of a thousand.

**And smallness is what makes eddies dominate.** Eddy kinetic energy scales with the shear that generates it, but the *mean* flow in the ocean interior is feeble — millimetres to centimetres per second ([3.1](03-01-sverdrup-balance-interior-gyre.md)). Eddies reach tens of centimetres per second. Squaring, the eddies win by one to two orders of magnitude over most of the ocean.

**What the eddies do.** They are not noise. They flatten the isopycnals that generated them, which means they transport buoyancy — and hence heat — *down-gradient*, poleward. In the Southern Ocean, where there is no western boundary to close a gyre, eddies carry essentially the entire poleward heat transport. They also limit how steep the ACC's isopycnals can get, which is why strengthening the westerlies increases the eddy field rather than the ACC transport ([6.1](06-01-southern-ocean-hinge.md)).

## The formal version

**The deformation radius.** For the first baroclinic mode,

$$\boxed{\ L_d = \frac{c_1}{|f|}, \qquad c_1 = \frac{1}{\pi}\int_{-H}^{0} N\,dz\ }$$

*In words: the deformation radius is the speed of the gravest internal gravity wave divided by the Coriolis parameter — the distance such a wave travels in one rotation time.* The commonly quoted $L_d = NH/f$ is this with $N$ interpreted as a depth average and the factor $\pi$ dropped; it is a scaling, not an identity, and using the thermocline's peak $N$ in it overestimates $L_d$ by a factor of three.

| | $c_1$ or $NH$ | $|f|$ at 45° | $L_d$ |
|---|---|---|---|
| Ocean | $c_1 \approx 2\ \mathrm{m\,s^{-1}}$ | $1.03\times10^{-4}$ | **19 km** |
| Ocean at 30° | $c_1 \approx 2.6\ \mathrm{m\,s^{-1}}$ | $7.29\times10^{-5}$ | **36 km** |
| Ocean at 10° | $c_1 \approx 2.8\ \mathrm{m\,s^{-1}}$ | $2.53\times10^{-5}$ | **110 km** |
| Atmosphere | $NH = 10^{-2}\times10^{4} = 100\ \mathrm{m\,s^{-1}}$ | $1.03\times10^{-4}$ | **970 km** |

**A factor of thirty to fifty.** Note also that $L_d$ grows sharply toward the equator, which is why tropical eddies are large and polar ones (10 km or less) are the hardest thing in the ocean to model.

**Eddy energetics.** Define the mean and eddy kinetic energies per unit mass,

$$\mathrm{MKE} = \tfrac12\left(\bar u^2 + \bar v^2\right), \qquad \mathrm{EKE} = \tfrac12\overline{\left(u'^2+v'^2\right)}.$$

| Region | EKE | MKE | Ratio |
|---|---|---|---|
| Gulf Stream / Kuroshio | $0.1$ to $0.2\ \mathrm{m^2\,s^{-2}}$ | $0.02$ | 5 to 10 |
| Antarctic Circumpolar Current | $0.05$ | $0.01$ | 5 |
| Subtropical gyre interior | $0.005$ | $0.0001$ | 50 |
| Atmosphere, mid-latitude | comparable to MKE | — | about 1 |

*In words: in the ocean the eddies carry most of the energy nearly everywhere, and overwhelmingly so in the quiet interior; in the atmosphere they do not.*

**Eddy transport.** Decompose a flux into mean and eddy parts:

$$\overline{v\,b} = \bar v\,\bar b + \overline{v'b'},$$

with $b = -g\rho'/\rho_0$ the buoyancy. The eddy term $\overline{v'b'}$ is directed **down the mean buoyancy gradient**, and is usually parameterized as a diffusion,

$$\overline{v'b'} = -K\frac{\partial \bar b}{\partial y}, \qquad K \approx 500\text{ to }2000\ \mathrm{m^2\,s^{-1}}.$$

*In words: eddies act like a very large horizontal diffusivity, flattening whatever gradient made them.* In models that cannot resolve eddies this is implemented as the **Gent–McWilliams** scheme, which flattens isopycnals while conserving water-mass properties — its introduction in 1990 removed a long-standing spurious deep convection problem in coarse ocean models and is one of the most consequential parameterizations in climate modelling.

**Resolution: permitting versus resolving.** To represent an eddy of size $L_d$ a model needs a grid spacing of at most $L_d/2$, and realistically $L_d/4$ for the instability to grow at the right rate.

| Resolution | Grid at 45°N | Verdict at 45° |
|---|---|---|
| 1° | 78 km | no eddies at all |
| 1/4° | 20 km | **eddy-permitting**: eddies exist but are too large, too weak, too few |
| 1/12° | 6.5 km | **eddy-resolving** at mid-latitudes |
| 1/12° at 60° | 4.6 km, $L_d\approx10$ km | marginal |

*In words: the standard "high-resolution" climate ocean model of the 2020s is only just eddy-resolving at mid-latitudes and is not eddy-resolving anywhere poleward of about 55 degrees.* This is not a detail. It is why coupled climate models still need Gent–McWilliams, and why the Southern Ocean — where $L_d$ is smallest and eddies matter most — is the hardest region to simulate.

## Picture

![Two panels at the same scale. On the left, three concentric grey circles represent a mid-latitude atmospheric cyclone 2000 km across, with a scale bar showing 500 km. A small blue dot at its centre, only 6 pixels across, is an ocean mesoscale eddy 100 km across drawn to the same scale. On the right, the same ocean eddy magnified twenty times, with concentric blue rings, a coral arrow marking a rim speed of 0.3 m per second, and its own 50 km scale bar. Labels give the deformation radius as about 1000 km in the atmosphere and about 30 km in the ocean](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — deformation radius and eddy size).** A mid-latitude station at 40°N has a depth-averaged buoyancy frequency of $N = 3.0\times10^{-3}\ \mathrm{s^{-1}}$ over a water column of $H = 4500\ \mathrm{m}$, and $f = 9.37\times10^{-5}\ \mathrm{s^{-1}}$.

(a) *First-baroclinic wave speed.*
$$c_1 = \frac{NH}{\pi} = \frac{3.0\times10^{-3}\times4500}{\pi} = \frac{13.5}{3.1416} = 4.30\ \mathrm{m\,s^{-1}}.$$

(b) *Deformation radius.*
$$L_d = \frac{c_1}{f} = \frac{4.30}{9.37\times10^{-5}} = 4.59\times10^{4}\ \mathrm{m} = 46\ \mathrm{km}.$$

(c) *Expected eddy diameter.* The fastest-growing baroclinic wave has a wavelength of roughly $2\pi L_d$ to $4 L_d$; the resulting vortices are about half a wavelength across, so

$$D_{\text{eddy}} \approx 2\text{ to }4\,L_d = 90\text{ to }180\ \mathrm{km},$$

matching the observed 100 to 200 km diameters of Gulf Stream rings.

(d) *Model grid required.* $\Delta x \le L_d/4 = 11.5\ \mathrm{km}$, which at 40°N is about $1/9^\circ$ — beyond most current coupled climate models.

**Example 2 (why you'd care — the atmosphere as a control experiment).** The atmosphere and ocean run the same instability with the same physics. Explain quantitatively why the atmosphere's eddies are named and forecast while the ocean's are anonymous and, for practical purposes, unforecastable.

*Scale, and how many fit.* A hemisphere at mid-latitudes has a zonal circumference of about $2.8\times10^{7}\ \mathrm{m}$. The number of eddies that fit around it is roughly the circumference divided by the eddy wavelength, $2\pi L_d$:

$$n_{\text{atm}} = \frac{2.8\times10^{7}}{2\pi\times9.7\times10^{5}} = \frac{2.8\times10^{7}}{6.1\times10^{6}} = 4.6,$$
$$n_{\text{ocean}} = \frac{2.8\times10^{7}}{2\pi\times1.9\times10^{4}} = \frac{2.8\times10^{7}}{1.19\times10^{5}} = 235.$$

**Four or five atmospheric cyclones circle the globe; two hundred ocean eddies do.** Four objects can be individually tracked, named and forecast. Two hundred cannot, and their collective effect is better described statistically — which is exactly why the ocean's eddies are handled as a diffusivity and the atmosphere's are handled as weather.

*Timescale.* The eddy turnover time is $L_d/U$:

$$t_{\text{atm}} = \frac{9.7\times10^{5}}{20} = 4.9\times10^{4}\ \mathrm{s} = 0.6\ \mathrm{day}, \qquad t_{\text{ocean}} = \frac{1.9\times10^{4}}{0.3} = 6.3\times10^{4}\ \mathrm{s} = 0.7\ \mathrm{day}.$$

**Almost identical.** That is a genuinely surprising coincidence and it is not one: both are set by $1/f$ times a Rossby number, and both fluids have Rossby numbers of order $0.1$ on their eddy scale. What differs is not how fast an eddy turns over but how long it *lives* relative to how long it takes to cross its basin — the atmosphere's eddies traverse a basin in days, the ocean's in years, so the ocean's eddies live and die essentially in place.

*Observability.* An atmospheric cyclone is resolved by a radiosonde network with 300 km spacing. A 30 km ocean eddy is not resolved by any in-situ network that has ever existed — the Argo array's spacing is 300 km. It took satellite altimetry, with 7 km along-track resolution and global coverage, to reveal that the ocean is full of them; before 1978, the ocean was widely believed to be laminar.

*The point.* **Two fluids running identical physics can produce qualitatively different phenomenology purely through one length scale.** The deformation radius controls the eddy size, the eddy size controls how many fit in a basin, and how many fit controls whether the right description is deterministic tracking or statistical parameterization. When comparing two systems governed by the same equations, the first thing to compare is not the forcing but the ratio of the intrinsic length scale to the domain.

## Watch out

- **You might think** ocean eddies are surface features. **Actually** mesoscale eddies extend through most of the water column and Gulf Stream rings reach the sea floor. Their surface expression in sea-surface height is 10 to 50 cm — which is why altimetry sees them — but their mass and energy are at depth.
- **You might think** $L_d = NH/f$ with $N$ from the pycnocline. **Actually** $N$ must be the depth average over the whole column, which is three to five times smaller than the pycnocline peak. Using the peak gives $L_d \approx 100$ km rather than 30, and the resulting eddies are four times too big.
- **You might think** an "eddy-permitting" model is good enough. **Actually** eddy-permitting models produce eddies that are systematically too large and too weak, and their eddy fluxes are wrong by a factor that is not simply a scaling. The standard practice of using Gent–McWilliams *and* a 1/4° grid double-counts in some regions and under-counts in others, and it is a known open problem.

## One-liner

> The ocean runs the same baroclinic instability as the atmosphere at a deformation radius thirty times smaller, so instead of four named cyclones circling a hemisphere it has two hundred anonymous eddies that carry ten times the kinetic energy of the mean flow — invisible until satellite altimetry, and still not resolved by climate models poleward of about 55 degrees.

## Problems

**P1 (🟢)** At 55°S, $|f| = 1.194\times10^{-4}\ \mathrm{s^{-1}}$ and the first-baroclinic wave speed is $c_1 = 1.4\ \mathrm{m\,s^{-1}}$. (a) Compute $L_d$. (b) Estimate the eddy diameter as $3L_d$. (c) Compute the model grid spacing required to resolve these eddies at $L_d/4$, and express it as a fraction of a degree of longitude at that latitude.

**P2 (🟡)** In the subtropical gyre interior, the mean flow is $\bar u = 1.0\ \mathrm{cm\,s^{-1}}$ and eddy velocities have a root-mean-square of $8\ \mathrm{cm\,s^{-1}}$. (a) Compute MKE, EKE and their ratio. (b) A float released here is advected by both. Compute how far the mean flow carries it in one year, and compare with the eddy diffusive spread $\sqrt{4Kt}$ with $K = 1000\ \mathrm{m^2\,s^{-1}}$. (c) State which dominates the float's displacement after one year, after ten years, and give the crossover time.

**P3 (🔴, optional)** The Southern Ocean's eddy field flattens the ACC's isopycnals while the wind steepens them, and the observed slope is where the two balance. Model the balance as $\tau/(\rho_0 f) = K\,s$, where $s$ is the isopycnal slope, $\tau$ the wind stress, and $K$ the eddy diffusivity. (a) With $\tau = 0.15\ \mathrm{N\,m^{-2}}$, $|f| = 1.2\times10^{-4}$, $\rho_0 = 1027$ and $s = 1.2\times10^{-3}$, compute the implied $K$. (b) The westerlies strengthen by 40 percent. If $K$ were fixed, compute the new slope and the fractional change in ACC transport, using the thermal-wind result that transport scales as $s$. (c) Observations show the ACC transport has changed by only a few percent under a comparable wind increase. Infer how $K$ must have responded, and name the phenomenon. (d) Comment on what this implies for the Southern Ocean's uptake of heat and carbon under continued wind strengthening.

<details>
<summary>Solutions</summary>

**P1** (a) $$L_d = \frac{c_1}{|f|} = \frac{1.4}{1.194\times10^{-4}} = 1.17\times10^{4}\ \mathrm{m} = 11.7\ \mathrm{km}.$$

(b) $$D \approx 3L_d = 35\ \mathrm{km}.$$

(c) $$\Delta x \le \frac{L_d}{4} = 2.9\ \mathrm{km}.$$

One degree of longitude at 55°S is $111\times\cos55^\circ = 63.7\ \mathrm{km}$, so

$$\frac{2.9}{63.7} = 0.046^\circ \approx \frac{1}{22}^\circ.$$

**A 1/22° grid** — finer than any current global coupled climate model, and this is in the region where eddy transport matters most for heat and carbon uptake. The Southern Ocean is the worst case in the ocean for exactly the reason it is the most important: $L_d$ shrinks as $1/f$ toward the pole.

**P2** (a) $$\mathrm{MKE} = \tfrac12(0.01)^2 = 5.0\times10^{-5}\ \mathrm{m^2\,s^{-2}},$$
$$\mathrm{EKE} = \tfrac12(0.08)^2 = 3.2\times10^{-3}\ \mathrm{m^2\,s^{-2}},$$
$$\frac{\mathrm{EKE}}{\mathrm{MKE}} = 64.$$

(b) One year $= 3.156\times10^{7}\ \mathrm{s}$.

$$L_{\text{mean}} = 0.01\times3.156\times10^{7} = 3.16\times10^{5}\ \mathrm{m} = 316\ \mathrm{km},$$
$$L_{\text{eddy}} = \sqrt{4Kt} = \sqrt{4\times1000\times3.156\times10^{7}} = \sqrt{1.262\times10^{11}} = 3.55\times10^{5}\ \mathrm{m} = 355\ \mathrm{km}.$$

(c) After one year they are essentially equal — 316 km against 355 km. After ten years,

$$L_{\text{mean}} = 3160\ \mathrm{km}, \qquad L_{\text{eddy}} = \sqrt{10}\times355 = 1123\ \mathrm{km},$$

so the **mean flow dominates**.

The crossover is where $\bar u t = \sqrt{4Kt}$, i.e. $t = 4K/\bar u^2$:

$$t = \frac{4\times1000}{(0.01)^2} = 4.0\times10^{7}\ \mathrm{s} = 1.27\ \mathrm{yr}.$$

The structure is generic and worth keeping: **displacement by advection grows linearly in time while displacement by diffusion grows as the square root, so diffusion always wins at short times and advection always wins at long times**, with a crossover set by $4K/\bar u^2$. Here that is about fifteen months. So a float tracked for a season tells you almost nothing about the mean circulation — its motion is nearly all eddies — while the same float tracked for a decade traces the gyre cleanly. This is exactly why Argo's value for mapping the mean circulation grew so sharply once the array had a decade of data behind it.

**P3** (a) $$K = \frac{\tau}{\rho_0 |f|\,s} = \frac{0.15}{1027\times1.2\times10^{-4}\times1.2\times10^{-3}} = \frac{0.15}{1.479\times10^{-4}} = 1014\ \mathrm{m^2\,s^{-1}}.$$

About $1000\ \mathrm{m^2\,s^{-1}}$ — squarely within the observed range, which is a genuine consistency check on the balance rather than a fit.

(b) With $K$ fixed, $s \propto \tau$:

$$s_{\text{new}} = 1.4\times1.2\times10^{-3} = 1.68\times10^{-3},$$

and since the thermal-wind transport scales with the isopycnal slope, the ACC transport would rise by **40 percent** — from about 173 Sv to 242 Sv.

(c) Observed transport change is a few percent, so $s$ has barely changed. From $\tau/(\rho_0f) = Ks$, if $\tau$ rises 40 percent and $s$ is nearly fixed, then

$$K_{\text{new}} \approx 1.4\,K_{\text{old}} \approx 1420\ \mathrm{m^2\,s^{-1}}.$$

**The eddy field absorbs the extra wind forcing.** The phenomenon is **eddy saturation**: the ACC's transport is insensitive to the wind stress because a steeper isopycnal slope is more baroclinically unstable, which generates more eddies, which flatten it back. The slope is set by the instability threshold, not by the wind.

(d) The implication is significant and it cuts against intuition. Stronger winds do **not** simply spin up the Southern Ocean's overturning and increase its uptake of heat and carbon. The wind-driven (Eulerian) overturning does strengthen — the northward Ekman transport is directly proportional to $\tau$ — but the eddy-driven counter-circulation strengthens with it, and the **residual** circulation, which is what actually transports properties, changes far less. This is **eddy compensation** (the transport analogue of eddy saturation), and it is why coarse-resolution climate models, which lack eddies and therefore cannot compensate, over-predict the Southern Ocean's response to the observed strengthening and poleward shift of the westerlies. It is one of the clearest cases in climate science where a missing small-scale process produces a large-scale error of the wrong sign, and [6.1](06-01-southern-ocean-hinge.md) develops it properly.

</details>

## Flashback

**From Lesson 3.2 (Western boundary currents — Stommel and Munk):** At 20°N, $\beta = 2.15\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$. (a) Compute the Munk boundary-layer width for $A_h = 1\times10^{4}\ \mathrm{m^2\,s^{-1}}$. (b) Compute the Stommel width that would match it, and give the required $r$. (c) State, in one sentence and without algebra, why no boundary layer of either kind can form on the eastern side of the basin.

<details>
<summary>Solution</summary>

(a) $$\delta_M = \left(\frac{1\times10^{4}}{2.15\times10^{-11}}\right)^{1/3} = \left(4.651\times10^{14}\right)^{1/3} = 7.75\times10^{4}\ \mathrm{m} = 77.5\ \mathrm{km}.$$

(b) $$\delta_S = \frac{r}{\beta} = 7.75\times10^{4} \;\Longrightarrow\; r = \beta\,\delta_S = 2.15\times10^{-11}\times7.75\times10^{4} = 1.67\times10^{-6}\ \mathrm{s^{-1}}.$$

(c) Because the frictional boundary-layer solution is an exponential whose decay direction is fixed by the sign of $\beta$ — it decays eastward, so it can only be attached to a coast that the interior lies *east* of, which is the western one; at an eastern coast the same solution would grow away from the wall instead of decaying into the interior.

*Check.* Worth remembering that the answer never mentions the hemisphere, the wind, or the basin. $\beta > 0$ everywhere on Earth, so western intensification is universal — and the deeper version of the same statement, from [2.5](02-05-potential-vorticity-stratified-ocean.md), is that Rossby-wave energy cannot escape a western boundary but can escape an eastern one.

</details>

## Connections

- **Backward:** the instability mechanism is [atmospheric-science 4.5](../../atmospheric-science/lessons/04-05-air-masses-fronts-cyclones.md)'s, the sloping isopycnals that store the energy are [2.2](02-02-thermal-wind-acc.md)'s thermal wind, $N$ comes from [1.4](01-04-stratification-buoyancy-frequency.md), and the unstable jet is [3.3](03-03-gulf-stream-kuroshio.md)'s Gulf Stream.
- **Forward:** eddy saturation and compensation are the heart of [6.1](06-01-southern-ocean-hinge.md); eddy stirring is what erodes water-mass cores in [4.1](04-01-water-masses-world-ocean.md) and sets the lateral mixing rate assumed in [2.5](02-05-potential-vorticity-stratified-ocean.md); and eddy transport of heat into the ocean interior is part of the uptake in [6.2](06-02-ocean-heat-uptake-circulation.md).
- **Sideways (turbulence):** the ocean's eddy field is two-dimensional turbulence with an inverse energy cascade — energy injected at $L_d$ moves to *larger* scales, which is the opposite of the three-dimensional cascade of [`fluid-dynamics`](../../fluid-dynamics/syllabus.md). That inverse cascade is why eddies organize into zonal jets and why the mean flow can be maintained by its own instabilities rather than destroyed by them.
