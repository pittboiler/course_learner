# Algebra I & II · Lesson 3.2: Factoring

> ⏱ ~15 min · Module 3: Polynomials & factoring · Builds on: 3.1 (exponents & polynomial operations) · Unlocks: 4.1 (quadratic equations)

## Why this matters

Factoring is the single move that turns "I have an expression" into "I can *solve* something." A quadratic just sits there until you factor it — then the **zero-product property** (Lesson 4.1) cracks it open in one line. It's also how you tame ugly fractions of polynomials (Lesson 4.2) and how you rescue a $\frac{0}{0}$ limit in calculus, where the *only* way forward is to factor and cancel. Expanding is a chore; factoring is a superpower.

## The idea

Factoring is **un-multiplying**. In Lesson 3.1 you took $(x+2)(x+3)$ and multiplied it out to $x^2 + 5x + 6$. Factoring runs that film backwards: you're handed $x^2 + 5x + 6$ and asked to recover the two things that were multiplied. Same relationship as $6 = 2 \times 3$: multiplying is easy, but *finding* the factors of a number is a little search. That's the whole story — and it's why factoring feels harder than expanding, which we'll come back to.

There are only a handful of patterns to recognize. Learn to spot them and factoring becomes fast:

1. **Pull out the GCF** — always look here first.
2. **Difference of squares** — $a^2 - b^2$.
3. **Simple trinomials** — $x^2 + bx + c$.
4. **Hard trinomials** — $ax^2 + bx + c$ with $a \neq 1$.
5. **Grouping** — four terms with no common factor.

## The formal version

**Greatest common factor (GCF).** Pull the largest shared piece out of every term via the distributive law in reverse:
$$ab + ac = a(b + c).$$
In words: if every term has a common factor, that factor comes out front and what's left goes in parentheses.

**Difference of squares.**
$$a^2 - b^2 = (a + b)(a - b).$$
In words: a square minus a square splits into a sum times a difference. (There is *no* real factoring of a **sum** of squares $a^2 + b^2$.)

**Monic trinomial** ($x^2 + bx + c$). Find two numbers $m, n$ with $m + n = b$ and $mn = c$; then
$$x^2 + bx + c = (x + m)(x + n).$$
In words: you want two numbers that **multiply to the constant** and **add to the middle coefficient**.

**General trinomial** ($ax^2 + bx + c$, the *ac-method*). Find $m, n$ with $mn = ac$ and $m + n = b$, split the middle term $bx = mx + nx$, then factor by grouping. In words: same "multiply / add" search, but the target product is $a\cdot c$, not just $c$.

**Grouping** (four terms). Group into pairs, factor each pair, and hope a common binomial appears:
$$xy + xz + wy + wz = x(y+z) + w(y+z) = (x + w)(y + z).$$

## Concrete instance

Factor the hard trinomial $6x^2 + x - 12$ (here $a=6,\ b=1,\ c=-12$).

**Step 1 — target product.** $ac = 6 \times (-12) = -72$. I need two numbers that multiply to $-72$ and add to $b = 1$.

**Step 2 — the search.** Factor pairs of $72$: $1\cdot72,\ 2\cdot36,\ 3\cdot24,\ 4\cdot18,\ 6\cdot12,\ 8\cdot9$. I want a difference of $1$ (since the product is negative and the sum is $+1$): $9$ and $8$ work. Give the bigger one the sign of $b$: $+9$ and $-8$, since $9 + (-8) = 1$ and $9\cdot(-8) = -72$. ✓

**Step 3 — split the middle term.**
$$6x^2 + x - 12 = 6x^2 + 9x - 8x - 12.$$

**Step 4 — group and factor each pair.**
$$\underbrace{6x^2 + 9x}_{3x(2x+3)} \; \underbrace{-\,8x - 12}_{-4(2x+3)} = 3x(2x+3) - 4(2x+3).$$

**Step 5 — pull out the shared binomial** $(2x+3)$:
$$= (2x+3)(3x-4).$$

**Verify by re-multiplying** (FOIL from 3.1):
$$(2x+3)(3x-4) = 6x^2 - 8x + 9x - 12 = 6x^2 + x - 12. \checkmark$$

The answer key checks itself — always re-multiply.

## Worked examples

**Example 1 (mechanical — GCF, then a special pattern).** Factor $12x^3 - 27x$ completely.

First the GCF: both terms share $3x$, so $12x^3 - 27x = 3x(4x^2 - 9)$. Now $4x^2 - 9 = (2x)^2 - 3^2$ is a difference of squares:
$$3x(4x^2 - 9) = 3x(2x - 3)(2x + 3).$$
"Completely" means *keep going until nothing factors further* — pulling the GCF first is what exposed the clean difference-of-squares underneath.

