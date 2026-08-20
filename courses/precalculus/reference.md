# Precalculus · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Precalculus is the toolkit calculus walks in already owning: functions treated as
objects you can shift, chain, and reverse; the five workhorse families
(polynomial, rational, exponential, logarithmic, trigonometric) and what each one
does at its edges; sums written with $\Sigma$ and totalled in closed form; and
enough analytic geometry to put curves and arrows on the plane. It ends at the
one question calculus exists to answer — *how fast is this changing right now?*
This card is the lookup surface for all of it: the unit circle, the log laws, the
identity tables, the conic standard forms. When `calc-refresher` says "you know
this from precalculus," this is the page it means.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $f(x)$ | the output of machine $f$ fed input $x$ — *evaluate*, never "$f$ times $x$" | [1.1](lessons/01-01-functions-as-objects.md) |
| $[a,b]$ vs. $(a,b)$ | interval notation: a square bracket includes the endpoint, a round one excludes it | [1.1](lessons/01-01-functions-as-objects.md) |
| $f\circ g$ | composition — run $g$ first, feed its output to $f$ | [1.2](lessons/01-02-composition-and-inverses.md) |
| $f^{-1}$ | the **inverse function** (the undo machine), *not* the reciprocal $1/f$ | [1.2](lessons/01-02-composition-and-inverses.md) |
| $a,\ b,\ h,\ k$ | the four knobs in $y = a\,f\big(b(x-h)\big)+k$: tall, narrow, right, up | [1.3](lessons/01-03-transformations-of-graphs.md) |
| $a_n$ (polynomial) | leading coefficient — the weight on the highest power $x^n$ | [2.1](lessons/02-01-polynomial-functions.md) |
| $m$ | multiplicity — how many times the factor $(x-r)$ repeats | [2.1](lessons/02-01-polynomial-functions.md) |
| $\deg P$ | degree of a polynomial — its highest power | [2.2](lessons/02-02-rational-functions.md) |
| $P(x)/Q(x)$ | rational function: one polynomial over another | [2.2](lessons/02-02-rational-functions.md) |
| $e$ | $\approx 2.71828$ — the base of *continuous* growth | [2.3](lessons/02-03-exponential-and-logarithmic-functions.md) |
| $\log_b x$, $\log x$, $\ln x$ | log base $b$; base $10$ (common); base $e$ (natural) | [2.3](lessons/02-03-exponential-and-logarithmic-functions.md) |
| $i$ | the imaginary unit, defined by $i^2 = -1$ (not the interest rate $i$ in the compounding row below) | [2.4](lessons/02-04-complex-numbers.md) |
| $z = a+bi$ | a complex number: real part $\operatorname{Re} z = a$, imaginary part $\operatorname{Im} z = b$ (a *real* number, not $bi$) | [2.4](lessons/02-04-complex-numbers.md) |
| $\bar z$ | the conjugate $a-bi$ — same point reflected across the real axis | [2.4](lessons/02-04-complex-numbers.md) |
| $\lvert z\rvert$ | modulus: distance from the origin, $\sqrt{a^2+b^2}$ | [2.4](lessons/02-04-complex-numbers.md) |
| $\arg z$ | argument: the angle $z$ points, counterclockwise from the positive real axis | [2.4](lessons/02-04-complex-numbers.md) |
| $\theta$ | an angle — **always in radians** in this course and everything downstream | [3.1](lessons/03-01-trig-functions-for-calculus.md) |
| $\sec,\ \csc,\ \cot$ | reciprocals of $\cos,\ \sin,\ \tan$ — note the crossed pairing: $\sec$ goes with $\cos$ | [3.1](lessons/03-01-trig-functions-for-calculus.md) |
| $A,\ B,\ C,\ D$ | sinusoid knobs in $y = A\sin\big(B(x-C)\big)+D$: amplitude, period-setter, phase shift, midline | [3.1](lessons/03-01-trig-functions-for-calculus.md) |
| $a_n$ (sequence) | the $n$-th term of a sequence — same glyph as a polynomial coefficient, different job | [3.2](lessons/03-02-sequences-and-sigma-notation.md) |
| $d$, $r$ | common **difference** (arithmetic) and common **ratio** (geometric) | [3.2](lessons/03-02-sequences-and-sigma-notation.md) |
| $\sum_{k=1}^{n} a_k$ | add $a_k$ as $k$ runs from $1$ to $n$; $k$ is a dummy label | [3.2](lessons/03-02-sequences-and-sigma-notation.md) |
| $S_n$ | the $n$-th partial sum — the running total of the first $n$ terms | [3.3](lessons/03-03-series-and-infinite-geometric-sum.md) |
| $a,\ b,\ c$ (conics) | semi-major axis, semi-minor axis, and center-to-focus distance | [4.1](lessons/04-01-conic-sections.md) |
| $\langle x, y\rangle$ | a vector in component form — an arrow from the origin to $(x,y)$ | [4.2](lessons/04-02-vectors-parametric-and-polar.md) |
| $\lvert\mathbf{A}\rvert$ | magnitude (length) of the vector $\mathbf{A}$ | [4.2](lessons/04-02-vectors-parametric-and-polar.md) |
| $(r,\theta)$ | polar coordinates — turn to angle $\theta$, then walk out distance $r$ | [4.2](lessons/04-02-vectors-parametric-and-polar.md) |
| $x(t),\ y(t)$ | parametric equations — where the moving point is at time $t$ | [4.2](lessons/04-02-vectors-parametric-and-polar.md) |
| $h$ (calculus sense) | the width of the secant interval $[a,\,a+h]$ — the nudge that shrinks to zero | [4.3](lessons/04-03-limits-and-instantaneous-rate.md) |
| $\lim_{x\to a} f(x)$ | the number $f$ **heads toward** near $a$ — not "plug in $a$" | [4.3](lessons/04-03-limits-and-instantaneous-rate.md) |
| $x\to a^-$, $x\to a^+$ | approaching $a$ from the left, from the right | [4.3](lessons/04-03-limits-and-instantaneous-rate.md) |

## Definitions

### Function

A reliable machine: drop in one input, exactly one output comes out, every time.

$$f\colon D \to \mathbb{R}, \qquad \text{each } x \in D \text{ gets exactly one } f(x)$$

*Introduced:* [1.1](lessons/01-01-functions-as-objects.md)

### Domain and range

**Domain** = every input the machine accepts without jamming. **Range** = every
output it can actually produce. Domain lives on the $x$-axis, range on the
$y$-axis.

*Introduced:* [1.1](lessons/01-01-functions-as-objects.md)

### Vertical-line test

