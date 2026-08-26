# Aerodynamics · Lesson 3.3: Adverse gradients, separation, stall, and the drag polar

> ⏱ ~15 min · Module 3: Boundary layers and viscous drag · Builds on: [3.2 Transition and turbulent boundary layers](03-02-transition-turbulent-boundary-layers.md), [`fluid-dynamics` 3.5](../../fluid-dynamics/lessons/03-05-separation-drag.md) · Unlocks: [4.1 Compressibility, sound speed, and the energy equation](04-01-compressibility-sound-speed-energy.md)

## Why this matters

This lesson closes Module 3 and, with it, the low-speed half of the course. Two things happen here.

**First, separation.** [3.2](03-02-transition-turbulent-boundary-layers.md)'s boss problem showed that a separated airfoil has fifteen times the drag of an attached one and loses most of its lift. This lesson explains *why* boundary layers separate, why a turbulent one resists it, and what stall actually is.

**Second, the drag polar.** Every drag mechanism you have met — skin friction from [3.1](03-01-boundary-layers-momentum-integral.md) and [3.2](03-02-transition-turbulent-boundary-layers.md), pressure drag from separation, induced drag from [2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md) — assembles into a single two-term equation:

$$C_D = C_{D,0}+\frac{C_L^2}{\pi e_0AR}.$$

**That equation is the aircraft.** Range, endurance, climb rate, best glide speed, and the size of the engine all follow from it, and the whole of aircraft performance is its exploitation.

## The idea

**Pressure gradients push on the boundary layer.** The outer inviscid flow's pressure is impressed straight through the thin layer onto the wall — the layer is too thin to support a pressure difference across it. So the same $dp/dx$ that accelerates the outer flow also acts on the slow fluid near the wall.

**Near the wall the fluid has the least momentum and the most to lose.** In a *favourable* gradient ($dp/dx<0$, flow accelerating), the pressure force helps the sluggish near-wall fluid along and the layer stays thin and stable. In an *adverse* gradient ($dp/dx>0$, flow decelerating), it pushes back — and the fluid closest to the wall, having almost no momentum, is the first to be brought to rest.

**Separation is when the wall shear reaches zero.** At that point $\partial u/\partial y|_w = 0$; just downstream, the near-wall flow reverses and the boundary layer lifts off the surface. **Everything downstream is a wake**, at roughly constant pressure, and the pressure recovery the inviscid theory promised never arrives.

**Which is exactly the cylinder's disease.** [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md) compared the ideal and measured $C_p$: the front half agreed, the rear half collapsed, and the difference was the drag. Now you know the mechanism.

**A turbulent layer separates much later**, because turbulent mixing constantly resupplies the near-wall region with high-momentum fluid from above. It costs more friction and buys more staying power — and since separation costs so much more than friction, the trade is usually worth it.

**Airfoil stall is separation reaching the leading edge.** As $\alpha$ increases, the suction peak near the nose grows and the pressure recovery behind it steepens. Eventually the layer cannot make the recovery, separation moves forward, and $C_L$ stops rising and falls.

**Then add everything up.** Total drag = friction + pressure (the two together being **profile drag**, essentially independent of $C_L$ while attached) + induced drag (which goes as $C_L^2$). Two terms, one constant and one quadratic — and their sum has a minimum, which is the best-glide condition.

## The formal version

**The wall-curvature relation.** Evaluating the boundary-layer momentum equation at $y = 0$, where $u = v = 0$:

$$\boxed{\;\mu\left.\frac{\partial^2u}{\partial y^2}\right|_{w} = \frac{dp}{dx}.\;}$$

*In words: the sign of the pressure gradient is the sign of the profile's curvature at the wall.*

**This is the whole mechanism.** In a favourable gradient the profile curves downward everywhere and has no inflection point. In an adverse gradient it curves *upward* at the wall while still curving downward at the outer edge — so an **inflection point** must exist in between. An inflected profile is both closer to separation and dynamically unstable, which is why adverse gradients also trigger early transition.

