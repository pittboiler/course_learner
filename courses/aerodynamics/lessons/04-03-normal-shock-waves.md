# Aerodynamics · Lesson 4.3: Normal shock waves

> ⏱ ~15 min · Module 4: Compressible and supersonic flow · Builds on: [4.2 Isentropic and stagnation relations](04-02-isentropic-stagnation-relations.md) · Unlocks: [4.4 Oblique shocks and Prandtl–Meyer expansion](04-04-oblique-shocks-prandtl-meyer.md), [4.5 Quasi-1-D nozzle flow](04-05-quasi-1d-nozzle-flow.md)

## Why this matters

A shock wave is the most violent thing that happens in aerodynamics and one of the most useful. Across a region a few molecular mean free paths thick — under a micrometre at sea level — the flow decelerates from supersonic to subsonic, the pressure jumps by a factor of 4.5 at $M = 2$, the temperature by 1.7, and **28% of the stagnation pressure vanishes.**

That loss is the whole story of supersonic inlet design, and it grows brutally: at $M = 3$ a normal shock destroys 67% of $p_0$, at $M = 5$, 94%. **An engine cannot be fed through a single normal shock at high Mach number**, which is why supersonic inlets look the way they do.

Shocks also carry the deepest physics in this course. The relations are pure conservation laws — mass, momentum, energy — and they admit *two* mathematical solutions, of which the second law forbids one. **It is the clearest example in engineering of thermodynamics selecting reality from among the possibilities the mechanics allows.**

## The idea

**Supersonic flow cannot be warned.** A disturbance propagates at $a$; the flow moves at $V>a$. So the fluid ahead of an obstacle receives no advance notice and cannot begin adjusting. When it arrives, it must adjust **all at once** — and that discontinuity is a shock.

**Shocks form by wave coalescence.** A compression raises the local temperature, hence the local sound speed, so each compression wave travels slightly faster than the one ahead of it. Compression waves therefore **catch up and pile into a single steep front**. Expansion waves do the opposite — they spread apart, which is why expansions are smooth and gradual ([4.4](04-04-oblique-shocks-prandtl-meyer.md)).

**The shock's thickness is set by the balance of steepening and diffusion.** Nonlinear steepening tries to make the front infinitely thin; viscosity and heat conduction resist. They balance at a few mean free paths, which for aerodynamic purposes is zero. **We treat the shock as a discontinuity and never look inside it.**

**And we do not need to.** Apply mass, momentum, and energy conservation to a control volume straddling the shock, and the internal details cancel — exactly as in the wake-survey argument of [3.1](03-01-boundary-layers-momentum-integral.md). Whatever happens inside, the jump conditions are fixed.

**Two solutions come out; one is real.** The algebra gives a trivial solution (no shock) and a nontrivial one. The nontrivial one has $\Delta s>0$ only if $M_1>1$. **An "expansion shock," taking subsonic flow to supersonic, would decrease entropy** and is therefore forbidden. Shocks are strictly compressive, and they always turn supersonic flow subsonic.

**$T_0$ survives, $p_0$ does not** — the asymmetry established in [4.1](04-01-compressibility-sound-speed-energy.md) and [4.2](04-02-isentropic-stagnation-relations.md), and here it becomes quantitative.

## The formal version

**The jump conditions.** Across a stationary normal shock (subscript 1 upstream, 2 downstream):

$$\rho_1u_1 = \rho_2u_2, \qquad p_1+\rho_1u_1^2 = p_2+\rho_2u_2^2, \qquad h_1+\frac{u_1^2}{2} = h_2+\frac{u_2^2}{2}.$$

**Solving them** (for a calorically perfect gas) gives everything in terms of $M_1$:

$$\boxed{\;M_2^2 = \frac{1+\frac{\gamma-1}{2}M_1^2}{\gamma M_1^2-\frac{\gamma-1}{2}}\;}$$

