# Arithmetic & Number Sense · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is the floor everything else stands on: how numbers are built from
place value, how signs and operations behave, and how one quantity wears four
costumes (fraction, decimal, ratio, percent). The card is where the lookup tables
live — divisibility rules, the fraction/decimal/percent conversions, the small
primes, the place names — plus the sanity checks that catch a wrong answer before
you trust it.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathbb{Z}$ | the integers: whole numbers running both ways from zero | [1.1](lessons/01-01-place-value-and-integers.md) |
| $\lvert n\rvert$ | absolute value — distance from zero, sign thrown away | [1.1](lessons/01-01-place-value-and-integers.md) |
| $3{,}504$ | a comma every three digits, purely to make long numbers readable | [1.1](lessons/01-01-place-value-and-integers.md) |
| $(\;)$, $[\;]$ | grouping symbols — "do this part first" | [1.2](lessons/01-02-order-of-operations.md) |
| $\gcd(a,b)$ | greatest common divisor — the largest number dividing both | [1.3](lessons/01-03-factors-primes-divisibility.md) |
| $\operatorname{lcm}(a,b)$ | least common multiple — the smallest number both divide into | [1.3](lessons/01-03-factors-primes-divisibility.md) |
| $p^{a}$ in a factorization | a prime and how many copies of it the number contains | [1.3](lessons/01-03-factors-primes-divisibility.md) |
| $\dfrac{a}{b}$ | $b$ names the piece size, $a$ counts the pieces | [2.1](lessons/02-01-fractions.md) |
| $1\tfrac{5}{24}$ | mixed number — a whole part plus a fraction part, added (not multiplied) | [2.1](lessons/02-01-fractions.md) |
| $0.8\overline{3}$ | the bar marks the digits that repeat forever ($0.8333\ldots$) | [2.2](lessons/02-02-decimals-and-conversions.md) |
| $\%$ | "per hundred" — a fraction whose denominator is always 100 | [2.2](lessons/02-02-decimals-and-conversions.md) |
| $a:b$ | ratio — $a$ parts of one thing to $b$ parts of another, sizes unspecified | [2.3](lessons/02-03-ratios-proportions-percents.md) |
| $\approx$ | "roughly equals" — flags an estimate, not an exact value | [3.1](lessons/03-01-rounding-and-estimation.md) |
| $m \times 10^{k}$ | scientific notation, $1 \le m < 10$; the exponent $k$ is the size class | [3.1](lessons/03-01-rounding-and-estimation.md) |

## Definitions

### Place value

Where a digit sits decides what it is worth: slide it one slot left and it counts
for ten times as much.

$$d_k d_{k-1}\ldots d_1 d_0 \;=\; d_k\cdot 10^{k} + \cdots + d_1\cdot 10^{1} + d_0\cdot 10^{0}$$

*Introduced:* [1.1](lessons/01-01-place-value-and-integers.md)

### Integers

The counting numbers stretched past zero in both directions — evenly spaced
fenceposts on an infinite line.

$$\mathbb{Z} = \{\ldots,-2,-1,0,1,2,\ldots\}$$

*Introduced:* [1.1](lessons/01-01-place-value-and-integers.md)

### Absolute value

How far from zero, regardless of which side. Sign and magnitude are two separate
pieces of information; this keeps only the magnitude.

$$\lvert 7\rvert = 7, \qquad \lvert -7\rvert = 7, \qquad \lvert 0\rvert = 0$$

*Introduced:* [1.1](lessons/01-01-place-value-and-integers.md)

### Order on the number line

"Smaller" means "farther left," never "smaller-looking digits." That single
sentence settles every comparison, negatives included.

$$a < b \iff a \text{ lies to the left of } b$$

*Introduced:* [1.1](lessons/01-01-place-value-and-integers.md)

### Factor and multiple

Two ends of one relationship: a factor divides in with nothing left over, a
multiple is what you get scaling up. Six is a factor of 24; 24 is a multiple of 6.

