# Computer Graphics · Lesson 3.5: Acceleration Structures

> ⏱ ~15 min · Module 3: The GPU Pipeline, Ray Tracing & Global Illumination · Builds on: [3.3 (ray–object intersection)](03-03-ray-casting-and-intersection.md), [3.4 (ray trees)](03-04-whitted-ray-tracing-reflection-refraction.md), [`programming-foundations` 3.1 (binary trees)](../../programming-foundations/lessons/03-01-binary-trees-and-binary-search-trees.md) · Unlocks: [3.7 (path tracing)](03-07-monte-carlo-path-tracing.md)

## Why this matters

[1.1](01-01-the-graphics-pipeline.md) priced brute-force ray casting at $2 \times 10^{12}$ ray–triangle tests for one frame of a million-triangle scene. [3.4](03-04-whitted-ray-tracing-reflection-refraction.md) then multiplied the number of rays. A ray tracer that tests every ray against every triangle is a textbook exercise, not a renderer.

The fix is the same one databases and search trees use: organise the data so most of it can be ruled out with one cheap test. Wrap groups of triangles in boxes, wrap groups of boxes in bigger boxes, and a ray that misses a box skips everything inside. Done well, the number of tests per ray grows like $\log N$ instead of $N$ — and "done well" turns out to have a precise, computable meaning.

## The idea

**Test the box before the contents.** Checking whether a ray passes through an axis-aligned box costs six divisions and a few comparisons. If it misses, none of the thousand triangles inside can be hit. If it hits, look inside — where there are two smaller boxes, and so on down to a handful of triangles. That tree of boxes is a **bounding volume hierarchy** (BVH).

**Split objects, not space.** A BVH puts each triangle into exactly one child; the children's boxes may overlap. The alternative — cutting space itself into cells, as grids and k-d trees do — never overlaps but may have to list one triangle in several cells. BVHs dominate modern ray tracing because they are simple to build, bounded in memory, and easy to update when things move.

**Some trees are better than others.** A ray is more likely to hit a big box than a small one, so a good split makes the children *small* where they contain *many* triangles. The **surface area heuristic** turns that into a number you can compare between candidate splits.

## The formal version

**Ray–box (slab) test.** An axis-aligned box is the intersection of three slabs $\ell_k \le x_k \le h_k$. For each axis with $d_k \ne 0$,

$$t_{k}^{\text{near}} = \min\left(\frac{\ell_k - o_k}{d_k},\ \frac{h_k - o_k}{d_k}\right), \qquad t_{k}^{\text{far}} = \max\left(\frac{\ell_k - o_k}{d_k},\ \frac{h_k - o_k}{d_k}\right).$$

$$t_{\text{enter}} = \max_k t_{k}^{\text{near}}, \qquad t_{\text{exit}} = \min_k t_{k}^{\text{far}}, \qquad \text{hit} \iff t_{\text{enter}} \le t_{\text{exit}} \ \text{and}\ t_{\text{exit}} \ge 0.$$

