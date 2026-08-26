# Aerodynamics · Lesson 4.5: Quasi-one-dimensional nozzle flow

> ⏱ ~15 min · Module 4: Compressible and supersonic flow · Builds on: [4.3 Normal shock waves](04-03-normal-shock-waves.md), [4.4 Oblique shocks and Prandtl–Meyer expansion](04-04-oblique-shocks-prandtl-meyer.md) · Unlocks: [`propulsion` 1.3](../../propulsion/lessons/01-03-nozzle-operating-regimes.md)

## Why this matters

A converging–diverging nozzle is the only device that produces supersonic flow, and everything supersonic depends on one: rocket engines, jet engines, supersonic wind tunnels, steam turbines, and every high-pressure gas valve.

Its behaviour is genuinely surprising. **A converging duct accelerates subsonic flow and decelerates supersonic flow; a diverging duct does the opposite.** So to get from subsonic to supersonic you must first converge, reach exactly $M = 1$ at the narrowest point, and then diverge — and the shape has to be right or it does not work at all.

**And then the nozzle stops caring about the outside world.** Once the throat is sonic, no further reduction in back pressure can increase the mass flow: the nozzle is **choked**. That single fact governs rocket sizing, turbine metering, and the design of every critical-flow orifice in industry.

**Everything you need is already assembled** — isentropic relations from [4.2](04-02-isentropic-stagnation-relations.md), normal shocks from [4.3](04-03-normal-shock-waves.md), oblique shocks and fans from [4.4](04-04-oblique-shocks-prandtl-meyer.md). This lesson is where they are put to work.

## The idea

**The area–velocity relation is the whole surprise.** Combining continuity, momentum, and the definition of $a$ gives $dA/A = (M^2-1)\,dV/V$. The sign of $(M^2-1)$ flips at $M = 1$, and with it the whole logic of the duct.

**Below $M = 1$, density changes slowly.** Squeeze the duct and the flow must speed up to pass the same mass — the familiar garden-hose behaviour.

**Above $M = 1$, density changes faster than velocity.** Now speeding the flow up *reduces* $\rho V$ so much that the area must *increase* to pass the same mass. **The duct must open out to accelerate the flow**, which is why rocket nozzles are bells.

**So a throat is mandatory, and it must be exactly sonic.** At $M = 1$ the relation gives $dA = 0$, so the transition can only happen where the area is stationary. **Sonic flow occurs only at a throat, and only if the pressure ratio is large enough.**

**The area ratio then fixes the exit Mach number** — but with *two* answers, one subsonic and one supersonic. Which one occurs depends on the back pressure. The nozzle geometry says what is *possible*; the back pressure selects among the possibilities.

**And there are five distinct operating regimes.** Between "fully subsonic" and "perfectly expanded" the nozzle passes through a state with a normal shock standing inside it, and beyond design it produces expansion fans outside. **Reading a rocket plume tells you the pressure ratio**, and the shock diamonds visible in an over-expanded plume are exactly the wave pattern of [4.4](04-04-oblique-shocks-prandtl-meyer.md).

## The formal version

**Area–velocity relation.**

$$\boxed{\;\frac{dA}{A} = \left(M^2-1\right)\frac{dV}{V}.\;}$$

| Regime | Converging ($dA<0$) | Diverging ($dA>0$) |
|---|---|---|
| Subsonic ($M<1$) | accelerates | decelerates |
| Supersonic ($M>1$) | decelerates | accelerates |

**At $M = 1$, $dA = 0$** — sonic conditions can occur only at a throat.

**Area–Mach relation.**

$$\boxed{\;\left(\frac{A}{A^*}\right)^2 = \frac{1}{M^2}\left[\frac{2}{\gamma+1}\left(1+\frac{\gamma-1}{2}M^2\right)\right]^{\frac{\gamma+1}{\gamma-1}}.\;}$$

*In words: the local area, referenced to the sonic area, determines the local Mach number — with two roots.*

