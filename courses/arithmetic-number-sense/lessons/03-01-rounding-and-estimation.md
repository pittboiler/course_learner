# Arithmetic & Number Sense · Lesson 3.1: Rounding & estimation

> ⏱ ~15 min · Module 3: Estimation & number sense · Builds on: 1.1 (place value) & 2.3 (percents) · Unlocks: 3.2 (mental math & sanity-checking)

## Why this matters

Before you trust any calculation — a bill, a physics answer, a spreadsheet cell — you should already know *roughly* what it ought to be. Estimation gives you that expectation cheaply, so an exact answer that's off by a decimal place or a factor of ten sets off an alarm instead of sailing through. This is the skill behind "significant figures" in chemistry, "back-of-the-envelope" in physics, and every sanity check in the next lesson. A scientist who can't estimate is one typo away from a wrong conclusion.

## The idea

Rounding is deliberate, controlled lying: you trade a little accuracy for a number you can actually work with in your head. "312 people" becomes "about 300"; "48 dollars" becomes "about 50." Do that to every number in a problem, run the easy arithmetic, and you get an **estimate** — not the answer, but the right *neighborhood* of the answer.

The neighborhood is usually all you need. If a screen says the total is 6,000-ish and your estimate says 600-ish, you don't need the exact figure to know something is broken. Estimation isn't a weaker kind of computing — it's the safety net you throw *under* the real computation.

## The formal version

**Rounding to a given place.** To round a number to a chosen place (tens, hundredths, whatever), look at the single digit just to the *right* of that place — the **deciding digit**.

- If it is $0,1,2,3,4$: round **down** (keep the target digit, zero out everything after).
- If it is $5,6,7,8,9$: round **up** (add one to the target digit, then zero out after).

This is the **round-half-up** convention: a deciding digit of exactly $5$ goes up. In words: snap to whichever multiple of the place value is nearest, and break the exact tie by going up.

**Order of magnitude.** Every positive number can be written as $m \times 10^{k}$ with $1 \le m < 10$ (scientific notation); the integer $k$ is its **order of magnitude** — essentially "how many digits," i.e. which power of ten it lives near. In words: the order of magnitude is the number's *size class*. $312 = 3.12 \times 10^2$ has order $2$; $48{,}000 = 4.8 \times 10^4$ has order $4$. Two numbers "of the same order" are within a factor of $10$ of each other; getting the order right is the single most important thing an estimate can do.

**Front-end estimation.** Keep only the leading digit of each number (replace the rest with zeros), then compute. $312 + 48 \to 300 + 40$. Fast, and always gives a *low* estimate for sums (you threw away positive tails).

**Compatible numbers.** Nudge each number to a nearby value that's *easy to combine* with the others, even if that's not the nearest round number. For $47 \div 6$, round $47$ to $48$ (not $50$) because $48 \div 6 = 8$ is exact.

## Concrete instance

Estimate $312 \times 48$ before touching the exact product.

Round each factor to one significant digit: $312 \to 300$ and $48 \to 50$. Then

$$300 \times 50 = 15{,}000.$$

The exact value is $312 \times 48 = 14{,}976$.

| | value |
|---|---|
| estimate | $15{,}000$ |
| exact | $14{,}976$ |
| error | $24$ (about $0.16\%$) |

Notice two things. First, the estimate took one second and landed within a fifth of a percent. Second, we rounded one factor *down* ($312 \to 300$) and one *up* ($48 \to 50$), so the errors partly cancel — that's why the estimate is so tight. Had we rounded both up to $400 \times 50 = 20{,}000$, we'd be off by a third. Rounding in opposite directions is a quiet superpower.

## Worked examples

**Example 1 (mechanical — round to a place).** Round $3{,}748$ to the nearest hundred.

The hundreds digit is $7$ (the $700$ in $3{,}748$). The deciding digit is the one to its right, in the tens place: $4$. Since $4 < 5$, round **down** — keep the $7$, zero the rest: $3{,}700$. 

Now round the same number to the nearest ten: target digit is $4$ (tens), deciding digit is $8$ (ones). $8 \ge 5$, so round **up**: $3{,}750$. Same number, different place, different answer — always name the place first.