If one input could line up with two heights, it isn't a function.

$$\text{a curve is a function of } x \iff \text{every vertical line meets it at most once}$$

*Introduced:* [1.1](lessons/01-01-functions-as-objects.md)

### Piecewise function

One machine wearing several rules, each owning a different slice of the domain.
Still a function as long as the slices don't overlap.

$$f(x) = \begin{cases} x^2 & x < 1 \\ 2x - 1 & x \ge 1\end{cases}$$

*Introduced:* [1.1](lessons/01-01-functions-as-objects.md)

### Composition

Bolt two machines in series and **do the inside first**.

$$(f\circ g)(x) = f\big(g(x)\big)$$

Its domain is every $x$ that (a) $g$ accepts **and** (b) produces a $g(x)$ that
$f$ accepts — both gates must pass.

*Introduced:* [1.2](lessons/01-02-composition-and-inverses.md)

### One-to-one

No output is ever hit twice — which is exactly the condition that makes "undo"
possible.

$$x_1 \neq x_2 \implies f(x_1) \neq f(x_2)$$

Graphically: every **horizontal** line meets the graph at most once.

*Introduced:* [1.2](lessons/01-02-composition-and-inverses.md)

### Inverse function

The undo button: whatever $f$ did, $f^{-1}$ reverses. It exists exactly when $f$
is one-to-one.

$$f^{-1}\big(f(x)\big) = x, \qquad f\big(f^{-1}(y)\big) = y$$
$$\text{domain}(f^{-1}) = \text{range}(f), \qquad \text{range}(f^{-1}) = \text{domain}(f)$$

Its graph is the mirror image of $f$'s across the line $y = x$ — every point
$(a,b)$ becomes $(b,a)$.

*Introduced:* [1.2](lessons/01-02-composition-and-inverses.md)

### Parent function

The master shape of a family, before anything slides or stretches it. Six worth
knowing cold: $y = x$, $x^2$, $x^3$, $\sqrt{x}$, $\lvert x\rvert$, $1/x$.

*Introduced:* [1.3](lessons/01-03-transformations-of-graphs.md)

### Even and odd

Two symmetries so common they get names: **even** = mirror across the $y$-axis;
**odd** = $180^\circ$ rotation about the origin.

$$\text{even:}\ f(-x) = f(x) \qquad \text{odd:}\ f(-x) = -f(x)$$

Even: $x^2$, $\lvert x\rvert$, $\cos$. Odd: $x$, $x^3$, $1/x$, $\sin$.

*Introduced:* [1.3](lessons/01-03-transformations-of-graphs.md)

### Polynomial function

A finite sum of whole-number powers of $x$ with constant weights — the friendliest
curves there are: no breaks, no asymptotes, defined everywhere.

