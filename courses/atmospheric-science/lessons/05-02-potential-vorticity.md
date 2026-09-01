# Atmospheric Science · Lesson 5.2: Potential vorticity

> ⏱ ~15 min · Module 5: Vorticity, waves & vertical motion · Builds on: [5.1 Vorticity & circulation](05-01-vorticity-circulation.md), [1.4 Potential temperature](01-04-potential-temperature.md) · Unlocks: 5.3 (Rossby waves), 6.3 (tropical cyclones)

## Why this matters

Lesson 5.1 gave a vorticity equation with a source term on the right-hand side, which means absolute vorticity is *not* conserved — you have to know the divergence to predict anything. That is unsatisfying, and it is fixable. Divide the absolute vorticity by the depth of the column carrying it and the source term disappears: the result is **potential vorticity**, and it is conserved following the flow. That single move does for dynamic meteorology what potential temperature did for thermodynamics in [1.4](01-04-potential-temperature.md) — it produces a *tag* that travels with an air mass, so you can recognize the same air again and predict what it will do. PV is the organizing quantity of modern dynamical meteorology, and once you have it, results that took pages of algebra become one line of bookkeeping.

## The idea

**The skater, again.** A spinning column of air stretched vertically must get narrower, and a narrowing spinning thing speeds up — conservation of angular momentum, the ice skater pulling in their arms. Lesson 5.1 wrote this as a source term. But notice what the argument really says: the spin and the depth change *together*, in proportion. So their **ratio** does not change at all.

$$\frac{\text{absolute spin}}{\text{column depth}} = \text{constant, following the parcel.}$$

That ratio is potential vorticity. The source term of [5.1](05-01-vorticity-circulation.md) has not been eliminated by approximation — it has been *absorbed into the variable*, which is exactly what happened when [1.4](01-04-potential-temperature.md) turned the non-conserved $T$ into the conserved $\theta$.

**Why "potential."** The name means the same thing it does in "potential temperature": *the value this quantity would have if you brought the parcel to a standard state* — here, a standard column depth. Two parcels with the same PV are dynamically the same air, wherever you find them and whatever shape they have currently been squeezed into.

**The mountain, which is the whole lesson in one picture.** Send a column of air with no spin at all across a mountain range. Going up the windward slope the ground rises but the tropopause above does not, so the column is **squashed**. Its depth falls, so its absolute vorticity must fall too — and since it started with exactly the planetary value $f$, it must acquire *negative relative* vorticity: anticyclonic curvature over the crest, turning the flow to the right.

Coming down the lee side the column stretches back to its original depth, so its absolute vorticity returns to $f$. But by now the anticyclonic turn has carried it to a **lower latitude**, where $f$ is smaller. Absolute vorticity back at the original value, planetary vorticity now smaller, so the difference — the *relative* vorticity — is positive. **A cyclonic trough appears downstream of every major mountain range**, purely from bookkeeping. That is the standing trough east of the Rockies, and the reason so many North American storms are born in Colorado.

## The formal version

**Shallow-water PV.** Consider a layer of air of depth $h$ between two material surfaces. Mass conservation says a column that thins must spread horizontally, which links the divergence to the depth: $\nabla\cdot\mathbf{v} = -\dfrac{1}{h}\dfrac{Dh}{Dt}$. Substituting into [5.1](05-01-vorticity-circulation.md)'s vorticity equation,

$$\frac{D\eta}{Dt} = -\eta\nabla\cdot\mathbf{v} = \frac{\eta}{h}\frac{Dh}{Dt} \qquad\Longrightarrow\qquad \frac{1}{\eta}\frac{D\eta}{Dt} - \frac{1}{h}\frac{Dh}{Dt} = 0,$$

which is exactly $\dfrac{D}{Dt}\ln(\eta/h) = 0$. Therefore

$$\boxed{\ \frac{D}{Dt}\left(\frac{\zeta+f}{h}\right) = 0\ }$$

