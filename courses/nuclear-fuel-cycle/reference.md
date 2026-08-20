# Nuclear Fuel Cycle & Policy · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The whole course is one walk from ore body to repository, and almost every
quantitative step is a **balance**: mass in equals mass out (milling,
enrichment, reprocessing), value out minus value in (separative work),
reactivity spent equals reactivity loaded (batch reloading), heat generated
equals heat removed (pools, casks, canisters), and money in equals money out
(levelized cost). This card carries those balances, the constants and isotope
data the lessons quote without deriving, and the vocabulary — SWU, GWd/tHM,
HLW, SQ, MUF, LCOE — that only means something once you can compute with it.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $g$ | ore grade — mass fraction of elemental uranium in the rock | [1.1](lessons/01-01-fuel-cycle-map-uranium-resources.md) |
| $E_f$ | recoverable energy per fission, $\approx 200$ MeV | [1.1](lessons/01-01-fuel-cycle-map-uranium-resources.md) |
| $R$ | mill recovery fraction — uranium captured over uranium fed | [1.2](lessons/01-02-mining-milling.md) |
| $f_U$ | uranium mass fraction *of yellowcake*, $\ce{U3O8}$, $= 0.848$ | [1.2](lessons/01-02-mining-milling.md) |
| $M_\text{ore}$, $M_\text{tail}$ | ore milled and mill tailings left behind (mass) | [1.2](lessons/01-02-mining-milling.md) |
| $x$ | **assay** — mass fraction of $\ce{^{235}U}$ in a stream's uranium | [1.3](lessons/01-03-conversion-enrichment-mass-balance.md) |
| $x_f$, $x_p$, $x_w$ | feed, product, and tails (waste) assay; $x_w < x_f < x_p$ | [1.3](lessons/01-03-conversion-enrichment-mass-balance.md) |
| $F$, $P$, $T$ | feed, product, tails **masses of uranium** (kgU) | [1.3](lessons/01-03-conversion-enrichment-mass-balance.md) |
| $V(x)$ | value function (separation potential) — how far a stream sits from 50/50 | [1.4](lessons/01-04-centrifuge-separative-work.md) |
| SWU | separative work unit — a fixed dollop of unmixing effort, in kg | [1.4](lessons/01-04-centrifuge-separative-work.md) |
| $r$ (front end) | abundance ratio $x/(1-x)$ — the thing a stage multiplies | [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md) |
| $\alpha$ (front end) | per-stage overall separation factor, $r_\text{heads} = \alpha\,r_\text{tails}$ | [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md) |
| $c_U,\ c_\text{conv},\ c_S,\ c_\text{fab}$ | unit prices: dollars per kgU of feed, per kgU converted, per SWU, per kgU fabricated | [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md) |
| $q'$ | linear heat rate — kilowatts each meter of fuel rod must shed | [2.1](lessons/02-01-fuel-fabrication-assembly-design.md) |
| $k_f$ | fuel thermal conductivity ($\ce{UO2}$, $\approx 3$ W/m·K) | [2.1](lessons/02-01-fuel-fabrication-assembly-design.md) |
| tHM, kgHM | tonnes / kilograms of **heavy metal** (U + Pu + heavier) as loaded | [2.1](lessons/02-01-fuel-fabrication-assembly-design.md) |
| $B$ | burnup — thermal energy released per unit heavy metal, GWd/tHM | [2.1](lessons/02-01-fuel-fabrication-assembly-design.md) |
| $\rho$, $\rho_\text{ex}$ | reactivity and **excess** reactivity (all poison removed) | [2.2](lessons/02-02-reactivity-over-life-reload-management.md) |
| pcm | percent-mille, $10^{-5}$ of reactivity; $1\%\,\Delta k = 1000$ pcm | [2.2](lessons/02-02-reactivity-over-life-reload-management.md) |
| $\alpha$ (in-core) | reactivity depletion rate $\lvert d\rho/dB\rvert$, pcm per GWd/tHM — **not** the separation factor of 1.5 | [2.2](lessons/02-02-reactivity-over-life-reload-management.md) |
| $\beta_B$, $C_B$ | differential boron worth (pcm/ppm) and boron concentration (ppm) | [2.2](lessons/02-02-reactivity-over-life-reload-management.md) |
| $n$, $B_n$, $B_1$, $B_c$ | batches; $n$-batch discharge burnup, single-batch burnup, burnup gained per cycle | [2.2](lessons/02-02-reactivity-over-life-reload-management.md) |
| BOC, EOC | beginning / end of cycle | [2.2](lessons/02-02-reactivity-over-life-reload-management.md) |
| $\mathrm{CR}$ | conversion ratio — fissile bred over fissile destroyed | [2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md) |
| $\eta$ (economics) | plant thermal efficiency, electrical out over thermal in — **not** the reproduction factor of 4.1 | [2.4](lessons/02-04-in-core-fuel-cycle-economics.md) |
| $\phi$ (economics) | carrying-charge factor — **not** the neutron flux of 4.2 | [2.4](lessons/02-04-in-core-fuel-cycle-economics.md) |
| $\bar t$, $r$ (economics) | mean years money sits in the fuel, and the annual financing rate | [2.4](lessons/02-04-in-core-fuel-cycle-economics.md) |
| $C_\text{fe}$, $c_\text{fuel}$ | front-end batch cost (dollars per kg) and levelized fuel cost (dollars per MWh) | [2.4](lessons/02-04-in-core-fuel-cycle-economics.md) |
| $P_0$, $P(t)$ | steady thermal power before shutdown, and decay-heat power after | [3.1](lessons/03-01-decay-heat-source-term.md) |
| $t$, $t_0$ | cooling time since shutdown and irradiation time at power, both in **seconds** | [3.1](lessons/03-01-decay-heat-source-term.md) |
| $R_i(t)$, $e_i$ | radiotoxicity of nuclide $i$, and its ingestion dose coefficient (Sv/Bq) | [3.2](lessons/03-02-spent-fuel-isotopics-radiotoxicity.md) |
| FP, MA | fission products; minor actinides (Np, Am, Cm) | [3.2](lessons/03-02-spent-fuel-isotopics-radiotoxicity.md) |
| $a$ (waste) | activity concentration, Bq/kg — **not** the canister radius of 3.6 | [3.3](lessons/03-03-waste-classification-interim-storage.md) |
| $q$ (waste) | volumetric heat output, W/m³ | [3.3](lessons/03-03-waste-classification-interim-storage.md) |
| $P_\text{cask}$ | a dry cask's rated per-assembly heat limit | [3.3](lessons/03-03-waste-classification-interim-storage.md) |
| $D_i$ | distribution ratio — organic-phase over aqueous-phase concentration | [3.4](lessons/03-04-reprocessing-purex-separations.md) |
| $w_\text{Pu}$ | total-plutonium weight fraction of a MOX pellet's heavy metal | [3.5](lessons/03-05-recycling-mox-plutonium-balance.md) |
| $f_{239},\dots,f_{242}$, $f_\text{fis}$ | the plutonium **vector** (isotopic mass fractions) and its fissile share | [3.5](lessons/03-05-recycling-mox-plutonium-balance.md) |
| $Q$, $k$, $a$ (repository) | canister thermal power (W), host-rock conductivity (W/m·K), canister radius (m) | [3.6](lessons/03-06-geological-disposal-repository.md) |
| $s$, $N$ | canister spacing (m) and number of nearby neighbors | [3.6](lessons/03-06-geological-disposal-repository.md) |
| $\eta$ (neutronics) | reproduction factor — neutrons produced per neutron absorbed in fuel | [4.1](lessons/04-01-fast-reactors-breeding.md) |
| $L$ | neutron losses (leakage + parasitic capture) per fissile atom destroyed | [4.1](lessons/04-01-fast-reactors-breeding.md) |
| BR, $G$ | breeding ratio and breeding gain $G = \mathrm{BR}-1$ | [4.1](lessons/04-01-fast-reactors-breeding.md) |
| $M_0$, $\dot M_\text{burn}$, $t_D$ | fissile inventory (core + pipeline), fissile destruction rate, doubling time | [4.1](lessons/04-01-fast-reactors-breeding.md) |
| $\phi$ (neutronics) | neutron flux, cm⁻²s⁻¹ | [4.2](lessons/04-02-thorium-cycle.md) |
| $\sigma_a$, $\lambda$ | absorption cross-section (barns) and decay constant (s⁻¹) | [4.2](lessons/04-02-thorium-cycle.md) |
| $f_\text{decay}$ | fraction of $\ce{^{233}Pa}$ that decays rather than capturing | [4.2](lessons/04-02-thorium-cycle.md) |
| SQ | significant quantity — one weapon's worth of fissile material | [4.3](lessons/04-03-nonproliferation-safeguards-security.md) |
| MUF, $\sigma_\text{MUF}$ | material unaccounted for, and its measurement-noise standard deviation | [4.3](lessons/04-03-nonproliferation-safeguards-security.md) |
| $\varepsilon_r$, $\varepsilon_s$ | random and systematic relative measurement uncertainty | [4.3](lessons/04-03-nonproliferation-safeguards-security.md) |
| OCC, FCR, CF | overnight capital cost (dollars/kW), fixed charge rate (per yr), capacity factor | [4.4](lessons/04-04-nuclear-economics-lcoe.md) |
| LCOE | levelized cost of electricity, dollars per MWh | [4.4](lessons/04-04-nuclear-economics-lcoe.md) |

