# Computer Architecture · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is about the line between what a program may depend on and what a chip
may change. The card holds the encodings and tables you would otherwise hunt for
mid-problem — instruction formats, control signals, address splits — plus the
performance formulas, which are few and do almost all the work.

## Scope and ownership

| Topic | Owned by | Note |
|---|---|---|
| Gates, adders, ALU, flip-flops, FSMs, two's complement | [`digital-logic`](../digital-logic/syllabus.md) | assumed throughout; see "Assumed, not taught here" |
| Transistors, CMOS, VLSI timing | [`electronics`](../electronics/syllabus.md) | explicitly out of scope |
| ISA, datapath, pipeline, caches, VM, ILP, coherence | **this course** | |
| Processes, scheduling, file systems, locks | [`operating-systems`](../operating-systems/syllabus.md) | built on the page tables, interrupts and DMA defined here |

**Convention warning.** `digital-logic` 1.2 owns two's complement, carry-versus-overflow
and the $-128$ edge case, and `digital-logic` 4.4 owns the generic datapath-plus-FSM
picture. This course re-scopes around what it adds: the adder as the **critical path
that sets the clock** ([2.1](lessons/02-01-alu-addition-subtraction-overflow.md)), and
the **specific RISC-V single-cycle datapath** with its exact control truth table
([3.1](lessons/03-01-single-cycle-datapath.md), [3.2](lessons/03-02-single-cycle-control.md)).

## Notation

| Symbol | Means | First used |
|---|---|---|
| PC | program counter — address of the next instruction | [1.1](lessons/01-01-isa-contract-stored-program.md) |
| `rs1`, `rs2`, `rd` | source and destination register fields | [1.2](lessons/01-02-registers-memory-instruction-formats.md) |
| `funct3`, `funct7` | side fields distinguishing operations that share an opcode | [1.2](lessons/01-02-registers-memory-instruction-formats.md) |
| $g_i$, $p_i$ | carry generate and propagate at bit $i$ | [2.1](lessons/02-01-alu-addition-subtraction-overflow.md) |
| $s$, $E$, $f$ | float sign, biased exponent, fraction | [2.3](lessons/02-03-floating-point-ieee-754.md) |
| IF, ID, EX, MEM, WB | the five pipeline stages | [3.1](lessons/03-01-single-cycle-datapath.md) |
| $k$, $n$ | pipeline stages; instructions executed | [3.3](lessons/03-03-pipelining-and-the-pipelined-datapath.md) |
| $b$, $m$, $p$ | branch frequency, misprediction rate, penalty | [3.5](lessons/03-05-control-hazards-and-branch-prediction.md) |
| $S$, $B$ | cache size in bytes; block size in bytes | [4.1](lessons/04-01-caches-and-locality.md) |
| AMAT | average memory access time | [4.1](lessons/04-01-caches-and-locality.md) |
| VPN, PPN | virtual and physical page number | [4.3](lessons/04-03-virtual-memory-and-the-tlb.md) |
| IC, CPI, IPC | instruction count, cycles per instruction, its reciprocal | [5.1](lessons/05-01-measuring-performance-cpi-amdahl.md) |
| $p$ (Module 5) | the fraction of time being improved, in Amdahl's law | [5.1](lessons/05-01-measuring-performance-cpi-amdahl.md) |

$p$ is overloaded — branch penalty in Module 3, enhanced fraction in Module 5. Context
separates them, and both are given above.

## Definitions

### Instruction set architecture

The set of facts a programmer must know to write a correct program: architectural registers, memory model, instruction semantics, encodings, and the exception model.

Everything **not** in that list — pipeline depth, cache sizes, issue width, branch predictors — is **microarchitecture** and may change freely between chips. The test: *would a correct program ever notice?* If yes it is architectural; if it only runs faster or slower it is not.

*Introduced:* [1.1](lessons/01-01-isa-contract-stored-program.md)

### Stored-program machine

Instructions and data share one memory, and execution is a loop over one register, the PC.

$$\text{PC} \to \text{fetch} \to \text{decode} \to \text{execute} \to \text{memory} \to \text{write back} \to \text{PC} \mathrel{+}= 4$$

Those five steps become the five pipeline stages in [3.3](lessons/03-03-pipelining-and-the-pipelined-datapath.md).

*Introduced:* [1.1](lessons/01-01-isa-contract-stored-program.md)

### Register x0

Hardwired to zero: writes are discarded, reads return 0.

Not a wasted register — it makes a family of pseudo-instructions free (`mv`, `li`, `neg`, `nop`, `ret`) and it is why forwarding logic must check `rd != 0` before bypassing a result ([3.4](lessons/03-04-data-hazards-forwarding-stalls.md)).

*Introduced:* [1.2](lessons/01-02-registers-memory-instruction-formats.md)

### Load-store architecture

Arithmetic operates only on registers; exactly two instructions reach memory.

Costs extra instructions and buys a datapath uniform enough to pipeline — every arithmetic instruction takes the same time, reads two registers, writes one, and cannot fault.

