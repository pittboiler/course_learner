# Analytical & Instrumental Chemistry · Lesson 3.1: UV–Vis absorption & Beer's law

> ⏱ ~15 min · Module 3: Spectroscopic & electroanalytical methods · Builds on: [1.4 Significance tests & calibration](01-04-significance-tests-calibration.md), [`physical-chemistry` electronic spectroscopy](../../physical-chemistry/syllabus.md) · Unlocks: 3.2 (atomic & fluorescence spectroscopy)

## Why this matters

Shine light through a colored solution and some of it disappears — absorbed by the molecules inside. Measure *how much* disappears and you've measured *how much* is there, without touching, weighing, or destroying the sample. That's the whole trade of UV–Vis spectrophotometry: the workhorse of every clinical lab, water-quality bench, and protein assay on Earth. The bridge from "light absorbed" to "concentration" is one clean linear law — Beer's law — and this lesson is about making that line, reading an unknown off it (exactly the calibration machinery from [1.4](01-04-significance-tests-calibration.md)), and knowing the three ways it lies to you.

## The idea

Send a beam of intensity $I_0$ into a cuvette. Absorbing molecules pick off photons as the beam crosses, so it exits weaker, at intensity $I$. The obvious thing to report is the fraction that made it through — the **transmittance** $T = I/I_0$. But transmittance is the wrong currency: doubling the concentration doesn't halve $T$, because each *layer* of solution removes a fixed *fraction*, not a fixed amount. Photons die off exponentially with concentration and path length, the same way a stack of sunglasses dims light multiplicatively (two identical lenses that each pass 50% pass 25% together, not 0%).

The fix is to take a logarithm, which turns that multiplicative decay into something additive and linear. Define **absorbance** $A = -\log_{10} T$. Now $A$ is directly proportional to how many absorbers the beam met — proportional to concentration and to path length. Plot $A$ against concentration for a few standards and you get a straight line through the origin. Read your unknown's $A$, drop it onto the line, read off its concentration. That's the entire method in one picture.

## The formal version

**Transmittance and absorbance.** With $I_0$ the incident intensity and $I$ the transmitted intensity,

$$T = \frac{I}{I_0}, \qquad A = -\log_{10} T = \log_{10}\frac{I_0}{I}.$$

*In words: transmittance is the fraction of light that gets through; absorbance is minus its base-10 log — the quantity that grows linearly with how much absorber is present.* $T$ runs from 1 (nothing absorbed, $A=0$) down toward 0 (all absorbed, $A\to\infty$); often it's quoted as **percent transmittance** $\%T = 100\,T$. Absorbance is unitless. Note $A=1$ means only 10% of the light survives; $A=2$ means 1%.

**The Beer–Lambert law.** For a dilute solution of a single absorbing species,

$$\boxed{\,A = \varepsilon\, b\, c\,}$$

where

- $\varepsilon$ = **molar absorptivity** (units $\mathrm{L\,mol^{-1}\,cm^{-1}}$): how strongly this species absorbs *at a given wavelength* — an intrinsic property of the molecule, not the sample. Values range from ~10 (weak, "forbidden" transitions) to ~$10^5$ (intense, allowed transitions);
- $b$ = **path length** (cm): how far the beam travels through the solution — usually a 1.00 cm cuvette;
- $c$ = **concentration** ($\mathrm{mol/L}$).

*In words: absorbance is the product of how good the molecule is at absorbing, how far the light travels, and how many molecules are in the way.* Because $\varepsilon$ and $b$ are fixed for a given method, $A$ is **linear in $c$** — the single fact the whole technique rests on.

**Which wavelength?** $\varepsilon$ depends on wavelength; the plot of $\varepsilon$ (or $A$) versus wavelength is the **absorption spectrum**, whose peaks are the molecule's electronic transitions (the ones you meet in physical-chemistry electronic spectroscopy — a photon promotes an electron to a higher orbital). You measure at $\lambda_{\max}$, the wavelength of a peak, for two reasons: (1) **sensitivity** — $\varepsilon$ is largest there, so a given $c$ gives the biggest $A$; and (2) **robustness** — a peak is locally *flat*, so small wavelength errors in the instrument barely change $\varepsilon$, keeping the calibration stable.

**Building the calibration.** Prepare standards of known $c$, measure each $A$, and least-squares fit $A = mc + b_0$ (the very procedure from [1.4](01-04-significance-tests-calibration.md)). The slope *is* the sensitivity, $m = \varepsilon b$; the intercept $b_0$ should be near zero (a good blank). For an unknown reading $A_x$, invert the line:

