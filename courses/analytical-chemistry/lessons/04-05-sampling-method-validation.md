# Analytical & Instrumental Chemistry · Lesson 4.5: Sampling & method validation

> ⏱ ~15 min · Module 4: Chromatography, mass spectrometry & validation · Builds on: [1.2 Statistics of measurement](01-02-statistics-of-measurement.md), [1.4 Significance tests & calibration](01-04-significance-tests-calibration.md), and every method in Modules 2–4 · Unlocks: course complete — onward to instrumental analysis and real lab work

## Why this matters

You can run the sharpest HPLC in the building, calibrate it to $R^2 = 0.9999$, and still report a number that is flatly wrong — because you analyzed the wrong scoop of dirt, or because nobody ever checked that the method recovers what it claims to. This capstone answers the question every previous lesson has been building toward: *how do you prove a result is trustworthy?* The answer has two halves — get a **representative sample**, and run a **validated method** — and both are quantified with the statistics from Module 1. A number without this backing is a guess with a decimal point.

## The idea

Two ideas, one arc.

**First: the result is only as good as the sample.** Analysts obsess over instruments, but the largest error usually creeps in *before* the sample reaches the lab. If you grab topsoil from one convenient corner of a field and the contamination is actually pooled fifty meters away, no instrument on Earth will tell you the truth — it will give you a beautifully precise answer about the *wrong material*. Uncertainty stacks: the scatter you finally report is the sampling scatter and the analytical scatter added in quadrature, and in field work the sampling term usually **dominates**. You cannot polish a bad sample into a good result.

**Second: a method must earn trust before you believe it.** "Validation" is the ritual of proving, with numbers, that a method actually measures what it claims — that it is accurate (hits the true value), precise (repeats), linear over its range, sensitive enough (low detection limit), specific (ignores interferences), and rugged (survives small real-world perturbations). Each of these is a **figure of merit** with a defined experiment and an acceptance criterion. Pass them all and you have a defensible number; fail one and you have homework.

Tie the two together and you get the whole course in one sentence: a defensible number is a **representative sample** run through a **validated method**, reported with an **uncertainty and a significance test** from Module 1.

## The formal version

**Total variance splits.** Sampling and analysis are independent random-error sources, so their variances add (this is exactly the propagation-in-quadrature rule from [1.3](01-03-propagation-of-uncertainty.md)):

$$s_\text{total}^2 = s_\text{sampling}^2 + s_\text{analysis}^2.$$

*In words: the spread in your final answer is the sampling spread and the analytical spread combined by squares, not by simple addition.* The consequence is brutal and useful: if $s_\text{sampling} = 0.40$ and $s_\text{analysis} = 0.15$, then $s_\text{total} = \sqrt{0.40^2 + 0.15^2} = 0.43$ — driving the *analytical* error all the way to zero would only move $0.43 \to 0.40$. **The bigger term rules; spend your effort there.** Usually that means taking more sample increments, not buying a better detector.

**Sampling strategies.** To make the sample stand in for the whole population:

- **Random** — every part has equal chance of selection (removes bias, needs a sampling frame).
- **Systematic** — take increments on a fixed grid or time interval (easy, but can alias with periodic structure).
- **Composite** — physically combine many increments into one averaged sample (cheap way to estimate the mean; throws away between-increment variance).

Collect $n$ **increments** and the sampling standard error falls as $s_\text{sampling}/\sqrt{n}$ — the same $1/\sqrt{n}$ law from [1.2](01-02-statistics-of-measurement.md), now applied to *where you dig*, not *how many times you read the meter*. After collection, **sample preparation** (homogenize, dry, digest, dilute), **preservation** (chill, acidify, exclude light) and **contamination control** (clean glassware, reagent blanks) protect the sample between field and instrument.

**Figures of merit for method validation:**

- **Accuracy** — closeness to the true value. Measure it with a **certified reference material (CRM)** of known concentration, or by **spike recovery**: add a known amount and see how much you get back.
$$\%\,\text{recovery} = \frac{C_\text{spiked} - C_\text{unspiked}}{C_\text{added}}\times 100\%.$$
*In words: of the known spike you added, what fraction did the method find?* Acceptance is typically 90–110% (looser near the detection limit).

- **Precision** — reproducibility of replicates, reported as $\mathrm{RSD} = s/\bar x$ (from [1.2](01-02-statistics-of-measurement.md)). **Repeatability** is within one day, one analyst, one instrument (best case); **reproducibility** is across days, analysts, or labs (realistic case, always larger). Quote both.