*Introduced:* [1.3](lessons/01-03-arithmetic-logic-data-transfer.md)

### Base plus offset addressing

The only addressing mode: effective address $= \texttt{rs1} + \text{sign-extend(imm)}$, in **bytes**.

Element $i$ of a word array is at offset $4i$, which is why array indexing always shifts left by 2 first.

*Introduced:* [1.3](lessons/01-03-arithmetic-logic-data-transfer.md)

### PC-relative addressing

A branch encodes a **distance**, not an address: target $=\text{PC} + \text{imm}$.

Makes code relocatable, and bounds branch range by the immediate width. RISC-V measures from the branch itself; ARM and x86 measure from the following instruction.

*Introduced:* [1.4](lessons/01-04-branches-loops-control-flow.md)

### Dynamic instruction count

How many instructions actually **execute**, not how many appear in the listing.

The iron law counts dynamic instructions. A loop of 7 instructions run $n$ times with setup contributes $7n+4$, not 7.

*Introduced:* [1.4](lessons/01-04-branches-loops-control-flow.md)

### Calling convention

The agreement about which registers survive a call. **ABI, not ISA** — hardware does not enforce it; what breaks is linking against code you did not compile.

*Introduced:* [1.5](lessons/01-05-procedures-stack-calling-convention.md)

### Leaf function

A function that calls nothing.

Needs no stack frame at all if it uses only `t` and `a` registers, because `ra` cannot be clobbered and nothing must be preserved. The trigger for a frame is **"does it need to preserve something"**, not "does it call something".

*Introduced:* [1.5](lessons/01-05-procedures-stack-calling-convention.md)

### Carry generate and propagate

The decomposition that breaks the carry chain.

$$g_i = a_i b_i, \qquad p_i = a_i\oplus b_i, \qquad c_{i+1} = g_i + p_i c_i$$

Position $i$ **generates** a carry regardless of input; it **propagates** one that arrives. Expanding the recursion gives every carry from the inputs alone, so a tree computes them in $O(\log n)$ instead of $O(n)$.

*Introduced:* [2.1](lessons/02-01-alu-addition-subtraction-overflow.md)

### Critical path

The longest combinational path in a design; it sets the cycle time.

Optimising anything else buys nothing. Once a component stops being the critical path, further improvement to it is worthless — Amdahl's law at the circuit level.

*Introduced:* [2.1](lessons/02-01-alu-addition-subtraction-overflow.md)

### Shift-and-add multiplication

$a\times b = \sum_{i:\ b_i=1} a\cdot 2^i$ — one add-or-skip step per multiplier bit.

The steps are independent, so hardware sums all partial products in an adder tree: $O(\log n)$ depth, fully pipelineable, 3–5 cycles.

*Introduced:* [2.2](lessons/02-02-multiplication-and-division.md)

### Restoring division

Subtract the divisor; if the result went negative, add it back and record a 0 quotient bit.

Each step's decision depends on the previous step's remainder, so division is **inherently sequential** — 20–40 cycles, usually not pipelined. This is why compilers convert division by a constant into a reciprocal multiply.

*Introduced:* [2.2](lessons/02-02-multiplication-and-division.md)

### IEEE-754 single precision

$$\text{value} = (-1)^s\times 1.f\times 2^{E-127}$$

1 sign bit, 8 biased exponent bits, 23 fraction bits with an implied leading 1. Bias makes exponents comparable as unsigned integers, so floats can be ordered by comparing their bit patterns.

*Introduced:* [2.3](lessons/02-03-floating-point-ieee-754.md)

### Relative precision

Every doubling interval holds the same number of representable floats, so the **gap between neighbours doubles with each octave**.

$$\text{spacing at exponent } e = 2^{e-23}$$

At $2^{24}$ the spacing is 2, so $2^{24}+1$ rounds back to $2^{24}$ — the largest exactly representable integer in single precision is $2^{24}$.

*Introduced:* [2.3](lessons/02-03-floating-point-ieee-754.md)

### Single-cycle datapath

Every instruction completes in one cycle, so the clock must cover the **slowest** instruction.

CPI is exactly 1, achieved by inflating the cycle. Its structural failure: a single slow instruction taxes every instruction in every program, so the ISA cannot afford multiply, divide or floating point.

*Introduced:* [3.1](lessons/03-01-single-cycle-datapath.md)

### Control unit

A combinational function from opcode to multiplexer select lines. No state at all.

Stateless only because every instruction finishes in one cycle; a multi-cycle machine needs a real FSM. In a pipeline the signals are computed once in ID and **carried down the pipeline registers** with the instruction.

*Introduced:* [3.2](lessons/03-02-single-cycle-control.md)

### Pipelining

Put registers between the stages so each holds a different instruction.

The clock now covers the **slowest stage** rather than the whole path. Latency per instruction is unchanged or slightly worse; **throughput** rises by roughly the number of stages. Confusing the two is the standard error here.

*Introduced:* [3.3](lessons/03-03-pipelining-and-the-pipelined-datapath.md)

### Data hazard

