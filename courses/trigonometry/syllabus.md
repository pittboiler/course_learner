# Trigonometry — Syllabus

> Foundations · Tier F · ~8 lessons · Prereqs: none · Roadmap id: `trigonometry`

## Goal

Turn angles into lengths and lengths into angles — first inside right triangles, then anywhere on the plane via the unit circle, then as the sine waves that model everything that oscillates. You finish able to solve any triangle, read and build a sinusoid from its amplitude/period/phase, and wield the core identities without memorizing a wall of them. It picks up the right-triangle ratios from [`geometry`](../geometry/syllabus.md) and hands off to [`precalculus`](../precalculus/syllabus.md) and especially [`calc-refresher`](../calc-refresher/syllabus.md), where these same sinusoids and the small-angle approximation become the bread and butter of calculus. We deliberately skip limits and derivatives of trig functions, and the complex-exponential ($e^{i\theta}$) view of sine and cosine — those live downstream.

## Dangerous Checklist

When you finish, you can:

- [ ] Label any right triangle and pick the correct ratio (SOHCAHTOA) to find a missing side or angle
- [ ] Solve real elevation/depression problems — tower heights, distances, two-observation setups
- [ ] Convert fluently between degrees and radians, and explain why radians are the "natural" unit
- [ ] Compute arc length, sector area, and angular vs. linear speed for a rotating object
- [ ] Locate any angle on the unit circle and read off its sine and cosine, including all six functions of the special angles
- [ ] Use reference angles and quadrant signs to evaluate trig functions of any angle, positive or negative
- [ ] Sketch a sinusoid from its amplitude, period, midline, and phase shift — and go backwards from a graph to its equation
- [ ] Build a sinusoidal model of a real oscillation (tides, temperature, simple harmonic motion) and read predictions off it
- [ ] Simplify and prove identities using the Pythagorean, reciprocal/quotient, angle-sum, and double-angle relations
- [ ] Evaluate and interpret inverse trig functions, respecting their restricted ranges
- [ ] Solve any triangle with the law of sines or cosines, including the ambiguous (SSA) case, and find its area

## Modules

### Module 1: Right-triangle trigonometry

Trig starts as a machine for right triangles: three ratios that trade one angle and one side for all the rest.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The three ratios | Find any missing side of a right triangle from an angle and a side | sine/cosine/tangent as ratios, SOHCAHTOA, opposite/adjacent/hypotenuse |
| 1.2 | Finding angles & applications | Recover an unknown angle and solve real height/distance problems | inverse ratios (arcsin/arccos/arctan), angle of elevation & depression, two-observation setups |

**Boss problem 1:** From point $A$ on level ground the angle of elevation to a balloon is $40°$. You walk $100$ m straight toward the point beneath it to $B$, where the angle of elevation is now $55°$. How high is the balloon? (Set up two right triangles sharing the height; solve $h(\cot 40° - \cot 55°) = 100$ to get $h \approx 203$ m.)

### Module 2: Angles & the unit circle

We cut the triangle loose: angles become rotations, and sine and cosine become coordinates on a circle of radius 1 — now defined for *every* angle.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Radian measure | Convert degrees↔radians and compute arc length, sector area, and angular speed | radian as arc/radius, $180° = \pi$ rad, arc length $s = r\theta$, sector area, angular vs. linear speed |
| 2.2 | The unit circle | Evaluate any of the six trig functions at any angle using reference angles and signs | unit-circle definition, reference angle, quadrant signs (ASTC), special-angle table, periodicity |

**Boss problem 2:** A wheel of radius $0.35$ m rolls without slipping. (a) It turns through $240°$; how far does it travel? (b) Give the exact $(\cos, \sin)$ coordinates of the $240°$ point on the unit circle. (c) If it spins at $5$ rev/s, find its angular speed in rad/s and the wheel's linear (ground) speed. (Answers: $s = 0.35 \cdot \tfrac{4\pi}{3} \approx 1.47$ m; $\left(-\tfrac12, -\tfrac{\sqrt3}{2}\right)$; $\omega = 10\pi \approx 31.4$ rad/s, $v = r\omega \approx 11.0$ m/s.)

### Module 3: Graphs, waves & identities

Let the angle run and sine traces a wave. This module reads and builds those waves, then collects the handful of identities that make trig algebra tractable.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Graphing sinusoids | Sketch and model any sine/cosine wave from amplitude, period, midline, and phase | amplitude, period & $B = 2\pi/\text{period}$, phase shift, midline, sinusoidal modeling, simple harmonic motion, tangent's shape & asymptotes |
| 3.2 | Fundamental identities | Simplify and prove expressions with the core identity toolkit | Pythagorean identity, reciprocal/quotient identities, angle-sum, double-angle |

**Boss problem 3:** A tide is high at $5.2$ m when $t = 0$ h, low at $1.2$ m, with period $12.4$ h. (a) Write $h(t)$ as a cosine model. (b) Find the first time the water reaches $4.2$ m. (c) Show your model equals $3.2 + 2.0\big(1 - 2\sin^2(\pi t/12.4)\big)$ using a double-angle identity. (Answers: $h(t) = 3.2 + 2.0\cos\!\big(\tfrac{2\pi t}{12.4}\big)$; $\cos = 0.5 \Rightarrow t = 12.4/6 \approx 2.07$ h; use $\cos 2\theta = 1 - 2\sin^2\theta$ with $\theta = \pi t/12.4$.)

### Module 4: General triangles & applications

Drop the right angle. Two laws extend everything to arbitrary triangles — the workhorses of surveying and navigation.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Law of sines | Solve AAS/ASA/SSA triangles and handle the ambiguous case | law of sines, ambiguous (SSA) case, when zero/one/two triangles exist |
| 4.2 | Law of cosines & capstone | Solve SAS/SSS triangles, find areas, and close real navigation problems | law of cosines, triangle area ($\tfrac12 ab\sin C$, Heron), bearings & navigation |

**Boss problem 4:** A ship sails $18$ km on bearing $060°$, then $25$ km on bearing $130°$. (a) How far is it from start? (b) On what bearing must it sail to return? (Interior turn angle $= 180° - 70° = 110°$; law of cosines gives $c \approx 35.5$ km; law of sines gives the start angle $\approx 41.5°$, so the outbound bearing is $\approx 101.5°$ and the return bearing $\approx 281.5°$.)

## Sources of truth

- Stewart, Redlin & Watson, *Precalculus* — notation and the standard sequence for right-triangle → unit-circle → identities.
- Larson, *Trigonometry* — reference for the law-of-sines ambiguous case and applied triangle problems.
- Paul's Online Math Notes (Lamar) — conventions for radian measure, sinusoid transformations, and identity drills.
