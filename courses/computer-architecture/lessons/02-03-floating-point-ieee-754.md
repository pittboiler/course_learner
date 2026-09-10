# Computer Architecture · Lesson 2.3: Floating point — IEEE-754 and its arithmetic

> ⏱ ~15 min · Module 2: Computer arithmetic · Builds on: [2.1 (the ALU)](02-01-alu-addition-subtraction-overflow.md), [2.2 (multiplication and division)](02-02-multiplication-and-division.md) · Unlocks: 3.3 (pipelining), 5.1 (measuring performance)

## Why this matters

Integers represent a contiguous range exactly. Floating point represents an enormous range approximately, and the approximation is not uniform — the gaps between representable numbers grow with magnitude.

Everything surprising about floating point follows from that one fact. `0.1 + 0.2 != 0.3`. Summing an array in a different order gives a different total. A value can be large enough that adding 1 to it changes nothing. These are not bugs in the hardware; they are the specified, deterministic behaviour of a system that trades exactness for range, and IEEE-754 is the standard that makes the trade identical on every machine.

## The idea

Scientific notation, in binary, with a fixed budget of bits.

Write a number as $\pm 1.f \times 2^e$. Store the sign in one bit, the exponent $e$ in a few, and the fraction $f$ in the rest. Because a normalised binary number always starts with 1, that leading 1 is **not stored** — it is implied, buying one extra bit of precision for free.

The consequence that drives everything: **the fraction has a fixed number of bits, so precision is relative, not absolute.** Near 1, neighbouring floats are about $10^{-7}$ apart. Near $10^{6}$, they are about $0.1$ apart. Near $2^{24}$, they are exactly 2 apart — which is why $2^{24} + 1$ has nowhere to land and rounds back to $2^{24}$.

Addition is where this bites, because adding numbers of different magnitudes requires **aligning** them first, and alignment shifts the smaller number's bits off the end of the register. Those bits are gone, and with them the associativity of addition.

## The formal version

**Single precision (32 bits).**

| Field | Bits | Meaning |
|---|---|---|
| sign $s$ | 1 | 0 positive, 1 negative |
| exponent $E$ | 8 | **biased** by 127 |
| fraction $f$ | 23 | the bits after the implied leading 1 |

> **For a normal number** ($1 \le E \le 254$):
> $$\text{value} = (-1)^s \times 1.f \times 2^{E-127}$$

The bias exists so exponents can be compared as unsigned integers — which means two floats can be compared for ordering by comparing their bit patterns as integers, a genuinely useful property for sorting.

**The special exponents.**

| $E$ | $f$ | Meaning |
|---|---|---|
| $0$ | $0$ | zero (signed: $+0$ and $-0$ both exist) |
| $0$ | $\neq 0$ | **denormal**: $(-1)^s\times 0.f\times 2^{-126}$, no implied 1 |
| $255$ | $0$ | $\pm\infty$ |
| $255$ | $\neq 0$ | NaN (not a number) |

Denormals exist to make **gradual underflow** work: without them the gap between zero and the smallest normal number would be far larger than the gap between adjacent small normals, and `x - y == 0` could be true for distinct `x` and `y`.

**Double precision (64 bits)** uses 11 exponent bits with bias 1023 and 52 fraction bits, giving about 15–17 decimal digits against single's 6–9.

**Range and precision, single precision.**

| Quantity | Value |
|---|---|
| largest finite | $\approx 3.4\times 10^{38}$ |
| smallest normal | $\approx 1.18\times 10^{-38}$ |
| machine epsilon | $2^{-23}\approx 1.19\times 10^{-7}$ |
| largest exactly representable integer | $2^{24} = 16777216$ |

That last row is the one that surprises people: **beyond $2^{24}$, not every integer is a float.** At $2^{24}$ the spacing is 2, so odd numbers simply do not exist there. A 32-bit `int` can hold values a `float` cannot represent exactly, which is why converting `int` to `float` and back is lossy above 16.7 million.

**Encoding a number.** To encode $-6.5$:

1. Sign: negative, so $s = 1$.
2. Magnitude in binary: $6.5 = \texttt{110.1}_2$.
3. Normalise: $\texttt{110.1} = 1.101 \times 2^2$, so the true exponent is 2.
4. Bias it: $E = 2 + 127 = 129 = \texttt{10000001}$.
5. Fraction: the bits after the leading 1, padded to 23: $\texttt{101}0000\ldots0$.

$$\underbrace{1}_{s}\ \underbrace{10000001}_{E}\ \underbrace{10100000000000000000000}_{f} = \texttt{0xC0D00000}$$

**Addition requires alignment.** To compute $a + b$:

1. Compare exponents; shift the **smaller** operand's mantissa right by the difference.
2. Add the mantissas.
3. Renormalise the result and round.

