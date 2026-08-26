# Aerodynamics · Lesson 4.4: Oblique shocks and Prandtl–Meyer expansion

> ⏱ ~15 min · Module 4: Compressible and supersonic flow · Builds on: [4.3 Normal shock waves](04-03-normal-shock-waves.md) · Unlocks: [4.7 Supersonic airfoils, wave drag, and wing sweep](04-07-supersonic-airfoils-wave-drag-sweep.md)

## Why this matters

Real supersonic flow does not meet flat plates head-on; it meets wedges, cones, ramps, and airfoil surfaces at an angle. **The shock tilts, and that changes everything favourably.**

A tilted shock processes only the *normal* component of the flow. Tilt it enough and that component is barely supersonic, so the shock is weak, the stagnation-pressure loss is tiny, and — crucially — **the downstream flow can stay supersonic.** That is what makes the multi-shock inlet of [4.3](04-03-normal-shock-waves.md) possible, and it is why every supersonic aircraft is built of wedges and ramps.

The other half of the lesson is the **expansion fan**: what happens when supersonic flow turns *away* from itself. Expansions cannot form shocks — the waves spread rather than coalesce — so a Prandtl–Meyer expansion is perfectly **isentropic**. Turning into the flow costs entropy; turning away is free.

**With these two tools you can analyze any supersonic airfoil**, which is [4.7](04-07-supersonic-airfoils-wave-drag-sweep.md)'s business and the course's final destination.

## The idea

**An oblique shock is a normal shock in disguise.** Decompose the upstream velocity into components normal and tangential to the shock. The tangential component passes through unchanged — there is no pressure gradient along the shock to alter it. **All the physics is in the normal component**, so every relation from [4.3](04-03-normal-shock-waves.md) applies verbatim with $M_1$ replaced by $M_{n1} = M_1\sin\beta$.

**Which immediately explains the payoff.** At $M_1 = 2$ a normal shock ($\beta = 90°$) has $M_{n1} = 2$ and loses 28% of $p_0$. Tilt it to $\beta = 39°$ and $M_{n1} = 1.27$ — a weak shock, losing 1.5%. **Same free stream, twenty times less loss**, purchased by turning the flow only $10°$.

**And the flow stays supersonic.** The normal component drops below 1, but the tangential component is untouched and large, so the resultant downstream Mach number can remain well above 1. This is what lets several oblique shocks act in series.

**Geometry links the shock angle to the turn angle.** A wedge of half-angle $\theta$ forces the flow to turn by $\theta$; the shock adopts whatever angle $\beta$ delivers that turn. The relation is the **$\theta$–$\beta$–$M$ equation**, and it has two roots.

**Two roots: weak and strong.** The weak solution has a smaller $\beta$, less loss, and usually supersonic downstream flow. The strong solution has a larger $\beta$, more loss, and subsonic downstream flow. **Nature almost always selects the weak one** in external flow, because the downstream boundary condition does not force otherwise.

**And there is a maximum turn angle.** Beyond $\theta_{\max}$ — about $23°$ at $M = 2$ — no attached oblique shock solution exists. The shock **detaches** and stands off as a curved bow shock, with a normal-shock segment on the axis and all the loss that implies. **Keeping wedge angles below $\theta_{\max}$ is a hard design constraint on every supersonic body.**

**Expansions are the mirror image, and they are free.** Turning away from the flow lowers the pressure, raises the Mach number, and *lowers* the temperature — so each successive wave travels slower than the last and the waves **spread apart** rather than piling up. No discontinuity forms, no entropy is generated, and the turn is exactly isentropic.

**The Prandtl–Meyer function is the bookkeeping.** $\nu(M)$ measures how far a flow has already turned from $M = 1$; turning through $\theta$ simply adds $\theta$ to $\nu$.

## The formal version

**Mach angle.** The half-angle of the wave cone from a point disturbance:

$$\boxed{\;\mu = \arcsin\frac{1}{M}.\;}$$

An oblique shock's angle always satisfies $\mu\leq\beta\leq90°$: a vanishingly weak shock *is* a Mach wave.

**Oblique-shock decomposition.**

$$\boxed{\;M_{n1} = M_1\sin\beta, \qquad M_2 = \frac{M_{n2}}{\sin(\beta-\theta)},\;}$$

and every normal-shock relation of [4.3](04-03-normal-shock-waves.md) applies with $M_1\to M_{n1}$ and $M_2\to M_{n2}$:

$$\frac{p_2}{p_1} = 1+\frac{2\gamma}{\gamma+1}\left(M_{n1}^2-1\right), \qquad \frac{\rho_2}{\rho_1} = \frac{(\gamma+1)M_{n1}^2}{(\gamma-1)M_{n1}^2+2}, \qquad \frac{T_2}{T_1} = \frac{p_2}{p_1}\frac{\rho_1}{\rho_2},$$

$$M_{n2}^2 = \frac{1+\frac{\gamma-1}{2}M_{n1}^2}{\gamma M_{n1}^2-\frac{\gamma-1}{2}}, \qquad \frac{p_{0,2}}{p_{0,1}} = f\!\left(M_{n1}\right)\ \text{(normal-shock formula)}.$$

**Tangential velocity is unchanged**, $u_{t1} = u_{t2}$, which is the geometric content of the whole decomposition.

**The $\theta$–$\beta$–$M$ relation.**

$$\boxed{\;\tan\theta = 2\cot\beta\,\frac{M_1^2\sin^2\beta-1}{M_1^2\left(\gamma+\cos2\beta\right)+2}.\;}$$

*In words: given the free-stream Mach number and the wedge angle, this fixes the shock angle.*

**Maximum deflection.**

| $M_1$ | $\theta_{\max}$ | $\beta$ at $\theta_{\max}$ |
|---|---|---|
| 1.5 | $12.11°$ | $66.6°$ |
| 2.0 | $22.97°$ | $64.7°$ |
| 3.0 | $34.07°$ | $65.2°$ |
| 5.0 | $41.12°$ | $66.6°$ |
| $\infty$ | $45.58°$ | $67.8°$ |

**Even at infinite Mach number a wedge cannot turn the flow more than $45.6°$.** Beyond $\theta_{\max}$ the shock detaches.

**Prandtl–Meyer function.**

$$\boxed{\;\nu(M) = \sqrt{\frac{\gamma+1}{\gamma-1}}\arctan\sqrt{\frac{\gamma-1}{\gamma+1}\left(M^2-1\right)}-\arctan\sqrt{M^2-1},\;}$$

with $\nu(1) = 0$. For an expansion turning the flow through $\theta$:

$$\boxed{\;\nu\left(M_2\right) = \nu\left(M_1\right)+\theta, \qquad p_{0,2} = p_{0,1},\ T_{0,2} = T_{0,1}\ \text{(isentropic)}.\;}$$

**A useful table:**

| $M$ | $\nu(M)$ | $\mu$ |
|---|---|---|
| 1.0 | $0°$ | $90°$ |
| 1.5 | $11.91°$ | $41.81°$ |
| 2.0 | $26.38°$ | $30.00°$ |
| 3.0 | $49.76°$ | $19.47°$ |
| 4.0 | $65.78°$ | $14.48°$ |
| $\infty$ | $130.45°$ | $0°$ |

**A flow can be turned at most $130.45°$ before reaching infinite Mach number** — the counterpart of the $V_{\max}$ bound in [4.2](04-02-isentropic-stagnation-relations.md).

**Static properties across an expansion** follow from the *isentropic* relations, using the common $p_0$:

$$\frac{p_2}{p_1} = \left(\frac{1+\frac{\gamma-1}{2}M_1^2}{1+\frac{\gamma-1}{2}M_2^2}\right)^{\frac{\gamma}{\gamma-1}}.$$

## Picture

![A three-panel figure. Left panel: supersonic flow over a wedge of half-angle theta, with a straight oblique shock springing from the apex at angle beta to the free stream; the incoming velocity vector is decomposed at the shock into a normal component labelled M sub n one and a tangential component, with the note tangential unchanged, and the downstream flow runs parallel to the wedge surface with a shorter normal component and the same tangential one. Middle panel: the theta-beta-M diagram, plotting shock angle beta against deflection angle theta for three Mach-number curves, each a closed arc rising from the Mach-angle value at zero deflection to a maximum and curving back to ninety degrees; the lower branch of each arc is labelled weak solution, the upper branch strong solution, the apex is marked theta max, and a shaded region to the right of all the arcs is labelled no attached solution, shock detaches, with a small inset sketch of a detached curved bow shock standing off a blunt wedge. Right panel: a Prandtl-Meyer expansion fan at a convex corner, drawn as a continuous fan of straight Mach lines from the corner, the first at the upstream Mach angle and the last at the smaller downstream Mach angle; streamlines bend smoothly through the fan, and annotations read pressure falls, Mach rises, entropy unchanged, and waves spread, so no shock can form.](assets/04-04-fig1.svg)

