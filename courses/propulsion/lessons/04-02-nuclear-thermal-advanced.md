# Propulsion · Lesson 4.2: Nuclear-thermal and advanced in-space concepts

> ⏱ ~15 min · Module 4: Advanced and exotic propulsion · Builds on: [1.2 Compressible flow for nozzles](01-02-compressible-flow-nozzles.md), [4.1 Electric propulsion](04-01-electric-propulsion.md) · Unlocks: [4.4 Capstone: the propulsion design space](04-04-propulsion-design-space.md)

## Why this matters

[1.2](01-02-compressible-flow-nozzles.md) established the scaling that governs every thermal rocket: $u_e\propto\sqrt{T_0/\mathcal{M}}$. Chemistry caps $T_0$ near 3600 K and, because the fuel must also be the energy source, caps how light the exhaust can be.

**A nuclear-thermal rocket breaks the second constraint completely.** The reactor supplies the energy, so the propellant does not have to burn — and if it does not have to burn, it can be **pure hydrogen**, $\mathcal{M} = 2.016$, six times lighter than the best chemical exhaust.

**The result is $I_{sp}$ of 800–900 s at chemical-rocket thrust levels** — a combination nothing else offers. [4.1](04-01-electric-propulsion.md)'s ion engines reach higher $I_{sp}$ but at millinewtons; chemical rockets reach the thrust but at 465 s. **Nuclear thermal sits in the gap, and it is the only thing that does.**

This lesson computes the performance, identifies why the temperature ceiling moved rather than disappeared, and surveys the wider space of advanced concepts — placing each on the same $I_{sp}$-versus-thrust map that [4.4](04-04-propulsion-design-space.md) will formalize.

## The idea

**Separate the energy source from the working fluid.** In a chemical rocket they are the same substance: the propellant carries the energy in its bonds, so its composition is dictated by chemistry. **In a nuclear-thermal rocket the reactor makes heat and the propellant merely carries it away**, so the propellant is chosen for one property only — low molecular weight.

**Hydrogen, unambiguously.** $\mathcal{M} = 2.016$ against a hydrolox exhaust's 13 and a kerolox exhaust's 22. The exhaust velocity scales as $1/\sqrt{\mathcal{M}}$, so the same temperature gives 2.5 times the exhaust velocity of a kerolox engine.

**But the temperature ceiling did not vanish — it moved.** A chemical chamber is limited to about 3600 K by the flame itself; a nuclear reactor's core is limited to about 2900 K by the **fuel elements**, which must not melt while hydrogen at 3000 K flows over them. **Nuclear-thermal rockets actually run *cooler* than chemical ones.**

**And they win anyway**, because the molecular-weight gain of a factor of 6.5 dwarfs the temperature loss of 20%.

**The reactor is the whole engineering problem.** It must reach full power in seconds, survive a hydrogen environment at 2700 K, restart after months in space, and be safe to launch. **NERVA demonstrated all of this in the 1960s** — twenty engines, over 17 hours of hot-fire, up to 4100 MW thermal — and the programme was cancelled for lack of a mission, not for lack of a working engine.

**Nuclear-electric is the other branch.** Use the reactor to make electricity and drive an ion engine: this removes the solar array's $1/r^2$ problem and the power limit of [4.1](04-01-electric-propulsion.md), giving high $I_{sp}$ at usable power anywhere in the solar system. **The penalty is that a reactor plus a radiator is heavy** — the waste heat must be rejected by radiation alone.

**Everything further out is speculative in different degrees.** Gas-core reactors, fusion, and antimatter all offer higher performance; none has produced thrust.

## The formal version

**The thermal-rocket scaling, restated.**

$$\boxed{\;u_e = \sqrt{2c_pT_0\left[1-\left(\frac{p_e}{p_0}\right)^{\frac{\gamma-1}{\gamma}}\right]}, \qquad c_p = \frac{\gamma}{\gamma-1}\frac{R_u}{\mathcal{M}}.\;}$$

**For hydrogen** ($\mathcal{M} = 2.016$, $\gamma\approx1.4$ over the relevant range):

