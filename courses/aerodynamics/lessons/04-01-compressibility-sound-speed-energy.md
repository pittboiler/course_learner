# Aerodynamics · Lesson 4.1: Compressibility, sound speed, and the energy equation

> ⏱ ~15 min · Module 4: Compressible and supersonic flow · Builds on: [3.3 Separation, stall, and the drag polar](03-03-separation-stall-drag-polar.md), [`fluid-dynamics` 4.2](../../fluid-dynamics/lessons/04-02-sound-waves.md) · Unlocks: [4.2 Isentropic and stagnation relations](04-02-isentropic-stagnation-relations.md)

## Why this matters

Every result in this course so far has assumed $\rho$ is constant. That assumption is excellent at 50 m/s, tolerable at 100, and wrong at 250 — and modern aircraft cruise at 250.

**Compressibility changes the physics qualitatively, not just quantitatively.** Density becomes a variable, which means temperature becomes a variable, which means you now need an *energy* equation as well as mass and momentum. And a new speed appears — the speed of sound — against which the flow speed must be measured. The ratio of the two is the **Mach number**, and it turns out to be the single parameter that governs everything in Module 4.

This lesson establishes when compressibility matters, what sets the speed of sound, and the energy equation that replaces Bernoulli when density can no longer be pulled out of the integral.

## The idea

**Compressibility is about pressure changes relative to bulk modulus.** A flow slows down, its pressure rises by roughly $\rho V^2/2$, and the fluid compresses in proportion to that pressure change divided by its bulk modulus. For a gas, the relevant bulk modulus is $\gamma p$, so the fractional density change is of order $\rho V^2/(2\gamma p)$ — which is exactly $M^2/2$.

**Hence the rule of thumb: $\Delta\rho/\rho\approx M^2/2$.** Below $M = 0.3$ that is under 5%, and incompressible theory is fine. Above it the error grows fast.

**The speed of sound is how fast the fluid can pass the message along.** A small pressure disturbance propagates by compressing and accelerating the fluid ahead of it, and the speed at which it does so is set by how stiff the fluid is relative to how heavy it is: $a = \sqrt{\partial p/\partial\rho}$, evaluated isentropically because the compression is fast and lossless.

**For a perfect gas that gives $a = \sqrt{\gamma RT}$** — a function of *temperature alone*. Not pressure, not density, not altitude except through temperature. **A cold day has a slower speed of sound.**

**The Mach number is a ratio of the flow speed to the messenger's speed.** Below $M = 1$ the fluid ahead is warned and can begin to move aside; above $M = 1$ it cannot, and the flow must adjust discontinuously — which is a shock wave. **The whole character of the flow changes at $M = 1$**, and that is why $M$ is the governing parameter.

**Energy replaces Bernoulli.** For an incompressible flow, mechanical energy alone closed the problem. Once density varies, the fluid can store energy as heat, and the correct statement is that **stagnation enthalpy is constant along a streamline** in adiabatic flow. This is the first law, applied to a moving fluid.

**And it defines a stagnation temperature.** Bring a fast flow to rest adiabatically and all its kinetic energy becomes enthalpy — the fluid gets hot. At $M = 3$ the stagnation temperature is nearly three times ambient, which is why fast aircraft are a thermal problem before they are an aerodynamic one.

## The formal version

**Speed of sound.**

$$\boxed{\;a = \sqrt{\left(\frac{\partial p}{\partial\rho}\right)_s} = \sqrt{\gamma RT}\;}$$

for a calorically perfect gas, with $\gamma = c_p/c_v = 1.4$ and $R = 287$ J/(kg·K) for air.

**Sea-level standard ($T = 288.15$ K):** $a = \sqrt{1.4(287)(288.15)} = 340.3$ m/s.
**Tropopause ($T = 216.65$ K):** $a = 295.0$ m/s.

**Mach number.**

$$\boxed{\;M = \frac{V}{a}.\;}$$

| Regime | Range |
|---|---|
| Incompressible (in practice) | $M<0.3$ |
| Subsonic | $0.3<M<0.8$ |
| Transonic | $0.8<M<1.2$ |
| Supersonic | $1.2<M<5$ |
| Hypersonic | $M>5$ |

