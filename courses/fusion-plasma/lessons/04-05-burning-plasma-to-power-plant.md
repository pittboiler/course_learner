# Fusion & Plasma Engineering · Lesson 4.5: From burning plasma to power plant

> ⏱ ~15 min · Module 4: Tritium, Inertial Fusion & Reactor Engineering · Builds on: [4.2 Neutrons, blankets & activation](04-02-neutrons-blankets-activation.md), [1.5 Ignition, breakeven & gain $Q$](01-05-ignition-breakeven-gain.md) · Unlocks: course complete — [nuclear-fuel-cycle](../../nuclear-fuel-cycle/syllabus.md) economics, [nuclear-materials](../../nuclear-materials/syllabus.md)

## Why this matters

Everything so far has been about making a plasma burn. But a burning plasma is not a power plant — it is a very expensive space heater unless the heat becomes electricity, *and there is electricity left over after the plant powers itself*. ITER will hit $Q=10$ and produce **zero** watts for the grid, on purpose. This final lesson connects the last dots: the machine roadmap (ITER, DEMO, SPARC), the balance of plant that turns 14 MeV neutrons into turbine steam, and the two brutal accountants — **recirculating power** and **availability** — that decide whether fusion ever sells a kilowatt-hour. This is the synthesis: every number from Modules 1–4 finally cashes out.

## The idea

Picture the whole plant as a single money-losing-or-winning machine. Fusion reactions dump energy in two forms: **alpha particles** (charged, stay in the plasma, heat it) and **neutrons** (neutral, fly straight out, carry 80% of the energy). The neutrons slam into a **blanket** — a thick lithium-bearing layer — where they do two jobs at once: breed the tritium fuel (Lesson [4.1](04-01-tritium-breeding-fuel-cycle.md)) and deposit their energy as heat, actually *more* heat than they carried in, because the breeding reactions are exothermic. That heat boils a coolant, the coolant makes steam, the steam spins a turbine, the turbine spins a generator, electricity flows to the grid. It is, downstream of the blanket, a completely ordinary thermal power station — the same Rankine cycle as a coal or fission plant, with the same unavoidable thermal-to-electric efficiency of roughly a third.

Here's the twist that makes fusion special and hard. The plant is also its own biggest customer. The magnets need power (or at least a cryoplant to stay superconducting), the plasma needs continuous heating and current drive, the tritium plant runs pumps and getters, the whole cryogenic and cooling infrastructure draws megawatts. This is **recirculating power** — electricity the plant generates and immediately spends on itself. Net electricity is what's left. If the recirculating load is a big fraction of the gross output, the plant barely breaks even *at the wall plug* even when the plasma is winning spectacularly. That is why plasma-physics gain $Q$ and plant-level gain are different animals, and why a power plant needs $Q$ far above the ITER milestone.

## The formal version

**The power chain.** Start with fusion power $P_{\text{fus}}$ (watts) — the total energy release rate from D-T reactions. Split it by the [4.2](04-02-neutrons-blankets-activation.md) energy partition: each $\ce{^{2}_{1}H + ^{3}_{1}H -> ^{4}_{2}He + ^{1}_{0}n}$ releases $17.6$ MeV as $3.5$ MeV to the alpha and $14.1$ MeV to the neutron. The **thermal power** delivered to the coolant is

$$P_{\text{thermal}} = P_{\text{fus}}\left[\frac{14.1}{17.6}\,M + \frac{3.5}{17.6}\right],$$

where $M$ is the blanket **energy multiplication** — the factor by which neutron energy grows as it moderates and drives exothermic $\ce{^{6}Li(n,\alpha)^{3}H}$ and $(n,2n)$ reactions, typically $M\approx1.1$–$1.3$. *In words: nearly all the neutron energy, boosted by $M$, plus all the alpha heat, ends up in the coolant.* (The alphas thermalize in the plasma and their heat leaks out through the exhaust; it still counts.)

**Gross electric power.** A steam cycle converts heat to electricity at thermal-to-electric efficiency $\eta$:

$$P_{\text{gross}} = \eta\, P_{\text{thermal}}, \qquad \eta \approx 0.35\text{–}0.40.$$

*In words: the turbine hall throws away about two-thirds of the heat, same as any thermal plant — this is Carnot, not fusion's fault.*

**Net electric power and recirculating power.** The plant must feed its own systems a recirculating power $P_{\text{recirc}}$:

$$P_{\text{net}} = P_{\text{gross}} - P_{\text{recirc}}, \qquad P_{\text{recirc}} = \underbrace{P_{\text{aux}}}_{\text{cryo, pumps, tritium, controls}} + \underbrace{\frac{P_{\text{heat}}}{\eta_{\text{CD}}}}_{\text{heating / current drive}}.$$

Here $P_{\text{heat}} = P_{\text{fus}}/Q$ is the heating power the plasma actually needs (from the definition of gain $Q$, Lesson [1.5](01-05-ignition-breakeven-gain.md)), and $\eta_{\text{CD}}$ is the wall-plug efficiency of the heating system (how many watts from the busbar it takes to put one watt into the plasma — typically only $0.3$–$0.5$). *In words: net electricity is the gross minus the plant's own appetite, and the plasma heating bill shrinks as $Q$ grows.* The **recirculating fraction** $f_{\text{rec}} = P_{\text{recirc}}/P_{\text{gross}}$ is the single most important plant-economics number; a viable plant wants it well under $\sim0.3$.

**The roadmap in one line.** **ITER** is a *physics* experiment — it will demonstrate $Q=10$ and a burning plasma, but has no turbine and sends nothing to the grid. **DEMO** is the planned *first demonstration power plant* — steady net electricity, closed tritium cycle, the machine this whole lesson describes. **SPARC** is a compact, high-field ($\sim12$ T REBCO magnets) private-sector fast-track aiming for $Q>2$ in a much smaller device, betting that field strength buys performance cheaper than size.

## Picture

