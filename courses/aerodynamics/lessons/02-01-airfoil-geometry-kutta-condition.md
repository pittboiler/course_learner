# Aerodynamics · Lesson 2.1: Airfoil geometry and the Kutta condition

> ⏱ ~15 min · Module 2: Airfoils and finite wings · Builds on: [1.3 Cylinder, $C_p$, Kutta–Joukowski](01-03-cylinder-pressure-coefficient-kutta-joukowski.md) · Unlocks: [2.2 The vortex sheet and the thin-airfoil equation](02-02-vortex-sheet-thin-airfoil-equation.md)

## Why this matters

[1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md) left the theory with a hole in it. Kutta–Joukowski says $L' = \rho_\infty V_\infty\Gamma$ — but nothing in the equations says what $\Gamma$ is. Any value satisfies them equally well. A theory that predicts *any* lift you like predicts nothing.

This lesson closes the hole with one physical observation about sharp trailing edges, and in doing so converts potential flow from a pretty piece of mathematics into the tool that designed every wing flying today. It also gives you the vocabulary — chord, camber, thickness, angle of attack — that the rest of the course speaks in.

**The Kutta condition is the single most important idea in subsonic aerodynamics**, and it is almost embarrassingly simple: the flow cannot whip around a sharp corner, so it must leave the trailing edge smoothly, and only one circulation permits that.

## The idea

**Airfoil geometry, in three pieces.** Any airfoil is described by a **chord line** (the straight line from leading edge to trailing edge, length $c$), a **camber line** (the curve midway between upper and lower surfaces), and a **thickness distribution** wrapped symmetrically around that camber line. Camber is the airfoil's asymmetry; thickness is its bulk.

**That decomposition is not just bookkeeping** — it is the reason thin-airfoil theory works. Lift turns out to depend almost entirely on the camber line and the angle of attack, and hardly at all on the thickness. So Module 2 can throw the thickness away and still predict lift to within a few percent.

**Angle of attack** $\alpha$ is the angle between the chord line and the free stream.

**Now the problem.** Put a two-dimensional airfoil in a uniform stream and solve Laplace's equation. You get a one-parameter family of solutions, indexed by $\Gamma$. Every one is a perfectly valid potential flow. They differ in where the rear stagnation point sits: for most values of $\Gamma$ it sits on the *upper* surface somewhere ahead of the trailing edge, and the flow must then come around the sharp tail from below and turn a corner of zero included angle.

**Turning a sharp corner requires infinite speed.** In potential flow, the velocity at a convex corner of zero angle blows up. Real air, with any viscosity at all however small, cannot do this — the boundary layer would separate instantly and violently.

**So nature picks the one solution that doesn't ask it to.** There is exactly one value of $\Gamma$ for which the rear stagnation point sits *at* the trailing edge and the flow leaves smoothly, top and bottom streams merging without turning a corner. That is the **Kutta condition**, and the circulation it selects is the airfoil's actual circulation.

**Where does the air get the circulation from?** From a **starting vortex**. Kelvin's theorem says the total circulation around a large material circuit that started at rest must stay zero. So when the wing accelerates from rest and acquires clockwise bound circulation, it sheds an equal and opposite counterclockwise vortex, which floats away downstream. **You can see it** — it is the visible swirl left behind in smoke when a wing starts moving.

## The formal version

**Geometry.** With $x$ measured along the chord from the leading edge and $z$ normal to it:

$$z_u(x) = z_c(x)+\tfrac12 z_t(x), \qquad z_l(x) = z_c(x)-\tfrac12 z_t(x),$$

where $z_c$ is the camber line and $z_t$ the thickness distribution. **Symmetric airfoil** means $z_c\equiv0$.

**NACA four-digit series.** The classic parameterization, and still the one worth knowing: **NACA $MPXX$** means maximum camber $M$% of chord, located at $P$ tenths of chord, with maximum thickness $XX$% of chord. So a **NACA 2412** has 2% camber at 40% chord and is 12% thick; a **NACA 0012** is the symmetric 12%-thick section.

$$z_c/c = \begin{cases}\dfrac{m}{p^2}\left(2p\dfrac{x}{c}-\dfrac{x^2}{c^2}\right), & 0\leq x/c\leq p,\\[2ex] \dfrac{m}{(1-p)^2}\left(1-2p+2p\dfrac{x}{c}-\dfrac{x^2}{c^2}\right), & p\leq x/c\leq1,\end{cases}$$

