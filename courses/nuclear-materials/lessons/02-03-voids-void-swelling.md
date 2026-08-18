# Nuclear Materials · Lesson 2.3: Voids and void swelling

> ⏱ ~15 min · Module 2: Property changes under irradiation · Builds on: [2.2 Dislocation loops and bias](02-02-dislocation-loops-bias.md), [2.1 Defect migration and radiation-enhanced diffusion](02-01-defect-migration-radiation-enhanced-diffusion.md) · Unlocks: [4.2 Steel selection by swelling](04-02-steels-austenitic-ferritic-martensitic.md)

## Why this matters

Here is a fact that sounds impossible: put a stainless-steel part in a fast reactor, take it out a few years later, and it is *bigger* — not corroded, not deformed by any load, just larger, by several percent or more in volume, with no atoms added or removed. In the 1960s this **void swelling** blindsided reactor designers; fuel-assembly ducts bowed and jammed, and it remains a first-order life limit for any high-dose component. This lesson explains where the empty space comes from, why it only happens in a specific temperature window, and why swelling is the single number that most sharply divides good high-dose alloys from bad ones — the decision you'll make in [4.2](04-02-steels-austenitic-ferritic-martensitic.md).

## The idea

In [2.2](02-02-dislocation-loops-bias.md) we found the engine: dislocations are *biased* sinks — they soak up interstitials a little more eagerly than vacancies, because a crammed-in interstitial strains the lattice harder and is pulled toward a dislocation more strongly. Radiation makes vacancies and interstitials in exactly equal numbers, so if dislocations skim off the interstitial excess, there is a matching **leftover of vacancies** with nowhere balanced to go. That vacancy surplus is a supersaturation — more vacancies wandering the lattice than equilibrium would ever allow.

What does a crowd of surplus vacancies do? It clumps. A three-dimensional cluster of vacancies is a **void** — a tiny bubble of *nothing*, a hole in the crystal. Grow enough of them and the solid literally takes up more room: same atoms, now arranged around a foam of holes. That is swelling.

But there's a catch that makes voids finicky. A naked cluster of a few vacancies would rather collapse flat into a vacancy *loop* (lower energy) than stay a round hole. To keep it open you usually need a few atoms of **gas** trapped inside, pushing outward like air in a balloon — and reactors conveniently manufacture that gas: fast neutrons hit nuclei and kick out helium via $(n,\alpha)$ reactions. So swelling needs three things at once: a vacancy supersaturation (the bias), a temperature where vacancies can actually move, and a pinch of gas to stabilize the newborn voids. Take away any one and the metal stays dense.

## The formal version

**Void nucleation.** A void becomes stable once it is big enough that adding vacancies lowers its free energy faster than surface tension resists. A pure-vacancy embryo faces an energy barrier and tends to collapse into a vacancy loop; a few atoms of insoluble gas (helium) inside provide an internal pressure that props the embryo open and **slashes the nucleation barrier**. *In words: the bias supplies the raw vacancies, but helium is the seed crystal that lets them condense into holes instead of pancakes.*

**Void growth.** Once nucleated, a void grows by the **net vacancy flux** arriving at it. Vacancies flow in (driving growth); interstitials also arrive and each one that reaches the void *fills* a vacancy site, shrinking it. The void wins only because the bias has already diverted some interstitials to dislocations, so the void sees more vacancies than interstitials. The radius grows as

$$\frac{dr}{dt} = \frac{\Omega}{r}\Big(D_v C_v - D_i C_i - D_v C_v^{\text{eq}}(r)\Big),$$

where $r$ is void radius (m), $\Omega$ is the atomic volume (m³), $D_v, D_i$ are vacancy/interstitial diffusivities (m²/s), and $C_v, C_i$ are their concentrations (dimensionless site fractions). *In words: the void grows at a rate set by how much the incoming vacancy current outruns the incoming interstitial current* — and the last term, $C_v^{\text{eq}}(r)$, is the thermal vacancies the void itself boils back off, which matters at high temperature (below).

**Swelling.** With a void number density $N$ (voids per m³) and mean radius $r$, the fractional volume increase is the total void volume per unit volume:

$$\boxed{\ \frac{\Delta V}{V} = \frac{4}{3}\pi r^3 N\ }$$

