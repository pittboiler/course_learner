# Atmospheric Science · Lesson 1.4: Potential temperature

> ⏱ ~15 min · Module 1: Atmospheric structure & thermodynamics · Builds on: [1.3 Adiabatic parcels & the dry adiabatic lapse rate](01-03-adiabatic-parcels-dry-lapse-rate.md), [`thermodynamics-physics` 2.3](../../thermodynamics-physics/lessons/02-03-entropy.md) · Unlocks: 2.4 (stability & CAPE), 4.4 (thermal wind)

## Why this matters

Temperature is a terrible label for a moving air parcel. Two parcels at the same temperature may be completely different air; one parcel can pass through a dozen temperatures in an hour of ascent without changing in any physically meaningful way. What you want is a **tag** — a number stamped on the parcel at birth that survives vertical motion, so you can recognize the same air again at a different level, and so that a difference in the number means a real difference in the air. That tag is potential temperature, $\theta$. Meteorologists plot it, forecast on surfaces of it, and diagnose stability from its vertical gradient. Once you have $\theta$, the sprawling question "is this layer stable?" collapses to a one-line test: *does $\theta$ increase upward?*

## The idea

Here is the trick, and it is the same trick as quoting a price in constant dollars. A parcel's temperature depends on the pressure it happens to be sitting at, which is an accident of altitude. So strip the accident out: ask what temperature the parcel *would* have if you brought it adiabatically to one fixed reference pressure — by convention 1000 hPa, roughly sea level. That hypothetical, standardized temperature is the parcel's **potential temperature**.

Two parcels with the same $\theta$ are the same air brought to different heights. Two parcels with different $\theta$ are genuinely different air, no matter what their thermometers say. And because the trip down to 1000 hPa is defined to be adiabatic — reversible, no heat exchanged — $\theta$ cannot change while the parcel itself moves adiabatically. Move a parcel up or down all you like; $\theta$ is unmoved.

The payoff for stability is immediate and worth seeing before the algebra. Take an environment and lift a parcel from it. The parcel keeps its $\theta$. If the environment's $\theta$ *increases* with height, then the parcel arrives somewhere with a smaller $\theta$ than its new surroundings — meaning it is colder than them at that pressure, denser, and it sinks back. Stable. If the environment's $\theta$ *decreases* with height, the parcel arrives warmer than its surroundings and keeps going. Unstable. The messy comparison of two lapse rates has become the sign of one derivative.

## The formal version

**Definition.** From [1.3](01-03-adiabatic-parcels-dry-lapse-rate.md) P3, an adiabatic parcel obeys $Tp^{-\kappa} = \text{const}$ with

$$\kappa \equiv \frac{R_d}{c_p} = \frac{287}{1004} = 0.286.$$

Evaluating that constant at the reference pressure $p_0 = 1000$ hPa defines

$$\boxed{\ \theta = T\left(\frac{p_0}{p}\right)^{\kappa}, \qquad p_0 = 1000\ \mathrm{hPa},\ \kappa = 0.286\ }$$

known as **Poisson's equation**. *In words: $\theta$ is the temperature the parcel would have if you compressed or expanded it adiabatically to 1000 hPa.* Units are kelvin. At the surface, where $p \approx p_0$, $\theta \approx T$; higher up, where $p < p_0$, the factor $(p_0/p)^\kappa$ exceeds 1 and $\theta > T$ — always.

**Conservation.** Take logarithms and differentiate:

$$\ln\theta = \ln T + \kappa(\ln p_0 - \ln p) \qquad\Longrightarrow\qquad \frac{d\theta}{\theta} = \frac{dT}{T} - \kappa\frac{dp}{p}.$$

The right side is exactly $dq/(c_pT)$ from the first law (divide $dq = c_p\,dT - \alpha\,dp$ by $c_pT$ and use $\alpha/T = R_d/p$). So

$$\frac{d\theta}{\theta} = \frac{dq}{c_p T}, \qquad\text{and for } dq = 0: \quad \boxed{\ \theta = \text{constant}\ }$$