*Introduced:* [1.3](lessons/01-03-factors-primes-divisibility.md)

### Prime and composite

A prime can't be broken apart — its only factors are 1 and itself. Everything
else (bigger than 1) is composite, i.e. built from primes. Note $1$ is neither,
and $2$ is the only even prime.

$$\text{primes: } 2, 3, 5, 7, 11, 13, \ldots$$

*Introduced:* [1.3](lessons/01-03-factors-primes-divisibility.md)

### Prime factorization

Every whole number bigger than 1 has exactly one prime recipe — a fingerprint no
other number shares. (This is the Fundamental Theorem of Arithmetic.)

$$n = p_1^{a_1} p_2^{a_2}\cdots p_k^{a_k} \quad\text{(unique, order aside)}$$

*Introduced:* [1.3](lessons/01-03-factors-primes-divisibility.md)

### Greatest common divisor (GCD)

The biggest chunk two numbers both split into evenly — the shared floor their two
prime towers stand on. Never larger than either number.

$$\gcd(a,b) = \prod_{p} p^{\min(a_p,\,b_p)}$$

*Introduced:* [1.3](lessons/01-03-factors-primes-divisibility.md)

### Least common multiple (LCM)

The first place two counting schedules line up — the shared ceiling both towers
reach. Never smaller than either number.

$$\operatorname{lcm}(a,b) = \prod_{p} p^{\max(a_p,\,b_p)}$$

*Introduced:* [1.3](lessons/01-03-factors-primes-divisibility.md)

### Fraction

Cut a whole into $b$ equal pieces and take $a$ of them. The denominator names the
piece size; the numerator counts the pieces.

$$\frac{a}{b}, \qquad b \neq 0$$

*Introduced:* [2.1](lessons/02-01-fractions.md)

### Equivalent fractions

Cutting into twice as many pieces and taking twice as many changes the name, not
the amount — so $\tfrac12$, $\tfrac24$, $\tfrac36$ all mark the same spot.

$$\frac{a}{b} = \frac{ak}{bk} \quad (k \neq 0)$$

*Introduced:* [2.1](lessons/02-01-fractions.md)

### Lowest terms

Every shared factor divided out, so no smaller name exists. Divide top and bottom
by their GCD and you land there in one step.

$$\frac{a}{b} = \frac{a/g}{b/g}, \quad g = \gcd(a,b), \qquad \gcd\!\left(\tfrac{a}{g},\tfrac{b}{g}\right) = 1$$

*Introduced:* [2.1](lessons/02-01-fractions.md)

### Reciprocal

The fraction turned upside down — the number that multiplies with the original to
give exactly 1. Dividing by a fraction is multiplying by its reciprocal.

$$\frac{a}{b}\cdot\frac{b}{a} = 1$$

*Introduced:* [2.1](lessons/02-01-fractions.md)

### Decimal

Not a new kind of number: a fraction whose denominator is a power of ten, written
without the bar. Each step right of the point divides the place value by 10.

$$0.d_1 d_2\ldots d_k = \frac{d_1 d_2 \ldots d_k}{10^{k}}$$

*Introduced:* [2.2](lessons/02-02-decimals-and-conversions.md)

### Terminating vs. repeating decimal

Whether a fraction lands exactly on the power-of-ten grid is decided entirely by
the primes in its **reduced** denominator — 2s and 5s are the only ones that fit
inside 10.

$$\frac{a}{b}\ \text{(lowest terms) terminates} \iff b = 2^m 5^n$$

*Introduced:* [2.2](lessons/02-02-decimals-and-conversions.md)

### Ratio and rate

A ratio compares two amounts of the *same* kind and cares only about relative
size ($3:5$ is the same recipe as $6:10$). A rate compares *different* kinds and
carries units — miles per hour, dollars per pound.

*Introduced:* [2.3](lessons/02-03-ratios-proportions-percents.md)

### Proportion

The claim that two ratios are equal. Clearing both denominators is what
"cross-multiplication" actually is — no magic involved.

