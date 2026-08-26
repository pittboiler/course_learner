# Aerodynamics · Lesson 4.7: Supersonic airfoils, wave drag, and wing sweep

> ⏱ ~15 min · Module 4: Compressible and supersonic flow · Builds on: [4.4 Oblique shocks and Prandtl–Meyer expansion](04-04-oblique-shocks-prandtl-meyer.md), [4.6 Subsonic compressibility and the transonic barrier](04-06-subsonic-compressibility-transonic.md) · Course finale

## Why this matters

This is the last lesson, and it inverts almost everything the course has taught.

Below $M = 1$, lift comes from circulation, the aerodynamic centre sits at the quarter chord, thickness costs nothing in drag, camber is free lift, and a rounded leading edge is essential. **Above $M = 1$, none of that survives.** Circulation is irrelevant; the aerodynamic centre jumps to mid-chord; thickness and camber both cost drag; and a sharp leading edge is mandatory.

**And a new drag appears that has no subsonic counterpart.** Wave drag exists in a perfectly inviscid fluid, on a body of zero thickness, at zero lift. It is the entropy the shocks generate, cashed out as force.

The lesson gives the linearized (Ackeret) theory that makes supersonic sections calculable in one line, checks it against exact shock–expansion theory, and closes with the second and quite different reason for wing sweep.

## The idea

**Supersonic flow only knows about the surface directly beneath it.** Disturbances cannot travel upstream, so the pressure at a point on a supersonic surface depends only on the local slope — not on the shape ahead of it, not behind it, not on the other surface. **Each face acts alone**, which is why supersonic aerodynamics is arithmetically simple where subsonic aerodynamics needed integral equations.

**Ackeret's result: $C_p = 2\theta/\sqrt{M_\infty^2-1}$.** Turn the surface *into* the flow by an angle $\theta$ and the pressure rises in proportion; turn it away and the pressure falls by the same amount. **A single formula for the whole surface**, with the sign of $\theta$ doing all the work.

**Note the factor: $1/\sqrt{M^2-1}$, not $1/\sqrt{1-M^2}$.** Below $M = 1$ compressibility *amplifies* the incompressible answer; above it, increasing Mach number *reduces* the loading. **The two regimes are governed by the same expression with its sign flipped**, which is the change from an elliptic to a hyperbolic equation.

**Lift follows from the two faces' pressure difference.** For a flat plate at angle $\alpha$: the lower face is turned into the flow, the upper away, and the difference gives $c_l = 4\alpha/\sqrt{M^2-1}$. **Lift is linear in $\alpha$ as always — but with a slope of $4/\beta$ rather than $2\pi$.**

**And the force is perpendicular to the plate, not to the free stream.** So it has a component along the free stream: $c_d = 4\alpha^2/\sqrt{M^2-1}$. **This is lift-dependent wave drag**, and it is not induced drag — it exists in two dimensions, where induced drag does not.

**Thickness costs drag too.** Any surface slope contributes $C_p$, and any $C_p$ on an inclined surface contributes drag. Since thickness slopes are positive on the front and negative on the rear, they produce a fore-aft pressure imbalance that pushes backwards. **Wave drag from thickness goes as $(t/c)^2$**, which is why supersonic wings are so thin.

**The aerodynamic centre moves to mid-chord.** Ackeret's loading on a flat plate is *uniform* — every station on the lower face has the same $C_p$. The centroid of a uniform load is at the middle. **This aft shift of 25% of chord as an aircraft accelerates through $M = 1$ is the "Mach tuck"** that pitched early transonic aircraft nose-down, and it is why supersonic aircraft pump fuel aft to retrim.

**And sweep returns, for a new reason.** Subsonically, sweep delayed $M_{cr}$. Supersonically, sweeping the leading edge *behind the Mach cone* makes the component of flow normal to it subsonic — so the leading edge can be rounded, the shock is detached and weak, and the wing behaves in some ways like a subsonic one. **A "subsonic leading edge" needs $\Lambda>90°-\mu$.**

## The formal version

**Linearized (Ackeret) pressure.** For a thin body at small angles in supersonic flow,

$$\boxed{\;C_p = \frac{2\theta}{\sqrt{M_\infty^2-1}},\;}$$

where $\theta$ is the local surface inclination to the free stream, **positive when the surface turns into the flow.**

**Flat plate at incidence.** Upper surface $\theta = -\alpha$, lower surface $\theta = +\alpha$:

