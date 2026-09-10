# Computer Architecture · Lesson 3.1: The single-cycle datapath

> ⏱ ~15 min · Module 3: The processor · Builds on: [2.2 (multiplication and division)](02-02-multiplication-and-division.md), [`digital-logic` 4.4 (datapaths and a simple CPU)](../../digital-logic/lessons/04-04-datapaths-and-a-simple-cpu.md) · Unlocks: 3.2 (single-cycle control), 3.3 (pipelining)

## Why this matters

[`digital-logic` 4.4](../../digital-logic/lessons/04-04-datapaths-and-a-simple-cpu.md) already established the shape of a processor: a datapath holding registers and an ALU, steered by a control FSM, with a PC, an instruction register and memory registers. **That is assumed here and not repeated.**

What this lesson adds is specificity and consequence. The generic machine of `digital-logic` used a multi-cycle controller shuttling data through a shared bus. This one implements the *actual RISC-V ISA* of Module 1, with every instruction completing in exactly one cycle and no sequencing at all — and the point of building it is to discover why that is a bad idea. The single-cycle design is the strawman whose specific failure motivates everything in the rest of Module 3.

## The idea

Lay out the hardware so that one instruction flows left to right through it and finishes before the clock ticks again. Fetch it, decode it, compute, touch memory if needed, write the result back — all inside one cycle.

To do this you need each piece of hardware to be available exactly when the instruction reaches it, which forces two structural decisions. **Instruction memory and data memory must be separate**, because a `lw` needs to fetch its instruction and read its data in the same cycle, and one memory cannot do two reads at once. And **every instruction class must be able to reach every unit it needs**, which is what all the multiplexers are for.

The result is genuinely simple: no state machine, no sequencing, control is pure combinational logic. And it is genuinely slow, for a reason worth stating precisely: **the clock period must cover the longest path any instruction takes.** A `lw` walks through all five blocks in series. An `add` finishes in half the time and then sits idle waiting for the clock. Every instruction pays the `lw` price.

## The formal version

**The five stages, as spatial regions rather than time steps.**

| Stage | Hardware | What happens |
|---|---|---|
| IF | PC, instruction memory | fetch the word at `PC`; compute `PC+4` |
| ID | register file, sign-extend | decode; read `rs1` and `rs2`; extend the immediate |
| EX | ALU | compute a result or an address, or evaluate a branch |
| MEM | data memory | read or write, for `lw`/`sw` only |
| WB | write port of the register file | write the result into `rd` |

In this design these are five **places**, all active in the same cycle. In [3.3](03-03-pipelining-and-the-pipelined-datapath.md) they become five **times**, which is the whole trick of pipelining.

**Why the register file has three ports.** Two read ports (`rs1` and `rs2`) and one write port (`rd`), all usable in the same cycle. The read ports are combinational — put an address on, get data out after a propagation delay. The write port is clocked, taking effect at the cycle boundary.

**How each instruction class flows.**

*R-type (`add x3, x1, x2`).* Read both registers, ALU computes, result goes to `rd`. Data memory is bypassed by a multiplexer.

*Load (`lw x4, 8(x3)`).* Read `rs1` as the base; the ALU adds the sign-extended immediate to form the address; data memory reads; the loaded value goes to `rd`. **This is the longest path** — register file, then ALU, then memory, then back to the register file.

*Store (`sw x4, 8(x3)`).* Same address computation, but the second register read supplies the data to write, and nothing is written back to a register.

*Branch (`beq x1, x2, L`).* The ALU **subtracts** the two registers to test equality; separately, a dedicated adder computes `PC + immediate`. A multiplexer on the PC input selects between `PC+4` and the branch target based on the comparison. Note the branch needs *two* additions in the same cycle, which is why there is a second adder rather than reusing the ALU.

**The multiplexers, and what each one decides.**

| Mux | Selects between | Controlled by |
|---|---|---|
| `ALUSrc` | second ALU operand: register or immediate | R-type vs immediate/load/store |
| `MemToReg` | write-back value: ALU result or memory data | load vs everything else |
| PC source | `PC+4` or branch target | `Branch` AND the ALU's zero output |

Each multiplexer is one decision the control unit of [3.2](03-02-single-cycle-control.md) has to make.

**The critical path.** Cycle time must cover the slowest instruction. With plausible delays:

| Component | Delay |
|---|---|
| instruction memory | 200 ps |
| register file read | 100 ps |
| ALU | 200 ps |
| data memory | 200 ps |
| register file write setup | 100 ps |

$$T_{\texttt{lw}} = 200 + 100 + 200 + 200 + 100 = 800 \text{ ps}$$
$$T_{\texttt{add}} = 200 + 100 + 200 + 0 + 100 = 600 \text{ ps}$$
$$T_{\texttt{beq}} = 200 + 100 + 200 = 500 \text{ ps}$$

