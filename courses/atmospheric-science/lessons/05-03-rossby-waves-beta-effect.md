# Atmospheric Science · Lesson 5.3: Rossby waves & the beta effect

> ⏱ ~15 min · Module 5: Vorticity, waves & vertical motion · Builds on: [5.2 Potential vorticity](05-02-potential-vorticity.md), [5.1 Vorticity & circulation](05-01-vorticity-circulation.md) · Unlocks: 5.4 (vertical motion), 6.5 (predictability)

## Why this matters

Look at any upper-air chart and the jet stream is not a smooth ring around the pole — it meanders in a handful of great north–south loops that circle the globe. Those loops are **Rossby waves**, and they are the largest organized structures in the atmosphere. They steer every surface cyclone, they decide which continent gets an Arctic outbreak in January, they lock into place for weeks at a time as "blocking" patterns that produce heatwaves and floods, and they are the reason a forecast beyond about a week is a forecast of the wave pattern rather than of the weather. Lesson 4.4 mentioned them in passing and moved on. Here they are derived — from nothing but the fact that $f$ varies with latitude, plus the conservation law of [5.2](05-02-potential-vorticity.md).

## The idea

**The restoring force is the change in $f$.** Take a chain of air parcels sitting quietly along a latitude circle, and nudge one of them northward. By [5.2](05-02-potential-vorticity.md), its absolute vorticity $\zeta + f$ is conserved (take the depth as fixed). But it has moved to a latitude where the planetary contribution $f$ is *larger*. Something must give, and it is $\zeta$: the parcel acquires **negative — anticyclonic — relative vorticity**.

Now ask what that anticyclonic spin does to the parcels either side of it. An anticyclonic circulation in the Northern Hemisphere turns clockwise, so it pushes the air on its **west** side northward and the air on its **east** side southward. The displacement pattern is therefore *reproduced one step to the west* — and the wave propagates westward.

**This is a restoring mechanism, so it is a wave.** A parcel pushed north acquires spin that ultimately pulls it back; overshoot, and the same argument runs in reverse. Rossby waves are to the $\beta$-gradient what buoyancy oscillations ([1.4](01-04-potential-temperature.md)) are to the $\theta$-gradient: displace, get a restoring tendency proportional to the displacement, oscillate. The difference is that the restoring "force" here is not a force at all — it is a conservation law.

**But the mean flow carries them east.** Rossby waves propagate *westward relative to the air they sit in*, while the mid-latitude air itself streams eastward at 20 to 40 m s⁻¹. The wave's speed over the ground is the difference — and crucially, the westward propagation speed grows with the *square* of the wavelength. So:

- **Short waves** (a few thousand km) propagate west only slowly, get swept along by the flow, and move **east** over the ground. These are the individual troughs that steer day-to-day weather.
- **Long waves** (planetary scale) propagate west faster than the flow carries them east, and move **west** over the ground.
- **In between** there is a wavelength where the two cancel exactly: the wave stands still. That **stationary wavelength** is the one that gets anchored by mountains and continents, and it is why the same regions of the globe tend to sit under a trough or a ridge again and again.

## The formal version

**The beta parameter.** Expand $f = 2\Omega\sin\phi$ about a reference latitude, keeping the first-order term. Writing $y$ for northward distance and using $dy = a\,d\phi$,

$$\boxed{\ \beta \equiv \frac{df}{dy} = \frac{1}{a}\frac{d}{d\phi}\big(2\Omega\sin\phi\big) = \frac{2\Omega\cos\phi}{a}\ }$$

*In words: beta is how fast the planetary vorticity changes as you move north.* At 45°N,

$$\beta = \frac{2 \times 7.292\times10^{-5} \times \cos45^\circ}{6.371\times10^{6}} = \frac{1.0312\times10^{-4}}{6.371\times10^{6}} = 1.62\times10^{-11}\ \mathrm{m^{-1}s^{-1}}.$$

The approximation $f \approx f_0 + \beta y$ is the **beta plane**, and it is the minimum ingredient needed for Rossby waves: on an $f$-plane (constant $f$) they do not exist at all.

