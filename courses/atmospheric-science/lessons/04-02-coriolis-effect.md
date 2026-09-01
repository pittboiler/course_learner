# Atmospheric Science · Lesson 4.2: The Coriolis effect

> ⏱ ~15 min · Module 4: Dynamics & weather systems · Builds on: [4.1 The pressure-gradient force & the equations of motion](04-01-pressure-gradient-force-equations-of-motion.md), [`engineering-dynamics` 1.3](../../engineering-dynamics/lessons/01-03-normal-tangential-polar-coordinates.md) · Unlocks: 4.3 (geostrophic wind), 4.4 (thermal wind)

## Why this matters

Without rotation, air would simply flow from high pressure to low, the pressure difference would be erased in hours, and Earth would have no persistent winds, no jet streams, no cyclones, and no weather in any recognizable sense. Everything that makes the atmosphere *interesting* comes from the fact that we do our physics in a rotating frame, and rotation refuses to let air go straight. This lesson derives the Coriolis parameter $f = 2\Omega\sin\phi$, explains why it grows from zero at the equator to a maximum at the poles, and — most importantly — makes clear what kind of thing the Coriolis force *is*. It is not a force. It is the price of using a spinning frame of reference, and once you see that, the sign conventions stop being arbitrary.

## The idea

**The turntable.** Stand at the centre of a spinning merry-go-round and roll a ball outward. In the room's frame the ball travels in a perfectly straight line — no horizontal force acts on it. But you are turning underneath it, so from your point of view the ball veers sideways. If you insisted on treating your rotating frame as if it were at rest, you would have to invent a sideways force to explain the veering. That invented force is the Coriolis force, and it exists only because you chose a frame that is accelerating.

Earth is that merry-go-round. Air launched northward from the tropics is, in the frame of the stars, simply continuing on a nearly straight path — but the ground beneath it is rotating, and by the time the air arrives it has ended up east of where the ground has got to. In the rotating frame this reads as a **deflection to the right in the Northern Hemisphere** and to the left in the Southern.

**Why the deflection depends on latitude.** The relevant rotation is not the Earth's full spin but the rate at which your *local horizontal plane* turns. At the North Pole the ground under your feet rotates a full turn a day about the local vertical, so the effect is maximal. At the equator the local vertical is perpendicular to the rotation axis — the ground there does not spin about the vertical at all, only tumbles about a horizontal axis — so the horizontal deflection vanishes. In between, it is the *component* of the Earth's rotation along the local vertical that counts, and that component is $\Omega\sin\phi$.

**The angular-momentum version, for meridional motion.** Air at the equator sits on a circle of radius $a$ moving east at $\Omega a = 465\ \mathrm{m\,s^{-1}}$. Send it north. The circle it is on shrinks (radius $a\cos\phi$), and conserving angular momentum $m\,u_{\text{abs}}\,a\cos\phi$ makes it spin *faster* about the axis — faster than the ground below, which means it drifts east. Send air south from mid-latitudes and the same conservation makes it lag, drifting west. Both are rightward deflections in the Northern Hemisphere. This version is exact and satisfying, but it only covers north–south motion; the general result covers all directions and is the one to memorize.

**What Coriolis cannot do.** The Coriolis acceleration is always perpendicular to the velocity, so it does **no work** — it changes direction, never speed. And it is proportional to the wind speed, so air at rest feels nothing. This is why the standard bathtub-drain story is wrong: over a basin's scale and speed the Rossby number of [4.1](04-01-pressure-gradient-force-equations-of-motion.md) is enormous, and the drain's swirl is set by how the water was poured, not by the hemisphere.

## The formal version

**The Coriolis parameter.** For horizontal motion on a rotating sphere, the horizontal Coriolis acceleration has magnitude $fV$ and points 90 degrees to the right of the velocity (Northern Hemisphere), where

$$\boxed{\ f = 2\Omega\sin\phi\ }$$

with $\phi$ the latitude and

$$\Omega = \frac{2\pi}{86\,164\ \mathrm{s}} = 7.292\times10^{-5}\ \mathrm{s^{-1}}$$

the Earth's angular velocity. *In words: the deflection rate is twice the vertical component of the planet's rotation.* Note the sidereal day (86,164 s), not the solar day — Earth turns once relative to the stars in 23 h 56 min, and it is rotation relative to inertial space that matters.

| Latitude | $f$ (s⁻¹) | Inertial period $2\pi/f$ |
|---|---|---|
| 0° | 0 | infinite |
| 10° | $2.53\times10^{-5}$ | 68.9 h |
| 30° | $7.29\times10^{-5}$ | 23.9 h |
| 45° | $1.031\times10^{-4}$ | 16.9 h |
| 90° | $1.458\times10^{-4}$ | 12.0 h |