**Compressibility estimate.**

$$\boxed{\;\frac{\Delta\rho}{\rho}\approx\frac{M^2}{2}.\;}$$

*Exact values from the isentropic relation $\rho_0/\rho = (1+\tfrac{\gamma-1}{2}M^2)^{1/(\gamma-1)}$:*

| $M$ | $M^2/2$ | Exact $\rho_0/\rho-1$ |
|---|---|---|
| 0.1 | 0.5% | 0.50% |
| 0.2 | 2.0% | 2.01% |
| **0.3** | **4.5%** | **4.56%** |
| 0.5 | 12.5% | 12.97% |
| 0.8 | 32.0% | 35.14% |

**The estimate is excellent up to $M = 0.5$**, which is why $M = 0.3$ is the accepted boundary — it is where the error first reaches the 5% that most engineering tolerates.

**Compressible energy equation.** For adiabatic flow with no shaft work,

$$\boxed{\;h+\frac{V^2}{2} = h_0 = \text{constant along a streamline}, \qquad c_pT+\frac{V^2}{2} = c_pT_0.\;}$$

*In words: enthalpy plus kinetic energy per unit mass is conserved — a fluid that speeds up must cool down.*

**Stagnation temperature.** Dividing by $c_pT$ and using $c_p = \gamma R/(\gamma-1)$ and $a^2 = \gamma RT$:

$$\boxed{\;\frac{T_0}{T} = 1+\frac{\gamma-1}{2}M^2 = 1+0.2M^2\ \ (\gamma = 1.4).\;}$$

**This holds across shocks as well as isentropic flow** — it requires only that the flow be adiabatic, not that it be reversible. **$T_0$ is the most robust quantity in compressible aerodynamics**; $p_0$ is not, and the difference is the subject of [4.3](04-03-normal-shock-waves.md).

**Adiabatic wall temperature.** A real surface does not quite reach $T_0$, because the boundary layer conducts some of the frictional heat away. With **recovery factor** $r\approx\sqrt{Pr}\approx0.85$ (laminar) or $Pr^{1/3}\approx0.89$ (turbulent):

$$T_{aw} = T\left(1+r\frac{\gamma-1}{2}M^2\right).$$

## Picture

![A two-panel figure. Left panel: two frames showing a point disturbance emitting spherical sound waves. In the upper frame the source moves subsonically at Mach 0.6, and the circles it has emitted are bunched ahead of it but never overlap, with the annotation the flow ahead is warned and moves aside gradually. In the lower frame the source moves supersonically at Mach 2, and the circles pile up into a wedge-shaped envelope trailing behind, with the half-angle marked mu equals arcsine of one over M and the annotation the flow ahead knows nothing until the shock arrives. Right panel: the compressibility error, plotting the exact isentropic density ratio minus one against Mach number as a solid curve, together with the M squared over two estimate as a dashed line; they lie almost on top of each other up to Mach 0.5 and separate visibly above it, with a vertical shaded band at Mach 0.3 labelled the five percent line, below which incompressible theory is used. A second axis on the right shows the stagnation temperature ratio rising from one at Mach zero to 2.8 at Mach 3, with tick labels giving the actual skin temperature at eleven kilometres altitude.](assets/04-01-fig1.svg)

Left: the Mach number's real meaning. Sound is the mechanism by which fluid learns that a body is coming, and $M = 1$ is where the message stops arriving in time.

Right: where incompressible theory dies, and how hot the airframe gets once it does.

## Worked examples

**Example 1 (the same aircraft, two altitudes).** An aircraft flies at a true airspeed of $V = 250$ m/s.

*At sea level* ($T = 288.15$ K):

$$a = \sqrt{1.4(287)(288.15)} = \sqrt{115{,}778} = 340.3\ \mathrm{m/s}, \qquad M = \frac{250}{340.3} = 0.735.$$

*At the tropopause, 11 km* ($T = 216.65$ K):