**Separation condition.**

$$\boxed{\;\left.\frac{\partial u}{\partial y}\right|_{w} = 0 \quad\Longleftrightarrow\quad \tau_w = 0 \quad\Longleftrightarrow\quad \text{separation}.\;}$$

**Shape-factor criteria** (practical, approximate):

| State | $H = \delta^*/\theta$ |
|---|---|
| Laminar, flat plate | 2.59 |
| Laminar, at separation | $\approx3.5$ |
| Turbulent, flat plate | $\approx1.3$ |
| Turbulent, at separation | $\approx2.4$ |

**A turbulent layer must be pushed from 1.3 to 2.4 before it separates; a laminar one from 2.59 to 3.5.** Because the turbulent layer starts so much fuller, it survives far more adverse gradient.

**Stall types.**

| Type | Section | Behaviour |
|---|---|---|
| **Trailing-edge stall** | thick ($t/c\gtrsim15\%$) | separation creeps forward from the tail; gentle, rounded $C_L$ peak |
| **Leading-edge stall** | moderate ($t/c\approx10$–$15\%$) | short laminar bubble near the nose bursts; abrupt, sharp lift loss |
| **Thin-airfoil stall** | thin ($t/c\lesssim8\%$) | long bubble grows from the nose; very early, gradual, low $C_{L,\max}$ |

Typical $c_{l,\max}\approx1.3$–$1.7$ for a plain section, at $\alpha_{\rm stall}\approx12°$–$16°$.

**Drag decomposition.**

$$C_D = \underbrace{C_{D,f}+C_{D,p}}_{\text{profile drag }C_{D,0}}+\underbrace{C_{D,i}}_{C_L^2/(\pi e_0AR)}.$$

**The drag polar.**

$$\boxed{\;C_D = C_{D,0}+\frac{C_L^2}{\pi e_0AR}.\;}$$

Here $e_0$ is the **Oswald efficiency factor**, smaller than the span efficiency $e$ of [2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md) because it also absorbs the mild $C_L$-dependence of the profile drag. Typical $e_0 = 0.7$–$0.85$.

**Maximum lift-to-drag ratio.** Minimizing $C_D/C_L$:

$$\boxed{\;C_L^* = \sqrt{\pi e_0AR\,C_{D,0}}, \qquad \left(\frac{L}{D}\right)_{\max} = \frac{1}{2}\sqrt{\frac{\pi e_0AR}{C_{D,0}}}.\;}$$

**At best $L/D$ the two drag terms are exactly equal**, each contributing $C_{D,0}$.

**Stall speed.** From $L = W$ at $C_{L,\max}$:

$$\boxed{\;V_{\rm stall} = \sqrt{\frac{2W}{\rho_\infty S\,C_{L,\max}}}.\;}$$

## Picture

![A three-panel figure. Left panel: boundary-layer velocity profiles at four stations along a curved surface, under an adverse pressure gradient. The first profile is full with a healthy wall slope; the second is thinner at the wall with visible inflection; the third has exactly zero slope at the wall, marked with a dot labelled separation, tau sub w equals zero; the fourth shows reversed flow near the wall with the layer lifted off, and a recirculating eddy drawn beneath a dashed separating streamline. Above them the pressure rises along the surface, drawn as a curve with the annotation dp by dx greater than zero. Middle panel: laminar and turbulent layers compared on the same curved surface, with the laminar one separating early near the shoulder and the turbulent one continuing much further before letting go, with two vertical dashed lines marking the two separation points and the annotation turbulent mixing resupplies near-wall momentum. Right panel: the drag polar, showing C sub D plotted against C sub L as an upward parabola with its minimum at C sub L equals zero and value C sub D nought, plus a straight line drawn from the origin tangent to the curve, its tangency point marked best L over D, with the two drag contributions shaded separately below and above a dashed horizontal line at C sub D nought, labelled profile drag and induced drag.](assets/03-03-fig1.svg)

