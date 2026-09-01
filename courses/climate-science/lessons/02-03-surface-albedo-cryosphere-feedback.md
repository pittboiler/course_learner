# Climate Physics · Lesson 2.3: Surface albedo and the cryosphere feedback

> ⏱ ~15 min · Module 2: Feedbacks & climate sensitivity · Builds on: [2.2](02-02-planck-water-vapour-lapse-rate.md), [2.1](02-01-feedbacks-gain-factor.md) · Unlocks: [2.4](02-04-clouds-the-wild-card.md), [5.4](05-04-the-cryosphere.md), [6.1](06-01-energy-balance-models-bistability.md)

## Why this matters

The ice–albedo feedback is the smallest of the four big feedbacks — about $+0.3\ \mathrm{W\,m^{-2}\,K^{-1}}$ — and by far the most consequential for the *shape* of the climate system. It is the only one whose strength depends violently on the state: negligible on an ice-free planet, modest today, enormous with ice sheets down to mid-latitudes. That state dependence is what makes multiple equilibria possible, which is why Snowball Earth happened ([6.1](06-01-energy-balance-models-bistability.md)), why the ice ages are nonlinear ([6.3](06-03-ice-ages-100-kyr-problem.md)), and why "the climate sensitivity" is a number attached to a state rather than to a planet. It is also the headline mechanism behind Arctic amplification — though, as this lesson shows, only part of it.

## The idea

**Ice is bright and water is dark, and that is nearly the whole mechanism.** Fresh snow reflects 85 percent of the sunlight hitting it; open ocean reflects 6 percent. Melt some ice and the surface absorbs roughly ten times more sunlight, which warms it, which melts more ice. A textbook positive loop.

**But the arithmetic is more sobering than the picture.** The forcing lever is $F = S(1-\alpha)/4$, so $dF/d\alpha = -S/4 = -340\ \mathrm{W\,m^{-2}}$ per unit of *global* albedo. To get $+0.35\ \mathrm{W\,m^{-2}\,K^{-1}}$ you need the global albedo to fall by only about 0.001 per kelvin — one part in three hundred. It sounds tiny, and it is: the cryosphere covers a small fraction of the planet, most of it is at high latitude where the sunlight is weak, and the melting happens in the season when the sun is lowest.

**The seasonal mismatch is the crux.** Arctic sea ice reaches its minimum in September, when the sun at 75°N is already setting for the winter. In June, when insolation peaks at over 500 W m⁻², the ice is still largely intact. So the sea-ice loss that gets the headlines is happening at the least radiatively effective moment of the year, which is why the Arctic sea-ice contribution to global feedback is a few tenths of a watt rather than several.

**State dependence is the real story.** Push the ice edge equatorward and every one of those limitations relaxes: the ice sits where the sun is strong, the area involved is enormous, and the seasonal cycle is less brutal. The albedo feedback in a glacial climate is roughly twice today's; in a snowball it is larger still. This is why $\lambda$ is not a constant, and why extrapolating today's sensitivity to a very different state is unsafe in both directions.

**And Arctic amplification has four causes, not one.** The Arctic warms three to four times faster than the global mean. Ice–albedo is one reason. The others: the polar lapse-rate feedback ([2.2](02-02-planck-water-vapour-lapse-rate.md)), a *weaker local Planck response* because cold surfaces radiate less per kelvin, and changes in poleward heat and moisture transport. Attributing all of it to albedo is a common and quantitatively wrong shortcut.

## The formal version

**Albedo values.** These are the numbers to carry:

| Surface | Albedo |
|---|---|
| Fresh dry snow | 0.80–0.90 |
| Snow-covered sea ice | 0.60–0.70 |
| Bare (melting) sea ice | 0.45–0.60 |
| Melt ponds on ice | 0.20–0.40 |
| Tundra, boreal forest | 0.10–0.20 (forest much darker when snow is masked) |
| Open ocean, high sun | 0.05–0.08 |
| Open ocean, grazing sun | up to 0.4 |

The last row is worth noticing: ocean albedo is strongly angle-dependent (Fresnel reflection), so at 75°N in September the water exposed by retreating ice is nowhere near as dark as tropical ocean. This further reduces the effective feedback.

**The forcing lever.** From the absorbed-solar term,

$$F = \frac{S(1-\alpha)}{4} \quad\Longrightarrow\quad \frac{\partial F}{\partial \alpha} = -\frac{S}{4} = -\frac{1361}{4} = -340\ \mathrm{W\,m^{-2}}.$$

*In words: one unit of global albedo is worth 340 watts per square metre, so a change of 0.001 is worth 0.34.* Hence

