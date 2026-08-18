# Biochemistry · Lesson 3.6: A taste of photosynthesis

> ⏱ ~15 min · Module 3: Central Metabolism · Builds on: [3.4 Oxidative phosphorylation](03-04-oxidative-phosphorylation.md), [3.5 Gluconeogenesis & reciprocal regulation](03-05-gluconeogenesis-reciprocal-regulation.md) · Unlocks: [Module 4 — Lipids, membranes & information](04-01-lipids-fatty-acids-triacylglycerols-sterols.md)

## Why this matters

For five lessons you watched cells *burn* sugar: electrons cascade from glucose down to oxygen, the free energy pumps protons, and ATP synthase spins. Photosynthesis is that whole movie run backward. A plant uses sunlight to shove electrons *uphill* — from water all the way to a reducing agent strong enough to build sugar — and, almost as an afterthought, throws off a proton gradient that spins **the very same ATP synthase**. Once you see that the light reactions and oxidative phosphorylation are one machine pointed in opposite directions, the entire carbon-and-energy economy of the biosphere closes into a single loop. This is the closing lesson of Module 3, and the payoff for everything in it.

## The idea

Think of NADPH (and ATP) as a charged battery and glucose as the thing you build with the charge.

- **Respiration** ([3.4](03-04-oxidative-phosphorylation.md)) *drains* the battery: electrons roll downhill from glucose to $\ce{O2}$, and you capture the energy as ATP.
- **Photosynthesis** *charges* it: sunlight is the pump that forces electrons back up the hill. The light reactions spend photons to rip electrons off water and hoist them up to NADPH; the Calvin cycle then spends that NADPH (plus ATP) to weld $\ce{CO2}$ into sugar.

The genius — and the reason this lesson belongs at the end of a bioenergetics module — is *how* the light does its half. It does **not** invent a new energy trick. It uses the identical chemiosmotic move you already know: build a proton gradient across a membrane, then let ATP synthase harvest it. Respiration builds that gradient with energy from falling electrons; photosynthesis builds it with energy from sunlight and split water. Same turbine, different fuel.

## The formal version

Photosynthesis has two halves that meet at ATP and NADPH.

### 1. The light reactions (the Z-scheme)

Two photosystems sit in the thylakoid membrane and act in series. Follow one electron:

1. **Photosystem II (PSII)** absorbs a photon; the excited chlorophyll becomes a strong enough reductant to inject an electron into the chain. The "hole" it leaves is refilled by tearing electrons off water:
$$\ce{2H2O -> O2 + 4H+ + 4e-}$$
*In words: water is the electron source; molecular oxygen is a mere by-product, and the four protons are dumped into the thylakoid lumen.* This is the reaction that put $\ce{O2}$ in Earth's atmosphere.

2. The electron flows PSII $\to$ plastoquinone $\to$ **cytochrome $b_6f$** (which pumps more $\ce{H+}$ into the lumen) $\to$ plastocyanin $\to$ **Photosystem I (PSI)**.

3. **PSI** absorbs a *second* photon, re-energizing the now-tired electron enough to reduce $\ce{NADP+}$ on the stroma side:
$$\ce{NADP+ + H+ + 2e- -> NADPH}$$
*In words: NADPH is the reducing power — the high-energy electrons that the Calvin cycle will spend.*

Plot electron energy versus position and you get a lightning-bolt "**Z**": a small drop, a big photon-driven kick up at PSII, another drop, another kick up at PSI. Net, two photons carry each electron from water ($E^{\circ\prime} \approx +0.82\ \text{V}$, electrons held tightly) all the way up to $\ce{NADPH}$ ($E^{\circ\prime} \approx -0.32\ \text{V}$, electrons held loosely). Recall from [2.5](02-05-bioenergetics-atp-redox.md) that *more negative $E^{\circ\prime}$ means a stronger electron donor* — so the cell has manufactured a powerful reductant out of a terrible one, and the currency it paid was light.

### 2. Photophosphorylation (the unifying point)

Water-splitting dumps $\ce{H+}$ into the lumen; $b_6f$ pumps still more. The result is a **proton gradient across the thylakoid membrane** — lumen acidic, stroma basic. ATP synthase (the chloroplast version, $CF_1CF_0$) lets those protons flow back to the stroma and phosphorylates ADP:
$$\ce{ADP + Pi -> ATP}$$
*In words: this is chemiosmosis — bit-for-bit the mechanism of [3.4](03-04-oxidative-phosphorylation.md), just with the gradient built by light instead of by respiring electrons.* Same rotary enzyme, same proton-motive force, same $\sim 4\ \ce{H+}$ per ATP. **This is the one thing to remember from the whole lesson.**

