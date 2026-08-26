# Propulsion · Lesson 2.5: The turbofan and the bypass idea

> ⏱ ~15 min · Module 2: Air-breathing engines · Builds on: [2.4 The turbojet cycle](02-04-turbojet-cycle.md) · Unlocks: [2.6 The turboprop and propeller propulsion](02-06-turboprop-propeller.md)

## Why this matters

The turbojet of [2.4](02-04-turbojet-cycle.md) had an excellent cycle — 68% thermal efficiency — and threw two thirds of that away in propulsive efficiency, because its jet was 4.8 times faster than the aircraft.

**The turbofan fixes exactly that, and nothing else.** Same core, same combustion, same turbine temperature. The only change is that the turbine is made larger and extracts *extra* work, which drives a fan that accelerates a much larger stream of air by a much smaller amount.

The result is the dominant aircraft engine of the last fifty years. **A modern high-bypass turbofan burns roughly 40% less fuel than a turbojet of the same core**, and every wide-body airliner flying is powered by one.

**This lesson is [2.1](02-01-propulsion-efficiencies-brayton.md)'s Example 2 turned into a real engine**, and it makes precise both the gain and what it costs.

## The idea

**Take work out of the core and put it into more air.** The turbine no longer just drives the compressor; it drives a fan as well. That fan accelerates a bypass stream — several times the core's mass flow — by a modest amount.

**The core jet slows down as a result.** Every joule the turbine takes for the fan is a joule the core nozzle does not get, so the core exhaust velocity falls. **Both streams end up moving much closer to flight speed than a turbojet's single jet did.**

**And propulsive efficiency is a function of exactly that.** $\eta_p = 2/(1+u_e/V_\infty)$ improves for both streams at once. **The gain is not a trick: it is the direct consequence of making thrust from more air moving more gently.**

