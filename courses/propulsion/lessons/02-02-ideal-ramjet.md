# Propulsion · Lesson 2.2: The ideal ramjet

> ⏱ ~15 min · Module 2: Air-breathing engines · Builds on: [2.1 Propulsion efficiencies and the Brayton foundation](02-01-propulsion-efficiencies-brayton.md) · Unlocks: [2.4 The turbojet cycle](02-04-turbojet-cycle.md), [4.3 Hypersonic air-breathing and the scramjet](04-03-hypersonic-airbreathing-scramjet.md)

## Why this matters

The ramjet is the simplest air-breathing engine that works: an inlet, a flame holder, and a nozzle. **No compressor, no turbine, no moving parts at all.** It is worth studying not because many are built, but because it is the cleanest possible demonstration of what a Brayton cycle needs and where the energy comes from.

It also has a peculiar and instructive performance curve. **It produces no thrust at zero speed** — with no compressor, a stationary ramjet has no pressure ratio and cannot run at all. Its specific thrust rises with Mach number to a peak near $M = 2.5$, then **falls back to zero around $M = 7$**, because the air arrives so hot from ram compression that there is no temperature headroom left to add fuel.

**Between those two zeros is the entire operating envelope of ram propulsion**, and understanding why they exist is what makes the scramjet's design ([4.3](04-03-hypersonic-airbreathing-scramjet.md)) inevitable rather than exotic.

## The idea

**Ram compression is free compression.** Decelerating a supersonic stream to low subsonic speed raises its stagnation pressure ratio to $p_{0\infty}/p_\infty = (1+\tfrac{\gamma-1}{2}M_\infty^2)^{\gamma/(\gamma-1)}$ — a factor of 7.8 at $M = 2$ and 36.7 at $M = 3$. **A compressor that would need dozens of stages is replaced by a shaped duct.**

**And it costs nothing in turbine work.** A turbojet's turbine exists solely to drive its compressor, and it extracts a large fraction of the available energy to do so. A ramjet has neither, so **every joule released in the burner is available to accelerate the exhaust.**

**Which also means it can run much hotter.** A turbojet's burner-exit temperature is capped near 1900 K by what the turbine blades can survive. **A ramjet has no turbine**, so it is limited only by the combustor liner and by dissociation — 2400 K and above is routine.

**The cycle closes because the nozzle expands back to ambient.** In the ideal case (isentropic inlet and nozzle, constant-pressure burner, $p_e = p_\infty$), the whole engine reduces to a single statement: **the exhaust is faster than the intake by the square root of the temperature ratio across the burner.**

**Now the two zeros.** At $M = 0$ there is no ram compression, so $T_{0\infty} = T_\infty$ and $u_e/V_\infty$ is large — but $V_\infty$ itself is zero, so the *specific thrust* $V_\infty(u_e/V_\infty-1)$ vanishes. **A ramjet cannot start itself.**

**At high $M$ the ram compression heats the air so much that $T_{0\infty}$ approaches $T_{04}$.** There is nothing left to add. When $T_{0\infty} = T_{04}$ the burner can add no heat, $u_e = V_\infty$, and the thrust is again zero.

**Between them, a broad maximum.** And notice what happens to the *efficiencies* along the way: thermal efficiency rises monotonically with Mach number (more compression), and so does propulsive efficiency (the jet gets relatively slower). **The ramjet gets more efficient right up to the point where it stops producing thrust** — which is exactly the tension that produces the scramjet.

## The formal version

**Station numbering.**

| Station | Location |
|---|---|
| $\infty$ | free stream |
| 2 | diffuser (inlet) exit, burner entry |
| 4 | burner exit |
| $e$ | nozzle exit |

**Ideal-ramjet assumptions.** Isentropic inlet and nozzle ($p_{0\infty} = p_{02} = p_{04} = p_{0e}$, no shock or friction losses), constant-pressure combustion, perfectly expanded nozzle ($p_e = p_\infty$), and calorically perfect gas.

**The central result.** Since $p_{0e} = p_{0\infty}$ and $p_e = p_\infty$, the exit Mach number equals the flight Mach number:

$$\boxed{\;M_e = M_\infty.\;}$$

Then $u_e = M_e\sqrt{\gamma RT_e}$ and $V_\infty = M_\infty\sqrt{\gamma RT_\infty}$ give

