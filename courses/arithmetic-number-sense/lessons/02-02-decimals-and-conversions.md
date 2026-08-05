# Arithmetic & Number Sense · Lesson 2.2: Decimals & conversions

> ⏱ ~15 min · Module 2: Fractions, decimals, ratios & percents · Builds on: 2.1 (fractions) · Unlocks: 2.3 (ratios, proportions & percents)

## Why this matters

Every price, measurement, and lab reading you'll ever touch is a decimal, and half the errors people make with them are decimal-point slips — the kind that turn 4 dollars into 40. Decimals are also the bridge between the fractions of 2.1 and the percents of 2.3: once you can move fluently among the three, a "37.5% discount," "$\tfrac{3}{8}$ off," and "multiply by 0.375" all read as the *same* instruction. That fluency is the difference between reaching for a calculator and just knowing.

## The idea

A decimal is nothing new — it's a fraction whose denominator is a power of ten, written without the fraction bar. The digits after the point are just tenths, hundredths, thousandths: each step right divides the place value by 10, exactly mirroring how each step left multiplies it by 10. So $0.7$ *means* $\tfrac{7}{10}$ and $0.75$ means $\tfrac{75}{100}$. Once you see the hidden denominator, every rule for computing with decimals is just bookkeeping to keep those powers of ten lined up.

The one genuinely new fact: some fractions land exactly on a power-of-ten grid ($\tfrac{3}{8} = 0.375$, done) and some never do ($\tfrac{1}{3} = 0.333\ldots$, forever). Which happens is decided entirely by the prime factors hiding in the denominator.

## The formal version

A finite decimal with $k$ digits after the point equals an integer over $10^k$:

$$0.d_1 d_2 \ldots d_k = \frac{d_1 d_2 \ldots d_k}{10^k}.$$

In words: read the digits after the point as a whole number, then divide by 1 followed by as many zeros as there are digits. So $0.406 = \tfrac{406}{1000}$.

**Terminating vs. repeating.** Reduce a fraction to lowest terms. Then:

$$\frac{a}{b}\ (\text{lowest terms}) \text{ terminates} \iff b = 2^m 5^n \text{ for some } m, n \ge 0.$$

In words: a fraction gives a finite decimal exactly when its reduced denominator is built only from the primes 2 and 5 — the primes that divide 10. Any other prime factor (3, 7, 11, …) forces the decimal to repeat forever. This is why $\tfrac{3}{8}$ (denominator $2^3$) terminates but $\tfrac{5}{12}$ (denominator $2^2\cdot 3$) does not — that leftover 3 is fatal.

**Percent** is just a third costume for the same number: "per hundred," i.e. a decimal scaled by 100. $0.375 = 37.5\% = \tfrac{3}{8}$. (More in 2.3.)

## Concrete instance

Reading $3.406$ by place value, digit by digit:

$$3.406 \;=\; \underbrace{3}_{\text{ones}} \;+\; \underbrace{\tfrac{4}{10}}_{\text{tenths}} \;+\; \underbrace{\tfrac{0}{100}}_{\text{hundredths}} \;+\; \underbrace{\tfrac{6}{1000}}_{\text{thousandths}}.$$

The trailing digits are literally $\tfrac{4}{10} + \tfrac{6}{1000} = \tfrac{400}{1000} + \tfrac{6}{1000} = \tfrac{406}{1000}$, so $3.406 = 3\tfrac{406}{1000}$. Notice the $0$ in the hundredths place is not decoration — it *holds* the 6 in the thousandths slot. Drop it and you'd have $3.46$, a different number ten times larger in that tail.

## Worked examples

**Example 1 (mechanical — the three operations).**

*Add* $12.4 + 3.75$. Line up the decimal points and pad with a zero so the columns match, then add as usual:

$$\begin{aligned} 12.40 \\ +\;\;3.75 \\ \hline 16.15 \end{aligned}$$

The point in the answer sits directly below the points above it. Aligning points (not the right-hand ends) is the whole game for $+$ and $-$.

*Multiply* $1.2 \times 0.03$. Ignore the points, multiply the whole numbers: $12 \times 3 = 36$. Now count decimal places in the factors: $1$ (in $1.2$) $+ 2$ (in $0.03$) $= 3$. So place the point $3$ digits from the right: $0.036$. Here you do **not** align points — you count them.

*Divide* $4.5 \div 0.15$. Slide both points right until the divisor is a whole number: multiply each by $100$, giving $450 \div 15 = 30$. Scaling top and bottom by the same power of ten leaves the quotient unchanged.