$$\frac{a}{b} = \frac{c}{d} \;\Longrightarrow\; ad = bc$$

*Introduced:* [2.3](lessons/02-03-ratios-proportions-percents.md)

### Percent

The most domesticated ratio: a fraction whose denominator is always 100, which
makes it a decimal in a costume.

$$p\% = \frac{p}{100} = p \times 0.01$$

*Introduced:* [2.2](lessons/02-02-decimals-and-conversions.md), used throughout [2.3](lessons/02-03-ratios-proportions-percents.md)

### Percent change

A percent change is a **multiplier**, not an amount you add once — which is why
undoing one takes division, not subtraction.

$$N_{\text{new}} = N\left(1 \pm \frac{p}{100}\right)$$

*Introduced:* [2.3](lessons/02-03-ratios-proportions-percents.md)

### Rounding

Deliberate, controlled lying: trade a little accuracy for a number you can work
with in your head.

*Introduced:* [3.1](lessons/03-01-rounding-and-estimation.md)

### Order of magnitude

A number's size class — which power of ten it lives near. Getting this right is
the single most valuable thing an estimate can do.

$$N = m \times 10^{k}, \quad 1 \le m < 10 \;\Rightarrow\; \text{order } k$$

*Introduced:* [3.1](lessons/03-01-rounding-and-estimation.md)

## Formulas and rules

### Place names

The names the lessons use without restating them. Each step right divides by ten.

| Place | Worth | | Place | Worth |
|---|---|---|---|---|
| thousands | $1000$ | | tenths | $\tfrac{1}{10} = 0.1$ |
| hundreds | $100$ | | hundredths | $\tfrac{1}{100} = 0.01$ |
| tens | $10$ | | thousandths | $\tfrac{1}{1000} = 0.001$ |
| ones | $1$ | | ten-thousandths | $\tfrac{1}{10000} = 0.0001$ |

A zero inside a number is not decoration — it *holds* the digits after it in
their slots ($3.406$ versus $3.46$).

*From* [1.1](lessons/01-01-place-value-and-integers.md) *and* [2.2](lessons/02-02-decimals-and-conversions.md)

### Signed arithmetic

Predict the sign first, then compute the digits — that order is the whole point.

| Move | Rule |
|---|---|
| add $a + b$ | start at $a$, step $b$ units: right if $b > 0$, left if $b < 0$ |
| subtract | $a - b = a + (-b)$ — subtracting is adding the opposite |
| subtract a negative | $a - (-b) = a + b$ — it grows |
| multiply / divide | like signs give $+$, unlike signs give $-$ |
| several factors | count the minus signs: even → positive, odd → negative |

$$(+)(+) = +,\quad (-)(-) = +,\quad (+)(-) = -,\quad (-)(+) = -$$

*From* [1.1](lessons/01-01-place-value-and-integers.md)

### Order of operations

Tightest-binding operation first; ties are read left to right like English.

1. **Grouping** — parentheses, brackets, and the *invisible* grouping of a fraction bar or a radical. Innermost first.
2. **Exponents** (powers and roots).
3. **Multiplication and division** — one tier, left to right.
4. **Addition and subtraction** — one tier, left to right.

PEMDAS is a useful mnemonic that lies by omission: "MD" is one step and "AS" is
one step. A leading minus is *looser* than an exponent, so $-3^2 = -9$ while
$(-3)^2 = 9$.

*From* [1.2](lessons/01-02-order-of-operations.md)

### Divisibility rules

Read the answer off the digits instead of dividing.

| Divisor | Test |
|---|---|
| 2 | last digit is even ($0,2,4,6,8$) |
| 3 | digit sum is divisible by 3 |
| 4 | last **two** digits form a number divisible by 4 |
| 5 | last digit is $0$ or $5$ |
| 6 | divisible by **both** 2 and 3 |
| 9 | digit sum is divisible by 9 |
| 10 | last digit is $0$ |