$$\boxed{\;\frac{p_2}{p_1} = 1+\frac{2\gamma}{\gamma+1}\left(M_1^2-1\right), \qquad \frac{\rho_2}{\rho_1} = \frac{u_1}{u_2} = \frac{(\gamma+1)M_1^2}{(\gamma-1)M_1^2+2}, \qquad \frac{T_2}{T_1} = \frac{p_2}{p_1}\frac{\rho_1}{\rho_2}.\;}$$

$$\boxed{\;T_{0,2} = T_{0,1}, \qquad \frac{p_{0,2}}{p_{0,1}} = e^{-\Delta s/R}<1.\;}$$

**The working table** (air, $\gamma = 1.4$):

| $M_1$ | $M_2$ | $p_2/p_1$ | $\rho_2/\rho_1$ | $T_2/T_1$ | $p_{0,2}/p_{0,1}$ | $\Delta s$ (J/kg·K) |
|---|---|---|---|---|---|---|
| 1.2 | 0.8422 | 1.513 | 1.342 | 1.128 | 0.9928 | 2.07 |
| 1.5 | 0.7011 | 2.458 | 1.862 | 1.320 | 0.9298 | 20.9 |
| **2.0** | **0.5774** | **4.500** | **2.667** | **1.688** | **0.7209** | **93.9** |
| 2.5 | 0.5130 | 7.125 | 3.333 | 2.138 | 0.4990 | 199.5 |
| 3.0 | 0.4752 | 10.333 | 3.857 | 2.679 | 0.3283 | 319.6 |
| 5.0 | 0.4152 | 29.000 | 5.000 | 5.800 | 0.0617 | 799.4 |

**Read the last two columns and the design problem is obvious.** A weak shock ($M_1 = 1.2$) is almost free — 0.7% of $p_0$. A strong one is ruinous.

**Prandtl's relation.** A compact and beautiful result:

$$\boxed{\;u_1u_2 = a^{*2},\;}$$

where $a^*$ is the sonic speed corresponding to the (common) stagnation temperature. *In words: the upstream and downstream speeds are geometric-mean-reciprocal about the sonic speed.* Since $u_1>a^*$, necessarily $u_2<a^*$ — **the downstream flow is always subsonic**, which follows from one line of algebra rather than from inspecting a table.

**Limiting behaviour as $M_1\to\infty$:**

$$\frac{\rho_2}{\rho_1}\to\frac{\gamma+1}{\gamma-1} = 6, \qquad M_2\to\sqrt{\frac{\gamma-1}{2\gamma}} = 0.378, \qquad \frac{p_2}{p_1}\to\infty, \qquad \frac{T_2}{T_1}\to\infty.$$

**Density saturates at a factor of six** — a perfect gas cannot be compressed further by a shock however strong, because the temperature rise defeats the pressure rise. (Real gases exceed this because dissociation absorbs energy and lowers the effective $\gamma$, which is why hypersonic shock layers are thinner than perfect-gas theory predicts.)

**Rayleigh pitot formula.** A pitot tube in supersonic flow has a bow shock ahead of it, so it reads $p_{0,2}$, not $p_{0,1}$:

$$\frac{p_{0,2}}{p_1} = \left[\frac{(\gamma+1)^2M_1^2}{4\gamma M_1^2-2(\gamma-1)}\right]^{\frac{\gamma}{\gamma-1}}\frac{1-\gamma+2\gamma M_1^2}{\gamma+1}.$$

**Using the isentropic formula instead would badly overestimate $M_1$** — see P3.

## Picture

![A two-panel figure. Left panel: a normal shock drawn as a thin vertical band across a duct, with supersonic flow arriving from the left at Mach number greater than one, shown by long widely-spaced streamline arrows, and subsonic flow leaving to the right with short crowded arrows. Above the duct, four strip plots track pressure jumping up, temperature jumping up, density jumping up, and Mach number dropping through one, all as sharp steps at the shock. Below the duct, two more strips show stagnation temperature running flat and continuous straight through the shock, labelled first law, conserved, and stagnation pressure stepping downward, labelled second law, destroyed. Right panel: stagnation pressure ratio across a normal shock plotted against upstream Mach number, a curve starting at one at Mach one, staying above 0.99 to about Mach 1.3, then falling steeply through 0.72 at Mach two and 0.33 at Mach three toward 0.06 at Mach five, with a shaded band below Mach 1.3 labelled weak shocks are nearly free and an annotation at Mach three reading two thirds of the available energy gone in one discontinuity.](assets/04-03-fig1.svg)