## Definitions

### Open and closed fuel cycle

Two ways to treat spent fuel: bury it, or mine it again. The cycles are
identical up to the reactor and differ only at the fork — **open**
(once-through) sends spent fuel to interim storage and then a repository;
**closed** reprocesses it and routes the recovered uranium and plutonium back to
fabrication. The single tell for which cycle a country runs is whether it
operates a **reprocessing plant**.

*Introduced:* [1.1](lessons/01-01-fuel-cycle-map-uranium-resources.md)

### Ore grade

A property of the rock: what fraction of it is uranium. It sets how much rock
you move per kilogram of uranium, $\text{ore mass} = m_U/g$, and therefore the
mine's whole waste footprint.

*Introduced:* [1.1](lessons/01-01-fuel-cycle-map-uranium-resources.md)

### Reserves and resources

A property of the rock **and the price**: the quantity of uranium recoverable
below a stated cost (e.g. under 130 dollars per kilogram of uranium). Raise the
price you'll pay and the number grows, because lower grades become worth mining.
Uranium isn't scarce; cheap uranium is.

*Introduced:* [1.1](lessons/01-01-fuel-cycle-map-uranium-resources.md)

### Recovery fraction

The share of the uranium in the ore that the mill actually captures. Never 1
(typically 0.90–0.97); whatever you miss stays in the tailings or the depleted
aquifer.

$$R = \frac{\text{uranium captured}}{\text{uranium fed}}$$

*Introduced:* [1.2](lessons/01-02-mining-milling.md)

### Yellowcake

The mill's shippable product: uranium oxide powder, $\ce{U3O8}$, which is only
$84.8\%$ uranium by mass. A tonne of yellowcake is **not** a tonne of uranium —
convert with $f_U = 0.848$ before feeding any enrichment balance.

*Introduced:* [1.2](lessons/01-02-mining-milling.md)

### Mill tailings

