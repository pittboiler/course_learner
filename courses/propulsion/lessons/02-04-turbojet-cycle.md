# Propulsion · Lesson 2.4: The turbojet cycle

> ⏱ ~15 min · Module 2: Air-breathing engines · Builds on: [2.1 Propulsion efficiencies](02-01-propulsion-efficiencies-brayton.md), [2.3 Combustion for propulsion](02-03-combustion-for-propulsion.md) · Unlocks: [2.5 The turbofan and the bypass idea](02-05-turbofan-bypass.md), [2.6 The turboprop](02-06-turboprop-propeller.md)

## Why this matters

The ramjet showed what ram compression alone can do. It cannot do anything at rest, and below $M = 3$ it does not do enough. **The turbojet fixes that by adding a compressor** — and pays for it with a turbine.

This lesson runs the cycle station by station: inlet, compressor, burner, turbine, nozzle. It is the first analysis in the course where you compute a complete engine from scratch, and the procedure — **work backwards from the turbine-inlet temperature and forwards from the flight condition, and let the compressor–turbine work match close the loop** — is the same for every gas turbine in Module 2.

**The payoff is a design map.** Two knobs, compressor pressure ratio and turbine-inlet temperature, and they push specific thrust and fuel consumption in *opposite* directions. Understanding which way each one moves is what lets you read any engine's spec sheet and say what it was optimized for.

## The idea

**The compressor supplies the pressure ratio the flight speed cannot.** At $M = 0.85$ ram gives a factor of 1.6; a 30:1 compressor makes it 48. **The whole point of the turbomachinery is to put a ramjet's high-Mach cycle into a subsonic aircraft.**

**But the compressor needs driving, and the only energy source is the hot gas.** So a turbine is placed immediately behind the burner and extracts exactly the compressor's work — no more, no less. **That equality is the constraint that closes the cycle**, and it is the single most useful equation in gas-turbine analysis.

**Which means the turbine takes a large bite before the nozzle sees anything.** In the example below, the gas enters the turbine at 1600 K and leaves at 1186 K — the turbine has consumed 414 K of the 935 K the burner added. **The nozzle gets what is left.**

**And the turbine is also what caps the burner.** Because the turbine's first-stage blades sit directly in the burner exhaust, $T_{04}$ is limited by metallurgy to 1600–1900 K, which is why a turbojet runs at $\phi\approx0.3$ ([2.3](02-03-combustion-for-propulsion.md)).

**Now the two design knobs, and they conflict.** Raising the **pressure ratio** improves the cycle efficiency — more of the fuel becomes work — but it also raises the compressor exit temperature, leaving less room to add heat before the turbine limit. **Fuel consumption improves; specific thrust falls.**

**Raising the turbine-inlet temperature does the reverse.** More heat can be added, so the jet is faster and the engine is more powerful for its size — but the faster jet has worse propulsive efficiency, and the extra heat is added at a *lower* effective pressure ratio. **Specific thrust rises; fuel consumption worsens.**

**Those two facts explain the whole civil/military divide.** An airliner wants low TSFC and will accept a big engine: high $r_p$, moderate TIT. A fighter wants thrust per unit frontal area and will accept the fuel bill: moderate $r_p$, TIT as high as the alloys allow.

## The formal version

**Station numbering** (standard, and worth memorizing):

| Station | Location |
|---|---|
| $\infty$ (or 0) | free stream |
| 2 | compressor face (inlet exit) |
| 3 | compressor exit / burner entry |
| 4 | burner exit / turbine entry |
| 5 | turbine exit / nozzle entry |
| $e$ (or 9) | nozzle exit |

**Ideal-cycle assumptions.** Isentropic inlet, compressor, turbine, and nozzle; constant-pressure combustion; perfectly expanded nozzle ($p_e = p_\infty$); calorically perfect gas throughout.

**The five steps.**

**1. Inlet (ram).**

$$\tau_r = \frac{T_{02}}{T_\infty} = 1+\frac{\gamma-1}{2}M_\infty^2, \qquad p_{0\infty} = p_\infty\tau_r^{\gamma/(\gamma-1)}, \qquad T_{02} = T_\infty\tau_r.$$

**2. Compressor.**

