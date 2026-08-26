# Propulsion · Lesson 2.6: The turboprop and propeller propulsion

> ⏱ ~15 min · Module 2: Air-breathing engines · Builds on: [2.5 The turbofan and the bypass idea](02-05-turbofan-bypass.md) · Unlocks: [4.4 Capstone: the propulsion design space](04-04-propulsion-design-space.md)

## Why this matters

[2.5](02-05-turbofan-bypass.md) showed that moving more air more gently is the way to propulsive efficiency, and stopped at a bypass ratio of 12 because the nacelle would not get any bigger. **The turboprop removes the nacelle.**

An unducted propeller handles a mass flow equivalent to a bypass ratio of 50–100. Its ideal propulsive efficiency at low speed is above 95%, and a modern turboprop cruises on roughly two thirds the fuel of a comparable regional jet.

**And then it stops working, sharply, at about $M = 0.65$.** Not because the cycle fails but because the *blade tips* go supersonic — the tip sees the vector sum of flight speed and rotational speed, and that sum reaches the speed of sound long before the aircraft does.

**This lesson is the actuator-disc theory that explains the efficiency, and the tip-Mach argument that explains the ceiling** — and together they explain why the aviation world is split at $M\approx0.65$ into propellers below and fans above.

## The idea

**Send almost all the turbine work to a shaft.** A turboprop's turbine extracts far more than the compressor needs — typically 85–90% of the available work goes out through a gearbox to a propeller, and only a small residual jet leaves the exhaust.

