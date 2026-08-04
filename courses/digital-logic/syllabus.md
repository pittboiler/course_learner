# Digital Logic Design — Syllabus

> Engineering · Tier 1 · ~17 lessons · Prereqs: [discrete-mathematics](../discrete-mathematics/syllabus.md) · Roadmap id: `digital-logic`

## Goal

Learn how a pile of two-state switches becomes a machine that computes. You start with the only nouns hardware has — 0 and 1 — and build up: number systems and two's-complement arithmetic, the Boolean algebra that governs gates, and the discipline of turning a truth table into the *cheapest* circuit that realizes it. Then you assemble those gates into the standard combinational blocks (adders, comparators, multiplexers, decoders, a small ALU), give the circuit memory with latches and flip-flops, and clock it into a synchronous state machine — the abstraction behind every counter, controller, and CPU. By the end you can read a spec, design a finite-state machine that meets it, and trace how a datapath plus a control FSM executes an instruction.

Deliberately scoped: this is design at the gate-and-register level. Transistor-level circuits, CMOS, and timing physics belong to `electronics`; serious HDL/Verilog coding is only sketched (you'll read schematics and state diagrams, not write synthesizable RTL). What you build here is the direct prerequisite for `computer-architecture`.

## Dangerous Checklist

When you finish, you can:

- [ ] Convert fluently among binary, decimal, and hexadecimal, and read a hex dump as raw bits
- [ ] Represent a signed integer in two's complement and add, subtract, and detect overflow in it
- [ ] Simplify any Boolean expression with the algebra's laws and prove two circuits equivalent
- [ ] Write a truth table as a canonical sum-of-minterms or product-of-maxterms and convert between them
- [ ] Minimize a function of up to five variables with a Karnaugh map, exploiting don't-cares, and run one pass of Quine–McCluskey by hand
- [ ] Design an adder, comparator, multiplexer, decoder, and a small ALU, and estimate each one's gate-delay
- [ ] Explain how a latch stores a bit and why an edge-triggered flip-flop is the safe building block for clocked logic
- [ ] Analyze a synchronous sequential circuit into its state table and state diagram
- [ ] Design a Mealy or Moore finite-state machine from a word spec, assign states, and derive its next-state logic
- [ ] Build registers, shift registers, and counters (ripple, synchronous, mod-N) and say what each costs
- [ ] Size a ROM, RAM, or PLA for a given function or storage requirement, and use a ROM as a lookup table
- [ ] Trace how a datapath and a control FSM together fetch and execute one instruction

## Modules

### Module 1: Binary and Boolean algebra

The raw materials: how numbers live in bits, and the algebra that turns switches into logic. Everything downstream is built from these four lessons.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Number systems and bases | Convert among binary, decimal, and hex, and count in each | positional notation, base conversion, binary↔hex grouping, bits/nibbles/bytes, unsigned range |
| 1.2 | Signed numbers and two's-complement arithmetic | Represent negatives and add/subtract them with overflow detection | sign–magnitude vs. one's/two's complement, negation by invert-and-add-1, carry vs. overflow, sign extension |
| 1.3 | Boolean algebra and logic gates | Manipulate Boolean expressions and match them to gates | AND/OR/NOT/NAND/NOR/XOR, axioms, identity/complement/absorption laws, De Morgan, duality, gate symbols |
| 1.4 | Truth tables and canonical forms | Write any function as a canonical SOP or POS and convert between them | minterms and maxterms, sum-of-products, product-of-sums, $\Sigma m$ / $\Pi M$ notation, completeness of NAND/NOR |

**Boss problem 1:** Work in 8-bit two's complement throughout. (a) The byte `0xB3` is stored in a register. Give its value read as an *unsigned* number and as a *signed* two's-complement number. (b) Compute $45 - 77$ by forming the two's complement of 77 and adding; give the 8-bit result pattern and its decimal value, and state whether overflow occurred and why. (c) A function $F(A,B,C)=\Sigma m(3,5,6,7)$. Identify what it computes and simplify it to a minimal sum-of-products with Boolean algebra. *(Answers to check against: (a) 179 unsigned, $-77$ signed; (b) $45+\text{2's}(77)=00101101+10110011=11100000=-32$, no overflow — adding a positive and a negative can never overflow; (c) it is the 3-input majority function, $F=AB+BC+AC$.)*

### Module 2: Combinational logic design

From function to *good* circuit. First minimize cost systematically, then assemble the standard blocks every larger design is made of.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Karnaugh maps | Minimize a 3- or 4-variable function by grouping on a K-map | adjacency = one-variable change, prime implicants, essential PIs, wrap-around, reading minimal SOP |
| 2.2 | Don't-cares, POS maps, and Quine–McCluskey | Exploit don't-cares, minimize in POS, and mechanize minimization | don't-care conditions, POS grouping of 0s, tabular (Quine–McCluskey) method, prime-implicant chart, static hazards (brief) |
| 2.3 | Arithmetic circuits | Build and cascade adders, subtractors, and comparators | half/full adder, ripple-carry adder, two's-complement subtractor, carry propagation delay, magnitude comparator |
| 2.4 | Decoders, encoders, and multiplexers | Route and decode signals, and realize any function with a mux | binary decoder, priority encoder, multiplexer/demultiplexer, mux as a universal logic element, active-low enables |
| 2.5 | Building a simple ALU | Combine the blocks into an arithmetic-logic unit with selectable operations | function select lines, add/sub/AND/OR slices, status flags (zero, carry, sign, overflow), bit-slice replication |

