# General Biology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Biology is chemistry that copies itself. Cells run on enzymes and ATP, store
instructions in DNA, pass them on by rules Mendel worked out from counting peas,
and are reshaped over deep time by selection. Use this card for the vocabulary
that has to be exact (chromosome versus chromatid, homologue versus sister,
homology versus analogy), the handful of formulas, and the numbers worth looking
up rather than half-remembering.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\delta+$, $\delta-$ | partial charges on a polar bond — no electron transferred, just unequal sharing | [1.1](lessons/01-01-chemistry-of-life.md) |
| pH | $-\log_{10}[\ce{H+}]$; cytoplasm sits near 7.2 | [1.1](lessons/01-01-chemistry-of-life.md) |
| $n$ / $2n$ | haploid / diploid — one or two of each chromosome | [2.5](lessons/02-05-mitosis-meiosis.md) |
| $\Delta G$ | free-energy change; negative means the reaction can go | [2.1](lessons/02-01-energy-atp-enzymes.md) |
| $E_a$ | activation energy — the hill before the downhill | [2.1](lessons/02-01-energy-atp-enzymes.md) |
| ATP, ADP | the charged and spent forms of the cell's energy currency | [2.1](lessons/02-01-energy-atp-enzymes.md) |
| $\ce{NADH}$, $\ce{FADH2}$ | loaded electron carriers in respiration | [2.2](lessons/02-02-cellular-respiration.md) |
| $\ce{NADPH}$ | the photosynthetic carrier — note the extra P | [2.3](lessons/02-03-photosynthesis.md) |
| G1, S, G2, M, G0 | cell-cycle phases; G0 is the non-dividing resting state | [2.4](lessons/02-04-the-cell-cycle.md) |
| *B* / *b* | dominant and recessive alleles — capital is dominant | [3.1](lessons/03-01-mendel-monohybrid-cross.md) |
| A, T, G, C, U | the bases; U replaces T in RNA | [3.3](lessons/03-03-dna-structure-replication.md) |
| 5′, 3′ | the two ends of a nucleic-acid strand; synthesis always runs 5′ to 3′ | [3.3](lessons/03-03-dna-structure-replication.md) |
| $p$, $q$ | allele frequencies in a gene pool, $p+q=1$ | [4.2](lessons/04-02-evolution-in-populations.md) |
| $w$ | relative fitness — reproductive success, scaled to 1 for the best variant | [4.1](lessons/04-01-natural-selection.md) |
| $N$, $r$, $K$ | population size, per-capita growth rate, carrying capacity | [4.4](lessons/04-04-taste-of-ecology.md) |

## Definitions

### pH

How acidic a solution is, on a log scale — each unit is a tenfold change in
hydrogen-ion concentration. It matters biologically because a protein's charge,
and therefore its shape and function, depends on it.

$$\mathrm{pH} = -\log_{10}[\ce{H+}]$$

*Introduced:* [1.1](lessons/01-01-chemistry-of-life.md)

### Surface-area-to-volume ratio

Supply comes in through the surface while demand scales with the interior, so
growing a cell makes it steadily worse off. This is the hard geometric limit on
cell size.

$$\frac{\text{SA}}{V} = \frac{3}{r} = \frac{6}{d} \quad (\text{sphere}), \qquad \frac{6}{s} \quad (\text{cube})$$

*Introduced:* [1.3](lessons/01-03-cell-theory-two-kinds-of-cell.md)

### Free energy

The quantity that decides whether a reaction can proceed on its own. Negative
means downhill and therefore possible; it says nothing at all about speed.

$$\Delta G = \Delta H - T\Delta S$$

*Introduced:* [2.1](lessons/02-01-energy-atp-enzymes.md)

### ATP

The cell's energy currency — spent and remade continuously rather than stored.
Hydrolysing the terminal phosphate releases energy that an enzyme can couple to a
reaction that would not otherwise go.

$$\ce{ATP + H2O -> ADP + P_i}, \qquad \Delta G^{\circ\prime} \approx -30.5\ \mathrm{kJ/mol}$$

*Introduced:* [2.1](lessons/02-01-energy-atp-enzymes.md)

### Redox

Oxidation is loss of electrons, reduction is gain. In biology electrons usually
travel with a hydrogen, so "oxidized" often means "lost hydrogens."

