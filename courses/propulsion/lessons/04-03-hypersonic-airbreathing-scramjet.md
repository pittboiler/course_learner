# Propulsion · Lesson 4.3: Hypersonic air-breathing and the scramjet

> ⏱ ~15 min · Module 4: Advanced and exotic propulsion · Builds on: [2.2 The ideal ramjet](02-02-ideal-ramjet.md), [2.3 Combustion for propulsion](02-03-combustion-for-propulsion.md) · Unlocks: [4.4 Capstone: the propulsion design space](04-04-propulsion-design-space.md)

## Why this matters

[2.2](02-02-ideal-ramjet.md) found that a ramjet's specific thrust falls to zero near $M = 7$, because ram compression heats the incoming air until there is no temperature headroom left for the fuel. **The practical ceiling is nearer $M = 5$**, once inlet losses and dissociation are counted.

**The scramjet refuses that ceiling by refusing the decision that caused it.** A ramjet decelerates the flow to subsonic before burning; a scramjet slows it only to $M\approx2$–$3$ and burns in a supersonic stream. **The stagnation-temperature rise the inlet imposes is a fraction of the ramjet's, and the headroom survives to $M = 12$ and beyond.**

**Everything difficult about a scramjet follows from that one decision.** The air crosses the combustor in under a millisecond; the fuel must be injected, mixed, ignited, and burned to completion in that time; and the whole engine is a thin margin between two large numbers — the thrust it produces and the drag of the vehicle it is bolted to.

## The idea

**The problem is stagnation temperature, and the inlet creates it.** All of the free-stream kinetic energy that the inlet removes becomes heat: $T_0-T_\infty = V_\infty^2/(2c_p)$. At $M = 8$ that is 2816 K on top of a 220 K ambient — **the air arrives at the burner already hotter than a kerosene flame.**

**Slowing the flow less means heating it less.** The combustor entry temperature depends on the Mach number you slow *to*, not on the Mach number you came from:

$$T_2 = \frac{T_0}{1+\frac{\gamma-1}{2}M_2^2}.$$

**At $M = 8$, slowing to $M_2 = 0.2$ gives 3012 K and no headroom; slowing to $M_2 = 3$ gives 1084 K and 1700 K of headroom.**

**And the inlet losses collapse too.** Decelerating a $M = 8$ stream to subsonic requires a shock system that destroys 90% of the stagnation pressure ([`aerodynamics` 4.3](../../aerodynamics/lessons/04-03-normal-shock-waves.md)); slowing it to $M = 3$ needs a much gentler system and keeps most of it.

**The price is that combustion must happen at 2000 m/s.** The residence time in a 1.5 m combustor is under a millisecond — roughly the ignition delay of hydrogen at those conditions, and far shorter than a hydrocarbon's. **Hydrogen is the only fuel that reliably works below about $M = 10$**, and even it needs careful injection to mix in the time available.

**There is no flame holder in the usual sense.** A bluff body in a $M = 3$ stream generates a shock and enormous drag. Stabilization is instead achieved with **cavities, struts, and shock-induced recirculation** — geometry that creates a slow pocket without paying full bluff-body drag.

**And the thrust margin is thin.** A scramjet's net thrust is the difference between a large gross thrust and a large vehicle drag, both of which scale with dynamic pressure. **A few percent error in either estimate changes the sign of the answer**, which is why scramjet flight testing has been so difficult and why so few have flown.

## The formal version

**The stagnation-temperature problem.**

$$\boxed{\;T_{0\infty} = T_\infty\left(1+\frac{\gamma-1}{2}M_\infty^2\right), \qquad T_2 = \frac{T_{0\infty}}{1+\frac{\gamma-1}{2}M_2^2}.\;}$$

**The combustor entry temperature for the two architectures** ($T_\infty = 220$ K, $\gamma = 1.4$):

| $M_\infty$ | $T_{0\infty}$ | Ramjet ($M_2 = 0.2$) | Scramjet ($M_2 = M_\infty/3$) |
|---|---|---|---|
| 4 | 924 K | 917 K | 682 K |
| 5 | 1320 | 1310 | 849 |
| 6 | 1804 | 1790 | 1002 |
| **8** | **3036** | **3012** | **1253** |
| 10 | 4620 | 4583 | 1434 |
| 12 | 6556 | 6504 | 1561 |

