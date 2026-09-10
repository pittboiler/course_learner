# Computer Architecture · Lesson 1.3: Arithmetic, logic, and data transfer

> ⏱ ~15 min · Module 1: The instruction set and assembly · Builds on: [1.2 (registers, memory, and formats)](01-02-registers-memory-instruction-formats.md) · Unlocks: 1.4 (branches and loops), 3.1 (the single-cycle datapath)

## Why this matters

You can now decode an instruction. This lesson is about writing sequences of them that compute something — and about the single structural rule that shapes every RISC assembly program: **arithmetic never touches memory.**

That rule is why RISC-V has only two instructions that reach memory at all, why array code always looks the same, and — the part that matters for the rest of the course — why the datapath in [3.1](03-01-single-cycle-datapath.md) can be simple enough to pipeline. A machine where `add` might also perform a memory access cannot have a clean five-stage pipeline, because you no longer know which stage does what.

## The idea

Think of the register file as a workbench with 32 slots and memory as a warehouse. The rule is: **you may only work on things on the bench.** To operate on something in the warehouse you fetch it (`lw`), work on it, and put it back (`sw`).

This is the **load/store architecture**, and it is the defining property of RISC. It sounds restrictive and costs you extra instructions, but it buys a uniformity that pays for itself: every arithmetic instruction takes the same time, reads two registers, writes one, and cannot fault. Only two instructions can touch memory, so only two can be slow and only two can fault.

Reaching memory needs an address, and RISC-V computes it one way: **base plus offset**. A register holds a base address, a constant in the instruction adds a displacement. That single mode covers array indexing, struct field access, and stack frames — and it is deliberately the only one, because each addressing mode is hardware the datapath must implement.

## The formal version

**Register-register arithmetic (R-type).** Two source registers, one destination.

| Instruction | Effect |
|---|---|
| `add rd, rs1, rs2` | `rd = rs1 + rs2` |
| `sub rd, rs1, rs2` | `rd = rs1 - rs2` |
| `and` / `or` / `xor` | bitwise, 32 bits at a time |
| `sll` / `srl` / `sra` | shift left / shift right logical / shift right arithmetic |
| `slt rd, rs1, rs2` | `rd = 1` if `rs1 < rs2` (signed), else `0` |

**Register-immediate arithmetic (I-type).** The second operand is a sign-extended 12-bit constant, so the range is $[-2048, 2047]$.

| Instruction | Effect |
|---|---|
| `addi rd, rs1, imm` | `rd = rs1 + imm` |
| `andi` / `ori` / `xori` | bitwise with a constant |
| `slli rd, rs1, sh` | shift left by a 5-bit shift amount |

Note what is **missing**: there is no `subi`. It would be redundant, since `addi rd, rs1, -5` subtracts. Two's complement means one adder does both, a point [2.1](02-01-alu-addition-subtraction-overflow.md) develops.

**The shift distinction.** `srl` shifts in zeros; `sra` copies the sign bit. For a negative number these differ:
$$\texttt{sra}: \ \texttt{0xFFFFFFF0} \gg 1 = \texttt{0xFFFFFFF8}\ (-16 \to -8), \qquad \texttt{srl}: \ \texttt{0xFFFFFFF0}\gg 1 = \texttt{0x7FFFFFF8} .$$
Arithmetic shift right by $k$ is division by $2^k$ rounding toward $-\infty$; logical shift right is not division at all for negatives. **Choosing the wrong one is a real and quiet bug.**

**Data transfer.** Only these reach memory.

| Instruction | Effect |
|---|---|
| `lw rd, imm(rs1)` | `rd = Memory[rs1 + imm]`, 32 bits |
| `sw rs2, imm(rs1)` | `Memory[rs1 + imm] = rs2`, 32 bits |
| `lb` / `lh` | load byte / halfword, **sign-extended** |
| `lbu` / `lhu` | load byte / halfword, zero-extended |
| `sb` / `sh` | store byte / halfword |

The effective address is always $\texttt{rs1} + \texttt{sign-extend(imm)}$.

**Why loads have two flavours.** A byte loaded into a 32-bit register must fill the other 24 bits somehow. `lb` sign-extends (correct for `signed char`), `lbu` zero-extends (correct for `unsigned char`). Stores need no such choice — they write only the low bits.

**Array indexing.** For a 4-byte-element array with base in `a0` and index in `t1`:

```
slli t2, t1, 2        # t2 = i * 4   (shift is cheaper than multiply)
add  t3, a0, t2       # t3 = &A[i]
lw   t4, 0(t3)        # t4 = A[i]
```

