# Mechanics of Materials · Lesson 2.3: Shear and moment diagrams

> ⏱ ~15 min · Module 2: Torsion & bending · Builds on: [2.1 Torsion of circular shafts](02-01-torsion-circular-shafts.md), [`statics` 4.1 Internal N, V, M](../../statics/lessons/04-01-internal-forces-normal-shear-bending.md), [`statics` 4.2 V–M diagrams](../../statics/lessons/04-02-shear-bending-moment-diagrams.md) · Unlocks: [2.4 Flexure formula](02-04-flexure-formula.md), [2.5 Transverse shear](02-05-transverse-shear-stress.md), Module 3 (deflection needs $M(x)$)

## Why this matters

To size a beam you need one number: the **largest bending moment** it carries, and where. That number, $M_{\max}$, feeds straight into next lesson's flexure formula $\sigma_{\max} = Mc/I$ — it *is* the load that reaches the material's yield stress. And to bend a beam into its deflected shape (Module 3) you need the whole function $M(x)$, not just its peak. So this lesson does one job: turn a loaded beam into the two curves $V(x)$ and $M(x)$, and read the critical value off them. You saw this in [`statics` 4.2](../../statics/lessons/04-02-shear-bending-moment-diagrams.md) as a statics exercise; here it becomes the front door to every stress and deflection calculation that follows.

## The idea

Cut a beam at some section, look at everything to the left, and equilibrium of that piece tells you two internal quantities the rest of the beam must be handing across the cut:

- the **shear force** $V$ — the transverse (vertical) force, the net "sliding" push, and
- the **bending moment** $M$ — the net turning effect, what actually curves the beam.

You could recompute these at fifty sections. Don't. There's a shortcut from calculus: **as you slide the cut along the beam, $V$ and $M$ change according to the load you're walking past.** Walk left-to-right carrying a running tally:

- A **point load** is a sudden shove — step past a downward one and your shear tally *jumps* down by that load.
- A **distributed load** $w$ bleeds shear away steadily — $V$ *slopes*, faster where the load is heavier.
- The moment is the running total of shear — $M$ climbs where $V>0$, falls where $V<0$, so **$M$ peaks exactly where $V$ crosses zero.**

That last line is the whole design shortcut: find where $V = 0$, and that's where the beam is worst loaded.

## The formal version

**Sign convention (memorize this — every sign downstream depends on it).** A positive bending moment **sags** the beam: it curves concave-up, like a smile, stretching the bottom fibers (tension below, compression above). Positive shear pushes the left face up and the right face down. Getting $M > 0$ = sagging fixed now saves you from sign chaos in the flexure formula, where tension-on-bottom must come out as the right-signed stress.

**The differential relations.** Take a slice of beam of width $dx$ carrying distributed load $w(x)$ (downward positive, units N/m or kN/m). Applying $\sum F_y = 0$ and $\sum M = 0$ to the slice and shrinking it gives

$$\frac{dV}{dx} = -w(x), \qquad \frac{dM}{dx} = V(x).$$

*In words: the load is minus the slope of the shear; the shear is the slope of the moment.* Every symbol: $V$ = internal shear (N or kN), $M$ = internal bending moment (N·m or kN·m), $x$ = distance along the beam (m), $w$ = distributed load intensity (N/m).

Integrate them and the same two relations read as **areas**:

$$V_2 - V_1 = -\int_{x_1}^{x_2} w\,dx = -(\text{area under the load}), \qquad M_2 - M_1 = \int_{x_1}^{x_2} V\,dx = (\text{area under the shear}).$$

*In words: change in shear = minus the load-area; change in moment = the shear-area.* This is just "a function's change equals the integral of its slope" — the Fundamental Theorem, applied to beams.

Four consequences you will use on every problem:

1. **Point load $P$** (down): $V$ **jumps down by $P$**; $M$ stays continuous but kinks.
2. **No load** ($w = 0$): $V$ is constant, $M$ is a straight line.
3. **Uniform load** ($w$ constant): $V$ is linear, $M$ is parabolic.
4. **$M$ is stationary where $V = 0$.** Since $dM/dx = V$, the design value $M_{\max}$ sits where the shear crosses (or jumps through) zero.

## Picture

![A simply supported beam with a central point load P, with its shear diagram V(x) — a step from +P/2 to −P/2 — and its moment diagram M(x) — a triangle peaking at PL/4 at midspan — stacked directly beneath and aligned. The V=0 crossing and M_max are marked on the same vertical line.](assets/02-03-fig1.svg)

