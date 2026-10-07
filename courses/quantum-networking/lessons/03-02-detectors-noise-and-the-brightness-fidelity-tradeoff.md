# Quantum Networking · Lesson 3.2: Detectors, noise, and the brightness–fidelity tradeoff

> ⏱ ~15 min · Module 3: Sources, detectors, and proving entanglement · Builds on: [3.1](03-01-rubidium-vapor-vs-crystal-sources.md), [2.4](02-04-sharing-fiber-with-classical-traffic.md), [photonics 3.6](../../photonics-quantum-optics/lessons/03-06-single-photon-sources-photodetection.md) · Unlocks: [3.3](03-03-proving-a-link-is-entangled.md), [4.3](04-03-reading-the-gothamq-result.md)

## Why this matters

Qunnect's GothamQ paper reports about 0.99 fidelity at about $2\times10^4$ pairs/s, and only about 0.88 (expected) at about $5\times10^5$ pairs/s. Same source, same fiber, same detectors. The only thing that changed was how hard the source was pumped. This lesson explains that tradeoff from one fact: two detectors that click at random will sometimes click "together" by chance, and those chance pairs look exactly like noise on the entangled state. By the end you can turn singles rates and a time window into a fidelity, and say why "double the rate" is never free.

## The idea

You already know detector efficiency, dark counts and heralding from [photonics 3.6](../../photonics-quantum-optics/lessons/03-06-single-photon-sources-photodetection.md). What is new here is that Qunnect's source runs **continuously**: there is no clock saying "a pair may be in this pulse." Each detector just writes a time stamp for every click. Afterwards you pair up clicks: a 795 nm click and a 1324 nm click that land within a short **coincidence window** $\tau$ of each other count as one pair.

Picture a crowded station where you match people by "walked through the gate within one second of each other." Real couples walk through together, so you catch them. But strangers also pass within a second of each other by luck, and the busier the station, the more often that happens. Double the crowd and you double the couples, but you **quadruple** the accidental matches, because each of twice as many people now has twice as many strangers nearby.

Those accidental pairs carry no entanglement at all. Their polarizations are random. So every accidental coincidence dilutes the Bell state with white noise. Pump harder, and the noise grows faster than the signal. That is the brightness–fidelity tradeoff.

## The formal version

**Accidental coincidences.** Detector 1 clicks at rate $R_1$ and detector 2 at rate $R_2$ (singles rates, counts/s). Treat clicks as independent random arrivals. Around each click on detector 1, a window of width $\tau$ catches a click from detector 2 with probability $R_2\tau$ (valid when $R_2\tau\ll1$). So

$$R_\text{acc}\approx R_1R_2\,\tau.$$

