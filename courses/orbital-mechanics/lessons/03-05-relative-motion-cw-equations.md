# Astrodynamics · Lesson 3.5: Relative motion & the CW equations

> ⏱ ~15 min · Module 3: Maneuvers & rendezvous · Builds on: [3.1](03-01-impulsive-maneuvers-delta-v.md), [`ode-refresher` 3.1](../../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md) · Unlocks: 4.1 (sphere of influence and patched conics)

## Why this matters

Docking with the ISS, servicing a satellite, retrieving debris, flying a formation of telescopes — all of these require two spacecraft to meet, not just occupy the same orbit. Doing that with the full nonlinear two-body machinery is possible but hopeless for real-time control: you'd be differencing two nearly-identical large vectors, and the answer would be dominated by round-off.

The Clohessy–Wiltshire equations solve this by writing the equations of motion for the *difference* directly, in a frame that rides along with the target. They are **linear with constant coefficients** — solvable in closed form, invertible for targeting, and cheap enough that Gemini flew them in 1965 on a computer with 4 kilobytes of memory. Every rendezvous since has used some descendant of them.

They also produce some of the most counterintuitive results in the subject: to catch up with something ahead of you, you slow down.

## The idea

Put your coordinate frame on the target, not on the Earth. Let the frame rotate with the target so that the axes always mean the same thing physically:

- $x$ points **radially outward** (up, away from the planet),
- $y$ points **along-track** (forward, in the direction of motion),
- $z$ points **cross-track** (out of the orbit plane, along $\mathbf h$).

This is the **LVLH** frame (Local Vertical, Local Horizontal). Now ask: if the chaser is a few kilometers away, how does that offset evolve?

Two effects compete. Gravity's inverse-square falloff means the chaser feels slightly different gravity than the target. And the frame is rotating, which introduces centrifugal and Coriolis terms. Keep only the first-order terms in the small offset and you get three linear equations — two coupled (radial and along-track) and one that decouples completely (cross-track).

The behavior they predict is worth stating before the algebra, because it's the part that surprises people:

- **Cross-track motion is a pure oscillation** at the orbital rate. Push out of plane and you sinusoid back and forth, once per orbit, forever. No drift.
- **A pure along-track offset does nothing.** Sit 10 km behind the target on the same orbit and you stay 10 km behind. Same orbit, same period.
- **A radial offset causes secular drift.** Move 1 km higher and you're on a bigger, slower orbit, so you fall *behind* — by $6\pi$ km per kilometer of offset, per orbit. That's 37.7 km per orbit for a 1-km offset. There is no equilibrium hovering above something in orbit.
- **Speeding up moves you backwards.** A prograde burn raises your orbit, which slows your average rate, so over time you fall behind. To catch up with a target ahead of you, you burn *retrograde* and drop into a lower, faster orbit.

That last one is the operational headline. Every astronaut has to unlearn the aircraft intuition.

## The formal version

**Setup.** A target in a circular orbit of radius $r_{\rm tgt}$ with mean motion $n = \sqrt{\mu/r_{\rm tgt}^3}$. The chaser's position relative to the target, expressed in the LVLH frame, is $\delta\mathbf r = (x,y,z)$ with $\|\delta\mathbf r\| \ll r_{\rm tgt}$.

**The Clohessy–Wiltshire (Hill) equations.**

$$\boxed{\;\ddot x - 3n^2x - 2n\dot y = 0, \qquad \ddot y + 2n\dot x = 0, \qquad \ddot z + n^2 z = 0.\;}$$