| $M$ | $A/A^*$ | | $A/A^*$ | $M$ (sub) | $M$ (sup) |
|---|---|---|---|---|---|
| 0.2 | 2.964 | | 1.5 | 0.4303 | 1.854 |
| 0.5 | 1.340 | | 2.0 | 0.3059 | 2.197 |
| 1.0 | 1.000 | | 3.0 | 0.1975 | 2.637 |
| 2.0 | 1.688 | | 4.0 | 0.1466 | 2.940 |
| 3.0 | 4.235 | | | | |

**Note how slowly $M$ grows with area ratio.** Doubling $A/A^*$ from 2 to 4 raises the exit Mach number only from 2.20 to 2.94 — the diminishing return of [4.2](04-02-isentropic-stagnation-relations.md), in geometric form.

**Choked mass flow.** Once the throat is sonic,

$$\boxed{\;\dot m = \rho^*a^*A^* = 0.0404\,\frac{p_0A^*}{\sqrt{T_0}}\ \ \text{(SI, air)},\;}$$

independent of back pressure. **Lowering $p_b$ further changes nothing upstream** — the information cannot propagate against sonic flow at the throat.

**The five regimes.** For a fixed nozzle with area ratio $A_e/A_t$ and reservoir pressure $p_0$, as back pressure $p_b$ falls:

| Regime | Condition | What happens |
|---|---|---|
| **1. Venturi** | $p_b$ just below $p_0$ | subsonic throughout; throat is the minimum pressure; not choked |
| **2. First critical** | $p_b = p_{b,1}$ | throat exactly sonic; still subsonic in the divergent section |
| **3. Shock inside** | $p_{b,2}<p_b<p_{b,1}$ | choked; normal shock stands in the divergent section, moving downstream as $p_b$ falls |
| **4. Over-expanded** | $p_{b,3}<p_b<p_{b,2}$ | shock leaves the nozzle; oblique shocks outside the exit |
| **5. Design / under-expanded** | $p_b\leq p_{b,3}$ | perfectly expanded at $p_b = p_{b,3}$; expansion fans outside if lower |

**$p_{b,1}$** is the subsonic-root exit pressure; **$p_{b,2}$** puts a normal shock exactly at the exit plane; **$p_{b,3}$** is the isentropic supersonic-root exit pressure (the **design** condition).

**Locating a shock inside the nozzle.** The key is that a shock resets the sonic reference area. Downstream of a shock,

$$\boxed{\;\frac{A^{*}_{\rm after}}{A^{*}_{\rm before}} = \frac{p_{0,\rm before}}{p_{0,\rm after}}>1,\;}$$

because $\dot m$ and $T_0$ are unchanged while $p_0$ has fallen. **A shock makes the effective throat bigger**, and the exit then sees a smaller $A_e/A^*$ — which is what allows a subsonic exit at a lower back pressure than the first critical.

## Picture

![A two-panel figure. Left panel: a converging-diverging nozzle in cross-section, with a reservoir at the left, the throat marked, and the diverging bell at the right. Below it, a stack of pressure-distribution curves along the nozzle axis is drawn for five back pressures, each labelled: the top curve dips at the throat and recovers, labelled venturi, not choked; the next reaches sonic exactly at the throat and recovers, labelled first critical; two middle curves drop past the throat then jump abruptly back up at a normal shock inside the divergent section, with the jump shown further downstream for the lower back pressure, labelled shock inside; and the bottom curve falls monotonically to the design exit pressure, labelled design, perfectly expanded. Right panel: three rocket-plume sketches side by side. The left one, labelled over-expanded, shows the plume pinching inward at the exit with crossing oblique shocks forming a repeating diamond pattern downstream. The middle, labelled perfectly expanded, shows a straight parallel plume with no waves. The right, labelled under-expanded, shows the plume ballooning outward through an expansion fan at the lip, then re-compressing into a barrel shock with a Mach disc.](assets/04-05-fig1.svg)