Left: separation in four frames — full profile, inflected profile, zero wall shear, reversed flow.

Middle: why a turbulent layer is worth its friction.

Right: the drag polar, with the tangent-from-the-origin construction that locates best $L/D$ — the point where the two shaded regions are equal.

## Worked examples

**Example 1 (the drag crisis, quantified).** A smooth circular cylinder in a cross-flow, as $Re = Ud/\nu$ increases:

| $Re$ | Boundary layer at separation | Separation angle $\theta_s$ | $C_D$ |
|---|---|---|---|
| $10^3$–$10^5$ | laminar | $\approx82°$ | $\approx1.2$ |
| $\approx3\times10^5$ | transition reaches the separation point | — | falls steeply |
| $10^6$ | turbulent | $\approx120°$ | $\approx0.3$ |

**The drag drops by a factor of four as the Reynolds number *increases***, which is the opposite of what every other drag law does.

*Why.* Below the critical $Re$ the boundary layer is still laminar when it reaches the shoulder, where the adverse gradient begins, and it separates almost immediately at about $82°$. The wake is then wider than the cylinder, and the pressure over the whole rear surface sits at roughly $C_p = -1.2$ ([1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md), Example 2).

Above the critical $Re$ the layer trips *before* the shoulder. The turbulent layer, with $H\approx1.3$ and a full near-wall profile, pushes on through the adverse gradient to about $120°$ before separating. **The wake narrows dramatically, the rear pressure recovers much further, and the pressure drag collapses.**

*Reading the trade explicitly.* Going turbulent multiplies the skin friction by roughly four ([3.2](03-02-transition-turbulent-boundary-layers.md)) — but on a cylinder, skin friction is perhaps 2% of the total drag, so that costs about $0.02$ in $C_D$. Delaying separation by $38°$ saves about $0.9$. **The trade is 45 to 1 in favour of turbulence.**

*This is the dimple.* A golf ball's dimples are roughness deliberately sized to trip the boundary layer at flight Reynolds numbers of $10^5$, dropping $C_D$ from about 0.5 to 0.25 and roughly doubling the range. Tennis-ball fuzz and cricket-ball seams do the same job.

**And it is why some wings have vortex generators** — small vanes ahead of a region prone to separation, energizing the boundary layer for the same reason.

*The essential caveat.* This trade is favourable on a **bluff body**, where pressure drag dominates. On a **streamlined body** — a well-designed airfoil at cruise — the flow stays attached anyway, pressure drag is already tiny, and tripping the layer buys nothing while costing the full friction penalty. **That is why laminar-flow airfoils exist and dimpled wings do not.**

**Example 2 (a complete drag polar).** A light aircraft has $C_{D,0} = 0.020$, $AR = 8$, $e_0 = 0.80$, wing area $S = 25$ m², and weight $W = 25{,}000$ N, flying at sea level.

*The polar.*

$$\pi e_0AR = \pi(0.80)(8) = 20.106, \qquad C_D = 0.020+\frac{C_L^2}{20.106}.$$

*Best lift-to-drag.*

$$C_L^* = \sqrt{20.106(0.020)} = \sqrt{0.40212} = 0.63413,$$

$$\left(\frac{L}{D}\right)_{\max} = \frac12\sqrt{\frac{20.106}{0.020}} = \frac12\sqrt{1005.3} = \frac12(31.706) = 15.853.$$

*Cross-check via the other formula:* $C_L^*/(2C_{D,0}) = 0.63413/0.040 = 15.853$ ✓

*Confirm the two terms are equal there.*

$$C_{D,i} = \frac{0.63413^2}{20.106} = \frac{0.40212}{20.106} = 0.020 = C_{D,0} \quad\checkmark$$

*Best-glide speed.* Setting $L = W$:

$$V^* = \sqrt{\frac{2W}{\rho_\infty S\,C_L^*}} = \sqrt{\frac{2(25{,}000)}{1.225(25)(0.63413)}} = \sqrt{\frac{50{,}000}{19.420}} = \sqrt{2574.6} = 50.74\ \mathrm{m/s}.$$