The spent sand left after leaching: essentially the entire milled ore mass,
carrying the $(1-R)$ slice of uranium you failed to recover *plus* the whole
radium/thorium decay family, which doesn't dissolve and doesn't leave. That is
why tailings keep exhaling radon for millennia. Distinct from **enrichment
tails** — see [Tails assay](#tails-assay).

*Introduced:* [1.2](lessons/01-02-mining-milling.md)

### In-situ leach

Bring the chemistry to the rock: drill wells, inject a lixiviant into a
permeable, water-saturated ore body, and pump the loaded solution back up. No
pit, no haul, no surface tailings — the radium and thorium stay underground. The
burden it takes on instead is a contaminated aquifer that must be restored.

*Introduced:* [1.2](lessons/01-02-mining-milling.md)

### Assay

A stream's fraction of the useful isotope: the mass fraction of $\ce{^{235}U}$
in its uranium. Natural uranium is $x_f = 0.711\%$; light-water reactor fuel is
$3$–$5\%$; highly enriched uranium is $\geq 20\%$.

*Introduced:* [1.3](lessons/01-03-conversion-enrichment-mass-balance.md)

### Conversion

Turning the mill's solid yellowcake into gaseous uranium hexafluoride,
$\ce{UF6}$, which sublimes near $56\,^\circ\text{C}$. Necessary because isotopes
are chemically identical — separation is purely physical, by mass, and needs a
gas. Fluorine is chosen because it has a single stable isotope, so all the mass
difference comes from the uranium.

*Introduced:* [1.3](lessons/01-03-conversion-enrichment-mass-balance.md)

### Tails assay

The depleted assay $x_w$ at which the enricher stops stripping — the one free
economic dial in the front end. Lower it and you wring more $\ce{^{235}U}$ out
of the feed (less uranium to buy) but you pay in separative work.

*Introduced:* [1.3](lessons/01-03-conversion-enrichment-mass-balance.md)

### Value function

A dimensionless score of how far a stream sits from the do-nothing 50/50 mix —
zero at $x = 0.5$, diverging toward either pure end, and symmetric,
$V(x) = V(1-x)$, because unmixing doesn't care which isotope you wanted.

$$V(x) = (2x-1)\,\ln\frac{x}{1-x}$$

*Introduced:* [1.4](lessons/01-04-centrifuge-separative-work.md)

### Separative work unit (SWU)

The thermodynamic effort of unmixing, priced and traded by the kilogram. It is a
**state function** — it depends only on the three assays and masses, not on how
the cascade is built or how long it runs — which is exactly what makes it a
clean commodity. A SWU is not an amount of $\ce{UF6}$ and not a kilowatt-hour.

$$\text{SWU} = P\,V(x_p) + T\,V(x_w) - F\,V(x_f)$$

*Introduced:* [1.4](lessons/01-04-centrifuge-separative-work.md)

### Ideal cascade

Stages plumbed so that **no two streams of different assay are ever mixed** —
mixing un-does separation you already paid SWU for. The result has a
characteristic diamond shape: fat at the feed point, tapering to a little
product at the top and a lot of barely-depleted tails at the bottom. Above the
feed is the **enriching section**, below it the **stripping section**.

*Introduced:* [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md)

### Separation factor

What one stage actually does: multiply the abundance ratio by a fixed factor
slightly above 1. Because ratios multiply, $n$ stages give $\alpha^n$ —
separation compounds geometrically, which is why one centrifuge is useless and a
cascade isn't.

$$r_\text{heads} = \alpha\,r_\text{tails}, \qquad r \equiv \frac{x}{1-x}$$

*Introduced:* [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md)

### Linear heat rate

Power per unit length of fuel rod — the quantity the coolant, the cladding, and
the pellet centerline all actually feel, because heat leaves a long thin rod
radially. It is the master design variable of the fuel rod.

$$q' = \frac{\text{rod power}}{\text{active fuel length}} \quad \left[\tfrac{\text{kW}}{\text{m}}\right]$$

*Introduced:* [2.1](lessons/02-01-fuel-fabrication-assembly-design.md)

### Centerline-melt limit

The value of $q'$ that would push the pellet centerline to the $\ce{UO2}$
melting point, $2865\,^\circ\text{C}$. Design limits are set well below it —
often quoted as $q'_\text{lim} \approx 59$ kW/m — and the core is capped by its
*hottest* rod, not its average.

*Introduced:* [2.1](lessons/02-01-fuel-fabrication-assembly-design.md)

### Fission-gas plenum

The empty volume at the top of a fuel rod that holds the xenon and krypton the
pellets breathe out, so rod internal pressure never exceeds the $\sim 15.5$ MPa
coolant pressure outside. Sized for end-of-life gas, and often the practical
ceiling on burnup.

*Introduced:* [2.1](lessons/02-01-fuel-fabrication-assembly-design.md)

### Burnup

The fuel's mileage: thermal energy extracted per unit of heavy metal loaded,
quoted in GWd/tHM (equivalently MWd/kgU). A modern PWR discharges at
$50$–$60$ GWd/tHM.

$$B = \frac{\text{thermal energy produced}}{\text{initial heavy-metal mass}}$$

*Introduced:* [2.1](lessons/02-01-fuel-fabrication-assembly-design.md)

### Excess reactivity

The reactivity a fresh core would have with every poison removed — a full
cycle's worth of fuel you haven't burned yet. It starts positive at BOC and is
metered out to zero at EOC, which is what *defines* the cycle length.

$$\rho = \frac{k_\text{eff}-1}{k_\text{eff}}$$

*Introduced:* [2.2](lessons/02-02-reactivity-over-life-reload-management.md)

### Burnable poison

A strong neutron absorber built into the fuel itself (gadolinium $\ce{Gd2O3}$ in
some pellets, or boron coatings) that burns itself out on roughly the same
schedule as the fuel depletes. It flattens the excess-reactivity curve so far
less soluble boron is needed early — a safety device as much as a convenience.

*Introduced:* [2.2](lessons/02-02-reactivity-over-life-reload-management.md)

### Chemical shim

Boric acid dissolved in the coolant (PWRs only). Perfectly uniform, so it
depresses reactivity everywhere without tilting the power shape, and it is
adjusted slowly over weeks by dilution. BWRs cannot do this in operation, so
they lean on gadolinium instead.

*Introduced:* [2.2](lessons/02-02-reactivity-over-life-reload-management.md)

### Batch reloading

Replace only $1/n$ of the assemblies each cycle and shuffle the survivors, so an
assembly stays $n$ cycles. The core only needs its *average* reactivity to be
critical, so fresh batches subsidize old ones and each assembly burns far deeper
than it could alone.

*Introduced:* [2.2](lessons/02-02-reactivity-over-life-reload-management.md)

### Linear reactivity model

The one assumption that makes fuel management analytic: an assembly's reactivity
falls **linearly** with its own burnup, hitting zero at the single-batch
discharge burnup $B_1$.

$$\rho(B) = \rho_0\left(1 - \frac{B}{B_1}\right)$$

*Introduced:* [2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md)

### Discharge burnup vs. average core burnup

**Discharge** burnup $B_n$ is what the *oldest* batch reaches when it leaves;
the **average core** burnup at EOC is what the criticality condition pins to
$B_1$. For a 3-batch core with $B_1 = 15$, the discharged fuel is at $22.5$ while
the average assembly is at $15$ — quote the wrong one and waste and economics are
off by up to a factor of two.

*Introduced:* [2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md)

### Conversion ratio

How much of the fissile you burn gets replaced for free by plutonium bred from
$\ce{^{238}U}$. A typical LWR runs $\mathrm{CR} \approx 0.5$–$0.6$, and by
discharge plutonium fission supplies roughly a third of the power. Driven above
1 it becomes the [breeding ratio](#breeding-ratio).

$$\mathrm{CR} = \frac{\text{rate of new fissile produced}}{\text{rate of fissile destroyed}}$$

*Introduced:* [2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md)

### Carrying charge

Rent on the money tied up in fuel. A batch is paid for at loading but earns
revenue on average $\bar t \approx 3$ years later, so the front-end cost is
grossed up by a factor $\phi$ before it is spread over energy. This *is*
discounting, applied to a lump you spend early and recover late.

$$\phi = (1+r)^{\bar t} \approx 1 + r\,\bar t$$

*Introduced:* [2.4](lessons/02-04-in-core-fuel-cycle-economics.md)

### Levelized fuel cost

Total money into a fuel batch divided by total electricity out of it — the price
tag on a fuel-supplied megawatt-hour. It is **U-shaped in burnup**: amortization
of fixed costs pushes it down, rising enrichment demand pushes it back up, and
the optimum sits in between (near $45$ GWd/tHM at typical prices).

$$c_\text{fuel} = \frac{\phi\,C_\text{fe}}{24\,\eta\,B}$$

*Introduced:* [2.4](lessons/02-04-in-core-fuel-cycle-economics.md)

### Decay heat

The heat you cannot switch off. Fission stops the instant the rods drop, but the
fission-product inventory keeps decaying — about $6$–$7\%$ of full power at
shutdown, falling only as $t^{-0.2}$. Every loss-of-cooling accident is decay
heat with nowhere to go.

*Introduced:* [3.1](lessons/03-01-decay-heat-source-term.md)

### Source term

The full specification of what a spent assembly emits: **heat** plus
**penetrating radiation**. The heat sets your cooling requirement, the radiation
sets your shielding requirement, and both run on the same decay clock — which is
why "let it cool" also means "let it get less radioactive."

*Introduced:* [3.1](lessons/03-01-decay-heat-source-term.md)

### Ingestion radiotoxicity

The committed dose you would receive if you swallowed the material — activity
times a per-nuclide dose coefficient, summed over every nuclide. Half-life sets
the *shape* of the curve; the dose coefficient sets its *height*.

$$R_i(t) = A_i(t)\,e_i = \lambda_i N_i(t)\,e_i, \qquad R(t) = \sum_i R_i(t)$$

*Introduced:* [3.2](lessons/03-02-spent-fuel-isotopics-radiotoxicity.md)

### Uranium-ore reference level

The natural benchmark: the radiotoxicity of the ore originally mined to make the
fuel. When spent fuel decays back to that line it is, by that measure, no more
hazardous than the rock it came from — about $10^5$ years for once-through fuel,
and the actinides are what hold it up there.

*Introduced:* [3.2](lessons/03-02-spent-fuel-isotopics-radiotoxicity.md)

### HLW, ILW, LLW

The three waste bins, sorted by **activity** (do you need shielding?), **heat**
(do you need cooling?), and **longevity** (how deep and how permanent?).
**HLW** is very active *and* thermally hot — spent fuel, or vitrified
reprocessing raffinate — and goes deep. **ILW** needs shielding but no cooling —
cladding hulls, resins, activated internals. **LLW** is contact-handled trash:
about $90\%$ of the volume, a trivial share of the hazard.

*Introduced:* [3.3](lessons/03-03-waste-classification-interim-storage.md)

### Pool-to-cask criterion

Spent fuel waits in a pool — roughly 12 m of borated water, giving active
cooling *and* shielding — until its own decay heat drops below what passive air
convection in a sealed cask can shed while keeping cladding under about
$400\,^\circ\text{C}$. That single inequality sets the years of pool residence.

$$P(t) \le P_\text{cask}$$

*Introduced:* [3.3](lessons/03-03-waste-classification-interim-storage.md)

### Distribution ratio

The number that *is* the separation in solvent extraction: how strongly a
species prefers the organic phase. $D_i \gg 1$ means "goes into the oil,"
$D_i \ll 1$ means "stays in the acid."

$$D_i = \frac{[\,i\,]_\text{org}}{[\,i\,]_\text{aq}}$$

*Introduced:* [3.4](lessons/03-04-reprocessing-purex-separations.md)

### PUREX

Dissolve chopped spent fuel in hot nitric acid, then contact it with about
$30\%$ TBP (tributyl phosphate) in kerosene. TBP complexes only the highly
charged $\ce{UO2^2+}$ and $\ce{Pu^4+}$, so uranium and plutonium ride into the
organic phase while the fission products stay in the acid. Three streams come
out: uranium, plutonium, and **raffinate**.

*Introduced:* [3.4](lessons/03-04-reprocessing-purex-separations.md)

### Partitioning

The valency trick that splits plutonium from uranium: add a reductant to drive
$\ce{Pu^4+ -> Pu^3+}$, which TBP cannot complex, so $D_\text{Pu}$ collapses and
plutonium strips back into the aqueous stream — while uranium's $+6$ state is
untouched and stays in the oil.

*Introduced:* [3.4](lessons/03-04-reprocessing-purex-separations.md)

### Raffinate

The leftover acid after extraction: fission products plus minor actinides. It is
the high-level waste, and it gets vitrified into glass logs. Reprocessing does
not abolish HLW — it changes its *form*.

*Introduced:* [3.4](lessons/03-04-reprocessing-purex-separations.md)

### MOX

Mixed-oxide fuel: separated $\ce{PuO2}$ blended into cheap **depleted**
$\ce{UO2}$ at a total-plutonium weight fraction $w_\text{Pu}$ of typically
$7$–$10\%$, chosen so the assembly matches the enriched $\ce{UO2}$ (UOX)
assemblies beside it. Plutonium standing in for enrichment.

*Introduced:* [3.5](lessons/03-05-recycling-mox-plutonium-balance.md)

### Plutonium vector and fissile fraction

Reactor-grade plutonium is a *mix*, not an isotope. Only the odd-mass isotopes
fission readily on thermal neutrons, so the reactivity-relevant number is the
fissile fraction — about $0.60$–$0.65$ for plutonium from spent UOX.

$$f_\text{fis} = f_{239} + f_{241}$$

*Introduced:* [3.5](lessons/03-05-recycling-mox-plutonium-balance.md)

### Mono-recycle wall

Why light-water recycling stops after one lap. Each thermal pass eats the
fissile rungs and shoves survivors up the capture ladder, so $f_\text{fis}$
falls from $\sim 0.65$ to $\sim 0.45$–$0.50$; a second pass would need so much
total plutonium that the spectrum hardens and void feedback, control-rod worth,
and boron worth all degrade. The wall is reactor physics, not chemistry.

*Introduced:* [3.5](lessons/03-05-recycling-mox-plutonium-balance.md)

### Defense in depth (multi-barrier system)

Don't trust one perfect barrier for a million years; trust a chain of
independent, merely-good-enough ones — waste form, canister, bentonite buffer,
host rock — each covering the era it is best at. Water must defeat all of them
in sequence.

$$P_\text{escape} = \prod_{i=1}^{n} p_i$$

*Introduced:* [3.6](lessons/03-06-geological-disposal-repository.md)

### Thermal loading

The rule that sizes a repository: canisters are spaced until each one's decay
heat can escape without its neighbors piling on and driving the bentonite past
its drying limit (often $\sim 100\,^\circ\text{C}$). A repository sprawls
because the waste is *hot*, not because it is bulky.

*Introduced:* [3.6](lessons/03-06-geological-disposal-repository.md)

### Fertile and fissile

**Fissile** nuclei ($\ce{^{235}U}$, $\ce{^{239}Pu}$, $\ce{^{241}Pu}$,
$\ce{^{233}U}$) fission on slow neutrons and can sustain a chain reaction.
**Fertile** nuclei ($\ce{^{238}U}$, $\ce{^{232}Th}$) cannot, but transmute into
fissile ones after a capture and two beta decays. Breeding is the business of
converting the second kind into the first.

*Introduced:* [4.1](lessons/04-01-fast-reactors-breeding.md)

### Breeding ratio

Count neutrons per fissile atom destroyed: of the $\eta$ produced, one sustains
the chain, $L$ are lost, and the rest breed. $\mathrm{BR} > 1$ is a **breeder**,
$\mathrm{BR} < 1$ a **converter**; the surplus $G = \mathrm{BR}-1$ is the
breeding gain.

$$\mathrm{BR} = \frac{\text{fissile produced}}{\text{fissile consumed}} \approx \eta - 1 - L$$

*Introduced:* [4.1](lessons/04-01-fast-reactors-breeding.md)

### Doubling time

How long a breeder's thin surplus takes to pile up one whole extra inventory —
the number that decides whether a breeder economy can actually grow. It lands in
the decades because the surplus is a small slice of a very large inventory.

$$t_D = \frac{M_0}{(\mathrm{BR}-1)\,\dot M_\text{burn}}$$

*Introduced:* [4.1](lessons/04-01-fast-reactors-breeding.md)

### Protactinium hold-up

Thorium's neutron tax. A would-be $\ce{^{233}U}$ atom spends weeks sitting in
the flux as $\ce{^{233}Pa}$ (27-day half-life); if it captures before it decays
you lose both the future fissile atom and the neutron. The fix is lower flux, or
chemically pulling the protactinium out to an out-of-core decay tank.

$$f_\text{decay} = \frac{\lambda}{\lambda + \sigma_a\phi}$$

*Introduced:* [4.2](lessons/04-02-thorium-cycle.md)

### Significant quantity

The IAEA's accounting yardstick — deliberately round and conservative — for how
much material is "enough": roughly **8 kg of plutonium** of any isotopic vector,
or **25 kg of $\ce{^{235}U}$ contained in HEU**. It is not a bomb design; it is
the unit in which inspectors count.

*Introduced:* [4.3](lessons/04-03-nonproliferation-safeguards-security.md)

### Material unaccounted for (MUF)

What the books say should be on hand minus what a physical count actually finds.
It is essentially never zero even when nobody stole anything, because every
weighing has error — so diversion is a **hypothesis test**, not a bookkeeping
certainty.

$$\text{MUF} = (P_\text{begin} + X) - (P_\text{end} + Y)$$

*Introduced:* [4.3](lessons/04-03-nonproliferation-safeguards-security.md)

### Self-protecting material

Fissile material whose own radiation field is a barrier: plutonium inside
unreprocessed spent fuel is dilute and lethal to approach, and aged
$\ce{^{233}U}$ carries the 2.6 MeV $\ce{^{208}Tl}$ gamma. Separated plutonium is
not self-protecting — which is precisely why reprocessing, not spent fuel, is
the proliferation flashpoint.

*Introduced:* [4.3](lessons/04-03-nonproliferation-safeguards-security.md)

### LCOE

The one flat price per MWh that, charged on every MWh the plant ever produces,
exactly pays back all its spending with a return on capital. A mortgage
amortized over electricity instead of months.

$$\text{LCOE} = \frac{\sum_t (I_t + M_t + Q_t)/(1+r)^t}{\sum_t E_t/(1+r)^t}$$

*Introduced:* [4.4](lessons/04-04-nuclear-economics-lcoe.md)

### Fixed charge rate

The fraction of the capital cost you must recover **every year** to cover return
on capital, depreciation, and taxes. It rises with the discount rate and with
build time, and it is the annuity's capital recovery factor wearing an
engineering hat.

*Introduced:* [4.4](lessons/04-04-nuclear-economics-lcoe.md)

### Capacity factor

The fraction of the year the plant actually runs at full power. It sits in the
**denominator** of the capital term, so it scales the largest piece of the bar —
idle capital is still fully billed.

*Introduced:* [4.4](lessons/04-04-nuclear-economics-lcoe.md)

## Formulas and rules

### Mill mass balance

Recovered uranium in equals uranium locked in the yellowcake out.

$$R\,g\,M_\text{ore} = f_U\,P \qquad\Longrightarrow\qquad M_\text{ore} = \frac{f_U\,P}{R\,g}$$

Tailings carry essentially the whole milled mass, and the uranium you missed:

$$M_\text{tail} \approx M_\text{ore}, \qquad \text{uranium in tailings} = (1-R)\,g\,M_\text{ore} = \frac{1-R}{R}\,f_U\,P$$

Ore, and therefore tailings, scale as $1/g$ — halve the grade and every tonnage
doubles.

*From* [1.2](lessons/01-02-mining-milling.md)

### Enrichment mass balance

Two conservation statements, and everything else follows.

$$F = P + T \qquad\text{(total uranium)}, \qquad F\,x_f = P\,x_p + T\,x_w \qquad (\ce{^{235}U})$$

$$\frac{F}{P} = \frac{x_p - x_w}{x_f - x_w}, \qquad P = F\,\frac{x_f - x_w}{x_p - x_w}, \qquad T = F - P$$

Assays may be carried in percent or in decimals — the units cancel — as long as
you are consistent. Always close the $\ce{^{235}U}$ balance as a check.

*From* [1.3](lessons/01-03-conversion-enrichment-mass-balance.md) *and* [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md)

### Separative work

$$V(x) = (2x-1)\ln\frac{x}{1-x}, \qquad V(x) = V(1-x), \qquad V(0.5) = 0$$

$$\text{SWU} = P\,V(x_p) + T\,V(x_w) - F\,V(x_f)$$

The $T\,V(x_w)$ term is usually the **largest** of the three: depleting the
waste is unmixing too. Carry four decimals in the $V$ values — SWU is a small
difference of large numbers.

| $x$ | $V(x)$ | | $x$ | $V(x)$ |
|---|---|---|---|---|
| $0.20\%$ | $6.188$ | | $4.5\%$ | $2.780$ |
| $0.25\%$ | $5.958$ | | $20\%$ | $0.832$ |
| $0.30\%$ | $5.771$ | | $50\%$ | $0$ |
| $0.711\%$ | $4.869$ | | $90\%$ | $1.76$ |
| $3.5\%$ | $3.085$ | | $3.6\%$ | $3.051$ |

*From* [1.4](lessons/01-04-centrifuge-separative-work.md) *and* [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md)

### Cascade stage count

Stages multiply the abundance ratio, so the count is logarithmic:

$$r = \frac{x}{1-x}, \qquad \alpha^n \ge \frac{r_p}{r_f} \qquad\Longrightarrow\qquad n \ge \frac{\ln(r_p/r_f)}{\ln \alpha}$$

At $\alpha = 1.25$, natural uranium reaches $4.5\%$ in nine ideal enriching
stages. The same geometry is why highly enriched uranium is only a few dozen
stages beyond low-enriched — the proliferation fact behind enrichment
technology.

*From* [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md)

### Front-end cost and the tails optimum

$$C = \underbrace{F\,c_U}_{\text{uranium}} + \underbrace{F\,c_\text{conv}}_{\text{conversion}} + \underbrace{\text{SWU}\cdot c_S}_{\text{enrichment}} + \underbrace{P\,c_\text{fab}}_{\text{fabrication}}$$

Feed and conversion scale with $F$; fabrication scales with $P$ and therefore
**cancels out of any tails-assay comparison**. Lowering the tails assay pays off
exactly while

$$(c_U + c_\text{conv})\,\Delta F \;>\; c_S\,\Delta\text{SWU},$$

so the break-even price ratio is $\Delta\text{SWU}/\Delta F$. A rising uranium
price pushes the optimum **down** (strip harder); cheap uranium and dear SWU
push it up. Reference batch: $1$ kg at $4.5\%$ from natural feed at $0.25\%$
tails needs $9.22$ kgU and $6.86$ SWU, costing about 2,050 dollars per kilogram
at 100 dollars per kgU, 15 dollars per kgU conversion, 100 dollars per SWU, and
300 dollars per kgU fabrication.

*From* [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md)

### Fuel-rod thermal design

$$q' = \frac{P}{N\,L} \quad (\text{core average, } N \text{ rods of active length } L), \qquad T_\text{center} - T_\text{surface} = \frac{q'}{4\pi k_f}$$

The centerline rise has **no pellet radius in it** — only $q'$ and conductivity.
Rod internal pressure from released fission gas:

$$p_\text{rod} = \frac{n_\text{gas}\,R\,T}{V_\text{free}}$$

| Quantity | Typical value |
|---|---|
| PWR / BWR average $q'$ | $18$–$22$ kW/m |
| hot-channel peaking factor | $2.4$–$2.5$ |
| design centerline-melt limit | $\approx 59$ kW/m |
| $\ce{UO2}$ melting point / conductivity | $2865\,^\circ\text{C}$ / $\approx 3$ W·m⁻¹K⁻¹ |
| coolant pressure (PWR) | $\approx 15.5$ MPa |
| PWR assembly / core | $17\times17$ lattice, 264 rods; 150–250 assemblies |

*From* [2.1](lessons/02-01-fuel-fabrication-assembly-design.md)

### Reactivity budget and holddown

$$\rho_\text{ex}(t) + \rho_\text{rods} + \rho_\text{boron}(t) + \rho_\text{BP}(t) = 0 \qquad (\text{critical at every instant})$$

$$\rho_\text{ex}(B) \approx \rho_\text{BOC} - \alpha\,B \qquad\Longrightarrow\qquad \rho_\text{BOC} = \alpha\,B_c$$

$$\rho_\text{boron} = \beta_B\,C_B, \qquad \beta_B \approx -8 \text{ to } -10 \ \tfrac{\text{pcm}}{\text{ppm}}$$

Burnable poison does not change $\rho_\text{BOC}$; it changes *who holds it
down*. Unit bridge: $1$ pcm $= 10^{-5}$, and $1\%\,\Delta k = 1000$ pcm.

*From* [2.2](lessons/02-02-reactivity-over-life-reload-management.md)

### Linear reactivity model

$$\bar B = \frac{n+1}{2}\,B_c = B_1 \quad\Longrightarrow\quad B_c = \frac{2B_1}{n+1}, \qquad \boxed{\,B_n = \frac{2n}{n+1}\,B_1\,}$$

Average core burnup at EOC is pinned at $B_1$ for every $n$. The ceiling is
$2B_1$, approached but never beaten, and the fractional gain from one more batch
shrinks quadratically:

$$\frac{B_{n+1}-B_n}{B_n} = \frac{1}{n(n+2)}$$

| $n$ | $B_n/B_1$ | gain over $n-1$ |
|---|---|---|
| 1 | $1$ | — |
| 2 | $4/3 = 1.33$ | $+33\%$ |
| 3 | $3/2 = 1.50$ | $+12.5\%$ |
| 4 | $8/5 = 1.60$ | $+6.7\%$ |
| $\infty$ | $2$ | — |

*From* [2.2](lessons/02-02-reactivity-over-life-reload-management.md) *and* [2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md)

### Burnup economics

$$E = 24\,\eta\,B \quad \left[\tfrac{\text{MWh}_e}{\text{kg}}\right], \qquad \phi \approx 1 + r\,\bar t, \qquad c_\text{fuel} = \frac{\phi\,C_\text{fe}}{24\,\eta\,B}$$

At $\eta = 0.33$, $E \approx 7.92\,B$ electrical MWh per kilogram. Typical
answers: a $2{,}000$–$2{,}500$ dollars per kilogram batch at $45$–$50$ GWd/tHM
gives $5$–$7$ dollars per MWh before carrying charges, and carrying charges add
$20$–$30\%$. The optimum burnup sits near $45$ GWd/tHM at typical prices, and
moves up when SWU gets cheap or uranium dear.

*From* [2.4](lessons/02-04-in-core-fuel-cycle-economics.md)

### Way–Wigner decay heat

$$\frac{P(t)}{P_0} = 0.066\left[\,t^{-0.2} - (t+t_0)^{-0.2}\,\right] \qquad (t,\ t_0 \text{ in seconds})$$

with $t$ the cooling time and $t_0$ the time the reactor ran at $P_0$. For a
long run the second term is negligible and $P/P_0 \approx 0.066\,t^{-0.2}$.

| Cooling time | $P/P_0$ | 3000 MWth core |
|---|---|---|
| shutdown | $\approx 6.6\%$ | $\approx 200$ MW |
| 1 hour | $\approx 1.1\%$ | $\approx 32$ MW |
| 1 day | $\approx 0.47\%$ | $\approx 14$ MW |
| 1 year | $\approx 0.027\%$ | $\approx 0.8$ MW |
| 5 years | $\approx 5.4\times10^{-5}$ | $\approx 0.16$ MW |

(Fractions above are for $t_0 \approx 1$ yr.) $t^{-0.2}$ is brutally slow: a
factor of $8800$ in time buys only about a factor of 40 in heat. For licensing,
use the tabulated, isotope-resolved **ANS-5.1** standard, not this.

*From* [3.1](lessons/03-01-decay-heat-source-term.md) *and* [3.3](lessons/03-03-waste-classification-interim-storage.md)

### Storage thermal limits

Per-assembly heat is the core figure divided by the assembly count, times the
decay-heat fraction — for a 3000 MWth, 193-assembly core that is $15.5$ MW of
full-power duty per assembly.

| Cooling time | Per-assembly heat |
|---|---|
| at shutdown | $\approx 1$ MW |
| 1 year | $\approx 4.2$ kW |
| 5 years | $\approx 0.84$ kW |

A passively cooled dry cask sheds roughly $1$ kW per assembly (typical casks
hold 24–37 assemblies at $26$–$36$ kW total) while keeping cladding under about
$400\,^\circ\text{C}$ — hence roughly **five years** of pool cooling as the
practical minimum, and longer for high-burnup fuel.

*From* [3.1](lessons/03-01-decay-heat-source-term.md) *and* [3.3](lessons/03-03-waste-classification-interim-storage.md)

### Waste classification thresholds

| Class | Activity | Heat | Longevity | Route |
|---|---|---|---|---|
| LLW | low | $q \approx 0$ | mostly short-lived | near-surface trench |
| ILW | high (needs shielding) | $q \approx 0$ | often long-lived | geological / intermediate depth |
| HLW | very high | $q \gtrsim 2$ kW/m³ | long-lived | deep geological repository |

The ILW/HLW discriminator is **heat**, not raw activity. LLW is about $90\%$ of
waste volume and a negligible share of the hazard.

*From* [3.3](lessons/03-03-waste-classification-interim-storage.md)

### Decay data the course leans on

| Nuclide | Half-life | Why it matters |
|---|---|---|
| $\ce{^{137}Cs}$, $\ce{^{90}Sr}$ | $\approx 30$ yr | dominate activity, heat, and hazard for the first $\sim 300$ yr |
| $\ce{^{129}I}$ | $1.6\times10^{7}$ yr | negligible activity, but mobile and effectively eternal — repository dose |
| $\ce{^{239}Pu}$ | $24{,}100$ yr | the long-term radiotoxicity tail |
| $\ce{^{241}Pu}$ | $\approx 14.3$ yr | decays to $\ce{^{241}Am}$, so a separated vector degrades on the shelf |
| $\ce{^{230}Th}$ | $75{,}000$ yr | feeds $\ce{^{226}Ra}$ and radon in mill tailings |
| $\ce{^{232}U}$ | $\approx 69$ yr | rides with $\ce{^{233}U}$; its chain gives the hard gamma |
| $\ce{^{228}Th}$ | $\approx 1.9$ yr | the ingrowth clock for the $\ce{^{208}Tl}$ 2.6 MeV gamma |
| $\ce{^{233}Pa}$ | $27$ d | the thorium cycle's neutron-eating bottleneck |
| $\ce{^{239}U}$ / $\ce{^{239}Np}$ | $\approx 23$ min / $\approx 2.4$ d | the two beta steps from $\ce{^{238}U}$ to $\ce{^{239}Pu}$ |
| $\ce{^{233}Th}$ | $\approx 22$ min | first beta step from $\ce{^{232}Th}$ |

Ingestion dose coefficients (Sv per Bq): $\ce{^{239}Pu} \approx 2.5\times10^{-7}$,
$\ce{^{241}Am} \approx 2.0\times10^{-7}$, $\ce{^{90}Sr} \approx 2.8\times10^{-8}$,
$\ce{^{137}Cs} \approx 1.3\times10^{-8}$ — alpha emitters run about $10\times$
the betas, which is why modest-activity actinides own the tail.

Survivor fraction after time $t$: $N(t)/N_0 = 2^{-t/T_{1/2}}$, and the number of
halvings needed to drop a hazard by a factor $X$ is $\log_2 X$.

*From* [1.2](lessons/01-02-mining-milling.md), [3.2](lessons/03-02-spent-fuel-isotopics-radiotoxicity.md) *and* [4.2](lessons/04-02-thorium-cycle.md)

### Breeding chains

$$\ce{^{238}U ->[(n,\gamma)] ^{239}U ->[\beta^-] ^{239}Np ->[\beta^-] ^{239}Pu}$$

$$\ce{^{232}Th ->[(n,\gamma)] ^{233}Th ->[\beta^-] ^{233}Pa ->[\beta^-] ^{233}U}$$

Thermal capture ladder that degrades a plutonium vector:

$$\ce{^{239}Pu ->[(n,\gamma)] ^{240}Pu ->[(n,\gamma)] ^{241}Pu ->[(n,\gamma)] ^{242}Pu}, \qquad \ce{^{241}Pu ->[\beta^-] ^{241}Am}$$

*From* [2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md), [3.5](lessons/03-05-recycling-mox-plutonium-balance.md), [4.1](lessons/04-01-fast-reactors-breeding.md) *and* [4.2](lessons/04-02-thorium-cycle.md)

### Spent-fuel and recycling inventory

Representative LWR discharge, per tonne of heavy metal: **95%** uranium (still
around $0.8\%$ $\ce{^{235}U}$ at $50$ GWd/tHM — above natural), **1%**
plutonium, **4%** fission products plus minor actinides. That 4% carries
essentially all the hazard, and PUREX splits the tonne into exactly those three
streams.

$$\text{tonnes of spent UOX per tonne of MOX} = \frac{w_\text{Pu}}{\text{Pu fraction in spent UOX}}$$

At $w_\text{Pu} = 8\%$ against $1.0\%$ Pu in spent fuel that is $8$ tonnes of
UOX per tonne of MOX — the industry's 7-to-8-to-1 rule. One thermal MOX pass
loads $80$ kg Pu per tHM and discharges about $55$ kg,
destroying only $\sim 30\%$ and degrading the rest.

*From* [3.4](lessons/03-04-reprocessing-purex-separations.md) *and* [3.5](lessons/03-05-recycling-mox-plutonium-balance.md)

### Repository thermal spacing

Steady radial conduction from a canister treated as a small sphere, and
superposition over neighbors:

$$\Delta T(r) = \frac{Q}{4\pi k\,r}, \qquad \Delta T_\text{self} = \frac{Q}{4\pi k\,a}$$

$$\Delta T_\text{self} + N\,\frac{Q}{4\pi k\,s} \le \Delta T_\text{max} = T_\text{limit} - T_\text{rock} \qquad\Longrightarrow\qquad \boxed{\,s \ge \frac{N\,Q}{4\pi k\,(\Delta T_\text{max} - \Delta T_\text{self})}\,}$$

Check $\Delta T_\text{self}$ **first**: if self-heating alone busts the budget,
no spacing can save you and $Q$ itself must come down (longer surface cooling,
less fuel per canister). Near the limit the spacing is hypersensitive — halving
$Q$ can cut the required pitch more than tenfold. Typical granite design:
$Q \approx 1$ kW, $k \approx 2.5$ W·m⁻¹K⁻¹, buffer limit $\approx 100\,^\circ\text{C}$,
giving a pitch of about 6 m.

*From* [3.6](lessons/03-06-geological-disposal-repository.md)

### Breeding arithmetic

$$\mathrm{BR} = \eta - 1 - L, \qquad \text{breeding requires } \eta > 2 + L$$

$$\dot M_\text{net} = (\mathrm{BR}-1)\,\dot M_\text{burn}, \qquad t_D = \frac{M_0}{\dot M_\text{net}}, \qquad t_D^\text{compound} = t_D \ln 2 \approx 0.69\,t_D$$

| Fissile nuclide and spectrum | $\eta$ | Breeds against $L \approx 0.2$–$0.3$? |
|---|---|---|
| $\ce{^{235}U}$, thermal | $\approx 2.07$ | no |
| $\ce{^{239}Pu}$, thermal | $\approx 2.10$–$2.11$ | no |
| $\ce{^{233}U}$, thermal | $\approx 2.29$ | **yes** — thorium's whole selling point |
| $\ce{^{239}Pu}$, fast | $\approx 2.45$ | **yes** — the U–Pu breeder |

Rule of thumb for burn rate: complete fission of about 1 g of fissile yields
$\approx 1$ MW·day of heat.

*From* [4.1](lessons/04-01-fast-reactors-breeding.md) *and* [4.2](lessons/04-02-thorium-cycle.md)

### Safeguards accounting

$$\text{SQ}_\text{Pu} \approx 8\ \text{kg Pu}, \qquad \text{SQ}_\text{HEU} \approx 25\ \text{kg of }\ce{^{235}U}\ (\text{in U enriched} \ge 20\%)$$

$$\sigma_\text{random} = \varepsilon_r\,m\,\sqrt{n} = \varepsilon_r\,\frac{M}{\sqrt{n}}, \qquad \sigma_\text{systematic} = \varepsilon_s\,M, \qquad \sigma_\text{MUF} = \sqrt{\sigma_\text{random}^2 + \sigma_\text{systematic}^2}$$

Alarm when $\lvert\text{MUF}\rvert > k\,\sigma_\text{MUF}$ with $k \approx 3$.
Random error averages down like $1/\sqrt{n}$ — *more, smaller* accounting
batches improve sensitivity — but a systematic bias scales with the **full**
throughput and sets a hard detection floor, which must stay well under one SQ.
Scale check: a 1 GWe reactor discharges roughly 200–230 kg of plutonium per year,
about 25–29 SQ; unirradiated plutonium carries a timeliness goal of about one
month, irradiated fuel months.

*From* [4.3](lessons/04-03-nonproliferation-safeguards-security.md)

### LCOE stack

$$\boxed{\;\text{LCOE} = \underbrace{\frac{\text{FCR}\cdot\text{OCC}}{8760\cdot\text{CF}}}_{\text{capital}} + \underbrace{\text{O\&M}}_{\text{fixed operations}} + \underbrace{c_\text{fuel}}_{\text{fuel}}\;}$$

Units: $\text{FCR}\cdot\text{OCC}$ is dollars per kW-yr; dividing by
$8760\cdot\text{CF}$ hours gives dollars per kWh; multiply by 1000 for dollars
per MWh. Reference plant (6,000 dollars per kW, FCR $0.10$, CF $90\%$, 15 dollars
per MWh O&M, 7 dollars per MWh fuel): capital $76$, total $\approx 98$ dollars
per MWh, capital share $\approx 78\%$. Halving the fuel cost saves about 3.5
dollars per MWh; a two-point rise in FCR costs about 15.

*From* [4.4](lessons/04-04-nuclear-economics-lcoe.md)

### Constants and unit conversions

| Quantity | Value |
|---|---|
| natural $\ce{^{235}U}$ abundance | $x_f = 0.711\%$ |
| energy per fission | $E_f \approx 200$ MeV $= 3.2\times10^{-11}$ J |
| uranium fraction of $\ce{U3O8}$ | $f_U = 0.848$ |
| 1 year | $3.156\times10^{7}$ s |
| 1 GWd | $24$ GWh $= 24{,}000$ MWh $= 8.64\times10^{13}$ J |
| burnup units | $1$ GWd/tHM $=1$ MWd/kgU |
| fissile rule of thumb | $1$ GWd/tHM $\approx$ 1 kg fissile fissioned per tonne HM |
| Avogadro's number | $N_A = 6.022\times10^{23}$ mol⁻¹ |
| gas constant | $R = 8.314$ J·mol⁻¹K⁻¹ |
| 1 barn | $10^{-24}$ cm² |
| ore grade | $1\%\ \text{U} = 10{,}000$ ppm |
| reactivity | $1$ pcm $= 10^{-5}$; $1\%\,\Delta k = 1000$ pcm |
| coal energy density (for comparisons) | $\approx 29$ MJ/kg |
| once-through energy from natural uranium | $\approx 580$ GJ/kg, about 20 tonnes of coal |

*From* [1.1](lessons/01-01-fuel-cycle-map-uranium-resources.md), [2.1](lessons/02-01-fuel-fabrication-assembly-design.md), [2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md) *and* [2.4](lessons/02-04-in-core-fuel-cycle-economics.md)

## Assumed, not taught here

This is a Tier 2 course sitting on
[intro-nuclear-engineering](../intro-nuclear-engineering/reference.md). It uses
the following without deriving them.

| Fact | Where it's taught |
|---|---|
| $\approx 200$ MeV per fission and the $0.711\%$ natural abundance | [intro-nuclear-engineering 3.1](../intro-nuclear-engineering/lessons/03-01-fission-process-energy.md) |
| Fission-product yields, including the Xe/Kr noble-gas share | [intro-nuclear-engineering 3.2](../intro-nuclear-engineering/lessons/03-02-fission-products-neutron-yield.md) |
| Decay law $A = \lambda N$, half-life, mean life | [intro-nuclear-engineering 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) |
| Decay chains, ingrowth, and secular equilibrium (the tailings radon story, $\ce{^{241}Pu -> ^{241}Am}$) | [intro-nuclear-engineering 1.4](../intro-nuclear-engineering/lessons/01-04-decay-chains-equilibrium.md) |
| Cross-sections, flux, and reaction rate $\sigma\phi N$ (used raw in the Pa-233 race) | [intro-nuclear-engineering 2.1](../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md) |
| Moderation, thermal vs. fast spectra, water-to-fuel ratio | [intro-nuclear-engineering 2.4](../intro-nuclear-engineering/lessons/02-04-moderation-slowing-neutrons.md) |
| $k_\text{eff}$, the four-factor formula, and $\eta$ as a reproduction factor | [intro-nuclear-engineering 3.4](../intro-nuclear-engineering/lessons/03-04-criticality-four-factor-formula.md) |
| Reactor types and where each fuel form is used | [intro-nuclear-engineering 4.5](../intro-nuclear-engineering/lessons/04-05-reactor-types-nuclear-landscape.md) |
| Moderator temperature and void coefficients (why heavy boration is unsafe) | [reactor-physics 5.2](../reactor-physics/lessons/05-02-doppler-moderator-void-coefficients.md) |
| Xenon and samarium poisoning | [reactor-physics 5.3](../reactor-physics/lessons/05-03-xenon-135-iodine-pit.md), [5.4](../reactor-physics/lessons/05-04-xenon-oscillations-samarium-149.md) |
| Control-rod worth, shim operation, and the mechanics of holddown | [reactor-physics 5.6](../reactor-physics/lessons/05-06-reactor-control-operation.md) |
| Burnup, conversion and breeding as neutronics rather than bookkeeping | [reactor-physics 5.5](../reactor-physics/lessons/05-05-fuel-burnup-conversion-breeding.md) |
| Conduction through pellet, gap, and cladding; the peak-rod thermal margin | [reactor-thermal-hydraulics 1.2](../reactor-thermal-hydraulics/lessons/01-02-conduction-heat-source-fuel-pin.md), [1.5](../reactor-thermal-hydraulics/lessons/01-05-hot-channel-hot-spot-factors.md) |
| Decay-heat removal as a transient cooling problem | [reactor-thermal-hydraulics 4.5](../reactor-thermal-hydraulics/lessons/04-05-decay-heat-after-shutdown.md) |
| Cladding embrittlement, corrosion, and hydriding — the burnup wall | [nuclear-materials 4.1](../nuclear-materials/lessons/04-01-zirconium-alloys-cladding.md), [2.6](../nuclear-materials/lessons/02-06-embrittlement-dbtt-shift.md) |
| Fission-gas release and pellet swelling versus burnup | [nuclear-materials 3.4](../nuclear-materials/lessons/03-04-fission-gas-release-swelling.md) |
| Gamma attenuation and buildup (pool depth, cask overpack, hot cells for $\ce{^{233}U}$) | [radiation-detection-shielding 4.1](../radiation-detection-shielding/lessons/04-01-exponential-attenuation-hvl.md), [4.2](../radiation-detection-shielding/lessons/04-02-buildup-factors.md) |
| Committed dose and dose coefficients (the $e_i$ in radiotoxicity) | [radiation-detection-shielding 3.2](../radiation-detection-shielding/lessons/03-02-equivalent-effective-dose.md) |
| Random vs. systematic error and propagation in quadrature | [radiation-detection-shielding 2.2](../radiation-detection-shielding/lessons/02-02-error-propagation-dead-time.md) |
| Hypothesis testing, the normal distribution, and $k\sigma$ thresholds (MUF alarms) | [prob-stat-refresher 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md), [3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) |
| Discounting and present value (carrying charges, FCR, LCOE) | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md), [micro-refresher 2.1](../micro-refresher/lessons/02-01-expected-utility.md) |
| Moles, molar mass, and the ideal gas law (plenum pressure, gas inventories) | [general-chemistry 2.1](../general-chemistry/lessons/02-01-mole-molar-mass-formulas.md), [3.1](../general-chemistry/lessons/03-01-gases-ideal-gas-law-kinetic-theory.md) |
| Thermal efficiency of a steam cycle (the $\eta \approx 0.33$ used everywhere) | [engineering-thermodynamics 4.1](../engineering-thermodynamics/lessons/04-01-rankine-vapor-power-cycle.md) |

