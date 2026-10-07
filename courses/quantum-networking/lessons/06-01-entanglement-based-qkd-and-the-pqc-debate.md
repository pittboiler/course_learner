# Quantum Networking · Lesson 6.1: Entanglement-based QKD, and the PQC debate

> ⏱ ~15 min · Module 6: Protocols and applications · Builds on: [3.3 Proving a link is entangled](03-03-proving-a-link-is-entangled.md), [photonics 4.5 (BB84)](../../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md), [`information-theory` 3.2](../../information-theory/lessons/03-02-canonical-channels.md), [`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md) · Unlocks: [6.2](06-02-the-network-stack-and-timing.md)

## Why this matters

Key distribution is the one quantum-network application that works on today's hardware, and it is the one the biggest buyers' own security agencies tell them not to buy. Both halves of that sentence matter to Qunnect. This lesson turns a delivered fidelity into a key rate, the only number a key customer pays for, and lays out the policy argument so you can describe both sides without taking one.

## The idea

You met BB84 in [photonics 4.5](../../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md): Alice sends single photons in random bases, Bob measures in random bases, they keep the matching-basis rounds, and errors betray an eavesdropper. Entanglement-based QKD (BBM92) removes the sender. A source in the middle hands each side one photon of $|\Phi^+\rangle$, and both *measure*. When they happen to pick the same basis, their outcomes agree perfectly, and those outcomes are random. That shared randomness is the key.

Why is it secret? Monogamy of entanglement: if Alice's and Bob's photons are perfectly correlated in two complementary bases, they are in a pure Bell state, and nothing else in the universe can be correlated with them. Every bit of eavesdropper knowledge must show up as errors. So the business reduces to bookkeeping: measure the error rate, then pay for it twice. Once to fix Bob's wrong bits (error correction), once to shrink the key until whatever Eve could know is gone (privacy amplification). When errors reach about 11%, the two payments eat the whole bit.

A nice consequence: the source can be untrusted. It could even be Eve's. The parties check the state they receive, not the machine that made it.

## The formal version

**BBM92.** Each side measures its photon in $Z$ (H/V) or $X$ (D/A), chosen at random. They announce bases publicly, keep the rounds where the bases match (**sifting**), and sacrifice a random sample to estimate the error rate. For $|\Phi^+\rangle$ both bases give identical outcomes. See [BBM92](../reference.md#bbm92).

**QBER of a Werner pair.** Take a [Werner state](../reference.md#werner-state) $\rho_W=p\,|\Phi^+\rangle\langle\Phi^+|+(1-p)I/4$. The good fraction never errs. The noise fraction gives independent coin flips, which disagree half the time. So in either basis the quantum bit error rate is

$$e=\frac{1-p}{2}=\frac{2}{3}(1-F),$$

using $p=(4F-1)/3$. In words: the error rate is one half of the junk fraction, and since pure noise already scores $F=\tfrac14$, each lost point of fidelity costs two-thirds of a point of QBER. See [QBER](../reference.md#qber). This is the same Z and X data that [3.3](03-03-proving-a-link-is-entangled.md) used to bound fidelity: the visibility there is $V=1-2e$.

**Asymptotic key fraction** (Shor–Preskill, stated, not proved). With error rates $e_Z$ and $e_X$, the secret bits per sifted bit are $r=1-h(e_Z)-h(e_X)$, where $h(x)=-x\log_2x-(1-x)\log_2(1-x)$ is the binary entropy of [`information-theory` 3.2](../../information-theory/lessons/03-02-canonical-channels.md). For a Werner pair $e_Z=e_X=e$:

$$r=1-2h(e).$$

In words: one $h(e)$ is the error-correction cost (the binary symmetric channel's toll), the other is the privacy-amplification cost (Eve's maximum knowledge, measured by the *other* basis's errors). See [asymptotic key rate](../reference.md#asymptotic-key-rate).

**The threshold.** $r=0$ at $e=11.0\%$, which is $F=1-\tfrac32 e=0.835$. Note that $1-h(e)=0.5$ exactly there: at the cliff, error correction alone costs half a bit, and Eve's share costs the other half.

**Key rate.** If $R$ pairs per second are detected at both ends and the sifted fraction is $s$,

$$K=R\,s\,r.$$

Independent fair basis choices give $s=\tfrac12$. Biased choices (both pick $Z$ with probability $q$, using $X$ only to monitor Eve) give $s=q^2+(1-q)^2$, approaching 1 as $q\to1$ for long keys.

**E91** is the variant that tests CHSH on extra measurement settings ([`quantum-computing` 2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md)). A large enough $S$ certifies secrecy without trusting the measurement devices (device-independent QKD), but that needs a loophole-free violation, which fiber loss makes very hard.

**MDI-QKD.** Detectors are the most attacked part of real QKD systems. In measurement-device-independent QKD, Alice and Bob each *send* photons to an untrusted middle station that performs a [Bell-state measurement](05-03-bell-state-measurement-and-swapping.md) and announces the outcome. The swap correlates their bits, and the station learns nothing about them. Every detector side channel is removed by construction. Both photons must arrive, so the rate still scales like $\eta$ and stays under the [PLOB bound](../reference.md#plob-bound). See [MDI-QKD](../reference.md#mdi-qkd).

**Twin-field QKD.** Same middle station, but it detects a *single* photon from interference of two phase-stabilized weak pulses. Each pulse crosses only half the link, so the key rate scales like $\sqrt\eta$ up to constant factors, which beats the repeaterless PLOB scaling at long distance. At 200 km of 0.2 dB/km fiber, $\eta=10^{-4}$ while $\sqrt\eta=10^{-2}$. The price: optical phase stabilization over the whole span, and it makes key, not storable entanglement. See [twin-field QKD](../reference.md#twin-field-qkd).

### The policy debate

This section reports positions, not a verdict. [Post-quantum cryptography](../../cryptography/lessons/04-05-post-quantum-cryptography.md) (PQC) replaces RSA and elliptic curves with new math problems believed hard even for quantum computers, and runs as software on existing networks. See [QKD vs PQC](../reference.md#qkd-vs-pqc).

**The agencies' position (as of 2024–2026).** The US NSA does not support QKD for national security systems and does not expect to certify QKD products unless its limitations are overcome; it prefers PQC as cheaper and easier to maintain. The UK's NCSC likewise does not back QKD for government or military use. A 2024 joint paper from France's ANSSI, Germany's BSI, the Netherlands' NLNCSA and Sweden calls PQC migration the clear priority and QKD usable only in niche cases. Their reasons: QKD solves only part of the problem, since authentication still needs classical cryptography; it needs special hardware; it adds infrastructure cost and insider risk; and its real security depends on implementation, not only on physics. A practical limit from [1.4](01-04-the-loss-wall.md) adds to these: without trusted nodes, a QKD link is distance-limited.

**The case for QKD.** Its secrecy does not rest on any unproven hardness assumption, so a future mathematical break cannot reach back and read recorded traffic. That matters for secrets that must stay secret for decades, the harvest-now-decrypt-later threat of [`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md), which also recounts a PQC candidate broken by classical math. And it can be layered *with* PQC rather than instead of it, so an attacker must break both.