$$c_\alpha = -\frac{S}{4}\frac{d\alpha}{dT}, \qquad c_\alpha = +0.35\ \mathrm{W\,m^{-2}\,K^{-1}} \iff \frac{d\alpha}{dT} = -1.0\times10^{-3}\ \mathrm{K^{-1}}.$$

**Checking that against sea-ice loss.** September Arctic sea-ice extent has fallen from about $7.0$ to $4.5$ million km² since 1979, over roughly 0.8 K of global warming. Take the annual-mean ice-area loss as about $2\times10^{6}\ \mathrm{km^2}$ and the albedo change as $\Delta\alpha_{\text{local}} = -0.4$ (ice to angle-corrected ocean). Earth's area is $510\times10^{6}\ \mathrm{km^2}$, so the naive global albedo change is

$$\Delta\alpha_{\text{global}} = \frac{2}{510}\times(-0.4) = -1.6\times10^{-3}.$$

But this must be weighted by *local insolation relative to global mean*: the Arctic receives about 175 W m⁻² annually against the global 340, a factor 0.51. So the radiatively effective change is $-0.8\times10^{-3}$, over 0.8 K — giving $d\alpha_{\text{eff}}/dT \approx -1.0\times10^{-3}\ \mathrm{K^{-1}}$ and

$$c_\alpha \approx 340 \times 1.0\times10^{-3} = 0.34\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

*In words: an order-of-magnitude estimate from observed sea-ice loss reproduces the assessed feedback.* Note the estimate is only this clean because two large numbers — Arctic ice area and its insolation deficit — happen to be captured by simple factors; the real calculation also includes Northern Hemisphere **seasonal snow on land**, which contributes comparably and is often forgotten.

**Why the local Planck response amplifies the poles.** The local outgoing longwave response is $4\sigma T^3$, and $T$ differs enormously between tropics and poles:

| Local $T$ | $4\sigma T^3$ (W m⁻² K⁻¹) |
|---|---|
| 300 K (tropics) | 6.12 |
| 288 K (global mean) | 5.42 |
| 250 K (polar) | 3.54 |

*In words: a cold region has to warm 1.7 times as much as a warm one to shed the same extra energy.* So even with **identical local forcing and no ice at all**, the Arctic would warm about 70 percent more than the tropics. This is a genuinely underappreciated contributor to polar amplification, and it explains why amplification appears even in aquaplanet models with no ice.

**Assembling Arctic amplification.** The observed ratio is about 3–4. The contributions, roughly:

| Mechanism | Contribution |
|---|---|
| Weaker local Planck response (cold surface) | large; ~1.7 on its own |
| Lapse-rate feedback (surface-trapped warming) | large; comparable to albedo |
| Ice–albedo | moderate, and concentrated in late summer and autumn |
| Increased poleward heat and moisture transport | modest, partly self-cancelling |
| Loss of sea ice as an *insulator* (ocean heat escaping in winter) | large in the winter season |

That last row deserves a note, because it is the mechanism behind the *seasonality* of Arctic warming: the Arctic warms most in **autumn and winter**, not summer. Summer sunlight goes into melting ice at fixed temperature; the ocean stores the heat; then in autumn, with the ice cover thin or absent, that heat escapes upward and warms the air. The albedo feedback is absorbed in summer and cashed out in winter.

**State dependence.** Write $c_\alpha$ as a function of the ice-line latitude $\phi_i$. Two factors both grow as the ice edge moves equatorward: the area of the latitude band per degree ($\propto\cos\phi_i$) and the local insolation. The result is that $c_\alpha$ roughly doubles between today and the Last Glacial Maximum, and grows without bound as the ice line approaches the tropics. **When the feedback grows fast enough with ice extent, the system can lose stability entirely** — the saddle-node bifurcation of [6.1](06-01-energy-balance-models-bistability.md).

**Fast versus slow.** Sea ice and seasonal snow respond in years: they are **fast feedbacks**, inside the conventional definition of ECS. Ice sheets respond over millennia: they sit outside ECS and inside **Earth system sensitivity**, which is roughly 50 percent larger. Any paleo-derived sensitivity ([3.3](03-03-constraining-sensitivity-observations.md), [6.3](06-03-ice-ages-100-kyr-problem.md)) must state which of the two it estimated, and confusing them is the most common error in reading that literature.

## Picture

