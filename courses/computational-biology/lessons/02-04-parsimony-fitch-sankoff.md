# Computational Biology · Lesson 2.4: Parsimony — Fitch & Sankoff

> ⏱ ~15 min · Module 2: Phylogenetics & evolutionary models · Builds on: [2.1](02-01-multiple-sequence-alignment.md) (alignment columns as characters), [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md) (synapomorphies, long-branch attraction) · Unlocks: [2.5](02-05-substitution-models.md) (models of change), [2.6](02-06-tree-likelihood-felsenstein-pruning.md) (likelihood)

## Why this matters

Distance methods ([2.2](02-02-tree-metrics-upgma.md), [2.3](02-03-neighbor-joining.md)) squash two whole sequences into one number. Parsimony keeps the characters. It scores a tree by the **fewest changes** needed to explain every alignment column, and it gives you something distances can't: a reconstruction of **what the ancestors looked like** at every internal node.

[Evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md) explained the logic (only shared derived states group taxa) and the famous failure (long-branch attraction). This lesson supplies the algorithms. Fitch's algorithm counts changes on a fixed tree in linear time. Sankoff's generalizes it to changes with unequal costs. Both are small dynamic programs on a tree. The same recursion, with probabilities in place of counts, is Felsenstein's likelihood algorithm in [2.6](02-06-tree-likelihood-felsenstein-pruning.md).

## The idea

**Two problems with very different difficulty.**

- **Small parsimony:** given a tree, find the minimum number of changes. That's easy: one pass up the tree per site.
- **Large parsimony:** find the tree with the minimum. That's NP-hard; you search tree space ([2.7](02-07-tree-search-and-support.md)).

**Fitch's algorithm (one site, rooted binary tree).** Work from the leaves up. Each leaf's set is its observed state. At each internal node, look at its two children's sets:

- If they **overlap**, the node's set is the overlap, and no change is needed here.
- If they're **disjoint**, the node's set is the union, and **one change** is charged.

The number of unions is the site's parsimony length. Sum over sites for the tree's length.

Why does this work? A node's set holds exactly the states that minimize the cost of its subtree. If the children can agree on a state, choosing it costs nothing extra. If they can't, some branch below this node must carry a change, and any state from either child's set achieves the minimum.

**Sankoff's algorithm** handles unequal costs, for example transitions (A↔G, C↔T) cheaper than transversions. Instead of a set, each node stores a **cost for every possible state**: the cheapest way to explain its subtree given that state. Fitch is the special case where every change costs 1.

**Informative sites.** A column can only prefer one tree over another if at least two states each appear in at least two taxa. An invariant column costs 0 on every tree. A column with one odd taxon out costs 1 on every tree. Neither can discriminate.

## The formal version

**Fitch's algorithm.** For a rooted binary tree and one character, assign each node $v$ a set $S_v$ and cost $c_v$:

$$\text{leaf: } S_v = \{x_v\},\ c_v = 0$$

$$\text{internal, children } a, b:\quad S_v = \begin{cases} S_a \cap S_b & \text{if non-empty},\\ S_a \cup S_b & \text{otherwise},\end{cases}$$

$$c_v = c_a + c_b + [\,S_a \cap S_b = \varnothing\,].$$