*Minimum drag.*

$$D_{\min} = \frac{W}{(L/D)_{\max}} = \frac{25{,}000}{15.853} = 1577\ \mathrm{N}.$$

*What the polar tells the pilot.* Three readings, all from the same two numbers:

**Best glide is 15.9:1** — from 1000 m the aircraft can reach 15.9 km with the engine off. And it does so at 50.7 m/s (183 km/h), not at the slowest speed it can fly: **flying slower than best-glide speed increases drag**, because the induced term is growing faster than the profile term is shrinking. This is the "back side of the power curve," and it is a persistent source of accidents.

**Thrust required at cruise is at least 1577 N**, and more at any other speed.

**Only two numbers matter.** $(L/D)_{\max}$ depends solely on $\sqrt{AR/C_{D,0}}$ — not on weight, not on wing area, not on altitude. A heavy aircraft glides just as far as a light one with the same polar; it simply does it faster.

*A design comparison worth making.* Suppose you can spend the same effort on either cleaning up the airframe by 20% ($C_{D,0}\to0.016$) or stretching the span for 20% more aspect ratio ($AR\to9.6$):

| Change | $C_L^*$ | $(L/D)_{\max}$ | Gain |
|---|---|---|---|
| Baseline | 0.634 | 15.85 | — |
| $C_{D,0}$ down 20% | 0.567 | 17.72 | $+11.8\%$ |
| $AR$ up 20% | 0.695 | 17.37 | $+9.5\%$ |

**Cleaning up wins, narrowly.** Both effects enter as a square root, so a 20% reduction in $C_{D,0}$ gives $1/\sqrt{0.8} = 1.118$ while a 20% increase in $AR$ gives $\sqrt{1.2} = 1.095$.

**And the aerodynamic tie is broken by structures.** More span means more bending moment, a heavier wing, and often a lower $e_0$ from the added tip structure — whereas drag cleanup (better fairings, sealed gaps, fewer excrescences) is nearly free in weight. That asymmetry is why so much of real aircraft development is unglamorous drag hunting rather than new planforms.

## Watch out

- **You might think an adverse gradient always separates the flow.** It separates it only if the gradient is strong enough or acts over long enough. Airfoil design is the art of recovering pressure gently enough to avoid it.
- **You might confuse $e$ and $e_0$.** Span efficiency $e$ is the lift distribution alone; Oswald $e_0$ is the whole aircraft's polar fit and is smaller.
- **You might use the polar beyond stall.** It is a fit to attached-flow data. Past $C_{L,\max}$ it is meaningless.
- **You might think $C_{D,0}$ is truly constant.** It creeps upward with $C_L$ as the boundary layer thickens; the Oswald factor absorbs the creep by inflating the quadratic term.
- **You might expect a turbulent layer always to reduce drag.** Only on bluff bodies or when it prevents separation. On an attached streamlined body it is pure loss.
- **You might think stall speed depends on weight only through $W$.** It depends on **wing loading** $W/S$, and it scales as $\sqrt{W/S}$ — which is why heavily loaded aircraft need flaps.
- **You might read $(L/D)_{\max}$ as achieved at minimum speed.** It is achieved at $C_L^*$, which is typically about 40% of $C_{L,\max}$ — well above stall speed.

## One-liner

> An adverse pressure gradient bends the velocity profile at the wall until the shear vanishes and the flow lets go, taking the pressure recovery with it — a turbulent layer resists this far better than a laminar one, and once you add the separation-free profile drag to the induced drag you get $C_D = C_{D,0}+C_L^2/(\pi e_0AR)$, from which the whole of aircraft performance follows.

## Problems

**P1 (🟢)** An aircraft has $C_{D,0} = 0.024$, $AR = 6.5$, and $e_0 = 0.78$. (a) Write the drag polar. (b) Find $C_D$ and $L/D$ at $C_L = 0.4$ and at $C_L = 0.9$. (c) Find $C_L^*$ and $(L/D)_{\max}$. (d) Which of the two flight conditions in (b) is closer to best glide?