*In words: swelling is just how much of the solid is now hole* — sum the volumes of all the little spheres. In the steady regime, past incubation, austenitic stainless steels swell at roughly

$$\frac{d(\Delta V/V)}{d(\text{dpa})} \approx 1\%\ \text{per dpa},$$

a rule of thumb worth memorizing: near peak conditions, every displacement-per-atom of dose buys about a percent of swelling.

**The temperature window, $\approx 0.3$–$0.55\,T_m$** (with $T_m$ the melting point in kelvin). Swelling is bell-shaped in temperature, peaking near $\sim 0.4\,T_m$, because the two edges fail for opposite reasons:

- **Too cold** ($< 0.3\,T_m$): vacancies are nearly immobile — $D_v$ is thermally activated, $D_v \propto e^{-E_m^v/k_BT}$, so it collapses at low $T$. Vacancies can't diffuse to voids, so nothing grows. Defects just recombine or sit.
- **Too hot** ($> 0.55\,T_m$): the equilibrium vacancy concentration $C_v^{\text{eq}} \propto e^{-E_f^v/k_BT}$ becomes *large*, and voids emit vacancies thermally (that $C_v^{\text{eq}}(r)$ term). The radiation-driven supersaturation $C_v - C_v^{\text{eq}}$ is washed out — the excess is a drop in an ocean of thermal vacancies — so there is no net driving force.

*In words: cold freezes the vacancies in place; hot drowns the surplus in thermal vacancies. Only in between can a real supersaturation both exist and move.*

**Incubation dose.** Swelling does not start immediately. For the first **tens of dpa** the metal absorbs damage almost dimensionally quietly while voids nucleate and the dislocation network builds up; then swelling accelerates into the roughly linear $\sim 1\%$/dpa regime. This lag is the **incubation dose**, and pushing it to higher dose is exactly how you engineer a swelling-resistant alloy.

## Picture

![Two panels: left, swelling versus temperature as a bell curve with the 0.3 to 0.55 Tm window shaded and the peak near 0.4 Tm marked; right, swelling versus dose showing a flat incubation region for tens of dpa then a linear rise at about one percent per dpa](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — compute the swelling).** A neutron-irradiated steel develops a void population of number density $N = 10^{21}\ \mathrm{m^{-3}}$ with mean radius $r = 10\ \mathrm{nm} = 10^{-8}\ \mathrm{m}$. How much has it swollen?

$$\frac{\Delta V}{V} = \frac{4}{3}\pi r^3 N = \frac{4}{3}\pi\,(10^{-8}\ \mathrm{m})^3\,(10^{21}\ \mathrm{m^{-3}}) = \frac{4}{3}\pi\,(10^{-24})(10^{21}) = 4.19\times10^{-3}.$$

That is $0.42\%$ — the part is now nearly half a percent larger by volume. *Check.* Units: $\mathrm{m^3}\cdot\mathrm{m^{-3}}$ is dimensionless, as swelling must be. Sanity: the voids occupy $0.42\%$ of the volume, a fraction, not more than one — physically it's a lightly foamed solid, exactly the regime real components live in before they're pulled from service.