An instruction needs a result its predecessor has not yet written back.

**RAW** is genuine. **WAR** and **WAW** are name dependences and are harmless in an in-order pipeline — they become real only under out-of-order completion ([5.2](lessons/05-02-instruction-level-parallelism.md)).

*Introduced:* [3.4](lessons/03-04-data-hazards-forwarding-stalls.md)

### Forwarding

Wire a result from where it is produced straight back to where it is needed, without waiting for the register file.

Removes **every** data stall except the load-use case. Two paths: EX/MEM to EX (distance 1) and MEM/WB to EX (distance 2); when both match, **EX/MEM wins** because it is more recent.

*Introduced:* [3.4](lessons/03-04-data-hazards-forwarding-stalls.md)

### Load-use hazard

A load's value exists only at the end of MEM, and the next instruction needs it at the start of its EX — the same cycle.

**Exactly one bubble, always, no matter how much bypass hardware you add** — the value does not exist early enough, and you cannot forward backwards in time. This is a latency problem, not a resource problem, so adding ports does not help.

*Introduced:* [3.4](lessons/03-04-data-hazards-forwarding-stalls.md)

### Control hazard

The pipeline must fetch before the branch has decided where to go.

Resolved by predicting and flushing on a wrong guess. Flushing is safe because wrongly-fetched instructions have not reached MEM or WB, so nothing architecturally visible has happened.

*Introduced:* [3.5](lessons/03-05-control-hazards-and-branch-prediction.md)

### Two-bit saturating predictor

Four states; **two consecutive wrong guesses are needed to flip the prediction.**

Fixes the 1-bit predictor's pathology, which mispredicts **twice** per loop traversal (the exit, then the next entry) and can therefore be worse than a fixed static guess. The second bit is a fix, not a refinement.

*Introduced:* [3.5](lessons/03-05-control-hazards-and-branch-prediction.md)

### Locality

**Temporal**: a location just used will be used again. **Spatial**: its neighbours will be used.

Caches work because of locality, **not because they are fast**. A program with no locality gets no benefit — it pays the hit time plus the full penalty on every access.

*Introduced:* [4.1](lessons/04-01-caches-and-locality.md)

### Cache address split

$$\text{offset} = \log_2 B, \qquad \text{index} = \log_2\!\left(\frac{S}{B\times n}\right), \qquad \text{tag} = 32 - \text{index} - \text{offset}$$

Three fields, three jobs: the **offset** selects a byte and never leaves the cache, the **index** is a lookup, and only the **tag** is compared. Raising associativity $n$ shrinks the index and grows the tag.

*Introduced:* [4.1](lessons/04-01-caches-and-locality.md) · generalised in [4.2](lessons/04-02-associativity-misses-write-policy.md)

### The three C's

| Type | Cause | What actually helps |
|---|---|---|
| compulsory | first-ever touch | larger blocks, prefetching |
| capacity | working set exceeds the cache | a larger cache, blocking |
| conflict | too many blocks map to one set | more associativity, padding |

A diagnostic, not trivia: each fix is useless against the other two kinds, so measure the breakdown before optimising.

*Introduced:* [4.2](lessons/04-02-associativity-misses-write-policy.md)

### Write-back and write-allocate

**Write-back** writes only to the cache and marks the block dirty, deferring memory until eviction. **Write-allocate** fetches a block on a write miss.

They pair naturally and win on data with reuse. For **write-only streaming** output, write-allocate fetches blocks that are immediately overwritten — pure waste, and the reason non-temporal stores exist.

*Introduced:* [4.2](lessons/04-02-associativity-misses-write-policy.md)

### Virtual memory

Every address is translated: the high bits name a page and are translated, the low bits are a page offset and **pass through untouched**.

Buys process isolation, more memory than physically exists, and relocatable code. The untranslated offset is what makes pages aligned and lets the L1 cache be indexed before translation finishes.

*Introduced:* [4.3](lessons/04-03-virtual-memory-and-the-tlb.md)

### TLB

A small, fully-associative cache of recent translations.

Fully associative deliberately: the structure is tiny so comparing all entries is affordable, and a conflict miss here would trigger a full page-table walk. **TLB reach** $=$ entries $\times$ page size, and it is the quantity huge pages exist to raise.

*Introduced:* [4.3](lessons/04-03-virtual-memory-and-the-tlb.md)

### TLB miss versus page fault

Different by six orders of magnitude.

A **TLB miss** means the translation is not cached but the page is in memory — tens of cycles, hardware-handled. A **page fault** means the page is on disk — milliseconds, OS-handled, and the process is descheduled because spinning would waste tens of millions of cycles.

*Introduced:* [4.3](lessons/04-03-virtual-memory-and-the-tlb.md)

### DMA

The device moves data to or from memory itself, interrupting once at completion.

Does not make the transfer faster — it makes it nearly **free to the processor**, recovering millions of cycles that programmed I/O would spend copying.

*Introduced:* [4.4](lessons/04-04-storage-and-io.md)

### Memory-mapped I/O

