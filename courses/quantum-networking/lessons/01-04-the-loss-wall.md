# Quantum Networking · Lesson 1.4: The loss wall

> ⏱ ~15 min · Module 1: The map · Builds on: [1.3 Fidelity and rate](01-03-fidelity-and-rate.md), [`quantum-computing` 2.3 No-cloning](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md) · Unlocks: [2.1](02-01-loss-and-the-telecom-bands.md), [5.1](05-01-why-memories.md), [5.4](05-04-repeater-chains-and-distillation.md)

## Why this matters

Every quantum-networking pitch eventually meets one question: *how far?* The honest answer is set by a single fact. Fiber loses photons exponentially with distance, and a quantum signal cannot be boosted along the way. The result is a hard ceiling, the PLOB bound, on how much entanglement any repeaterless link can deliver, however clever the hardware. It explains why every real deployment today is a city-scale loop. It also explains why memories and repeaters are the prize the whole industry is chasing.

## The idea

Picture a bucket brigade where every 10 meters a fixed fraction of the water spills. Over a short line you lose a little. Over a long line you lose *a fixed fraction per stretch*, so what arrives shrinks geometrically. At 0.2 dB/km, each 10 km of fiber passes only 63% of the photons, and each 50 km passes a tenth. 500 km is ten such factors of ten.

Classical telecom solved this decades ago: put an amplifier (an erbium-doped fiber amplifier, EDFA) every ~80 km and push the signal back up. A classical pulse contains millions of photons, so copying it is trivial. A qubit is one photon in an unknown state, and an amplifier that made faithful copies of it would be a quantum cloner, which [no-cloning](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md) forbids. You can build amplifiers, but they add noise that destroys exactly the quantum information you wanted to boost.

