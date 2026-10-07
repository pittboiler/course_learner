# Quantum Networking · Lesson 5.4: Repeater chains and distillation

> ⏱ ~15 min · Module 5: Memories and repeaters · Builds on: [5.1 Why memories](05-01-why-memories.md), [5.3 Bell-state measurement and swapping](05-03-bell-state-measurement-and-swapping.md), [1.3 Fidelity and rate](01-03-fidelity-and-rate.md) · Unlocks: [5.5](05-05-repeater-generations-and-platform-bets.md), [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md)

## Why this matters

A repeater chain is sold as the cure for the loss wall ([1.4](01-04-the-loss-wall.md)): cut a long fiber into short links, entangle each, swap them together. It fixes the **rate** problem. It makes the **fidelity** problem worse, because every swap multiplies noise. The repair is **distillation**: sacrifice pairs to purify the survivors. This lesson tracks both numbers along a chain, so you can say how many hops a given link quality supports and when spending pairs on purity pays.

## The idea

Recall the bag picture from [1.3](01-03-fidelity-and-rate.md): a delivered pair is a perfect Bell pair with probability $p$ and coin-flip junk otherwise. [5.3](05-03-bell-state-measurement-and-swapping.md) showed that swapping two such pairs gives a good pair only if *both* inputs were good, so the good fractions multiply. Join 8 links and the good fraction is $p^8$. Doubling the chain *squares* it. Short hops beat loss and lose to noise.

Distillation is error detection without looking at the data. Alice and Bob hold two noisy pairs. Each runs a CNOT from their half of pair 1 onto their half of pair 2, then measures their half of pair 2 in H/V. The CNOTs copy pair 1's **parity** (do Alice's and Bob's bits agree?) onto pair 2. If exactly one pair carries a bit-flip error, the two measured bits disagree, and they discard. If they agree, pair 1 survives, cleaner than before. Pair 2 is always spent. So distillation costs at least two pairs per output, more when it fails, and it needs a phone call: Alice and Bob must compare bits before they know whether to keep anything.

## The formal version

