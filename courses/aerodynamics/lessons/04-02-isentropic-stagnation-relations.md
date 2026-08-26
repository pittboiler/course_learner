# Aerodynamics · Lesson 4.2: Isentropic and stagnation relations

> ⏱ ~15 min · Module 4: Compressible and supersonic flow · Builds on: [4.1 Compressibility, sound speed, and the energy equation](04-01-compressibility-sound-speed-energy.md) · Unlocks: [4.3 Normal shock waves](04-03-normal-shock-waves.md), [4.5 Quasi-1-D nozzle flow](04-05-quasi-1d-nozzle-flow.md)

## Why this matters

[4.1](04-01-compressibility-sound-speed-energy.md) gave one stagnation relation, $T_0/T = 1+0.2M^2$, from the energy equation alone. This lesson gets the other two — for pressure and density — by adding the assumption that the flow is **isentropic**, and the result is a complete dictionary between Mach number and every thermodynamic property.

**That dictionary is how compressible aerodynamics is actually done.** You never solve differential equations for a nozzle or a supersonic inlet; you look up ratios as functions of $M$, chain them together, and read off the answer. Every table in the back of a gas-dynamics text is these three formulas.

It also introduces the **sonic reference state** — the conditions the flow would have if it were accelerated to $M = 1$. That state is what makes nozzle sizing possible ([4.5](04-05-quasi-1d-nozzle-flow.md)) and it is where the famous numbers $0.528$ and $0.833$ come from.

## The idea

**Isentropic means reversible and adiabatic.** Most of a compressible flow field qualifies: away from shocks and boundary layers, there is no friction to dissipate and no time for heat to conduct. **The exceptions — shocks and boundary layers — are exactly the places where the assumption fails**, and knowing that is half of using it correctly.

**One assumption, two more relations.** Adiabatic alone gave $T_0/T$. Adding reversibility gives $p/\rho^\gamma = $ constant, which converts the temperature ratio into pressure and density ratios by raising it to a power. **Everything follows from $T_0/T = 1+0.2M^2$ plus exponents.**

**Stagnation properties are the flow's identity card.** $T_0$, $p_0$, and $\rho_0$ are the conditions the fluid *would* have if brought to rest isentropically. In a well-behaved flow they are constant everywhere — so a whole flow field is described by two numbers ($p_0$, $T_0$) plus the local Mach number.

**And when they *change*, something interesting happened.** $T_0$ changing means heat was added or work was done. $p_0$ changing means entropy was generated: a shock, friction, or mixing. **Tracking stagnation properties is how you audit a compressible flow for losses.**

**The sonic state is a universal reference.** Since $M = 1$ is the flow's pivotal condition, it is natural to reference everything to it. The ratios there are pure functions of $\gamma$: $T^*/T_0 = 0.8333$, $p^*/p_0 = 0.5283$, $\rho^*/\rho_0 = 0.6339$. **Memorize $0.528$** — it is the pressure ratio at which a nozzle chokes, and it decides whether every valve, orifice, and rocket in the world is running critical.

**There is also a maximum possible speed.** Expand a gas to zero pressure and all its enthalpy becomes kinetic energy: $V_{\max} = \sqrt{2c_pT_0}$. Nothing in an adiabatic flow can exceed it, and it is a useful sanity bound.

## The formal version

**The three isentropic relations.** From $T_0/T = 1+\tfrac{\gamma-1}{2}M^2$ and $p\propto\rho^\gamma\propto T^{\gamma/(\gamma-1)}$:

$$\boxed{\;\frac{T_0}{T} = 1+\frac{\gamma-1}{2}M^2, \qquad \frac{p_0}{p} = \left(1+\frac{\gamma-1}{2}M^2\right)^{\frac{\gamma}{\gamma-1}}, \qquad \frac{\rho_0}{\rho} = \left(1+\frac{\gamma-1}{2}M^2\right)^{\frac{1}{\gamma-1}}.\;}$$

For air ($\gamma = 1.4$): exponents $1$, $3.5$, and $2.5$ on $\left(1+0.2M^2\right)$.

*In words: one bracket, three exponents.*

**The working table** (air, $\gamma = 1.4$):