**Boss problem 2:** Let $F(A,B,C,D)=\Sigma m(0,1,2,3,4,5,10,11,14,15)$, with $A$ the most significant variable. (a) Plot it on a 4-variable K-map and read off a minimal sum-of-products. (b) In an SOP (two-level AND-OR) realization, how many gate *levels* does a signal pass through worst-case, ignoring input inverters? (c) Realize $F$ with a single 4-to-1 multiplexer using $A,B$ as the select lines; give each data input $I_0..I_3$ as a function of $C$ and $D$. *(Answers to check against: (a) $F=A'C'+B'C+AC$; (b) two levels — AND then OR; (c) $I_0=1,\ I_1=C',\ I_2=C,\ I_3=C$.)*

### Module 3: Sequential logic and finite-state machines

Give the circuit memory, then a clock, then a purpose. This module is the conceptual heart of the course: the finite-state machine.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Latches and the storage of one bit | Explain how feedback stores a bit and where transparency bites | bistability, SR latch, gated D latch, transparency, the race/glitch problem motivating clocking |
| 3.2 | Flip-flops and clocking | Use edge-triggered flip-flops and read a timing diagram | edge triggering, D/JK/T flip-flops, master–slave, setup/hold time, characteristic and excitation tables |
| 3.3 | Analysis of synchronous circuits | Reduce a clocked circuit to its state table and diagram | next-state and output equations, state table, state diagram, Mealy vs. Moore outputs, timing trace |
| 3.4 | Design of finite-state machines | Turn a word spec into a working Mealy or Moore FSM | state-diagram synthesis, state assignment, next-state logic from flip-flop excitation, state reduction (equivalence) |

**Boss problem 3:** Design a Moore machine that raises its output to 1 whenever the serial input stream, read one bit per clock, has just completed the pattern `101` — *overlapping* occurrences count. (a) Draw the state diagram (name the states by the progress made toward `101`). (b) How many flip-flops does the state assignment require, and why? (c) With the machine starting in its reset state, give the output bit produced after each input for the stream `1101011`. *(Answers to check against: (a) four states — "none", "saw 1", "saw 10", "saw 101"; from "saw 101" a `1` goes to "saw 1" and a `0` goes to "saw 10", which is what makes it overlapping; (b) 2 flip-flops, since 4 states need $\lceil\log_2 4\rceil=2$; (c) output `0001010` — two detections.)*

### Module 4: Registers, memory, and datapaths

Scale up from single flip-flops to the register and memory structures that store real data, and finish by watching a datapath plus a control FSM execute an instruction — the doorway to `computer-architecture`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Registers and shift registers | Load, hold, and shift multi-bit data | parallel-load register, serial-in/serial-out and parallel variants, shift-left as ×2, ring and Johnson counters, a taste of LFSRs |
| 4.2 | Counters | Design ripple, synchronous, and mod-N counters | asynchronous (ripple) vs. synchronous counters, up/down, modulus and unused states, self-correcting design |
| 4.3 | Memory and programmable logic | Size and use ROM, RAM, and PLA/PAL structures | address/data lines, $2^n$ words × $m$ bits, ROM as a lookup table, static vs. dynamic RAM (concept), PLA/PAL AND-OR planes |
| 4.4 | Datapaths and a simple CPU | Trace how a datapath and control FSM execute one instruction | registers + ALU + buses = datapath, control signals, fetch–decode–execute as an FSM, microoperations, register-transfer notation |

**Boss problem 4:** You're sizing pieces of a tiny processor. (a) The data memory is organized as 4K × 16 bits. How many address lines and data lines does it need, and how many bits does it store in total? (b) A synchronous decade (mod-10) counter is required. What is the minimum number of flip-flops, and how many of their states go unused? (c) An 8-bit register holds the pattern `01001101`. It feeds a logical shift-left unit clocked once. Give the resulting bit pattern and its decimal value, and state which arithmetic operation a left shift implements. *(Answers to check against: (a) $4\text{K}=2^{12}$ → 12 address lines, 16 data lines, $4096\times16=65{,}536$ bits; (b) $\lceil\log_2 10\rceil=4$ flip-flops, $2^4-10=6$ unused states; (c) `01001101` = 77 → `10011010` = 154 = 77×2, so a left shift multiplies by 2 until it overflows past 8 bits.)*

## Sources of truth

- Mano & Ciletti, *Digital Design* — canonical notation for Boolean minimization, $\Sigma m$/$\Pi M$, flip-flop excitation tables, and FSM design conventions.
- Harris & Harris, *Digital Design and Computer Architecture* — for the datapath/control framing that bridges into `computer-architecture`.
- Wakerly, *Digital Design: Principles and Practices* — for practical building-block circuits (adders, muxes, counters, memory) and their gate-delay accounting.
