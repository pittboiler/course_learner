# Biochemistry — Syllabus

> Chemistry · Tier 2 · ~21 lessons · Prereqs: [organic-chemistry](../organic-chemistry/syllabus.md) · Roadmap id: `biochemistry`

## Goal

Learn to read life as chemistry: how a one-dimensional sequence of amino acids folds into a machine, how enzymes bend reaction rates by ten orders of magnitude, and how a cell extracts and spends energy without ever leaving thermodynamic bookkeeping behind. You will trace a glucose molecule from your plate to the ATP that powers a heartbeat, quantify enzyme kinetics and inhibition, and follow information from gene to protein. This is the *molecule-to-metabolism* backbone; it deliberately skips lab technique and cloning depth (that's `molecular-cell-biology`) and structural-biology methods.

## Dangerous Checklist

When you finish, you can:

- [ ] Titrate an amino acid: identify its pKa's, sketch the titration curve, and compute its net charge and isoelectric point (pI) at any pH via Henderson–Hasselbalch
- [ ] Classify the 20 amino acids by side-chain chemistry and predict how a substitution changes a protein's stability or function
- [ ] Describe the four levels of protein structure and explain how the hydrophobic effect and weak interactions drive folding
- [ ] Explain myoglobin vs. hemoglobin oxygen-binding curves in terms of cooperativity, allostery, and the Bohr effect
- [ ] Derive the Michaelis–Menten equation and extract $K_m$, $V_{\max}$, $k_{cat}$, and $k_{cat}/K_m$ from kinetic data
- [ ] Diagnose competitive, uncompetitive, and mixed inhibition from kinetic data and explain each mechanistically
- [ ] Explain how allosteric regulation and covalent modification switch enzymes on and off inside a pathway
- [ ] Use $\Delta G$, $\Delta G^{\circ\prime}$, coupled reactions, and reduction potentials to explain why ATP hydrolysis drives unfavorable steps
- [ ] Trace glucose through glycolysis, the citric-acid cycle, and oxidative phosphorylation and tally the ATP, NADH, and FADH₂ at each stage
- [ ] Explain chemiosmosis and the proton-motive force, and show why oxidative phosphorylation and the light reactions of photosynthesis share one mechanism
- [ ] Compute the ATP yield of complete fatty-acid oxidation and contrast fat vs. carbohydrate as cellular fuel
- [ ] Draw the DNA double helix and outline how replication, transcription, and translation move information from gene to protein

## Modules

### Module 1: Proteins — Structure & Function

From the chemistry of the medium and the monomers to the folded, functioning machine — and why a sequence is a fold is a function.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Water, pH & buffers: the medium of life | Compute pH and buffer behavior with Henderson–Hasselbalch | Hydrogen bonding, hydrophobic effect, $pK_a$, Henderson–Hasselbalch, buffering |
| 1.2 | Amino acids & the peptide bond | Titrate an amino acid and find its charge and pI at any pH | 20 side chains, zwitterions, titration curves, pI, planar peptide bond |
| 1.3 | The four levels of protein structure | Read primary → quaternary and place structure on a Ramachandran plot | α-helix, β-sheet, motifs/domains, Ramachandran angles, subunits |
| 1.4 | The folding problem | Explain what drives folding and what goes wrong when it fails | Anfinsen, hydrophobic collapse, folding funnel, chaperones, misfolding disease |
| 1.5 | Oxygen binding: myoglobin & hemoglobin | Interpret binding curves and explain cooperativity and allostery | Fractional saturation, Hill coefficient, T/R states, Bohr effect, 2,3-BPG |

**Boss problem 1:** Histidine has $pK_a$ values 1.8 (α-COOH), 6.0 (imidazole), and 9.2 (α-NH₃⁺). (a) Compute its isoelectric point pI. (b) Using Henderson–Hasselbalch, find the fraction of imidazole side chains protonated at blood pH 7.4. (c) The imidazole of His is the residue behind hemoglobin's Bohr effect — explain in one or two sentences why a side-chain $pK_a$ near physiological pH makes it uniquely able to sense pH and modulate O₂ affinity.

### Module 2: Enzymes & Bioenergetics

How enzymes make slow reactions fast, how we measure and inhibit them, and the thermodynamic ledger every reaction in the cell must obey.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Enzymes & catalytic strategy | Explain how enzymes stabilize the transition state to accelerate a reaction | Activation energy, transition-state stabilization, acid–base/covalent/metal-ion catalysis, chymotrypsin |
| 2.2 | Michaelis–Menten kinetics | Derive the rate law and extract $K_m$, $V_{\max}$, $k_{cat}$ from data | Steady-state assumption, $K_m$, $V_{\max}$, $k_{cat}/K_m$, Lineweaver–Burk |
| 2.3 | Enzyme inhibition | Diagnose inhibition type from kinetic data | Competitive, uncompetitive, mixed inhibition, $K_i$, irreversible inhibitors as drugs |
| 2.4 | Allosteric regulation & metabolic control | Explain how effectors and modification switch pathway flux | Cooperativity, MWC model, feedback inhibition, phosphorylation, committed step |
| 2.5 | Bioenergetics: ΔG, ATP & redox carriers | Use coupled reactions and reduction potentials to score spontaneity | $\Delta G$ vs. $\Delta G^{\circ\prime}$, energy coupling, phosphoryl-transfer potential, NAD⁺/FAD, $E^{\circ\prime}$ |

**Boss problem 2:** An enzyme has $V_{\max}=100\ \mu\text{mol/min}$ and $K_m = 2$ mM. (a) Compute $v$ at $[S]=0.5$ mM and $[S]=8$ mM. (b) A competitive inhibitor raises the apparent $K_m$ to 6 mM with $V_{\max}$ unchanged; find $\alpha = 1+[I]/K_i$ and the new $v$ at $[S]=8$ mM. (c) The reaction $A\to B$ has $\Delta G^{\circ\prime}=+15$ kJ/mol; show that coupling it to ATP hydrolysis ($\Delta G^{\circ\prime}=-30.5$ kJ/mol) makes it spontaneous, and compute the coupled equilibrium ratio $[B]/[A]$ at 37 °C ($R=8.314$ J·mol⁻¹·K⁻¹).

### Module 3: Central Metabolism

The main energy highway: burn glucose to CO₂, harvest the electrons, spin ATP synthase — then run the whole thing backward to store and to build.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Carbohydrates: structure & storage | Read sugar structures and the bonds that link them into fuel stores | Monosaccharides, anomers, glycosidic bonds, glycogen, starch |
| 3.2 | Glycolysis | Trace glucose to pyruvate and account for the ATP and NADH | Investment/payoff phases, substrate-level phosphorylation, PFK-1 control |
| 3.3 | The citric-acid cycle | Follow acetyl-CoA to CO₂ and tally the reduced carriers | Pyruvate dehydrogenase, 8 steps, NADH/FADH₂/GTP yield, anaplerosis |
| 3.4 | Oxidative phosphorylation | Explain how the electron-transport chain and ATP synthase make most of the ATP | Complexes I–IV, proton-motive force, chemiosmosis, ATP synthase, P/O ratio |
| 3.5 | Gluconeogenesis & reciprocal regulation | Explain how the cell makes glucose and avoids a futile cycle | Bypass reactions, Cori cycle, fructose-2,6-bisphosphate, reciprocal control |
| 3.6 | A taste of photosynthesis | Show how light builds sugar using the same chemiosmotic trick in reverse | Light reactions, photophosphorylation, NADPH, Calvin cycle, rubisco |

**Boss problem 3:** Trace one glucose through aerobic catabolism. (a) Tally ATP, NADH, and FADH₂ from glycolysis, the two pyruvate-dehydrogenase runs, and two turns of the citric-acid cycle. (b) Using 2.5 ATP/NADH and 1.5 ATP/FADH₂ (glycolytic NADH counted as NADH), compute the total ATP yield net of the 2 ATP invested. (c) Photosynthesis builds glucose in reverse — explain via the proton-motive force why oxidative phosphorylation and the light reactions run on the same mechanism, and name the terminal electron acceptor in each.

### Module 4: Lipids, Membranes & the Flow of Information

The remaining biomolecules: fats as fuel and as walls, and the nucleic acids that carry the blueprint from one generation and one molecule to the next.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Lipids: fatty acids, triacylglycerols & sterols | Classify lipids and explain why fat is such dense fuel | Saturation, triacylglycerols, phospholipids, cholesterol, energy density |
| 4.2 | Fatty-acid oxidation | Compute the ATP yield of burning a fatty acid | Activation, carnitine shuttle, β-oxidation spiral, ketone bodies |
| 4.3 | Membranes & membrane transport | Distinguish passive, facilitated, and active transport by their energetics | Lipid bilayer, fluidity, channels, carriers, pumps, secondary active transport |
| 4.4 | Nucleic acids: DNA & RNA structure | Draw the double helix and explain base pairing and RNA's roles | Nucleotides, Watson–Crick pairing, antiparallel strands, major/minor groove, RNA types |
| 4.5 | The flow of genetic information (a taste) | Outline how replication, transcription, and translation move information | Semiconservative replication, RNA polymerase, the genetic code, ribosome, tRNA |

**Boss problem 4:** (a) Compute the net ATP yield from complete oxidation of palmitate (C16, saturated), using 2.5 ATP/NADH, 1.5 ATP/FADH₂, and 10 ATP per acetyl-CoA, minus 2 ATP for activation. (b) A Na⁺/K⁺ pump maintains a 10-fold Na⁺ gradient; compute the free energy (kJ/mol) to move Na⁺ up this gradient at 37 °C, ignoring membrane potential ($R=8.314$). (c) In one sentence each, state what replication, transcription, and translation copy *from* and produce.

## Sources of truth

- *Lehninger Principles of Biochemistry* (Nelson & Cox) — primary reference for conventions, notation, and rigor level.
- *Biochemistry* (Berg, Tymoczko & Stryer) — pathway logic and clinical framing.
- *Biochemistry* (Voet & Voet) — enzyme mechanism and quantitative depth when a derivation needs it.
