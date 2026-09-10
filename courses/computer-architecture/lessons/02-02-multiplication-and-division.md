# Computer Architecture · Lesson 2.2: Multiplication and division

> ⏱ ~15 min · Module 2: Computer arithmetic · Builds on: [2.1 (the ALU and the critical path)](02-01-alu-addition-subtraction-overflow.md) · Unlocks: 2.3 (floating point), 5.1 (measuring performance)

## Why this matters

Addition takes one pass through one adder. Multiplication and division do not, and the gap is large enough to change how you write code: on real hardware a divide can cost twenty to forty times an add, and unlike a cache miss it is a cost you can usually just avoid.

Knowing the algorithms tells you *why* the costs differ, which is what lets you predict them. Multiplication is a fixed number of add-or-skip steps and pipelines beautifully. Division is inherently sequential — each step's decision depends on the previous step's remainder — which is why it remains slow, is rarely pipelined, and is worth strength-reducing out of loops.

## The idea

**Multiplication** is the long multiplication you learned as a child, in base 2, where it gets much easier: each digit of the multiplier is 0 or 1, so each partial product is either a shifted copy of the multiplicand or nothing at all. There is no multiplication table in binary. Scan the multiplier's bits; for each 1, add a shifted copy.

The product of two $n$-bit numbers needs $2n$ bits, which is why RISC-V splits the result across two instructions.

**Division** is long division, and it inherits long division's difficulty: at each step you must decide whether the divisor fits into the current remainder, and you cannot know that until you have done the previous subtraction. The **restoring** algorithm makes the decision concrete — subtract, and if the result went negative, put it back.

That "and if" is the whole problem. Multiplication's steps are independent enough to overlap; division's are a strict chain, like the carry chain of [2.1](02-01-alu-addition-subtraction-overflow.md) but one level up and far more expensive to break.

## The formal version

### Multiplication

> **Shift-and-add.** To compute $a \times b$ with $b$ an $n$-bit multiplier, initialise $P = 0$ and for $i = 0 \dots n-1$: if bit $i$ of $b$ is 1, add $a \ll i$ to $P$.

Equivalently, $a \times b = \sum_{i:\ b_i = 1} a \cdot 2^i$ — the binary expansion of $b$, distributed over the multiplication.

**Cost.** $n$ iterations, each an add and a shift. A naive sequential implementation takes $n$ cycles. But the partial products are all available at once, so hardware can instead build an **adder tree** summing all $n$ of them in $O(\log n)$ depth. A modern multiplier does a 32-bit multiply in 3–5 cycles and is fully pipelined — one result per cycle in steady state, even though each takes several cycles to complete.

**Why the product is double width.** The largest $n$-bit unsigned values are $2^n - 1$, and
$$(2^n-1)^2 = 2^{2n} - 2^{n+1} + 1 ,$$
which needs $2n$ bits. RISC-V therefore provides:

| Instruction | Returns |
|---|---|
| `mul rd, rs1, rs2` | low 32 bits of the product |
| `mulh rd, rs1, rs2` | high 32 bits, both operands **signed** |
| `mulhu` | high 32 bits, both **unsigned** |
| `mulhsu` | high 32 bits, `rs1` signed and `rs2` unsigned |

Needing the full 64-bit product costs **two instructions**. Most code needs only `mul`, because it is computing a value that fits.

**Signed multiplication** cannot simply reuse the unsigned algorithm on the raw bits, because a negative operand's leading 1s would be treated as huge positive weight. The standard fix is **Booth's algorithm**, which recodes the multiplier so runs of 1s become a single add and subtract; a simpler route is to negate negative operands, multiply, and fix the sign at the end.

### Division

> **Restoring division.** To compute $N \div D$, initialise $R = 0$ and $Q = 0$. For $i = n-1$ down to $0$: shift $R$ left and bring in bit $i$ of $N$; subtract $D$; if the result is negative, **restore** it by adding $D$ back and set $q_i = 0$; otherwise keep it and set $q_i = 1$.

