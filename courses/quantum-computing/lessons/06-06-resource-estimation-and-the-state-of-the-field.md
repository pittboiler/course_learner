# Quantum Computing · Lesson 6.6: Resource estimation and the state of the field

> ⏱ ~15 min · Module 6: Complexity and the real machine · Builds on: [5.5 (fault tolerance and the threshold)](05-05-fault-tolerance-the-threshold-and-the-surface-code.md), [4.4 (Shor's factoring algorithm)](04-04-shors-factoring-algorithm.md), [6.5 (dequantization)](06-05-quantum-linear-algebra-and-dequantization.md) · Unlocks: further study

## Why this matters

This is the last lesson, and it is the one that turns everything into numbers.

Resource estimation is the discipline of answering "what machine would this actually need?" It runs down a fixed ladder: an algorithm's logical qubits and $T$-count, the logical error rate the computation demands, the code distance that delivers it, the physical qubits that code costs, and the wall-clock time. Every step is arithmetic you have already seen in [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md), and running the ladder end to end is the single most useful skill in the subject.

Two reasons it is worth the effort.

**It is the only defence against hype, and against reflexive dismissal.** A claim like "1,000 qubits will break RSA" collapses in two lines once you know the ladder. So does "quantum computing will never work," since the same ladder shows the numbers moving in the right direction for reasons that are understood.

**It tells you where progress comes from.** The history is clear and slightly surprising: **algorithmic improvements have delivered more than hardware improvements.** Chemistry estimates fell three to four orders of magnitude in four years from better Hamiltonian representations and better simulation algorithms, while gate fidelities improved by less than one.

## The idea

The ladder, with each rung's input from a previous lesson:

1. **Algorithm → logical resources.** How many logical qubits and how many $T$ or Toffoli gates? From the algorithm's structure ([4.4](04-04-shors-factoring-algorithm.md), [6.2](06-02-hamiltonian-simulation.md)).
2. **Gate count → required logical error rate.** For the computation to finish, the expected number of logical errors must be below 1, so $p_L < 1/\mathcal N$ where $\mathcal N$ is the logical operation count.
3. **Logical error rate → code distance.** Invert the surface-code formula $p_L \approx 0.1(p/p_{\text{th}})^{(d+1)/2}$ ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)).
4. **Distance → physical qubits.** About $2d^2$ physical qubits per logical qubit, times the logical count, times a factor of 1.5 to 2 for magic-state factories and routing.
5. **Depth → wall clock.** A logical operation takes about $d$ surface-code rounds at roughly 1 µs each, so multiply the logical depth by $d$ microseconds, then divide by whatever parallelism the layout allows.

Two numbers dominate, and knowing which they are is most of the skill.

**The physical error rate $p$** enters through the distance, and the distance enters *squared*. So a tenfold improvement in $p$ cuts the qubit count by roughly a factor of 4 ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md) P2) — and also shortens the computation, since fewer rounds per logical gate. Fidelity is the highest-leverage hardware metric, well above qubit count.

**The $T$-count** sets how many magic states you need, hence how much of the chip is factory ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)). It is the highest-leverage *algorithmic* metric, which is why fault-tolerant compilers are $T$-count optimizers.

## The formal version

> **The estimation ladder.** For an algorithm using $Q_L$ logical qubits and $\mathcal N$ logical operations, on hardware with physical error rate $p$ and surface-code threshold $p_{\text{th}}\approx10^{-2}$:
> $$p_L < \frac{1}{\mathcal N}, \qquad d \ge 2\log_{\,p_{\text{th}}/p}\!\left(\frac{1}{10\,p_L}\right) - 1, \qquad Q_{\text{phys}} \approx \alpha\cdot Q_L\cdot 2d^2, \qquad T_{\text{wall}} \approx \frac{\text{depth}\times d\times1\,\mu\text{s}}{\text{parallelism}},$$
> where $\alpha\approx1.5$–2 accounts for magic-state factories and routing.