$$\tau_c = \frac{T_{03}}{T_{02}} = \pi_c^{(\gamma-1)/\gamma}, \qquad p_{03} = \pi_cp_{0\infty}.$$

**3. Burner.**

$$\boxed{\;f = \frac{c_p\left(T_{04}-T_{03}\right)}{Q_R},\;}$$

with $T_{04}$ the design turbine-inlet temperature and $p_{04} = p_{03}$.

**4. Turbine — the work match.**

$$\boxed{\;\underbrace{\left(1+f\right)c_p\left(T_{04}-T_{05}\right)}_{\text{turbine work}} = \underbrace{c_p\left(T_{03}-T_{02}\right)}_{\text{compressor work}}\;}$$

$$\Longrightarrow\quad T_{05} = T_{04}-\frac{T_{03}-T_{02}}{1+f}\approx T_{04}-\left(T_{03}-T_{02}\right), \qquad p_{05} = p_{04}\left(\frac{T_{05}}{T_{04}}\right)^{\gamma/(\gamma-1)}.$$

*In words: whatever the compressor took, the turbine must give back — and nothing more, because a turbojet has no other shaft load.*

**5. Nozzle.** Expanding isentropically to $p_e = p_\infty$:

$$T_e = T_{05}\left(\frac{p_\infty}{p_{05}}\right)^{(\gamma-1)/\gamma}, \qquad \boxed{\;u_e = \sqrt{2c_p\left(T_{05}-T_e\right)}.\;}$$

**Performance.**

$$\boxed{\;\frac{F}{\dot m_a} = \left(1+f\right)u_e-V_\infty, \qquad \mathrm{TSFC} = \frac{f}{F/\dot m_a}, \qquad \eta_o = \frac{\left(F/\dot m_a\right)V_\infty}{fQ_R}.\;}$$

**Design trends** (from the worked example, $M_\infty = 0.85$, $T_\infty = 220$ K):

| Vary $\pi_c$ (at $T_{04} = 1700$ K) | $F/\dot m_a$ | TSFC | $\eta_o$ |
|---|---|---|---|
| 20 | 995.6 m/s | 0.0936 | 0.226 |
| 25 | 995.0 | 0.0903 | 0.234 |
| 30 | 991.4 | 0.0878 | 0.241 |
| 40 | 979.6 | 0.0840 | 0.252 |
| 50 | 965.4 | 0.0811 | 0.261 |

| Vary $T_{04}$ (at $\pi_c = 25$) | $F/\dot m_a$ | TSFC | $\eta_o$ |
|---|---|---|---|
| 1400 K | 807.1 m/s | 0.0801 | 0.264 |
| 1600 K | 935.2 | 0.0871 | 0.243 |
| 1700 K | 995.0 | 0.0903 | 0.234 |
| 1800 K | 1052.7 | 0.0934 | 0.227 |
| 2000 K | 1162.3 | 0.0991 | 0.214 |

*(TSFC in kg/(N·h).)*

**Read the two tables side by side and the design tension is explicit: the columns move in opposite directions.**

## Picture

![A two-panel figure. Left: a turbojet drawn in cross-section with the five stations numbered along it — inlet, compressor, burner, turbine, nozzle — above a temperature-entropy diagram of the same cycle. The T-s diagram shows the ram compression from free stream to station 2 along an isentrope, the compressor from 2 to 3 along the same isentrope, constant-pressure heat addition from 3 to 4, turbine expansion from 4 to 5, and nozzle expansion from 5 to the exit, with two constant-pressure lines drawn for the free-stream and compressor-exit pressures. The turbine drop from 4 to 5 is bracketed and labelled equals the compressor rise from 2 to 3, the work match, and the remaining drop from 5 to the exit is bracketed and labelled what the nozzle gets. Right: a design map with specific thrust on the horizontal axis and thrust-specific fuel consumption on the vertical, showing a grid of curves — lines of constant compressor pressure ratio running one way and lines of constant turbine-inlet temperature running the other — forming a lattice; the lower-left corner is labelled good on both counts, unreachable, an airliner symbol is placed low and to the left on a high-pressure-ratio line, and a fighter symbol high and to the right on a high-temperature line.](assets/02-04-fig1.svg)