$$p(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0, \qquad a_n \neq 0$$

*Introduced:* [2.1](lessons/02-01-polynomial-functions.md)

### Multiplicity

How many copies of a factor $(x-r)$ the polynomial carries — and therefore whether
the curve slices through the axis at $r$ or merely bounces off it.

$$p(x) = a_n (x-r_1)^{m_1}\cdots(x-r_k)^{m_k}, \qquad \sum m_i = n$$

*Introduced:* [2.1](lessons/02-01-polynomial-functions.md)

### End behavior

What the curve does far from the origin, where the biggest power dwarfs
everything else.

$$p(x) \sim a_n x^n \quad \text{as } x\to\pm\infty$$

*Introduced:* [2.1](lessons/02-01-polynomial-functions.md)

### Rational function

One polynomial divided by another. Its whole personality lives where the formula
breaks.

$$f(x) = \frac{P(x)}{Q(x)}, \qquad \text{domain} = \{x : Q(x)\neq 0\}$$

*Introduced:* [2.2](lessons/02-02-rational-functions.md)

### Vertical asymptote vs. hole

Factor and cancel **first**. A leftover factor downstairs is a wall the curve
races up; a fully cancelled factor is a single missing point.

$$\frac{(x-2)(x+2)}{(x-2)^2} \Rightarrow \text{wall at } x=2, \qquad \frac{(x-2)(x+2)}{x-2} \Rightarrow \text{hole at } x=2$$

*Introduced:* [2.2](lessons/02-02-rational-functions.md)

### Horizontal and slant asymptote

The flight path far from the origin, decided by which polynomial grows faster. A
horizontal asymptote is a flat landing strip; a slant asymptote is a tilted one.

*Introduced:* [2.2](lessons/02-02-rational-functions.md)

### Exponential function

The variable sits in the *exponent*: step the input by one and the output gets
**multiplied** by $b$ — repeated multiplication, not repeated addition.

$$f(x) = b^x, \qquad b > 0,\ b\neq 1$$

Growth if $b > 1$, decay if $0 < b < 1$. Domain all reals, range $(0,\infty)$,
horizontal asymptote $y = 0$ that it never reaches.

*Introduced:* [2.3](lessons/02-03-exponential-and-logarithmic-functions.md)

### Logarithm

The exponent in hiding: $\log_b c$ answers "$b$ raised to what gives $c$?" — the
inverse function of $b^x$.

$$y = b^x \iff x = \log_b y$$

Domain $(0,\infty)$ — you can never take the log of zero or a negative — range all
reals, vertical asymptote at $x = 0$.

*Introduced:* [2.3](lessons/02-03-exponential-and-logarithmic-functions.md)

### Complex number

A number of the form $z = a+bi$ with $a,b$ real and $i^2=-1$. Two independent
knobs, so complex numbers fill a **plane** (real axis horizontal, imaginary axis
vertical) rather than a line. Every real number is complex with $b=0$.

$$(a+bi)\pm(c+di) = (a\pm c)+(b\pm d)i, \qquad (a+bi)(c+di) = (ac-bd)+(ad+bc)i$$

*Introduced:* [2.4](lessons/02-04-complex-numbers.md)

### Complex conjugate

$\bar z = a-bi$. Conjugating reflects across the real axis: it preserves the
modulus and flips the sign of the argument. Its job is **laundering** — the
product with $z$ is real:

$$z\bar z = a^2+b^2 = \lvert z\rvert^2$$

*Introduced:* [2.4](lessons/02-04-complex-numbers.md)

### Modulus and argument

The polar readout of a point on the complex plane: how far out, and which way.

$$\lvert z\rvert = \sqrt{a^2+b^2}, \qquad \tan(\arg z) = \frac{b}{a}$$

Same two numbers as a vector's magnitude and direction angle in
[4.2](lessons/04-02-vectors-parametric-and-polar.md), and the same quadrant
caveat: add $180^\circ$ to $\tan^{-1}(b/a)$ when $a<0$.

*Introduced:* [2.4](lessons/02-04-complex-numbers.md)

### Polar form and Euler's formula

$$z = r(\cos\theta + i\sin\theta) = re^{i\theta}, \qquad r=\lvert z\rvert,\ \theta=\arg z$$

$$e^{i\theta} = \cos\theta + i\sin\theta$$

In words: $e^{i\theta}$ **is** the unit-circle point at angle $\theta$ from
[3.1](lessons/03-01-trig-functions-for-calculus.md), so $\lvert e^{i\theta}\rvert = 1$
always. Proved from power series in
[calc-refresher 3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md);
stated and used here. Special value: $e^{i\pi} = -1$.

*Introduced:* [2.4](lessons/02-04-complex-numbers.md)

### Conjugate root theorem

A polynomial with **real** coefficients has its non-real roots in conjugate pairs:
if $a+bi$ is a root, so is $a-bi$. Together with the Fundamental Theorem of
Algebra (a degree-$n$ polynomial has exactly $n$ complex roots, counted with
multiplicity), this upgrades [2.1](lessons/02-01-polynomial-functions.md)'s "at
most $n$ real zeros" ceiling into an exact count.

*Introduced:* [2.4](lessons/02-04-complex-numbers.md)

### Radian

The honest angle unit: how far you walked along the rim, measured in
radius-lengths. It is the only unit that makes calculus clean.

$$\pi\ \text{rad} = 180^\circ, \qquad s = r\theta \ \text{(arc length)}$$

*Introduced:* [3.1](lessons/03-01-trig-functions-for-calculus.md)

### Sine and cosine

Put a point on the unit circle at angle $\theta$. Its **height** is $\sin\theta$;
its **horizontal position** is $\cos\theta$. Everything else is bookkeeping.

$$(\cos\theta,\ \sin\theta) \ \text{is the point on the unit circle at angle } \theta$$

*Introduced:* [3.1](lessons/03-01-trig-functions-for-calculus.md)

### Amplitude, period, phase shift

The three knobs on a wave: how tall, how often it repeats, and how far it has been
slid sideways.

$$y = A\sin\big(B(x-C)\big)+D: \quad \text{amplitude } \lvert A\rvert, \ \text{period } \tfrac{2\pi}{B}, \ \text{phase shift } C, \ \text{midline } y=D$$

*Introduced:* [3.1](lessons/03-01-trig-functions-for-calculus.md)

### Sequence

A function whose inputs are the counting numbers instead of a continuous line —
a list, with $a_n$ the item in slot $n$.

$$a\colon\{1,2,3,\dots\}\to\mathbb{R}, \qquad a_n := a(n)$$

**Explicit** gives $a_n$ straight from $n$ (jump to term 100); **recursive** gives
a starting term plus how to take one step.

*Introduced:* [3.2](lessons/03-02-sequences-and-sigma-notation.md)

### Arithmetic and geometric sequence

Arithmetic **adds** a fixed step (a staircase); geometric **multiplies** by a
fixed factor (a chain reaction).

$$\text{arithmetic: } a_n = a_1 + (n-1)d \qquad \text{geometric: } a_n = a_1 r^{\,n-1}$$

*Introduced:* [3.2](lessons/03-02-sequences-and-sigma-notation.md)

### Sigma notation

Shorthand for "add these up": let the index run from the bottom value to the top,
plug each into the rule, total the results.

$$\sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n$$

*Introduced:* [3.2](lessons/03-02-sequences-and-sigma-notation.md)

### Series and partial sum

A **sequence** lists terms; a **series** adds them. The $n$-th **partial sum**
$S_n$ is the running total after $n$ terms, and an infinite series is *defined* as
the limit of those partial sums.

$$\sum_{k=0}^{\infty} a_k := \lim_{n\to\infty} S_n$$

*Introduced:* [3.3](lessons/03-03-series-and-infinite-geometric-sum.md)

### Convergence (of a geometric series)

If the running totals home in on a ceiling, the series **converges** to it;
otherwise it **diverges** and has no sum. For a geometric series the make-or-break
line is exactly $\lvert r\rvert < 1$.

*Introduced:* [3.3](lessons/03-03-series-and-infinite-geometric-sum.md)

### Conic section

The four curves a plane can slice out of a double cone — circle, ellipse,
parabola, hyperbola — sorted by how far you tilt the plane.

*Introduced:* [4.1](lessons/04-01-conic-sections.md)

### Focus (and the string definitions)

Special points that define each conic by a distance rule — one word each: match,
sum, difference.

- **Parabola:** equidistant from the focus and a fixed line (the *directrix*).
- **Ellipse:** the **sum** of the distances to two foci is constant.
- **Hyperbola:** the **difference** of the distances to two foci is constant.

*Introduced:* [4.1](lessons/04-01-conic-sections.md)

### Vector

An arrow: a magnitude (how much) and a direction (which way), written as the
components of the right triangle it spans.

$$\mathbf{A} = \langle x, y\rangle, \qquad \lvert\mathbf{A}\rvert = \sqrt{x^2+y^2}, \qquad \theta = \tan^{-1}\!\left(\frac{y}{x}\right) \ \text{(quadrant-adjusted)}$$

*Introduced:* [4.2](lessons/04-02-vectors-parametric-and-polar.md)

### Parametric equations

Instead of "$y$ in terms of $x$," say where a moving point is at each instant.
Time is the hidden puppeteer; the curve is what the puppet traces.

$$x = x(t), \quad y = y(t), \qquad t \in [t_0, t_1]$$

**Eliminating the parameter** means algebraically erasing $t$ to recover the bare
Cartesian shape — trading the clock for the curve.

*Introduced:* [4.2](lessons/04-02-vectors-parametric-and-polar.md)

### Polar coordinates

Radar-operator directions: turn to angle $\theta$, then walk out distance $r$.

$$x = r\cos\theta, \quad y = r\sin\theta, \qquad r = \sqrt{x^2+y^2}, \quad \tan\theta = \frac{y}{x}$$

*Introduced:* [4.2](lessons/04-02-vectors-parametric-and-polar.md)

### Average rate of change

Change in output over change in input — the slope of the **secant line** through
two points on the curve.

$$\frac{f(a+h) - f(a)}{h}$$

*Introduced:* [4.3](lessons/04-03-limits-and-instantaneous-rate.md)

### Limit (informal)

The number $f(x)$ heads toward as $x$ closes in on $a$ — **whether or not $f(a)$
itself exists**, and even if $f(a)$ is some other number entirely.

$$\lim_{x\to a} f(x) = L$$

*Introduced:* [4.3](lessons/04-03-limits-and-instantaneous-rate.md)

### One-sided limit

Come in from the left, come in from the right. The two-sided limit exists only if
the two agree.

$$\lim_{x\to a} f(x) = L \iff \lim_{x\to a^-} f(x) = \lim_{x\to a^+} f(x) = L$$

*Introduced:* [4.3](lessons/04-03-limits-and-instantaneous-rate.md)

### Instantaneous rate of change

The value the average rates sneak up on as the interval shrinks to nothing — the
slope of the **tangent** line. In `calc-refresher` this limit gets a name: the
derivative.

$$\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}$$

