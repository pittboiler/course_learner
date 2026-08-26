# Propulsion · Lesson 2.3: Combustion for propulsion (an introduction)

> ⏱ ~15 min · Module 2: Air-breathing engines · Builds on: [2.2 The ideal ramjet](02-02-ideal-ramjet.md) · Unlocks: [2.4 The turbojet cycle](02-04-turbojet-cycle.md)

## Why this matters

Every cycle analysis so far has treated the combustor as a box that raises the temperature to whatever number you chose. This lesson asks what actually sets that number, and the answer turns out to constrain engine design in three independent ways.

**Chemistry sets a ceiling.** There is a maximum amount of fuel a given mass of air can burn, and burning it gives a specific temperature — the adiabatic flame temperature, about 2300–2600 K for kerosene. **You cannot get more heat out of air than the air can oxidize.**

**Materials set a lower ceiling.** A turbojet must protect its turbine, so it burns at roughly 30% of the chemically available fuel. **The turbine, not the chemistry, is what limits a gas turbine's fuel/air ratio.**

**And gas dynamics sets a third one.** Adding heat to a flowing gas accelerates it toward $M = 1$; add too much and the duct **chokes**, and the flow simply refuses. This is [Rayleigh choking](../reference.md#rayleigh-choking), and it is why combustors run at Mach 0.1–0.3 rather than at whatever speed is convenient.

The lesson is deliberately an introduction: we treat the combustor as a heat-addition box with known stoichiometry, and leave the chemical kinetics alone.

## The idea

**Stoichiometry says how much fuel the air can take.** Burning a hydrocarbon $\mathrm{C}_n\mathrm{H}_m$ completely needs $n+m/4$ moles of $\mathrm{O}_2$, and air is only 21% oxygen by volume. Working through the masses gives a **stoichiometric fuel/air ratio** near 0.068 for kerosene — one kilogram of fuel per fifteen of air.

**Real engines run lean, and how lean is the design decision.** The **[equivalence ratio](../reference.md#equivalence-ratio)** $\phi = f/f_{\rm stoich}$ measures it: $\phi = 1$ is stoichiometric, $\phi<1$ is lean, $\phi>1$ is rich.

**The temperature rise is the heat divided by the heat capacity.** Add $fQ_R$ joules per kilogram of air to $(1+f)$ kilograms of products at $c_p$: the rise is $fQ_R/[(1+f)c_p]$. **Simple, and accurate to about 10% if you use a hot-gas $c_p$ near 1150 J/(kg·K).**

**Above about 2000 K it stops being accurate, because of dissociation.** CO₂ and H₂O begin to break apart, absorbing energy that would otherwise raise the temperature. **Chemistry puts its own soft ceiling on the flame temperature at roughly 2400–2600 K**, whatever you do.

**A combustor is not a free heat-adder.** Heat addition in a constant-area duct drives the Mach number toward 1 from either side — subsonic flow accelerates, supersonic flow decelerates. **There is a maximum heat addition, beyond which the flow chokes and the upstream conditions must change.** That is Rayleigh flow, and it is a hard limit independent of materials.

**And the flame has to stay lit.** A kerosene flame propagates at under a metre per second; the air is moving at fifty. **Flame holders — bluff bodies, swirlers, recirculation zones — exist to create a low-speed pocket where the flame can anchor**, and the whole architecture of a combustor follows from that requirement.

## The formal version

**Stoichiometric combustion of a hydrocarbon.**

$$\mathrm{C}_n\mathrm{H}_m+\left(n+\frac{m}{4}\right)\left(\mathrm{O}_2+3.76\,\mathrm{N}_2\right)\longrightarrow n\,\mathrm{CO}_2+\frac{m}{2}\,\mathrm{H_2O}+3.76\left(n+\frac{m}{4}\right)\mathrm{N}_2$$

$$\boxed{\;f_{\rm stoich} = \frac{12.011n+1.008m}{\left(n+\frac{m}{4}\right)\left(32.00+3.76\times28.01\right)} = \frac{12.011n+1.008m}{137.3\left(n+\frac{m}{4}\right)}.\;}$$

| Fuel | Formula | $f_{\rm stoich}$ | $Q_R$ (LHV) |
|---|---|---|---|
| Kerosene / Jet-A | $\mathrm{C}_{12}\mathrm{H}_{23}$ | 0.0686 | 43 MJ/kg |
| Octane (gasoline) | $\mathrm{C}_8\mathrm{H}_{18}$ | 0.0666 | 44 MJ/kg |
| Methane (LNG) | $\mathrm{CH}_4$ | 0.0584 | 50 MJ/kg |
| Hydrogen | $\mathrm{H}_2$ | 0.0294 | 120 MJ/kg |

**Hydrogen's $f_{\rm stoich}$ is tiny and its $Q_R$ is huge** — the product $f_{\rm stoich}Q_R$, which is the heat available per kilogram of *air*, is 3.53 MJ/kg for hydrogen and 2.95 for kerosene. **Per unit of air, hydrogen is only 20% better; per unit of fuel mass it is nearly three times better.** That is why hydrogen wins on rockets (where you carry everything) and matters much less on air-breathers (where the air is free).

**Equivalence ratio.**

$$\boxed{\;\phi = \frac{f}{f_{\rm stoich}}.\;}$$

**Temperature rise across the combustor.**

$$\boxed{\;\Delta T = \frac{fQ_R\,\eta_b}{\left(1+f\right)c_p}, \qquad T_{04} = T_{03}+\Delta T,\;}$$

with combustion efficiency $\eta_b\approx0.98$–$0.99$ in a modern gas turbine, and $c_p\approx1150$ J/(kg·K) for hot combustion products (against 1005 for cold air — **use the hot value, or you will overpredict the temperature by 15%**).

**Inverting it** — the form used in cycle analysis:

$$\boxed{\;f = \frac{c_p\left(T_{04}-T_{03}\right)}{\eta_bQ_R-c_pT_{04}}\approx\frac{c_p\left(T_{04}-T_{03}\right)}{Q_R}\ \text{for }f\ll1.\;}$$

**Adiabatic flame temperature.** The temperature reached by stoichiometric, complete, adiabatic combustion. Simple $c_p$ arithmetic gives about 2700 K from a 300 K start; **measurement gives about 2300 K**, the difference being dissociation.

**Rayleigh flow (heat addition in a constant-area duct).** For frictionless flow of a perfect gas with heat addition,

$$\boxed{\;\frac{T_0}{T_0^*} = \frac{\left(\gamma+1\right)M^2\left[2+\left(\gamma-1\right)M^2\right]}{\left(1+\gamma M^2\right)^2},\;}$$

where $T_0^*$ is the stagnation temperature at which the duct chokes ($M = 1$).

| $M$ at burner entry | $T_0/T_0^*$ | Max $T_{04}$ from $T_{03} = 830$ K |
|---|---|---|
| 0.1 | 0.0468 | 17,700 K |
| 0.2 | 0.1736 | 4780 K |
| **0.3** | **0.3469** | **2390 K** |
| 0.4 | 0.5290 | 1570 K |
| 0.5 | 0.6914 | 1200 K |

**At $M = 0.4$ the duct chokes before the turbine limit is reached.** This is why gas-turbine combustors diffuse the flow to $M\approx0.1$–$0.2$ before burning, and why the diffuser between compressor and combustor is a real component rather than a piece of ducting.

**Flame stabilization.** A hydrocarbon laminar flame speed is $S_L\approx0.4$ m/s; turbulent flame speeds reach a few m/s; the bulk flow is 30–60 m/s. **Stabilization requires a recirculation zone** — created by a bluff-body flame holder (ramjets, afterburners) or by a swirler and primary-zone geometry (gas turbines) — in which hot products continuously re-ignite incoming mixture.

**Residence time** must exceed the chemical time: $\tau_{\rm res} = L/V\gtrsim1$–$3$ ms, which sets the combustor length.

## Picture

![A two-panel figure. Left: a gas-turbine combustor in cross-section, with the compressor-exit diffuser at the left slowing the flow from Mach 0.4 to Mach 0.15, a swirler and fuel injector at the head, and the liner divided into three labelled zones — a primary zone with a drawn recirculation vortex where the mixture burns near stoichiometric at about 2300 K, an intermediate zone, and a dilution zone where rows of holes admit bypass air that cools the stream to the turbine-inlet temperature of about 1600 K. A temperature trace along the axis rises steeply in the primary zone, peaks, and then falls through dilution, with the peak marked chemistry sets this and the exit marked the turbine sets this. Right: two plots stacked. The upper plots adiabatic flame temperature against equivalence ratio, rising from the inlet temperature at phi equals zero to a maximum slightly rich of stoichiometric and falling thereafter, with a dashed curve above it showing the no-dissociation prediction diverging above about 2000 kelvin, the gap shaded and labelled dissociation. Lower plot shows the Rayleigh limit: the maximum stagnation-temperature ratio plotted against burner-entry Mach number, falling steeply, with a horizontal line at the turbine limit and the crossing marked burn below this Mach number or the duct chokes.](assets/02-03-fig1.svg)

Left: why a combustor has zones. Chemistry wants stoichiometric; the turbine wants 1600 K; the dilution holes reconcile them.

Right: the two ceilings that are not about materials at all.

## Worked examples

**Example 1 (kerosene, from stoichiometry to a turbojet's fuel flow).** Take Jet-A as $\mathrm{C}_{12}\mathrm{H}_{23}$, $Q_R = 43$ MJ/kg.

*Stoichiometric ratio.* Oxygen required: $n+m/4 = 12+23/4 = 17.75$ mol per mol of fuel.

$$m_{\rm fuel} = 12(12.011)+23(1.008) = 144.13+23.18 = 167.31\ \mathrm{g/mol},$$

$$m_{\rm air} = 17.75\left(32.00+3.76\times28.01\right) = 17.75(137.32) = 2437.6\ \mathrm{g},$$

$$f_{\rm stoich} = \frac{167.31}{2437.6} = 0.06864.$$

**One kilogram of kerosene needs 14.6 kg of air.**

*A turbojet's actual fuel/air ratio.* With compressor exit at $T_{03} = 830$ K and turbine inlet at $T_{04} = 1600$ K, and $c_p = 1150$ J/(kg·K) for the hot gas:

$$f\approx\frac{c_p\left(T_{04}-T_{03}\right)}{Q_R} = \frac{1150(770)}{43\times10^6} = \frac{885{,}500}{43\times10^6} = 0.0206.$$

$$\phi = \frac{0.0206}{0.06864} = 0.300.$$

**The engine burns 30% of the fuel the air could take.** The other 70% of the air's oxidizing capacity is used as coolant.

*Where that air goes.* A combustor does not burn at $\phi = 0.3$ — a flame that lean would not stay lit. Instead it splits the flow:

**Primary zone: about 25% of the air**, burning near $\phi\approx0.9$–$1.0$ at 2200–2400 K, which is where the chemistry is fast and the flame is stable.

**Intermediate zone: another 25%**, completing the burnout of CO and soot.

**Dilution zone: the remaining 50%**, admitted through rows of large holes purely to cool the stream from 2300 K to the 1600 K the turbine can survive — and to do so with a *uniform* profile, because a hot streak of even 100 K will destroy a turbine blade.

**The three-zone architecture is a direct consequence of the gap between $\phi = 1$ (what chemistry wants) and $\phi = 0.3$ (what the turbine allows).**

*And a ramjet's is different for the same reason.* From [2.2](02-02-ideal-ramjet.md), a ramjet at $M = 3$ runs $f = 0.0417$, i.e. $\phi = 0.61$ — twice as rich, because there is no turbine downstream and the whole flow can be burned closer to stoichiometric. **A ramjet combustor is essentially a primary zone with no dilution.**

**Example 2 (the two ceilings, quantified).** Consider adding heat to air entering a combustor at $T_{03} = 830$ K.

*Ceiling 1 — chemistry.* At stoichiometric ($f = 0.0686$):

$$\Delta T = \frac{fQ_R}{\left(1+f\right)c_p} = \frac{0.0686(43\times10^6)}{1.0686(1150)} = \frac{2{,}949{,}800}{1228.9} = 2400\ \mathrm{K},$$

$$T_{\rm ad,ideal} = 830+2400 = 3230\ \mathrm{K}.$$

**Measurement gives about 2600 K.** The 630 K shortfall is **dissociation**: above roughly 2000 K, CO₂ ⇌ CO + ½O₂ and H₂O ⇌ H₂ + ½O₂ proceed to a significant extent, and each dissociation absorbs the energy its formation released. **The simple $c_p$ estimate is good to a few percent below 2000 K and progressively optimistic above it.**

*Ceiling 2 — Rayleigh choking.* If the combustor is a constant-area duct entered at Mach $M_3$, the maximum stagnation temperature is $T_0^* = T_{03}/(T_0/T_0^*)$:

| $M_3$ | Max $T_{04}$ | Binding? |
|---|---|---|
| 0.1 | 17,700 K | no |
| 0.2 | 4780 K | no |
| 0.3 | 2390 K | comparable to the chemical limit |
| 0.4 | **1570 K** | **yes — below the turbine limit of 1600 K** |
| 0.5 | 1200 K | severely |

**At $M_3 = 0.4$ the duct would choke before reaching the turbine-inlet temperature the cycle wants.** The flow would refuse the heat: the upstream conditions would readjust, reducing the mass flow, and the engine would not deliver its design performance.

*Reading it.* A compressor discharges at $M\approx0.3$–$0.4$, which is exactly the marginal region. **Hence the diffuser.** Every gas turbine has a pre-diffuser and dump diffuser between compressor exit and combustor, slowing the flow to $M\approx0.05$–$0.15$ before any fuel is added, at the cost of a 3–5% stagnation-pressure loss.

**And this is why a ramjet's burner is bulky.** A ramjet at $M = 3$ has $T_{03} = 616$ K and wants $T_{04} = 2400$ K, a ratio of 3.90. Since $T_0/T_0^*$ must be below $1/3.90 = 0.256$, the burner entry Mach number must be **below about 0.25** — so a ramjet's inlet must diffuse a $M = 3$ stream down to $M = 0.2$, and the combustor's cross-section must be correspondingly large. **The characteristic fat body of a ramjet missile is a Rayleigh-flow consequence.**

*The third constraint, briefly.* Even at the right Mach number and equivalence ratio, the flame must stay lit. At $M_3 = 0.15$ and 830 K, the flow speed is about 87 m/s while a turbulent kerosene flame propagates at a few m/s. **Without a recirculation zone the flame is simply blown out of the combustor**, which is what a flameout is — and relighting at altitude, where pressure and temperature are low and the chemical times are long, is a certification requirement that shapes injector design.

## Watch out

- **You might use cold-air $c_p = 1005$ J/(kg·K) for the combustor.** Use $\approx1150$ for hot products, or you will overpredict $\Delta T$ by about 15%.
- **You might trust the simple $\Delta T$ estimate above 2000 K.** Dissociation makes it optimistic by hundreds of kelvin at stoichiometric.
- **You might think a gas turbine burns lean throughout.** It burns near stoichiometric in the primary zone and dilutes afterwards; the overall $\phi = 0.3$ is a mixing result, not a flame condition.
- **You might ignore Rayleigh choking.** It is a hard gas-dynamic limit, independent of materials, and it is why combustor entry Mach numbers are so low.
- **You might compare fuels on $Q_R$ alone.** What a *combustor* can extract is $f_{\rm stoich}Q_R$ per kilogram of air, and by that measure hydrogen beats kerosene by only 20%.
- **You might use higher heating value (HHV).** Propulsion uses the **lower** heating value, since the water leaves as vapour.
- **You might forget combustion efficiency.** It is 0.98–0.99 at design but falls at altitude relight conditions and at very low power.

## One-liner

> Chemistry fixes how much fuel a kilogram of air can take ($f_{\rm stoich}\approx0.069$ for kerosene) and how hot that makes it ($\approx2300$ K, dissociation-limited), the turbine cuts that to $\phi\approx0.3$ and forces a three-zone burn-then-dilute architecture, and Rayleigh choking independently forbids adding that heat at more than about Mach 0.2 — which is why every combustor is preceded by a diffuser.

## Problems

**P1 (🟢)** Methane is $\mathrm{CH}_4$ with $Q_R = 50$ MJ/kg. (a) Write the stoichiometric combustion equation with air. (b) Find $f_{\rm stoich}$. (c) An engine runs at $f = 0.030$; find $\phi$. (d) Find the temperature rise for $c_p = 1150$ J/(kg·K).

**P2 (🟡)** A turbofan core has compressor exit at $T_{03} = 780$ K and a turbine-inlet limit of $T_{04} = 1750$ K, burning kerosene ($Q_R = 43$ MJ/kg, $f_{\rm stoich} = 0.0686$), with $\eta_b = 0.99$ and $c_p = 1150$ J/(kg·K). (a) Find $f$ and $\phi$. (b) If the core flow is 45 kg/s, find the fuel flow in kg/s and kg/h. (c) Find the temperature the primary zone would reach if 25% of the air burned all the fuel. (d) Comment on whether that primary-zone temperature is achievable.

**P3 (🔴)** A ramjet flies at $M_\infty = 3.0$ where $T_\infty = 220$ K, and its designer wants $T_{04} = 2400$ K in a constant-area combustor. (a) Find $T_{03}$ and the required stagnation-temperature ratio across the burner. (b) Using the Rayleigh relation, find the maximum burner-entry Mach number that permits this heat addition. (c) The combustor must pass $\dot m_a = 40$ kg/s at $p_{03} = 0.9\,p_{0\infty}$ with $p_\infty = 22.6$ kPa. Find the required combustor cross-sectional area. (d) The designer proposes raising $T_{04}$ to 2800 K. Find the new maximum entry Mach number and area, and identify two reasons besides area why this is a bad idea.

<details>
<summary>Solutions</summary>

**P1** (a) $$\mathrm{CH}_4+2\left(\mathrm{O}_2+3.76\,\mathrm{N}_2\right)\longrightarrow\mathrm{CO}_2+2\,\mathrm{H_2O}+7.52\,\mathrm{N}_2.$$

*(Here $n = 1$, $m = 4$, so $n+m/4 = 2$.)*

(b) $$m_{\rm fuel} = 12.011+4(1.008) = 16.04\ \mathrm{g/mol},$$
$$m_{\rm air} = 2\left(32.00+3.76\times28.01\right) = 2(137.32) = 274.6\ \mathrm{g},$$
$$f_{\rm stoich} = \frac{16.04}{274.6} = 0.05841.$$

(c) $$\phi = \frac{0.030}{0.05841} = 0.514.$$

(d) $$\Delta T = \frac{fQ_R}{\left(1+f\right)c_p} = \frac{0.030(50\times10^6)}{1.030(1150)} = \frac{1{,}500{,}000}{1184.5} = 1266\ \mathrm{K}.$$

**P2** (a) $$f = \frac{c_p\left(T_{04}-T_{03}\right)}{\eta_bQ_R-c_pT_{04}} = \frac{1150(1750-780)}{0.99(43\times10^6)-1150(1750)}$$

$$= \frac{1150(970)}{42.57\times10^6-2.0125\times10^6} = \frac{1{,}115{,}500}{40.5575\times10^6} = 0.02750.$$

$$\phi = \frac{0.02750}{0.0686} = 0.401.$$

*(The simple form $c_p\Delta T/Q_R = 1{,}115{,}500/43\times10^6 = 0.02594$ is 6% low — the correction matters at this temperature.)*

(b) $$\dot m_f = f\dot m_a = 0.02750(45) = 1.238\ \mathrm{kg/s} = 4456\ \mathrm{kg/h}.$$

*(For scale: a narrow-body airliner burns about 2500 kg/h per engine in cruise, so this core is running at a high-power condition.)*

(c) If only 25% of the air participates, the *local* fuel/air ratio in the primary zone is

$$f_{\rm pz} = \frac{f}{0.25} = \frac{0.02750}{0.25} = 0.1100, \qquad \phi_{\rm pz} = \frac{0.1100}{0.0686} = 1.604.$$

$$\Delta T_{\rm pz} = \frac{0.1100(0.99)(43\times10^6)}{1.1100(1150)} = \frac{4{,}682{,}700}{1276.5} = 3669\ \mathrm{K}, \qquad T_{\rm pz} = 780+3669 = 4449\ \mathrm{K}.$$

(d) **No — the number is meaningless, in two separate ways.**

**The mixture is rich, not stoichiometric.** $\phi_{\rm pz} = 1.60$ means there is 60% more fuel than the primary-zone air can oxidize. The excess simply cannot burn: the heat release is limited by the *oxygen*, not the fuel. The correct calculation caps the burn at $\phi = 1$:

$$\Delta T_{\max} = \frac{0.0686(0.99)(43\times10^6)}{1.0686(1150)} = \frac{2{,}920{,}300}{1228.9} = 2376\ \mathrm{K}, \qquad T\approx780+2376 = 3156\ \mathrm{K},$$

with the unburned fuel passing downstream to be consumed in the intermediate zone where more air is admitted.

**And even 3156 K is optimistic**, because of dissociation. The measured adiabatic flame temperature for stoichiometric kerosene from a 780 K start is about **2600 K**, some 550 K below the $c_p$ estimate.

*What this tells you about combustor design.* The primary zone is deliberately run **slightly rich** ($\phi\approx1.1$–$1.3$) rather than at $\phi = 1.6$, for three reasons: it stabilizes the flame (rich mixtures have wider stability limits at low pressure), it caps the peak temperature and hence NOx formation, and it leaves the completion of combustion to the intermediate zone where more air is available.

**The 25% figure in the problem is therefore a design *target* rather than a description** — real primary zones admit 20–30% of the air and are tuned so that $\phi_{\rm pz}$ lands just rich of 1. Getting that split right, across the whole throttle range and at relight conditions, is most of what combustor development consists of.

**P3** (a) $$T_{03} = T_{0\infty} = 220\left(1+0.2(9)\right) = 220(2.8) = 616\ \mathrm{K}.$$

$$\frac{T_{04}}{T_{03}} = \frac{2400}{616} = 3.896.$$

(b) The Rayleigh limit requires $T_{04}\leq T_0^*$, i.e.

$$\frac{T_{03}}{T_0^*}\leq\frac{T_{03}}{T_{04}} = \frac{1}{3.896} = 0.2567.$$

Solving $\dfrac{(\gamma+1)M^2\left[2+(\gamma-1)M^2\right]}{\left(1+\gamma M^2\right)^2} = 0.2567$ for $\gamma = 1.4$:

| $M_3$ | $T_0/T_0^*$ |
|---|---|
| 0.20 | 0.1736 |
| 0.25 | 0.2568 |
| 0.30 | 0.3469 |

$$\boxed{M_3\leq0.250.}$$

*(And this is the *choking* limit, at which the exit is exactly sonic. A practical design leaves margin and uses $M_3\approx0.15$–$0.20$.)*

(c) $$p_{0\infty} = 22.6\left(2.8\right)^{3.5} = 22.6(36.73) = 830.1\ \mathrm{kPa}, \qquad p_{03} = 0.9(830.1) = 747.1\ \mathrm{kPa}.$$

At $M_3 = 0.250$:

$$T_3 = \frac{616}{1+0.2(0.0625)} = \frac{616}{1.0125} = 608.4\ \mathrm{K}, \qquad p_3 = \frac{747.1}{\left(1.0125\right)^{3.5}} = \frac{747.1}{1.0443} = 715.4\ \mathrm{kPa},$$

$$\rho_3 = \frac{p_3}{RT_3} = \frac{715{,}400}{287(608.4)} = 4.097\ \mathrm{kg/m^3}, \qquad V_3 = M_3\sqrt{\gamma RT_3} = 0.250(494.4) = 123.6\ \mathrm{m/s}.$$

$$A_3 = \frac{\dot m_a}{\rho_3V_3} = \frac{40}{4.097(123.6)} = \frac{40}{506.4} = 0.0790\ \mathrm{m^2},$$

a duct about **0.32 m in diameter**. *(With the practical $M_3 = 0.18$ instead, the area grows to about 0.108 m², or 0.37 m diameter — the margin is not free.)*

(d) *At $T_{04} = 2800$ K.*

$$\frac{T_{04}}{T_{03}} = \frac{2800}{616} = 4.545 \quad\Longrightarrow\quad \frac{T_{03}}{T_0^*}\leq0.2200.$$

Interpolating the Rayleigh table between $M = 0.20$ (0.1736) and $M = 0.25$ (0.2568):

$$M_3\leq0.229.$$

$$T_3 = \frac{616}{1.0104} = 609.6\ \mathrm{K}, \quad p_3 = \frac{747.1}{1.0368} = 720.5\ \mathrm{kPa}, \quad \rho_3 = 4.118\ \mathrm{kg/m^3},$$
$$V_3 = 0.229(494.4) = 113.1\ \mathrm{m/s}, \qquad A_3 = \frac{40}{4.118(113.1)} = 0.0859\ \mathrm{m^2}$$

— a 9% area increase, which by itself is unremarkable.

*Two reasons besides area why this is a bad idea.*

**Dissociation eats the gain.** At 2400 K a stoichiometric hydrocarbon flame is already losing several hundred kelvin to dissociation, and the loss grows steeply with temperature. Pushing the *design* $T_{04}$ from 2400 to 2800 K requires a fuel/air ratio far beyond what the chemistry will deliver:

$$f_{\rm required} = \frac{1150(2800-616)}{43\times10^6} = 0.0584 \quad\Longrightarrow\quad \phi = 0.851,$$

against $\phi = 0.61$ at 2400 K. **The engine would be running at 85% of stoichiometric, deep into the region where dissociation dominates** — so much of the extra fuel would simply pass through as CO and H₂, appearing as unburned-hydrocarbon loss rather than temperature. The realized $T_{04}$ would fall well short of 2800 K.

**The combustor liner cannot survive it.** A ramjet liner at 2400 K is already cooled by a film of air along the wall and is close to the limit of nickel superalloys and ceramic coatings. Raising the core gas to 2800 K raises the radiative heat flux roughly as $T^4$ — a factor of $(2800/2400)^4 = 1.85$ — while the available cooling air is unchanged. **Liner burn-through is a matter of seconds, not hours.**

*And a third, for completeness.* The nozzle throat sees the same gas. Throat erosion in a ramjet is already life-limiting, and it accelerates sharply with temperature.

*The design conclusion.* **2400 K is not an arbitrary choice; it is close to the simultaneous limit of chemistry, materials, and cooling.** The way to get more thrust out of a ramjet is not to burn hotter — it is to fly at a Mach number nearer the specific-thrust peak, or to accept the scramjet's harder problem and stop decelerating the flow ([4.3](04-03-hypersonic-airbreathing-scramjet.md)).

</details>

## Flashback

**From Lesson 2.2 (The ideal ramjet):** A ramjet flies at $M_\infty = 2.5$ where $T_\infty = 220$ K, with $T_{04} = 2400$ K. (a) Find $V_\infty$ and $T_{0\infty}$. (b) Find $u_e/V_\infty$ and the specific thrust. (c) Find $f$ and $I_{sp}$ (use $c_p = 1005$ J/kg·K for consistency with that lesson). (d) Why does the specific thrust peak near this Mach number?

<details>
<summary>Solution</summary>

(a) $$V_\infty = 2.5\sqrt{1.4(287)(220)} = 2.5(297.3) = 743.3\ \mathrm{m/s},$$
$$T_{0\infty} = 220\left(1+0.2(6.25)\right) = 220(2.25) = 495\ \mathrm{K}.$$

(b) $$\frac{u_e}{V_\infty} = \sqrt{\frac{2400}{495}} = \sqrt{4.8485} = 2.2019,$$
$$\frac{F}{\dot m_a} = V_\infty\left(2.2019-1\right) = 743.3(1.2019) = 893.4\ \mathrm{m/s}.$$

(c) $$f = \frac{1005(2400-495)}{43\times10^6} = \frac{1{,}914{,}525}{43\times10^6} = 0.04452, \qquad \phi = \frac{0.04452}{0.0686} = 0.649.$$

$$I_{sp} = \frac{893.4}{0.04452(9.80665)} = \frac{893.4}{0.43659} = 2046\ \mathrm{s}.$$

(d) *Why the peak is here.* From [2.2](02-02-ideal-ramjet.md), P3, the specific thrust is maximized when the ram temperature ratio equals the cube root of the overall temperature ratio:

$$\tau_r = \tau_\lambda^{1/3}: \qquad 2.25\ \text{versus}\ \left(\frac{2400}{220}\right)^{1/3} = 2.218.$$

**Close enough that $M = 2.5$ is essentially at the optimum** (the exact peak is $M = 2.468$).

*The physical statement.* Below the peak, the flight speed is low, so even a large velocity ratio multiplies a small $V_\infty$. Above it, ram heating has consumed so much of the temperature budget that the ratio $u_e/V_\infty$ collapses toward 1. **The product $V_\infty(u_e/V_\infty-1)$ is a rising factor times a falling one, and its maximum is where their logarithmic derivatives balance** — which is what the cube-root condition expresses.

*The bridge to this lesson.* Notice $\phi = 0.649$. The ramjet at its best operating point is burning at nearly two-thirds of stoichiometric — **more than twice as rich as a turbojet, and close to the practical ceiling.**

That is not a coincidence: it is the same statement as the cube-root condition, read through the combustor. **Peak specific thrust occurs where the burner is working nearly as hard as chemistry allows**, and the ramjet's whole design converges on it — which is why a ramjet is a narrow-envelope engine and why its combustor, unlike a turbojet's, has no dilution zone to speak of. There is no spare air to dilute with.

</details>

## Connections

- **Backward:** the $f$ that cycle analysis needs is [2.1](02-01-propulsion-efficiencies-brayton.md)'s and [2.2](02-02-ideal-ramjet.md)'s, now derived rather than assumed; the stagnation relations behind the Rayleigh limit are [1.2](01-02-compressible-flow-nozzles.md)'s; the thermochemistry is [`engineering-thermodynamics`](../../engineering-thermodynamics/syllabus.md)'s and [`general-chemistry`](../../general-chemistry/syllabus.md)'s.
- **Forward:** [2.4](02-04-turbojet-cycle.md) uses $f$ from the turbine-inlet temperature to close the cycle; [3.4](03-04-chemical-rockets-liquids-solids.md) applies the same stoichiometry to rocket propellants, where the mixture ratio is chosen fuel-rich on purpose to lower $\mathcal{M}$; [4.3](04-03-hypersonic-airbreathing-scramjet.md) asks what happens when the residence time falls to a millisecond.
- **Sideways:** Rayleigh flow's "heat addition drives $M$ toward 1 from either side" is the thermal counterpart of Fanno flow's friction doing the same thing, and both are instances of the general principle that **any irreversibility drives a duct flow toward the sonic condition** — a statement about entropy, which is why the sonic point is the maximum-entropy state on both curves ([`engineering-thermodynamics`](../../engineering-thermodynamics/syllabus.md)).