$$c_x = \frac{A_x - b_0}{m}.$$

**Additivity for mixtures.** Absorbances of independent absorbers *add* — at any wavelength $\lambda$,

$$A_\lambda = b\sum_i \varepsilon_{i,\lambda}\, c_i .$$

*In words: each species contributes its own $\varepsilon b c$, and the total absorbance is the sum.* So a two-component mixture measured at two wavelengths gives two linear equations,

$$A_{\lambda_1} = b(\varepsilon_{1,\lambda_1} c_1 + \varepsilon_{2,\lambda_1} c_2), \qquad A_{\lambda_2} = b(\varepsilon_{1,\lambda_2} c_1 + \varepsilon_{2,\lambda_2} c_2),$$

which you solve simultaneously for $c_1$ and $c_2$ — multicomponent analysis, no separation required.

## Picture

![Beer's-law calibration plot: absorbance A versus concentration c, linear through the origin at low c, curving and flattening (negative deviation) at high c, with the usable linear range marked and an unknown mapped onto the fit line to read its concentration](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — light in, concentration out).** A dye has $\varepsilon = 6130\ \mathrm{L\,mol^{-1}\,cm^{-1}}$ at $\lambda_{\max}$. In a 1.00 cm cell you read $A = 0.518$. Then

$$c = \frac{A}{\varepsilon b} = \frac{0.518}{6130 \times 1.00} = 8.45\times10^{-5}\ \mathrm{mol/L}.$$

If instead the instrument reported $\%T = 25.0$, first convert: $A = -\log_{10}(0.250) = 0.602$, then $c = 0.602/6130 = 9.82\times10^{-5}\ \mathrm{mol/L}$. Absorbance is the currency; transmittance is just the raw reading.

**Example 2 (why you'd care — reading an unknown off the line).** Five standards of a colored complex ($b = 1.00$ cm) give

| $c$ ($\mu$M) | 2.00 | 4.00 | 6.00 | 8.00 | 10.00 |
|---|---|---|---|---|---|
| $A$ | 0.114 | 0.220 | 0.334 | 0.438 | 0.552 |

Least-squares (as in [1.4](01-04-significance-tests-calibration.md)): with $\bar c = 6.00\ \mu\mathrm{M}$, $\bar A = 0.3316$, $S_{cc}=40.0$, $S_{cA}=2.188$,

$$m = \frac{S_{cA}}{S_{cc}} = \frac{2.188}{40.0} = 0.0547\ \mathrm{A\,\mu M^{-1}}, \qquad b_0 = \bar A - m\bar c = 0.3316 - 0.328 = 0.003.$$

An unknown reads $A_x = 0.305$, so

$$c_x = \frac{0.305 - 0.003}{0.0547} = 5.51\ \mu\mathrm{M}.$$

This sits comfortably inside the calibrated range (0.11–0.55) and well under $A=1$, so we trust it. As a bonus the slope hands us the molar absorptivity: $m = \varepsilon b$ with $c$ in $\mu$M means $\varepsilon = 0.0547\ \mathrm{A}/(10^{-6}\ \mathrm{mol/L}) = 5.47\times10^{4}\ \mathrm{L\,mol^{-1}\,cm^{-1}}$ — an intense, allowed transition.

## Watch out

- **You might think a bigger number is always more reliable.** For absorbance the opposite is true at the top: above $A\approx 1$–$1.5$ the calibration bends *down* (the coral region in the figure) and readings lose precision, because almost no light reaches the detector and stray light dominates. Keep $A \lesssim 1$ — if the unknown reads higher, **dilute and remeasure**. This ceiling, together with the detection limit at the bottom, defines the **linear dynamic range**.
- **You might think Beer's law is exact.** It's a limiting law for dilute solutions, and it deviates for three distinct reasons. *Chemical:* if the analyte associates, dissociates, or reacts with the solvent, its actual absorbing concentration isn't the $c$ you weighed out — an acid–base indicator's $\varepsilon$ literally changes with pH. *Instrumental:* real light isn't a single wavelength; **polychromatic light** and **stray light** flatten the line at high $A$ (Example in P3). *Fundamental:* at high concentration the absorbers are close enough to perturb each other's $\varepsilon$ and to change the solution's refractive index, so linearity fails even in principle — this is why the deviation is intrinsic, not just an instrument flaw.
- **You might forget the blank.** $A$ must be measured against a reference cuvette of pure solvent/reagents, or the solvent's own absorption and the cuvette walls inflate every reading. A nonzero calibration intercept is often a blank you didn't subtract.

## One-liner

> Absorbance $A=-\log_{10}T$ turns exponential light loss into a straight line $A=\varepsilon b c$ — build it from standards, read the unknown off it, and stay under $A\approx1$ where the line is honest.

## Problems

**P1 (🟢)** A metal–ligand complex has $\varepsilon = 4.30\times10^{3}\ \mathrm{L\,mol^{-1}\,cm^{-1}}$ at $\lambda_{\max}$, measured in a 1.00 cm cell. (a) A solution reads $A = 0.361$; find its concentration. (b) A different solution transmits $\%T = 40.0$; find its absorbance and concentration.

**P2 (🟡)** You calibrate $\ce{Fe^2+}$ as its orange phenanthroline complex ($b=1.00$ cm). Standards give:

| $c$ ($\mu$M) | 1.00 | 2.00 | 3.00 | 4.00 | 5.00 |
|---|---|---|---|---|---|
| $A$ | 0.112 | 0.221 | 0.335 | 0.448 | 0.560 |

Fit the calibration line, then find the concentration of an unknown reading $A_x = 0.298$. Is it safely in the linear range? What would you do if a sample read $A = 1.8$?

**P3 (🔴 — Boss-3 setup: when Beer's law "fails")** A spectrophotometer passes **1.0% stray light** — a constant intensity $I_s = 0.010\,I_0$ reaches the detector regardless of the sample, so the measured transmittance is $T_{\text{meas}} = (I + I_s)/(I_0 + I_s)$ rather than $I/I_0$. For a sample whose *true* absorbance is (a) $A_{\text{true}} = 2.00$ and (b) $A_{\text{true}} = 0.50$, compute the **measured** absorbance, and state the percent by which the concentration is underestimated in each case. What does this tell you about where to work, and how would you fix a sample that truly has $A=2$?

<details>
<summary>Solutions</summary>

**P1** (a) $c = A/(\varepsilon b) = 0.361/(4.30\times10^{3}\times1.00) = 8.40\times10^{-5}\ \mathrm{mol/L}.$

(b) Convert transmittance first: $A = -\log_{10}(0.400) = 0.398.$ Then $c = 0.398/(4.30\times10^{3}) = 9.25\times10^{-5}\ \mathrm{mol/L}.$

*Check.* Lower $\%T$ (40% here vs the ~44% that would give $A=0.361$) means more light absorbed, so a higher concentration — and indeed $9.25 > 8.40$. ✓

**P2** With $c$ in $\mu$M: $\bar c = 3.00$, $\bar A = (0.112+0.221+0.335+0.448+0.560)/5 = 1.676/5 = 0.3352.$

$$S_{cc} = \sum(c-\bar c)^2 = 4+1+0+1+4 = 10.0,$$
$$S_{cA} = \sum(c-\bar c)(A-\bar A) = (-2)(-0.2232)+(-1)(-0.1142)+0+(1)(0.1128)+(2)(0.2248) = 0.4464+0.1142+0.1128+0.4496 = 1.123.$$

Slope $m = S_{cA}/S_{cc} = 1.123/10.0 = 0.1123\ \mathrm{A\,\mu M^{-1}}$; intercept $b_0 = \bar A - m\bar c = 0.3352 - 0.1123(3.00) = 0.3352 - 0.3369 = -0.002$ (essentially zero — a clean blank).

Unknown: $c_x = (0.298 - (-0.002))/0.1123 = 0.300/0.1123 = 2.67\ \mu\mathrm{M}.$

It lies inside the calibrated span (1–5 $\mu$M) with $A=0.298 < 1$, so yes — safely in the linear range. A reading of $A = 1.8$ is far above the top standard and past the honest region of the line; **dilute** the sample (say 4-fold, to land near $A\approx0.45$) and remeasure, then multiply the found concentration back by the dilution factor.

*Check.* Slope $0.1123\ \mathrm{A}/\mu\mathrm{M}$ gives $\varepsilon = 1.12\times10^{5}\ \mathrm{L\,mol^{-1}\,cm^{-1}}$, the right order for the famously intense ferroin complex. ✓

**P3** Write true transmittance $T_{\text{true}} = 10^{-A_{\text{true}}} = I/I_0$, and stray-light fraction $s = I_s/I_0 = 0.010$. Then

$$T_{\text{meas}} = \frac{I + I_s}{I_0 + I_s} = \frac{T_{\text{true}} + s}{1 + s}, \qquad A_{\text{meas}} = -\log_{10}T_{\text{meas}}.$$

(a) $A_{\text{true}} = 2.00 \Rightarrow T_{\text{true}} = 0.0100.$

$$T_{\text{meas}} = \frac{0.0100 + 0.0100}{1.0100} = \frac{0.0200}{1.0100} = 0.01980, \qquad A_{\text{meas}} = -\log_{10}(0.01980) = 1.703.$$

Since $c \propto A$, the apparent concentration is short by $1 - 1.703/2.00 = 1 - 0.852 = 0.148$, i.e. **underestimated by ~15%.**

(b) $A_{\text{true}} = 0.50 \Rightarrow T_{\text{true}} = 10^{-0.50} = 0.3162.$

$$T_{\text{meas}} = \frac{0.3162 + 0.0100}{1.0100} = \frac{0.3262}{1.0100} = 0.3230, \qquad A_{\text{meas}} = -\log_{10}(0.3230) = 0.491.$$

Underestimate $= 1 - 0.491/0.50 = 1 - 0.982 = 0.018$, i.e. **~1.8%.**

The same 1% stray light causes a trivial error at $A=0.5$ but a large one at $A=2$: this is the instrumental *negative deviation* that flattens the calibration at high absorbance (the coral curve in the figure), and it's why the useful ceiling is $A\lesssim1$. Beer's law hasn't truly failed — the *measurement* is corrupted. Fix a genuine $A=2$ sample by **diluting** it (e.g. 5-fold, to $A\approx0.4$) into the honest range and remeasuring; secondary fixes are choosing $\lambda_{\max}$ (flat top, less polychromatic error) and using an instrument with lower stray light.

*Check.* As $A_{\text{true}}\to0$, $T_{\text{meas}}\to (1+s)/(1+s)=1$ and $A_{\text{meas}}\to0$ — no error where there's nothing to absorb, exactly as it should be. ✓

</details>

## Flashback

**From Lesson 1.3 (Propagation of uncertainty):** In Example 1 you found $c = A/(\varepsilon b)$ with $A = 0.518$ and $\varepsilon = 6130\ \mathrm{L\,mol^{-1}\,cm^{-1}}$ (take $b = 1.00$ cm exactly). Suppose $A = 0.518 \pm 0.004$ and $\varepsilon = 6130 \pm 40$. Report $c$ with its absolute uncertainty.

<details>
<summary>Solution</summary>

$c$ is a product/quotient, so **relative** uncertainties combine in quadrature:

$$\frac{\sigma_c}{c} = \sqrt{\left(\frac{\sigma_A}{A}\right)^2 + \left(\frac{\sigma_\varepsilon}{\varepsilon}\right)^2} = \sqrt{\left(\frac{0.004}{0.518}\right)^2 + \left(\frac{40}{6130}\right)^2} = \sqrt{(0.00772)^2 + (0.00653)^2} = \sqrt{1.022\times10^{-4}} = 0.0101.$$

The central value is $c = 0.518/6130 = 8.45\times10^{-5}\ \mathrm{mol/L}$, so $\sigma_c = 0.0101 \times 8.45\times10^{-5} = 8.5\times10^{-7}\ \mathrm{mol/L}$:

$$c = (8.45 \pm 0.09)\times10^{-5}\ \mathrm{mol/L} \quad (\pm 1.0\%).$$

*Check.* The two sources are comparable ($0.77\%$ and $0.65\%$), so neither dominates and the combined $1.0\%$ is below their arithmetic sum $1.4\%$ — the signature of adding in quadrature. ✓

</details>

## Connections

- **Backward:** the calibration line here is the least-squares fit of [1.4](01-04-significance-tests-calibration.md) wearing a spectroscopy uniform — slope $=\varepsilon b$, and the same detection-limit/linear-range logic sets where you can work. The uncertainty in the final concentration propagates by the rules of [1.3](01-03-propagation-of-uncertainty.md).
- **Forward:** [3.2 (atomic & fluorescence spectroscopy)](03-02-atomic-fluorescence-spectroscopy.md) keeps the "light in, concentration out" idea but measures *emitted* rather than *transmitted* light — and fluorescence signal is proportional to concentration (not its log), giving even higher sensitivity for trace analysis. Additivity of absorbances feeds Boss Problem 3's multicomponent case.
- **Sideways (physical chemistry):** $\varepsilon$ and the shape of the absorption spectrum come straight from electronic spectroscopy — each peak is an allowed electronic transition whose strength ($\varepsilon$) reflects its transition probability. The exponential $I = I_0 10^{-\varepsilon b c}$ is the same attenuation law that governs light through any absorbing medium.
