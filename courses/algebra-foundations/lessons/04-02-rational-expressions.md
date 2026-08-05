# Algebra I & II · Lesson 4.2: Rational expressions

> ⏱ ~15 min · Module 4: Quadratics, rationals & radicals · Builds on: 3.2 (factoring) · Unlocks: 4.3 (radicals & rational exponents)

## Why this matters

A rational expression is just a fraction whose numerator and denominator are polynomials — and it's the raw material of every interesting curve past the parabola. Average cost per unit, the rate at which two things mix, the shape of a demand curve near a shortage, the "difference quotient" that becomes the derivative in `calc-refresher` — all of them are ratios of polynomials. The whole skill is small: it's ordinary fraction arithmetic from grade school, now with $x$'s hiding inside. The two things that trip people up are *when you're allowed to cancel* and *which inputs are secretly forbidden*.

## The idea

You already know how to work with $\tfrac{6}{8}$: factor top and bottom into $\tfrac{2\cdot 3}{2\cdot 4}$, cancel the shared factor of $2$, get $\tfrac{3}{4}$. A rational expression works identically — the only change is that the "numbers" are polynomials, so **factoring is the whole game**. Factor top and bottom, cancel any factor they share, done.

But polynomials carry a hazard numbers don't: an expression like $\tfrac{1}{x-2}$ is meaningless when $x = 2$, because you'd be dividing by zero. Those forbidden inputs are the **excluded values**, and they are exactly the inputs a graph of the expression can never use — the domain restrictions from Lesson 2.1, showing up in a new costume. You spot them by asking one question: *where is the denominator zero?*

## The formal version

A **rational expression** is $\dfrac{P(x)}{Q(x)}$ where $P$ and $Q$ are polynomials and $Q(x) \neq 0$.

- **Excluded values / domain.** The domain is every real number *except* the roots of $Q$ — the $x$ that make the denominator zero. Find them from the *original* denominators, before any cancelling.
- **Simplify.** Factor $P$ and $Q$ completely, then cancel factors common to both:
$$\frac{P}{Q} = \frac{a\cdot c}{b\cdot c} = \frac{a}{b} \quad (c \neq 0).$$
  In words: you may cancel a shared **factor** (something multiplied), never a shared **term** (something added). Cancelling turns a factor into $1$ because $\tfrac{c}{c}=1$; there is no such rule for terms.
- **Multiply:** $\dfrac{A}{B}\cdot\dfrac{C}{D} = \dfrac{AC}{BD}$. **Divide:** $\dfrac{A}{B}\div\dfrac{C}{D} = \dfrac{A}{B}\cdot\dfrac{D}{C}$ — invert the divisor and multiply. Factor first, cancel across the product, then multiply what's left.
- **Add / subtract:** rewrite both fractions over a **common denominator** — usually the least common multiple (LCM) of the denominators — then combine numerators:
$$\frac{A}{D}\pm\frac{B}{D} = \frac{A\pm B}{D}.$$
- **Complex fraction:** a fraction with fractions stacked inside it. Clear the inner fractions (combine top into one fraction, combine bottom into one fraction) and divide.

## Concrete instance

Simplify $\dfrac{x^2 - 9}{x^2 - x - 6}$ and state the excluded values.

Factor top and bottom:
$$\frac{x^2-9}{x^2-x-6} = \frac{(x-3)(x+3)}{(x-3)(x+2)}.$$

The denominator is zero at $x = 3$ and $x = -2$, so **those are the excluded values** — read them off *now*, from the factored original. Cancel the shared factor $(x-3)$:
$$= \frac{x+3}{x+2}, \qquad x \neq 3,\ x \neq -2.$$

Note the excluded value $x=3$ survives even though its factor cancelled: the simplified form and the original agree everywhere *except* $x=3$, where the original was undefined. Cancelling cleans up the expression; it does not un-forbid an input.

## Worked examples

**Example 1 (mechanical — add two rational expressions).** Combine $\dfrac{2}{x} + \dfrac{3}{x+1}$.

The denominators $x$ and $x+1$ share no factor, so the LCM is their product $x(x+1)$. Rewrite each fraction over it:
$$\frac{2}{x}\cdot\frac{x+1}{x+1} + \frac{3}{x+1}\cdot\frac{x}{x} = \frac{2(x+1) + 3x}{x(x+1)} = \frac{2x + 2 + 3x}{x(x+1)} = \frac{5x+2}{x(x+1)}.$$

Excluded values: $x \neq 0$ and $x \neq -1$. Don't try to cancel the $x$ in the numerator against the $x$ in the denominator — the top is $5x+2$, a single term added, not a factor.

**Example 2 (why you'd care — a complex fraction that means something).** You drive a distance $d$ to work at speed $v_1$ and the same distance home at $v_2$. Your average speed for the round trip is total distance over total time:
$$\bar v = \frac{2d}{\dfrac{d}{v_1} + \dfrac{d}{v_2}}.$$

The $d$'s cancel immediately (average speed can't depend on how far you drove), leaving a complex fraction. Combine the stacked denominator over its common denominator $v_1 v_2$:
$$\frac{1}{v_1}+\frac{1}{v_2} = \frac{v_2 + v_1}{v_1 v_2},$$
then divide by inverting:
$$\bar v = \frac{2}{\dfrac{v_1+v_2}{v_1 v_2}} = 2\cdot\frac{v_1 v_2}{v_1 + v_2} = \frac{2v_1 v_2}{v_1 + v_2}.$$

