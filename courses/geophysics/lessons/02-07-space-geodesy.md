# Geophysics · Lesson 2.7: Space geodesy

> ⏱ ~15 min · Module 2: Gravity, the figure of the Earth & geodesy · Builds on: [2.4](02-04-the-geoid.md), [2.5](02-05-solid-earth-tides-rotation.md), [2.6](02-06-flexure-of-the-lithosphere.md) · Unlocks: [3.5](03-05-plate-kinematics-euler-poles.md), [4.6](04-06-mantle-rheology-post-glacial-rebound.md)

## Why this matters

Everything in this module so far has been a snapshot. Space geodesy makes it a film. Plate motions that were inferred from magnetic stripes averaged over millions of years are now measured directly, year by year, to a millimetre. Strain accumulating on a locked fault is watched as it accumulates. Ice sheets are weighed monthly from orbit.

This changes the character of the subject. A static gravity map tells you what the Earth *is*; a decade of geodetic time series tells you what it is *doing*. Two of the quantities this course has already had to leave hanging — the secular change in $J_2$ from [2.5](02-05-solid-earth-tides-rotation.md), and the mantle viscosity that isostasy cannot supply — are settled by measurements described here.

## The idea

**GNSS turns a receiver into a millimetre-accurate marker.** Continuously operating receivers, processed against a global reference frame, give horizontal velocities good to about 1 mm/yr and vertical velocities to a few mm/yr. Plate interiors move rigidly at centimetres per year; plate boundaries deform in patterns that reveal what is locked and what is creeping.

**A locked fault has a characteristic signature, and it is smooth.** If a fault were slipping freely, the velocity across it would jump discontinuously. Because it is locked from the surface to some depth $D$ and slipping below, the surface velocity varies *smoothly* over a zone a few times $D$ wide. **The width of that transition measures the locking depth**, and the locking depth times the slip rate is the moment being stored for the next earthquake ([1.6](01-06-earthquake-sources-magnitude.md), P3).

**InSAR trades points for pictures.** Interfere two radar images of the same ground taken at different times and the phase difference maps ground motion at millimetre precision over the whole scene, without any instrument on the ground. The cost is that it measures only the component along the satellite's line of sight, only where the ground stays radar-coherent, and it is corrupted by the atmosphere's variable water vapour.

**Altimetry maps the ocean's gravity field.** The sea surface is very nearly an equipotential ([2.4](02-04-the-geoid.md)), so measuring its height from orbit measures the marine geoid — and hence, by differentiation, the free-air gravity anomaly over every ocean. This is how the seafloor was mapped: the gravity signal of an uncharted seamount pulls the sea surface up over it by a few metres.

**And GRACE weighs things.** Two satellites chasing each other, with the distance between them measured to microns, sense changes in the gravity field as they fly. Repeat monthly and you get the *change* in mass at each place: groundwater depletion, ice-sheet loss, and the slow flow of mantle back under formerly glaciated regions.

## The formal version

**GNSS and reference frames.** Positions are expressed in the International Terrestrial Reference Frame (ITRF), whose origin is the Earth's centre of mass and whose scale and orientation are maintained by combining GNSS, VLBI, satellite laser ranging and DORIS. *Every velocity is relative to something*: "plate velocities" are stated either in a no-net-rotation frame or relative to a chosen plate, and the two differ by a whole-Earth rotation.

**The interseismic arctangent.** For a vertical strike-slip fault locked from the surface to depth $D$ and slipping at rate $V$ below, the surface velocity parallel to the fault at perpendicular distance $x$ is

$$\boxed{\ v(x) = \frac{V}{\pi}\arctan\!\left(\frac{x}{D}\right)\ }$$

*In words: the far field moves at $\pm V/2$, and the transition between them has a width set by the locking depth.* Two consequences worth memorizing: at $x = D$ the velocity is $V/4$, exactly half the far-field value; and the profile reaches 90 percent of the far field only at $x \approx 6D$, so a geodetic network must extend far beyond the fault to constrain $V$ at all.