In the Southern Hemisphere $\sin\phi < 0$, so $f < 0$ and the deflection reverses — the *same* equations describe both hemispheres, with the sign carried entirely by $f$.

**Where the factor of 2 comes from.** In a frame rotating at $\boldsymbol\Omega$, the acceleration of a parcel picks up two fictitious terms,

$$\left(\frac{d\mathbf{v}}{dt}\right)_{\text{inertial}} = \left(\frac{d\mathbf{v}}{dt}\right)_{\text{rotating}} + \underbrace{2\boldsymbol\Omega\times\mathbf{v}}_{\text{Coriolis}} + \underbrace{\boldsymbol\Omega\times(\boldsymbol\Omega\times\mathbf{r})}_{\text{centrifugal}},$$

the standard result of [`engineering-dynamics` 1.3](../../engineering-dynamics/lessons/01-03-normal-tangential-polar-coordinates.md). The 2 arises because rotating a *changing* vector contributes twice: once from the frame's rotation acting on the velocity, and once from the rate of change of position being measured in a turning frame. Taking the horizontal component of $-2\boldsymbol\Omega\times\mathbf{v}$ and keeping only the vertical part of $\boldsymbol\Omega$ (the **traditional approximation**, valid because vertical velocities are $10^{-2}$ of horizontal ones) gives exactly the $fv$ and $-fu$ terms of [4.1](04-01-pressure-gradient-force-equations-of-motion.md).

The centrifugal term, meanwhile, is quietly absorbed into gravity: what we call $g = 9.81\ \mathrm{m\,s^{-2}}$ is already the *effective* gravity, true gravitation minus the centrifugal effect of rotation, which is why $g$ is 0.3 percent smaller at the equator than at the poles and why the Earth is an oblate spheroid rather than a sphere.

**Inertial oscillation.** Take a parcel with no pressure gradient and no friction, moving at speed $V$. The only horizontal force is Coriolis, always perpendicular to the motion — the classic recipe for uniform circular motion. Setting the Coriolis acceleration equal to the centripetal requirement:

$$fV = \frac{V^2}{r} \qquad\Longrightarrow\qquad r = \frac{V}{f}, \qquad T = \frac{2\pi r}{V} = \frac{2\pi}{f}.$$

*In words: air left to itself circles clockwise (in the Northern Hemisphere) at a radius $V/f$, with a period that depends only on latitude, not on speed.* At 45°N a 10 m s⁻¹ current traces a 97 km circle in 16.9 hours. These **inertial oscillations** are readily observed in ocean currents after a storm passes, and the $2\pi/f$ period is the natural clock of any rotating fluid.

## Picture

![Left, a rotating platform on which a ball launched straight outward from the centre traces a straight line in space but appears from the platform to curve to the right; right, the Coriolis parameter f plotted against latitude, rising as the sine of latitude from zero at the equator through 1.03 times ten to the minus four at 45 degrees to a maximum at the pole](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — the size of the deflection).** A 20 m s⁻¹ wind blows at 40°N. What is the Coriolis acceleration, and how far would it deflect a parcel in one hour if nothing opposed it?

$$f = 2 \times 7.292\times10^{-5} \times \sin40^\circ = 1.4584\times10^{-4}\times0.6428 = 9.37\times10^{-5}\ \mathrm{s^{-1}},$$

$$a = fV = 9.37\times10^{-5}\times20 = 1.87\times10^{-3}\ \mathrm{m\,s^{-2}}.$$

Over one hour (3600 s), treating the acceleration as constant and sideways:

$$d = \tfrac12at^2 = 0.5 \times 1.87\times10^{-3} \times (3600)^2 = 0.5 \times 1.87\times10^{-3}\times1.296\times10^{7} = 1.21\times10^{4}\ \mathrm{m} \approx 12\ \mathrm{km}.$$

*The point.* Twelve kilometres in an hour, against 72 km travelled forward — a deflection of about 9 degrees. Negligible for a rifle bullet, decisive for an air mass that travels for days. Coriolis is a weak force that wins by patience.

