# Climate Physics · Lesson 4.3: Ocean acidification

> ⏱ ~15 min · Module 4: The carbon cycle & ocean chemistry · Builds on: [4.2](04-02-ocean-carbon-revelle-factor.md), [general-chemistry 4.2](../../general-chemistry/lessons/04-02-buffers-titration.md) · Unlocks: [4.4](04-04-tcre-carbon-budgets-net-zero.md), [5.6](05-06-tipping-elements-thresholds.md)

## Why this matters

Acidification is the other $\mathrm{CO_2}$ problem, and it has a property nothing else in this course has: **it is essentially certain.** Every projection so far has carried a factor-of-two uncertainty inherited from clouds or aerosols. Ocean pH does not. Given an emissions path, the resulting seawater chemistry follows from equilibrium constants measured in a laboratory to three decimal places, with error bars a percent wide. If you want the most confidently predictable consequence of burning fossil fuels, it is this one — and it is a consequence that no amount of solar geoengineering can touch, because it does not go through temperature at all.

## The idea

**Dissolving $\mathrm{CO_2}$ in water makes carbonic acid.** The reaction that lets the ocean absorb carbon ([4.2](04-02-ocean-carbon-revelle-factor.md)) releases protons on the way:

$$\mathrm{CO_2} + \mathrm{H_2O} \rightleftharpoons \mathrm{H_2CO_3} \rightleftharpoons \mathrm{H^+} + \mathrm{HCO_3^-}.$$

More $\mathrm{CO_2}$ in, more protons, lower pH. Surface-ocean pH has fallen from about 8.17 to 8.05 since 1750.

**A tenth of a pH unit sounds trivial and is not.** pH is logarithmic, so $-0.12$ is a **30 percent increase** in hydrogen ion concentration. Under high emissions, pH reaches about 7.7 by 2100 — a 190 percent increase, roughly tripling the proton concentration. This is faster than anything in the geological record outside a bolide impact, and *rate* is what matters for organisms, because slow changes let alkalinity from rock weathering catch up.

**The organism-relevant quantity is not pH but carbonate ion.** Calcifiers build shells from calcium carbonate, and the reaction that builds them competes with the protons. The proper measure is the **saturation state** $\Omega$ — how supersaturated the water is with respect to a given mineral form. $\Omega$ has fallen from about 3.4 to 2.8 for aragonite at the surface, and is heading for 2 or below.

**And the carbonate ion falls much faster than pH.** Look at the speciation curve: seawater sits on the steep left flank of the carbonate fraction, so a modest pH drop takes a large bite out of $\mathrm{CO_3^{2-}}$. That is the same fact as the Revelle factor, seen from the other side.

**"Acidification" does not mean the ocean is becoming acidic.** It stays basic, above pH 7.7 everywhere. The word describes the direction, as "warming" describes a direction without implying the planet is hot. Getting this right matters, because the imprecision has been used to dismiss the whole issue.

## The formal version

**Speciation and pH.** With DIC fixed and only pH varying, the fractional speciation follows from $K_1$ and $K_2$:

$$\frac{[\mathrm{CO_2^*}]}{\mathrm{DIC}} = \frac{1}{D}, \quad \frac{[\mathrm{HCO_3^-}]}{\mathrm{DIC}} = \frac{K_1/[\mathrm{H^+}]}{D}, \quad \frac{[\mathrm{CO_3^{2-}}]}{\mathrm{DIC}} = \frac{K_1K_2/[\mathrm{H^+}]^2}{D},$$

with $D = 1 + K_1/[\mathrm{H^+}] + K_1K_2/[\mathrm{H^+}]^2$. Using seawater apparent constants $\mathrm{p}K_1 = 5.85$, $\mathrm{p}K_2 = 8.92$:

| pH | $\mathrm{CO_2^*}$ | $\mathrm{HCO_3^-}$ | $\mathrm{CO_3^{2-}}$ |
|---|---|---|---|
| 8.17 (1750) | 0.4 percent | 84.6 percent | 15.0 percent |
| 8.05 (today) | 0.6 percent | 87.6 percent | 11.8 percent |
| 7.70 (2100, high emissions) | 1.3 percent | 93.1 percent | 5.6 percent |