*In words: a column of air conserves its absolute vorticity divided by its depth, following the motion.* This is **Rossby's potential vorticity**, and it is exact for a shallow, frictionless, barotropic fluid.

**Ertel PV, the real-atmosphere version.** In a stratified atmosphere the "column depth" is replaced by the vertical spacing between isentropic surfaces — because adiabatic flow is confined to those surfaces ([1.4](01-04-potential-temperature.md)), they are the material lids. That gives **Ertel potential vorticity**,

$$\boxed{\ q = -g\,(\zeta_\theta + f)\,\frac{\partial\theta}{\partial p}\ }$$

where $\zeta_\theta$ is the vorticity evaluated *on* an isentropic surface. *In words: PV is absolute vorticity times static stability.* Conserved for adiabatic, frictionless flow. The units are awkward enough to deserve their own name:

$$1\ \mathrm{PVU} = 10^{-6}\ \mathrm{K\,m^2\,kg^{-1}\,s^{-1}}.$$

**The dynamic tropopause.** Evaluate $q$ in the two layers:

| Region | $\partial\theta/\partial p$ | $q$ |
|---|---|---|
| Troposphere | $\approx -4\times10^{-4}\ \mathrm{K\,Pa^{-1}}$ (weak stability) | $\approx 0.4$ PVU |
| Stratosphere | $\approx -6\times10^{-3}\ \mathrm{K\,Pa^{-1}}$ (strong stability) | $\approx 6$ PVU |

An order of magnitude apart, and the jump is sharp. So **the 2 PVU surface is used as the definition of the tropopause** — the "dynamic tropopause" — and it is far more useful than a temperature-based definition, because it is a *material* surface that air cannot cross without diabatic heating. A downward bulge of the 2 PVU surface is a stratospheric intrusion, and it is the single most reliable signature of a developing surface cyclone.

**Invertibility.** PV has a property no other diagnostic has: given the PV field everywhere, plus a balance condition (geostrophy) and boundary conditions, you can **recover the entire wind and temperature field**. PV is not one diagnostic among many; it is a complete description. In practice this means a forecaster can look at a PV anomaly — a blob of stratospheric air pushed down into the troposphere — and read off the circulation it induces beneath it, without solving anything. This is "PV thinking," and it is how the modern textbooks organize the subject.

## Picture

![A column of air crossing a mountain range under a fixed tropopause lid: upstream it is 8 km deep with no spin, over the crest it is squashed to 6 km and must therefore spin anticyclonically, and downstream it stretches back to 8 km and emerges with cyclonic spin — the lee trough — with the conserved ratio of absolute vorticity to depth labelled](assets/05-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — the lee trough).** A column of air 8 km deep at 45°N, with $\zeta = 0$, crosses a range that squashes it to 6 km, then returns to 8 km at 40°N. Take $\Omega = 7.292\times10^{-5}\ \mathrm{s^{-1}}$.

*Coriolis parameters.* $f_{45} = 2\Omega\sin45^\circ = 1.031\times10^{-4}\ \mathrm{s^{-1}}$; $f_{40} = 2\Omega\sin40^\circ = 9.374\times10^{-5}\ \mathrm{s^{-1}}$.

*Conserved PV.* $$\frac{\zeta+f}{h} = \frac{0 + 1.031\times10^{-4}}{8000} = 1.289\times10^{-8}\ \mathrm{m^{-1}s^{-1}}.$$

*Over the crest* (still at 45°N, $h = 6000$ m):

$$\zeta + f = 1.289\times10^{-8}\times6000 = 7.734\times10^{-5}, \qquad \zeta = 7.734\times10^{-5} - 1.031\times10^{-4} = -2.58\times10^{-5}\ \mathrm{s^{-1}}.$$

**Anticyclonic**, as the picture demands: a squashed column spins down, and to get below the planetary value it must turn backwards relative to the ground.

*Downstream* ($h = 8000$ m again, but now at 40°N):