Why the digit sum works for 3 and 9: every power of ten is "a multiple of 9, plus
1," so $437 = 4(99{+}1) + 3(9{+}1) + 7$ leaves exactly the digit sum behind.

*From* [1.3](lessons/01-03-factors-primes-divisibility.md)

### Small primes, and testing primality

The primes below 100 — worth knowing on sight:

$$2,\,3,\,5,\,7,\,11,\,13,\,17,\,19,\,23,\,29,\,31,\,37,\,41,\,43,\,47,\,53,\,59,\,61,\,67,\,71,\,73,\,79,\,83,\,89,\,97$$

**Trial division stops at the square root.** To decide whether $n$ is prime, test
only primes $p$ with $p \le \sqrt{n}$ — a factor larger than $\sqrt{n}$ would need
a partner smaller than $\sqrt{n}$, which you would already have found. So $109$ is
settled by testing $2,3,5,7$ alone ($\sqrt{109} \approx 10.4$).

Useful squares for that cutoff: $10^2 = 100$, $15^2 = 225$, $20^2 = 400$,
$25^2 = 625$, $30^2 = 900$.

*From* [1.3](lessons/01-03-factors-primes-divisibility.md)

### GCD and LCM from the recipes

Line the two prime factorizations up prime by prime. GCD keeps the smaller
stockpile of each atom; LCM keeps the larger.

$$24 = 2^3\cdot 3, \quad 36 = 2^2\cdot 3^2 \;\Longrightarrow\; \gcd = 2^2\cdot 3 = 12, \quad \operatorname{lcm} = 2^3\cdot 3^2 = 72$$

$$\gcd(a,b)\cdot\operatorname{lcm}(a,b) = a\,b$$

That identity holds because, for each prime, the smaller and larger exponent add
up to the same total as the two originals.

*From* [1.3](lessons/01-03-factors-primes-divisibility.md)

### Fraction arithmetic

You may add only when the piece sizes match; multiplication and division don't
care.

$$\frac{a}{b} \pm \frac{c}{d} = \frac{a(m/b) \pm c(m/d)}{m}, \quad m = \operatorname{lcm}(b,d) \qquad\text{(fallback: } \tfrac{ad \pm bc}{bd}\text{)}$$

$$\frac{a}{b}\times\frac{c}{d} = \frac{ac}{bd}, \qquad \frac{a}{b}\div\frac{c}{d} = \frac{a}{b}\times\frac{d}{c} = \frac{ad}{bc}$$

Reduce *before* multiplying — it keeps the numbers small. Invert-and-multiply
isn't arbitrary: $\tfrac{a}{b}\div\tfrac{c}{d}$ is the $x$ with
$x\cdot\tfrac{c}{d} = \tfrac{a}{b}$, and multiplying both sides by $\tfrac{d}{c}$
collapses it.

*From* [2.1](lessons/02-01-fractions.md)

### Decimal arithmetic — three different moves

| Operation | What you do | Example |
|---|---|---|
| add / subtract | **align the points**, pad with zeros | $12.40 + 3.75 = 16.15$ |
| multiply | **count** total decimal places in the factors, place the point that many from the right | $1.2\times 0.03$: $12\times3=36$, $1{+}2=3$ places, $= 0.036$ |
| divide | **slide both points** right until the divisor is whole | $4.5 \div 0.15 = 450 \div 15 = 30$ |

*From* [2.2](lessons/02-02-decimals-and-conversions.md)

### Fraction ↔ decimal ↔ percent

Three costumes, one number. Fraction to decimal: divide, or supply the missing 2s
and 5s to reach a power of ten ($\tfrac{3}{8} = \tfrac{3\times 125}{1000} = 0.375$).
Decimal to percent: multiply by 100. Percent to decimal: divide by 100.

