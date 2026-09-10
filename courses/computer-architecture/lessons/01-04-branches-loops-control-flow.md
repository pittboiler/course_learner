# Computer Architecture · Lesson 1.4: Branches, loops, and control flow

> ⏱ ~15 min · Module 1: The instruction set and assembly · Builds on: [1.3 (arithmetic and data transfer)](01-03-arithmetic-logic-data-transfer.md) · Unlocks: 1.5 (procedures and the stack), 3.5 (control hazards)

## Why this matters

Everything so far runs straight through. Real programs choose and repeat, and at the machine level both reduce to one operation: **conditionally change the PC**.

There is no `if` and no `while` in hardware. There is only "compare two registers, and if the test holds, add a constant to the program counter." Every loop, every conditional, every `switch` and every function return is that primitive plus arithmetic. Seeing how the constructs collapse into it is what makes assembly readable — and it sets up the most expensive problem in Module 3, because a machine that does not yet know whether a branch will be taken cannot know what to fetch next.

## The idea

A branch is a test and a distance. `bge t1, a1, done` means: compare `t1` and `a1`, and if `t1 >= a1`, jump to `done`.

The subtle part is what "jump to `done`" means in the encoding. The instruction does **not** contain the address of `done`. It contains a **distance** — how far to move the PC from where it currently is. That choice is called PC-relative addressing, and it has two consequences worth holding onto.

First, the same machine code works wherever it is loaded in memory, because a distance does not care about absolute position. That is what makes shared libraries and relocatable code possible.

Second, the distance must fit in the instruction, which limits how far a branch can reach. B-type gives 12 immediate bits, and since instructions are always at even addresses the low bit is always zero and need not be stored — buying one extra bit of range for free. The result is roughly $\pm 4$ KiB.

Loops are just backward branches. A `while` loop is a test at the top and a jump at the bottom; the "distance" for that jump is negative.

## The formal version

**Conditional branches (B-type).** All compare two registers and branch on the result.

| Instruction | Branch taken when |
|---|---|
| `beq rs1, rs2, L` | `rs1 == rs2` |
| `bne rs1, rs2, L` | `rs1 != rs2` |
| `blt rs1, rs2, L` | `rs1 < rs2` (signed) |
| `bge rs1, rs2, L` | `rs1 >= rs2` (signed) |
| `bltu` / `bgeu` | same, **unsigned** |

> **The branch target is $\text{PC} + \text{imm}$**, where `imm` is a signed byte displacement with its low bit implicitly zero.

RISC-V deliberately has no condition-code register. Machines like x86 and ARM set flags (zero, carry, negative, overflow) as a side effect of arithmetic, and branch on those flags. RISC-V compares directly in the branch instruction. The tradeoff: RISC-V branches do slightly more work, but there is no hidden state coupling one instruction to the next, which makes reordering instructions ([5.2](05-02-instruction-level-parallelism.md)) far easier.

**Signed versus unsigned matters.** `blt` treats the bit patterns as signed, `bltu` as unsigned. With `t0 = 0xFFFFFFFF`:
$$\texttt{blt } t0, x0 \ \text{is TAKEN} \quad (-1 < 0), \qquad \texttt{bltu } t0, x0 \ \text{is NOT} \quad (4294967295 \not< 0) .$$
Using the wrong one is a classic bug, and it is exactly the bug behind bounds checks that pass for negative indices.

**Jumps.** When you need to go somewhere unconditionally or farther than a branch reaches:

| Instruction | Effect | Format |
|---|---|---|
| `jal rd, L` | `rd = PC + 4`; `PC = PC + imm` | J-type, $\pm 1$ MiB |
| `jalr rd, imm(rs1)` | `rd = PC + 4`; `PC = rs1 + imm` | I-type, anywhere |
| `j L` | pseudo for `jal x0, L` | discards the return address |

`jal` saves a return address, which is what makes it a *call* rather than a jump; [1.5](01-05-procedures-stack-calling-convention.md) builds on that. `jalr` computes its target from a **register**, so it can reach any address in the 32-bit space — needed for returns, function pointers, and jump tables.

**Compiling the three standard constructs.** Note that the branch condition is always **inverted** relative to the source: source code says "if the condition holds, do the body", and the compiled form says "if it fails, skip the body."

*An `if` statement.* From `if (a < b) { X }`:
```
    bge  a, b, endif      # inverted test: skip when NOT (a < b)
    X
endif:
```

*A `while` loop.* From `while (i < n) { X }`:
```
loop:
    bge  t1, a1, done     # inverted test at the top
    X
    j    loop             # backward jump
done:
```