*In words: the out-of-plane motion is a simple harmonic oscillator at the orbital frequency; the in-plane motion couples radial and along-track through Coriolis terms.* See [Clohessy–Wiltshire equations](../reference.md#clohessywiltshire-equations).

Reading the terms: $-3n^2x$ is the net of gravity-gradient and centrifugal effects (note the sign — it's *destabilizing* radially); $\pm 2n\dot{\;}$ are Coriolis couplings from the rotating frame; $n^2z$ is the restoring gravity gradient out of plane.

**Closed-form solution.** With initial conditions $(x_0,y_0,z_0)$ and $(\dot x_0,\dot y_0,\dot z_0)$:

$$x(t) = (4-3\cos nt)\,x_0 + \frac{\sin nt}{n}\dot x_0 + \frac{2(1-\cos nt)}{n}\dot y_0,$$

$$y(t) = 6(\sin nt - nt)\,x_0 + y_0 - \frac{2(1-\cos nt)}{n}\dot x_0 + \frac{4\sin nt - 3nt}{n}\dot y_0,$$

$$z(t) = z_0\cos nt + \frac{\dot z_0}{n}\sin nt.$$

Differentiating gives the velocities:

$$\dot x(t) = 3n\sin nt\,x_0 + \cos nt\,\dot x_0 + 2\sin nt\,\dot y_0,$$
$$\dot y(t) = 6n(\cos nt - 1)x_0 - 2\sin nt\,\dot x_0 + (4\cos nt - 3)\dot y_0,$$
$$\dot z(t) = -n z_0\sin nt + \dot z_0\cos nt.$$

**The secular terms.** Every term is periodic *except* the two containing $nt$ in $y(t)$: $-6nt\,x_0$ and $-3t\,\dot y_0$. These grow without bound and are the entire story of relative-motion drift:

$$\text{drift rate} = -6n\,x_0 - 3\dot y_0.$$

*In words: you drift along-track at a rate set by your radial offset and your along-track velocity, and by nothing else.* Setting it to zero gives the **no-drift condition**

$$\dot y_0 = -2n\,x_0,$$

which produces a closed relative orbit: a $2{:}1$ ellipse (twice as long along-track as it is tall radially), traversed once per orbit. Formation-flying missions live on these.

**Matrix form and two-impulse rendezvous.** Write the solution as

$$\begin{pmatrix}\delta\mathbf r(t)\\ \delta\mathbf v(t)\end{pmatrix} = \begin{pmatrix}\Phi_{rr}(t) & \Phi_{rv}(t)\\ \Phi_{vr}(t) & \Phi_{vv}(t)\end{pmatrix}\begin{pmatrix}\delta\mathbf r_0\\ \delta\mathbf v_0\end{pmatrix}.$$

To rendezvous — to make $\delta\mathbf r(t_f) = \mathbf 0$ at a chosen time $t_f$ — solve for the required post-burn velocity:

$$\boxed{\;\delta\mathbf v_0^+ = -\Phi_{rv}(t_f)^{-1}\,\Phi_{rr}(t_f)\,\delta\mathbf r_0.\;}$$

The **first burn** is $\Delta\mathbf v_1 = \delta\mathbf v_0^+ - \delta\mathbf v_0^-$. Then coast to $t_f$, arriving with relative velocity $\delta\mathbf v(t_f) = \Phi_{vr}\delta\mathbf r_0 + \Phi_{vv}\delta\mathbf v_0^+$, and the **second burn** kills it: $\Delta\mathbf v_2 = -\delta\mathbf v(t_f)$. Total cost $\|\Delta\mathbf v_1\| + \|\Delta\mathbf v_2\|$.

*In words: pick an arrival time, solve a $3\times3$ linear system for the departure velocity, then cancel whatever you arrive with.* Note $\Phi_{rv}$ is singular whenever $\sin(nt_f)$ makes it so — in particular at $nt_f$ a multiple of $2\pi$, where you return to your starting relative position no matter what you do. Real targeting scans over $t_f$ and picks the cheapest non-singular option.

**Validity.** The linearization needs $\|\delta\mathbf r\| \ll r_{\rm tgt}$ (good to a few tens of kilometers in LEO) and a near-circular target orbit. Beyond that, use the nonlinear equations or the eccentric-orbit generalization (the Tschauner–Hempel equations).

## Picture

![On the left, the LVLH frame riding a target spacecraft with the radial, along-track, and cross-track axes marked; on the right, the relative trajectory of a chaser released one kilometre above the target at rest, looping forward and then falling 37.7 kilometres behind over one orbit](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — the drift of a released object).** An astronaut releases a tool 1 km directly above the ISS ($r = 6778$ km) with zero relative velocity. Where is it one orbit later?

$$n = \sqrt{\frac{398{,}600}{6778^3}} = 1.1314\times10^{-3}\ \mathrm{rad/s}, \qquad T = \frac{2\pi}{n} = 5553\ \mathrm{s} = 92.6\ \mathrm{min}.$$

With $x_0 = 1$ km and all other initial values zero, at $nt = 2\pi$ ($\cos = 1$, $\sin = 0$):

$$x(T) = (4-3)(1) = 1\ \mathrm{km}, \qquad y(T) = 6(0 - 2\pi)(1) = -12\pi = -37.70\ \mathrm{km}.$$

**The tool is still 1 km up, but 37.7 km behind.** Nothing pushed it backwards — it's simply on a slightly larger, slower orbit. Mid-orbit it swings out to $x = 7$ km (at $nt = \pi$), so it also rises well above where it started before returning.

*The operational lesson:* nothing released in orbit stays put. Debris tracking exists because of this equation.

**Example 2 (why you'd care — a two-impulse rendezvous).** A chaser is 1 km **behind** the ISS ($\delta\mathbf r_0 = (0,\,-1,\,0)$ km) with zero relative velocity, on the same orbit. It must close the gap in a quarter orbit ($t_f = T/4 = 1388$ s, $nt_f = \pi/2$).

At $nt_f = \pi/2$: $\cos = 0$, $\sin = 1$, and

$$\Phi_{rr} = \begin{pmatrix}4&0&0\\ 6(1-\tfrac\pi2)&1&0\\0&0&0\end{pmatrix}, \qquad \Phi_{rv} = \frac1n\begin{pmatrix}1&2&0\\ -2& 4-\tfrac{3\pi}{2}&0\\ 0&0&1\end{pmatrix}.$$

The in-plane block of $\Phi_{rv}$ has determinant $(1)(-0.71239) - (2)(-2) = 3.2876$, comfortably invertible. Solving,

$$\delta\mathbf v_0^+ = -\Phi_{rv}^{-1}\Phi_{rr}\,\delta\mathbf r_0 = n\,(-0.60834,\; 0.30417,\; 0) = (-0.688,\; +0.344,\; 0)\ \mathrm{m/s},$$

so $\Delta v_1 = 0.770$ m/s. Coasting to $t_f$ gives an arrival relative velocity of $(+0.688,\,+0.344,\,0)$ m/s, so the braking burn is $\Delta v_2 = 0.770$ m/s and

$$\Delta v_{\rm total} = 1.54\ \mathrm{m/s}.$$

**Read the signs.** The chaser is *behind* and needs to catch up, and the along-track component of its burn is **positive** (forward, $+0.344$ m/s) — but the dominant component is $-0.688$ m/s **radially inward**, dropping it to a lower, faster orbit. That downward push is what actually closes the gap; the small forward component tunes the arrival time. Try to close the gap by simply thrusting forward and you would rise, slow down, and fall further behind.

**And notice the cost:** 1.54 m/s to move a kilometer. Proximity operations are almost free in delta-v terms — which is why spacecraft can afford dozens of rendezvous burns, and why the binding constraint on docking is time and safety, not propellant.

## Watch out

- **You might thrust toward your target.** Pointing at something and firing does not take you there. In LEO, forward thrust eventually moves you backwards. Use the equations, not intuition.
- **You might expect a stable hover.** There is no station-keeping point directly above or below a target: a radial offset always drifts. Only the $2{:}1$ ellipse (with $\dot y_0 = -2nx_0$) is closed, and even that requires the right velocity, not just the right position.
- **You might use CW at large separations.** The linearization degrades past a few tens of km in LEO, and badly past a few hundred. Long-range phasing is done with full two-body arcs; CW takes over for the final approach.
- **You might forget the target must be near-circular.** Every coefficient here assumes $e_{\rm tgt} \approx 0$. For an eccentric target, $n$ isn't the actual angular rate and the equations acquire time-varying coefficients.
- **You might hit a singular $\Phi_{rv}$.** At $nt_f = 2\pi k$ the matrix is singular and no first burn can achieve rendezvous at that time — you'd simply return to where you started. Choose a different $t_f$.

## One-liner

> In a frame riding the target, relative motion is linear: cross-track oscillates, along-track offsets persist, radial offsets drift backwards at $6\pi$ km per km per orbit — and to catch up, you go down.

## Problems

**P1 (🟢)** A satellite in a circular orbit at $r = 7000$ km has a companion released 500 m directly ahead ($y_0 = +0.5$ km, all else zero). Where is the companion one orbit later, and why?

**P2 (🟡)** A chaser is 2 km above a target in a 6778-km circular orbit, with zero relative velocity. Find the along-track drift after one orbit, and find the along-track velocity kick that would make the relative orbit closed instead.

**P3 (🔴)** Show from the CW solution that the along-track drift rate is $-6nx_0 - 3\dot y_0$, and derive the no-drift condition. Then show that under that condition the in-plane relative motion is an ellipse with a $2{:}1$ along-track-to-radial axis ratio.

<details>
<summary>Solutions</summary>

**P1** With $x_0 = 0$, $y_0 = 0.5$ km, and all velocities zero, the solution reduces to

$$x(t) = 0, \qquad y(t) = y_0 = 0.5\ \mathrm{km}, \qquad z(t) = 0.$$

The companion is **exactly where it started**: 500 m ahead, forever.

*Why:* a pure along-track displacement puts the companion on the *same orbit* as the satellite — same $a$, same $e$, same plane — just at a slightly different true anomaly. Same $a$ means same period ([1.5](01-05-keplers-laws-orbital-period.md)), so the phase difference never changes. This is the one relative configuration that is genuinely stable, and it's why "trailing formation" is the easiest formation to fly.

*Check.* The drift rate $-6nx_0 - 3\dot y_0 = 0 - 0 = 0$ ✓.

**P2** For $r = 6778$ km, $n = 1.1314\times10^{-3}$ rad/s. With $x_0 = 2$ km and zero relative velocity, one orbit later ($nt = 2\pi$):

$$y(T) = 6(\sin 2\pi - 2\pi)x_0 = -12\pi(2) = -75.4\ \mathrm{km}.$$

The chaser drifts **75.4 km behind** — double the 1-km case, since the drift is linear in $x_0$.

To close the relative orbit, apply the no-drift condition:

$$\dot y_0 = -2nx_0 = -2(1.1314\times10^{-3})(2) = -4.526\times10^{-3}\ \mathrm{km/s} = -4.53\ \mathrm{m/s}.$$

*In words: a 4.53 m/s retrograde kick.* The resulting relative orbit is a closed ellipse of radial semi-axis $x_0 = 2$ km and along-track semi-axis 4 km, traversed once per orbit.

*Check.* Substituting $\dot y_0 = -2nx_0$ into $x(t)$: $x = (4-3\cos nt)x_0 + (2/n)(1-\cos nt)(-2nx_0) = x_0(4-3\cos nt - 4 + 4\cos nt) = x_0\cos nt$ ✓ — a clean oscillation of amplitude $x_0$, with no secular term ✓.

**P3** **Drift rate.** Collect the terms in $y(t)$ that are proportional to $t$:

$$y(t) = \underbrace{6(\sin nt)x_0 + y_0 - \frac{2(1-\cos nt)}{n}\dot x_0 + \frac{4\sin nt}{n}\dot y_0}_{\text{all bounded, period }2\pi/n} \;\underbrace{-\,6nt\,x_0 - 3t\,\dot y_0}_{\text{secular}}.$$

Every bracketed term is a sine or cosine of $nt$ (or a constant), hence bounded. The secular part is linear in $t$ with slope

$$\frac{d}{dt}\big(-6ntx_0 - 3t\dot y_0\big) = -6nx_0 - 3\dot y_0. \;\blacksquare$$

**No-drift condition.** Setting the slope to zero:

$$-6nx_0 - 3\dot y_0 = 0 \;\Longrightarrow\; \dot y_0 = -2nx_0.$$

**The 2:1 ellipse.** Take the simplest case satisfying it, $\dot x_0 = 0$ and $\dot y_0 = -2nx_0$ (the general case just adds a phase and a constant offset). Substituting into the solution:

$$x(t) = (4-3\cos nt)x_0 + \frac{2(1-\cos nt)}{n}(-2nx_0) = x_0\big(4-3\cos nt - 4 + 4\cos nt\big) = x_0\cos nt,$$

$$y(t) = 6(\sin nt - nt)x_0 + y_0 + \frac{4\sin nt - 3nt}{n}(-2nx_0) = y_0 + x_0\big(6\sin nt - 6nt - 8\sin nt + 6nt\big) = y_0 - 2x_0\sin nt.$$

Both secular terms cancelled ✓. Therefore

$$\frac{x^2}{x_0^2} + \frac{(y-y_0)^2}{(2x_0)^2} = \cos^2 nt + \sin^2 nt = 1,$$

an ellipse centered at $(0, y_0)$ with radial semi-axis $x_0$ and along-track semi-axis $2x_0$ — a **$2{:}1$ ratio**, long way along-track. $\blacksquare$

*Check.* The motion is retrograde in the relative frame: at $nt = 0$ the chaser is at maximum altitude with $\dot y < 0$ (moving backwards), consistent with "higher means slower" ✓. Physically this ellipse is just a slightly eccentric orbit of the *same* semi-major axis as the target's, viewed from the target — same $a$, so same period, so it closes ✓.

</details>

## Flashback

**From Lesson 3.1 (Impulsive maneuvers & the Δv budget):** A spacecraft with $I_{\rm sp} = 220$ s and a wet mass of 1200 kg performs a series of proximity-operations burns totalling $\Delta v = 12$ m/s. How much propellant does it use?

<details>
<summary>Solution</summary>

$$v_e = I_{\rm sp}g_0 = 220\times9.80665\times10^{-3} = 2.1575\ \mathrm{km/s}.$$

$$\frac{m_0}{m_f} = e^{\Delta v/v_e} = e^{0.012/2.1575} = e^{5.5620\times10^{-3}} = 1.005577,$$

$$m_{\rm prop} = m_0\left(1 - \frac{1}{1.005577}\right) = 1200(1 - 0.994454) = 1200(0.005546) = 6.66\ \mathrm{kg}.$$

*Check.* For small $\Delta v/v_e$ the rocket equation linearizes to $m_{\rm prop}\approx m_0\Delta v/v_e = 1200(0.012)/2.1575 = 6.67$ kg ✓. This is why rendezvous is cheap: 12 m/s costs under 7 kg, while the 3.89 km/s of a GEO transfer would consume 71 percent of the vehicle ([3.1](03-01-impulsive-maneuvers-delta-v.md)) ✓.

</details>

## Connections

- **Backward:** the two rendezvous burns are impulsive maneuvers ([3.1](03-01-impulsive-maneuvers-delta-v.md)); the "higher is slower" behavior driving all the drift is [1.4](01-04-energy-vis-viva-orbit-types.md)'s vis-viva and [1.5](01-05-keplers-laws-orbital-period.md)'s period law, linearized.
- **Forward:** Module 4 changes scale completely — instead of kilometers relative to a target, it works in millions of kilometers relative to planets, using [4.1](04-01-sphere-of-influence-patched-conics.md)'s patched conics. The idea is the same: pick the frame in which the problem is simplest.
- **Sideways (ODEs and control):** the CW equations are a linear time-invariant system $\dot{\mathbf s} = A\mathbf s$ whose solution is the matrix exponential $\Phi(t) = e^{At}$ — exactly the machinery of [`ode-refresher` 3.1](../../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md). The eigenvalues include a repeated zero, which is precisely the secular drift; and the two-impulse solve is the **controllability** computation of [`control-systems` 5.3](../../control-systems/lessons/05-03-controllability-observability.md) — invert the input-to-state map to hit a desired final state.
