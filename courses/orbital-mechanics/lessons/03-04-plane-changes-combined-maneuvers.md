# Astrodynamics · Lesson 3.4: Plane changes & combined maneuvers

> ⏱ ~15 min · Module 3: Maneuvers & rendezvous · Builds on: [3.1](03-01-impulsive-maneuvers-delta-v.md), [3.2](03-02-hohmann-transfers.md) · Unlocks: 3.5 (relative motion and rendezvous)

## Why this matters

Plane changes are the most expensive routine maneuver in astrodynamics, and the cost is shocking the first time you compute it: rotating a LEO orbit by 28.5 degrees costs more than escaping Earth entirely. That single number shapes the entire launch industry — it's why rockets fly east from equatorial-ish sites, why the ISS sits at 51.6 degrees, and why every GEO mission is designed around getting its plane change done as cheaply as possible.

This lesson gives you the cost formula, the two ways to make it cheaper, and the combined-burn trick that saves a commercial GEO mission more than a tonne of propellant.

## The idea

To change an orbit's plane you must rotate the velocity vector. From [3.1](03-01-impulsive-maneuvers-delta-v.md) we know turning is expensive: the delta-v to swing a vector through an angle is comparable to the vector's own length. Rotate by 60 degrees and you pay the full orbital speed.

That immediately gives the two levers.

**Lever one: do it where you're slow.** The cost scales directly with the speed at the burn point. On an eccentric orbit you're slowest at apogee, so that's where the plane change goes. Transferring LEO to GEO, the transfer ellipse's apogee speed is 1.61 km/s versus 7.73 km/s in LEO — a factor of 4.8 saving just from *when* you fire.

**Lever two: don't do it separately.** If you're already changing your velocity for another reason — say, circularizing at apogee — then the plane change and the raise are both just velocity changes at the same point. Instead of doing them one after the other, do the vector sum. Two sides of a triangle versus the third side: the triangle inequality guarantees the combined burn is cheaper, and when the two changes are roughly perpendicular the saving is large.

That's the whole content of the lesson, but the numbers are worth taking seriously: for LEO to GEO with a 28.5-degree plane change, combining saves **1.15 km/s** out of 5.41. On a rocket-equation basis that's roughly a third of the delivered payload.

## The formal version

**Pure plane change.** Rotate the velocity by an angle $\Delta i$ while keeping its magnitude $v$. By the law of cosines with two equal sides,

$$\Delta v = \sqrt{v^2+v^2-2v^2\cos\Delta i} = v\sqrt{2(1-\cos\Delta i)} = \boxed{\;2v\sin\frac{\Delta i}{2}.\;}$$