Device registers are assigned physical addresses and accessed with ordinary `lw` and `sw`; RISC-V has no I/O instructions.

Those pages **must be marked uncacheable** — a cached device register would return a stale status, and a write-back cache might never deliver a command.

*Introduced:* [4.4](lessons/04-04-storage-and-io.md)

### The iron law

$$T = \mathrm{IC}\times\mathrm{CPI}\times T_{\text{cycle}}$$

An identity. The three factors are set by different people (compiler/ISA, microarchitecture, circuits) and **trade against each other**, so any single factor quoted alone is meaningless.

*Introduced:* [5.1](lessons/05-01-measuring-performance-cpi-amdahl.md)

### Amdahl's law

$$\text{speedup} = \frac{1}{(1-p)+\dfrac{p}{s}}, \qquad \text{ceiling} = \frac{1}{1-p}$$

Its practical use is as a **screening test**: measure what fraction of time a component occupies *before* optimising it, and if the fraction is small, stop.

*Introduced:* [5.1](lessons/05-01-measuring-performance-cpi-amdahl.md)

### Register renaming

Give every write a fresh physical register from a pool of hundreds, so **WAR and WAW dependences disappear**.

The 32 architectural names of the ISA are an artefact of encoding; renaming maps them onto whatever the hardware has. After renaming, every remaining dependence is a true one and the scheduler can reorder freely.

*Introduced:* [5.2](lessons/05-02-instruction-level-parallelism.md)

### In-order commit

Instructions execute out of order but write architectural state in program order, via a reorder buffer.

Buys precise exceptions, speculation recovery, and the survival of the ISA abstraction — from outside, the machine looks sequential while internally doing nothing of the sort.

*Introduced:* [5.2](lessons/05-02-instruction-level-parallelism.md)

### Cache coherence

A read must eventually return the most recent write **to that location**.

Concerns one location only; ordering across *different* locations is **consistency**, a separate and harder guarantee. Coherence does not provide atomicity either — `counter++` still needs an atomic instruction or a lock.

*Introduced:* [5.3](lessons/05-03-multiprocessors-cache-coherence.md)

### MSI protocol

Three states per cached line: **Modified** (sole dirty copy), **Shared** (clean, possibly replicated), **Invalid**.

The coherence rule is one line: **a write must invalidate every other copy before proceeding.** MESI adds *Exclusive* so a read-then-write on an unshared line skips the broadcast.

*Introduced:* [5.3](lessons/05-03-multiprocessors-cache-coherence.md)

### False sharing

Two cores writing **different** variables that occupy the **same cache block**.

No data is shared, but coherence works in blocks, so the line ping-pongs. The program is correct and can be 100x slower, and the signature is a parallel program that gets **slower** as threads are added. Fix by padding hot per-thread data to a block boundary.

*Introduced:* [5.3](lessons/05-03-multiprocessors-cache-coherence.md)

## Formulas and rules

### RISC-V instruction formats

| Format | Layout (high to low) | Used by |
|---|---|---|
| R | `funct7[7] rs2[5] rs1[5] funct3[3] rd[5] opcode[7]` | `add`, `sub`, `and`, `or`, `sll` |
| I | `imm[12] rs1[5] funct3[3] rd[5] opcode[7]` | `addi`, `lw`, `jalr` |
| S | `imm[11:5] rs2[5] rs1[5] funct3[3] imm[4:0] opcode[7]` | `sw`, `sb` |
| B | `imm[12\|10:5] rs2[5] rs1[5] funct3[3] imm[4:1\|11] opcode[7]` | `beq`, `bge` |
| U | `imm[31:12] rd[5] opcode[7]` | `lui`, `auipc` |
| J | `imm[20\|10:1\|11\|19:12] rd[5] opcode[7]` | `jal` |

`rs1`, `rs2` and `rd` occupy the **same bits in every format that has them**, so the register file can start reading before the opcode is decoded. Only the immediate is scattered.

*From* [1.2](lessons/01-02-registers-memory-instruction-formats.md)

### Opcodes

| opcode | binary | meaning |
|---|---|---|
| `0x33` | `0110011` | R-type arithmetic |
| `0x13` | `0010011` | arithmetic with immediate |
| `0x03` | `0000011` | loads |
| `0x23` | `0100011` | stores |
| `0x63` | `1100011` | branches |
| `0x6F` | `1101111` | `jal` |
| `0x67` | `1100111` | `jalr` |
| `0x37` | `0110111` | `lui` |

*From* [1.2](lessons/01-02-registers-memory-instruction-formats.md)

### Register ABI names

| ABI | Register | Role | Preserved across a call? |
|---|---|---|---|
| `zero` | `x0` | hardwired zero | — |
| `ra` | `x1` | return address | yes (if the callee calls anything) |
| `sp` | `x2` | stack pointer | yes |
| `t0`–`t2` | `x5`–`x7` | temporaries | **no** |
| `s0`–`s1` | `x8`–`x9` | saved | yes |
| `a0`–`a7` | `x10`–`x17` | arguments and returns | **no** |
| `t3`–`t6` | `x28`–`x31` | temporaries | **no** |
| `s2`–`s11` | `x18`–`x27` | saved | yes |

