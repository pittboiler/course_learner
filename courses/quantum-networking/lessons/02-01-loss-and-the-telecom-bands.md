# Quantum Networking · Lesson 2.1: Loss and the telecom bands

> ⏱ ~15 min · Module 2: Photons in real fiber · Builds on: [1.4 The loss wall](01-04-the-loss-wall.md) · Unlocks: [2.3 Drift in buried fiber](02-03-drift-in-buried-fiber.md), [4.3 Reading the GothamQ result](04-03-reading-the-gothamq-result.md)

## Why this matters

Every conversation about a quantum link starts with one number, and it is quoted in decibels. "The span is 9 dB." "We lost 3 dB in the patch panel." If you can't turn that into "a quarter of the photons survive" in your head, you can't follow the meeting. [1.4](01-04-the-loss-wall.md) showed that loss grows exponentially with distance. This lesson makes you fluent in the bookkeeping, and explains a design choice that looks odd until it suddenly looks obvious: Qunnect's source makes photons at **two** wavelengths, 795 nm and 1324 nm, and only one of them is ever allowed to leave the building.

## The idea

Fiber loss is a chain of independent survival chances. Each kilometre lets through the same fraction of photons, and each connector, splice and switch takes its own small cut. Survival probabilities multiply. Multiplying is awkward to do in your head, so engineers take a logarithm and turn every multiplication into an addition. That is all a decibel is: a log scale that lets you **add** losses down a link like items on a receipt.

Why does the loss depend on colour? Glass is not perfectly uniform. When it froze, it locked in tiny density fluctuations, far smaller than a wavelength. Light scatters off them the same way sunlight scatters off air molecules, and that scattering grows steeply at short wavelengths (the reason the sky is blue). Go to long enough wavelengths and a different loss takes over: the glass's own molecular vibrations start absorbing light beyond about 1600 nm. Between the two sits a valley. Its floor, near 1550 nm (the **C-band**), is where classical internet traffic lives. Its near shoulder, roughly 1260–1360 nm (the **O-band**), is a little lossier but has almost no chromatic dispersion, so pulses don't smear. Below about 1260 nm, standard single-mode fiber stops being single-mode, and that is a second problem on top of the scattering.

Now the 795 nm photon. Rubidium atoms absorb and emit near 795 nm, which is why that photon can talk to a rubidium memory. But at 795 nm the fiber is lossy and multimode. Ten kilometres costs about 25 dB, so roughly 3 photons in 1,000 survive. The 1324 nm photon over the same 10 km loses 3.3 dB, so about 47 in 100 survive. That is a factor of about 150. So the design writes itself: **one photon for the atoms, one for the fiber.**

## The formal version

**Transmission and decibels.** Let $\eta$ be the transmission, meaning the probability that a photon entering a component comes out the other end ($0<\eta\le1$). The loss in decibels is

$$\ell = -10\log_{10}\eta, \qquad \eta = 10^{-\ell/10}.$$

