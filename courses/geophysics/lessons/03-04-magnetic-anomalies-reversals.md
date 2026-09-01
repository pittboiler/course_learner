# Geophysics · Lesson 3.4: Magnetic anomalies and reversals

> ⏱ ~15 min · Module 3: Geomagnetism, palaeomagnetism & plate kinematics · Builds on: [3.1](03-01-the-main-field.md), [3.3](03-03-paleomagnetism.md) · Unlocks: [3.5](03-05-plate-kinematics-euler-poles.md), [6.3](06-03-electrical-electromagnetic-methods.md)

## Why this matters

In 1963 Fred Vine and Drummond Matthews — and independently Lawrence Morley, whose paper was rejected — proposed that the puzzling stripey magnetic pattern of the ocean floor was a tape recording. New crust forms at a ridge, cools through its blocking temperature, and locks in whichever polarity the field happens to have. The field reverses; the ridge keeps spreading; the result is alternating bands of normal and reversed magnetization, **symmetric about the ridge axis**.

That symmetry is the point. Many hypotheses could produce stripes; only spreading from a central crack produces a mirror image. Within five years the debate over continental drift was over, and the ocean floor had become a dated map — the single most quantitative dataset in plate tectonics, and the source of essentially every number in [3.5](03-05-plate-kinematics-euler-poles.md).

## The idea

**Crustal rocks carry two magnetizations, and which dominates matters.** Any magnetic mineral is magnetized *induced* — aligned with the present field, proportional to susceptibility — and may also carry a *remanent* magnetization frozen in long ago ([3.3](03-03-paleomagnetism.md)). Their ratio is the Königsberger ratio $Q$. For most continental rocks $Q < 1$ and induced magnetization wins. **For fresh oceanic basalt $Q$ is 5 to 50**: the remanence dominates completely, which is exactly why the seafloor records the past rather than the present.

**Reversed stripes read as *negative* anomalies, not as gaps.** A block magnetized opposite to the present field subtracts from it. So the survey sees alternating positive and negative anomalies of a few hundred nT against a background of about 50,000 nT — small, but easy to see once you know to look for the pattern rather than for the amplitude.

**The polarity timescale converts stripe positions into ages.** Radiometrically dated lava sequences on land gave the first few reversals, then the seafloor pattern itself was calibrated and extended. The result — the **geomagnetic polarity timescale** — is a barcode of normal and reversed intervals running back about 160 million years, the age of the oldest surviving ocean floor.

**And distance divided by age is a spreading rate.** Plot stripe distance from the ridge against its age from the timescale, and the slope is the half-spreading rate. A change of slope dates a change in plate motion. This is how essentially all pre-GNSS plate velocities were determined, and the agreement with modern geodetic rates ([2.7](02-07-space-geodesy.md)) is one of the strongest checks in the subject.

**The same barcode works on land, in sediments.** A continuous sedimentary section records the polarity sequence as it accumulates. Matching that pattern to the global timescale — **magnetostratigraphy** — dates the section to within a few tens of thousands of years, far better than most other methods, and correlates sections worldwide because reversals are globally instantaneous.

## The formal version

**Induced and remanent magnetization.**

$$\mathbf M_{\text{ind}} = \chi\mathbf H, \qquad Q = \frac{|\mathbf M_{\text{rem}}|}{|\mathbf M_{\text{ind}}|}.$$

*In words: $Q$ says whether a rock is reporting the present field or a past one.* Fresh mid-ocean-ridge basalt: $Q \approx 5$–$50$. Most granites and sediments: $Q \ll 1$.

**Spreading rate.**

$$\text{half rate} = \frac{\text{distance from ridge axis}}{\text{age of the anomaly}}, \qquad \text{full rate} = 2\times\text{half rate}.$$

*In words: the ridge makes crust on both sides, so the plates separate at twice the rate either flank grows.* Quoted rates are ambiguous unless stated; "the East Pacific Rise spreads at 15 cm/yr" is a full rate, "the Mid-Atlantic Ridge spreads at 1.2 cm/yr" is usually a half rate. Always check.

**Key polarity chrons.**

| Chron | Interval |
|---|---|
| Brunhes (normal) | 0 – 0.78 Ma |
| Matuyama (reversed) | 0.78 – 2.58 Ma |
| Gauss (normal) | 2.58 – 3.60 Ma |
| Gilbert (reversed) | 3.60 – 5.89 Ma |