Left: the cycle, and where the turbine's bite comes out of it.

Right: the design map. Every real engine is a point on this lattice, and which corner it sits in is a mission decision.

## Worked examples

**Example 1 (a complete ideal turbojet).** $M_\infty = 0.85$, $T_\infty = 220$ K, $p_\infty = 22.6$ kPa, $\pi_c = 25$, $T_{04} = 1700$ K, $Q_R = 43$ MJ/kg, $\gamma = 1.4$, $c_p = 1005$ J/(kg·K).

*Step 1 — inlet.*

$$a_\infty = \sqrt{1.4(287)(220)} = 297.3\ \mathrm{m/s}, \qquad V_\infty = 0.85(297.3) = 252.7\ \mathrm{m/s},$$

$$\tau_r = 1+0.2(0.7225) = 1.1445, \qquad T_{02} = 220(1.1445) = 251.8\ \mathrm{K},$$

$$p_{0\infty} = 22.6\left(1.1445\right)^{3.5} = 22.6(1.6038) = 36.25\ \mathrm{kPa}.$$

*Step 2 — compressor.*

$$\tau_c = 25^{2/7} = 2.5085, \qquad T_{03} = 251.8(2.5085) = 631.6\ \mathrm{K}, \qquad p_{03} = 25(36.25) = 906.2\ \mathrm{kPa}.$$

*Step 3 — burner.*

$$f = \frac{1005(1700-631.6)}{43\times10^6} = \frac{1005(1068.4)}{43\times10^6} = \frac{1{,}073{,}742}{43\times10^6} = 0.02497.$$

*Step 4 — turbine (work match).*

$$T_{04}-T_{05} = \frac{T_{03}-T_{02}}{1+f} = \frac{631.6-251.8}{1.02497} = \frac{379.8}{1.02497} = 370.6\ \mathrm{K},$$

$$T_{05} = 1700-370.6 = 1329.4\ \mathrm{K}, \qquad p_{05} = 906.2\left(\frac{1329.4}{1700}\right)^{3.5} = 906.2(0.42291) = 383.2\ \mathrm{kPa}.$$

*Step 5 — nozzle.*

$$T_e = 1329.4\left(\frac{22.6}{383.2}\right)^{2/7} = 1329.4\left(0.058977\right)^{0.28571} = 1329.4(0.44541) = 592.1\ \mathrm{K},$$

$$u_e = \sqrt{2(1005)(1329.4-592.1)} = \sqrt{2010(737.3)} = \sqrt{1{,}481{,}973} = 1217.4\ \mathrm{m/s}.$$

*(Exit Mach number: $u_e/\sqrt{\gamma RT_e} = 1217.4/487.8 = 2.50$ — supersonic, so this engine needs a convergent–divergent nozzle to be perfectly expanded. Most subsonic turbojets use a simple convergent nozzle and run choked and under-expanded, giving up a few percent.)*

*Performance.*

$$\frac{F}{\dot m_a} = 1.02497(1217.4)-252.7 = 1247.8-252.7 = 995.0\ \mathrm{m/s},$$

$$\mathrm{TSFC} = \frac{0.02497}{995.0} = 2.510\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.0903\ \mathrm{kg/(N\cdot h)}.$$

*Efficiencies.*

$$\text{KE added per kg air} = \tfrac12(1.02497)(1217.4)^2-\tfrac12(252.7)^2 = 759{,}480-31{,}930 = 727{,}550\ \mathrm{J/kg},$$

$$\eta_{\rm th} = \frac{727{,}550}{0.02497(43\times10^6)} = \frac{727{,}550}{1{,}073{,}700} = 0.678,$$

$$\eta_p = \frac{995.0(252.7)}{727{,}550} = \frac{251{,}430}{727{,}550} = 0.346, \qquad \eta_o = 0.678(0.346) = 0.234.$$

*Cross-check against Brayton.* Overall pressure ratio $= 25(1.6038) = 40.1$, giving

$$\eta_{\rm Brayton} = 1-40.1^{-2/7} = 0.652,$$

which also equals $1-T_\infty/T_{03} = 1-220/631.6 = 0.652$. **The 0.678 from the energy accounting is slightly higher because it credits the fuel mass, which the air-standard cycle ignores.**