$$a = \sqrt{1.4(287)(216.65)} = \sqrt{87{,}049} = 295.0\ \mathrm{m/s}, \qquad M = \frac{250}{295.0} = 0.847.$$

**The same speed is $M = 0.735$ low down and $M = 0.847$ at altitude** — a 15% increase in Mach number for no change in airspeed, entirely because the air is 71 K colder.

*Why this matters operationally.* An airliner's speed limit has two forms: a maximum indicated airspeed low down (a structural limit, set by dynamic pressure) and a maximum Mach number high up (an aerodynamic limit, set by drag divergence — [4.6](04-06-subsonic-compressibility-transonic.md)). **The crossover altitude is where the two coincide**, and above it the aircraft is Mach-limited.

At $M = 0.847$ the aircraft is well into the transonic regime and, on a modern wing, near its drag-divergence Mach number — which is exactly where airliners cruise, because that is the fastest they can go before drag rises steeply.

*Stagnation temperature.*

$$T_0 = 216.65\left(1+0.2(0.847)^2\right) = 216.65(1.1435) = 247.7\ \mathrm{K} = -25.5°\mathrm{C}.$$

**Still well below freezing** — subsonic aircraft have no kinetic heating problem, only an icing one.

**Example 2 (why supersonic aircraft are thermal designs).** Take the same tropopause conditions, $T = 216.65$ K, and increase the Mach number.

| $M$ | $T_0 = T(1+0.2M^2)$ | $T_0$ in °C | $T_{aw}$ ($r = 0.89$) |
|---|---|---|---|
| 0.85 | 248.0 K | $-25.2$ | $-28.6$°C |
| 2.0 | 390.0 K | $+116.8$ | $+97.8$°C |
| 3.0 | 606.6 K | $+333.5$ | $+290.6$°C |

*Reading it.* Three regimes, three engineering problems:

**At $M = 0.85$ the airframe is cold.** Aluminium is entirely happy; the design problems are ice and fatigue.

**At $M = 2$ the skin runs near 100 °C.** This is Concorde, and it was genuinely difficult: aluminium alloys lose strength and creep above about 130 °C, the fuselage grew 25 cm in flight from thermal expansion, and fuel was pumped between tanks partly as a heat sink. **The aircraft was at the material limit of aluminium**, and that limit, not aerodynamics, set its cruise Mach number.

**At $M = 3$ the skin runs near 300 °C.** Aluminium is out of the question. The SR-71 was built of titanium for exactly this reason, and its panels were deliberately fitted loose on the ground so they would seal only once the airframe had expanded in flight.

*The scaling that explains it.* $T_0-T = \tfrac{\gamma-1}{2}MT^2\cdot$… more usefully, $T_0-T = V^2/(2c_p)$:

$$T_0-T = \frac{V^2}{2c_p} = \frac{V^2}{2010}\ \mathrm{K}\quad(\text{air}).$$

**Kinetic heating depends on true airspeed, not Mach number** — and it goes as $V^2$, so it is negligible until it suddenly is not. At 250 m/s it is 31 K; at 600 m/s it is 179 K; at 1800 m/s (Mach 6) it is 1612 K, and the material problem becomes the entire design problem. **That is the real reason hypersonic flight is hard**, and it is why the course stops at supersonic linear theory.

*And a check on the recovery factor's role.* At $M = 3$, $T_0 = 606.6$ K but $T_{aw} = 563.7$ K — the wall is 43 K cooler than full stagnation, because the boundary layer conducts heat out toward the cooler outer flow faster than friction generates it at the very wall. **An 11% relief**, and worth having, but not a solution.

## Watch out

