# Physical Oceanography · Lesson 6.1: The Southern Ocean — hinge of the global system

> ⏱ ~15 min · Module 6: The ocean in the climate system · Builds on: [2.2](02-02-thermal-wind-acc.md), [3.4](03-04-mesoscale-eddies-baroclinic-instability.md), [4.4](04-04-what-drives-the-overturning.md) · Unlocks: [6.2](06-02-ocean-heat-uptake-circulation.md), [6.3](06-03-ocean-carbon-pumps.md)

## Why this matters

One basin controls the global overturning, takes up most of the excess heat, takes up a large share of the excess carbon, and is the only place where deep water touches the atmosphere at all. It is also the hardest place in the ocean to observe and the hardest to model. That combination — maximum leverage, minimum information — is why the Southern Ocean has become the central problem of physical oceanography.

Everything the previous modules built converges here. The ACC's steeply tilted isopycnals ([2.2](02-02-thermal-wind-acc.md)) are what let deep water reach the surface without any mixing. The wind-driven upwelling ([4.4](04-04-what-drives-the-overturning.md)) is what pulls it up. The mesoscale eddies ([3.4](03-04-mesoscale-eddies-baroclinic-instability.md)) are what push most of it back down, so that what actually circulates is a small residual. And the water masses that leave here — AAIW, mode waters, AABW ([4.1](04-01-water-masses-world-ocean.md)) — fill the rest of the world ocean.

## The idea

**The Southern Ocean is where the deep ocean has a window.** Everywhere else, density surfaces that hold deep water lie below the surface everywhere along their length, so water on them can only reach the atmosphere by being mixed across isopycnals — expensive, and rate-limited by the 2 TW of [4.3](04-03-diapycnal-mixing-abyssal-recipe.md). South of the ACC those same surfaces **outcrop**: they reach the sea surface. Deep water can slide up them adiabatically and be exposed to the air. **It is the only such window in the world ocean, and everything that requires deep water to communicate with the atmosphere happens here.**

**The wind pulls water through the window; the eddies push it back.** The westerlies drive about 28 Sv of northward Ekman transport across the ACC, which must be fed by deep water rising along the outcropping surfaces. But the resulting steep isopycnals are baroclinically unstable, and the eddies they generate drive a southward circulation of about 24 Sv. **The residual — what actually transports anything — is the small difference.**

**Which means the Southern Ocean is insensitive to the wind in one respect and sensitive in another.** Strengthen the westerlies and the ACC's transport barely changes (**eddy saturation**) and the residual overturning changes much less than the Ekman transport does (**eddy compensation**). What does change dramatically is the eddy field itself. This is why coarse models, which have no eddies and therefore no compensation, over-predict the Southern Ocean's response to the observed wind strengthening.

**Two cells, not one, and they go opposite ways.** Deep water rising at the surface splits. The part that surfaces on the equatorward side is warmed and freshened by precipitation, becomes *lighter*, and flows north to subduct as Antarctic Intermediate Water and mode water — the **upper cell**. The part that surfaces closer to Antarctica is cooled and salinified by sea-ice formation, becomes *denser*, and sinks as Antarctic Bottom Water — the **lower cell**. Both are fed from the same upwelling, and which one a parcel joins is decided by a surface buoyancy flux acting over a few hundred kilometres.

**And that is why the Southern Ocean dominates uptake.** Water that has been out of contact with the atmosphere for centuries arrives at the surface here, equilibrates partially with a warmer and $\mathrm{CO_2}$-richer atmosphere than it last saw, and is immediately subducted again. **The Southern Ocean is not storing heat and carbon because it is cold; it is storing them because it is the only place with a supply of water that has not yet been loaded.**

## The formal version

**The residual-mean decomposition.** In the Southern Ocean the meridional overturning is the sum of two large opposing terms:

$$\boxed{\ \psi_{\text{res}} = \psi_{\text{Ekman}} + \psi_{\text{eddy}} = -\frac{\tau}{\rho_0 f} + K\,s\ }$$

