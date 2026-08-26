# Propulsion · Lesson 3.4: Chemical rockets — liquids and solids

> ⏱ ~15 min · Module 3: Rockets and mission analysis · Builds on: [3.2 Specific impulse](03-02-specific-impulse-rocket-performance.md), [3.3 Staging](03-03-staging-mass-ratio.md) · Unlocks: [3.5 Mission $\Delta v$ and the propulsion budget](03-05-mission-delta-v-budget.md)

## Why this matters

Every chemical rocket ever flown is one of two things: a **liquid**, which pumps two fluids into a chamber and can be throttled, restarted, and shut down; or a **solid**, which is a cast block of propellant that burns from ignition to burnout and cannot be stopped.

That difference is not a detail of plumbing. **It determines what missions the vehicle can fly**, and the two architectures have coexisted for seventy years because neither dominates.

This lesson compares them through the quantities Module 3 has built — $c^*$, $C_F$, $I_{sp}$, $\varepsilon$ — and adds the two design relations that are specific to each: **how chamber pressure buys performance in a liquid**, and **how grain geometry and burn-rate law set everything in a solid.**

## The idea

**In a liquid, chamber pressure is the master variable.** Raising $p_0$ does not change $c^*$ (which depends only on the propellant) and barely changes the momentum part of $C_F$ — but it shrinks $p_a/p_0$, so the *pressure* term of $C_F$ improves. **Higher chamber pressure means less atmospheric penalty and a smaller engine for the same thrust.**

**And that is what turbopumps are for.** A pressure-fed engine is limited to 1–3 MPa because the tanks themselves must hold that pressure and tank mass scales with it. **A pump lets the tanks stay at a few hundred kPa while the chamber runs at 10–30 MPa** — which is why every high-performance engine has one, and why the pump is the hardest part of the engine.

**The cycles differ in what they do with the turbine exhaust.** A **gas generator** cycle dumps it overboard, wasting a few percent of the propellant. A **staged combustion** cycle feeds it into the main chamber, wasting nothing but requiring the pump to work against the chamber pressure. An **expander** cycle uses the nozzle's own regenerative cooling to drive the turbine, which is elegant, self-limiting, and only works at modest thrust.

**A solid is a completely different object.** The propellant is a rubbery composite — ammonium perchlorate oxidizer, aluminium fuel, polymer binder — cast into the case with a hollow channel. **The exposed surface of that channel is the combustion chamber**, and it burns radially outward at a few millimetres per second.

**Grain geometry is the throttle you set at the factory.** The burning area $A_b$ changes as the channel grows, and the chamber pressure follows it. **A star-shaped channel keeps $A_b$ nearly constant (neutral burn); a plain circular channel grows (progressive); an end-burner shrinks (regressive).** The thrust-time curve is cast into the propellant.

**And the burn-rate exponent decides whether it is stable.** $r = ap_0^n$ with $n\approx0.3$–$0.4$: a small increase in burning area raises the pressure by $1/(1-n)$ times as much, which is manageable. **If $n$ approached 1 the feedback would run away** — which is why propellants with high $n$ are simply not used.

## The formal version

**Chamber pressure and performance (liquids).** From [1.4](01-04-nozzle-performance-cf-cstar.md):

$$C_F = C_{F,\rm mom}\left(\gamma,\tfrac{A_e}{A_t}\right)+\left(\frac{p_e}{p_0}-\frac{p_a}{p_0}\right)\frac{A_e}{A_t}.$$

**$c^*$ and $C_{F,\rm mom}$ do not depend on $p_0$ at all.** Only the $-\left(p_a/p_0\right)\left(A_e/A_t\right)$ term does. For $\gamma = 1.20$, $A_e/A_t = 16$ ($C_{F,\rm mom} = 1.689$, $p_e/p_0 = 0.00677$) and $c^* = 1780$ m/s:

| $p_0$ (MPa) | $p_e$ (kPa) | $C_F$ (sea level) | $C_F$ (vacuum) | $I_{sp,SL}$ (s) | $I_{sp,\rm vac}$ (s) |
|---|---|---|---|---|---|
| 3 | 20.3 | 1.257 | 1.797 | 228 | 326 |
| 5 | 33.9 | 1.473 | 1.797 | 267 | 326 |
| 7 | 47.4 | 1.566 | 1.797 | 284 | 326 |
| 10 | 67.7 | 1.635 | 1.797 | 297 | 326 |
| 20 | 135.4 | 1.716 | 1.797 | 312 | 326 |

**Sea-level $I_{sp}$ rises 37% from 3 to 20 MPa; vacuum $I_{sp}$ does not move at all.**

**Feed-system cycles.**

| Cycle | Turbine drive | Turbine exhaust | $I_{sp}$ penalty | Examples |
|---|---|---|---|---|
| **Pressure-fed** | none (tank pressure) | — | none, but $p_0\lesssim3$ MPa | Apollo LM descent, Kestrel |
| **Gas generator** | separate fuel-rich burner | overboard | 1–3% (dumped propellant) | F-1, Merlin, RS-68 |
| **Expander** | propellant heated in cooling jacket | main chamber | none | RL10, Vinci |
| **Staged combustion** | fuel- or ox-rich preburner | main chamber | none | SSME, RD-180, Raptor |

**Solid propellant burn rate.**

$$\boxed{\;r = a\,p_0^{\,n}, \qquad n\approx0.3\text{–}0.4\ \text{(APCP)}.\;}$$

**Equilibrium chamber pressure.** Mass generated equals mass exhausted:

$$\rho_pA_br = \frac{p_0A_t}{c^*} \quad\Longrightarrow\quad \boxed{\;p_0 = \left(\rho_p\,a\,c^*\,K\right)^{\frac{1}{1-n}}, \qquad K\equiv\frac{A_b}{A_t}.\;}$$

**Stability.** Differentiating,

$$\boxed{\;\frac{dp_0}{p_0} = \frac{1}{1-n}\frac{dK}{K},\;}$$

so a 1% change in burning area moves the chamber pressure by $1/(1-n)$ percent.

| $n$ | 0.2 | 0.35 | 0.5 | 0.7 | 0.9 |
|---|---|---|---|---|---|
| $dp_0/p_0$ per 1% in $K$ | 1.25% | 1.54% | 2.00% | 3.33% | 10.0% |

**At $n\to1$ the response diverges** — the motor either extinguishes or explodes. **Practical propellants keep $n$ below about 0.5.**

**Grain geometry and the thrust profile.**

| Cross-section | $A_b$ as it burns | Thrust profile | Use |
|---|---|---|---|
| End-burner (cigarette) | constant | neutral, long, low thrust | sustainers, gas generators |
| Circular perforation | increases | progressive | rare alone |
| Star / wagon-wheel | roughly constant | neutral | boosters |
| Multi-slotted / finocyl | tailored | shaped (e.g. high-then-low) | Shuttle SRB, launch boosters |

**Architecture comparison.**

| | Liquid | Solid |
|---|---|---|
| $I_{sp}$ (vac) | 320–465 s | 250–290 s |
| $\varepsilon$ | 0.06–0.12 | 0.08–0.15 |
| Bulk density | 350–1050 kg/m³ | 1700–1800 kg/m³ |
| Throttle | yes (typically to 40%) | no |
| Shutdown / restart | yes | no |
| Thrust/weight of engine | 60–180 | very high (no engine) |
| Storability | cryogens: no; storables: years | decades |
| Complexity | high (pumps, valves, plumbing) | very low |
| Cost per unit impulse | higher | lower |

## Picture

![A two-panel figure. Left: three liquid-engine cycle schematics stacked vertically, each with fuel and oxidizer tanks, pumps, a turbine and a chamber. The gas-generator cycle shows a small side burner driving the turbine with its exhaust venting to a separate small nozzle, labelled 1 to 3 percent of propellant dumped. The expander cycle shows fuel routed through the nozzle cooling jacket, warmed, driving the turbine, then entering the main chamber, labelled no propellant wasted, thrust limited. The staged-combustion cycle shows a fuel-rich preburner driving the turbine with all its exhaust routed into the main chamber, labelled nothing wasted, pump works hardest. Right: solid-motor grain cross-sections in a row — a plain circular perforation, a star, and a finocyl — each with a small plot beneath showing burning area against web burned, rising for the circle, flat for the star, and shaped for the finocyl; below them a combined thrust-versus-time plot shows the three corresponding profiles labelled progressive, neutral and shaped, with the annotation the throttle is set at the factory.](assets/03-04-fig1.svg)

