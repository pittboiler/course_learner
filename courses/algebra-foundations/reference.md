# Algebra I & II · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Algebra is one skill wearing five costumes: **reshape an expression without
changing what it computes**, then read the answer off the new shape. Solving is
reshaping until the unknown stands alone; factoring is reshaping until a product
appears; completing the square is reshaping until the vertex is visible; a
logarithm is reshaping until the exponent comes down. Everything below is a
catalogue of legal reshapings and the shapes worth aiming for.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $3x$ | multiplication — the coefficient $3$ times $x$, never "3 then $x$" | [1.1](lessons/01-01-variables-and-expressions.md) |
| $a(b+c)$ | a factor multiplying a whole group — it hits **every** term inside | [1.1](lessons/01-01-variables-and-expressions.md) |
| $<, \le, >, \ge$ | one side is heavier; $\le$ and $\ge$ include the tie | [1.2](lessons/01-02-linear-equations-and-inequalities.md) |
| $[a, b]$ vs. $(a, b)$ | interval: square bracket **includes** the endpoint, parenthesis **excludes** it | [1.2](lessons/01-02-linear-equations-and-inequalities.md) |
| $f(x)$ | "apply the rule named $f$ to the input $x$" — $f$ is a machine's name, not a multiplier | [2.1](lessons/02-01-the-function-concept.md) |
| $(x, y)$ | ordered pair — horizontal address first, vertical second | [2.2](lessons/02-02-slope-and-lines.md) |
| $\Delta y$, $\Delta x$ | "change in" — the rise and the run between two points | [2.2](lessons/02-02-slope-and-lines.md) |
| $m$, $b$ | slope (rate of climb) and $y$-intercept (starting height) of a line | [2.2](lessons/02-02-slope-and-lines.md) |
| $\begin{cases}\cdots\end{cases}$ | a brace binding equations that must **all** hold at once | [2.3](lessons/02-03-systems-of-linear-equations.md) |
| $a_n x^n$ | the degree-$n$ term of a polynomial; $a_n$ is its coefficient | [3.1](lessons/03-01-exponents-and-polynomial-operations.md) |
| $a^{-n}$ | reciprocal, **not** a negative number: $2^{-2} = \tfrac14$ | [3.1](lessons/03-01-exponents-and-polynomial-operations.md) |
| $\deg f$ | the degree of $f$ — the polynomial's "size," and what division shrinks | [3.3](lessons/03-03-polynomial-division.md) |
| $f = dq + r$ | dividend $=$ divisor $\times$ quotient $+$ remainder | [3.3](lessons/03-03-polynomial-division.md) |
| $c$ in synthetic division | the **root**, not the divisor: for $x + 3$ you feed in $c = -3$ | [3.3](lessons/03-03-polynomial-division.md) |
| $\pm$ | both branches at once — undoing a square always forks | [4.1](lessons/04-01-quadratic-equations.md) |
| $\Delta = b^2 - 4ac$ | the discriminant (a *different* $\Delta$ from the "change in" of 2.2 — context decides) | [4.1](lessons/04-01-quadratic-equations.md) |
| $x \neq 2$ | an **excluded value**: an input the denominator forbids | [4.2](lessons/04-02-rational-expressions.md) |
| $\sqrt[n]{x}$, $x^{m/n}$ | the $n$-th root; the denominator picks the root, the numerator the power | [4.3](lessons/04-03-radicals-and-rational-exponents.md) |
| $\lvert x \rvert$ | magnitude with the sign thrown away — why $\sqrt{x^2} = \lvert x\rvert$ | [4.3](lessons/04-03-radicals-and-rational-exponents.md) |
| $b$ in $a\,b^x$ | the **growth factor** per step (a different $b$ from the intercept of 2.2) | [5.1](lessons/05-01-exponential-functions.md) |
| $e$ | the natural base, $\approx 2.71828$ — the factor continuous growth lands on | [5.1](lessons/05-01-exponential-functions.md) |
| $\log_b c$ | "$b$ to the what gives $c$?" — the exponent, extracted | [5.2](lessons/05-02-logarithms.md) |
| $\log c$, $\ln c$ | shorthand for base $10$ and base $e$ | [5.2](lessons/05-02-logarithms.md) |

## Definitions

### Expression

A recipe written in letters — a value waiting to happen. No equals sign, so it
claims nothing; it just computes once you name the letters. Example: $2x^2 - 3x + 7$.

*Introduced:* [1.1](lessons/01-01-variables-and-expressions.md)

### Like terms

