# Aerodynamics · Lesson 3.2: Transition and turbulent boundary layers

> ⏱ ~15 min · Module 3: Boundary layers and viscous drag · Builds on: [3.1 Boundary layers recalled, and the momentum integral](03-01-boundary-layers-momentum-integral.md) · Unlocks: [3.3 Separation, stall, and the drag polar](03-03-separation-stall-drag-polar.md)

## Why this matters

[3.1](03-01-boundary-layers-momentum-integral.md) ended with a discrepancy. A wing at a chord Reynolds number of $7\times10^6$ should have $C_f\approx5\times10^{-4}$ by the laminar formula, yet real aircraft quote $C_{D,0}\approx0.01$ — twenty times more. The laminar theory is not slightly wrong; it is describing a different flow.

That flow is **turbulent**, and above $Re_x\approx5\times10^5$ it is what a boundary layer becomes. Since almost every full-scale aircraft surface runs at $Re$ of $10^6$–$10^8$, **the turbulent boundary layer is the normal case and the laminar one is the exception.**

This lesson gives the turbulent correlations, the transition criterion, and the mixed laminar-then-turbulent drag estimate that engineering actually uses — plus the roughness limit that decides whether your paint job matters.

## The idea

**Transition is an instability, not a threshold.** Small disturbances in a laminar layer grow (Tollmien–Schlichting waves), become three-dimensional, break down into turbulent spots, and the spots merge. The whole process occupies a finite length. **For engineering we collapse it to a point**, defined by a critical Reynolds number.

**$Re_{x,\rm tr}\approx5\times10^5$ is a convention, not a constant.** On a very smooth plate in a very quiet stream, transition can be delayed to $3\times10^6$; with roughness, noise, or an adverse pressure gradient it can happen at $10^5$. The value $5\times10^5$ is the standard flat-plate design number and we use it, while remembering it is soft.

**A turbulent profile is fuller.** Turbulent mixing carries high-momentum fluid from the outer flow down toward the wall, so the profile is blunt rather than gradual — close to $u/U = (y/\delta)^{1/7}$. Two consequences follow immediately.

**The wall slope is steeper, so friction is much higher.** A fuller profile means a bigger $\partial u/\partial y$ at the wall. Turbulent skin friction is typically three to five times laminar at the same Reynolds number.

**But the layer carries more momentum near the wall, so it resists separation.** The same fullness that costs friction buys the ability to push into an adverse pressure gradient much further before letting go. **This trade is the central design tension of Module 3**, and it is why golf balls have dimples and why some wings have deliberate trip strips.

**The layer also thickens much faster.** Laminar grows like $x^{1/2}$, turbulent like $x^{4/5}$ — nearly linearly.

**And roughness only matters if it pokes out of the viscous sublayer.** A turbulent boundary layer has a very thin sublayer next to the wall where viscosity still rules. Roughness buried inside it is invisible; roughness protruding through it trips the flow and raises drag. The dividing height scales as $\nu/U$, so **the faster you fly, the smoother you must be.**

## The formal version

**Transition criterion.**

$$\boxed{\;Re_{x,\rm tr} = \frac{Ux_{\rm tr}}{\nu}\approx5\times10^5 \quad\Longrightarrow\quad x_{\rm tr} = \frac{5\times10^5\,\nu}{U}.\;}$$

*In words: the transition point sits at a fixed distance from the leading edge determined by speed and viscosity alone — not by the body's length.*

**Turbulent profile (power law).**

$$\frac{u}{U} = \left(\frac{y}{\delta}\right)^{1/7} \quad\Longrightarrow\quad \frac{\delta^*}{\delta} = \frac18 = 0.125, \quad \frac{\theta}{\delta} = \frac78-\frac79 = 0.09722, \quad H = \frac{9}{7} = 1.286.$$

**Compare $H = 2.59$ laminar with $H = 1.29$ turbulent** — the shape factor halves, and that single number is the cleanest signature of the state of the layer.

**Turbulent correlations** (flat plate, zero pressure gradient, $5\times10^5<Re<10^7$):

$$\boxed{\;\frac{\delta}{x} = \frac{0.37}{Re_x^{1/5}}, \qquad c_f = \frac{0.0592}{Re_x^{1/5}}, \qquad C_f = \frac{0.074}{Re_L^{1/5}}.\;}$$

For higher Reynolds numbers, the Schlichting correlation is better:

$$C_f = \frac{0.455}{\left(\log_{10}Re_L\right)^{2.58}} \qquad (Re_L\ \text{up to}\ 10^9).$$

**Mixed laminar–turbulent plate.** Real plates are laminar up to $x_{\rm tr}$ and turbulent after, and the standard correction subtracts the turbulent drag that the front portion did *not* have:

$$\boxed{\;C_f = \frac{0.074}{Re_L^{1/5}}-\frac{A}{Re_L}, \qquad A = 1742\ \text{for}\ Re_{x,\rm tr} = 5\times10^5.\;}$$

**The correction matters only at modest $Re_L$.** At $Re_L = 10^6$ it removes 27% of the drag; at $10^8$, under 1% — because the laminar run is a vanishing fraction of the plate.

**Admissible roughness.** Roughness of height $k$ is *hydraulically smooth* if it stays inside the viscous sublayer:

$$\boxed{\;k_{\rm adm}\approx\frac{100\,\nu}{U}.\;}$$

At $U = 60$ m/s in air this is $25\ \mu$m — **finer than a fingerprint ridge.**

**Where the $0.37$ comes from.** Feeding the $1/7$ profile and the empirical wall law $\tau_w = 0.0225\rho U^2\left(\nu/(U\delta)\right)^{1/4}$ into the momentum integral of [3.1](03-01-boundary-layers-momentum-integral.md) gives $\delta/x = 0.3707/Re_x^{1/5}$ and $c_f = 0.0577/Re_x^{1/5}$ — Example 2 works this through.

**Note that the wall stress had to be supplied empirically.** The $1/7$ profile has infinite slope at $y = 0$, so $\tau_w = \mu\,\partial u/\partial y|_0$ is useless. **The power law describes the outer 99% of the layer and lies about the sublayer**, which is why turbulent boundary-layer theory is correlational in a way laminar theory is not.

## Picture

![A two-panel figure. Left panel: laminar and turbulent velocity profiles drawn on the same axes with velocity u over U horizontal and wall distance y over delta vertical. The laminar Blasius profile rises gradually in a smooth S-curve; the turbulent one-seventh-power profile rises very steeply near the wall then flattens, reaching ninety percent of free stream at less than half the height. The steeper wall slope of the turbulent profile is marked with a tangent line and labelled higher tau sub w, more friction; the fuller shape is shaded and labelled more near-wall momentum, resists separation. A very thin strip at the very bottom of the turbulent profile is marked viscous sublayer, with a small roughness bump drawn inside it labelled hidden and a taller one poking through labelled tripping. Right panel: skin-friction coefficient plotted against Reynolds number on log-log axes, showing the laminar line of slope minus one half labelled 1.328 over root Re, the turbulent line of shallower slope labelled 0.074 over Re to the one fifth, a vertical dashed line at Reynolds number five times ten to the fifth marking transition, and a curved mixed line that follows the laminar branch, jumps up at transition, and merges with the turbulent branch at high Reynolds number.](assets/03-02-fig1.svg)

Left: the two profiles, and the entire trade in one picture — the turbulent layer costs friction at the wall and buys momentum for the fight against pressure.

Right: skin friction versus Reynolds number, with the jump at transition. Note that the turbulent line falls off much more slowly, so at high $Re$ friction stops being cheap.

## Worked examples

**Example 1 (a plate at $Re_L = 10^7$, three ways).** Air ($\nu = 1.5\times10^{-5}$ m²/s) at $U = 50$ m/s over a plate of length $L = 3.0$ m, so $Re_L = 50(3.0)/1.5\times10^{-5} = 1.00\times10^7$ and $Re_L^{1/5} = 25.119$.

*Where does transition happen?*

$$x_{\rm tr} = \frac{5\times10^5(1.5\times10^{-5})}{50} = 0.150\ \mathrm{m},$$

**5% of the plate length.** The remaining 95% is turbulent.

*Boundary-layer thickness at the trailing edge.*

$$\delta_{\rm turb} = \frac{0.37(3.0)}{25.119} = 44.2\ \mathrm{mm}, \qquad \text{versus}\qquad \delta_{\rm lam} = \frac{5.0(3.0)}{\sqrt{10^7}} = 4.7\ \mathrm{mm}.$$

**Nearly ten times thicker.** A turbulent layer grows roughly linearly ($x^{4/5}$) rather than as $\sqrt{x}$.

*Friction coefficients.*