Left: what jumps and what does not. The bottom two strips are the whole thermodynamic story.

Right: why supersonic inlets are complicated. The curve's steepness above $M = 1.5$ is what forces designers to break one strong shock into several weak ones.

## Worked examples

**Example 1 (a normal shock at $M_1 = 2$, completely worked).** Air at $p_1 = 20$ kPa, $T_1 = 220$ K, $M_1 = 2.0$ passes through a stationary normal shock.

*Upstream state.*

$$a_1 = \sqrt{1.4(287)(220)} = 297.3\ \mathrm{m/s}, \qquad u_1 = 594.6\ \mathrm{m/s}, \qquad \rho_1 = \frac{20{,}000}{287(220)} = 0.31676\ \mathrm{kg/m^3}.$$

$$T_{0,1} = 220(1.8) = 396.0\ \mathrm{K}, \qquad p_{0,1} = 20(1.8)^{3.5} = 156.49\ \mathrm{kPa}.$$

*The jump.*

$$M_2^2 = \frac{1+0.2(4)}{1.4(4)-0.2} = \frac{1.8}{5.4} = 0.33333, \qquad M_2 = 0.5774.$$

$$\frac{p_2}{p_1} = 1+\frac{2.8}{2.4}(3) = 1+3.5 = 4.500 \quad\Longrightarrow\quad p_2 = 90.0\ \mathrm{kPa}.$$

$$\frac{\rho_2}{\rho_1} = \frac{2.4(4)}{0.4(4)+2} = \frac{9.6}{3.6} = 2.6667 \quad\Longrightarrow\quad \rho_2 = 0.84468\ \mathrm{kg/m^3}.$$

$$\frac{T_2}{T_1} = \frac{4.500}{2.6667} = 1.6875 \quad\Longrightarrow\quad T_2 = 371.25\ \mathrm{K}.$$

*Downstream velocity.*

$$a_2 = \sqrt{1.4(287)(371.25)} = 386.2\ \mathrm{m/s}, \qquad u_2 = 0.5774(386.2) = 223.0\ \mathrm{m/s}.$$

*Check mass conservation:* $\rho_1u_1 = 0.31676(594.6) = 188.35$; $\rho_2u_2 = 0.84468(223.0) = 188.35$ kg/(m²·s) ✓

*Check Prandtl's relation:* $a^* = \sqrt{\gamma R(2/2.4)T_0} = \sqrt{1.4(287)(0.8333)(396.0)} = 364.1$ m/s, and

$$u_1u_2 = 594.6(223.0) = 132{,}594 = a^{*2} = 364.1^2 = 132{,}594 \quad\checkmark$$

*The stagnation properties.*

$$T_{0,2} = T_2\left(1+0.2M_2^2\right) = 371.25(1.06667) = 396.0\ \mathrm{K} = T_{0,1} \quad\checkmark$$

$$p_{0,2} = p_2\left(1.06667\right)^{3.5} = 90.0(1.2534) = 112.81\ \mathrm{kPa}, \qquad \frac{p_{0,2}}{p_{0,1}} = \frac{112.81}{156.49} = 0.7209.$$

$$\Delta s = -R\ln(0.7209) = -287(-0.32729) = 93.9\ \mathrm{J/(kg\cdot K)}.$$

*Reading it.* The flow lost nothing in energy and 28% in usefulness. Its temperature rose by 151 K, its pressure by a factor of 4.5, and its speed fell by 62% — all in a distance smaller than a wavelength of light.

**And the temperature rise is free heating with no fuel.** That is how a ramjet's inlet compresses and heats its air ([`propulsion` 2.2](../../propulsion/lessons/02-02-ideal-ramjet.md)) — a shock system does the job of a compressor with no moving parts. The price is the entropy.

