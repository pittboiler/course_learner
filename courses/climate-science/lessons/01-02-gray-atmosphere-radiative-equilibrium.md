# Climate Physics · Lesson 1.2: The gray atmosphere in radiative equilibrium

> ⏱ ~15 min · Module 1: Radiative foundations, past the slab · Builds on: [1.1](01-01-climate-system-timescales.md), [atmospheric-science 3.3](../../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md) · Unlocks: [1.3](01-03-bands-saturation-logarithmic-forcing.md) (band structure and logarithmic forcing)

## Why this matters

[Atmospheric science 3.2](../../atmospheric-science/lessons/03-02-greenhouse-effect-energy-budget.md) built a greenhouse out of slabs: one layer, one temperature, an answer of $T_s = T_e(N+1)^{1/4}$. It works, but it cannot tell you what the temperature is *at a given height*, and therefore cannot tell you how the profile responds to adding absorber — which is the only thing this course actually cares about. Replacing the slabs with a continuous absorbing medium costs about ten lines of algebra and buys three things the slab could never give: a closed-form $T(\tau)$, a **skin temperature** that predicts the real stratosphere to within a few kelvin, and a **surface temperature discontinuity** that proves convection must exist. That last one is a genuinely satisfying piece of physics: a purely radiative calculation demonstrating its own incompleteness.

## The idea

**One knob: how many absorption lengths deep is the air?** Assume the atmosphere absorbs infrared equally at all wavelengths — it is **gray**. Then the only structural parameter is the total optical depth from space to the ground, $\tau_s$. Measure position not in metres but in optical depth $\tau$ counted *downward* from space, so $\tau = 0$ at the top and $\tau = \tau_s$ at the ground. This is the natural coordinate because radiation only cares about how many absorption lengths it has to cross.

**Radiative equilibrium means no layer is a net source or sink.** Every layer absorbs radiation from above and below and emits its own; in equilibrium those balance, so no *net* flux is deposited anywhere in the column. The consequence is powerful and almost trivially stated: **the net upward flux is the same at every level**, and therefore equal to its value at the top, which is the outgoing longwave radiation $\sigma T_e^4$. All the solar energy enters at the ground, all the infrared leaves from the top, and in between the net flux is a constant conveyor belt.

**Two streams.** Track an upward flux $U(\tau)$ and a downward flux $D(\tau)$. Each obeys a Schwarzschild-type equation: it relaxes toward the local blackbody emission $\sigma T^4$. Impose the constant-net-flux condition and the algebra collapses immediately — you get a linear equation for $U+D$, and since $U+D = 2\sigma T^4$ in equilibrium, you get $T^4$ linear in $\tau$. That is the whole derivation.

**And then it breaks, informatively.** The solution predicts a surface *jump*: the air immediately above the ground is colder than the ground itself. That is not a numerical artefact; it is what pure radiative transfer genuinely demands, because radiation can move heat across a gap without needing to move it *through* the intervening air continuously. An infinite lapse rate over an infinitesimal layer is violently unstable by [atmospheric-science 2.4](../../atmospheric-science/lessons/02-04-stability-parcel-theory-cape.md), so convection fires the instant you let it. **The gray model's job is to produce the profile convection then has to fix.**

## The formal version

**Setup.** Plane-parallel, gray, in local thermodynamic equilibrium. Optical depth increases downward, $\tau \in [0, \tau_s]$. Let $U(\tau)$ be the upward and $D(\tau)$ the downward broadband flux (W m⁻²). Using the two-stream form of the Schwarzschild equation with a **diffusivity factor** $\mathcal{D}$ that accounts for slant paths (the Eddington value $\mathcal{D} = 3/2$),

$$\frac{dU}{d\tau} = \mathcal{D}\left(U - \sigma T^4\right), \qquad \frac{dD}{d\tau} = -\mathcal{D}\left(D - \sigma T^4\right).$$

*In words: going down the column, the upward beam gains what the air emits and loses what it absorbs; the downward beam does the same with the sign of the coordinate flipped.*

**Impose radiative equilibrium.** The net upward flux is $F_n = U - D$; equilibrium says no layer gains or loses net energy, so $dF_n/d\tau = 0$. Subtracting the two equations,