$$C_{p,l} = \frac{2\alpha}{\beta}, \qquad C_{p,u} = -\frac{2\alpha}{\beta}, \qquad \beta\equiv\sqrt{M_\infty^2-1}.$$

$$\boxed{\;c_l = \frac{4\alpha}{\sqrt{M_\infty^2-1}}, \qquad c_{d,w} = \frac{4\alpha^2}{\sqrt{M_\infty^2-1}}, \qquad \frac{l}{d} = \frac{1}{\alpha}\ \ (\alpha\ \text{in radians}).\;}$$

**Note that $l/d = 1/\alpha$ exactly**, independent of Mach number — a remarkably clean result, and a discouraging one: at $\alpha = 4°$ the best possible inviscid $L/D$ is 14.3.

**Aerodynamic centre.** The loading is uniform, so

$$\boxed{\;x_{ac} = \frac{c}{2}, \qquad c_{m,LE} = -\frac{c_l}{2}.\;}$$

**Compare $c/4$ subsonically** — the shift is the source of Mach tuck.

**General thin section.** Writing the upper and lower surface slopes as $\theta_u$ and $\theta_l$, and decomposing into angle of attack, camber, and thickness:

$$\boxed{\;c_{d,w} = \frac{4}{\sqrt{M_\infty^2-1}}\left[\alpha^2+\overline{\left(\frac{dz_c}{dx}\right)^2}+\overline{\left(\frac{dz_t}{dx}\right)^2}\right],\;}$$

where the overbars denote chordwise averages. **Three independent, strictly positive contributions**:

**Lift** costs $4\alpha^2/\beta$ — unavoidable if you want lift.
**Camber** costs $4\overline{g_c^2}/\beta$ and — unlike subsonically — buys nothing. **Supersonic airfoils are symmetric.**
**Thickness** costs $4\overline{g_t^2}/\beta$; for a diamond of thickness ratio $t/c$, $\overline{g_t^2} = (t/c)^2$.

**The lift-to-drag optimum.** For a symmetric diamond, $c_l/c_{d,w} = \alpha/(\alpha^2+(t/c)^2)$ is maximized at

$$\boxed{\;\alpha_{\rm opt} = \frac{t}{c}, \qquad \left(\frac{l}{d}\right)_{\max} = \frac{c}{2t}.\;}$$

**Supersonic sections are thin because $L/D$ is inversely proportional to thickness.**

**Mach cone and sweep.**

$$\mu = \arcsin\frac{1}{M_\infty}, \qquad \boxed{\;\text{subsonic leading edge if}\ \Lambda>90°-\mu.\;}$$

| $M_\infty$ | $\mu$ | Sweep for a subsonic LE |
|---|---|---|
| 1.6 | $38.7°$ | $>51.3°$ |
| 2.0 | $30.0°$ | $>60.0°$ |
| 2.5 | $23.6°$ | $>66.4°$ |

**Concorde's 55–70° ogival delta and the SR-71's 60° delta are exactly this calculation.**

## Picture

![A three-panel figure. Left panel: a flat plate at angle of attack alpha in supersonic flow, with an oblique shock springing from the leading edge on the lower surface and a Prandtl-Meyer expansion fan from the leading edge on the upper surface; the two flows recombine at the trailing edge through an upper shock and a lower expansion, with a slip line trailing behind. The pressure on each face is drawn as a uniform block of arrows, higher below and lower above, with the resultant force arrow drawn perpendicular to the plate and resolved into lift and wave drag components relative to the free stream, annotated the force is normal to the plate, so lift always drags. Middle panel: a symmetric diamond airfoil with its wave-drag budget shown as a stacked bar beside it, split into three labelled bands, alpha squared, camber squared, and thickness squared, with the note all three are positive, none can cancel. Right panel: a delta wing seen in plan view with the Mach cone from its apex drawn as a shaded wedge of half-angle mu; the left half shows a highly swept leading edge lying inside the cone, labelled subsonic leading edge, rounded nose allowed, and the right half shows a less swept edge protruding outside the cone, labelled supersonic leading edge, sharp nose and attached shock required.](assets/04-07-fig1.svg)

Left: why a flat plate has drag in an inviscid fluid at zero thickness. The pressure force is normal to the surface, and the surface is inclined.

Middle: the wave-drag budget, and why supersonic sections are thin and symmetric.

Right: the two supersonic wing philosophies, decided by whether the leading edge lies inside the Mach cone.