That's the **harmonic mean** of the two speeds, and it explains a famous surprise: drive out at 30 and back at 60 and your average is $\tfrac{2\cdot 30\cdot 60}{90} = 40$, not $45$ — you spend more time at the slow speed, so it pulls the average down. Same algebra sets resistors in parallel and blended interest rates.

## Watch out

- **You might think you can cancel any matching pieces, but you can only cancel factors.** $\dfrac{x+3}{x}$ is *not* $\dfrac{3}{1}$ — the $x$ in the numerator is added, not multiplied, so it isn't a factor of the whole top. Cancelling is legal only after both parts are fully factored and the thing you strike is multiplying *everything* above and below.
- **You might think you can read excluded values off the simplified form, but you must use the original denominators.** In the Concrete instance, $x=3$ is excluded even though its factor vanished. Any denominator that appeared *anywhere* along the way — including the divisor in a division — contributes a restriction.
- **When subtracting, distribute the minus sign across the entire numerator.** $\dfrac{A}{D} - \dfrac{B}{D} = \dfrac{A - B}{D}$ means *every* term of $B$ flips sign. Forgetting this on $-(x-2) = -x+2$ is the single most common error in the whole topic.

## One-liner

> A rational expression is fraction arithmetic with polynomials: factor everything, cancel only shared factors, and never forget which inputs the denominator forbade.

## Problems

**P1 (🟢)** Simplify $\dfrac{x^2 - 25}{x^2 + x - 20}$ and state the excluded values.

**P2 (🟡)** Write $\dfrac{3}{x-2} - \dfrac{2}{x+1}$ as a single fraction and state the excluded values. (Mind the minus sign.)

**P3 (🔴, optional)** Simplify the complex fraction $\dfrac{\ \dfrac{1}{x} - \dfrac{1}{3}\ }{\,x - 3\,}$ and state the excluded values. This is the exact shape of the *difference quotient* you'll meet in `calc-refresher` — simplifying it is how a $\tfrac{0}{0}$ becomes a real slope.

<details>
<summary>Solutions</summary>

**P1** Factor: $\dfrac{(x-5)(x+5)}{(x+5)(x-4)}$. Denominator zero at $x = -5$ and $x = 4$, so those are excluded. Cancel $(x+5)$:
$$\frac{x-5}{x-4}, \qquad x \neq -5,\ x \neq 4.$$

**P2** Common denominator $(x-2)(x+1)$:
$$\frac{3(x+1)}{(x-2)(x+1)} - \frac{2(x-2)}{(x-2)(x+1)} = \frac{3(x+1) - 2(x-2)}{(x-2)(x+1)}.$$
Expand the numerator, distributing the minus: $3x + 3 - 2x + 4 = x + 7$. So
$$\frac{x+7}{(x-2)(x+1)}, \qquad x \neq 2,\ x \neq -1.$$
(If you got $x - 1$ up top, you forgot to flip the sign of the $-2$ inside $-2(x-2)$.)

**P3** Combine the top over $3x$: $\dfrac{1}{x} - \dfrac{1}{3} = \dfrac{3 - x}{3x}$. Now divide by $(x-3)$ — invert and multiply:
$$\frac{3-x}{3x} \cdot \frac{1}{x-3} = \frac{-(x-3)}{3x(x-3)} = \frac{-1}{3x},$$
using $3 - x = -(x-3)$ to cancel. Excluded values come from every denominator that appeared: $x \neq 0$ (the inner $\tfrac1x$) and $x \neq 3$ (the outer divisor). Final:
$$-\frac{1}{3x}, \qquad x \neq 0,\ x \neq 3.$$
The whole point: at $x=3$ the original was $\tfrac{0}{0}$, undefined — but the simplified form $-\tfrac{1}{3x}$ has a perfectly good value $-\tfrac19$ there, which is the limit calculus will assign. Cancelling revealed it.

</details>

## Flashback

**From Lesson 2.1 (The function concept):** Let $g(x) = \dfrac{x+4}{x^2 - 9}$. Evaluate $g(1)$, and state the domain of $g$ in words. (Hint: the excluded values *are* the domain restrictions.)

<details>
<summary>Solution</summary>

$g(1) = \dfrac{1+4}{1 - 9} = \dfrac{5}{-8} = -\dfrac{5}{8}$.

The denominator $x^2 - 9 = (x-3)(x+3)$ is zero at $x = 3$ and $x = -3$, and division by zero is undefined — so those two inputs are barred. The domain is **all real numbers except $x = 3$ and $x = -3$**. This is the same fact as "the rational expression has excluded values $\pm 3$": a domain restriction and an excluded value are two names for one idea.

</details>

## Connections

- **Backward:** this is Lesson 3.2 (factoring) doing all the heavy lifting — you can't simplify, find a common denominator, or spot excluded values without factoring first. It's also ordinary fraction arithmetic from `arithmetic-number-sense`, promoted from integers to polynomials; every rule here has a numeric twin you already trust.
- **Forward:** Lesson 4.3 divides radicals and rationalizes denominators using the same cancel-a-common-factor move. In `precalculus` and `calc-refresher`, these expressions become **rational functions** — the excluded values become vertical asymptotes and holes, and the difference quotient of P3 becomes the derivative.
- **Sideways (finance):** blended rates, present-value-per-period, and amortization formulas in `mathematical-finance` are rational expressions in the interest rate; simplifying and finding common denominators is exactly this lesson, with dollars attached.
