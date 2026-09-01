# Geophysics · Lesson 4.2: Radiogenic heat and the heat budget

> ⏱ ~15 min · Module 4: Heat flow, rheology & geodynamics · Builds on: [4.1](04-01-conduction-and-the-geotherm.md), [intro-nuclear-engineering 1.3](../../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) · Unlocks: [4.4](04-04-mantle-convection-rayleigh-number.md), [5.4](05-04-the-core.md)

## Why this matters

The Earth loses 46 terawatts of heat. Where does it come from, and how long can it last? The answer sets the pace of everything: how fast the mantle convects, how long plate tectonics can continue, and whether the core can keep running a dynamo.

The bookkeeping also produces one of the sharpest paradoxes in the subject. Radioactive heat production was several times larger in the past, and heat *loss* rises steeply with mantle temperature — so extrapolating the budget backwards makes the Earth hotter and hotter until, a couple of billion years ago, it should have been molten. It was not. Something in the simple picture is wrong, and identifying what is an active research question.

## The idea

**Two sources, and they are of different kinds.** Some of the heat is being **produced now**, by the decay of long-lived radioactive isotopes. The rest is **stored heat** left over from accretion and core formation, leaking out as the planet slowly cools. The ratio of the first to the total is the **Urey ratio**, and it is not one: less than half the heat leaving the Earth is being made now.

**Four isotopes do essentially all the producing.** Uranium-238, uranium-235, thorium-232 and potassium-40. Everything else has either decayed away or produces negligibly. Two of the four — $^{235}$U and $^{40}$K — have half-lives short compared with the age of the Earth, which is why heat production was so much larger early on.

**The heat producers are concentrated in the crust, which is why continents are warm.** Uranium, thorium and potassium are **incompatible**: during partial melting they prefer the melt to the residue, so successive melting events have concentrated them upward. Continental crust is about 0.5 percent of the Earth's mass and contains perhaps a third of its radioactive elements.

**Subtracting radiogenic from total gives the cooling rate.** If 46 TW leaves and 20 TW is produced, the remaining 26 TW is stored heat being spent — some from the mantle cooling, some conducted out of the core. Converting to a temperature change gives roughly 100 K per billion years, which is the number that sets the Earth's thermal history.

**And running it backwards breaks.** Heat production 3 billion years ago was about two and a half times today's, which by itself exceeds the *present* total heat loss. So the Earth must have been losing heat far faster then. But faster loss means faster cooling, which means it was hotter still before — and the extrapolation runs away. **The mantle should have been molten a billion or two years ago, and the rock record says it was not.** This is the *thermal catastrophe*, and its resolution is not settled.

## The formal version

**The four heat producers.** Heat generation per unit mass of the parent element (not the isotope):

| Element | Isotope | Half-life (Gyr) | Heat production (μW per kg of element) |
|---|---|---|---|
| U | $^{238}$U | 4.47 | 94.6 (per kg $^{238}$U) |
| U | $^{235}$U | 0.704 | 568 (per kg $^{235}$U) |
| Th | $^{232}$Th | 14.0 | 26.4 |
| K | $^{40}$K | 1.25 | 29.2 (per kg of natural K: $3.5\times10^{-2}$) |

*In words: uranium is by far the most energetic per kilogram, potassium the least — but there is vastly more potassium.*

**Present-day production, bulk silicate Earth.** A chondritic reference model gives roughly

$$H_U \approx 8\ \mathrm{TW}, \qquad H_{Th}\approx 8\ \mathrm{TW}, \qquad H_K \approx 4\ \mathrm{TW}, \qquad H_{\text{total}}\approx 20\ \mathrm{TW},$$

with a genuine uncertainty of roughly 12 to 30 TW depending on the compositional model.

**The Urey ratio.**

$$\mathrm{Ur} = \frac{H}{Q} \approx \frac{20}{46} \approx 0.43.$$

*In words: less than half the heat output is currently being generated.*

**Secular cooling.**

$$Q_{\text{cool}} = M c_p\left|\frac{dT}{dt}\right| \;\Longrightarrow\; \left|\frac{dT}{dt}\right| = \frac{Q_{\text{cool}}}{Mc_p}.$$

With mantle mass $M = 4.0\times10^{24}$ kg and $c_p = 1200\ \mathrm{J\,kg^{-1}\,K^{-1}}$.

**The budget, term by term.**