## Worked examples

**Example 1 (the boss problem: flat plate at $M = 2$, $\alpha = 4°$, exact and linearized).**

*Lower surface — an oblique shock turning the flow $4°$.* Solving the $\theta$–$\beta$–$M$ relation:

$$\beta_{\rm shock} = 33.39°, \qquad M_{n1} = 2.0\sin33.39° = 1.1007,$$

$$\frac{p_l}{p_\infty} = 1+\frac{2.8}{2.4}\left(1.1007^2-1\right) = 1+1.16667(0.21154) = 1.2467.$$

*Upper surface — a Prandtl–Meyer expansion of $4°$.*

$$\nu(2.0) = 26.38°, \qquad \nu\left(M_u\right) = 30.38°, \qquad M_u = 2.1483,$$

$$\frac{p_u}{p_\infty} = \left(\frac{1+0.2(4)}{1+0.2(4.6152)}\right)^{3.5} = \left(\frac{1.8}{1.9230}\right)^{3.5} = 0.79344.$$

*Forces.* The plate is flat, so both faces carry uniform pressure and the resultant is normal to the plate:

$$q_\infty = \tfrac12\gamma p_\infty M_\infty^2 = 0.7p_\infty(4) = 2.80\,p_\infty,$$

$$c_n = \frac{p_l-p_u}{q_\infty} = \frac{1.24674-0.79344}{2.80} = \frac{0.45330}{2.80} = 0.16189.$$

Resolving to free-stream axes with $\alpha = 4°$:

$$c_l = c_n\cos4° = 0.16189(0.997564) = 0.16150, \qquad c_{d,w} = c_n\sin4° = 0.16189(0.069756) = 0.011293.$$

$$\frac{l}{d} = \cot4° = 14.30.$$

*Linearized (Ackeret) comparison.* With $\alpha = 4° = 0.069813$ rad and $\beta = \sqrt{4-1} = 1.7321$:

$$c_l = \frac{4(0.069813)}{1.7321} = 0.16123, \qquad c_{d,w} = \frac{4(0.069813)^2}{1.7321} = 0.011258.$$

| | Exact | Ackeret | Error |
|---|---|---|---|
| $c_l$ | 0.16150 | 0.16123 | $-0.17\%$ |
| $c_{d,w}$ | 0.011293 | 0.011258 | $-0.31\%$ |
| $l/d$ | 14.30 | 14.31 | $+0.07\%$ |

**Agreement to a fraction of a percent** — and this from a theory that replaced a shock and an expansion fan with one linear formula.

*Why the linearization is so good here.* The shock is weak ($M_{n1} = 1.10$, a $p_0$ loss of 0.1%), so the *entropy* generated is negligible and the compression is nearly isentropic. Linear theory assumes exactly that.

**The error grows with $\alpha$ and with $M_\infty$**, because both strengthen the shock. At $\alpha = 10°$ and $M = 2$ the error in $c_l$ is about 3%; at $\alpha = 15°$, near 8%.

*Where the wave drag comes from physically.* Nothing here is viscous, and the plate has no thickness. The drag exists because:

**The pressure force is normal to the plate, and the plate is inclined.** So a resultant that is perpendicular to the *surface* has a component along the free stream.

**Subsonically the same geometry produces no drag**, because the front and rear of a subsonic body carry compensating pressures — the leading-edge suction of [2.3](02-03-symmetric-thin-airfoil.md), which exactly cancels the streamwise component. **Supersonic flow has no leading-edge suction**, because the flow cannot communicate around the nose. The cancellation fails, and what is left is wave drag.

*And the entropy accounting confirms it.* The shock's $p_0$ loss is small but nonzero, and it appears far downstream as a wake that never recovers — the same energy that the drag force represents. **Wave drag is entropy, viewed as force**, which is exactly the accounting of [4.2](04-02-isentropic-stagnation-relations.md).

**Example 2 (why supersonic wings are thin, symmetric, and sharp).** A symmetric diamond section with $t/c = 0.06$ flies at $M_\infty = 2.2$, so $\beta = \sqrt{4.84-1} = 1.9596$.

*The drag budget.* For a diamond, the surface slope on each of the four faces is $\pm t/c$, so $\overline{g_t^2} = (t/c)^2 = 0.0036$, and there is no camber:

$$c_{d,w} = \frac{4}{1.9596}\left[\alpha^2+0.0036\right].$$