$$\ce{NAD+ + 2e- + H+ -> NADH}$$

*Introduced:* [2.2](lessons/02-02-cellular-respiration.md)

### Chemiosmosis

How ATP is actually made. Falling electrons pump protons across a membrane,
building a gradient; the protons flow back through ATP synthase, physically
turning a rotor that drives the chemistry. A battery discharged through a motor.

*Introduced:* [2.2](lessons/02-02-cellular-respiration.md), and again in the chloroplast at [2.3](lessons/02-03-photosynthesis.md)

### Light reactions

The photosynthetic half that captures energy: two photons lift an electron from
water up onto $\ce{NADPH}$, protons are pumped, ATP is made, and oxygen is
released as the leftover from splitting water.

$$\ce{2H2O -> O2 + 4H+ + 4e-}$$

*Introduced:* [2.3](lessons/02-03-photosynthesis.md)

### Chromosome vs chromatid

The distinction that makes every counting problem come out right. **Chromosome
number is defined by centromeres, not by DNA content.** Replication doubles the
DNA but not the chromosome count, because the two copies stay joined.

| Stage | Chromosomes | Chromatids each |
|---|---|---|
| G1 | 46 | 1 |
| After S | **46** | 2 (sisters, joined) |
| After M | 46 | 1 |

*Introduced:* [2.4](lessons/02-04-the-cell-cycle.md)

### Sources of genetic variation

Three mechanisms, and they compound. Together they are why sexual reproduction is
worth its cost.

1. **Crossing over** (prophase I) — homologues swap segments, so each chromosome passed on is a mosaic.
2. **Independent assortment** (metaphase I) — each pair orients independently: $2^{23}$ gametes in humans.
3. **Random fertilization** — any gamete may meet any other: $(2^{23})^2 \approx 7\times10^{13}$.

*Introduced:* [2.5](lessons/02-05-mitosis-meiosis.md)

### Law of segregation

The two alleles of a gene separate into different gametes. This **is** anaphase I:
homologous chromosomes being pulled to opposite poles.

*Introduced:* [3.1](lessons/03-01-mendel-monohybrid-cross.md)

### Test cross

How to tell a homozygous dominant from a heterozygote: cross it with a homozygous
recessive, which contributes only recessive alleles, so the offspring's phenotypes
read the unknown parent's gametes directly. Any recessive offspring proves the
parent is heterozygous.

*Introduced:* [3.1](lessons/03-01-mendel-monohybrid-cross.md)

### Law of independent assortment

Alleles of different genes segregate independently — which **is** metaphase I
orientation. It holds only for genes on different chromosomes, or far apart on
one.

*Introduced:* [3.2](lessons/03-02-dihybrid-crosses-and-beyond.md)

### Recombination frequency

The fraction of offspring showing a non-parental combination. It measures distance
along a chromosome, and it is what genetic maps are built from.

$$\mathrm{RF} = \frac{\text{recombinant offspring}}{\text{total offspring}}, \qquad 1\ \text{map unit} = 1\ \text{percent RF}$$

**Caps at 50 percent**, which means "unlinked" — you cannot distinguish very far
apart on one chromosome from on different chromosomes by breeding alone.

*Introduced:* [3.2](lessons/03-02-dihybrid-crosses-and-beyond.md)

### Base pairing

Always a purine with a pyrimidine, which keeps the helix a uniform width. Because
each strand specifies the other, the structure contains its own copying
mechanism.

$$\ce{A <=> T}\ (\text{2 H-bonds}), \qquad \ce{G <=> C}\ (\text{3 H-bonds})$$

GC-rich DNA is harder to separate — three bonds per pair instead of two.

*Introduced:* [3.3](lessons/03-03-dna-structure-replication.md)

### The genetic code

Triplets, because 4 bases in pairs gives only 16 and life needs 20 amino acids.
The surplus is spent on redundancy concentrated in the third base, which buffers
mutation.

| Feature | Value |
|---|---|
| Codons | $4^3 = 64$ |
| Coding for amino acids | 61 |
| Stop codons | 3 — UAA, UAG, UGA |
| Start codon | AUG (also methionine) |

Essentially **universal** across all life — which is itself evidence of common
descent, since the assignment is arbitrary.