| Fraction | Decimal | Percent | | Fraction | Decimal | Percent |
|---|---|---|---|---|---|---|
| $\tfrac{1}{2}$ | $0.5$ | $50\%$ | | $\tfrac{1}{8}$ | $0.125$ | $12.5\%$ |
| $\tfrac{1}{3}$ | $0.\overline{3}$ | $33\tfrac{1}{3}\%$ | | $\tfrac{3}{8}$ | $0.375$ | $37.5\%$ |
| $\tfrac{2}{3}$ | $0.\overline{6}$ | $66\tfrac{2}{3}\%$ | | $\tfrac{5}{8}$ | $0.625$ | $62.5\%$ |
| $\tfrac{1}{4}$ | $0.25$ | $25\%$ | | $\tfrac{7}{8}$ | $0.875$ | $87.5\%$ |
| $\tfrac{3}{4}$ | $0.75$ | $75\%$ | | $\tfrac{1}{6}$ | $0.1\overline{6}$ | $16\tfrac{2}{3}\%$ |
| $\tfrac{1}{5}$ | $0.2$ | $20\%$ | | $\tfrac{5}{6}$ | $0.8\overline{3}$ | $83\tfrac{1}{3}\%$ |
| $\tfrac{2}{5}$ | $0.4$ | $40\%$ | | $\tfrac{1}{10}$ | $0.1$ | $10\%$ |
| $\tfrac{3}{5}$ | $0.6$ | $60\%$ | | $\tfrac{1}{20}$ | $0.05$ | $5\%$ |
| $\tfrac{7}{40}$ | $0.175$ | $17.5\%$ | | $\tfrac{1}{100}$ | $0.01$ | $1\%$ |

*From* [2.2](lessons/02-02-decimals-and-conversions.md)

### Repeating decimal to fraction

Name it, build two shifted copies whose tails line up, subtract to annihilate the
tail, solve.

For $x = 0.8\overline{3}$: $\;10x = 8.\overline{3}$ and $100x = 83.\overline{3}$, so
$90x = 75$ and $x = \tfrac{75}{90} = \tfrac{5}{6}$.

Shift by one power of ten per repeating digit; the second shift parks the
repeating block in the same position.

*From* [2.2](lessons/02-02-decimals-and-conversions.md)

### Ratios and proportions

Split a whole in the ratio $a:b$ by finding the **part** first, then scaling.

$$\text{parts} = a + b, \qquad \text{one part} = \frac{\text{whole}}{a+b}, \qquad \text{shares} = a\cdot\text{part},\; b\cdot\text{part}$$

Splitting 20 in the ratio $2:3$: five parts, each $4$, giving $8$ and $12$. The
share $a$ is the fraction $\tfrac{a}{a+b}$ of the whole. Solve a proportion by
cross-multiplying: $\tfrac{a}{b} = \tfrac{c}{d} \Rightarrow ad = bc$.

*From* [2.3](lessons/02-03-ratios-proportions-percents.md)

### Percent calculations

| Question | Do this |
|---|---|
| $p\%$ of $N$ | $\dfrac{p}{100}\cdot N$ |
| increase $N$ by $p\%$ | $N\left(1 + \tfrac{p}{100}\right)$ |
| decrease $N$ by $p\%$ | $N\left(1 - \tfrac{p}{100}\right)$ |
| discount of $p\%$ | pay $\left(100 - p\right)\%$ of list |
| reverse a $p\%$ change | **divide** by the multiplier, don't subtract |
| two changes in a row | multiply the multipliers |
| what percent is $A$ of $B$ | $\dfrac{A}{B}\times 100\%$ |
| percent change from $A$ to $B$ | $\dfrac{B-A}{A}\times 100\%$ |

A rise of $p\%$ then a fall of $p\%$ multiplies by $1 - \tfrac{p^2}{100^2} < 1$ —
you never get back to the start. (A drop of $50\%$ needs a $100\%$ gain to
recover.)

*From* [2.3](lessons/02-03-ratios-proportions-percents.md)

### Rounding and estimation

**Round-half-up.** Name the place, look at the single digit to its *right* — the
deciding digit. $0$–$4$ rounds down, $5$–$9$ rounds up; zero out everything after.
Round in **one step from the original digits**, never in stages.