### 3. The Calvin cycle (the "dark" reactions)

In the stroma, the enzyme **rubisco** fixes carbon: it clamps $\ce{CO2}$ onto the 5-carbon sugar RuBP, which splits into two 3-carbon molecules (3-phosphoglycerate). The cycle then *spends* the light reactions' output — ATP to phosphorylate, NADPH to reduce — turning that 3-PGA into the sugar G3P, and uses more ATP to regenerate RuBP so the cycle can turn again. The ledger to fix **3 $\ce{CO2}$ into one G3P** (a three-carbon sugar you can cash into glucose):
$$3\,\ce{CO2} + 9\,\text{ATP} + 6\,\text{NADPH} \longrightarrow 1\ \text{G3P} + 9\,\text{ADP} + 8\,\text{Pi} + 6\,\ce{NADP+}$$
*In words: building sugar is expensive — nine ATP and six NADPH per three carbons captured.* "Dark" is a misnomer: these steps don't use photons *directly*, but they starve without the ATP and NADPH the light just made.

### The direction contrast — the heart of the lesson

| | Respiration ([3.4](03-04-oxidative-phosphorylation.md)) | Light reactions |
|---|---|---|
| Electron flow | glucose $\to \ce{O2}$, **downhill** | water $\to$ NADPH, **uphill** |
| Driven by | free energy of falling electrons | absorbed light (two photons/e⁻) |

Same redox span ($\approx 1.14\ \text{V}$ between the $-0.32$ and $+0.82$ couples), traversed in opposite directions — respiration coasts down it and banks the energy; photosynthesis pays photons to climb it.

## Picture

![Side-by-side proton-motive-force comparison: a mitochondrial inner membrane (electrons from NADH flow downhill to O2, pumping protons that spin ATP synthase) and a chloroplast thylakoid membrane (light splits water and pushes electrons uphill to NADPH, protons accumulate in the lumen and spin the same ATP synthase). Blue marks the electron path, coral the protons, grey the membranes and structures.](assets/03-06-photosynthesis-taste-fig1.svg)

## Worked examples

**Example 1 — Tabulate the parallel; name each terminal acceptor.** Line up oxidative phosphorylation against the light reactions on four features. Work each cell from the definition rather than memorizing.

| Feature | Oxidative phosphorylation | Light reactions |
|---|---|---|
| **Electron source** | NADH / $\ce{FADH2}$ (from burning glucose) | $\ce{H2O}$ (split at PSII) |
| **Terminal electron acceptor** | $\ce{O2}$ (reduced to $\ce{H2O}$) | $\ce{NADP+}$ (reduced to NADPH) |
| **Where the H⁺ gradient sits** | across the inner mitochondrial membrane (H⁺ high in the intermembrane space) | across the thylakoid membrane (H⁺ high in the lumen) |
| **Product harvested** | ATP | ATP **and** NADPH (with $\ce{O2}$ as by-product) |

So the **terminal electron acceptor is $\ce{O2}$** in oxidative phosphorylation and **$\ce{NADP+}$** in the light reactions. The clean way to see it: whatever the electrons *end up on* is the terminal acceptor. Respiration parks them on oxygen (making water); photosynthesis parks them on $\ce{NADP+}$ (making reducing power). This is exactly the answer Boss Problem 3(c) is fishing for.

**Example 2 — Why building sugar is expensive: the Calvin cycle tally.** Count the ATP and NADPH to fix $3\,\ce{CO2}$ into one G3P, stage by stage.

- **Carboxylation:** $3\ \ce{CO2} + 3\ \text{RuBP} \xrightarrow{\text{rubisco}} 6\ \text{(3-PGA)}$. Cost so far: **0 ATP, 0 NADPH** — rubisco just clamps carbon on.
- **Reduction:** each of the 6 (3-PGA) is phosphorylated (1 ATP each) and then reduced (1 NADPH each) to give 6 G3P. Cost: $6\ \text{ATP} + 6\ \text{NADPH}$.
- **Regeneration:** 1 of the 6 G3P exits as product; the other 5 are reshuffled back into 3 RuBP, which costs **3 ATP**.

