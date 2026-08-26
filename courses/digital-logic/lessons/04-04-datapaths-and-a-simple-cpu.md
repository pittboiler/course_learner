# Digital Logic Design · Lesson 4.4: Datapaths and a simple CPU

> ⏱ ~15 min · Module 4: Registers, memory, and datapaths · Builds on: [3.4 Design of finite-state machines](03-04-design-of-finite-state-machines.md), [2.5 Building a simple ALU](02-05-building-a-simple-alu.md), [4.3 Memory and programmable logic](04-03-memory-and-programmable-logic.md) · Unlocks: [`computer-architecture`](../../computer-architecture/syllabus.md)

## Why this matters

This is the lesson where the pile stops being a pile. You have an ALU, registers, counters, decoders, multiplexers, memory, and a method for building state machines — and it turns out those are *all* the parts. A processor is not a new kind of object; it is those seven things wired together with one wire per decision. Here you watch a single instruction, `ADD R1, R2, R3`, move through hardware you already know how to build, one clock cycle at a time, every control wire accounted for.

Scope warning up front: this is the **doorway**, not the room. Pipelining, caches, memory hierarchy, instruction-set design, and performance analysis belong to `computer-architecture` and are deliberately absent. What this lesson owes you is the mechanism — how gates execute an instruction — not how to make it fast.

## The idea

Every processor ever built splits into two halves, and the split is the single most useful idea in computer design:

- The **datapath** holds and transforms data. Registers, the ALU, the wires and multiplexers that route operands between them. It is a machine with no opinions: it will add whatever you point it at, into whatever you tell it.
- The **control unit** decides what the datapath does *this cycle*. It is a finite state machine — the exact object from [3.4](03-04-design-of-finite-state-machines.md). Its inputs are the current instruction's opcode and the ALU's status flags; its outputs are the wires that select, enable, and load.

Say it plainly: **a CPU is an FSM steering a pile of registers through an ALU.** It seems mysterious because it has a lot of wires, not because it has a new idea in it.

The datapath's parts are all yours already. The register file is a bank of parallel-load registers from [4.1](04-01-registers-and-shift-registers.md), with a decoder from [2.4](02-04-decoders-encoders-multiplexers.md) picking which one to write. The ALU is [2.5](02-05-building-a-simple-alu.md)'s, status flags and all. The **program counter (PC)** — the register holding the address of the next instruction — is literally a counter from [4.2](04-02-counters.md), with a parallel-load input so jumps can overwrite it. Memory is [4.3](04-03-memory-and-programmable-logic.md)'s. The routing is multiplexers from [2.4](02-04-decoders-encoders-multiplexers.md).

Two more registers exist only to talk to memory: the **MAR** (memory address register), which drives the address lines, and the **MDR** (memory data register), which catches the word coming back. And one holds the instruction being worked on: the **IR** (instruction register).

## The formal version

### Register-transfer notation

The compact language for "what happened this cycle" is **register-transfer notation**, or RTL:

$$R1 \leftarrow R2 + R3, \qquad \text{MAR} \leftarrow \text{PC}, \qquad \text{MDR} \leftarrow M[\text{MAR}].$$

*In words: read everything named on the right, and at the next clock edge latch the result into the register named on the left.* Here $M[\text{MAR}]$ means "the memory word at the address currently in MAR". Each such line is a **microoperation** — the smallest unit of work a datapath can do in one cycle.

### The simultaneity rule (this is the one people get wrong)

Everything on the right of the arrows is read from the *old* register contents, and everything on the left is written at the *same* clock edge. Combinational logic settles all cycle long; the flip-flops sample once, at the edge ([3.2](03-02-flip-flops-and-clocking.md)). So

$$R1 \leftarrow R2, \qquad R2 \leftarrow R1 \quad \text{(same cycle)}$$

is a legal **swap**, not a bug — both source values are the pre-edge ones. In software `R1 = R2; R2 = R1;` destroys a value; in hardware, as one cycle of RTL, it exchanges them with no temporary. Internalize this and half of datapath timing stops being confusing.

### Control signals

Every decision the datapath can make is exactly one wire:

