# Astrodynamics · Lesson 4.3: Gravity assists

> ⏱ ~15 min · Module 4: Interplanetary trajectories & perturbations · Builds on: [1.3](01-03-orbit-equation-conic-sections.md), [4.1](04-01-sphere-of-influence-patched-conics.md), [4.2](04-02-interplanetary-hohmann-hyperbolic-legs.md) · Unlocks: 4.4 (perturbations)

## Why this matters

Problem P3 of [4.2](04-02-interplanetary-hohmann-hyperbolic-legs.md) delivered bad news: reaching Jupiter directly costs 6.3 km/s from LEO, roughly halving the payload compared with Mars. Reaching Saturn or Neptune directly is worse still — beyond what any chemical launcher can do with a useful payload.

Gravity assists are the way out. Voyager 2 visited all four outer planets on a launcher that could barely reach Jupiter, by borrowing momentum from each planet it passed. Cassini reached Saturn via Venus, Venus, Earth, and Jupiter. MESSENGER needed six flybys to *slow down* enough to orbit Mercury. Without this maneuver, most of the solar system would be out of reach.

It also has the most persistent conceptual trap in the subject: it looks like free energy, and understanding exactly why it isn't is genuinely illuminating.

## The idea

Work in the planet's frame first. There, the flyby is a hyperbolic pass ([1.3](01-03-orbit-equation-conic-sections.md)): the spacecraft comes in from infinity with speed $v_\infty$, swings past, and leaves toward infinity with **exactly the same speed** $v_\infty$ — energy relative to the planet is conserved, since gravity is conservative and the spacecraft starts and ends effectively at infinity. All that changes is the **direction**. The trajectory is bent through the turning angle $\delta$ from [1.3](01-03-orbit-equation-conic-sections.md).

Now switch to the Sun's frame. The spacecraft's heliocentric velocity is

$$\mathbf v_{\rm helio} = \mathbf v_{\rm planet} + \mathbf v_\infty,$$

and the flyby rotated $\mathbf v_\infty$ without changing its length. Geometrically: the tip of $\mathbf v_\infty$ slides around a circle of radius $v_\infty$ centered at the tip of $\mathbf v_{\rm planet}$. The heliocentric velocity is the vector from the origin to that sliding tip — and **its length changes**, potentially a great deal.

That's the whole mechanism. Nothing is free in the planet's frame; everything happens because the planet is moving in the Sun's frame.

**Where does the energy come from?** From the planet's orbit. The spacecraft pulls on the planet exactly as hard as the planet pulls on the spacecraft (Newton's third law), so the planet loses precisely the momentum the spacecraft gains. Jupiter's mass is $10^{23}$ times a spacecraft's, so its orbital change is around $10^{-23}$ of the spacecraft's — utterly unmeasurable, but exactly bookkeeping-balanced. It's an elastic collision with a very heavy, very fast-moving wall.

**Analogy that actually works:** bounce a tennis ball off an oncoming train. In the train's frame the ball rebounds at the same speed it arrived. In the ground frame it comes back much faster — it gained twice the train's speed. The train slowed by an unmeasurable amount. Same physics, same bookkeeping.

## The formal version

**The flyby is elastic in the planet's frame.**

$$\|\mathbf v_\infty^{\rm out}\| = \|\mathbf v_\infty^{\rm in}\| \equiv v_\infty,$$

with only the direction changed. The turning angle, from the hyperbola geometry of [1.3](01-03-orbit-equation-conic-sections.md) ($\delta = 2\theta_\infty - 180^\circ$, $\cos\theta_\infty = -1/e$), simplifies to

$$\boxed{\;\sin\frac{\delta}{2} = \frac{1}{e}, \qquad e = 1 + \frac{r_p v_\infty^2}{\mu_{\rm planet}}.\;}$$