The three panels share one $x$-axis. The shear jumps to $+P/2$ at the left support, holds flat (no load between supports), plunges through zero at the central load, and is caught by the right reaction. The moment is the *area* swept under that shear — climbing while $V > 0$, falling once $V < 0$ — so it peaks right where $V$ flips sign, at midspan, with value $PL/4$.

## Worked examples

**Example 1 — simply supported beam, central point load.** Span $L$, pin at $A$ (left), roller at $B$ (right), a single downward load $P$ at midspan. Find the diagrams and $M_{\max}$.

*Reactions.* By symmetry,

$$R_A = R_B = \frac{P}{2}.$$

*Shear, walking from $A$.* Start at $0$; $R_A$ shoves us up to $V = +P/2$. No load until midspan, so $V$ holds at $+P/2$ across $0 < x < L/2$. Stepping past $P$, $V$ jumps down by $P$: $\;V = P/2 - P = -P/2$, held to $B$, where $R_B$ closes it back to $0$ (the check that it balances).

*Moment = area under the shear.* From $M = 0$ at the pin, over the left half $V = +P/2$ is constant, so $M$ rises linearly:

$$M(x) = \frac{P}{2}\,x \quad (0 \le x \le L/2), \qquad M\!\left(\tfrac{L}{2}\right) = \frac{P}{2}\cdot\frac{L}{2} = \frac{PL}{4}.$$

Past midspan $V = -P/2$, so $M$ falls linearly back to $0$ at $B$. The shear jumps *through* zero at midspan, so that is the peak:

$$\boxed{\,M_{\max} = \frac{PL}{4}\ \text{at midspan.}}$$

*Units/sanity check.* $[P][L] = \mathrm{N}\cdot\mathrm{m}$ ✓, a moment. Closes: $M(L) = \frac{PL}{4} + (-\frac{P}{2})\frac{L}{2} = 0$ at the roller ✓. Symmetric load → peak at the middle, as it must be.

**Example 2 — simply supported beam, uniform load (the case worth memorizing).** Same supports, span $L$, uniform load $w$ (N/m) over the whole span. Find $M_{\max}$, and use $V = 0$ to locate it.

*Reactions.* Total load $W = wL$; by symmetry $R_A = R_B = wL/2$.

*Shear.* Start up at $R_A = +wL/2$; now we are under the load, so $dV/dx = -w$:

$$V(x) = \frac{wL}{2} - wx = w\!\left(\frac{L}{2} - x\right).$$

Here $V$ crosses zero *smoothly*. Set $V = 0$: $\;\frac{L}{2} - x = 0 \Rightarrow x = L/2$ — midspan, as symmetry demands. That is the critical section.

*Moment* = area under the shear from $A$ to $L/2$ (a triangle of base $L/2$, height $wL/2$), or by integrating:

$$M_{\max} = \int_0^{L/2} w\!\left(\frac{L}{2} - x\right)dx = w\left[\frac{L}{2}x - \frac{x^2}{2}\right]_0^{L/2} = w\left(\frac{L^2}{4} - \frac{L^2}{8}\right) = \frac{wL^2}{8}.$$

$$\boxed{\,M_{\max} = \frac{wL^2}{8}\ \text{at midspan.}}$$

Because $V$ is *linear*, $M$ is a *parabola*, and its vertex sits where $V = 0$.

*Units/sanity check.* $[w][L^2] = (\mathrm{N/m})(\mathrm{m^2}) = \mathrm{N}\cdot\mathrm{m}$ ✓. Numeric feel: $w = 5\ \mathrm{kN/m}$ over $L = 6\ \mathrm{m}$ gives $M_{\max} = 5(6)^2/8 = 22.5\ \mathrm{kN\cdot m}$. This $wL^2/8$ and Example 1's $PL/4$ are the two results every engineer keeps in their head.

**Bonus — cantilever, end load $P$** (fixed at the wall, free at the tip, load $P$ down at the tip). Cutting from the free end, the shear is constant $V = -P$ the whole length, so $M$ grows linearly toward the wall and $M_{\max} = PL$ **at the fixed support** (hogging, $M < 0$). A cantilever's worst moment is always at the wall, never at the tip — the opposite intuition from a simply supported beam.

