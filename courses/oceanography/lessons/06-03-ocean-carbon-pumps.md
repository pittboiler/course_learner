# Physical Oceanography · Lesson 6.3: How the ocean takes up carbon — the pumps

> ⏱ ~15 min · Module 6: The ocean in the climate system · Builds on: [6.1](06-01-southern-ocean-hinge.md), [6.2](06-02-ocean-heat-uptake-circulation.md) · Unlocks: [6.4](06-04-amoc-stability-stommel-model.md)

## Why this matters

The ocean holds about **38,000 PgC**, roughly fifty times the atmosphere's 870 PgC. Whether the atmosphere contains 180 ppm or 400 ppm of $\mathrm{CO_2}$ is therefore, on any timescale longer than a few centuries, decided by the ocean.

Carbon is not uniformly distributed in it: surface water holds about $2000\ \mathrm{\mu mol\,kg^{-1}}$ of dissolved inorganic carbon and the deep ocean about $2300$. That vertical gradient is what keeps the atmosphere's $\mathrm{CO_2}$ as low as it is, and it is maintained by three **pumps** — physical, biological, and a third that works in the opposite direction to the other two.

[climate-science 4.2](../../climate-science/lessons/04-02-ocean-carbon-revelle-factor.md) built the carbonate chemistry: the Revelle factor, the buffering, why the ocean absorbs only a tenth of what its raw capacity suggests. This lesson supplies the pumps that set the gradient in the first place — and then confronts the outstanding problem they create, which is that nobody can fully account for why the glacial atmosphere held 100 ppm less $\mathrm{CO_2}$ than the interglacial one.

## The idea

**Three pumps, and they do not all point the same way.**

*The solubility pump* is pure physics. $\mathrm{CO_2}$ is about twice as soluble at 0 °C as at 25 °C. Water cooled at high latitudes takes up carbon and then sinks, carrying it down. Since deep water forms only in cold places, the deep ocean is filled with water that loaded up when cold.

*The soft-tissue pump* is biology. Phytoplankton fix carbon at the surface; a fraction sinks as particles; bacteria respire it back to $\mathrm{CO_2}$ at depth. Carbon is thereby moved from the surface, where it can talk to the atmosphere, to the deep, where it cannot. This is the largest of the three.

*The carbonate pump* is also biology, and it **works backwards**. Organisms making calcium carbonate shells remove one unit of DIC but *two* units of alkalinity from the surface. Removing alkalinity shifts the carbonate equilibrium toward $\mathrm{CO_2}$, so building shells **raises** surface $p\mathrm{CO_2}$. The two biological pumps oppose, and the net biological effect is their difference.

**Depth of remineralization is what determines how long carbon stays down.** A particle respired at 200 m releases carbon that returns to the surface in years; one respired at 2000 m releases carbon that stays down for centuries. The sinking flux falls off as a power law with depth — Martin's curve — and small changes in its exponent move large amounts of carbon between reservoirs.

**And this is where the glacial problem lives.** Atmospheric $\mathrm{CO_2}$ was 180 ppm at the Last Glacial Maximum against 280 in the pre-industrial Holocene. That is 100 ppm, about 200 PgC out of the atmosphere and into the ocean, and it happened repeatedly, in step with the ice ages. Every mechanism proposed accounts for part of it, and no accepted combination accounts for all of it. **It is arguably the largest unresolved quantitative problem in the carbon cycle.**

## The formal version

**The vertical gradient.**

| Reservoir | DIC ($\mathrm{\mu mol\,kg^{-1}}$) | Alkalinity ($\mathrm{\mu eq\,kg^{-1}}$) |
|---|---|---|
| Surface, low latitude | 2000 | 2300 |
| Surface, high latitude | 2100 | 2320 |
| Deep | 2300 | 2420 |
| Volume-weighted mean | 2245 | 2400 |

*In words: DIC rises about 15 percent from surface to abyss, and alkalinity about 5 percent.* The DIC increase has two causes — solubility and remineralization — and separating them is what the pump decomposition does.