The canonical worked case, and the one number everyone quotes — also on the card as [the canonical resource estimates](../reference.md#the-canonical-resource-estimates):

| rung | Shor on RSA-2048 |
|---|---|
| logical qubits | $\approx 3n \approx 6{,}200$ |
| Toffoli gates | $\approx 0.3n^3 \approx 2.6\times10^9$ |
| required logical error | $\approx10^{-10}$ |
| code distance at $p = 10^{-3}$ | $d \approx 27$ |
| physical per logical | $2d^2 \approx 1{,}458$ |
| **physical qubits** | $\approx 20$ million |
| **wall clock** | $\approx 8$ hours |

> **Where the field actually is.** Devices today have $10^2$ to $10^3$ physical qubits at $p\approx10^{-3}$, with early demonstrations of single logical qubits at distance 5 to 7 outperforming their physical constituents. **The gap to Shor is four orders of magnitude in qubit count**, with no logical qubits yet doing useful work.

The platform comparison, restricted to the numbers that enter the ladder:

| platform | qubits (2026) | two-qubit error | gate time | connectivity |
|---|---|---|---|---|
| superconducting | $10^2$–$10^3$ | $\sim10^{-3}$ | 20–400 ns | nearest-neighbour, planar |
| trapped ion | $10$–$10^2$ | $\sim10^{-3}$ | 10–100 µs | all-to-all within a trap |
| neutral atom | $10^2$–$10^3$ | $\sim10^{-2}$ | $\sim1$ µs | reconfigurable |
| photonic | varies | high | ns | measurement-based |

In words: superconducting wins on speed, ions on fidelity and connectivity, atoms on qubit count and flexibility. **No platform leads on all three of fidelity, count, and speed**, and the ladder needs all three — which is why the field has not consolidated.

> **The history of estimates, which is the encouraging part.**

| application | early estimate | current estimate | source of improvement |
|---|---|---|---|
| Shor, RSA-2048 | $10^9$ physical qubits, months (2012) | $2\times10^7$, 8 hours (2019) | better modular arithmetic, approximate QFT, better layouts |
| FeMoco ground state | $\sim10^8$ physical qubits, weeks (2017) | $\sim4\times10^6$, days (2021) | tensor hypercontraction, qubitization |

> **The conclusion.** Estimates have fallen by roughly two orders of magnitude per five years, driven mainly by **algorithms and compilation**, not hardware. Extrapolating is unwise, but the direction is consistent and the mechanisms are understood.

## Picture

![A nine-rung ladder with downward arrows, showing the chain from algorithm to machine for Shor on RSA-2048. The rungs read: ALGORITHM, Shor on RSA-2048; logical qubits, about 3n, giving 6,200; Toffoli or T gates, about 0.3 n cubed, giving 2.6 times ten to the ninth; required logical error, one over the gate count, giving ten to the minus ten; code distance, from the formula p-logical approximately 0.1 times p over p-threshold to the power d plus one over two, giving d about 27 at p equals ten to the minus three; physical per logical, about 2 d squared, giving 1,458; plus magic-state factories for routing and distillation, a factor of about 1.5 to 2; PHYSICAL QUBITS, about 20 million; and wall clock, depth times d rounds times one microsecond, about 8 hours. A closing line notes that today there are about a hundred to a thousand physical qubits at an error rate near ten to the minus three, so the gap is four orders of magnitude.](assets/06-06-fig1.svg)

Read the ladder twice: once downward, to price an algorithm, and once upward, to see what a given machine could run. The upward reading is the more useful one in conversation — given 1,000 physical qubits at $p = 10^{-3}$, you get at most a couple of distance-7 logical qubits, which supports no algorithm in this course.

## Worked examples

**Example 1 — audit a vendor claim.**

*The claim.* "Our 1,000-physical-qubit machine, at a two-qubit error rate of $10^{-3}$, will break RSA-2048 within five years."

*Run the ladder upward.* At $p = 10^{-3}$ and a target logical error rate of $10^{-10}$, the required distance is $d \approx 19$ to 27 ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md) Example 1). Take $d = 19$, the most generous reading: $2d^2 = 722$ physical qubits per logical qubit. So 1,000 physical qubits buys

$$\left\lfloor\frac{1000}{722}\right\rfloor = 1 \text{ logical qubit.}$$

*What Shor needs.* 6,200 logical qubits. The machine is short by a factor of about 6,000 in logical qubits, or

$$\frac{2\times10^7}{10^3} = 2\times10^4$$

in physical qubits.

*The verdict.* The claim is wrong by four orders of magnitude in qubit count, and no plausible five-year trajectory closes it — qubit counts have been roughly doubling every one to two years, so $2\times10^4$ takes 14 to 28 years at that rate, assuming fidelity holds up as systems grow, which historically it does not.

*The two assumptions the estimate is most sensitive to.*

1. **The physical error rate.** At $p = 10^{-4}$ instead of $10^{-3}$, $d$ drops to about 9–13, so $2d^2$ drops to 162–338 and the total falls from 20 million to perhaps 3 million. A single order of magnitude in fidelity is worth a factor of 4 to 6 in the whole machine.
2. **The $T$-count and the arithmetic layout.** The Toffoli count $0.3n^3$ reflects a particular modular-multiplication circuit. Better circuits have cut this repeatedly, and a further tenfold reduction would cut both the required $p_L$ (fewer operations) and the wall clock.