## Pitfalls

### Resources and mining

- "Reserves" is not a geological constant — it is uranium recoverable *below a price*, so it grows when the price does. *([1.1](lessons/01-01-fuel-cycle-map-uranium-resources.md))*
- The fissile fraction is tiny: $0.711\%$, less than one atom in a hundred. Everything from enrichment onward exists to nudge that up a few percent. *([1.1](lessons/01-01-fuel-cycle-map-uranium-resources.md))*
- A tonne of yellowcake is not a tonne of uranium — $\ce{U3O8}$ is $84.8\%$ uranium, so skipping $f_U$ overstates your uranium by about $18\%$. *([1.2](lessons/01-02-mining-milling.md))*
- Tailings are not "spent." Milling removes only the uranium; $\ce{^{230}Th}$ and $\ce{^{226}Ra}$ stay behind and keep making radon for millennia. *([1.2](lessons/01-02-mining-milling.md))*
- In-situ leach moves the waste, it doesn't erase it: no tailings pile, but a contaminated aquifer that is genuinely hard to restore. *([1.2](lessons/01-02-mining-milling.md))*

### Enrichment

- Enrichment is not chemistry. The isotopes are chemically identical, which is exactly why yellowcake must first become gaseous $\ce{UF6}$. *([1.3](lessons/01-03-conversion-enrichment-mass-balance.md))*
- Most of the feed leaves as **tails**, not product — roughly $85$–$90\%$ of it. You concentrate a little into a small barrel and discard the bulk. *([1.3](lessons/01-03-conversion-enrichment-mass-balance.md))*
- Feed and SWU move in *opposite* directions. There is no single "amount of enrichment": a leaner tails assay cuts feed and raises SWU, and you pick where on that curve to sit. *([1.3](lessons/01-03-conversion-enrichment-mass-balance.md), [1.4](lessons/01-04-centrifuge-separative-work.md))*
- The $T\,V(x_w)$ term is not optional — depleting the waste is unmixing too, and it is usually the largest of the three terms. *([1.4](lessons/01-04-centrifuge-separative-work.md))*
- A SWU is not an amount of $\ce{UF6}$ and not a kilowatt-hour; it is a state-function difference in value, which is why switching diffusion to centrifuges changed the energy bill and not the SWU count. *([1.4](lessons/01-04-centrifuge-separative-work.md))*
- Stages compound *geometrically* in the ratio $x/(1-x)$, not linearly in assay — the reason a cascade works, and the reason HEU is only a few dozen stages past LEU. *([1.5](lessons/01-05-enrichment-cascade-front-end-cost.md))*
- A lower tails assay is not automatically "greener." It is an economic optimum set by the uranium-to-SWU price ratio, and it drifts whenever either price moves. *([1.3](lessons/01-03-conversion-enrichment-mass-balance.md), [1.5](lessons/01-05-enrichment-cascade-front-end-cost.md))*
- Leave **fabrication out** of the tails-assay comparison: it scales with product, which is fixed, so it cancels. *([1.5](lessons/01-05-enrichment-cascade-front-end-cost.md))*

