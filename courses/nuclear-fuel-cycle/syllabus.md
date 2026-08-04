# Nuclear Fuel Cycle & Policy — Syllabus

> Engineering · Tier 2 · ~19 lessons · Prereqs: [intro-nuclear-engineering](../intro-nuclear-engineering/syllabus.md) · Roadmap id: `nuclear-fuel-cycle`

## Goal

Follow a uranium atom from the ground to a repository — and know the quantitative story at every step: how much you mine, how much work it takes to enrich, how much energy you extract, what comes out the back end, and what it costs. You will be able to size the front-end material and separative-work demand of a reactor, reason about burnup and in-core economics, characterize spent fuel (heat, isotopics, hazard), and argue the reprocessing/waste/proliferation/economics tradeoffs with numbers instead of slogans. We deliberately skip detailed chemical-plant process engineering and the fine grain of treaty law — we want the physics, the mass balances, and the decision logic.

## Dangerous Checklist

When you finish, you can:

- [ ] Draw the open and closed fuel cycles and place any facility (mill, conversion, enrichment, fab, reactor, repository) on the map.
- [ ] Compute feed, product, and tails masses from an enrichment mass balance for a given tails assay.
- [ ] Calculate separative work (SWU) for an enrichment job and explain what a SWU physically buys.
- [ ] Explain why lowering the tails assay saves feed but costs SWU, and find the economic optimum qualitatively.
- [ ] Estimate discharge burnup for an n-batch reload scheme using the linear reactivity model.
- [ ] Break a fuel-cycle cost into its front-end, carrying-charge, and back-end components.
- [ ] Estimate spent-fuel decay heat versus cooling time and say what it means for pool vs. dry-cask storage.
- [ ] Explain which isotopes dominate spent-fuel radiotoxicity at 10, 300, and 10,000 years, and why reprocessing shifts the curve.
- [ ] Describe PUREX separation and the plutonium balance of MOX recycling.
- [ ] Compare the U–Pu fast-breeder cycle and the Th–U233 cycle on breeding ratio and proliferation resistance.
- [ ] Estimate a significant quantity of fissile material and explain how safeguards material accounting detects diversion.
- [ ] Compute the LCOE of a nuclear plant and show why capital cost dominates.

## Modules

### Module 1: The Front End — Mining, Conversion & Enrichment

From ore to enriched UF6: where uranium comes from, why it must be enriched, and the surprisingly deep math of separating isotopes that differ by less than 1% in mass.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Fuel-cycle map & uranium resources | Orient any facility on the open vs. closed cycle and read resource/grade data | front vs. back end, open/closed cycle, reserves & ore grade, energy density of U |
| 1.2 | Mining & milling | Explain how ore becomes yellowcake and what waste that leaves | conventional vs. in-situ leach, U₃O₈, tailings, recovery fraction |
| 1.3 | Conversion & the enrichment mass balance | Compute feed/product/tails masses for an enrichment job | UF₆, assay $x$, feed–product–tails balance, tails assay tradeoff |
| 1.4 | The centrifuge & separative work | Calculate SWU from the value function and say what a SWU buys | gas centrifuge, value function $V(x)=(2x-1)\ln\frac{x}{1-x}$, SWU |
| 1.5 | The enrichment cascade & front-end cost | Assemble stages into a cascade and price a front-end fuel batch | ideal cascade, separation factor, stage recycle, $/SWU & $/kgU costing |

**Boss problem 1:** A utility needs 1 kg of uranium enriched to 4.5% U-235, from natural feed (0.711%). (a) For a tails assay of 0.25%, find the natural-uranium feed mass and the SWU required. (b) Recompute for a tails assay of 0.20%. (c) Explain in one sentence which input (feed or SWU) each change trades against, and how a rising uranium price would move the optimal tails assay. *(Uses the value function $V(x)=(2x-1)\ln[x/(1-x)]$.)*

### Module 2: In-Core — Fuel Management & Burnup

Once fuel is in the reactor, the game is extracting the most energy per unit of enrichment and uranium. This module connects reactivity-versus-life to reload strategy and to money.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Fuel fabrication & assembly design | Trace pellet → rod → assembly and name the design drivers | UO₂ pellets, cladding, PWR/BWR assemblies, fission-gas plenum |
| 2.2 | Reactivity over life & reload management | Explain excess reactivity and how it is managed across a cycle | excess reactivity, burnable poisons, control, batch reloading |
| 2.3 | Burnup, depletion & the linear reactivity model | Estimate discharge burnup for n-batch schemes and track Pu buildup | GWd/tHM, discharge burnup, LRM $B_n=\frac{2n}{n+1}B_1$, conversion ratio |
| 2.4 | In-core fuel-cycle economics | Split a fuel-cycle cost and find the enrichment/burnup optimum | levelized fuel cost, carrying charges, higher-burnup tradeoff |