## Watch out

- **You might hunt for $M_{\max}$ at midspan.** It lives where $V = 0$, which coincides with midspan *only* for a symmetric load. An off-center point load or a partial UDL shifts the zero-shear point — and the peak — off center. Midspan is a special case, not a rule.
- **You might expect $V$ to always cross zero on a slope.** Under a **point load** it *jumps* through zero (Example 1): no equation to solve, the peak is simply *at the load*. Only distributed load gives a sloped crossing you set $V=0$ to find (Example 2).
- **You might swap the sign convention.** Positive $M$ **sags** (tension on the bottom); positive $V$ pushes the left face up. Flip these and next lesson's $\sigma = -My/I$ puts tension on the wrong face. Also mind sign in $dV/dx = -w$: a *downward* load makes shear *decrease*, hence the minus.

## One-liner

> Shear is the slope of the moment, so $M$ peaks where $V$ crosses zero — jump $V$ at point loads, slope it under distributed load, and read $M_{\max}$ (that is $PL/4$ for a central load, $wL^2/8$ for a full UDL) straight off the zero-shear section.

## Problems

**P1 (🟢)** A simply supported beam of span $L = 4\ \mathrm{m}$ carries a downward point load $P = 10\ \mathrm{kN}$ at midspan. Give the reactions, the shear values, and $M_{\max}$ with its location.

**P2 (🟡)** A simply supported beam of span $L = 6\ \mathrm{m}$ carries a uniform load $w = 8\ \mathrm{kN/m}$ over its entire length. Write $V(x)$, locate where $V = 0$, and compute $M_{\max}$. Then state which section is critical for bending stress and why.

**P3 (🔴)** A cantilever of length $L = 3\ \mathrm{m}$, fixed at the left wall, carries a uniform load $w = 4\ \mathrm{kN/m}$ over its whole length. Write $V(x)$ and $M(x)$ measured from the *free* (right) end, and find $M_{\max}$ and where it occurs. (Hint: cut from the free end so no wall reactions are needed; $V$ and $M$ both build toward the wall.)

<details>
<summary>Solutions</summary>

**P1.** By symmetry $R_A = R_B = P/2 = 5\ \mathrm{kN}$. Walking from $A$: $V = +5\ \mathrm{kN}$ from $0$ to midspan, then jumps down by $10$ to $-5\ \mathrm{kN}$, held to $B$, where $R_B = 5$ closes it to $0$. The shear jumps through zero at midspan ($x = 2\ \mathrm{m}$), so

$$M_{\max} = \frac{PL}{4} = \frac{10 \times 4}{4} = 10\ \mathrm{kN\cdot m\ at\ } x = 2\ \mathrm{m}.$$

*Check.* Area under shear from $A$: $5\ \mathrm{kN} \times 2\ \mathrm{m} = 10\ \mathrm{kN\cdot m}$ ✓; units $\mathrm{kN\cdot m}$ ✓; closes to $0$ at $B$ ✓.

**P2.** Total load $W = wL = 8 \times 6 = 48\ \mathrm{kN}$; by symmetry $R_A = R_B = 24\ \mathrm{kN}$. Shear:

$$V(x) = R_A - wx = 24 - 8x.$$

Set $V = 0$: $\;24 - 8x = 0 \Rightarrow x = 3\ \mathrm{m}$ (midspan). Moment = area under the shear from $0$ to $3$ (triangle, base $3$, height $24$):

$$M_{\max} = \int_0^3 (24 - 8x)\,dx = \big[24x - 4x^2\big]_0^3 = 72 - 36 = 36\ \mathrm{kN\cdot m}.$$

The section at $x = 3\ \mathrm{m}$ is critical for bending stress: $dM/dx = V = 0$ there, so $M$ — and therefore $\sigma_{\max} = Mc/I$ — is largest at midspan.

*Check.* Closed form $M_{\max} = wL^2/8 = 8(6)^2/8 = 36\ \mathrm{kN\cdot m}$ ✓; units $(\mathrm{kN/m})(\mathrm{m^2}) = \mathrm{kN\cdot m}$ ✓.

**P3.** Let $x$ measure distance from the free (right) end. Cutting there, the piece of length $x$ carries a uniform load with resultant $wx$ acting at its centroid $x/2$ from the cut. Equilibrium of that free-end piece:

$$V(x) = -wx = -4x \quad (\text{kN, with } x \text{ in m}), \qquad M(x) = -wx\cdot\frac{x}{2} = -\frac{w x^2}{2} = -2x^2\ \mathrm{kN\cdot m}.$$

Both grow in magnitude toward the wall. At the wall $x = L = 3\ \mathrm{m}$:

$$|M_{\max}| = \frac{wL^2}{2} = \frac{4 \times 3^2}{2} = 18\ \mathrm{kN\cdot m\ at\ the\ fixed\ support\ (hogging,\ } M < 0).$$

*Check.* Consistent with $dM/dx = V$: $\frac{d}{dx}\!\left(-2x^2\right) = -4x = V(x)$ ✓. Units $(\mathrm{kN/m})(\mathrm{m^2}) = \mathrm{kN\cdot m}$ ✓. And $V(L) = -4(3) = -12\ \mathrm{kN}$ equals minus the total load $wL = 12\ \mathrm{kN}$ the wall must react ✓. The worst moment is at the wall, not the tip — the cantilever signature.

</details>

## Flashback

**From [Lesson 2.1](02-01-torsion-circular-shafts.md) (torsion of circular shafts).** A solid steel shaft of diameter $d = 40\ \mathrm{mm}$ and length $L = 1.5\ \mathrm{m}$ ($G = 77\ \mathrm{GPa}$) carries a torque $T = 250\ \mathrm{N\cdot m}$. Find the maximum shear stress $\tau_{\max}$ and the angle of twist $\phi$.

<details>
<summary>Solution</summary>

Polar second moment for a solid circle:

$$J = \frac{\pi d^4}{32} = \frac{\pi (0.040)^4}{32} = \frac{\pi (2.56\times10^{-6})}{32} = 2.51\times10^{-7}\ \mathrm{m^4}.$$

Maximum shear stress at the surface ($r = d/2 = 0.020\ \mathrm{m}$):

$$\tau_{\max} = \frac{T r}{J} = \frac{250 \times 0.020}{2.51\times10^{-7}} = 1.99\times10^{7}\ \mathrm{Pa} \approx 19.9\ \mathrm{MPa}.$$

Angle of twist:

$$\phi = \frac{TL}{GJ} = \frac{250 \times 1.5}{(77\times10^{9})(2.51\times10^{-7})} = \frac{375}{1.933\times10^{4}} = 0.0194\ \mathrm{rad} \approx 1.11^\circ.$$

*Check.* Units of $\tau$: $(\mathrm{N\cdot m})(\mathrm{m})/\mathrm{m^4} = \mathrm{N/m^2} = \mathrm{Pa}$ ✓. $\phi$ is dimensionless (rad): $(\mathrm{N\cdot m})(\mathrm{m})/[(\mathrm{Pa})(\mathrm{m^4})] = (\mathrm{N\cdot m^2})/(\mathrm{N\cdot m^2}) = 1$ ✓. About $20\ \mathrm{MPa}$ and a degree of twist are sensible for a lightly loaded shaft — well under steel's yield.

</details>

## Connections

- **Backward:** this reprises [`statics` 4.2](../../statics/lessons/04-02-shear-bending-moment-diagrams.md) — the same $dV/dx = -w$, $dM/dx = V$ and single-cut $V, M$ from [`statics` 4.1](../../statics/lessons/04-01-internal-forces-normal-shear-bending.md) — but now aimed at feeding a stress formula, so the sign convention (sagging positive) is load-bearing, not cosmetic. It is the bending sibling of Module 2's torsion: there the internal resultant was a torque $T$, here it is a moment $M$.
- **Forward:** $M_{\max}$ is the direct input to [2.4 the flexure formula](02-04-flexure-formula.md), $\sigma_{\max} = M c / I$; the shear $V$ feeds [2.5 transverse shear stress](02-05-transverse-shear-stress.md), $\tau = VQ/It$. And the *whole* function $M(x)$ is what Module 3 integrates twice in $EI\,v'' = M(x)$ to get the beam's deflection — you cannot deflect a beam without first building this diagram.
- **Sideways (calculus & materials):** "$M$ peaks where $V = 0$" is the first-derivative test — the same optimization that maximizes any function, here locating a structure's worst section. And that peak stress is the number `materials-science` ([4.1 elastic behavior](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md)) explains the *material* side of: this course computes the stress that arrives at yield; that course explains, via dislocations and defects, why the material yields once it does.