- **Linearity & range** — the calibration ([1.4](01-04-significance-tests-calibration.md)) must be a straight line over the working range; report $R^2$ (target $\ge 0.995$) and state the concentration span for which it holds.

- **Limit of detection / quantitation** — the smallest signal distinguishable from blank noise, straight from [1.4](01-04-significance-tests-calibration.md):
$$\text{LOD} = \frac{3\,s_\text{blank}}{m}, \qquad \text{LOQ} = \frac{10\,s_\text{blank}}{m},$$
where $s_\text{blank}$ is the standard deviation of repeated blank measurements and $m$ is the calibration slope (sensitivity). *In words: LOD is where signal pokes 3 noise-widths above blank; LOQ (10 widths) is where you can trust the number, not just its existence.*

- **Selectivity / specificity** — the method responds to the analyte and *not* to interferents. Test by spiking into the real matrix and checking recovery, or by resolving the analyte from everything else (chromatographic resolution $R_s$ from [4.1](04-01-separation-theory-plates-resolution.md), or a unique $m/z$ from [4.4](04-04-mass-spectrometry.md)).

- **Robustness / ruggedness** — insensitivity to *small deliberate* changes (± a few °C, ± 0.2 pH units, a new column lot, a different day/analyst). A robust method's result barely moves; a fragile one that only works on Tuesdays is not deployable.

All of this lands in a **validation report** — the figures of merit, their experiments, their acceptance criteria, and pass/fail — the document that lets someone else trust your number.

## Picture