**Example 2 (why a supersonic inlet is not just a hole).** An engine flying at $M_\infty = 2.0$ at 11 km ($p_\infty = 22.6$ kPa, $T_\infty = 216.65$ K) must deliver air to the compressor face at low subsonic speed.

*Option A — a single normal shock.* From the table, $p_{0,2}/p_{0,1} = 0.7209$: the inlet recovers **72% of the stagnation pressure**, discarding 28%.

*What that costs.* Net thrust is roughly proportional to the nozzle's expansion ratio, which depends on $p_0$ at the turbine exit. A useful engineering rule is that **1% of inlet pressure recovery is worth about 1.5% of net thrust**. Losing 28% therefore costs something like 40% of the thrust — an unacceptable penalty.

*Option B — two oblique shocks plus a weak normal shock.* Suppose the flow is turned twice, decelerating from $M = 2.0$ to $M = 1.6$ and then to $M = 1.25$, with the oblique shocks having normal Mach components of roughly 1.35 and 1.25, and finishing with a normal shock at $M = 1.25$:

$$\pi_d\approx0.970\times0.987\times0.987 = 0.945.$$

**94.5% recovery instead of 72%** — a 31% improvement in $p_0$, bought entirely by replacing one strong shock with three weak ones.

*Why splitting works.* Look at the $\Delta s$ column of the table. Entropy production scales roughly as $(M_1^2-1)^3$ for a weak shock, so **halving the strength of a shock cuts its loss by a factor of eight.** Splitting one strong compression into $n$ weak ones cuts the total loss by roughly $n^2$.

Push this to the limit — infinitely many infinitesimally weak compressions — and the loss goes to zero. **That is an isentropic compression**, and it is what a perfectly designed inlet approximates: a smoothly curved ramp generating a fan of Mach waves that focus into a single weak terminal shock.

*Why real inlets stop at two or three shocks.* The isentropic ideal requires exact geometry at exactly one Mach number. Real inlets must work over a range, must start reliably, and must not distort the flow reaching the compressor. So they use two or three ramps — often variable — and accept $\pi_d\approx0.9$.

**Concorde's inlets** used variable ramps and an auxiliary spill door, achieving about 93% recovery at $M = 2$; **the SR-71's** used a translating centre-body spike that moved 66 cm as Mach number changed. In both aircraft the inlet contributed more to net thrust than the engine itself did at cruise — the inlet compressed the air, and the turbomachinery was largely along for the ride.

## Watch out

- **You might apply isentropic relations across the shock.** They fail. Use them separately on each side, with different $p_0$.
- **You might expect $T_0$ to drop.** It does not. Only $p_0$ does.
- **You might think a shock can accelerate a subsonic flow to supersonic.** Forbidden by the second law — such a solution has $\Delta s<0$.
- **You might use the isentropic pitot formula in supersonic flow.** A bow shock stands ahead of the probe; use the Rayleigh formula (P3).
- **You might read the density limit of 6 as universal.** It is $(\gamma+1)/(\gamma-1)$, and real high-temperature air dissociates, lowering the effective $\gamma$ and allowing more compression.
- **You might forget that a shock in a duct interacts with the boundary layer.** The shock's pressure jump is a severe adverse gradient, and shock-induced separation is a major practical problem ([4.6](04-06-subsonic-compressibility-transonic.md)).
- **You might treat shock strength as linear in $M_1$.** The loss goes roughly as $(M_1^2-1)^3$ at low strength — very forgiving near $M = 1$, punishing above 1.5.

## One-liner

> Supersonic flow gets no warning, so it adjusts discontinuously: mass, momentum, and energy fix every jump in terms of $M_1$ alone, $T_0$ passes through untouched while $p_0$ is destroyed at a rate that goes roughly as $(M_1^2-1)^3$, and the second law is what forbids the expansion shock the algebra would otherwise allow.

## Problems

**P1 (🟢)** A normal shock stands in air at $M_1 = 1.5$, with $p_1 = 40$ kPa and $T_1 = 240$ K. (a) Find $M_2$. (b) Find $p_2$, $T_2$, and $\rho_2$. (c) Find $u_1$ and $u_2$. (d) Find $p_{0,1}$, $p_{0,2}$, and the entropy rise.

