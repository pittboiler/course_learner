# Trigonometry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Trigonometry trades angles for lengths and lengths for angles. It starts as three
side-ratios in a right triangle, gets cut loose onto the unit circle so *every*
angle has a sine and cosine, unrolls into the waves that model everything that
oscillates, and finally returns to triangles — any triangle — via the laws of
sines and cosines. The tables below are the ones you'd otherwise go hunting for
mid-problem: special angles, quadrant signs, and the identity wall.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\theta$ | the angle you're standing at — the input to every function here | [1.1](lessons/01-01-the-three-ratios.md) |
| opp, adj, hyp | the sides *named relative to $\theta$*: across from it, leaning on it, across from the right angle | [1.1](lessons/01-01-the-three-ratios.md) |
| $\sin\theta,\ \cos\theta,\ \tan\theta$ | the three ratios that angle $\theta$ owns, whatever the triangle's size | [1.1](lessons/01-01-the-three-ratios.md) |
| $\arcsin x \equiv \sin^{-1}x$ | "the angle whose sine is $x$" — an inverse **function**, never $1/\sin x$ | [1.2](lessons/01-02-finding-angles-and-applications.md) |
| $\theta_p$ | the **principal value** — the one angle an inverse is allowed to return | [1.3](lessons/01-03-inverse-trig-and-ranges.md) |
| $\operatorname{atan2}(y,x)$ | two-argument arctangent: keeps both signs, so it returns the true direction in $(-180^\circ, 180^\circ]$ | [1.3](lessons/01-03-inverse-trig-and-ranges.md) |
| $s$, $r$ | arc length cut from a rim, and the circle's radius | [2.1](lessons/02-01-radian-measure.md) |
| $\omega$ | angular speed — radians swept per second | [2.1](lessons/02-01-radian-measure.md) |
| $v = r\omega$ | linear (rim) speed of a point at radius $r$ | [2.1](lessons/02-01-radian-measure.md) |
| $\theta'$ | reference angle — the acute angle from the terminal side to the **horizontal** axis | [2.2](lessons/02-02-the-unit-circle.md) |
| $\csc,\ \sec,\ \cot$ | the reciprocals of $\sin$, $\cos$, $\tan$ — note $\sec$ pairs with $\cos$ | [2.2](lessons/02-02-the-unit-circle.md) |
| ASTC | which functions are positive by quadrant: **A**ll, **S**ine, **T**angent, **C**osine | [2.2](lessons/02-02-the-unit-circle.md) |
| $A$, $B$, $C$, $D$ in $y=A\sin(B(x-C))+D$ | the four sinusoid knobs: height, squeeze, slide, lift | [3.1](lessons/03-01-graphing-sinusoids.md) |
| $\sin^2\theta$ | $(\sin\theta)^2$ — the exponent rides on the **output**, not the angle | [3.2](lessons/03-02-fundamental-identities.md) |
| $a,b,c$ vs. $A,B,C$ | in a general triangle, lowercase side $a$ sits **opposite** uppercase angle $A$ | [4.1](lessons/04-01-law-of-sines.md) |
| $s = \tfrac{a+b+c}{2}$ | semiperimeter (Heron's formula only) — a different $s$ from arc length | [4.2](lessons/04-02-law-of-cosines-and-capstone.md) |
| bearing $040^\circ$ | a compass heading measured **clockwise from north**, always three digits | [4.2](lessons/04-02-law-of-cosines-and-capstone.md) |

## Definitions

### Sine, cosine, and tangent

An angle in a right triangle owns three fixed side-ratios — fixed because scaling
the triangle scales every side equally, so ratios don't move.

$$\sin\theta = \frac{\text{opp}}{\text{hyp}}, \qquad \cos\theta = \frac{\text{adj}}{\text{hyp}}, \qquad \tan\theta = \frac{\text{opp}}{\text{adj}} = \frac{\sin\theta}{\cos\theta}$$

*Introduced:* [1.1](lessons/01-01-the-three-ratios.md)

### Angle of elevation and depression

How far you tilt your line of sight off the **horizontal** — up to something high
(elevation), down to something low (depression). Never measured from vertical.

$$\tan\theta = \frac{\text{rise}}{\text{run}} = \frac{h}{d}$$

Because the two horizontals are parallel, the depression angle down to an object
equals the elevation angle back up from it.

*Introduced:* [1.2](lessons/01-02-finding-angles-and-applications.md)

### Inverse trig functions

The ratio goes in, the angle comes out: $\arcsin(0.5)$ is "the angle whose sine
is $0.5$." A periodic function has no inverse at all — infinitely many angles
share each value — so we **restrict its domain** to one branch and invert that
stub. $\arcsin x$ means *the unique* $\theta$ in the principal range with
$\sin\theta = x$, and likewise for the others.

The restriction is a convention, not a discovery, and it is permanent: the
function can never hand back an angle from outside its range, which is exactly
why $\arcsin$ misses an obtuse triangle angle. Ranges in the table below.

*Introduced:* [1.2](lessons/01-02-finding-angles-and-applications.md); *ranges and
recovery in* [1.3](lessons/01-03-inverse-trig-and-ranges.md)

### Principal value

The one angle an inverse function is allowed to return, written $\theta_p$. It
always carries the correct **reference angle**; what it cannot carry is the
quadrant, which only your diagram knows. Any other angle with the same ratio is
rebuilt from $\theta_p$ by hand.

*Introduced:* [1.3](lessons/01-03-inverse-trig-and-ranges.md)

### Radian

An odometer reading in units of radii: how many radius-lengths of arc you've
traced. It's a length over a length, so it carries **no unit** — which is why
"rad" quietly appears and disappears in $v = r\omega$.

$$\theta = \frac{s}{r}, \qquad 180^\circ = \pi \text{ rad}, \qquad 1 \text{ rad} \approx 57.3^\circ$$

*Introduced:* [2.1](lessons/02-01-radian-measure.md)

### Angular speed

How fast the angle itself grows, in radians per second — separate from how fast
any particular point moves, which also depends on how far out it sits.

$$\omega = \frac{\theta}{t}, \qquad v = r\omega$$

*Introduced:* [2.1](lessons/02-01-radian-measure.md)

### Unit-circle definition

Walk counterclockwise from $(1,0)$ around a circle of radius $1$ by angle
$\theta$. The point you land on **is** $(\cos\theta, \sin\theta)$ — no triangle
required, so every angle works, however large or negative.

$$\cos\theta = x, \quad \sin\theta = y, \quad \tan\theta = \frac{y}{x}, \qquad x^2 + y^2 = 1$$

*Introduced:* [2.2](lessons/02-02-the-unit-circle.md)

### Reference angle

The acute angle between the terminal side and the **$x$-axis**. Its trig values
are the ones you already know; the real angle differs only by a sign the quadrant
supplies.

$$\theta' = 180^\circ - \theta\ (\text{Q2}), \qquad \theta - 180^\circ\ (\text{Q3}), \qquad 360^\circ - \theta\ (\text{Q4})$$

*Introduced:* [2.2](lessons/02-02-the-unit-circle.md)

### Sinusoid

The unit circle's height, unrolled and then reshaped by four knobs — how tall,
how often, where it starts, what it centers on.

$$y = A\sin\big(B(x - C)\big) + D$$

*Introduced:* [3.1](lessons/03-01-graphing-sinusoids.md)

### Identity

An equation that holds for **every** angle, not just a special few — so it's a
license to rewrite, anywhere the expression appears. You prove one by
transforming one side into the other, never by operating on both.

*Introduced:* [3.2](lessons/03-02-fundamental-identities.md)

### Bearing

A direction measured clockwise from north, written as three digits: $000^\circ$
is north, $090^\circ$ east, $180^\circ$ south. Not a standard math angle (which
runs counterclockwise from east).

*Introduced:* [4.2](lessons/04-02-law-of-cosines-and-capstone.md)

## Formulas and rules

### SOHCAHTOA — picking the right ratio

Name the two sides you have (relative to *your* angle), then read off the slot.

| You know / want | Ratio | Solve for a side | Solve for the angle |
|---|---|---|---|
| opp & hyp | $\mathbf{S}\tfrac{\mathbf{O}}{\mathbf{H}}$ | $\text{opp} = \text{hyp}\sin\theta$ | $\theta = \arcsin\!\big(\tfrac{\text{opp}}{\text{hyp}}\big)$ |
| adj & hyp | $\mathbf{C}\tfrac{\mathbf{A}}{\mathbf{H}}$ | $\text{adj} = \text{hyp}\cos\theta$ | $\theta = \arccos\!\big(\tfrac{\text{adj}}{\text{hyp}}\big)$ |
| opp & adj | $\mathbf{T}\tfrac{\mathbf{O}}{\mathbf{A}}$ | $\text{opp} = \text{adj}\tan\theta$ | $\theta = \arctan\!\big(\tfrac{\text{opp}}{\text{adj}}\big)$ |

**Two observations, one height.** Sight an object at elevation $\alpha$, walk a
distance $d$ straight toward it, sight it again at the larger elevation $\beta$:

$$h(\cot\alpha - \cot\beta) = d \quad\Longrightarrow\quad h = \frac{d}{\cot\alpha - \cot\beta}$$

*From* [1.1](lessons/01-01-the-three-ratios.md) *and* [1.2](lessons/01-02-finding-angles-and-applications.md)

### Inverse trig — domains and principal ranges

Each inverse is restricted to one branch, so it returns exactly one angle. The
range is where the trap lives: $\arcsin$ and $\arctan$ never return an obtuse
angle, $\arccos$ does.

| Function | Accepts | Returns (degrees) | Returns (radians) | Branch chosen because |
|---|---|---|---|---|
| $\arcsin x$ | $-1 \le x \le 1$ | $-90^\circ$ to $90^\circ$ | $[-\tfrac{\pi}{2}, \tfrac{\pi}{2}]$ | sine climbs once from $-1$ to $1$ there; shortest such run around $0$ |
| $\arccos x$ | $-1 \le x \le 1$ | $0^\circ$ to $180^\circ$ | $[0, \pi]$ | cosine is even, so $[-90^\circ,90^\circ]$ double-counts; it falls once from $1$ to $-1$ here |
| $\arctan x$ | any real $x$ | $-90^\circ$ to $90^\circ$ (open) | $(-\tfrac{\pi}{2}, \tfrac{\pi}{2})$ | tangent sweeps all of $\mathbb{R}$ once; ends **open** since $\tan(\pm90^\circ)$ is undefined |

*From* [1.3](lessons/01-03-inverse-trig-and-ranges.md)

### Recovering the angle you actually wanted

The principal value $\theta_p$ gives the **reference angle**; the quadrant comes
from your diagram. All the angles sharing a given ratio:

| Equation | Every solution |
|---|---|
| $\sin\theta = x$ | $\theta = \theta_p$ or $180^\circ - \theta_p$, plus any multiple of $360^\circ$ |
| $\cos\theta = x$ | $\theta = \pm\theta_p$, plus any multiple of $360^\circ$ |
| $\tan\theta = x$ | $\theta = \theta_p + 180^\circ k$ |

Rebuild from a reference angle $\theta'$: $\theta'$ in Q1, $180^\circ - \theta'$
in Q2, $180^\circ + \theta'$ in Q3, $360^\circ - \theta'$ in Q4.

**Compositions.** $\sin(\arcsin x) = x$ always (for legal $x$), but
$\arcsin(\sin\theta) = \theta$ **only if $\theta$ is already in the principal
range** — e.g. $\arcsin(\sin 150^\circ) = 30^\circ$. Same for the other two.

**Useful identity:** $\arcsin x + \arccos x = 90^\circ = \tfrac{\pi}{2}$ for
every $x$ in $[-1,1]$.

**Two-argument arctangent.** For the direction of a vector $(x,y)$, dividing
throws away which component was negative, so $\arctan(y/x)$ cannot tell Q2 from
Q4. Use

$$\operatorname{atan2}(y,x) = \arctan\!\Big(\frac{y}{x}\Big) + \begin{cases} 0 & x > 0\\ 180^\circ & x < 0,\ y \ge 0\\ -180^\circ & x < 0,\ y < 0\end{cases}$$

which returns the true direction in $(-180^\circ, 180^\circ]$.

*From* [1.3](lessons/01-03-inverse-trig-and-ranges.md) *and* [4.1](lessons/04-01-law-of-sines.md)

### Radians, arcs, sectors, rotation

Convert **first**; every formula in this group is radian-only.

$$\text{deg}\to\text{rad}:\ \times\tfrac{\pi}{180^\circ} \qquad \text{rad}\to\text{deg}:\ \times\tfrac{180^\circ}{\pi} \qquad 1\text{ rev} = 360^\circ = 2\pi\text{ rad}$$

| Quantity | Formula | In words |
|---|---|---|
| arc length | $s = r\theta$ | angle in radii, scaled back up by $r$ |
| sector area | $A = \tfrac12 r^2\theta$ | the $\tfrac{\theta}{2\pi}$ slice of $\pi r^2$ |
| angular speed | $\omega = \theta/t$ | radians swept per second |
| linear speed | $v = r\omega$ | spin rate times radius |
| rolling without slipping | ground distance $= s = r\theta$ | the arc unrolls onto the road |

Common conversions: $30^\circ = \tfrac{\pi}{6}$, $45^\circ = \tfrac{\pi}{4}$,
$60^\circ = \tfrac{\pi}{3}$, $90^\circ = \tfrac{\pi}{2}$, $180^\circ = \pi$,
$270^\circ = \tfrac{3\pi}{2}$, $360^\circ = 2\pi$.

*From* [2.1](lessons/02-01-radian-measure.md)

### Special angles — the six functions on the first quadrant

The sine row is the $\sqrt{0},\sqrt{1},\sqrt{2},\sqrt{3},\sqrt{4}$ ladder over
$2$; cosine is the same ladder read backwards. Store that, regenerate the rest.

| $\theta$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ |
|---|---|---|---|---|---|
| rad | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ |
| $\sin$ | $0$ | $\tfrac12$ | $\tfrac{\sqrt2}{2}$ | $\tfrac{\sqrt3}{2}$ | $1$ |
| $\cos$ | $1$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac12$ | $0$ |
| $\tan$ | $0$ | $\tfrac{1}{\sqrt3}$ | $1$ | $\sqrt3$ | undef. |
| $\csc$ | undef. | $2$ | $\sqrt2$ | $\tfrac{2}{\sqrt3}$ | $1$ |
| $\sec$ | $1$ | $\tfrac{2}{\sqrt3}$ | $\sqrt2$ | $2$ | undef. |
| $\cot$ | undef. | $\sqrt3$ | $1$ | $\tfrac{1}{\sqrt3}$ | $0$ |

*From* [2.2](lessons/02-02-the-unit-circle.md)

### Special angles — all the way round the unit circle

Same five values, wearing quadrant signs. The pair is $(\cos\theta, \sin\theta)$,
in that order — cosine is the **first** coordinate.

| Degrees | Radians | $\cos\theta$ | $\sin\theta$ | $\tan\theta$ |
|---|---|---|---|---|
| $0^\circ$ | $0$ | $1$ | $0$ | $0$ |
| $30^\circ$ | $\tfrac{\pi}{6}$ | $\tfrac{\sqrt3}{2}$ | $\tfrac12$ | $\tfrac{1}{\sqrt3}$ |
| $45^\circ$ | $\tfrac{\pi}{4}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac{\sqrt2}{2}$ | $1$ |
| $60^\circ$ | $\tfrac{\pi}{3}$ | $\tfrac12$ | $\tfrac{\sqrt3}{2}$ | $\sqrt3$ |
| $90^\circ$ | $\tfrac{\pi}{2}$ | $0$ | $1$ | undef. |
| $120^\circ$ | $\tfrac{2\pi}{3}$ | $-\tfrac12$ | $\tfrac{\sqrt3}{2}$ | $-\sqrt3$ |
| $135^\circ$ | $\tfrac{3\pi}{4}$ | $-\tfrac{\sqrt2}{2}$ | $\tfrac{\sqrt2}{2}$ | $-1$ |
| $150^\circ$ | $\tfrac{5\pi}{6}$ | $-\tfrac{\sqrt3}{2}$ | $\tfrac12$ | $-\tfrac{1}{\sqrt3}$ |
| $180^\circ$ | $\pi$ | $-1$ | $0$ | $0$ |
| $210^\circ$ | $\tfrac{7\pi}{6}$ | $-\tfrac{\sqrt3}{2}$ | $-\tfrac12$ | $\tfrac{1}{\sqrt3}$ |
| $225^\circ$ | $\tfrac{5\pi}{4}$ | $-\tfrac{\sqrt2}{2}$ | $-\tfrac{\sqrt2}{2}$ | $1$ |
| $240^\circ$ | $\tfrac{4\pi}{3}$ | $-\tfrac12$ | $-\tfrac{\sqrt3}{2}$ | $\sqrt3$ |
| $270^\circ$ | $\tfrac{3\pi}{2}$ | $0$ | $-1$ | undef. |
| $300^\circ$ | $\tfrac{5\pi}{3}$ | $\tfrac12$ | $-\tfrac{\sqrt3}{2}$ | $-\sqrt3$ |
| $315^\circ$ | $\tfrac{7\pi}{4}$ | $\tfrac{\sqrt2}{2}$ | $-\tfrac{\sqrt2}{2}$ | $-1$ |
| $330^\circ$ | $\tfrac{11\pi}{6}$ | $\tfrac{\sqrt3}{2}$ | $-\tfrac12$ | $-\tfrac{1}{\sqrt3}$ |

*From* [2.2](lessons/02-02-the-unit-circle.md)

### Quadrant signs and periodicity

Evaluate the reference angle first (always positive), then attach the sign the
quadrant demands. Two separate steps, in that order.

| Quadrant | Angles | $x = \cos$ | $y = \sin$ | Positive there (ASTC) |
|---|---|---|---|---|
| Q1 | $0^\circ$–$90^\circ$ | $+$ | $+$ | **A**ll |
| Q2 | $90^\circ$–$180^\circ$ | $-$ | $+$ | **S**ine (and $\csc$) |
| Q3 | $180^\circ$–$270^\circ$ | $-$ | $-$ | **T**angent (and $\cot$) |
| Q4 | $270^\circ$–$360^\circ$ | $+$ | $-$ | **C**osine (and $\sec$) |

*All Students Take Calculus*, counterclockwise from Q1.

**Periodicity** — reduce any pile of rotations by adding or subtracting whole
turns until you land in $[0^\circ, 360^\circ)$:

$$\sin(\theta + 2\pi) = \sin\theta, \quad \cos(\theta + 2\pi) = \cos\theta, \quad \tan(\theta + \pi) = \tan\theta$$

Bounds: $-1 \le \sin\theta \le 1$ and $-1 \le \cos\theta \le 1$; $\tan$, $\sec$,
$\csc$ are unbounded.

*From* [2.2](lessons/02-02-the-unit-circle.md)

### Reciprocal and quotient identities

Just renames — push everything toward $\sin$ and $\cos$ and most problems
collapse.

$$\csc\theta = \frac{1}{\sin\theta}, \qquad \sec\theta = \frac{1}{\cos\theta}, \qquad \cot\theta = \frac{1}{\tan\theta}$$

$$\tan\theta = \frac{\sin\theta}{\cos\theta}, \qquad \cot\theta = \frac{\cos\theta}{\sin\theta}$$

*From* [3.2](lessons/03-02-fundamental-identities.md)

### Pythagorean identities

The master identity is the circle equation $x^2 + y^2 = 1$ read in trig letters.
Divide it by $\cos^2\theta$ or $\sin^2\theta$ to regenerate the other two — don't
store them separately.

$$\sin^2\theta + \cos^2\theta = 1, \qquad \tan^2\theta + 1 = \sec^2\theta, \qquad 1 + \cot^2\theta = \csc^2\theta$$

Rearranged forms you'll actually use: $\sin^2\theta = 1 - \cos^2\theta$ and
$\cos^2\theta = 1 - \sin^2\theta$.

*From* [2.2](lessons/02-02-the-unit-circle.md) *and* [3.2](lessons/03-02-fundamental-identities.md)

### Even–odd and cofunction identities

Cosine doesn't care about direction; sine and tangent flip sign with it. And
"co-" means *complementary*: each function of $\theta$ is its co-function of what
is left over to $90^\circ$.

$$\sin(-\theta) = -\sin\theta, \qquad \cos(-\theta) = \cos\theta, \qquad \tan(-\theta) = -\tan\theta$$

$$\sin(90^\circ - \theta) = \cos\theta, \qquad \tan(90^\circ - \theta) = \cot\theta, \qquad \sec(90^\circ - \theta) = \csc\theta$$

*From* [1.1](lessons/01-01-the-three-ratios.md) *and* [3.2](lessons/03-02-fundamental-identities.md)

### Sum and difference formulas

Sine is **mixed** (sin-cos plus cos-sin); cosine is **matched with the opposite
sign** (cos-cos minus sin-sin). Read the top signs together, the bottom signs
together.

$$\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$$

$$\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$$

$$\tan(\alpha \pm \beta) = \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}$$

