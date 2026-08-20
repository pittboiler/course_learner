# Biochemistry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Biochemistry is four ledgers kept at once: **charge** (which groups are
protonated at this pH), **rate** (how fast an enzyme turns over and what an
inhibitor does to it), **energy** (is this step downhill, and who pays if it
isn't), and **carriers** (how many ATP, NADH, and FADH₂ came out). This card
holds the tables those ledgers are balanced against — amino-acid pKa's,
inhibition patterns, reduction potentials, and the ATP bookkeeping of every
pathway in the course.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathrm{p}K_a$ | the pH at which a titratable group is exactly half deprotonated | [1.1](lessons/01-01-water-ph-buffers.md) |
| $K_a$, $K_w$ | acid dissociation constant; the ion product of water, $10^{-14}$ at 25 °C | [1.1](lessons/01-01-water-ph-buffers.md) |
| pI | isoelectric point — the pH where a molecule's **net** charge is zero | [1.2](lessons/01-02-amino-acids-peptide-bond.md) |
| $R$ (in a structure) | the variable side chain hanging off an α-carbon | [1.2](lessons/01-02-amino-acids-peptide-bond.md) |
| $\varphi,\ \psi$ | the two rotatable backbone dihedrals flanking each α-carbon | [1.3](lessons/01-03-four-levels-protein-structure.md) |
| $\omega$ | the peptide-bond dihedral — frozen near $180^\circ$ (*trans*) | [1.3](lessons/01-03-four-levels-protein-structure.md) |
| $T_m$ | melting temperature — where half the protein (or DNA duplex) has come apart | [1.4](lessons/01-04-the-folding-problem.md) |
| $Y$ | fractional saturation — the fraction of binding sites occupied, 0 to 1 | [1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md) |
| $p$, $P_{50}$ | oxygen partial pressure (torr), and the pressure giving half-saturation | [1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md) |
| $n$, $n_H$ | Hill coefficient — steepness of cooperativity, **not** a count of sites | [1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md) |
| T, R | the tense (low-affinity, "off") and relaxed (high-affinity, "on") conformations | [1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md) |
| $\Delta G^{\ddagger}$ | activation free energy — the height of the hill from reactant to transition state | [2.1](lessons/02-01-enzymes-catalytic-strategy.md) |
| $K_m$ | Michaelis constant — the substrate concentration giving half of $V_{\max}$ | [2.2](lessons/02-02-michaelis-menten-kinetics.md) |
| $V_{\max}$, $k_{cat}$ | saturated top speed of your *sample*; turnover per *enzyme molecule* per second | [2.2](lessons/02-02-michaelis-menten-kinetics.md) |
| $k_{cat}/K_m$ | catalytic efficiency — how well the enzyme performs at low, physiological substrate | [2.2](lessons/02-02-michaelis-menten-kinetics.md) |
| $[\text{E}]_T$, ES | total enzyme pipetted in; the enzyme–substrate complex | [2.2](lessons/02-02-michaelis-menten-kinetics.md) |
| $K_i$, $K_i'$ | dissociation constants of inhibitor from free E, and from the ES complex | [2.3](lessons/02-03-enzyme-inhibition.md) |
| $\alpha$, $\alpha'$ | inhibition factors $1+[I]/K_i$ and $1+[I]/K_i'$ — how hard the inhibitor bites at each site | [2.3](lessons/02-03-enzyme-inhibition.md) |
| $K_{0.5}$ | the allosteric analog of $K_m$ — the switch's set-point | [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md) |
| $L$ | the T/R equilibrium constant with no ligand bound; large $L$ means T dominates | [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md) |
| $\Delta G^{\circ\prime}$ | free-energy change at the **biochemical** standard state (pH 7, water 55.5 M) | [2.5](lessons/02-05-bioenergetics-atp-redox.md) |
| $K_{\text{eq}}'$ | equilibrium constant at that same primed standard state | [2.5](lessons/02-05-bioenergetics-atp-redox.md) |
| $E^{\circ\prime}$ | standard reduction potential (V, pH 7) — how hard a couple pulls on electrons | [2.5](lessons/02-05-bioenergetics-atp-redox.md) |
| $F$ | Faraday constant, $96{,}485$ C/mol — charge on a mole of electrons | [2.5](lessons/02-05-bioenergetics-atp-redox.md) |
| $\alpha$ / $\beta$ (sugars) | which face the anomeric hydroxyl sits on: down (*trans*) or up (*cis*) | [3.1](lessons/03-01-carbohydrates-structure-storage.md) |
| $\alpha(1\to4)$, $\beta(1\to4)$ | a glycosidic bond named by anomeric configuration and the two carbons joined | [3.1](lessons/03-01-carbohydrates-structure-storage.md) |
| $\Delta p$, $\Delta\psi$ | proton-motive force; the electrical (voltage) part of it | [3.4](lessons/03-04-oxidative-phosphorylation.md) |
| P/O | ATP made per electron pair reaching oxygen | [3.4](lessons/03-04-oxidative-phosphorylation.md) |
| X:Y, $\Delta^9$ | fatty-acid shorthand: X carbons, Y double bonds, positioned at C9–C10 | [4.1](lessons/04-01-lipids-fatty-acids-triacylglycerols-sterols.md) |
| $z$ | the charge on a transported ion ($+1$ for $\ce{Na+}$) | [4.3](lessons/04-03-membranes-membrane-transport.md) |
| 5′, 3′ | the two chemically distinct ends of a nucleic-acid strand; sequences are written 5′→3′ | [4.4](lessons/04-04-nucleic-acids-dna-rna-structure.md) |

## Definitions

### Hydrogen bond

A weak, directional "sticky" link between an H bound to O or N and a lone pair on
a nearby O or N — about 20 kJ/mol, a tenth of a covalent bond. Water, base pairs,
and protein backbones all lean on it in bulk.

*Introduced:* [1.1](lessons/01-01-water-ph-buffers.md)

### Hydrophobic effect

Water squeezes greasy groups together not because they attract each other, but to
free the ordered water caged around them. It is **entropy-driven** and it is the
largest single force in protein folding and membrane assembly.

$$\Delta G = \Delta H - T\,\Delta S, \qquad \Delta H \approx 0,\ \Delta S_{\text{solvent}} > 0 \;\Rightarrow\; \Delta G < 0$$

*Introduced:* [1.1](lessons/01-01-water-ph-buffers.md)

### Buffer

A reservoir holding a weak acid *and* its conjugate base at once, so added
$\ce{H+}$ is mopped up and added $\ce{OH-}$ is fed. **Buffer capacity** is
maximal at $\text{pH} = \mathrm{p}K_a$ (both partners abundant) and the buffer is
useful only within roughly $\mathrm{p}K_a \pm 1$.

*Introduced:* [1.1](lessons/01-01-water-ph-buffers.md)

### Zwitterion

The net-neutral form of an amino acid in water: doubly charged
($\ce{-COO^-}$ and $\ce{-NH3^+}$), summing to zero. "Net charge zero" is not
"no charges."

*Introduced:* [1.2](lessons/01-02-amino-acids-peptide-bond.md)

### Isoelectric point

The pH at which the molecule's average charge is zero — where it stops migrating
in an electric field. Average the two $\mathrm{p}K_a$'s **flanking the neutral
species**, which for a triprotic amino acid are two *adjacent* values (the lowest
pair for an acidic residue, the highest pair for a basic one).

$$\text{pI} = \tfrac{1}{2}\left(\mathrm{p}K_a^{(1)} + \mathrm{p}K_a^{(2)}\right)$$

*Introduced:* [1.2](lessons/01-02-amino-acids-peptide-bond.md)

### Peptide bond

The amide linking residue $n$ to residue $n{+}1$, formed by condensation (water
expelled). Resonance gives it ~40 percent double-bond character, so it is
**planar, non-rotating, and *trans*** — a rigid tile, ~1.33 Å C–N.

*Introduced:* [1.2](lessons/01-02-amino-acids-peptide-bond.md)

### Four levels of protein structure

**Primary** = the sequence (N-terminus → C-terminus). **Secondary** = local
backbone shapes (α-helix, β-sheet) held by *backbone* hydrogen bonds.
**Tertiary** = the whole chain's fold, set by *side-chain* interactions and the
buried hydrophobic core. **Quaternary** = several folded chains assembled into
one complex.

*Introduced:* [1.3](lessons/01-03-four-levels-protein-structure.md)

### Ramachandran plot

The map of $\varphi$ against $\psi$ for every residue. Because $\omega$ is frozen
and neighboring atoms are hard spheres, most of the map is sterically forbidden —
the few allowed islands *are* the α-helix and β-sheet. Glycine, having no
$\ce{C_\beta}$, reaches far more of it.

*Introduced:* [1.3](lessons/01-03-four-levels-protein-structure.md)

### Anfinsen's thermodynamic hypothesis

Everything needed to specify a fold is written in the sequence: denatured
ribonuclease refolds to full activity on its own. The native state is the
free-energy minimum the chain reaches under physiological conditions — and it
holds by only $-20$ to $-60$ kJ/mol, i.e. proteins are **marginally stable**.

*Introduced:* [1.4](lessons/01-04-the-folding-problem.md)

### Folding funnel

Folding is not a search. The energy landscape is biased: nearly every step that
buries more oil or forms a native contact is slightly downhill, so the chain
rolls to the native basin in under a second instead of the $10^{17}$ universe-ages
a blind search would need (**Levinthal's paradox**). Side dimples are **kinetic
traps**.

*Introduced:* [1.4](lessons/01-04-the-folding-problem.md)

### Chaperone

A protein (Hsp70, GroEL/GroES) that binds exposed hydrophobic patches on unfolded
chains in ATP-driven cycles. It raises the *yield and speed* of folding by
preventing aggregation — it does **not** dictate the native shape.

*Introduced:* [1.4](lessons/01-04-the-folding-problem.md)

### Amyloid

An alternative fold: fibers of stacked intermolecular β-sheets ("cross-β") that
can sit *lower* in free energy than the native state but are walled off by a high
kinetic barrier. **Prions** are the templating, self-propagating case.

*Introduced:* [1.4](lessons/01-04-the-folding-problem.md)

### Fractional saturation

How full the binding protein is, from 0 to 1. One independent site gives a
hyperbola; cooperating sites give a sigmoid.

$$Y = \frac{p}{P_{50}+p} \quad (\text{one site}), \qquad Y = \frac{p^{\,n}}{P_{50}^{\,n}+p^{\,n}} \quad (\text{Hill})$$

*Introduced:* [1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md)

### Hill coefficient

A measure of *cooperativity*, not of site count. $n=1$ means independent sites
(back to the hyperbola); $n>1$ means binding helps binding. Hemoglobin has 4
sites but $n \approx 2.8$; $n$ can never exceed the number of sites.

*Introduced:* [1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md)

### Bohr effect

Acid and $\ce{CO2}$ stabilize hemoglobin's T state, lowering affinity and
**right-shifting** the curve (larger $P_{50}$) — so hard-working, acidic tissue
pulls more oxygen off. 2,3-BPG does the same by wedging into the T-state central
cavity.

$$\ce{HbO2 + H+ <=> HbH+ + O2}$$

*Introduced:* [1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md)

### Transition-state stabilization

An enzyme's pocket fits the strained **transition state** better than it fits
substrate or product, pulling the hilltop down. It lowers $\Delta G^{\ddagger}$
equally in both directions, so it changes only the rate — never $\Delta G$ or
$K_{\text{eq}}$.

*Introduced:* [2.1](lessons/02-01-enzymes-catalytic-strategy.md)

### Michaelis constant

The substrate concentration at half-maximal velocity. Call it **apparent
affinity**, not affinity: it equals the true $K_d = k_{-1}/k_1$ only when
$k_2 \ll k_{-1}$, and otherwise $K_m \ge K_d$.

$$K_m = \frac{k_{-1}+k_2}{k_1}$$

*Introduced:* [2.2](lessons/02-02-michaelis-menten-kinetics.md)

### Turnover number

Product molecules made per enzyme molecule per second when saturated — $V_{\max}$
stripped of how much enzyme you happened to add.

$$k_{cat} = \frac{V_{\max}}{[\text{E}]_T}$$

*Introduced:* [2.2](lessons/02-02-michaelis-menten-kinetics.md)

### Catalytic efficiency

The effective second-order rate constant for E meeting S, and the right number to
compare enzymes at *low* substrate. Its ceiling is the diffusion limit,
$10^{8}$–$10^{9}\ \text{M}^{-1}\text{s}^{-1}$; enzymes at that ceiling are
"catalytically perfect."

$$v \approx \frac{k_{cat}}{K_m}[\text{E}][\text{S}] \quad \text{when } [\text{S}] \ll K_m$$

*Introduced:* [2.2](lessons/02-02-michaelis-menten-kinetics.md)

### Steady-state assumption

The ES complex is made and destroyed so fast that its concentration barely
drifts, $d[\text{ES}]/dt = 0$. This (Briggs–Haldane) is what makes the
Michaelis–Menten derivation work without assuming rapid equilibrium.

*Introduced:* [2.2](lessons/02-02-michaelis-menten-kinetics.md)

### Inhibition constant

$K_i$ is the *dissociation* constant of the inhibitor from free enzyme (and
$K_i'$ from the ES complex), so a **small $K_i$ means tight binding and strong
inhibition**. It enters the rate law only through $\alpha$ and $\alpha'$, and
only for *reversible* inhibitors.

*Introduced:* [2.3](lessons/02-03-enzyme-inhibition.md)

### Allosteric regulation

A molecule binds a site *away from* the active site and shifts the whole-molecule
T↔R equilibrium: activators prefer R (switch on), inhibitors prefer T (switch
off). Substrate acting on its own sites is **homotropic**; a separate effector is
**heterotropic**.

*Introduced:* [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md)

### MWC model

The concerted (Monod–Wyman–Changeux) picture: an oligomer exists in two
conformations with $L = [\text{T}_0]/[\text{R}_0]$, all subunits switch
*together*, and substrate binds R harder ($K_R < K_T$). Cooperativity emerges
without the subunits talking chemically. A **K-system** effector moves $K_{0.5}$
and leaves $V_{\max}$ alone.

*Introduced:* [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md)

### Committed step

The first irreversible reaction whose product is destined for this pathway and no
other — the cheapest place to put the master valve, because nothing is built that
must then be dumped. PFK-1 in glycolysis; ATCase in pyrimidine synthesis.

*Introduced:* [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md)

### Feedback inhibition

The pathway's end product acts as a heterotropic inhibitor of the committed step
— the warehouse telling the front door to stop letting raw material in.

*Introduced:* [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md)

### Covalent modification

A **kinase** transfers ATP's γ-phosphate onto a Ser, Thr, or Tyr hydroxyl; a
**phosphatase** hydrolyzes it back off. A slower, hormone-driven control layer
that can amplify through cascades. Phosphorylation activates some enzymes and
inhibits others — that opposition is how reciprocal control is built.

*Introduced:* [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md)

### Biochemical standard state

The prime in $\Delta G^{\circ\prime}$ and $E^{\circ\prime}$ means "conditions a
cell could survive": $[\ce{H+}] = 10^{-7}$ M (pH 7), $[\ce{H2O}] = 55.5$ M, and
$\ce{Mg^2+}$ fixed — all folded into the constant, so protons and water never
appear in $Q$. The physicist's unprimed $\Delta G^{\circ}$ uses 1 M for
everything, including pH 0.

*Introduced:* [2.5](lessons/02-05-bioenergetics-atp-redox.md)

### Energy coupling

Two reactions that share a chemical intermediate add their free energies, so a
steep ATP hydrolysis can drag a modest uphill step downhill. The shared
intermediate is not optional — reactions merely happening nearby do not couple.

$$\Delta G^{\circ\prime}_{\text{sum}} = \Delta G_1^{\circ\prime} + \Delta G_2^{\circ\prime}$$

*Introduced:* [2.5](lessons/02-05-bioenergetics-atp-redox.md)

### Phosphoryl-transfer potential

How much energy a compound's phosphate release gives. ATP sits deliberately
mid-ladder: donors above it (PEP, 1,3-BPG) can recharge ADP→ATP, and ATP can
phosphorylate acceptors below it (glucose→G-6-P).

*Introduced:* [2.5](lessons/02-05-bioenergetics-atp-redox.md)

### Standard reduction potential

A couple's pull on electrons, in volts at pH 7 — more positive means a stronger
grab. Electrons fall toward the more positive couple, and the voltage drop
converts straight into free energy.

$$\Delta E^{\circ\prime} = E^{\circ\prime}_{\text{acceptor}} - E^{\circ\prime}_{\text{donor}}, \qquad \Delta G^{\circ\prime} = -nF\,\Delta E^{\circ\prime}$$

*Introduced:* [2.5](lessons/02-05-bioenergetics-atp-redox.md)

### Anomeric carbon

The former carbonyl carbon after the sugar's ring closes — the only ring carbon
bonded to *two* oxygens. Its new hydroxyl can point down ($\alpha$) or up
($\beta$), and that choice is what a glycosidic bond freezes in place.

*Introduced:* [3.1](lessons/03-01-carbohydrates-structure-storage.md)

### Mutarotation

A free sugar's ring pops open to the aldehyde and re-closes, re-rolling the
anomeric face each time, until it reaches a fixed ratio (glucose: ~36 percent
$\alpha$, ~64 percent $\beta$). A carbon locked into a glycosidic bond no longer
mutarotates or reduces.

*Introduced:* [3.1](lessons/03-01-carbohydrates-structure-storage.md)

### Glycosidic bond

The anomeric hydroxyl of one sugar condensed onto a specific hydroxyl of the next,
expelling water. Named by configuration and the carbons joined —
$\alpha(1\to4)$, $\alpha(1\to6)$, $\beta(1\to4)$.

*Introduced:* [3.1](lessons/03-01-carbohydrates-structure-storage.md)

### Substrate-level phosphorylation

A phosphoryl group handed *directly* from a high-transfer-potential substrate
(1,3-BPG, PEP, succinyl-CoA) onto ADP or GDP. No membrane, no oxygen, no electron
chain.

*Introduced:* [3.2](lessons/03-02-glycolysis.md)

### Anaplerotic reaction

A "filling-up" reaction that replenishes a cycle intermediate siphoned off for
biosynthesis — the cycle is **amphibolic** (burns fuel *and* supplies building
blocks), so draining citrate or α-ketoglutarate would otherwise stall it.

$$\ce{Pyruvate + CO2 + ATP ->[\text{pyruvate carboxylase}] Oxaloacetate + ADP + Pi}$$

*Introduced:* [3.3](lessons/03-03-citric-acid-cycle.md)

### Chemiosmosis

Oxidation and phosphorylation are **not** chemically linked — they share only a
proton gradient. Electron transport pumps $\ce{H+}$ out; ATP synthase lets them
back in and is spun by the flow. Burning fuel charges a battery; ATP synthase
drains it.

*Introduced:* [3.4](lessons/03-04-oxidative-phosphorylation.md)

### Proton-motive force

The stored "pressure" pushing protons back in: an electrical term (membrane
voltage, dominant in mitochondria) plus a chemical pH term.

$$\Delta p = \Delta\psi - \frac{2.3RT}{F}\,\Delta\text{pH}$$

*Introduced:* [3.4](lessons/03-04-oxidative-phosphorylation.md)

### P/O ratio

ATP made per electron pair reaching oxygen — just (protons pumped) ÷ (protons per
ATP), a plumbing ratio, not a fixed chemical stoichiometry.

$$\frac{10\ \ce{H+}}{4\ \ce{H+}/\text{ATP}} = 2.5\ \text{ATP per NADH}, \qquad \frac{6}{4} = 1.5\ \text{ATP per FADH}_2$$

*Introduced:* [3.4](lessons/03-04-oxidative-phosphorylation.md)

### Uncoupler

A molecule (2,4-dinitrophenol; thermogenin/UCP1 in brown fat) that carries
protons back across the membrane *around* ATP synthase. Electron flow and oxygen
consumption **rise**, ATP yield collapses, and the energy leaves as heat.

*Introduced:* [3.4](lessons/03-04-oxidative-phosphorylation.md)

### Futile cycle

Two opposing pathways running at once, so a substrate is built and immediately
destroyed with no product but heat. **Reciprocal regulation** — one signal
turning one direction on and the other off — is what forbids it.

*Introduced:* [3.5](lessons/03-05-gluconeogenesis-reciprocal-regulation.md)

### Cori cycle

Muscle runs glycolysis anaerobically and exports lactate; liver takes it up and
spends 6 ATP rebuilding glucose. The loop nets $-4$ ATP overall — it buys
*timing and location*, giving muscle fast ATP and billing the liver later.

*Introduced:* [3.5](lessons/03-05-gluconeogenesis-reciprocal-regulation.md)

### Light reactions (Z-scheme)

Two photosystems in series: PSII splits water for electrons, and PSI re-energizes
each electron with a second photon so it can reduce $\ce{NADP+}$. Plot electron
energy against position and you get a lightning-bolt Z — two photons carry each
electron from $+0.82$ V up to $-0.32$ V.

$$\ce{2H2O -> O2 + 4H+ + 4e-}, \qquad \ce{NADP+ + H+ + 2e- -> NADPH}$$

*Introduced:* [3.6](lessons/03-06-photosynthesis-taste.md)

### Photophosphorylation

Water-splitting and the cytochrome $b_6f$ pump acidify the thylakoid lumen, and
the chloroplast ATP synthase harvests the gradient. Identical machinery to
oxidative phosphorylation, with light rather than falling electrons building the
gradient.

*Introduced:* [3.6](lessons/03-06-photosynthesis-taste.md)

### Amphipathic

Having both a water-loving and a water-fleeing region in one molecule — a
phospholipid's charged head plus two greasy tails. This one property is why
bilayers self-assemble; a triacylglycerol, having no polar head, cannot form one.

*Introduced:* [4.1](lessons/04-01-lipids-fatty-acids-triacylglycerols-sterols.md)

### Beta-oxidation

The four-step spiral — *oxidize, hydrate, oxidize, cleave* — that peels two
carbons off a fatty acyl-CoA per turn, banking one FADH₂, one NADH, and one
acetyl-CoA each time. Its real job is manufacturing acetyl-CoA for the citric-acid
cycle.

$$\text{turns} = \frac{n}{2}-1, \qquad \text{acetyl-CoA} = \frac{n}{2}$$

*Introduced:* [4.2](lessons/04-02-fatty-acid-oxidation.md)

### Ketone bodies

Acetoacetate and β-hydroxybutyrate — water-soluble fuels the liver bottles when
acetyl-CoA is produced faster than the cycle can burn it (fasting, low-carb diet,
untreated diabetes, scarce oxaloacetate) and exports to brain and muscle.

*Introduced:* [4.2](lessons/04-02-fatty-acid-oxidation.md)

### Passive vs. active transport

Passive transport (simple or facilitated diffusion) runs downhill,
$\Delta G < 0$, and a channel or carrier changes only the *rate*. Active
transport forces the uphill move, $\Delta G > 0$, and must couple to ATP or to
another gradient.

*Introduced:* [4.3](lessons/04-03-membranes-membrane-transport.md)

### Secondary active transport

One ion falls down its gradient and drags a second solute uphill —
**symport** (same direction, e.g. the $\ce{Na+}$–glucose transporter) or
**antiport** (opposite). No ATP at this step; the ATP was spent earlier by the
pump that built the gradient.

*Introduced:* [4.3](lessons/04-03-membranes-membrane-transport.md)

### Watson–Crick base pairing

Each rung joins one purine to one pyrimidine, so every rung is the same width, and
the pairing is specific — which is why either strand dictates the other.

$$\text{A}=\text{T}\ (2\ \text{H-bonds}), \qquad \text{G}\equiv\text{C}\ (3\ \text{H-bonds})$$

*Introduced:* [4.4](lessons/04-04-nucleic-acids-dna-rna-structure.md)

### Antiparallel strands

A phosphodiester backbone runs 5′→3′, giving each strand a direction; the two
strands of a duplex lie head-to-tail. So a complement written left-to-right is the
3′→5′ strand — reverse it to report the conventional 5′→3′ sequence.

*Introduced:* [4.4](lessons/04-04-nucleic-acids-dna-rna-structure.md)

### Central dogma

Sequence information flows one way: DNA is copied to DNA (replication), read out
into RNA (transcription), and decoded into protein (translation). Retroviruses
run RNA → DNA; the dogma is the default, not a law.

*Introduced:* [4.5](lessons/04-05-flow-of-genetic-information.md)

### Semiconservative replication

Each strand templates a new partner, so every daughter duplex carries **one old
and one new strand**. Polymerase adds only to a 3′ end, so one strand is built
continuously (leading) and the other in backstitched pieces (lagging).

*Introduced:* [4.5](lessons/04-05-flow-of-genetic-information.md)

### Degeneracy of the genetic code

64 codons for 20 amino acids plus stop, so most amino acids have synonyms —
usually differing only in the **third** base. The code stays *unambiguous* (one
codon, one meaning); degeneracy is redundancy, not sloppiness, and it is what
lets many single-base changes be silent.

*Introduced:* [4.5](lessons/04-05-flow-of-genetic-information.md)

## Formulas and rules

### Acid–base bookkeeping

Everything about charge in this course is Henderson–Hasselbalch pointed at one
group at a time.

| Job | Relation |
|---|---|
| pH from a buffer's composition | $\text{pH} = \mathrm{p}K_a + \log_{10}\dfrac{[\ce{A-}]}{[\ce{HA}]}$ |
| fraction of a group **deprotonated** | $f = \dfrac{1}{1+10^{\,(\mathrm{p}K_a-\text{pH})}}$ |
| fraction of a group **protonated** | $f = \dfrac{1}{1+10^{\,(\text{pH}-\mathrm{p}K_a)}}$ |
| half-equivalence | $[\ce{A-}]=[\ce{HA}] \Rightarrow \text{pH}=\mathrm{p}K_a$ (max buffer capacity) |
| tenfold excess | base: $\mathrm{p}K_a+1$; acid: $\mathrm{p}K_a-1$ (edges of the useful range) |
| net charge | sum each group: $\ce{-COO^-}$ is $-1$ above its $\mathrm{p}K_a$; an N group is $+1$ *below* its $\mathrm{p}K_a$ |
| isoelectric point | mean of the two $\mathrm{p}K_a$'s flanking the net-zero species |

*From* [1.1](lessons/01-01-water-ph-buffers.md), [1.2](lessons/01-02-amino-acids-peptide-bond.md)

### The 20 amino acids

Classes follow the five bins of 1.2. Side-chain $\mathrm{p}K_a$ is blank when the
side chain is not titratable; pI is then just the mean of the two backbone
values. Values are the standard (Lehninger) set — the ones a problem will hand
you, or expect you to look up here.

| Amino acid | 3-letter | 1-letter | Class | α-COOH | α-$\ce{NH3+}$ | Side chain | pI |
|---|---|---|---|---|---|---|---|
| Glycine | Gly | G | nonpolar (smallest, most flexible) | 2.34 | 9.60 | — | 5.97 |
| Alanine | Ala | A | nonpolar | 2.34 | 9.69 | — | 6.01 |
| Valine | Val | V | nonpolar (branched) | 2.32 | 9.62 | — | 5.97 |
| Leucine | Leu | L | nonpolar (branched) | 2.36 | 9.60 | — | 5.98 |
| Isoleucine | Ile | I | nonpolar (branched) | 2.36 | 9.68 | — | 6.02 |
| Methionine | Met | M | nonpolar (thioether) | 2.28 | 9.21 | — | 5.74 |
| Phenylalanine | Phe | F | nonpolar, aromatic | 1.83 | 9.13 | — | 5.48 |
| Tryptophan | Trp | W | nonpolar, aromatic | 2.38 | 9.39 | — | 5.89 |
| Proline | Pro | P | nonpolar; ring locks $\varphi$, no amide H | 1.99 | 10.96 | — | 6.48 |
| Serine | Ser | S | polar uncharged (–OH) | 2.21 | 9.15 | — | 5.68 |
| Threonine | Thr | T | polar uncharged (–OH) | 2.11 | 9.62 | — | 5.87 |
| Cysteine | Cys | C | polar uncharged; forms disulfides | 1.96 | 10.28 | 8.18 | 5.07 |
| Tyrosine | Tyr | Y | polar uncharged, aromatic | 2.20 | 9.11 | 10.07 | 5.66 |
| Asparagine | Asn | N | polar uncharged (amide) | 2.02 | 8.80 | — | 5.41 |
| Glutamine | Gln | Q | polar uncharged (amide) | 2.17 | 9.13 | — | 5.65 |
| Aspartate | Asp | D | acidic | 1.88 | 9.60 | 3.65 | 2.77 |
| Glutamate | Glu | E | acidic | 2.19 | 9.67 | 4.25 | 3.22 |
| Lysine | Lys | K | basic | 2.18 | 8.95 | 10.53 | 9.74 |
| Arginine | Arg | R | basic (guanidinium) | 2.17 | 9.04 | 12.48 | 10.76 |
| Histidine | His | H | basic (imidazole) | 1.82 | 9.17 | 6.00 | 7.59 |

At pH 7.4: Asp and Glu carry $-1$, Lys and Arg carry $+1$, and **histidine is the
only side chain titrating in the physiological range** — which is why it is the
workhorse of acid–base catalysis and the pH sensor behind the Bohr effect. The
three special cases are Gly (no $\ce{C_\beta}$), Pro (ring, helix breaker), and
Cys ($\ce{-S-S-}$ staples).

*From* [1.2](lessons/01-02-amino-acids-peptide-bond.md), [1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md), [2.1](lessons/02-01-enzymes-catalytic-strategy.md)

### Backbone geometry

| Structure | $\varphi$ | $\psi$ | Held together by |
|---|---|---|---|
| Right-handed α-helix | $\approx -60^\circ$ | $\approx -45^\circ$ | backbone $\ce{C=O}$ of $i$ to $\ce{N-H}$ of $i{+}4$ |
| β-sheet (extended) | $\approx -120^\circ$ | $\approx +120^\circ$ | backbone H-bonds *between* strands |
| Left-handed α-helix | $\approx +60^\circ$ | $\approx +45^\circ$ | essentially glycine-only (positive $\varphi$ clashes $\ce{C_\beta}$) |
| Peptide bond | $\omega \approx 180^\circ$ (*trans*), frozen | | resonance, ~85 kJ/mol to twist |

Read the signs: negative/negative → α; negative $\varphi$, positive $\psi$ → β;
positive/positive → the rare left-handed corner.

*From* [1.3](lessons/01-03-four-levels-protein-structure.md)

### Binding curves and the Hill plot

$$Y = \frac{p^{\,n}}{P_{50}^{\,n}+p^{\,n}} \qquad\Longleftrightarrow\qquad \log_{10}\!\frac{Y}{1-Y} = n\log_{10}p - n\log_{10}P_{50}$$

The Hill plot is a straight line of **slope $n$** crossing zero at
$p = P_{50}$ — two data points give both constants. Reference values: myoglobin
$P_{50} \approx 2.8$ torr with $n=1$; hemoglobin $P_{50} \approx 26$ torr with
$n \approx 2.8$; lungs are ~100 torr and resting tissue ~26 torr.

*From* [1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md)

### Enzyme kinetics

| Quantity | Relation |
|---|---|
| Michaelis–Menten | $v = \dfrac{V_{\max}[\text{S}]}{K_m+[\text{S}]}$ |
| Lineweaver–Burk | $\dfrac{1}{v} = \dfrac{K_m}{V_{\max}}\cdot\dfrac{1}{[\text{S}]} + \dfrac{1}{V_{\max}}$ (slope $K_m/V_{\max}$, $y$-int $1/V_{\max}$, $x$-int $-1/K_m$) |
| Substrate needed for a fraction $f$ of $V_{\max}$ | $[\text{S}] = \dfrac{f}{1-f}K_m$ (90 percent costs $9K_m$; 99 percent costs $99K_m$) |
| Turnover / efficiency | $k_{cat}=V_{\max}/[\text{E}]_T$; compare enzymes by $k_{cat}/K_m$ |
| Cooperative (allosteric) rate law | $v = \dfrac{V_{\max}[\text{S}]^{n_H}}{K_{0.5}^{\,n_H}+[\text{S}]^{n_H}}$ |
| Rate vs. barrier (Eyring) | $\dfrac{k_{\text{cat}}}{k_{\text{uncat}}} = e^{\,\Delta\Delta G^{\ddagger}/RT}$ — at 310 K, **5.9 kJ/mol buys one factor of ten** |

*From* [2.1](lessons/02-01-enzymes-catalytic-strategy.md), [2.2](lessons/02-02-michaelis-menten-kinetics.md), [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md)

### Inhibition, side by side

One rate law with two knobs, $\alpha = 1+[I]/K_i$ (bites free E) and
$\alpha' = 1+[I]/K_i'$ (bites ES):

$$v = \frac{V_{\max}[\text{S}]}{\alpha K_m + \alpha'[\text{S}]}, \qquad V_{\max}^{\text{app}} = \frac{V_{\max}}{\alpha'}, \qquad K_m^{\text{app}} = \frac{\alpha}{\alpha'}K_m$$

| Type | Binds | $\alpha$ | $\alpha'$ | $V_{\max}^{\text{app}}$ | $K_m^{\text{app}}$ | Lineweaver–Burk signature |
|---|---|---|---|---|---|---|
| Competitive | E only | $>1$ | $1$ | unchanged | **up** ($\alpha K_m$) | lines meet on the $y$-axis; inhibited line steeper |
| Uncompetitive | ES only | $1$ | $>1$ | **down** | **down** (both $\div\,\alpha'$) | **parallel** lines, intercept raised |
| Mixed | E and ES | $>1$ | $>1$ | **down** | up if $\alpha>\alpha'$, down if $\alpha<\alpha'$ | both slope and intercept rise; cross left of the $y$-axis |
| Noncompetitive ($K_i=K_i'$) | E and ES equally | $=\alpha'$ | $=\alpha$ | **down** | unchanged | lines cross exactly **on** the $x$-axis |

The $y$-intercept reports $\alpha'$ (the ES effect); the slope carries $\alpha$.
**Irreversible** inhibitors (aspirin on cyclooxygenase, penicillin on
transpeptidase) obey none of this — they remove enzyme molecules permanently,
lowering $V_{\max}$ no matter how much substrate you add.

*From* [2.3](lessons/02-03-enzyme-inhibition.md)

### Thermodynamic ledger

| Job | Relation |
|---|---|
| actual vs. standard | $\Delta G = \Delta G^{\circ\prime} + RT\ln Q$ |
| standard vs. equilibrium | $\Delta G^{\circ\prime} = -RT\ln K_{\text{eq}}'$ |
| coupled steps | free energies **add** (shared intermediate required) |
| volts to energy | $\Delta G^{\circ\prime} = -nF\,\Delta E^{\circ\prime}$, $\ \Delta E^{\circ\prime} = E^{\circ\prime}_{\text{acceptor}} - E^{\circ\prime}_{\text{donor}}$ |
| useful constants | $R = 8.314\ \text{J·mol}^{-1}\text{K}^{-1}$; at 310 K, $RT = 2.577$ kJ/mol; $F = 96{,}485$ C/mol |

*From* [2.5](lessons/02-05-bioenergetics-atp-redox.md)

### Phosphoryl-transfer potential ladder

$\Delta G^{\circ\prime}$ of hydrolysis, kJ/mol — donors above ATP recharge it,
acceptors below it get phosphorylated by it.

| Compound | $\Delta G^{\circ\prime}$ |
|---|---|
| Phosphoenolpyruvate (PEP) | $-61.9$ |
| 1,3-bisphosphoglycerate | $-49.3$ |
| **ATP → ADP + Pi** | $\mathbf{-30.5}$ (GTP is equivalent) |
| Glucose-6-phosphate | $-13.8$ |

ATP → AMP + PPi breaks **two** phosphoanhydride bonds and counts as **2 ATP
equivalents**.

*From* [2.5](lessons/02-05-bioenergetics-atp-redox.md), [4.2](lessons/04-02-fatty-acid-oxidation.md)

### Standard reduction potentials

Electrons fall toward the more positive couple; the further the fall, the more
energy released.

| Couple | $E^{\circ\prime}$ (V) |
|---|---|
| $\ce{NAD+}/\ce{NADH}$ | $-0.32$ |
| $\ce{NADP+}/\text{NADPH}$ | $-0.32$ |
| FAD/FADH₂ (enzyme-bound, Complex II) | $\approx 0.00$ to $+0.03$ |
| Ubiquinone (Q/QH₂) | $+0.045$ |
| Cytochrome $c$ ($\ce{Fe^3+}/\ce{Fe^2+}$) | $+0.235$ |
| $\tfrac{1}{2}\ce{O2}/\ce{H2O}$ | $+0.82$ |

NADH → $\ce{O2}$: $\Delta E^{\circ\prime} = 1.14$ V, so
$\Delta G^{\circ\prime} \approx -220$ kJ/mol (ceiling ~7 ATP, ~2.5 actually
banked). FADH₂ → $\ce{O2}$: ~$0.79$–$0.82$ V, so ~$-152$ to $-158$ kJ/mol.

*From* [2.5](lessons/02-05-bioenergetics-atp-redox.md), [3.4](lessons/03-04-oxidative-phosphorylation.md), [3.6](lessons/03-06-photosynthesis-taste.md)

### Carbohydrate structure

| Feature | Rule |
|---|---|
| Formula | $\ce{(CH2O)_n}$; glucose, fructose, galactose all $\ce{C6H12O6}$ |
| Aldose vs. ketose | carbonyl at C1 (aldehyde) vs. internal at C2 (ketone) |
| D vs. L | set at the chiral carbon **farthest** from the carbonyl (C5 in a hexose); biology is nearly all D |
| Ring closure | C1 aldehyde + C5 hydroxyl → cyclic hemiacetal (pyranose); fructose can form a furanose |
| Glycogen | $\alpha(1\to4)$ backbone, $\alpha(1\to6)$ branch every 8–12 residues — many non-reducing ends, fast mobilization |
| Starch | $\alpha(1\to4)$ with sparser $\alpha(1\to6)$ branches — plant fuel store |
| Cellulose | $\beta(1\to4)$, unbranched — flat ribbons, H-bonded microfibrils, indigestible to humans |

*From* [3.1](lessons/03-01-carbohydrates-structure-storage.md)

### Central-metabolism ledger (per glucose)

| Stage | Direct ATP/GTP | NADH | FADH₂ | $\ce{CO2}$ |
|---|---|---|---|---|
| Glycolysis (4 made − 2 invested) | 2 | 2 | 0 | 0 |
| Pyruvate dehydrogenase (×2) | 0 | 2 | 0 | 2 |
| Citric-acid cycle (×2 turns) | 2 GTP | 6 | 2 | 4 |
| **Total** | **4** | **10** | **2** | **6** |

$$10\times 2.5 \;+\; 2\times 1.5 \;+\; 4 \;=\; 32\ \text{ATP per glucose}$$

Quote ~30 instead if the two cytosolic glycolytic NADH ride the
glycerol-phosphate shuttle (valued at 1.5 each); the malate–aspartate shuttle
keeps them at 2.5 and gives 32. Per turn the cycle yields **3 NADH + 1 FADH₂ +
1 GTP + 2 $\ce{CO2}$**, i.e. **10 ATP per acetyl-CoA**. Anaerobic glycolysis
alone gives 2 ATP — about 6 percent of the aerobic yield. From glycogen (entering
as G-6-P, skipping hexokinase) glycolysis nets **3** ATP.

*From* [3.2](lessons/03-02-glycolysis.md), [3.3](lessons/03-03-citric-acid-cycle.md), [3.4](lessons/03-04-oxidative-phosphorylation.md)

### Control points of the glucose pathways

| Enzyme | Reaction | Turned **down** by | Turned **up** by |
|---|---|---|---|
| Hexokinase | glucose → G-6-P | G-6-P | — |
| **PFK-1** (committed step) | F-6-P → F-1,6-BP | ATP, citrate | AMP, **fructose-2,6-bisphosphate** |
| Pyruvate kinase | PEP → pyruvate | ATP | F-1,6-BP |
| PDH, isocitrate DH, α-KG DH | into and around the cycle | NADH, ATP | $\ce{NAD+}$, ADP |
| FBPase-1 (gluconeogenic) | F-1,6-BP → F-6-P | **fructose-2,6-bisphosphate** | — |

Fructose-2,6-bisphosphate is a pure **signal**, not a pathway intermediate: it
activates PFK-1 and inhibits FBPase-1 at once, so the two directions can never
run hard together. Glucagon → cAMP → PKA phosphorylates the bifunctional
PFK-2/FBPase-2 → F-2,6-BP **falls** → make glucose. Insulin reverses every arrow
→ F-2,6-BP **rises** → burn glucose.

*From* [3.2](lessons/03-02-glycolysis.md), [3.3](lessons/03-03-citric-acid-cycle.md), [3.5](lessons/03-05-gluconeogenesis-reciprocal-regulation.md)

### Gluconeogenesis: the three cliffs and four bypasses

| Glycolytic (one-way) | Gluconeogenic bypass | Cost |
|---|---|---|
| Pyruvate kinase: PEP → pyruvate | pyruvate carboxylase (→ OAA), then PEP carboxykinase (→ PEP) | 1 ATP + 1 GTP per three-carbon unit |
| PFK-1: F-6-P → F-1,6-BP | fructose-1,6-bisphosphatase (hydrolysis) | none recovered |
| Hexokinase: glucose → G-6-P | glucose-6-phosphatase (hydrolysis) | none recovered |

$$2\ \text{pyruvate} + 4\,\text{ATP} + 2\,\text{GTP} + 2\,\text{NADH} \longrightarrow \text{glucose}$$

Six high-energy phosphates to build what burning returns only 2 — the 4-ATP gap
is the price of making both directions spontaneous and separately switchable.

*From* [3.5](lessons/03-05-gluconeogenesis-reciprocal-regulation.md)

### Photosynthesis ledger

$$3\,\ce{CO2} + 9\,\text{ATP} + 6\,\text{NADPH} \longrightarrow 1\ \text{G3P} \qquad (\text{ATP:NADPH demand} = 1.5)$$

Carboxylation by rubisco is free; 6 ATP + 6 NADPH reduce the six 3-PGA, and 3
more ATP regenerate RuBP. Terminal electron acceptor: $\ce{NADP+}$ in the light
reactions, $\ce{O2}$ in oxidative phosphorylation. The released $\ce{O2}$ comes
from **water**, not from $\ce{CO2}$.

*From* [3.6](lessons/03-06-photosynthesis-taste.md)

### Lipids and fatty-acid oxidation

| Item | Rule |
|---|---|
| Naming | X:Y = X carbons, Y double bonds; $\Delta^9$ gives the position |
| Saturation and melting | saturated = straight = stacks = high mp; *cis* double bond = kink = low mp; *trans* has no kink, so it behaves like saturated |
| Triacylglycerol | glycerol + 3 fatty acids, no polar head — storage only |
| Glycerophospholipid | one tail swapped for a phosphate head → **amphipathic** → bilayers |
| Cholesterol | rigid four-ring sterol; a fluidity **buffer** (stiffens when hot, prevents gelling when cold) |
| Energy density | ~9 kcal/g vs ~4 for carbohydrate: carbons are more reduced *and* stored anhydrous (glycogen drags 2–3 g water per gram) |
| β-oxidation per turn | 1 FADH₂ + 1 NADH + 1 acetyl-CoA; turns $= n/2 - 1$, acetyl-CoA $= n/2$ |
| Activation | 2 ATP equivalents, once per fatty acid (ATP → AMP + PPi) |
| Carnitine shuttle | CPT-I carries the acyl group in; **malonyl-CoA** blocks it so you never burn and build at once |

$$\text{Palmitate (16:0)}:\quad 7(1.5) + 7(2.5) + 8(10) - 2 = 106\ \text{ATP} \quad (6.6\ \text{per carbon vs. glucose's } 5.3)$$

*From* [4.1](lessons/04-01-lipids-fatty-acids-triacylglycerols-sterols.md), [4.2](lessons/04-02-fatty-acid-oxidation.md)

### Transport energetics

$$\Delta G = RT\ln\frac{c_2}{c_1} + zF\,\Delta\psi, \qquad \Delta\psi = \psi_{\text{destination}} - \psi_{\text{source}}$$

Uncharged solute: drop the second term. A tenfold uphill move costs
$+5.9$ kJ/mol at 310 K; crossing 60 mV with $z=+1$ costs another $\pm 5.8$
kJ/mol. The $\ce{Na+}/\ce{K+}$-ATPase spends 1 ATP to move 3 $\ce{Na+}$ out and
2 $\ce{K+}$ in.

*From* [4.3](lessons/04-03-membranes-membrane-transport.md)

### Nucleic acids and the code

| Item | Rule |
|---|---|
| Nucleotide | phosphate (5′) + sugar + base (1′); chain extends at 3′ |
| DNA vs. RNA | deoxyribose vs. ribose (2′-OH); T vs. U; duplex vs. mostly single-stranded |
| Purines / pyrimidines | A, G (two rings) / C, T, U (one ring) — every pair is one of each |
| Pairing and $T_m$ | A=T has 2 H-bonds, G≡C has 3, so $T_m$ rises with GC content |
| Helix | right-handed B-form, ~10 bp per turn; the **major groove** is where proteins read the sequence |
| RNA roles | mRNA (transcript), tRNA (codon↔amino-acid adaptor), rRNA (ribosome core), regulatory RNAs |
| Reading | non-overlapping triplets; $4^3 = 64$ codons; 2 bits per base pair |
| Start / stop | **AUG** (also Met) starts; **UAA, UAG, UGA** stop |
| Mutation types | silent (synonym), missense (one residue swapped), nonsense (premature stop), frameshift (everything downstream regrouped) |

*From* [4.4](lessons/04-04-nucleic-acids-dna-rna-structure.md), [4.5](lessons/04-05-flow-of-genetic-information.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| $K_a$, $K_w$, the log-scale pH, weak-acid equilibrium | [general-chemistry 4.1](../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) |
| Titration curves, equivalence points, Henderson–Hasselbalch derived from $K_a$ | [general-chemistry 4.2](../general-chemistry/lessons/04-02-buffers-titration.md) |
| Equilibrium constant $K$ and Le Châtelier's principle | [general-chemistry 3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) |
| Oxidation numbers and balancing redox half-reactions | [general-chemistry 2.3](../general-chemistry/lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md) |
| $\Delta G^{\circ} = -nFE^{\circ}$, the Faraday constant, standard reduction potentials, the Nernst equation | [general-chemistry 4.4](../general-chemistry/lessons/04-04-taste-of-electrochemistry.md) |
| Activation energy, Arrhenius, and "a catalyst never moves the equilibrium" | [general-chemistry 4.3](../general-chemistry/lessons/04-03-taste-of-kinetics.md) |
| $\Delta G = \Delta H - T\Delta S$ and the spontaneity criterion | [physical-chemistry 1.3](../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md) |
| $\Delta G^{\circ} = -RT\ln K$ and the reaction quotient $Q$ | [physical-chemistry 2.6](../physical-chemistry/lessons/02-06-chemical-equilibrium-constant.md) |
| The steady-state approximation for reactive intermediates | [physical-chemistry 3.3](../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md) |
| Transition-state theory and the Eyring equation | [physical-chemistry 3.4](../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) |
| Osmotic pressure $\Pi = cRT$ (used for the glycogen-vs-glucose argument) | [physical-chemistry 2.4](../physical-chemistry/lessons/02-04-colligative-properties.md) |
| Amide resonance and delocalization (why the peptide bond is planar) | [organic-chemistry 1.2](../organic-chemistry/lessons/01-02-resonance-formal-charge-delocalization.md) |
| $\mathrm{p}K_a$ reasoning for organic acids and bases | [organic-chemistry 1.3](../organic-chemistry/lessons/01-03-acids-bases-organic.md) |
| Chirality, stereocenters, R/S | [organic-chemistry 1.5](../organic-chemistry/lessons/01-05-chirality-r-s-system.md) |
| Fischer projections, diastereomers, optical rotation (D/L sugars, mutarotation) | [organic-chemistry 1.6](../organic-chemistry/lessons/01-06-diastereomers-meso-optical-activity.md) |
| Nucleophiles, electrophiles, and how to read a mechanism arrow | [organic-chemistry 2.1](../organic-chemistry/lessons/02-01-functional-groups-mechanisms-language.md) |
| Hemiacetal formation (sugar ring closure) | [organic-chemistry 3.3](../organic-chemistry/lessons/03-03-aldehydes-ketones-nucleophilic-addition.md) |
| Ester and amide formation, acyl substitution (triacylglycerols, peptide bonds) | [organic-chemistry 3.4](../organic-chemistry/lessons/03-04-carboxylic-acids-derivatives-acyl-substitution.md) |
| Amines and alcohols as nucleophiles (side-chain chemistry) | [organic-chemistry 3.6](../organic-chemistry/lessons/03-06-alcohols-ethers-amines.md) |

## Pitfalls

### Charge, pH, and buffers

- Concentration does **not** set a buffer's pH — only the ratio $[\ce{A-}]/[\ce{HA}]$ does. Concentration sets *capacity*. *([1.1](lessons/01-01-water-ph-buffers.md))*
- A buffer works only within about $\mathrm{p}K_a \pm 1$; to hold pH 7.4 you need an acid with $\mathrm{p}K_a$ near 7, which is why phosphate and bicarbonate — not acetate — guard physiological pH. *([1.1](lessons/01-01-water-ph-buffers.md))*
- The neutral form of an amino acid is the **zwitterion**, not the uncharged Lewis structure. *([1.2](lessons/01-02-amino-acids-peptide-bond.md))*
- pI is the mean of the two $\mathrm{p}K_a$'s **flanking the net-zero species** — adjacent values for a triprotic residue, never the two outermost. *([1.2](lessons/01-02-amino-acids-peptide-bond.md))*
- Forming a peptide bond consumes the internal α-amino and α-carboxyl groups, so a protein's charge comes from side chains plus its two termini. *([1.2](lessons/01-02-amino-acids-peptide-bond.md))*

### Protein structure and folding

- The backbone cannot twist freely: $\omega$ is frozen and steric clashes forbid most of the Ramachandran map — that emptiness is why only a few secondary structures exist. *([1.3](lessons/01-03-four-levels-protein-structure.md))*
- **Backbone** H-bonds make secondary structure; **side chains** make tertiary and quaternary. Keep the levels straight. *([1.3](lessons/01-03-four-levels-protein-structure.md))*
- Glycine and proline are never ordinary residues: Gly has no $\ce{C_\beta}$ (roams the plot, favors turns), Pro clamps $\varphi$ and has no amide H (helix breaker). *([1.3](lessons/01-03-four-levels-protein-structure.md))*
- The hydrophobic effect is not oil attracting oil — it is *water* reclaiming its entropy, which is why the driving force lives in the solvent and strengthens with warming over a range. *([1.1](lessons/01-01-water-ph-buffers.md), [1.4](lessons/01-04-the-folding-problem.md))*
- Chaperones do not fold the protein; they prevent aggregation. Remove them and folding is slower and messier, not *different*. *([1.4](lessons/01-04-the-folding-problem.md))*
- The native fold is often only the lowest **kinetically accessible** state — amyloid can lie lower still, held off by a barrier. *([1.4](lessons/01-04-the-folding-problem.md))*

### Binding, cooperativity, and kinetics

- A higher $P_{50}$ means *lower* affinity (a right-shift) — good for unloading, bad for loading. Affinity and delivery are different virtues. *([1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md))*
- The Hill coefficient is not the number of sites: four independent sites still give $n=1$. *([1.5](lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md), [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md))*
- Binding substrate *too* tightly deepens the reactant valley and makes the hill **taller** — enzymes save their strongest grip for the transition state, which is why transition-state analogs are such potent inhibitors. *([2.1](lessons/02-01-enzymes-catalytic-strategy.md))*
- A catalyst cannot shift an equilibrium: it lowers both barriers equally, so $K_{\text{eq}}$ is untouched and only the *approach* is faster. *([2.1](lessons/02-01-enzymes-catalytic-strategy.md))*
- $K_m$ is **apparent** affinity, not $K_d$ — the two coincide only when $k_2 \ll k_{-1}$. *([2.2](lessons/02-02-michaelis-menten-kinetics.md))*
- $V_{\max}$ is a property of your *sample* (it scales with $[\text{E}]_T$); compare catalysts by $k_{cat}$ or $k_{cat}/K_m$. *([2.2](lessons/02-02-michaelis-menten-kinetics.md))*
- Lineweaver–Burk inflates the error of the smallest velocities — superb for reading inhibition patterns, poor for fitting; use nonlinear regression on the hyperbola. And it linearizes only $n_H=1$ kinetics, so never reach for it on an allosteric enzyme. *([2.2](lessons/02-02-michaelis-menten-kinetics.md), [2.4](lessons/02-04-allosteric-regulation-metabolic-control.md))*

### Inhibition and regulation

- More substrate beats only a **competitive** inhibitor. Piling on substrate makes *more* ES, so it makes uncompetitive inhibition **worse** — which is exactly why uncompetitive inhibitors are prized as drugs. *([2.3](lessons/02-03-enzyme-inhibition.md))*
- "Noncompetitive" and "uncompetitive" are near-opposites: noncompetitive leaves $K_m$ unchanged and lowers $V_{\max}$; uncompetitive lowers both. Trust the $\alpha,\alpha'$ table, not the syllables. *([2.3](lessons/02-03-enzyme-inhibition.md))*
- Small $K_i$ means **tight** binding and strong inhibition — it is a dissociation constant. *([2.3](lessons/02-03-enzyme-inhibition.md))*
- Allosteric effectors do not compete for the active site; they tilt the T↔R equilibrium from a separate site. *([2.4](lessons/02-04-allosteric-regulation-metabolic-control.md))*
- Phosphorylation does not always activate: the same signal activates glycogen phosphorylase and inhibits glycogen synthase. *([2.4](lessons/02-04-allosteric-regulation-metabolic-control.md))*

### Thermodynamics and bioenergetics

- A positive $\Delta G^{\circ\prime}$ does **not** forbid a reaction — spontaneity rides on $\Delta G$, and keeping products scarce drags $RT\ln Q$ negative. *([2.5](lessons/02-05-bioenergetics-atp-redox.md))*
- ATP has no magic "high-energy bond": the energy comes from product stabilization on hydrolysis (charge relief, resonance, solvation). *([2.5](lessons/02-05-bioenergetics-atp-redox.md))*
- Use **acceptor minus donor** for $\Delta E^{\circ\prime}$; a positive $\Delta E^{\circ\prime}$ gives a negative $\Delta G^{\circ\prime}$, because of the minus sign in $\Delta G^{\circ\prime} = -nF\Delta E^{\circ\prime}$. *([2.5](lessons/02-05-bioenergetics-atp-redox.md), [3.6](lessons/03-06-photosynthesis-taste.md))*
- Coupling requires a **shared intermediate** — two favorable reactions in the same beaker do not add up. *([2.5](lessons/02-05-bioenergetics-atp-redox.md))*

### Metabolic bookkeeping

- Glycolysis makes 4 ATP **gross**, nets 2. Double only the *payoff* phase — you pay once on the intact sugar and collect twice on its halves. *([3.2](lessons/03-02-glycolysis.md))*
- Fermentation's point is regenerating $\ce{NAD+}$ so G3P dehydrogenase keeps turning; lactate and ethanol are the garbage, not the goal. *([3.2](lessons/03-02-glycolysis.md))*
- The citric-acid cycle makes almost no ATP (1 GTP per turn) — its product is *electrons*. Don't credit it with energy it only stages. *([3.3](lessons/03-03-citric-acid-cycle.md))*
- The two $\ce{CO2}$ leaving a turn come from the **oxaloacetate** carbons; the acetyl carbons that just arrived leave on later laps. The count balances, the atoms lag a turn. *([3.3](lessons/03-03-citric-acid-cycle.md))*
- The cycle is amphibolic: siphon citrate off for fat synthesis and you must top up oxaloacetate anaplerotically or the cycle stalls. *([3.3](lessons/03-03-citric-acid-cycle.md))*
- FADH₂ yields less ATP for a **geometric** reason — it enters past Complex I and powers fewer pumps — not because its electrons are intrinsically feeble. *([3.4](lessons/03-04-oxidative-phosphorylation.md))*
- Oxygen supplies no energy; it is the terminal electron **sink** that makes the whole fall possible, which is why cyanide (Complex IV) and asphyxiation kill the same way. *([3.4](lessons/03-04-oxidative-phosphorylation.md))*
- Gluconeogenesis is not glycolysis with the same enzymes run backward — four distinct bypass enzymes handle the three irreversible cliffs. *([3.5](lessons/03-05-gluconeogenesis-reciprocal-regulation.md))*
- Fructose-**2,6**-bisphosphate is a signal, not an intermediate; do not confuse it with fructose-**1,6**-bisphosphate, which is one. *([3.5](lessons/03-05-gluconeogenesis-reciprocal-regulation.md))*
- Activation of a fatty acid costs **2** ATP equivalents, and a C16 chain runs **7** turns for **8** acetyl-CoA — the two most common tally errors. *([4.2](lessons/04-02-fatty-acid-oxidation.md))*
- β-Oxidation's own carriers supply only 28 of palmitate's 106 ATP; the acetyl-CoA fed to the cycle supplies 80. *([4.2](lessons/04-02-fatty-acid-oxidation.md))*
- The "dark reactions" run in daylight — "dark" means no photon is absorbed *in those steps*, and they stall without the ATP and NADPH the light just made. *([3.6](lessons/03-06-photosynthesis-taste.md))*
- NADH and NADPH are separate pools: NADH is catabolism's currency, NADPH biosynthesis's. *([3.6](lessons/03-06-photosynthesis-taste.md))*

### Membranes, lipids, and transport

- "Lipid" is a solubility class, not a structural family — fatty acids, triacylglycerols, and cholesterol share behavior, not a building block. *([4.1](lessons/04-01-lipids-fatty-acids-triacylglycerols-sterols.md))*
- A *cis* double bond **lowers** the melting point by wrecking packing; *trans* has no kink, which is why trans fats behave like saturated ones. *([4.1](lessons/04-01-lipids-fatty-acids-triacylglycerols-sterols.md))*
- Triacylglycerol (three tails, no charge) is storage; a phospholipid trades one tail for a polar head, and that swap alone is why it forms membranes. *([4.1](lessons/04-01-lipids-fatty-acids-triacylglycerols-sterols.md))*
- A channel or carrier sets the *rate*, never the direction — only a fuel-burning pump reverses the natural flow. *([4.3](lessons/04-03-membranes-membrane-transport.md))*
- For ions, never drop the $zF\Delta\psi$ term: "down the concentration gradient" and "downhill in energy" can disagree. *([4.3](lessons/04-03-membranes-membrane-transport.md))*
- Secondary active transport is not free — it spends a gradient the primary pump paid ATP to build. *([4.3](lessons/04-03-membranes-membrane-transport.md))*

### Nucleic acids and information

- The two strands are **complementary**, not identical, and the complement is antiparallel — write the pairs left-to-right and you have produced the 3′→5′ strand; reverse it. *([4.4](lessons/04-04-nucleic-acids-dna-rna-structure.md))*
- More hydrogen bonds is not simply better: genomes keep AT-rich stretches exactly where the strands must open (origins, TATA boxes). *([4.4](lessons/04-04-nucleic-acids-dna-rna-structure.md))*
- The ribosome reads **mRNA**, not DNA — and RNA carries U where DNA carried T. *([4.5](lessons/04-05-flow-of-genetic-information.md))*
- "Degenerate" is not "ambiguous": each codon means exactly one amino acid; several codons merely share a meaning. *([4.5](lessons/04-05-flow-of-genetic-information.md))*
- Replication is semiconservative (one old strand, one new per daughter), and synthesis is always 5′→3′ — which is *why* the lagging strand is built in pieces. *([4.5](lessons/04-05-flow-of-genetic-information.md))*
- Degeneracy protects only against *substitutions* within a fixed frame; a frameshift destroys the frame, so every downstream codon changes. *([4.5](lessons/04-05-flow-of-genetic-information.md))*
