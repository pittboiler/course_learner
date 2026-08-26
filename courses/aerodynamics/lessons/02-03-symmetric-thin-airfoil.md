# Aerodynamics · Lesson 2.3: The symmetric thin airfoil

> ⏱ ~15 min · Module 2: Airfoils and finite wings · Builds on: [2.2 The vortex sheet and the thin-airfoil equation](02-02-vortex-sheet-thin-airfoil-equation.md) · Unlocks: [2.4 Cambered airfoil and aerodynamic center](02-04-cambered-airfoil-aerodynamic-center.md), [2.5 Finite wings](02-05-finite-wings-downwash-lifting-line.md)

## Why this matters

Three numbers come out of this lesson, and you will use all three for the rest of the course:

$$c_l = 2\pi\alpha, \qquad c_{m,c/4} = 0, \qquad x_{cp} = \frac{c}{4}.$$

The first says the lift-curve slope of *any* thin symmetric section is $2\pi$ per radian — not approximately, not for a particular airfoil, but universally. The second and third say the aerodynamic loading always acts as though it were concentrated at the quarter-chord point, wherever the airfoil is pointed.

**That last fact is the foundation of aircraft stability.** Every discussion of centre of gravity, trim, and tail sizing starts from "the wing's lift acts at the quarter chord." This lesson is where that comes from.

## The idea

**We already have the answer.** [2.2](02-02-vortex-sheet-thin-airfoil-equation.md) verified that

$$\gamma(\theta) = 2\alpha V_\infty\frac{1+\cos\theta}{\sin\theta}$$

satisfies the fundamental equation for a flat plate and the Kutta condition. Since a symmetric airfoil has $dz_c/dx = 0$ — a flat camber line, whatever its thickness — this *is* the symmetric-airfoil solution. All that remains is to integrate it.

**The loading is nose-heavy.** Look at the distribution: enormous at the leading edge, dropping to zero at the trailing edge. Most of the lift is generated in the front quarter of the chord. That is a physical statement about airfoils that stays true far beyond this theory.

**So the lift acts forward of mid-chord**, and the integral says exactly how far forward: the centroid of $\gamma$ sits at $c/4$.

**And it stays there.** The distribution's *shape* is independent of $\alpha$ — only its overall scale changes. Double the angle of attack and you double the loading everywhere at once, so the centroid does not move. **The centre of pressure is fixed at the quarter chord.**

**That fixedness is the whole reason $c_{m,c/4} = 0$.** If the resultant always acts at $c/4$, it exerts no moment about $c/4$. The moment about any *other* point grows with lift; about that one point it does not exist at all.

## The formal version

**The solution.**

$$\boxed{\;\gamma(\theta) = 2\alpha V_\infty\frac{1+\cos\theta}{\sin\theta}, \qquad x = \frac{c}{2}(1-\cos\theta).\;}$$

**Circulation.** With $dx = \tfrac{c}{2}\sin\theta\,d\theta$:

$$\Gamma = \int_0^c\gamma\,dx = \alpha V_\infty c\int_0^\pi(1+\cos\theta)\,d\theta = \alpha V_\infty c\left[\theta+\sin\theta\right]_0^\pi = \pi\alpha V_\infty c.$$

$$\boxed{\;\Gamma = \pi\alpha V_\infty c.\;}$$

**Lift.** By Kutta–Joukowski, $L' = \rho_\infty V_\infty\Gamma = \pi\rho_\infty V_\infty^2c\,\alpha$, so