**At $M = 8$ the ramjet's burner entry is at 3012 K — above the design combustion temperature — so no fuel can be added at all. The scramjet's is at 1253 K, leaving over 1500 K of headroom.**

**Why the scramjet entry temperature saturates.** With $M_2\propto M_\infty$, the bracket $1+\tfrac{\gamma-1}{2}M_2^2$ grows as $M_\infty^2$, at the same rate as $T_{0\infty}$ — so $T_2$ approaches a constant. **A scramjet's combustor sees roughly the same conditions at $M = 8$ and $M = 12$**, which is the whole reason the concept scales.

**Residence time.**

$$\boxed{\;\tau_{\rm res} = \frac{L}{V_2} = \frac{L}{M_2\sqrt{\gamma RT_2}}.\;}$$

At $M_2 = 3$, $T_2 = 1084$ K: $a_2 = 660$ m/s, $V_2 = 1980$ m/s, so a 1.5 m combustor gives $\tau_{\rm res} = 0.76$ ms.

**Compare with chemical times:**

| Process | Characteristic time at 1100 K, 1 atm |
|---|---|
| Hydrogen ignition delay | $\sim0.1$–$0.5$ ms |
| Hydrocarbon ignition delay | $\sim5$–$50$ ms |
| Turbulent mixing across a 5 cm scale | $\sim0.2$–$1$ ms |

**Hydrogen fits; kerosene does not** — which is why every flown scramjet below $M = 10$ has burned hydrogen, and why hydrocarbon scramjets need pre-cracked or endothermically-heated fuel to shorten the delay.

**Thrust margin.** The net thrust of a scramjet-powered vehicle is

$$F_{\rm net} = \underbrace{\dot m_a\left[\left(1+f\right)u_e-V_\infty\right]}_{\text{gross, }\sim q_\infty A}-\underbrace{C_Dq_\infty S}_{\text{vehicle drag}},$$

and both terms scale with $q_\infty$. **Typical net-to-gross ratios are 0.1–0.3**, so a 10% error in the gross thrust estimate is a 30–100% error in the net.

**The Mach window.**

| Regime | Engine |
|---|---|
| $M<3$ | turbojet / turbofan (scramjet produces no thrust; a ramjet barely does) |
| $3<M<5$ | ramjet |
| $5<M<12$ | **scramjet** |
| $M>12$–15 | rocket (dissociation and inlet losses end air-breathing) |

**No scramjet can start from rest.** Like a ramjet, it needs a booster — turbine, rocket, or a ramjet mode in a **dual-mode** engine that transitions from subsonic to supersonic combustion around $M = 5$–$6$.

**Flight history.** NASA's X-43A (2004) flew at $M = 6.8$ and $M = 9.6$ on hydrogen for about 10 seconds each; the X-51A Waverider (2010–2013) flew on hydrocarbon fuel for 210 seconds at $M = 5.1$. **Total accumulated scramjet flight time is a few minutes.**

## Picture

