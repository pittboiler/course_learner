# Heat Transfer · Lesson 1.5: Fins and extended surfaces

> ⏱ ~15 min · Module 1: Conduction and thermal resistance · Builds on: [1.4 Thermal-resistance networks](01-04-thermal-resistance-networks.md), [1.3 1-D steady conduction](01-03-1d-steady-conduction.md), [1.2 The heat equation](01-02-heat-equation.md), [`ode-refresher` 2.1](../../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) · Unlocks: Module 4 (finned heat exchangers), Boss problem 1(b)

## Why this matters

Newton's law of cooling says a surface sheds heat at rate $q = hA(T_s - T_\infty)$. When you can't raise $h$ (it's set by the fluid and the flow) and you can't raise $T_s - T_\infty$ (it's set by the problem), the only knob left is $A$ — **area**. A fin is just extra surface bolted onto a hot wall so more of it can touch the fluid: the cooling ridges on a motorcycle engine, the aluminum spikes on a CPU heat sink, the corrugations inside a car radiator. This lesson tells you how much a fin actually helps — because a badly chosen fin can help almost nothing, or even hurt.

## The idea

Here's the tension at the heart of every fin. To shed heat, you want a long fin — more surface. But heat has to *conduct out along the fin* before it can be convected away, and the fin has thermal resistance too. So the far end of a long, skinny fin is barely warmer than the surrounding air, and cold surface sheds nothing. You're paying for metal that does no work.

A fin therefore lives on a tug-of-war between two rates:
- **convection off the sides**, which wants to strip heat away (favored by big $h$, big perimeter $P$),
- **conduction down the length**, which resupplies that heat from the hot base (favored by big $k$, fat cross-section $A_c$).

One number captures the balance: $m = \sqrt{hP/(kA_c)}$. Big $m$ means convection outruns conduction, so the temperature collapses to $T_\infty$ within a short distance of the base — a long fin is wasted. Small $m$ means conduction keeps the whole fin nearly as hot as the base — the fin is used efficiently, right out to the tip. Everything about fins is reading the group $mL$.

## The formal version

**The fin equation.** Take a thin fin of cross-section $A_c$ (m²) and perimeter $P$ (m), sticking out into fluid at $T_\infty$. Do a steady energy balance on a slice of thickness $dx$: conduction in the left face, conduction out the right face, and convection off the exposed side wall $P\,dx$. Assuming the fin is thin enough to have one temperature across its section (a lumped cross-section, justified when $Bi = ht/k \ll 1$), the balance collapses to

$$\frac{d^2\theta}{dx^2} - m^2\theta = 0, \qquad \theta(x) \equiv T(x) - T_\infty, \qquad m \equiv \sqrt{\frac{hP}{kA_c}}\ \ (\mathrm{m^{-1}}).$$

*In words: how fast the temperature curve bends is proportional to how far above ambient the fin still is.* Here $\theta$ is the **temperature excess** (K), $h$ the convection coefficient (W/m²K), $k$ the fin conductivity (W/mK), and $m$ the fin parameter (per meter) — the inverse of the distance over which the fin cools off.

This is **exactly** the constant-coefficient linear ODE $y'' - m^2 y = 0$ from [`ode-refresher` 2.1](../../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) — but now the characteristic roots are $r = \pm m$, **real and distinct** (the opposite of the imaginary-roots oscillator in mechanics). Real roots mean the solution is built from $e^{+mx}$ and $e^{-mx}$ — or equivalently $\cosh$ and $\sinh$ — *decay*, not oscillation. The fin doesn't ring; it fades.

**Adiabatic-tip solution.** Fix the base at $\theta_b = T_b - T_\infty$. If the tip is short and thin, almost no heat escapes off its little end face, so model it as insulated: $d\theta/dx = 0$ at $x = L$. The two boundary conditions pin the solution to

$$\boxed{\ \frac{\theta(x)}{\theta_b} = \frac{\cosh m(L-x)}{\cosh mL}\ }$$

*In words: temperature excess falls off from the base as a $\cosh$ curve that flattens to zero slope right at the tip.* Fourier's law at the base ($q_f = -kA_c\,d\theta/dx\big|_{x=0}$) gives the total heat the fin carries:

$$q_f = \sqrt{hPkA_c}\ \theta_b \tanh mL.$$

*In words: the heat a fin dumps grows with $\tanh mL$ — which climbs fast then saturates near 1, so past $mL \approx 2.5$ extra length buys almost nothing.*

**Efficiency and effectiveness — the two verdicts.** An ideal fin would be *all* at the base temperature, shedding $q_{\max} = hA_f\theta_b$ over its whole surface area $A_f$. The real fin falls short because it cools toward the tip. Define

$$\eta_f \equiv \frac{q_f}{hA_f\theta_b} = \frac{\tanh mL_c}{mL_c}, \qquad L_c = L + \frac{t}{2}.$$

*In words: fin efficiency is the fraction of the "if the whole fin were base-hot" heat you actually get.* The **corrected length** $L_c$ (add half the thickness $t$) is a slick trick: extending the fin by $t/2$ and pretending the tip is insulated accounts for the real convection off the tip face, so one adiabatic formula covers both cases. High $\eta_f$ (near 1) means a short, fat, conductive fin that stays hot; low $\eta_f$ means a long, skinny one wasting its far half.

Efficiency tells you how *well* a fin works, but not whether it was worth adding at all — a tiny perfectly-efficient fin adds negligible area. For that, use **effectiveness**:

$$\varepsilon_f \equiv \frac{q_f}{hA_c\theta_b},$$

the heat *with* the fin divided by the heat that bare patch of base ($A_c$) would have shed *without* it. **Rule: $\varepsilon_f > 1$ to bother; $\varepsilon_f \gtrsim 2$ to be worth the manufacturing cost; $\varepsilon_f \le 1$ means the fin is a heat-blocking plug, not a booster.** (That last case is real: a low-$k$ fin on a high-$h$ surface can insulate.)

**Fin arrays and the overall resistance.** Real hardware uses $N$ fins side by side. Bundle the fin area and the exposed unfinned base into one total area $A_t = N A_f + A_b$, and define the **overall surface efficiency**

$$\eta_o = 1 - \frac{N A_f}{A_t}\,(1 - \eta_f),$$

which weights the (efficient) bare base and the (less efficient) fins. The whole finned surface then acts as a single convective resistance in your [1.4](01-04-thermal-resistance-networks.md) network:

$$R_o = \frac{1}{\eta_o\, h\, A_t}.$$

*In words: a finned wall is just a much larger effective convecting area, so it becomes one small resistor you drop into the series circuit.*

## Picture

![A straight rectangular fin protruding from a hot wall, with the temperature-excess profile theta(x) decaying as a cosh curve from theta_b at the base and flattening to zero slope at the insulated tip; base, tip, length L, and the convecting fluid h, T-infinity are labeled](assets/01-05-fig1.svg)

## Worked examples

**Example 1 (size one aluminum fin).** A straight rectangular aluminum fin ($k = 180\ \mathrm{W/mK}$) has length $L = 0.03\ \mathrm{m}$ and thickness $t = 0.002\ \mathrm{m}$. It sits in air with $h = 40\ \mathrm{W/m^2K}$; the base is at $100\,^\circ\mathrm{C}$, the air at $25\,^\circ\mathrm{C}$. Find $m$, $\eta_f$, and the fin heat rate $q_f$ (per meter of width).

*Step 1 — the fin parameter.* For a wide, thin rectangular fin take width $w = 1\ \mathrm{m}$, so $P = 2(w+t) \approx 2\ \mathrm{m}$ and $A_c = wt = 0.002\ \mathrm{m^2}$. Then

$$m = \sqrt{\frac{hP}{kA_c}} = \sqrt{\frac{40 \times 2}{180 \times 0.002}} = \sqrt{\frac{80}{0.36}} = \sqrt{222.2} = 14.9\ \mathrm{m^{-1}}.$$

*Step 2 — efficiency.* Corrected length $L_c = L + t/2 = 0.030 + 0.001 = 0.031\ \mathrm{m}$, so $mL_c = 14.9 \times 0.031 = 0.462$. Then

$$\eta_f = \frac{\tanh(0.462)}{0.462} = \frac{0.432}{0.462} = 0.935 \quad (93.5\%).$$

The fin is short and stubby relative to $1/m \approx 0.067\ \mathrm{m}$, so it stays nearly base-hot the whole way — high efficiency.

*Step 3 — heat rate.* Fin surface area (corrected) $A_f = P L_c = 2 \times 0.031 = 0.062\ \mathrm{m^2}$, and base excess $\theta_b = 100 - 25 = 75\ \mathrm{K}$:

$$q_f = \eta_f\, h A_f \theta_b = 0.935 \times 40 \times 0.062 \times 75 = 174\ \mathrm{W}\ \text{(per meter of width)}.$$

Cross-check with the closed form $q_f = \sqrt{hPkA_c}\,\theta_b\tanh mL_c = \sqrt{40\cdot 2\cdot 180\cdot 0.002}\,(75)(0.432) = 5.37 \times 75 \times 0.432 = 174\ \mathrm{W}$ ✓.

*Sanity + effectiveness.* Was the fin worth it? $\varepsilon_f = q_f/(hA_c\theta_b) = 174/(40 \times 0.002 \times 75) = 174/6 = 29$. That bare $0.002\ \mathrm{m^2}$ patch would have shed only $6\ \mathrm{W}$; the fin sheds $174\ \mathrm{W}$ — a 29× win. Units: $\sqrt{(\mathrm{W/m^2K})(\mathrm{m})(\mathrm{W/mK})(\mathrm{m^2})} = \sqrt{\mathrm{W^2/K^2}} = \mathrm{W/K}$, times $\theta_b$ (K) $\to$ W ✓.

**Example 2 (Boss 1(b) flavor — fin the furnace wall).** The outer wall of the Boss-problem furnace loses heat by convection to ambient air, and that outer film is the bottleneck. You bolt on an array of $N$ straight aluminum fins (each like Example 1). Write the new outer-side resistance and show why the heat flux rises.

The bare outer surface had resistance $R_{o,\text{bare}} = 1/(h_o A_{\text{wall}})$. After finning, replace it with

$$R_o = \frac{1}{\eta_o\, h_o\, A_t}, \qquad A_t = N A_f + A_b, \qquad \eta_o = 1 - \frac{N A_f}{A_t}(1 - \eta_f).$$

Concretely, suppose the fins multiply the effective convecting area by 4 — i.e. $\eta_o A_t = 4\,A_{\text{wall}}$ (using $\eta_f = 0.94$ from Example 1, so the efficiency penalty is tiny). Then

$$\frac{R_o}{R_{o,\text{bare}}} = \frac{A_{\text{wall}}}{\eta_o A_t} = \frac{1}{4},$$

the outer resistance drops to a quarter. In the *series* furnace network $R_{\text{tot}} = R_{\text{conv},i} + R_{\text{brick}} + R_{\text{insul}} + R_o$, shrinking the last term lowers $R_{\text{tot}}$, and since $q = \Delta T_{\text{overall}}/R_{\text{tot}}$ with the same driving $\Delta T$, the heat rate **rises**.

*Where did the added conductance come from?* Not from $h$ (unchanged) and not from a bigger temperature difference — purely from **area at high efficiency**. Conductance is $\eta_o h A_t$; the fins raise $A_t$ several-fold, and because $\eta_f \approx 0.94$ almost none of that new area is wasted, so nearly the full area increase converts into heat rate. That is exactly why the outer-side (low-$h$ gas or air) branch is *always* where you put the fins: fin the side with the worst convection, not the side that's already good.

## Watch out

- **You might think a longer fin always sheds more heat — so make it as long as possible.** But $q_f \propto \tanh mL$ *saturates*: going from $mL = 1$ to $mL = 3$ raises $\tanh$ only from 0.76 to 0.995. Past $mL \approx 2.5$ the tip is essentially at $T_\infty$ and adds cold, dead surface. Extra length is wasted metal and weight.
- **You might conflate efficiency with worth.** A pin the size of a grain of rice can have $\eta_f = 0.99$ and still be useless — it barely adds area. Efficiency ($\eta_f$, is the fin *used* well?) and effectiveness ($\varepsilon_f$, was adding it *worth it*?) answer different questions. You want $\eta_f$ high **and** $\varepsilon_f > 1$.
- **You might assume any fin helps.** Effectiveness $\varepsilon_f \approx \sqrt{kP/(hA_c)}$ for a long fin: if $k$ is low or $h$ is already large, $\varepsilon_f$ can fall to 1 or below and the fin becomes an insulating obstruction. Fins pay off on the **low-$h$, high-$k$** side — air-cooled aluminum, not water-cooled plastic.

## One-liner

> A fin obeys $\theta'' - m^2\theta = 0$ with $m = \sqrt{hP/kA_c}$; it sheds $q_f = \sqrt{hPkA_c}\,\theta_b\tanh mL$, works well when $\eta_f = \tanh(mL_c)/mL_c$ is near 1, and is worth adding only when $\varepsilon_f > 1$ — so fin the low-$h$ side with short, fat, conductive fins.

## Problems

**P1 (🟢)** A straight rectangular stainless-steel fin ($k = 15\ \mathrm{W/mK}$) has $L = 0.02\ \mathrm{m}$ and $t = 0.003\ \mathrm{m}$, in air with $h = 60\ \mathrm{W/m^2K}$. Compute $m$, $mL_c$, and the fin efficiency $\eta_f$. (Use $P \approx 2\ \mathrm{m}$, $A_c = 0.003\ \mathrm{m^2}$ per meter of width.)

**P2 (🟡)** Two candidate fins have identical geometry and sit in the same airflow ($h = 50\ \mathrm{W/m^2K}$), but one is aluminum ($k = 180$) and one is stainless steel ($k = 15$). Without computing $q_f$ fully, argue which sheds more heat and which has the higher *efficiency* — and explain why those two answers point the same way here but could in principle differ.

**P3 (🔴)** For a fin so long that the tip reaches $T_\infty$ ($mL \to \infty$, so $\tanh mL \to 1$), show that the effectiveness reduces to $\varepsilon_f = \sqrt{kP/(hA_c)}$. Then state the design rule this hands you for choosing *when* fins are worthwhile.

<details>
<summary>Solutions</summary>

**P1** Fin parameter:

$$m = \sqrt{\frac{hP}{kA_c}} = \sqrt{\frac{60 \times 2}{15 \times 0.003}} = \sqrt{\frac{120}{0.045}} = \sqrt{2667} = 51.6\ \mathrm{m^{-1}}.$$

Corrected length $L_c = 0.020 + 0.0015 = 0.0215\ \mathrm{m}$, so $mL_c = 51.6 \times 0.0215 = 1.110$. Then

$$\eta_f = \frac{\tanh(1.110)}{1.110} = \frac{0.804}{1.110} = 0.724 \quad (72.4\%).$$

*Check.* Units of $m$: $\sqrt{(\mathrm{W/m^2K})(\mathrm{m})/[(\mathrm{W/mK})(\mathrm{m^2})]} = \sqrt{\mathrm{m^{-2}}} = \mathrm{m^{-1}}$ ✓. Low $k$ (steel) and higher $h$ push $mL_c$ up past 1, so efficiency has dropped well below Example 1's aluminum fin (93.5%) — the far end runs noticeably cooler. Sensible.

**P2** Heat rate scales as $q_f = \sqrt{hPkA_c}\,\theta_b\tanh mL_c$; with everything equal except $k$, the aluminum fin has larger $\sqrt{k}$ *and* smaller $m \propto 1/\sqrt{k}$ (so larger $\tanh mL_c$ up to saturation and a higher $\eta_f$). Aluminum wins on **both** heat rate and efficiency: its high conductivity keeps the whole fin closer to $\theta_b$, so more of its area works. They point the same way because higher $k$ simultaneously raises the conductance feeding the fin and lowers $m$. They *could* diverge if geometry changed too — e.g. a very short fat aluminum fin might be near 100% efficient yet shed less total heat than a longer steel fin with more area. Efficiency is a per-area quality; heat rate also depends on how much area there is.

*Check.* Consistent with the "high-$k$ side" rule: aluminum is the standard fin metal precisely because it dominates on both counts.

**P3** For the long fin, $q_f = \sqrt{hPkA_c}\,\theta_b$ (with $\tanh mL = 1$). Effectiveness is heat with the fin over heat the bare base patch would shed:

$$\varepsilon_f = \frac{q_f}{hA_c\theta_b} = \frac{\sqrt{hPkA_c}\,\theta_b}{hA_c\theta_b} = \sqrt{\frac{hPkA_c}{h^2A_c^2}} = \sqrt{\frac{kP}{hA_c}}.$$

*Design rule.* Fins pay off when $kP/(hA_c)$ is large: **high conductivity $k$, low convection coefficient $h$, and a slender section (large perimeter-to-area ratio $P/A_c$).** So fin the air-side of an aluminum surface (low $h$, high $k$, thin fins) — never the water-side of a plastic one. If $\varepsilon_f \le 1$, the fin adds resistance instead of shedding heat.

*Check.* Units: $\sqrt{(\mathrm{W/mK})(\mathrm{m})/[(\mathrm{W/m^2K})(\mathrm{m^2})]} = \sqrt{1} = $ dimensionless ✓, as an effectiveness ratio must be.

</details>

## Flashback

**From Lesson 1.4 (Thermal-resistance networks):** A composite furnace wall (per unit area) has hot gas inside at $T_{\infty,i} = 400\,^\circ\mathrm{C}$ with $h_i = 25\ \mathrm{W/m^2K}$, then firebrick $L_1 = 0.10\ \mathrm{m}$, $k_1 = 1.0\ \mathrm{W/mK}$, then insulation $L_2 = 0.05\ \mathrm{m}$, $k_2 = 0.05\ \mathrm{W/mK}$, with outside air at $T_{\infty,o} = 30\,^\circ\mathrm{C}$, $h_o = 15\ \mathrm{W/m^2K}$. Find the steady heat flux $q''$ and the brick–insulation interface temperature.

<details>
<summary>Solution</summary>

Series resistances per unit area ($\mathrm{m^2K/W}$):

$$R''_{\text{conv},i} = \frac{1}{25} = 0.040, \quad R''_1 = \frac{0.10}{1.0} = 0.100, \quad R''_2 = \frac{0.05}{0.05} = 1.000, \quad R''_{\text{conv},o} = \frac{1}{15} = 0.0667.$$

Total $R''_{\text{tot}} = 0.040 + 0.100 + 1.000 + 0.0667 = 1.207\ \mathrm{m^2K/W}$. The flux:

$$q'' = \frac{T_{\infty,i} - T_{\infty,o}}{R''_{\text{tot}}} = \frac{400 - 30}{1.207} = 307\ \mathrm{W/m^2}.$$

The interface sits after the inside film and the brick. Walking in from the hot side:

$$T_{12} = T_{\infty,i} - q''(R''_{\text{conv},i} + R''_1) = 400 - 307(0.040 + 0.100) = 400 - 43 = 357\,^\circ\mathrm{C}.$$

*Check.* Walk in from the cold side instead: $T_{12} = T_{\infty,o} + q''(R''_{\text{conv},o} + R''_2) = 30 + 307(0.0667 + 1.000) = 30 + 327 = 357\,^\circ\mathrm{C}$ ✓. Note the flimsy insulation carries $R''_2 = 1.0$ — 83% of the total resistance — so nearly the entire temperature drop (307 K of the 370 K span) lands across it. That is the branch a fin array on the *outer* face would attack, which is exactly where Example 2 headed.

</details>

## Connections

- **Backward:** the fin equation is [1.2](01-02-heat-equation.md)'s heat equation reduced to 1-D steady with a convective side-loss sink term, and it drops into the [1.4](01-04-thermal-resistance-networks.md) resistance network as a single lumped resistor $R_o = 1/(\eta_o h A_t)$ — a finned wall is just a large effective convecting area. The lumped-cross-section assumption ($Bi = ht/k \ll 1$) is a preview of the Biot-number argument in [2.1](02-01-lumped-capacitance-biot.md).
- **Forward:** finned surfaces are how real **heat exchangers** pack area into a small volume — the $\eta_o$ and $A_t$ here become the surface-efficiency factors inside the overall $UA$ of Module 4 ([4.4](04-04-heat-exchangers-lmtd.md), [4.5](04-05-heat-exchangers-effectiveness-ntu.md)). Boss problem 1(b) in the [course syllabus](../syllabus.md) is Example 2 in full.
- **Sideways (ODEs):** the fin equation $\theta'' - m^2\theta = 0$ is the **real-distinct-roots** twin of the oscillator $\ddot x + \omega^2 x = 0$ from [`ode-refresher` 2.1](../../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) — same quadratic machinery, but $r = \pm m$ (real) gives $\cosh/\sinh$ decay instead of $\cos/\sin$ oscillation. Same equation, opposite physics: a fin fades where a spring rings.
