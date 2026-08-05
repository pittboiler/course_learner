# Arithmetic & Number Sense · Lesson 1.2: Order of operations

> ⏱ ~15 min · Module 1: Numbers & operations · Builds on: 1.1 (place value & the integers) · Unlocks: 1.3 (factors, primes & divisibility)

## Why this matters

Write $2 + 3 \times 4$ on a napkin and hand it to ten people. If some read left-to-right they get $20$; the rest get $14$. A written expression is worthless the moment it can mean two things — so mathematics fixes **one** reading by convention, and everyone (you, your calculator, a spreadsheet cell, every algebra course after this) obeys it. This lesson is that convention. Get it into your fingers now and every computation for the rest of the roadmap inherits it for free; get it wrong and the error hides quietly inside answers that look plausible.

## The idea

Think of an expression as a to-do list where some tasks must happen before others. The rule is that **the tighter an operation binds, the earlier you do it.** Multiplication binds tighter than addition, so it happens first — that's why $2 + 3 \times 4$ is $2 + 12 = 14$, not $5 \times 4$. Exponents bind tighter still. And when you *want* to override the default, you wrap the part that should go first in grouping symbols: $(2 + 3) \times 4$ forces the addition to the front of the queue.

That's the whole idea. Everything below is just the exact pecking order, plus the two places nearly everyone trips.

## The formal version

Evaluate any numeric expression in this order:

1. **Grouping symbols** — parentheses $(\;)$, brackets $[\;]$, and the invisible grouping of a fraction bar or a $\sqrt{\;}$. Work the innermost group first.
2. **Exponents** (powers and roots).
3. **Multiplication and division** — these share **one** tier; do them **left to right** as they appear.
4. **Addition and subtraction** — these share **one** tier; do them **left to right** as they appear.

In words: peel from the tightest-binding operation outward, and when two operations sit on the same tier, read like English — left to right.

The popular mnemonic is **PEMDAS** (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction). It's useful but *lies by omission*: the "MD" is one step and the "AS" is one step. PEMDAS lists M before D and A before S only because a line has to print left to right — it does **not** mean multiplication outranks division. See Watch out.

## Concrete instance

Evaluate $12 - 3 \times 2^2 + (8 - 6) \div 2$, one tier at a time.

- **Grouping** — clear the parentheses: $(8 - 6) = 2$, giving $\;12 - 3 \times 2^2 + 2 \div 2$.
- **Exponents** — $2^2 = 4$, giving $\;12 - 3 \times 4 + 2 \div 2$.
- **Multiplication and division, left to right** — $3 \times 4 = 12$ and $2 \div 2 = 1$, giving $\;12 - 12 + 1$.
- **Addition and subtraction, left to right** — $12 - 12 = 0$, then $0 + 1 = 1$.

$$12 - 3 \times 2^2 + (8 - 6) \div 2 = 1.$$

Notice the discipline: at each step you touch **only** the current tier, even when a lower-priority operation is sitting right next to it looking tempting.

## Worked examples

**Example 1 (mechanical).** Evaluate $7 + 6 \times (3^2 - 4) \div 2$.

- Grouping first, and inside the group exponents beat subtraction: $3^2 - 4 = 9 - 4 = 5$.
- Now $7 + 6 \times 5 \div 2$. The $\times$ and $\div$ share a tier, so go left to right: $6 \times 5 = 30$, then $30 \div 2 = 15$.
- Finally the addition: $7 + 15 = 22$.