with $m = M/100$ and $p = P/10$. The two branches are built to match in value and slope at $x/c = p$.

**Kutta condition.** In its three equivalent statements:

$$\boxed{\;\text{(i) the flow leaves the trailing edge smoothly;}\;}$$
$$\boxed{\;\text{(ii) the velocity at the trailing edge is finite;}\;}$$
$$\boxed{\;\text{(iii) } \gamma(\text{TE}) = 0,\;}$$

where $\gamma$ is the vortex-sheet strength of [2.2](02-02-vortex-sheet-thin-airfoil-equation.md). *In words: don't ask the air to turn a corner at infinite speed.*

**The finite-angle versus cusped distinction.** If the trailing edge has a **finite included angle**, the only way both streams can leave with finite speed is if both leave with *zero* speed — the trailing edge is a stagnation point. If the trailing edge is **cusped** (zero included angle, upper and lower surfaces tangent), the two streams leave at equal, generally nonzero, speeds. **Either way the pressures match**, which is the physically essential part: a vortex sheet cannot support a pressure jump at its end.

**Kelvin's circulation theorem.**

$$\boxed{\;\frac{D\Gamma}{Dt} = 0\;}$$

for a material circuit in an inviscid, barotropic flow with conservative body forces. *In words: the circulation around a loop that moves with the fluid never changes.*

**Consequence.** Draw a huge circuit enclosing both the wing and everything it has shed, at a time when everything was at rest. Then

$$\Gamma_{\rm bound}+\Gamma_{\rm starting} = 0,$$

so the starting vortex carries exactly the negative of the bound circulation. **Lift is created by leaving something behind.**

**Circulation from the lift coefficient.** Combining $L' = \rho_\infty V_\infty\Gamma$ with $L' = c_lq_\infty c$:

$$\boxed{\;\Gamma = \tfrac12 V_\infty c\,c_l.\;}$$

A useful conversion in both directions.

## Picture

![A three-panel figure. Left panel: an airfoil section with its chord line drawn from leading edge to trailing edge, the curved camber line above it, the thickness distribution shown as a double-headed arrow between upper and lower surfaces, and the angle of attack alpha marked between the chord line and the oncoming free-stream arrow. Middle panel: three small sketches of the trailing-edge region stacked vertically — the top one labelled too little circulation, with the rear stagnation point on the upper surface and the flow curling sharply around the sharp tail from below; the bottom one labelled too much circulation, with the stagnation point on the lower surface and the flow curling around from above; the middle one labelled the Kutta condition, with the two streams meeting exactly at the trailing edge and leaving smoothly. Right panel: a wing accelerating from rest, showing a clockwise bound vortex on the wing labelled Gamma and an equal counterclockwise starting vortex left behind in the wake labelled minus Gamma, with a large dashed material circuit enclosing both and the annotation total circulation equals zero, Kelvin.](assets/02-01-fig1.svg)

The middle panel is the whole lesson: three mathematically valid flows, only one of which air will actually perform. The right panel is the answer to "but where does the circulation come from?"

## Worked examples

**Example 1 (reading a NACA 2412).** A NACA 2412 section has chord $c = 1.5$ m. Find the camber line at several stations, its slope at the leading and trailing edges, and the maximum thickness.

*Parameters.* $M = 2$, $P = 4$, $XX = 12$, so $m = 0.02$, $p = 0.40$, $t = 0.12$.

*Camber line.* For $x/c\leq0.4$: $z_c/c = (0.02/0.16)(0.8\,x/c-(x/c)^2) = 0.125(0.8\xi-\xi^2)$ with $\xi = x/c$.
For $x/c\geq0.4$: $z_c/c = (0.02/0.36)(0.2+0.8\xi-\xi^2) = 0.05556(0.2+0.8\xi-\xi^2)$.

| $x/c$ | $z_c/c$ | $z_c$ (m) | $dz_c/dx$ |
|---|---|---|---|
| 0 | 0 | 0 | $+0.1000$ |
| 0.10 | 0.00875 | 0.0131 | $+0.0750$ |
| 0.20 | 0.01500 | 0.0225 | $+0.0500$ |
| **0.40** | **0.02000** | **0.0300** | **0** |
| 0.50 | 0.01944 | 0.0292 | $-0.0111$ |
| 0.70 | 0.01500 | 0.0225 | $-0.0333$ |
| 1.00 | 0 | 0 | $-0.0667$ |