Left: the same nozzle, five back pressures, five completely different flows.

Right: how to read a rocket plume. A launch vehicle at sea level runs over-expanded (diamonds visible); at altitude the same nozzle runs under-expanded (the plume balloons). The transition is visible in every launch video.

## Worked examples

**Example 1 (a nozzle's four characteristic pressures).** A converging–diverging nozzle has $A_e/A_t = 2.00$, reservoir $p_0 = 500$ kPa, $T_0 = 300$ K, and throat area $A_t = 0.0100$ m².

*The two roots of the area–Mach relation at $A/A^* = 2.00$.*

$$M_{e,\rm sub} = 0.3059, \qquad M_{e,\rm sup} = 2.1972.$$

*First critical ($p_{b,1}$) — throat just sonic, subsonic everywhere else.*

$$p_{b,1} = \frac{p_0}{\left(1+0.2(0.3059)^2\right)^{3.5}} = \frac{500}{1.06705} = 468.6\ \mathrm{kPa}.$$

*Design / third critical ($p_{b,3}$) — fully supersonic, isentropic.*

$$p_{b,3} = \frac{p_0}{\left(1+0.2(2.1972)^2\right)^{3.5}} = \frac{500}{10.646} = 46.97\ \mathrm{kPa}.$$

$$T_e = \frac{300}{1.96554} = 152.6\ \mathrm{K}, \qquad a_e = \sqrt{1.4(287)(152.6)} = 247.6\ \mathrm{m/s}, \qquad V_e = 544.1\ \mathrm{m/s}.$$

*Second critical ($p_{b,2}$) — normal shock exactly at the exit plane.* Apply the normal-shock pressure ratio at $M = 2.1972$:

$$\frac{p_2}{p_1} = 1+1.16667\left(2.1972^2-1\right) = 1+1.16667(3.8277) = 5.4656,$$

$$p_{b,2} = 5.4656(46.97) = 256.7\ \mathrm{kPa}.$$

*Choked mass flow (regimes 2–5, all of them).*

$$\dot m = 0.0404\frac{p_0A_t}{\sqrt{T_0}} = 0.0404\frac{500{,}000(0.0100)}{\sqrt{300}} = 11.66\ \mathrm{kg/s}.$$

*The complete map.*

| $p_b$ (kPa) | Regime |
|---|---|
| $500\to468.6$ | venturi, not choked |
| $468.6$ | first critical — throat sonic |
| $468.6\to256.7$ | choked, normal shock inside the divergent section |
| $256.7\to46.97$ | over-expanded, oblique shocks outside |
| $46.97$ | **design**, perfectly expanded |
| $<46.97$ | under-expanded, expansion fans outside |

*Reading it.* **Note how wide regime 3 is** — a factor of 1.8 in back pressure, over which the nozzle is choked and passing 11.66 kg/s but producing no useful supersonic exit flow at all. A wind tunnel operating in that range would be useless, and a rocket engine there would be in danger of flow separation inside the bell.

**And note that atmospheric back pressure (101.3 kPa) falls in regime 4.** This nozzle, run at sea level, is **over-expanded**: it would show the classic shock-diamond plume. To run it at design it needs either a lower ambient pressure — 46.97 kPa corresponds to about 6.2 km altitude — or a higher $p_0$.

**Example 2 (finding where the shock sits).** The same nozzle is run with a back pressure of $p_b = 350$ kPa. Since $256.7<350<468.6$, a normal shock stands somewhere in the divergent section. Where?

*The logic.* Let the shock sit where the area is $A_s$. Then:

1. Upstream of the shock the flow is isentropic and supersonic; $M_s$ is the supersonic root of $A_s/A_t$.
2. Across the shock, $T_0$ is unchanged and $p_0$ falls by the normal-shock ratio.
3. Downstream the flow is subsonic and isentropic again, but with a **new** sonic reference area $A^*_{\rm after} = A_t\,p_{0,1}/p_{0,2}$.
4. The exit Mach number is the *subsonic* root of $A_e/A^*_{\rm after}$, and $p_e$ must equal $p_b$.

*Solving.* Iterating on $A_s/A_t$ until $p_e = 350$ kPa:

$$\frac{A_s}{A_t} = 1.510 \quad\Longrightarrow\quad M_s = 1.863.$$

*(In area terms the shock sits 51% of the way out along the expansion, since $A_e/A_t = 2.00$.)*

*Across the shock.*

$$\frac{p_{0,2}}{p_{0,1}} = 0.7845 \quad\Longrightarrow\quad p_{0,2} = 0.7845(500) = 392.2\ \mathrm{kPa},$$

$$\frac{p_2}{p_1} = 1+1.16667\left(1.863^2-1\right) = 3.881, \qquad M_2 = 0.6031.$$

*Static pressure jumps from $79.0$ kPa to $306.8$ kPa across a shock a few micrometres thick.*

*Downstream to the exit.* The mass flow and $T_0$ are unchanged, so the sonic reference area grows in proportion to the $p_0$ loss:

$$\frac{A^*_{\rm after}}{A_t} = \frac{1}{0.7845} = 1.2748, \qquad \frac{A_e}{A^*_{\rm after}} = \frac{2.00}{1.2748} = 1.5689.$$

Taking the **subsonic** root of the area–Mach relation at $1.5689$:

$$M_e = 0.4067, \qquad p_e = \frac{392.2}{\left(1+0.2(0.4067)^2\right)^{3.5}} = \frac{392.2}{1.12057} = 350.0\ \mathrm{kPa} \quad\checkmark$$

*Reading the result.* Three things:

**The shock sits halfway out.** At $p_b = 350$ kPa — a third of the way down from the first critical toward the second — the shock has travelled 51% of the way along the area expansion.

**The stagnation-pressure loss is 21.6%**, and it is permanent. The gas leaving this nozzle carries $p_0 = 392.2$ kPa where it entered with 500 kPa. For a rocket, that is thrust thrown away; for a wind tunnel, it is compressor power wasted.

**And the divergent section is doing the opposite of its job.** Downstream of the shock the flow is subsonic in a *diverging* duct, so it **decelerates** — from $M = 0.603$ at the shock to $M = 0.407$ at the exit. The bell, designed to accelerate supersonic flow, is acting as a subsonic diffuser.

*Why this matters practically.* A rocket engine started at sea level with a high-area-ratio nozzle can find itself in exactly this regime. **The shock's adverse pressure gradient separates the boundary layer from the nozzle wall**, and if the separation is asymmetric it produces a large side load — enough to break gimbal actuators and, historically, to damage engines during startup transients. This is why high-expansion upper-stage engines cannot be tested at sea level without an altitude chamber, and why first-stage nozzles are deliberately under-expanded at sea level to avoid the regime altogether.

## Watch out

- **You might assume a diverging duct always decelerates.** It accelerates supersonic flow — the sign flip at $M = 1$ is the lesson.
- **You might expect sonic flow anywhere but a throat.** $dA = 0$ is required at $M = 1$.
- **You might use one root of the area–Mach relation without checking the back pressure.** The geometry gives two candidates; only the pressure ratio decides.
- **You might use $A_t$ as $A^*$ downstream of a shock.** It is not — $A^*$ grows in proportion to the $p_0$ loss.
- **You might think lowering $p_b$ below design increases thrust indefinitely.** It does not change the exit conditions at all once the flow is fully supersonic; only the pressure-thrust term $(p_e-p_a)A_e$ changes.
- **You might expect a choked nozzle's mass flow to respond to back pressure.** It cannot — no signal travels upstream past a sonic throat.
- **You might treat the quasi-1-D model as exact.** It assumes properties uniform across each cross-section, which fails for rapidly diverging nozzles; real bell nozzles have a divergence-loss factor of a few percent.

## One-liner

> $dA/A = (M^2-1)\,dV/V$ flips sign at $M = 1$, so supersonic flow requires converge-then-diverge with an exactly sonic throat; the area ratio then offers two exit Mach numbers and the back pressure picks one, choosing among five regimes from unchoked venturi to under-expanded — and once the throat is sonic the mass flow stops listening to anything downstream.

## Problems

**P1 (🟢)** A converging–diverging nozzle has an area ratio $A/A^* = 2.50$ at some station. (a) Find the two possible Mach numbers there. (b) For each, find $p/p_0$ and $T/T_0$. (c) If $p_0 = 800$ kPa and $T_0 = 500$ K, find the static pressure and temperature for each case. (d) What determines which one actually occurs?

**P2 (🟡)** A rocket engine has a chamber at $p_0 = 2.0$ MPa and $T_0 = 3000$ K, a throat area $A_t = 0.0200$ m², and an expansion ratio $A_e/A_t = 8.0$. Treat the exhaust as air ($\gamma = 1.4$, $R = 287$). (a) Find the exit Mach number, pressure, and temperature. (b) Find the mass flow rate and exit velocity. (c) Find the thrust at sea level ($p_a = 101.3$ kPa) from $F = \dot mV_e+(p_e-p_a)A_e$. (d) Is the nozzle over- or under-expanded at sea level, and what would you expect the plume to look like?

**P3 (🔴)** For the nozzle of Example 1 ($A_e/A_t = 2.00$, $p_0 = 500$ kPa, $T_0 = 300$ K), the back pressure is now $p_b = 420$ kPa. (a) Confirm that a shock stands inside the nozzle. (b) Find the shock's area ratio $A_s/A_t$, the Mach number just upstream, and the stagnation-pressure loss. (c) Find the exit Mach number and confirm $p_e = p_b$. (d) Compare with the $p_b = 350$ kPa case of Example 2, and explain the shock's motion as $p_b$ varies. What happens as $p_b\to p_{b,2}$?

<details>
<summary>Solutions</summary>

**P1** (a) Solving $\left(A/A^*\right)^2 = \frac{1}{M^2}\left[\frac{2}{2.4}\left(1+0.2M^2\right)\right]^{6}$ for $A/A^* = 2.50$:

$$M_{\rm sub} = 0.2395, \qquad M_{\rm sup} = 2.4428.$$

(b) *Subsonic root:*

$$\frac{p}{p_0} = \left(1+0.2(0.05736)\right)^{-3.5} = (1.011472)^{-3.5} = 0.96085, \qquad \frac{T}{T_0} = \frac{1}{1.011472} = 0.98866.$$

*Supersonic root:*

$$\frac{p}{p_0} = \left(1+0.2(5.9673)\right)^{-3.5} = (2.19346)^{-3.5} = 0.063984, \qquad \frac{T}{T_0} = \frac{1}{2.19346} = 0.45591.$$

(c) *Subsonic:* $p = 0.96085(800) = 768.7$ kPa, $T = 0.98866(500) = 494.3$ K.

*Supersonic:* $p = 0.063984(800) = 51.19$ kPa, $T = 0.45591(500) = 227.96$ K.

(d) **The back pressure**, together with the station's position relative to the throat.

If the station is in the *converging* section, only the subsonic root is possible. If it is in the *diverging* section, either root can occur: the supersonic root if the nozzle is running choked and fully supersonic (back pressure at or below the second critical), the subsonic root if it is running as a venturi or if a shock lies upstream of this station.

**The geometry alone never decides.** The area ratio says what Mach numbers are compatible with mass conservation; the boundary condition at the exit selects among them.

**P2** (a) At $A_e/A_t = 8.0$, the supersonic root is

$$M_e = 3.677.$$

$$\frac{p_e}{p_0} = \left(1+0.2(13.52)\right)^{-3.5} = (3.7041)^{-3.5} = 0.010221 \quad\Longrightarrow\quad p_e = 0.010221(2000) = 20.44\ \mathrm{kPa},$$

$$T_e = \frac{3000}{3.7041} = 809.9\ \mathrm{K}.$$

(b) $$\dot m = 0.0404\frac{p_0A_t}{\sqrt{T_0}} = 0.0404\frac{2.0\times10^6(0.0200)}{\sqrt{3000}} = 0.0404\frac{40{,}000}{54.772} = 29.50\ \mathrm{kg/s}.$$

$$a_e = \sqrt{1.4(287)(809.9)} = 570.4\ \mathrm{m/s}, \qquad V_e = 3.677(570.4) = 2098\ \mathrm{m/s}.$$

(c) $$A_e = 8.0(0.0200) = 0.160\ \mathrm{m^2}.$$

$$F = \dot mV_e+\left(p_e-p_a\right)A_e = 29.50(2098)+\left(20{,}440-101{,}325\right)(0.160)$$

$$= 61{,}891-12{,}942 = 48{,}949\ \mathrm{N} = 48.9\ \mathrm{kN}.$$

(d) $$p_e = 20.44\ \mathrm{kPa}<p_a = 101.3\ \mathrm{kPa}.$$

**Over-expanded**, and severely so — the exit pressure is a fifth of ambient.

*What the plume looks like.* The exhaust emerges at a pressure far below ambient, so the surrounding air crushes it inward. That inward turning is achieved by a pair of **oblique shocks** springing from the nozzle lip, which cross on the axis, reflect, and set up a repeating pattern of compressions and expansions: the familiar **shock diamonds** or **Mach discs** visible in the plume of a rocket or an afterburning jet at sea level.

*The thrust penalty.* The pressure-thrust term is $-12.9$ kN — it removes 21% of the momentum thrust. **Running this nozzle at sea level costs a fifth of its thrust**, and the fix is either a smaller expansion ratio (worse at altitude) or acceptance of the loss as the price of altitude performance.

*And there is a worse failure mode lurking.* At an exit-to-ambient ratio this extreme, the shock system can move *inside* the nozzle, separating the boundary layer from the bell. The empirical **Summerfield criterion** puts the separation threshold near $p_e\approx0.4p_a$; here $p_e/p_a = 0.20$, well below it. **This nozzle would separate at sea level**, which is why engines with expansion ratios this large are upper-stage engines, started only above the atmosphere.

**P3** (a) From Example 1, the first and second criticals are $p_{b,1} = 468.6$ kPa and $p_{b,2} = 256.7$ kPa. Since

$$256.7<420<468.6,$$

the nozzle is **choked** and a **normal shock stands in the divergent section** ✓

(b) *Iterating on the shock station* until the computed exit pressure equals 420 kPa:

$$\frac{A_s}{A_t} = 1.218 \quad\Longrightarrow\quad M_s = 1.559.$$

$$\frac{p_{0,2}}{p_{0,1}} = 0.9102 \quad\Longrightarrow\quad p_{0,2} = 455.1\ \mathrm{kPa}, \qquad \text{a loss of } 9.0\%.$$

*(For reference: $p$ just upstream of the shock is $500/\left(1+0.2(2.430)\right)^{3.5} = 125.0$ kPa; just downstream it is $2.667(125.0) = 333.6$ kPa; and $M_2 = 0.6813$.)*

(c) $$\frac{A^*_{\rm after}}{A_t} = \frac{1}{0.9102} = 1.0987, \qquad \frac{A_e}{A^*_{\rm after}} = \frac{2.00}{1.0987} = 1.8204.$$

Taking the **subsonic** root of the area–Mach relation at $1.8204$:

$$M_e = 0.3405, \qquad p_e = \frac{455.1}{\left(1+0.2(0.11594)\right)^{3.5}} = \frac{455.1}{1.08356} = 420.0\ \mathrm{kPa} \quad\checkmark$$

(d) *Comparison.*

| $p_b$ (kPa) | $A_s/A_t$ | $M_s$ | $p_{0,2}/p_{0,1}$ | $M_e$ |
|---|---|---|---|---|
| 468.6 (first critical) | 1.000 | 1.000 | 1.000 | 0.306 |
| 420 | 1.218 | 1.559 | 0.910 | 0.341 |
| 350 | 1.510 | 1.863 | 0.784 | 0.407 |
| 256.7 (second critical) | 2.000 | 2.197 | 0.629 | 0.547 |

*The shock's motion.* As $p_b$ falls from the first critical toward the second, **the shock moves monotonically downstream**, from the throat to the exit plane. It does so because a shock further downstream sits in a larger area, meets a higher upstream Mach number, and therefore produces a larger $p_0$ loss — which is exactly what a lower back pressure demands.

*The pacing.* Dropping $p_b$ by 10% (468.6 to 420) moves the shock 22% of the way out; the next 17% (420 to 350) moves it a further 29%; the final 27% (350 to 256.7) covers the remaining 49%. **The shock accelerates toward the exit as the back pressure falls**, because $M_s$ — and hence the loss the shock can generate — grows faster with area the further out it goes.

*As $p_b\to p_{b,2} = 256.7$ kPa.* The shock reaches the exit plane. At exactly $p_{b,2}$ it sits *in* the exit plane, with supersonic flow at $M = 2.197$ everywhere inside the nozzle and a subsonic $M = 0.547$ immediately outside.

**Below $p_{b,2}$ the shock cannot stay** — there is no more nozzle for it to move into. It is expelled, and the required compression is instead accomplished *outside* the nozzle by a system of **oblique** shocks springing from the lip ([4.4](04-04-oblique-shocks-prandtl-meyer.md)). The interior flow is then fully supersonic and isentropic, and **nothing inside the nozzle changes as $p_b$ falls further** — the exit conditions are locked at $M_e = 2.197$, $p_e = 46.97$ kPa, regardless of what the ambient does.

*That last point is the practical heart of the lesson.* Once a nozzle is running fully supersonic, its exit velocity, temperature, pressure, and mass flow are fixed by geometry and reservoir conditions alone. **The atmosphere's only remaining influence is through the pressure-thrust term $(p_e-p_a)A_e$** — which is why a rocket's thrust rises with altitude by a perfectly calculable amount, and why the thrust of a first-stage engine is typically 10–15% higher in vacuum than at sea level.

</details>

## Flashback

**From Lesson 4.4 (Oblique shocks and Prandtl–Meyer expansion):** Air at $M_1 = 3.0$ is turned $15°$ by a compression ramp. (a) Find the shock angle (weak solution) and $M_{n1}$. (b) Find $p_2/p_1$ and $M_2$. (c) The flow then turns back $15°$ at a convex corner. Find $M_3$ and $p_3/p_1$. (d) Explain why $p_3\neq p_1$ even though the net turn is zero.

<details>
<summary>Solution</summary>

(a) Solving the $\theta$–$\beta$–$M$ relation for $\theta = 15°$, $M_1 = 3.0$ (weak root):

$$\beta = 32.24°, \qquad M_{n1} = 3.0\sin32.24° = 3.0(0.53350) = 1.6005.$$

(b) $$\frac{p_2}{p_1} = 1+1.16667\left(1.6005^2-1\right) = 1+1.16667(1.5616) = 2.8219.$$

$$M_{n2} = \sqrt{\frac{1+0.2(2.5616)}{1.4(2.5616)-0.2}} = \sqrt{\frac{1.51232}{3.38624}} = 0.66827,$$

$$M_2 = \frac{0.66827}{\sin(32.24°-15°)} = \frac{0.66827}{\sin17.24°} = \frac{0.66827}{0.29632} = 2.2552.$$

*(Stagnation-pressure loss: $p_{0,2}/p_{0,1} = 0.8952$ — a 10.5% loss.)*

(c) $$\nu(2.2552) = 32.62°, \qquad \nu\left(M_3\right) = 32.62+15 = 47.62°, \qquad M_3 = 2.8836.$$

$$\frac{p_3}{p_2} = \left(\frac{1+0.2(5.0859)}{1+0.2(8.3152)}\right)^{3.5} = \left(\frac{2.01718}{2.66304}\right)^{3.5} = \left(0.75747\right)^{3.5} = 0.37744,$$

$$\frac{p_3}{p_1} = 2.8219(0.37744) = 1.0651.$$

(d) *Why $p_3>p_1$ despite a zero net turn.* Because the shock was **irreversible** and the expansion was not.

The flow's stagnation pressure fell by 10.5% across the shock and did not recover across the fan. It arrives at station 3 with

$$p_{0,3} = 0.8952\,p_{0,1},$$

and the flow direction is back to the original, so a *reversible* path would have returned $M_3$ to 3.0 and $p_3$ to $p_1$. Instead $M_3 = 2.884<3.0$ — **the flow has permanently lost some of its ability to accelerate**, and the leftover shows up as a static pressure 6.5% above the original.

*Check the bookkeeping.* $T_0$ is unchanged throughout, so

$$\frac{p_3}{p_1} = \frac{p_{0,3}}{p_{0,1}}\cdot\frac{\left(1+0.2M_1^2\right)^{3.5}}{\left(1+0.2M_3^2\right)^{3.5}} = 0.8952\times\frac{(2.8)^{3.5}}{(2.66304)^{3.5}} = 0.8952(1.1898) = 1.0651 \quad\checkmark$$

**The 6.5% pressure excess is exactly the 10.5% stagnation-pressure loss, re-expressed at a lower Mach number.**

*The bridge to this lesson.* This is the same accounting that locates a shock inside a nozzle. In Example 2, a shock at $A_s/A_t = 1.681$ cut $p_0$ by 28%, and the *only* consequence that mattered downstream was the resulting change in the sonic reference area, $A^*_{\rm after}/A_t = 1/0.7229 = 1.383$.

**A shock's entire downstream legacy is its $p_0$ loss.** Everything after it is isentropic again — with a new, degraded stagnation pressure and a correspondingly enlarged $A^*$. Once you know how much $p_0$ was destroyed, you know everything the shock did.

</details>

## Connections

- **Backward:** the isentropic relations and choked mass flow are [4.2](04-02-isentropic-stagnation-relations.md)'s; the normal shock inside the divergent section is [4.3](04-03-normal-shock-waves.md)'s; the oblique shocks and fans outside the exit are [4.4](04-04-oblique-shocks-prandtl-meyer.md)'s; the "$M = 1$ is where everything changes sign" theme began in [4.1](04-01-compressibility-sound-speed-energy.md).
- **Forward:** [`propulsion` 1.3](../../propulsion/lessons/01-03-nozzle-operating-regimes.md) reads these regimes as engine operating states and [`propulsion` 1.4](../../propulsion/lessons/01-04-nozzle-performance-cf-cstar.md) turns the area ratio into a thrust coefficient; [4.6](04-06-subsonic-compressibility-transonic.md) finds the same converging–diverging behaviour occurring *on a wing*, where the airfoil's upper surface is the throat.
- **Sideways:** the sign flip at $M = 1$ is the hallmark of a **transcritical transition**, and it recurs exactly in open-channel flow, where the Froude number replaces the Mach number, a venturi flume replaces the nozzle, and a hydraulic jump replaces the shock — the same five operating regimes, in water, visible in any weir. The choking phenomenon itself, where a downstream boundary condition stops being able to influence upstream, is a **causality** statement of the same kind as the light cone in [`relativity`](../../relativity/syllabus.md).
