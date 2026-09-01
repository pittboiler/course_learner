# Geophysics · Lesson 2.6: Flexure of the lithosphere

> ⏱ ~15 min · Module 2: Gravity, the figure of the Earth & geodesy · Builds on: [2.3](02-03-isostasy-airy-pratt.md), [2.2](02-02-gravity-anomalies-reductions.md) · Unlocks: [2.7](02-07-space-geodesy.md), [4.3](04-03-cooling-oceanic-lithosphere.md)

## Why this matters

[2.3](02-03-isostasy-airy-pratt.md) treated the lithosphere as a stack of independent pistons: put a load on a column, and that column sinks until buoyancy balances it. Real lithosphere is a plate. It has bending strength, so a load is carried not by the column beneath it but by a region hundreds of kilometres across — and the plate does not merely sag, it develops a raised **forebulge** ringing the depression.

This is not a refinement. It is the difference between the right and wrong answer for every load narrower than a few hundred kilometres: seamounts, volcanic islands, trenches, foreland basins, ice caps. It also delivers something isostasy never could — a measurement of the lithosphere's **strength**, expressed as an equivalent elastic thickness $T_e$, which turns out to track temperature and therefore age.

## The idea

**Two things resist a load, not one.** Isostasy has only buoyancy: push the plate down and the displaced mantle pushes back. Flexure adds bending stiffness: the plate resists being curved, and the resistance is enormous because it goes as the *cube* of the plate's thickness.

**Which means the plate has an intrinsic length scale.** Buoyancy acts locally (each bit of deflection is resisted where it happens); bending acts non-locally (curvature couples neighbouring points). Their ratio sets a distance — the **flexural parameter** $\alpha$ — over which a load's effect is spread. For oceanic lithosphere $\alpha$ is around 70 km, so a load's influence extends a few hundred kilometres.

**Loads broader than that are compensated; loads narrower are not.** A very wide load has nowhere to spread to, so bending gains it nothing and Airy isostasy is recovered exactly. A very narrow load is carried almost entirely by plate strength, with essentially no root at all. **The crossover happens near a wavelength of about $4.4\alpha$** — a few hundred kilometres — which is precisely the boundary that [2.2](02-02-gravity-anomalies-reductions.md) inferred from free-air anomalies without being able to explain.

**The forebulge is the signature, and it is diagnostic.** Bend a plate down in the middle and it must rise somewhere outside — like pressing on the centre of a floating sheet of plywood. The bulge sits at a predictable distance and has about four percent of the central depression's amplitude. Because both are set by $\alpha$, **measuring where the bulge is measures the plate's strength.**

**And that strength is a thermometer.** Oceanic lithosphere gets colder and stronger as it ages, and the measured $T_e$ tracks roughly the depth to the 450 °C isotherm — which deepens as $\sqrt{\text{age}}$, exactly as [4.3](04-03-cooling-oceanic-lithosphere.md) predicts. So flexure studies and thermal models check each other.

## The formal version

**The thin elastic plate equation.** For a plate floating on a substratum of density $\rho_m$, overlain by material of density $\rho_{\text{in}}$ (water, sediment or air), deflected downward by $w(x)$ under a load $q(x)$ per unit area:

$$\boxed{\ D\frac{d^4w}{dx^4} + \Delta\rho\,g\,w = q(x)\ }, \qquad \Delta\rho = \rho_m - \rho_{\text{in}}.$$

*In words: the load is supported partly by the plate's resistance to bending (the fourth-derivative term) and partly by buoyancy (the $w$ term).* Setting $D = 0$ recovers Airy isostasy, $w = q/(\Delta\rho g)$.

**Flexural rigidity.**

$$D = \frac{E\,T_e^{3}}{12(1-\nu^2)},$$

with $E$ Young's modulus (~70 GPa), $\nu$ Poisson's ratio (~0.25) and $T_e$ the **effective elastic thickness**. *In words: stiffness goes as the cube of thickness, so a plate twice as thick is eight times as stiff.* This cube is why flexure is such a sensitive probe: a 10 percent error in $D$ is only a 3 percent error in $T_e$.

**The flexural parameter.**

$$\alpha = \left(\frac{4D}{\Delta\rho\,g}\right)^{1/4}.$$

