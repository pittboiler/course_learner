# General Biology · Lesson 3.3: DNA structure & replication

> ⏱ ~15 min · Module 3: Genetics & the central dogma · Builds on: [1.2](01-02-four-biomolecules.md), [2.4](02-04-the-cell-cycle.md) · Unlocks: 3.4 (the central dogma)

## Why this matters

Mendel inferred that hereditary factors exist and behave like particles. This lesson says what they physically *are*. And the structure, once seen, explains the function so immediately that Watson and Crick could write in 1953: "It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism."

That is the rarest thing in science — a structure that gives away its own mechanism at a glance. It is worth understanding why the pairing does that.

## The idea

DNA is two strands wound around each other. Each strand is a chain of nucleotides ([1.2](01-02-four-biomolecules.md)) — sugar, phosphate, base — with the sugars and phosphates forming a monotonous backbone and the bases sticking inward.

**The information is in the base order, and nowhere else.** The backbone is identical along the whole length; it carries no information at all. Only the sequence of A, T, G and C varies, which is why "reading DNA" means reading that sequence.

**The two strands are complementary, not identical.** A always pairs with T, G always with C. The pairing is not arbitrary: A and G are large double-ring bases (purines), T and C are small single-ring ones (pyrimidines), and pairing one large with one small keeps the helix a constant width. Beyond size, the hydrogen-bond donors and acceptors line up correctly only in those two combinations.

**And that is why the structure gives away the mechanism.** If A always pairs with T and G with C, then **each strand completely determines the other**. Separate the strands and each one is a template from which the missing partner can be rebuilt. The molecule that stores the information also contains, twice over, the instructions for copying it.

**Copying is semiconservative.** Unzip the double helix, build a new partner against each old strand, and you get two double helices — each with **one original strand and one new one**. Not two brand-new copies, and not one original plus one entirely new molecule. Every DNA molecule in your body contains a strand that is physically older than you are, and some carry strands inherited intact from your parents' gametes.

## The formal version

**Nucleotide structure.** Three parts: a deoxyribose sugar, a phosphate group, and one nitrogenous base.

| Class | Bases | Structure |
|---|---|---|
| **Purines** | Adenine, Guanine | double ring, larger |
| **Pyrimidines** | Thymine, Cytosine | single ring, smaller |

**Base pairing:**

$$\ce{A <=> T}\ \text{(2 hydrogen bonds)}, \qquad \ce{G <=> C}\ \text{(3 hydrogen bonds)}$$

