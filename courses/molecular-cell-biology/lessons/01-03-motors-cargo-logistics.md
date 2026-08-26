# Molecular & Cell Biology · Lesson 1.3: Motors & cargo logistics

> ⏱ ~15 min · Module 1: The Cell as a Built, Moving Machine · Builds on: [1.2](01-02-cytoskeleton-three-filaments.md), [biophysics 4.3 (motors as ratchets)](../../biophysics/lessons/04-03-molecular-motors-ratchet.md) · Unlocks: 1.4 (the endomembrane system)

## Why this matters

[biophysics 4.3](../../biophysics/lessons/04-03-molecular-motors-ratchet.md) answered *how* a motor takes a step: it rectifies thermal motion and pays with ATP. This lesson answers the cell-biological question that follows — **why bother?** Diffusion is free; motors cost roughly one ATP per 8 nanometres. A cell that uses motors is paying a real bill, and it only makes sense past a specific distance.

It also answers the question a geneticist actually faces in clinic. Most trafficking diseases are not mutations in the motor. They are mutations in the **adaptor** — the piece that decides *which* cargo this motor carries — and the phenotype is exquisitely selective as a result.

## The idea

**Direction comes from the track, not the motor's intentions.** A motor has a fixed chemical preference for one end of its filament. Put that together with the cell's filament layout and transport direction is completely determined:

| Motor | Track | Walks toward | In a typical animal cell that means |
|---|---|---|---|
| **Kinesin-1** (and most kinesins) | microtubule | plus end | outward, toward the periphery / down an axon |
| **Cytoplasmic dynein** | microtubule | minus end | inward, toward the centrosome and nucleus |
| **Myosin V** | actin | plus (barbed) end | outward through the cortex, to the membrane |
| **Myosin II** | actin | plus end | slides antiparallel filaments — contraction |

Because a cell's microtubules radiate from a central organizing centre with minus ends inward, "walk to the plus end" *is* "go outward." The motor knows nothing about geography; the polarity of the track from [1.2](01-02-cytoskeleton-three-filaments.md) does all the work.

**Cargo comes from adaptors.** The motor's tail does not bind cargo directly. It binds an adaptor, and the adaptor binds a specific membrane or complex. The same kinesin hauls mitochondria, synaptic-vesicle precursors, and mRNA granules — via three different adaptors. **This is the cell's addressing system**, and it is why one broken adaptor takes out one cargo and leaves the rest untouched.

**Handoff.** A vesicle heading for the cell surface rides a microtubule most of the way, then switches to a myosin and an actin filament for the last stretch through the dense cortex. Long-haul on the highway, local delivery on foot.

## The formal version

**Processivity and run length.** A **processive** motor stays attached for many steps. If a motor takes steps of size $d$ and detaches with probability $p_{\text{off}}$ per step, the number of steps per run is geometrically distributed with mean $1/p_{\text{off}}$, so the mean **run length** is

$$\boxed{\;\langle L\rangle = \frac{d}{p_{\text{off}}} = v\,\tau\;}$$

where $v$ is velocity and $\tau$ the mean attachment time. *In words: how far a motor gets is set by how long it hangs on, not by how fast it walks.*

**Duty ratio** $r$ is the fraction of its cycle a motor head spends bound to the track. Processive motors need $r$ near 1 for at least one of two heads to be bound at all times — kinesin-1 and myosin V both have $r \gtrsim 0.5$ per head and walk hand-over-hand. Myosin II has $r \approx 0.05$: a *single* myosin II would fall off immediately, which is fine, because muscle uses hundreds in parallel and only needs a few attached at any instant. **Processivity is required for single-molecule cargo hauling and unnecessary for ensemble force generation.**

**When is a motor worth it?** Compare the time to cover a distance $x$ by one-dimensional diffusion with the time to walk it:

$$t_{\text{diff}} = \frac{x^2}{2D}, \qquad t_{\text{motor}} = \frac{x}{v}.$$

Setting them equal gives the **crossover distance**

$$\boxed{\;x^{*} = \frac{2D}{v}\;}$$

*In words: below $x^*$, diffusion is already faster than any motor and paying ATP is waste; above it, diffusion loses — quadratically — and motors become not merely better but mandatory.* The quadratic is the whole story: doubling the distance doubles the walk time and **quadruples** the diffusion time.

## Picture

![A radial microtubule array from a central centrosome with minus ends inward and plus ends outward. Kinesin carries a vesicle outward along a microtubule while dynein carries an endosome inward on the same track. At the cell periphery the vesicle is handed off to myosin V on a cortical actin filament for the final approach to the plasma membrane. A side box shows the same kinesin motor bound to three different cargoes through three different adaptors.](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — processivity from a step size).** A single kinesin-1 walks with $d = 8$ nm steps at $v = 800$ nm/s, and single-molecule assays give a mean run length of $\langle L\rangle = 1.0\ \mu$m. Find (a) the mean number of steps per run, (b) the detachment probability per step, (c) the mean attachment time.