**P2 (🟡)** A ramjet flies at $M_\infty = 2.5$ at an altitude where $p_\infty = 26$ kPa and $T_\infty = 223$ K. Its inlet uses a single normal shock. (a) Find the conditions just downstream of the shock. (b) Find the pressure recovery $\pi_d$ and the entropy rise. (c) The flow is then diffused isentropically to $M = 0.2$ at the burner face. Find $p$, $T$, and $p_0$ there. (d) Compare the burner-face static pressure with the free-stream static pressure and comment on what the shock system has achieved.

**P3 (🔴)** A pitot probe on a supersonic aircraft reads a stagnation pressure of $p_{0,2} = 145$ kPa while a static port on the fuselage reads $p_1 = 26$ kPa. (a) Explain why the isentropic relation must not be used, and compute the (wrong) Mach number it would give. (b) Use the Rayleigh pitot formula to find the correct $M_1$, by iteration. (c) Quantify the error in (a) and explain its sign. (d) Explain why the *static* port reading is also suspect on a supersonic aircraft, and how flight-test instrumentation handles it.

<details>
<summary>Solutions</summary>

**P1** (a) $$M_2^2 = \frac{1+0.2(2.25)}{1.4(2.25)-0.2} = \frac{1.45}{2.95} = 0.49153, \qquad M_2 = 0.7011.$$

(b) $$\frac{p_2}{p_1} = 1+\frac{2.8}{2.4}\left(2.25-1\right) = 1+1.16667(1.25) = 2.4583 \quad\Longrightarrow\quad p_2 = 98.33\ \mathrm{kPa}.$$

$$\frac{\rho_2}{\rho_1} = \frac{2.4(2.25)}{0.4(2.25)+2} = \frac{5.40}{2.90} = 1.8621,$$

$$\frac{T_2}{T_1} = \frac{2.4583}{1.8621} = 1.3202 \quad\Longrightarrow\quad T_2 = 316.85\ \mathrm{K}.$$

$$\rho_1 = \frac{40{,}000}{287(240)} = 0.58072\ \mathrm{kg/m^3}, \qquad \rho_2 = 1.8621(0.58072) = 1.08134\ \mathrm{kg/m^3}.$$

*Check:* $p_2/(RT_2) = 98{,}330/(287\cdot316.85) = 1.0815$ ✓

(c) $$a_1 = \sqrt{1.4(287)(240)} = 310.5\ \mathrm{m/s}, \qquad u_1 = 1.5(310.5) = 465.8\ \mathrm{m/s},$$

$$a_2 = \sqrt{1.4(287)(316.85)} = 356.8\ \mathrm{m/s}, \qquad u_2 = 0.7011(356.8) = 250.2\ \mathrm{m/s}.$$

*Check mass:* $0.58072(465.8) = 270.50$; $1.08134(250.2) = 270.50$ kg/(m²·s) ✓

(d) $$p_{0,1} = 40(1+0.2(2.25))^{3.5} = 40(1.45)^{3.5} = 40(3.6710) = 146.84\ \mathrm{kPa},$$

$$p_{0,2} = 98.33\left(1+0.2(0.49153)\right)^{3.5} = 98.33(1.09831)^{3.5} = 98.33(1.38845) = 136.53\ \mathrm{kPa}.$$

$$\frac{p_{0,2}}{p_{0,1}} = \frac{136.53}{146.84} = 0.9298, \qquad \Delta s = -287\ln(0.9298) = 20.9\ \mathrm{J/(kg\cdot K)}.$$

**A 7% loss** — an order of magnitude less painful than the 28% at $M = 2$, which is the nonlinearity in action.

**P2** (a) $M_1 = 2.5$:

$$M_2^2 = \frac{1+0.2(6.25)}{1.4(6.25)-0.2} = \frac{2.25}{8.55} = 0.26316, \qquad M_2 = 0.5130.$$