*Introduced:* [4.3](lessons/04-03-limits-and-instantaneous-rate.md)

## Formulas and rules

### Finding a domain

Hunt for illegal inputs; silence is not permission.

| Structure | Restriction |
|---|---|
| $\dfrac{\cdots}{g(x)}$ | $g(x)\neq 0$ |
| $\sqrt[\text{even}]{g(x)}$ | $g(x)\ge 0$ |
| $\log_b g(x)$ | $g(x) > 0$ |
| $\tan x$, $\sec x$ | $x \neq \tfrac{\pi}{2} + n\pi$ |
| applied problem | whatever the context forbids (a width cannot be negative) |

Composition: $x$ must clear **both** gates — legal for $g$, and $g(x)$ legal for $f$.

*From* [1.1](lessons/01-01-functions-as-objects.md), [1.2](lessons/01-02-composition-and-inverses.md), [2.3](lessons/02-03-exponential-and-logarithmic-functions.md)

### The six parent functions

| Parent | Domain | Range | Symmetry |
|---|---|---|---|
| $y = x$ | all reals | all reals | odd |
| $y = x^2$ | all reals | $[0,\infty)$ | even |
| $y = x^3$ | all reals | all reals | odd |
| $y = \sqrt{x}$ | $[0,\infty)$ | $[0,\infty)$ | neither |
| $y = \lvert x\rvert$ | all reals | $[0,\infty)$ | even |
| $y = 1/x$ | $x\neq 0$ | $y\neq 0$ | odd |

*From* [1.3](lessons/01-03-transformations-of-graphs.md)

### Graph transformations

Master template: $y = a\,f\big(b(x-h)\big)+k$. **Outside edits act as they look;
inside edits act in reverse.**

| Edit | Effect |
|---|---|
| $f(x)+k$ | up $k$ (down if $k<0$) |
| $f(x-h)$ | **right** $h$ (left if $h<0$) |
| $a\,f(x)$, $a>1$ | stretch tall by $a$; $0<a<1$ compresses flat |
| $f(bx)$, $b>1$ | **compress** horizontally to width $1/b$; $0<b<1$ stretches wide |
| $-f(x)$ | reflect across the $x$-axis |
| $f(-x)$ | reflect across the $y$-axis |

Order: factor out $b$ first, and apply the outside stretch **before** the vertical
shift — $2f(x)+1 \neq 2\big(f(x)+1\big)$.

*From* [1.3](lessons/01-03-transformations-of-graphs.md)

### Finding an inverse

1. Write $y = f(x)$. 2. Swap $x$ and $y$. 3. Solve for $y$. 4. Restrict the domain
if needed so the original was one-to-one. 5. Check by composing both ways.

*From* [1.2](lessons/01-02-composition-and-inverses.md)

### Reading a polynomial's graph

**Ends** (leading term wins):

| degree $n$ | leading coeff $a_n$ | as $x\to-\infty$ | as $x\to+\infty$ |
|---|---|---|---|
| even | $+$ | $+\infty$ | $+\infty$ |
| even | $-$ | $-\infty$ | $-\infty$ |
| odd | $+$ | $-\infty$ | $+\infty$ |
| odd | $-$ | $+\infty$ | $-\infty$ |

Even degree → both ends agree; odd degree → they disagree; a negative leading
coefficient flips the whole picture.

**Middle** (factors win): $r$ is a zero $\iff (x-r)$ is a factor. At a zero of
multiplicity $m$ — $m$ **odd** → crosses; $m$ **even** → touches and turns back.
Degree $n$ allows **at most** $n$ real zeros and **at most** $n-1$ turning points.

*From* [2.1](lessons/02-01-polynomial-functions.md)

### Rational functions: asymptotes at a glance

Let $n = \deg P$, $m = \deg Q$, with leading coefficients $a$ (top) and $b$
(bottom), **after cancelling**.

| Case | As $x\to\pm\infty$ | Asymptote |
|---|---|---|
| $n < m$ | $f\to 0$ | horizontal $y = 0$ |
| $n = m$ | $f\to a/b$ | horizontal $y = a/b$ |
| $n = m+1$ | grows like a line | **slant** $y = $ the quotient |
| $n > m+1$ | grows like a curve | none |

Intercepts: $y$-intercept is $f(0)$; $x$-intercepts are the numerator zeros that
**survive** cancelling.

*From* [2.2](lessons/02-02-rational-functions.md)

### Polynomial long division (how you get a slant asymptote)

Divide top by bottom exactly as with numbers — divide the leading terms, multiply
back, subtract, bring down, repeat until the remainder's degree drops below the
divisor's:

$$\frac{P(x)}{Q(x)} = (\text{quotient}) + \frac{\text{remainder}}{Q(x)}$$

The remainder term dies as $x\to\pm\infty$, so the quotient **is** the asymptote.
Example: $\dfrac{x^2+1}{x-1} = x+1+\dfrac{2}{x-1}$, so the slant asymptote is
$y = x+1$.

Insert a **zero for every missing degree** before you start, and remember step
three is a *subtraction* (the minus hits every term). For a divisor of the form
$x - c$, synthetic division does the same job on the coefficients alone. The full
method — plus the remainder and factor theorems — is taught in
[algebra-foundations 3.3](../algebra-foundations/lessons/03-03-polynomial-division.md).

*From* [2.2](lessons/02-02-rational-functions.md)

### Exponent and logarithm algebra

Exponent laws (the facts the log laws are read backwards from):

$$b^{m}b^{n} = b^{m+n}, \qquad \frac{b^m}{b^n} = b^{m-n}, \qquad (b^m)^n = b^{mn}, \qquad b^0 = 1, \qquad b^{-n} = \frac{1}{b^n}, \qquad b^{1/n} = \sqrt[n]{b}$$

Cancellation (log and exponential are inverses):

$$b^{\log_b x} = x, \qquad \log_b(b^x) = x, \qquad \log_b 1 = 0, \qquad \log_b b = 1$$

Log laws — logs turn multiplication into addition and powers into multipliers:

$$\log_b(xy) = \log_b x + \log_b y, \qquad \log_b\!\left(\frac{x}{y}\right) = \log_b x - \log_b y, \qquad \log_b(x^p) = p\log_b x$$

Change of base, for anything your calculator lacks:

$$\log_b x = \frac{\ln x}{\ln b} = \frac{\log x}{\log b}$$

**To solve $b^x = c$:** take a log of both sides and use the power law to drop the
exponent down. **To solve a log equation:** combine into one log, convert to
exponential form, then *check every root against the domain*.

*From* [2.3](lessons/02-03-exponential-and-logarithmic-functions.md)

### Growth, decay, half-life

| Model | Formula | Solve for time |
|---|---|---|
| continuous growth/decay | $A(t) = A_0 e^{kt}$ | $t = \dfrac{1}{k}\ln\dfrac{A}{A_0}$ |
| doubling time | $A = 2A_0$ | $t = \dfrac{\ln 2}{k}$ |
| half-life | $A = \tfrac12 A_0$ | $t = \dfrac{\ln 2}{\lvert k\rvert}$ |
| discrete compounding | $A(t) = A_0\left(1+\tfrac{i}{n}\right)^{nt}$ | take logs of both sides |
| log scale | $\text{pH} = -\log[\mathrm{H}^+]$, $\text{dB} = 10\log(\text{power ratio})$ | one unit = a factor of $10$ |

Doubling and halving times never depend on the starting amount — the start cancels.

*From* [2.3](lessons/02-03-exponential-and-logarithmic-functions.md)

### Complex arithmetic at a glance

| Job | Move | Result |
|---|---|---|
| multiply | FOIL, then replace $i^2$ by $-1$ | $(a+bi)(c+di) = (ac-bd)+(ad+bc)i$ |
| divide | multiply top and bottom by the conjugate of the bottom | $\dfrac{a+bi}{c+di} = \dfrac{(ac+bd)+(bc-ad)i}{c^2+d^2}$ |
| size | Pythagoras | $\lvert z\rvert = \sqrt{a^2+b^2}$, and $\lvert z\rvert^2 = z\bar z$ |
| multiply in polar form | **moduli multiply, arguments add** | $r_1e^{i\alpha}\cdot r_2e^{i\beta} = r_1r_2e^{i(\alpha+\beta)}$ |
| raise to a power | de Moivre — the same rule $n$ times | $\big(re^{i\theta}\big)^n = r^n e^{in\theta}$ |
| powers of $i$ | quarter turns, period 4 | $i^1=i,\ i^2=-1,\ i^3=-i,\ i^4=1$ |

**Quadratic with $\Delta = b^2-4ac < 0$** — the roots are the conjugate pair

$$x = -\frac{b}{2a} \pm i\,\frac{\sqrt{4ac-b^2}}{2a}.$$

Downstream reading of that pair (this is why it matters): the **real part** is a
growth/decay rate and the **imaginary part** is a frequency, since
$e^{(\alpha+i\beta)t} = e^{\alpha t}(\cos\beta t + i\sin\beta t)$ — the oscillatory
case of [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md)
and the $\lambda = \pm i$ of a rotation in
[linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md).

*From* [2.4](lessons/02-04-complex-numbers.md)

### The unit circle

Quadrant-I special angles — the row worth burning in, since nearly every clean
derivative check and integral bound lands here:

| $\theta$ (rad) | $0$ | $\tfrac{\pi}{6}$ | $\tfrac{\pi}{4}$ | $\tfrac{\pi}{3}$ | $\tfrac{\pi}{2}$ |
|---|---|---|---|---|---|
| degrees | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ |
| $\sin\theta$ | $0$ | $\tfrac{1}{2}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac{\sqrt3}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac{1}{2}$ | $0$ |
| $\tan\theta$ | $0$ | $\tfrac{1}{\sqrt3}$ | $1$ | $\sqrt3$ | undefined |

Quadrantal values: $\sin$ runs $0,\ 1,\ 0,\ -1$ and $\cos$ runs $1,\ 0,\ -1,\ 0$
at $\theta = 0,\ \tfrac{\pi}{2},\ \pi,\ \tfrac{3\pi}{2}$.

**Any other angle in two steps.** (1) Take the **reference angle** — the acute
angle to the nearest part of the $x$-axis — and read its value from the row above.
(2) Fix the sign from the quadrant:

| Quadrant | Positive there |
|---|---|
| I | all |
| II | $\sin$ (and $\csc$) |
| III | $\tan$ (and $\cot$) |
| IV | $\cos$ (and $\sec$) |

Conversions: $\theta_{\text{rad}} = \theta_{\deg}\cdot\tfrac{\pi}{180}$, and
$1\ \text{rad} \approx 57.3^\circ$.

*From* [3.1](lessons/03-01-trig-functions-for-calculus.md)

### Trigonometric identities calculus reuses

Definitions from $\sin$ and $\cos$:

$$\tan\theta = \frac{\sin\theta}{\cos\theta}, \qquad \cot\theta = \frac{\cos\theta}{\sin\theta}, \qquad \sec\theta = \frac{1}{\cos\theta}, \qquad \csc\theta = \frac{1}{\sin\theta}$$

Pythagorean family (divide the first by $\cos^2$ or $\sin^2$ to get the others) —
the engine behind trig substitution:

$$\sin^2\theta + \cos^2\theta = 1, \qquad 1 + \tan^2\theta = \sec^2\theta, \qquad 1 + \cot^2\theta = \csc^2\theta$$

Even/odd and shift:

$$\cos(-\theta) = \cos\theta, \qquad \sin(-\theta) = -\sin\theta, \qquad \cos\theta = \sin\!\left(\theta + \tfrac{\pi}{2}\right)$$

Sum and difference (the identity that makes the $\sin$ derivative come out):