$$\boxed{\;\frac{u_e}{V_\infty} = \sqrt{\frac{T_e}{T_\infty}} = \sqrt{\frac{T_{04}}{T_{0\infty}}}.\;}$$

*In words: the nozzle gives back exactly the Mach number the inlet took away, so all the gain is the temperature the burner added.*

**Specific thrust.**

$$\boxed{\;\frac{F}{\dot m_a} = u_e-V_\infty = V_\infty\left(\sqrt{\frac{T_{04}}{T_{0\infty}}}-1\right), \qquad T_{0\infty} = T_\infty\left(1+\frac{\gamma-1}{2}M_\infty^2\right).\;}$$

**Fuel/air ratio and TSFC.**

$$\boxed{\;f = \frac{c_p\left(T_{04}-T_{0\infty}\right)}{Q_R}, \qquad \mathrm{TSFC} = \frac{f}{F/\dot m_a}, \qquad I_{sp} = \frac{F/\dot m_a}{fg_0}.\;}$$

*(For an air-breather $I_{sp}$ is per unit **fuel** mass, so the numbers are thousands of seconds — an air-breather carries no oxidizer, which is exactly why.)*

**Ideal thermal efficiency.** The cycle's pressure ratio is the ram ratio alone, so

$$\boxed{\;\eta_{\rm th} = 1-\frac{1}{r_p^{(\gamma-1)/\gamma}} = 1-\frac{T_\infty}{T_{0\infty}} = 1-\frac{1}{1+\frac{\gamma-1}{2}M_\infty^2}.\;}$$

**Rising monotonically with Mach number**, from 0 at $M = 0$ to 0.44 at $M = 2$ and 0.83 at $M = 5$.

**The two zeros.**

$$\frac{F}{\dot m_a} = 0 \quad\text{at}\quad M_\infty = 0 \quad\text{and at}\quad T_{0\infty} = T_{04},\ \text{i.e.}\ M_\infty = \sqrt{\frac{2}{\gamma-1}\left(\frac{T_{04}}{T_\infty}-1\right)}.$$

For $T_{04} = 2400$ K and $T_\infty = 220$ K, that upper zero is $M_\infty = 7.04$.

**And the performance table** ($T_\infty = 220$ K, $T_{04} = 2400$ K, $Q_R = 43$ MJ/kg, $c_p = 1005$ J/kg·K):

| $M_\infty$ | $V_\infty$ (m/s) | $T_{0\infty}$ (K) | $u_e/V_\infty$ | $F/\dot m_a$ (m/s) | $f$ | $I_{sp}$ (s) | $\eta_{\rm th}$ | $\eta_o$ |
|---|---|---|---|---|---|---|---|---|
| 0.5 | 148.7 | 231 | 3.223 | 330.5 | 0.0507 | 665 | 0.048 | 0.023 |
| 1.0 | 297.3 | 264 | 3.015 | 599.1 | 0.0499 | 1224 | 0.167 | 0.083 |
| 2.0 | 594.6 | 396 | 2.462 | 869.2 | 0.0468 | 1893 | 0.444 | 0.257 |
| **2.5** | 743.3 | 495 | 2.202 | **893.4** | 0.0445 | 2046 | 0.556 | 0.347 |
| 3.0 | 891.9 | 616 | 1.974 | 868.6 | 0.0417 | 2124 | 0.643 | 0.432 |
| **3.5** | 1040.6 | 759 | 1.778 | 809.8 | 0.0384 | **2153** | 0.710 | 0.511 |
| 5.0 | 1486.6 | 1320 | 1.348 | 517.9 | 0.0252 | 2092 | 0.833 | 0.710 |
| 6.0 | 1783.9 | 1804 | 1.153 | 273.7 | 0.0139 | 2004 | 0.878 | 0.816 |
| 7.04 | 2093 | 2400 | 1.000 | **0** | 0 | — | 0.908 | — |

## Picture

![A two-panel figure. Left: a ramjet in cross-section — a converging-diverging supersonic inlet, a constant-area burner section with a flame holder drawn as a small bluff ring and fuel injectors, and a converging-diverging nozzle — with station numbers marked at free stream, diffuser exit, burner exit and nozzle exit. Below it a temperature-versus-station plot rises through the inlet by ram compression, jumps sharply across the burner to the burner-exit temperature, and falls through the nozzle, with the ram rise shaded and labelled free compression, no compressor, and the burner rise shaded and labelled the heat you can still add. Right: specific thrust and specific impulse plotted against flight Mach number for the ideal ramjet, the specific-thrust curve rising from zero at Mach zero to a broad maximum near Mach 2.5 and falling back to zero near Mach 7, and the specific-impulse curve peaking later and more flatly near Mach 3.5; the two zeros are annotated — the left one no ram compression, cannot self-start, and the right one the air already arrives at the burner temperature — and a third rising curve shows thermal efficiency climbing monotonically past 0.8, labelled the cycle keeps improving right up to where the thrust vanishes.](assets/02-02-fig1.svg)

