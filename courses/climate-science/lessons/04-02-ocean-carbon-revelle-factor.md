# Climate Physics · Lesson 4.2: Ocean carbon and the Revelle factor

> ⏱ ~15 min · Module 4: The carbon cycle & ocean chemistry · Builds on: [4.1](04-01-the-carbon-cycle.md), [general-chemistry 4.1](../../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) · Unlocks: [4.3](04-03-ocean-acidification.md), [4.4](04-04-tcre-carbon-budgets-net-zero.md)

## Why this matters

The ocean holds 44 times as much carbon as the atmosphere. If the two simply shared an emitted pulse in proportion to their capacities, 98 percent of our emissions would end up in the sea and there would be no climate problem worth the name. Instead the ocean takes about a quarter on decadal timescales and a bit under 80 percent even at full equilibrium. The reason is a single dimensionless number — the **[Revelle factor](../reference.md#revelle-factor)** — and it is the most important piece of chemistry in the whole subject. It also explains why the ocean sink is *weakening*, why acidification is unavoidable, and why the impulse-response function of [4.1](04-01-the-carbon-cycle.md) has that stubborn 22 percent that never goes away.

## The idea

**Almost none of the ocean's carbon is $\mathrm{CO_2}$.** Dissolved $\mathrm{CO_2}$ reacts with water and with carbonate ions to form bicarbonate. At seawater pH the inventory is roughly 0.5 percent dissolved $\mathrm{CO_2}$, 88 percent bicarbonate and 11 percent carbonate. That conversion is what lets the ocean hold so much carbon in the first place — twenty times more than physical solubility alone would allow.

**But what exchanges with the atmosphere is only the $\mathrm{CO_2}$ part.** Air–sea equilibrium is set by Henry's law on the *dissolved $\mathrm{CO_2}$* concentration, which is the tiny 0.5 percent slice. So the question is not "how much carbon can the ocean hold" but "how much does the $\mathrm{CO_2}$ slice grow when you add carbon to the total".

**And the answer is: a lot, because adding $\mathrm{CO_2}$ eats the carbonate that was doing the buffering.** The reaction is

$$\mathrm{CO_2} + \mathrm{H_2O} + \mathrm{CO_3^{2-}} \longrightarrow 2\,\mathrm{HCO_3^-}.$$

Each $\mathrm{CO_2}$ molecule that dissolves consumes a carbonate ion. Carbonate is only 11 percent of the pool, so it runs down fast, and once it does there is nothing left to convert the incoming $\mathrm{CO_2}$ into bicarbonate — the dissolved $\mathrm{CO_2}$ concentration, and hence the partial pressure, shoots up.

**The Revelle factor measures exactly this.** It is the ratio of the fractional change in $p\mathrm{CO_2}$ to the fractional change in total dissolved carbon: about 10. *In words: raise the ocean's carbon content by 1 percent and its $\mathrm{CO_2}$ partial pressure goes up 10 percent.* The ocean's effective capacity is therefore its raw capacity divided by 10 — and $44/10 = 4.4$, which is the number that actually governs how a pulse is shared.

**And $R$ rises as we add carbon.** Less carbonate means weaker buffering means a larger $R$. The ocean sink is a self-weakening one.

## The formal version

**The carbonate system.** Three equilibria, following [general-chemistry 4.1](../../general-chemistry/lessons/04-01-acids-bases-ph-strength.md):

$$\mathrm{CO_2(g)} \rightleftharpoons \mathrm{CO_2^*(aq)}, \qquad K_H = \frac{[\mathrm{CO_2^*}]}{p\mathrm{CO_2}},$$
$$\mathrm{CO_2^*} + \mathrm{H_2O} \rightleftharpoons \mathrm{H^+} + \mathrm{HCO_3^-}, \qquad K_1 = \frac{[\mathrm{H^+}][\mathrm{HCO_3^-}]}{[\mathrm{CO_2^*}]},$$
$$\mathrm{HCO_3^-} \rightleftharpoons \mathrm{H^+} + \mathrm{CO_3^{2-}}, \qquad K_2 = \frac{[\mathrm{H^+}][\mathrm{CO_3^{2-}}]}{[\mathrm{HCO_3^-}]}.$$

Define **dissolved inorganic carbon**:

$$\mathrm{DIC} = [\mathrm{CO_2^*}] + [\mathrm{HCO_3^-}] + [\mathrm{CO_3^{2-}}] \approx 2000\ \mathrm{\mu mol\,kg^{-1}}.$$

Speciation at pH 8.1 (using apparent seawater constants $K_1 = 1.4\times10^{-6}$, $K_2 = 1.2\times10^{-9}$ mol kg⁻¹):

$$\frac{[\mathrm{CO_2^*}]:[\mathrm{HCO_3^-}]:[\mathrm{CO_3^{2-}}]}{\mathrm{DIC}} = 0.005 : 0.87 : 0.13.$$

**Alkalinity, and why it is conserved.** Total alkalinity is the excess of proton acceptors over donors — operationally, the charge imbalance of the conservative ions:

$$\mathrm{TA} \approx [\mathrm{HCO_3^-}] + 2[\mathrm{CO_3^{2-}}] + [\mathrm{B(OH)_4^-}] + \cdots \approx 2300\ \mathrm{\mu eq\,kg^{-1}}.$$

*In words: alkalinity counts negative charges that must be balanced by protons.* The crucial property: **adding $\mathrm{CO_2}$ does not change alkalinity**, because $\mathrm{CO_2}$ is electrically neutral. It changes DIC at constant TA, and that constraint is what makes the whole system solvable.

**Deriving the Revelle factor.** Take the carbonate-only caricature, ignoring borate: $\mathrm{TA} = [\mathrm{HCO_3^-}] + 2[\mathrm{CO_3^{2-}}]$ and $\mathrm{DIC} \approx [\mathrm{HCO_3^-}] + [\mathrm{CO_3^{2-}}]$ (the $\mathrm{CO_2^*}$ term is negligible). Solving:

$$[\mathrm{HCO_3^-}] = 2\,\mathrm{DIC} - \mathrm{TA}, \qquad [\mathrm{CO_3^{2-}}] = \mathrm{TA} - \mathrm{DIC}.$$

Combining the two dissociation equilibria to eliminate $[\mathrm{H^+}]$:

$$[\mathrm{CO_2^*}] = \frac{[\mathrm{H^+}][\mathrm{HCO_3^-}]}{K_1} = \frac{K_2}{K_1}\frac{[\mathrm{HCO_3^-}]^2}{[\mathrm{CO_3^{2-}}]} \quad\Longrightarrow\quad p\mathrm{CO_2} \propto \frac{(2\,\mathrm{DIC}-\mathrm{TA})^2}{\mathrm{TA}-\mathrm{DIC}}.$$

*In words: the partial pressure goes as bicarbonate squared over carbonate — so it is exquisitely sensitive to the carbonate ion, which is the small term.* Now differentiate logarithmically at constant TA:

$$\boxed{\ R \equiv \frac{\partial\ln p\mathrm{CO_2}}{\partial\ln \mathrm{DIC}} = \mathrm{DIC}\left(\frac{4}{[\mathrm{HCO_3^-}]} + \frac{1}{[\mathrm{CO_3^{2-}}]}\right).\ }$$

With $\mathrm{DIC} = 2000$, $[\mathrm{HCO_3^-}] = 1800$, $[\mathrm{CO_3^{2-}}] = 200\ \mathrm{\mu mol\,kg^{-1}}$:

$$R = 2000\left(\frac{4}{1800}+\frac{1}{200}\right) = 2000(0.00222+0.00500) = 14.4.$$

The measured value is nearer **10** at pre-industrial conditions, and the gap is real physics the caricature omits: borate alkalinity buffers the system, and $R$ varies from about 8 in warm tropical water to 15 in the cold high latitudes (warm water has more carbonate). Use $R = 10$ for global numerical work, and take from the derivation the *structure*, which is robust:

$$R \sim \frac{\mathrm{DIC}}{[\mathrm{CO_3^{2-}}]} = \frac{2000}{200} = 10.$$

*In words: the Revelle factor is roughly the ratio of total carbon to the carbonate ion — the buffer's strength is set by how much of the buffering species is left.* That form makes the self-weakening obvious: DIC rises and $\mathrm{CO_3^{2-}}$ falls, so $R$ rises on both counts.

**The capacity ratio, and where the airborne fraction comes from.** At equilibrium the fractional change in ocean carbon is $1/R$ times the fractional change in $p\mathrm{CO_2}$, which equals the fractional change in atmospheric carbon. So the *buffered* capacity ratio is

$$\Gamma = \frac{\mathrm{C_{ocean}}}{R\,\mathrm{C_{atm}}}, \qquad \mathrm{AF}_\infty = \frac{1}{1+\Gamma}.$$

An emitted pulse partitions in that ratio. Note that $\Gamma$ depends on the *background* atmosphere it is evaluated against, and that dependence is itself the weakening:

| Background | $\mathrm{C_{atm}}$ | $R$ | $\Gamma$ | $\mathrm{AF}_\infty$ |
|---|---|---|---|---|
| Pre-industrial, 280 ppm | 595 PgC | 10 | 6.4 | 0.135 |
| Today, 420 ppm | 875 PgC | 12 | 3.6 | 0.22 |

*In words: a tonne emitted in 1850 would eventually have left 14 percent of itself in the air; a tonne emitted today leaves 22 percent.* Both terms move the wrong way — the atmosphere is larger and the buffer is weaker.

**Compare the modern value with the $a_0 = 0.217$ of [4.1](04-01-the-carbon-cycle.md)'s impulse-response function.** They agree to two figures, which is not a coincidence: the permanent fraction of an emitted pulse *is* the buffered capacity ratio, and you can compute it from a Revelle factor and two reservoir sizes. *In words: the permanent fraction of an emitted pulse is set by ocean carbonate chemistry, and you can compute it from a Revelle factor and two reservoir sizes.*

**Two pumps maintain the vertical gradient.** The ocean's DIC is not uniform — the deep ocean holds more than the surface, which is what allows it to store so much:

- The **solubility pump.** $\mathrm{CO_2}$ is more soluble in cold water. High-latitude surface water is cold, absorbs carbon, and then sinks in the deep-water formation regions of the North Atlantic and around Antarctica, carrying its carbon with it.
- The **biological pump.** Phytoplankton fix carbon in the sunlit surface layer; a fraction sinks as particles and is remineralized at depth. This continuously strips carbon from the surface and injects it below.

Together they maintain a surface-to-deep DIC difference of roughly 15 percent. **Switch off the biological pump and atmospheric $\mathrm{CO_2}$ would rise by 150 to 200 ppm** — a striking number, and the reason ocean biology is not a decoration on the carbon cycle.

**Why the ocean takes only a quarter *now*.** Two separate limitations, and it is worth keeping them apart:

1. **Chemistry** (this lesson): the Revelle factor cuts the effective capacity by a factor of 10, so even at full equilibrium the ocean takes about 80 percent, not 98.
2. **Circulation** ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)): only the surface layer, about 900 PgC, is in contact with the atmosphere on a decadal timescale. Reaching the 38 000 PgC of the deep ocean requires the overturning circulation, which takes centuries to a millennium.

