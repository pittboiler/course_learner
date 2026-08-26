# Propulsion · Lesson 1.1: Thrust and the momentum equation

> ⏱ ~15 min · Module 1: Thrust and nozzles · Builds on: [`fluid-dynamics` 1.5](../../fluid-dynamics/lessons/01-05-euler-equation.md) · Unlocks: [1.2 Compressible flow for nozzles](01-02-compressible-flow-nozzles.md), [1.4 Nozzle performance](01-04-nozzle-performance-cf-cstar.md)

## Why this matters

Every engine that has ever moved a vehicle through air or space does exactly one thing: it throws mass backwards. Thrust is the reaction.

That sounds simple, and the momentum term $\dot mu_e$ *is* simple. But there is a second term — a pressure-area term at the nozzle exit — that catches people out, and it is responsible for a rocket producing 15% more thrust in vacuum than at sea level, without changing anything about how it runs.

**This lesson derives the thrust equation once, from a control volume, and then reads every term.** The rest of the course is applications of it: sizing the nozzle that sets $u_e$ ([1.2](01-02-compressible-flow-nozzles.md)–[1.4](01-04-nozzle-performance-cf-cstar.md)), running the cycle that sets $\dot m$ and the energy available ([Module 2](02-01-propulsion-efficiencies-brayton.md)), and integrating it over a mission ([Module 3](03-01-rocket-equation.md)).

## The idea

**Draw a box around the engine and count momentum.** The net force on the box equals the rate at which momentum leaves it minus the rate at which momentum enters it, plus whatever pressure forces act on the box's surface. That is Newton's second law applied to a control volume, and it is the entire derivation.

**Momentum in, momentum out.** An air-breathing engine swallows air at flight speed $V_\infty$ and ejects it at $u_e$. It has therefore *added* momentum at a rate $\dot m(u_e-V_\infty)$, and the reaction is thrust. **A rocket carries its own propellant, so nothing comes in — the momentum term is simply $\dot mu_e$.**

**Now the awkward part: pressure.** The control surface has ambient pressure $p_a$ acting on it everywhere except at the nozzle exit plane, where the exhaust is at $p_e$. If the two differ, the imbalance is an uncancelled force $(p_e-p_a)A_e$.

**This is not a subtlety — it is 15% of a launch vehicle's thrust.** A rocket nozzle designed for altitude runs with $p_e<p_a$ at sea level, so the pressure term is *negative* and eats thrust. Climb, $p_a$ falls, and the same engine gets steadily stronger.

