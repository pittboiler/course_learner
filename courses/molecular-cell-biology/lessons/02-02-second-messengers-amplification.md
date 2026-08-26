# Molecular & Cell Biology · Lesson 2.2: Second messengers & amplification

> ⏱ ~15 min · Module 2: Signalling — How a Cell Decides · Builds on: [2.1](02-01-receptors-reading-outside-world.md), [biochemistry 2.2 (enzyme kinetics)](../../biochemistry/lessons/02-02-michaelis-menten-kinetics.md) · Unlocks: 2.3 (kinase cascades)

## Why this matters

A rod cell in your retina responds to **one photon**. A liver cell mobilizes millions of glucose molecules from a handful of adrenaline receptors. Neither is possible without gain, and the gain has to come from somewhere specific.

It comes from catalysis. Every step in a signalling pathway where an *enzyme* is activated rather than a single molecule modified is a step where one input makes many outputs — and the pathway's total amplification is the product of those steps. This lesson makes the arithmetic explicit, because "the signal is amplified" is a slogan until you can put numbers on it.

## The idea

**A second messenger is a small, diffusible molecule the cell makes in bulk on demand.** The ligand (the *first* messenger) never enters. Instead the receptor switches on an enzyme that manufactures thousands of copies of something small — cyclic AMP, IP₃, diacylglycerol, Ca²⁺ — which spreads through the cytosol and binds many downstream targets.

Three properties make this the right design:

1. **It amplifies**, because an enzyme running for a second makes many product molecules from one activation event.
2. **It broadcasts**, because a small molecule diffuses fast ($D \sim 300\ \mu\mathrm{m}^2/\mathrm{s}$ for cAMP — the whole cell in well under a second). One receptor at the membrane can reach targets anywhere.
3. **It is erasable**, because a dedicated enzyme destroys it (phosphodiesterase for cAMP; pumps for Ca²⁺). A messenger you can delete is a messenger you can pulse.

**The GPCR route, in one paragraph.** Ligand binding changes the receptor's shape; the receptor becomes a **GEF** for a heterotrimeric G protein, loading GTP onto its α subunit. Gα-GTP separates from Gβγ and activates an effector enzyme. For **Gₛ** that effector is adenylyl cyclase, which converts ATP into cAMP. cAMP binds the regulatory subunits of **protein kinase A**, releasing its catalytic subunits, which then phosphorylate targets. The switch shuts off when Gα hydrolyses its GTP — the same GEF/GAP timer you met for Rab in [1.4](01-04-endomembrane-trafficking.md).

**The other main branch: Gq, PLC, and calcium.** Gq activates phospholipase C, which cleaves the membrane lipid PIP₂ into two messengers at once — **IP₃**, which diffuses to the ER and opens Ca²⁺ channels, and **DAG**, which stays in the membrane and activates protein kinase C. One cleavage, two messengers, two different compartments.

**Calcium deserves its own note.** The cell holds cytosolic Ca²⁺ at ~100 nM against 1–2 mM outside and in the ER — a 10,000-fold gradient, maintained by pumps that are among the cell's larger energy expenses. That gradient is stored signal. Opening a channel produces a hundredfold concentration jump in milliseconds, with no synthesis required. **Calcium is the fastest messenger because it is pre-made and merely released.**

## The formal version

**Amplification at one catalytic step.** If an activated enzyme has turnover number $k_{\text{cat}}$ (product molecules per enzyme per second) and stays active for a mean lifetime $\tau$, then one activation event yields

$$G = k_{\text{cat}}\,\tau$$

*In words: gain at a step is "how fast it works" times "how long it lasts."* Note that both factors are under cellular control — a GAP that shortens $\tau$ cuts gain just as effectively as inhibiting the enzyme.

**Total pathway gain multiplies.** For a cascade of $N$ catalytic steps,

$$\boxed{\;G_{\text{total}} = \prod_{i=1}^{N} k_{\text{cat},i}\,\tau_i\;}$$

*In words: gains compound, so three modest steps of 100× each beat one heroic step by a factor of ten thousand.* This is why signalling pathways are built as chains of enzymes rather than as one large amplifier — and it is also why they are so easy to break, since a single step's failure divides the whole product.

**Which steps are catalytic (and which are not).** This is the part that is easy to get wrong:

| Step | Catalytic? | Why |
|---|---|---|
| Ligand binds receptor | **no** | one ligand, one receptor |
| Receptor activates G proteins | **yes** | one receptor is a GEF for many G proteins while occupied |
| Gα activates adenylyl cyclase | **no** (roughly 1:1) | one Gα binds one cyclase |
| Adenylyl cyclase makes cAMP | **yes** | thousands of cAMP per enzyme |
| cAMP binds PKA | **no** | 4 cAMP per PKA, and it *costs* four-fold |
| PKA phosphorylates substrates | **yes** | many substrates per kinase |

**Two of the six steps supply nearly all the gain.** Counting steps is not the same as counting amplification; you must ask at each step whether one input molecule produces *many* outputs.

**Termination sets the pulse shape.** cAMP concentration obeys

$$\frac{d[\mathrm{cAMP}]}{dt} = V_{\text{synth}}(t) - k_{\text{deg}}[\mathrm{cAMP}],$$

so after synthesis stops, cAMP decays with time constant $1/k_{\text{deg}}$. *In words: the phosphodiesterase, not the receptor, sets how quickly the signal ends.* Caffeine inhibits phosphodiesterase — it does not create a signal, it stops one from being erased.

## Picture

![A GPCR cascade drawn as a widening funnel: one ligand binds one receptor; the receptor loads GTP onto many G proteins; each Gs-alpha activates one adenylyl cyclase; each cyclase makes thousands of cyclic AMP molecules; cAMP releases PKA catalytic subunits, each of which phosphorylates many substrates. Numbers at each level show where the gain enters, and a parallel branch shows Gq activating phospholipase C to cleave PIP2 into IP3, which releases calcium from the ER, and DAG, which activates PKC at the membrane.](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — put numbers on the funnel).** One adrenaline molecule binds a β-adrenergic receptor. The receptor stays occupied for 10 s and activates G proteins at 5 per second. Each Gα activates one adenylyl cyclase, which stays on for 5 s making cAMP at $k_{\text{cat}} = 200\ \mathrm{s}^{-1}$. Four cAMP are needed to release one PKA catalytic subunit, which then phosphorylates substrates at $50\ \mathrm{s}^{-1}$ for 20 s. Compute the number of phosphorylated substrate molecules per adrenaline molecule.

Step by step:

$$\text{G proteins activated} = 5\ \mathrm{s^{-1}} \times 10\ \mathrm{s} = 50.$$
$$\text{cyclases activated} = 50 \quad (1{:}1).$$
$$\text{cAMP made} = 50 \times 200\ \mathrm{s^{-1}} \times 5\ \mathrm{s} = 5.0\times10^{4}.$$
$$\text{PKA catalytic subunits released} = \frac{5.0\times10^{4}}{4} = 1.25\times10^{4}.$$
$$\text{substrates phosphorylated} = 1.25\times10^{4} \times 50\ \mathrm{s^{-1}} \times 20\ \mathrm{s} = \mathbf{1.25\times10^{7}}.$$

**Twelve million molecules from one.** And notice where it came from: the three catalytic steps contributed $50 \times 1000 \times 1000$, while the cAMP-to-PKA step *divided* by four. **Amplification is not spread evenly through a pathway** — it is concentrated in the steps where an enzyme is switched on.