**InSAR.** A radar of wavelength $\lambda$ sees a range change $\Delta r$ as a phase change

$$\Delta\phi = \frac{4\pi}{\lambda}\Delta r,$$

so one full fringe ($2\pi$ of phase) corresponds to

$$\Delta r = \frac{\lambda}{2}.$$

For C-band ($\lambda = 5.6$ cm) that is **2.8 cm per fringe**; for L-band ($\lambda = 24$ cm), 12 cm.

| Limitation | Consequence |
|---|---|
| one line-of-sight component | needs ascending + descending passes to resolve a vector |
| decorrelation | fails over vegetation, water, snow; excellent over deserts and cities |
| atmospheric phase delay | water vapour mimics several cm of deformation; averaged down with many acquisitions |
| ionosphere | worse at longer wavelengths and low latitudes |

**Satellite altimetry to gravity.** The sea surface height relative to the ellipsoid is the geoid plus dynamic ocean topography (order 1 m, from currents — [oceanography 6.5](../../oceanography/lessons/06-05-observing-the-ocean.md)). Removing the latter leaves $N$, and the deflection of the vertical follows from its horizontal gradient; converting to gravity anomalies gives global marine coverage at roughly 10 km resolution.

**Time-variable gravity.** GRACE and GRACE-FO deliver monthly gravity fields to about degree 60 (roughly 300 km resolution). Mass change is usually quoted as **equivalent water thickness**: a surface layer of water whose gravitational effect matches the observed change. Useful conversions:

$$1\ \mathrm{mm\ of\ global\ sea\ level} = 361\ \mathrm{Gt\ of\ water}; \qquad 1\ \mathrm{Gt} = 1\ \mathrm{km^3\ of\ water}.$$

**Separating elastic from viscous response.** Both present-day ice loss and ancient deglaciation produce uplift *and* gravity change, but in different ratios. Removing a surface load produces an immediate **elastic** rebound with essentially no mass flowing in beneath; the mantle flow of **glacial isostatic adjustment** brings mass in from the sides. So the ratio $\dot g/\dot u$ differs:

$$\left.\frac{\dot g}{\dot u}\right|_{\text{elastic}} \approx -0.26\ \mu\mathrm{Gal\,mm^{-1}}, \qquad \left.\frac{\dot g}{\dot u}\right|_{\text{GIA}} \approx -0.16\ \mu\mathrm{Gal\,mm^{-1}}.$$

*In words: for the same uplift, GIA produces less gravity decrease, because mantle material has moved in underneath to partly replace what was lost.* Measuring both at the same site separates the two processes — the standard method for disentangling the problem left open in [2.5](02-05-solid-earth-tides-rotation.md), P3.

## Picture

![Left: a graph of fault-parallel velocity against distance from a locked fault, drawn as a vertical coral line. The blue curve is a smooth arctangent rising from minus half the far-field rate on one side to plus half on the other, labelled with the formula v of x equals V over pi times arctan of x over D. A marker at x equals D shows half the far-field rate. Notes state that the width of the bend is the locking depth, and that twenty GNSS receivers across a fault with ten years of data measure how much of the fault is storing the next earthquake. Right: a list of what the satellites add — GNSS giving points at 1 mm per year continuous in time, InSAR giving images at millimetre precision but only one line of sight, altimetry giving the marine geoid and hence seafloor gravity, and GRACE giving mass itself monthly at 300 km resolution. Below, a set of nested coral fringe curves labelled fringes, with a note that each InSAR fringe is half a radar wavelength of range change, 2.8 centimetres for C-band, so counting fringes is counting centimetres](assets/02-07-fig1.svg)

The subject stopped being about maps and started being about time series.

## Worked examples

**Example 1 (mechanical — how deep is the fault locked?).** A GNSS transect crosses a strike-slip fault. Far-field velocities are $+17.5$ and $-17.5$ mm/yr, so $V = 35$ mm/yr. At 15 km from the fault the measured velocity is 8.8 mm/yr. Find the locking depth, and the accumulating moment rate per unit length of fault.

