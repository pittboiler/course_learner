# Propulsion · Lesson 1.4: Nozzle performance — thrust coefficient and $c^*$

> ⏱ ~15 min · Module 1: Thrust and nozzles · Builds on: [1.3 Nozzle operating regimes](01-03-nozzle-operating-regimes.md) · Unlocks: [3.2 Specific impulse and rocket performance](03-02-specific-impulse-rocket-performance.md)

## Why this matters

A rocket's performance depends on two things that are engineered by different people with different tools: **what happens in the chamber** (propellant chemistry, injector design, combustion efficiency) and **what happens in the nozzle** (area ratio, contour, ambient pressure).

This lesson splits the performance into exactly those two factors. The [characteristic velocity](../reference.md#characteristic-velocity) $c^*$ measures the chamber; the [thrust coefficient](../reference.md#thrust-coefficient) $C_F$ measures the nozzle; and their product is the effective exhaust velocity:

$$F = C_F\,p_0A_t, \qquad c^*C_F = v_e = g_0I_{sp}.$$

**This split is how rocket engines are actually tested and diagnosed.** Measure chamber pressure, throat area, and mass flow and you have $c^*$ — which tells you whether the *combustion* is good, independent of the nozzle. Measure thrust as well and you have $C_F$ — which tells you whether the *nozzle* is good, independent of the propellant. A test that comes back with $c^*$ at 96% of theoretical and $C_F$ at 98% has an injector problem, not a nozzle problem, and you know it before opening anything.

## The idea

**Start from the thrust equation and divide by $p_0A_t$.** Chamber pressure times throat area is the natural force scale of a rocket — it is what the chamber is pushing with, over the area that meters the flow. **The resulting dimensionless number, $C_F$, turns out to depend only on $\gamma$, the area ratio, and the ambient-to-chamber pressure ratio.**

**Nothing about the propellant appears in $C_F$ except $\gamma$.** Not the temperature, not the molecular weight, not the heating value. **The nozzle does not know or care what is flowing through it**, beyond how springy the gas is.

**Everything the propellant contributes is in $c^*$.** Since the choked mass flow is $\dot m = \Gamma p_0A_t/\sqrt{RT_0}$, the ratio $p_0A_t/\dot m$ is $\sqrt{RT_0}/\Gamma$ — a velocity built entirely from chamber temperature, gas constant, and $\gamma$. **$c^*$ is the propellant's report card.**

**And their product is the whole performance.** $F = \dot mv_e$ and $F = C_Fp_0A_t$ and $\dot m = p_0A_t/c^*$ combine to give $v_e = c^*C_F$ with nothing left over.

**$C_F$ has a hard ceiling.** Expanding to a vacuum with an infinite nozzle gives $C_{F,\max} = \sqrt{\frac{2\gamma^2}{\gamma-1}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}}$ — about 2.21 for $\gamma = 1.2$. **A nozzle can multiply the chamber's raw thrust by at most a factor of two-ish**, and real ones achieve 1.6–1.9.

**At a given ambient pressure there is an optimum area ratio**, and it is exactly the one that makes $p_e = p_a$. Differentiating $C_F$ with respect to $A_e/A_t$ gives that condition immediately, which is a satisfying confirmation that "perfect expansion is best" is a theorem and not a slogan.

## The formal version

**Definitions.**

$$\boxed{\;c^*\equiv\frac{p_0A_t}{\dot m}, \qquad C_F\equiv\frac{F}{p_0A_t}, \qquad F = C_F\,p_0A_t, \qquad v_e = c^*C_F = g_0I_{sp}.\;}$$

$c^*$ has units of velocity but is **not** any physical speed; it is a measure of how much chamber pressure a propellant produces per unit mass flow through a given throat.

**Theoretical $c^*$.** From the choked-flow relation $\dot m = \Gamma p_0A_t/\sqrt{RT_0}$ with