Left: the entire engine. Two shaded areas: what the flight speed gave you for free, and what is left for the fuel to add.

Right: the performance envelope, with its two zeros and the awkward fact that efficiency and thrust peak in different places.

## Worked examples

**Example 1 (a ramjet at $M = 3$).** A ramjet flies at $M_\infty = 3.0$ where $T_\infty = 220$ K and $p_\infty = 22.6$ kPa. Its burner-exit temperature is $T_{04} = 2400$ K. Take $\gamma = 1.4$, $c_p = 1005$ J/(kg·K), $Q_R = 43$ MJ/kg, and ingest $\dot m_a = 40$ kg/s.

*Flight speed and ram compression.*

$$a_\infty = \sqrt{1.4(287)(220)} = 297.3\ \mathrm{m/s}, \qquad V_\infty = 3.0(297.3) = 891.9\ \mathrm{m/s},$$

$$T_{0\infty} = 220\left(1+0.2(9)\right) = 220(2.8) = 616\ \mathrm{K}, \qquad \frac{p_{0\infty}}{p_\infty} = (2.8)^{3.5} = 36.73.$$

**The inlet has done the work of a 37:1 compressor, for free.**

*Exhaust.*

$$\frac{u_e}{V_\infty} = \sqrt{\frac{2400}{616}} = \sqrt{3.896} = 1.974, \qquad u_e = 1.974(891.9) = 1761\ \mathrm{m/s}.$$

*Specific thrust and thrust.*

$$\frac{F}{\dot m_a} = 1761-891.9 = 868.6\ \mathrm{m/s}, \qquad F = 40(868.6) = 34.7\ \mathrm{kN}.$$

*Fuel.*

$$f = \frac{1005(2400-616)}{43\times10^6} = \frac{1005(1784)}{43\times10^6} = \frac{1{,}792{,}920}{43\times10^6} = 0.04170,$$

$$\dot m_f = 0.04170(40) = 1.668\ \mathrm{kg/s}, \qquad I_{sp} = \frac{868.6}{0.04170(9.80665)} = 2124\ \mathrm{s}.$$

$$\mathrm{TSFC} = \frac{f}{F/\dot m_a} = \frac{0.04170}{868.6} = 4.800\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.1728\ \mathrm{kg/(N\cdot h)}.$$

*Efficiencies.*

$$\eta_{\rm th} = 1-\frac{220}{616} = 0.643, \qquad \eta_p = \frac{2}{1+1.974} = 0.673, \qquad \eta_o = 0.643(0.673) = 0.432.$$

*Reading it.* Several things worth noticing:

**A 43% overall efficiency** — better than the turbojet of [2.1](02-01-propulsion-efficiencies-brayton.md), which managed 20%. **The ramjet is not an inefficient engine; it is a narrow-envelope one.**

**The fuel/air ratio of 0.0417 is close to stoichiometric** (0.068 for kerosene), which a turbojet could never approach — a turbojet must run at $f\approx0.018$ to keep its turbine alive. **The absence of a turbine is worth a factor of more than two in heat addition.**

**And $I_{sp} = 2124$ s dwarfs any rocket.** That is not a fair comparison: the air-breather's $I_{sp}$ counts only fuel, while a rocket must carry oxidizer at roughly three times the fuel mass. **Counting the ingested air, the ramjet's "propellant" $I_{sp}$ would be about $2124\times0.0417 = 89$ s** — which is the honest statement of how much momentum it extracts per kilogram of total working fluid, and why rockets are used where there is no air to ingest.

**Example 2 (the envelope, and why it closes).** Track the same engine across Mach number.

*The low-speed end.* At $M = 0.5$ the specific thrust is 330 m/s and $\eta_o$ is 2.3%. At $M = 0$ it is exactly zero: with $T_{0\infty} = T_\infty$, the pressure ratio is 1, and