| Technique | What it is | When |
|---|---|---|
| front-end | keep only each leading digit ($312 + 48 \to 300 + 40$) | fastest; always low for sums |
| compatible numbers | nudge to values that combine cleanly ($47 \div 6 \to 48 \div 6$) | division, and anything with an awkward divisor |
| opposite directions | round one factor up and one down | tightens a product estimate — the errors cancel |
| same direction | round everything up (or down) on purpose | when you need a **guarantee**, not a guess |

The direction you round encodes what you're trying to prove. An inflated estimate
that still fits the budget proves you're safe; an inflated estimate that *doesn't*
fit proves nothing — go compute.

Which way an estimate is pushed: shrinking a numerator or growing a denominator
both push a quotient **down**.

*From* [3.1](lessons/03-01-rounding-and-estimation.md)

### Mental-math shortcuts

Reshape the computation before you do it — numbers are Lego.

| Shortcut | Statement | Example |
|---|---|---|
| distributive split | $a(b+c) = ab + ac$ | $18\times 21 = 18\times 20 + 18 = 378$ |
| distributive trim | $a(b-c) = ab - ac$ | $35\times 18 = 700 - 70 = 630$ |
| double / halve | $a\times b = (2a)\times(b/2)$ | $35\times 18 = 70\times 9 = 630$ |
| times 25 | $\times 25 = \times 100 \div 4$ | $48\times 25 = 4800/4 = 1200$ |
| percent anchors | $10\%$ shifts the point one place left, $1\%$ two | $15\%$ of $80 = 8 + 4 = 12$ |
| percent flip | $p\%$ of $q = q\%$ of $p$ | $8\%$ of $50 = 50\%$ of $8 = 4$ |

*From* [3.2](lessons/03-02-mental-math-and-sanity-checking.md)

### The three-part sanity check

Estimate first, compute second, then interrogate the answer. Run it every time —
the dangerous errors look perfectly ordinary.

| Check | Question | Catches |
|---|---|---|
| **sign** | positive or negative as expected? | flipped signs, a cost that came out below zero |
| **size** | right order of magnitude versus your estimate? | misplaced decimals, dropped or extra zeros |
| **units** | does the label make sense? | dollars where you wanted dollars-per-item |

A factor-of-10 mismatch is almost always a decimal-place slip; a factor of 1000 is
usually a million/billion swap. When the estimate and the "exact" answer disagree,
one of them is wrong — and the estimate is the cheap one to trust while you
re-check.

*From* [3.2](lessons/03-02-mental-math-and-sanity-checking.md) *and* [3.1](lessons/03-01-rounding-and-estimation.md)

## Pitfalls

### Signs and ordering

- Bigger magnitude does **not** mean bigger number — among negatives it flips: $-9 < -2$, and $-1{,}240 < -1{,}204$. Check position on the line, not the digits. *([1.1](lessons/01-01-place-value-and-integers.md))*
- Subtracting a negative makes things **grow**: $5 - (-3) = 8$. It's "add the opposite," not a slogan. *([1.1](lessons/01-01-place-value-and-integers.md))*
- $-3^2 = -9$ but $(-3)^2 = 9$ — the exponent binds tighter than a leading minus. Write the parentheses whenever you mean "square the negative." *([1.1](lessons/01-01-place-value-and-integers.md), [1.2](lessons/01-02-order-of-operations.md))*

### Order of operations

- M does **not** outrank D, and A does not outrank S: each pair is one tier, left to right. $8 \div 2 \times 4 = 16$, and $10 - 4 + 3 = 9$. Doing all the additions first is the single most common slip. *([1.2](lessons/01-02-order-of-operations.md))*
- A fraction bar (and a radical) groups silently: $\tfrac{6+4}{2} = 5$, not $8$. Retyping a fraction on one line means adding parentheses. *([1.2](lessons/01-02-order-of-operations.md))*

