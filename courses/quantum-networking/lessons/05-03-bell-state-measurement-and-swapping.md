# Quantum Networking · Lesson 5.3: Bell-state measurement and swapping

> ⏱ ~15 min · Module 5: Memories and repeaters · Builds on: [5.1 Why memories](05-01-why-memories.md), [1.3 Fidelity and rate](01-03-fidelity-and-rate.md), [`photonics-quantum-optics` 4.1](../../photonics-quantum-optics/lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md), [`quantum-computing` 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md) · Unlocks: [5.4 Repeater chains and distillation](05-04-repeater-chains-and-distillation.md)

## Why this matters

A single link tops out at the loss wall ([1.4](01-04-the-loss-wall.md)). To go further, you build two shorter links and **join** them at a middle station. The join is a [Bell-state measurement](../reference.md#bell-state-measurement) (BSM) on two photons that have never met, one from each link. You saw the ideal version on paper in [`quantum-computing` 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md) P3. This lesson asks what it costs in hardware. With photons, the answer is three bills: a hard 50% ceiling, a demand that photons from independent sources be identical, and a fidelity penalty that compounds with every join. This is QU-SWAP's job, and every repeater in [5.4](05-04-repeater-chains-and-distillation.md) inherits these bills.

## The idea

**Swapping in one breath.** Alice holds photon A, entangled with $B_1$ at the middle station. Charlie holds C, entangled with $B_2$. Measure $B_1B_2$ jointly in the Bell basis and A–C come out entangled ([entanglement swapping](../reference.md#entanglement-swapping)), although A and C never interacted. Each of the four outcomes is equally likely, and each leaves A–C in a *known* Bell state, which a Pauli correction (or just bookkeeping) turns into $|\Phi^+\rangle$.

**Why a beam splitter can do (half of) it.** Photons are bosons: a two-photon state must be symmetric under swapping the photons. Write each photon's state as *path* × *polarization*. The singlet $|\Psi^-\rangle=(|HV\rangle-|VH\rangle)/\sqrt2$ is antisymmetric in polarization, so its path part must be antisymmetric too. On a 50:50 beam splitter that forces **one photon out of each port**. The other three Bell states are symmetric, so their photons **bunch**, the Hong–Ou–Mandel effect ([`photonics-quantum-optics` 4.1](../../photonics-quantum-optics/lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md)). Polarizing beam splitters (PBS) after each port then sort H from V:

- $|\Psi^-\rangle$: one click per port, crossed polarizations.
- $|\Psi^+\rangle$: both photons in one port, crossed polarizations, so two different detectors click.
- $|\Phi^\pm\rangle$: both photons in one port with the *same* polarization, so both land in one detector. $\Phi^+$ and $\Phi^-$ differ only by a relative sign that no click pattern can see.

Two of four states are identified. The other half of the time the station knows it failed, and the attempt is discarded.

**Why the photons must be twins.** The bunching is interference between "both transmit" and "both reflect". It only works if nothing (colour, bandwidth, arrival time, polarization mode) labels which photon is which. Partly distinguishable photons partly leak which-path information, and the swapped pair partly decoheres.

## The formal version

**The linear-optics ceiling.** Lütkenhaus and coworkers proved that no setup of beam splitters, phase shifters and detectors can distinguish all four Bell states (1999). Without extra ancilla photons, 50% is the best possible (2001). In words: the 50% is a theorem about linear optics, not a missing engineering trick. See [linear-optics BSM limit](../reference.md#linear-optics-bsm-limit).

With detector efficiency $\eta_d$ on each of the two photons, a heralded swap succeeds with

$$P_\text{swap} = \tfrac12\,\eta_d^2 .$$

In words: half the Bell states are visible, and both photons must also be counted.

**The noisy swap rule.** Feed in two [Werner states](../reference.md#werner-state) with good fractions $p_1,p_2$. Three facts settle the output.

1. Every Bell outcome has probability $\tfrac14$ for every term of the mixture, because each half of a Werner pair alone is $I/2$. So the conditioned output is *bilinear* in the two inputs.
2. Bell ⊗ Bell → Bell, the ideal swap.
3. If either input is $I/4$, its far end (A or C) is uncorrelated with everything, and nothing done at the middle can correlate it. The output is $I/4$.

Expanding the product of the two mixtures gives the [swap fidelity rule](../reference.md#swap-fidelity-rule):

$$\rho' = p_1p_2\,|\Phi^+\rangle\langle\Phi^+| + (1-p_1p_2)\,\frac I4 .$$

$$F' = \frac{1+3p_1p_2}{4} = F_1F_2 + \frac{(1-F_1)(1-F_2)}{3}.$$

In words: good fractions multiply, so a swap is only as good as the product of its links. Equivalently, with infidelities $e_i=1-F_i$,

$$1-F' = e_1+e_2-\tfrac43\,e_1e_2,$$

so for good links the **infidelities roughly add**. Both forms check out against explicit $16\times16$ density matrices for all four outcomes, and against a simulated linear-optics BSM.

**Distinguishability.** Let the two photons' internal wave packets overlap with amplitude $v$, so the HOM dip visibility is $V=v^2$. Then, for the two identified patterns,

$$F' = p_1p_2\,\frac{1+V}{2} + \frac{1-p_1p_2}{4}.$$

In words: the missing visibility dephases the swapped pair, turning a fraction $(1-V)/2$ of it into the sign-flipped partner Bell state. At $V=0$ the clicks reveal each photon's polarization, and A–C become a classical mixture with $F'=\tfrac12$. The herald probability does not change. Only the pairs get worse. See [HOM visibility](../reference.md#hom-visibility).

## Picture

![Schematic of a linear-optics Bell-state measurement. A photon from link 1 enters a 50:50 beam splitter from the left and a photon from link 2 enters from below. Output port c goes to a polarizing beam splitter that sends H to detector c_H and V to detector c_V. Output port d goes to a second polarizing beam splitter that sends H to detector d_H and V to detector d_V. A table beside it reads: clicks c_H plus d_V or c_V plus d_H mean Psi minus; clicks c_H plus c_V or d_H plus d_V mean Psi plus; both photons in one detector means Phi plus or Phi minus, which cannot be told apart. Two of the four Bell states are identified, so success is 50% at best.](assets/05-03-fig1.svg)

Read it as a sorting machine. The beam splitter sorts by *symmetry*: the antisymmetric $\Psi^-$ splits up, while everything else bunches. The PBSs then sort by polarization. $\Phi^+$ and $\Phi^-$ end in the same bin.

## Worked examples

**Example 1 (mechanical).** Two links, each $F=0.90$. Then $p=(3.6-1)/3=0.8667$ and $p_1p_2=0.7511$, so

$$F'=\frac{1+3(0.7511)}{4}=0.8133 .$$

Check: $0.81+0.01/3=0.8133$. CHSH survives, with $S=2\sqrt2\times0.7511=2.12$. The QKD line at 0.835 does not. One more swap, three links, gives $p^3=0.651$ and $F=0.738$, below the CHSH line at 0.780. That is the decay [5.4](05-04-repeater-chains-and-distillation.md) fights.

**Example 2 (Qunnect's memory, swapped on paper).** Qunnect's 2025 memory paper reports a 1324 nm photon entangled with a room-temperature Rb memory at fidelity up to 0.902. Picture two such nodes sending their telecom photons to a midpoint BSM, leaving the two *memories* entangled. This is a composition of reported numbers, not a reported experiment.

- Perfect HOM interference: $p=0.8693$, $p^2=0.7557$, $F'=0.817$. That is entangled and violates CHSH, though not by much.
- $V=0.90$ between photons from two independent sources: $F'=0.7557\times0.95+0.2443/4=0.779$, a hair *below* the CHSH line at 0.780.
- At the paper's high-rate point, 1,200 pairs/s at 0.80: $p^2=0.538$, $F'=0.653$. Still entangled ($>\tfrac12$), but useless for CHSH or keys.

Both memories must also hold until the BSM result arrives ([5.1](05-01-why-memories.md)).

**Coherence time sets the timing budget.** A Lorentzian line of width $\Delta\nu$ has coherence time $\tau=1/(2\pi\Delta\nu)$. That is 0.16 ns at 1 GHz, Qunnect's upper bound on linewidth. A 1 THz crystal photon has 0.16 ps, a thousand times less. Arrival mismatch is judged against $\tau$, so narrowband photons tolerate a thousand times more timing error. And two Rb sources emit on the same atomic lines, so their frequencies match by construction.

## Watch out

- **You might think the BSM must find $\Phi^+$ because the source emits $\Phi^+$.** Actually any identified Bell outcome works. The result is a *known* Bell state, and a Pauli frame update converts it.
- **You might think a falling herald rate would expose mismatched photons.** Actually partial distinguishability leaves the click rate unchanged and silently lowers fidelity. Only a HOM visibility measurement or a fidelity check catches it.
- **You might think fidelities multiply.** Actually good fractions $p$ multiply, and noise keeps a floor of $\tfrac14$. Two links at 0.80 give $F'=0.653$, not $0.80^2=0.640$.

## Business lens

QU-SWAP is the box that turns "a link" into "a network". It is a different engineering problem from distributing one pair. A single link needs a good source and a stable fiber. A swap needs **two** independent sources whose photons are identical at the middle station: same frequency, same bandwidth, same polarization after compensation, and arrival within a fraction of the coherence time. That is the job of QU-SYNC and QU-LOCK in the [Carina stack](../reference.md#carina-product-stack). It is also why cross-vendor interoperability is not automatic: a broadband crystal photon and a Rb-line photon do not interfere, so $V\approx0$. Qunnect's narrowband, atom-locked photons are a real advantage here, and worth saying in a meeting.

The honest limits: linear optics caps success at 50%, times $\eta_d^2$. If the 1324 nm photons meet at the middle station, it needs SNSPDs there too, and those are cryogenic. Every swap multiplies good fractions, so two 0.90 links lose key generation after a single swap (Example 1). The January 2026 Berlin teleportation over 30 km of live fiber shows Bell-state measurements working in the field. A customer's real question is the swapped fidelity at a stated rate.

## One-liner

> A linear-optics Bell-state measurement identifies only $\Psi^\pm$ (50% at best), demands photons from independent sources that are indistinguishable, and turns two Werner links into one with good fraction $p_1p_2$, so infidelities roughly add with every swap.

## Problems

**P1 (🟢)** Two Werner links with $F_1=0.97$ and $F_2=0.93$ are joined by one ideal swap. (a) Find the swapped fidelity $F'$. (b) Does the swapped pair still clear the QKD line at $F\approx0.835$ and the CHSH line at 0.780? Give $S$.

**P2 (🟡, practical)** A middle station uses a linear-optics BSM. Its detectors have efficiency 0.9 for each of the two photons. Both photons arrive on every attempt. (a) What fraction of attempts herald a successful swap, and how many attempts does one success take on average? (b) A pilot customer's engineer sees most attempts fail and asks whether the module is faulty. Reply in three sentences or fewer.

**P3 (🔴)** Two links deliver perfect $|\Phi^+\rangle$ pairs. Their photons have exponentially decaying wave packets with decay time $\tau=0.40$ ns. For an arrival mismatch $\delta$, the HOM visibility is $V=e^{-\delta/\tau}$. Assume the BSM detectors integrate over the whole wave packet, so they cannot time-filter. (a) What is the largest $\delta$, in ps, that keeps the swapped fidelity at or above 0.95? (b) Repeat for crystal-source photons with $\tau=1.0$ ps, and give the ratio of the two tolerances.

<details>
<summary>Solutions</summary>

**P1** (a) $p_1=(3.88-1)/3=0.960$ and $p_2=(3.72-1)/3=0.9067$, so $p_1p_2=0.8704$ and $F'=(1+3\times0.8704)/4=0.9028$.

Check with the fidelity form: $0.97\times0.93+(0.03)(0.07)/3=0.9021+0.0007=0.9028$.

(b) Yes to both. $0.9028>0.835$, and $S=2\sqrt2\times0.8704=2.46>2$.

---

**P2** (a) $P_\text{swap}=\tfrac12\times0.9\times0.9=0.405$, so 59.5% of attempts fail. The number of attempts is geometric, so the mean is $1/0.405=2.47$ attempts per success.

**(b)** *(practical)*

**Accept:** any reply that says the loss is expected physics rather than a fault, and that failures are heralded.

**Must hit:**

- Linear optics can identify at most 2 of the 4 Bell states (a proven limit), and detector efficiency takes $0.9^2$ more, so about 40% success is the design point.
- Failures are announced, so they cost rate, not fidelity: no bad pair is passed on as good.
- The real health metrics are the swapped fidelity and HOM visibility, not the success fraction.

**Model answer:** No. A linear-optics Bell measurement can recognize only two of the four Bell states, a proven limit, and with 90% detectors on both photons about 40% success is what a healthy module delivers. Every failure is flagged, so it costs you rate, never quality; the numbers to watch are the swapped fidelity and the interference visibility.

---

**P3** (a) For perfect inputs, $p_1p_2=1$, so $F'=(1+V)/2\ge0.95$ requires $V\ge0.90$. Then $e^{-\delta/\tau}\ge0.90$ gives

$$\delta\le\tau\ln\frac{1}{0.90}=0.40\text{ ns}\times0.1054=42\text{ ps}.$$

That is about 8.6 mm of fiber at $n=1.47$.

(b) $\delta\le1.0\text{ ps}\times0.1054=0.105\text{ ps}=105\text{ fs}$, about 21 µm of fiber. The ratio is $42/0.105=400$, which is just the ratio of the coherence times. Narrowband photons make the timing problem 400 times easier here.

</details>

## Flashback

**From Lesson [5.1](05-01-why-memories.md) (Why memories):** Two neighbouring 30 km elementary links each have a midpoint detection station, and each succeeds with probability $p=0.04$ per attempt. Light in fiber travels at $v=2\times10^8$ m/s, and a single-mode memory at each node attempts once per herald round trip. (a) Expected attempts until both links are ready, without memory and with ideal memories, and the speedup. (b) The herald time $t_h$, and the mean wall-clock time until both are ready in each case. (c) On average, how long does the first-ready link's qubit sit parked in its memory?

<details>
<summary>Solution</summary>

**(a)** No memory: $1/p^2=1/0.0016=625$ attempts. With memory:

$$E[\max]=\frac{3-2p}{p(2-p)}=\frac{2.92}{0.04\times1.96}=\frac{2.92}{0.0784}=37.24.$$

Speedup $625/37.24=16.8$, close to $2/(3p)=16.7$.

**(b)** $t_h=L/v=3\times10^4/(2\times10^8)=150$ µs, so at most about 6,700 attempts per second. Without memory: $625\times150$ µs $=93.75$ ms. With memory: $37.24\times150$ µs $=5.59$ ms.

**(c)** Mean idle rounds $E[\max-\min]=\dfrac{2(1-p)}{p(2-p)}=\dfrac{1.92}{0.0784}=24.49$, about $1/p=25$. Times 150 µs, that is $3.67$ ms of storage, more than 1,400 times a 2.6 µs coherence time.

</details>

## Connections

- **Backward:** the ideal swap is [`quantum-computing` 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md) P3. The bunching and $V=v^2$ come from [`photonics-quantum-optics` 4.1](../../photonics-quantum-optics/lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md). Werner pairs and fidelity thresholds come from [1.3](01-03-fidelity-and-rate.md). Narrowband Rb photons come from [3.1](03-01-rubidium-vapor-vs-crystal-sources.md).
- **Forward:** [5.4](05-04-repeater-chains-and-distillation.md) chains swaps and buys fidelity back with distillation. [5.5](05-05-repeater-generations-and-platform-bets.md) weighs ways past 50% (ancilla photons, matter-qubit BSMs). [6.2](06-02-the-network-stack-and-timing.md) sizes the clock sync that keeps $\delta$ small.
- **Sideways:** $p'=p_1p_2$ is the composition rule for depolarizing channels in [`quantum-computing` 5.1](../../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md). Swapping through a Werner pair acts on the other pair like a depolarizing channel of strength $p$, and depolarizing channels compose by multiplying their $p$.