$$\Gamma\equiv\sqrt{\gamma}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{2(\gamma-1)}},$$

$$\boxed{\;c^* = \frac{\sqrt{RT_0}}{\Gamma} = \frac{1}{\Gamma}\sqrt{\frac{R_uT_0}{\mathcal{M}}}.\;}$$

**$c^*\propto\sqrt{T_0/\mathcal{M}}$** — the same scaling as exhaust velocity, and for the same reason.

| $\gamma$ | $\Gamma$ | $C_{F,\max}$ (vacuum, infinite expansion) |
|---|---|---|
| 1.20 | 0.6485 | 2.211 |
| 1.30 | 0.6673 | 1.964 |
| 1.40 | 0.6847 | 1.809 |

**Thrust coefficient.** Dividing the thrust equation by $p_0A_t$:

$$\boxed{\;C_F = \underbrace{\sqrt{\frac{2\gamma^2}{\gamma-1}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}\left[1-\left(\frac{p_e}{p_0}\right)^{\frac{\gamma-1}{\gamma}}\right]}}_{\text{momentum term, } C_{F,\rm mom}}+\underbrace{\left(\frac{p_e}{p_0}-\frac{p_a}{p_0}\right)\frac{A_e}{A_t}}_{\text{pressure term}}.\;}$$

**The first term depends only on $\gamma$ and $A_e/A_t$** (through $p_e/p_0$). **The second carries the entire altitude dependence.**

**Vacuum values** ($p_a = 0$), for $\gamma = 1.20$:

| $A_e/A_t$ | $p_e/p_0$ | $C_{F,\rm mom}$ | $C_{F,\rm vac}$ |
|---|---|---|---|
| 16 | 0.00677 | 1.689 | 1.797 |
| 25 | 0.00380 | 1.747 | 1.842 |
| 40 | 0.00209 | 1.801 | 1.884 |
| 60 | 0.00125 | 1.841 | 1.916 |

**Optimum expansion.** Differentiating $C_F$ at fixed $p_a/p_0$:

$$\frac{\partial C_F}{\partial\left(A_e/A_t\right)} = 0 \quad\Longleftrightarrow\quad \boxed{\;p_e = p_a.\;}$$

*In words: perfect expansion maximizes the thrust coefficient — it is a theorem, not a convention.*

**Efficiencies.** Real engines are compared with theory through two separate factors:

$$\eta_{c^*} = \frac{c^*_{\rm measured}}{c^*_{\rm theoretical}}\ \ (\text{typically }0.92\text{–}0.99), \qquad \eta_{C_F} = \frac{C_{F,\rm measured}}{C_{F,\rm theoretical}}\ \ (\text{typically }0.95\text{–}0.99).$$

**$\eta_{c^*}$ diagnoses combustion** (injector mixing, residence time, incomplete reaction); **$\eta_{C_F}$ diagnoses the nozzle** (divergence loss, boundary-layer friction, two-phase flow if the propellant has solids).

**Divergence loss.** For a conical nozzle of half-angle $\alpha_d$, the exhaust is not all axial:

$$\lambda = \frac{1+\cos\alpha_d}{2},$$

which is $0.983$ for a $15°$ cone. **Bell (contoured) nozzles recover most of this**, reaching $\lambda\approx0.99$, which is why every serious engine uses one.

## Picture

![A two-panel figure. Left: a block diagram splitting rocket performance into two boxes. The upper box, labelled chamber, lists propellant chemistry, chamber temperature and molecular weight, and outputs c star equals the square root of R T nought divided by capital Gamma; the lower box, labelled nozzle, lists gamma, the area ratio and the ambient pressure, and outputs C sub F. Their outputs meet at a multiplication node producing the effective exhaust velocity v sub e, which divided by g nought gives specific impulse. A dashed feedback arrow from a test stand icon shows measured chamber pressure, throat area and mass flow feeding the c star box and measured thrust feeding the C sub F box, annotated the split is how an engine test is diagnosed. Right: thrust coefficient plotted against area ratio, as a family of curves for several ratios of ambient to chamber pressure — the vacuum curve rising monotonically toward an asymptote just above 2.2, and curves for p sub a over p nought of 0.001, 0.01 and 0.1 each rising to a peak and then falling away. A dotted line through the peaks is labelled optimum expansion, p sub e equals p sub a, and the falling right-hand portions of the finite-pressure curves are shaded and labelled over-expanded.](assets/01-04-fig1.svg)

