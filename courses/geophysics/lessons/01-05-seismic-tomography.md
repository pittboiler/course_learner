# Geophysics · Lesson 1.5: Seismic tomography

> ⏱ ~15 min · Module 1: Seismology & Earth structure · Builds on: [1.4](01-04-travel-time-curves-deep-earth.md), [1.3](01-03-wave-equation-ray-theory.md) · Unlocks: [4.4](04-04-mantle-convection-rayleigh-number.md), [6.1](06-01-the-linear-inverse-problem.md)

## Why this matters

Everything so far assumed the Earth is spherically symmetric — a function of radius alone. It very nearly is: the departures from the reference model are under one percent almost everywhere. But those tiny departures are the entire dynamic Earth. A subducting slab is cold and therefore fast; a rising plume is hot and therefore slow. Spherical symmetry is the background; the anomalies are the story.

Tomography is what turned mantle convection from a plausible hypothesis into pictures. It is also the first place in this course where you must be careful about what an image actually means — because a tomogram is not a photograph, and reading one as if it were is the most common mistake in the subject.

## The idea

**Work with residuals, not travel times.** Predict the arrival time from a spherically symmetric reference model, subtract it from the observed time, and keep the difference $\delta t$. If the reference model were perfect, all residuals would be zero. They are not: they scatter by a few seconds, and each one is a statement that the rock along *that particular path* was on average slightly fast or slightly slow.

**Each ray gives one number, which is a line integral.** A ray that spent longer in slow rock arrives late. The delay is the integral of the slowness anomaly along the path — and crucially, the ray does not know *where* along the path the slow rock was. One ray gives one number and cannot localize anything.

**Localization comes from crossing rays.** If two rays cross and only one of them is late, the anomaly is on the part of the first ray that the second did not sample. Millions of crossing paths, from thousands of earthquakes to thousands of stations, give millions of overlapping constraints, and solving them jointly pins anomalies to places. **Tomography is triangulation with delays instead of angles.**

**Which means coverage is everything.** Where rays cross at many angles, an anomaly is boxed in. Where all available rays run nearly parallel, the data constrain the *total* delay along that direction but not how it is distributed — so a compact blob and a long thin smear fit equally well, and the inversion, left to itself, will produce the smear. Earthquakes occur on plate boundaries and most seismometers sit on continents, so real coverage is patchy and directionally biased almost everywhere.

**And it means every image involves a choice.** With more unknowns than well-constrained combinations, the inversion is underdetermined and must be regularized — damped toward zero, or smoothed. The image you see is the data *plus* that choice. This is not a scandal; it is the honest situation, and [6.1](06-01-the-linear-inverse-problem.md) makes it precise. What it demands is that tomograms be read with their resolution tests attached.

## The formal version

**The delay as a line integral.** Travel time along a ray is $T = \int_{\text{ray}} s\,d\ell$ where $s = 1/v$ is the **slowness**. Perturb the model by $\delta s$; by Fermat's principle the ray path itself shifts only at second order, so to first order

$$\boxed{\ \delta t = \int_{\text{ray}} \delta s\,d\ell = -\int_{\text{ray}} \frac{\delta v}{v^2}\,d\ell\ }$$

*In words: the delay is the accumulated slowness anomaly along the unperturbed path.* The fact that we may keep the old path is what makes the problem **linear** — a large convenience, and the reason travel-time tomography works at all.

A useful rewriting: if a ray spends time $t_i$ in a region whose velocity is fractionally perturbed by $\delta v/v$, that region contributes

$$\delta t_i = -t_i\,\frac{\delta v}{v}.$$

*In words: a one percent fast anomaly makes you early by one percent of the time you spent inside it.*

**Discretization.** Divide the mantle into $M$ cells and let $m_j$ be the slowness perturbation in cell $j$. If ray $i$ has path length $G_{ij}$ in cell $j$, then

$$\delta t_i = \sum_{j=1}^{M} G_{ij}m_j, \qquad \text{i.e.}\qquad \mathbf{Gm} = \mathbf{d},$$

with $\mathbf d$ the vector of $N$ observed residuals. **The rows of $\mathbf G$ are the rays; the columns are the cells.** A cell crossed by no ray gives a zero column and is completely unconstrained.

