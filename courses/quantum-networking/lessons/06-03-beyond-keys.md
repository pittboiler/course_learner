# Quantum Networking · Lesson 6.3: Beyond keys

> ⏱ ~15 min · Module 6: Protocols and applications · Builds on: [6.1 Entanglement-based QKD](06-01-entanglement-based-qkd-and-the-pqc-debate.md), [6.2 The network stack and timing](06-02-the-network-stack-and-timing.md), [5.4 Repeater chains and distillation](05-04-repeater-chains-and-distillation.md) · Unlocks: the whole course, closed out below

## Why this matters

If quantum networks only made keys, [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) would be the end of the story, and a skeptical security agency could end the market. The bigger prize is everything else a Bell pair can be spent on: a gate between two quantum computers, a computation the server cannot read, a phase measured more precisely than any set of independent probes allows. These are the reasons investors talk about a "quantum internet". They are also, honestly, mostly in the lab. This lesson prices each one in the currency of the course (fidelity, rate, memory, distance) so you can tell a customer which of them they can buy this year.

## The idea

Three applications, three ways to spend a pair.

1. **Linking quantum computers.** No single processor has enough qubits, so build several modules and connect them. A two-qubit gate between modules cannot be done by moving a qubit through lossy fiber and hoping. Instead you consume one pre-shared Bell pair plus two classical bits, and the gate happens as if the qubits were side by side. This is teleportation ([QC 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md)) used to move an *operation* rather than a state. The interconnect's job: deliver pairs as fast as the algorithm wants remote gates, at a fidelity as good as a local gate.
2. **Blind computing.** A client with a small quantum device sends prepared qubits to a powerful server. The server runs a computation on them following instructions that are encrypted by random angles only the client knows. The server learns the size of the computation and nothing else. The link carries single qubits or Bell pairs, at modest rate, but the server must hold them.
3. **Sensor and clock networks.** Give $N$ separate probes one shared entangled state, and a phase that shifts each of them adds up coherently. Precision then improves as $1/N$ instead of $1/\sqrt N$. Spread the probes across a city or a continent and the network becomes a single instrument: clocks compared better than independently, or telescopes kilometres apart combined without hauling starlight through fiber.

The common thread: each application needs the pair *held* until it is used, so each needs a memory, which deployed links do not yet have ([5.1](05-01-why-memories.md)).

## The formal version

**A remote CNOT costs one ebit and two classical bits.** Alice holds control $c$ and half $a$ of a Bell pair; Bob holds the other half $b$ and target $t$. Alice applies CNOT($c\to a$), measures $a$ in Z and sends the bit $m_1$. Bob applies $X^{m_1}$ to $b$, so $b$ now carries a copy of $c$'s Z value. Bob applies CNOT($b\to t$), measures $b$ in X and sends $m_2$. Alice applies $Z^{m_2}$ to $c$.

$$1\ \text{ebit} + 2\ \text{cbits} \;\Rightarrow\; 1\ \text{remote CNOT}.$$

*In words: the Bell pair is spent as a temporary wire, and two classical messages, one in each direction, clean up after it.*

