# Quantum Networking · Lesson 1.2: The stack in one picture

> ⏱ ~15 min · Module 1: The map · Builds on: [1.1 What a quantum network delivers](01-01-what-a-quantum-network-delivers.md) · Unlocks: [1.3 Fidelity and rate](01-03-fidelity-and-rate.md), and every box opened in Modules 2–5

## Why this matters

Ask a quantum-networking engineer what they build and you get a list of acronyms: source, APC, memory, swap, sync, lock. Each one exists because a photon ran into a specific physical problem on its way across a city, and each one has a single number that tells you whether it works. Learn the boxes, the problems they fix, and the numbers that grade them, and you can read any product sheet or paper in this field. In a meeting, you can also say which box is actually limiting a customer's link.

## The idea

Follow one entangled pair from birth to use.

1. **Birth.** A source makes two photons whose polarizations are entangled. At Qunnect the source is warm rubidium vapor, and the two photons come out at *different colors*: 795 nm (the color rubidium atoms absorb, so a rubidium memory can store it) and 1324 nm (the O-band, where telecom fiber is fairly transparent). One photon for the atoms, one for the fiber.
2. **Travel.** The 1324 nm photon goes into buried fiber. Fiber does two bad things to it. It **loses** it most of the time (attenuation). And it **rotates** its polarization by an unknown amount that drifts with temperature and stress. Loss you can only budget for. Rotation you can undo, if you measure it, and that is the job of [automated polarization compensation](../reference.md#automated-polarization-compensation) (APC).
3. **Detection and the herald.** At the far end a detector clicks, or doesn't. You cannot peek at the 795 nm photon back home to ask "did your partner make it?", because measuring it destroys the entanglement you're trying to keep. So the far end sends back a few **classical bits**: "click at time slot 48,213". That message is the **herald**. It turns a lossy, mostly failing process into a *known* success.
4. **Waiting.** Meanwhile the 795 nm photon sits in a **memory**, because the herald takes time to come back, and because a second link elsewhere may not have succeeded yet.
5. **Joining.** Two links, A–middle and middle–B, become one A–B link through a **[Bell-state measurement](../reference.md#bell-state-measurement)** (BSM) on the two photons at the middle. This is entanglement swapping ([QC 2.4, P3](../../quantum-computing/lessons/02-04-quantum-teleportation.md) does the ideal algebra).
6. **Timing and color.** All of this works only if every box agrees on *when* (which time slot clicked) and on *what color* (photons from different sources must match the atoms and each other). That is a shared clock plus a frequency reference.

Qunnect sells a box for each step: QU-SRC, QU-APC, QU-MEM, QU-SWAP, QU-SYNC, QU-LOCK. **Carina** is the rack that packages them into what Qunnect calls the first commercially available turnkey entanglement-distribution system (the company's claim).

## The formal version

**A link attempt is a Bernoulli trial.** The source is fired $f$ times per second (the attempt rate). Each attempt succeeds, meaning a herald is produced, with probability

$$p = p_\text{pair}\,\eta_\text{ch}\,\eta_\text{det},$$

where $p_\text{pair}$ is the chance the source emits a pair in that attempt, $\eta_\text{ch}=10^{-\text{dB}/10}$ is the channel transmission ([decibels and transmission](../reference.md#decibels-and-transmission)), and $\eta_\text{det}$ is the detector efficiency.

*In words: every box between birth and click multiplies in its own survival probability, and the product is usually small.*

**Heralds arrive as a Poisson-like stream.** The number of attempts $N$ until the first success is geometric:

$$P(N=n)=(1-p)^{n-1}p,$$

$$\mathbb E[N]=\frac1p,\quad P(N>n)=(1-p)^n\approx e^{-np}.$$

So the herald rate and the mean time between heralds are

$$R_h = f\,p,\quad \bar t = \frac{1}{f\,p}.$$

*In words: success is rare per try but tries are fast, so you get a steady trickle of heralds at rate "attempts per second times odds per attempt".*

**The herald is not free: it travels at the speed of light in fiber.** With group velocity $v\approx2\times10^8$ m/s (about 5 µs per km), a link of length $L$ whose stay-home photon must wait for news from the far end needs storage of at least

$$t_\text{hold} \ge \frac{2L}{v},$$

one trip for the photon out, one for the herald back.

*In words: the memory has to outlast a round trip of light across the link, or the herald arrives to find nothing left to use.*

This is the same logic as [heralded single photons](../../photonics-quantum-optics/lessons/03-06-single-photon-sources-photodetection.md), where one click announces its partner. Here it is promoted to a network signal: the herald is the link layer's "delivery receipt" ([6.2](06-02-the-network-stack-and-timing.md); see [heralding](../reference.md#heralding)).

## Picture

![Block diagram. Node A and Node B are Carina racks, each with a QU-SRC pair source, an APC injector and a QU-MEM memory. The 795 nm photon goes down from each source into its memory. The 1324 nm photon from each node travels through buried fiber to a middle station, through an APC compensator, into QU-SWAP, which does a Bell-state measurement with detectors. Dashed classical herald lines run from QU-SWAP back to both memories. A bar along the bottom shows QU-SYNC and QU-LOCK serving every box.](assets/01-02-fig1.svg)

Each box, the problem it solves, the number that grades it, and where the course opens it ([Carina product stack](../reference.md#carina-product-stack)):

| Box | Physical problem it solves | The one number | Opened in |
|---|---|---|---|
| **QU-SRC** (source) | Make entangled pairs, one photon at an atomic line, one at a fiber band | pair rate *at* a stated fidelity | [3.1](03-01-rubidium-vapor-vs-crystal-sources.md), [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) |
| Fiber (customer's) | Carries the photon, but loses it and rotates it | loss in dB | [2.1](02-01-loss-and-the-telecom-bands.md), [2.3](02-03-drift-in-buried-fiber.md), [2.4](02-04-sharing-fiber-with-classical-traffic.md) |
| **QU-APC** | Undo the fiber's drifting polarization rotation | fidelity held over time (uptime) | [4.1](04-01-learning-the-fibers-rotation.md)–[4.3](04-03-reading-the-gothamq-result.md) |
| Detectors (SNSPD, SPAD) | Turn a photon into a click | efficiency, jitter, dark counts | [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) |
| **QU-MEM** | Hold one photon while heralds travel and other links catch up | coherence time, efficiency, fidelity | [5.1](05-01-why-memories.md), [5.2](05-02-room-temperature-quantum-memories.md) |
| **QU-SWAP** | Join two links via a BSM | success probability, swapped fidelity | [5.3](05-03-bell-state-measurement-and-swapping.md), [5.4](05-04-repeater-chains-and-distillation.md) |
| **QU-SYNC** | Agree on which time slot clicked, across kilometres | timing error, well below a ns | [6.2](06-02-the-network-stack-and-timing.md) |
| **QU-LOCK** | Keep lasers and photons on the atomic frequency | frequency stability | [3.1](03-01-rubidium-vapor-vs-crystal-sources.md), [5.2](05-02-room-temperature-quantum-memories.md) |

Notice the shape. The top four rows make **one link**. The memory and swap rows make **links into a network**. Sync and lock are the plumbing under everything.

## Worked examples

**Example 1 (a heralded link, end to end).** A vendor, call it Acme Quantum, runs a 10 km point-to-point link: fiber at 0.33 dB/km plus 1.0 dB of components, a pulsed source fired at $f=5\times10^6$ attempts/s with $p_\text{pair}=0.02$, and a 0.90-efficient detector at the far end.

Loss: $10\times0.33+1.0=4.3$ dB, so $\eta_\text{ch}=10^{-0.43}=0.372$.

Success per attempt: $p=0.02\times0.372\times0.90=6.69\times10^{-3}$, so about 150 attempts per herald on average.

Herald rate: $R_h=5\times10^6\times6.69\times10^{-3}=3.34\times10^4$ heralds/s, one every $\bar t\approx30$ µs.

Now the catch. The photon takes $10\times5=50$ µs to reach the far end and the herald another 50 µs to come back, so $t_\text{hold}\ge100$ µs. In that time the source fires $5\times10^6\times10^{-4}=500$ more attempts. The herald for one pair arrives after several more pairs have been born and sent. A network has to keep track of which stored photon a given herald belongs to: that is exactly why the clock (QU-SYNC) is a product, not an afterthought.

**Example 2 (Qunnect's published scorecard, box by box).** Put the numbers from Qunnect's two papers into the table.

- *Source + fiber + APC (GothamQ, 34 km NYC loop, 2024).* Up to about $5\times10^5$ pairs/s end to end with fidelity bounded above 0.84; about 0.99 fidelity at about $2\times10^4$ pairs/s. Same hardware, a factor of 25 in rate, traded for fidelity ([1.3](01-03-fidelity-and-rate.md)).
- *APC.* 99.84% uptime over more than 15 days. Downtime is $0.0016\times15\times24\times60=34.6$ minutes total, about 2.3 minutes a day.
- *Memory (2025 paper).* Coherence time 2.6 µs, 1,200 photon–memory pairs/s at 80% fidelity, internal efficiency 5.2% for source photons ([memory figures of merit](../reference.md#quantum-memory-figures-of-merit)). In 2.6 µs light covers $2.6\times10^{-6}\times2\times10^8=520$ m of fiber. By the hold-time rule, this memory can wait for a herald only over a link of half that, $L\le vt/2=260$ m, not tens of kilometres.
- *Swap, sync, lock.* Neither paper reports a swap between independent sources. These boxes exist in the product line; this course's sources give them no published number.

The honest scorecard: the **link** boxes are demonstrated on buried city fiber; the **network** boxes (memory that waits, swap that joins) are where the open engineering is.

## Watch out

- **You might think the herald is the qubit arriving.** It is a few classical bits saying a qubit arrived. It travels over ordinary fiber or Ethernet, can be copied and amplified, and never carries the quantum state.
- **You might think a better detector fixes a long link.** Detectors multiply $p$ by at most $1/\eta_\text{det}$ (about 1.1 from a 0.90 SNSPD). Fiber loss multiplies it by $10^{-\text{dB}/10}$. Past a few tens of km, the fiber row of the table dominates every other row ([1.4](01-04-the-loss-wall.md)).
- **You might think "room temperature" covers every box.** Qunnect's sources and memories are warm vapor, with no cryogenics or laser cooling. But the 1324 nm photons in GothamQ were detected on an [SNSPD](../reference.md#snspd-vs-spad), which runs cryogenically. "Room temperature" describes the atoms, not the detectors.

## Business lens

A modular line (one SKU per box) lets a lab buy only a source, or only APC for an existing setup. That is how the testbed market buys. An integrated rack (Carina) is what an **operator** buys. It has to install in a telecom hut, run on that operator's existing fiber, and survive a 3 a.m. outage with no PhD on site. "Turnkey" therefore has a testable meaning: automatic polarization compensation, automatic laser locking, remote monitoring, and an uptime number. GothamQ's 99.84% over 15 days is the right *kind* of evidence: the figure an operator recognises, measured on leased commercial fiber.

Two honest caveats for any pitch meeting. First, the SNSPD needs a cryostat in the rack or nearby, and that is a cost and maintenance line. Second, a 2.6 µs memory cannot yet wait for a herald across a metro link. Today Carina sells **links**. The **repeater** story (memory plus swap) is the roadmap, and it is where competitors' memory bets are aimed too ([5.5](05-05-repeater-generations-and-platform-bets.md)). A customer asking "can I chain these?" deserves that answer.

## One-liner

> A quantum network is a pipeline: make a pair, send one photon, undo the fiber, herald the click, hold the other photon, swap, all on a shared clock, and every box is graded by one number.

## Problems

**P1 (🟢)** Classify each customer symptom by the box most likely responsible, with a one-line reason. (a) "Fidelity drops every afternoon and recovers overnight; the pair rate is unchanged." (b) "Both links herald fine, but swaps at the middle station almost never succeed." (c) "The pair rate halved overnight; fidelity is unchanged."

**P2 (🟡)** A link heralds success with probability $p=0.01$ per attempt at $f=10^6$ attempts/s. Treat attempts as independent. (a) Find the expected heralds per second and the mean time between heralds. (b) What is the probability that a 500 µs window contains no herald at all?

**P3 (🔴, practical)** A customer runs a 60 km O-band link (fiber at 0.33 dB/km; ignore components). Their complaint: "fidelity is fine, rate is too low." The traveling photon is already detected at 90% efficiency. You can upgrade one box: the detector, the source (brighter), or the APC (faster cycles). In three sentences or fewer, say which you would upgrade first and why, with at least one number.

<details>
<summary>Solutions</summary>

**P1**

**Accept:** (a) fiber drift or APC; (b) swap, sync or lock (indistinguishability or timing); (c) loss or detection, with the reasons below.

(a) **Polarization drift / QU-APC.** Temperature cycles daily and stresses buried fiber, rotating polarization. Rotation lowers fidelity without removing photons, so the rate holds. Either the APC is not triggering often enough or its threshold is too loose.

(b) **QU-SWAP, QU-SYNC or QU-LOCK.** Each link works, so source, fiber and APC are fine. A BSM needs the two photons to be indistinguishable: same color (lock), same arrival time slot (sync), same polarization. A timing offset or frequency mismatch kills the swap while leaving each link healthy.

(c) **Loss or detection.** Fewer photons arrive but those that do are still entangled: a new loss somewhere (a dirty connector, a fiber bend, a re-route through a longer path) or a detector losing efficiency. Measure the link's dB and compare with yesterday.

---

**P2** (a) $R_h=fp=10^6\times0.01=10^4$ heralds/s. Mean time between heralds $\bar t=1/(fp)=10^{-4}$ s $=100$ µs.

(b) A 500 µs window holds $10^6\times5\times10^{-4}=500$ attempts. All must fail:

$$P(\text{none})=(1-0.01)^{500}=0.0066\approx e^{-5}=0.0067.$$

So about 0.66% of 500 µs windows are empty: rare, but at 2,000 windows per second it happens about 13 times a second. A memory that must wait for "the other link" has to cover this tail, not just the mean.

---

**P3** *(practical)*

**Accept:** any choice defended with the 60 km loss (about 20 dB, transmission about 1%) and the right reason a rival choice is weak. The best answer also says no box removes the fiber ceiling.

**Must hit:**

- Loss: $60\times0.33=19.8$ dB, so $\eta=10^{-1.98}=0.0105$; the fiber, not a box, sets the scale.
- Detector upgrade gains at most $1/0.90=1.11$, about 11%.
- APC improves fidelity and uptime, not rate, and fidelity is already fine.
- A brighter source raises the rate in proportion, but costs fidelity (multi-pair emission, [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md)), so it only works while fidelity has headroom.

**Model answer:** Upgrade the source: rate scales directly with pair rate, whereas the detector can add at most 11% and APC does nothing for rate. Since the customer has fidelity to spare, they can spend some of it on brightness. But 60 km of fiber costs 19.8 dB (about 1% transmission), so a big jump in rate needs a shorter path or a midpoint station, not a better box.

</details>

## Connections

- **Backward:** [1.1](01-01-what-a-quantum-network-delivers.md) said the payload is entanglement; this lesson is the factory that makes it. The swap at the middle station is [QC 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md)'s P3 in hardware, and the herald is [photonics 3.6](../../photonics-quantum-optics/lessons/03-06-single-photon-sources-photodetection.md)'s heralded photon promoted to a network signal.
- **Forward:** [1.3](01-03-fidelity-and-rate.md) scores the output of this pipeline; [1.4](01-04-the-loss-wall.md) explains why the fiber row dominates at distance. Modules 2–5 open the boxes in table order. [5.1](05-01-why-memories.md) turns the geometric waiting of this lesson into the memory's payoff. [6.2](06-02-the-network-stack-and-timing.md) turns the boxes into layers.
- **Sideways:** this is the same layering idea as the internet's stack in [computer-networks 1.1](../../computer-networks/lessons/01-01-packet-switching-and-layers.md): physical (photons in fiber), link (heralded pairs), network (swaps). The herald plays the role of an acknowledgment, with one difference: you can't retransmit the lost qubit, only try again with a fresh pair.