**Back-projection, the intuition.** The crudest useful estimate spreads each ray's delay uniformly back along its own path and averages the contributions in each cell. It is the transpose $\mathbf{G}^{\!\top}\mathbf d$ rather than a true inverse, and it produces exactly the smearing described above — but it makes the geometry vivid, and modern iterative solvers are refined descendants of it.

**Resolution testing.** Since the true Earth is unknown, resolution is assessed synthetically: adopt a test pattern $\mathbf m_{\text{test}}$, compute the synthetic data $\mathbf{Gm}_{\text{test}}$ using the *real* ray geometry, invert with the *real* regularization, and compare the recovery with the input. A **checkerboard test** uses alternating fast and slow blocks; where the checkers come back blurred, elongated or absent, the real image is untrustworthy at that scale and in that place.

**What the anomalies mean.** For upper-mantle temperature, useful rules of thumb are

$$\frac{\partial \ln v_s}{\partial T} \approx -1\times10^{-4}\ \mathrm{K^{-1}}, \qquad \frac{\partial \ln v_p}{\partial T}\approx-0.5\times10^{-4}\ \mathrm{K^{-1}}.$$

*In words: a 1 percent shear-velocity anomaly is roughly a 100 K temperature anomaly* — **if** temperature is the only thing varying. It usually is not: composition, partial melt, water content and anisotropy all move velocities too, and $v_s$ is far more sensitive to melt than $v_p$ ([1.1](01-01-the-elastic-earth.md), P3). Comparing $\delta\ln v_s$ with $\delta\ln v_p$ is the standard way to separate thermal from compositional causes.

**What tomography has shown.** Subducted slabs appear as fast sheets, some stalling near 660 km and others penetrating to the core–mantle boundary. Two enormous low-velocity provinces (LLSVPs) sit on the CMB beneath Africa and the Pacific. Slow, narrow columns beneath some hotspots are resolved in the best-covered regions. Together these are the direct evidence for whole-mantle convection used in [4.4](04-04-mantle-convection-rayleigh-number.md) and [4.5](04-05-plate-driving-forces.md).

## Picture

![Left: a grid of cells with a shaded fast anomaly in the middle, crossed by four coral rays at various angles, with the equation delta t equals the integral of delta s along the path, and a note that each ray sums the slowness anomaly along its own path and nothing else. Centre: a box labelled good coverage, crossed by rays at four different orientations, with a note that rays crossing at many angles pin an anomaly in place. Right: a box labelled poor coverage crossed by three nearly parallel rays, with a blue anomaly drawn as a long ellipse stretched along the ray direction, and a note that the anomaly smears along the rays and its length is unconstrained. Beneath, a remark that earthquakes sit on plate boundaries and seismometers sit on land, so real coverage resembles the right-hand box in most of the mantle, which is why every honest tomogram is published with a resolution test](assets/01-05-fig1.svg)

The blob's *existence* is usually robust. Its *shape* is usually the regularization talking.

## Worked examples

**Example 1 (mechanical — how big a delay is a slab?).** A P wave crosses 400 km of subducted slab that is 2 percent fast, in mantle whose background velocity is $10.0\ \mathrm{km\,s^{-1}}$. Find the travel-time residual.

Time spent inside the anomalous region at background velocity:

$$t_{\text{in}} = \frac{400}{10.0} = 40.0\ \mathrm{s}.$$

$$\delta t = -t_{\text{in}}\frac{\delta v}{v} = -40.0\times0.02 = -0.80\ \mathrm{s}.$$

**Eight tenths of a second early.** That is the entire signal — against a total travel time of perhaps 600 s, so a fractional anomaly of about $10^{-3}$. Two consequences follow immediately. First, arrival times must be picked to a few hundredths of a second, and origin times and station locations must be known to match; tomography is a precision-timing enterprise before it is anything else. Second, systematic errors matter more than random ones: an unmodelled crustal delay beneath a station biases *every* ray through that station in the same direction, and appears in the image as a spurious anomaly directly below it. Correcting for the crust is therefore not a detail but a central part of the processing.