**P2 (🟡)** An aircraft has weight $W = 32{,}000$ N and wing area $S = 22$ m², flying at sea level. (a) Find the wing loading. (b) Find the stall speed with a plain wing, $C_{L,\max} = 1.4$. (c) Find it with flaps deployed, $C_{L,\max} = 2.2$, and give the ratio. (d) Explain, in terms of separation, what a flap does and why there is a limit to how much it can deliver.

**P3 (🔴)** (a) Derive the wall-curvature relation $\mu\,\partial^2u/\partial y^2|_w = dp/dx$ from the boundary-layer momentum equation, and use it to explain why an inflection point must appear in an adverse gradient. (b) Explain why an inflected profile is also more unstable, and what that implies for the interaction between pressure gradient and transition. (c) A designer wants to keep a wing's boundary layer laminar over the front 60% of chord. State what the pressure distribution must do over that region, and what it must then do over the rear 40%, and identify the difficulty. (d) Explain why this "laminar bucket" strategy works well at cruise but fails badly off-design, and connect your answer to the drag polar.

<details>
<summary>Solutions</summary>

**P1** (a) $$\pi e_0AR = \pi(0.78)(6.5) = 15.928, \qquad C_D = 0.024+\frac{C_L^2}{15.928}.$$

(b) *At $C_L = 0.4$:*

$$C_{D,i} = \frac{0.16}{15.928} = 0.010045, \qquad C_D = 0.024+0.010045 = 0.034045,$$
$$\frac{L}{D} = \frac{0.4}{0.034045} = 11.75.$$

*At $C_L = 0.9$:*

$$C_{D,i} = \frac{0.81}{15.928} = 0.050854, \qquad C_D = 0.024+0.050854 = 0.074854,$$
$$\frac{L}{D} = \frac{0.9}{0.074854} = 12.02.$$

(c) $$C_L^* = \sqrt{15.928(0.024)} = \sqrt{0.38228} = 0.61828,$$

$$\left(\frac{L}{D}\right)_{\max} = \frac12\sqrt{\frac{15.928}{0.024}} = \frac12\sqrt{663.67} = \frac12(25.762) = 12.881.$$

(d) $$|0.4-0.618| = 0.218, \qquad |0.9-0.618| = 0.282.$$

**$C_L = 0.4$ is closer** to the optimum in $C_L$ — but note the $L/D$ values tell a different story: $11.75$ versus $12.02$, so $C_L = 0.9$ actually achieves the *better* ratio.

*The resolution, and it is instructive.* The $L/D$ curve is **asymmetric about its peak**: it rises steeply on the low-$C_L$ side and falls gently on the high-$C_L$ side, because at low $C_L$ the nearly-constant profile drag dominates a small lift. Being 0.22 below the optimum costs more than being 0.28 above it.

**Practically: if you must be off best-glide speed, err slow (high $C_L$), not fast.** Both flight conditions here are within 9% of the maximum, which is also worth noticing — the peak is broad, and precise speed-holding is not required to fly efficiently.

**P2** (a) $$\frac{W}{S} = \frac{32{,}000}{22} = 1454.5\ \mathrm{N/m^2} \quad(\approx148\ \mathrm{kg/m^2}).$$

(b) $$V_{\rm stall} = \sqrt{\frac{2W}{\rho_\infty SC_{L,\max}}} = \sqrt{\frac{2(1454.5)}{1.225(1.4)}} = \sqrt{\frac{2909.1}{1.715}} = \sqrt{1696.3} = 41.19\ \mathrm{m/s},$$

$= 148.3$ km/h.

(c) $$V_{\rm stall} = \sqrt{\frac{2909.1}{1.225(2.2)}} = \sqrt{\frac{2909.1}{2.695}} = \sqrt{1079.4} = 32.86\ \mathrm{m/s} = 118.3\ \mathrm{km/h}.$$

