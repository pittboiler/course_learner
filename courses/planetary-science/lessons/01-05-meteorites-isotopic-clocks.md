# Planetary Science · Lesson 1.5: Meteorites and isotopic clocks

> ⏱ ~15 min · Module 1: Solar-system formation · Builds on: [1.2](01-02-condensation-frost-line.md), [1.3](01-03-accretion-dust-to-planetesimals.md) · Unlocks: [1.6](01-06-cosmochemistry-volatile-delivery.md), [2.1](02-01-differentiation-interior-structure.md), [2.4](02-04-impact-cratering-chronology.md)

## Why this matters

The solar system is 4.567 billion years old, and that number is known to four significant figures — a precision of about one part in a thousand, on an event nobody watched, from material that fell out of the sky. It is one of the most impressive measurements in the physical sciences, and every date in the rest of this course hangs off it: the age of the Moon, the timing of core formation, the calibration of crater chronology, the lifetime of the disk.

What makes it work is that meteorites are *not* rocks from planets. Most are fragments of bodies that grew to a few hundred kilometres, never got hot enough to melt and re-mix, and have sat undisturbed ever since. They are the disk's own sediment, and their isotopes have been running as clocks the whole time.

## The idea

**A radiometric clock is not a measurement of how much parent is left.** That would require knowing how much you started with, which you never do. The trick is different, and it is the whole subject.

**You measure a ratio, in several samples, and let the line do the work.** A rock crystallizing from a melt divides its elements between minerals according to chemistry, not isotopes: one mineral takes lots of rubidium, another takes almost none. But every mineral inherits the *same isotopic composition* of strontium, because isotopes of the same element are chemically near-identical. So at the moment of crystallization, all the minerals have different parent/daughter ratios and identical daughter/daughter ratios.

**Then time runs.** Each mineral converts $^{87}$Rb into $^{87}$Sr at the same fractional rate, so the mineral with the most rubidium gains the most radiogenic strontium. Plot daughter-ratio against parent-ratio and the samples, which started on a horizontal line, rotate upward about a fixed point. **The slope of that line is the age. The intercept is the initial composition you did not need to know.** That is the isochron, and it is self-validating: if the points do not fall on a line, the system was disturbed and the age is rejected.

**A second kind of clock measures order, not age.** Some radionuclides — aluminium-26 with its 0.72 Myr half-life is the important one — were present when the solar system formed and are now entirely gone. You cannot use them to date anything absolutely, because there is no surviving parent to measure. But you can measure the *excess daughter* ($^{26}$Mg) in a sample and infer how much $^{26}$Al it had when it formed. A sample with more $^{26}$Al formed earlier. **With a 0.72 Myr half-life the resolution is exquisite — tens of thousands of years across a 4.567-billion-year baseline — but it is entirely relative.** It tells you two objects formed 2 Myr apart; it cannot tell you 2 Myr after what.

**The two clocks are used together and anchored to each other.** The absolute clock (uranium–lead, which is the one that actually delivers 4.567 Gyr) dates a few well-behaved samples precisely; the short-lived clocks then order everything else finely relative to those anchors.

## The formal version

**The decay law.** For parent $P$ with decay constant $\lambda = \ln 2/t_{1/2}$, $P(t) = P_0e^{-\lambda t}$, and every decayed atom becomes a daughter $D$. Writing $D_0$ for the daughter already present at $t=0$:

$$D(t) = D_0 + P_0\left(1 - e^{-\lambda t}\right) = D_0 + P(t)\left(e^{\lambda t}-1\right).$$

*In words: today's daughter is what you started with plus what today's parent implies must have decayed.* The second form is the useful one because $P(t)$ is measurable and $P_0$ is not. The decay law itself is [intro-nuclear-engineering 1.3](../../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md)'s.

**The isochron.** Divide through by a stable, non-radiogenic isotope of the daughter element ($^{86}$Sr, which neither decays nor is produced):

$$\boxed{\ \underbrace{\frac{^{87}\mathrm{Sr}}{^{86}\mathrm{Sr}}}_{y} = \underbrace{\left(\frac{^{87}\mathrm{Sr}}{^{86}\mathrm{Sr}}\right)_0}_{\text{intercept}} + \underbrace{\left(e^{\lambda t}-1\right)}_{\text{slope}}\underbrace{\frac{^{87}\mathrm{Rb}}{^{86}\mathrm{Sr}}}_{x}\ }$$

*In words: a straight line whose slope contains the age and whose intercept is the initial daughter composition, both read off the same plot.* Normalizing by $^{86}$Sr is what removes the dependence on sample size and on how much strontium a given mineral happened to take up.