Every horizontal distance in a flexure problem is a multiple of $\alpha$.

**Line-load solution.** For a load $P$ per unit length applied at $x=0$ to a continuous plate:

$$w(x) = \frac{P\alpha^{3}}{8D}\,e^{-x/\alpha}\left(\cos\frac{x}{\alpha} + \sin\frac{x}{\alpha}\right).$$

*In words: a decaying oscillation — the plate sags, rises, and rings outward with rapidly shrinking amplitude.* Key features:

| Feature | Position | Amplitude |
|---|---|---|
| maximum depression $w_0$ | $x=0$ | $P\alpha^3/(8D)$ |
| zero crossing | $x = 3\pi\alpha/4 \approx 2.36\alpha$ | 0 |
| forebulge (peak uplift) | $x = \pi\alpha$ | $-e^{-\pi}w_0 = -0.0432\,w_0$ |

**Broken versus continuous plates.** At a subduction trench the plate is effectively **broken** — it terminates — and the solution changes: the depression is deeper and the bulge closer in, at $x = \pi\alpha/2$ rather than $\pi\alpha$. Choosing the right boundary condition matters when fitting real profiles.

**Degree of compensation.** For a sinusoidal load of wavenumber $k = 2\pi/\lambda$, the deflection is

$$w = \frac{q}{\Delta\rho\,g + Dk^4},$$

so the fraction of the Airy deflection actually achieved is

$$C(k) = \frac{1}{1 + Dk^4/(\Delta\rho g)} = \frac{1}{1 + (k\alpha)^4/4}.$$

*In words: compensation is complete at long wavelength and vanishes at short wavelength, with the changeover where $k\alpha = \sqrt2$.* That is

$$\lambda_c = \frac{2\pi\alpha}{\sqrt2} = 4.44\,\alpha.$$

**Typical elastic thicknesses.**

| Setting | $T_e$ |
|---|---|
| young oceanic lithosphere (<10 Ma) | 5–15 km |
| old oceanic lithosphere (>80 Ma) | 30–45 km |
| stable continental shields | 40–100 km |
| young, hot continental crust (e.g. Basin and Range) | <10 km |

Oceanic $T_e$ follows the depth to roughly the 450 °C isotherm — a temperature, not a rock type, is what sets where the plate stops behaving elastically.

## Picture

![A cross-section of a plate with a dashed line marking its undeflected position. A coral triangular load sits on the centre. The blue plate profile sags to a maximum depression w-zero directly beneath the load, forming a moat, crosses the undeflected line at a distance of three pi alpha over four, and rises to a forebulge at a distance of pi alpha with an amplitude of 4.3 percent of the central depression, pointing upward, before flattening out. Notes state that flexural rigidity goes as the cube of elastic thickness so elastic thickness is what a flexure study measures, and that the flexural parameter sets every horizontal distance in the picture. At the right, a graph of the degree of compensation against load width, rising from near zero for narrow loads to one for broad loads, with a coral marker at a wavelength of 4.4 alpha, labelled with broad loads being Airy compensated and narrow loads being held by the plate, and a note that for oceanic lithosphere the changeover is near 330 kilometres, which is why seamounts are not compensated and continents are](assets/02-06-fig1.svg)

The moat and the arch around Hawaii are this curve, drawn on the Pacific floor at real scale.

## Worked examples

**Example 1 (mechanical — the scale of an oceanic plate).** Old Pacific lithosphere has $T_e = 30$ km, $E = 70$ GPa, $\nu = 0.25$, loaded by a seamount, with $\rho_m = 3300$ and seawater $\rho_w = 1030\ \mathrm{kg\,m^{-3}}$, $g = 9.8\ \mathrm{m\,s^{-2}}$. Find $D$, $\alpha$, and the forebulge distance.

*Flexural rigidity.*
$$D = \frac{70\times10^{9}\times(3.0\times10^{4})^3}{12(1-0.0625)} = \frac{70\times10^{9}\times2.7\times10^{13}}{11.25} = \frac{1.89\times10^{24}}{11.25} = 1.68\times10^{23}\ \mathrm{N\,m}.$$