![A two-panel figure. Left: a scramjet-integrated vehicle in side view, with the forebody acting as the first compression surface generating oblique shocks that feed the inlet, a short isolator duct, a combustor with fuel injection struts and a wall cavity flame holder, and an expansion ramp on the afterbody that acts as half a nozzle; annotations mark the flow Mach number falling from 8 at the free stream to about 3 at the combustor entry and rising again on the afterbody, with the note the vehicle is the engine. Beneath it a temperature trace along the flowpath rises through the inlet, jumps modestly across the combustor, and falls on the afterbody; a dashed second trace shows what a ramjet's temperature would have been, rising far higher through its inlet and leaving no room for the combustor jump. Right: combustor entry temperature plotted against flight Mach number for the two architectures — the ramjet curve rising steeply past a horizontal dashed line marking the combustion temperature limit at about 2500 kelvin and crossing it near Mach 7, and the scramjet curve rising and then flattening near 1500 kelvin, staying far below the limit out to Mach 12; the vertical gap between the curves is shaded and labelled the headroom the scramjet keeps.](assets/04-03-fig1.svg)

Left: the airframe-integrated flowpath, and the temperature history that makes it work.

Right: the one plot that explains why scramjets exist.

## Worked examples

**Example 1 (why the ramjet stops and the scramjet does not, at $M = 8$).** Free stream at $M_\infty = 8$, $T_\infty = 220$ K, $\gamma = 1.4$.

*Stagnation temperature.*

$$T_{0\infty} = 220\left(1+0.2(64)\right) = 220(13.8) = 3036\ \mathrm{K}.$$

*Ramjet: slow to $M_2 = 0.2$.*

$$T_2 = \frac{3036}{1+0.2(0.04)} = \frac{3036}{1.008} = 3012\ \mathrm{K}.$$

With a combustor temperature limit of 2800 K, the available headroom is

$$\Delta T = 2800-3012 = -212\ \mathrm{K}.$$

**Negative — the air is already 212 K hotter than the combustor can tolerate.** No fuel can be added; the engine produces no thrust; and in fact the *inlet alone* has exceeded the design temperature.

*Scramjet: slow to $M_2 = 3$.*

$$T_2 = \frac{3036}{1+0.2(9)} = \frac{3036}{2.8} = 1084\ \mathrm{K}, \qquad \Delta T = 2800-1084 = 1716\ \mathrm{K}.$$

**Over 1700 K of headroom**, which at $c_p\approx1150$ J/(kg·K) and $Q_R = 120$ MJ/kg (hydrogen) allows

$$f = \frac{1150(1716)}{120\times10^6} = 0.0164, \qquad \phi = \frac{0.0164}{0.0294} = 0.56,$$

**a comfortably lean, entirely burnable mixture.**

*The residence time, which is the cost.*

$$a_2 = \sqrt{1.4(287)(1084)} = 660\ \mathrm{m/s}, \qquad V_2 = 3(660) = 1980\ \mathrm{m/s}.$$

For a 1.5 m combustor:

$$\tau_{\rm res} = \frac{1.5}{1980} = 7.58\times10^{-4}\ \mathrm{s} = 0.76\ \mathrm{ms}.$$

**Three quarters of a millisecond to inject, mix, ignite, and burn.**

*Reading it.* The comparison is stark and it is the entire lesson:

| | Ramjet ($M_2 = 0.2$) | Scramjet ($M_2 = 3$) |
|---|---|---|
| Combustor entry $T$ | 3012 K | 1084 K |
| Headroom to 2800 K | $-212$ K | $+1716$ K |
| Combustor velocity | $\approx100$ m/s | 1980 m/s |
| Residence time (1.5 m) | 15 ms | **0.76 ms** |
| Can it work? | **no** | yes, with hydrogen |

**The scramjet has traded a thermodynamic impossibility for a chemical-kinetics difficulty**, which is a good trade — impossibilities cannot be engineered around and difficulties can.

*And the trade is made explicit in the fuel.* Hydrogen's ignition delay at 1100 K and a few atmospheres is 0.1–0.5 ms, which fits inside 0.76 ms with margin. **Kerosene's is 5–50 ms — one to two orders of magnitude too slow.** That is why the X-43A burned hydrogen and why the X-51A, which burned a hydrocarbon, needed a fuel that was endothermically cracked in the cooling passages before injection.

**Example 2 (why the scramjet's combustor stops caring about Mach number).** Track the combustor entry temperature as $M_\infty$ rises, with the inlet designed to hold $M_2 = M_\infty/3$.

$$T_2 = \frac{T_\infty\left(1+0.2M_\infty^2\right)}{1+0.2\left(M_\infty/3\right)^2} = T_\infty\frac{1+0.2M_\infty^2}{1+0.02222M_\infty^2}.$$

| $M_\infty$ | $T_{0\infty}$ | $M_2$ | $T_2$ |
|---|---|---|---|
| 6 | 1804 K | 2.00 | 1002 K |
| 8 | 3036 | 2.67 | 1253 |
| 10 | 4620 | 3.33 | 1434 |
| 12 | 6556 | 4.00 | 1561 |
| $\infty$ | $\infty$ | $\infty$ | **1980 K** |

*The limit.* As $M_\infty\to\infty$,

$$T_2\to T_\infty\frac{0.2}{0.02222} = 9T_\infty = 1980\ \mathrm{K}.$$

**The combustor entry temperature saturates at nine times ambient**, and never reaches the combustion limit. **That is why the scramjet has no thermodynamic ceiling** — the constant-$M_2/M_\infty$ inlet keeps the burner's conditions almost fixed however fast the vehicle goes.

*Reading it.* Three consequences:

**The combustor design barely changes across the flight envelope.** At $M = 8$ and $M = 12$ it sees 1253 K and 1561 K — a 25% variation, against the free stream's 50% variation in speed. **That is what makes a single flowpath viable over a wide Mach range.**

**But the *inlet* must change.** Holding $M_2 = M_\infty/3$ requires the compression ratio to vary with flight Mach number, which means variable geometry or a carefully shaped fixed geometry that is optimal at one point and acceptable elsewhere. **The inlet, not the combustor, is what limits a real scramjet's Mach range.**

**And the real ceiling is different.** Three effects end air-breathing above about $M = 12$–15:

**Dissociation.** At $T_2$ near 2000 K and combustor temperatures near 3000 K, a significant fraction of the released energy goes into breaking molecules apart rather than raising the temperature, and much of it never recombines before the nozzle exit. **The effective heating value falls.**

**Inlet losses.** Even a gentle compression system loses stagnation pressure, and the loss grows with Mach number. By $M = 15$ the recovery is poor enough that the expansion available on the afterbody cannot produce net thrust.

**Thermal management.** At $M = 12$, $T_{0\infty} = 6556$ K. Leading edges, the inlet cowl, and the combustor walls all see enormous heat fluxes, and the only coolant is the fuel. **A hydrogen scramjet at $M = 12$ is close to using its entire fuel flow's heat capacity just to stay intact.**

*So the Mach window closes at both ends.* Below $M\approx5$ the flow cannot be kept supersonic through the combustor while still compressing enough; above $M\approx12$–15 the losses and the heat defeat it. **Between them lies the only regime where a scramjet is the right answer** — and it is a regime no operational vehicle has yet needed.

## Watch out

- **You might think a scramjet burns "at Mach 8".** It burns at $M\approx2$–$3$; the inlet has already slowed the flow substantially.
- **You might expect a scramjet to work at low Mach number.** Below about $M = 5$ the compression is insufficient and the flow cannot stay supersonic through the burner; a dual-mode engine switches to subsonic (ramjet) combustion.
- **You might use hydrocarbon ignition delays.** They are 10–100 times too long for a scramjet combustor; hydrogen or cracked hydrocarbons are required.
- **You might use a bluff-body flame holder.** At $M = 3$ it generates a strong shock and unacceptable drag; use cavities, struts, or shock-induced recirculation.
- **You might quote gross thrust.** Net thrust is gross minus vehicle drag, and the two are comparable — a small error in either flips the sign of the answer.
- **You might treat the engine and the airframe separately.** The forebody is the inlet's first compression surface and the afterbody is half the nozzle. **A scramjet cannot be designed apart from its vehicle.**
- **You might expect the perfect-gas relations to hold.** Above about $T = 2000$ K, dissociation changes $\gamma$, $c_p$, and the effective heating value.

## One-liner

> A ramjet dies near $M = 7$ because its inlet turns all the flight kinetic energy into heat before the fuel gets a chance; a scramjet slows the flow only to $M\approx3$, so the combustor entry temperature saturates around nine times ambient and never reaches the limit — buying a thermodynamic impossibility off in exchange for a sub-millisecond residence time that only hydrogen can use.

## Problems

**P1 (🟢)** A vehicle flies at $M_\infty = 6$ where $T_\infty = 225$ K ($\gamma = 1.4$). (a) Find $T_{0\infty}$. (b) Find the combustor entry temperature for a ramjet slowing to $M_2 = 0.25$. (c) Find it for a scramjet slowing to $M_2 = 2.2$. (d) With a 2600 K combustion limit, find the temperature headroom in each case.

**P2 (🟡)** A scramjet combustor at $M_2 = 2.4$ and $T_2 = 1150$ K burns hydrogen ($Q_R = 120$ MJ/kg, $f_{\rm stoich} = 0.0294$, $c_p = 1150$ J/(kg·K)) to a limit of 2700 K. (a) Find the flow velocity in the combustor. (b) Find the residence time in a 1.8 m combustor. (c) Find the fuel/air ratio and equivalence ratio to reach the limit. (d) Given a hydrogen ignition delay of 0.3 ms at these conditions, comment on whether the combustor is long enough.

**P3 (🔴)** A dual-mode engine must operate from $M_\infty = 4$ to $M_\infty = 10$ at $T_\infty = 220$ K, with a combustion temperature limit of 2700 K. In ramjet mode the inlet slows the flow to $M_2 = 0.3$; in scramjet mode it holds $M_2 = M_\infty/3$. (a) Tabulate $T_{0\infty}$ and both combustor entry temperatures for $M_\infty = 4$, 5, 6, 7, 8, 10. (b) Find the Mach number at which ramjet mode must be abandoned. (c) Find the fuel/air ratio available in each mode at $M_\infty = 6$ (hydrogen, $c_p = 1150$ J/(kg·K)) and comment. (d) Explain what physically must change in the flowpath at the transition, and name two difficulties.

<details>
<summary>Solutions</summary>

**P1** (a) $$T_{0\infty} = 225\left(1+0.2(36)\right) = 225(8.2) = 1845\ \mathrm{K}.$$

(b) $$T_2 = \frac{1845}{1+0.2(0.0625)} = \frac{1845}{1.0125} = 1822\ \mathrm{K}.$$

(c) $$T_2 = \frac{1845}{1+0.2(4.84)} = \frac{1845}{1.968} = 938\ \mathrm{K}.$$

(d) $$\Delta T_{\rm ram} = 2600-1822 = 778\ \mathrm{K}, \qquad \Delta T_{\rm scram} = 2600-938 = 1662\ \mathrm{K}.$$

**The scramjet has 2.1 times the headroom** — and at $M = 6$ the ramjet still works, which is exactly why $M\approx5$–$6$ is the transition region for a dual-mode engine.

**P2** (a) $$a_2 = \sqrt{1.4(287)(1150)} = \sqrt{462{,}070} = 679.8\ \mathrm{m/s}, \qquad V_2 = 2.4(679.8) = 1631.4\ \mathrm{m/s}.$$

(b) $$\tau_{\rm res} = \frac{1.8}{1631.4} = 1.103\times10^{-3}\ \mathrm{s} = 1.10\ \mathrm{ms}.$$

(c) $$\Delta T = 2700-1150 = 1550\ \mathrm{K},$$

$$f = \frac{c_p\Delta T}{Q_R} = \frac{1150(1550)}{120\times10^6} = \frac{1{,}782{,}500}{120\times10^6} = 0.014854,$$

$$\phi = \frac{0.014854}{0.0294} = 0.505.$$

(d) $$\frac{\tau_{\rm res}}{\tau_{\rm ign}} = \frac{1.10}{0.30} = 3.7.$$

**The combustor is about 3.7 ignition-delay times long — adequate, but not generous.**

*What that ratio has to cover.* The residence time must accommodate three sequential processes, not just ignition:

**Injection and mixing**, typically 0.2–0.5 ms for hydrogen injected through wall ports or struts into a $M = 2.4$ stream — and this is often the *longest* of the three, because turbulent mixing across the duct is slow compared with the chemistry.

**Ignition delay**, 0.3 ms as given.

**Burn-out**, the time for the reaction to run to near-completion once ignited, comparable to the ignition delay.

**Adding them: roughly $0.35+0.30+0.30 = 0.95$ ms against 1.10 ms available.** The margin is about 15% — **tight, and it is why scramjet combustors use aggressive mixing enhancement** (struts, ramp injectors, and shock-induced mixing) rather than simple wall injection.

*And it is why the fuel matters so much.* A hydrocarbon with a 10 ms ignition delay would need a 16 m combustor at this velocity — **longer than the vehicle**, and its skin friction and heat load would consume any thrust produced.

**P3** (a) $$T_{0\infty} = 220\left(1+0.2M_\infty^2\right), \qquad T_{2,\rm ram} = \frac{T_{0\infty}}{1.018}, \qquad T_{2,\rm scram} = \frac{T_{0\infty}}{1+0.2\left(M_\infty/3\right)^2}.$$

| $M_\infty$ | $T_{0\infty}$ | $T_{2,\rm ram}$ ($M_2 = 0.3$) | $T_{2,\rm scram}$ ($M_2 = M_\infty/3$) |
|---|---|---|---|
| 4 | 924 K | 908 K | 682 K |
| 5 | 1320 | 1297 | 849 |
| 6 | 1804 | 1772 | 1002 |
| 7 | 2376 | 2334 | 1137 |
| 7.5 | 2695 | 2647 | 1198 |
| 8 | 3036 | 2982 | 1253 |
| 10 | 4620 | 4538 | 1434 |

(b) **Ramjet mode fails when $T_{2,\rm ram}$ reaches the 2700 K limit.** Interpolating between $M_\infty = 7.5$ (2647 K) and $M_\infty = 8$ (2982 K):

$$T_{2,\rm ram} = 2700 \quad\text{at}\quad M_\infty\approx7.6.$$

**But that is the point at which *zero* fuel can be added.** A usable engine needs meaningful headroom, so ramjet mode must be abandoned well before then:

| $M_\infty$ | $T_{2,\rm ram}$ | Headroom | $f$ available (hydrogen) |
|---|---|---|---|
| 5 | 1297 K | 1403 K | 0.0134 |
| 6 | 1772 | 928 | 0.0089 |
| 7 | 2334 | 366 | 0.0035 |
| 7.5 | 2647 | 53 | 0.0005 |
| 7.6 | 2700 | 0 | 0 |

**By $M = 7$ the ramjet's fuel/air ratio has fallen to $\phi = 0.12$** — a fifth of what it could burn at $M = 5$ — and the specific thrust with it. **The practical transition is $M = 5$–$6$**, which is where real dual-mode designs place it.

(c) *At $M_\infty = 6$, with $c_p = 1150$ J/(kg·K) and $Q_R = 120$ MJ/kg:*

*Ramjet mode:*

$$f = \frac{1150(2700-1772)}{120\times10^6} = \frac{1150(928)}{120\times10^6} = 0.008893, \qquad \phi = \frac{0.008893}{0.0294} = 0.303.$$

*Scramjet mode:*

$$f = \frac{1150(2700-1002)}{120\times10^6} = \frac{1150(1698)}{120\times10^6} = 0.016273, \qquad \phi = \frac{0.016273}{0.0294} = 0.554.$$

**The scramjet can burn 83% more fuel per kilogram of air**, and therefore add 83% more heat.

*Comment, and it is a nuance worth stating.* **More heat added does not translate one-for-one into more thrust.** The scramjet's exhaust leaves at a higher Mach number and expands less efficiently, and its inlet has compressed the flow less — so at $M = 6$ the two modes produce roughly comparable specific thrust, with the ramjet often slightly ahead.

**The scramjet's advantage at $M = 6$ is not performance; it is that it still works at $M = 8$ and the ramjet does not.** That is why the transition is placed where it is: run in ramjet mode while it is competitive, and switch when it stops being possible.

(d) *What must change physically.* The transition from subsonic to supersonic combustion is not a mode switch in software; it is a change in the flow structure of the entire flowpath.

**The isolator's shock train must be expelled.** In ramjet mode a train of oblique shocks in the isolator duct decelerates the flow to subsonic and holds the back pressure imposed by the heat addition. In scramjet mode there is no shock train and the flow remains supersonic throughout. **The transition consists of pushing that shock train out of the isolator**, which is done by reducing the fuel flow (and hence the back pressure) as the flight Mach number rises.

**The fuel injection must move and change character.** Subsonic combustion is stabilized in a recirculation zone near the front of the combustor; supersonic combustion needs distributed injection along the duct, often through struts or ramps, and staged so that heat is added gradually enough not to thermally choke the flow.

**The effective nozzle changes.** With subsonic combustion the combustor exit is choked and the expansion begins at a geometric throat; with supersonic combustion there is no throat, and the expansion is continuous from the combustor onward.

*Two difficulties.*

**Inlet unstart.** If the back pressure from heat addition exceeds what the isolator's shock train can contain, the shock system is expelled *forward* out of the inlet. **The inlet unstarts**: mass capture collapses, drag rises abruptly, thrust vanishes, and the vehicle may lose control. **This is the dominant failure mode of scramjet flight testing**, and it is why the isolator — a plain constant-area duct that appears to do nothing — is one of the most carefully designed parts of the engine.

**Thermal choking during the transition.** In the transition region the combustion is partly subsonic and partly supersonic, and the heat release must be scheduled so that the flow never reaches $M = 1$ at the wrong place. **Rayleigh choking** ([2.3](02-03-combustion-for-propulsion.md)) sets a hard limit on how much heat can be added at a given Mach number, and the margin is narrowest exactly at the transition.

*A third worth naming.* **There is no way to test it on the ground.** No facility can produce true $M = 6$–$8$ flight enthalpy for more than milliseconds, so the transition has been demonstrated in flight only a handful of times — and each demonstration lasted seconds.

</details>

## Flashback

**From Lesson 2.2 (The ideal ramjet):** A ramjet flies at $M_\infty = 4$ where $T_\infty = 220$ K, with $T_{04} = 2400$ K, $c_p = 1005$ J/(kg·K), $Q_R = 43$ MJ/kg. (a) Find $V_\infty$ and $T_{0\infty}$. (b) Find $u_e/V_\infty$ and the specific thrust. (c) Find $f$ and $I_{sp}$. (d) At what Mach number does the specific thrust reach zero?

<details>
<summary>Solution</summary>

(a) $$a_\infty = \sqrt{1.4(287)(220)} = 297.3\ \mathrm{m/s}, \qquad V_\infty = 4(297.3) = 1189.3\ \mathrm{m/s},$$

$$T_{0\infty} = 220\left(1+0.2(16)\right) = 220(4.2) = 924\ \mathrm{K}.$$

(b) $$\frac{u_e}{V_\infty} = \sqrt{\frac{2400}{924}} = \sqrt{2.5974} = 1.6116,$$

$$\frac{F}{\dot m_a} = V_\infty\left(1.6116-1\right) = 1189.3(0.6116) = 727.4\ \mathrm{m/s}.$$

(c) $$f = \frac{1005(2400-924)}{43\times10^6} = \frac{1005(1476)}{43\times10^6} = 0.034497,$$

$$I_{sp} = \frac{727.4}{0.034497(9.80665)} = \frac{727.4}{0.33830} = 2150\ \mathrm{s}.$$

(d) $$T_{0\infty} = T_{04}: \qquad 220\left(1+0.2M^2\right) = 2400 \quad\Longrightarrow\quad M = \sqrt{\frac{2400/220-1}{0.2}} = 7.04.$$

*The bridge to this lesson.* At $M = 4$ this ramjet is healthy: $f = 0.0345$, $\phi = 0.50$, and a specific thrust of 727 m/s. **By $M = 7$ it produces nothing.**

**And notice which number ran out.** Not the fuel, not the materials, not the aerodynamics — the *temperature budget*. $T_{0\infty}$ climbed from 924 K at $M = 4$ to 2400 K at $M = 7.04$, consuming the entire interval the burner was supposed to use.

**The scramjet's answer is to stop the inlet from spending it.** At $M = 7$ a scramjet slowing to $M_2 = 2.33$ would see

$$T_2 = \frac{2376}{1+0.2(5.4289)} = \frac{2376}{2.0858} = 1139\ \mathrm{K},$$

leaving 1261 K of headroom to the same 2400 K limit — **a working engine where the ramjet has exactly none.**

**Same air, same fuel, same temperature limit, same flight condition.** The only difference is how much of the flight kinetic energy the inlet chose to convert into heat, and that choice is the entire content of the scramjet concept.

</details>

## Connections

- **Backward:** the ramjet's high-Mach cutoff is [2.2](02-02-ideal-ramjet.md)'s; the Rayleigh choking limit that constrains heat addition is [2.3](02-03-combustion-for-propulsion.md)'s; the stagnation-temperature relation is [1.2](01-02-compressible-flow-nozzles.md)'s; the oblique-shock inlet system is [`aerodynamics` 4.4](../../aerodynamics/lessons/04-04-oblique-shocks-prandtl-meyer.md)'s.
- **Forward:** [4.4](04-04-propulsion-design-space.md) places the scramjet's Mach window on the full propulsion map.
- **Sideways:** "do less of the thing that is destroying your margin" is the same move as the multi-shock inlet of [`aerodynamics` 4.3](../../aerodynamics/lessons/04-03-normal-shock-waves.md) (several weak shocks instead of one strong one) and as staging in [3.3](03-03-staging-mass-ratio.md) (several small exponentials instead of one large one). In each case a quantity that scales nonlinearly with a step size is tamed by taking smaller steps — and in each case the price is more hardware, more complexity, or, here, a millisecond of chemistry.