(a) $$N = \frac{\langle L\rangle}{d} = \frac{1000\ \mathrm{nm}}{8\ \mathrm{nm}} = \mathbf{125\ \text{steps}}.$$

(b) $$p_{\text{off}} = \frac{1}{N} = \frac{1}{125} = \mathbf{0.008}$$ — the motor survives 99.2 percent of its steps.

(c) $$\tau = \frac{\langle L\rangle}{v} = \frac{1000}{800} = \mathbf{1.25\ \mathrm{s}}.$$

**Sanity check on the energy bill.** One ATP per step is about $20\,k_BT$ ([biophysics 1.1](../../biophysics/lessons/01-01-kbt-ruler-scales.md)), so a 1 μm run costs $125 \times 20 = 2500\,k_BT \approx 6\times10^{-18}$ J. That is a rounding error for one vesicle — and a serious budget line for a neuron running millions of them continuously.

**Example 2 (why you'd care — when a cell has no choice).** A protein with $D = 20\ \mu\mathrm{m}^2/\mathrm{s}$ must reach the far end of a compartment. Kinesin moves at $v = 1\ \mu$m/s. Compare diffusion and transport for (a) a 10 μm cell body, (b) a 1 mm dendrite, (c) a 1 m sciatic-nerve axon.

Crossover distance first:

$$x^{*} = \frac{2D}{v} = \frac{2(20)}{1} = 40\ \mu\mathrm{m}.$$

| Distance | $t_{\text{diff}} = x^2/2D$ | $t_{\text{motor}} = x/v$ | Winner |
|---|---|---|---|
| 10 μm | $100/40 = 2.5$ s | 10 s | **diffusion**, 4× faster |
| 1 mm | $10^6/40 = 2.5\times10^4$ s $= 6.9$ h | $10^3$ s $= 17$ min | **motor**, 25× |
| 1 m | $10^{12}/40 = 2.5\times10^{10}$ s $\approx$ **790 years** | $10^6$ s $= 11.6$ days | **motor**, $2.5\times10^4$× |

**Read the table as a design rule.** Inside an ordinary 10–20 μm cell, diffusion beats transport and the cell largely lets things diffuse — which is why yeast gets by with far less motor machinery than a neuron. Past a few tens of microns the quadratic takes over and there is no contest. A neuron is not merely large; it is large enough that its logistics problem is *qualitatively* different, and that is why axonal transport defects cause neurodegeneration while the same mutation leaves compact cells nearly unharmed.

## Watch out

- **You might think a faster motor gets cargo further.** Run length is $v\tau$, and $\tau$ is set by detachment chemistry, not speed. A motor that doubles its speed and halves its attachment time goes exactly as far. Distance is bought with grip.
- **You might expect a mutation in kinesin to break one pathway.** It breaks *everything* kinesin carries. Cargo-selective defects come from adaptors — which is why the clinical genetics of trafficking disease points at adaptors far more often than motors.
- **You might read "dynein goes inward" as a property of dynein.** It is a property of dynein *plus* the radial microtubule array. In an epithelial cell whose microtubules run apical-to-basal, or in an axon where they all point outward, the same motor delivers to entirely different places.
- **You might assume every motor is processive.** Myosin II is not, deliberately — a low duty ratio is what lets hundreds of heads cycle on one filament without fighting each other. Processivity is a specialization for solo cargo work.

## One-liner

> A motor is a rectifier with a fixed end-preference; the cell gets an addressing system by choosing the track's polarity and an adaptor — and it only pays the ATP bill past about 40 microns, where diffusion's quadratic finally loses.

## Problems

**P1 (🟢)** Myosin V steps 36 nm at $v = 400$ nm/s with a mean run length of 1.8 μm. (a) How many steps per run? (b) What is $p_{\text{off}}$ per step? (c) How long does it stay attached?

**P2 (🟡)** A cell biologist finds that mitochondria stop moving outward in a mutant, while synaptic-vesicle precursors and mRNA granules still move normally on the same microtubules. (a) Is the defect more likely in kinesin, in an adaptor, or in tubulin? Justify from the selectivity alone. (b) Design a one-sentence experiment that would distinguish "adaptor cannot bind cargo" from "adaptor cannot bind motor."

**P3 (🔴, bridges to biophysics)** A vesicle is carried by $N$ kinesins working together against a viscous load. Each motor has a stall force of 6 pN, and the vesicle needs 4 pN to move at the required speed. (a) Ignoring the geometry of load-sharing, how many motors are minimally needed? (b) With $N$ motors each detaching at $p_{\text{off}} = 0.008$ per step and re-binding quickly, argue qualitatively why the cargo's *run length* grows much faster than linearly in $N$. (c) In this light, explain why a partial loss-of-function mutation reducing motor number per vesicle by half can produce a far worse than two-fold transport deficit.

<details>
<summary>Solutions</summary>

**P1 (a)** $$N = \frac{1800\ \mathrm{nm}}{36\ \mathrm{nm}} = \mathbf{50\ \text{steps}}.$$

**(b)** $$p_{\text{off}} = 1/50 = \mathbf{0.02}\ \text{per step}.$$

**(c)** $$\tau = \frac{1800}{400} = \mathbf{4.5\ \mathrm{s}}.$$

Note myosin V is *slower* than kinesin-1 (400 vs. 800 nm/s) but stays on **longer** (4.5 vs. 1.25 s), so it goes nearly twice as far — the run-length-is-grip point made concrete.

**P2 (a)** An **adaptor**. Kinesin loss would stop all three cargoes, since they share the motor; a tubulin defect would stop everything on microtubules including inward dynein traffic. Only a component downstream of the motor and specific to one cargo can produce a one-cargo phenotype — and that is exactly what an adaptor is. (For mitochondria the adaptor is the Miro–Milton/TRAK system, and mutations in it do cause selective mitochondrial-transport disease.)

**(b)** Co-immunoprecipitate from mutant cells and ask which partner is lost: pull down the adaptor and blot for kinesin *and* for a mitochondrial outer-membrane protein — losing the kinesin band means the motor-binding surface is broken; losing the mitochondrial band means the cargo-binding surface is.

**P3 (a)** $$N \ge \frac{4\ \mathrm{pN}}{6\ \mathrm{pN}} = 0.67 \;\Longrightarrow\; \mathbf{1\ \text{motor}}$$ is enough to move it at all. (Real cargoes carry several anyway — for the reason in (b).)

**(b)** The cargo only falls off the track when **every** motor is simultaneously detached. If detachment events were independent with per-motor probability $q$ of being off, the cargo-release probability goes roughly as $q^N$ — exponentially small in $N$. So run length grows **exponentially**, not linearly: one motor might manage 1 μm, two might manage tens of microns, three might effectively never let go over cellular distances. (The real calculation is subtler — a detached motor rebinds at a finite rate and the load redistributes onto the remaining motors, accelerating *their* detachment — but the qualitative multiplicative scaling survives.)

**(c)** Because the deficit compounds through an exponential rather than a linear relationship. Halving motors per vesicle from, say, 4 to 2 does not halve run length; it can cut it by an order of magnitude, and in a 1 mm process a vesicle whose run length drops from 100 μm to 10 μm now needs ten times as many detach-and-search cycles to arrive — each with a chance of being lost or degraded on the way. **This is the general shape of haploinsufficiency in transport: a 50 percent dosage cut lands on a steeply nonlinear response**, which is why so many axonal-transport diseases are dominant.

</details>

## Flashback

**From Lesson 1.2 (critical concentration):** An actin end has $k_{\text{on}} = 10\ \mu\mathrm{M}^{-1}\mathrm{s}^{-1}$ and $k_{\text{off}} = 2.0\ \mathrm{s}^{-1}$. (a) What is $C_c$ at this end? (b) The cell holds the free G-actin pool at $0.5\ \mu$M. Is this end growing or shrinking, and at what rate in subunits per second? (c) A capping protein binds this end and blocks both association and dissociation. What happens to the *other* end of the same filament, given that the free pool is now supplied by only one end's turnover?

<details>
<summary>Solution</summary>

**(a)** $$C_c = \frac{k_{\text{off}}}{k_{\text{on}}} = \frac{2.0}{10} = 0.20\ \mu\mathrm{M}.$$

**(b)** $[\text{S}] = 0.5\ \mu\mathrm{M} > C_c$, so it **grows**:

$$\frac{dn}{dt} = (10)(0.5) - 2.0 = \mathbf{+3.0\ \text{subunits/s}}.$$

**(c)** Capping freezes this end entirely. The filament can now only change length at the other end. If that end's critical concentration is above the free pool it shrinks and the filament is progressively lost; more importantly, capping *many* plus ends raises the free G-actin pool (subunits that would have been consumed are not), which then pushes the remaining uncapped ends to grow faster. **This is the actual mechanism cells use to control where actin grows** — not by changing the total amount of actin, but by capping most ends so the free pool concentrates growth at the few ends left open.

</details>

## Connections

- **Backward:** filament polarity from [1.2](01-02-cytoskeleton-three-filaments.md) is the sole source of directionality here; the stepping mechanism itself is [biophysics 4.3](../../biophysics/lessons/04-03-molecular-motors-ratchet.md).
- **Forward:** [1.4](01-04-endomembrane-trafficking.md) supplies the cargo — vesicles with coats and sorting signals — that these motors carry, completing the delivery system.
- **Sideways:** the crossover $x^{*} = 2D/v$ is the same Péclet-number comparison of advection against diffusion that governs [transport-phenomena 4.1](../../transport-phenomena/syllabus.md) and mass transfer generally; a cell deciding whether to use motors is solving the identical problem as a reactor engineer deciding whether to stir.