with $s = \partial z_{\text{iso}}/\partial y$ the isopycnal slope and $K$ the eddy diffusivity ([3.4](03-04-mesoscale-eddies-baroclinic-instability.md)). *In words: the wind drives water north and the eddies drive it south, and only the difference transports anything.*

| Term | Magnitude |
|---|---|
| Ekman | 25–30 Sv northward |
| Eddy | 20–25 Sv southward |
| **Residual** | **3–8 Sv** |

**Eddy saturation.** Setting $\psi_{\text{res}} = 0$ as a first approximation gives the equilibrium isopycnal slope:

$$s = \frac{\tau}{\rho_0 f K}.$$

If $K$ were fixed, $s\propto\tau$ and — since the ACC's thermal-wind transport scales with $s$ ([2.2](02-02-thermal-wind-acc.md)) — the transport would be proportional to the wind stress. It is not. Observations over the recent decades of strengthening westerlies show ACC transport changing by a few percent while eddy kinetic energy has risen substantially. The resolution is that $K$ itself grows with $s$: a steeper slope is more unstable, generates more eddies, and is flattened back. **The slope is set by the instability threshold, not by the wind.**

**Eddy compensation** is the transport analogue: if $K\propto\tau$, then $\psi_{\text{eddy}} \propto \tau$ too, and the residual changes far less than either term. Compensation is not complete — estimates range from 50 to 90 percent — and the uncompensated fraction is one of the larger uncertainties in projections of Southern Ocean heat and carbon uptake.

**Why the residual is so uncertain.** From $\psi_{\text{res}} = \psi_E - |\psi_{\text{eddy}}|$ with $\psi_E \approx 28$ and $|\psi_{\text{eddy}}| \approx 24$:

$$\frac{\delta\psi_{\text{res}}}{\psi_{\text{res}}} = \frac{\psi_E}{\psi_{\text{res}}}\frac{\delta\psi_E}{\psi_E} + \frac{|\psi_{\text{eddy}}|}{\psi_{\text{res}}}\frac{\delta|\psi_{\text{eddy}}|}{|\psi_{\text{eddy}}|} \approx 7\left(\frac{\delta\psi_E}{\psi_E}\right) + 6\left(\frac{\delta|\psi_{\text{eddy}}|}{|\psi_{\text{eddy}}|}\right).$$

*In words: a 10 percent error in either term becomes a 60 to 70 percent error in the residual.* This is the same small-difference-of-large-numbers structure as Bjerknes compensation in [4.5](04-05-meridional-heat-transport-bjerknes.md), and it has the same consequence: **the quantity that matters is the least well determined.**

**The two cells.**

| | Upper cell | Lower cell |
|---|---|---|
| Surfaces | equatorward of the Polar Front | poleward, near the Antarctic shelf |
| Surface buoyancy forcing | gain: warming and net precipitation | loss: cooling and brine rejection |
| Product | AAIW, Subantarctic Mode Water | AABW |
| Direction | northward, subducting near 45–50°S | southward, sinking to the sea floor |
| Strength | 10–15 Sv | 10–20 Sv |
| Closes | the NADW upper cell of [4.4](04-04-what-drives-the-overturning.md) | the abyssal cell, which still needs mixing |

*In words: the same upwelling feeds both, and the surface buoyancy flux decides which way each parcel goes.* The dividing line is roughly where the net surface buoyancy flux changes sign, near the Polar Front — which means a shift in the westerlies or in Antarctic sea-ice extent can move the partition between the two cells.

**Uptake, by the numbers.**

| Quantity | Southern Ocean share (south of 30°S) | Area share |
|---|---|---|
| Anthropogenic heat uptake | 60–75 percent | about 30 percent |
| Anthropogenic carbon uptake | about 40 percent | about 30 percent |
| Global deep-water ventilation | dominant | — |

