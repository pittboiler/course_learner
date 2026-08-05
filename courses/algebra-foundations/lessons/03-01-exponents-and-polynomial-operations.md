# Algebra I & II · Lesson 3.1: Exponents & polynomial operations

> ⏱ ~15 min · Module 3: Polynomials & factoring · Builds on: 1.1 (variables & expressions) · Unlocks: 3.2 (factoring)

## Why this matters

Exponents are the shorthand of every growth story: compound interest, radioactive decay, the way area scales when you double a length. And polynomials — sums of powers — are the "friendly" functions all of quantitative science leans on, because we know exactly how to add, multiply, differentiate, and approximate them. Before you can *factor* a quadratic (next lesson) or *differentiate* $x^n$ (in `calc-refresher`), you need these two skills reflexive: bend the exponent laws in either direction, and multiply polynomials without dropping a term.

## The idea

An exponent is just a tally of how many copies you're multiplying: $a^4 = a\cdot a\cdot a\cdot a$. Every "law" below is something you could re-derive by writing out the copies and counting — that's the whole game.

- Multiply same-base powers? Line up the copies and count them: $a^2 \cdot a^3 = (aa)(aaa) = a^5$. You **add** the tallies.
- Divide? Cancel matching copies top and bottom: $a^5 / a^2 = a^3$. You **subtract**.
- A power of a power? $(a^2)^3$ is three copies of $aa$, so six $a$'s. You **multiply** the tallies.

A **polynomial** is a sum of such powers with number coefficients, like $2x^3 + 5x^2 - 11x + 4$. To multiply two of them you just distribute — every term in the first shakes hands with every term in the second — and then collect like powers. Nothing exotic; only bookkeeping.

## The formal version

For real $a, b \ne 0$ and integer exponents $m, n$, the **exponent laws** (read each *both ways*, left→right to combine and right→left to split):

$$a^m a^n = a^{m+n}, \qquad \frac{a^m}{a^n} = a^{m-n}, \qquad (a^m)^n = a^{mn}, \qquad (ab)^n = a^n b^n.$$

In words: multiplying adds exponents, dividing subtracts, nesting multiplies, and a power distributes over a product.

Two definitions fall straight out of the quotient law. Set $m = n$: $\dfrac{a^n}{a^n} = a^{n-n} = a^0$, but that fraction is $1$, so

$$a^0 = 1 \quad (a \ne 0).$$

In words: anything nonzero to the zeroth power is $1$ — it's forced by consistency, not decree. Set $m = 0$: $\dfrac{a^0}{a^n} = a^{0-n} = a^{-n}$, and the left side is $\dfrac{1}{a^n}$, so

$$a^{-n} = \frac{1}{a^n}.$$

In words: a negative exponent means "reciprocal" — it flips the base across the fraction bar.

A **polynomial in $x$** is a finite sum $a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ with number coefficients $a_i$. Its **degree** is the largest power with a nonzero coefficient; the term carrying that power is the **leading term**. In words: the degree is the polynomial's "top speed" — it governs the shape for large $x$. Add or subtract polynomials by combining like terms (same power); multiply by distributing every term against every term, then collecting.

## Concrete instance

Expand $(2x - 3)(x + 4)$ term by term — the "FOIL" pattern (First, Outer, Inner, Last) is just distribution with a mnemonic:

$$
\begin{aligned}
\textbf{First:}\quad & (2x)(x) = 2x^2 \\
\textbf{Outer:}\quad & (2x)(4) = 8x \\
\textbf{Inner:}\quad & (-3)(x) = -3x \\
\textbf{Last:}\quad & (-3)(4) = -12
\end{aligned}
$$

Now collect the like terms (the two middle ones): $8x - 3x = 5x$, giving

$$(2x-3)(x+4) = 2x^2 + 5x - 12.$$

