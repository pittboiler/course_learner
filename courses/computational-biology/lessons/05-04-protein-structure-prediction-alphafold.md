# Computational Biology · Lesson 5.4: Structure & the AlphaFold era

> ⏱ ~15 min · Module 5: Expression, structure & networks · Builds on: [biochemistry 1.3](../../biochemistry/lessons/01-03-four-levels-protein-structure.md) and [1.4](../../biochemistry/lessons/01-04-the-folding-problem.md) (structure levels, Anfinsen, Levinthal), [3.5](03-05-profile-hmms.md) (family alignments), [information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md) (mutual information), [deep-learning 3.4](../../deep-learning/lessons/03-04-self-attention-queries-keys-values.md) (attention) · Unlocks: [5.5](05-05-biological-network-structure.md) (interaction networks)

## Why this matters

[Biochemistry 1.4](../../biochemistry/lessons/01-04-the-folding-problem.md) set up the problem. Anfinsen showed that sequence determines structure. Levinthal showed that a protein can't search its $10^{47}$ conformations, yet folds in milliseconds. For fifty years that paradox meant predicting a structure from sequence mostly failed, while experimental structures took months to years each.

In 2020 AlphaFold 2 predicted structures at close to experimental accuracy in the CASP14 blind assessment. Its database now holds predictions for over 200 million proteins, and the work shared the 2024 Nobel Prize in Chemistry. This lesson isn't a tour of the neural network. It covers the representation that made the problem learnable (the **contact map**), the evolutionary signal that fills it in (**coevolution**), and how to read a prediction's confidence and its limits.

## The idea

**A structure is a distance map.** Instead of 3D coordinates, describe a protein by the distance between every pair of residues. A **contact map** marks the pairs that sit close together, say $\text{C}_\alpha$ atoms within 8 Å. Secondary structure has signatures in it. An α-helix contacts $i$ with $i+3$ and $i+4$ (a band just off the diagonal). An antiparallel β-sheet pairs $i$ with $j$ along an **anti-diagonal**. A parallel sheet pairs along a diagonal. Unlike coordinates, a distance map doesn't change when the protein is rotated, and given enough distances the 3D structure can be rebuilt.

**Evolution has already done the experiment.** If residues $i$ and $j$ touch, say as a salt bridge between a K and an E, a mutation that turns K into E destroys the contact. Unless $j$ also flips E to K, the protein suffers. So across thousands of homologs, positions in contact **mutate together**. Build a family alignment ([3.5](03-05-profile-hmms.md)), measure which columns covary, and you have predicted contacts from sequence alone.

**But correlation chains.** If $i$ touches $j$, and $j$ touches $k$, then $i$ and $k$ covary too, without touching. Raw covariation (mutual information) finds contacts and friends-of-contacts. **Direct coupling analysis** fits a global model of all columns at once and keeps only the couplings not explained by chains — the same indirect-edge problem as networks ([5.6](05-06-inferring-networks-from-data.md)).

**AlphaFold 2 learns the whole pipeline end to end.** It takes the family MSA and builds two representations: one per MSA row and column, and one for every residue pair (an evolving distance map). Attention passes information back and forth between them ([deep-learning 3.4](../../deep-learning/lessons/03-04-self-attention-queries-keys-values.md)), so coevolution in the alignment sharpens the pair map and geometric consistency in the pair map reinterprets the alignment. A structure module then turns pair information into 3D coordinates, and the whole thing is trained on the Protein Data Bank.

**It reports its own confidence.** **pLDDT** (0–100) estimates per-residue local accuracy. **PAE** (predicted aligned error) estimates how confidently one region is placed relative to another, which matters for how domains are arranged.

## The formal version

**Contact map.** For residues $i, j$ with $\text{C}_\alpha$ (or $\text{C}_\beta$) distance $d_{ij}$,

$$C_{ij} = \begin{cases}1 & d_{ij} < 8\ \text{Å and } |i - j| \ge s\\ 0 & \text{otherwise},\end{cases}$$