| Signal | Chooses / does |
|---|---|
| `MARsel` | which source feeds MAR: the PC, or the result bus |
| `MARld`, `MDRld`, `IRld` | load-enable on MAR / MDR / IR |
| `PCinc`, `PCld` | increment the PC / parallel-load it (a jump) |
| `MemRd`, `MemWr` | memory read / write strobe |
| `RA`, `RB`, `RW` | 3-bit register-file addresses: read port A, read port B, write port |
| `RegWr` | register-file write enable |
| `ALUop` | ALU function select: ADD, SUB, AND, OR, PASS-A |
| `Wsel` | which source feeds the result bus: the ALU, or MDR |
| `FlagLd` | latch the ALU's Z, C, N, V flags |

**The control FSM's output is exactly this bundle — one setting per state.** In Moore terms ([3.3](03-03-analysis-of-synchronous-circuits.md)), the state *is* the control-signal setting.

One term you'll meet: older datapaths let many registers share one wire using **tri-state buffers** — gates with a third output state, high-impedance ("Hi-Z"), in which the output is electrically disconnected so some *other* driver can own the wire. On-chip, multiplexers have almost entirely replaced that style (cheaper to verify, and they cannot short two drivers together); tri-state survives mainly on buses leaving the chip.

### The machine we'll trace

16-bit words, eight registers `R0`–`R7`, memory of 4096 words. Instruction format, with bit 15 the most significant:

| bits | 15–12 | 11–9 | 8–6 | 5–3 | 2–0 |
|---|---|---|---|---|---|
| field | opcode | `rd` (destination) | `rs` (source 1) | `rt` (source 2) | unused |

Opcodes: `0001` = ADD, `0010` = SUB, `0011` = LOAD. So `ADD R1, R2, R3` — meaning $R[\text{rd}] \leftarrow R[\text{rs}] + R[\text{rt}]$ — encodes as `0001` `001` `010` `011` `000`, that is `0x1298`.

### Two ways to build the control unit

- **Hardwired.** Realize the FSM as gates and flip-flops exactly as [3.4](03-04-design-of-finite-state-machines.md) teaches: state register, next-state logic from the opcode and flags, output logic driving the control wires. Fast — the control signals are a couple of gate delays after the state register — but rigid: changing one instruction means re-minimizing and re-laying-out logic.
- **Microprogrammed.** Store the control-signal bundle for each state in a **ROM**, addressed by (current state, opcode), with each ROM word also carrying the next state. This is [4.3](04-03-memory-and-programmable-logic.md)'s ROM-as-lookup-table applied to control. Slower by a ROM access, but you change the machine's behavior by rewriting a table. With a 5-bit state and a 4-bit opcode the ROM has 9 address lines, so $2^9 = 512$ words; at 16 control bits plus 5 next-state bits per word that's $512 \times 21 = 10{,}752$ bits — cheap.

The classic trade: hardwired for simple, speed-critical instruction sets; microprogrammed for large irregular ones, where an instruction may take dozens of states and being able to *fix* it after fabrication is worth a lot.

## Picture

![Datapath block diagram showing PC, a MARsel multiplexer, MAR, memory, MDR, IR, an 8 by 16 register file with two read ports, an ALU with a flags register, and a writeback multiplexer feeding a result bus, with coral control signals fanning out from a control unit block](assets/04-04-fig1.svg)

Two things to notice: the **result bus** loops from the writeback mux back to both the register file's write port and the MARsel mux — one bus, two customers — and the PC has its own `+1` incrementer, so incrementing it never competes for the ALU.

## Worked examples

