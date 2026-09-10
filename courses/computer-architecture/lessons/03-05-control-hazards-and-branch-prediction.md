# Computer Architecture · Lesson 3.5: Control hazards and branch prediction

> ⏱ ~15 min · Module 3: The processor · Builds on: [3.2 (single-cycle control)](03-02-single-cycle-control.md), [3.4 (data hazards)](03-04-data-hazards-forwarding-stalls.md) · Unlocks: 4.1 (caches), 5.2 (instruction-level parallelism)

## Why this matters

A pipeline fetches an instruction every cycle. A branch does not know where to go until it has been executed. Those two facts are incompatible, and the gap between them is the **control hazard** — the last and hardest of the three hazards pipelining creates.

It is also the one that got the most engineering attention, because branches are about one instruction in five. A machine that stalled on every branch would lose a large fraction of its throughput, and a deeply pipelined machine would lose most of it. Modern branch predictors reach 95–99 percent accuracy and are among the most sophisticated pieces of a processor — which is a striking amount of hardware devoted to guessing.

## The idea

When the pipeline fetches a branch in cycle 1, it must fetch *something* in cycle 2. But the branch's outcome is not known until EX, in cycle 3. Two instructions have already been fetched by then, and if the branch turns out to be taken, both are on the wrong path and must be discarded.

Three responses, in increasing order of sophistication.

**Stall** until the outcome is known. Correct, simple, and costs the full penalty on every branch — unacceptable.

**Predict** and continue fetching down the guessed path. If right, cost nothing; if wrong, discard the wrongly-fetched instructions and restart. Since the guess is right most of the time, the average cost is small.

**Resolve earlier.** Move the branch decision from EX into ID by adding a dedicated comparator, cutting the penalty from 2 cycles to 1. This costs hardware and can lengthen the ID stage, but it halves the penalty for every branch.

Real machines do the second and third together. The critical insight behind prediction is that **branches are extremely repetitive**: a loop's backward branch is taken every iteration but the last, so even a trivially simple predictor is right most of the time.

## The formal version

**The penalty.** If a branch resolves at the end of stage $s$ and fetch happens in stage 1, then $s - 1$ instructions have been fetched speculatively:

| Resolved in | Instructions to flush | Penalty |
|---|---|---|
| EX (stage 3) | 2 | 2 cycles |
| ID (stage 2) | 1 | 1 cycle |

**Flushing** means converting the wrongly-fetched instructions into bubbles by zeroing their control signals — the same mechanism as [3.4](03-04-data-hazards-forwarding-stalls.md)'s stall, applied to instructions already in the pipe. Because they have not reached MEM or WB, nothing they did is architecturally visible, so discarding them is safe.

**Cost in CPI.** With branch frequency $b$, misprediction rate $m$, and penalty $p$:
$$\mathrm{CPI} = 1 + b\,m\,p .$$

| Strategy | $b$ | $m$ | $p$ | CPI |
|---|---|---|---|---|
| stall always | 0.20 | 1.00 | 2 | 1.40 |
| predict not-taken | 0.20 | 0.50 | 2 | 1.20 |
| 2-bit predictor | 0.20 | 0.10 | 2 | **1.04** |
| 2-bit + resolve in ID | 0.20 | 0.10 | 1 | **1.02** |

**Static prediction** makes the same guess every time.

*Predict not-taken* is the cheapest possible policy: keep fetching sequentially and flush if wrong. Costs no hardware at all, since the pipeline was already fetching `PC+4`. Accuracy is roughly 50 percent, better on `if` statements whose bodies are usually skipped.

*Backward taken, forward not-taken* (BTFN) exploits the structure of loops: a backward branch is almost certainly a loop closing, and loops iterate. The direction is available from the sign of the immediate at fetch time, so this costs almost nothing and reaches roughly 65–70 percent.

**Dynamic prediction** learns from what actually happened.

> **1-bit predictor.** A table indexed by branch address, storing one bit: "taken last time" or "not taken last time". Predict the same as last time.

