# Computer Architecture · Lesson 3.3: Pipelining and the pipelined datapath

> ⏱ ~15 min · Module 3: The processor · Builds on: [2.3 (floating point)](02-03-floating-point-ieee-754.md), [3.1 (the single-cycle datapath)](03-01-single-cycle-datapath.md) · Unlocks: 3.4 (data hazards), 3.5 (control hazards)

## Why this matters

[3.1](03-01-single-cycle-datapath.md) ended with a specific complaint: every instruction pays the cost of the slowest one, and the machine cannot afford to have a slow instruction at all. Pipelining is the fix, and it is the single most important microarchitectural idea in the course.

The gain is large — roughly a factor of five here — and it is bought without changing the ISA, the program, or the instruction count. It is also bought without making anything faster: **no instruction completes any sooner than it did before.** Understanding how throughput can improve fivefold while latency stays flat is the conceptual core of this lesson, and it is the same insight that governs assembly lines, laundry, and every deep pipeline in modern hardware.

## The idea

[3.1](03-01-single-cycle-datapath.md)'s datapath already had five distinct regions, and at any instant four of them were idle — an instruction in the ALU left the instruction memory, register file and data memory doing nothing.

Pipelining fills them. Put registers between the stages, and as soon as an instruction leaves IF, start the *next* one there. In steady state all five stages are busy on five different instructions.

The clock now only has to cover the **slowest single stage** rather than the whole path. If the 800 ps path divides into five roughly equal 200 ps stages, the clock period drops to 200 ps and one instruction completes every 200 ps instead of every 800.

Each individual instruction still takes five cycles — five stages at 200 ps is still 1000 ps, slightly *worse* than before because of the register overhead. **Latency got marginally worse; throughput improved fivefold.** For a program running billions of instructions, throughput is what matters.

## The formal version

**Pipeline registers.** Four sets of registers sit between the stages: IF/ID, ID/EX, EX/MEM, MEM/WB. At each clock edge, everything a stage computed is latched forward.

Each register carries three kinds of information:

1. **Data** — register values read, the immediate, the ALU result, the loaded word.
2. **Control signals** — the `RegWrite`, `MemWrite`, `MemToReg` values from [3.2](03-02-single-cycle-control.md). These are computed once in ID and then **travel with the instruction**, because an instruction in MEM needs its `MemWrite` value four stages after decode produced it.
3. **The destination register number** — `rd` must be carried to WB, since by then the instruction word itself is long gone.

That third item is easy to overlook and is a real bug source: the register file's write-address port must be driven by the `rd` of the instruction in **WB**, not the one currently in ID.

**Timing.** For $n$ instructions in a $k$-stage pipeline with no hazards:
$$\text{cycles} = k + (n-1) .$$
The first instruction takes $k$ cycles to fill the pipe; each subsequent one completes one cycle later.

$$\text{speedup} = \frac{n \cdot T_{\text{single}}}{(k+n-1)\cdot T_{\text{pipe}}} \ \xrightarrow{n\to\infty}\ \frac{T_{\text{single}}}{T_{\text{pipe}}} .$$

If the stages were perfectly balanced, $T_{\text{single}} = k\,T_{\text{pipe}}$ and the asymptotic speedup is exactly $k$. Two things spoil that in practice.

**Stages are never balanced.** The clock is set by the *longest* stage, so uneven division wastes the difference:

| Stage | delay |
|---|---|
| IF | 200 ps |
| ID | 100 ps |
| EX | 200 ps |
| MEM | 200 ps |
| WB | 100 ps |

$$T_{\text{single}} = 800\text{ ps}, \qquad T_{\text{pipe}} = \max = 200 \text{ ps}, \qquad \text{speedup} = \frac{800}{200} = 4 ,$$
not 5. The 100 ps stages waste half their cycle, exactly as `beq` wasted its cycle in the single-cycle design — the waste has been reduced, not eliminated.

**Pipeline registers cost time.** Each adds setup and propagation delay, perhaps 20 ps, so a realistic $T_{\text{pipe}} = 220$ ps. This is why pipelines cannot be made arbitrarily deep: past some point the register overhead dominates the useful work in each stage.

**Deeper pipelines.** More stages mean a shorter clock period and a higher frequency — the argument that drove designs to 20 and even 31 stages in the early 2000s. Three costs bound it:

- register overhead becomes a larger fraction of each stage;
- the branch misprediction penalty grows with depth ([3.5](03-05-control-hazards-and-branch-prediction.md)), since more instructions are in flight to discard;
- power grows roughly with frequency.

The industry retreated from very deep pipelines around 2005 for exactly these reasons, settling near 14–20 stages.