$$\frac{p_2}{p_1} = 1+1.16667(5.25) = 7.125 \quad\Longrightarrow\quad p_2 = 7.125(26) = 185.25\ \mathrm{kPa},$$

$$\frac{\rho_2}{\rho_1} = \frac{2.4(6.25)}{0.4(6.25)+2} = \frac{15.0}{4.5} = 3.3333, \qquad \frac{T_2}{T_1} = \frac{7.125}{3.3333} = 2.1375,$$

$$T_2 = 2.1375(223) = 476.66\ \mathrm{K}.$$

(b) $$p_{0,1} = 26\left(1+0.2(6.25)\right)^{3.5} = 26(2.25)^{3.5} = 26(17.086) = 444.23\ \mathrm{kPa},$$

$$p_{0,2} = 185.25\left(1+0.2(0.26316)\right)^{3.5} = 185.25(1.05263)^{3.5} = 185.25(1.19665) = 221.68\ \mathrm{kPa},$$

$$\pi_d = \frac{221.68}{444.23} = 0.4990, \qquad \Delta s = -287\ln(0.4990) = 199.5\ \mathrm{J/(kg\cdot K)}.$$

**Half the stagnation pressure is gone.**

(c) Diffusing isentropically from $M_2 = 0.5130$ to $M = 0.2$ preserves $p_0$ and $T_0$:

$$p_{0} = 221.68\ \mathrm{kPa}, \qquad T_0 = T_{0,\infty} = 223(2.25) = 501.75\ \mathrm{K}.$$

$$1+0.2(0.04) = 1.008,$$

$$T = \frac{501.75}{1.008} = 497.77\ \mathrm{K}, \qquad p = \frac{221.68}{(1.008)^{3.5}} = \frac{221.68}{1.02833} = 215.58\ \mathrm{kPa}.$$

(d) $$\frac{p_{\rm burner}}{p_\infty} = \frac{215.58}{26} = 8.29.$$

**The inlet has compressed the air by a factor of 8.3 and heated it from 223 K to 498 K, with no moving parts.**

*What that means.* An 8.3:1 pressure ratio is comparable to the compressor of a small turbojet, and it was obtained purely by decelerating the flow. **This is the ramjet principle**, and it is why a ramjet needs no turbomachinery at all — the flight speed does the compressing.

*And what the shock cost.* Had the compression been isentropic, the burner-face pressure would have been $p_{0,\infty}/1.02833 = 444.23/1.02833 = 432.0$ kPa — **twice what was achieved.** The normal shock threw away half the compression the flight speed had made available.

**That is why no practical ramjet uses a single normal shock above about $M = 1.5$**, and why the ramjet's efficiency improves with Mach number only up to the point where inlet losses overtake the compression benefit — around $M = 5$, above which a scramjet, which never decelerates the flow to subsonic at all, becomes the only option ([`propulsion` 4.3](../../propulsion/lessons/04-03-hypersonic-airbreathing-scramjet.md)).

**P3** (a) *Why the isentropic relation fails.* At supersonic speed a **detached bow shock** stands ahead of the probe. The fluid that reaches the probe's stagnation point has passed through that shock, losing stagnation pressure. The probe therefore reads $p_{0,2}$ — the stagnation pressure *behind* the shock — while the static port reads $p_1$, the pressure *ahead* of it. **These two pressures belong to different stagnation states**, and no isentropic relation connects them.

*The wrong answer it would give.*

$$\frac{p_{0}}{p_1} = \frac{145}{26} = 5.5769 = \left(1+0.2M^2\right)^{3.5},$$

$$\left(5.5769\right)^{1/3.5} = 1.63401 \quad\Longrightarrow\quad 0.2M^2 = 0.63401 \quad\Longrightarrow\quad M = \sqrt{3.17005} = 1.780.$$

(b) *Rayleigh pitot formula.*

$$\frac{p_{0,2}}{p_1} = \left[\frac{(\gamma+1)^2M_1^2}{4\gamma M_1^2-2(\gamma-1)}\right]^{3.5}\frac{2\gamma M_1^2-(\gamma-1)}{\gamma+1} = \left[\frac{5.76M_1^2}{5.6M_1^2-0.8}\right]^{3.5}\frac{2.8M_1^2-0.4}{2.4}.$$