The clock must be set by the worst case, **800 ps**, so an `add` wastes 200 ps and a `beq` wastes 300 ps every single time it executes.

> **The single-cycle machine's CPI is exactly 1**, which sounds ideal and is the source of the problem: it achieves CPI 1 by making the cycle enormous. [5.1](05-01-measuring-performance-cpi-amdahl.md)'s iron law makes clear that CPI alone is meaningless without the cycle time beside it.

## Picture

![A left-to-right datapath diagram with the program counter feeding instruction memory, then the register file, sign-extend unit and ALU, then data memory and a write-back multiplexer, with a return path to the register file and a dashed bypass showing R-type instructions skipping memory](assets/03-01-fig1.svg)

Follow the solid path all the way across: that is `lw`, using every block in series, and its total delay is the cycle time. The dashed line is the R-type bypass — it skips data memory entirely and could have finished 200 ps earlier, but the clock does not care. **Everything runs at the speed of the slowest thing.**

## Worked examples

**Example 1 (mechanical): trace `sw x4, 8(x3)` through the datapath.** Suppose `x3 = 0x1000` and `x4 = 42`.

| Stage | What happens | Value |
|---|---|---|
| IF | fetch the instruction at `PC`; compute `PC+4` | the S-type word |
| ID | read `rs1 = x3`, read `rs2 = x4`; sign-extend the split immediate | `0x1000`, `42`, `+8` |
| EX | ALU adds base and offset (`ALUSrc` selects the immediate) | address `0x1008` |
| MEM | data memory **writes** `42` at `0x1008` (`MemWrite = 1`) | — |
| WB | nothing — `RegWrite = 0` | — |

Two details worth noting. The second register read supplies **data to store**, not an ALU operand — this is the one instruction class where `rs2` bypasses the ALU entirely and goes straight to the memory's write-data port. And `MemToReg` is a **don't care**: no register is written, so whatever the write-back multiplexer selects is irrelevant. That is why [3.2](03-02-single-cycle-control.md)'s truth table has an `x` in that column.