### In-core

- Pellet radius does **not** appear in $T_\text{center}-T_\text{surface} = q'/4\pi k_f$; rods are thin for heat *removal* and neutronics, not for the conduction drop. *([2.1](lessons/02-01-fuel-fabrication-assembly-design.md))*
- The core is limited by its hottest rod at its hottest axial spot, never by the average — design against the peak via peaking factors. *([2.1](lessons/02-01-fuel-fabrication-assembly-design.md))*
- Fission gas grows **faster than linearly** with burnup, because the release fraction climbs on top of there simply being more fissions. Plenum sizing, not the pellet, often sets the burnup ceiling. *([2.1](lessons/02-01-fuel-fabrication-assembly-design.md))*
- Cladding's first job is to be a sealed fission-product barrier that neutrons barely see — zirconium, not steel. Strength is secondary. *([2.1](lessons/02-01-fuel-fabrication-assembly-design.md))*
- Excess reactivity is not waste or danger — it is the fuel you are going to burn. A core with none couldn't run a cycle. *([2.2](lessons/02-02-reactivity-over-life-reload-management.md))*
- "Just use more soluble boron" is a safety error: heavy boration pushes the moderator temperature coefficient toward positive, which is why burnable poisons exist. *([2.2](lessons/02-02-reactivity-over-life-reload-management.md))*
- Discharge burnup $\neq$ average core burnup. The average at EOC is $B_1$ for every $n$; utilities are paid on the discharge number. *([2.2](lessons/02-02-reactivity-over-life-reload-management.md), [2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md))*
- More batches never pays more than double: $B_n \to 2B_1$, and the marginal gain falls like $1/[n(n+2)]$, so 3–4 batches is the practical stop. *([2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md))*
- Discharged fuel has not "run out of uranium" — it still holds about $0.8\%$ $\ce{^{235}U}$ and $1\%$ plutonium. It is pulled because its *reactivity* went negative, which is the entire premise of reprocessing. *([2.3](lessons/02-03-burnup-depletion-linear-reactivity-model.md))*

