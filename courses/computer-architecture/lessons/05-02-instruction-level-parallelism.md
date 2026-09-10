# Computer Architecture · Lesson 5.2: Instruction-level parallelism (a taste)

> ⏱ ~15 min · Module 5: Parallelism and performance · Builds on: [4.4 (storage and I/O)](04-04-storage-and-io.md), [3.4 (data hazards)](03-04-data-hazards-forwarding-stalls.md) · Unlocks: 5.3 (multiprocessors and coherence)

## Why this matters

A pipelined machine's best case is CPI 1 — one instruction finished per cycle. Every processor you have used in twenty years does considerably better than that, and the mechanisms are the most complex hardware in the machine.

The motivation is [4.1](04-01-caches-and-locality.md)'s memory wall. A cache miss costs 200 cycles, and [3.4](03-04-data-hazards-forwarding-stalls.md)'s compiler scheduling cannot cover a hole that large — there are rarely 200 independent instructions visible to the compiler at the right place. Out-of-order execution finds them at run time instead, and the payoff is the difference between a processor that stalls for a fifth of its cycles and one that keeps working.

This is a taste, not a full treatment: the aim is to know what these machines do, why they were built, and what limits them.

## The idea

Two independent ideas, usually combined.

**Superscalar** issue means fetching, decoding and executing more than one instruction per cycle. Duplicate the functional units and widen the pipeline, and CPI can fall below 1 — the reciprocal, **instructions per cycle (IPC)**, becomes the natural metric.

**Out-of-order execution** means letting instructions execute as soon as their operands are ready, rather than in program order. When a load misses, the instructions behind it that do not depend on it can proceed while it waits.

The obstacle is that program order encodes two quite different things: **true dependences**, where one instruction genuinely needs another's result, and **name dependences**, where two instructions merely happen to use the same register. True dependences are real and must be respected. Name dependences are artefacts of having only 32 register names ([1.2](01-02-registers-memory-instruction-formats.md)), and they can be removed.

**Register renaming** removes them, by giving every write a fresh physical register from a pool of hundreds. That converts the ISA's 32 architectural names into whatever the hardware has, and it is the single mechanism that makes aggressive reordering possible.

The final requirement is that the machine must *appear* to execute in order. Instructions execute out of order but **commit** in order, so architectural state changes in program sequence and an exception or misprediction can discard everything speculative.

## The formal version

**IPC.** Superscalar machines are described by instructions per cycle:
$$\mathrm{IPC} = \frac{1}{\mathrm{CPI}} .$$
A 4-wide machine has a theoretical maximum IPC of 4; real sustained IPC on general code is typically 1–2.

**The three dependence types**, revisited from [3.4](03-04-data-hazards-forwarding-stalls.md) now that out-of-order execution makes two of them matter:

| Type | Pattern | Real? | Fix |
|---|---|---|---|
| **RAW** (true) | write then read | **genuine** | must wait |
| **WAR** (anti) | read then write | name only | renaming |
| **WAW** (output) | write then write | name only | renaming |

*Instance.* Consider:
```
add x1, x2, x3     # writes x1
sub x4, x1, x5     # RAW on x1  -- genuine, must wait
mul x1, x6, x7     # WAW on x1, and WAR against sub's read
```
The third instruction has no real relationship to the first two — it merely reuses the name `x1`. Rename it to a different physical register and it can execute immediately, even before the `add`.

**Register renaming.** The hardware keeps a **rename table** mapping architectural registers to physical ones, and a pool of physical registers much larger than 32 — modern designs have 180 to 500.

On decoding an instruction:
1. Look up its source registers in the rename table to find their current physical registers.
2. Allocate a **fresh** physical register for its destination.
3. Update the table so subsequent instructions see the new mapping.

After renaming, **every remaining dependence is a true one**, and the scheduler can reorder freely.

**Dynamic scheduling.** Renamed instructions wait in a **reservation station** or issue queue until their operands are available, then issue to a functional unit. Several may issue in the same cycle to different units.

