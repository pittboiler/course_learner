# Analytical & Instrumental Chemistry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Analytical chemistry has one deliverable: **a number with a defensible claim
about how good it is.** Module 1 is the statistics that attaches the error bar;
Module 2 computes an equilibrium over and over as titrant goes in, so a curve
turns where the stoichiometry says it should; Module 3 reads concentration off
light (Beer) or voltage (Nernst); Module 4 separates the mixture first, names the
pieces by mass, and proves the whole chain measures what it claims. This card is
the lookup layer: the constants, the critical-value tables, the titration stages,
the instrument comparison, and the standard tables the lessons use without
printing. Chemistry basics (moles, $K$, $K_a$, buffers, $E^\circ$) live on the
[general-chemistry card](../general-chemistry/reference.md) — they are not
repeated here.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\bar x$, $s$, $s^2$ | mean of replicates; their sample standard deviation (spread of *one* reading) and variance | [1.2](lessons/01-02-statistics-of-measurement.md) |
| $\mu$, $\sigma$ | the true (population) value and its true spread — what $\bar x$ and $s$ estimate | [1.2](lessons/01-02-statistics-of-measurement.md) |
| $s_{\bar x}$ | standard error — how much the **mean** scatters, $s/\sqrt n$; shrinks with more data, $s$ doesn't | [1.2](lessons/01-02-statistics-of-measurement.md) |
| RSD, CV | relative standard deviation $s/\bar x$ — precision as a fraction of what you measured | [1.2](lessons/01-02-statistics-of-measurement.md) |
| df | degrees of freedom — independent scatter left after estimating means ($n-1$ per sample) | [1.2](lessons/01-02-statistics-of-measurement.md) |
| $t$, $F$, $Q$ | test statistics: mean vs. mean, variance vs. variance, outlier vs. the pack | [1.4](lessons/01-04-significance-tests-calibration.md) |
| $s_x$ | the uncertainty (one standard deviation) carried by an input quantity $x$ | [1.3](lessons/01-03-propagation-of-uncertainty.md) |
| $S_{xx}$, $S_{xy}$, $S_{yy}$ | least-squares sums of squares about the centroid $(\bar x,\bar y)$ | [1.4](lessons/01-04-significance-tests-calibration.md) |
| $m$, $b$ | calibration slope (the method's **sensitivity**) and intercept | [1.4](lessons/01-04-significance-tests-calibration.md) |
| $s_y$, $s_{x_u}$ | scatter of the standards about the fitted line; uncertainty of an unknown read off it | [1.4](lessons/01-04-significance-tests-calibration.md) |
| LOD, LOQ | smallest concentration you can *detect* ($3s_\text{blank}/m$) and *trust a number for* ($10s_\text{blank}/m$) | [1.4](lessons/01-04-significance-tests-calibration.md) |
| $V_e$, $f$ | volume of titrant at equivalence; fraction of analyte titrated, $f = V/V_e$ | [2.1](lessons/02-01-acid-base-titration-curves.md) |
| $\mathrm{p}X$ | $-\log_{10}$ of something: pH, pOH, p$K_a$, pM, pCa | [2.1](lessons/02-01-acid-base-titration-curves.md) |
| $K_f$, $K_f'$ | formation constant of a metal–EDTA cage; the same constant knocked down to the working pH | [2.2](lessons/02-02-complexometric-edta-titrations.md) |
| $\alpha_{Y^{4-}}$ | fraction of free EDTA that is fully deprotonated $\ce{Y^4-}$ — set by pH alone | [2.2](lessons/02-02-complexometric-edta-titrations.md) |
| $C_\text{EDTA}$ | **all** uncomplexed EDTA, summed over its seven protonation states | [2.2](lessons/02-02-complexometric-edta-titrations.md) |
| $K_{sp}$, $s$ | solubility product; molar solubility (moles of salt dissolving per litre) | [2.3](lessons/02-03-solubility-gravimetric-analysis.md) |
| GF | gravimetric factor — the fraction of the weighed precipitate that is analyte | [2.3](lessons/02-03-solubility-gravimetric-analysis.md) |
| $E^\circ$, $E_\text{eq}$ | standard reduction potential of a couple; the potential at the equivalence point | [2.4](lessons/02-04-redox-equilibria-titrations.md) |
| $n$ (redox) | electrons transferred in a half-reaction — the divisor in $0.0592/n$ | [2.4](lessons/02-04-redox-equilibria-titrations.md) |
| $T$, $\%T$ | transmittance $I/I_0$ — the fraction of light that survives — and it times 100 | [3.1](lessons/03-01-uv-vis-beers-law.md) |
| $A$ | absorbance $-\log_{10}T$ — the quantity that is *linear* in concentration | [3.1](lessons/03-01-uv-vis-beers-law.md) |
| $\varepsilon$, $b$ | molar absorptivity (how good the molecule is at absorbing, per wavelength); path length in cm | [3.1](lessons/03-01-uv-vis-beers-law.md) |
| $\lambda_\text{max}$ | the absorption peak — where you measure, for sensitivity and wavelength-robustness | [3.1](lessons/03-01-uv-vis-beers-law.md) |
| $N_1/N_0$ | excited-to-ground atom population ratio — tiny, and exponentially temperature-sensitive | [3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md) |
| $\Phi$, $I_\text{F}$ | fluorescence quantum yield (emit rather than heat) and the fluorescence signal | [3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md) |
| $a$, $\gamma$ | activity $a=\gamma c$ — the *effective* concentration an electrode feels — and its coefficient | [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md) |
| $I$ (solutions) | ionic strength $\tfrac12\sum c_iz_i^2$ — how electrically crowded the solution is | [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md) |
| $z$ | charge on the sensed ion — the divisor in the Nernstian slope $59.2/z$ | [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md) |
| $K_{\ce{A,B}}$ | selectivity coefficient — how convincingly interferent B impersonates analyte A | [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md) |
| $i_\text{lim}$ | limiting (diffusion) current — the plateau height, proportional to bulk concentration | [3.4](lessons/03-04-voltammetry-standard-addition.md) |
| $c_x$, $c_s$ | unknown concentration in the sample; concentration added by the spike | [3.4](lessons/03-04-voltammetry-standard-addition.md) |
| $t_M$, $t_R$ | dead time (an unretained species' transit) and the analyte peak's retention time | [4.1](lessons/04-01-separation-theory-plates-resolution.md) |
| $k$ (chrom.) | retention factor $(t_R-t_M)/t_M$ — extra dead-times spent stuck to the stationary phase | [4.1](lessons/04-01-separation-theory-plates-resolution.md) |
| $K$ (chrom.) | distribution constant — stationary/mobile concentration ratio; $k = K V_S/V_M$ | [4.1](lessons/04-01-separation-theory-plates-resolution.md) |
| $\alpha$ (chrom.) | selectivity $k_2/k_1 \ge 1$ — how *differently* two analytes partition (pure thermodynamics) | [4.1](lessons/04-01-separation-theory-plates-resolution.md) |
| $N$, $H$, $L$ | plate number, plate height $L/N$, column length — efficiency, i.e. peak sharpness | [4.1](lessons/04-01-separation-theory-plates-resolution.md) |
| $w$, $w_{1/2}$ | peak baseline width $4\sigma$ and width at half height $2.355\sigma$ | [4.1](lessons/04-01-separation-theory-plates-resolution.md) |
| $R_s$ | resolution — centre gap divided by average width; $1.5$ is baseline separation | [4.1](lessons/04-01-separation-theory-plates-resolution.md) |
| $u$, $u_\text{opt}$ | mobile-phase linear velocity and the van Deemter minimum $\sqrt{B/C}$ | [4.1](lessons/04-01-separation-theory-plates-resolution.md) |
| $m/z$ | mass-to-charge ratio — the mass spectrum's x-axis, **not** mass | [4.4](lessons/04-04-mass-spectrometry.md) |
| $\ce{M^{+\bullet}}$, M+1, M+2 | molecular ion and its heavier-isotope satellites (same molecule, not impurities) | [4.4](lessons/04-04-mass-spectrometry.md) |
| $s_\text{samp}$, $s_\text{anal}$ | the sampling and analytical contributions to the total spread | [4.5](lessons/04-05-sampling-method-validation.md) |

**Overloaded letters, in one place.** $s$ is a standard deviation (1.2) *and*
molar solubility (2.3). $k$ is a chromatographic retention factor (4.1), a
proportionality constant in $i_\text{lim}=kc$ (3.4) and in AAS $A=kbc$ (3.2), and
Boltzmann's constant (3.2). $K$ is an equilibrium constant everywhere in Module 2
and a distribution constant in Module 4. $Q$ is the Q-test statistic (1.4) and a
reaction quotient (2.4). $\alpha$ is EDTA's deprotonated fraction (2.2) and
chromatographic selectivity (4.1). $m$ is a calibration slope (1.4) and an ion
mass (4.4). $I$ is light intensity (3.1) and ionic strength (3.3); $i$ is current
(3.4). Units and context disambiguate all of them.

## Definitions

### Accuracy

Did you hit the truth? Closeness of the mean $\bar x$ to the accepted value
$x_\text{true}$; degraded by **bias**, exposed only by a standard or reference
method.

*Introduced:* [1.1](lessons/01-01-accuracy-precision-significant-figures.md)

### Precision

Did you get the same answer twice? Closeness of repeated measurements to *each
other*, quantified by $s$ — and completely silent about whether they are right.

*Introduced:* [1.1](lessons/01-01-accuracy-precision-significant-figures.md)

### Systematic error

A push in one fixed direction on every measurement — a miscalibrated balance, an
incomplete reaction, a parallax habit. Detectable and **correctable**; it kills
accuracy, not precision.

*Introduced:* [1.1](lessons/01-01-accuracy-precision-significant-figures.md)

### Random error

Direction-less jitter — noise, drift, the last-digit judgment call. It cannot be
removed, only characterised statistically, and it averages down as $1/\sqrt n$.

*Introduced:* [1.1](lessons/01-01-accuracy-precision-significant-figures.md)

### Significant figures

Every digit known with certainty **plus** the first uncertain one. The promise
never to report a digit you did not measure.

*Introduced:* [1.1](lessons/01-01-accuracy-precision-significant-figures.md)

### Standard deviation

Root-mean-square distance of the data from their own average — the size of the
random error in one reading. Divided by $n-1$, not $n$, because $\bar x$ was
spent fixing the centre.

$$s = \sqrt{\frac{\sum_{i=1}^{n}(x_i-\bar x)^2}{n-1}}$$

*Introduced:* [1.2](lessons/01-02-statistics-of-measurement.md)

### Standard error of the mean

How much the **average** wobbles, as opposed to one reading. This is what your
error bar is built from.

$$s_{\bar x} = \frac{s}{\sqrt n}$$

*Introduced:* [1.2](lessons/01-02-statistics-of-measurement.md)

### Confidence interval

A bracket around $\bar x$ wide enough that the true $\mu$ is very probably
inside. Strictly: the *procedure* captures $\mu$ 95 times in 100, not "this
bracket has a 95 percent chance".

$$\mu = \bar x \pm \frac{t\,s}{\sqrt n}$$

*Introduced:* [1.2](lessons/01-02-statistics-of-measurement.md)

### Degrees of freedom

How many independent pieces of scatter information survive after estimating
means: $n-1$ for one sample, $n_1+n_2-2$ for two pooled, $n-2$ for a fitted line
(two parameters spent).

*Introduced:* [1.2](lessons/01-02-statistics-of-measurement.md)

### Propagation of uncertainty

Independent errors rarely push the same way at the same moment, so they combine
like the legs of a right triangle — **in quadrature** — not by simple addition.

*Introduced:* [1.3](lessons/01-03-propagation-of-uncertainty.md)

### Dominant term

Because contributions add as *squares*, a term three times larger contributes
nine times the variance and the small ones vanish. Finding the loudest term tells
you the one step worth fixing.

*Introduced:* [1.3](lessons/01-03-propagation-of-uncertainty.md)

### Null hypothesis

The defendant: "nothing special is going on — the gap is just scatter." You
reject it only when the statistic clears the tabulated critical value; failing to
reject is **absence of evidence**, never proof of equality.

*Introduced:* [1.4](lessons/01-04-significance-tests-calibration.md)

### Calibration curve

The instrument's translation table: fit signal against known concentrations by
least squares, then run the line backwards to turn an unknown's signal into a
concentration with an error bar.

$$y = mx + b, \qquad x_u = \frac{\bar y_u - b}{m}$$

*Introduced:* [1.4](lessons/01-04-significance-tests-calibration.md)

### Limit of detection and limit of quantitation

LOD is where the signal pokes 3 blank-noise widths above the blank — you can say
"it's there". LOQ (10 widths) is where you can put a number on it.

$$\text{LOD} = \frac{3\,s_\text{blank}}{m}, \qquad \text{LOQ} = \frac{10\,s_\text{blank}}{m}$$

*Introduced:* [1.4](lessons/01-04-significance-tests-calibration.md), reused in [4.5](lessons/04-05-sampling-method-validation.md)

### Titration curve

The equilibrium calculation you already know, redone after every addition of
titrant, and plotted: flat, flat, cliff, flat. The cliff is where you stop.

*Introduced:* [2.1](lessons/02-01-acid-base-titration-curves.md)

### Equivalence point vs. endpoint

**Equivalence** is the stoichiometric truth (moles match; invisible).
**Endpoint** is what you observe (an indicator flips). The gap between them is
*indicator error*.

*Introduced:* [2.1](lessons/02-01-acid-base-titration-curves.md)

### Half-equivalence point

Halfway to equivalence, acid and conjugate base are equal, the Henderson–
Hasselbalch log term vanishes, and pH $=\mathrm{p}K_a$ — independent of
concentration and volume. The standard way to *measure* an unknown $K_a$.

*Introduced:* [2.1](lessons/02-01-acid-base-titration-curves.md)

### Chelate

A ligand that grips a metal at several points at once, like a claw. EDTA's six
donor sites cage any metal cation **1:1**, whatever its charge — which is why
the titration arithmetic is trivial.

*Introduced:* [2.2](lessons/02-02-complexometric-edta-titrations.md)

### Formation constant

How tightly the metal–ligand cage holds together. Enormous for EDTA
($\log K_f$ from about 8.8 for $\ce{Mg^2+}$ to 18.8 for $\ce{Ni^2+}$), which is
what makes the break sharp.

$$K_f = \frac{[\ce{MY}]}{[\ce{M}][\ce{Y}]}$$

*Introduced:* [2.2](lessons/02-02-complexometric-edta-titrations.md)

### Conditional formation constant

The bench-relevant constant: $K_f$ knocked down by the fraction of EDTA that is
actually deprotonated at your buffer's pH. Bury the side reaction inside a
rescaled constant and the main equilibrium looks simple again.

$$K_f' = \alpha_{Y^{4-}}K_f = \frac{[\ce{MY}]}{[\ce{M}]\,C_\text{EDTA}}$$

*Introduced:* [2.2](lessons/02-02-complexometric-edta-titrations.md)

### Metal-ion indicator

A dye that is one colour bound to the metal and another when free. The endpoint
is when EDTA **strips** the metal off the dye — so the dye must bind *more
weakly* than EDTA, or it would never let go.

*Introduced:* [2.2](lessons/02-02-complexometric-edta-titrations.md)

### Solubility product

The equilibrium constant for a solid trading ions with its solution — the ceiling
on how much dissolves. The pure solid never appears in it.

$$K_{sp} = [\ce{M}]^a[\ce{X}]^b \quad\text{for}\quad \ce{M_aX_b(s) <=> $a$M + $b$X}$$

*Introduced:* [2.3](lessons/02-03-solubility-gravimetric-analysis.md)

### Common-ion effect

Pile up one of the products and the dissolving equilibrium retreats toward solid.
Le Châtelier made numeric — and the trick that drives a precipitation past 99.9
percent complete.

*Introduced:* [2.3](lessons/02-03-solubility-gravimetric-analysis.md)

### Gravimetric factor

The mass fraction of the weighed precipitate that is your analyte, scaled by how
many analyte units sit in one precipitate formula unit. Always between 0 and 1.

$$\text{GF} = \frac{(\text{mol analyte}/\text{mol precipitate})\times M_\text{analyte}}{M_\text{precipitate}}$$

*Introduced:* [2.3](lessons/02-03-solubility-gravimetric-analysis.md)

### Coprecipitation

Soluble impurities dragged down with the solid — by inclusion (in the lattice),
occlusion (trapped mother liquor) or surface adsorption. It makes the precipitate
weigh **too much**; digestion and electrolyte washing are the cures.

*Introduced:* [2.3](lessons/02-03-solubility-gravimetric-analysis.md)

### Nernst equation

A couple's actual potential is its standard value nudged by how lopsided the
reduced/oxidized ratio is. Written as a *reduction*, $Q$ is reduced over
oxidized.

$$E = E^\circ - \frac{0.0592}{n}\log Q$$

*Introduced:* [2.4](lessons/02-04-redox-equilibria-titrations.md); run backwards in [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md)

### Redox indicator

A couple whose oxidized and reduced forms differ in colour, flipping over a
window about $\pm 0.0592/n$ volts wide around its own $E^\circ$. Pick one that
straddles $E_\text{eq}$.

*Introduced:* [2.4](lessons/02-04-redox-equilibria-titrations.md)

### Transmittance and absorbance

Transmittance is the fraction of light that survives the cuvette; absorbance is
minus its base-10 log — the move that turns exponential light loss into a
straight line.

$$T = \frac{I}{I_0}, \qquad A = -\log_{10}T$$

*Introduced:* [3.1](lessons/03-01-uv-vis-beers-law.md)

### Molar absorptivity

How strongly one species absorbs at one wavelength — an intrinsic molecular
property (about 10 for a forbidden transition up to $10^5$ for an intense
allowed one), not a property of your sample.

*Introduced:* [3.1](lessons/03-01-uv-vis-beers-law.md)

### Linear dynamic range

The concentration span between the detection limit at the bottom and the bend at
the top (about $A \approx 1$ for UV–Vis) where the calibration is honest. Outside
it, dilute or preconcentrate — do not extrapolate.

*Introduced:* [3.1](lessons/03-01-uv-vis-beers-law.md)

### Atomization

Destroying the sample's molecules to free the analyte as neutral gas-phase atoms
— the shared first step of every atomic method. Flame (2000–3000 K), graphite
furnace, or argon plasma (about 7000 K).

*Introduced:* [3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md)

### Resonance line

The one wavelength matching a free atom's ground-state energy gap. Gas-phase
atomic lines are so narrow that the line is a private channel — that is where
atomic spectroscopy's selectivity comes from.

*Introduced:* [3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md)

### Indicator and reference electrode

The **indicator** electrode's potential moves with the analyte; the **reference**
electrode's ($\ce{Ag/AgCl}$, or the saturated calomel electrode) never moves. You
read the difference, so every wiggle is the analyte.

*Introduced:* [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md)

### Nernstian slope

The heartbeat of potentiometry: how many millivolts the electrode moves per
tenfold change in ion activity. Real electrodes run a hair under, so fit it from
fresh standards rather than assuming it.

$$\text{slope} = \frac{59.2}{z}\ \mathrm{mV\ per\ decade}$$

*Introduced:* [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md)

### Ion-selective electrode

An electrode whose membrane lets essentially one ion set a potential across it —
the pH glass bulb being the archetype. Selectivity is never perfect: the
selectivity coefficient $K_{\ce{A,B}}$ says how badly B impersonates A.

*Introduced:* [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md)

### Activity and activity coefficient

The *effective* concentration an electrode actually feels, $a=\gamma c$, with
$\gamma \to 1$ only in very dilute solution. In blood or seawater $\gamma$ can be
0.7 or lower, and the gap is a real bias.

*Introduced:* [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md)

### TISAB

Total Ionic Strength Adjustment Buffer: swamp standards *and* samples with the
same high background salt so $\gamma$ takes one fixed value and folds harmlessly
into the calibration constant.

*Introduced:* [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md)

### Limiting (diffusion) current

The plateau of a voltammogram: once you react molecules as fast as they diffuse
in, the current is set by the delivery rate, hence by bulk concentration.

$$i_\text{lim} = k\,c$$

*Introduced:* [3.4](lessons/03-04-voltammetry-standard-addition.md)

### Standard addition

Calibrating *inside* the sample: spike known analyte into the sample itself so
the unknown matrix scales every reading equally and divides out. Fixes
**multiplicative** matrix effects only.

$$c_x = c_s\,\frac{S_1}{S_2-S_1} \qquad\text{(single addition, volume held fixed)}$$

*Introduced:* [3.4](lessons/03-04-voltammetry-standard-addition.md)

### Retention factor

How many extra dead-times an analyte spends stuck in the stationary phase. A
time ratio you read straight off the chromatogram; the sweet spot is roughly
$k = 2$–$10$.

$$k = \frac{t_R - t_M}{t_M} = K\frac{V_S}{V_M}$$

*Introduced:* [4.1](lessons/04-01-separation-theory-plates-resolution.md)

### Plate number and plate height

$N$ counts how many times the analyte effectively re-equilibrated on the way down
(efficiency, i.e. peak sharpness); $H = L/N$ is the length of column that does one
plate's work — smaller is better.

$$N = 16\left(\frac{t_R}{w}\right)^2 = 5.54\left(\frac{t_R}{w_{1/2}}\right)^2 = \left(\frac{t_R}{\sigma}\right)^2$$

*Introduced:* [4.1](lessons/04-01-separation-theory-plates-resolution.md)

### Resolution

How far apart divided by how fat. $R_s \ge 1.5$ is **baseline resolution** (under
0.3 percent overlap); $R_s = 1.0$ leaves a visible notch.

$$R_s = \frac{t_{R2}-t_{R1}}{\tfrac12(w_1+w_2)}$$

*Introduced:* [4.1](lessons/04-01-separation-theory-plates-resolution.md)

### General elution problem

One fixed condition cannot serve a sample spanning a wide range: cool ovens smear
the heavy end, hot ones bunch the light end. The cure is to change the condition
*during* the run — GC's **temperature program**, HPLC's **gradient elution**.

*Introduced:* [4.2](lessons/04-02-gas-chromatography.md), [4.3](lessons/04-03-hplc.md)

### Reversed phase

Nonpolar stationary phase (C18 on silica), polar mobile phase (water plus
methanol or acetonitrile) — so **polar analytes elute first**. "Reversed" refers
to the polarity assignment, not the flow.

*Introduced:* [4.3](lessons/04-03-hplc.md)

### Molecular ion

The intact molecule minus one electron ($\ce{M^{+\bullet}}$ in EI) — the peak that
hands you the molecular weight. Soft ionization gives $\ce{[M+H]+}$ instead, one
unit heavier; hard EI can fragment it out of existence entirely.

*Introduced:* [4.4](lessons/04-04-mass-spectrometry.md)

### Extracted-ion chromatogram

Plot the abundance of one chosen $m/z$ against time instead of the total ion
current, and a single target compound pops cleanly out of a co-eluting mess. Mass
is a second, orthogonal dimension of separation.

*Introduced:* [4.4](lessons/04-04-mass-spectrometry.md)

### Representative sample

A sample whose composition stands in for the population you actually care about.
No instrument can rescue an unrepresentative one — sampling error is invisible to
the detector.

*Introduced:* [4.5](lessons/04-05-sampling-method-validation.md)

### Figures of merit

The measurable properties a method must pass to be believed: accuracy, precision,
linearity and range, LOD/LOQ, selectivity, robustness. Each has a defined
experiment and an acceptance criterion.

*Introduced:* [4.5](lessons/04-05-sampling-method-validation.md)

## Formulas and rules

### Constants and conventions

The lessons use these without printing them in one place.

| Quantity | Value | Where it bites |
|---|---|---|
| $K_w$ at 25 °C | $1.0\times10^{-14}$; $\mathrm{pH}+\mathrm{pOH}=14.00$ | every equivalence-point pH ([2.1](lessons/02-01-acid-base-titration-curves.md)) |
| $(RT/F)\ln 10$ at 25 °C | $0.0592\ \mathrm{V} = 59.2\ \mathrm{mV}$ per decade | Nernst, ISE slope, CV peak split |
| $1/\ln 10$, $\ln 10$ | $0.434$, $2.303$ | log and antilog error propagation ([1.3](lessons/01-03-propagation-of-uncertainty.md)) |
| $k_B$, $h$, $c$ | $1.381\times10^{-23}\ \mathrm{J/K}$, $6.626\times10^{-34}\ \mathrm{J\,s}$, $3.00\times10^{8}\ \mathrm{m/s}$ | Boltzmann populations ([3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md)) |
| $F$ | $96485\ \mathrm{C/mol}$ | ties $E$ to free energy (see the [gen-chem card](../general-chemistry/reference.md)) |

**Concentration units used throughout and defined nowhere:** for dilute aqueous
solutions (density about 1 kg/L),
$1\ \mathrm{ppm} = 1\ \mathrm{mg/L} = 1\ \mathrm{\mu g/mL}$ and $1\ \mathrm{ppb} = 1\ \mathrm{\mu g/L}$; **ppt** in
[1.1](lessons/01-01-accuracy-precision-significant-figures.md) means *parts per
thousand* (relative error $\times 1000$), not parts per trillion. Water hardness
is reported as milligrams of $\ce{CaCO3}$ per litre, whatever the actual metal
([2.2](lessons/02-02-complexometric-edta-titrations.md)).

### Significant figures and rounding

| Operation | Rule |
|---|---|
| add / subtract | keep the fewest **decimal places** |
| multiply / divide | keep the fewest **significant figures** |
| $\log_{10}x$ | decimal places in the answer = sig figs in $x$ (pH 3.57 has **2** sig figs) |
| $10^{x}$ | sig figs in the answer = decimal places in $x$ |

Leading zeros never count; trailing zeros count only with a decimal point;
scientific notation removes all ambiguity. Round **half to even** ($43.55\to43.6$
but $43.45\to43.4$) so borderline cases don't all drift up. Carry guard digits and
round **once**, at the end.

*From* [1.1](lessons/01-01-accuracy-precision-significant-figures.md)

### Summarizing replicates

$$\bar x = \frac1n\sum x_i, \qquad s = \sqrt{\frac{\sum(x_i-\bar x)^2}{n-1}}, \qquad \mathrm{RSD} = \frac{s}{\bar x}, \qquad s_{\bar x} = \frac{s}{\sqrt n}$$

$$\mu = \bar x \pm \frac{t\,s}{\sqrt n} \qquad (\text{df} = n-1)$$

Gaussian bands: $\pm1\sigma \to 68$ percent, $\pm2\sigma \to 95$ percent,
$\pm3\sigma \to 99.7$ percent. Halving a confidence interval costs **four times**
the replicates; past a handful, attack systematic error instead.

*From* [1.2](lessons/01-02-statistics-of-measurement.md)

### Critical values (95 percent)

| df | $t$ two-tailed | $t$ one-tailed | | df pair | $F_\text{crit}$ | | $n$ | $Q_\text{crit}$ |
|---:|:---:|:---:|---|:---|:---:|---|:---:|:---:|
| 2 | 4.303 | 2.920 | | (4,4) | 6.39 | | 3 | 0.970 |
| 3 | 3.182 | 2.353 | | (5,5) | 5.05 | | 4 | 0.829 |
| 4 | 2.776 | 2.132 | | (6,6) | 4.28 | | 5 | 0.710 |
| 5 | 2.571 | 2.015 | | (10,10) | 2.98 | | 6 | 0.625 |
| 6 | 2.447 | 1.943 | | | | | 7 | 0.568 |
| 8 | 2.306 | 1.860 | | 90 percent $t$ (2-tail): | df 3: 2.353 | | | |
| 10 | 2.228 | 1.812 | | | df 5: 2.015 | | | |
| $\infty$ | 1.960 | 1.645 | | 99 percent $t$ (2-tail): | df 3: 5.841 | | | |

*From* [1.2](lessons/01-02-statistics-of-measurement.md) *and* [1.4](lessons/01-04-significance-tests-calibration.md)

### Propagating uncertainty

| Operation | Combine | Currency |
|---|---|---|
| $y = a \pm b$ | $s_y = \sqrt{s_a^2+s_b^2}$ | **absolute** (the $+$ holds for subtraction too) |
| $y = ab$ or $a/b$ | $\dfrac{s_y}{y} = \sqrt{\left(\dfrac{s_a}{a}\right)^2+\left(\dfrac{s_b}{b}\right)^2}$ | **relative** |
| $y = a^n$ | $\dfrac{s_y}{y} = \lvert n\rvert\dfrac{s_a}{a}$ | relative, scaled by the exponent |
| $y = \log_{10}a$ | $s_y = 0.434\dfrac{s_a}{a}$ | relative in, absolute out |
| $y = 10^{a}$ | $\dfrac{s_y}{y} = 2.303\,s_a$ | absolute in, relative out |

Master rule (all five are special cases, for independent inputs):

$$s_y^2 = \sum_i\left(\frac{\partial y}{\partial x_i}\right)^2 s_{x_i}^2$$

Rule of thumb: $\pm0.01$ pH unit is worth about 2.3 percent in $[\ce{H+}]$.

*From* [1.3](lessons/01-03-propagation-of-uncertainty.md)

### Significance tests

$$\text{one-sample } t = \frac{\lvert\bar x-\mu_0\rvert\sqrt n}{s}\ (\text{df}=n-1) \qquad F = \frac{s_1^2}{s_2^2}\ (s_1>s_2,\ \text{df}=(n_1-1,n_2-1))$$

$$s_\text{pool}=\sqrt{\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}}, \qquad t = \frac{\lvert\bar x_1-\bar x_2\rvert}{s_\text{pool}\sqrt{\tfrac1{n_1}+\tfrac1{n_2}}}\ (\text{df}=n_1+n_2-2)$$

$$Q = \frac{\lvert\text{suspect}-\text{nearest neighbour}\rvert}{x_\text{max}-x_\text{min}}$$

Order of operations for "do two methods agree?": **$F$-test first** (are the
precisions poolable?), then the two-sample $t$-test. Outliers get Q-tested (or
Grubbs, $G=\lvert\text{suspect}-\bar x\rvert/s$) **before** anything else, and at
most one point ever goes.

*From* [1.4](lessons/01-04-significance-tests-calibration.md)

### Least-squares calibration and reading an unknown

$$S_{xx}=\sum(x_i-\bar x)^2,\quad S_{xy}=\sum(x_i-\bar x)(y_i-\bar y),\quad S_{yy}=\sum(y_i-\bar y)^2$$

$$m=\frac{S_{xy}}{S_{xx}},\qquad b=\bar y-m\bar x,\qquad R^2=\frac{S_{xy}^2}{S_{xx}S_{yy}},\qquad s_y=\sqrt{\frac{S_{yy}-m^2S_{xx}}{n-2}}$$

$$x_u=\frac{\bar y_u-b}{m},\qquad s_{x_u}=\frac{s_y}{m}\sqrt{\frac1M+\frac1n+\frac{(\bar y_u-\bar y)^2}{m^2S_{xx}}},\qquad \text{CI}=x_u\pm t_\text{crit}s_{x_u}\ (\text{df}=n-2)$$

$M$ = replicates of the unknown, $n$ = number of standards. The last term under
the root vanishes when the unknown reads near $\bar y$ — **bracket the unknown
between standards**. Target $R^2 \ge 0.999$ for a calibration, $\ge 0.995$ for
validation acceptance, but read the residual plot and $s_y$ before believing it.

*From* [1.4](lessons/01-04-significance-tests-calibration.md), [4.5](lessons/04-05-sampling-method-validation.md)

### Titration curves: what dominates at each stage

Every one of these is the same object — an equilibrium recomputed after each
addition — with a different y-axis. This is the table to open mid-problem.

| System (y-axis) | Start (0 percent) | Before equivalence | At equivalence | After equivalence |
|---|---|---|---|---|
| Strong acid + strong base (pH) | $[\ce{H+}]=C_a$ | excess strong acid over **total** volume | **pH = 7.00 exactly** (neutral salt) | excess strong base over total volume |
| Weak acid + strong base (pH) | $[\ce{H+}]=\sqrt{K_aC}$ | **buffer**: $\mathrm{pH}=\mathrm{p}K_a+\log\frac{n_{\ce{A-}}}{n_{\ce{HA}}}$; at 50 percent, pH $=\mathrm{p}K_a$ | conjugate base alone at diluted $C'$: $[\ce{OH-}]=\sqrt{K_bC'}$, **pH > 7** | excess strong base swamps the weak chemistry |
| Diprotic acid $\ce{H2A}$ (pH) | $[\ce{H+}]=\sqrt{K_{a1}C}$ | first buffer, pH $=\mathrm{p}K_{a1}$ at half of $V_{e1}$; second buffer, pH $=\mathrm{p}K_{a2}$ at half of $V_{e2}$ | first: amphiprotic $\ce{HA-}$, pH $\approx\tfrac12(\mathrm{p}K_{a1}+\mathrm{p}K_{a2})$, nearly concentration-independent; second: $\ce{A^2-}$ alone, $[\ce{OH-}]=\sqrt{K_{b1}C'}$ | excess strong base |
| Metal + EDTA (pM) | free metal at its formal concentration | leftover **free metal**: stoichiometry minus what's caged, diluted | cage dissociation only: $[\ce{M}]=\sqrt{[\ce{MY}]/K_f'}$ | excess EDTA pins $C_\text{EDTA}$; $[\ce{M}]=[\ce{MY}]/(K_f'C_\text{EDTA})$ |
| Reductant + oxidant titrant ($E$) | undefined (no oxidized form yet) | **analyte** couple: $E=E_1^\circ-\frac{0.0592}{n_1}\log\frac{1-f}{f}$; at 50 percent, $E=E_1^\circ$ | electron-weighted average $E_\text{eq}=\frac{n_1E_1^\circ+n_2E_2^\circ}{n_1+n_2}$ | **titrant** couple: $E=E_2^\circ-\frac{0.0592}{n_2}\log\frac{[\text{red}]}{[\text{ox}]}$ |

**Universal moves.** (i) Whoever is present in *both* oxidized and reduced (or
acid and base) form pins the intensive variable — that is why the analyte couple
rules before equivalence and the titrant couple after. (ii) At equivalence,
always divide by the **total** volume: analyte plus all titrant added. (iii) A
break is sharp when the governing constant is large ($K_a$ large enough,
$K_f' \gtrsim 10^6$–$10^8$, a wide $E^\circ$ gap) and the solution is not too
dilute; a very weak acid ($K_a \lesssim 10^{-8}$) gives no usable endpoint at all.

The diprotic row extends [2.1](lessons/02-01-acid-base-titration-curves.md)'s
four regions; it is the same polyprotic bookkeeping that produces EDTA's
$\alpha$ fractions in [2.2](lessons/02-02-complexometric-edta-titrations.md).

*From* [2.1](lessons/02-01-acid-base-titration-curves.md), [2.2](lessons/02-02-complexometric-edta-titrations.md), [2.4](lessons/02-04-redox-equilibria-titrations.md)

### Choosing an indicator

**Rule, in every system:** the indicator's transition window must bracket the
*equivalence* value and sit on the steep part of the break.

| Indicator | Transition | Use for |
|---|---|---|
| methyl red | pH 4.4–6.2 | strong–strong; weak **base** titrated with strong acid |
| bromothymol blue | pH 6.0–7.6 | strong acid + strong base (equivalence at 7) |
| phenolphthalein | pH 8.0–10.0 | weak acid + strong base (equivalence about 8–9) |
| Eriochrome Black T | wine-red bound $\to$ blue free | EDTA titration of $\ce{Ca^2+}$/$\ce{Mg^2+}$ at pH 10 |
| methylene blue | $0.53\ \mathrm{V}$ | low-potential redox couples |
| diphenylamine sulfonate | $0.85\ \mathrm{V}$ | mid-potential redox couples |
| ferroin | $1.11\ \mathrm{V}$ | $\ce{Fe^2+}$ titrated with $\ce{Ce^4+}$ ($E_\text{eq}=1.23\ \mathrm{V}$) |
| starch | deep blue with $\ce{I2}$ | iodine titrations (specific, not potential-based) |

*From* [2.1](lessons/02-01-acid-base-titration-curves.md), [2.2](lessons/02-02-complexometric-edta-titrations.md), [2.4](lessons/02-04-redox-equilibria-titrations.md)

### EDTA: the pH knob

$$K_f'=\alpha_{Y^{4-}}K_f, \qquad \text{feasible titration when } K_f'\gtrsim 10^{6}\text{–}10^{8}$$

| pH | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|
| $\alpha_{Y^{4-}}$ | $2.5\times10^{-11}$ | $3.5\times10^{-7}$ | $2.2\times10^{-5}$ | $4.8\times10^{-4}$ | $5.4\times10^{-3}$ | $5.2\times10^{-2}$ | $0.35$ | $0.85$ | $0.98$ |

| Metal | $\ce{Mg^2+}$ | $\ce{Ca^2+}$ | $\ce{Pb^2+}$ | $\ce{Ni^2+}$ |
|---|---|---|---|---|
| $\log K_f$ | 8.8 | 10.7 | 16.5 | 18.8 |

Higher pH raises $\alpha$, hence $K_f'$, hence sharpness — until the metal drops
out as $\ce{M(OH)_n}$ (about pH 10 for $\ce{Mg^2+}$, which is exactly why the
hardness buffer is pH 10). Complexation releases protons, so the buffer is
load-bearing: without it $\alpha$ and $K_f'$ sag mid-titration. Selectivity comes
from running acidic (only huge-$K_f$ metals react) or from **masking agents**.

*From* [2.2](lessons/02-02-complexometric-edta-titrations.md)

### Solubility and gravimetry

$$s = \left(\frac{K_{sp}}{a^ab^b}\right)^{1/(a+b)} \quad\text{(pure water)}; \qquad K_{sp}=[\ce{M}]^aC^b \quad\text{(common ion fixed at }C)$$

1:1 salt: $s=\sqrt{K_{sp}}$. $\ce{CaF2}$-type (1:2): $K_{sp}=4s^3$.
$\ce{Ag2CrO4}$-type (2:1): $K_{sp}=4s^3$. In selective precipitation the ion
needing the **smaller** precipitant concentration comes out first, and the split
is clean if under 0.1 percent of it remains when the second one starts.

| Salt | $\ce{AgCl}$ | $\ce{AgI}$ | $\ce{CaF2}$ | $\ce{Ag2CrO4}$ |
|---|---|---|---|---|
| $K_{sp}$ | $1.8\times10^{-10}$ | $8.3\times10^{-17}$ | $3.9\times10^{-11}$ | $1.1\times10^{-12}$ |

Precipitate hygiene: **digest** warm in the mother liquor (small impure crystals
redissolve and regrow bigger and purer) and **wash with a dilute volatile
electrolyte**, never pure water — that peptizes a colloid straight through the
filter.

*From* [2.3](lessons/02-03-solubility-gravimetric-analysis.md)

### Redox potentials used in the lessons

| Couple | $E^\circ$ (V) | $n$ |
|---|---|---|
| $\ce{Fe^3+ + e- <=> Fe^2+}$ | 0.767 (0.771 in some tables) | 1 |
| $\ce{Ce^4+ + e- <=> Ce^3+}$ | 1.70 | 1 |
| $\ce{MnO4- + 8H+ + 5e- -> Mn^2+ + 4H2O}$ | 1.51 | 5 |

The tidy average $E_\text{eq}=(n_1E_1^\circ+n_2E_2^\circ)/(n_1+n_2)$ assumes a
**symmetric** reaction — equal species counts, no extra reactants. Permanganate
carries a $\log[\ce{H+}]^8$ term, so its $E_\text{eq}$ is pH-dependent and the
weighting leans hard toward the $n=5$ couple.

*From* [2.4](lessons/02-04-redox-equilibria-titrations.md)

### Photometry

$$A=-\log_{10}T=\varepsilon bc, \qquad \%T = 100\,T, \qquad A_\lambda = b\sum_i\varepsilon_{i,\lambda}c_i$$

$A=1$ means 10 percent of the light survives; $A=2$ means 1 percent. Absorbances
of independent absorbers **add**, so two wavelengths give two equations and
resolve a two-component mixture without separating it. Work near $\lambda_\text{max}$
(largest $\varepsilon$, locally flat so wavelength error barely matters) and keep
$A \lesssim 1$.

**Three ways Beer's law bends**, all downward at high $c$: *chemical* (the
analyte associates, dissociates, or reacts, so the absorbing concentration is not
the one you weighed out — an indicator's $\varepsilon$ literally changes with pH);
*instrumental* (polychromatic light and stray light — 1 percent stray light costs
about 15 percent at $A=2$ but under 2 percent at $A=0.5$); *fundamental*
(absorbers perturb each other and the refractive index). The fix is always
**dilute and remeasure**, and always measure against a blank.

*From* [3.1](lessons/03-01-uv-vis-beers-law.md)

### Atomic spectroscopy: which mode, and why temperature matters

$$\frac{N_1}{N_0}=\frac{g_1}{g_0}\exp\!\left(-\frac{\Delta E}{kT}\right), \qquad \Delta E=\frac{hc}{\lambda}$$

| Mode | What is measured | Depends on | Consequence |
|---|---|---|---|
| Absorption (AAS) | light swallowed from the element's own hollow-cathode line, $A=kbc$ | $N_0 \approx N_\text{total}$ | temperature barely matters; a modest flame suffices |
| Emission (AES / ICP-OES) | brightness of the line the atoms emit, $I_\text{em}\propto N_1$ | $N_1$, exponentially in $T$ | needs a hot plasma; about 6000-fold brighter at 7000 K than 2500 K |
| Fluorescence | re-emitted light at 90 degrees, $I_\text{F}\propto\Phi I_0c$ | source brightness and $\Phi$ | near-black background: measuring a small signal against zero beats a small difference between two big numbers |

Flame AAS reaches about ppm; graphite-furnace AAS traps the atom cloud in the
beam and reaches ppb from microlitres; ICP-OES does dozens of elements at once
over 4–6 decades; fluorescence goes ultratrace but self-absorbs (bends over) when
concentrated.

**Interferences and their remedies:** *spectral* (overlapping line) — higher
resolution or an alternate line; *chemical* (analyte locked in a refractory
compound like $\ce{Ca3(PO4)2}$) — a **releasing agent** such as excess
$\ce{La^3+}$, or a hotter flame; *ionization* (easily ionized metals lose an
electron) — an **ionization suppressor**, a big excess of an even-easier-to-ionize
element; *background* (broadband matrix absorption or scatter) — deuterium-lamp or
Zeeman background correction.

*From* [3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md)

### Potentiometry

$$E_\text{cell}=E_\text{ind}-E_\text{ref}, \qquad E=\text{const}\pm\frac{0.0592}{z}\log a_\text{ion}$$

Sign is **plus** for a cation-responsive electrode, **minus** for an anion one —
so a pH electrode reads $E=\text{const}-0.0592\,\mathrm{pH}$, i.e. 59.2 mV *down*
per pH unit. Two-point calibration: fit the empirical slope $S$ from two
standards, then

$$\log a_x = \log a_1 + \frac{E_x-E_1}{S}.$$

Interference (Nikolsky–Eisenman):
$E=\text{const}\pm\frac{0.0592}{z_\ce{A}}\log\!\big(a_\ce{A}+K_{\ce{A,B}}a_\ce{B}^{z_\ce{A}/z_\ce{B}}\big)$.

Non-ideality: $a=\gamma c$, $I=\tfrac12\sum c_iz_i^2$, and the Davies equation
$\log\gamma=-0.51z^2\!\left[\frac{\sqrt I}{1+\sqrt I}-0.30I\right]$. At $I=0.10$
a monovalent ion has $\gamma\approx0.78$ — a 22 percent low bias if you calibrated
in dilute standards. TISAB removes it.

*From* [3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md)

### Voltammetry and standard addition

Three electrodes, three jobs: **working** (does the chemistry, you control its
potential), **reference** (holds a stable zero, carries no current), **counter**
(carries the current so the reference stays put). A reversible couple gives the
CV "duck" with $\Delta E_p \approx 0.0592/n$ volts and equal peak currents.
**Stripping** voltammetry plates the metal onto the electrode for minutes first,
preconcentrating it into a film, then strips it back off — parts per trillion.

$$\text{single addition: } c_x=c_s\frac{S_1}{S_2-S_1}; \qquad \text{multiple: } S=k\,c_\text{added}+kc_x \Rightarrow c_x=\frac{\text{intercept}}{\text{slope}}$$

The extrapolated x-intercept is at **negative** added concentration, equal to
$-c_x$; the slope is the analyte's sensitivity *measured in the real matrix*.

*From* [3.4](lessons/03-04-voltammetry-standard-addition.md)

### Chromatography: the three levers

$$k=\frac{t_R-t_M}{t_M}, \qquad \alpha=\frac{k_2}{k_1}, \qquad N=16\left(\frac{t_R}{w}\right)^2, \qquad H=\frac LN, \qquad R_s=\frac{\Delta t_R}{\tfrac12(w_1+w_2)}$$

$$R_s=\underbrace{\frac{\sqrt N}{4}}_\text{efficiency}\cdot\underbrace{\frac{\alpha-1}{\alpha}}_\text{selectivity}\cdot\underbrace{\frac{k}{1+k}}_\text{retention}$$

$$H=A+\frac Bu+Cu, \qquad u_\text{opt}=\sqrt{\frac BC}, \qquad H_\text{min}=A+2\sqrt{BC}$$

**Which lever.** Selectivity is the cheapest and strongest — a change from
$\alpha=1.05$ to $1.10$ nearly doubles $R_s$. Efficiency is expensive:
$R_s\propto\sqrt N$, so doubling resolution by column length alone costs a
**fourfold** longer column and run. Retention saturates: past $k\approx5$,
$k/(1+k)\to1$ and more retention just wastes time. If $\alpha=1$, no amount of
$N$ will separate anything.

**van Deemter terms.** $A$ = eddy diffusion (many path lengths through the
packing, roughly velocity-independent); $B/u$ = longitudinal diffusion (worse
**slow**); $Cu$ = mass-transfer resistance (worse **fast**). Below $u_\text{opt}$,
speeding up *sharpens* peaks; above it, faster means fatter. Smaller particles
shrink both $A$ and $C$ — the entire premise of HPLC — at a back-pressure cost
scaling as the inverse square of particle diameter.

*From* [4.1](lessons/04-01-separation-theory-plates-resolution.md), [4.3](lessons/04-03-hplc.md)

### GC and HPLC: choosing the setup

| Decision | GC ([4.2](lessons/04-02-gas-chromatography.md)) | HPLC ([4.3](lessons/04-03-hplc.md)) |
|---|---|---|
| Analyte must be | volatile and thermally stable | merely soluble |
| Mobile phase | inert carrier gas ($\ce{He}$ standard, $\ce{H2}$ fast, $\ce{N2}$ slow) — does no chemistry | liquid whose polarity is itself a knob |
| Stationary phase | polysiloxane film; nonpolar retains by boiling point, polar adds dipole/H-bonding | C18 (reversed, the default) or bare silica (normal); also ion-exchange, size-exclusion |
| Elution order | roughly by boiling point, nudged by "like dissolves like" | reversed phase: **polar first**; size-exclusion: **large first** |
| Wide-range fix | temperature program (ramp the oven) | gradient elution (ramp percent organic) |
| Speed knob | carrier gas via van Deemter: $\ce{H2}$/$\ce{He}$ have flat curves at high $u$; $\ce{N2}$ has a deep narrow minimum at low $u$ | smaller particles (more plates, more pressure) |

| GC detector | Sees | Notes |
|---|---|---|
| FID | organics (C–H) | very sensitive, huge linear range, **destructive**; blind to $\ce{H2O}$, $\ce{CO2}$, $\ce{N2}$, $\ce{O2}$ |
| TCD | anything unlike the carrier | universal, includes permanent gases and inorganics, nondestructive, about $10^3$ times less sensitive |
| ECD | halogens, nitro groups | exquisite for pesticides and PCBs |
| MS | everything, plus identity | a spectrum under every peak |

HPLC detectors: **UV/DAD** (Beer's law on a flowing band; DAD records a whole
spectrum), **fluorescence** (sensitive and selective), **refractive index**
(universal but insensitive — the fallback for sugars and other
chromophore-free analytes), **MS**. Injection: **split** dilutes concentrated
samples, **splitless** puts nearly everything on-column for trace work. Quantify
by **peak area**, identify by $t_R$ against a standard run under identical
conditions.

### Mass spectrometry

Common neutral losses from the molecular ion:

| Mass lost | 15 | 18 | 28 | 29 | 45 |
|---|---|---|---|---|---|
| Neutral | $\ce{CH3}$ | $\ce{H2O}$ | $\ce{CO}$ or $\ce{C2H4}$ | $\ce{CHO}$ or $\ce{C2H5}$ | $\ce{COOH}$ |

Isotope tells: M+2 about **one-third** of M means one $\ce{Cl}$ (3:1); M+2
**about equal** to M means one $\ce{Br}$ (1:1); and

$$n_\mathrm{C} \approx \frac{\text{height of M+1}}{\text{height of M}}\times\frac{100}{1.1}.$$

Multiply-charged ESI ions form a **charge envelope** at $m/z=(M+zH)/z$; solve two
adjacent peaks for $M$ and $z$ to weigh a protein on an analyzer that tops out
near $m/z$ 2000.

**Ionization rule:** small, volatile, stable $\to$ GC–MS with hard **EI**
(reproducible, library-searchable fragments, molecular ion may be missing);
large, polar, non-volatile or fragile $\to$ LC–MS with soft **ESI** (mostly
intact $\ce{[M+H]+}$, subtract 1 for the proton). MALDI is the soft option for
very large biomolecules.

*From* [4.4](lessons/04-04-mass-spectrometry.md)

### Instrumental methods at a glance

| Method | Physically measures | Signal vs. concentration | Typical level | Reach for it when | Watch |
|---|---|---|---|---|---|
| UV–Vis ([3.1](lessons/03-01-uv-vis-beers-law.md)) | light absorbed by molecules | $A=\varepsilon bc$, linear | micromolar | a coloured or chromophoric species, cheap and fast | bends above $A\approx1$; blank required |
| Flame AAS ([3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md)) | line absorbed by free atoms | $A=kbc$, linear | ppm | routine single metals | one lamp per element |
| Graphite-furnace AAS ([3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md)) | same, longer residence | linear | ppb | one metal at trace level, microlitre samples | slower, poorer precision |
| ICP-OES ([3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md)) | emitted line intensity | $\propto N_1$, linear over 4–6 decades | sub-ppm | many elements at once, fast | spectral overlaps; needs a plasma |
| Atomic fluorescence ([3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md)) | re-emission at 90 degrees | $\propto \Phi I_0c$, linear when dilute | ultratrace | the lowest levels for one element | self-absorption at higher $c$ |
| Potentiometry / ISE ([3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md)) | voltage at zero current | linear in $\log a$, $59.2/z$ mV per decade | micromolar and up | free-ion activity, huge dynamic range, no reagents | activity not concentration; sub-Nernstian drift |
| Voltammetry / stripping ([3.4](lessons/03-04-voltammetry-standard-addition.md)) | current at swept potential | $i_\text{lim}=kc$, linear | ppb, ppt with stripping | trace heavy metals in dirty matrices | matrix effects — pair with standard addition |
| GC ([4.2](lessons/04-02-gas-chromatography.md)) | separation in time, detector response | peak **area** $\propto$ amount | ppm–ppb (detector-set) | volatile, thermally stable mixtures | analyte must survive the injector |
| HPLC ([4.3](lessons/04-03-hplc.md)) | same, liquid mobile phase | peak area $\propto$ amount | ppm–ppb | nonvolatile, fragile, or large analytes | pressure is the toll, not the mechanism |
| MS ([4.4](lessons/04-04-mass-spectrometry.md)) | ion abundance vs. $m/z$ | abundance $\propto$ amount | ppb and below | identity plus quantity; co-eluting peaks | x-axis is $m/z$, not mass |

**Two calibration philosophies.** Beer's law, AAS, and voltammetry are linear in
$c$ itself, so a fixed signal error costs a fixed *amount*; potentiometry is
linear in $\log a$, so a fixed voltage error costs a fixed *percentage* — superb
over decades, mediocre for high-precision work at one value. When the matrix is
unknown, calibrate inside the sample (standard addition); when the interference
is another *species* rather than a scale factor, separate it first.

### Sampling and method validation

$$s_\text{total}^2=s_\text{sampling}^2+s_\text{analysis}^2, \qquad \%\,\text{recovery}=\frac{C_\text{spiked}-C_\text{unspiked}}{C_\text{added}}\times 100$$

Variances add; the bigger term rules. With $s_\text{samp}=0.40$ and
$s_\text{anal}=0.15$, driving the analytical term to zero moves the total from
0.427 to 0.400 — take more increments instead. Increments average down as
$1/\sqrt n$, the same law as replicate readings.

| Figure of merit | Experiment | Typical acceptance |
|---|---|---|
| accuracy | certified reference material, or spike recovery | 90–110 percent (looser near the LOD) |
| precision | replicates: repeatability (one day) **and** reproducibility (across days/analysts/labs) | RSD of a few percent; report both |
| linearity and range | calibration across the working span | $R^2 \ge 0.995$, action level mid-range |
| LOD / LOQ | blank replicates, $3s/m$ and $10s/m$ | LOQ comfortably below the decision level |
| selectivity | spike into the real matrix; chromatographic $R_s$ or a unique $m/z$ | no response from interferents |
| robustness | vary temperature, pH, column lot, day, analyst slightly | result barely moves |

Sampling designs: **random** (unbiased, needs a frame), **systematic** (grid or
fixed interval; can alias with periodic structure), **composite** (cheap mean,
discards between-increment variance). Then homogenize, preserve, and blank against
contamination.

*From* [4.5](lessons/04-05-sampling-method-validation.md)

## Assumed, not taught here

A Tier 1 course, so it leans on general chemistry and statistics rather than
re-deriving them. Every row points at where the *why* lives.

| Fact | Where it's taught |
|---|---|
| Moles, molar mass, molarity, dilution arithmetic | [gen-chem 2.1](../general-chemistry/lessons/02-01-mole-molar-mass-formulas.md) and the [gen-chem card](../general-chemistry/reference.md) |
| Atomic masses used for molar masses and gravimetric factors | tabulated on the [gen-chem card](../general-chemistry/reference.md) |
| Equilibrium constants, ICE tables, Le Châtelier | [gen-chem 3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| $K_a$, $K_b$, $K_w$, pH, and the $\sqrt{K_aC}$ weak-acid shortcut | [gen-chem 4.1](../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) |
| Buffers and the Henderson–Hasselbalch equation | [gen-chem 4.2](../general-chemistry/lessons/04-02-buffers-titration.md) |
| Half-reactions, tabulated $E^\circ$, and $\Delta G^\circ=-nFE^\circ$ | [gen-chem 4.4](../general-chemistry/lessons/04-04-taste-of-electrochemistry.md) |
| Where $E^\circ$ values and the hydrogen-electrode reference come from | [electrochemistry 1.3](../electrochemistry/lessons/01-03-electrode-potentials-she-series.md) |
| The Nernst equation *derived* (not just used) | [electrochemistry 1.5](../electrochemistry/lessons/01-05-nernst-equation-concentration-cells.md) |
| The Gaussian distribution, and why averages are Gaussian | [prob-stat 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md), [3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) |
| Student's $t$, and what a confidence interval actually claims | [prob-stat 4.2](../prob-stat-refresher/lessons/04-02-confidence-intervals.md) |
| Null hypotheses, critical values, and the $F$ distribution | [prob-stat 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) |
| Partial derivatives, for the master propagation formula | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Logarithms and antilogs (pH, p$K_a$, pM, absorbance, log-activity plots) | [algebra-foundations 5.2](../algebra-foundations/lessons/05-02-logarithms.md) |
| The Boltzmann distribution behind $N_1/N_0$ | [physical-chemistry 4.1](../physical-chemistry/lessons/04-01-boltzmann-partition-function.md) |
| Activity coefficients and why concentration is not activity | [physical-chemistry 1.6](../physical-chemistry/lessons/01-06-fugacity-activity.md) |
| Electronic transitions — where $\varepsilon$ and the spectrum's peaks come from | [physical-chemistry 4.6](../physical-chemistry/lessons/04-06-electronic-spectroscopy.md) |
| Partition of a solute between two phases (the $K$ behind retention) | [physical-chemistry 2.3](../physical-chemistry/lessons/02-03-ideal-solutions-raoult-henry.md) |
| Fragmentation patterns as structure elucidation | [organic-chemistry 4.1](../organic-chemistry/lessons/04-01-ir-mass-spectrometry.md) |

**Stated only here:** the tabulated $t$, $F$, and $Q$ critical values; the
$\alpha_{Y^{4-}}$-vs-pH table; the $\log K_f$, $K_{sp}$, and indicator-range
tables; the ppm/ppb/ppt conventions; and the common-neutral-loss and isotope-ratio
tables. These are measured or conventional data, not theorems — there is no
course that derives them.

## Pitfalls

### Error, digits, and uncertainty

- Precise is not correct: a tight cluster in the wrong place is a *systematic* error hiding inside good reproducibility. Only a standard or reference method exposes it. *([1.1](lessons/01-01-accuracy-precision-significant-figures.md))*
- Trailing zeros are a claim, not decoration — 0.250 asserts the thousandths place that 0.25 does not. *([1.1](lessons/01-01-accuracy-precision-significant-figures.md))*
- A pH of 3.57 has **2** significant figures: only the mantissa counts, the characteristic is just the power of ten. *([1.1](lessons/01-01-accuracy-precision-significant-figures.md))*
- Rounding intermediates is a self-inflicted bias — guard digits in, round once at the end. *([1.1](lessons/01-01-accuracy-precision-significant-figures.md))*
- Subtracting two nearly equal large numbers destroys precision (6 sig figs in, 4 out) *and* inflates relative uncertainty — errors never cancel just because the quantities do. *([1.1](lessons/01-01-accuracy-precision-significant-figures.md), [1.3](lessons/01-03-propagation-of-uncertainty.md))*
- $s$ describes one reading and does **not** shrink with more data; $s_{\bar x}=s/\sqrt n$ describes the mean and does. Report $s$ to characterize the method, $s_{\bar x}$ to build the error bar. *([1.2](lessons/01-02-statistics-of-measurement.md))*
- Do not use 1.96 for a handful of replicates — with $s$ estimated from few data you owe the honesty tax of Student's $t$ at df $=n-1$. *([1.2](lessons/01-02-statistics-of-measurement.md))*
- "95 percent confident" is a claim about the *procedure*, not about this one bracket. *([1.2](lessons/01-02-statistics-of-measurement.md))*
- Replication pays slowly: halving the interval costs four times the work. Past a handful, fix the method instead. *([1.2](lessons/01-02-statistics-of-measurement.md))*
- Never quadrature-sum an absolute against a relative uncertainty — convert to one currency, then apply the matching rule. *([1.3](lessons/01-03-propagation-of-uncertainty.md))*
- Do not polish a term five times smaller than the biggest: it carries one twenty-fifth of the variance. *([1.3](lessons/01-03-propagation-of-uncertainty.md))*

### Tests and calibration

- Failing to reject $H_0$ is not proof of equality — a small sample hides real bias behind a fat standard error. *([1.4](lessons/01-04-significance-tests-calibration.md))*
- $R^2 = 0.999$ is easy to inflate and blind to curvature; read the residual plot and $s_y$. *([1.4](lessons/01-04-significance-tests-calibration.md))*
- The Q-test rejects **at most one** point, and only above $Q_\text{crit}$. Serial pruning is fabricating precision; two suspects mean the method wobbled. *([1.4](lessons/01-04-significance-tests-calibration.md))*
- Never extrapolate a calibration past the top standard: $s_{x_u}$ blows up away from the centre and real detectors go nonlinear. Bracket the unknown. *([1.4](lessons/01-04-significance-tests-calibration.md), [3.1](lessons/03-01-uv-vis-beers-law.md))*
- Fit the electrode slope from fresh standards each session — the theoretical 59.2 mV per decade is an ideal real electrodes miss. *([3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md))*
- Standard addition fixes **multiplicative** matrix effects only; a constant additive background survives it untouched, and forgetting the spike's dilution under-reports $c_x$. *([3.4](lessons/03-04-voltammetry-standard-addition.md))*
- The standard-addition x-intercept is *negative*: $c_x$ is its magnitude, i.e. intercept over slope. *([3.4](lessons/03-04-voltammetry-standard-addition.md))*

### Titrations and equilibria

- The equivalence point is pH 7 **only** for strong–strong; a weak acid leaves its conjugate base behind, so equivalence sits above 7 (and phenolphthalein, not methyl red, is the indicator). *([2.1](lessons/02-01-acid-base-titration-curves.md))*
- At equivalence, dilute: $C'$ uses the *total* volume, analyte plus all titrant. *([2.1](lessons/02-01-acid-base-titration-curves.md), [2.2](lessons/02-02-complexometric-edta-titrations.md))*
- Equivalence (stoichiometric, invisible) is not the endpoint (observable colour change) — in acid–base, EDTA, and redox alike. Matching the indicator window to the equivalence value is what makes them nearly coincide. *([2.1](lessons/02-01-acid-base-titration-curves.md), [2.4](lessons/02-04-redox-equilibria-titrations.md))*
- A big $K_f$ does not guarantee a good EDTA titration — only $K_f'$ at *your* buffer's pH does. *([2.2](lessons/02-02-complexometric-edta-titrations.md))*
- Higher pH is not always better: past the hydroxide ceiling the metal precipitates before EDTA can reach it. *([2.2](lessons/02-02-complexometric-edta-titrations.md))*
- The EDTA endpoint is where EDTA **strips** metal off the indicator, freeing the dye — the dye must bind more weakly than EDTA, and the buffer must absorb the protons complexation releases. *([2.2](lessons/02-02-complexometric-edta-titrations.md))*
- Write the Nernst quotient as reduced over oxidized; the sanity check is that adding oxidized form must *raise* $E$. *([2.4](lessons/02-04-redox-equilibria-titrations.md))*
- The averaged $E_\text{eq}$ formula holds only for symmetric couples — permanganate's $\ce{H+}$ term makes its equivalence potential pH-dependent. *([2.4](lessons/02-04-redox-equilibria-titrations.md))*

### Precipitation and gravimetry

- Stoichiometry enters $K_{sp}$ twice: for $\ce{CaF2}$, $[\ce{F-}]=2s$ **and** it is squared, giving $4s^3$. Dropping either factor wrecks the answer. *([2.3](lessons/02-03-solubility-gravimetric-analysis.md))*
- With a common ion present at $C$, that ion is fixed at $C$ and you solve for the *other* one; $s=\sqrt{K_{sp}}$ applies only when both ions come from the dissolving salt. *([2.3](lessons/02-03-solubility-gravimetric-analysis.md))*
- The analytical error in gravimetry usually lives in the precipitate's **purity**, not the weighing: coprecipitation reads high, peptization (over-washing with pure water) reads low. *([2.3](lessons/02-03-solubility-gravimetric-analysis.md))*

### Spectroscopy

- Above about $A=1$–1.5 a bigger absorbance is *less* reliable, not more — stray light dominates when almost no light reaches the detector. Dilute and remeasure. *([3.1](lessons/03-01-uv-vis-beers-law.md))*
- Beer's law is a limiting law, not an identity; a nonzero calibration intercept usually means a blank you didn't subtract. *([3.1](lessons/03-01-uv-vis-beers-law.md))*
- A hotter atomizer does not help AAS — absorption reads the ground state, which is already nearly all the atoms, and extra heat can ionize them away. Emission is the mode that lives on temperature. *([3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md))*
- The hollow-cathode lamp emits *the analyte's own line*: AAS is single-element hardware, which is exactly why ICP took over multi-element work. *([3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md))*
- Fluorescence is linear only when dilute — emitted photons get re-absorbed on the way out and the curve bends. *([3.2](lessons/03-02-atomic-fluorescence-spectroscopy.md))*

### Electrochemical measurements

- The meter reads **activity**, not concentration; in a high-salt matrix $\gamma\approx0.78$ is a 22 percent low bias. Match ionic strength with TISAB. *([3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md))*
- Check whether the electrode is cation- or anion-responsive before trusting a direction: for $\ce{F-}$, $\ce{NO3-}$, and the pH electrode, more analyte means *lower* voltage. *([3.3](lessons/03-03-potentiometry-ion-selective-electrodes.md))*

### Chromatography

- $N$ only sharpens peaks. If $\alpha=1$ the resolution is zero no matter how many plates you buy — you need a thermodynamic difference first. *([4.1](lessons/04-01-separation-theory-plates-resolution.md))*
- Match the constant to the width: 16 goes with baseline $w$, 5.54 with $w_{1/2}$. Mixing them inflates $N$ about 3.5-fold. *([4.1](lessons/04-01-separation-theory-plates-resolution.md))*
- Ask which side of the van Deemter minimum you are on — below it, faster flow *sharpens* peaks; only past it does faster mean fatter. *([4.1](lessons/04-01-separation-theory-plates-resolution.md), [4.2](lessons/04-02-gas-chromatography.md))*
- $k$ (a time ratio off the chromatogram) and $K$ (a concentration ratio) differ by the phase-volume ratio: same phases, different geometry gives the same $K$ but a different $k$. *([4.1](lessons/04-01-separation-theory-plates-resolution.md))*
- A hotter oven buys speed, not resolution — it lowers every $k$ and bunches peaks toward the dead time. Programming works because each compound meets a good $k$ *when its turn comes*. *([4.2](lessons/04-02-gas-chromatography.md))*
- FID is blind to permanent gases and $\ce{CO2}$/$\ce{H2O}$; inorganics need TCD. *([4.2](lessons/04-02-gas-chromatography.md))*
- Quantify by peak **area**, never height — a tailing peak can be short and still hold plenty of analyte. *([4.2](lessons/04-02-gas-chromatography.md))*
- Split dilutes (concentrated samples); splitless loads everything (trace work). Getting this backwards throws away the signal you came for. *([4.2](lessons/04-02-gas-chromatography.md))*
- "Reversed phase" reverses the *polarity assignment*, not the flow — polar elutes first. And size-exclusion elutes **large** molecules first, the one mode where retention is geometry, not chemistry. *([4.3](lessons/04-03-hplc.md))*
- A gradient is for a wide polarity range, not a reflex; isocratic is simpler, more reproducible, and needs no re-equilibration. And pressure is the toll for small particles, not the thing that separates. *([4.3](lessons/04-03-hplc.md))*

### Mass spectrometry

- The x-axis is $m/z$: a doubly charged ion sits at half its mass, which is why a heavy protein appears deceptively low in ESI. *([4.4](lessons/04-04-mass-spectrometry.md))*
- Not every spectrum shows a molecular ion — ESI gives $\ce{[M+H]+}$ (subtract the proton) and hard EI can obliterate it, which is itself a clue that the molecule is fragile. *([4.4](lessons/04-04-mass-spectrometry.md))*
- M+1 and M+2 are the same molecule wearing heavier isotopes, not impurities — their fixed ratios are the whole point. *([4.4](lessons/04-04-mass-spectrometry.md))*

### Sampling and validation

- A great instrument guarantees a great answer *about the sample you fed it*; sampling error is invisible to the detector and usually the bigger term. *([4.5](lessons/04-05-sampling-method-validation.md))*
- Variances add, standard deviations do not: with 0.40 and 0.15 the total is 0.43, not 0.55. *([4.5](lessons/04-05-sampling-method-validation.md))*
- Same-day repeatability always flatters the method; deployment lives at across-day, across-lab reproducibility. Quote both. *([4.5](lessons/04-05-sampling-method-validation.md))*
- Recovery above about 110 percent is a selectivity failure — you found more than you added — not a bonus. *([4.5](lessons/04-05-sampling-method-validation.md))*