$$\frac{d(U-D)}{d\tau} = \mathcal{D}\left(U + D - 2\sigma T^4\right) = 0 \quad\Longrightarrow\quad \boxed{U + D = 2\sigma T^4}.$$

*In words: at every level the two streams average to the local blackbody emission.* Adding them instead,

$$\frac{d(U+D)}{d\tau} = \mathcal{D}\,(U - D) = \mathcal{D}\,F_n = \mathcal{D}\,\sigma T_e^4,$$

using $F_n = \sigma T_e^4$ (constant, and equal to the OLR). So $U+D$ is **linear in $\tau$**. The top boundary condition is that nothing shines down from space, $D(0) = 0$, hence $U(0) = \sigma T_e^4$ and $(U+D)(0) = \sigma T_e^4$. Integrating and using $U+D = 2\sigma T^4$:

$$\boxed{\,T^4(\tau) = \frac{T_e^4}{2}\left(1 + \tfrac{3}{2}\tau\right)\,}$$

with $\mathcal{D} = 3/2$. *In words: the fourth power of temperature rises linearly with optical depth, starting from half of $T_e^4$ at the top.*

**The skin temperature.** Set $\tau = 0$:

$$T_{\text{skin}} = \frac{T_e}{2^{1/4}} = 0.841\,T_e = 0.841 \times 254.6 = 214.1\ \mathrm{K}.$$

*In words: the top of any radiative-equilibrium atmosphere sits at a fixed fraction of the effective temperature, no matter how thick it is.* The physical reason is clean: the topmost air sees blackness above and $\sigma T_e^4$ below, so it absorbs from one hemisphere and emits into two — it must run at half the flux, hence $T_e/2^{1/4}$. Earth's observed lower stratosphere is 200–220 K. **The gray model nails it**, because up there radiation really is in charge.

**The ground.** The surface absorbs the sunlight (all of it, in this idealization: $\sigma T_e^4$) plus the atmosphere's downward emission $D(\tau_s)$, and emits $\sigma T_g^4$. From $U - D = \sigma T_e^4$ and $U + D = \sigma T_e^4(1 + \tfrac32\tau)$ we can read off both streams:

$$D(\tau) = \frac{\sigma T_e^4}{2}\left(\tfrac{3}{2}\tau\right), \qquad U(\tau) = \frac{\sigma T_e^4}{2}\left(2 + \tfrac{3}{2}\tau\right).$$

The surface balance $\sigma T_g^4 = \sigma T_e^4 + D(\tau_s)$ then gives

$$\boxed{\,T_g^4 = \frac{T_e^4}{2}\left(2 + \tfrac{3}{2}\tau_s\right)\,}$$

which is exactly $U(\tau_s)$, as it must be — the ground's emission is the upward stream at the bottom.

**The discontinuity.** Compare the ground with the air touching it:

$$T_g^4 - T^4(\tau_s) = \frac{T_e^4}{2}\left(2 + \tfrac32\tau_s\right) - \frac{T_e^4}{2}\left(1 + \tfrac32\tau_s\right) = \frac{T_e^4}{2}.$$

*In words: the jump in $\sigma T^4$ across the ground is always exactly half the outgoing longwave radiation, regardless of how opaque the atmosphere is.* In temperature the jump shrinks as $\tau_s$ grows (because $T^4$ is compressive), but it never closes:

| $\tau_s$ | air at ground | ground | jump |
|---|---|---|---|
| 1 | 269.2 K | 292.8 K | 23.6 K |
| 2 | 302.8 K | 320.1 K | 17.4 K |
| 4 | 348.2 K | 360.0 K | 11.8 K |

**Why convection is not optional.** A finite temperature drop across an infinitesimally thin layer is an infinite lapse rate. Any lapse rate exceeding $\Gamma_d = g/c_p = 9.8\ \mathrm{K\,km^{-1}}$ is absolutely unstable ([atmospheric-science 2.4](../../atmospheric-science/lessons/02-04-stability-parcel-theory-cape.md)), so the radiative-equilibrium state is not merely inaccurate — it is **dynamically impossible**. Convection fires immediately, carries heat off the surface as sensible and latent flux, and relaxes the lower atmosphere onto something near the moist adiabat. That repaired state is **radiative–convective equilibrium**, and it is the actual troposphere. Above the level where the radiative profile is already stable, nothing intervenes: that level is the **tropopause**, and above it the gray solution stands, which is why the skin temperature works.