![Left: a stacked bar showing total variance dominated by the coral sampling term over a small blue analytical term, with s-squared-total = s-squared-samp + s-squared-anal. Right: a four-tile validation dashboard — Recovery 98%, RSD 1.8%, R-squared 0.999, LOD 0.08 ppm — plus selectivity, robustness, range.](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (where the error lives).** A soil-lead survey has sampling standard deviation $s_\text{samp} = 0.40$ ppm and analytical standard deviation $s_\text{anal} = 0.15$ ppm. Then

$$s_\text{total} = \sqrt{0.40^2 + 0.15^2} = \sqrt{0.16 + 0.0225} = \sqrt{0.1825} = 0.427\ \mathrm{ppm}.$$

Sampling accounts for $0.16/0.1825 = 88\%$ of the total variance. Your instinct might be to upgrade the instrument — but halving $s_\text{anal}$ to $0.075$ gives $s_\text{total} = \sqrt{0.16 + 0.0056} = 0.407$, a mere 5% gain. Halving $s_\text{samp}$ to $0.20$ gives $s_\text{total} = \sqrt{0.04 + 0.0225} = 0.25$ — a 41% cut. **Take more soil increments; the detector is fine.**

**Example 2 (does the method actually work?).** You validate a method for copper in wastewater. A sample reads 4.20 ppm. You spike an identical aliquot with a known 2.00 ppm addition and it reads 6.05 ppm. Recovery:

$$\%\,\text{recovery} = \frac{6.05 - 4.20}{2.00}\times 100\% = \frac{1.85}{2.00}\times 100\% = 92.5\%.$$

Against a 90–110% acceptance window, the method **passes** on accuracy — the matrix isn't eating your analyte or inflating it. Pair that with an $\mathrm{RSD}$ of a few percent (precision), $R^2 = 0.999$ over 0–10 ppm (linearity), and an $\mathrm{LOD}$ well below your samples, and you can defend the 4.20 ppm figure to a regulator.

## Watch out

- **You might think a great instrument guarantees a great result.** It guarantees a great answer *about the sample you fed it*. If that sample doesn't represent the population, precision and accuracy on the instrument are wasted — you have a sharp answer to the wrong question. Sampling error is invisible to the detector.
- **You might average variances or standard deviations by adding them directly.** Variances add ($s_\text{total}^2 = s_\text{samp}^2 + s_\text{anal}^2$); standard deviations add *in quadrature*, not linearly. $0.40 + 0.15 \ne 0.43$ — the quadrature sum is smaller because the small term contributes only through its square.
- **You might confuse repeatability with reproducibility.** Same-day-same-analyst precision (repeatability) always looks better than across-day-across-lab precision (reproducibility). Reporting only the rosy repeatability number oversells the method; real deployment lives at reproducibility.
- **You might treat high recovery as always good.** Recovery *above* ~110% signals a positive interference or contamination (you found more than you added), which is a selectivity failure — not a bonus.

## One-liner

> A defensible number is a representative sample run through a validated method and reported with an uncertainty — and since $s_\text{total}^2 = s_\text{samp}^2 + s_\text{anal}^2$, the sample usually matters more than the machine.

## Problems

**P1 (🟢)** A groundwater nitrate survey has sampling standard deviation $s_\text{samp} = 0.30$ mg/L and analytical standard deviation $s_\text{anal} = 0.12$ mg/L. (a) Compute $s_\text{total}$. (b) What fraction of the *total variance* comes from sampling? (c) You have budget to cut *either* term in half — which should you cut, and roughly how much does $s_\text{total}$ improve either way?

**P2 (🟡)** You are validating a method for cadmium in rice. (a) An unspiked digest reads 0.148 ppm; an identical aliquot spiked with 0.100 ppm reads 0.243 ppm. Compute the % recovery and decide whether it passes a 90–110% acceptance criterion. (b) Ten reagent blanks give a signal standard deviation $s_\text{blank} = 0.0010$ absorbance units, and the calibration slope is $m = 0.0500$ AU per ppm. Compute the LOD and LOQ (callback to [1.4](01-04-significance-tests-calibration.md)).

**P3 (🔴)** You must validate a method to measure **lead in household drinking water**, where the regulatory action level is 15 ppb and samples are collected from many homes' taps. (a) List the figures of merit you would measure and give a one-line experiment and acceptance target for each. (b) A colleague proposes to skip sampling design and just "run everything on our new ICP-MS, it's incredibly precise." Using $s_\text{total}^2 = s_\text{samp}^2 + s_\text{anal}^2$, explain why a superb instrument cannot rescue an unrepresentative sampling plan for lead-in-water specifically.

<details>
<summary>Solutions</summary>

**P1**
(a) Variances add in quadrature:
$$s_\text{total} = \sqrt{0.30^2 + 0.12^2} = \sqrt{0.09 + 0.0144} = \sqrt{0.1044} = 0.323\ \mathrm{mg/L}.$$
(b) Sampling fraction of total variance:
$$\frac{s_\text{samp}^2}{s_\text{total}^2} = \frac{0.09}{0.1044} = 0.862 = 86\%.$$
(c) Cut **sampling**. Halving $s_\text{samp}$ to $0.15$: $s_\text{total} = \sqrt{0.0225 + 0.0144} = \sqrt{0.0369} = 0.192$ mg/L — a 41% reduction. Halving $s_\text{anal}$ to $0.06$: $s_\text{total} = \sqrt{0.09 + 0.0036} = \sqrt{0.0936} = 0.306$ mg/L — only a 5% reduction. The dominant term controls the total, so effort spent shrinking the small analytical term is nearly wasted. In practice: collect more increments (the $1/\sqrt{n}$ law), don't chase a fancier detector.

**P2**
(a) Recovery:
$$\%\,\text{recovery} = \frac{C_\text{spiked} - C_\text{unspiked}}{C_\text{added}}\times 100\% = \frac{0.243 - 0.148}{0.100}\times 100\% = \frac{0.095}{0.100}\times 100\% = 95\%.$$
95% lies inside 90–110%, so the method **passes** on accuracy — good analyte recovery from the rice matrix.
(b) Detection limits (from [1.4](01-04-significance-tests-calibration.md)):
$$\text{LOD} = \frac{3\,s_\text{blank}}{m} = \frac{3(0.0010)}{0.0500} = \frac{0.0030}{0.0500} = 0.060\ \mathrm{ppm},$$
$$\text{LOQ} = \frac{10\,s_\text{blank}}{m} = \frac{10(0.0010)}{0.0500} = \frac{0.010}{0.0500} = 0.20\ \mathrm{ppm}.$$
The 0.148 ppm sample sits below the LOQ of 0.20 ppm — detectable and above the 0.060 ppm LOD, but *not* in the reliably-quantifiable range. You would report it as detected but flag that it is below the LOQ, and consider preconcentrating to pull it above 0.20 ppm.

**P3**
(a) A defensible validation would measure:
- **Accuracy** — analyze a certified reference water (or spike tap water with a known lead standard); target 85–115% recovery near 15 ppb.
- **Precision** — replicate a spiked sample within-day (repeatability) and across several days (reproducibility); target RSD ≤ ~10–20% near the action level, tighter higher up.
- **Linearity & range** — calibrate across ~1–50 ppb spanning the 15 ppb level; require $R^2 \ge 0.995$ and confirm the action level sits mid-range.
- **LOD / LOQ** — from blank replicates, $3s/m$ and $10s/m$; require LOQ comfortably below 15 ppb (e.g. ≤ 3 ppb) so a pass/fail decision at the limit is trustworthy.
- **Selectivity** — confirm other metals and the matrix don't interfere; ICP-MS at lead's $m/z$ (and internal-standard correction) or a matrix-spike recovery test.
- **Robustness** — vary acid-preservation strength, digestion time, and analyst/day slightly; the result should barely move.
Everything is compiled into a validation report with pass/fail against each target.

(b) Lead in tap water is *heterogeneous in space and time*: it leaches from pipes and solder, so concentration depends on which tap, whether the water sat stagnant overnight (first-draw) versus was flushed, the temperature, and the household's plumbing. That variability is $s_\text{samp}$, and it is large. Since
$$s_\text{total}^2 = s_\text{samp}^2 + s_\text{anal}^2,$$
a superb ICP-MS only shrinks $s_\text{anal}$ toward zero, leaving $s_\text{total} \to s_\text{samp}$. If you grab one flushed sample from one convenient tap at noon, the instrument reports that water's lead to four figures — a precise, accurate answer about a sample that doesn't represent the household's actual exposure (which spikes in the stagnant first draw). The fix is a **sampling protocol** — standardized first-draw after a defined stagnation, multiple taps/homes, defined collection time — not a better detector. Perfect analysis of the wrong sample is still the wrong number.

</details>

## Flashback

**From Lesson 1.2 (Statistics of measurement):** Four replicate determinations of chloride in a brine give 24.32, 24.28, 24.35, and 24.29 mM. Compute the mean $\bar x$, the sample standard deviation $s$, and the percent relative standard deviation (%RSD). (Fresh variant — four points, new data.)

<details>
<summary>Solution</summary>

Mean:
$$\bar x = \frac{24.32 + 24.28 + 24.35 + 24.29}{4} = \frac{97.24}{4} = 24.31\ \mathrm{mM}.$$
Deviations from the mean: $+0.01,\ -0.03,\ +0.04,\ -0.02$; their squares sum to
$$0.0001 + 0.0009 + 0.0016 + 0.0004 = 0.0030.$$
Standard deviation ($n-1 = 3$ degrees of freedom):
$$s = \sqrt{\frac{0.0030}{3}} = \sqrt{0.0010} = 0.032\ \mathrm{mM}.$$
Relative standard deviation:
$$\%\,\mathrm{RSD} = \frac{s}{\bar x}\times 100\% = \frac{0.032}{24.31}\times 100\% = 0.13\%.$$

*Check.* Units are consistent (mM throughout; RSD dimensionless), and 0.13% is excellent precision — appropriate for a careful titration or ion-chromatography assay. This $s$ is exactly the $s_\text{analysis}$ that would enter $s_\text{total}^2 = s_\text{samp}^2 + s_\text{anal}^2$ in this lesson. ✓

</details>

## Connections

- **Backward:** this lesson is Module 1 cashed out. The quadrature sum $s_\text{total}^2 = s_\text{samp}^2 + s_\text{anal}^2$ is propagation of uncertainty ([1.3](01-03-propagation-of-uncertainty.md)); RSD and the $1/\sqrt{n}$ increment law are [1.2](01-02-statistics-of-measurement.md); LOD/LOQ and the calibration slope are [1.4](01-04-significance-tests-calibration.md); selectivity leans on chromatographic resolution ([4.1](04-01-separation-theory-plates-resolution.md)) and mass-spectral specificity ([4.4](04-04-mass-spectrometry.md)).
- **Sideways:** the statistics here are the same population-vs-sample inference you'd meet in [`prob-stat-refresher`](../../prob-stat-refresher/syllabus.md) — validation is applied hypothesis testing and interval estimation wearing a lab coat.
- **Forward — closing the course.** You've walked the full arc of analytical chemistry: **measurement and statistics** (Module 1) taught you to attach an honest uncertainty to any number; **classical equilibria, titrimetry and gravimetry** (Module 2) turned reactions into quantitative tools; **spectroscopic and electroanalytical methods** (Module 3) read concentration off light and voltage via Beer's law and the Nernst equation; and **separations, mass spectrometry and validation** (Module 4) pulled apart mixtures, identified their pieces by mass, and — here — proved the whole chain measures what it claims. That is the entire job of analytical chemistry: turning "how much of what is in this?" into a **defensible number with an uncertainty**. From here the natural next steps are deeper *instrumental analysis* (FT-IR, NMR, advanced LC-MS/MS and hyphenated techniques), *chemometrics* (multivariate calibration and experimental design), and hands-on method development in a real lab — where every one of these figures of merit becomes a line you personally sign off on. You now have the whole toolkit. Go measure something and defend the number.
