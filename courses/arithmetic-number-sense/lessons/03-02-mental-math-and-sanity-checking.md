# Arithmetic & Number Sense · Lesson 3.2: Mental math & sanity-checking

> ⏱ ~15 min · Module 3: Estimation & number sense · Builds on: 3.1 (rounding & estimation) · Unlocks: algebra-foundations (next course)

## Why this matters

Every calculator, spreadsheet, and formula you'll ever use will sometimes hand you a wrong number — a mistyped digit, a misplaced decimal, a flipped sign. The only defense is an internal alarm that fires *before* you trust the result. This lesson builds two halves of that alarm: the mental shortcuts that let you compute a rough answer fast, and the three-part check (sign, size, units) that decides whether the machine's answer is even plausible. This is the capstone of the whole course — and the reflex you carry into algebra, physics, and econ, where a wrong answer left unchecked propagates into everything downstream.

## The idea

Two habits, working together.

**Mental math** is about *reshaping* an ugly computation into an easy one before you do it. You almost never multiply the way school taught you (digit by digit, carrying). Instead you break a number apart into friendly pieces, handle each piece, and recombine — because $18 \times 21$ is hard, but "$18$ twenties plus $18$ more" is trivial. Numbers are Lego; you snap them into whatever shape is easiest.

**Sanity-checking** is the follow-up question you ask of *any* answer, yours or a machine's: *is this even in the right neighborhood?* Not "is it exactly right" — that's what the computation was for — but "is it the wrong sign, off by a factor of ten, or in nonsense units?" A quick estimate (Lesson 3.1) gives you the neighborhood; the real answer either lives there or it's a fraud you reject on sight. You don't need to know the exact total to know that $18$ items at about $20$ each can't possibly cost $40$ or $4{,}000$.

## The formal version

**Distributive shortcut.** For any numbers, $a \times (b + c) = a\times b + a\times c$. In words: to multiply by a hard number, split it into easy pieces and multiply by each. The same law run backward, $a\times(b-c) = a\times b - a\times c$, powers the "multiply by 9" trick.

**Doubling/halving.** $a \times b = (2a)\times(b/2)$. In words: doubling one factor while halving the other leaves the product unchanged — so slide the difficulty onto whichever factor is easier.

**Percent anchors.** $p\%$ of $y$ means $\frac{p}{100}\times y$. Two anchors generate everything: $10\%$ of $y$ is $y$ with the decimal shifted one place left; $1\%$ shifts it two places. Build the rest by combining ($15\% = 10\% + 5\%$, and $5\%$ is half of $10\%$). And the symmetry $p\%\text{ of } q = q\%\text{ of }p$ — because both equal $\frac{pq}{100}$ — lets you flip to the easier direction.

**The three-part sanity check.** Before trusting an answer, confirm all three:

1. **Sign** — is it positive/negative as expected? (A cost came out negative; a distance came out below zero.)
2. **Size** — is it the right order of magnitude? Compare against your Lesson-3.1 estimate; a mismatch by a factor of $10$ or more is almost always a decimal-place or digit error.
3. **Units** — does the label make sense? (Dollars where you wanted dollars-per-item; meters where you wanted seconds.)

In words: **estimate first, compute second, then reject the computed answer if it fails any of the three.** An estimate that disagrees with the "exact" answer doesn't mean your estimate is wrong — it means one of them is, and the estimate is the cheap one to trust while you re-check.

## Concrete instance

Compute $18 \times 21$ in your head with a distributive shortcut. Split the $21$ into $20 + 1$:

$$18 \times 21 = 18 \times (20 + 1) = 18\times 20 + 18\times 1.$$

Now each piece is easy:

$$18 \times 20 = 360, \qquad 18 \times 1 = 18.$$

Recombine:

$$360 + 18 = 378.$$

No carrying, no scratch paper. And the estimate is built in: $18\times 20 = 360$ already tells you the answer is "about $360$–$380$," so if a receipt claimed this subtotal was $37.80$ or $3{,}780$, you'd reject it before finishing.

## Worked examples

**Example 1 (mechanical — reshape a hard product).** Compute $35 \times 18$ mentally.

*Doubling/halving:* the $18$ is more annoying than an even one, so double it and halve the $35$... actually $35$ is odd, so go the other way — double the $35$, halve the $18$:

$$35 \times 18 = 70 \times 9 = 630.$$

*Cross-check with the distributive law*, splitting $18 = 20 - 2$:

$$35\times 18 = 35\times 20 - 35\times 2 = 700 - 70 = 630. \checkmark$$

Two independent routes to $630$ — that agreement *is* the sanity check.

**Example 2 (why you'd care — catch a machine's error).** A spreadsheet computes the $6\%$ sales tax on a $240$-dollar order and displays $1.44$ dollars. Trust it?

Anchor on $10\%$: $10\%$ of $240$ is $24$. So $6\%$ is a bit more than half of that — call it $\approx 14$ dollars. The estimate says **fourteen-ish dollars**; the spreadsheet says **a dollar forty-four**. Those differ by a factor of $10$ — the classic fingerprint of a misplaced decimal (someone divided by $1000$ instead of $100$). Reject it. The true value is $0.06\times 240 = 14.40$ dollars, exactly ten times the displayed figure. The *size* check caught it in one second; you never needed the exact answer to know the shown one was wrong.

