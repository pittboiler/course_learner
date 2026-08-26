# General Biology · Lesson 3.4: The central dogma

> ⏱ ~15 min · Module 3: Genetics & the central dogma · Builds on: [3.3](03-03-dna-structure-replication.md), [1.2](01-02-four-biomolecules.md) · Unlocks: 4.1 (natural selection)

## Why this matters

This lesson closes the loop that started with Mendel. He inferred abstract "factors"; [3.3](03-03-dna-structure-replication.md) showed they are stretches of DNA; this lesson shows how a stretch of DNA becomes a trait. An allele is a sequence variant, a sequence variant changes a protein, a changed protein changes a phenotype — and dominance, recessiveness and disease all become mechanical rather than mysterious.

It also gives the vocabulary for everything downstream. Mutation is the raw material of evolution ([4.1](04-01-natural-selection.md)), and you cannot reason about which mutations matter without knowing how the code is read.

## The idea

**Information flows DNA → RNA → protein.** DNA stays in the nucleus as the archive. A working copy of one gene is transcribed into messenger RNA, which travels to a ribosome, where it is translated into a chain of amino acids that folds into a protein ([1.2](01-02-four-biomolecules.md)).

Why the intermediate? Several reasons at once: the archive never leaves the safe place, many copies can be made from one master so output is amplifiable and adjustable, and the copies are disposable — degrade the mRNA and production stops within minutes. **The mRNA is where the cell regulates how much of each protein it makes**, which is most of what regulation means.

**The code is a triplet code.** Four bases must specify twenty amino acids. Singles give 4, pairs give 16 — not enough. **Triplets give 64**, comfortably more than needed. That surplus is not wasted; it is spent on redundancy, with most amino acids specified by several codons.

**Redundancy buys error tolerance**, and it is not random. Codons for the same amino acid usually differ only in the third base, so a mutation there frequently changes nothing at all. The code is arranged so that the most error-prone position is the least consequential — and when a substitution *does* change the amino acid, the replacement is often chemically similar. This looks like a code shaped by selection to minimize the damage from mutation.

**And the code is essentially universal.** The same 64 codons mean the same amino acids in bacteria, oak trees and humans, with only trivial exceptions. That is powerful evidence for common descent ([4.3](04-03-tree-of-life.md)) — the assignment of codons to amino acids is arbitrary, so any two organisms using the same arbitrary assignment inherited it from a shared ancestor. It is also why you can put a human gene into a bacterium and get human protein, which is how insulin is manufactured.

**Where mutations act.** Now the payoff. A **substitution** swaps one base and changes at most one amino acid — often none. An **insertion or deletion** shifts the reading frame, so every codon downstream is misread. **That asymmetry is the single most useful thing in this lesson**: point mutations are usually survivable, frameshifts usually catastrophic.

## The formal version

**Transcription** (nucleus): RNA polymerase binds a promoter, unwinds the DNA, and builds an mRNA strand complementary to the **template strand**, running 5′ to 3′. Base pairing is as in DNA except that **uracil replaces thymine**.

In eukaryotes the initial transcript is processed before export: a protective cap and tail are added, and **introns** (non-coding stretches) are spliced out, leaving only **exons**. Alternative splicing lets one gene yield several different proteins — which is a large part of why humans have only about 20,000 genes.

**Translation** (ribosome): the mRNA is read three bases at a time. Transfer RNAs each carry one amino acid and bear an **anticodon** complementary to a codon; base pairing between codon and anticodon is what physically enforces the code. The ribosome joins successive amino acids by peptide bonds ([1.2](01-02-four-biomolecules.md)) until it reaches a stop codon.

**The genetic code.**

| Feature | Detail |
|---|---|
| Unit | **codon** — three bases |
| Total codons | $4^3 = 64$ |
| Coding for amino acids | 61 |
| **Stop codons** | 3 — UAA, UAG, UGA |
| **Start codon** | AUG, which also codes methionine |
| **Redundant** | most amino acids have 2–6 codons |
| **Unambiguous** | each codon specifies exactly one amino acid |
| **Universal** | essentially identical across all life |

