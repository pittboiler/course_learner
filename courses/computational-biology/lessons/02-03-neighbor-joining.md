# Computational Biology · Lesson 2.3: Neighbor-joining

> ⏱ ~15 min · Module 2: Phylogenetics & evolutionary models · Builds on: [2.2](02-02-tree-metrics-upgma.md) (four-point condition, UPGMA's failure) · Unlocks: [2.4](02-04-parsimony-fitch-sankoff.md) (parsimony), [2.5](02-05-substitution-models.md) (corrected distances)

## Why this matters

UPGMA fails whenever lineages evolve at different rates ([2.2](02-02-tree-metrics-upgma.md)), which is almost always. Neighbor-joining (Saitou & Nei, 1987) fixes that with one change: it doesn't join the *closest* pair, it joins the pair that is closest **after correcting for how far each is from everything else**.

The result is fast — cubic in the number of taxa, so tens of thousands of sequences are routine. It's guaranteed to recover the true tree from exact tree distances, and it's the default quick tree in most pipelines. It's also the starting tree for the likelihood searches of [2.7](02-07-tree-search-and-support.md). Boss problem 2 asks for one full NJ step by hand; this lesson is that step.

## The idea

Why did UPGMA join A with C in [2.2](02-02-tree-metrics-upgma.md)'s example? Because both sit on short branches. They're close to each other, but they're also close to *everybody*. B and D sit on long branches and are far from everybody.

So judge a pair's closeness **relative to how far each member is from the rest**. Two taxa whose distance is small *compared with their average distance to others* are likely true neighbours. Two taxa that are merely both slow will be close to each other and to everyone else, so the correction cancels their advantage.

Neighbor-joining does exactly this with a corrected score $Q(i,j)$:

1. Compute each taxon's total distance to everyone else, $R_i$.
2. Score each pair: $Q(i,j) = (n-2)\,D_{ij} - R_i - R_j$. Pick the pair with the **smallest** $Q$.
3. Join them under a new node, assigning the longer branch to the member that is farther from everyone else.
4. Replace the pair with the new node, and compute its distances to the rest by subtracting off the new branches.
5. Repeat until three nodes are left; join them with a star.

There's a neat interpretation. Start with a star tree, all taxa hanging off one centre. Pulling any pair out onto its own branch shortens the total tree length by some amount. $Q(i,j)$ is, up to constants, the total length after pulling out $i$ and $j$. So NJ greedily picks the pull that makes the tree **shortest** — a minimum-evolution criterion.

## The formal version

Let $n$ be the current number of nodes and $D$ their distance matrix.

**Net divergence and the Q-criterion.**

$$R_i = \sum_{k} D_{ik}, \qquad Q(i,j) = (n-2)\,D_{ij} - R_i - R_j .$$

Join the pair $(f, g)$ minimizing $Q$. This is the [neighbor-joining Q-criterion](../reference.md#neighbor-joining-q-criterion). *In words: a small raw distance helps, and so does being far from everyone else — a pair that is merely close to everybody no longer earns a merge.*

**Branch lengths** from $f$ and $g$ to their new parent $u$:

$$\delta_{fu} = \frac{D_{fg}}{2} + \frac{R_f - R_g}{2(n-2)}, \qquad \delta_{gu} = D_{fg} - \delta_{fu}.$$

*In words: split the pair's distance in half, then shift length toward the member with larger net divergence.*

**Reduction.** For every other node $k$,

$$D_{uk} = \tfrac12\big(D_{fk} + D_{gk} - D_{fg}\big).$$

*In words: $u$'s distance to $k$ is the average of $f$'s and $g$'s distances to $k$, minus the two branches just created.* For tree data this is exact: $D_{fk} = \delta_{fu} + D_{uk}$ and $D_{gk} = \delta_{gu} + D_{uk}$.

**Last three nodes** $a, b, c$: $\delta_a = \tfrac12(D_{ab} + D_{ac} - D_{bc})$, and likewise for $b$ and $c$.

**Why $Q$.** If $i$ and $j$ are pulled out of a star, with every other node left on the star, the total branch length of the resulting tree is

$$S_{ij} = \frac{1}{2(n-2)}\sum_{k \ne i,j}\big(D_{ik} + D_{jk}\big) + \frac{D_{ij}}{2} + \frac{1}{n-2}\sum_{\substack{k<l\\ k,l \ne i,j}} D_{kl},$$

and $Q(i,j) = 2(n-2)\,S_{ij} - 2\sum_{k<l} D_{kl}$. The last term doesn't depend on the pair, so minimizing $Q$ is minimizing $S$.

**Guarantees and cost.** If $D$ is additive, NJ returns the generating unrooted tree and its branch lengths (Studier & Keppler, 1988). It is $\Theta(n^3)$ time and $\Theta(n^2)$ space. The output is **unrooted**. To root it, add an outgroup.

## Picture

![Three panels. First, a star with four leaves A, B, C and D, and below it a table of Q values in which the pairs A-B and C-D both reach the minimum of minus 24 while the other four pairs score minus 22. Second, A and B pulled out onto their own node with branch lengths 1 to A and 4 to B, with C and D still dashed off the star; the new node U has distance 2 to C and 5 to D. Third, the fully resolved tree with A at 1, B at 4, an internal edge of 1, C at 1 and D at 4, labelled as the true tree.](assets/02-03-fig1.svg)

The Q-table is where UPGMA's mistake gets corrected. A and C have the smallest raw distance, but $Q(A,C) = -22$ is *not* the minimum. The true cherries A–B and C–D tie at $-24$, and either choice leads to the same tree. In the second panel, the branch lengths split A–B's distance of 5 unevenly, 1 and 4, because B is farther from everyone else. The last panel recovers every branch length exactly.

## Worked examples

**Example 1 (mechanical): one full NJ step, then finish.** The matrix from [2.2](02-02-tree-metrics-upgma.md)'s Example 2, where UPGMA failed:

| | A | B | C | D |
|---|---|---|---|---|
| **A** | 0 | 5 | 3 | 6 |
| **B** | | 0 | 6 | 9 |
| **C** | | | 0 | 5 |
| **D** | | | | 0 |

*Net divergences* ($n = 4$): $R_A = 5 + 3 + 6 = 14$, $R_B = 5 + 6 + 9 = 20$, $R_C = 3 + 6 + 5 = 14$, $R_D = 6 + 9 + 5 = 20$.

*Q-matrix* ($n - 2 = 2$):

| pair | $2D_{ij}$ | $-R_i - R_j$ | $Q$ |
|---|---|---|---|
| A, B | 10 | −34 | **−24** |
| A, C | 6 | −28 | −22 |
| A, D | 12 | −34 | −22 |
| B, C | 12 | −34 | −22 |
| B, D | 18 | −40 | −22 |
| C, D | 10 | −34 | **−24** |

A–B and C–D tie. Take A, B.

*Branch lengths:* $\delta_{A} = \tfrac52 + \tfrac{14 - 20}{4} = 2.5 - 1.5 = \mathbf{1}$ and $\delta_{B} = 5 - 1 = \mathbf{4}$.

*Reduced matrix* with new node $U$: $D_{UC} = \tfrac12(3 + 6 - 5) = \mathbf{2}$ and $D_{UD} = \tfrac12(6 + 9 - 5) = \mathbf{5}$, with $D_{CD} = 5$ unchanged.

*Last three* ($U$, C, D): $\delta_U = \tfrac12(2 + 5 - 5) = 1$, $\delta_C = \tfrac12(2 + 5 - 5) = 1$, $\delta_D = \tfrac12(5 + 5 - 2) = 4$.

Result: A:1, B:4, internal edge 1, C:1, D:4 — **the true tree, exactly**, where UPGMA grouped A with C.

**Example 2 (why you'd care): rates differ, NJ doesn't care.** Five taxa generated by the unrooted tree with cherries (A:2, B:3) and (D:1, E:5), a central node carrying C:4, and internal edges 1 (to the A–B node) and 2 (to the D–E node):

| | A | B | C | D | E |
|---|---|---|---|---|---|
| **A** | 0 | 5 | 7 | 6 | 10 |
| **B** | | 0 | 8 | 7 | 11 |
| **C** | | | 0 | 7 | 11 |
| **D** | | | | 0 | 6 |
| **E** | | | | | 0 |

$R = (28, 31, 33, 26, 38)$ for A through E. With $n - 2 = 3$, the smallest Q-values are $Q(D,E) = 18 - 26 - 38 = \mathbf{-46}$ and $Q(A,B) = 15 - 28 - 31 = -44$. NJ joins **D and E first**, though $D_{DE} = 6$ is not the smallest raw distance ($D_{AB} = 5$ is). Branch lengths: $\delta_D = 3 + \tfrac{26 - 38}{6} = \mathbf{1}$, $\delta_E = \mathbf{5}$. E's long branch doesn't fool it. Continuing, NJ joins A, B with lengths 2 and 3, and the last three nodes recover C:4 and internal edges 1 and 2. Every branch length matches the generating tree.

## Watch out

- **You might pick** the largest $Q$, or the smallest raw $D$ — **but actually** NJ joins the pair with the **most negative** $Q$. Raw distance alone is UPGMA's mistake.
- **You might be alarmed** by a negative branch length — **but actually** with noisy, non-additive distances NJ can return a slightly negative length (Problem 3). It signals that the data don't fit a tree exactly. Common practice is to set it to zero and move the difference to the adjacent branch. A large negative length signals badly wrong distances, often uncorrected saturation ([2.5](02-05-substitution-models.md)).
- **You might read** NJ's output as rooted, or its first join as the "oldest" split — **but actually** the tree is unrooted and the join order is just an order of discovery. The root comes from an outgroup, not from the algorithm.

## One-liner

> Neighbor-joining joins the pair minimizing $Q(i,j) = (n-2)D_{ij} - R_i - R_j$ — raw closeness corrected for how far each taxon is from everyone — which is a greedy minimum-evolution step that recovers any additive tree exactly, unequal rates and all.

## Problems

**P1 (🟢)** Run neighbor-joining to completion on

| | W | X | Y | Z |
|---|---|---|---|---|
| **W** | 0 | 3 | 7 | 8 |
| **X** | | 0 | 6 | 7 |
| **Y** | | | 0 | 5 |
| **Z** | | | | 0 |

Give $R$, the Q-matrix, the first join with its branch lengths, the reduced matrix, and the final unrooted tree with all branch lengths.

**P2 (🟡)** In Example 2, (a) verify $R_E = 38$ and $Q(A,C) = -40$; (b) explain in one sentence why $Q(D,E) < Q(A,B)$ even though $D_{DE} > D_{AB}$; (c) which pair would UPGMA join first, and would that first join be wrong?

**P3 (🔴)** Non-tree data:

| | A | B | C | D |
|---|---|---|---|---|
| **A** | 0 | 2 | 4 | 9 |
| **B** | | 0 | 5 | 3 |
| **C** | | | 0 | 4 |
| **D** | | | | 0 |

(a) Show the matrix fails the four-point condition. (b) Run the first NJ step: $R$, $Q$, the pair (break ties alphabetically), and its branch lengths. (c) Interpret the result. (d) What would you do with it in practice?

<details>
<summary>Solutions</summary>

**P1** $R_W = 3 + 7 + 8 = 18$, $R_X = 3 + 6 + 7 = 16$, $R_Y = 7 + 6 + 5 = 18$, $R_Z = 8 + 7 + 5 = 20$.

$Q = 2D_{ij} - R_i - R_j$: $Q(W,X) = 6 - 34 = \mathbf{-28}$, $Q(W,Y) = 14 - 36 = -22$, $Q(W,Z) = 16 - 38 = -22$, $Q(X,Y) = 12 - 34 = -22$, $Q(X,Z) = 14 - 36 = -22$, $Q(Y,Z) = 10 - 38 = \mathbf{-28}$.

W–X and Y–Z tie; join W, X. $\delta_W = \tfrac32 + \tfrac{18 - 16}{4} = 1.5 + 0.5 = \mathbf{2}$, $\delta_X = 3 - 2 = \mathbf{1}$.

Reduced: $D_{UY} = \tfrac12(7 + 6 - 3) = 5$, $D_{UZ} = \tfrac12(8 + 7 - 3) = 6$, $D_{YZ} = 5$.

Last three: $\delta_U = \tfrac12(5 + 6 - 5) = 3$, $\delta_Y = \tfrac12(5 + 5 - 6) = 2$, $\delta_Z = \tfrac12(6 + 5 - 5) = 3$.

Tree: **W:2, X:1, internal edge 3, Y:2, Z:3**, split WX | YZ. Check: $D_{WZ} = 2 + 3 + 3 = 8$.

**P2** (a) $R_E = 10 + 11 + 11 + 6 = 38$. $Q(A,C) = 3(7) - 28 - 33 = 21 - 61 = -40$.

(b) D and E are far from everyone else (large combined $R_D + R_E = 64$ against $R_A + R_B = 59$), so their moderate mutual distance of 6 is small *relative to* their distances to the rest; that relative closeness is what $Q$ rewards.

(c) UPGMA joins the smallest raw entry, **A and B** ($D_{AB} = 5$). That join happens to be **correct** — A and B are a true cherry. UPGMA's risk is not that the closest pair is always wrong, only that it can be (as in Example 1), and here it would still misplace the root and branch lengths by assuming a clock.

**P3** (a) $D_{AB} + D_{CD} = 2 + 4 = 6$, $D_{AC} + D_{BD} = 4 + 3 = 7$, $D_{AD} + D_{BC} = 9 + 5 = 14$. The two largest (7 and 14) are unequal, so it isn't a tree metric.

(b) $R_A = 15$, $R_B = 10$, $R_C = 13$, $R_D = 16$. $Q(A,B) = 4 - 25 = \mathbf{-21}$, $Q(A,C) = 8 - 28 = -20$, $Q(A,D) = 18 - 31 = -13$, $Q(B,C) = 10 - 23 = -13$, $Q(B,D) = 6 - 26 = -20$, $Q(C,D) = 8 - 29 = \mathbf{-21}$. Tie; join **A, B**. $\delta_A = 1 + \tfrac{15 - 10}{4} = \mathbf{2.25}$, $\delta_B = 2 - 2.25 = \mathbf{-0.25}$.

(c) A branch of length $-0.25$ has no biological meaning. It arises because B is "too close" to D ($D_{BD} = 3$) for any tree in which B is A's sister with A at distance 9 from D. The data contradict every tree, and NJ absorbs the contradiction as a negative length.

(d) Set $\delta_B = 0$ and $\delta_A = 2$ (keeping $\delta_A + \delta_B = D_{AB}$), then continue. And investigate the distances: violations this large usually come from saturated, uncorrected distances or from an alignment error, not from sampling noise.

</details>

## Flashback

**From Lesson 2.2 (Tree metrics & UPGMA):** Four taxa have distances $D_{PQ} = 4$, $D_{PR} = 6$, $D_{PS} = 11$, $D_{QR} = 6$, $D_{QS} = 11$, $D_{RS} = 7$. (a) Check the four-point condition, name the split, and give the internal edge length. (b) Is the matrix ultrametric? (c) Run UPGMA. Is its *unrooted* topology right? Are its branch lengths right?

<details>
<summary>Solution</summary>

(a) $D_{PQ} + D_{RS} = 11$, $D_{PR} + D_{QS} = 17$, $D_{PS} + D_{QR} = 17$. The two largest are equal: **additive**, split **PQ | RS**, internal edge $(17 - 11)/2 = \mathbf{3}$.

(b) **No.** For P, R, S the distances are 6, 11, 7, and the two largest are unequal.

(c) Join P, Q at height 2. Then $D_{PQ,R} = 6$, $D_{PQ,S} = 11$, $D_{RS} = 7$, so join PQ with R at height 3. Then $D_{PQR,S} = (2 \times 11 + 7)/3 = 29/3$, root at height $29/6 \approx 4.83$. Rooted tree $((P,Q),R),S$. Unrooted, that is **PQ | RS — the right topology**. But the branch lengths are wrong. UPGMA gives P and Q 2 each, which happens to be right, but it gives R $3$ and S $29/6$, where the true tree (P:2, Q:2, internal 3, R:1, S:6) has R at 1 and S at 6. With four taxa any rooting of the right cherry pair is the right unrooted tree; the clock assumption still distorts every length.

</details>

## Connections

- **Backward:** the four-point sums of [2.2](02-02-tree-metrics-upgma.md) are what NJ exploits; the failing matrix there is Example 1 here.
- **Forward:** NJ trees are the standard starting point for the likelihood search of [2.7](02-07-tree-search-and-support.md); its accuracy depends on distances corrected for multiple hits ([2.5](02-05-substitution-models.md)); parsimony ([2.4](02-04-parsimony-fitch-sankoff.md)) scores trees from characters rather than distances, and the two can disagree (Boss problem 2).
- **Sideways:** "pick the greedy step that most reduces total length" is the same shape as Kruskal's greedy MST ([algorithms 2.3](../../algorithms/lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md)), but without an exchange argument guaranteeing optimality — NJ is exact for additive data and only a heuristic for minimum evolution on real data.