| $\alpha$ | $c_l$ | $c_{d,w}$ | $l/d$ |
|---|---|---|---|
| $0°$ | 0 | 0.00735 | 0 |
| $2°$ | 0.0713 | 0.00984 | 7.24 |
| $3.44°$ | 0.1225 | 0.01470 | **8.33** |
| $4°$ | 0.1425 | 0.01730 | 8.24 |
| $6°$ | 0.2138 | 0.02973 | 7.19 |

*The optimum.*

$$\alpha_{\rm opt} = \frac{t}{c} = 0.06\ \mathrm{rad} = 3.44°, \qquad \left(\frac{l}{d}\right)_{\max} = \frac{1}{2(0.06)} = 8.33.$$

*Reading it.* Four design conclusions, all forced:

**Thin.** $(l/d)_{\max} = c/(2t)$, so halving the thickness doubles the best $L/D$. Concorde's wing was 3% thick at the root; a subsonic airliner's is 12–14%. **The whole structural design of a supersonic aircraft is dominated by having almost no wing depth to work with.**

**Symmetric.** Camber contributes $4\overline{g_c^2}/\beta$ to drag and nothing to the lift *slope*. Subsonically camber shifted the lift curve left for free; supersonically it is a pure penalty. **Supersonic sections are symmetric double wedges or biconvex sections.**

**Sharp-nosed.** A rounded leading edge is a region of large local surface slope, so by Ackeret it carries a large $C_p$ and, being forward-facing, large drag. Worse, a blunt nose forces a *detached* bow shock with a normal-shock segment on the axis, costing the full $p_0$ loss of [4.3](04-03-normal-shock-waves.md). **A sharp leading edge keeps the shock attached and weak.**

**And the $L/D$ is poor.** 8.3 at best, against 17–20 for a subsonic transport. **Supersonic cruise is intrinsically about half as efficient**, before any consideration of engines or structure — which is the fundamental reason supersonic transport has never been economic.

*The zero-lift drag is not zero.* At $\alpha = 0$ this section still has $c_{d,w} = 0.00735$ — comparable to its entire skin-friction drag — purely from being thick. **Nothing in subsonic aerodynamics behaves this way.**

*The one relief: sweep.* The whole calculation above assumes the flow meets the leading edge supersonically. Sweep the wing behind the Mach cone — at $M = 2.2$, $\mu = 27.0°$, so $\Lambda>63°$ — and the leading-edge normal component is subsonic. **The nose may then be rounded, leading-edge suction partially returns, and both the wave drag and the low-speed handling improve.**

That is why Concorde's wing is a $55°$–$70°$ ogival delta rather than a thin straight wing: **the sweep buys back some of the subsonic aerodynamics that supersonic flight had taken away**, and it does so at both ends of the flight envelope.

## Watch out

- **You might use $1/\sqrt{1-M^2}$ above $M = 1$.** It becomes imaginary. The supersonic factor is $1/\sqrt{M^2-1}$.
- **You might expect the lift slope to be $2\pi$.** It is $4/\beta$ — which equals $2\pi$ only near $M = 1.27$, and falls steadily above that.
- **You might place the aerodynamic centre at $c/4$.** Supersonically it is at $c/2$, and the shift through $M = 1$ is Mach tuck.
- **You might think supersonic wave drag is induced drag.** It is not — wave drag exists in two dimensions and at zero lift; induced drag requires a finite span and lift.
- **You might expect camber to help.** It costs drag and buys nothing supersonically. It is retained on real supersonic wings only for subsonic and transonic handling.
- **You might apply Ackeret at large $\alpha$ or high $M$.** Errors reach several percent by $\alpha = 10°$ and grow with Mach number; use exact shock–expansion theory when accuracy matters.
- **You might think a sharp leading edge is always better.** It is, supersonically — but it is dreadful subsonically, stalling abruptly at low $\alpha$. Supersonic aircraft accept poor low-speed behaviour, or fix it with sweep and vortex lift.

## One-liner

> Supersonic flow reads only the local surface slope, so $C_p = 2\theta/\sqrt{M_\infty^2-1}$ and a flat plate gets $c_l = 4\alpha/\beta$ with an aerodynamic centre at mid-chord — but the pressure force is normal to an inclined surface with no leading-edge suction to cancel its streamwise component, so lift, camber, and thickness each contribute an irreducible wave drag, and thin symmetric sharp sections swept inside the Mach cone are the only defence.