In words: chance coincidences are the product of the two singles rates times how long you are willing to wait for a match. See [accidental coincidences](../reference.md#accidental-coincidences).

**True coincidences and CAR.** If the source emits $r$ pairs/s and the two arms have total detection probabilities $\eta_1,\eta_2$ (fiber, filters, detector), then true coincidences arrive at $R_\text{true}\approx\eta_1\eta_2\,r$, provided $\tau$ is wide enough to catch the partner. If the singles come mostly from the source, $R_i\approx\eta_i r$, and the **coincidence-to-accidental ratio** is

$$\text{CAR}=\frac{R_\text{true}}{R_\text{acc}}\approx\frac{\eta_1\eta_2\,r}{\eta_1\eta_2\,r^2\,\tau}=\frac{1}{r\tau}.$$

In words: CAR is the inverse of the number of pairs the source emits per window. Losses cancel; only brightness and window width matter. When $r\tau$ approaches 1 you can no longer tell which photon belongs to which pair. This is the continuous-wave face of the multi-pair problem from photonics 3.6. Any extra singles (Raman photons from [2.4](02-04-sharing-fiber-with-classical-traffic.md), dark counts, unpaired fluorescence) only raise $R_\text{acc}$ and lower CAR further. See [coincidence-to-accidental ratio](../reference.md#coincidence-to-accidental-ratio).

**From counts to fidelity: the GothamQ model.** Model the delivered state as a [Werner state](../reference.md#werner-state)

$$\rho=a\,|\Phi^+\rangle\langle\Phi^+|+(1-a)\,\frac{I}{4},$$

$$F=\frac{1+3a}{4},$$

where $a\in[0,1]$ is the entangled fraction. Set both polarization analyzers to H and count $\langle HH\rangle$; then set one to V and count $\langle HV\rangle$. Since $|\Phi^+\rangle$ never gives HV, the probabilities are $(1+a)/4$ and $(1-a)/4$. The single-polarization-mode cross-correlation is

$$g_{SI}=\frac{\langle HH\rangle}{\langle HV\rangle}=\frac{1+a}{1-a}.$$

Solve for $a$ and substitute into $F$:

$$F=1-\frac{3}{2(1+g_{SI})}.$$

In words: every HV count is pure noise, so the ratio of "right" to "wrong" coincidences fixes the noise fraction, and with it the fidelity. This is eq. S18 of the GothamQ supplement. See [fidelity from g_SI](../reference.md#fidelity-from-gsi).

**Linking $g_{SI}$ to CAR (the factor of 2).** Accidentals pair two unrelated photons, each unpolarized, so they spread evenly over HH, HV, VH, VV: a quarter each. True pairs land half in HH, half in VV. Hence

$$g_{SI}=\frac{R_\text{true}/2+R_\text{acc}/4}{R_\text{acc}/4}=1+2\,\text{CAR},$$

with CAR measured **without** polarization analysis. Equivalently $a=\text{CAR}/(1+\text{CAR})$, which gives

$$F=1-\frac{3}{4(1+\text{CAR})}=1-\frac{3}{4}\cdot\frac{r\tau}{1+r\tau}.$$

In words: for a bright-ish source, infidelity is about three-quarters of the pairs-per-window, so it grows in proportion to brightness while the delivered rate also grows in proportion to brightness. See [rate-fidelity tradeoff](../reference.md#rate-fidelity-tradeoff).

**Detectors set the window.** The window cannot be narrower than the detectors' combined **timing jitter** (the spread in each click's time stamp), or true pairs fall outside it. Independent jitters add in quadrature. GothamQ's pair:

| | SNSPD (1324 nm arm) | Si SPAD (795 nm arm) |
|---|---|---|
| Efficiency | about 90% | about 68% |
| Jitter | about 90 ps | about 350 ps |
| Operating temperature | cryogenic (a few kelvin) | room temperature or mildly cooled |

Combined jitter is $\sqrt{350^2+90^2}\approx361$ ps, dominated by the SPAD. Silicon cannot detect the telecom photon at all: its 1.12 eV bandgap cuts off near 1107 nm, and a 1324 nm photon carries only 0.94 eV. The telecom alternatives are an SNSPD or an InGaAs SPAD, which has far more dark counts and longer dead times. See [SNSPD vs SPAD](../reference.md#snspd-vs-spad) and [timing jitter](../reference.md#timing-jitter).

## Picture

![Two stacked plots against delivered pair rate on a log axis from ten thousand to two million pairs per second. Top: the coincidence-to-accidental ratio falls as one over the rate, from about 260 to about 1. Bottom: fidelity from the model stays near 1 at low rate and drops toward 0.68 at two million pairs per second; three red circles mark GothamQ's reported or expected values of about 0.99, 0.95 and 0.88, which sit on the model curve](assets/03-02-fig1.svg)

*Illustrative model: accidentals grow as the square of the rate, so CAR is proportional to one over the rate. It is calibrated on the 0.88 point only; the other two circles are predictions that happen to land close.*

## Worked examples

**Example 1 (mechanical).** Singles $R_1=4\times10^5$/s and $R_2=2.5\times10^5$/s, window $\tau=2$ ns, true coincidences 8,000/s.

$$R_\text{acc}=(4\times10^5)(2.5\times10^5)(2\times10^{-9})=200\ \text{/s}.$$

$$\text{CAR}=8000/200=40,$$

$$g_{SI}=1+2(40)=81.$$

$$F=1-\frac{3}{2(82)}=0.982.$$

Why 2 ns rather than 1 ns? With 361 ps of Gaussian jitter, a 1 ns window keeps only about 83% of true pairs; 2 ns keeps about 99.4%. Widening the window buys true pairs at the price of accidentals, linearly in $\tau$.

**Example 2 (GothamQ's curve, from one point).** Invert $F=0.88$: $g_{SI}=\tfrac{3}{2(0.12)}-1=11.5$, so CAR $=5.25$ at $5\times10^5$ pairs/s. If CAR scales as 1/rate, then:

- at $2\times10^5$ pairs/s, CAR $=13.1$ and $F=1-\tfrac{3}{4(14.1)}=0.947$. The 15-day run, at about $2\times10^5$ pairs/s, was source-limited at about 0.95.
- at $2\times10^4$ pairs/s, CAR $=131$ and $F=0.994$. The paper reports about 0.99.

A one-parameter model, built only on "accidentals scale as rate squared," reproduces Qunnect's whole rate–fidelity curve. Cutting the rate 25-fold cut the infidelity about 21-fold (0.12 to 0.0057). The memory paper shows the same knob turned through the window instead of the pump: a narrow detection window gives its best predicted fidelity (up to 90.2%), and widening the window to 7.7 ns raised photon–memory pairs to 1,200 per second at 80% fidelity.

## Watch out

- **You might think** $g_{SI}=1+\text{CAR}$. That holds only if CAR is measured with both analyzers set to H, where projecting halves true pairs but quarters accidentals. With polarization-blind CAR, $g_{SI}=1+2\,\text{CAR}$. Mixing them up understates fidelity (Problem 2 shows by how much).
- **You might think** better detectors fix the tradeoff. Higher efficiency raises true and accidental coincidences by the same factor, so CAR is unchanged ($\text{CAR}=1/r\tau$ has no $\eta$ in it). What helps is **lower jitter** (a narrower window) and fewer noise singles.
- **You might think** a reported fidelity is a property of the hardware. It is a property of the hardware **at an operating point**: a pair rate and a window. A fidelity quoted without a rate is half a number.

## Business lens

The pump power is a **product setting**, not a spec. One Carina can be dialed toward rate or toward fidelity, and different customers want different ends. A key-distribution customer wants pairs per second, though not blindly: lower fidelity raises the error rate that eats the key (6.1). A customer linking quantum processors or sensors wants fidelity and will happily take 20 times fewer pairs. Sales has to ask "what will you do with the pairs?" before quoting a number.

Detector choice is the honest caveat on "room temperature." Qunnect's source and memory need no cryogenics, which is its stated differentiator. But GothamQ's telecom photon went to an SNSPD, and SNSPDs run at a few kelvin. Silicon cannot see 1324 nm at all. A buyer who hears "no cryogenics" should hear "none in the source and memory"; the best telecom detector still needs a cryostat. A competitor will point this out. Better that Qunnect's own people say it first.

## One-liner

> Accidental coincidences grow as the square of brightness while true pairs grow linearly, so a continuous-wave pair source trades rate against fidelity through $F=1-\tfrac{3}{4(1+\text{CAR})}$ with $\text{CAR}\approx1/r\tau$.

## Problems

**P1 (🟢)** Two detectors record singles of 200,000/s and 150,000/s. (a) What is the accidental coincidence rate with a 1 ns window? (b) With a 0.5 ns window?

**P2 (🟡)** With polarization analysis removed, a link records 1,800 true coincidences/s and 60 accidentals/s. Assume the accidentals are unpolarized and the state is Werner. (a) Find CAR. (b) Find $g_{SI}$ and $F$. (c) A colleague uses $g_{SI}=1+\text{CAR}$. What fidelity does he report, and is it too high or too low?

**P3 (🔴, practical)** A link delivers $1\times10^5$ pairs/s with a polarization-blind CAR of 20. Assume all singles come from the source, so singles and true coincidences both scale linearly with pump power. (a) The pump is doubled. Give the new delivered rate, CAR and fidelity. (b) A sales engineer wants to promise a customer "double the rate, same quality." Give your advice in one sentence.

<details>
<summary>Solutions</summary>

**P1** (a) $R_\text{acc}=R_1R_2\tau=(2\times10^5)(1.5\times10^5)(1\times10^{-9})=30$ /s.

(b) Accidentals are linear in $\tau$: $(2\times10^5)(1.5\times10^5)(0.5\times10^{-9})=15$ /s. Halving the window halves accidentals, but only works if the combined jitter is well under 0.5 ns. Otherwise you also lose true pairs.

---

**P2** (a) $\text{CAR}=1800/60=30$.

(b) Polarization-blind CAR gives $g_{SI}=1+2(30)=61$. Then

$$F=1-\frac{3}{2(1+61)}=1-\frac{3}{124}=0.976.$$

(c) His $g_{SI}=1+30=31$, so $F=1-\tfrac{3}{2(32)}=0.953$. That is **too low**. He has treated the accidentals as if they all fell in HV, when only a quarter of them do.

---

**P3** *(practical)*

(a) Pair rate doubles to $2\times10^5$ pairs/s. True coincidences double and accidentals quadruple, so CAR halves to 10.

Before: $F=1-\tfrac{3}{4(21)}=0.964$.

After: $F=1-\tfrac{3}{4(11)}=0.932$.

Infidelity nearly doubles, from 0.036 to 0.068.

(b) **Accept:** any one-sentence answer that says the rate can double but the fidelity will drop, with the reason or the number.

**Must hit:**

- Rate and fidelity are coupled through accidentals, which grow as the square of the pump.
- Doubling the rate costs fidelity (here roughly 0.96 to 0.93), so "same quality" is false unless something else changes (narrower window, lower-jitter detectors, less noise).

**Model answer:** "We can double the pair rate, but fidelity falls from about 0.96 to about 0.93, because chance coincidences grow four times as fast; so quote the customer the rate–fidelity pair they actually need, not double the rate at today's quality."

</details>

## Flashback

**From Lesson [2.4](02-04-sharing-fiber-with-classical-traffic.md) (Sharing fiber with classical traffic):** A fiber-to-the-home operator's classical downstream runs at 1490 nm, and you want to put a 1324 nm quantum channel on the same strand. (a) Using the Boltzmann factor $e^{-h\Omega/k_BT}$ at 300 K, find the anti-Stokes/Stokes ratio for this pair, where $\Omega$ is the frequency gap. Take $h/k_B=4.799\times10^{-11}$ K·s. (b) Compared with the ratio for C-band traffic at 1550 nm (about 1/197), how much less protection does the 1324 nm channel get, and why, in one sentence?

<details>
<summary>Solution</summary>

(a) $\nu=c/\lambda$ gives $226.43$ THz at 1324 nm and $201.20$ THz at 1490 nm, so $\Omega=25.23$ THz. Then

$$\frac{h\Omega}{k_BT}=\frac{(4.799\times10^{-11})(2.523\times10^{13})}{300}=4.04,$$

and the ratio is $e^{-4.04}=0.0177\approx1/57$.

(b) $197/57=3.5$: the anti-Stokes suppression is about 3.5 times weaker, because 1490 nm sits closer to 1324 nm, so the glass needs a lower-frequency vibration to bridge the gap and lower-frequency vibrations are more often thermally present.

</details>

## Connections

- **Backward:** extends [photonics 3.6](../../photonics-quantum-optics/lessons/03-06-single-photon-sources-photodetection.md) (efficiency, dark counts, multi-pair $\sim p^2$) from pulsed heralding to continuous time-tagging. The Werner state and its fidelity come from [1.3](01-03-fidelity-and-rate.md). Raman photons from [2.4](02-04-sharing-fiber-with-classical-traffic.md) enter here as extra singles that raise accidentals. The pairs themselves come from the source in [3.1](03-01-rubidium-vapor-vs-crystal-sources.md).
- **Forward:** [3.3](03-03-proving-a-link-is-entangled.md) replaces the Werner assumption with rigorous two-basis fidelity bounds. [4.3](04-03-reading-the-gothamq-result.md) reads the full GothamQ rate–fidelity data. [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) turns these fidelities into key rates.
- **Sideways:** $R_\text{acc}=R_1R_2\tau$ is the independence rule $P(A\cap B)=P(A)P(B)$ from [probability-theory 3.1](../../probability-theory/lessons/03-01-independence.md), applied to two Poisson click streams. It is also a classic signal-detection tradeoff: a wider acceptance window catches more true events and more false alarms.