$$R = \frac{8314}{2.016} = 4124\ \mathrm{J/(kg\cdot K)}, \qquad c_p = \frac{1.4(4124)}{0.4} = 14{,}434\ \mathrm{J/(kg\cdot K)}.$$

**Compare with a hydrolox exhaust's $c_p\approx3840$ J/(kg·K)** — a factor of 3.76.

**Nuclear-thermal performance:**

| $T_0$ (K) | $V_{\max} = \sqrt{2c_pT_0}$ | $u_e$ at 88% expansion | $I_{sp}$ |
|---|---|---|---|
| 2500 | 8495 m/s | 7476 m/s | 762 s |
| 2700 (NERVA) | 8829 | 7769 | 792 s |
| 2900 | 9150 | 8052 | 821 s |
| 3100 (advanced) | 9460 | 8325 | 849 s |

**Against the best chemical engine's 465 s**, a factor of 1.7–1.8.

**Where the gain comes from, decomposed.** Relative to hydrolox ($T_0 = 3400$ K, $\mathcal{M} = 13$):

$$\frac{u_{e,\rm NTR}}{u_{e,\rm chem}}\approx\sqrt{\frac{T_{0,\rm NTR}/\mathcal{M}_{\rm NTR}}{T_{0,\rm chem}/\mathcal{M}_{\rm chem}}} = \sqrt{\frac{2900/2.016}{3400/13}} = \sqrt{\frac{1438.5}{261.5}} = \sqrt{5.50} = 2.35.$$

**Temperature costs a factor of $\sqrt{2900/3400} = 0.923$; molecular weight gains $\sqrt{13/2.016} = 2.54$.** The realized ratio is smaller than 2.35 because real nuclear engines run at lower expansion ratios and lose to nozzle and turbopump inefficiencies, giving about 1.75.

**Reactor sizing.** The thermal power needed is the enthalpy rise of the propellant:

$$\boxed{\;P_{\rm th} = \dot mc_p\left(T_0-T_{\rm in}\right).\;}$$

**A 100 kN nuclear-thermal engine at $I_{sp} = 850$ s** has $\dot m = F/(g_0I_{sp}) = 12.0$ kg/s, so

$$P_{\rm th} = 12.0(14{,}434)(2900-100)\approx485\ \mathrm{MW}.$$

**Half a gigawatt of reactor for 100 kN of thrust** — comparable to a small commercial power station, in a package a few metres long.

**Nuclear-electric, for contrast.** Rejecting waste heat by radiation only:

$$P_{\rm reject} = \varepsilon\sigma A T_{\rm rad}^4,$$

so a 1 MW-electric system at 30% conversion efficiency must radiate 2.3 MW. At $T_{\rm rad} = 800$ K and $\varepsilon = 0.9$:

$$A = \frac{2.3\times10^6}{0.9\left(5.67\times10^{-8}\right)\left(800\right)^4} = \frac{2.3\times10^6}{20{,}900} = 110\ \mathrm{m^2}$$

of radiator. **The radiator, not the reactor, usually dominates a nuclear-electric system's mass.**

**The concept landscape:**

| Concept | $I_{sp}$ (s) | Thrust | $T/W$ | Status |
|---|---|---|---|---|
| Chemical (best) | 465 | MN | 50–100 | flying |
| **Solid-core nuclear thermal** | **800–900** | **100 kN–1 MN** | **3–7** | ground-tested (NERVA, 1960s) |
| Nuclear-electric + ion | 3000–10,000 | N | $10^{-4}$ | small demos only |
| Gas-core nuclear thermal | 1500–3000 | 100 kN | 1–3 | concept |
| Solar thermal | 700–900 | 1–10 N | $10^{-3}$ | concept / small tests |
| Fusion (various) | 10,000–100,000 | ? | ? | no net-energy device exists |
| Antimatter-catalyzed | $10^5$ | ? | ? | production rate is $10^{-9}$ g/year |

## Picture