*In words: always a purine with a pyrimidine, which keeps the helix a uniform 2 nm wide.* The extra hydrogen bond makes G–C the stronger pair — so **GC-rich DNA needs more heat to separate**, a fact used constantly in the laboratory and reflected in the genomes of heat-loving bacteria. See [base pairing](../reference.md#base-pairing).

**Chargaff's rules**, measured before the structure was known and explained instantly by it: in any organism's DNA, $\%A = \%T$ and $\%G = \%C$. That is a direct consequence of pairing — every A has a T opposite it. Note it says nothing about the A:G ratio, which varies widely between species.

**Antiparallel strands.** Each strand has a direction, set by which carbon of the sugar the next phosphate attaches to: one end is called 5′, the other 3′. The two strands run **opposite ways** — where one runs 5′ to 3′, its partner runs 3′ to 5′.

This is not bookkeeping pedantry, because of one hard constraint: **DNA polymerase can only add nucleotides to a 3′ end.** Synthesis runs 5′ to 3′, always, with no exceptions. That single restriction forces the awkward asymmetry in replication described below.

**Replication.**

1. **Unwind.** Helicase separates the strands at a replication fork, breaking the hydrogen bonds (not the covalent backbone).
2. **Prime.** Primase lays down a short RNA primer, because polymerase can extend an existing chain but cannot start one.
3. **Extend.** DNA polymerase adds nucleotides complementary to the template, 5′ to 3′.
4. **Join and finish.** Primers are replaced by DNA and ligase seals the remaining nicks.

**The leading and lagging strand problem.** Because the strands are antiparallel but the fork opens in one direction:

- The **leading strand** runs in the convenient direction and is synthesized continuously, following the fork.
- The **lagging strand** runs the wrong way. It is built **backwards, in short pieces** (Okazaki fragments), each started afresh as the fork exposes more template, then stitched together by ligase.

*In words: one strand is copied smoothly and the other is copied in reverse, in chunks, because the enzyme only works in one direction.* This is a genuine kludge, and it exists purely because of the 5′-to-3′ restriction.

**Accuracy — three layers.**

| Mechanism | Error rate after |
|---|---|
| Base pairing alone | 1 in $10^4$ to $10^5$ |
| Polymerase **proofreading** (it reverses and excises a wrong base) | 1 in $10^7$ |
| **Mismatch repair** (a separate system scans afterwards) | **1 in $10^9$ to $10^{10}$** |

*In words: three independent checks, each catching most of what the previous one missed.* At 1 in $10^9$, copying the three-billion-base human genome yields on the order of a few errors per division — which is the residual mutation rate, and therefore the ultimate source of the variation evolution runs on ([4.1](04-01-natural-selection.md)).

**Why this matters for [2.4](02-04-the-cell-cycle.md):** all of this happens in S phase, and the G2 checkpoint's job is to verify it finished correctly before the cell commits to dividing.

## Picture

![A DNA ladder showing antiparallel strands with A pairing to T by two hydrogen bonds and G to C by three, beside a diagram of semiconservative replication in which the parent duplex separates and each old strand templates a new partner, so both daughters contain one original and one newly built strand](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — apply Chargaff).** A DNA sample is 22 percent adenine. Give the percentages of the other three bases.

By base pairing, $\%T = \%A = 22$. Those two together account for 44 percent, leaving 56 percent split evenly between G and C:

$$\%G = \%C = \frac{100 - 44}{2} = \mathbf{28\ \text{percent each}}.$$

So: A 22, T 22, G 28, C 28.

*Check.* The total is 100 ✓, and Chargaff's rules hold ✓. Note what you *cannot* determine: the sequence. Composition is a much weaker constraint than order — a point that echoes [1.2](01-02-four-biomolecules.md)'s P2, where identical amino-acid composition gave different proteins.

**Example 2 (why you'd care — the experiment that proved it).** Three models of replication were on the table in 1957:

- **Conservative** — the parent duplex stays intact and an entirely new one is made.
- **Semiconservative** — each daughter gets one old and one new strand.
- **Dispersive** — new and old DNA are interspersed along both strands.

Meselson and Stahl distinguished them with density. They grew bacteria for many generations in heavy nitrogen ($^{15}\mathrm{N}$) so all their DNA was heavy, then switched them to normal $^{14}\mathrm{N}$ and sampled after each division, spinning the DNA in a density gradient.

| Generation | Conservative predicts | Semiconservative predicts | Dispersive predicts | **Observed** |
|---|---|---|---|---|
| 0 | all heavy | all heavy | all heavy | all heavy |
| 1 | half heavy, half light | **all intermediate** | all intermediate | **all intermediate** |
| 2 | 1/4 heavy, 3/4 light | **half intermediate, half light** | all intermediate, less dense | **half intermediate, half light** |

**Generation 1 eliminated conservative** — there was no heavy band at all, which conservative replication requires. **Generation 2 eliminated dispersive** — dispersive predicts a single band getting progressively lighter, never two distinct bands.

Only semiconservative survives both rounds, and it has been called the most beautiful experiment in biology for exactly that reason: **two measurements, three hypotheses, one survivor.** Note the design principle worth stealing — the discriminating power came from the *second* generation, because generation 1 alone could not separate semiconservative from dispersive.

## Watch out

- **You might think the two strands are identical.** They are **complementary**. A strand reading ATGC pairs with TACG — related by a rule, not a copy.
- **You might forget the strands are antiparallel.** It is what forces the leading/lagging asymmetry. If both strands ran the same way, replication would be far simpler and Okazaki fragments would not exist.
- **You might think replication breaks the covalent backbone.** Unwinding breaks **hydrogen bonds** between the paired bases. The sugar-phosphate backbones stay intact — which is exactly why an old strand can survive indefinitely as a template.
- **You might read Chargaff's rules as saying all four bases are equal.** They say $A = T$ and $G = C$ only. Genomes vary widely in GC content — from about 25 percent to 75 percent across bacteria.
- **You might think a mutation is always a copying error.** Most are, but DNA is also damaged directly by ultraviolet light, radiation and chemicals, between divisions. p53 ([2.4](02-04-the-cell-cycle.md)) watches for both kinds.

## One-liner

> Complementary base pairing means each strand specifies the other, so unzipping the helix yields two templates — and copying is semiconservative, with every daughter keeping one original strand.

## Problems

**P1 (🟢)** A DNA molecule is 30 percent guanine. Give the percentages of cytosine, adenine and thymine.

**P2 (🟡)** Write the complementary strand for 5′-ATGCCGTA-3′, labelling both ends correctly. Explain why the direction labels matter.

**P3 (🔴)** A bacterium with all-heavy ($^{15}\mathrm{N}$) DNA is moved to light medium and allowed three divisions. Give the fraction of DNA molecules that are intermediate density and the fraction that are fully light. Explain why no molecule is ever fully heavy again.

<details>
<summary>Solutions</summary>

**P1** By base pairing, $\%C = \%G = 30$. Together those account for 60 percent, leaving 40 percent for A and T, split evenly:

$$\%A = \%T = \frac{100-60}{2} = \mathbf{20\ \text{percent each}}.$$

So: G 30, C 30, A 20, T 20.

*Check.* Sums to 100 ✓ and both Chargaff rules hold ✓. This DNA is 60 percent GC, so it is comparatively heat-stable — three hydrogen bonds per pair over 60 percent of its length rather than two.

**P2** Reading the given strand and pairing each base — A with T, T with A, G with C, C with G — and remembering the partner runs **antiparallel**:

$$\text{given:}\quad 5'\text{-A T G C C G T A-}3'$$
$$\text{complement:}\quad 3'\text{-T A C G G C A T-}5'$$

Conventionally rewritten 5′ to 3′, the complement reads **5′-TACGGCAT-3′**.

**Why the labels matter — three reasons:**

1. **Sequences are conventionally written 5′ to 3′.** Without labels, "TACGGCAT" is ambiguous: read the other way it is TACGGCAT reversed, a different molecule.
2. **DNA polymerase only synthesizes 5′ to 3′.** Which end is which determines the direction the enzyme can travel, and therefore which strand is leading and which lagging.
3. **Genes have direction.** Transcription reads a template strand in a specific direction ([3.4](03-04-central-dogma.md)), so the same base sequence means different things depending on orientation.

*Check.* Reversing and complementing the answer returns the original ✓ — the operation is its own inverse, which is the formal statement of "each strand determines the other."

**P3** Track the **strands**, not the molecules — that is what makes this straightforward.

Start: 1 molecule, 2 heavy strands. Every subsequent round conserves all existing strands and adds an equal number of new light ones.

| Generation | Molecules | Heavy strands | Light strands |
|---|---|---|---|
| 0 | 1 | 2 | 0 |
| 1 | 2 | 2 | 2 |
| 2 | 4 | 2 | 6 |
| 3 | **8** | **2** | **14** |

**The two original heavy strands are never destroyed** — they are conserved and passed along, one per molecule. So after three divisions exactly **2 molecules** contain a heavy strand (making them intermediate density), and the remaining **6** are entirely light.

$$\text{intermediate} = \frac{2}{8} = \mathbf{25\ \text{percent}}, \qquad \text{fully light} = \frac{6}{8} = \mathbf{75\ \text{percent}}.$$

**Why nothing is ever fully heavy again:** a fully heavy molecule requires **two** heavy strands in the same duplex. There are only two heavy strands in existence, and at generation 1 they were separated into different daughter molecules. Since replication never brings two old strands back together — each old strand is always paired with a freshly made light one — the two originals can never reunite.

*Check.* The general formula: after $n$ generations there are $2^n$ molecules and always exactly 2 heavy strands, so the intermediate fraction is $2/2^n = 2^{1-n}$. At $n=1$ that gives 100 percent intermediate ✓ (matching Meselson–Stahl generation 1), at $n=2$ it gives 50 percent ✓, and at $n=3$, 25 percent ✓. The fraction halves each generation and never reaches zero — those two original strands persist indefinitely, diluted but never destroyed.

</details>

## Flashback

**From Lesson 1.2 (The four biomolecules):** Name the monomer of nucleic acids and its three components, and give the two differences between DNA and RNA.

<details>
<summary>Solution</summary>

The monomer is a **nucleotide**, with three parts:

1. a **five-carbon sugar**,
2. a **phosphate group**, and
3. a **nitrogenous base**.

**DNA versus RNA** differs in two of those three, plus structure:

| | DNA | RNA |
|---|---|---|
| Sugar | **deoxy**ribose (no $\ce{-OH}$ at the 2′ carbon) | ribose |
| Bases | A, T, G, C | A, **U** (uracil), G, C |
| Strands | double helix | usually single |

*Check.* Both differences serve stability. The missing 2′ hydroxyl makes DNA far less prone to self-cleavage than RNA — which is why the long-term archive is DNA and the disposable working copy is RNA ✓. Thymine over uracil helps too: cytosine spontaneously deaminates to uracil, so a repair system that treats *any* uracil in DNA as damage can catch those events — an error-correction trick that would be impossible if uracil were a legitimate DNA base.

</details>

## Connections

- **Backward:** nucleic acids were introduced as one of [1.2](01-02-four-biomolecules.md)'s four families; replication is what S phase of [2.4](02-04-the-cell-cycle.md) actually does, and the G2 checkpoint verifies it; hydrogen bonds are [1.1](01-01-chemistry-of-life.md)'s weak-but-many force doing exactly the job it is suited to.
- **Forward:** [3.4](03-04-central-dogma.md) reads this sequence out into protein and locates where mutations act; [4.3](04-03-tree-of-life.md) compares sequences between species to reconstruct the tree of life.
- **Sideways (chemistry, go deeper):** [`biochemistry` 4.4](../../biochemistry/lessons/04-04-nucleic-acids-dna-rna-structure.md) treats nucleic-acid structure with real chemistry, including why the helix has the geometry it does.