Left: the decomposition that makes oblique shocks tractable.

Middle: the map every supersonic designer works from — pick $M_1$ and $\theta$, read $\beta$, and check you are left of the apex.

Right: the compression's benign twin.

## Worked examples

**Example 1 (a $10°$ ramp at $M = 2$, and why it beats a normal shock).** Air at $M_1 = 2.0$ is turned $\theta = 10°$ by a compression ramp.

*Find the shock angle.* Solving the $\theta$–$\beta$–$M$ relation for the weak root:

$$\beta = 39.31°.$$

*(The strong root is $\beta = 83.70°$, and it is not what occurs here.)*

*Normal component.*

$$M_{n1} = M_1\sin\beta = 2.0\sin39.31° = 2.0(0.63357) = 1.2671.$$

*Apply the normal-shock relations to $M_{n1}$.*

$$\frac{p_2}{p_1} = 1+\frac{2.8}{2.4}\left(1.2671^2-1\right) = 1+1.16667(0.60555) = 1.7066,$$

$$\frac{\rho_2}{\rho_1} = \frac{2.4(1.60555)}{0.4(1.60555)+2} = \frac{3.8533}{2.6422} = 1.4584, \qquad \frac{T_2}{T_1} = \frac{1.7066}{1.4584} = 1.1702,$$

$$M_{n2}^2 = \frac{1+0.2(1.60555)}{1.4(1.60555)-0.2} = \frac{1.32111}{2.04777} = 0.64514, \qquad M_{n2} = 0.80319.$$

*Recover the downstream Mach number.*

$$M_2 = \frac{M_{n2}}{\sin(\beta-\theta)} = \frac{0.80319}{\sin(29.31°)} = \frac{0.80319}{0.48959} = 1.6405.$$

**Still supersonic** — the tangential component carried it through.

*The stagnation-pressure loss.*

$$\frac{p_{0,2}}{p_{0,1}} = 0.98464 \qquad\text{(from the normal-shock formula at } M_{n1} = 1.2671).$$

*Comparison, and it is the point of the lesson.*

| | Normal shock at $M = 2$ | $10°$ oblique ramp |
|---|---|---|
| $M_2$ | 0.577 (subsonic) | 1.641 (supersonic) |
| $p_2/p_1$ | 4.50 | 1.71 |
| $p_{0,2}/p_{0,1}$ | **0.721** | **0.985** |
| Loss | 27.9% | 1.5% |

**Nineteen times less stagnation-pressure loss**, for a $10°$ turn.

*Reading it.* The oblique shock does less compression — a factor of 1.71 rather than 4.50 — so the comparison is not entirely fair on its own. But that is exactly the design insight: **you can stack oblique shocks.** Three $10°$ turns would give roughly $1.71^3\approx5$ in pressure ratio at a total loss of $1-0.985^3 = 4.5\%$, against 28% for the single normal shock that achieves less compression.

**Entropy production is enormously nonlinear in shock strength**, and stacking weak shocks is the way to exploit that. This is the quantitative version of [4.3](04-03-normal-shock-waves.md)'s Example 2.

**Example 2 (a $10°$ expansion at $M = 2$).** The same flow now turns *away* from itself by $10°$ at a convex corner.

*Prandtl–Meyer bookkeeping.*

$$\nu\left(M_1\right) = \nu(2.0) = 26.38°,$$
$$\nu\left(M_2\right) = 26.38°+10° = 36.38°,$$
$$M_2 = \nu^{-1}\left(36.38°\right) = 2.385.$$

*Static properties.* $p_0$ and $T_0$ are unchanged, so

$$\frac{p_2}{p_1} = \left(\frac{1+0.2(4)}{1+0.2(5.688)}\right)^{3.5} = \left(\frac{1.8}{2.1376}\right)^{3.5} = \left(0.84206\right)^{3.5} = 0.5480,$$

$$\frac{T_2}{T_1} = \frac{1.8}{2.1376} = 0.8421.$$

*The fan's geometry.*

$$\mu_1 = \arcsin\frac{1}{2.0} = 30.00°, \qquad \mu_2 = \arcsin\frac{1}{2.385} = 24.79°.$$

The fan is bounded by these two Mach lines, and the flow turns continuously between them.

*The symmetry, stated plainly.*