The first sets the destination; the second sets the pace. **This is precisely the same structure as heat uptake** — chemistry plays the role of $\lambda$ and circulation the role of $C$ — and the parallel is not a coincidence: it is the same ocean doing both.

## Picture

![Stacked bars of surface-ocean dissolved inorganic carbon speciation in micromoles per kilogram at three atmospheric carbon dioxide levels. At 280 ppm, DIC is 1970, comprising 1721 bicarbonate, 240 carbonate and 9 dissolved carbon dioxide. At 420 ppm, DIC is 2030 with carbonate down to 190. At 560 ppm, DIC is 2070 with carbonate down to 152. The total barely changes while the carbonate slice, shown in coral, shrinks by more than a third. Below, the reaction: carbon dioxide plus water plus carbonate gives two bicarbonate, so every carbon dioxide molecule that enters destroys one carbonate ion](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — how much carbon will the ocean take?).** Starting from today's 875 PgC atmosphere, humanity emits a further 1500 PgC. At full equilibrium with the ocean (ignoring the land and the slow carbonate-sediment response): (a) how is it partitioned, using $R = 12$? (b) What is the final atmospheric concentration? (c) Repeat with $R = 16$, the value the surface ocean is heading toward, and comment.

(a) $$\Gamma = \frac{38\,000}{12\times875} = 3.62, \qquad \mathrm{AF}_\infty = \frac{1}{4.62} = 0.216.$$