### Money

- Higher burnup saves money only up to the optimum; past it the extra enrichment costs more than the extra energy is worth. There is a *right* burnup, not a maximum one. *([2.4](lessons/02-04-in-core-fuel-cycle-economics.md))*
- Never divide batch cost by energy without the carrying charge — ignoring the time value of money tied up for years understates fuel cost by $20$–$30\%$. *([2.4](lessons/02-04-in-core-fuel-cycle-economics.md))*
- Fuel is not the lever. It is under $10\%$ of the nuclear busbar price, so halving it moves LCOE a few percent while two points of discount rate move it four times as much. *([2.4](lessons/02-04-in-core-fuel-cycle-economics.md), [4.4](lessons/04-04-nuclear-economics-lcoe.md))*
- A low overnight cost does not guarantee cheap power — a long build accrues interest and a high discount rate raises the annual charge, so FCR can dominate the sticker price. *([4.4](lessons/04-04-nuclear-economics-lcoe.md))*
- Capacity factor is not an operational footnote: it divides the *largest* term, so $90\% \to 75\%$ raises the capital component by $20\%$. Capital-heavy plants must run flat-out. *([4.4](lessons/04-04-nuclear-economics-lcoe.md))*

### Back end: heat, waste, disposal

- Shutdown does not stop the heat. Decay heat is $\sim 7\%$ of full power at scram and still kilowatts per assembly years later; $t^{-0.2}$ is a brutally slow decline. *([3.1](lessons/03-01-decay-heat-source-term.md), [3.3](lessons/03-03-waste-classification-interim-storage.md))*
- Way–Wigner is a back-of-envelope shape, unreliable beyond about a year — and the two lessons disagree on which way it errs there ([3.1](lessons/03-01-decay-heat-source-term.md) calls it an underestimate for ignoring actinide decay, [3.3](lessons/03-03-waste-classification-interim-storage.md) calls it a conservative overestimate). Either way, cask and repository heat loads come from **ANS-5.1**, not from this correlation. *([3.1](lessons/03-01-decay-heat-source-term.md), [3.3](lessons/03-03-waste-classification-interim-storage.md))*
- "Highest activity" is not "highest hazard" — radiotoxicity is activity times a dose coefficient, and alpha-emitting actinides carry coefficients about $10\times$ the fission products'. *([3.2](lessons/03-02-spent-fuel-isotopics-radiotoxicity.md))*
- The actinide curve is not just plutonium: $\ce{^{241}Am}$ *grows in* over the first century, so the near-term actinide hazard can rise before it falls. *([3.2](lessons/03-02-spent-fuel-isotopics-radiotoxicity.md))*
- "Low-level" means low hazard, not small quantity — LLW is most of the volume and almost none of the activity. Never size the disposal problem by tonnage. *([3.3](lessons/03-03-waste-classification-interim-storage.md))*
- Activity alone does not separate ILW from HLW; **heat** does. Cladding hulls are hot in becquerels and cold in watts. *([3.3](lessons/03-03-waste-classification-interim-storage.md))*
- A repository is sized by heat, not volume — all the world's HLW would fit in a large building; the meters of empty rock between canisters are pure thermal management. *([3.6](lessons/03-06-geological-disposal-repository.md))*
- Check self-heating before spacing: if $\Delta T_\text{self}$ alone busts the budget, no pitch fixes it — you must lower $Q$. *([3.6](lessons/03-06-geological-disposal-repository.md))*
- The safety case is many imperfect barriers plus geology, not one flawless barrier and not human institutions standing guard for $10^6$ years. Retrievability and passive permanence are compatible. *([3.6](lessons/03-06-geological-disposal-repository.md))*