At the end $Q$ is the quotient and $R$ the remainder, satisfying $N = QD + R$ with $0 \le R < D$.

**Cost.** $n$ iterations, and each one's subtraction depends on the previous one's outcome. That dependence is why division cannot be parallelised the way multiplication can. Real hardware uses radix-4 or radix-16 SRT division to retire 2 or 4 quotient bits per step, but the chain remains, and division stays the slowest common integer operation.

| Operation | Typical modern latency | Pipelined? |
|---|---|---|
| `add` | 1 cycle | yes |
| `mul` | 3–5 cycles | yes |
| `div` | 20–40 cycles | usually **no** |

RISC-V's division instructions are `div`, `divu`, `rem`, `remu`. Note that `div` and `rem` are **separate instructions** even though the hardware computes both at once — so if you need quotient and remainder, issue both and a good implementation will fuse them.

**Division by zero does not trap** in RISC-V. `div` by zero returns all ones ($-1$), `rem` returns the dividend. That is the same no-traps philosophy as [2.1](02-01-alu-addition-subtraction-overflow.md)'s silent overflow: the ISA declines to add control-flow complexity, and detection is the compiler's or programmer's job.

**Strength reduction.** Because division is expensive and shifts are free, compilers rewrite division by constants:

| Source | Compiled as | Caveat |
|---|---|---|
| `x / 2` (unsigned) | `srli x, 1` | exact |
| `x / 2` (signed) | `srai` **plus a correction** | rounding differs, see [1.3](01-03-arithmetic-logic-data-transfer.md) |
| `x / 10` | multiply by a magic constant, then shift | needs `mulh` |
| `x % 8` (unsigned) | `andi x, 7` | only for powers of two |

The `x / 10` trick is worth knowing: dividing by a constant $d$ is replaced by multiplying by $\lceil 2^k/d \rceil$ and shifting right by $k$, turning a 30-cycle divide into a 4-cycle multiply and a shift.

## Picture

![A four-row trace of 13 times 11 in binary showing at each step whether the multiplier bit is 1, whether a shifted copy is added, and the running product in binary and decimal, ending at 143, beside a note explaining why the product is double width and how RISC-V splits it across mul and mulh](assets/02-02-fig1.svg)

Read down the "running product" column: the value only changes on the steps where the multiplier bit is 1. Step 2 does nothing at all — and in a sequential implementation it still costs a cycle, which is precisely the inefficiency Booth recoding and adder trees exist to remove.

## Worked examples

**Example 1 (mechanical): restoring division of 143 by 11.** Eight-bit dividend $N = \texttt{10001111}$, divisor $D = \texttt{1011}$ ($=11$). Start with $R = 0$, and process $N$'s bits from the top.

| step | bring in bit | $R$ after shift-in | $R - D$ | action | $q_i$ |
|---|---|---|---|---|---|
| 7 | 1 | 1 | $-10$ | restore | 0 |
| 6 | 0 | 2 | $-9$ | restore | 0 |
| 5 | 0 | 4 | $-7$ | restore | 0 |
| 4 | 0 | 8 | $-3$ | restore | 0 |
| 3 | 1 | 17 | **6** | keep | **1** |
| 2 | 1 | 13 | **2** | keep | **1** |
| 1 | 1 | 5 | $-6$ | restore | 0 |
| 0 | 1 | 11 | **0** | keep | **1** |

Reading the quotient bits from step 7 down to step 0: $\texttt{00001101} = 13$, with final remainder $R = 0$.

$$143 = 13 \times 11 + 0 \quad\checkmark$$

Notice the shape of the work: **every step performs a subtraction**, and five of the eight are thrown away. That is the restoring algorithm's overhead, and it is why non-restoring and SRT variants exist — they avoid undoing work by allowing negative partial remainders and correcting at the end.

