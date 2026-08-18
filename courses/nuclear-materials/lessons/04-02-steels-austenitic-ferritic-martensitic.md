# Nuclear Materials · Lesson 4.2: Steels — austenitic vs. ferritic/martensitic

> ⏱ ~15 min · Module 4: Cladding, structural materials, and corrosion · Builds on: [2.3 Voids & void swelling](02-03-voids-void-swelling.md), [2.6 Embrittlement & the DBTT shift](02-06-embrittlement-dbtt-shift.md), [2.4 Irradiation creep & growth](02-04-irradiation-creep-growth.md), [`materials-science` 3.3 Transformations, TTT & heat treatment](../../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md) · Unlocks: [4.4 SCC & IASCC](04-04-scc-iascc.md)

## Why this matters

Zirconium alloys hold the fuel, but almost everything *else* structural inside a reactor — the core barrel, the baffle plates, the fast-reactor cladding and the hexagonal ducts that channel coolant — is steel. And here you face the single sharpest fork in nuclear structural design. Two families of steel are on the shelf. One is tough, weldable, corrosion-proof, and strong when hot — and it *swells catastrophically* at high dose. The other barely swells at all — and gives up high-temperature strength and can go brittle. There is no steel that wins on every axis, so the whole game is matching the alloy to the dose and temperature it will actually see. This lesson is where the void swelling of [2.3](02-03-voids-void-swelling.md) and the embrittlement of [2.6](02-06-embrittlement-dbtt-shift.md) stop being separate phenomena and become one engineering decision.

## The idea

The fork comes straight from crystal structure — the [fcc vs. bcc distinction from materials science](../../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md).

**Austenitic stainless steels** (304, 316) are **face-centered cubic (fcc)** — the same γ-austenite phase, held stable to room temperature by nickel. Fcc packs atoms densely, and that dense, forgiving lattice is why austenitics are the workhorse: excellent ductility, easy welding, superb corrosion resistance, and — crucially — they *keep their strength when hot*, because fcc creep is slow. For light-water-reactor core internals, which run warm but at moderate dose, austenitic stainless is the natural default. But that same lattice has a fatal flaw at high dose. Recall from [2.3](02-03-voids-void-swelling.md) that swelling needs a vacancy supersaturation, which needs somewhere for the *interstitials* to preferentially escape. Fcc steels have relatively few internal sinks, so the dislocation bias runs unopposed and the vacancy surplus condenses into voids. The swelling window is wide open: past an incubation dose austenitics foam at roughly **1% per dpa**.

**Ferritic/martensitic (F/M) steels** (HT9, T91, the 9–12% Cr family) are **body-centered cubic (bcc)**. Here is the beautiful part: their microstructure is a dense tangle of lath boundaries, dislocations, and fine carbides — a forest of **sinks**. When radiation makes equal numbers of vacancies and interstitials, this high sink density mops *both* up almost even-handedly, so the vacancy supersaturation never builds and voids barely nucleate. F/M steels are **swelling-resistant** — often below **0.1% per dpa** even to hundreds of dpa. That makes them the choice for the highest-dose service: fast-reactor cladding and ducts. The price is two-fold. Bcc steels soften above ~550 °C (their creep strength ceiling is lower than austenitic), and — being bcc — they *have* a ductile-to-brittle transition, so the DBTT shift of [2.6](02-06-embrittlement-dbtt-shift.md) is a live concern.

So the selection logic is a two-axis map: **temperature** (how hot does it run?) and **dose** (how many dpa over life?). Moderate dose, high temperature, need strength and weldability → austenitic. High dose, swelling is the enemy → F/M. And when you want *both* high temperature *and* swelling resistance, you reach for the advanced option below.

## The formal version

**Swelling rate as the deciding number.** From [2.3](02-03-voids-void-swelling.md), swelling past incubation is roughly linear in dose. Write the steady-state rate as

$$S \equiv \frac{d(\Delta V/V)}{d(\text{dpa})},$$

where $\Delta V/V$ is the fractional volume increase (dimensionless, quoted in %) and dpa is displacements per atom ([1.4](01-04-kinchin-pease-nrt-dpa.md)). The two families differ by an order of magnitude:

