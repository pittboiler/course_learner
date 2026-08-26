# Digital Logic Design · Lesson 4.3: Memory and programmable logic

> ⏱ ~15 min · Module 4: Registers, memory, and datapaths · Builds on: [2.4 Decoders, encoders, and multiplexers](02-04-decoders-encoders-multiplexers.md), [3.1 Latches and the storage of one bit](03-01-latches-storage-of-one-bit.md), [4.1 Registers and shift registers](04-01-registers-and-shift-registers.md) · Unlocks: [4.4 Datapaths and a simple CPU](04-04-datapaths-and-a-simple-cpu.md)

## Why this matters

A register ([4.1](04-01-registers-and-shift-registers.md)) holds eight or sixteen bits and gives you a wire for every one of them. That does not scale: a million bits would need a million output pins. Memory is the answer — an array you talk to through a *name* (an address) instead of through a wire per bit. Get the sizing arithmetic reflexive and you can read any datasheet, budget any chip, and wire up [4.4](04-04-datapaths-and-a-simple-cpu.md)'s instruction memory without hesitating.

Then comes the twist that makes this lesson more than bookkeeping. A memory is indexed by its address — and a truth table is indexed by its inputs. Those are the same operation. So a ROM doesn't just *store* data; it can *compute*, by storing the answer to every possible question. All of Module 2's minimization work becomes optional the moment you're willing to buy enough silicon.

## The idea

**A memory is a filing cabinet with a very fast clerk.** The cabinet has $2^n$ drawers; each drawer holds a fixed-size slip of paper with $m$ bits on it. You don't reach into the cabinet — you hand the clerk a drawer *number* and he hands back that slip. The number is the **address**, the slip is the **word**, and the clerk is a decoder ([2.4](02-04-decoders-encoders-multiplexers.md)): given $n$ address bits it raises exactly one of $2^n$ word lines. That decoder is the entire reason memory is *random access* — drawer 900,000 costs exactly as much to reach as drawer 3.

**Now stare at the cabinet sideways.** Write a truth table for a function of $n$ inputs with $m$ outputs. It has $2^n$ rows and $m$ columns. Load that table into the cabinet, wire the function's inputs to the address lines, and read the outputs off the data lines. The chip now computes your function — and you never drew a K-map, never found a prime implicant, never chose a gate. You paid silicon instead of thought. That is the ROM lookup table, and it is the cleanest time-for-space trade in all of hardware.

**Between "hard-wired gates" and "a full lookup table" there is a middle.** A ROM builds *every* one of the $2^n$ minterms whether your function needs them or not. But a real function usually needs a handful of product terms. A **PLA** builds only the product terms you ask for — it is a sum-of-products expression ([1.4](01-04-truth-tables-canonical-forms.md)) rendered directly as programmable hardware. Three structures, one design space, and the only thing that varies is which half is programmable.

## The formal version

### Sizing: the arithmetic that must never be shaky

A memory organized as $2^n$ **words** of $m$ **bits** each requires

$$\boxed{\;n \ \text{address lines},\qquad m \ \text{data lines},\qquad 2^n \times m \ \text{bits stored}\;}$$

*In words: the address lines count the log of the number of words, the data lines count the width of one word, and the capacity is their product.* Note the asymmetry — address is **logarithmic** in the number of words, data is **linear** in the word width. Doubling the depth costs one wire; doubling the width costs $m$ wires.

**Boss problem 4(a), worked.** A data memory is organized as 4K × 16 bits. Here "4K" is $4 \times 1024 = 4096$ words, and $4096 = 2^{12}$, so $n = 12$. The word is 16 bits wide, so $m = 16$.

$$n = 12 \ \text{address lines}, \qquad m = 16 \ \text{data lines}, \qquad 4096 \times 16 = 65{,}536 \ \text{bits}.$$

*Verify two ways.* Direct multiplication: $4096 \times 16 = 4096 \times 10 + 4096 \times 6 = 40{,}960 + 24{,}576 = 65{,}536$ ✓. In powers of two: $2^{12} \times 2^4 = 2^{16} = 65{,}536$ ✓.

In bytes that is $65{,}536 / 8 = 8192$ bytes $= 8$ KiB. Careful here — this is exactly the caveat from [1.1](01-01-number-systems-and-bases.md): a memory designer's "K" is $1024$, not $1000$, so a 4K × 16 chip is 8 **KiB**, and calling it "8 KB" invites a disk-vendor argument. In this course K, M, G always mean $2^{10}$, $2^{20}$, $2^{30}$.