| Assumption | $C_f$ | $D'$ (one side) |
|---|---|---|
| Laminar throughout (fictional) | $1.328/\sqrt{10^7} = 4.20\times10^{-4}$ | 1.93 N/m |
| Fully turbulent | $0.074/25.119 = 2.946\times10^{-3}$ | 13.53 N/m |
| **Mixed (correct)** | $2.946\times10^{-3}-1742/10^7 = \mathbf{2.772\times10^{-3}}$ | **12.73 N/m** |
| Schlichting | $0.455/(7)^{2.58} = 3.004\times10^{-3}$ | 13.80 N/m |

*(using $q_\infty = \tfrac12(1.225)(2500) = 1531.3$ Pa and $D' = C_fq_\infty L$.)*

*Reading it.* Four points:

**Turbulence costs a factor of seven in friction.** $2.77\times10^{-3}$ against $4.20\times10^{-4}$ — and this is the fundamental reason drag reduction research obsesses over keeping flow laminar.

**The mixed correction is worth 6%.** Subtracting $1742/Re_L = 1.74\times10^{-4}$ from $2.946\times10^{-3}$ removes 5.9%. At this Reynolds number the laminar run is a real but minor saving; at $Re_L = 10^6$ it would be worth 27%.

**The two turbulent correlations differ by 2%.** The power law and Schlichting bracket the truth; either is fine at $10^7$, but only Schlichting should be used above about $10^8$.

**Absolute magnitude:** 12.7 N/m per side. On a 3 m by 1 m panel that is 25 N of friction from both sides, at a dynamic pressure of 1.5 kPa. Small forces — but multiplied over an entire airframe's wetted area they are the largest single drag item on a subsonic transport.

*What laminar flow would be worth.* If the whole plate could be kept laminar, the drag would fall from 12.73 to 1.93 N/m — an **85% reduction**. That prize is why natural-laminar-flow airfoils and active suction systems exist, and why they are so hard: keeping $Re_x$ below $5\times10^5$ over 3 m at 50 m/s is impossible, so the alternative is to delay transition with a favourable pressure gradient over as much of the chord as the airfoil's lift will allow.

**Example 2 (deriving the turbulent constants from the momentum integral).** Apply the [3.1](03-01-boundary-layers-momentum-integral.md) method to a turbulent layer.

*The two ingredients.* The $1/7$ profile gives

$$\frac{\theta}{\delta} = \int_0^1\eta^{1/7}\left(1-\eta^{1/7}\right)d\eta = \frac78-\frac79 = \frac{63-56}{72} = \frac{7}{72} = 0.097222,$$

and — since the profile's wall slope is infinite and therefore useless — the empirical wall law

$$\tau_w = 0.0225\,\rho U^2\left(\frac{\nu}{U\delta}\right)^{1/4}.$$

*Integrate.* With zero pressure gradient, $d\theta/dx = \tau_w/(\rho U^2)$:

$$0.097222\frac{d\delta}{dx} = 0.0225\left(\frac{\nu}{U}\right)^{1/4}\delta^{-1/4},$$

$$\delta^{1/4}d\delta = 0.231429\left(\frac{\nu}{U}\right)^{1/4}dx \quad\Longrightarrow\quad \frac45\delta^{5/4} = 0.231429\left(\frac{\nu}{U}\right)^{1/4}x,$$

$$\delta^{5/4} = 0.289286\left(\frac{\nu}{U}\right)^{1/4}x \quad\Longrightarrow\quad \delta = 0.289286^{4/5}\left(\frac{\nu}{U}\right)^{1/5}x^{4/5},$$

$$\boxed{\frac{\delta}{x} = \frac{0.3707}{Re_x^{1/5}}}\qquad\text{(standard value: }0.37\text{)}.$$

*Skin friction.*

$$c_f = \frac{2\tau_w}{\rho U^2} = 0.045\left(\frac{\nu}{U\delta}\right)^{1/4}, \qquad \frac{U\delta}{\nu} = Re_x\frac{\delta}{x} = 0.3707\,Re_x^{4/5},$$

$$c_f = \frac{0.045}{0.3707^{1/4}}Re_x^{-1/5} = \frac{0.05767}{Re_x^{1/5}} \qquad\text{(standard: }0.0592\text{)}.$$

$$C_f = \frac{1}{L}\int_0^Lc_f\,dx = \frac54c_f(L) = \frac{0.07209}{Re_L^{1/5}} \qquad\text{(standard: }0.074\text{)}.$$

**All three constants land within 3% of the accepted values**, from one profile guess and one empirical wall law.

*What is and is not a derivation here.* The **momentum balance is exact**; the **profile shape is a guess** that turns out to be good; the **wall law is empirical** and is doing real work — it contains everything about the viscous sublayer that the power law cannot represent.

**That last point separates turbulent from laminar boundary-layer theory.** Blasius is a genuine solution of the Navier–Stokes equations, obtained with no experimental input. There is no such solution for a turbulent layer, and there will not be one: turbulence is unclosed. **Everything in this lesson is correlation dressed in the language of derivation** — reliable within its validated range, and untrustworthy outside it.

*A useful check on the $x$-dependence.* Note $\delta\propto x^{4/5}$ against the laminar $x^{1/2}$, and $c_f\propto x^{-1/5}$ against $x^{-1/2}$. The turbulent layer thickens faster and its friction decays more slowly — **which is why the friction advantage of high Reynolds number, so dramatic for laminar flow, is much weaker once the layer trips.**

## Watch out

- **You might treat $Re_{x,\rm tr} = 5\times10^5$ as physics.** It is a convention spanning at least $10^5$ to $3\times10^6$ in reality, depending on roughness, noise, and pressure gradient.
- **You might apply $C_f = 0.074/Re_L^{1/5}$ above $10^7$.** Use Schlichting there.
- **You might forget the mixed correction.** At $Re_L$ near $10^6$ it changes the answer by a quarter.
- **You might compute $\tau_w$ from the $1/7$ profile.** Its slope at the wall is infinite. Turbulent wall stress always comes from a correlation.
- **You might think tripping the boundary layer is always bad.** It raises friction but delays separation, and on a bluff body or a low-Reynolds-number airfoil that trade is strongly favourable ([3.3](03-03-separation-stall-drag-polar.md)).
- **You might apply the flat-plate correlations to a strongly curved surface.** They assume zero pressure gradient; a real airfoil's gradient changes both the transition point and the friction level.
- **You might confuse a *thicker* turbulent layer with a *slower* one.** The turbulent layer is thicker overall but *faster* close to the wall, which is exactly the point.

## One-liner

> Above $Re_x\approx5\times10^5$ the layer trips, the profile fills out to roughly $(y/\delta)^{1/7}$, the shape factor drops from 2.59 to 1.29, and skin friction jumps by three to seven times to $C_f\approx0.074/Re_L^{1/5}$ — a price paid in exchange for the near-wall momentum that keeps the flow attached.

## Problems

**P1 (🟢)** Air ($\nu = 1.5\times10^{-5}$ m²/s) flows at $U = 40$ m/s over a flat plate of length $L = 2.0$ m at sea level. (a) Find $Re_L$ and the transition point. (b) Find $\delta$ at the trailing edge, assuming turbulent flow. (c) Find $c_f$ at the trailing edge and the fully-turbulent $C_f$. (d) Find $C_f$ with the mixed correction and the friction drag per unit width on one side.

**P2 (🟡)** (a) At $Re_L = 10^6$, compare the laminar and fully-turbulent $C_f$ and give the ratio. (b) Find the admissible roughness height for air at $U = 30$, $60$, and $120$ m/s, and comment. (c) A wing surface is painted to a finish of $40\ \mu$m rms. At what speed does the paint start to matter? (d) Explain, using the shape factor, how you would tell from a measured velocity profile whether a boundary layer had tripped.

**P3 (🔴)** *(Boss problem 3.)* A flat-plate wing section of chord $c = 1.5$ m flies at $V_\infty = 60$ m/s in sea-level air. (a) Compute the chord Reynolds number and locate the laminar-to-turbulent transition point, assuming $Re_{x,\rm tr} = 5\times10^5$. (b) Estimate the average skin-friction coefficient treating the plate as laminar up to transition and turbulent after, and find the friction drag per unit span counting both surfaces. (c) The airfoil is then flown at high $\alpha$ and the upper-surface flow separates at 40% chord — explain qualitatively how $C_L$ and $C_D$ change, and which term of the drag polar now dominates.

<details>
<summary>Solutions</summary>

**P1** (a) $$Re_L = \frac{40(2.0)}{1.5\times10^{-5}} = \frac{80}{1.5\times10^{-5}} = 5.333\times10^6.$$

$$x_{\rm tr} = \frac{5\times10^5(1.5\times10^{-5})}{40} = \frac{7.5}{40} = 0.1875\ \mathrm{m} \quad(9.4\%\ \text{of the plate}).$$

(b) $$Re_L^{1/5} = (5.333\times10^6)^{0.2} = 22.151,$$

$$\delta = \frac{0.37(2.0)}{22.151} = 0.0334\ \mathrm{m} = 33.4\ \mathrm{mm}.$$

(c) $$c_f(L) = \frac{0.0592}{22.151} = 2.673\times10^{-3}, \qquad C_f = \frac{0.074}{22.151} = 3.341\times10^{-3}.$$

(d) $$C_f = 3.341\times10^{-3}-\frac{1742}{5.333\times10^6} = 3.341\times10^{-3}-3.266\times10^{-4} = 3.014\times10^{-3}.$$

$$q_\infty = \tfrac12(1.225)(1600) = 980.0\ \mathrm{Pa}, \qquad D' = 3.014\times10^{-3}(980.0)(2.0) = 5.91\ \mathrm{N/m}.$$

*(The fully-turbulent value would give $6.55$ N/m — the laminar run is worth 10% here.)*

**P2** (a) $$C_{f,\rm lam} = \frac{1.328}{\sqrt{10^6}} = \frac{1.328}{1000} = 1.328\times10^{-3},$$
$$C_{f,\rm turb} = \frac{0.074}{(10^6)^{0.2}} = \frac{0.074}{15.849} = 4.669\times10^{-3}.$$

$$\text{ratio} = \frac{4.669}{1.328} = 3.52.$$

**Turbulent friction is 3.5 times laminar at this Reynolds number** — and the ratio grows with $Re$, because the two curves have different slopes ($Re^{-1/2}$ versus $Re^{-1/5}$).

(b) $$k_{\rm adm} = \frac{100\nu}{U} = \frac{100(1.5\times10^{-5})}{U} = \frac{1.5\times10^{-3}}{U}\ \mathrm{m}.$$

| $U$ (m/s) | $k_{\rm adm}$ |
|---|---|
| 30 | $50\ \mu$m |
| 60 | $25\ \mu$m |
| 120 | $12.5\ \mu$m |

*Comment.* These are extraordinarily small tolerances. **A human hair is about $70\ \mu$m**, so at any of these speeds a single hair lying on the wing protrudes well beyond the sublayer. At 120 m/s the admissible height is comparable to the thickness of a coat of paint.

The consequence is that a real aircraft surface is essentially never hydraulically smooth in the strict sense — rivets, panel gaps, insect residue, and paint texture all exceed $k_{\rm adm}$. Designers accept this and account for it with a **surface-finish drag increment**, typically 5–10% on the friction drag. **The exceptions are sailplanes and laminar-flow demonstrators**, where the wing is a polished composite moulding and a squashed insect on the leading edge measurably degrades performance — glider pilots really do fit bug-wipers.

(c) $$k = 40\ \mu\mathrm{m} = k_{\rm adm} = \frac{1.5\times10^{-3}}{U} \quad\Longrightarrow\quad U = \frac{1.5\times10^{-3}}{4.0\times10^{-5}} = 37.5\ \mathrm{m/s}.$$

**Above about 38 m/s (135 km/h) the paint finish begins to protrude through the sublayer** and contributes drag. Below that it is invisible to the flow.

(d) *Use the shape factor $H = \delta^*/\theta$.* From a measured $u(y)$ profile, compute both integrals numerically and take the ratio:

$$H\approx2.6 \Rightarrow \text{laminar (Blasius)}, \qquad H\approx1.3\text{–}1.4 \Rightarrow \text{turbulent}, \qquad H\gtrsim2.5\text{ rising} \Rightarrow \text{approaching separation}.$$

**The discrimination is unambiguous** because the two values differ by a factor of two, far more than measurement scatter.

*Why $H$ and not $\delta$ or $\theta$ individually.* $H$ is **dimensionless and normalized** — it depends only on the *shape* of the profile, not on its thickness or the free-stream speed. Two layers at completely different Reynolds numbers and thicknesses have the same $H$ if they have the same profile shape. That makes it the natural state variable.

*The practical caution.* A laminar layer in a strong adverse gradient also has $H$ rising toward 3.5, so a *high* $H$ alone is ambiguous between "laminar" and "about to separate." The clean signature of turbulence is $H$ **dropping** to near 1.3 — and in an experiment the drop is usually sudden and unmistakable as the probe traverses downstream through the transition region.

**P3** (a) $$Re_c = \frac{V_\infty c}{\nu} = \frac{60(1.5)}{1.5\times10^{-5}} = \frac{90}{1.5\times10^{-5}} = 6.00\times10^6.$$

$$x_{\rm tr} = \frac{Re_{x,\rm tr}\,\nu}{V_\infty} = \frac{5\times10^5(1.5\times10^{-5})}{60} = \frac{7.5}{60} = 0.125\ \mathrm{m},$$

$$\frac{x_{\rm tr}}{c} = \frac{0.125}{1.5} = 0.0833 = \mathbf{8.3\%\ of\ chord}.$$

**Only the first 8% of the surface is laminar**, which is why full-scale aircraft are treated as turbulent almost everywhere.

(b) $$Re_c^{1/5} = (6.00\times10^6)^{0.2} = 22.679.$$

$$C_f = \frac{0.074}{22.679}-\frac{1742}{6.00\times10^6} = 3.2628\times10^{-3}-2.9033\times10^{-4} = 2.9725\times10^{-3}.$$

*(For comparison: fully turbulent $3.263\times10^{-3}$; fully laminar $1.328/\sqrt{6\times10^6} = 5.42\times10^{-4}$.)*

$$q_\infty = \tfrac12(1.225)(3600) = 2205\ \mathrm{Pa}.$$

*Per side:* $D' = C_fq_\infty c = 2.9725\times10^{-3}(2205)(1.5) = 9.83$ N/m.

*Both surfaces:* $$D'_{\rm total} = 2(9.83) = 19.66\ \mathrm{N/m}, \qquad c_{d,\rm friction} = 2C_f = 5.945\times10^{-3}.$$

**A section drag coefficient of about 0.0059 from friction alone**, which is squarely in the range measured for clean attached airfoils — a good sign that the flat-plate estimate is capturing the dominant physics.

(c) *What happens when the upper surface separates at 40% chord.*

**$C_L$ falls, and falls sharply.** The rear 60% of the upper surface can no longer sustain its suction — downstream of separation the pressure simply flattens at roughly the separation value instead of recovering. Since lift is the area between the upper and lower $C_p$ curves ([1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)), removing the rear suction removes a large fraction of it. This is **stall**: $C_L$ stops following $2\pi\alpha$, peaks, and then drops.

**$C_D$ rises, and rises enormously.** Two mechanisms:

*Pressure drag appears.* With the rear pressure recovery destroyed, the front of the airfoil is no longer balanced by the rear — exactly the cylinder situation of [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md), Example 2. The section acquires a bluff-body drag of order $c_d\approx0.05$–$0.2$, one to two **orders of magnitude** above the 0.0059 computed in (b).

*Induced drag rises too, then collapses with the lift.* Just before stall $C_L$ is at its peak, so $C_L^2/(\pi eAR)$ is at its peak too; past the stall, $C_L$ falls and the induced term falls with it — but by then the pressure term dwarfs both.

**Which term dominates.** In the drag polar

$$C_D = \underbrace{C_{D,0}}_{\text{friction + form}}+\underbrace{\frac{C_L^2}{\pi eAR}}_{\text{induced}},$$

the polar itself **stops being valid at stall** — it is a fit to attached-flow data. What happens physically is that $C_{D,0}$ is no longer a constant: it jumps by an order of magnitude as the separation bubble opens, and it is that jump, not the induced term, which dominates.

*The quantitative picture.*

| Condition | $c_{d,\rm friction}$ | $c_{d,\rm pressure}$ | Total |
|---|---|---|---|
| Attached, low $\alpha$ | 0.0059 | $\approx0.001$ | $\approx0.007$ |
| Separated at 40% chord | $\approx0.004$ | $\approx0.10$ | $\approx0.10$ |

**Friction drag actually goes *down* slightly** when the flow separates, because the separated region has near-zero wall shear — there is no attached flow there to rub. **And it does not matter at all**, because pressure drag has multiplied the total by fifteen.

*The design conclusion.* Every effort in Module 3 is aimed at keeping the flow attached, and the reason is arithmetic: skin friction is a few thousandths and separation is a few tenths. **Losing attachment costs more than every other aerodynamic sin combined**, which is why a turbulent boundary layer — expensive in friction, resistant to separation — is very often the right choice.

</details>

## Flashback

**From Lesson 3.1 (Boundary layers recalled, and the momentum integral):** Air ($\nu = 1.5\times10^{-5}$ m²/s) flows at $U = 12$ m/s over a plate of length $L = 0.5$ m at sea level. (a) Confirm the flow is laminar and find $\theta$ at the trailing edge. (b) Find the friction drag per unit width on one side from $\theta$. (c) Find $\delta^*$ and $H$. (d) State von Kármán's momentum integral and reduce it to the flat-plate case.

<details>
<summary>Solution</summary>

(a) $$Re_L = \frac{12(0.5)}{1.5\times10^{-5}} = \frac{6.0}{1.5\times10^{-5}} = 4.00\times10^5<5\times10^5 \quad\checkmark\ \text{laminar}.$$

$$\sqrt{Re_L} = 632.46, \qquad \theta = \frac{0.664(0.5)}{632.46} = 5.249\times10^{-4}\ \mathrm{m} = 0.525\ \mathrm{mm}.$$

(b) $$D' = \rho U^2\theta = 1.225(144)(5.249\times10^{-4}) = 0.09260\ \mathrm{N/m}.$$

*Check via $C_f$:* $C_f = 1.328/632.46 = 2.100\times10^{-3}$; $q_\infty = \tfrac12(1.225)(144) = 88.2$ Pa; $D' = 2.100\times10^{-3}(88.2)(0.5) = 0.09260$ N/m ✓

(c) $$\delta^* = \frac{1.721(0.5)}{632.46} = 1.3606\times10^{-3}\ \mathrm{m} = 1.361\ \mathrm{mm}, \qquad H = \frac{1.3606}{0.52494} = 2.592.$$

(d) $$\frac{d\theta}{dx}+\left(2\theta+\delta^*\right)\frac{1}{U}\frac{dU}{dx} = \frac{c_f}{2},$$

and for a flat plate ($dU/dx = 0$) this reduces to

$$\frac{d\theta}{dx} = \frac{c_f}{2}.$$

*The bridge to this lesson.* Compare this laminar case with the same plate run turbulent. At $Re_L = 4\times10^5$ the plate is genuinely laminar — but push the speed to $60$ m/s and $Re_L = 2\times10^6$, past transition, and the same 0.5 m plate would have

$$C_f = \frac{0.074}{(2\times10^6)^{0.2}}-\frac{1742}{2\times10^6} = \frac{0.074}{18.206}-8.71\times10^{-4} = 4.064\times10^{-3}-8.71\times10^{-4} = 3.193\times10^{-3},$$

against the laminar formula's $1.328/\sqrt{2\times10^6} = 9.39\times10^{-4}$.

**A factor of 3.4 in friction, from nothing but the flow deciding to trip.** And the shape factor would fall from 2.59 to about 1.29, halving.

*What carries over unchanged.* The momentum integral. $d\theta/dx = c_f/2$ holds for a turbulent layer exactly as for a laminar one — it is a statement of momentum conservation and does not care what the fluid is doing internally. **What changes is only the closure**: laminar flow supplies $\tau_w$ from Blasius, turbulent flow supplies it from an empirical wall law. The framework of [3.1](03-01-boundary-layers-momentum-integral.md) is untouched.

</details>

## Connections

- **Backward:** the momentum integral being fed turbulent ingredients is [3.1](03-01-boundary-layers-momentum-integral.md)'s; the laminar constants being replaced are [`fluid-dynamics` 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md)'s; the instability mechanism behind transition is [`fluid-dynamics` 4.4](../../fluid-dynamics/lessons/04-04-transition-to-turbulence.md)'s.
- **Forward:** [3.3](03-03-separation-stall-drag-polar.md) cashes in the turbulent layer's separation resistance and assembles the complete drag polar; [4.7](04-07-supersonic-airfoils-wave-drag-sweep.md) adds a drag mechanism that is neither friction nor separation.
- **Sideways:** the $1/7$ power law and the log law are the aerodynamic face of **wall-bounded turbulence**, whose energy cascade and Kolmogorov scaling are [`fluid-dynamics` 4.5](../../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md)'s; the same correlations, in pipe form (the Moody chart, with its hydraulically-smooth and fully-rough branches), are what [`transport-phenomena`](../../transport-phenomena/syllabus.md) uses to size every pipe in a chemical plant.
