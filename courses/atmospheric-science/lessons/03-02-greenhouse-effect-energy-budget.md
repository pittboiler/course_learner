# Atmospheric Science · Lesson 3.2: The greenhouse effect & the global energy budget

> ⏱ ~15 min · Module 3: Radiation & the atmospheric energy budget · Builds on: [3.1 Solar & terrestrial radiation](03-01-solar-terrestrial-radiation.md), [2.4 Stability & CAPE](02-04-stability-parcel-theory-cape.md) · Unlocks: 3.3 (radiative transfer), 4.4 (general circulation)

## Why this matters

Lesson 3.1 left a 33 K debt: the planet radiates like a 255 K body but its surface is 288 K. Closing that gap with a model you can do on one line — the **slab atmosphere** — is one of the great small calculations in physics, and it gets you most of the way. Then closing the *full* budget, with every flux in and out of the surface and the atmosphere, tells you something the slab model cannot: that radiation alone would leave the surface far too hot, and that convection and evaporation carry a third of the surface's energy upward. The atmosphere is not just a blanket; it is a blanket with a chimney through it. That chimney is Module 2's convection, and this is where the two halves of the course meet.

## The idea

**The slab.** Put a single layer above the surface that is completely transparent to sunlight and completely opaque to infrared. Sunlight passes through and heats the ground. The ground radiates infrared upward; the slab absorbs all of it, and — this is the crux — re-emits *in both directions*, half up to space and half back down. The surface therefore receives energy twice: once from the Sun, once from the slab. Getting twice the energy means radiating twice the flux, and because flux goes as $T^4$, twice the flux means $2^{1/4} = 1.19$ times the temperature.

That is the greenhouse effect in one sentence: **the atmosphere returns to the surface a second copy of the energy the surface already emitted**. It does not trap heat like a real greenhouse (which works by stopping convection); it recycles infrared.

**Why the slab overshoots.** $2^{1/4}\times254.6 = 303$ K, versus the observed 288 K. The slab model is 15 K too warm, and the reason is instructive. A single opaque slab is too effective: the real atmosphere is *partly* transparent in the infrared — the 8-to-12 micrometre window lets some surface radiation escape straight to space. Push the other way and the model would be too cold. But there is a second, deeper reason, and it is the one worth carrying: **the slab lets only radiation move energy upward**. In reality the surface also loses heat by evaporating water and by heating the air in contact with it, and convection carries both upward. Those non-radiative fluxes are a third of the surface's energy loss, and they cool the surface below what pure radiative equilibrium would give.

**The budget.** Numbers per square metre of Earth's surface, averaged over the globe and the year. Of the 340 W m⁻² arriving, 100 is reflected and 240 absorbed — and 240 must therefore leave as infrared. The interesting part is the traffic beneath: the surface emits 398 W m⁻² upward but receives 342 W m⁻² of back radiation, so its *net* radiative loss is only 56 — while it loses another 104 to evaporation and thermals. Back radiation is the biggest single number in the budget, and its existence is the greenhouse effect measured directly.

## The formal version

**The one-slab model.** Let $T_s$ be the surface temperature and $T_a$ the slab's, both radiating as blackbodies in the longwave. The slab is transparent to shortwave. Write two balances.

*Top of atmosphere.* The only longwave leaving to space is the slab's upward emission, and it must equal the absorbed sunlight:

$$\sigma T_a^4 = \frac{S(1-\alpha)}{4} = \sigma T_e^4 \qquad\Longrightarrow\qquad T_a = T_e = 254.6\ \mathrm{K}.$$

*Surface.* It receives sunlight plus the slab's downward emission, and loses its own emission:

$$\sigma T_s^4 = \frac{S(1-\alpha)}{4} + \sigma T_a^4 = 2\sigma T_e^4 \qquad\Longrightarrow\qquad \boxed{\ T_s = 2^{1/4}\,T_e\ }$$

*In words: with one opaque layer, the surface must radiate twice what the planet exports, so it runs $2^{1/4} = 1.189$ times hotter than the effective temperature.* Numerically $T_s = 1.189\times254.6 = 302.8$ K, against an observed 288 K.

**Stacking slabs.** With $N$ identical opaque layers the same argument telescopes to

$$T_s = (N+1)^{1/4}\,T_e,$$

so two layers give 335 K and three give 360 K. Since the observed 288 K corresponds to $(288/254.6)^4 = 1.64$, Earth's real atmosphere behaves like **0.64 of an opaque slab** — less than one, which is why the single-slab model overshoots. This "effective number of layers" is exactly what rising $\mathrm{CO_2}$ increases, and it is the quantity that [`climate-science`](../../climate-science/syllabus.md) refines into optical depth and radiative forcing.