*From* [1.2](lessons/01-02-registers-memory-instruction-formats.md), [1.5](lessons/01-05-procedures-stack-calling-convention.md)

### Verified encodings

| Assembly | Hex | Format |
|---|---|---|
| `add  x3, x1, x2` | `0x002081B3` | R |
| `sub  x1, x2, x3` | `0x403100B3` | R |
| `or   x12, x10, x11` | `0x00B56633` | R |
| `addi x7, x5, -20` | `0xFEC28393` | I |
| `andi x8, x8, 15` | `0x00F47413` | I |
| `lw   x6, 12(x9)` | `0x00C4A303` | I |
| `slli x2, x1, 2` | `0x00209113` | I (shift) |
| `srai x3, x3, 31` | `0x41F1D193` | I (shift) |
| `sw   x2, -4(x8)` | `0xFE242E23` | S |
| `beq  x1, x2, +16` | `0x00208863` | B |
| `bne  x5, x0, +8` | `0x00029463` | B |
| `lui  x5, 0x12345` | `0x123452B7` | U |
| `jal  x1, -24` | `0xFE9FF0EF` | J |

*From* [1.2](lessons/01-02-registers-memory-instruction-formats.md), [1.3](lessons/01-03-arithmetic-logic-data-transfer.md), [1.4](lessons/01-04-branches-loops-control-flow.md)

### Pseudo-instructions

| Written | Assembled as |
|---|---|
| `mv rd, rs` | `addi rd, rs, 0` |
| `li rd, 5` | `addi rd, x0, 5` |
| `neg rd, rs` | `sub rd, x0, rs` |
| `not rd, rs` | `xori rd, rs, -1` |
| `nop` | `addi x0, x0, 0` |
| `j L` | `jal x0, L` |
| `ret` | `jalr x0, 0(ra)` |
| `beqz rs, L` | `beq rs, x0, L` |

Nearly all exploit the hardwired `x0`.

*From* [1.3](lessons/01-03-arithmetic-logic-data-transfer.md), [1.5](lessons/01-05-procedures-stack-calling-convention.md)

### Single-cycle control truth table

| opcode | `RegWrite` | `ALUSrc` | `MemRead` | `MemWrite` | `MemToReg` | `Branch` | `ALUOp` |
|---|---|---|---|---|---|---|---|
| R-type | 1 | 0 | 0 | 0 | 0 | 0 | `10` |
| `lw` | 1 | 1 | 1 | 0 | 1 | 0 | `00` |
| `sw` | 0 | 1 | 0 | 1 | x | 0 | `00` |
| `beq` | 0 | 0 | 0 | 0 | x | 1 | `01` |

`MemToReg` is a don't-care **exactly when `RegWrite = 0`**, never merely because memory is unused. PC source is $\texttt{Branch}\wedge\texttt{Zero}$.

*From* [3.2](lessons/03-02-single-cycle-control.md)

### ALU control

| `ALUOp` | Meaning | Operation |
|---|---|---|
| `00` | address calculation | **add**, ignoring funct bits |
| `01` | branch comparison | **subtract**, ignoring funct bits |
| `10` | R-type | decode `funct7` and `funct3` |

`add` and `sub` differ only in bit 30 (`funct7`); `add` and `or` differ only in `funct3`.

*From* [3.2](lessons/03-02-single-cycle-control.md)

### Pipeline timing

| Quantity | Formula |
|---|---|
| cycles for $n$ instructions, $k$ stages | $k + (n-1)$ |
| pipelined cycle time | $\max(\text{stage delays}) + \text{register overhead}$ |
| asymptotic speedup | $T_{\text{single}} / T_{\text{pipe}}$, equal to $k$ only if perfectly balanced |
| branch penalty | (stage where resolved) $-\ 1$ |

*From* [3.3](lessons/03-03-pipelining-and-the-pipelined-datapath.md), [3.5](lessons/03-05-control-hazards-and-branch-prediction.md)

### Hazard resolution

| Distance | Dependence | Resolution |
|---|---|---|
| 1 | ALU result to ALU input | EX/MEM forwarding, no stall |
| 2 | ALU result to ALU input | MEM/WB forwarding, no stall |
| 3+ | anything | free — write in the first half of the cycle, read in the second |
| 1 | **load** to its consumer | forward **plus 1 stall** |

Detection needs three conditions: the producer writes (`RegWrite`), its `rd != 0`, and the register numbers match.

*From* [3.4](lessons/03-04-data-hazards-forwarding-stalls.md)

### Memory and performance formulas

