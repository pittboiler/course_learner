# Astrodynamics · Lesson 2.4: Kepler's equation & the eccentric anomaly

> ⏱ ~15 min · Module 2: Orbit determination & time-of-flight · Builds on: [1.5](01-05-keplers-laws-orbital-period.md), [2.1](02-01-classical-orbital-elements.md), [`numerical-analysis` 1.5](../../numerical-analysis/lessons/01-05-newton-secant.md) · Unlocks: 2.5 (universal variables)

## Why this matters

Everything so far describes *where a spacecraft can be*. This lesson answers **when**. That question sounds easy and is not: it is the one genuinely transcendental problem in two-body astrodynamics, unsolvable in closed form, and it stood open from Kepler's statement of it in 1609 until Newton's method made it routine.

Every propagator, every rendezvous plan, every "the satellite passes overhead at 19:42" prediction runs Kepler's equation. It is also the historical birthplace of iterative root-finding: Newton introduced his method partly to crack it, and hundreds of papers on solving it faster have appeared since.

## The idea

The problem is that the spacecraft doesn't move at a uniform rate. If it did — as it does on a circle — you could just multiply elapsed time by an angular rate and be done. On an ellipse the angular rate swings wildly, so the true anomaly $\theta$ is a badly behaved function of time.

Kepler's insight was to introduce two *helper* angles that behave better.

The first is the **mean anomaly** $M$: the angle a fictitious spacecraft would have swept if it went around at the constant average rate $n$. It is perfectly linear in time by construction — $M = nt$ — and it's the easy half of the problem. But it isn't a real angle to anything; it's a clock reading dressed as an angle.

The second is the **eccentric anomaly** $E$, and it's a genuinely beautiful construction. Draw the circle that circumscribes the ellipse (radius $a$, centered at the ellipse's center). From the spacecraft, go straight up (perpendicular to the major axis) until you hit that circle. The angle from the center to that circle point, measured from perigee, is $E$. It's a geometric angle, but measured **from the center rather than from the focus**, which is what makes it well behaved.

The payoff is that $M$ and $E$ are related by an equation of stunning simplicity: $M = E - e\sin E$. Going from $E$ to $M$ — from position to time — is a one-line evaluation. Going the other way, from time to position, requires inverting a transcendental function, and that's where Newton's method comes in. Then a separate, exact formula converts $E$ to the true anomaly $\theta$.

So the full pipeline for "where is it at time $t$" is: $t \to M \to E \to \theta \to r$. Three of those arrows are direct; only $M\to E$ needs iteration.

## The formal version

**Mean anomaly.** With mean motion $n = \sqrt{\mu/a^3} = 2\pi/T$ from [1.5](01-05-keplers-laws-orbital-period.md),

$$M \equiv n\,(t - t_p),$$

where $t_p$ is the time of perigee passage. *In words: the fraction of the period elapsed since perigee, expressed as an angle.* $M$ advances at a constant rate; that is its entire purpose.

**Eccentric anomaly.** For the point on the ellipse at true anomaly $\theta$, project vertically onto the circumscribing circle of radius $a$; $E$ is the angle at the *center* from perigee to that projected point. The defining relations are

$$x = a(\cos E - e), \qquad y = a\sqrt{1-e^2}\,\sin E \qquad (\text{perifocal coordinates}),$$

from which

$$\boxed{\;r = a(1 - e\cos E).\;}$$

*In words: the radius is the semi-major axis, shrunk or stretched by the cosine of the eccentric anomaly.* Note $E=0$ gives $r = a(1-e) = r_p$ ✓ and $E = 180^\circ$ gives $r_a$ ✓.

**Kepler's equation.** Equating two expressions for the swept area (or, equivalently, integrating $dt = r^2 d\theta/h$ after substituting $E$) yields

$$\boxed{\;M = E - e\sin E.\;}$$

