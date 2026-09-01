# Neuroscience · Lesson 3.3: Audition & somatosensation

> ⏱ ~15 min · Module 3: Sensory & motor systems · Builds on: [3.1](03-01-transduction-neural-coding.md), [3.2](03-02-vision.md) · Unlocks: 3.4 (motor systems)

## Why this matters

Two modalities in one lesson needs a justification, and there is a good one: **they use the same transduction trick, and it is the opposite of the one vision uses.**

[3.2](03-02-vision.md) built the photoreceptor around a cascade — photon, rhodopsin, transducin, phosphodiesterase, cGMP, channel. Enormous amplification, tens to hundreds of milliseconds of latency. That is the trade [3.1](03-01-transduction-neural-coding.md) stated in general: **amplification costs time**. Mechanoreceptors refuse the trade. The stimulus is mechanically coupled to the channel gate, so there is no cascade to run and the channel opens in **tens of microseconds** — the fastest transduction in the body, four orders of magnitude faster than phototransduction.

That single fact is why audition can do something vision cannot: **follow the waveform**. A hair cell tracks the cycles of a 1 kHz tone. No photoreceptor tracks the cycles of anything.

What separates the two modalities is what their maps are maps *of*. **Audition's map is of a stimulus property — frequency. Somatosensation's is of the body surface.** Retinotopy ([3.2](03-02-vision.md)) is a map of a surface too, so somatosensation is the familiar case; tonotopy is the strange one, and it is strange for a reason worth stating up front: **the ear's first processing stage is a mechanical Fourier-like decomposition, performed before any neuron is involved.**

Two modalities means you will be selective here. Go deep on the cochlea, on interaural timing, and on the acuity/map logic of touch; the rest is named and cited.

## The idea

**The shared mechanism: a gating spring.** A hair cell's stereocilia are a graded bundle joined at their tips by **tip links** — fine filaments running from the side of one stereocilium to the tip of its shorter neighbour. Deflect the bundle toward the tall edge and the tip links tension; that tension pulls transduction channels open directly. There is no messenger, no enzyme, no diffusion step. The channel is the load on a spring, and the spring is the stimulus.

The mechanics are a two-state Boltzmann problem with mechanical work in the exponent — exactly [biophysics 2.2](../../biophysics/lessons/02-02-boltzmann-two-state.md)'s machinery, with bundle displacement $x$ supplying the energy difference:

$$P_{\text{open}}(x) = \frac{1}{1 + \exp\!\left[-\dfrac{z\,(x - x_0)}{k_B T}\right]}$$

*In words: the probability a transduction channel is open is a sigmoid in bundle displacement, with $z$ the gating force (energy gained per unit opening) and $x_0$ the displacement at which the channel is open half the time.* Membrane-tension mechanics generally is [biophysics 3.5](../../biophysics/lessons/03-05-membrane-mechanics.md).

The sensitivity that falls out is absurd. A bundle's full operating range is about $\pm 100$ nm of tip displacement; at the threshold of hearing the deflection is on the order of **0.3 nm** — smaller than the width of an atom. That is not a rhetorical flourish; it is what the physical noise floor allows, and [3.1](03-01-transduction-neural-coding.md)'s claim that sensory receptors sit *at* the noise floor is nowhere more literal.

**Cost of skipping the cascade: no amplification.** The ear gets it back by a completely different route — a mechanical amplifier built into the cochlea itself, which we get to below. **Vision amplifies chemically and pays in time; audition amplifies mechanically and keeps the time.**

**The cochlea is a filter bank, not a microphone.** A microphone reports pressure against time and hands you a waveform. The cochlea does not: it splits the input into a few dozen overlapping frequency channels *in the mechanics*, and each auditory nerve fibre reports one channel's output. **The nerve never carries the waveform.** If you know [signals-systems 4.4](../../signals-systems/lessons/04-04-filter-design-basics.md), you already know the architecture — a bank of overlapping bandpass filters with logarithmically spaced centre frequencies and constant-Q bandwidths. The ear built one out of a strip of graded membrane.

**Somatosensation is a filter bank too, but in time, laid over a map in space.** Four afferent classes tile the same patch of skin, each reporting a different temporal band of the same indentation. The map is of the body, and its distortions encode innervation density.

## The formal version

### 1. Impedance matching: why there is a middle ear at all

Sound in air must drive fluid in the cochlea. The characteristic acoustic impedances are wildly mismatched: $Z_{\text{air}} = \rho c \approx 415$ Pa·s/m against $Z_{\text{fluid}} \approx 1.5\times10^{6}$ Pa·s/m, a ratio of about 3600. Power transmission at a plane interface is

$$T = \frac{4 Z_1 Z_2}{(Z_1 + Z_2)^2}$$

*In words: when the two impedances are very unequal, almost all the incident power reflects.* With $Z_2/Z_1 = 3614$, $T = 1.1\times10^{-3}$ — **about 30 dB of power lost**, essentially all of it reflected.

The ossicles recover it with two mechanical gains, both trivially simple:

$$\text{pressure gain} \;=\; \underbrace{\frac{A_{\text{tympanic}}}{A_{\text{footplate}}}}_{\text{area ratio}} \times \underbrace{\frac{\ell_{\text{malleus}}}{\ell_{\text{incus}}}}_{\text{lever ratio}} \;\approx\; \frac{55\ \text{mm}^2}{3.2\ \text{mm}^2}\times 1.3 \;\approx\; 22$$

*In words: the same force collected over a large membrane is delivered to a small piston, and a lever adds a little more — so pressure at the oval window is about 22 times pressure at the eardrum.* That is $20\log_{10}22 = \mathbf{27}$ **dB**, against a 30 dB mismatch. **The ossicles are not a curiosity of comparative anatomy; they are an impedance-matching transformer, and they very nearly close the gap.** Conductive hearing loss is what happens when they stop working, and its magnitude — a few tens of dB — is exactly this calculation run backwards.

### 2. The cochlea as a mechanical frequency analyser

The basilar membrane runs about 35 mm from base to apex and is **graded**: narrow (roughly 0.1 mm) and stiff at the base, wide (roughly 0.5 mm) and floppy at the apex, with stiffness falling by around two orders of magnitude along its length. A stiff, light strip resonates high; a wide, compliant one resonates low. So the membrane is a continuum of resonators tuned in order.

Drive the stapes and a **travelling wave** runs from base to apex. It grows as it goes, peaks where the local resonance matches the driving frequency, then dies abruptly — because past that point the membrane can no longer follow. **A tone's energy is delivered to a place.** That is **place coding**, and the resulting position-to-frequency map is **tonotopy**, preserved through the auditory nerve, brainstem, thalamus and into primary auditory cortex.

The human map is well fit by the **Greenwood function**:

$$f(x) = A\left(10^{\,a x} - k\right), \qquad A = 165.4\ \text{Hz},\; a = 2.1,\; k = 0.88$$

with $x$ the fraction of cochlear length measured **from the apex**. *In words: frequency rises roughly exponentially with distance from the apex, so equal distances correspond to equal frequency ratios.* Check the ends: $x=0$ gives 20 Hz, $x=1$ gives 20.7 kHz — the audible range, and the map is essentially logarithmic in between.

**This is the deepest structural fact in hearing, and it is not neural.** Before a single ion channel opens, the input has been decomposed into frequency bands. Everything downstream operates on the outputs of that decomposition. If Fourier machinery is fresh ([fourier-analysis 2.1](../../fourier-analysis/lessons/02-01-series-to-fourier-transform.md)), note the ear is *not* computing a Fourier transform — it is a bank of overlapping, causal, finite-Q bandpass filters ([signals-systems 4.4](../../signals-systems/lessons/04-04-filter-design-basics.md)), which is what you build when you need frequency information *now* rather than a mathematically exact spectrum eventually.

### 3. Hair cells and the battery that drives them

Hair cells sit on the basilar membrane in the organ of Corti; their bundles are sheared by membrane motion. Humans have about **3,500 inner hair cells** (IHCs) and **12,000 outer hair cells** (OHCs), and the division of labour is sharp: **IHCs are the sensors** — around 95 percent of auditory nerve fibres contact them, roughly 10 fibres per cell — while **OHCs are motors**, described next.

One counterintuitive detail worth getting right. The transduction current is carried mostly by $\text{K}^+$, and it **flows inward and depolarizes the cell.** That inverts the usual reflex, and the reason is that the apical surface faces **endolymph**, which is unlike any other extracellular fluid: high $\text{K}^+$ (~150 mM) and held at an **endocochlear potential of about +80 mV** by the stria vascularis. With the hair cell interior near $-45$ mV:

$$\text{driving force across the apical membrane} \;=\; (V_{\text{endolymph}} - V_{\text{cell}}) - E_{\text{K}} \approx (80 - (-45)) - 0 = \mathbf{125\ \text{mV}}$$

*In words: $\text{K}^+$ concentrations are nearly equal across the apical membrane so $E_{\text{K}}$ there is about zero, and the entire 125 mV of electrical gradient is available to push $\text{K}^+$ in.* The cochlea spends real metabolic effort maintaining that battery, and what it buys is a large current through a channel that must open in microseconds — you cannot get speed *and* current out of a small driving force.

### 4. The active amplifier: outer hair cells

A passive resonator with this much viscous damping would be broadly tuned and insensitive. The cochlea is neither, and the reason is that **OHCs pump energy back into the travelling wave, cycle by cycle.**

The motor is **prestin**, a membrane protein that changes conformation — and therefore the cell's length — in response to membrane *voltage*, not ATP hydrolysis. It is fast enough to work at acoustic frequencies. The consequences:

- **Gain**: roughly 40–50 dB of amplification at low sound levels, which is most of the bottom of the audible range.
- **Sharpened tuning**: the travelling-wave peak narrows dramatically.
- **Compression**: the amplifier's gain is large for faint sounds and small for loud ones, so basilar-membrane displacement grows at roughly **0.2–0.3 dB per dB** near the characteristic frequency. This is [3.1](03-01-transduction-neural-coding.md)'s dynamic-range compression, implemented mechanically rather than neurally.