*Iterating on the target $5.5769$:*

| $M_1$ | $p_{0,2}/p_1$ |
|---|---|
| 1.780 | 4.5782 |
| 1.95 | 5.3878 |
| 2.00 | 5.6404 |
| 1.985 | 5.5640 |
| 1.988 | 5.5792 |

$$\boxed{M_1 = 1.988.}$$

*(Working the last row: $M_1^2 = 3.9521$; $5.76(3.9521) = 22.764$; $5.6(3.9521)-0.8 = 21.332$; ratio $1.06715$; $1.06715^{3.5} = 1.25540$. And $(2.8(3.9521)-0.4)/2.4 = 10.666/2.4 = 4.4442$. Product: $1.25540(4.4442) = 5.579$ ✓)*

(c) $$\text{error} = \frac{1.780-1.988}{1.988} = -10.5\%.$$

**The isentropic formula underestimates the Mach number by 10.5%.**

*Why the sign.* The probe reads a stagnation pressure that has already been degraded by the bow shock — it is $p_{0,2}$, not $p_{0,1}$. A *lower* measured stagnation pressure, interpreted through the isentropic relation, implies a *slower* flow. **The formula is being told the flow arrived with less energy available than it really had**, and it dutifully reports a lower Mach number.

*And the error grows fast.* At $M = 1.5$ the isentropic reading would be low by 3.4%; at $M = 3$ by 24%, since the shock loss is by then a factor of three. **Any supersonic air-data system must use the Rayleigh formula**, and the correction is built into every flight air-data computer.

(d) *Why the static port is also suspect.* Three distinct problems, all of them serious:

**The port does not read free-stream static pressure.** It reads the local pressure on the fuselage at that station, which differs from $p_\infty$ by whatever the aircraft's own flow field has done — a **position error** that varies with Mach number and angle of attack. On a subsonic aircraft this is a modest, smoothly varying correction; on a supersonic one, shocks sweeping across the fuselage make it change abruptly with Mach number.

**Shock position moves with Mach number.** As the aircraft accelerates through $M = 1$, the bow shock and any local shocks migrate aft. A static port can find itself upstream of a shock at one Mach number and downstream of it at another, producing a **discontinuous jump in indicated altitude and airspeed** — the classic "Mach jump" or transonic altimeter error, which was a genuine hazard in early supersonic flight and remains a certification item.

**The port itself disturbs the flow.** At supersonic speed even a flush orifice generates weak waves, and any misalignment with the local flow direction contaminates the reading.

*How flight test handles it.* Several complementary techniques:

**A nose boom.** A long probe extending forward of the aircraft, carrying both pitot and static ports well ahead of the fuselage's influence — typically 1 to 1.5 fuselage diameters — plus vanes measuring local flow angles. This is the standard flight-test installation, and it is why prototypes have that distinctive spike.

**Calibration against an independent reference.** The **tower fly-by** (a low pass past a calibrated observation point), the **trailing cone** (a static source towed on a long tube well behind the aircraft, in undisturbed air), and **pacer aircraft** flying formation with a calibrated system. Each yields a position-error correction as a function of Mach number and $\alpha$, which is then programmed into the air-data computer.

**Redundancy and reasonableness checks.** Production aircraft carry multiple static sources on both sides of the fuselage — averaging cancels the sideslip error — and modern air-data computers cross-check against inertial and GPS-derived speeds.

**The theme is that in supersonic flight nothing measures the free stream directly.** Every reading is contaminated by the aircraft's own shock system, and the entire air-data chain is a set of corrections derived from exactly the theory in this lesson.

</details>

## Flashback

**From Lesson 4.2 (Isentropic and stagnation relations):** Air flows at $M = 1.6$ with $p = 35$ kPa and $T = 200$ K. (a) Find $p_0$, $T_0$, and $\rho_0$. (b) Find $p^*$, $T^*$, and $a^*$. (c) Find the flow speed and compare it with $V_{\max}$. (d) What fraction of the available enthalpy has already become kinetic energy?