**Example 1 (the artifact — one instruction, cycle by cycle).** Execute `ADD R1, R2, R3` with PC = `0x100`, memory word `0x1298` stored there, `R2` = `0x0007` (7) and `R3` = `0xFFFB` (−5 in 16-bit two's complement, per [1.2](01-02-signed-numbers-twos-complement.md)). Assume memory returns a word within one cycle.

| Cycle | State | RTL (microoperations) | Control signals asserted | State at end of cycle |
|---|---|---|---|---|
| 1 | FETCH1 | $\text{MAR} \leftarrow \text{PC}$ | `MARsel`=PC, `MARld` | MAR = `0x100` |
| 2 | FETCH2 | $\text{MDR} \leftarrow M[\text{MAR}]$; $\text{PC} \leftarrow \text{PC}+1$ | `MemRd`, `MDRld`, `PCinc` | MDR = `0x1298`, PC = `0x101` |
| 3 | DECODE | $\text{IR} \leftarrow \text{MDR}$ | `IRld` | IR = `0x1298`; next state ← opcode |
| 4 | EXEC-ADD | $R[\text{rd}] \leftarrow R[\text{rs}] + R[\text{rt}]$ | `RA`=`IR[8:6]`, `RB`=`IR[5:3]`, `ALUop`=ADD, `Wsel`=ALU, `RW`=`IR[11:9]`, `RegWr`, `FlagLd` | R1 = `0x0002`, Z=0 C=1 N=0 V=0 |
| 5 | FETCH1 | (next instruction begins) | `MARsel`=PC, `MARld` | MAR = `0x101` |

Four cycles per ADD. Reading the table:

- **Cycle 2 is the simultaneity rule earning its keep.** MAR already latched the old PC at the end of cycle 1, so bumping the PC now cannot disturb the fetch in flight. The dedicated incrementer makes it free.
- **Cycle 3 is the decode**, and the decode is nothing but a state transition on an input: the FSM's next state is a function of the opcode field. One subtlety worth naming — the branch must be computed from bits that are stable *during* cycle 3, so the next-state logic reads the opcode field of MDR, the same four bits IR is latching at that edge.
- **Cycle 4 checks out numerically.** `RA` = `010` = 2 and `RB` = `011` = 3, so the ALU sees `0x0007` and `0xFFFB`; `0x0007 + 0xFFFB = 0x10002`, truncated to 16 bits as `0x0002` = 2, and indeed $7 + (-5) = 2$. Flags: Z = 0, N = 0 (bit 15 clear), C = 1 (carry out), V = 0 — adding a positive and a negative can never overflow. `RW` = `001`, so it lands in `R1`.

**Example 2 (where the clock period comes from).** The clock period must cover the *longest* combinational path in any single cycle ([3.2](03-02-flip-flops-and-clocking.md)):

$$T_{\text{clk}} \ \ge\ t_{cq} + t_{\text{comb,max}} + t_{su}.$$

Here the worst cycle is 4, and the worst path inside it is the ALU's carry chain: a 16-bit ripple-carry adder propagates roughly 2 gate delays per bit stage ([2.3](02-03-arithmetic-circuits.md)), so about 32 gate delays. At 100 ps per gate that is 3.2 ns, plus perhaps 0.4 ns of register-file read, 0.1 ns of mux, and $t_{cq} + t_{su} \approx 0.2$ ns — call it 3.9 ns, so roughly 250 MHz. Every state pays the worst state's price, since one clock serves all of them. That single sentence is why carry-lookahead adders exist, and it is one of the doors into `computer-architecture`.

## Watch out

- **You might think the arrow in $R1 \leftarrow R2 + R3$ means "copy, now."** It doesn't. The right-hand side is combinational logic that has been settling since the last edge; the left-hand side latches once, at the next edge. That is why $R1 \leftarrow R2,\ R2 \leftarrow R1$ swaps rather than clobbers.
- **You might think one instruction takes one clock cycle.** In this machine ADD takes 4 and LOAD takes 6 — a *multi-cycle* design, where the control FSM simply visits more states for harder instructions. Single-cycle and pipelined machines make different trades; that comparison is `computer-architecture`'s.
- **You might read C = 1 in Example 1 as "something went wrong."** For signed arithmetic the error flag is V, not C. Here C = 1 is the ordinary carry out of a two's-complement add and carries no meaning for the signed result — exactly the carry-versus-overflow distinction from [1.2](01-02-signed-numbers-twos-complement.md).
- **You might expect the control unit to be a new kind of circuit.** It is a Moore FSM with an unusually wide output; its states are named FETCH1, DECODE, EXEC-ADD instead of $S_0, S_1, S_2$, and that is the entire difference.

## One-liner

> A CPU is a datapath — registers, an ALU, and muxes — plus a finite state machine whose outputs are the control wires; fetch–decode–execute is just that machine's state sequence.

## Problems

**P1 (🟢)** The word `0x2C50` is fetched into IR. (a) Decode it into the assembly form `OP Rd, Rs, Rt` using the format and opcode table above. (b) If `R1` = `0x0003` and `R2` = `0x0009` when it executes, what 16-bit pattern ends up in the destination register, what is its signed value, and what are Z, C, N, V?

**P2 (🟡)** Trace `ADD R1, R2, R3` (word `0x1298`) again, but starting with PC = `0x200`, `R2` = `0x7FFF` and `R3` = `0x0001`. Give the four-row cycle table (cycle, state, RTL, control signals) with the value of every register that changes, and the final flags. What is PC when the instruction retires?

**P3 (🔴)** Add `LOAD Rd, [Rs]` — meaning $R[\text{rd}] \leftarrow M[\,R[\text{rs}]\,]$, opcode `0011` — to the machine, using only the hardware in the figure. Write its full cycle table from FETCH1 through the return to FETCH1. How many cycles does it take, and which control signal must you be careful *not* to assert while computing the address?

<details>
<summary>Solutions</summary>

**P1** (a) `0x2C50` = `0010 1100 0101 0000`. Slice it by the format:

- bits 15–12 = `0010` → SUB
- bits 11–9 = `110` = 6 → `rd` = `R6`
- bits 8–6 = `001` = 1 → `rs` = `R1`
- bits 5–3 = `010` = 2 → `rt` = `R2`
- bits 2–0 = `000`, unused

So `0x2C50` is **`SUB R6, R1, R2`**, i.e. $R6 \leftarrow R1 - R2$.

*Check.* Reassemble: `0010`+`110`+`001`+`010`+`000` = `0010110001010000` = `0x2C50` ✓.

(b) The ALU subtracts as $A + \overline{B} + 1$ ([2.3](02-03-arithmetic-circuits.md)). With $A$ = `0x0003`, $\overline{B}$ = `0xFFF6`:

$$\texttt{0x0003} + \texttt{0xFFF6} + 1 = \texttt{0xFFFA}.$$

`R6` = `0xFFFA`, whose signed value is $-6$ (since `0x10000` − `0xFFFA` = 6), and indeed $3 - 9 = -6$.

Flags: **Z = 0** (nonzero); **N = 1** (bit 15 set); **C = 0** — in decimal $3 + 65526 + 1 = 65530 < 65536$, so no carry out, which for a subtractor means a *borrow* occurred, correct for the unsigned reading $3 - 9$; **V = 0** — the operands have the same sign, so a subtraction cannot overflow.

**P2** Identical control signals to Example 1; only the data changes.

| Cycle | State | RTL | Control signals | End-of-cycle values |
|---|---|---|---|---|
| 1 | FETCH1 | $\text{MAR} \leftarrow \text{PC}$ | `MARsel`=PC, `MARld` | MAR = `0x200` |
| 2 | FETCH2 | $\text{MDR} \leftarrow M[\text{MAR}]$; $\text{PC} \leftarrow \text{PC}+1$ | `MemRd`, `MDRld`, `PCinc` | MDR = `0x1298`, PC = `0x201` |
| 3 | DECODE | $\text{IR} \leftarrow \text{MDR}$ | `IRld` | IR = `0x1298`, next state = EXEC-ADD |
| 4 | EXEC-ADD | $R1 \leftarrow R2 + R3$ | `RA`=`010`, `RB`=`011`, `ALUop`=ADD, `Wsel`=ALU, `RW`=`001`, `RegWr`, `FlagLd` | R1 = `0x8000` |

`0x7FFF + 0x0001 = 0x8000`. Flags: **Z = 0**; **N = 1** (bit 15 set); **C = 0** ($32767 + 1 = 32768 < 65536$, no carry out of bit 15); **V = 1** — two positive operands produced a negative result, the textbook signed overflow. PC = `0x201` when the instruction retires; it was incremented in cycle 2, not at the end.

*Check.* $32767 + 1 = 32768$, but the largest 16-bit signed value is $2^{15}-1 = 32767$, so the true sum is out of range and V must be 1 ✓. Read as unsigned, `0x8000` = 32768 is correct and C = 0 confirms no unsigned overflow — the two flags disagreeing is exactly the point of having both.

**P3** The address must reach MAR, and the only path into MAR besides the PC is the result bus — so route `R[rs]` through the ALU with `ALUop` = PASS-A and select it with `MARsel` = result bus.

| Cycle | State | RTL | Control signals |
|---|---|---|---|
| 1 | FETCH1 | $\text{MAR} \leftarrow \text{PC}$ | `MARsel`=PC, `MARld` |
| 2 | FETCH2 | $\text{MDR} \leftarrow M[\text{MAR}]$; $\text{PC} \leftarrow \text{PC}+1$ | `MemRd`, `MDRld`, `PCinc` |
| 3 | DECODE | $\text{IR} \leftarrow \text{MDR}$ | `IRld` |
| 4 | EXEC-LD1 | $\text{MAR} \leftarrow R[\text{rs}]$ | `RA`=`IR[8:6]`, `ALUop`=PASS-A, `Wsel`=ALU, `MARsel`=result bus, `MARld` |
| 5 | EXEC-LD2 | $\text{MDR} \leftarrow M[\text{MAR}]$ | `MemRd`, `MDRld` |
| 6 | EXEC-LD3 | $R[\text{rd}] \leftarrow \text{MDR}$ | `Wsel`=MDR, `RW`=`IR[11:9]`, `RegWr` |
| → | FETCH1 | | |

**Six cycles**, versus four for ADD — the multi-cycle machine spends what each instruction needs.

The signal to keep de-asserted in cycle 4 is **`RegWr`**. The address is riding the result bus, which also feeds the register file's write port; assert `RegWr` and you would silently overwrite a register with the address. (`FlagLd` should also stay low throughout — a load has no business disturbing the flags a later branch might read.)

*Check.* As an encoding sanity test, `LOAD R4, [R7]` is `0011` `100` `111` `000` `000` = `0x39C0`; cycle 4 reads `RA` = `111` = `R7`, cycle 6 writes `RW` = `100` = `R4` ✓.

</details>

## Flashback

**From Lesson 4.3 (Memory and programmable logic):** A 4-bit × 4-bit **unsigned multiplier** is built as a pure ROM lookup table — you feed it both operands and it returns the product, no arithmetic circuit involved. (a) How many address lines, and how many words? (b) How wide must each word be? (c) How many bits does the ROM store in total?

<details>
<summary>Solution</summary>

(a) The two 4-bit operands are concatenated into the address, so $4 + 4 = 8$ **address lines**, giving $2^8 = 256$ **words** — one per input combination.

(b) The largest product is $15 \times 15 = 225$. Seven bits reach only $2^7 - 1 = 127$, which is too small; eight bits reach $255 \ge 225$. So each word is **8 bits** wide.

(c) $256 \times 8 = \boxed{2048 \text{ bits}}$, i.e. 2 Kbit.

*Check.* The general rule from 4.3 — an $n$-input, $m$-output function needs a $2^n \times m$ ROM — gives $2^8 \times 8$ directly ✓. The same sizing arithmetic is what priced the microprogram ROM earlier in this lesson: address lines from the inputs, word width from the outputs.

</details>

## Connections — and where this course lands

- **Backward:** this lesson is the course. Bits and two's complement ([1.1](01-01-number-systems-and-bases.md), [1.2](01-02-signed-numbers-twos-complement.md)) became a Boolean algebra ([1.3](01-03-boolean-algebra-logic-gates.md)) and truth tables ([1.4](01-04-truth-tables-canonical-forms.md)); K-maps and Quine–McCluskey ([2.1](02-01-karnaugh-maps.md), [2.2](02-02-dont-cares-pos-quine-mccluskey.md)) made the gates cheap; adders and routing blocks ([2.3](02-03-arithmetic-circuits.md), [2.4](02-04-decoders-encoders-multiplexers.md)) composed into an ALU ([2.5](02-05-building-a-simple-alu.md)); feedback gave one bit a memory ([3.1](03-01-latches-storage-of-one-bit.md)), a clock edge made that memory safe ([3.2](03-02-flip-flops-and-clocking.md)), and analysis and synthesis turned clocked flip-flops into finite state machines ([3.3](03-03-analysis-of-synchronous-circuits.md), [3.4](03-04-design-of-finite-state-machines.md)); registers, counters, and memory arrays scaled storage up ([4.1](04-01-registers-and-shift-registers.md), [4.2](04-02-counters.md), [4.3](04-03-memory-and-programmable-logic.md)). This lesson wired all of it together and ran a program on it. Nothing new was needed — that was the point.
- **Deliberately out of scope, and where it lives:** pipelining, caches and the memory hierarchy, instruction-set design, branch prediction, and performance measurement all belong to [`computer-architecture`](../../computer-architecture/syllabus.md). Writing synthesizable HDL rather than reading schematics is a skill this course only gestured at. And everything below the gate — transistors, switching speed, power — is [`electronics`](../../electronics/lessons/04-03-cmos-inverter-gates.md), the layer this course stands on.
- **Forward:** [`computer-architecture`](../../computer-architecture/syllabus.md) starts precisely where this table ends. Its first move is to notice that cycles 1–3 of every instruction are identical, so the machine could be fetching the next instruction while executing this one — which is pipelining, and which immediately raises the hazards that make the subject interesting.
- **Sideways:** the control FSM is the same object that sequences a traffic light or a serial protocol — a CPU is only a state machine whose input happens to be a list of numbers it reads out of memory. That reflexive move, data as instructions, is what `algorithms` and the theory of computation are built on.