Left: three ways to drive a turbopump, and what each costs.

Right: a solid motor's entire thrust history, decided by the shape of a hole.

## Worked examples

**Example 1 (why chamber pressure matters, and why only at sea level).** An engine has $c^* = 1780$ m/s, $\gamma = 1.20$, and $A_e/A_t = 16$, giving $C_{F,\rm mom} = 1.689$ and $p_e/p_0 = 0.00677$.

*At $p_0 = 3$ MPa (pressure-fed):*

$$p_e = 0.00677(3.0) = 20.3\ \mathrm{kPa}, \qquad \frac{p_a}{p_0} = \frac{101.3}{3000} = 0.03377,$$

$$C_{F,SL} = 1.689+\left(0.00677-0.03377\right)(16) = 1.689-0.432 = 1.257,$$

$$I_{sp,SL} = \frac{1780(1.257)}{9.80665} = 228\ \mathrm{s}.$$

*At $p_0 = 20$ MPa (staged combustion):*

$$\frac{p_a}{p_0} = \frac{101.3}{20{,}000} = 0.005066,$$

$$C_{F,SL} = 1.689+\left(0.00677-0.005066\right)(16) = 1.689+0.027 = 1.716, \qquad I_{sp,SL} = 312\ \mathrm{s}.$$

*In vacuum, both give the same thing:*

$$C_{F,\rm vac} = 1.689+0.00677(16) = 1.797, \qquad I_{sp,\rm vac} = 326\ \mathrm{s}.$$

*Reading it.* Three points, and the third is the design conclusion:

**Sea-level $I_{sp}$ rises from 228 to 312 s — a 37% gain** — purely from raising the chamber pressure.

**Vacuum $I_{sp}$ is identical at 326 s.** With $p_a = 0$ the pressure term is $+p_eA_e/(p_0A_t)$, which depends on the *ratio* $p_e/p_0$ and not on $p_0$ itself. **Chamber pressure buys nothing in vacuum, at fixed area ratio.**

**But it buys size everywhere.** Since $F = C_Fp_0A_t$, doubling $p_0$ nearly halves the throat area for the same thrust, and the whole engine shrinks with it — chamber, injector, nozzle, and the structure carrying them. **On an upper stage, where vacuum $I_{sp}$ is unaffected, high chamber pressure is still worth having purely for mass.**

*And the second-order effect that makes it worth more still.* A smaller engine can carry a *larger area ratio* in the same envelope. Going from $p_0 = 3$ to 20 MPa at fixed engine length allows $A_e/A_t$ to grow from 16 to perhaps 40, which raises $C_{F,\rm vac}$ from 1.797 to 1.884 — **another 5% in vacuum $I_{sp}$**, this time real.

*Why not go higher still?* Chamber pressure is bought with pump work, and the pump discharge pressure must exceed $p_0$ by the injector's pressure drop (typically 20%). At 30 MPa the pump is delivering 36 MPa, the turbine driving it needs tens of megawatts, and the chamber wall heat flux — which scales roughly as $p_0^{0.8}$ — becomes the limiting design problem. **The RD-170 and the Raptor, both around 25–30 MPa, are near the practical ceiling.**

**Example 2 (a solid motor from its grain).** A booster uses APCP with $\rho_p = 1750$ kg/m³, $c^* = 1550$ m/s, and burn rate $r = ap_0^{0.35}$ calibrated so that $r = 6.0$ mm/s at $p_0 = 7$ MPa. The throat area is $A_t = 0.050$ m² and the grain's burning area is $A_b = 12.5$ m², so $K = 250$.

*The burn-rate constant.*

$$a = \frac{0.0060}{\left(7\times10^6\right)^{0.35}} = \frac{0.0060}{248.7} = 2.412\times10^{-5}\ \mathrm{(SI)}.$$