**Example 2 (why you'd care — a safe estimate).** You're buying $23$ items that cost $18.75$ dollars each and you have $500$ dollars. Can you afford it — and which way should you round to be *sure*?

Here you want a **safe over-estimate**: round each number *up*, so if the inflated total still fits, the real total certainly does. Take $23 \to 25$ and $18.75 \to 20$:

$$25 \times 20 = 500.$$

The padded estimate is exactly $500$, so the real cost is comfortably under $500$ (the exact figure is $431.25$ dollars). Because you rounded *both* factors up, you know the true total can only be *smaller* — the estimate is a guarantee, not just a guess. If instead you were checking that you'd *collected enough* money, you'd round the other way (down) to be safe. **The direction you round encodes what you're trying to guarantee.**

## Watch out

- You might think rounding one digit at a time is fine — but **round in a single step from the original digits**. To round $2.48$ to the nearest whole, the deciding digit is the $4$ in the tenths place, so it's $2$. Do *not* first round $2.48 \to 2.5$ and then $2.5 \to 3$; that "double rounding" invents a carry that isn't there.
- You might think a small rounding error stays small — but errors **compound with the operation**. Rounding a factor up by $4\%$ inflates a *product* by about $4\%$; but rounding a denominator down makes a *quotient* go *up*. Track which direction your estimate is pushed, especially for division.
- You might think more rounding is always safer — but round each number to the *same* rough precision. Estimating $6{,}000 + 3$ as $6{,}000 + 0$ is fine; estimating $6 + 3$ as $10 + 0$ is not. Match the rounding to the scale of each term.

## One-liner

> Round first, compute second: a five-second estimate tells you the right neighborhood, so a wrong exact answer can't sneak past you.

## Problems

**P1 (🟢)** Round $47{,}382$ to (a) the nearest thousand, (b) the nearest hundred, (c) the nearest ten. Then give its order of magnitude (the power of ten in $m \times 10^k$).

**P2 (🟡)** Estimate $\dfrac{6{,}142}{29}$ using compatible numbers, then say whether your estimate is above or below the true value and why. (Hint: nudge $6{,}142$ toward a nearby multiple of $30$.)

**P3 (🔴, optional)** You need to be *certain* a $2{,}000$-dollar budget covers $38$ licenses at $53.40$ dollars each. Produce a safe estimate that settles the question in your head, state which direction you rounded and why, then give the exact cost and confirm the estimate pointed the right way.

<details>
<summary>Solutions</summary>

**P1** 
- (a) Nearest thousand: target digit is $7$ (thousands); deciding digit is $3$ (hundreds). $3 < 5$ → round down → $47{,}000$.
- (b) Nearest hundred: target is $3$ (hundreds); deciding digit is $8$ (tens). $8 \ge 5$ → round up → $47{,}400$.
- (c) Nearest ten: target is $8$ (tens); deciding digit is $2$ (ones). $2 < 5$ → round down → $47{,}380$.
- Order of magnitude: $47{,}382 = 4.7382 \times 10^{4}$, so $k = 4$.

**P2** Round $29 \to 30$ and nudge $6{,}142 \to 6{,}000$ (a compatible multiple of $30$): $6{,}000 \div 30 = 200$. So the estimate is about $200$. 

True value: $6{,}142 / 29 \approx 211.8$. The estimate ($200$) is **below** the true value. Two reasons pushed it down: we shrank the numerator ($6{,}142 \to 6{,}000$, which lowers a quotient) *and* grew the denominator ($29 \to 30$, which also lowers a quotient). Both moves point the same way, so we knew in advance the estimate would undershoot — the true answer is a bit above $200$.

**P3** Goal: *guarantee* the budget is enough, so over-estimate the cost by rounding every cost *up*. Take $38 \to 40$ and $53.40 \to 55$ (or even $60$):

$$40 \times 55 = 2{,}200 \quad(>2{,}000).$$

The padded estimate already exceeds $2{,}000$, so this estimate does **not** settle the question — an over-estimate above budget is inconclusive (the real cost could still be under). So tighten it: round *up* only modestly, $38 \to 40$ and $53.40 \to 54$: $40 \times 54 = 2{,}160$, still above $2{,}000$ — still inconclusive.

The honest read: because a deliberate over-estimate lands above $2{,}000$, you *cannot* be certain from a padded estimate alone; you must compute. Exact cost: $38 \times 53.40 = 2{,}029.20$ dollars — **over budget by $29.20$**. 

Lesson: a safe over-estimate can only prove you're *under* budget (if even the inflated figure fits). When the inflated figure doesn't fit, the estimate correctly refuses to give the all-clear and tells you to compute — which here reveals a genuine overrun. The direction of rounding matched the guarantee we wanted; it just (correctly) declined to certify a case that was actually false.

</details>

## Flashback

**From Lesson 2.3 (Ratios, proportions & percents):** A jacket is marked $80$ dollars. A store first raises the price by $25\%$, then advertises "$20\%$ off" the raised price. Is the final price above, below, or equal to the original $80$ dollars? Compute it.

<details>
<summary>Solution</summary>

Percent changes multiply; they don't add, and order-of-operations on percents is a classic trap. After the $25\%$ increase: $80 \times 1.25 = 100$ dollars. After the $20\%$ discount on that: $100 \times 0.80 = 80$ dollars.

Final price is exactly $80$ dollars — **equal** to the original. The overall factor is $1.25 \times 0.80 = 1.00$, so the two changes cancel *here*. Note this is a coincidence of these particular percents, not a rule: a $25\%$ rise and a $25\%$ cut would give $1.25 \times 0.75 = 0.9375$, a net $6.25\%$ *loss*, because the discount applies to a larger base than the increase did.

</details>

## Connections

- **Backward:** rounding is place value (Lesson 1.1) in action — you can't round to "the nearest hundred" without knowing which digit *is* the hundreds. Percent error here reuses percent change from Lesson 2.3.
- **Forward:** Lesson 3.2 makes estimation the *engine* of sanity-checking — every "does this answer smell right?" reflex starts with an estimate you built here.
- **Sideways (physics/all science):** this is the seed of **significant figures** and the **Fermi estimate** ("how many piano tuners in Chicago?") — order-of-magnitude reasoning is how physicists sanity-check before computing. It also underlies **scientific notation** ($m \times 10^k$) and feeds directly into **error analysis**, where you track exactly how much uncertainty each rounded input injects into a result.
