# Computer Architecture · Lesson 2.1: The ALU — addition, subtraction, and overflow

> ⏱ ~15 min · Module 2: Computer arithmetic · Builds on: [`digital-logic` 1.2 (signed numbers and two's complement)](../../digital-logic/lessons/01-02-signed-numbers-twos-complement.md), [`digital-logic` 2.5 (building a simple ALU)](../../digital-logic/lessons/02-05-building-a-simple-alu.md) · Unlocks: 2.2 (multiplication and division), 3.3 (pipelining)

## Why this matters

You already know two's complement and you have already built an ALU. [`digital-logic` 1.2](../../digital-logic/lessons/01-02-signed-numbers-twos-complement.md) covered the representation, the sign-bit trick, carry versus overflow and the `-128` edge case; [`digital-logic` 2.5](../../digital-logic/lessons/02-05-building-a-simple-alu.md) wired the thing together. **This lesson does not reteach any of that.**

What it adds is the *architectural* view: the adder is almost always the longest combinational path in a processor, so **its delay sets the clock frequency**. That single fact explains why architects spend enormous effort on a circuit that computes something as simple as $a+b$, why the fast versions look nothing like the obvious version, and — the connection that matters for Module 3 — why the pipeline stage boundaries fall where they do.

## The idea

Adding two 32-bit numbers looks like 32 independent one-bit additions. It is not, because of the carry: bit 5's result depends on bit 4's carry, which depends on bit 3's, and so on down to bit 0.

That dependence is a **chain**, and a chain is the enemy of speed. The obvious circuit — a ripple-carry adder, one full adder per bit — has a delay proportional to its width. At 32 bits that is 32 gate delays stacked end to end, and since nothing can clock faster than its slowest path, that adder alone caps the frequency.

The fix is the recurring move in architecture: **spend area to buy depth.** Instead of waiting for each carry, compute in advance whether each bit position will *generate* a carry regardless of what arrives, or merely *propagate* one that does. Those two signals can be combined in a tree, so the delay grows like $\log n$ instead of $n$.

Subtraction needs no new hardware at all — one adder with an inverter and a forced carry-in does both, which is the direct dividend of two's complement.

## The formal version

**Subtraction is addition.** In two's complement, $-b = \bar b + 1$, so
$$a - b = a + \bar b + 1 .$$
Invert the second operand and force the carry-in to 1. One adder, one control signal, both operations. The control bit that selects "invert and carry in" is exactly the `ALUSrc`-adjacent signal you will meet in [3.2](03-02-single-cycle-control.md).

**Carry-out and overflow are different signals** — assumed from [`digital-logic` 1.2](../../digital-logic/lessons/01-02-signed-numbers-twos-complement.md), restated only because the architectural consequence is easy to miss:

| Signal | Answers | Matters for |
|---|---|---|
| carry-out | did the result exceed the *unsigned* range? | unsigned arithmetic, multi-word addition |
| overflow | did the result exceed the *signed* range? | signed arithmetic |

The hardware computes both from the same adder and lets the ISA decide which to expose.

**RISC-V's choice: expose neither.** `add` wraps silently, mod $2^{32}$. There is no overflow flag and no trap. This is a deliberate ISA decision with real consequences:

- **Detecting overflow costs instructions.** To check a signed add you must compare signs explicitly — roughly three extra instructions.
- **It keeps the ISA free of condition codes**, which is the same choice as [1.4](01-04-branches-loops-control-flow.md)'s branches. No hidden state flows between adjacent instructions, which makes the reordering of [5.2](05-02-instruction-level-parallelism.md) far easier.
- **It pushes the problem to the language.** C says signed overflow is *undefined behaviour*, which is why compilers may assume it never happens and optimise accordingly — an assumption that has produced real security bugs when the arithmetic did overflow.

MIPS made the opposite choice (`add` traps, `addu` wraps); x86 sets flags. None is wrong; each trades detection against speed and simplicity.

**Where the time goes.** For an $n$-bit ripple-carry adder with a full-adder delay $t_{FA}$:
$$T_{\text{ripple}} \approx n \cdot t_{FA} .$$

**Carry-lookahead.** For each bit define
$$g_i = a_i \cdot b_i \quad (\textbf{generate}), \qquad p_i = a_i \oplus b_i \quad (\textbf{propagate}) .$$
*In words:* position $i$ **generates** a carry if both inputs are 1, regardless of the incoming carry; it **propagates** an incoming carry if exactly one input is 1. Then
$$c_{i+1} = g_i + p_i c_i ,$$
and expanding this recursion gives every carry as a function of the inputs alone:
$$c_1 = g_0 + p_0c_0, \qquad c_2 = g_1 + p_1g_0 + p_1p_0c_0, \qquad \dots$$
Each carry is now two gate levels deep from the $g$ and $p$ signals — but the expressions get wide fast, so real designs build a **tree** of 4-bit lookahead blocks:
$$T_{\text{lookahead}} \approx O(\log n) .$$

| width | ripple depth | lookahead depth (4-bit blocks) |
|---|---|---|
| 8 | 8 | ~4 |
| 32 | 32 | ~5 |
| 64 | 64 | ~6 |

**Sign extension is architectural, not arithmetic.** Immediates are 12 bits and the ALU is 32 wide, so the sign-extend unit copies bit 11 into bits 31:12 *before* the ALU sees the operand. This is a separate block in the datapath of [3.1](03-01-single-cycle-datapath.md), and it is why [1.3](01-03-arithmetic-logic-data-transfer.md)'s `lui`/`addi` trap exists.

**Saturating versus wrapping** is an ISA choice about what happens on overflow. Wrapping (RISC-V's base integers) is correct for modular arithmetic and address computation. Saturating — clamping to the maximum or minimum — is correct for signal and pixel data, where $250 + 10$ should be $255$ rather than $4$. RISC-V puts saturating arithmetic in vector and DSP extensions rather than the base ISA.

## Picture

![On the top, eight full adders in a row with carry arrows chaining right to left, labelled as delay growing linearly with width; below, the same eight positions feeding generate and propagate signals into two lookahead tree blocks, labelled as delay growing logarithmically](assets/02-01-fig1.svg)

Both circuits compute the identical sum. The top one is smaller and slower, the bottom bigger and faster, and the entire difference is whether the carry information travels as a *chain* or through a *tree*. That trade — more hardware for less depth — recurs at every level of this course, and the adder is where it first pays for itself, because this circuit is on the critical path of nearly every instruction.

## Worked examples

**Example 1 (mechanical): generate and propagate by hand.** Add $a = \texttt{1011}$ and $b = \texttt{0110}$ with carry-in $c_0 = 0$, computing the carries via lookahead rather than rippling.

Per bit (position 0 is the rightmost):

| $i$ | $a_i$ | $b_i$ | $g_i = a_i b_i$ | $p_i = a_i \oplus b_i$ |
|---|---|---|---|---|
| 0 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | **1** | 0 |
| 2 | 0 | 1 | 0 | 1 |
| 3 | 1 | 0 | 0 | 1 |

Now the carries, each computed directly from the inputs:
$$c_1 = g_0 + p_0c_0 = 0 + 1\cdot 0 = 0$$
$$c_2 = g_1 + p_1c_1 = 1 + 0\cdot 0 = 1$$
$$c_3 = g_2 + p_2c_2 = 0 + 1\cdot 1 = 1$$
$$c_4 = g_3 + p_3c_3 = 0 + 1\cdot 1 = 1$$

Sum bits are $s_i = a_i \oplus b_i \oplus c_i = p_i \oplus c_i$:
$$s_0 = 1\oplus 0 = 1,\quad s_1 = 0\oplus 0 = 0,\quad s_2 = 1\oplus 1 = 0,\quad s_3 = 1\oplus 1 = 0$$

Result: $\texttt{0001}$ with $c_4 = 1$, i.e. $\texttt{10001}$. Check: $11 + 6 = 17 = \texttt{10001}$. $\checkmark$

The point of the exercise is the *structure*: notice that $c_2$ was known as soon as $g_1$ was, without waiting for anything to its right, because position 1 generates. Generation is what breaks the chain.

**Example 2 (why you'd care): the adder sets the clock.** Suppose full-adder delay is $t_{FA} = 60$ ps and the rest of the datapath's slowest non-ALU path is 400 ps.

*With a 32-bit ripple-carry adder:*
$$T_{\text{ALU}} = 32 \times 60 = 1920 \text{ ps} .$$
The ALU dominates everything else, so the cycle time is about 1920 ps and the clock is
$$f = \frac{1}{1920\text{ ps}} \approx 521 \text{ MHz} .$$

*With a lookahead adder at roughly 5 levels of 90 ps:*
$$T_{\text{ALU}} \approx 450 \text{ ps} ,$$
so now the ALU and the rest of the datapath are comparable, the cycle time is about 450 ps, and
$$f \approx 2.22 \text{ GHz} .$$

**A 4.3x frequency improvement from changing one circuit**, with no change to the ISA, no change to any program, and no change to the number of instructions executed. This is the [1.1](01-01-isa-contract-stored-program.md) principle in its purest form: the contract said what `add` computes, never how fast, and the entire gain lives in that silence.

Two things follow. **Optimising anything other than the critical path is wasted effort** — halving the delay of the register file here would move the clock not at all, because the ALU is the binding constraint. And notice that once lookahead brings the ALU to 450 ps against the datapath's 400 ps, further adder improvements stop paying: the bottleneck moves. That is Amdahl's law arriving early, and [5.1](05-01-measuring-performance-cpi-amdahl.md) makes it general.

## Watch out

- **You might think** subtraction needs its own circuit — **but actually** inverting the second operand and setting carry-in to 1 turns the adder into a subtractor, which is the whole practical payoff of two's complement over sign-magnitude.
- **You might think** RISC-V's silent overflow is an oversight — **but actually** it is a considered choice: no flag register means no hidden dependence between instructions, which simplifies out-of-order execution. The cost is that overflow checking becomes the compiler's job, and C's decision to call signed overflow undefined is what lets it skip the check entirely.
- **You might think** a faster adder always raises the clock — **but actually** only while the adder is the critical path. Once another path becomes the longest, further adder work buys nothing, and architects move on to whatever is now binding.

## One-liner

> One adder does both add and subtract because $a - b = a + \bar b + 1$ — and because its carry chain is usually the longest path in the machine, replacing the chain with a lookahead tree buys clock frequency without touching the ISA, the program, or the instruction count.

## Problems

**P1 (🟢)** For $a = \texttt{1100}$ and $b = \texttt{1010}$ with $c_0 = 0$, compute $g_i$ and $p_i$ for each bit, then the carries $c_1$ through $c_4$ by the lookahead recursion. Give the 4-bit sum and the carry-out, and check against the decimal values.

**P2 (🟡)** A design has a 32-bit ripple-carry adder with $t_{FA} = 50$ ps; every other path in the datapath is at most 500 ps. Give the cycle time and clock frequency. Then the team replaces it with a lookahead adder of total delay 380 ps — give the new cycle time and frequency, and the speedup. What limits further improvement?

**P3 (🔴, optional)** RISC-V `add` wraps silently. Write a sequence that computes `a + b` in `t0` and sets `t1` to 1 if signed overflow occurred and 0 otherwise, using only instructions from [1.3](01-03-arithmetic-logic-data-transfer.md). Explain the rule your code implements, and state how many extra instructions overflow detection costs.

<details>
<summary>Solutions</summary>

**P1** With $a = \texttt{1100}$ ($=12$) and $b = \texttt{1010}$ ($=10$), position 0 rightmost:

| $i$ | $a_i$ | $b_i$ | $g_i$ | $p_i$ |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 2 | 1 | 0 | 0 | 1 |
| 3 | 1 | 1 | **1** | 0 |

*Carries*, using $c_{i+1} = g_i + p_ic_i$ with $c_0 = 0$:
$$c_1 = 0 + 0\cdot 0 = 0$$
$$c_2 = 0 + 1\cdot 0 = 0$$
$$c_3 = 0 + 1\cdot 0 = 0$$
$$c_4 = 1 + 0\cdot 0 = \mathbf{1}$$

*Sum bits*, $s_i = p_i \oplus c_i$:
$$s_0 = 0\oplus 0 = 0,\quad s_1 = 1\oplus 0 = 1,\quad s_2 = 1\oplus 0 = 1,\quad s_3 = 0\oplus 0 = 0$$

$$\text{sum} = \texttt{0110}, \qquad \text{carry-out} = 1 .$$

*Check.* $12 + 10 = 22$. As a 5-bit value, $22 = \texttt{10110}$ — carry-out 1 with low four bits `0110`. $\checkmark$

Worth noticing: **no carry propagated at all here.** Every $c_i$ for $i \le 3$ was 0, and the single carry-out came from position 3 *generating* it. A ripple adder would still have taken four full-adder delays to establish that, waiting for a carry that never came — which is exactly the pessimism lookahead removes.

Also note the two's-complement reading: as signed 4-bit values $a = -4$ and $b = -6$, and the result `0110` $= +6$ is wrong for $-10$. That is signed overflow, flagged by $c_3 \ne c_4$ ($0 \ne 1$) — the standard test from [`digital-logic` 1.2](../../digital-logic/lessons/01-02-signed-numbers-twos-complement.md).

**P2** *With the ripple-carry adder:*
$$T_{\text{ALU}} = 32 \times 50 = 1600 \text{ ps} .$$
The cycle time is the longest path, so $T = \max(1600, 500) = 1600$ ps, and
$$f = \frac{1}{1600 \times 10^{-12}} = 625 \text{ MHz} .$$

*With the lookahead adder at 380 ps:*
$$T = \max(380, 500) = 500 \text{ ps} \quad\text{— the ALU is no longer the critical path},$$
$$f = \frac{1}{500\times 10^{-12}} = 2.0 \text{ GHz} .$$

*Speedup:*
$$\frac{2.0 \text{ GHz}}{625 \text{ MHz}} = \boxed{3.2\times}$$

*What limits further improvement.* **The 500 ps non-ALU path is now binding.** Making the adder faster still — even instantaneous — would leave the cycle time at 500 ps and the clock at 2.0 GHz. The adder has stopped being the bottleneck.

This is the important part of the answer. Note the adder went from 1600 ps to 380 ps, a $4.2\times$ improvement in that component, but delivered only $3.2\times$ overall — because the improvement ran past the point where it mattered and 120 ps of the gain is simply unusable. Any further effort belongs on whatever constitutes that 500 ps path (typically the memory access or the register-file read-through-ALU path), and the general statement of this arithmetic is Amdahl's law in [5.1](05-01-measuring-performance-cpi-amdahl.md).

**P3** *The rule.* Signed overflow on $a + b$ occurs exactly when the two operands have the **same** sign and the result has a **different** sign. Two positives cannot sum to a negative, and two negatives cannot sum to a positive; operands of opposite signs can never overflow, because the magnitude of the result is bounded by the larger operand.

Formally, with $s$ the sum, overflow is
$$(a_{31} = b_{31}) \ \wedge\ (s_{31} \ne a_{31}) ,$$
which in bitwise form is the sign bit of $(a \oplus s) \wedge (b \oplus s)$.

*The code.* Assume `a0` holds $a$ and `a1` holds $b$.

```
add  t0, a0, a1       # t0 = a + b  (wraps silently)
xor  t2, a0, t0       # bit 31 set if a and sum differ in sign
xor  t3, a1, t0       # bit 31 set if b and sum differ in sign
and  t2, t2, t3       # bit 31 set if BOTH differ
srli t1, t2, 31       # t1 = that bit, as 0 or 1
```

Reading it: `t2` after the `and` has bit 31 set precisely when the sum's sign differs from *both* operands' signs — which can only happen when the operands agreed with each other and the sum disagreed, i.e. overflow. The final `srli` by 31 isolates that bit into a clean 0/1. (`srli`, the *logical* shift from [1.3](01-03-arithmetic-logic-data-transfer.md), is required here — `srai` would produce all-ones rather than 1.)

*The cost.* The addition itself is 1 instruction; detection costs **4 more**, a 5x instruction-count increase for a checked add. That is the concrete price of RISC-V's no-flags decision, and it is why:

- languages that demand checked arithmetic (Rust in debug mode, Swift) pay a measurable performance cost on integer-heavy code;
- C declares signed overflow undefined, which lets the compiler emit the single `add` and assume the check is unnecessary;
- and hardware designers keep proposing overflow-detecting instructions for RISC-V extensions, since the check is nearly free *in hardware* — the adder already computes the signal, as [`digital-logic` 1.2](../../digital-logic/lessons/01-02-signed-numbers-twos-complement.md) showed — and expensive only because the ISA declines to expose it.

</details>

## Flashback

**From Lesson 1.4 (branches, loops, and control flow):** Register `t0` holds `0x80000000` and `t1` holds `0x00000001`. State whether each branch is taken: (a) `blt t0, t1, L`; (b) `bltu t0, t1, L`. Explain the difference in one sentence, and give a case where choosing wrongly is a security bug.

<details>
<summary>Solution</summary>

*The values.* `0x80000000` is the bit pattern with only the top bit set. Interpreted as **signed**, it is $-2147483648$ (the most negative 32-bit integer). Interpreted as **unsigned**, it is $2147483648$. `0x00000001` is $1$ either way.

*(a) `blt t0, t1, L`* — **signed** comparison. Is $-2147483648 < 1$? Yes. **Branch taken.**

*(b) `bltu t0, t1, L`* — **unsigned** comparison. Is $2147483648 < 1$? No. **Branch not taken.**

*The difference in one sentence.* The identical 32 bits are read as a large negative number by `blt` and a large positive number by `bltu`, because signedness is a property of the *instruction* that interprets the bits, not of the bits themselves.

*Where choosing wrongly is a security bug.* The bounds check from [1.4](01-04-branches-loops-control-flow.md)'s Example 2, in its most dangerous form. Suppose a length field is read from untrusted input into `t0` and checked against a buffer size in `a1`:

```
bge  t0, a1, reject       # signed: reject if len >= size
# ... otherwise copy t0 bytes ...
```

An attacker supplies `0x80000000`. Under the **signed** `bge`, that is $-2147483648$, which is not $\ge$ any positive size, so the check **passes**. The copy loop then runs with a length that is either treated as enormous when later used unsigned, or drives a pointer computation backward — either way, memory outside the buffer is written.

Switching to `bgeu` fixes it: as unsigned, `0x80000000` is larger than any plausible buffer size, the check rejects, and — because the unsigned comparison also catches every negative-looking value in one test — no separate "is it negative" check is needed.

This is why the canonical C idiom is a single unsigned comparison, `if ((unsigned)len >= (unsigned)size) reject;`, and why mixing signed and unsigned integer types around length arithmetic is one of the most productive sources of real vulnerabilities. The connection to this lesson: RISC-V exposes no condition codes, so the *only* place signedness is decided is the choice of instruction mnemonic — which puts the entire decision in one letter.

</details>

## Connections

- **Backward:** the representation, the carry-versus-overflow distinction and the ALU itself all come from [`digital-logic` 1.2](../../digital-logic/lessons/01-02-signed-numbers-twos-complement.md) and [2.5](../../digital-logic/lessons/02-05-building-a-simple-alu.md) and are used here without re-derivation. What is new is treating the adder's *delay* as the object of interest. Sign extension of the 12-bit immediates comes from [1.2](01-02-registers-memory-instruction-formats.md).
- **Forward:** [2.2](02-02-multiplication-and-division.md) builds multiply and divide out of this adder, and their much longer latency is why they get separate treatment in the pipeline. The ALU's delay is what [3.3](03-03-pipelining-and-the-pipelined-datapath.md) balances against the other stages when choosing where to cut the datapath, and the "optimise only the critical path" lesson becomes Amdahl's law in [5.1](05-01-measuring-performance-cpi-amdahl.md).
- **Sideways:** the generate/propagate decomposition is a **parallel prefix** computation — the same algorithmic pattern as a prefix sum, and the lookahead tree is structurally the same as the scan used in parallel algorithms. Recognising the carry chain as a prefix problem is what turned adder design from craft into something with a proven $O(\log n)$ bound.