| $M$ | $T/T_0$ | $p/p_0$ | $\rho/\rho_0$ |
|---|---|---|---|
| 0.3 | 0.9823 | 0.9395 | 0.9564 |
| 0.5 | 0.9524 | 0.8430 | 0.8852 |
| 0.8 | 0.8865 | 0.6560 | 0.7400 |
| **1.0** | **0.8333** | **0.5283** | **0.6339** |
| 1.5 | 0.6897 | 0.2724 | 0.3950 |
| 2.0 | 0.5556 | 0.1278 | 0.2301 |
| 3.0 | 0.3571 | 0.02722 | 0.07623 |

**Note how fast $p/p_0$ falls.** At $M = 3$ the static pressure is under 3% of stagnation — which is why a supersonic wind tunnel needs a very large pressure ratio, and why rocket nozzles are so long.

**Sonic (critical) conditions.** Setting $M = 1$:

$$\boxed{\;\frac{T^*}{T_0} = \frac{2}{\gamma+1} = 0.8333, \qquad \frac{p^*}{p_0} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}} = 0.5283, \qquad \frac{\rho^*}{\rho_0} = 0.6339.\;}$$

The starred quantities are the properties the flow *would* have at $M = 1$ with the same stagnation state — a reference point, whether or not the flow ever reaches $M = 1$.

**Maximum speed.**

$$\boxed{\;V_{\max} = \sqrt{2c_pT_0} = a_0\sqrt{\frac{2}{\gamma-1}} = 2.236\,a_0\ \ (\gamma = 1.4).\;}$$

**Entropy and stagnation-pressure loss.** For a perfect gas between any two states,

$$s_2-s_1 = c_p\ln\frac{T_2}{T_1}-R\ln\frac{p_2}{p_1},$$

and when $T_0$ is unchanged (adiabatic, no work) this reduces to the compact and extremely useful

$$\boxed{\;\frac{p_{0,2}}{p_{0,1}} = e^{-\Delta s/R}.\;}$$

*In words: every bit of entropy generated shows up as lost stagnation pressure, and nowhere else.*

**Choked mass flow.** Combining $\rho^*a^*A^*$ with the relations above:

$$\boxed{\;\dot m_{\max} = 0.0404\,\frac{p_0A^*}{\sqrt{T_0}}\ \ \text{(SI units, air)}.\;}$$

## Picture

![A two-panel figure. Left panel: the three isentropic ratios plotted against Mach number from zero to three, as three curves all starting at one at Mach zero and falling — the temperature ratio T over T nought falling most gently to about 0.36 at Mach three, the density ratio falling faster, and the pressure ratio p over p nought falling most steeply to under 0.03. Horizontal dashed lines mark the three critical values at Mach one, labelled 0.833, 0.634, and 0.528, with the pressure one highlighted and annotated the choking ratio. Right panel: a converging-diverging duct drawn in cross-section with a reservoir on the left labelled p nought and T nought, showing the flow accelerating from rest, reaching Mach one at the throat where the starred conditions are marked, and continuing to supersonic speed in the diverging section; below the duct, four stacked strip plots track Mach number rising, and pressure, temperature, and density all falling, along the duct axis, with the sonic point marked by a vertical line through all four.](assets/04-02-fig1.svg)

Left: the dictionary. Given $M$, read off every property ratio; given a ratio, read off $M$.

Right: what those ratios mean physically — a gas trading its thermodynamic state for speed, with the sonic point as the pivot.

## Worked examples