## Watch out

- **You might think a check is only worth it when the number "looks weird."** But the dangerous errors look perfectly ordinary — $1.44$ is a fine-looking dollar amount. The check isn't triggered by weirdness; it's a *reflex you run every time*, especially when the answer looks reasonable.
- **You might think matching your estimate proves the answer is exactly right.** It doesn't — a sanity check certifies the *neighborhood*, not the *address*. $630$ and $632$ both pass a "roughly $600$" estimate; the check rules out disasters (wrong sign, wrong magnitude), not small slips. Use it to reject, not to finalize.
- **You might think units are just decoration.** They're a full third of the check, and often the fastest one: if you divided total dollars by items and got an answer in "dollars," you forgot it should be "dollars *per item*" — and that mislabeling usually means the arithmetic went wrong too. Say the units out loud.

## One-liner

> Reshape the numbers to compute fast, then make every answer survive three questions — right sign, right size, right units — before you believe it.

## Problems

**P1 (🟢)** Compute each mentally, and name the shortcut you used: (a) $48 \times 25$, (b) $15\%$ of $80$, (c) $8\%$ of $50$.

**P2 (🟡)** A calculator display reads $0.39 \times 812 = 3.17$. Without doing the exact multiplication, use a size check to decide whether to trust it. If you reject it, say what the true answer is roughly, and name the likely error.

**P3 (🔴, optional)** A news article states that a city of $2$ million people, each using about $500$ liters of water per day, consumes roughly $1$ million liters of water per day total. Run all three sanity checks (sign, size, units) and say precisely what's wrong and by how much.

<details>
<summary>Solutions</summary>

**P1**
(a) $48 \times 25$: since $25 = 100/4$, multiply by $100$ and divide by $4$ — $48\times 25 = 48\times 100 / 4 = 4800/4 = \boxed{1200}$. (Or halve-and-double twice: $48\times25 = 24\times50 = 12\times100 = 1200$.)
(b) $15\%$ of $80$: anchor on $10\%$ of $80 = 8$; then $5\%$ is half of that, $4$; sum $8 + 4 = \boxed{12}$.
(c) $8\%$ of $50$: flip using $p\%$ of $q = q\%$ of $p$ — $8\%$ of $50 = 50\%$ of $8 = \boxed{4}$.

**P2** Round to compatible numbers: $0.39 \approx 0.4$ and $812 \approx 800$, so the product is about $0.4 \times 800 = 320$. The estimate is **a few hundred**; the display reads **about $3$**. They differ by a factor of $100$ — reject the display. The true value is roughly $320$ (exactly $316.68$); the machine's answer is off by two decimal places, the fingerprint of entering $0.0039$ or dropping two zeros somewhere. The *size* check settles it instantly.

**P3**
- **Sign:** positive, as a water total should be. Passes.
- **Units:** people $\times$ (liters per person per day) $=$ liters per day — the stated units are consistent. Passes.
- **Size:** this is where it fails. $2{,}000{,}000 \text{ people} \times 500 \text{ L/person/day} = 1{,}000{,}000{,}000$ liters per day $= 1$ **billion** liters/day, not $1$ million. The article is off by a factor of $1000$ — three orders of magnitude, a "million/billion" swap. The size check is the only one of the three that catches it, which is exactly why you never skip it.

</details>

## Flashback

**From Lesson 2.2 (Decimals & conversions):** Fill in the missing two forms in each row.

(a) $\dfrac{7}{8}$ as a decimal and a percent.  (b) $0.6$ as a fraction in lowest terms and a percent.

<details>
<summary>Solution</summary>

(a) $\frac{7}{8} = 7 \div 8 = 0.875$, and $0.875 \times 100 = 87.5\%$. So $\frac{7}{8} = 0.875 = 87.5\%$.

(b) $0.6 = \frac{6}{10} = \frac{3}{5}$ (divide top and bottom by their GCD, $2$), and $0.6 \times 100 = 60\%$. So $0.6 = \frac{3}{5} = 60\%$.

Sanity check on both: $\frac{7}{8}$ is just under $1$, so a decimal near $0.9$ and a percent near $90\%$ are right; $\frac{3}{5}$ is a bit more than half, matching $0.6$ and $60\%$.

</details>

## Connections

- **Backward:** the size check runs entirely on Lesson 3.1's estimation — rounding to compatible numbers and comparing orders of magnitude *is* the "size" step. And every mental shortcut here is the distributive law from Module 1 (order of operations, 1.2) and the percent machinery from Module 2 (2.3), now run at speed and in your head.
- **Forward:** in `algebra-foundations` the distributive law stops being a mental trick and becomes the engine of expanding and factoring — $a(b+c)=ab+ac$ with letters instead of digits. Sanity-checking never leaves you: every "solve for $x$" ends with substituting your answer back to confirm it, which is the sign/size check wearing algebra's clothes.
- **Sideways (all science & econ):** order-of-magnitude reasoning and the unit check are load-bearing everywhere downstream — in `mechanics-refresher` and beyond, **dimensional analysis** *is* the units half of this check promoted to a proof technique: if the units on two sides of an equation don't match, the equation is wrong before you plug in a single number. Estimating a plausible answer first, then rejecting an implausible computed one, is the same habit whether the quantity is dollars, joules, or a probability.
