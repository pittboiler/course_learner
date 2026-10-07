# Quantum Networking · Lesson 1.1: What a quantum network delivers, and who pays

> ⏱ ~15 min · Module 1: The map · Builds on: [`quantum-computing` 2.1 (Bell states)](../../quantum-computing/lessons/02-01-bell-states-and-generating-entanglement.md), [2.4 (teleportation)](../../quantum-computing/lessons/02-04-quantum-teleportation.md) · Unlocks: [1.2 (the stack in one picture)](01-02-the-stack-in-one-picture.md)

## Why this matters

Ask ten people what a quantum network does and most will say "sends quantum data, unhackably." That answer is wrong in a way that matters for every product decision downstream. A quantum network does not move your data. It manufactures **shared entanglement** between two places, and the customer then *spends* it. Get this straight and the rest of the course falls into place: why the hardware looks the way it does, which use cases work today, and why the buyers right now are mostly labs, governments and telcos rather than enterprises.

## The idea

Think of a Bell pair as a pre-paid, single-use voucher split in half. Alice holds one half, Bob the other. Neither half means anything alone: measure either one and you get a coin flip. Together they carry a correlation no classical system can fake (the CHSH game of [`quantum-computing` 2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md)).

The network's job is to put those halves in place: make a pair, send one photon (or both) down fiber, confirm they arrived. That is all it delivers. Then the endpoints redeem the voucher in one of a few ways:

- **Measure both halves** in matching bases: a shared secret bit (entanglement-based QKD).
- **Teleport**: one pair plus two ordinary bits moves one unknown qubit from Alice to Bob ([`quantum-computing` 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md)).
- **Link processors**: use the pair to run a gate between qubits in two different machines.
- **Correlate sensors or clocks**: share an entangled probe state across distance.

Each redemption destroys the pair. So the network is less like a pipe and more like a factory with a delivery fleet: what matters is how many vouchers per second it ships, and how good each one is.

Two physical facts make this factory unlike a classical network. You cannot **copy** an unknown quantum state ([`quantum-computing` 2.3](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md)), and an optical **amplifier** would be a copier, so you cannot boost a fading photon either. A lost photon is simply lost; you try again.

## The formal version

**The product.** The ideal deliverable is the Bell state

$$|\Phi^+\rangle = \tfrac{1}{\sqrt2}\left(|HH\rangle + |VV\rangle\right),$$

where $|H\rangle$ and $|V\rangle$ are horizontal and vertical polarization of a photon, the first letter is Alice's photon and the second is Bob's. In words: the two photons have no polarization of their own, yet always agree when measured the same way.