**What can go wrong: hazards.** Overlapping execution creates three new problems that the single-cycle design could not have.

| Hazard | Cause | Treated in |
|---|---|---|
| **structural** | two instructions need the same hardware in the same cycle | this lesson |
| **data** | an instruction needs a result not yet written back | [3.4](03-04-data-hazards-forwarding-stalls.md) |
| **control** | the next instruction to fetch depends on an unresolved branch | [3.5](03-05-control-hazards-and-branch-prediction.md) |

**Structural hazards are designed away.** In cycle 4 of a running pipeline, one instruction is in MEM (accessing data memory) while another is in IF (fetching). Separate instruction and data memories make this fine — the same split [3.1](03-01-single-cycle-datapath.md) already needed, now doing double duty. Similarly, the register file is read in ID and written in WB in the same cycle, which is resolved by **writing in the first half of the cycle and reading in the second**. That convention is assumed throughout Module 3 and quietly eliminates a whole class of hazards.

## Picture

![A space-time chart with cycles across the top and five instructions down the side, each instruction's five stages drawn as a diagonal band so that at cycle five all five stages are occupied by different instructions, with a vertical marker highlighting that moment](assets/03-03-fig1.svg)

Read a **column** to see what the hardware is doing at one instant: at cycle 5, five different instructions occupy five different stages. Read a **row** to see one instruction's life: still five cycles, start to finish, exactly as before. The diagonal is the whole idea — throughput comes from the columns, latency lives in the rows.

## Worked examples

**Example 1 (mechanical): cycles and speedup.** A 5-stage pipeline runs 1000 instructions with no hazards. Single-cycle time is 800 ps; pipelined cycle time is 200 ps.

*Cycles:*
$$k + (n-1) = 5 + 999 = 1004 .$$

*Time:*
$$\text{pipelined} = 1004 \times 200 = 200800 \text{ ps} , \qquad \text{single-cycle} = 1000\times 800 = 800000 \text{ ps} .$$

$$\text{speedup} = \frac{800000}{200800} = \boxed{3.98\times}$$

Just under the ideal 4 because of the four cycles spent filling the pipeline. With $n = 10$ instructions the fill cost dominates: $5+9 = 14$ cycles against 10 single-cycle, giving $8000/2800 = 2.86\times$. **Pipelining rewards long instruction streams**, which is exactly what real programs are.

**Example 2 (why you'd care): pipelining rescues the slow instruction.** [3.1](03-01-single-cycle-datapath.md) P3 showed a single-cycle machine cannot afford a 1000 ps instruction — adding one slowed *every* instruction by 25 percent, and the program got 18.75 percent slower despite executing fewer instructions.

Now add a multi-cycle multiply to a **pipelined** machine. Suppose `mul` needs 600 ps of computation against the ALU's 200. Rather than stretching the clock, give it its own functional unit spanning **three EX cycles**:

```
mul   IF ID EX EX EX MEM WB
add      IF ID EX  --  --  ...      (independent, proceeds behind it)
```

The clock stays at 200 ps. The multiply takes three cycles in EX instead of one, so its *latency* is 7 cycles rather than 5 — but every other instruction is unaffected, and if the multiplier is itself pipelined, a new multiply can start every cycle.

**This is the structural reason real ISAs can afford multiply, divide and floating point at all.** The single-cycle machine's clock was global, so one slow operation taxed everything; the pipelined machine's clock is set by the slowest *stage*, so a slow operation can be given extra cycles locally. That is why [2.2](02-02-multiplication-and-division.md)'s 20-to-40-cycle divide and [2.3](02-03-floating-point-ieee-754.md)'s multi-cycle floating point are practical.

It is also why the cost model changes. In a single-cycle machine, cost is a *delay* charged to everyone. In a pipelined machine, cost is a *latency* charged to dependent instructions only — which is why [3.4](03-04-data-hazards-forwarding-stalls.md)'s question, "who is waiting on this result?", becomes the central performance question from here on.

## Watch out

- **You might think** pipelining makes instructions execute faster — **but actually** each instruction takes the same number of stages and slightly *more* wall-clock time, because of register overhead. Only throughput improves. Confusing latency with throughput is the most common error in this material.
- **You might think** a $k$-stage pipeline gives a $k\times$ speedup — **but actually** you get $T_{\text{single}}/T_{\text{longest stage}}$, which equals $k$ only if the stages are perfectly balanced. Uneven stages waste the difference in every cycle, and register overhead takes more.
- **You might think** deeper is always better — **but actually** register overhead, the growing branch penalty, and power all bound the depth. The 31-stage Pentium 4 was the industry's experiment in going too far, and its successors were shallower.

## One-liner

> Put registers between the stages and start a new instruction every cycle: the clock now covers the slowest *stage* rather than the whole path, so throughput rises by roughly the number of stages while each instruction's latency stays the same or slightly worse.

## Problems

**P1 (🟢)** A 5-stage pipeline with a 250 ps cycle time executes 500 instructions with no hazards. Give the total cycles, the total time, and the speedup over a single-cycle machine with a 1100 ps cycle. How many instructions would be needed to reach 95 percent of the asymptotic speedup?

**P2 (🟡)** A datapath divides into stages of 180, 90, 200, 190 and 110 ps. (a) Give the single-cycle time and the pipelined cycle time, ignoring register overhead, and the asymptotic speedup. (b) Add 25 ps of register overhead per stage and recompute. (c) Which stage should be optimised first, and what is the most the clock could improve if it were made instantaneous?

**P3 (🔴, optional)** A design team proposes splitting the 200 ps MEM stage into two 100 ps stages, making a 6-stage pipeline. (a) Give the new cycle time with 20 ps register overhead, assuming the other stages are 200, 100, 200, 100 ps. (b) Give the throughput improvement over the 5-stage version. (c) The branch penalty rises from 2 to 3 cycles and 20 percent of instructions are branches with a 10 percent misprediction rate. Compute whether the change is a net win.

<details>
<summary>Solutions</summary>

**P1** *Cycles:*
$$k + (n-1) = 5 + 499 = \boxed{504}$$

*Time:*
$$504 \times 250 = \boxed{126000 \text{ ps}} = 126 \text{ ns} .$$

*Single-cycle comparison:*
$$500 \times 1100 = 550000 \text{ ps} , \qquad \text{speedup} = \frac{550000}{126000} = \boxed{4.37\times}$$

*Asymptotic speedup* is $1100/250 = 4.4\times$, so 500 instructions already achieves $4.37/4.4 = 99.3$ percent of it.

*Instructions for 95 percent.* We need
$$\frac{n \times 1100}{(n+4)\times 250} \ \ge\ 0.95 \times 4.4 = 4.18 .$$
Simplifying, $\frac{4.4n}{n+4} \ge 4.18$, so $4.4n \ge 4.18n + 16.72$, giving $0.22n \ge 16.72$ and
$$n \ge \boxed{76 \text{ instructions}} .$$

The fill cost is amortised remarkably quickly — under a hundred instructions gets you to 95 percent, and real programs run billions. This is why the $k + (n-1)$ correction is usually ignored in back-of-envelope work and why the asymptotic figure is the one quoted.

**P2** *(a) Without register overhead.*
$$T_{\text{single}} = 180+90+200+190+110 = 770 \text{ ps}$$
$$T_{\text{pipe}} = \max(180,90,200,190,110) = 200 \text{ ps}$$
$$\text{speedup} = \frac{770}{200} = \boxed{3.85\times}$$

Short of the ideal 5 because the stages are unbalanced — the 90 ps and 110 ps stages waste more than half their cycles.

*(b) With 25 ps register overhead per stage.* Each stage's effective delay grows by 25 ps:
$$T_{\text{pipe}} = 200 + 25 = 225 \text{ ps} .$$
The single-cycle machine needs no pipeline registers, so it stays at 770 ps:
$$\text{speedup} = \frac{770}{225} = \boxed{3.42\times}$$

The overhead alone cost $3.85 - 3.42 = 0.43$ of speedup, about 11 percent of the gain — a substantial tax, and it is charged every cycle.

*(c) Which stage to optimise.* The **200 ps EX stage**, since it sets the clock. But the improvement is sharply bounded: reducing it to zero would leave the next-longest stage, MEM at 190 ps, as the constraint:
$$T_{\text{best}} = 190 + 25 = 215 \text{ ps} , \qquad \text{speedup} = \frac{770}{215} = 3.58\times .$$

So making the EX stage **instantaneous** improves the clock from 225 to 215 ps — a mere **4.4 percent** — because MEM is right behind it. The real lesson is that **balanced pipelines have no single lever**: with two stages within 10 ps of each other, you must improve both to gain anything, which is why stage balancing is done as a whole-datapath partitioning problem rather than by attacking one block.

**P3** *(a) New cycle time.* The six stages are 200, 100, 200, 100, 100, 100 ps (MEM split into two 100 ps halves). With 20 ps overhead:
$$T_6 = \max(200,100,200,100,100,100) + 20 = 200 + 20 = \boxed{220 \text{ ps}} .$$

*This is the key result and it is a negative one.* The 5-stage version had stages 200, 100, 200, 200, 100, giving $T_5 = 200 + 20 = 220$ ps — **identical**. Splitting MEM achieved nothing, because MEM was not the *only* 200 ps stage: IF and EX are also 200 ps, and they still set the clock.

*(b) Throughput improvement.*
$$\frac{T_5}{T_6} = \frac{220}{220} = \boxed{1.00\times \text{ — no improvement at all}} .$$

*(c) Net effect including the branch penalty.* Throughput is unchanged, but the misprediction penalty rises from 2 to 3 cycles. The added stall cycles per instruction:
$$\Delta\mathrm{CPI} = 0.20 \times 0.10 \times (3-2) = 0.02 .$$

Base CPI is 1, so CPI rises from 1.02 to 1.04, and since the cycle time is unchanged:
$$\text{slowdown} = \frac{1.04}{1.02} = 1.0196 \quad\Longrightarrow\quad \boxed{\text{about } 2\% \text{ SLOWER — a clear net loss}} .$$

The change costs performance, adds a pipeline register's worth of area and power, and increases design complexity, all for nothing.

The general principle this illustrates is worth stating plainly: **deepening a pipeline only helps if you split the stage that is actually setting the clock, and only if no other stage is tied with it.** Here the design had three stages at 200 ps, so splitting any one of them leaves the other two binding. To gain anything, IF, EX and MEM would all have to be split — which would raise the branch penalty further still, and the arithmetic above shows how quickly that eats the gain. This is precisely the wall the industry hit around 2005, and the reason pipeline depths stopped growing.

</details>

## Flashback

**From Lesson 2.3 (floating point — IEEE-754 and its arithmetic):** Encode $-40.5$ as a 32-bit single-precision float, showing the normalised binary form, the biased exponent and the fraction. Then state the spacing between adjacent floats at that magnitude.

<details>
<summary>Solution</summary>

*Step 1 — sign.* Negative, so $s = 1$.

*Step 2 — binary magnitude.* $40.5 = 32 + 8 + 0.5 = \texttt{101000.1}_2$.

*Step 3 — normalise.* Move the point left 5 places:
$$\texttt{101000.1}_2 = 1.010001 \times 2^5 , \qquad \text{true exponent} = 5 .$$

*Step 4 — bias.* $E = 5 + 127 = 132 = \texttt{10000100}$.

*Step 5 — fraction.* The bits after the leading 1, padded to 23:
$$f = \texttt{010001}\,00000000000000000 .$$

*Assemble:*
$$\underbrace{1}_{s}\ \underbrace{10000100}_{E}\ \underbrace{01000100000000000000000}_{f}$$
$$\texttt{1100 0010 0010 0010 0000 0000 0000 0000} = \boxed{\texttt{0xC2220000}}$$

*Spacing at this magnitude.* With 23 fraction bits and a true exponent of 5, adjacent representable values differ by
$$2^{e-23} = 2^{5-23} = 2^{-18} \approx 3.81\times 10^{-6} .$$

So near $-40.5$, single-precision floats are about four millionths apart — roughly seven significant decimal digits, which is the usual rule of thumb for single precision.

Worth connecting to this lesson: floating-point operations at this precision take several cycles ([2.3](02-03-floating-point-ieee-754.md)), which in a **single-cycle** machine would have forced the clock to accommodate the slowest of them and slowed every integer instruction accordingly — [3.1](03-01-single-cycle-datapath.md) P3's problem exactly. In a **pipelined** machine the floating-point unit simply occupies more EX cycles, the clock is untouched, and only genuinely dependent instructions wait. That structural difference is what makes hardware floating point affordable, and it is Example 2 of this lesson in a different costume.

</details>

## Connections

- **Backward:** the five stages are [3.1](03-01-single-cycle-datapath.md)'s five spatial regions, now separated in time; the control signals latched into the pipeline registers are [3.2](03-02-single-cycle-control.md)'s, computed once in ID and carried forward. The separate instruction and data memories that [3.1](03-01-single-cycle-datapath.md) needed for a different reason are what prevent a structural hazard here.
- **Forward:** overlapping execution creates the two hazards this lesson names and defers — [3.4](03-04-data-hazards-forwarding-stalls.md) for data and [3.5](03-05-control-hazards-and-branch-prediction.md) for control. The branch penalty that P3 showed bounding pipeline depth is quantified there, and CPI stops being exactly 1 for the first time, which is what [5.1](05-01-measuring-performance-cpi-amdahl.md)'s iron law needs.
- **Sideways:** pipelining is throughput engineering, the same idea as an assembly line or a laundry with a washer and a dryer — and the same mathematics governs software pipelines, graphics pipelines and instruction-level parallelism in [5.2](05-02-instruction-level-parallelism.md). The universal lesson is that **latency and throughput are independent quantities**, and that improving one can leave the other untouched or worse.