$$S_{\text{austenitic}} \approx 1\%/\text{dpa}, \qquad S_{\text{F/M}} \approx 0.1\%/\text{dpa}.$$

*In words: at the same dose an austenitic steel swells about ten times as much as an F/M steel.* The physics behind $S$ is sink density. The vacancy supersaturation that drives void growth scales *inversely* with the total sink strength $k^2$ (units m$^{-2}$, the sum over dislocations, boundaries, precipitates of how efficiently they absorb point defects). More sinks → lower supersaturation → less swelling:

$$\Delta V/V \ \propto\ \frac{1}{k^2} \quad\text{(schematically)}.$$

*In words: pack the lattice with defect traps and you starve the voids of the vacancy surplus they need to grow.* Fcc austenitics have low $k^2$; the bcc F/M lath-and-dislocation structure has high $k^2$ — that single difference is the whole swelling story.

**Total swelling over a life of $D$ dpa,** given an incubation dose $D_0$ (below which almost nothing happens):

$$\frac{\Delta V}{V} \approx S\,(D - D_0)_+ \qquad (\text{zero if } D < D_0).$$

*In words: swelling only accrues after the incubation dose is used up, then climbs linearly at rate $S$.* F/M steels win *twice* here — both a higher $D_0$ **and** a smaller $S$.

**Dimensional consequence.** Swelling is a stress-free, isotropic volume change (contrast the stress-driven [irradiation creep and growth of 2.4](02-04-irradiation-creep-growth.md)). Distributed over three dimensions, the linear strain is

$$\frac{\Delta L}{L} = (1 + \Delta V/V)^{1/3} - 1 \approx \tfrac13\,\frac{\Delta V}{V} \quad(\text{for small } \Delta V/V).$$

*In words: a percent of volume swelling shows up as about a third of a percent of growth in each direction* — and in a clad rod that eats the fuel–clad gap and closes coolant channels.

**The temperature ceiling.** Above roughly 550 °C, thermal creep ([2.4](02-04-irradiation-creep-growth.md)) takes over from irradiation effects: the bcc F/M matrix loses strength as its carbides coarsen and dislocations climb freely. Austenitic fcc steel holds strength ~100 °C higher. This is the axis on which F/M *loses*.

**ODS steels — buying back the ceiling.** **Oxide-dispersion-strengthened** steels are F/M steels into which a dense cloud of nanometer **Y–Ti–O oxide particles** has been mechanically alloyed. Those particles do two jobs at once: they are thermally stable obstacles that pin dislocations and boundaries to *much* higher temperature (raising the creep ceiling toward ~700 °C), and they add yet more **sinks** — even more swelling resistance, and trapping sites that hold transmutation helium in harmless nanobubbles instead of on grain boundaries ([2.6](02-06-embrittlement-dbtt-shift.md)). ODS is the advanced answer to "I want F/M swelling resistance *and* austenitic-beating temperatures," at the cost of difficult, expensive powder-metallurgy fabrication.

## Picture

![Swelling ΔV/V versus dose in dpa for two steels: the austenitic fcc curve is flat through an incubation dose near 40 dpa then rises steeply at about 1 percent per dpa toward 60 percent at 100 dpa, while the ferritic-martensitic bcc curve stays nearly flat, reaching only about 10 percent at 100 dpa](assets/04-02-fig1.svg)

The two curves start together and diverge violently. Austenitic (blue) is dimensionally quiet through its incubation dose, then foams. F/M (coral) barely lifts off the axis over the same range — an order-of-magnitude smaller slope. At high dose the vertical gap between them *is* the reason F/M exists.

## Worked examples

**Example 1 — closing Boss Problem 2(c): why choose F/M over austenitic for high dose.** In [2.5](02-05-radiation-hardening.md)/[2.6](02-06-embrittlement-dbtt-shift.md) you found a *ferritic* RPV steel hardening by $\Delta\sigma_y \approx 734$ MPa and shifting its DBTT by $\approx 440$ °C — a serious embrittlement. So why, for high-dose structural service, would anyone pick a ferritic/martensitic steel *knowing* it embrittles, when austenitic 316 barely has a DBTT at all?

Because **the two families fail by different mechanisms, and at high dose swelling is the unmanageable one.** Line them up:

| | Austenitic (fcc, 316) | F/M (bcc, HT9/T91) |
|---|---|---|
| Void swelling | ~1%/dpa — **severe** | ~0.1%/dpa — **mild** |
| DBTT / embrittlement | essentially none (fcc) | present, must manage |
| High-T strength ceiling | higher (~650 °C) | lower (~550 °C) |

Now weigh them. Embrittlement you can *engineer around*: operate the component hot (above the shifted DBTT), control composition, track surveillance data, and if needed anneal. It is a design constraint, not a geometry change. **Swelling you cannot undo** — once a duct has grown 20% in every dimension it binds against its neighbors and the assembly jams; there is no operating trick that shrinks it back. At high dose austenitic 316 swells so badly ([2.3](02-03-voids-void-swelling.md) Example: ~60% volume at 100 dpa) that it is dimensionally untenable, full stop. So you accept the F/M steel's *manageable* embrittlement to escape the austenitic steel's *unmanageable* swelling. **What you buy is swelling resistance; what you give up is the high-temperature creep ceiling** (and you take on a DBTT you must respect). That trade — swelling resistance purchased with a lower temperature ceiling — is the core of nuclear structural-alloy selection.

**Example 2 — the swelling gap at 100 dpa, and what it does to a clad.** A fast-reactor pin will see $D = 100$ dpa over its life. Compare an austenitic duct ($S = 1\%/\text{dpa}$, incubation $D_0 = 40$ dpa) against an F/M duct ($S = 0.1\%/\text{dpa}$, take $D_0 \approx 0$ for a conservative estimate).

Austenitic:
$$\frac{\Delta V}{V} = S(D - D_0) = 1\%/\text{dpa} \times (100 - 40)\,\text{dpa} = 60\%.$$

F/M:
$$\frac{\Delta V}{V} = 0.1\%/\text{dpa} \times 100\,\text{dpa} = 10\%.$$

Translate to linear (diametral) growth via $\Delta L/L \approx \tfrac13 \Delta V/V$:

$$\left.\frac{\Delta L}{L}\right|_{\text{aust}} \approx \frac{60\%}{3} = 20\%, \qquad \left.\frac{\Delta L}{L}\right|_{\text{F/M}} \approx \frac{10\%}{3} \approx 3.3\%.$$

*Consequence.* A cladding tube typically starts with a fuel–clad gap of a few percent of its radius and sits inside a lattice with a few percent inter-duct clearance. A 20% diametral swell blows through both — the austenitic duct bows, contacts its neighbors, and jams the assembly; that is exactly the failure that ended the first generation of fast-reactor 316 ducts. The F/M duct's ~3% growth is comfortably inside the clearances designed for it. *Check.* Units: $S$ in %/dpa times dpa gives %, dimensionless ✓. Sanity: the 6:1 ratio in $\Delta V/V$ tracks the 10:1 in $S$ softened by the austenitic incubation credit — the order-of-magnitude swelling advantage of F/M is exactly why it is the high-dose cladding of choice.

## Watch out

- **You might think austenitic stainless is the "better" steel because it's tougher and doesn't embrittle — so use it everywhere.** But toughness isn't the binding constraint at high dose; *dimensional stability* is. A tough steel that has swollen 60% is useless. The fcc lattice that gives austenitics their ductility is the same low-sink lattice that lets them swell — you can't keep one and drop the other.
- **You might think F/M steels resist swelling because bcc is "less dense" so there's more room for defects.** The real reason is **sink density**, not packing fraction. The bcc F/M *microstructure* — laths, dislocations, carbides — is a dense trap field that keeps the vacancy supersaturation low ([2.3](02-03-voids-void-swelling.md)). A hypothetical sink-free bcc steel would swell too; it's the metallurgy, not just the crystal class.
- **You might think ODS is just "F/M with better high-temperature strength."** It's that *and* more sinks *and* a helium trap. The oxide particles simultaneously raise the creep ceiling, add swelling resistance, and hold transmutation He in harmless nanobubbles instead of on grain boundaries — three benefits from one dispersion, which is why ODS is the advanced-reactor and fusion first-wall candidate ([4.5](04-05-materials-for-fusion.md)).

