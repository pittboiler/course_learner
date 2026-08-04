# Computer Architecture — Syllabus

> Computer Science · Tier 1 · ~20 lessons · Prereqs: [digital-logic](../digital-logic/syllabus.md) · Roadmap id: `computer-architecture`

## Goal

Learn how the gates and registers you built in `digital-logic` become a machine that runs a program. You start at the *contract* — the instruction set architecture (a clean RISC ISA) — and learn to read and write assembly, hand-encode instructions, and see how integers and IEEE-754 floats live in a fixed number of bits. Then you build the processor: a single-cycle datapath and its control, then pipeline it and confront the hazards that pipelining creates (data, control, forwarding, stalls). From there you climb the memory hierarchy — caches and locality, associativity, virtual memory and the TLB — and finish with the tools for making machines *fast*: CPI and Amdahl's law, a taste of instruction-level parallelism (superscalar, out-of-order), and multicore with cache coherence.

Deliberately scoped: this is architecture and organization, not physical implementation. Transistor-level design, CMOS, and VLSI timing belong to `electronics`; GPU and accelerator microarchitecture are out. What you build here is the direct doorway to `operating-systems` — you'll leave knowing exactly what "the hardware" is that an OS manages.

## Dangerous Checklist

When you finish, you can:

- [ ] Read and write short RISC-V assembly programs with loops, branches, and array indexing
- [ ] Hand-encode an instruction into its binary fields and name its format (R / I / S / B / U / J)
- [ ] Translate a C-level procedure into assembly using the register calling convention and the stack
- [ ] Add and subtract in two's complement and detect overflow, and multiply/divide by the standard algorithms
- [ ] Encode a decimal number in IEEE-754 single precision, decode a hex pattern back, and explain why float addition isn't associative
- [ ] Trace one instruction of each type through a single-cycle datapath and state every control signal it asserts
- [ ] Draw the 5-stage pipeline and classify any dependence as a data, control, or structural hazard
- [ ] Decide whether a hazard is resolved by forwarding or needs a stall, and count the resulting cycles
- [ ] Split a memory address into tag / index / offset for a cache of given size, associativity, and block size
- [ ] Compute miss rate and AMAT for a loop, and attribute misses to the three C's (compulsory, capacity, conflict)
- [ ] Translate a virtual address to physical through a page table and a TLB, and size each structure
- [ ] Compute average CPI from an instruction mix and bound a speedup with Amdahl's law

## Modules

### Module 1: The instruction set and assembly

The ISA is the contract between hardware and software. These lessons teach you to speak it — to read a program as the machine does and write one back.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The ISA contract and the stored-program machine | Explain what an ISA fixes and why RISC keeps it small | stored-program concept, fetch–execute cycle, ISA vs. microarchitecture, RISC vs. CISC, the register–memory hierarchy of storage |
| 1.2 | Registers, memory, and instruction formats | Read a 32-bit RISC-V instruction and name its fields and format | 32 registers, word vs. byte addressing, endianness, R/I/S/B/U/J formats, opcode/funct/rd/rs/imm fields |
| 1.3 | Arithmetic, logic, and data transfer | Write straight-line code that computes and moves data to/from memory | add/sub/and/or/shift, immediates, `lw`/`sw` and base+offset addressing, load/store discipline, pseudo-instructions |
| 1.4 | Branches, loops, and control flow | Compile an `if`, a `while`, and an array walk into branches | conditional branches, `beq`/`bne`/`blt`, labels and PC-relative offsets, building loops, jump vs. branch |
| 1.5 | Procedures, the stack, and the calling convention | Call and return correctly, saving state on the stack | `jal`/`jalr`, return address, caller- vs. callee-saved registers, the stack pointer and frames, argument/return registers, recursion |

**Boss problem 1:** This RISC-V routine takes the base address of an `int` array in `a0` and its length `n` in `a1`.
```
    li   t0, 0          # sum = 0
    li   t1, 0          # i = 0
loop:
    bge  t1, a1, done   # while i < n
    slli t2, t1, 2      # t2 = i*4
    add  t3, a0, t2     # &A[i]
    lw   t4, 0(t3)      # A[i]
    add  t0, t0, t4     # sum += A[i]
    addi t1, t1, 1      # i++
    j    loop
done:
    mv   a0, t0         # return sum
```
(a) In one sentence, what does it compute and where is the result? (b) For `n = 4`, give the *dynamic* instruction count (instructions actually executed), and a closed-form count in terms of `n`. (c) Name the instruction format of `slli`, `lw`, `bge`, and `j`. *(Answers to check against: (a) the sum of the array's `n` elements, returned in `a0`; (b) $7n+4$, so $32$ when $n=4$ — count the `bge` test $n+1$ times, six body instructions plus the `j` each of $n$ iterations, plus two `li` and the final `mv`; (c) `slli` I-type (shift-immediate), `lw` I-type (load), `bge` B-type, `j` J-type — it's a `jal` pseudo-instruction.)*

