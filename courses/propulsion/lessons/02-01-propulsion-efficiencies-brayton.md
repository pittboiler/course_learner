# Propulsion · Lesson 2.1: Propulsion efficiencies and the Brayton foundation

> ⏱ ~15 min · Module 2: Air-breathing engines · Builds on: [1.1 Thrust and the momentum equation](01-01-thrust-momentum-equation.md), [`engineering-thermodynamics` 4.3](../../engineering-thermodynamics/lessons/04-03-brayton-gas-turbine-cycle.md) · Unlocks: [2.2 The ideal ramjet](02-02-ideal-ramjet.md), [2.4 The turbojet cycle](02-04-turbojet-cycle.md), [2.5 The turbofan](02-05-turbofan-bypass.md)

## Why this matters

An air-breathing engine does two entirely separate jobs badly, and you have to grade them separately to understand anything.

**First it converts chemical energy into kinetic energy of a jet** — that is a thermodynamic cycle, and it is graded by **thermal efficiency**. **Then it converts that jet's kinetic energy into useful propulsive work** — that is a momentum-exchange problem, and it is graded by **[propulsive efficiency](../reference.md#propulsive-efficiency)**.

Their product is the overall efficiency, and here is the thing that makes propulsion interesting: **the two work against each other.** Making the jet faster improves the cycle and destroys the propulsive efficiency; making it slower does the reverse. **Every engine architecture in this module — turbojet, turbofan, turboprop, ramjet — is a different resolution of that single conflict.**

This lesson defines the three efficiencies, reloads the Brayton cycle that underlies all of them, and shows the trade quantitatively. It is the frame through which the rest of Module 2 should be read.

## The idea

**Thermal efficiency: how much of the fuel became jet kinetic energy?** The engine burns fuel at a rate $\dot m_fQ_R$ and adds kinetic energy to the airstream at a rate $\tfrac12\dot m_eu_e^2-\tfrac12\dot m_aV_\infty^2$. The ratio is the cycle's report card, and for a gas turbine it is essentially the Brayton efficiency.

**Propulsive efficiency: how much of that jet energy became thrust work?** Useful power is $FV_\infty$; the jet's energy is what the cycle delivered. The gap is **kinetic energy left behind in the wake** — air that the engine sped up and then abandoned.

**And that gap is unavoidable.** To make thrust you must give the air a velocity *change*; the air departs carrying $\tfrac12\dot m(u_e-V_\infty)^2$ of energy relative to the atmosphere, and that energy is simply lost.

**Which gives the central formula: $\eta_p = 2/(1+u_e/V_\infty)$.** It equals 1 only when $u_e = V_\infty$ — at which point the thrust is zero. **You cannot have perfect propulsive efficiency and thrust at the same time.**

**So make the thrust from a lot of air moving slowly.** $F = \dot m(u_e-V_\infty)$ can be delivered by a small $\dot m$ with a big $\Delta u$ or a large $\dot m$ with a small one — and the second is far more efficient, because the wasted energy goes as $\Delta u^2$ while the thrust goes as $\Delta u$.

**That is the entire case for the turbofan**, and for the propeller before it, and it is why a helicopter has a huge rotor while a rocket has a small nozzle. **The penalty is size**: a large $\dot m$ means a large frontal area, which means weight and drag.

**Meanwhile the cycle wants high pressure ratio and high turbine temperature.** Brayton efficiency rises with pressure ratio; the work available rises with turbine-inlet temperature. **Those are the two numbers that define a gas-turbine generation**, and both are limited by materials.

## The formal version

**The three efficiencies.**

$$\boxed{\;\eta_{\rm th} = \frac{\tfrac12\dot m_eu_e^2-\tfrac12\dot m_aV_\infty^2}{\dot m_fQ_R}, \qquad \eta_p = \frac{FV_\infty}{\tfrac12\dot m_eu_e^2-\tfrac12\dot m_aV_\infty^2}, \qquad \eta_o = \eta_{\rm th}\eta_p = \frac{FV_\infty}{\dot m_fQ_R}.\;}$$

*In words: thermal is fuel-to-jet, propulsive is jet-to-thrust, overall is fuel-to-useful-work.*