$$\frac{F}{\dot m_a} = V_\infty\left(\sqrt{T_{04}/T_{0\infty}}-1\right)\to0\times(\text{finite}) = 0.$$

**A ramjet on a test stand does nothing.** It must be accelerated to roughly $M = 0.5$ before it produces useful thrust and to $M = 2$ before it is efficient — which is why every ramjet vehicle has a booster: a solid rocket, a drop tank, or a carrier aircraft.

*The high-speed end.* The specific thrust peaks at $M\approx2.5$ (893 m/s) and then falls, reaching zero when

$$T_{0\infty} = T_{04}: \qquad 220\left(1+0.2M_\infty^2\right) = 2400 \quad\Longrightarrow\quad M_\infty = \sqrt{\frac{2400/220-1}{0.2}} = \sqrt{49.55} = 7.04.$$

**At $M = 7$ the air arrives at the burner already at 2400 K.** There is no headroom: adding fuel would exceed the design temperature, so no fuel can be added, and with no heat added there is no acceleration.

*Reading the collapse.* Three symptoms, all visible in the table:

**The fuel/air ratio falls to zero.** At $M = 6$ it is 0.0139, a fifth of its $M = 1$ value. The engine is being **starved by its own inlet**.

**The velocity ratio approaches 1.** $u_e/V_\infty = 1.153$ at $M = 6$ — the exhaust barely outruns the intake.

**But the efficiencies keep improving.** $\eta_{\rm th} = 0.878$ and $\eta_p = 0.929$ at $M = 6$, for $\eta_o = 0.816$. **The ramjet is at its thermodynamic best exactly where it is useless**, because efficiency measures the fraction of a shrinking quantity.

*Why the ceiling is really about the inlet, not the burner.* The proximate cause is $T_{0\infty}\to T_{04}$, but the deeper cause is that the inlet insists on **decelerating the flow to subsonic** before the burner. All of the free-stream kinetic energy is turned into heat, and at high Mach number there is a great deal of it: at $M = 6$, $V_\infty^2/2c_p = 1580$ K of stagnation temperature rise.

**Two further penalties compound it.** Decelerating a $M = 6$ stream to subsonic requires a shock system that destroys most of the stagnation pressure ([`aerodynamics` 4.3](../../aerodynamics/lessons/04-03-normal-shock-waves.md)) — the ideal-ramjet assumption of an isentropic inlet becomes badly wrong. And at 2400 K and above, **dissociation** absorbs the energy the burner is trying to add, so the effective $T_{04}$ ceiling falls just as the demand on it rises.

*The resolution, and it is [4.3](04-03-hypersonic-airbreathing-scramjet.md)'s subject.* **Do not decelerate the flow to subsonic.** Slow it only to $M\approx2$–$3$, burn in a supersonic stream, and the stagnation-temperature rise the inlet imposes is a fraction of what a ramjet's would be. That is a **scramjet**, and everything difficult about it — mixing and burning in a flow that crosses the combustor in a millisecond — follows from that one decision.

## Watch out

- **You might think a ramjet can start from rest.** It cannot. Its specific thrust is exactly zero at $M = 0$, and it needs a booster to about $M = 0.5$ before it does anything useful.
- **You might expect the ideal-inlet assumption to hold at high Mach.** It does not — above about $M = 3$ the shock losses are large, and the real performance falls well below the ideal curve.
- **You might compare an air-breather's $I_{sp}$ with a rocket's directly.** The air-breather counts only fuel; the rocket counts fuel plus oxidizer. The comparison is meaningful only where both could fly.
- **You might think the high-Mach cutoff is a combustor limitation.** It is an inlet consequence: the ram compression uses up the temperature budget before the fuel gets a chance.
- **You might expect maximum thrust and maximum efficiency at the same Mach number.** Specific thrust peaks near $M = 2.5$, $I_{sp}$ near $M = 3.5$, and $\eta_o$ keeps rising past $M = 6$.
- **You might use $M_e = M_\infty$ for a real ramjet.** It follows from $p_{0e} = p_{0\infty}$, which holds only if inlet and nozzle are loss-free.
- **You might use turbojet fuel/air ratios.** A ramjet has no turbine to protect and can run near stoichiometric.

## One-liner

> Strip a jet engine down to an inlet, a flame, and a nozzle and the flight speed does all the compressing: $u_e/V_\infty = \sqrt{T_{04}/T_{0\infty}}$, so specific thrust vanishes at $M = 0$ (no compression) and again near $M = 7$ (the ram heating has already consumed the temperature budget), with a broad useful maximum between — and everything difficult about the scramjet follows from refusing that second zero.