*In words: $\theta$ changes only when heat is added or removed — not when the parcel merely moves.* This also identifies what $\theta$ really is: since $ds = dq/T$ for a reversible process, $c_p\,d\ln\theta = ds$, so **$\theta$ is entropy in disguise** — a relabelling of the entropy of [`thermodynamics-physics` 2.3](../../thermodynamics-physics/lessons/02-03-entropy.md) into kelvin. Surfaces of constant $\theta$ are called **isentropic surfaces**, and adiabatic flow is confined to them: a parcel glides along its own isentrope like a bead on a wire.

**Static stability.** Differentiate $\ln\theta = \ln T - \kappa\ln p + \text{const}$ with respect to height, using the hydrostatic equation and the gas law:

$$\frac{1}{\theta}\frac{d\theta}{dz} = \frac{1}{T}\frac{dT}{dz} - \frac{\kappa}{p}\frac{dp}{dz} = \frac{1}{T}\frac{dT}{dz} + \frac{\kappa\rho g}{p} = \frac{1}{T}\left(\frac{dT}{dz} + \frac{g}{c_p}\right),$$

using $\kappa\rho g/p = (R_d/c_p)(g/R_dT) = g/(c_pT)$. Therefore

$$\boxed{\ \frac{d\theta}{dz} = \frac{\theta}{T}\left(\Gamma_d - \Gamma\right)\ }$$

*In words: $\theta$ increases upward exactly when the environment's lapse rate is gentler than the dry adiabatic one.* Since $\theta/T > 0$ always, the sign of $d\theta/dz$ is the sign of $\Gamma_d - \Gamma$:

| Environment | $d\theta/dz$ | Verdict for a dry parcel |
|---|---|---|
| $\Gamma < \Gamma_d$ (e.g. the standard 6.5 K km⁻¹) | positive | stable |
| $\Gamma = \Gamma_d$ | zero | neutral — the parcel goes wherever it is put |
| $\Gamma > \Gamma_d$ (superadiabatic) | negative | unstable — it overturns until it isn't |

For a standard troposphere ($\Gamma = 6.5$, $\theta \approx T$ near the surface), $d\theta/dz \approx 9.77 - 6.5 = 3.3$ K km⁻¹. A superadiabatic layer is rare and shallow — a few metres over hot desert ground at midday — because as soon as it forms, convection destroys it.

## Picture

![Left, temperature falling with height at 6.5 K per km while potential temperature rises at about 3.3 K per km over the same layer; right, three sloping isentropic surfaces labelled by their theta values, with a parcel gliding along the middle one and rising as the surface rises](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — computing and using $\theta$).** A parcel is measured at $p = 700$ hPa, $T = 280$ K. (a) Find $\theta$. (b) If it descends adiabatically to 1000 hPa, what is its temperature?

(a) $$\theta = 280\left(\frac{1000}{700}\right)^{0.286} = 280 \times (1.4286)^{0.286} = 280 \times 1.1073 = 310.1\ \mathrm{K}.$$