**Propulsive efficiency, closed form.** Neglecting the fuel mass ($f\ll1$), $F = \dot m(u_e-V_\infty)$ and the jet power is $\tfrac12\dot m(u_e^2-V_\infty^2)$, so

$$\boxed{\;\eta_p = \frac{\dot m\left(u_e-V_\infty\right)V_\infty}{\tfrac12\dot m\left(u_e^2-V_\infty^2\right)} = \frac{2V_\infty}{u_e+V_\infty} = \frac{2}{1+u_e/V_\infty}.\;}$$

| $u_e/V_\infty$ | 1 | 1.5 | 2 | 2.4 | 3.6 | 5 |
|---|---|---|---|---|---|---|
| $\eta_p$ | 1.00 | 0.80 | 0.67 | 0.59 | 0.435 | 0.33 |
| Thrust | **zero** | | | turbofan | turbojet | |

**Specific thrust and TSFC.**

$$\boxed{\;\frac{F}{\dot m_a} = \left(1+f\right)u_e-V_\infty\ \ \mathrm{(m/s)}, \qquad \mathrm{TSFC} = \frac{\dot m_f}{F} = \frac{f}{F/\dot m_a}\ \ \mathrm{(kg/(N\cdot s))}.\;}$$

TSFC is usually quoted in kg/(N·h) — multiply by 3600. Typical values: turbojet $0.10$–$0.11$, low-bypass turbofan $0.08$, high-bypass turbofan $0.055$–$0.065$ kg/(N·h).

**Note the relation between them:**

$$\mathrm{TSFC} = \frac{V_\infty}{\eta_oQ_R},$$

so **at a fixed flight speed, minimizing fuel burn is exactly maximizing overall efficiency.**

**The Brayton cycle, reloaded.** The ideal air-standard Brayton cycle — isentropic compression, constant-pressure heat addition, isentropic expansion, constant-pressure heat rejection — has

$$\boxed{\;\eta_{\rm Brayton} = 1-\frac{1}{r_p^{(\gamma-1)/\gamma}},\;}$$

with $r_p$ the overall pressure ratio. *(Derived in [`engineering-thermodynamics` 4.3](../../engineering-thermodynamics/lessons/04-03-brayton-gas-turbine-cycle.md); reloaded here.)*

| $r_p$ | 10 | 20 | 30 | 40 |
|---|---|---|---|---|
| $\eta_{\rm Brayton}$ | 0.482 | 0.575 | 0.622 | 0.651 |

**Two things a jet engine adds to the textbook cycle.** First, the **ram compression** of the inlet contributes to $r_p$ for free — at $M = 0.85$ that is a factor of about 1.6, and at $M = 2$ a factor of 7.8. Second, the cycle's work output is not shaft work but **kinetic energy of the exhaust**, so the turbine extracts only what the compressor needs and the nozzle takes the rest.

**Turbine-inlet temperature (TIT)** sets how much heat can be added and hence the specific work. Modern engines run 1600–1900 K with cooled blades — above the melting point of the alloy, sustained by film cooling and thermal-barrier coatings. **TIT is the single number that most distinguishes engine generations.**

## Picture

![A two-panel figure. Left: the energy cascade of a jet engine drawn as a Sankey-style diagram. A wide band at the left labelled fuel chemical power splits at a first node into a large branch labelled heat rejected in the exhaust and a smaller branch labelled jet kinetic energy added, with the split fraction annotated as thermal efficiency about 0.45. The jet-kinetic-energy branch then splits at a second node into a branch labelled kinetic energy left behind in the wake and a branch labelled useful propulsive power F times V, with that split annotated as propulsive efficiency. A bracket spanning both nodes marks the surviving fraction as overall efficiency, about 0.20 for a turbojet. Right: propulsive efficiency plotted against the velocity ratio u sub e over V infinity, a curve falling from one at ratio one toward zero at large ratios; four operating points are marked along it — propeller at about 1.1, high-bypass turbofan at about 1.6, low-bypass turbofan at 2.4, and turbojet at 3.6 — with a second, dashed curve rising from left to right labelled specific thrust, and the crossing region shaded and annotated the trade: efficiency and specific thrust pull in opposite directions.](assets/02-01-fig1.svg)