- **You might think the speed of sound depends on pressure or altitude directly.** It depends only on temperature. Two altitudes with the same temperature have the same $a$, whatever their pressure.
- **You might use $M<0.3$ as a hard law.** It is a 5%-error convention. For a pressure-sensitive measurement you may need $M<0.15$; for a rough force estimate $M<0.4$ may do.
- **You might apply Bernoulli's $p_0 = p+\tfrac12\rho V^2$ at high Mach number.** It underestimates the stagnation pressure rise — by 2.2% at $M = 0.3$ and 6.0% at $M = 0.5$ (P2).
- **You might assume $T_0$ changes across a shock.** It does not — the flow is adiabatic. It is $p_0$ that falls.
- **You might confuse $T_0$ with the actual skin temperature.** The recovery factor makes $T_{aw}$ a few percent lower, and radiation and conduction lower the real structure temperature further still.
- **You might forget $\gamma$ changes at high temperature.** Above about 800 K, vibrational modes activate and $\gamma$ falls below 1.4; above 2000 K, dissociation begins. The perfect-gas relations of this module are good to about $M = 5$.

## One-liner

> Density stops being constant once $\Delta\rho/\rho\approx M^2/2$ matters, the messenger speed is $a = \sqrt{\gamma RT}$ — a function of temperature alone — and the conservation law that replaces Bernoulli is $c_pT+V^2/2 = c_pT_0$, which says that stopping a fast flow heats it by $V^2/2c_p$ whether you wanted it to or not.

## Problems

**P1 (🟢)** An aircraft flies at $V = 180$ m/s at an altitude where $T = 255.7$ K. (a) Find the speed of sound and the Mach number. (b) Estimate the fractional density change and state whether incompressible theory is acceptable. (c) Find the stagnation temperature. (d) Find the same quantities at sea level ($T = 288.15$ K) at the same true airspeed.

**P2 (🟡)** A pitot-static probe measures a stagnation-to-static pressure difference. (a) Write the incompressible expression for $p_0-p$ in terms of $M$, $p$, and $\gamma$. *(Hint: $q = \tfrac12\rho V^2 = \tfrac12\gamma pM^2$.)* (b) Write the exact compressible expression $p_0/p = (1+\tfrac{\gamma-1}{2}M^2)^{\gamma/(\gamma-1)}$. (c) Compute the percentage error of the incompressible form at $M = 0.2$, $0.3$, $0.5$, and $0.7$. (d) Explain the sign of the error physically, and say at what Mach number a 1% instrument would need the compressible correction.

**P3 (🔴)** (a) Derive $a = \sqrt{(\partial p/\partial\rho)_s}$ by applying mass and momentum conservation to a control volume moving with a weak pressure wave. (b) Show that for a calorically perfect gas this gives $a = \sqrt{\gamma RT}$, and explain why the derivative must be taken at constant entropy rather than constant temperature. (c) Newton famously got the speed of sound wrong by assuming isothermal compression. Compute the value his assumption gives at 288.15 K, find the percentage error, and explain the physical reason he was wrong. (d) Explain why $T_0$ is conserved across a shock wave while $p_0$ is not, using the results of (a)–(c) as context.

<details>
<summary>Solutions</summary>

**P1** (a) $$a = \sqrt{\gamma RT} = \sqrt{1.4(287)(255.7)} = \sqrt{102{,}740} = 320.5\ \mathrm{m/s},$$

$$M = \frac{180}{320.5} = 0.5616.$$

(b) $$\frac{\Delta\rho}{\rho}\approx\frac{M^2}{2} = \frac{0.3154}{2} = 0.1577 = 15.8\%.$$

*Exact:* $(1+0.2(0.3154))^{2.5}-1 = (1.06308)^{2.5}-1 = 0.1652 = 16.5\%$.

**Incompressible theory is not acceptable.** A 16% density variation would corrupt any force or pressure calculation well beyond engineering tolerance.

(c) $$T_0 = T\left(1+0.2M^2\right) = 255.7(1+0.2(0.3154)) = 255.7(1.06308) = 271.8\ \mathrm{K} = -1.3°\mathrm{C}.$$

(d) *At sea level, same $V = 180$ m/s:*

$$a = 340.3\ \mathrm{m/s}, \qquad M = \frac{180}{340.3} = 0.5290,$$

$$\frac{\Delta\rho}{\rho}\approx\frac{0.2798}{2} = 14.0\%, \qquad T_0 = 288.15\left(1+0.2(0.2798)\right) = 288.15(1.05596) = 304.3\ \mathrm{K} = 31.1°\mathrm{C}.$$