![A two-panel figure. Left: a nuclear-thermal rocket in cross-section, with a liquid-hydrogen tank at the top feeding a turbopump, the hydrogen then routed through the nozzle's regenerative cooling jacket and the reflector before entering the reactor core, drawn as a bundle of hexagonal fuel elements with axial coolant channels; the hydrogen leaves the core at 2900 kelvin and expands through the nozzle. Control drums are shown in the reflector. A bracket beside the core reads the reactor makes heat, the hydrogen only carries it, and a second annotation at the fuel elements reads the temperature ceiling lives here, at 2900 K, not in a flame. Right: a scatter plot of specific impulse against thrust, both on logarithmic axes, with labelled regions — chemical rockets at high thrust and low specific impulse, solid-core nuclear thermal above and slightly left of them, nuclear-electric and ion engines far to the upper left at high specific impulse and tiny thrust, and speculative concepts sketched as dashed ellipses beyond. A diagonal dashed line marks constant jet power, and the empty region at both high thrust and high specific impulse is shaded and labelled requires enormous power, nothing lives here.](assets/04-02-fig1.svg)

Left: the architecture, and where its limit sits.

Right: the map. Nuclear thermal occupies the one gap between chemical thrust and electric efficiency.

## Worked examples

**Example 1 (a NERVA-class engine, from first principles).** A solid-core nuclear-thermal rocket heats hydrogen to $T_0 = 2900$ K at $p_0 = 3.1$ MPa and expands it through a nozzle of area ratio 100, giving $p_e/p_0 = 1.4\times10^{-3}$. Take $\gamma = 1.4$, $\mathcal{M} = 2.016$.

*Gas properties.*

$$R = \frac{8314}{2.016} = 4124\ \mathrm{J/(kg\cdot K)}, \qquad c_p = \frac{1.4(4124)}{0.4} = 14{,}434\ \mathrm{J/(kg\cdot K)}.$$

*Exhaust velocity.*

$$V_{\max} = \sqrt{2c_pT_0} = \sqrt{2(14{,}434)(2900)} = \sqrt{8.372\times10^7} = 9150\ \mathrm{m/s},$$

$$\left(\frac{p_e}{p_0}\right)^{2/7} = \left(1.4\times10^{-3}\right)^{0.28571} = 0.1530, \qquad \sqrt{1-0.1530} = 0.9203,$$

$$u_e = 9150(0.9203) = 8421\ \mathrm{m/s}, \qquad I_{sp} = \frac{8421}{9.80665} = 859\ \mathrm{s}.$$

*(Real NERVA engines achieved 825–850 s, so the ideal calculation is about right; nozzle, turbopump-bleed, and non-equilibrium losses account for the small shortfall.)*

*Sizing for 110 kN of thrust.*

$$\dot m = \frac{F}{u_e} = \frac{110{,}000}{8421} = 13.06\ \mathrm{kg/s},$$

$$P_{\rm th} = \dot mc_p\left(T_0-T_{\rm in}\right) = 13.06(14{,}434)(2900-100) = 528\ \mathrm{MW}.$$

*Reading it.* Three points, and the third is the design driver:

**859 s at 110 kN is a combination nothing else offers.** An ion engine of that $I_{sp}$ class would produce about 0.5 N; a chemical engine of that thrust would give 450 s.

**The reactor is enormous in power terms.** 528 MW thermal in a core perhaps 1.3 m long and 0.9 m in diameter — a power density of about 600 MW/m³, roughly six times a commercial pressurized-water reactor's. **This is possible only because hydrogen is an extraordinarily good coolant** ($c_p$ of 14.4 kJ/(kg·K) against water's 4.2) and because the engine runs for minutes rather than years.

**And the propellant is bulky.** 13.06 kg/s of liquid hydrogen at 71 kg/m³ is 0.184 m³/s — **662 m³ per hour**. A 20-minute burn needs 15,700 kg of hydrogen occupying 221 m³, which is a tank 7 m in diameter and 6 m long. **Hydrogen's density is nuclear thermal's chief practical liability**, exactly as it is for hydrolox ([3.2](03-02-specific-impulse-rocket-performance.md)).

