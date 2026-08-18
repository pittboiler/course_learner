# Transport Phenomena · Lesson 5.1: The transport analogies

> ⏱ ~15 min · Module 5: Interphase transport, the analogies, and turbulence · Builds on: [3.3 Thermal and concentration boundary layers](03-03-thermal-concentration-boundary-layers.md), [3.4 Forced convection and transport coefficients](03-04-forced-convection-transport-coefficients.md), the grand analogy of Module 1 · Unlocks: [5.2 Two-film theory](05-02-two-film-theory-interphase.md), [5.3 Simultaneous heat and mass transfer](05-03-simultaneous-heat-mass-transfer.md)

## Why this matters

This is the lesson the whole course has been walking toward. For four modules the refrain has been "momentum, heat, and mass are the same story." Here you cash it in for money. A friction measurement — the single easiest thing to get on any flow, just a pressure drop or a drag reading — will hand you the heat-transfer coefficient $h$ **and** the mass-transfer coefficient $k_c$ for free, no thermal or evaporation experiment required. That is the **Chilton–Colburn analogy**, and it is doing real work every day: it is how engineers size a cooling coil from a duct's friction chart, how they estimate a scrubber's absorption rate, and (next lesson but one) why a wet-bulb thermometer reads a humidity you never measured. When one measurement fixes three coefficients, you have found the deepest kind of leverage in transport phenomena.

## The idea

Go back to the boundary layer. Momentum, heat, and species all ride the **same** velocity field across the **same** thin film near the wall. If their three molecular diffusivities were identical — if momentum, heat, and mass diffused at exactly the same rate — then the three profiles (velocity, temperature, concentration) would be geometrically *identical*, and so the wall gradient that sets drag would be the very same gradient that sets $h$ and $k_c$. Measure any one, you've measured all three.

That "identical diffusivities" condition has a name: $Pr = Sc = 1$, i.e. $\nu = \alpha = D_{AB}$. When it holds, the analogy is exact and dead simple — this is **Reynolds' analogy**, and it says a dimensionless heat-transfer coefficient equals half the friction coefficient.