Its weakness is systematic. A loop executing $n$ times mispredicts **twice** per full traversal: once on the final iteration (predicted taken, actually exits) and once on the first iteration of the *next* traversal (the bit now says not-taken, but the loop is taken). For an inner loop run repeatedly, that is two mispredictions every $n$ iterations.

> **2-bit saturating predictor.** Four states — strongly not-taken, weakly not-taken, weakly taken, strongly taken. A correct prediction moves toward the nearer extreme; a wrong one moves one step toward the other. **Two consecutive wrong guesses are needed to flip the prediction.**

This fixes the loop case: the final-iteration miss moves the counter from strongly-taken to weakly-taken, and the next traversal's first iteration is still predicted taken. **One misprediction per loop traversal instead of two.**

**Correlating and tournament predictors.** Real predictors go further, indexing on the *history* of recent branches as well as the address, because branch outcomes correlate — `if (x > 0)` followed by `if (x > 5)` are not independent. A tournament predictor runs several schemes and a meta-predictor learns which to trust per branch. These reach 95–99 percent.

**The branch target buffer.** Knowing a branch is taken is not enough; you need its *target* at fetch time, before decoding tells you the immediate. A BTB is a cache mapping branch addresses to targets, consulted in IF in parallel with the fetch itself.

**Returns get their own predictor.** A `ret` is an indirect jump ([1.5](01-05-procedures-stack-calling-convention.md)) whose target changes on every call, so a BTB predicts it badly. Processors keep a small **return-address stack** that pushes on `jal` and pops on `ret`, achieving near-perfect accuracy on the one indirect jump that follows a predictable discipline.

**Why penalty scales with pipeline depth.** A deeper pipeline resolves branches later, so more instructions are in flight to flush. A 20-stage machine can lose 15–20 cycles per misprediction, which is why [3.3](03-03-pipelining-and-the-pipelined-datapath.md) listed the growing branch penalty as one of the three brakes on pipeline depth.

## Picture

![A pipeline trace where a taken branch resolves at the end of its EX stage, with the two instructions fetched behind it crossed out and marked flush, and beneath it a four-state saturating counter diagram with arrows for taken and not-taken transitions between strongly not-taken, weakly not-taken, weakly taken and strongly taken](assets/03-05-fig1.svg)

The crossed-out boxes are work already done and thrown away — they consumed fetch bandwidth and decode effort and produced nothing. The state machine below is what buys them back: because it takes two consecutive surprises to change its mind, a loop's single anomalous final iteration does not cost you the first iteration of the next traversal.

## Worked examples

**Example 1 (mechanical): comparing predictors on a loop.** An inner loop runs 10 iterations and is itself entered 100 times. The loop-closing branch is taken 9 times and not taken once per traversal.

*Predict always-taken.* Wrong only on the final iteration of each traversal:
$$\text{mispredictions} = 100 \times 1 = 100 , \qquad \text{rate} = \frac{100}{1000} = 10\% .$$

*1-bit predictor.* Two misses per traversal — the final iteration, plus the first iteration of the next traversal (the bit was left saying "not taken"):
$$\text{mispredictions} = 100\times 2 - 1 = 199 , \qquad \text{rate} = \frac{199}{1000} = 19.9\% .$$
(The $-1$ is because the very first traversal has no predecessor to mispredict against.)

*2-bit predictor.* The final-iteration miss moves the counter from strongly-taken to weakly-taken, which still predicts taken, so the next traversal starts correctly:
$$\text{mispredictions} = 100 , \qquad \text{rate} = 10\% .$$

**The 1-bit predictor is worse than a fixed guess of "always taken"** on this workload, which is the classic result motivating the 2-bit design. Adding one bit of state halves the misprediction rate and recovers the performance of a static policy while remaining adaptive to branches that genuinely change behaviour.