## Problems

**P1 (🟢)** A flat-plate airfoil flies at $M_\infty = 2.5$, $\alpha = 3°$. (a) Find $\beta$ and the Mach angle. (b) Find $c_l$ and $c_{d,w}$ by Ackeret theory. (c) Find $l/d$. (d) Where is the aerodynamic centre, and how does that differ from the subsonic case?

**P2 (🟡)** A symmetric diamond section with $t/c = 0.05$ flies at $M_\infty = 2.0$. (a) Find the wave-drag coefficient at zero lift. (b) Find $c_l$ and $c_{d,w}$ at $\alpha = 3°$. (c) Find the optimum angle of attack and the corresponding maximum $l/d$. (d) The design team proposes adding 2% camber to improve low-speed handling. Estimate the supersonic drag penalty if $\overline{g_c^2}\approx(4\varepsilon)^2/2$ for a parabolic camber line, and comment.

**P3 (🔴)** *(Boss problem 4.)* A thin flat-plate airfoil flies at $M_\infty = 2.0$ and angle of attack $\alpha = 4°$. (a) Use an oblique shock on the lower surface and a Prandtl–Meyer expansion on the upper surface to find the pressure on each face. (b) From these, compute the section lift and wave-drag coefficients and compare $c_l$ to the linearized (Ackeret) prediction $c_l = 4\alpha/\sqrt{M_\infty^2-1}$. (c) Explain where the wave drag comes from physically, and why sweeping the wing back reduces it.

<details>
<summary>Solutions</summary>

**P1** (a) $$\beta = \sqrt{M_\infty^2-1} = \sqrt{6.25-1} = \sqrt{5.25} = 2.2913,$$

$$\mu = \arcsin\frac{1}{2.5} = 23.58°.$$

(b) $$\alpha = 3° = 0.052360\ \mathrm{rad}.$$

$$c_l = \frac{4(0.052360)}{2.2913} = \frac{0.209440}{2.2913} = 0.09141,$$

$$c_{d,w} = \frac{4(0.052360)^2}{2.2913} = \frac{0.010966}{2.2913} = 0.004786.$$

(c) $$\frac{l}{d} = \frac{c_l}{c_{d,w}} = \frac{1}{\alpha} = \frac{1}{0.052360} = 19.10.$$

(d) $$x_{ac} = \frac{c}{2}.$$

**Subsonically it is at $c/4$** ([2.3](02-03-symmetric-thin-airfoil.md), [2.4](02-04-cambered-airfoil-aerodynamic-center.md)). The shift is 25% of chord, and it occurs as the aircraft accelerates through the transonic range.

*Why it matters.* An aft-moving aerodynamic centre increases the static margin — the aircraft becomes *more* stable, which sounds benign but is not. It means:

**A large nose-down trim change (Mach tuck)** as the lift's line of action moves behind the centre of gravity. Early transonic aircraft experienced this as an uncommanded dive that elevators of the day could not counter.

**Increased trim drag**, since the tail must carry a larger download.

**Reduced manoeuvrability**, because a larger static margin means more control power is needed for a given pitch rate.

*The fix.* Concorde pumped fuel between forward and aft trim tanks — about 20 tonnes moving roughly 2 m — to shift the centre of gravity aft during acceleration and forward during deceleration. **The fuel system was a flight-control system**, and it was one of the aircraft's most critical.

**P2** (a) For a diamond, $\overline{g_t^2} = (t/c)^2 = 0.0025$; $\beta = \sqrt{4-1} = 1.7321$.

$$c_{d,w}(\alpha = 0) = \frac{4(0.0025)}{1.7321} = \frac{0.0100}{1.7321} = 0.005774.$$

(b) $$\alpha = 3° = 0.052360\ \mathrm{rad}.$$

$$c_l = \frac{4(0.052360)}{1.7321} = 0.12092,$$

$$c_{d,w} = \frac{4}{1.7321}\left[0.052360^2+0.0025\right] = 2.3094\left[0.0027416+0.0025\right] = 2.3094(0.0052416) = 0.012105.$$

$$\frac{l}{d} = \frac{0.12092}{0.012105} = 9.99.$$

(c) $$\alpha_{\rm opt} = \frac{t}{c} = 0.050\ \mathrm{rad} = 2.865°,$$

$$\left(\frac{l}{d}\right)_{\max} = \frac{c}{2t} = \frac{1}{2(0.05)} = 10.00.$$