Left: why the split exists — two teams, two numbers, two independent diagnoses.

Right: the thrust coefficient map. Note that the vacuum curve never turns over (a bigger nozzle is always better in vacuum) while every atmospheric curve has a peak exactly where $p_e = p_a$.

## Worked examples

**Example 1 (a full performance breakdown).** An engine burns propellant with $\gamma = 1.20$, $R = 378$ J/(kg·K), $T_0 = 3500$ K, at $p_0 = 10$ MPa, with $A_t = 0.050$ m² and $A_e/A_t = 25$.

*Characteristic velocity.*

$$\Gamma = \sqrt{1.20}\left(\frac{2}{2.2}\right)^{\frac{2.2}{0.4}} = 1.09545\left(0.90909\right)^{5.5} = 1.09545(0.59201) = 0.64853,$$

$$c^* = \frac{\sqrt{RT_0}}{\Gamma} = \frac{\sqrt{378(3500)}}{0.64853} = \frac{1150.2}{0.64853} = 1773.6\ \mathrm{m/s}.$$

*Mass flow, from $c^*$.*

$$\dot m = \frac{p_0A_t}{c^*} = \frac{10\times10^6(0.050)}{1773.6} = \frac{500{,}000}{1773.6} = 281.9\ \mathrm{kg/s}.$$

*(Identical to the $0.03336\,p_0A_t/\sqrt{T_0}$ route of [1.3](01-03-nozzle-operating-regimes.md) — as it must be, since $0.03336 = \Gamma/\sqrt{R}$.)*

*Thrust coefficient.* At $A_e/A_t = 25$, $p_e/p_0 = 0.00380$.

$$C_{F,\rm mom} = \sqrt{\frac{2(1.44)}{0.20}\left(\frac{2}{2.2}\right)^{11}\left[1-\left(0.00380\right)^{1/6}\right]}.$$

*(Working it: $2\gamma^2/(\gamma-1) = 14.40$; $(2/2.2)^{11} = 0.35049$; $(0.00380)^{1/6} = 0.39503$, so the bracket is $0.60497$. Then $14.40(0.35049)(0.60497) = 3.0533$ and the square root is $1.7474$.)*

$$C_{F,\rm mom} = 1.747, \qquad \frac{p_e}{p_0}\frac{A_e}{A_t} = 0.00380(25) = 0.0950.$$

| Condition | $p_a/p_0$ | $C_F$ | $F = C_Fp_0A_t$ | $I_{sp} = c^*C_F/g_0$ |
|---|---|---|---|---|
| Vacuum | 0 | $1.747+0.095 = 1.842$ | 921.2 kN | 333.2 s |
| 10 km ($p_a = 26.5$ kPa) | 0.00265 | $1.842-0.0663 = 1.776$ | 888.1 kN | 321.2 s |
| Sea level | 0.010133 | $1.842-0.2533 = 1.589$ | 794.5 kN | 287.4 s |

*Reading it.* Four points:

**The whole altitude dependence is one term.** $-({p_a}/{p_0})(A_e/A_t) = -25p_a/p_0$, subtracted from a fixed 1.842. Nothing else in the calculation moves.

**$c^*$ never appears in the altitude comparison.** The chamber is doing the same thing at every altitude; only the nozzle's environment changed. **That is exactly the separation the split was designed to give.**