$$\zeta + f = 1.289\times10^{-8}\times8000 = 1.031\times10^{-4}, \qquad \zeta = 1.031\times10^{-4} - 9.374\times10^{-5} = +9.4\times10^{-6}\ \mathrm{s^{-1}}.$$

**Cyclonic** — the lee trough. The column recovered its absolute vorticity exactly, but it is now at a latitude where the planet supplies less of it, so the balance appears as relative spin.

*The counterfactual.* Had the column returned to 8 km still at 45°N, we would get $\zeta = 1.031\times10^{-4} - 1.031\times10^{-4} = 0$ — no trough at all. **So the trough is entirely due to the latitude change**, not the squashing. The mountain's role was to turn the flow equatorward; the vorticity change came from $f$. That is the sense in which the $\beta$ effect of [5.3](05-03-rossby-waves-beta-effect.md) is already lurking here.

**Example 2 (why you'd care — a stratospheric intrusion spins up a storm).** A tongue of stratospheric air ($q = 6$ PVU) is drawn down into the mid-troposphere, where the surrounding air has $q = 0.4$ PVU. What does it do?

The intruding air carries a **large positive PV anomaly**, and by invertibility a positive PV anomaly induces a cyclonic circulation around itself — one that extends both above *and below* the anomaly, decaying away from it over a vertical scale $f L/N$ (the Rossby height, of order a few kilometres for a synoptic $L$).

So the intrusion reaches down and spins up cyclonic flow *at the surface*, beneath it. If that induced surface circulation sits over a low-level baroclinic zone — a front, with its own warm-air PV anomaly — the two anomalies reinforce each other, each strengthening the flow that advects the other. That mutual amplification **is** baroclinic instability of [4.5](04-05-air-masses-fronts-cyclones.md), restated in PV language, and it is far more transparent this way: two anomalies, phase-locked, feeding each other.

*The practical upshot.* Forecasters look at maps of pressure on the 2 PVU surface. Where that surface dips low — where the stratosphere is reaching down — is where cyclogenesis is about to happen, hours before there is anything to see in the surface pressure field. The answer to "what deepens the low," asserted without machinery back in [4.5](04-05-air-masses-fronts-cyclones.md), is: a PV anomaly aloft arrived over a baroclinic zone below.

## Watch out

- **You might think** PV is conserved always. **Actually** it is conserved for **adiabatic, frictionless** flow. Latent heat release in a storm *creates* PV below the heating and destroys it above; friction destroys it near the ground. Those are not failures of the concept — diabatic PV generation is precisely how a hurricane builds its own warm-core vortex ([6.3](06-03-tropical-cyclones-tropics.md)).
- **You might think** the depth $h$ is the distance to the ground. **Actually** it is the separation between two *material* surfaces — surfaces the air cannot cross. In the shallow-water model those are the free surface and the bottom; in the real atmosphere they are isentropes, which is why Ertel PV contains $\partial\theta/\partial p$ rather than a geometric depth.
- **You might think** the lee trough forms because the mountain "pushes" the air. **Actually** the squashing over the crest gives *anti*cyclonic vorticity, the opposite sign to the trough. The trough appears only after the flow has been deflected equatorward and stretched back — it is a $f$-change effect, as Example 1's counterfactual shows.
- **You might think** the 2 PVU tropopause is a different surface from the thermal tropopause of [1.1](01-01-composition-vertical-structure.md). **Actually** they nearly coincide, because the same stability jump defines both. The dynamic definition is preferred because it is materially conserved and therefore usable in a prediction, whereas a lapse-rate criterion is not.

## One-liner

> Divide absolute vorticity by column depth and the source term vanishes: potential vorticity is a tag that travels with the air, and a single conservation law delivers the lee trough, the dynamic tropopause and cyclogenesis.

## Problems

**P1 (🟢)** A column of air 9 km deep at 50°N has $\zeta = 0$. It is stretched to 11 km while remaining at 50°N. Find its new relative vorticity and state its sense.

**P2 (🟡)** Compute Ertel PV for two soundings at 45°N, both with $\zeta = 0$: (a) a tropospheric layer where $\theta$ rises from 300 K at 900 hPa to 320 K at 500 hPa; (b) a stratospheric layer where $\theta$ rises from 350 K at 200 hPa to 420 K at 100 hPa. (c) Which is the stratosphere by the 2 PVU criterion, and by how much?

**P3 (🔴, optional)** A hurricane's eyewall convection releases latent heat, which is diabatic and therefore violates PV conservation. (a) Ertel PV can be shown to obey $Dq/Dt \propto (\zeta_a\cdot\nabla)\dot\theta$, where $\dot\theta$ is the diabatic heating rate. Given that heating *increases* upward in the lower half of a convective tower and *decreases* upward in the upper half, state where PV is created and where it is destroyed. (b) Explain how this builds a warm-core vortex. (c) Say why this means a hurricane is not simply "baroclinic instability in the tropics."

<details>
<summary>Solutions</summary>

**P1** At 50°N, $f = 1.4584\times10^{-4}\sin50^\circ = 1.117\times10^{-4}\ \mathrm{s^{-1}}$. Conserving PV:

$$\frac{0 + 1.117\times10^{-4}}{9000} = \frac{\zeta + 1.117\times10^{-4}}{11\,000},$$

$$\zeta + f = 1.117\times10^{-4}\times\frac{11\,000}{9000} = 1.117\times10^{-4}\times1.2222 = 1.365\times10^{-4},$$

$$\zeta = 1.365\times10^{-4} - 1.117\times10^{-4} = 2.48\times10^{-5}\ \mathrm{s^{-1}} \quad\text{(cyclonic)}.$$

*Check.* Stretching increases spin, so cyclonic is the expected sign. Note the fractional change: depth up 22 percent, absolute vorticity up 22 percent — exactly proportional, which is the conservation law restated.

**P2** Use $q = -g(\zeta+f)\,\partial\theta/\partial p$ with $f = 1.031\times10^{-4}\ \mathrm{s^{-1}}$ and $\zeta = 0$.

(a) $$\frac{\partial\theta}{\partial p} = \frac{320-300}{(500-900)\times100\ \mathrm{Pa}} = \frac{20}{-4\times10^{4}} = -5.0\times10^{-4}\ \mathrm{K\,Pa^{-1}},$$

$$q = -9.81 \times 1.031\times10^{-4} \times (-5.0\times10^{-4}) = 5.06\times10^{-7} = \mathbf{0.51\ PVU}.$$

(b) $$\frac{\partial\theta}{\partial p} = \frac{420-350}{(100-200)\times100} = \frac{70}{-10^{4}} = -7.0\times10^{-3}\ \mathrm{K\,Pa^{-1}},$$

$$q = -9.81 \times 1.031\times10^{-4} \times (-7.0\times10^{-3}) = 7.08\times10^{-6} = \mathbf{7.08\ PVU}.$$

(c) Layer (b) is the **stratosphere**: 7.08 PVU is more than three times the 2 PVU threshold, while layer (a) at 0.51 PVU is a quarter of it. The two differ by a factor of **14**, and the entire difference comes from the static stability — both layers have identical vorticity, and the only thing that changed is how tightly the isentropes are packed. That is why PV is such a clean tropopause marker.

**P3** (a) PV is **created where the heating increases upward** — that is, in the **lower half** of the tower, below the level of maximum heating — and **destroyed above it**, in the upper half. (The heating gradient tilts and stretches the isentropic surfaces: below the heating maximum, isentropes are drawn together, raising the stability term.)

(b) The created PV sits in the **lower and middle troposphere within the eyewall**, a compact, intense positive PV anomaly. By invertibility, a positive PV anomaly induces a cyclonic circulation around itself and, because the anomaly is associated with tightly packed isentropes, a **warm** anomaly above and a cold one below — the classic warm core. The stronger the vortex, the stronger the surface winds, the greater the evaporation from the sea, the more latent heat released, and the more PV created. That is the WISHE feedback of [6.3](06-03-tropical-cyclones-tropics.md), stated in PV terms.

(c) Because the **energy source is completely different**. Baroclinic instability ([4.5](04-05-air-masses-fronts-cyclones.md)) draws on the *available potential energy already stored* in a horizontal temperature gradient — it rearranges existing energy and is therefore self-limiting, dying when the gradient is destroyed. A hurricane draws on the *thermodynamic disequilibrium between the ocean and the atmosphere*, continuously replenished by the sea, and it **creates** its own PV rather than concentrating pre-existing PV. That is why hurricanes need warm water and mid-latitude cyclones need a temperature contrast, why hurricanes have warm cores and mid-latitude cyclones cold ones, and why hurricanes die over land while mid-latitude cyclones do not care.

*Check.* The distinction shows up in the PV budget: for a mid-latitude cyclone $Dq/Dt \approx 0$ and the storm redistributes PV; for a hurricane $Dq/Dt \gg 0$ in the core and the storm manufactures it. Same equation, opposite dominant term.

</details>

## Flashback

**From Lesson 4.4 (Thermal wind, the general circulation & wind belts):** At 40°N the 1000-to-500 hPa thickness falls by 200 m over 500 km toward the north. (a) Compute the thermal wind. (b) State its direction. (c) If the 1000 hPa wind is calm, what is the 500 hPa geostrophic wind?

<details>
<summary>Solution</summary>

(a) $f = 1.4584\times10^{-4}\sin40^\circ = 9.374\times10^{-5}\ \mathrm{s^{-1}}$, so

$$V_T = \frac{g}{f}\frac{\partial(\Delta Z)}{\partial n} = \frac{9.81}{9.374\times10^{-5}}\times\frac{200}{5\times10^{5}} = 1.0465\times10^{5}\times4.0\times10^{-4} = 41.9\ \mathrm{m\,s^{-1}}.$$

(b) Thinner (colder) air lies to the north, and the thermal wind blows with cold air on its left — so it points **east**: a westerly thermal wind.

(c) If the 1000 hPa wind is calm, then $\mathbf{V}_g(500) = \mathbf{V}_g(1000) + \mathbf{V}_T = 0 + \mathbf{V}_T$, so the 500 hPa geostrophic wind is a **westerly of 41.9 m s⁻¹** — a jet-strength wind produced by a temperature gradient alone.

*Check.* Connecting to this lesson: that 42 m s⁻¹ westerly has enormous *shear* vorticity on its flanks (by [5.1](05-01-vorticity-circulation.md)'s Example 1), and the tightly packed isentropes implied by such a sharp thickness gradient mean a large $\partial\theta/\partial p$ — hence a PV gradient. A strong thermal wind and a strong PV gradient are the same situation described twice, which is why baroclinic instability can be derived from either.

</details>

## Connections

- **Backward:** this converts [5.1](05-01-vorticity-circulation.md)'s source term into a conservation law by the same trick [1.4](01-04-potential-temperature.md) used on temperature — divide out the thing that was changing. The isentropic surfaces that serve as material lids are that lesson's.
- **Forward:** [5.3](05-03-rossby-waves-beta-effect.md) applies PV conservation to a parcel displaced in latitude and gets a wave; [5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md) supplies the vertical motion that PV anomalies force; [6.3](06-03-tropical-cyclones-tropics.md) uses diabatic PV generation to build a hurricane.
- **Sideways (fluid dynamics):** shallow-water PV conservation is Kelvin's circulation theorem ([`fluid-dynamics` 2.3](../../fluid-dynamics/lessons/02-03-kelvin-circulation-theorem.md)) applied to a material column: the circulation around the column is fixed, and the area it encloses varies inversely with its depth by mass conservation, so vorticity over depth is constant.