*Equilibrium chamber pressure.*

$$p_0 = \left(\rho_pac^*K\right)^{\frac{1}{1-n}} = \left(1750\times2.412\times10^{-5}\times1550\times250\right)^{1/0.65}$$

$$= \left(16{,}357\right)^{1.5385} = 3.04\times10^6\ \mathrm{Pa} = 3.04\ \mathrm{MPa}.$$

*Burn rate and mass flow at that pressure.*

$$r = 2.412\times10^{-5}\left(3.04\times10^6\right)^{0.35} = 4.48\ \mathrm{mm/s},$$

$$\dot m = \frac{p_0A_t}{c^*} = \frac{3.04\times10^6(0.050)}{1550} = 98.0\ \mathrm{kg/s}.$$

*Check:* $\rho_pA_br = 1750(12.5)(0.00448) = 98.0$ kg/s ✓

*Thrust*, at a sea-level $C_F$ of 1.55:

$$F = C_Fp_0A_t = 1.55\left(3.04\times10^6\right)(0.050) = 236\ \mathrm{kN}.$$

*Reading it.* Several things follow immediately, and they are all consequences of the same equation:

**The chamber pressure is set by geometry alone**, through $K = A_b/A_t$. There is no valve, no controller, no feedback loop — cast the grain and machine the throat and the pressure is determined.

**And it changes as the grain burns.** If the channel is a plain cylinder, $A_b$ grows as the radius grows: doubling $K$ from 250 to 500 would raise $p_0$ from 3.04 to $\left(2\right)^{1.5385}$ times as much — a factor of 2.90, to 8.8 MPa. **A progressive grain's chamber pressure nearly triples over the burn**, which the case must be designed for.

**Hence the star.** A star-shaped channel is cut so that the perimeter stays nearly constant as the web burns: the points get shallower while the valleys get wider, and $A_b$ — and therefore $p_0$, $\dot m$, and $F$ — stay flat. **Neutral burning is a geometry problem, solved once at design time.**

*Now the stability question.* From $dp_0/p_0 = \left[1/(1-n)\right]dK/K$ with $n = 0.35$:

$$\frac{dp_0}{p_0} = 1.538\frac{dK}{K}.$$

**A 1% manufacturing error in burning area gives 1.5% in chamber pressure**, and — since $F\propto p_0$ — 1.5% in thrust. Manageable.

*What happens if $n$ is large.* At $n = 0.9$ the factor is 10: a 1% error becomes 10% in pressure, which raises the burn rate, which raises the pressure further. **Formally the response is still finite, but the motor becomes exquisitely sensitive to grain cracks, temperature, and manufacturing scatter** — and a crack that suddenly exposes new burning area can drive the pressure past the case's burst limit in milliseconds.

**This is why the burn-rate exponent is a propellant *selection* criterion, not just a datum.** APCP formulations are tailored to keep $n$ between 0.2 and 0.4, and a batch that tests high is rejected.

*The temperature sensitivity, for completeness.* $a$ itself depends on the grain's bulk temperature, typically by 0.1–0.3% per kelvin. **A motor fired at $-20$ °C and one at $+40$ °C can differ by 15% in thrust and burn time** — which is why solid-boosted vehicles have conditioning requirements and why their trajectories are designed with a thrust-dispersion envelope.

*And the comparison this sets up.* A liquid engine of the same thrust would run at 7–25 MPa, weigh more (pumps, valves, plumbing), cost several times as much, and be throttleable, restartable, and shutdown-capable. **The solid is a simpler, denser, cheaper device that you get exactly one chance to use** — which is why they are boosters, missiles, and escape systems, and never upper stages that must perform a precise orbital insertion.

## Watch out