**Example 2 (what nuclear thermal buys on a Mars mission).** Compare a chemical and a nuclear-thermal stage for a crewed Mars transfer requiring $\Delta v = 5.9$ km/s (trans-Mars injection plus Mars orbit insertion), with a 60 t payload.

*Chemical (hydrolox, $I_{sp} = 450$ s, $\varepsilon = 0.12$ — poor, because hydrogen must be stored for months):*

$$v_e = 4413\ \mathrm{m/s}, \qquad MR = e^{5900/4413} = e^{1.33696} = 3.8075,$$

$$\lambda = \frac{1/3.8075-0.12}{1-0.12} = \frac{0.262639-0.12}{0.88} = 0.16209,$$

$$m_0 = \frac{60{,}000}{0.16209} = 370{,}156\ \mathrm{kg}.$$

*Nuclear thermal ($I_{sp} = 850$ s, $\varepsilon = 0.30$ — much worse, because the reactor, shielding and radiators are heavy):*

$$v_e = 8336\ \mathrm{m/s}, \qquad MR = e^{5900/8336} = e^{0.70777} = 2.0295,$$

$$\lambda = \frac{1/2.0295-0.30}{1-0.30} = \frac{0.492732-0.30}{0.70} = 0.27532,$$

$$m_0 = \frac{60{,}000}{0.27532} = 217{,}927\ \mathrm{kg}.$$

*The comparison.*

| | Chemical (450 s, $\varepsilon = 0.12$) | Nuclear thermal (850 s, $\varepsilon = 0.30$) |
|---|---|---|
| Mass ratio | 3.807 | 2.030 |
| Payload fraction | 0.162 | **0.275** |
| Initial mass in LEO | 370 t | **218 t** |
| Propellant | 273 t | 111 t |
| Dry stage | 37 t | 47 t |

**A 41% reduction in the mass that must be launched to low Earth orbit** — from 370 t to 218 t. **At any plausible launch cost that is the difference between a programme and a proposal.**

*Reading the trade carefully, because the structural penalty is severe.* The nuclear stage's $\varepsilon = 0.30$ is more than twice the chemical stage's, and that alone would be crippling: at $\varepsilon = 0.30$ the single-stage wall is at

$$\Delta v_{\max} = v_e\ln\frac{1}{0.30} = 8336(1.204) = 10{,}036\ \mathrm{m/s},$$

so the mission at 5.9 km/s uses 59% of the available range — comfortable, but only because $v_e$ is so large.

**Run the same $\varepsilon = 0.30$ with a chemical engine and the mission is impossible**: $\Delta v_{\max} = 4413(1.204) = 5313$ m/s $<5900$ m/s. **The high $I_{sp}$ is not merely improving the number; it is buying the structural budget that makes a heavy reactor affordable at all.**

*And the second-order benefit that this calculation hides.* A higher $I_{sp}$ also opens **faster trajectories.** The 5.9 km/s figure is for a minimum-energy transfer with a 9-month cruise; a 6-month transfer costs perhaps 8.5 km/s, at which the chemical option's payload fraction collapses to 0.029 (a 2050 t vehicle) while the nuclear option still manages 0.087 (692 t). **For crewed Mars missions, where radiation dose and consumables scale with trip time, that is the whole argument.**

*Why it has not flown, in one paragraph.* The engineering was demonstrated: NERVA ran 20 engines for a cumulative 17 hours, reached 4100 MW, and restarted repeatedly. What has never been resolved is the **programmatic** problem — launching a reactor (even unstarted and therefore only mildly radioactive, since fission products accumulate only after operation), testing it without venting fission products to the atmosphere, and sustaining a decade of development for a mission that keeps being deferred. **The 2020s have seen renewed programmes (DRACO, and several commercial efforts), and the technical case is unchanged from 1972.**

## Watch out