Terms with the **identical variable part** — same letters, same powers. Only
these may be combined, by adding their coefficients.

$$4x + 9x = (4+9)x = 13x, \qquad 4x + 4x^2 \text{ combines into nothing}$$

*Introduced:* [1.1](lessons/01-01-variables-and-expressions.md)

### Linear equation

An equation where the unknown appears only to the first power — no $x^2$, no
$\sqrt{x}$, no $x$ downstairs. It has exactly one solution.

$$ax + b = 0 \ \ (a \neq 0) \quad\Longrightarrow\quad x = -\frac{b}{a}$$

*Introduced:* [1.2](lessons/01-02-linear-equations-and-inequalities.md)

### Interval notation

A compact name for a solution set on the number line: the two endpoints, with
brackets recording whether each one is in or out.

$$x > 3 \Leftrightarrow (3, \infty), \qquad x \le 5 \Leftrightarrow (-\infty, 5], \qquad -2 \le x < 4 \Leftrightarrow [-2, 4)$$

Infinity is a direction, never a reachable endpoint, so it always takes a parenthesis.

*Introduced:* [1.2](lessons/01-02-linear-equations-and-inequalities.md)

### Function

A reliable vending machine: every legal input produces **exactly one** output,
every time. Formally, a rule $f$ assigning to each $x$ in the domain $D$ one
value $f(x)$.

*Introduced:* [2.1](lessons/02-01-the-function-concept.md)

### Domain and range

**Domain** = the inputs the machine accepts. **Range** = the outputs it actually
produces. Find a domain by asking what would *break* the rule — a zero
denominator or an even root of a negative.

*Introduced:* [2.1](lessons/02-01-the-function-concept.md)

### Vertical line test

The picture version of "exactly one output": a graph is a function precisely when
**no vertical line crosses it more than once**. Two crossings = one input with two
answers.

*Introduced:* [2.1](lessons/02-01-the-function-concept.md)

### Slope

The constant rate at which a line climbs — output-units gained per input-unit
spent. Steeper is bigger; downhill is negative; flat is zero.

$$m = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}, \qquad x_1 \neq x_2$$

*Introduced:* [2.2](lessons/02-02-slope-and-lines.md)

### System of linear equations

Several conditions demanded at once. A solution is the **ordered pair** making
every equation true simultaneously — graphically, where the lines cross.

$$\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}$$

*Introduced:* [2.3](lessons/02-03-systems-of-linear-equations.md)

### Polynomial

A finite sum of whole-number powers of $x$ with number coefficients. Its
**degree** is the largest power present — the polynomial's "top speed," which
governs its shape for large $x$ — and the term carrying it is the **leading term**.

$$a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$$

*Introduced:* [3.1](lessons/03-01-exponents-and-polynomial-operations.md)

### Factoring

Un-multiplying: given the expanded form, recover the things that were multiplied.
Expanding is mechanical; factoring is a small search — which is exactly why it
feels harder. "Factor **completely**" means keep going until no factor splits further.

*Introduced:* [3.2](lessons/03-02-factoring.md)

### The division algorithm for polynomials

Integer division with **degree** playing the role of size. For any $f$ and any
$d \neq 0$ there are **unique** $q$ (quotient) and $r$ (remainder) with

$$f(x) = d(x)\,q(x) + r(x), \qquad r = 0 \ \text{ or } \ \deg r < \deg d.$$

The degree condition is what makes the answer unique — it says the leftover is
"too small to divide again," exactly as $17 = 5\cdot 3 + 2$ with $2 < 5$. Divided
through by $d$ it becomes the form you use downstream:

$$\frac{f(x)}{d(x)} = q(x) + \frac{r(x)}{d(x)}$$

— any fraction of polynomials is a polynomial plus a **proper** fraction (top
degree strictly below bottom degree).

*Introduced:* [3.3](lessons/03-03-polynomial-division.md)

### Remainder and factor theorems

$$f(x) = (x-c)q(x) + r \ \Longrightarrow\ f(c) = r$$

**Remainder theorem:** to get the remainder of a division by $x - c$, don't
divide — evaluate $f(c)$. **Factor theorem** is the $r = 0$ case:

$$(x-c) \text{ is a factor of } f(x) \iff f(c) = 0.$$

Roots and linear factors are the same information. Any *integer* root of a
polynomial with integer coefficients must divide the constant term — that's the
short candidate list to test.

*Introduced:* [3.3](lessons/03-03-polynomial-division.md)

### Quadratic equation