Within each chron are shorter **subchrons** (Jaramillo, Olduvai), and the numbered anomaly sequence (1, 2, 2A, 3, …, 34) extends the scheme back through the Cenozoic and Mesozoic. The **Cretaceous Normal Superchron** (about 121–83 Ma) has no reversals at all — a 40-Myr blank stretch in the barcode, which is why plate motions in that interval are so poorly constrained.

**Survey corrections.** Before a magnetic anomaly means anything:

| Correction | Removes |
|---|---|
| IGRF subtraction | the main (core) field ([3.1](03-01-the-main-field.md)) |
| diurnal correction | daily variation from ionospheric currents, tens of nT |
| magnetic-storm rejection | external disturbances of hundreds of nT |
| reduction to the pole | the skew introduced by non-vertical field inclination |

**Reduction to the pole.** A compact body in a field of inclination $I$ produces an anomaly that is asymmetric and offset from the body — a dipole seen obliquely. Only at the magnetic pole, where the field is vertical, does the anomaly sit symmetrically over the source. **Reduction to the pole** is a mathematical transformation that recomputes the anomaly as it would appear at $I = 90^\circ$, so that peaks lie over their causes. It becomes unstable at low magnetic latitudes, where the correction is large and ill-conditioned.

**Aeromagnetic surveying.** Flown at a few hundred metres, spaced hundreds of metres apart, it maps the crustal field ($\ell > 14$, [3.1](03-01-the-main-field.md)) and is the standard reconnaissance tool for mapping basement structure, faults, dykes and mineral targets beneath cover.

## Picture

![Left: a magnetic profile across a spreading ridge, drawn as a square-wave-like blue trace with alternating highs and lows, mirror-symmetric about a coral vertical line marked ridge. Below it, a bar representing the crust divided into blocks shaded dark for normal polarity and pale for reversed, again symmetric about the ridge, with matching widths marked by coral arrows on either side labelled same widths, both ways. Notes state that any theory of the ocean floor must explain why the pattern is a mirror image, and that spreading from a central crack with the field reversing as it goes explains it exactly. Right: a plot of distance from the ridge against anomaly age, with points lying on a steep blue line at young ages and a shallower coral line at older ages, meeting at a dashed vertical marker. Labels state that steep means fast, shallow means slow, that the kink dates a change in spreading rate, and that the slope of the plot is the half-spreading rate](assets/03-04-fig1.svg)

The amplitudes are a few hundred nanotesla on a background of fifty thousand. The information is entirely in the pattern.

## Worked examples

**Example 1 (mechanical — a spreading history).** A magnetic profile from a ridge axis identifies four anomalies at the following distances and ages:

| Anomaly | Age (Ma) | Distance (km) |
|---|---|---|
| Brunhes–Matuyama | 0.78 | 22 |
| Matuyama–Gauss | 2.58 | 68 |
| Gilbert base | 5.00 | 130 |
| Anomaly 5 | 10.00 | 200 |

Find the half-spreading rate in each interval and interpret.

$$0\text{–}0.78\ \mathrm{Ma}: \quad \frac{22}{0.78} = 28.2\ \mathrm{km\,Myr^{-1}} = 2.8\ \mathrm{cm\,yr^{-1}}.$$
$$0.78\text{–}2.58: \quad \frac{68-22}{1.80} = \frac{46}{1.80} = 25.6\ \mathrm{km\,Myr^{-1}} = 2.6\ \mathrm{cm\,yr^{-1}}.$$
$$2.58\text{–}5.00: \quad \frac{130-68}{2.42} = \frac{62}{2.42} = 25.6\ \mathrm{km\,Myr^{-1}} = 2.6\ \mathrm{cm\,yr^{-1}}.$$
$$5.00\text{–}10.00: \quad \frac{200-130}{5.00} = \frac{70}{5.00} = 14.0\ \mathrm{km\,Myr^{-1}} = 1.4\ \mathrm{cm\,yr^{-1}}.$$

**The ridge spread at 1.4 cm/yr until 5 Ma, then nearly doubled to 2.6–2.8 cm/yr.** The full spreading rate is twice these: 2.8 cm/yr before 5 Ma, 5.6 cm/yr since. A near-doubling of a plate's velocity at a specific time is a tectonic event — typically the initiation of a new subduction zone somewhere on that plate's boundary, or the death of one — and dating it to 5 Ma from a magnetic profile is the kind of result that makes this dataset so valuable.