<details>
<summary>Solution</summary>

(a) $$1+0.2(2.56) = 1.512.$$

$$T_0 = 200(1.512) = 302.4\ \mathrm{K}, \qquad p_0 = 35(1.512)^{3.5} = 35(4.2504) = 148.76\ \mathrm{kPa},$$

$$\rho_0 = \frac{148{,}760}{287(302.4)} = 1.7141\ \mathrm{kg/m^3}.$$

(b) $$T^* = 0.8333(302.4) = 252.0\ \mathrm{K}, \qquad p^* = 0.5283(148.76) = 78.59\ \mathrm{kPa},$$

$$a^* = \sqrt{1.4(287)(252.0)} = 318.2\ \mathrm{m/s}.$$

(c) $$a = \sqrt{1.4(287)(200)} = 283.5\ \mathrm{m/s}, \qquad V = 1.6(283.5) = 453.6\ \mathrm{m/s}.$$

$$V_{\max} = \sqrt{2c_pT_0} = \sqrt{2(1004.5)(302.4)} = \sqrt{607{,}522} = 779.4\ \mathrm{m/s}, \qquad \frac{V}{V_{\max}} = 0.582.$$

(d) $$\frac{V^2/2}{c_pT_0} = \left(\frac{V}{V_{\max}}\right)^2 = 0.582^2 = 0.339.$$

**34% of the stagnation enthalpy has become kinetic energy** at $M = 1.6$.

*The bridge to this lesson.* Now put a normal shock in this flow. From the table interpolated at $M_1 = 1.6$, the downstream Mach number is about $0.668$ and $p_{0,2}/p_{0,1}\approx0.895$.

**$T_0$ stays at 302.4 K, so $V_{\max}$ and $a^*$ are unchanged** — both depend only on $T_0$. The sonic reference state survives the shock intact, which is exactly why Prandtl's relation $u_1u_2 = a^{*2}$ can be written with a single $a^*$ referring to *both* sides.

**But $p_0$ falls to $0.895(148.76) = 133.1$ kPa, and with it $p^*$ falls to $70.4$ kPa.** The pressure side of the reference state is degraded; the temperature side is not.

*That split is worth holding onto.* Every reference quantity built from $T_0$ alone — $a^*$, $T^*$, $V_{\max}$ — is shock-proof. Every one built from $p_0$ — $p^*$, $\rho^*$, $\rho_0$ — is not. **And since the choked mass flow goes as $p_0/\sqrt{T_0}$, a shock upstream of a throat reduces the mass the throat can pass**, in direct proportion to the pressure recovery. That fact is what makes [4.5](04-05-quasi-1d-nozzle-flow.md)'s nozzle analysis work.

</details>

## Connections

- **Backward:** the isentropic relations used on each side are [4.2](04-02-isentropic-stagnation-relations.md)'s; the $T_0$ conservation is [4.1](04-01-compressibility-sound-speed-energy.md)'s energy equation; the control-volume argument is the same one that gave drag from a wake in [3.1](03-01-boundary-layers-momentum-integral.md); the entropy bookkeeping is [`engineering-thermodynamics`](../../engineering-thermodynamics/syllabus.md)'s.
- **Forward:** [4.4](04-04-oblique-shocks-prandtl-meyer.md) tilts the shock and shows that only its normal component matters, which is how the multi-shock inlet of Example 2 works; [4.5](04-05-quasi-1d-nozzle-flow.md) puts a normal shock inside a nozzle and finds the over-expanded operating states; [4.6](04-06-subsonic-compressibility-transonic.md) puts one on a wing.
- **Sideways:** the shock is a **discontinuous weak solution of a hyperbolic conservation law**, and the same mathematics governs the traffic jam (a shock in car density), the hydraulic jump in an open channel, and the breaking of a water wave. In every case the nonlinear steepening of a wave outruns the smooth solution, and an entropy-like admissibility condition selects which discontinuities are physical — the general theory is in [`pdes`](../../pdes/syllabus.md).