**Nested chain.** Split a distance $L$ into $2^n$ elementary links of length $L_0=L/2^n$, each delivering a [Werner state](../reference.md#werner-state) with good fraction $p$. Join neighbours pairwise in $n$ nesting levels. With ideal swaps, the [swap fidelity rule](../reference.md#swap-fidelity-rule) $p'=p_1p_2$ applied at every level gives

$$p_\text{end}=p^{2^n},\qquad F_\text{end}=\frac{1+3p^{2^n}}{4}.$$

In words: the end-to-end pair is good only if all $2^n$ links were, so fidelity decays exponentially in the number of links. (Checked with explicit density matrices and Bell-state projections for 2, 4 and 8 links.)

**Rate.** Each link succeeds per attempt with probability $p_0$; each swap succeeds with probability $P_s$ ($\le\tfrac12$ for linear optics, [5.3](05-03-bell-state-measurement-and-swapping.md)). At every level, two halves must both be ready, which with memories costs about $\tfrac32$ times one half ([5.1](05-01-why-memories.md)), and a failed swap sends both halves back. A standard back-of-envelope estimate of elementary attempts per end-to-end pair is

$$T\approx\frac{1}{p_0}\left(\frac{3}{2P_s}\right)^{n}.$$

In words: a constant cost factor per nesting level. Since $n=\log_2(L/L_0)$, this is $(L/L_0)^{\log_2(3/2P_s)}$, a **power** of distance, while direct transmission costs $1/\eta$, which is **exponential** in distance. See [quantum repeater](../reference.md#quantum-repeater).

**Distillation (BBPSSW).** Bennett, Brassard, Popescu, Schumacher, Smolin and Wootters (1996) gave the recurrence protocol described above. Write the Werner state in the Bell basis: weight $F$ on $|\Phi^+\rangle$ and $q=(1-F)/3$ on each of $|\Phi^-\rangle,|\Psi^+\rangle,|\Psi^-\rangle$. The bilateral CNOT passes the check when both pairs are $\Phi$-type or both $\Psi$-type, so the success probability is $(F+q)^2+(2q)^2$. Pair 1 comes out as $|\Phi^+\rangle$ from $(\Phi^+,\Phi^+)$ or $(\Phi^-,\Phi^-)$, because phase errors cancel in pairs. Hence

$$P_\text{succ}=F^2+\tfrac23F(1-F)+\tfrac59(1-F)^2,$$

$$F'=\frac{F^2+\left(\frac{1-F}{3}\right)^2}{P_\text{succ}}.$$

In words: the check catches single bit-flip errors, and the output fidelity is the surviving good weight over everything that passed. See [BBPSSW recurrence](../reference.md#bbpssw-recurrence). The output is not Werner (bit-flip and phase-flip weights differ), so the protocol **twirls** it (random correlated rotations on both sides) back to Werner form before the next round. That keeps $F'$ and resets the noise to white. Both formulas check against the explicit four-qubit density matrix, CNOTs and projection.

**Fixed points.** Substituting shows $F'=F$ at $F=\tfrac12$ and $F=1$. Above $\tfrac12$ each round raises $F$ toward 1; below it each round makes things worse. In words: distillation amplifies entanglement that exists ([1.3](01-03-fidelity-and-rate.md): Werner pairs are entangled iff $F>\tfrac12$) and cannot create it. With imperfect local gates the upper fixed point drops below 1. The DEJMPS protocol (Deutsch and coauthors, 1996) converges in fewer rounds; this course only names it.

**Cost table, starting from $F=0.80$.** Expected input pairs per output after $k$ rounds is $N_k=2N_{k-1}/P_\text{succ}$:

| Rounds $k$ | $F$ | $P_\text{succ}$ that round | Pairs per output |
|---|---|---|---|
| 0 | 0.800 | — | 1 |
| 1 | 0.838 | 0.769 | 2.60 |
| 2 | 0.874 | 0.807 | 6.44 |
| 3 | 0.905 | 0.846 | 15.2 |
| 4 | 0.930 | 0.881 | 34.6 |

In words: fidelity creeps up by a few hundredths per round while cost more than doubles. See [entanglement distillation](../reference.md#entanglement-distillation).

## Picture

![A square plot with input fidelity F from 0.4 to 1 on the horizontal axis. A solid blue curve shows the BBPSSW output fidelity; it crosses a dashed diagonal line at F equals one half, marked as a fixed point, lies below the diagonal to the left and above it to the right, and meets the diagonal again at 1. A dashed green curve shows the success probability, rising from about 0.52 to 1. A red staircase starts at 0.80 and climbs between the blue curve and the diagonal through four rounds to 0.930.](assets/05-04-fig1.svg)

The gap between blue curve and diagonal is the gain per round. It is largest in the middle and shrinks near 1, so each extra point of fidelity costs more rounds. The red staircase is the cost table.

## Worked examples

**Example 1 (chain, mechanical).** Links at $F=0.98$, so $p=(4\times0.98-1)/3=0.9733$. Eight links ($n=3$): $p^8=0.806$, $F_\text{end}=(1+3\times0.806)/4=0.854$. Sixteen links: $p^{16}=0.649$, $F_\text{end}=0.737$, below the QKD line at 0.835 and the CHSH line at 0.780. Now the rate. Take 400 km at 0.2 dB/km: 80 dB, so direct transmission needs $10^8$ attempts per pair. Cut it into 8 links of 50 km (10 dB, $p_0=0.1$) with $P_s=0.5$: $T\approx(1/0.1)\times3^3=270$ attempts. Double to 800 km: direct becomes $10^{16}$; the chain becomes 16 links, $T\approx10\times3^4=810$. Exponent $\log_2 3=1.58$: doubling distance triples the cost instead of squaring it. But 16 links at 0.98 deliver $F=0.737$, unusable. That is why every real repeater design distills (or error-corrects, [5.5](05-05-repeater-generations-and-platform-bets.md)) between levels.

**Example 2 (distill a GothamQ-grade link?).** Over 15 days on the 34 km GothamQ loop, Qunnect's compensated path averaged a fidelity lower bound of 0.937 (PRX Quantum, 2024). Treat that as a Werner pair. One BBPSSW round: $F'=0.955$, $P_\text{succ}=0.920$. Is it worth it for a key? Using the BBM92 key fraction $r=1-2h(e)$ with $e=\tfrac23(1-F)$ ([6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md); [QBER](../reference.md#qber), [asymptotic key rate](../reference.md#asymptotic-key-rate)): undistilled, $e=0.042$ and $r=0.497$ key bits per pair. Distilled, $r(0.955)=0.613$, but each raw pair yields only $0.920/2$ outputs: $0.920\times0.613/2=0.282$. Distillation **loses** 43% of the key. For one round on a single link, the break-even is $F\approx0.861$: below it (and especially below 0.835, where raw key is zero) distillation pays; above it, keep the raw pairs.

## Watch out

- **You might think a repeater chain fixes distance outright.** Actually swapping alone fixes rate and destroys fidelity: $p^{2^n}$ is exponential in the number of links. Without purification, more hops means worse pairs.
- **You might think distillation always helps.** Actually it halves the pair count at best. For a key it pays only below $F\approx0.861$ (one round); above that you lose key. And at $F\le\tfrac12$ it cannot help at all.
- **You might think distillation is a local operation.** Actually Alice and Bob must exchange their measurement bits, and both pairs must be held in memory while the bits travel. With the two ends 10 km apart and both sending at once, the bits take $L/v=10^4/(2\times10^8)$ s $=50$ µs one way, about 19 times Qunnect's 2.6 µs memory coherence time, and that comes on top of the [heralding round-trip time](../reference.md#heralding-round-trip-time) each pair already waited ([5.1](05-01-why-memories.md)).

## Business lens

Every swap and every distillation round is paid for in pairs and in waiting time. A repeater network's end-to-end fidelity is **bought with rate**, and the exchange rate worsens with each hop. That is the economics behind near-term deployments staying at one or two hops. A single high-fidelity link, like GothamQ's 15-day run, needs no distillation at all, and Example 2 shows distilling it would cost key.

When a customer asks "how far can you go?", the honest answer has three parts: link fidelity, swap success, and memory time. On the third, today's warm-vapor memory (2.6 µs) cannot yet hold pairs through even the classical exchange of one distillation round between distant nodes. The product case for QU-MEM today is synchronization and short links, not nested purification. A competitor with millisecond memories will say exactly this. The counter is not denial but the cost curve: raising link fidelity (better sources, compensation) is often worth more than distillation, as the problems below show.

## One-liner

> Swapping multiplies good fractions, so a chain of $2^n$ links delivers $p^{2^n}$; distillation buys back fidelity at more than two pairs per output and a classical round trip per round, so it pays only when the pairs are too noisy to use raw.

## Problems

**P1 (🟢)** Two Werner pairs, each with $F=0.85$, go through one BBPSSW round. Find the success probability and the output fidelity.

**P2 (🟡)** A chain of 4 links, each delivering Werner pairs with $F=0.97$, is joined by ideal swaps. (a) What is the end-to-end fidelity? (b) Keeping the same link quality, what is the largest number of links whose end-to-end fidelity still exceeds the QKD line at $F=0.835$?

**P3 (🔴, practical)** An invented operator has a 4-hop chain (4 links, ideal swaps) with links at $F=0.955$, and two proposals for its QKD service. **A:** upgrade every link to $F=0.965$, no distillation. **B:** keep the links, and run one BBPSSW round (with twirling) on the end-to-end pairs. Assume both produce raw end-to-end pairs at the same rate, and use $r=1-2h(e)$, $e=\tfrac23(1-F)$. Decide which proposal yields more key per raw end-to-end pair, with numbers, and give the executive a recommendation in at most three sentences.

<details>
<summary>Solutions</summary>

**P1** $q=(1-0.85)/3=0.05$.

Success probability: $P=F^2+2Fq+5q^2=0.7225+0.085+0.0125=0.820$.

Numerator: $F^2+q^2=0.7225+0.0025=0.7250$.

Output: $F'=0.7250/0.820=0.884$. A gain of 0.034 for a cost of $2/0.82=2.44$ input pairs per output.

---

**P2** (a) $p=(4\times0.97-1)/3=0.96$. Then $p^4=0.8493$ and $F_\text{end}=(1+3\times0.8493)/4=0.887$.

(b) Need $F>0.835$, i.e. $p^N>(4\times0.835-1)/3=0.780$. So $N<\ln0.780/\ln0.96=6.09$: **6 links**. Check: 6 links give $F=(1+3\times0.96^6)/4=0.837$; 7 links give $0.814$.

---

**P3** *(practical)*

**Accept:** A, with key per raw pair about 0.15 for A versus about 0.06 for B, and a recommendation that names B's extra memory and classical-exchange requirement.

**Must hit:**

- Baseline: $p=0.94$, $p^4=0.7807$, $F=0.836$, $e=0.110$, $r\approx0.002$. The link barely makes key.
- A: $p=0.9533$, $p^4=0.8260$, $F=0.869$, $e=0.087$, $h(e)=0.426$, $r=0.147$ per raw pair.
- B: $F=0.836\to F'=0.871$, $P_\text{succ}=0.805$, $e'=0.086$, $r'=0.155$, but per raw pair $0.805\times0.155/2=0.062$.
- A gives about 2.4 times the key, even though B's output fidelity is slightly higher.

**Model answer:** A delivers about 0.147 key bits per raw end-to-end pair; B's distilled pairs are marginally better (0.871 vs 0.869) but there are fewer than half as many, so it delivers about 0.062. B also needs memories at both ends to hold two pairs through a classical exchange across the whole chain, which we do not have. Fund the link upgrade.

</details>

## Flashback

**From Lesson [5.2](05-02-room-temperature-quantum-memories.md) (Room-temperature quantum memories):** An invented warm-vapor memory retrieves photons with SNR $=14$ at zero storage time. Its coherence time is $\tau=4.0$ µs: the signal decays as $e^{-t/\tau}$ while the noise floor stays fixed. Use the white-noise model $F=1-\frac{3}{2(\text{SNR}+2)}$. (a) What is the photon–memory fidelity at $t=0$? (b) For how long can the memory hold a photon before $F$ falls to the QKD line at 0.835? (c) With light in fiber at $2\times10^8$ m/s, over what distance can it wait for a herald returning from the far end of the link? (d) An engineer proposes cooling the cell to stretch $\tau$. In one sentence, is that the right fix?

<details>
<summary>Solution</summary>

(a) $F=1-\dfrac{3}{2(16)}=0.906$.

(b) Invert the model at $F=0.835$:

$$\text{SNR}_\text{min}=\frac{3}{2(0.165)}-2=7.09.$$

Then $14\,e^{-t/4.0}=7.09$ gives

$$t=4.0\ln\frac{14}{7.09}=2.72\ \mu\text{s}.$$

That is below the 4.0 µs coherence time: useful time ends when the signal sinks toward the noise floor, not when it is gone.

(c) In 2.72 µs light covers $2\times10^8\times2.72\times10^{-6}=544$ m. The herald must go out and come back, so the link can be about 272 m long. A metro link is still far out of reach.

(d) **Accept:** no, with the reason that motion is not the limit.

**Model answer:** No: Doppler shifts nearly cancel for the co-propagating Λ fields, and coherence is lost because atoms diffuse out of the beam, so the fixes are geometric (wider beam, more buffer gas, coated cell walls), not cooling.

</details>

## Connections

- **Backward:** the Werner good fraction from [1.3](01-03-fidelity-and-rate.md); the swap rule $p'=p_1p_2$ from [5.3](05-03-bell-state-measurement-and-swapping.md); the $\tfrac32$ waiting factor from [5.1](05-01-why-memories.md) ([waiting time with and without memory](../reference.md#waiting-time-with-and-without-memory)); bilateral CNOTs and Bell-basis bookkeeping from [`quantum-computing` 2.1](../../quantum-computing/lessons/02-01-bell-states-and-generating-entanglement.md) and the ideal swap in [2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md) P3.
- **Forward:** [5.5](05-05-repeater-generations-and-platform-bets.md) sorts repeaters by how they handle this noise (heralded distillation vs error correction); [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) owns the key-rate formula used here.
- **Sideways:** distillation is a two-way error-*detection* code on Bell pairs, the entanglement analogue of the repetition-code parity checks in [`quantum-computing` 5.2](../../quantum-computing/lessons/05-02-the-three-qubit-codes.md); replacing it with full error correction is exactly the step from first- to second-generation repeaters.