(b) No calculation needed. Descending adiabatically to 1000 hPa is *the definition* of $\theta$, so the answer is 310.1 K — the parcel arrives 30 K warmer than it started, purely from compression. (Check against 1.3's rule of thumb: 700 hPa is near 3 km, and $9.77\times3 = 29$ K. Consistent.)

**Example 2 (why you'd care — identifying air).** Two soundings at the same moment: station A reports $T = 300$ K at 1000 hPa; station B, at altitude, reports $T = 246$ K at 500 hPa.

$$\theta_A = 300\left(\frac{1000}{1000}\right)^{0.286} = 300\ \mathrm{K}, \qquad \theta_B = 246\left(\frac{1000}{500}\right)^{0.286} = 246 \times 1.219 = 300\ \mathrm{K}.$$

The two readings differ by 54 K in temperature and are *identical* in potential temperature. They are the same air mass — the same isentrope, sampled at two levels. A forecaster reading raw temperatures sees two unrelated numbers; reading $\theta$, they see one air mass with a known history.

This is why upper-air analysis is done on isentropic surfaces. Air flowing along a $\theta$ surface that slopes upward is *rising* — and rising air cools, saturates and makes cloud. Isentropic ascent is the quiet, gentle, large-scale lifting that produces the broad cloud shields of a warm front (Lesson 4.5), as opposed to the violent local ascent of convection.

## Watch out

- **You might think** $\theta$ is conserved by any air motion. **Actually** it is conserved only for **adiabatic** motion. Add heat — condensation releasing latent heat, radiative cooling at cloud top, sunlight warming the ground, mixing across the parcel boundary — and $\theta$ changes, by exactly $d\theta/\theta = dq/(c_pT)$. Latent heat release is the big one, and Lesson 2.2 introduces a repaired variable that survives it.
- **You might think** $\theta$ is just "temperature corrected for altitude" and so is a proxy for how warm it feels. **Actually** it is the parcel's entropy, and its *ordering* is what matters, not its value: a stratospheric parcel has an enormous $\theta$ (around 330 K at the tropopause, and it climbs steeply above) while being about 217 K to a thermometer. Large $\theta$ up high means the stratosphere is extremely stable, not warm.
- **You might think** the reference pressure 1000 hPa is physically important. **Actually** it is a convention; using 100 kPa or 1013 hPa would shift every $\theta$ by a constant factor and change no comparison. What matters is that *everyone uses the same one*.

## One-liner

> Potential temperature is the temperature a parcel would have at 1000 hPa — an adiabatic invariant that tags an air mass for life, and whose upward increase is exactly the condition for stability.

## Problems

**P1 (🟢)** A parcel at 850 hPa has $T = 286$ K. Compute $\theta$. Then compute the temperature it would have at 500 hPa if lifted adiabatically.

**P2 (🟡)** An environment has $T = 290$ K at the surface (1000 hPa) and 273 K at 2 km, where the pressure is 795 hPa. (a) Compute $\theta$ at both levels. (b) Compute $d\theta/dz$ from your two values, and check it against the formula $d\theta/dz = (\theta/T)(\Gamma_d - \Gamma)$ evaluated at the surface. (c) Is the layer stable to dry ascent?

**P3 (🔴, optional)** A parcel displaced vertically in a stable layer oscillates. Newton's second law for the displacement $z'$ gives $\ddot{z}' = -N^2 z'$ with the **Brunt–Väisälä frequency** $N^2 = (g/\theta)\,d\theta/dz$. (a) Explain in one sentence why the restoring "force" per unit mass should be proportional to $d\theta/dz$. (b) Evaluate $N$ and the oscillation period for a standard troposphere: $\theta = 288$ K, $\Gamma = 6.5$ K km⁻¹, $T = 288$ K.

<details>
<summary>Solutions</summary>

**P1** $$\theta = 286\left(\frac{1000}{850}\right)^{0.286} = 286 \times (1.1765)^{0.286} = 286 \times 1.0478 = 299.7\ \mathrm{K}.$$

Lifting adiabatically conserves $\theta$, so at 500 hPa invert Poisson's equation:

$$T = \theta\left(\frac{p}{p_0}\right)^{\kappa} = 299.7 \times (0.5)^{0.286} = 299.7 \times 0.8203 = 245.9\ \mathrm{K}.$$

*Check.* The parcel cooled by 40 K going from 850 to 500 hPa. In height terms that is roughly 4 km (Lesson 1.2's hypsometric equation), and $9.77 \times 4.1 = 40$ K — the dry adiabat, as it must be.

**P2** (a) Surface: $\theta = 290 \times (1000/1000)^{0.286} = 290.0$ K. At 2 km:

$$\theta = 273\left(\frac{1000}{795}\right)^{0.286} = 273 \times (1.2579)^{0.286} = 273 \times 1.0678 = 291.5\ \mathrm{K}.$$

(b) From the two values, $d\theta/dz \approx (291.5 - 290.0)/2 = 0.75\ \mathrm{K\,km^{-1}}$.

Check against the formula. The environmental lapse rate is $\Gamma = (290 - 273)/2 = 8.5\ \mathrm{K\,km^{-1}}$, and at the surface $\theta/T = 1$:

$$\frac{d\theta}{dz} = 1 \times (9.77 - 8.5) = 1.27\ \mathrm{K\,km^{-1}}.$$

The two agree in sign and order of magnitude; they differ because the finite-difference version averages over a 2 km layer while the formula is evaluated at one level, and $\theta/T$ grows above the surface. (Evaluating $\theta/T$ at 2 km, $291.5/273 = 1.068$, gives $1.068 \times 1.27 = 1.36$; the layer-average of the two endpoint estimates, about 1.3 K km⁻¹, is still above the crude difference — the residual is the finite-difference error in $\Gamma$ itself over a deep layer.)

(c) **Stable**, though only weakly: $\Gamma = 8.5 < \Gamma_d = 9.77$, so $d\theta/dz > 0$. A dry parcel lifted here cools faster than its surroundings and sinks back — but the margin is thin, and Module 2 will show that adding moisture can flip this same layer to unstable.

**P3** (a) Displace a parcel upward by $z'$. It keeps its own $\theta$, while the surroundings it arrives in have $\theta$ larger by $(d\theta/dz)z'$. Buoyancy is proportional to the density deficit, which at fixed pressure is proportional to the $\theta$ deficit — so the parcel is heavy by an amount proportional to $(d\theta/dz)z'$ and is pushed back down. The restoring acceleration is thus proportional to the displacement times $d\theta/dz$, which is the signature of simple harmonic motion, with $g/\theta$ supplying the units.

(b) Using $d\theta/dz = (\theta/T)(\Gamma_d - \Gamma) = 1 \times (9.77 - 6.5)\times10^{-3} = 3.27\times10^{-3}\ \mathrm{K\,m^{-1}}$:

$$N^2 = \frac{g}{\theta}\frac{d\theta}{dz} = \frac{9.81}{288}\times 3.27\times10^{-3} = 1.11\times10^{-4}\ \mathrm{s^{-2}},$$

$$N = 1.06\times10^{-2}\ \mathrm{s^{-1}}, \qquad \tau = \frac{2\pi}{N} = 595\ \mathrm{s} \approx 10\ \text{minutes}.$$

*Check.* Ten minutes is the observed period of atmospheric buoyancy (gravity) waves — the ripples that make lee-wave cloud bands downwind of a mountain range, and the corrugated undersides of altocumulus. Note that in an unstable layer $d\theta/dz < 0$ makes $N^2 < 0$, so $N$ is imaginary and the "oscillation" $e^{iNt}$ becomes exponential growth: the parcel runs away instead of returning. That runaway is convection, and Lesson 2.4 measures its energy.

</details>

## Flashback

**From Lesson 1.2 (The hydrostatic equation & the barometric law):** A layer between the 850 hPa and 700 hPa surfaces has a mean temperature of 268 K. Compute its thickness. Then say what would happen to that thickness if a warm advection event raised the layer mean to 278 K.

<details>
<summary>Solution</summary>

The hypsometric equation gives

$$\Delta Z = \frac{R_d\overline{T}}{g}\ln\!\frac{p_1}{p_2} = \frac{287 \times 268}{9.81}\ln\!\frac{850}{700} = 7840 \times \ln(1.2143) = 7840 \times 0.1942 = 1523\ \mathrm{m}.$$

At 278 K, $\Delta Z = (287\times278/9.81)\times0.1942 = 8133 \times 0.1942 = 1579$ m — about 56 m thicker.

The point: thickness scales linearly with mean temperature, so warming a layer by 10 K out of 268 K expands it by $10/268 = 3.7$ percent of its depth. Warm air columns are tall columns.

*Check.* The ratio of the two thicknesses is $1579/1523 = 1.037 = 278/268$, exactly as the linear dependence demands.

</details>

## Connections

- **Backward:** $\theta$ is the integration constant of the adiabatic relation derived in [1.3](01-03-adiabatic-parcels-dry-lapse-rate.md), evaluated at a fixed reference pressure; and by $c_p\,d\ln\theta = ds$ it *is* the entropy of [`thermodynamics-physics` 2.3](../../thermodynamics-physics/lessons/02-03-entropy.md), rescaled into kelvin.
- **Forward:** [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md) repairs $\theta$ into the equivalent potential temperature $\theta_e$, which survives condensation; [2.4](02-04-stability-parcel-theory-cape.md) uses the $d\theta/dz$ test as the backbone of parcel stability; and [4.4](04-04-thermal-wind-general-circulation.md) uses sloping isentropes to explain where the jet stream sits.
- **Sideways (statistical mechanics):** the appearance of an *adiabatic invariant* — a quantity constant under slow changes of an external parameter — is the same structure as the adiabatic theorem in mechanics and in [`stat-mech` 1.3](../../stat-mech/lessons/01-03-entropy-microcanonical.md)'s reading of entropy as the log of accessible states, which is unchanged when a system is compressed slowly enough.