- **You might expect a nuclear rocket to run hotter than a chemical one.** It runs *cooler* — 2900 K against 3600 K — and wins on molecular weight alone.
- **You might use hydrolox's $c_p$.** Pure hydrogen has $c_p = 14{,}434$ J/(kg·K), nearly four times a hydrolox exhaust's.
- **You might ignore the structural penalty.** Reactor, shielding, and radiators push $\varepsilon$ to 0.25–0.35, which cancels much of the $I_{sp}$ gain on low-$\Delta v$ missions.
- **You might confuse nuclear-thermal with nuclear-electric.** Thermal: reactor heats propellant directly, high thrust, $I_{sp}\approx850$ s. Electric: reactor makes electricity for an ion engine, tiny thrust, $I_{sp}\approx5000$ s.
- **You might forget the radiator in a nuclear-electric system.** Waste heat can only be radiated, and the radiator often outmasses the reactor.
- **You might treat gas-core, fusion, or antimatter concepts as engineering.** None has produced thrust; the performance figures are what the physics permits, not what anyone has built.
- **You might assume hydrogen's boil-off is manageable.** Over a nine-month Mars cruise it is a first-order design problem, and it is why some concepts propose ammonia or methane despite the $I_{sp}$ loss.

## One-liner

> Separate the energy source from the working fluid and the propellant no longer has to burn — so it can be pure hydrogen at $\mathcal{M} = 2$, and even at a *lower* temperature than a chemical flame the exhaust velocity nearly doubles to $I_{sp}\approx850$ s at chemical thrust levels, filling the one gap on the thrust-versus-$I_{sp}$ map that nothing else occupies.

## Problems

**P1 (🟢)** A nuclear-thermal engine heats hydrogen ($\mathcal{M} = 2.016$, $\gamma = 1.4$) to $T_0 = 2750$ K. (a) Find $R$ and $c_p$. (b) Find $V_{\max}$. (c) With an expansion bracket of $\sqrt{1-(p_e/p_0)^{2/7}} = 0.905$, find $u_e$ and $I_{sp}$. (d) For $F = 75$ kN, find the mass flow and the reactor thermal power (inlet 90 K).

**P2 (🟡)** Compare exhaust velocities using $u_e\propto\sqrt{T_0/\mathcal{M}}$ at the same expansion ratio. (a) Kerolox: $T_0 = 3600$ K, $\mathcal{M} = 22$. (b) Hydrolox: $T_0 = 3400$ K, $\mathcal{M} = 13$. (c) Nuclear thermal: $T_0 = 2900$ K, $\mathcal{M} = 2.016$. (d) Express each as a ratio to kerolox and comment on which factor dominates in each comparison.

**P3 (🔴)** A nuclear-electric tug uses a 1.2 MW-electric reactor at 28% thermal-to-electric conversion, driving ion thrusters at $I_{sp} = 5000$ s and $\eta = 0.70$. (a) Find the thermal power, the waste heat, and the thrust. (b) The radiator operates at 750 K with emissivity 0.88; find the radiating area, and comment on its likely mass at 4 kg/m². (c) The reactor plus shield plus power conversion masses 8000 kg. Find the total power-system mass and the system's specific mass $\alpha$ in kg/kW-electric. (d) The tug must move a 40 t payload through 8 km/s. Find the propellant mass, the total system mass, and the trip time, and compare with a nuclear-*thermal* stage at $I_{sp} = 850$ s and $\varepsilon = 0.30$.

<details>
<summary>Solutions</summary>

**P1** (a) $$R = \frac{8314}{2.016} = 4124\ \mathrm{J/(kg\cdot K)}, \qquad c_p = \frac{\gamma R}{\gamma-1} = \frac{1.4(4124)}{0.4} = 14{,}434\ \mathrm{J/(kg\cdot K)}.$$

(b) $$V_{\max} = \sqrt{2c_pT_0} = \sqrt{2(14{,}434)(2750)} = \sqrt{7.939\times10^7} = 8910\ \mathrm{m/s}.$$

(c) $$u_e = 8910(0.905) = 8064\ \mathrm{m/s}, \qquad I_{sp} = \frac{8064}{9.80665} = 822\ \mathrm{s}.$$