- **You might expect higher chamber pressure to raise vacuum $I_{sp}$.** At fixed area ratio it does not — only sea-level $I_{sp}$ improves. Its vacuum benefit is indirect, through allowing a larger area ratio in the same envelope.
- **You might think a gas-generator cycle's penalty is its dumped propellant's mass.** It is the mass *and* the fact that it was burned at low expansion ratio, contributing little thrust — worth 1–3% of $I_{sp}$.
- **You might treat $c^*$ as pressure-dependent.** It depends on $T_0$, $\mathcal{M}$ and $\gamma$; the weak real dependence comes from shifting equilibrium composition, not from the relation itself.
- **You might assume a solid's thrust is constant.** It follows the burning area, which follows the grain geometry — and only a neutral grain gives flat thrust.
- **You might ignore the burn-rate exponent.** $n$ near 1 makes the motor unstable; it is a propellant selection criterion.
- **You might forget grain temperature.** A 60 K swing in soak temperature can move thrust by 15%.
- **You might think solids cannot be stopped.** They can be *terminated* — by blowing the case open to drop the pressure below the deflagration limit — but that destroys the motor, and it is a range-safety action, not a control.

## One-liner

> A liquid's performance is bought with chamber pressure (which raises sea-level $C_F$ and shrinks the engine but does nothing for vacuum $I_{sp}$ at fixed area ratio) and paid for with a turbopump whose cycle decides whether the turbine exhaust is wasted; a solid's entire thrust history is $p_0 = (\rho_pac^*A_b/A_t)^{1/(1-n)}$ with the burning area cast into the grain — the throttle is set at the factory, and $n<0.5$ is what keeps it stable.

## Problems

**P1 (🟢)** An engine has $c^* = 1720$ m/s, $C_{F,\rm mom} = 1.62$, $A_e/A_t = 12$, and $p_e/p_0 = 0.0102$. (a) Find $C_F$ and $I_{sp}$ at sea level for $p_0 = 5$ MPa. (b) Repeat for $p_0 = 12$ MPa. (c) Find the vacuum values for both. (d) Comment on which flight regime benefits.

**P2 (🟡)** A solid motor has $\rho_p = 1800$ kg/m³, $c^* = 1520$ m/s, $n = 0.30$, and $r = 7.0$ mm/s at $p_0 = 6$ MPa. The throat is $A_t = 0.030$ m². (a) Find $a$. (b) For $K = 300$, find $p_0$, $r$, and $\dot m$. (c) Find the thrust at $C_F = 1.60$. (d) The grain is progressive and $K$ rises to 380 by the end of the burn; find the final chamber pressure and thrust.

**P3 (🔴)** A designer must choose between a solid booster and a liquid first stage for a vehicle needing $\Delta v_1 = 3.6$ km/s from the first stage, carrying a 30 t upper stack. Solid: $I_{sp} = 270$ s, $\varepsilon = 0.11$, propellant density 1780 kg/m³. Liquid (kerolox): $I_{sp} = 305$ s, $\varepsilon = 0.07$, bulk density 1030 kg/m³. (a) Find each option's stage gross mass and propellant mass. (b) Find each option's propellant volume and comment. (c) The solid costs 60 currency units per kg of stage and the liquid 140; find the cost of each stage. (d) Give a recommendation, naming two considerations besides mass and cost.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{p_a}{p_0} = \frac{101{,}325}{5\times10^6} = 0.020265,$$

$$C_{F,SL} = 1.62+\left(0.0102-0.020265\right)(12) = 1.62-0.1208 = 1.4992,$$

$$I_{sp,SL} = \frac{1720(1.4992)}{9.80665} = \frac{2578.6}{9.80665} = 262.9\ \mathrm{s}.$$

(b) $$\frac{p_a}{p_0} = \frac{101{,}325}{12\times10^6} = 0.0084438,$$

$$C_{F,SL} = 1.62+\left(0.0102-0.0084438\right)(12) = 1.62+0.02107 = 1.6411,$$

$$I_{sp,SL} = \frac{1720(1.6411)}{9.80665} = 287.8\ \mathrm{s}.$$

(c) $$C_{F,\rm vac} = 1.62+0.0102(12) = 1.7424, \qquad I_{sp,\rm vac} = \frac{1720(1.7424)}{9.80665} = 305.6\ \mathrm{s},$$

**identical for both chamber pressures.**