The first equation whose graph curves. Its parabola can cross the horizontal axis
twice, graze it once, or miss entirely — which is why it has two, one, or zero
real roots and never three.

$$ax^2 + bx + c = 0, \qquad a \neq 0$$

*Introduced:* [4.1](lessons/04-01-quadratic-equations.md)

### Zero-product property

Zero is the only number that forces one of its makers to vanish — which is the
entire reason factoring solves equations.

$$PQ = 0 \iff P = 0 \ \text{ or } \ Q = 0$$

Works against **zero and nothing else**: move everything to one side first.

*Introduced:* [4.1](lessons/04-01-quadratic-equations.md)

### Discriminant

A one-line reality check that counts your solutions *before* you commit to
finding them — the quantity living under the square root.

$$\Delta = b^2 - 4ac$$

*Introduced:* [4.1](lessons/04-01-quadratic-equations.md)

### Vertex form

The shape of a quadratic that makes its peak or valley readable at a glance,
because a square is smallest exactly when its inside is zero.

$$y = a(x-h)^2 + k \quad\Longrightarrow\quad \text{vertex at } (h,\, k)$$

*Introduced:* [4.1](lessons/04-01-quadratic-equations.md)

### Rational expression

A fraction whose numerator and denominator are polynomials. Grade-school fraction
arithmetic, with $x$'s hiding inside — so **factoring is the whole game**.

$$\frac{P(x)}{Q(x)}, \qquad Q(x) \neq 0$$

*Introduced:* [4.2](lessons/04-02-rational-expressions.md)

### Excluded values

The inputs that make a denominator zero — forbidden, and read off the **original**
denominators before any cancelling. Same fact as a domain restriction, new costume.

*Introduced:* [4.2](lessons/04-02-rational-expressions.md)

### Rational exponent

A root *is* a fractional power — the denominator says which root, the numerator
says which power. Not a new rule: it's the only meaning consistent with the
exponent laws you already have, since $\left(x^{1/2}\right)^2 = x$.

$$x^{1/n} = \sqrt[n]{x}, \qquad x^{m/n} = \sqrt[n]{x^m} = \left(\sqrt[n]{x}\right)^m$$

*Introduced:* [4.3](lessons/04-03-radicals-and-rational-exponents.md)

### Exponential function

Growth that **multiplies** by a fixed factor each step, instead of adding a fixed
amount. Its fingerprint in a table is a constant *ratio* between consecutive values.

$$f(x) = a\,b^x, \qquad a \neq 0,\ b > 0,\ b \neq 1$$

Here $a = f(0)$ is the initial value and $b$ is the growth factor: $b > 1$ grows,
$0 < b < 1$ decays.

*Introduced:* [5.1](lessons/05-01-exponential-functions.md)

### Logarithm

Exponentiation asked backwards: $\log_b c$ **is** the exponent that turns $b$ into
$c$. You already compute these whenever you ask "$b$ to the what?"

$$x = \log_b c \quad\Longleftrightarrow\quad b^x = c \qquad (b > 0,\ b \neq 1,\ c > 0)$$

Only positive $c$ — a positive base to any real power stays positive, so
$\log_b 0$ and logs of negatives do not exist.

*Introduced:* [5.2](lessons/05-02-logarithms.md)

## Formulas and rules

### Reshaping an expression

$$a(b+c) = ab + ac \qquad \text{(left to right: expand · right to left: factor)}$$

One law, two directions — it powers every step of this course. A leading minus is
a factor of $-1$ that flips **every** term inside: $-(x-4) = -x + 4$.

Order of operations: **P**arentheses → **E**xponents → **M**ultiplication and
**D**ivision (one tier, left to right) → **A**ddition and **S**ubtraction (one
tier, left to right).

*From* [1.1](lessons/01-01-variables-and-expressions.md)

### Solving equations and inequalities

The legal moves — they preserve the solution set:

| Move | Equation | Inequality |
|---|---|---|
| add / subtract the same quantity | fine | fine, sign unchanged |
| multiply / divide by a **positive** | fine | fine, sign unchanged |
| multiply / divide by a **negative** | fine | **sign flips**: $a < b,\ c<0 \Rightarrow ac > bc$ |
| multiply / divide by zero | illegal | illegal |

"Do the same to both sides" means the **whole side**, every term. Peel operations
off in reverse order (undo the $+7$ before the $\times 3$), then substitute back
into the *original* to check — two seconds of insurance against a dropped sign.

*From* [1.2](lessons/01-02-linear-equations-and-inequalities.md)

### Forms of a line