**Sea-level $C_F$ of 1.589 against a theoretical ceiling of 2.211** — the nozzle is delivering 72% of what an infinite nozzle in vacuum could.

**And $I_{sp} = c^*C_F/g_0$ reproduces the thrust calculation exactly**, which is worth verifying once: $1773.6(1.842)/9.80665 = 333.2$ s, and $F/(\dot mg_0) = 921{,}200/(281.9\times9.80665) = 333.2$ s ✓

**Example 2 (reading a hot-fire test).** A test article is fired at sea level. The instrumentation reports:

$$p_0 = 9.4\ \mathrm{MPa}, \qquad A_t = 0.050\ \mathrm{m^2}, \qquad \dot m = 276\ \mathrm{kg/s}, \qquad F = 712\ \mathrm{kN},$$

and the design is the $A_e/A_t = 25$ nozzle of Example 1, with the same propellant.

*Measured $c^*$.*

$$c^*_{\rm meas} = \frac{p_0A_t}{\dot m} = \frac{9.4\times10^6(0.050)}{276} = \frac{470{,}000}{276} = 1703\ \mathrm{m/s}.$$

$$\eta_{c^*} = \frac{1703}{1773.6} = 0.960.$$

*Measured $C_F$.*

$$C_{F,\rm meas} = \frac{F}{p_0A_t} = \frac{712{,}000}{470{,}000} = 1.515.$$

*Theoretical $C_F$ at this chamber pressure and sea level:*

$$\frac{p_a}{p_0} = \frac{101{,}325}{9.4\times10^6} = 0.010779, \qquad C_{F,\rm theo} = 1.842-25(0.010779) = 1.573.$$

$$\eta_{C_F} = \frac{1.515}{1.573} = 0.963.$$

*The diagnosis.* Both efficiencies are around 96%, and they mean different things:

**$\eta_{c^*} = 0.960$ says the combustion is incomplete or poorly mixed.** 4% of the theoretical characteristic velocity is missing, which corresponds to roughly 8% of the chamber temperature (since $c^*\propto\sqrt{T_0}$) — about 270 K. **The likely causes are injector maldistribution, insufficient residence time, or a mixture ratio that has drifted off optimum.** All are chamber-side problems, and none of them can be fixed by touching the nozzle.

**$\eta_{C_F} = 0.963$ says the nozzle is losing about 4%**, which is *high* for a modern bell nozzle. Divergence loss should be about 1%, boundary-layer friction 1–2%. **The extra suggests either a conical rather than contoured bell, or — more likely at $p_e/p_a = 0.35$ — incipient flow separation** ([1.3](01-03-nozzle-operating-regimes.md)).

*And the overall performance:*

$$I_{sp} = \frac{F}{\dot mg_0} = \frac{712{,}000}{276(9.80665)} = 263.1\ \mathrm{s},$$

against the theoretical $c^*C_F/g_0 = 1773.6(1.573)/9.80665 = 284.5$ s. **The engine is delivering 92.5% of book performance**, and that number is the product $\eta_{c^*}\eta_{C_F} = 0.960(0.963) = 0.925$ ✓

*Why this decomposition is worth the trouble.* Suppose you only knew $I_{sp} = 263$ s against a book value of 284 s. You would know something is wrong and nothing about what. **The split says: 4 points in the chamber, 4 points in the nozzle, and here are two different teams' problems.**

**And it says which is cheaper to fix.** An injector redesign is a months-long test campaign; checking the nozzle for separation is a matter of raising chamber pressure on the next run and seeing whether $\eta_{C_F}$ recovers. **You do the cheap experiment first, and the split is what tells you which one that is.**

## Watch out