Degree $2$, leading term $2x^2$. (Hold onto this expression — next lesson you'll run it *backwards*, recovering $(2x-3)(x+4)$ from $2x^2 + 5x - 12$. That reverse trip is factoring.)

## Worked examples

**Example 1 (mechanical — all four laws at once).** Simplify to a single term with positive exponents:

$$\frac{(3x^2 y^{-1})^2 \cdot x}{9\,x^{-1} y}.$$

Numerator first. Power-of-product on $(3x^2y^{-1})^2$: square each factor, multiplying inner exponents — $9\,x^{4} y^{-2}$. Times $x$ (add exponents on $x$): $9\,x^{5} y^{-2}$. Now divide by $9x^{-1}y$ (subtract exponents, base by base):

$$\frac{9\,x^{5} y^{-2}}{9\,x^{-1} y} = x^{\,5-(-1)}\, y^{\,-2-1} = x^{6} y^{-3} = \frac{x^{6}}{y^{3}}.$$

The $9$'s cancel; the $-2 - 1 = -3$ on $y$ becomes a denominator via the negative-exponent rule.

**Example 2 (why you'd care — a product that models area).** A rectangular field is $(x + 5)$ meters long and $(x + 5)$ wide — a square — but you shave $2$ meters off the length and *add* $2$ to the width to make a rectangle of the same perimeter. Its area is

$$(x + 7)(x + 3) = x^2 + 3x + 7x + 21 = x^2 + 10x + 21.$$

The original square had area $(x+5)^2 = x^2 + 10x + 25$. Same $x^2 + 10x$, but the rectangle's constant is $21$ versus $25$: the reshaped field is always exactly $4$ square meters smaller, whatever $x$ is. Multiplying the polynomials out is what exposes that constant gap — the "$-4$" you'd never spot from the factored form. This is the everyday reason to expand: **structure hides in the factored form, size differences show up in the expanded form.**

## Watch out

- You might think $a^{-2}$ is negative. It isn't — the minus sign means *reciprocal*, not *sign*: $2^{-2} = \frac{1}{4}$, a positive number. Negative exponent, positive value.
- You might think $(x + y)^2 = x^2 + y^2$. It doesn't — squaring is *not* one of the distributive laws. Write it as a product and expand: $(x+y)^2 = (x+y)(x+y) = x^2 + 2xy + y^2$. The missing $2xy$ is the single most common algebra error there is.
- You might think $3x^2$ means $(3x)^2$. Exponents bind tighter than the coefficient: $3x^2 = 3\cdot(x^2)$, whereas $(3x)^2 = 9x^2$. Likewise $-x^2 = -(x^2)$, which is negative, while $(-x)^2 = x^2$ is positive.

## One-liner

> Multiplying powers *adds* exponents and multiplying polynomials *distributes every term against every term* — everything else here is those two moves run forward or backward.

## Problems

**P1 (🟢)** Simplify to a single expression with only positive exponents: $\left(\dfrac{2x^{-2} y^{3}}{x\, y^{-1}}\right)^{-2}$.

**P2 (🟡)** Expand and simplify $(2x - 1)(x^2 + 3x - 4)$, then state its degree and leading term.

**P3 (🔴, optional)** Using only the exponent laws, show that $\dfrac{a^{0} + a^{-3}}{a^{-3}}$ simplifies to $a^{3} + 1$ (for $a \ne 0$). Then explain in one sentence why the "$a^0$" in the numerator is what makes the $+1$ appear.

<details>
<summary>Solutions</summary>

**P1** Simplify inside the parentheses first (subtract exponents base by base):
$$\frac{2x^{-2}y^{3}}{x\,y^{-1}} = 2\,x^{-2-1}\,y^{\,3-(-1)} = 2\,x^{-3} y^{4}.$$
Now raise to $-2$ — distribute the power over each factor and multiply exponents:
$$(2\,x^{-3} y^{4})^{-2} = 2^{-2}\,x^{6}\,y^{-8} = \frac{1}{4}\cdot x^{6}\cdot\frac{1}{y^{8}} = \boxed{\dfrac{x^{6}}{4\,y^{8}}}.$$
(Check: $2^{-2} = \frac14$; $(-3)(-2) = 6$; $(4)(-2) = -8$.)

**P2** Distribute each term of $(2x - 1)$ across $x^2 + 3x - 4$:
$$
\begin{aligned}
2x\cdot(x^2 + 3x - 4) &= 2x^3 + 6x^2 - 8x,\\
-1\cdot(x^2 + 3x - 4) &= -x^2 - 3x + 4.
\end{aligned}
$$
Add and collect like powers: $2x^3 + (6-1)x^2 + (-8-3)x + 4 = \boxed{2x^3 + 5x^2 - 11x + 4}$. Degree $3$, leading term $2x^3$.

**P3** Split the fraction over its two numerator terms (or divide each by $a^{-3}$, subtracting exponents):
$$\frac{a^{0} + a^{-3}}{a^{-3}} = \frac{a^{0}}{a^{-3}} + \frac{a^{-3}}{a^{-3}} = a^{\,0-(-3)} + a^{\,-3-(-3)} = a^{3} + a^{0} = a^{3} + 1.$$
The final $+1$ is exactly the $a^{0}$ term: $a^{-3}/a^{-3} = a^0 = 1$. The zeroth power is what guarantees the leftover constant — remove the "$a^0 = 1$" convention and this identity breaks.

</details>

## Flashback

**From Lesson 2.3 (Systems of linear equations):** Solve the system by substitution:
$$\begin{cases} y = 2x - 3 \\ 3x + y = 12 \end{cases}$$

<details>
<summary>Solution</summary>

The first equation already gives $y$ in terms of $x$, so substitute it into the second:
$$3x + (2x - 3) = 12 \;\Longrightarrow\; 5x - 3 = 12 \;\Longrightarrow\; 5x = 15 \;\Longrightarrow\; x = 3.$$
Back-substitute: $y = 2(3) - 3 = 3$. Solution $(x, y) = (3, 3)$. Check in the second equation: $3(3) + 3 = 12$. ✓

</details>

## Connections

- **Backward:** this is Lesson 1.1's distributive property scaled up — the same "multiply each term through" move, now with powers of $x$ carried along by the exponent laws.
- **Forward:** Lesson 3.2 (factoring) runs today's multiplication *backward* — the Concrete-instance product $2x^2 + 5x - 12 \to (2x-3)(x+4)$ is exactly the reverse trip. Lesson 4.3 extends exponents to *fractional* powers ($x^{m/n}$, e.g. $x^{1/2} = \sqrt{x}$), and Lesson 5.1 lets the exponent become the *variable* ($b^x$) to model growth and decay.
- **Sideways (calculus):** the power rule in `calc-refresher`, $\frac{d}{dx}x^n = n\,x^{n-1}$, is defined for *any* real $n$ — including the negative and zero exponents from this lesson. That's why $\frac{d}{dx}\frac{1}{x} = \frac{d}{dx}x^{-1} = -x^{-2} = -\frac{1}{x^2}$: the "flip to a negative exponent" move you learned here is what makes the derivative computable.