| Form | Written | Use it when |
|---|---|---|
| slope-intercept | $y = mx + b$ | you want the tilt and starting height at a glance |
| point-slope | $y - y_1 = m(x - x_1)$ | you know a slope and any one point — no hunting for $b$ |
| standard | $Ax + By = C$ | the equation arrives from a constraint; rearrange to read $m$ |
| horizontal | $y = k$ | $m = 0$ |
| vertical | $x = k$ | $m$ **undefined**, and not a function |

Intercepts: set $x = 0$ for the $y$-intercept, set $y = 0$ for the $x$-intercept.
Two lines are **parallel** exactly when their slopes match; the standard
companion fact (not drilled in the lessons) is that they are **perpendicular**
when $m_1 m_2 = -1$ — negative reciprocals.

*From* [2.2](lessons/02-02-slope-and-lines.md)

### Systems: how many solutions

Put both equations in $y = mx + b$ form and just compare.

| Slopes | Intercepts | Picture | Solutions |
|---|---|---|---|
| different | anything | lines cross once | **exactly one** |
| same | different | parallel, never meet | **none** (inconsistent) |
| same | same | one line in disguise | **infinitely many** |

Two hand tools, both of which kill a variable: **substitution** (solve one
equation for one variable, replace it in the other) and **elimination** (scale so
one variable has equal-and-opposite coefficients, then add). Collapsing to a
falsehood like $0 = 5$ means *no solution*; collapsing to $0 = 0$ means
*infinitely many*.

*From* [2.3](lessons/02-03-systems-of-linear-equations.md)

### Exponent laws

Every one of these is "write out the copies and count them."

| Law | Statement | In words |
|---|---|---|
| product | $a^m a^n = a^{m+n}$ | multiplying **adds** exponents |
| quotient | $\dfrac{a^m}{a^n} = a^{m-n}$ | dividing **subtracts** |
| power | $(a^m)^n = a^{mn}$ | nesting **multiplies** |
| product to a power | $(ab)^n = a^n b^n$ | a power distributes over a **product** (never a sum) |
| zero | $a^0 = 1 \ (a \neq 0)$ | forced by the quotient law at $m = n$ |
| negative | $a^{-n} = \dfrac{1}{a^n}$ | reciprocal, not a sign |

These hold verbatim for **rational** exponents too, which is what makes radicals
easy: rewrite every root as a fractional power first, then it's just adding
fractions in the exponent.

*From* [3.1](lessons/03-01-exponents-and-polynomial-operations.md) *and* [4.3](lessons/04-03-radicals-and-rational-exponents.md)

### Special products and factoring patterns

Read left to right you're expanding; right to left you're factoring. Same table.

| Pattern | Identity |
|---|---|
| square of a sum | $(a+b)^2 = a^2 + 2ab + b^2$ |
| square of a difference | $(a-b)^2 = a^2 - 2ab + b^2$ |
| difference of squares | $a^2 - b^2 = (a+b)(a-b)$ |
| sum of squares | $a^2 + b^2$ — **does not factor** over the reals |
| common factor (GCF) | $ab + ac = a(b+c)$ |
| grouping (four terms) | $xy + xz + wy + wz = (x+w)(y+z)$ |
| difference of cubes | $a^3 - b^3 = (a-b)(a^2+ab+b^2)$ |
| sum of cubes | $a^3 + b^3 = (a+b)(a^2-ab+b^2)$ |

