# Quantum Networking · Lesson 4.3: Reading the GothamQ result

> ⏱ ~15 min · Module 4: Keeping the channel alive · Builds on: [2.1](02-01-loss-and-the-telecom-bands.md), [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [3.3](03-03-proving-a-link-is-entangled.md), [4.2](04-02-compensation-as-a-control-loop.md) · Unlocks: [5.1](05-01-why-memories.md)

## Why this matters

The GothamQ paper (Craddock et al., *PRX Quantum* 5, 030330, 2024) is Qunnect's calling card. Its abstract puts three numbers in two sentences: nearly $5\times10^5$ pairs/s, about 99% fidelity, 15 days at 99.84% uptime. Read quickly, that sounds like one machine doing all three at once. It isn't. This lesson reads the paper the way a referee or a diligence analyst would: which numbers belong together, what limits each one, and what the result does not show. You already have every tool. Here you point them at one dataset.

## The idea

The experiment is simple to state. A warm-rubidium source makes $|\Phi^+\rangle$ pairs. The 795 nm photon is measured next to the source. The 1324 nm photon goes around a 34 km loop of buried, leased fiber in Brooklyn and Queens. At the far end a switch sends it either through the APC compensator or through a bypass path with no compensation. The paper reports three experiments:

1. **Fiber characterization.** Classical probes {H, D, R} at wavelengths from 1260 to 1350 nm, through 0 to 3 fibers in series. Finding: the fiber's rotation depends on wavelength and drifts in time, so you need narrowband photons and active compensation at the same wavelength, on the same fiber.
2. **Rate vs fidelity.** Turn the pump up and down; bound $F$ at each rate.
3. **The long run.** Fix the rate near $2\times10^5$ pairs/s and run for more than 15 days, alternating compensated and bypass paths.

Two different things cap the fidelity. The **source** caps it through accidental coincidences: brighter means noisier ([3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md)). The **channel** caps it through leftover polarization rotation, and the APC is told to stop correcting once it reaches 99%. So at high rate the source is the bottleneck, and at low rate the APC setting is. The headline "99%" lives at the low-rate end. The headline "$5\times10^5$" lives at the high-rate end, where the fidelity is bounded only above 0.84.

## The formal version

### Infidelities add

Model the source output as a [Werner state](../reference.md#werner-state) $\rho=a|\Phi^+\rangle\langle\Phi^+|+(1-a)I/4$ with source fidelity $F_s=(1+3a)/4$. Then let the fiber leave a residual unitary $U$ on the travelling photon, with $f_c=|\langle\Phi^+|(I\otimes U)|\Phi^+\rangle|^2$. The maximally mixed part is unchanged by $U$, so

$$F=a\,f_c+\frac{1-a}{4},$$

$$1-F=a\,(1-f_c)+(1-F_s).$$

In words: source infidelity and channel infidelity simply add, with the channel term barely shrunk by the factor $a\approx1$. See [infidelities add](../reference.md#infidelities-add).

Take the APC's 99% threshold as a floor $f_c\ge0.99$ on the channel (a modelling assumption; the APC measures its classical probes, not the pairs). Use 3.2's one-parameter model, $\text{CAR}=K/r$ with $K=2.625\times10^6$ pairs/s, fixed by the 0.88 point. Then the source's infidelity equals the APC's 1% allowance at exactly

$$r^*=3.5\times10^4\ \text{pairs/s}.$$

In words: below about $3.5\times10^4$ pairs/s, compensation is the bigger error; above it, the source is. That is why "about 0.99 at $2\times10^4$" is described as "consistent with the APC thresholds" while "0.88 at $5\times10^5$" is described as "source limited." See [rate-fidelity tradeoff](../reference.md#rate-fidelity-tradeoff).

### What the bounds mean

GothamQ never does full tomography. It records the eight counts HH, HV, VH, VV, DD, DA, AD, AA and reports the highest lower bound and lowest upper bound from its eqs. S4–S14 ([two-basis fidelity bounds](../reference.md#two-basis-fidelity-bounds), machinery in [3.3](03-03-proving-a-link-is-entangled.md)). The gap is not error bars. It comes from the Y-basis coherences that were never measured. Feeding an ideal Werner dataset through those bounds (checked numerically) gives

$$p\;\le\;F\;\le\;\frac{1+p}{2},$$

$$F=\frac{1+3p}{4}=\text{midpoint},\qquad\text{gap}=\frac{2(1-F)}{3}.$$

In words: for white noise, the lower bound *is* the Werner parameter, the true fidelity sits exactly halfway, and the window shrinks as the state improves.

### Uptime and the link budget

Uptime $U$ over a run of length $T$ leaves downtime $(1-U)\,T$; see [uptime](../reference.md#uptime). For the delivered rate, chain the factors from [2.1](02-01-loss-and-the-telecom-bands.md)'s [link budget](../reference.md#link-budget):

$$R_\text{cc}=r_\text{src}\,\eta_\text{link}\,\eta_\text{tel}\,\eta_{795}.$$

Here $r_\text{src}$ is the pair rate entering the telecom path, $\eta_\text{link}=10^{-\ell_\text{tot}/10}$ is the telecom photon's transmission, and $\eta_\text{tel}$, $\eta_{795}$ are the two arms' detection efficiencies. In words: a counted coincidence needs the pair, the fiber, and both detectors to cooperate.

## Picture

![Fidelity against delivered pair rate on a log axis from ten thousand to about two million pairs per second. A blue model curve for the source cap starts near 1 and falls to 0.80 near one million pairs per second. A green dashed line at 0.99 is the APC cap. A dotted curve, both caps at their worst, runs about 0.01 below the blue one. A vertical dotted line marks the crossover near 35 thousand pairs per second. Red marks show the paper: about 0.99 at twenty thousand, a bar from 0.937 to 0.967 at two hundred thousand, and a lower bound of 0.84 at five hundred thousand.](assets/04-03-fig1.svg)

*The curves are 3.2's model, calibrated on one point; the red marks are the paper. The 15-day bar brackets the model's 0.938 to 0.947 range at that rate.*

## Worked examples

**Example 1 (adding the caps).** A source delivers $F_s=0.97$ and the APC holds $f_c=0.99$. Then $a=(4\times0.97-1)/3=0.96$, and

$$F=0.96\times0.99+\frac{0.04}{4}=0.9604.$$

Check by adding: $0.96\times0.01+0.03=0.0396$. Fixing the channel perfectly would win back less than one point; the source owns 3 of the 4 points of infidelity.

**Example 2 (decoding the paper's numbers).**

- *The 0.84.* At $5\times10^5$ pairs/s the paper bounds $F>0.84$ and "believes" the source limits it to about 0.88. With the Werner reading, a lower bound of $p=0.84$ means $F=(1+3\times0.84)/4=0.88$. The two numbers are one statement: a Werner state at $p=0.84$. The 0.88 is inferred, not measured.
- *The 15-day bounds.* Lower 0.937 and upper 0.967 have midpoint 0.952. Treating each bound as Werner gives $F=0.953$ (from the lower) and $0.950$ (from the upper). Both match "source limited to about 95%" and 3.2's model value of 0.947.
- *The uptime.* $0.0016\times15\times24\times60=34.6$ minutes of downtime in 15 days. With a [compensation cycle](../reference.md#compensation-cycle) about every 20 s, that averages 32 ms lost per cycle. That is at the fast end of the 30–1000 ms range, so most cycles were quick (an inference; the paper reports only the total).
- *The rate.* The long-run "$2\times10^5$ pairs/s" is Z-basis coincidences with the peak detector efficiencies divided out. The detectors actually counted about $2\times10^5\times0.90\times0.68=1.2\times10^5$ coincidences/s, fewer if filter losses are included.

## Watch out

- **You might think** "nearly $5\times10^5$ pairs/s and about 99%" is one operating point. Actually they are the two ends of the rate–fidelity curve, a factor of 25 apart in rate. At $5\times10^5$ the fidelity is only bounded above 0.84.
- **You might think** "bounded above 0.937" means the fidelity is about 0.937. Actually it is a floor forced by an unmeasured basis. For a Werner state the truth sits at the midpoint of the bounds, about 0.95 here.
- **You might think** the bypass path just drifted slowly, so you could recalibrate on a schedule. Actually the paper reports discrete jumps as well as slow drifts. A jump between scheduled calibrations is lost fidelity until the next one. That is the case for a closed loop that checks every 20 s.

## Business lens

In a meeting, keep numbers in their pairs: "about 0.99 at $2\times10^4$ pairs/s; above 0.84 at $5\times10^5$; 0.94 to 0.97 for 15 days at $2\times10^5$, with 99.84% uptime." Quoting 99% next to $5\times10^5$ is the error a skeptic will catch.

Be equally clear about what GothamQ does **not** show. It used one link and no memory or swapping. One photon travelled, and the 795 nm photon was measured beside the source. The fiber was a loop that starts and ends at one site, so no inter-site timing was needed. The telecom detector was a cryogenic SNSPD. These are the limits of a link-layer result, not flaws.

A sharp investor asks next: two buildings rather than a loop? A memory in the path ([5.1](05-01-why-memories.md))? Lit fiber carrying classical traffic ([2.4](02-04-sharing-fiber-with-classical-traffic.md))? Some partial answers postdate the paper. In January 2026, Qunnect and T-Labs reported teleportation over a 30 km loop of live commercial fiber in Berlin, which speaks to lit fiber. Carina went into Bozeman and Albuquerque in 2025, which shows deployment beyond New York. In August 2026 DARPA funded next-generation compensation. Match each answer to its question, and say plainly which questions remain open.

## One-liner

> GothamQ's headline numbers are three operating points, not one: the source caps fidelity at high rate, the APC's 99% caps it at low rate, and every fidelity is a two-basis bound whose midpoint is the Werner value.

## Problems

**P1 (🟢)** A vendor reports 99.5% uptime over a 30-day run. How many minutes of downtime is that, and how does it compare with GothamQ's 15-day downtime?

**P2 (🟡)** A hypothetical 20 km link. The source sends $2\times10^6$ pairs/s into the telecom path. The fiber loses 0.38 dB/km; the compensator and switches cost 2.0 dB; connectors cost 0.4 dB in total. The telecom detector has efficiency 0.85, and the 795 nm arm has total efficiency 0.55 (coupling plus SPAD). (a) Find the total telecom loss in dB and the pair rate at the fiber output. (b) Find the counted coincidence rate. (c) At this pump, $g_{SI}=39$ ([fidelity from g_SI](../reference.md#fidelity-from-gsi)). Find the source-limited fidelity, and the worst-case delivered fidelity if the APC holds the channel at $f_c=0.99$.

**P3 (🔴, practical)** A draft press release reads: "Qunnect sends perfect entanglement across New York for weeks at a million pairs per second." Rewrite it accurately, in at most two sentences, using only the paper's numbers.

<details>
<summary>Solutions</summary>

**P1** Downtime $=(1-0.995)\times30\times24\times60=0.005\times43200=216$ minutes, or 3.6 hours.

GothamQ's was $0.0016\times21600=34.6$ minutes over 15 days. Per day: 7.2 minutes against 2.3 minutes, about three times worse.

---

**P2** (a) Total loss $=0.38\times20+2.0+0.4=7.6+2.4=10.0$ dB, so $\eta_\text{link}=10^{-1.0}=0.10$. Pairs at the fiber output: $2\times10^6\times0.10=2\times10^5$ pairs/s.

(b) $R_\text{cc}=2\times10^5\times0.85\times0.55=93{,}500$ coincidences/s.

(c) Source-limited:

$$F_s=1-\frac{3}{2(1+39)}=1-\frac{3}{80}=0.9625.$$

Then $a=(4\times0.9625-1)/3=0.95$, and the worst case with the APC floor is

$$F=0.95\times0.99+\frac{0.05}{4}=0.9405+0.0125=0.953.$$

The source contributes 0.0375 of the 0.047 infidelity, so this link runs well above the $3.5\times10^4$ crossover and is source-limited.

---

**P3** *(practical)*

**Accept:** any one or two sentences that fix all three errors (perfect, a million, and rate plus fidelity at once) and keep each fidelity paired with its rate.

**Must hit:**

- No "perfect": fidelity is bounded, about 0.99 at best and about 0.94 to 0.97 during the long run.
- No "million": the peak was nearly $5\times10^5$ pairs/s, with fidelity bounded only above 0.84 there.
- "Weeks" means more than 15 days at about $2\times10^5$ pairs/s with 99.84% uptime, over one 34 km buried-fiber loop.

**Model answer:** "Over a 34 km loop of buried New York fiber, Qunnect's automated system distributed entangled photon pairs for more than 15 days at about 200,000 pairs per second, with fidelity bounded between 0.94 and 0.97 and 99.84% uptime. In separate runs it reached nearly 500,000 pairs per second, and about 99% fidelity at lower rates."

</details>

## Flashback

**From Lesson [4.1](04-01-learning-the-fibers-rotation.md) (Learning the fiber's rotation):** Use the course's Poincaré convention: H at $+z$, D on $+x$, L on $+y$, R on $-y$. A polarimeter at the far end of a fiber reads the H probe as $\vec s_H{}'=(0.643,\,0,\,0.766)$ and the D probe as $\vec s_D{}'=(0.766,\,0,\,-0.643)$. (a) What should the R probe read? (b) Find the fiber's rotation angle and axis, and the fidelity to $|\Phi^+\rangle$ of a pair sent uncorrected. (c) In one sentence: what would a compensator that monitored only the R probe conclude, and why?

<details>
<summary>Solution</summary>

(a) The middle column of $R$ is $\vec s_H{}'\times\vec s_D{}'=(0,\,1,\,0)$, so $+\hat y$ stays put. R sits at $-\hat y$, so it reads $(0,-1,0)$: **R comes back unchanged**.

(b) The columns give

$$R=\begin{pmatrix}0.766&0&0.643\\0&1&0\\-0.643&0&0.766\end{pmatrix},\qquad \mathrm{tr}\,R=2.532.$$

Then $1+2\cos\theta=2.532$, so $\cos\theta=0.766$ and $\theta=40^\circ$. The fixed axis is $\pm\hat y$, and $\hat z$ tips toward $+\hat x$, so this is $40^\circ$ about $+\hat y$, the L axis. The fix is $40^\circ$ about $-\hat y$. Uncorrected,

$$F=\frac{1+\mathrm{tr}\,R}{4}=\frac{3.532}{4}=0.883,$$

which matches $\cos^2(20^\circ)=0.883$.

(c) It would see a perfect overlap and call the fiber aligned while the pair sits at 0.883, because a rotation about the R/L axis leaves the R probe itself untouched.

</details>

## Connections

- **Backward:** the loss table comes from [2.1](02-01-loss-and-the-telecom-bands.md), the source cap from [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), and the bounds from [3.3](03-03-proving-a-link-is-entangled.md). The APC cap is the loop from [4.1](04-01-learning-the-fibers-rotation.md) and [4.2](04-02-compensation-as-a-control-loop.md). The additivity rule is a two-qubit cousin of the depolarizing channel in [quantum-computing 5.1](../../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md).
- **Forward:** [5.1](05-01-why-memories.md) asks what this link lacks for anything beyond point to point: a place to wait. [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) turns these fidelities into key rates.
- **Sideways:** reading a paper by pairing each number with its operating point is the same discipline as reading an earnings release: a margin means nothing without the revenue it was earned on.