**The quality score.** Real pairs arrive as some two-photon state $\rho$ (a density matrix). The [fidelity to a Bell state](../reference.md#fidelity-to-a-bell-state) is

$$F = \langle\Phi^+|\rho|\Phi^+\rangle, \qquad 0 \le F \le 1.$$

In words: $F$ is the probability that the delivered pair would pass a test for being the perfect pair. Above $F = \tfrac12$ the pair is entangled; above about $0.780$ it can violate CHSH ([CHSH threshold](../reference.md#chsh-threshold-for-werner-states)); lesson [1.3](01-03-fidelity-and-rate.md) derives both.

**The spending rule.** Teleportation's resource count, from [`quantum-computing` 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md):

$$1\ \text{ebit} + 2\ \text{cbits} \;\to\; 1\ \text{qubit moved}.$$

In words: one Bell pair (one **ebit**) plus two classical bits (**cbits**) moves one qubit, and the qubit arrives no faster than the classical bits. With an imperfect pair, the moved qubit is only as good as the pair allows: the [teleportation fidelity](../reference.md#teleportation-fidelity) is $(2F+1)/3$, which must beat the classical measure-and-resend score of $2/3$ to be worth anything (lesson [1.3](01-03-fidelity-and-rate.md)).

**The contrast, in one table:**

| | Classical network | Quantum network |
|---|---|---|
| What moves | bits, carrying your data | photons that leave a Bell pair behind; no user data |
| Can a node copy it? | yes, freely | no (no-cloning) |
| Can a weak signal be amplified? | yes, with optical amplifiers | no; lost photons are retried |
| Success means | the packet arrived intact | a pair was **heralded** (confirmed) with fidelity $F$ |
| What the customer does next | reads the data | spends the pair: key, teleport, gate, sensing |

**Where the field is.** Wehner, Elkouss and Hanson (*Science*, 2018) lay out six stages of a [quantum internet](../reference.md#stages-of-a-quantum-internet), each unlocking more applications:

1. **Trusted-repeater networks**: keys hop node to node, and every node must be trusted.
2. **Prepare-and-measure**: end-to-end QKD; one side sends single qubits, the other measures.
3. **Entanglement distribution**: end-to-end Bell pairs, measured on arrival.
4. **Quantum memory**: pairs can be *stored* until used.
5. **Few-qubit fault-tolerant**: nodes can correct errors on stored qubits.
6. **Quantum computing networks**: full processors linked by entanglement.

In words: each stage adds one capability (no trusted middle, entanglement, storage, error correction, computation). Commercial QKD boxes live at stages 1–2. Qunnect's deployed Carina systems are a stage-3 product; its 2025 room-temperature memory paper is a laboratory step toward stage 4, not yet a deployed one.

**Use cases by what they need.** This is the table to carry into any meeting:

| Use case | Entanglement? | Memory? | Rate needed | Status (2026) |
|---|---|---|---|---|
| QKD | optional (prepare-and-measure works) | no | modest | sold today |
| Clock and sensor networks | yes | yes, through the sensing interval | low to modest | lab demonstrations |
| Blind or delegated computing | not always (client can just send qubits) | yes, at the server | modest | proof of principle |
| Linking quantum computers | yes | yes, at both processors | high, at high $F$ | short-distance lab demos |

In words: only key distribution works with what is deployed today; everything more valuable needs memory, and the most valuable needs memory, rate and fidelity at once.

## Picture

![Two panels. Top, a classical network: Alice sends bits to an amplifier or router, which sends a copy on to Bob; a note says copy it, boost it, resend it, every node may keep a copy. Bottom, a quantum network: a pair source in the middle sends photon 1 to Alice and photon 2 to Bob, each of whom holds half of a Bell pair; a dashed classical line between them carries heralds and two bits per teleported qubit; a red note says no copies, no amplifiers, a lost photon is retried, never boosted; a final line says the pair is then spent as a key bit, one teleported qubit, or a gate between processors.](assets/01-01-fig1.svg)

The classical channel never disappears: heralding needs it, and teleportation needs two bits per qubit. A quantum network is always a quantum layer **plus** a classical one. In real systems the source often sits at one end, keeping one photon home and sending the other down the fiber; GothamQ does exactly that (lesson [1.2](01-02-the-stack-in-one-picture.md)).

## Worked examples

**Example 1: Writing the bill.** A lab wants to teleport 50 qubits per second to a partner and also generate 10,000 key bits per second over the same link. Assume each side picks its measurement basis for key generation at random, so half the measured pairs land in matching bases and survive sifting.

- Teleportation: 50 pairs/s, plus $2 \times 50 = 100$ classical bits/s.
- Key: $10{,}000 / 0.5 = 20{,}000$ pairs/s.
- Total: $50 + 20{,}000 = 20{,}050$ pairs/s, before any loss or error correction.

The key use dominates the pair budget, but the teleportation use dominates the *engineering*: those 50 pairs must be held in memory until Alice's qubit is ready, while the key pairs are measured the instant they arrive.

**Example 2: Two operating points of a real link.** Qunnect's GothamQ paper (Craddock et al., *PRX Quantum*, 2024) reports two operating points on a 34 km loop of buried New York fiber: about $5\times10^5$ pairs/s with a fidelity lower bound of $0.84$, and about $0.99$ fidelity at about $2\times10^4$ pairs/s. What does each buy?

Teleportation fidelity $(2F+1)/3$:

$$F = 0.84:\ \ \tfrac{2(0.84)+1}{3} = 0.893$$

$$F = 0.99:\ \ \tfrac{2(0.99)+1}{3} = 0.993$$

Both beat the classical $2/3$ and both clear the CHSH threshold $0.780$. Per day, the bright setting ships $5\times10^5 \times 86{,}400 = 4.32\times10^{10}$ pairs; the clean setting $2\times10^4 \times 86{,}400 = 1.73\times10^{9}$, 25 times fewer. That is the [rate-fidelity tradeoff](../reference.md#rate-fidelity-tradeoff) in one line: turning the source up buys pairs and costs quality.

The honest caveat: these pairs are measured on arrival. They serve stage-3 uses (key, Bell tests, certifying the link). Teleporting on demand or linking processors needs a pair that *waits*, which is lesson [5.1](05-01-why-memories.md).

## Watch out

- You might think a quantum network sends your data securely. It sends no data. Even QKD only delivers a key; the encrypted data still travels over an ordinary channel.
- You might think entanglement allows faster-than-light signalling. Until the classical bits arrive, Bob's half is a fair coin ([`quantum-computing` 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md), Example 2). The classical layer sets the speed.
- You might think "entanglement over X km" means "teleportation over X km." Teleporting a user's qubit also needs memory and a Bell-state measurement at the right moment. Distribution is a necessary step, not the finished product.

## Business lens

Qunnect does not sell a QKD box. It sells **entanglement-distribution infrastructure**: the [Carina](../reference.md#carina-product-stack) rack, built from its source, polarization-compensation, memory, swap and sync modules, which the company calls the first commercially available turnkey system of its kind. That is a broader bet: if QKD loses the policy argument to post-quantum cryptography (lesson [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md)), the same pairs still serve sensing, blind computing and processor links. The cost of the bet is that those markets depend on memories and repeaters that are not deployed yet.

Who pays today is clear from the deployments (as of 2026): a university (Montana State, installed September 2025), a state-backed open-access network (ABQ-Net in Albuquerque, launched November 2025), a telco lab (Deutsche Telekom's T-Labs in Berlin, which reported teleportation over 30 km of live fiber in January 2026), and defense (a DARPA contract on compensation, August 2026). That is a **testbed economy**: buyers paying to learn, not to run production traffic. Say so plainly; the question an investor asks is when it turns into recurring demand.

## One-liner

> A quantum network ships Bell pairs, scored by fidelity and rate, that customers spend on keys, teleportation or linked machines, and nothing on it can be copied or amplified.

## Problems

**P1 (🟢)** For each request, say whether it needs (i) entanglement, (ii) quantum memory, (iii) a high pair rate, with a one-line reason.

(a) A hospital wants encryption keys refreshed every few seconds between two buildings 10 km apart.
(b) A university wants two 20-qubit processors in labs 2 km apart to run one 40-qubit circuit.
(c) An insurer wants its nightly backups to move faster between two data centers.
(d) A metrology lab wants to compare two optical clocks 15 km apart using an entangled state shared across them.

**P2 (🟡)** *(practical)* A skeptical CFO asks: "So we're buying a very expensive internet connection?" In three sentences or fewer, explain what the network actually delivers and why it cannot simply be copied or amplified like ordinary traffic.

**P3 (🔴, optional)** A client wants to teleport a 1,000-qubit state to a partner. Assume each Bell pair is a Werner pair of fidelity $F$, so each teleported qubit independently arrives error-free with probability $F$. The link delivers photon–memory pairs at 1,200 per second, and the memory holds a qubit for about 2.6 µs.
(a) How many Bell pairs and classical bits does the transfer need?
(b) How long does it take at this rate, and how does the gap between successive pairs compare with the memory time?
(c) With $F = 0.99$, what is the probability that no qubit picks up an error?

<details>
<summary>Solutions</summary>

**P1**

**Accept:** any answer matching the needs below with a reason; for (a), "entanglement optional" or "no" both pass if the reason mentions prepare-and-measure QKD; for (d), memory "yes" passes if the reason says the entangled state must be held through the measurement (the clock atoms themselves can be that memory).

(a) Entanglement: optional, since prepare-and-measure QKD also works. Memory: no, pairs are measured on arrival. High rate: no, a modest key rate refreshes keys every few seconds. (A Chief of Staff should also note that post-quantum cryptography may meet this need more cheaply; lesson 6.1.)

(b) Entanglement: yes, gates between the two machines consume Bell pairs. Memory: yes, pairs must wait at each processor until the circuit needs them. High rate: yes, a 40-qubit circuit needs many cross-machine gates, each consuming a high-fidelity pair.

(c) None. Backups are classical data, and a quantum network moves no data; teleportation even requires classical bits to travel anyway. This is a fiber or bandwidth purchase.

(d) Entanglement: yes, the entangled probe state is the point. Memory: yes, the state must survive the interrogation time. High rate: no, comparisons are slow and need few pairs.

---

**P2** *(practical)*

**Must hit:**

- It delivers shared entanglement (Bell pairs), not data; data still travels on ordinary networks.
- The pairs are a consumable resource spent on keys, teleportation or linking machines.
- Physics forbids copying an unknown quantum state, and an amplifier would be a copier, so lost photons are resent, not boosted.

**Model answer:** It is not a faster internet; it manufactures matched pairs of entangled photons between two sites, and we spend each pair on something an ordinary link cannot do, such as generating a shared key or moving a qubit between quantum machines. Our data still rides the normal network. The pairs can't be copied or amplified because quantum physics forbids copying an unknown state, which is also why an eavesdropper can't copy them, so lost photons are simply retried.

---

**P3**

(a) One pair plus two classical bits per qubit: $1{,}000$ Bell pairs and $2 \times 1{,}000 = 2{,}000$ classical bits.

(b) Time: $1{,}000 / 1{,}200 = 0.833$ s. The mean gap between pairs is $1/1{,}200$ s $= 833$ µs, and

$$\frac{833\ \mu\text{s}}{2.6\ \mu\text{s}} \approx 320.$$

So the memory forgets about 320 times faster than new pairs arrive. Pairs cannot be stockpiled; each must be used the instant it is heralded. Worse, the partner must hold the first teleported qubits for the whole 0.833 s, about $3.2\times10^5$ memory lifetimes. What fails is storage, not the teleportation protocol.

(c) Independent errors multiply:

$$0.99^{1000} = 4.3\times10^{-5}.$$

Even at 99% per pair, an error-free 1,000-qubit transfer is essentially hopeless without error correction (to reach a 50% chance would need $F = 0.5^{1/1000} = 0.9993$ per pair). This is why linking quantum computers sits at the last stages of the roadmap.

</details>

## Connections

- **Backward:** Bell states from [`quantum-computing` 2.1](../../quantum-computing/lessons/02-01-bell-states-and-generating-entanglement.md); the ebit-plus-two-cbits accounting and ideal swapping from [2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md); no-cloning, the reason there are no amplifiers, from [2.3](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md); prepare-and-measure BB84 from [`photonics-quantum-optics` 4.5](../../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md).
- **Forward:** [1.2](01-02-the-stack-in-one-picture.md) opens the factory into source, fiber, compensation, memory, swap and sync (the [quantum network stack](../reference.md#quantum-network-stack)); [1.3](01-03-fidelity-and-rate.md) derives the fidelity thresholds used here; [5.1](05-01-why-memories.md) explains why the memory column decides which use cases are possible; [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) and [6.3](06-03-beyond-keys.md) judge each use case honestly.
- **Sideways:** the stages of a quantum internet echo the layering of [`computer-networks` 1.1](../../computer-networks/lessons/01-01-packet-switching-and-layers.md), and the QKD-versus-PQC policy split connects to [`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md).