Totals:
$$\text{ATP} = 6 + 3 = 9, \qquad \text{NADPH} = 6.$$

So **9 ATP + 6 NADPH per G3P**, i.e. per three carbons captured. *Why so pricey?* Reduction is the opposite of oxidation: to pull $\ce{CO2}$ — carbon's most oxidized, lowest-energy form — up to sugar, you must *push electrons uphill and forge C–H bonds*, the exact reverse of the energy-releasing burn in glycolysis and the citric-acid cycle. It's the same lesson as [3.5](03-05-gluconeogenesis-reciprocal-regulation.md): making glucose from scratch costs more than you got tearing it down. Anabolism always runs at a markup, and that markup is ultimately paid by sunlight.

## Watch out

- **You might think the "dark reactions" happen at night.** They don't — "dark" only means *no photon is absorbed in these steps*. The Calvin cycle runs in daylight, right alongside the light reactions, because it is fed by the ATP and NADPH they produce; in the dark it quickly stalls.
- **You might think the $\ce{O2}$ you exhale-... er, that plants release comes from $\ce{CO2}$.** It comes from **water**, split at PSII. The carbon in $\ce{CO2}$ goes into sugar; the oxygen in $\ce{O2}$ came from $\ce{H2O}$. (Isotope-labeling experiments nailed this.)
- **You might think NADPH and NADH are interchangeable.** Same redox chemistry, but the cell keeps them as *separate pools*: NADH is the currency of catabolism (spent to make ATP), NADPH the currency of biosynthesis (spent to build molecules). The extra phosphate on NADPH is a molecular "for-building-only" tag enzymes read.

## One-liner

> Photosynthesis is oxidative phosphorylation in reverse: light pays to push electrons from water up to NADPH, and the proton gradient thrown off along the way spins the very same ATP synthase.

## Problems

**P1 (🟢)** In one sentence each, name (a) the electron *source* and (b) the terminal electron *acceptor* of the light reactions, and (c) state what happens to the oxygen atoms of the water that gets split.

**P2 (🟡)** A chloroplast fixes enough $\ce{CO2}$ to export **4 molecules of G3P** from the Calvin cycle. Using the per-G3P cost, how many ATP and NADPH did this require, and how many $\ce{CO2}$ were fixed? Then compute the ATP-to-NADPH ratio the cycle demands.

**P3 (🔴, connects to physical chemistry / thermodynamics)** The light reactions carry each electron from the $\ce{O2}/\ce{H2O}$ couple ($E^{\circ\prime} = +0.82\ \text{V}$) up to the $\ce{NADP+}/\text{NADPH}$ couple ($E^{\circ\prime} = -0.32\ \text{V}$). (a) Using $\Delta G^{\circ\prime} = -nF\,\Delta E^{\circ\prime}$ with $n = 2$ and $F = 96{,}485\ \text{C·mol}^{-1}$, show this uphill transfer is endergonic and find $\Delta G^{\circ\prime}$ per 2 electrons (in kJ/mol). (b) A red photon ($680\ \text{nm}$) carries about $176\ \text{kJ/mol}$. Roughly how many photons' worth of energy must at minimum cover this climb, and does the Z-scheme's "two photons per electron" supply enough for two electrons?

<details>
<summary>Solutions</summary>

**P1.** (a) The electron source is **water**, split at Photosystem II: $\ce{2H2O -> O2 + 4H+ + 4e-}$. (b) The terminal electron acceptor is **$\ce{NADP+}$**, reduced to NADPH at Photosystem I. (c) The oxygen atoms from water are released as **molecular $\ce{O2}$** — the by-product we breathe; they do *not* end up in sugar.

**P2.** One exported G3P costs 9 ATP + 6 NADPH and requires fixing 3 $\ce{CO2}$. Scale by 4:
$$\text{ATP} = 4 \times 9 = 36, \qquad \text{NADPH} = 4 \times 6 = 24, \qquad \ce{CO2} = 4 \times 3 = 12.$$
So **36 ATP, 24 NADPH, 12 $\ce{CO2}$**. The demanded ratio is
$$\frac{\text{ATP}}{\text{NADPH}} = \frac{36}{24} = \frac{9}{6} = 1.5.$$
*(Aside — this is why chloroplasts sometimes run "cyclic" electron flow around PSI: linear flow makes ATP and NADPH in a ratio slightly below the 1.5 the Calvin cycle needs, so the cell tops up the ATP without making extra NADPH.)*