| Quantity | Formula |
|---|---|
| AMAT, one level | $\text{hit time} + \text{miss rate}\times\text{miss penalty}$ |
| AMAT, two levels | $t_{L1} + m_{L1}(t_{L2} + m_{L2}\,t_{\text{mem}})$, with $m_{L2}$ **local** |
| global L2 miss rate | $m_{L1}\times m_{L2}$ |
| unit-stride miss rate | element size / block size |
| stride-$s$ miss rate | $\min(s\cdot\text{element}/\text{block},\ 1)$ |
| TLB reach | entries $\times$ page size |
| CPI from a mix | $\sum_i f_i\,\mathrm{CPI}_i$ |
| CPI from stalls | $1 + \sum(\text{stall sources})$ |
| branch stall term | $b\,m\,p$ |
| cache stall term | accesses per instruction $\times$ miss rate $\times$ penalty |
| iron law | $T = \mathrm{IC}\times\mathrm{CPI}\times T_{\text{cycle}}$ |
| Amdahl | $1/\bigl((1-p)+p/s\bigr)$ |

*From* [4.1](lessons/04-01-caches-and-locality.md), [4.2](lessons/04-02-associativity-misses-write-policy.md), [4.3](lessons/04-03-virtual-memory-and-the-tlb.md), [5.1](lessons/05-01-measuring-performance-cpi-amdahl.md)

### Disk access time

$$T_{\text{access}} = T_{\text{seek}} + T_{\text{rotation}} + T_{\text{transfer}}, \qquad T_{\text{rotation}} = \frac{1}{2}\times\frac{60}{\text{rpm}}$$

At 7200 rpm the average rotational latency is 4.17 ms. **Transfer is typically 1–3 percent of the total** — positioning dominates, which is why filesystems use large blocks.

*From* [4.4](lessons/04-04-storage-and-io.md)

### Latency at a glance

| Level | Latency | Relative |
|---|---|---|
| register | 0.3 ns | 1 |
| L1 cache | 1 ns | 3 |
| L2 cache | 4 ns | 13 |
| DRAM | 80 ns | 270 |
| SSD | 100 microseconds | 330,000 |
| hard disk | 10 ms | 33,000,000 |

If a register access took 1 second, a disk seek would take about a year.

*From* [4.4](lessons/04-04-storage-and-io.md)

### Amdahl ceilings

| $p$ | ceiling | at $s=4$ | at $s=100$ |
|---|---|---|---|
| $0.50$ | $2.0\times$ | $1.60\times$ | $1.98\times$ |
| $0.75$ | $4.0\times$ | $2.29\times$ | $3.88\times$ |
| $0.90$ | $10\times$ | $3.08\times$ | $9.17\times$ |
| $0.95$ | $20\times$ | $3.48\times$ | $16.8\times$ |
| $0.99$ | $100\times$ | $3.88\times$ | $50.2\times$ |

*From* [5.1](lessons/05-01-measuring-performance-cpi-amdahl.md)

## Assumed, not taught here

| Fact | Where it is taught |
|---|---|
| Two's complement, sign bit, carry versus overflow, the $-128$ edge case | [`digital-logic` 1.2](../digital-logic/lessons/01-02-signed-numbers-twos-complement.md) |
| Number systems, bases, unsigned overflow | [`digital-logic` 1.1](../digital-logic/lessons/01-01-number-systems-and-bases.md) |
| Boolean algebra and logic gates | [`digital-logic` 1.3](../digital-logic/lessons/01-03-boolean-algebra-logic-gates.md) |
| Karnaugh maps and don't-care minimisation | [`digital-logic` 2.1](../digital-logic/lessons/02-01-karnaugh-maps.md) |
| Full adders and arithmetic circuits | [`digital-logic` 2.3](../digital-logic/lessons/02-03-arithmetic-circuits.md) |
| Building an ALU with status flags | [`digital-logic` 2.5](../digital-logic/lessons/02-05-building-a-simple-alu.md) |
| Decoders and multiplexers | [`digital-logic` 2.4](../digital-logic/lessons/02-04-decoders-encoders-multiplexers.md) |
| Flip-flops, clocking and setup time | [`digital-logic` 3.2](../digital-logic/lessons/03-02-flip-flops-and-clocking.md) |
| Finite-state machine design | [`digital-logic` 3.4](../digital-logic/lessons/03-04-design-of-finite-state-machines.md) |
| Register files and shift registers | [`digital-logic` 4.1](../digital-logic/lessons/04-01-registers-and-shift-registers.md) |
| SRAM/DRAM cells and programmable logic | [`digital-logic` 4.3](../digital-logic/lessons/04-03-memory-and-programmable-logic.md) |
| Datapath plus control FSM executing an instruction | [`digital-logic` 4.4](../digital-logic/lessons/04-04-datapaths-and-a-simple-cpu.md) |
| Modular arithmetic and $\mathbb{Z}/2^n\mathbb{Z}$ | [`discrete-mathematics` 4.3](../discrete-mathematics/lessons/04-03-modular-arithmetic-and-congruences.md) |
| Logarithms and asymptotic growth | [`algorithms` 1.1](../algorithms/lessons/01-01-asymptotic-notation.md) |

## Pitfalls

### The ISA line