**The dispersion relation.** Take the barotropic, non-divergent vorticity equation from [5.1](05-01-vorticity-circulation.md) with $\nabla\cdot\mathbf{v} = 0$, so $D(\zeta+f)/Dt = 0$. Linearize about a uniform westerly $\bar u$, write $\zeta = \nabla^2\psi$ for a streamfunction $\psi$, and look for wave solutions $\psi' \propto e^{i(kx + ly - \omega t)}$. The result is

$$\boxed{\ \omega = \bar u k - \frac{\beta k}{K^2}, \qquad c = \frac{\omega}{k} = \bar u - \frac{\beta}{K^2}, \qquad K^2 = k^2 + l^2\ }$$

*In words: a Rossby wave's phase speed is the mean flow minus a westward term that grows as the square of the wavelength.* Everything promised above is in that one minus sign. Evaluating at 45°N with $\bar u = 20\ \mathrm{m\,s^{-1}}$ (taking $l = 0$ for simplicity, so $K = k = 2\pi/L$):

| Wavelength $L$ | $\beta/K^2$ | $c = \bar u - \beta/K^2$ | Direction |
|---|---|---|---|
| 3000 km | 3.7 m s⁻¹ | +16.3 m s⁻¹ | east |
| 4000 km | 6.6 m s⁻¹ | +13.4 m s⁻¹ | east |
| 6000 km | 14.8 m s⁻¹ | +5.2 m s⁻¹ | east, slowly |
| 7000 km | 20.1 m s⁻¹ | −0.1 m s⁻¹ | **stationary** |
| 10 000 km | 41.0 m s⁻¹ | −21.0 m s⁻¹ | west |

**The stationary wavelength.** Setting $c = 0$:

$$\boxed{\ L_s = 2\pi\sqrt{\frac{\bar u}{\beta}}\ }$$

At $\bar u = 20\ \mathrm{m\,s^{-1}}$ and $\beta = 1.62\times10^{-11}$, $L_s = 2\pi\sqrt{1.235\times10^{12}} = 6980$ km. Compare with the circumference of the 45°N latitude circle, $2\pi a\cos45^\circ = 2.83\times10^{4}$ km: dividing, the stationary wave fits around the globe about **4 times**. That is why upper-air charts characteristically show **four to six** planetary waves, and why they are labelled by zonal wavenumber. Note also that $L_s$ grows with $\bar u$: a faster winter jet supports longer stationary waves, so the wave pattern shifts scale with the season.

**Group velocity and downstream development.** Differentiating $\omega$ with respect to $k$ gives, for $l = 0$,

$$c_g = \frac{\partial\omega}{\partial k} = \bar u + \frac{\beta}{k^2},$$

which is **east of the phase speed** — indeed east of the mean flow. Energy propagates downstream faster than the individual troughs do, so a disturbance over the Pacific seeds new development over North America a day or two later without any single trough travelling there. Forecasters call this **downstream development**, and it is a major source of forecast error when the upstream analysis is poor.

**Blocking.** When a long wave amplifies enough that the flow around it closes off, an isolated high sits and refuses to move, diverting the storm track around it for a week or more. Because $c$ is small or negative for such large waves, there is nothing to sweep it along. Blocking highs are responsible for a large fraction of Europe's heatwaves and cold snaps, and predicting their onset and breakdown remains one of the hardest problems in medium-range forecasting.

## Picture

![A material line of air parcels displaced into a sinusoidal wave about a rest latitude, with the northward-displaced crests acquiring anticyclonic spin and the southward-displaced troughs cyclonic spin, the induced meridional flow between them shifting the whole pattern westward, and the dispersion relation labelled](assets/05-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — which way does this trough move?).** A trough at 50°N has a wavelength of 5000 km, embedded in a mean westerly of 25 m s⁻¹. Which way and how fast does it move over the ground?