**The honest verdict on the claim: no, and not close.** The honest verdict on the field: the estimate has fallen fifty-fold in a decade for reasons that are understood, so "never" is as unsupported as "five years."

**Example 2 — the checklist, applied to everything in Module 6.**

Five questions to ask of any quantum computing claim. Each one is a lesson in this module.

1. **What is the task, precisely, and does anyone want it?** ([6.3](06-03-sampling-advantage-and-verification.md)) Sampling from a random circuit's output is hard and useless. Factoring is hard and useful. The difference is not a detail.
2. **What is the classical baseline, computed by someone motivated to make it fast?** ([6.3](06-03-sampling-advantage-and-verification.md), [6.5](06-05-quantum-linear-algebra-and-dequantization.md)) Every advantage claim narrowed when the classical side was taken seriously, and dequantization is what happens when the comparison is levelled.
3. **What access and interfaces are assumed?** ([6.5](06-05-quantum-linear-algebra-and-dequantization.md)) QRAM, oracles, state preparation, expectation-value-only output. Grant the classical side the same.
4. **Are the quoted qubits logical or physical?** ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)) The conversion factor is $10^3$ or more at today's error rates, and quoting logical counts without it is the most common way estimates get misreported.
5. **What is the error rate, and where does the result sit relative to threshold?** ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)) Below threshold, more qubits help exponentially. Above it, they hurt.

Applying the checklist across Module 6:

| claim | verdict |
|---|---|
| quantum supremacy via random circuits ([6.3](06-03-sampling-advantage-and-verification.md)) | real physics, no computation, advantage repeatedly narrowed |
| VQE for chemistry ([6.4](06-04-variational-algorithms-vqe-and-qaoa.md)) | runs today, blocked by $1/\epsilon^2$ shots and barren plateaus |
| QAOA for optimization ([6.4](06-04-variational-algorithms-vqe-and-qaoa.md)) | no instance beats the best classical method |
| quantum machine learning on classical data ([6.5](06-05-quantum-linear-algebra-and-dequantization.md)) | largely dequantized |
| Shor on RSA ([4.4](04-04-shors-factoring-algorithm.md)) | genuine exponential speedup, needs $2\times10^7$ qubits |
| Hamiltonian simulation ([6.2](06-02-hamiltonian-simulation.md)) | genuine exponential speedup, needs $\sim4\times10^6$ qubits |

**Two rows carry genuine exponential speedups and both need fault tolerance.** That is the state of the field, and it is neither the hype nor the dismissal. The machines will do something remarkable when they arrive, the list of what is currently known to be remarkable is short and specific, and the arrival date is set by an error rate rather than by a qubit count.

## Watch out

- You might think qubit count is the headline number. It is a *consequence* of the error rate and the $T$-count, both of which enter more steeply. A machine with 1,000 qubits at $p = 10^{-5}$ is far more capable than one with 10,000 at $p = 10^{-2}$, which is above threshold and can do nothing at all.
- You might think logical and physical qubits differ by a small factor. They differ by $10^3$ or more at today's error rates, and the factor grows as the required logical error rate falls. Always ask which is being quoted.
- You might think resource estimates are stable. They have fallen by two orders of magnitude per five years, mostly from algorithmic work. An estimate more than three years old is probably pessimistic by a large factor — which cuts against both the doomsayers and anyone using an old estimate to claim a near-term threat.
- You might think a quantum computer will be a general accelerator. Everything in this course says otherwise: the exponential speedups are the abelian hidden subgroup family and quantum simulation, plus a quadratic on search that may not survive the fault-tolerance overhead ([6.1](06-01-bqp-and-the-complexity-landscape.md)). A useful quantum computer will be a **special-purpose coprocessor** for a short list of problems.

## One-liner

> Every estimate runs one ladder — logical qubits, $T$-count, required logical error, code distance, physical qubits, wall clock — and the two rungs that dominate are the physical error rate and the $T$-count, not the qubit count anyone quotes.

## Problems

**P1 (🟢)** A quantum algorithm needs 200 logical qubits and $10^{7}$ logical operations. At a physical error rate $p = 10^{-3}$ with surface-code threshold $10^{-2}$: compute the required logical error rate, the smallest odd code distance that achieves it, the physical qubits per logical qubit, and the total physical qubit count including a factor of 1.7 for factories and routing.

