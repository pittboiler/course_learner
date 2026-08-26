# Astrodynamics · Lesson 1.4: Energy, vis-viva & orbit types

> ⏱ ~15 min · Module 1: The two-body problem & orbits · Builds on: [1.3](01-03-orbit-equation-conic-sections.md), [`mechanics-refresher` 2.2](../../mechanics-refresher/lessons/02-02-potential-energy-conservation.md) · Unlocks: 1.5 (Kepler's laws and the period)

## Why this matters

Lesson [1.3](01-03-orbit-equation-conic-sections.md) gave you the *shape* of an orbit. This lesson gives you the **speed** — and it turns out that at a given distance from the primary, speed is decided entirely by one number, the orbit's semi-major axis. That relation is the **vis-viva equation**, and it is the single most-used formula in the whole subject. Every maneuver you design in Module 3 is computed by evaluating vis-viva twice and subtracting.

It also answers the practical question that decides mission feasibility: given where I am and how fast I'm going, am I coming back? Bound or unbound is a *sign*, and the sign is free to compute.

## The idea

Gravity is a conservative force, so orbital motion has a fixed energy budget: kinetic plus potential, constant forever. Two features of that budget do all the work.

First, the potential energy is **negative** and rises toward zero as you go out. The convention is that "infinitely far away, at rest" is the zero of energy. So if your total energy is negative you're in a hole and can never climb out — you're bound, and you'll come back. If it's positive you have energy to spare even after climbing out forever — you're unbound. And exactly zero is the razor's edge: you escape, but arrive at infinity with nothing left.

Second — and this is the surprise — the total energy depends on the orbit's **size only**. Not its shape, not its orientation, not where you are on it. Two orbits with the same semi-major axis have identical energy even if one is a circle and the other is a hair-thin cigar. That's why "raising your orbit" and "adding energy" mean the same thing, and why the cheapest way to change your orbit's size is to burn where you're already moving fastest.

Put those together and you get vis-viva: at radius $r$ on an orbit of semi-major axis $a$, your speed is fixed. Nothing else about the orbit enters. Latin for "living force," the name is 300 years old and the formula is still the first thing you reach for.

## The formal version

**Specific energy.** The gravitational potential energy per unit mass at radius $r$ is $-\mu/r$ (zero at infinity, negative everywhere else). The **specific mechanical energy** is

$$\varepsilon \equiv \frac{v^2}{2} - \frac{\mu}{r}, \qquad [\varepsilon] = \mathrm{km^2/s^2}.$$

*In words: kinetic energy per kilogram plus potential energy per kilogram.*

**Theorem (conservation).** $\varepsilon$ is constant along any two-body trajectory.

*Proof.* Dot $\mathbf v$ into the equation of motion:

$$\mathbf v\cdot\dot{\mathbf v} = -\frac{\mu}{r^3}\,\mathbf v\cdot\mathbf r \;\Longrightarrow\; \frac{d}{dt}\!\left(\frac{v^2}{2}\right) = -\frac{\mu}{r^3}(r\dot r) = -\frac{\mu \dot r}{r^2} = \frac{d}{dt}\!\left(\frac{\mu}{r}\right),$$

using $\mathbf r\cdot\mathbf v = r\dot r$. Moving both terms to one side gives $\dot\varepsilon = 0$. $\blacksquare$

**Linking $\varepsilon$ to the geometry.** Evaluate $\varepsilon$ at perigee, where $v_r = 0$ so $v_p = h/r_p$, with $r_p = p/(1+e) = a(1-e)$ and $h^2 = \mu a(1-e^2)$:

$$\varepsilon = \frac{h^2}{2r_p^2} - \frac{\mu}{r_p} = \frac{\mu a(1-e^2)}{2a^2(1-e)^2} - \frac{\mu}{a(1-e)} = \frac{\mu(1+e)}{2a(1-e)} - \frac{\mu}{a(1-e)} = \frac{\mu\big[(1+e) - 2\big]}{2a(1-e)},$$

$$\boxed{\;\varepsilon = -\frac{\mu}{2a}.\;}$$

*In words: the energy of an orbit is set by its semi-major axis alone — shape and orientation are invisible to it.* See [specific mechanical energy](../reference.md#specific-mechanical-energy).

**The vis-viva equation.** Equate the two expressions for $\varepsilon$ and solve for $v$:

$$\frac{v^2}{2} - \frac{\mu}{r} = -\frac{\mu}{2a} \quad\Longrightarrow\quad \boxed{\;v^2 = \mu\left(\frac{2}{r} - \frac{1}{a}\right).\;}$$

*In words: your speed depends only on where you are ($r$) and how big your orbit is ($a$).* Two immediate specializations you should recognize on sight:

- **Circular orbit** ($r = a$): $v_{\rm circ} = \sqrt{\mu/r}$.
- **Escape (parabolic, $a\to\infty$)**: $v_{\rm esc} = \sqrt{2\mu/r} = \sqrt2\,v_{\rm circ}$. **Escape speed is always $\sqrt2$ times circular speed at the same radius** — a 41.4 percent speed increase buys you infinity.

**The classification, three ways.** All of these say the same thing:

| $\varepsilon$ | $a$ | $e$ | $v$ vs $v_{\rm esc}$ | Orbit |
|---|---|---|---|---|
| $\varepsilon < 0$ | $a > 0$ | $0\le e<1$ | $v < v_{\rm esc}$ | circle / ellipse — **bound** |
| $\varepsilon = 0$ | $a = \infty$ | $e = 1$ | $v = v_{\rm esc}$ | parabola — marginal escape |
| $\varepsilon > 0$ | $a < 0$ | $e>1$ | $v > v_{\rm esc}$ | hyperbola — **unbound** |

Note the bookkeeping oddity: for a hyperbola $a$ is **negative**, so vis-viva reads $v^2 = \mu(2/r + 1/|a|)$ and never goes to zero. That negative $a$ is not a mistake; it is what makes every formula in this course work uniformly across all four conic types.

**Hyperbolic excess speed.** For $e>1$, the speed left over at infinity is found by putting $r\to\infty$ into vis-viva:

$$v_\infty^2 = -\frac{\mu}{a} = \frac{\mu}{|a|} = 2\varepsilon.$$

*In words: whatever kinetic energy you have after paying the escape toll is $v_\infty^2/2$.* This quantity, often quoted as **$C_3 = v_\infty^2$** (the "characteristic energy," $\mathrm{km^2/s^2}$), is how launch vehicles are advertised for interplanetary missions — Module 4 lives on it.

**The energy–eccentricity link.** Combining $\varepsilon = -\mu/2a$, $h^2 = \mu a(1-e^2)$:

$$e = \sqrt{1 + \frac{2\varepsilon h^2}{\mu^2}}.$$

*In words: eccentricity is decided jointly by energy and angular momentum.* At fixed $\varepsilon$, maximum $h$ gives $e = 0$ (a circle is the highest-angular-momentum orbit of its energy) and $h = 0$ gives $e = 1$ (a straight radial plunge).

## Picture

![Circular speed and escape speed plotted against orbital radius, with the shaded band between them labelled as elliptical orbits and the region above escape speed labelled hyperbolic, beside an energy number line showing negative for ellipse, zero for parabola, positive for hyperbola](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — classify a state vector).** A satellite is tracked at $r = 7000$ km moving at $v = 9.0$ km/s about Earth ($\mu = 398{,}600$). Bound or not, and how big is the orbit?

$$\varepsilon = \frac{v^2}{2} - \frac{\mu}{r} = \frac{81}{2} - \frac{398{,}600}{7000} = 40.5 - 56.94 = -16.44\ \mathrm{km^2/s^2}.$$

Negative, so **bound**. Then

$$a = -\frac{\mu}{2\varepsilon} = \frac{398{,}600}{2(16.44)} = 12{,}121\ \mathrm{km}.$$

Sanity check by speed: $v_{\rm esc} = \sqrt{2\mu/r} = \sqrt{2(398{,}600)/7000} = \sqrt{113.9} = 10.67$ km/s, and $9.0 < 10.67$ ✓ bound, with a comfortable margin. (Circular speed here is $\sqrt{398{,}600/7000} = 7.55$ km/s, so this satellite is moving faster than circular — a fact Boss problem 1 will use to decide it's at perigee, not apogee.)

**Example 2 (why you'd care — how much does it cost to escape from LEO?).** From a 300-km circular orbit, $r = 6678$ km:

$$v_{\rm circ} = \sqrt{\frac{398{,}600}{6678}} = 7.726\ \mathrm{km/s}, \qquad v_{\rm esc} = \sqrt2\,(7.726) = 10.926\ \mathrm{km/s}.$$

$$\Delta v_{\rm escape} = 10.926 - 7.726 = 3.20\ \mathrm{km/s}.$$

Now compare: getting *to* LEO from the ground costs roughly 9.4 km/s of delta-v once you include drag and gravity losses. So **escaping Earth entirely costs only about a third as much again as reaching low orbit** — as the saying goes, low Earth orbit is halfway to anywhere. Contrast with a naive guess based on distance: LEO is 300 km up and infinity is infinitely far, yet the second leg is cheaper than the first. Energy, not distance, is the currency.

## Watch out

- **You might think faster always means higher.** At a *given radius*, yes, more speed means a bigger orbit. But comparing two orbits, the bigger one is **slower**: a GEO satellite at 42,164 km moves at 3.07 km/s while the ISS at 6778 km does 7.67 km/s. Adding energy raises $a$, which lowers the average speed. This is the "slower is higher" paradox and it trips up everyone once.
- **You might forget the sign of $a$ on a hyperbola.** $a<0$ there. If you feed a positive $|a|$ into $v^2 = \mu(2/r - 1/a)$ you'll get a bound-orbit speed and a wrong answer.
- **You might think $\varepsilon$ depends on $e$.** It doesn't. A circle of radius $10{,}000$ km and a pencil-thin ellipse with $r_p = 100$ km, $r_a = 19{,}900$ km have identical energy. They differ in *angular momentum*, not energy.
- **Escape does not mean "gone."** A parabolic trajectory takes infinite time to reach infinity. In practice you escape into a *third* body's gravity well long before then, which is exactly the problem patched conics ([4.1](04-01-sphere-of-influence-patched-conics.md)) solves.

## One-liner

> Total energy is $-\mu/2a$ — size alone — so speed obeys $v^2 = \mu(2/r - 1/a)$, and the sign of the energy tells you in one arithmetic step whether you are ever coming back.

## Problems

**P1 (🟢)** A spacecraft is in a circular orbit at $r = 8000$ km about Earth. Find its speed, its specific energy, and the extra speed it needs to escape.

**P2 (🟡)** A probe leaves Earth's vicinity on a hyperbolic orbit with $v = 11.5$ km/s at $r = 6800$ km. Find $\varepsilon$, $a$, and the hyperbolic excess speed $v_\infty$. Comment on why $v_\infty$ is so much smaller than $v$.

**P3 (🔴)** An orbit has $r_p = 7000$ km and $r_a = 30{,}000$ km about Earth. Find $a$, $e$, $\varepsilon$, $h$, and the speeds at perigee and apogee — two independent ways for the speeds (vis-viva, and angular momentum), and confirm they agree.

<details>
<summary>Solutions</summary>

**P1** Circular, so $a = r = 8000$ km:

$$v = \sqrt{\frac{\mu}{r}} = \sqrt{\frac{398{,}600}{8000}} = \sqrt{49.825} = 7.059\ \mathrm{km/s}.$$

$$\varepsilon = -\frac{\mu}{2a} = -\frac{398{,}600}{16{,}000} = -24.91\ \mathrm{km^2/s^2}.$$

$$v_{\rm esc} = \sqrt2\,(7.059) = 9.983\ \mathrm{km/s} \;\Longrightarrow\; \Delta v = 9.983 - 7.059 = 2.92\ \mathrm{km/s}.$$

*Check.* Via energy directly: $\varepsilon = v^2/2 - \mu/r = 24.91 - 49.83 = -24.91$ ✓. And the escape increment is always $(\sqrt2-1)v_{\rm circ} = 0.4142(7.059) = 2.92$ ✓.

**P2**

$$\varepsilon = \frac{11.5^2}{2} - \frac{398{,}600}{6800} = 66.125 - 58.618 = 7.507\ \mathrm{km^2/s^2} > 0,$$

so the orbit is hyperbolic. Then

$$a = -\frac{\mu}{2\varepsilon} = -\frac{398{,}600}{15.014} = -26{,}549\ \mathrm{km} \quad (\text{negative, as required}),$$

$$v_\infty = \sqrt{2\varepsilon} = \sqrt{15.014} = 3.875\ \mathrm{km/s}.$$

**Why so much smaller than 11.5 km/s:** almost all of the launch speed is spent climbing out of Earth's potential well. Escape speed at 6800 km is $\sqrt{2(398{,}600)/6800} = 10.83$ km/s, so of the 11.5 km/s, 10.83 is "toll" and only the surplus survives. And the surplus does not simply subtract — energies add, not speeds: $v_\infty^2 = v^2 - v_{\rm esc}^2 = 132.25 - 117.24 = 15.01$ ✓, giving 3.88 km/s rather than the naive $11.5-10.83 = 0.67$.

**P3** Size and shape first:

$$a = \frac{r_p+r_a}{2} = \frac{7000+30{,}000}{2} = 18{,}500\ \mathrm{km}, \qquad e = \frac{r_a-r_p}{r_a+r_p} = \frac{23{,}000}{37{,}000} = 0.6216.$$

$$\varepsilon = -\frac{398{,}600}{2(18{,}500)} = -10.773\ \mathrm{km^2/s^2}.$$

$$h = \sqrt{\mu a(1-e^2)} = \sqrt{398{,}600 \times 18{,}500 \times (1-0.3864)} = \sqrt{4.5245\times10^{9}} = 67{,}265\ \mathrm{km^2/s}.$$

*Speeds by vis-viva:*

$$v_p = \sqrt{398{,}600\left(\frac{2}{7000}-\frac{1}{18{,}500}\right)} = \sqrt{398{,}600(2.8571\times10^{-4} - 5.4054\times10^{-5})} = \sqrt{92.30} = 9.607\ \mathrm{km/s},$$

$$v_a = \sqrt{398{,}600\left(\frac{2}{30{,}000}-\frac{1}{18{,}500}\right)} = \sqrt{398{,}600(6.6667\times10^{-5}-5.4054\times10^{-5})} = \sqrt{5.027} = 2.242\ \mathrm{km/s}.$$

*Speeds by angular momentum* (valid because $v_r = 0$ at both apses):

$$v_p = \frac{h}{r_p} = \frac{67{,}265}{7000} = 9.609\ \mathrm{km/s}, \qquad v_a = \frac{h}{r_a} = \frac{67{,}265}{30{,}000} = 2.242\ \mathrm{km/s}.$$

The two methods agree to rounding ✓, and $v_p/v_a = 4.286 = r_a/r_p$ ✓, the reciprocal law from [1.2](01-02-angular-momentum-keplers-second-law.md).

</details>

## Flashback

**From Lesson 1.2 (Angular momentum & Kepler's second law):** A spacecraft is at $r = 15{,}000$ km with speed $6.0$ km/s and flight-path angle $\gamma = 35^\circ$. Find its specific angular momentum.

<details>
<summary>Solution</summary>

Only the transverse component of velocity carries angular momentum:

$$v_\perp = v\cos\gamma = 6.0\cos 35^\circ = 6.0(0.8192) = 4.915\ \mathrm{km/s},$$

$$h = r\,v_\perp = 15{,}000 \times 4.915 = 7.373\times10^{4}\ \mathrm{km^2/s}.$$

*Check.* The radial part $v_r = 6.0\sin 35^\circ = 3.441$ km/s contributes nothing to $h$, and $\sqrt{3.441^2+4.915^2} = 6.00$ ✓. Note that $h$ here is strictly less than the $rv = 90{,}000$ you'd get from the apsis shortcut — a reminder that $h = rv$ only where $\gamma = 0$. ✓

</details>

## Connections

- **Backward:** this is the same energy conservation as [`mechanics-refresher` 2.2](../../mechanics-refresher/lessons/02-02-potential-energy-conservation.md), with the potential $-\mu/r$ replacing $mgh$; and it slots the four conic shapes of [1.3](01-03-orbit-equation-conic-sections.md) onto the sign of one number.
- **Forward:** [1.5](01-05-keplers-laws-orbital-period.md) turns $a$ into the orbital period. All of Module 3 is vis-viva applied twice — [3.2](03-02-hohmann-transfers.md) computes a transfer's cost as the difference between the speed you have and the speed the transfer ellipse needs, at the same radius.
- **Sideways (physics):** the plot of $\varepsilon$ against $r$ at fixed $h$ is the **effective potential** picture of [`mechanics-refresher` 5.2](../../mechanics-refresher/lessons/05-02-orbits-effective-potential.md): $\varepsilon = \tfrac12\dot r^2 + \big(h^2/2r^2 - \mu/r\big)$, where the bracketed term is a one-dimensional potential whose well bottom is the circular orbit and whose turning points are perigee and apogee.