The `slli` by 2 is the byte-vs-word scaling from [1.2](01-02-registers-memory-instruction-formats.md): consecutive words are 4 bytes apart. This three-instruction pattern is so common it is worth recognising instantly — when you see shift-add-load, you are looking at an array access.

**Pseudo-instructions.** The assembler accepts convenient spellings that expand to real instructions, most of them exploiting `x0`:

| Written | Actually assembled as |
|---|---|
| `mv rd, rs` | `addi rd, rs, 0` |
| `li rd, 5` | `addi rd, x0, 5` |
| `neg rd, rs` | `sub rd, x0, rs` |
| `not rd, rs` | `xori rd, rs, -1` |
| `nop` | `addi x0, x0, 0` |

These are assembler conveniences, not ISA additions — a disassembler will usually show you the real instruction, which is a common source of confusion when source and disassembly disagree.

**Building a large constant.** A 12-bit immediate cannot hold `0x12345678`. Use `lui` (load upper immediate, U-type) to set bits 31:12, then `addi` for the rest:

```
lui  t0, 0x12345      # t0 = 0x12345000
addi t0, t0, 0x678    # t0 = 0x12345678
```

with one trap: `addi` sign-extends, so if the low 12 bits have their top bit set, the `addi` subtracts and you must pre-compensate by adding 1 to the `lui` immediate. Assemblers handle this for `li`; hand-written code often does not.

## Picture

![A register file box on the left holding base address and value registers, a memory box on the right showing word addresses 0x1000 through 0x1010 with the row at 0x1008 highlighted, and the instruction lw x7 8 of x5 between them showing the effective address computed as base plus offset](assets/01-03-fig1.svg)

The instruction in the middle is the only kind of arrow that crosses between the two boxes. Everything else in the ISA operates strictly inside the left-hand box — and that restriction is exactly what makes the address calculation a single, predictable ALU operation that the pipeline of [3.3](03-03-pipelining-and-the-pipelined-datapath.md) can give its own stage.

## Worked examples

**Example 1 (mechanical): translate a C statement.** Compile `A[3] = A[1] + 7;` where `A`'s base address is in `a0` and elements are 4-byte `int`s.

```
lw   t0, 4(a0)        # t0 = A[1]      offset 1*4 = 4
addi t1, t0, 7        # t1 = A[1] + 7
sw   t1, 12(a0)       # A[3] = t1      offset 3*4 = 12
```

Three instructions, and note the shape: **load, compute, store.** The offsets are constants because the indices are constants — the compiler folded `1*4` and `3*4` at compile time, so no `slli` is needed. Compare with `A[i] = A[j] + 7` for variable `i` and `j`, which would need two shift-add sequences to build the addresses, taking seven instructions instead of three. Constant indices are meaningfully cheaper, which is one reason loop unrolling pays.