$$Q_{\text{surface}} = H_{\text{crust}} + H_{\text{mantle}} + Q_{\text{mantle cooling}} + Q_{\text{core}}$$
$$46 \approx 7 + 13 + 16 + 10\ \mathrm{TW}.$$

The core term is the least certain and the most consequential, because it is what powers the dynamo ([3.2](03-02-the-geodynamo.md), [5.4](05-04-the-core.md)).

**Heat production back in time.** For an isotope of half-life $t_{1/2}$, production at a time $\tau$ before present was larger by

$$\frac{H(\tau)}{H(0)} = 2^{\tau/t_{1/2}}.$$

*In words: every half-life you go back doubles the abundance and hence the heat.*

**Geoneutrinos.** Beta decays in the $^{238}$U and $^{232}$Th chains emit antineutrinos that escape the Earth freely. Detectors (KamLAND in Japan, Borexino in Italy) count them and thereby measure the total U and Th content of the Earth **directly**, independently of any compositional model. Current results give a radiogenic power of roughly 20 TW, consistent with the chondritic estimate but with large error bars. *This is the only measurement that sees the Earth's interior composition without a geological intermediary.*

## Picture

![Left: a bar chart of the Earth's heat budget in terawatts. A single tall blue bar of 46 labelled out at the surface, an equals sign, and four smaller bars: 7 for crustal radiogenic, 13 for mantle radiogenic, 16 for mantle cooling and 10 for heat from the core. A note gives the Urey ratio as radiogenic over total, about 20 over 46 or 0.43, and observes that less than half the heat leaving the Earth is being made now, the rest being stored heat leaking out. Right: a plot of radiogenic heat production against time before present, running right to left from 20 terawatts at the present through 49 terawatts at 3 billion years to 102 terawatts at 4.5 billion years. A dashed blue horizontal line marks the present surface heat loss of 46 terawatts, and the production curve crosses it near 3 billion years. A note says that before that time radioactivity alone exceeded today's heat loss, so the Earth must have been losing heat far faster](assets/04-02-fig1.svg)

The crossing point is where the simple story stops working.

## Worked examples

**Example 1 (mechanical — how fast is the Earth cooling?).** Take total heat loss 46 TW, radiogenic production 20 TW, core heat flow 10 TW, mantle mass $4.0\times10^{24}$ kg, $c_p = 1200\ \mathrm{J\,kg^{-1}\,K^{-1}}$. Find the Urey ratio and the mantle's cooling rate.

*Urey ratio.*
$$\mathrm{Ur} = \frac{20}{46} = 0.43.$$

*Mantle cooling term.* From the budget, subtracting the radiogenic and core contributions:
$$Q_{\text{cool}} = 46 - 20 - 10 = 16\ \mathrm{TW}.$$

*Cooling rate.*
$$\left|\frac{dT}{dt}\right| = \frac{1.6\times10^{13}}{4.0\times10^{24}\times1200} = \frac{1.6\times10^{13}}{4.8\times10^{27}} = 3.33\times10^{-15}\ \mathrm{K\,s^{-1}}.$$
$$= 3.33\times10^{-15}\times3.156\times10^{16}\ \mathrm{K\,per\ Gyr}^{-1}\ \dots$$

More carefully: $1\ \mathrm{Gyr} = 3.156\times10^{16}$ s, so

$$\left|\frac{\Delta T}{\Delta t}\right| = 3.33\times10^{-15}\times3.156\times10^{16} = 105\ \mathrm{K\ per\ Gyr}.$$

**About a hundred kelvin per billion years.** Over Earth history that is some 400 to 500 K of cooling, which is consistent with petrological evidence that Archean magmas (komatiites) erupted at temperatures 200 to 300 K above modern ones.