Common organizations, worth knowing on sight:

| organization | words | address lines $n$ | data lines $m$ | total bits | in bytes |
|---|---|---|---|---|---|
| 256 × 8 | $2^{8}$ | 8 | 8 | 2,048 | 256 B |
| 1K × 4 | $2^{10}$ | 10 | 4 | 4,096 | 512 B |
| 4K × 16 | $2^{12}$ | 12 | 16 | 65,536 | 8 KiB |
| 64K × 8 | $2^{16}$ | 16 | 8 | 524,288 | 64 KiB |
| 1M × 32 | $2^{20}$ | 20 | 32 | 33,554,432 | 4 MiB |

Run the arithmetic backwards just as fluently: a chip with 14 address pins and 8 data pins is $2^{14} \times 8 = 16\text{K} \times 8 = 131{,}072$ bits $= 16$ KiB.

### Inside: a decoder and an array

Feed the $n$ address bits into an $n$-to-$2^n$ decoder ([2.4](02-04-decoders-encoders-multiplexers.md)). Exactly one of its $2^n$ outputs goes high; that output is the **word line** for one row of storage cells, and it connects that row's $m$ cells to the $m$ data lines. Everything else stays disconnected. *In words: the decoder turns a compact binary name into a single selected row — that is what "random access" means, and there is no other mechanism doing it.*

One practical wrinkle: a flat decoder for a big memory is absurd. A 1M × 1 chip would need a 20-to-1,048,576 decoder — over a million gate outputs strung along one edge of the die. Real chips instead fold the array into a square and split the address in half: 10 bits pick a **row** and 10 bits pick a **column**, so two 10-to-1024 decoders (2048 outputs total, not a million) do the job. That row/column split is also why DRAM datasheets talk about row-address and column-address strobes.

### ROM as a lookup table

A **ROM** (read-only memory) with $n$ address lines and $m$ data lines stores $2^n$ words of $m$ bits — which is to say it stores *an arbitrary truth table with $n$ inputs and $m$ outputs*. Wire your function's variables to the address pins and its contents become the function.

$$\text{any combinational } F:\{0,1\}^n \to \{0,1\}^m \quad\Longleftrightarrow\quad \text{a } 2^n \times m \ \text{ROM}.$$

*In words: for combinational logic, "store the answer" and "compute the answer" are interchangeable.*

Compare with Module 2. A gate realization required you to plot a K-map ([2.1](02-01-karnaugh-maps.md)), find prime implicants, and pick a cover, and the resulting delay depended on how ugly the function was. The ROM requires none of that, and its delay is **fixed** — decode, then sense — no matter whether the stored table is a trivial function or a cryptographic S-box. You trade design effort and area for indifference to complexity.

**Concrete: a BCD-to-seven-segment decoder.** Four inputs (a decimal digit `0000`–`1001`), seven outputs (segments a–g, with 1 = lit; segment a is the top bar, g the middle bar). As a gate design this is seven separate K-maps. As a ROM it is a 16 × 7 table you simply type in — $16 \times 7 = 112$ bits:

| address `A3A2A1A0` | digit | stored word `abcdefg` |
|---|---|---|
| `0000` | 0 | `1111110` |
| `0001` | 1 | `0110000` |
| `0010` | 2 | `1101101` |
| `0011` | 3 | `1111001` |
| `0100` | 4 | `0110011` |
| `0101` | 5 | `1011011` |
| `0110` | 6 | `1011111` |
| `0111` | 7 | `1110000` |
| `1000` | 8 | `1111111` |
| `1001` | 9 | `1111011` |
| `1010`–`1111` | — | `0000000` (blank) |

Notice what happened to the don't-cares of [2.2](02-02-dont-cares-pos-quine-mccluskey.md): addresses `1010`–`1111` are never applied, so their contents are free. A gate designer exploits that freedom to shrink the circuit; a ROM designer just picks something (blank) and moves on. The ROM costs 112 bits either way.

**The honest limitation.** Capacity is $2^n m$, and $2^n$ is merciless. A 32-bit adder has 64 input bits, so a ROM lookup would need $2^{64} \approx 1.8 \times 10^{19}$ words — more storage than exists on Earth — while the ripple-carry adder of [2.3](02-03-arithmetic-circuits.md) is a couple hundred gates. **ROM lookup is excellent for small $n$ and hopeless for large $n$**, and there is no middle ground: each extra input doubles the chip.