*(The $\alpha = 3°$ case is essentially at the optimum already — the peak is very flat, which is a useful practical fact.)*

(d) *The camber penalty.* For a parabolic camber line of maximum camber $\varepsilon = 0.02$, $dz_c/dx = 4\varepsilon\cos\theta$ (from [2.4](02-04-cambered-airfoil-aerodynamic-center.md)), whose mean square is

$$\overline{g_c^2} = \frac{(4\varepsilon)^2}{2} = \frac{(0.08)^2}{2} = \frac{0.0064}{2} = 0.0032.$$

$$\Delta c_{d,w} = \frac{4(0.0032)}{1.7321} = 0.007390.$$

*Comparison.*

$$c_{d,w}: \ 0.012105\ \to\ 0.019495, \qquad \text{a } 61\%\ \text{increase},$$

$$\frac{l}{d}: \ 9.99\ \to\ 6.20.$$

**A 2% camber costs 38% of the section's lift-to-drag ratio.**

*Comment.* The penalty is severe and it is worth seeing why: $\overline{g_c^2} = 0.0032$ *exceeds* $\overline{g_t^2} = 0.0025$, so **2% camber contributes more wave drag than 5% thickness does.** The camber line's slope varies from $+0.08$ at the nose to $-0.08$ at the tail, and it is the *square* of that slope, averaged, that is charged.

**Supersonically, camber is nearly always the wrong answer.** It buys no lift-curve slope (the slope is $4/\beta$ regardless), no favourable moment, and no stall margin that matters at cruise. Its only benefit is subsonic and transonic handling — takeoff, climb, approach.

*What real designs do instead.* Three approaches, all of which avoid paying the cruise penalty:

**Variable geometry.** Deploy camber only when it is needed: drooped leading edges and trailing-edge flaps for low speed, retracted for cruise. Concorde's droop nose is the most visible example of this philosophy, though it served visibility rather than lift.

**Vortex lift.** A highly swept sharp-edged delta generates a stable leading-edge vortex at high $\alpha$, producing large nonlinear lift without camber. This is how Concorde and every delta fighter achieve their approach lift coefficients.

**Tiny, carefully optimized camber.** Where camber *is* used supersonically, it is on the order of 0.3–0.5% and shaped by formal optimization — trading a small measured drag increment for a specific trim or lift benefit, rather than adopted as a matter of course.

**P3** (a) *Lower surface — oblique shock.* The flow is turned $4°$ into itself. Solving the $\theta$–$\beta$–$M$ relation at $M_\infty = 2.0$, $\theta = 4°$ (weak root):

$$\beta_{\rm shock} = 33.39°, \qquad M_{n1} = 2.0\sin33.39° = 2.0(0.55034) = 1.1007.$$

$$\frac{p_l}{p_\infty} = 1+\frac{2\gamma}{\gamma+1}\left(M_{n1}^2-1\right) = 1+1.16667\left(1.21154-1\right) = 1+0.24680 = 1.24680.$$

*Upper surface — Prandtl–Meyer expansion.* The flow turns $4°$ away from itself:

$$\nu(2.0) = 26.380°, \qquad \nu\left(M_u\right) = 26.380+4 = 30.380°, \qquad M_u = 2.1483.$$

Since the expansion is isentropic, $p_0$ is unchanged:

$$\frac{p_u}{p_\infty} = \left(\frac{1+0.2(2.0)^2}{1+0.2(2.1483)^2}\right)^{3.5} = \left(\frac{1.8000}{1.9230}\right)^{3.5} = \left(0.93604\right)^{3.5} = 0.79344.$$

**So the lower face carries 1.247 times ambient and the upper face 0.793 times ambient.**

(b) $$q_\infty = \tfrac12\gamma p_\infty M_\infty^2 = 0.7(4)p_\infty = 2.800\,p_\infty.$$

Both faces are flat and carry uniform pressure, so the resultant is normal to the plate:

$$c_n = \frac{p_l-p_u}{q_\infty} = \frac{1.24674-0.79344}{2.800} = \frac{0.45330}{2.800} = 0.16189.$$

Resolving into free-stream axes:

$$c_l = c_n\cos\alpha = 0.16189\cos4° = 0.16189(0.997564) = 0.16150,$$

$$c_{d,w} = c_n\sin\alpha = 0.16189\sin4° = 0.16189(0.069756) = 0.011293.$$

$$\frac{l}{d} = \cot4° = 14.30.$$

