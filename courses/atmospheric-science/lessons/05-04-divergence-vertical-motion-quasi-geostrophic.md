# Atmospheric Science · Lesson 5.4: Divergence, vertical motion & quasi-geostrophic theory

> ⏱ ~15 min · Module 5: Vorticity, waves & vertical motion · Builds on: [5.3 Rossby waves & the beta effect](05-03-rossby-waves-beta-effect.md), [5.1 Vorticity & circulation](05-01-vorticity-circulation.md) · Unlocks: 6.1 (boundary layer), 6.5 (predictability)

## Why this matters

This lesson pays the largest outstanding debt in the course. Lesson 4.5 asserted that a surface low deepens when "upper-level divergence exceeds low-level convergence," and that the left exit region of a jet streak forces ascent — both stated flatly, with no derivation. Both are consequences of one idea: **the atmosphere is very nearly in geostrophic balance, and the small departures from that balance are exactly what produce vertical motion.** Getting from a balanced horizontal flow to a rising motion of a few centimetres per second is the central deduction of synoptic meteorology, because vertical motion is what makes cloud, rain and storms. Everything you see out of the window is the ageostrophic residual.

## The idea

**Vertical motion is tiny and decisive.** Horizontal winds run at tens of metres per second; synoptic vertical motion is a few *centimetres* per second — a ratio of $10^{-3}$. Yet a few centimetres per second sustained for half a day lifts air two kilometres, which is more than enough to take a parcel past its LCL and make an overcast. You cannot measure that vertical velocity directly; it must be *inferred* from the horizontal flow, and the inference is what quasi-geostrophic theory provides.

**Mass continuity is the whole mechanism.** Air is nearly incompressible on these scales, so if a layer diverges — spreads horizontally — the air has to come from somewhere, and the only place left is below. Divergence aloft therefore *sucks*: it forces ascent beneath it. Convergence aloft forces subsidence. This is the entire link between an upper-air chart and a rain forecast.

**Why the surface low deepens.** Vorticity, by [5.1](05-01-vorticity-circulation.md), grows under convergence. Air converges into a surface low all the time because of friction ([4.3](04-03-geostrophic-gradient-wind.md)) — and that convergence, on its own, *fills* the low by piling mass into the column. What deepens a low is **removing more mass from the top of the column than friction adds at the bottom**. Divergence aloft is the mass evacuator. This is why a forecaster looks at the 300 hPa chart to predict the surface pressure: the surface low is the *consequence*, and the upper flow is the cause.

**Where the divergence comes from.** Two sources, and the quasi-geostrophic omega equation says they are the only two that matter.

*Differential vorticity advection.* Downstream of an upper trough, the flow is carrying cyclonic vorticity forward. That vorticity increase must be paid for, and by [5.1](05-01-vorticity-circulation.md) the only way to increase vorticity is convergence — so there is convergence aloft downstream of a trough and, by continuity, subsidence. Ahead of the trough (downstream of the ridge axis), the reverse: divergence aloft, and ascent. Because the advection is *stronger aloft* than near the surface — the winds are faster up there — the imbalance shows up as vertical motion.