## Problems

**P1 (🟢)** A ramjet flies at $M_\infty = 2.0$ where $T_\infty = 220$ K, with $T_{04} = 2200$ K. Take $\gamma = 1.4$, $c_p = 1005$ J/(kg·K), $Q_R = 43$ MJ/kg. (a) Find $V_\infty$ and $T_{0\infty}$. (b) Find $u_e/V_\infty$ and $u_e$. (c) Find the specific thrust. (d) Find $f$ and $I_{sp}$.

**P2 (🟡)** For the engine of P1, ingesting $\dot m_a = 30$ kg/s: (a) find the thrust, the fuel flow, and the TSFC in kg/(N·h). (b) Find $\eta_{\rm th}$, $\eta_p$, and $\eta_o$. (c) Find the ram pressure ratio and compare it with a turbojet compressor of ratio 25. (d) Explain why the ramjet can run at $f = 0.045$ while a turbojet is limited to about 0.020.

**P3 (🔴)** A ramjet is designed for $T_{04} = 2400$ K in air at $T_\infty = 220$ K. (a) Derive the Mach number at which the specific thrust is maximized, in terms of $T_{04}/T_\infty$, and evaluate it. *(Hint: maximize $M\left(\sqrt{\tau_\lambda/\tau_r}-1\right)$ with $\tau_r = 1+0.2M^2$ and $\tau_\lambda = T_{04}/T_\infty$.)* (b) Find the Mach number at which the thrust falls to zero. (c) A real inlet at $M_\infty = 5$ recovers only $\pi_d = 0.30$ of the free-stream stagnation pressure. Show that the nozzle can then no longer expand to $M_e = M_\infty$, find the actual $M_e$ and $u_e$, and compute the specific thrust. (d) Compare with the ideal value and comment on what this implies for the ramjet's practical ceiling.

<details>
<summary>Solutions</summary>

**P1** (a) $$a_\infty = \sqrt{1.4(287)(220)} = 297.3\ \mathrm{m/s}, \qquad V_\infty = 2.0(297.3) = 594.6\ \mathrm{m/s}.$$

$$T_{0\infty} = 220\left(1+0.2(4)\right) = 220(1.8) = 396\ \mathrm{K}.$$

(b) $$\frac{u_e}{V_\infty} = \sqrt{\frac{2200}{396}} = \sqrt{5.5556} = 2.3570, \qquad u_e = 2.3570(594.6) = 1401.6\ \mathrm{m/s}.$$

(c) $$\frac{F}{\dot m_a} = u_e-V_\infty = 1401.6-594.6 = 806.9\ \mathrm{m/s}.$$

(d) $$f = \frac{c_p\left(T_{04}-T_{0\infty}\right)}{Q_R} = \frac{1005(2200-396)}{43\times10^6} = \frac{1{,}813{,}020}{43\times10^6} = 0.04216.$$

$$I_{sp} = \frac{F/\dot m_a}{fg_0} = \frac{806.9}{0.04216(9.80665)} = \frac{806.9}{0.41346} = 1952\ \mathrm{s}.$$

**P2** (a) $$F = 30(806.9) = 24.21\ \mathrm{kN}, \qquad \dot m_f = 0.04216(30) = 1.265\ \mathrm{kg/s}.$$

$$\mathrm{TSFC} = \frac{1.265}{24{,}207} = 5.226\times10^{-5}\ \mathrm{kg/(N\cdot s)} = 0.1881\ \mathrm{kg/(N\cdot h)}.$$

(b) $$\eta_{\rm th} = 1-\frac{T_\infty}{T_{0\infty}} = 1-\frac{220}{396} = 0.4444,$$

$$\eta_p = \frac{2}{1+u_e/V_\infty} = \frac{2}{1+2.3570} = \frac{2}{3.3570} = 0.5957,$$

$$\eta_o = 0.4444(0.5957) = 0.2648.$$

*Check:* $\eta_o = FV_\infty/(\dot m_fQ_R) = 24{,}207(594.6)/(1.265\times43\times10^6) = 14.39/54.40 = 0.2647$ ✓

(c) $$\frac{p_{0\infty}}{p_\infty} = (1.8)^{3.5} = 7.824.$$