**Example 2 (why you'd care — why hurricanes avoid the equator).** No tropical cyclone has ever formed within about 5 degrees of the equator. Why?

A cyclone needs a persistent rotating circulation around a low-pressure centre, and that requires the Coriolis force to turn inflowing air *along* the isobars rather than straight into the middle. At latitude 5 degrees,

$$f = 1.4584\times10^{-4}\times\sin5^\circ = 1.4584\times10^{-4}\times0.0872 = 1.27\times10^{-5}\ \mathrm{s^{-1}},$$

and the inertial period is $2\pi/f = 4.9\times10^{5}\ \mathrm{s} = 5.7$ days. For a storm-scale flow ($U = 20\ \mathrm{m\,s^{-1}}$, $L = 2\times10^{5}$ m) the Rossby number is

$$\mathrm{Ro} = \frac{20}{1.27\times10^{-5}\times2\times10^{5}} = 7.9,$$

so rotation is far too weak to organize the flow before the pressure gradient has simply filled the low. At 15 degrees, $f = 3.8\times10^{-5}$ and $\mathrm{Ro} = 2.6$ — marginal but workable, and that is roughly where tropical cyclogenesis begins.

*The same reasoning, run the other way,* explains the ITCZ: near the equator, air really does flow more or less straight down the pressure gradient into the heat low, converging from both hemispheres, rising, and raining. Geostrophic balance simply does not exist there, which is why tropical meteorology is a different subject from mid-latitude meteorology.

## Watch out

- **You might think** the Coriolis force is a real force. **Actually** it is a bookkeeping term that appears because we insist on writing $F = ma$ in a rotating frame. There is no agent exerting it, no reaction partner, and in an inertial frame it does not exist. It is nonetheless completely real in its consequences, because we live in the rotating frame.
- **You might think** Coriolis explains bathtub drains and toilet flushes. **Actually** the Rossby number for a basin is around $10^{5}$: the residual swirl from filling the tub is thousands of times stronger than the Coriolis term. The effect is genuine but requires a still, symmetric tank left for hours to see.
- **You might think** Coriolis can speed air up or slow it down. **Actually** it acts strictly perpendicular to the velocity, so $\mathbf{F}\cdot\mathbf{v} = 0$ and it does zero work. It cannot change kinetic energy — only direction. Anything that changes wind *speed* is the pressure gradient or friction.
- **You might think** $f = 2\Omega\sin\phi$ uses the 24-hour day. **Actually** it uses the sidereal day, 86,164 s — Earth's rotation relative to the fixed stars. Using 86,400 would give $f$ about 0.3 percent too small, which is small but is the kind of error that propagates silently.

## One-liner

> Rotation deflects every moving parcel sideways at a rate $f = 2\Omega\sin\phi$ — zero at the equator, maximal at the poles — doing no work, changing no speed, and yet responsible for every large-scale wind on Earth.

## Problems

**P1 (🟢)** Compute the Coriolis parameter at 60°N and at 25°S. For each, state the direction of deflection relative to the motion.

**P2 (🟡)** A 12 m s⁻¹ ocean current at 35°N is left with no pressure gradient after a storm passes. (a) Find the radius and period of the resulting inertial circle. (b) In which direction does it circle? (c) How does the period compare with the local day?

**P3 (🔴, optional)** Air moves northward from the equator, conserving its absolute angular momentum about Earth's axis. (a) Show that on reaching latitude $\phi$ its eastward velocity relative to the ground is $u = \Omega a\sin^2\phi/\cos\phi$, where $a = 6371$ km. (b) Evaluate at 20 and 30 degrees. (c) Use the result to explain why the Hadley cell cannot extend much beyond 30 degrees.

<details>
<summary>Solutions</summary>

**P1** At 60°N: $$f = 2 \times 7.292\times10^{-5} \times \sin60^\circ = 1.4584\times10^{-4} \times 0.8660 = 1.263\times10^{-4}\ \mathrm{s^{-1}}.$$

Positive, so the deflection is to the **right** of the motion.

At 25°S: $\sin(-25^\circ) = -0.4226$, so

$$f = 1.4584\times10^{-4} \times (-0.4226) = -6.16\times10^{-5}\ \mathrm{s^{-1}}.$$

Negative, so the deflection is to the **left** of the motion. Note that the magnitude at 60° is more than double that at 25° — mid- and high-latitude flows are far more strongly constrained by rotation than subtropical ones.

**P2** (a) $$f = 1.4584\times10^{-4}\times\sin35^\circ = 1.4584\times10^{-4}\times0.5736 = 8.365\times10^{-5}\ \mathrm{s^{-1}},$$

$$r = \frac{V}{f} = \frac{12}{8.365\times10^{-5}} = 1.435\times10^{5}\ \mathrm{m} = 143\ \mathrm{km},$$

$$T = \frac{2\pi}{f} = \frac{6.2832}{8.365\times10^{-5}} = 7.51\times10^{4}\ \mathrm{s} = 20.9\ \mathrm{h}.$$

(b) **Clockwise**, in the Northern Hemisphere: the Coriolis force points to the right of the motion, so it acts as the centripetal force for a rightward (clockwise) turn.

(c) The period is 20.9 h against a 24 h day — shorter. In general $2\pi/f = (12\ \mathrm{h})/\sin\phi$ in sidereal terms, so the inertial period equals half a day only at the pole and exceeds a day equatorward of 30 degrees. This is the origin of the "half-pendulum-day" language used for Foucault pendulums, which precess on exactly the same clock.

**P3** (a) At the equator, air at rest relative to the ground has absolute eastward velocity $\Omega a$ and angular momentum per unit mass

$$M = \Omega a \cdot a = \Omega a^2.$$

At latitude $\phi$ the distance from the rotation axis is $a\cos\phi$, and if the parcel's absolute eastward velocity there is $u_{\text{abs}}$,

$$M = u_{\text{abs}}\,a\cos\phi.$$

Conserving $M$: $u_{\text{abs}} = \Omega a^2/(a\cos\phi) = \Omega a/\cos\phi$. The ground at that latitude moves east at $\Omega a\cos\phi$, so the wind *relative to the ground* is

$$u = \frac{\Omega a}{\cos\phi} - \Omega a\cos\phi = \Omega a\,\frac{1 - \cos^2\phi}{\cos\phi} = \boxed{\Omega a\,\frac{\sin^2\phi}{\cos\phi}.}$$

(b) With $\Omega a = 7.292\times10^{-5}\times6.371\times10^{6} = 464.6\ \mathrm{m\,s^{-1}}$:

$$u(20^\circ) = 464.6\times\frac{(0.3420)^2}{0.9397} = 464.6\times0.1245 = 58\ \mathrm{m\,s^{-1}},$$
$$u(30^\circ) = 464.6\times\frac{(0.5)^2}{0.8660} = 464.6\times0.2887 = 134\ \mathrm{m\,s^{-1}}.$$

(c) The numbers are the argument. A Hadley cell carries air poleward aloft from the equator; if that air conserved its angular momentum it would arrive at 30 degrees moving east at 134 m s⁻¹ — far faster than the observed subtropical jet (around 40 to 60 m s⁻¹) and far faster than any flow can sustain against instability. Long before it gets further, the shear becomes so large that the flow breaks down into eddies, and it is those eddies — mid-latitude cyclones, the subject of [4.5](04-05-air-masses-fronts-cyclones.md) — that take over the poleward heat transport beyond 30 degrees.

So the Hadley cell's terminus is not arbitrary. It is set by how far poleward angular-momentum-conserving air can get before the winds it generates become unstable, and the answer is about 30 degrees. That is where the subtropical highs and the world's great deserts sit.

*Check.* At the equator itself, $\sin^2\phi/\cos\phi = 0$, giving $u = 0$ as it must — air that has not moved has gained nothing. And the expression diverges as $\phi \to 90^\circ$, correctly signalling that no air can reach the pole while conserving angular momentum.

</details>

## Flashback

**From Lesson 1.4 (Potential temperature):** A parcel with $\theta = 306$ K is found at 750 hPa. (a) What is its temperature there? (b) The environment at 750 hPa has $T = 268$ K. Is the parcel buoyant, and what will it do?

<details>
<summary>Solution</summary>

(a) Invert Poisson's equation:

$$T = \theta\left(\frac{p}{p_0}\right)^{\kappa} = 306 \times (0.750)^{0.286} = 306 \times 0.9209 = 281.8\ \mathrm{K}.$$

(b) The parcel is at 281.8 K against an environment at 268 K — **13.8 K warmer**, therefore much less dense at the same pressure, and strongly positively buoyant. It will rise, and as it rises it conserves its $\theta = 306$ K, so it will keep rising until it reaches a level where the environment's own $\theta$ has climbed to 306 K.

*Check.* The environment's $\theta$ at 750 hPa is $268/0.9209 = 291.0$ K, well below the parcel's 306 K — the same verdict reached in $\theta$ space, which is the point of using $\theta$: you can compare directly without converting back to temperature, because both are referred to the same 1000 hPa.

</details>

## Connections

- **Backward:** the $fv$ and $-fu$ terms written down in [4.1](04-01-pressure-gradient-force-equations-of-motion.md) are derived here; the rotating-frame algebra is [`engineering-dynamics` 1.3](../../engineering-dynamics/lessons/01-03-normal-tangential-polar-coordinates.md)'s.
- **Forward:** [4.3](04-03-geostrophic-gradient-wind.md) balances this deflection against the pressure-gradient force to get the wind directly from a map; [4.4](04-04-thermal-wind-general-circulation.md) uses P3's angular-momentum argument to explain why the general circulation has three cells rather than one.
- **Sideways (oceanography):** the identical $f$ governs ocean currents, where the Coriolis force acting on wind-driven surface water produces the Ekman spiral and the great subtropical gyres — [`oceanography`](../../oceanography/syllabus.md) runs the same dynamics in a fluid a thousand times denser and a thousand times slower.