(The two cube patterns are the standard third page of this table; the lessons
don't drill them, but they're the next thing you'll be handed.)

**Trinomials.** For a **monic** $x^2 + bx + c$: find two numbers that *multiply to
$c$* and *add to $b$*, then $x^2+bx+c = (x+m)(x+n)$. For a **general**
$ax^2+bx+c$, run the **ac-method**: find $m, n$ with $mn = ac$ and $m+n = b$,
split the middle term into $mx + nx$, then factor by grouping.

**Sign logic** for $x^2 + bx + c$: if $c > 0$ both numbers carry $b$'s sign; if
$c < 0$ they have opposite signs and the bigger-magnitude one takes $b$'s sign.

**Order of attack:** GCF first, always → then match a pattern → then trinomial
search → then verify by re-multiplying. The answer key checks itself.

*From* [3.1](lessons/03-01-exponents-and-polynomial-operations.md) *and* [3.2](lessons/03-02-factoring.md)

### Dividing polynomials

**Long division** (any divisor). Write both in descending degree order, inserting
a **zero term for every missing degree**, then loop:

1. **Divide** the leading term of what's left by the divisor's leading term → next quotient term.
2. **Multiply** that term back through the *whole* divisor.
3. **Subtract** the product (the minus hits every term) and bring down the next term.
4. **Stop** when the leftover's degree drops below the divisor's — that leftover is $r$.

$$2x^3 - 3x + 5 = (x-2)(2x^2+4x+5) + 15$$

**Synthetic division** (divisor $x - c$ **only** — monic and linear). Drop the
symbols and push coefficients: write $c$, then the dividend's coefficients *with
placeholder zeros*; bring the first one down; repeatedly multiply by $c$ and add
to the next column. The last number is $r$; the rest are the quotient's
coefficients, one degree lower.

$$\begin{array}{r|rrrr} 2 & 2 & 0 & -3 & 5 \\ & & 4 & 8 & 10 \\ \hline & 2 & 4 & 5 & \boxed{15} \end{array}$$

**Two free checks on any division:** re-multiply $dq + r$, and (for $x-c$) confirm
$r = f(c)$ by the remainder theorem.

**What it's for:** factoring past degree 2 (find a root, divide it out, factor
what's left); turning an improper fraction into polynomial $+$ proper fraction —
which is the **slant asymptote** in [precalculus 2.2](../precalculus/lessons/02-02-rational-functions.md)
and the mandatory first step before partial fractions in
[calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md).

*From* [3.3](lessons/03-03-polynomial-division.md)

### Solving a quadratic — three routes

| Method | How | Best when |
|---|---|---|
| factoring + zero-product | write $= 0$, factor, set each factor to zero | the numbers are friendly |
| completing the square | $x^2 + bx + c = \left(x + \tfrac{b}{2}\right)^2 + \left(c - \tfrac{b^2}{4}\right)$ | you want the **vertex**, not just the roots |
| quadratic formula | see below | always; no thinking required |

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

The roots sit symmetrically about the axis of symmetry $x = -\dfrac{b}{2a}$,
stepped left and right by $\dfrac{\sqrt{\Delta}}{2a}$ — and the vertex sits on
that axis. The formula is nothing but completing the square done once, in general.

| Discriminant | Roots | Picture |
|---|---|---|
| $\Delta > 0$ | two distinct real | the U crosses twice |
| $\Delta = 0$ | one repeated real | the U grazes the axis |
| $\Delta < 0$ | no **real** roots | the U floats clear |

Free check on any pair of roots: $r_1 + r_2 = -\dfrac{b}{a}$ and
$r_1 r_2 = \dfrac{c}{a}$. If $a \neq 1$, factor $a$ out of the $x^2$ and $x$ terms
*before* completing the square.

*From* [4.1](lessons/04-01-quadratic-equations.md)

### Rational expressions

Factor everything first; nothing else works until you do.

$$\frac{a\cdot c}{b\cdot c} = \frac{a}{b} \ (c \neq 0), \qquad \frac{A}{B}\cdot\frac{C}{D} = \frac{AC}{BD}, \qquad \frac{A}{B}\div\frac{C}{D} = \frac{A}{B}\cdot\frac{D}{C}$$

$$\frac{A}{D} \pm \frac{B}{D} = \frac{A \pm B}{D} \qquad \text{(get there via the LCM of the denominators)}$$

You may cancel a shared **factor** (something multiplied through), never a shared
**term** (something added). A **complex fraction** — fractions stacked inside a
fraction — is cleared by combining top into one fraction, bottom into one
fraction, then inverting and multiplying. Collect excluded values from **every**
denominator that ever appeared, including a divisor.

*From* [4.2](lessons/04-02-rational-expressions.md)

### Radicals

$$\sqrt[n]{xy} = \sqrt[n]{x}\,\sqrt[n]{y}, \qquad \sqrt[n]{\tfrac{x}{y}} = \frac{\sqrt[n]{x}}{\sqrt[n]{y}}, \qquad \sqrt{x^2} = \lvert x\rvert$$

Roots distribute over products and quotients — **never over sums**.

- **Simplify:** factor out the largest perfect $n$-th power hiding inside and walk
  it out the door. $\sqrt{72} = \sqrt{36\cdot 2} = 6\sqrt2$; $\sqrt{50x^3} = 5x\sqrt{2x}$ for $x \ge 0$.
- **Rationalize a one-term denominator:** multiply top and bottom by the radical.
  $\dfrac{1}{\sqrt2} = \dfrac{\sqrt2}{2}$.
- **Rationalize a two-term denominator:** multiply by the **conjugate**, so the
  difference of squares kills both roots.
  $\dfrac{1}{\sqrt5-\sqrt2} = \dfrac{\sqrt5+\sqrt2}{3}$.

*From* [4.3](lessons/04-03-radicals-and-rational-exponents.md)

### Exponential models

$$f(x) = a\,b^x, \qquad \frac{f(x+1)}{f(x)} = b \ \text{ for every } x$$

| From the words | To the base |
|---|---|
| grows at rate $r$ per step | $b = 1 + r$ (5 percent growth $\Rightarrow b = 1.05$) |
| decays at rate $r$ per step | $b = 1 - r$ (20 percent loss $\Rightarrow b = 0.80$) |
| continuous growth at rate $k$ | $f(x) = a\,e^{kx}$, i.e. $b = e^k$ |
| doubles every $T$ | $f(t) = a\cdot 2^{t/T}$ |
| half-life $T$ | $f(t) = a\left(\tfrac12\right)^{t/T}$ |

**Which model is it?** Constant *difference* between successive values ⇒ linear.
Constant *ratio* ⇒ exponential. Only the ratio test separates an exponential from
a steep line.

*From* [5.1](lessons/05-01-exponential-functions.md)

### Log laws

Each one mirrors an exponent law — logs demote every operation one rung.

| Law | Statement |
|---|---|
| product | $\log_b(MN) = \log_b M + \log_b N$ |
| quotient | $\log_b\!\left(\tfrac{M}{N}\right) = \log_b M - \log_b N$ |
| power | $\log_b(M^p) = p\,\log_b M$ |
| change of base | $\log_b c = \dfrac{\ln c}{\ln b} = \dfrac{\log c}{\log b}$ |

Values that fall straight out of the definition, worth knowing cold:

$$\log_b 1 = 0, \qquad \log_b b = 1, \qquad \log_b(b^x) = x, \qquad b^{\log_b x} = x \ (x>0)$$

There is **no** law for $\log_b(M+N)$.

*From* [5.2](lessons/05-02-logarithms.md)

### Solving for an exponent

The one recipe behind every doubling-time, half-life, and "how long until…"
question. Isolate the power, take a log of both sides, and let the power law pry
the unknown down into an ordinary coefficient.

$$b^t = c \;\Longrightarrow\; t\ln b = \ln c \;\Longrightarrow\; t = \frac{\ln c}{\ln b}$$

Doubling time is $\dfrac{\ln 2}{\ln b}$ and half-life is $\dfrac{\ln 0.5}{\ln b}$
— note the initial amount $a$ cancels before any log is taken, which is exactly
why both are constants of the process, independent of scale. For decay both logs
come out negative and the negatives cancel; a negative half-life means you
divided the wrong way.

*From* [5.1](lessons/05-01-exponential-functions.md) *and* [5.2](lessons/05-02-logarithms.md)

## Assumed, not taught here

This is the bottom of the curriculum — almost everything it uses, it derives.
`roadmap.json` lists **no** formal prereqs for this course. What it does lean on
is ordinary number sense, which `arithmetic-number-sense` covers (Lessons
[1.1](lessons/01-01-variables-and-expressions.md) and
[4.2](lessons/04-02-rational-expressions.md) name that course explicitly).

| Fact | Where it's taught |
|---|---|
| Signed arithmetic: two negatives multiply to a positive, subtracting a negative adds | [arithmetic 1.1](../arithmetic-number-sense/lessons/01-01-place-value-and-integers.md) |
| Absolute value as distance from zero | [arithmetic 1.1](../arithmetic-number-sense/lessons/01-01-place-value-and-integers.md) |
| Order of operations — including that M/D and A/S are each *one* tier | [arithmetic 1.2](../arithmetic-number-sense/lessons/01-02-order-of-operations.md) |
| Factor pairs, primes, and the GCF — the search behind every factoring problem | [arithmetic 1.3](../arithmetic-number-sense/lessons/01-03-factors-primes-divisibility.md) |
| Fraction arithmetic: LCM, common denominators, invert-and-multiply — the numeric twin of every rule in 4.2 | [arithmetic 2.1](../arithmetic-number-sense/lessons/02-01-fractions.md) |
| Decimal ↔ fraction conversion (used silently all over Modules 4–5) | [arithmetic 2.2](../arithmetic-number-sense/lessons/02-02-decimals-and-conversions.md) |
| Percent as a decimal multiplier — what turns "5 percent growth" into $b = 1.05$ | [arithmetic 2.3](../arithmetic-number-sense/lessons/02-03-ratios-proportions-percents.md) |
| Rounding and order of magnitude, for reading approximate roots and log answers | [arithmetic 3.1](../arithmetic-number-sense/lessons/03-01-rounding-and-estimation.md) |
| The sign / size / units sanity check run after every answer here | [arithmetic 3.2](../arithmetic-number-sense/lessons/03-02-mental-math-and-sanity-checking.md) |

Two things this course *states* without deriving, whose derivations live
**downstream** rather than in a prerequisite — so there is nothing to look up yet:

| Stated here | Derived later |
|---|---|
| $e \approx 2.71828$ as the continuous-growth base ([5.1](lessons/05-01-exponential-functions.md)) | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) gives it as the limit of ever-finer compounding; [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) explains why it's "natural" ($e^x$ is its own derivative) |
| What happens when $\Delta < 0$ — the roots that aren't real ([4.1](lessons/04-01-quadratic-equations.md)) | [precalculus 2.4](../precalculus/lessons/02-04-complex-numbers.md) introduces $i$ and shows the roots arriving as a conjugate pair; [complex-analysis 1.1](../complex-analysis/lessons/01-01-complex-numbers-geometry.md) goes deeper at Tier 2. Within this course, "no real solution" stays the complete answer |