Left: where the fuel's energy actually goes. Two multiplications, and about 80% of the fuel is gone by the end of them.

Right: the trade that organizes the whole of Module 2. Every architecture is a choice of where to sit on this axis.

## Worked examples

**Example 1 (a turbojet, fully graded).** A turbojet ingests $\dot m_a = 50$ kg/s at $V_\infty = 250$ m/s, with fuel/air ratio $f = 0.020$ and heating value $Q_R = 43$ MJ/kg. Its cycle achieves $\eta_{\rm th} = 0.45$.

*What exit velocity does that imply?* The kinetic energy added per kilogram of air is

$$\eta_{\rm th}fQ_R = 0.45(0.020)(43\times10^6) = 387{,}000\ \mathrm{J/kg\ of\ air}.$$

Setting that equal to $\tfrac12(1+f)u_e^2-\tfrac12V_\infty^2$:

$$0.51u_e^2 = 387{,}000+\tfrac12(250)^2 = 387{,}000+31{,}250 = 418{,}250,$$

$$u_e^2 = 820{,}098 \quad\Longrightarrow\quad u_e = 905.6\ \mathrm{m/s}.$$

*Specific thrust and thrust.*

$$\frac{F}{\dot m_a} = 1.020(905.6)-250 = 923.7-250 = 673.7\ \mathrm{m/s}, \qquad F = 50(673.7) = 33.69\ \mathrm{kN}.$$

*The three efficiencies.*

$$\dot m_f = 1.00\ \mathrm{kg/s}, \qquad \dot m_fQ_R = 43.00\ \mathrm{MW},$$

$$\text{jet power added} = 50(387{,}000) = 19.35\ \mathrm{MW}, \qquad \eta_{\rm th} = \frac{19.35}{43.00} = 0.450\ \checkmark$$

$$\text{propulsive power} = FV_\infty = 33{,}685(250) = 8.42\ \mathrm{MW}, \qquad \eta_p = \frac{8.42}{19.35} = 0.435,$$

$$\eta_o = \eta_{\rm th}\eta_p = 0.450(0.435) = 0.196.$$

*(The closed form gives $\eta_p = 2/(1+905.6/250) = 2/4.622 = 0.433$; the 0.5% difference is the fuel mass, which the closed form neglects.)*

*Fuel consumption.*

$$\mathrm{TSFC} = \frac{\dot m_f}{F} = \frac{1.00}{33{,}685} = 2.969\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.1069\ \mathrm{kg/(N\cdot h)}.$$

*Reading it.* Three things:

**Only 20% of the fuel's energy does useful work.** 55% is thrown away as heat in the exhaust (the cycle's loss), and of the 45% that becomes jet kinetic energy, more than half is abandoned as wake energy.

**The propulsive efficiency is the worse of the two**, at 43.5%. The cycle is doing a respectable job; the *jet* is the problem, because it is 3.6 times faster than the aircraft.

**And 0.107 kg/(N·h) is a real turbojet number** — the Olympus 593 on Concorde was about 0.12 in supercritical cruise. This is what a turbojet costs.

**Example 2 (why the fan exists).** An engine must produce $F = 30$ kN at $V_\infty = 250$ m/s. Three ways to do it, all with the same cycle ($\eta_{\rm th} = 0.45$, $Q_R = 43$ MJ/kg), neglecting fuel mass.

$$\dot m_a = \frac{F}{u_e-V_\infty}, \qquad \text{jet power} = \tfrac12\dot m_a\left(u_e^2-V_\infty^2\right), \qquad \dot m_f = \frac{\text{jet power}}{\eta_{\rm th}Q_R}.$$

| Design | $u_e$ | $\dot m_a$ | Specific thrust | Jet power | $\eta_p$ | $\dot m_f$ | TSFC |
|---|---|---|---|---|---|---|---|
| Turbojet | 900 m/s | 46.2 kg/s | 650 m/s | 17.25 MW | 0.435 | 0.892 kg/s | 0.1070 |
| Low-bypass fan | 600 m/s | 85.7 kg/s | 350 m/s | 12.75 MW | 0.588 | 0.659 kg/s | 0.0791 |
| High-bypass fan | 400 m/s | 200.0 kg/s | 150 m/s | 9.75 MW | 0.769 | 0.504 kg/s | 0.0605 |