- **You might treat $c^*$ as a physical velocity.** It is not; it is $p_0A_t/\dot m$, a figure of merit with velocity units.
- **You might expect the propellant to appear in $C_F$.** Only through $\gamma$. Temperature and molecular weight are entirely in $c^*$.
- **You might use $p_0$ as stagnation pressure at the throat.** In rocketry $p_0$ is the *chamber* pressure; the two differ by a percent or two because the chamber flow is not quite stagnant.
- **You might forget that $C_F$ depends on $p_a/p_0$, not $p_a$ alone.** Throttling an engine (lowering $p_0$) makes it *more* over-expanded at fixed altitude, which is why deep throttling risks separation.
- **You might optimize $C_F$ and stop.** Maximum $C_F$ is at $p_e = p_a$, but the vehicle needs maximum *mission* performance, which weights the whole trajectory ([1.3](01-03-nozzle-operating-regimes.md)).
- **You might compare $\eta_{c^*}$ across propellants.** It is a ratio to that propellant's own theoretical value; a 0.97 hydrolox engine and a 0.97 kerolox engine have very different $c^*$.
- **You might neglect divergence loss.** A $15°$ cone throws away 1.7% of its axial momentum; that is not nothing.

## One-liner

> Divide the thrust equation by $p_0A_t$ and rocket performance splits cleanly in two: $c^* = \sqrt{RT_0}/\Gamma$ measures the chamber and the propellant, $C_F$ measures the nozzle and the altitude, their product is $v_e = g_0I_{sp}$ — and a hot-fire test that reports both tells you which half of the engine is disappointing you.

## Problems

**P1 (🟢)** An engine has $p_0 = 7.0$ MPa, $A_t = 0.030$ m², and $\dot m = 118$ kg/s, producing $F = 340$ kN at sea level. (a) Find $c^*$. (b) Find $C_F$. (c) Find $v_e$ and $I_{sp}$ two ways and confirm they agree. (d) If the propellant's theoretical $c^*$ is 1810 m/s, find $\eta_{c^*}$.

**P2 (🟡)** A propellant has $\gamma = 1.25$, $\mathcal{M} = 20$ kg/kmol, and a chamber temperature of $T_0 = 3400$ K. (a) Find $R$ and $\Gamma$. (b) Find the theoretical $c^*$. (c) The engine runs at $p_0 = 8$ MPa with $A_t = 0.040$ m²; find $\dot m$. (d) With a nozzle giving $C_F = 1.72$ in vacuum, find the vacuum thrust and $I_{sp}$.

**P3 (🔴)** *(Boss problem 1.)* A converging–diverging nozzle with area ratio $A_e/A^* = 4$ expands gas with $\gamma = 1.4$ from a large chamber. (a) Find the supersonic exit Mach number from the area–Mach relation. (b) Find the design ratio $p_e/p_0$ of exit to chamber pressure. (c) If the nozzle exhausts to a back pressure equal to $0.10\,p_0$, is it under- or over-expanded, and what happens to the exhaust plume? (d) Write the thrust in the form $F = C_Fp_0A_t$ and identify which term you would raise to gain thrust at high altitude.

<details>
<summary>Solutions</summary>

**P1** (a) $$c^* = \frac{p_0A_t}{\dot m} = \frac{7.0\times10^6(0.030)}{118} = \frac{210{,}000}{118} = 1779.7\ \mathrm{m/s}.$$

(b) $$C_F = \frac{F}{p_0A_t} = \frac{340{,}000}{210{,}000} = 1.6190.$$

(c) *Route 1:* $$v_e = c^*C_F = 1779.7(1.6190) = 2881.4\ \mathrm{m/s}.$$

*Route 2:* $$v_e = \frac{F}{\dot m} = \frac{340{,}000}{118} = 2881.4\ \mathrm{m/s} \quad\checkmark$$

$$I_{sp} = \frac{2881.4}{9.80665} = 293.8\ \mathrm{s}.$$

(d) $$\eta_{c^*} = \frac{1779.7}{1810} = 0.983.$$

**A 98.3% combustion efficiency** — very good, and typical of a well-developed engine.