## Pitfalls

### Signs and grouping

- A leading minus is a factor of $-1$ and flips *every* term inside: $-(x-4) = -x+4$, not $-x-4$. *([1.1](lessons/01-01-variables-and-expressions.md), [4.2](lessons/04-02-rational-expressions.md))*
- $3x$ means $3 \times x$ and $x^2$ means $x\cdot x$ — never "3 then $x$", never $2x$. *([1.1](lessons/01-01-variables-and-expressions.md))*
- Exponents bind tighter than coefficients and minus signs: $3x^2 = 3(x^2) \neq (3x)^2$, and $-x^2 = -(x^2)$ while $(-x)^2 = x^2$. *([3.1](lessons/03-01-exponents-and-polynomial-operations.md))*
- Only **like** terms combine: $4x + 3$ is already simplest, and $2x + 3x^2$ is not $5x^2$. *([1.1](lessons/01-01-variables-and-expressions.md))*

### Nothing distributes over a sum except multiplication

- $(a+b)^2 \neq a^2+b^2$ — the missing $2ab$ is the single most common algebra error there is. *([3.1](lessons/03-01-exponents-and-polynomial-operations.md))*
- $\sqrt{a+b} \neq \sqrt a + \sqrt b$ — the same trap, since a root is just the power $\tfrac12$: $\sqrt{9+16} = 5$, not $7$. *([4.3](lessons/04-03-radicals-and-rational-exponents.md))*
- $\log_b(M+N) \neq \log_b M + \log_b N$ — the product law converts a *product* into a sum; a genuine sum inside stays stuck. *([5.2](lessons/05-02-logarithms.md))*
- $a^2 + b^2$ does not factor over the reals. Only the *difference* of squares splits. *([3.2](lessons/03-02-factoring.md))*