Real fluids miss that ideal a little: air has $Pr \approx 0.71$, $Sc \approx 0.60$, and liquids miss it a lot. But they miss it in a *predictable* way — the thermal and concentration layers are just stretched relative to the velocity layer by factors of $Pr^{1/3}$ and $Sc^{1/3}$ (that's the [3.3](03-03-thermal-concentration-boundary-layers.md) result). Chilton and Colburn absorbed exactly those stretch factors into a corrected group, the **$j$-factor**, and found that the corrected heat and mass coefficients still collapse onto $C_f/2$. So the recipe survives contact with real gases and liquids: **take $C_f/2$, undo the property stretch with a $Pr^{2/3}$ or $Sc^{2/3}$ factor, and read off the coefficient.**

The one thing to keep in the back of your mind: this only works because friction here means *skin* friction — the tangential drag of the fluid rubbing the wall, which is genuinely the momentum twin of $h$ and $k_c$. The moment your drag includes *form* drag (a bluff body, a separated wake, a pressure gradient shoving the flow), the friction number is inflated by something heat and mass never feel, and the analogy breaks.

## The formal version

**The Stanton numbers.** First, repackage the coefficients into the dimensionless form the analogy speaks in. The **Stanton number** for heat is

$$St \;=\; \frac{h}{\rho c_p V} \;=\; \frac{Nu}{Re\,Pr},$$

where $h$ is the heat-transfer coefficient ($\mathrm{W\,m^{-2}\,K^{-1}}$), $\rho$ the fluid density ($\mathrm{kg\,m^{-3}}$), $c_p$ the specific heat ($\mathrm{J\,kg^{-1}\,K^{-1}}$), and $V$ the reference velocity ($\mathrm{m\,s^{-1}}$). *In words: $St$ is the heat actually carried to the wall divided by the maximum the stream could carry — the fraction of the flow's thermal capacity that gets delivered.* Its mass twin is

$$St_m \;=\; \frac{k_c}{V} \;=\; \frac{Sh}{Re\,Sc},$$

with $k_c$ the mass-transfer coefficient ($\mathrm{m\,s^{-1}}$). *In words: $St_m$ is the mass-transfer velocity $k_c$ measured as a fraction of the bulk velocity.*

**Reynolds' analogy ($Pr = Sc = 1$).** When the three diffusivities coincide,

$$\boxed{\,St \;=\; St_m \;=\; \frac{C_f}{2}\,}$$

where $C_f$ is the skin-friction coefficient ($\tau_w = C_f \cdot \tfrac12\rho V^2$, dimensionless). *In words: a friction measurement is a heat-transfer measurement is a mass-transfer measurement — the three are literally the same number.* This is the analogy in its purest form; it just needs a fluid that carries momentum, heat, and species at one common speed.

**Chilton–Colburn analogy (real $Pr,\,Sc$).** Correct each Stanton number by its boundary-layer stretch factor to define the **$j$-factors**:

$$j_H \;\equiv\; St\,Pr^{2/3} \;=\; \frac{C_f}{2}, \qquad\qquad j_D \;\equiv\; St_m\,Sc^{2/3} \;=\; \frac{C_f}{2}.$$

Since both equal $C_f/2$, they equal each other:

$$\boxed{\,j_H \;=\; j_D \;=\; \frac{C_f}{2}\,}$$

*In words: multiply the heat Stanton number by $Pr^{2/3}$ (or the mass one by $Sc^{2/3}$) and both land on half the friction coefficient — so heat and mass transfer are tied to each other and to drag by one equation.* The $2/3$ power is exactly what's needed to cancel the $Pr^{1/3}$ / $Sc^{1/3}$ layer-thickness ratios; for the laminar flat plate the identity is not an approximation but *exact* (see Example 1). Valid roughly for $0.6 \lesssim Pr \lesssim 60$ and a similar $Sc$ range.

**The consequence you'll reuse.** Divide the two coefficient definitions and the shared $C_f/2$ cancels, leaving a pure-property ratio:

$$\frac{h}{k_c} \;=\; \rho c_p\left(\frac{Sc}{Pr}\right)^{2/3} \;=\; \rho c_p\,Le^{2/3}, \qquad Le \equiv \frac{\alpha}{D_{AB}} = \frac{Sc}{Pr}.$$

*In words: the heat and mass coefficients are locked together by the fluid's Lewis number; you never get to set them independently.* For a gas $Le \approx 1$, so $h/k_c \approx \rho c_p$ — the fact that powers the wet-bulb result in [5.3](05-03-simultaneous-heat-mass-transfer.md).

## Picture

![Flow chart of the Chilton–Colburn chain: a measured C_f/2 branches through a ÷Pr^(2/3) arrow to the heat box (St, then h) and a ÷Sc^(2/3) arrow to the mass box (St_m, then k_c), under the boxed identity j_H = j_D = C_f/2; a footnote gives the Reynolds limit and the form-drag failure mode](assets/05-01-fig1.svg)

The whole lesson is one arrow diagram: measure friction once, then walk right along either branch. The banner is the payoff — $j_H = j_D = C_f/2$ ties all three together. In the ideal $Pr=Sc=1$ world the property roots are just $1$ and the branches collapse to Reynolds' bare $St = C_f/2$.

## Worked examples

**Example 1 (friction → both coefficients, laminar plate — air).** Air at $V = 5\ \mathrm{m/s}$ flows along an $L = 0.5\ \mathrm{m}$ wetted flat plate. Properties: $\rho = 1.17\ \mathrm{kg/m^3}$, $c_p = 1007\ \mathrm{J\,kg^{-1}K^{-1}}$, $\nu = 1.57\times10^{-5}\ \mathrm{m^2/s}$, $Pr = 0.71$; for water vapor in air $D_{AB}=2.6\times10^{-5}\ \mathrm{m^2/s}$, $Sc = 0.60$. We measured only the drag: the average skin-friction coefficient is $\overline{C_f} = 3.33\times10^{-3}$. Get $\bar h$ and $\bar k_c$ — with no thermal or evaporation data.

*Step 1 — the master number.* $\dfrac{\overline{C_f}}{2} = 1.665\times10^{-3}$. By Chilton–Colburn this **is** both $j_H$ and $j_D$.

*Step 2 — heat branch.* Undo the thermal stretch: with $Pr^{2/3} = (0.71)^{2/3} = 0.796$,
$$St = \frac{j_H}{Pr^{2/3}} = \frac{1.665\times10^{-3}}{0.796} = 2.09\times10^{-3}, \qquad \bar h = St\,\rho c_p V = 2.09\times10^{-3}\times 1.17\times 1007\times 5 = 12.3\ \mathrm{W\,m^{-2}K^{-1}}.$$

*Step 3 — mass branch.* Undo the concentration stretch: with $Sc^{2/3} = (0.60)^{2/3} = 0.711$,
$$St_m = \frac{j_D}{Sc^{2/3}} = \frac{1.665\times10^{-3}}{0.711} = 2.34\times10^{-3}, \qquad \bar k_c = St_m\,V = 2.34\times10^{-3}\times 5 = 1.17\times10^{-2}\ \mathrm{m/s}.$$

*Step 4 — verify $j_H = j_D$ the long way.* These match the direct boundary-layer answers of [3.4](03-04-forced-convection-transport-coefficients.md) ($\bar h = 12.4$, $\bar k_c = 1.16\times10^{-2}$). And they had to: for the laminar plate $Nu_x = 0.332\,Re_x^{1/2}Pr^{1/3}$ and $C_f/2 = 0.332\,Re_x^{-1/2}$, so
$$j_H = St\,Pr^{2/3} = \frac{Nu}{Re\,Pr}Pr^{2/3} = \frac{0.332\,Re^{1/2}Pr^{1/3}}{Re\,Pr}Pr^{2/3} = 0.332\,Re^{-1/2} = \frac{C_f}{2}\quad\text{exactly},$$
and the same algebra with $Sc$ gives $j_D = C_f/2$. So $j_H = j_D$ is an identity here, not a fit.

*Check.* $[\bar h]=(\text{–})\cdot\mathrm{kg\,m^{-3}}\cdot\mathrm{J\,kg^{-1}K^{-1}}\cdot\mathrm{m\,s^{-1}} = \mathrm{W\,m^{-2}K^{-1}}$ ✓; $[\bar k_c]=(\text{–})\cdot\mathrm{m/s}=\mathrm{m/s}$ ✓. Both modest, as befits gentle laminar air — and both obtained from a drag reading alone. ✓

**Example 2 (the $h/k_c$ ratio for air — the wet-bulb seed).** Same air, but now ask only for the *ratio* of the two coefficients — the quantity [5.3](05-03-simultaneous-heat-mass-transfer.md) lives on. The Lewis number is
$$Le = \frac{Sc}{Pr} = \frac{0.60}{0.71} = 0.845, \qquad Le^{2/3} = (0.845)^{2/3} = 0.893.$$
Volumetric heat capacity $\rho c_p = 1.17\times 1007 = 1178\ \mathrm{J\,m^{-3}K^{-1}}$. Then
$$\frac{h}{k_c} = \rho c_p\,Le^{2/3} = 1178\times 0.893 = 1.05\times10^{3}\ \mathrm{J\,m^{-3}K^{-1}}.$$
Cross-check against Example 1: $\dfrac{\bar h}{\bar k_c} = \dfrac{12.3}{1.17\times10^{-2}} = 1.05\times10^{3}$ — identical. ✓ The headline: because $Le \approx 1$ for air, $h/k_c$ sits within about $11\%$ of $\rho c_p$ itself. So in an evaporative balance $h(T_\infty - T_w) = k_c\lambda\,\Delta c$, the coefficients nearly cancel: $T_\infty - T_w \approx \dfrac{\lambda\,\Delta c}{\rho c_p}$, a temperature depression set by humidity and latent heat — **not** by how fast the air blows, because $h$ and $k_c$ rise and fall together. That is the wet-bulb thermometer, previewed.

*Check.* $[\rho c_p\,Le^{2/3}] = \mathrm{J\,m^{-3}K^{-1}}$, and indeed $[\bar h/\bar k_c] = \dfrac{\mathrm{W\,m^{-2}K^{-1}}}{\mathrm{m\,s^{-1}}} = \mathrm{J\,m^{-3}K^{-1}}$ ✓. Numbers agree to three figures, confirming the analogy is internally consistent. ✓

## Watch out

- **You might think the analogy works for the total drag on any object.** It works for **skin** friction only. On a sphere or a tube bank, most of the measured drag is *form* (pressure) drag from the wake — momentum lost to a pressure field that heat and mass transfer never experience. Feed that inflated $C_f$ into $j_H = C_f/2$ and you'll overpredict $h$ badly. The analogy lives in attached, boundary-layer-dominated flows: flat plates, the friction *inside* a smooth tube, un-separated leading edges. See [`fluid-dynamics` 3.5 Separation and drag](../../fluid-dynamics/lessons/03-05-separation-drag.md).
- **You might reach for Reynolds' $St = C_f/2$ for water.** Reynolds needs $Pr = Sc = 1$. Air is close-ish ($Pr = 0.71$); water is $Pr \approx 6$, oils far more. There, skipping the $Pr^{2/3}$ correction overestimates $St$ by the factor $Pr^{2/3} \approx 3.3$ — use Chilton–Colburn, not bare Reynolds, whenever $Pr$ or $Sc$ strays from $1$.
- **You might forget the $2/3$ power is glued to a specific stretch law.** The $Pr^{2/3}$/$Sc^{2/3}$ factors encode the $\delta/\delta_T \sim Pr^{1/3}$ boundary-layer scaling from [3.3](03-03-thermal-concentration-boundary-layers.md). In regimes where that scaling fails — strong blowing/suction at the wall, transpiration, or a chemically reacting surface distorting the profile — the analogy degrades even if the flow is attached.

## One-liner

> Momentum, heat, and mass ride one velocity field, so $j_H = j_D = C_f/2$: measure friction once and — after a $Pr^{2/3}$ or $Sc^{2/3}$ nudge — you've measured $h$ and $k_c$ too.

## Problems

**P1 (🟢)** Idealized gas with $Pr = Sc = 1$ flows in a duct at $V = 8\ \mathrm{m/s}$; the skin-friction coefficient is $C_f = 4.0\times10^{-3}$, and $\rho c_p = 1200\ \mathrm{J\,m^{-3}K^{-1}}$. Use **Reynolds' analogy** to find the heat-transfer coefficient $h$ and the mass-transfer coefficient $k_c$ directly.

**P2 (🟡)** Same duct, same $C_f$ and $V$ and $\rho c_p$ as P1 — but now it's real air, $Pr = 0.71$, $Sc = 0.60$. Redo $h$ and $k_c$ with **Chilton–Colburn**, and state the factor by which each exceeds the Reynolds-analogy estimate from P1. Which way did the correction push them, and why does that make sense given $Pr, Sc < 1$?

**P3 (🔴)** A wet surface evaporates species $A$ into a dry stream. Steady energy balance on the film: the convective heat gain supplies the latent heat carried off by evaporation, $h\,(T_\infty - T_w) = k_c\,\lambda\,(c_{A,s} - c_{A,\infty})$, where $\lambda$ is the latent heat per mole ($\mathrm{J/mol}$). (a) Use Chilton–Colburn to eliminate $h/k_c$ and write $T_\infty - T_w$ in terms of $Le$ and $\rho c_p$. (b) Argue that $T_\infty - T_w$ is independent of the air speed $V$. This is the skeleton of [5.3](05-03-simultaneous-heat-mass-transfer.md)'s wet-bulb result.

<details>
<summary>Solutions</summary>

**P1** With $Pr = Sc = 1$ the property roots are $1$, so both Stanton numbers equal $C_f/2$:
$$St = St_m = \frac{C_f}{2} = 2.0\times10^{-3}.$$
Then invert the Stanton definitions:
$$h = St\,\rho c_p V = 2.0\times10^{-3}\times 1200\times 8 = 19.2\ \mathrm{W\,m^{-2}K^{-1}},$$
$$k_c = St_m\,V = 2.0\times10^{-3}\times 8 = 1.6\times10^{-2}\ \mathrm{m/s}.$$
*Check.* $[h] = (\text{–})\cdot\mathrm{J\,m^{-3}K^{-1}}\cdot\mathrm{m/s} = \mathrm{W\,m^{-2}K^{-1}}$ ✓; $[k_c]=\mathrm{m/s}$ ✓. In the ideal fluid $h/k_c = \rho c_p = 1200$ exactly ($Le = 1$). ✓

**P2** Now $j_H = j_D = C_f/2 = 2.0\times10^{-3}$, but each Stanton number is recovered by dividing out its property root. With $Pr^{2/3} = 0.71^{2/3} = 0.796$ and $Sc^{2/3} = 0.60^{2/3} = 0.711$:
$$St = \frac{C_f/2}{Pr^{2/3}} = \frac{2.0\times10^{-3}}{0.796} = 2.51\times10^{-3} \;\Rightarrow\; h = 2.51\times10^{-3}\times1200\times8 = 24.1\ \mathrm{W\,m^{-2}K^{-1}},$$
$$St_m = \frac{C_f/2}{Sc^{2/3}} = \frac{2.0\times10^{-3}}{0.711} = 2.81\times10^{-3} \;\Rightarrow\; k_c = 2.81\times10^{-3}\times8 = 2.25\times10^{-2}\ \mathrm{m/s}.$$
Ratios to P1: $h$ is larger by $1/0.796 = 1.26$, $k_c$ larger by $1/0.711 = 1.41$. Both went *up*. That's right: $Pr < 1$ and $Sc < 1$ mean heat and mass diffuse *faster* than momentum, so their boundary layers are *thicker* than the velocity layer, delivering more transport than the equal-diffusivity Reynolds picture assumed. Dividing by a root less than $1$ boosts the coefficient.

*Check.* Units as in P1 ✓. Consistency: $h/k_c = 24.1/0.0225 = 1071 \approx \rho c_p\,Le^{2/3} = 1200\times(0.845)^{2/3} = 1200\times0.893 = 1072$ ✓.

**P3** (a) From the analogy, $h/k_c = \rho c_p\,Le^{2/3}$, i.e. $k_c/h = 1/(\rho c_p Le^{2/3})$. Divide the energy balance by $h$:
$$T_\infty - T_w = \frac{k_c}{h}\,\lambda\,(c_{A,s} - c_{A,\infty}) = \frac{\lambda\,(c_{A,s} - c_{A,\infty})}{\rho c_p\,Le^{2/3}}.$$
(b) Every surviving factor — $\lambda$, $\rho$, $c_p$, $Le = Sc/Pr$, and the concentrations — is a *property* of the fluids and the surface state, not of the flow. The velocity $V$ dropped out entirely because it multiplies *both* $h$ (via $St\,\rho c_p V$) and $k_c$ (via $St_m V$) identically, so it cancels in the ratio $k_c/h$. Physically: blow harder and you thin both boundary layers by the same factor — heat gain and evaporative loss scale up together, leaving the equilibrium $T_w$ untouched. The wet-bulb temperature is set by humidity and thermodynamics, not by wind speed.

*Check.* $\left[\dfrac{\lambda\,\Delta c}{\rho c_p Le^{2/3}}\right] = \dfrac{(\mathrm{J/mol})(\mathrm{mol/m^3})}{\mathrm{J\,m^{-3}K^{-1}}} = \mathrm{K}$ ✓ — a temperature, as it must be. For air $Le^{2/3}\approx0.89\approx1$, so $T_\infty - T_w \approx \lambda\,\Delta c/\rho c_p$. ✓

</details>

## Flashback

**From Lesson 3.4 (Forced convection and transport coefficients):** Air ($Pr = 0.71$) flows over a laminar flat plate; a heat-transfer test gives an average $\overline{Nu}_L = 200$. In the *same* flow, a thin water film evaporates ($Sc = 0.60$, $D_{AB} = 2.6\times10^{-5}\ \mathrm{m^2/s}$, $L = 0.5\ \mathrm{m}$). Without recomputing $Re$, find $\overline{Sh}_L$ and then $\bar k_c$.

<details>
<summary>Solution</summary>

The flat-plate laminar correlations share the factor $0.664\,Re_L^{1/2}$, so their ratio is pure property:
$$\frac{\overline{Nu}_L}{\overline{Sh}_L} = \left(\frac{Pr}{Sc}\right)^{1/3} \;\Rightarrow\; \overline{Sh}_L = \overline{Nu}_L\left(\frac{Sc}{Pr}\right)^{1/3} = 200\times\left(\frac{0.60}{0.71}\right)^{1/3} = 200\times(0.845)^{1/3} = 200\times0.945 = 189.$$
Then from $\overline{Sh}_L = \bar k_c L/D_{AB}$:
$$\bar k_c = \frac{\overline{Sh}_L\,D_{AB}}{L} = \frac{189\times2.6\times10^{-5}}{0.5} = 9.8\times10^{-3}\ \mathrm{m/s}.$$
*Check.* $\overline{Sh}_L < \overline{Nu}_L$ because $Sc < Pr$ (mass diffuses a touch faster, thicker concentration layer, but the correlation constant is shared) ✓; $[\bar k_c] = \mathrm{m^2 s^{-1}}/\mathrm{m} = \mathrm{m/s}$ ✓. Note $(Sc/Pr)^{1/3} = Le^{1/3}$, the mass-side cousin of this lesson's $Le^{2/3}$ ratio. ✓

</details>

## Connections

- **Backward:** the analogy is built entirely from [3.3](03-03-thermal-concentration-boundary-layers.md)'s layer-stretch laws ($\delta/\delta_T \sim Pr^{1/3}$) and [3.4](03-04-forced-convection-transport-coefficients.md)'s coefficients $h, k_c$ — the $j$-factor's $2/3$ power is precisely what cancels those $1/3$ stretches. The Stanton grouping repackages the $Nu = f(Re, Pr)$ machinery from [`heat-transfer` 3.2](../../heat-transfer/lessons/03-02-dimensionless-groups-re-pr-nu.md).
- **Forward:** [5.2 Two-film theory](05-02-two-film-theory-interphase.md) stacks two of these coefficients in series across a phase boundary; [5.3 Simultaneous heat and mass transfer](05-03-simultaneous-heat-mass-transfer.md) turns Example 2's $h/k_c = \rho c_p Le^{2/3}$ into the wet-bulb temperature; and [5.4 Turbulent transport](05-04-turbulent-transport.md) shows the analogy gets *better* in turbulence, where eddies carry momentum, heat, and species at nearly equal rates ($Pr_t \approx Sc_t \approx 1$) — Reynolds' ideal made real. The failure mode (form drag) is the drag decomposition of [`fluid-dynamics` 3.5](../../fluid-dynamics/lessons/03-05-separation-drag.md).
- **Sideways:** this is the same "share one field, trade the coefficients" logic as an economist inferring an unobserved elasticity from a measured one when both are driven by the same underlying demand shift — a single measurement pinning down a whole family of responses. The $j$-factor is transport's version of that free lunch.