$$\beta = \frac{2\times7.292\times10^{-5}\times\cos50^\circ}{6.371\times10^{6}} = \frac{1.4584\times10^{-4}\times0.6428}{6.371\times10^{6}} = 1.472\times10^{-11}\ \mathrm{m^{-1}s^{-1}},$$

$$k = \frac{2\pi}{5\times10^{6}} = 1.2566\times10^{-6}\ \mathrm{m^{-1}}, \qquad k^2 = 1.579\times10^{-12}\ \mathrm{m^{-2}},$$

$$c = \bar u - \frac{\beta}{k^2} = 25 - \frac{1.472\times10^{-11}}{1.579\times10^{-12}} = 25 - 9.32 = 15.7\ \mathrm{m\,s^{-1}}\ \text{eastward}.$$

*Interpretation.* The trough moves east at about 16 m s⁻¹, or 1360 km per day — roughly the observed progression of a mid-latitude short-wave trough. Note it moves at only 63 percent of the mean wind: the westward Rossby propagation is holding it back, which is why troughs always lag the wind speed and why "steering flow" rules of thumb use a fraction of the 500 hPa wind rather than the wind itself.

**Example 2 (why you'd care — why the jet buckles in winter, and what that does).** In summer $\bar u \approx 15\ \mathrm{m\,s^{-1}}$ at 45°N; in winter $\bar u \approx 35\ \mathrm{m\,s^{-1}}$ ([4.4](04-04-thermal-wind-general-circulation.md), Example 2). Compute the stationary wavelength in each season and interpret.

$$L_s^{\text{summer}} = 2\pi\sqrt{\frac{15}{1.62\times10^{-11}}} = 2\pi\sqrt{9.26\times10^{11}} = 2\pi \times 9.62\times10^{5} = 6050\ \mathrm{km},$$

$$L_s^{\text{winter}} = 2\pi\sqrt{\frac{35}{1.62\times10^{-11}}} = 2\pi\sqrt{2.16\times10^{12}} = 2\pi \times 1.470\times10^{6} = 9240\ \mathrm{km}.$$

Dividing into the 45°N circumference of 28 300 km: summer supports wavenumber $28\,300/6050 = 4.7$, winter wavenumber $28\,300/9240 = 3.1$.

*What this means.* In winter the atmosphere prefers **fewer, longer, larger-amplitude** stationary waves — typically wavenumber 3 — while summer prefers a shorter, more numerous, flatter pattern. Longer waves reach further meridionally, so a winter wavenumber-3 pattern can drag genuinely Arctic air deep into North America and genuinely subtropical air up to Scandinavia at the same time. That is why winter weather is not just colder on average but far more *variable*: the wave pattern that the season selects is the one that mixes latitudes hardest.

*And it constrains the mountains.* Because the Rockies and the Tibetan Plateau are fixed in place, they anchor the stationary wave — but only if the wave's natural length is compatible with their spacing. When $\bar u$ drifts so that $L_s$ no longer fits, the pattern reorganizes, sometimes abruptly. That transition is one of the ways a blocking episode begins.

## Watch out

- **You might think** Rossby waves propagate eastward because that is how troughs move on a weather map. **Actually** they propagate *westward relative to the air*; what you see on a map is the sum of that and a stronger eastward mean flow. Get this backwards and the whole wavelength dependence inverts.
- **You might think** $\beta$ is largest where $f$ is largest. **Actually** $f \propto \sin\phi$ peaks at the pole while $\beta \propto \cos\phi$ peaks at the **equator** and vanishes at the pole. Rossby waves are therefore most vigorous in the tropics and subtropics — equatorial Rossby waves are central to ENSO — and are weak near the pole where $\beta \to 0$.
- **You might think** the wave carries air around the loops. **Actually** it is a *wave*: air streams through the pattern much as water passes through an ocean swell. Individual parcels oscillate meridionally; the pattern is what propagates, and it can propagate in the opposite direction to the air.
- **You might think** a blocking high is just a large anticyclone. **Actually** it is a *stalled Rossby wave* — a large-amplitude, near-stationary long wave. Its persistence comes from having almost zero phase speed, not from unusual strength, which is why blocks last for weeks while ordinary highs pass in days.

## One-liner

> Because $f$ grows northward, a displaced parcel must change its relative vorticity — and that spin drags the displacement pattern westward, giving $c = \bar u - \beta/K^2$: short waves ride east with the flow, long waves march west, and one wavelength stands still.

## Problems

**P1 (🟢)** Compute $\beta$ at 30°N and at 60°N. Which is larger, and what does that imply about where Rossby waves propagate fastest relative to the flow?

**P2 (🟡)** A wave at 45°N has a wavelength of 9000 km in a mean westerly of 18 m s⁻¹. Take $\beta = 1.62\times10^{-11}\ \mathrm{m^{-1}s^{-1}}$. (a) Compute the phase speed and state its direction. (b) Compute the group velocity. (c) Explain in one sentence what the sign difference between (a) and (b) means physically.

**P3 (🔴, optional)** Derive the westward propagation qualitatively from PV conservation, without the dispersion relation. Consider parcels along a latitude circle at $y = 0$, displaced to $y'(x) = A\sin(kx)$, with the depth held constant. (a) Using conservation of $\zeta + f$ and $f \approx f_0 + \beta y$, find $\zeta'(x)$ in terms of $A$, $\beta$ and $k$. (b) Sketch in words where the induced meridional velocity is northward and where it is southward. (c) Conclude which way the displacement pattern shifts, and explain why the effect is stronger for long waves.

<details>
<summary>Solutions</summary>

**P1** $$\beta(30^\circ) = \frac{2\times7.292\times10^{-5}\times\cos30^\circ}{6.371\times10^{6}} = \frac{1.4584\times10^{-4}\times0.8660}{6.371\times10^{6}} = 1.982\times10^{-11}\ \mathrm{m^{-1}s^{-1}},$$

$$\beta(60^\circ) = \frac{1.4584\times10^{-4}\times0.5}{6.371\times10^{6}} = 1.145\times10^{-11}\ \mathrm{m^{-1}s^{-1}}.$$

**30°N is larger**, by a factor of 1.73 — the ratio $\cos30^\circ/\cos60^\circ$.

Since the westward propagation speed is $\beta/K^2$, Rossby waves propagate westward *fastest relative to the flow at low latitudes*. Combined with the weaker mean westerlies there, this is why subtropical and tropical wave patterns are more likely to be westward-moving over the ground, while mid-latitude waves are swept east.

**P2** (a) $$k = \frac{2\pi}{9\times10^{6}} = 6.981\times10^{-7}\ \mathrm{m^{-1}}, \qquad k^2 = 4.874\times10^{-13}\ \mathrm{m^{-2}},$$

$$\frac{\beta}{k^2} = \frac{1.62\times10^{-11}}{4.874\times10^{-13}} = 33.2\ \mathrm{m\,s^{-1}},$$

$$c = 18 - 33.2 = -15.2\ \mathrm{m\,s^{-1}} \quad\text{— \textbf{westward} at 15 m s}^{-1}.$$

(b) $$c_g = \bar u + \frac{\beta}{k^2} = 18 + 33.2 = +51.2\ \mathrm{m\,s^{-1}} \quad\text{eastward}.$$

(c) The **pattern moves west while its energy moves east** — and fast. So a disturbance seeded upstream propagates its influence downstream far quicker than any individual trough travels, which is exactly the downstream development described in the lesson: a new trough can appear thousands of kilometres east within a day, without anything having travelled there.

*Check.* Note $c_g - \bar u = +33.2$ and $c - \bar u = -33.2$ — the group and phase velocities sit symmetrically about the mean flow for this case, a neat consequence of $\omega$ being linear in $k$ divided by $k^2$.

**P3** (a) Conservation of $\zeta + f$ for parcels starting with $\zeta = 0$ at $y = 0$, where $f = f_0$:

$$\zeta' + (f_0 + \beta y') = f_0 \qquad\Longrightarrow\qquad \zeta' = -\beta y' = -\beta A\sin(kx).$$