The difference versions are the sum versions with $\beta \to -\beta$, using the
even–odd rules above — memorize the pair, not the quartet.

*From* [3.2](lessons/03-02-fundamental-identities.md)

### Double-angle, power-reduction, half-angle

All three rows are the sum formulas with $\beta = \alpha$, then the master
identity applied to taste. Power reduction is the one calculus keeps asking for:
it trades a square you can't integrate for a plain wave you can.

| Job | Identity |
|---|---|
| double angle | $\sin 2\theta = 2\sin\theta\cos\theta$ |
| double angle | $\cos 2\theta = \cos^2\theta - \sin^2\theta = 1 - 2\sin^2\theta = 2\cos^2\theta - 1$ |
| double angle | $\tan 2\theta = \dfrac{2\tan\theta}{1 - \tan^2\theta}$ |
| power reduction | $\sin^2\theta = \dfrac{1 - \cos 2\theta}{2}$, $\quad\cos^2\theta = \dfrac{1 + \cos 2\theta}{2}$ |
| half angle | $\sin\tfrac{\theta}{2} = \pm\sqrt{\dfrac{1 - \cos\theta}{2}}$, $\quad\cos\tfrac{\theta}{2} = \pm\sqrt{\dfrac{1 + \cos\theta}{2}}$ |
| half angle | $\tan\tfrac{\theta}{2} = \dfrac{1 - \cos\theta}{\sin\theta} = \dfrac{\sin\theta}{1 + \cos\theta}$ (no sign ambiguity) |