*In words: every 10 dB is another factor of ten fewer photons, and every 3 dB is a halving.* Anchors worth memorizing: 1 dB keeps 79%, 3 dB keeps 50%, 10 dB keeps 10%, 20 dB keeps 1%. (Details on the card: [decibels and transmission](../reference.md#decibels-and-transmission).)

**The link budget.** A fiber of length $L$ (km) with attenuation coefficient $\alpha$ (dB/km), plus discrete elements with losses $\ell_i$ (connectors, splices, switches, compensators), has total loss

$$\ell_\text{tot} = \alpha L + \sum_i \ell_i, \qquad \eta_\text{tot} = 10^{-\ell_\text{tot}/10} = \prod_i \eta_i \times 10^{-\alpha L/10}.$$

*In words: add the dB, then convert once at the end. The product of survival probabilities becomes a sum of logs.* See the card's [link budget](../reference.md#link-budget) entry.

**Why the curve has a slope.** Rayleigh scattering scales as the inverse fourth power of wavelength:

$$\alpha_R(\lambda) = \alpha_R(\lambda_0)\left(\frac{\lambda_0}{\lambda}\right)^4.$$

*In words: halve the wavelength and scattering loss goes up sixteen-fold.* Anchor it at about 0.33 dB/km at $\lambda_0=1324$ nm, and at 795 nm the factor is $(1324/795)^4\approx7.7$. That gives about 2.5 dB/km as a floor estimate, before counting the multimode trouble. Typical values in standard single-mode fiber are about 0.2 dB/km in the C-band and about 0.33 dB/km in the O-band ([fiber attenuation by band](../reference.md#fiber-attenuation-by-band)). Treat them as typical datasheet figures, not constants of nature.

**Bichromatic pairs.** Qunnect's source runs a cascade in warm rubidium-87 vapor. A 780 nm pump and a 1367 nm coupling beam lift atoms up two rungs. They come back down in two steps, emitting a 1324 nm photon and then a 795 nm photon, polarization-entangled in $|\Phi^+\rangle$ (source physics in [3.1](03-01-rubidium-vapor-vs-crystal-sources.md)). Energy conservation, written in wavelengths, is

$$\frac{1}{780} + \frac{1}{1367} \approx \frac{1}{1324} + \frac{1}{795} \quad (\text{nm}^{-1}),$$

which holds to 0.02% with these rounded wavelengths. *In words: two photons in, two photons out, same total energy, but split into one atom-friendly colour and one fiber-friendly colour.* That is a [bichromatic photon pair](../reference.md#bichromatic-photon-pairs). The alternative is to make both photons near the atomic line and then shift the travelling one to telecom by [quantum frequency conversion](../reference.md#quantum-frequency-conversion): mix it with a strong pump in a nonlinear crystal. That works, but conversion is never 100% efficient, and the strong pump adds noise photons right next to a signal you are trying to count one at a time.

**Only one photon travels.** If the 795 nm photon is detected or stored next to the source, the pair rate at the far end is

$$R_\text{far} = R_\text{pair}\;\eta_{795,\text{local}}\;\eta_{1324,\text{link}}.$$

*In words: the delivered rate falls linearly with the travelling photon's transmission, and the fiber loss is paid once, by the photon that can afford it.*

## Picture

![Fiber loss in decibels per kilometre against wavelength from 750 to 1650 nanometres. A dashed Rayleigh trend falls steeply from left to right. Marked points: 795 nanometres at about 2.5 dB per km, the rubidium photon that stays home; 1324 nanometres at about 0.33 in the shaded O-band, the photon that travels; 1550 nanometres at about 0.2 in the shaded C-band, classical traffic. A red dotted line marks the single-mode cutoff near 1260 nanometres.](assets/02-01-fig1.svg)

The dashed curve is only the Rayleigh trend, anchored at the O-band value. The real curve also turns up past about 1600 nm (infrared absorption, not drawn). The point to take away is the gap between the red dot and the blue one.

## Worked examples

**Example 1 (the same link in two bands).** A 25 km span has six fusion splices at 0.05 dB each and two connectors at 0.3 dB each. Compare a C-band photon (0.2 dB/km) with an O-band photon (0.33 dB/km).

- C-band: $\ell = 0.2\times25 + 6\times0.05 + 2\times0.3 = 5.0+0.3+0.6 = 5.9$ dB, so $\eta = 10^{-0.59} = 0.257$.
- O-band: $\ell = 0.33\times25 + 0.9 = 8.25+0.9 = 9.15$ dB, so $\eta = 10^{-0.915} = 0.122$.

The O-band pays an extra $3.25$ dB, a factor $10^{0.325}=2.11$ fewer delivered pairs. That is the price of the O-band at metro distance: real, but not fatal.

**Example 2 (GothamQ's loop, read as a budget).** In the GothamQ experiment, Qunnect sent 1324 nm photons around a 34 km loop of buried, leased fiber in Brooklyn and Queens. The measured fiber loss was 14.45 dB.

- Per kilometre: $14.45/34 = 0.425$ dB/km.
- A datasheet O-band fiber at 0.33 dB/km would give $0.33\times34 = 11.22$ dB, so the deployed loop carries about $14.45-11.22 = 3.23$ dB extra. The paper doesn't itemize it, but this is what city fiber looks like: many splices, patch panels, connectors, bends and ageing cable. A datasheet describes one perfect spool.
- The paper's component table adds input polarization paddles (0.74 dB), the APC injector (0.22 dB), an optical switch (0.52 dB), and the APC compensator with its switch (1.54 dB). Together that is $3.02$ dB. Fiber plus components gives $14.45+3.02=17.47$ dB, which matches the reported 17.46 dB total to rounding.
- Fiber alone: $\eta = 10^{-1.445} = 0.036$, so about 1 photon in 28 makes it around the loop.

One business-relevant detail: the compensation hardware itself (injector plus compensator, $0.22+1.54=1.76$ dB) costs about as much as 5 km of datasheet O-band fiber. Fixing polarization is not free in the loss budget.

## Watch out

- **You might think 0.2 dB/km over 100 km loses 20% of the photons.** Actually it is 20 dB, which keeps 1%. Decibels are logarithmic, so never treat dB as a percentage.
- **You might think the datasheet coefficient predicts a customer's link.** Actually deployed fiber runs lossier per kilometre once splices, connectors and patch panels are counted (GothamQ: 0.425 against about 0.33). Budget from a measurement, ideally one made at your own wavelength, because a loss measured at 1550 nm understates the O-band loss.
- **You might think Qunnect chose the O-band because it has the lowest loss.** Actually the C-band is lower. The 1324 nm wavelength is set by rubidium's energy levels. The O-band's virtues are that it is low enough in loss, low in dispersion, and well away from the C-band classical traffic ([2.4](02-04-sharing-fiber-with-classical-traffic.md)).

## Business lens

Loss is the first line of every operator conversation, and the customer's fiber is whatever they already have. They will quote a span in dB, often measured at 1550 nm. Your first job is to convert it to the O-band and add the hardware's own few dB. Every 3 dB halves the delivered pair rate, so a 5 dB surprise in a customer's patch panels is a factor of three in the spec sheet.

The bichromatic design is Qunnect's real structural advantage. The atom-friendly photon never needs frequency conversion, and the memory paper's own comparison puts its warm-vapor photon–memory fidelity (90.2%) alongside cold-atom and NV systems that do need conversion. The honest flip side: an O-band photon pays about 0.13 dB/km more than a C-band one. Over metro loops that is a few dB. Over 100 km it is 13 dB, a factor of about 20. Today's deployments are city-scale loops (New York, Berlin's 30 km, Bozeman, Albuquerque), and that is where this tradeoff is cheapest.

## One-liner

> Add losses in dB and convert once at the end; then send the 1324 nm photon down the fiber and keep the 795 nm photon home with the atoms, because 10 km of fiber is a coin flip for one and a near-certain loss for the other.

## Problems

**P1 (🟢)** A 20 km O-band link uses fiber at 0.35 dB/km, passes through four connectors at 0.3 dB each, and includes one 1.2 dB component. Find the total loss in dB and the transmission $\eta$.

**P2 (🟡)** (a) At what length of O-band fiber (0.33 dB/km) does a photon suffer the same loss as 50 km of C-band fiber (0.2 dB/km)? (b) Over 50 km, by what factor does the C-band's transmission beat the O-band's? Ignore connectors and splices.

**P3 (🔴, practical)** A prospective customer offers you a 20 km dark fiber between two of their buildings and says "it measures 12 dB." Assume an O-band datasheet value of 0.33 dB/km. (a) How much extra loss does 12 dB imply over the datasheet expectation, and what factor in delivered pair rate does that excess cost? (b) In three sentences or fewer, say what that number tells you and what you would ask the customer before quoting performance.

<details>
<summary>Solutions</summary>

**P1** Add everything in dB first:

$$\ell = 0.35\times20 + 4\times0.3 + 1.2 = 7.0 + 1.2 + 1.2 = 9.4\ \text{dB}.$$

Then convert once: $\eta = 10^{-0.94} = 0.115$. About 11.5% of the photons arrive.

---

**P2** (a) Fifty km of C-band costs $0.2\times50 = 10$ dB. Set $0.33\,L = 10$, so $L = 10/0.33 = 30.3$ km. The O-band reaches the same loss in about 30 km.

(b) Over 50 km the O-band costs $0.33\times50 = 16.5$ dB, so $\eta_O = 10^{-1.65} = 0.0224$. The C-band has $\eta_C = 10^{-1.0} = 0.100$. The ratio is $0.100/0.0224 = 4.47$. Equivalently, the 6.5 dB difference gives $10^{0.65} = 4.47$.

---

**P3** *(practical)*

(a) The datasheet expectation is $0.33\times20 = 6.6$ dB, so the excess is $12-6.6 = 5.4$ dB. In transmission, $\eta(6.6) = 0.219$ against $\eta(12) = 0.063$, a factor of $10^{0.54} = 3.47$. The excess costs about 3.5 times fewer delivered pairs.

(b)

**Accept:** any answer that reads 12 dB over 20 km (0.6 dB/km) as well above clean fiber, and asks at least two diagnostic questions, one of which is the measurement wavelength.

**Must hit:**

- 0.6 dB/km is far above fiber's intrinsic loss, so the excess almost certainly sits in discrete elements (connectors, splices, patch panels, bends), and some of it may be fixable.
- Ask at what wavelength it was measured. If it was 1550 nm (datasheet 0.2 dB/km, so 4 dB expected), the excess is 8 dB, and the O-band loss will be higher than 12 dB.
- Ask for an OTDR trace (or the splice and connector count), and whether the route is buried or aerial.

**Model answer:** At 0.6 dB/km this fiber is nearly twice as lossy as clean O-band fiber, so about 5 dB is sitting in connectors, splices or bends. That costs roughly a factor of three in pair rate, and some of it may be recoverable by cleaning or re-splicing. Before quoting a rate, I'd ask which wavelength the 12 dB was measured at, for an OTDR trace showing where the loss is, and whether any of the route is aerial.

</details>

## Flashback

**From Lesson [1.3](01-03-fidelity-and-rate.md) (Fidelity and rate):** A field team measures a best CHSH value of $S=2.40$ on their link. Assuming the delivered pairs are Werner states, find (a) the good fraction $p$, (b) the fidelity $F$, (c) the average teleportation fidelity through one pair, and (d) whether the link can make an entanglement-based key, given that key vanishes once the error rate $e=\tfrac23(1-F)$ passes about 11%.

<details>
<summary>Solution</summary>

(a) $S=2\sqrt2\,p$, so $p=2.40/2.828=0.849$. About 15% of pairs are noise.

(b) $F=(1+3p)/4=(1+2.546)/4=0.886$.

(c) $F_\text{tel}=(2F+1)/3=(1.773+1)/3=0.924$, well above the classical $\tfrac23$.

(d) $e=\tfrac23(1-0.886)=0.076$, i.e. 7.6%, under the 11% cliff. Yes, it can make key (equivalently, $F=0.886>0.835$), though with less margin than its comfortable CHSH violation suggests.

</details>

## Connections

- **Backward:** [1.4](01-04-the-loss-wall.md) set up $\eta = 10^{-\alpha L/10}$ and the PLOB ceiling. This lesson supplies the $\alpha$ for each band and the discrete losses that real links add. Detector efficiency from [photonics 3.6](../../photonics-quantum-optics/lessons/03-06-single-photon-sources-photodetection.md) is just one more $\eta_i$ in the same product.
- **Forward:** [2.3](02-03-drift-in-buried-fiber.md) shows that the same buried fiber also rotates polarization, differently at each wavelength. [2.4](02-04-sharing-fiber-with-classical-traffic.md) explains why staying out of the C-band matters for coexistence. [3.1](03-01-rubidium-vapor-vs-crystal-sources.md) derives the cascade that makes the bichromatic pair. [4.3](04-03-reading-the-gothamq-result.md) builds the full GothamQ link budget.
- **Sideways:** decibels are the same log-to-add trick as log-likelihoods in statistics and the Richter scale in seismology. The $\lambda^{-4}$ scaling is the same scattering that makes the sky blue. The O-band's other virtue, low dispersion, is the pulse-spreading story of [waves-optics 4.4](../../waves-optics/lessons/04-04-wave-packets-dispersion-fourier.md).