*A `for` loop over an array.* The pattern from [1.3](01-03-arithmetic-logic-data-transfer.md) placed inside the loop:
```
    li   t1, 0            # i = 0
loop:
    bge  t1, a1, done     # while i < n
    slli t2, t1, 2        # i*4
    add  t3, a0, t2       # &A[i]
    lw   t4, 0(t3)        # A[i]
    ...                   # body
    addi t1, t1, 1        # i++
    j    loop
done:
```

**Counting dynamic instructions.** Static count is how many instructions appear in the listing; **dynamic** count is how many actually execute. For the loop above with $n$ iterations, the `bge` runs $n+1$ times (once per iteration plus the final failing test), the body runs $n$ times, and the setup runs once. That distinction drives every performance calculation in [5.1](05-01-measuring-performance-cpi-amdahl.md) — the iron law counts dynamic instructions, never static ones.

**Reaching farther than a branch can.** If a target is more than about 4 KiB away, invert the branch and jump over a `jal`:
```
    beq  x1, x2, skip     # inverted condition
    j    far_away         # +/- 1 MiB
skip:
```
Assemblers do this automatically ("branch relaxation") when a label is out of range, which is why an assembly listing sometimes contains instructions you did not write.

## Picture

![A short assembly listing with addresses on the left showing a loop, with a blue arrow curving from the j instruction backward to the loop label marked minus 24 and a coral arrow from the bge forward to the done label marked plus 28, beside a panel explaining PC-relative addressing and its range](assets/01-04-fig1.svg)

Two arrows, two directions, one mechanism. The backward arrow is a negative displacement, the forward one positive; neither instruction contains an address. The right panel is the payoff — because the branch stores a distance, the whole block can be loaded anywhere in memory and still works.

## Worked examples

**Example 1 (mechanical): compute a branch displacement.** A `bge` sits at address `0x104`, and the label `done` is at `0x120`. What immediate does the instruction encode?

The target is $\text{PC} + \text{imm}$, where PC is the address of the branch itself:
$$\texttt{imm} = \texttt{0x120} - \texttt{0x104} = \texttt{0x1C} = 28 .$$

So the instruction encodes $+28$. Note that 28 is even, as every displacement must be — instructions are 4-byte aligned, so the low bit of the displacement carries no information and B-type does not store it.

The backward case. A `j loop` at `0x11C` targeting `loop` at `0x104`:
$$\texttt{imm} = \texttt{0x104} - \texttt{0x11C} = -\texttt{0x18} = -24 ,$$
which is why the encoding of `jal x0, -24` from [1.2](01-02-registers-memory-instruction-formats.md)'s encoder came out as `0xFE9FF0EF` — the leading `F`s are the sign extension of a negative displacement.