*Checks.* The maximum camber is $0.0200c$ at $x/c = 0.40$ ✓ — exactly the "2" and "4" of the designation, and the slope is zero there as it must be at a maximum. The camber line returns to the chord at both ends ✓.

*Maximum thickness.* From the standard four-digit thickness formula,

$$\frac{z_t}{c} = \frac{t}{0.2}\left(0.2969\sqrt{\xi}-0.1260\xi-0.3516\xi^2+0.2843\xi^3-0.1015\xi^4\right),$$

which peaks at $z_t/c = 0.1200$ at $\xi = 0.30$: the maximum thickness is $0.12(1.5) = 0.180$ m ✓ — the "12".

*What matters for lift.* Only the third column's *slope* — $dz_c/dx$ — enters thin-airfoil theory. **The thickness column never appears at all**, which is why a NACA 0012 and a NACA 0006 have the same predicted lift-curve slope, and why measurement confirms it to within a percent or two.

*And the slope at the ends is where the useful information is.* $dz_c/dx = +0.10$ at the nose and $-0.0667$ at the tail: the camber line's total turning is what produces lift at zero angle of attack, and [2.4](02-04-cambered-airfoil-aerodynamic-center.md) shows it produces a zero-lift angle of about $-2°$ for this section.

**Example 2 (Kelvin, the starting vortex, and the transient).** A wing section of chord $c = 1.5$ m is impulsively accelerated from rest to $V_\infty = 40$ m/s at sea level, and settles at $c_l = 0.55$.

*(a) Steady bound circulation.*

$$\Gamma = \tfrac12 V_\infty c\,c_l = \tfrac12(40)(1.5)(0.55) = 16.5\ \mathrm{m^2/s}.$$

*Check the lift:* $q_\infty = \tfrac12(1.225)(1600) = 980$ Pa, $L' = c_lq_\infty c = 0.55(980)(1.5) = 808.5$ N/m; and $\rho V\Gamma = 1.225(40)(16.5) = 808.5$ N/m ✓.

*(b) The starting vortex.* By Kelvin's theorem the starting vortex carries $\Gamma_{\rm start} = -16.5$ m²/s — the same magnitude, counterclockwise, shed at the moment of the start and thereafter convecting downstream at roughly $V_\infty$.

*(c) Its effect on the wing at 5 chords of travel.* The starting vortex is then $d = 5c = 7.5$ m behind. Treating it as a point vortex, the velocity it induces at the wing is

$$w = \frac{|\Gamma|}{2\pi d} = \frac{16.5}{2\pi(7.5)} = \frac{16.5}{47.12} = 0.350\ \mathrm{m/s},$$

directed **downward**, since the starting vortex is counterclockwise and the wing sits upstream of it. That is an induced angle of

$$\Delta\alpha = \frac{w}{V_\infty} = \frac{0.350}{40} = 0.00875\ \mathrm{rad} = 0.501°,$$

which at a lift slope of $2\pi$ per radian is a lift deficit of

$$\Delta c_l = 2\pi(0.00875) = 0.0550,$$

i.e. **about 10% of the final lift, still missing after five chords of travel.**

*(d) At 100 chords.*

$$w = \frac{16.5}{2\pi(150)} = 0.0175\ \mathrm{m/s}, \qquad \Delta\alpha = 0.025°, \qquad \Delta c_l = 0.0027,$$

**half a percent** — effectively gone.

*Reading it.* The deficit falls off like $1/d$, which is a *slow* decay. Lift is not established the instant a wing starts moving; the exact unsteady result is **Wagner's function**, which says the section reaches half its steady lift immediately and about 90% only after roughly six chord lengths of travel. The point-vortex estimate here reproduces that number well.

**This matters wherever motion is unsteady** — a gust encounter, a rapid pitch, a helicopter blade, a flapping wing. Quasi-steady aerodynamics quietly assumes the wake is far away, and for a blade that sheds vorticity every revolution it simply is not.

## Watch out