So the induced relative vorticity is **exactly out of phase with the displacement**: maximum anticyclonic ($\zeta' < 0$) at the northward crests, maximum cyclonic at the southward troughs.

(b) An anticyclonic centre at a northward crest turns clockwise, driving air **northward on its western side** and **southward on its eastern side**. The cyclonic centre at a trough does the mirror thing: southward on its west, northward on its east. Combining, the meridional velocity is northward a quarter-wavelength *west* of each crest and southward a quarter-wavelength *west* of each trough.

(c) Northward motion just west of a crest means the crest is being **rebuilt to the west** while it decays to the east: the whole pattern shifts **westward**. 

Why long waves are faster: the induced vorticity $\zeta' = -\beta A\sin(kx)$ depends on $A$ but **not** on $k$ — it is the same for any wavelength. But the *velocity* that vorticity induces scales with the size of the circulation, $v' \sim \zeta'/k$, and the *time* for that velocity to shift the pattern by a fixed fraction of a wavelength scales as $1/(kv')$. Putting these together, the phase speed goes as $\zeta'/k^2 \propto \beta/k^2$ — recovering the dispersion relation's wavelength dependence from the physical picture alone. A long wave has the same restoring vorticity spread over a much bigger circulation, so it moves the pattern much faster.

</details>