**P2 (🟡)** Redo P1 at $p = 10^{-4}$ and at $p = 10^{-2.5}$. (a) Tabulate the distance, the qubits per logical qubit, and the total in all three cases. (b) State how much a tenfold fidelity improvement is worth in total qubits. (c) Explain what happens to the estimate as $p$ approaches $10^{-2}$, and why this makes threshold the most important number in the field.

**P3 (🔴, optional)** A vendor claims their 1,000-physical-qubit machine at $p = 10^{-3}$ will break RSA-2048 within five years. (a) Run the ladder upward to find how many logical qubits the machine supports at the distance Shor requires, and compare with the 6,200 needed. (b) Estimate the wall clock for Shor on a machine that *did* have enough qubits, using $2.6\times10^9$ Toffolis, $d$ rounds per logical gate at 1 µs per round, and a parallelism factor of $10^3$. (c) Name the two assumptions your estimate is most sensitive to, give the verdict on the claim, and state in one paragraph why "never" is also unsupported.

<details>
<summary>Solutions</summary>

**P1** *Required logical error rate.* For $\mathcal N = 10^7$ logical operations to complete without error,

$$p_L < \frac{1}{\mathcal N} = 10^{-7}.$$

*Code distance.* With $p/p_{\text{th}} = 10^{-3}/10^{-2} = 0.1$, the formula is $p_L\approx0.1\times(0.1)^{(d+1)/2} = 10^{-1-(d+1)/2}$. Require it below $10^{-7}$:

$$1 + \frac{d+1}{2} > 7 \implies \frac{d+1}{2} > 6 \implies d > 11,$$

so the smallest odd distance is $d = 13$. (Check: $p_L = 10^{-1-7} = 10^{-8} < 10^{-7}$. ✓ And $d=11$ gives $10^{-7}$, exactly at the boundary — take $d = 13$ for margin.)

*Physical per logical.* $2d^2 = 2\times169 = 338$.

*Total.*

$$Q_{\text{phys}} \approx 1.7\times200\times338 = 1.15\times10^5 \approx 115{,}000 \text{ physical qubits.}$$

**P2**

(a) The distance formula depends on $p$ through $r = p/p_{\text{th}}$, with $p_L \approx 0.1\,r^{(d+1)/2} < 10^{-7}$.

*At $p = 10^{-4}$*, $r = 0.01$: need $0.1\times10^{-(d+1)} < 10^{-7}$, so $d+1 > 6$, giving $d = 7$.
*At $p = 10^{-2.5} = 3.2\times10^{-3}$*, $r = 0.32$: need $0.1\times(0.32)^{(d+1)/2} < 10^{-7}$, so $(d+1)/2 > 6/\log_{10}(1/0.32) = 6/0.495 = 12.1$, giving $d > 23.2$ and $d = 25$.

| $p$ | $d$ | $2d^2$ | total ($\times1.7\times200$) |
|---|---|---|---|
| $10^{-4}$ | 7 | 98 | 33,300 |
| $10^{-3}$ | 13 | 338 | 115,000 |
| $10^{-2.5}$ | 25 | 1,250 | 425,000 |

(b) From $10^{-3}$ to $10^{-4}$: the total falls from 115,000 to 33,300, a factor of

$$\frac{115{,}000}{33{,}300} \approx 3.5.$$

So **a tenfold fidelity improvement is worth about 3.5-fold in qubits** — and it also shortens the computation, since the number of surface-code rounds per logical gate scales with $d$, which fell from 13 to 7.

(c) As $p\to p_{\text{th}} = 10^{-2}$, the base $r = p/p_{\text{th}}\to1$, so $\log(1/r)\to0$ and the required distance

$$d \approx \frac{2\log(1/10p_L)}{\log(1/r)} \longrightarrow \infty.$$

The qubit count, $\propto d^2$, **diverges**. At $p = 10^{-2.5}$ it is already 425,000 for a small algorithm; at $p = 5\times10^{-3}$ it would be in the millions; at $p = 10^{-2}$ no finite distance works, and above threshold the scheme fails entirely ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)).

That divergence is why the threshold is the field's most important number. **It is not a soft target but an asymptote**: distance from threshold, measured logarithmically, is what sets every overhead in the machine. A device at $p = 0.9\,p_{\text{th}}$ is not "almost good enough"; it is unusable. This is also why the first experimental demonstration of a logical qubit beating its physical constituents was treated as a milestone — it was evidence of being on the correct side of an asymptote, not merely of an incremental improvement.

**P3**

(a) *The ladder upward.* Shor needs $p_L\approx10^{-10}$, which at $p = 10^{-3}$ requires $d\approx19$ at minimum (from $1 + (d+1)/2 > 10$, so $d > 17$). Then $2d^2 = 722$ physical qubits per logical qubit, so

