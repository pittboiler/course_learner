# Algebra I & II · Lesson 4.3: Radicals & rational exponents

> ⏱ ~15 min · Module 4: Quadratics, rationals & radicals · Builds on: 3.1 (exponents & polynomial operations) · Unlocks: 5.1 (exponential functions)

## Why this matters

Roots are everywhere the moment you leave straight lines: the quadratic formula spits out a $\sqrt{\,}$, the distance between two points is $\sqrt{\Delta x^2 + \Delta y^2}$, the length of a vector in `linalg-refresher` is a square root, and a pendulum's period is $2\pi\sqrt{L/g}$. The single most useful move in all of it is realizing a root is just a *fractional power* — once $\sqrt{x} = x^{1/2}$, every exponent law you already own applies unchanged, and `calc-refresher` can differentiate $\sqrt{x}$ with the same power rule it uses for $x^2$. This lesson kills the artificial wall between "radicals" and "exponents."

## The idea

Powers and roots are the same machine run in opposite directions. Squaring asks "what do I get if I multiply this by itself?"; the square root asks "what number, squared, got me here?" So a root *undoes* a power — it's an inverse, exactly like subtraction undoes addition.

The one idea that unlocks the whole topic: **a root is a fractional exponent.** The denominator says *which root* and the numerator says *which power*:

$$x^{1/n} = \sqrt[n]{x}, \qquad x^{m/n} = \sqrt[n]{x^m} = \left(\sqrt[n]{x}\right)^m.$$

Why should $x^{1/2}$ *mean* $\sqrt{x}$? Because we insist the exponent laws keep working. If $x^{1/2}$ is going to obey $\left(x^{1/2}\right)^2 = x^{(1/2)\cdot 2} = x^1 = x$, then $x^{1/2}$ is precisely the thing that squares to $x$ — the definition of $\sqrt{x}$. The notation isn't a new rule; it's the *only* choice consistent with the rules you already have.

## The formal version

For $x \ge 0$ (and any real $x$ when $n$ is odd), integers $m$ and $n>0$:

$$x^{1/n} = \sqrt[n]{x}, \qquad x^{m/n} = \sqrt[n]{x^m} = \left(\sqrt[n]{x}\right)^m.$$

In words: the fractional exponent $m/n$ means "take the $n$-th root and raise to the $m$-th power" — and you may do those two steps in either order. Because rational exponents are just exponents, all of the Lesson 3.1 laws carry over verbatim:

$$x^a x^b = x^{a+b}, \quad \frac{x^a}{x^b} = x^{a-b}, \quad (x^a)^b = x^{ab}, \quad (xy)^a = x^a y^a.$$

Two radical-specific consequences of the last law, used constantly for **simplifying**:

$$\sqrt[n]{xy} = \sqrt[n]{x}\,\sqrt[n]{y}, \qquad \sqrt[n]{\tfrac{x}{y}} = \frac{\sqrt[n]{x}}{\sqrt[n]{y}}.$$

In words: a root distributes over products and quotients (but **not** over sums). To *simplify* a radical you factor out the largest perfect $n$-th power hiding inside and walk it out the door.

## Concrete instance

**Simplify and convert.** Take $\sqrt[3]{x^2}$. The exponent is $2$ under a cube root, so it's the fractional power

$$\sqrt[3]{x^2} = x^{2/3}.$$

Now a numeric simplification, pulling out a perfect square. Factor $72$ to expose the largest square, $36$:

$$\sqrt{72} = \sqrt{36 \cdot 2} = \sqrt{36}\,\sqrt{2} = 6\sqrt{2}.$$

**Rationalize a denominator.** $\dfrac{1}{\sqrt{2}}$ hides its root downstairs; multiply top and bottom by $\sqrt{2}$ (which is multiplying by $1$, so the value is unchanged) to move the root upstairs:

$$\frac{1}{\sqrt{2}} = \frac{1}{\sqrt{2}}\cdot\frac{\sqrt{2}}{\sqrt{2}} = \frac{\sqrt{2}}{2}.$$