*In words: 64 triplets, 61 meaning amino acids and 3 meaning stop, with redundancy concentrated in the third base.* See [the genetic code](../reference.md#the-genetic-code).

**Mutation types.** Take the normal mRNA **AUG GCC UAU UGA** = Met–Ala–Tyr–stop.

| Type | Change | Effect | Example |
|---|---|---|---|
| **Silent** | substitution, same amino acid | none | GCC → GC**A**, still Ala |
| **Missense** | substitution, different amino acid | one residue changes | GCC → **A**CC, Ala → Thr |
| **Nonsense** | substitution creating a stop | protein truncated — usually severe | UAU → UA**A**, stop |
| **Frameshift** | insertion or deletion not a multiple of 3 | **everything downstream misread** | delete a G: AUG **CCU AUU** … = Met–Pro–Ile… |

Watch the frameshift row carefully. Deleting one base from GCC does not remove one amino acid — it re-cuts the entire downstream sequence into different triplets, so every codon after the deletion means something else, and a premature stop usually appears. **A one-base deletion is far more damaging than a one-base substitution**, and an in-frame deletion of *three* bases is milder still, removing one amino acid and leaving the rest of the frame intact.

**Missense severity depends on chemistry and position.** Swapping one nonpolar residue for another on the surface may do nothing; swapping a charged residue into the buried core is usually fatal to the fold — exactly the analysis of [1.2](01-02-four-biomolecules.md)'s P3.

**Why alleles are recessive.** This is the mechanistic payoff for Module 3. Most recessive alleles are **loss-of-function**: the mutation breaks the protein. A heterozygote still has one working copy, and for most enzymes half the normal amount is plenty — enzymes are usually present well above the level demand requires. So the heterozygote looks normal and the allele is recessive.

*In words: recessive usually means "broken, and one good copy suffices."* Dominant alleles are typically either gain-of-function (the protein does something new and harmful) or cases where half the normal amount genuinely is not enough. That is the same accelerator-versus-brake asymmetry seen in [2.4](02-04-the-cell-cycle.md).

## Picture

![The central dogma as a flow from DNA in the nucleus through transcription to messenger RNA and through translation to protein, with a worked codon example showing the normal reading Met Ala Tyr stop and the same sequence after one base is deleted reading Met Pro Ile and running on, illustrating a frameshift](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — transcribe and translate).** A DNA template strand reads 3′-TAC CGG ATA ACT-5′. Give the mRNA and the amino acid sequence.

*Transcribe.* The mRNA is complementary to the template, with U replacing T:

$$\text{template } 3'\text{-TAC CGG ATA ACT-}5' \;\Longrightarrow\; \text{mRNA } 5'\text{-AUG GCC UAU UGA-}3'$$

*Translate.* Read in triplets from the start codon:

| Codon | AUG | GCC | UAU | UGA |
|---|---|---|---|---|
| Meaning | Met (start) | Ala | Tyr | **stop** |

**Peptide: Met–Ala–Tyr**, three amino acids, then translation terminates.

*Check.* The stop codon is not translated into anything — it is read by a release factor, not a tRNA, so the chain is 3 residues and not 4 ✓. Note the mRNA is antiparallel to the template, which is why the template is written 3′ to 5′ here.

**Example 2 (why you'd care — three mutations in one gene, three outcomes).** Take the same gene and apply three different single-base changes.

**(a) Substitution, third base.** GCC → GCA. Both code alanine, so the protein is unchanged — a **silent** mutation. Roughly a quarter of random substitutions in coding DNA are silent, precisely because the code is redundant at the third position.

**(b) Substitution, first base.** GCC → ACC. Alanine becomes threonine — **missense**. Whether this matters depends entirely on where that residue sits: on the surface, probably nothing; in the active site or buried core, likely severe. Sickle-cell disease ([1.2](01-02-four-biomolecules.md)) is a single missense mutation.

**(c) Deletion of one base.** Remove the first G: the mRNA becomes AUG **CCU AUU** …

| | Normal | After deletion |
|---|---|---|
| Codon 1 | AUG = Met | AUG = Met |
| Codon 2 | GCC = Ala | **CCU = Pro** |
| Codon 3 | UAU = Tyr | **AUU = Ile** |
| Codon 4 | UGA = stop | **the stop is gone** — reading continues into what was never coding |

**Everything after the deletion is wrong.** The reading frame shifted by one, so the ribosome cuts the message into different triplets. The original stop codon is no longer in frame, so translation runs on until it stumbles into a stop by chance.

**The general rule this establishes:** insertions and deletions are damaging in proportion to how far from a multiple of three they are. Delete 3 bases and you lose exactly one amino acid, leaving the frame intact — often tolerable. Delete 1 or 2 and you destroy the protein. This is exactly why the most common cystic fibrosis mutation, a three-base deletion removing a single phenylalanine, produces a protein that is misfolded but recognizably present, while frameshift mutations in the same gene produce nothing usable at all.

## Watch out

- **You might think the mRNA copies the coding strand.** It is built complementary to the **template** strand — which makes it identical in sequence to the coding strand, except with U for T. Both descriptions are right; confusing which is which flips your answer.
- **You might count a stop codon as an amino acid.** It codes for nothing. A message with four codons ending in a stop makes a three-residue peptide.
- **You might think redundancy means sloppiness.** The redundancy is structured — concentrated in the third base, and grouping chemically similar amino acids — so it buffers mutation. It looks like an optimized code, not a careless one.
- **You might think a frameshift removes one amino acid.** It re-reads everything downstream. Removing one amino acid requires deleting **three** bases.
- **You might over-apply "one gene, one protein."** Alternative splicing lets one human gene produce many proteins, which is why 20,000 genes support far more than 20,000 proteins.
- **You might treat "central dogma" as meaning information never flows backwards.** Reverse transcriptase copies RNA into DNA — retroviruses like HIV depend on it, and so does the machinery in every one of your cells that maintains chromosome ends. The dogma's real claim is narrower: information does not flow back out of **protein**.

## One-liner

> DNA is transcribed to a disposable RNA copy and translated three bases at a time through a redundant, near-universal code — so a substitution changes at most one amino acid while an indel wrecks everything downstream.

## Problems

**P1 (🟢)** A DNA template strand reads 3′-TAC GCA CCT ATT-5′. Give the mRNA sequence and the amino acids, using: AUG = Met, CGU = Arg, GGA = Gly, UAA = stop.

**P2 (🟡)** Explain why a substitution in the third base of a codon is often silent, while one in the first or second base rarely is. What does this suggest about how the genetic code evolved?

**P3 (🔴)** Two mutations occur in the same gene: one deletes 3 consecutive bases, the other deletes 1. Predict the effect of each on the protein, and explain why the three-base deletion is usually far milder.

<details>
<summary>Solutions</summary>

**P1** *Transcribe* — complementary to the template, U for T, antiparallel:

$$\text{template } 3'\text{-TAC GCA CCT ATT-}5' \;\Longrightarrow\; \text{mRNA } 5'\text{-AUG CGU GGA UAA-}3'$$

*Translate:*

| Codon | AUG | CGU | GGA | UAA |
|---|---|---|---|---|
| Amino acid | Met | Arg | Gly | **stop** |

**Peptide: Met–Arg–Gly** — three amino acids.

*Check.* Each template base maps correctly: T→A, A→U, C→G, G→C ✓. The message begins with AUG, as every coding sequence must, and terminates at UAA without adding a residue ✓.

**P2** **Why the third base is often silent:** the code is redundant, and the redundancy is concentrated at the third position. Most amino acids with multiple codons share their first two bases and differ only in the third — alanine is GC**U**, GC**C**, GC**A**, GC**G**, all four. So changing the third base frequently leaves the amino acid unchanged.

**Why the first two rarely are:** those positions carry most of the specification. Changing either almost always lands on a codon for a *different* amino acid, producing a missense (or occasionally a nonsense) mutation.

**What this suggests about the code's evolution:** the arrangement looks **selected for error tolerance**, not arbitrary. Two features point that way:

1. Redundancy is concentrated at the position most prone to mispairing during replication and translation, so the commonest errors are the least consequential.
2. When a substitution *does* change the amino acid, the replacement tends to be **chemically similar** — codons for nonpolar amino acids cluster together, so a first- or second-base error often swaps one hydrophobic residue for another, and the protein's fold may survive.

Simulations comparing the real code with millions of randomly generated alternatives find the natural code minimizes the average chemical impact of point mutations better than essentially all of them — strong evidence it was shaped by selection rather than frozen by accident.

*Check.* Consistent with this lesson's mutation table — silent mutations are common precisely because of third-base redundancy, and roughly a quarter of random coding substitutions turn out to be silent ✓.

**P3** **One-base deletion — a frameshift, usually catastrophic.**

The ribosome reads in fixed triplets from the start codon, so removing one base pulls every subsequent base one position forward. Every codon downstream is re-cut and misread, giving a completely different amino acid sequence from the deletion onward. The original stop codon is no longer in frame, so translation either runs past it into nonsense or, more often, hits a premature stop by chance within the next few dozen codons. **The product is a truncated, garbled protein with no function**, and such transcripts are frequently destroyed by cellular surveillance before they are even translated.

**Three-base deletion — in-frame, usually much milder.**

Three is a whole codon's worth, so the reading frame is preserved. Every codon before and after the deletion is read exactly as before. The result is the normal protein **missing one amino acid**.

| | 1-base deletion | 3-base deletion |
|---|---|---|
| Reading frame | **shifted** | preserved |
| Sequence downstream | entirely wrong | **unchanged** |
| Protein length | truncated at a chance stop | one residue shorter |
| Typical severity | complete loss of function | mild to severe, depending on which residue |

**Why the three-base case is milder:** the damage is *local* rather than *global*. A protein of 400 residues missing one may still fold and work, especially if the missing residue was on a surface loop. It can still be severe if the residue was in the active site or critical to the fold — which is exactly the case in cystic fibrosis, where the commonest mutation deletes three bases removing a single phenylalanine, and the resulting protein folds incorrectly and is degraded before reaching the membrane.

*Check.* The general rule follows: a deletion of $n$ bases causes a frameshift unless $n$ is a multiple of 3 ✓. This is why indel mutations in coding regions are strongly biased toward multiples of three in surviving lineages — the others are removed by selection ✓.

</details>

## Flashback

**From Lesson 3.3 (DNA structure & replication):** Explain why DNA replication is described as semiconservative, and state what each daughter molecule contains.

<details>
<summary>Solution</summary>

**Semiconservative** means each daughter molecule contains **one original (parental) strand and one newly synthesized strand**.

The mechanism forces it. The two strands are complementary, so separating them yields two templates. Each old strand directs the synthesis of a new partner by base pairing, and the old strand remains intact within the resulting duplex — it is never destroyed or displaced. So neither daughter is entirely new and neither is entirely old.

*Check.* Meselson and Stahl confirmed this by density labelling: after one generation in light medium all DNA was intermediate density (ruling out conservative replication, which predicts separate heavy and light bands), and after two generations there were exactly two bands, half intermediate and half light (ruling out dispersive) ✓. The template logic is the same one this lesson relies on for transcription — an existing strand specifying a complementary new one by base pairing.

</details>

## Connections

- **Backward:** the sequence being read is [3.3](03-03-dna-structure-replication.md)'s DNA, the product is [1.2](01-02-four-biomolecules.md)'s protein folding by the hydrophobic effect, and this lesson finally says what [3.1](03-01-mendel-monohybrid-cross.md)'s alleles physically are and why one can be recessive.
- **Forward:** [4.1](04-01-natural-selection.md) needs mutation as its source of variation, and this lesson says which mutations are likely to matter; [4.3](04-03-tree-of-life.md) uses the code's universality and sequence comparison as evidence of common descent.
- **Sideways (chemistry, go deeper):** [`biochemistry` 4.5](../../biochemistry/lessons/04-05-flow-of-genetic-information.md) treats transcription and translation as chemistry, including how the ribosome catalyses peptide-bond formation.