*Ackeret comparison.* $\alpha = 0.069813$ rad, $\beta = \sqrt{3} = 1.73205$:

$$c_l = \frac{4(0.069813)}{1.73205} = 0.16123, \qquad c_{d,w} = \frac{4(0.069813)^2}{1.73205} = 0.011258.$$

| | Exact | Ackeret | Error |
|---|---|---|---|
| $c_l$ | 0.16150 | 0.16123 | $-0.17\%$ |
| $c_{d,w}$ | 0.011293 | 0.011258 | $-0.31\%$ |

**Linear theory is accurate to two-tenths of a percent here.** The reason is that the shock is very weak — $M_{n1} = 1.10$, whose stagnation-pressure loss is only 0.1% — so the compression is nearly isentropic, which is precisely what the linearization assumes. The agreement degrades as $\alpha$ or $M_\infty$ grows and the shock strengthens.

(c) *Where the wave drag comes from.* Three statements, in increasing depth:

**Geometrically:** the pressure force on each face is perpendicular to that face, and the faces are inclined at $\pm\alpha$ to the free stream. The resultant is therefore perpendicular to the *plate*, not to the free stream, so it has a streamwise component $c_n\sin\alpha$. **That component is the drag.**

**By comparison with the subsonic case:** a subsonic flat plate at incidence has exactly the same normal force — but it has *no* drag, because the flow wraps around the sharp leading edge with an infinite velocity and an integrable pressure singularity ([2.2](02-02-vortex-sheet-thin-airfoil-equation.md), Example 2). That singularity produces a forward-pointing **leading-edge suction** force that exactly cancels the streamwise component of the normal force — the mathematical statement of d'Alembert's paradox in two dimensions.

**Supersonic flow has no leading-edge suction**, because disturbances cannot propagate upstream and the flow simply cannot go around the nose. **The cancellation fails, and what remains is wave drag.**

**Thermodynamically:** the leading-edge shock generates entropy, however slightly. That entropy appears as a permanent loss of stagnation pressure, and by the argument of [4.2](04-02-isentropic-stagnation-relations.md) a stagnation-pressure loss *is* destroyed available work. The wave drag times the flight speed is exactly the rate at which the aircraft is doing that destroying. **Wave drag is entropy production, priced as force.**

*Why sweep reduces it.* Two distinct mechanisms, and both matter:

**The Mach-cone argument.** If the leading edge is swept back further than the Mach angle — $\Lambda>90°-\mu$, which at $M = 2$ means $\Lambda>60°$ — then the component of the free stream normal to the leading edge is *subsonic*. The leading edge then behaves subsonically: the shock detaches and weakens, the nose may be rounded, and some **leading-edge suction is recovered**, directly cancelling part of the streamwise force. This is the strongest form of the benefit and is why Concorde and the SR-71 use deltas swept 55–70°.

**The effective-thickness argument.** Even for a supersonic leading edge, sweeping the wing reduces the streamwise component of every surface slope. Since wave drag goes as the *square* of surface slope, a section that is $t/c$ thick normal to the leading edge presents an effective $(t/c)\cos\Lambda$ to the streamwise flow, and its wave drag falls as $\cos^2\Lambda$ — while the normal Mach number falls too, further reducing $\beta$-normalized loading.

*And the same sweep does a third job.* Below $M = 1$, on the same aircraft, that sweep is delaying $M_{cr}$ ([4.6](04-06-subsonic-compressibility-transonic.md)). **A supersonic aircraft's sweep is doing three different things in three different flight regimes**, which is why the sweep angle is one of the first numbers fixed in a supersonic design and one of the hardest to change afterwards.

*The costs, so the picture is complete.* Extreme sweep gives poor low-speed lift ($C_L\propto\cos^2\Lambda$), a heavy long-spar structure, and a strong pitch-up tendency. **Concorde's approach speed of 300 km/h and its extraordinary nose-high attitude on final approach are the direct price of the sweep that made $M = 2$ cruise possible** — the aircraft flew its approach on vortex lift, at an angle of attack no conventional wing could survive.

</details>

## Flashback

**From Lesson 4.6 (Subsonic compressibility and the transonic barrier):** An airfoil has an incompressible minimum pressure coefficient of $-0.55$ and an incompressible lift coefficient of $0.40$ at cruise incidence. (a) Find $c_l$ and $C_{p,\min}$ at $M_\infty = 0.7$. (b) Estimate $M_{cr}$. (c) Estimate $M_{dd}$. (d) State what sweep angle would allow cruise at $M_\infty = 0.80$.