**What the gray model cannot do.** It has one free parameter, $\tau_s$, and no wavelength dependence. To match Earth's 288 K surface you must tune $\tau_s$ — and the tuned value has no independent meaning, because the real atmosphere's $\tau$ ranges from ~0.1 in the window to ~$10^{3}$ at the centre of the 15 micrometre $\mathrm{CO_2}$ band. Worse, the gray model makes the forcing from adding absorber **linear** in the amount added, whereas the observed forcing is logarithmic. Fixing that requires band structure, which is [1.3](01-03-bands-saturation-logarithmic-forcing.md).

## Picture

![Temperature plotted against optical depth for the gray radiative-equilibrium solution with surface optical depth 4. Optical depth increases downward. The blue curve starts at the skin temperature of 214 K at the top and reaches 348 K at the ground, where a coral segment marks the discontinuous jump to the ground temperature of 360 K. A dashed grey curve shows the observed profile, much cooler at the surface and with a temperature inversion aloft, which is what convection produces instead](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — tuning the gray atmosphere to Earth).** What surface optical depth would a gray atmosphere need to reproduce Earth's 288 K surface, given $T_e = 254.6$ K?

Solve the ground relation for $\tau_s$:

$$\tau_s = \frac{2}{3}\left(\frac{2T_g^4}{T_e^4} - 2\right).$$

Compute the ratio: $(288/254.6)^4 = (1.1312)^4 = 1.637$. Then

$$\tau_s = \frac{2}{3}\left(2 \times 1.637 - 2\right) = \frac{2}{3}(1.274) = 0.85.$$

So a gray Earth needs $\tau_s \approx 0.85$ — an atmosphere less than one absorption length thick.

*The point.* Check that against the *air* temperature at the ground for the same $\tau_s$: $T^4 = \tfrac12 T_e^4(1+1.275) = 1.137\,T_e^4$, so $T = 262.9$ K. The model reproduces the right surface temperature only by leaving the air above it 25 K too cold. This is the gray model's characteristic failure: it puts the greenhouse effect in the wrong place, concentrating it at the surface instead of distributing it through a deep troposphere. Real radiative–convective models do better precisely because convection redistributes what radiation piles up.