**Example 2 (why you'd care — why symmetry, not stripes, was the argument).** Before 1963 the stripey magnetic pattern of the northeast Pacific had been mapped in detail and was regarded as a curiosity. Explain why the pattern alone did not settle anything, and why symmetry did.

*What stripes alone permit.* Several hypotheses were live. Long, linear bodies of unusually magnetic rock intruded along faults would produce stripes. Alternating bands of differing composition, laid down by some unknown process, would produce stripes. Variation in the *intensity* of magnetization along strike, with no polarity change at all, would produce stripes. **The existence of a linear pattern constrains nothing beyond linearity**, and the northeast Pacific surveys — which happened not to cross a ridge — could not discriminate.

*What symmetry demands.* Once profiles crossed a ridge, the pattern was found to be a **mirror image about the axis**, with the widths of corresponding bands matching on both flanks to within survey error. That is a very strong constraint. It requires a process that:

- creates material at a single line;
- imprints a signal on it at the moment of creation;
- moves it away in both directions at equal rates;
- and applies the same signal simultaneously to both sides.

Seafloor spreading plus field reversals satisfies all four and nothing else on offer did. In particular, an intrusion hypothesis has no reason to produce equal widths on both flanks, and a compositional-banding hypothesis has no reason to produce a mirror plane at all.

*And the prediction that clinched it.* Vine and Matthews' hypothesis was not merely consistent; it was **falsifiable in a specific way**. If the stripes record reversals, then the widths must be proportional to the durations of the polarity chrons, which were being independently determined at the time from radiometrically dated lavas on land. So the *pattern of widths* on the seafloor had to match the *pattern of durations* on land — a match of a barcode against a completely separate barcode, with no free parameters except a single spreading rate. It matched. **Two datasets sharing no instruments, no materials and no assumptions produced the same sequence of intervals.**

*The transferable point.* This is a recurring shape of argument in this course: [3.1](03-01-the-main-field.md)'s magnetic estimate of the core radius against seismology's, [2.5](02-05-solid-earth-tides-rotation.md)'s three independent length-of-day terms, [3.3](03-03-paleomagnetism.md)'s fold test. **A hypothesis that merely fits the data it was built on is weak; one that predicts an unrelated dataset is strong.** The seafloor stripes were a curiosity for a decade because nobody had asked them to predict anything.

## Watch out

- **You might think** a reversed stripe means the rock is unmagnetized. **Actually** it is magnetized just as strongly, in the opposite direction, and shows as a *negative* anomaly. If you contour the total field without removing the IGRF, the reversed stripes look like ordinary lows and the pattern is invisible.
- **You might think** the anomaly peak lies over the body producing it. **Actually** at any inclination other than 90° it does not: the anomaly is skewed and displaced, sometimes by more than the body's own width. Reduction to the pole fixes this, and forgetting it is a classic way to drill in the wrong place.
- **You might think** a wider stripe means faster spreading. **Actually** width is rate *times* chron duration, and chron durations vary by more than an order of magnitude. A wide band may be a fast interval or a long chron. You need the timescale to separate them, which is why the calibration against dated land lavas was essential rather than a nicety.

## One-liner

> Fresh ocean crust locks in the field's polarity as it cools, so the seafloor is a barcode of reversals — and the fact that the barcode is a mirror image about the ridge is what proved seafloor spreading.

## Problems

**P1 (🟢)** On a ridge flank, the Matuyama–Gauss boundary (2.58 Ma) lies 47 km from the axis. (a) Compute the half-spreading rate in cm/yr. (b) Compute the full spreading rate. (c) Predict the distance to the Brunhes–Matuyama boundary (0.78 Ma), assuming constant rate.

**P2 (🟡)** A profile across a ridge gives the Brunhes–Matuyama boundary 31 km east of the axis and 19 km west of it. (a) Compute the half rate on each flank. (b) Compute the full spreading rate. (c) Explain what asymmetric spreading implies about the ridge axis itself, and compute the rate at which the axis is migrating relative to a point fixed midway between the plates.

**P3 (🔴, bridges to [3.5](03-05-plate-kinematics-euler-poles.md))** A continuous marine sedimentary section 42 m thick records, from bottom to top: 6 m reversed, 11 m normal, 9 m reversed, 16 m normal. Independent microfossils place the section in the Pliocene–Pleistocene. (a) Match the sequence to the polarity timescale given in the lesson, justifying the match. (b) Compute the sedimentation rate in cm/kyr for each interval. (c) State the age of the top and bottom of the section. (d) A colleague proposes instead that the top 16 m is the Gauss chron and the whole section is older. Give one quantitative argument against, and state what additional observation would settle it.

<details>
<summary>Solutions</summary>

**P1** (a) $$\text{half rate} = \frac{47\ \mathrm{km}}{2.58\ \mathrm{Myr}} = 18.2\ \mathrm{km\,Myr^{-1}} = 1.8\ \mathrm{cm\,yr^{-1}}.$$

(b) $$\text{full rate} = 2\times1.8 = 3.6\ \mathrm{cm\,yr^{-1}}.$$

(c) $$d = 18.2\times0.78 = 14.2\ \mathrm{km}.$$

**P2** (a) $$\text{east}: \frac{31}{0.78} = 39.7\ \mathrm{km\,Myr^{-1}} = 4.0\ \mathrm{cm\,yr^{-1}}; \qquad \text{west}: \frac{19}{0.78} = 24.4\ \mathrm{km\,Myr^{-1}} = 2.4\ \mathrm{cm\,yr^{-1}}.$$

(b) The full separation rate is the sum of the two flanks' growth rates:

$$\frac{31+19}{0.78} = \frac{50}{0.78} = 64.1\ \mathrm{km\,Myr^{-1}} = 6.4\ \mathrm{cm\,yr^{-1}}.$$

(c) **The ridge axis is not staying midway between the plates.** If it were, both flanks would grow equally. Because the eastern flank has grown 31 km while the western has grown 19, the axis has moved 6 km westward relative to the midpoint of the two plates over 0.78 Myr:

$$v_{\text{migration}} = \frac{(31-19)/2}{0.78} = \frac{6}{0.78} = 7.7\ \mathrm{km\,Myr^{-1}} = 0.77\ \mathrm{cm\,yr^{-1}}.$$

This is entirely ordinary. Ridges are not anchored to anything; they are passive features that sit wherever the plates are pulling apart, and they migrate freely in an absolute reference frame. Asymmetric spreading is one of the observations that establishes ridges are *passive* rather than driving plate motion — a point developed in [4.5](04-05-plate-driving-forces.md).

**P3** (a) The sequence bottom-to-top is R, N, R, N with thicknesses 6, 11, 9, 16 m. Reading the timescale downward from the present: Brunhes (N), Matuyama (R), Gauss (N), Gilbert (R). Bottom-to-top that is R (Gilbert), N (Gauss), R (Matuyama), N (Brunhes) — **matching the observed order exactly**.

The match is supported by the *ratios* as well as the order, which is the real test. Chron durations: Gilbert (partial), Gauss 1.02 Myr, Matuyama 1.80 Myr, Brunhes 0.78 Myr. Observed thickness ratios Gauss : Matuyama : Brunhes = 11 : 9 : 16. If sedimentation were uniform these should match the duration ratios 1.02 : 1.80 : 0.78, which they clearly do not — so sedimentation is *not* uniform, and part (b) is where that shows up.

(b) Using the chron boundaries: Brunhes is 0–0.78 Ma (16 m), Matuyama 0.78–2.58 Ma (9 m), Gauss 2.58–3.60 Ma (11 m).

$$\text{Brunhes}: \frac{1600\ \mathrm{cm}}{780\ \mathrm{kyr}} = 2.05\ \mathrm{cm\,kyr^{-1}},$$
$$\text{Matuyama}: \frac{900}{1800} = 0.50\ \mathrm{cm\,kyr^{-1}},$$
$$\text{Gauss}: \frac{1100}{1020} = 1.08\ \mathrm{cm\,kyr^{-1}}.$$

Sedimentation rates varying by a factor of four — a real result, not an error, and the kind of thing magnetostratigraphy is used to detect. A drop to 0.5 cm/kyr through the Matuyama could mean reduced supply, increased dissolution, or a period of current winnowing.

(c) The top of the section is **0 Ma** (present, since the Brunhes is the current chron and the section runs to the seafloor). The bottom lies within the Gilbert, 6 m below the Gilbert–Gauss boundary at 3.60 Ma. Extrapolating at the Gauss rate of 1.08 cm/kyr:

$$\Delta t = \frac{600\ \mathrm{cm}}{1.08\ \mathrm{cm\,kyr^{-1}}} = 556\ \mathrm{kyr}, \qquad \text{bottom age} \approx 3.60 + 0.56 = 4.2\ \mathrm{Ma}.$$

(The extrapolation uses the adjacent chron's rate, which is the best available assumption but is exactly the sort of step to flag as uncertain.)

(d) *The quantitative argument against.* If the top 16 m were the Gauss chron (1.02 Myr), the section would run R–N–R–N as Gilbert–Gauss–?–? going *up*, which requires the two units above the Gauss to be a reversed and then a normal chron older than Gilbert — but the proposal has them younger, so the polarity sequence would have to run backwards in time. More simply: the section reaches the modern seafloor, and the modern seafloor is Brunhes-age normal polarity by definition. **A section whose topmost unit is normal and which extends to the present must have Brunhes at the top.**

If the section did *not* reach the surface, the argument is weaker but still available through the ratios: under the colleague's assignment the 16 m would span 1.02 Myr (1.57 cm/kyr) and the 9 m would span the 0.98 Myr of the pre-Gauss reversed interval (0.92 cm/kyr), which is not obviously absurd — so the ratios alone do not settle it, and this is worth admitting.

*The observation that would settle it.* Two good options. **Biostratigraphy at higher resolution**: a nannofossil or foraminiferal datum with a known age tied to the same timescale would pin one horizon absolutely. Or **a short subchron**: the Jaramillo (0.99–1.07 Ma) and Olduvai (1.78–1.94 Ma) are brief normal intervals inside the Matuyama, and the Kaena and Mammoth are brief reversed intervals inside the Gauss. Finding a thin normal band inside the 9 m reversed unit would identify it as Matuyama unambiguously; finding a thin reversed band inside the 11 m normal unit would identify that as Gauss. **Subchrons are the fingerprints that make a barcode match unique**, which is why high-resolution sampling is worth the effort.

</details>

## Flashback

**From Lesson 3.3 (Palaeomagnetism):** A lava flow now at 34.0°S records a stable inclination of $-58.0^\circ$. (a) Compute the palaeolatitude. (b) Compute the latitudinal displacement. (c) The flow is dated at 90 Ma; compute the average velocity and comment on whether the sign of the motion is northward or southward.

<details>
<summary>Solution</summary>

(a) $$\tan\lambda = \frac{\tan(-58.0^\circ)}{2} = \frac{-1.6003}{2} = -0.80015 \;\Rightarrow\; \lambda = -38.7^\circ, \text{ i.e. } 38.7^\circ\mathrm{S}.$$

(b) $$\Delta\lambda = 38.7 - 34.0 = 4.7^\circ, \qquad d = 4.7\times111.2 = 523\ \mathrm{km}.$$

(c) $$v = \frac{5.23\times10^{5}\ \mathrm{m}}{9.0\times10^{7}\ \mathrm{yr}} = 5.8\times10^{-3}\ \mathrm{m\,yr^{-1}} = 5.8\ \mathrm{mm\,yr^{-1}}.$$

The site was at 38.7°S and is now at 34.0°S, so it has moved **northward** (toward the equator) — but at only 6 mm/yr, which is very slow, and over 90 Myr the total displacement of 523 km is comparable to the uncertainty that secular variation and non-GAD field terms introduce.

The honest conclusion is that this flow records **little or no resolvable latitudinal motion**. That is a perfectly respectable result and a common one: many continental interiors have stayed at nearly constant latitude for long intervals while moving substantially in longitude, which palaeomagnetism cannot see at all ([3.3](03-03-paleomagnetism.md)). Reporting "5.8 mm/yr northward" without noting that it is within error of zero would be overclaiming.

</details>

## Connections

- **Backward:** the remanence that the seafloor carries is [3.3](03-03-paleomagnetism.md)'s thermoremanent magnetization, acquired as basalt cools through its blocking temperature; the reversals it records are the dynamo of [3.2](03-02-the-geodynamo.md) doing what its equations allow; the IGRF removed before any anomaly is computed is [3.1](03-01-the-main-field.md)'s.
- **Forward:** [3.5](03-05-plate-kinematics-euler-poles.md) turns spreading rates and fracture-zone directions into Euler poles and full plate reconstructions; [4.3](04-03-cooling-oceanic-lithosphere.md) uses the same seafloor ages to test the $\sqrt{t}$ cooling law; [6.3](06-03-electrical-electromagnetic-methods.md) covers aeromagnetic surveying as an exploration method.
- **Sideways:** [`geology` 2.1](../../geology/lessons/02-01-evidence-for-drift.md) owns the historical argument that these stripes settled, and [`geology` 4.3](../../geology/lessons/04-03-geologic-timescale.md) uses magnetostratigraphy as one of the correlation tools that built the geologic timescale, citing this lesson for the quantitative treatment. The barcode-matching logic of P3 — align two patterns of unequal intervals and let the ratios do the work — is the same reasoning used in dendrochronology and in ice-core correlation.