**In-order commit and the reorder buffer.** Instructions are placed in a **reorder buffer** (ROB) in program order when issued, and results are written to architectural state only when an instruction reaches the ROB's head — that is, when all earlier instructions have committed.

This buys three things at once:

- **Precise exceptions.** If instruction $k$ faults, everything before it has committed and nothing after it has, so the architectural state is exactly as if execution stopped at $k$.
- **Speculation recovery.** A mispredicted branch discards every uncommitted instruction behind it — [3.5](03-05-control-hazards-and-branch-prediction.md)'s flush, generalised.
- **The ISA abstraction survives.** From outside, the machine executes in order, exactly as [1.1](01-01-isa-contract-stored-program.md)'s contract promises, while internally doing nothing of the sort.

**Speculation.** Out-of-order machines execute far past unresolved branches — often hundreds of instructions deep. Everything is provisional until commit, so a misprediction costs the work but corrupts nothing.

**What limits ILP.** Studies of realistic code find sustainable ILP of roughly 4–8 even with idealised hardware. The constraints:

| Limit | Why |
|---|---|
| true dependences | irreducible; a chain of dependent operations cannot be parallelised |
| branch prediction | a misprediction discards the whole speculative window |
| memory disambiguation | a load cannot pass a store unless the addresses are known to differ |
| window size | the ROB and issue queue are finite, so only a bounded window is visible |
| **power** | the scheduler, rename logic and ROB grow superlinearly in width |

That last row is the decisive one. Doubling issue width more than doubles the scheduling hardware and its power, and by the mid-2000s the return had fallen below the cost. **The industry stopped widening cores and started adding them** — which is [5.3](05-03-multiprocessors-cache-coherence.md), and the reason multicore arrived when it did.

## Picture