The $\pm$ on the half-angle roots is settled by which quadrant $\tfrac{\theta}{2}$
lands in, not by $\theta$.

*From* [3.2](lessons/03-02-fundamental-identities.md)

### Reading and building a sinusoid

Four knobs on $y = A\sin\big(B(x-C)\big) + D$. Going backwards from a graph, read
them in this order: midline, amplitude, period, then a landmark for the shift.

| Knob | Formula | From a graph |
|---|---|---|
| amplitude | $\lvert A\rvert$ | half the peak-to-trough distance |
| period | $\dfrac{2\pi}{B}$, so $B = \dfrac{2\pi}{\text{period}}$ | width of one full cycle |
| phase shift | $C$ (right if positive) | an up-crossing for $\sin$, a peak for $\cos$ |
| midline | $D$ | average of max and min |
| max / min | $D + \lvert A\rvert$ and $D - \lvert A\rvert$ | the two extreme levels |

$\sin$ starts a cycle at its midline going up; $\cos$ starts at its peak — so
$\cos$ is $\sin$ shifted a quarter period. To sketch: draw the midline, mark
$D \pm \lvert A\rvert$, span one period starting at $x = C$, and quarter it
(up-crossing → peak → down-crossing → trough).

**Tangent's graph** is a different animal: no amplitude, period $\pi$ (not
$2\pi$), and vertical asymptotes wherever $\cos x = 0$, i.e. at
$x = \tfrac{\pi}{2} + k\pi$. Between asymptotes it climbs from $-\infty$ to
$+\infty$, crossing zero where $\sin x = 0$.