**The evidence that clinches it is that the ear emits sound.** Put a sensitive microphone in the ear canal and you record **otoacoustic emissions** — sound generated by the cochlea itself, evoked by a click or occurring spontaneously. **No passive filter emits energy.** They disappear when OHCs are damaged, which is why they are the basis of newborn hearing screening: a test of cochlear mechanics that requires no response from the infant.

### 5. Coding: place, phase, and the microsecond problem

Three codes, and each has a regime:

| Code | What carries the information | Where it works |
|---|---|---|
| **Place** | *which* fibres are active | all frequencies; the only code above ~4 kHz |
| **Rate** | *how fast* those fibres fire | intensity, over a limited range per fibre |
| **Temporal (phase locking)** | *when* in the stimulus cycle spikes occur | below ~4–5 kHz in mammals |

**Phase locking** means auditory nerve spikes cluster at a preferred phase of the stimulus waveform. A fibre need not fire every cycle — it fires *in phase* when it fires — so the population's spike times carry the waveform's fine structure. It degrades above a few kHz because membrane and synaptic time constants smear the timing.

The payoff is **sound localization in azimuth**, and it demands precision the rest of the nervous system never approaches. Sound from one side reaches the near ear first. Modelling the head as a sphere of radius $r$, the extra path to the far ear is a straight run plus a creep around the surface, giving **Woodworth's formula**:

$$\boxed{\;\Delta t(\theta) = \frac{r}{c}\left(\theta + \sin\theta\right)\;}$$

*In words: the interaural time difference is the time for sound to cover the straight-line offset $r\sin\theta$ plus the arc $r\theta$ it must creep around the head.* With $r = 8.75$ cm and $c = 343$ m/s, the **maximum ITD is 656 µs** at $\theta = 90^\circ$.

Now the number that matters: **humans discriminate ITDs of about 10 µs**, corresponding to about $1^\circ$ near the midline. A spike lasts about 1 ms. **The behavioural resolution is one hundredth of the width of the signal carrying it** — and finer than the timing jitter of any single auditory nerve spike. It is [3.1](03-01-transduction-neural-coding.md)'s population-precision result in its most extreme form, implemented by **coincidence detection** in the medial superior olive: neurons that fire only when inputs from the two ears arrive together, which is [2.6](02-06-circuit-motifs-computation.md)'s feedforward-convergence motif with the integration window shrunk as far as biophysics allows (sub-millisecond membrane time constants, per [2.3](02-03-synaptic-integration.md)). It is also the clearest case of the argument in [2.4](02-04-electrical-synapses.md): **microseconds are worth paying for in exactly one place, and this is it.**

**Duplex theory** follows from arithmetic. An interaural *phase* difference becomes ambiguous once half a period is shorter than the maximum ITD, i.e. above $1/(2 \times 656\ \mu\text{s}) \approx 760$ Hz; and phase locking fails by a few kHz anyway. Meanwhile the head only casts an acoustic shadow when the wavelength is comparable to it, at $343/0.175 \approx 2$ kHz and above. **So low frequencies are localized by time and high frequencies by level, with a well-known crossover region in between where humans are worst.**

### 6. Somatosensation: four channels, one skin

The tactile afferents decompose an indentation into complementary temporal bands — [3.1](03-01-transduction-neural-coding.md)'s tonic/phasic distinction, made concrete:

| Afferent | End organ | Adaptation | Best stimulus | Receptive field |
|---|---|---|---|---|
| **SA1** | Merkel | slow | sustained indentation, edges, texture | small (~2–3 mm) |
| **SA2** | Ruffini | slow | skin stretch, finger posture | large |
| **RA1** | Meissner | rapid | flutter and slip, ~5–50 Hz | small |
| **RA2 (PC)** | Pacinian | very rapid | vibration, ~100–300 Hz | very large |

**Read the table as a filter bank in time.** SA1 is the DC and low-frequency channel; RA1 is the mid band; the Pacinian corpuscle is a high-pass filter built out of onion-like lamellae that mechanically block sustained pressure from reaching the terminal, and it is sensitive to displacements of tens of nanometres at its best frequency. Molecularly, **Piezo2** is the principal mechanotransduction channel of tactile afferents; thermosensation runs on **TRPM8** (cool, menthol) and **TRPV1** (heat above about 43 °C, capsaicin), though core-temperature regulation as a control problem belongs to [physiology 4.2](../../physiology/lessons/04-02-thermoregulation.md).

**Acuity is set by innervation density, and you can compute it.** The glabrous fingertip carries roughly 140 mechanoreceptive afferents per cm². Mean spacing is then

$$s = \frac{1}{\sqrt{1.4\ \text{mm}^{-2}}} = 0.85\ \text{mm}, \qquad \text{two-point threshold} \approx 2s \approx 1.7\ \text{mm}$$

*In words: to feel two points as two you need at least one unstimulated receptor between them, so the resolvable separation is about twice the receptor spacing.* Measured fingertip two-point thresholds are 2–3 mm — the right answer, slightly conservative, because skin blurs the indentation profile and central factors add their own limit. This is the same sampling argument that sets visual acuity from cone spacing ([3.2](03-02-vision.md)), and the same one behind Nyquist ([signals-systems 3.1](../../signals-systems/lessons/03-01-sampling-nyquist-shannon.md)).