### RAM: the same array, but writable

A **RAM** (random-access memory) adds writing. Its interface:

| signal | width | role |
|---|---|---|
| address | $n$ | which word |
| data | $m$ | the word in or out (usually one bidirectional bus) |
| $\overline{CS}$ | 1 | chip select / enable — active low, per this course's overbar convention |
| $\overline{WE}$ | 1 | write enable: asserted → write the data bus into the addressed word; deasserted → read |
| $\overline{OE}$ | 1 | output enable — lets the chip drive the shared data bus (often optional) |

*In words: put an address on the pins, then either let the chip drive the data bus (read) or drive it yourself and pulse write enable (write).* The enable lines exist because many chips share one bus, and exactly one may drive it at a time — you will use that fact in P3.

Two cell technologies, and the difference decides where each is used:

| | SRAM | DRAM |
|---|---|---|
| cell | cross-coupled inverter pair plus 2 access transistors (6 transistors) | 1 transistor plus 1 capacitor |
| stores by | active feedback — the bistable loop of [3.1](03-01-latches-storage-of-one-bit.md) | charge parked on a capacitor |
| refresh | none; holds while powered | required — charge leaks, so every row is re-read and re-written every few ms |
| read | non-destructive | destructive; the sensed row must be written back |
| speed | fast (about 1 ns access on-chip) | slower (tens of ns) |
| density / cost per bit | low / expensive | high / cheap |
| typical use | caches, register files, small on-chip buffers | main memory |

The SRAM cell is genuinely the latch of [3.1](03-01-latches-storage-of-one-bit.md): two inverters mouth-to-tail, each holding the other's state. It never forgets because it is actively fighting to remember. The DRAM cell forgets constantly and is repeatedly reminded. (Why the capacitor leaks, and what six transistors cost, is transistor-level physics — the electronics course covers it in [`electronics` 4.3](../../electronics/lessons/04-03-cmos-inverter-gates.md); here we only need the trade.)

**Both are volatile**: cut the power and SRAM's feedback loop collapses and DRAM's charge drains. ROM survives, which is why boot code lives there. The modern reconciliation is **flash**: charge trapped on an isolated floating gate keeps a bit for years with no power, and can be electrically erased and rewritten — slowly, in large blocks, a limited number of times. That is your SSD and your firmware.

### Programmable logic: which plane is programmable?

Any sum-of-products expression has exactly two levels: AND the literals into product terms, then OR the product terms into outputs ([1.4](01-04-truth-tables-canonical-forms.md)). Programmable logic makes that structure physical.

- The $n$ inputs enter as $2n$ vertical lines — each variable and its complement $\overline{A}$.
- The **AND plane** is a grid of horizontal rows crossing those verticals. A row with connections at some subset of the crossings is an AND gate over those literals: one **product term**.
- The **OR plane** is a second grid: each output column connects to whichever product-term rows belong in its sum.

A "programmable" plane just means those crossings are fuses, antifuses, or memory cells you choose, rather than metal the fab drew.

| structure | AND plane | OR plane | product terms | what you must do | area |
|---|---|---|---|---|---|
| **ROM** | **fixed** — a full decoder, generating all $2^n$ minterms | **programmable** | all $2^n$, always | nothing: store the truth table | grows as $2^n$ |
| **PLA** | **programmable** | **programmable** | $p$, chosen; **shareable across outputs** | minimize, and share terms between outputs | grows as $p$ |
| **PAL** | **programmable** | **fixed** — a fixed set of rows feeds each output | $p$, hard-partitioned per output | minimize each output separately; no sharing | smallest, fastest |

That table is the whole idea: **ROM, PLA, and PAL are three points on one axis, differing only in which plane you get to program.** The ROM's fixed AND plane is exactly why it needs no minimization (every minterm is already there for the taking) and exactly why it costs $2^n$ (every minterm is built whether wanted or not). The PAL's fixed OR plane is why it is cheap and fast and why a design needing five product terms on an output with only four rows simply does not fit.

**Sharing, made concrete.** Take

$$F_1 = AB + \overline{A}C, \qquad F_2 = AB + B\overline{C},$$

with $A$ the most significant variable. Expanding to minterms: $AB$ covers $m_6, m_7$; $\overline{A}C$ covers $m_1, m_3$; $B\overline{C}$ covers $m_2, m_6$. So $F_1 = \Sigma m(1,3,6,7)$ and $F_2 = \Sigma m(2,6,7)$.