*In words: a pH drop of 0.47 units cuts the carbonate ion by nearly two thirds while barely changing the bicarbonate.* This is the whole of ocean acidification in one table.

**The saturation state.** For a carbonate mineral,

$$\Omega = \frac{[\mathrm{Ca^{2+}}][\mathrm{CO_3^{2-}}]}{K_{sp}'},$$

with $K_{sp}'$ the stoichiometric solubility product for that mineral form at the local temperature, salinity and pressure. *In words: $\Omega$ measures how far the water is from equilibrium with the solid — above 1 the mineral tends to precipitate, below 1 it tends to dissolve.*

Since $[\mathrm{Ca^{2+}}]$ is essentially constant in seawater (it is a conservative ion), **$\Omega$ tracks the carbonate ion directly**. This is why $\Omega$ and $[\mathrm{CO_3^{2-}}]$ are used interchangeably in the literature.

Two mineral forms matter:

| Form | Relative solubility | Used by |
|---|---|---|
| **Calcite** | less soluble | coccolithophores, foraminifera, most molluscs |
| **Aragonite** | ~1.5× more soluble | corals, pteropods, many bivalve larvae |

Aragonite is the vulnerable one: $\Omega_{\text{arag}} \approx \Omega_{\text{cal}}/1.5$, so aragonite builders hit trouble first. Surface values:

| Epoch | $\Omega_{\text{arag}}$ (tropical surface) |
|---|---|
| 1750 | 3.4 |
| Today | 2.8 |
| 2100, high emissions | 1.8 |

**The saturation horizon.** $\Omega$ falls with depth for two reasons: pressure increases $K_{sp}'$ (carbonate is more soluble at depth), and remineralization of sinking organic matter adds $\mathrm{CO_2}$ to deep water, lowering $\mathrm{CO_3^{2-}}$. The depth at which $\Omega = 1$ is the **saturation horizon**, below which unprotected carbonate dissolves.

Its depth varies enormously by basin, and the reason is a nice piece of ocean physics: deep water forms in the North Atlantic, travels the global conveyor, and surfaces in the North Pacific after roughly a thousand years, accumulating remineralized carbon the whole way. So Pacific deep water is old, carbon-rich and carbonate-poor:

| Basin | Aragonite saturation horizon |
|---|---|
| North Atlantic | 2000–3000 m |
| North Pacific | 100–300 m |

**Both are shoaling** as anthropogenic carbon penetrates from above. In parts of the North Pacific and the Southern Ocean the aragonite horizon has risen tens to hundreds of metres already, and seasonal upwelling along the North American west coast now brings undersaturated water directly onto the shelf — which is where the oyster-hatchery failures of 2007–2008 came from, the first economically consequential acidification impact on record.

**What $\Omega$ does to organisms.** Calcification rate falls roughly linearly with $\Omega$ over the range 1 to 4 for corals and many other calcifiers. Below $\Omega = 1$ dissolution becomes thermodynamically favoured, though living organisms actively control their internal chemistry and do not simply dissolve — they pay a rising metabolic cost instead, which shows up as thinner shells, slower growth, and higher larval mortality. Pteropods, aragonite-shelled and abundant in polar surface waters that are already close to $\Omega = 1$, are the standard sentinel.

There are winners too: seagrasses and some algae are carbon-limited and grow faster with more $\mathrm{CO_2}$. The concern is not that everything suffers but that the *composition* of ecosystems shifts on a timescale far shorter than adaptation.

**Why acidification is not a climate feedback.** It is worth being precise. Acidification does not change the radiation budget appreciably, so it is not a feedback in the sense of Module 2. It is a *parallel consequence* of the same cause. One place the two do connect: as the buffer weakens ([4.2](04-02-ocean-carbon-revelle-factor.md)), the ocean absorbs less, which raises atmospheric $\mathrm{CO_2}$, which *is* a carbon-cycle feedback — but it acts through the airborne fraction, not through radiation.

**And why solar geoengineering cannot address it.** Stratospheric aerosol injection ([6.5](06-05-scenarios-projections-intervention.md)) reduces the temperature response to a given $\mathrm{CO_2}$ level. It does nothing to atmospheric $\mathrm{CO_2}$ and therefore nothing to seawater chemistry. **Acidification is the sharpest argument that solar geoengineering is not a substitute for emissions reduction**, and it is a purely chemical argument requiring no modelling at all.

## Picture

![Fractions of dissolved inorganic carbon present as dissolved carbon dioxide, bicarbonate and carbonate, plotted against pH from 5 to 10. Bicarbonate in blue dominates between pH 6 and 9, peaking near pH 7.4. Dissolved carbon dioxide in grey dominates below pH 6. Carbonate in coral rises steeply above pH 8. Vertical dashed lines mark the pre-industrial surface-ocean pH of 8.17 and the projected 2100 high-emissions value of 7.7, with the present-day 8.05 between them. Over that range the carbonate fraction falls from 15.0 to 5.6 percent of DIC while the bicarbonate fraction barely moves — seawater sits on the steep flank of the carbonate curve](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — pH is a logarithm).** Surface pH has fallen from 8.17 to 8.05. (a) Compute the fractional change in $[\mathrm{H^+}]$. (b) Repeat for a fall to 7.70. (c) What pH would correspond to a doubling of $[\mathrm{H^+}]$ from pre-industrial?

(a) $$\frac{[\mathrm{H^+}]_{\text{now}}}{[\mathrm{H^+}]_{\text{pre}}} = 10^{-(8.05-8.17)} = 10^{0.12} = 1.318,$$

a **32 percent increase**.

(b) $$10^{(8.17-7.70)} = 10^{0.47} = 2.95,$$

a **195 percent increase** — nearly a tripling.

(c) A doubling requires $\Delta\mathrm{pH} = -\log_{10}2 = -0.301$, i.e. pH $= 8.17 - 0.30 = 7.87$.

*The point.* The headline "0.1 pH units" is chosen — consciously or not — from the scale that makes the change sound smallest. A 30 percent rise in the concentration of the reactive species over 250 years is the same fact stated in units that mean something chemically. Neither is dishonest; but a reader who does not exponentiate has not understood the number.

**Example 2 (why you'd care — when does a reef stop growing?).** Coral calcification rate scales roughly as $G = G_0(\Omega_{\text{arag}} - 1)/(\Omega_0 - 1)$ with $\Omega_0 = 3.4$ the pre-industrial value. Reef *accretion* also faces erosion and dissolution, which together consume roughly 50 percent of gross calcification today. (a) Compute the relative calcification rate at today's $\Omega = 2.8$ and at a projected 1.8. (b) At what $\Omega$ does net accretion reach zero? (c) Convert to an atmospheric $\mathrm{CO_2}$ level using the approximate relation that $\Omega_{\text{arag}}$ falls by 0.6 per 140 ppm.

(a) $$G(2.8) = \frac{2.8-1}{3.4-1} = \frac{1.8}{2.4} = 0.75, \qquad G(1.8) = \frac{0.8}{2.4} = 0.33.$$

Calcification at 75 percent of pre-industrial today; 33 percent at $\Omega = 1.8$.

(b) Net accretion is zero when gross calcification equals erosion. If erosion consumes half of today's gross rate, erosion $= 0.5\times0.75 = 0.375$ in these units. Setting $G = 0.375$:

$$\frac{\Omega-1}{2.4} = 0.375 \quad\Longrightarrow\quad \Omega = 1 + 0.90 = 1.90.$$

(c) From 2.8 today, reaching 1.90 requires $\Delta\Omega = -0.90$, hence

$$\Delta C = \frac{0.90}{0.6}\times140 = 210\ \mathrm{ppm},$$

so about $420 + 210 = 630$ ppm.

*The general principle.* Reefs stop growing net around 630 ppm on this crude accounting — which is reached in mid-century under a high-emissions path. **Note that this analysis contains no climate model at all**: it is stoichiometry plus a measured calcification response. That is what makes acidification projections so much tighter than temperature projections, and it is also why the *biological* uncertainty (does the calcification response really scale this way? can corals adapt?) is now the dominant term rather than the chemical one. The chemistry is nailed; the biology is not. And bleaching from warming, which is a *separate* stressor, hits reefs sooner.

## Watch out

- **You might think** a 0.1 pH change is negligible. **Actually** pH is $-\log_{10}[\mathrm{H^+}]$, so $-0.12$ is a 32 percent concentration increase, and the projected $-0.4$ is a near-tripling. Always exponentiate before judging a pH change.
- **You might think** the danger threshold is $\Omega = 1$, below which shells dissolve. **Actually** calcification rates decline continuously well above 1 — corals are already measurably slower at $\Omega = 2.8$ — because organisms must expend energy to concentrate carbonate against a shrinking supply. The threshold framing is convenient and wrong; the response is a slope.
- **You might think** acidification is a climate feedback that models must include. **Actually** it is a parallel consequence of the same $\mathrm{CO_2}$, with negligible radiative effect. Its importance is ecological and, for the carbon cycle, indirect — via the weakening buffer of [4.2](04-02-ocean-carbon-revelle-factor.md), which does feed back on atmospheric concentration.

## One-liner

> Every tonne of $\mathrm{CO_2}$ the ocean absorbs to spare the atmosphere is a tonne of carbonic acid, and it is the one consequence of emissions we can predict to a percent — and the one thing dimming the sun would not touch.

## Problems

**P1 (🟢)** Surface pH falls from 8.10 to 7.85. (a) Compute the fractional increase in $[\mathrm{H^+}]$. (b) Using $\mathrm{p}K_2 = 8.92$ and $[\mathrm{CO_3^{2-}}]/[\mathrm{HCO_3^-}] = K_2/[\mathrm{H^+}]$, compute the ratio at each pH. (c) By what factor does the carbonate-to-bicarbonate ratio fall?

**P2 (🟡)** Aragonite saturation is $\Omega_{\text{arag}} = [\mathrm{Ca^{2+}}][\mathrm{CO_3^{2-}}]/K_{sp}'$, with $[\mathrm{Ca^{2+}}] = 10.3\ \mathrm{mmol\,kg^{-1}}$ and $K_{sp}' = 6.6\times10^{-7}\ \mathrm{mol^2\,kg^{-2}}$ at the surface. (a) Compute $\Omega_{\text{arag}}$ for $[\mathrm{CO_3^{2-}}] = 240$ and $190\ \mathrm{\mu mol\,kg^{-1}}$. (b) At 1000 m depth, pressure raises $K_{sp}'$ by a factor of 1.9 and remineralization has lowered $[\mathrm{CO_3^{2-}}]$ to $110\ \mathrm{\mu mol\,kg^{-1}}$; compute $\Omega$ there. (c) State whether that depth is above or below the aragonite saturation horizon and explain what a further 30 percent drop in carbonate would do.

**P3 (🔴, optional)** Deep water leaves the North Atlantic with $\mathrm{DIC} = 2150$ and $\mathrm{TA} = 2350\ \mathrm{\mu mol\,kg^{-1}}$. Over a thousand-year transit to the North Pacific, remineralization of sinking organic matter adds $\Delta\mathrm{DIC} = 120\ \mathrm{\mu mol\,kg^{-1}}$ and, via the nitrate released, lowers alkalinity by $\Delta\mathrm{TA} = -18\ \mathrm{\mu eq\,kg^{-1}}$. Use the carbonate-only relations $[\mathrm{HCO_3^-}] = 2\mathrm{DIC}-\mathrm{TA}$ and $[\mathrm{CO_3^{2-}}] = \mathrm{TA}-\mathrm{DIC}$. (a) Compute $[\mathrm{CO_3^{2-}}]$ at both ends of the transit. (b) Compute the fractional fall and comment on why the Pacific saturation horizon is so much shallower than the Atlantic's. (c) Anthropogenic carbon is penetrating from above at roughly $1\ \mathrm{\mu mol\,kg^{-1}}$ per year in the upper thermocline. Estimate how long it takes to remove the remaining carbonate at the Pacific end, and say why this simple extrapolation overstates the speed.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{[\mathrm{H^+}]_2}{[\mathrm{H^+}]_1} = 10^{8.10-7.85} = 10^{0.25} = 1.778,$$

a **78 percent increase**.

(b) At pH 8.10: $[\mathrm{H^+}] = 10^{-8.10} = 7.94\times10^{-9}$, $K_2 = 10^{-8.92} = 1.202\times10^{-9}$, so

$$\frac{[\mathrm{CO_3^{2-}}]}{[\mathrm{HCO_3^-}]} = \frac{1.202\times10^{-9}}{7.94\times10^{-9}} = 0.151.$$

At pH 7.85: $[\mathrm{H^+}] = 1.413\times10^{-8}$, so the ratio is $1.202\times10^{-9}/1.413\times10^{-8} = 0.0851$.

(c) $$\frac{0.151}{0.0851} = 1.78.$$

The ratio falls by the *same* factor 1.78 that $[\mathrm{H^+}]$ rose by — as it must, since the ratio is exactly $K_2/[\mathrm{H^+}]$. **Carbonate ion is inversely proportional to proton concentration**, which is the cleanest statement of why acidification and carbonate loss are the same phenomenon.

**P2** (a) $$\Omega = \frac{(10.3\times10^{-3})(240\times10^{-6})}{6.6\times10^{-7}} = \frac{2.472\times10^{-6}}{6.6\times10^{-7}} = 3.75.$$

$$\Omega = \frac{(10.3\times10^{-3})(190\times10^{-6})}{6.6\times10^{-7}} = \frac{1.957\times10^{-6}}{6.6\times10^{-7}} = 2.97.$$

(b) $K_{sp}' = 1.9\times6.6\times10^{-7} = 1.254\times10^{-6}$, and $[\mathrm{CO_3^{2-}}] = 110\ \mathrm{\mu mol\,kg^{-1}}$:

$$\Omega = \frac{(10.3\times10^{-3})(110\times10^{-6})}{1.254\times10^{-6}} = \frac{1.133\times10^{-6}}{1.254\times10^{-6}} = 0.90.$$

(c) $\Omega < 1$, so 1000 m is **below** the aragonite saturation horizon — aragonite is thermodynamically unstable there and unprotected shells dissolve. A further 30 percent drop in carbonate gives $\Omega = 0.63$, deepening the undersaturation and, more importantly, **raising the horizon toward the surface**: since $\Omega$ increases upward, cutting carbonate everywhere by 30 percent moves the $\Omega = 1$ level to wherever carbonate is now 30 percent higher — several hundred metres shallower. The ecological consequence is not that deep water becomes worse but that the *habitable layer thins from below*.

**P3** (a) North Atlantic end: $$[\mathrm{CO_3^{2-}}] = \mathrm{TA}-\mathrm{DIC} = 2350 - 2150 = 200\ \mathrm{\mu mol\,kg^{-1}}.$$

North Pacific end: $\mathrm{DIC} = 2270$, $\mathrm{TA} = 2332$, so

$$[\mathrm{CO_3^{2-}}] = 2332 - 2270 = 62\ \mathrm{\mu mol\,kg^{-1}}.$$

(b) $$\frac{62}{200} = 0.31,$$ a fall of **69 percent**.

Why: the carbonate ion is the *difference* of two large numbers, TA and DIC, so a 5.6 percent rise in DIC produces a 69 percent fall in carbonate. That amplification — the same structural fact that makes the Revelle factor large ([4.2](04-02-ocean-carbon-revelle-factor.md)) — is why the Pacific saturation horizon sits at a few hundred metres while the Atlantic's is at two to three kilometres. **The conveyor belt is a carbonate-destroying machine**, and the North Pacific is simply where the water has been away longest.

(c) At $1\ \mathrm{\mu mol\,kg^{-1}}$ per year of added DIC, and with $[\mathrm{CO_3^{2-}}] = \mathrm{TA}-\mathrm{DIC}$ so that each unit of DIC costs one unit of carbonate:

$$t = \frac{62}{1} = 62\ \mathrm{yr}.$$

This overstates the speed for three reasons. First, anthropogenic carbon penetrates the upper thermocline at that rate but reaches deeper water far more slowly — the rate falls off sharply with depth, and 1000 m is at the edge of the penetration. Second, once $\Omega$ drops below 1, **carbonate sediments and suspended particles begin to dissolve**, releasing alkalinity and buffering the change; this is the long-tail carbonate-compensation mechanism that removes part of the $a_0$ term in [4.1](04-01-the-carbon-cycle.md)'s impulse response, and it operates on a 5000–10 000 year timescale. Third, the linear extraction ignores that the water is being continuously replaced by ventilation on the same timescale.

*Check.* The structural moral is worth extracting: **whenever a quantity is a difference of two nearly-equal large numbers, its fractional sensitivity is enormous.** Carbonate ion is $\mathrm{TA}-\mathrm{DIC}$; the energy-budget sensitivity denominator is $\Delta F - \Delta N$ ([3.3](03-03-constraining-sensitivity-observations.md)); the net feedback is $\lambda_0 - \sum c_i$ ([2.1](02-01-feedbacks-gain-factor.md)). Three of this course's four biggest amplifiers of uncertainty have exactly this form.

</details>

## Flashback

**From Lesson 4.2 (Ocean carbon and the Revelle factor):** A coastal estuary has $\mathrm{TA} = 1000$ and $\mathrm{DIC} = 950\ \mathrm{\mu mol\,kg^{-1}}$ — roughly half the open ocean's values, because it is fed by river water low in dissolved carbonate. (a) Compute $[\mathrm{HCO_3^-}]$ and $[\mathrm{CO_3^{2-}}]$. (b) Compute the Revelle factor from $R = \mathrm{DIC}\left(4/[\mathrm{HCO_3^-}] + 1/[\mathrm{CO_3^{2-}}]\right)$. (c) Compare with the open ocean's 14 (same formula) and say what it implies for coastal acidification.

<details>
<summary>Solution</summary>

(a) $$[\mathrm{HCO_3^-}] = 2\mathrm{DIC}-\mathrm{TA} = 1900 - 1000 = 900\ \mathrm{\mu mol\,kg^{-1}},$$
$$[\mathrm{CO_3^{2-}}] = \mathrm{TA}-\mathrm{DIC} = 1000 - 950 = 50\ \mathrm{\mu mol\,kg^{-1}}.$$

(b) $$R = 950\left(\frac{4}{900}+\frac{1}{50}\right) = 950(0.004444+0.020000) = 950\times0.024444 = 23.2.$$

(c) The estuary's buffer factor is about 1.7 times the open ocean's, so for the same fractional increase in dissolved carbon its $p\mathrm{CO_2}$ and proton concentration rise 1.7 times as much. **Low-alkalinity coastal and estuarine waters acidify substantially faster than the open ocean** — and they are also where most shellfish aquaculture, most larval nurseries and most human contact with the marine environment occur.

Three further coastal aggravators compound it: river input of nutrients drives eutrophication, whose respiration adds $\mathrm{CO_2}$ locally; upwelling along eastern boundaries brings deep, carbon-rich, already-undersaturated water onto the shelf; and freshwater dilution lowers alkalinity directly. The Pacific Northwest oyster hatchery failures of 2007–2008 were the first documented economic damage, and they came from upwelled water, not from the mean open-ocean trend.

*Check.* The structure of the answer is the same as [4.2](04-02-ocean-carbon-revelle-factor.md)'s scaling $R \sim \mathrm{DIC}/[\mathrm{CO_3^{2-}}]$: here $950/50 = 19$, close to the 23.2 from the full formula, and about twice the open ocean's $2000/200 = 10$. **A water body's vulnerability to acidification is set by how much carbonate ion it has, and low-alkalinity water has very little.**

</details>

## Connections

- **Backward:** the reaction that consumes carbonate and the Revelle factor are [4.2](04-02-ocean-carbon-revelle-factor.md)'s, viewed through pH rather than through $p\mathrm{CO_2}$; the buffer framework is [general-chemistry 4.2](../../general-chemistry/lessons/04-02-buffers-titration.md)'s.
- **Forward:** carbonate compensation — sediment dissolution restoring alkalinity over millennia — is part of the long tail in [4.4](04-04-tcre-carbon-budgets-net-zero.md) and [6.4](06-04-deep-time-slow-thermostat.md); coral reefs appear among the candidate tipping elements in [5.6](05-06-tipping-elements-thresholds.md); the argument that solar geoengineering cannot address acidification is central to [6.5](06-05-scenarios-projections-intervention.md).
- **Sideways (chemistry):** this is a titration of a carbonate buffer, and the speciation diagram is the standard fraction-versus-pH plot of a diprotic acid ([`general-chemistry` 4.2](../../general-chemistry/lessons/04-02-buffers-titration.md)). The saturation state $\Omega$ is a reaction quotient over an equilibrium constant, i.e. $\Omega = Q/K$ — the same object that decides the direction of any reaction ([`general-chemistry` 3.4](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md)).