With a [Werner](../reference.md#werner-state) pair of fidelity $F$, each Pauli error on the pair lands as a distinct Pauli error on the two data qubits. A direct calculation then gives the gate's process fidelity as exactly the pair's:

$$F_\text{gate}=F.$$

*In words: a remote gate is precisely as good as the pair it eats, so a 0.95 pair gives a 0.95 gate, far worse than the 0.99 or better that local gates reach.*

So raw pairs must be [distilled](../reference.md#entanglement-distillation) first ([5.4](05-04-repeater-chains-and-distillation.md)), at a cost of at least two pairs per round. The interconnect requirement for an algorithm that needs $G$ remote gates per second is

$$R_\text{pairs}\ \ge\ G\times c(F_0\to F_\text{target}),$$

where $c\ge1$ is the number of raw pairs consumed per distilled pair ([distributed quantum computing](../reference.md#distributed-quantum-computing)).

**Blind computing** (Broadbent, Fitzsimons and Kashefi, 2009) runs a measurement-based computation: the client sends qubits $|+_\theta\rangle=(|0\rangle+e^{i\theta}|1\rangle)/\sqrt2$ with $\theta$ chosen at random from multiples of $\pi/4$, then tells the server to measure at angles $\delta=\phi+\theta+r\pi$, where $\phi$ is the real angle and $r$ a random bit. Each $\delta$ is uniformly random to the server. *In words: the client one-time-pads the angles of the computation.* With a network that delivers Bell pairs, the client need not prepare anything: the server sends half of each pair, and the client's measurement prepares the server's qubit remotely ([blind quantum computing](../reference.md#blind-quantum-computing)).

**Sensing.** One qubit in $(|0\rangle+e^{i\phi}|1\rangle)/\sqrt2$ estimates $\phi$ with error of order 1 per shot. $N$ independent qubits average down to the **standard quantum limit**

$$\Delta\phi_\text{SQL}=\frac{1}{\sqrt N}.$$

Entangle them in a GHZ state $(|0\cdots0\rangle+|1\cdots1\rangle)/\sqrt2$. Each qubit adds $\phi$ to the *relative* phase, giving $(|0\cdots0\rangle+e^{iN\phi}|1\cdots1\rangle)/\sqrt2$, and a parity measurement has mean $V\cos N\phi$, where $V\le1$ is the contrast. At the best operating point

$$\Delta\phi_\text{GHZ}=\frac{1}{NV}.$$

*In words: entanglement makes the phase wind $N$ times faster, so one shot reaches the **Heisenberg limit** $1/N$, if the state is perfect.*

It isn't. The entangled state beats the unentangled one only if

$$V>\frac{1}{\sqrt N},$$

and under independent dephasing each qubit's coherence $e^{-t/T_2}$ multiplies, so $V=e^{-Nt/T_2}$: the GHZ state decoheres $N$ times faster. For a network, every Bell pair used to build the shared state lowers $V$ too ([quantum sensor networks](../reference.md#quantum-sensor-networks); the same $1/\sqrt N$ vs $1/N$ appears in [QC 4.2](../../quantum-computing/lessons/04-02-quantum-phase-estimation.md) and [photonics 3.5](../../photonics-quantum-optics/lessons/03-05-squeezed-states.md)).

**Long-baseline interferometry** (Gottesman, Jennewein and Croke, 2012), in words: two telescopes kilometres apart each interfere the incoming starlight with half of a shared single-photon entangled state, then compare classical results. The starlight never crosses the fiber; the network's photons do, and they need a rate comparable to the faint starlight's photon rate.

## Picture

![Grid with four rows of status, sold today, testbed, lab demo and proposal, and three columns of increasing demand on the network: pairs measured on arrival, pairs held in a memory, and memory plus high rate plus high fidelity. A green band over the first column is labelled deployed links today. QKD boxes sit at sold today and entanglement links and entanglement-based QKD at testbed, both in the first column. Blind computing and clock and sensor networks are lab demos in the middle column. Processor interconnects are a lab demo in the third column, and long-baseline telescopes are a proposal in the third column.](assets/06-03-fig1.svg)

The readiness table behind the picture, assessed as of 2026:

| Application | Fidelity | Rate | Memory | Distance | Status |
|---|---|---|---|---|---|
| Entanglement-based QKD | above 0.835 for any key | modest | no | metro | testbeds; QKD boxes sold |
| Blind computing | high | low | at the server | metro | photonic proof of principle |
| Clock and sensor networks | $V>1/\sqrt N$ | low | through the sensing time | km to continental | lab, over metres |
| Long-baseline telescopes | high | very high | yes | km baselines | proposal |
| Processor interconnects | 0.99 or better per gate | at least the remote-gate rate | the processors' qubits | metres to a data center | lab, over metres |

Read it left to right and the column that matters is **Memory**. Everything past the first row needs one.

## Worked examples

**Example 1 (the interconnect Fermi estimate).** An algorithm split over two modules needs $G=10^4$ remote CNOTs per second, each at 0.99.

Minimum rate: one pair per gate, so $R\ge10^4$ pairs/s, one every 100 µs, delivered *into the processors' qubits*, not measured on arrival.

Fidelity: since $F_\text{gate}=F$, a 0.99 gate needs 0.99 pairs. If the link delivers less, distillation multiplies the rate requirement by $c$, and the simplest recurrence ([BBPSSW](../reference.md#bbpssw-recurrence)) converges slowly near 1: from $F_0=0.97$, it takes three rounds to reach 0.9905, at $c=8.72$ raw pairs per good pair, so $R\ge8.7\times10^4$ pairs/s.

**Example 2 (Qunnect's published numbers against that requirement).** GothamQ (2024) delivered about $2\times10^4$ pairs/s at fidelity about 0.99 over 34 km. That looks like twice the rate needed. But those are photon–photon pairs measured on arrival; no processor qubit held either end.

The relevant number is the memory paper (2025): 1,200 photon–memory pairs/s at 0.80 fidelity ([memory figures of merit](../reference.md#quantum-memory-figures-of-merit)). The rate is $10^4/1200=8.3$ times short. The fidelity is worse: BBPSSW needs 10 rounds to lift 0.80 past 0.99 (0.9925), consuming about 2,900 raw pairs per good pair, so roughly $2.9\times10^7$ pairs/s. And the 2.6 µs coherence time is far shorter than the 100 µs between gates, so pairs could not be stockpiled; each would have to arrive just in time.

Verdict: today's warm-vapor hardware is a metro *distribution* product, not a processor interconnect. Better distillation protocols than BBPSSW cut the overhead, but not the gap in memory time.

## Watch out

- **You might think entanglement gives sensors a free $\sqrt N$ gain.** But the GHZ state dephases $N$ times faster and loses everything if one probe is lost; the gain survives only while $V>1/\sqrt N$, and real demonstrations win modest constant factors.
- **You might think linking quantum computers is a long-distance problem.** The first market is metres, inside one lab or data center. There loss is negligible; the hard parts are rate, fidelity and a clean interface between the processor's qubits and photons.
- **You might think blind computing needs entanglement.** The original protocol sends unentangled single qubits. Entanglement only changes who prepares them, which matters if the client owns a detector rather than a source.

## Business lens

Revenue is likely to come in this order. First, **testbeds**: every Carina deployment so far (GothamQ, Bozeman in September 2025, Berlin with Deutsche Telekom's T-Labs, ABQ-Net from November 2025) is a research or regional-innovation network. Second, **government and defense** R&D, such as the August 2026 DARPA contract for next-generation polarization compensation. Third, **QKD-adjacent security**, subject to [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md)'s policy split. **Processor interconnects** come later, and that race already has well-capitalized runners: IonQ (through Lightsynq), Welinq (partnered with Pasqal in 2026) and Nu Quantum (reported Cisco partner). They own or partner with the processors that would be the customer.

The honest gap is in Example 2: a 2.6 µs memory at 1,200 pairs/s is orders of magnitude from an interconnect. Two signals would mean the market is turning: **multi-node memory demonstrations in deployed fiber**, and **telcos buying from operating budgets** rather than partnering on research grants. A Chief of Staff should track both quarterly.

## One-liner

> Beyond keys, every application spends a held pair: a remote gate is only as good as its pair, sensing gains need contrast above $1/\sqrt N$, and memory is the column that separates what is deployed from what is promised.

## Problems

**P1 (🟢)** A sensor network has $N=100$ probe qubits, each picking up the same phase $\phi$. (a) Give the per-shot phase uncertainty at the standard quantum limit and at the Heisenberg limit. (b) How many independent probes would match the ideal entangled array? (c) Using $\Delta\phi_\text{GHZ}=1/(NV)$, what parity contrast $V$ must the entangled array keep to beat the unentangled one at all?

**P2 (🟡)** Two modules need $5\times10^3$ remote CNOTs per second, each with process fidelity at least 0.99. The link delivers Werner pairs of fidelity 0.98 into the processors; distillation is BBPSSW, twirled back to Werner form after each round, with success probability $P_1=0.9737$ in round 1 and $P_2=0.9820$ in round 2. (a) Can raw pairs be used directly? (b) One round gives 0.9864 and two give 0.9908. How many rounds, and how many raw pairs per good pair? (c) What raw pair rate is needed, and how long is the gap between remote gates?

**P3 (🔴, practical)** Rank three invented proposals from most to least ready, one reason each with a number where you can. (a) A state university wants an entanglement-distribution testbed over 20 km of its metro fiber for research and teaching. (b) A startup, call it Acme Compute, wants to link two quantum computers 300 km apart this year to run one larger algorithm. (c) A national lab wants entanglement-enhanced comparison of two optical clocks 10 km apart within three years.

<details>
<summary>Solutions</summary>

**P1** (a) $\Delta\phi_\text{SQL}=1/\sqrt{100}=0.1$ rad; $\Delta\phi_\text{HL}=1/100=0.01$ rad, ten times better.

(b) Independent probes give $1/\sqrt{N'}=0.01$, so $N'=10^4$: a hundred times as many probes.

(c) Need $1/(100V)<0.1$, so $V>0.1=1/\sqrt{100}$. Below a contrast of 0.1 the entanglement is worse than not bothering.

---

**P2** (a) No. $F_\text{gate}=F=0.98<0.99$.

(b) One round gives 0.9864, still short; two rounds give 0.9908, enough. Pairs per good pair:

$$c=\frac{2}{P_1}\cdot\frac{2}{P_2}=\frac{2}{0.9737}\cdot\frac{2}{0.9820}=4.18.$$

(c) $R\ge5\times10^3\times4.18=2.09\times10^4$ raw pairs/s into the processors. Remote gates come every $1/(5\times10^3)$ s $=200$ µs, so each pair must be held at least that long unless it arrives just in time.

---

**P3** *(practical)*

**Accept:** the order (a), (c), (b), with a reason for each that names the binding requirement; (c) and (b) swapped is wrong because (b) needs repeaters that do not exist.

**Must hit:**

- (a) is a pairs-measured-on-arrival product that is deployed today (Carina testbeds); 20 km at 0.33 dB/km is 6.6 dB, about 22% transmission.
- (c) needs a memory through the comparison and high contrast, $V>1/\sqrt N$; demonstrated only over metres in the lab, so three years is an R&D programme, not a purchase.
- (b) needs repeaters: 300 km at 0.2 dB/km is 60 dB, $\eta=10^{-6}$, so even PLOB allows only $1.44\times10^{-6}$ ebits per channel use, and processor interconnects are lab demos over metres.

**Model answer:** (a) first: a metro entanglement testbed is exactly what is deployed now, and 20 km costs only 6.6 dB. (c) second: it needs memories and high-contrast shared states that exist only over metres in the lab, so it is a credible three-year research partnership. (b) last: 300 km is 60 dB, a transmission of one in a million, so it needs repeaters and processor interfaces that nobody has built, and "this year" is not on the table.

</details>

## Flashback

**From Lesson [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) (Entanglement-based QKD, and the PQC debate):** A BBM92 link detects 30,000 pairs per second at both ends. Residual polarization drift hurts one basis more than the other: the measured error rates are $e_Z=0.015$ and $e_X=0.055$, so the state is not Werner. Use the asymptotic key fraction $r=1-h(e_Z)-h(e_X)$ with $h(x)=-x\log_2x-(1-x)\log_2(1-x)$, and assume the error rates do not change when the basis choice is biased. (a) Find $r$. (b) Find the key rate with independent fair basis choices, and with both sides choosing $Z$ with probability 0.75. (c) A customer needs 10,000 secret bits per second. Which setting meets it?

<details>
<summary>Solution</summary>

**(a)** $h(0.015)=0.1124$ and $h(0.055)=0.3073$, so $r=1-0.1124-0.3073=0.580$. Each basis charges its own toll: the $Z$ errors pay for error correction, the $X$ errors for privacy amplification.

**(b)** Fair choices: $s=\tfrac12$, so $K=30{,}000\times0.5\times0.580=8{,}700$ bits/s. Biased: $s=0.75^2+0.25^2=0.5625+0.0625=0.625$, so $K=30{,}000\times0.625\times0.580=10{,}900$ bits/s.

**(c)** Only the biased setting: 10,900 bits/s clears 10,000, while 8,700 does not. Biasing fixes nothing about the physics; it just throws away fewer rounds to basis mismatch, at the price of a longer run to estimate $e_X$ from the rarer $X$ rounds.

</details>

## Connections

- **Backward:** the remote CNOT is [QC 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md)'s teleportation spent on an operation, a cousin of the gate teleportation in [QC 5.5](../../quantum-computing/lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md). The distillation overhead is [5.4](05-04-repeater-chains-and-distillation.md)'s, the memory gap [5.2](05-02-room-temperature-quantum-memories.md)'s, and the readiness stages refine [1.1](01-01-what-a-quantum-network-delivers.md)'s use-case table.
- **Forward:** nothing left in this course. The [syllabus](../syllabus.md)'s Dangerous Checklist is the exit test; the card collects every number.
- **Sideways:** the $1/\sqrt N$ vs $1/N$ split is the same coherent-accumulation advantage as phase estimation ([QC 4.2](../../quantum-computing/lessons/04-02-quantum-phase-estimation.md)) and squeezed-light interferometry ([photonics 3.5](../../photonics-quantum-optics/lessons/03-05-squeezed-states.md)). Blind computing applies the [one-time pad](../../cryptography/lessons/01-02-perfect-secrecy-and-the-one-time-pad.md) to measurement angles.

## Closing the course

Go back to [1.2](01-02-the-stack-in-one-picture.md)'s stack. Every box now has its physics and its number.

- **Fiber** (Module 2): loss in dB, converted once at the end; a rotation of the Poincaré sphere that drifts with temperature and smears across wavelength; Raman noise from classical neighbours.
- **QU-SRC and detectors** (Module 3): narrowband rubidium pairs, one photon for the fiber and one for the atoms; accidentals that grow as brightness squared, so rate is bought with fidelity; and a two-basis bound, or a CHSH violation, to prove the result.
- **QU-APC** (Module 4): two probe states fix the unknown rotation, a loop tracks it, and uptime is the operator's number.
- **QU-MEM and QU-SWAP** (Module 5): memory turns $1/p^2$ waiting into about $3/(2p)$; swaps multiply Werner parameters; distillation buys fidelity with rate; repeater generations are platform bets.
- **QU-SYNC and the stack** (Module 6): heralds and corrections ride a classical control plane on sub-nanosecond clocks, and the pairs are spent on keys, gates and sensors.

Five questions for any quantum-networking claim:

1. **Fidelity at what rate?** One number without the other is marketing.
2. **Over what distance and loss?** Lab spool, deployed fiber, or live traffic?
3. **For how long?** Uptime over days, or a best minute?
4. **How was fidelity measured?** Full tomography, a two-basis bound, or a model?
5. **What is cryogenic?** "Room temperature" may describe the atoms but not the detectors.