*(TSFC in kg/(N·h).)*

*Reading it.* This one table contains most of what there is to know about civil aviation:

**The same thrust, from 4.3 times as much air, burns 43% less fuel.** That is the high-bypass turbofan's entire argument, and it is worth restating: **nothing about the cycle changed.** Same thermal efficiency, same fuel, same everything — only how the thrust was packaged.

**The specific thrust collapsed by a factor of 4.3**, from 650 to 150 m/s. A low specific thrust looks like a weakness and is in fact the *symptom* of the efficiency gain.

**The wasted power is what fell.** The turbojet leaves $17.25-7.5 = 9.75$ MW in its wake; the high-bypass fan leaves $9.75-7.5 = 2.25$ MW. **The useful power is identical at 7.5 MW in all three cases** — only the waste changed.

*Why not go further?* Push $u_e$ toward $V_\infty$ and $\eta_p\to1$, but $\dot m_a\to\infty$. The costs that stop you:

**Frontal area and nacelle drag.** 200 kg/s of air at cruise density needs a fan roughly 2.5 m in diameter; 800 kg/s would need 5 m. The nacelle's own drag eventually eats the fuel saving — this is the limit that current bypass ratios of 10–12 are approaching.

**Weight.** A bigger fan, a bigger gearbox or a slower turbine to drive it, a bigger nacelle, and a taller landing gear to give it ground clearance. **The 737's engines are visibly flattened underneath for exactly this reason.**

