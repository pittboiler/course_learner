# Algebra I & II · Lesson 1.1: Variables & expressions

> ⏱ ~15 min · Module 1: Expressions & linear equations · Builds on: nothing (course start) · Unlocks: 1.2 (linear equations & inequalities)

## Why this matters

Every formula you'll ever use — a cost function in economics, a velocity in physics, a derivative in calculus — is an *expression*: a recipe written in letters instead of numbers. Before you can solve anything, graph anything, or optimize anything, you have to manipulate these recipes fluently: swap a number in for a letter, tidy them up, and reshape them without changing what they compute. This lesson is that fluency. It's the grammar; every later lesson is a sentence.

## The idea

A **variable** is just a box that holds a number you haven't pinned down yet. When someone writes $3x + 5$, read it as: *"whatever number $x$ turns out to be, triple it and add 5."* The letter isn't mysterious — it's a placeholder waiting for a value.

Two things you'll do constantly:

- **Evaluate** — you're told the number in the box, so you drop it in and compute. If $x = 4$, then $3x + 5 = 3(4) + 5 = 17$.
- **Simplify** — you *don't* know the number, but you can still tidy the recipe into a shorter equivalent one. $3x + 5x$ is $8x$ no matter what $x$ is, so why write the long version?

The whole game rests on one honest fact: **letters obey the exact same arithmetic rules as numbers.** You already know $3\text{ apples} + 5\text{ apples} = 8\text{ apples}$. Replace "apples" with $x$ and nothing changes. Algebra is arithmetic that hasn't been told the numbers yet.

## The formal version

An **expression** is a legal combination of numbers, variables, and operations (like $2x^2 - 3x + 7$). It has no equals sign — it's a value waiting to happen, not a claim.

**Evaluation by substitution:** to evaluate an expression at $x = a$, replace every occurrence of $x$ with $a$ and apply order of operations. *In words: put the number in the box and follow PEMDAS.*

**Like terms** are terms with the identical variable part — same letters raised to the same powers. $4x$ and $9x$ are like terms; $4x$ and $4x^2$ are *not* (different powers), and neither are $4x$ and $4y$ (different letters). You may add or subtract like terms by combining their **coefficients** (the number in front):

$$4x + 9x = (4+9)x = 13x.$$

*In words: same variable part → just add the numbers in front, leave the variable alone.*

**The distributive property** connects multiplication and addition:

$$a(b + c) = ab + ac.$$

*In words: a factor multiplying a sum hits every term inside.* Read left-to-right it's **expanding** (clearing parentheses); read right-to-left, $ab + ac = a(b+c)$, it's **factoring** (pulling out a common factor). Same law, two directions — you'll use both for the rest of the course.