**The ram compression at $M = 2$ is worth a pressure ratio of 7.8**, against a turbojet compressor's 25 — so the turbojet still has a substantially better cycle at this speed. **The crossover is near $M = 3$**, where the ram ratio reaches 36.7 and exceeds any practical compressor. That is the fundamental reason ramjets belong above $M\approx3$ and turbojets below it.

(d) *Why the ramjet can burn twice as rich.*

**A turbojet's burner exit temperature is limited by the turbine.** The gas leaving the combustor passes immediately through the first-stage turbine nozzle guide vanes and rotor blades, which are rotating at high stress and must survive thousands of hours. Even with film cooling and thermal-barrier coatings, the limit is about 1700–1900 K. Since $f = c_p(T_{04}-T_{03})/Q_R$ and $T_{03}$ (compressor exit) is already 700–900 K, that leaves roughly 800–1000 K of rise, giving $f\approx0.018$–$0.025$.

**A ramjet has no turbine.** The hot gas goes straight into the nozzle, and a nozzle is a stationary, film-coolable, low-stress component. The limit becomes the combustor liner (roughly 2400–2600 K with modern materials) and, above that, **dissociation** — at which point adding more fuel produces free radicals rather than temperature.

$$f_{\rm ramjet}\approx\frac{1005(2200-396)}{43\times10^6} = 0.042 \qquad\text{versus}\qquad f_{\rm turbojet}\approx\frac{1005(1700-850)}{43\times10^6} = 0.020.$$

**A factor of 2.1, and it is entirely the turbine's fault** — which is a good way to remember what a turbine costs a cycle, quite apart from the work it extracts.

*(Stoichiometric kerosene/air is $f = 0.068$, so even the ramjet runs lean — but at 62% of stoichiometric rather than 29%.)*

**P3** (a) *Setting up.* With $\tau_r = 1+\tfrac{\gamma-1}{2}M^2$ and $\tau_\lambda = T_{04}/T_\infty$,

$$\frac{F}{\dot m_a} = a_\infty M\left(\sqrt{\frac{\tau_\lambda}{\tau_r}}-1\right).$$

Maximize $g(M) = M\left(\sqrt{\tau_\lambda}\,\tau_r^{-1/2}-1\right)$. Writing $b = (\gamma-1)/2 = 0.2$ so $\tau_r = 1+bM^2$:

$$g(M) = \sqrt{\tau_\lambda}\,\frac{M}{\left(1+bM^2\right)^{1/2}}-M.$$

$$g'(M) = \sqrt{\tau_\lambda}\,\frac{\left(1+bM^2\right)^{1/2}-M\cdot bM\left(1+bM^2\right)^{-1/2}}{1+bM^2}-1 = \sqrt{\tau_\lambda}\,\frac{1}{\left(1+bM^2\right)^{3/2}}-1.$$

Setting $g' = 0$:

$$\left(1+bM^2\right)^{3/2} = \sqrt{\tau_\lambda} \quad\Longrightarrow\quad \tau_r = \tau_\lambda^{1/3} \quad\Longrightarrow\quad \boxed{\;M_{\rm opt} = \sqrt{\frac{2}{\gamma-1}\left(\tau_\lambda^{1/3}-1\right)}.\;}$$

**A pleasingly clean condition: the ram temperature ratio should be the cube root of the overall temperature ratio.**

*Evaluating.* $\tau_\lambda = 2400/220 = 10.909$, so $\tau_\lambda^{1/3} = 2.2178$ and

$$M_{\rm opt} = \sqrt{\frac{2.2178-1}{0.2}} = \sqrt{6.089} = 2.468.$$