$$\frac{41.19}{32.86} = 1.254 = \sqrt{\frac{2.2}{1.4}} \quad\checkmark$$

**A 20% reduction in stall speed**, which is worth far more than it sounds: landing energy goes as $V^2$, so the runway requirement falls by 36%.

(d) *What a flap does.* A trailing-edge flap deflects the rear of the section downward, which **increases the camber** — and by [2.4](02-04-cambered-airfoil-aerodynamic-center.md), more camber means a more negative $\alpha_{L=0}$ and hence a higher $C_L$ at every angle of attack. A slotted or Fowler flap adds two more effects: it **increases the chord** (more area), and the slot **ducts high-energy air from the lower surface onto the flap's upper surface**, re-energizing the boundary layer there.

*Why it is limited.* Adding camber steepens the pressure recovery on the upper surface — the flow must decelerate from a higher suction peak down to trailing-edge pressure over the same chord. **A steeper recovery is a stronger adverse gradient, and beyond some deflection the boundary layer simply separates over the flap.** Past that point further deflection adds drag and pitching moment without adding lift.

The numbers bear this out: a plain flap gains about $\Delta C_{L,\max}\approx0.5$ before separating; a single-slotted flap about 0.9; a double-slotted Fowler about 1.5. **Each increment costs mechanical complexity, and each one buys back separation margin that the previous deflection consumed.**

*And there is a hard ceiling.* Even with every high-lift device, $C_{L,\max}$ for a practical wing is about 3.0–3.5. The boundary layer's ability to negotiate an adverse gradient is finite, and no amount of geometry evades it — only active blowing or suction does, which is why blown flaps exist on a handful of military aircraft and nowhere else.

**P3** (a) *Derivation.* The steady 2-D boundary-layer momentum equation is

$$\rho\left(u\frac{\partial u}{\partial x}+v\frac{\partial u}{\partial y}\right) = -\frac{dp}{dx}+\mu\frac{\partial^2u}{\partial y^2}.$$

At the wall, the no-slip condition gives $u = 0$ and $v = 0$, so **both convective terms vanish identically**, leaving

$$0 = -\frac{dp}{dx}+\mu\left.\frac{\partial^2u}{\partial y^2}\right|_w \quad\Longrightarrow\quad \boxed{\mu\left.\frac{\partial^2u}{\partial y^2}\right|_w = \frac{dp}{dx}.}$$

*Why an inflection point must appear.* At the outer edge of the layer the profile approaches $U$ from below and flattens out, so $\partial^2u/\partial y^2<0$ there — always, in any boundary layer.

In an **adverse** gradient $dp/dx>0$, so the relation above gives $\partial^2u/\partial y^2|_w>0$ at the wall. The curvature is therefore **positive at the wall and negative at the edge**, and by the intermediate value theorem it must pass through zero somewhere in between.

**That zero is the inflection point, and its existence is forced by nothing more than the sign of the pressure gradient.**

In a **favourable** gradient $dp/dx<0$, the wall curvature is negative, matching the edge, and no inflection is required. This is why accelerating flows have such well-behaved boundary layers.

(b) *Why inflection means instability.* **Rayleigh's inflection-point theorem** states that a necessary condition for inviscid instability of a parallel shear flow is that the velocity profile possess an inflection point. An inflected profile has an inviscid instability mechanism available to it; a non-inflected one does not, and can only be destabilized by the much weaker viscous (Tollmien–Schlichting) mechanism.

*The implication is a vicious circle, and it is the key point.*

**Adverse gradient → inflected profile → rapid instability growth → early transition.** But a turbulent layer, once it exists, *resists* separation. So the adverse gradient triggers the very transition that then saves the flow from the separation the gradient was about to cause.

**Airfoils exploit this constantly.** On a conventional section, transition occurs at or just after the suction peak — precisely where the adverse gradient begins — so the rear pressure recovery is negotiated by a turbulent layer that is up to the job. The flow arranges its own rescue.