(d) $$\dot m = \frac{F}{u_e} = \frac{75{,}000}{8064} = 9.30\ \mathrm{kg/s},$$

$$P_{\rm th} = \dot mc_p\left(T_0-T_{\rm in}\right) = 9.30(14{,}434)(2750-90) = 9.30(14{,}434)(2660) = 357\ \mathrm{MW}.$$

**P2** (a) $$\sqrt{\frac{T_0}{\mathcal{M}}} = \sqrt{\frac{3600}{22}} = \sqrt{163.6} = 12.79.$$

(b) $$\sqrt{\frac{3400}{13}} = \sqrt{261.5} = 16.17.$$

(c) $$\sqrt{\frac{2900}{2.016}} = \sqrt{1438.5} = 37.93.$$

(d) *Ratios to kerolox:*

| | $\sqrt{T_0/\mathcal{M}}$ | Ratio to kerolox | $\sqrt{T_0}$ factor | $\sqrt{1/\mathcal{M}}$ factor |
|---|---|---|---|---|
| Kerolox | 12.79 | 1.000 | 1.000 | 1.000 |
| Hydrolox | 16.17 | 1.264 | 0.972 | 1.301 |
| Nuclear thermal | 37.93 | 2.966 | 0.898 | 3.304 |

*Comment.* **In both comparisons the temperature factor is a mild penalty and the molecular-weight factor is a large gain.**

**Hydrolox versus kerolox:** the flame is 200 K cooler ($\times0.972$) and the exhaust is 41% lighter ($\times1.301$), for a net 26% gain. **Molecular weight wins by a factor of about 12 in leverage.**

**Nuclear thermal versus kerolox:** the exhaust is 700 K cooler ($\times0.898$) and 91% lighter ($\times3.304$), for a net factor of 2.97. **Molecular weight wins by a factor of about 32.**

*The general statement.* $u_e\propto\sqrt{T_0}\,\mathcal{M}^{-1/2}$, and across the whole range of real propulsion systems $T_0$ varies by a factor of 1.4 while $\mathcal{M}$ varies by a factor of 11. **The temperature is nearly a constant of the technology; the molecular weight is the variable.** That is why the entire history of thermal-rocket improvement is a history of getting the exhaust lighter.

**P3** (a) $$P_{\rm th} = \frac{P_e}{\eta_{\rm conv}} = \frac{1.2\times10^6}{0.28} = 4.286\ \mathrm{MW},$$

$$P_{\rm waste} = 4.286-1.2 = 3.086\ \mathrm{MW}.$$

$$v_e = 9.80665(5000) = 49{,}033\ \mathrm{m/s}, \qquad F = \frac{2\eta P_e}{v_e} = \frac{2(0.70)(1.2\times10^6)}{49{,}033} = \frac{1.68\times10^6}{49{,}033} = 34.26\ \mathrm{N}.$$