**Emissivity.** More honestly, give the slab an infrared emissivity $\epsilon < 1$ (it absorbs and emits only a fraction $\epsilon$ of a blackbody's flux, with $1-\epsilon$ of the surface's radiation passing straight through). The two balances become

$$\sigma T_s^4 = \frac{S(1-\alpha)}{4}\cdot\frac{2}{2-\epsilon},$$

which reduces to $2^{1/4}T_e$ at $\epsilon = 1$ and to $T_e$ at $\epsilon = 0$. Solving for the observed $T_s = 288$ K gives $\epsilon = 0.78$ — the atmosphere absorbs about 78 percent of the surface's infrared, letting 22 percent escape through the window.

**The global energy budget.** All fluxes in W m⁻², global annual means:

| Flux | Value |
|---|---|
| Incoming solar at top of atmosphere | 340 |
| Reflected (clouds, air, surface) | 100 |
| **Absorbed by the planet** | **240** |
| — absorbed by the atmosphere | 79 |
| — absorbed by the surface | 161 |
| Surface longwave emission (upward) | 398 |
| Back radiation (downward, from atmosphere) | 342 |
| Net surface longwave loss | 56 |
| Latent heat flux (evaporation) | 84 |
| Sensible heat flux (thermals) | 20 |
| Outgoing longwave radiation to space | 239 |

Three checks, and each teaches something.

*Top of atmosphere:* $340 = 100 + 239 + 1$. The leftover 1 W m⁻² is not rounding — it is the measured **planetary energy imbalance**, the rate at which Earth is currently accumulating heat, almost all of it going into the ocean.

*Surface:* in $= 161 + 342 = 503$; out $= 398 + 84 + 20 = 502$. Note that **back radiation (342) exceeds absorbed sunlight (161) by more than a factor of two**. The surface is warmed mainly by the atmosphere, not directly by the Sun.

*Atmosphere:* in $= 79 + 398 + 84 + 20 = 581$; out $= 342 + 239 = 581$. Exactly balanced. And notice the composition of that input: only 79 of the 581 came from sunlight. **The atmosphere is heated overwhelmingly from below** — by absorbing surface infrared, by receiving latent heat that condenses aloft, and by thermals. That is the radiative justification for the claim made back in [1.1](01-01-composition-vertical-structure.md) that the troposphere is heated from below and therefore convects.

**Why the non-radiative fluxes matter.** The 104 W m⁻² of latent plus sensible heat is 21 percent of what leaves the surface. Remove that chimney — force all the surface's energy loss through radiation — and $T_s$ would have to rise until its net radiative loss grew by 104 W m⁻², which would take it well past 300 K. Pure radiative equilibrium gives a surface near 333 K and an absurdly steep lower-atmosphere lapse rate. Convection intervenes long before that: as soon as radiation tries to build a lapse rate steeper than the moist adiabat, [2.4](02-04-stability-parcel-theory-cape.md)'s instability sets in and overturning carries the excess heat up instead. The observed 6.5 K km⁻¹ troposphere is the outcome of that negotiation — **radiative–convective equilibrium**.

## Picture

![The one-slab greenhouse model: sunlight passing through a slab atmosphere to the surface, the surface emitting sigma Ts to the fourth upward into the slab, and the slab emitting equally upward to space and downward as back radiation, with the two balance equations that give Ts equal to two to the one-fourth times Te](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — how many slabs is Venus?).** Venus has $T_e = 227$ K (from [3.1](03-01-solar-terrestrial-radiation.md)) and a surface temperature of 737 K. How many opaque slabs would model it?

$$N + 1 = \left(\frac{T_s}{T_e}\right)^4 = \left(\frac{737}{227}\right)^4 = (3.247)^4 = 111 \qquad\Longrightarrow\qquad N \approx 110.$$

*The point.* Earth is 0.64 of a slab; Venus is 110. The Venusian atmosphere is ninety times as massive as Earth's and 96 percent $\mathrm{CO_2}$, so infrared photons emitted at the surface are absorbed and re-emitted a hundred times before escaping. The greenhouse effect is not a switch but a dial with an enormous range, and the same equation covers both ends of it.

