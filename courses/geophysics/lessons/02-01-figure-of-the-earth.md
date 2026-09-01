# Geophysics · Lesson 2.1: The figure of the Earth

> ⏱ ~15 min · Module 2: Gravity, the figure of the Earth & geodesy · Builds on: [mechanics-refresher](../../mechanics-refresher/syllabus.md), [1.1](01-01-the-elastic-earth.md) · Unlocks: [2.2](02-02-gravity-anomalies-reductions.md), [2.4](02-04-the-geoid.md)

## Why this matters

Before you can say a gravity reading is anomalous, you must say what "normal" is. That turns out to require knowing the shape of the Earth, because gravity and shape are not two facts but one: a rotating fluid planet settles onto a surface of constant potential, and the same potential that fixes the shape fixes the gravity everywhere on it.

Getting this right is the foundation of the whole module. Every gravity anomaly in [2.2](02-02-gravity-anomalies-reductions.md), every isostatic calculation in [2.3](02-03-isostasy-airy-pratt.md) and the entire geoid of [2.4](02-04-the-geoid.md) are departures from the reference model built here. And there is a beautiful sting in the tail: the Earth is measurably *more* flattened than its current spin rate can justify, and the discrepancy is a fossil of the ice ages.

## The idea

**Gravity and centrifugal force are inseparable at the surface.** Standing on the rotating Earth you cannot distinguish the gravitational attraction of the mass beneath you from the centrifugal effect of going round in a circle once a day. What you weigh, and what a plumb line does, respond to the sum. So the useful object is the combined **geopotential**, and "gravity" $g$ in geophysics always means the gradient of that sum.

**A fluid planet takes the shape of an equipotential.** If it did not — if the surface cut across potential contours — there would be a downhill direction along the surface and material would flow until there wasn't. So the Earth's figure is a level surface of the geopotential, and the rotating case makes that surface an oblate **ellipsoid**: bulged 21 km at the equator, flattened by the same amount at the poles.

**The bulge then feeds back on the gravity field.** Extra mass at the equator adds its own attraction, which changes the potential, which changes the shape. Solving that self-consistently is the classical problem of the figure of the Earth, and its answer connects three numbers that can each be measured independently: the flattening $f$, the rotation parameter $m$, and the gravitational coefficient $J_2$ that describes the field's departure from spherical.

**Which gives a clean prediction of how gravity varies with latitude.** Two effects push in the same direction. At the equator you are further from the centre of mass *and* the centrifugal term is largest; at the poles you are closer and the centrifugal term vanishes. So gravity is smallest at the equator and largest at the poles — by about 0.5 percent, which is enormous compared with the anomalies a survey is looking for and must be subtracted with care.

**And the punchline: the Earth is too flat.** Compute the flattening a fluid Earth *should* have at the present rotation rate and you get a number about one percent smaller than the observed one. The Earth remembers being spun faster, and it also remembers the ice sheets that were sitting on it 20,000 years ago. Chasing that one percent leads directly to mantle viscosity ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)) and to the satellite measurements of [2.7](02-07-space-geodesy.md).

## The formal version

**The geopotential.** Combining gravitational and centrifugal parts, for a point at distance $r$ from the centre and distance $s$ from the rotation axis:

$$U = -\frac{GM}{r}\left[1 - J_2\left(\frac{a}{r}\right)^2 P_2(\cos\theta) + \dots\right] - \tfrac12\omega^2 s^2.$$

*In words: the gravitational potential of a slightly non-spherical mass, plus the centrifugal potential of the rotation.* Here $\theta$ is the colatitude, $P_2(x) = \tfrac12(3x^2-1)$ is the second Legendre polynomial, and $a$ is the equatorial radius. The sign convention is such that $\mathbf g = -\nabla U$.

**$J_2$, the dynamical form factor.** The dominant departure from a sphere:

$$J_2 = \frac{C-A}{Ma^2} = 1.08263\times10^{-3},$$

with $C$ the moment of inertia about the rotation axis and $A$ about an equatorial axis. *In words: $J_2$ measures how much more mass sits near the equator than a sphere would have, expressed as a difference of moments of inertia.* It is measured to eight digits by tracking satellite orbits, whose nodes precess at a rate proportional to it.

**The flattening and the rotation parameter.**

$$f = \frac{a-c}{a} = \frac{1}{298.257} = 3.3528\times10^{-3}, \qquad m = \frac{\omega^2a}{\gamma_e} = 3.4677\times10^{-3},$$

