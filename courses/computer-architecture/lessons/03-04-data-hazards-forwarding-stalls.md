# Computer Architecture · Lesson 3.4: Data hazards — forwarding and stalls

> ⏱ ~15 min · Module 3: The processor · Builds on: [3.3 (pipelining)](03-03-pipelining-and-the-pipelined-datapath.md) · Unlocks: 3.5 (control hazards), 4.1 (caches)

## Why this matters

Pipelining assumed instructions are independent. They are not: roughly one instruction in three uses a value the previous one or two just computed. Without a fix, a pipelined machine would compute wrong answers — not slowly, *wrongly*, because an instruction would read a register before its predecessor wrote it.

The fix, forwarding, is a small piece of hardware with a large payoff: it turns what would be a three-cycle stall on nearly every dependent instruction into zero cycles. The one case it cannot fix — the load-use hazard — is the reason compilers schedule instructions the way they do, and is a cost you can actually avoid when writing performance-sensitive code.

## The idea

An instruction writes its result to the register file in WB, its fifth stage. An instruction three positions behind it reads registers in ID, its second stage. Line those up and the reader is in ID during the writer's WB — fine. But an instruction *immediately* behind reaches ID while the writer is only in EX, two stages before its value gets written.

So the naive pipeline reads a stale register. That is a **read-after-write (RAW) hazard**, and it is the common case, not an edge case.

The insight that fixes it: **the value already exists**, it is just not in the register file yet. The ALU produced it at the end of EX. Rather than waiting three cycles for it to be written and re-read, run a wire from the ALU's output back to the ALU's input and use it directly. That is forwarding — sometimes called bypassing — and it costs a few multiplexers.

Forwarding fails in exactly one case, and the reason is worth stating precisely: **you cannot send a value backwards in time.** A load's value does not exist until the end of MEM. An instruction immediately behind it needs that value at the start of its own EX, which is the same cycle. There is nowhere to forward it from, so the pipeline must stall one cycle.

## The formal version

**The three dependence types**, of which only the first is a hazard in this pipeline:

| Name | Pattern | Hazard here? |
|---|---|---|
| **RAW** (true dependence) | write then read | **yes** |
| WAR (anti-dependence) | read then write | no — reads happen in ID, writes in WB, always in order |
| WAW (output dependence) | write then write | no — all writes happen in WB, in order |

WAR and WAW become real problems only when instructions complete out of order, which is [5.2](05-02-instruction-level-parallelism.md)'s subject.

**Detecting a RAW hazard.** An instruction in EX has a hazard if either of its source registers matches the destination of an instruction ahead of it that will write:

$$\texttt{EX/MEM.RegWrite} \ \wedge\ (\texttt{EX/MEM.rd} \neq 0) \ \wedge\ (\texttt{EX/MEM.rd} = \texttt{ID/EX.rs1})$$

and similarly for `rs2` and for the MEM/WB stage. Three conditions, and each matters:

- `RegWrite` — a store or branch writes no register, so it can never be a hazard source;
- `rd ≠ 0` — `x0` is hardwired ([1.2](01-02-registers-memory-instruction-formats.md)), so writes to it are discarded and forwarding it would be wrong;
- the register numbers match.

**The two forwarding paths.**

| Path | From | To | Covers |
|---|---|---|---|
| EX/MEM → EX | ALU output of the immediately preceding instruction | ALU input | distance-1 dependences |
| MEM/WB → EX | result of the instruction two ahead | ALU input | distance-2 dependences |

Distance-3 needs no forwarding: the writer is in WB while the reader is in ID, and the "write in the first half of the cycle, read in the second" convention from [3.3](03-03-pipelining-and-the-pipelined-datapath.md) means the reader sees the new value.

When both paths match the same source register, **the EX/MEM path wins** — it carries the more recent value. Getting that priority backwards is a classic design bug and produces a stale-but-plausible result.

**The load-use hazard.** A `lw` produces its value at the end of MEM. The instruction directly behind it needs that value at the start of EX — the same cycle. Forwarding cannot help.

> **Detection.** Stall if the instruction in EX is a load and its `rd` matches either source of the instruction in ID:
> $$\texttt{ID/EX.MemRead} \ \wedge\ \bigl(\texttt{ID/EX.rd} = \texttt{IF/ID.rs1} \ \vee\ \texttt{ID/EX.rd} = \texttt{IF/ID.rs2}\bigr)$$

**How a stall is implemented.** Three actions in the same cycle:

1. **Freeze** the PC and the IF/ID register, so the same instruction is decoded again next cycle.
2. **Inject a bubble** — zero the control signals in ID/EX, creating a `nop` that flows harmlessly down the pipe.
3. Let everything already past ID/EX **continue**, since those instructions are unaffected.