*From* [3.1](lessons/03-01-graphing-sinusoids.md)

### Law of sines

Each side is proportional to the sine of the angle across from it — divide and
you get the same number at all three corners.

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Usable only when you have one **complete pair** (a side together with its
opposite angle): AAS, ASA, or SSA.

*From* [4.1](lessons/04-01-law-of-sines.md)

### The ambiguous case (SSA)

Given two sides and an angle opposite one of them, the second side can sometimes
swing down to the base in two places. Compare the given $a$ (opposite the known
angle $A$) against the altitude $h = b\sin A$.

| Condition ($A$ acute) | Triangles |
|---|---|
| $a < h = b\sin A$ | **0** — too short to reach |
| $a = h$ | **1** (right triangle) |
| $h < a < b$ | **2** — check the obtuse twin |
| $a \ge b$ | **1** |

Equivalently, in the algebra: if $\sin B = \tfrac{b\sin A}{a} > 1$, stop — zero
triangles. Otherwise compute $B = \arcsin(\cdot)$ **and** test its supplement
$180^\circ - B$; the supplement gives a second triangle whenever
$A + (180^\circ - B) < 180^\circ$.

*From* [4.1](lessons/04-01-law-of-sines.md)

### Law of cosines

Pythagoras with a fine for the angle not being a right angle: the correction
$2ab\cos C$ vanishes at $90^\circ$, shrinks the far side when $C$ is acute, and
*adds* length when $C$ is obtuse (cosine goes negative).