**P3.** (a) The electron moves **from** the $+0.82\ \text{V}$ acceptor **to** the $-0.32\ \text{V}$ acceptor, so
$$\Delta E^{\circ\prime} = E^{\circ\prime}_{\text{final}} - E^{\circ\prime}_{\text{initial}} = (-0.32) - (+0.82) = -1.14\ \text{V}.$$
$$\Delta G^{\circ\prime} = -nF\,\Delta E^{\circ\prime} = -(2)(96{,}485)(-1.14) \approx +2.20 \times 10^{5}\ \text{J/mol} \approx +220\ \text{kJ/mol}.$$
The sign is **positive**, confirming the transfer is endergonic (uphill) — it cannot happen without an energy input. *(Note the sign logic from [2.5](02-05-bioenergetics-atp-redox.md): a *negative* $\Delta E^{\circ\prime}$ gives a *positive* $\Delta G$, i.e. non-spontaneous.)*

(b) Energy needed for two electrons is $\approx 220\ \text{kJ/mol}$; each photon supplies $\approx 176\ \text{kJ/mol}$, so at minimum
$$\frac{220}{176} \approx 1.25 \text{ photons.}$$
Thermodynamically just over one photon *would* cover two electrons — but the Z-scheme spends **two photons per electron**, i.e. **four photons per two electrons**, delivering $4 \times 176 = 704\ \text{kJ/mol}$. That is far more than the 220 kJ/mol minimum, and the surplus is exactly the point: the extra energy also pumps the protons that make ATP, and pays the steep "overpotential" tax of driving real, fast, irreversible electron transfer instead of a reversible ideal. Building order is never free, and photosynthesis buys it wholesale.

</details>

## Flashback

**From Lesson 3.4 (chemiosmosis & the P/O ratio):** A suspension of isolated mitochondria is fed enough substrate to deliver **6 NADH** and **2 $\ce{FADH2}$** to the electron-transport chain. (a) Using P/O ratios of 2.5 ATP/NADH and 1.5 ATP/$\ce{FADH2}$, how much ATP does oxidative phosphorylation make? (b) If each NADH drives the pumping of about 10 $\ce{H+}$ and ATP synthase spends about 4 $\ce{H+}$ per ATP, is the 2.5 ATP/NADH figure roughly consistent?

<details>
<summary>Solution</summary>

(a) Add the two contributions:
$$(6 \times 2.5) + (2 \times 1.5) = 15 + 3 = 18\ \text{ATP.}$$

(b) One NADH's 10 protons, spent 4 per ATP, buy
$$\frac{10}{4} = 2.5\ \text{ATP,}$$
which matches the P/O ratio exactly. This is the whole logic of chemiosmosis: the ATP yield is *not* a fixed stoichiometry from the chemistry of NADH — it's simply (protons pumped) ÷ (protons per ATP), a plumbing ratio. And it's precisely this ratio that photosynthesis reuses at the thylakoid: build the proton gradient however you like — respiring electrons *or* sunlight — and ATP synthase converts it at the same exchange rate.

</details>

## Connections

- **Backward:** the machine here *is* [3.4](03-04-oxidative-phosphorylation.md)'s — chemiosmosis, a proton-motive force, and a rotary ATP synthase — with the gradient built by light rather than by falling electrons; and the "sugar is expensive to build" ledger echoes [3.5](03-05-gluconeogenesis-reciprocal-regulation.md)'s gluconeogenesis. The uphill/downhill reasoning runs on the reduction potentials from [2.5](02-05-bioenergetics-atp-redox.md).
- **Forward:** NADPH reappears in [Module 4](04-01-lipids-fatty-acids-triacylglycerols-sterols.md) as the reductant for building fatty acids — the same "biosynthesis currency" logic, a different molecule being assembled. This lesson closes the energy story so the module can turn to what cells build *with* that energy.
- **Sideways (physical chemistry / thermodynamics):** the proton-motive force is an **electrochemical potential** — a free-energy difference stored in a concentration-plus-charge gradient — the same object you meet in [`physical-chemistry`](../../physical-chemistry/syllabus.md) electrochemistry and in [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md) as work extractable from a gradient. A chloroplast is a molecular-scale solar cell that stores its charge chemically instead of electrically.