(d) **Only the atmospheric regime benefits.** Sea-level $I_{sp}$ rises 9.5% (262.9 to 287.8 s) while vacuum $I_{sp}$ is unchanged at 305.6 s.

**So chamber pressure is a first-stage variable.** A booster spends its impulse in the atmosphere and gains directly; an upper stage sees no $I_{sp}$ benefit at all and raises chamber pressure only to shrink the engine — which is exactly why upper-stage engines (the RL10 at 4.4 MPa) run at a fraction of a first stage's pressure (the RD-180 at 26 MPa) and are perfectly competitive.

**P2** (a) $$a = \frac{r}{p_0^{\,n}} = \frac{0.0070}{\left(6\times10^6\right)^{0.30}} = \frac{0.0070}{108.01} = 6.481\times10^{-5}\ \mathrm{(SI)}.$$

*(Check: $6.481\times10^{-5}(6\times10^6)^{0.30} = 6.481\times10^{-5}(108.01) = 0.0070$ m/s ✓)*

(b) $$p_0 = \left(\rho_pac^*K\right)^{\frac{1}{1-n}} = \left(1800\times6.481\times10^{-5}\times1520\times300\right)^{1/0.70} = \left(53{,}197\right)^{1.4286}.$$

$$\ln(53{,}197) = 10.8817, \qquad 1.4286(10.8817) = 15.5453, \qquad p_0 = e^{15.5453} = 5.64\times10^6\ \mathrm{Pa} = 5.64\ \mathrm{MPa}.$$

$$r = 6.481\times10^{-5}\left(5.64\times10^6\right)^{0.30} = 6.481\times10^{-5}(106.0) = 6.87\ \mathrm{mm/s},$$

$$\dot m = \frac{p_0A_t}{c^*} = \frac{5.64\times10^6(0.030)}{1520} = 111.3\ \mathrm{kg/s}.$$

*Check:* $\rho_pA_br = 1800\left(300\times0.030\right)(0.00687) = 1800(9.0)(0.00687) = 111.3$ kg/s ✓

(c) $$F = C_Fp_0A_t = 1.60\left(5.64\times10^6\right)(0.030) = 270{,}720\ \mathrm{N} = 271\ \mathrm{kN}.$$

(d) $$\frac{p_{0,\rm final}}{p_{0,\rm initial}} = \left(\frac{K_{\rm final}}{K_{\rm initial}}\right)^{\frac{1}{1-n}} = \left(\frac{380}{300}\right)^{1.4286} = \left(1.2667\right)^{1.4286}.$$

$$\ln(1.2667) = 0.23639, \qquad 1.4286(0.23639) = 0.33770, \qquad \text{ratio} = e^{0.33770} = 1.4017.$$

$$p_{0,\rm final} = 1.4017(5.64) = 7.91\ \mathrm{MPa}, \qquad F_{\rm final} = 1.60\left(7.91\times10^6\right)(0.030) = 380\ \mathrm{kN}.$$

**A 27% growth in burning area produced a 40% growth in thrust** — the $1/(1-n)$ amplification, and the reason a progressive grain must be designed around its *peak* pressure rather than its mean.

*The design consequence.* The case must hold 7.91 MPa with margin, so it is sized for the end of the burn while spending most of the burn near 5.6 MPa — **carrying case mass it does not need for most of the flight.** A neutral (star) grain would hold 5.6 MPa throughout, allowing a lighter case for the same average impulse. **That is the practical argument for neutral burning**, quite apart from the trajectory's preference for constant thrust.

**P3** (a) $$m_L = 30{,}000\ \mathrm{kg}\ \text{(the upper stack)}, \qquad \Delta v_1 = 3600\ \mathrm{m/s}.$$

*Solid:* $v_e = 9.80665(270) = 2647.8$ m/s.

$$MR = e^{3600/2647.8} = e^{1.35960} = 3.8947, \qquad \lambda = \frac{1/3.8947-0.11}{1-0.11} = \frac{0.256759-0.11}{0.89} = 0.164897.$$

$$m_0 = \frac{30{,}000}{0.164897} = 181{,}932\ \mathrm{kg}, \qquad m_f = \frac{m_0}{MR} = \frac{181{,}932}{3.8947} = 46{,}713\ \mathrm{kg},$$