### Equations and inequalities

- Only multiplying or dividing by a **negative** flips an inequality sign — adding or subtracting a negative never does. Get it wrong and the answer isn't a little off, it's reversed. *([1.2](lessons/01-02-linear-equations-and-inequalities.md))*
- "Do the same to both sides" means the whole side, every term — not one term on each. *([1.2](lessons/01-02-linear-equations-and-inequalities.md))*
- Brackets and parentheses aren't interchangeable: $[3, \infty)$, never $[3, \infty]$. *([1.2](lessons/01-02-linear-equations-and-inequalities.md))*
- The zero-product property works against **zero only**. From $(x-2)(x-3) = 6$ you may not write $x-2 = 6$. *([4.1](lessons/04-01-quadratic-equations.md))*
- Undoing a square forks: $x^2 = 9$ gives $x = \pm3$. Don't drop the $\pm$. *([4.1](lessons/04-01-quadratic-equations.md))*
- A system's answer is a **pair**. "$x = 3$" is half an answer. *([2.3](lessons/02-03-systems-of-linear-equations.md))*
- $0 = 5$ or $0 = 0$ falling out of a system is not an error — it's the system reporting "parallel" or "same line." *([2.3](lessons/02-03-systems-of-linear-equations.md))*
- A graph *locates* an intersection; it never *certifies* it. An eyeballed $(2,3)$ could be $(2.1, 2.9)$ — finish with substitution or elimination. *([2.3](lessons/02-03-systems-of-linear-equations.md))*

### Functions and lines

