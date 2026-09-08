# Machine Learning · Lesson 3.4: Hierarchical clustering

> ⏱ ~15 min · Module 3: Probabilistic and unsupervised learning · Builds on: [3.3 (k-means clustering)](03-03-k-means-clustering.md) · Unlocks: 3.5 (Gaussian mixture models)

## Why this matters

[k-means](03-03-k-means-clustering.md) made you name $k$ before you were allowed to look at the answer, and then made you name a starting point too. Hierarchical clustering removes both demands: it builds the entire nested family of clusterings in one deterministic pass — every $k$ from $n$ down to 1 — and lets you choose where to cut afterwards, with the picture in front of you.

That sounds like a free lunch, and the whole point of this lesson is that it isn't. You have traded the choice of $k$ for the choice of a **linkage rule**, and the linkage rule is the more consequential of the two. On the five points below, two standard rules — both entirely reasonable, both in every library — return **different clusters at the same $k$**. Not different heights, not a different drawing: different memberships.

So the skill here is not "run agglomerative clustering." It is: given a linkage rule, predict what shape of cluster it will manufacture, and decide whether that shape is the one your data actually has.

## The idea

Start with every point in its own cluster. Repeatedly merge the **two closest clusters**. Stop when one cluster remains. Record the distance at which each merge happened; that record is the tree.

The algorithm is three lines. The entire content is hiding in the words *two closest clusters*, because your data gives you distances between **points**, and you need a distance between **sets**. Two obvious ways to lift one to the other:

- **Single linkage** — the distance between two clusters is the distance of their *closest* pair. Two groups are close if there is any short hop between them.
- **Complete linkage** — the distance between two clusters is the distance of their *furthest* pair. Two groups are close only if merging them would still leave a tight group.

Single linkage is a rumour: one contact anywhere and the whole crowd counts as connected. Complete linkage is a committee that has to fit in a small room: one member sitting far away vetoes the merge. Neither is wrong; they manufacture different shapes. Single linkage will happily build a long straggling chain of a cluster. Complete linkage will refuse to, even when the chain is the real structure.

Everything else in this lesson follows from that one contrast.

## The formal version

**Agglomerative clustering.** Given points $x_1,\dots,x_n$ and a dissimilarity $d$:

```
AGGLOMERATE(points, linkage):
    C <- { {x_1}, ..., {x_n} }          -- n singleton clusters
    while |C| > 1:
        (U, V) <- the pair in C minimizing linkage(U, V)
        record the merge (U, V) at height linkage(U, V)
        C <- (C \ {U, V}) union { U union V }
    return the recorded merges
```

In words: merge the closest pair, write down how far apart they were, repeat.

**The four linkage rules.** For clusters $U$ and $V$:

$$d_{\text{single}}(U,V) = \min_{u \in U,\; v \in V} d(u,v), \qquad d_{\text{complete}}(U,V) = \max_{u \in U,\; v \in V} d(u,v)$$

$$d_{\text{average}}(U,V) = \frac{1}{|U|\,|V|}\sum_{u \in U}\sum_{v \in V} d(u,v), \qquad d_{\text{Ward}}(U,V) = \frac{|U|\,|V|}{|U| + |V|}\,\lVert \bar u - \bar v\rVert^2$$