*In words: this basin does two to three times its share of the heat uptake and somewhat more than its share of the carbon.* The reason is supply, not temperature: only here does water arrive at the surface after centuries away, unequilibrated with the modern atmosphere.

**Drake Passage as a switch.** The ACC exists because there is an unblocked latitude band. Close Drake Passage — as it was before about 30 million years ago — and the zonal pressure gradient becomes available again, the ACC collapses, Sverdrup dynamics apply, and the Southern Ocean acquires a gyre with a western boundary current bringing warm water to Antarctica. Model experiments closing the passage produce a substantially warmer Antarctica and a different global overturning, and the opening of Drake Passage is one of the standard explanations offered for the Eocene–Oligocene glaciation of Antarctica. **A gap in a continent is a boundary condition on the global circulation.**

## Picture

![A meridional section of the Southern Ocean from 65 degrees south at the left to 40 degrees south at the right, surface to 4000 m. Grey dashed isopycnals slope steeply upward toward the south and outcrop at the surface. A grey arrow at the top marks the westerlies, and a blue arrow marks 28 sverdrups of northward Ekman transport. A dashed coral arrow at 2000 m marks 24 sverdrups of southward eddy transport, leaving a residual of only 4 sverdrups. A coral loop shows the upper cell: deep water rising along the outcropping isopycnals, flowing north in the Ekman layer, and subducting as Antarctic Intermediate Water and mode water. A blue loop shows the lower cell: deep water rising, moving south, being densified by brine rejection near Antarctica, and sinking as Antarctic Bottom Water](assets/06-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — the residual and its uncertainty).** At 55°S, $\tau = 0.16\ \mathrm{N\,m^{-2}}$, $|f| = 1.194\times10^{-4}\ \mathrm{s^{-1}}$, $\rho_0 = 1027\ \mathrm{kg\,m^{-3}}$, the circumpolar circumference is $2.30\times10^{7}\ \mathrm{m}$, the isopycnal slope is $s = 1.1\times10^{-3}$ and $K = 950\ \mathrm{m^2\,s^{-1}}$.

(a) *Ekman transport.*
$$\psi_E = \frac{\tau}{\rho_0|f|} = \frac{0.16}{1027\times1.194\times10^{-4}} = \frac{0.16}{0.1226} = 1.305\ \mathrm{m^2\,s^{-1}},$$
$$T_E = 1.305\times2.30\times10^{7} = 3.00\times10^{7}\ \mathrm{m^3\,s^{-1}} = 30.0\ \mathrm{Sv}\ \text{northward}.$$

(b) *Eddy transport.*
$$\psi_{\text{eddy}} = Ks = 950\times1.1\times10^{-3} = 1.045\ \mathrm{m^2\,s^{-1}},$$
$$T_{\text{eddy}} = 1.045\times2.30\times10^{7} = 2.40\times10^{7} = 24.0\ \mathrm{Sv}\ \text{southward}.$$

(c) *Residual.*
$$T_{\text{res}} = 30.0 - 24.0 = 6.0\ \mathrm{Sv}\ \text{northward}.$$

(d) *Sensitivity.* Suppose each term is known to 10 percent:
$$\delta T_{\text{res}} = \sqrt{(0.1\times30.0)^2 + (0.1\times24.0)^2} = \sqrt{9.0+5.76} = 3.84\ \mathrm{Sv},$$

so $T_{\text{res}} = 6.0 \pm 3.8$ Sv — a **64 percent** uncertainty from 10 percent inputs. And that assumes the errors are independent, which they are not: if $K$ responds to $\tau$, they are correlated, and the correlation happens to *reduce* the error in the residual. **Eddy compensation is not only a physical effect; it is also, fortunately, an error-cancelling one.**