- $f(x)$ is not $f$ times $x$, so $f(a+b) \neq f\cdot a + f\cdot b$ — you substitute the whole input. *([2.1](lessons/02-01-the-function-concept.md))*
- Not every equation in $x$ and $y$ is a function: $x = y^2$ gives two outputs at $x = 4$ and fails the vertical line test. *([2.1](lessons/02-01-the-function-concept.md))*
- A hole in the domain is a feature, not a mistake — the domain is part of the function's definition. *([2.1](lessons/02-01-the-function-concept.md))*
- Subtract coordinates in the **same order** top and bottom; $\frac{y_2-y_1}{x_1-x_2}$ silently flips the sign. *([2.2](lessons/02-02-slope-and-lines.md))*
- A vertical line has **undefined** slope (run of zero) and isn't a function; a horizontal line is the tame case, $m = 0$. *([2.2](lessons/02-02-slope-and-lines.md))*
- Read $b$ off slope-intercept form only once $y$ is **isolated**: from $2y = 6x + 8$ the intercept is $4$, not $8$. *([2.2](lessons/02-02-slope-and-lines.md))*

### Exponents, factoring, radicals

- A negative exponent means reciprocal, not a negative value: $2^{-2} = \tfrac14$. *([3.1](lessons/03-01-exponents-and-polynomial-operations.md))*
- "Factor completely" means re-scan the parentheses: $2x^2 - 8 = 2(x^2-4)$ is unfinished — it's $2(x-2)(x+2)$. *([3.2](lessons/03-02-factoring.md))*
- Trinomial signs carry all the information; get the sign logic wrong and re-multiplying will catch you — so always re-multiply. *([3.2](lessons/03-02-factoring.md))*
- Never skip a missing degree when dividing: $x^3 + 1$ is $x^3 + 0x^2 + 0x + 1$. Drop the placeholders and every column shifts one place. *([3.3](lessons/03-03-polynomial-division.md))*
- Step 3 of long division is a **subtraction**, and the minus hits every term of the product — $(4x^2 - 3x) - (4x^2 - 8x) = +5x$, not $-11x$. Most common error in the algorithm. *([3.3](lessons/03-03-polynomial-division.md))*
- Synthetic division only handles a **monic linear** divisor $x - c$, and you feed it $c$, not the divisor. For $2x - 3$ or anything quadratic, long-divide. *([3.3](lessons/03-03-polynomial-division.md))*
- Only "half of $b$, squared" completes a square, and if $a \neq 1$ you must factor $a$ out first. *([4.1](lessons/04-01-quadratic-equations.md))*
- $\sqrt{x^2} = \lvert x\rvert$, not $x$ — the principal root is never negative. This is where the $\pm$ in the quadratic formula comes from. *([4.3](lessons/04-03-radicals-and-rational-exponents.md))*
- A root left in a denominator isn't *wrong*, but rationalizing is the convention that makes answers comparable and addable. *([4.3](lessons/04-03-radicals-and-rational-exponents.md))*

### Fractions of polynomials

- Cancel **factors**, never **terms**: $\dfrac{x+3}{x} \neq 3$. *([4.2](lessons/04-02-rational-expressions.md))*
- Read excluded values off the **original** denominators — cancelling a factor cleans the expression but does not un-forbid the input. *([4.2](lessons/04-02-rational-expressions.md))*
- When subtracting fractions, the minus sign hits *every* term of the numerator: $-(x-2) = -x+2$. *([4.2](lessons/04-02-rational-expressions.md))*

### Growth and logs

- $x^2$ and $2^x$ are opposites, not variants: variable in the **base** is a power function, variable in the **exponent** is exponential. *([5.1](lessons/05-01-exponential-functions.md))*
- "Grows 5 percent" means $b = 1.05$, not $0.05$ — dropping the $1$ throws away the money you already had. "Loses 5 percent" is $0.95$, not $-0.05$; a negative base isn't even legal. *([5.1](lessons/05-01-exponential-functions.md))*
- Numbers rising fast aren't automatically exponential — run the test: constant difference ⇒ linear, constant ratio ⇒ exponential. *([5.1](lessons/05-01-exponential-functions.md))*
- $\dfrac{\ln A}{\ln B}$ is change-of-base, **not** $\ln\dfrac{A}{B}$ — the quotient law gives a *difference*, $\ln A - \ln B$. *([5.2](lessons/05-02-logarithms.md))*
- Logs eat positives only. Discard any solution candidate that would force a log of zero or a negative. *([5.2](lessons/05-02-logarithms.md))*