*Warm advection.* Warm air moving in under a fixed pressure field must expand the layer ([1.2](01-02-hydrostatic-equation-barometric-law.md)'s thickness), lifting the pressure surfaces above it. That lifting **is** ascent. This is why warm fronts, which are pure warm advection, produce the broad steady rain of [4.5](04-05-air-masses-fronts-cyclones.md) with no convective instability required at all.

## The formal version

**Continuity and vertical velocity.** For an incompressible atmosphere,

$$\frac{\partial w}{\partial z} = -\nabla\!\cdot\!\mathbf{v}_H.$$

*In words: horizontal spreading must be fed by vertical stretching.* Integrating a constant divergence over a layer of depth $\Delta z$ gives $w = -(\nabla\cdot\mathbf{v}_H)\,\Delta z$. With a typical upper-level divergence of $1\times10^{-5}\ \mathrm{s^{-1}}$ acting over 5 km,

$$w = 10^{-5} \times 5\times10^{3} = 5\times10^{-2}\ \mathrm{m\,s^{-1}} = 5\ \mathrm{cm\,s^{-1}},$$

and over 12 hours that lifts air $5\times10^{-2}\times4.32\times10^{4} = 2160$ m. Two kilometres of lift from a divergence too small to measure directly.

**Dines compensation.** Because the atmosphere has a lid (the tropopause) and a floor (the ground), divergence at one level must be compensated by convergence at another. The changeover happens at the **level of non-divergence**, typically near 600 hPa. This is why the low-level and upper-level flow patterns of a cyclone are systematically out of phase, and why the surface low sits *downstream* of the upper trough rather than beneath it.

**The quasi-geostrophic system.** The QG approximation keeps geostrophic balance for the *advecting* wind but allows an ageostrophic residual to satisfy continuity. Two equations result. The **vorticity equation**,

$$\frac{\partial\zeta_g}{\partial t} = -\mathbf{v}_g\!\cdot\!\nabla(\zeta_g + f) + f_0\frac{\partial\omega}{\partial p},$$

and the **thermodynamic equation**, which relates temperature change to advection and adiabatic cooling on ascent. Eliminating the time derivatives between them gives the **quasi-geostrophic omega equation**, whose structure is what matters here:

$$\boxed{\ \sigma\nabla^2\omega + f_0^2\frac{\partial^2\omega}{\partial p^2} \;=\; \underbrace{f_0\frac{\partial}{\partial p}\Big[\mathbf{v}_g\!\cdot\!\nabla(\zeta_g+f)\Big]}_{\text{differential vorticity advection}} \;+\; \underbrace{\frac{R}{p}\nabla^2\Big[\mathbf{v}_g\!\cdot\!\nabla T\Big]}_{\text{thermal advection}}\ }$$

Here $\omega = Dp/Dt$ is the pressure-coordinate vertical velocity, and — a persistent trap — **$\omega < 0$ means ascent**, because rising air moves toward lower pressure.

You do not need to solve this. You need to read it, and the left-hand side is what lets you: for a sinusoidal disturbance, $\nabla^2\omega \approx -K^2\omega$, so the left side is proportional to $-\omega$, which is proportional to $+w$. Therefore

$$w \;\propto\; \text{(right-hand side)},$$

and the two terms on the right become a checklist:

| Forcing | Sign for ascent |
|---|---|
| Cyclonic vorticity advection **increasing with height** | ascent |
| **Warm** advection (a maximum of $\mathbf{v}_g\cdot\nabla T$ warming) | ascent |
| Anticyclonic vorticity advection increasing with height | subsidence |
| Cold advection | subsidence |

*In words: air rises where the flow aloft is importing spin faster than the flow below, and where warm air is moving in.* That is the whole practical content of QG theory, and it is what a forecaster applies to a chart in seconds.

**The jet-streak four-quadrant model.** A localized wind maximum embedded in the jet — a **jet streak** — forces vertical motion by a purely ageostrophic mechanism. Air entering the streak accelerates; to accelerate, it must be temporarily *out* of geostrophic balance, with the pressure-gradient force exceeding Coriolis, which turns it toward low pressure. Air exiting decelerates and is turned the other way. Working through the geometry for a Northern-Hemisphere westerly streak:

| Quadrant | Ageostrophic flow | Vertical motion |
|---|---|---|
| **Right entrance** | convergence aloft is absent; divergence | **ascent** |
| Left entrance | convergence aloft | subsidence |
| **Left exit** | divergence aloft | **ascent** |
| Right exit | convergence aloft | subsidence |

So a jet streak carries two ascent regions — its right entrance and its left exit — and cyclogenesis strongly favours a surface baroclinic zone that finds itself under one of them. This is the "left exit region" asserted without justification in [4.5](04-05-air-masses-fronts-cyclones.md).

## Picture

![Top, a jet streak with its four quadrants labelled, the right entrance and left exit marked as ascent regions; bottom, a vertical column showing divergence at the upper level, convergence at the surface, a level of non-divergence near the middle, and ascent through the column, with the surface low deepening because the outflow aloft exceeds the inflow below](assets/05-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — from divergence to rainfall).** Upper-level divergence of $1.5\times10^{-5}\ \mathrm{s^{-1}}$ acts over a 4 km-deep layer for 10 hours above a region where the air has a mixing ratio of 8 g kg⁻¹ and is already near saturation. Estimate the ascent, the lift, and the rainfall if all condensate falls out.

*Ascent.* $$w = 1.5\times10^{-5} \times 4\times10^{3} = 6.0\times10^{-2}\ \mathrm{m\,s^{-1}} = 6\ \mathrm{cm\,s^{-1}}.$$

*Lift in 10 hours.* $$\Delta z = 6.0\times10^{-2} \times 3.6\times10^{4} = 2160\ \mathrm{m}.$$

*Rainfall.* Saturated air lifted 2.2 km cools by roughly $\Gamma_m \times 2.16 \approx 5.5\times2.16 = 12$ K, which by [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md) roughly halves its saturation mixing ratio — so about 4 g kg⁻¹ condenses out. The mass of air processed per square metre is the column density times the ascent, $\rho w t \approx 1.0 \times 6\times10^{-2} \times 3.6\times10^{4} = 2160\ \mathrm{kg\,m^{-2}}$, giving

$$m_{\text{water}} = 2160 \times 4\times10^{-3} = 8.6\ \mathrm{kg\,m^{-2}} \approx 8.6\ \mathrm{mm\ of\ rain}.$$

*Check.* Roughly 9 mm in 10 hours is exactly the character of steady frontal rain — not a downpour, but soaking and persistent. And every step traced back to a divergence of $1.5\times10^{-5}\ \mathrm{s^{-1}}$, a number no instrument measures directly.

**Example 2 (why you'd care — reading a chart the way a forecaster does).** A 500 hPa chart shows a trough over the Rockies with a jet streak of 60 m s⁻¹ in its base, and the surface chart shows a weak low over Colorado with warm southerly flow ahead of it. Where does it develop, and why?

*Vorticity advection.* Downstream (east) of the 500 hPa trough axis, the flow carries cyclonic vorticity forward — **positive vorticity advection**, increasing with height because the winds are strongest aloft. That is the first omega-equation forcing, and it says ascent east of the trough.

*Warm advection.* The southerly surface flow ahead of the low is importing warm air, so the second forcing also says ascent, in the same place.

*Jet streak.* The surface low needs to be under the streak's **left exit** or **right entrance** for the ageostrophic circulation to help. If the streak's exit region lies over the plains east of the low, the two mechanisms line up.

*Result.* All three forcings coincide a few hundred kilometres east of the trough axis and east of the surface low. Divergence aloft there evacuates the column faster than friction fills it; by [5.1](05-01-vorticity-circulation.md) the residual convergence beneath spins up cyclonic vorticity; and the low deepens and moves east under the steering flow. That is Colorado cyclogenesis, and combining it with [5.2](05-02-potential-vorticity.md)'s lee trough — which is why the trough was over the Rockies in the first place — gives the full life story of a large share of North American winter storms.

## Watch out

- **You might think** $\omega > 0$ means rising. **Actually** $\omega = Dp/Dt$, and rising air moves toward *lower* pressure, so **ascent is $\omega < 0$**. This sign trap catches everyone once; the mnemonic is that $\omega$ and $w$ have opposite signs.
- **You might think** surface convergence deepens a low. **Actually** convergence adds mass to the column, which by hydrostatics *raises* surface pressure — friction fills lows, it does not deepen them. Deepening requires the divergence aloft to remove mass faster, which is why the cause is always found on the upper-air chart.
- **You might think** QG theory works everywhere. **Actually** it assumes $\mathrm{Ro} \ll 1$ and a nearly balanced flow, so it fails for convection, fronts at their sharpest, hurricanes, and anything within about 10 degrees of the equator. It is a mid-latitude, synoptic-scale tool — magnificent within its regime and useless outside it.
- **You might think** the strongest ascent is where the vorticity is largest. **Actually** it is where the vorticity *advection* changes fastest with height. The trough axis itself has maximum vorticity but zero vorticity advection (the flow is parallel to the vorticity contours there), so the ascent is downstream of it, not at it. Getting this wrong puts the rain in the wrong place by several hundred kilometres.

## One-liner

> The atmosphere is geostrophic to within about ten percent, and that ten percent is the weather: divergence aloft forces the ascent that makes cloud and rain, and a surface low deepens only when the outflow above it beats the frictional inflow below.

## Problems

**P1 (🟢)** Upper-level divergence of $8\times10^{-6}\ \mathrm{s^{-1}}$ acts over a layer 6 km deep. (a) Compute the vertical velocity in cm s⁻¹. (b) How far does air rise in 8 hours?

**P2 (🟡)** A surface low has frictional convergence supplying mass at a rate equivalent to a column-averaged $-6\times10^{-6}\ \mathrm{s^{-1}}$ over the lowest 1.5 km, while divergence aloft removes mass at $+1.2\times10^{-5}\ \mathrm{s^{-1}}$ over the top 5 km. (a) Compute the net mass flux imbalance in terms of an equivalent vertical velocity at the level of non-divergence, from each contribution. (b) Is the low deepening or filling? (c) State what would have to change for the answer to reverse.

**P3 (🔴, optional)** Consider an idealized upper-level wave with geostrophic streamfunction $\psi = -\bar u y + A\sin(kx)$, so the flow is a westerly with a superposed wave. (a) Compute the relative vorticity $\zeta_g = \nabla^2\psi$. (b) Compute the vorticity advection $-\mathbf{v}_g\cdot\nabla\zeta_g$, treating the advecting wind as the mean westerly $\bar u$ alone. (c) Identify where the advection is most strongly cyclonic, relative to the trough axis (which is at the minimum of $\psi$'s wave part), and state what the omega equation then predicts for the vertical motion there.

<details>
<summary>Solutions</summary>

**P1** (a) $$w = |\nabla\cdot\mathbf{v}_H|\,\Delta z = 8\times10^{-6} \times 6\times10^{3} = 4.8\times10^{-2}\ \mathrm{m\,s^{-1}} = 4.8\ \mathrm{cm\,s^{-1}}.$$

(b) $$\Delta z = 4.8\times10^{-2} \times (8 \times 3600) = 4.8\times10^{-2} \times 2.88\times10^{4} = 1382\ \mathrm{m}.$$

*Check.* Nearly 1.4 km of lift, comfortably enough to take moist boundary-layer air past a typical 1 km LCL and produce a substantial cloud deck — from a divergence that is a hundred-thousandth per second.

**P2** (a) Each contribution gives an equivalent vertical velocity at the level of non-divergence:

*From below:* $w_{\text{low}} = 6\times10^{-6} \times 1.5\times10^{3} = 9.0\times10^{-3}\ \mathrm{m\,s^{-1}} = 0.9\ \mathrm{cm\,s^{-1}}$ upward (convergence feeds ascent).

*From above:* $w_{\text{up}} = 1.2\times10^{-5} \times 5\times10^{3} = 6.0\times10^{-2}\ \mathrm{m\,s^{-1}} = 6.0\ \mathrm{cm\,s^{-1}}$ upward (divergence demands ascent).

(b) The divergence aloft demands 6.0 cm s⁻¹ of ascent while frictional convergence can only supply 0.9 cm s⁻¹. The upper flow is evacuating the column **6.7 times faster** than friction is refilling it, so mass is being removed net and the surface pressure must **fall**: the low is **deepening**.

(c) The answer reverses if the upper-level divergence weakens below the frictional supply — that is, if $1.2\times10^{-5}\times5\times10^{3} < 6\times10^{-6}\times1.5\times10^{3}$, requiring the upper divergence to fall below $1.8\times10^{-6}\ \mathrm{s^{-1}}$, a factor of nearly 7. This is exactly what happens as a cyclone occludes: the upper trough becomes vertically stacked over the surface low, the differential vorticity advection goes to zero, the divergence aloft collapses, and friction finally wins. The low fills. That is the mechanism behind [4.5](04-05-air-masses-fronts-cyclones.md)'s claim that occlusion marks the beginning of decay.

**P3** (a) $$\zeta_g = \nabla^2\psi = \frac{\partial^2\psi}{\partial x^2} + \frac{\partial^2\psi}{\partial y^2} = -Ak^2\sin(kx) + 0 = -Ak^2\sin(kx).$$

(b) With the advecting wind taken as $\mathbf{v}_g \approx (\bar u, 0)$,

$$-\mathbf{v}_g\!\cdot\!\nabla\zeta_g = -\bar u\frac{\partial\zeta_g}{\partial x} = -\bar u\left(-Ak^3\cos(kx)\right) = \bar u Ak^3\cos(kx).$$

(c) The trough axis is where $\zeta_g$ is most cyclonic (most positive). With the sign convention above, $\zeta_g = -Ak^2\sin(kx)$ is maximal where $\sin(kx) = -1$, i.e. $kx = 3\pi/2$. The advection $\bar u Ak^3\cos(kx)$ is zero there (since $\cos(3\pi/2) = 0$) and reaches its **maximum a quarter-wavelength downstream**, at $kx = 2\pi$, where $\cos = +1$.

So the strongest **positive (cyclonic) vorticity advection lies a quarter-wavelength east of the trough axis** — and since that advection is stronger aloft than near the surface, the omega equation's first forcing term predicts **ascent** there.

*Consequences.* Three follow immediately, and all are observed. Ascent, hence cloud and precipitation, sits *downstream* of the upper trough, not under it. The surface low, which forms under the ascent, is likewise displaced east of the trough — the westward tilt with height characteristic of a developing cyclone. And when the system occludes and that tilt vanishes, so does the advection maximum, and so does the development, exactly as P2(c) found by a completely different route.

</details>

## Flashback

**From Lesson 5.1 (Vorticity & circulation):** A column at 45°N has $\zeta = 3\times10^{-5}\ \mathrm{s^{-1}}$ and experiences convergence of $-1.5\times10^{-5}\ \mathrm{s^{-1}}$ for 9 hours. (a) Compute its absolute vorticity initially. (b) Compute its relative vorticity at the end. (c) By what factor did the relative vorticity grow?

<details>
<summary>Solution</summary>

(a) $f_{45} = 1.031\times10^{-4}\ \mathrm{s^{-1}}$, so

$$\eta_0 = 3\times10^{-5} + 1.031\times10^{-4} = 1.331\times10^{-4}\ \mathrm{s^{-1}}.$$

(b) With constant divergence, $D\eta/Dt = -\eta\nabla\cdot\mathbf{v}$ integrates to $\eta = \eta_0e^{|\nabla\cdot\mathbf{v}|t}$, and $t = 9\times3600 = 3.24\times10^{4}$ s:

$$\eta = 1.331\times10^{-4}\,e^{1.5\times10^{-5}\times3.24\times10^{4}} = 1.331\times10^{-4}\,e^{0.486} = 1.331\times10^{-4}\times1.626 = 2.164\times10^{-4}\ \mathrm{s^{-1}},$$

$$\zeta = 2.164\times10^{-4} - 1.031\times10^{-4} = 1.13\times10^{-4}\ \mathrm{s^{-1}}.$$

(c) $$\frac{1.13\times10^{-4}}{3\times10^{-5}} = 3.8.$$

The relative vorticity nearly quadrupled, while the *absolute* vorticity grew by only 63 percent — because the planetary part $f$ is fixed, so all the growth in $\eta$ is delivered to $\zeta$. This amplification of the relative part is why convergence is such an effective cyclogenesis mechanism, and it is the process this lesson has now supplied a *cause* for: the convergence itself comes from divergence aloft.

</details>

## Connections

- **Backward:** the vorticity budget is [5.1](05-01-vorticity-circulation.md)'s, the wave whose advection pattern does the forcing is [5.3](05-03-rossby-waves-beta-effect.md)'s, and the thickness argument behind warm-advection ascent is [1.2](01-02-hydrostatic-equation-barometric-law.md)'s. This lesson supplies the machinery [4.5](04-05-air-masses-fronts-cyclones.md) asserted.
- **Forward:** [6.1](06-01-atmospheric-boundary-layer.md) quantifies the frictional convergence that opposes deepening and gives the cyclone's spin-down time; [6.5](06-05-predictability-two-week-limit.md) explains why errors in this small ageostrophic residual are what destroy a forecast.
- **Sideways (PDEs):** the omega equation is an elliptic boundary-value problem — a Poisson-like equation whose solution at any point depends on the forcing everywhere, exactly the structure of [`pdes` 2.3](../../pdes/lessons/02-03-laplace-poisson-equations.md). That is why vertical motion is *diagnostic* rather than prognostic: it is determined instantaneously by the whole flow field, with no time evolution of its own.
