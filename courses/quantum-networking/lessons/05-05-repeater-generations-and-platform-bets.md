# Quantum Networking · Lesson 5.5: Repeater generations and platform bets

> ⏱ ~15 min · Module 5: Memories and repeaters · Builds on: [5.1](05-01-why-memories.md), [5.2](05-02-room-temperature-quantum-memories.md), [5.3](05-03-bell-state-measurement-and-swapping.md), [5.4](05-04-repeater-chains-and-distillation.md) · Unlocks: [6.2](06-02-the-network-stack-and-timing.md), [6.3](06-03-beyond-keys.md)

## Why this matters

Every company in this field tells a story about the intercity quantum internet, and the stories differ in what they assume a repeater will look like. The research literature sorts repeater designs into three **generations** by one question: how does a node fix loss and errors, and how long must it wait for news from its neighbors? Learn that sorting and you can place any platform (warm vapor, cold atoms, ions, diamond) on the roadmap, and tell a pitch about "the repeater" from a pitch about this year's product.

## The idea

A [quantum repeater](../reference.md#quantum-repeater) fights two enemies. **Loss**: most photons never arrive. **Operation errors**: the pairs that do arrive, and the swaps that join them, are imperfect. Each enemy can be beaten in one of two ways.

- **Herald it.** Try, then wait for a classical message saying whether it worked; keep successes, discard failures. Crude hardware is fine, but every wait is a light-travel time, and the memory has to survive it.
- **Encode it.** Spread each qubit over many physical qubits in an error-correcting code and repair damage locally, without asking anyone. No waiting, but a lot of hardware and very good gates.

The three combinations are the three generations (the framing of Muralidharan et al., 2016, used in the 2023 review by Azuma et al.):

1. **First generation (1G):** herald the loss *and* herald the error fixes, via [distillation](../reference.md#entanglement-distillation) ([5.4](05-04-repeater-chains-and-distillation.md)). Two-way messages at every level, finally across the whole chain.
2. **Second generation (2G):** herald the loss on each link, but fix operation errors with a code. Waiting spans one link only.
3. **Third generation (3G):** encode against both. Messages flow one way, like packets, and nodes hold qubits only for their own processing time. The **all-photonic** variant (Azuma, Tamaki and Lo, 2015) replaces matter memories with large entangled states of photons.

An analogy: 1G is a relay of registered letters where every handoff waits for a signed receipt, and the last receipt comes from the far end. 2G waits only for the receipt from the next town. 3G packs each letter with enough redundancy that the next town can rebuild a damaged one without asking. The speed ladder and the price ladder run in opposite directions: 1G needs patient memories but tolerates mediocre gates; 3G needs no patience but near-fault-tolerant hardware in bulk.

## The formal version

**Symbols.** Total distance $L$; elementary link length $L_0$; $n=L/L_0$ links; light speed in fiber $v\approx2\times10^8$ m/s (about 5 µs per km), as in [5.1](05-01-why-memories.md); memory [coherence time](../reference.md#coherence-time) $\tau$; local operation time $t_{op}$; per-hop transmission $\eta_0$.

**Heralding delay (midpoint model, as in 5.1).** Two nodes $L_0$ apart each send a photon to a Bell-state measurement station halfway between them, and the station's herald travels back. Photon out $L_0/2$, message back $L_0/2$, giving 5.1's [heralding round-trip time](../reference.md#heralding-round-trip-time):

$$t_h=\frac{L_0}{v}.$$

*In words: a node learns whether an attempt worked one full link length of light time after it fired.* (With the source at one end, as in [1.2](01-02-the-stack-in-one-picture.md), it is $2L_0/v$; every number below uses the midpoint layout.)

**Minimum memory time** (one attempt, no waiting):

$$\tau_{1G}\gtrsim\frac{L}{v}$$

$$\tau_{2G}\gtrsim\frac{L_0}{v}$$

$$\tau_{3G}\gtrsim t_{op}$$

*In words: a 1G node must remember until news crosses the whole chain, because the last distillation round compares outcomes between the two end nodes; a 2G node only until its own link reports; a 3G node only as long as its own gates take.* These are floors. Real requirements multiply them by the expected number of attempts ([5.1](05-01-why-memories.md)) and the distillation rounds. The same times set the clock: rates scale roughly as $v/L$ for 1G (worse with each distillation level), $v/L_0$ per memory mode for 2G, and $1/t_{op}$ for 3G.

**3G's loss ceiling.** Without heralding, a lost photon is an **erasure**: the receiver knows it is missing. A quantum erasure channel with erasure probability $\varepsilon=1-\eta_0$ has quantum capacity

$$Q=\max(0,\;1-2\varepsilon).$$

*In words: if half or more of the photons are lost, the environment holds as much of the state as the receiver, and no-cloning forbids both from having it, so no code can help.* Hence every hop needs $\eta_0>1/2$, under 3.01 dB including fiber, couplers and detectors. The classical erasure channel's capacity is $1-\varepsilon$ ([information-theory 3.2](../../information-theory/lessons/03-02-canonical-channels.md)); the quantum one loses twice as fast.

| | 1G | 2G | 3G |
|---|---|---|---|
| Loss fixed by | heralding | heralding | erasure code |
| Errors fixed by | distillation (two-way) | error correction | error correction |
| Memory time | $\gtrsim L/v$ | $\gtrsim L_0/v$ | $\gtrsim t_{op}$ |
| Gate quality | tolerant | near the [fault-tolerance threshold](../../quantum-computing/lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md) | near threshold, many qubits per node |
| Loss per hop | any (rate pays) | any (rate pays) | below 3 dB |
| Rate set by | $L/v$ | $L_0/v$ per mode | $t_{op}$ |
| Maturity (2026) | elements demonstrated; memory nodes on testbeds | lab research | theory, early photonic experiments |

## Picture

![A qualitative chart of quantum memory platforms. The horizontal axis is storage time on a log scale with three zones, microseconds, milliseconds, and seconds and longer. The vertical axis has four rows of operating conditions, from top to bottom room temperature, vacuum plus laser cooling, a cryostat at a few kelvin, and a dilution fridge below one kelvin. Warm rubidium vapor, Qunnect, sits in the top row in the microsecond zone, with a dashed arrow toward milliseconds for coated cells reported elsewhere. Cold atoms, Welinq, and trapped ions, IonQ, sit in the laser-cooling row at milliseconds and at seconds. Rare-earth crystals and NV diamond, Delft, sit in the cryostat row. SiV diamond, the Boston-area testbed, sits in the dilution-fridge row at milliseconds.](assets/05-05-fig1.svg)

A repeater wants the right side of this chart (1G especially); a telecom customer wants the top row. Nobody sits in the top-right corner today. Each bet is a choice of which corner to start from and which way to move.

| Platform | Who is betting (as reported, 2024–2026) | Optimizing for | Paying with |
|---|---|---|---|
| Warm Rb vapor | Qunnect | room temperature, rack deployment, source and memory of one species | µs storage (2.6 µs); 5.2–9.5% efficiency |
| Cold atoms | Welinq (partnered with Pasqal, 2026) | memory-based interconnects for quantum computers | laser cooling, vacuum |
| Trapped ions | IonQ (bought Qubitekk, Lightsynq, Skyloom; controlling stake in ID Quantique) | the memory *is* a computing qubit; one integrated stack | photons need frequency conversion |
| Diamond NV / SiV | Delft (NV); Boston-area 50 km testbed (SiV) | long spin coherence with built-in nuclear-spin registers | cryostats, down to below 1 K for SiV |
| Rare-earth crystals | research groups | many modes stored in parallel | cryostat |
| Software | Aliro; Cisco (reported partner of Aliro and Nu Quantum) | hardware-agnostic orchestration | rides on others' hardware |

The memory paper's own comparison puts numbers on "paying with": photon–memory fidelities of 89.7% (cold atoms), 77% (NV) and 96% (trapped ions) all used quantum frequency conversion; Qunnect's 90.2% did not.

## Worked examples

**Example 1 (memory budgets by generation).** A 600 km line with $L_0=10$ km has 60 links.

- 1G: $\tau\gtrsim L/v=600\ \text{km}/(2\times10^8\ \text{m/s})=3$ ms.
- 2G: $\tau\gtrsim L_0/v=50$ µs, 60 times less, with one attempt per mode every 50 µs (20 kHz).
- 3G: no herald to wait for, but each hop must stay under 3.01 dB. In C-band fiber at 0.2 dB/km that caps hops at $3.01/0.2=15.05$ km, so at least 40 stations' worth of hops; at the O-band's 0.33 dB/km, 9.12 km and at least 66 hops. That is the no-cloning ceiling with perfect couplers and detectors; real codes tolerate far less, so real stations sit much closer.

The pattern: 1G's memory demand grows with the whole distance, 2G's stays fixed per link, 3G trades memory for station count.

**Example 2 (Qunnect's memory on the roadmap).** [5.1](05-01-why-memories.md) showed that the 2025 memory's $\tau=2.6$ µs covers one herald on a link of at most $v\tau=520$ m. Now place it on the generation table. A 10 km metro link in 2G needs at least $t_h=50$ µs, 19 times $\tau$; under an $e^{-t/\tau}$ decay model the memory would retain $e^{-50/2.6}\approx4\times10^{-9}$ of its coherence by then. 1G is worse, since its floor grows with the whole chain. A near-millisecond coated cell (reported elsewhere) would change the picture: 1 ms covers a 200 km link in 2G, or a 200 km *whole chain* in 1G. That target is $1\ \text{ms}/2.6\ \mu\text{s}\approx385$ times today's storage. Until then the memory's job is 5.1's near-term one, synchronizing probabilistic sources inside one node, where holds are far shorter than any herald.

## Watch out

- **You might think "third generation" means "newer, so better", but actually generations are architectures, not product versions.** 3G needs sub-3 dB hops and fault-tolerant nodes; 1G is the only one whose elements run in deployed fiber. A vendor's "next-gen" box is not a repeater generation.
- **You might think the platform with the longest storage wins, but actually a memory is scored on several [figures of merit](../reference.md#quantum-memory-figures-of-merit).** Seconds of coherence behind a lossy frequency converter in a dilution fridge can lose to microseconds in a rack. The chart has two axes for a reason.
- **You might think the herald time is the memory requirement, but actually it is the floor for one attempt.** With per-attempt success $p$, waiting multiplies it by order $1/p$ ([5.1](05-01-why-memories.md)).

## Business lens

As of 2026, none of the deployments this course tracks (Qunnect's four [Carina](../reference.md#carina-product-stack) sites, the Boston and Delft testbeds) is a commercial multi-hop memory repeater; the market is metro links and [trusted-node](../reference.md#trusted-nodes) QKD. The bets are on who reaches the chart's top-right corner first, and they come in two shapes.

**Vertical:** IonQ has assembled sources (Qubitekk), QKD (ID Quantique), memory-based interconnects (Lightsynq) and space links (Skyloom) around its ion computers, so the interfaces between computer and network are internal. **Horizontal:** Qunnect sells a vendor-neutral, telecom-grade entanglement layer that runs at room temperature in carrier fiber (GothamQ; Deutsche Telekom's T-Labs in Berlin), backed by investors including Cisco Investments and Airbus Ventures, with software firms like Aliro above it. Integration buys control of every interface; neutrality buys customers who would not buy from a computing competitor.

Qunnect's honest scorecard: strong on deployability, uptime (99.84% over 15 days) and telecom wavelength; it needs roughly 385 times more storage and better than 5–10% efficiency to be a repeater node, and its SNSPDs are still cryogenic. The sharp line: "We sell the 1G components that already run in carrier fiber; memory time is the gap we are closing."

## One-liner

> Repeater generations sort designs by what they herald and what they encode, which sets how long memories must wait (whole chain, one link, or one gate), and every platform bet is a choice between long storage and easy deployment that nobody has yet won both of.

## Problems

**P1 (🟢)** Classify each invented design as a 1G, 2G or 3G repeater, with a one-sentence reason. (a) *Acme Quantum*: nodes 20 km apart herald entanglement at midpoint stations, store it, swap, then run two rounds of distillation between the end nodes, comparing measurement outcomes each round. (b) *Borealis Networks*: links are heralded, but each node stores its qubits in a small error-correcting code and repairs operation errors locally, passing results one way. (c) *Cascade Photonics*: stations every 2 km pass loss-tolerant encoded photonic states forward with no heralding wait and no long-lived matter memory.

**P2 (🟡)** Assume the midpoint layout (detection station halfway along each link, so $t_h=L_0/v$) with $v=2\times10^8$ m/s, and ignore waiting for repeated attempts. (a) What is the minimum memory time for a repeater node on a 40 km elementary link? (b) A 1G chain joins 8 such links. What minimum memory time does its final, end-to-end distillation round impose, and how many times (a) is that? (c) Which generation keeps the requirement at (a) however many links are added?

**P3 (🔴, practical)** A Qunnect board member asks: "IonQ is building the whole stack. Should we build our own quantum computer to compete?" Answer in three sentences or fewer.

<details>
<summary>Solutions</summary>

**P1** (a) **1G.** Loss is handled by heralding and errors by distillation, which needs two-way outcome comparisons between the end nodes.

(b) **2G.** Loss is still heralded link by link, but operation errors are fixed by a code with one-way communication.

(c) **3G (all-photonic).** Loss and errors are both handled by encoding, with one-way flow and no waiting on heralds; the 2 km spacing keeps each hop well under the 3 dB erasure ceiling.

---

**P2** (a) The photon travels 20 km to the midpoint and the herald 20 km back, 40 km of light travel:

$$\tau\gtrsim t_h=\frac{L_0}{v}=\frac{4\times10^4\ \text{m}}{2\times10^8\ \text{m/s}}=2\times10^{-4}\ \text{s}=200\ \mu\text{s}.$$

(With the source at one end instead, it would double to 400 µs.)

(b) The chain spans $L=8\times40=320$ km, and the last round's messages must cross it:

$$\tau\gtrsim\frac{L}{v}=\frac{3.2\times10^5\ \text{m}}{2\times10^8\ \text{m/s}}=1.6\ \text{ms},$$

which is 8 times (a): 1G's requirement grows with the number of links.

(c) **2G**: operation errors are fixed by local codes, so a node only waits for its own link's herald, 200 µs regardless of chain length. (3G needs even less, only $t_{op}$, but it does not herald at all, so "the requirement at (a)" does not apply to it.)

---

**P3** *(practical)*

**Accept:** any answer, yes or no, that reasons from (1) Qunnect's position in the stack, (2) the capital a quantum computer requires, and (3) the effect on partners and customers. An answer that dismisses IonQ's strategy rather than comparing it fails.

**Must hit:**

- Stack position: Qunnect's product is the network layer (sources, memory, compensation, swap) in carrier fiber; a computer is a different product with different competitors.
- Capital: competing in computing is a far larger, longer bet than the scale of a 10 million dollar Series A extension (June 2025).
- Partners: neutrality is the asset; computer makers and telcos buy from, partner with or invest in a network vendor that does not compete with them.

**Model answer:** IonQ's integration is a coherent strategy for a company whose core product is the computer, but our core product is the entanglement layer that runs in carrier fiber, and that is where our results and deployments are. Building a competitive quantum computer would take capital on a different scale from our 2025 Series A extension and years before revenue. Our strongest position is the neutral network every computer maker and telco can buy from without arming a competitor, so we should interconnect quantum computers rather than build one.

</details>

## Flashback

**From Lesson [5.3](05-03-bell-state-measurement-and-swapping.md) (Bell-state measurement and swapping):** Two Werner links with $F_1=0.96$ and $F_2=0.94$ meet at a linear-optics Bell-state measurement. (a) With perfectly indistinguishable photons, what is the swapped fidelity $F'$? (b) Using $F'=p_1p_2\,\tfrac{1+V}{2}+\tfrac{1-p_1p_2}{4}$, what is the smallest HOM visibility $V$ that keeps the swapped pair at or above the QKD line, $F'\ge0.835$? (c) The detectors have efficiency 0.8 on each photon. What fraction of attempts herald a swap, and does a drop in $V$ change that fraction?

<details>
<summary>Solution</summary>

(a) Good fractions $p=(4F-1)/3$: $p_1=0.9467$ and $p_2=0.9200$, so $p_1p_2=0.8709$ and

$$F'=\frac{1+3\times0.8709}{4}=0.9032.$$

Check with the fidelity form: $0.96\times0.94+(0.04)(0.06)/3=0.9024+0.0008=0.9032$.

(b) The noise floor is $(1-0.8709)/4=0.0323$, so the condition is $0.8709\,\tfrac{1+V}{2}\ge0.835-0.0323=0.8027$. That gives $\tfrac{1+V}{2}\ge0.9217$, so

$$V\ge0.843.$$

Two very good links leave only about 0.16 of visibility to spare before the key is gone.

(c) $P_\text{swap}=\tfrac12\times0.8^2=0.32$, about one success per 3.1 attempts. No: distinguishability leaves the click rate unchanged and silently lowers the fidelity, so only a HOM or fidelity measurement would catch it.

</details>

## Connections

- **Backward:** the memory waits come from [5.1](05-01-why-memories.md), the warm-vapor figures from [5.2](05-02-room-temperature-quantum-memories.md), the joins from [5.3](05-03-bell-state-measurement-and-swapping.md), and 1G's error fix is [5.4](05-04-repeater-chains-and-distillation.md)'s distillation. 2G and 3G borrow [quantum-computing 5.5](../../quantum-computing/lessons/05-05-fault-tolerance-the-threshold-and-the-surface-code.md)'s threshold theorem. See the card's [repeater generations](../reference.md#repeater-generations).
- **Forward:** [6.2](06-02-the-network-stack-and-timing.md) turns heralded link generation into the link layer of a stack; [6.3](06-03-beyond-keys.md) asks what interconnected quantum computers, IonQ's and Welinq's target, need from a link.
- **Sideways:** 3G's loss ceiling is [information-theory 3.2](../../information-theory/lessons/03-02-canonical-channels.md)'s erasure channel with no-cloning doubling the penalty, $1-2\varepsilon$ instead of $1-\varepsilon$. The vertical-versus-horizontal choice is the classic make-or-buy question of industrial organization, played out at the start of a market.