*Introduced:* [3.4](lessons/03-04-central-dogma.md)

### Natural selection

Not a force but a consequence. Given all three conditions, change follows
necessarily.

1. **Variation** — individuals differ.
2. **Heritability** — the difference is passed on.
3. **Differential fitness** — the difference affects reproductive success.

**Variation arrives at random; survival does not.**

*Introduced:* [4.1](lessons/04-01-natural-selection.md)

### Hardy-Weinberg principle

The null model: with no evolutionary force acting, allele frequencies do not
change and genotype frequencies are just the expansion of $(p+q)^2$.

$$p + q = 1, \qquad p^2 + 2pq + q^2 = 1$$

Its value is in the deviations — a mismatch means one of the five conditions is
violated.

*Introduced:* [4.2](lessons/04-02-evolution-in-populations.md)

### Molecular clock

Mutations accumulate at a roughly steady rate at sites under little selective
constraint, so the number of sequence differences between two species estimates
time since divergence.

*Introduced:* [4.3](lessons/04-03-tree-of-life.md)

### Ten percent rule

Roughly a tenth of the energy at one trophic level is incorporated into the next;
the rest is respired, indigestible, or dies uneaten.

$$E_{n+1} \approx 0.1\,E_n \;\Longrightarrow\; E_n \approx 0.1^{\,n-1}E_1$$

An order-of-magnitude heuristic (real values span about 1 to 20 percent), and the
reason food chains are short.

*Introduced:* [4.4](lessons/04-04-taste-of-ecology.md)

### Logistic growth

Exponential growth with a brake that closes as the population approaches what the
environment can support.

$$\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right)$$

*Introduced:* [4.4](lessons/04-04-taste-of-ecology.md)

## Formulas and rules

### The four biomolecules

| Family | Monomer | Polymer | Job |
|---|---|---|---|
| Carbohydrates | monosaccharide (glucose) | starch, glycogen, cellulose, chitin | fuel and structure |
| **Lipids** | **none — not a true polymer** | fats, phospholipids, steroids | storage, membranes, signalling |
| Proteins | amino acid (**20** kinds) | polypeptide | almost every job |
| Nucleic acids | nucleotide (**4** kinds) | DNA, RNA | information |

Joined by **dehydration synthesis** (one water out per bond), split by
**hydrolysis** (one water in). A linear polymer of $n$ monomers has $n-1$ bonds.

*From* [1.2](lessons/01-02-four-biomolecules.md)

### Protein structure

| Level | What | Held by |
|---|---|---|
| Primary | the amino-acid sequence | peptide bonds (covalent) |
| Secondary | $\alpha$-helices, $\beta$-sheets | backbone hydrogen bonds |
| Tertiary | the whole 3D fold | R-group interactions, mainly the hydrophobic effect |
| Quaternary | several chains assembled | the same weak forces, between chains |

**Denaturation destroys everything but primary** — the weak interactions break,
the peptide bonds don't.

*From* [1.2](lessons/01-02-four-biomolecules.md)

### Prokaryote vs eukaryote

| | Prokaryote | Eukaryote |
|---|---|---|
| DNA | nucleoid, one circular chromosome | nucleus, several linear chromosomes |
| Organelles | none membrane-bound | many |
| Ribosomes | 70S | 80S (**70S inside mitochondria**) |
| Size | 0.5–5 μm | 10–100 μm |
| Division | binary fission | mitosis or meiosis |

*From* [1.3](lessons/01-03-cell-theory-two-kinds-of-cell.md)

### Cellular respiration

$$\ce{C6H12O6 + 6O2 -> 6CO2 + 6H2O}, \qquad \Delta G^{\circ\prime} = -2870\ \mathrm{kJ/mol}$$

| Stage | Where | ATP | $\ce{NADH}$ | $\ce{FADH2}$ |
|---|---|---|---|---|
| Glycolysis | cytosol | 2 (net) | 2 | 0 |
| Pyruvate oxidation | matrix | 0 | 2 | 0 |
| Citric acid cycle | matrix | 2 | 6 | 2 |
| Electron transport | inner membrane | ~28 | — | — |

At ~2.5 ATP per $\ce{NADH}$ and ~1.5 per $\ce{FADH2}$: **about 32 ATP**, roughly
34 percent efficiency. (Older texts say 36–38 using outdated ratios.) Fermentation
salvages **2** — about 2 percent — and exists to regenerate $\ce{NAD+}$, not to
make ATP.