$$\sin(\alpha\pm\beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta, \qquad \cos(\alpha\pm\beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$$

Double angle:

$$\sin 2\theta = 2\sin\theta\cos\theta, \qquad \cos 2\theta = 1 - 2\sin^2\theta = 2\cos^2\theta - 1$$

Power reduction — solve the last one for the squares; this is *the* trick for
integrating $\sin^2$ and $\cos^2$:

$$\cos^2\theta = \frac{1+\cos 2\theta}{2}, \qquad \sin^2\theta = \frac{1-\cos 2\theta}{2}$$

*From* [3.1](lessons/03-01-trig-functions-for-calculus.md)

### Small-angle facts (and why radians are mandatory)

Up close, the sine curve **is** its input. This single limit is what makes every
trig derivative come out clean:

$$\lim_{x\to 0}\frac{\sin x}{x} = 1 \qquad\Longrightarrow\qquad \sin x \approx x, \quad \tan x \approx x, \quad \cos x \approx 1 - \frac{x^2}{2}$$

In degrees that limit is $\tfrac{\pi}{180}$ instead of $1$, and every derivative
would drag that constant forever. Radians always.

*From* [3.1](lessons/03-01-trig-functions-for-calculus.md)

### Graphs of the trig functions

| Function | Period | Amplitude | Notes |
|---|---|---|---|
| $\sin x$ | $2\pi$ | $1$ | starts at $0$, rising |
| $\cos x$ | $2\pi$ | $1$ | starts at $1$, falling; $\sin$ shifted left by $\tfrac{\pi}{2}$ |
| $\tan x$ | $\pi$ | none | vertical asymptotes wherever $\cos x = 0$, i.e. $x = \tfrac{\pi}{2}+n\pi$ |

For $y = A\sin\big(B(x-C)\big)+D$: amplitude $\lvert A\rvert$, period
$\tfrac{2\pi}{B}$, phase shift $C$, midline $y = D$, and the wave runs from
$D - \lvert A\rvert$ to $D + \lvert A\rvert$.

*From* [3.1](lessons/03-01-trig-functions-for-calculus.md)

### Sequences and their sums

| Object | Formula |
|---|---|
| arithmetic $n$-th term | $a_n = a_1 + (n-1)d$ |
| geometric $n$-th term | $a_n = a_1 r^{\,n-1}$ |
| arithmetic partial sum | $\displaystyle\sum_{k=1}^{n} a_k = \frac{n}{2}(a_1 + a_n)$ — count times the average of first and last |
| geometric partial sum | $\displaystyle\sum_{k=1}^{n} a_1 r^{\,k-1} = a_1\,\frac{1-r^{\,n}}{1-r}$, $r\neq 1$ (if $r=1$, the sum is $n\,a_1$) |
| infinite geometric | $\displaystyle\sum_{k=0}^{\infty} a\,r^{k} = \frac{a}{1-r}$ **only when** $\lvert r\rvert < 1$; otherwise it diverges |

Both closed forms come from the same collapse: write the arithmetic sum forwards
and backwards and add columns (Gauss), or subtract $rS_n$ from $S_n$ and watch the
middle telescope.

Index bookkeeping: $\sum_{k=1}^{n}$ has $n$ terms, $\sum_{k=0}^{n}$ has $n+1$ —
"top minus bottom, plus one." Sigma is linear:
$\sum (c\,a_k + b_k) = c\sum a_k + \sum b_k$, and $\sum_{k=1}^{n} c = nc$.

*From* [3.2](lessons/03-02-sequences-and-sigma-notation.md) *and* [3.3](lessons/03-03-series-and-infinite-geometric-sum.md)

### Power sums (for Riemann sums downstream)

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}, \qquad \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}, \qquad \sum_{k=1}^{n} k^3 = \left[\frac{n(n+1)}{2}\right]^2$$

These are what turn a rectangle-area sum into a formula in $n$ you can take a
limit of — your first integral, computed by hand.

*From* [3.2](lessons/03-02-sequences-and-sigma-notation.md)

### Conic sections: standard forms

Centered at the origin; replace $x \to x-h$ and $y \to y-k$ to move the center to
$(h,k)$.

| Conic | Standard form | Key geometry |
|---|---|---|
| circle | $x^2 + y^2 = R^2$ | radius $R$ |
| parabola (opens up) | $x^2 = 4py$, i.e. $y = ax^2$ with $a = \tfrac{1}{4p}$ | focus $(0,p)$, directrix $y = -p$ |
| parabola (opens right) | $y^2 = 4px$ | focus $(p,0)$, directrix $x = -p$ |
| ellipse (wide) | $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$, $a>b$ | vertices $(\pm a,0)$, foci $(\pm c, 0)$, $c^2 = a^2 - b^2$ |
| ellipse (tall) | $\dfrac{x^2}{b^2} + \dfrac{y^2}{a^2} = 1$, $a>b$ | vertices $(0,\pm a)$, foci $(0,\pm c)$, $c^2 = a^2 - b^2$ |
| hyperbola (left–right) | $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ | vertices $(\pm a, 0)$, foci $(\pm c, 0)$, $c^2 = a^2 + b^2$, asymptotes $y = \pm\tfrac{b}{a}x$ |
| hyperbola (up–down) | $\dfrac{y^2}{a^2} - \dfrac{x^2}{b^2} = 1$ | vertices $(0,\pm a)$, asymptotes $y = \pm\tfrac{a}{b}x$ |

**Identify by counting squares:** one variable squared → parabola; two squared
terms with the **same** sign → ellipse (circle if the coefficients match); two with
**opposite** signs → hyperbola. Ellipse **subtracts** for $c$ (foci inside,
$c<a$); hyperbola **adds** (foci outside, $c>a$). For an ellipse, the **larger
denominator names the major axis**, whichever variable sits above it.

*From* [4.1](lessons/04-01-conic-sections.md)

### Completing the square

How you find where an off-center conic actually lives.

1. Group by variable; move the constant to the right.
2. Factor the leading coefficient out of each group.
3. Inside each group, add $\left(\tfrac{\text{linear coeff}}{2}\right)^2$ —
   remember it gets multiplied by the factored-out coefficient on the other side.
4. Divide through to make the right-hand side $1$.

$$x^2 - 4x = (x-2)^2 - 4, \qquad y^2 + 2y = (y+1)^2 - 1$$

*From* [4.1](lessons/04-01-conic-sections.md)

### Vectors, polar, and parametric conversions

$$\mathbf{A} = \langle x,y\rangle, \qquad \lvert\mathbf{A}\rvert = \sqrt{x^2+y^2}, \qquad \mathbf{A} = \big\langle \lvert\mathbf{A}\rvert\cos\theta,\ \lvert\mathbf{A}\rvert\sin\theta \big\rangle$$
$$\langle a_1,a_2\rangle + \langle b_1,b_2\rangle = \langle a_1+b_1,\ a_2+b_2\rangle, \qquad c\langle x,y\rangle = \langle cx,\ cy\rangle$$
$$x = r\cos\theta, \quad y = r\sin\theta, \qquad r = \sqrt{x^2+y^2}, \quad \tan\theta = \frac{y}{x}$$

Polar-to-rectangular trick for an equation: multiply through by $r$ so that $r^2$
and $r\cos\theta$ appear, then substitute $r^2 = x^2+y^2$ and $r\cos\theta = x$.
(That turns $r = 4\cos\theta$ into the circle $(x-2)^2 + y^2 = 4$.)