*Reading it.* **A 23.4% overall efficiency and 0.090 kg/(N·h)** — recognizably a good turbojet, better than the 20% of [2.1](02-01-propulsion-efficiencies-brayton.md)'s example because the pressure ratio here is high and the cycle ideal.

**And $\eta_p = 0.346$ is the weak link**, as it always is for a turbojet: the jet at 1217 m/s is 4.8 times faster than the aircraft. **The cycle is excellent and the packaging is poor** — which is precisely the opening for the turbofan ([2.5](02-05-turbofan-bypass.md)).

**Example 2 (the two knobs, and why they fight).** Take the same flight condition and vary each parameter alone.

*Raising the pressure ratio from 25 to 50:*

| | $\pi_c = 25$ | $\pi_c = 50$ |
|---|---|---|
| $T_{03}$ | 632 K | 770 K |
| $f$ | 0.02497 | 0.02174 |
| $u_e$ | 1217 m/s | 1192 m/s |
| $F/\dot m_a$ | 995.0 m/s | 965.4 m/s |
| TSFC | 0.0903 | **0.0811** |
| $\eta_o$ | 0.234 | **0.261** |

**Fuel consumption improves 10%; specific thrust falls 3%.**

*Why.* Higher $\pi_c$ raises $T_{03}$, so with $T_{04}$ fixed by the turbine there is **less temperature headroom for the burner** — $f$ falls from 0.0250 to 0.0217. Less heat added means a slower jet and less thrust per kilogram of air. But the heat that *is* added is added at a higher pressure, so a larger fraction of it becomes work. **You are burning less fuel and using it better.**

*Raising the turbine-inlet temperature from 1700 to 2000 K:*

| | $T_{04} = 1700$ K | $T_{04} = 2000$ K |
|---|---|---|
| $f$ | 0.02497 | 0.03198 |
| $u_e$ | 1217 m/s | 1371 m/s |
| $F/\dot m_a$ | 995.0 m/s | **1162.3 m/s** |
| TSFC | 0.0903 | 0.0991 |
| $\eta_p$ | 0.346 | 0.313 |
| $\eta_o$ | 0.234 | 0.214 |

**Specific thrust rises 17%; fuel consumption worsens 10%.**

*Why.* More heat can be added, so the jet is faster and the engine is more powerful for its size. But the extra heat goes in at the *end* of the burner, where the pressure is no higher than before — so it is added at the same pressure ratio and converted no more efficiently — while the faster jet has **worse propulsive efficiency** ($\eta_p$ falls from 0.346 to 0.313).

*The synthesis.* The two knobs are not interchangeable:

$$\pi_c\ \text{buys efficiency and costs thrust density}; \qquad T_{04}\ \text{buys thrust density and costs efficiency}.$$

**A real design uses both, and the ratio between them is the mission statement.**

*How that plays out in practice.* A civil engine wants low TSFC — fuel is 25–30% of an airline's operating cost — so it runs the highest pressure ratio the compressor technology allows (modern cores reach $\pi_c\approx50$) and a moderate TIT set by blade life, since a civil engine must run 20,000 hours between overhauls.

A military engine wants thrust per unit frontal area — drag and installed volume dominate a fighter — so it accepts a lower $\pi_c$ and pushes TIT to the alloy limit and beyond with elaborate cooling, accepting a hot-section life measured in hundreds of hours.

**And both would rather raise TIT if they could raise it for free**, because raising $T_{04}$ *and* $\pi_c$ together moves along the good diagonal of the design map — more thrust and better efficiency at once. **That is what every generation of turbine-material development actually buys**, and it is why single-crystal blades, thermal-barrier coatings, and film cooling have been the central technologies of jet propulsion for fifty years.

## Watch out