**Somatotopy** is the map: an ordered projection of the body surface onto S1, ascending through the thalamus. It is **grossly distorted** — the homunculus's enormous hands and lips — and the distortion tracks **innervation density, not body size**, exactly as cortical magnification in V1 tracks ganglion-cell density rather than retinal area. Same principle, different surface.

The addition that vision does not offer so cleanly: **these maps are plastic in adults.** Train a monkey on a task using two fingers and their cortical territory expands; amputate a digit and neighbouring representations invade its territory within weeks. **Phantom limb** phenomena — including touch to the face evoking sensation in a phantom hand, since the face representation borders the hand's — read naturally as this reorganization. That plasticity is Module 4's subject; [4.1](04-01-plasticity-ltp-ltd.md) supplies the synaptic mechanism.

**Two ascending pathways, and they decussate at different places** — which is the whole clinical point:

| | Dorsal column–medial lemniscal | Spinothalamic |
|---|---|---|
| Carries | touch, vibration, proprioception | pain, temperature, crude touch |
| Fibres | large myelinated Aβ, ~35–75 m/s | Aδ ~5–30 m/s, C ~0.5–2 m/s |
| Crosses midline | in the **medulla** | within **1–2 segments** of entry |
| After a cord hemisection | loss **ipsilateral**, below the lesion | loss **contralateral**, below the lesion |

**A single lesion therefore produces a split deficit** — vibration sense lost on one side, pain and temperature on the other (Brown-Séquard). That dissociation is only predictable if you know *where* each pathway crosses, and it is the reason the anatomy is worth carrying.

### 7. Pain, which is not a readout

Nociceptors are free nerve endings with high thresholds, transducing damaging heat (TRPV1), intense mechanical force, and tissue-damage chemistry (ASICs for acid). Their afferents are the slow ones: **Aδ** (myelinated, fast, sharp localized "first pain") and **C** (unmyelinated, slow, diffuse burning "second pain"). Conduction velocity alone predicts a double sensation from a single injury, and P3 works the numbers.

But **pain is constructed, not measured**, and two mechanisms make that concrete:

- **Gate control.** Large Aβ touch afferents entering the dorsal horn excite inhibitory interneurons that suppress nociceptive transmission — [2.6](02-06-circuit-motifs-computation.md)'s feedforward inhibition, with the timing handed to it by conduction velocity, since the Aβ volley arrives long before the C volley. **This is why rubbing an injury helps**, and the original 1965 circuit diagram was wrong in detail while the principle survived intact.
- **Descending modulation.** Periaqueductal grey to rostral ventromedial medulla to dorsal horn, opioid-sensitive, capable of suppressing nociceptive transmission at the first synapse. This is the substrate for stress-induced analgesia and a large part of placebo analgesia.

**So the relationship between nociceptor firing and felt pain is set by circuit state, not by the stimulus alone** — which is why chronic pain can persist with no ongoing nociceptor drive, and why "how much pain" is not a quantity a peripheral measurement can settle.

## Picture

![Two panels. Panel a shows the cochlea uncoiled along a 35 millimetre axis from base to apex, drawn as a wedge that is narrow and stiff at the base and wide and floppy at the apex, with characteristic frequencies from 20 kilohertz at the base down to 20 hertz at the apex marked along the axis, and two travelling-wave envelopes above it, one for a 4 kilohertz tone peaking near 12 millimetres from the base and one for a 1 kilohertz tone peaking near 21 millimetres, showing that each frequency delivers its energy to its own place. Panel b shows the interaural time difference geometry: a head seen from above with a plane wave arriving at 45 degrees, the near ear reached directly, and the far ear reached by an extra path made of a straight run equal to r times sine theta plus a creeping arc equal to r times theta around the head, with the Woodworth formula and worked values beside it.](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the cochlear map, then find its limit).** Using the Greenwood function with $A = 165.4$ Hz, $a = 2.1$, $k = 0.88$ and a 35 mm cochlea: (a) where do 1 kHz and 2 kHz peak? (b) How much membrane does an octave occupy at 1 kHz and at 4 kHz? (c) The mechanical filter at 1 kHz has a bandwidth of about 133 Hz, yet listeners hear a 3 Hz change in a 1 kHz tone. Reconcile these.

**(a)** Invert $f = A(10^{ax} - k)$ for $x$, the fraction of cochlear length from the apex:

$$x = \frac{1}{a}\log_{10}\!\left(\frac{f}{A} + k\right)$$

$$x_{1\text{k}} = \frac{1}{2.1}\log_{10}\!\left(\frac{1000}{165.4} + 0.88\right) = \frac{1}{2.1}\log_{10}(6.926) = \frac{0.8404}{2.1} = 0.400$$

$$x_{2\text{k}} = \frac{1}{2.1}\log_{10}(12.09 + 0.88) = \frac{1.1129}{2.1} = 0.530$$

In millimetres from the apex: $0.400 \times 35 = 14.0$ mm and $0.530 \times 35 = 18.6$ mm; equivalently **21.0 mm and 16.4 mm from the base**.