with $c$ the polar radius and $\gamma_e$ equatorial normal gravity. *In words: $f$ is how squashed the planet is; $m$ is the ratio of centrifugal to gravitational acceleration at the equator — roughly 1 part in 288.*

**The first-order relation between them.** To first order in small quantities,

$$\boxed{\ f \approx \frac32 J_2 + \frac{m}{2}\ }$$

*In words: the flattening comes half from the direct centrifugal push and half from the redistributed mass that push created.*

**Clairaut's theorem.** The corresponding statement about gravity:

$$\frac{\gamma_p - \gamma_e}{\gamma_e} = \frac52 m - f.$$

*In words: the fractional pole-to-equator gravity difference is fixed by the same two numbers as the shape.* This is a remarkable result, obtained by Clairaut in 1743: **you can measure the shape of the Earth without leaving the ground, purely by weighing things at different latitudes.**

**Normal gravity.** The gravity on the reference ellipsoid, as a function of geodetic latitude $\phi$ — the International Gravity Formula, in its 1967 form:

$$\gamma(\phi) = 9.780327\left(1 + 0.0053024\sin^2\phi - 0.0000058\sin^2 2\phi\right)\ \mathrm{m\,s^{-2}}.$$

This is what [2.2](02-02-gravity-anomalies-reductions.md) subtracts from every measurement.

**Units.** Gravity surveying uses the **gal**: $1\ \mathrm{Gal} = 10^{-2}\ \mathrm{m\,s^{-2}}$, and in practice the **milligal**, $1\ \mathrm{mGal} = 10^{-5}\ \mathrm{m\,s^{-2}}$. Earth gravity is about 981,000 mGal; a modern instrument resolves 0.01 mGal, roughly one part in $10^8$.

## Picture

![A cross-section through the rotating Earth. A dashed circle marks a sphere of equal volume; a blue ellipse drawn slightly wider than tall is the reference ellipsoid, with equatorial radius a of 6378 km and polar radius c of 6357 km marked, and a note that the difference is 21 km of bulge. A curved coral arrow at the pole marks the rotation, and a coral arrow at the equator marks the centrifugal acceleration of 0.034 metres per second squared. To the right, a graph of normal gravity against latitude rising smoothly from 9.780 at the equator through 9.806 at 45 degrees to 9.832 at the pole, labelled as what the ellipsoid alone predicts, with a note that everything a survey measures is the departure from this curve](assets/02-01-fig1.svg)

Half a percent from equator to pole. A buried ore body might produce one part in ten thousand of that.

## Worked examples

**Example 1 (mechanical — checking the classical relations).** Compute $m$ from first principles, use it with the measured $J_2$ to predict $f$, and compare with the observed flattening. Take $\omega = 7.292\times10^{-5}\ \mathrm{rad\,s^{-1}}$, $a = 6.378137\times10^{6}$ m, $\gamma_e = 9.7803\ \mathrm{m\,s^{-2}}$.

*The rotation parameter.*
$$\omega^2 a = (7.292\times10^{-5})^2\times6.378137\times10^{6} = 5.3173\times10^{-9}\times6.378137\times10^{6} = 3.3914\times10^{-2}\ \mathrm{m\,s^{-2}}.$$
$$m = \frac{3.3914\times10^{-2}}{9.7803} = 3.4677\times10^{-3}.$$

So the centrifugal acceleration at the equator is 33.9 mGal per... no — it is $3.39\times10^{-2}\ \mathrm{m\,s^{-2}} = 3390$ mGal, about one part in 288 of gravity. Small, but three hundred times larger than the biggest geological anomaly you will ever measure.

*Predicted flattening.*
$$f \approx \frac32 J_2 + \frac m2 = 1.5\times1.08263\times10^{-3} + \frac{3.4677\times10^{-3}}{2} = 1.6239\times10^{-3} + 1.7339\times10^{-3} = 3.3578\times10^{-3},$$
$$\text{i.e. } f \approx \frac{1}{297.8}.$$

Against the observed $1/298.257 = 3.3528\times10^{-3}$ — agreement to 0.15 percent, from a first-order formula. **The Earth's shape and its gravity field are the same fact, and the relation between them holds to three digits.**

*Clairaut's check.*
$$\frac{\gamma_p-\gamma_e}{\gamma_e} = \frac52 m - f = 8.6693\times10^{-3} - 3.3528\times10^{-3} = 5.3165\times10^{-3},$$
$$\gamma_p = 9.7803(1+5.3165\times10^{-3}) = 9.7803 + 0.0520 = 9.8323\ \mathrm{m\,s^{-2}},$$

against the measured polar gravity of 9.8322. ✓

