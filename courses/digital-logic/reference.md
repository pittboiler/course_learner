# Digital Logic Design · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Everything here is built from switches that are either on or off. This card holds
the number-system and two's-complement rules, the Boolean laws and gate symbols,
the minimization procedures, the standard combinational and sequential building
blocks, the timing inequalities that set a clock speed, and the FSM design recipe
— plus the notation traps and off-by-one errors that cause most real mistakes.

## Notation

| Symbol | Means | First used |
|---|---|---|
| `1011`, `0xB3` | binary and hex literals — always in backticks, never in math | [1.1](lessons/01-01-number-systems-and-bases.md) |
| bit / nibble / byte | 1 / 4 / 8 bits; "word" is context-dependent | [1.1](lessons/01-01-number-systems-and-bases.md) |
| $2^n$ vs $2^n-1$ | $n$ bits give $2^n$ **patterns**, unsigned range $0$ to $2^n-1$ | [1.1](lessons/01-01-number-systems-and-bases.md) |
| K, M, G | $2^{10}=1024$, $2^{20}$, $2^{30}$ — **not** powers of 10 | [1.1](lessons/01-01-number-systems-and-bases.md) |
| $C$ (carry) | carry out of the MSB — the **unsigned** flag | [1.2](lessons/01-02-signed-numbers-twos-complement.md) |
| $V$ (overflow) | $C_n \oplus C_{n-1}$ — the **signed** flag | [1.2](lessons/01-02-signed-numbers-twos-complement.md) |
| $\overline{A}$ | complement/NOT (some books write $A'$) | [1.3](lessons/01-03-boolean-algebra-logic-gates.md) |
| $A\cdot B$ or $AB$ | AND. $A+B$ is OR, $A\oplus B$ is XOR | [1.3](lessons/01-03-boolean-algebra-logic-gates.md) |
| $m_i$, $M_i$ | minterm and maxterm of row $i$; $m_i = \overline{M_i}$ | [1.4](lessons/01-04-truth-tables-canonical-forms.md) |
| $\Sigma m(\ldots)$ | canonical SOP — lists the rows where $F=1$ | [1.4](lessons/01-04-truth-tables-canonical-forms.md) |
| $\Pi M(\ldots)$ | canonical POS — lists the rows where $F=0$ | [1.4](lessons/01-04-truth-tables-canonical-forms.md) |
| **$A$ is the MSB** | the course-wide variable-order convention; row index is the input's binary value | [1.4](lessons/01-04-truth-tables-canonical-forms.md) |
| PI / EPI | prime implicant / essential prime implicant | [2.1](lessons/02-01-karnaugh-maps.md) |
| `X`, $d(\ldots)$ | don't-care in a table; don't-care set in $\Sigma$ notation | [2.2](lessons/02-02-dont-cares-pos-quine-mccluskey.md) |
| $g_i$, $p_i$ | carry generate $A_iB_i$ and propagate $A_i \oplus B_i$ | [2.3](lessons/02-03-arithmetic-circuits.md) |
| $\overline{EN}$, $\overline{CS}$ | active-low signals — asserted when the wire reads **0** | [2.4](lessons/02-04-decoders-encoders-multiplexers.md) |
| Z, C, N, V | ALU status flags: zero, carry, negative, overflow | [2.5](lessons/02-05-building-a-simple-alu.md) |
| $Q$, $\overline{Q}$ | stored bit and its complement | [3.1](lessons/03-01-latches-storage-of-one-bit.md) |
| $Q^+$ | **next state** — the value after the coming clock edge (Mano writes $Q(t{+}1)$) | [3.1](lessons/03-01-latches-storage-of-one-bit.md) |
| `CLK`, ▷ | clock; the triangle means edge-triggered, a bubble means falling-edge | [3.2](lessons/03-02-flip-flops-and-clocking.md) |
| $t_{su}$, $t_h$, $t_{cq}$ | setup, hold, and clock-to-Q times | [3.2](lessons/03-02-flip-flops-and-clocking.md) |
| Mealy / Moore | output depends on state **and input** / on **state only** | [3.3](lessons/03-03-analysis-of-synchronous-circuits.md) |
| $R1 \leftarrow R2 + R3$ | register-transfer notation — right side read, left side latched, same edge | [4.4](lessons/04-04-datapaths-and-a-simple-cpu.md) |

**The default is rising-edge triggering and $A$ as the most significant variable
throughout.** Both are stated because both are conventions, not facts.

## Definitions

### Positional notation

A numeral is $\sum_i d_i b^i$ — the same idea in every base. Binary wins because
a switch has exactly two states you can trust; hex is binary bundled four bits at
a time, since $16 = 2^4$.

*Introduced:* [1.1](lessons/01-01-number-systems-and-bases.md)

### Two's complement

Make the top bit's weight **negative**: in $n$ bits the MSB carries $-2^{n-1}$ and
the rest carry their usual positive weights. Negate by invert-and-add-1. One zero,
range $-2^{n-1}$ to $+2^{n-1}-1$, and — the reason it won — **subtraction becomes
addition**, so one adder does both.

*Introduced:* [1.2](lessons/01-02-signed-numbers-twos-complement.md)

### Carry vs overflow

Two independent flags, computed unconditionally, meaning different things. **Carry**
$C_n$ reports the **unsigned** range; **overflow** $V = C_n \oplus C_{n-1}$ reports
the **signed** range. Hardware sets both; the programmer chooses which to believe.
Adding a positive to a negative can never overflow.

*Introduced:* [1.2](lessons/01-02-signed-numbers-twos-complement.md)

### Sign extension

To widen a **signed** value, replicate the sign bit; to widen an **unsigned** one,
pad with zeros. Both are correct — for different types.

*Introduced:* [1.2](lessons/01-02-signed-numbers-twos-complement.md)

### Duality

Swap AND↔OR and 0↔1 and a true Boolean statement stays true. Distinct from
complementation, which also complements the **variables**.

*Introduced:* [1.3](lessons/01-03-boolean-algebra-logic-gates.md)

### De Morgan's laws

$$\overline{A+B} = \overline{A}\cdot\overline{B}, \qquad \overline{A\cdot B} = \overline{A}+\overline{B}$$

The bar **flips the operator** as it passes through. Graphically: push the bubble
through a gate and the shape flips — a NAND is an OR with inverted inputs.

*Introduced:* [1.3](lessons/01-03-boolean-algebra-logic-gates.md)

### Functional completeness

A gate set is complete if every Boolean function can be built from it. $\{$AND, OR,
NOT$\}$ is complete — the canonical SOP construction *is* the proof. By De Morgan,
NAND alone and NOR alone are each complete. $\{$AND, OR$\}$ without NOT is **not**.

*Introduced:* [1.4](lessons/01-04-truth-tables-canonical-forms.md)

### Minterm and maxterm

$m_i$ is the AND term that is 1 on exactly row $i$ (variable if its bit is 1,
complement if 0). $M_i$ is the OR term that is 0 on exactly row $i$ — **the rule is
inverted** (variable if its bit is **0**). $\Sigma m(S) = \Pi M(\overline{S})$.

*Introduced:* [1.4](lessons/01-04-truth-tables-canonical-forms.md)

### Prime implicant

Any legal K-map group is an **implicant**; one that cannot be enlarged is
**prime**; one covering a 1 that no other PI covers is **essential**. Take all
essentials first, then cover the rest. The minimum need not be unique.

*Introduced:* [2.1](lessons/02-01-karnaugh-maps.md)

### Don't-care

An input combination that **cannot occur** (or whose output genuinely doesn't
matter). Treat each `X` as 0 or 1 independently, whichever enlarges your groups.
It is a promise about the input, not a run-time freedom.

*Introduced:* [2.2](lessons/02-02-dont-cares-pos-quine-mccluskey.md)

### Static hazard

A momentary wrong output when one product term turns off before another turns on —
two adjacent groups that touch but don't overlap. Fixed by adding a redundant
**consensus** term. Minimal is not always correct in a timing sense.

*Introduced:* [2.2](lessons/02-02-dont-cares-pos-quine-mccluskey.md)

### Gate delay

The count of gates on the longest path. A ripple-carry adder's carry must cross
every stage, so its delay grows **linearly** in $n$ — which is why the adder is
usually the critical path setting the clock ceiling.

*Introduced:* [2.3](lessons/02-03-arithmetic-circuits.md)

### Bistability

Cross-couple two inverters and the loop has exactly two stable states — one stored
bit. **Feedback is the only way gates can remember.**

*Introduced:* [3.1](lessons/03-01-latches-storage-of-one-bit.md)

### Transparency

While a latch's enable is high the output **tracks** the input continuously — it
does not sample. The value kept is the one present at the enable's falling edge.
This is what makes level-sensitive storage unusable for state machines.

*Introduced:* [3.1](lessons/03-01-latches-storage-of-one-bit.md)

### Edge triggering

A flip-flop samples its input at the **instant** of a clock edge, not over an
interval, so the feedback race disappears and the combinational logic gets a full
period to settle. Achieved by master–slave (two latches on opposite polarities).

*Introduced:* [3.2](lessons/03-02-flip-flops-and-clocking.md)

### Excitation table

Given a required $Q \to Q^+$ transition, what inputs are needed. The tool that
turns a state diagram into next-state logic. The JK table is full of don't-cares,
which is what makes JK designs minimize well.

*Introduced:* [3.2](lessons/03-02-flip-flops-and-clocking.md)

### Mealy vs Moore

**Moore** output depends only on the state — written inside the circle, changes
only at clock edges, glitch-free. **Mealy** output depends on state and input —
written on the arrow as `in/out`, reacts one cycle earlier, often needs fewer
states, but can glitch. They agree on *which* events they detect and differ by one
cycle on *when* they say so.

*Introduced:* [3.3](lessons/03-03-analysis-of-synchronous-circuits.md)

### State

The smallest summary of the past that determines the future. Name states by what
they **remember** ("saw 10"), never $S_0, S_1$.

*Introduced:* [3.4](lessons/03-04-design-of-finite-state-machines.md)

### State equivalence

Two states are equivalent if they produce identical output sequences for every
input sequence. Merging them helps only if it crosses a power-of-two boundary —
5 states and 8 states both need 3 flip-flops.

*Introduced:* [3.4](lessons/03-04-design-of-finite-state-machines.md)

### Datapath and control

A processor splits into a **datapath** (registers, ALU, buses — holds and
transforms data) and a **control unit** (an FSM whose outputs are the control
wires). Fetch–decode–execute is that FSM's state sequence.

*Introduced:* [4.4](lessons/04-04-datapaths-and-a-simple-cpu.md)

## Formulas and rules

### Bases and conversion

| Task | Method |
|---|---|
| Binary → decimal | positional sum $\sum d_i2^i$ |
| Decimal → binary | repeated division by 2, remainders read **bottom-to-top**; or subtract largest power |
| Binary ↔ hex | group in fours **from the right**, pad the left with zeros |
| Range check | $n$ bits → $2^n$ patterns, unsigned $0$ to $2^n-1$ |

| $n$ | patterns | max unsigned |
|---|---|---|
| 4 | 16 | 15 |
| 8 | 256 | 255 |
| 16 | 65,536 | 65,535 |
| 32 | 4,294,967,296 | $\approx4.29\times10^9$ |

*From* [1.1](lessons/01-01-number-systems-and-bases.md)

### Two's complement

| Operation | Rule |
|---|---|
| Value | MSB weight is $-2^{n-1}$; e.g. `10110011` $= -128+32+16+2+1 = -77$ |
| Negate | invert all bits, add 1 (or: copy from the right through the first `1`, invert the rest) |
| Range | $-2^{n-1}$ to $+2^{n-1}-1$; $-2^{n-1}$ has no negation |
| Subtract | $A - B = A + \overline{B} + 1$ |
| Overflow test (a) | carry into MSB $\ne$ carry out of MSB |
| Overflow test (b) | same-signed operands giving an opposite-signed result |
| Widen | signed → replicate sign bit; unsigned → pad zeros |

*From* [1.2](lessons/01-02-signed-numbers-twos-complement.md)

### Boolean laws

| Law | AND form | OR form |
|---|---|---|
| Identity | $A\cdot1 = A$ | $A+0 = A$ |
| Null | $A\cdot0 = 0$ | $A+1 = 1$ |
| Idempotence | $A\cdot A = A$ | $A+A = A$ |
| Complement | $A\overline{A} = 0$ | $A+\overline{A} = 1$ |
| Absorption | $A(A+B) = A$ | $A+AB = A$ |
| Distributive | $A(B+C) = AB+AC$ | $A+BC = (A+B)(A+C)$ |
| De Morgan | $\overline{AB} = \overline{A}+\overline{B}$ | $\overline{A+B} = \overline{A}\,\overline{B}$ |

Involution $\overline{\overline{A}} = A$. Consensus $AB + \overline{A}C + BC = AB + \overline{A}C$.
**Note $A + BC = (A+B)(A+C)$ has no arithmetic analogue** — it is true here.

**Gates:** AND, OR, NOT, NAND, NOR, XOR ("the inputs differ"), XNOR ("the inputs
match"). NAND and NOR are each universal.

*From* [1.3](lessons/01-03-boolean-algebra-logic-gates.md)

### Canonical forms

| Form | Built from | Notation |
|---|---|---|
| SOP (sum of minterms) | the rows where $F=1$ | $\Sigma m(\ldots)$ |
| POS (product of maxterms) | the rows where $F=0$ | $\Pi M(\ldots)$ |

$\Sigma m(S) = \Pi M(\overline{S})$; $m_i = \overline{M_i}$;
$\overline{F} = \Sigma m(\text{rows where } F=0)$. There are $2^{2^n}$ functions of
$n$ variables (16 for $n=2$, 256 for $n=3$, 65,536 for $n=4$). Canonical form is
unique and expensive; minimal form is cheap and often not unique.

*From* [1.4](lessons/01-04-truth-tables-canonical-forms.md)

### K-map minimization

| Rule | Statement |
|---|---|
| Label order | **Gray code** `00, 01, 11, 10` — never `00, 01, 10, 11` |
| Group size | rectangles of $1, 2, 4, 8, 16$; a group of $2^k$ eliminates $k$ variables |
| Reading a group | keep the variables that stay **constant**, drop those that change |
| Wrap-around | the map is a **torus** — edges wrap, and the four corners form one group |
| Procedure | circle all PIs → take every essential → cover leftovers with fewest more |
| **Verification** | re-expand your SOP to minterms and compare sets |

**POS on a map:** group the **0s** to minimize $\overline{F}$, then apply De Morgan.
Forgetting that last step gives you the complement of what you wanted.

**Quine–McCluskey:** group minterms by 1-count → combine adjacent pairs differing
in one bit (mark the eliminated variable with `-`) → repeat → uncombined terms are
PIs → build the prime-implicant chart → single-mark columns identify essentials.
Scales past 5 variables; the covering step is set-cover (NP-hard).

*From* [2.1](lessons/02-01-karnaugh-maps.md), [2.2](lessons/02-02-dont-cares-pos-quine-mccluskey.md)

### Arithmetic circuits

| Block | Equations |
|---|---|
| Half adder | $S = A\oplus B$, $C_{out} = AB$ (no $C_{in}$ — bit 0 only) |
| Full adder | $S = A\oplus B\oplus C_{in}$, $C_{out} = AB + C_{in}(A\oplus B)$ |
| Equivalently | $C_{out} = AB + AC_{in} + BC_{in}$ (the **majority** function) |
| Ripple-carry delay | $\approx 2n$ gate delays (state your per-stage convention) |
| Carry-lookahead | $C_{i+1} = g_i + p_iC_i$ with $g_i = A_iB_i$, $p_i = A_i\oplus B_i$ → $O(\log n)$ |
| Adder/subtractor | XOR each $B_i$ with $SUB$, feed $SUB$ into $C_0$ |
| Overflow | $V = C_n \oplus C_{n-1}$ — one gate |
| Equality | $\overline{A\oplus B}$ per bit, ANDed |
| Magnitude | a **priority scan** from the MSB down — first difference wins |

*From* [2.3](lessons/02-03-arithmetic-circuits.md)

### Routing blocks

| Block | Behaviour |
|---|---|
| Decoder ($n\to2^n$) | exactly one output asserted; **each output is one minterm** |
| Decoder + OR | realizes any function straight from its $\Sigma m$ list |
| Encoder ($2^n\to n$) | inverse; undefined on multiple assertions |
| Priority encoder | highest asserted input wins, plus a "valid" flag |
| Mux ($2^n\to1$) | $Y = \overline{S}I_0 + SI_1$ for $n=1$; a hardware `if` |
| Demux | a decoder with an enable |

**Mux as universal logic:** a $2^{n-1}$-to-1 mux realizes any $n$-variable function
— put $n-1$ variables on the selects and feed each data input one of
$\{0, 1, X, \overline{X}\}$ for the leftover variable $X$.

*From* [2.4](lessons/02-04-decoders-encoders-multiplexers.md)

### ALU and flags

Bit-slice design: build one bit (adder + parallel logic gates + output mux),
replicate $n$ times, thread the carry through.

| Flag | Computed as | Read it for |
|---|---|---|
| **Z** zero | NOR of all result bits | equality tests |
| **C** carry | carry out of the MSB | **unsigned** range |
| **N** negative | the MSB of the result | **signed** sign |
| **V** overflow | $C_n \oplus C_{n-1}$ | **signed** range |

Conditional branches are just tests on these flags — the link from arithmetic
hardware to program control flow. Critical path is the carry chain.

*From* [2.5](lessons/02-05-building-a-simple-alu.md)

### Storage elements

| Element | Behaviour |
|---|---|
| SR latch (NOR) | $S{=}1$ set, $R{=}1$ reset, both 0 hold, both 1 **forbidden** |
| SR latch (NAND) | active-low: hold is both `1`, forbidden is both `0` |
| Gated D latch | $Q^+ = D$ while enabled (**transparent**), else hold |
| D flip-flop | $Q^+ = D$ at the edge |
| T flip-flop | $Q^+ = T \oplus Q$ |
| JK flip-flop | $Q^+ = J\overline{Q} + \overline{K}Q$; $J{=}K{=}1$ toggles |

**Timing:**

$$T_{clk} \ge t_{cq} + t_{comb,max} + t_{su} \qquad\text{(setup / max frequency)}$$
$$t_{cq} + t_{comb,min} \ge t_h \qquad\text{(hold)}$$

The hold constraint has **no $T_{clk}$ in it** — a hold violation cannot be fixed
by slowing the clock. Clock skew eats into both margins.

*From* [3.1](lessons/03-01-latches-storage-of-one-bit.md), [3.2](lessons/03-02-flip-flops-and-clocking.md)

### Sequential analysis and FSM design

**Analysis** (circuit → behaviour): identify state variables → write next-state
equations (apply the flip-flop's characteristic equation) → write output equations
→ build the state table → draw the state diagram.

**Design** (spec → circuit): decide what must be remembered → draw the state
diagram with meaningful names → **check every state has an arrow for every input**
→ reduce → assign states ($k = \lceil\log_2 N\rceil$ flip-flops) → derive
next-state logic via the excitation table → minimize with K-maps → verify by
analysing your own circuit back.

**Overlapping patterns:** from any state, the correct next state is the one for the
**longest suffix that is also a prefix** of the target pattern.

**One-hot encoding** uses one flip-flop per state — more flip-flops, simpler and
faster next-state logic. Standard in FPGA design.

*From* [3.3](lessons/03-03-analysis-of-synchronous-circuits.md), [3.4](lessons/03-04-design-of-finite-state-machines.md)

### Registers, shifts, and counters

| Item | Fact |
|---|---|
| Enable a register | put a **mux** on the D input — **never gate the clock** |
| Logical left shift | $\times 2$ (until it overflows the width) |
| Logical right shift | $\div 2$ for **unsigned** |
| Arithmetic right shift | $\div 2$ for **signed**; rounds toward $-\infty$ ($-7 \gg 1 = -4$) |
| Barrel shifter | any shift in one step via a mux network |
| Ring counter | $n$ states, one-hot, no decoding needed |
| Johnson counter | $2n$ states, successive states differ in one bit |
| LFSR | up to $2^n-1$ states; all-zeros is a **dead state** |
| Ripple counter | few gates, but delay accumulates → **transient wrong codes** |
| Synchronous counter | $T_i = Q_0Q_1\cdots Q_{i-1}$; all outputs change together, no glitches |
| Mod-N | $k = \lceil\log_2 N\rceil$ flip-flops, $2^k - N$ unused states |
| Cascading | moduli **multiply** ($10 \times 6 = 60$); flip-flop counts add |

**Self-correction:** unused states treated as don't-cares go *somewhere* arbitrary
and may form a private cycle. A self-correcting design pins them to rejoin the main
count, at the cost of more logic. Check by tracing each unused state.

*From* [4.1](lessons/04-01-registers-and-shift-registers.md), [4.2](lessons/04-02-counters.md)

### Memory and programmable logic

$2^n$ words × $m$ bits needs **$n$ address lines**, **$m$ data lines**, and stores
$2^n \times m$ bits. (4K × 16 → 12 address lines, 16 data lines, 65,536 bits = 8 KiB.)

| Structure | AND plane | OR plane |
|---|---|---|
| **ROM** | fixed (full decoder — all $2^n$ minterms) | programmable |
| **PLA** | programmable | programmable |
| **PAL** | programmable | fixed |

A ROM stores a truth table directly, so **no minimization is needed** and delay is
independent of the function — but cost grows as $2^n$. A PLA's cost is its
product-term count, so minimization still pays.

| | SRAM | DRAM |
|---|---|---|
| Cell | cross-coupled latch (~6T) | 1 transistor + capacitor |
| Speed / density | fast, low density | slower, high density |
| Refresh | none | required (charge leaks) |
| Use | caches, registers | main memory |

*From* [4.3](lessons/04-03-memory-and-programmable-logic.md)

### Datapath and control

| Piece | Built from |
|---|---|
| Register file | registers ([4.1](lessons/04-01-registers-and-shift-registers.md)) + decoder ([2.4](lessons/02-04-decoders-encoders-multiplexers.md)) |
| ALU + flags | [2.5](lessons/02-05-building-a-simple-alu.md) |
| PC | a loadable up-counter ([4.2](lessons/04-02-counters.md)) |
| Routing | muxes ([2.4](lessons/02-04-decoders-encoders-multiplexers.md)) |
| Control unit | a Moore FSM ([3.4](lessons/03-04-design-of-finite-state-machines.md)) with a very wide output |

Fetch–decode–execute is the control FSM's state sequence; **decode is a state
transition on the opcode**. Control can be **hardwired** (gates, fast and rigid) or
**microprogrammed** (control signals stored in a ROM, slower but modifiable). Clock
period comes from the longest single-cycle path — usually the ALU carry chain.

*From* [4.4](lessons/04-04-datapaths-and-a-simple-cpu.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Propositional logic, truth-functional connectives, logical equivalence | [discrete-mathematics 1.1](../discrete-mathematics/lessons/01-01-propositional-logic-boolean-algebra.md) |
| Proof by truth table / exhaustive case analysis | [discrete-mathematics 1.3](../discrete-mathematics/lessons/01-03-proof-techniques.md) |
| Induction (behind recursive circuit constructions) | [discrete-mathematics 1.4](../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md) |
| Sets and set operations (used for minterm index sets) | [discrete-mathematics 2.1](../discrete-mathematics/lessons/02-01-sets-and-set-operations.md) |
| Counting and combinations | [discrete-mathematics 3.1](../discrete-mathematics/lessons/03-01-counting-rules-permutations-combinations.md) |
| Modular arithmetic (behind mod-N counters) | [discrete-mathematics 4.3](../discrete-mathematics/lessons/04-03-modular-arithmetic-and-congruences.md) |
| Recurrence relations | [discrete-mathematics 5.1](../discrete-mathematics/lessons/05-01-recurrence-relations.md) |
| Why a transistor switches, and CMOS gate construction | [electronics 2.4](../electronics/lessons/02-04-mosfet-how-it-works.md), [4.3](../electronics/lessons/04-03-cmos-inverter-gates.md) |
| Noise margins, static vs dynamic power, why NAND is the cheap primitive | [electronics 4.3](../electronics/lessons/04-03-cmos-inverter-gates.md) |
| Where the two voltage levels physically come from | [electronics 1.1](../electronics/lessons/01-01-semiconductors-carriers-doping.md) |
| Schmitt triggers and hysteresis (cleaning up a noisy input) | [electronics 3.5](../electronics/lessons/03-05-comparators-schmitt-triggers.md) |
| ADC/DAC conversion and quantization | [electronics 4.4](../electronics/lessons/04-04-adc-dac.md) |
| Voltage, current, and Kirchhoff's laws | [circuits 1.1](../circuits/lessons/01-01-charge-current-voltage-power.md), [1.3](../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md) |
| RC transients (behind propagation delay) | [circuits 3.2](../circuits/lessons/03-02-first-order-rc-rl-transients.md) |
| Sampling and the Nyquist rate | [signals-systems 3.1](../signals-systems/lessons/03-01-sampling-nyquist-shannon.md) |
| Difference equations and direct-form realizations | [signals-systems 4.3](../signals-systems/lessons/04-03-difference-equations-realizations.md) |

## Pitfalls

### Numbers

- Group binary into hex nibbles **from the right** — only $2^0$ is anchored. *([1.1](lessons/01-01-number-systems-and-bases.md))*
- Repeated division peels off the **least** significant bit first; read remainders bottom-to-top. *([1.1](lessons/01-01-number-systems-and-bases.md))*
- 8 bits give 256 **patterns** but a maximum of **255** — zero takes one. *([1.1](lessons/01-01-number-systems-and-bases.md))*
- Overflow means the **sign is wrong**, not "the number was too big" — $(-100)+(-100)$ overflows into a *positive* 56. *([1.2](lessons/01-02-signed-numbers-twos-complement.md))*
- A carry out is not an error — $-1+1$ raises carry and the signed answer is correct. *([1.2](lessons/01-02-signed-numbers-twos-complement.md), [2.3](lessons/02-03-arithmetic-circuits.md), [4.4](lessons/04-04-datapaths-and-a-simple-cpu.md))*
- Sign-extend signed values, zero-extend unsigned ones — both are right, for different types. *([1.2](lessons/01-02-signed-numbers-twos-complement.md))*

### Boolean algebra and canonical forms

- The bar does **not** distribute: De Morgan flips the operator as it passes through. *([1.3](lessons/01-03-boolean-algebra-logic-gates.md))*
- Duality swaps operators and leaves literals alone; complementation also complements the variables. *([1.3](lessons/01-03-boolean-algebra-logic-gates.md))*
- In Boolean algebra `1 + 1 = 1` — `+` means OR, there is no carry. Don't import arithmetic. *([1.3](lessons/01-03-boolean-algebra-logic-gates.md))*
- **The maxterm rule is inverted relative to the minterm rule** — row `101` gives minterm $A\overline{B}C$ but maxterm $\overline{A}+B+\overline{C}$. *([1.4](lessons/01-04-truth-tables-canonical-forms.md))*
- $\Sigma m$ and $\Pi M$ index lists describe the **same** function; they partition the rows. *([1.4](lessons/01-04-truth-tables-canonical-forms.md))*
- Fix the variable order — with $A$ as MSB, `110` is row 6; switch conventions and every index changes. *([1.4](lessons/01-04-truth-tables-canonical-forms.md))*

### Minimization

- Gray-code labels `00, 01, 11, 10`. Write `00, 01, 10, 11` and every loop is meaningless while still *looking* right. *([2.1](lessons/02-01-karnaugh-maps.md))*
- The map is a **torus** — edges wrap and the four corners form one group. *([2.1](lessons/02-01-karnaugh-maps.md))*
- Greedy loop-grabbing can miss the minimum. Take essentials first. *([2.1](lessons/02-01-karnaugh-maps.md))*
- **Always re-expand your answer to minterms and compare sets.** *([2.1](lessons/02-01-karnaugh-maps.md))*
- A don't-care is a promise the **input cannot occur** — not run-time freedom. Once you group, the output there is pinned. *([2.2](lessons/02-02-dont-cares-pos-quine-mccluskey.md), [4.2](lessons/04-02-counters.md))*
- Grouping the 0s gives $\overline{F}$ in SOP — you must still apply De Morgan, or you build the exact opposite circuit. *([2.2](lessons/02-02-dont-cares-pos-quine-mccluskey.md))*
- Minimal is correct only in **steady state**; touching-but-not-overlapping groups glitch. *([2.2](lessons/02-02-dont-cares-pos-quine-mccluskey.md))*

### Combinational blocks

- Carry-out is not overflow: $C_n$ is the unsigned flag, $C_n \oplus C_{n-1}$ the signed one. *([2.3](lessons/02-03-arithmetic-circuits.md), [2.5](lessons/02-05-building-a-simple-alu.md))*
- Magnitude comparison is a **priority scan from the MSB**, not a bit count — `1000` > `0111`. *([2.3](lessons/02-03-arithmetic-circuits.md))*
- Always state your gate-delay convention before quoting a number. *([2.3](lessons/02-03-arithmetic-circuits.md))*
- A half adder has no $C_{in}$, so it can only sit at bit 0. *([2.3](lessons/02-03-arithmetic-circuits.md))*
- With active-low signalling, a wire reading 0 is the **asserted** one. *([2.4](lessons/02-04-decoders-encoders-multiplexers.md))*
- An encoder only inverts a decoder on the $2^n$ codes a decoder can produce; two simultaneous 1s give a bogus third code. *([2.4](lessons/02-04-decoders-encoders-multiplexers.md))*
- The mux data assignment depends on **which** variables you put on the selects. *([2.4](lessons/02-04-decoders-encoders-multiplexers.md))*
- The ALU cannot know whether operands are signed — it computes C and V unconditionally and you choose. *([2.5](lessons/02-05-building-a-simple-alu.md))*
- ALU delay scales with the **length of the carry chain**, not gate width. *([2.5](lessons/02-05-building-a-simple-alu.md))*

### Sequential logic

- $S{=}R{=}1$ is forbidden not because the outputs are undefined but because $\overline{Q}$ stops complementing $Q$ and the exit is a race. *([3.1](lessons/03-01-latches-storage-of-one-bit.md))*
- A gated D latch does **not** sample on the enable's rise — it tracks throughout, and keeps the value at the enable's **fall**. *([3.1](lessons/03-01-latches-storage-of-one-bit.md))*
- Don't carry the NOR latch's table over to a NAND latch — the inputs are active-low and the forbidden case flips. *([3.1](lessons/03-01-latches-storage-of-one-bit.md))*
- **A hold violation cannot be fixed by slowing the clock** — $T_{clk}$ isn't in the inequality. *([3.2](lessons/03-02-flip-flops-and-clocking.md))*
- `X` in an excitation table means "your choice", not 0 — treating JK's X's as zeros throws away the minimization freedom. *([3.2](lessons/03-02-flip-flops-and-clocking.md))*
- $Q$ changes $t_{cq}$ **after** the edge, not at it — that delay is exactly why a shift register works. *([3.2](lessons/03-02-flip-flops-and-clocking.md))*
- The next-state entry equals the flip-flop's input equation **only for D** — JK must go through its characteristic equation. *([3.3](lessons/03-03-analysis-of-synchronous-circuits.md))*
- A Mealy label `1/1` means the output holds for the whole cycle the machine sits in that state with that input — not "at the transition". *([3.3](lessons/03-03-analysis-of-synchronous-circuits.md))*
- Mealy and Moore versions of one spec differ by **one cycle** in when they report. *([3.3](lessons/03-03-analysis-of-synchronous-circuits.md))*
- After completing an overlapping pattern you do **not** start over — keep the longest suffix that is also a prefix. *([3.4](lessons/03-04-design-of-finite-state-machines.md))*
- A Moore output arrives one clock **after** the completing bit. State your trace convention. *([3.4](lessons/03-04-design-of-finite-state-machines.md))*
- Unused state codes are not harmless — a sequential don't-care can let the machine **stay** in a bad state. *([3.4](lessons/03-04-design-of-finite-state-machines.md), [4.2](lessons/04-02-counters.md), [3.3](lessons/03-03-analysis-of-synchronous-circuits.md))*

### Registers, counters, memory, CPU

- Never gate the clock to make an enable — gate the **data** with a mux. *([4.1](lessons/04-01-registers-and-shift-registers.md))*
- A right shift halves only under the right interpretation: logical for unsigned, arithmetic for signed. *([4.1](lessons/04-01-registers-and-shift-registers.md))*
- Ring and Johnson counters do **not** self-correct — their unused states form closed loops. *([4.1](lessons/04-01-registers-and-shift-registers.md))*
- A ripple counter's transient codes aren't wrong at the sampling edge — the bug is in whatever decodes it asynchronously. *([4.2](lessons/04-02-counters.md))*
- Cascading moduli **multiply** ($10\times6=60$); flip-flop counts add. *([4.2](lessons/04-02-counters.md))*
- "4K × 16" is 4096 words of 16 bits = 8 KiB — K is 1024, and word width multiplies. *([4.3](lessons/04-03-memory-and-programmable-logic.md))*
- A $2^n$-word memory has **$n$** address lines; $2^n$ is the decoder's output count. *([4.3](lessons/04-03-memory-and-programmable-logic.md))*
- A complicated function does not make a ROM slower — but a PLA still pays for minimization. *([4.3](lessons/04-03-memory-and-programmable-logic.md))*
- $R1 \leftarrow R2$ does not mean "copy now" — the right side has been settling since the last edge and the left latches at the next one, so a same-cycle swap is legal. *([4.4](lessons/04-04-datapaths-and-a-simple-cpu.md))*
- One instruction is not one cycle — a multi-cycle control FSM simply visits more states for harder instructions. *([4.4](lessons/04-04-datapaths-and-a-simple-cpu.md))*