Parametrizations worth recognizing on sight:

| Curve | Parametrization |
|---|---|
| line through $(x_0,y_0)$ with direction $\langle u,v\rangle$ | $x = x_0 + ut,\ y = y_0 + vt$ |
| circle of radius $R$ | $x = R\cos t,\ y = R\sin t$ |
| ellipse | $x = a\cos t,\ y = b\sin t$ |
| projectile | $x = v_0\cos\alpha\, t,\ \ y = v_0\sin\alpha\, t - \tfrac12 g t^2$ |

*From* [4.2](lessons/04-02-vectors-parametric-and-polar.md)

### Estimating an instantaneous rate

$$\text{average over } [a,\,a+h]:\ \frac{f(a+h)-f(a)}{h} \qquad\longrightarrow\qquad \text{instantaneous at } a:\ \lim_{h\to 0}\frac{f(a+h)-f(a)}{h}$$

Procedure without calculus: tabulate the average rate for $h = 1,\ 0.1,\ 0.01,\
0.001$ and read off what the numbers are converging to. You never set $h = 0$ —
that is $\tfrac{0}{0}$.

**Rescuing a $\tfrac{0}{0}$ limit:** factor and cancel the offending factor, then
substitute. $\dfrac{x^2-1}{x-1} = x+1$ for $x\neq 1$, so the limit at $1$ is $2$
even though the function is undefined there.

Interpretations to keep straight: rate of position is **velocity**; rate of total
cost is **marginal cost**.

*From* [4.3](lessons/04-03-limits-and-instantaneous-rate.md)

## Assumed, not taught here

This is a Foundations course, but it still stands on two earlier ones. Each row
points at where the *derivation* lives.

| Fact | Where it's taught |
|---|---|
| Interval and inequality notation | [algebra-foundations 1.2](../algebra-foundations/lessons/01-02-linear-equations-and-inequalities.md) |
| The function concept, function notation | [algebra-foundations 2.1](../algebra-foundations/lessons/02-01-the-function-concept.md) |
| Slope, linear equations, point–slope form | [algebra-foundations 2.2](../algebra-foundations/lessons/02-02-slope-and-lines.md) |
| Exponent laws; expanding and multiplying polynomials | [algebra-foundations 3.1](../algebra-foundations/lessons/03-01-exponents-and-polynomial-operations.md) |
| Factoring quadratics and higher polynomials | [algebra-foundations 3.2](../algebra-foundations/lessons/03-02-factoring.md) |
| Quadratic formula, zero-product property, completing the square | [algebra-foundations 4.1](../algebra-foundations/lessons/04-01-quadratic-equations.md) |
| Cancelling common factors in a rational expression; excluded values | [algebra-foundations 4.2](../algebra-foundations/lessons/04-02-rational-expressions.md) |
| Radicals and rational exponents ($b^{1/n} = \sqrt[n]{b}$) | [algebra-foundations 4.3](../algebra-foundations/lessons/04-03-radicals-and-rational-exponents.md) |
| First pass at exponential functions and the base $e$ | [algebra-foundations 5.1](../algebra-foundations/lessons/05-01-exponential-functions.md) |
| First pass at logarithms and the log laws | [algebra-foundations 5.2](../algebra-foundations/lessons/05-02-logarithms.md) |
| Right-triangle ratios (SOH-CAH-TOA) | [trigonometry 1.1](../trigonometry/lessons/01-01-the-three-ratios.md) |
| Radian measure and arc length, derived | [trigonometry 2.1](../trigonometry/lessons/02-01-radian-measure.md) |
| Construction of the unit circle; reference angles; the Pythagorean theorem behind $\sin^2+\cos^2=1$ | [trigonometry 2.2](../trigonometry/lessons/02-02-the-unit-circle.md) |
| Sinusoid graphing — amplitude, period, phase shift in full | [trigonometry 3.1](../trigonometry/lessons/03-01-graphing-sinusoids.md) |
| Full derivations of the Pythagorean, sum/difference, and double-angle identities | [trigonometry 3.2](../trigonometry/lessons/03-02-fundamental-identities.md) |
| Polynomial long division (and synthetic division, the remainder/factor theorems) | [algebra-foundations 3.3](../algebra-foundations/lessons/03-03-polynomial-division.md) — the recipe is also stated on this card under *Polynomial long division* |
| Derivatives, integrals, rigorous limits | out of scope by design — [calc-refresher 1.1](../calc-refresher/lessons/01-01-derivative-as-sensitivity.md) picks up exactly where [4.3](lessons/04-03-limits-and-instantaneous-rate.md) stops |

## Pitfalls

### Functions, domains, inverses

- $f(x)$ is not "$f$ times $x$," and $f(a+b) \neq f(a)+f(b)$ — run the whole lump through the rule. *([1.1](lessons/01-01-functions-as-objects.md))*
- The domain is never "all reals unless told otherwise": hunt for zero denominators, negatives under even roots, non-positive log arguments, and whatever the context forbids. *([1.1](lessons/01-01-functions-as-objects.md), [2.3](lessons/02-03-exponential-and-logarithmic-functions.md))*
- Range is harder than domain — it asks what the rule can *reach*, not what it accepts. Read it off the graph's heights. *([1.1](lessons/01-01-functions-as-objects.md))*
- $f^{-1}$ means the inverse function, **never** $1/f$ — and $\sin^{-1}x$ is arcsine, not $\csc x$. *([1.2](lessons/01-02-composition-and-inverses.md), [3.1](lessons/03-01-trig-functions-for-calculus.md))*
- Not every function has an inverse — only one-to-one ones. Restricting the domain to force one is a deliberate move, not a cheat (it is why $\sqrt{\ }$ returns only the non-negative root). *([1.2](lessons/01-02-composition-and-inverses.md))*
- $f\circ g \neq g\circ f$ in general; socks-then-shoes is not shoes-then-socks. The one exception is a function with its own inverse. *([1.2](lessons/01-02-composition-and-inverses.md))*

### Transformations

- $f(x-3)$ shifts **right** 3, not left — inside edits run backwards. Ask "what makes the inside zero?" *([1.3](lessons/01-03-transformations-of-graphs.md))*
- $f(2x)$ **compresses** to half width; only outside scaling $a\,f(x)$ does the intuitive thing. *([1.3](lessons/01-03-transformations-of-graphs.md))*
- Order matters: stretch before the vertical shift, since $2f(x)+1 \neq 2\big(f(x)+1\big)$. *([1.3](lessons/01-03-transformations-of-graphs.md))*