Step 1 is where information is lost. Shifting right by $k$ discards $k$ bits off the bottom, and if the exponent difference exceeds 24, the smaller operand vanishes entirely: $2^{24} + 1 = 2^{24}$ exactly.

**Rounding.** The default is **round to nearest, ties to even**. Ties-to-even rather than ties-away avoids a systematic upward bias when many roundings accumulate. IEEE-754 requires the four basic operations and square root to be **correctly rounded** — the result must be the representable number nearest the exact mathematical answer, which is what makes floating point reproducible across conforming machines.

**Why addition is not associative.** Alignment loses low bits, and how much is lost depends on the order of operations. With $a = 2^{24}$, $b = 1$, $c = -2^{24}$:
$$(a+b)+c = 2^{24} + (-2^{24}) = 0 \qquad\text{since } a+b \text{ rounds to } 2^{24}$$
$$a+(b+c) = 2^{24} + (1 - 2^{24}) = 1 \qquad\text{since } 1-2^{24} \text{ is exact}$$

**Multiplication is better behaved** than addition: multiply the mantissas ([2.2](02-02-multiplication-and-division.md)'s integer multiplier), add the exponents, normalise, round. No alignment step means no catastrophic loss, and floating-point multiplication *is* commutative and does not suffer the same reordering hazard — though it is still not associative, because rounding happens at each step.

## Picture

![The 32-bit float layout as three coloured fields for sign, exponent and mantissa, with the encoding of minus 6.5 worked beneath it, and below a number line from 0 to 16 showing equal numbers of tick marks in each doubling interval so the spacing widens as values grow](assets/02-03-fig1.svg)

The number line is the whole lesson in one picture. Every doubling interval — $[1,2)$, $[2,4)$, $[4,8)$ — contains the *same* number of representable values, because each has the same 23 fraction bits and only the exponent differs. So the absolute gap doubles every octave, and by $2^{24}$ it has reached 2.

## Worked examples

**Example 1 (mechanical): decode `0x41A80000`.** Split the 32 bits into the three fields.

$$\texttt{0100 0001 1010 1000 0000 0000 0000 0000}$$

| field | bits | value |
|---|---|---|
| $s$ | `0` | positive |
| $E$ | `10000011` | $131$ |
| $f$ | `01010000...` | fraction bits |

Unbias the exponent: $131 - 127 = 4$.

Reconstruct the mantissa with its implied leading 1: $1.0101_2$. Converting,
$$1.0101_2 = 1 + \tfrac14 + \tfrac{1}{16} = 1.3125 .$$

$$\text{value} = +1.3125 \times 2^4 = \boxed{21.0}$$

*Check by re-encoding.* $21 = \texttt{10101}_2 = 1.0101\times 2^4$; exponent $4 + 127 = 131 = \texttt{10000011}$ ✓; fraction `0101` padded ✓.

**Example 2 (why you'd care): summing an array in two orders.** Sum $10^7$ values, one of which is $10^{7}$ and the rest are $1.0$, in single precision.

*Largest first.* Start with $10^7$ and add 1.0 repeatedly. At $10^7$, the exponent is 23 ($2^{23} = 8388608$), so the spacing between neighbouring floats is $2^{23-23} = 1$ — adding 1 still works, barely. But as the sum climbs past $2^{24} = 16777216$, the spacing becomes 2, and **adding 1.0 rounds back to the same value.** The sum sticks. The final answer is wrong by millions.

*Smallest first.* Add the $10^7$ ones together first. They accumulate correctly while the running total is below $2^{24}$, and above that the same sticking begins — so this ordering also loses accuracy, though it reaches a larger correct value before failing.

*The fix that actually works* is **compensated summation** (Kahan's algorithm), which carries a running correction term for the bits lost in each rounding:

```
sum = 0; c = 0;
for each x:
    y = x - c            # apply the correction
    t = sum + y          # the lossy addition
    c = (t - sum) - y    # recover exactly what was lost
    sum = t
```

The line `c = (t - sum) - y` looks algebraically like zero and is not, precisely because the addition `sum + y` was rounded — it recovers the discarded low bits. Kahan summation gives a result accurate to within a couple of ulps regardless of ordering and array length.

Three practical consequences worth carrying. **Never test floats for equality**; compare against a tolerance appropriate to the magnitude. **Reordering a floating-point sum changes the answer**, which is why compilers may not reassociate float arithmetic without an explicit flag, and why a parallel reduction gives a different result from a serial one — not a wrong one, a different one. And **use double unless you have measured that single is enough**; the extra 29 mantissa bits push the sticking point from $2^{24}$ to $2^{53}$, about $9\times 10^{15}$.

## Watch out

- **You might think** floats are "approximate" in a fuzzy or random way — **but actually** every operation is exactly specified and fully deterministic. The same program on two conforming machines gives bit-identical results. The unpredictability is in your expectations, not the hardware.
- **You might think** `0.1` is stored as one tenth — **but actually** $0.1$ is not a finite binary fraction, so it stores as `0x3DCCCCCD`, slightly more than a tenth. This is why `0.1 + 0.2 != 0.3` and why currency should be handled in integer cents rather than floats.
- **You might think** integers are always safe in a float — **but actually** only up to $2^{24}$ for single precision. Storing a 32-bit ID or a large count in a `float` silently loses the low bits, and the failure appears only once values grow past 16.7 million.

## One-liner

> A float is a sign, a biased exponent and a fraction with an implied leading 1, so precision is *relative* — the gap between neighbours doubles with every octave, which is why alignment during addition throws away low bits and why summing the same numbers in a different order gives a different answer.

## Problems

**P1 (🟢)** Encode $+12.75$ as a 32-bit single-precision float. Give the normalised binary form, the biased exponent in binary, the first several fraction bits, and the 8-hex-digit result.

**P2 (🟡)** Decode `0xC1300000`. Give the sign, the unbiased exponent, the mantissa as a binary fraction with its implied 1, and the decimal value. Then state the spacing between adjacent floats at that magnitude.

**P3 (🔴, optional)** Let $a = 2^{20}$, $b = 0.5$, $c = -2^{20}$, all single precision. (a) Compute $(a+b)+c$ and $a+(b+c)$, showing which step loses information. (b) Give the largest $b$ for which $a + b = a$ exactly at this magnitude. (c) Explain why the same three values in *double* precision associate correctly.

<details>
<summary>Solutions</summary>

**P1** *Step 1 — sign.* Positive, so $s = 0$.

*Step 2 — binary.* $12.75 = 8 + 4 + 0.5 + 0.25 = \texttt{1100.11}_2$.

*Step 3 — normalise.* Move the point left 3 places:
$$\texttt{1100.11}_2 = 1.10011 \times 2^3 , \qquad \text{true exponent} = 3 .$$

*Step 4 — bias.* $E = 3 + 127 = 130 = \texttt{10000010}$.

*Step 5 — fraction.* The bits after the leading 1, padded to 23:
$$f = \texttt{10011}\,000000000000000000 .$$

*Assemble:*
$$\underbrace{0}_{s}\ \underbrace{10000010}_{E}\ \underbrace{10011000000000000000000}_{f}$$
Regrouping into nibbles:
$$\texttt{0100 0001 0100 1100 0000 0000 0000 0000} = \boxed{\texttt{0x414C0000}}$$

**P2** *Bit pattern* of `0xC1300000`:
$$\texttt{1100 0001 0011 0000 0000 0000 0000 0000}$$

| field | bits | value |
|---|---|---|
| $s$ | `1` | **negative** |
| $E$ | `10000010` | $130$ |
| $f$ | `0110000...` | |

*Unbiased exponent:* $130 - 127 = \boxed{3}$.

*Mantissa with implied 1:* $1.0110_2 = 1 + \tfrac14 + \tfrac18 = 1.375$.

*Value:*
$$(-1)^1 \times 1.375 \times 2^3 = -1.375 \times 8 = \boxed{-11.0}$$

*Spacing at this magnitude.* The fraction has 23 bits, and the exponent is 3, so consecutive representable values differ by
$$2^{e-23} = 2^{3-23} = 2^{-20} \approx 9.54\times 10^{-7} .$$

So near $-11$, floats are spaced about one part in ten million — plenty for most purposes, and a useful reminder that precision at this magnitude is nothing like precision at $2^{24}$, where the spacing is 2.

**P3** *(a) The two orderings.* At $a = 2^{20} = 1048576$, the exponent is 20, so the spacing between adjacent floats is
$$2^{20-23} = 2^{-3} = 0.125 .$$

Since $b = 0.5$ is a multiple of $0.125$ — indeed four times it — **it is exactly representable at this magnitude and no information is lost**:
$$(a+b) = 1048576.5 \quad\text{exactly}, \qquad (a+b)+c = 1048576.5 - 1048576 = \boxed{0.5}$$

The other order:
$$b + c = 0.5 - 1048576 = -1048575.5 \quad\text{(exactly representable, same spacing)}$$
$$a + (b+c) = 1048576 - 1048575.5 = \boxed{0.5}$$

**Both give 0.5 — they associate correctly here.** That is the instructive part of the problem: the non-associativity of the [2.3](02-03-floating-point-ieee-754.md) example is not a general law about floats, it is a consequence of the *specific* magnitudes involved. At $2^{20}$ the spacing is $0.125$ and a $0.5$ addend survives alignment intact; at $2^{24}$ the spacing is 2 and a $1$ addend does not.

*(b) The largest $b$ with $a + b = a$.* Adding $b$ to $a = 2^{20}$ leaves $a$ unchanged when the exact sum rounds back to $a$. With spacing $0.125$, the midpoint between $a$ and its next neighbour is $a + 0.0625$. Under round-to-nearest-ties-to-even, any $b < 0.0625$ rounds down to $a$; at exactly $b = 0.0625$ the sum is a tie, and since $a$ has an even mantissa (all fraction bits zero) the tie rounds **to** $a$.

$$\boxed{b = 0.0625 = 2^{-4}} \quad\text{is the largest addend that vanishes}$$

Any larger $b$ produces a sum that rounds to at least the next representable value.

*(c) Why double precision associates.* Double has **52** fraction bits rather than 23, so at $a = 2^{20}$ the spacing is
$$2^{20-52} = 2^{-32} \approx 2.3\times 10^{-10} ,$$
about four billion times finer. A $0.5$ addend is not merely representable but enormous relative to the spacing, so no alignment loss occurs in any ordering.

More generally, the magnitude at which "adding 1 does nothing" moves from $2^{24}\approx 1.7\times 10^7$ in single to $2^{53}\approx 9\times 10^{15}$ in double. That is the practical reason double is the sensible default: the failure modes of this lesson still exist, but they are pushed out to magnitudes most programs never reach. The failure has not been removed — a sum of $10^{16}$ items, or values spanning more than 53 binary orders of magnitude, hits exactly the same wall — which is why Kahan summation remains worth knowing even in double.

</details>

## Flashback

**From Lesson 2.1 (the ALU — addition, subtraction, and overflow):** A 64-bit ripple-carry adder has a full-adder delay of 45 ps; the rest of the datapath's longest path is 600 ps. (a) Give the cycle time and clock frequency. (b) A carry-lookahead design brings the adder to 6 levels at 80 ps each. Give the new cycle time, frequency, and the overall speedup. (c) What is now the critical path?

<details>
<summary>Solution</summary>

*(a) With the ripple-carry adder.*
$$T_{\text{ALU}} = 64 \times 45 = 2880 \text{ ps} .$$
The cycle time is the longest path in the design:
$$T = \max(2880,\ 600) = 2880 \text{ ps} , \qquad f = \frac{1}{2880\times 10^{-12}} \approx \boxed{347 \text{ MHz}} .$$

*(b) With the lookahead adder.*
$$T_{\text{ALU}} = 6 \times 80 = 480 \text{ ps} ,$$
$$T = \max(480,\ 600) = 600 \text{ ps} , \qquad f = \frac{1}{600\times 10^{-12}} \approx \boxed{1.67 \text{ GHz}} .$$
$$\text{speedup} = \frac{2880}{600} = \boxed{4.8\times}$$

*(c) The new critical path is the 600 ps non-ALU path* — the adder, at 480 ps, is no longer binding.

This is [2.1](02-01-alu-addition-subtraction-overflow.md)'s Example 2 with the numbers moved, and it makes the same point more sharply because the overshoot is larger. The adder improved by a factor of $2880/480 = 6.0$, but the machine only improved by $4.8\times$, because 120 ps of the adder's gain is unusable — the design hits the 600 ps floor first.

The practical reading: an architect looking at these numbers would stop optimising the adder immediately and go find out what constitutes the 600 ps path, since that is now the only thing whose improvement can move the clock. A further redesign taking the adder to 300 ps would deliver **exactly zero** additional performance.

Worth noting how well the $\log n$ scaling holds up at 64 bits. Ripple delay doubles going from 32 to 64 bits (32 to 64 full-adder delays); lookahead depth grows by only one level, from about 5 to about 6. **Wide adders are where the tree structure earns the most**, which is why 64-bit machines universally use lookahead or parallel-prefix adders and why nobody has shipped a ripple-carry ALU in a performance part in decades.

</details>

## Connections

- **Backward:** floating-point multiply uses [2.2](02-02-multiplication-and-division.md)'s integer multiplier on the mantissas and [2.1](02-01-alu-addition-subtraction-overflow.md)'s adder on the exponents; float addition uses the same adder after an alignment shift. The `-6.5` encoding is the syllabus's Boss problem 2, worked here in full.
- **Forward:** floating-point operations have latencies of 3–5 cycles, longer than the single-cycle integer ALU, which is why [3.3](03-03-pipelining-and-the-pipelined-datapath.md)'s uniform five-stage pipeline needs separate multi-cycle functional units for them, and why [5.2](05-02-instruction-level-parallelism.md)'s out-of-order machinery pays off most on floating-point code.
- **Sideways:** the non-associativity here is why numerical algorithms are not interchangeable with their mathematical definitions — [`numerical-analysis`](../../numerical-analysis/syllabus.md) is largely the study of which algebraically-equivalent formulations stay accurate in floating point. It is also why a parallel sum and a serial sum legitimately disagree, a reproducibility problem every large-scale scientific code has to confront.