A PLA needs only **three** product-term rows — $AB$, $\overline{A}C$, $B\overline{C}$ — because $AB$ is wired into *both* output columns. A PAL, whose OR gates are hard-partitioned, must build $AB$ twice, once in each output's private group: four rows. A ROM needs all eight minterm rows, and stores $8 \times 2 = 16$ bits.

**And the modern descendant.** An **FPGA** is an array of thousands of tiny lookup tables — each literally a small ROM, typically 4 to 6 inputs — paired with flip-flops and stitched together by a programmable interconnect. Because both the tables and the wiring are just configuration bits, a hardware description can be *compiled* into working silicon in minutes instead of fabricated in months. Building real processors on that fabric is where the computer architecture course ([syllabus](../../computer-architecture/syllabus.md)) picks up.

## Picture

![Two side-by-side panels. On the left a PLA with six vertical input lines for A, A-bar, B, B-bar, C and C-bar, three horizontal product-term rows feeding AND gates, and two vertical output columns feeding OR gates, with coral dots marking programmed crossings. On the right the same two functions in a ROM: a 3-to-8 decoder box driving eight horizontal minterm word lines, crossed by two programmable output columns with dots at the selected minterms.](assets/04-03-fig1.svg)

Both panels compute $F_1 = \Sigma m(1,3,6,7)$ and $F_2 = \Sigma m(2,6,7)$. The right panel is also a picture of a memory: decoder in, word lines across, selected bits out.

## Worked examples

**Example 1 (mechanical — a ROM that does arithmetic).** Build a 4-bit squarer: input $x \in \{0,\ldots,15\}$, output $x^2$.

Size it first. Four inputs → $n = 4$ → 16 words. The largest output is $15^2 = 225$, and $225 \le 255 = 2^8 - 1$, so 8 data lines suffice (7 would cap at 127 — too small). Capacity: $16 \times 8 = 128$ bits.

Now just fill the table. A few rows, with the binary checked by positional sum ([1.1](01-01-number-systems-and-bases.md)):

| address | $x$ | $x^2$ | stored word |
|---|---|---|---|
| `0101` | 5 | 25 | `00011001` |
| `1001` | 9 | 81 | `01010001` |
| `1101` | 13 | 169 | `10101001` |
| `1111` | 15 | 225 | `11100001` |

*Check.* `00011001` $= 16+8+1 = 25$ ✓; `01010001` $= 64+16+1 = 81$ ✓; `10101001` $= 128+32+8+1 = 169$ ✓; `11100001` $= 128+64+32+1 = 225$ ✓.

No multiplier was designed, no carry chain analyzed, and access takes one decode. Now push $x$ to 16 bits: $n = 16$, output width 32, capacity $65{,}536 \times 32 = 2{,}097{,}152$ bits (2 Mib) — still buildable. At 32 bits in, it is $2^{32}$ words of 64 bits, or 34 gigabytes. The wall arrives fast.