**The converse is the danger.** If the adverse gradient is strong and the Reynolds number is low, the *laminar* layer separates before it has had time to transition. It then transitions in the free shear layer above the surface and may reattach as a turbulent layer — a **laminar separation bubble**. Short bubbles are benign; long ones are not, and a bubble that "bursts" instead of reattaching causes the abrupt leading-edge stall of the table above. **This is the dominant failure mode of model aircraft, drones, and wind-turbine root sections, all of which live at $Re\sim10^5$.**

(c) *What the pressure distribution must do.*

**Over the front 60%: a favourable gradient, $dp/dx<0$.** The flow must accelerate continuously from the leading edge to about $x/c = 0.6$, which requires the airfoil's maximum thickness — and hence its minimum pressure — to sit far aft, around 50–60% chord instead of the conventional 25–30%.

**Over the rear 40%: pressure recovery, $dp/dx>0$.** The flow must decelerate from the minimum-pressure value back to trailing-edge pressure.

*The difficulty.* The recovery has been compressed into 40% of the chord instead of 70%, so it must be **much steeper** — and it is being attempted by a boundary layer that is still laminar at the start of it, and therefore poorly equipped. **The design must recover more pressure, over less distance, with a weaker boundary layer.**

That is the central tension of laminar-flow airfoil design, and the reason such sections took decades to make practical. The resolution is a carefully shaped, concave "Stratford" recovery that keeps the flow on the verge of separation without crossing it — extracting the maximum recovery the layer can deliver — combined with accepting transition partway through the recovery region.

(d) *Why it works at cruise.* At the design $C_L$, the pressure distribution is exactly as intended: the favourable gradient extends to 60% chord, transition is delayed, and the friction drag over that region is laminar — roughly a quarter of the turbulent value. The saving in $C_{D,0}$ is real and large, typically 30–50% of the wing's friction drag.

*Why it fails off-design.* Change $\alpha$ and the pressure distribution changes shape. Raise it and the suction peak moves forward toward the leading edge, re-establishing an adverse gradient over most of the chord; lower it and the same happens on the lower surface. **In either case transition jumps forward to near the leading edge and the laminar run vanishes.**

Worse, the airfoil was *designed* for a steep rear recovery on the assumption that a laminar layer would arrive there with a specific momentum thickness. Off-design, a thicker turbulent layer arrives at that steep recovery instead, and may not survive it — so the section can separate, and stall, earlier than a conventional one.

*Connecting to the polar.* The consequence is a characteristic shape called the **laminar bucket**:

$$C_{D,0} = \begin{cases}\approx0.004\text{–}0.005, & C_L\ \text{inside the design range (the bucket)},\\ \approx0.008\text{–}0.010, & C_L\ \text{outside it}.\end{cases}$$

**$C_{D,0}$ is no longer a constant** — it is a step function of $C_L$, low inside a narrow band and roughly doubling outside. So the drag polar

$$C_D = C_{D,0}(C_L)+\frac{C_L^2}{\pi e_0AR}$$

has a discontinuity in slope at the edges of the bucket, and the smooth parabola of Example 2 is a fiction for such a wing.

*The engineering consequence.* Laminar-flow sections are used where the aircraft spends nearly all its time at one $C_L$ — sailplanes, high-altitude cruisers, wind turbines — and avoided where the operating range is wide. **And the bucket is fragile in a second way**: it assumes a hydraulically smooth surface, and by [3.2](03-02-transition-turbulent-boundary-layers.md)'s roughness criterion a few insects on the leading edge trip the flow and cancel the entire benefit. Glider pilots fit bug-wipers for exactly this reason.

</details>

## Flashback

**From Lesson 3.2 (Transition and turbulent boundary layers):** A flat plate of length $L = 1.2$ m sits in air ($\nu = 1.5\times10^{-5}$ m²/s) at $U = 45$ m/s, sea level. (a) Find $Re_L$ and the transition point. (b) Find the fully-turbulent and mixed $C_f$. (c) Find $\delta$ at the trailing edge. (d) Find the shape factor you would expect at $x = 0.05$ m and at $x = 1.0$ m, and say what each tells you.