*In words: the closer you fly and the slower you arrive, the more the planet bends you.* See [gravity assist](../reference.md#gravity-assist).

Two limits worth internalizing:
- **Slow, close flyby** ($r_pv_\infty^2 \ll \mu$): $e\to1$, $\delta\to180^\circ$ — the trajectory doubles back.
- **Fast, distant flyby** ($r_pv_\infty^2 \gg \mu$): $e\to\infty$, $\delta\to0$ — you barely notice the planet.

The controllable parameter is $r_p$, set by the aim point (the "B-plane" targeting of real navigation). Lower is more effective, bounded by the planet's surface and atmosphere.

**Heliocentric velocity change.** The change in the spacecraft's heliocentric velocity equals the change in $\mathbf v_\infty$ (the planet's velocity is unchanged):

$$\Delta\mathbf v_{\rm helio} = \mathbf v_\infty^{\rm out} - \mathbf v_\infty^{\rm in}, \qquad \|\Delta\mathbf v_{\rm helio}\| = 2v_\infty\sin\frac{\delta}{2} = \frac{2v_\infty}{e}.$$

*In words: the flyby is worth exactly as much as a rocket burn of magnitude $2v_\infty\sin(\delta/2)$ — and it costs nothing.* Note this is the same $2v\sin(\theta/2)$ form as the plane change of [3.4](03-04-plane-changes-combined-maneuvers.md), for the same reason: it's the chord of a rotation.

Note also that $\|\Delta\mathbf v_{\rm helio}\|$ is the magnitude of the *vector* change; the change in heliocentric **speed** is generally smaller, since the change isn't aligned with the existing velocity.

**Leading versus trailing.** The sign of the effect is set by which side you pass:

- Pass **behind** the planet (trailing edge): the spacecraft is dragged forward. **Speeds up** heliocentrically — used to reach the outer planets.
- Pass **in front** (leading edge): dragged backward. **Slows down** — used by MESSENGER to fall into Mercury and by Parker Solar Probe (seven Venus flybys) to reach the Sun.

**What you cannot do.** Since $v_\infty$ is unchanged, a flyby can never change your energy *relative to that planet*. You can't use a single flyby of Jupiter to change your Jupiter-relative energy, only your Sun-relative energy. And a sequence of flybys of the *same* planet is bounded: you can rotate $\mathbf v_\infty$ freely but never lengthen it, so there's a hard ceiling on how much a given planet can ever do for you.

## Picture