*Comparison.* Same airspeed, but $M$ falls from 0.562 to 0.529 (6% lower) because the sea-level air is 32 K warmer. **The compressibility effects are slightly milder low down, while the stagnation temperature is 32 K higher** — the temperature *rise* $T_0-T = V^2/2c_p = 32400/2010 = 16.1$ K is identical at both altitudes, since it depends only on airspeed.

**P2** (a) $$q = \tfrac12\rho V^2 = \tfrac12\rho a^2M^2 = \tfrac12\rho\frac{\gamma p}{\rho}M^2 = \frac{\gamma pM^2}{2},$$

so the incompressible prediction is

$$\left(p_0-p\right)_{\rm incomp} = \frac{\gamma}{2}pM^2 = 0.7pM^2 \quad(\gamma = 1.4).$$

(b) $$\left(p_0-p\right)_{\rm comp} = p\left[\left(1+0.2M^2\right)^{3.5}-1\right].$$

(c) $$\text{error} = \frac{0.7M^2-\left[(1+0.2M^2)^{3.5}-1\right]}{(1+0.2M^2)^{3.5}-1}.$$

| $M$ | $0.7M^2$ | $(1+0.2M^2)^{3.5}-1$ | Error |
|---|---|---|---|
| 0.2 | 0.02800 | 0.028281 | $-0.99\%$ |
| 0.3 | 0.06300 | 0.064430 | $-2.22\%$ |
| 0.5 | 0.17500 | 0.186213 | $-6.02\%$ |
| 0.7 | 0.34300 | 0.387101 | $-11.39\%$ |

(d) *Sign.* The error is always **negative** — the incompressible formula **underestimates** the pressure rise.

*Why.* Bringing the flow to rest compresses it. In the incompressible model, the fluid arriving at the stagnation point has the same density it started with; in reality it has been squeezed to a higher density, so more work has been done on it and the pressure rises further. **The compression is real work that the incompressible model does not account for.**

*Where the correction becomes necessary.* Setting the error to 1%:

$$M\approx0.20.$$

**A 1%-accurate airspeed measurement needs the compressible correction above about $M = 0.2$** — that is 68 m/s at sea level, or 246 km/h.

*The practical consequence.* Every aircraft airspeed indicator above light-aircraft speeds applies this correction, and it is why an air-data computer needs a static-pressure input as well as a differential one: the correction depends on $M$, which requires knowing $p$ and $p_0$ separately, not just their difference. **Wind tunnels above $M = 0.2$ face the same requirement**, which is why a tunnel's Mach number rather than its dynamic pressure is the quoted operating condition.

**P3** (a) *Derivation.* Consider a weak pressure wave propagating into still gas at $(p,\rho)$ and leaving it at $(p+dp,\ \rho+d\rho)$ with a small induced velocity $du$. Ride with the wave: in that frame, gas enters at speed $a$ and leaves at $a-du$.

*Mass:*

$$\rho a = \left(\rho+d\rho\right)\left(a-du\right) = \rho a-\rho\,du+a\,d\rho \quad\Longrightarrow\quad \rho\,du = a\,d\rho.$$

*Momentum* (per unit area, steady, no friction across a thin wave):

$$p-\left(p+dp\right) = \rho a\left[\left(a-du\right)-a\right] = -\rho a\,du \quad\Longrightarrow\quad dp = \rho a\,du.$$

*Combine*, eliminating $du$:

$$dp = \rho a\left(\frac{a\,d\rho}{\rho}\right) = a^2d\rho \quad\Longrightarrow\quad \boxed{a^2 = \frac{dp}{d\rho}.}$$

(b) *For a perfect gas.* The process is isentropic (justified in the next paragraph), so $p/\rho^\gamma = $ const, giving

$$\frac{dp}{d\rho} = \gamma\frac{p}{\rho} \quad\Longrightarrow\quad a = \sqrt{\frac{\gamma p}{\rho}} = \sqrt{\gamma RT},$$

using $p = \rho RT$.

*Why constant entropy.* Two conditions must both hold, and for a sound wave both do:

**Reversibility.** The wave is *weak* — the pressure and velocity changes are infinitesimal — so there are no shock losses and viscous dissipation is second order in the disturbance amplitude.

**Adiabaticity.** The compression is *fast* compared with heat conduction. A sound wave's period is $\sim10^{-3}$ s and its wavelength $\sim0.3$ m; the time for heat to diffuse across that wavelength is $\lambda^2/\alpha\approx0.09/2\times10^{-5}\approx4500$ s — **six orders of magnitude slower**. Each compression is over long before any heat can leave it.

**Reversible plus adiabatic is isentropic**, so $(\partial p/\partial\rho)_s$ is the correct derivative.

(c) *Newton's isothermal assumption.* If the compression were isothermal, $p/\rho = RT = $ const and

$$\left(\frac{\partial p}{\partial\rho}\right)_T = RT \quad\Longrightarrow\quad a_{\rm Newton} = \sqrt{RT} = \sqrt{287(288.15)} = \sqrt{82{,}699} = 287.6\ \mathrm{m/s}.$$

$$\text{error} = \frac{287.6-340.3}{340.3} = -15.5\%.$$

**Newton's value is 15.5% low**, and it is low by exactly the factor $1/\sqrt\gamma = 1/\sqrt{1.4} = 0.845$ — a discrepancy he knew about and attempted to explain away with corrections for water vapour and dust. It stood unresolved for over a century until **Laplace** identified the assumption as the error in 1816.

*The physical reason he was wrong.* Newton assumed the gas in a compression stays at ambient temperature, i.e. that heat flows out as fast as it is generated. It does not — as the diffusion estimate in (b) shows, conduction is roughly a million times too slow. **The compressed gas heats up and stays hot for the duration of the wave**, which makes it *stiffer* than an isothermal gas: for the same density increase, the pressure rises by an extra factor $\gamma$ because temperature is rising too.

**A stiffer medium carries waves faster**, and $\sqrt\gamma = 1.18$ is precisely the shortfall.

*A satisfying corollary.* The measurement of $a$ was historically one of the ways $\gamma$ was determined for gases — and since $\gamma$ counts a molecule's active degrees of freedom, **the speed of sound is a macroscopic measurement that reveals molecular structure.** Sound in argon (monatomic, $\gamma = 5/3$) travels faster relative to $\sqrt{RT}$ than sound in air.

(d) *Why $T_0$ survives a shock and $p_0$ does not.*

**$T_0$ is a statement of the first law.** From (b)'s energy equation, $h+V^2/2 = h_0$ holds for any **adiabatic** flow with no shaft work — and a shock is certainly adiabatic, since it is a thin region with no heat added from outside. Whether the process inside is reversible is irrelevant to an energy accounting: the total energy going in must come out. Hence

$$T_{0,1} = T_{0,2}\quad\text{across any shock.}$$

**$p_0$ is a statement of the second law.** Stagnation pressure is defined by an *isentropic* bringing-to-rest, so $p_0$ is a measure of the flow's available energy, not its total energy. A shock is **irreversible** — steep gradients inside it dissipate energy through viscosity and conduction, and entropy rises. From the thermodynamic relation for a perfect gas at constant $T_0$,

$$\frac{p_{0,2}}{p_{0,1}} = e^{-\Delta s/R}<1.$$

**The energy is all still there; some of it has just become unavailable.**

*The connection back to (a).* The derivation in (a) assumed a *weak* wave, which is what made it isentropic and what let a single wave speed $a$ exist at all. A shock is the same physics pushed to finite amplitude, where the assumption fails: the wave is now strong enough that its internal gradients dissipate real energy. **A shock is a sound wave that got too loud to be reversible** — and every quantity that survives is one that the first law protects, while every quantity that is lost is one the second law taxes. That distinction organizes the whole of [4.3](04-03-normal-shock-waves.md).

</details>

## Flashback