**[Bypass ratio](../reference.md#bypass-ratio) is the design knob.** $B = \dot m_{\rm bypass}/\dot m_{\rm core}$: zero is a turbojet, 5 is a 1970s wide-body engine, 10–12 is a modern one, and a turboprop is effectively $B\approx50$ ([2.6](02-06-turboprop-propeller.md)).

**Fan pressure ratio is the second knob**, and it decides how the work is split between the two streams. **For a given bypass ratio there is an optimum, and it is the one that makes the two jet velocities equal** — because unequal velocities mean one stream is being wasted more than the other.

**The costs are geometric, not thermodynamic.** A bigger fan means a bigger nacelle (drag), a bigger disc (weight, and a containment casing to catch it if it fails), more ground clearance, and a fan tip speed that goes transonic. **The cycle would happily go to $B = 30$; the airframe will not.**

## The formal version

**Definitions.**

$$\boxed{\;B = \frac{\dot m_{\rm bypass}}{\dot m_{\rm core}}, \qquad \dot m_{\rm total} = \left(1+B\right)\dot m_{\rm core}, \qquad \pi_f = \frac{p_{021}}{p_{0\infty}}.\;}$$

**Station numbering** adds a fan: $\infty\to2$ (fan face) $\to21$ (fan exit, both streams) $\to3$ (compressor exit) $\to4$ (burner exit) $\to5$ (turbine exit) $\to e$ (core nozzle), with the bypass expanding from 21 directly to its own nozzle.

**The five steps, modified.**

**1. Inlet.** $\tau_r = 1+\tfrac{\gamma-1}{2}M_\infty^2$, $T_{02} = T_\infty\tau_r$, $p_{0\infty} = p_\infty\tau_r^{\gamma/(\gamma-1)}$.

**2. Fan** (acts on *all* the air):

$$\tau_f = \pi_f^{(\gamma-1)/\gamma}, \qquad T_{021} = T_{02}\tau_f, \qquad p_{021} = \pi_fp_{0\infty}.$$

**3. Core compressor** (on the core flow only): $T_{03} = T_{021}\pi_c^{(\gamma-1)/\gamma}$, $p_{03} = \pi_cp_{021}$.

**4. Burner:** $f = c_p(T_{04}-T_{03})/Q_R$.

**5. Turbine — the enlarged work match:**

$$\boxed{\;\left(1+f\right)c_p\left(T_{04}-T_{05}\right) = \underbrace{c_p\left(T_{03}-T_{021}\right)}_{\text{compressor}}+\underbrace{\left(1+B\right)c_p\left(T_{021}-T_{02}\right)}_{\text{fan, on all the air}}.\;}$$

**The $(1+B)$ is the whole story.** The fan's work is charged per kilogram of *core* flow, so a bypass ratio of 8 makes the fan's demand nine times what it would be on the core alone.

**6. Two nozzles** (separate exhausts, both perfectly expanded to $p_\infty$):

$$u_{e,\rm core} = \sqrt{2c_p\left(T_{05}-T_e\right)}, \quad T_e = T_{05}\left(\frac{p_\infty}{p_{05}}\right)^{(\gamma-1)/\gamma};$$

$$u_{e,\rm fan} = \sqrt{2c_p\left(T_{021}-T_{ef}\right)}, \quad T_{ef} = T_{021}\left(\frac{p_\infty}{p_{021}}\right)^{(\gamma-1)/\gamma}.$$

**Thrust.**

$$\boxed{\;\frac{F}{\dot m_{\rm total}} = \frac{\left(1+f\right)u_{e,\rm core}-V_\infty+B\left(u_{e,\rm fan}-V_\infty\right)}{1+B}, \qquad \mathrm{TSFC} = \frac{f/(1+B)}{F/\dot m_{\rm total}}.\;}$$

**The bypass sweep** (from the worked example: $\pi_c = 25$, $T_{04} = 1700$ K, $M_\infty = 0.85$, $T_\infty = 220$ K):

| $B$ | $\pi_f$ | $u_{e,\rm core}$ | $u_{e,\rm fan}$ | $F/\dot m_{\rm total}$ | TSFC | $\eta_o$ |
|---|---|---|---|---|---|---|
| 0 (turbojet) | 1.0 | 1217 m/s | — | 995.0 m/s | 0.0903 | 0.234 |
| 1 | 1.6 | 1175 | 370 | 533.0 | 0.0772 | 0.274 |
| 3 | 1.7 | 1096 | 383 | 314.8 | 0.0645 | 0.328 |
| 5 | 1.6 | 1047 | 370 | 233.8 | 0.0586 | 0.361 |
| 8 | 1.5 | 986 | 355 | 175.0 | 0.0529 | 0.400 |
| 12 | 1.4 | 931 | 339 | 133.5 | 0.0487 | 0.435 |

*(TSFC in kg/(N·h); $F/\dot m_{\rm total}$ is per kilogram of *total* air.)*

**Optimum fan pressure ratio.** For an ideal separate-exhaust turbofan at fixed $B$, the best TSFC occurs when

$$\boxed{\;u_{e,\rm core} = u_{e,\rm fan}.\;}$$

*In words: given a fixed amount of work to distribute, split it so that both streams leave at the same speed — because the wasted energy goes as the square of the velocity excess, so any imbalance costs.*

## Picture

![A two-panel figure. Left: a high-bypass turbofan in cross-section, with a large fan at the front spanning the full nacelle diameter, the flow splitting behind it into a narrow core path through compressor, burner and turbine, and a wide annular bypass duct that runs around the core to its own nozzle. Arrows label the two exhausts with their velocities — the core jet fast and thin, the bypass jet slow and thick — and a bracket across the turbine is labelled drives compressor plus fan, the fan work multiplied by one plus B. Beneath, two small bar charts compare a turbojet and this turbofan producing the same thrust: the turbojet bar is short and tall (small mass flow, large velocity change), the turbofan bar long and low (large mass flow, small velocity change), with equal areas annotated same thrust. Right: thrust-specific fuel consumption plotted against bypass ratio, falling steeply from about 0.090 at bypass zero to 0.049 at bypass twelve and flattening; a second curve shows specific thrust per unit total mass flow collapsing from 995 to 134 metres per second over the same range; three shaded vertical bands mark where nacelle drag, fan tip Mach number, and ground clearance each become binding, with the modern operating region shaded between bypass 9 and 12.](assets/02-05-fig1.svg)

Left: the architecture, and the one equation that changes — the fan's work is charged $(1+B)$ times.

Right: the payoff and its three limits. The curve keeps falling; the airframe stops you.

## Worked examples

**Example 1 (a bypass-ratio-5 turbofan, station by station).** Same flight condition and core as [2.4](02-04-turbojet-cycle.md)'s Example 1: $M_\infty = 0.85$, $T_\infty = 220$ K, $p_\infty = 22.6$ kPa, $\pi_c = 25$, $T_{04} = 1700$ K, $Q_R = 43$ MJ/kg. Now add a fan with $\pi_f = 1.6$ and $B = 5$.

*Inlet.* $V_\infty = 252.7$ m/s, $T_{02} = 251.8$ K, $p_{0\infty} = 36.25$ kPa (unchanged).

*Fan.*

$$\tau_f = 1.6^{2/7} = 1.1437, \qquad T_{021} = 251.8(1.1437) = 288.0\ \mathrm{K}, \qquad p_{021} = 1.6(36.25) = 58.0\ \mathrm{kPa}.$$

*Core compressor.*

$$T_{03} = 288.0(2.5085) = 722.4\ \mathrm{K}, \qquad p_{03} = 25(58.0) = 1449.9\ \mathrm{kPa}.$$

*(Note the overall pressure ratio is now $\pi_f\pi_c\tau_r^{3.5} = 1.6(25)(1.6038) = 64.2$ — the fan is a compressor stage too.)*

*Burner.*

$$f = \frac{1005(1700-722.4)}{43\times10^6} = \frac{1005(977.6)}{43\times10^6} = 0.02285.$$

*Turbine.*

$$w_{\rm comp} = 1005(722.4-288.0) = 436{,}600\ \mathrm{J/kg\ core},$$
$$w_{\rm fan} = (1+5)(1005)(288.0-251.8) = 6(1005)(36.2) = 218{,}200\ \mathrm{J/kg\ core},$$

$$T_{04}-T_{05} = \frac{436{,}600+218{,}200}{1.02285(1005)} = \frac{654{,}800}{1028.0} = 637.0\ \mathrm{K},$$

$$T_{05} = 1700-637.0 = 1063.0\ \mathrm{K}, \qquad p_{05} = 1449.9\left(\frac{1063.0}{1700}\right)^{3.5} = 1449.9(0.19334) = 280.3\ \mathrm{kPa}.$$

**The turbine now takes 637 K where the turbojet's took 371 K** — a third of it for the fan.

*Core nozzle.*

$$T_e = 1063.0\left(\frac{22.6}{280.3}\right)^{2/7} = 1063.0(0.48705) = 517.7\ \mathrm{K}, \qquad u_{e,\rm core} = \sqrt{2010(545.3)} = 1046.9\ \mathrm{m/s}.$$

*Bypass nozzle.*

$$T_{ef} = 288.0\left(\frac{22.6}{58.0}\right)^{2/7} = 288.0(0.76389) = 220.0\ \mathrm{K}, \qquad u_{e,\rm fan} = \sqrt{2010(68.0)} = 369.6\ \mathrm{m/s}.$$

*(A satisfying check: $T_{ef} = 220.0$ K $= T_\infty$ exactly. The fan compressed the air and the nozzle expanded it back, both isentropically — so the bypass stream returns to ambient temperature and all the fan's work has become kinetic energy.)*

*Thrust.*

$$F_{\rm core} = 1.02285(1046.9)-252.7 = 1070.8-252.7 = 818.1\ \mathrm{m/s\ per\ kg/s\ core},$$
$$F_{\rm bypass} = 369.6-252.7 = 116.9\ \mathrm{m/s\ per\ kg/s\ bypass},$$

$$\frac{F}{\dot m_{\rm total}} = \frac{818.1+5(116.9)}{6} = \frac{818.1+584.5}{6} = \frac{1402.6}{6} = 233.8\ \mathrm{m/s}.$$

*Fuel consumption.*

$$\mathrm{TSFC} = \frac{f/(1+B)}{F/\dot m_{\rm total}} = \frac{0.02285/6}{233.8} = \frac{0.003808}{233.8} = 1.629\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.0586\ \mathrm{kg/(N\cdot h)}.$$

$$\eta_o = \frac{233.8(252.7)}{0.003808(43\times10^6)} = \frac{59{,}080}{163{,}740} = 0.361.$$

*The comparison, which is the point.*

| | Turbojet ($B = 0$) | Turbofan ($B = 5$) |
|---|---|---|
| Core jet velocity | 1217 m/s | 1047 m/s |
| Bypass jet velocity | — | 370 m/s |
| $F/\dot m_{\rm total}$ | 995.0 m/s | 233.8 m/s |
| TSFC | 0.0903 | **0.0586** |
| $\eta_o$ | 0.234 | **0.361** |

**A 35% reduction in fuel consumption from the same core**, and every bit of it is propulsive efficiency: the thermal efficiency of the two engines is nearly identical.

**And the specific thrust fell by a factor of 4.3**, which means this engine must ingest 4.3 times as much air for the same thrust — a fan roughly twice the diameter of the turbojet's inlet.

**Example 2 (choosing the bypass ratio, and the fan pressure ratio).** Sweep $B$ at the fan pressure ratios a designer would actually pick:

| $B$ | TSFC | $F/\dot m_{\rm total}$ | Fan diameter (relative) |
|---|---|---|---|
| 0 | 0.0903 | 995.0 m/s | 1.0 |
| 1 | 0.0772 | 533.0 | 1.37 |
| 3 | 0.0645 | 314.8 | 1.78 |
| 5 | 0.0586 | 233.8 | 2.06 |
| 8 | 0.0529 | 175.0 | 2.38 |
| 12 | 0.0487 | 133.5 | 2.73 |

*(Relative diameter $\propto\sqrt{\dot m_{\rm total}}$ at fixed thrust, i.e. $\propto\sqrt{995.0/(F/\dot m_{\rm total})}$.)*

**TSFC falls by 46% from $B = 0$ to $B = 12$, and the fan grows 2.7 times in diameter.** That trade is the whole history of the civil engine: the JT8D (1964) had $B = 1$; the CF6 (1971) $B = 4.3$; the GE90 (1995) $B = 9$; the PW1000G (2016) $B = 12$.

*Now the fan pressure ratio.* At fixed $B = 8$, sweeping $\pi_f$:

| $\pi_f$ | $u_{e,\rm core}$ | $u_{e,\rm fan}$ | TSFC | $\eta_o$ |
|---|---|---|---|---|
| 1.3 | 1078 m/s | 321 m/s | 0.0612 | 0.346 |
| 1.5 | 986 | 355 | 0.0529 | 0.400 |
| 1.7 | 892 | 383 | 0.0477 | 0.444 |
| 2.0 | 744 | 418 | 0.0428 | 0.495 |
| **2.47** | **462** | **462** | **0.0393** | **0.539** |

**The ideal optimum is at $\pi_f = 2.47$, exactly where the two jet velocities are equal.**

*Why velocity matching is optimal.* The turbine's work is a fixed budget to be split between the two streams. The thrust is $\dot m_c(u_c-V)+\dot m_b(u_b-V)$ — linear in each velocity — while the energy spent is $\tfrac12\dot m_cu_c^2+\tfrac12\dot m_bu_b^2$, quadratic. **Minimizing a sum of squares subject to a fixed sum of linear terms always drives the terms equal**, which is exactly the same argument that made elliptic lift distribution optimal in [`aerodynamics` 2.6](../../aerodynamics/lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md).

*So why do real engines use $\pi_f\approx1.4$–$1.7$ rather than 2.5?* Four reasons, none of them thermodynamic:

**Fan tip Mach number.** A fan producing $\pi_f = 2.5$ in one stage needs a tip speed well into the supersonic range, generating shock losses that destroy the efficiency the ideal cycle assumed — and a great deal of noise.

**The ideal cycle is not the real one.** The sweep above assumes isentropic components. With realistic polytropic efficiencies the optimum moves down substantially and flattens, and the gain from $\pi_f = 1.5$ to 2.0 largely evaporates.

**Multi-stage fans cost weight and length.** Reaching $\pi_f = 2.5$ efficiently needs two or three stages, and on the bypass stream that mass is charged against every kilogram of air.

**And there is a cleaner way to get there.** Slowing the fan with a **reduction gearbox** lets the turbine run fast (where it is efficient) and the fan slow (where its tip Mach number is manageable), which is the geared-turbofan architecture — and it is why the PW1000G can carry $B = 12$ with a single-stage fan.

*The design conclusion.* **Bypass ratio and fan pressure ratio are not independent.** Raising $B$ at fixed $\pi_f$ reduces the core's share of the work and slows both jets; the optimum $\pi_f$ falls as $B$ rises. **Real engines move along the diagonal — higher $B$, lower $\pi_f$ — which is exactly what the table's second column shows the industry doing.**

## Watch out

- **You might forget the $(1+B)$ in the fan work.** It is the equation that makes a turbofan a turbofan; without it the turbine is undersized by a factor of several.
- **You might compute TSFC per unit core flow.** The fuel is $f\dot m_{\rm core} = f\dot m_{\rm total}/(1+B)$; forgetting the division inflates TSFC by $(1+B)$.
- **You might read low specific thrust as poor performance.** It is the symptom of the efficiency gain, not a defect.
- **You might expect the core jet to be unchanged.** It slows substantially — 1217 to 1047 m/s here — because the turbine took more work out.
- **You might think the thermal efficiency improved.** It barely changes. The gain is almost entirely propulsive.
- **You might push $\pi_f$ to the ideal optimum.** Real fans are limited by tip Mach number and by the fact that component losses flatten the optimum.
- **You might ignore mixed-exhaust engines.** Many low-bypass military turbofans mix the streams before a single nozzle, which recovers some of the velocity-mismatch loss and allows an afterburner.

## One-liner

> Enlarge the turbine so it drives a fan as well as the compressor, charge the fan's work $(1+B)$ times because it acts on all the air, and both jets slow toward flight speed — buying 35–45% less fuel from an unchanged core, at the price of a fan two to three times the diameter and every geometric constraint that comes with it.

## Problems

**P1 (🟢)** A turbofan has $B = 6$, core flow $\dot m_{\rm core} = 40$ kg/s, $f = 0.024$, core jet $u_{e,c} = 950$ m/s, bypass jet $u_{e,f} = 340$ m/s, at $V_\infty = 250$ m/s with both nozzles perfectly expanded. (a) Find the bypass and total mass flows. (b) Find the core and bypass thrusts. (c) Find the total thrust and the specific thrust per unit total flow. (d) Find the fuel flow and the TSFC in kg/(N·h).

**P2 (🟡)** A turbofan flies at $M_\infty = 0.82$ where $T_\infty = 223$ K and $p_\infty = 26.5$ kPa, with $\pi_f = 1.55$, $\pi_c = 22$ (on top of the fan), $T_{04} = 1650$ K, $B = 7$, $Q_R = 43$ MJ/kg, $\gamma = 1.4$, $c_p = 1005$ J/(kg·K). (a) Find $T_{02}$, $T_{021}$, and $T_{03}$. (b) Find $f$. (c) Find the turbine temperature drop from the work match, and $T_{05}$. (d) Find both jet velocities and comment on whether the fan pressure ratio is well matched.

**P3 (🔴)** A manufacturer offers the same core with three fan options at $M_\infty = 0.85$, $T_\infty = 220$ K, $p_\infty = 22.6$ kPa, $\pi_c = 25$, $T_{04} = 1700$ K:

| Option | $B$ | $\pi_f$ | TSFC (kg/(N·h)) | $F/\dot m_{\rm total}$ (m/s) |
|---|---|---|---|---|
| A | 5 | 1.6 | 0.0586 | 233.8 |
| B | 8 | 1.5 | 0.0529 | 175.0 |
| C | 12 | 1.4 | 0.0487 | 133.5 |

Each must produce 110 kN of cruise thrust. (a) Find the required total mass flow for each. (b) Estimate the fan diameter for each, given that the fan face density at cruise is $\rho_2 = 0.44$ kg/m³ and the axial velocity there is 200 m/s, with a hub/tip ratio of 0.30. (c) Estimate the fuel burn over a 6-hour flight for each, and the fuel saved by C over A. (d) Nacelle drag scales roughly as the fan frontal area times $q_\infty$ with a drag coefficient of 0.030, and $q_\infty = 12.4$ kPa at this condition. Compute the installed penalty for each and say whether it changes the ranking.

<details>
<summary>Solutions</summary>

**P1** (a) $$\dot m_{\rm bypass} = B\dot m_{\rm core} = 6(40) = 240\ \mathrm{kg/s}, \qquad \dot m_{\rm total} = 280\ \mathrm{kg/s}.$$

(b) $$F_{\rm core} = \dot m_{\rm core}\left[\left(1+f\right)u_{e,c}-V_\infty\right] = 40\left[1.024(950)-250\right] = 40\left[972.8-250\right] = 40(722.8) = 28.91\ \mathrm{kN},$$

$$F_{\rm bypass} = \dot m_{\rm bypass}\left(u_{e,f}-V_\infty\right) = 240(340-250) = 240(90) = 21.60\ \mathrm{kN}.$$

(c) $$F = 28.91+21.60 = 50.51\ \mathrm{kN}, \qquad \frac{F}{\dot m_{\rm total}} = \frac{50{,}510}{280} = 180.4\ \mathrm{m/s}.$$

(d) $$\dot m_f = f\dot m_{\rm core} = 0.024(40) = 0.960\ \mathrm{kg/s},$$

$$\mathrm{TSFC} = \frac{0.960}{50{,}510} = 1.9005\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.0684\ \mathrm{kg/(N\cdot h)}.$$

*Worth noticing:* the bypass stream produces 43% of the thrust from 86% of the air, at a velocity increment of only 90 m/s. **That is the efficiency mechanism made visible.**

**P2** (a) $$a_\infty = \sqrt{1.4(287)(223)} = 299.3\ \mathrm{m/s}, \qquad V_\infty = 0.82(299.3) = 245.5\ \mathrm{m/s},$$

$$\tau_r = 1+0.2(0.6724) = 1.13448, \qquad T_{02} = 223(1.13448) = 253.0\ \mathrm{K}.$$

$$\tau_f = 1.55^{2/7} = e^{0.28571\ln1.55} = e^{0.28571(0.43825)} = e^{0.12521} = 1.13339,$$

$$T_{021} = 253.0(1.13339) = 286.7\ \mathrm{K}.$$

$$\tau_c = 22^{2/7} = e^{0.28571(3.09104)} = e^{0.88316} = 2.41852, \qquad T_{03} = 286.7(2.41852) = 693.5\ \mathrm{K}.$$

(b) $$f = \frac{1005(1650-693.5)}{43\times10^6} = \frac{1005(956.5)}{43\times10^6} = \frac{961{,}283}{43\times10^6} = 0.02236.$$

(c) $$w_{\rm comp} = 1005(693.5-286.7) = 1005(406.8) = 408{,}830\ \mathrm{J/kg\ core},$$

$$w_{\rm fan} = (1+7)(1005)(286.7-253.0) = 8(1005)(33.7) = 271{,}350\ \mathrm{J/kg\ core},$$

$$T_{04}-T_{05} = \frac{408{,}830+271{,}350}{1.02236(1005)} = \frac{680{,}180}{1027.5} = 661.9\ \mathrm{K},$$

$$T_{05} = 1650-661.9 = 988.1\ \mathrm{K}.$$

(d) $$p_{0\infty} = 26.5\left(1.13448\right)^{3.5} = 26.5(1.55490) = 41.21\ \mathrm{kPa},$$
$$p_{021} = 1.55(41.21) = 63.88\ \mathrm{kPa}, \qquad p_{03} = 22(63.88) = 1405.4\ \mathrm{kPa},$$
$$p_{05} = 1405.4\left(\frac{988.1}{1650}\right)^{3.5} = 1405.4(0.16613) = 233.5\ \mathrm{kPa}.$$

*Core jet:*

$$T_e = 988.1\left(\frac{26.5}{233.5}\right)^{2/7} = 988.1(0.53700) = 530.6\ \mathrm{K}, \qquad u_{e,c} = \sqrt{2010(457.5)} = 958.9\ \mathrm{m/s}.$$

*Bypass jet:*

$$T_{ef} = 286.7\left(\frac{26.5}{63.88}\right)^{2/7} = 286.7(0.77782) = 223.0\ \mathrm{K}, \qquad u_{e,f} = \sqrt{2010(63.7)} = 357.9\ \mathrm{m/s}.$$

*(Again $T_{ef} = T_\infty$ exactly, as it must for an isentropic fan-and-nozzle pair.)*

*Is the fan well matched?* **No — the core jet is 2.7 times the bypass jet.** Velocity matching would require the two to be equal, so this engine is leaving efficiency on the table: the core stream is being accelerated far harder than the bypass stream, and the wasted kinetic energy goes as the square.

*What to change.* **Raise $\pi_f$**, which takes more work from the core (slowing $u_{e,c}$) and puts it into the bypass (raising $u_{e,f}$). Both move toward each other. A rough estimate from the trend of Example 2 suggests $\pi_f\approx2.2$–$2.4$ for velocity matching at $B = 7$.

**But this is an *ideal*-cycle statement.** With real component efficiencies the optimum is much lower and much flatter, and a single-stage fan cannot reach $\pi_f = 2.3$ without unacceptable tip Mach number. **$\pi_f = 1.55$ at $B = 7$ is a realistic design point**, not a mistake — the ideal analysis identifies the direction of improvement, and the mechanical constraints decide how far you can go.

**P3** (a) $$\dot m_{\rm total} = \frac{F}{F/\dot m_{\rm total}} = \frac{110{,}000}{F/\dot m_{\rm total}}.$$

| Option | $F/\dot m_{\rm total}$ | $\dot m_{\rm total}$ |
|---|---|---|
| A | 233.8 m/s | 470.5 kg/s |
| B | 175.0 | 628.6 kg/s |
| C | 133.5 | 824.0 kg/s |

(b) $$A_{\rm annulus} = \frac{\dot m_{\rm total}}{\rho_2V_2} = \frac{\dot m_{\rm total}}{0.44(200)} = \frac{\dot m_{\rm total}}{88}.$$

With hub/tip ratio $h = 0.30$, the annulus area is $\tfrac{\pi}{4}D^2\left(1-h^2\right) = \tfrac{\pi}{4}D^2(0.91)$, so

$$D = \sqrt{\frac{4A_{\rm annulus}}{0.91\pi}}.$$

| Option | $A_{\rm annulus}$ | $D$ | Frontal area $\tfrac{\pi}{4}D^2$ |
|---|---|---|---|
| A | 5.346 m² | 2.735 m | 5.875 m² |
| B | 7.143 m² | 3.161 m | 7.849 m² |
| C | 9.363 m² | 3.620 m | 10.29 m² |

**Fan diameters of 2.7, 3.2, and 3.6 m** — which bracket the real range (the CFM56 is 1.7 m, the GE90 3.4 m, the GE9X 3.4 m).

(c) $$\dot m_f = \mathrm{TSFC}\times F, \qquad \text{fuel} = \dot m_f\times6\ \mathrm{h}.$$

| Option | TSFC (kg/(N·h)) | $\dot m_f$ (kg/h) | 6-hour fuel |
|---|---|---|---|
| A | 0.0586 | 6446 | 38,676 kg |
| B | 0.0529 | 5819 | 34,914 kg |
| C | 0.0487 | 5357 | 32,142 kg |

$$\text{C saves over A}: \quad 38{,}676-32{,}142 = 6534\ \mathrm{kg}, \quad\text{or } 16.9\%.$$

**Six and a half tonnes of fuel per engine per flight** — and on a twin, thirteen tonnes. At any realistic fuel price this dominates every other operating consideration.

(d) $$D_{\rm nac} = C_Dq_\infty A_{\rm frontal} = 0.030(12{,}400)A_{\rm frontal} = 372\,A_{\rm frontal}\ \mathrm{N}.$$

| Option | $A_{\rm frontal}$ | $D_{\rm nac}$ | as % of 110 kN | Installed $F$ | Installed TSFC |
|---|---|---|---|---|---|
| A | 5.875 m² | 2186 N | 1.99% | 107.8 kN | 0.0598 |
| B | 7.849 m² | 2920 N | 2.65% | 107.1 kN | 0.0543 |
| C | 10.29 m² | 3828 N | 3.48% | 106.2 kN | 0.0505 |

*(Installed TSFC $= \dot m_f/F_{\rm installed}$.)*

*Does it change the ranking?* **No.** The nacelle penalty grows from 2.0% to 3.5% across the range — an increase of 1.5 percentage points — while the uninstalled TSFC improves by 17%. **The efficiency gain outruns the drag penalty by an order of magnitude at these bypass ratios.**

$$\text{C over A, installed}: \quad \frac{0.0598-0.0505}{0.0598} = 15.6\%, \quad\text{against } 16.9\%\ \text{uninstalled}.$$

**The drag has eaten about a tenth of the benefit, not the benefit itself.**

*Which is why the real limits are elsewhere.* Three of them, and any one can bind before drag does:

**Ground clearance.** A 3.6 m fan under a low wing requires either a taller landing gear (heavy, and it cascades into the wing box and fuselage) or a flattened nacelle (which costs drag and inlet distortion). **This is the constraint that has shaped the 737 for five decades**, and the reason its engines are visibly non-circular.

**Weight.** A fan disc, its containment casing, the nacelle, and the pylon all scale roughly with $D^2$ to $D^{2.5}$. Option C's fan is 75% larger in frontal area than A's, and the extra mass must be carried and lifted for the whole flight — which this model does not charge at all. **A proper trade includes induced drag on the extra lift**, which typically claims another third of the apparent benefit.

**Fan tip Mach number.** At fixed rotational speed, a larger fan has faster tips. Option C's fan cannot be driven directly by the low-pressure turbine at an efficient turbine speed without going transonic at the tips. **A reduction gearbox is required** — which is precisely what the geared turbofan is, and why $B = 12$ arrived only when a 30,000-hp gearbox became practical.

*The verdict.* **Option C is the right engine if the airframe can take it**, and that "if" is where the real engineering argument happens — which is a fair summary of the last twenty years of civil propulsion.

</details>

## Flashback

**From Lesson 2.4 (The turbojet cycle):** A turbojet flies at $M_\infty = 0.85$, $T_\infty = 220$ K, with $\pi_c = 25$ and $T_{04} = 1700$ K. (a) State the work-match equation and find $T_{05}$ given $T_{02} = 251.8$ K and $T_{03} = 631.6$ K, with $f = 0.02497$. (b) Explain in one sentence why the turbine's temperature drop is what it is. (c) What changes about this equation in a turbofan? (d) Why does the core jet slow down when a fan is added?

<details>
<summary>Solution</summary>

(a) $$\left(1+f\right)c_p\left(T_{04}-T_{05}\right) = c_p\left(T_{03}-T_{02}\right)$$

$$T_{04}-T_{05} = \frac{631.6-251.8}{1.02497} = \frac{379.8}{1.02497} = 370.6\ \mathrm{K}, \qquad T_{05} = 1700-370.6 = 1329.4\ \mathrm{K}.$$

(b) **Because the turbine's only job is to drive the compressor**, and a turbojet has no other shaft load — so it extracts exactly the compressor's work and not a joule more.

(c) The right-hand side gains a second term:

$$\left(1+f\right)c_p\left(T_{04}-T_{05}\right) = c_p\left(T_{03}-T_{021}\right)+\left(1+B\right)c_p\left(T_{021}-T_{02}\right),$$

**and the $(1+B)$ factor is the crucial part** — the fan does its work on the bypass stream *and* the core stream, so per kilogram of core flow its demand is multiplied by $(1+B)$.

(d) *Why the core jet slows.* The turbine's extra work has to come from somewhere, and the only source is the enthalpy of the hot gas. Extracting more work means a larger temperature drop across the turbine, so $T_{05}$ is lower — 1063 K in the $B = 5$ engine against 1329 K in the turbojet — and correspondingly so is $p_{05}$: 280 kPa against 383 kPa.

**The nozzle therefore starts from a colder, lower-pressure gas and produces a slower jet:** 1047 m/s against 1217 m/s.

*And that slowing is not a side effect; it is the objective.* A slower core jet has better propulsive efficiency, and the work removed from it has gone into a bypass stream that is slower still. **The turbofan is a device for taking energy out of a fast jet and putting it into a slow one**, and the work-match equation is where that transfer is written down.

</details>

## Connections

- **Backward:** the cycle and its work match are [2.4](02-04-turbojet-cycle.md)'s; the propulsive-efficiency argument being cashed in is [2.1](02-01-propulsion-efficiencies-brayton.md)'s, whose Example 2 this lesson realizes; the burner's $f$ is [2.3](02-03-combustion-for-propulsion.md)'s.
- **Forward:** [2.6](02-06-turboprop-propeller.md) takes $B$ to its extreme by replacing the fan with a propeller and the duct with nothing; [4.4](04-04-propulsion-design-space.md) places the whole family on one map.
- **Sideways:** the velocity-matching optimum — split a fixed work budget so the two streams leave at equal speed — is the same minimization as elliptic loading in [`aerodynamics` 2.6](../../aerodynamics/lessons/02-06-elliptical-loading-induced-drag-aspect-ratio.md), where a fixed lift is distributed to minimize a quadratic cost. In both cases the answer is "make the wasted quantity uniform", and in both the underlying reason is that **minimizing a sum of squares at fixed sum drives the terms equal** — the same result as equal current sharing in parallel resistors and equal marginal cost in an optimally allocated economy.