- **You might think the Kutta condition is an extra law of physics.** It is not — it is a *selection rule* standing in for viscosity, which the inviscid equations threw away. It restores the one piece of information their loss destroyed.
- **You might expect the trailing edge to always be a stagnation point.** True only for a finite trailing-edge angle. On a cusped edge both streams leave at equal nonzero speed; the invariant is that the *pressures* match.
- **You might apply the Kutta condition to a rounded trailing edge.** It does not apply — there is no sharp corner to forbid, the circulation is genuinely indeterminate in inviscid theory, and the real flow separates. This is exactly the cylinder's problem, which is why a cylinder has no natural lift.
- **You might think camber and angle of attack are interchangeable.** They both add lift, but camber shifts the whole lift curve without changing its slope, and it adds a pitching moment that angle of attack does not.
- **You might read the NACA digits as thickness-first.** The order is camber, camber location, thickness: 2412 is 2% cambered and 12% thick, not the reverse.
- **You might forget that the starting vortex is real.** It is a genuine, observable, persistent vortex — and on a finite wing it joins the tip vortices to close the horseshoe of [2.5](02-05-finite-wings-downwash-lifting-line.md).

## One-liner

> An airfoil is a camber line wearing a thickness distribution, and of the infinitely many potential flows around it, air performs the single one whose circulation lets the flow leave the sharp trailing edge without turning an infinite-speed corner — paying for that circulation by shedding an equal and opposite starting vortex.

## Problems

**P1 (🟢)** A NACA 4412 airfoil has chord $c = 2.0$ m. (a) State its maximum camber, the location of maximum camber, and its maximum thickness, all in metres. (b) Compute $z_c/c$ at $x/c = 0.2$ and $x/c = 0.8$. (c) Compute the camber-line slope at the leading edge and at the trailing edge. (d) How would a NACA 0012's answers to (b) and (c) differ?

**P2 (🟡)** A wing section of chord $c = 1.8$ m flies at $V_\infty = 65$ m/s at sea level with $c_l = 0.70$. (a) Find the bound circulation. (b) Find the lift per unit span two ways and confirm they agree. (c) The pilot pitches up so that $c_l$ rises to $0.95$. Find the new circulation and the strength of the vortex shed during the manoeuvre. (d) Which way does the shed vortex rotate?

**P3 (🔴)** A model airfoil of chord $c = 0.25$ m is impulsively started to $V_\infty = 20$ m/s in a water tunnel ($\rho = 998$ kg/m³) and settles at $c_l = 0.60$. (a) Find the steady bound circulation and lift per span. (b) Find the induced downwash at the airfoil from the starting vortex when the airfoil has travelled 2, 6, and 20 chords, and convert each to a lift deficit assuming a lift slope of $2\pi$/rad. (c) How many chords of travel are needed before the deficit falls below 2% of the steady $c_l$? (d) A helicopter blade section passes through its own shed wake once per revolution. Using your answer to (c), comment on whether quasi-steady aerodynamics is defensible for such a blade.

<details>
<summary>Solutions</summary>

**P1** (a) NACA **4412**: $M = 4$, $P = 4$, $XX = 12$, so $m = 0.04$, $p = 0.4$, $t = 0.12$.

Maximum camber $= 0.04(2.0) = 0.080$ m, at $x = 0.4(2.0) = 0.80$ m from the leading edge. Maximum thickness $= 0.12(2.0) = 0.240$ m.

(b) *At $x/c = 0.2$ (front branch, since $0.2<p$):*

$$\frac{z_c}{c} = \frac{0.04}{0.16}\left(0.8(0.2)-(0.2)^2\right) = 0.25(0.16-0.04) = 0.25(0.12) = 0.0300.$$

*At $x/c = 0.8$ (rear branch):*

$$\frac{z_c}{c} = \frac{0.04}{0.36}\left(0.2+0.8(0.8)-(0.8)^2\right) = 0.11111(0.2+0.64-0.64) = 0.11111(0.2) = 0.02222.$$

(c) *Leading edge, $\xi = 0$:*

$$\frac{dz_c}{dx} = \frac{2m}{p^2}(p-\xi) = \frac{2(0.04)}{0.16}(0.4-0) = 0.5(0.4) = 0.200.$$

*Trailing edge, $\xi = 1$:*

$$\frac{dz_c}{dx} = \frac{2m}{(1-p)^2}(p-\xi) = \frac{2(0.04)}{0.36}(0.4-1) = 0.22222(-0.6) = -0.1333.$$

(d) A **NACA 0012** has $m = 0$, so $z_c\equiv0$ and $dz_c/dx\equiv0$ everywhere — **every answer in (b) and (c) becomes zero.** The thickness is identical (both are 12%), so the two sections have the same $t_{\max} = 0.240$ m and, per thin-airfoil theory, the same lift-curve slope. What differs is the zero-lift angle (about $-4°$ for the 4412, exactly $0°$ for the 0012) and the quarter-chord moment (negative for the 4412, zero for the 0012).