**Example 2 (why you'd care — is that blob hot, or is it just different?).** A tomographic model shows a region of the upper mantle with $\delta\ln v_s = -2\%$ and $\delta\ln v_p = -0.7\%$. Interpret it.

*The naive reading.* Using $\partial\ln v_s/\partial T \approx -1\times10^{-4}\ \mathrm{K^{-1}}$:

$$\delta T \approx \frac{-0.02}{-1\times10^{-4}} = +200\ \mathrm{K}.$$

*Why it cannot be the whole story.* If temperature alone were responsible, the two anomalies should be in a roughly fixed ratio, since both moduli soften with heating. The observed ratio is

$$R = \frac{\delta\ln v_s}{\delta\ln v_p} = \frac{-2.0}{-0.7} = 2.9,$$

well above the value of about 1.7 to 2.0 expected for a purely thermal anomaly. **Something is attacking the shear modulus much harder than the bulk modulus.** From [1.1](01-01-the-elastic-earth.md) that is the fingerprint of **partial melt**, whose thin interconnected films destroy rigidity while leaving incompressibility nearly intact. Water in nominally anhydrous minerals produces a similar, weaker signature.

*The honest conclusion.* The region is hot, and probably contains a small melt fraction — perhaps one percent — so the temperature estimate of +200 K is an **upper bound** on the thermal part, because melt is doing some of the velocity reduction for free. A parallel test resolves it further: melt raises attenuation dramatically, so a low-$Q$ measurement in the same volume ([5.3](05-03-attenuation-anelasticity.md)) would confirm melt, while a normal $Q$ would push the interpretation back toward pure temperature.

*The general lesson, which recurs throughout the course.* **A single geophysical observable is almost never diagnostic of a single cause.** One velocity anomaly has at least four possible explanations; the ratio of two observables kills two of them; a third, independent observable usually settles it. Designing that chain is most of what practising geophysics consists of.

## Watch out

- **You might think** a tomogram shows temperature. **Actually** it shows velocity, and the conversion to temperature assumes composition, melt fraction, water content and anisotropy are all uniform — assumptions that are known to be false in exactly the places that are most interesting. Quote velocity anomalies; convert only with a stated caveat.
- **You might think** a sharp blob edge in a published image means a sharp boundary in the Earth. **Actually** edge sharpness is largely set by the cell size and the smoothing weight. Two groups inverting the same data with different regularization routinely produce blobs of different shape and identical location. Trust locations and amplitudes-of-integral; distrust outlines.
- **You might think** more data always improves resolution. **Actually** more data in directions already sampled improves *precision* without improving *resolution*. What resolution needs is rays crossing at new angles — which is why ocean-bottom seismometers and temporary arrays in unsampled regions are worth so much more per instrument than another station in a dense continental network.

## One-liner

> Each ray reports one number — the slowness anomaly integrated along its path — and an image emerges only where enough rays cross at enough different angles to say where along the paths the anomaly was.

## Problems

**P1 (🟢)** A ray crosses 250 km of anomalous mantle in which $v$ is 1.5 percent slow, against a background of $8.5\ \mathrm{km\,s^{-1}}$. (a) Compute the time spent in the anomaly at background velocity. (b) Compute the travel-time residual, with its sign. (c) The total travel time is 480 s; express the residual as a fraction of it.

**P2 (🟡)** Beneath a hotspot, a tomographic model gives $\delta\ln v_s = -1.2\%$ and $\delta\ln v_p = -0.6\%$ at 200 km depth. (a) Estimate the temperature anomaly from the shear velocity, using $\partial\ln v_s/\partial T = -1\times10^{-4}\ \mathrm{K^{-1}}$. (b) Compute the ratio $\delta\ln v_s / \delta\ln v_p$ and say whether it is consistent with a purely thermal anomaly. (c) State one further, independent measurement that would test your interpretation, and what result would support it.

**P3 (🔴, bridges to [6.1](06-01-the-linear-inverse-problem.md))** Two cells, A and B, lie side by side. Ray 1 crosses A only, with path length 100 km. Ray 2 crosses both, with path lengths 100 km in A and 100 km in B. Ray 3 also crosses both, with 100 km in each. The residuals are $\delta t_1 = -0.5$ s, $\delta t_2 = -0.8$ s, $\delta t_3 = -0.8$ s. (a) Write the system $\mathbf{Gm} = \mathbf d$ and solve for the slowness anomalies in A and B. (b) Now delete ray 1 from the dataset and try again. What can and cannot be determined? Express the ambiguity as an explicit family of solutions. (c) State in one sentence what property of the *ray geometry*, not of the data quality, decides between (a) and (b).

<details>
<summary>Solutions</summary>

**P1** (a) $$t_{\text{in}} = \frac{250}{8.5} = 29.4\ \mathrm{s}.$$

(b) $$\delta t = -t_{\text{in}}\frac{\delta v}{v} = -29.4\times(-0.015) = +0.44\ \mathrm{s}.$$

Positive: the wave is **late**, as it must be for slow rock. (Keeping this sign straight is worth a moment — $\delta v/v$ is negative for a slow anomaly, and the minus sign in the formula turns it into a positive delay.)

(c) $$\frac{0.44}{480} = 9.2\times10^{-4}, \text{ about } 0.09\ \text{percent}.$$

**P2** (a) $$\delta T \approx \frac{-0.012}{-1\times10^{-4}} = +120\ \mathrm{K}.$$

(b) $$R = \frac{-1.2}{-0.6} = 2.0.$$

This sits right at the top of the range expected for a purely thermal anomaly (roughly 1.7 to 2.0 in the upper mantle), so the observation is **consistent with temperature alone**, with at most a small contribution from melt. Note how much weaker a statement this is than the $R = 2.9$ of Example 2: there, thermal-only was excluded; here, it survives, but so do interpretations with a little melt.

(c) Several would work; any one is a complete answer.

- **Attenuation ($Q$).** Measure $Q$ in the same volume ([5.3](05-03-attenuation-anelasticity.md)). Both temperature and melt lower $Q$, but melt lowers it disproportionately. A moderately reduced $Q$ consistent with 120 K supports the thermal reading; a drastically reduced $Q$ implies melt.
- **Anisotropy.** Measure shear-wave splitting ([5.5](05-05-anisotropy-mantle-flow.md)). A thermal upwelling should have a vertical flow axis and hence weak splitting for vertically travelling waves; the observation of strong horizontal fast axes would instead point to sheared, aligned olivine and a partly *anisotropic* rather than thermal explanation of the low $v_s$.
- **Surface heat flow and topography.** A 120 K anomaly over a few hundred kilometres implies a specific buoyancy and hence a predictable dynamic topography and heat-flow anomaly at the surface ([4.2](04-02-radiogenic-heat-budget.md), [2.7](02-07-space-geodesy.md)); consistency between them supports the thermal reading.

**P3** (a) Let $m_A, m_B$ be slowness anomalies in s/km, and path lengths in km. The system is

$$\begin{aligned} 100\,m_A &= -0.5\\ 100\,m_A + 100\,m_B &= -0.8\\ 100\,m_A + 100\,m_B &= -0.8 \end{aligned}$$

From the first equation, $m_A = -5.0\times10^{-3}\ \mathrm{s\,km^{-1}}$. Substituting into the second:

$$-0.5 + 100\,m_B = -0.8 \;\Rightarrow\; m_B = -3.0\times10^{-3}\ \mathrm{s\,km^{-1}}.$$

Both cells are fast (negative slowness anomaly means high velocity), A more so than B. Note that ray 3 is an exact duplicate of ray 2: it adds no information at all, only redundancy against noise. **Three rays, but only two independent constraints** — and by luck that is exactly enough.

(b) Deleting ray 1 leaves only

$$100\,m_A + 100\,m_B = -0.8,$$

one equation in two unknowns. The determined quantity is the **sum**:

$$m_A + m_B = -8.0\times10^{-3}\ \mathrm{s\,km^{-1}}.$$

Everything else is free. The solution family is

$$\begin{pmatrix}m_A\\ m_B\end{pmatrix} = \begin{pmatrix}-4.0\times10^{-3}\\ -4.0\times10^{-3}\end{pmatrix} + c\begin{pmatrix}1\\-1\end{pmatrix}, \qquad c \in \mathbb{R},$$

where the first term is the minimum-norm (equal-split) solution and $(1,-1)$ is the **null vector**: any amount of "fast in A, equally slow in B" is completely invisible to the surviving data. A damped inversion would return the equal split — not because the Earth is likely to be that way, but because damping picks the smallest member of the family. **The image would look confident and be half fabrication.**

(c) **Whether any ray samples one cell without the other** — that is, whether the rays cross at differing angles rather than all sharing the same pair of cells. Data quality is irrelevant to the distinction: perfect, noiseless measurements from parallel rays still cannot separate A from B, while noisy measurements from crossing rays can. This is the null-space argument of [6.1](06-01-the-linear-inverse-problem.md) in miniature, and the two-cell version here is the same phenomenon that makes the smeared blob in the figure's right-hand box.

</details>

## Flashback

**From Lesson 1.2 (The seismic wave zoo):** A distant earthquake is recorded at $\Delta = 2500$ km. Rayleigh-wave energy at 60 s period arrives 625 s after origin time; energy at 30 s period arrives 735 s after origin time. (a) Compute the group velocity at each period. (b) Which period sampled deeper, and roughly to what depth? (c) A nearby station on old oceanic lithosphere gives group velocities about 4 percent higher at both periods. Give the physical reason.

<details>
<summary>Solution</summary>

(a) $$U(60\ \mathrm{s}) = \frac{2500}{625} = 4.00\ \mathrm{km\,s^{-1}}, \qquad U(30\ \mathrm{s}) = \frac{2500}{735} = 3.40\ \mathrm{km\,s^{-1}}.$$

(b) The 60 s wave. Surface-wave energy dies off within roughly one wavelength of depth, and $\lambda = UT$ gives $\lambda_{60}\approx 4.0\times60 = 240$ km against $\lambda_{30}\approx3.4\times30 = 102$ km. So the long-period wave is sampling to roughly 100 to 200 km — well into the mantle — while the 30 s wave is largely confined to the crust and uppermost mantle. Its higher velocity is a direct statement that the deeper rock is faster.

(c) **The lithosphere is colder, and cold rock is fast.** Old oceanic lithosphere has been cooling for tens of millions of years, thickening as $\sqrt{t}$ ([4.3](04-03-cooling-oceanic-lithosphere.md)); at any given depth in the top 100 km it is therefore substantially colder than average, and with $\partial\ln v_s/\partial T \approx -1\times10^{-4}\ \mathrm{K^{-1}}$ a 4 percent velocity increase corresponds to roughly 400 K of cooling — entirely reasonable for the difference between young and old oceanic mantle.

This is exactly the measurement that makes **surface-wave tomography** work: dispersion curves measured over many paths, inverted for shear velocity as a function of depth, map lithospheric thickness and thermal age across whole ocean basins. It complements body-wave tomography neatly, because surface waves sample the upper few hundred kilometres uniformly along their path rather than along narrow rays, and so fill in precisely the shallow structure where body-ray coverage is worst.

</details>

## Connections

- **Backward:** the residuals inverted here are departures from the spherically symmetric travel-time curve built in [1.4](01-04-travel-time-curves-deep-earth.md); the linearization rests on Fermat's principle and the ray geometry of [1.3](01-03-wave-equation-ray-theory.md); the interpretation of a low-$v_s$ anomaly as melt rests on the two-moduli argument of [1.1](01-01-the-elastic-earth.md).
- **Forward:** [6.1](06-01-the-linear-inverse-problem.md) makes the resolution and null-space arguments of P3 formal, and this lesson is its motivating example. The slabs and plumes imaged here are the observational input to mantle convection in [4.4](04-04-mantle-convection-rayleigh-number.md) and to the plate-force balance in [4.5](04-05-plate-driving-forces.md); the transition-zone stalling that tomography reveals is explained by the Clapeyron slopes of [5.2](05-02-mineral-physics-transition-zone.md); and the thermal-versus-melt ambiguity is resolved by the attenuation of [5.3](05-03-attenuation-anelasticity.md).
- **Sideways:** this is medical CT with rays that curve and sources you did not choose. The mathematics is identical — a Radon-transform-like line-integral inversion — and the difference is entirely one of coverage: a CT scanner rotates the source freely around the patient, while seismology must take the earthquakes it is given. The least-squares machinery is [numerical-analysis 5.1](../../numerical-analysis/lessons/05-01-least-squares-normal-equations.md), and the conditioning language for a nearly-singular system is [numerical-analysis 3.2](../../numerical-analysis/lessons/03-02-cholesky-conditioning.md).