**From Lesson 3.3 (Adverse gradients, separation, stall, and the drag polar):** An aircraft has $C_{D,0} = 0.018$, $AR = 9$, $e_0 = 0.82$, $S = 30$ m², and $W = 40{,}000$ N. (a) Find $(L/D)_{\max}$ and the lift coefficient at which it occurs. (b) Find the best-glide speed at sea level. (c) Find the minimum drag. (d) What does the polar say about whether the boundary layer is attached?

<details>
<summary>Solution</summary>

(a) $$\pi e_0AR = \pi(0.82)(9) = 23.185.$$

$$C_L^* = \sqrt{23.185(0.018)} = \sqrt{0.417337} = 0.64601,$$

$$\left(\frac{L}{D}\right)_{\max} = \frac12\sqrt{\frac{23.185}{0.018}} = \frac12\sqrt{1288.1} = \frac12(35.890) = 17.945.$$

*Check:* $C_L^*/(2C_{D,0}) = 0.64601/0.036 = 17.945$ ✓

(b) $$V^* = \sqrt{\frac{2W}{\rho SC_L^*}} = \sqrt{\frac{2(40{,}000)}{1.225(30)(0.64601)}} = \sqrt{\frac{80{,}000}{23.741}} = \sqrt{3369.8} = 58.05\ \mathrm{m/s}.$$

(c) $$D_{\min} = \frac{W}{(L/D)_{\max}} = \frac{40{,}000}{17.945} = 2229\ \mathrm{N}.$$

(d) *What the polar assumes.* The form $C_D = C_{D,0}+C_L^2/(\pi e_0AR)$ with **constant** $C_{D,0}$ is a fit to *attached* flow. It presupposes that the profile drag does not change with lift, which is true only while the boundary layer stays attached over essentially the whole surface.

**So the polar cannot tell you whether the flow is attached — it assumes it.** Its validity ends at $C_{L,\max}$, and any use of it beyond that point is meaningless.

*What a $C_{D,0}$ of 0.018 does suggest.* It is a typical clean light-aircraft value, consistent with attached flow plus the usual excrescences. A value of 0.05 or more would signal a separated or very dirty airframe.

*The bridge to Module 4.* Notice one more assumption hiding in the polar: **it says nothing about speed.** $C_{D,0}$ and $e_0$ are treated as constants, so the polar predicts the same drag coefficient at 58 m/s and at 300 m/s.

That is fine here, because $M = 58/340 = 0.17$ — deeply incompressible. **It is completely false at $M = 0.85$**, where a wholly new drag mechanism appears: wave drag from shock waves on the wing, which can double $C_{D,0}$ over a Mach-number range of 0.05. The two-term polar becomes a three-term one, and the third term is Module 4's business ([4.6](04-06-subsonic-compressibility-transonic.md), [4.7](04-07-supersonic-airfoils-wave-drag-sweep.md)).

</details>

## Connections

- **Backward:** the sound-wave derivation and the isentropic-versus-isothermal distinction are [`fluid-dynamics` 4.2](../../fluid-dynamics/lessons/04-02-sound-waves.md)'s; the enthalpy, entropy, and $\gamma$ relations are [`engineering-thermodynamics`](../../engineering-thermodynamics/syllabus.md)'s; the incompressible Bernoulli being replaced is [`fluid-dynamics` 2.1](../../fluid-dynamics/lessons/02-01-bernoulli.md)'s.
- **Forward:** [4.2](04-02-isentropic-stagnation-relations.md) completes the stagnation set with $p_0$ and $\rho_0$; [4.3](04-03-normal-shock-waves.md) breaks $p_0$ while preserving $T_0$; [4.5](04-05-quasi-1d-nozzle-flow.md) uses all of it to size a nozzle.
- **Sideways:** $M = V/a$ is a ratio of a transport speed to a signal speed, and that structure recurs everywhere — the Froude number in ship hydrodynamics compares speed to surface-wave speed and produces an identical subcritical/supercritical distinction with a **hydraulic jump** playing the role of a shock; and $M>1$'s "the fluid ahead cannot be warned" is the fluid-dynamical version of the light cone in [`relativity`](../../relativity/syllabus.md), with the Mach cone $\mu = \arcsin(1/M)$ as its exact analogue.