$$c^2 = a^2 + b^2 - 2ab\cos C \qquad\Longleftrightarrow\qquad \cos C = \frac{a^2 + b^2 - c^2}{2ab}$$

Here $C$ is both **opposite** $c$ and **between** $a$ and $b$. Left-to-right
solves SAS (find the third side); right-to-left solves SSS (find an angle), with
no ambiguous case because $\arccos$ reports obtuse angles correctly.

*From* [4.2](lessons/04-02-law-of-cosines-and-capstone.md)

### Which tool for which triangle

| Given | Tool | Note |
|---|---|---|
| right triangle | SOHCAHTOA | the whole of Module 1 |
| AAS / ASA | law of sines | third angle from $A + B + C = 180^\circ$ first; always one triangle |
| SSA | law of sines | ambiguous — run the table above |
| SAS | law of cosines | third side directly |
| SSS | law of cosines | angles one at a time |

After the law of cosines opens a SAS or SSS triangle, finish with the law of
sines — but aim it at a **smaller** angle, since $\arcsin$ can't report obtuse.
Safer still: find the largest angle (opposite the longest side) with the law of
cosines.

*From* [4.1](lessons/04-01-law-of-sines.md) *and* [4.2](lessons/04-02-law-of-cosines-and-capstone.md)

### Triangle area