| | $10°$ compression | $10°$ expansion |
|---|---|---|
| $M$ | $2.0\to1.641$ | $2.0\to2.385$ |
| $p_2/p_1$ | 1.707 | 0.548 |
| $T_2/T_1$ | 1.170 | 0.842 |
| $p_{0,2}/p_{0,1}$ | 0.985 | **1.000** |
| Wave | one discontinuity | a continuous fan |

**The expansion is exactly reversible; the compression is not.** And the asymmetry has a clean physical cause.

*Why compressions shock and expansions do not.* In a compression, each wave raises $T$ and hence $a$ behind it, so the *next* wave travels faster and gains on the one ahead. The waves **converge** and, given enough distance, coalesce into a discontinuity. In an expansion, each wave lowers $T$ and $a$, so each successive wave is slower and falls behind. The waves **diverge**, spreading into a fan that can never steepen.

**Compression waves catch up; expansion waves run away.** That single sentence explains why shocks exist, why they are always compressive, why the second law forbids expansion shocks ([4.3](04-03-normal-shock-waves.md)), and why supersonic airfoil analysis is a matter of shocks on the windward faces and fans on the leeward ones.

*And it explains a design principle.* On a supersonic body, **compression should be spread over many gentle turns and expansion may be taken all at once.** An inlet uses a series of shallow ramps; a nozzle's diverging section can turn sharply with impunity. The asymmetry between the two halves of a supersonic vehicle's geometry is not aesthetic — it is thermodynamic.

## Watch out