*From* [2.2](lessons/02-02-cellular-respiration.md)

### Photosynthesis

$$\ce{6CO2 + 6H2O ->[light] C6H12O6 + 6O2}, \qquad \Delta G^{\circ\prime} = +2870\ \mathrm{kJ/mol}$$

Calvin cycle costs **3 ATP + 2 $\ce{NADPH}$ per $\ce{CO2}$**, so **18 ATP + 12
$\ce{NADPH}$ per glucose**. Twelve waters are split, releasing 6 $\ce{O2}$.

| | Respiration | Photosynthesis |
|---|---|---|
| Electrons flow | glucose → $\ce{O2}$ | $\ce{H2O}$ → $\ce{NADP+}$ |
| Direction | downhill | uphill, paid for by light |
| Carrier | $\ce{NADH}$ | $\ce{NADPH}$ |
| ATP by | chemiosmosis | chemiosmosis |
| Oxygen | consumed | **produced** (from water, not $\ce{CO2}$) |

*From* [2.3](lessons/02-03-photosynthesis.md)

### Mitosis vs meiosis

| | Mitosis | Meiosis |
|---|---|---|
| Divisions | 1 | 2 |
| Daughters | 2 | 4 |
| Chromosome number | unchanged (2n → 2n) | **halved (2n → n), at meiosis I** |
| Genetically | identical | all four different |
| Homologues pair? | **no** | yes, prophase I |
| Crossing over | no | yes |

**The one line to remember:** anaphase I separates **homologues**; anaphase II and
mitotic anaphase separate **sisters**.

*From* [2.5](lessons/02-05-mitosis-meiosis.md)

### Cross ratios

| Cross | Genotypes | Phenotypes |
|---|---|---|
| $Bb \times Bb$ | 1 : 2 : 1 | **3 : 1** |
| $Bb \times bb$ | 1 : 1 | **1 : 1** |
| $BB \times bb$ | all $Bb$ | all dominant |
| $RrYy \times RrYy$ | — | **9 : 3 : 3 : 1** |
| Incomplete dominance or codominance | 1 : 2 : 1 | **1 : 2 : 1** |

For three or more genes, **multiply per-gene probabilities** instead of drawing a
square: $P(A\_bbC\_) = \tfrac34\times\tfrac14\times\tfrac34 = \tfrac9{64}$.

*From* [3.1](lessons/03-01-mendel-monohybrid-cross.md), [3.2](lessons/03-02-dihybrid-crosses-and-beyond.md)

### Beyond simple dominance

| Pattern | Heterozygote shows | Example |
|---|---|---|
| Complete dominance | the dominant phenotype | pea flower colour |
| Incomplete dominance | an **intermediate** | red × white → pink |
| Codominance | **both, fully and separately** | AB blood type |
| Multiple alleles | (population has >2 variants) | ABO: $I^A$, $I^B$, $i$ |
| Pleiotropy | one gene, many traits | sickle-cell allele |
| Polygenic | many genes, one continuous trait | height, skin colour |

*From* [3.2](lessons/03-02-dihybrid-crosses-and-beyond.md)

### Replication accuracy

| Mechanism | Error rate after |
|---|---|
| Base pairing alone | 1 in $10^4$–$10^5$ |
| Polymerase proofreading | 1 in $10^7$ |
| Mismatch repair | **1 in $10^9$–$10^{10}$** |

**Chargaff's rules:** $\%A = \%T$ and $\%G = \%C$ — a direct consequence of
pairing. They say nothing about the A:G ratio.

*From* [3.3](lessons/03-03-dna-structure-replication.md)

### Mutation types

| Type | Change | Effect |
|---|---|---|
| Silent | substitution, same amino acid | none |
| Missense | substitution, different amino acid | depends on chemistry and position |
| Nonsense | substitution creating a stop | truncated, usually severe |
| **Frameshift** | insertion/deletion not a multiple of 3 | **everything downstream misread** |

**The asymmetry worth carrying:** a substitution changes at most one amino acid; an
indel wrecks the whole downstream sequence. An in-frame (multiple-of-three)
deletion removes whole amino acids and is much milder.