**(b)** The octave 1→2 kHz occupies $(0.530 - 0.400)\times 35 = \mathbf{4.54\ \text{mm}}$. For 4→8 kHz, $x_{4\text{k}} = 0.666$ and $x_{8\text{k}} = 0.806$, giving $\mathbf{4.89\ \text{mm}}$.

**Nearly the same distance — the map is logarithmic.** Two consequences worth carrying:

1. **Equal musical intervals occupy equal stretches of membrane.** A perfect fifth is the same 2.6 mm wherever you play it. Pitch feels logarithmic because the transducer is.
2. **A fixed length of damage costs a fixed number of octaves, wherever it sits.** Noise-induced loss concentrated over 5 mm near the base removes about an octave of high-frequency hearing — and since the basal end is where the travelling wave for *every* frequency passes through first, it is also the end that takes the most mechanical abuse. That is why hearing loss starts at the top.

**(c)** These do not conflict, because **discrimination is not set by channel width.** The mechanical filter at 1 kHz has $Q \approx 1000/133 \approx 7.5$; the discrimination threshold is about 3 Hz, roughly **40 times finer than the filter**.

The resolution is exactly [3.1](03-01-transduction-neural-coding.md)'s: a small frequency shift changes the *relative* excitation of many overlapping channels, and a downstream reader comparing across them recovers the shift far more precisely than any one channel's width. Below a few kHz, phase locking supplies a second, independent cue. **A broadly tuned population is not an imprecise population** — the same claim that made population coding worth introducing, here confirmed by a factor of forty.