![Two pipeline traces: the upper shows a load taking four memory cycles with a dependent add stalled behind it and nothing else proceeding, the lower shows the same pair with two independent instructions issuing past the stalled add and completing during the load's latency](assets/05-02-fig1.svg)

The upper trace wastes four cycles doing nothing. The lower one fills them with work that was sitting further down the instruction stream, independent of the load and therefore free to proceed. The caption's note matters: those instructions could only move up because renaming removed the false dependences that would otherwise have chained them to the stalled instruction.

## Worked examples

**Example 1 (mechanical): renaming removes false dependences.** Take this sequence and rename it.

```
1: add x1, x2, x3
2: sub x4, x1, x5
3: mul x1, x6, x7
4: and x8, x1, x9
```

*Dependences before renaming:*

| Pair | Register | Type |
|---|---|---|
| 1 → 2 | `x1` | RAW — genuine |
| 2 → 3 | `x1` | WAR — false |
| 1 → 3 | `x1` | WAW — false |
| 3 → 4 | `x1` | RAW — genuine |

*After renaming*, with physical registers `p10`, `p11`, ... allocated for each write:

```
1: add p10, p2, p3
2: sub p11, p10, p5
3: mul p12, p6, p7      <- writes a DIFFERENT physical register
4: and p13, p12, p9
```

Now only two dependences remain: $1\to2$ (through `p10`) and $3\to4$ (through `p12`). **Instructions 3 and 4 are completely independent of 1 and 2** and can execute in parallel with them, or before them.

The chain length fell from 4 to 2, so a 2-wide machine can finish this in 2 cycles instead of 4. The `x1` in instructions 1 and 3 was never a real relationship — it was the compiler running out of register names, and renaming undoes that.

**Example 2 (why you'd care): covering a cache miss.** A load misses in L1 and takes 20 cycles. The following instructions:

```
lw   x1, 0(x10)       # misses, 20 cycles
add  x2, x1, x3       # depends on the load
sub  x4, x5, x6       # independent
mul  x7, x8, x9       # independent
xor  x11, x12, x13    # independent
... 16 more independent instructions ...
```

*In-order machine.* The `add` stalls for 20 cycles, and because issue is in order, **everything behind it stalls too** — even the independent instructions. Total: roughly $20 + 21 = 41$ cycles for these 21 instructions, an IPC of about 0.51.

*Out-of-order machine, 4-wide.* The `add` waits, but the 19 independent instructions issue past it, four per cycle:
$$\lceil 19/4 \rceil = 5 \text{ cycles of useful work during the 20-cycle stall} .$$
When the load returns, the `add` and anything depending on it complete. Total: roughly 22 cycles, an IPC of about 0.95 — **nearly twice the throughput**, from the same instructions in the same order.

Two limits are visible even in this favourable example. The window must be **large enough**: covering a 20-cycle miss at 4-wide needs 80 instructions' worth of independent work to fully hide it, and only 19 were available, so most of the stall remains. A 200-cycle DRAM miss ([4.1](04-01-caches-and-locality.md)) would need 800 — far beyond any real ROB, which is why main-memory misses stall even the most aggressive out-of-order machine.

And the independent instructions had to be **findable**. Code that chases pointers — each load's address computed from the previous load's result — offers no independent work at all, and out-of-order execution buys nothing. That is why linked-list traversal is slow on modern hardware in a way its instruction count does not predict, and why cache-friendly data structures matter more than they did in 1990.

## Watch out

- **You might think** out-of-order execution changes the program's results — **but actually** in-order commit guarantees identical architectural state. The reordering is invisible to any correct program, which is [1.1](01-01-isa-contract-stored-program.md)'s contract being honoured by machinery that looks nothing like the contract.
- **You might think** a wider machine gives proportionally more performance — **but actually** sustained IPC on general code is 1–2 regardless of an 8-wide front end, because true dependences, branches and window size bind first. Width past 4 buys very little on most code.
- **You might think** speculation is harmless because nothing commits — **but actually** it is architecturally harmless and *microarchitecturally* observable: speculative loads leave traces in the cache. Spectre and Meltdown read those traces to recover data the speculation should never have exposed, which is [1.1](01-01-isa-contract-stored-program.md)'s abstraction leaking through a side channel.

## One-liner

> Rename away the false dependences that come from having only 32 register names, execute whatever is ready, and commit in order so the machine still looks sequential — which fills stall cycles with independent work, until true dependences, branches, window size and power stop it around IPC 2.

## Problems

**P1 (🟢)** Classify each dependence as RAW, WAR or WAW, and say which survive register renaming.
```
1: lw   x1, 0(x2)
2: add  x3, x1, x4
3: sub  x1, x5, x6
4: or   x7, x1, x8
```

**P2 (🟡)** A 4-wide out-of-order machine runs a loop whose body is 12 instructions with a dependence chain of length 5. (a) Give the minimum cycles per iteration from the chain, and from the width. (b) Which binds? (c) Give the achievable IPC and say what would improve it.

**P3 (🔴, optional)** A load misses to DRAM, costing 200 cycles. The machine is 4-wide with a 192-entry reorder buffer. (a) How many independent instructions would be needed to fully hide the miss? (b) Can the ROB hold them? (c) Explain what actually happens, and why this is the argument for multithreading rather than a wider window.

<details>
<summary>Solutions</summary>

**P1** *Dependences.*

| Pair | Register | Type | Survives renaming? |
|---|---|---|---|
| 1 → 2 | `x1` | **RAW** | **yes** — genuine |
| 2 → 3 | `x1` | **WAR** | no — instruction 2 reads `x1`, 3 writes it |
| 1 → 3 | `x1` | **WAW** | no — both write `x1` |
| 3 → 4 | `x1` | **RAW** | **yes** — genuine |

*After renaming*, instruction 3 writes a fresh physical register rather than reusing `x1`'s:

```
1: lw   p10, 0(p2)
2: add  p11, p10, p4
3: sub  p12, p5, p6      <- independent of 1 and 2 entirely
4: or   p13, p12, p8
```

**Two dependences survive** — $1\to 2$ and $3\to 4$ — and they form two independent chains of length 2. Instructions 3 and 4 can execute while the load in 1 is still outstanding.

This matters here more than usual because instruction 1 is a **load**, which may miss. Without renaming, the WAR and WAW on `x1` would chain instructions 3 and 4 behind a potentially 200-cycle stall for no reason at all. With renaming they proceed immediately. The false dependences were purely an artefact of the compiler reusing `x1`, which it did because there are only 32 names to go around.

**P2** *(a) Two lower bounds.*

**From the dependence chain:** a chain of 5 dependent instructions needs at least 5 cycles, since each must wait for its predecessor (assuming 1-cycle operations and full forwarding):
$$\text{chain bound} = \boxed{5 \text{ cycles}} .$$

**From the issue width:** 12 instructions at 4 per cycle:
$$\text{width bound} = \left\lceil \frac{12}{4} \right\rceil = \boxed{3 \text{ cycles}} .$$

*(b) Which binds.* The **dependence chain**, at 5 cycles — it is the larger of the two bounds. The machine has enough width to issue all 12 instructions in 3 cycles but cannot, because 5 of them must execute strictly one after another.

*(c) Achievable IPC.*
$$\mathrm{IPC} = \frac{12 \text{ instructions}}{5 \text{ cycles}} = \boxed{2.4}$$

Well below the 4-wide peak, and the machine is idle for a meaningful fraction of its issue slots.

*What would improve it.* Not more width — the chain is the constraint, and an 8-wide machine would still take 5 cycles. Three things that would help:

1. **Shorten the chain.** If the chain is an accumulation like `sum += a[i]`, splitting it into several partial sums breaks one length-5 chain into shorter independent ones. This is the standard reduction-splitting transformation, and it is why compilers reassociate floating-point sums only with an explicit flag ([2.3](02-03-floating-point-ieee-754.md) — reassociation changes the result).
2. **Unroll the loop.** Overlapping two iterations gives 24 instructions with two independent 5-chains, so the chain bound stays 5 while the width bound rises to 6 — now width-bound at IPC 4. **Unrolling converts a dependence-bound loop into a width-bound one**, which is the main reason compilers unroll.
3. **Software pipelining**, which overlaps iterations more aggressively still.

The general diagnostic: compare the two bounds. Chain-bound means restructure the computation; width-bound means the machine is saturated and only a wider one helps.

**P3** *(a) Instructions needed to hide a 200-cycle miss.* At 4 instructions per cycle:
$$4 \times 200 = \boxed{800 \text{ independent instructions}} .$$

*(b) Can the ROB hold them?* **No.** The reorder buffer has 192 entries, so at most 192 instructions can be in flight at once — less than a quarter of the 800 needed.

Worse, the ROB fills and then **blocks**. Instructions commit in order, so the missing load sits at the ROB head refusing to retire; every instruction behind it occupies an entry and cannot release it. Once 192 entries are consumed, decode stalls entirely regardless of how much independent work exists further down the stream.

*(c) What actually happens, and the argument for multithreading.* The machine covers the first
$$\frac{192}{4} = 48 \text{ cycles}$$
of the miss with useful work (optimistically, assuming all 192 instructions are independent and ready), then stalls for the remaining $200 - 48 = 152$ cycles with a full ROB and nothing to do. Roughly **three quarters of the miss is not hidden.**

The natural response — build a bigger ROB — fails on cost. The issue queue and rename logic must search all in-flight instructions each cycle for ready operands, so their area and power grow **superlinearly** in window size. Quadrupling the ROB to 768 entries would cost far more than four times the power and would still only cover a single DRAM miss. This is the "power" row of the ILP-limits table, and it is why ROB sizes have grown so slowly.

**Multithreading is the cheaper answer.** Instead of finding 800 independent instructions in *one* thread — which usually do not exist, since a single thread's ILP saturates around 4–8 — keep the state of several threads and issue from whichever is ready. When thread A stalls on a miss, thread B's instructions fill the slots. They are independent **by construction**, requiring no renaming, no scheduling window, and no dependence analysis at all.

The hardware cost is modest: duplicate the architectural registers and program counter per thread, and share everything else. That is **simultaneous multithreading** (Intel's Hyper-Threading), and it typically buys 20–30 percent throughput for about 5 percent extra area — a far better return than widening.

And it points directly at [5.3](05-03-multiprocessors-cache-coherence.md). If independent instruction streams are what fill stalls, the logical next step is to run them on *separate cores*. The memory wall, the ILP wall and the power wall all pushed the same direction, which is why every processor after about 2005 has multiple cores rather than one very wide one.

</details>

## Flashback

**From Lesson 4.4 (storage and I/O):** A 15,000 rpm disk has a 3 ms average seek and transfers at 250 MB/s. (a) Give the average rotational latency and the time to read 32 KiB. (b) What fraction of the access is transfer? (c) At 3 GHz, how many CPU cycles does this access represent?

<details>
<summary>Solution</summary>

*(a) Rotational latency and total time.* One revolution at 15,000 rpm:
$$\frac{60}{15000} = 4.0 \text{ ms}, \qquad \text{average} = \frac{4.0}{2} = \boxed{2.0 \text{ ms}} .$$

Transfer time for 32 KiB at 250 MB/s:
$$\frac{32768}{250\times 10^6} = 1.311\times10^{-4}\text{ s} = 0.131 \text{ ms} .$$

Total:
$$3.0 + 2.0 + 0.131 = \boxed{5.13 \text{ ms}}$$

*(b) Fraction transferring.*
$$\frac{0.131}{5.13} = 0.0256 = \boxed{2.6\%}$$

So 97.4 percent is positioning — better than [4.4](04-04-storage-and-io.md)'s 7200 rpm example (99.4 percent overhead) because this is a faster-spinning enterprise drive reading a larger block, but the character is unchanged: **mechanical delay dominates and the data transfer is nearly free.**

*(c) In CPU cycles.* At 3 GHz, one cycle is $1/3$ ns:
$$5.13 \times 10^{-3} \text{ s} \times 3\times 10^9 \text{ cycles/s} = \boxed{1.54\times 10^7 \text{ cycles}}$$

**Over 15 million cycles.** That number is what connects this lesson to Module 4's conclusion.

Compare it with what out-of-order execution can cover. This lesson's P3 showed a 192-entry ROB covering about 48 cycles of a stall. Against 15 million, the reorder buffer is not merely inadequate — it is off by a factor of roughly 300,000. There is no plausible window size that helps.

That is precisely why disk access is handled by the **operating system** rather than by hardware speculation ([4.4](04-04-storage-and-io.md)): the only sensible response to a stall this long is to abandon the thread entirely, save its state, and run something else. Hardware mechanisms cover nanosecond and microsecond stalls; millisecond stalls need a scheduler. The boundary between the two regimes is exactly where the ROB stops being able to help.

</details>

## Connections

- **Backward:** the WAR and WAW dependences that [3.4](03-04-data-hazards-forwarding-stalls.md) dismissed as harmless become real the moment instructions complete out of order, and renaming is the fix. Speculation extends [3.5](03-05-control-hazards-and-branch-prediction.md)'s prediction from two instructions to hundreds. The whole apparatus exists because of [4.1](04-01-caches-and-locality.md)'s miss penalties, and it drives CPI below 1 in [5.1](05-01-measuring-performance-cpi-amdahl.md)'s iron law.
- **Forward:** [5.3](05-03-multiprocessors-cache-coherence.md) takes the conclusion of P3 — that independent instruction streams are the cheapest source of parallelism — and puts them on separate cores, which creates a new problem this lesson never had: keeping their caches consistent.
- **Sideways:** in-order commit is what preserves [1.1](01-01-isa-contract-stored-program.md)'s ISA abstraction across wildly non-sequential execution, and it is the most impressive engineering in the machine — hundreds of instructions in flight, executing in whatever order operands arrive, and the program cannot tell. That the abstraction holds architecturally but leaks through cache timing is the Spectre class of vulnerabilities, and a reminder that an abstraction guaranteeing *results* need not guarantee *timing*.