**Example 1 (sizing a supersonic wind tunnel's test section).** A blowdown tunnel has a reservoir at $p_0 = 500$ kPa and $T_0 = 300$ K, and is to run at $M = 2.0$ in the test section.

*The bracket.*

$$1+0.2M^2 = 1+0.2(4) = 1.80.$$

*Test-section conditions.*

$$T = \frac{T_0}{1.80} = \frac{300}{1.80} = 166.67\ \mathrm{K} = -106.5°\mathrm{C},$$

$$p = \frac{p_0}{1.80^{3.5}} = \frac{500}{7.8244} = 63.90\ \mathrm{kPa},$$

$$\rho = \frac{p}{RT} = \frac{63{,}900}{287(166.67)} = 1.3359\ \mathrm{kg/m^3}.$$

*Check against the density relation:* $\rho_0 = p_0/(RT_0) = 500{,}000/(287\cdot300) = 5.8072$ kg/m³, and $\rho_0/\rho = 5.8072/1.3359 = 4.347 = 1.80^{2.5}$ ✓

*Test-section speed.*

$$a = \sqrt{1.4(287)(166.67)} = 258.8\ \mathrm{m/s}, \qquad V = 2a = 517.6\ \mathrm{m/s}.$$

*Reading it.* Three consequences that shape every supersonic tunnel:

**The test section runs at $-107$ °C.** Any moisture in the air condenses, forming a fog that destroys the optical access and changes the effective $\gamma$. **Supersonic tunnels must dry their air**, typically to a dewpoint below $-40$ °C, and this is a major part of the plant.

**The pressure ratio required is 7.8.** For $M = 3$ it would be 36.7, and for $M = 4$, 152. **The required reservoir pressure grows explosively with Mach number**, which is why high-Mach tunnels run in short blowdown bursts from pressurized bottles rather than continuously.

**The density is only 23% of stagnation.** So the test-section dynamic pressure — and hence the force on the model — is far lower than the reservoir pressure suggests: $q = \tfrac12\gamma pM^2 = 0.7(63.9)(4) = 178.9$ kPa. Still large, but a factor of 2.8 below $p_0$.

**Example 2 (the sonic state and the maximum speed).** For the same reservoir, $p_0 = 500$ kPa, $T_0 = 300$ K.

*Sonic conditions at the throat.*

$$T^* = 0.8333(300) = 250.0\ \mathrm{K}, \qquad p^* = 0.5283(500) = 264.1\ \mathrm{kPa}, \qquad \rho^* = 0.6339(5.8072) = 3.681\ \mathrm{kg/m^3}.$$

$$V^* = a^* = \sqrt{1.4(287)(250)} = 316.9\ \mathrm{m/s}.$$

*The maximum possible speed.*

$$V_{\max} = \sqrt{2c_pT_0} = \sqrt{2(1004.5)(300)} = \sqrt{602{,}700} = 776.3\ \mathrm{m/s}.$$

*Check against the other form:* $a_0 = \sqrt{1.4(287)(300)} = 347.2$ m/s, and $a_0\sqrt{2/0.4} = 347.2(2.2361) = 776.4$ m/s ✓

*Reading it.* Several things worth noticing:

**$V^*$ is only 41% of $V_{\max}$.** Reaching sonic speed uses less than half the available energy; the rest is spent getting from $M = 1$ to $M = \infty$ — which, of course, never finishes.

**$V_{\max}$ corresponds to expansion to absolute zero.** Every joule of enthalpy has become kinetic energy, $T\to0$, $p\to0$. It is unreachable — you would need an infinite nozzle — but it is a hard bound, and a useful check on any calculation that claims a higher speed.

**The mapping from $M$ to $V$ is strongly compressive at high $M$.** From $V = M\sqrt{\gamma RT_0/(1+0.2M^2)}$:

| $M$ | $V$ (m/s) | $V/V_{\max}$ |
|---|---|---|
| 1 | 316.9 | 0.408 |
| 2 | 517.6 | 0.667 |
| 3 | 636.4 | 0.820 |
| 5 | 745.7 | 0.961 |
| $\infty$ | 776.3 | 1 |

**Going from $M = 3$ to $M = 5$ buys only 17% more speed** — but requires the pressure ratio to rise from 36.7 to 529. That diminishing return is why the practical thrust benefit of ever-larger rocket nozzles saturates ([`propulsion` 1.3](../../propulsion/lessons/01-03-nozzle-operating-regimes.md)).

*The choked mass flow, as a bonus.* If the throat area is $A^* = 0.01$ m²:

$$\dot m = 0.0404\frac{p_0A^*}{\sqrt{T_0}} = 0.0404\frac{500{,}000(0.01)}{\sqrt{300}} = 0.0404\frac{5000}{17.321} = 11.66\ \mathrm{kg/s}.$$

*Check directly:* $\rho^*a^*A^* = 3.681(316.9)(0.01) = 11.66$ kg/s ✓

**And this is the maximum, whatever the downstream pressure does.** Once the throat is sonic, no reduction in exit pressure can increase the flow — the information cannot travel upstream. **That is choking**, and it is [4.5](04-05-quasi-1d-nozzle-flow.md)'s subject.

## Watch out

- **You might apply isentropic relations across a shock.** They fail — $p_0$ drops. Use the shock relations of [4.3](04-03-normal-shock-waves.md), then resume isentropic bookkeeping on each side separately.
- **You might apply them inside a boundary layer.** Friction generates entropy; $p_0$ falls through the layer even with no shock. The relations hold in the inviscid outer flow.
- **You might confuse $p^*$ with a real pressure somewhere.** It is a *reference* — the pressure the flow would have at $M = 1$ with this stagnation state. A subsonic flow that never reaches $M = 1$ still has a well-defined $p^*$.
- **You might use $\gamma = 1.4$ at very high temperature.** Above roughly 800 K, $\gamma$ falls, and the exponents 3.5 and 2.5 change.
- **You might forget that $T_0$ survives a shock while $p_0$ does not.** This asymmetry is the most useful fact in compressible flow — [4.3](04-03-normal-shock-waves.md).
- **You might read $0.528$ as a property of air alone.** It is $\left(2/(\gamma+1)\right)^{\gamma/(\gamma-1)}$; for steam ($\gamma\approx1.3$) it is $0.546$, for argon ($\gamma = 5/3$) it is $0.487$.

## One-liner

> One bracket $\left(1+\tfrac{\gamma-1}{2}M^2\right)$ raised to three exponents gives every property ratio in an isentropic flow; setting $M = 1$ gives the sonic reference state whose pressure ratio $0.528$ decides whether anything chokes; and any drop in $p_0$ is entropy, priced at $p_{0,2}/p_{0,1} = e^{-\Delta s/R}$.

## Problems

**P1 (🟢)** Air flows at $M = 0.8$ with static conditions $p = 60$ kPa and $T = 250$ K. (a) Find $T_0$, $p_0$, and $\rho_0$. (b) Find the flow speed. (c) Find $p^*$ and $T^*$ for this flow. (d) Find the dynamic pressure and compare it with $p_0-p$.

**P2 (🟡)** A supersonic wind tunnel is to run at $M = 3.0$ with a test-section static pressure of $20$ kPa and static temperature of $110$ K. (a) Find the required reservoir pressure and temperature. (b) Find the test-section velocity and density. (c) The throat area is $A^* = 0.008$ m². Find the mass flow rate. (d) The tunnel runs from a $2$ m³ reservoir initially at the required pressure and $300$ K. Estimate how long it can run before the reservoir pressure halves, treating the blowdown as isothermal.

**P3 (🔴)** Air enters a long insulated duct at $M_1 = 0.30$, $p_1 = 200$ kPa, $T_1 = 320$ K, and leaves at $M_2 = 0.55$ with the same stagnation temperature but a stagnation pressure 8% lower. (a) Confirm $T_{0,1} = T_{0,2}$ and find its value. (b) Find $p_{0,1}$, $p_{0,2}$, and hence $p_2$ and $T_2$. (c) Find the entropy rise per unit mass, two independent ways. (d) Express the loss as a fraction of the flow's available work, and explain why a designer of an inlet or a combustor cares about $p_0$ rather than $p$.

<details>
<summary>Solutions</summary>

**P1** (a) $$1+0.2M^2 = 1+0.2(0.64) = 1.1280.$$

$$T_0 = 250(1.1280) = 282.0\ \mathrm{K},$$
$$p_0 = 60(1.1280)^{3.5} = 60(1.5243) = 91.46\ \mathrm{kPa},$$
$$\rho_0 = \frac{p_0}{RT_0} = \frac{91{,}460}{287(282.0)} = 1.1301\ \mathrm{kg/m^3}.$$

*Check via the density ratio:* $\rho = p/(RT) = 60{,}000/(287\cdot250) = 0.83624$ kg/m³, and $\rho_0/\rho = 1.1301/0.83624 = 1.3514 = 1.1280^{2.5}$ ✓

(b) $$a = \sqrt{1.4(287)(250)} = \sqrt{100{,}450} = 316.9\ \mathrm{m/s}, \qquad V = 0.8(316.9) = 253.6\ \mathrm{m/s}.$$

(c) $$T^* = 0.8333T_0 = 0.8333(282.0) = 235.0\ \mathrm{K}, \qquad p^* = 0.5283p_0 = 0.5283(91.46) = 48.32\ \mathrm{kPa}.$$

*(This flow never reaches $M = 1$; these are reference values.)*

(d) $$q = \tfrac12\gamma pM^2 = 0.7(60)(0.64) = 26.88\ \mathrm{kPa},$$

$$p_0-p = 91.46-60 = 31.46\ \mathrm{kPa}.$$

$$\frac{q}{p_0-p} = \frac{26.88}{31.46} = 0.854.$$

**The incompressible dynamic pressure is 15% below the true stagnation pressure rise** at $M = 0.8$ — consistent with the trend established in [4.1](04-01-compressibility-sound-speed-energy.md), P2, and a vivid reminder that $q$ and $p_0-p$ are the same thing only in the incompressible limit.

**P2** (a) $$1+0.2(9) = 2.80.$$

$$T_0 = 110(2.80) = 308.0\ \mathrm{K},$$
$$p_0 = 20(2.80)^{3.5} = 20(36.733) = 734.7\ \mathrm{kPa}.$$

(b) $$a = \sqrt{1.4(287)(110)} = \sqrt{44{,}198} = 210.2\ \mathrm{m/s}, \qquad V = 3(210.2) = 630.7\ \mathrm{m/s}.$$

$$\rho = \frac{p}{RT} = \frac{20{,}000}{287(110)} = 0.63351\ \mathrm{kg/m^3}.$$

(c) $$\dot m = 0.0404\frac{p_0A^*}{\sqrt{T_0}} = 0.0404\frac{734{,}700(0.008)}{\sqrt{308.0}} = 0.0404\frac{5877.6}{17.550} = 13.53\ \mathrm{kg/s}.$$

(d) *Initial mass in the reservoir.* At $p_0 = 734.7$ kPa, $T = 300$ K, $V_{\rm res} = 2$ m³:

$$m_i = \frac{pV}{RT} = \frac{734{,}700(2)}{287(300)} = \frac{1{,}469{,}400}{86{,}100} = 17.07\ \mathrm{kg}.$$

*Mass remaining when pressure halves* (isothermal, so $m\propto p$):

$$m_f = \frac{17.07}{2} = 8.53\ \mathrm{kg}, \qquad \Delta m = 8.53\ \mathrm{kg}.$$

*Run time, treating $\dot m$ as constant at its initial value:*

$$t\approx\frac{8.53}{13.53} = 0.63\ \mathrm{s}.$$

*Refining it.* $\dot m\propto p_0$, so the flow slows as the reservoir empties. Solving $dm/dt = -km$ properly:

$$t = \frac{m_i}{\dot m_i}\ln 2 = \frac{17.07}{13.53}(0.6931) = 0.87\ \mathrm{s}.$$

**Under a second either way**, which is exactly why blowdown tunnels have huge reservoirs — a 30-second run at $M = 3$ with an 8 cm² throat needs roughly 70 m³ of storage, and real facilities are built around tanks of that scale. **The tank, not the tunnel, is the expensive part.**

*(And the isothermal assumption is optimistic: a real blowdown cools as it expands, which reduces $T_0$ and, since $\dot m\propto p_0/\sqrt{T_0}$, partly compensates — but it also changes the test-section conditions during the run, which is why real tunnels throttle to hold $p_0$ constant and accept a shorter useful window.)*

**P3** (a) $$T_{0,1} = T_1\left(1+0.2M_1^2\right) = 320\left(1+0.2(0.09)\right) = 320(1.018) = 325.76\ \mathrm{K}.$$

The problem states the flow is adiabatic with no work, so by the energy equation of [4.1](04-01-compressibility-sound-speed-energy.md), $T_{0,2} = T_{0,1} = 325.76$ K ✓

*Hence $T_2$:*

$$T_2 = \frac{T_{0,2}}{1+0.2M_2^2} = \frac{325.76}{1+0.2(0.3025)} = \frac{325.76}{1.0605} = 307.18\ \mathrm{K}.$$

(b) $$p_{0,1} = p_1\left(1.018\right)^{3.5} = 200(1.06443) = 212.89\ \mathrm{kPa},$$

$$p_{0,2} = 0.92\,p_{0,1} = 0.92(212.89) = 195.86\ \mathrm{kPa},$$

$$p_2 = \frac{p_{0,2}}{\left(1.0605\right)^{3.5}} = \frac{195.86}{1.22825} = 159.46\ \mathrm{kPa}.$$

(c) *Route 1 — the stagnation-pressure form.* Since $T_0$ is unchanged,

$$\Delta s = -R\ln\frac{p_{0,2}}{p_{0,1}} = -287\ln(0.92) = -287(-0.083382) = 23.93\ \mathrm{J/(kg\cdot K)}.$$

*Route 2 — the general form, from static properties.*

$$\Delta s = c_p\ln\frac{T_2}{T_1}-R\ln\frac{p_2}{p_1} = 1004.5\ln\frac{307.18}{320}-287\ln\frac{159.46}{200}$$
$$= 1004.5\ln(0.95993)-287\ln(0.79730) = 1004.5(-0.040900)-287(-0.226531)$$
$$= -41.08+65.01 = 23.93\ \mathrm{J/(kg\cdot K)} \quad\checkmark$$

**The two agree exactly**, as they must — they are the same thermodynamic statement. **But the first route needed only the stagnation-pressure ratio**, while the second needed four static properties, every one of which had to be computed first. When $T_0$ is constant, $\Delta s = -R\ln(p_{0,2}/p_{0,1})$ is the route to use.

(d) *The loss as a fraction of available work.* The maximum work extractable from a stream at $(p_0,T_0)$ expanding reversibly to ambient $p_a$ is

$$w_{\rm avail} = c_pT_0\left[1-\left(\frac{p_a}{p_0}\right)^{\frac{\gamma-1}{\gamma}}\right],$$

and the work destroyed by irreversibility is $T_a\Delta s$ (the Gouy–Stodola result). Taking $T_a = 288$ K:

$$w_{\rm lost} = T_a\Delta s = 288(23.93) = 6892\ \mathrm{J/kg} = 6.89\ \mathrm{kJ/kg}.$$

For comparison, with $p_a = 101.3$ kPa,

$$w_{\rm avail} = 1004.5(325.76)\left[1-\left(\frac{101.3}{212.89}\right)^{0.2857}\right] = 327{,}226\left[1-0.80883\right] = 62{,}562\ \mathrm{J/kg}.$$

$$\frac{w_{\rm lost}}{w_{\rm avail}} = \frac{6892}{62{,}562} = 11.0\%.$$

**An 8% loss of stagnation pressure has destroyed 11% of the stream's useful work.**

*Why a designer tracks $p_0$, not $p$.* Three reasons, and they compound:

**Static pressure is not a loss indicator.** In this duct $p$ fell from 200 to 159.46 kPa — but most of that fall is simply the flow accelerating from $M = 0.30$ to $M = 0.55$, a perfectly reversible exchange of pressure for velocity. Had the duct been loss-free, $p_2$ would still have dropped, to $p_{0,1}/1.22825 = 173.32$ kPa. **You cannot tell from $p$ alone whether anything was lost.** Only $p_0$ separates the reversible exchange from the irreversible destruction.

**$p_0$ is what the downstream machine can use.** A turbine, a nozzle, or a combustor extracts work by expanding the stream from its stagnation state to ambient. Every pascal of $p_0$ lost upstream is thrust or shaft power that can never be recovered — it does not matter where in the system it was lost.

**The metric is standardized as a recovery ratio.** Inlet designers quote **pressure recovery** $\pi_d = p_{0,2}/p_{0,1}$ as *the* figure of merit; a supersonic inlet's entire design is a fight to keep $\pi_d$ high, and a 1% improvement in $\pi_d$ typically buys about 1.5% in net engine thrust. **This is exactly why [4.3](04-03-normal-shock-waves.md) matters**: a normal shock at $M = 2$ costs 28% of $p_0$ in a single discontinuity, which is why supersonic inlets go to great lengths to replace it with a series of weaker oblique shocks ([4.4](04-04-oblique-shocks-prandtl-meyer.md)).

</details>

## Flashback

**From Lesson 4.1 (Compressibility, sound speed, and the energy equation):** An aircraft flies at $M = 2.2$ where $T = 220$ K. (a) Find the speed of sound and the true airspeed. (b) Find the stagnation temperature. (c) Estimate the adiabatic wall temperature with a recovery factor of $0.89$. (d) State which of $T_0$ and $p_0$ survives a shock, and why.

<details>
<summary>Solution</summary>

(a) $$a = \sqrt{1.4(287)(220)} = \sqrt{88{,}396} = 297.3\ \mathrm{m/s}, \qquad V = 2.2(297.3) = 654.1\ \mathrm{m/s}.$$

(b) $$T_0 = 220\left(1+0.2(4.84)\right) = 220(1.968) = 433.0\ \mathrm{K} = 159.8°\mathrm{C}.$$

(c) $$T_{aw} = T\left(1+0.89(0.968)\right) = 220(1.86152) = 409.5\ \mathrm{K} = 136.4°\mathrm{C}.$$

**Above the working limit of most aluminium alloys** — this is the regime where Concorde's structure lived, and it is why $M = 2.0$–$2.2$ was its ceiling.

(d) **$T_0$ survives; $p_0$ does not.**

$T_0$ is a consequence of the **first law** applied to an adiabatic flow with no work: energy in equals energy out, regardless of what happens inside. A shock is thin and adiabatic, so $T_{0,2} = T_{0,1}$ exactly.

$p_0$ is a measure of **available** energy and is protected only by reversibility. A shock is violently irreversible — steep internal gradients dissipate energy through viscosity and conduction — so entropy rises and

$$\frac{p_{0,2}}{p_{0,1}} = e^{-\Delta s/R}<1.$$

*The bridge to this lesson.* The relations built here — $p_0/p$, $T_0/T$, $\rho_0/\rho$ as functions of $M$ — are **isentropic**, so they may be used on each side of a shock but never *across* one.

**The correct procedure is always the same**, and it is worth fixing now because every problem in [4.3](04-03-normal-shock-waves.md) through [4.5](04-05-quasi-1d-nozzle-flow.md) uses it:

$$\underbrace{\text{isentropic from reservoir to just upstream}}_{\text{this lesson}}\ \to\ \underbrace{\text{shock jump}}_{\text{[4.3]}}\ \to\ \underbrace{\text{isentropic from just downstream onward}}_{\text{this lesson, with a new }p_0}.$$

**Two stagnation pressures, one stagnation temperature, and the shock relations as the bridge between them.**

</details>

## Connections

- **Backward:** the energy equation giving $T_0/T$ is [4.1](04-01-compressibility-sound-speed-energy.md)'s; the isentropic relation $p\propto\rho^\gamma$ and the entropy formula are [`engineering-thermodynamics`](../../engineering-thermodynamics/syllabus.md)'s; the incompressible $q$ these relations generalize is [1.1](01-01-forces-moments-coefficients.md)'s.
- **Forward:** [4.3](04-03-normal-shock-waves.md) computes the $p_0$ loss across a shock; [4.5](04-05-quasi-1d-nozzle-flow.md) uses the sonic reference state and the choked mass flow to size a converging–diverging nozzle; [`propulsion` 1.2](../../propulsion/lessons/01-02-compressible-flow-nozzles.md) reloads this entire working set for engine analysis.
- **Sideways:** the stagnation state is a **potential-like reference** — a state the system would reach under an idealized process, used to label the actual state — exactly as the standard enthalpy of formation labels a chemical species, or as the open-circuit voltage labels a battery. And the entropy–stagnation-pressure link $p_{0,2}/p_{0,1} = e^{-\Delta s/R}$ is the Gouy–Stodola theorem of [`engineering-thermodynamics`](../../engineering-thermodynamics/syllabus.md) in aerodynamic clothing: lost work equals ambient temperature times entropy generated.