**Example 2 (why you'd care — why the stratosphere cools when the surface warms).** Adding $\mathrm{CO_2}$ warms the surface. It also *cools* the stratosphere, by about a kelvin per decade in the observed record. Why?

Use the two results. The **skin temperature** $T_e/2^{1/4}$ depends only on $T_e$, not on $\tau_s$ — so to leading order the upper atmosphere is pinned. Now add absorber. Two things happen up there, and both cool:

1. The stratosphere is a region that is *heated* mainly by absorbing upwelling infrared from the warm troposphere in the $\mathrm{CO_2}$ band, and *cooled* by emitting in that same band. Adding $\mathrm{CO_2}$ increases the emission efficiency more than the absorption, because the band below is already opaque — the upwelling radiation arriving from beneath has already been absorbed and re-emitted at a *lower, colder* level, so there is little extra to absorb, while the extra emitters radiate to space freely.
2. Meanwhile the troposphere's opacity has increased, so less infrared reaches the stratosphere in the first place.

The net effect is a cooling stratosphere sitting above a warming troposphere.

*The general principle.* This vertical dipole — **troposphere up, stratosphere down** — is the single most useful discriminator in climate science, because it is not what any other forcing does. A brighter Sun warms *both* layers. Only a greenhouse-gas increase warms below while cooling above. That makes it the primary fingerprint used in formal attribution, which is [3.5](03-05-detection-attribution.md).

## Watch out

- **You might think** the surface discontinuity is a mathematical pathology to be quietly discarded. **Actually** it is the model's most useful output. It is the proof, from radiation alone, that a purely radiative atmosphere cannot exist over a heated surface — and it is quantitatively meaningful: the jump in $\sigma T^4$ is always exactly $\tfrac12\sigma T_e^4$, which tells you how much flux convection has to carry.
- **You might think** the skin temperature is the tropopause temperature. **Actually** it is the temperature of the *asymptotic top* of the atmosphere, $\tau \to 0$. It happens to be close to the observed lower-stratospheric value because Earth's stratosphere is nearly isothermal and nearly in radiative equilibrium. In an atmosphere with a strong in-place solar absorber — Earth's ozone, or Titan's haze — the real upper atmosphere is warmer than the gray skin value, because the gray model has no shortwave absorption in it at all.
- **You might think** $\tau$ is a height. **Actually** it is a coordinate that runs *downward* here and compresses wherever the air is thin. Converting to height requires knowing how the absorber is distributed; for a well-mixed pressure-broadened gas $\tau$ grows roughly as $p^2$, so most of the optical depth is packed into the lowest few kilometres.

## One-liner

> Solve radiation alone and you get $T^4 = \tfrac12 T_e^4(1+\tfrac32\tau)$: a top pinned at $0.841\,T_e$, which is right, and a surface jump, which is impossible — and that impossibility is the existence proof for convection.

## Problems

**P1 (🟢)** A gray planet has $T_e = 210$ K and surface optical depth $\tau_s = 2$. (a) Compute its skin temperature. (b) Compute the air temperature at the ground and the ground temperature. (c) State the jump in temperature and the jump in $\sigma T^4$, and check the latter against $\tfrac12\sigma T_e^4$.

**P2 (🟡)** For Earth's gray-equivalent atmosphere ($T_e = 254.6$ K), suppose adding a greenhouse gas increases $\tau_s$ from 0.85 to 0.95. (a) Compute the new ground temperature and the warming. (b) Compute the *fractional* increase in $\tau_s$ and compare it with the fractional increase in $T_g$. (c) In the gray model, is the surface warming linear or logarithmic in absorber amount? Say what this implies about using a gray model to compute $\mathrm{CO_2}$ forcing.

**P3 (🔴, optional)** In radiative equilibrium the downward flux at the ground is $D(\tau_s) = \tfrac12\sigma T_e^4(\tfrac32\tau_s)$. (a) Evaluate $D$ for $\tau_s = 4$ and compare it with the absorbed solar flux $\sigma T_e^4$. (b) Convection must remove the excess energy the surface receives beyond what it could shed radiatively at the *air* temperature. Compute $\sigma T_g^4 - \sigma T^4(\tau_s)$ for $\tau_s = 4$ and interpret it as the flux convection carries. (c) Earth's observed surface sensible-plus-latent flux is about 105 W m⁻². Compare, and comment on whether the gray model is in the right ballpark.

<details>
<summary>Solutions</summary>

**P1** (a) $$T_{\text{skin}} = \frac{210}{2^{1/4}} = \frac{210}{1.1892} = 176.6\ \mathrm{K}.$$

(b) Air at the ground, $\tau = 2$:

$$T^4 = \frac{210^4}{2}\left(1 + 3\right) = 2 \times 210^4 \quad\Longrightarrow\quad T = 210 \times 2^{1/4} = 249.7\ \mathrm{K}.$$

Ground:

$$T_g^4 = \frac{210^4}{2}\left(2 + 3\right) = 2.5\times210^4 \quad\Longrightarrow\quad T_g = 210 \times 2.5^{1/4} = 210 \times 1.2574 = 264.1\ \mathrm{K}.$$

(c) Jump in temperature: $264.1 - 249.7 = 14.4$ K.

Jump in flux: $\sigma(T_g^4 - T^4) = \sigma \times 0.5 \times 210^4 = 5.67\times10^{-8}\times0.5\times1.9448\times10^{9} = 55.1\ \mathrm{W\,m^{-2}}$.

Check: $\tfrac12\sigma T_e^4 = 0.5 \times 5.67\times10^{-8}\times 1.9448\times10^{9} = 55.1\ \mathrm{W\,m^{-2}}$. ✓ They agree exactly, as the algebra guarantees.

**P2** (a) $$T_g = T_e\left[\frac{2 + 1.5\times0.95}{2}\right]^{1/4} = 254.6\left[\frac{3.425}{2}\right]^{1/4} = 254.6 \times (1.7125)^{1/4}.$$

$(1.7125)^{1/4} = 1.1439$, so $T_g = 291.2$ K. The old value was $254.6\times(1.6375)^{1/4} = 254.6\times1.1312 = 288.0$ K, so the warming is $\Delta T = 3.2$ K.

(b) $\tau_s$ rose by $0.10/0.85 = 11.8$ percent; $T_g$ rose by $3.2/288 = 1.1$ percent. The quarter-power is doing the compression: $T_g \propto (2+1.5\tau_s)^{1/4}$.

(c) Neither, strictly — but crucially it is **not logarithmic**. Differentiating, $\Delta T_g \approx \frac{T_g}{4}\frac{1.5\,\Delta\tau_s}{2+1.5\tau_s}$, which is linear in $\Delta\tau_s$ for small increments and *saturates only as a power law* for large ones. The real $\mathrm{CO_2}$ forcing goes as $\ln(C/C_0)$: each doubling gives the same 3.7 W m⁻², so going 280 → 560 → 1120 ppm gives equal steps. A gray model cannot produce that, because the logarithm comes from the *shape of an absorption band* — absorption spreading outward into the wings of a saturated line — and a gray atmosphere has no band shape by construction. Use the gray model for the vertical structure and for skin temperature; never for the magnitude of a greenhouse-gas forcing. That is [1.3](01-03-bands-saturation-logarithmic-forcing.md)'s job.

**P3** (a) $$D(\tau_s) = \frac{\sigma T_e^4}{2}\times 1.5 \times 4 = 3\,\sigma T_e^4.$$

Numerically $\sigma T_e^4 = 5.67\times10^{-8}\times(254.6)^4 = 238.1\ \mathrm{W\,m^{-2}}$, so $D = 714\ \mathrm{W\,m^{-2}}$ — **three times** the absorbed solar flux. The back-radiation dominates the surface energy budget entirely, which is true of the real Earth too (about 333 W m⁻² down against 161 W m⁻² of absorbed sunlight).

(b) $$\sigma T_g^4 - \sigma T^4(\tau_s) = \frac{\sigma T_e^4}{2} = 119\ \mathrm{W\,m^{-2}}.$$

Interpretation: in the real atmosphere the air right above the ground is at the ground's temperature, so that 119 W m⁻² of radiative flux cannot be carried radiatively across a vanishing temperature difference. It must be carried by **convection** — sensible heat plus evaporation. The gray model's discontinuity is, quantitatively, the convective flux the model refuses to admit exists.

(c) Observed is about 105 W m⁻² (roughly 20 sensible plus 85 latent). The gray prediction of 119 W m⁻² is within 15 percent — genuinely impressive for a model with one tunable parameter and no water in it. And note the result is *independent of $\tau_s$*: the model says the convective flux is always half the OLR, i.e. $\tfrac12 \times 239 = 119$ W m⁻². That the real Earth sits close to this is a nontrivial statement about how tightly the surface budget is constrained.

*Check.* Both (b) and the P1(c) result are the same identity, $\tfrac12\sigma T_e^4$, appearing twice — once as a temperature jump and once as a convective flux. They are the same statement read in two directions.

</details>

## Connections

- **Backward:** this is [atmospheric-science 3.3](../../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md)'s Schwarzschild equation solved rather than described, and it replaces the discrete slabs of [atmospheric-science 3.2](../../atmospheric-science/lessons/03-02-greenhouse-effect-energy-budget.md) with a continuum. The instability argument is [atmospheric-science 2.4](../../atmospheric-science/lessons/02-04-stability-parcel-theory-cape.md)'s.
- **Forward:** the failure identified here — a gray atmosphere gives the wrong *functional form* for forcing — is exactly what [1.3](01-03-bands-saturation-logarithmic-forcing.md) repairs, and the stratospheric-cooling argument of Example 2 becomes the stratospheric adjustment in [1.4](01-04-radiative-forcing-defined.md) and the attribution fingerprint in [3.5](03-05-detection-attribution.md).
- **Sideways (astrophysics):** $T^4(\tau) = \tfrac12 T_e^4(1+\tfrac32\tau)$ is the **Eddington gray atmosphere** of stellar structure, arrived at by the identical argument with "star" substituted for "planet". The $2/3$ that appears there — that you see down to $\tau = 2/3$, where $T = T_e$ — is visible right here: set $T = T_e$ and solve, and you get $\tau = 2/3$. See [`astrophysics` 1.3](../../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md).