**Example 2 (why you'd care — cholera, and what happens when you break the off switch).** Cholera toxin chemically modifies Gsα so that it can no longer hydrolyse its bound GTP. Predict the consequence quantitatively and physiologically.

Gα's lifetime $\tau$ is normally set by its intrinsic GTPase, roughly 10 s. Blocking hydrolysis takes $\tau \to \infty$ — in practice, until the protein is degraded, hours. Using the gain formula at that one step:

$$\frac{G_{\text{toxin}}}{G_{\text{normal}}} = \frac{\tau_{\text{toxin}}}{\tau_{\text{normal}}} \approx \frac{10^4\ \mathrm{s}}{10\ \mathrm{s}} = 10^3 .$$

A thousandfold increase in gain at a single step, with **no ligand present at all** — the pathway is on because its timer is broken, not because anything is signalling.

In intestinal epithelium, sustained PKA activity phosphorylates the CFTR chloride channel and locks it open. Cl⁻ pours into the gut lumen, Na⁺ follows electrically, water follows osmotically. The result is the massive secretory diarrhoea of cholera — litres per hour — and death from dehydration rather than from any tissue damage.

**The therapeutic reading is the beautiful part.** Nothing can be done about the locked-on Gα. But the gut's Na⁺–glucose symporter ([biochemistry 4.3](../../biochemistry/lessons/04-03-membranes-membrane-transport.md)) is untouched by the toxin, and pulling Na⁺ in pulls water back with it. **Oral rehydration therapy — salt plus glucose in water — works by exploiting a transporter the toxin cannot reach**, and has saved tens of millions of lives without addressing the signalling lesion at all.

## Watch out

- **You might count pathway steps as amplification steps.** Only steps where one activated molecule generates *many* products amplify. Binding steps, and stoichiometric steps like four cAMP per PKA, do not — and the latter actively reduces gain.
- **You might think a stronger signal means more messenger forever.** Gain depends on $\tau$ as much as on rate, and $\tau$ is aggressively controlled — by GAPs, phosphodiesterases, and receptor internalization. Most pathologies of signalling are broken *timers*, not broken *switches*.
- **You might treat calcium as though it were synthesized.** It is released from stores and pumped back. The cell spends ATP maintaining the gradient in advance so that signalling itself needs no synthesis — the same pre-loaded-machinery trick as the SNAREs in [1.4](01-04-endomembrane-trafficking.md).
- **You might expect cAMP to fill the cell uniformly.** In many cells it does not: A-kinase anchoring proteins tether PKA next to specific substrates, and local phosphodiesterases carve the cytosol into microdomains. Broadcasting is the default, not the rule.

## One-liner

> Gain enters a pathway only where an enzyme is switched on, and it enters as rate times lifetime — which is why cholera, a disease that breaks one GTPase timer, produces a thousandfold signal with no signal present.

## Problems

**P1 (🟢)** A receptor activates 20 G proteins; each activates one cyclase running at $150\ \mathrm{s^{-1}}$ for 4 s; 4 cAMP release one PKA subunit; each subunit phosphorylates $40\ \mathrm{s^{-1}}$ for 10 s. How many phosphorylated substrates result from one ligand?

**P2 (🟡)** Caffeine inhibits phosphodiesterase. (a) Using $d[\mathrm{cAMP}]/dt = V_{\text{synth}} - k_{\text{deg}}[\mathrm{cAMP}]$, find the steady-state cAMP concentration. (b) If caffeine halves $k_{\text{deg}}$, what happens to steady-state cAMP, and to the *time constant* of the response? (c) Explain in one sentence why caffeine potentiates a hormone's effect but produces little effect on its own in a cell with no basal cyclase activity.

**P3 (🔴, bridges to physiology and to 2.4)** A rod photoreceptor detects a single photon. One activated rhodopsin activates ~500 transducin (a G protein) molecules; each activates one phosphodiesterase; each PDE hydrolyses cGMP at $\sim10^3\ \mathrm{s^{-1}}$ for ~1 s; falling cGMP closes cation channels, and closing ~300 channels each carrying $\sim10^3$ ions per second for 1 s produces a detectable voltage change. (a) Estimate the total number of cGMP molecules hydrolysed per photon. (b) Estimate the number of ions blocked from entering. (c) The rod's response to a single photon is reproducible in amplitude to within about 20 percent, which is far more reproducible than a single stochastic molecular event has any right to be. Propose a mechanism, and name the general design principle it illustrates.

<details>
<summary>Solutions</summary>

**P1**

$$\text{cAMP} = 20 \times 150\ \mathrm{s^{-1}} \times 4\ \mathrm{s} = 1.2\times10^{4}.$$
$$\text{PKA subunits} = \frac{1.2\times10^4}{4} = 3.0\times10^{3}.$$
$$\text{substrates} = 3.0\times10^3 \times 40\ \mathrm{s^{-1}} \times 10\ \mathrm{s} = \mathbf{1.2\times10^{6}}.$$

**P2 (a)** Set $d[\mathrm{cAMP}]/dt = 0$:

$$[\mathrm{cAMP}]_{ss} = \frac{V_{\text{synth}}}{k_{\text{deg}}}.$$

**(b)** Halving $k_{\text{deg}}$ **doubles** steady-state cAMP. The time constant $\tau = 1/k_{\text{deg}}$ also **doubles**, so the response is not only larger but slower to rise *and* slower to decay. This is the general signature of inhibiting a degradation step: amplitude and duration move together, which is different from increasing synthesis (bigger, same speed of decay).

**(c)** Because steady-state cAMP is proportional to $V_{\text{synth}}$: doubling a number that is already near zero still gives near zero. Caffeine multiplies whatever signal exists; it does not add one. **Inhibiting an eraser is a gain control, not an input.**

**P3 (a)** $$500\ \text{PDE} \times 10^{3}\ \mathrm{s^{-1}} \times 1\ \mathrm{s} = \mathbf{5\times10^{5}\ \text{cGMP hydrolysed}}.$$

**(b)** $$300\ \text{channels} \times 10^{3}\ \frac{\text{ions}}{\mathrm{s}} \times 1\ \mathrm{s} = \mathbf{3\times10^{5}\ \text{ions blocked}}.$$

Roughly $10^5$–$10^6$ at each stage — the amplification is front-loaded in the transducin and PDE steps and then converted, near 1:1, into a current change. (Note the total gain from one photon to $3\times10^5$ ions is about $3\times10^5$, comparable to the cAMP cascade of Example 1 but achieved in under a second.)

**(c)** The single-photon response is reproducible because rhodopsin's **shut-off is multistep**: it must be phosphorylated at several sites by rhodopsin kinase before arrestin can cap it. Each phosphorylation is stochastic, but the *sum* of several independent random steps has a much smaller relative variance than any one of them — averaging $n$ steps reduces the coefficient of variation by $\sqrt{n}$. With ~6 phosphorylation sites, a single molecule's lifetime becomes about $1/\sqrt{6} \approx 0.4$ times as variable as a single-step decay would be, and further feedback tightens it.

**The design principle: to make a single stochastic event reproducible, terminate it with many small steps rather than one big one.** The same trick appears wherever a cell needs low-noise timing — multistep ubiquitination before degradation ([3.1](03-01-cell-cycle-engine-irreversibility.md)), multisite phosphorylation before a cell-cycle transition. Averaging is the cheapest noise-reduction the cell has.

</details>

## Flashback

**From Lesson 2.1 (occupancy and the 81-fold rule):** A GPCR binds its hormone with $K_d = 8$ nM. (a) What fraction of receptors are occupied at 2 nM? (b) The cell's maximal cAMP response is reached when only 5 percent of receptors are occupied. What ligand concentration achieves that, and what does the comparison with $K_d$ tell you about this system? (c) Name the term for the phenomenon in (b).

<details>
<summary>Solution</summary>

**(a)** $$\theta = \frac{2}{8+2} = \mathbf{0.20}.$$

**(b)** $$[\mathrm{L}] = K_d\frac{\theta}{1-\theta} = 8\left(\frac{0.05}{0.95}\right) = \mathbf{0.42\ \mathrm{nM}}.$$

That is about **19-fold below $K_d$** — the cell gives its full response at a ligand concentration where nineteen-twentieths of its receptors are empty. This is the signature of large downstream amplification: the cascade saturates long before binding does, so $\mathrm{EC}_{50} \ll K_d$.

**(c)** **Spare receptors** (receptor reserve). The practical consequence, as in the myasthenia example of 2.1, is that the cell can lose most of its receptors before its maximal response falls at all.

</details>

## Connections

- **Backward:** the GEF/GAP timer from [1.4](01-04-endomembrane-trafficking.md) is exactly the Gα switch; $k_{\text{cat}}$ is from [biochemistry 2.2](../../biochemistry/lessons/02-02-michaelis-menten-kinetics.md).
- **Forward:** [2.3](02-03-kinase-cascades-switch.md) shows that a cascade does more than amplify — it *sharpens*; [2.4](02-04-circuits-feedback-adaptation.md) explains why a sustained ligand gives a transient messenger.
- **Sideways:** the Ca²⁺ gradient as stored signal is the same electrochemical-gradient-as-battery idea as the proton-motive force in [biochemistry 3.4](../../biochemistry/lessons/03-04-oxidative-phosphorylation.md) and the membrane potential in [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md).