Solve for the age:

$$t = \frac{1}{\lambda}\ln\left(1 + \text{slope}\right).$$

**The main long-lived systems.**

| System | $t_{1/2}$ (Gyr) | Normalizing isotope | Note |
|---|---|---|---|
| $^{87}$Rb $\to$ $^{87}$Sr | 48.8 | $^{86}$Sr | the textbook isochron |
| $^{147}$Sm $\to$ $^{143}$Nd | 106 | $^{144}$Nd | resistant to alteration |
| $^{238}$U $\to$ $^{206}$Pb | 4.47 | $^{204}$Pb | **two U isotopes decay to two Pb isotopes** |
| $^{235}$U $\to$ $^{207}$Pb | 0.704 | $^{204}$Pb | — |

The U–Pb pair is the precision instrument, precisely because there are *two* independent decays running at very different rates in the same mineral. They must give the same age; where they do, the result is trustworthy to a fraction of a percent, and that is where 4.567 Gyr comes from.

**Short-lived radionuclides.** For an extinct nuclide, the measurable is the daughter excess correlated against a stable isotope of the *parent's* element:

$$\frac{^{26}\mathrm{Mg}}{^{24}\mathrm{Mg}} = \left(\frac{^{26}\mathrm{Mg}}{^{24}\mathrm{Mg}}\right)_0 + \left(\frac{^{26}\mathrm{Al}}{^{27}\mathrm{Al}}\right)_{\!0}\frac{^{27}\mathrm{Al}}{^{24}\mathrm{Mg}},$$

so the slope gives the $^{26}$Al$/^{27}$Al ratio *at the time the sample formed*. Two samples formed $\Delta t$ apart differ by

$$\frac{(^{26}\mathrm{Al}/^{27}\mathrm{Al})_1}{(^{26}\mathrm{Al}/^{27}\mathrm{Al})_2} = e^{\lambda\Delta t} = 2^{\Delta t/t_{1/2}}.$$

| Nuclide | $t_{1/2}$ (Myr) | Daughter | Used for |
|---|---|---|---|
| $^{26}$Al | 0.72 | $^{26}$Mg | fine chronology of the first few Myr; also a heat source ([2.2](02-02-thermal-evolution-heat-transport.md)) |
| $^{182}$Hf | 8.9 | $^{182}$W | **core formation** — Hf is lithophile, W siderophile ([2.1](02-01-differentiation-interior-structure.md)) |
| $^{129}$I | 15.7 | $^{129}$Xe | volatile retention and atmosphere loss ([4.5](04-05-photochemistry-hazes-evolution.md)) |

**What is being dated.** Every one of these clocks starts when the mineral last became a **closed system** — when it stopped exchanging the relevant elements with its surroundings. For a mineral crystallizing from a melt that is the crystallization moment. For a rock reheated by an impact, it is the impact. **A radiometric age is always a closure age**, and identifying what the closure event was is the interpretive work.

**The oldest solids.** Calcium–aluminium-rich inclusions (CAIs) are millimetre-to-centimetre white blobs of exactly the refractory minerals that condense first in [1.2](01-02-condensation-frost-line.md)'s sequence. They give $4567.30 \pm 0.16$ Myr and define $t=0$ for the solar system. Chondrules — the millimetre silicate droplets that make up most of a chondrite — are systematically 1–3 Myr younger.

## Picture

![Left panel, a rubidium-strontium isochron: strontium-87 over strontium-86 plotted against rubidium-87 over strontium-86. Four coral data points lie on a blue straight line whose intercept, marked with an open circle at 0.699, is labelled the initial strontium ratio, the same in every sample, and whose slope of 0.0670 is labelled as e to the lambda t minus one, giving an age of 4.567 billion years. Right panel, a semi-log plot of the aluminium-26 to aluminium-27 ratio against time in millions of years after CAI formation, showing exponential decay with a half-life of 0.72 million years. A point at time zero marks CAIs at 5.2 times ten to the minus five, and a point two million years later marks a chondrule at 7.6 times ten to the minus six, with dashed guide lines showing the drop by a factor of 6.9. The caption notes there is no absolute zero, so this clock measures only gaps](assets/01-05-fig1.svg)

Two clocks with two different jobs: the isochron on the left gives one absolute number, the decay curve on the right resolves events a few tens of thousands of years apart but floats freely in absolute time.

## Worked examples

**Example 1 (mechanical — reading an isochron).** Four mineral separates from a chondrite give:

| $^{87}$Rb/$^{86}$Sr | $^{87}$Sr/$^{86}$Sr |
|---|---|
| 0.100 | 0.70567 |
| 0.620 | 0.74051 |
| 1.050 | 0.76932 |
| 1.550 | 0.80282 |

Find the age. $\lambda(^{87}\mathrm{Rb}) = 1.42\times10^{-11}\ \mathrm{yr^{-1}}$.

Slope from the two extreme points:

$$\text{slope} = \frac{0.80282 - 0.70567}{1.550 - 0.100} = \frac{0.09715}{1.450} = 0.06700.$$

(Check with the middle pair: $(0.76932-0.74051)/(1.050-0.620) = 0.02881/0.430 = 0.06700$. The points are collinear, so the system was closed.)

$$t = \frac{\ln(1+0.06700)}{1.42\times10^{-11}} = \frac{\ln 1.06700}{1.42\times10^{-11}} = \frac{0.064851}{1.42\times10^{-11}} = 4.567\times10^{9}\ \mathrm{yr}.$$

And the intercept: extrapolating to $x=0$ gives $0.70567 - 0.06700(0.100) = 0.69897$. That is the strontium the solar system started with — **a quantity we never had to assume and instead measured**, and which then becomes the reference against which every later strontium reservoir on Earth is compared.