![Two panels. On the left, a ladder of surface albedos from fresh snow at 0.85 down through snow-covered sea ice at 0.65, bare sea ice at 0.55, melt ponds at 0.30, tundra and forest at 0.20 and open ocean at 0.06, with a coral arrow showing the roughly 0.5 albedo drop when ice is replaced by water. On the right, the Arctic annual cycle at 75 degrees north: incoming solar radiation in blue peaks sharply in June and is zero from November to February, while sea-ice extent in coral reaches its minimum in September — an annotated mismatch showing that the ice disappears when the sun has nearly gone](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — a completely ice-free Arctic summer).** Suppose the entire September Arctic sea-ice cover, $4.5\times10^{6}\ \mathrm{km^2}$, disappears, and take the ice-to-ocean albedo change over the melt season as $-0.35$ (angle-corrected). Arctic mean insolation over the relevant months is about 250 W m⁻², lasting effectively four months of the year. (a) Estimate the additional absorbed energy globally in W m⁻². (b) Estimate the equilibrium warming it would cause with $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$.

(a) Extra absorption locally: $0.35 \times 250 = 87.5\ \mathrm{W\,m^{-2}}$, but only for four months out of twelve, so the annual mean is $87.5/3 = 29.2\ \mathrm{W\,m^{-2}}$ over that area. Spread globally:

$$\Delta F = 29.2 \times \frac{4.5\times10^{6}}{510\times10^{6}} = 29.2 \times 8.82\times10^{-3} = 0.26\ \mathrm{W\,m^{-2}}.$$

(b) $$\Delta T = \frac{0.26}{1.3} = 0.20\ \mathrm{K}.$$

*The point.* Completely removing Arctic summer sea ice — an event usually described in apocalyptic terms — is worth about 0.2 K of global warming, roughly the same as one decade of the current trend. That is not "nothing", and the regional consequences are severe, but it is emphatically not a tipping point that runs away. The public framing and the radiative arithmetic have drifted apart here, and the arithmetic is not hard.