**Example 2 (why you'd care — eddy saturation and what stronger westerlies actually do).** The Southern Hemisphere westerlies have strengthened by about 20 percent since 1980 and shifted poleward, driven by ozone depletion and greenhouse forcing. Work through the consequences under two assumptions and compare with observation.

*Assumption A: no eddy response ($K$ fixed).* From $s = \tau/(\rho_0 fK)$, the isopycnal slope rises 20 percent. Since ACC transport scales with $s$, transport rises from 173 to 208 Sv. The Ekman transport also rises 20 percent, from 30 to 36 Sv, while the eddy term is unchanged at 24 Sv, so the residual rises from 6 to 12 Sv — **doubled**.

*Assumption B: full compensation ($K \propto \tau$).* The slope is unchanged, so ACC transport is unchanged at 173 Sv. Both $\psi_E$ and $\psi_{\text{eddy}}$ rise 20 percent, so the residual rises 20 percent, from 6.0 to 7.2 Sv.

*Observation.* ACC transport has changed by at most a few percent — strongly favouring B for saturation. Eddy kinetic energy has risen substantially, with a lag of two to three years, which is the mechanism B requires. The residual's response is not directly measured, and eddy-resolving models put compensation at 50 to 90 percent, so the residual has probably risen by more than B's 20 percent and much less than A's 100 percent.

*Why the distinction matters enormously.* The residual overturning is what carries heat and carbon into the ocean interior. Doubling it would roughly double the Southern Ocean's uptake of anthropogenic carbon; a 20 percent rise would barely register. The two assumptions differ by a factor of five in a term that accounts for 40 percent of the global ocean carbon sink.

*The point.* **A small-scale process that a model cannot resolve is setting the sign and magnitude of a large-scale climate response.** This is the sharpest example in the course of why resolution is not a matter of aesthetics. A 1° model has no eddies, cannot compensate, and therefore behaves like assumption A — over-predicting the Southern Ocean's response to the observed wind trend. The standard remedy, a Gent–McWilliams parameterization with a *fixed* $K$, is only a partial fix, because compensation requires $K$ to *respond*. The current generation of schemes makes $K$ depend on the local slope and stratification precisely to capture this, and how well they do is an open question that is checked against eddy-resolving simulations rather than against data, because the data do not exist.

## Watch out

- **You might think** the Southern Ocean takes up so much heat because it is cold. **Actually** solubility and heat capacity vary little; what matters is *supply* of unequilibrated water. The Southern Ocean is where centuries-old water surfaces, and old water has not yet absorbed its share of the anthropogenic perturbation. Take away the upwelling and the uptake would collapse regardless of temperature.
- **You might think** eddy saturation means the Southern Ocean does not respond to the wind. **Actually** the *transport* does not respond much; the eddy field, the residual circulation, the outcrop positions and the uptake all do. Saturation is a statement about one diagnostic, and it has been over-generalized in both directions.
- **You might think** the upper and lower cells are separate systems. **Actually** they are fed by the *same* upwelling and separated only by which side of the surface-buoyancy-flux zero line a parcel happens to surface on. A shift in that line moves water from one cell to the other, which is one of the more plausible mechanisms for large glacial–interglacial changes in the deep ocean.

## One-liner

> The Southern Ocean is the one place where deep density surfaces reach the sky, so it is the only window through which the abyss communicates with the atmosphere — and the circulation through that window is a small residual between a wind-driven overturning and an opposing eddy-driven one, which is why the basin does most of the planet's heat uptake and why models that cannot resolve eddies get its response to changing winds wrong.

## Problems

**P1 (🟢)** At 60°S, $\tau = 0.20\ \mathrm{N\,m^{-2}}$, $|f| = 1.263\times10^{-4}\ \mathrm{s^{-1}}$, $\rho_0 = 1027$, circumpolar circumference $2.00\times10^{7}\ \mathrm{m}$, $s = 1.3\times10^{-3}$, $K = 1100\ \mathrm{m^2\,s^{-1}}$. (a) Compute the Ekman transport in Sv. (b) Compute the eddy transport in Sv. (c) Compute the residual and express it as a percentage of the Ekman term.

**P2 (🟡)** Eddy saturation, quantitatively. The equilibrium slope satisfies $s = \tau/(\rho_0 f K)$, and the eddy diffusivity responds as $K = K_0(s/s_0)^n$ for some exponent $n$. (a) Show that $s \propto \tau^{1/(1+n)}$. (b) For $n = 0$, $n = 1$ and $n = 3$, compute the fractional change in $s$ for a 20 percent increase in $\tau$. (c) Observations say the ACC transport, which scales with $s$, changes by under 5 percent for a 20 percent wind increase. Infer a lower bound on $n$. (d) Comment on what a large $n$ means physically.

**P3 (🔴, optional)** The Southern Ocean takes up about 40 percent of the anthropogenic carbon entering the ocean, in about 30 percent of the ocean's area. (a) The global ocean sink is about $2.8\ \mathrm{PgC\,yr^{-1}}$. Compute the Southern Ocean's uptake and the uptake per unit area, taking the ocean area as $3.6\times10^{14}\ \mathrm{m^2}$. (b) Compare with the global mean per unit area and give the enhancement factor. (c) The residual overturning brings up water that last equilibrated with a pre-industrial atmosphere. If that water carries a DIC deficit relative to modern equilibrium of $40\ \mathrm{\mu mol\,kg^{-1}}$, and the residual overturning is 6 Sv, compute the implied carbon uptake in PgC yr⁻¹. (d) Compare with (a) and comment on whether the residual overturning alone can account for the Southern Ocean sink.

<details>
<summary>Solutions</summary>

**P1** (a) $$\psi_E = \frac{0.20}{1027\times1.263\times10^{-4}} = \frac{0.20}{0.1297} = 1.542\ \mathrm{m^2\,s^{-1}},$$
$$T_E = 1.542\times2.00\times10^{7} = 3.08\times10^{7} = 30.8\ \mathrm{Sv}\ \text{northward}.$$

(b) $$\psi_{\text{eddy}} = 1100\times1.3\times10^{-3} = 1.430\ \mathrm{m^2\,s^{-1}},$$
$$T_{\text{eddy}} = 1.430\times2.00\times10^{7} = 2.86\times10^{7} = 28.6\ \mathrm{Sv}\ \text{southward}.$$

(c) $$T_{\text{res}} = 30.8 - 28.6 = 2.2\ \mathrm{Sv}, \qquad \frac{2.2}{30.8} = 7.1\ \text{percent}.$$

The residual is seven percent of the Ekman term — so a 7 percent error in either large term would wipe it out entirely.

**P2** (a) Substituting $K = K_0(s/s_0)^n$ into $s = \tau/(\rho_0fK)$:

$$s = \frac{\tau}{\rho_0 f K_0}\left(\frac{s_0}{s}\right)^n \;\Longrightarrow\; s^{1+n} = \frac{\tau\,s_0^n}{\rho_0 f K_0} \;\Longrightarrow\; s \propto \tau^{1/(1+n)}. \quad\checkmark$$

(b) A 20 percent increase means $\tau \to 1.2\tau$, so $s \to 1.2^{1/(1+n)}s$:

| $n$ | $1/(1+n)$ | $s$ change |
|---|---|---|
| 0 | 1 | $+20$ percent |
| 1 | 0.5 | $1.2^{0.5} = 1.095$, $+9.5$ percent |
| 3 | 0.25 | $1.2^{0.25} = 1.047$, $+4.7$ percent |

(c) Requiring the change in $s$ to be under 5 percent:

$$1.2^{1/(1+n)} < 1.05 \;\Longrightarrow\; \frac{\ln 1.2}{1+n} < \ln 1.05 \;\Longrightarrow\; 1+n > \frac{0.1823}{0.04879} = 3.74,$$

so $n > 2.74$. **The eddy diffusivity must depend on the slope at least as strongly as the cube.**

(d) A large $n$ means the eddy field responds *very* stiffly to the slope: a small steepening produces a large increase in eddy activity, which flattens the slope back almost completely. The slope is therefore pinned near a threshold value, and the wind's extra momentum goes into eddies rather than into the mean flow.

Physically, this is what one expects if the slope sits at a **marginal stability** condition — the isopycnals steepen only until baroclinic instability becomes vigorous enough to arrest further steepening, and near a threshold the growth rate rises steeply with the supercriticality. It is the oceanic version of convective adjustment in the atmosphere, where the lapse rate is pinned near the moist adiabat and extra heating goes into more convection rather than a steeper lapse rate. **Whenever a system is held near an instability threshold, its state is insensitive to the forcing and its fluctuation level is very sensitive.**

**P3** (a) $$U_{\text{SO}} = 0.40\times2.8 = 1.12\ \mathrm{PgC\,yr^{-1}}.$$

Area: $0.30\times3.6\times10^{14} = 1.08\times10^{14}\ \mathrm{m^2}$.

$$\text{per unit area} = \frac{1.12\times10^{15}\ \mathrm{gC\,yr^{-1}}}{1.08\times10^{14}\ \mathrm{m^2}} = 10.4\ \mathrm{gC\,m^{-2}\,yr^{-1}}.$$

(b) Global mean: $$\frac{2.8\times10^{15}}{3.6\times10^{14}} = 7.8\ \mathrm{gC\,m^{-2}\,yr^{-1}},$$
$$\text{enhancement} = \frac{10.4}{7.8} = 1.33.$$

A third above the global mean per unit area — significant but not dramatic, which is worth noting against the impression the "40 percent" headline gives.

(c) A residual overturning of $6\ \mathrm{Sv} = 6\times10^{6}\ \mathrm{m^3\,s^{-1}}$ carries a mass flux of $6\times10^{6}\times1027 = 6.16\times10^{9}\ \mathrm{kg\,s^{-1}}$. With a DIC deficit of $40\ \mathrm{\mu mol\,kg^{-1}} = 4.0\times10^{-5}\ \mathrm{mol\,kg^{-1}}$:

$$\text{flux} = 6.16\times10^{9}\times4.0\times10^{-5} = 2.46\times10^{5}\ \mathrm{mol\,C\,s^{-1}}.$$

Convert to PgC yr⁻¹ (12 g per mol, $3.156\times10^{7}$ s per year, $10^{15}$ g per Pg):

$$= 2.46\times10^{5}\times12\times3.156\times10^{7} = 9.32\times10^{13}\ \mathrm{gC\,yr^{-1}} = 0.093\ \mathrm{PgC\,yr^{-1}}.$$

(d) Against the 1.12 PgC yr⁻¹ of (a), the residual overturning accounts for only **8 percent**. It cannot come close to explaining the Southern Ocean sink on its own.

The gap is real and its resolution is informative. Three things fill it.

1. **The upwelled water does not fully equilibrate before it re-subducts.** It is at the surface for weeks to months, and air–sea $\mathrm{CO_2}$ equilibration takes about a year (much slower than heat, because of the carbonate buffer of [climate-science 4.2](../../climate-science/lessons/04-02-ocean-carbon-revelle-factor.md)). So the residual-overturning estimate is an *upper* bound on that pathway, making the gap worse, not better.
2. **Most of the uptake is not by the overturning at all but by the mixed layer and the subducting mode waters** — the same subduction of [4.1](04-01-water-masses-world-ocean.md) and [6.2](06-02-ocean-heat-uptake-circulation.md), which moves far more water into the interior per year than the residual overturning does, over the whole area of the Subantarctic Zone.
3. **Solubility.** Cold water simply dissolves more $\mathrm{CO_2}$, and a substantial part of the Southern Ocean flux is the natural solubility pump ([6.3](06-03-ocean-carbon-pumps.md)) responding to the anthropogenic increase, rather than anything to do with the overturning.

**The lesson is that "the Southern Ocean takes up carbon because deep water upwells there" is a real mechanism that accounts for under a tenth of the effect.** A plausible story that gets the sign right and the magnitude wrong by an order of magnitude is a common and dangerous kind of error — and the way to catch it, as here, is to compute the flux the mechanism actually delivers rather than to check that it points the right way.

</details>

## Flashback

**From Lesson 5.4 (Equatorial waves and the undercurrent):** An equatorial basin has an upper layer of 130 m with $\Delta\rho = 3.8\ \mathrm{kg\,m^{-3}}$, $\rho_0 = 1027$, $\beta = 2.29\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$. (a) Compute $g'$ and the Kelvin wave speed. (b) Compute the equatorial deformation radius. (c) A downwelling Kelvin wave produces a 12 cm sea-level anomaly; compute the thermocline displacement, and state why altimetry is such a sensitive instrument for the equatorial ocean.

<details>
<summary>Solution</summary>

(a) $$g' = \frac{9.81\times3.8}{1027} = 0.03630\ \mathrm{m\,s^{-2}}, \qquad c = \sqrt{0.03630\times130} = \sqrt{4.719} = 2.17\ \mathrm{m\,s^{-1}}.$$

(b) $$L_{\text{eq}} = \sqrt{\frac{2.17}{2.29\times10^{-11}}} = \sqrt{9.48\times10^{10}} = 3.08\times10^{5}\ \mathrm{m} = 308\ \mathrm{km}.$$

(c) $$\Delta h = \frac{\rho_0}{\Delta\rho}\Delta\eta = \frac{1027}{3.8}\times0.12 = 270\times0.12 = 32.4\ \mathrm{m}.$$

Altimetry is exceptionally sensitive here because the internal displacement is amplified by the density ratio $\rho_0/\Delta\rho = 270$: a **12 cm** surface signal, comfortably within an altimeter's few-centimetre accuracy, corresponds to a **32 m** movement of the thermocline, which is a first-order change to the equatorial ocean's state and directly controls whether upwelling reaches cold water ([5.5](05-05-walker-bjerknes-enso.md)).

*Check.* The same amplification is why the whole equatorial Pacific's ENSO signal — 100 m of thermocline motion — shows up as only 30 to 50 cm of sea level. Before satellite altimetry, detecting that required a mooring array; since 1992 it is a global map every ten days. **A large density ratio is what turns a barely-measurable surface signal into a complete picture of a subsurface field**, and it is the single reason altimetry transformed equatorial oceanography.

</details>

## Connections

- **Backward:** the outcropping isopycnals are [2.2](02-02-thermal-wind-acc.md)'s ACC structure, the eddies are [3.4](03-04-mesoscale-eddies-baroclinic-instability.md)'s, the wind-driven upwelling is [4.4](04-04-what-drives-the-overturning.md)'s, and the water masses produced are [4.1](04-01-water-masses-world-ocean.md)'s and [4.2](04-02-deep-water-formation-convection.md)'s.
- **Forward:** the subduction of newly-ventilated water is the heat-uptake mechanism of [6.2](06-02-ocean-heat-uptake-circulation.md); the exposure of old, carbon-poor deep water is the setting for the pumps of [6.3](06-03-ocean-carbon-pumps.md) and for the glacial $\mathrm{CO_2}$ problem; the observational difficulty is a running theme of [6.5](06-05-observing-the-ocean.md).
- **Sideways (climate science):** the ocean heat uptake efficacy of [`climate-science` 3.1](../../climate-science/lessons/03-01-ocean-heat-uptake-thermal-inertia.md), $\varepsilon \approx 1.3$, exists precisely because uptake is concentrated *here* rather than spread evenly, and suppressing warming in the Southern Ocean has an outsized effect on global outgoing radiation. That lesson took $\varepsilon > 1$ as given; this one supplies the circulation that causes it.