- **You might think** a faster chip has a better instruction set — **but** almost all performance differences at the same ISA are microarchitectural. *([1.1](lessons/01-01-isa-contract-stored-program.md))*
- **You might think** the PC holds the current instruction — **but** it holds an *address*, and it has usually already advanced. *([1.1](lessons/01-01-isa-contract-stored-program.md))*
- **You might think** adding an instruction is backward-incompatible — **but** it is backward-compatible and **not forward**-compatible: old code runs on new chips, new code traps on old ones. *([1.1](lessons/01-01-isa-contract-stored-program.md))*

### Encoding and assembly

- **You might think** a 12-bit immediate reaches 4095 — **but** it is signed, so the range is $[-2048, 2047]$. *([1.2](lessons/01-02-registers-memory-instruction-formats.md))*
- **You might think** the scattered S and B immediates are historical accident — **but** they keep `rs1`, `rs2` and `funct3` in fixed bits so the register file can start reading before decode completes. *([1.2](lessons/01-02-registers-memory-instruction-formats.md))*
- **You might think** `lw rd, 1(a0)` loads element 1 — **but** offsets are in **bytes**; element $i$ of a word array is at offset $4i$. *([1.3](lessons/01-03-arithmetic-logic-data-transfer.md))*
- **You might think** `lui` then `addi` builds any constant — **but** `addi` sign-extends, so a low half with bit 11 set borrows 1 from the upper. Add the low half's sign bit to the `lui` immediate. *([1.3](lessons/01-03-arithmetic-logic-data-transfer.md))*
- **You might think** `srli` divides by a power of two — **but** only for unsigned values. For negatives use `srai`, and even that rounds toward $-\infty$ while C truncates toward zero. *([1.3](lessons/01-03-arithmetic-logic-data-transfer.md))*
- **You might think** `blt` and `bltu` differ only for negatives — **but** they differ for every value above `0x7FFFFFFF`, which is half the range. Using `bge` for a bounds check lets negative indices through — a real vulnerability class. *([1.4](lessons/01-04-branches-loops-control-flow.md), [2.1](lessons/02-01-alu-addition-subtraction-overflow.md))*
- **You might think** RISC-V branch offsets are measured from the next instruction — **but** they are measured from the branch itself; ARM and x86 differ. *([1.4](lessons/01-04-branches-loops-control-flow.md))*
- **You might think** "callee-saved" means you get it for free — **but** it means *this* function is responsible for saving it. *([1.5](lessons/01-05-procedures-stack-calling-convention.md))*
- **You might think** a function can leave `sp` where it ends up — **but** `sp` is a single shared register; returning with it changed corrupts the caller. *([1.5](lessons/01-05-procedures-stack-calling-convention.md))*

### Arithmetic

- **You might think** subtraction needs its own circuit — **but** $a-b = a+\bar b+1$: one adder, one control bit. *([2.1](lessons/02-01-alu-addition-subtraction-overflow.md))*
- **You might think** a faster adder always raises the clock — **but** only while it is the critical path. Past that, further improvement buys exactly nothing. *([2.1](lessons/02-01-alu-addition-subtraction-overflow.md))*
- **You might think** `mul` gives the whole product — **but** it gives the low 32 bits and silently discards the rest; you need `mulh` to see it. *([2.2](lessons/02-02-multiplication-and-division.md))*
- **You might think** floats are approximate in a fuzzy way — **but** every operation is exactly specified and deterministic. The unpredictability is in your expectations. *([2.3](lessons/02-03-floating-point-ieee-754.md))*
- **You might think** integers are safe in a float — **but** only up to $2^{24}$ in single precision. Above that, odd numbers do not exist. *([2.3](lessons/02-03-floating-point-ieee-754.md))*
- **You might think** reordering a float sum is harmless — **but** it changes the answer, which is why compilers will not reassociate without a flag and why a parallel reduction differs from a serial one. *([2.3](lessons/02-03-floating-point-ieee-754.md))*

### Processor design

- **You might think** CPI 1 means an efficient design — **but** the single-cycle machine achieves it by inflating the cycle. Optimising one factor of the iron law in isolation is the classic mistake. *([3.1](lessons/03-01-single-cycle-datapath.md), [5.1](lessons/05-01-measuring-performance-cpi-amdahl.md))*
- **You might think** a don't-care signal is unused — **but** the wire carries a value; it simply cannot affect anything because `RegWrite` gates the write. *([3.2](lessons/03-02-single-cycle-control.md))*
- **You might think** pipelining makes instructions faster — **but** each takes the same stages and slightly more wall-clock time. Only **throughput** improves. *([3.3](lessons/03-03-pipelining-and-the-pipelined-datapath.md))*
- **You might think** a $k$-stage pipeline gives $k\times$ — **but** you get $T_{\text{single}}/T_{\text{longest stage}}$, and register overhead takes more. *([3.3](lessons/03-03-pipelining-and-the-pipelined-datapath.md))*
- **You might think** deepening a pipeline helps — **but** only if you split the stage actually setting the clock, and only if no other stage ties with it. *([3.3](lessons/03-03-pipelining-and-the-pipelined-datapath.md))*
- **You might think** forwarding removes all data stalls — **but** the load-use case needs a bubble no matter what, because the value does not exist early enough. Adding memory ports does not help a **latency** problem. *([3.4](lessons/03-04-data-hazards-forwarding-stalls.md))*
- **You might think** either forwarding path will do when both match — **but** EX/MEM carries the more recent value and must win; choosing MEM/WB gives a stale-but-plausible result. *([3.4](lessons/03-04-data-hazards-forwarding-stalls.md))*
- **You might think** a 1-bit predictor is a simplified 2-bit one — **but** it can be worse than a fixed static guess, mispredicting twice per loop traversal. *([3.5](lessons/03-05-control-hazards-and-branch-prediction.md))*
- **You might think** predicting the direction is enough — **but** you also need the target before decode, which is what the branch target buffer is for. *([3.5](lessons/03-05-control-hazards-and-branch-prediction.md))*

