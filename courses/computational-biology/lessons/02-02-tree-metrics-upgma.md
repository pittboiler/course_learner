# Computational Biology · Lesson 2.2: Tree metrics & UPGMA

> ⏱ ~15 min · Module 2: Phylogenetics & evolutionary models · Builds on: [2.1](02-01-multiple-sequence-alignment.md) (guide trees), [machine-learning 3.4](../../machine-learning/lessons/03-04-hierarchical-clustering.md) (average linkage), [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md) (the molecular clock) · Unlocks: [2.3](02-03-neighbor-joining.md) (neighbor-joining)

## Why this matters

The fastest way to a tree is to boil each pair of sequences down to one number, a distance, and cluster. Progressive aligners build their guide trees this way ([2.1](02-01-multiple-sequence-alignment.md)), and so do quick-look phylogenies of thousands of sequences.

But when can a table of distances be a tree at all? And when does clustering recover the *right* one? There are two precise answers, the three-point and four-point conditions, and they tell you exactly when the simplest method, UPGMA, can be trusted. Its failure has a biological cause you've already met: lineages evolve at different rates ([evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)).

## The idea

**A tree with branch lengths defines distances.** The distance between two leaves is the total branch length on the path between them. A distance matrix that arises this way is called **additive** (a tree metric). Real matrices are only approximately additive, because distances are estimated from finite sequences.

**If evolution ran on a clock, the tree would be rooted with every leaf the same distance from the root.** Such a matrix is **ultrametric**. It has a striking property: for any three leaves, the two largest of their three pairwise distances are equal. The two leaves that split most recently are closer to each other, and both are equally far from the third.

**UPGMA** (Unweighted Pair Group Method with Arithmetic mean) is agglomerative clustering with average linkage, read as a clock tree:

1. Find the closest pair of clusters, and join them under a new node at **height = half their distance**.
2. Replace the pair with the merged cluster. Its distance to every other cluster is the size-weighted average of the two old distances.
3. Repeat until one cluster remains.

If the data are ultrametric, UPGMA returns exactly the right rooted tree. If lineages evolve at different rates, the closest pair need not be sister taxa. Two slowly evolving lineages look similar *because neither has changed much*, not because they share a recent ancestor.

## The formal version