## Flashback

**From Lesson 4.2 (The Coriolis effect):** Air moves northward from the equator conserving its absolute angular momentum about Earth's axis, reaching latitude $\phi$ with eastward velocity $u = \Omega a\sin^2\phi/\cos\phi$ relative to the ground. (a) Evaluate at 25 degrees. (b) Compare with the observed subtropical jet of 40 to 60 m s⁻¹ and explain the discrepancy.

<details>
<summary>Solution</summary>

(a) With $\Omega a = 7.292\times10^{-5} \times 6.371\times10^{6} = 464.6\ \mathrm{m\,s^{-1}}$:

$$u = 464.6 \times \frac{\sin^2 25^\circ}{\cos25^\circ} = 464.6 \times \frac{(0.4226)^2}{0.9063} = 464.6 \times \frac{0.1786}{0.9063} = 464.6 \times 0.1970 = 91.5\ \mathrm{m\,s^{-1}}.$$

(b) The observed subtropical jet is 40 to 60 m s⁻¹ — roughly **half** the angular-momentum-conserving value. The discrepancy is real physics, not error: air does *not* conserve its angular momentum all the way poleward, because long before it gets there the shear becomes large enough for the flow to break down into **eddies**, which mix momentum and slow it down. The strong shear also makes the flow baroclinically unstable.

*Check.* This is why the Hadley cell terminates near 30 degrees ([4.2](04-02-coriolis-effect.md), P3): the angular-momentum-conserving wind reaches unsustainable values, and the eddies that take over the poleward transport are — as this lesson shows — Rossby waves and the cyclones embedded in them. The connection is direct: Rossby waves exist precisely because $\beta \ne 0$, and $\beta \ne 0$ is the same sphericity that makes angular-momentum conservation produce runaway winds.

</details>

## Connections

- **Backward:** the derivation is [5.2](05-02-potential-vorticity.md)'s conservation law applied to a meridionally displaced parcel, with [5.1](05-01-vorticity-circulation.md)'s vorticity equation supplying the linearization. The jet these waves meander is [4.4](04-04-thermal-wind-general-circulation.md)'s thermal wind.
- **Forward:** [5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md) shows how the vorticity advection by these waves forces vertical motion and therefore weather; [6.5](06-05-predictability-two-week-limit.md) explains why the wave pattern is the last thing to remain predictable as a forecast degrades.
- **Sideways (waves):** the structure — a linear restoring mechanism, a dispersion relation, phase and group velocities that differ in both magnitude and sign — is the general wave machinery of [`waves-optics` 4.4](../../waves-optics/lessons/04-04-wave-packets-dispersion-fourier.md). Rossby waves are unusual in that their restoring "force" is a conservation law on a gradient, not a physical spring, which is why the phase velocity is one-signed: they can only go west.