**P2** (a) $$R = \frac{R_u}{\mathcal{M}} = \frac{8314}{20} = 415.7\ \mathrm{J/(kg\cdot K)}.$$

$$\Gamma = \sqrt{1.25}\left(\frac{2}{2.25}\right)^{\frac{2.25}{0.50}} = 1.11803\left(0.88889\right)^{4.5}.$$

$$\left(0.88889\right)^{4.5} = e^{4.5\ln0.88889} = e^{4.5(-0.117783)} = e^{-0.530022} = 0.58859,$$

$$\Gamma = 1.11803(0.58859) = 0.65806.$$

(b) $$c^* = \frac{\sqrt{RT_0}}{\Gamma} = \frac{\sqrt{415.7(3400)}}{0.65807} = \frac{\sqrt{1{,}413{,}380}}{0.65807} = \frac{1188.9}{0.65806} = 1806.6\ \mathrm{m/s}.$$

(c) $$\dot m = \frac{p_0A_t}{c^*} = \frac{8.0\times10^6(0.040)}{1806.6} = \frac{320{,}000}{1806.6} = 177.1\ \mathrm{kg/s}.$$

(d) $$F = C_Fp_0A_t = 1.72(320{,}000) = 550{,}400\ \mathrm{N} = 550.4\ \mathrm{kN}.$$

$$I_{sp} = \frac{c^*C_F}{g_0} = \frac{1806.6(1.72)}{9.80665} = \frac{3107.4}{9.80665} = 316.9\ \mathrm{s}.$$

*Check:* $F/(\dot mg_0) = 550{,}400/(177.1\times9.80665) = 316.9$ s ✓

**P3** (a) Solve the area–Mach relation at $A/A^* = 4$ for the supersonic root:

$$\left(\frac{A}{A^*}\right)^2 = \frac{1}{M^2}\left[\frac{2}{2.4}\left(1+0.2M^2\right)\right]^{6} = 16.$$

$$\boxed{M_e = 2.940.}$$

*(Check: $\tfrac{1}{2.940}\left[0.8333(1+0.2\cdot8.6436)\right]^3 = \tfrac{1}{2.940}\left[0.8333(2.7290)\right]^3 = \tfrac{1}{2.940}(2.2742)^3 = \tfrac{11.763}{2.940} = 4.001$ ✓)*

(b) $$\frac{p_e}{p_0} = \left(1+0.2M_e^2\right)^{-3.5} = \left(2.7290\right)^{-3.5}.$$

$$\left(2.7290\right)^{3.5} = e^{3.5\ln2.7290} = e^{3.5(1.00392)} = e^{3.51372} = 33.573,$$

$$\boxed{\frac{p_e}{p_0} = \frac{1}{33.573} = 0.02979.}$$

(c) $$\frac{p_e}{p_a} = \frac{0.02979\,p_0}{0.10\,p_0} = 0.2979.$$

Since $p_e = 0.0298p_0 < p_a = 0.10p_0$, the nozzle is **over-expanded** — and severely so.

*What happens to the plume.* The exhaust emerges at less than a third of ambient pressure, so the surrounding gas crushes it. The compression is achieved by a pair of **oblique shocks** springing from the nozzle lip, turning the flow inward. These cross on the axis, reflect from the plume boundary as expansion fans, over-expand the flow again, and the cycle repeats — producing the familiar **shock-diamond** pattern of bright nodes down the plume.

**And there is a warning attached.** $p_e/p_a = 0.298$ is **below the Summerfield separation threshold of about 0.4** ([1.3](01-03-nozzle-operating-regimes.md)). The shock system will not stay outside the nozzle: it will move up into the divergent section, the boundary layer will separate from the wall, and the separation will not be symmetric. **This nozzle should not be operated at this back pressure** — the side loads are a structural hazard quite apart from the thrust loss.

(d) *The thrust coefficient form.*

