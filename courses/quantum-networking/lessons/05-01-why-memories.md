# Quantum Networking · Lesson 5.1: Why memories

> ⏱ ~15 min · Module 5: Memories and repeaters · Builds on: [1.4 The loss wall](01-04-the-loss-wall.md), [1.2 The stack in one picture](01-02-the-stack-in-one-picture.md), [`quantum-computing` 2.4 P3](../../quantum-computing/lessons/02-04-quantum-teleportation.md) · Unlocks: [5.2](05-02-room-temperature-quantum-memories.md), [5.4](05-04-repeater-chains-and-distillation.md)

## Why this matters

[1.4](01-04-the-loss-wall.md) said the way past the loss wall is to cut a long link into short ones and swap them together. That plan has a hidden assumption: the short links must all be ready **at the same time**. Each one succeeds only by luck, so without storage you wait for every coin to land heads in the same toss. A quantum memory turns that $1/p^2$ wait into roughly $3/(2p)$, and that change is the whole case for building memories. This lesson derives the payoff, then the catch that decides which memories are good enough: light is slow compared with a memory's lifetime.

## The idea

Two neighbouring links each try once per round and succeed with probability $p$, say 1 in 100. You need both before the middle node can swap them ([QC 2.4 P3](../../quantum-computing/lessons/02-04-quantum-teleportation.md)).

**No memory.** A success that is not matched in the same round is wasted, because the photon has nowhere to wait. Both must succeed together, with odds $p^2$ = 1 in 10,000 per round.

**With memory.** Whichever link succeeds first **parks** its qubit and stops trying. The other keeps going until it succeeds. You wait for the first success (about $1/(2p)$ rounds, since two links are trying), then for the second (about $1/p$ more). Total: about $1.5/p$ = 150 rounds instead of 10,000.

That is a change of **scaling**, not of a constant. The rarer success is, the more a memory buys.

