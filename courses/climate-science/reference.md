# Climate Physics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The whole course is one equation with three symbols — $C\,dT/dt = F - \lambda\,\Delta T$ —
and six modules that fill them in. Module 1 builds the [forcing](#radiative-forcing),
Module 2 the [feedback parameter](#feedback-parameter), Module 3 the
[heat capacity](#ocean-heat-uptake-efficiency) and hence the timing, Module 4 asks where
the forcing comes from, Module 5 what the warming does, Module 6 how we know. Four things
are worth checking here every single time: **which forcing definition** a number uses
([four of them](#radiative-forcing)), **which sensitivity** is meant
([ECS, TCR, EffCS, ESS](#equilibrium-climate-sensitivity-ecs)), **which sign convention**
the feedbacks are in ([two of them](#feedback-parameter)), and **whether you are inverting
a small difference** — because [almost every long tail in this subject](#the-reciprocal-tail)
comes from that.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $C$ | heat capacity per unit area (J m⁻² K⁻¹) — energy to warm a square metre of column by 1 K | [1.1](lessons/01-01-climate-system-timescales.md) |
| $N$ | top-of-atmosphere net downward flux imbalance (W m⁻²) — what the planet is currently storing | [1.1](lessons/01-01-climate-system-timescales.md) |
| $\tau$ | **optical depth** in Module 1 (dimensionless, at a stated wavelength); **response time** elsewhere — read from context | [1.2](lessons/01-02-gray-atmosphere-radiative-equilibrium.md) |
| $\mathcal{D}$ | diffusivity factor, $3/2$ in the Eddington two-stream approximation | [1.2](lessons/01-02-gray-atmosphere-radiative-equilibrium.md) |
| $T_{\text{skin}}$ | skin temperature, $T_e/2^{1/4} = 0.841\,T_e$ — the top of a radiative-equilibrium atmosphere | [1.2](lessons/01-02-gray-atmosphere-radiative-equilibrium.md) |
| $S$ (line strength) | integrated absorption of a spectral line; $\gamma$ its Lorentz half-width | [1.3](lessons/01-03-bands-saturation-logarithmic-forcing.md) |
| $\Delta$ (band) | $e$-folding width of a band's exponential wings, $\approx 10.2\ \mathrm{cm^{-1}}$ for $\mathrm{CO_2}$ | [1.3](lessons/01-03-bands-saturation-logarithmic-forcing.md) |
| $F$, IRF, SARF, ERF | radiative forcing (W m⁻²) and its four definitions — see [Radiative forcing](#radiative-forcing) | [1.4](lessons/01-04-radiative-forcing-defined.md) |
| $F_{2\times}$ | forcing from doubling $\mathrm{CO_2}$: 3.71 (SARF) or **3.93** (ERF) W m⁻² | [1.4](lessons/01-04-radiative-forcing-defined.md) |
| $E$ (efficacy) | per-agent multiplier making $\Delta T = E\cdot\mathrm{RF}/\lambda$; $\approx 1$ by construction under ERF | [1.4](lessons/01-04-radiative-forcing-defined.md) |
| $S$ (solar) | total solar irradiance, 1361 W m⁻²; $\alpha$ planetary albedo, 0.30 — this $\alpha$ is not absorptivity | [1.5](lessons/01-05-forcing-agents.md) |
| $\lambda$ | **climate feedback parameter** (W m⁻² K⁻¹), positive = stabilizing in this course | [2.1](lessons/02-01-feedbacks-gain-factor.md) |
| $\lambda_0$ | Planck response, $\approx 3.2$ W m⁻² K⁻¹ (blackbody value $4\sigma T_e^3 = 3.74$) | [2.1](lessons/02-01-feedbacks-gain-factor.md) |
| $c_i$ | individual feedback strength, **positive = amplifying**; $\lambda = \lambda_0 - \sum_i c_i$ | [2.1](lessons/02-01-feedbacks-gain-factor.md) |
| $g$, $A$ | gain $\sum c_i/\lambda_0$ and amplification $1/(1-g)$ | [2.1](lessons/02-01-feedbacks-gain-factor.md) |
| $\alpha_i$ | AR6's feedback convention, **negative = stabilizing**; $\lambda = -\sum_i\alpha_i$ | [2.1](lessons/02-01-feedbacks-gain-factor.md) |
| RH, $q$ | relative humidity and specific humidity | [2.2](lessons/02-02-planck-water-vapour-lapse-rate.md) |
| CRE | cloud radiative effect (W m⁻²): all-sky minus clear-sky flux; **not** the cloud feedback | [2.4](lessons/02-04-clouds-the-wild-card.md) |
| $K_x$ | radiative kernel, $\partial R/\partial x$ — watts per unit change in variable $x$ at a level | [2.5](lessons/02-05-diagnosing-feedbacks.md) |
| $\kappa$ | ocean heat uptake efficiency (W m⁻² K⁻¹), $N = \kappa\,\Delta T$; $\approx 0.7$ | [3.1](lessons/03-01-ocean-heat-uptake-thermal-inertia.md) |
| $\gamma$, $\varepsilon$ | two-layer exchange coefficient and ocean heat uptake **efficacy**, $\approx 1.3$ | [3.1](lessons/03-01-ocean-heat-uptake-thermal-inertia.md) |
| ECS, TCR, EffCS, ESS | the four sensitivities — see [Equilibrium climate sensitivity](#equilibrium-climate-sensitivity-ecs) | [3.2](lessons/03-02-tcr-ecs-pattern-effect.md) |
| $\Delta\lambda$ | pattern effect, $\lambda_{\text{hist}}-\lambda_{\text{eq}} \approx 0.5$ W m⁻² K⁻¹ | [3.2](lessons/03-02-tcr-ecs-pattern-effect.md) |
| EIS | estimated inversion strength — free-troposphere minus surface temperature over a subsidence region | [3.2](lessons/03-02-tcr-ecs-pattern-effect.md) |
| $\mathbf{C}$, $\beta_i$ | internal-variability covariance and fingerprint scaling factors in optimal detection | [3.5](lessons/03-05-detection-attribution.md) |
| PgC, GtCO₂ | petagram of carbon; gigatonne of $\mathrm{CO_2}$. $1\ \mathrm{PgC} = 3.664\ \mathrm{GtCO_2}$ | [4.1](lessons/04-01-the-carbon-cycle.md) |
| AF | airborne fraction — share of emissions remaining in the atmosphere; $\approx 0.45$ | [4.1](lessons/04-01-the-carbon-cycle.md) |
| $f(t)$, $a_0$ | carbon impulse-response function and its permanent term, $a_0 = 0.217$ | [4.1](lessons/04-01-the-carbon-cycle.md) |
| DIC, TA | dissolved inorganic carbon and total alkalinity ($\mathrm{\mu mol\,kg^{-1}}$, $\mathrm{\mu eq\,kg^{-1}}$) | [4.2](lessons/04-02-ocean-carbon-revelle-factor.md) |
| $R$ (Revelle) | Revelle buffer factor, $\partial\ln p\mathrm{CO_2}/\partial\ln\mathrm{DIC} \approx 10$ | [4.2](lessons/04-02-ocean-carbon-revelle-factor.md) |
| $\Gamma$ (capacity) | buffered ocean/atmosphere capacity ratio, $C_{\text{oc}}/(R\,C_{\text{atm}})$ | [4.2](lessons/04-02-ocean-carbon-revelle-factor.md) |
| $\Omega$ | carbonate saturation state, $[\mathrm{Ca^{2+}}][\mathrm{CO_3^{2-}}]/K_{sp}'$ | [4.3](lessons/04-03-ocean-acidification.md) |
| TCRE | transient climate response to cumulative emissions, 1.65 K per 1000 PgC | [4.4](lessons/04-04-tcre-carbon-budgets-net-zero.md) |
| ZEC | zero-emissions commitment, $\approx 0$ K | [4.4](lessons/04-04-tcre-carbon-budgets-net-zero.md) |
| $\mu$, $\eta$ | fast (per W m⁻²) and slow (per K) coefficients of the precipitation response | [5.1](lessons/05-01-hydrological-cycle-response.md) |
| $M$ (mass flux) | convective mass flux; $P \approx Mq$ | [5.1](lessons/05-01-hydrological-cycle-response.md) |
| RR, FAR | risk ratio $P_1/P_0$ and fraction of attributable risk $1-P_0/P_1$ | [5.2](lessons/05-02-extremes-event-attribution.md) |
| $h_g$, $Q_g$ | ice thickness and ice flux at the grounding line; $Q_g \propto h_g^5$ | [5.4](lessons/05-04-the-cryosphere.md) |
| $\mu$ (eigenvalue) | linear stability rate near a fold; $\tau = 1/|\mu|$ diverges at the bifurcation | [5.6](lessons/05-06-tipping-elements-thresholds.md) |
| $A$, $B$ (Budyko) | linear OLR fit $\mathrm{OLR} = A + BT$; $A = 204$ W m⁻², $B = 2.17$ W m⁻² °C⁻¹ | [6.1](lessons/06-01-energy-balance-models-bistability.md) |
| $W$, $V$ | silicate weathering rate and volcanic outgassing rate (PgC yr⁻¹) | [6.4](lessons/06-04-deep-time-slow-thermostat.md) |
| SSP | Shared Socioeconomic Pathway; the number is the 2100 forcing in W m⁻² | [6.5](lessons/06-05-scenarios-projections-intervention.md) |

## Definitions

### The forcing–feedback equation

The spine of the whole course: the rate at which the planet stores energy equals the push
minus what the warming has already radiated away.

$$C\frac{d\,\Delta T}{dt} = F - \lambda\,\Delta T, \qquad N \equiv C\frac{d\,\Delta T}{dt}$$

At equilibrium $N = 0$ and $\Delta T = F/\lambda$.

*Introduced:* [1.1](lessons/01-01-climate-system-timescales.md)

### Radiative forcing

An imposed perturbation to the energy budget, defined so that the *same* $\lambda$ predicts
the warming for every agent. Four numbers exist and they differ; always say which.

| Definition | What is held fixed | $2\times\mathrm{CO_2}$ |
|---|---|---|
| Instantaneous (IRF), top of atmosphere | everything | ~2.8 W m⁻² |
| Instantaneous, tropopause | everything | ~4.1 W m⁻² |
| Stratosphere-adjusted (SARF) | surface and troposphere | 3.75 W m⁻² |
| **Effective (ERF)** | sea surface temperature, sea ice | **3.93 W m⁻²** |

ERF is the modern standard and is what makes efficacy $\approx 1$.

*Introduced:* [1.4](lessons/01-04-radiative-forcing-defined.md)

### Rapid adjustment

A response to the *forcing agent itself* rather than to the surface warming — stratospheric
cooling, cloud changes driven by direct atmospheric heating, land-surface warming. Bookkept
into $F$, not into $\lambda$. Separated from feedbacks operationally by the fixed-SST
experiment, **not** by how fast it happens.

*Introduced:* [1.4](lessons/01-04-radiative-forcing-defined.md)

### Feedback parameter

How much extra energy the planet radiates per kelvin of surface warming. **Positive means
stabilizing in this course**, so that $\Delta T = F/\lambda$.

$$\lambda = \lambda_0 - \sum_i c_i, \qquad \lambda_0 \approx 3.2\ \mathrm{W\,m^{-2}\,K^{-1}}$$

with individual feedbacks $c_i$ **positive when amplifying**. AR6 uses the opposite sign
convention ($\alpha_{\text{Planck}} = -3.22$); check the Planck term to tell which you are reading.

*Introduced:* [2.1](lessons/02-01-feedbacks-gain-factor.md)

### Gain and amplification

The fraction of the response fed back, and the geometric series that results.

$$g = \frac{\sum_i c_i}{\lambda_0}, \qquad \Delta T = \frac{\Delta T_0}{1-g}, \qquad A = \frac{1}{1-g}$$

**Gains add; amplifications do not multiply.** Runaway at $g = 1$, i.e. $\lambda = 0$.
Earth sits at $g \approx 0.6$.

*Introduced:* [2.1](lessons/02-01-feedbacks-gain-factor.md)

### The reciprocal tail

Sensitivity is $F/\lambda$ and $\lambda$ is a difference of comparable terms, so a symmetric
uncertainty in the feedbacks becomes a right-skewed uncertainty in the warming, with an
unbounded upper tail. **Do inference in $\lambda$-space, then transform.** The same structure
appears in the energy-budget denominator $\Delta F - \Delta N$, in the carbonate ion
$\mathrm{TA}-\mathrm{DIC}$, and in the net ice-sheet mass balance.

*Introduced:* [2.1](lessons/02-01-feedbacks-gain-factor.md); used in [3.3](lessons/03-03-constraining-sensitivity-observations.md), [4.3](lessons/04-03-ocean-acidification.md)

### Cloud radiative effect versus cloud feedback

CRE is what clouds do *now* relative to a cloudless planet ($-18$ W m⁻², a cooling).
The cloud feedback is how that *changes* per kelvin ($+0.42$ W m⁻² K⁻¹, a warming).
They are unrelated in sign; conflating them is the commonest error in this area.

*Introduced:* [2.4](lessons/02-04-clouds-the-wild-card.md)

### Radiative kernel

The radiative cost of a unit change in a climate variable at a given level, computed once
offline. A feedback is then kernel times the model's own response:
$c_x = \sum_{\text{levels}} K_x\,(\Delta x/\Delta T_s)$. Separates "how much the variable moved"
(model-specific) from "what that costs" (physics).

*Introduced:* [2.5](lessons/02-05-diagnosing-feedbacks.md)

### Gregory regression

Fit $N = F - \lambda\,\Delta T$ to an abrupt-$4\times\mathrm{CO_2}$ run: intercept is the ERF,
slope is $-\lambda$, $x$-intercept is the equilibrium warming. The line is **curved** — early
years give a steeper slope — which is the [pattern effect](#pattern-effect).

*Introduced:* [2.5](lessons/02-05-diagnosing-feedbacks.md)

### Ocean heat uptake efficiency

The rate at which the ocean removes energy from the surface budget per kelvin of surface
warming: $N = \kappa\,\Delta T$, with $\kappa \approx 0.7\ \mathrm{W\,m^{-2}\,K^{-1}}$.
With **efficacy** $\varepsilon \approx 1.3$ (uptake is concentrated in high-latitude regions
whose cooling is disproportionately effective), the transient balance is
$F = (\lambda+\varepsilon\kappa)\Delta T$.

*Introduced:* [3.1](lessons/03-01-ocean-heat-uptake-thermal-inertia.md)

### Equilibrium climate sensitivity (ECS)

Equilibrium global-mean warming for doubled $\mathrm{CO_2}$, fast feedbacks only. Four related
quantities, routinely confused:

| Quantity | Meaning | Value |
|---|---|---|
| **ECS** | equilibrium warming, fast feedbacks | 3.0 K [2.5–4.0] |
| **TCR** | warming at year 70 of a 1 percent per year increase | 1.8 K [1.4–2.2] |
| **EffCS** | $F_{2\times}\Delta T/(F-N)$ from a finite record | period-dependent, below ECS |
| **ESS** | Earth system sensitivity, including ice sheets | $\approx 1.5\times$ ECS |

*Introduced:* [3.2](lessons/03-02-tcr-ecs-pattern-effect.md)

### Pattern effect

$\lambda$ depends on the *spatial pattern* of warming, not just its global mean. Warming the
tropical west Pacific warms the whole tropical free troposphere (weak temperature gradient),
strengthening subtropical inversions and thickening low cloud — strongly stabilizing. The
historical pattern has been this one, so the observationally-inferred $\lambda$ is too high
by $\Delta\lambda \approx 0.5\ \mathrm{W\,m^{-2}\,K^{-1}}$ and the inferred ECS too low.

*Introduced:* [3.2](lessons/03-02-tcr-ecs-pattern-effect.md)

### Detection and attribution

**Detection**: the change is inconsistent with internal variability alone ($\beta_i$
significantly $>0$). **Attribution**: additionally, the fitted amplitude is consistent with the
modelled response ($\beta_i$ consistent with 1) and the residual is consistent with internal
variability. Optimal fingerprinting is generalized least squares with the internal-variability
covariance as the weight.

*Introduced:* [3.5](lessons/03-05-detection-attribution.md)

### Residence time versus adjustment time

**Residence time** is the mean time a molecule spends in a reservoir, $M/\Phi$ — about 4 years
for atmospheric $\mathrm{CO_2}$. **Adjustment time** is how long a *perturbation* takes to
decay — centuries to millennia, with about 22 percent effectively permanent. Only the second
matters for climate.

*Introduced:* [4.1](lessons/04-01-the-carbon-cycle.md)

### Revelle factor

The ocean's buffer factor: the fractional rise in $\mathrm{CO_2}$ partial pressure per
fractional rise in total dissolved carbon.

$$R = \frac{\partial\ln p\mathrm{CO_2}}{\partial\ln\mathrm{DIC}} \approx 10, \qquad R \sim \frac{\mathrm{DIC}}{[\mathrm{CO_3^{2-}}]}$$

It divides the ocean's effective carbon capacity by ten, and it **rises** as carbon is added
because the carbonate ion is consumed.

*Introduced:* [4.2](lessons/04-02-ocean-carbon-revelle-factor.md)

### Saturation state

How far seawater is from equilibrium with a carbonate mineral. Above 1 the mineral tends to
precipitate; below 1, to dissolve. Since $[\mathrm{Ca^{2+}}]$ is essentially constant,
$\Omega$ tracks the carbonate ion directly.

$$\Omega = \frac{[\mathrm{Ca^{2+}}][\mathrm{CO_3^{2-}}]}{K_{sp}'}$$

Aragonite is about 1.5 times more soluble than calcite, so $\Omega_{\text{arag}}$ is the
binding one for corals and pteropods.

*Introduced:* [4.3](lessons/04-03-ocean-acidification.md)

### TCRE

Warming is very nearly proportional to **cumulative** $\mathrm{CO_2}$ emissions, independent of
the path or rate.

$$\Delta T = \mathrm{TCRE}\times E_{\text{cum}}, \qquad \mathrm{TCRE} = 1.65\ \mathrm{K}\ \text{per 1000 PgC}\ [1.0\text{–}2.3]$$

The linearity is the cancellation of three nonlinearities: logarithmic forcing (concave)
against a rising airborne fraction and a rising realized fraction (both convex).

*Introduced:* [4.4](lessons/04-04-tcre-carbon-budgets-net-zero.md)

### The three commitments

| Name | Setup | Value |
|---|---|---|
| Constant composition | forcing frozen at today's level | $N/\lambda \approx 0.5$ K |
| **Zero emissions (ZEC)** | emissions stop; $\mathrm{CO_2}$ then declines | $\approx 0 \pm 0.3$ K |
| Constant emissions | emissions continue at today's rate | large and growing |

*Introduced:* [3.1](lessons/03-01-ocean-heat-uptake-thermal-inertia.md), [4.4](lessons/04-04-tcre-carbon-budgets-net-zero.md)

### Hydrological sensitivity

Global precipitation is limited by the atmosphere's ability to radiate away latent heat, not by
moisture supply — so it rises at about 2 percent per kelvin against moisture's 7. The
difference is paid by a weakening circulation.

$$\frac{\Delta P}{P} = -\mu\,\Delta F + \eta\,\Delta T, \qquad \mu \approx 0.021\ \text{per W m}^{-2}, \quad \eta \approx 0.031\ \mathrm{K^{-1}}$$

The fast term $\mu$ is agent-dependent — much smaller for solar forcing than for
$\mathrm{CO_2}$ — which is why solar geoengineering over-suppresses rainfall.

*Introduced:* [5.1](lessons/05-01-hydrological-cycle-response.md)

### Risk ratio and fraction of attributable risk

$$\mathrm{RR} = \frac{P_1}{P_0}, \qquad \mathrm{FAR} = 1 - \frac{P_0}{P_1} = 1-\frac{1}{\mathrm{RR}}$$

Both are properties of a *class* of events defined in advance, and of the population risk —
never of an individual event.

*Introduced:* [5.2](lessons/05-02-extremes-event-attribution.md)

### Marine ice-sheet instability

Ice flux across a grounding line goes as roughly the fifth power of the thickness there, and
thickness is set by water depth ($h_g \approx 1.12\,d$). On a **retrograde** bed — one that
deepens inland — retreat puts the grounding line in deeper water, thickening it, increasing
discharge, driving further retreat. **No stable grounding-line position exists on a retrograde
slope.** West Antarctica sits almost entirely on one.

*Introduced:* [5.4](lessons/05-04-the-cryosphere.md)

### Tipping point

A **saddle-node bifurcation**: a stable state ceases to exist and the system jumps, with
hysteresis so that reversing the forcing does not reverse the change. The test is whether two
stable states coexist over a range of the control parameter. Distinguish from a strongly
nonlinear but reversible response (Arctic summer sea ice) and from a slow commitment
(thermosteric sea-level rise).

*Introduced:* [5.6](lessons/05-06-tipping-elements-thresholds.md)

### Critical slowing down

Approaching a fold, the linear restoring rate $|\mu| \to 0$, so the relaxation time diverges.
Observable as rising variance and rising lag-1 autocorrelation:

$$\mathrm{Var}(x) = \frac{\sigma^2}{2|\mu|}, \qquad \rho_1 = e^{-|\mu|\Delta t}$$

Near the fold $|\mu| \propto \sqrt{r_c-r}$, so extrapolating $|\mu|$ **linearly** to zero
places the threshold too far away.

*Introduced:* [5.6](lessons/05-06-tipping-elements-thresholds.md)

### Silicate weathering thermostat

$\mathrm{CO_2}$ dissolved in rain weathers silicate rock; the products are buried as carbonate;
subduction and volcanism return the $\mathrm{CO_2}$. Weathering speeds up when warmer and
wetter, so it is a negative feedback whose set point is fixed by the **outgassing rate**, not
by the solar constant.

$$\mathrm{CaSiO_3} + \mathrm{CO_2} \longrightarrow \mathrm{CaCO_3} + \mathrm{SiO_2}$$

Effective feedback parameter $\approx 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$ — comparable to all the
fast feedbacks — with a response time of $2\times10^{5}$ yr and a throughput one fiftieth of
human emissions.

*Introduced:* [6.4](lessons/06-04-deep-time-slow-thermostat.md)

## Formulas and rules

### Radiative transfer, past the slab

| Quantity | Expression |
|---|---|
| Gray radiative-equilibrium air profile | $T^4(\tau) = \frac{T_e^4}{2}\left(1+\frac{3}{2}\tau\right)$ |
| Ground temperature | $T_g^4 = \frac{T_e^4}{2}\left(2+\frac{3}{2}\tau_s\right)$ |
| Skin temperature | $T_{\text{skin}} = T_e/2^{1/4} = 0.841\,T_e$ (214.1 K for Earth) |
| Jump in flux at the ground | $\sigma\left(T_g^4 - T^4(\tau_s)\right) = \frac{1}{2}\sigma T_e^4 = 119\ \mathrm{W\,m^{-2}}$, always |
| Level where $T = T_e$ | $\tau = 2/3$ |
| Solving for $\tau_s$ from a known surface | $\tau_s = \frac{2}{3}\left(\frac{2T_g^4}{T_e^4}-2\right)$ |
| Two-stream fluxes | $D(\tau) = \frac{\sigma T_e^4}{2}\left(\frac{3}{2}\tau\right)$, $\quad U(\tau) = \frac{\sigma T_e^4}{2}\left(2+\frac{3}{2}\tau\right)$ |

*From* [1.2](lessons/01-02-gray-atmosphere-radiative-equilibrium.md)

### Greenhouse-gas forcing

| Gas | Regime | Formula |
|---|---|---|
| $\mathrm{CO_2}$ | band-saturated | $\Delta F = 5.35\ln(C/C_0)$, $C$ in ppm |
| $\mathrm{CH_4}$ | strong-line | $\Delta F \approx 1.005\left(\sqrt{M}-\sqrt{M_0}\right)$, $M$ in ppm |
| $\mathrm{N_2O}$ | strong-line | $\Delta F = 0.12\left(\sqrt{N}-\sqrt{N_0}\right)$, $N$ in ppb |
| Halocarbons | weak-line | $\Delta F \propto X - X_0$ (linear) |

The coefficient 5.35 is $F_{2\times}/\ln 2$ under the SARF convention; with ERF's 3.93 it
would be 5.67. Band-shape estimate of a doubling:
$\Delta F_{2\times} \approx 2\Delta\ln 2\cdot\pi\left[B_\nu(T_s)-B_\nu(T_c)\right]$, giving
3.8 W m⁻² from $\Delta = 10.2\ \mathrm{cm^{-1}}$ and a brightness contrast of
$0.268\ \mathrm{W\,m^{-2}(cm^{-1})^{-1}}$ at 667 cm⁻¹.

*From* [1.3](lessons/01-03-bands-saturation-logarithmic-forcing.md)

### The forcing ledger, 1750 to 2019 (ERF, W m⁻²)

| Agent | Value | 5–95 percent |
|---|---|---|
| $\mathrm{CO_2}$ | $+2.16$ | 1.90 to 2.41 |
| $\mathrm{CH_4}$ | $+0.54$ | 0.43 to 0.65 |
| Ozone (net) | $+0.47$ | 0.24 to 0.70 |
| Halocarbons | $+0.41$ | 0.33 to 0.49 |
| $\mathrm{N_2O}$ | $+0.21$ | 0.18 to 0.24 |
| **All greenhouse gases** | $+3.84$ | |
| Aerosol–cloud | $-0.84$ | $-1.45$ to $-0.25$ |
| Aerosol–radiation | $-0.22$ | $-0.47$ to $+0.04$ |
| Land-use albedo | $-0.20$ | $-0.30$ to $-0.10$ |
| Black carbon on snow, contrails, other | $+0.14$ | |
| **Total anthropogenic** | $+2.72$ | 1.96 to 3.48 |
| Solar | $+0.01$ | $-0.06$ to $+0.08$ |

Solar forcing from an irradiance change: $\Delta F = \Delta S(1-\alpha)/4$ — note the factor 4.
Volcanic: Pinatubo gave $-3\ \mathrm{W\,m^{-2}}$ peak with a 1 yr $e$-folding.

*From* [1.5](lessons/01-05-forcing-agents.md)

### The feedbacks

| Feedback | $c_i$ (W m⁻² K⁻¹) | Mechanism |
|---|---|---|
| Planck response $\lambda_0$ | $3.2$ (stabilizing) | $4\sigma T^3$, emission-weighted |
| Water vapour | $+1.8$ | constant RH, 7 percent per K |
| Lapse rate | $-0.6$ | moist-adiabatic amplification aloft |
| **Water vapour + lapse rate** | $+1.2 \pm 0.15$ | **the well-constrained combination** |
| Surface albedo | $+0.3$ | sea ice and seasonal snow |
| Cloud | $+0.42$ [$-0.10$ to $+0.94$] | rising anvils, thinning low cloud, phase |
| **Net $\lambda$** | $\approx 1.2\text{–}1.3$ | |

Clausius–Clapeyron rate: $\frac{1}{e_s}\frac{de_s}{dT} = \frac{L_v}{R_vT^2}$ —
6.5 percent per K at 288 K, 8.7 at 250 K, 10.2 at 230 K.

*From* [2.1](lessons/02-01-feedbacks-gain-factor.md), [2.2](lessons/02-02-planck-water-vapour-lapse-rate.md), [2.3](lessons/02-03-surface-albedo-cryosphere-feedback.md), [2.4](lessons/02-04-clouds-the-wild-card.md)

### Surface albedos and the albedo lever

| Surface | Albedo |
|---|---|
| Fresh dry snow | 0.80–0.90 |
| Snow-covered sea ice | 0.60–0.70 |
| Bare melting sea ice | 0.45–0.60 |
| Melt ponds | 0.20–0.40 |
| Tundra, boreal forest | 0.10–0.20 |
| Open ocean, high sun | 0.05–0.08 (up to 0.4 at grazing incidence) |

$\partial F/\partial\alpha = -S/4 = -340\ \mathrm{W\,m^{-2}}$ per unit **global** albedo, so
$c_\alpha = +0.35$ corresponds to $d\alpha/dT = -1.0\times10^{-3}\ \mathrm{K^{-1}}$.
Local Planck response $4\sigma T^3$: 6.12 at 300 K, 5.42 at 288 K, 3.54 at 250 K — a cold
region must warm 1.7 times as much to shed the same energy.

*From* [2.3](lessons/02-03-surface-albedo-cryosphere-feedback.md)

### Cloud radiative effect

| Component | Global mean |
|---|---|
| Shortwave CRE | $-45\ \mathrm{W\,m^{-2}}$ |
| Longwave CRE | $+27\ \mathrm{W\,m^{-2}}$ |
| **Net CRE** | $\approx -18\ \mathrm{W\,m^{-2}}$ |

For a deck of fractional area $f$, albedo $\alpha_c$, emissivity $\epsilon_c$, top temperature
$T_c$ over a surface at $T_s$ with insolation $S_0$:

$$\mathrm{CRE} \approx f\left[-\alpha_c S_0 + \epsilon_c\,\sigma\left(T_s^4-T_c^4\right)\right]$$

Cloud-masking correction: $c_{\text{cl}} = \Delta\mathrm{CRE}/\Delta T + \sum_x\left(c_x^{\text{clear}}-c_x^{\text{all-sky}}\right) + \left(F^{\text{clear}}-F^{\text{all-sky}}\right)$,
worth about $+0.3\ \mathrm{W\,m^{-2}\,K^{-1}}$.

*From* [2.4](lessons/02-04-clouds-the-wild-card.md), [2.5](lessons/02-05-diagnosing-feedbacks.md)

### Timescales and heat capacities

| Reservoir | $C$ (J m⁻² K⁻¹) | $\tau = C/\lambda$ ($\lambda=3.74$) |
|---|---|---|
| Atmosphere, $c_p\,p_s/g$ | $1.04\times10^{7}$ | 32 days |
| Ocean mixed layer, 70 m | $2.87\times10^{8}$ | 2.4 yr |
| Full ocean column, 3700 m | $1.51\times10^{10}$ | 128 yr (a lower bound) |

Seawater: $\rho c_p = 4.09\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$.
Where the excess energy goes: ocean 91 percent, land 5, ice melt 3, atmosphere 1.

One-box step response: $\Delta T(t) = \frac{F}{\lambda}\left(1-e^{-t/\tau}\right)$, $\tau = C/\lambda$.

Two-layer model:
$C_u\frac{dT_u}{dt} = F - \lambda T_u - \gamma(T_u-T_d)$, $\quad C_d\frac{dT_d}{dt} = \gamma(T_u-T_d)$.

*From* [1.1](lessons/01-01-climate-system-timescales.md), [3.1](lessons/03-01-ocean-heat-uptake-thermal-inertia.md)

### Sensitivity relations

| Quantity | Expression |
|---|---|
| Equilibrium | $\mathrm{ECS} = F_{2\times}/\lambda$ |
| Transient | $\mathrm{TCR} = F_{2\times}/(\lambda+\varepsilon\kappa)$ |
| Ratio | $\mathrm{TCR}/\mathrm{ECS} = \lambda/(\lambda+\varepsilon\kappa)$ — **not a constant** |
| Energy-budget constraint | $\mathrm{EffCS} = \dfrac{F_{2\times}\,\Delta T}{\Delta F - \Delta N}$ |
| Pattern correction | $\lambda_{\text{eq}} = \lambda_{\text{hist}} - \Delta\lambda$, $\Delta\lambda \approx 0.5$ |
| Combining independent estimates | precisions add: $\sigma_c^{-2} = \sum_i\sigma_i^{-2}$, in $\lambda$-space |

Historical inputs: $\Delta F = 2.7$, $\Delta T = 1.03$ K, $\Delta N = 0.8\ \mathrm{W\,m^{-2}}$.

*From* [3.2](lessons/03-02-tcr-ecs-pattern-effect.md), [3.3](lessons/03-03-constraining-sensitivity-observations.md)

### Trends, noise and detection

Least-squares slope standard error for $n$ annual values with noise $\sigma$:

$$\mathrm{SE}(\hat b) = \sigma\sqrt{\frac{12}{n(n^2-1)}} \times \sqrt{\frac{1+r}{1-r}}$$

the second factor correcting for lag-1 autocorrelation $r$ (about 0.5 for global-mean
temperature). Standard error falls as $n^{-3/2}$.

| $n$ (yr) | SE (K per decade), $\sigma=0.1$, $r=0.5$ | $t$ for a 0.20 K/decade trend |
|---|---|---|
| 10 | 0.19 | 1.1 |
| 15 | 0.10 | 1.9 |
| 20 | 0.067 | 3.0 |
| 30 | 0.037 | 5.5 |

Optimal fingerprinting: $\hat{\boldsymbol\beta} = \left(\mathbf{X}^{\!\top}\mathbf{C}^{-1}\mathbf{X}\right)^{-1}\mathbf{X}^{\!\top}\mathbf{C}^{-1}\mathbf{y}$.
Time of emergence: signal exceeds $2\sigma$ after $t = 2\sigma/b$.

*From* [3.4](lessons/03-04-internal-variability-detection.md), [3.5](lessons/03-05-detection-attribution.md)

### Carbon-cycle numbers

$$1\ \mathrm{ppm}\ \mathrm{CO_2} = 2.124\ \mathrm{PgC}, \qquad 1\ \mathrm{PgC} = 3.664\ \mathrm{GtCO_2}$$

| Reservoir | PgC | | Flux (2010s) | PgC yr⁻¹ |
|---|---|---|---|---|
| Atmosphere | 875 | | Fossil + cement | $+9.6$ |
| Ocean DIC | 38 000 | | Land use | $+1.2$ |
| — surface ocean | 900 | | Ocean sink | $-2.8$ |
| Soils | 1700 | | Land sink | $-3.1$ |
| Permafrost | 1400 | | **Atmospheric growth** | $+5.1$ |
| Vegetation | 450 | | (gross photosynthesis) | $\sim120$ each way |

Impulse response (Joos et al.):

$$f(t) = 0.217 + 0.224\,e^{-t/394} + 0.282\,e^{-t/36.5} + 0.276\,e^{-t/4.3}$$

| $t$ (yr) | 10 | 20 | 50 | 100 | 500 | 1000 |
|---|---|---|---|---|---|---|
| airborne | 0.68 | 0.60 | 0.49 | 0.41 | 0.28 | 0.24 |

Because $a_0 > 0$, **any** constant nonzero emission rate raises concentration without bound.

*From* [4.1](lessons/04-01-the-carbon-cycle.md)

### Ocean carbonate system

$$\mathrm{DIC} = [\mathrm{CO_2^*}] + [\mathrm{HCO_3^-}] + [\mathrm{CO_3^{2-}}], \qquad \mathrm{TA} \approx [\mathrm{HCO_3^-}] + 2[\mathrm{CO_3^{2-}}] + [\mathrm{B(OH)_4^-}]$$

Adding $\mathrm{CO_2}$ changes DIC at **constant TA**:
$\mathrm{CO_2} + \mathrm{H_2O} + \mathrm{CO_3^{2-}} \to 2\,\mathrm{HCO_3^-}$.

Carbonate-only relations ($\mathrm{CO_2^*}$ neglected):

$$[\mathrm{HCO_3^-}] = 2\,\mathrm{DIC}-\mathrm{TA}, \qquad [\mathrm{CO_3^{2-}}] = \mathrm{TA}-\mathrm{DIC}, \qquad p\mathrm{CO_2} \propto \frac{[\mathrm{HCO_3^-}]^2}{[\mathrm{CO_3^{2-}}]}$$

$$R = \mathrm{DIC}\left(\frac{4}{[\mathrm{HCO_3^-}]}+\frac{1}{[\mathrm{CO_3^{2-}}]}\right) \quad\text{(gives } \approx 14; \text{ measured } \approx 10\text{)}$$

Buffered capacity ratio and equilibrium airborne fraction:

$$\Gamma = \frac{C_{\text{ocean}}}{R\,C_{\text{atm}}}, \qquad \mathrm{AF}_\infty = \frac{1}{1+\Gamma}$$

Seawater apparent constants: $\mathrm{p}K_1 = 5.85$, $\mathrm{p}K_2 = 8.92$.
Speciation at pH 8.05: 0.6 percent $\mathrm{CO_2^*}$, 87.6 percent $\mathrm{HCO_3^-}$, 11.8 percent $\mathrm{CO_3^{2-}}$.

*From* [4.2](lessons/04-02-ocean-carbon-revelle-factor.md), [4.3](lessons/04-03-ocean-acidification.md)

### Acidification benchmarks

| Epoch | pH | $\Omega_{\text{arag}}$ (tropical surface) |
|---|---|---|
| 1750 | 8.17 | 3.4 |
| Today | 8.05 | 2.8 |
| 2100, high emissions | 7.70 | 1.8 |

$\Delta\mathrm{pH} = -0.12$ is a **32 percent** rise in $[\mathrm{H^+}]$;
$-0.47$ is a **195 percent** rise. Always exponentiate.
Aragonite saturation horizon: 2000–3000 m in the North Atlantic, 100–300 m in the North Pacific.

*From* [4.3](lessons/04-03-ocean-acidification.md)

### Carbon budgets

$$E_{\text{remaining}} = \frac{T_{\text{target}}-T_{\text{now}}}{\mathrm{TCRE}}$$

With $T_{\text{now}} = 1.1$ K and TCRE $= 1.65$ K per 1000 PgC:

| Target | PgC | GtCO₂ | Years at 10.8 PgC yr⁻¹ |
|---|---|---|---|
| 1.5 K | 242 | 889 | 22 |
| 2.0 K | 545 | 2000 | 50 |

IPCC's assessed budget is smaller because it subtracts non-$\mathrm{CO_2}$ warming
(~200 GtCO₂), unrepresented Earth-system feedbacks (~100 GtCO₂), and uses a stated
probability level. **Always ask: which target, which probability, which base year, and are
non-$\mathrm{CO_2}$ forcings netted out?**

*From* [4.4](lessons/04-04-tcre-carbon-budgets-net-zero.md)

### Hydrological response

| Quantity | Rate per K |
|---|---|
| Column moisture | $+7$ percent (Clausius–Clapeyron) |
| Global-mean precipitation | $+2$ percent (atmospheric energy budget) |
| Tropical overturning mass flux | $-5$ percent ($P \approx Mq$) |
| Local $P-E$ | $+7$ percent of its current value (wet-gets-wetter) |
| Extreme daily precipitation | $+7$ percent; sub-hourly convective up to $+12$ to $14$ |

Apparent hydrological sensitivity $= \eta - \mu\lambda_{\text{eff}}$: 0.35 percent per K for
$\mathrm{CO_2}$, about 2.4 percent per K for solar forcing.

*From* [5.1](lessons/05-01-hydrological-cycle-response.md), [5.2](lessons/05-02-extremes-event-attribution.md)

### Extremes arithmetic (shifted Gaussian, $+2\sigma$ threshold)

| Mean shift | $P_1$ | Return period | RR |
|---|---|---|---|
| 0 | 0.0228 | 1 in 44 | 1 |
| $0.5\sigma$ | 0.0668 | 1 in 15 | 2.9 |
| $1.0\sigma$ | 0.1587 | 1 in 6.3 | 7.0 |
| $1.5\sigma$ | 0.3085 | 1 in 3.2 | 13.6 |
| $2.0\sigma$ | 0.5000 | 1 in 2 | 22.0 |

**The relevant quantity is warming in units of local $\sigma$**, which is why the tropics —
warming least, varying least — have the largest risk ratios.
Rule of three: zero events in $n$ trials gives a 95 percent upper bound of $3/n$ on the rate,
which is where "at least 150 times more likely" headlines come from.

*From* [5.2](lessons/05-02-extremes-event-attribution.md)

### Sea level

$$\Delta(\mathrm{SL})_{\text{thermal}} = \frac{\alpha\,Q}{\rho c_p} \approx 1.4\ \mathrm{mm}\ \text{per}\ 10^{22}\ \mathrm{J}\ \text{of ocean heat}$$

with $\alpha \approx 2\times10^{-4}\ \mathrm{K^{-1}}$ (strongly temperature-dependent).
**360 Gt of land ice = 1 mm of global sea level.**

| Component (2006–2018) | mm yr⁻¹ | | Reservoir | Sea-level equivalent |
|---|---|---|---|---|
| Thermal expansion | 1.4 | | Glaciers and ice caps | 0.32 m |
| Glaciers | 0.62 | | Greenland | 7.4 m |
| Greenland | 0.63 | | West Antarctica | 5.3 m |
| Antarctica | 0.37 | | East Antarctica | 52 m |
| Land water | 0.15 | | | |
| **Observed total** | **3.7** | | | |

Semi-empirical: $d(\mathrm{SL})/dt = a(T-T_0)$, so sea level tracks $\int(T-T_0)\,dt$ —
the **time-integral** of warming. Regional departures from the global mean come from
gravitational fingerprints (sea level *falls* within ~2000 km of melting ice, rises to
1.3× the mean in the far field), glacial isostatic adjustment, ocean dynamics and subsidence.

*From* [5.3](lessons/05-03-sea-level-rise.md)

### Ice-sheet mass balance and grounding-line flux

$$\frac{dM}{dt} = A - R - D, \qquad h_g \approx 1.12\,d, \qquad Q_g \propto h_g^{\,5}$$

| Gt yr⁻¹ | Greenland | Antarctica |
|---|---|---|
| Accumulation $A$ | ~700 | ~2100 |
| Surface runoff $R$ | ~500 | ~0 |
| Discharge $D$ | ~470 | ~2250 |
| **Net** | $-270$ | $-150$ |

*From* [5.4](lessons/05-04-the-cryosphere.md)

### Circulation response

| Feature | Change | Confidence |
|---|---|---|
| Jet stream | poleward shift, faster aloft | high |
| Hadley cell | **weakens** and **widens** (~0.2–1.0 degrees per decade) | high in sign, low in magnitude |
| Subtropical dry zones | expand poleward; Mediterranean, southwest North America, Chile, southern Africa, southern Australia dry | high |
| Storm tracks | poleward, largest in the Southern Hemisphere | high |
| AMOC | 24–39 percent weakening by 2100 (SSP5-8.5); collapse very unlikely this century | medium |
| Jet waviness | contested — plausible mechanism, weak evidence | low |

Thermal wind: $\partial u_g/\partial z = -\frac{g}{fT}\,\partial T/\partial y$. The upper-level
gradient **strengthens** (tropical amplification) while the surface gradient **weakens**
(Arctic amplification); the jet core responds to the former.

*From* [5.5](lessons/05-05-circulation-regional-response.md)

### Candidate tipping elements

| Element | Threshold (K) | Timescale | Evidence for bistability |
|---|---|---|---|
| Greenland ice sheet | ~1.5 | $10^3$–$10^4$ yr | strong (elevation feedback) |
| West Antarctic ice sheet | ~1.5 | $10^2$–$10^3$ yr | strong (retrograde bed) |
| Low-latitude coral reefs | ~1.5 | 10 yr | ecological, not dynamical |
| Permafrost abrupt thaw | ~1.5 | $10^2$ yr | local |
| Barents Sea winter ice | ~1.6 | 10 yr | moderate |
| Amazon dieback | ~3.5 | $10^2$ yr | weak |
| AMOC collapse | ~4 (1.4–8) | $10^2$ yr | strong mechanism, unknown threshold |
| **Arctic summer sea ice** | **none found** | — | **models show no bistability** |

**Bistability requires a feedback whose strength grows with the state**, not merely a large
positive feedback.

*From* [5.6](lessons/05-06-tipping-elements-thresholds.md)

### Energy-balance model

$$C\frac{dT}{dt} = \frac{S\left(1-\alpha(T)\right)}{4} - \left(A+BT\right), \qquad A = 204\ \mathrm{W\,m^{-2}},\ B = 2.17\ \mathrm{W\,m^{-2}\,^\circ C^{-1}}$$

Stability: stable if $-\frac{S}{4}\frac{d\alpha}{dT} - B < 0$, i.e. $\lambda > 0$.

With $\alpha = 0.30$ (ice-free), $0.60$ (ice-covered) and a linear ramp between $-10$ and
$+10\ ^\circ\mathrm{C}$, the three equilibria at $S = 1361$ are $+15.7$ (stable), $+5.7$
(unstable) and $-31.3\ ^\circ\mathrm{C}$ (stable). Folds at $S = 1290$ ($0.948\,S_0$) and
$S = 1823$ ($1.34\,S_0$) — a hysteresis loop 39 percent of the solar constant wide.

*From* [6.1](lessons/06-01-energy-balance-models-bistability.md)

### Model hierarchy and cost

$$\mathrm{Cost} \propto \Delta x^{-4}$$

(three space dimensions plus a shorter timestep from the Courant condition).

| Model | Integration | For |
|---|---|---|
| Energy-balance | $10^{6}$–$10^{9}$ yr | equilibria, bistability, timescales |
| Radiative–convective | steady state | vertical profile, forcing, kernels |
| EMIC | $10^{4}$–$10^{6}$ yr | glacial cycles, carbon equilibration |
| GCM | $10^{2}$–$10^{3}$ yr | regional pattern, variability |
| ESM | $10^{2}$–$10^{3}$ yr | emissions-driven runs, TCRE |
| Km-scale | 1–10 yr | resolved convection |

Three ensembles, three questions: multi-model (structural), perturbed-parameter (parametric),
initial-condition (internal variability). **They are nested, so they cannot be added in
quadrature**, and none of them samples scenario uncertainty.

*From* [6.2](lessons/06-02-model-hierarchy.md)

### Orbital forcing and the glacial budget

| Parameter | Range | Periods |
|---|---|---|
| Eccentricity | 0 to 0.06 | 100, 400 kyr |
| Obliquity | 22.1° to 24.5° | 41 kyr |
| Precession | — | 19, 23 kyr |

Annual-mean insolation scales as $(1-e^2)^{-1/2}$, so the full eccentricity range is
0.18 percent, i.e. $0.43\ \mathrm{W\,m^{-2}}$ — an order of magnitude too small to drive the
100-kyr cycles. June insolation at 65°N swings by up to 125 W m⁻².

Last Glacial Maximum forcing relative to pre-industrial:

| Contribution | W m⁻² |
|---|---|
| $\mathrm{CO_2}$ (280 → 185 ppm) | $-2.2$ |
| Other greenhouse gases | $-0.6$ |
| Ice sheets (albedo) | $-3.2$ |
| Dust, vegetation, sea level | $-1.1$ |
| **Total** | $-7.1$, against $\Delta T \approx -5$ K |

*From* [6.3](lessons/06-03-ice-ages-100-kyr-problem.md)

### Deep time

Solar luminosity: $L(t)/L_0 = \left[1+0.4\left(1-t/t_0\right)\right]^{-1}$, $t_0 = 4.57$ Gyr.

| Time (Gyr ago) | $L/L_0$ | $T_e$ (K) | $T_s$ with today's 33 K greenhouse |
|---|---|---|---|
| 4.0 | 0.741 | 236.2 | $-4.0\ ^\circ\mathrm{C}$ |
| 3.0 | 0.792 | 240.2 | $0.0\ ^\circ\mathrm{C}$ |
| 2.0 | 0.851 | 244.5 | $+4.4\ ^\circ\mathrm{C}$ |
| 0 | 1.000 | 254.6 | $+14.4\ ^\circ\mathrm{C}$ |

Weathering law: $W = W_0\left(p/p_0\right)^{0.3}\exp\!\left[(T-T_0)/13.7\right]$, with steady
state $W = V$. Thermostat timescale $\approx 2\times10^{5}$ yr; throughput 0.2 PgC yr⁻¹,
about one fiftieth of human emissions.

*From* [6.4](lessons/06-04-deep-time-slow-thermostat.md)

### Scenarios and intervention

| Scenario | 2100 forcing | Warming 2081–2100 | Very likely range |
|---|---|---|---|
| SSP1-1.9 | 1.9 W m⁻² | 1.4 K | 1.0–1.8 |
| SSP1-2.6 | 2.6 | 1.8 | 1.3–2.4 |
| SSP2-4.5 | 4.5 | 2.7 | 2.1–3.5 |
| SSP3-7.0 | 7.0 | 3.6 | 2.8–4.6 |
| SSP5-8.5 | 8.5 | 4.4 | 3.3–5.7 |

Uncertainty dominance: internal variability to ~2040, model response to ~2070, **scenario
thereafter**.

Stratospheric aerosol injection: about $2\ \mathrm{Tg\ S\ yr^{-1}}$ per W m⁻² offset (rising
with loading as particles coagulate); stratospheric lifetime 1–2 yr against a week in the
troposphere.

Minimum separation work: $w_{\min} = RT\ln(1/x)$ — **122 kWh per tonne** of $\mathrm{CO_2}$
from air at 420 ppm, 33 kWh from flue gas at 12 percent. Real direct air capture uses
1500–2500 kWh per tonne.

*From* [6.5](lessons/06-05-scenarios-projections-intervention.md)

## Assumed, not taught here

Everything this course *uses* without deriving, with a pointer to the course that does derive it.

| Fact | Where it's taught |
|---|---|
| Stefan–Boltzmann law, Planck function, Wien displacement | [atmospheric-science 3.1](../atmospheric-science/lessons/03-01-solar-terrestrial-radiation.md) |
| Effective emission temperature $T_e = 254.6$ K from $S(1-\alpha)/4 = \sigma T_e^4$ | [atmospheric-science 3.1](../atmospheric-science/lessons/03-01-solar-terrestrial-radiation.md) |
| Slab greenhouse, $T_s = T_e(N+1)^{1/4}$, the global energy budget | [atmospheric-science 3.2](../atmospheric-science/lessons/03-02-greenhouse-effect-energy-budget.md) |
| Beer's law, optical depth, the Schwarzschild equation, the emission level | [atmospheric-science 3.3](../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md) |
| Rayleigh and Mie scattering, aerosol optical depth | [atmospheric-science 3.4](../atmospheric-science/lessons/03-04-scattering-rayleigh-mie-aerosols.md) |
| Solar geometry, insolation, seasons, orbital elements | [atmospheric-science 3.5](../atmospheric-science/lessons/03-05-solar-geometry-seasons-insolation.md) |
| Ozone photochemistry and why the stratosphere is warm | [atmospheric-science 3.6](../atmospheric-science/lessons/03-06-ozone-photochemistry-stratosphere.md) |
| Clausius–Clapeyron, latent heat, the moist adiabat, $\theta_e$ | [atmospheric-science 2.2](../atmospheric-science/lessons/02-02-saturation-moist-adiabatic-lapse-rate.md) |
| Parcel stability, CAPE, absolute instability above $\Gamma_d$ | [atmospheric-science 2.4](../atmospheric-science/lessons/02-04-stability-parcel-theory-cape.md) |
| Cloud types and how each forms | [atmospheric-science 2.6](../atmospheric-science/lessons/02-06-cloud-classification.md) |
| Hydrostatic balance and the column mass $p_s/g$ | [atmospheric-science 1.2](../atmospheric-science/lessons/01-02-hydrostatic-equation-barometric-law.md) |
| Coriolis parameter $f = 2\Omega\sin\phi$ and why it vanishes at the equator | [atmospheric-science 4.2](../atmospheric-science/lessons/04-02-coriolis-effect.md) |
| Thermal wind, the Hadley cell, the jet streams | [atmospheric-science 4.4](../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) |
| Baroclinic instability, fronts and mid-latitude cyclones | [atmospheric-science 4.5](../atmospheric-science/lessons/04-05-air-masses-fronts-cyclones.md) |
| Rossby waves and the beta effect | [atmospheric-science 5.3](../atmospheric-science/lessons/05-03-rossby-waves-beta-effect.md) |
| The two-week predictability limit | [atmospheric-science 6.5](../atmospheric-science/lessons/06-05-predictability-two-week-limit.md) |
| Ocean circulation, the MOC, gyres, ENSO and Walker dynamics | [oceanography](../oceanography/syllabus.md) |
| Acid–base equilibria, $K_a$, pH | [general-chemistry 4.1](../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) |
| Buffers and titration curves | [general-chemistry 4.2](../general-chemistry/lessons/04-02-buffers-titration.md) |
| Reaction quotient versus equilibrium constant, $Q/K$ | [general-chemistry 3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| Infrared selection rule — a mode absorbs only if it changes the dipole moment | [general-chemistry 1.5](../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) |
| Silicate weathering chemistry and soil formation | [geology 3.1](../geology/lessons/03-01-weathering-soils.md) |
| Glacier mechanics, orbital cycles, isostatic rebound, the proxy record | [geology 3.4](../geology/lessons/03-04-glaciers-ice-ages.md) |
| Early Earth, the Great Oxidation, Snowball Earth evidence | [geology 5.2](../geology/lessons/05-02-earth-history-hadean-proterozoic.md) |
| Phanerozoic history, $\delta^{18}\mathrm{O}$ and Mg/Ca proxies | [geology 5.3](../geology/lessons/05-03-earth-history-phanerozoic.md) |
| Saddle-node bifurcations, hysteresis, the fold | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) |
| One-dimensional flows and stability of fixed points | [dynamical-systems 1.1](../dynamical-systems/lessons/01-01-flows-on-the-line.md) |
| Mode locking and the devil's staircase | [dynamical-systems 5.4](../dynamical-systems/lessons/05-04-intermittency-routes.md) |
| Linear systems of ODEs and their eigenvalues (the two-layer model) | [ode-refresher 3.1](../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md) |
| Gaussian tails, $\Pr(Z>z)$, covariance and correlated estimators | [prob-stat-refresher 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| Combining independent evidence, Bayes' rule | [prob-stat-refresher 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) |
| Hypothesis testing, $t$-statistics, significance | [prob-stat-refresher 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) |
| Least-squares fitting and calibration uncertainty | [analytical-chemistry 1.4](../analytical-chemistry/lessons/01-04-significance-tests-calibration.md) |
| Convolution and the impulse response of a linear system | [signals-systems 1.4](../signals-systems/lessons/01-04-convolution-continuous-time.md) |
| Loop gain, closed-loop gain and stability margin | [control-systems 1.1](../control-systems/lessons/01-01-feedback-and-the-control-problem.md) |
| Turbulence closure and subgrid parameterization | [fluid-dynamics 4.5](../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md) |
| Courant condition and stability of explicit PDE schemes | [numerical-analysis 5.4](../numerical-analysis/lessons/05-04-heat-equation-explicit-implicit.md) |
| Main-sequence brightening — why the Sun gets hotter with age | [astrophysics 2.5](../astrophysics/lessons/02-05-main-sequence.md) |
| Radiative transfer in stellar atmospheres, the $\tau = 2/3$ rule | [astrophysics 1.3](../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md) |
| Critical exponents, diverging fluctuations near a transition | [stat-mech 5.4](../stat-mech/lessons/05-04-critical-exponents-universality.md) |
| Potential theory for a self-gravitating body (sea-level fingerprints) | [em-refresher 1.3](../em-refresher/lessons/01-03-electric-potential.md) |
| Chemical potential and the free energy of mixing | [thermodynamics-physics 3.4](../thermodynamics-physics/lessons/03-04-third-law-chemical-potential.md) |
| Externalities and the economics of a stock pollutant | [micro-refresher 5.2](../micro-refresher/lessons/05-02-externalities-public-goods.md) |
| Comparative planetology, the habitable zone, other planets' greenhouses | [planetary-science](../planetary-science/syllabus.md) |

## Pitfalls

### Definitions and conventions

- "The forcing is 3.7" — **which forcing?** Instantaneous at the top of atmosphere is 2.8,
  at the tropopause 4.1, stratosphere-adjusted 3.75, effective 3.93. Apply one convention to
  *every* term in an expression.
  *([1.4](lessons/01-04-radiative-forcing-defined.md))*
- A positive $c_i$ amplifies in this course; a positive $\alpha_i$ amplifies in AR6 too, but
  AR6's Planck term is **negative**. Check the Planck term to identify the convention.
  *([2.1](lessons/02-01-feedbacks-gain-factor.md))*
- ECS, TCR, EffCS and ESS are four different numbers. An observational estimate constrains
  EffCS; comparing it with a model's ECS was, for a decade, the field's largest apparent
  discrepancy.
  *([3.2](lessons/03-02-tcr-ecs-pattern-effect.md), [2.5](lessons/02-05-diagnosing-feedbacks.md))*
- $\mathrm{TCR}/\mathrm{ECS}$ is $\lambda/(\lambda+\varepsilon\kappa)$, **not** a fixed 0.6.
  High-sensitivity models have lower ratios, so a fixed conversion compresses the high tail.
  *([3.2](lessons/03-02-tcr-ecs-pattern-effect.md))*
- "Gigatonnes" without a subscript is ambiguous by a factor of 3.664.
  *([4.1](lessons/04-01-the-carbon-cycle.md))*

### Algebra that bites

- **Gains add; amplifications do not multiply.** Two gains of 0.3 give $1/(1-0.6) = 2.5$,
  not $1.43^2 = 2.04$ — and the product form can never produce a runaway, which is how you
  know it is wrong.
  *([2.1](lessons/02-01-feedbacks-gain-factor.md))*
- Averaging model sensitivities is not the same as inverting the mean feedback, and by
  Jensen's inequality the ECS-space mean is always larger. Average in $\lambda$-space.
  *([2.5](lessons/02-05-diagnosing-feedbacks.md), [3.3](lessons/03-03-constraining-sensitivity-observations.md))*
- Any quantity that is a **difference of two nearly-equal large numbers** has enormous
  fractional sensitivity: $\lambda_0-\sum c_i$, $\Delta F-\Delta N$, $\mathrm{TA}-\mathrm{DIC}$,
  $A - R - D$. Three of the four biggest uncertainty amplifiers in this course have this form.
  *([2.1](lessons/02-01-feedbacks-gain-factor.md), [3.3](lessons/03-03-constraining-sensitivity-observations.md), [4.3](lessons/04-03-ocean-acidification.md), [5.4](lessons/05-04-the-cryosphere.md))*
- pH is a logarithm: exponentiate before judging whether a change is small.
  *([4.3](lessons/04-03-ocean-acidification.md))*
- Nested ensembles cannot be added in quadrature — the multi-model spread already contains
  the parametric and internal-variability spreads.
  *([6.2](lessons/06-02-model-hierarchy.md))*

### Forcing versus feedback versus response

- Water vapour is a **feedback**, not a forcing: its nine-day lifetime slaves it to
  temperature. Lifetime is what separates the two.
  *([2.2](lessons/02-02-planck-water-vapour-lapse-rate.md))*
- $\mathrm{CO_2}$ lagging temperature at glacial terminations **confirms** it is an amplifier.
  A feedback lags by construction; one that led would be a forcing needing its own cause.
  *([6.3](lessons/06-03-ice-ages-100-kyr-problem.md))*
- Rapid adjustments and feedbacks are separated by *what they respond to*, not by how fast.
  The fixed-SST experiment is the operational test.
  *([1.4](lessons/01-04-radiative-forcing-defined.md))*
- $\Delta\mathrm{CRE}/\Delta T$ is not the cloud feedback — the masking correction is about
  $+0.3$ and can flip the sign.
  *([2.5](lessons/02-05-diagnosing-feedbacks.md))*
- Whether something is a feedback, a boundary condition or noise is a property of the process
  **relative to the question's timescale**, not of the process.
  *([1.1](lessons/01-01-climate-system-timescales.md))*

### Saturation, amplification and scale

- "The $\mathrm{CO_2}$ band is saturated" is true and is precisely *why* the forcing is
  logarithmic rather than zero — the action moved to the wings.
  *([1.3](lessons/01-03-bands-saturation-logarithmic-forcing.md))*
- The largest forcing does not carry the largest uncertainty. Aerosols are a quarter of
  $\mathrm{CO_2}$'s magnitude and supply 80 percent of the variance in the total.
  *([1.5](lessons/01-05-forcing-agents.md))*
- Feedback parameters are **state-dependent**. The ice–albedo feedback is $0.35$ today,
  roughly double at the Last Glacial Maximum, and $5\ \mathrm{W\,m^{-2}\,K^{-1}}$ with the ice
  line in the mid-latitudes. Quoting "the" sensitivity without a base state is quoting a
  derivative without a point.
  *([2.3](lessons/02-03-surface-albedo-cryosphere-feedback.md), [6.1](lessons/06-01-energy-balance-models-bistability.md))*
- Heat capacity sets the **timing**, never the destination: $\Delta T_{\text{eq}} = F/\lambda$
  contains no $C$. The ocean buys time, not safety.
  *([3.1](lessons/03-01-ocean-heat-uptake-thermal-inertia.md))*
- Confusing the ocean's total heat *content* (enormous) with its heat uptake *rate per degree*
  ($\kappa \approx 0.7$) is the standard version of that error.
  *([3.1](lessons/03-01-ocean-heat-uptake-thermal-inertia.md))*

### Statistics and evidence

- A statistically insignificant trend is a statement about the record's length, not about the
  climate. Fifteen years of global temperature proves nothing; thirty years proves it at five
  sigma.
  *([3.4](lessons/03-04-internal-variability-detection.md))*
- Ocean heat content, not surface temperature, is the arbiter of whether warming paused — the
  surface holds 1 percent of the heat capacity.
  *([3.4](lessons/03-04-internal-variability-detection.md), [3.1](lessons/03-01-ocean-heat-uptake-thermal-inertia.md))*
- Compare an observation with the **distribution of individual model runs**, not with the
  ensemble mean, which has had internal variability averaged out of it.
  *([3.4](lessons/03-04-internal-variability-detection.md))*
- The human contribution can exceed 100 percent of observed warming — greenhouse gases warmed
  more than has been observed, and anthropogenic aerosols masked part of it.
  *([3.5](lessons/03-05-detection-attribution.md))*
- FAR is a population risk, never a per-event causal fraction; and an attribution number is
  conditional on an event definition that can change it by an order of magnitude.
  *([5.2](lessons/05-02-extremes-event-attribution.md))*
- Agreement with a tuning target is not evidence; a multi-model spread is not a confidence
  interval; and 30 models have an effective independent size closer to 10.
  *([6.2](lessons/06-02-model-hierarchy.md), [3.3](lessons/03-03-constraining-sensitivity-observations.md))*

### Impacts

- Mean rainfall rises at 2 percent per kelvin and *extreme* rainfall at 7 or more — the global
  energy constraint applies to the time-mean, not to an individual storm.
  *([5.1](lessons/05-01-hydrological-cycle-response.md), [5.2](lessons/05-02-extremes-event-attribution.md))*
- Unchanged precipitation does not mean unchanged water availability: falling land relative
  humidity raises evaporative demand.
  *([5.1](lessons/05-01-hydrological-cycle-response.md))*
- Melting **sea** ice does not raise sea level; only land ice does. Ice-shelf collapse matters
  through buttressing, not through displacement.
  *([5.3](lessons/05-03-sea-level-rise.md), [5.4](lessons/05-04-the-cryosphere.md))*
- Sea level integrates warming, so stabilizing temperature stabilizes the *rate*, not the
  level — and an overshoot-and-return path can deliver more sea-level rise than a monotonic
  one ending warmer.
  *([5.3](lessons/05-03-sea-level-rise.md))*
- Arctic summer sea ice is not a tipping element: every model that has been tested regrows it
  within years. It is the canonical example of a dramatic, reversible response being
  mislabelled.
  *([5.6](lessons/05-06-tipping-elements-thresholds.md))*
- "Crossing a tipping point" means committed change, not fast change. West Antarctica commits
  to metres over centuries; nothing visible happens quickly.
  *([5.6](lessons/05-06-tipping-elements-thresholds.md))*

### Long timescales and intervention

- The silicate thermostat is why Earth is habitable and no help at all: $2\times10^{5}$ yr
  response time, one fiftieth of our emission rate.
  *([6.4](lessons/06-04-deep-time-slow-thermostat.md))*
- Net zero **stabilizes** temperature; it does not reduce it. Cooling requires net-negative
  emissions, and removing a tonne recovers less than emitting a tonne cost.
  *([4.4](lessons/04-04-tcre-carbon-budgets-net-zero.md))*
- A net-zero *date* says nothing about cumulative emissions. Under TCRE the area under the
  curve is everything and the date is nearly irrelevant.
  *([4.4](lessons/04-04-tcre-carbon-budgets-net-zero.md), [5.3](lessons/05-03-sea-level-rise.md))*
- Solar geoengineering restores global-mean temperature and necessarily fails to restore the
  water cycle, the ocean chemistry or the regional pattern — and creates a termination risk
  that grows with use.
  *([6.5](lessons/06-05-scenarios-projections-intervention.md), [5.1](lessons/05-01-hydrological-cycle-response.md), [4.3](lessons/04-03-ocean-acidification.md))*
- SSP5-8.5 is a high-end bounding scenario, not business as usual. Current policies point to
  roughly 2.5 to 3 K.
  *([6.5](lessons/06-05-scenarios-projections-intervention.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every lesson file is
  cited somewhere here.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links.
- **No prose dollar signs** — write "10 dollars", not the symbol.
- Length is not capped the way a lesson's is: this is a lookup surface, not a read-through.