**Additive (tree) metric.** $D$ on leaf set $S$ is additive if there is a tree with non-negative edge lengths whose leaf-to-leaf path lengths equal $D$. The [four-point condition](../reference.md#four-point-condition) (Buneman, 1971) characterizes this: $D$ is additive iff for every four leaves $i,j,k,l$, among the three sums

$$D_{ij} + D_{kl}, \qquad D_{ik} + D_{jl}, \qquad D_{il} + D_{jk},$$

the **two largest are equal**. *In words: in a four-leaf tree with split $ij \mid kl$, the two "crossing" sums both traverse the internal edge twice and are equal; the "sister" sum doesn't traverse it and is smaller by twice its length.* The smallest sum identifies the split.

**Ultrametric.** $D$ is [ultrametric](../reference.md#ultrametric) iff for every three leaves, the two largest of $D_{ij}, D_{ik}, D_{jk}$ are equal (the **three-point condition**). Equivalently, $D$ comes from a rooted tree whose leaves are all at the same height. Every ultrametric is additive, but not conversely.

**UPGMA.** Start with singleton clusters, sizes $|C| = 1$, heights 0. Repeat:

$$(A, B) = \arg\min_{A \ne B} D_{AB}, \qquad h(A \cup B) = \tfrac12 D_{AB},$$

$$D_{(A\cup B),\,K} = \frac{|A|\,D_{AK} + |B|\,D_{BK}}{|A| + |B|}\quad\text{for every other cluster } K.$$

The branch from the new node down to $A$ has length $h(A\cup B) - h(A)$. This is [UPGMA](../reference.md#upgma). *In words: merge the closest groups, place the merge at half their distance, and let the new group inherit the average distance of its members.* Each merge scans the matrix, so the simple version is $\Theta(n^3)$ for $n$ taxa.

**Guarantee.** If $D$ is ultrametric, UPGMA returns the generating rooted tree and its branch lengths. If $D$ is additive but not ultrametric, it can return the wrong topology (Example 2).

## Picture

![Left: a UPGMA dendrogram for five taxa A to E, with A and B joined at height 1, D and E at height 2, C joining the A-B cluster at height 3.25, and the two groups meeting at the root at height 4.33. Right: an unrooted four-taxon tree with the internal edge of length 1 separating A and B from C and D; A and C sit on short branches of length 1, while B and D sit on long branches of length 4. Text notes that A and C are the closest pair at distance 3, so UPGMA's first merge wrongly joins A with C.](assets/02-02-fig1.svg)

On the left, heights are literally half the joining distances, so the tree is drawn as if on a clock. On the right is the failure case. A and C are on short branches, so they're only $1 + 1 + 1 = 3$ apart, while the true sisters A and B are $1 + 4 = 5$ apart. UPGMA has no notion of "B changed a lot", so it joins A with C first, and every later step inherits the mistake.

## Worked examples

**Example 1 (mechanical): UPGMA on noisy data.** Five taxa:

| | A | B | C | D | E |
|---|---|---|---|---|---|
| **A** | 0 | 2 | 6 | 9 | 9 |
| **B** | | 0 | 7 | 8 | 9 |
| **C** | | | 0 | 8 | 9 |
| **D** | | | | 0 | 4 |
| **E** | | | | | 0 |

*Step 1.* Smallest entry $D_{AB} = 2$. Join at height 1. New distances (sizes 1 and 1, a plain average):
$D_{AB,C} = (6 + 7)/2 = 6.5$, $D_{AB,D} = (9 + 8)/2 = 8.5$, $D_{AB,E} = (9 + 9)/2 = 9$.

*Step 2.* Remaining entries: $D_{AB,C} = 6.5$, $D_{AB,D} = 8.5$, $D_{AB,E} = 9$, $D_{CD} = 8$, $D_{CE} = 9$, $D_{DE} = 4$. Smallest is $D_{DE} = 4$. Join at height 2. $D_{DE,C} = (8 + 9)/2 = 8.5$ and $D_{DE,AB} = (8.5 + 9)/2 = 8.75$.

*Step 3.* Remaining: $D_{AB,C} = 6.5$, $D_{AB,DE} = 8.75$, $D_{C,DE} = 8.5$. Join C with AB at height $3.25$. The new cluster has size 3, so its distance to DE is weighted:

$$D_{ABC,\,DE} = \frac{2 \times 8.75 + 1 \times 8.5}{3} = \frac{26}{3} \approx 8.67.$$

*Step 4.* Join at the root, height $13/3 \approx 4.33$.

In Newick notation, with branch lengths as height differences:

$$\big((\text{D}:2,\ \text{E}:2):2.33,\ (\text{C}:3.25,\ (\text{A}:1,\ \text{B}:1):2.25):1.08\big).$$

The size weighting in step 3 matters. An unweighted average of 8.75 and 8.5 would give 8.625, treating the pair AB as if it were one taxon.

**Example 2 (why you'd care): rates differ, UPGMA fails.** The true tree is unrooted with split AB | CD, pendant branches A = 1, B = 4, C = 1, D = 4, and internal edge 1. Its path lengths are

| | A | B | C | D |
|---|---|---|---|---|
| **A** | 0 | 5 | 3 | 6 |
| **B** | | 0 | 6 | 9 |
| **C** | | | 0 | 5 |
| **D** | | | | 0 |

*Is it a tree metric?* Four-point sums: $D_{AB} + D_{CD} = 5 + 5 = 10$, $D_{AC} + D_{BD} = 3 + 9 = 12$, $D_{AD} + D_{BC} = 6 + 6 = 12$. The two largest are equal, so **yes, additive**, and the smallest sum picks out the split AB | CD. The internal edge is $(12 - 10)/2 = 1$, as it should be.

*Is it ultrametric?* For A, B, C the distances are 5, 3, 6, and the two largest (5 and 6) are unequal. **No clock.**

*UPGMA:* the smallest entry is $D_{AC} = 3$, so it joins A and C first. The cluster AC is then 5.5 from both B and D, a tie, but however the tie is broken the output contains the clade (A, C). **Wrong topology.** The four-point sums contained the right answer all along. [2.3](02-03-neighbor-joining.md) turns them into an algorithm that finds it.

## Watch out

- **You might think** "closest pair" means "sister taxa" — **but actually** that holds only under a clock. With unequal rates, slowly evolving lineages are close because neither changed, not because they split recently.
- **You might forget** the size weighting when merging clusters — **but actually** UPGMA averages over all *leaf* pairs between clusters. A cluster of three members must count three times as much as a singleton. Skipping the weights gives WPGMA, a different method with different trees.
- **You might read** UPGMA heights as dates — **but actually** they are half-distances in substitutions per site. Turning them into years needs a calibrated rate and the factor of 2 from [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md), and it only means anything if the clock holds in the first place.

## One-liner

> A distance matrix is a tree iff it passes the four-point condition, and a clock tree iff it passes the three-point condition — UPGMA recovers the tree only in the clock case, because it mistakes slow lineages for close relatives.

## Problems

**P1 (🟢)** Run UPGMA on

| | W | X | Y | Z |
|---|---|---|---|---|
| **W** | 0 | 4 | 10 | 10 |
| **X** | | 0 | 10 | 10 |
| **Y** | | | 0 | 6 |
| **Z** | | | | 0 |

Give each merge with its height, and the final tree in Newick notation with branch lengths.

**P2 (🟡)** For each matrix on W, X, Y, Z, decide whether it is ultrametric, additive but not ultrametric, or neither. Show the three-point check on W, X, Y and the four-point sums. For any additive one, name the split.

- $M_1$: the matrix in P1.
- $M_2$: $D_{WX} = 3$, $D_{WY} = 7$, $D_{WZ} = 8$, $D_{XY} = 6$, $D_{XZ} = 7$, $D_{YZ} = 5$.
- $M_3$: as $M_2$ but with $D_{XZ} = 9$.

**P3 (🔴)** Generalize Example 2. The true unrooted tree has split AB | CD, short pendant branches of length $a$ on A and C, long pendant branches of length $b$ on B and D ($a < b$), and internal edge length $e$. (a) Write $D_{AB}$, $D_{AC}$, $D_{CD}$. (b) Find the exact condition on $a$, $b$, $e$ under which UPGMA's first merge is the wrong pair A, C. (c) With $a = 0.05$ and $e = 0.02$ substitutions per site, how long must the long branches be for UPGMA to fail? (d) Does the four-point condition still identify the right split in that regime?

<details>
<summary>Solutions</summary>

**P1** Merge W, X at $D = 4$: height **2**. New distances $D_{WX,Y} = D_{WX,Z} = 10$.
Merge Y, Z at $D = 6$: height **3**. $D_{WX,YZ} = 10$.
Merge at the root at $D = 10$: height **5**.

$$\big((\text{W}:2,\ \text{X}:2):3,\ (\text{Y}:3,\ \text{Z}:3):2\big)$$

(The branches above the two cherries are $5 - 2 = 3$ and $5 - 3 = 2$.)

**P2**

| matrix | three-point on W, X, Y | four-point sums ($WX{+}YZ$, $WY{+}XZ$, $WZ{+}XY$) | verdict |
|---|---|---|---|
| $M_1$ | 4, 10, 10: top two equal | 10, 20, 20: top two equal | **ultrametric** (hence additive); split WX \| YZ |
| $M_2$ | 3, 7, 6: top two (7, 6) unequal | 8, 14, 14: top two equal | **additive, not ultrametric**; split WX \| YZ |
| $M_3$ | 3, 7, 6: unequal | 8, 16, 14: top two unequal | **neither** |

(For ultrametric you must check all four triples; in $M_1$ the others — W, X, Z: 4, 10, 10; W, Y, Z: 10, 10, 6; X, Y, Z: 10, 10, 6 — also pass.) $M_2$'s internal edge is $(14 - 8)/2 = 3$.

**P3** (a) $D_{AB} = a + b$, $D_{CD} = a + b$, $D_{AC} = 2a + e$. (Also $D_{AD} = D_{BC} = a + e + b$ and $D_{BD} = 2b + e$.)

(b) UPGMA's first merge takes the smallest entry. $D_{BD}$ and $D_{AD}$ always exceed $D_{AB}$, so the contest is between $D_{AC}$ and $D_{AB} = D_{CD}$. It merges A, C first iff

$$2a + e < a + b \quad\Longleftrightarrow\quad \boxed{\,b > a + e\,}.$$

(At equality it's a tie.)

(c) $b > 0.05 + 0.02 = \mathbf{0.07}$. The long branches need to be only 40 percent longer than the short ones, when the internal edge is short.

(d) **Yes.** The sums are $D_{AB} + D_{CD} = 2a + 2b$ and $D_{AC} + D_{BD} = D_{AD} + D_{BC} = 2a + 2b + 2e$. The smallest is still $AB{+}CD$ whenever $e > 0$, whatever the rates. The information needed for the right tree is in the matrix; UPGMA just reads it wrongly.

</details>

## Flashback

**From Lesson 1.7 (Alignment statistics & E-values):** BLASTN's default DNA scores are match $+2$, mismatch $-3$. With uniform bases, (a) write the equation for $\lambda$, and verify that $\lambda \approx 0.634$ satisfies it to three decimal places; (b) find the implied match frequency; (c) compare with $\pm1$ scoring and with megablast's $+1/-2$ — which of the three is tuned for the most divergent DNA?

<details>
<summary>Solution</summary>

(a) $\tfrac14 e^{2\lambda} + \tfrac34 e^{-3\lambda} = 1$. At $\lambda = 0.634$: $e^{1.268} = 3.553$, so $\tfrac14(3.553) = 0.888$; $e^{-1.902} = 0.149$, so $\tfrac34(0.149) = 0.112$. The sum is $1.000$.

(b) $q_{\text{match}} = \tfrac14 e^{2\lambda} \approx \mathbf{0.888}$: tuned for about 89 percent identity.

(c) $\pm1$ targets 75 percent, $+2/-3$ about 89 percent, $+1/-2$ about 95 percent. So **$\pm1$** is tuned for the most divergent sequences. Harsher mismatch penalties relative to the match reward move the target toward identity.

</details>

## Connections

- **Backward:** UPGMA is [machine-learning 3.4](../../machine-learning/lessons/03-04-hierarchical-clustering.md)'s average linkage with heights attached; the clock assumption it needs is [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)'s, including why rates vary among lineages; [2.1](02-01-multiple-sequence-alignment.md)'s guide trees are often UPGMA trees.
- **Forward:** [2.3](02-03-neighbor-joining.md) exploits the four-point condition to handle unequal rates; distances should first be corrected for multiple hits ([2.5](02-05-substitution-models.md)); likelihood methods ([2.6](02-06-tree-likelihood-felsenstein-pruning.md)) avoid collapsing sequences to distances at all.
- **Sideways:** an ultrametric is exactly a metric satisfying the strong triangle inequality $d(x,z) \le \max(d(x,y), d(y,z))$, the defining property of the $p$-adic absolute values of number theory (not yet in this library) — in both, "every triangle is isosceles with a short base".