**Example 2 (why you'd care — why paleo sensitivity exceeds modern sensitivity).** At the Last Glacial Maximum, ice sheets covered North America and Scandinavia, global mean temperature was about 5 K colder, and the *total* forcing (greenhouse gases plus ice sheets plus dust) relative to pre-industrial was about $-8\ \mathrm{W\,m^{-2}}$, of which about $-3.2$ was greenhouse gases and about $-3.7$ was the ice sheets themselves. Compute two different "sensitivities" and explain why they differ.

**Treating ice sheets as a forcing** (the conventional ECS definition, since ice sheets are slow):

$$\lambda = \frac{8.0}{5.0} = 1.6\ \mathrm{W\,m^{-2}\,K^{-1}} \quad\Longrightarrow\quad \mathrm{ECS} = \frac{3.93}{1.6} = 2.5\ \mathrm{K}.$$

**Treating ice sheets as a feedback** (Earth system sensitivity, since over millennia they *do* respond to temperature):

$$\lambda_{\text{ESS}} = \frac{8.0-3.7}{5.0} = 0.86\ \mathrm{W\,m^{-2}\,K^{-1}} \quad\Longrightarrow\quad \mathrm{ESS} = \frac{3.93}{0.86} = 4.6\ \mathrm{K}.$$

*The general principle.* The same paleo record gives 2.5 K or 4.6 K depending purely on the bookkeeping — which side of the forcing/feedback line the ice sheets are placed on. Neither is wrong; they answer different questions. ECS is the right number for a century-scale projection, because ice sheets barely move on that timescale. ESS is the right number for asking what the planet eventually settles at, and it is the number relevant to sea level. **This is [1.4](01-04-radiative-forcing-defined.md)'s forcing-versus-response bookkeeping problem again, now separated by three orders of magnitude in timescale instead of by a fixed-SST experiment.**

## Watch out

- **You might think** losing Arctic sea ice is a runaway tipping point. **Actually** the global radiative effect is a couple of tenths of a watt per square metre, the ice regrows each winter (the September minimum is not a permanent state), and models show no bistability for *Arctic* sea ice in the current climate — the seasonal cycle is too strong. Antarctic ice-sheet instability ([5.4](05-04-the-cryosphere.md)) is a genuine candidate threshold; September sea ice is not.
- **You might think** the ice–albedo feedback explains Arctic amplification. **Actually** it explains part of it. The weaker local Planck response and the polar lapse-rate feedback each contribute comparably or more, which is why aquaplanet models with no ice at all still show polar amplification, and why the Arctic warms fastest in *winter* when there is no sunlight to reflect.
- **You might think** feedback parameters are properties of the planet. **Actually** $c_\alpha$ roughly doubles between the present and the Last Glacial Maximum, and $\lambda$ with it. Quoting "the climate sensitivity" without a base state is like quoting a derivative without a point.

## One-liner

> Ice–albedo is a small feedback today for three unglamorous reasons — little area, weak sunlight, wrong season — and a decisive one whenever ice reaches latitudes where the sun is strong, which is why the same planet can have several stable climates.

## Problems

**P1 (🟢)** A region covering 3 percent of Earth's surface changes albedo from 0.60 to 0.15. Its annual-mean insolation is 200 W m⁻². (a) Compute the extra absorbed energy per square metre of that region. (b) Convert to a global-mean forcing. (c) With $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$, compute the equilibrium warming.

**P2 (🟡)** Take the local Planck response as $4\sigma T^3$. (a) Compute it at 295 K and at 245 K. (b) If both regions receive the same local forcing of 4 W m⁻² and there are no other feedbacks or heat transport, compute each region's warming and the amplification ratio. (c) Explain in two sentences why this argument, though correct, overstates the effect in the real climate, and name the process that limits it.

**P3 (🔴, optional)** Model the albedo feedback as state-dependent: $c_\alpha(\phi_i) = c_0\,\cos\phi_i \cdot s(\phi_i)$, where $\phi_i$ is the ice-line latitude and $s(\phi_i)$ is local insolation relative to the global mean, approximated by $s = 1.5\cos^2\phi_i$. Today $\phi_i = 70^\circ$ and $c_\alpha = 0.35\ \mathrm{W\,m^{-2}\,K^{-1}}$. (a) Determine $c_0$. (b) Compute $c_\alpha$ for an ice line at 55° (roughly the Last Glacial Maximum) and at 30°. (c) With $\lambda_0 = 3.2$ and other feedbacks summing to $+1.6\ \mathrm{W\,m^{-2}\,K^{-1}}$, find the ice-line latitude at which $\lambda$ reaches zero, and say what happens there.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Delta(\text{absorbed}) = (0.60-0.15)\times200 = 0.45\times200 = 90\ \mathrm{W\,m^{-2}}$$ over that region.

(b) $$\Delta F = 90 \times 0.03 = 2.7\ \mathrm{W\,m^{-2}}.$$

(c) $$\Delta T = \frac{2.7}{1.3} = 2.1\ \mathrm{K}.$$

Worth pausing on: a 3 percent patch of the planet, changing from snow to bare ground, delivers a forcing equal to the entire anthropogenic total. That is the scale of the albedo lever *when the ice is somewhere sunny* — and it is why the ice ages, driven by ice sheets over exactly this kind of area at 45–60°N, are so much more dramatic than anything Arctic sea ice can do.

**P2** (a) $$4\sigma(295)^3 = 4 \times 5.67\times10^{-8} \times 2.567\times10^{7} = 5.82\ \mathrm{W\,m^{-2}\,K^{-1}},$$
$$4\sigma(245)^3 = 4 \times 5.67\times10^{-8} \times 1.471\times10^{7} = 3.34\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

(b) Warm region: $\Delta T = 4/5.82 = 0.69$ K. Cold region: $\Delta T = 4/3.34 = 1.20$ K.

$$\text{ratio} = \frac{1.20}{0.69} = 1.74.$$

(c) The argument assumes each region radiates its own imbalance to space independently, but the atmosphere and ocean **transport heat meridionally**, and that transport responds to the temperature gradient: warming the pole more than the tropics *reduces* the gradient, which reduces poleward transport, which damps the amplification. The limiting process is therefore the meridional heat transport by the atmospheric eddies and the ocean circulation ([atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md)) — a strongly negative feedback on *gradients* even though it is not a feedback on the global mean at all.

**P3** (a) At $\phi_i = 70^\circ$: $\cos 70^\circ = 0.342$, $s = 1.5(0.342)^2 = 0.1755$. So

$$c_0 = \frac{0.35}{0.342\times0.1755} = \frac{0.35}{0.0600} = 5.83\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

(b) At $55^\circ$: $\cos = 0.574$, $s = 1.5(0.574)^2 = 0.494$, so

$$c_\alpha = 5.83 \times 0.574 \times 0.494 = 1.65\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

At $30^\circ$: $\cos = 0.866$, $s = 1.5(0.866)^2 = 1.125$, so

$$c_\alpha = 5.83 \times 0.866 \times 1.125 = 5.68\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

(The 55° value is about 4.7 times today's, somewhat larger than the factor of roughly 2 usually assessed for the Last Glacial Maximum — this crude parameterization exaggerates, because it neglects that much of the ice-covered land was already snow-covered seasonally and that clouds mask part of the surface albedo change. The *scaling* is the point, not the number.)

(c) $\lambda = 0$ requires $\sum c_i = \lambda_0 = 3.2$, so with the other feedbacks at $+1.6$ we need $c_\alpha = 1.6$:

$$5.83\cos\phi_i \times 1.5\cos^2\phi_i = 1.6 \quad\Longrightarrow\quad \cos^3\phi_i = \frac{1.6}{8.745} = 0.1830,$$
$$\cos\phi_i = 0.5679 \quad\Longrightarrow\quad \phi_i = 55.4^\circ.$$

At that ice line the total feedback parameter passes through zero: the system has **no stable equilibrium**, and any further cooling accelerates without bound until the ice reaches the equator. This is the runaway condition of [2.1](02-01-feedbacks-gain-factor.md) reached not by changing the physics but by moving the *state* — and it is precisely the saddle-node bifurcation that makes Snowball Earth accessible ([6.1](06-01-energy-balance-models-bistability.md)). The instability latitude in more careful energy-balance models is around 30°, not 55°, because this parameterization overstates $c_\alpha$; but the existence and character of the instability is robust.

*Check.* Sanity-check the direction: $c_\alpha$ must increase as the ice line moves equatorward (smaller $\phi_i$, larger $\cos\phi_i$), and it does — 0.35, 1.65, 5.68 at 70°, 55°, 30°. A parameterization that made the feedback *weaker* with more ice would be wrong on inspection.

</details>

## Flashback

**From Lesson 1.5 (The forcing agents):** Suppose global air-quality policy eliminates all anthropogenic aerosol by 2050, while greenhouse-gas forcing is held at today's value. Use the ledger: greenhouse gases $+3.84$, aerosols $-1.06$, land use $-0.20$, other $+0.14\ \mathrm{W\,m^{-2}}$, and $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$. (a) Compute today's total anthropogenic forcing and the post-cleanup total. (b) Compute the additional equilibrium warming the cleanup commits to. (c) Explain in two sentences why the *timing* of this unmasking is much faster than the timing of the warming it reveals.

<details>
<summary>Solution</summary>

(a) Today: $$F = 3.84 - 1.06 - 0.20 + 0.14 = 2.72\ \mathrm{W\,m^{-2}}.$$

After cleanup: $$F = 3.84 - 0.20 + 0.14 = 3.78\ \mathrm{W\,m^{-2}}.$$

(b) $$\Delta F = 1.06\ \mathrm{W\,m^{-2}}, \qquad \Delta T_{\text{extra}} = \frac{1.06}{1.3} = 0.82\ \mathrm{K}.$$

(c) The forcing change is essentially instantaneous, because tropospheric aerosols have a lifetime of about a week — remove the emissions and within a month the forcing is gone. The *temperature* response, however, is governed by the ocean's heat capacity ([1.1](01-01-climate-system-timescales.md), [3.1](03-01-ocean-heat-uptake-thermal-inertia.md)), so it emerges over decades. The result is a step increase in forcing followed by a slow climb in temperature — which is exactly the pattern that makes aerosol cleanup look like an acceleration of warming rather than what it is, the removal of a mask.

*Check.* This is not hypothetical. The 2020 IMO regulation cut ship-fuel sulphur content from 3.5 percent to 0.5 percent, removing a substantial aerosol source concentrated over shipping lanes in the North Pacific and North Atlantic, and the resulting reduction in low-cloud brightness is measurable from satellites. Estimates of the associated forcing change cluster around $+0.05$ to $+0.1\ \mathrm{W\,m^{-2}}$ — small on the scale of this problem, but it is a real, deliberate, well-dated aerosol perturbation, which makes it one of the few opportunities to constrain the aerosol–cloud interaction that [1.5](01-05-forcing-agents.md) identified as the field's largest uncertainty.

</details>

## Connections

- **Backward:** the polar surface-trapped warming profile of [2.2](02-02-planck-water-vapour-lapse-rate.md) is one of the four mechanisms assembled here; the combination rule is [2.1](02-01-feedbacks-gain-factor.md)'s; the ice types and their mechanics are [geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md)'s.
- **Forward:** the state dependence of $c_\alpha$ is the ingredient that produces multiple equilibria in [6.1](06-01-energy-balance-models-bistability.md) and the nonlinear ice-sheet response of [6.3](06-03-ice-ages-100-kyr-problem.md); the ice sheets deferred here as "slow" are [5.3](05-03-sea-level-rise.md) and [5.4](05-04-the-cryosphere.md).
- **Sideways (dynamical systems):** a feedback parameter that grows with the state until stability is lost is a **saddle-node bifurcation** in the making — the ice line is the bifurcation parameter and $\lambda = 0$ is where the fold is. See [`dynamical-systems` 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md); [6.1](06-01-energy-balance-models-bistability.md) draws the full bifurcation diagram.