**Example 2 (why you'd care — the one percent that will not go away).** A fluid, hydrostatic Earth in equilibrium with its present rotation should have $J_2^{\text{hyd}} \approx 1.072\times10^{-3}$. The observed value is $1.08263\times10^{-3}$. Quantify and interpret the excess.

$$\frac{\Delta J_2}{J_2} = \frac{1.08263 - 1.072}{1.072} = \frac{0.0106}{1.072} = 0.99\%.$$

**The Earth is about one percent more flattened than hydrostatic equilibrium allows.** Since $f \approx \tfrac32 J_2 + \tfrac m2$, that corresponds to roughly 100 m of excess equatorial bulge — a small number on a 21 km bulge, and a very large number to explain.

*Why it cannot simply be dismissed.* A fluid body relaxes to hydrostatic equilibrium on a timescale set by its viscosity. If the mantle were inviscid, the excess would have vanished instantly. That it persists means the mantle takes a long time to relax — and quantifying "long" turns the discrepancy into a **viscometer**.

*Two mechanisms, both real.*

- **A fossil bulge.** Tidal friction has been slowing the Earth's rotation for billions of years ([2.5](02-05-solid-earth-tides-rotation.md)). A viscous planet lags behind the shape appropriate to its current spin, retaining a memory of when it spun faster.
- **Glacial isostatic adjustment.** The Pleistocene ice sheets depressed the polar regions; since they melted, the mantle has been flowing back, and the process is not finished. This *is* observable in real time — satellite tracking shows $J_2$ changing measurably from decade to decade, a signal that would be inexplicable in a planet at equilibrium ([2.7](02-07-space-geodesy.md)).

- **Dynamic support from mantle convection.** Density anomalies in a convecting mantle deflect boundaries and support long-wavelength topography that is not in hydrostatic equilibrium at all ([4.4](04-04-mantle-convection-rayleigh-number.md)).

*The moral.* This is the first appearance in the course of a theme that will recur: **the Earth's departures from equilibrium are more informative than its equilibrium state.** The 21 km bulge tells you the planet rotates and is fluid on long timescales, which you knew. The 100 m of excess tells you the mantle's viscosity and what was sitting on the poles 20,000 years ago, which you did not. Extracting the number is [4.6](04-06-mantle-rheology-post-glacial-rebound.md).

## Watch out

- **You might think** the equatorial bulge exists because the centrifugal force pushes material outward, full stop. **Actually** that is only half of it, and the formula says so: $f \approx \tfrac32J_2 + \tfrac m2$, so the direct rotational term $m/2$ contributes less than the $\tfrac32 J_2$ term coming from the redistributed mass's own gravitational pull. The bulge is largely self-sustaining.
- **You might think** "latitude" is unambiguous. **Actually** geodesy distinguishes **geodetic** latitude (angle between the ellipsoid normal and the equatorial plane — what GPS reports) from **geocentric** latitude (angle at the centre of the Earth). They differ by up to 11 arcminutes at 45°, which is about 20 km on the ground. The gravity formula above uses geodetic latitude.
- **You might think** the reference ellipsoid is the sea-level surface. **Actually** it is a mathematical idealization that best fits the sea-level surface globally, and the real equipotential — the **geoid** — departs from it by up to about 100 m ([2.4](02-04-the-geoid.md)). Confusing the two is the single most common error in this module, and it is exactly the difference between an ellipsoidal height from GPS and an orthometric height above sea level.

## One-liner

> A spinning fluid planet takes the shape of a level surface, so its figure and its gravity field are two readings of one potential — and the small amount by which the Earth fails to match that prediction is a record of ice sheets and a measurement of mantle viscosity.

## Problems

**P1 (🟢)** (a) Compute normal gravity at latitude 30° using the International Gravity Formula. (b) Compute it at 60°. (c) Express the difference in mGal, and comment on its size relative to a typical crustal gravity anomaly of 50 mGal.

**P2 (🟡)** Mars has $a = 3396$ km, $\omega = 7.088\times10^{-5}\ \mathrm{rad\,s^{-1}}$, $g_e = 3.71\ \mathrm{m\,s^{-2}}$ and $J_2 = 1.96\times10^{-3}$. (a) Compute the rotation parameter $m$. (b) Predict the flattening from $f \approx \tfrac32 J_2 + m/2$. (c) The observed flattening of Mars is $5.89\times10^{-3}$. Compare, and comment on what a large discrepancy would imply. (d) Compute the equator-to-pole radius difference in km.

**P3 (🔴, bridges to [4.6](04-06-mantle-rheology-post-glacial-rebound.md))** The Earth's rotation is slowing at about 2.3 ms per century, so the length of day increases and the equilibrium flattening decreases. (a) Compute the fractional change in $\omega$ per million years. (b) Using $f \approx \tfrac32J_2 + m/2$ with $m \propto \omega^2$, and assuming $J_2$ adjusts so as to keep the planet hydrostatic, estimate the fractional decrease in $f$ per million years. (c) The observed excess flattening is about 1 percent. If the fossil-bulge explanation were the whole story, how far back would the Earth's shape have to be "remembering"? (d) Compare that with the Maxwell relaxation time of the mantle, $\tau_M = \eta/\mu$, using $\eta = 10^{21}$ Pa·s and $\mu = 1.4\times10^{11}$ Pa, and state what the comparison implies about whether the fossil bulge can be the dominant explanation.

<details>
<summary>Solutions</summary>

**P1** (a) At $\phi = 30^\circ$: $\sin^2\phi = 0.25$, $\sin^2 2\phi = \sin^2 60^\circ = 0.75$.
$$\gamma = 9.780327\left(1 + 0.0053024\times0.25 - 0.0000058\times0.75\right) = 9.780327(1 + 1.3256\times10^{-3} - 4.35\times10^{-6})$$
$$= 9.780327\times1.0013213 = 9.79325\ \mathrm{m\,s^{-2}}.$$

(b) At $\phi = 60^\circ$: $\sin^2\phi = 0.75$, $\sin^2 2\phi = \sin^2 120^\circ = 0.75$.
$$\gamma = 9.780327(1 + 3.9768\times10^{-3} - 4.35\times10^{-6}) = 9.780327\times1.0039725 = 9.81918\ \mathrm{m\,s^{-2}}.$$

(c) $$\Delta\gamma = 9.81918 - 9.79325 = 0.02593\ \mathrm{m\,s^{-2}} = 2593\ \mathrm{mGal}.$$

**Fifty times larger than a large crustal anomaly.** This is why the latitude correction is applied first and must be applied accurately: an error of just 1 km in the north–south position of a station at mid-latitudes produces a spurious anomaly of about 0.8 mGal, comparable to many real targets.

**P2** (a) $$\omega^2 a = (7.088\times10^{-5})^2\times3.396\times10^{6} = 5.0240\times10^{-9}\times3.396\times10^{6} = 1.7062\times10^{-2}\ \mathrm{m\,s^{-2}}.$$
$$m = \frac{1.7062\times10^{-2}}{3.71} = 4.599\times10^{-3}.$$

(b) $$f \approx 1.5\times1.96\times10^{-3} + \frac{4.599\times10^{-3}}{2} = 2.940\times10^{-3} + 2.300\times10^{-3} = 5.240\times10^{-3} = \frac{1}{191}.$$

(c) Observed $5.89\times10^{-3}$ against predicted $5.24\times10^{-3}$ — an excess of

$$\frac{5.89-5.24}{5.24} = 12\%.$$

**More than ten times the Earth's excess.** A large discrepancy of this kind means the planet's shape is substantially *not* in hydrostatic equilibrium — it is being held out of shape by something with strength or by active support. For Mars both apply: the planet has a thick, cold, strong lithosphere that can support loads elastically over geological time ([2.6](02-06-flexure-of-the-lithosphere.md)), and it carries the enormous Tharsis volcanic province, a single load big enough to reorient the entire planet's figure. **A planet's departure from hydrostatic shape is a measure of its strength**, and Mars — small, cold and rigid — has much more of it than Earth.

(d) $$a - c = f a = 5.89\times10^{-3}\times3396 = 20.0\ \mathrm{km}.$$

Almost exactly the Earth's 21 km, on a planet half the size — hence the much larger fractional flattening.

**P3** (a) The length of day $T$ increases by 2.3 ms per century, i.e. $2.3\times10^{-3}$ s per $10^2$ yr $= 2.3\times10^{-5}\ \mathrm{s\,yr^{-1}}$. Over $10^6$ yr, $\Delta T = 23$ s against $T = 86400$ s:

$$\frac{\Delta T}{T} = \frac{23}{86400} = 2.66\times10^{-4}\ \text{per Myr}.$$

Since $\omega = 2\pi/T$, $\Delta\omega/\omega = -\Delta T/T = -2.66\times10^{-4}$ per Myr.

(b) $m\propto\omega^2$, so $\Delta m/m = 2\Delta\omega/\omega = -5.3\times10^{-4}$ per Myr. For a hydrostatic planet the whole of $f$ scales with $m$ (both the direct term and the induced $J_2$ term are responses to rotation), so

$$\frac{\Delta f}{f} \approx -5.3\times10^{-4}\ \text{per Myr}.$$

(c) To accumulate a 1 percent excess at that rate:

$$t = \frac{0.01}{5.3\times10^{-4}\ \mathrm{Myr^{-1}}} = 19\ \mathrm{Myr}.$$

So the fossil-bulge story requires the Earth's shape to be lagging its equilibrium figure by roughly **20 million years**.

(d) $$\tau_M = \frac{\eta}{\mu} = \frac{10^{21}}{1.4\times10^{11}} = 7.1\times10^{9}\ \mathrm{s} = 226\ \mathrm{yr}.$$

**Four to five orders of magnitude too short.** A mantle with $\eta = 10^{21}$ Pa·s relaxes deviatoric stress in a few centuries and would have shed a rotational-lag bulge essentially instantly on a 20 Myr timescale. So the fossil-bulge explanation, in its simple form, **fails** — and this is the historically correct conclusion: it was proposed by Munk and MacDonald in the 1960s as an argument for a mantle viscosity around $10^{26}$ Pa·s, and post-glacial rebound data later showed the mantle is a hundred thousand times less viscous than that.

What survives instead are the two mechanisms that operate on the right timescales. **Glacial isostatic adjustment** works on exactly the few-thousand-year scale that $\tau_M$ permits, and is directly observed as a secular change in $J_2$; and **dynamic support from mantle convection**, which is not a memory at all but an ongoing, actively maintained departure from equilibrium. The lesson is a good one about geophysical inference: a beautiful explanation that predicts the right *sign* and the right *size* can still be excluded outright by a timescale argument, and the timescale is usually the thing worth checking first.

</details>

## Flashback

**From Lesson 1.6 (Earthquake sources and magnitude):** A subduction megathrust ruptures over an area 400 km long and 150 km wide with an average slip of 8 m, in rock with $\mu = 40$ GPa. (a) Compute the seismic moment. (b) Compute $M_w$. (c) The same fault produced an $M_w\,7.0$ thirty years earlier; by what factor did the moments differ?

<details>
<summary>Solution</summary>

(a) $$A = 4.0\times10^{5}\times1.5\times10^{5} = 6.0\times10^{10}\ \mathrm{m^2}.$$
$$M_0 = 4.0\times10^{10}\times6.0\times10^{10}\times8.0 = 1.92\times10^{22}\ \mathrm{N\,m}.$$

(b) $$M_w = \frac23\left(\log_{10}(1.92\times10^{22}) - 9.1\right) = \frac23(22.283 - 9.1) = \frac23(13.183) = 8.79.$$

(c) An $M_w\,7.0$ has $\log_{10}M_0 = 1.5\times7.0+9.1 = 19.6$, so $M_0 = 3.98\times10^{19}$ N·m.

$$\frac{1.92\times10^{22}}{3.98\times10^{19}} = 482.$$

Almost five hundred times — and note that this ratio is recoverable directly from the magnitude difference without either moment: $10^{1.5\times1.79} = 10^{2.685} = 484$. ✓ The small discrepancy is rounding in $M_w$.

</details>

## Connections

- **Backward:** the potential formalism and the centrifugal term are [`mechanics-refresher`](../../mechanics-refresher/syllabus.md)'s rotating-frame machinery; the moments of inertia in $J_2$ are the same $C$ and $A$ that will constrain the density profile in [5.1](05-01-free-oscillations-earth-density.md).
- **Forward:** [2.2](02-02-gravity-anomalies-reductions.md) subtracts normal gravity from every reading to define an anomaly; [2.4](02-04-the-geoid.md) replaces the ellipsoid with the true equipotential; and the excess flattening exposed in Example 2 is measured as a time-varying signal in [2.7](02-07-space-geodesy.md) and converted into a mantle viscosity in [4.6](04-06-mantle-rheology-post-glacial-rebound.md).
- **Sideways:** the Legendre expansion of the potential is the same multipole expansion used for the magnetic field in [3.1](03-01-the-main-field.md) — $J_2$ is a gravitational quadrupole exactly as the geomagnetic dipole is a magnetic one — and both are instances of the spherical-harmonic machinery in [`mathematical-methods-physics`](../../mathematical-methods-physics/syllabus.md). The rotational flattening of a self-gravitating fluid is the same calculation applied to stars and to the giant planets, whose much larger $J_2$ values are how their interior density distributions are constrained.