**Policy is split.** The EU funds a quantum communication infrastructure (EuroQCI) regardless, and China has built large QKD networks.

## Picture

![A plot of secret key bits per sifted bit against QBER from 0 to 15 percent. A solid blue curve, r equals 1 minus 2 h of e, starts at 1 and falls to zero at a dashed red vertical line marked threshold, e equals 11.0 percent, F equals 0.835, and stays at zero beyond it. A dashed green curve, 1 minus h of e, the error-correction cost alone, sits above it and passes through 0.5 at the threshold. A top axis shows the matching Werner fidelity from 1.00 down to 0.80. Red circles mark fidelities 0.99, 0.95 and 0.88 on the blue curve.](assets/06-01-fig1.svg)

The gap between the green and blue curves is Eve's share. The key fraction is steep near the threshold: a pair at 0.88 keeps about a fifth of its sifted bits, while one at 0.99 keeps 88%.

## Worked examples

**Example 1 (mechanical).** A link delivers Werner pairs at $F=0.90$. Then $p=0.867$ and $e=\tfrac23(0.10)=0.0667$. The entropy is $h(0.0667)=0.353$, so $r=1-2(0.353)=0.293$. Of every 100 sifted bits, 29 survive as secret key.

**Example 2 (GothamQ's operating points as a key buyer would see them).** The GothamQ paper did not run QKD, but its rate–fidelity points let us ask what key they *would* support. Assume Werner pairs, treat the reported end-to-end pair rates as detected coincidences, use $s=\tfrac12$ and ignore finite-size effects.

| Operating point | $F$ | $e$ | $r$ | Key $K=R/2\cdot r$ |
|---|---|---|---|---|
| about $2\times10^4$ pairs/s | 0.99 | 0.0067 | 0.884 | 8,800 bits/s |
| about $2\times10^5$ pairs/s (15-day run) | 0.95 | 0.0333 | 0.578 | 58,000 bits/s |
| same, at the lower bound | 0.937 | 0.0420 | 0.497 | 50,000 bits/s |
| about $5\times10^5$ pairs/s, expected | 0.88 | 0.0800 | 0.196 | 49,000 bits/s |
| same, at the measured bound | 0.84 | 0.1067 | 0.020 | 5,100 bits/s |

Two lessons. The best key is not at the highest fidelity or the highest rate but in the middle: the 15-day operating point. And near the cliff the answer depends entirely on which fidelity you believe. At the brightest point, the expected 0.88 and the measured lower bound 0.84 differ by a factor of ten in key. A security proof must use the bound.

## Watch out

- **You might think any CHSH-violating link can make key, but actually there is a band where it cannot.** Werner pairs with $0.780<F<0.835$ violate CHSH but give $r=0$ under this one-way post-processing.
- **You might think QKD removes the need for classical cryptography, but actually the public channel must be authenticated.** That takes a pre-shared secret or classical signatures. QKD expands a key; it cannot bootstrap trust.
- **You might think the asymptotic rate is what a customer gets, but actually finite-size statistics, imperfect error-correcting codes and detector efficiency all take more.** Treat $Rsr$ as a ceiling for the chosen operating point.

## Business lens

This lesson is why Qunnect sells **entanglement distribution**, not a QKD box. The most mature quantum-networking segment is QKD, already served by vendors such as Toshiba and ID Quantique. Its largest natural buyers, governments and defense, are being steered toward PQC by their own security agencies. A company whose only product is keys inherits that headwind. Carina's pairs make key *and* serve the applications of [6.3](06-03-beyond-keys.md), so QKD is one use rather than the bet.

When a security officer quotes the NSA, don't argue physics against policy. Agree that PQC comes first. Point out that entanglement-based QKD can sit on top of PQC for links carrying long-lived secrets. And note that the source can be untrusted, which answers part of the implementation worry. Be honest about the rest: the link still needs authenticated classical channels, special hardware, and cryogenic SNSPDs in a "room-temperature" system. Example 2's numbers are asymptotic tens of kilobits per second over 34 km, enough to refresh symmetric keys often, not to encrypt traffic directly.

## One-liner

> A Werner pair errs with probability $e=\tfrac23(1-F)$, keeps $r=1-2h(e)$ secret bits per sifted bit and none past $e=11\%$ ($F=0.835$), and the hard question is not the physics but whether a buyer's security agency wants QKD at all.

## Problems

**P1 (🟢)** A link delivers Werner pairs with $F=0.96$. Find (a) the QBER $e$ and (b) the asymptotic key fraction $r$.

**P2 (🟡)** A metro link detects 40,000 Werner pairs per second at both ends with $F=0.93$. (a) With independent fair basis choices, what is the asymptotic key rate? (b) Both sides switch to choosing $Z$ with probability 0.9. Assuming the error rates are unchanged, what is the new key rate, and by what factor did it grow?

**P3 (🔴, practical)** A board member says: "Post-quantum cryptography makes QKD pointless." Give two sentences supporting the claim and two against it, each grounded in a specific reason.

<details>
<summary>Solutions</summary>

**P1** (a) $e=\tfrac23(1-0.96)=\tfrac23(0.04)=0.0267$.

(b) $h(0.0267)=0.177$, so $r=1-2(0.177)=0.645$. About 65% of sifted bits survive as key.

---

**P2** (a) $e=\tfrac23(0.07)=0.0467$, $h(e)=0.272$, so $r=1-0.544=0.456$. Sifted rate $40{,}000\times\tfrac12=20{,}000$ bits/s, key rate $20{,}000\times0.456=9{,}100$ bits/s.

(b) Sifted fraction $s=0.9^2+0.1^2=0.81+0.01=0.82$. Key rate $40{,}000\times0.82\times0.456=15{,}000$ bits/s, a factor $0.82/0.5=1.64$ higher. (The $X$ rounds are now rarer, so estimating $e_X$ needs a longer run; that is the finite-size price of biasing.)

---

**P3** *(practical)*

**Accept:** any two "for" sentences and two "against" sentences that each give a distinct, correct reason; no verdict is required.

**Must hit:**

- For: PQC runs as software on existing networks, needs no special hardware, and is the stated priority of the NSA, NCSC and several European agencies.
- For: QKD still needs classical authentication and has implementation, cost and distance limits, so it does not remove the need for classical cryptography.
- Against: QKD's secrecy rests on physics, not on an unproven hardness assumption, so a future mathematical break cannot decrypt recorded traffic (harvest now, decrypt later).
- Against: the two can be layered, so QKD adds defense in depth for long-lived secrets, and entanglement links serve other uses beyond key.

**Model answer:** For: PQC delivers quantum-safe key exchange as a software update on today's networks, which is why the NSA, the UK's NCSC and a joint French–German–Dutch–Swedish paper all make it the priority. QKD cannot even stand alone, since its classical channel still needs authentication, and it brings special hardware, cost and distance limits. Against: PQC rests on mathematical problems that are believed hard, and a future break would expose every recording made today, while QKD's secrecy rests on physics. For secrets that must last decades, layering QKD on top of PQC means an attacker must break both.

</details>

## Flashback

**From Lesson [5.4](05-04-repeater-chains-and-distillation.md) (Repeater chains and distillation):** A noisy link delivers Werner pairs with $F=0.70$, too low to violate CHSH (that needs $F>0.780$). You run BBPSSW recurrence rounds, twirling back to Werner form after each. Use $P_\text{succ}=F^2+\tfrac23F(1-F)+\tfrac59(1-F)^2$ and $F'=\big[F^2+\big(\tfrac{1-F}{3}\big)^2\big]/P_\text{succ}$. (a) Find $F'$ and $P_\text{succ}$ after one round. (b) Round 2 starts from your answer to (a) and succeeds with probability 0.709, reaching $F=0.773$. How many raw pairs does each output cost after two rounds, and does it clear the CHSH line? (c) A second link delivers $F=0.48$. In one sentence: can any number of rounds make it CHSH-violating?

<details>
<summary>Solution</summary>

**(a)** $q=(1-0.70)/3=0.10$. Success: $P_\text{succ}=F^2+2Fq+5q^2=0.49+0.14+0.05=0.68$. Numerator: $F^2+q^2=0.49+0.01=0.50$. So $F'=0.50/0.68=0.735$.

**(b)** Pairs per output: $N_1=2/0.68=2.94$, then $N_2=2N_1/0.709=8.29$ raw pairs per output. And $0.773<0.780$, so it still falls just short of CHSH. A third round reaches 0.812, but at about 22 raw pairs per output.

**(c)** No: $F=\tfrac12$ is a fixed point, and below it each round lowers $F$ (one round takes 0.48 to 0.476), because a Werner pair at $F\le\tfrac12$ is not entangled and distillation can only amplify entanglement that already exists.

</details>

## Connections

- **Backward:** BB84, sifting and the 25% intercept-resend error from [photonics 4.5](../../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md); the Werner thresholds of [1.3](01-03-fidelity-and-rate.md), which forecast the 0.835 line; the Z and X counts of [3.3](03-03-proving-a-link-is-entangled.md), which are the BBM92 key measurement; PLOB from [1.4](01-04-the-loss-wall.md), which MDI-QKD obeys and twin-field QKD sidesteps.
- **Forward:** [6.2](06-02-the-network-stack-and-timing.md) puts key generation at the top of the stack and sizes the timing that sifting relies on; [6.3](06-03-beyond-keys.md) judges the uses that do not depend on the QKD policy argument.
- **Sideways:** $r=1-2h(e)$ is the binary symmetric channel's capacity $1-h(e)$ from [`information-theory` 3.2](../../information-theory/lessons/03-02-canonical-channels.md), minus a second toll for secrecy. The MDI station is the [swap](05-03-bell-state-measurement-and-swapping.md) of Module 5 used for key. The layered QKD-plus-PQC design is the same "secure if either holds" combiner as hybrid X25519 + ML-KEM in [`cryptography` 4.5](../../cryptography/lessons/04-05-post-quantum-cryptography.md).