![Fusion power flow: plasma splits into alpha heat and 14 MeV neutrons, the blanket multiplies the heat by M and breeds tritium, coolant drives a turbine at efficiency eta to the grid, and a coral recirculating tap feeds magnets, heating, cryoplant and tritium systems back to the plant](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (the boss shape — fusion power all the way to the busbar).** A DEMO-class reactor burns D-T at $P_{\text{fus}}=3$ GW. Take $E_{\text{fus}}=17.6$ MeV, triton mass $m_T=5.01\times10^{-27}$ kg, blanket multiplication $M=1.2$, and $\eta=0.35$.

*(a) Tritium burn rate.* Each reaction consumes one triton and releases $E_{\text{fus}} = 17.6\times1.602\times10^{-13}\,\text{J} = 2.82\times10^{-12}\,\text{J}$. The reaction rate is

$$\dot N = \frac{P_{\text{fus}}}{E_{\text{fus}}} = \frac{3\times10^{9}}{2.82\times10^{-12}} = 1.06\times10^{21}\ \text{reactions/s}.$$

Multiply by the triton mass and by $86{,}400$ s/day:

$$\dot m_T = 1.06\times10^{21}\times5.01\times10^{-27}\times86{,}400 \approx 0.46\ \text{kg/day}.$$

A gigawatt-scale plant eats roughly half a kilogram of tritium a day — and world tritium stock is only tens of kilograms, which is exactly why it must breed its own.

*(b) Why $\text{TBR}>1$, not $=1$.* The plant must replace every burned triton **and** cover losses: tritium decays ($\beta^-$, 12.3-year half-life), some is retained in walls and structures, some is lost in processing, and new plants need a startup inventory bred by existing ones. A breeding ratio of exactly 1 leaves zero margin — any loss slowly starves the fuel cycle. You need $\text{TBR}\gtrsim1.05$–$1.15$.

*(c) Thermal, then gross electric.* Neutrons carry $14.1/17.6=0.801$ of the fusion power into the blanket, multiplied by $M=1.2$; the alphas add $3.5/17.6=0.199$:

$$P_{\text{thermal}} = 3\,\text{GW}\,[\,0.801\times1.2 + 0.199\,] = 3\,\text{GW}\times1.16 = 3.48\ \text{GW}.$$

The multiplication buys back more than the ~20% the neutrons would have lost to Carnot anyway. With $\eta=0.35$:

$$P_{\text{gross}} = 0.35\times3.48\ \text{GW} \approx 1.2\ \text{GW}.$$

So 3 GW of fusion becomes about 1.2 GW of gross electricity — before the plant pays itself.

**Example 2 (recirculating power — where low $Q$ goes to die).** Take the same plant: $P_{\text{gross}}=1.2$ GW. Suppose the fixed auxiliary load (cryoplant, coolant pumps, tritium plant, controls) is $P_{\text{aux}}=200$ MW, and the heating system runs at wall-plug efficiency $\eta_{\text{CD}}=0.4$.

*(a) At $Q=10$ (the ITER milestone).* The plasma needs $P_{\text{heat}} = P_{\text{fus}}/Q = 3000/10 = 300$ MW. Drawing that through 40%-efficient injectors costs

$$\frac{P_{\text{heat}}}{\eta_{\text{CD}}} = \frac{300}{0.4} = 750\ \text{MW at the busbar}.$$

$$P_{\text{recirc}} = 200 + 750 = 950\ \text{MW}, \qquad P_{\text{net}} = 1200 - 950 = 250\ \text{MW}.$$

Positive — but the recirculating fraction is $f_{\text{rec}} = 950/1200 \approx 0.79$. The plant burns four-fifths of its output on itself. $Q=10$ is a magnificent physics result and a *marginal* power plant; this is precisely why DEMO targets much higher $Q$ (or a large self-generated bootstrap current that shrinks $P_{\text{heat}}$).

*(b) At $Q=1$ (scientific breakeven).* Now $P_{\text{heat}} = 3000/1 = 3000$ MW, costing $3000/0.4 = 7500$ MW at the busbar:

$$P_{\text{net}} = 1200 - 200 - 7500 = -6500\ \text{MW}.$$

Wildly negative. Breakeven in the *plasma* ($Q=1$) is nowhere near breakeven at the *wall plug*. The lesson: plasma gain and plant gain are different, and only a high plant-level gain leaves anything for the grid.

## Watch out

- **You might think $Q=10$ means "ten times more power out than in," so the plant is obviously net-positive.** But $Q$ compares *fusion power* to *plasma heating power* — it ignores the factor-of-3 Carnot loss, the wall-plug inefficiency of the heaters, and the fixed cryo/pump/tritium load. Example 2 shows $Q=10$ can leave a razor-thin net. Grid-relevant plants need $Q\gtrsim25$–40 or heavy bootstrap.
- **You might think ITER will power a city.** ITER has no turbine and no generator by design — it is a burning-plasma *physics* experiment. DEMO is the machine that makes electricity. Don't conflate the milestone with the product.
- **You might think steady-state vs. pulsed is a detail.** It sets **availability**, and availability sets economics. A power plant must run near-continuously; a pulsed tokamak with thermal-fatigue cycling and dead time between shots delivers fewer full-power hours per year, and every idle hour still pays the capital bill. This favors steady-state operation (non-inductive current drive, stellarators) and demands component **lifetimes** that survive years of 14 MeV neutron damage.

## One-liner

> A power plant sells $P_{\text{net}} = \eta\,P_{\text{fus}}[(14.1/17.6)M + 3.5/17.6] - P_{\text{recirc}}$, run for as many hours as the neutrons will let it — so fusion is won not at ignition but at the busbar, times availability.

## Problems

**P1 (🟢)** A compact reactor burns D-T at $P_{\text{fus}}=500$ MW with blanket multiplication $M=1.15$ and thermal efficiency $\eta=0.38$. Compute the thermal power delivered to the coolant and the gross electric power. (Use the $14.1/17.6$ and $3.5/17.6$ split.)

**P2 (🟡)** Take the plant from P1 ($P_{\text{gross}}$ from your answer). Its fixed auxiliary load is $P_{\text{aux}}=60$ MW, heating wall-plug efficiency is $\eta_{\text{CD}}=0.45$, and it operates at $Q=20$. (a) Find $P_{\text{heat}}$, the recirculating power, and the net electric power. (b) What is the recirculating fraction $f_{\text{rec}} = P_{\text{recirc}}/P_{\text{gross}}$? (c) Below what $Q$ does this plant deliver zero net electricity, all else fixed?

**P3 (🔴 — availability & economics, cross-subject)** The plant from P2 has $P_{\text{net}}$ from your answer. Its annualized capital-plus-O&M cost is 1.0 billion dollars per year. Electricity revenue is $P_{\text{net}}$ run for $8760$ hours a year times an **availability** $a$ (fraction of the year at full power). (a) Write the levelized cost in dollars per MWh as a function of $a$. (b) Evaluate it for $a=0.85$ and for $a=0.45$. (c) In one sentence, why does availability dominate fusion economics? (This is the bridge to [nuclear-fuel-cycle](../../nuclear-fuel-cycle/syllabus.md) plant economics.)

<details>
<summary>Solutions</summary>

**P1.** Energy partition factor: $0.801\times M + 0.199 = 0.801\times1.15 + 0.199 = 0.921 + 0.199 = 1.120$. Then

$$P_{\text{thermal}} = 500\,\text{MW}\times1.120 = 560\ \text{MW}, \qquad P_{\text{gross}} = 0.38\times560 = 213\ \text{MW}.$$

*Check.* Factor $1.12$ sits sensibly between 1 (no multiplication, all energy but no gain) and the ~1.16 of Example 1 (which used a larger $M=1.2$). Gross ≈ 40% of thermal, as $\eta$ demands. ✓

**P2.** (a) $P_{\text{heat}} = P_{\text{fus}}/Q = 500/20 = 25$ MW. Busbar cost of heating $= 25/0.45 = 55.6$ MW.

$$P_{\text{recirc}} = 60 + 55.6 = 115.6\ \text{MW}, \qquad P_{\text{net}} = 213 - 115.6 \approx 97\ \text{MW}.$$

(b) $f_{\text{rec}} = 115.6/213 \approx 0.54$. Still over half — this small, modest-$\eta$ plant pays a heavy self-tax, though far better than Example 2's $Q=10$ case because $Q=20$ halves the heating bill.

(c) Zero net means $P_{\text{gross}} = P_{\text{recirc}} = P_{\text{aux}} + (P_{\text{fus}}/Q)/\eta_{\text{CD}}$. Solve for $Q$:

$$213 = 60 + \frac{500/Q}{0.45} \;\Rightarrow\; 153 = \frac{1111}{Q} \;\Rightarrow\; Q = \frac{1111}{153} \approx 7.3.$$

Below $Q\approx7.3$ the plant delivers no net electricity — a vivid reminder that the plasma milestone $Q=10$ is barely above this plant's break-even line.

*Check.* At $Q=20$ we found $P_{\text{net}}>0$; at $Q=7.3$ it's zero; at $Q<7.3$ it's negative — monotone and consistent. ✓

**P3.** (a) Annual net energy $= P_{\text{net}}\times8760\times a$. With $P_{\text{net}}=97$ MW $=0.097$ GW, one year at full power is $0.097\times8760 = 850$ GWh $= 850{,}000$ MWh. So annual MWh $= 850{,}000\,a$, and

$$\text{LCOE} = \frac{1{,}000{,}000{,}000\ \text{dollars/yr}}{850{,}000\,a\ \text{MWh/yr}} = \frac{1176}{a}\ \text{dollars/MWh}.$$

(b) $a=0.85$: $1176/0.85 \approx 1380$ dollars/MWh. $a=0.45$: $1176/0.45 \approx 2610$ dollars/MWh.

(c) Because fusion cost is almost all up-front capital (magnets, buildings, tritium plant), the annual bill is fixed whether the plant runs or sits idle — so LCOE scales as $1/a$, and halving availability nearly doubles the price of every MWh.

*Check.* These illustrative numbers are far above today's grid prices (tens of dollars/MWh) — a deliberate reminder that a small, low-$\eta$, high-recirculation first-of-a-kind plant is expensive; a real DEMO wins by pushing $P_{\text{net}}$ toward a gigawatt, $\eta$ toward 0.4, and $a$ toward 0.9. The $1/a$ scaling is the point, not the absolute figure. ✓

</details>

## Flashback

**From Lesson [4.2](04-02-neutrons-blankets-activation.md) (neutron wall loading):** A reactor burns D-T at $P_{\text{fus}}=2$ GW; neutrons carry $80\%$ of the fusion power, and the first wall has area $800\ \text{m}^2$. (a) Compute the neutron wall loading in $\text{MW/m}^2$. (b) Using the rule of thumb that $1\ \text{MW}\cdot\text{yr/m}^2$ of 14 MeV neutron fluence causes about $10$ displacements per atom (dpa) in steel, and that structural steel is limited to $\sim150$ dpa, estimate the first-wall lifetime in full-power years. Why does this feed straight back into availability?

<details>
<summary>Solution</summary>

(a) Neutron power $= 0.80\times2000 = 1600$ MW. Wall loading:

$$\Gamma_n = \frac{1600\ \text{MW}}{800\ \text{m}^2} = 2.0\ \text{MW/m}^2.$$

That's a typical DEMO-class number (ITER runs near $0.5$–$1\ \text{MW/m}^2$; higher loading means more power per unit wall but faster damage).

(b) Damage rate $\approx 2.0\ \text{MW/m}^2 \times 10\ \text{dpa per MW}\cdot\text{yr/m}^2 = 20$ dpa per full-power year. Lifetime to the $150$ dpa limit:

$$t = \frac{150\ \text{dpa}}{20\ \text{dpa/yr}} \approx 7.5\ \text{full-power years}.$$

The first wall and blanket are consumables — they must be swapped every several years, and every swap is downtime. Component lifetime under neutron damage therefore caps **availability**, which (Problem 3) caps the economics. Materials, not plasma physics, may set the ceiling on fusion's cost.

*Check.* Units: $(\text{MW/m}^2)\times(\text{dpa}/(\text{MW}\cdot\text{yr/m}^2)) = \text{dpa/yr}$ ✓; $\text{dpa}/(\text{dpa/yr}) = \text{yr}$ ✓. Higher wall loading would shorten this further — the tension between power density and lifetime is real. ✓

</details>

## Connections

- **Backward:** this lesson spends the entire course. The energy split and $M$ come from [4.2](04-02-neutrons-blankets-activation.md); the breeding requirement $\text{TBR}>1$ from [4.1](04-01-tritium-breeding-fuel-cycle.md); the gain $Q$ from [1.5](01-05-ignition-breakeven-gain.md); the heating bill from Module 3; steady-state vs. pulsed and disruptions from Module 2. Recirculating power is where $Q$, $\eta$, and $\eta_{\text{CD}}$ all cash out at once.
- **Forward:** the course ends here. The tritium fuel cycle, decommissioning, and waste economics deepen in [nuclear-fuel-cycle](../../nuclear-fuel-cycle/syllabus.md); the neutron-damage, lifetime, and low-activation-steel story (the true availability ceiling) is the whole subject of [nuclear-materials](../../nuclear-materials/syllabus.md).
- **Sideways (power engineering & economics):** downstream of the blanket, a fusion plant *is* a Rankine steam cycle — the thermal-to-electric efficiency $\eta$, the turbine hall, and the $1/a$ availability scaling are shared with every fission and fossil plant. The recirculating-power and LCOE reasoning is standard power-systems economics wearing a plasma-physics hat; the capital-cost-dominated $\text{LCOE}\propto1/a$ result is exactly the lever that makes or breaks fission too.