$$\boxed{\;c_l = \frac{L'}{q_\infty c} = 2\pi\alpha, \qquad a_0\equiv\frac{dc_l}{d\alpha} = 2\pi\ \text{per radian} = 0.1097\ \text{per degree}.\;}$$

*In words: every thin symmetric airfoil has the same lift-curve slope, and it is $2\pi$.*

**Moment about the leading edge.** Each element $\gamma(\xi)d\xi$ contributes lift $\rho V_\infty\gamma\,d\xi$ at station $\xi$, hence a nose-down (negative, by convention) moment $-\rho V_\infty\xi\gamma(\xi)\,d\xi$:

$$M'_{LE} = -\rho_\infty V_\infty\int_0^c\xi\gamma(\xi)\,d\xi.$$

Substituting and using $\int_0^\pi\sin^2\theta\,d\theta = \pi/2$:

$$\int_0^c\xi\gamma\,d\xi = 2\alpha V_\infty\frac{c^2}{4}\int_0^\pi(1-\cos\theta)(1+\cos\theta)\,d\theta = \frac{\alpha V_\infty c^2}{2}\int_0^\pi\sin^2\theta\,d\theta = \frac{\pi\alpha V_\infty c^2}{4},$$

$$\boxed{\;c_{m,LE} = \frac{M'_{LE}}{q_\infty c^2} = -\frac{\pi\alpha}{2} = -\frac{c_l}{4}.\;}$$

**Centre of pressure.** The point where the resultant acts, $x_{cp} = -M'_{LE}/L'$:

$$\boxed{\;\frac{x_{cp}}{c} = -\frac{c_{m,LE}}{c_l} = \frac{1}{4}, \quad\text{for all }\alpha.\;}$$

**Moment about the quarter chord.** Transferring the moment forward-to-back by $L'\cdot(c/4)$:

$$c_{m,c/4} = c_{m,LE}+\frac{c_l}{4} = -\frac{c_l}{4}+\frac{c_l}{4} = 0.$$

$$\boxed{\;c_{m,c/4} = 0\quad\text{for a symmetric thin airfoil.}\;}$$

**Aerodynamic centre.** Define the **aerodynamic centre** as the point about which the moment coefficient does not change with $\alpha$:

$$\frac{dc_{m,ac}}{d\alpha} = 0.$$

For a general reference point at $x_{\rm ref} = kc$,

$$c_{m,k} = c_{m,LE}+kc_l = c_l\left(k-\tfrac14\right), \qquad \frac{dc_{m,k}}{d\alpha} = 2\pi\left(k-\tfrac14\right),$$

which vanishes only at $k = 1/4$. **So the aerodynamic centre is at the quarter chord.**

**For a symmetric airfoil the centre of pressure and the aerodynamic centre coincide.** [2.4](02-04-cambered-airfoil-aerodynamic-center.md) shows that camber separates them — the aerodynamic centre stays at $c/4$, but the centre of pressure moves with $\alpha$.

## Picture

![A two-panel figure. Left panel: the chordwise loading of a symmetric thin airfoil, showing the vortex-sheet strength gamma divided by V infinity plotted against x over c — a curve rising steeply toward infinity at the leading edge, falling quickly through about 0.5 at x over c equals 0.15, and decaying smoothly to zero at the trailing edge — with the area under the curve shaded and a downward triangle marking its centroid at x over c equals 0.25, labelled centre of pressure. Two curves are shown, one for a small alpha and one for twice that alpha, identical in shape and differing only in scale, with the annotation same shape, same centroid. Right panel: the lift and moment curves — c sub l plotted against alpha as a straight line of slope two pi per radian passing through the origin, with a dashed continuation and a shaded region beyond about sixteen degrees labelled stall, theory blind here; and below it c sub m about the quarter chord plotted flat along zero, with a second line for c sub m about the leading edge sloping downward.](assets/02-03-fig1.svg)

Left: the loading is concentrated at the nose, and scaling $\alpha$ scales the whole curve without moving its centroid — which is *why* the centre of pressure is fixed.

Right: two straight lines and a flat one. Everything this theory predicts, on one plot, plus the region where it stops being true.

## Worked examples

**Example 1 (a NACA 0012 at cruise).** A NACA 0012 section of chord $c = 1.6$ m flies at $V_\infty = 55$ m/s at sea level, at $\alpha = 6°$.

*Angle in radians.* $\alpha = 6°\times\pi/180 = 0.10472$ rad.

*Lift coefficient.*

$$c_l = 2\pi\alpha = 2\pi(0.10472) = 0.6580.$$

*Lift per span.*

$$q_\infty = \tfrac12(1.225)(55)^2 = 1852.8\ \mathrm{Pa}, \qquad L' = c_lq_\infty c = 0.6580(1852.8)(1.6) = 1951\ \mathrm{N/m}.$$

*Circulation.*

$$\Gamma = \pi\alpha V_\infty c = \pi(0.10472)(55)(1.6) = 28.95\ \mathrm{m^2/s}.$$

*Check:* $\rho V_\infty\Gamma = 1.225(55)(28.95) = 1951$ N/m ✓

*Moments.*

$$c_{m,LE} = -\frac{c_l}{4} = -0.1645, \qquad c_{m,c/4} = 0, \qquad x_{cp} = 0.25(1.6) = 0.400\ \mathrm{m}.$$

*Now compare with measurement.* The published NACA 0012 data at $Re\approx6\times10^6$ give a lift-curve slope of about $0.105$ per degree against the theoretical $0.1097$, and $c_{m,c/4}\approx-0.005$ against the theoretical $0$.

**The slope is 4% low and the moment is very nearly zero.** That is remarkable agreement from a theory that discarded thickness entirely, ignored viscosity entirely, and linearized the boundary condition.

*Where the 4% goes.* The boundary layer thickens toward the trailing edge, so the *effective* airfoil is slightly thicker at the tail than the metal one — which slightly decambers it and slightly reduces the slope. The deficit grows as the boundary layer thickens, i.e. at lower Reynolds number: at $Re = 10^6$ the measured slope is closer to $0.10$ per degree.

**Theory is high, always, and by a few percent.** Learn the direction of the error; it makes the theory usable as a design tool.

**Example 2 (why the centre of pressure sits at $c/4$).** The result $x_{cp} = c/4$ deserves to be seen as a statement about the *shape* of the loading rather than a coincidence of integration.

*The centroid, computed directly.*

$$\frac{x_{cp}}{c} = \frac{\int_0^cx\gamma\,dx}{c\int_0^c\gamma\,dx} = \frac{\pi\alpha V_\infty c^2/4}{c\cdot\pi\alpha V_\infty c} = \frac{1}{4}.$$

**The $\alpha$ cancels.** That cancellation is the whole story: $\gamma$ is *proportional* to $\alpha$ at every station, so $\alpha$ appears once in the numerator and once in the denominator.

*How concentrated is the loading, in numbers?*

| $\theta$ | $x/c$ | $\gamma/V_\infty$ at $\alpha = 6°$ |
|---|---|---|
| $15°$ | 0.017 | 1.591 |
| $45°$ | 0.146 | 0.506 |
| $90°$ | 0.500 | 0.209 |
| $135°$ | 0.854 | 0.0868 |
| $170°$ | 0.992 | 0.0183 |

**At 1.7% of chord the sheet strength is 1.6 times the free-stream speed; at mid-chord it is a fifth of that.** The velocity jump across the sheet at $x/c = 0.017$ is $1.59V_\infty = 87$ m/s, meaning the upper surface runs about $44$ m/s faster than the free stream and the lower surface $44$ m/s slower, right at the nose.

*What fraction of the lift is in the front quarter?*

$$\frac{\int_0^{c/4}\gamma\,dx}{\Gamma} = \frac{\int_0^{\pi/2}(1+\cos\theta)d\theta}{\int_0^\pi(1+\cos\theta)d\theta} = \frac{\pi/2+1}{\pi} = \frac{2.5708}{3.1416} = 0.818.$$

**82% of the lift is generated in the first quarter of the chord** — and $x_{cp} = c/4$ is the centroid of a distribution that lopsided, which is why the centre of pressure ends up so far forward.

*And the design consequence.* Structurally, the wing spar wants to be near the quarter chord — that is where the load actually is, and putting the spar there minimizes torsion. Every conventional wing is built this way. **The theory is not just descriptive; it decided where the metal goes.**

## Watch out

- **You might use $2\pi$ per *degree*.** The slope is $2\pi$ per **radian** $= 0.1097$ per degree. This is the single most common slip in the subject.
- **You might extrapolate the straight line past stall.** $c_l = 2\pi\alpha$ has no maximum; real airfoils stall near $c_l\approx1.3$–$1.6$. The theory is silent about where the line stops.
- **You might expect the theory to give drag.** It gives none — d'Alembert's paradox is still in force. Drag arrives in Module 3.
- **You might think a symmetric airfoil's $c_{m,c/4} = 0$ means it is stable.** It means it is *neutral* about that point. Aircraft stability comes from the tail and the CG location, not from the section.
- **You might confuse the centre of pressure with the aerodynamic centre.** For a symmetric section they coincide; for a cambered one they do not, and it is the aerodynamic centre that stays put.
- **You might apply this at high Mach number.** The $2\pi$ slope is incompressible; [4.6](04-06-subsonic-compressibility-transonic.md) divides it by $\sqrt{1-M_\infty^2}$.

## One-liner

> Integrating the flat-plate vortex sheet gives $c_l = 2\pi\alpha$ for every thin symmetric airfoil, and because increasing $\alpha$ scales the loading without reshaping it, the resultant never leaves the quarter chord — so $c_{m,c/4} = 0$ and the aerodynamic centre sits at $c/4$.

## Problems

**P1 (🟢)** A symmetric thin airfoil of chord $c = 1.4$ m flies at $V_\infty = 70$ m/s at sea level, at $\alpha = 4°$. (a) Find $c_l$. (b) Find the lift per unit span. (c) Find the circulation. (d) Find $x_{cp}$ and $c_{m,LE}$.

**P2 (🟡)** A symmetric section of chord $c = 2.2$ m must generate $L' = 5000$ N/m at $V_\infty = 60$ m/s at sea level. (a) Find the required $c_l$ and $\alpha$ in degrees. (b) Find the circulation and the sheet strength at mid-chord. (c) Find the moment per unit span about the leading edge. (d) The section stalls at $c_{l,\max} = 1.35$. Find the stall speed at which it can still produce this lift, and comment on the margin.

**P3 (🔴)** For a symmetric thin airfoil, take moments about a general reference point at $x_{\rm ref} = kc$. (a) Derive $c_{m,k}$ in terms of $c_l$ and $k$. (b) Show that the aerodynamic centre is at $k = 1/4$, and find $dc_{m,k}/d\alpha$ for general $k$. (c) Evaluate $c_{m,k}$ at $\alpha = 2°$ and $\alpha = 8°$ for $k = 0.40$ and for $k = 0.10$. (d) A tailless flying wing carries its centre of gravity at $x_{cg} = kc$. Using the sign of $dc_{m,k}/d\alpha$, determine which values of $k$ give a statically stable aircraft, and explain the result physically.

<details>
<summary>Solutions</summary>

**P1** (a) $$\alpha = 4°= 0.069813\ \mathrm{rad}, \qquad c_l = 2\pi(0.069813) = 0.43865.$$

(b) $$q_\infty = \tfrac12(1.225)(70)^2 = \tfrac12(1.225)(4900) = 3001.3\ \mathrm{Pa},$$
$$L' = c_lq_\infty c = 0.43865(3001.3)(1.4) = 1843\ \mathrm{N/m}.$$

(c) $$\Gamma = \pi\alpha V_\infty c = \pi(0.069813)(70)(1.4) = 21.49\ \mathrm{m^2/s}.$$

*Check:* $\rho V\Gamma = 1.225(70)(21.49) = 1843$ N/m ✓

(d) $$x_{cp} = \frac{c}{4} = 0.350\ \mathrm{m}, \qquad c_{m,LE} = -\frac{c_l}{4} = -0.1097.$$

**P2** (a) $$q_\infty = \tfrac12(1.225)(60)^2 = \tfrac12(1.225)(3600) = 2205\ \mathrm{Pa},$$

$$c_l = \frac{L'}{q_\infty c} = \frac{5000}{2205(2.2)} = \frac{5000}{4851} = 1.0307.$$

$$\alpha = \frac{c_l}{2\pi} = \frac{1.0307}{6.2832} = 0.16404\ \mathrm{rad} = 9.399°.$$

(b) $$\Gamma = \tfrac12 V_\infty c\,c_l = \tfrac12(60)(2.2)(1.0307) = 68.03\ \mathrm{m^2/s}.$$

*Check against $\pi\alpha V_\infty c$:* $\pi(0.16404)(60)(2.2) = 68.03$ ✓

At mid-chord, $\theta = 90°$:

$$\gamma = 2\alpha V_\infty\frac{1+0}{1} = 2(0.16404)(60) = 19.69\ \mathrm{m/s}.$$

(c) $$c_{m,LE} = -\frac{c_l}{4} = -0.25768,$$
$$M'_{LE} = c_{m,LE}\,q_\infty c^2 = -0.25768(2205)(2.2)^2 = -0.25768(2205)(4.84) = -2750\ \mathrm{N\cdot m/m}.$$

*Sanity check:* the lift $5000$ N/m acting at $x_{cp} = 0.55$ m gives $-5000(0.55) = -2750$ N·m/m ✓

(d) At stall the same lift requires $c_l = 1.35$:

$$q_{\rm stall} = \frac{L'}{c_{l,\max}c} = \frac{5000}{1.35(2.2)} = \frac{5000}{2.97} = 1683.5\ \mathrm{Pa},$$

$$V_{\rm stall} = \sqrt{\frac{2q_{\rm stall}}{\rho}} = \sqrt{\frac{2(1683.5)}{1.225}} = \sqrt{2748.6} = 52.4\ \mathrm{m/s}.$$

*The margin.* $60/52.4 = 1.14$ — the cruise speed is only 14% above the stall speed, and the operating $c_l = 1.03$ is 76% of $c_{l,\max}$.

**That is an uncomfortably thin margin**, and worse than the speed ratio suggests: a $1.5g$ manoeuvre or a gust needs $c_l = 1.55 > c_{l,\max}$ and would stall the section outright. Certification rules typically require cruise at $1.3V_{\rm stall}$ or better. A real design would fix this with more area, more camber, or high-lift devices — all of which raise the usable $c_l$ without raising $\alpha$.

*And a caution about the theory.* $\alpha = 9.4°$ is at the edge of where $c_l = 2\pi\alpha$ can be trusted; the real section would need a degree or so more incidence than the linear theory says, precisely because the curve bends over before stall.

**P3** (a) Take moments about $x_{\rm ref} = kc$. The lift acts at $x_{cp} = c/4$, so the moment arm is $(c/4-kc)$ and the moment (nose-up positive) is

$$M'_k = -L'\left(\frac{c}{4}-kc\right) = L'c\left(k-\frac14\right).$$

Dividing by $q_\infty c^2$:

$$\boxed{\;c_{m,k} = c_l\left(k-\tfrac14\right).\;}$$

*Equivalently, by transfer from the leading edge:* $c_{m,k} = c_{m,LE}+kc_l = -c_l/4+kc_l$ — same thing.

(b) $$\frac{dc_{m,k}}{d\alpha} = \frac{dc_l}{d\alpha}\left(k-\tfrac14\right) = 2\pi\left(k-\tfrac14\right).$$

This vanishes if and only if $k = 1/4$, so **the aerodynamic centre is at the quarter chord** — and note that the conclusion holds for *any* lift-curve slope, not just $2\pi$: the aerodynamic centre's location is a property of the loading shape, not of the slope's value.

(c) With $c_l = 2\pi\alpha$: at $\alpha = 2° = 0.034907$ rad, $c_l = 0.21932$; at $\alpha = 8° = 0.13963$ rad, $c_l = 0.87730$.

| $k$ | $k-\tfrac14$ | $c_{m,k}$ at $2°$ | $c_{m,k}$ at $8°$ | $dc_{m,k}/d\alpha$ |
|---|---|---|---|---|
| 0.40 | $+0.15$ | $+0.0329$ | $+0.1316$ | $+0.9425$ /rad |
| 0.25 | 0 | 0 | 0 | 0 |
| 0.10 | $-0.15$ | $-0.0329$ | $-0.1316$ | $-0.9425$ /rad |

**Behind the quarter chord the moment grows nose-up with $\alpha$; ahead of it, nose-down.**

(d) *The stability criterion.* Static pitch stability requires that a disturbance increasing $\alpha$ produce a **restoring, nose-down** moment about the centre of gravity:

$$\frac{dc_{m,cg}}{d\alpha}<0.$$

From (b) this means $2\pi(k-1/4)<0$, i.e.

$$\boxed{\;k<\tfrac14\;}$$

— **the centre of gravity must be ahead of the aerodynamic centre.**

*Physically.* Suppose the aircraft is bumped nose-up. The extra lift generated by the extra $\alpha$ appears at the aerodynamic centre. If the CG is *ahead* of that point, the extra lift acts behind the CG and pushes the nose back down: the disturbance is opposed. If the CG is *behind* it, the extra lift acts ahead of the CG and pitches the nose up further — the disturbance is amplified, and the aircraft diverges.

*What this means for real aircraft.* The distance $(1/4-k)c$ is the **static margin**, typically 5–15% of chord on a stable design. Note the cost: a stable flying wing needs its CG well forward, and with $c_{m,c/4} = 0$ for a symmetric section there is nothing to trim against — the aircraft flies nose-down.

**This is exactly why tailless designs are hard**, and why real flying wings use reflexed camber (a trailing edge turned *up*, giving positive $c_{m,c/4}$) or sweep with washout to buy back a trimming moment. It is also why a conventional aircraft's tail exists: the tail sits far behind the CG and its own lift-curve slope moves the whole aircraft's neutral point aft, letting the CG sit further back while keeping $dc_m/d\alpha<0$.

*And why modern fighters break the rule deliberately.* A relaxed-stability design puts the CG *behind* the neutral point on purpose, accepting divergence in exchange for manoeuvrability, and relies on a flight-control computer to stabilize it artificially. The aerodynamics has not changed; the airframe is simply no longer required to fly itself.

</details>

## Flashback

**From Lesson 2.2 (The vortex sheet and the thin-airfoil equation):** (a) State the fundamental equation of thin-airfoil theory and its side condition. (b) A vortex sheet on a chord of $c = 1.0$ m has $\gamma(x) = 30(1-x/c)^{1/2}$ m/s. Find the total circulation and, at $V_\infty = 40$ m/s, the lift coefficient. (c) Does this distribution satisfy the Kutta condition? (d) Compare its edge behaviour with the flat-plate solution's.

<details>
<summary>Solution</summary>

(a) $$\frac{1}{2\pi}\int_0^c\frac{\gamma(\xi)\,d\xi}{x-\xi} = V_\infty\left(\alpha-\frac{dz_c}{dx}\right), \qquad \text{with}\quad\gamma(c) = 0,$$

the integral a Cauchy principal value. *In words: the sheet's self-induced downwash must exactly cancel the free stream's normal component at every chordwise station, and the sheet strength must vanish at the trailing edge.*

(b) $$\Gamma = \int_0^130\left(1-x\right)^{1/2}dx = 30\left[-\tfrac23(1-x)^{3/2}\right]_0^1 = 30\left(\tfrac23\right) = 20.0\ \mathrm{m^2/s}.$$

$$c_l = \frac{2\Gamma}{V_\infty c} = \frac{2(20.0)}{40(1.0)} = 1.000.$$

(c) $$\gamma(c) = 30(1-1)^{1/2} = 0 \quad\checkmark$$

**Yes** — it vanishes at the trailing edge, so it is an admissible sheet.

(d) *At the trailing edge.* This sheet goes to zero like $(c-x)^{1/2}$. The flat-plate solution, near $\theta = \pi$, behaves as $\gamma\propto\epsilon$ where $\epsilon = \pi-\theta$ and $c-x = \tfrac{c}{2}(1+\cos\theta)\approx c\epsilon^2/4$, so $\epsilon\propto\sqrt{c-x}$ and the flat plate *also* vanishes like $(c-x)^{1/2}$. **They match** — and that is not a coincidence: the square-root approach to zero at a sharp trailing edge is forced by the local geometry, and every admissible solution has it.

*At the leading edge.* Here they differ completely. This sheet is finite ($\gamma(0) = 30$ m/s); the flat-plate solution diverges like $x^{-1/2}$.

**And that difference tells you this distribution is not a solution of the tangency equation.** The $x^{-1/2}$ singularity is what a *sharp* leading edge produces in linearized theory — the flow must turn a corner there, and the theory registers that with an integrable infinity. A sheet with finite leading-edge strength describes something with a rounded, aerodynamically ideal nose meeting the flow head-on, which is the shape of the loading only at exactly one angle of attack (the "ideal" or "design" angle, where the stagnation point sits precisely at the nose).

*So the two questions are distinct.* The Kutta condition is a constraint on the trailing edge only; passing it makes a distribution *admissible*, not *correct*. Correctness requires the integral equation, and for a flat plate at general $\alpha$ that forces the nose singularity.

</details>

## Connections

- **Backward:** the solution being integrated here was verified in [2.2](02-02-vortex-sheet-thin-airfoil-equation.md); the Kutta condition that selected it is [2.1](02-01-airfoil-geometry-kutta-condition.md)'s; $L' = \rho V_\infty\Gamma$ is [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)'s; the moment-transfer algebra is [1.1](01-01-forces-moments-coefficients.md)'s.
- **Forward:** [2.4](02-04-cambered-airfoil-aerodynamic-center.md) adds camber and finds the aerodynamic centre stays at $c/4$ while the centre of pressure starts moving; [2.5](02-05-finite-wings-downwash-lifting-line.md) reduces the $2\pi$ slope for finite span; [4.6](04-06-subsonic-compressibility-transonic.md) corrects it for Mach number; [4.7](04-07-supersonic-airfoils-wave-drag-sweep.md) replaces it entirely above $M = 1$, where the aerodynamic centre jumps to mid-chord.
- **Sideways:** the static-stability argument of P3 — a restoring moment requires the CG ahead of the neutral point — is the aerodynamic instance of the general stability criterion that a system is stable when the *restoring* generalized force opposes the displacement, the same statement as $d^2U/dq^2>0$ in [`analytical-mechanics`](../../analytical-mechanics/syllabus.md) and as negative feedback in [`control-systems`](../../control-systems/syllabus.md).