$$F = C_F\,p_0A_t, \qquad C_F = \underbrace{\sqrt{\frac{2\gamma^2}{\gamma-1}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}\left[1-\left(\frac{p_e}{p_0}\right)^{\frac{\gamma-1}{\gamma}}\right]}}_{C_{F,\rm mom}}+\left(\frac{p_e}{p_0}-\frac{p_a}{p_0}\right)\frac{A_e}{A_t}.$$

*Evaluating the momentum term* for $\gamma = 1.4$, $p_e/p_0 = 0.02979$:

$$\frac{2\gamma^2}{\gamma-1} = \frac{2(1.96)}{0.4} = 9.80, \qquad \left(\frac{2}{2.4}\right)^{6} = 0.33490, \qquad \left(0.02979\right)^{0.28571} = 0.36644,$$

$$C_{F,\rm mom} = \sqrt{9.80(0.33490)(1-0.36644)} = \sqrt{9.80(0.33490)(0.63356)} = \sqrt{2.0793} = 1.4420.$$

*The three operating points.*

| Condition | $p_a/p_0$ | Pressure term | $C_F$ |
|---|---|---|---|
| Given back pressure | 0.10 | $(0.02979-0.10)(4) = -0.2808$ | **1.161** |
| Design ($p_a = p_e$) | 0.02979 | $0$ | **1.442** |
| Vacuum | 0 | $(0.02979)(4) = +0.1192$ | **1.561** |

**At the stated back pressure the nozzle delivers 1.161 against a vacuum capability of 1.561** — it is throwing away 26% of its own thrust coefficient to the atmosphere.

*Which term to raise at high altitude.* **The momentum term $C_{F,\rm mom}$, by increasing the area ratio $A_e/A_t$.**

The reasoning is worth stating carefully, because the pressure term is the tempting answer and it is the wrong one:

**In vacuum the pressure term is $(p_e/p_0)(A_e/A_t)$, which is positive but small** — here 0.1192 out of 1.561, under 8%. Worse, it *shrinks* as the nozzle grows, since $p_e/p_0$ falls faster than $A_e/A_t$ rises.

**The momentum term is where the growth is.** It depends on the bracket $\left[1-(p_e/p_0)^{(\gamma-1)/\gamma}\right]$, which rises toward 1 as $p_e/p_0\to0$. Its ceiling is

$$C_{F,\max} = \sqrt{\frac{2\gamma^2}{\gamma-1}\left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}} = \sqrt{9.80(0.33490)} = 1.8116 \quad(\gamma = 1.4).$$

*Quantifying the available gain in vacuum:*

| $A_e/A_t$ | $p_e/p_0$ | $C_{F,\rm vac}$ |
|---|---|---|
| 4 | 0.02979 | 1.561 |
| 6 | 0.01584 | 1.604 |
| 10 | 0.00731 | 1.647 |
| $\infty$ | 0 | 1.812 |

**Going from an area ratio of 4 to 10 buys 5.4% in vacuum thrust**, and going to infinity would buy 16% — but with an infinite nozzle mass, which is why nobody does.

*And the corresponding statement at the given back pressure is the opposite:*

| $A_e/A_t$ | $C_F$ at $p_a = 0.10p_0$ |
|---|---|
| **1.93** | **1.258 — optimum, $p_e = p_a$** |
| 2 | 1.258 |
| 3 | 1.224 |
| 4 | 1.161 |
| 6 | 1.004 |
| 10 | 0.647 |

**At this back pressure the optimum area ratio is only 1.93**, and the given nozzle at 4 is already well past it. Grow it further and $C_F$ collapses — by an area ratio of 10 the nozzle is producing less than half its vacuum thrust.

*The design conclusion, and it is the theme of Module 1.* **The area ratio is not a free parameter to be maximized; it is a bet on where the engine will spend its impulse.** A vacuum stage bets on $p_a = 0$ and uses everything it can carry; an atmospheric stage bets on a trajectory and is bounded from above by separation. The two answers here — 1.93 and $\infty$ — bracket the entire practical range, and every real nozzle sits somewhere between them for reasons of mission, mass, and structural safety rather than thermodynamics.