**Order of operations** (PEMDAS) applies to expressions exactly as to numbers: **P**arentheses, **E**xponents, **M**ultiplication/**D**ivision (left to right), **A**ddition/**S**ubtraction (left to right).

## Concrete instance

One fully worked simplification that uses all three moves — evaluate, combine, distribute — in a single expression. Simplify

$$2(3x + 4) + 5x - 7,$$

then evaluate the result at $x = 2$.

**Step 1 — distribute** the $2$ across the parentheses: $2(3x) + 2(4) = 6x + 8$. The expression becomes

$$6x + 8 + 5x - 7.$$

**Step 2 — combine like terms.** Group the $x$-terms and the constants separately:

$$\underbrace{6x + 5x}_{11x} + \underbrace{8 - 7}_{1} = 11x + 1.$$

Note $6x$ and $5x$ are like terms (both plain $x$); the bare numbers $8$ and $-7$ are like terms with each other. You may **not** merge $11x$ and $1$ — different variable parts.

**Step 3 — evaluate** at $x = 2$: $11(2) + 1 = 22 + 1 = 23$.

Sanity check by evaluating the *original* at $x=2$: $2(3\cdot2+4) + 5\cdot2 - 7 = 2(10) + 10 - 7 = 20 + 3 = 23$. ✓ Same answer — simplifying never changes what an expression computes, only how it's written.

## Worked examples

**Example 1 (mechanical).** Simplify $5(2a - 3) - 4(a - 1)$.

Distribute *both* factors first — and mind the minus sign on the second one, it's really $+(-4)$:

$$5(2a) + 5(-3) + (-4)(a) + (-4)(-1) = 10a - 15 - 4a + 4.$$

Now combine like terms: $(10a - 4a) + (-15 + 4) = 6a - 11$.

The classic slip is distributing the $-4$ only onto the $a$ and forgetting it flips $-1$ into $+4$. The minus sign belongs to the whole factor.

**Example 2 (why you'd care).** A gym charges a 25-dollar sign-up fee plus 15 dollars per month. Your total cost after $m$ months is the expression

$$C = 25 + 15m.$$

This is a recipe, not a number — until you name a month. Evaluate at $m = 6$: $C = 25 + 15(6) = 25 + 90 = 115$ dollars for half a year. Change the plan to "one free month" and the cost becomes $25 + 15(m - 1)$; distribute and it simplifies to $25 + 15m - 15 = 15m + 10$. The distributive property just told you the free month is worth exactly 15 dollars off — you can *read* that from the simplified form. Turning a scenario into an expression, then reshaping it to expose a fact, is the core loop of every applied problem you'll meet.

## Watch out

- **You might think $3x$ means "3 and then $x$," but it means $3 \times x$** — multiplication. A coefficient sitting against a variable is always multiplying it. Likewise $x^2$ is $x \cdot x$, never $2x$.
- **You might think you can add $4x + 3$ into $7x$ — you can't.** Only *like* terms combine. $4x$ (a variable term) and $3$ (a constant) have different variable parts, so $4x + 3$ is already as simple as it gets. Same trap: $2x + 3x^2$ does **not** become $5x^3$ or $5x^2$; the powers differ, so nothing combines.
- **You might drop the sign when distributing a subtraction.** $-(x - 4)$ is $-x + 4$, not $-x - 4$: the leading minus is a factor of $-1$ that flips *every* term inside, including the $-4$.

## One-liner

> A variable is a number you haven't met yet; simplifying just rewrites the recipe — combine what's alike, distribute across what's grouped — without ever changing what it cooks.

## Problems

**P1 (🟢)** Simplify $7(x + 2) - 3(2x - 5)$, then evaluate your simplified expression at $x = 4$.

**P2 (🟡)** Evaluate $2x^2 - 3xy + y^2$ at $x = 3$ and $y = -2$. (Watch the order of operations and the signs.)

**P3 (🔴, optional)** A print shop charges a 40-dollar setup fee plus 2 dollars per shirt for the first order, and a returning customer skips setup but pays 3 dollars per shirt. Write an expression for each total on an order of $n$ shirts, then write and simplify an expression for how much *more* the returning order costs than the first-time order. For which order sizes is the returning order actually more expensive?

<details>
<summary>Solutions</summary>

**P1** Distribute both: $7(x) + 7(2) - 3(2x) - 3(-5) = 7x + 14 - 6x + 15$. Combine like terms: $(7x - 6x) + (14 + 15) = x + 29$. Evaluate at $x = 4$: $4 + 29 = \boxed{33}$.

**P2** Substitute $x = 3$, $y = -2$, handling exponents before multiplication:
$$2(3)^2 - 3(3)(-2) + (-2)^2 = 2(9) - 3(3)(-2) + 4 = 18 - (-18) + 4 = 18 + 18 + 4 = \boxed{40}.$$
The subtle bit: $-3xy$ with $y=-2$ becomes $-3(3)(-2) = +18$ (two negatives), and $(-2)^2 = +4$ because squaring kills the sign.

**P3** First-time total: $40 + 2n$. Returning total: $3n$. The difference (returning minus first-time) is
$$3n - (40 + 2n) = 3n - 40 - 2n = n - 40.$$
This is positive when $n - 40 > 0$, i.e. $n > 40$: the returning order costs more only once you print **more than 40 shirts**. Below that, the saved 40-dollar setup fee outweighs the extra 1 dollar per shirt. (Notice the expression $n - 40$ hands you the break-even point directly — a preview of solving in Lesson 1.2.)

</details>

## Flashback

*(None — course start.)*

## Connections

- **Backward (arithmetic):** combining like terms and distributing are the *same* moves you already did with pure numbers in `arithmetic-number-sense` — $3(10 + 2) = 30 + 6$ is the distributive property with the letters hidden. Algebra just leaves the numbers unnamed.
- **Forward (Lesson 1.2):** once you can *build* and *simplify* an expression, you can set two of them equal and solve for the unknown — exactly the "for which $n$?" question P3 hinted at. Simplifying is the first half of every equation you'll solve.
- **Forward (`precalculus`, `calc-refresher`):** these manipulations become invisible reflexes. When you compute a derivative, half the work is expanding and collecting like terms in the answer — botched algebra, not botched calculus, is what sinks most calculus problems.