*(Which matches the table's peak between $M = 2$ and $M = 3$, at 893 m/s ✓)*

(b) $$T_{0\infty} = T_{04} \quad\Longrightarrow\quad \tau_r = \tau_\lambda \quad\Longrightarrow\quad M_{\max} = \sqrt{\frac{\tau_\lambda-1}{0.2}} = \sqrt{\frac{9.909}{0.2}} = \sqrt{49.55} = 7.039.$$

*A neat relation between the two:* $\tau_r = \tau_\lambda^{1/3}$ at the peak and $\tau_r = \tau_\lambda$ at the cutoff. **The useful envelope is exactly the range over which the ram temperature ratio climbs from the cube root of $\tau_\lambda$ to $\tau_\lambda$ itself.**

(c) *At $M_\infty = 5$ with $\pi_d = 0.30$.*

$$T_{0\infty} = 220\left(1+0.2(25)\right) = 220(6) = 1320\ \mathrm{K}, \qquad \frac{p_{0\infty}}{p_\infty} = 6^{3.5} = 529.1.$$

The burner is constant-pressure, so $p_{04} = p_{02} = \pi_dp_{0\infty}$, and the nozzle is isentropic, so $p_{0e} = p_{04}$. Expanding to $p_e = p_\infty$:

$$\frac{p_{0e}}{p_e} = \pi_d\frac{p_{0\infty}}{p_\infty} = 0.30(529.1) = 158.7.$$

$$\left(1+0.2M_e^2\right)^{3.5} = 158.7 \quad\Longrightarrow\quad 1+0.2M_e^2 = 158.7^{1/3.5} = e^{5.0670/3.5} = e^{1.44771} = 4.2536,$$

$$M_e^2 = \frac{3.2536}{0.2} = 16.268 \quad\Longrightarrow\quad M_e = 4.033.$$

**$M_e = 4.03 < M_\infty = 5$** — the nozzle cannot recover the Mach number the inlet destroyed, because a third of the stagnation pressure is gone.

*Exit velocity.*

$$T_e = \frac{T_{04}}{1+0.2M_e^2} = \frac{2400}{4.2536} = 564.2\ \mathrm{K}, \qquad a_e = \sqrt{1.4(287)(564.1)} = 476.1\ \mathrm{m/s},$$

$$u_e = 4.033(476.1) = 1920.4\ \mathrm{m/s}.$$

*Specific thrust.*

$$V_\infty = 5(297.3) = 1486.6\ \mathrm{m/s}, \qquad \frac{F}{\dot m_a} = 1920.4-1486.6 = 433.9\ \mathrm{m/s}.$$

*Fuel and $I_{sp}$.*

$$f = \frac{1005(2400-1320)}{43\times10^6} = 0.02524, \qquad I_{sp} = \frac{433.9}{0.02524(9.80665)} = 1753\ \mathrm{s}.$$

(d) *Comparison.*

| | Ideal ($\pi_d = 1$) | Real ($\pi_d = 0.30$) |
|---|---|---|
| $M_e$ | 5.000 | 4.033 |
| $u_e$ | 2004.5 m/s | 1920.4 m/s |
| $F/\dot m_a$ | **517.9 m/s** | **433.9 m/s** |
| $I_{sp}$ | 2092 s | 1753 s |

**A 16% loss of specific thrust and a 16% loss of $I_{sp}$**, from an inlet that is doing an entirely realistic job — 30% pressure recovery at $M = 5$ is about what a well-designed mixed-compression inlet achieves.

*What it implies for the ceiling.* Three compounding effects push the practical limit far below the ideal $M = 7$:

**Inlet recovery collapses with Mach number.** $\pi_d$ falls from about 0.9 at $M = 2$ to 0.3 at $M = 5$ and below 0.1 at $M = 7$. Since the specific thrust depends on the *expansion* the nozzle can achieve, and that expansion is what $\pi_d$ destroys, the real thrust curve falls away much faster than the ideal one.

**The temperature budget is squeezed from both ends.** Ram heating raises $T_{0\infty}$ toward $T_{04}$, while dissociation lowers the effective $T_{04}$ — at 2400 K a stoichiometric hydrocarbon flame is already losing several hundred kelvin to dissociation, and the loss grows steeply.

**Structural and cooling limits arrive.** At $M = 5$ the stagnation temperature is 1320 K; the inlet's own leading edges see close to that, and cooling them consumes fuel that would otherwise make thrust.

**The practical ramjet ceiling is therefore around $M = 5$, not $M = 7$**, and by $M = 4$ the performance is already falling steeply.

*And that is the case for the scramjet, stated quantitatively.* The whole problem traces back to one design choice: **the ramjet insists on decelerating the flow to subsonic**, which converts $V_\infty^2/2c_p$ — 1580 K at $M = 6$ — into stagnation temperature, and demands a shock system that destroys most of $p_0$ doing it.

A scramjet slows the flow only to $M\approx2$–$3$. The stagnation-temperature rise it imposes is a fraction of the ramjet's, the shock losses are far smaller, and the burner still has headroom at $M = 8$ or beyond. **The price is that combustion must complete in a supersonic stream crossing the combustor in about a millisecond** — which is why scramjets are hard, and why [4.3](04-03-hypersonic-airbreathing-scramjet.md) exists.

</details>

## Flashback

**From Lesson 2.1 (Propulsion efficiencies):** An engine ingests $\dot m_a = 80$ kg/s at $V_\infty = 300$ m/s and exhausts at $u_e = 720$ m/s, with $f = 0.022$ and $Q_R = 43$ MJ/kg. (a) Find the thrust and specific thrust. (b) Find $\eta_p$. (c) Find $\eta_{\rm th}$ and $\eta_o$. (d) Which of the two efficiencies is the limiting one here, and what architectural change would improve it?

<details>
<summary>Solution</summary>

(a) $$F = 80\left[1.022(720)-300\right] = 80\left[735.8-300\right] = 80(435.8) = 34.87\ \mathrm{kN}, \qquad \frac{F}{\dot m_a} = 435.8\ \mathrm{m/s}.$$

(b) $$\eta_p = \frac{2}{1+720/300} = \frac{2}{3.4} = 0.588.$$

(c) $$\dot m_f = 0.022(80) = 1.76\ \mathrm{kg/s}, \qquad \dot m_fQ_R = 75.68\ \mathrm{MW}.$$

$$\text{jet power} = \tfrac12(80)\left(720^2-300^2\right) = 40\left(518{,}400-90{,}000\right) = 40(428{,}400) = 17.14\ \mathrm{MW},$$

$$\eta_{\rm th} = \frac{17.14}{75.68} = 0.2264, \qquad \eta_o = 0.2264(0.588) = 0.1332.$$

*Check:* $FV_\infty/(\dot m_fQ_R) = 34{,}870(300)/75.68\times10^6 = 10.46/75.68 = 0.1382$ (the difference is the neglected fuel mass in $\eta_p$).

(d) **Thermal efficiency is the limiting one**, at 22.6% against the propulsive 58.8%. The engine is converting less than a quarter of its fuel energy into jet kinetic energy — a poor cycle.

*What would improve it.* Raise the **overall pressure ratio** and the **turbine-inlet temperature**, the two levers of Brayton efficiency. A modern core with $r_p\approx40$ and TIT $\approx1800$ K reaches $\eta_{\rm th}\approx0.45$ — doubling this engine's cycle performance without touching the fan.

**Improving $\eta_p$ instead would be the wrong move here**, and the numbers say why: $\eta_p = 0.588$ already, so even perfecting it could at most multiply the overall efficiency by 1.7, while doubling $\eta_{\rm th}$ multiplies it by 2.0 — and $\eta_p = 1$ means zero thrust.

*The bridge to this lesson.* The ramjet attacks $\eta_{\rm th}$ from a completely different direction: **it raises the pressure ratio by flying faster.** At $M = 3$, ram compression alone gives $r_p = 36.7$ and $\eta_{\rm th} = 0.643$ — better than this turbofan core achieves with a compressor, and with no compressor at all.

**The catch is that the lever only works at speed.** A turbofan can have $r_p = 40$ standing still on the runway; a ramjet has $r_p = 1$. **The two engines are solving the same equation with different variables**, and each is useless in the other's regime.

</details>

## Connections

- **Backward:** the three efficiencies and the Brayton framework are [2.1](02-01-propulsion-efficiencies-brayton.md)'s; the stagnation and isentropic relations doing the ram compression are [1.2](01-02-compressible-flow-nozzles.md)'s; the shock losses that spoil a real inlet are [`aerodynamics` 4.3](../../aerodynamics/lessons/04-03-normal-shock-waves.md)'s and [4.4](../../aerodynamics/lessons/04-04-oblique-shocks-prandtl-meyer.md)'s.
- **Forward:** [2.3](02-03-combustion-for-propulsion.md) examines the burner this lesson treated as a temperature; [2.4](02-04-turbojet-cycle.md) adds the compressor and turbine that the ramjet does without, and pays for them; [4.3](04-03-hypersonic-airbreathing-scramjet.md) refuses the high-Mach cutoff by never going subsonic.
- **Sideways:** the ramjet's structure — a device whose performance vanishes at both ends of its parameter range and peaks in between — recurs wherever two competing mechanisms scale oppositely: the drag polar's best $L/D$ in [`aerodynamics` 3.3](../../aerodynamics/lessons/03-03-separation-stall-drag-polar.md), maximum power transfer at matched impedance, and the optimum reaction rate in a system where reactant supply and product inhibition scale against each other.