- **You might use $M_1$ instead of $M_{n1}$ in the shock relations.** Only the normal component is shocked.
- **You might compute $M_2$ as $M_{n2}/\sin\beta$.** The downstream flow is parallel to the surface, so the correct angle is $\beta-\theta$.
- **You might pick the strong solution.** In external flow over a wedge, the weak solution occurs unless a downstream boundary condition (a duct's back pressure) forces otherwise.
- **You might exceed $\theta_{\max}$ without noticing.** There is no solution to find — the shock detaches, and any $\beta$ you compute is spurious.
- **You might apply Prandtl–Meyer across a shock, or shock relations across a fan.** They are different physics: one is isentropic, one is not.
- **You might forget $\nu$ is measured from $M = 1$.** It is an absolute angular coordinate, not an increment; $\nu(M_2) = \nu(M_1)+\theta$ only works because both are measured from the same origin.
- **You might expect an expansion to have a maximum turn.** It does — $130.45°$ from $M = 1$ — but it is reached only at infinite Mach number, not by shock detachment.

## One-liner

> Tilt a shock and only its normal component is shocked, so a $10°$ ramp at $M = 2$ costs 1.5% of $p_0$ where a normal shock costs 28% — while turning the other way produces a Prandtl–Meyer fan whose waves spread rather than coalesce, making expansion exactly isentropic and compression fundamentally not.

## Problems

**P1 (🟢)** Air at $M_1 = 2.5$ meets an oblique shock at $\beta = 35°$. (a) Find the Mach angle for this flow. (b) Find $M_{n1}$. (c) Find $p_2/p_1$, $T_2/T_1$, and $M_{n2}$. (d) Find the flow deflection angle from the $\theta$–$\beta$–$M$ relation, and hence $M_2$.

**P2 (🟡)** A symmetric diamond airfoil with $8°$ half-angle flies at $M_\infty = 2.4$ and zero angle of attack, in air at $p_\infty = 30$ kPa. (a) Find the shock angle and the pressure on the forward faces. (b) At the mid-chord shoulder the flow expands through $16°$. Find the Mach number and pressure on the rear faces. (c) Sketch (in words) the wave pattern. (d) Explain why the pressure on the rear faces is *lower* than free stream, and what that means for the drag.

**P3 (🔴)** (a) Find $\theta_{\max}$ at $M_1 = 1.5$, $2.0$, and $3.0$, and describe what happens to the flow over a $25°$ half-angle wedge at each. (b) Explain physically why $\theta_{\max}$ increases with $M_1$ but saturates at $45.6°$. (c) A supersonic inlet is designed with two $9°$ ramps at $M_\infty = 2.6$, followed by a terminal normal shock. Estimate the pressure recovery and compare with a single normal shock. (d) Explain why real inlets need *variable* geometry, and what goes wrong at off-design Mach number.

<details>
<summary>Solutions</summary>

**P1** (a) $$\mu = \arcsin\frac{1}{2.5} = \arcsin(0.4) = 23.58°.$$

*(Check: $\beta = 35°>\mu$ ✓, so a shock of this angle is possible.)*

(b) $$M_{n1} = M_1\sin\beta = 2.5\sin35° = 2.5(0.57358) = 1.4339.$$

(c) $$M_{n1}^2 = 2.0561.$$

$$\frac{p_2}{p_1} = 1+\frac{2.8}{2.4}\left(1.0561\right) = 1+1.2322 = 2.2322,$$

$$\frac{\rho_2}{\rho_1} = \frac{2.4(2.0561)}{0.4(2.0561)+2} = \frac{4.9346}{2.8224} = 1.7484, \qquad \frac{T_2}{T_1} = \frac{2.2322}{1.7484} = 1.2767,$$

$$M_{n2}^2 = \frac{1+0.2(2.0561)}{1.4(2.0561)-0.2} = \frac{1.41122}{2.67854} = 0.52686, \qquad M_{n2} = 0.72584.$$

(d) $$\tan\theta = 2\cot35°\frac{2.5^2\sin^235°-1}{2.5^2\left(1.4+\cos70°\right)+2} = 2(1.42815)\frac{1.05619}{6.25(1.74202)+2}.$$

$$= 2.85630\frac{1.05619}{12.8876} = 2.85630(0.081954) = 0.234084 \quad\Longrightarrow\quad \theta = 13.17°.$$

$$M_2 = \frac{M_{n2}}{\sin(\beta-\theta)} = \frac{0.72584}{\sin(21.83°)} = \frac{0.72584}{0.37182} = 1.9522.$$

*(And the stagnation-pressure loss at $M_{n1} = 1.434$ is $p_{0,2}/p_{0,1} = 0.949$ — a 5% loss, against 50% for a normal shock at $M = 2.5$.)*

**P2** (a) *Forward faces.* The flow is turned through the half-angle $\theta = 8°$ at $M_\infty = 2.4$. Solving the $\theta$–$\beta$–$M$ relation for the weak root:

$$\beta = 31.15°, \qquad M_{n1} = 2.4\sin31.15° = 2.4(0.51727) = 1.2414.$$

$$\frac{p_2}{p_\infty} = 1+1.16667\left(1.2414^2-1\right) = 1+1.16667(0.54114) = 1.6313,$$

$$p_{\rm front} = 1.6313(30) = 48.94\ \mathrm{kPa}.$$

$$M_{n2} = \sqrt{\frac{1+0.2(1.54114)}{1.4(1.54114)-0.2}} = \sqrt{\frac{1.30823}{1.95760}} = 0.81748, \qquad M_2 = \frac{0.81748}{\sin(23.15°)} = 2.0795.$$

*(Loss: $p_{0,2}/p_{0,1} = 0.988$ — barely anything.)*

(b) *Rear faces.* At the shoulder the surface turns away by $2\times8° = 16°$. The flow arriving there is at $M_2 = 2.0795$, having already been compressed by the leading-edge shock, so the Prandtl–Meyer bookkeeping starts from *that* Mach number:

$$\nu\left(2.0795\right) = 28.55°, \qquad \nu\left(M_3\right) = 28.55+16 = 44.55°, \qquad M_3 = 2.743.$$

*Pressure.* The expansion is isentropic, so use the local $p_0$ (which is $0.988\,p_{0,\infty}$, unchanged through the fan):

$$\frac{p_3}{p_2} = \left(\frac{1+0.2(4.3241)}{1+0.2(7.5242)}\right)^{3.5} = \left(\frac{1.86482}{2.50483}\right)^{3.5} = \left(0.74449\right)^{3.5} = 0.35605,$$

$$p_{\rm rear} = 0.35605(48.94) = 17.43\ \mathrm{kPa}.$$

*(A slightly simpler route treats the whole path as one isentropic expansion from $M_\infty$ through a net $8°$ turn: $\nu = 36.75+8 = 44.75°$, giving $M = 2.752$ and $p = 17.38$ kPa. The 0.3% difference is exactly the forward shock's $p_0$ loss — a useful measure of how nearly isentropic a weak oblique shock is.)*

(c) *The wave pattern.* Two straight oblique shocks spring from the leading edge, one above and one below, at $\beta = \pm31.15°$ to the free stream, turning the flow parallel to the forward faces. At the maximum-thickness shoulder, two Prandtl–Meyer fans open, each turning the flow $16°$ back toward the free-stream direction and beyond. At the trailing edge, two more oblique shocks turn the upper and lower streams back to a common direction, and a slip line trails downstream separating streams of equal pressure but different entropy. (Here the airfoil is symmetric and at zero incidence, so the two sides are identical and the slip line is trivial.)

(d) *Why the rear pressure is below free stream.* The leading-edge shock turned the flow only $8°$, but the shoulder turns the surface back by $16°$. **The flow therefore leaves the shoulder pointing $8°$ *past* the free-stream direction**, having expanded to a Mach number above $M_\infty$ and a pressure below $p_\infty$:

$$p_{\rm front} = 48.94\ \mathrm{kPa}\;>\;p_\infty = 30\ \mathrm{kPa}\;>\;p_{\rm rear} = 17.43\ \mathrm{kPa}.$$

*What that means for drag.* The two forward faces present a combined frontal projected area of $t$ per unit span (where $t = c\tan8°$ is the maximum thickness), and so do the two rear faces. High pressure pushing on the forward-facing surfaces and low pressure failing to push back on the rearward-facing ones both give a net **rearward** force:

$$d' = \left(p_{\rm front}-p_{\rm rear}\right)t = (48.94-17.43)(1000)\,c\tan8° = 31{,}510(0.14054)\,c = 4429\,c\ \mathrm{N/m}.$$

$$q_\infty = \tfrac12\gamma p_\infty M_\infty^2 = 0.7(30{,}000)(5.76) = 120{,}960\ \mathrm{Pa},$$

$$c_d = \frac{4429}{120{,}960} = 0.0366.$$

*Cross-check against linearized theory.* Ackeret's result for a symmetric diamond at zero incidence is $c_d = 4(t/c)^2/\sqrt{M_\infty^2-1}$:

$$c_d = \frac{4(0.14054)^2}{\sqrt{5.76-1}} = \frac{0.079004}{2.1817} = 0.0362 \quad\checkmark$$

**Agreement to 1%** between the exact shock–expansion calculation and the linear theory of [4.7](04-07-supersonic-airfoils-wave-drag-sweep.md).

**A drag coefficient of 0.037 at zero lift, with no viscosity anywhere in the calculation.** This is **wave drag** — the price of the entropy generated by the leading- and trailing-edge shocks. For comparison, the friction drag of the same section is about 0.005.

**Wave drag at zero lift is roughly seven times the friction drag**, and it did not exist at all below $M = 1$. **That is why supersonic wings are thin**: $c_d$ scales as $(t/c)^2$, so halving the thickness quarters the wave drag.

**P3** (a) From the $\theta$–$\beta$–$M$ relation:

| $M_1$ | $\theta_{\max}$ | $25°$ wedge? |
|---|---|---|
| 1.5 | $12.11°$ | **detached** |
| 2.0 | $22.97°$ | **detached** |
| 3.0 | $34.07°$ | attached, $\beta = 44.1°$ (weak root) |

*What happens at $M = 1.5$ and $2.0$.* No attached oblique shock can turn the flow $25°$. The shock **detaches** and stands off ahead of the wedge as a curved bow shock. On the stagnation streamline it is locally a *normal* shock, so the flow there becomes subsonic and $p_0$ falls by the full normal-shock amount (28% at $M = 2$). Away from the axis the shock curves back, weakens, and eventually becomes a Mach wave. Behind the bow shock there is a **subsonic pocket** ahead of the wedge, and the flow re-accelerates around the shoulders.

*At $M = 3.0$* the shock stays attached at the apex, remains straight, and the flow behind it is uniform and — checking — supersonic.

(b) *Why $\theta_{\max}$ rises with $M_1$.* A faster flow has more momentum relative to its pressure, so a shock can turn it more before the required pressure rise exceeds what an attached shock can deliver. Equivalently, at higher $M_1$ the shock can adopt a smaller $\beta$ for a given turn, keeping $M_{n1}$ moderate.

*Why it saturates.* Take $M_1\to\infty$ in the $\theta$–$\beta$–$M$ relation. The $M_1^2$ terms dominate both numerator and denominator and cancel:

$$\tan\theta\to2\cot\beta\frac{\sin^2\beta}{\gamma+\cos2\beta},$$

which no longer contains $M_1$ at all. **The geometry becomes Mach-independent**, and maximizing over $\beta$ gives $\theta_{\max} = 45.58°$ at $\beta = 67.79°$.

*The physical statement.* In the hypersonic limit the shock lies close to the body and the flow's ability to turn is limited not by its speed but by the density ratio it can achieve — which saturates at $(\gamma+1)/(\gamma-1) = 6$ ([4.3](04-03-normal-shock-waves.md)). **Both limits are the same fact wearing different clothes**: a perfect gas can only be squeezed so far, so it can only be turned so far.

*(And this is why real hypersonic vehicles behave differently from perfect-gas predictions: dissociation lowers the effective $\gamma$, raises the density limit, and allows larger turning with a closer shock.)*

(c) *Two $9°$ ramps at $M_\infty = 2.6$, then a normal shock.*

*First ramp:* $\theta = 9°$ at $M_1 = 2.6$ gives $\beta_1 = 29.87°$, so

$$M_{n1} = 2.6\sin29.87° = 1.295, \qquad \left(\frac{p_{0,2}}{p_{0,1}}\right)_1 = 0.9803, \qquad M_2 = 2.214.$$

*Second ramp:* $\theta = 9°$ at $M_2 = 2.214$ gives $\beta_2 = 34.58°$, so

$$M_{n2} = 2.214\sin34.58° = 1.257, \qquad \left(\frac{p_{0,3}}{p_{0,2}}\right) = 0.9862, \qquad M_3 = 1.874.$$

*Terminal normal shock at $M_3 = 1.874$:*

$$\left(\frac{p_{0,4}}{p_{0,3}}\right) = 0.7794.$$

*Total.*

$$\pi_d = 0.9803\times0.9862\times0.7794 = 0.7534.$$

*Single normal shock at $M = 2.6$:*

$$\pi_d = 0.4601.$$

$$\frac{0.7534}{0.4601} = 1.64.$$

**A 64% improvement in pressure recovery**, from two ramps. At the rule of thumb of 1.5% thrust per 1% recovery, that is worth roughly 40% more net thrust.

**And notice where the loss now sits.** The two oblique shocks together cost only 3.4%; the terminal normal shock costs 22%. **Almost all the remaining loss is in the last shock**, which is exactly why adding a third ramp — dropping the terminal Mach number further — is the next thing a designer does.

*(A third ramp would push $\pi_d$ toward 0.85, which is why the SR-71 and Concorde used multi-shock systems and why modern designs use isentropic-compression ramps.)*

(d) *Why variable geometry is necessary.* Two independent failures occur off-design.

**The shocks stop focusing on the cowl lip.** The ramps are shaped so that, at the design Mach number, all the oblique shocks meet exactly at the cowl lip. Below design Mach, $\beta$ increases and the shocks fall *outside* the cowl — the inlet **spills** air, and the spillage produces additive drag. Above design Mach, $\beta$ decreases and the shocks fall *inside* the cowl, where they reflect off the internal surfaces, interact with the boundary layer, and cause severe distortion.

**The terminal shock moves.** The normal shock's position in the throat is set by the balance between the captured mass flow and what the engine will swallow. If it is pushed forward out of the throat, the inlet **unstarts**: the shock system is expelled violently, a bow shock forms ahead of the whole inlet, mass flow and pressure recovery collapse instantly, and the engine may surge or flame out.

*What "unstart" costs.* On the SR-71 an unstart produced enough asymmetric thrust and drag to yaw the aircraft violently — crew described being thrown against the canopy. The aircraft's inlet control system, which moved the spike up to 66 cm and modulated bypass doors, existed largely to prevent it.

*How variable geometry fixes it.* A **translating spike or ramp** changes the shock angles to keep them on the cowl lip across the Mach range; **bypass and bleed doors** adjust the swallowed mass flow to hold the terminal shock in the throat; **boundary-layer bleed** through porous ramp surfaces removes the low-momentum air that the shocks would otherwise separate.

**The result is that a supersonic inlet is a control system, not a duct** — and on aircraft designed for a wide Mach range it is comparable in complexity and cost to the engine behind it.

</details>

## Flashback

**From Lesson 4.3 (Normal shock waves):** A normal shock stands at $M_1 = 2.2$ in air at $p_1 = 25$ kPa and $T_1 = 230$ K. (a) Find $M_2$, $p_2$, and $T_2$. (b) Find the stagnation-pressure ratio and the entropy rise. (c) Verify Prandtl's relation. (d) State what would change if this shock were tilted to $\beta = 45°$ instead.

<details>
<summary>Solution</summary>

(a) $$M_1^2 = 4.84.$$

$$M_2^2 = \frac{1+0.2(4.84)}{1.4(4.84)-0.2} = \frac{1.968}{6.576} = 0.29927, \qquad M_2 = 0.5471.$$

$$\frac{p_2}{p_1} = 1+1.16667(3.84) = 5.4800 \quad\Longrightarrow\quad p_2 = 137.00\ \mathrm{kPa},$$

$$\frac{\rho_2}{\rho_1} = \frac{2.4(4.84)}{0.4(4.84)+2} = \frac{11.616}{3.936} = 2.9512, \qquad \frac{T_2}{T_1} = \frac{5.4800}{2.9512} = 1.8569,$$

$$T_2 = 1.8569(230) = 427.1\ \mathrm{K}.$$

(b) $$p_{0,1} = 25\left(1+0.2(4.84)\right)^{3.5} = 25(1.968)^{3.5} = 25(10.693) = 267.32\ \mathrm{kPa},$$

$$p_{0,2} = 137.00\left(1+0.2(0.29927)\right)^{3.5} = 137.00(1.05985)^{3.5} = 137.00(1.22564) = 167.91\ \mathrm{kPa},$$

$$\frac{p_{0,2}}{p_{0,1}} = 0.6281, \qquad \Delta s = -287\ln(0.6281) = 133.5\ \mathrm{J/(kg\cdot K)}.$$

(c) $$T_0 = 230(1.968) = 452.6\ \mathrm{K}, \qquad a^* = \sqrt{1.4(287)(0.83333)(452.6)} = 389.3\ \mathrm{m/s}.$$

$$a_1 = \sqrt{1.4(287)(230)} = 304.0\ \mathrm{m/s}, \qquad u_1 = 2.2(304.0) = 668.8\ \mathrm{m/s},$$
$$a_2 = \sqrt{1.4(287)(427.1)} = 414.2\ \mathrm{m/s}, \qquad u_2 = 0.5471(414.2) = 226.6\ \mathrm{m/s}.$$

$$u_1u_2 = 668.8(226.6) = 151{,}559, \qquad a^{*2} = 389.3^2 = 151{,}558.$$

**Agreement to six figures** ✓

(d) *If the shock were tilted to $\beta = 45°$.* Only the normal component is shocked:

$$M_{n1} = 2.2\sin45° = 2.2(0.70711) = 1.5556.$$

**Everything above recomputes with $1.5556$ in place of $2.2$:**

$$\frac{p_2}{p_1} = 1+1.16667\left(1.5556^2-1\right) = 1+1.16667(1.4199) = 2.6566 \quad\text{(was 5.48)},$$

$$\frac{p_{0,2}}{p_{0,1}} = 0.9112 \quad\text{(was 0.6281)}, \qquad \Delta s = 26.7\ \mathrm{J/(kg\cdot K)} \quad\text{(was 133.5)}.$$

$$M_{n2} = 0.68227, \qquad \theta\ \text{(from }\theta\text{–}\beta\text{–}M) = 17.93°, \qquad M_2 = \frac{0.68227}{\sin(27.07°)} = 1.499.$$

*The three changes worth naming:*

**The loss falls by a factor of four** — 8.9% instead of 37.2%.

**The downstream flow stays supersonic** — $M_2 = 1.50$ instead of $0.547$.

**But the compression is weaker** — 2.66 instead of 5.48.

**That is the entire trade of this lesson**, and the reason a supersonic inlet uses several oblique shocks rather than one normal one: you buy back most of the stagnation pressure by settling for less compression per shock, then take several shocks.

</details>

## Connections

- **Backward:** every relation here is [4.3](04-03-normal-shock-waves.md)'s applied to $M_{n1}$; the isentropic relations governing the expansion fan are [4.2](04-02-isentropic-stagnation-relations.md)'s; the Mach cone is [4.1](04-01-compressibility-sound-speed-energy.md)'s picture of what $M>1$ means.
- **Forward:** [4.7](04-07-supersonic-airfoils-wave-drag-sweep.md) applies shock-on-the-windward-side, fan-on-the-leeward-side to a lifting airfoil and computes wave drag; [4.5](04-05-quasi-1d-nozzle-flow.md) shows oblique shocks appearing at an over-expanded nozzle's lip; [`propulsion` 1.3](../../propulsion/lessons/01-03-nozzle-operating-regimes.md) reads those patterns as rocket-plume diagnostics.
- **Sideways:** the $\theta$–$\beta$–$M$ diagram's two branches and its fold at $\theta_{\max}$ are a **saddle-node bifurcation** — two solutions that approach, merge, and annihilate as a parameter is varied, past which the system jumps to a qualitatively different state (the detached shock). The same structure organizes buckling, hysteresis, and the onset of stall, and its general theory is in [`dynamical-systems`](../../dynamical-systems/syllabus.md).