### Factors and primes

- "Factor" and "multiple" point in opposite directions — 6 is a *factor* of 24; 24 is a *multiple* of 6. *([1.3](lessons/01-03-factors-primes-divisibility.md))*
- The digit-sum trick works **only** for 3 and 9. It says nothing about 2, 4, 5, or 7. *([1.3](lessons/01-03-factors-primes-divisibility.md))*
- GCD is never bigger than either number and LCM is never smaller — if yours violates that, you took a higher power where you needed a lower one. *([1.3](lessons/01-03-factors-primes-divisibility.md))*
- $1$ is neither prime nor composite, and $2$ is the only even prime. *([1.3](lessons/01-03-factors-primes-divisibility.md))*

### Fractions

- You cannot add straight across: $\tfrac12 + \tfrac13 \neq \tfrac25$. Straight-across is for **multiplication**. Match the piece sizes first. *([2.1](lessons/02-01-fractions.md))*
- Cancelling works on **factors** of the whole top and bottom, never on one term of a sum: $\tfrac{2+3}{2} = \tfrac52$, full stop. *([2.1](lessons/02-01-fractions.md))*
- Dividing by a number less than 1 makes the result **bigger** — $\tfrac34 \div \tfrac18 = 6$ is not a mistake. *([2.1](lessons/02-01-fractions.md))*

### Decimals

- Align the **points** for addition, not the right-hand ends; pad with zeros so the columns match. *([2.2](lessons/02-02-decimals-and-conversions.md))*
- Multiplication does the opposite — you **count** places, you don't align. Two small factors giving a tiny answer is correct. *([2.2](lessons/02-02-decimals-and-conversions.md))*
- Whether a decimal repeats depends on the **reduced** denominator, not on how messy the division looks: $\tfrac{6}{15}$ reduces to $\tfrac25 = 0.4$ and terminates. Reduce first, then check for primes other than 2 and 5. *([2.2](lessons/02-02-decimals-and-conversions.md))*

### Percents and ratios

- Percent changes **multiply**; they don't add and cancel. Up $20\%$ then down $20\%$ is $1.2\times 0.8 = 0.96$, a net $4\%$ loss. *([2.3](lessons/02-03-ratios-proportions-percents.md))*
- Reversing a percent takes **division**, not addition: if $25\%$ off leaves 60 dollars, the original is $60 \div 0.75 = 80$, not $75$. *([2.3](lessons/02-03-ratios-proportions-percents.md))*
- A ratio is not a count — $3:5$ means 3 parts to 5 parts, and a part can be any size. Find the part first, then scale. *([2.3](lessons/02-03-ratios-proportions-percents.md))*

### Estimation and checking

- Don't round in stages: $2.48$ to the nearest whole is $2$, not $2.48 \to 2.5 \to 3$. Double rounding invents a carry. *([3.1](lessons/03-01-rounding-and-estimation.md))*
- Rounding errors don't stay put — they compound with the operation, and division flips the direction (a shrunken denominator raises the quotient). Track which way your estimate is pushed. *([3.1](lessons/03-01-rounding-and-estimation.md))*
- Round every term to a precision matched to **its own scale**: dropping the 3 in $6{,}000 + 3$ is fine; dropping it in $6 + 3$ is not. *([3.1](lessons/03-01-rounding-and-estimation.md))*
- A sanity check certifies the *neighborhood*, not the *address* — use it to reject disasters, never to declare an answer final. *([3.2](lessons/03-02-mental-math-and-sanity-checking.md))*
- Run the check even when the answer looks ordinary; 1.44 dollars is a perfectly plausible-looking figure and still off by a factor of ten. *([3.2](lessons/03-02-mental-math-and-sanity-checking.md))*
- Units are a full third of the check and usually the fastest: total dollars divided by items is dollars **per item**, and mislabeling it usually means the arithmetic slipped too. Say them out loud. *([3.2](lessons/03-02-mental-math-and-sanity-checking.md))*