**Example 2 (why you'd care — un-blocking a calculus limit).** In `calc-refresher` you'll hit limits like $\displaystyle\lim_{x\to 3}\frac{x^2 - 9}{x - 3}$. Plugging in $x=3$ gives $\frac{0}{0}$ — meaningless. Factor the top:
$$\frac{x^2 - 9}{x - 3} = \frac{(x-3)(x+3)}{x - 3} = x + 3 \quad (x \neq 3).$$
The offending $(x-3)$ cancels, and now $x=3$ gives $6$. Factoring is the *only* tool that resolves a $\frac{0}{0}$ form by hand. Same cancellation runs Lesson 4.2's rational expressions.

## Watch out

- **You might think** you can pull terms out of a *sum of squares* like $x^2 + 4$. **Actually** $a^2 + b^2$ does not factor over the reals — only the *difference* $a^2 - b^2$ splits. Don't invent $(x+2)(x-2)$-style factors for a plus sign.
- **You might think** you're done once you find *a* factorization. **Actually** "factor completely" means every factor is fully reduced: $2x^2 - 8 = 2(x^2 - 4)$ is *not* finished — the $(x^2-4)$ is still a difference of squares, giving $2(x-2)(x+2)$. Always re-scan the parentheses.
- **You might think** the signs in a trinomial don't matter much. **Actually** they carry all the information: for $x^2 + bx + c$, if $c > 0$ both numbers share $b$'s sign; if $c < 0$ they have opposite signs and the bigger-magnitude one takes $b$'s sign. Get the sign logic wrong and re-multiplying will catch you.

## One-liner

> Factoring is un-multiplying: it's a small search for the pieces that were multiplied together — GCF first, then match a pattern, then verify by expanding back.

## Problems

**P1 (🟢)** Factor completely: (a) $x^2 + 2x - 15$, and (b) $9x^2 - 49$.

**P2 (🟡)** Factor $4x^2 - 4x - 15$ using the ac-method. Show the middle-term split and verify by re-multiplying.

**P3 (🔴)** In `calc-refresher` you'll evaluate $\displaystyle\lim_{x\to 2}\frac{x^2 - 4}{x^2 - x - 2}$, which is $\frac{0}{0}$ at $x = 2$. Factor the numerator and denominator, cancel the common factor, and give the value the limit approaches.

<details>
<summary>Solutions</summary>

**P1**
(a) Two numbers multiplying to $-15$ and adding to $+2$: that's $+5$ and $-3$. So $x^2 + 2x - 15 = (x + 5)(x - 3)$. Check: $x^2 - 3x + 5x - 15 = x^2 + 2x - 15$. ✓
(b) $9x^2 - 49 = (3x)^2 - 7^2$, a difference of squares $= (3x - 7)(3x + 7)$. Check: $9x^2 + 21x - 21x - 49 = 9x^2 - 49$. ✓

**P2** Here $a = 4,\ b = -4,\ c = -15$, so $ac = 4\cdot(-15) = -60$. Need two numbers with product $-60$ and sum $-4$: that's $-10$ and $+6$ (since $-10 + 6 = -4$, $-10\cdot 6 = -60$). Split the middle term:
$$4x^2 - 4x - 15 = 4x^2 - 10x + 6x - 15 = 2x(2x - 5) + 3(2x - 5) = (2x - 5)(2x + 3).$$
Verify: $(2x - 5)(2x + 3) = 4x^2 + 6x - 10x - 15 = 4x^2 - 4x - 15$. ✓

**P3** Numerator $x^2 - 4 = (x - 2)(x + 2)$. Denominator $x^2 - x - 2 = (x - 2)(x + 1)$ (numbers multiplying to $-2$, adding to $-1$: $-2$ and $+1$). So
$$\frac{x^2 - 4}{x^2 - x - 2} = \frac{(x - 2)(x + 2)}{(x - 2)(x + 1)} = \frac{x + 2}{x + 1} \quad (x \neq 2).$$
As $x \to 2$ this approaches $\dfrac{2 + 2}{2 + 1} = \dfrac{4}{3}$. The shared $(x - 2)$ was exactly what made the original $\frac{0}{0}$; cancelling it reveals the honest value.

</details>

## Flashback

**From Lesson 3.1 (Exponents & polynomial operations):** Simplify to a single term with positive exponents:
$$\frac{(3x^2 y)^2 \cdot x^{-3}}{y^{-1}}.$$

<details>
<summary>Solution</summary>

Apply the power rule to the numerator: $(3x^2 y)^2 = 3^2 x^{4} y^{2} = 9x^4 y^2$. Then
$$\frac{9x^4 y^2 \cdot x^{-3}}{y^{-1}} = 9 x^{4 + (-3)} y^{2 - (-1)} = 9x^{1} y^{3} = 9xy^3.$$
Key moves: dividing by $y^{-1}$ *adds* $1$ to the exponent of $y$ (a negative exponent in the denominator flips up top), and multiplying like bases adds exponents. Answer: $9xy^3$.

</details>

## Connections

- **Backward:** this is Lesson 3.1 run in reverse — every factorization is checked by the very FOIL/distribution you drilled there. Multiplying is the mechanical forward direction; factoring is the search backward.
- **Forward:** Lesson 4.1 combines factoring with the **zero-product property** ("if $AB = 0$ then $A = 0$ or $B = 0$") to solve quadratics — factoring is the *fast* method when it works. Lesson 4.2 uses the same cancel-a-common-factor move to simplify and combine rational expressions.
- **Sideways (calculus):** in `calc-refresher`, factoring is how you evaluate a $\frac{0}{0}$ limit by hand — factor top and bottom, cancel the shared root, then substitute. Example 2 and P3 are exactly that maneuver, one course early.