with a minimum sequence separation $s$ (commonly 3 to 6) so that trivial chain neighbours are excluded. This is the [contact map](../reference.md#contact-map). *In words: a binary picture of which residues touch, ignoring those adjacent along the chain.*

**Mutual information between alignment columns.** With $f_i(a)$ the frequency of amino acid $a$ in column $i$ and $f_{ij}(a,b)$ the frequency of the pair,

$$\text{MI}_{ij} = \sum_{a,b} f_{ij}(a,b)\,\log_2\frac{f_{ij}(a,b)}{f_i(a)\,f_j(b)}.$$

This is the [column mutual information](../reference.md#column-mutual-information), in bits ([information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md)). *In words: how much knowing the residue at $i$ tells you about the residue at $j$.* It's zero for independent columns and at most $\min(H_i, H_j)$.

**Direct coupling (idea).** Fit a model $P(\text{sequence}) \propto \exp\big(\sum_i h_i(x_i) + \sum_{i<j} J_{ij}(x_i, x_j)\big)$ to the alignment, a Potts model, and rank pairs by the strength of $J_{ij}$. Couplings explain covariation *jointly*, so a chain $i$–$j$–$k$ doesn't create a large $J_{ik}$. Corrections for sequence redundancy and phylogeny are essential in practice.

**Confidence scores.**

| pLDDT | reading |
|---|---|
| above 90 | very high: backbone and most side chains reliable |
| 70–90 | confident backbone |
| 50–70 | low: treat with caution |
| below 50 | very low: often intrinsically disordered, not a structure prediction |

## Picture

![Left: a nine-residue beta hairpin, with strand 1 of residues 1 to 4 running along the bottom, a turn at residue 5, and strand 2 of residues 6 to 9 running back along the top; dashed lines join cross-strand partners 1 with 9, 2 with 8, 3 with 7 and 4 with 6. Right: its 9 by 9 contact map, with grey cells near the diagonal for chain neighbours and coral cells for contacts under 8 angstroms at least 3 residues apart. The coral cells form a band along the anti-diagonal: 1 with 8 and 9, 2 with 7, 8 and 9, 3 with 6, 7 and 8, and 4 with 7.](assets/05-04-fig1.svg)

Fold the hairpin at residue 5 and residue 1 lands across from 9, 2 across from 8, and so on. In the contact map that's a stripe running **perpendicular** to the diagonal, centred on $i + j = 10$. The stripe's direction is the strands' relative orientation; parallel strands would give a stripe running along the diagonal. A predicted contact map from coevolution looks like a noisy version of this picture: bright stripes where strands pair, and near-diagonal bands where helices wind.

## Worked examples

**Example 1 (mechanical): reading covariation.** An alignment of 8 homologs, showing two columns:

| sequence | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| column $i$ | K | K | K | K | E | E | E | E |
| column $j$ | E | E | E | E | K | K | K | K |
| column $k$ | K | K | E | E | K | K | E | E |

*Columns $i$ and $j$.* Pairs: (K,E) 4 times, (E,K) 4 times. Each column has frequencies K ½, E ½.

$$\text{MI}_{ij} = 2 \times \tfrac12 \log_2\frac{1/2}{(1/2)(1/2)} = \log_2 2 = \mathbf{1\ bit}.$$

Knowing $i$ determines $j$ completely: a charge swap preserved in every homolog, the classic signature of a salt bridge.

*Columns $i$ and $k$.* Pairs (K,K), (K,E), (E,K), (E,E) each twice. Every joint frequency is $\tfrac14 = \tfrac12 \times \tfrac12$, so every log term is 0: $\text{MI}_{ik} = \mathbf{0}$. Column $k$ is just as variable as $j$, but its variation is unrelated to $i$.

**Example 2 (why you'd care): what a confident prediction does and doesn't tell you.** A predicted structure of a 400-residue signalling protein shows pLDDT above 90 for residues 1–180 and 220–400, and below 40 for 181–219. PAE between the two well-predicted blocks is 20 Å.

- **Trust:** the fold of each domain, down to side-chain positions in their cores. It's often good enough for molecular replacement in crystallography, or for mapping disease mutations onto buried versus surface positions.
- **Don't trust:** residues 181–219 as a structure. Very low pLDDT usually marks an **intrinsically disordered linker**, and that's information too.
- **Don't trust:** how the two domains are arranged. The high PAE means their relative position is unknown, and the domains may move relative to each other in the living protein.
- **Not predicted at all:** the effect of a single point mutation on stability, alternative conformations (active versus inactive), dynamics, or binding partners and ligands the network wasn't given. AlphaFold predicts a structure consistent with the family, not the thermodynamics of one sequence.

## Watch out

- **You might read** high mutual information as a contact — **but actually** MI also arises from chains of contacts, from phylogeny (closely related sequences share many residues by descent), and from small alignments. Coevolution methods need thousands of diverse sequences and global models such as DCA to separate direct couplings.
- **You might treat** low-pLDDT regions as wrong predictions to be fixed — **but actually** they are often correctly flagged disorder. Low confidence is a prediction about the protein as well as about the model.
- **You might think** AlphaFold solved "the protein folding problem" — **but actually** it largely solved *structure prediction* for proteins with rich family alignments. *How* proteins fold (pathway, kinetics, misfolding), orphan proteins with few homologs, conformational change and many complexes remain open.

## One-liner

> Residues in contact coevolve, so a deep family alignment encodes a noisy contact map; AlphaFold learns to turn alignment covariation plus geometry into coordinates with per-residue confidence — excellent for folds, silent on dynamics, and honest when a region is disordered.

## Problems

**P1 (🟢)** Two columns of an 8-sequence alignment read K K K K E E E E and E E E K K K K K. (a) Compute the joint and marginal frequencies. (b) Compute the mutual information in bits. (c) Why is it less than 1 bit even though the columns clearly covary?

**P2 (🟡)** Classify each contact-map pattern, and say what secondary structure produces it: (a) contacts at $(i, i+3)$ and $(i, i+4)$ for residues 20–35; (b) contacts $(40, 60), (41, 59), (42, 58), (43, 57)$; (c) contacts $(70, 100), (71, 101), (72, 102), (73, 103)$. (d) In (b), roughly how long is the connecting loop?

**P3 (🔴)** Three alignment columns: $i$ contacts $j$, $j$ contacts $k$, and $i$ does not contact $k$. Suppose covariation is perfect along each contact, so $\text{MI}_{ij} = \text{MI}_{jk} = 1$ bit. (a) What is $\text{MI}_{ik}$, and why? (b) Would a contact predictor ranking by MI call $(i,k)$ a contact? (c) Explain why a model with explicit pairwise couplings can avoid this, using the idea of conditioning on $j$. (d) Name one other source of spurious covariation that has nothing to do with structure.

<details>
<summary>Solutions</summary>

**P1** (a) Pairs: (K,E) 3, (K,K) 1, (E,K) 4. Joint: $f(K,E) = 0.375$, $f(K,K) = 0.125$, $f(E,K) = 0.5$. Marginals: column 1 has K 0.5, E 0.5; column 2 has E 0.375, K 0.625.

(b) $\text{MI} = 0.375\log_2\frac{0.375}{0.5 \times 0.375} + 0.125\log_2\frac{0.125}{0.5 \times 0.625} + 0.5\log_2\frac{0.5}{0.5 \times 0.625}$
$= 0.375(1) + 0.125\log_2 0.4 + 0.5\log_2 1.6 = 0.375 - 0.165 + 0.339 = \mathbf{0.549}$ bits.

(c) One sequence (the fourth, K with K) breaks the swap. Knowing column 1 no longer determines column 2 exactly: given K, column 2 is E three times out of four. The second column is also less variable (entropy 0.95 bits rather than 1), which caps what it can share.

**P2** (a) $i$ with $i+3$ and $i+4$ along a run: an **α-helix** (3.6 residues per turn brings those residues near each other), spanning residues 20 to about 35–39.

(b) $i + j = 100$ constant as $i$ increases and $j$ decreases: an **anti-diagonal** stripe, an **antiparallel β-hairpin** or antiparallel sheet.

(c) $j - i = 30$ constant: a stripe **parallel to the diagonal**, **parallel β-strands**, connected by a crossover such as a helix.

(d) The innermost contact pair is 43–57, so the turn contains roughly residues 44–56, about **13 residues**. (The strands pair up to near the turn, so the loop is at most that long.)

**P3** (a) With perfect covariation, $x_i$ determines $x_j$, which determines $x_k$, so $x_i$ determines $x_k$: $\text{MI}_{ik} = $ **1 bit**, as large as a real contact.

(b) **Yes.** Ranking by MI can't distinguish the transitive pair from a direct one; it would predict a false contact between $i$ and $k$.

(c) Pairwise couplings $J_{ij}$, $J_{jk}$ already explain why $i$ and $k$ covary. Given $x_j$, $x_i$ and $x_k$ are independent: $x_i$ carries no extra information about $x_k$ once $j$ is known. A global model fits all couplings together, finds that $J_{ik}$ isn't needed, and leaves it near zero. It's the difference between a marginal and a conditional dependence, the same as partial correlation in [5.6](05-06-inferring-networks-from-data.md).

(d) **Phylogeny**: a clade of closely related sequences shares residues at many columns by common descent, so columns covary without any functional constraint. Also: small or unbalanced alignments, alignment errors, and shared constraints from protein–protein interfaces rather than intra-chain contacts.

</details>

## Flashback

**From Lesson 5.3 (RNA secondary structure):** Fold `CAGUAAACUG` (positions 1–10) with the Nussinov recurrence, pairs A–U, G–C, G–U, and at least 3 unpaired hairpin bases. (a) Compute $N(3,8)$, $N(2,9)$ and $N(1,10)$ along the chain of pairs closing the interval. (b) Give the dot-bracket structure. (c) Explain why the split case can't do better here.

<details>
<summary>Solution</summary>

(a) $N(3,8)$: G…C pairs, and the inside $4..7$ (U A A A) has $j - i = 3$, too short to pair: $N(3,8) = 0 + 1 = \mathbf{1}$. $N(2,9)$: A…U pairs: $N(3,8) + 1 = \mathbf{2}$. $N(1,10)$: C…G pairs: $N(2,9) + 1 = \mathbf{3}$. (The other cases give at most 2 at each step.)

(b) **`(((....)))`**: a three-pair stem, C–G, A–U and G–C, around a UAAA loop.

(c) A split puts the pairs into two independent parts. The best split is $N(1,9) + N(10,10) = 2 + 0$; every other split point does worse, because the 3-base loop minimum means a short part holds no pairs at all. So splitting gives at most 2, while nesting three pairs in one stem gives 3. It's also the only optimal structure.

</details>

## Connections

- **Backward:** the four levels of structure, Anfinsen's hypothesis and Levinthal's paradox are [biochemistry 1.3](../../biochemistry/lessons/01-03-four-levels-protein-structure.md) and [1.4](../../biochemistry/lessons/01-04-the-folding-problem.md); family alignments come from profile HMM searches ([3.5](03-05-profile-hmms.md)); mutual information is [information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md)'s; attention is [deep-learning 3.4](../../deep-learning/lessons/03-04-self-attention-queries-keys-values.md)'s.
- **Forward:** predicted structures of protein complexes supply edges for the interaction networks of [5.5](05-05-biological-network-structure.md); the direct-versus-indirect problem reappears as network inference in [5.6](05-06-inferring-networks-from-data.md).
- **Sideways:** the Potts model behind DCA is the same energy model as the Ising and Potts systems of statistical mechanics, with sequence positions as spins; reconstructing coordinates from pairwise distances is multidimensional scaling, the same eigen-decomposition idea as PCA ([machine-learning 3.2](../../machine-learning/lessons/03-02-principal-component-analysis.md)).