### Module 2: Computer arithmetic

What the ALU actually does with those bits. Integers first, then the surprisingly subtle world of floating point.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The ALU: addition, subtraction, and overflow | Add and subtract two's-complement numbers and flag overflow | two's-complement add/sub, carry vs. overflow, the ALU as a bit-sliced adder, sign extension, saturating vs. wrapping |
| 2.2 | Multiplication and division | Run the shift-add multiply and restoring-divide algorithms by hand | double-width product, shift-and-add multiplier, `mul`/`mulh`, restoring division, quotient/remainder, signed handling |
| 2.3 | Floating point: IEEE-754 and its arithmetic | Encode/decode single-precision floats and add them correctly | sign/exponent/mantissa, bias, the hidden 1, normalized vs. denormal, rounding, alignment in FP add, non-associativity, ∞/NaN |

**Boss problem 2:** Work in single-precision IEEE-754 and 8-bit two's complement as noted. (a) Encode $-6.5$ as a 32-bit single-precision float; give the bit fields and the 8-hex-digit pattern. (b) In 8-bit two's complement, compute $80 + 48$: give the 8-bit result, its signed decimal value, and whether overflow occurred and why. (c) Let $a=2^{24}$, $b=1$, $c=-2^{24}$, all exactly representable singles. Show that $(a+b)+c$ and $a+(b+c)$ give different answers, and explain the mechanism in one sentence. *(Answers to check against: (a) $-6.5=-1.101_2\times2^2$, sign $1$, exponent $2+127=129=\texttt{10000001}$, mantissa $\texttt{10100000...}$, giving `0xC0D00000`; (b) $\texttt{01010000}+\texttt{00110000}=\texttt{10000000}=-128$; overflow — two positives summed to a negative, the true $128$ exceeds the $+127$ max; (c) $(a+b)+c=(2^{24})+(-2^{24})=0$ because $2^{24}+1$ rounds back to $2^{24}$ (the ulp there is $2$), while $a+(b+c)=2^{24}+(1-2^{24})=1$ — the small addend is lost when added to the large one.)*

### Module 3: The processor — datapath, control, and pipelining

Build the machine that runs the ISA, then make it fast by overlapping instructions — and pay the price in hazards.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The single-cycle datapath | Trace each instruction class through one datapath in one cycle | PC, instruction/data memory, register file, ALU, muxes, sign-extend, the R/load/store/branch paths |
| 3.2 | Single-cycle control | Derive every control signal from the opcode | `RegWrite`, `ALUSrc`, `MemRead`/`MemWrite`, `MemToReg`, `Branch`, ALU control, the main control truth table |
| 3.3 | Pipelining and the pipelined datapath | Split execution into the five classic stages with registers between | IF/ID/EX/MEM/WB, pipeline registers, throughput vs. latency, ideal speedup, why the cycle time shrinks |
| 3.4 | Data hazards: forwarding and stalls | Detect a RAW hazard and resolve it by forwarding or a stall | read-after-write hazards, EX/MEM and MEM/WB forwarding paths, the load-use hazard, stall (bubble) insertion, hazard-detection logic |
| 3.5 | Control hazards and branch prediction | Bound and reduce the branch penalty | the branch delay problem, flushing, predict-not-taken, static vs. dynamic prediction, a 1-/2-bit predictor, resolving branches earlier |

**Boss problem 3:** Assume the classic 5-stage pipeline (IF, ID, EX, MEM, WB) with full forwarding and a register file that writes in the first half of a cycle and reads in the second.
```
lw   x1, 0(x2)
add  x3, x1, x4
sub  x5, x3, x6
and  x7, x3, x5
```
(a) List each true (RAW) dependence and say whether forwarding alone handles it or a stall is also required. (b) How many cycles to finish all four instructions? (c) Separately: a conditional branch resolves at the *end* of EX under predict-not-taken; if it turns out taken, how many cycles are lost? *(Answers to check against: (a) `lw`→`add` on `x1` is a load-use hazard — forwarding plus **1 stall**; `add`→`sub` on `x3`, `add`→`and` on `x3`, and `sub`→`and` on `x5` are all covered by forwarding, **no stall**; (b) $4+4=8$ cycles ideal, $+1$ stall $=\mathbf{9}$ cycles; (c) two instructions (in IF and ID) are flushed → **2 cycles lost**.)*