After one stall cycle the load has reached MEM/WB and the MEM/WB→EX forwarding path handles the rest. **Exactly one bubble, never more.**

**The compiler can remove it.** Since the stall exists only when the *immediately* following instruction uses the loaded value, moving any independent instruction into that slot eliminates it entirely — at zero cost, since the instruction had to execute anyway. This is **instruction scheduling**, and it is one of the clearest cases of a compiler optimising for a specific microarchitecture.

**Cost.** With a fraction $f$ of instructions suffering a load-use stall:
$$\mathrm{CPI} = 1 + f .$$
Typical unscheduled code has $f \approx 0.1$–$0.2$; good scheduling drops it below $0.05$.

## Picture

![Two pipeline traces stacked: the upper pair shows an add followed by a dependent sub with a forwarding arrow from the end of the add's EX stage to the start of the sub's EX stage labelled no stall; the lower pair shows a lw followed by a dependent add with a bubble inserted and an arrow from the end of MEM](assets/03-04-fig1.svg)

The two arrows are the whole lesson. The upper one runs from the end of one EX to the start of the next — **forward in time**, which is possible. The lower one would have to run from the end of MEM to the start of the EX in the same cycle — **backward in time**, which is not, so a bubble is inserted to buy the cycle.

## Worked examples

**Example 1 (mechanical): classify every dependence.** The syllabus's Boss problem 3 sequence, with full forwarding:

```
lw   x1, 0(x2)
add  x3, x1, x4
sub  x5, x3, x6
and  x7, x3, x5
```

| Dependence | Register | Distance | Resolution |
|---|---|---|---|
| `lw` → `add` | `x1` | 1 | **load-use: forward + 1 stall** |
| `add` → `sub` | `x3` | 1 | EX/MEM → EX forwarding, no stall |
| `add` → `and` | `x3` | 2 | MEM/WB → EX forwarding, no stall |
| `sub` → `and` | `x5` | 1 | EX/MEM → EX forwarding, no stall |

*Cycle count.* Four instructions in a 5-stage pipeline take $5 + (4-1) = 8$ cycles ideally, plus the one stall:
$$\boxed{9 \text{ cycles}} .$$

Note that `and` has **two** dependences at once — `x3` from two instructions back and `x5` from one back. Both are handled, by different forwarding paths, in the same cycle. That is why the forwarding multiplexers are per-operand: each ALU input has its own selector.