*(Note the thruster's own waste heat, $0.30\times1.2$ MW $= 0.36$ MW, must also be rejected — mostly as beam-impingement and radiation from the thruster itself. Ignoring it here, as the problem implies.)*

(b) $$A = \frac{P_{\rm waste}}{\varepsilon\sigma T^4} = \frac{3.086\times10^6}{0.88\left(5.67\times10^{-8}\right)\left(750\right)^4}.$$

$$\left(750\right)^4 = 3.1641\times10^{11}, \qquad 0.88(5.67\times10^{-8})(3.1641\times10^{11}) = 15{,}787\ \mathrm{W/m^2},$$

$$A = \frac{3.086\times10^6}{15{,}787} = 195.5\ \mathrm{m^2}.$$

*Mass at 4 kg/m²:* $m_{\rm rad} = 4(195.5) = 782$ kg.

*Comment.* **A radiator the size of a tennis court**, and it must be deployed, survive micrometeoroids, and radiate from both faces (which the 4 kg/m² figure assumes — a single-sided radiator would need twice the area).

**The $T^4$ dependence is the design lever.** Raising the radiator temperature from 750 to 1000 K would cut the area to 62 m², a factor of 3.2 — which is why advanced concepts push for high-temperature working fluids (liquid metal Rankine or Brayton cycles) despite the materials difficulty. **Radiator temperature is to nuclear-electric what turbine-inlet temperature is to a gas turbine.**

(c) $$m_{\rm power} = 8000+782 = 8782\ \mathrm{kg},$$

$$\alpha = \frac{8782}{1200\ \mathrm{kW}} = 7.32\ \mathrm{kg/kW} = 7.32\times10^{-3}\ \mathrm{kg/W}.$$

*(For comparison, [4.1](04-01-electric-propulsion.md)'s solar array was $0.025$ kg/W — **the nuclear system is 3.4 times lighter per watt**, which is exactly why it becomes attractive at high power and far from the Sun.)*

(d) *Nuclear-electric.*

$$m_f = 40{,}000+8782 = 48{,}782\ \mathrm{kg}\quad\text{(payload plus power system, ignoring tankage)},$$

$$e^{8000/49{,}033} = e^{0.16316} = 1.17724, \qquad m_p = 48{,}782(0.17724) = 8646\ \mathrm{kg},$$

$$m_0 = 48{,}782+8645 = 57{,}427\ \mathrm{kg}.$$

*Trip time.*

$$\dot m = \frac{F}{v_e} = \frac{34.26}{49{,}033} = 6.987\times10^{-4}\ \mathrm{kg/s},$$

$$t = \frac{8645}{6.988\times10^{-4}} = 1.237\times10^7\ \mathrm{s} = 143\ \mathrm{days} = 0.39\ \mathrm{years}.$$

*Nuclear-thermal, same mission.*

$$v_e = 9.80665(850) = 8336\ \mathrm{m/s}, \qquad MR = e^{8000/8336} = e^{0.95969} = 2.6110,$$

$$\lambda = \frac{1/2.6110-0.30}{1-0.30} = \frac{0.382996-0.30}{0.70} = 0.118565,$$

$$m_0 = \frac{40{,}000}{0.118565} = 337{,}369\ \mathrm{kg}.$$

*The comparison.*

| | Nuclear-electric (5000 s) | Nuclear-thermal (850 s) |
|---|---|---|
| Propellant | 8.6 t | 208 t |
| Power/propulsion system | 8.8 t | 89 t (stage dry mass) |
| **Initial mass** | **57.4 t** | **337 t** |
| Thrust | 34 N | ~100 kN |
| Burn duration | 143 days | ~30 minutes |

**The nuclear-electric tug does the mission with a sixth of the initial mass** — and takes five months to do it instead of half an hour.

*Reading the trade.* Three points:

**At $\Delta v = 8$ km/s the electric option is overwhelming on mass.** $\Delta v/v_e$ is 0.163 for the electric system against 0.960 for the thermal one, so the exponential barely engages at all: it uses 8.6 t of propellant where the thermal stage uses 208 t.

**The thermal stage's $\varepsilon = 0.30$ is what ruins it.** At $\Delta v/v_e = 0.96$ the mass ratio is 2.61, which with a 30% structural coefficient leaves a payload fraction of only 0.119. **The reactor mass is being charged against a mass ratio that is not large enough to justify it.**

**And time is the entire counter-argument.** 143 days of continuous thrusting is acceptable for cargo, and unacceptable for crew — because the tug must spiral slowly outward through the radiation belts, and because a crewed vehicle's consumables and radiation dose scale with duration.

*The architecture this implies, and it is what mission studies actually propose.* **Nuclear-electric for cargo, nuclear-thermal (or chemical) for crew.** Send propellant, habitats, and return vehicles ahead on slow high-$I_{sp}$ tugs; send people on a fast high-thrust vehicle. **The two technologies are not competitors; they are the two halves of a Mars architecture**, and the choice between them is decided by whether the payload is patient.

</details>

## Flashback

**From Lesson 4.1 (Electric propulsion):** A Hall thruster runs at $I_{sp} = 2000$ s, $\eta = 0.55$, with $P = 10$ kW. (a) Find $v_e$ and the thrust. (b) Find the specific power in W/N. (c) A 3000 kg spacecraft uses it for 4000 m/s; find the propellant mass and firing time. (d) How would a nuclear-thermal stage compare on the same manoeuvre?

<details>
<summary>Solution</summary>

(a) $$v_e = 9.80665(2000) = 19{,}613\ \mathrm{m/s}, \qquad F = \frac{2(0.55)(10{,}000)}{19{,}613} = \frac{11{,}000}{19{,}613} = 0.5608\ \mathrm{N}.$$

(b) $$\frac{P}{F} = \frac{10{,}000}{0.5608} = 17{,}830\ \mathrm{W/N}.$$

(c) $$e^{4000/19{,}613} = e^{0.20395} = 1.22624, \qquad m_p = 3000(0.22624) = 679\ \mathrm{kg},$$

$$\dot m = \frac{0.5608}{19{,}613} = 2.860\times10^{-5}\ \mathrm{kg/s}, \qquad t = \frac{679}{2.860\times10^{-5}} = 2.374\times10^7\ \mathrm{s} = 275\ \mathrm{days}.$$

(d) *Nuclear thermal at $I_{sp} = 850$ s:*

$$v_e = 8336\ \mathrm{m/s}, \qquad e^{4000/8336} = e^{0.47984} = 1.61582, \qquad m_p = 3000(0.61582) = 1847\ \mathrm{kg}.$$

*The comparison.*

| | Electric (2000 s) | Nuclear thermal (850 s) |
|---|---|---|
| Propellant | 679 kg | 1848 kg |
| Thrust | 0.56 N | ~100 kN |
| Firing time | 275 days | minutes |
| Power system | 10 kW array/reactor | none beyond the reactor itself |
| Structural penalty | modest | severe ($\varepsilon\approx0.30$) |

**The electric option uses a third of the propellant and takes nine months; the thermal option uses three times the propellant and takes minutes.**

*The bridge between the two lessons.* Both technologies escape the chemical $I_{sp}$ ceiling, and they do it by attacking *different* terms in $u_e\propto\sqrt{T_0/\mathcal{M}}$:

**Nuclear thermal attacks $\mathcal{M}$**, using pure hydrogen because the reactor supplies the energy — and stays a thermal rocket, so it keeps chemical-scale thrust.

**Electric propulsion abandons the formula entirely.** There is no $T_0$ and no $\mathcal{M}$ in $v_e = \sqrt{2qV/m}$ — the exhaust velocity is set by a voltage, which has no ceiling.

**And the price is exactly the difference in their thrust.** A thermal rocket's power comes free with the propellant flow ($P = \tfrac12\dot mu_e^2$ is whatever the reactor delivers); an electric thruster's power must be generated, converted, and its waste heat radiated. **That is why one gives 100 kN and the other 0.56 N**, and why the gap between them on the $I_{sp}$-thrust map is the most important feature of that map.

</details>

## Connections

- **Backward:** the $u_e\propto\sqrt{T_0/\mathcal{M}}$ scaling is [1.2](01-02-compressible-flow-nozzles.md)'s; the $I_{sp}$ and structural-coefficient arithmetic is [3.1](03-01-rocket-equation.md)'s and [3.2](03-02-specific-impulse-rocket-performance.md)'s; the power-limited thrust relation is [4.1](04-01-electric-propulsion.md)'s.
- **Forward:** [4.4](04-04-propulsion-design-space.md) places every concept in this lesson on one map and matches them to missions.
- **Sideways:** the reactor physics — criticality, control drums, fuel-element thermal limits, and the neutronics of a hydrogen-moderated core — is [`reactor-physics`](../../reactor-physics/syllabus.md)'s and [`intro-nuclear-engineering`](../../intro-nuclear-engineering/syllabus.md)'s; the radiator's $T^4$ law is [`heat-transfer`](../../heat-transfer/syllabus.md)'s, and its dominance of nuclear-electric system mass is the same "rejecting heat is harder than making it" constraint that sets the size of every power plant's cooling system.