*Locking depth.*
$$v(x) = \frac{V}{\pi}\arctan\frac{x}{D} \;\Rightarrow\; 8.8 = \frac{35}{\pi}\arctan\frac{15}{D} = 11.14\arctan\frac{15}{D}.$$
$$\arctan\frac{15}{D} = 0.790\ \mathrm{rad} \;\Rightarrow\; \frac{15}{D} = \tan(0.790) = 1.006 \;\Rightarrow\; D = 14.9\ \mathrm{km}.$$

So the fault is locked to about **15 km** — the base of the seismogenic crust, as expected.

*Moment rate.* Per unit length of fault, the locked area is $D$ per metre of strike, so with $\mu = 30$ GPa:

$$\dot M_0/\text{length} = \mu D V = 3.0\times10^{10}\times1.49\times10^{4}\times0.035 = 1.56\times10^{13}\ \mathrm{N\,m\,yr^{-1}\,m^{-1}}.$$

Over a 300 km segment, $4.7\times10^{18}$ N·m/yr — which by the arithmetic of [1.6](01-06-earthquake-sources-magnitude.md) accumulates the moment of an $M_w\,7.5$ every 48 years.

**Example 2 (why you'd care — weighing an ice sheet from orbit).** GRACE finds Greenland losing mass at 270 Gt/yr. (a) Convert to sea-level rise. (b) A GNSS station on Greenland bedrock shows uplift of 12 mm/yr while co-located gravity measurements show $\dot g = -2.5\ \mu\mathrm{Gal/yr}$. Decompose into elastic and viscous parts.

(a) $$\frac{270\ \mathrm{Gt\,yr^{-1}}}{361\ \mathrm{Gt\,mm^{-1}}} = 0.75\ \mathrm{mm\ of\ sea\ level\ per\ year}.$$

Roughly a fifth of the total observed rate of sea-level rise, from one ice sheet.

(b) Let $u_e$ and $u_v$ be the elastic and viscous parts of the uplift, so $u_e + u_v = 12$ mm/yr, and

$$\dot g = -0.26\,u_e - 0.16\,u_v = -2.5.$$

Substituting $u_v = 12 - u_e$:

$$-0.26u_e - 0.16(12-u_e) = -2.5 \;\Rightarrow\; -0.26u_e - 1.92 + 0.16u_e = -2.5$$
$$-0.10u_e = -0.58 \;\Rightarrow\; u_e = 5.8\ \mathrm{mm\,yr^{-1}}, \qquad u_v = 6.2\ \mathrm{mm\,yr^{-1}}.$$

**About half the uplift is the elastic response to ice being lost right now, and half is the mantle still flowing back from the last glacial maximum.**

*Why the decomposition is worth the trouble.* Ice-sheet mass balance from GRACE is contaminated by GIA: the satellite measures total mass change in a column, and mantle rock flowing in from the sides is a mass *increase* that partly hides the ice loss. Getting the ice number right requires subtracting a GIA model, and GIA models disagree by tens of Gt/yr — for a while the dominant uncertainty in Antarctic mass balance was not the measurement but the correction.

The gravity-to-uplift ratio breaks the deadlock empirically. Two co-located instruments, no model required, and the two processes separate because they have genuinely different physics: **elastic rebound moves the surface without moving much mass underneath it; viscous rebound moves mass.** This is the same idea as the ratio tests in [1.5](01-05-seismic-tomography.md) — one observable is ambiguous, a second with a different sensitivity resolves it — and it is arguably the single most useful habit in the whole subject.

*And the viscous half is a viscosity measurement.* The 6.2 mm/yr of GIA uplift, combined with a known ice history, constrains mantle viscosity directly. That calculation is [4.6](04-06-mantle-rheology-post-glacial-rebound.md).

## Watch out

- **You might think** GNSS vertical velocities are as good as horizontal ones. **Actually** they are two to three times worse, because the satellite geometry is one-sided (there are no satellites below the horizon) and because tropospheric delay maps almost directly into height. Any argument that hinges on a 1 mm/yr vertical signal needs a long time series and careful treatment of antenna and atmosphere.
- **You might think** an InSAR interferogram shows vertical motion. **Actually** it shows the projection of the 3-D displacement onto the satellite line of sight, which is typically 30 to 45 degrees from vertical. A purely horizontal east–west motion produces fringes too, and separating components requires both ascending and descending tracks — or an assumption, which should always be stated.
- **You might think** the arctangent profile means the fault is locked to depth $D$ and free below. **Actually** it is a *model* — a screw dislocation in an elastic half-space — and real faults have gradational transitions, off-fault deformation and viscoelastic relaxation after past earthquakes. Fitting an arctangent to a transect gives an "effective locking depth" that can be biased by where the region sits in its earthquake cycle.

## One-liner

> Space geodesy converted the solid Earth from a set of maps into a set of time series: plate velocities to the millimetre, locked faults revealed as smooth arctangents, and ice sheets weighed monthly from orbit.

## Problems

**P1 (🟢)** A C-band interferogram ($\lambda = 5.6$ cm) across a fault shows 9 fringes between the far field and the fault trace. (a) Compute the line-of-sight displacement. (b) If the look angle is 35° from vertical and the motion is known to be purely vertical, compute the true vertical displacement. (c) State what would change if the sensor were L-band ($\lambda = 24$ cm), and give one advantage of each band.

**P2 (🟡)** A GNSS transect across a locked strike-slip fault gives far-field velocities of $\pm12$ mm/yr. At 8 km from the fault the velocity is 5.0 mm/yr, and at 40 km it is 10.2 mm/yr. (a) Use the 8 km point to estimate the locking depth. (b) Use the 40 km point to estimate it independently. (c) Comment on the consistency, and on what a discrepancy would suggest. (d) Compute the moment accumulation rate for a 200 km segment, taking $\mu = 30$ GPa and your preferred $D$.

**P3 (🔴, bridges to [4.6](04-06-mantle-rheology-post-glacial-rebound.md))** A site in Fennoscandia shows GNSS uplift of 9.0 mm/yr and a gravity change of $-1.55\ \mu\mathrm{Gal/yr}$. Present-day ice loss in the region is negligible. (a) Using the two ratios given in the lesson, decompose the signal, and comment on the result. (b) Suppose instead the observed $\dot g$ had been $-2.34\ \mu\mathrm{Gal/yr}$; redo the decomposition and interpret. (c) Explain physically why the GIA ratio is *smaller* in magnitude than the elastic one. (d) A colleague proposes using the free-air gradient $-0.3086\ \mu\mathrm{Gal\,mm^{-1}}$ instead of either ratio. Explain what that assumes and why it is wrong here.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Delta r = 9\times\frac{\lambda}{2} = 9\times2.8 = 25.2\ \mathrm{cm}.$$

(b) The line of sight is 35° from vertical, so a vertical displacement $u_z$ projects onto it as $u_z\cos35^\circ$:

$$u_z = \frac{25.2}{\cos35^\circ} = \frac{25.2}{0.819} = 30.8\ \mathrm{cm}.$$

(c) With L-band each fringe is 12 cm, so the same 25.2 cm would appear as only $25.2/12 = 2.1$ fringes.

- **C-band advantage:** finer displacement sensitivity — more fringes for the same motion means better precision on small signals, and shorter wavelength gives better resolution.
- **L-band advantage:** far better coherence. Longer wavelengths penetrate vegetation and tolerate more ground disturbance between acquisitions, so L-band works over forests and in areas of large deformation where C-band fringes become too closely spaced to unwrap.

The practical rule is that C-band is preferred for slow deformation in arid or urban terrain, and L-band for vegetated regions and for the near field of large earthquakes.

**P2** (a) $V = 24$ mm/yr (the far-field difference), so $V/\pi = 7.639$.
$$5.0 = 7.639\arctan\frac{8}{D} \;\Rightarrow\; \arctan\frac{8}{D} = 0.6546 \;\Rightarrow\; \frac{8}{D} = 0.7660 \;\Rightarrow\; D = 10.4\ \mathrm{km}.$$

(b) $$10.2 = 7.639\arctan\frac{40}{D} \;\Rightarrow\; \arctan\frac{40}{D} = 1.3353 \;\Rightarrow\; \frac{40}{D} = 4.213 \;\Rightarrow\; D = 9.5\ \mathrm{km}.$$

(c) The two estimates, 10.4 and 9.5 km, agree to about 9 percent — good consistency, and reassuring because they weight the profile very differently: the near-field point is sensitive to the shape of the bend, the far-field point mostly to how close the profile has come to $V/2$.

A large discrepancy would suggest the simple model is wrong. Common causes: **off-fault distributed deformation** (which broadens the profile and inflates far-field estimates of $D$), **a nearby second structure** taking up part of the motion, or **postseismic viscoelastic relaxation** from a past earthquake, which produces a transient that looks like a deeper locking depth. The systematic check is to fit the whole profile rather than two points, and to look at whether residuals are structured.

(d) Take $D \approx 10$ km:
$$\dot M_0 = \mu\,(D\times L)\,V = 3.0\times10^{10}\times(1.0\times10^{4}\times2.0\times10^{5})\times0.024$$
$$= 3.0\times10^{10}\times2.0\times10^{9}\times0.024 = 1.44\times10^{18}\ \mathrm{N\,m\,yr^{-1}}.$$

**P3** (a) With $u_e + u_v = 9.0$ and $-0.26u_e - 0.16u_v = -1.55$:

$$-0.26u_e - 0.16(9.0-u_e) = -1.55 \;\Rightarrow\; -0.10u_e - 1.44 = -1.55 \;\Rightarrow\; u_e = 1.1\ \mathrm{mm\,yr^{-1}},$$
$$u_v = 7.9\ \mathrm{mm\,yr^{-1}}.$$

**Almost all viscous**, as expected: Fennoscandia deglaciated 10,000 years ago and has no significant present-day ice, so the signal should be nearly pure GIA. The small elastic residual of about 1 mm/yr is within the uncertainty of the ratios and of the measurements, and is consistent with zero. This is a *consistency check passed*, which is the most useful thing a decomposition can do when you already know the answer.

(b) $$-0.26u_e - 0.16(9.0-u_e) = -2.34 \;\Rightarrow\; -0.10u_e = -0.90 \;\Rightarrow\; u_e = 9.0,\quad u_v = 0.$$

This would say the uplift is **entirely elastic** — an immediate response to a load being removed right now, with no mantle flow at all. In Fennoscandia that is not credible: there is no ice being lost. So rather than accept the decomposition, one should suspect the inputs. Plausible culprits: a gravity measurement contaminated by local hydrology (groundwater changes produce gravity signals with almost no uplift, which biases $\dot g$ strongly), an error in the assumed ratios for this region's mantle structure, or a systematic offset in the absolute-gravity time series. **A decomposition that returns a physically impossible partition is a diagnostic of the data, not a discovery.**

(c) Because the two processes move different amounts of *mass*. Removing a surface load and letting the crust spring back elastically changes the observer's height without bringing any new material underneath — so the gravity change is close to the pure free-air effect of moving up, minus a modest correction. In GIA, the uplift happens *because* mantle material is flowing back in beneath the site: the observer rises, but dense rock has arrived below, and its attraction partly offsets the free-air decrease. **Less net gravity change for the same uplift**, hence the smaller ratio.

(d) The free-air gradient $-0.3086\ \mu\mathrm{Gal\,mm^{-1}}$ assumes the observer moves upward through an *unchanged* gravity field — no mass redistribution at all, only a change of position. That is the right model for a gravimeter carried up a ladder.

It is wrong here for both processes. In GIA, mantle mass flows in beneath the site, so the field is not unchanged. In the elastic case, the surface load being removed was itself attracting the gravimeter, and the crust beneath has decompressed, so again the field changes. Using $-0.3086$ would attribute all of the observed $\dot g$ to height change and infer far too little uplift — or, run the other way, would predict a gravity change roughly twice what GIA actually produces. The general point is worth carrying: **the free-air gradient describes moving an instrument, not deforming a planet.**

</details>

## Flashback

**From Lesson 2.6 (Flexure of the lithosphere):** Oceanic lithosphere has $T_e = 25$ km, $E = 70$ GPa, $\nu = 0.25$, with $\Delta\rho\,g = 2.22\times10^{4}\ \mathrm{N\,m^{-3}}$. (a) Compute the flexural rigidity. (b) Compute the flexural parameter. (c) Compute the compensation crossover wavelength and state whether a 200 km wide load is compensated.

<details>
<summary>Solution</summary>

(a) $$D = \frac{70\times10^{9}\times(2.5\times10^{4})^3}{12(1-0.0625)} = \frac{70\times10^{9}\times1.5625\times10^{13}}{11.25} = \frac{1.09375\times10^{24}}{11.25} = 9.72\times10^{22}\ \mathrm{N\,m}.$$

(b) $$\alpha = \left(\frac{4\times9.72\times10^{22}}{2.22\times10^{4}}\right)^{1/4} = \left(1.751\times10^{19}\right)^{1/4}.$$
$$\log_{10} = 19.2434,\ /4 = 4.8109, \quad \alpha = 6.47\times10^{4}\ \mathrm{m} = 65\ \mathrm{km}.$$

(c) $$\lambda_c = 4.44\alpha = 4.44\times65 = 288\ \mathrm{km}.$$

A 200 km load is **narrower** than the crossover, so it is only partially compensated. Quantitatively, with $k = 2\pi/200\ \mathrm{km} = 0.0314\ \mathrm{km^{-1}}$ and $k\alpha = 2.04$:

$$C = \frac{1}{1+(2.04)^4/4} = \frac{1}{1+4.33} = 0.19.$$

Only about **19 percent** compensated — the plate is carrying four fifths of this load. Such a feature would show a large positive free-air anomaly, exactly the signature [2.2](02-02-gravity-anomalies-reductions.md) associated with uncompensated topography, and it is why oceanic plateaus and seamount chains stand out so strongly in satellite-derived marine gravity maps.

</details>

## Connections

- **Backward:** altimetry measures the geoid of [2.4](02-04-the-geoid.md); the $\dot J_2$ used in [2.5](02-05-solid-earth-tides-rotation.md)'s length-of-day budget comes from satellite tracking described here; the flexural deformation of [2.6](02-06-flexure-of-the-lithosphere.md) is now watched directly rather than inferred from bathymetry.
- **Forward:** [3.5](03-05-plate-kinematics-euler-poles.md) compares these instantaneous velocities with the million-year averages from magnetic stripes — and the agreement between them is one of the strongest results in the subject. [4.6](04-06-mantle-rheology-post-glacial-rebound.md) converts the viscous uplift isolated in Example 2 into a mantle viscosity.
- **Sideways:** GNSS positioning is a least-squares problem over many satellites and epochs, the machinery of [numerical-analysis 5.1](../../numerical-analysis/lessons/05-01-least-squares-normal-equations.md); InSAR phase unwrapping is a classic ill-posed reconstruction, and the ambiguity in decomposing a line-of-sight measurement into three components is the null-space problem of [6.1](06-01-the-linear-inverse-problem.md). GRACE's ocean-mass products are an input to sea-level budgets in [`climate-science`](../../climate-science/syllabus.md), and its ocean-circulation use is [oceanography 6.5](../../oceanography/lessons/06-05-observing-the-ocean.md)'s.