- **You might forget the work match.** The turbine's temperature drop is set by the compressor's rise, not by anything downstream. It is the equation that closes the cycle.
- **You might drop the $(1+f)$ in the turbine work.** It is a 2% correction, worth including in a careful analysis and safe to drop in a sketch.
- **You might assume the nozzle is perfectly expanded.** A simple convergent nozzle chokes and runs under-expanded; getting $p_e = p_\infty$ at $M_e = 2.5$ requires a convergent–divergent nozzle.
- **You might use cold-air $c_p$ throughout.** A careful analysis uses $c_p\approx1005$ before the burner and $\approx1150$ after; using 1005 everywhere is the standard first approximation and is what these numbers assume.
- **You might expect higher pressure ratio to always be better.** It improves TSFC but reduces specific thrust, and there is a pressure ratio beyond which the specific thrust becomes uselessly small for a given TIT.
- **You might compare TSFC between engines at different flight speeds.** $\mathrm{TSFC} = V_\infty/(\eta_oQ_R)$, so it rises with speed even at constant efficiency.
- **You might treat these as real numbers.** The ideal cycle neglects component losses; a real engine of these parameters shows about 10–15% worse TSFC and 10% less specific thrust.

## One-liner

> Add a compressor to supply the pressure ratio flight speed cannot, pay for it with a turbine that must return exactly the compressor's work, and the cycle closes — leaving two knobs that fight each other: pressure ratio buys fuel efficiency at the cost of thrust density, turbine temperature buys thrust density at the cost of fuel efficiency, and only better turbine materials move both at once.

## Problems

**P1 (🟢)** A turbojet flies at $M_\infty = 0.8$ where $T_\infty = 230$ K, with $\pi_c = 20$. Take $\gamma = 1.4$, $c_p = 1005$ J/(kg·K). (a) Find $V_\infty$, $\tau_r$, and $T_{02}$. (b) Find $\tau_c$ and $T_{03}$. (c) With $T_{04} = 1500$ K and $Q_R = 43$ MJ/kg, find $f$. (d) Find $T_{05}$ from the work match.

**P2 (🟡)** Continue P1. The free-stream pressure is $p_\infty = 26.5$ kPa. (a) Find $p_{0\infty}$, $p_{03}$, and $p_{05}$. (b) Find $T_e$ for a perfectly expanded nozzle and hence $u_e$. (c) Find the specific thrust and TSFC in kg/(N·h). (d) Find $\eta_{\rm th}$, $\eta_p$, and $\eta_o$.

**P3 (🔴)** *(Boss problem 2.)* An ideal turbojet flies at Mach $0.85$ where the ambient temperature is $220$ K. The compressor pressure ratio is $30$, the turbine-inlet temperature is $1600$ K, and the fuel heating value is $43$ MJ/kg (take $\gamma = 1.4$, $c_p = 1.005$ kJ/kg·K). Working through the stations, find (a) the specific thrust $F/\dot m_a$, (b) the fuel/air ratio and the thrust-specific fuel consumption, and (c) the thermal, propulsive, and overall efficiencies. Then state which single parameter you would change to cut fuel burn, and why it hurts specific thrust.

<details>
<summary>Solutions</summary>

**P1** (a) $$a_\infty = \sqrt{1.4(287)(230)} = \sqrt{92{,}414} = 304.0\ \mathrm{m/s}, \qquad V_\infty = 0.8(304.0) = 243.2\ \mathrm{m/s}.$$

$$\tau_r = 1+0.2(0.64) = 1.1280, \qquad T_{02} = 230(1.1280) = 259.4\ \mathrm{K}.$$

(b) $$\tau_c = 20^{2/7} = e^{0.28571\ln20} = e^{0.28571(2.99573)} = e^{0.85592} = 2.3535,$$

$$T_{03} = 259.4(2.3535) = 610.6\ \mathrm{K}.$$

(c) $$f = \frac{1005(1500-610.6)}{43\times10^6} = \frac{1005(889.4)}{43\times10^6} = \frac{893{,}847}{43\times10^6} = 0.02079.$$

(d) $$T_{04}-T_{05} = \frac{T_{03}-T_{02}}{1+f} = \frac{610.6-259.4}{1.02079} = \frac{351.2}{1.02079} = 344.0\ \mathrm{K},$$

$$T_{05} = 1500-344.0 = 1156.0\ \mathrm{K}.$$

**P2** (a) $$p_{0\infty} = 26.5\left(1.1280\right)^{3.5} = 26.5(1.5243) = 40.40\ \mathrm{kPa},$$

$$p_{03} = 20(40.40) = 807.9\ \mathrm{kPa},$$