**Example 2 (why you'd care — the thermal catastrophe).** Compute radiogenic heat production 3 Gyr ago, compare with the present heat loss, and explain the paradox this creates.

*Present contributions, split by isotope.* Natural uranium is 99.28 percent $^{238}$U and 0.72 percent $^{235}$U by mass, with specific heat productions of 94.6 and 568 μW/kg. So $^{235}$U supplies

$$\frac{0.0072\times568}{0.9928\times94.6 + 0.0072\times568} = \frac{4.09}{93.9+4.09} = 4.2\%$$

of uranium's heat today: $H_{235} = 0.34$ TW and $H_{238} = 7.66$ TW.

*Scale each back 3 Gyr.*

| Isotope | $t_{1/2}$ (Gyr) | $2^{3/t_{1/2}}$ | Now (TW) | 3 Ga (TW) |
|---|---|---|---|---|
| $^{238}$U | 4.47 | 1.59 | 7.66 | 12.2 |
| $^{235}$U | 0.704 | 19.2 | 0.34 | 6.5 |
| $^{232}$Th | 14.0 | 1.16 | 8.0 | 9.3 |
| $^{40}$K | 1.25 | 5.28 | 4.0 | 21.1 |
| **total** | | | **20.0** | **49.1** |

**Radiogenic production 3 Gyr ago was about 49 TW — more than the Earth's entire present heat loss of 46 TW.**

*The paradox.* If the Earth had been losing heat at today's rate 3 Gyr ago, its Urey ratio would have been $49/46 = 1.07$: **it would have been heating up**, not cooling. Since a planet with a Urey ratio above 1 gets hotter, and since we know the Earth has been cooling, the surface heat loss 3 Gyr ago must have been substantially *greater* than 46 TW.

*And now the run-away.* Heat loss from a convecting mantle rises steeply with its temperature — boundary-layer theory ([4.4](04-04-mantle-convection-rayleigh-number.md)) gives roughly $Q \propto T^{\beta}$ with $\beta \approx 3$. So a hotter past mantle loses heat much faster, which means it cooled faster, which means it was hotter still slightly earlier. Integrating this backwards with the present Urey ratio of 0.43 sends the mantle temperature to the melting point somewhere between 1 and 2 Ga. **The rock record flatly contradicts this**: there are continents, sedimentary rocks and even evidence of liquid water oceans back to 4 Ga.

*Candidate resolutions, none decisive.*

- **The Urey ratio is higher than 0.43.** If radiogenic production is nearer 30 TW than 20, the imbalance shrinks and the backward integration is much tamer. This is why the geoneutrino measurement matters so much: it is the only way to pin down $H$ without assuming a composition.
- **The convective scaling is wrong.** If heat loss depends much more weakly on temperature than $T^3$ — because, for instance, plate speeds are set by the strength of the plates rather than by mantle viscosity — then a hotter mantle does not lose heat catastrophically faster, and the runaway is suppressed. There is real evidence for this: plate tectonics requires plates to break, and a hotter, weaker, more melted lithosphere may actually subduct *less* efficiently.
- **The tectonic regime changed.** Plate tectonics may not have operated, or may have operated intermittently, before some time in the Proterozoic — in which case the whole parameterization does not apply to the early Earth.

*The methodological point.* This is a case where a well-posed calculation with reliable ingredients produces a conclusion that is definitely false, and the falsity is the information. **The paradox is a constraint on the physics of mantle convection, delivered by the geological record** — and it is the reason "how does heat loss scale with mantle temperature?" is a live question rather than a textbook exercise.

## Watch out

- **You might think** the Earth's heat comes mostly from radioactivity. **Actually** less than half of it does. The popular formulation "the Earth is heated by radioactive decay" gets the Urey ratio wrong by more than a factor of two, and the stored-heat term is what makes the planet's thermal history a *history* rather than a steady state.
- **You might think** the 46 TW is well determined. **Actually** the oceanic part relies on extrapolating conductive measurements to young seafloor where hydrothermal circulation carries much of the heat past the sensors ([4.3](04-03-cooling-oceanic-lithosphere.md)). Estimates have ranged from 42 to 47 TW, and the difference matters for the budget.
- **You might think** the crustal and mantle radiogenic terms can be separated by measuring rocks. **Actually** surface rocks tell you about the crust, and the mantle's content must be inferred from a compositional model or from geoneutrinos. The split between 7 TW crustal and 13 TW mantle in the budget above is model-dependent, and different bulk-Earth models move it substantially.

## One-liner

> Forty-six terawatts leave the Earth and about twenty are being made by radioactivity, so most of the output is stored heat — and because production was several times larger in the past, running the budget backwards makes the mantle impossibly hot, which is a problem the subject has not solved.

## Problems

**P1 (🟢)** Take $Q = 44$ TW, $H = 22$ TW, $Q_{\text{core}} = 8$ TW, mantle mass $4.0\times10^{24}$ kg, $c_p = 1200\ \mathrm{J\,kg^{-1}\,K^{-1}}$. (a) Compute the Urey ratio. (b) Compute the mantle cooling term. (c) Compute the cooling rate in K/Gyr.

**P2 (🟡)** (a) Using the half-lives in the lesson, compute the factor by which each of $^{238}$U, $^{235}$U, $^{232}$Th and $^{40}$K produced more heat 4.5 Gyr ago than today. (b) Using the present contributions $H_{238} = 7.66$, $H_{235} = 0.34$, $H_{Th} = 8.0$, $H_K = 4.0$ TW, compute the total production at 4.5 Ga. (c) State which isotope dominates the early budget and which dominates today, and explain the switch in one sentence.

**P3 (🔴, bridges to [5.4](05-04-the-core.md))** Suppose the core supplies $Q_{\text{core}} = 15$ TW rather than 10. (a) Recompute the mantle cooling term and rate, using $Q = 46$, $H = 20$ TW. (b) The core has mass $1.9\times10^{24}$ kg and $c_p \approx 800\ \mathrm{J\,kg^{-1}\,K^{-1}}$; if all 15 TW were secular cooling of the core with no latent heat, compute the core's cooling rate in K/Gyr. (c) Extrapolate back 4 Gyr and comment on whether the answer is physically acceptable. (d) State what this implies must be supplementing the core's energy budget, and connect it to the dynamo.

<details>
<summary>Solutions</summary>

**P1** (a) $$\mathrm{Ur} = \frac{22}{44} = 0.50.$$

(b) $$Q_{\text{cool}} = 44 - 22 - 8 = 14\ \mathrm{TW}.$$

(c) $$\left|\frac{dT}{dt}\right| = \frac{1.4\times10^{13}}{4.0\times10^{24}\times1200} = \frac{1.4\times10^{13}}{4.8\times10^{27}} = 2.92\times10^{-15}\ \mathrm{K\,s^{-1}},$$
$$= 2.92\times10^{-15}\times3.156\times10^{16} = 92\ \mathrm{K\ per\ Gyr}.$$

**P2** (a) $$^{238}\mathrm{U}:\ 2^{4.5/4.47} = 2^{1.007} = 2.01; \qquad ^{235}\mathrm{U}:\ 2^{4.5/0.704} = 2^{6.392} = 84.0;$$
$$^{232}\mathrm{Th}:\ 2^{4.5/14.0} = 2^{0.321} = 1.25; \qquad ^{40}\mathrm{K}:\ 2^{4.5/1.25} = 2^{3.60} = 12.1.$$

(b) $$H_{238} = 7.66\times2.01 = 15.4, \quad H_{235} = 0.34\times84.0 = 28.6,$$
$$H_{Th} = 8.0\times1.25 = 10.0, \quad H_K = 4.0\times12.1 = 48.4.$$
$$H_{\text{total}}(4.5\ \mathrm{Ga}) = 15.4+28.6+10.0+48.4 = 102.4\ \mathrm{TW}.$$

**About five times the present production**, and more than twice the present total heat loss.

(c) At 4.5 Ga, $^{40}$K dominates (48 TW of 102), with $^{235}$U close behind (29 TW). Today, thorium and $^{238}$U dominate (8.0 and 7.7 TW), and $^{235}$U has almost vanished.

The switch happens because **the short-lived isotopes were abundant early and are now nearly gone**: $^{235}$U has a half-life of only 0.70 Gyr, so 84 percent of the original is not merely decayed but decayed many times over, and $^{40}$K at 1.25 Gyr is not far behind. Thorium, with a 14 Gyr half-life, has barely started; it is the isotope that will still be heating the Earth when the others are exhausted.

**P3** (a) $$Q_{\text{cool}} = 46 - 20 - 15 = 11\ \mathrm{TW}.$$
$$\left|\frac{dT}{dt}\right| = \frac{1.1\times10^{13}}{4.8\times10^{27}} = 2.29\times10^{-15}\ \mathrm{K\,s^{-1}} = 72\ \mathrm{K\ per\ Gyr}.$$

A larger core contribution means the *mantle* is cooling more slowly, since the core is supplying part of what the surface loses.

(b) $$\left|\frac{dT_c}{dt}\right| = \frac{1.5\times10^{13}}{1.9\times10^{24}\times800} = \frac{1.5\times10^{13}}{1.52\times10^{27}} = 9.87\times10^{-15}\ \mathrm{K\,s^{-1}},$$
$$= 9.87\times10^{-15}\times3.156\times10^{16} = 312\ \mathrm{K\ per\ Gyr}.$$

(c) Over 4 Gyr that is $312\times4 = 1250$ K of cooling. The core is now at roughly 4000 to 5500 K, so it would have been at **5250 to 6750 K** four billion years ago.

Is that acceptable? Marginally, and probably not. The upper end exceeds the temperature of the Sun's surface, and — more to the point — it is well above any plausible temperature for the core immediately after accretion and differentiation, which is bounded by the energy available from gravitational settling of iron. Worse, a core that hot would have kept the base of the mantle molten far longer than the geological record allows. **The 15 TW figure, treated as pure secular cooling, back-extrapolates to an implausibly hot early core.**

(d) Something must be supplying energy without requiring the core to have started that hot. Two things do:

- **Latent heat of inner-core crystallization.** As the inner core freezes, it releases latent heat — roughly $10^{6}\ \mathrm{J\,kg^{-1}}$ — at the inner-core boundary, which appears in the core's energy budget without any additional cooling of the bulk ([3.2](03-02-the-geodynamo.md), P3).
- **Gravitational energy of compositional separation.** Light elements expelled at the inner-core boundary rise through the outer core, converting gravitational potential energy directly into fluid motion.

Both are consequences of inner-core growth, and both are *more* useful to the dynamo than plain cooling, because compositional buoyancy drives convection without paying a Carnot efficiency ([3.2](03-02-the-geodynamo.md)). So the resolution of the over-hot extrapolation is the same fact that most likely powers the modern geodynamo: **the inner core is freezing, and that freezing does double duty as an energy source and as a way of keeping the early core's temperature within bounds.**

The remaining tension — that a *young* inner core cannot have been doing this for most of Earth history, while palaeomagnetism shows a field at 3.5 Ga — is the "new core paradox", and it is [5.4](05-04-the-core.md)'s problem.

</details>

## Flashback

**From Lesson 4.1 (Conduction and the geotherm):** A continental site has $T_0 = 8$ °C, $q_0 = 55\ \mathrm{mW\,m^{-2}}$, $k = 2.8\ \mathrm{W\,m^{-1}\,K^{-1}}$, and $A = 1.2\ \mathrm{\mu W\,m^{-3}}$ in the top 15 km. (a) Compute the temperature at 15 km. (b) Compute the reduced heat flow. (c) Compute the temperature at the Moho, 42 km down.

<details>
<summary>Solution</summary>

(a) $$T(15\ \mathrm{km}) = 8 + \frac{0.055}{2.8}\times1.5\times10^{4} - \frac{1.2\times10^{-6}}{2\times2.8}\times(1.5\times10^{4})^2$$
$$= 8 + 0.019643\times1.5\times10^{4} - 2.143\times10^{-7}\times2.25\times10^{8}$$
$$= 8 + 294.6 - 48.2 = 254\ ^\circ\mathrm{C}.$$

(b) $$q_r = 0.055 - 1.2\times10^{-6}\times1.5\times10^{4} = 0.055 - 0.018 = 0.037\ \mathrm{W\,m^{-2}} = 37\ \mathrm{mW\,m^{-2}}.$$

(c) $$\frac{dT}{dz} = \frac{0.037}{2.8} = 0.013214\ \mathrm{K\,m^{-1}} = 13.2\ \mathrm{K\,km^{-1}},$$
$$T(42\ \mathrm{km}) = 254 + 13.2\times27 = 254 + 357 = 611\ ^\circ\mathrm{C}.$$

A cool, stable-shield geotherm: 611 °C at a 42 km Moho, with a third of the surface heat flow generated in the upper crust.

</details>

## Connections

- **Backward:** the conductive geotherm and the source term $A$ are [4.1](04-01-conduction-and-the-geotherm.md)'s; the decay law used to run production backwards is [intro-nuclear-engineering 1.3](../../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md)'s, and the same isotopes that heat the Earth are the ones that date it in [`geology` 4.2](../../geology/lessons/04-02-radiometric-dating.md).
- **Forward:** [4.4](04-04-mantle-convection-rayleigh-number.md) supplies the convective heat-loss scaling that Example 2's paradox turns on; [5.4](05-04-the-core.md) works out the core's own budget, which is the least certain term here and the one the dynamo depends on.
- **Sideways:** the incompatible-element enrichment that concentrates U, Th and K into the crust is the partial-melting chemistry of [`geology` 1.3](../../geology/lessons/01-03-how-the-earth-melts.md); geoneutrino detection is the same inverse-beta-decay technique as reactor-neutrino experiments in [`nuclear-particle-physics`](../../nuclear-particle-physics/syllabus.md), pointed at the planet instead of a reactor.