## One-liner

> Austenitic (fcc) steels are the tough, hot-strong, weldable default that swells ~1%/dpa; ferritic/martensitic (bcc) steels swell ~10× less thanks to a high sink density, so you pick F/M when dose is the enemy and pay for it with a lower temperature ceiling and a DBTT you must manage.

## Problems

**P1 (🟢)** A structural component will accumulate $D = 80$ dpa. For an austenitic steel take swelling rate $S = 1\%/\text{dpa}$ with incubation $D_0 = 40$ dpa; for an F/M steel take $S = 0.1\%/\text{dpa}$ with $D_0 \approx 0$. Compute $\Delta V/V$ for each, and the ratio between them.

**P2 (🟡)** A fast-reactor fuel pin uses F/M cladding with $S = 0.1\%/\text{dpa}$ and $D_0 \approx 0$. The design allots a total diametral clearance (fuel–clad gap plus coolant-channel margin) of $\Delta L/L = 4\%$ before the pin risks contacting its neighbors. Using $\Delta L/L \approx \tfrac13\,\Delta V/V$, what peak dose (dpa) can the clad reach before it exhausts that clearance? Comment on whether an austenitic clad ($S = 1\%/\text{dpa}$, $D_0 = 40$ dpa) could survive the same dose.

**P3 (🔴)** An advanced reactor wants a duct that runs at 600 °C to 150 dpa. (a) Rule out plain austenitic and plain F/M by naming the *specific* failure each would hit. (b) Argue why an ODS-F/M steel addresses both, referencing the two jobs its oxide dispersion does. (c) In one sentence, name the practical cost that keeps ODS from being the default.

<details>
<summary>Solutions</summary>

**P1** Austenitic accrues swelling only past incubation:
$$\frac{\Delta V}{V}\Big|_{\text{aust}} = 1\%/\text{dpa}\times(80-40)\,\text{dpa} = 40\%.$$
F/M has no incubation credit here but a 10× smaller rate:
$$\frac{\Delta V}{V}\Big|_{\text{F/M}} = 0.1\%/\text{dpa}\times 80\,\text{dpa} = 8\%.$$
Ratio $= 40\%/8\% = 5$. *Check.* Units: %/dpa × dpa = % ✓. The 5:1 gap (less than the raw 10:1 in $S$) is because the austenitic incubation dose of 40 dpa spares it the first 40% it would otherwise have swelled — the incubation credit partly offsets its worse rate, but F/M still wins by 5×.

**P2** Convert the diametral limit to a volume limit: $\Delta V/V \approx 3\,\Delta L/L = 3\times 4\% = 12\%$. Then invert $\Delta V/V = S\,D$:
$$D = \frac{\Delta V/V}{S} = \frac{12\%}{0.1\%/\text{dpa}} = 120\ \text{dpa}.$$
So the F/M clad reaches ~120 dpa before it uses up its clearance. For the austenitic clad at that dose: $\Delta V/V = 1\%/\text{dpa}\times(120-40) = 80\%$, i.e. $\Delta L/L \approx 27\%$ — roughly *seven times* over the 4% budget. It would have jammed long before, around $D_0 + 12\% / (1\%/\text{dpa}) = 40 + 12 = 52$ dpa. *Check.* Units: %/(%/dpa) = dpa ✓. Sanity: the F/M clad lasts more than twice the dose the austenitic clad could, exactly the kind of margin that makes F/M mandatory for high-burnup fast-reactor fuel.

**P3** (a) Plain **austenitic** at 150 dpa would swell $\sim(150-40)\times1\% = 110\%$ in volume — dimensionally impossible; it is ruled out by **void swelling**. Plain **F/M** resists swelling but 600 °C is above its ~550 °C strength ceiling, so it is ruled out by **thermal-creep strength loss** (carbide coarsening, dislocation climb) — it would sag under load. (b) **ODS-F/M** keeps the swelling-resistant bcc lath structure *and* adds a dense, thermally stable Y–Ti–O oxide dispersion. The oxides do two jobs: (i) as high-temperature-stable obstacles they pin dislocations and boundaries, raising the creep ceiling toward ~700 °C so 600 °C is fine; and (ii) as extra sinks they further suppress the vacancy supersaturation, keeping swelling low to 150 dpa (and trapping transmutation He harmlessly). Both failure modes are addressed at once. (c) The practical cost is **fabrication**: ODS requires difficult, expensive powder-metallurgy mechanical alloying and consolidation, and the product can be anisotropic and hard to weld — which is why it isn't the everyday default. *Check.* Each family is ruled out by a *different* axis (dose for austenitic, temperature for F/M), and ODS is precisely the alloy that buys back the one axis F/M lacks — internally consistent with the two-axis selection map.