*Flexural parameter.*
$$\Delta\rho\,g = (3300-1030)\times9.8 = 2270\times9.8 = 2.2246\times10^{4}\ \mathrm{N\,m^{-3}}.$$
$$\alpha = \left(\frac{4\times1.68\times10^{23}}{2.2246\times10^{4}}\right)^{1/4} = \left(3.021\times10^{19}\right)^{1/4}.$$
$$\log_{10}(3.021\times10^{19}) = 19.480, \quad /4 = 4.870, \quad \alpha = 7.41\times10^{4}\ \mathrm{m} = 74\ \mathrm{km}.$$

*Forebulge.*
$$x_b = \pi\alpha = 3.1416\times74 = 233\ \mathrm{km}, \qquad \text{amplitude} = 0.0432\,w_0.$$

*Compensation crossover.*
$$\lambda_c = 4.44\alpha = 4.44\times74 = 329\ \mathrm{km}.$$

So around Hawaii, a bulge roughly 230 km from the island chain, and loads narrower than about 330 km carried by the plate rather than by a root. **Both are observed**: the Hawaiian Arch is a broad rise 200 to 300 km from the islands, standing a few hundred metres above the surrounding seafloor, and the islands themselves show large positive free-air anomalies — the signature of uncompensated load from [2.2](02-02-gravity-anomalies-reductions.md).