$$\left\lfloor\frac{1000}{722}\right\rfloor = 1 \text{ logical qubit.}$$

Against the 6,200 required, the machine is short by a factor of **6,200 in logical qubits**, equivalently $2\times10^7/10^3 = 2\times10^4$ in physical qubits — four orders of magnitude.

(b) *Wall clock, granting enough qubits.* Take $d = 27$ for margin, so each logical gate takes about $d = 27$ surface-code rounds at 1 µs, i.e. 27 µs. With $2.6\times10^9$ Toffolis (each itself several logical operations, but absorb that into the parallelism factor) and a parallelism factor of $10^3$:

$$T_{\text{wall}} \approx \frac{2.6\times10^9\times27\times10^{-6}\ \text{s}}{10^3} = \frac{7.0\times10^4}{10^3}\ \text{s} = 70\ \text{s}.$$

That is optimistic — the published figure is about 8 hours, the difference being that magic-state distillation is the serial bottleneck rather than the Toffolis themselves, and that real layouts achieve far less than $10^3$ effective parallelism on the $T$-gate pipeline. The lesson: **the wall clock is set by the magic-state factory's throughput, not by the gate count divided by parallelism.**

(c) *The two sensitive assumptions.*

1. **The physical error rate $p$.** It sets $d$, and $d$ enters the qubit count squared. Moving $p$ from $10^{-3}$ to $10^{-4}$ takes the estimate from 20 million to perhaps 3 million; moving it to $3\times10^{-3}$ takes it to well over 100 million. Every other number is secondary.
2. **The $T$-count and arithmetic layout.** The $0.3n^3$ Toffoli figure reflects one particular modular-multiplication circuit, and this figure has been reduced repeatedly. A further tenfold reduction would cut the required $p_L$, hence $d$, hence the qubit count quadratically, as well as the runtime.

*The verdict.* **The claim is false by four orders of magnitude and no plausible five-year trajectory closes it.** Qubit counts have roughly doubled every one to two years, so reaching $2\times10^7$ from $10^3$ takes 14 to 28 doublings, i.e. 14 to 56 years at historical rates — and historically fidelity degrades as systems scale, which would push $d$ up and the target further away.

*Why "never" is also unsupported.* The estimate for this exact computation fell from about $10^9$ physical qubits in 2012 to $2\times10^7$ in 2019 — a factor of 50 in seven years — and the improvement came from understood, ongoing work: better modular arithmetic, the approximate QFT ([4.1](04-01-the-quantum-fourier-transform.md) P2), tighter surface-code layouts, cheaper magic-state protocols. The chemistry estimates fell by a similar factor over a shorter period ([6.2](06-02-hamiltonian-simulation.md)). None of those lines of work is exhausted, and none depends on a physics breakthrough. Meanwhile the hardware side has a clear engineering target — stay below threshold while scaling — and has demonstrated logical qubits outperforming physical ones, which is the qualitative milestone that matters.

So the defensible position is neither date nor denial: **the requirements are understood, they are falling steadily for known reasons, and the binding constraint is the physical error rate rather than the qubit count anyone quotes.** Anyone naming a year is guessing; anyone saying "impossible" is ignoring a fifty-fold improvement that happened in public.

</details>

## Connections

- **Backward:** every rung of the ladder is a previous lesson — logical resources from [4.4](04-04-shors-factoring-algorithm.md) and [6.2](06-02-hamiltonian-simulation.md), the $T$-count discipline from [1.6](01-06-universal-gate-sets-and-circuit-synthesis.md), the error budget from [5.1](05-01-quantum-channels-and-decoherence.md), and the distance-to-qubits conversion from [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md). The auditing checklist collects the lessons of [6.3](06-03-sampling-advantage-and-verification.md) and [6.5](06-05-quantum-linear-algebra-and-dequantization.md).
- **Forward:** the natural continuations are the physics of the devices — superconducting qubits build on [`condensed-matter`](../../condensed-matter/syllabus.md), photonic ones on [`photonics-quantum-optics`](../../photonics-quantum-optics/syllabus.md) — and the migration this course's headline algorithm forces, in [`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md).
- **Sideways:** the discipline of pricing a computation in its real bottleneck rather than its asymptotic complexity is the same habit that separates useful from useless algorithm analysis generally ([`algorithms` 1.1](../../algorithms/lessons/01-01-asymptotic-notation.md)), and the "design under constraint" reasoning here is the back-of-the-envelope estimation that [`distributed-systems`](../../distributed-systems/syllabus.md) applies to capacity planning.