</details>

## Flashback

**From Lesson 2.5 (Radiation hardening):** A batch of F/M steel, irradiated cold, develops small dislocation loops at number density $N = 4\times10^{22}\ \mathrm{m^{-3}}$ with mean diameter $d = 5\ \mathrm{nm}$. Using the dispersed-barrier model $\Delta\sigma_y = \alpha M \mu b \sqrt{Nd}$ with $\alpha = 0.3$, $M = 3.06$, $\mu = 80$ GPa, $b = 0.25$ nm, estimate the hardening $\Delta\sigma_y$. (Fresh variant — new numbers.)

<details>
<summary>Solution</summary>

Obstacle geometric factor first:
$$Nd = (4\times10^{22}\ \mathrm{m^{-3}})(5\times10^{-9}\ \mathrm{m}) = 2\times10^{14}\ \mathrm{m^{-2}}, \qquad \sqrt{Nd} = \sqrt{2\times10^{14}} = 1.41\times10^{7}\ \mathrm{m^{-1}}.$$
Then assemble in SI ($\mu = 80\times10^9$ Pa, $b = 0.25\times10^{-9}$ m):
$$\Delta\sigma_y = 0.3\times3.06\times(80\times10^9)\times(0.25\times10^{-9})\times(1.41\times10^{7}).$$
Step by step: $0.3\times3.06 = 0.918$; $\times 80\times10^9 = 7.34\times10^{10}$; $\times 0.25\times10^{-9} = 18.36$; $\times 1.41\times10^7 = 2.59\times10^{8}\ \mathrm{Pa}$.
$$\Delta\sigma_y \approx 2.6\times10^{8}\ \mathrm{Pa} = 260\ \mathrm{MPa}.$$
*Check.* Units $\mathrm{Pa\cdot m\cdot m^{-1}} = \mathrm{Pa}$ ✓. Sanity: a couple-hundred-MPa jump from a moderate loop field is the same order as the loop-hardening example in [2.5](02-05-radiation-hardening.md), and via $\Delta\text{DBTT}\approx0.6\,\Delta\sigma_y$ it implies a ~150 °C transition shift — exactly the embrittlement concern that makes F/M's DBTT something you must design around, even as you choose it for swelling resistance. ✓

</details>

## Connections

- **Backward:** this lesson cashes out two Module 2 results into one decision. The ~1%/dpa austenitic swelling and its sink-density origin are [2.3](02-03-voids-void-swelling.md); the F/M embrittlement you accept in exchange is the DBTT shift of [2.6](02-06-embrittlement-dbtt-shift.md); the stress-free-swelling-vs-stress-driven-creep distinction and the 550 °C ceiling come from [2.4](02-04-irradiation-creep-growth.md). The fcc-γ-austenite vs. bcc-ferrite/martensite split is the phase metallurgy of [`materials-science` 3.3](../../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md).
- **Forward:** these same steels must survive hot, chemically aggressive coolant — austenitic 304/316 in particular is the alloy that suffers **irradiation-assisted stress-corrosion cracking** in [4.4](04-04-scc-iascc.md), where the swelling-friendly fcc structure meets a corrosion penalty. ODS and F/M steels reappear as the leading structural candidates for fusion first walls in [4.5](04-05-materials-for-fusion.md), where helium management joins swelling on the requirements list.
- **Sideways (systems engineering):** the two-axis selection map here — no single option wins on every criterion, so you match the component to its actual dose-and-temperature duty — is the same constrained-tradeoff reasoning as materials selection charts (Ashby's method) across all of mechanical design, and echoes the multi-objective optimization you meet whenever competing requirements force a Pareto choice rather than a single best answer.