**Example 2 (why you'd care): scheduling removes the stall for free.** Consider summing two array elements:

```
lw   x1, 0(x10)       # load A[i]
add  x3, x1, x4       # STALL: uses x1 immediately
lw   x2, 4(x10)       # load A[i+1]
add  x5, x2, x6       # STALL: uses x2 immediately
```

Two load-use stalls, so $5 + 3 + 2 = 10$ cycles.

Now reorder, moving each load earlier so an independent instruction fills the gap:

```
lw   x1, 0(x10)
lw   x2, 4(x10)       # independent — fills the slot after the first load
add  x3, x1, x4       # x1 is now 2 instructions back: forwarding handles it
add  x5, x2, x6       # x2 is 2 back: forwarding handles it
```

**Zero stalls**, so $5 + 3 = 8$ cycles — a 20 percent improvement from reordering four instructions, with identical results and identical instruction count.

Three things follow. **This is a pure microarchitectural optimisation**: the ISA is unchanged, the program computes the same thing, and only the schedule differs — which is why compilers must know the pipeline they are targeting, and why the same binary can run at noticeably different speeds on two machines implementing the same ISA ([1.1](01-01-isa-contract-stored-program.md)).

**It is also why load latency matters more than load count.** Both versions execute two loads; the second version simply arranges for their latency to be covered by useful work. When [4.1](04-01-caches-and-locality.md) makes a load cost 100 cycles on a miss instead of 1, no amount of local scheduling can cover it — which is what motivates out-of-order execution in [5.2](05-02-instruction-level-parallelism.md).

And note the limit: scheduling can only fill a slot if an **independent** instruction exists nearby. Tightly dependent code — a linked-list traversal, where each load's address comes from the previous load's result — offers nothing to schedule, and stalls are unavoidable.

## Watch out

- **You might think** forwarding eliminates all data hazards — **but actually** it eliminates all but the load-use case. That one requires a stall no matter how much bypass hardware you add, because the value does not exist early enough.
- **You might think** a dependence on `x0` needs forwarding — **but actually** `x0` is hardwired to zero, so forwarding a "result" written to it would inject a wrong value. The `rd ≠ 0` term in the detection logic exists specifically to prevent that, and omitting it is a real bug.
- **You might think** when both forwarding paths match you can pick either — **but actually** the EX/MEM path carries the *more recent* value and must take priority. Choosing MEM/WB gives the result of an older instruction that has since been overwritten — a stale value that is often plausible, which makes the bug hard to find.

## One-liner

> The result already exists in the pipeline before it reaches the register file, so wire it straight back to the ALU — which removes every data stall except the load-use case, where the value genuinely does not exist yet and one bubble is unavoidable.

## Problems

**P1 (🟢)** For this sequence with full forwarding, list every RAW dependence with its register and distance, say how each is resolved, and give the total cycles.
```
add  x1, x2, x3
sub  x4, x1, x5
lw   x6, 0(x1)
or   x7, x6, x4
```

**P2 (🟡)** Reschedule the following to eliminate as many stalls as possible without changing the result. Give the cycle count before and after, and state which dependence forced your ordering.
```
lw   x1, 0(x10)
add  x2, x1, x11
lw   x3, 4(x10)
add  x4, x3, x12
sub  x5, x2, x4
```

**P3 (🔴, optional)** A machine has a 5-stage pipeline, full forwarding, and no compiler scheduling. Loads are 25 percent of instructions, and 40 percent of loads are immediately followed by a dependent instruction. (a) Give the CPI. (b) Compiler scheduling eliminates three quarters of those stalls — give the new CPI and the speedup. (c) The team proposes instead to add hardware that forwards from a *second* data-memory read port, hoping to remove the load-use stall entirely. Explain why this cannot work.

<details>
<summary>Solutions</summary>

**P1** *Dependences.*

| Dependence | Register | Distance | Resolution |
|---|---|---|---|
| `add` → `sub` | `x1` | 1 | EX/MEM → EX forwarding, no stall |
| `add` → `lw` | `x1` | 2 | MEM/WB → EX forwarding, no stall (the load's *base address*) |
| `lw` → `or` | `x6` | 1 | **load-use: 1 stall** |
| `sub` → `or` | `x4` | 2 | MEM/WB → EX forwarding, no stall |

*Cycles.* Four instructions ideally take $5 + 3 = 8$; one load-use stall adds 1:
$$\boxed{9 \text{ cycles}}$$

The instructive dependence is `add` → `lw` on `x1`. It is a genuine RAW hazard, but the consumer needs `x1` as an **address** in EX, and at distance 2 the MEM/WB path supplies it in time. A load's base-address dependence is handled exactly like any ALU dependence — it is only the load's *output* that creates the special case.

**P2** *Before.* Two load-use stalls: `lw x1` → `add x2` and `lw x3` → `add x4`.
$$\text{cycles} = 5 + (5-1) + 2 = \boxed{11}$$

*Rescheduled.* Hoist the second load so it fills the slot after the first:

```
lw   x1, 0(x10)
lw   x3, 4(x10)       # independent; fills the load-use slot
add  x2, x1, x11      # x1 now 2 back -> MEM/WB forwarding
add  x4, x3, x12      # x3 now 2 back -> MEM/WB forwarding
sub  x5, x2, x4       # both operands forwarded
```

*After.* Zero stalls:
$$\text{cycles} = 5 + 4 = \boxed{9} \qquad \text{a } 18.2\% \text{ improvement}$$

*Which dependence forced the ordering.* The **`sub x5, x2, x4` must stay last**, because it consumes both `x2` and `x4` — it is the only instruction depending on both `add`s, so no reordering can move it earlier. That single constraint fixes the tail; everything above it was free to permute because the two load-add pairs are mutually independent (different registers, different addresses).

This is what a compiler's scheduler does: build the dependence graph, then find a topological order that maximises the distance between each producer and its consumer. Here the graph has two independent chains feeding a common sink, which is the easiest possible case.

**P3** *(a) Baseline CPI.* The fraction of instructions causing a stall:
$$f = 0.25 \times 0.40 = 0.10 ,$$
and each costs exactly one bubble:
$$\mathrm{CPI} = 1 + 0.10 = \boxed{1.10}$$

*(b) With scheduling.* Three quarters of the stalls are removed, leaving $f' = 0.10 \times 0.25 = 0.025$:
$$\mathrm{CPI}' = 1 + 0.025 = \boxed{1.025}$$
$$\text{speedup} = \frac{1.10}{1.025} = \boxed{1.073\times} \quad\text{about } 7.3\% .$$

A worthwhile gain for a pure software change costing no hardware and no extra instructions.

*(c) Why a second memory read port cannot remove the load-use stall.* This is the important part, and the proposal misdiagnoses the problem.

The load-use stall is **not** caused by a shortage of memory ports or forwarding paths. It is caused by **timing**: the data memory is read during the MEM stage, so the loaded value first exists at the *end* of MEM. The dependent instruction is one position behind, so its EX stage occupies the *same cycle* as the load's MEM stage, and it needs its operand at the *start* of that cycle.

Adding a second read port gives you another place to read memory from, not an earlier time to read it. The value would still emerge at the end of the cycle in which it is needed at the beginning. **No amount of bypass hardware can move a value backwards in time**, and that is the entire content of the hazard.

What *would* help, and what real designs actually do:

- **Reduce the load's latency** so the value is available a stage earlier — which means a faster L1 cache, and is one reason L1 caches are kept small ([4.1](04-01-caches-and-locality.md)). Some designs speculatively forward a predicted value and re-execute if wrong.
- **Reorder instructions** so nothing needs the value immediately — compiler scheduling, as in part (b), or hardware out-of-order execution ([5.2](05-02-instruction-level-parallelism.md)), which finds independent work dynamically rather than statically.

The general lesson worth carrying: when a stall is a *latency* problem rather than a *resource* problem, adding resources does nothing. Distinguishing the two is the first question to ask about any pipeline stall, and it returns in [4.2](04-02-associativity-misses-write-policy.md), where some cache misses are capacity problems and others are conflict problems needing entirely different fixes.

</details>

## Flashback

**From Lesson 3.3 (pipelining and the pipelined datapath):** A datapath splits into stages of 220, 130, 210, 240 and 100 ps, with 20 ps of pipeline-register overhead per stage. (a) Give the single-cycle time and the pipelined cycle time. (b) Give the asymptotic speedup. (c) Which stage sets the clock, and how much would the clock improve if it were split perfectly in half?

<details>
<summary>Solution</summary>

*(a) Times.* A single-cycle machine traverses all stages in series with no pipeline registers:
$$T_{\text{single}} = 220+130+210+240+100 = \boxed{900 \text{ ps}} .$$
A pipelined machine's clock covers the slowest stage plus its register overhead:
$$T_{\text{pipe}} = \max(220,130,210,240,100) + 20 = 240 + 20 = \boxed{260 \text{ ps}} .$$

*(b) Asymptotic speedup.*
$$\frac{900}{260} = \boxed{3.46\times}$$

Well short of the ideal 5, for the two reasons [3.3](03-03-pipelining-and-the-pipelined-datapath.md) identified: the stages are unbalanced (100 ps against 240 ps, so the short stages idle more than half their cycle), and the 20 ps register overhead is charged every cycle.

*(c) Which stage sets the clock, and the gain from splitting it.* The **240 ps MEM stage** is the constraint. Splitting it into two perfect 120 ps halves gives a 6-stage pipeline whose stages are 220, 130, 210, 120, 120, 100:
$$T_{\text{new}} = \max(220,130,210,120,120,100) + 20 = 220 + 20 = 240 \text{ ps} .$$

$$\text{improvement} = \frac{260 - 240}{260} = \boxed{7.7\%}$$

Modest, and for the reason [3.3](03-03-pipelining-and-the-pipelined-datapath.md) P3 made general: **IF at 220 ps is right behind MEM**, so removing MEM as the bottleneck immediately exposes IF. Even splitting MEM into four 60 ps pieces would leave the clock at 240 ps.

And the 7.7 percent is a gross figure. The extra stage raises the branch misprediction penalty by one cycle, which — with, say, 20 percent branches at a 10 percent misprediction rate — adds $0.2\times0.1\times1 = 0.02$ to CPI, roughly 2 percent. The net gain is closer to 5.5 percent, for an additional pipeline register's area and power. Whether that is worth doing is exactly the judgement call that bounded pipeline depth in real designs.

</details>

## Connections

- **Backward:** the hazard exists because [3.3](03-03-pipelining-and-the-pipelined-datapath.md) overlapped instructions that [3.1](03-01-single-cycle-datapath.md)'s single-cycle machine ran one at a time — the single-cycle design had no data hazards at all, which is the price it paid for its enormous clock. The `rd ≠ 0` check exists because of [1.2](01-02-registers-memory-instruction-formats.md)'s hardwired `x0`.
- **Forward:** [3.5](03-05-control-hazards-and-branch-prediction.md) handles the other hazard overlapping creates. The load-use stall becomes far more expensive once [4.1](04-01-caches-and-locality.md) makes a load miss cost 100 cycles instead of 1, which is the motivation for [5.2](05-02-instruction-level-parallelism.md)'s out-of-order execution — finding independent work dynamically when the compiler could not find it statically.
- **Sideways:** the WAR and WAW dependences dismissed here as harmless become genuine hazards the moment instructions complete out of order, and the standard fix — register renaming — works by giving each write a fresh physical register so the false dependences vanish. That the ISA exposes only 32 architectural registers while the hardware has hundreds is [1.1](01-01-isa-contract-stored-program.md)'s ISA/microarchitecture split at its most dramatic.