$$m_p = 181{,}932-46{,}713 = 135{,}219\ \mathrm{kg}, \qquad m_s = 46{,}713-30{,}000 = 16{,}713\ \mathrm{kg}.$$

*Liquid:* $v_e = 9.80665(305) = 2991.0$ m/s.

$$MR = e^{3600/2991.0} = e^{1.20361} = 3.3321, \qquad \lambda = \frac{0.300111-0.07}{0.93} = \frac{0.230111}{0.93} = 0.247432.$$

$$m_0 = \frac{30{,}000}{0.247432} = 121{,}245\ \mathrm{kg}, \qquad m_f = \frac{121{,}245}{3.3321} = 36{,}387\ \mathrm{kg},$$

$$m_p = 121{,}245-36{,}387 = 84{,}858\ \mathrm{kg}, \qquad m_s = 36{,}387-30{,}000 = 6387\ \mathrm{kg}.$$

| | Solid | Liquid |
|---|---|---|
| Gross stage mass | 181.9 t | **121.2 t** |
| Propellant | 135.2 t | **84.9 t** |
| Structure | 16.7 t | **6.4 t** |

**The liquid stage is 33% lighter overall**, because it has both better $I_{sp}$ and better $\varepsilon$.

(b) $$V_{\rm solid} = \frac{135{,}219}{1780} = 75.97\ \mathrm{m^3}, \qquad V_{\rm liquid} = \frac{84{,}858}{1030} = 82.39\ \mathrm{m^3}.$$

**Nearly the same volume — the liquid is 8% bulkier**, despite carrying 37% less propellant, because kerolox is 42% less dense than solid propellant.

*Comment.* **Density is where the solid claws back most of its disadvantage.** On a mass basis the liquid wins decisively; on a volume basis — which sets the stage's diameter and length, and hence its aerodynamic drag and structural mass — they are essentially tied. **For a strap-on booster, where volume and diameter are severely constrained by the core vehicle, that tie is often decisive.**

(c) $$\text{Solid: } 60\times181{,}932 = 10{,}916{,}000, \qquad \text{Liquid: } 140\times121{,}245 = 16{,}974{,}000.$$

**The solid stage costs 36% less**, despite being 50% heavier — the higher mass is more than offset by the much lower cost per kilogram.

(d) *Recommendation.* **It depends on the mission, and the honest answer names the deciding factor rather than picking blind.**

**Choose the solid** if this is a booster on a vehicle that already has a liquid core, if the vehicle must be stored ready-to-fly for long periods (a military launcher or an interceptor), or if launch rate is low enough that the liquid's development and operations cost dominates.

**Choose the liquid** if the vehicle is to be reusable, if precise cutoff is needed, or if the vehicle flies often enough to amortize development.

*Two considerations besides mass and cost.*

**Controllability and mission flexibility.** A liquid can be throttled (to limit max-q and acceleration), shut down precisely (giving accurate cutoff velocity), and restarted. A solid does none of these: it burns to completion on the profile cast into it, and any trajectory dispersion must be corrected downstream. **For a first stage this is tolerable; for anything requiring precise insertion it is not.**

**Abort and safety.** A liquid can be shut down; a solid cannot. This drives crew-rating decisions directly — the Shuttle's SRBs could not be shut down, which is why the loss-of-crew analysis treated them as a zero-abort-option phase, and it is a principal reason modern crewed vehicles use liquid first stages.

*Two more worth naming.* **Reusability** — a liquid stage can be recovered and reflown, which changes the cost arithmetic entirely and is why the comparison in (c) is increasingly obsolete for high-rate vehicles. And **environmental and handling considerations** — APCP exhaust contains hydrogen chloride, and the motors are Class 1.3 explosives requiring specialized transport and storage.

</details>

## Flashback

**From Lesson 3.3 (Staging and the mass ratio):** A two-stage vehicle splits $\Delta v = 9.0$ km/s equally, with $I_{sp} = 330$ s and $\varepsilon = 0.10$ in both stages. (a) Find each stage's mass ratio and payload fraction. (b) Find the overall payload fraction. (c) For a 3 t payload, find the gross liftoff mass. (d) The first stage is replaced by a solid with $I_{sp} = 270$ s and $\varepsilon = 0.11$; find the new liftoff mass.