*In words: the cost is twice the speed times the sine of half the turn angle.* See [plane change](../reference.md#plane-change). Some values worth carrying:

| $\Delta i$ | $\Delta v / v$ |
|---|---|
| $10^\circ$ | 0.174 |
| $28.5^\circ$ | 0.492 |
| $60^\circ$ | 1.000 |
| $90^\circ$ | 1.414 |
| $180^\circ$ | 2.000 |

**A $60^\circ$ plane change costs a full orbital speed.** Reversing your orbit costs twice it. For small angles $\Delta v \approx v\,\Delta i$ (radians), which is the useful linearization.

**Where the burn must happen.** A plane change must occur where the old and new orbit planes intersect — on the **line of nodes** between them. For a change of inclination alone (keeping $\Omega$ fixed), that means at the ascending or descending node, i.e. on the equator.

**Combined maneuver.** Suppose at one point you want to go from velocity $\mathbf v_1$ (magnitude $v_1$) to $\mathbf v_2$ (magnitude $v_2$), with an angle $\Delta i$ between them. The law of cosines gives

$$\boxed{\;\Delta v_{\rm comb} = \sqrt{v_1^2+v_2^2-2v_1v_2\cos\Delta i}.\;}$$

*In words: one burn along the third side of the velocity triangle.* Compare the separate route, which costs $|v_2-v_1| + 2v_2\sin(\Delta i/2)$ — two sides of the same triangle. The triangle inequality makes the combined route cheaper for any $\Delta i > 0$, and the advantage is biggest when the speed change and the turn are comparable in size.

**Optimal splitting.** You need not do the whole plane change at one end. Split it as $\Delta i = \alpha_1 + \alpha_2$, with $\alpha_1$ folded into the departure burn and $\alpha_2$ into the arrival burn:

$$\Delta v_{\rm total}(\alpha_1) = \sqrt{v_{c1}^2 + v_{t,p}^2 - 2v_{c1}v_{t,p}\cos\alpha_1} + \sqrt{v_{t,a}^2+v_{c2}^2-2v_{t,a}v_{c2}\cos(\Delta i - \alpha_1)}.$$

Minimizing numerically for LEO-to-GEO gives $\alpha_1 = 2.2^\circ$ at LEO and $\alpha_2 = 26.3^\circ$ at GEO, for a total of $4.231$ km/s — another 25 m/s below doing all $28.5^\circ$ at apogee. *In words: almost all the turn belongs at the slow end, but a sliver at the fast end helps.* The saving is small because the LEO burn is so much more expensive per degree; real missions do the split anyway, because 25 m/s is free.

**One more lever: the bi-elliptic plane change.** Since the cost scales with speed, and speed falls with altitude, a really large plane change ($\Delta i \gtrsim 40^\circ$) can be done more cheaply by first raising apogee far out on an ellipse, turning there where the speed is tiny, and coming back — the three-burn geometry of [3.3](03-03-bi-elliptic-transfers.md). This is where the bi-elliptic transfer genuinely earns its keep, saving far more than the fractional percent it managed on pure orbit-raising.

## Picture

![On the left, an isosceles velocity triangle showing a pure plane change costing twice the speed times the sine of half the inclination change; on the right, a combined burn drawn as the third side of a triangle whose two dashed sides represent doing the raise and the turn separately](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — why plane changes are done high).** A satellite in a 300-km circular orbit ($v = 7.726$ km/s) needs a $28.5^\circ$ inclination change. Compare doing it there versus at GEO ($v = 3.075$ km/s).

$$\Delta v_{\rm LEO} = 2(7.726)\sin(14.25^\circ) = 2(7.726)(0.24616) = 3.803\ \mathrm{km/s},$$
$$\Delta v_{\rm GEO} = 2(3.075)\sin(14.25^\circ) = 1.514\ \mathrm{km/s}.$$

**The LEO plane change costs more than escaping Earth** (3.20 km/s from [1.4](01-04-energy-vis-viva-orbit-types.md)) — for a maneuver that changes neither the orbit's size nor its shape. Doing it at GEO costs 60 percent less. And doing it at the *transfer ellipse's apogee*, where $v = 1.608$ km/s, would cost only $2(1.608)(0.24616) = 0.792$ km/s if done as a separate burn there.

**Example 2 (why you'd care — the full LEO-to-GEO mission from Cape Canaveral).** A satellite launches into a $28.5^\circ$-inclined 300-km parking orbit ($r_1 = 6678$ km) and must reach equatorial GEO ($r_2 = 42{,}164$ km). Transfer speeds from [3.2](03-02-hohmann-transfers.md): $v_{c1} = 7.7258$, $v_{t,p} = 10.1516$, $v_{t,a} = 1.6078$, $v_{c2} = 3.0747$ km/s.

**Route A — separate burns.**

$$\Delta v_1 = 10.1516-7.7258 = 2.4258, \quad \Delta v_2 = 3.0747-1.6078 = 1.4668, \quad \Delta v_{\rm plane} = 2(3.0747)\sin 14.25^\circ = 1.5137.$$

$$\Delta v_{\rm total} = 2.4258+1.4668+1.5137 = \mathbf{5.4063\ km/s}.$$

**Route B — combine the plane change with the apogee burn.** The apogee burn must take the spacecraft from $\mathbf v$ of magnitude $1.6078$ km/s (on the inclined transfer ellipse) to $\mathbf v$ of magnitude $3.0747$ km/s (equatorial GEO), turning through $28.5^\circ$:

$$\Delta v_2' = \sqrt{1.6078^2+3.0747^2 - 2(1.6078)(3.0747)\cos 28.5^\circ}$$
$$= \sqrt{2.5850+9.4538-9.8869(0.87882)} = \sqrt{12.0388 - 8.6889} = \sqrt{3.3499} = 1.8302\ \mathrm{km/s}.$$

$$\Delta v_{\rm total} = 2.4258 + 1.8302 = \mathbf{4.2560\ km/s}.$$

**The saving: 1.150 km/s — 21 percent of the budget.** Note what happened: the plane change went from costing 1.514 km/s standalone to costing only $1.8302 - 1.4668 = 0.363$ km/s as a marginal addition to a burn already being made. In rocket-equation terms ($I_{\rm sp} = 320$ s, $v_e = 3.138$ km/s), the mass ratio drops from $e^{5.4063/3.138} = 5.616$ to $e^{4.2560/3.138} = 3.881$, so the payload fraction rises from 17.8 percent to 25.8 percent — **45 percent more payload delivered to GEO**, from one change in how you sequence the burns.

**Why the plane change goes at apogee** — one sentence: apogee is where the spacecraft is moving slowest, and the cost of turning a velocity vector is proportional to its length.

## Watch out

- **You might think a small plane change is nearly free.** It's linear, not quadratic: $\Delta v \approx v\,\Delta i$. Even $1^\circ$ in LEO costs 135 m/s, comparable to a year of station-keeping.
- **You might burn anywhere.** A plane change only works where the two planes intersect. Firing out-of-plane at an arbitrary point changes the plane in a way you didn't intend and generally wrecks the orbit's shape too.
- **You might add the plane-change cost to the transfer cost.** That's Route A, and it's the expensive one. Whenever two velocity changes happen at the same point, vector-sum them.
- **You might think combining always saves a lot.** The saving comes from the triangle inequality, so it's biggest when the two changes are comparable and roughly perpendicular. If the plane change is tiny, the combined and separate costs converge.
- **You might forget that inclination is set at launch for a reason.** All of this is why a satellite's inclination is chosen on the pad. A 3.8 km/s LEO plane change is not a design option; it is a mission-ending expense.

## One-liner

> Turning a velocity vector costs $2v\sin(\Delta i/2)$, so change planes where you are slowest — and never as a separate burn if another burn is already happening there.

## Problems

**P1 (🟢)** A satellite in a circular orbit at $r = 12{,}000$ km must change its inclination by $15^\circ$. Find the delta-v required.

**P2 (🟡)** A spacecraft arrives at apogee of a transfer ellipse at $2.20$ km/s and must circularize into an orbit with speed $3.40$ km/s while changing plane by $20^\circ$. Compute the combined burn and compare with doing the two separately.

**P3 (🔴)** For a pure plane change, show that the cost formula $\Delta v = 2v\sin(\Delta i/2)$ implies that reversing an orbit's direction ($\Delta i = 180^\circ$) costs twice the orbital speed, and explain why this is also exactly the cost of stopping dead and re-accelerating backwards. Then determine the inclination change beyond which a plane change costs more than escaping.

<details>
<summary>Solutions</summary>

**P1**

$$v = \sqrt{\frac{398{,}600}{12{,}000}} = \sqrt{33.217} = 5.7635\ \mathrm{km/s}.$$

$$\Delta v = 2v\sin\frac{\Delta i}{2} = 2(5.7635)\sin 7.5^\circ = 2(5.7635)(0.13053) = 1.5047\ \mathrm{km/s}.$$

*Check.* The small-angle estimate $v\,\Delta i = 5.7635\times(15\pi/180) = 5.7635(0.26180) = 1.509$ km/s ✓, within 0.3 percent — the linearization is excellent below about $20^\circ$.

**P2** *Combined:*

$$\Delta v = \sqrt{2.20^2 + 3.40^2 - 2(2.20)(3.40)\cos 20^\circ} = \sqrt{4.84 + 11.56 - 14.96(0.93969)}$$
$$= \sqrt{16.40 - 14.0578} = \sqrt{2.3422} = 1.5304\ \mathrm{km/s}.$$

*Separate:*

$$\Delta v_{\rm circ} = 3.40 - 2.20 = 1.20\ \mathrm{km/s}, \qquad \Delta v_{\rm plane} = 2(3.40)\sin 10^\circ = 6.80(0.17365) = 1.1808\ \mathrm{km/s},$$
$$\Delta v_{\rm sep} = 1.20 + 1.1808 = 2.3808\ \mathrm{km/s}.$$

The combined burn saves $2.3808 - 1.5304 = 0.850$ km/s — **36 percent**.

*Check.* The triangle inequality guarantees $\Delta v_{\rm comb} \le \Delta v_{\rm sep}$ ✓, and here the two components are comparable in size (1.20 versus 1.18), which is exactly the regime where combining helps most ✓. Note also that doing the plane change *before* circularizing, at 2.20 km/s, would cost $2(2.20)\sin10^\circ = 0.764$ km/s for a separate total of $1.964$ km/s — still worse than combining, but better than turning at the higher speed.

**P3** Setting $\Delta i = 180^\circ$:

$$\Delta v = 2v\sin 90^\circ = 2v.$$

**Why that equals stop-and-restart:** reversing direction means going from $\mathbf v$ to $-\mathbf v$. As a vector difference, $\Delta\mathbf v = -\mathbf v - \mathbf v = -2\mathbf v$, of magnitude $2v$. Physically you could do it in two stages — brake to a standstill ($\Delta v = v$), then accelerate to speed $v$ in the opposite direction ($\Delta v = v$) — for the same total $2v$. The two routes cost identically because the "triangle" here is degenerate: all three velocity vectors are collinear, so the triangle inequality holds with **equality**. Combining buys nothing when there is no angle to exploit. (Note the stop-and-restart version is not physically flyable — you'd fall straight into the primary while at rest — but the delta-v bookkeeping is the same.)

**When does a plane change cost more than escaping?** Escape costs $(\sqrt2-1)v = 0.41421\,v$ ([1.4](01-04-energy-vis-viva-orbit-types.md)). Setting the plane-change cost equal:

$$2v\sin\frac{\Delta i}{2} = (\sqrt2-1)v \;\Longrightarrow\; \sin\frac{\Delta i}{2} = \frac{\sqrt2-1}{2} = 0.20711 \;\Longrightarrow\; \frac{\Delta i}{2} = 11.955^\circ,$$

$$\Delta i = 23.9^\circ.$$

**Any plane change beyond about 24 degrees costs more than leaving the planet.** That's the number behind Example 1's shock: $28.5^\circ$ is already past the threshold ✓.

*Check.* At $\Delta i = 23.9^\circ$ in LEO: $2(7.726)(0.20711) = 3.200$ km/s, exactly the LEO escape increment ✓. Note this threshold is a pure ratio — it's the same $23.9^\circ$ at any altitude, since both costs scale with $v$.

</details>

## Flashback

**From Lesson 2.2 (The orbit in three dimensions):** An orbit has $i = 60^\circ$, $\Omega = 0^\circ$, $\omega = 0^\circ$. Write out the perifocal-to-ECI matrix and apply it to the perifocal position $(0, 10{,}000, 0)$ km.

<details>
<summary>Solution</summary>

With $\Omega = \omega = 0$, the general matrix collapses to a pure rotation about the first axis:

$$[Q]_{x\to X} = \begin{pmatrix}1&0&0\\ 0&\cos i & -\sin i\\ 0 & \sin i & \cos i\end{pmatrix} = \begin{pmatrix}1&0&0\\ 0&0.5 & -0.8660\\ 0&0.8660&0.5\end{pmatrix}.$$

$$[Q]\begin{pmatrix}0\\10{,}000\\0\end{pmatrix} = \begin{pmatrix}0\\ 5000\\ 8660\end{pmatrix}\ \mathrm{km}.$$

*Check.* The magnitude is preserved: $\sqrt{5000^2+8660^2} = \sqrt{2.5\times10^7 + 7.4996\times10^7} = 10{,}000$ km ✓. Geometrically, the perifocal point at $90^\circ$ past perigee (which sits at the ascending node here) has been lifted to a latitude of $\arcsin(8660/10{,}000) = 60^\circ$ — the maximum latitude reachable on a $60^\circ$-inclined orbit ✓, exactly as [2.1](02-01-classical-orbital-elements.md) predicts.

</details>

## Connections

- **Backward:** the cost formula is the law-of-cosines expression from [3.1](03-01-impulsive-maneuvers-delta-v.md) with equal speeds; the combined maneuver is the same formula with unequal ones; the speeds all come from [3.2](03-02-hohmann-transfers.md)'s Hohmann geometry.
- **Forward:** [4.2](04-02-interplanetary-hohmann-hyperbolic-legs.md) faces the same problem at planetary scale — Earth's orbit and Mars's are inclined 1.85 degrees to each other, and even that small angle costs real delta-v at heliocentric speeds. [4.4](04-04-perturbations-j2-drag.md) shows how Earth's oblateness rotates $\Omega$ for free, which mission designers exploit rather than fight.
- **Sideways (launch systems):** this lesson is why launch azimuth and site latitude are first-order mission design parameters. Sea Launch existed specifically to launch from the equator ($i = 0$ available directly), and Kourou at $5.2^\circ$ N commands a premium over Cape Canaveral at $28.5^\circ$ for exactly the 1.5 km/s computed above.