$$p_{05} = 807.9\left(\frac{1156.0}{1500}\right)^{3.5} = 807.9\left(0.77067\right)^{3.5} = 807.9(0.40181) = 324.6\ \mathrm{kPa}.$$

(b) $$T_e = 1156.0\left(\frac{26.5}{324.6}\right)^{2/7} = 1156.0\left(0.081634\right)^{0.28571} = 1156.0(0.48877) = 565.0\ \mathrm{K},$$

$$u_e = \sqrt{2(1005)(1156.0-565.0)} = \sqrt{2010(591.0)} = \sqrt{1{,}187{,}910} = 1089.9\ \mathrm{m/s}.$$

(c) $$\frac{F}{\dot m_a} = 1.02079(1089.9)-243.2 = 1112.6-243.2 = 869.4\ \mathrm{m/s},$$

$$\mathrm{TSFC} = \frac{0.02079}{869.4} = 2.391\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.0861\ \mathrm{kg/(N\cdot h)}.$$

(d) $$\text{KE added} = \tfrac12(1.02079)(1089.9)^2-\tfrac12(243.2)^2 = 606{,}270-29{,}570 = 576{,}700\ \mathrm{J/kg},$$

$$\eta_{\rm th} = \frac{576{,}700}{0.02079(43\times10^6)} = \frac{576{,}700}{893{,}850} = 0.645,$$

$$\eta_p = \frac{869.4(243.2)}{576{,}700} = \frac{211{,}440}{576{,}700} = 0.367, \qquad \eta_o = 0.645(0.367) = 0.237.$$

*Check:* $\eta_o = (F/\dot m_a)V_\infty/(fQ_R) = 211{,}440/893{,}850 = 0.237$ ✓

**P3** *Setting up.* $M_\infty = 0.85$, $T_\infty = 220$ K, $p_\infty = 22.6$ kPa (11 km standard), $\pi_c = 30$, $T_{04} = 1600$ K, $Q_R = 43$ MJ/kg.

*Station 2 — inlet.*

$$V_\infty = 0.85\sqrt{1.4(287)(220)} = 0.85(297.3) = 252.7\ \mathrm{m/s},$$
$$\tau_r = 1.1445, \qquad T_{02} = 251.8\ \mathrm{K}, \qquad p_{0\infty} = 22.6(1.6038) = 36.25\ \mathrm{kPa}.$$

*Station 3 — compressor.*

$$\tau_c = 30^{2/7} = 2.6426, \qquad T_{03} = 665.4\ \mathrm{K}, \qquad p_{03} = 1087.4\ \mathrm{kPa}.$$

*Station 4 — burner.*

$$f = \frac{1005(1600-665.4)}{43\times10^6} = 0.02184.$$

*Station 5 — turbine.*

$$T_{05} = 1600-\frac{413.6}{1.02184} = 1600-404.8 = 1195.2\ \mathrm{K}.$$

*(Using the simpler $T_{05} = 1600-413.6 = 1186.4$ K changes the final specific thrust by under 1%; the fuller value is used below.)*

$$p_{05} = 1087.4\left(\frac{1195.2}{1600}\right)^{3.5} = 1087.4(0.36031) = 391.8\ \mathrm{kPa}.$$

*Station $e$ — nozzle.*

$$T_e = 1195.2\left(\frac{22.6}{391.8}\right)^{2/7} = 1195.2(0.44260) = 529.0\ \mathrm{K},$$
$$u_e = \sqrt{2010(1195.2-529.0)} = \sqrt{2010(666.2)} = \sqrt{1{,}339{,}062} = 1157.2\ \mathrm{m/s}.$$

**(a) Specific thrust.**

$$\boxed{\frac{F}{\dot m_a} = 1.02184(1157.2)-252.7 = 1182.5-252.7 = 929.8\ \mathrm{m/s}\approx930\ \mathrm{N\ per\ kg/s}.}$$

**(b) Fuel/air ratio and TSFC.**

$$\boxed{f = 0.0218,} \qquad \boxed{\mathrm{TSFC} = \frac{0.02184}{929.8} = 2.349\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.0846\ \mathrm{kg/(N\cdot h)}.}$$

**(c) Efficiencies.**