Same number ($\approx 0.707$), but now it's a clean $\sqrt{2}$ over an integer — easy to add to other fractions and easy to estimate by hand.

## Worked examples

**Example 1 (mechanical — simplify a radical with variables).** Simplify $\sqrt{50x^3}$ for $x \ge 0$.

Pull the largest perfect square out of each factor. $50 = 25 \cdot 2$ and $x^3 = x^2 \cdot x$:

$$\sqrt{50x^3} = \sqrt{25 \cdot 2 \cdot x^2 \cdot x} = \sqrt{25}\,\sqrt{x^2}\,\sqrt{2x} = 5x\sqrt{2x}.$$

The perfect squares ($25$ and $x^2$) come out as $5$ and $x$; whatever isn't a perfect square ($2x$) stays under the radical. Check with fractional exponents: $\sqrt{50x^3} = (50x^3)^{1/2} = 50^{1/2}x^{3/2} = 5\sqrt{2}\cdot x\cdot x^{1/2} = 5x\sqrt{2x}$. Same answer, two roads.

**Example 2 (why you'd care — rational exponents make ugly algebra trivial).** Simplify $\dfrac{\sqrt{x}\cdot \sqrt[3]{x}}{x}$.

As radicals this looks like it needs a common index and some cleverness. As exponents it's one line:

$$\frac{x^{1/2}\, x^{1/3}}{x} = x^{\,1/2 + 1/3 - 1} = x^{\,3/6 + 2/6 - 6/6} = x^{-1/6} = \frac{1}{\sqrt[6]{x}}.$$

Everything reduced to adding and subtracting fractions in the exponent — the product rule, the quotient rule, and the negative-exponent rule from Lesson 3.1, doing all the work. This is exactly the reflex `calc-refresher` wants: rewrite $\sqrt[3]{x^2}$ as $x^{2/3}$ *before* differentiating, then the power rule $\frac{d}{dx}x^p = p x^{p-1}$ applies with no special "root rule" needed — its derivative is $\frac{2}{3}x^{-1/3}$.

## Watch out

- You might think $\sqrt{a+b} = \sqrt{a} + \sqrt{b}$. **It doesn't.** Roots distribute over products, never sums: $\sqrt{9+16} = \sqrt{25} = 5$, but $\sqrt 9 + \sqrt{16} = 3+4 = 7$. (Same trap as $(a+b)^2 \ne a^2+b^2$ from Lesson 3.1 — because a root is just the power $1/2$.)
- You might think $\sqrt{x^2} = x$. For $x \ge 0$ yes, but in general $\sqrt{x^2} = |x|$ — the principal root is never negative, so $\sqrt{(-4)^2} = \sqrt{16} = 4$, not $-4$. This absolute value is why the quadratic formula carries a "$\pm$" out front.
- You might think a leftover root in the denominator is "wrong." It's not incorrect, but the convention is to **rationalize** so answers are comparable and easy to combine — $\frac{1}{\sqrt2}$ and $\frac{\sqrt2}{2}$ are equal, yet only the second adds cleanly to $\frac{1}{2}$. For a two-term denominator like $1+\sqrt2$, multiply by the **conjugate** $1-\sqrt2$ so the difference of squares kills both roots.

## One-liner

> A root is just a fractional exponent — $\sqrt[n]{x^m} = x^{m/n}$ — so every exponent law you own already knows how to handle radicals.

## Problems

**P1 (🟢)** Simplify completely: (a) $\sqrt{75}$, (b) $\sqrt[3]{54}$, (c) rewrite $\sqrt[4]{x^3}$ as a rational exponent.

**P2 (🟡)** Rationalize the denominator of $\dfrac{6}{\sqrt{3}}$, then of $\dfrac{1}{\sqrt{5}-\sqrt{2}}$ (use the conjugate).

**P3 (🔴, optional)** The straight-line distance between points $(1,2)$ and $(5,9)$ is $\sqrt{(5-1)^2 + (9-2)^2}$ — the norm formula you'll meet again in `linalg-refresher`. Evaluate it, and leave the answer as a simplified radical. Then write that distance as a rational exponent of a single number.

<details>
<summary>Solutions</summary>

**P1**
(a) $\sqrt{75} = \sqrt{25\cdot 3} = 5\sqrt{3}$.
(b) $\sqrt[3]{54} = \sqrt[3]{27 \cdot 2} = \sqrt[3]{27}\,\sqrt[3]{2} = 3\sqrt[3]{2}$ (largest perfect *cube* factor is $27$).
(c) $\sqrt[4]{x^3} = x^{3/4}$ — index $4$ is the denominator, power $3$ is the numerator.

**P2**
First: $\dfrac{6}{\sqrt3}\cdot\dfrac{\sqrt3}{\sqrt3} = \dfrac{6\sqrt3}{3} = 2\sqrt3$.

Second, multiply by the conjugate $\sqrt5+\sqrt2$ over itself. The denominator becomes a difference of squares:
$$\frac{1}{\sqrt5-\sqrt2}\cdot\frac{\sqrt5+\sqrt2}{\sqrt5+\sqrt2} = \frac{\sqrt5+\sqrt2}{(\sqrt5)^2-(\sqrt2)^2} = \frac{\sqrt5+\sqrt2}{5-2} = \frac{\sqrt5+\sqrt2}{3}.$$
The conjugate works because $(a-b)(a+b)=a^2-b^2$ turns each root into a plain number.

**P3**
$$\sqrt{(5-1)^2+(9-2)^2} = \sqrt{4^2+7^2} = \sqrt{16+49} = \sqrt{65}.$$
$65 = 5\cdot 13$ has no square factor, so $\sqrt{65}$ is already simplified. As a rational exponent: $\sqrt{65} = 65^{1/2}$. (Note you must square *first* and add — $\sqrt{16+49}\ne 4+7$, per the first Watch-out.)

</details>

## Flashback

**From Lesson 3.1 (Exponents & polynomial operations):** Simplify to a single power of $x$ with a positive exponent: $\dfrac{\left(x^{-2}\right)^3 \cdot x^{5}}{x^{-4}}$.

<details>
<summary>Solution</summary>

Work outward using the power rule, then the product and quotient rules:
$$\frac{(x^{-2})^3\, x^5}{x^{-4}} = \frac{x^{-6}\,x^5}{x^{-4}} = \frac{x^{-1}}{x^{-4}} = x^{-1-(-4)} = x^{3}.$$
Key moves: $(x^{-2})^3 = x^{-6}$ (multiply exponents), then add $-6+5=-1$ on top, then subtract the bottom exponent: $-1-(-4)=3$. The zero/negative-exponent conventions ($x^0=1$, $x^{-k}=1/x^k$) are what make this bookkeeping consistent.

</details>

## Connections

- **Backward:** this is Lesson 3.1's exponent laws with the exponents allowed to be fractions — nothing new is assumed, the domain of the exponent just widened from integers to rationals.
- **Forward:** Lesson 5.1 (exponential functions) takes the final step, letting the exponent be *any* real number so $b^x$ is defined for all $x$ — rational exponents like $x^{1/2}$ are the bridge between "integer powers" and "continuous $b^x$."
- **Sideways (calculus):** rewriting $\sqrt{x}=x^{1/2}$ lets `calc-refresher` differentiate roots with the ordinary power rule ($\frac{d}{dx}x^{1/2} = \frac12 x^{-1/2} = \frac{1}{2\sqrt x}$) — no separate machinery.
- **Sideways (linear algebra & physics):** the length of a vector $\lVert v\rVert = \sqrt{v_1^2+\cdots+v_n^2}$ in `linalg-refresher`, and speeds/magnitudes throughout physics, are exactly the distance-formula radical from P3.