**Attribution of the gradient.**

| Pump | Contribution to surface-to-deep DIC difference | Effect on surface $p\mathrm{CO_2}$ |
|---|---|---|
| Solubility | about 30 percent | lowers |
| Soft tissue | about 70 percent | lowers strongly |
| Carbonate | negative (removes DIC *and* alkalinity) | **raises** |

**The carbonate counter-pump, quantitatively.** Forming $\mathrm{CaCO_3}$ removes 1 mol of DIC and 2 mol-equivalents of alkalinity. The effect on $p\mathrm{CO_2}$ runs through the buffer factors:

$$\frac{\partial\ln p\mathrm{CO_2}}{\partial\ln\mathrm{DIC}} \approx +10, \qquad \frac{\partial\ln p\mathrm{CO_2}}{\partial\ln\mathrm{TA}} \approx -9.4.$$

*In words: raising DIC raises $p\mathrm{CO_2}$ steeply; raising alkalinity lowers it almost as steeply.* Because $\mathrm{TA} > \mathrm{DIC}$ and the alkalinity change is twice as large in absolute terms, the alkalinity effect wins and calcification raises $p\mathrm{CO_2}$. The **rain ratio** — moles of $\mathrm{CaCO_3}$ exported per mole of organic carbon — is about 0.06 to 0.10, small enough that the soft-tissue pump wins overall but large enough that changes in it matter.

**Export production and the Martin curve.** Global net primary production in the ocean is about $50\ \mathrm{PgC\,yr^{-1}}$; of that, roughly $10\ \mathrm{PgC\,yr^{-1}}$ sinks out of the surface layer as **export production**. Below 100 m the flux falls as

$$\boxed{\ F(z) = F_{100}\left(\frac{z}{100\ \mathrm{m}}\right)^{-b}, \qquad b \approx 0.86\ }$$

*In words: the sinking flux decays as a power law, with about 14 percent of what leaves 100 m surviving to 1000 m.*

| Depth | Fraction of export surviving | Global flux (PgC yr⁻¹) |
|---|---|---|
| 100 m | 1.00 | 10 |
| 500 m | 0.25 | 2.5 |
| 1000 m | 0.14 | 1.4 |
| 2000 m | 0.076 | 0.76 |

**A larger $b$ means shallower remineralization and a weaker pump**, and $b$ varies regionally from about 0.4 (efficient transfer, high-latitude diatom-dominated) to 1.3 (inefficient, warm oligotrophic gyres). Predicting how $b$ responds to warming is a live problem, and the sign matters: warmer water respires faster, which shallows remineralization, which weakens the pump — a positive carbon-climate feedback.

**The Southern Ocean's special role.** The pumps only hold carbon down if the deep water does not come straight back up carrying it. In the Southern Ocean it does ([6.1](06-01-southern-ocean-hinge.md)): upwelled deep water is DIC-rich and outgasses $\mathrm{CO_2}$. So the efficiency of the global biological pump is set largely by **how completely the nutrients in Southern Ocean surface water are used before they subduct again**. At present they are not — the Southern Ocean is the largest of the ocean's **high-nutrient, low-chlorophyll** regions, where nitrate is abundant and phytoplankton growth is limited by iron. Any process that increased Southern Ocean nutrient utilization would strengthen the global pump substantially.

**The glacial $\mathrm{CO_2}$ problem.** Candidate mechanisms and their approximate contributions:

| Mechanism | $\Delta p\mathrm{CO_2}$ (ppm) | Confidence |
|---|---|---|
| Colder ocean (solubility) | $-30$ | high |
| Saltier ocean (lower sea level) | $+10$ | high |
| Reduced terrestrial biosphere (carbon released to ocean) | $+15$ | medium |
| Iron fertilization of the Southern Ocean by glacial dust | $-20$ to $-40$ | medium |
| Increased Southern Ocean stratification and sea-ice capping | $-30$ to $-50$ | medium |
| Carbonate compensation (deep-sea $\mathrm{CaCO_3}$ dissolution) | $-20$ to $-30$ | medium |
| **Required total** | $\mathbf{-100}$ | — |