**Example 2 (why you'd care — why your cache is SRAM and your DIMM is not).** Suppose you wanted 1 GiB of main memory built from SRAM cells. That is $2^{30}$ bytes $= 2^{33} = 8{,}589{,}934{,}592$ bits, and at 6 transistors per cell,

$$6 \times 8{,}589{,}934{,}592 \approx 5.15 \times 10^{10} \ \text{transistors}$$

just for storage — comparable to a whole high-end CPU, for one memory module. In DRAM the same gigabyte is about $8.6 \times 10^{9}$ transistors plus $8.6 \times 10^{9}$ tiny capacitors, roughly a sixth of the area. That ratio is the entire reason main memory is DRAM.

What does the refresh cost? A typical DRAM must refresh every row within 64 ms, and a bank has on the order of 8192 rows, so one row must be refreshed every

$$\frac{64 \ \text{ms}}{8192} = 7.8125 \ \mu\text{s}.$$

If a refresh occupies the array for about 50 ns, the fraction of time stolen is $50\ \text{ns} / 7.8125\ \mu\text{s} \approx 0.0064$ — under 1 percent of the bandwidth. So the trade is: give up a sixth-of-the-area advantage, or pay under 1 percent throughput plus a refresh controller. Everyone pays the 1 percent. Caches, meanwhile, sit in the CPU's critical path where the 1 ns access of SRAM is worth its area many times over.

## Watch out

- **You might think "4K" means 4000, or that a 4K × 16 chip is "4 KB".** It is $4096$ words of 16 bits — 65,536 bits, 8192 bytes, **8 KiB**. Two separate traps in one phrase: K is 1024, and the word width multiplies the byte count. Convert to bits first, then divide by 8 at the very end.
- **You might give a $2^n$-word memory $2^n$ address lines.** It has **$n$**. The thing with $2^n$ of something is the *decoder's outputs*, not the address bus — that is precisely the compression a decoder buys you. Sanity check: 20 address lines reach a million words, and no chip on earth has a million address pins.
- **You might think a complicated function makes a ROM slower.** It cannot. ROM delay is decode plus sense, identical for every stored table; what a complicated function costs in a ROM is nothing at all, because the price ($2^n m$ bits) was already paid up front by the *input count* alone. Gate networks are the opposite: cheap for simple functions, slow and large for ugly ones.
- **You might think a PLA also frees you from minimization.** Only ROM does. A PLA's cost is its number of product-term rows, so K-maps and Quine–McCluskey ([2.2](02-02-dont-cares-pos-quine-mccluskey.md)) still pay — and in a PLA they pay *twice*, since a term shared between two outputs is a row you don't have to buy.

## One-liner

> A memory is a decoder plus an array — $n$ address lines reach $2^n$ words of $m$ bits — and once you notice that addressing a word and indexing a truth table are the same act, ROM, PLA, and PAL become one design space that differs only in which plane you get to program.

## Problems

**P1 (🟢)** (a) A cache is organized as 8K × 32 bits. Give its number of address lines, number of data lines, total bits, and total size in KiB. (b) A different chip has 14 address pins and 8 data pins. State its organization in the "words × bits" form and its capacity in KiB.

**P2 (🟡)** Two functions of $A, B, C$ (with $A$ most significant): $F_1 = \Sigma m(3,4,5,7)$ and $F_2 = \Sigma m(0,2,4,5)$.
(a) Give the size in bits of the smallest ROM implementing **both**, and write out its stored contents.
(b) Find the minimal sum-of-products for each.
(c) How many product-term rows does a PLA need for both outputs, exploiting sharing? How many would a PAL need?

**P3 (🔴)** You have 1K × 8 SRAM chips and must build a 4K × 8 memory system.
(a) How many chips? (b) How many address lines does the system need, and how are they divided between the chips' address pins and the selection logic? (c) What logic generates the chip-select signals? (d) Separately: how would you instead wire two of these chips into a 1K × 16 memory?

<details>
<summary>Solutions</summary>

**P1**

(a) $8\text{K} = 8 \times 1024 = 8192 = 2^{13}$, so **13 address lines**. The word is 32 bits wide, so **32 data lines**.

$$\text{bits} = 8192 \times 32 = 262{,}144.$$

*Check in powers of two:* $2^{13} \times 2^{5} = 2^{18} = 262{,}144$ ✓. In bytes: $262{,}144 / 8 = 32{,}768$ bytes $= 32{,}768/1024 = $ **32 KiB** ✓.

(b) 14 address pins → $2^{14} = 16{,}384 = 16$K words; 8 data pins → 8-bit words. So it is a **16K × 8** memory, holding $16{,}384 \times 8 = 131{,}072$ bits $= 16{,}384$ bytes $=$ **16 KiB**.
*Check:* $2^{14} \times 2^3 = 2^{17} = 131{,}072$ ✓, and $131{,}072/8 = 16{,}384 = 16 \times 1024$ ✓.

**P2**

(a) Three inputs → 3 address lines → $2^3 = 8$ words; two outputs → 2 data lines. Smallest ROM is $8 \times 2 = $ **16 bits**. Contents (address = $ABC$ read as binary, $A$ most significant):

| address | $ABC$ | $F_1$ | $F_2$ |
|---|---|---|---|
| 0 | `000` | 0 | 1 |
| 1 | `001` | 0 | 0 |
| 2 | `010` | 0 | 1 |
| 3 | `011` | 1 | 0 |
| 4 | `100` | 1 | 1 |
| 5 | `101` | 1 | 1 |
| 6 | `110` | 0 | 0 |
| 7 | `111` | 1 | 0 |

*Check:* the $F_1$ column has 1s exactly at rows 3, 4, 5, 7 ✓ and the $F_2$ column exactly at 0, 2, 4, 5 ✓ — matching the given minterm lists.

(b) $F_1 = \Sigma m(3,4,5,7)$ = `011`, `100`, `101`, `111`. Adjacent pairs: $m_3,m_7$ differ only in $A$ → $BC$; $m_4,m_5$ differ only in $C$ → $A\overline{B}$; $m_5,m_7$ differ only in $B$ → $AC$. So the prime implicants are $BC$, $A\overline{B}$, $AC$. Now which are essential: $m_3$ appears only in $BC$, and $m_4$ appears only in $A\overline{B}$, so both are essential, and together they cover $\{3,7\} \cup \{4,5\} = \{3,4,5,7\}$ — everything. Hence

$$F_1 = BC + A\overline{B}.$$

$F_2 = \Sigma m(0,2,4,5)$ = `000`, `010`, `100`, `101`. Pairs: $m_0,m_2$ differ only in $B$ → $\overline{A}\,\overline{C}$; $m_0,m_4$ differ only in $A$ → $\overline{B}\,\overline{C}$; $m_4,m_5$ differ only in $C$ → $A\overline{B}$. $m_2$ appears only in $\overline{A}\,\overline{C}$ (essential) and $m_5$ only in $A\overline{B}$ (essential); together they cover $\{0,2\} \cup \{4,5\}$ — everything, so $\overline{B}\,\overline{C}$ is redundant:

$$F_2 = \overline{A}\,\overline{C} + A\overline{B}.$$

*Check by re-expanding to minterms.* $BC \to m_3, m_7$; $A\overline{B} \to m_4, m_5$; union $\{3,4,5,7\}$ ✓. $\overline{A}\,\overline{C} \to m_0, m_2$; $A\overline{B} \to m_4, m_5$; union $\{0,2,4,5\}$ ✓.

(c) The distinct product terms across both functions are $BC$, $A\overline{B}$, $\overline{A}\,\overline{C}$ — and $A\overline{B}$ is used by *both* outputs. A PLA can wire that one row into both OR columns, so it needs **3 product-term rows**. A PAL's OR plane is fixed and partitioned, so each output's terms live in its own private group and $A\overline{B}$ must be built twice: **4 rows** (2 per output). The PLA's saving here is one row out of four.

**P3**

(a) $4\text{K} \times 8$ from $1\text{K} \times 8$ pieces: the word width already matches, so you only need more depth. $4096 / 1024 = $ **4 chips**.

(b) $4\text{K} = 2^{12}$, so the system bus needs **12 address lines**, $A_{11}$ down to $A_0$. Each chip is $1\text{K} = 2^{10}$ deep and therefore has only 10 address pins. So split the address: the **low 10 bits** $A_9 \ldots A_0$ go to all four chips in parallel (they pick the word *within* a chip), and the **high 2 bits** $A_{11}A_{10}$ pick *which* chip. Two bits select four chips — $2^2 = 4$ ✓, which is exactly why the split lands there.

(c) A **2-to-4 decoder** ([2.4](02-04-decoders-encoders-multiplexers.md)) driven by $A_{11}A_{10}$, with its four outputs going to the four chips' $\overline{CS}$ pins (use a decoder with active-low outputs, or invert). Exactly one chip is selected at a time, so exactly one drives the shared 8-bit data bus and there is no contention. The resulting address map is: chip 0 holds addresses `0x000`–`0x3FF`, chip 1 `0x400`–`0x7FF`, chip 2 `0x800`–`0xBFF`, chip 3 `0xC00`–`0xFFF`. *Check:* $0x3FF = 1023$, so each block is 1024 words ✓, and four blocks give 4096 ✓.

(d) For 1K × 16 you need more *width*, not more depth — the opposite wiring. Use **2 chips**, give both the **same 10 address lines**, and enable **both at once** (their chip selects are tied together, not decoded). One chip supplies data bits $D_7 \ldots D_0$ and the other $D_{15} \ldots D_8$; concatenated, they present a 16-bit word. Depth stays 1024, so the address bus stays 10 lines wide.

*Sanity check on both:* total bits are the same either way — $4 \times (1024 \times 8) = 32{,}768$ bits for (a), and $2 \times (1024 \times 8) = 16{,}384$ bits for (d) — and in each case capacity equals words × width: $4096 \times 8 = 32{,}768$ ✓ and $1024 \times 16 = 16{,}384$ ✓.

</details>

## Flashback

**From Lesson 4.2 (Counters):** A synchronous **mod-12** up-counter built from D flip-flops counts `0` through `11` and then wraps to `0`. Call its outputs $Q_3 Q_2 Q_1 Q_0$, with $Q_3$ the most significant bit. (a) What is the minimum number of flip-flops, and how many states go unused? (b) The wrap is triggered by detecting the terminal count 11. Give the **smallest** AND gate that detects it, treating the unused states as don't-cares. (c) Starting from a reset at 0, what count does the counter show after 30 clock pulses?

<details>
<summary>Solution</summary>

**(a)** The counter must hold 12 distinct values, so it needs $\lceil \log_2 12 \rceil = 4$ flip-flops ($2^3 = 8 < 12 \le 16 = 2^4$). Four flip-flops offer 16 states, so $16 - 12 = 4$ states go unused — the patterns `1100`, `1101`, `1110`, `1111` (counts 12 through 15).

**(b)** Terminal count $11 =$ `1011`, i.e. $Q_3 = 1$, $Q_2 = 0$, $Q_1 = 1$, $Q_0 = 1$. A full decode is the 4-input AND $Q_3 \overline{Q_2} Q_1 Q_0$. But the counter never visits 12–15, so those four patterns are **don't-cares** ([2.2](02-02-dont-cares-pos-quine-mccluskey.md)), and the detect function is $\Sigma m(11) + d(12,13,14,15)$. Group $m_{11} =$ `1011` with the don't-care `1111`: they differ only in $Q_2$, so $Q_2$ drops out, giving the 3-input AND

$$\text{TC} = Q_3 Q_1 Q_0 .$$

Can the group grow to four cells? Pairing $\{11,15\}$ with $\{9,13\}$ would give $Q_3 Q_0$, but 9 = `1001` is a *real* state where the detect must be 0 — not allowed. Likewise $\{11,15,10,14\}$ gives $Q_3 Q_1$ but 10 = `1010` is real, and $\{11,15,3,7\}$ gives $Q_1 Q_0$ but 3 and 7 are real. So two cells is the largest legal group and $Q_3 Q_1 Q_0$ is minimal.

*Check by exhaustion over the reachable states.* $Q_3 = 1$ only for counts 8–11 (`1000`, `1001`, `1010`, `1011`); of those, $Q_1 Q_0 = 11$ only for `1011` = 11 ✓. No other reachable count asserts the gate.

**(c)** Counting is arithmetic mod 12, so after 30 pulses from 0 the count is $30 \bmod 12$. Since $30 = 2\times 12 + 6$, the counter reads **6** (`0110`).
*Check:* two full cycles of 12 return it to 0 at pulse 24, and six more pulses take it to 6 ✓.

Worth noticing in this lesson's light: those four unused states are the same free choice a ROM refuses to exploit. A gate designer spends them to shrink a 4-input AND into a 3-input one; a ROM lookup table would simply store *something* at addresses 12–15 and pay the full $2^n$ either way.

</details>

## Connections

- **Backward:** the decoder of [2.4](02-04-decoders-encoders-multiplexers.md) is the beating heart of every memory here — and the ROM's "fixed AND plane" is nothing but that decoder producing all $2^n$ minterms. The SRAM cell is the cross-coupled bistable of [3.1](03-01-latches-storage-of-one-bit.md), and the AND-OR plane structure is the canonical sum-of-products of [1.4](01-04-truth-tables-canonical-forms.md) drawn as silicon. The sizing arithmetic is the powers-of-two vocabulary from [1.1](01-01-number-systems-and-bases.md), including its K = 1024 caveat.
- **Forward:** [4.4](04-04-datapaths-and-a-simple-cpu.md) hangs a memory off the datapath — an instruction memory that is essentially a ROM and a data memory that is RAM — and its control FSM's next-state table is often stored in a ROM outright, which is what "microcode" means. Depth from there (caches, memory hierarchy, real DRAM timing) belongs to the computer architecture course ([syllabus](../../computer-architecture/syllabus.md)).
- **Sideways:** "store the answer instead of recomputing it" is precisely memoization and the time–space tradeoff from the algorithms course ([syllabus](../../algorithms/syllabus.md)) — a ROM is a hardware hash table with a perfect, zero-collision index. And a ROM used as a waveform table is exactly how a digital signal generator feeds a DAC ([`electronics` 4.4](../../electronics/lessons/04-04-adc-dac.md)): store one period of a sine, sweep the address, and the analog output follows.