</details>

## Flashback

**From Lesson 1.3 (Nozzle operating regimes):** An engine with $p_0 = 8.0$ MPa has $p_e = 45$ kPa and $A_e = 1.5$ m², with $\dot m u_e = 620$ kN. (a) Find the sea-level, 10 km ($p_a = 26.5$ kPa), and vacuum thrust. (b) Find the regime at each. (c) Check the separation criterion at sea level. (d) At what ambient pressure is it perfectly expanded?

<details>
<summary>Solution</summary>

(a) $$F = 620{,}000+\left(45{,}000-p_a\right)(1.5).$$

| Condition | $p_a$ | $F$ |
|---|---|---|
| Sea level | 101,325 Pa | $620{,}000-84{,}488 = 535.5$ kN |
| 10 km | 26,500 Pa | $620{,}000+27{,}750 = 647.8$ kN |
| Vacuum | 0 | $620{,}000+67{,}500 = 687.5$ kN |

(b) **Sea level: over-expanded** ($45<101.3$ kPa). **10 km: under-expanded** ($45>26.5$ kPa). **Vacuum: strongly under-expanded.**

(c) $$\frac{p_e}{p_a} = \frac{45}{101.3} = 0.444.$$

**Just above the 0.4 threshold** — marginal. Given the scatter in the criterion, this engine would need sea-level hot-fire testing before anyone certified it for a ground start.

(d) Perfect expansion at $p_a = p_e = 45$ kPa, which in the standard atmosphere is about **6.8 km**.

*The bridge to this lesson.* Now express the same engine in $C_F$ terms. With $A_t = A_e/(A_e/A_t)$ unknown, note that the thrust coefficient is

$$C_F = \frac{F}{p_0A_t},$$

and the entire altitude dependence sits in the single term $-\left(p_a/p_0\right)\left(A_e/A_t\right)$. Between sea level and vacuum that term changes by

$$\frac{101{,}325}{8.0\times10^6}\times\frac{A_e}{A_t} = 0.012666\frac{A_e}{A_t}.$$

**The thrust swing per unit $C_F$ is proportional to the area ratio**, which is the compact statement of everything [1.3](01-03-nozzle-operating-regimes.md) demonstrated by example: a bigger bell is a bigger bet on altitude.

And the ratio of the two thrusts, $687.5/535.5 = 1.284$, is a **28% swing** — much larger than the 10% of [1.3](01-03-nozzle-operating-regimes.md)'s Example 1, precisely because this nozzle has a larger $A_e$ relative to its momentum thrust. **The $C_F$ formulation makes that visible in one term instead of requiring a recomputation.**

</details>

## Connections

- **Backward:** the thrust equation being divided is [1.1](01-01-thrust-momentum-equation.md)'s; the choked-flow relation behind $c^*$ and the exit conditions behind $C_F$ are [1.2](01-02-compressible-flow-nozzles.md)'s; the over- and under-expansion penalties $C_F$ quantifies are [1.3](01-03-nozzle-operating-regimes.md)'s.
- **Forward:** [3.2](03-02-specific-impulse-rocket-performance.md) ties $c^*$, $C_F$, and $I_{sp}$ into one performance picture and takes it to the rocket equation; [3.4](03-04-chemical-rockets-liquids-solids.md) compares liquid and solid architectures through their $c^*$; [4.1](04-01-electric-propulsion.md) shows what happens when there is no chamber and no nozzle at all.
- **Sideways:** factoring a system's performance into a "source quality" term and a "conversion efficiency" term is a general engineering move — the same structure as splitting a heat engine into its source temperature and its cycle efficiency, or an antenna into its radiated power and its directivity. **The value is always diagnostic: it localizes a shortfall to a subsystem before anyone opens anything.**