*In words: the individual terms can be made to sum to about the right answer, but with error bars that overlap zero for several of them and with a strong dependence on which combination is chosen.* The two Southern Ocean mechanisms carry most of the weight, which is the main reason the Southern Ocean occupies so much of the paleoceanographic literature.

## Picture

![Two panels. On the left, dissolved inorganic carbon and alkalinity plotted against depth from the surface to 5000 m: DIC rises from 2000 micromoles per kilogram at the surface to 2320 in the abyss, alkalinity from 2300 to 2430, both increasing most sharply in the upper kilometre. On the right, a schematic of the three pumps as downward arrows between the surface and the deep ocean: the solubility pump, cold water dissolving more and sinking; the soft-tissue pump, organic particles sinking and being respired, which lowers surface pCO2 strongly; and the carbonate pump, shells sinking and dissolving, which removes two units of alkalinity per unit of DIC and therefore raises surface pCO2](assets/06-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — the dead-ocean calculation).** Suppose the biological pump stopped entirely and DIC became uniform throughout the ocean at its volume-weighted mean of $2245\ \mathrm{\mu mol\,kg^{-1}}$, against a present surface value of $2000$. Take the Revelle factor $R = 10$ and a pre-industrial atmosphere of 280 ppm.

(a) *Fractional rise in surface DIC.*
$$\frac{\Delta\mathrm{DIC}}{\mathrm{DIC}} = \frac{2245-2000}{2000} = 0.1225.$$

(b) *Fractional rise in surface $p\mathrm{CO_2}$.* By the definition of the Revelle factor,
$$\frac{\Delta p\mathrm{CO_2}}{p\mathrm{CO_2}} = R\frac{\Delta\mathrm{DIC}}{\mathrm{DIC}} = 10\times0.1225 = 1.225.$$

(c) *New atmospheric concentration.* Since the atmosphere equilibrates with the surface ocean,
$$p\mathrm{CO_2} = 280\times(1+1.225) = 280\times2.225 = 623\ \mathrm{ppm}.$$

An increase of 343 ppm — so **the biological pump holds down of order 300 ppm of $\mathrm{CO_2}$**, and without it the pre-industrial atmosphere would have looked like a moderately high-emissions scenario.

(d) *Published "dead ocean" estimates give 450 to 500 ppm.* Two reasons the crude calculation overshoots, and both are physically important.

*First, alkalinity.* Shutting off the biological pump shuts off the **carbonate** pump too. That returns alkalinity to the surface, which lowers $p\mathrm{CO_2}$ and partly offsets the DIC rise. Since the carbonate pump's effect on $p\mathrm{CO_2}$ is opposite in sign to the soft-tissue pump's, removing both is less dramatic than removing the soft-tissue pump alone.

*Second, where the carbon ends up.* The calculation assumed the atmosphere simply follows the surface ocean. In fact, once the atmosphere and ocean re-equilibrate, the **ocean absorbs most of the released carbon back**. The buffered partition ([climate-science 4.2](../../climate-science/lessons/04-02-ocean-carbon-revelle-factor.md)) puts roughly 80 percent of any perturbation in the ocean and 20 percent in the atmosphere at equilibrium. So the atmospheric rise is much smaller than the surface-ocean $p\mathrm{CO_2}$ rise would suggest if the atmosphere were the only sink. Over longer times, **carbonate compensation** — dissolution of sea-floor $\mathrm{CaCO_3}$ raising ocean alkalinity — takes down more still.