**Fan tip speed.** A large fan turning fast goes transonic at the blade tips, generating shock losses and noise. Either slow the fan (which needs a geared drive — the Pratt & Whitney PW1000G's answer) or accept the loss.

**And there is a floor on $u_e$ set by flight speed.** At $M = 0.85$ the aircraft is already doing 250 m/s; a jet at 300 m/s produces very little specific thrust and the engine becomes enormous for the thrust it gives. **This is why turboprops, which take the argument to its extreme, are limited to about $M = 0.7$** ([2.6](02-06-turboprop-propeller.md)).

## Watch out

- **You might think a low specific thrust is a defect.** It is the signature of high propulsive efficiency — the reason a high-bypass fan burns less fuel.
- **You might maximize $\eta_p$.** Its maximum, $\eta_p = 1$, occurs at $u_e = V_\infty$, where the thrust is zero. Maximize $\eta_o$, or minimize TSFC.
- **You might forget $\eta_p$ depends on flight speed.** The same engine has a different $\eta_p$ at every Mach number, which is why an engine optimized for cruise is poor at takeoff and vice versa.
- **You might apply $\eta_p = 2/(1+u_e/V_\infty)$ to a rocket.** It assumes an ingested airstream. A rocket's propulsive efficiency peaks at $V_\infty = u_e$ but the formula is different.
- **You might use the Brayton formula with the compressor pressure ratio alone.** The overall cycle pressure ratio includes ram compression, which at $M = 2$ is a factor of 7.8 by itself.
- **You might treat $\eta_{\rm th}$ as fixed.** It rises with pressure ratio and (through the available work) with turbine-inlet temperature; those are the two levers of engine development.
- **You might compare TSFC across flight speeds.** $\mathrm{TSFC} = V_\infty/(\eta_oQ_R)$, so it rises with speed even at constant efficiency. Compare $\eta_o$, or compare TSFC only at the same Mach number.

## One-liner

> An air-breather converts fuel to jet energy (thermal efficiency, a Brayton cycle matter of pressure ratio and turbine temperature) and then jet energy to thrust work (propulsive efficiency, $2/(1+u_e/V_\infty)$) — and because the second improves exactly as the jet slows down while the thrust per kilogram of air falls with it, every engine architecture is a different answer to how much air to move and how gently.

## Problems

**P1 (🟢)** An engine ingests $\dot m_a = 120$ kg/s at $V_\infty = 240$ m/s and exhausts at $u_e = 480$ m/s, with $f = 0.018$ and $Q_R = 43$ MJ/kg. Neglect the fuel mass in the efficiency formulas. (a) Find the thrust and specific thrust. (b) Find $\eta_p$. (c) Find $\eta_{\rm th}$ and $\eta_o$. (d) Find the TSFC in kg/(N·h).

**P2 (🟡)** A gas turbine has a compressor pressure ratio of 28 and flies at $M_\infty = 0.85$ where $T_\infty = 220$ K. (a) Find the ram pressure ratio $p_{0\infty}/p_\infty$ and the overall cycle pressure ratio. (b) Find the ideal Brayton efficiency for the compressor ratio alone and for the overall ratio, and comment. (c) If the turbine-inlet temperature is 1600 K and the compressor exit temperature is 830 K, find the heat added per kg of air ($c_p = 1005$ J/kg·K) and hence $f$ for $Q_R = 43$ MJ/kg. (d) Using $\eta_{\rm th}$ from the overall ratio, estimate $u_e$ and the specific thrust.

**P3 (🔴)** A 30 kN-thrust requirement at $V_\infty = 250$ m/s can be met with any bypass ratio. Take $\eta_{\rm th} = 0.45$, $Q_R = 43$ MJ/kg, and neglect fuel mass. (a) Derive TSFC as a function of $u_e$ alone. (b) Tabulate TSFC and required $\dot m_a$ for $u_e = 1000$, 700, 500, 400, and 320 m/s. (c) A rough model says the nacelle's drag penalty is $D_{\rm nac} = 0.012\,\dot m_a\,V_\infty$ (N, with $\dot m_a$ in kg/s) and the installed thrust is $F-D_{\rm nac}$. Recompute the *installed* TSFC and find the optimum $u_e$. (d) Explain why real engines sit near that optimum rather than at the aerodynamic ideal, and name two constraints the model omits.

<details>
<summary>Solutions</summary>

**P1** (a) $$F = \dot m_a\left[\left(1+f\right)u_e-V_\infty\right] = 120\left[1.018(480)-240\right] = 120\left[488.6-240\right] = 120(248.6) = 29.84\ \mathrm{kN}.$$

$$\frac{F}{\dot m_a} = 248.6\ \mathrm{m/s}.$$

(b) $$\eta_p = \frac{2}{1+u_e/V_\infty} = \frac{2}{1+480/240} = \frac{2}{3} = 0.667.$$

(c) $$\dot m_f = f\dot m_a = 0.018(120) = 2.16\ \mathrm{kg/s}, \qquad \dot m_fQ_R = 2.16(43\times10^6) = 92.88\ \mathrm{MW}.$$

$$\text{jet power} = \tfrac12\dot m_a\left(u_e^2-V_\infty^2\right) = \tfrac12(120)\left(230{,}400-57{,}600\right) = 60(172{,}800) = 10.37\ \mathrm{MW},$$

$$\eta_{\rm th} = \frac{10.37}{92.88} = 0.1116.$$

$$\eta_o = \eta_{\rm th}\eta_p = 0.1116(0.667) = 0.0744.$$

*Check:* $\eta_o = FV_\infty/(\dot m_fQ_R) = 29{,}840(240)/92.88\times10^6 = 7.162/92.88 = 0.0771$.

*(The 3% difference is the fuel-mass term, which part (b)'s closed form dropped.)*

(d) $$\mathrm{TSFC} = \frac{\dot m_f}{F} = \frac{2.16}{29{,}840} = 7.239\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.2606\ \mathrm{kg/(N\cdot h)}.$$

**That is a terrible number** — more than four times a modern turbofan's. The propulsive efficiency is excellent (0.667) but the *thermal* efficiency is only 11%, so the engine is burning far too much fuel for the jet energy it produces. **A fuel/air ratio of 0.018 with an exhaust only twice the flight speed is thermodynamically inconsistent for a real engine** — the numbers describe an engine that adds a great deal of heat and converts almost none of it. This is a useful reminder that the three efficiencies are not independent: the cycle must actually be capable of the exit velocity you assume.

**P2** (a) $$\frac{p_{0\infty}}{p_\infty} = \left(1+0.2M_\infty^2\right)^{3.5} = \left(1+0.2(0.7225)\right)^{3.5} = \left(1.1445\right)^{3.5} = 1.6038.$$

$$r_{p,\rm overall} = 1.6038(28) = 44.9.$$

(b) $$\eta\left(28\right) = 1-28^{-0.28571} = 1-0.3859 = 0.6141,$$
$$\eta\left(44.9\right) = 1-44.9^{-0.28571} = 1-0.3372 = 0.6628.$$

*Comment.* **Ram compression is worth 4.9 efficiency points, for free** — no compressor stages, no work extracted from the turbine, no weight. It is the reason an engine's efficiency improves with flight Mach number, and the reason a ramjet works at all ([2.2](02-02-ideal-ramjet.md)).

**But it is *ideal* Brayton efficiency**, which no real engine reaches. Component losses (compressor and turbine polytropic efficiencies of 0.89–0.92, combustor pressure loss, cooling-air bleed) typically bring a 66% ideal down to about 45% actual — which is the number used in Example 1.

(c) $$q_{\rm added} = c_p\left(T_{04}-T_{03}\right) = 1005(1600-830) = 1005(770) = 773.9\ \mathrm{kJ/kg\ of\ air}.$$

$$f = \frac{q_{\rm added}}{Q_R} = \frac{773{,}900}{43\times10^6} = 0.01800.$$

*(A fuel/air ratio of 0.018 — comfortably lean of the stoichiometric 0.068 for kerosene, as every gas turbine must be to keep the turbine alive; [2.3](02-03-combustion-for-propulsion.md).)*

(d) Using $\eta_{\rm th} = 0.6628$ ideal — knowingly optimistic:

$$\text{KE per kg of air} = \eta_{\rm th}fQ_R = 0.6628(0.018)(43\times10^6) = 513{,}000\ \mathrm{J/kg}.$$

$$\tfrac12(1.018)u_e^2 = 496{,}000+\tfrac12(250.9)^2,$$

with $V_\infty = 0.85\sqrt{1.4(287)(220)} = 0.85(297.3) = 252.7$ m/s:

$$0.509u_e^2 = 513{,}000+31{,}930 = 544{,}930 \quad\Longrightarrow\quad u_e = \sqrt{1{,}070{,}590} = 1034.7\ \mathrm{m/s}.$$

$$\frac{F}{\dot m_a} = 1.018(1034.7)-252.7 = 1053.3-252.7 = 800.6\ \mathrm{m/s}.$$

$$\eta_p = \frac{2}{1+1034.7/252.7} = \frac{2}{5.095} = 0.393, \qquad \eta_o = 0.6628(0.393) = 0.260.$$

**A specific thrust of 801 m/s and an overall efficiency of 26.0%** — recognizably a turbojet, and optimistic by roughly the ratio of ideal to real cycle efficiency. **A real engine of these parameters would show about 550 m/s and 18%.**

**P3** (a) With fuel mass neglected:

$$F = \dot m_a\left(u_e-V_\infty\right), \qquad \dot m_f = \frac{\tfrac12\dot m_a\left(u_e^2-V_\infty^2\right)}{\eta_{\rm th}Q_R}.$$

$$\mathrm{TSFC} = \frac{\dot m_f}{F} = \frac{\tfrac12\left(u_e^2-V_\infty^2\right)}{\eta_{\rm th}Q_R\left(u_e-V_\infty\right)} = \boxed{\frac{u_e+V_\infty}{2\eta_{\rm th}Q_R}.}$$

**A strikingly simple result: TSFC is linear in the exhaust velocity**, and depends on the thrust not at all.

*Sanity check against the general relation.* $\mathrm{TSFC} = V_\infty/(\eta_oQ_R)$ and $\eta_o = \eta_{\rm th}\eta_p = \eta_{\rm th}\cdot2V_\infty/(u_e+V_\infty)$, giving the same expression ✓

(b) With $\eta_{\rm th}Q_R = 0.45(43\times10^6) = 19.35$ MJ/kg and $V_\infty = 250$ m/s:

$$\mathrm{TSFC} = \frac{u_e+250}{38.7\times10^6}\ \mathrm{kg/(N\cdot s)}, \qquad \dot m_a = \frac{30{,}000}{u_e-250}.$$

| $u_e$ (m/s) | $\dot m_a$ (kg/s) | TSFC kg/(N·s) | TSFC kg/(N·h) |
|---|---|---|---|
| 1000 | 40.0 | $3.230\times10^{-5}$ | 0.1163 |
| 700 | 66.7 | $2.455\times10^{-5}$ | 0.0884 |
| 500 | 120.0 | $1.938\times10^{-5}$ | 0.0698 |
| 400 | 200.0 | $1.680\times10^{-5}$ | 0.0605 |
| 320 | 428.6 | $1.473\times10^{-5}$ | 0.0530 |

**TSFC falls monotonically as $u_e$ falls, with no optimum** — the uninstalled model says make the fan infinitely large.

(c) *Installed thrust.* $D_{\rm nac} = 0.012\dot m_aV_\infty = 3.0\dot m_a$ (N), and

$$F_{\rm inst} = 30{,}000-3.0\dot m_a, \qquad \mathrm{TSFC}_{\rm inst} = \frac{\dot m_f}{F_{\rm inst}}.$$

With $\dot m_f = \mathrm{TSFC}\times30{,}000$:

| $u_e$ | $\dot m_a$ | $D_{\rm nac}$ (N) | $F_{\rm inst}$ (N) | $\dot m_f$ (kg/s) | TSFC$_{\rm inst}$ kg/(N·h) |
|---|---|---|---|---|---|
| 1000 | 40.0 | 120 | 29,880 | 0.9690 | 0.1167 |
| 700 | 66.7 | 200 | 29,800 | 0.7364 | 0.0890 |
| 500 | 120.0 | 360 | 29,640 | 0.5814 | 0.0706 |
| **400** | **200.0** | **600** | **29,400** | **0.5039** | **0.0617** |
| 350 | 300.0 | 900 | 29,100 | 0.4651 | 0.0575 |
| 320 | 428.6 | 1286 | 28,714 | 0.4419 | 0.0554 |
| 300 | 600.0 | 1800 | 28,200 | 0.4264 | 0.0544 |
| 285 | 857.1 | 2571 | 27,429 | 0.4147 | 0.0544 |
| 275 | 1200.0 | 3600 | 26,400 | 0.4070 | 0.0555 |

**The optimum is broad and sits near $u_e\approx290$ m/s**, at TSFC$_{\rm inst}\approx0.0544$ kg/(N·h) — barely better than $u_e = 320$, and rising again below about 280 m/s as the nacelle drag overwhelms the efficiency gain.

*The structure of the answer.* The uninstalled TSFC falls linearly in $u_e$; the nacelle penalty grows as $\dot m_a\propto1/(u_e-V_\infty)$, which **diverges** as $u_e\to V_\infty$. A linearly falling benefit against a hyperbolically growing cost always has an interior optimum, and it always sits well short of the ideal.

(d) *Why real engines sit near the optimum, not at the ideal.* Because the ideal is unreachable in principle: as $u_e\to V_\infty$ the required mass flow diverges, and *any* cost proportional to mass flow — drag, weight, or cost — turns the monotone curve into one with a minimum. **The optimum is not a compromise imposed on the physics; it is what the physics says once installation is included.**

Real high-bypass turbofans have $u_e/V_\infty\approx1.5$–$1.7$ at cruise, i.e. $u_e\approx375$–$425$ m/s at $V_\infty = 250$ — a little to the high side of this model's optimum, for reasons the model omits.

*Two constraints the model omits.*

**Weight.** The nacelle penalty here is pure drag. A 600 kg/s fan is not just draggy, it is *heavy* — the fan disc, containment casing, gearbox, and pylon all scale with diameter, and every kilogram must be lifted for the whole flight. A proper accounting charges induced drag on the extra lift as well, which shifts the optimum toward higher $u_e$ (smaller engines).

**Ground clearance and installation.** A fan of the diameter this model wants will not fit under a wing without lengthening the landing gear, which is heavy and cascades through the airframe. The Boeing 737's engine diameter has been constrained by ground clearance for fifty years, and the flat-bottomed nacelle of the 737-800 and the forward-mounted engines of the MAX are both direct consequences.

*Two more worth naming.* **Fan tip Mach number**, which forces either a slow fan (hence a gearbox) or shock losses; and **thrust at takeoff and top-of-climb**, which are sized by different conditions than cruise and often set the fan diameter regardless of what cruise TSFC would prefer.

</details>

## Flashback

**From Lesson 1.4 (Nozzle performance):** An engine has $c^* = 1780$ m/s and $C_F = 1.62$ at sea level, with $p_0 = 7.5$ MPa and $A_t = 0.032$ m². (a) Find the thrust. (b) Find the mass flow. (c) Find $v_e$ and $I_{sp}$. (d) What does each of the two factors measure?

<details>
<summary>Solution</summary>

(a) $$F = C_Fp_0A_t = 1.62\left(7.5\times10^6\right)(0.032) = 1.62(240{,}000) = 388.8\ \mathrm{kN}.$$

(b) $$\dot m = \frac{p_0A_t}{c^*} = \frac{240{,}000}{1780} = 134.8\ \mathrm{kg/s}.$$

(c) $$v_e = c^*C_F = 1780(1.62) = 2883.6\ \mathrm{m/s}, \qquad I_{sp} = \frac{2883.6}{9.80665} = 294.0\ \mathrm{s}.$$

*Check:* $F/\dot m = 388{,}800/134.8 = 2884$ m/s ✓

(d) **$c^*$ measures the chamber and the propellant** — it is $\sqrt{RT_0}/\Gamma$, so it captures combustion temperature and exhaust molecular weight, and nothing about the nozzle. **$C_F$ measures the nozzle and the altitude** — it depends on $\gamma$, the area ratio, and $p_a/p_0$, and nothing about the propellant's energy content.

*The bridge to this lesson.* Notice that a rocket's performance factors into **two** numbers while an air-breather's factors into **three**. The extra one is propulsive efficiency, and its absence from the rocket accounting is not an oversight.

**A rocket has no ingested airstream**, so there is no $\eta_p = 2/(1+u_e/V_\infty)$ to compute — the propellant starts at rest relative to the vehicle, and the exhaust velocity is a property of the engine rather than a design variable traded against mass flow. **A rocket engineer maximizes $u_e$ without limit; an air-breathing engineer must not.**

That single difference is why the two halves of this course look so different:

| | Rocket | Air-breather |
|---|---|---|
| Performance factors | $c^*\times C_F$ | $\eta_{\rm th}\times\eta_p$ |
| Want $u_e$ | as high as possible | close to $V_\infty$ |
| Limited by | chemistry and nozzle size | frontal area and weight |
| Fuel metric | $I_{sp}$ | TSFC |

**And the rocket's freedom is bought at a price**: it must carry its oxidizer, which is typically three times the fuel mass. **The air-breather's constraint is the flip side of not having to.**

</details>

## Connections

- **Backward:** the thrust equation and specific thrust are [1.1](01-01-thrust-momentum-equation.md)'s; the Brayton cycle and its efficiency are [`engineering-thermodynamics` 4.3](../../engineering-thermodynamics/lessons/04-03-brayton-gas-turbine-cycle.md)'s, *reloaded* here; the stagnation relations behind ram compression are [1.2](01-02-compressible-flow-nozzles.md)'s.
- **Forward:** [2.2](02-02-ideal-ramjet.md) removes the compressor entirely and lets ram do all the work; [2.4](02-04-turbojet-cycle.md) runs a full station-by-station cycle; [2.5](02-05-turbofan-bypass.md) is Example 2 made into an engine; [2.6](02-06-turboprop-propeller.md) takes the low-$u_e$ argument to its limit.
- **Sideways:** $\eta_p = 2/(1+u_e/V_\infty)$ is the **actuator-disc** result, and it is the same algebra as the Betz analysis of a wind turbine run backwards — a propeller and a turbine are the same device with the sign of the energy flow reversed. The "large mass flow, small velocity change" principle recurs wherever momentum must be exchanged efficiently: rotor diameter in helicopters, wing span in [`aerodynamics` 2.6](../../aerodynamics/lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md) (where induced drag falls as span grows for exactly this reason), and the size of a ship's propeller.