![On the left, the hyperbolic flyby past a planet with the incoming and outgoing asymptotes and the turning angle marked, showing the incoming and outgoing v-infinity vectors having equal length; on the right, the heliocentric velocity triangle in which the v-infinity vector swings around a circle centred on the tip of the planet's velocity, lengthening the heliocentric velocity from 7.4 to 17.4 km/s](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — a Jupiter flyby).** A spacecraft arrives at Jupiter on a Hohmann transfer from Earth. Jupiter orbits at $r = 7.783\times10^8$ km with $v_J = 13.058$ km/s, and the transfer's aphelion speed there is $v_{t,a} = 7.415$ km/s. Both are transverse (aphelion, so $\gamma = 0$), so

$$\mathbf v_\infty^{\rm in} = \mathbf v_{\rm helio} - \mathbf v_J \;\Longrightarrow\; v_\infty = |7.415 - 13.058| = 5.643\ \mathrm{km/s},$$

pointing *backwards* relative to Jupiter's motion (the spacecraft is being overtaken).

Fly past at $r_p = 5R_J = 357{,}460$ km, with $\mu_J = 1.26686\times10^8\ \mathrm{km^3/s^2}$:

$$e = 1 + \frac{r_pv_\infty^2}{\mu_J} = 1 + \frac{357{,}460\times31.84}{1.26686\times10^8} = 1 + 0.0899 = 1.0899,$$

$$\sin\frac{\delta}{2} = \frac{1}{1.0899} = 0.9175 \;\Longrightarrow\; \frac{\delta}{2} = 66.6^\circ, \quad \delta = 133.1^\circ.$$

$$\|\Delta\mathbf v_{\rm helio}\| = 2(5.643)(0.9175) = 10.356\ \mathrm{km/s}.$$

Choosing the trailing-side pass so the turn adds speed, the new heliocentric speed is

$$v_{\rm helio}^{\rm out} = \big\|\mathbf v_J + \mathbf v_\infty^{\rm out}\big\| = 17.411\ \mathrm{km/s},$$

up from 7.415 — **a gain of 10.0 km/s, for zero propellant**. For scale, that is more than the entire delta-v from Earth's surface to LEO, and about 2.8 times the LEO-to-GEO transfer budget.

*Sanity check:* solar escape speed at Jupiter's distance is $\sqrt{2\mu_\odot/r} = 18.47$ km/s. At 17.41 km/s the spacecraft is still (barely) bound — consistent with the Voyagers needing Saturn's help too before they were unambiguously on escape trajectories.

**Example 2 (why you'd care — flyby altitude is the design knob).** Same arrival ($v_\infty = 5.643$ km/s), three different aim points:

| $r_p$ | $e$ | $\delta$ | $\|\Delta\mathbf v_{\rm helio}\|$ |
|---|---|---|---|
| $2R_J$ | 1.0359 | $149.7^\circ$ | 10.89 km/s |
| $5R_J$ | 1.0899 | $133.1^\circ$ | 10.36 km/s |
| $10R_J$ | 1.1797 | $115.9^\circ$ | 9.57 km/s |

Flying five times closer buys only 14 percent more. **The returns saturate**, because $\sin(\delta/2) = 1/e$ is already near 1 whenever $r_pv_\infty^2 \ll \mu$, and it cannot exceed 1. Jupiter is so massive that even a distant pass extracts most of what's available.

That saturation is why real trajectory designers don't simply fly as close as possible. Closer passes mean deeper radiation exposure (Jupiter's belts are lethal inside about $3R_J$), tighter navigation tolerances, and worse consequences for a targeting error. Galileo's Io flyby at $0.5R_J$ was a deliberate exception with a science payoff; Voyager 2 passed Jupiter at about $10R_J$ and still got nearly the full benefit.

**And the fundamental limit:** the absolute maximum is $\delta = 180^\circ$, giving $\|\Delta\mathbf v\| = 2v_\infty$ — the spacecraft's $\mathbf v_\infty$ exactly reversed, adding $2v_\infty$ to its heliocentric velocity if perfectly aligned. Here that ceiling is 11.29 km/s, and the $5R_J$ pass already captures 92 percent of it.

## Watch out

- **You might think a flyby creates energy.** It moves energy from the planet's orbit to the spacecraft's, exactly conserving the total. The transfer is unmeasurably small for the planet only because of the mass ratio.
- **You might think the flyby changes $v_\infty$.** It cannot. Only the direction changes. Any statement of the form "the flyby increased our speed relative to Jupiter" is wrong.
- **You might forget which side to pass.** Behind the planet speeds you up; in front slows you down. The geometry is set weeks in advance by the approach aim point, and getting it backwards is a mission-ending error.
- **You might expect arbitrarily large gains from flying closer.** The turning angle saturates at $180^\circ$ and $\|\Delta\mathbf v\|$ at $2v_\infty$. A small, fast planet gives you almost nothing regardless of altitude — which is why Mars flybys are worth a few hundred m/s and Jupiter flybys are worth ten km/s.
- **You might ignore the timing cost.** Multi-flyby routes are cheap in delta-v and expensive in years: Cassini took 6.7 years to Saturn via four flybys; the direct Hohmann would have taken 6.1 years but needed a $C_3$ no launcher could supply.

## One-liner

> In the planet's frame a flyby is elastic — $v_\infty$ turns but never changes length — and because the planet is moving, that rotation shows up in the Sun's frame as a free velocity change of up to $2v_\infty$.

## Problems

**P1 (🟢)** A spacecraft flies past Venus ($\mu_V = 324{,}859\ \mathrm{km^3/s^2}$, $R_V = 6052$ km) with $v_\infty = 5.0$ km/s at a periapsis of 10,000 km. Find the eccentricity of the flyby hyperbola, the turning angle, and the magnitude of the heliocentric velocity change.

**P2 (🟡)** For the Venus flyby of P1, what periapsis radius would double the turning angle? Is it achievable?

**P3 (🔴)** Show that the maximum possible heliocentric velocity change from a single flyby is $2v_\infty$, and find the flyby periapsis (in terms of $\mu$ and $v_\infty$) at which $\delta = 90^\circ$. Then explain why a spacecraft with a very large $v_\infty$ gets almost nothing from a flyby, and connect that to why MESSENGER needed six flybys to reach Mercury.

<details>
<summary>Solutions</summary>

**P1**

$$e = 1 + \frac{r_pv_\infty^2}{\mu_V} = 1 + \frac{10{,}000\times25}{324{,}859} = 1 + 0.7696 = 1.7696.$$

$$\sin\frac{\delta}{2} = \frac{1}{1.7696} = 0.5651 \;\Longrightarrow\; \frac{\delta}{2} = 34.40^\circ, \quad \delta = 68.8^\circ.$$

$$\|\Delta\mathbf v_{\rm helio}\| = 2v_\infty\sin\frac{\delta}{2} = 2(5.0)(0.5651) = 5.65\ \mathrm{km/s}.$$

*Check.* $e$ is comfortably above 1 ✓ and the turning angle is well short of the Jupiter case — Venus's $\mu$ is 390 times smaller, so $r_pv_\infty^2/\mu$ is large and the bend is modest ✓. Even so, 5.65 km/s of free velocity change is more than a LEO-to-GEO transfer, which is why Venus flybys are so heavily used.

**P2** Doubling the turning angle means $\delta = 137.6^\circ$, so

$$\sin\frac{\delta}{2} = \sin 68.8^\circ = 0.9325 \;\Longrightarrow\; e = \frac{1}{0.9325} = 1.0724.$$

Solving for $r_p$:

$$r_p = \frac{(e-1)\mu_V}{v_\infty^2} = \frac{0.0724\times324{,}859}{25} = \frac{23{,}520}{25} = 941\ \mathrm{km}.$$

**Not achievable.** Venus's radius is 6052 km, so a periapsis of 941 km is 5100 km *below the surface*. Venus also has a dense atmosphere extending well above the surface, so in practice the minimum usable periapsis is around 6300 km — giving $e = 1.485$, $\delta = 84.5^\circ$, and $\|\Delta\mathbf v\| = 6.73$ km/s. That is the hard ceiling for a single Venus flyby at this $v_\infty$.

*Check.* The required $r_p$ came out well below $R_V$, which is the signature of asking for more bend than the planet can deliver ✓. The general rule: a planet's maximum turning angle at a given $v_\infty$ is set by $e_{\min} = 1 + R_{\rm planet}v_\infty^2/\mu$.

**P3** **Maximum $\|\Delta\mathbf v\|$.** From the flyby geometry,

$$\|\Delta\mathbf v_{\rm helio}\| = 2v_\infty\sin\frac{\delta}{2}.$$

Since $\sin(\delta/2)\le 1$ with equality at $\delta = 180^\circ$,

$$\|\Delta\mathbf v_{\rm helio}\| \le 2v_\infty. \;\blacksquare$$

Equivalently: $\mathbf v_\infty^{\rm out}$ lies on a circle of radius $v_\infty$ about the tip of $\mathbf v_{\rm planet}$, and the greatest distance between two points on that circle is its diameter, $2v_\infty$.

**Periapsis for $\delta = 90^\circ$.** Then $\sin 45^\circ = 1/e$, so $e = \sqrt2$, and

$$r_p = \frac{(e-1)\mu}{v_\infty^2} = \frac{(\sqrt2-1)\mu}{v_\infty^2} = \frac{0.4142\,\mu}{v_\infty^2}.$$

**Why large $v_\infty$ ruins the assist.** From $e = 1 + r_pv_\infty^2/\mu$, a large $v_\infty$ makes $e$ large, so $\sin(\delta/2) = 1/e$ is small and $\delta$ is small. Concretely, since $r_p \ge R_{\rm planet}$,

$$\|\Delta\mathbf v\| = \frac{2v_\infty}{1 + r_pv_\infty^2/\mu} \le \frac{2v_\infty}{1+R v_\infty^2/\mu} \;\xrightarrow[v_\infty\to\infty]{}\; \frac{2\mu}{Rv_\infty} \to 0.$$

**The benefit vanishes as $1/v_\infty$ for a fast approach.** Physically: you're past the planet before its gravity has time to act on you. This is the same fast-hyperbola limit as P3 of [1.3](01-03-orbit-equation-conic-sections.md).

**MESSENGER.** Falling inward toward Mercury means gaining enormous heliocentric speed (the Sun's gravity does that for free), so the spacecraft arrives at each flyby with a large $v_\infty$ — precisely the regime where each flyby is nearly useless. Mercury compounds the problem: it has the smallest $\mu$ of any planet ($22{,}032\ \mathrm{km^3/s^2}$, one-eighteenth of Earth's), so its maximum bend is small even at low $v_\infty$. With each flyby able to shed only a modest amount, MESSENGER needed one Earth, two Venus, and three Mercury flybys over 6.6 years, plus substantial propulsive braking, to slow down enough for orbit insertion.

*Check.* At $\delta = 90^\circ$, $\|\Delta\mathbf v\| = 2v_\infty\sin45^\circ = 1.414\,v_\infty$ — 71 percent of the theoretical maximum, from a bend of only half the maximum ✓, consistent with the saturation seen in Example 2.

</details>

## Flashback

**From Lesson 3.4 (Plane changes & combined maneuvers):** A spacecraft in a circular orbit at 5.0 km/s must change its orbital plane by $40^\circ$. Find the delta-v, and compare it with the free velocity change available from the Venus flyby in P1.

<details>
<summary>Solution</summary>

$$\Delta v = 2v\sin\frac{\Delta i}{2} = 2(5.0)\sin 20^\circ = 10.0(0.34202) = 3.42\ \mathrm{km/s}.$$

The Venus flyby of P1 delivered $5.65$ km/s of velocity change **for free** — 65 percent more than this expensive propulsive turn.

*Check.* The two formulas are literally the same, $2v\sin(\theta/2)$: a plane change rotates $\mathbf v$ by $\Delta i$ at a cost, and a flyby rotates $\mathbf v_\infty$ by $\delta$ at no cost ✓. The difference is entirely who supplies the turning — your engine, or the planet. That equivalence is the cleanest way to see why gravity assists are worth the years they cost. ✓

</details>

## Connections

- **Backward:** the turning angle is the hyperbola asymptote geometry of [1.3](01-03-orbit-equation-conic-sections.md); the SOI-boundary velocity addition is [4.1](04-01-sphere-of-influence-patched-conics.md)'s patching; the arrival $v_\infty$ comes from [4.2](04-02-interplanetary-hohmann-hyperbolic-legs.md)'s heliocentric transfer.
- **Forward:** [4.4](04-04-perturbations-j2-drag.md) turns to a different kind of "free" orbit change — the secular drift that Earth's oblateness supplies at no propellant cost; [4.5](04-05-restricted-three-body-lagrange-points.md) treats three bodies without patching at all, which is where low-energy transfers live.
- **Sideways (physics):** the flyby is an elastic collision analyzed in two frames, exactly the two-frame momentum bookkeeping of [`mechanics-refresher` 2.3](../../mechanics-refresher/lessons/02-03-momentum-collisions.md) — with the "wall" being a planet whose mass makes the recoil invisible.