Half of two sides times the sine of the angle wedged between them — it's
$\tfrac12\,\text{base}\times\text{height}$ with $b\sin C$ playing the height. If
you have all three sides instead, use Heron.

$$\text{Area} = \tfrac12 ab\sin C, \qquad \text{Area} = \sqrt{s(s-a)(s-b)(s-c)}, \quad s = \frac{a+b+c}{2}$$

*From* [4.2](lessons/04-02-law-of-cosines-and-capstone.md)

### Bearings and navigation

Draw the north arrow at every vertex first, then read the triangle off the
picture.

| Step | Move |
|---|---|
| turn angle at a waypoint | (new bearing) $-$ (old bearing) |
| interior angle of the triangle | $180^\circ - (\text{turn angle})$ |
| distance home | law of cosines on the two legs and that interior angle |
| heading out to the far point | (first-leg bearing) $\pm$ (start angle, from the law of sines) |
| return bearing | outbound bearing $+\,180^\circ$ (subtract $360^\circ$ if it overflows) |

*From* [4.2](lessons/04-02-law-of-cosines-and-capstone.md)

## Assumed, not taught here

This is a Foundations course: it leans on the following without proving them.

| Fact | Where it's taught |
|---|---|
| Similar triangles: equal angles force proportional sides — the reason a ratio can depend on the angle alone | [geometry 2.2](../geometry/lessons/02-02-similarity-proportional-reasoning.md) |
| Pythagorean theorem, $\text{leg}^2 + \text{leg}^2 = \text{hyp}^2$ (used to close triangles and to read $\sin^2 + \cos^2 = 1$ off the circle) | [geometry 2.3](../geometry/lessons/02-03-pythagorean-theorem.md) |
| A triangle's angles sum to $180^\circ$; alternate interior angles across parallels are equal (why depression $=$ elevation) | [geometry 1.3](../geometry/lessons/01-03-parallel-lines-angles.md) |
| Supplementary angles and angle measure with a protractor | [geometry 1.1](../geometry/lessons/01-01-points-lines-planes-angles.md) |
| Circumference $C = 2\pi r$ and disk area $A = \pi r^2$ (the parents of $s = r\theta$ and $A = \tfrac12 r^2\theta$) | [geometry 4.1](../geometry/lessons/04-01-perimeter-area-surface-area-volume.md) |
| The coordinate plane, quadrants, and distance from the origin | [geometry 4.2](../geometry/lessons/04-02-coordinate-geometry.md) |
| Inverse functions in general: one-to-one, horizontal-line test, and the reflection across $y=x$. (The trig case — *why* each branch was chosen, and how to recover the angle outside it — **is** taught here, in [1.3](lessons/01-03-inverse-trig-and-ranges.md).) | [precalculus 1.2](../precalculus/lessons/01-02-composition-and-inverses.md) |
| Graph transformations: shift, stretch, reflect — the four sinusoid knobs are these moves applied to $\sin$ | [precalculus 1.3](../precalculus/lessons/01-03-transformations-of-graphs.md) |
| Function notation and reading a graph | [algebra-foundations 2.1](../algebra-foundations/lessons/02-01-the-function-concept.md) |
| Radicals, rationalizing, and simplifying $\tfrac{\sqrt2}{2}$-style expressions | [algebra-foundations 4.3](../algebra-foundations/lessons/04-03-radicals-and-rational-exponents.md) |
| Solving equations and rearranging a formula for any one of its letters | [algebra-foundations 1.2](../algebra-foundations/lessons/01-02-linear-equations-and-inequalities.md) |