**Example 2 (why you'd care — reading plate strength off a trench).** A subduction zone shows an outer rise 140 km seaward of the trench axis, standing 400 m above the regional seafloor. Treating the plate as **broken** at the trench, so that the bulge lies at $x = \pi\alpha/2$, find $T_e$ and comment.

*Flexural parameter.*
$$\frac{\pi\alpha}{2} = 140\ \mathrm{km} \;\Rightarrow\; \alpha = \frac{280}{\pi} = 89.1\ \mathrm{km}.$$

*Rigidity.*
$$D = \frac{\alpha^4\,\Delta\rho\,g}{4} = \frac{(8.91\times10^{4})^4\times2.2246\times10^{4}}{4}.$$
$$(8.91\times10^{4})^4 = 6.30\times10^{19}; \quad \times2.2246\times10^{4} = 1.402\times10^{24}; \quad /4 = 3.50\times10^{23}\ \mathrm{N\,m}.$$

*Elastic thickness.*
$$T_e = \left(\frac{12D(1-\nu^2)}{E}\right)^{1/3} = \left(\frac{12\times3.50\times10^{23}\times0.9375}{7.0\times10^{10}}\right)^{1/3} = \left(\frac{3.938\times10^{24}}{7.0\times10^{10}}\right)^{1/3}$$
$$= \left(5.62\times10^{13}\right)^{1/3}: \quad \log_{10} = 13.750,\ /3 = 4.583, \quad T_e = 3.83\times10^{4}\ \mathrm{m} = 38\ \mathrm{km}.$$

*What this buys you.* A 38 km elastic thickness is characteristic of **old** oceanic lithosphere — 80 Myr or more. So the shape of the seafloor 140 km from a trench has told you the age of the plate about to be subducted, without a single sample or magnetic anomaly. Cross-checking against the magnetic stripe age ([3.4](03-04-magnetic-anomalies-reversals.md)) is a standard consistency test, and where the two disagree it usually means the plate has been thermally reset by a hotspot or is anomalously young.

*Two honest caveats.* First, "elastic thickness" is an **effective** quantity. Real lithosphere is not elastic all the way down — it is brittle near the top, ductile below ([`geology` 2.4](../../geology/lessons/02-04-how-rock-deforms.md)) — and $T_e$ is the thickness of the *equivalent* purely elastic plate that would bend the same way. Where curvature is extreme, as at a trench, the plate yields and $T_e$ inferred from bending underestimates the true mechanical thickness.

Second, the estimate depends on choosing broken versus continuous. Using the continuous formula $x_b = \pi\alpha$ instead would have given $\alpha = 44.6$ km and $T_e = 19$ km — a factor of two. **The boundary condition is not a detail**, and this is a recurring theme in geophysical inversion: the parameter you extract is only as good as the structural assumption you fitted it with, and the assumption is rarely determined by the data alone.

## Watch out

- **You might think** the forebulge is a small correction. **Actually** at 4.3 percent of a depression that can be several kilometres deep, it is hundreds of metres of topography, and it is often the *only* part of the flexural signal visible outside a basin. Foreland-basin forebulges control drainage patterns and produce regional unconformities in the stratigraphic record ([`geology` 4.4](../../geology/lessons/04-04-stratigraphy-facies-correlation.md)).
- **You might think** a larger elastic thickness means stronger rock. **Actually** it means *colder* rock. The mineralogy barely changes between young and old oceanic lithosphere; what changes is the depth to the isotherm below which the rock creeps rather than bends. $T_e$ is a thermal measurement wearing mechanical clothing.
- **You might think** flexure and isostasy are alternatives. **Actually** flexure *contains* isostasy: the compensation function $C(k)$ tends to 1 as $k\to0$, so any load broad enough is Airy-compensated exactly. Airy is the long-wavelength limit of flexure, not a competing model.

## One-liner

> A plate bends rather than sinking locally, so a load is spread over a distance set by the flexural parameter and ringed by a forebulge — and because bending stiffness goes as the cube of thickness, the shape of that bend measures how cold the plate is.

## Problems

**P1 (🟢)** Continental lithosphere has $T_e = 40$ km, $E = 70$ GPa, $\nu = 0.25$, $\rho_m = 3300$, and the flexural depression is filled with sediment of $\rho_s = 2400\ \mathrm{kg\,m^{-3}}$; $g = 9.8$. (a) Compute $D$. (b) Compute $\alpha$. (c) Compute the forebulge distance for a continuous plate.

**P2 (🟡)** A volcanic island applies a line load producing a central depression of 3.0 km. The lithosphere has $\alpha = 65$ km. (a) At what distance is the zero crossing? (b) Where is the forebulge and how high is it? (c) A survey finds the arch 210 km from the island. Is the assumed $\alpha$ consistent, and if not what should it be? (d) Recompute $T_e$ for your revised $\alpha$, taking $\Delta\rho g = 2.22\times10^{4}\ \mathrm{N\,m^{-3}}$, $E = 70$ GPa, $\nu = 0.25$.

**P3 (🔴, bridges to [4.3](04-03-cooling-oceanic-lithosphere.md))** Oceanic elastic thickness tracks the depth to the 450 °C isotherm, and half-space cooling gives an isotherm depth $z \approx 2\sqrt{\kappa t}\,\mathrm{erfc}^{-1}(T/T_m)$ — for present purposes, $T_e \approx c\sqrt{t}$ with $t$ the plate age. (a) Given $T_e = 12$ km at 10 Ma, find $c$ in km/Myr$^{1/2}$. (b) Predict $T_e$ at 80 Ma and compare with the observed 30–45 km range. (c) Compute $\alpha$ and the compensation crossover wavelength $\lambda_c$ at both ages, taking $\Delta\rho g = 2.22\times10^{4}$, $E = 70$ GPa, $\nu = 0.25$. (d) A seamount 150 km across forms on 10 Ma crust and is later carried to 80 Ma crust. Using your $\lambda_c$ values, state whether it is compensated at each stage, and explain what happens to its free-air gravity anomaly as the plate ages.

<details>
<summary>Solutions</summary>

**P1** (a) $$D = \frac{70\times10^{9}\times(4.0\times10^{4})^3}{11.25} = \frac{70\times10^{9}\times6.4\times10^{13}}{11.25} = \frac{4.48\times10^{24}}{11.25} = 3.98\times10^{23}\ \mathrm{N\,m}.$$

(b) $$\Delta\rho g = (3300-2400)\times9.8 = 900\times9.8 = 8820\ \mathrm{N\,m^{-3}}.$$
$$\alpha = \left(\frac{4\times3.98\times10^{23}}{8820}\right)^{1/4} = \left(1.805\times10^{20}\right)^{1/4}.$$
$$\log_{10} = 20.2565,\ /4 = 5.0641, \quad \alpha = 1.159\times10^{5}\ \mathrm{m} = 116\ \mathrm{km}.$$

Note how much larger than the oceanic case — both because the plate is thicker and because the sediment fill reduces the buoyancy contrast. Foreland basins are correspondingly broad.

(c) $$x_b = \pi\alpha = 3.1416\times116 = 364\ \mathrm{km}.$$

**P2** (a) $$x_0 = \frac{3\pi\alpha}{4} = 2.356\times65 = 153\ \mathrm{km}.$$

(b) $$x_b = \pi\alpha = 3.1416\times65 = 204\ \mathrm{km}, \qquad \text{height} = 0.0432\times3000 = 130\ \mathrm{m}.$$

(c) Observed 210 km against predicted 204 km — **consistent to 3 percent**, comfortably inside the uncertainty of picking the crest of a broad, gentle arch on real bathymetry. Strictly, the observation implies

$$\alpha = \frac{210}{\pi} = 66.8\ \mathrm{km}.$$

(d) $$D = \frac{\alpha^4\Delta\rho g}{4} = \frac{(6.68\times10^{4})^4\times2.22\times10^{4}}{4}.$$
$$(6.68\times10^{4})^4 = 1.991\times10^{19}; \quad \times2.22\times10^{4} = 4.420\times10^{23}; \quad /4 = 1.105\times10^{23}\ \mathrm{N\,m}.$$
$$T_e = \left(\frac{12\times1.105\times10^{23}\times0.9375}{7.0\times10^{10}}\right)^{1/3} = \left(\frac{1.243\times10^{24}}{7.0\times10^{10}}\right)^{1/3} = (1.776\times10^{13})^{1/3}.$$
$$\log_{10} = 13.2494,\ /3 = 4.4165, \quad T_e = 2.61\times10^{4}\ \mathrm{m} = 26\ \mathrm{km}.$$

**P3** (a) $$c = \frac{T_e}{\sqrt t} = \frac{12}{\sqrt{10}} = \frac{12}{3.162} = 3.79\ \mathrm{km\,Myr^{-1/2}}.$$

(b) $$T_e(80) = 3.79\times\sqrt{80} = 3.79\times8.944 = 33.9\ \mathrm{km}.$$

Squarely inside the observed 30–45 km range for old oceanic lithosphere. **The $\sqrt{t}$ law, derived from heat conduction with no mechanics in it at all, predicts a mechanical property to within the scatter of the observations** — which is the strongest available evidence that $T_e$ is set by an isotherm rather than by composition or by strain history.

(c) *At 10 Ma, $T_e = 12$ km:*
$$D = \frac{70\times10^{9}\times(1.2\times10^{4})^3}{11.25} = \frac{70\times10^{9}\times1.728\times10^{12}}{11.25} = \frac{1.210\times10^{23}}{11.25} = 1.075\times10^{22}\ \mathrm{N\,m}.$$
$$\alpha = \left(\frac{4\times1.075\times10^{22}}{2.22\times10^{4}}\right)^{1/4} = (1.937\times10^{18})^{1/4}: \quad \log_{10}=18.2872,\ /4 = 4.5718,\ \alpha = 3.73\times10^{4}\ \mathrm{m} = 37\ \mathrm{km}.$$
$$\lambda_c = 4.44\times37 = 165\ \mathrm{km}.$$

*At 80 Ma, $T_e = 33.9$ km:*
$$D = \frac{70\times10^{9}\times(3.39\times10^{4})^3}{11.25} = \frac{70\times10^{9}\times3.896\times10^{13}}{11.25} = \frac{2.727\times10^{24}}{11.25} = 2.424\times10^{23}\ \mathrm{N\,m}.$$
$$\alpha = \left(\frac{4\times2.424\times10^{23}}{2.22\times10^{4}}\right)^{1/4} = (4.368\times10^{19})^{1/4}: \quad \log_{10}=19.6403,\ /4=4.9101,\ \alpha = 8.13\times10^{4}\ \mathrm{m} = 81\ \mathrm{km}.$$
$$\lambda_c = 4.44\times81 = 360\ \mathrm{km}.$$

(d) The seamount is 150 km across.

- **On 10 Ma crust** ($\lambda_c = 165$ km): the load is comparable to the crossover wavelength, so it is **partially compensated** — the young, weak plate sags substantially and a partial root develops. Its free-air anomaly is modest.
- **On 80 Ma crust** ($\lambda_c = 360$ km): the load is well below the crossover, so it is **essentially uncompensated**, carried by plate strength with almost no root. Its free-air anomaly is large and positive.

But here is the subtlety that makes this a good question: **the seamount does not un-compensate itself as the plate ages.** The deflection was emplaced when the plate was young and weak, and it is frozen in — the plate cools and stiffens *around* the existing bend. So what actually happens is that the gravity anomaly records the elastic thickness **at the time of loading**, not the plate's present strength.

This is a genuinely important and much-exploited fact. Flexure studies of seamount chains recover $T_e$ as a function of the *age of the plate when the seamount formed*, which is why the oceanic $T_e$-versus-age relation is measurable at all. It also supplies a check on the whole framework: seamounts of many different ages on the same plate should record a systematic progression of $T_e$, and they do.

</details>

## Flashback

**From Lesson 2.3 (Isostasy — Airy and Pratt):** A continental plateau stands 2.4 km above the surrounding lowland. Take $\rho_c = 2800$, $\rho_m = 3300\ \mathrm{kg\,m^{-3}}$. (a) Compute the Airy root. (b) Estimate the Bouguer anomaly the root produces. (c) The plateau is 900 km across; comment on whether Airy is appropriate here, using the compensation crossover from this lesson with a continental $\alpha = 116$ km.

<details>
<summary>Solution</summary>

(a) $$r = 2.4\times\frac{2800}{500} = 2.4\times5.6 = 13.4\ \mathrm{km}.$$

(b) $$\Delta g \approx 2\pi G\Delta\rho\,r = 4.1932\times10^{-10}\times(-500)\times1.34\times10^{4} = -2.81\times10^{-3}\ \mathrm{m\,s^{-2}} = -281\ \mathrm{mGal}.$$

(c) The crossover wavelength for $\alpha = 116$ km is

$$\lambda_c = 4.44\times116 = 515\ \mathrm{km}.$$

The plateau is 900 km across, comfortably longer than $\lambda_c$, so the degree of compensation is high:

$$C = \frac{1}{1+(k\alpha)^4/4}, \qquad k = \frac{2\pi}{900\ \mathrm{km}} = 6.98\times10^{-3}\ \mathrm{km^{-1}}, \qquad k\alpha = 0.810,$$
$$C = \frac{1}{1+(0.810)^4/4} = \frac{1}{1+0.1076} = 0.90.$$

**About 90 percent compensated**, so Airy is a good approximation for the plateau interior — which is exactly the situation described in [2.3](02-03-isostasy-airy-pratt.md), where the free-air anomaly is near zero over the middle and the Bouguer anomaly reveals the root.

The remaining 10 percent is not nothing, though, and it is concentrated at the edges: the flexural terms matter most where curvature is largest, so the *margins* of the plateau will show the free-air edge effects and possible forebulges, while the interior behaves as Airy predicted. This is the general pattern — local isostasy for the middle of a broad load, flexure for its boundary.

</details>

## Connections

- **Backward:** [2.3](02-03-isostasy-airy-pratt.md)'s Airy model is the $D\to0$ limit of the plate equation, recovered exactly at long wavelength; the gravity signatures used to test compensation are [2.2](02-02-gravity-anomalies-reductions.md)'s, and this lesson supplies the mechanism behind the edge effects and uncompensated loads that lesson could only describe.
- **Forward:** [2.7](02-07-space-geodesy.md) measures flexural deformation directly with InSAR and GNSS, including the response to modern ice unloading; [4.3](04-03-cooling-oceanic-lithosphere.md) derives the $\sqrt{t}$ thermal law that P3 used to predict $T_e$; [4.6](04-06-mantle-rheology-post-glacial-rebound.md) treats the case where the load is removed and the plate relaxes viscously rather than elastically.
- **Sideways:** this is the Euler–Bernoulli beam on an elastic foundation from [mechanics-of-materials](../../mechanics-of-materials/syllabus.md) — the same fourth-order equation used for railway track on ballast and for pipelines on soil — with mantle buoyancy playing the role of the foundation springs. [`geology` 2.6](../../geology/lessons/02-06-mountain-building.md) cites this lesson for why compensation is regional rather than local, and the foreland-basin geometry it produces is what fills with the sediment described in [`geology` 4.4](../../geology/lessons/04-04-stratigraphy-facies-correlation.md).