### Recycling, breeding and proliferation

- Reprocessing does not remove the heat. $\ce{^{137}Cs}$ and $\ce{^{90}Sr}$ go straight into the raffinate; what shrinks is the very-long-term actinide tail, not the near-term thermal load. *([3.2](lessons/03-02-spent-fuel-isotopics-radiotoxicity.md), [3.4](lessons/03-04-reprocessing-purex-separations.md))*
- TBP is oxidation-state selective, not element selective: it takes $\ce{UO2^2+}$ and $\ce{Pu^4+}$ but not $\ce{Pu^3+}$ — and that valency contrast *is* the partitioning lever. *([3.4](lessons/03-04-reprocessing-purex-separations.md))*
- MOX does not eliminate plutonium: one thermal pass destroys about $30\%$ and degrades the rest into a vector only a fast reactor can use. *([3.5](lessons/03-05-recycling-mox-plutonium-balance.md))*
- Separated plutonium is not stable in the jar — $\ce{^{241}Pu}$ decays to $\ce{^{241}Am}$ on a $\sim 14$-year clock, so aged material loses fissile worth and gains a poison. *([3.5](lessons/03-05-recycling-mox-plutonium-balance.md))*
- $\eta > 2$ is not enough to breed: you need $\eta > 2 + L$, so with $L \approx 0.25$ only the fast spectrum (or thermal $\ce{^{233}U}$) clears the bar. The spectrum, not just the isotope, decides. *([4.1](lessons/04-01-fast-reactors-breeding.md), [4.2](lessons/04-02-thorium-cycle.md))*
- A breeder doesn't make energy from nothing — it upgrades fertile $\ce{^{238}U}$ into fissile fuel. The win is resource utilization (about $60\times$), not free energy. *([4.1](lessons/04-01-fast-reactors-breeding.md))*
- Doubling times are decades, not years, because the surplus is a thin slice of a huge inventory — shrinking $M_0$ helps as much as raising BR. *([4.1](lessons/04-01-fast-reactors-breeding.md))*
- Thorium is not a fuel you can just load: $\ce{^{232}Th}$ is $100\%$ fertile, so every thorium reactor needs a fissile starter. *([4.2](lessons/04-02-thorium-cycle.md))*
- The $\ce{^{232}U}$ gamma is a cost-raiser, not a barrier — it takes 1–2 years to grow in, and $\ce{^{233}U}$ carries the same 8 kg significant quantity as plutonium. *([4.2](lessons/04-02-thorium-cycle.md), [4.3](lessons/04-03-nonproliferation-safeguards-security.md))*
- Reactor-grade plutonium is weapons-*usable*: high $\ce{^{240}Pu}$ makes a reliable device harder, not impossible, which is why the IAEA assigns one 8 kg SQ to any vector. *([3.4](lessons/03-04-reprocessing-purex-separations.md), [4.3](lessons/04-03-nonproliferation-safeguards-security.md))*
- Spent fuel is self-protecting; the risk is created by the step that *removes* that protection. Nonzero MUF is not proof of theft — detection is statistics, and a systematic bias can hide several SQ below the noise. *([4.3](lessons/04-03-nonproliferation-safeguards-security.md))*