*From* [3.4](lessons/03-04-central-dogma.md)

### Mechanisms of evolution

| Mechanism | Direction | Effect on variation | Population-size dependent? |
|---|---|---|---|
| Selection | tracks the environment | usually reduces; can maintain | no |
| **Drift** | random | reduces, by losing alleles | **yes — strong when small** |
| Gene flow | toward the source | increases locally | no |
| Mutation | random | increases, very slowly | no |

**Carriers hide recessive alleles.** For a rare allele the fraction of copies
sitting in heterozygotes is just $p$ — so at $q = 0.02$, 98 percent of copies are
invisible to selection.

*From* [4.1](lessons/04-01-natural-selection.md), [4.2](lessons/04-02-evolution-in-populations.md)

### Homology vs analogy

| | Homology | Analogy |
|---|---|---|
| Cause | shared ancestry | similar selective pressure |
| Structure | **same parts**, different function | **different parts**, same function |
| Example | whale flipper / bat wing / human hand | bird wing and insect wing |
| Use in a tree | **builds it** | must be excluded |

Always state homology **with respect to a specific structure** — bird and bat
wings are analogous as wings and homologous as forelimbs.

*From* [4.3](lessons/04-03-tree-of-life.md)

### Species interactions

| Interaction | Sp. 1 | Sp. 2 | Example |
|---|---|---|---|
| Competition | − | − | two birds after the same seeds |
| Predation | + | − | fox and rabbit |
| Parasitism | + | − | tapeworm and host |
| Mutualism | + | + | pollinator and flower |
| Commensalism | + | 0 | barnacle on a whale |

**Competitive exclusion:** no two species can hold identical niches in one place.
What you observe instead is resource partitioning.

*From* [4.4](lessons/04-04-taste-of-ecology.md)

### Numbers worth having

| Quantity | Value |
|---|---|
| Hydrogen bond strength | ~20 kJ/mol, about 5 percent of a covalent bond |
| ATP hydrolysis | $-30.5$ kJ/mol |
| Glucose combustion | $-2870$ kJ/mol |
| ATP per glucose (aerobic) | ~32; fermentation gives 2 |
| Respiration efficiency | ~34 percent |
| Human chromosomes | 46 (2n), 23 pairs |
| Gametes by assortment alone | $2^{23} = 8.4$ million |
| Codons | 64 (61 coding, 3 stop) |
| Mutation rate after repair | ~1 in $10^9$ bases |
| Trophic transfer | ~10 percent |

## Assumed, not taught here

This course has no prerequisites and is meant to be self-contained. The two rows
below are the only facts it uses without deriving — both are stated where they are
used, and the pointers are for going deeper, not for filling a gap.

| Fact | Where it's taught |
|---|---|
| Electronegativity, covalent and ionic bonding, molecular shape | [`general-chemistry` 1.4](../general-chemistry/lessons/01-04-ionic-covalent-bonds-lewis-structures.md) and [1.5](../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) |
| Probability of independent events (used for cross ratios and Hardy-Weinberg) | [`prob-stat-refresher` 1.1](../prob-stat-refresher/lessons/01-01-sample-spaces-events-axioms.md) |

**Going deeper is a different matter from assuming.** Every Module 1–3 topic has a
full mechanistic treatment in [`biochemistry`](../biochemistry/syllabus.md) — water
and pH at 1.1, enzymes at 2.1–2.4, glycolysis at 3.2, the citric acid cycle at
3.3, chemiosmosis at 3.4, membranes at 4.3, nucleic acids at 4.4. Those courses sit
*above* this one; nothing here depends on them.

## Pitfalls

### Vocabulary that must be exact

- **Sister chromatids** are identical copies made in S phase; **homologous chromosomes** are the maternal and paternal versions and can carry different alleles. Mitosis separates sisters; meiosis I separates homologues.
  *([2.5](lessons/02-05-mitosis-meiosis.md))*
- **Chromosome count is defined by centromeres.** After S phase it is 46 chromosomes with 92 chromatids, never 92 chromosomes.
  *([2.4](lessons/02-04-the-cell-cycle.md))*
- **Genotype** is what you carry; **phenotype** is what shows. Two-thirds of the dominant-phenotype offspring of a heterozygous cross are heterozygous.
  *([3.1](lessons/03-01-mendel-monohybrid-cross.md))*
