# Climate Physics · Lesson 1.5: The forcing agents

> ⏱ ~15 min · Module 1: Radiative foundations, past the slab · Builds on: [1.4](01-04-radiative-forcing-defined.md), [1.3](01-03-bands-saturation-logarithmic-forcing.md), [atmospheric-science 3.4](../../atmospheric-science/lessons/03-04-scattering-rayleigh-mie-aerosols.md) · Unlocks: [2.1](02-01-feedbacks-gain-factor.md) (feedbacks), Module 3 (attribution)

## Why this matters

Everything downstream — sensitivity estimated from the historical record, attribution of observed warming, projections, carbon budgets — takes as input a single number: the total anthropogenic forcing since pre-industrial times. That number is $+2.7\ \mathrm{W\,m^{-2}}$, and its uncertainty is dominated not by $\mathrm{CO_2}$, which we know to ±12 percent, but by **aerosols**, which we know only to within a factor of four. This lesson lays out the whole ledger, and it is worth internalising the shape of it: the warming agents are well quantified and the cooling agent is not, which means the *net* is much more uncertain than the largest term. That single fact is why observationally-constrained climate sensitivity has such a long tail ([3.3](03-03-constraining-sensitivity-observations.md)).

## The idea

**Two ways to change the energy budget.** Either change how much sunlight is absorbed (albedo, or the Sun itself), or change how easily infrared escapes (greenhouse gases). Every agent is one or the other, occasionally both.

**The greenhouse gases are the easy half.** We know their concentrations from direct measurement since 1958 and from ice cores before that, we know their spectra from laboratory work to high precision, and [1.3](01-03-bands-saturation-logarithmic-forcing.md) supplies the functional forms. The result is that $\mathrm{CO_2}$'s $+2.16\ \mathrm{W\,m^{-2}}$ is one of the best-determined numbers in the field.

**The aerosols are the hard half, and they cool.** Sulphate, nitrate and organic particles scatter sunlight directly ([atmospheric-science 3.4](../../atmospheric-science/lessons/03-04-scattering-rayleigh-mie-aerosols.md)), and — far more importantly — they act as cloud condensation nuclei, making clouds with more and smaller droplets. More, smaller droplets means a brighter cloud for the same water, and possibly a longer-lived one. That indirect effect is roughly four times the direct effect and is the single least-constrained quantity in climate physics, because it requires knowing how a cloud population responds to a change in aerosol, which depends on the meteorological regime, and which we cannot observe cleanly because aerosols and meteorology co-vary.

**The natural agents are small on this timescale, and it matters that we can say so.** Solar output has changed by essentially nothing since 1750 ($+0.01\ \mathrm{W\,m^{-2}}$, with the eleven-year cycle contributing a swing of under 0.2 W m⁻² peak-to-trough). Volcanoes give large but brief negative spikes. Neither can produce a sustained century-scale trend, which is the crux of the attribution argument in [3.5](03-05-detection-attribution.md).

**Orbital forcing is not a global forcing at all.** Milankovitch cycles ([atmospheric-science 3.5](../../atmospheric-science/lessons/03-05-solar-geometry-seasons-insolation.md), [geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md)) change the *distribution* of sunlight in latitude and season while barely changing the annual global total. They are enormously effective anyway, which is a puzzle deferred to [6.3](06-03-ice-ages-100-kyr-problem.md).

## The formal version