Airborne: $0.216\times1500 = 325$ PgC. Ocean: 1175 PgC.

(b) Final atmospheric carbon $= 875 + 325 = 1200$ PgC, i.e.

$$\frac{1200}{2.124} = 565\ \mathrm{ppm},$$

up from today's 412 ppm.

(c) With $R = 16$: $\Gamma = 38\,000/(16\times875) = 2.71$, $\mathrm{AF}_\infty = 1/3.71 = 0.270$. Airborne: 404 PgC, final concentration $(875+404)/2.124 = 602$ ppm — nearly 40 ppm higher.

*The point.* The calculation quietly cheated by holding $R$ fixed while adding over a thousand petagrams of carbon to the ocean, which would raise $R$ substantially along the way. The truth lies between the two answers and closer to the second. **The linearization is the weak point, not the reservoir sizes** — and it always errs in the same direction, optimistic, because each tonne the ocean absorbs makes the next one harder. P3 below does it properly.

**Example 2 (why you'd care — is the ocean sink weakening?).** Surface-ocean carbonate ion has fallen from about 240 to 190 μmol kg⁻¹ since pre-industrial times, while DIC rose from about 1970 to 2030. (a) Estimate the change in the Revelle factor using the scaling $R \sim \mathrm{DIC}/[\mathrm{CO_3^{2-}}]$. (b) Estimate the fractional weakening of the ocean's uptake per unit disequilibrium. (c) Why has the measured ocean sink nevertheless *grown* over the same period?

(a) $$R_{\text{pre}} \sim \frac{1970}{240} = 8.2, \qquad R_{\text{now}} \sim \frac{2030}{190} = 10.7.$$

A 30 percent increase.

(b) Uptake capacity per unit fractional $p\mathrm{CO_2}$ disequilibrium scales as $1/R$, so it has fallen by

$$1 - \frac{8.2}{10.7} = 23\ \text{percent}.$$

(c) Because the *disequilibrium itself* has grown much faster. The ocean sink is proportional to (buffer capacity) × (air–sea $p\mathrm{CO_2}$ difference), and while the first term fell 23 percent, atmospheric $p\mathrm{CO_2}$ rose 50 percent, so the driving difference grew far more than the capacity shrank. Net: the sink has grown in absolute terms.

*The general principle.* **A weakening sink and a growing sink are compatible**, because "sink strength" can mean the flux or the efficiency, and they diverge when the forcing is growing. The measure that matters for the future is the *efficiency* — the sink per unit of atmospheric excess — and it is unambiguously declining. When emissions eventually fall, the disequilibrium falls with them and the efficiency term takes over, so the absolute sink will drop faster than emissions do. That is one of the two reasons the airborne fraction rises under strong mitigation, and it is why a "the ocean will absorb it" argument fails precisely when it would be most needed.

## Watch out

- **You might think** the ocean's 44-fold larger carbon inventory means it should absorb 98 percent of our emissions. **Actually** the buffered capacity ratio is $44/R \approx 4.4$, so it absorbs about 80 percent at full equilibrium and about a quarter on decadal timescales. The factor of 10 is the Revelle factor and it is the single most important number in the ocean carbon cycle.
- **You might think** the Revelle factor is a constant. **Actually** it varies from 8 to 15 across the surface ocean (cold water is worse) and has risen roughly 30 percent globally since pre-industrial times. It will keep rising, which means each additional tonne is absorbed less efficiently than the last.
- **You might think** adding $\mathrm{CO_2}$ changes the ocean's alkalinity. **Actually** it does not — $\mathrm{CO_2}$ is neutral, so it moves DIC at constant TA. This is exactly why the buffer runs down: with alkalinity pinned, converting incoming $\mathrm{CO_2}$ to bicarbonate *requires* consuming carbonate. It is also why alkalinity *addition* — grinding and dispersing silicate or carbonate rock — is a proposed removal method: it is the one intervention that shifts the constraint rather than working within it.

## One-liner

> The ocean holds forty-four times the atmosphere's carbon but behaves as though it held only four, because raising its carbon by one percent raises its $\mathrm{CO_2}$ pressure by ten — and that Revelle factor gets worse with every tonne we add.

## Problems

**P1 (🟢)** Surface seawater has $\mathrm{DIC} = 2100$, $[\mathrm{HCO_3^-}] = 1880$ and $[\mathrm{CO_3^{2-}}] = 170\ \mathrm{\mu mol\,kg^{-1}}$. (a) Compute the Revelle factor from the carbonate-only formula. (b) Compute it from the scaling $R \sim \mathrm{DIC}/[\mathrm{CO_3^{2-}}]$. (c) If atmospheric $p\mathrm{CO_2}$ rises 20 percent, by what percentage does equilibrium DIC rise (use the value from (b))?

**P2 (🟡)** A cold high-latitude surface water has $R = 15$; a warm tropical water has $R = 8$. Both are in contact with an atmosphere whose $p\mathrm{CO_2}$ has risen 50 percent. (a) Compute the fractional DIC increase in each. (b) With $\mathrm{DIC} = 2100$ and $2000\ \mathrm{\mu mol\,kg^{-1}}$ respectively, compute the absolute uptake in $\mathrm{\mu mol\,kg^{-1}}$. (c) The Southern Ocean is the single largest anthropogenic carbon sink despite having the *highest* Revelle factor. Explain how both facts can be true.

**P3 (🔴, optional)** Total ocean DIC is 38 000 PgC and pre-industrial atmospheric carbon is 595 PgC. Model the Revelle factor as rising linearly with the ocean's anthropogenic carbon burden, $R = R_0(1 + \eta\,\Delta C_{\text{oc}}/1000)$ with $R_0 = 10$, $\eta = 0.11$ per 1000 PgC and $\Delta C_{\text{oc}}$ in PgC. (a) Write the equilibrium partitioning condition for an emitted pulse $E$ and show it becomes a quadratic in $\Delta C_{\text{oc}}$. (b) Solve for $E = 2000$ PgC. (c) Compare the airborne fraction with the constant-$R$ answer and comment on which way a linearized carbon-cycle model errs.

<details>
<summary>Solutions</summary>

**P1** (a) $$R = 2100\left(\frac{4}{1880}+\frac{1}{170}\right) = 2100(0.002128+0.005882) = 2100\times0.008010 = 16.8.$$

(b) $$R \sim \frac{2100}{170} = 12.4.$$

(The two differ, as expected — the carbonate-only derivative overestimates. The measured value for water in this state would be around 12–13, so the simpler scaling is closer here.)

(c) $$\frac{\delta\mathrm{DIC}}{\mathrm{DIC}} = \frac{1}{R}\frac{\delta p\mathrm{CO_2}}{p\mathrm{CO_2}} = \frac{0.20}{12.4} = 0.0161,$$

a **1.6 percent** rise in DIC — about $34\ \mathrm{\mu mol\,kg^{-1}}$.

**P2** (a) $$\text{cold: } \frac{0.50}{15} = 3.33\ \text{percent}; \qquad \text{warm: } \frac{0.50}{8} = 6.25\ \text{percent}.$$

(b) Cold: $0.0333\times2100 = 70\ \mathrm{\mu mol\,kg^{-1}}$. Warm: $0.0625\times2000 = 125\ \mathrm{\mu mol\,kg^{-1}}$.

Per kilogram of surface water, the warm ocean takes nearly twice as much.

(c) Because uptake is a *flux through a surface into a volume*, not a property of a kilogram of water. The Southern Ocean is the world's dominant anthropogenic carbon sink for reasons that have nothing to do with its buffer capacity and everything to do with **ventilation**: it is where the deep ocean outcrops at the surface. Water that has been isolated below for centuries is brought up, exposed to a modern atmosphere it is far out of equilibrium with, loaded with carbon, and subducted again along isopycnals into the ocean interior. The relevant quantity is the *volume of water exchanged per year*, and the Southern Ocean exchanges enormously more than anywhere else.

This is the carbon analogue of [3.1](03-01-ocean-heat-uptake-thermal-inertia.md)'s point about ocean heat uptake being concentrated in the Southern Ocean and North Atlantic — and it is the same water masses doing both. It also means anthropogenic carbon and anthropogenic heat enter the ocean in the same places, which is why the two uptakes are strongly correlated across models.

**P3** (a) At equilibrium, fractional changes satisfy $\dfrac{\Delta C_{\text{oc}}}{C_{\text{oc}}} = \dfrac{1}{R}\dfrac{\Delta C_{\text{atm}}}{C_{\text{atm}}}$, and mass conservation gives $\Delta C_{\text{atm}} = E - \Delta C_{\text{oc}}$. Writing $x = \Delta C_{\text{oc}}$:

$$\frac{x}{38\,000} = \frac{1}{R_0(1+\eta x/1000)}\cdot\frac{E-x}{595}.$$

Multiplying through by $R_0(1+\eta x/1000)\times38\,000\times595$:

$$595\,R_0\,x\left(1+\frac{\eta x}{1000}\right) = 38\,000\,(E-x),$$

$$\frac{595R_0\eta}{1000}x^2 + \left(595R_0 + 38\,000\right)x - 38\,000E = 0,$$

a quadratic in $x$. With $R_0 = 10$, $\eta = 0.11$:

$$0.6545\,x^2 + 43\,950\,x - 38\,000E = 0.$$

(b) For $E = 2000$: $38\,000E = 7.6\times10^{7}$.

$$x = \frac{-43\,950 + \sqrt{43\,950^2 + 4(0.6545)(7.6\times10^{7})}}{2(0.6545)}.$$

$43\,950^2 = 1.9316\times10^{9}$; $4(0.6545)(7.6\times10^{7}) = 1.9897\times10^{8}$. Sum $= 2.1306\times10^{9}$; square root $= 46\,158$.

$$x = \frac{46\,158-43\,950}{1.309} = \frac{2208}{1.309} = 1687\ \mathrm{PgC}.$$

Airborne: $2000-1687 = 313$ PgC, so $\mathrm{AF}_\infty = 313/2000 = 0.157$.

(c) Constant $R = 10$: $\Gamma = 38\,000/(10\times595) = 6.39$, $\mathrm{AF}_\infty = 1/7.39 = 0.135$, airborne 271 PgC.

So the rising Revelle factor raises the airborne fraction from 13.5 to 15.7 percent — a 16 percent relative increase, and 42 PgC more left in the atmosphere.

**A linearized carbon-cycle model always errs optimistic.** It assumes the ocean keeps absorbing at its current efficiency, when in fact each tonne absorbed makes the next one harder. The error grows with the size of the pulse: at $E = 5000$ PgC the same calculation gives an airborne fraction near 22 percent against the linear 13.5. This is why impulse-response functions like [4.1](04-01-the-carbon-cycle.md)'s are calibrated for a *specified pulse size* on a *specified background* — using a 100 PgC response function for a 5000 PgC emission is a real and substantial error, and it is one that appears in the literature.

*Check.* Sanity-check the direction: the coefficient $\eta > 0$ makes the quadratic term positive, which *reduces* $x$ relative to the linear solution, leaving more in the atmosphere. Both the algebra and the physics point the same way, so no sign has flipped. Note also that the airborne fractions here (13–16 percent) are below the 22 percent of [4.1](04-01-the-carbon-cycle.md)'s $a_0$, because this calculation ignores the land reservoir's eventual re-equilibration and the fact that the deep ocean never fully mixes on the relevant timescale.

</details>

## Flashback

**From Lesson 1.5 (The forcing agents):** Suppose global methane emissions are halved, and the atmospheric concentration falls from 1.92 to about 1.00 ppm within three decades. Use $\Delta F = 1.005\left(\sqrt{M}-\sqrt{M_0}\right)$ with $M$ in ppm and $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$. (a) Compute the forcing change. (b) Compute the avoided warming. (c) Explain, using [4.1](04-01-the-carbon-cycle.md), why halving $\mathrm{CO_2}$ *emissions* would not produce an analogous fall in $\mathrm{CO_2}$ concentration.

<details>
<summary>Solution</summary>

(a) $$\Delta F = 1.005\left(\sqrt{1.00}-\sqrt{1.92}\right) = 1.005(1.000 - 1.3856) = -0.388\ \mathrm{W\,m^{-2}}.$$

(b) $$\Delta T = \frac{-0.388}{1.3} = -0.30\ \mathrm{K}.$$

About three tenths of a kelvin avoided — roughly a quarter of the warming to date, from one gas.

(c) Because **methane is a flow and $\mathrm{CO_2}$ is a stock.** Methane's atmospheric lifetime is about 12 years (it is destroyed by reaction with the hydroxyl radical), so its concentration is set by a balance between emission and destruction: halve the emission and the concentration halves within a few lifetimes. Concentration tracks the emission *rate*.

$\mathrm{CO_2}$ has no comparable sink. [4.1](04-01-the-carbon-cycle.md)'s impulse-response function has a permanent term $a_0 = 0.217$, which means atmospheric $\mathrm{CO_2}$ accumulates for *any* nonzero emission rate — halving emissions halves the rate at which concentration rises but does not lower it. Concentration tracks *cumulative* emissions, not the rate.

*Check.* The policy consequence follows immediately and is worth stating: **methane cuts buy fast, reversible temperature reductions; $\mathrm{CO_2}$ cuts only slow an irreversible rise.** They are not interchangeable, which is why "$\mathrm{CO_2}$-equivalent" accounting via a single GWP number is a real approximation rather than a convenience. It also explains why methane is attractive for near-term action — 0.3 K within thirty years from one gas is a lot — and why it cannot substitute for $\mathrm{CO_2}$ reduction, because the methane reservoir is small and can only be drawn down once.

</details>

## Connections

- **Backward:** the $a_0$ term of [4.1](04-01-the-carbon-cycle.md)'s impulse response is derived here from the capacity ratio; the acid–base equilibria and the meaning of $K_a$ are [general-chemistry 4.1](../../general-chemistry/lessons/04-01-acids-bases-ph-strength.md)'s; the chemistry/circulation split mirrors [3.1](03-01-ocean-heat-uptake-thermal-inertia.md)'s $\lambda$/$C$ split exactly.
- **Forward:** the falling carbonate ion is the mechanism of [4.3](04-03-ocean-acidification.md); the rising $R$ is why the airborne fraction is not constant in [4.4](04-04-tcre-carbon-budgets-net-zero.md); alkalinity addition as a removal method returns in [6.5](06-05-scenarios-projections-intervention.md).
- **Sideways (chemistry):** this is buffer theory — a weak-acid system resisting change in $p\mathrm{CO_2}$ until the conjugate base runs out, exactly as a buffer resists pH change until it is exhausted ([`general-chemistry` 4.2](../../general-chemistry/lessons/04-02-buffers-titration.md)). The Revelle factor is the inverse of the buffer capacity, and the ocean is a titration in progress.