**Example 2 (why you'd care): a divide inside a loop.** Consider a loop normalising an array:

```c
for (i = 0; i < n; i++)  A[i] = A[i] / d;      /* d is loop-invariant */
```

Suppose `div` costs 25 cycles and everything else in the body costs 6.

*As written:* each iteration costs $25 + 6 = 31$ cycles, so $n = 10^6$ iterations take $31 \times 10^6 = 3.1 \times 10^7$ cycles. At 2 GHz that is **15.5 ms**.

*With the reciprocal-multiply transformation*, computing the magic constant once outside the loop and replacing the divide with `mulh` plus a shift — say 5 cycles instead of 25:
$$(5 + 6 + 1) \times 10^6 = 1.2\times 10^7 \text{ cycles} = \textbf{6.0 ms} .$$

**A 2.6x speedup on the whole loop** from replacing one instruction, with identical results for every input.

Two things to take from this. Compilers do this automatically **when `d` is a compile-time constant**, because the magic number can be computed at compile time — so `x / 10` is fast and `x / d` for a runtime `d` is not. If a divisor is loop-invariant but not compile-time known, hoisting a reciprocal computation out of the loop yourself is one of the few remaining hand optimisations that reliably pays.

And note this is a *latency* argument, not an instruction-count argument: the transformed loop executes **more** instructions and runs 2.6x faster. Counting instructions would have predicted the opposite, which is exactly why [5.1](05-01-measuring-performance-cpi-amdahl.md) insists on CPI rather than instruction count alone.

## Watch out

- **You might think** `mul` gives you the whole product — **but actually** it gives the low 32 bits, silently discarding overflow. Multiplying two numbers near $2^{16}$ overflows 32 bits and `mul` will not tell you; you need `mulh` to see the rest.
- **You might think** `div` and `rem` should be one instruction since the hardware computes both — **but actually** RISC-V keeps them separate to preserve the one-destination-register format from [1.2](01-02-registers-memory-instruction-formats.md). Implementations are expected to *fuse* an adjacent `div`/`rem` pair on the same operands into a single division.
- **You might think** replacing a divide with a shift is always safe — **but actually** it is only exact for unsigned values or exact multiples. For signed division the shift rounds toward $-\infty$ while the language rounds toward zero, so the compiler must add a correction ([1.3](01-03-arithmetic-logic-data-transfer.md) P1).

## One-liner

> Multiplication is $n$ independent add-or-skip steps, so it parallelises into a tree and pipelines; division is $n$ steps each depending on the last, so it stays sequential and slow — which is why compilers work so hard to turn divides into multiplies.

## Problems

**P1 (🟢)** Trace the shift-and-add multiplication of $a = 6$ ($\texttt{0110}$) by $b = 5$ ($\texttt{0101}$). Give the running product after each of the four steps in binary, the final product in decimal, and how many of the four steps performed an actual addition.

**P2 (🟡)** Perform restoring division of $N = 100$ by $D = 7$ using 8 bits. Give a table with the remainder after each shift-in, whether the step kept or restored, and the quotient bit. State the final quotient and remainder and verify $N = QD + R$.

**P3 (🔴, optional)** A loop body executes 4 instructions plus one `div` (24 cycles); every other instruction is 1 cycle. (a) Give the cycles per iteration and the CPI. (b) The divisor is loop-invariant, so you replace the divide with a 4-cycle `mulh` plus 2 one-cycle instructions. Give the new cycles per iteration, the new CPI, and the speedup. (c) Explain why the CPI got *worse* while the loop got faster, and what that says about CPI as a metric.

<details>
<summary>Solutions</summary>

**P1** $a = \texttt{0110}$ ($=6$), $b = \texttt{0101}$ ($=5$). Scan $b$'s bits from position 0.

| step $i$ | $b_i$ | action | running product | decimal |
|---|---|---|---|---|
| 0 | **1** | add $\texttt{0110} \ll 0 = 6$ | `00000110` | 6 |
| 1 | 0 | nothing | `00000110` | 6 |
| 2 | **1** | add $\texttt{0110}\ll 2 = 24$ | `00011110` | 30 |
| 3 | 0 | nothing | `00011110` | 30 |

$$6 \times 5 = \boxed{30} \quad\checkmark$$

**Two of the four steps performed an addition** — the steps where $b_i = 1$, and $b = \texttt{0101}$ has two set bits.

That ratio is the point. A sequential shift-and-add multiplier spends a cycle on every step regardless, so half the work here is idle. Booth recoding attacks exactly this, and an adder-tree implementation sidesteps it by summing all partial products at once rather than iterating.

**P2** $N = 100 = \texttt{01100100}$, $D = 7$. Process bits from position 7 down.

| step | bit in | $R$ after shift-in | $R - 7$ | action | $q_i$ |
|---|---|---|---|---|---|
| 7 | 0 | 0 | $-7$ | restore | 0 |
| 6 | 1 | 1 | $-6$ | restore | 0 |
| 5 | 1 | 3 | $-4$ | restore | 0 |
| 4 | 0 | 6 | $-1$ | restore | 0 |
| 3 | 0 | 12 | **5** | keep | **1** |
| 2 | 1 | 11 | **4** | keep | **1** |
| 1 | 0 | 8 | **1** | keep | **1** |
| 0 | 0 | 2 | $-5$ | restore | 0 |

Quotient bits from step 7 to step 0: $\texttt{00001110} = \boxed{14}$, remainder $\boxed{R = 2}$.

*Verification.*
$$QD + R = 14 \times 7 + 2 = 98 + 2 = 100 = N \quad\checkmark$$
and $0 \le 2 < 7$, so the remainder is in range. $\checkmark$

Note that five of eight subtractions were undone, and that the quotient bits emerged **most significant first** — the opposite of multiplication, where the product accumulates from the bottom. That ordering is inherent: you cannot know a low-order quotient bit until the higher ones have been settled, which is the sequential dependence in its clearest form.

**P3** *(a) As written.* The body is 5 instructions: 4 at 1 cycle plus one `div` at 24.
$$\text{cycles per iteration} = 4(1) + 24 = 28 , \qquad \mathrm{CPI} = \frac{28}{5} = \boxed{5.6}$$

*(b) After the transformation.* The `div` is replaced by a 4-cycle `mulh` plus 2 one-cycle instructions, so the body is now $4 + 1 + 2 = 7$ instructions:
$$\text{cycles} = 4(1) + 4 + 2(1) = 10 , \qquad \mathrm{CPI} = \frac{10}{7} = \boxed{1.43}$$
$$\text{speedup} = \frac{28}{10} = \boxed{2.8\times}$$

*(c) Why CPI improved while... wait, it improved here.* CPI went from 5.6 down to 1.43, and the loop got 2.8x faster — both moved favourably, so this transformation looks good on either metric.

The instructive version of the question is the one where they **disagree**, and it is worth constructing: had the replacement been, say, 8 one-cycle instructions instead of the 24-cycle divide, the body would be 12 instructions in 12 cycles — $\mathrm{CPI} = 1.0$, better still, and cycles per iteration $28 \to 12$, a $2.3\times$ speedup. Meanwhile **instruction count went up** from 5 to 12.

That is the real lesson, and it generalises. The iron law of [5.1](05-01-measuring-performance-cpi-amdahl.md) is
$$\text{time} = \text{instruction count} \times \mathrm{CPI} \times \text{cycle time} ,$$
and **only the product is meaningful.** Each factor alone can be moved in the wrong direction by an optimisation that improves the whole:

- replacing a slow instruction with several fast ones **raises** instruction count and **lowers** CPI and time;
- unrolling a loop **lowers** instruction count per element and may **raise** CPI by increasing cache pressure;
- and a compiler that optimised for CPI alone would happily insert `nop`s, since a `nop` has CPI 1 and drags the average down.

So CPI is a useful diagnostic — a high CPI points at stalls, misses, or long-latency operations worth investigating — but it is never a goal. The quantity to minimise is time, and the only honest way to compare two versions of a program is total cycles, which is what Example 2 computed directly.

</details>

## Flashback

**From Lesson 1.5 (procedures, the stack, and the calling convention):** A function uses `s0`, `s1` and `s2`, calls two other functions, and needs an 8-byte local buffer. Give the frame size honouring 16-byte alignment, list what must be saved, and say what goes wrong if the function omits saving `ra`.

<details>
<summary>Solution</summary>

*What must be saved.*

| item | bytes | why |
|---|---|---|
| `ra` | 4 | the function calls others, and each `jal` overwrites `ra` |
| `s0` | 4 | callee-saved — the caller expects it preserved |
| `s1` | 4 | same |
| `s2` | 4 | same |
| local buffer | 8 | needs addressable memory |
| **subtotal** | **24** | |

RISC-V requires `sp` to remain 16-byte aligned, so round 24 up to the next multiple of 16:
$$\boxed{\text{frame size} = 32 \text{ bytes}}$$

A conventional layout, saved registers highest so a buffer overrun hits them before the caller's frame:

```
    addi sp, sp, -32
    sw   ra, 28(sp)
    sw   s0, 24(sp)
    sw   s1, 20(sp)
    sw   s2, 16(sp)
    # 8-byte local buffer at 8(sp)
    # ... body, including two jal calls ...
    lw   s2, 16(sp)
    lw   s1, 20(sp)
    lw   s0, 24(sp)
    lw   ra, 28(sp)
    addi sp, sp, 32
    ret
```

*What goes wrong without saving `ra`.* The first `jal` overwrites `ra` with the address of the instruction following that call — a location **inside this function**. When the function later executes `ret`, it jumps to `ra`, which now points back into its own body rather than to its caller.

The concrete symptom is usually an infinite loop: control returns to just after the first call, runs forward to the `ret` again, and jumps back to the same place forever. If the function's body happens to modify state that eventually changes the path, it may instead run for a while and then crash somewhere unrelated, which is worse — the failure appears far from its cause.

This is [1.5](01-05-procedures-stack-calling-convention.md)'s leaf-versus-non-leaf distinction doing real work: a leaf function could skip the `ra` save entirely and this frame would shrink to 16 bytes (three saved registers plus the buffer, padded). The moment a function contains a single `jal`, `ra` becomes live across it and must be spilled — which is one reason inlining a small callee is such a profitable optimisation, since it can convert a non-leaf function back into a leaf one and delete the frame altogether.

</details>

## Connections

- **Backward:** both algorithms are built from [2.1](02-01-alu-addition-subtraction-overflow.md)'s adder — multiplication adds shifted copies, division subtracts (which is the same adder with the invert-and-carry-in trick). The shifts are [1.3](01-03-arithmetic-logic-data-transfer.md)'s `slli` and `srli`, and the signed-versus-unsigned variants exist for the same reason `blt` and `bltu` do.
- **Forward:** [2.3](02-03-floating-point-ieee-754.md) uses integer multiplication on the mantissas and integer addition on the exponents, so floating-point multiply inherits everything here. The multi-cycle latency of `mul` and `div` is what makes them awkward in the uniform five-stage pipeline of [3.3](03-03-pipelining-and-the-pipelined-datapath.md) — they need either a separate functional unit or a stall.
- **Sideways:** the reciprocal-multiply trick is the same idea as Barrett and Montgomery reduction in [`cryptography`](../../cryptography/syllabus.md), where modular reduction happens in an inner loop millions of times and replacing division with multiplication is the difference between a practical implementation and an impractical one.