## Pitfalls

### Naming sides and reading ratios

- "Opposite" and "adjacent" are **relative to your chosen angle** — stand at the other acute angle and they swap. Only the hypotenuse is fixed. *([1.1](lessons/01-01-the-three-ratios.md))*
- $\sin$ and $\cos$ can never exceed $1$ — they're legs over a longer hypotenuse, or coordinates on a radius-$1$ circle. A value of $1.4$ means you inverted the ratio. Tangent and secant, though, are unbounded. *([1.1](lessons/01-01-the-three-ratios.md), [2.2](lessons/02-02-the-unit-circle.md))*
- Ratios come from **division**, so scaling a triangle changes nothing — don't hunt for the triangle's "real" size. *([1.1](lessons/01-01-the-three-ratios.md))*
- $\sin^{-1}x$ is $\arcsin x$, not $1/\sin x$ (that's $\csc x$); and $\sin^2\theta$ is $(\sin\theta)^2$, not $\sin(\theta^2)$. *([1.2](lessons/01-02-finding-angles-and-applications.md), [3.2](lessons/03-02-fundamental-identities.md))*
- $\arcsin$ and $\arccos$ only accept inputs in $[-1,1]$. A ratio of $1.3$ is a setup error, not a hard problem. *([1.2](lessons/01-02-finding-angles-and-applications.md))*
- $\arcsin(\sin\theta)$ is **not** $\theta$ unless $\theta$ is already in $[-90^\circ,90^\circ]$: $\arcsin(\sin 150^\circ) = 30^\circ$. The other order, $\sin(\arcsin x)$, is always safe. *([1.3](lessons/01-03-inverse-trig-and-ranges.md))*
- A negative output from $\arcsin$ or $\arctan$ is a legitimate angle (below the horizontal) — but inside a **triangle** it means you fed in a wrongly-signed ratio. *([1.3](lessons/01-03-inverse-trig-and-ranges.md))*
- $\arctan(y/x)$ gives a direction *or its opposite*: the division discards which component was negative. Check the quadrant, or use $\operatorname{atan2}(y,x)$. *([1.3](lessons/01-03-inverse-trig-and-ranges.md))*
- Angles of elevation and depression are measured from the **horizontal**, never the vertical — and they're equal in both directions, so any depression problem can be redrawn as an elevation one. *([1.2](lessons/01-02-finding-angles-and-applications.md))*

### Units and the calculator

- Check **degree vs. radian mode** before the first keystroke. A stray radian setting turns $\arctan(0.4167)$ into $0.395$ instead of $22.6^\circ$, and every downstream number is silently wrong. *([1.2](lessons/01-02-finding-angles-and-applications.md))*
- $s = r\theta$, $A = \tfrac12 r^2\theta$, and $v = r\omega$ are **radian-only**. Feeding in $150$ instead of $\tfrac{5\pi}{6}$ inflates the answer by a factor of $57$. *([2.1](lessons/02-01-radian-measure.md))*
- A radian is not a real unit — it's a length over a length, which is why "rad" evaporates when rad/s meets metres to give m/s. *([2.1](lessons/02-01-radian-measure.md))*
- Revolutions, rpm, and Hz are **turns**, not radians: multiply by $2\pi$ before any $s = r\theta$ or $v = r\omega$ step. *([2.1](lessons/02-01-radian-measure.md))*

### Unit circle and signs

- The reference angle is measured to the **horizontal axis**, always. For $120^\circ$ it's $60^\circ$, not $30^\circ$; measuring to the vertical silently swaps sine and cosine. *([2.2](lessons/02-02-the-unit-circle.md))*
- The sign comes from the **quadrant**, not the reference angle. Get the positive base value first, then attach the ASTC sign — two steps, never one. *([2.2](lessons/02-02-the-unit-circle.md))*
- The unit-circle point is $(\cos\theta, \sin\theta)$: cosine is the horizontal coordinate. Reversing the pair is the most common exact-value error. *([2.2](lessons/02-02-the-unit-circle.md))*

### Waves

- Read the phase shift only from the **factored** form: $\sin(2x - \pi) = \sin\big(2(x - \tfrac{\pi}{2})\big)$ shifts by $\tfrac{\pi}{2}$, not $\pi$. *([3.1](lessons/03-01-graphing-sinusoids.md))*
- The period is $\tfrac{2\pi}{B}$, not $B$ — a bigger $B$ packs in more cycles and makes the wave *faster*. *([3.1](lessons/03-01-graphing-sinusoids.md))*
- Max and min are $D \pm \lvert A\rvert$, not $\pm A$. Amplitude is measured from the midline; forgetting $D$ is the classic modeling error. *([3.1](lessons/03-01-graphing-sinusoids.md))*

### Identities

- Trig functions are **not linear**: $\cos(\alpha+\beta) \ne \cos\alpha + \cos\beta$ (try $90^\circ$ and $0^\circ$). The angle-sum formula exists precisely because the naive distribution fails. *([3.2](lessons/03-02-fundamental-identities.md))*
- To prove an identity, transform **one side into the other**. Operating on both sides assumes the thing you're proving and can smuggle in a false step. *([3.2](lessons/03-02-fundamental-identities.md))*
- When stuck, push everything to $\sin$ and $\cos$ and look for the Pythagorean identity — that clears most expressions in two moves. *([3.2](lessons/03-02-fundamental-identities.md))*

### Solving general triangles

- $\arcsin$ only ever returns the **acute** angle. In an SSA problem always test the obtuse supplement; after a law-of-cosines step, aim the law of sines at a small angle instead. *([4.1](lessons/04-01-law-of-sines.md), [4.2](lessons/04-02-law-of-cosines-and-capstone.md))*
- $\sin B > 1$ isn't a hard triangle — it's **no** triangle. The given side is too short to close it. *([4.1](lessons/04-01-law-of-sines.md))*
- The law of sines cannot start SAS or SSS: with no complete side-angle pair, every ratio has two unknowns. Recognize those on sight. *([4.1](lessons/04-01-law-of-sines.md))*
- In $c^2 = a^2 + b^2 - 2ab\cos C$, the angle $C$ must be the one **between** $a$ and $b$. Label the triangle before plugging in. *([4.2](lessons/04-02-law-of-cosines-and-capstone.md))*
- A bearing runs **clockwise from north**, not counterclockwise from east, and the triangle's interior angle is the *supplement* of the turn — draw the north arrow first. *([4.2](lessons/04-02-law-of-cosines-and-capstone.md))*
- Sanity check every solved triangle: the largest angle must face the longest side. *([4.1](lessons/04-01-law-of-sines.md), [4.2](lessons/04-02-law-of-cosines-and-capstone.md))*