**Boss problem 2:** A fresh single-batch core would go critical to a discharge burnup of $B_1 = 15$ GWd/tHM under the linear reactivity model. (a) Find the equilibrium discharge burnup for 2-batch, 3-batch, and 4-batch reload schemes. (b) Compute the average core burnup at end-of-cycle for the 3-batch case. (c) Discharge burnup keeps rising with $n$ — give two concrete reasons utilities don't push $n$ arbitrarily high.

### Module 3: The Back End — Spent Fuel, Reprocessing & Waste

Spent fuel is hot, radioactive, and valuable-or-dangerous depending on your policy. This module characterizes it physically, then walks the two forks in the road: recycle it or bury it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Decay heat & the spent-fuel source term | Estimate decay heat vs. cooling time and its engineering consequences | Way–Wigner/ANS decay heat, source term, thermal limits |
| 3.2 | Spent-fuel isotopics & radiotoxicity | Say what dominates the hazard at 10, 300, and 10⁴ years | fission products vs. actinides, ingestion radiotoxicity, decay chains |
| 3.3 | Waste classification & interim storage | Classify a waste stream and choose pool vs. dry-cask storage | HLW/ILW/LLW, spent-fuel pools, dry casks, heat/shielding limits |
| 3.4 | Reprocessing: PUREX & separations | Describe how PUREX splits U, Pu, and fission products | aqueous PUREX, TBP extraction, raffinate, partitioning |
| 3.5 | Recycling: MOX & the plutonium balance | Track plutonium through MOX fabrication and re-irradiation | MOX fuel, Pu vector & isotopic degradation, mono-recycle limits |
| 3.6 | Geological disposal & the repository | Explain the multi-barrier case and how heat sets repository spacing | deep geologic repository, engineered barriers, thermal loading, retrievability |

**Boss problem 3:** A 3000 MWth PWR runs one year then shuts down. Using the Way–Wigner correlation $P(t)/P_0 = 0.066\,[\,t^{-0.2}-(t+t_0)^{-0.2}\,]$ (times in seconds, $t_0$ = operating time): (a) Compute the decay heat in MW at 1 hour, 1 day, and 1 year after shutdown. (b) Explain why the fuel must sit in a water pool before a dry cask can take it. (c) Give the one-line reason repositories space canisters out rather than packing them.

### Module 4: Alternative Cycles, Proliferation & Economics

The uranium once-through cycle is a choice, not a law of nature. Here we weigh breeders, thorium, the safeguards regime that constrains all of it, and the economics that ultimately decide what gets built.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Fast reactors & breeding | Compute breeding ratio and doubling time for a U–Pu fast cycle | fast spectrum, breeding ratio, doubling time, U-238 → Pu-239 |
| 4.2 | The thorium cycle | Weigh the Th–U233 cycle's promises against its headaches | Th-232 → U-233, Pa-233 hold-up, U-232/hard gamma, proliferation angle |
| 4.3 | Nonproliferation, safeguards & security | Estimate a significant quantity and explain diversion detection | significant quantity, IAEA material accounting, MUF, proliferation resistance |
| 4.4 | Nuclear economics & LCOE | Compute LCOE and show what dominates a nuclear plant's cost | overnight capital cost, fixed charge rate, capacity factor, LCOE |

**Boss problem 4:** A nuclear plant has an overnight capital cost of 6,000 dollars/kW, a fixed charge rate of 0.10/yr, and a 90% capacity factor. (a) Compute the capital component of LCOE in dollars/MWh. (b) Add 15 dollars/MWh fixed O&M and 7 dollars/MWh fuel and give the total LCOE. (c) State the share that is capital, and use it to explain why a fuel-cycle change that halves fuel cost barely moves the busbar price — but a two-point rise in the discount rate hurts a lot.

## Sources of truth

- Cochran & Tsoulfanidis, *The Nuclear Fuel Cycle: Analysis and Management* — front-to-back cycle framing and mass balances.
- Benedict, Pigford & Levi, *Nuclear Chemical Engineering* — enrichment cascades, separative work, PUREX.
- Lamarsh & Baratta, *Introduction to Nuclear Engineering* — in-core physics, burnup, decay heat conventions.
- MIT, *The Future of Nuclear Energy in a Carbon-Constrained World* (2018), and the IAEA Safeguards Glossary — economics/LCOE and safeguards terminology.