So the value is $\boxed{22}$. (This is part (c) of the module's boss problem — you just solved it.)

**Example 2 (why you'd care).** You buy 3 coffees at 4 dollars each, hand over a 2-dollar coupon, and split the bill evenly between 2 people. The per-person cost is

$$
(3 \times 4 - 2) \div 2 = (12 - 2) \div 2 = 10 \div 2 = 5 \text{ dollars.}
$$

The parentheses are doing real work. Drop them and the convention reads the same symbols as $3 \times 4 - 2 \div 2 = 12 - 1 = 11$ — because without grouping, the $\div 2$ only ever applied to the $2$, not to the whole bill. Same numbers, same operations, wildly different answer. Grouping symbols are how you make the arithmetic mean what the situation means.

## Watch out

- **You might think M always comes before D (and A before S).** They don't — each pair shares a tier and runs **left to right**. So $8 \div 2 \times 4 = (8 \div 2) \times 4 = 4 \times 4 = 16$, *not* $8 \div 8 = 1$. Likewise $10 - 4 + 3 = (10 - 4) + 3 = 9$, *not* $10 - 7 = 3$. Doing all the additions first is the single most common slip.
- **A leading minus is looser than an exponent.** $-3^2$ means $-(3^2) = -9$, because the power grabs the $3$ before the sign gets involved. You only square the negative when parentheses say so: $(-3)^2 = 9$. This one bites constantly in algebra and physics — write the parentheses whenever you actually mean "square the negative."
- **A fraction bar groups silently.** $\dfrac{6 + 4}{2}$ means $(6+4) \div 2 = 5$, not $6 + 4 \div 2 = 8$. The bar acts like invisible parentheses around the whole top and the whole bottom — which is exactly why you must add parentheses when you retype a fraction on one line: `(6+4)/2`.

## One-liner

> Tightest binder first (groups, then powers), then $\times\div$ left-to-right, then $+-$ left-to-right — and a minus sign is looser than the exponent next to it.

## Problems

**P1 (🟢)** Evaluate $20 - 4 \times 3 + 8 \div 2$.

**P2 (🟡)** Evaluate $-2^4 + (-2)^2 - (6 - 10)$. (Mind the two different roles the minus sign plays, using the signed arithmetic from Lesson 1.1.)

**P3 (🔴, optional)** The expression $12 - 6 \div 2 + 1$ evaluates to $10$. Insert **one** pair of parentheses so that it instead equals $4$.

<details>
<summary>Solutions</summary>

**P1** No grouping or exponents, so hit the $\times\div$ tier first (left to right): $4 \times 3 = 12$ and $8 \div 2 = 4$. The expression becomes $20 - 12 + 4$. Now the $+-$ tier, left to right: $20 - 12 = 8$, then $8 + 4 = \boxed{12}$. (Trap dodged: doing $12 + 4$ first would give $20 - 16 = 4$, which is wrong.)

**P2** Exponents before the leading minus, so $-2^4 = -(2^4) = -16$, while the parentheses make $(-2)^2 = 4$. The grouping $(6 - 10) = -4$. Now $-16 + 4 - (-4)$. Subtracting a negative adds (Lesson 1.1): $-16 + 4 + 4 = \boxed{-8}$.

**P3** Put the parentheses around the leading subtraction: $(12 - 6) \div 2 + 1$. Then $12 - 6 = 6$, $6 \div 2 = 3$, and $3 + 1 = \boxed{4}$. The parentheses force the subtraction ahead of the division, which is exactly what changes the answer from $10$ to $4$.

</details>

## Flashback

*(None — course start; flashbacks begin at Lesson 1.3.)*

## Connections

- **Backward:** every step above leaned on signed arithmetic from [Lesson 1.1](01-01-place-value-and-integers.md) — subtracting a negative, squaring a negative, tracking a leading minus. Order of operations tells you *when* to apply those sign rules.
- **Forward:** this convention silently governs every computation in the rest of the roadmap — evaluating a prime factorization tree in [1.3](01-03-factors-primes-divisibility.md), simplifying a fraction, plugging numbers into a physics formula. In `algebra-foundations` the exact same tiers apply, only now with letters: $3x^2$ means $3 \cdot (x^2)$, never $(3x)^2$, for precisely the reason $-3^2 = -9$ here.
- **Sideways:** when you type `=2+3*4` into a spreadsheet cell or punch it into a calculator, it returns $14$, not $20$ — the parser is running this same tier order. Knowing the convention lets you predict the machine and, crucially, know where to add parentheses so it computes what you actually meant.