**The propeller is a very large, very lightly loaded actuator.** It accelerates a stream several metres across by a few metres per second. From [actuator-disc theory](../reference.md#actuator-disc-momentum-theory): a disc that adds velocity $v$ at the disc adds $2v$ far downstream, and its ideal efficiency is $V_\infty/(V_\infty+v)$.

**Light loading is the whole trick.** The disc-loading parameter is $C_T = T/(\tfrac12\rho V_\infty^2A)$; a propeller runs at $C_T\approx0.1$ where a turbofan's fan runs an order of magnitude higher. **Small $C_T$ means small $v$, and $\eta_i = 2/(1+\sqrt{1+C_T})$ approaches 1.**

**A gearbox is unavoidable.** The turbine wants 10,000–20,000 rpm; the propeller must turn at 1000–1200 rpm or its tips go supersonic. **A turboprop is defined by its reduction gearbox as much as by its propeller.**

**Now the ceiling.** A blade tip moves through the air at the vector sum of the aircraft's speed and its own rotational speed. At $M_\infty = 0.6$ and a tip speed of 245 m/s, the *helical* tip Mach number is 0.99 — the tip is transonic while the aircraft is comfortably subsonic.

**And transonic tips are ruinous.** Shock losses collapse the blade's efficiency and the noise becomes intolerable. **You can slow the propeller down**, but a slower propeller needs a bigger diameter for the same thrust, and diameter is limited by ground clearance and by gearbox torque.

**So the propeller runs out of speed while the fan does not.** A ducted fan's blades are shielded by the inlet, which decelerates the flow before it reaches them — so a fan at $M_\infty = 0.85$ sees an axial Mach number of only about 0.5 at its face. **The duct is what buys the extra 0.2 in Mach number, and it costs the mass flow that made the propeller efficient.**

## The formal version

**Actuator-disc (momentum) theory.** For a disc of area $A$ in a stream $V_\infty$, adding velocity $v$ at the disc:

$$\boxed{\;u_e = V_\infty+2v, \qquad \dot m = \rho A\left(V_\infty+v\right), \qquad T = \dot m\left(u_e-V_\infty\right) = 2\rho Av\left(V_\infty+v\right).\;}$$

**Ideal propulsive efficiency.**

$$\boxed{\;\eta_i = \frac{TV_\infty}{TV_\infty+\tfrac12\dot m\left(2v\right)^2/1} = \frac{V_\infty}{V_\infty+v} = \frac{2}{1+\sqrt{1+C_T}}, \qquad C_T = \frac{T}{\tfrac12\rho V_\infty^2A}.\;}$$

*In words: the lighter the disc loading, the closer the efficiency is to 1 — and it is 1 only at zero thrust.*

| $C_T$ | 0.05 | 0.1 | 0.5 | 2 | 10 |
|---|---|---|---|---|---|
| $\eta_i$ | 0.988 | 0.976 | 0.900 | 0.732 | 0.518 |

**Real propeller efficiency** includes profile drag on the blades, swirl, tip losses, and compressibility:

$$\boxed{\;\eta_{\rm pr} = \frac{TV_\infty}{P_{\rm shaft}}\approx0.80\text{–}0.88\ \text{at design}.\;}$$

**Power-specific fuel consumption.**

$$\boxed{\;\mathrm{PSFC} = \frac{\dot m_f}{P_{\rm shaft}}\ \ \mathrm{kg/(W\cdot s)}, \qquad \eta_{\rm th,shaft} = \frac{1}{\mathrm{PSFC}\cdot Q_R}, \qquad \eta_o = \eta_{\rm th,shaft}\,\eta_{\rm pr}.\;}$$

A modern turboprop has $\mathrm{PSFC}\approx0.27$ kg/(kW·h) $= 7.5\times10^{-8}$ kg/(W·s), i.e. $\eta_{\rm th,shaft} = 0.31$ and $\eta_o\approx0.26$.

**Equivalent shaft power.** A turboprop's exhaust still produces some jet thrust, conventionally credited as

$$\mathrm{ESHP} = P_{\rm shaft}+\frac{F_{\rm jet}V_\infty}{\eta_{\rm pr}},$$

with a static convention (typically $F_{\rm jet}/2.5$ in hp per lbf) used for takeoff ratings.

**Helical tip Mach number** — the constraint that ends the story:

$$\boxed{\;M_{\rm tip} = \frac{\sqrt{V_\infty^2+\left(\Omega R\right)^2}}{a}.\;}$$

**Design limit: $M_{\rm tip}\lesssim0.85$–$0.90$.** Beyond that, shock losses on the blade and noise both rise sharply.

| Tip speed $\Omega R$ | Max $V_\infty$ for $M_{\rm tip} = 0.88$ (at 7.6 km, $a = 310$ m/s) |
|---|---|
| 245 m/s (1200 rpm, 3.9 m) | 120 m/s ($M_\infty = 0.39$) |
| 208 m/s (1020 rpm, 3.9 m) | 176 m/s ($M_\infty = 0.57$) |
| 174 m/s (850 rpm, 3.9 m) | 211 m/s ($M_\infty = 0.68$) |

**The whole speed limit of the propeller is in this table.**

## Picture

![A two-panel figure. Left: an actuator-disc streamtube — a stream tube contracting from far upstream through a disc and continuing to a narrower section far downstream, with the velocity labelled V infinity at the inlet, V infinity plus little v at the disc, and V infinity plus two v far downstream; the pressure trace beneath shows a jump across the disc and constant values upstream and downstream. A turboprop is drawn beside it in cross-section, with the propeller, a reduction gearbox marked with a gear symbol between the propeller shaft and the much faster turbine shaft, and a small residual exhaust nozzle, with a bracket over the turbine reading 85 to 90 percent of the work goes to the shaft. Right: helical tip Mach number plotted against flight Mach number, as three curves for tip speeds of 245, 208 and 174 metres per second, each rising from its own static value; a horizontal dashed line at 0.88 marks the design limit, and the three crossings are marked at flight Mach numbers of 0.38, 0.57 and 0.68. Above the limit line the region is shaded and labelled shock losses and noise. A small vector triangle inset shows the tip velocity as the vector sum of flight speed and rotational speed.](assets/02-06-fig1.svg)

Left: why a propeller is efficient — a huge streamtube given a tiny velocity increment — and the gearbox that makes it possible.

Right: why it stops. The tip is already flying much faster than the aircraft, and it runs out of Mach number first.

## Worked examples

**Example 1 (a turboprop in cruise).** A regional turboprop cruises at $V_\infty = 130$ m/s at 5000 m ($\rho = 0.736$ kg/m³, $a = 320.5$ m/s, so $M_\infty = 0.41$), with a propeller of diameter $D = 3.5$ m producing $T = 8.0$ kN per engine. *(For the actuator-disc arithmetic below, use $\rho = 0.9$ kg/m³ to represent the slightly denser air in the propeller's contracted streamtube — the standard convention is to use the free-stream value, and the difference is a few percent either way.)*

*Disc area and induced velocity.*

$$A = \frac{\pi}{4}(3.5)^2 = 9.621\ \mathrm{m^2}.$$

From $T = 2\rho Av\left(V_\infty+v\right)$:

$$8000 = 2(0.9)(9.621)v(130+v) = 17.318\,v(130+v),$$

$$v^2+130v-461.9 = 0 \quad\Longrightarrow\quad v = \frac{-130+\sqrt{16{,}900+1847.6}}{2} = \frac{-130+136.92}{2} = 3.46\ \mathrm{m/s}.$$

*Far-wake velocity and efficiency.*

$$u_e = V_\infty+2v = 130+6.92 = 136.9\ \mathrm{m/s}, \qquad \eta_i = \frac{130}{133.46} = 0.974.$$

*Check via the loading parameter:*

$$C_T = \frac{T}{\tfrac12\rho V_\infty^2A} = \frac{8000}{\tfrac12(0.9)(16{,}900)(9.621)} = \frac{8000}{73{,}168} = 0.1093,$$

$$\eta_i = \frac{2}{1+\sqrt{1.1093}} = \frac{2}{2.0532} = 0.974 \quad\checkmark$$

*Mass flow, and the equivalent bypass ratio.*

$$\dot m = \rho A\left(V_\infty+v\right) = 0.9(9.621)(133.46) = 1156\ \mathrm{kg/s}.$$

**Eleven hundred kilograms of air per second**, against perhaps 4 kg/s through the core — an **effective bypass ratio near 290**.

*Power.*

$$P_{\rm ideal} = T\left(V_\infty+v\right) = 8000(133.46) = 1068\ \mathrm{kW},$$

and with a realistic $\eta_{\rm pr} = 0.85$,

$$P_{\rm shaft} = \frac{TV_\infty}{\eta_{\rm pr}} = \frac{8000(130)}{0.85} = \frac{1{,}040{,}000}{0.85} = 1224\ \mathrm{kW}.$$

*Fuel and efficiency.* At $\mathrm{PSFC} = 7.5\times10^{-8}$ kg/(W·s):

$$\dot m_f = 7.5\times10^{-8}(1{,}224{,}000) = 0.0918\ \mathrm{kg/s} = 330\ \mathrm{kg/h},$$

$$\mathrm{TSFC} = \frac{0.0918}{8000} = 1.148\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.0413\ \mathrm{kg/(N\cdot h)},$$

$$\eta_o = \frac{TV_\infty}{\dot m_fQ_R} = \frac{1{,}040{,}000}{0.0918(43\times10^6)} = \frac{1.040}{3.947} = 0.263.$$

*Reading it.* Three things:

**$\eta_i = 0.974$ is extraordinary.** No ducted fan comes close; the turbofan of [2.5](02-05-turbofan-bypass.md) managed $\eta_p = 0.50$. **The reason is entirely the disc loading**: $C_T = 0.109$ against a fan's $C_T$ of order 1.

**Real efficiency is 0.85, not 0.974**, because blade profile drag, swirl, tip vortices, and installation effects all subtract. **Momentum theory gives an upper bound**, and the gap between 0.974 and 0.85 is where propeller design lives.

**And TSFC of 0.041 kg/(N·h) beats the best turbofan** (0.049) by 16% — at 130 m/s. **The comparison is only meaningful at a stated speed**, which is the subject of Example 2.

**Example 2 (the tip-Mach ceiling).** Take a propeller of $D = 3.9$ m cruising at 7600 m, where $a = 310$ m/s.

*Helical tip Mach number* at three gearbox ratios:

| $M_\infty$ | $V_\infty$ | $M_{\rm tip}$ at 1200 rpm (245 m/s) | at 1020 rpm (208 m/s) | at 850 rpm (174 m/s) |
|---|---|---|---|---|
| 0.4 | 124 m/s | **0.887** | 0.783 | 0.689 |
| 0.5 | 155 | 0.936 | 0.838 | 0.751 |
| 0.6 | 186 | **0.993** | **0.901** | 0.821 |
| 0.7 | 217 | 1.056 | 0.971 | **0.897** |

*(Bold marks the first entry in each column above the 0.88 design limit.)*

*Reading it.* **At $M_\infty = 0.6$ the tip at 1200 rpm is at $M = 0.99$** — transonic, with a shock standing on the blade — while the aircraft is at 0.6. The blade tip is flying 65% faster than the aeroplane.

*The obvious fix, and why it is limited.* **Slow the propeller.** Dropping from 1200 to 850 rpm pushes the ceiling from $M_\infty = 0.39$ to $M_\infty = 0.68$. But a slower propeller must be *larger* or more heavily loaded to make the same thrust:

$$T = 2\rho Av\left(V_\infty+v\right),$$

so halving the rotational speed at fixed diameter halves the work each blade does per revolution, and it must be recovered by more blades, more chord, or more diameter. **All three have limits:**

**Diameter** is limited by ground clearance — a 3.9 m propeller on a low-wing aircraft already requires a tall undercarriage — and by the gearbox torque, which rises as speed falls at fixed power.

**Blade count and chord** raise the solidity, which increases the induced losses and eventually turns the propeller into a fan without a duct.

**Gearbox mass and reliability.** A 5000 kW reduction gearbox with a 15:1 ratio is one of the heaviest and most safety-critical components on the aircraft.

*Why a ducted fan escapes.* The inlet of a turbofan **decelerates the flow before it reaches the blades**. At $M_\infty = 0.85$ the fan face sees an axial Mach number of about 0.5, so the fan's helical tip Mach number is computed with 0.5 rather than 0.85:

$$M_{\rm tip,fan} = \frac{\sqrt{\left(0.5a\right)^2+\left(\Omega R\right)^2}}{a},$$

which for a tip speed of 400 m/s gives 1.36 relative to the *free stream* but a manageable value relative to the local decelerated flow — and the fan is designed transonic on purpose, with the duct containing the shocks.

**The duct is worth about 0.2–0.25 in flight Mach number**, and it costs the enormous mass flow that made the propeller efficient in the first place.

*The resulting split, which is what you see at any airport.* Propellers below $M\approx0.65$ (turboprops: ATR 72 at $M = 0.44$, Dash 8 at $M = 0.50$, C-130 at $M = 0.58$); fans above (regional jets at $M = 0.78$, airliners at $M = 0.78$–$0.85$).

**And the unexplored middle.** The **open rotor** or **propfan** — a highly swept, thin, multi-bladed unducted propeller designed to run with transonic tips, as the fan does — targets $M = 0.75$ with propeller-like mass flow. It was demonstrated in the 1980s (the GE36 UDF flew on an MD-80) and abandoned when fuel prices fell; it has been revived repeatedly since, most recently as the CFM RISE programme. **Its problem has never been efficiency — it works — but noise and certification**, since an unducted rotor has nothing to contain a released blade.

## Watch out

- **You might use $\eta_i$ as the real efficiency.** Momentum theory is an upper bound; real propellers reach 0.80–0.88.
- **You might forget the factor of 2.** The disc adds $v$; the far wake has $2v$. Thrust is $\dot m(2v)$ with $\dot m$ evaluated at the disc.
- **You might compute tip Mach number from rotational speed alone.** It is the *vector sum* with flight speed, and at cruise the flight speed contributes substantially.
- **You might think a turboprop's exhaust makes no thrust.** It makes 5–10%, which is why ratings are quoted as equivalent shaft power.
- **You might compare TSFC between a turboprop and a turbofan without stating the speed.** TSFC $= V_\infty/(\eta_oQ_R)$, so it rises with speed for both; the comparison is only meaningful at a common $V_\infty$, and each engine is designed for a different one.
- **You might ignore the gearbox.** It is heavy, expensive, and a single-point failure — and it is why geared *fans* took forty years longer than geared props.
- **You might expect a bigger propeller always to be better.** Ground clearance, gearbox torque, and blade structural loads all cap the diameter.

## One-liner

> Put nearly all the turbine work through a gearbox into a lightly loaded disc several metres across and the propulsive efficiency reaches 0.97 ideal, 0.85 real — until the blade tip, which travels at the vector sum of flight and rotational speed, goes transonic near $M_\infty = 0.65$, which is exactly where the ducted fan takes over because its inlet slows the flow before the blades ever see it.

## Problems

**P1 (🟢)** A turboprop delivers $P_{\rm shaft} = 2500$ kW to a propeller of efficiency $\eta_{\rm pr} = 0.86$ at $V_\infty = 140$ m/s. (a) Find the thrust. (b) If $\mathrm{PSFC} = 7.8\times10^{-8}$ kg/(W·s), find the fuel flow in kg/h. (c) Find the TSFC in kg/(N·h). (d) Find the overall efficiency for $Q_R = 43$ MJ/kg.

**P2 (🟡)** A propeller of diameter $D = 4.0$ m operates at $V_\infty = 120$ m/s in air of density $\rho = 1.0$ kg/m³, producing $T = 12$ kN. (a) Find the disc area and the induced velocity $v$. (b) Find the far-wake velocity and the mass flow. (c) Find $C_T$ and the ideal efficiency, two ways. (d) Find the ideal power and the shaft power at $\eta_{\rm pr} = 0.84$.

**P3 (🔴)** A turboprop has a $D = 3.9$ m propeller and cruises at 7600 m where $a = 310$ m/s. (a) Find the tip speed and helical tip Mach number at 1200 rpm for $M_\infty = 0.35$, $0.50$, and $0.65$. (b) Find the maximum flight Mach number for $M_{\rm tip}\leq0.88$ at 1200, 1020, and 850 rpm. (c) At 850 rpm the propeller must produce the same thrust as at 1200 rpm. Explain qualitatively what must change about the blades, and name two limits on doing so. (d) A turbofan's inlet decelerates the flow to an axial Mach number of 0.50 at the fan face regardless of flight Mach number. Explain why this lets a fan operate at $M_\infty = 0.85$, and state what the duct costs.

<details>
<summary>Solutions</summary>

**P1** (a) $$T = \frac{\eta_{\rm pr}P_{\rm shaft}}{V_\infty} = \frac{0.86\left(2.5\times10^6\right)}{140} = \frac{2.15\times10^6}{140} = 15{,}357\ \mathrm{N} = 15.36\ \mathrm{kN}.$$

(b) $$\dot m_f = \mathrm{PSFC}\times P_{\rm shaft} = 7.8\times10^{-8}\left(2.5\times10^6\right) = 0.195\ \mathrm{kg/s} = 702\ \mathrm{kg/h}.$$

(c) $$\mathrm{TSFC} = \frac{\dot m_f}{T} = \frac{0.195}{15{,}357} = 1.2698\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.0457\ \mathrm{kg/(N\cdot h)}.$$

(d) $$\eta_o = \frac{TV_\infty}{\dot m_fQ_R} = \frac{15{,}357(140)}{0.195\left(43\times10^6\right)} = \frac{2.150\times10^6}{8.385\times10^6} = 0.256.$$

*Check via the factored form:* $\eta_{\rm th,shaft} = 1/(\mathrm{PSFC}\,Q_R) = 1/(7.8\times10^{-8}\times43\times10^6) = 1/3.354 = 0.298$, and $0.298(0.86) = 0.256$ ✓

**P2** (a) $$A = \frac{\pi}{4}(4.0)^2 = 12.566\ \mathrm{m^2}.$$

$$T = 2\rho Av\left(V_\infty+v\right): \qquad 12{,}000 = 2(1.0)(12.566)v(120+v) = 25.133\,v(120+v),$$

$$v^2+120v-477.4 = 0 \quad\Longrightarrow\quad v = \frac{-120+\sqrt{14{,}400+1909.6}}{2} = \frac{-120+127.71}{2} = 3.855\ \mathrm{m/s}.$$

(b) $$u_e = V_\infty+2v = 120+7.71 = 127.71\ \mathrm{m/s},$$

$$\dot m = \rho A\left(V_\infty+v\right) = 1.0(12.566)(123.855) = 1556\ \mathrm{kg/s}.$$

*Check the thrust:* $\dot m(u_e-V_\infty) = 1556(7.71) = 12{,}000$ N ✓

(c) $$C_T = \frac{T}{\tfrac12\rho V_\infty^2A} = \frac{12{,}000}{\tfrac12(1.0)(14{,}400)(12.566)} = \frac{12{,}000}{90{,}478} = 0.13263.$$

*Route 1:* $\eta_i = V_\infty/(V_\infty+v) = 120/123.855 = 0.9689$.

*Route 2:* $\eta_i = 2/(1+\sqrt{1.13263}) = 2/(1+1.06425) = 2/2.06425 = 0.9689$ ✓

(d) $$P_{\rm ideal} = T\left(V_\infty+v\right) = 12{,}000(123.855) = 1486\ \mathrm{kW},$$

$$P_{\rm shaft} = \frac{TV_\infty}{\eta_{\rm pr}} = \frac{12{,}000(120)}{0.84} = \frac{1{,}440{,}000}{0.84} = 1714\ \mathrm{kW}.$$

*Worth noticing:* the ideal power (1486 kW) exceeds the useful power ($TV_\infty = 1440$ kW) by only 3.2% — that gap **is** the induced loss, and it is tiny. The real shaft power exceeds the useful power by 19%, so **the profile, swirl and tip losses are six times the induced loss.** For a lightly loaded propeller, momentum theory is nearly perfect and blade-element aerodynamics is where all the real losses live.

**P3** (a) $$\Omega = \frac{1200(2\pi)}{60} = 125.66\ \mathrm{rad/s}, \qquad \Omega R = 125.66(1.95) = 245.0\ \mathrm{m/s}.$$

$$M_{\rm tip} = \frac{\sqrt{V_\infty^2+245.0^2}}{310}.$$

| $M_\infty$ | $V_\infty$ | $\sqrt{V_\infty^2+\Omega R^2}$ | $M_{\rm tip}$ |
|---|---|---|---|
| 0.35 | 108.5 m/s | 268.0 m/s | 0.865 |
| 0.50 | 155.0 | 290.0 | 0.935 |
| 0.65 | 201.5 | 317.3 | 1.023 |

**At $M_\infty = 0.65$ the tip is supersonic** while the aircraft is at two thirds the speed of sound.

(b) Setting $M_{\rm tip} = 0.88$, i.e. $\sqrt{V_\infty^2+(\Omega R)^2} = 0.88(310) = 272.8$ m/s:

$$V_{\infty,\max} = \sqrt{272.8^2-\left(\Omega R\right)^2}.$$

| rpm | $\Omega R$ | $V_{\infty,\max}$ | $M_{\infty,\max}$ |
|---|---|---|---|
| 1200 | 245.0 m/s | 119.9 m/s | **0.387** |
| 1020 | 208.3 | 176.2 | **0.568** |
| 850 | 173.6 | 210.5 | **0.679** |

**Slowing the propeller by 30% nearly doubles the usable flight Mach number.**

(c) *What must change.* The propeller absorbs power $P = Q\Omega$ where $Q$ is the shaft torque. Dropping $\Omega$ by 29% at constant power requires the torque to rise by 41%, and that torque must be produced by the blades' aerodynamic loading. Since the thrust must also be unchanged, and the blade sections now meet the air more slowly, each blade must generate more force:

**More blade area.** Either more blades (four to six or eight) or wider chord — both raise the **solidity** $\sigma = Bc/(\pi R)$.

**Higher blade lift coefficient**, achieved through more pitch and more camber — which moves the sections closer to stall and narrows the efficient operating range.

**Or a larger diameter**, which reduces the disc loading and lets each blade work more gently.

*Two limits on doing so.*

**Ground clearance and structure.** A 3.9 m propeller on a wing-mounted engine already sets the undercarriage height; going larger cascades into landing-gear weight, fuselage height, and — on a low-wing aircraft — the wing's dihedral. **This is the constraint that has fixed regional turboprop propeller diameters near 4 m for forty years.**

**Gearbox torque.** Gearbox mass scales with torque, not power. Dropping from 1200 to 850 rpm at constant power raises the torque by 41%, and the gearbox — already among the heaviest components — grows accordingly. **Beyond a point the gearbox weight consumes the fuel saving the slower propeller was meant to deliver.**

*And a third, worth naming.* Raising solidity toward a fan's turns the propeller into a device with fan-like induced losses and propeller-like installation problems — the worst of both. **The open rotor is the attempt to find the useful point on that continuum**, and its difficulty is a fair measure of how narrow the useful point is.

(d) *Why the duct helps.* A turbofan's inlet is a **subsonic diffuser**: it decelerates the captured stream from flight Mach number to about $M = 0.5$ before the flow reaches the fan face. The fan blades therefore never see the flight Mach number at all.

$$M_{\rm tip,fan} = \frac{\sqrt{\left(0.50\,a\right)^2+\left(\Omega R\right)^2}}{a} = \sqrt{0.25+\left(\frac{\Omega R}{a}\right)^2},$$

**which does not contain $M_\infty$.** So a fan at $M_\infty = 0.85$ has exactly the same tip Mach number as the same fan at $M_\infty = 0.3$ — the inlet has removed the flight speed from the problem entirely.

*(Real fans are designed with transonic tips, $M_{\rm tip}\approx1.3$–$1.5$, with the shocks contained inside the duct where they can be managed and where the casing suppresses the noise. That is a design choice the duct makes available; an unducted rotor has no such option.)*

*What the duct costs.* Three things, and together they are why the propeller wins below $M = 0.65$:

**Mass flow.** The duct's diameter is limited by nacelle drag, ground clearance, and weight, so a fan handles perhaps 800 kg/s where an unducted propeller handles 1500 kg/s. **Less air means a larger velocity increment for the same thrust, and worse propulsive efficiency** — 0.50 against 0.85.

**Nacelle drag and weight.** The duct is a substantial aerodynamic surface with its own skin friction and its own structure, and it must contain a released fan blade — the containment casing alone is hundreds of kilograms.

**Inlet loss.** The diffusion is not free: an inlet recovers 97–99% of stagnation pressure at cruise, and less at high angle of attack or in crosswind.

*The synthesis, which is the lesson.* **The duct buys blade-tip Mach number and sells mass flow.** Below $M\approx0.65$ the mass flow is worth more, and the propeller wins on fuel by 20–30%. Above it the tip Mach number is worth more, and the propeller simply cannot go there. **The crossover is not a matter of taste; it is where a blade tip reaches the speed of sound.**

</details>

## Flashback

**From Lesson 2.5 (The turbofan and the bypass idea):** A turbofan has $B = 8$, $u_{e,\rm core} = 986$ m/s, $u_{e,\rm fan} = 355$ m/s, $f = 0.02316$, at $V_\infty = 252.7$ m/s. (a) Find the specific thrust per unit total mass flow. (b) Find the TSFC in kg/(N·h) for $Q_R = 43$ MJ/kg. (c) Find the overall efficiency. (d) Compare the bypass jet's velocity ratio with a propeller's and comment.

<details>
<summary>Solution</summary>

(a) $$\frac{F}{\dot m_{\rm total}} = \frac{\left(1+f\right)u_{e,c}-V_\infty+B\left(u_{e,f}-V_\infty\right)}{1+B} = \frac{1.02316(986)-252.7+8(355-252.7)}{9}$$

$$= \frac{1008.8-252.7+818.4}{9} = \frac{1574.5}{9} = 174.9\ \mathrm{m/s}.$$

(b) $$\mathrm{TSFC} = \frac{f/(1+B)}{F/\dot m_{\rm total}} = \frac{0.02316/9}{174.9} = \frac{0.002573}{174.9} = 1.471\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.0530\ \mathrm{kg/(N\cdot h)}.$$

(c) $$\eta_o = \frac{174.9(252.7)}{0.002573\left(43\times10^6\right)} = \frac{44{,}190}{110{,}640} = 0.399.$$

(d) *Velocity ratios.*

$$\text{fan: } \frac{u_{e,f}}{V_\infty} = \frac{355}{252.7} = 1.405, \qquad \text{propeller (Example 1): } \frac{u_e}{V_\infty} = \frac{136.9}{130} = 1.053.$$

*Comment.* The propeller's wake is only 5% faster than the free stream; the fan's bypass jet is 40% faster. **By $\eta_p = 2/(1+u_e/V_\infty)$ that is 0.974 against 0.832** — and the fan's core jet, at $986/252.7 = 3.90$, drags the combined figure down further.

**The propeller is doing exactly what the fan does, only more so**, and the difference is entirely mass flow: 1156 kg/s through a 3.5 m disc against a few hundred through a ducted fan.

*The bridge to this lesson.* [2.5](02-05-turbofan-bypass.md) ended with the observation that the TSFC-versus-bypass curve was still falling at $B = 12$ and that the airframe, not the cycle, was stopping it. **A propeller is the answer to "what if you removed the airframe's objection"** — take the duct away and the mass flow can be an order of magnitude larger.

**And the price is the one this lesson is about.** The duct was not only a drag and weight penalty; it was also a *shield*, decelerating the flow before the blades saw it. Remove it and the blade tips face the full flight speed, which caps the aircraft at $M\approx0.65$.

**So the bypass-ratio ladder does not simply continue upward — it ends, and a different regime begins.** That is the sense in which the turboprop is not "a turbofan with $B = 300$" but a genuinely different machine, and it is why the propulsion design space of [4.4](04-04-propulsion-design-space.md) has regions rather than a single axis.

</details>

## Connections

- **Backward:** the bypass argument taken to its limit is [2.5](02-05-turbofan-bypass.md)'s; the propulsive-efficiency formula is [2.1](02-01-propulsion-efficiencies-brayton.md)'s; the compressible relations behind the tip Mach number are [1.2](01-02-compressible-flow-nozzles.md)'s.
- **Forward:** [4.4](04-04-propulsion-design-space.md) places propellers, fans, jets, ramjets, and rockets on one map by flight Mach number and specific impulse.
- **Sideways:** actuator-disc theory is the **Betz analysis** of a wind turbine with the sign of the energy flow reversed — the same streamtube, the same $v$ and $2v$, and the Betz limit of 16/27 is the mirror image of $\eta_i\to1$ here. It also reproduces exactly the "large span, gentle downwash" logic of induced drag in [`aerodynamics` 2.5](../../aerodynamics/lessons/02-05-finite-wings-downwash-lifting-line.md): a wing, a propeller, and a rotor are the same momentum-exchange device wearing different geometry.