$$\text{KE added per kg of air} = \tfrac12(1.02184)(1157.2)^2-\tfrac12(252.7)^2 = 684{,}190-31{,}930 = 652{,}260\ \mathrm{J/kg}.$$

$$\boxed{\eta_{\rm th} = \frac{652{,}260}{0.02184(43\times10^6)} = \frac{652{,}260}{939{,}100} = 0.694,}$$

$$\boxed{\eta_p = \frac{929.8(252.7)}{652{,}260} = \frac{234{,}960}{652{,}260} = 0.360,}$$

$$\boxed{\eta_o = 0.694(0.360) = 0.250.}$$

*Cross-check.* $\eta_o = (F/\dot m_a)V_\infty/(fQ_R) = 234{,}960/939{,}100 = 0.250$ ✓

And against the air-standard cycle: overall pressure ratio $30(1.6038) = 48.1$, so $\eta_{\rm Brayton} = 1-48.1^{-2/7} = 0.669$ — the 0.694 above is a little higher because it credits the fuel's mass, which the air-standard cycle ignores.

**(d) Which parameter to change, and the cost.**

**Raise the compressor pressure ratio.** Going from $\pi_c = 30$ to $\pi_c = 50$:

| | $\pi_c = 30$ | $\pi_c = 50$ | Change |
|---|---|---|---|
| $T_{03}$ | 665 K | 770 K | $+105$ K |
| $f$ | 0.02184 | 0.01940 | $-11\%$ |
| $u_e$ | 1157 m/s | 1129 m/s | $-2\%$ |
| $F/\dot m_a$ | 930 m/s | 899 m/s | $-3\%$ |
| **TSFC** | **0.0846** | **0.0777** | $\mathbf{-8\%}$ |
| $\eta_o$ | 0.250 | 0.272 | $+9\%$ |

**An 8% fuel saving**, which on a long-haul aircraft is worth several tonnes of fuel per flight.

*Why it hurts specific thrust.* The mechanism is a temperature squeeze, and it is entirely because $T_{04}$ is held fixed by the turbine:

**Raising $\pi_c$ raises $T_{03}$**, from 665 K to 770 K, because compression is heating.

**But $T_{04}$ cannot follow**, since it is set by what the turbine blades survive. So the temperature *interval* available to the burner, $T_{04}-T_{03}$, shrinks from 935 K to 830 K.

**Less heat added means less energy in the gas**, so the nozzle produces a slower jet — $u_e$ falls from 1157 to 1129 m/s — and the specific thrust falls with it.

**Meanwhile the efficiency improves** because the heat that *is* added goes in at a higher pressure, and a Brayton cycle's efficiency is $1-r_p^{-(\gamma-1)/\gamma}$: raising the overall ratio from 48 to 80 lifts the ideal efficiency from 0.669 to 0.714.

**So the engine burns less fuel and converts more of it, but produces less thrust per kilogram of air** — meaning a physically larger engine for the same thrust. That is precisely the trade an airliner accepts and a fighter refuses.

*The alternative, and why it is worse.* Lowering $T_{04}$ from 1600 to 1400 K also cuts TSFC (to 0.0775) — but it costs 15% of the specific thrust rather than 3%. **Pressure ratio is much the cheaper lever**, which is why civil engine development has pushed overall pressure ratios from 10 in the 1960s to over 50 today, while turbine temperatures have risen far more slowly.

*And the honest caveat.* This is an **ideal** cycle. Real compressors have polytropic efficiencies near 0.90, and the losses grow with the number of stages — so beyond about $\pi_c = 50$ the real efficiency gain flattens and eventually reverses, while the engine gets heavier and the high-pressure compressor's blades get too small to be efficient. **The ideal analysis says "more is better"; the real limit is set by component technology**, which is why $\pi_c$ has crept upward one generation at a time rather than jumping.

</details>

## Flashback

**From Lesson 2.3 (Combustion for propulsion):** A combustor takes air at $T_{03} = 700$ K and must reach $T_{04} = 1700$ K, burning kerosene ($Q_R = 43$ MJ/kg, $f_{\rm stoich} = 0.0686$) with $\eta_b = 0.99$ and $c_p = 1150$ J/(kg·K). (a) Find $f$ and $\phi$. (b) Find the maximum burner-entry Mach number from the Rayleigh limit. (c) Why is the answer to (b) relevant to the compressor design? (d) What would happen to $f$ if the turbine limit rose to 1900 K?