**Example 2 (why you'd care — read the two edges of the window).** *Why does swelling die out both below $0.3\,T_m$ and above $0.55\,T_m$?* Two different failures of the same driving force, the vacancy supersaturation $C_v - C_v^{\text{eq}}$:

- At the **cold** edge, the supersaturation is huge (few thermal vacancies) but useless: $D_v \propto e^{-E_m^v/k_BT}$ is so small that a vacancy can't hop to a void within the component's life. The current $D_v C_v$ in the growth law goes to zero through $D_v$. No transport, no growth.
- At the **hot** edge, $D_v$ is large — vacancies move freely — but now $C_v^{\text{eq}} \propto e^{-E_f^v/k_BT}$ has climbed until it rivals $C_v$ itself. The bracket $C_v - C_v^{\text{eq}}$ collapses toward zero; the void emits vacancies about as fast as it collects them. No net driving force, no growth.

Peak swelling sits in the middle, near $0.4\,T_m$, where vacancies are mobile *and* the thermal background is still low enough that the radiation surplus dominates. This is why swelling data is always plotted against $T/T_m$, not raw kelvin — the window scales with the melting point.

## Watch out

- **You might think voids fill up with atoms — they're empty holes, right?** Actually a void is a vacancy cluster, but it usually isn't a perfect vacuum: a few atoms of **helium** (from $(n,\alpha)$ transmutation) or other gas sit inside and are essential to its birth. A truly gas-free vacancy cluster tends to collapse into a flat vacancy loop rather than a 3-D void — no gas, often no swelling. (When the cavity is gas-*pressurized* enough to grow on gas alone, it's called a bubble; the swelling-driving cavities are gas-*stabilized* voids growing on the vacancy surplus.)
- **You might think interstitials are irrelevant to voids since voids are made of vacancies.** They're not — interstitials arrive at voids too, and each one annihilates a vacancy, shrinking the void. Swelling exists *only* because the [dislocation bias](02-02-dislocation-loops-bias.md) skims interstitials off elsewhere first. Remove the bias and equal fluxes cancel: no net vacancy accumulation, no voids. Swelling is a bias phenomenon, not a vacancy-only phenomenon.
- **You might think more dose always means proportionally more swelling from the start.** Not at first — there's an **incubation dose** of tens of dpa where almost nothing happens (voids are still nucleating), *then* the roughly linear $\sim1\%$/dpa regime kicks in. Extrapolating the linear rate back through zero dose badly overpredicts low-dose swelling.

## One-liner

> The dislocation bias leaves a vacancy surplus, helium seeds it into 3-D holes, and in the $0.3$–$0.55\,T_m$ window those holes grow — foaming the solid at about a percent of volume per dpa once past an incubation lag.

## Problems

**P1 (🟢)** An austenitic steel is found to contain voids of number density $N = 1\times10^{21}\ \mathrm{m^{-3}}$ and mean radius $r = 20\ \mathrm{nm}$. Compute the volumetric swelling $\Delta V/V$ as a percentage.

**P2 (🟡)** A different specimen has swollen by $\Delta V/V = 5\%$ and its void density is measured as $N = 5\times10^{20}\ \mathrm{m^{-3}}$. Estimate the mean void radius (assume a single characteristic radius). 

**P3 (🔴)** A fast-reactor duct made of 316 stainless steel operates near peak-swelling temperature and accumulates $100$ dpa over its life. Its incubation dose is about $40$ dpa, after which it swells in the linear regime at $\approx 1\%$/dpa. (a) Estimate its end-of-life volumetric swelling. (b) Roughly what is the linear (one-dimensional) size increase? (c) In one sentence, why does this push designers toward the ferritic/martensitic steels of [4.2](04-02-steels-austenitic-ferritic-martensitic.md)?

<details>
<summary>Solutions</summary>

**P1** With $r = 20\ \mathrm{nm} = 2\times10^{-8}\ \mathrm{m}$:

$$\frac{\Delta V}{V} = \frac{4}{3}\pi r^3 N = \frac{4}{3}\pi\,(2\times10^{-8})^3\,(10^{21}) = \frac{4}{3}\pi\,(8\times10^{-24})(10^{21}) = 3.35\times10^{-2}.$$

So $\Delta V/V \approx 3.4\%$. *Check.* Same $N$ as Example 1 but double the radius gives $2^3 = 8\times$ the swelling ($0.42\% \to 3.35\%$) — volume scales as $r^3$, so radius is the dominant lever. Units dimensionless ✓.

**P2** Invert the swelling formula for $r$:

$$r^3 = \frac{\Delta V/V}{\tfrac{4}{3}\pi N} = \frac{0.05}{\tfrac{4}{3}\pi\,(5\times10^{20})} = \frac{0.05}{2.09\times10^{21}} = 2.39\times10^{-23}\ \mathrm{m^3}.$$

$$r = (2.39\times10^{-23})^{1/3} = (23.9\times10^{-24})^{1/3} = (23.9)^{1/3}\times10^{-8} \approx 2.88\times10^{-8}\ \mathrm{m} \approx 29\ \mathrm{nm}.$$

*Check.* $\mathrm{m^3}^{1/3} = \mathrm{m}$ ✓. Sanity: 29 nm is a bit larger than P1's 20 nm voids and the swelling (5%) is a bit larger than P1's 3.4%, consistent given a slightly lower density — reasonable.

**P3** (a) Swelling accrues only after incubation: $(100 - 40)\ \text{dpa} \times 1\%/\text{dpa} = 60\%$ volumetric swelling. (This is why peak-swelling austenitic steel at very high dose is dimensionally untenable — the number really is that large near the worst conditions.)

(b) Isotropic swelling distributes over three dimensions: $\Delta L/L \approx \tfrac13\,\Delta V/V \approx 20\%$ linear growth (from $(1+\Delta L/L)^3 = 1 + \Delta V/V$, so $\Delta L/L = (1.60)^{1/3} - 1 = 0.17$, about $17$–$20\%$). Either way, a duct that grows ~one-fifth in every dimension will bind against its neighbors.

(c) Ferritic/martensitic (bcc) steels have a much longer incubation dose and far lower steady swelling rate, so they stay dimensionally stable to high dose where austenitic (fcc) steels foam — you trade some other properties for swelling resistance. 

*Check.* The $\tfrac13$ factor and the $\sim1\%$/dpa rule are the two load-bearing facts; both are dimensionless rules of thumb, and 60% volume / ~20% linear is the textbook cautionary number for unmitigated fast-reactor swelling.

</details>

## Flashback

**From Lesson 2.2 (Dislocation loops and bias):** Radiation produces vacancies and interstitials in *equal* numbers. Suppose the only defect sinks are dislocations and voids, and dislocations capture interstitials about $10\%$ more efficiently than they capture vacancies (a bias of $\sim0.1$), while voids are essentially *neutral* sinks (no bias). Qualitatively, what must the vacancy and interstitial fluxes into the voids look like at steady state, and why does that make voids grow?

<details>
<summary>Solution</summary>

At steady state every defect that is created must be absorbed, and vacancy and interstitial *production* rates are equal. Dislocations, being biased, absorb slightly *more* interstitials than vacancies — they swallow the interstitial excess. Conservation then forces the *other* sink, the voids, to absorb a compensating **excess of vacancies over interstitials**. So the net current into a neutral void is a vacancy current: more vacancies arrive than interstitials, and each surplus vacancy adds a site to the void. That net vacancy flux is precisely what makes $dr/dt > 0$ in the growth law — the void grows, and the metal swells. *Key point:* it is the *partitioning* by the biased dislocations, not any preference of the void itself, that hands the voids their vacancy surplus. Kill the bias (equal capture) and both sinks see equal fluxes — no net vacancy accumulation anywhere, and swelling stops.

</details>

## Connections

- **Backward:** this is [2.2](02-02-dislocation-loops-bias.md)'s dislocation bias cashed out — the bias created a vacancy surplus; here that surplus condenses into holes. Vacancy mobility and the Arrhenius $D_v \propto e^{-E_m^v/k_BT}$ that sets the cold edge of the window come from [2.1](02-01-defect-migration-radiation-enhanced-diffusion.md), and the vacancy itself is the point defect of [materials-science 2.1](../../materials-science/lessons/02-01-point-defects-solid-solutions.md). The helium that stabilizes nucleation comes from $(n,\alpha)$ transmutation reactions — the reaction bookkeeping of [intro-nuclear-engineering 1.5](../../intro-nuclear-engineering/lessons/01-05-nuclear-reactions-q-values.md).
- **Forward:** voids are also mechanical obstacles, so they harden the metal — the dispersed-barrier model of [2.5](02-05-radiation-hardening.md) counts them alongside loops. Swelling is a *stress-free* dimensional change; contrast it with the *stress-driven* dimensional change of [2.4 irradiation creep and growth](02-04-irradiation-creep-growth.md). And the whole swelling story decides the alloy choice in [4.2](04-02-steels-austenitic-ferritic-martensitic.md). In the fuel itself, the same "gas + vacancies inflate cavities" mechanism drives fission-gas swelling of UO₂ in [3.4](03-04-fission-gas-release-swelling.md).
- **Sideways:** the need for a gas seed to get past a nucleation barrier is classical nucleation theory — the same reason a supersaturated vapor needs dust motes to condense into droplets, or a bottle of soda needs a scratch to nucleate bubbles. And the bell-shaped swelling-vs-$T$ curve is a generic signature of two competing thermally-activated processes (here, mobility rising vs. supersaturation falling) — a shape you meet again wherever an optimum sits between "too slow" and "too washed-out."