**Example 2 (why you'd care — how 10 µs is possible at all).** A single auditory nerve spike's arrival time jitters by roughly 100 µs. Behavioural ITD discrimination is about 10 µs. (a) Show the discrepancy is not fatal. (b) What must the coincidence detector's membrane time constant be? (c) Why does this argument fail above 2 kHz?

**(a)** Averaging $N$ independent estimates each with standard deviation $\sigma$ gives a mean with standard deviation $\sigma/\sqrt{N}$:

$$\sigma_{\text{est}} = \frac{100\ \mu\text{s}}{\sqrt{N}} = 10\ \mu\text{s} \;\;\Longrightarrow\;\; N = 100$$

**About a hundred convergent, independently jittered inputs get you there** — and each medial superior olive neuron receives input from many auditory nerve fibres, on both sides, with the whole population of MSO neurons read out together. Nothing exotic is required: this is the $\sqrt{N}$ argument from [3.1](03-01-transduction-neural-coding.md), and it is the reason evolution built a dedicated nucleus rather than a dedicated neuron.

**(b)** A coincidence detector's window is set by how long an EPSP lasts, i.e. by $\tau_m$ ([2.3](02-03-synaptic-integration.md)). A cortical pyramidal cell with $\tau_m \approx 15$ ms would sum inputs 600 ITDs apart into one indistinguishable blur. **MSO and avian nucleus laminaris neurons instead have $\tau_m$ well under a millisecond**, achieved with a large standing low-threshold $\text{K}^+$ conductance — a very leaky membrane, deliberately. They also have short, thick dendrites and unusually fast, high-probability synapses.

**Read that as a design statement.** [2.3](02-03-synaptic-integration.md) said a short $\tau$ makes a coincidence detector and a long $\tau$ makes an integrator, and that the same input computes different things in the two regimes. **The auditory brainstem is the extreme of one end of that axis, and it pays for it**: a leaky membrane needs far more synaptic current for the same depolarization, which is metabolically expensive and is exactly why the ITD pathway is not the general-purpose design.

**(c)** Two independent failures, both quantitative. Phase locking degrades above ~4 kHz, so the spike times stop carrying fine structure. And well before that, the *phase* cue becomes ambiguous: with a maximum ITD of 656 µs, once half a period is shorter than that — above $1/(2\times656\ \mu\text{s}) \approx 760$ Hz — a given interaural phase difference is consistent with more than one azimuth. **So the system switches to interaural level differences**, which only exist once the wavelength is short enough for the head to shadow, near 2 kHz. Duplex theory is not a taxonomy; it is what these three numbers force.

## Watch out

- **You might think the cochlea sends the waveform to the brain.** It does not, and it cannot: the auditory nerve carries the outputs of a few dozen overlapping bandpass channels (about 40, by the standard equivalent-rectangular-bandwidth count), not a pressure trace. Everything downstream — including your perception of a chord as separable notes — operates on that decomposition. **The hardest problems in hearing are the ones where the decomposition throws information away**, which is why separating two simultaneous talkers is difficult and separating two simultaneous colours is meaningless.
- **You might expect $\text{K}^+$ influx to hyperpolarize.** In the hair cell's apical membrane it depolarizes, because endolymph has nearly the same $\text{K}^+$ concentration as cytoplasm — so $E_{\text{K}}$ there is about zero — and sits at $+80$ mV. Sign is set by the electrochemical gradient, never by the ion's identity ([1.2](01-02-resting-membrane-potential.md)).
- **You might treat tonotopy and somatotopy as the same kind of map.** They are not. Somatotopy maps a **surface** onto a surface, like retinotopy. Tonotopy maps an **abstract stimulus dimension** onto a surface — there is no place on your body corresponding to 1 kHz. The cochlea manufactures the axis it maps.
- **You might read two-point discrimination as a pure receptor-spacing number.** Spacing sets a hard ceiling, and the estimate is right to within a factor of two, but skin mechanics blur the profile and cortical processing adds its own limit. The sampling argument gives a bound, not a measurement.
- **You might expect a spinal lesion to knock out sensation on one side.** It knocks out *different modalities on different sides*, because the two pathways cross at different levels — touch and proprioception ipsilaterally below the lesion, pain and temperature contralaterally.
- **You might treat nociceptor firing as pain.** It is one input to a heavily modulated circuit with gate control at the first synapse and a descending system on top. Nociception is measured; pain is constructed.

## One-liner

> Both modalities gate the channel with the stimulus itself, which buys microsecond speed at the cost of amplification — so the ear rebuilds amplification mechanically with outer hair cells, decomposes sound into a place map before any neuron is involved, and reaches 10 µs of interaural timing precision by averaging a hundred jittery spikes, while touch lays a filter bank in time over a map of the body whose distortions are just innervation density drawn to scale.

## Problems

**P1 (🟢)** The middle ear. Take $Z_{\text{air}} = 415$ Pa·s/m, $Z_{\text{perilymph}} = 1.5\times10^{6}$ Pa·s/m, an effective tympanic membrane area of 55 mm², a stapes footplate area of 3.2 mm², and an ossicular lever ratio of 1.3.

(a) Compute the fraction of incident sound power that would enter the cochlea with no middle ear, and express it in dB.
(b) Compute the ossicular pressure gain and express it in dB.
(c) Comment on the net, and on what the calculation predicts about the size of a conductive hearing loss.

**P2 (🟡, bridges to cortical map organization)** The glabrous fingertip has about 140 mechanoreceptive afferents per cm²; its two-point threshold is about 2 mm. The thigh's two-point threshold is about 40 mm.

(a) Estimate the fingertip receptor spacing and the two-point threshold it predicts.
(b) Working backwards from the thigh's threshold, estimate its afferent density, and give the fingertip-to-thigh density ratio.
(c) If cortical territory is allocated in proportion to afferent count, what does this predict about the two regions' representations in S1, and what does the prediction have to say about the homunculus?

**P3 (🔴, bridges to [1.5](01-05-cable-theory-conduction.md) and to clinical reasoning)** You stub your toe. Nociceptive afferents run 1.0 m from the toe to the spinal cord. Take Aδ fibres at 15 m/s, C fibres at 1.0 m/s, and Aβ touch afferents at 50 m/s.

(a) Compute the arrival time of each volley at the cord, and the interval between the Aδ and C arrivals. What perceptual phenomenon does this predict?
(b) You immediately rub the toe. How much earlier does the touch volley arrive than each pain volley, and which pain component should rubbing suppress more effectively?
(c) Repeat (a) for a fingertip, path length 0.75 m, and state what the comparison predicts about where the phenomenon in (a) is easiest to notice.

<details>
<summary>Solutions</summary>

**P1 (a)** The impedance ratio is

$$r = \frac{Z_2}{Z_1} = \frac{1.5\times10^{6}}{415} = 3614 .$$

$$T = \frac{4Z_1Z_2}{(Z_1+Z_2)^2} = \frac{4r}{(1+r)^2} = \frac{14{,}458}{(3615)^2} = \frac{14{,}458}{1.307\times10^{7}} = 1.106\times10^{-3}$$

$$10\log_{10}(1.106\times10^{-3}) = \mathbf{-29.6\ \text{dB}} .$$

**About 0.11 percent of the incident power gets in; 99.9 percent reflects.**

**(b)** $$\text{gain} = \frac{55}{3.2}\times 1.3 = 17.19 \times 1.3 = 22.3$$

$$20\log_{10}(22.3) = \mathbf{+27.0\ \text{dB}} .$$

Note the split: the **area ratio supplies 24.7 dB** and the **lever only 2.3 dB**. The hydraulic step does nearly all the work; the lever is a refinement. If you remember one thing about ossicular mechanics, remember that it is mostly a big membrane pushing a small piston.

**(c)** Net: $-29.6 + 27.0 = \mathbf{-2.6\ \text{dB}}$. **The transformer very nearly closes a 30 dB gap.**

Two things follow. First, this is a genuine prediction about pathology: if the ossicular chain is disrupted or the middle ear fills with fluid, you lose roughly the gain the chain was supplying, so a **conductive hearing loss should be on the order of a few tens of dB and should not exceed about 60 dB** — because sound still reaches the cochlea by bone conduction. That bound is exactly what is observed, and it is what separates conductive from sensorineural loss on an audiogram.

Second, the real middle ear does not achieve the ideal 27 dB at all frequencies — the match is best in roughly the 1–4 kHz band, which is also where human hearing is most sensitive and where speech carries most of its information. **The mechanics and the sensitivity curve are the same fact.**

**P2 (a)** $$140\ \text{cm}^{-2} = 1.4\ \text{mm}^{-2}, \qquad s = \frac{1}{\sqrt{1.4}} = 0.845\ \text{mm}$$

$$\text{predicted two-point threshold} \approx 2s = \mathbf{1.7\ \text{mm}} ,$$

against about 2 mm measured — **right to within 15 percent**, which is as much as a pure sampling argument can claim.

**(b)** Run it backwards. A threshold of 40 mm implies $s = 20$ mm, hence

$$\rho = \frac{1}{s^2} = \frac{1}{400\ \text{mm}^2} = 0.0025\ \text{mm}^{-2} = \mathbf{0.25\ \text{afferents per cm}^2} .$$

$$\frac{\rho_{\text{finger}}}{\rho_{\text{thigh}}} = \frac{140}{0.25} = \mathbf{560} .$$

Sanity check by a second route: acuity ratio $40/2 = 20$ in linear terms, so $20^2 = 400$ in areal terms. **560 against 400 — the same answer to the accuracy of the inputs**, which is the check worth doing, since the two estimates use the data differently.

**(c)** If cortex allocates area per afferent, then **cortical area per cm² of skin scales with afferent density**, so the fingertip's representation is a few hundred times denser than the thigh's, per unit skin.

**That is precisely what the homunculus is a picture of**, and stating it this way removes the mystery. The distorted little man is not a claim that the brain "cares more" about hands in any interpretive sense; it is the statement that **cortical magnification tracks peripheral sampling density**, exactly as it does in V1, where foveal magnification tracks ganglion-cell density rather than retinal area ([3.2](03-02-vision.md)).

The prediction is testable and has been tested. **Species with unusual peripheral specializations have correspondingly unusual maps** — the star-nosed mole's nose, the rat's whisker barrels — and adult training that increases the effective use of a skin region expands its territory. **A map that tracks sampling density is a map that must be re-derivable, not hard-wired**, which is why somatotopy is plastic and why phantom-limb remapping is unsurprising once you have this framing.

**P3 (a)** $$t_{A\delta} = \frac{1.0\ \text{m}}{15\ \text{m/s}} = 0.067\ \text{s} = \mathbf{67\ \text{ms}}$$

$$t_C = \frac{1.0\ \text{m}}{1.0\ \text{m/s}} = \mathbf{1000\ \text{ms}}$$

$$\Delta t = 1000 - 67 = \mathbf{933\ \text{ms}} \approx 0.9\ \text{s} .$$

**This predicts the double sensation**, and the phenomenon is real and familiar: a sharp, well-localized "first pain" followed roughly a second later by a duller, spreading, burning "second pain". **The gap is nothing but conduction delay** — one stimulus, two volleys, arriving a second apart because one axon is myelinated and the other is not.

**(b)** $$t_{A\beta} = \frac{1.0}{50} = \mathbf{20\ \text{ms}} .$$

The touch volley leads the Aδ volley by $67 - 20 = \mathbf{47\ \text{ms}}$ and the C volley by $1000 - 20 = \mathbf{980\ \text{ms}}$.

**Rubbing should suppress second pain far more effectively**, and for a mechanical reason: gate-control inhibition in the dorsal horn is driven by ongoing Aβ input, and rubbing produces a *continuous* Aβ barrage. Against the C volley there is a full second of inhibitory drive already in place before the nociceptive signal arrives; against the Aδ volley there are only tens of milliseconds, and against a single unrepeated stimulus, essentially none. That is [2.6](02-06-circuit-motifs-computation.md)'s feedforward inhibition, **with the timing supplied entirely by conduction velocity** — the circuit motif tells you the sign of the effect, and the axon physics tells you which component it lands on.

**(c)** $$t_{A\delta} = \frac{0.75}{15} = 50\ \text{ms}, \qquad t_C = \frac{0.75}{1.0} = 750\ \text{ms}, \qquad \Delta t = \mathbf{700\ \text{ms}} .$$

**The delay is proportional to path length**, so it is largest for the most distal parts of the body. Predicted: the double sensation is **easiest to notice for a stubbed toe and hardest for a bitten lip** — 0.9 s versus, for a trigeminal path of a few centimetres, a few tens of milliseconds, which no one perceives as two events.

**Why myelination is the whole story here.** Conduction velocity scales differently in the two fibre classes ([1.5](01-05-cable-theory-conduction.md)): roughly $v \propto \sqrt{d}$ for unmyelinated axons, but roughly $v \propto d$ for myelinated ones, with saltatory conduction giving a large constant of proportionality on top. That is why an 8 µm myelinated Aβ fibre runs at 50 m/s while a 1 µm unmyelinated C fibre manages 1 m/s — a 50-fold speed difference from an 8-fold diameter difference.

**And the nervous system chose this.** C fibres are thin and unmyelinated because there are enormous numbers of them and they are cheap; the information they carry — "tissue is damaged, change your behaviour for the next hour" — has no use for millisecond precision. Aδ fibres pay for myelin because withdrawing a limb quickly does. **Conduction velocity is not a fixed property of neurons; it is a per-pathway purchase, and the price is axon volume.**

</details>

## Flashback

**From Lesson 2.1 (chemical synaptic transmission):** The endbulb of Held, in the cochlear nucleus, is the first synapse in the ITD pathway and must relay auditory nerve spikes with high reliability and sub-millisecond precision. Recordings give a mean evoked EPSC of $\mu = 4.20$ nA with variance $\sigma^2 = 0.063$ nA², and spontaneous miniature events with mean amplitude $q = 0.030$ nA.

(a) Estimate the release probability $p$, the mean quantal content $m$, and the number of release sites $n$.
(b) Compare the observed variance with what a Poisson process would predict, and say what the comparison establishes.
(c) Residual $\text{Ca}^{2+}$ raises release probability on a second spike by a factor $f = 1.3$. Predict the paired-pulse ratio, and say why this synapse is built the way it is.

<details>
<summary>Solution</summary>

**(a)** Binomial release with $n$ sites, probability $p$, quantal size $q$ gives $\mu = npq$ and $\sigma^2 = np(1-p)q^2$. Divide:

$$\frac{\sigma^2}{\mu} = q(1-p) \;\;\Longrightarrow\;\; \frac{0.063}{4.20} = 0.015 = 0.030\,(1-p)$$

$$1 - p = 0.5 \;\;\Longrightarrow\;\; \boxed{p = 0.50}$$

$$m = \frac{\mu}{q} = \frac{4.20}{0.030} = \mathbf{140\ \text{quanta per spike}}, \qquad n = \frac{m}{p} = \frac{140}{0.50} = \mathbf{280\ \text{release sites}} .$$

Check with the other estimator: $\mathrm{CV}^{-2} = \mu^2/\sigma^2 = 17.64/0.063 = 280$, and $np/(1-p) = 140/0.5 = 280$ ✓.

**(b)** A Poisson process with the same mean would give $\sigma^2 = mq^2 = 140 \times (0.030)^2 = 0.126$ nA² — **exactly twice the observed variance.**

The synapse is **sub-Poisson**, and that is not a small technical point: the binomial has a ceiling at $n$ releases, and a ceiling suppresses variance. Observing $\sigma^2 < mq^2$ is therefore **direct evidence that $p$ is not small**, independent of the algebra in (a). It is also why the failure method from [2.1](02-01-chemical-synaptic-transmission.md) is useless here: with $n = 280$ and $p = 0.5$, $P(\text{failure}) = 0.5^{280}$, a number with no physical meaning. **This synapse never fails, which is the point of it.**

**(c)** $$\text{PPR} = (1-p_1)\,f = (1 - 0.50)(1.3) = \mathbf{0.65}$$

**It depresses**, losing 35 percent on the second spike — as [2.1](02-01-chemical-synaptic-transmission.md)'s rule requires: high release probability means depletion beats facilitation.

**Why build it this way.** Everything downstream needs a spike-for-spike relay with tight timing, because the medial superior olive is comparing arrival times to 10 µs. That demands (i) essentially zero failures, hence large $n$ and high $p$; and (ii) a large, fast current so the postsynaptic cell crosses threshold with minimal, low-variance latency, hence $m = 140$ quanta rather than the handful a cortical synapse releases.

**The cost is exactly the depression computed above**, and it is a real one — at high firing rates this synapse runs its vesicle pool down. **A relay and a computing element are different devices with different optimal parameters**, and this is the clearest example in the course: the endbulb spends reliability and timing precision, and buys them with dynamic range. [2.3](02-03-synaptic-integration.md)'s central neuron, integrating thousands of unreliable inputs, is the opposite design serving the opposite purpose.

</details>

## Connections

- **Backward:** the transduction/amplification/adaptation frame is [3.1](03-01-transduction-neural-coding.md)'s, and the cochlear amplifier's compression is its dynamic-range argument done mechanically; the ITD coincidence detector is [2.6](02-06-circuit-motifs-computation.md)'s feedforward convergence with [2.3](02-03-synaptic-integration.md)'s time constant driven to its lower limit; gate control is feedforward inhibition again; the hair-cell driving-force calculation is [1.2](01-02-resting-membrane-potential.md), and the first-pain/second-pain delay is [1.5](01-05-cable-theory-conduction.md).
- **Forward:** [3.4](03-04-motor-systems.md) reuses conduction-velocity and pathway reasoning for reflex latency and needs proprioceptive afferents from this lesson; map plasticity here is the phenomenon that [4.1](04-01-plasticity-ltp-ltd.md) supplies a mechanism for and [4.2](04-02-memory-systems.md) places in a taxonomy.
- **Sideways:** the cochlea is a constant-Q bandpass filter bank, [signals-systems 4.4](../../signals-systems/lessons/04-04-filter-design-basics.md), and its relation to a true spectral decomposition is [fourier-analysis 2.1](../../fourier-analysis/lessons/02-01-series-to-fourier-transform.md); two-point discrimination is the sampling theorem on skin, [signals-systems 3.1](../../signals-systems/lessons/03-01-sampling-nyquist-shannon.md); tip-link gating is a two-state Boltzmann problem with mechanical work in the exponent, [biophysics 2.2](../../biophysics/lessons/02-02-boltzmann-two-state.md), on a membrane whose mechanics are [biophysics 3.5](../../biophysics/lessons/03-05-membrane-mechanics.md); thermoreception as a control problem rather than a sensory one is [physiology 4.2](../../physiology/lessons/04-02-thermoregulation.md).