<details>
<summary>Solution</summary>

(a) $$f = \frac{c_p\left(T_{04}-T_{03}\right)}{\eta_bQ_R-c_pT_{04}} = \frac{1150(1000)}{0.99(43\times10^6)-1150(1700)} = \frac{1{,}150{,}000}{42.57\times10^6-1.955\times10^6}$$

$$= \frac{1{,}150{,}000}{40.615\times10^6} = 0.02831, \qquad \phi = \frac{0.02831}{0.0686} = 0.413.$$

(b) The required stagnation-temperature ratio is $1700/700 = 2.429$, so the Rayleigh limit requires

$$\frac{T_{03}}{T_0^*}\leq\frac{1}{2.429} = 0.4117.$$

From the Rayleigh relation, $T_0/T_0^* = 0.4117$ at

$$M_3\approx0.335.$$

(c) *Why it matters to the compressor.* A modern axial compressor discharges at $M\approx0.3$–$0.45$ — **right at or above this limit.** If the flow entered the combustor at compressor-exit Mach number, the duct would choke before the design turbine-inlet temperature was reached.

**Hence the pre-diffuser.** Every gas turbine places a diffuser between the compressor's last stage and the combustor, slowing the flow to $M\approx0.05$–$0.15$ and buying a large Rayleigh margin at the cost of a 3–5% stagnation-pressure loss. **The diffuser is not optional ducting; it is what makes the heat addition possible at all.**

(d) $$f = \frac{1150(1900-700)}{0.99(43\times10^6)-1150(1900)} = \frac{1{,}380{,}000}{42.57\times10^6-2.185\times10^6} = \frac{1{,}380{,}000}{40.385\times10^6} = 0.03417,$$

$$\phi = 0.498.$$

**A 21% increase in fuel/air ratio**, and $\phi$ rises from 0.41 to 0.50 — still comfortably lean, so the chemistry is not the obstacle.

*The bridge to this lesson.* That 200 K of turbine capability is exactly the lever Example 2 examined. From the design table, going from $T_{04} = 1800$ to $2000$ K raises specific thrust from 1042 to 1154 m/s — **11% more thrust from the same engine size** — while TSFC worsens by 6%.

**But notice what else the Rayleigh limit says.** Raising $T_{04}$ raises the required $T_{04}/T_{03}$ ratio, which *tightens* the maximum burner-entry Mach number: from 0.335 at 1700 K down to 0.312 at 1900 K. **The diffuser has to work harder, and its pressure loss grows.**

That is a small effect compared with the metallurgy, but it is a good illustration of the theme of Module 2: **every improvement in one component propagates as a new constraint on another**, and a cycle analysis is the bookkeeping that makes the propagation visible.

</details>

## Connections

- **Backward:** the efficiency definitions and Brayton framework are [2.1](02-01-propulsion-efficiencies-brayton.md)'s; the burner's $f$ and its limits are [2.3](02-03-combustion-for-propulsion.md)'s; the ram compression is [2.2](02-02-ideal-ramjet.md)'s, now supplemented rather than relied on; the nozzle expansion is [1.2](01-02-compressible-flow-nozzles.md)'s.
- **Forward:** [2.5](02-05-turbofan-bypass.md) takes the turbine's *surplus* work — beyond what the compressor needs — and uses it to drive a fan; [2.6](02-06-turboprop-propeller.md) takes almost all of it and drives a propeller; [4.3](04-03-hypersonic-airbreathing-scramjet.md) shows where the turbomachinery has to be abandoned entirely.
- **Sideways:** the compressor–turbine work match is a **constraint that closes an otherwise underdetermined system**, and the same structural role is played by the Kutta condition in [`aerodynamics` 2.1](../../aerodynamics/lessons/02-01-airfoil-geometry-kutta-condition.md), by Kirchhoff's laws in a circuit, and by the load line in a transistor's operating-point analysis: the physics offers a family of states, and one balance equation picks the one that actually occurs.