The catch: a "round" is not instant. A link learns it succeeded only when the [herald](../reference.md#heralding) arrives, and the herald travels through fiber at about 5 µs per km. So a memory must hold its qubit through one herald trip **plus** all the rounds spent waiting for its neighbour. That is often milliseconds, against coherence times measured in microseconds for some platforms.

## The formal version

**Model.** Links 1 and 2 attempt in synchronized rounds. Each round, each succeeds independently with probability $p$. Let $N_1,N_2$ be the rounds until each first succeeds. Each is geometric: $P(N=k)=(1-p)^{k-1}p$, $E[N]=1/p$.

**No memory.** Success requires both in one round, probability $p^2$, so

$$E[N_\text{no mem}]=\frac{1}{p^2}.$$

In words: the rounds needed grow as the square of the odds against one link.

**With memory.** You are done at round $\max(N_1,N_2)$. Use $\max=N_1+N_2-\min$. The minimum is the first round in which *at least one* link succeeds, which happens with probability $q=1-(1-p)^2=p(2-p)$, so $E[\min]=1/(p(2-p))$. Then

$$E[\max(N_1,N_2)]=\frac{2}{p}-\frac{1}{p(2-p)}=\frac{3-2p}{p(2-p)}\approx\frac{3}{2p}.$$

In words: about $1/(2p)$ rounds until either link succeeds, then a fresh $1/p$ wait for the other (geometrics are memoryless, so the laggard has no "progress" to lose).

**Speedup.**

$$\frac{E[N_\text{no mem}]}{E[\max]}=\frac{2-p}{p(3-2p)}\approx\frac{2}{3p}.$$

In words: at $p=0.01$ it is 10,000 rounds against 149.75, a factor of 67. See [waiting time with and without memory](../reference.md#waiting-time-with-and-without-memory). A direct Monte Carlo of the round-by-round protocol reproduces both formulas to within its sampling error (green circles in the figure).

**How long the early link waits.** The parked qubit idles for $\max-\min$ rounds, with mean

$$E[\max-\min]=\frac{2(1-p)}{p(2-p)}\approx\frac{1}{p}.$$

**Rounds take time.** In the standard elementary link of length $L$, memory nodes sit at both ends and a detection station sits in the middle. Each photon travels $L/2$ to the station and the herald travels $L/2$ back, so with $v\approx2\times10^8$ m/s,

$$t_h=\frac{L}{v}.$$

In words: a node cannot know whether its last attempt worked until one full link-length of light time has passed. See [heralding round-trip time](../reference.md#heralding-round-trip-time). (In the source-at-one-end geometry of [1.2](01-02-the-stack-in-one-picture.md), the round trip is $2L/v$.)

| Link $L$ | $t_h$ (midpoint station) | Max rounds per second for one memory |
|---|---|---|
| 10 km | 50 µs | 20,000 |
| 50 km | 250 µs | 4,000 |

A memory that must wait for each herald before reusing itself can attempt at most $1/t_h$ times per second. And the first-ready memory must hold for roughly

$$t_\text{store}\approx t_h\left(1+\frac1p\right).$$

At 50 km with $p=0.01$ that is 25 ms of storage, and both links are ready after $149.75\,t_h\approx37$ ms on average. Without memory the same wait would be $10^4\,t_h=2.5$ s.

**Multiplexing.** If each round fires $M$ independent modes (time bins, frequencies, spatial channels) into a multimode memory, a round succeeds with $p_M=1-(1-p)^M\approx Mp$. With $p=0.01$ and $M=100$, $p_M=0.634$ and both links are ready in about 2 rounds. Multiplexing cures the slow attempt rate; it does **not** shorten the herald trip, so storage must still exceed $t_h$. See [memory multiplexing](../reference.md#memory-multiplexing).

## Picture

![Log-log plot of expected attempts until two links are both ready, against success probability per attempt from 0.001 to 1. A red line for no memory falls as 1 over p squared, from a million at p equals 0.001. A blue line for memories falls as about 3 over 2p, just above a dashed line for one link alone, 1 over p. An arrow at p equals 0.01 marks 67 times fewer attempts with memory. Green circles from a Monte Carlo simulation sit on both lines.](assets/05-01-fig1.svg)

The red line has slope $-2$, the blue slope $-1$. Their gap widens by a factor of ten for every factor of ten drop in $p$, and lossier links mean smaller $p$. The blue line sits only a factor 1.5 above "one link alone": with memories, two links cost barely more than one.

## Worked examples

**Example 1 (the scaling at p = 0.02).** No memory: $1/p^2=2{,}500$ rounds. With memory:

$$E[\max]=\frac{3-0.04}{0.02\times1.98}=\frac{2.96}{0.0396}=74.75.$$

Speedup $2500/74.75=33.4$, close to $2/(3p)=33.3$. Decomposed: the first success comes after $E[\min]=1/(0.02\times1.98)=25.25$ rounds, then the parked qubit idles $2(0.98)/0.0396=49.49$ rounds, about $1/p=50$. Check: $25.25+49.49=74.74$.

**Example 2 (what a 2.6 µs memory can do today).** Qunnect's room-temperature memory has a coherence time of 2.6 µs (2025 paper). Two uses:

*As a repeater memory.* Holding through even one herald needs $t_h=L/v\le2.6$ µs, so $L\le v\times2.6\ \mu\text{s}=520$ m with a midpoint station, before any waiting rounds. [1.2](01-02-the-stack-in-one-picture.md) found 260 m for the one-end geometry; either way, not a metro link.

*As a synchronizer.* At one node, two heralded sources each deliver a photon with probability $p=0.1$ per 100 ns clock slot (invented settings), and a local operation needs both photons in the same slot. No memory: $1/p^2=100$ slots, 10 µs. With a buffer that parks the early photon: $14.74$ slots, 1.47 µs, a speedup of 6.8. The mean hold is $9.47$ slots, 0.95 µs, comfortably inside 2.6 µs. The hold exceeds 26 slots (2.6 µs) only about 6% of the time. No light has to cross a city, so microseconds suffice. See [memory-assisted synchronization](../reference.md#memory-assisted-synchronization).

## Watch out

- **You might think a memory raises each link's success probability, but actually it changes nothing per attempt.** $p$ is still set by loss and detectors. The memory only removes the requirement that independent successes coincide.
- **You might think the $3/(2p)$ formula needs only "some" memory, but actually it assumes storage lasts as long as needed.** A memory with [coherence time](../reference.md#coherence-time) $\tau$ must either discard qubits older than a cutoff (falling back toward $1/p^2$) or deliver them with decayed fidelity. The useful regime is $\tau\gg t_h/p$.
- **You might think faster electronics raise the attempt rate, but actually light sets it.** A single-mode memory waiting on heralds attempts at most $v/L$ times per second. Only more modes per round beat that.

## Business lens

Memory performance decides whether a product sells **links** or a **network**. Without storage, chaining links costs $1/p^2$ and collapses; with it, two links cost about 1.5 times one. That is the step from point-to-point entanglement to a [quantum repeater](../reference.md#quantum-repeater).

Ask three numbers of any memory claim: storage time against $t_h(1+1/p)$ for the customer's link length, efficiency, and number of modes. Qunnect's 2025 memory scores honestly as a **local** device today. Its 2.6 µs coherence covers a 520 m heralded link at best, so it cannot yet wait for metro heralds. It could in principle buffer photons at one node, but its 5.2% internal efficiency for source photons means most parked photons are lost. Its advantages are real: room temperature, and the same rubidium as the source, so no frequency conversion.

This is where platform bets diverge ([5.5](05-05-repeater-generations-and-platform-bets.md)). Competitors are buying into memory too: IonQ completed its acquisition of Lightsynq (memory-based photonic interconnects) in June 2025, and Welinq builds cold-atom memories. A sharp line for a meeting: "Every repeater roadmap is a memory roadmap; ask for storage time divided by herald time."

## One-liner

> Memories turn the $1/p^2$ wait for two lucky links into about $3/(2p)$, but only if they outlast the herald's light-speed round trip plus about $1/p$ rounds of waiting.

## Problems

**P1 (🟢)** Two elementary links each succeed with $p=0.05$ per round. (a) Expected rounds until both are ready without memory. (b) With ideal memories. (c) The speedup, and how close $2/(3p)$ gets to it.

**P2 (🟡)** A 20 km elementary link has its detection station at the midpoint, fiber light speed $v=2\times10^8$ m/s, and a single-mode memory at each end that attempts once per herald round trip. Each link succeeds with $p=0.01$ per attempt. Model the storage needed by the first-ready link as $t_\text{store}=t_h(1+1/p)$. (a) Find $t_h$ and the maximum attempt rate. (b) Find $t_\text{store}$. (c) Find the mean time until both neighbouring links are ready.

**P3 (🔴, practical)** A startup's press release says its memory, with a 10 µs coherence time, "enables a 100 km quantum repeater." Assume the natural design: one repeater node in the middle, two 50 km elementary links, each with a midpoint detection station, $v=2\times10^8$ m/s. Is the claim credible as stated? Give a verdict, the one number that decides it, and the question you would ask the startup, in three sentences or fewer.

<details>
<summary>Solutions</summary>

**P1** (a) $1/p^2=1/0.0025=400$ rounds.

(b) $E[\max]=\dfrac{3-0.1}{0.05\times1.95}=\dfrac{2.9}{0.0975}=29.74$ rounds.

(c) Speedup $400/29.74=13.4$. The approximation gives $2/(3\times0.05)=13.3$, within 1%.

---

**P2** (a) $t_h=L/v=2\times10^4/(2\times10^8)=10^{-4}$ s $=100$ µs. Maximum attempt rate $1/t_h=10^4$ attempts/s.

(b) $t_\text{store}=100\ \mu\text{s}\times(1+100)=10.1$ ms. (The exact mean idle time, $2(1-p)/(p(2-p))=99.5$ rounds, gives 10.05 ms; same answer.) That is about 3,900 times Qunnect's 2.6 µs.

(c) $E[\max]=\dfrac{3-0.02}{0.01\times1.99}=149.75$ rounds, times 100 µs $=14.975$ ms, about 15 ms.

---

**P3** *(practical)*

**Accept:** any answer that rejects the claim as stated because one herald round trip already exceeds the coherence time, gives that time (250 µs) or the ratio (25×), and asks a question that could rescue the claim (multiplexing or a different architecture, what "enables" means, or demonstrated storage time).

**Must hit:**

- Each 50 km elementary link has $t_h=L/v=5\times10^4/(2\times10^8)=250$ µs, which is 25 times the 10 µs coherence time, before any waiting rounds.
- Waiting for the neighbouring link adds about $1/p$ more round trips, so the real requirement is milliseconds. Multiplexing raises the attempt rate but cannot shorten the herald trip.
- A 10 µs memory can wait for a herald only over a link of $v\tau=2$ km (midpoint geometry).

**Model answer:** "Not as stated: a 50 km link's herald takes 250 µs to return, 25 times longer than the memory lasts, and waiting for the other link adds milliseconds more. A 10 µs memory can serve heralded links of about 2 km, or local synchronization. What storage time and efficiency have you demonstrated, and does your 100 km architecture avoid waiting for heralds?"

</details>

## Flashback

**From Lesson [4.2](04-02-compensation-as-a-control-loop.md) (Compensation as a control loop):** Use the drift model where each correction fully resets the residual rotation and, averaged over drift, the pair a time $t$ later is Werner with $p=e^{-2Dt}$. A customer's SLA asks for worst-case uptime of at least 99% and an expected fidelity of at least 0.99 just before each correction. Your compensator's worst-case cycle switches the photons out for 400 ms, and the customer's fiber has $D=1.5\times10^{-4}$ rad²/s. (a) What is the shortest cadence $T_c$ the uptime clause allows? (b) What is the longest cadence the fidelity clause allows? Is there a cadence that meets both? (c) In summer the drift constant doubles. Is there still a cadence that meets both clauses, and if not, how short must the worst-case cycle become to restore one?

<details>
<summary>Solution</summary>

(a) Worst-case uptime is $1-t_{\max}/T_c\ge0.99$, so $T_c\ge0.4/0.01=40$ s.

(b) The fidelity clause needs $p=e^{-2DT}\ge(4\times0.99-1)/3=0.98667$, so $2DT\le\ln(1/0.98667)=0.01342$:

$$T\le\frac{0.01342}{2\times1.5\times10^{-4}}=44.7\text{ s}.$$

(The short-time rule $2(1-F_{th})/(3D)=44.4$ s agrees.) So any cadence from 40 s to 44.7 s meets both clauses: a narrow window, but a real one.

(c) Doubling $D$ halves the fidelity limit to $T\le22.4$ s, below the 40 s uptime floor, so no cadence works. At $T_c=22.4$ s the uptime clause needs $t_{\max}\le0.01\times22.4=0.224$ s, so the worst-case cycle must shrink from 400 ms to about 220 ms. (The other levers are a looser SLA on either clause.)

</details>

## Connections

- **Backward:** [1.4](01-04-the-loss-wall.md) proposed cutting a link into segments; this lesson prices the coordination. The herald and its round trip come from [1.2](01-02-the-stack-in-one-picture.md), and the swap that consumes the two ready links is [QC 2.4 P3](../../quantum-computing/lessons/02-04-quantum-teleportation.md).
- **Forward:** [5.2](05-02-room-temperature-quantum-memories.md) opens the memory itself and its [figures of merit](../reference.md#quantum-memory-figures-of-merit). [5.3](05-03-bell-state-measurement-and-swapping.md) does the swap with noisy pairs, [5.4](05-04-repeater-chains-and-distillation.md) nests this waiting over many links, and [5.5](05-05-repeater-generations-and-platform-bets.md) compares platforms by how they solve it. [6.2](06-02-the-network-stack-and-timing.md) makes the herald a link-layer message.
- **Sideways:** the "laggard has no progress to lose" step is the memorylessness of the geometric distribution, the discrete cousin of the exponential in [operations-research 4.1](../../operations-research/lessons/04-01-poisson-arrivals-littles-law.md). The max of two waits is the same structure as a barrier in parallel computing: everyone waits for the slowest worker.