**Example 2 (why you'd care): a bug that only appears for negative numbers.** Someone writes a "divide by 8" using a shift:

```
srli t1, t0, 3        # t1 = t0 / 8  ... allegedly
```

For `t0 = 80` this gives 10. Correct. For `t0 = -80` — stored as `0xFFFFFFB0` — the logical shift brings in zeros:
$$\texttt{0xFFFFFFB0} \gg 3 = \texttt{0x1FFFFFF6} = 536870902 .$$

A large positive number where $-10$ was wanted. The fix is `srai`, the arithmetic shift, which copies the sign bit and gives `0xFFFFFFF6` $= -10$.

But even `srai` is not exactly C's `/`. Arithmetic shift rounds toward $-\infty$, while C's integer division rounds toward zero. For $-81/8$: `srai` gives $-11$, C gives $-10$. A compiler emitting a shift for a signed division must add a correction — typically adding $2^k - 1$ before shifting when the value is negative.

Two things to take from this. **Shifts are only division for unsigned values or exact multiples**, and the failure is silent — the code runs, produces a plausible number, and is wrong only in a branch you may not test. And it is a good illustration of why the ISA offers both shifts rather than picking one: the hardware cannot know which interpretation you meant, so the ISA makes you say.

## Watch out

- **You might think** you can add two values in memory directly — **but actually** no RISC instruction does this. You must `lw`, `lw`, `add`, `sw`. x86 can, which is exactly the CISC/RISC difference from [1.1](01-01-isa-contract-stored-program.md), and it is why an x86 instruction count is not comparable to a RISC-V one.
- **You might think** `lb` and `lbu` differ only for unusual data — **but actually** they differ for every byte with the high bit set, which is half of them. Loading `0xFF` with `lb` gives $-1$; with `lbu` it gives $255$. This is the assembly-level version of C's `char` signedness being implementation-defined.
- **You might think** offsets in `lw rd, imm(rs1)` are in words — **but actually** they are in **bytes**. `lw t0, 1(a0)` does not load `A[1]`; it attempts an unaligned access one byte into the array. Element $i$ of a word array is at offset $4i$.

## One-liner

> Arithmetic works only on registers and exactly two instructions reach memory, addressed as base plus a signed byte offset — a restriction that costs instructions and buys a datapath uniform enough to pipeline.

## Problems

**P1 (🟢)** Register `t0` holds `0xFFFFFF9C` (which is $-100$). Give the 8-hex-digit result and its signed decimal value after (a) `srli t1, t0, 2` and (b) `srai t1, t0, 2`. Which one implements division by 4, and for which inputs is it exact?

**P2 (🟡)** Translate `B[i] = B[i] + A[i];` into RISC-V, where `A`'s base is in `a0`, `B`'s base is in `a1`, `i` is in `t0`, and both arrays hold 4-byte `int`s. Use only instructions from this lesson, and state your dynamic instruction count.

**P3 (🔴, optional)** A programmer writes `lui t0, 0xABCDE` followed by `addi t0, t0, 0x800` and expects `t0 = 0xABCDE800`. Compute what `t0` actually holds, explain the mechanism in one sentence, and give the corrected `lui` immediate.

<details>
<summary>Solutions</summary>

**P1** `t0 = 0xFFFFFF9C`. In binary:
$$\texttt{1111 1111 1111 1111 1111 1111 1001 1100}$$

*(a) `srli t1, t0, 2`* — logical shift right, bringing in **zeros**. Shifting right by 2 and filling the top two bits with 0:
$$\texttt{0011 1111 1111 1111 1111 1111 1110 0111} = \boxed{\texttt{0x3FFFFFE7}} = 1073741799 .$$

*(b) `srai t1, t0, 2`* — arithmetic shift right, copying the **sign bit** (1) into the vacated positions:
$$\texttt{1111 1111 1111 1111 1111 1111 1110 0111} = \boxed{\texttt{0xFFFFFFE7}} = -25 .$$

*Which divides by 4.* `srai`, the arithmetic shift, giving $-100/4 = -25$. The logical shift produces a large positive number with no arithmetic meaning for a negative input.

*When is it exact.* `srai` by $k$ computes $\lfloor n/2^k \rfloor$ — division rounding toward $-\infty$. This matches true division exactly when:

- the value is **non-negative** (then flooring and truncating agree), or
- the value is an **exact multiple** of $2^k$ (no rounding occurs either way).

Here $-100$ is an exact multiple of 4, so `srai` happens to be right. Try $-101$: `srai` by 2 gives $\lfloor -25.25\rfloor = -26$, while C's `-101/4` truncates toward zero to $-25$. The discrepancy appears precisely when the value is negative and not a multiple of $2^k$.

**P2** Both arrays are indexed by the same `i`, so the byte offset is computed once and reused with two different bases.

```
slli t1, t0, 2        # t1 = i * 4
add  t2, a0, t1       # t2 = &A[i]
add  t3, a1, t1       # t3 = &B[i]
lw   t4, 0(t2)        # t4 = A[i]
lw   t5, 0(t3)        # t5 = B[i]
add  t6, t5, t4       # t6 = B[i] + A[i]
sw   t6, 0(t3)        # B[i] = t6
```

**Dynamic instruction count: 7.**

Two things worth noticing. The `slli` is computed **once** and added to both bases, rather than shifting twice — a small saving, and exactly the kind of common-subexpression elimination a compiler performs. And the address `t3` is computed once and used for both the load and the store, since `B[i]` is read and written at the same address; recomputing it would be two wasted instructions.

A tighter version exists if you may clobber `t1`: reusing registers does not reduce the count here, because seven distinct operations genuinely have to happen. The load/store discipline forces at least two loads, one add and one store — four — plus the address arithmetic. That gap between four "real" operations and seven executed instructions is the overhead RISC accepts in exchange for a uniform datapath.

**P3** *What `lui` does.* `lui t0, 0xABCDE` places the 20-bit immediate into bits 31:12 and zeros the low 12:
$$\texttt{t0} = \texttt{0xABCDE000} .$$

*What `addi` does.* The 12-bit immediate `0x800` is `1000 0000 0000` in binary — **its top bit is set**, so sign extension makes it negative:
$$\texttt{0x800} \ \text{sign-extended} = \texttt{0xFFFFF800} = -2048 .$$

So the `addi` **subtracts** 2048:
$$\texttt{t0} = \texttt{0xABCDE000} + (-2048) = \texttt{0xABCDE000} - \texttt{0x800} = \boxed{\texttt{0xABCDD800}} .$$

The programmer wanted `0xABCDE800` and got `0xABCDD800` — the upper half came out one less than intended.

*The mechanism, in one sentence.* `addi` sign-extends its 12-bit immediate, so any low half with bit 11 set is added as a negative number and silently borrows 1 from the upper 20 bits.

*The correction.* Pre-compensate by **adding 1 to the `lui` immediate**, so that the borrow lands back on the value you wanted:
$$\texttt{lui t0, 0xABCDF} \quad\text{then}\quad \texttt{addi t0, t0, 0x800}$$
gives $\texttt{0xABCDF000} - \texttt{0x800} = \texttt{0xABCDE800}$. $\checkmark$

The general rule: when loading a 32-bit constant `C` by `lui`/`addi`, use upper $= \texttt{C[31:12]} + \texttt{C[11]}$ — that is, add the low half's sign bit to the upper immediate. Assemblers apply exactly this rule when expanding the `li` pseudo-instruction, which is why `li t0, 0xABCDE800` just works and hand-written `lui`/`addi` pairs are a recurring source of off-by-4096 bugs.

</details>

## Flashback

**From Lesson 1.1 (the ISA contract and the stored-program machine):** Classify each as an ISA fact or a microarchitecture fact, with a one-clause reason: (a) `lw` requires its address to be 4-byte aligned; (b) `lw` takes 3 cycles on a hit and 200 on a miss; (c) there are exactly two instructions that access memory; (d) the load-store unit has two ports so two loads can issue per cycle.

<details>
<summary>Solution</summary>

| | Answer | Reason |
|---|---|---|
| (a) `lw` requires 4-byte alignment | **ISA** | a program doing a misaligned load either faults or does not — a correctness-visible difference, so it must be in the contract |
| (b) 3 cycles on a hit, 200 on a miss | **micro** | pure timing; the ISA never specifies cycle counts ([1.1](01-01-isa-contract-stored-program.md)) |
| (c) exactly two instructions access memory | **ISA** | this is the load/store discipline itself — it defines what instructions exist |
| (d) two load-store ports, two loads per cycle | **micro** | an implementation choice about throughput, invisible to any correct program |

The pair (a) and (b) is the instructive one, because both are statements about `lw`. Alignment is architectural because a program can **observe** it — misaligned code faults on a machine that forbids it and works on one that does not, so the two machines are running different contracts. Latency is microarchitectural because no correct program can detect it except by measuring time, which the ISA never promised anything about.

Item (d) is worth a second look too. "Two loads per cycle" sounds like it changes what the program does, but it does not: the architectural result is identical, and the two loads still take effect in program order as far as any observer is concerned. What changes is only how many cycles elapse. This is the superscalar issue of [5.2](05-02-instruction-level-parallelism.md), and it is the clearest case of the [1.1](01-01-isa-contract-stored-program.md) principle that the microarchitecture may do anything it likes so long as the architectural state ends up where the contract says it should.

</details>

## Connections

- **Backward:** every instruction here is one of [1.2](01-02-registers-memory-instruction-formats.md)'s formats — R-type for register arithmetic, I-type for immediates and loads, S-type for stores. The pseudo-instructions all exploit the hardwired `x0` from that lesson.
- **Forward:** [1.4](01-04-branches-loops-control-flow.md) adds control flow, turning these straight-line sequences into loops. The base-plus-offset address calculation gets its own pipeline stage in [3.3](03-03-pipelining-and-the-pipelined-datapath.md), and the fact that only loads and stores touch memory is what makes the load-use hazard of [3.4](03-04-data-hazards-forwarding-stalls.md) the *only* hazard needing a stall.
- **Sideways:** the array-indexing pattern is where [4.1](04-01-caches-and-locality.md)'s spatial locality comes from — consecutive `A[i]` are consecutive addresses, so one cache block serves several iterations. Walking an array with a large stride executes the identical instructions and can run an order of magnitude slower, which is the clearest demonstration that performance lives entirely below the ISA line.