*In words: the uniform clock angle equals the geometric center-angle minus a correction that grows with eccentricity.* At $e=0$ the two coincide and everything is trivially circular; the whole difficulty of the problem is that $\sin E$ term. See [Kepler's equation](../reference.md#keplers-equation).

**Converting $E \leftrightarrow \theta$.** These are exact, no iteration required:

$$\tan\frac{\theta}{2} = \sqrt{\frac{1+e}{1-e}}\,\tan\frac{E}{2}, \qquad \tan\frac{E}{2} = \sqrt{\frac{1-e}{1+e}}\,\tan\frac{\theta}{2}.$$

*In words: the two angles are related by a fixed stretch of their half-angle tangents.* The half-angle form is used deliberately: it is continuous through $180^\circ$ and puts $E$ and $\theta$ automatically in the same half-plane, so there's no quadrant check to forget. (The direct forms $\cos\theta = (\cos E - e)/(1-e\cos E)$ exist but reintroduce the ambiguity.)

Both angles always sit in the same half: $\theta > E$ on the outbound leg, $\theta < E$ inbound, and they agree exactly at perigee and apogee.

**Solving Kepler's equation by Newton's method.** We need $E$ given $M$. Define

$$f(E) = E - e\sin E - M, \qquad f'(E) = 1 - e\cos E,$$

and iterate $E_{k+1} = E_k - f(E_k)/f'(E_k)$, i.e.

$$\boxed{\;E_{k+1} = E_k - \frac{E_k - e\sin E_k - M}{1 - e\cos E_k}.\;}$$

A robust starting guess (Curtis) is

$$E_0 = \begin{cases}M + e/2, & M < \pi\\ M - e/2, & M \ge \pi.\end{cases}$$

**Why this always works:** $f'(E) = 1 - e\cos E \ge 1-e > 0$ for any $e<1$, so $f$ is strictly increasing and has exactly one root. There is no risk of the derivative vanishing, which is the usual way Newton's method fails ([`numerical-analysis` 1.5](../../numerical-analysis/lessons/01-05-newton-secant.md)). Convergence is quadratic, and for $e \lesssim 0.8$ three or four iterations reach machine precision. Only for $e$ very close to 1 does the iteration slow down — which is exactly the regime [2.5](02-05-universal-variables-time-of-flight.md) handles differently.

**The two directions, side by side.**

| Given | Want | Path | Cost |
|---|---|---|---|
| $\theta$ | $t$ | $\theta \to E \to M \to t = M/n + t_p$ | direct, exact |
| $t$ | $\theta$ | $t \to M \to E$ (iterate) $\to \theta \to r$ | one Newton solve |

## Picture

![An ellipse inscribed in its circumscribing circle, with the spacecraft projected vertically onto the circle to define the eccentric anomaly at the center and the true anomaly at the focus, beside a plot of eccentric anomaly against mean anomaly for eccentricities of zero, 0.6, and 0.9](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — position to time).** A satellite has $a = 12{,}120.8$ km and $e = 0.4225$ about Earth. How long after perigee does it reach $\theta = 90^\circ$?

*Step 1, $\theta \to E$:*

$$\tan\frac{E}{2} = \sqrt{\frac{1-0.4225}{1+0.4225}}\tan 45^\circ = \sqrt{\frac{0.5775}{1.4225}} = \sqrt{0.4060} = 0.6372 \;\Longrightarrow\; \frac{E}{2} = 32.50^\circ,\; E = 65.01^\circ.$$

*Step 2, $E\to M$* (in radians, $E = 1.1347$ rad):

$$M = E - e\sin E = 1.1347 - 0.4225\sin(65.01^\circ) = 1.1347 - 0.4225(0.9065) = 1.1347 - 0.3830 = 0.7517\ \mathrm{rad} = 43.07^\circ.$$

*Step 3, $M\to t$:*

$$n = \sqrt{\frac{398{,}600}{12{,}120.8^3}} = \sqrt{\frac{398{,}600}{1.7807\times10^{12}}} = 4.7312\times10^{-4}\ \mathrm{rad/s},$$

$$t = \frac{M}{n} = \frac{0.7517}{4.7312\times10^{-4}} = 1589\ \mathrm{s} = 26.5\ \mathrm{min}.$$

**Reading the answer.** The period is $T = 2\pi/n = 13{,}280$ s, so this is $1589/13{,}280 = 12.0$ percent of the orbit — noticeably **less than a quarter**, even though the spacecraft has turned a quarter of the way around. That's Kepler's second law biting: the first quarter-turn happens near perigee where the spacecraft is moving fastest, so it takes less than a quarter of the time. Note the strict ordering $\theta = 90^\circ > E = 65.0^\circ > M = 43.1^\circ$ — always true on the outbound leg.

**Example 2 (why you'd care — time to position, the hard direction).** An orbit has $e = 0.6$. Where is the spacecraft when $M = 90^\circ = 1.5708$ rad?

Start with $E_0 = M + e/2 = 1.5708 + 0.3 = 1.8708$ rad ($107.2^\circ$), and iterate:

| $k$ | $E_k$ (deg) |
|---|---|
| 0 | 107.19 |
| 1 | 120.48 |
| 2 | 119.826 |
| 3 | 119.8243 |
| 4 | 119.82432 |

Four iterations, and successive corrections shrink from $13^\circ$ to $0.65^\circ$ to $0.0015^\circ$ to $8\times10^{-9}$ degrees — **quadratic convergence**, roughly doubling the number of correct digits each step. So $E = 119.824^\circ$, and

$$\tan\frac{\theta}{2} = \sqrt{\frac{1.6}{0.4}}\tan(59.912^\circ) = 2\,(1.7238) = 3.4476 \;\Longrightarrow\; \frac{\theta}{2} = 73.84^\circ,\; \theta = 147.69^\circ,$$

with $r = a(1-e\cos E) = a\big(1 - 0.6\cos 119.824^\circ\big) = a(1+0.2985) = 1.2985\,a$.

**The point:** the clock says $90^\circ$, the geometry says $147.7^\circ$. On a highly eccentric orbit the spacecraft races through the first half of its journey and dawdles through the rest. Assuming uniform motion — using $M$ where you needed $\theta$ — would put the spacecraft **58 degrees of arc** from where it actually is.

## Watch out

- **You might mix degrees and radians in Kepler's equation.** $M = E - e\sin E$ requires $M$ and $E$ in **radians**; $\sin E$ doesn't care but the subtraction does. This is the most common numerical error in the subject, and it produces answers that look almost reasonable.
- **You might think $M$ is a physical angle.** It isn't — nothing is located at $M$. It's elapsed time wearing an angle's units. Only $\theta$ points at the spacecraft.
- **You might use the non-half-angle conversion and lose the quadrant.** $\cos\theta = (\cos E - e)/(1 - e\cos E)$ is correct but sign-ambiguous. The half-angle tangent form carries the quadrant automatically; prefer it.
- **You might forget $t_p$.** $M = n(t - t_p)$, not $nt$. If your problem gives an absolute epoch you need the perigee-passage time, which is itself often quoted as an element in place of $\theta$.
- **You might apply this to a hyperbola.** Kepler's equation as written is for $e<1$ only. The hyperbolic analogue uses $\sinh$ instead of $\sin$; [2.5](02-05-universal-variables-time-of-flight.md) unifies all cases.

## One-liner

> Time is linear in the mean anomaly, geometry is simple in the eccentric anomaly, and $M = E - e\sin E$ links them — invertible only by iteration, which is why every propagator on Earth runs Newton's method.

## Problems

**P1 (🟢)** A satellite has $e = 0.3$. Find its eccentric anomaly and true anomaly one quarter of a period after perigee passage.

**P2 (🟡)** An orbit has $a = 15{,}000$ km and $e = 0.45$ about Earth. Find the time since perigee passage when $\theta = 135^\circ$, and express it as a fraction of the period.

**P3 (🔴)** For $e = 0.8$ and $M = 30^\circ$, carry out Newton's method by hand for three iterations starting from $E_0 = M + e/2$, and comment on the convergence rate. Then explain why $f'(E) = 1-e\cos E$ guarantees the iteration cannot fail for any $e<1$.

<details>
<summary>Solutions</summary>

**P1** A quarter period means $M = 2\pi/4 = \pi/2 = 90^\circ = 1.5708$ rad. Solve $E - 0.3\sin E = 1.5708$ starting at $E_0 = 1.5708 + 0.15 = 1.7208$:

$$E_1 = 1.7208 - \frac{1.7208 - 0.3(0.98874) - 1.5708}{1 - 0.3(0.14964)} = 1.7208 - \frac{-0.14662}{0.95511} = 1.8743,$$

and two more iterations settle at $E = 1.85847$ rad $= 106.48^\circ$.

$$\tan\frac{\theta}{2} = \sqrt{\frac{1.3}{0.7}}\tan(53.24^\circ) = 1.36277(1.33869) = 1.82420 \;\Longrightarrow\; \theta = 2(61.27^\circ) = 122.54^\circ.$$

*Check.* The ordering $\theta = 122.5^\circ > E = 106.5^\circ > M = 90^\circ$ holds ✓. Physically the satellite is already past the quarter-turn mark at the quarter-period mark, because it covered the fast perigee arc first ✓.

**P2** *Step 1:*

$$\tan\frac{E}{2} = \sqrt{\frac{1-0.45}{1+0.45}}\tan(67.5^\circ) = \sqrt{0.37931}\,(2.41421) = 0.61588(2.41421) = 1.48688,$$
$$\frac{E}{2} = 56.077^\circ \;\Longrightarrow\; E = 112.154^\circ = 1.95746\ \mathrm{rad}.$$

*Step 2:*

$$M = E - e\sin E = 1.95746 - 0.45\sin(112.154^\circ) = 1.95746 - 0.45(0.92606) = 1.95746 - 0.41673 = 1.54073\ \mathrm{rad} = 88.27^\circ.$$

*Step 3:*

$$n = \sqrt{\frac{398{,}600}{15{,}000^3}} = \sqrt{\frac{398{,}600}{3.375\times10^{12}}} = 3.4369\times10^{-4}\ \mathrm{rad/s}, \qquad T = \frac{2\pi}{n} = 18{,}283\ \mathrm{s} = 5.08\ \mathrm{h}.$$

$$t = \frac{M}{n} = \frac{1.54073}{3.4369\times10^{-4}} = 4483\ \mathrm{s} = 1.245\ \mathrm{h}.$$

As a fraction of the period: $4483/18{,}283 = 24.5$ percent.

*Check.* The satellite has turned $135/360 = 37.5$ percent of the way around in only 24.5 percent of the period ✓ — fast near perigee, as required. And $r = a(1-e\cos E) = 15{,}000(1+0.45\times0.37743) = 17{,}548$ km, which matches the orbit equation $p/(1+e\cos 135^\circ) = 15{,}000(0.7975)/(1-0.31820) = 17{,}548$ ✓.

**P3** With $e = 0.8$, $M = 30^\circ = 0.523599$ rad, $E_0 = 0.523599 + 0.4 = 0.923599$ rad:

| $k$ | $E_k$ (rad) | $E_k$ (deg) | correction |
|---|---|---|---|
| 0 | 0.923599 | 52.92 | — |
| 1 | 1.383644 | 79.29 | $26.4^\circ$ |
| 2 | 1.296545 | 74.30 | $-4.99^\circ$ |
| 3 | 1.292761 | 74.079 | $-0.217^\circ$ |
| 4 | 1.292754 | 74.0782 | $-0.0004^\circ$ |

The converged value is $E = 74.0782^\circ$. The corrections shrink by roughly the *square* of the previous relative error each step ($26^\circ \to 5^\circ \to 0.2^\circ \to 0.0004^\circ$) — textbook **quadratic convergence**.

*Why it can't fail.* Newton's method breaks when $f'$ vanishes or changes sign. Here

$$f'(E) = 1 - e\cos E \ge 1 - e > 0 \quad\text{for all } E, \text{ whenever } e<1,$$

since $\cos E \le 1$. So $f$ is strictly monotonically increasing on the whole real line, guaranteeing (i) exactly one root, and (ii) a derivative bounded away from zero, so the Newton step is always well defined and never overshoots to a different branch. As $e\to1^-$ the bound $1-e$ approaches zero and the iteration becomes ill-conditioned near perigee — the practical failure mode, and the reason near-parabolic orbits get the separate treatment of [2.5](02-05-universal-variables-time-of-flight.md).

*Check.* Substituting back: $1.292754 - 0.8\sin(1.292754) = 1.292754 - 0.8(0.961444) = 1.292754 - 0.769155 = 0.523599$ ✓ equals $M$.

</details>

## Flashback

**From Lesson 2.1 (The classical orbital elements):** A satellite has $\mathbf h = (0,\,15{,}000,\,-25{,}981)\ \mathrm{km^2/s}$. Find its inclination and node vector, and say whether the orbit is prograde or retrograde.

<details>
<summary>Solution</summary>

$$h = \sqrt{15{,}000^2 + 25{,}981^2} = \sqrt{2.25\times10^8 + 6.750\times10^8} = \sqrt{9.000\times10^8} = 30{,}000\ \mathrm{km^2/s}.$$

$$i = \arccos\!\left(\frac{h_z}{h}\right) = \arccos\!\left(\frac{-25{,}981}{30{,}000}\right) = \arccos(-0.8660) = 150^\circ.$$

Since $i>90^\circ$, the orbit is **retrograde**.

$$\mathbf n = \hat{\mathbf K}\times\mathbf h = (-h_y,\,h_x,\,0) = (-15{,}000,\;0,\;0)\ \mathrm{km^2/s}.$$

*Check.* $\mathbf n$ has zero $z$-component, as any node vector must ✓. Here $n_x<0$ and $n_y=0$, so $\arccos(n_x/n) = \arccos(-1) = 180^\circ$ and the $n_y<0$ test does not fire, giving $\Omega = 180^\circ$ — the ascending node lies opposite the vernal equinox ✓.

</details>

## Connections

- **Backward:** $n$ and $T$ come from [1.5](01-05-keplers-laws-orbital-period.md); the constancy of $dA/dt$ from [1.2](01-02-angular-momentum-keplers-second-law.md) is what makes $M$ linear in time in the first place; and $\theta$ is the element from [2.1](02-01-classical-orbital-elements.md) that this lesson finally learns to propagate.
- **Forward:** [2.5](02-05-universal-variables-time-of-flight.md) replaces $E$ with a universal variable that works for every conic at once, removing the $e<1$ restriction. Every transfer time in Module 3 and every launch window in Module 4 is a Kepler-equation solve underneath.
- **Sideways (numerical analysis):** this is the canonical application of Newton's method from [`numerical-analysis` 1.5](../../numerical-analysis/lessons/01-05-newton-secant.md) — a scalar root-find with a derivative bounded away from zero, which is precisely the well-conditioned case where quadratic convergence is guaranteed rather than hoped for.