**The ledger.** All values are effective radiative forcing ([ERF](../reference.md#radiative-forcing), [1.4](01-04-radiative-forcing-defined.md)) for 1750–2019, from IPCC AR6, in W m⁻². Ranges are 5–95 percent.

| Agent | ERF | Range | Notes |
|---|---|---|---|
| $\mathrm{CO_2}$ | $+2.16$ | 1.90 to 2.41 | logarithmic; 280 → 410 ppm |
| $\mathrm{CH_4}$ | $+0.54$ | 0.43 to 0.65 | square-root; includes ozone and stratospheric-water side effects |
| $\mathrm{N_2O}$ | $+0.21$ | 0.18 to 0.24 | square-root; 270 → 332 ppb |
| Halocarbons | $+0.41$ | 0.33 to 0.49 | linear; window absorbers |
| Ozone (net trop. + strat.) | $+0.47$ | 0.24 to 0.70 | tropospheric increase dominates |
| **All greenhouse gases** | $+3.84$ | | |
| Aerosol–radiation | $-0.22$ | $-0.47$ to $+0.04$ | scattering minus absorbing |
| Aerosol–cloud | $-0.84$ | $-1.45$ to $-0.25$ | **the dominant uncertainty** |
| Land-use albedo | $-0.20$ | $-0.30$ to $-0.10$ | deforestation exposes brighter surfaces |
| Black carbon on snow, contrails, other | $+0.14$ | | small, poorly constrained |
| **Total anthropogenic** | $+2.72$ | 1.96 to 3.48 | |
| Solar | $+0.01$ | $-0.06$ to $+0.08$ | |
| Volcanic (trend) | $\approx -0.1$ | | episodic, not a trend |

*In words: humans have pushed on the planet with about 2.7 W m⁻², net — roughly 3.8 of heating from gases, partly offset by about 1.1 of cooling from aerosols and land-use change.*

**Reading the uncertainties.** The 5–95 percent width of the total, $3.48 - 1.96 = 1.52\ \mathrm{W\,m^{-2}}$, is almost entirely inherited from aerosols: aerosol–cloud alone spans 1.20 and aerosol–radiation another 0.51, while $\mathrm{CO_2}$ spans only 0.51 despite being four times larger. Uncertainties add in quadrature, so

$$\sigma_{\text{total}} \approx \sqrt{\sum_i \sigma_i^2}$$

and one large term swamps several small ones. **This is why measuring aerosol forcing better is the single highest-value observational target in the field.**

**Why aerosol forcing is so hard.** Three compounding difficulties:

1. *Short lifetime.* Aerosols live about a week, so they are spatially patchy, concentrated near sources. Global-mean forcing requires knowing a highly inhomogeneous field, and inhomogeneous forcing does not map onto global-mean response as cleanly as uniform forcing does.
2. *Sign ambiguity within the class.* Sulphate scatters (cooling); black carbon absorbs (warming in the atmosphere, but with a large negative semi-direct adjustment, [1.4](01-04-radiative-forcing-defined.md)). Real particles are internal mixtures of both.
3. *The cloud response is not observable in isolation.* You would like the derivative of cloud albedo with respect to aerosol at fixed meteorology, but in the real atmosphere the meteorology that brings the aerosol also changes the cloud. Satellite estimates of this derivative are systematically confounded, and no controlled experiment exists — except the accidental ones: ship tracks, volcanic plumes, and since 2020, the sudden cut in shipping sulphur emissions.

**Ozone is two forcings with opposite signs.** *Tropospheric* ozone is a pollutant produced photochemically from $\mathrm{NO_x}$ and hydrocarbons; it has roughly doubled and gives about $+0.4\ \mathrm{W\,m^{-2}}$, because it absorbs at 9.6 micrometres, right in the atmospheric window. *Stratospheric* ozone was depleted by halocarbons, and depletion gives a small **negative** forcing (a colder, thinner ozone layer emits less downward). Net, ozone is a warming agent, but the two contributions must be tracked separately because they have opposite trends since the Montreal Protocol took effect.

**Volcanic forcing.** A large explosive eruption injects $\mathrm{SO_2}$ into the *stratosphere*, where it oxidises to sulphate aerosol with a lifetime of one to two years — far longer than tropospheric aerosol, because there is no rain to remove it. Pinatubo (1991) produced a peak global forcing near $-3\ \mathrm{W\,m^{-2}}$, decaying with an $e$-folding time of about a year, and cooled global mean temperature by roughly 0.4 K. Two things follow. First, eruptions are the closest thing climate science has to a controlled experiment, and they were used to test models before the anthropogenic signal was large. Second, the same physics is the basis of stratospheric aerosol injection as deliberate intervention ([6.5](06-05-scenarios-projections-intervention.md)).

**Solar.** Total solar irradiance is measured from space at 1361 W m⁻², varying by about 1 W m⁻² over the eleven-year cycle. The forcing is the irradiance change spread over the sphere and reduced by albedo:

$$\Delta F_{\text{solar}} = \frac{\Delta S(1-\alpha)}{4} = \frac{1.0 \times 0.7}{4} = 0.175\ \mathrm{W\,m^{-2}}$$

peak-to-trough — about 6 percent of the anthropogenic total, and it *oscillates* rather than trending. Reconstructions of the long-term change since 1750 give $+0.01\ \mathrm{W\,m^{-2}}$. Note the factor of 4: a change in solar irradiance is diluted by the ratio of Earth's cross-section to its surface area, so the Sun is a weaker lever than its raw numbers suggest.

## Picture

![A horizontal bar chart of effective radiative forcing from 1750 to 2019 for each agent, with warming agents in coral extending right of zero and cooling agents in blue extending left. Carbon dioxide is the largest at plus 2.16 watts per square metre, followed by methane at 0.54, ozone at 0.47, halocarbons at 0.41 and nitrous oxide at 0.21. Aerosol-cloud interaction is minus 0.84 with by far the widest uncertainty whisker, spanning minus 1.45 to minus 0.25; aerosol-radiation is minus 0.22 and land-use albedo minus 0.20. Solar forcing is essentially zero. The total anthropogenic forcing is plus 2.72 with a range of 1.96 to 3.48](assets/01-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — how much of the total does aerosol uncertainty control?).** Treat the greenhouse-gas total as $+3.84 \pm 0.30$ and the aerosol total as $-1.06 \pm 0.65$ (one standard deviation, approximating the 5–95 ranges as $\pm1.645\sigma$). (a) Combine to get the total and its uncertainty. (b) What fraction of the total variance comes from aerosols?

(a) $$F = 3.84 - 1.06 - 0.20 + 0.14 = 2.72\ \mathrm{W\,m^{-2}}$$ (including land use and the small terms).

$$\sigma = \sqrt{0.30^2 + 0.65^2} = \sqrt{0.09 + 0.4225} = \sqrt{0.5125} = 0.72\ \mathrm{W\,m^{-2}}.$$

(b) $$\frac{0.4225}{0.5125} = 82\ \text{percent}.$$

*The point.* Four fifths of the uncertainty in the number that drives every observational constraint comes from the *smallest-but-one* term in the budget. Halving the aerosol uncertainty would shrink the total uncertainty by 40 percent; halving the $\mathrm{CO_2}$ uncertainty would shrink it by 4 percent. That asymmetry is a direct instruction about where to spend observational effort.

**Example 2 (why you'd care — the aerosol–sensitivity trade-off).** Show that a *more negative* aerosol forcing implies a *higher* climate sensitivity, given the same observed warming.

The energy-budget estimate ([3.3](03-03-constraining-sensitivity-observations.md)) is

$$\mathrm{ECS} = \frac{F_{2\times}\,\Delta T}{\Delta F - \Delta N}.$$

With $F_{2\times} = 3.93$, $\Delta T = 1.03$ K, $\Delta N = 0.8$ W m⁻², take three aerosol values.

Aerosol $=-0.4$ (weak): $\Delta F = 3.84 - 0.4 - 0.06 = 3.38$, so

$$\mathrm{ECS} = \frac{3.93\times1.03}{3.38-0.8} = \frac{4.048}{2.58} = 1.57\ \mathrm{K}.$$

Aerosol $=-1.06$ (central): $\Delta F = 2.72$, so $\mathrm{ECS} = 4.048/1.92 = 2.11$ K.

Aerosol $=-1.7$ (strong): $\Delta F = 2.08$, so $\mathrm{ECS} = 4.048/1.28 = 3.16$ K.

*The general principle.* The aerosol range alone moves the observational sensitivity estimate from 1.6 K to 3.2 K — a factor of two, spanning "manageable" to "serious". The logic is worth stating in words, because it is counterintuitive on first hearing: **if aerosols have been masking a lot of warming, then the warming we have seen was produced by a smaller net push, so the climate must be more sensitive per watt.** This is the deepest reason aerosol forcing matters, and why an aerosol observing campaign is a climate-sensitivity experiment in disguise.

## Watch out

- **You might think** the largest forcing carries the largest uncertainty. **Actually** it is the reverse here: $\mathrm{CO_2}$ is four times aerosol–cloud forcing and has a quarter of its uncertainty. When propagating errors, rank by $\sigma$, not by magnitude.
- **You might think** aerosols are a solution — deliberately keep emitting them to offset warming. **Actually** tropospheric aerosols have a one-week lifetime, so the offset must be continuously maintained; they are lethal air pollution (millions of premature deaths per year); and they are regionally concentrated, so they do not cancel greenhouse warming where it occurs. Cleaning up air pollution therefore *unmasks* warming — which is a real and observed effect, notably after the 2020 shipping-fuel sulphur regulation, and it is the reason [6.5](06-05-scenarios-projections-intervention.md) distinguishes tropospheric aerosol from deliberate *stratospheric* injection.
- **You might think** the eleven-year solar cycle is a plausible driver of recent warming. **Actually** its forcing amplitude is under 0.2 W m⁻² peak-to-trough, its period is eleven years, and it produces a detectable but tiny (~0.05 K) oscillation in global temperature. It cannot produce a monotonic trend, and since about 1980 solar activity has drifted *downward* while temperature rose — the two have moved in opposite directions for four decades.

## One-liner

> Humans push the planet with about 2.7 watts per square metre net: nearly 3.9 of greenhouse heating, roughly 1.1 of aerosol and land-use cooling — and it is the offsetting term, not the largest one, that we do not know.

## Problems

**P1 (🟢)** Total solar irradiance drops by 2.0 W m⁻² during a hypothetical prolonged solar minimum. Taking albedo $\alpha = 0.30$: (a) compute the radiative forcing; (b) with $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$, compute the equilibrium cooling; (c) compare with the $+2.72\ \mathrm{W\,m^{-2}}$ anthropogenic forcing and comment.

**P2 (🟡)** A volcanic eruption produces a forcing $F(t) = -3.0\,e^{-t/\tau}\ \mathrm{W\,m^{-2}}$ with $\tau = 1.0$ yr. The climate system has $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$ and an effective heat capacity giving a response time of 4 yr. (a) What equilibrium cooling would the *peak* forcing produce if sustained? (b) Explain qualitatively why the observed cooling is much less than that, and estimate the ratio using the two timescales. (c) What does this imply about the ability of volcanic eruptions to constrain equilibrium climate sensitivity?

**P3 (🔴, optional)** Suppose a new observational campaign narrows the aerosol ERF to $-1.3 \pm 0.2\ \mathrm{W\,m^{-2}}$ (one standard deviation), with greenhouse gases unchanged at $+3.84 \pm 0.30$ and other terms contributing $-0.06 \pm 0.10$. (a) Compute the new total forcing and its standard deviation. (b) Compute the central energy-budget ECS with $F_{2\times}=3.93$, $\Delta T = 1.03$ K, $\Delta N = 0.8$ W m⁻². (c) Compute the ECS at $\pm1\sigma$ in the total forcing and comment on whether the *relative* uncertainty in ECS is larger or smaller than the relative uncertainty in $\Delta F$, explaining the algebraic reason.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Delta F = \frac{\Delta S(1-\alpha)}{4} = \frac{-2.0\times0.70}{4} = -0.35\ \mathrm{W\,m^{-2}}.$$

(b) $$\Delta T = \frac{-0.35}{1.3} = -0.27\ \mathrm{K}.$$

(c) The anthropogenic forcing is $2.72/0.35 = 7.8$ times larger and of the opposite sign. A Maunder-Minimum-scale solar decline — which is roughly what 2 W m⁻² represents, and which is at the pessimistic end of reconstructions — would offset about **13 percent** of current anthropogenic forcing, delaying warming by perhaps a decade, and would reverse when solar activity recovered. The factor of 4 in the formula is doing a lot of work here: a 2 W m⁻² change in irradiance is only 0.35 W m⁻² of forcing, because the sunlit cross-section is a quarter of the surface area and 30 percent is reflected anyway.

**P2** (a) $$\Delta T_{\text{eq}} = \frac{-3.0}{1.3} = -2.3\ \mathrm{K}.$$

(b) The forcing lasts about 1 yr while the system takes about 4 yr to respond, so the climate barely begins to move before the forcing has gone. For a forcing much shorter than the response time, the response is set by the *time integral* of the forcing divided by the heat capacity rather than by $\lambda$ — the system integrates the energy pulse instead of equilibrating with it. Roughly, the achieved fraction of the equilibrium response is of order $\tau_{\text{forcing}}/\tau_{\text{response}} = 1/4$, giving perhaps $-0.6$ K; the observed Pinatubo cooling was about $-0.4$ K, in the right range once the exponential decay is accounted for.

(c) Volcanic eruptions constrain the **transient** response and hence the product of heat capacity and feedback — they tell you about $C$ and about $\lambda$ only weakly, because the system never approaches equilibrium. They are excellent tests of a model's short-term energetics and of the water-vapour feedback (which acts fast), and poor constraints on ECS, whose slow components never engage. Any claim to have measured equilibrium sensitivity from a volcano should be read with this in mind; see [3.2](03-02-tcr-ecs-pattern-effect.md) for the general version of the transient-versus-equilibrium problem.

**P3** (a) $$F = 3.84 - 1.30 - 0.06 = 2.48\ \mathrm{W\,m^{-2}},$$
$$\sigma = \sqrt{0.30^2 + 0.20^2 + 0.10^2} = \sqrt{0.09+0.04+0.01} = \sqrt{0.14} = 0.374\ \mathrm{W\,m^{-2}}.$$

(b) $$\mathrm{ECS} = \frac{3.93 \times 1.03}{2.48 - 0.8} = \frac{4.048}{1.68} = 2.41\ \mathrm{K}.$$

(c) At $F = 2.48+0.374 = 2.854$: $\mathrm{ECS} = 4.048/2.054 = 1.97$ K. At $F = 2.48-0.374 = 2.106$: $\mathrm{ECS} = 4.048/1.306 = 3.10$ K.

Relative uncertainty in $\Delta F$: $0.374/2.48 = 15$ percent. Relative spread in ECS: roughly $(3.10-1.97)/(2\times2.41) = 23$ percent, and it is **asymmetric** — the upward excursion is 0.69 K, the downward 0.44 K.

The algebraic reason is that ECS depends on $\Delta F$ only through the *difference* $\Delta F - \Delta N$, which is smaller than $\Delta F$ itself (1.68 against 2.48). An absolute error $\sigma$ in $\Delta F$ is a fractional error $\sigma/(\Delta F - \Delta N)$ in the denominator — here $0.374/1.68 = 22$ percent, inflated by the factor $\Delta F/(\Delta F-\Delta N) = 1.48$. And because ECS goes as $1/(\Delta F - \Delta N)$, a reciprocal, symmetric errors in the denominator become asymmetric errors in ECS with a long *upper* tail. **Every long tail on climate sensitivity ultimately comes from a reciprocal of an uncertain, possibly-small denominator** — a structural fact that recurs in [2.1](02-01-feedbacks-gain-factor.md) with $1/\lambda$ and in [3.3](03-03-constraining-sensitivity-observations.md) with this expression.

</details>

## Flashback

**From Lesson 1.3 (Bands, saturation & why forcing is logarithmic):** Nitrous oxide is a square-root-regime gas with $\Delta F = 0.12\left(\sqrt{N}-\sqrt{N_0}\right)$, $N$ in ppb. It rose from $N_0 = 270$ ppb to $N = 336$ ppb. (a) Compute the forcing. (b) Compute the forcing per ppm of gas added, and compare with $\mathrm{CO_2}$'s (which rose 280 → 420 ppm for 2.17 W m⁻²). (c) State in one sentence why the ratio is so large, and one reason it is *not* the same as a global warming potential.

<details>
<summary>Solution</summary>

(a) $$\Delta F = 0.12\left(\sqrt{336}-\sqrt{270}\right) = 0.12(18.330 - 16.432) = 0.12 \times 1.898 = 0.228\ \mathrm{W\,m^{-2}}.$$

(AR6 assesses 0.21; the small shortfall is band overlap with $\mathrm{CH_4}$, which the simple formula's full version corrects for.)

(b) $\mathrm{N_2O}$ added: 66 ppb $= 0.066$ ppm, so

$$\frac{0.228}{0.066} = 3.45\ \mathrm{W\,m^{-2}\ per\ ppm}.$$

$\mathrm{CO_2}$ added: 140 ppm for 2.17 W m⁻², so

$$\frac{2.17}{140} = 0.0155\ \mathrm{W\,m^{-2}\ per\ ppm}.$$

Ratio: $3.45/0.0155 = 223$. Nitrous oxide is about **220 times** more forcing-effective per molecule added, at present concentrations.

(c) The ratio is large because $\mathrm{N_2O}$ sits on the square-root branch at a very low concentration — its bands are far from saturated and it absorbs partly in the atmospheric window, so each new molecule finds fresh spectrum, whereas a $\mathrm{CO_2}$ molecule added to 420 ppm is contributing only to the wings of an already-black band.

It is not a global warming potential because GWP is a **time-integrated** metric over a chosen horizon (usually 100 yr) that folds in atmospheric lifetime: $\mathrm{N_2O}$ lives about 116 yr, $\mathrm{CH_4}$ about 12, and a substantial fraction of a $\mathrm{CO_2}$ pulse effectively forever ([4.1](04-01-the-carbon-cycle.md)). Instantaneous per-molecule forcing and GWP therefore rank gases differently — methane is far more potent instantaneously than its GWP$_{100}$ of about 30 suggests, and far less potent than its GWP$_{20}$ of about 80 suggests, because the choice of horizon is choosing how much to discount its rapid decay.

*Check.* Sanity-check the square-root form: had $\mathrm{N_2O}$ instead been logarithmic with the same present forcing, the *next* 66 ppb would give $0.12$-equivalent forcing computed from $\ln(402/336)$ scaled — the square-root form predicts $0.12(\sqrt{402}-\sqrt{336}) = 0.12(20.05-18.33) = 0.206$ W m⁻², only 10 percent less than the first 66 ppb. Square-root gases barely saturate over this range, which is exactly the point of [1.3](01-03-bands-saturation-logarithmic-forcing.md)'s P3.

</details>

## Connections

- **Backward:** the functional forms (log, square-root, linear) are [1.3](01-03-bands-saturation-logarithmic-forcing.md)'s; the ERF convention every number here uses is [1.4](01-04-radiative-forcing-defined.md)'s; the scattering physics behind aerosol–radiation forcing is [atmospheric-science 3.4](../../atmospheric-science/lessons/03-04-scattering-rayleigh-mie-aerosols.md)'s.
- **Forward:** $\Delta F = 2.72\ \mathrm{W\,m^{-2}}$ is the input to the observational sensitivity constraint of [3.3](03-03-constraining-sensitivity-observations.md) and to the attribution argument of [3.5](03-05-detection-attribution.md); the volcanic mechanism reappears as deliberate intervention in [6.5](06-05-scenarios-projections-intervention.md).
- **Sideways (error propagation):** Example 1 is quadrature addition of independent uncertainties, and the moral — one dominant $\sigma$ swamps the rest — is the standard result from [`prob-stat-refresher` 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md). The asymmetric ECS tail in P3 is the same phenomenon as the distribution of a reciprocal of a near-zero-crossing random variable, which recurs throughout [2.1](02-01-feedbacks-gain-factor.md).