<details>
<summary>Solution</summary>

(a) $$\beta = \sqrt{1-0.49} = \sqrt{0.51} = 0.71414, \qquad \frac{1}{\beta} = 1.40028.$$

$$c_l = 0.40(1.40028) = 0.5601, \qquad C_{p,\min} = -0.55(1.40028) = -0.7702.$$

(b) Interpolating the $M_{cr}$ table between $C_{p,0,\min} = -0.5\ (M_{cr} = 0.716)$ and $-0.6\ (M_{cr} = 0.689)$:

$$M_{cr}\approx0.702.$$

*(Check: at $M = 0.702$ the Prandtl–Glauert value is $-0.55/\sqrt{1-0.4928} = -0.772$, and $C_{p,\rm crit}(0.702) = -0.772$ ✓)*

**And notice: at the $M_\infty = 0.7$ of part (a), $C_{p,\min} = -0.770$ against $C_{p,\rm crit}(0.7) = -0.779$.** The section is within 1% of critical — it is essentially on the threshold.

(c) $$M_{dd}\approx M_{cr}+0.06\approx0.76.$$

(d) $$\cos\Lambda = \frac{M_{cr}}{M_\infty} = \frac{0.702}{0.80} = 0.8775, \qquad \Lambda = 28.7°.$$

*(Or, if cruise is set by $M_{dd}$ rather than $M_{cr}$, less sweep suffices.)*

*The bridge across the whole of Module 4.* This flashback and this lesson are the two sides of $M = 1$, and it is worth seeing them side by side one final time:

| | $M<1$ (4.6) | $M>1$ (4.7) |
|---|---|---|
| Compressibility factor | $1/\sqrt{1-M^2}$ | $1/\sqrt{M^2-1}$ |
| Effect of rising $M$ | loading **increases** | loading **decreases** |
| Lift-curve slope | $2\pi/\beta$ | $4/\beta$ |
| Aerodynamic centre | $c/4$ | $c/2$ |
| Thickness drag | none | $4\overline{g_t^2}/\beta$ |
| Camber | free lift | pure drag penalty |
| Leading edge | rounded, essential | sharp, essential |
| Reason for sweep | delay $M_{cr}$ | get inside the Mach cone |
| Governing equation | elliptic | hyperbolic |

**Every row flips.** And the single mathematical fact underneath all of them is the change of sign inside the square root — the transition of the governing equation from elliptic, where every point influences every other, to hyperbolic, where influence travels only along characteristics.

**That is the deepest thing this course has to say.** Subsonic aerodynamics is a theory of global equilibrium: circulation, Kutta conditions, integral equations over the whole surface. Supersonic aerodynamics is a theory of local, one-way causality: each point knows only its own slope, and nothing knows what lies ahead.

</details>

## Connections

- **Backward:** the shock and expansion used in the exact solution are [4.4](04-04-oblique-shocks-prandtl-meyer.md)'s; the $p_0$ loss that *is* the wave drag is [4.2](04-02-isentropic-stagnation-relations.md)'s and [4.3](04-03-normal-shock-waves.md)'s; the leading-edge suction whose absence causes wave drag is [2.2](02-02-vortex-sheet-thin-airfoil-equation.md)'s $x^{-1/2}$ singularity; the subsonic aerodynamic centre this lesson displaces is [2.3](02-03-symmetric-thin-airfoil.md)'s and [2.4](02-04-cambered-airfoil-aerodynamic-center.md)'s; the first, subsonic reason for sweep is [4.6](04-06-subsonic-compressibility-transonic.md)'s.
- **Forward:** this closes the course. [`propulsion`](../../propulsion/syllabus.md) takes the compressible toolkit into engines; [`orbital-mechanics`](../../orbital-mechanics/syllabus.md) picks up where the atmosphere ends.
- **Sideways:** "the pressure depends only on the local slope" is a **geometrical-optics** statement — information travelling along characteristics with no back-reaction — and it is the same approximation as the eikonal limit in [`waves-optics`](../../waves-optics/syllabus.md), or the WKB limit in quantum mechanics. The Mach cone is a light cone; the elliptic-to-hyperbolic transition at $M = 1$ is the same change of causal structure that separates statics from wave propagation throughout [`pdes`](../../pdes/syllabus.md).