This is [Fitch's algorithm](../reference.md#fitch-algorithm). The site's length is $c_{\text{root}}$, and the tree's parsimony length is $\sum_{\text{sites}} c_{\text{root}}$. *In words: intersect if you can, union and pay one if you can't.* Time is $O(n)$ per site for $n$ taxa. The length doesn't depend on where the root is placed, so an unrooted tree may be rooted anywhere.

**Ancestral states** (a second, top-down pass). Pick any state in $S_{\text{root}}$. For each child, keep the parent's state if it's in the child's set; otherwise pick any state from the child's set. Every choice made this way attains the minimum, and different choices are **equally parsimonious reconstructions**.

**Sankoff's algorithm.** With change costs $c(i,j)$ (and $c(i,i) = 0$), each node stores a vector $S_v(i)$:

$$\text{leaf: } S_v(i) = \begin{cases}0 & i = x_v\\ \infty & \text{otherwise}\end{cases}$$

$$S_v(i) = \min_j\big[c(i,j) + S_a(j)\big] + \min_k\big[c(i,k) + S_b(k)\big].$$

This is [Sankoff's algorithm](../reference.md#sankoff-algorithm). The site's weighted length is $\min_i S_{\text{root}}(i)$. *In words: for each possible ancestral state, the cheapest explanation of the left subtree plus the cheapest explanation of the right.* Time is $O(n\,k^2)$ per site for an alphabet of $k$ states.

**Informative site.** A site is [parsimony-informative](../reference.md#parsimony-informative-site) if at least two states each occur in at least two taxa. **Homoplasy** is the excess of a site's length over its minimum conceivable length (number of distinct states minus 1): changes forced by the tree, not by the number of states.

## Picture

![Two rooted four-taxon trees for one site where taxa A and C show A and taxa B and D show G. In the tree pairing A with B and C with D, both internal nodes get the union set A-or-G, marked as two changes, and the root intersects to A-or-G: length 2. In the tree pairing A with C and B with D, the internal nodes get the intersections A and G, and only the root needs a union: length 1.](assets/02-04-fig1.svg)

Same column, two trees. On the left, each cherry disagrees internally, so each needs a change (coral). Two changes in total, and the root can be either state. On the right, each cherry agrees internally, and a single change on the branch between them explains everything. This column **prefers the right-hand tree by one step**. That's all a parsimony "vote" is.

## Worked examples

**Example 1 (mechanical): score three topologies.** Four taxa, six aligned sites:

```
        site  1 2 3 4 5 6
taxon A       A C G T A C
taxon B       A C G A G C
taxon C       G T G A A T
taxon D       G T A A G T
```

Fitch on the tree AB | CD (rooted as ((A,B),(C,D))):

| site | leaves A, B, C, D | node AB | node CD | root | length |
|---|---|---|---|---|---|
| 1 | A A G G | {A} | {G} | {A,G} union | 1 |
| 2 | C C T T | {C} | {T} | {C,T} union | 1 |
| 3 | G G G A | {G} | {G,A} union | {G} | 1 |
| 4 | T A A A | {T,A} union | {A} | {A} | 1 |
| 5 | A G A G | {A,G} union | {A,G} union | {A,G} | 2 |
| 6 | C C T T | {C} | {T} | {C,T} union | 1 |

**Length 7.** Running the same on the other two topologies gives

| site | 1 | 2 | 3 | 4 | 5 | 6 | total |
|---|---|---|---|---|---|---|---|
| AB \| CD | 1 | 1 | 1 | 1 | 2 | 1 | **7** |
| AC \| BD | 2 | 2 | 1 | 1 | 1 | 2 | 9 |
| AD \| BC | 2 | 2 | 1 | 1 | 2 | 2 | 10 |

Sites 3 and 4 are **uninformative** (one odd taxon each) and cost 1 on every tree. Sites 1, 2 and 6 support AB | CD; site 5 supports AC | BD. The most parsimonious tree is **AB | CD**. Site 5 is homoplasy on that tree: its two states need two changes.

*Ancestral states for site 1 on AB | CD:* the root set is {A, G}. Choose A. Node AB's set {A} contains A, so it keeps A. Node CD's set {G} doesn't, so it takes G, and the single change sits on the branch from the root to CD. Choosing G at the root instead puts the change on the other side. Both reconstructions are equally parsimonious; parsimony can't tell you which way the change went without an outgroup.

**Example 2 (why you'd care): Fitch ties, Sankoff doesn't.** Transitions (A↔G, C↔T) are about twice as common as transversions in real DNA. Score transitions 1 and transversions 2. Take the tree ((A,B),(C,D)) and two sites:

- site $\alpha$: A = A, B = G, C = C, D = T;
- site $\beta$: A = A, B = C, C = G, D = T.

Fitch gives **3 changes for both** (four different states need at least three changes).

Sankoff on site $\alpha$. Node AB holds $c(i,A) + c(i,G)$ for each state $i$: A gives $0 + 1 = 1$, G gives 1, C gives $2 + 2 = 4$, T gives 4. Node CD holds $c(i,C) + c(i,T)$: A gives 4, G gives 4, C gives 1, T gives 1. At the root, for $i = A$: $\min_j[c(A,j) + S_{AB}(j)] = 1$ (take $j = A$) and $\min_j[c(A,j) + S_{CD}(j)] = \min(0+4,\ 1+4,\ 2+1,\ 2+1) = 3$, total 4. Every root state gives 4, so **site $\alpha$ costs 4**: two transitions inside the cherries plus one transversion between them.

Site $\beta$ pairs A with C and G with T inside the cherries, both transversions, and **costs 5**. Weighted parsimony now distinguishes two sites that plain parsimony treats identically. It is a first step toward what substitution models do properly in [2.5](02-05-substitution-models.md).

## Watch out

- **You might count** a union at the root as optional — **but actually** every union, root included, is a forced change. The length is the total number of unions in the upward pass; the top-down pass only chooses *where* the changes go.
- **You might trust** the ancestral states from one run as *the* ancestor — **but actually** Fitch sets usually admit several equally parsimonious reconstructions, and the choice changes which branches carry the changes. Report the ambiguity, or use likelihood-based reconstruction, which gives each state a probability.
- **You might add** uninformative sites and expect support to grow — **but actually** they add the same constant to every tree. The ranking of trees depends only on the informative sites. Conversely, adding *fast-evolving* informative sites can make parsimony more confidently wrong: long-branch attraction ([evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)).

## One-liner

> Fitch's algorithm scores a tree site by site by intersecting children's state sets where it can and charging one change for every union; Sankoff's does the same with a cost for every state, and neither can see anything a non-informative site says.

## Problems

**P1 (🟢)** Taxa P, Q, R, S, five sites:

```
        site  1 2 3 4 5
taxon P       A T G C A
taxon Q       A C G T A
taxon R       G C A T G
taxon S       G T A C C
```

Using Fitch, score the tree PQ | RS (rooted as ((P,Q),(R,S))). Show the sets at nodes PQ, RS and the root for each site, and give the total length.

**P2 (🟡)** For the same data: (a) which sites are parsimony-informative, and which split does each support? (b) Without running Fitch again, give the lengths of PR | QS and PS | QR, and explain how you got them. (c) What does the result tell you, and what extra data would help most?

**P3 (🔴)** Weighted parsimony with transitions (A↔G, C↔T) cost 1 and transversions cost 2. A site has P = A, Q = C, R = G, S = G. (a) On ((P,Q),(R,S)), compute Sankoff's vectors at nodes PQ, RS and the root, and the site's weighted length. (b) Reconstruct one optimal set of ancestral states and name the change on each branch. (c) What is the Fitch length of this site, and why does it differ from the weighted length?

<details>
<summary>Solutions</summary>

**P1**

| site | P Q R S | node PQ | node RS | root | length |
|---|---|---|---|---|---|
| 1 | A A G G | {A} | {G} | {A,G} union | 1 |
| 2 | T C C T | {T,C} union | {C,T} union | {C,T} | 2 |
| 3 | G G A A | {G} | {A} | {A,G} union | 1 |
| 4 | C T T C | {C,T} union | {T,C} union | {C,T} | 2 |
| 5 | A A G C | {A} | {G,C} union | {A,G,C} union | 2 |

**Total length 8.**

**P2** (a) Site 1 (AAGG) and site 3 (GGAA) are informative and support **PQ | RS**. Site 2 (TCCT) and site 4 (CTTC) are informative and support **PS | QR**. Site 5 (AAGC) is **not** informative: only A appears twice.

(b) Each informative site costs 1 on the tree it supports and 2 on the other two. Site 5, uninformative with three states, costs 2 on every tree. So PR | QS $= 2 + 2 + 2 + 2 + 2 = \mathbf{10}$ and PS | QR $= 2 + 1 + 2 + 1 + 2 = \mathbf{8}$.

(c) PQ | RS and PS | QR **tie at 8**: two informative sites each, in direct conflict, so at least one pair of them is homoplastic. Parsimony can't decide. More informative sites would help most. Failing that, a model-based method ([2.6](02-06-tree-likelihood-felsenstein-pruning.md)) can break the tie, because it uses branch lengths and rates: a conflicting pair of sites is more easily explained as repeated change on long branches than on short ones, which parsimony has no way to express.

**P3** (a) Node PQ: $c(i,A) + c(i,C)$. A: $0 + 2 = 2$; C: $2 + 0 = 2$; G: $1 + 2 = 3$; T: $2 + 1 = 3$. So $(A,C,G,T) = (2, 2, 3, 3)$.

Node RS: $c(i,G) + c(i,G)$. A: 2; C: 4; G: 0; T: 4. So $(2, 4, 0, 4)$.

Root: $S(i) = \min_j[c(i,j) + S_{PQ}(j)] + \min_j[c(i,j) + S_{RS}(j)]$.
- A: $\min(0+2,\ 2+2,\ 1+3,\ 2+3) = 2$ plus $\min(0+2,\ 2+4,\ 1+0,\ 2+4) = 1$, total **3**.
- C: $\min(2+2,\ 0+2,\ 2+3,\ 1+3) = 2$ plus $\min(2+2,\ 0+4,\ 2+0,\ 1+4) = 2$, total **4**.
- G: $\min(1+2,\ 2+2,\ 0+3,\ 2+3) = 3$ plus $\min(1+2,\ 2+4,\ 0+0,\ 2+4) = 0$, total **3**.
- T: $\min(2+2,\ 1+2,\ 2+3,\ 0+3) = 3$ plus $\min(2+2,\ 1+4,\ 2+0,\ 0+4) = 2$, total **5**.

Weighted length $= \min = \mathbf{3}$ (root A or G).

(b) *Accept criterion: any reconstruction totalling 3.* Root G: node RS = G (cost 0 below it); node PQ takes A (the G→A branch is a transition, 1); P = A (no change), Q = C (A→C, a transversion, 2). Total $1 + 2 = 3$. (Root A works too: RS = G via A→G on the root–RS branch, cost 1, and Q = C via A→C, cost 2.)

(c) Fitch length **2** (node PQ is a union, node RS is {G}, the root is a union). Fitch counts two changes of any kind. Sankoff sees that one of them must be a transversion — no reconstruction explains C in Q with transitions only — and charges it double.

</details>

## Flashback

**From Lesson 2.1 (Multiple sequence alignment):** Compute the sum-of-pairs score of this protein MSA using BLOSUM62 and a linear gap penalty of $-8$ (gap–gap scores 0):

```
W K - D E
W R N D E
Y K - E E
```

BLOSUM62 entries needed: W-W 11, W-Y 2, K-K 5, K-R 2, D-D 6, D-E 2, E-E 5. Which single column contributes most negatively, and what would an aligner consider doing about it?

<details>
<summary>Solution</summary>

| column | letters | pair scores | total |
|---|---|---|---|
| 1 | W, W, Y | $11, 2, 2$ | 15 |
| 2 | K, R, K | $2, 5, 2$ | 9 |
| 3 | −, N, − | $-8, 0, -8$ | −16 |
| 4 | D, D, E | $6, 2, 2$ | 10 |
| 5 | E, E, E | $5, 5, 5$ | 15 |

$\text{SP} = 15 + 9 - 16 + 10 + 15 = \mathbf{33}$.

Column 3 contributes $-16$: one residue (N) in row 2 against gaps in two rows, charged twice. Removing that insertion isn't an option, since N is real sequence. But an affine-gap aligner ([1.5](01-05-affine-gaps-gotoh.md)) might prefer to merge it with a neighbouring gap. In a large alignment, a column that is mostly gaps is a candidate for trimming before tree building, because its positional homology is weakly supported.

</details>

## Connections

- **Backward:** the characters are [2.1](02-01-multiple-sequence-alignment.md)'s columns; synapomorphy, homoplasy and long-branch attraction are [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)'s; small parsimony is a DP on a tree, the tree-shaped cousin of [1.3](01-03-needleman-wunsch-global-alignment.md)'s grid DP.
- **Forward:** [2.5](02-05-substitution-models.md) replaces fixed costs with rates and branch lengths; [2.6](02-06-tree-likelihood-felsenstein-pruning.md)'s pruning algorithm is Sankoff with $\min$ and $+$ replaced by $\sum$ and $\times$; large parsimony's search over topologies is [2.7](02-07-tree-search-and-support.md).
- **Sideways:** Sankoff's recursion is a min-plus (tropical) dynamic program on a tree, the same algebra as shortest paths in [algorithms 3.4](../../algorithms/lessons/03-04-bellman-ford-and-floyd-warshall.md); swapping to sum-product turns it into belief propagation on a tree-structured graphical model, exactly what [2.6](02-06-tree-likelihood-felsenstein-pruning.md) does.
