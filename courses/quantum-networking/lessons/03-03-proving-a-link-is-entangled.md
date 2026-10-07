# Quantum Networking · Lesson 3.3: Proving a link is entangled

> ⏱ ~15 min · Module 3: Sources, detectors, and proving entanglement · Builds on: [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [photonics 4.4](../../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md), [quantum-computing 2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) · Unlocks: [4.3](04-03-reading-the-gothamq-result.md), [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md)

## Why this matters

Every fidelity in this course so far was a model output. A customer pays for a measured one. Measuring fidelity exactly takes full tomography, too slow to repeat every few minutes on a live link. GothamQ instead measured eight coincidence counts and reported a **bracket**: lower bound 0.937, upper bound 0.967, over 15 days. This lesson derives that bracket. You will see why it is a bracket and not a point, and why anyone who quotes a fidelity from one basis alone has proved almost nothing.

## The idea

Alice and Bob each put a polarizer in front of a detector and count coincidences. Set both to H/V. A perfect $|\Phi^+\rangle$ pair always agrees, giving HH or VV and never HV or VH. But a lamp that sends HH half the time and VV the other half agrees perfectly too, and it holds no entanglement at all. One basis cannot tell **coherence** (the quantum "both at once") from a classical coin flip.

Now rotate both polarizers to diagonal, D/A. The classical HH/VV mixture gives random D/A outcomes, while $|\Phi^+\rangle$ still agrees perfectly. So the second basis sees the coherence. There is a catch. The D/A agreement is fed by *two* coherences: the HH–VV one you want, and an HV–VH one you don't. The Z-basis errors cap how big that unwanted one can be. That cap is why you get a bound and not a value.

## The formal version

Order the two-photon basis HH, HV, VH, VV and write the [density matrix](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md) elements as $\rho_{ij}$. The [fidelity to a Bell state](../reference.md#fidelity-to-a-bell-state) $|\Phi^+\rangle=(|HH\rangle+|VV\rangle)/\sqrt2$ is

$$F=\langle\Phi^+|\rho|\Phi^+\rangle=\tfrac12\left(\rho_{11}+\rho_{44}\right)+\operatorname{Re}\rho_{14}.$$

In words: populations of HH and VV, plus the HH–VV coherence.

Let $C_{ij}$ be the coincidence counts in setting $ij$, and $P_{ij}=C_{ij}/N$ with $N$ the total in that basis. The [visibilities](../reference.md#visibility) are

$$V_Z=P_{HH}+P_{VV}-P_{HV}-P_{VH},$$

$$V_X=P_{DD}+P_{AA}-P_{DA}-P_{AD}.$$

In words: the fraction of pairs that agree minus the fraction that disagree, in each basis.

The Z counts give the populations directly: $\rho_{11}+\rho_{44}=(1+V_Z)/2$. Expanding $|DD\rangle$ and $|AA\rangle$ in the H/V basis gives

$$V_X=2\operatorname{Re}\rho_{14}+2\operatorname{Re}\rho_{23}.$$

In words: D/A agreement measures the sum of both coherences.

Substituting for $\operatorname{Re}\rho_{14}$:

$$F=\frac{1+V_Z+2V_X-4\operatorname{Re}\rho_{23}}{4}.$$

The one unknown is $\rho_{23}$. A density matrix is positive, so every coherence obeys Cauchy–Schwarz: $|\rho_{23}|\le\sqrt{\rho_{22}\rho_{33}}=\sqrt{P_{HV}P_{VH}}$. So:

$$\boxed{\frac{1+V_Z+2V_X-4\sqrt{P_{HV}P_{VH}}}{4}\le F\le\frac{1+V_Z+2V_X+4\sqrt{P_{HV}P_{VH}}}{4}}$$

In words: the X basis measures fidelity up to an error term set by the Z-basis error counts, so a cleaner Z basis gives a tighter bracket. These are the [two-basis fidelity bounds](../reference.md#two-basis-fidelity-bounds), GothamQ supplement eqs. S10–S11. Swapping the roles of the bases gives a second pair (S13–S14), with $\sqrt{P_{DA}P_{AD}}$ as the error term. Report the highest lower bound and the lowest upper bound.

**One basis alone.** Using Cauchy–Schwarz on $\rho_{14}$ directly gives

$$\frac{(\sqrt{P_{HH}}-\sqrt{P_{VV}})^2}{2}\le F\le\frac{(\sqrt{P_{HH}}+\sqrt{P_{VV}})^2}{2}.$$

In words: Z counts can cap the fidelity, but for a balanced source the lower bound is about zero, so they can never certify entanglement.

**Werner check.** For a [Werner state](../reference.md#werner-state) with $F=(1+3p)/4$, both visibilities equal $p$, and $P_{HV}=P_{VH}=(1-p)/4$. The bracket becomes $[\,p,\ (1+p)/2\,]$. Its midpoint is exactly $F$ and its width is $\tfrac23(1-F)$. A lower bound above $\tfrac12$ proves entanglement. For Werner data that needs $p>\tfrac12$, i.e. $F>0.625$.

**The alternatives.** Full tomography (James, Kwiat, Munro and White, 2001) adds quarter-wave plates. It measures 16 setting combinations and reconstructs all of $\rho$. That gives a point estimate, but it takes twice the settings and more time. On a live link that matters: GothamQ repeated its eight-count measurement about every four minutes, for hours at each pair rate, and every minute spent on extra settings is a minute in which the fiber's polarization ([2.3](02-03-drift-in-buried-fiber.md)) can drift under the measurement. Two bases are the cheapest data that can still certify entanglement. A **CHSH test** ([photonics 4.4](../../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md)) goes the other way. For Werner states $S=2\sqrt2\,p$, so $S>2$ iff $F>0.780$ (the [CHSH threshold](../reference.md#chsh-threshold-for-werner-states)). A measured $S>2$ is device-independent ([QC 2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md)): it holds even if your waveplates are miscalibrated. The two-basis bound does not; it trusts that your analyzers really measure H/V and D/A. In fiber, a photonic CHSH test still assumes fair sampling, because most photons are lost.

## Picture

![Bar chart of eight simulated coincidence counts for a Werner state of fidelity 0.95 with 20,000 pairs per basis. The correlated settings HH, VV, DD and AA each have about 9,500 to 9,800 counts; the error settings HV, VH, DA and AD each have about 320 to 340. Z-basis visibility 0.936, X-basis visibility 0.932, fidelity bounds 0.934 to 0.966.](assets/03-03-fig1.svg)

The four short red bars do two jobs. They pull the visibilities below 1, and they set the width of the bracket through $\sqrt{P_{HV}P_{VH}}$. Accidental coincidences ([3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md)) land evenly in all eight cells. That is why real source noise looks like Werner white noise.

## Worked examples

**Example 1 (the figure's data).** Z basis: $C_{HH}=9{,}657$, $C_{HV}=326$, $C_{VH}=318$, $C_{VV}=9{,}699$. X basis: $C_{DD}=9{,}543$, $C_{DA}=343$, $C_{AD}=335$, $C_{AA}=9{,}779$. There are 20,000 pairs per basis.

$$V_Z=\frac{9{,}657+9{,}699-326-318}{20{,}000}=\frac{18{,}712}{20{,}000}=0.9356$$

$$V_X=\frac{18{,}644}{20{,}000}=0.9322$$

The error term is $P_{HV}=0.0163$ and $P_{VH}=0.0159$, so $4\sqrt{P_{HV}P_{VH}}=0.0644$. Also $1+V_Z+2V_X=3.8000$. So

$$\frac{3.8000-0.0644}{4}=0.934\;\le F\le\;\frac{3.8000+0.0644}{4}=0.966.$$

The swapped-basis pair gives the same lower bound (0.934) and a looser upper bound (0.968), so the bracket stands. The true value, 0.95, sits inside it.

**Example 2 (reading GothamQ's numbers).** For a Werner source the bracket is $[p,(1+p)/2]$, so we can predict what the paper should report.

- **15-day run.** The source-limited fidelity was about 0.95. Then $p=(4\times0.95-1)/3=0.933$ and the predicted bracket is $[0.933,\ 0.967]$. The paper measured 0.937(7) and 0.967(4).
- **High-rate point.** Here the paper expected about 0.88 from the source. Then $p=0.840$, the predicted lower bound is 0.840, and the paper reports "bounded > 0.84".
- **Low-rate point.** For about 0.99 the predicted bracket would be $[0.987,\ 0.993]$.

So the gap between "0.937" and "about 0.95" is mostly the measurement method, not the link. The paper says the bounds do not arise purely from experimental uncertainty. The Werner algebra shows why: even with perfect statistics, a two-basis measurement cannot narrow a 0.95 state below a 0.033-wide bracket.

## Watch out

- **You might think the bracket is an error bar, but it isn't.** It is the set of fidelities consistent with eight perfect probabilities. Statistical error bars, like GothamQ's (7), come on top of it.
- **You might think "fidelity 0.98 from H/V counts" is a strong claim, but it is only an upper bound.** A classical HH/VV mixture can produce the same counts.
- **You might think a high fidelity bound beats a CHSH violation, but they answer different questions.** The fidelity bound measures quality if you trust your analyzers. A measured $S>2$ proves entanglement without that trust.

## Business lens

An acceptance test is a number **plus its method**. A contract should name the method and say how it is reported: two-basis bounds, reported as a bracket. It should fix the coincidence window, state that no accidentals are subtracted, and give the delivered pair rate, the fiber length and the test duration. The honest report says "bounded above 0.937 at about $2\times10^5$ pairs/s for 15 days", not "0.95". GothamQ reported it exactly that way, and that habit is worth keeping in sales materials.

To read a competitor's "fidelity 0.98", ask five questions:

- Which bases were measured? If only one, the 0.98 proves nothing.
- Was it tomography, bounds or a model?
- Were accidentals subtracted?
- What coincidence window was used? A narrower window raises fidelity and cuts rate.
- At what rate, and for how long?

A customer buying for QKD ([6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md)) or a security agency may ask for a CHSH value instead. Two-basis bounds are fast and cheap enough to run every few minutes. They are not device-independent, and saying so first costs you nothing.

## One-liner

> Two bases buy a fidelity bracket whose width is set by the Z-basis errors, one basis buys only a ceiling, and only a CHSH violation proves entanglement without trusting your own analyzers.

## Problems

**P1 (🟢)** A link reports Z-basis coincidences $C_{HH}=4{,}710$, $C_{VV}=4{,}590$, $C_{HV}=380$, $C_{VH}=320$.

(a) Compute $V_Z$.

(b) Compute the one-basis upper bound on $F$.

**P2 (🟡)** A link records 10,000 pairs in each basis: $C_{HH}=4{,}850$, $C_{VV}=4{,}750$, $C_{HV}=160$, $C_{VH}=240$; $C_{DD}=4{,}600$, $C_{AA}=4{,}700$, $C_{DA}=330$, $C_{AD}=370$.

(a) Compute $V_Z$ and $V_X$.

(b) Compute the two-basis bracket using the Z-basis error term (the boxed formula).

(c) Does the data certify entanglement? Assume the state is Werner. Does it then certify a CHSH violation, and what is the smallest $S$ consistent with the bracket?

**P3 (🔴, practical)** A vendor, call it Acme Quantum, advertises "fidelity 0.98". It turns out to be $P_{HH}+P_{VV}$ from H/V counts only, with $P_{HH}=P_{VV}=0.49$ and $P_{HV}=P_{VH}=0.01$.

(a) Give the one-basis bracket on $F$.

(b) Compute the fidelity of the classical mixture $\rho=0.49|HH\rangle\langle HH|+0.49|VV\rangle\langle VV|+0.01|HV\rangle\langle HV|+0.01|VH\rangle\langle VH|$, which produces identical counts.

(c) In three sentences or fewer, tell a prospective customer what the claim does and does not prove, and what to ask for.

<details>
<summary>Solutions</summary>

**P1**

(a) $N=4{,}710+4{,}590+380+320=10{,}000$, so

$$V_Z=\frac{4{,}710+4{,}590-380-320}{10{,}000}=\frac{8{,}600}{10{,}000}=0.86.$$

(b) $P_{HH}=0.471$ and $P_{VV}=0.459$. Then

$$F\le\frac{(\sqrt{0.471}+\sqrt{0.459})^2}{2}=0.930.$$

That is just under $P_{HH}+P_{VV}=0.93$. The matching lower bound is about $4\times10^{-5}$: the Z basis alone certifies nothing.

---

**P2**

(a)

$$V_Z=\frac{4{,}850+4{,}750-160-240}{10{,}000}=0.92$$

$$V_X=\frac{4{,}600+4{,}700-330-370}{10{,}000}=0.86$$

(b) The error term is $\sqrt{P_{HV}P_{VH}}=\sqrt{0.016\times0.024}=0.01960$, so $4\sqrt{\cdot}=0.0784$. Also $1+V_Z+2V_X=1+0.92+1.72=3.64$. So

$$\frac{3.64-0.0784}{4}=0.890\;\le F\le\;\frac{3.64+0.0784}{4}=0.930.$$

(c) Yes, it certifies entanglement: the lower bound 0.890 is above 0.5. Under the Werner assumption, the lower bound is also above 0.780, so $S>2$. At $F=0.8904$, $p=(4\times0.8904-1)/3=0.854$, so $S\ge2\sqrt2\times0.854=2.42$. That CHSH statement leans on the Werner model; only a measured $S$ would be device-independent.

---

**P3** *(practical)*

(a) $\left(\sqrt{0.49}\mp\sqrt{0.49}\right)^2/2$ gives $0\le F\le0.98$. The "0.98" is a ceiling, not a measurement.

(b) The mixture has no coherence, so $F=\tfrac12(0.49+0.49)+0=0.49$. That is below 0.5, so the mixture is not entangled, yet its H/V counts are identical to the advertised data.

(c)

**Accept:** any answer of at most three sentences that says the number is only an upper bound, that a classical mixture produces the same counts, and asks for a second-basis (or tomography or CHSH) measurement with its conditions.

**Must hit:**

- one-basis counts cannot see coherence, so they cannot rule out a classical HH/VV mixture
- the true fidelity could be anywhere from 0 to 0.98
- ask for D/A counts (bounds), full tomography, or a CHSH value, plus the rate, window and whether accidentals were subtracted

**Model answer:** "That 0.98 says the photons agree in the H/V basis 98% of the time, which a classical, unentangled source can also do, so it proves only that the fidelity is at most 0.98. It proves nothing about entanglement. Ask for the D/A counts or a CHSH value measured at the same rate, with the coincidence window stated and no accidentals subtracted."

</details>

## Flashback

**From Lesson [3.1](03-01-rubidium-vapor-vs-crystal-sources.md) (Rubidium-vapor sources vs crystal sources):** Use rubidium's tabulated wavelengths: pump 780.24 nm, coupling 1366.87 nm, signal 1323.88 nm, idler 794.98 nm, with $c=2.998\times10^8$ m/s. (a) Find how far the idler sits from the pump, and how far the signal sits from the coupling beam, in THz. Say in one sentence why the two gaps must be equal. (b) In wavelength the gaps are 14.74 nm and 42.99 nm. Explain the factor of about 2.9 using $\Delta\lambda=\lambda^2\Delta\nu/c$, with the mean wavelength of each pair. (c) How many 1 GHz vapor linewidths fit in the gap?

<details>
<summary>Solution</summary>

(a) With $\nu=c/\lambda$: pump 384.23 THz, idler 377.11 THz, signal 226.45 THz, coupling 219.33 THz. So

$$\nu_p-\nu_i=7.12\ \text{THz},$$

$$\nu_s-\nu_c=7.12\ \text{THz}.$$

They must match because energy conservation, $\nu_p+\nu_c=\nu_s+\nu_i$, rearranges to $\nu_p-\nu_i=\nu_s-\nu_c$. Physically, both gaps are the splitting between $5P_{3/2}$ (the rung going up) and $5P_{1/2}$ (the rung coming down).

(b) A fixed frequency gap spans $\lambda^2$ more nanometers at longer wavelength. The mean wavelengths are 1345.4 nm and 787.6 nm, and $(1345.4/787.6)^2=2.92$, which matches $42.99/14.74=2.92$.

(c) $7.12\ \text{THz}/1\ \text{GHz}\approx7{,}100$ linewidths. The pair photons sit thousands of their own widths from the bright lasers, which is why filtering the lasers out is easy.

</details>

## Connections

- **Backward:** the eight counts come with the accidentals of [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), whose Werner model $F=1-\tfrac{3}{2(1+g_{SI})}$ ([fidelity from g_SI](../reference.md#fidelity-from-gsi)) predicts the state these bounds bracket. The $E(a,b)$ correlations and CHSH setup are [photonics 4.4](../../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md); device-independence is [QC 2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md).
- **Forward:** [4.3](04-03-reading-the-gothamq-result.md) reads every GothamQ fidelity as one of these brackets. [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) turns the same Z and X error rates into a QBER and a key rate: the two-basis measurement *is* the BBM92 key measurement.
- **Sideways:** "bound what you cannot measure using positivity" is Cauchy–Schwarz, the same move as $|\text{Cov}(X,Y)|\le\sigma_X\sigma_Y$ in statistics. A fidelity bracket is a partial-identification interval, like an econometric bound when a variable is unobserved.