**Example 2 (why you'd care — how long did chondrule formation last?).** CAIs have $(^{26}\mathrm{Al}/^{27}\mathrm{Al})_0 = 5.23\times10^{-5}$. A chondrule from the same meteorite gives $7.6\times10^{-6}$. When did it form, relative to the CAIs?

$$\frac{5.23\times10^{-5}}{7.6\times10^{-6}} = 6.88 = 2^{\Delta t/0.72},$$
$$\frac{\Delta t}{0.72} = \frac{\ln 6.88}{\ln 2} = \frac{1.9286}{0.6931} = 2.782, \qquad \Delta t = 2.00\ \mathrm{Myr}.$$

Now look at what that buys. The chondrule and the CAI are **millimetres apart in the same rock** and formed two million years apart. They were made by different processes in different places and only later swept up into the same parent body.

And the resolution is the real prize. Suppose the measurement is good to 5 percent in the ratio. Then

$$\delta(\Delta t) = \frac{t_{1/2}}{\ln 2}\times\frac{\delta R}{R} = \frac{0.72}{0.6931}\times0.05 = 0.052\ \mathrm{Myr} = 52{,}000\ \mathrm{yr}.$$

**Fifty thousand years, resolved at a distance of 4.567 billion.** That is one part in $10^5$, and no absolute dating method comes close. It is the reason we can say the disk's solid material formed over a few million years rather than instantaneously, and it is the strongest constraint on the timescales in [1.3](01-03-accretion-dust-to-planetesimals.md) and [1.4](01-04-giant-planets-migration.md).

## Watch out

- **You might think a radiometric age dates a rock's formation, but it dates the last time the system closed to the relevant elements.** A shocked meteorite can give an Ar–Ar age of 4.0 Gyr and a U–Pb age of 4.56 Gyr in the same sample, and neither is wrong: they are recording different events, because argon is lost at a lower temperature than lead. The mismatch is information, not error.
- **You might think a single sample can be dated, but a single point does not determine a line.** Dating requires either several cogenetic samples with different parent/daughter ratios, or a system where the initial daughter is genuinely known to be zero. "One rock, one age" is a mineral-scale isochron in disguise.
- **You might think $^{26}$Al gives absolute ages because you can write down its half-life, but there is no surviving $^{26}$Al to measure.** All you get are differences. Anchoring the $^{26}$Al chronology to absolute time requires samples dated by *both* methods, and the residual disagreement between the anchored short-lived scale and the U–Pb scale is an active area of argument at the few-hundred-thousand-year level.
- **You might think $^{26}$Al is only a clock, but it was also the solar system's dominant early heat source.** At the CAI abundance it delivers enough energy to melt a body larger than about 20 km within the first couple of million years — which is why some asteroids differentiated and others never did ([2.1](02-01-differentiation-interior-structure.md)).

## One-liner

> You cannot know how much parent a rock started with, so you measure several minerals at once and read the age off the slope of the line they make.

## Problems

**P1 (🟢)** A meteorite's minerals give a $^{147}$Sm–$^{143}$Nd isochron of slope $0.0304$. The half-life of $^{147}$Sm is $1.06\times10^{11}$ yr. (a) Compute $\lambda$. (b) Compute the age in Gyr. (c) The intercept is 0.50682; state in one sentence what that number is.

**P2 (🟡)** Two chondrules from the same meteorite give initial $^{26}$Al/$^{27}$Al of $1.8\times10^{-5}$ and $4.5\times10^{-6}$. (a) Compute the time between them. (b) Given CAIs at $5.23\times10^{-5}$, compute each chondrule's age relative to CAI formation. (c) If both are actually the same age and the difference is analytical scatter, what fractional measurement error would that require?

**P3 (🔴, optional)** The $^{182}$Hf–$^{182}$W system ($t_{1/2} = 8.9$ Myr) dates core formation because hafnium stays in the silicate mantle while tungsten follows metal into the core. (a) Explain in two sentences why a planet whose core formed *early* ends up with a mantle that has more radiogenic $^{182}$W excess than one whose core formed late. (b) Earth's mantle has a $^{182}$W excess of about $+1.9\ \varepsilon$ units relative to chondrites (parts in $10^4$), while the maximum possible — for instantaneous core formation at $t=0$ — is about $+3.5$. Estimate Earth's core-formation time. (c) Compare your answer with the terrestrial-assembly timescale from [1.3](01-03-accretion-dust-to-planetesimals.md) and comment.

<details>
<summary>Solutions</summary>

**P1** (a) $$\lambda = \frac{\ln 2}{t_{1/2}} = \frac{0.6931}{1.06\times10^{11}} = 6.539\times10^{-12}\ \mathrm{yr^{-1}}.$$

(b) $$t = \frac{\ln(1+0.0304)}{6.539\times10^{-12}} = \frac{\ln 1.0304}{6.539\times10^{-12}} = \frac{0.029948}{6.539\times10^{-12}} = 4.580\times10^{9}\ \mathrm{yr} = 4.58\ \mathrm{Gyr}.$$

(c) It is the $^{143}$Nd/$^{144}$Nd ratio of the solar system at the moment this rock closed — the initial neodymium isotopic composition, inherited from the nebula and identical in every mineral of the sample regardless of how much samarium each took up.

**P2** (a) $$\frac{1.8\times10^{-5}}{4.5\times10^{-6}} = 4.00 = 2^{\Delta t/0.72} \;\Rightarrow\; \frac{\Delta t}{0.72} = \frac{\ln 4}{\ln 2} = 2, \qquad \Delta t = 1.44\ \mathrm{Myr}.$$

Exactly two half-lives.

(b) Relative to CAIs:

$$\Delta t_1 = 0.72\,\frac{\ln(5.23\times10^{-5}/1.8\times10^{-5})}{\ln 2} = 0.72\times\frac{\ln 2.906}{0.6931} = 0.72\times1.5390 = 1.11\ \mathrm{Myr},$$
$$\Delta t_2 = 0.72\,\frac{\ln(5.23\times10^{-5}/4.5\times10^{-6})}{\ln 2} = 0.72\times\frac{\ln 11.62}{0.6931} = 0.72\times3.5384 = 2.55\ \mathrm{Myr}.$$

Consistent with (a): $2.55 - 1.11 = 1.44$ Myr.

(c) To collapse a factor of 4 to a factor of 1, the two measurements would have to be wrong by a factor of 2 each in opposite directions — a fractional error of 100 percent. Real measurements on these ratios are good to a few percent, so **the age difference is real and enormously significant compared with the uncertainty.** This is the whole case for a protracted, ~2 Myr chondrule-forming epoch rather than a single event.

**P3** (a) Tungsten is siderophile and hafnium lithophile, so core formation strips the mantle of tungsten while leaving all the hafnium behind, which raises the mantle's Hf/W ratio enormously. Every $^{182}$Hf atom that decays *after* that separation adds $^{182}$W to a mantle that now has very little ordinary tungsten to dilute it — so the earlier the core forms, the more of the $^{182}$Hf inventory is still alive to decay into a depleted reservoir, and the larger the resulting excess.

(b) The excess builds up as the remaining $^{182}$Hf decays after separation, so the fraction of the maximum achieved is the fraction of $^{182}$Hf still present at separation time $t$:

$$\frac{1.9}{3.5} = 0.543 = e^{-\lambda t} = 2^{-t/8.9},$$
$$\frac{t}{8.9} = \frac{\ln(1/0.543)}{\ln 2} = \frac{0.6106}{0.6931} = 0.881, \qquad t = 7.8\ \mathrm{Myr}.$$

This simple two-stage estimate gives about 8 Myr; the full treatment, which allows core formation to be continuous rather than instantaneous and accounts for the impactor cores merging with Earth's, pushes the *mean* time of core formation to roughly 30 Myr and the last major event later still.

(c) [1.3](01-03-accretion-dust-to-planetesimals.md) predicted, from the isolation mass alone, that Earth could not have formed by local accretion in the disk's lifetime and instead required 30–100 Myr of embryo collisions after the gas dispersed. The Hf–W clock, which knows nothing about isolation masses, independently says core formation was not complete in a few million years either.

Two remarks on how strong that agreement is. It is a **genuine independent confirmation** in the sense that the two arguments share no assumptions — one is dynamical and one is nuclear — and both reject the "fast, in-place formation" picture decisively. But it is a *weak* confirmation of any particular timeline, because the simple two-stage calculation in (b) systematically underestimates the assembly time: each impacting embryo arrives with its own already-formed core, which partially re-equilibrates with Earth's mantle and resets some of the signal. The honest statement is that Hf–W rules out completion before about 10 Myr and is consistent with anything from 30 to 100 Myr, and it is the Moon-forming impact ([2.7](02-07-moon-earth-moon-system.md)) that pins the late end.

</details>

## Flashback

**From Lesson 1.1 (The protoplanetary disk):** A cloud core of $2\,M_\odot$ has radius $R_0 = 2.0\times10^{15}$ m and rotates at $\Omega = 2.0\times10^{-14}\ \mathrm{s^{-1}}$. (a) Compute the specific angular momentum of an equatorial parcel. (b) Compute the centrifugal radius in AU. (c) The disk-lifetime constraint says planets must form within a few million years; compute the free-fall time of this core ($\rho = M/\frac43\pi R_0^3$) and say what fraction of the disk's life the collapse itself occupies.

<details>
<summary>Solution</summary>

(a) $$j = \Omega R_0^2 = 2.0\times10^{-14}\times(2.0\times10^{15})^2 = 2.0\times10^{-14}\times4.0\times10^{30} = 8.0\times10^{16}\ \mathrm{m^2\,s^{-1}}.$$

(b) $M = 2\times1.989\times10^{30} = 3.978\times10^{30}$ kg, so $GM = 6.674\times10^{-11}\times3.978\times10^{30} = 2.655\times10^{20}$.

$$R_c = \frac{j^2}{GM} = \frac{(8.0\times10^{16})^2}{2.655\times10^{20}} = \frac{6.40\times10^{33}}{2.655\times10^{20}} = 2.411\times10^{13}\ \mathrm{m} = 161\ \mathrm{AU}.$$

(c) $$\rho = \frac{3.978\times10^{30}}{\frac43\pi(2.0\times10^{15})^3} = \frac{3.978\times10^{30}}{3.351\times10^{46}} = 1.187\times10^{-16}\ \mathrm{kg\,m^{-3}},$$

$$t_{\text{ff}} = \sqrt{\frac{3\pi}{32G\rho}} = \sqrt{\frac{9.4248}{32\times6.674\times10^{-11}\times1.187\times10^{-16}}} = \sqrt{\frac{9.4248}{2.535\times10^{-25}}}.$$

$$t_{\text{ff}} = \sqrt{3.718\times10^{25}} = 6.10\times10^{12}\ \mathrm{s} = 1.93\times10^{5}\ \mathrm{yr}.$$

About 0.19 Myr against a disk life of roughly 3 Myr — **the collapse takes about 6 percent of the time available.** That is the quantitative reason the disk can be treated as a given initial condition rather than as something that forms while planets are forming: assembly of the disk is essentially instantaneous on the clock that matters, which is exactly the separation of timescales the $^{26}$Al chronology in this lesson is fine enough to test.

</details>

## Connections

- **Backward:** [1.2](01-02-condensation-frost-line.md) predicted that refractory oxides condense first, and CAIs — the oldest dated solids in the solar system — are made of precisely those minerals; [1.3](01-03-accretion-dust-to-planetesimals.md)'s prediction of late, violent terrestrial assembly is tested by Hf–W here.
- **Forward:** [1.6](01-06-cosmochemistry-volatile-delivery.md) uses isotopes not as clocks but as fingerprints of *where* material came from; [2.1](02-01-differentiation-interior-structure.md) uses Hf–W to date core formation; [2.2](02-02-thermal-evolution-heat-transport.md) uses $^{26}$Al as a heat source; [2.4](02-04-impact-cratering-chronology.md) and [2.7](02-07-moon-earth-moon-system.md) transfer these absolute ages onto crater-counted surfaces.
- **Sideways:** the decay law and its statistics are [intro-nuclear-engineering 1.3](../../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md)'s; the isochron itself is a linear regression whose *residuals carry the diagnostic*, exactly the model-validation logic of [`statistical-learning`](../../statistical-learning/syllabus.md) — a bad fit is not a bad age, it is evidence the closed-system assumption failed.
