# Arithmetic & Number Sense · Lesson 2.3: Ratios, proportions & percents

> ⏱ ~15 min · Module 2: Fractions, decimals, ratios & percents · Builds on: 2.2 (decimals & conversions) · Unlocks: 3.1 (rounding & estimation)

## Why this matters

Tips, taxes, discounts, interest, poll margins, mixture concentrations, growth rates — nearly every "how much of a whole?" question in daily life and in later coursework is a ratio or a percent in disguise. Percents in particular are the native language of `mathematical-finance` (interest is just "percent per year") and of chemistry (a solution's concentration is percent-by-mass). Get fluent here and a whole class of problems collapses into one reflex: *a percent is a fraction, so treat it like one.*

## The idea

A **ratio** compares two amounts of the *same kind* — 3 parts blue to 5 parts white — and it only cares about relative size, not absolute size: $3:5$ is the same recipe as $6:10$. A **rate** compares two amounts of *different kinds* — 60 miles per 1 hour, 4 dollars per 1 pound — and carries units.

A **proportion** is just the claim that two ratios are equal, and solving one means finding the missing piece. The whole engine is a single idea you already own from Lesson 2.1: a ratio *is* a fraction, and two equal fractions can be cleared of their denominators.

And a **percent** is the most domesticated ratio of all — it's a fraction whose denominator is *always* 100. "37 percent" literally means $\tfrac{37}{100}$, which (straight from Lesson 2.2) is the decimal $0.37$. Every percent question is secretly a decimal-multiplication question wearing a "%" costume.

## The formal version

**Ratio / rate.** A ratio of $a$ to $b$ (written $a:b$ or $\tfrac{a}{b}$) is their quotient; a rate is a ratio carrying units (e.g. $\tfrac{\text{dollars}}{\text{pound}}$). *In words: how many of one thing per how many of the other.*

**Proportion & cross-multiplication.** A proportion is an equation of two ratios,
$$\frac{a}{b} = \frac{c}{d}.$$
Multiplying both sides by $bd$ (legal — it's the same nonzero number on each side) clears both denominators:
$$\frac{a}{b}\cdot bd = \frac{c}{d}\cdot bd \;\Longrightarrow\; a d = b c.$$
*In words: cross-multiplication isn't a magic rule — it's just clearing denominators, so the diagonal products must match.* Given any three of $a,b,c,d$, solve for the fourth.

**Percent.** "$p$ percent" means $\dfrac{p}{100} = p \times 0.01$. So:
$$p\% \text{ of } N \;=\; \frac{p}{100}\cdot N.$$
*In words: turn the percent into its decimal and multiply.*

**Percent change.** Increasing $N$ by $p\%$ **multiplies** it by $\left(1+\tfrac{p}{100}\right)$; decreasing by $p\%$ multiplies by $\left(1-\tfrac{p}{100}\right)$:
$$N_{\text{new}} = N\left(1 \pm \frac{p}{100}\right).$$
*In words: a percent change is a multiplier, not an amount you add once and forget — which is exactly why reversing it takes division, not subtraction.*

## Picture

**Concrete instance — sharing 20 in the ratio $2:3$.** The ratio says: chop the whole into $2+3 = 5$ equal parts. Each part is $20 \div 5 = 4$. Then the two shares are $2 \times 4 = 8$ and $3 \times 4 = 12$. Check: $8 + 12 = 20$ ✓, and $8:12$ reduces to $2:3$ ✓. That "add the ratio numbers to get the number of parts" move is the workhorse of every ratio split.

## Worked examples

**Example 1 (mechanical — percent is a decimal in disguise).** What is $35\%$ of $80$?

Translate the percent using Lesson 2.2: $35\% = \tfrac{35}{100} = 0.35$. Then
$$35\% \text{ of } 80 = 0.35 \times 80 = 28.$$
No new machinery — "percent of" is one multiplication once you've stripped off the costume. To sanity-check: $35\%$ is a bit over a third, and a third of $80$ is about $27$, so $28$ sits right.

**Example 2 (why you'd care — the reversal trap).** Your 4,000-dollar-a-month contract takes a $10\%$ cut, then later a $10\%$ raise. Are you back to 4,000?

Cut: $4000 \times (1 - 0.10) = 4000 \times 0.9 = 3600$. Raise: $3600 \times (1 + 0.10) = 3600 \times 1.1 = 3960$. You land at **3,960 dollars — 40 dollars short.** Why? The raise's $10\%$ is $10\%$ *of the smaller 3,600*, not of the original 4,000. In multiplier form the whole story is
$$4000 \times 0.9 \times 1.1 = 4000 \times 0.99,$$
a net $1\%$ *loss*. A $p\%$ rise then a $p\%$ fall (in either order) always multiplies by $\left(1-\tfrac{p^2}{100^2}\right) < 1$ — you never get back to the start. This exact effect is why a stock that drops $50\%$ needs a $100\%$ gain, not another $50\%$, to recover.

## Watch out

- You might think a $20\%$ rise followed by a $20\%$ fall cancels out. It doesn't: $1.2 \times 0.8 = 0.96$, a $4\%$ net loss. Percent changes **multiply**; they don't add and cancel.
- You might think "the price after $25\%$ off is 60, so the original was $60 + 25\% = 75$." Wrong — the $25\%$ was taken off the *original*, not off the 60. The sale price is $75\%$ of the original, so **divide**: original $= 60 \div 0.75 = 80$. (Reverse-percent = undo a multiplier by dividing.)
- You might treat a ratio like an absolute count. $3:5$ does **not** mean "3 liters and 5 liters" — it means 3 parts to 5 parts, and a part can be any size. Find the part first, then scale.

## One-liner

> A percent is a fraction over 100, a percent change is a multiplier (so reversing it needs division, not subtraction), and a ratio splits a whole into "parts" you size once and scale.

## Problems

**P1 (🟢)** A jacket marked 80 dollars is discounted $15\%$. What is the sale price? Then split a 45-pen order between two classrooms in the ratio $4:5$ — how many pens each?

**P2 (🟡)** A share of a fund starts at 50 dollars, rises $20\%$ on Monday, then falls $20\%$ on Tuesday. What is it worth Tuesday evening? Is it back to 50 — and if not, what single percent change describes the two days combined? (This is the same multiplier logic you'll meet as compounding in `mathematical-finance`.)

**P3 (🔴, optional)** After a $25\%$-off sale, a lamp costs 60 dollars. (a) What was its original price? (b) At checkout, $8\%$ sales tax is added to the 60. What do you actually pay? (c) Compared to the original price, is your final payment more or less — by what percent?

<details>
<summary>Solutions</summary>

**P1** *Discount:* the sale price is $100\% - 15\% = 85\%$ of the mark, so $80 \times 0.85 = 68$ dollars. (Or subtract the discount: $80 \times 0.15 = 12$ off, $80 - 12 = 68$.) *Split:* the ratio $4:5$ has $4+5 = 9$ parts; each part is $45 \div 9 = 5$ pens, so the classrooms get $4 \times 5 = 20$ and $5 \times 5 = 25$. Check: $20 + 25 = 45$ ✓.

**P2** Monday: $50 \times 1.20 = 60$. Tuesday: $60 \times 0.80 = 48$. So **48 dollars — not back to 50.** Combined multiplier: $1.20 \times 0.80 = 0.96$, i.e. a net **$4\%$ decrease** (matching $48 = 50 \times 0.96$). The Tuesday drop was $20\%$ of the inflated 60, which outweighed the Monday gain of $20\%$ of 50.

**P3** (a) The 60 is $75\%$ of the original, so original $= 60 \div 0.75 = 80$ dollars. (b) With tax: $60 \times 1.08 = 64.80$ dollars. (c) You pay $64.80$ versus an $80$ list price: $64.80 \div 80 = 0.81$, so your final payment is $81\%$ of the original — a net **$19\%$ less**. (Neat check: $0.75 \times 1.08 = 0.81$ — the discount and tax multipliers combine directly.)

</details>

## Flashback

**From Lesson 2.1 (Fractions):** Compute $\dfrac{5}{6} - \dfrac{3}{8}$, then divide the result by $\dfrac{2}{3}$, and reduce to lowest terms.

<details>
<summary>Solution</summary>

Common denominator of $6$ and $8$ is $24$: $\tfrac{5}{6} = \tfrac{20}{24}$ and $\tfrac{3}{8} = \tfrac{9}{24}$, so $\tfrac{20}{24} - \tfrac{9}{24} = \tfrac{11}{24}$. Dividing by $\tfrac{2}{3}$ means multiplying by its reciprocal $\tfrac{3}{2}$:
$$\frac{11}{24} \times \frac{3}{2} = \frac{33}{48} = \frac{11}{16}.$$
($33$ and $48$ share a factor of $3$; $11$ and $16$ are coprime, so $\tfrac{11}{16}$ is fully reduced.)

</details>

## Connections

- **Backward:** every percent here is a fraction-over-100 turned into a decimal — exactly the fraction ↔ decimal ↔ percent conversions of Lesson 2.2, and the reducing/inverting reflex of Lesson 2.1.
- **Forward:** Lesson 3.1 (rounding & estimation) gives you the fast sanity check behind these answers — "$35\%$ of $80$ is about a third of $80$, so ≈ $27$" is how you catch a misplaced decimal before trusting a percent result.
- **Sideways (finance):** the multiplier form $N(1\pm\tfrac{p}{100})$ is the seed of compound interest and growth rates in `micro-refresher` and `mathematical-finance` — repeated multiplication is the whole subject.
- **Sideways (chemistry):** a solution's concentration ("$5\%$ saline by mass") is percent-of applied to a mixture, and diluting or mixing solutions is a ratio problem in the same clothes.