**Example 2 (why you'd care — what a doubling does, in slab language).** Suppose adding $\mathrm{CO_2}$ raises the effective slab count from 0.640 to 0.665 — a 2.5 percent thickening. What is the surface warming, and does the answer look right?

$$T_s = (N+1)^{1/4}T_e: \qquad \frac{dT_s}{T_s} = \frac{1}{4}\frac{dN}{N+1} = \frac{1}{4}\times\frac{0.025}{1.640} = 3.81\times10^{-3},$$

$$dT_s = 288 \times 3.81\times10^{-3} = 1.1\ \mathrm{K}.$$

About 1.1 K of warming. That is very close to the accepted **no-feedback** ("Planck") response to a doubling of $\mathrm{CO_2}$, roughly 1.2 K — so the crude slab model, with one plausible input, lands on the right answer for the direct radiative effect.

What it *cannot* give you is the observed sensitivity of around 3 K, because that includes feedbacks: the warmer atmosphere holds more water vapor (Clausius–Clapeyron from [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md), and water vapor is itself a greenhouse gas), ice retreats and albedo falls, and clouds do something complicated. Each feedback changes $N$ or $\alpha$ *again* in response to the warming. Turning that into a number is the whole business of [`climate-science`](../../climate-science/syllabus.md); this lesson supplies its starting point.

## Watch out

- **You might think** the greenhouse effect works the way a garden greenhouse does. **Actually** a garden greenhouse is warm mostly because the glass *stops convection* — the air cannot rise out. The atmospheric effect is radiative: infrared is absorbed and re-emitted downward. The name is a historical accident, and the mechanisms are different.
- **You might think** back radiation is somehow "extra" energy, violating thermodynamics by heating the surface with a colder atmosphere. **Actually** the atmosphere is not *heating* the surface; it is *reducing the surface's net loss*. Net energy still flows from warm surface to cool atmosphere (398 up, 342 down, so 56 net upward). The second law forbids net flow from cold to hot, not the existence of a downward flux.
- **You might think** the one-slab result $2^{1/4}T_e$ should match observation. **Actually** it overshoots by 15 K, and both reasons are physical: the real atmosphere is not fully opaque in the infrared, and radiation is not the only way heat leaves the surface. A model that reproduced 288 K exactly with one opaque slab would be doing so by luck.
- **You might think** the surface is warmed mainly by sunlight. **Actually** it absorbs 161 W m⁻² of sunlight and 342 W m⁻² of back radiation. Downward infrared is more than double the direct solar input — which is why a clear desert night is so much colder than a humid one, and why clouds keep a night warm.

## One-liner

> An atmosphere opaque to infrared returns the surface a second copy of its own radiation, so the surface must run hotter — $2^{1/4}$ times hotter for one perfect slab, and 33 K hotter for the real Earth, with a fifth of its energy loss escaping as convection instead.

## Problems

**P1 (🟢)** A planet has $T_e = 200$ K. Compute its surface temperature under (a) no atmosphere, (b) one opaque slab, (c) three opaque slabs.

**P2 (🟡)** Using the budget table, compute (a) the planetary albedo implied by the reflected flux, (b) the fraction of the surface's total energy loss that is non-radiative, and (c) the fraction of the surface's upward longwave emission that is returned as back radiation. Say in one sentence what (c) means physically.

**P3 (🔴, optional)** Derive the emissivity form of the slab model. Let the slab absorb a fraction $\epsilon$ of the surface's longwave emission, transmit $1-\epsilon$ to space, and emit $\epsilon\sigma T_a^4$ in each direction. (a) Write the top-of-atmosphere and surface balances and solve for $T_s$ in terms of $T_e$ and $\epsilon$. (b) Check the limits $\epsilon\to0$ and $\epsilon\to1$. (c) Find the $\epsilon$ that reproduces $T_s = 288$ K with $T_e = 254.6$ K.

<details>
<summary>Solutions</summary>

**P1** (a) With no atmosphere the surface *is* the emitting level: $T_s = T_e = 200$ K.

(b) $T_s = 2^{1/4}\times200 = 1.189\times200 = 238$ K.

(c) $T_s = 4^{1/4}\times200 = \sqrt{2}\times200 = 283$ K.

*Check.* Note how slowly the warming accumulates: the first slab buys 38 K, the second and third together buy only 45 more. The fourth-power law means each added layer has less effect than the last — the *logarithmic* character of greenhouse forcing in embryo.

**P2** (a) $$\alpha = \frac{\text{reflected}}{\text{incoming}} = \frac{100}{340} = 0.294 \approx 0.29,$$

consistent with the 0.30 used throughout Module 3.

(b) Total surface loss $= 398 + 84 + 20 = 502\ \mathrm{W\,m^{-2}}$, of which non-radiative is $84 + 20 = 104$:

$$\frac{104}{502} = 0.207 \approx 21\ \text{percent}.$$

(c) $$\frac{342}{398} = 0.859 \approx 86\ \text{percent}.$$

Physically: **86 percent of everything the surface radiates comes straight back.** The surface and the lower atmosphere are locked in a near-cancelling exchange of infrared, with only the 14 percent residual (56 W m⁻²) representing real radiative cooling of the ground. This is why small changes in atmospheric opacity have such leverage — they act on the large gross fluxes, not the small net one.

**P3** (a) *Top of atmosphere.* Longwave leaving to space is the slab's own emission plus what passed through:

$$\epsilon\sigma T_a^4 + (1-\epsilon)\sigma T_s^4 = \sigma T_e^4. \tag{1}$$

*Surface.* It receives sunlight ($\sigma T_e^4$) plus the slab's downward emission, and loses its own:

$$\sigma T_s^4 = \sigma T_e^4 + \epsilon\sigma T_a^4. \tag{2}$$

From (2), $\epsilon\sigma T_a^4 = \sigma T_s^4 - \sigma T_e^4$. Substituting into (1):

$$(\sigma T_s^4 - \sigma T_e^4) + (1-\epsilon)\sigma T_s^4 = \sigma T_e^4 \quad\Longrightarrow\quad (2-\epsilon)\sigma T_s^4 = 2\sigma T_e^4,$$

$$\boxed{\ T_s = T_e\left(\frac{2}{2-\epsilon}\right)^{1/4}.\ }$$

(b) At $\epsilon = 0$: $T_s = T_e(2/2)^{1/4} = T_e$ — a transparent atmosphere does nothing, correct. At $\epsilon = 1$: $T_s = T_e\,2^{1/4}$ — the fully opaque slab of the main text, correct.

(c) Solve for $\epsilon$:

$$\left(\frac{288}{254.6}\right)^4 = \frac{2}{2-\epsilon} \quad\Longrightarrow\quad 1.6403 = \frac{2}{2-\epsilon} \quad\Longrightarrow\quad 2-\epsilon = 1.2193,$$

$$\epsilon = 0.781.$$

*Check.* The atmosphere absorbs about 78 percent of the surface's infrared and lets 22 percent through — which matches the rough share of the surface's emission that escapes through the 8-to-12 micrometre atmospheric window, the subject of [3.3](03-03-radiative-transfer-vertical-profile.md). And $\epsilon = 0.78$ is comfortably below 1, confirming that the full-slab overshoot to 303 K comes from assuming too much opacity.

</details>

## Flashback

**From Lesson 2.4 (Stability, parcel theory & CAPE):** An environment has $\Gamma = 6.2\ \mathrm{K\,km^{-1}}$; take $\Gamma_d = 9.77$ and, for the moist parcel in question, $\Gamma_m = 6.5\ \mathrm{K\,km^{-1}}$. (a) Classify the layer. (b) A saturated parcel is lifted 3 km through it — is it warmer or colder than its surroundings on arrival, and by how much?

<details>
<summary>Solution</summary>

(a) Here $\Gamma = 6.2 < \Gamma_m = 6.5 < \Gamma_d = 9.77$, so the layer is **absolutely stable** — stable to dry *and* to saturated parcels. Nothing convects here whatever its moisture.

(b) The saturated parcel cools at 6.5 K km⁻¹ while the environment cools at only 6.2, so the parcel falls behind by $0.3\ \mathrm{K\,km^{-1}}$:

$$\Delta T = (6.5 - 6.2) \times 3 = 0.9\ \mathrm{K \ colder}.$$

Negatively buoyant, it sinks back. Note how narrow the margin is — a change of 0.4 K km⁻¹ in the environmental lapse rate would flip this layer into conditional instability, which is why soundings are read carefully and why the observed global mean of 6.5 K km⁻¹ sits so close to the moist adiabat: convection keeps dragging it there, as this lesson's radiative–convective equilibrium argument explains.

*Check.* In $\theta_e$ language: $d\theta_e/dz > 0$ here (since $\Gamma < \Gamma_m$), which is the stability criterion for saturated ascent — the same verdict reached two ways.

</details>

## Connections

- **Backward:** $T_e = 254.6$ K and the shortwave/longwave separation come from [3.1](03-01-solar-terrestrial-radiation.md); the latent and sensible heat fluxes in the budget are Module 2's convection, and the argument that convection caps the lapse rate is [2.4](02-04-stability-parcel-theory-cape.md)'s instability criterion applied globally.
- **Forward:** [3.3](03-03-radiative-transfer-vertical-profile.md) replaces the slab with a real absorbing medium, explains the atmospheric window that makes $\epsilon = 0.78$ rather than 1, and locates the level from which the 239 W m⁻² actually escapes. [4.4](04-04-thermal-wind-general-circulation.md) uses the *latitudinal* imbalance in this budget — the tropics absorb more than they emit, the poles the reverse — as the engine of the general circulation.
- **Sideways (climate physics):** the "effective number of slabs" is the crude ancestor of optical depth and radiative forcing; [`climate-science`](../../climate-science/syllabus.md) takes this budget as its starting point and adds the feedbacks that turn a 1.1 K direct response into a 3 K equilibrium sensitivity.