### Polynomials and rational functions

- Degree is a **ceiling, not a count**: $x^4+1$ has degree 4 and no real zeros. At most $n$ zeros, at most $n-1$ turning points. *([2.1](lessons/02-01-polynomial-functions.md))*
- Even multiplicity means the curve only **touches** the axis — miss it and your sketch changes sign where it shouldn't. *([2.1](lessons/02-01-polynomial-functions.md))*
- "Leading" means highest power, not the constant sitting alone; and degree from factored form is the **sum of multiplicities**, not the number of distinct factors. *([2.1](lessons/02-01-polynomial-functions.md))*
- Not every denominator zero is a wall — a fully cancelled factor is a **hole**. Always factor and cancel before declaring asymptotes. *([2.2](lessons/02-02-rational-functions.md))*
- Cancelling once doesn't always kill the wall: check the powers. A factor is a hole only when the top's power **matches or beats** the bottom's. *([2.2](lessons/02-02-rational-functions.md))*
- Equal degrees give $y = a/b$ — not $y=0$ and not $y=1$ by reflex; and when the top out-degrees the bottom by one, you get a slant line instead of a horizontal one. *([2.2](lessons/02-02-rational-functions.md))*

### Exponentials and logs

- $\log(x+y) \neq \log x + \log y$. The sum law is for $\log(xy)$; a genuine sum inside stays stuck. *([2.3](lessons/02-03-exponential-and-logarithmic-functions.md))*
- Decay never reaches zero: $b^x$ with $0<b<1$ approaches the asymptote $y=0$ forever. Half-life just keeps repeating. *([2.3](lessons/02-03-exponential-and-logarithmic-functions.md))*
- Log equations manufacture **extraneous roots** — always plug back in and discard anything forcing the log of zero or a negative. *([2.3](lessons/02-03-exponential-and-logarithmic-functions.md))*

### Complex numbers

- $\sqrt{a}\sqrt{b} = \sqrt{ab}$ **fails** for negatives: $\sqrt{-4}\sqrt{-9} = (2i)(3i) = -6$, not $6$. Convert to $i$ first. *([2.4](lessons/02-04-complex-numbers.md))*
- $z\bar z = \lvert z\rvert^2$ is the real one; $z^2$ is not. To divide, multiply by the **conjugate** of the denominator, never by the denominator. *([2.4](lessons/02-04-complex-numbers.md))*
- $\arg z = \tan^{-1}(b/a)$ only for $a>0$; add $180^\circ$ in the left half-plane — the same trap as a vector's direction angle. *([2.4](lessons/02-04-complex-numbers.md), [4.2](lessons/04-02-vectors-parametric-and-polar.md))*
- There is no order on the complex plane: "$z < w$" is meaningless. Compare moduli instead. *([2.4](lessons/02-04-complex-numbers.md))*

### Trigonometry

- $\sin^2 x = (\sin x)^2$, **not** $\sin(x^2)$. *([3.1](lessons/03-01-trig-functions-for-calculus.md))*
- Degrees break everything: $\sin x \approx x$ and the clean derivatives are radian-only facts. Stay in radians. *([3.1](lessons/03-01-trig-functions-for-calculus.md))*
- Amplitude and period are independent knobs — $A$ stretches vertically, $B$ horizontally. *([3.1](lessons/03-01-trig-functions-for-calculus.md))*
- The Pythagorean identity gives you the magnitude; only the **quadrant** fixes the sign. Same trap as reading a vector's direction angle. *([3.1](lessons/03-01-trig-functions-for-calculus.md), [4.2](lessons/04-02-vectors-parametric-and-polar.md))*

### Sequences and series

- $a_n = a_1 + (n-1)d$, not $a_1 + nd$ — term 1 has taken zero steps. The same off-by-one lives in $r^{\,n-1}$. *([3.2](lessons/03-02-sequences-and-sigma-notation.md))*
- The geometric sum formula dies at $r = 1$ (division by zero); handle that case as $n\,a_1$. *([3.2](lessons/03-02-sequences-and-sigma-notation.md))*
- Count the index bounds: $\sum_{k=0}^{n}$ has $n+1$ terms. *([3.2](lessons/03-02-sequences-and-sigma-notation.md))*
- Terms shrinking to zero is **necessary, not sufficient** — the harmonic series has terms dying to zero and still diverges. For geometric series, $\lvert r\rvert<1$ is the exact line. *([3.3](lessons/03-03-series-and-infinite-geometric-sum.md))*
- $\tfrac{a}{1-r}$ is the *geometric* formula only, and $a$ is the **first term you actually add** — if the sum starts at $k=3$, that term is $a$. *([3.3](lessons/03-03-series-and-infinite-geometric-sum.md))*

### Conics, vectors, polar

- For an ellipse, the **larger denominator** names the major axis's direction — don't assume it sits under $x$. *([4.1](lessons/04-01-conic-sections.md))*
- Ellipse: $c^2 = a^2 - b^2$ (foci inside). Hyperbola: $c^2 = a^2 + b^2$ (foci outside the vertices). Opposite signs. *([4.1](lessons/04-01-conic-sections.md))*
- A parabola's tell is that **only one variable is squared** — not the sign of a squared term. *([4.1](lessons/04-01-conic-sections.md))*
- $\tan^{-1}(y/x)$ only returns angles in $(-90^\circ, 90^\circ)$; add $180^\circ$ when $x<0$. *([4.2](lessons/04-02-vectors-parametric-and-polar.md))*
- Eliminating the parameter can **add points the motion never reaches** — carry the domain of $t$ along. *([4.2](lessons/04-02-vectors-parametric-and-polar.md))*
- Polar coordinates are non-unique: $(r,\theta)$, $(r,\theta+360^\circ)$, and $(-r,\theta+180^\circ)$ are the same point. *([4.2](lessons/04-02-vectors-parametric-and-polar.md))*

### Limits and rates

- Average is not instantaneous — a secant slope over a wide interval says nothing about the rate at its left endpoint. *([4.3](lessons/04-03-limits-and-instantaneous-rate.md))*
- A limit ignores the point itself: $f(a)$ may be undefined, or defined as something else entirely, and the limit doesn't care. *([4.3](lessons/04-03-limits-and-instantaneous-rate.md))*
- You cannot just set $h = 0$ — that's $\tfrac{0}{0}$. Factor and cancel first, or watch the trend. *([4.3](lessons/04-03-limits-and-instantaneous-rate.md))*
- If the one-sided limits disagree, the two-sided limit **does not exist** — and there is no single instantaneous rate there. *([4.3](lessons/04-03-limits-and-instantaneous-rate.md))*