**P2** (a) $$\Gamma = \tfrac12 V_\infty c\,c_l = \tfrac12(65)(1.8)(0.70) = \tfrac12(81.9) = 40.95\ \mathrm{m^2/s}.$$

(b) $$q_\infty = \tfrac12(1.225)(65)^2 = \tfrac12(1.225)(4225) = 2587.8\ \mathrm{Pa}.$$

*From the coefficient:* $L' = c_lq_\infty c = 0.70(2587.8)(1.8) = 3260.6$ N/m.

*From Kutta–Joukowski:* $L' = \rho_\infty V_\infty\Gamma = 1.225(65)(40.95) = 3260.6$ N/m ✓

They agree exactly, as they must — the two expressions are algebraically the same statement.

(c) $$\Gamma_{\rm new} = \tfrac12(65)(1.8)(0.95) = 55.575\ \mathrm{m^2/s},$$
$$\Delta\Gamma_{\rm bound} = 55.575-40.95 = +14.625\ \mathrm{m^2/s}.$$

By Kelvin's theorem the wake must absorb the negative of this:

$$\Gamma_{\rm shed} = -14.625\ \mathrm{m^2/s}.$$

(d) The bound circulation is clockwise-positive in this convention, so the **shed vortex is counterclockwise** — the same sense as the original starting vortex, since the manoeuvre *increased* the lift.

*The general rule:* increasing lift sheds counterclockwise vorticity, decreasing lift sheds clockwise vorticity. A wing in a gusty atmosphere is continuously laying down a ribbon of alternating-sign vorticity behind it, and that ribbon is exactly the record of its lift history.

**P3** (a) $$\Gamma = \tfrac12 V_\infty c\,c_l = \tfrac12(20)(0.25)(0.60) = \tfrac12(3.0) = 1.50\ \mathrm{m^2/s}.$$

$$L' = \rho V_\infty\Gamma = 998(20)(1.50) = 29{,}940\ \mathrm{N/m} = 29.9\ \mathrm{kN/m}.$$