<details>
<summary>Solution</summary>

(a) $$Re_L = \frac{45(1.2)}{1.5\times10^{-5}} = \frac{54}{1.5\times10^{-5}} = 3.60\times10^6.$$

$$x_{\rm tr} = \frac{5\times10^5(1.5\times10^{-5})}{45} = \frac{7.5}{45} = 0.1667\ \mathrm{m} \quad(13.9\%\ \text{of the plate}).$$

(b) $$Re_L^{1/5} = (3.60\times10^6)^{0.2} = 20.477,$$

$$C_{f,\rm turb} = \frac{0.074}{20.477} = 3.6139\times10^{-3},$$

$$C_{f,\rm mixed} = 3.6139\times10^{-3}-\frac{1742}{3.60\times10^6} = 3.6139\times10^{-3}-4.8389\times10^{-4} = 3.1300\times10^{-3}.$$

(c) $$\delta = \frac{0.37(1.2)}{20.477} = 0.02168\ \mathrm{m} = 21.7\ \mathrm{mm}.$$

(d) *At $x = 0.05$ m:* $Re_x = 45(0.05)/1.5\times10^{-5} = 1.5\times10^5$ — **laminar**, so $H\approx2.59$.

*At $x = 1.0$ m:* $Re_x = 3.0\times10^6$ — **turbulent**, so $H\approx1.3$.

*What each tells you.* At the first station the layer is laminar, thin, and cheap in friction but **would separate almost immediately if it met an adverse gradient** — its $H$ is only 0.9 away from the laminar separation value of 3.5. At the second station the layer is turbulent, thicker, several times more expensive in friction, and **has 1.1 units of $H$ in hand** before it reaches its own separation value of 2.4.

*The bridge to this lesson.* On a flat plate none of this matters, because $dp/dx = 0$ and neither layer is being asked to do anything difficult. **Put the same two layers on an airfoil's rear upper surface and the difference decides everything**:

$$\text{laminar at } x/c = 0.05: \ H = 2.59\to3.5 \ \text{needs only a mild adverse gradient},$$
$$\text{turbulent at } x/c = 0.8: \ H = 1.3\to2.4 \ \text{survives a much steeper one}.$$

**That gap is why an airfoil's transition point is a design variable and not an accident.** Push transition too far aft and you save friction but arrive at the pressure recovery with a fragile laminar layer that separates; leave it too far forward and you pay full turbulent friction over the whole chord. The optimum is exactly at the suction peak — laminar through the favourable gradient, turbulent through the adverse one — which is what a well-designed airfoil arranges.

</details>

## Connections

- **Backward:** the separation phenomenon and the drag crisis are [`fluid-dynamics` 3.5](../../fluid-dynamics/lessons/03-05-separation-drag.md)'s and are *reloaded* here; the turbulent layer's fullness is [3.2](03-02-transition-turbulent-boundary-layers.md)'s; the shape factor and momentum integral are [3.1](03-01-boundary-layers-momentum-integral.md)'s; the induced-drag term of the polar is [2.6](02-06-elliptical-loading-induced-drag-aspect-ratio.md)'s; the collapsed rear pressure on a cylinder is [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)'s.
- **Forward:** Module 4 leaves incompressible flow behind — but separation returns in a new guise as **shock-induced separation** in [4.6](04-06-subsonic-compressibility-transonic.md), where a shock's own pressure jump is the adverse gradient.
- **Sideways:** the drag polar's structure — a constant term plus a term inversely proportional to the square of a "throughput" — is the same optimization as minimizing total cost with a fixed overhead plus a load-dependent loss, and it recurs as the transformer's core-plus-copper loss in [`power-systems`](../../power-systems/syllabus.md) and as the economic order quantity in [`operations-research`](../../operations-research/syllabus.md). In every case the optimum is where the two terms are equal.