**Example 2 (why you'd care): what the single-cycle design costs.** Take the delays above and an instruction mix of 25% loads, 10% stores, 45% R-type, 20% branches.

*Single-cycle machine.* Cycle time is 800 ps for every instruction, CPI 1:
$$\text{time per instruction} = 800 \text{ ps} .$$

*A hypothetical variable-cycle machine* where each instruction took only the time it needs:
$$0.25(800) + 0.10(700) + 0.45(600) + 0.20(500) = 200 + 70 + 270 + 100 = 640 \text{ ps} .$$

So the single-cycle design wastes $(800-640)/800 = 20$ percent of its time on instructions that finished early and waited. And that is the *optimistic* comparison — a real multi-cycle machine would have its own overheads.

**The deeper problem is that this gets worse as the ISA grows.** Add a floating-point multiply at 1500 ps, or an integer divide at 20 cycles' worth of logic, and the single-cycle clock must stretch to cover it — slowing down *every* instruction in the program, including the `add`s that have nothing to do with it. A single-cycle machine cannot have a slow instruction at all.

That is the specific failure that motivates the rest of the module. The fix is not to make the ALU faster ([2.1](02-01-alu-addition-subtraction-overflow.md) already showed that hits a floor); it is to stop making every instruction wait for the worst case. **Cut the datapath into stages and let each instruction occupy one stage at a time** — which is [3.3](03-03-pipelining-and-the-pipelined-datapath.md), and which turns the 800 ps serial path into five stages of about 200 ps each.

## Watch out

- **You might think** separate instruction and data memories are unrealistic — **but actually** they are exactly what real machines have at the top of the hierarchy: split L1 instruction and data caches, for precisely this reason ([4.1](04-01-caches-and-locality.md)). The unified memory sits further down where the simultaneous-access pressure is lower.
- **You might think** CPI 1 means the design is efficient — **but actually** it achieves CPI 1 by inflating the cycle. Performance is $\text{IC} \times \text{CPI} \times T$, and this design minimises the middle factor by maximising the last one. Optimising one factor of the iron law in isolation is the classic mistake ([5.1](05-01-measuring-performance-cpi-amdahl.md)).
- **You might think** the branch adder could be the ALU — **but actually** a branch needs to compare two registers *and* compute `PC + immediate` in the same cycle, which is two additions. Reusing the ALU would need two cycles, breaking the single-cycle premise, so a dedicated adder is cheaper than the alternative.

## One-liner

> Lay the five stages out in space so an instruction crosses them all in one cycle — and the clock period becomes the delay of the slowest instruction, so every `add` pays the `lw` price and no slow instruction can ever be added to the ISA.

## Problems

**P1 (🟢)** For each instruction, state which of the five stages does real work and which are idle: (a) `add x5, x6, x7`; (b) `lw x5, 0(x6)`; (c) `sw x5, 0(x6)`; (d) `beq x5, x6, L`. Then say which has the shortest critical path and why.

**P2 (🟡)** Using the component delays in the lesson (instruction memory 200, register read 100, ALU 200, data memory 200, register write 100 ps), compute the critical path for each of the four instruction classes. Give the required cycle time and the clock frequency.

**P3 (🔴, optional)** A team proposes adding an instruction `lwadd rd, rs1, rs2, imm` that loads from `rs1 + imm` and adds `rs2` to the loaded value in one instruction. (a) Give its critical path with the lesson's delays. (b) Give the new cycle time and the percentage slowdown for every *other* instruction. (c) The instruction appears in 5% of a program's dynamic mix and saves one instruction each time it is used. Compute whether the program gets faster or slower overall.

<details>
<summary>Solutions</summary>

**P1**

| | Stages doing work | Idle |
|---|---|---|
| (a) `add x5, x6, x7` | IF, ID, EX, WB | **MEM** |
| (b) `lw x5, 0(x6)` | IF, ID, EX, MEM, WB | none — uses all five |
| (c) `sw x5, 0(x6)` | IF, ID, EX, MEM | **WB** (nothing is written to a register) |
| (d) `beq x5, x6, L` | IF, ID, EX | **MEM and WB** |

*Shortest critical path: `beq`.* It stops after EX — the ALU's comparison and the separate PC adder both complete there, and the result is a multiplexer select on the PC rather than anything written back. With no memory access and no register write, it skips the two most expensive remaining stages.

The ordering by path length is `beq` < `add` < `sw` < `lw`, and note that `sw` and `lw` differ only by the register write-back at the end. This spread is exactly the problem: four instruction classes with four different natural durations, all forced onto one clock.

**P2** Summing the components each class actually traverses in series:

| Instruction | Path | Delay |
|---|---|---|
| `beq` | IMem 200 + RegRead 100 + ALU 200 | $\mathbf{500}$ ps |
| `add` | IMem 200 + RegRead 100 + ALU 200 + RegWrite 100 | $\mathbf{600}$ ps |
| `sw` | IMem 200 + RegRead 100 + ALU 200 + DMem 200 | $\mathbf{700}$ ps |
| `lw` | IMem 200 + RegRead 100 + ALU 200 + DMem 200 + RegWrite 100 | $\mathbf{800}$ ps |

*Cycle time* must accommodate the worst case:
$$T = 800 \text{ ps} .$$

*Clock frequency:*
$$f = \frac{1}{800\times 10^{-12}} = 1.25 \times 10^9 = \boxed{1.25 \text{ GHz}} .$$

Notice the spread: `beq` needs 500 ps and gets 800, wasting 37.5 percent of its cycle. Across a realistic mix that waste is the 20 percent computed in Example 2, and it is pure loss — no work is being done in it.

**P3** *(a) Critical path of `lwadd`.* The instruction must: fetch, read registers, compute the address, access memory, **then add `rs2` to the loaded value**, then write back. The second addition happens *after* the memory access, so it is an extra ALU delay in series:

$$T_{\texttt{lwadd}} = \underbrace{200}_{\text{IMem}} + \underbrace{100}_{\text{RegRead}} + \underbrace{200}_{\text{ALU: address}} + \underbrace{200}_{\text{DMem}} + \underbrace{200}_{\text{ALU: add}} + \underbrace{100}_{\text{RegWrite}} = \boxed{1000 \text{ ps}}$$

*(b) New cycle time and the cost to everything else.* The clock must cover the worst case, which is now `lwadd`:
$$T_{\text{new}} = 1000 \text{ ps} , \qquad f_{\text{new}} = 1.0 \text{ GHz} .$$

Every other instruction was running at 800 ps and now runs at 1000 ps:
$$\text{slowdown} = \frac{1000-800}{800} = \boxed{25\% \text{ slower, for every instruction in the program}} .$$

*(c) Does the program get faster?* Let the original program execute $N$ instructions at 800 ps each:
$$T_{\text{old}} = 800N \text{ ps} .$$

With `lwadd`, 5 percent of the *original* dynamic instructions are replaced by the fused form, and each use eliminates one instruction. So the new instruction count is
$$N_{\text{new}} = N - 0.05N = 0.95N ,$$
executing at 1000 ps each:
$$T_{\text{new}} = 1000 \times 0.95N = 950N \text{ ps} .$$

$$\frac{T_{\text{new}}}{T_{\text{old}}} = \frac{950}{800} = 1.1875 \quad\Longrightarrow\quad \boxed{\text{the program is } 18.75\% \text{ SLOWER}}$$

**Adding the instruction made things worse**, and the arithmetic shows exactly why: it saved 5 percent of the instruction count and cost 25 percent of the clock. To break even you would need
$$\frac{1000 \times (1-x)}{800} = 1 \quad\Longrightarrow\quad x = 0.20 ,$$
i.e. the fused instruction would have to eliminate **20 percent** of all dynamic instructions.

This is the single-cycle design's structural weakness stated as a number: **any instruction added to the ISA taxes every instruction in every program**, because the clock is global. It is also a clean illustration of the iron law from [5.1](05-01-measuring-performance-cpi-amdahl.md) — instruction count fell, cycle time rose, and only the product decides.

The resolution in a real machine is pipelining ([3.3](03-03-pipelining-and-the-pipelined-datapath.md)): once stages are separated in time, a long instruction occupies its stage for extra cycles without stretching the clock for anyone else. That is precisely why real ISAs *can* afford multi-cycle multiply and divide ([2.2](02-02-multiplication-and-division.md)) while a single-cycle machine cannot.

</details>

## Flashback

**From Lesson 2.2 (multiplication and division):** A loop body is 6 instructions, one of which is a `div` costing 28 cycles; the others are 1 cycle each. (a) Give cycles per iteration and CPI. (b) Replacing the `div` with a reciprocal multiply costs 4 cycles plus 2 extra one-cycle instructions. Give the new cycles per iteration, new CPI, and the speedup. (c) State what happened to instruction count.

<details>
<summary>Solution</summary>

*(a) As written.* Six instructions: five at 1 cycle plus the `div` at 28.
$$\text{cycles} = 5(1) + 28 = 33 , \qquad \mathrm{CPI} = \frac{33}{6} = \boxed{5.5}$$

*(b) After the transformation.* The `div` is gone, replaced by a 4-cycle multiply-high plus 2 one-cycle instructions. The body is now $5 + 1 + 2 = 8$ instructions:
$$\text{cycles} = 5(1) + 4 + 2(1) = 11 , \qquad \mathrm{CPI} = \frac{11}{8} = \boxed{1.375}$$
$$\text{speedup} = \frac{33}{11} = \boxed{3.0\times}$$

*(c) Instruction count went UP*, from 6 to 8 — a 33 percent increase — while the loop ran three times faster.

That combination is the point, and it is the same trap as this lesson's P3 seen from the other direction. There, instruction count *fell* and the program got slower; here instruction count *rose* and the program got faster. Neither factor of the iron law
$$\text{time} = \text{IC} \times \mathrm{CPI} \times T$$
predicts performance on its own, and optimising any one of them in isolation is as likely to hurt as help.

CPI fell from 5.5 to 1.375, which in this case moved the same direction as performance — but [2.2](02-02-multiplication-and-division.md) P3 showed that is not guaranteed either, since inserting `nop`s would improve CPI while doing nothing useful. The only defensible comparison is **total cycles**, which here is unambiguous: 33 down to 11 per iteration.

The practical reading matches [2.2](02-02-multiplication-and-division.md)'s advice: a loop-invariant divisor is worth hoisting into a reciprocal multiply, and compilers do this automatically only when the divisor is a compile-time constant.

</details>

## Connections

- **Backward:** the datapath/control split, the register file, the PC and the ALU all come from [`digital-logic` 4.4](../../digital-logic/lessons/04-04-datapaths-and-a-simple-cpu.md) and [2.5](../../digital-logic/lessons/02-05-building-a-simple-alu.md); what is new is implementing a *specific* ISA with *no* sequencing. The fixed field positions from [1.2](01-02-registers-memory-instruction-formats.md) are what let the register file be wired straight to instruction bits, and the sign-extend unit handles [1.3](01-03-arithmetic-logic-data-transfer.md)'s immediates.
- **Forward:** [3.2](03-02-single-cycle-control.md) derives the control signals that drive every multiplexer here. [3.3](03-03-pipelining-and-the-pipelined-datapath.md) cuts this exact datapath into five stages, converting the spatial layout into a temporal one and removing the "everyone waits for `lw`" tax.
- **Sideways:** the requirement for separate instruction and data memories is why real machines split their L1 caches ([4.1](04-01-caches-and-locality.md)) — a design decision made at the top of the memory hierarchy purely to satisfy a datapath structural constraint, and one of the clearest cases of microarchitecture shaping the memory system rather than the reverse.