*Check:* $q_\infty = \tfrac12(998)(400) = 199{,}600$ Pa; $c_lq_\infty c = 0.60(199{,}600)(0.25) = 29{,}940$ N/m ✓. (Water's density is what makes this so large — 815 times the air value at the same speed.)

(b) $$w = \frac{\Gamma}{2\pi d}, \qquad \Delta\alpha = \frac{w}{V_\infty}, \qquad \Delta c_l = 2\pi\Delta\alpha = \frac{\Gamma}{V_\infty d}.$$

**That last form is worth noticing** — the $2\pi$ cancels, leaving $\Delta c_l = \Gamma/(V_\infty d)$, and with $\Gamma = \tfrac12 V_\infty c\,c_l$ this becomes

$$\frac{\Delta c_l}{c_l} = \frac{c}{2d} = \frac{1}{2N},$$

where $N = d/c$ is the number of chords travelled. **The deficit is a pure function of chords travelled** — independent of speed, of fluid, and of the lift coefficient itself.

| $N$ (chords) | $d$ (m) | $w$ (m/s) | $\Delta\alpha$ | $\Delta c_l$ | % of $c_l$ |
|---|---|---|---|---|---|
| 2 | 0.50 | 0.4775 | $1.37°$ | 0.150 | 25.0% |
| 6 | 1.50 | 0.1592 | $0.456°$ | 0.050 | 8.33% |
| 20 | 5.00 | 0.0477 | $0.137°$ | 0.015 | 2.50% |

*(Working the first row: $w = 1.5/(2\pi\cdot0.5) = 1.5/3.1416 = 0.4775$ m/s; $\Delta\alpha = 0.4775/20 = 0.02387$ rad $= 1.368°$; $\Delta c_l = 2\pi(0.02387) = 0.150$.)*

(c) From $\Delta c_l/c_l = 1/(2N)$:

$$\frac{1}{2N}<0.02 \quad\Longrightarrow\quad N>25.$$

**Twenty-five chord lengths of travel.**

(d) *The comparison.* A blade section at radius $r$ passing its own wake once per revolution meets vorticity that is at most one revolution old. For a helicopter in fast forward flight the wake is swept away and the effective separation can be many chords — but in **hover**, the wake goes almost straight down and the blade meets it after travelling only a few chords' worth of separation.

**So quasi-steady aerodynamics is not defensible in hover.** The 25-chord requirement is nowhere close to met; blade–vortex interaction is a first-order effect, not a correction. It is responsible for the characteristic slapping noise of a descending helicopter and it is the reason rotor analysis needs an explicit wake model (free-wake, or at minimum a dynamic-inflow model) rather than blade-element theory alone.

*The honest caveat on this estimate.* The point-vortex model neglects the wake's roll-up, its self-induced motion, and the airfoil's own image effects, so the numbers above are order-of-magnitude. Wagner's exact solution gives 90% of steady lift at about 6 chords, consistent with the 8.3% deficit computed there — **the scaling is right, and the scaling is the lesson.**

</details>

## Flashback

**From Lesson 1.3 (Cylinder, $C_p$, Kutta–Joukowski):** A cylinder of radius $R = 0.25$ m in a sea-level stream of $V_\infty = 20$ m/s carries circulation $\Gamma = 30$ m²/s. (a) Locate the stagnation points. (b) Find $C_p$ at the top of the cylinder. (c) Find the lift per span, and the "lift coefficient" using the diameter as chord.

<details>
<summary>Solution</summary>

(a) $$\sin\theta_s = -\frac{\Gamma}{4\pi V_\infty R} = -\frac{30}{4\pi(20)(0.25)} = -\frac{30}{62.832} = -0.47746,$$

$$\theta_s = -28.52° \quad\text{and}\quad 208.52°.$$

(b) $$\frac{\Gamma}{2\pi RV_\infty} = \frac{30}{2\pi(0.25)(20)} = \frac{30}{31.416} = 0.95493.$$

At $\theta = 90°$ the surface speed ratio is $|2(1)+0.95493| = 2.95493$, so

$$C_p = 1-(2.95493)^2 = 1-8.7316 = -7.732.$$

(c) $$L' = \rho_\infty V_\infty\Gamma = 1.225(20)(30) = 735\ \mathrm{N/m}.$$

$$q_\infty = \tfrac12(1.225)(400) = 245\ \mathrm{Pa}, \qquad c_l = \frac{735}{245(0.50)} = \frac{735}{122.5} = 6.00.$$

*The connection to this lesson.* $\Gamma = 30$ m²/s here was **handed to you** — the problem stated it, and nothing in the physics of a cylinder chooses it. Change the spin rate and you change $\Gamma$ freely.

**An airfoil has no such freedom.** Its sharp trailing edge fixes $\Gamma$ completely, given only $\alpha$ and the camber line. Compare the two statements:

$$\text{cylinder: } \Gamma = \Gamma(\text{spin rate, set externally}), \qquad \text{airfoil: } \Gamma = \pi V_\infty c\,\alpha \ \text{(for a flat plate, from [2.3](02-03-symmetric-thin-airfoil.md))}.$$

**That is the entire difference between a curiosity and an engineering discipline.** The cylinder's $c_l = 6$ is larger than any airfoil achieves, but it is unpredictable, it costs shaft power, and it comes with catastrophic drag. The airfoil's $c_l$ is smaller, free, and *calculable before the thing is built*.

</details>

## Connections

- **Backward:** the indeterminacy this lesson resolves is [1.3](01-03-cylinder-pressure-coefficient-kutta-joukowski.md)'s free parameter $\Gamma$; the vortex being superposed is [1.2](01-02-potential-flow-elementary-flows.md)'s elementary vortex; vorticity and circulation are [`fluid-dynamics` 2.2](../../fluid-dynamics/lessons/02-02-vorticity-circulation.md)'s and Kelvin's theorem is [2.3](../../fluid-dynamics/lessons/02-03-kelvin-circulation-theorem.md)'s.
- **Forward:** [2.2](02-02-vortex-sheet-thin-airfoil-equation.md) turns "$\gamma(\text{TE}) = 0$" into the boundary condition that closes the thin-airfoil integral equation; [2.5](02-05-finite-wings-downwash-lifting-line.md) shows the starting vortex is one side of a closed vortex ring whose other sides are the tip vortices.
- **Sideways:** the Kutta condition is a **regularity selection rule** — the same move as choosing the decaying solution of a differential equation at infinity, or discarding the singular solution at the origin in quantum mechanics. In each case the mathematics offers a family and physics selects the member that stays finite.