**Example 2 (why you'd care — could you fix the climate by fertilizing the ocean?).** Iron fertilization of the Southern Ocean has been proposed repeatedly as a geoengineering measure. Evaluate the upper bound.

*The mechanism.* The Southern Ocean is high-nutrient, low-chlorophyll: surface nitrate is around $25\ \mathrm{\mu mol\,kg^{-1}}$ where a fully-utilizing system would draw it to near zero. Adding iron lets the phytoplankton use it, which exports carbon at the Redfield ratio $\mathrm{C:N} = 106:16 = 6.6$.

*The upper bound.* Suppose all $25\ \mathrm{\mu mol\,kg^{-1}}$ of nitrate in Southern Ocean surface water were consumed. The carbon exported per kilogram is

$$6.6\times25 = 165\ \mathrm{\mu mol\,C\,kg^{-1}} = 1.65\times10^{-4}\ \mathrm{mol\,kg^{-1}}.$$

The relevant water supply is the residual overturning bringing new nutrients to the surface — take 15 Sv, a mass flux of $1.54\times10^{10}\ \mathrm{kg\,s^{-1}}$:

$$\text{export} = 1.54\times10^{10}\times1.65\times10^{-4} = 2.54\times10^{6}\ \mathrm{mol\,C\,s^{-1}},$$
$$= 2.54\times10^{6}\times12\times3.156\times10^{7} = 9.6\times10^{14}\ \mathrm{gC\,yr^{-1}} = 0.96\ \mathrm{PgC\,yr^{-1}}.$$

**About 1 PgC per year**, against anthropogenic emissions of about 10 PgC per year.

*And that is the upper bound, not an estimate.* Four things reduce it:

1. **Only about 14 percent of exported carbon reaches 1000 m** (the Martin curve), and only carbon sequestered below the ventilated layer is out of contact with the atmosphere for a century or more.
2. **The carbonate counter-pump** partly offsets the soft-tissue gain if the added production is calcifying.
3. **Nutrient robbing**: nutrients consumed in the Southern Ocean are nutrients not exported northward in AAIW and mode water, so production elsewhere falls. Model estimates put this offset at 30 to 50 percent.
4. **Complete utilization is not achievable**; the observed response to actual iron-addition experiments is a bloom that consumes a fraction of the available nitrate, and the export efficiency measured in those experiments has generally been low.

Realistic model estimates of sustained global-scale Southern Ocean fertilization give **0.1 to 0.3 PgC yr⁻¹**, one to three percent of emissions.

*The point.* The calculation is worth doing precisely because the mechanism is real, the reasoning is sound, and the answer is still nowhere near enough. **An upper bound computed from a stoichiometric ratio and a water supply is the right first move on any proposal of this kind**, and here it disposes of the idea as a primary mitigation strategy in one line — before any of the ecological objections (which are also serious: sustained fertilization would expand oxygen minimum zones and alter Southern Ocean ecosystems irreversibly) need to be raised. Note also the structure of the argument's failure: the *concept* is fine and the *magnitude* is not, which is the commonest way a geoengineering proposal fails and the reason order-of-magnitude estimates should precede feasibility studies.

## Watch out

- **You might think** the biological pump works by burying carbon. **Actually** almost all exported carbon is respired back to $\mathrm{CO_2}$ within the water column; less than 0.5 percent reaches the sediments. The pump works by *delaying* the carbon's return, not by removing it, and the relevant quantity is the remineralization depth.
- **You might think** more calcifying plankton means more carbon drawdown. **Actually** calcification *raises* surface $p\mathrm{CO_2}$, because it removes twice as much alkalinity as DIC. Ocean acidification, by suppressing calcification, is a weak *negative* feedback on atmospheric $\mathrm{CO_2}$ — one of very few.
- **You might think** the ocean's enormous carbon reservoir means it can absorb our emissions. **Actually** the reservoir is irrelevant on human timescales; what matters is the rate of exchange, which is set by ventilation ([6.2](06-02-ocean-heat-uptake-circulation.md)) and by the Revelle buffering that reduces the effective capacity tenfold ([climate-science 4.2](../../climate-science/lessons/04-02-ocean-carbon-revelle-factor.md)).

## One-liner

> Three pumps hold the ocean's surface carbon 300 micromoles per kilogram below its deep value — solubility, sinking organic matter, and a carbonate pump that works backwards — and without the biological pair the pre-industrial atmosphere would have held several hundred parts per million more $\mathrm{CO_2}$ than it did.

## Problems

**P1 (🟢)** Export production at 100 m is $10\ \mathrm{PgC\,yr^{-1}}$ and the Martin exponent is $b = 0.86$. (a) Compute the flux surviving to 300 m, 1000 m and 3000 m. (b) Compute the fraction remineralized between 100 m and 1000 m. (c) Warming raises $b$ to 1.05. Recompute the flux at 1000 m and give the fractional change.

**P2 (🟡)** A surface water parcel has $\mathrm{DIC} = 2010\ \mathrm{\mu mol\,kg^{-1}}$, $\mathrm{TA} = 2310\ \mathrm{\mu eq\,kg^{-1}}$ and $p\mathrm{CO_2} = 280$ ppm. Take $\partial\ln p\mathrm{CO_2}/\partial\ln\mathrm{DIC} = 10$ and $\partial\ln p\mathrm{CO_2}/\partial\ln\mathrm{TA} = -9.4$. (a) A bloom exports $30\ \mathrm{\mu mol\,kg^{-1}}$ of organic carbon and no calcium carbonate. Compute the new $p\mathrm{CO_2}$. (b) The same bloom instead exports $30\ \mathrm{\mu mol\,kg^{-1}}$ of organic carbon *and* $3\ \mathrm{\mu mol\,kg^{-1}}$ of $\mathrm{CaCO_3}$ (rain ratio 0.10). Compute the changes in DIC and TA and hence the new $p\mathrm{CO_2}$. (c) Give the fraction of the drawdown that the carbonate pump cancels.

**P3 (🔴, optional)** The glacial $\mathrm{CO_2}$ problem. (a) Using the boss-problem machinery, compute what fraction of the biological pump's full 343 ppm effect the observed 100 ppm glacial drawdown represents. (b) Take the mechanism table above and compute the sum of the central estimates. (c) A 100 ppm drawdown corresponds to how many PgC removed from the atmosphere, given that 1 ppm $= 2.12\ \mathrm{PgC}$? (d) The terrestrial biosphere is estimated to have held 300 to 700 PgC *less* at the LGM than in the Holocene. Reconcile this with (c), stating where that carbon must have gone and what it does to the ocean's job. (e) Comment on why a mechanism list whose central estimates sum to roughly the right answer is nevertheless not a solution to the problem.

<details>
<summary>Solutions</summary>

**P1** (a) $$F(z) = 10\left(\frac{z}{100}\right)^{-0.86}.$$

$$F(300) = 10\times3^{-0.86} = 10\times0.3921 = 3.92\ \mathrm{PgC\,yr^{-1}},$$
$$F(1000) = 10\times10^{-0.86} = 10\times0.1380 = 1.38\ \mathrm{PgC\,yr^{-1}},$$
$$F(3000) = 10\times30^{-0.86} = 10\times0.0540 = 0.54\ \mathrm{PgC\,yr^{-1}}.$$

(b) $$\frac{10 - 1.38}{10} = 86\ \text{percent}$$ is remineralized between 100 m and 1000 m.

(c) $$F(1000) = 10\times10^{-1.05} = 10\times0.0891 = 0.891\ \mathrm{PgC\,yr^{-1}},$$
$$\frac{0.891-1.380}{1.380} = -35\ \text{percent}.$$

**A 22 percent increase in $b$ produces a 35 percent reduction in the carbon reaching 1000 m.** The sensitivity is large because $b$ appears in an exponent multiplied by $\ln(10) = 2.30$: $\delta F/F = -\ln(z/100)\,\delta b$, so at 1000 m the amplification factor is 2.30. This is why the temperature dependence of $b$ is one of the more consequential uncertainties in projecting the ocean carbon sink.

**P2** (a) Organic export removes DIC only:
$$\frac{\Delta\mathrm{DIC}}{\mathrm{DIC}} = \frac{-30}{2010} = -1.493\times10^{-2},$$
$$\frac{\Delta p\mathrm{CO_2}}{p\mathrm{CO_2}} = 10\times(-1.493\times10^{-2}) = -0.1493,$$
$$p\mathrm{CO_2} = 280\times(1-0.1493) = 238\ \mathrm{ppm}.$$

A drawdown of 42 ppm.

(b) Calcification removes 1 DIC and 2 TA per mole, so $3\ \mathrm{\mu mol\,kg^{-1}}$ of $\mathrm{CaCO_3}$ removes 3 from DIC and 6 from TA:

$$\Delta\mathrm{DIC} = -30 - 3 = -33, \qquad \Delta\mathrm{TA} = -6.$$

$$\frac{\Delta\mathrm{DIC}}{\mathrm{DIC}} = \frac{-33}{2010} = -1.642\times10^{-2}, \qquad \frac{\Delta\mathrm{TA}}{\mathrm{TA}} = \frac{-6}{2310} = -2.597\times10^{-3}.$$

$$\frac{\Delta p\mathrm{CO_2}}{p\mathrm{CO_2}} = 10(-1.642\times10^{-2}) + (-9.4)(-2.597\times10^{-3}) = -0.1642 + 0.02441 = -0.1398,$$
$$p\mathrm{CO_2} = 280\times(1-0.1398) = 241\ \mathrm{ppm}.$$

A drawdown of 39 ppm.

(c) The carbonate pump cancels $42 - 39 = 3$ ppm of a 42 ppm drawdown:

$$\frac{3}{42} = 7\ \text{percent}.$$

Modest at a rain ratio of 0.10 — but note that it is not negligible, and that at a rain ratio of 0.3, which some coccolithophore-dominated blooms approach, the cancellation would be over 20 percent. **This is why the composition of the exporting community matters and not just the amount exported**, and it is the basis for the argument that acidification-driven reductions in calcification are a weak negative feedback.

**P3** (a) $$\frac{100}{343} = 0.29,$$

about **29 percent** of the biological pump's full effect.

That is the single most useful framing of the glacial problem. The pump does not need to have been dramatically different — it needs to have been about 30 percent more efficient. A mechanism proposing to double the pump is proposing far too much; one delivering a few percent is proposing far too little.

(b) Central estimates from the table:

$$-30 + 10 + 15 + (-30) + (-40) + (-25) = -100\ \mathrm{ppm}.$$

(Taking $-30$ for iron fertilization and $-40$ for Southern Ocean stratification as the central values of their ranges, and $-25$ for carbonate compensation.) **The sum is exactly right**, which is precisely the situation part (e) asks about.

(c) $$100\ \mathrm{ppm}\times2.12\ \mathrm{PgC\,ppm^{-1}} = 212\ \mathrm{PgC}$$

removed from the atmosphere.

(d) The terrestrial biosphere held 300 to 700 PgC *less* at the LGM — colder, drier, ice-covered land supports less vegetation and soil carbon. That carbon had to go somewhere, and the only available reservoir on that timescale is the ocean.

So the ocean's task was not to absorb 212 PgC; it was to absorb **212 + 300 to 700 = 500 to 900 PgC**. The atmospheric drawdown is the *residual* after the ocean has also absorbed everything the land released.

**This makes the problem harder, not easier, by a factor of two to four**, and it is why the "reduced terrestrial biosphere" row in the table appears with a **positive** sign of about $+15$ ppm: releasing land carbon to the ocean raises ocean DIC and hence raises atmospheric $\mathrm{CO_2}$, against the observed fall.

(e) The list sums correctly, and that is not a solution, for three reasons.

First, **the uncertainties are large and correlated**. The two Southern Ocean rows span $-50$ to $-90$ ppm between them, and they are not independent — stratification and iron fertilization both act on the same surface nutrient utilization, so combining their central estimates double-counts to an unknown degree.

Second, **the sum is not a prediction.** Each term was estimated with the target of 100 ppm known, and terms whose sign or magnitude is poorly constrained have considerable freedom. A set of mechanisms tuned to sum to a known answer has not explained it; it has parameterized it.

Third, and most tellingly, **no coupled model reproduces the full 100 ppm from first principles.** Comprehensive Earth system models run with glacial boundary conditions typically achieve 40 to 70 ppm of the drawdown, with the shortfall attributed to whichever Southern Ocean process the modellers consider least well represented. The gap has narrowed over three decades but has not closed.

The general point is one worth carrying beyond this problem: **a budget that closes is necessary but very far from sufficient.** The test of a mechanism list is whether it *predicts* the answer under boundary conditions it was not tuned to, and for glacial $\mathrm{CO_2}$ the natural test — the other glacial cycles, which show the same 100 ppm amplitude with different ice-sheet and dust histories — is one the current explanations pass only loosely.

</details>

## Flashback

**From Lesson 6.1 (The Southern Ocean — hinge of the global system):** At 50°S, $\tau = 0.18\ \mathrm{N\,m^{-2}}$, $|f| = 1.117\times10^{-4}\ \mathrm{s^{-1}}$, $\rho_0 = 1027$, circumpolar circumference $2.57\times10^{7}\ \mathrm{m}$, isopycnal slope $s = 1.4\times10^{-3}$, $K = 1000\ \mathrm{m^2\,s^{-1}}$. (a) Compute the Ekman transport in Sv. (b) Compute the eddy transport in Sv. (c) Compute the residual, and state what a 10 percent error in the Ekman term alone would do to it.

<details>
<summary>Solution</summary>

(a) $$\psi_E = \frac{0.18}{1027\times1.117\times10^{-4}} = \frac{0.18}{0.11472} = 1.569\ \mathrm{m^2\,s^{-1}},$$
$$T_E = 1.569\times2.57\times10^{7} = 4.03\times10^{7} = 40.3\ \mathrm{Sv}\ \text{northward}.$$

(b) $$\psi_{\text{eddy}} = 1000\times1.4\times10^{-3} = 1.400\ \mathrm{m^2\,s^{-1}},$$
$$T_{\text{eddy}} = 1.400\times2.57\times10^{7} = 3.60\times10^{7} = 36.0\ \mathrm{Sv}\ \text{southward}.$$

(c) $$T_{\text{res}} = 40.3 - 36.0 = 4.3\ \mathrm{Sv}.$$

A 10 percent error in the Ekman term is $4.0$ Sv — **almost exactly the size of the residual itself**. The residual would range from $0.3$ to $8.3$ Sv, an uncertainty of nearly 100 percent, from a 10 percent uncertainty in one input.

*Check.* The amplification factor is $T_E/T_{\text{res}} = 40.3/4.3 = 9.4$, so fractional errors are magnified about tenfold. This is the same structure met in [4.4](04-04-what-drives-the-overturning.md) and [4.5](04-05-meridional-heat-transport-bjerknes.md), and it is worth stating as a general rule: **when the quantity you care about is the difference of two much larger ones, the fractional uncertainty is amplified by their ratio to the residual**, and no improvement in either measurement helps much unless the errors are correlated. In the Southern Ocean they *are* partly correlated, through eddy compensation, which is the one piece of good news in the problem.

</details>

## Connections

- **Backward:** the upwelling that returns DIC-rich deep water to the surface is [6.1](06-01-southern-ocean-hinge.md)'s; the subduction that carries anthropogenic carbon down is [6.2](06-02-ocean-heat-uptake-circulation.md)'s, operating on a different tracer; the deep water masses that store the carbon are [4.1](04-01-water-masses-world-ocean.md)'s.
- **Forward:** [6.4](06-04-amoc-stability-stommel-model.md) asks what happens if the circulation that supports all of this becomes unstable; [6.5](06-05-observing-the-ocean.md) covers how DIC and alkalinity are actually measured, which is by repeat hydrography rather than by any autonomous platform.
- **Sideways (climate science):** the Revelle factor and the buffered partition come from [`climate-science` 4.2](../../climate-science/lessons/04-02-ocean-carbon-revelle-factor.md), and the acidification consequences of the same chemistry from [4.3](../../climate-science/lessons/04-03-ocean-acidification.md). That course took the vertical DIC gradient as given; this one builds it.