**Example 2 (why you'd care — one number, three costumes).** A tag reads "$\tfrac{3}{8}$ off." Your card app wants a decimal; the sign says a percent. Convert once:

$$\frac{3}{8} = \frac{3}{2^3} = \frac{3 \times 125}{2^3 \times 125} = \frac{375}{1000} = 0.375 = 37.5\%.$$

The trick in the middle: to turn a denominator of $2^3$ into a power of ten, supply the missing $5^3 = 125$ to both top and bottom — legal because it's multiplying by $\tfrac{125}{125} = 1$. Because $8 = 2^3$ has only 2s, we *knew* before dividing that this would terminate. On a 40-dollar item, $37.5\%$ off is $0.375 \times 40 = 15$ dollars off — a 25-dollar price. Same instruction, read three ways.

## Watch out

- You might think you align the right-hand digits when adding, the way you do with whole numbers — but you align the **decimal points**. $12.4 + 3.75$ is $16.15$, not $12.4 + 3.75$ shoved right to make $49.15$. Pad with zeros so every number has the same number of places, then the columns line up automatically.
- You might think multiplication also aligns points — it doesn't. For $\times$ you **count** total decimal places and place the point that many digits from the right. $0.6 \times 0.05$ has $1 + 2 = 3$ places: $6 \times 5 = 30 \to 0.030 = 0.03$. A tiny answer from two small factors is a feature, not a mistake.
- You might think a fraction repeats because "the division looks messy." The only thing that matters is the **reduced** denominator's primes: $\tfrac{6}{15}$ looks like a thirds-style fraction, but it reduces to $\tfrac{2}{5} = 0.4$, which terminates. Always reduce first, then check for primes other than 2 and 5.

## One-liner

> A decimal is a fraction over a power of ten in disguise — so it terminates exactly when its reduced denominator is built only from 2s and 5s, and fraction, decimal, and percent are three costumes for one number.

## Problems

**P1 (🟢)** (a) Compute $6.4 + 0.85 + 12.375$ by aligning points. (b) Compute $0.6 \times 0.05$ by counting places. (c) Convert $\tfrac{7}{40}$ to a decimal, and state that decimal as a percent.

**P2 (🟡)** Without doing any long division, decide whether each fraction gives a terminating or a repeating decimal, and give the exact decimal for the terminating ones: $\tfrac{7}{40}$, $\tfrac{5}{12}$, $\tfrac{9}{250}$, $\tfrac{6}{15}$.

**P3 (🔴, optional)** Convert the repeating decimal $0.8\overline{3}$ (that is, $0.8333\ldots$) to a fraction in lowest terms, and state the percent it equals. *Hint: name the number $x$ and build two shifted copies whose repeating tails cancel — the same "set it equal and solve" move you'll lean on constantly in `algebra-foundations`.*

<details>
<summary>Solutions</summary>

**P1**
(a) Pad to three places and align points: $6.400 + 0.850 + 12.375$. Adding thousandths: $0+0+5=5$; hundredths $0+5+7=12$, write 2 carry 1; tenths $4+8+3+1=16$, write 6 carry 1; ones $6+0+2+1=9$; tens $1$. Result $\boxed{19.625}$.
(b) $6 \times 5 = 30$; places $1 + 2 = 3$, so $0.030 = \boxed{0.03}$.
(c) $40 = 2^3 \cdot 5$, so it terminates. Supply the missing factor to reach a power of ten: $\tfrac{7}{40} = \tfrac{7 \times 25}{40 \times 25} = \tfrac{175}{1000} = 0.175 = \boxed{17.5\%}$.

**P2**
- $\tfrac{7}{40}$: $40 = 2^3 \cdot 5$ — only 2s and 5s → **terminates**, $= 0.175$ (from P1).
- $\tfrac{5}{12}$: $12 = 2^2 \cdot 3$ — the 3 is fatal → **repeats** ($= 0.41\overline{6}$).
- $\tfrac{9}{250}$: $250 = 2 \cdot 5^3$ — only 2s and 5s → **terminates**. $\tfrac{9}{250} = \tfrac{9 \times 4}{250 \times 4} = \tfrac{36}{1000} = 0.036$.
- $\tfrac{6}{15}$: reduce first — $\tfrac{6}{15} = \tfrac{2}{5}$, denominator $5$ → **terminates**, $= 0.4$. (The unreduced 15 would have fooled you.)

**P3** Let $x = 0.8333\ldots$. Multiply by $10$ to line the tail up one way and by $100$ to line it up shifted:
$$10x = 8.3333\ldots, \qquad 100x = 83.3333\ldots$$
Subtract to annihilate the repeating tail: $100x - 10x = 83.333\ldots - 8.333\ldots$, so $90x = 75$, giving $x = \tfrac{75}{90} = \boxed{\tfrac{5}{6}}$. Check: $\tfrac{5}{6}$ has denominator $2 \cdot 3$, so it *should* repeat — consistent. As a percent, $x = 83.3\overline{3}\% = 83\tfrac{1}{3}\%$.

</details>

## Flashback

**From Lesson 1.2 (Order of operations):** Evaluate $20 - 2 \times (5 - 3)^2 + 6 \div 3$.

<details>
<summary>Solution</summary>

Grouping first: $(5-3) = 2$. Exponent: $2^2 = 4$. Now multiplication and division, left to right: $2 \times 4 = 8$ and $6 \div 3 = 2$. Finally addition/subtraction left to right: $20 - 8 + 2 = 12 + 2 = \boxed{14}$. The classic trap is doing $20 - 8 = 12$ then treating $+2$ as if subtraction won — but $-$ and $+$ are equal-rank and run left to right.

</details>

## Connections

- **Backward:** this is Lesson 2.1's fractions written on a power-of-ten grid, and the terminating/repeating rule is a direct payoff of the prime factorization from 1.3 — the primes 2 and 5 are special only because they multiply to 10.
- **Forward:** Lesson 2.3 leans on "percent is just a decimal in disguise" for every percent-of and percent-change calculation; the fraction↔decimal↔percent reflex you build here is assumed there and never re-taught. Further out, `algebra-foundations` reuses the "name it $x$ and solve" move from P3, and scientific notation in `precalculus` is this same place-value idea stretched to very large and very small numbers.
- **Sideways:** money and measurement *are* decimals — aligning points is why a cash register lines up the dollar columns, and counting places is why $0.075$ tax on a price never sprouts an extra digit.