In words: closest pair, furthest pair, average pair, and — for [Ward](../reference.md#linkage) — the exact amount by which merging $U$ and $V$ would increase the [within-cluster sum of squares](../reference.md#within-cluster-sum-of-squares), where $\bar u$ and $\bar v$ are the two centroids. Ward is therefore the greedy, bottom-up cousin of [k-means](03-03-k-means-clustering.md): it optimises k-means' objective, one irrevocable merge at a time.

**The dendrogram.** Draw each point as a leaf; draw each merge as a bracket joining its two clusters at a vertical height equal to the merge distance. Cutting the tree with a horizontal line at height $h$ leaves exactly the clusters that had formed by distance $h$; cutting just below the $(n-k+1)$-th merge leaves exactly $k$ clusters. **You choose $k$ by choosing where to cut, which is the same choice as before — you just get to make it last.**

Because single, complete and average linkage all merge at heights that never decrease, the tree can be drawn without a bracket dipping below its own children. (Centroid and median linkage lack this property; see *Watch out*.)

**Cost.** You need every pairwise distance: $\Theta(n^2)$ memory, and $\Theta(n^2 p)$ time to build the matrix in $p$ dimensions. Then $n-1$ merges, each scanning for a minimum: $\Theta(n^3)$ naïvely, $\Theta(n^2\log n)$ with a priority queue ([asymptotic notation](../../algorithms/lessons/01-01-asymptotic-notation.md)).

At $n = 10^5$ that is $n(n-1)/2 \approx 5.0\times 10^9$ distinct pairwise distances — **40 GB in float64 for the upper triangle alone**, before you have merged anything. Hierarchical clustering is not a big-data method, and no clever implementation rescues it: the $n^2$ is in the *problem statement*, not the algorithm. That is the honest reason k-means, at $O(nkp)$ per iteration, survives despite needing $k$ up front.

## Picture

![Two dendrograms side by side over the same five points A, B, C, D and E, single linkage on the left and complete linkage on the right, drawn to the same height scale, with a dashed horizontal cut line marking the two-cluster solution in each panel; the two cuts produce different memberships.](assets/03-04-fig1.svg)

Same five points, same data, same $k$. The left tree hangs $A$ off the top as a singleton; the right tree groups $A$ with $B$ and $C$ and splits off $D,E$. Both panels are drawn to the *same* vertical scale, which is what makes the second thing visible: the single-linkage tree finishes at height 4 while the complete-linkage tree runs to 10 on identical data — a warning we come back to below.

## Worked examples

**The instance.** Five points on a line: $A = 0$, $B = 4$, $C = 5$, $D = 8$, $E = 10$. The dissimilarity is $d(x,y) = |x - y|$, so the full matrix is

| | A | B | C | D | E |
|---|---|---|---|---|---|
| **A** | — | 4 | 5 | 8 | 10 |
| **B** | 4 | — | 1 | 4 | 6 |
| **C** | 5 | 1 | — | 3 | 5 |
| **D** | 8 | 4 | 3 | — | 2 |
| **E** | 10 | 6 | 5 | 2 | — |

Every merge below is a **strict** minimum — no ties anywhere in either run — so both traces are forced, with no tie-breaking convention doing any of the work.

**Example 1 (mechanical): single linkage.**

*Merge 1.* The smallest entry is $d(B,C) = 1$. Merge $\{B,C\}$ at height 1. Update the row for the new cluster by taking minima:

$$d(A,BC) = \min(4,5) = 4,\quad d(BC,D) = \min(4,3) = 3,\quad d(BC,E) = \min(6,5) = 5.$$

| | A | BC | D | E |
|---|---|---|---|---|
| **A** | — | 4 | 8 | 10 |
| **BC** | 4 | — | 3 | 5 |
| **D** | 8 | 3 | — | 2 |
| **E** | 10 | 5 | 2 | — |

*Merge 2.* The minimum is now $d(D,E) = 2$. Merge $\{D,E\}$ at height 2, and $d(BC,DE) = \min(4,6,3,5) = 3$, $d(A,DE) = \min(8,10) = 8$.

| | A | BC | DE |
|---|---|---|---|
| **A** | — | 4 | 8 |
| **BC** | 4 | — | 3 |
| **DE** | 8 | 3 | — |

*Merge 3.* Minimum 3: merge $BC$ with $DE$ at height 3, leaving $\{A\}$ and $\{B,C,D,E\}$ with $d = \min(4,5,8,10) = 4$.

*Merge 4.* Merge everything at height 4. Heights: $1, 2, 3, 4$.

**Example 2 (why you'd care): complete linkage, same points.** Only the update rule changes — maxima instead of minima.

*Merge 1.* Still $d(B,C) = 1$ (the raw minimum does not depend on the linkage rule while every cluster is a singleton). Now $d(A,BC) = \max(4,5) = 5$ and $d(BC,D) = \max(4,3) = 4$, $d(BC,E) = \max(6,5) = 6$.

*Merge 2.* Still $d(D,E) = 2$. Then $d(A,DE) = \max(8,10) = 10$ and $d(BC,DE) = \max(4,6,3,5) = 6$.

| | A | BC | DE |
|---|---|---|---|
| **A** | — | 5 | 10 |
| **BC** | 5 | — | 6 |
| **DE** | 10 | 6 | — |

*Merge 3.* **Here the two runs part company.** The minimum is 5: merge $A$ into $BC$, not $BC$ into $DE$. Single linkage compared $d(BC,DE) = 3$ against $d(A,BC) = 4$ and joined the two right-hand groups; complete linkage compares $6$ against $5$ and attaches the loner instead. One entry flipped and the tree changed shape.

*Merge 4.* Everything joins at $\max = 10$.

**The two answers at $k = 2$:**

| rule | clusters at $k=2$ | within-cluster sum of squares |
|---|---|---|
| single | $\{A\}$, $\{B,C,D,E\}$ | $91/4 = 22.75$ |
| complete | $\{A,B,C\}$, $\{D,E\}$ | $16$ |

Complete linkage's answer is in fact the *global* WCSS optimum over all $2^4 - 1 = 15$ ways to split five points in two — checked exhaustively — and single linkage's is 42 percent worse. Single linkage got there by chaining: $B\to C\to D\to E$ are linked by hops of 1, 3 and 2, none longer than $A$'s distance of 4 to its nearest neighbour, so the four of them zip together and $A$ is left standing outside.

Do not read that as "complete linkage wins." It won *here*, on compact blobs, which is the shape complete linkage manufactures. Problem 3 builds data where the same preference makes it fail and single linkage's chaining is exactly right.

One more thing worth seeing on this instance: **average linkage produces a genuine tie.** At merge 3 it has $d(A,BC) = (4+5)/2 = 4.5$ and $d(BC,DE) = (4+6+3+5)/4 = 4.5$ — the two candidate merges are equally good, and which tree you get depends on your library's tie-breaking rule. Tie-freeness is a property of the instance, not a guarantee of the method.

## Watch out

- **You might think** dendrogram heights are a property of the data, so you can compare two trees by their heights — **but actually** heights are a property of the *linkage rule*. The very same five points top out at 4 under single linkage and at 10 under complete linkage, because complete linkage reports the diameter of what it built and single linkage reports one hop. Heights are comparable *within* one tree and meaningless *across* rules.
- **You might think** cutting the tree at $k$ gives you the best $k$-clustering, the way Lloyd's algorithm at least tries to — **but actually** agglomerative clustering never reconsiders a merge. There is no reassignment step: if merge 2 was a mistake, every cluster above it inherits the mistake. It is [greedy](../../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md) in the strict sense, and it comes with no optimality proof at all — the single-linkage cut above is 42 percent off the optimum, and Ward, which greedily optimises WCSS directly, is still only greedy.
- **You might think** single/complete/average heights can go down as well as up, since nothing obviously forbids it — **but actually** those three are *monotone*: a merge never happens below the height of its children, so the dendrogram is drawable. Centroid and median linkage do **not** have this property and can produce **inversions**, a bracket drawn below the bracket it contains. If you see one, your linkage rule is the reason, not your data.
- **You might think** the linkage rule is the only choice you make — **but actually** $d$ itself is a choice, and everything [PCA](03-02-principal-component-analysis.md) and k-means warned you about scale applies unchanged: multiply one feature by 1000 and every Euclidean distance, and therefore every merge, is about that feature.

## One-liner

> Hierarchical clustering hands you every $k$ at once and charges you $\Theta(n^2)$ memory and a linkage rule for the privilege — and the linkage rule, not the data, decides whether your clusters come out as tight blobs or long chains.

## Problems

**P1 (🟢)** Five documents $P,Q,R,S,T$ with the dissimilarity matrix

| | P | Q | R | S | T |
|---|---|---|---|---|---|
| **P** | — | 9 | 11 | 4 | 5 |
| **Q** | 9 | — | 3 | 10 | 7 |
| **R** | 11 | 3 | — | 12 | 6 |
| **S** | 4 | 10 | 12 | — | 8 |
| **T** | 5 | 7 | 6 | 8 | — |

Run **single linkage**. Give the four merges in order with their heights, sketch the dendrogram, and state the clusters you get by cutting at $k = 2$.

**P2 (🟡)** Same matrix, now **complete linkage**. Give the four merges with heights. Then: at which merge do the two trees first disagree, which matrix entry is responsible, and what are the two different $k = 2$ clusterings?

**P3 (🔴)** Build the eight points $(0,0), (2,0), (4,0), (6,0)$ and $(0,3), (2,3), (4,3), (6,3)$ — two long horizontal bands of four, separated by a vertical gap of 3.

(a) Give the distance from each point to its nearest neighbour in its own band, and the smallest distance between the two bands. Then say what single linkage returns at $k = 2$, and why the answer does not depend on how ties are broken.

(b) Complete linkage does **not** return the two bands. Compute the diameter of a whole band, and the diameter of the four-point block $\{(0,0),(2,0),(0,3),(2,3)\}$, and use the two numbers to say what complete linkage builds instead.

(c) Now add a single ninth point at $(3, 1.5)$, halfway between the bands. Compute its distance to $(2,0)$ and to $(4,3)$, and say what that one point does to each of the two trees. Which failure would you rather have to explain?

<details>
<summary>Solutions</summary>

**P1** Every step below is a strict minimum — the matrix has no repeated entries, so no tie-breaking is needed.

*Merge 1:* the smallest entry is $d(Q,R) = 3$. Merge $\{Q,R\}$ at **height 3**. Minima: $d(P,QR) = \min(9,11) = 9$, $d(S,QR) = \min(10,12) = 10$, $d(T,QR) = \min(7,6) = 6$.

| | P | S | QR | T |
|---|---|---|---|---|
| **P** | — | 4 | 9 | 5 |
| **S** | 4 | — | 10 | 8 |
| **QR** | 9 | 10 | — | 6 |
| **T** | 5 | 8 | 6 | — |

*Merge 2:* minimum is $d(P,S) = 4$. Merge $\{P,S\}$ at **height 4**. Then $d(PS,QR) = \min(9,10) = 9$ and $d(PS,T) = \min(5,8) = 5$.

| | PS | QR | T |
|---|---|---|---|
| **PS** | — | 9 | 5 |
| **QR** | 9 | — | 6 |
| **T** | 5 | 6 | — |

*Merge 3:* minimum is 5. Merge $T$ into $\{P,S\}$ at **height 5**, giving $\{P,S,T\}$, with $d(PST, QR) = \min(9,6) = 6$.

*Merge 4:* merge everything at **height 6**.

Dendrogram, written as nested brackets with each merge's height:

$$\Big(\ \big(\ (P\ S)_{4}\ \ T\ \big)_{5}\ \ \ (Q\ R)_{3}\ \Big)_{6}$$

Drawn: $Q$ and $R$ join lowest, at 3; $P$ and $S$ just above at 4; $T$ hangs onto $\{P,S\}$ at 5; the two halves join at the top at 6.

**Cut at $k = 2$** (just below the last merge): $\{P,S,T\}$ and $\{Q,R\}$.

**P2** *Merge 1:* still $d(Q,R) = 3$ — with all clusters singletons, the raw minimum is the same whatever the linkage. But now the update takes maxima: $d(P,QR) = 11$, $d(S,QR) = 12$, $d(T,QR) = \max(7,6) = 7$.

| | P | S | QR | T |
|---|---|---|---|---|
| **P** | — | 4 | 11 | 5 |
| **S** | 4 | — | 12 | 8 |
| **QR** | 11 | 12 | — | 7 |
| **T** | 5 | 8 | 7 | — |

*Merge 2:* minimum 4, so $\{P,S\}$ at **height 4** again. Now $d(PS,QR) = \max(11,12) = 12$ and $d(PS,T) = \max(5,8) = 8$.

| | PS | QR | T |
|---|---|---|---|
| **PS** | — | 12 | 8 |
| **QR** | 12 | — | 7 |
| **T** | 7 | 8 | — |

*Merge 3:* the minimum is now $7 = d(T,QR)$, not 8. **Merge $T$ into $\{Q,R\}$ at height 7** — the opposite of what single linkage did with the same point.

*Merge 4:* everything at **height 12**.

**First disagreement: merge 3**, and it is entirely about where $T$ goes. The responsible entry is $d(S,T) = 8$, the *largest* of $T$'s distances to $\{P,S\}$. Single linkage judges $T$'s distance to $\{P,S\}$ by $d(P,T) = 5$ and wins the comparison against $d(T,QR) = 6$; complete linkage judges it by $d(S,T) = 8$ and loses to $d(T,QR) = 7$. So $T$ is close to *part* of $\{P,S\}$ and not to all of it — precisely the situation the two rules read in opposite ways.

The two clusterings at $k = 2$:

| rule | $k=2$ clusters |
|---|---|
| single | $\{P,S,T\}$, $\{Q,R\}$ |
| complete | $\{P,S\}$, $\{Q,R,T\}$ |

**P3** (a) Within a band, consecutive points are 2 apart, so every point's nearest neighbour in its own band is at distance **2**. Between bands the closest pairs are the vertically aligned ones, at distance **3**.

Single linkage merges the smallest available gap first, and every one of the six within-band adjacencies is at 2 while every cross-band distance is at least 3. So all six within-band merges happen at height 2 — in some order, but the *order does not matter*, because after all of them the clusters are the two bands regardless. Only then does the smallest remaining distance appear — the two bands are 3 apart under single linkage — and that is the final merge. Cut below it: exactly **the two bands**. (Exhaustive check over every possible tie-breaking of the six height-2 merges: all of them give the two bands.)

The chaining that hurt in the worked example is what saves single linkage here — a band *is* a chain, and single linkage's rule only ever asks for one short hop.

(b) A whole band has diameter $\lVert(6,0) - (0,0)\rVert = 6$. The left block $\{(0,0),(2,0),(0,3),(2,3)\}$ has diameter $\sqrt{2^2 + 3^2} = \sqrt{13} \approx 3.61$ — its two furthest points are diagonally opposite corners.

Complete linkage refuses to build a cluster of diameter 6 while one of diameter 3.61 is on offer. Trace it: four merges at height 2 (the four adjacent same-band pairs $\{(0,0),(2,0)\}$, $\{(4,0),(6,0)\}$ and their two counterparts on top), then the left pair joins its top counterpart at $\sqrt{13} \approx 3.61$ and likewise on the right, then everything joins at $\sqrt{6^2+3^2} = \sqrt{45} \approx 6.71$. At $k = 2$ complete linkage returns the **left half and the right half** — a partition cutting *across* both bands. (Exhaustively checked: of the seven distinct outcomes reachable under some tie-breaking, none is the band partition. Complete linkage cannot return the bands here at all.)

**The general statement:** single linkage recovers structure that is *connected*; complete linkage recovers structure that is *compact*. Elongated, curved or filamentary clusters are connected but not compact, so complete linkage will chop them up, and no amount of restarting will help — it is deterministic.

(c) The bridge point is 1 unit across and 1.5 units up from $(2,0)$, so

$$\lVert(3,1.5) - (2,0)\rVert = \sqrt{1 + 2.25} = \sqrt{3.25} \approx 1.80,$$

and by symmetry the same to $(4,0)$, $(2,3)$ and $(4,3)$.

That is **less than 2**, so those four merges now happen *first*. The new point bridges the gap before either band has finished forming, and single linkage's $k=2$ answer collapses: it returns everything-but-one-corner-point against the corner point $(6,3)$. **One point out of nine destroys the entire structure.** Complete linkage barely notices — the bridge point is absorbed into the left block and the left/right split survives unchanged.

**Which failure would I rather have?** Complete linkage's. It is *wrong in a stable way*: it returns compact clusters, which is a shape you can recognise as an artefact of the rule and correct for. Single linkage is right when the data is clean and catastrophic when it is not, and the failure is triggered by a *single* observation — the merge criterion is a minimum over pairs, so its value is set by the closest pair in the whole cross-product and cannot be diluted by evidence from the other $|U||V| - 1$ pairs. Any statistic that one observation can move to its extreme is a statistic to distrust on real data. (Average linkage sits in between for exactly this reason: it averages over all pairs, so one bridge point moves it by $O(1/(|U||V|))$.)

</details>

## Flashback

**From Lesson 3.3 (k-means clustering):** Points $\{0, 3, 4, 12, 15\}$ on a line, $k = 2$, initial centroids $\mu_1 = 0$ and $\mu_2 = 3$.

(a) Run two full Lloyd iterations. Give the assignment, the updated centroids and the WCSS after each, and name the one point that changes cluster between the iterations. (b) Is the fixed point the global $k=2$ optimum here? Check all four ways to split the five points. (c) Hierarchical clustering needed neither $k$ nor an initialization to produce its answer. Name the two prices it pays for that.

<details>
<summary>Solution</summary>

(a) *Iteration 1.* Assign each point to the nearer of $0$ and $3$: the point $0$ goes to $\mu_1$; $3, 4, 12, 15$ all go to $\mu_2$. Update:

$$\mu_1 = 0, \qquad \mu_2 = \frac{3 + 4 + 12 + 15}{4} = \frac{34}{4} = \frac{17}{2}.$$

$$\mathrm{WCSS} = 0 + \left(3 - \tfrac{17}{2}\right)^2 + \left(4 - \tfrac{17}{2}\right)^2 + \left(12 - \tfrac{17}{2}\right)^2 + \left(15 - \tfrac{17}{2}\right)^2 = 30.25 + 20.25 + 12.25 + 42.25 = 105.$$

*Iteration 2.* Reassign against $\{0,\ 8.5\}$. The interesting point is $4$: it is $4$ from $\mu_1$ and $4.5$ from $\mu_2$, so it **switches** to $\mu_1$. So does $3$. Clusters $\{0,3,4\}$ and $\{12,15\}$. Update:

$$\mu_1 = \frac{0+3+4}{3} = \frac{7}{3}, \qquad \mu_2 = \frac{12+15}{2} = \frac{27}{2}.$$

$$\mathrm{WCSS} = \frac{26}{3} + \frac{9}{2} = \frac{79}{6} \approx 13.17.$$

A third iteration reproduces the same assignment, so this is the fixed point. **The point that moved is $4$** (and $3$ with it); that single reassignment is what dropped the objective by a factor of 8 — and it is the move hierarchical clustering never makes.

(b) **Yes.** Because the optimal 1-D clustering is always contiguous, there are only four candidate splits, and their WCSS values are

$$105,\qquad \frac{415}{6} \approx 69.17,\qquad \frac{79}{6} \approx 13.17,\qquad \frac{315}{4} = 78.75.$$

Lloyd's landed on the smallest. That is luck plus a benign initialization, not a guarantee — 3.3's Example 2 is the same algorithm on the same kind of data landing 67 times worse.

(c) **The two prices.**

1. **Cost.** No $k$ and no initialization, but $\Theta(n^2)$ memory and $\Theta(n^2\log n)$ time instead of Lloyd's $O(nkp)$ per iteration. At $n = 10^5$ that is 40 GB of distances against a k-means run that fits comfortably in cache-sized chunks.
2. **Irrevocability.** Lloyd's algorithm can undo a bad assignment — the point $4$ above moved clusters between iterations, and the objective dropped by a factor of 8 when it did. Agglomerative clustering has no such step: a merge made at height 1 is still there at the top of the tree. It has no initialization *because* it has no iteration to be initialized.

And the choice of $k$ has not really gone away — it has become the choice of where to cut, plus the choice of linkage rule that decides what the cut will contain.

</details>

## Connections

- **Backward:** this is [3.3's](03-03-k-means-clustering.md) problem — partition the data by proximity — solved bottom-up instead of by iterative refinement, and Ward linkage optimises 3.3's exact objective greedily. The scale sensitivity flagged in [3.2](03-02-principal-component-analysis.md) applies verbatim, since the distance matrix is the only input. The "merge the locally best pair and never reconsider" structure is the [greedy method](../../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md) — but without the exchange argument that made interval scheduling optimal, which is exactly why P1's and P2's answers differ.
- **Forward:** [3.5](03-05-gaussian-mixture-models.md) replaces the hard nested memberships with soft ones and gets a *density* out of it, so a new point can be scored — something a dendrogram, which only knows about the points it was built on, cannot do. The concentric-ring data that defeated k-means in 3.3 is recovered by single linkage (rings are connected) or by a kernelised distance in the spirit of [2.4](02-04-the-kernel-trick.md).
- **Sideways:** the single-linkage dendrogram is the minimum spanning tree of the points in disguise — merging the closest pair of clusters is Kruskal's algorithm, and cutting at height $h$ is deleting every MST edge longer than $h$. That is why single linkage inherits both the MST's sensitivity to one short bridging edge and its ability to follow a filament, and it is the same connected-versus-compact distinction that separates phylogenetic trees in biology from market-segment clustering in [econometrics](../../econometrics/syllabus.md).