In words: the ray is inside the box during the overlap of the three time intervals it spends inside each slab. If $d_k = 0$, the ray is inside that slab for all $t$ or never, depending on whether $o_k$ lies within it. *(card: [Slab test](../reference.md#slab-test))*

**Bounding volume hierarchy.** A binary tree whose leaves hold a few primitives and whose every node stores the axis-aligned bounding box of everything below it. **Traversal** for the nearest hit:

```
t_best = infinity
visit(node):
    if ray misses node.box or box entry t >= t_best: return
    if node is a leaf: test its primitives, lowering t_best
    else: visit nearer child first, then the farther one
```

The pruning test "$t_{\text{enter}} \ge t_{\text{best}}$" is what makes visiting the nearer child first pay off: once a close hit is found, farther boxes are rejected without being opened. *(card: [Bounding volume hierarchy](../reference.md#bounding-volume-hierarchy))*

**Surface area heuristic (SAH).** For a convex body inside a convex parent, the probability that a random ray hitting the parent also hits the child is approximately the ratio of their surface areas. The expected cost of splitting a node $P$ into children $L$ and $R$ is

$$C_{\text{split}} = C_{\text{trav}} + \frac{S_L}{S_P}\,N_L\,C_{\text{isect}} + \frac{S_R}{S_P}\,N_R\,C_{\text{isect}},$$

against $C_{\text{leaf}} = N_P\,C_{\text{isect}}$ for not splitting, where $S$ is surface area, $N$ primitive count, and $C_{\text{trav}}$, $C_{\text{isect}}$ the costs of a box test and a primitive test. A box of size $a \times b \times c$ has $S = 2(ab + bc + ca)$. The builder evaluates candidate splits and keeps the cheapest; if none beats $C_{\text{leaf}}$, it makes a leaf. *(card: [Surface area heuristic](../reference.md#surface-area-heuristic))*

In words: a child's cost counts only with the probability that a ray even reaches it — so pack many primitives into small boxes and leave the big, empty space alone.

**Space partitioning, for contrast.** A uniform **grid** or a **k-d tree** divides space into non-overlapping cells; traversal marches cells in order along the ray and can stop at the first cell with a hit, but a primitive straddling a boundary must be listed in every cell it touches, so memory is not bounded by $N$.

**Cost.** For reasonably distributed geometry, a BVH has depth about $\log_2 N$ and a ray visits a small multiple of that many nodes. Worst cases exist — many long thin overlapping primitives defeat any bounding hierarchy — which is why the SAH, not just balance, is used to build them.

## Picture

![Left: six blue triangles clustered in a blue box labelled L, four coral triangles in a coral box labelled R lower right, and a dashed grey root box around both. A grey ray passes diagonally through box L and never enters box R. Right: the corresponding tree, a root node with children L holding 6 triangles and R holding 4 triangles. Notes: tests are 3 boxes plus 6 triangles instead of 10 triangles; the ray misses R's box, so R's 4 triangles are never tested](assets/03-05-fig1.svg)

With ten triangles the saving is small. With a million, each level of the tree discards about half of what remains, and a ray that would have needed a million tests needs a few dozen box tests and a handful of triangle tests.

## Worked examples

**Example 1 (mechanical): a slab test.** Ray from the origin with $\mathbf{d} = (1,\ 0.5,\ -0.25)$; box $[2, 4] \times [1, 3] \times [-2, 0]$.

| axis | $(\ell - o)/d$ | $(h - o)/d$ | interval |
|---|---|---|---|
| $x$ | $2/1 = 2$ | $4/1 = 4$ | $[2,\ 4]$ |
| $y$ | $1/0.5 = 2$ | $3/0.5 = 6$ | $[2,\ 6]$ |
| $z$ | $-2/-0.25 = 8$ | $0/-0.25 = 0$ | $[0,\ 8]$ (swapped, since $d_z < 0$) |

$t_{\text{enter}} = \max(2, 2, 0) = 2$, $t_{\text{exit}} = \min(4, 6, 8) = 4$. Since $2 \le 4$: **hit**, inside the box for $t \in [2, 4]$, entering at $(2, 1, -0.5)$ — the corner edge where the $x$ and $y$ slabs begin together.

**Example 2 (why you'd care): where to split.** A node holds 8 unit cubes along the $x$-axis: six at $x = 0, 1, 2, 3, 4, 5$ (each occupying $[x, x+1]$) and two far away at $x = 20, 21$. All have unit extent in $y$ and $z$. Take $C_{\text{trav}} = C_{\text{isect}} = 1$. A box of length $w$ has surface area $2(w + 1 + w) = 4w + 2$.

*Parent:* $[0, 22]$, $S_P = 90$. Leaf cost: $8$.

*Split A, the median* (four and four): $L = [0, 4]$, $S_L = 18$; $R = [4, 22]$, $S_R = 74$.

$$C_A = 1 + \frac{18}{90}(4) + \frac{74}{90}(4) = 1 + 0.800 + 3.289 = 5.09.$$

*Split B, at the gap* (six and two): $L = [0, 6]$, $S_L = 26$; $R = [20, 22]$, $S_R = 10$.

$$C_B = 1 + \frac{26}{90}(6) + \frac{10}{90}(2) = 1 + 1.733 + 0.222 = 2.96.$$

The unbalanced split wins by a wide margin. The median split produced a right child that is **mostly empty space** — a 74-unit box around 4 cubes — so almost every ray that enters the parent also enters it and pays for four tests. Cutting at the gap leaves that empty space outside both children, where rays cross it for free. Balance is the right goal for a search tree over keys; for rays in space, emptiness is.

## Watch out

- **You might think** the first hit found in the nearer child must be the nearest hit overall — **but actually** BVH children overlap, so the farther child's box can be entered before that hit and contain something closer. Only skip a box when its entry $t$ is at least the best hit so far (Problem 3).
- **You might think** a balanced tree is the best tree — **but actually** Example 2's median split cost $1.7\times$ the SAH choice. What matters is the probability of entering each child, which tracks surface area, not primitive count.
- **You might think** the slab test needs special code for rays parallel to an axis — **but actually** with IEEE floating point, $1/0 = \pm\infty$ gives the right intervals automatically for $o_k$ strictly inside or outside the slab. The special case that does bite is $o_k$ exactly on a face with $d_k = 0$, which produces $0 \times \infty = \text{NaN}$ — robust implementations order their `min`/`max` so a NaN falls away.

## One-liner

> Wrap primitives in a tree of boxes, test a box before its contents, visit near children first and prune boxes entered after the best hit — and choose splits by surface area times count, because rays find big empty boxes, not balanced ones.

## Problems

**P1 (🟢)** A box is $[2, 5] \times [1, 3] \times [0, 4]$.
(a) A ray starts at $(1, 5, 1)$ with direction $(1, -1, 0.5)$. Run the slab test; give $t_{\text{enter}}$, $t_{\text{exit}}$, and the entry and exit points.
(b) A ray from the origin with direction $(1, 2, 0)$. Hit or miss? Which two slabs fail to overlap?

**P2 (🟡)** A node holds seven unit cubes at $x = 0, 1, 2, 5, 6, 7, 30$ (each occupying $[x, x+1]$, unit extent in $y$ and $z$), with $C_{\text{trav}} = C_{\text{isect}} = 1$.
(a) Compute the leaf cost and the SAH cost of splitting after the 3rd cube, after the 4th, and after the 6th.
(b) Which split does the builder choose, and why does the "obvious" split between the two clusters of three not win?

**P3 (🔴)** Construct a counterexample showing that the traversal rule "visit the nearer child; if it reports a hit, return it without visiting the farther child" can return the wrong answer. Give the two child boxes' entry and exit parameters along the ray and the $t$ of each child's triangle hit. Then state the correct rule and apply it to your example.

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathbf{o} = (1, 5, 1)$, $\mathbf{d} = (1, -1, 0.5)$.

| axis | values | interval |
|---|---|---|
| $x$ | $(2-1)/1 = 1$, $(5-1)/1 = 4$ | $[1, 4]$ |
| $y$ | $(1-5)/(-1) = 4$, $(3-5)/(-1) = 2$ | $[2, 4]$ |
| $z$ | $(0-1)/0.5 = -2$, $(4-1)/0.5 = 6$ | $[-2, 6]$ |

$t_{\text{enter}} = \max(1, 2, -2) = \mathbf{2}$, $t_{\text{exit}} = \min(4, 4, 6) = \mathbf{4}$. **Hit.**

Entry: $(1,5,1) + 2(1,-1,0.5) = \mathbf{(3,\ 3,\ 2)}$, on the top face $y = 3$. Exit: $(1,5,1) + 4(1,-1,0.5) = \mathbf{(5,\ 1,\ 3)}$, on the edge where $x = 5$ and $y = 1$ meet.

(b) $x$: $[2, 5]$. $y$: $[1/2, 3/2] = [0.5, 1.5]$. $z$: $d_z = 0$ and $o_z = 0$ is inside $[0, 4]$, so all $t$.

$t_{\text{enter}} = 2 > t_{\text{exit}} = 1.5$: **miss.** The $x$ and $y$ slabs don't overlap in time: the ray leaves the $y$ slab at $t = 1.5$, when it reaches $y = 3$ at $x = 1.5$, before it enters the $x$ slab at $t = 2$. It passes above the box's near-left edge.

**P2**

Surface area of a length-$w$ box: $4w + 2$.

(a) Parent $[0, 31]$: $S_P = 126$. Leaf cost $= 7$.

| split | $L$ | $S_L$ | $R$ | $S_R$ | cost |
|---|---|---|---|---|---|
| after 3rd: $\{0,1,2\}\ \vert\ \{5,6,7,30\}$ | $[0,3]$ | 14 | $[5,31]$ | 106 | $1 + \tfrac{14}{126}3 + \tfrac{106}{126}4 = 1 + 0.333 + 3.365 = \mathbf{4.70}$ |
| after 4th: $\{0,1,2,5\}\ \vert\ \{6,7,30\}$ | $[0,6]$ | 26 | $[6,31]$ | 102 | $1 + \tfrac{26}{126}4 + \tfrac{102}{126}3 = 1 + 0.825 + 2.429 = \mathbf{4.25}$ |
| after 6th: $\{0,\dots,7\}\ \vert\ \{30\}$ | $[0,8]$ | 34 | $[30,31]$ | 6 | $1 + \tfrac{34}{126}6 + \tfrac{6}{126}1 = 1 + 1.619 + 0.048 = \mathbf{2.67}$ |

(b) **After the 6th**, cost $2.67$. Separating the two clusters of three leaves the lone far cube in the right child, stretching that box across the 23-unit gap; the right child's area is almost the parent's, so rays pay for four tests nearly every time. Isolating the outlier removes the empty gap from both children. (A second split would later separate the two clusters inside $[0, 8]$.)

**P3**

*Accept criterion:* any configuration in which the nearer child's triangle hit $t_L$ is greater than the farther child's box entry $t^{\text{enter}}_R$, and the farther child contains a hit $t_R$ with $t^{\text{enter}}_R \le t_R < t_L$.

*Example.* Two overlapping child boxes along a ray:

- $L$: entered at $t = 1$, exited at $t = 6$; its triangle is hit at $t_L = 5$.
- $R$: entered at $t = 3$, exited at $t = 8$; its triangle is hit at $t_R = 4$.

$L$ is the nearer child (entry 1 < 3), so it is visited first and reports a hit at 5. The broken rule returns **5**. The true nearest hit is **4**, inside $R$.

*Correct rule:* after visiting $L$, $t_{\text{best}} = 5$. Visit $R$ unless $t^{\text{enter}}_R \ge t_{\text{best}}$. Here $3 < 5$, so $R$ is visited, its triangle at $t = 4$ lowers $t_{\text{best}}$, and the answer is 4. Had $R$ been entered at $t = 5.5$, it would have been skipped — correctly, since nothing in it could be nearer than 5.

</details>

## Flashback

**From Lesson 3.2 (shadow mapping):** A sun shadow camera sits at $(0, 20, 0)$ looking straight down (up vector $(0,0,-1)$), with an orthographic box $l = b = -10$, $r = t = 10$, $n = 1$, $f = 21$ and a $1024 \times 1024$ map.
(a) Find the texture coordinates, texel and light-space depth of the ground point $(-4, 0, -6)$.
(b) A shelf directly above it at height 3 was stored in that texel. What depth is stored, and is the ground point shadowed with bias $0.002$?
(c) What is the world size of one texel, and what bias (in depth units) would a surface tilted $45°$ to the light need to avoid acne?

<details>
<summary>Solution</summary>

(a) As in [3.2](03-02-shadow-mapping.md)'s Example 1, the light view has $\mathbf{u} = (1,0,0)$, $\mathbf{v} = (0,0,-1)$, $\mathbf{w} = (0,1,0)$. Offset $(-4, -20, -6)$ gives light-view $(-4,\ 6,\ -20)$.

NDC: $x = -0.4$, $y = 0.6$, $z = -0.1(-20) - 1.1 = 0.9$. Texture: $(s, t, d) = \mathbf{(0.3,\ 0.8,\ 0.95)}$, texel $(\lfloor 307.2 \rfloor, \lfloor 819.2 \rfloor) = \mathbf{(307,\ 819)}$.

(b) The shelf is at light-view $z = -17$: $z_{\text{ndc}} = 1.7 - 1.1 = 0.6$, stored depth $\mathbf{0.8}$. Test: $0.95 \le 0.802$ fails — **shadowed**.

(c) $20\ \text{m}/1024 = \mathbf{19.5}$ **mm**. At $45°$, depth varies by $19.5 \times \tan 45° = 19.5$ mm across a texel; over the 20 m depth range that is $0.0195/20 = \mathbf{0.00098}$. The $0.002$ bias covers it; a $70°$ surface ($19.5 \times 2.75 = 53.6$ mm, $0.0027$) would not.

</details>

## Connections

- **Backward:** leaves run [3.3](03-03-ray-casting-and-intersection.md)'s intersection tests; the tree is [`programming-foundations` 3.1](../../programming-foundations/lessons/03-01-binary-trees-and-binary-search-trees.md)'s binary tree, but ordered by space instead of by key; the payoff is the $\log$ in [1.1](01-01-the-graphics-pipeline.md)'s cost model.
- **Forward:** [3.7](03-07-monte-carlo-path-tracing.md) sends many random rays per pixel per bounce, which is only affordable because each costs logarithmic time. Hardware ray tracing on modern GPUs builds and traverses exactly these BVHs in silicon.
- **Sideways:** "choose the partition that minimizes expected cost under the query distribution" is the same principle as index selection in [`databases`](../../databases/syllabus.md) and as greedy impurity-minimizing splits in decision trees ([`machine-learning`](../../machine-learning/syllabus.md)), where a child's contribution is also weighted by the probability of reaching it.