**Which suggests defining an effective exhaust velocity** that absorbs both terms: $v_e = u_e+(p_e-p_a)A_e/\dot m$, so that $F = \dot mv_e$ always. **That single number is what [specific impulse](../reference.md#specific-impulse) measures** ([3.2](03-02-specific-impulse-rocket-performance.md)), and it is why $I_{sp}$ is quoted separately for sea level and vacuum.

**And a warning about what the [thrust equation](../reference.md#thrust-equation) does and does not include.** The thrust computed this way is **uninstalled** — it ignores the drag of the nacelle, the spillage around the inlet, and the bleed air taken for other systems. Installed thrust is smaller, sometimes by several percent.

## The formal version

**The general thrust equation.** For a steady control volume around an engine in flight at speed $V_\infty$, with inlet mass flow $\dot m_a$, fuel flow $\dot m_f$, exit area $A_e$, exit velocity $u_e$, and exit static pressure $p_e$:

$$\boxed{\;F = \dot m_eu_e-\dot m_aV_\infty+\left(p_e-p_a\right)A_e, \qquad \dot m_e = \dot m_a+\dot m_f.\;}$$

*In words: thrust is the momentum you throw out, minus the momentum you swallowed, plus a pressure imbalance at the exit plane.*

**With the fuel/air ratio $f = \dot m_f/\dot m_a$:**

$$\boxed{\;\frac{F}{\dot m_a} = \left(1+f\right)u_e-V_\infty+\frac{\left(p_e-p_a\right)A_e}{\dot m_a}\;}$$

— the **specific thrust**, in m/s, which is the natural figure of merit for an air-breathing engine because it says how much thrust each kilogram per second of air is worth.

**For a rocket** ($V_\infty$ term absent, since no external mass is ingested):

$$\boxed{\;F = \dot mu_e+\left(p_e-p_a\right)A_e = \dot mv_e, \qquad v_e\equiv u_e+\frac{\left(p_e-p_a\right)A_e}{\dot m}.\;}$$

$v_e$ is the **effective exhaust velocity**. It is not a physical speed of anything; it is the number that makes $F = \dot mv_e$ true.

**The three terms, named.**

| Term | Name | Sign |
|---|---|---|
| $\dot m_eu_e$ | **momentum thrust** (gross thrust) | always positive |
| $-\dot m_aV_\infty$ | **ram drag** | always negative in flight |
| $(p_e-p_a)A_e$ | **pressure thrust** | positive if under-expanded, negative if over-expanded |

**Ram drag is why an air-breather's thrust falls with flight speed** while a rocket's does not — the faster you fly, the more momentum the air already had when you caught it.

**Perfect expansion.** If $p_e = p_a$ the pressure term vanishes and $v_e = u_e$. A nozzle can only be perfectly expanded at one altitude; [1.3](01-03-nozzle-operating-regimes.md) is about what happens everywhere else.

**Uninstalled vs installed thrust.**

$$F_{\rm installed} = F_{\rm uninstalled}-D_{\rm nacelle}-D_{\rm spillage}-\text{(bleed and power extraction penalties)}.$$

Everything in this course is uninstalled unless stated otherwise.

## Picture

![A two-panel figure. Left: a control volume drawn as a dashed box around a generic engine in flight, with air entering the left face at flight speed V infinity and mass flow m dot a, fuel injected from above at m dot f, and exhaust leaving the right face through an exit area A sub e at velocity u sub e and static pressure p sub e. Ambient pressure p sub a is shown pressing inward on every face of the box with small arrows, except across the exit plane where the arrows are drawn at the different value p sub e, and the uncancelled difference is highlighted. Three labelled arrows below the box give the three contributions — momentum thrust, ram drag pointing backwards, and pressure thrust. Right: two rocket nozzles side by side with identical mass flow and exit velocity, the left one at sea level where ambient pressure exceeds the exit pressure so the pressure-thrust arrow points backwards and the plume pinches inward, the right one in vacuum where ambient pressure is zero so the pressure-thrust arrow points forwards and the plume balloons out; a small bar chart beneath compares their total thrust, showing the vacuum bar about eighteen percent taller.](assets/01-01-fig1.svg)

Left: where each term comes from. The pressure term is the only one that is not obviously momentum, and it exists purely because the exit plane is the one place the ambient pressure does not reach.

Right: the same engine, two altitudes, two thrusts.

## Worked examples

**Example 1 (a turbojet in cruise).** A turbojet ingests $\dot m_a = 50$ kg/s of air at a flight speed of $V_\infty = 250$ m/s, burns fuel at $f = 0.020$, and exhausts at $u_e = 550$ m/s with the nozzle perfectly expanded ($p_e = p_a$).

*Thrust.*

$$F = \dot m_a\left[\left(1+f\right)u_e-V_\infty\right] = 50\left[1.020(550)-250\right] = 50\left[561-250\right] = 50(311) = 15{,}550\ \mathrm{N}.$$

*Specific thrust.*

$$\frac{F}{\dot m_a} = 311\ \mathrm{m/s} \quad(\text{or } 311\ \mathrm{N\ per\ kg/s}).$$

*Reading it.* Three observations:

**The fuel contributes 550 N, or 3.5%.** Neglecting $f$ entirely — a common simplification — gives $50(550-250) = 15{,}000$ N, low by 3.5%. **For a first estimate that is fine; for a cycle analysis it is not.**

**Ram drag is enormous.** The gross thrust is $50(1.02)(550) = 28{,}050$ N and the ram drag is $-12{,}500$ N: the engine throws away 45% of its gross thrust simply because the air arrived with momentum already. **At $V_\infty = 550$ m/s this engine would produce almost nothing.**

**Specific thrust of 311 m/s is typical of a turbojet.** A high-bypass turbofan is nearer 150 m/s, and it is *better* for that — [2.5](02-05-turbofan-bypass.md) explains the apparent paradox.

*Sanity check on the power.* The kinetic energy added per second is

$$\tfrac12\dot m_e u_e^2-\tfrac12\dot m_aV_\infty^2 = \tfrac12(51)(550)^2-\tfrac12(50)(250)^2 = 7.714-1.563 = 6.15\ \mathrm{MW},$$

while the useful propulsive power is $FV_\infty = 15{,}550(250) = 3.89$ MW. **The ratio, 63%, is the propulsive efficiency** — the rest is kinetic energy left behind in the jet ([2.1](02-01-propulsion-efficiencies-brayton.md)).

**Example 2 (a rocket at sea level and in vacuum).** A first-stage engine has $\dot m = 250$ kg/s, exit velocity $u_e = 2800$ m/s, exit area $A_e = 1.20$ m², and exit static pressure $p_e = 70$ kPa.

*At sea level* ($p_a = 101{,}325$ Pa):

$$F_{SL} = \dot mu_e+\left(p_e-p_a\right)A_e = 250(2800)+\left(70{,}000-101{,}325\right)(1.20)$$

$$= 700{,}000-37{,}590 = 662{,}410\ \mathrm{N} = 662.4\ \mathrm{kN}.$$

*In vacuum* ($p_a = 0$):

$$F_{\rm vac} = 700{,}000+70{,}000(1.20) = 700{,}000+84{,}000 = 784{,}000\ \mathrm{N} = 784.0\ \mathrm{kN}.$$

$$\frac{F_{\rm vac}}{F_{SL}} = \frac{784.0}{662.4} = 1.184.$$

**An 18% thrust increase, from nothing but leaving the atmosphere.**

*Effective exhaust velocities.*

$$v_{e,SL} = \frac{662{,}410}{250} = 2649.6\ \mathrm{m/s}, \qquad v_{e,\rm vac} = \frac{784{,}000}{250} = 3136.0\ \mathrm{m/s}.$$

*And in specific-impulse terms* ([3.2](03-02-specific-impulse-rocket-performance.md)), dividing by $g_0 = 9.80665$ m/s²:

$$I_{sp,SL} = 270.2\ \mathrm{s}, \qquad I_{sp,\rm vac} = 319.8\ \mathrm{s}.$$

*Reading it.* Several things, and the last is a genuine design tension:

**The engine itself did not change.** Same chamber, same mass flow, same $u_e$, same nozzle. Only the ambient pressure moved.

**The pressure term is $-5.4\%$ at sea level and $+12\%$ in vacuum**, a swing of 18 points.

**This nozzle is over-expanded at sea level** ($p_e = 70 < 101.3$ kPa) and under-expanded everywhere above about 3 km. It is perfectly expanded exactly once during the flight — at the altitude where ambient pressure is 70 kPa, roughly 3.0 km.

**And a bigger nozzle is not automatically better.** Lengthening the bell lowers $p_e$ and raises $u_e$, which helps in vacuum — but at sea level it makes the over-expansion worse, and beyond about $p_e\approx0.4p_a$ the flow separates inside the nozzle ([1.3](01-03-nozzle-operating-regimes.md)), which is destructive as well as inefficient.

**So a first-stage nozzle is deliberately under-sized and a vacuum-stage nozzle is enormous.** The Merlin engine flies in both forms: the sea-level version has an expansion ratio near 16, the vacuum version near 165, and the vacuum variant produces about 10% more $I_{sp}$ from the identical turbopump and chamber.

## Watch out

- **You might forget the pressure term.** It is 18% of a first-stage rocket's thrust range and cannot be dropped.
- **You might use gauge pressure.** $p_e$ and $p_a$ must both be absolute.
- **You might add ram drag to a rocket.** A rocket ingests nothing, so there is no $-\dot mV_\infty$ term; its thrust is independent of flight speed.
- **You might confuse $u_e$ with $v_e$.** $u_e$ is the actual gas speed at the exit plane; $v_e$ is the fictitious speed that makes $F = \dot mv_e$ true including the pressure term.
- **You might quote a single $I_{sp}$ for a rocket.** It depends on ambient pressure. Always say sea level or vacuum.
- **You might neglect $f$ in a cycle analysis.** It is 2% of the mass flow but 3.5% of the thrust; fine for a sketch, not for a comparison.
- **You might report uninstalled thrust as if it were what the aircraft feels.** Nacelle drag, spillage, and bleed all subtract.

## One-liner

> Draw a box, count momentum in and out, and remember that ambient pressure fails to reach the exit plane: $F = \dot m_eu_e-\dot m_aV_\infty+(p_e-p_a)A_e$ — momentum thrust, ram drag, and a pressure term worth 18% of a launch vehicle's thrust between sea level and vacuum.

## Problems

**P1 (🟢)** A turbofan ingests $\dot m_a = 300$ kg/s at $V_\infty = 240$ m/s and exhausts at $u_e = 400$ m/s, perfectly expanded, with $f = 0.015$. (a) Find the gross (momentum) thrust. (b) Find the ram drag. (c) Find the net thrust and the specific thrust. (d) What fraction of the gross thrust does ram drag consume?

**P2 (🟡)** A rocket engine has $\dot m = 180$ kg/s, $u_e = 3100$ m/s, $A_e = 0.90$ m², and $p_e = 40$ kPa. (a) Find the thrust at sea level and in vacuum. (b) Find $v_e$ and $I_{sp}$ for each. (c) Find the ambient pressure at which the nozzle is perfectly expanded, and the thrust there. (d) Is this nozzle better suited to a first stage or an upper stage, and why?

**P3 (🔴)** (a) Derive the thrust equation $F = \dot m_eu_e-\dot m_aV_\infty+(p_e-p_a)A_e$ from a control volume, being explicit about where the pressure term comes from and why ambient pressure cancels everywhere else. (b) A designer proposes lengthening a first-stage nozzle so that $p_e$ falls from 70 kPa to 45 kPa, which raises $u_e$ from 2800 to 2900 m/s and grows $A_e$ from 1.20 to 1.65 m², at $\dot m = 250$ kg/s. Compute the sea-level and vacuum thrust before and after. (c) Evaluate the trade over a launch: is the change worth it? (d) What physical limit stops the designer from going further?

<details>
<summary>Solutions</summary>

**P1** (a) $$\dot m_e = \dot m_a(1+f) = 300(1.015) = 304.5\ \mathrm{kg/s},$$
$$F_{\rm gross} = \dot m_eu_e = 304.5(400) = 121{,}800\ \mathrm{N}.$$

(b) $$D_{\rm ram} = \dot m_aV_\infty = 300(240) = 72{,}000\ \mathrm{N}.$$

(c) $$F = 121{,}800-72{,}000 = 49{,}800\ \mathrm{N} = 49.8\ \mathrm{kN},$$

$$\frac{F}{\dot m_a} = \frac{49{,}800}{300} = 166\ \mathrm{m/s}.$$

(d) $$\frac{72{,}000}{121{,}800} = 0.591 = 59.1\%.$$

**Ram drag consumes almost 60% of the gross thrust** — much more than the turbojet of Example 1, because this engine's exit velocity is much closer to its flight speed. **That is exactly what a high-bypass fan is designed to do**, and the low specific thrust (166 m/s against 311) is the visible symptom of the high propulsive efficiency that makes it fuel-efficient ([2.5](02-05-turbofan-bypass.md)).

**P2** (a) *Sea level:*

$$F_{SL} = 180(3100)+\left(40{,}000-101{,}325\right)(0.90) = 558{,}000-55{,}193 = 502{,}808\ \mathrm{N} = 502.8\ \mathrm{kN}.$$

*Vacuum:*

$$F_{\rm vac} = 558{,}000+40{,}000(0.90) = 558{,}000+36{,}000 = 594{,}000\ \mathrm{N} = 594.0\ \mathrm{kN}.$$

$$\frac{F_{\rm vac}}{F_{SL}} = 1.181.$$

(b) $$v_{e,SL} = \frac{502{,}808}{180} = 2793.4\ \mathrm{m/s}, \qquad v_{e,\rm vac} = \frac{594{,}000}{180} = 3300.0\ \mathrm{m/s}.$$

$$I_{sp,SL} = \frac{2793.4}{9.80665} = 284.8\ \mathrm{s}, \qquad I_{sp,\rm vac} = \frac{3300.0}{9.80665} = 336.5\ \mathrm{s}.$$

(c) Perfect expansion means $p_a = p_e = 40$ kPa, at which

$$F = \dot mu_e = 558{,}000\ \mathrm{N} = 558.0\ \mathrm{kN}.$$

In the standard atmosphere, $p = 40$ kPa occurs at about **7.2 km**.

(d) *Which stage.* $p_e = 40$ kPa is only 39% of sea-level ambient, so at sea level this nozzle is **substantially over-expanded** — the pressure term costs 55 kN, and $p_e/p_a = 0.39$ is right at the Summerfield separation threshold of about 0.4 ([1.3](01-03-nozzle-operating-regimes.md)).

**This is an upper-stage nozzle**, or at best a first-stage nozzle that must be started at altitude. Firing it at sea level risks flow separation inside the bell, which produces asymmetric side loads capable of damaging the gimbal actuators.

*The performance argument agrees.* Its vacuum $I_{sp}$ of 336.5 s is respectable and its sea-level 284.8 s is mediocre; an engine optimized for sea level would use a smaller expansion ratio, giving perhaps 300 s at sea level and 330 s in vacuum — better *on average* over a first stage's trajectory.

**P3** (a) *Derivation.* Take a control volume whose side and rear faces lie in undisturbed ambient air at pressure $p_a$, whose front face is upstream of the inlet, and whose rear face cuts through the nozzle exit plane. Let the engine be steady in its own frame, with air arriving at $V_\infty$.

*Momentum flux.* Momentum leaves through the exit plane at rate $\dot m_eu_e$ and enters through the front face at rate $\dot m_aV_\infty$. The net rate of momentum increase in the streamwise direction is

$$\dot m_eu_e-\dot m_aV_\infty.$$

*Pressure forces.* Ambient pressure $p_a$ acts everywhere on the control surface. For a **closed** surface, a uniform pressure exerts **zero** net force — the contributions cancel exactly, by the divergence theorem. So if the whole surface were at $p_a$, pressure would contribute nothing.

**But the exit plane is not at $p_a$; it is at $p_e$.** Writing the actual pressure distribution as "$p_a$ everywhere" plus "an extra $(p_e-p_a)$ over the exit area $A_e$", the first part cancels and the second does not:

$$F_{\rm pressure} = \left(p_e-p_a\right)A_e.$$

*Newton's second law* for the control volume, with $F$ the reaction the engine exerts on the vehicle:

$$\boxed{F = \dot m_eu_e-\dot m_aV_\infty+\left(p_e-p_a\right)A_e.}$$

**The pressure term exists solely because the exit plane is the one piece of the control surface where the ambient atmosphere is not present to push back.**

(b) *Before:* $\dot m = 250$, $u_e = 2800$, $A_e = 1.20$, $p_e = 70$ kPa (Example 2).

$$F_{SL} = 662.4\ \mathrm{kN}, \qquad F_{\rm vac} = 784.0\ \mathrm{kN}.$$

*After:* $u_e = 2900$, $A_e = 1.65$, $p_e = 45$ kPa.

$$\dot mu_e = 250(2900) = 725{,}000\ \mathrm{N}.$$

$$F_{SL} = 725{,}000+\left(45{,}000-101{,}325\right)(1.65) = 725{,}000-92{,}936 = 632{,}064\ \mathrm{N} = 632.1\ \mathrm{kN}.$$

$$F_{\rm vac} = 725{,}000+45{,}000(1.65) = 725{,}000+74{,}250 = 799{,}250\ \mathrm{N} = 799.3\ \mathrm{kN}.$$

| | $F_{SL}$ | $F_{\rm vac}$ |
|---|---|---|
| Before | 662.4 kN | 784.0 kN |
| After | 632.1 kN | 799.3 kN |
| Change | $-30.3$ kN ($-4.6\%$) | $+15.3$ kN ($+2.0\%$) |

(c) *Is it worth it?* **Almost certainly not for a first stage**, for three reasons that compound:

**The loss is where the thrust matters most.** A launch vehicle is thrust-limited at liftoff — it must exceed its own weight, and every second spent at low acceleration is gravity loss. Losing 4.6% at sea level directly costs liftoff thrust-to-weight, whereas gaining 2.0% in vacuum arrives late, when the vehicle is light and the margin is comfortable.

**The gain is smaller than the loss, in absolute terms as well as relative.** $-30.3$ kN against $+15.3$ kN.

**The nozzle got heavier.** Growing $A_e$ from 1.20 to 1.65 m² means roughly 37% more bell area, and nozzle mass scales with it. Dead mass on a first stage is charged at the full rocket-equation rate ([3.3](03-03-staging-mass-ratio.md)).

*A trajectory-weighted view.* A first stage spends roughly the first third of its burn below 10 km, where $p_a>40$ kPa and the change is a loss, and the remaining two-thirds above it. Integrating crudely, the net $\Delta v$ effect is close to zero — and once nozzle mass is charged, negative.

**The correct answer is to make this change on the *upper* stage**, where $p_a = 0$ throughout and the 2.0% gain is unopposed. That is exactly what vacuum-optimized engine variants do.

(d) *What stops the designer.* Three limits, in the order they bite:

**Flow separation.** Lowering $p_e$ at fixed $p_a$ drives the nozzle deeper into over-expansion. By the Summerfield criterion, separation begins near $p_e\approx0.4p_a$; at sea level that is $p_e\approx41$ kPa. **The proposed $p_e = 45$ kPa is right at the edge**, and any further reduction would separate the flow inside the bell during the first seconds of flight — producing asymmetric side loads that have historically broken gimbal actuators and destroyed engines.

**Diminishing returns.** From the isentropic relations ([1.2](01-02-compressible-flow-nozzles.md)), $u_e$ approaches $V_{\max} = \sqrt{2c_pT_0}$ asymptotically. Doubling the expansion ratio from 20 to 40 buys only a few percent in $u_e$, while the exit area — and hence the mass and the pressure-term swing — doubles.

**Mass and packaging.** The bell must fit the interstage, survive base heating, and be structurally stiff enough to carry gimbal loads. Beyond an expansion ratio of a few hundred it is simply too large to carry.

*The escape hatch, for completeness.* Altitude-compensating nozzles — aerospikes, dual-bell, extendible bells — sidestep the trade by changing their effective expansion ratio with altitude. Extendible bells fly today on several upper stages; aerospikes have never flown operationally, because the weight and cooling penalties have always eaten the gain.

</details>

## Connections

- **Backward:** the control-volume momentum balance is [`fluid-dynamics` 1.5](../../fluid-dynamics/lessons/01-05-euler-equation.md)'s, applied to a device rather than a fluid element; the same technique gave drag from a wake in [`aerodynamics` 3.1](../../aerodynamics/lessons/03-01-boundary-layers-momentum-integral.md).
- **Forward:** [1.2](01-02-compressible-flow-nozzles.md) computes $u_e$ and $p_e$ from the nozzle geometry; [1.3](01-03-nozzle-operating-regimes.md) diagnoses what happens when $p_e\neq p_a$; [1.4](01-04-nozzle-performance-cf-cstar.md) repackages the whole equation as $F = C_Fp_0A_t$; [3.1](03-01-rocket-equation.md) integrates $F = \dot mv_e$ over a burn to get Tsiolkovsky's equation.
- **Sideways:** "throw mass backwards, get pushed forwards" is the same accounting as a swimmer, a squid, or a firehose, and the pressure-area term is the fluid analogue of the surface term that appears whenever a conservation law is applied to an open region — the flux-plus-boundary structure of the divergence theorem in [`fluid-dynamics` 1.3](../../fluid-dynamics/lessons/01-03-continuity-equation.md).