So a quantum link without repeaters is a single long bucket brigade. The PLOB bound turns that into a number: you can get **at most about 1.44 ebits per photon that would have survived the trip**. (An *ebit* is one Bell pair's worth of entanglement, the unit of [1.3](01-03-fidelity-and-rate.md).) No encoding, protocol or classical side-channel beats it.

## The formal version

**Fiber loss.** A fiber with attenuation $\alpha$ (in dB/km) and length $L$ (km) has [transmission](../reference.md#decibels-and-transmission)

$$\eta = 10^{-\alpha L/10} = e^{-L/L_\text{att}}, \quad L_\text{att} = \frac{10}{\alpha \ln 10}.$$

*In words: losses in dB add with length, so the surviving fraction $\eta$ falls exponentially, by a factor $e$ every attenuation length $L_\text{att}$.* At 0.2 dB/km ([C-band](../reference.md#fiber-attenuation-by-band)), $L_\text{att}\approx21.7$ km. At 0.33 dB/km (O-band, where Qunnect's 1324 nm photon travels), $L_\text{att}\approx13.2$ km. [2.1](02-01-loss-and-the-telecom-bands.md) opens up the bands.

**No faithful amplifier.** The best possible machine that turns one unknown qubit into $M$ copies gives each copy an average fidelity

$$F_\text{clone}(M) = \frac{2M+1}{3M}.$$

*In words: two copies already cost you (fidelity 5/6), and as the gain grows the copies decay to 2/3, the fidelity of just measuring the qubit and guessing.* [QC 2.3](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md) gave both endpoints. A high-gain quantum amplifier is therefore no better than measure-and-prepare, which [1.3](01-03-fidelity-and-rate.md) showed is the classical line.

**The [PLOB bound](../reference.md#plob-bound)** (Pirandola, Laurenza, Ottaviani, Banchi, *Nat. Commun.* 2017). Over a pure-loss channel of transmission $\eta$, with no repeater in between and unlimited two-way classical communication allowed, the maximum entanglement (or secret key) per channel use is

$$C(\eta) = -\log_2(1-\eta) \ \text{ebits per use}.$$

For small $\eta$, using $-\ln(1-\eta)\approx\eta$:

$$C(\eta) \approx \frac{\eta}{\ln 2} \approx 1.44\,\eta.$$

*In words: no protocol gets more than about 1.44 ebits for each photon the fiber lets through; a hundred attempts across a 20 dB link buy at most about 1.45 ebits.* We state it without proof; it is a capacity in the sense of [`information-theory` 3.1](../../information-theory/lessons/03-01-discrete-channels-capacity.md), proved by bounding how much entanglement any protocol can squeeze through the channel.

**Per second.** If the link makes $f$ channel uses (attempts, or optical modes) per second,

$$R_\text{max} = f\,C(\eta).$$

*In words: a faster clock helps linearly, distance hurts exponentially, and exponential wins.*

## Picture

![A log-scale plot of the repeaterless PLOB ceiling in ebits per second versus fiber length from 0 to 500 km, at one billion channel uses per second. A blue line for 0.2 dB per km and a steeper red line for 0.33 dB per km both fall as straight lines on the log axis. A dashed horizontal line marks one ebit per second, and a shaded band marks metro distances under 50 km.](assets/01-04-fig1.svg)

On a log axis the wall is a straight line: every 10 dB of loss costs a factor of ten in rate. The red O-band line falls faster, losing a factor of ten every 30 km instead of every 50 km. The green band is where every network in this course lives today.

## Worked examples

**Example 1 (the numbers that make the wall).** Take 0.2 dB/km and a generous $f=10^9$ uses per second.

- **10 km:** 2 dB, $\eta=0.631$. Exactly, $C=-\log_2(0.369)=1.438$ ebits per use. The shortcut $1.44\,\eta=0.91$ is badly off: the approximation is for *long* links only.
- **100 km:** 20 dB, $\eta=0.01$, $C=0.0145$.
- **150 km:** 30 dB, $\eta=10^{-3}$, $C=1.44\times10^{-3}$, so $R_\text{max}=1.44\times10^{6}$ ebits/s. Comfortable.
- **500 km:** 100 dB, $\eta=10^{-10}$, $C=1.44\times10^{-10}$, so $R_\text{max}=0.144$ ebits/s, **one ebit every 6.9 s**, as a ceiling, with perfect hardware.

At 0.33 dB/km the 500 km link is 165 dB, and the ceiling is $4.6\times10^{-8}$ ebits/s: one ebit every 254 days. That is the wall.

**Example 2 (where GothamQ sits).** Qunnect's GothamQ loop is 34 km of buried New York fiber with a measured fiber loss of 14.45 dB. So $\eta_\text{fiber}=10^{-1.445}=0.0359$: about 3.6% of photons survive the fiber alone. Then

$$C = -\log_2(1-0.0359) = 0.0527 \ \text{ebits per use}.$$

At an assumed $10^9$ uses per second, the ceiling is $5.3\times10^{7}$ ebits/s. The paper reports end-to-end rates of nearly $5\times10^5$ pairs/s, about a hundredth of that ceiling (and those pairs are not perfect ebits). So at metro scale the binding constraints are the source and detectors, not physics' wall.

Now string ten such loops end to end, 340 km. Loss in dB scales with length, so the fiber is 144.5 dB, $\eta=3.5\times10^{-15}$, and the ceiling falls to $5.1\times10^{-6}$ ebits/s: **one ebit every 2.3 days**. The same hardware that is comfortable across a city is useless across a state.

**Repeaters, in one paragraph.** The way out is to stop sending one photon the whole way. Cut the 500 km link into ten 50 km segments. Each segment has $\eta=0.1$ instead of $10^{-10}$. Make entanglement on each segment independently, **hold** each success in a quantum memory until its neighbors also succeed, then join the segments with Bell-state measurements: entanglement swapping, which you did ideally in [QC 2.4 P3](../../quantum-computing/lessons/02-04-quantum-teleportation.md). The rate then scales with the segment transmission rather than the total one, up to overheads. Memories are the hard part, which is why [5.1](05-01-why-memories.md), [5.4](05-04-repeater-chains-and-distillation.md) and [5.5](05-05-repeater-generations-and-platform-bets.md) exist. A [quantum repeater](../reference.md#quantum-repeater) is exactly this, and PLOB does not apply to it because the middle nodes are not passive fiber.

**Today's workaround: [trusted nodes](../reference.md#trusted-nodes).** For QKD, long backbones chain short links through relay stations. Each station makes a key with its neighbor, then passes the end-to-end key along hop by hop, encrypted under the hop keys. It works at any distance, but every relay holds the key in the clear, so the security is "trust every building on the route". It also delivers no end-to-end entanglement, so it cannot link quantum computers or teleport anything.

## Watch out

- **You might think a better detector or a brighter source breaks the wall, but actually PLOB is a ceiling on the channel itself.** Better hardware moves you *up toward* the line in the figure. Only putting active nodes into the channel (repeaters or relays) changes the line's slope.
- **You might think a 10× faster clock buys a lot of distance, but actually it buys exactly 10 dB.** That is 50 km of C-band fiber, or 30 km of O-band, and then you are back on the wall.
- **You might think twin-field QKD "beats PLOB without a repeater", but actually it puts a measuring station in the middle.** Its key rate scales like $\sqrt\eta$ because each photon crosses only half the link. It is a minimal relay, it makes key rather than storable entanglement, and [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) covers it.

## Business lens

Distance defines the market. Tens of kilometers is reachable today without repeaters, with orders of magnitude of headroom under the PLOB line. That is why every Qunnect deployment is a city-scale network: GothamQ in New York, the Berlin work with Deutsche Telekom's T-Labs (teleportation over a 30 km loop of live commercial fiber, reported January 2026), Bozeman, and ABQ-Net in Albuquerque. Metro is the addressable market now: campuses, labs, data centers and government sites within one city.

Intercity is a later market and needs repeaters, which means memories. Be honest about the gap. Qunnect's warm-vapor memory has a 2.6 µs coherence time (2025 paper), while light takes about 4.9 µs to cross a single kilometer of fiber. It cannot yet hold a qubit while a [heralding](../reference.md#heralding) signal crosses even one kilometer. Until it can, a trusted-node QKD vendor can quote longer distances than any Qunnect link. The fair reply: they deliver relayed keys, Qunnect delivers end-to-end entanglement, and their relays hold your keys.

When anyone claims a long distance, ask: **repeaterless, trusted-node, or a middle station?**

## One-liner

> Fiber loss is exponential and quantum signals cannot be amplified, so a repeaterless link carries at most $-\log_2(1-\eta)\approx1.44\,\eta$ ebits per use: comfortable across a city, hopeless across a continent, and the reason memories are the prize.

## Problems

**P1 (🟢)** A 50 km link uses O-band fiber at 0.33 dB/km. Find (a) the loss in dB and the transmission $\eta$, and (b) the PLOB ceiling in ebits per channel use, exactly and with the $1.44\,\eta$ shortcut.

**P2 (🟡)** A link runs at $f=10^8$ channel uses per second over C-band fiber at 0.2 dB/km. (a) At what length does the PLOB ceiling fall to one ebit per second? (b) The engineers upgrade to $10^9$ uses per second. How many extra kilometers does that buy at the same one-ebit-per-second ceiling?

**P3 (🔴, practical)** A startup, call it Acme Quantum, proposes a 300 km intercity link with **no repeaters**, sending 1324 nm photons over fiber at 0.33 dB/km, and promises "1,000 entangled pairs per second, end to end." (a) Assuming $10^9$ channel uses per second, compute the PLOB ceiling in ebits per second and compare it with the promise. (b) In three sentences or fewer, tell a board member what is physically achievable and what the proposal must actually be using.

<details>
<summary>Solutions</summary>

**P1** (a) Loss $=0.33\times50=16.5$ dB, so $\eta=10^{-1.65}=0.0224$ (2.24% survive).

(b) Exactly, $C=-\log_2(1-0.0224)=-\log_2(0.9776)=0.0327$ ebits per use. The shortcut gives $1.44\times0.0224=0.0323$, within about 1%, because $\eta$ is already small.

---

**P2** (a) We need $f\,C(\eta)=1$, so $C(\eta)=10^{-8}$. That is tiny, so the shortcut is exact to many digits: $\eta/\ln 2=10^{-8}$, so

$$\eta = 10^{-8}\ln 2 = 6.93\times10^{-9}.$$

In dB, $-10\log_{10}(6.93\times10^{-9})=81.6$ dB. At 0.2 dB/km that is $81.6/0.2=408$ km.

(b) With $f=10^9$ the required $\eta$ is ten times smaller, $6.93\times10^{-10}$. A factor of ten in $\eta$ is exactly 10 dB, and $10/0.2=50$ km. The new crossing is $408+50=458$ km. A tenfold faster system buys **50 km**.

---

**P3** *(practical)*

(a) Loss $=0.33\times300=99$ dB, so $\eta=10^{-9.9}=1.26\times10^{-10}$. Then $C\approx1.44\times1.26\times10^{-10}=1.82\times10^{-10}$ ebits per use, and $R_\text{max}=10^9\times1.82\times10^{-10}=0.18$ ebits/s, about one ebit every 5.5 s. The promise of 1,000 pairs/s is about **5,500 times** the ceiling for perfect hardware.

(b)

**Accept:** any answer that (1) says direct repeaterless entanglement over 300 km is capped near one pair every few seconds at best, so the claim is impossible as stated, and (2) names trusted relay nodes (or some other active middle station) as what the design must really be, with the cost that relays see the key and no end-to-end entanglement is delivered.

**Must hit:**

- The physical cap (fractions of an ebit per second) and that no hardware improvement removes it.
- What the proposal must be: trusted nodes, or an unstated repeater/relay.
- What trusted nodes give up: every relay holds the key, and there is no end-to-end entanglement.

**Model answer:** Physics caps a repeaterless 300 km link of this fiber at roughly one entangled pair every five seconds, even with perfect equipment, so 1,000 pairs per second end to end is not achievable as described. To hit that number they must be chaining short links through relay stations, either trusted nodes or a repeater they have not mentioned. Trusted nodes can deliver keys, but every relay sees those keys and no end-to-end entanglement exists, so we should ask which one it is before believing the claim.

</details>

## Flashback

**From Lesson [1.2](01-02-the-stack-in-one-picture.md) (The stack in one picture):** A heralded link is 15 km long: O-band fiber at 0.33 dB/km plus 1.5 dB of components. The source fires $f=2\times10^6$ attempts/s with pair probability $p_\text{pair}=0.01$ per attempt, and the far detector has efficiency 0.85. Take light in fiber to need 5 µs per km. (a) Find the success probability per attempt, the herald rate, and the mean time between heralds. (b) What is the minimum time the stay-home photon must be held before its herald can return, and how many attempts does the source fire in that time?

<details>
<summary>Solution</summary>

(a) Loss: $0.33\times15+1.5=4.95+1.5=6.45$ dB, so $\eta_\text{ch}=10^{-0.645}=0.226$. Then

$$p=p_\text{pair}\,\eta_\text{ch}\,\eta_\text{det}=0.01\times0.226\times0.85=1.92\times10^{-3},$$

about one success in 519 attempts. Herald rate $R_h=fp=2\times10^6\times1.92\times10^{-3}=3.85\times10^3$ heralds/s, so $\bar t=1/R_h=260$ µs.

(b) One trip out and one back: $t_\text{hold}\ge 2\times15\times5=150$ µs. In that time the source fires $2\times10^6\times1.5\times10^{-4}=300$ more attempts. So every stored photon must be tagged by its time slot, since several hundred later attempts are in flight before its herald returns.

</details>

## Connections

- **Backward:** [1.3](01-03-fidelity-and-rate.md) defined the ebit and the classical 2/3 line that a high-gain amplifier collapses to. [QC 2.3](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md) is why there is no quantum EDFA, and [QC 2.4 P3](../../quantum-computing/lessons/02-04-quantum-teleportation.md) is the ideal swap that repeaters are built from.
- **Forward:** [2.1](02-01-loss-and-the-telecom-bands.md) makes the dB arithmetic fluent and explains the bands. [5.1](05-01-why-memories.md) shows how memories change the waiting time, [5.4](05-04-repeater-chains-and-distillation.md) tracks fidelity along a repeater chain, and [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) covers twin-field QKD.
- **Sideways:** PLOB is a channel capacity, the quantum cousin of the binary symmetric channel's $1-h(p)$ in [`information-theory` 3.2](../../information-theory/lessons/03-02-canonical-channels.md). The decibel bookkeeping is the same link budget an RF or telecom engineer does; only the "add an amplifier" step is gone.