<details>
<summary>Solution</summary>

(a) $$v_e = 9.80665(330) = 3236.2\ \mathrm{m/s}, \qquad \Delta v_i = 4500\ \mathrm{m/s},$$

$$MR_i = e^{4500/3236.2} = e^{1.39054} = 4.0169, \qquad \lambda_i = \frac{1/4.0169-0.10}{0.90} = \frac{0.148948}{0.90} = 0.165495.$$

(b) $$\lambda_{\rm total} = \left(0.165495\right)^2 = 0.027389 = 2.74\%.$$

(c) $$m_0 = \frac{3000}{0.027389} = 109{,}535\ \mathrm{kg} = 109.5\ \mathrm{t}.$$

(d) The second stage is unchanged, so $m_{0,2} = 3000/0.165495 = 18{,}127$ kg. For the solid first stage:

$$v_e = 9.80665(270) = 2647.8\ \mathrm{m/s}, \qquad MR_1 = e^{4500/2647.8} = e^{1.69950} = 5.4714,$$

$$\lambda_1 = \frac{1/5.4714-0.11}{0.89} = \frac{0.182769-0.11}{0.89} = \frac{0.072769}{0.89} = 0.081764,$$

$$m_{0,1} = \frac{18{,}127}{0.081764} = 221{,}705\ \mathrm{kg} = 221.7\ \mathrm{t}.$$

**The vehicle doubled in mass** — from 109.5 t to 221.7 t — from a 60-second reduction in first-stage $I_{sp}$ and a 1-point worsening of $\varepsilon$.

*Why the penalty is so severe.* The first stage's $\Delta v/v_e$ rose from 1.391 to 1.700, pushing its mass ratio from 4.02 to 5.47 — and with $\varepsilon = 0.11$ the wall is at $MR = 9.1$, so the stage is now at 60% of its maximum rather than 44%. **The payload fraction collapsed from 0.165 to 0.082**, and since the total is a product, halving one factor halves the whole thing.

*The bridge to this lesson.* This is why solids are used as **boosters in parallel** rather than as serial first stages carrying the full first-stage $\Delta v$. A strap-on solid contributes thrust during the first 100 seconds and is dropped early, so it never has to deliver 4.5 km/s by itself — it delivers perhaps 1.5 km/s alongside a liquid core, where its low $I_{sp}$ is charged against a much smaller exponent.

**Split the $\Delta v$ so that the low-$I_{sp}$ stage does the least of it.** That is the general rule for stages of unequal quality, and it is the reason [3.3](03-03-staging-mass-ratio.md)'s equal-split optimum applies only to identical stages.

</details>

## Connections

- **Backward:** the $C_F$ dependence on $p_a/p_0$ is [1.4](01-04-nozzle-performance-cf-cstar.md)'s; the $c^*$ that both architectures share is [1.2](01-02-compressible-flow-nozzles.md)'s and [3.2](03-02-specific-impulse-rocket-performance.md)'s; the $\varepsilon$ and $I_{sp}$ that decide the trade are [3.1](03-01-rocket-equation.md)'s and [3.3](03-03-staging-mass-ratio.md)'s; the fuel-rich preburner is [2.3](02-03-combustion-for-propulsion.md)'s dilution argument reused.
- **Forward:** [3.5](03-05-mission-delta-v-budget.md) turns missions into the $\Delta v$ these stages must supply; [4.1](04-01-electric-propulsion.md) and [4.2](04-02-nuclear-thermal-advanced.md) leave chemistry behind entirely.
- **Sideways:** the solid motor's $p_0 = (\rho_pac^*K)^{1/(1-n)}$ with its $1/(1-n)$ amplification is a **positive-feedback loop with a gain that must stay below unity** — structurally identical to a nuclear reactor's prompt-criticality condition, to an amplifier's Barkhausen criterion for oscillation, and to the stability condition for any system where the output feeds back into its own driving term.