**Example 2 (why you'd care): the bounds check that lets everything through.** A programmer writes an array bounds check:

```
    bge  t0, a1, fail     # if i >= n, fail
    # ... otherwise index the array with i
```

where `t0` holds the index `i` and `a1` holds the length `n`. This looks like it checks `i < n`, and for positive `i` it does.

Now suppose `i` arrives as $-1$, stored as `0xFFFFFFFF`. `bge` is a **signed** comparison, so it asks whether $-1 \ge n$. For any positive `n`, no. The branch is not taken, the check passes, and the code proceeds to index the array at offset $-4$ — reading memory *before* the array.

The fix is one letter: `bgeu`, the unsigned comparison. Under `bgeu`, `0xFFFFFFFF` is $4294967295$, which is $\ge n$ for any sane length, the branch is taken, and the access is rejected. The single unsigned comparison also correctly rejects every negative index at once, which is why the idiom `if ((unsigned)i >= (unsigned)n) fail;` is the standard one-comparison bounds check in C.

Two things to take from this. **Signedness is a property of the instruction, not the data** — the bits `0xFFFFFFFF` are neither signed nor unsigned until an instruction interprets them, and choosing `bge` versus `bgeu` *is* that interpretation. And this is a failure with no symptom in testing: every positive index behaves correctly, so the bug survives any test suite that does not deliberately supply a negative one. Bounds-check errors of exactly this shape are a recurring source of real vulnerabilities.

## Watch out

- **You might think** the branch displacement is measured from the *next* instruction — **but actually** in RISC-V it is measured from the address of the branch itself. Some other ISAs (including ARM and x86) measure from the following instruction, so displacements are not portable between them and a hand-computed offset can be off by 4.
- **You might think** `blt` and `bltu` differ only for negative numbers — **but actually** they differ for every value with the top bit set, which is half the 32-bit range. Any value above `0x7FFFFFFF` is negative under `blt` and large under `bltu`.
- **You might think** a `j` is free because it does no arithmetic — **but actually** it costs a full instruction fetch and, worse, it disrupts the pipeline's assumption about what comes next. [3.5](03-05-control-hazards-and-branch-prediction.md) shows that a taken branch or jump can cost several cycles, which is why compilers restructure loops to make the common path fall through rather than branch.

## One-liner

> Control flow is one primitive — compare two registers and conditionally add a signed distance to the PC — and because it is a *distance* rather than an address, the code relocates freely but cannot reach farther than its immediate field allows.

## Problems

**P1 (🟢)** A `bne` instruction is at address `0x2048`; its target label is at `0x2030`. Compute the immediate the instruction encodes, in decimal and as a signed hex value. Is this within B-type's range?

**P2 (🟡)** Compile this loop into RISC-V, with `n` in `a1`, the array base in `a0`, and 4-byte elements. Then give the dynamic instruction count as a closed form in `n`.
```
sum = 0;
for (i = 0; i < n; i++)  if (A[i] > 0)  sum += A[i];
```

**P3 (🔴, optional)** A `switch` on a dense integer range is usually compiled to a **jump table** rather than a chain of branches. Explain how `jalr` makes this possible, give the instruction sequence for indexing the table, and state the condition on the case values under which a jump table beats a branch chain.

<details>
<summary>Solutions</summary>

**P1** The displacement is target minus the branch's own address:
$$\texttt{imm} = \texttt{0x2030} - \texttt{0x2048} = -\texttt{0x18} = \boxed{-24} .$$

As a signed 12-bit hex value, $-24$ is `0xFE8` in 12 bits (since $-24 = 4096 - 24 = 4072 = \texttt{0xFE8}$), which sign-extends to `0xFFFFFFE8`.

*Range check.* B-type stores a 12-bit signed displacement whose low bit is implicit, giving an effective range of $[-4096, +4094]$ in bytes. Since $-24$ is comfortably inside that, **yes, it is in range** — and it is even, as it must be.

**P2** The `if` inside the loop becomes a second inverted branch that skips the accumulate.

```
    li   t0, 0            # sum = 0
    li   t1, 0            # i = 0
loop:
    bge  t1, a1, done     # while i < n
    slli t2, t1, 2        # i*4
    add  t3, a0, t2       # &A[i]
    lw   t4, 0(t3)        # A[i]
    ble  t4, x0, skip     # if A[i] <= 0, skip     (pseudo for bge x0, t4)
    add  t0, t0, t4       # sum += A[i]
skip:
    addi t1, t1, 1        # i++
    j    loop
done:
    mv   a0, t0           # return sum
```

*Dynamic instruction count.* Let $k$ be the number of elements that are strictly positive, $0 \le k \le n$.

| part | count |
|---|---|
| setup (`li`, `li`) | $2$ |
| `bge` loop test | $n+1$ |
| per-iteration always: `slli`, `add`, `lw`, `ble`, `addi`, `j` | $6n$ |
| the `add` that runs only when positive | $k$ |
| final `mv` | $1$ |

$$\text{total} = 2 + (n+1) + 6n + k + 1 = \boxed{7n + k + 4} .$$

With all elements positive ($k=n$) this is $8n+4$; with none positive ($k=0$) it is $7n+4$ — the same closed form as the syllabus's Boss problem 1, which is the same loop without the conditional.

Notice that the count now depends on the **data**, not just on $n$. That is the first appearance of a theme running through Module 5: instruction count is a property of an execution, not of a program, which is why performance must be measured on representative inputs.

**P3** *How `jalr` makes it possible.* A conditional branch encodes a **fixed** displacement, so its target is baked into the instruction and cannot be computed. `jalr rd, imm(rs1)` takes its target from a **register**, so the address can be computed at run time — which is exactly what a jump table needs. The table is an array of code addresses; you index it with the switch value, load the entry, and `jalr` to it.

*The sequence.* For `switch (i)` with cases $0..m-1$, a table of 4-byte addresses based at label `table`:

```
    bgeu t0, a2, default  # unsigned bound check: i >= m -> default
    la   t1, table        # t1 = &table[0]
    slli t2, t0, 2        # i * 4  (4-byte entries)
    add  t3, t1, t2       # &table[i]
    lw   t4, 0(t3)        # t4 = table[i]  -- the target address
    jalr x0, 0(t4)        # jump there, discarding the return address
```

Two details matter. The bound check uses **`bgeu`**, catching negative and too-large indices in one comparison — exactly Example 2's idiom, and here it is load-bearing, because an out-of-range index would otherwise load an arbitrary word and jump to it. And the `jalr` uses `x0` as its destination, discarding the return address, because this is a jump rather than a call.

*When a jump table wins.* Compare costs. A branch chain over $m$ cases costs $O(m)$ comparisons in the worst case and $m/2$ on average. The jump table costs a **constant** six instructions regardless of $m$ — but it also costs $4m$ bytes of table, and the indirect jump is much harder for the branch predictor of [3.5](03-05-control-hazards-and-branch-prediction.md), since the target varies.

So the table wins when:

1. **the case values are dense**, i.e. the span $(\max - \min)$ is close to the number of cases. A sparse switch over `{1, 1000, 5000}` would need a 5000-entry table to save two comparisons, which is absurd; compilers handle sparse switches with a binary search over ranges instead.
2. **there are enough cases** to amortise the six fixed instructions — typically around four or more, below which a short branch chain is both smaller and better predicted.

Real compilers evaluate exactly this trade and will emit a branch chain, a jump table, or a hybrid (binary search down to dense clusters, then tables) depending on the case distribution. Which is a good illustration of the [1.1](01-01-isa-contract-stored-program.md) theme: the ISA offers a computed jump, and how to use it is a cost question, not a correctness one.

</details>

## Flashback

**From Lesson 1.2 (registers, memory, and instruction formats):** Decode `0x00B56633`. Give the instruction with its register operands, name the format, and say which two fields you had to inspect to distinguish it from `add`.

<details>
<summary>Solution</summary>

*Opcode first.* The low 7 bits of `0x33` are `0110011` — **R-type arithmetic**.

*Full bit pattern:*
$$\texttt{0000 0000 1011 0101 0110 0110 0011 0011}$$

*Fields* as `funct7 | rs2 | rs1 | funct3 | rd | opcode`:

| field | bits | value |
|---|---|---|
| `funct7` | `0000000` | 0 |
| `rs2` | `01011` | `x11` |
| `rs1` | `01010` | `x10` |
| `funct3` | `110` | `or` |
| `rd` | `01100` | `x12` |
| `opcode` | `0110011` | R-type |

$$\boxed{\texttt{or x12, x10, x11}} \qquad \text{R-type}$$

In ABI names, `or a2, a0, a1`.

*Which fields distinguish it from `add`.* **`funct3` and `funct7`** — and it is worth being precise about the roles, because they are not symmetric.

`add` and `or` share the opcode `0110011` and are separated by **`funct3` alone**: `000` for `add`, `110` for `or`. That is the field doing the work here.

`funct7` becomes necessary only when two instructions share *both* opcode and `funct3` — the standing example being `add` and `sub`, both `funct3 = 000`, distinguished purely by `funct7` (`0000000` versus `0100000`). So strictly, telling this instruction from `add` requires inspecting `funct3`; telling it from `sub` requires `funct3` too, and telling `add` from `sub` requires `funct7`.

This is [1.2](01-02-registers-memory-instruction-formats.md)'s point about opcode economy in action: rather than spending seven scarce opcode bits on every arithmetic operation, RISC-V spends one opcode on the whole family and uses two small side fields to pick within it — which also means the ALU control of [3.2](03-02-single-cycle-control.md) only ever has to look at a fixed 10 bits to decide what operation to perform.

</details>

## Connections

- **Backward:** the loop body is [1.3](01-03-arithmetic-logic-data-transfer.md)'s array-indexing pattern, and branches are [1.2](01-02-registers-memory-instruction-formats.md)'s B-type — whose scattered immediate exists precisely so `rs1` and `rs2` stay where the register file expects them.
- **Forward:** `jal` saving a return address is the mechanism [1.5](01-05-procedures-stack-calling-convention.md) turns into procedure calls. The dynamic instruction counts computed here feed the iron law of [5.1](05-01-measuring-performance-cpi-amdahl.md). And the central problem this lesson creates — that the machine does not know a branch's outcome when it needs to fetch the next instruction — is the whole subject of [3.5](03-05-control-hazards-and-branch-prediction.md).
- **Sideways:** the absence of a condition-code register is a deliberate ISA choice with microarchitectural consequences: flags create an invisible dependence between adjacent instructions, and removing them makes the out-of-order reordering of [5.2](05-02-instruction-level-parallelism.md) considerably simpler to implement correctly.