### Module 4: The memory hierarchy

The processor is fast; memory is not. This module is the discipline of hiding that gap — caches, then the illusion of a private, huge address space.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Caches and the principle of locality | Explain why a small fast cache works and split an address for it | temporal vs. spatial locality, blocks/lines, direct-mapped cache, tag/index/offset, hit vs. miss, valid bit |
| 4.2 | Associativity, misses, and write policy | Choose associativity and write policy and reason about the three C's | set-associative and fully-associative, LRU replacement, compulsory/capacity/conflict misses, write-through vs. write-back, write-allocate |
| 4.3 | Virtual memory and the TLB | Translate a virtual address to physical and cache the translation | pages, page tables, page faults, VPN/offset, the TLB as a translation cache, protection bits, VM–cache interaction |
| 4.4 | Storage and I/O | Situate disks/SSDs and devices around the CPU and move data to them | latency/bandwidth of the storage hierarchy, DMA, polling vs. interrupts, memory-mapped I/O, buses, measuring I/O |

**Boss problem 4:** A machine has 32-bit byte addresses and a **16 KiB direct-mapped** data cache with **32-byte blocks**. (a) Give the tag / index / offset bit-widths. (b) A loop reads a large `int` (4-byte) array straight through from cold; give the steady-state miss rate and say which of the three C's those misses are. (c) With a 1-cycle hit time and a 100-cycle miss penalty, give the AMAT for that loop. Then, separately, the machine uses **4 KiB pages** with 32-bit virtual addresses — how many page-offset bits, and how many entries would a flat (single-level) page table hold? *(Answers to check against: (a) offset $=\log_2 32=5$, index $=\log_2(16\text{KiB}/32)=\log_2 512=9$, tag $=32-9-5=18$; (b) $32/4=8$ accesses per block → 1 miss per 8 → **12.5%**, all **compulsory** (cold) misses; (c) $\text{AMAT}=1+0.125\times100=\mathbf{13.5}$ cycles; page offset $=\log_2 4096=12$ bits, VPN $=20$ bits → $2^{20}=1{,}048{,}576$ entries.)*

### Module 5: Parallelism and performance

Finish with the vocabulary of *fast*: how to measure it, and the two ways architects buy more of it — within one instruction stream and across many cores.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Measuring performance: CPI and Amdahl's law | Compute CPU time from an instruction mix and bound any speedup | the iron law (time = IC × CPI ÷ freq), average CPI from a mix, MIPS pitfalls, Amdahl's law, the sequential-bottleneck limit |
| 5.2 | Instruction-level parallelism (a taste) | Explain how a core issues more than one instruction per cycle | superscalar issue, dynamic scheduling, out-of-order execution, register renaming, speculation, the ILP wall |
| 5.3 | Multiprocessors and cache coherence (a taste) | Say what goes wrong when caches share data and how coherence fixes it | shared vs. distributed memory, the coherence problem, snooping, write-invalidate (MSI), false sharing, the memory wall |

**Boss problem 5:** (a) A program's dynamic instruction mix is 50% ALU (CPI 1), 30% load/store (CPI 2), and 20% branch (CPI 3). Give the average CPI, and the CPU time for $10^9$ instructions on a 2 GHz core. (b) A workload spends 80% of its time in a section you parallelize across 4 cores with perfect speedup on that section; give the overall speedup, and the ceiling as cores → ∞. (c) Cores 0 and 1 each hold `x = 0` in their private caches; core 0 writes `x = 1` under a write-invalidate (MSI) protocol. What happens to core 1's copy, and what coherence state does core 0's line end in? *(Answers to check against: (a) $\text{CPI}=0.5(1)+0.3(2)+0.2(3)=1.7$; time $=10^9\times1.7/(2\times10^9)=\mathbf{0.85\ s}$; (b) $1/((1-0.8)+0.8/4)=1/0.4=\mathbf{2.5\times}$, ceiling $1/0.2=\mathbf{5\times}$; (c) core 1's copy is **invalidated**; core 0's line moves to the **Modified** state.)*

## Sources of truth

- Patterson & Hennessy, *Computer Organization and Design (RISC-V edition)* — the spine: RISC-V ISA and formats, single-cycle and pipelined datapaths, forwarding/hazards, caches, the three C's, and the performance equations.
- Harris & Harris, *Digital Design and Computer Architecture (RISC-V edition)* — for the gate-to-datapath bridge from `digital-logic` and the microarchitecture/control conventions.
- Hennessy & Patterson, *Computer Architecture: A Quantitative Approach* — for the "taste" of ILP (out-of-order, speculation), multiprocessors, and cache coherence at the level this course only samples.