### Memory

- **You might think** caches help because they are fast — **but** they help because of **locality**. Without it you pay hit time *plus* full penalty on every access. *([4.1](lessons/04-01-caches-and-locality.md))*
- **You might think** the index selects data — **but** it selects a *place to look*; only the tag comparison decides hit or miss. *([4.1](lessons/04-01-caches-and-locality.md))*
- **You might think** bigger blocks are always better — **but** the miss-rate curve is U-shaped: past the optimum, fewer blocks fit and the penalty grows. *([4.1](lessons/04-01-caches-and-locality.md))*
- **You might think** higher associativity is always better — **but** it lengthens the hit time and shows steep diminishing returns past 8-way. *([4.2](lessons/04-02-associativity-misses-write-policy.md))*
- **You might think** local and global L2 miss rates are interchangeable — **but** the local rate is measured against L2 accesses and is much higher. This is the standard arithmetic error here. *([4.2](lessons/04-02-associativity-misses-write-policy.md))*
- **You might think** write-back always beats write-through — **but** for write-only streaming output, write-allocate fetches blocks that are immediately overwritten. *([4.2](lessons/04-02-associativity-misses-write-policy.md))*
- **You might think** the page offset is translated — **but** it passes through untouched, which is what makes pages aligned and enables virtually-indexed physically-tagged L1 lookup. *([4.3](lessons/04-03-virtual-memory-and-the-tlb.md))*
- **You might think** L1 caches stay small because of cost — **but** the binding constraint is usually $\text{size}/\text{associativity}\le\text{page size}$. *([4.3](lessons/04-03-virtual-memory-and-the-tlb.md))*
- **You might think** a faster disk interface fixes slow storage — **but** for small random accesses the bottleneck is mechanical seek and rotation. *([4.4](lessons/04-04-storage-and-io.md))*
- **You might think** interrupts always beat polling — **but** for a very fast device the context-switch overhead can exceed the wait. *([4.4](lessons/04-04-storage-and-io.md))*

### Performance and parallelism

- **You might think** higher frequency means faster — **but** it is one factor of three. A 3 GHz machine at CPI 2 is slower than a 2 GHz machine at CPI 1. *([5.1](lessons/05-01-measuring-performance-cpi-amdahl.md))*
- **You might think** fewer instructions is always better — **but** a reciprocal-multiply raises instruction count and triples the speed, while a fused instruction lowered it and cost 19 percent. **Only the product matters.** *([5.1](lessons/05-01-measuring-performance-cpi-amdahl.md), [2.2](lessons/02-02-multiplication-and-division.md), [3.1](lessons/03-01-single-cycle-datapath.md))*
- **You might think** CPI is a goal — **but** inserting `nop`s improves it. It is a diagnostic, never a target. *([2.2](lessons/02-02-multiplication-and-division.md))*
- **You might think** out-of-order execution changes results — **but** in-order commit guarantees identical architectural state. *([5.2](lessons/05-02-instruction-level-parallelism.md))*
- **You might think** a wider machine scales proportionally — **but** sustained IPC on general code is 1–2 regardless, because dependences, branches and window size bind first. *([5.2](lessons/05-02-instruction-level-parallelism.md))*
- **You might think** speculation is harmless because nothing commits — **but** it is architecturally harmless and **microarchitecturally observable**: speculative loads leave cache traces, which is the Spectre class. *([5.2](lessons/05-02-instruction-level-parallelism.md), [3.5](lessons/03-05-control-hazards-and-branch-prediction.md))*
- **You might think** coherence makes shared memory safe — **but** it orders accesses to **one location** only. Ordering across locations is consistency; atomicity is a third thing again. *([5.3](lessons/05-03-multiprocessors-cache-coherence.md))*
- **You might think** false sharing requires shared data — **but** the whole point is that it does not; the unit of coherence is a **block**, not a variable. *([5.3](lessons/05-03-multiprocessors-cache-coherence.md))*
- **You might think** more cores always means more throughput — **but** coherence traffic and synchronisation grow with core count, so real systems have an **optimal** core count and scaling can go negative. *([5.3](lessons/05-03-multiprocessors-cache-coherence.md))*