**Example 2 (why you'd care): the cost of a deep pipeline.** Two machines run the same program: 20 percent branches, 5 percent misprediction rate.

*Machine A*, 5 stages, branch penalty 2 cycles, cycle time 250 ps:
$$\mathrm{CPI} = 1 + 0.20(0.05)(2) = 1.02 , \qquad \text{time/instr} = 1.02 \times 250 = 255 \text{ ps} .$$

*Machine B*, 20 stages, branch penalty 15 cycles, cycle time 100 ps:
$$\mathrm{CPI} = 1 + 0.20(0.05)(15) = 1.15 , \qquad \text{time/instr} = 1.15\times 100 = 115 \text{ ps} .$$

Machine B wins by $255/115 = 2.22\times$ — the deeper pipeline pays off, because the 2.5x clock advantage swamps the CPI penalty.

Now degrade the predictor to 15 percent misprediction:
$$\mathrm{CPI}_A = 1 + 0.20(0.15)(2) = 1.06 \ \to\ 265 \text{ ps}$$
$$\mathrm{CPI}_B = 1 + 0.20(0.15)(15) = 1.45 \ \to\ 145 \text{ ps}$$
Machine B still wins, but by only $1.83\times$ — it lost 18 percent of its advantage while Machine A lost 4 percent.

**The deeper the pipeline, the more it depends on the predictor.** That is why prediction accuracy and pipeline depth were pushed together historically: neither is worth much without the other, and a 20-stage pipeline with a 1-bit predictor would be a poor design. It is also why branch-heavy, unpredictable code — interpreters, pointer chasing, code with data-dependent branches — performs so much worse than its instruction count suggests.

## Watch out

- **You might think** a 1-bit predictor is a reasonable simplification of a 2-bit one — **but actually** it can be worse than a fixed static guess, because it mispredicts twice per loop traversal. The second bit is not a refinement; it fixes a specific pathology.
- **You might think** predicting the *direction* is enough — **but actually** you also need the *target*, and at fetch time the instruction has not been decoded so the immediate is unknown. That is what the branch target buffer is for, and a BTB miss costs a penalty even on a correctly-predicted taken branch.
- **You might think** flushing wrongly-fetched instructions is dangerous — **but actually** they have not reached MEM or WB, so they have written no register and touched no memory. Nothing architecturally visible has happened. That guarantee is exactly what makes speculation safe, and it is the same guarantee [5.2](05-02-instruction-level-parallelism.md)'s more aggressive speculation relies on.

## One-liner

> The pipeline must fetch before the branch has decided, so it guesses and throws away the wrong path when it loses — and since two consecutive surprises are needed to flip a 2-bit counter, a loop costs one misprediction per traversal rather than two.

## Problems

**P1 (🟢)** A machine has 18 percent branches, a 2-cycle penalty, and a predictor with 8 percent misprediction. (a) Give the CPI. (b) Give the CPI if branches are resolved in ID instead, halving the penalty. (c) Give the percentage speedup from that change.

**P2 (🟡)** A loop runs 4 iterations and is entered 50 times. Count the mispredictions and give the rate for (a) predict always-taken, (b) a 1-bit predictor, and (c) a 2-bit predictor starting in strongly-taken. Explain why the gap between 1-bit and 2-bit is larger here than for a 10-iteration loop.

**P3 (🔴, optional)** Machine A has 8 stages, a 4-cycle branch penalty and a 200 ps clock. Machine B has 16 stages, a 12-cycle penalty and a 120 ps clock. Branches are 22 percent of instructions. (a) At 4 percent misprediction, which is faster and by how much? (b) Find the misprediction rate at which they are equal. (c) Comment on what this implies about designing a deep pipeline.

<details>
<summary>Solutions</summary>

**P1** *(a) Baseline CPI.*
$$\mathrm{CPI} = 1 + b\,m\,p = 1 + 0.18(0.08)(2) = 1 + 0.0288 = \boxed{1.0288}$$

*(b) Resolving in ID*, penalty 1:
$$\mathrm{CPI} = 1 + 0.18(0.08)(1) = 1 + 0.0144 = \boxed{1.0144}$$

*(c) Speedup.* With the cycle time unchanged, performance scales inversely with CPI:
$$\frac{1.0288}{1.0144} = 1.0142 \quad\Longrightarrow\quad \boxed{1.42\%}$$

Small — because the predictor is already good. The penalty only matters on the 8 percent of branches that miss, so halving it halves an already-small term. This is worth noting as a design principle: **once the predictor is accurate, reducing the penalty buys little**, and effort is better spent elsewhere. The calculation would look very different at a 50 percent misprediction rate, where the same change would be worth about 9 percent.

**P2** The branch is taken 3 times and not taken once per traversal; 50 traversals give $50\times 4 = 200$ branch executions.

*(a) Always-taken.* Wrong once per traversal, on the exit:
$$50 \text{ mispredictions}, \qquad \text{rate} = \frac{50}{200} = \boxed{25\%}$$

*(b) 1-bit predictor.* Two misses per traversal — the exit, and then the first iteration of the next traversal (the bit was left at "not taken"). The first traversal has no predecessor:
$$50\times 2 - 1 = 99 , \qquad \text{rate} = \frac{99}{200} = \boxed{49.5\%}$$

*(c) 2-bit predictor.* The exit misprediction moves the counter from strongly-taken to weakly-taken, which still predicts taken, so the next traversal's first iteration is correct:
$$50 , \qquad \text{rate} = \frac{50}{200} = \boxed{25\%}$$

*Why the 1-bit-versus-2-bit gap is larger here.* Both predictors suffer a fixed **2 mispredictions per traversal** (1-bit) or **1 per traversal** (2-bit), independent of loop length. What changes is the denominator: with $n$ iterations per traversal, the rates are roughly $2/n$ and $1/n$.

| loop length | 1-bit rate | 2-bit rate | absolute gap |
|---|---|---|---|
| 4 | 49.5% | 25% | 24.5 points |
| 10 | 19.9% | 10% | 9.9 points |
| 100 | 2.0% | 1.0% | 1.0 point |

**Short loops are where prediction is hardest**, because the anomalous iteration is a large fraction of the total. A 4-iteration loop with a 1-bit predictor is wrong essentially half the time — no better than a coin flip — while the same predictor on a 100-iteration loop is 98 percent accurate. This is why real predictors use branch *history* rather than just the last outcome: a history-based scheme can learn the pattern "taken, taken, taken, not-taken, repeating" exactly and predict a short loop near-perfectly.

**P3** *(a) At 4 percent misprediction.*

Machine A:
$$\mathrm{CPI}_A = 1 + 0.22(0.04)(4) = 1 + 0.0352 = 1.0352 , \qquad t_A = 1.0352\times 200 = 207.04 \text{ ps}$$

Machine B:
$$\mathrm{CPI}_B = 1 + 0.22(0.04)(12) = 1 + 0.1056 = 1.1056 , \qquad t_B = 1.1056\times 120 = 132.67 \text{ ps}$$

$$\text{B is faster by } \frac{207.04}{132.67} = \boxed{1.56\times}$$

*(b) The break-even misprediction rate.* Set the times equal:
$$\bigl(1 + 0.22m(4)\bigr)200 = \bigl(1+0.22m(12)\bigr)120$$
$$200 + 176m = 120 + 316.8m$$
$$80 = 140.8m \quad\Longrightarrow\quad m = \boxed{0.568}$$

They break even at a **56.8 percent misprediction rate** — worse than random guessing on a binary outcome.

*(c) What this implies.* The deep pipeline is enormously robust here. Even at a 30 percent misprediction rate — catastrophic by modern standards — Machine B still wins:
$$t_A = (1+0.22(0.3)(4))200 = 252.8, \qquad t_B = (1+0.22(0.3)(12))120 = 215.0 ,$$
a 1.18x advantage. The clock-frequency gain of $200/120 = 1.67\times$ is simply a large lead to overcome.

Two conclusions, and the second is the more useful one.

**Deep pipelines are worth it when the frequency gain is real.** The penalty term $b\,m\,p$ only bites when all three factors are substantial, and with a decent predictor $m$ is small enough to keep the product tiny.

**But this analysis assumes the frequency gain materialises**, and that is the assumption that failed historically. [3.3](03-03-pipelining-and-the-pipelined-datapath.md) showed that pipeline-register overhead and unbalanced stages mean doubling the stage count does *not* halve the cycle time — and power grows roughly with frequency, so the 120 ps clock may be unreachable within the thermal budget. The Pentium 4's 31 stages failed not because its branch penalty was unmanageable but because the frequency it needed to justify that depth could not be delivered at acceptable power. **The branch penalty is a real cost and rarely the binding one**; power and stage balance usually bind first.

</details>

## Flashback

**From Lesson 3.2 (single-cycle control):** Give all six control signals for `beq x5, x6, L`, plus the `ALUOp` value and the ALU operation selected. State which two signals are don't-cares and why, and write the boolean expression that decides the PC source.

<details>
<summary>Solution</summary>

`beq` is B-type, opcode `1100011`.

| Signal | Value | Reason |
|---|---|---|
| `RegWrite` | **0** | a branch writes no register |
| `ALUSrc` | **0** | the ALU compares two registers, so the second operand is `rs2` |
| `MemRead` | **0** | no memory access |
| `MemWrite` | **0** | no memory access |
| `MemToReg` | **x** | don't care |
| `Branch` | **1** | this is a branch |
| `ALUOp` | **`01`** | branch comparison |

*ALU operation.* `ALUOp = 01` forces **subtract**, regardless of the funct fields — the ALU computes `rs1 - rs2` purely so its `Zero` output flags equality. Note this is one of the two cases from [3.2](03-02-single-cycle-control.md) where the funct bits are deliberately ignored, the other being `ALUOp = 00` forcing an add for address calculation.

*Which signals are don't-cares.* Strictly, **`MemToReg` alone** is a true don't-care, and the reason is the rule from [3.2](03-02-single-cycle-control.md) P1: `MemToReg` selects what reaches the register file's write port, and with `RegWrite = 0` nothing is written, so the selection is unobservable.

The question asks for two, and the second candidate depends on the datapath's details. In designs where the write-address port is also gated by `RegWrite`, the `rd` field is likewise a don't-care — the branch's bits 11:7 hold part of the immediate ([1.2](01-02-registers-memory-instruction-formats.md)), not a register number, and it is only safe to let that garbage reach the write-address port because `RegWrite` is 0. Some texts also mark `MemRead` as a don't-care on the grounds that reading data memory is harmless when the result is discarded, though asserting it wastes power and most designs drive it to 0 explicitly.

*The PC-source expression.*
$$\texttt{PCSrc} = \texttt{Branch} \ \wedge\ \texttt{Zero}$$

A single AND gate. `Branch` comes from the opcode; `Zero` comes from the ALU after the subtraction completes.

And that expression is precisely the origin of this lesson's control hazard. The `Zero` term is not available until the ALU finishes in EX, so `PCSrc` — which the *fetch* stage needs in the very next cycle — is two stages away from being known. In the single-cycle machine of [3.2](03-02-single-cycle-control.md) that serial dependence was harmless, because everything happened inside one long cycle. Cutting the datapath into stages is what turned a harmless dependence into a two-cycle penalty on one instruction in five, and prediction is the response.

</details>

## Connections

- **Backward:** the hazard is created by [3.3](03-03-pipelining-and-the-pipelined-datapath.md)'s overlap, and its root is [3.2](03-02-single-cycle-control.md)'s `PCSrc = Branch AND Zero` — a dependence that costs nothing in one long cycle and two cycles in a pipeline. The flush mechanism is [3.4](03-04-data-hazards-forwarding-stalls.md)'s bubble injection, applied to instructions already fetched. Return-address prediction exists because of [1.5](01-05-procedures-stack-calling-convention.md)'s calling convention.
- **Forward:** with hazards accounted for, CPI is no longer 1, which is what makes [5.1](05-01-measuring-performance-cpi-amdahl.md)'s iron law non-trivial. [5.2](05-02-instruction-level-parallelism.md) speculates far more aggressively — executing hundreds of instructions past an unresolved branch — and relies on the same guarantee exploited here: nothing is architecturally visible until commit.
- **Sideways:** speculative execution's safety guarantee is *architectural*, not physical. Wrongly-executed instructions leave no register or memory changes, but they do leave traces in the cache — and Spectre and Meltdown are attacks that read those traces to recover data the speculation should never have touched. That the ISA-level abstraction is airtight while the microarchitecture leaks is [1.1](01-01-isa-contract-stored-program.md)'s split turned into a security problem.