- **Habitat is a place; niche is a job.**
  *([4.4](lessons/04-04-taste-of-ecology.md))*
- **Homology is a claim about a structure, not an organism** — bird and bat wings are analogous as wings, homologous as forelimbs.
  *([4.3](lessons/04-03-tree-of-life.md))*

### Energy and metabolism

- **Enzymes change rate, never equilibrium.** They cannot make an endergonic reaction go; only coupling to ATP does that.
  *([2.1](lessons/02-01-energy-atp-enzymes.md))*
- **"Spontaneous" means $\Delta G<0$, not "fast."** Glucose in air is thermodynamically doomed and sits in the bowl indefinitely.
  *([2.1](lessons/02-01-energy-atp-enzymes.md))*
- **Oxygen does not supply the energy** — it accepts the spent electrons at the end of the chain. Remove the drain and the flow stops.
  *([2.2](lessons/02-02-cellular-respiration.md))*
- **Fermentation's purpose is regenerating $\ce{NAD+}$**, not making ATP; the ATP comes from glycolysis either way.
  *([2.2](lessons/02-02-cellular-respiration.md))*
- **Photosynthesis's oxygen comes from water, not $\ce{CO2}$** — settled by isotope labelling.
  *([2.3](lessons/02-03-photosynthesis.md))*
- **Plants respire too**, day and night, in every cell. Chloroplasts are an addition, not a replacement.
  *([1.4](lessons/01-04-tour-of-the-organelles.md), [2.3](lessons/02-03-photosynthesis.md))*
- **Energy flows and leaves as heat; matter cycles.** The single most important distinction in ecology.
  *([4.4](lessons/04-04-taste-of-ecology.md))*

### Genetics

- **Dominant does not mean common or better** — only expressed in a heterozygote. Polydactyly is dominant and rare.
  *([3.1](lessons/03-01-mendel-monohybrid-cross.md))*
- **Ratios are probabilities.** Four children from a heterozygous cross often won't be 3:1.
  *([3.1](lessons/03-01-mendel-monohybrid-cross.md))*
- **Each pregnancy is independent** — an affected child does not "use up" the risk.
  *([3.1](lessons/03-01-mendel-monohybrid-cross.md))*
- **Independent assortment fails for linked genes**, and recombination frequency then measures distance.
  *([3.2](lessons/03-02-dihybrid-crosses-and-beyond.md))*
- **Incomplete dominance is not blending** — cross two pinks and red and white return intact.
  *([3.2](lessons/03-02-dihybrid-crosses-and-beyond.md))*
- **A frameshift does not remove one amino acid** — it re-reads everything downstream. Removing one amino acid takes three bases.
  *([3.4](lessons/03-04-central-dogma.md))*
- **$q = \sqrt{q^2}$ works only for the recessive phenotype**, the only one that names a single genotype.
  *([4.2](lessons/04-02-evolution-in-populations.md))*

### Evolution

- **Populations evolve; individuals do not.** You will die with the alleles you were born with.
  *([4.1](lessons/04-01-natural-selection.md))*
- **Mutations arise regardless of need.** Bacteria did not develop resistance in response to the drug — the drug selected among variants already present.
  *([4.1](lessons/04-01-natural-selection.md))*
- **Fitness is reproductive success**, not health, strength or complexity.
  *([4.1](lessons/04-01-natural-selection.md))*
- **No change is not no selection** — stabilizing selection produces stasis by pressing from both sides.
  *([4.1](lessons/04-01-natural-selection.md))*
- **Dominant alleles do not spread by being dominant** — that is exactly what Hardy-Weinberg proves.
  *([4.2](lessons/04-02-evolution-in-populations.md))*
- **Drift is not weak selection** — it is aimless sampling error, and it can fix a harmful allele or lose a beneficial one.
  *([4.2](lessons/04-02-evolution-in-populations.md))*
- **Humans did not evolve from chimpanzees** — we share an ancestor that was neither, and branch points on a tree are ancestors, not living species.
  *([4.3](lessons/04-03-tree-of-life.md))*
- **Analogous traits must be excluded when building a tree** — convergent evolution is exactly what makes unrelated organisms resemble each other.
  *([4.3](lessons/04-03-tree-of-life.md))*
