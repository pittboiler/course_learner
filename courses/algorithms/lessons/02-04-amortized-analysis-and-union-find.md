# Algorithms · Lesson 2.4: Amortized analysis & union-find

> ⏱ ~15 min · Module 2: Greedy & dynamic programming · Builds on: [1.1 (asymptotic notation)](01-01-asymptotic-notation.md), [2.3 (Kruskal)](02-03-minimum-spanning-trees-kruskal-and-prim.md) · Unlocks: 2.5 (dynamic programming)

## Why this matters

Kruskal's algorithm needed to ask, $m$ times, "are these two vertices already connected?" — and I claimed the answer costs near-constant time. This lesson makes good on that, and in doing so introduces the analysis technique that makes it possible.

The technique is **amortized analysis**: bounding the total cost of a *sequence* of operations rather than the worst case of any single one. It matters because worst-case-per-operation is often a wild overestimate. Appending to a dynamic array occasionally costs $\Theta(n)$ — but it cannot cost that often, and a bound that ignores "how often" would tell you $n$ appends cost $\Theta(n^2)$ when they actually cost $\Theta(n)$.

The judgement payoff is direct: **amortized $O(1)$ and worst-case $O(1)$ are different guarantees**, and the difference matters when a single slow operation is unacceptable — a real-time deadline, a request latency budget, a garbage-collection pause. Knowing which one a data structure gives you is exactly the kind of thing a specification sheet states and a casual reading misses.

## The idea

A dynamic array doubles its capacity when full. Appending is normally $O(1)$: write one slot, bump a counter. But when the array is full, appending allocates a bigger block and **copies everything**, costing $\Theta(n)$.

So the worst case for one append is $\Theta(n)$. Is a sequence of $n$ appends therefore $\Theta(n^2)$? No — and seeing why is the whole idea. The expensive appends are the ones at sizes $1, 2, 4, 8, \dots$, and their costs sum to

$$1 + 2 + 4 + \cdots + \frac n2 \;<\; n.$$

**The copies get more expensive exactly as fast as they get rarer**, and a geometric series with ratio $\tfrac12$ converges. Total cost for $n$ appends is under $2n$, so the *average* cost per append is under 2. That average is not a probabilistic statement — there is no randomness anywhere. It is a worst-case bound on the total, divided by the number of operations. That is what "amortized" means.

Three standard ways to make it rigorous:

- **Aggregate:** bound the total cost of $n$ operations directly, then divide. Simplest when all operations are alike.
- **Accounting:** charge each operation a fixed "price," bank the surplus as credit, and spend credit on the expensive ones. You must prove the balance never goes negative.
- **[Potential](../reference.md#the-potential-method):** define a function $\Phi$ of the data structure's state, and define amortized cost as actual cost plus $\Delta\Phi$. Telescoping makes the total come out. Most flexible, and the one that scales to hard cases.

The second half of the lesson applies this to **union-find**, where two small tricks — union by rank and path compression — bring the amortized cost per operation down to $\alpha(n)$, an inverse-Ackermann function that is at most 4 for any $n$ that will ever exist.

## The formal version

**Amortized cost.** For a sequence of $n$ operations with total actual cost $T$, the amortized cost per operation is $T/n$. A data structure "supports operation X in amortized $O(f(n))$" if **every** sequence of $n$ operations costs $O(n f(n))$ in total.

**The potential method.** Let $\Phi(D)$ map a state to a real number with $\Phi(D_0) = 0$ and $\Phi(D_i) \ge 0$ for all $i$. Define the amortized cost of the $i$-th operation as

$$\hat c_i \;=\; c_i + \Phi(D_i) - \Phi(D_{i-1}).$$

Then the total amortized cost bounds the total actual cost:

$$\sum_{i=1}^n \hat c_i \;=\; \sum_{i=1}^n c_i + \Phi(D_n) - \Phi(D_0) \;=\; \sum_{i=1}^n c_i + \Phi(D_n) \;\ge\; \sum_{i=1}^n c_i,$$

since $\Phi(D_n) \ge 0$. The middle equality is a telescoping sum — every intermediate $\Phi$ cancels.

**Theorem (dynamic array).** Starting from capacity 1 and doubling when full, $n$ appends cost $O(n)$ total, so each append is amortized $O(1)$.

*Aggregate proof.* Copies happen when the size reaches $1, 2, 4, \dots, 2^{\lfloor\log_2 n\rfloor}$, costing that many element-moves each. Total copy cost is

$$\sum_{j=0}^{\lfloor \log_2 n\rfloor} 2^j \;=\; 2^{\lfloor\log_2 n\rfloor + 1} - 1 \;<\; 2n,$$

plus $n$ for the writes themselves: under $3n$. $\blacksquare$

(Measured: $n = 128$ appends cost 255 operations — under $2n$ — while growing by **one** slot instead of doubling costs 8,256, which is $n(n-1)/2 + n$. That is the accidental quadratic of [Lesson 1.1](01-01-asymptotic-notation.md) hiding inside a data structure.)

*Potential proof.* Let $\Phi = 2\cdot(\text{size}) - (\text{capacity})$ when the array is at least half full. A non-copying append has $c_i = 1$ and $\Delta\Phi = 2$, so $\hat c_i = 3$. A copying append at size $s = $ capacity has $c_i = s + 1$; afterwards capacity is $2s$ and size $s+1$, so $\Phi$ goes from $2s - s = s$ to $2(s+1) - 2s = 2$, giving $\Delta\Phi = 2 - s$ and

$$\hat c_i = (s+1) + (2 - s) = 3.$$

Every append has amortized cost 3. $\blacksquare$

**Union-find (disjoint-set forest).** Maintain a partition of $\{1,\dots,n\}$ under:

- `MAKE-SET(x)` — new singleton;
- `FIND(x)` — return the representative of $x$'s set;
- `UNION(x,y)` — merge the two sets.

Represent each set as a tree; the root is the representative.

```
FIND(x):
    r <- x
    while parent[r] != r: r <- parent[r]
    while parent[x] != r:  parent[x], x <- r, parent[x]   -- path compression
    return r

UNION(x,y):
    rx, ry <- FIND(x), FIND(y)
    if rx == ry: return false
    if rank[rx] < rank[ry]: swap rx, ry                   -- union by rank
    parent[ry] <- rx
    if rank[rx] == rank[ry]: rank[rx] <- rank[rx] + 1
    return true
```

Two independent optimizations:

- **Union by rank** attaches the shorter tree under the taller, keeping height $O(\log n)$.
- **Path compression** re-points every node on a `FIND` path directly at the root, flattening the tree for future queries.

**Theorem (Tarjan).** With both, any sequence of $m$ operations on $n$ elements costs $O(m\,\alpha(n))$, where $\alpha$ is the inverse Ackermann function. Since $\alpha(n) \le 4$ for every $n$ below roughly $2^{2^{2^{65536}}}$, this is constant for all practical purposes — though it is **not** $O(1)$: Fredman and Saks proved a matching $\Omega(\alpha(n))$ lower bound. (The proof is a sophisticated potential argument and is beyond this course; either optimization alone gives $O(\log n)$.)

**Consequence for Kruskal.** With $m$ edges and $n$ vertices, the find/union work is $O(m\,\alpha(n))$, which is dominated by the $\Theta(m\log m)$ sort — so [Kruskal](02-03-minimum-spanning-trees-kruskal-and-prim.md) is $\Theta(m\log n)$, as claimed.

## Picture

![A bar chart of the cost of each append into a doubling dynamic array, for appends 1 through 32. Most bars have height one; spikes occur at appends 2, 3, 5, 9, 17 and 33 with heights growing as powers of two. A dashed horizontal line marks the amortized cost of under 2.](assets/02-04-fig1.svg)

The spikes are alarming and the dashed line is the point: they double in height but halve in frequency, so their contribution per operation is bounded. Any *individual* append can be the expensive one — which is why this is an amortized and not a worst-case guarantee — but you can never have many of them close together.

The coral note at the bottom is the comparison that makes the mechanism obvious. Grow by a **constant** instead of a constant **factor** and the copies happen every time, summing to $n(n-1)/2$. Doubling versus adding-one is the difference between $\Theta(n)$ and $\Theta(n^2)$ for the same $n$ appends, and the only thing that changed is the growth *rule*.

## Worked examples

**Example 1 (mechanical): the dynamic array by all three methods.**

*Aggregate.* $n$ appends: $n$ writes plus copies at sizes $1,2,4,\dots$ summing to under $2n$. Total under $3n$, so amortized $O(1)$.

*Accounting.* Charge **3** per append. One unit pays for writing the new element. The other two are banked *on that element*. When a copy happens at size $s$, every one of the $s$ elements being moved has 2 credits banked — but we only need 1 credit each to pay for its move. Why 2? Because after a doubling from capacity $s$ to $2s$, only the elements added *since the last copy* have credits, and there are $s/2$ of them, each needing to fund the move of two elements. So 2 credits each exactly covers $s$ moves. The balance never goes negative, so 3 per append is a valid amortized bound.

*Potential.* $\Phi = 2\cdot\text{size} - \text{capacity}$, as above: every append comes out at exactly 3.

All three give the same constant, which is reassuring but not automatic — they are different bookkeeping schemes for the same total, and the potential method is the one that generalizes to structures where operations differ.

**Example 2 (why you'd care): amortized is not worst-case.** Here is a claim you will meet: *"appending to a vector is $O(1)$."*

It is $O(1)$ **amortized**. A single append can cost $\Theta(n)$ — allocating a new block and copying every element. For most software that is irrelevant: the average is what determines throughput. But there are settings where it is exactly the wrong guarantee:

- **Real-time systems.** A control loop with a 1 ms deadline cannot tolerate one append that copies a million elements, even if the average is 20 ns. Such systems pre-allocate, or use structures with worst-case bounds.
- **Tail latency.** If a web request appends to a growing buffer, the occasional doubling shows up in the 99.9th percentile. Amortized analysis explicitly averages away the thing you are being paged about.
- **Adversarial input.** Amortized bounds hold for *every* sequence, so an adversary cannot force a bad average — that part is safe. But an adversary who controls *when* requests arrive can align expensive operations with peak load.

The honest summary of the guarantee:

| bound | means |
|---|---|
| worst-case $O(1)$ | **every** operation is fast |
| amortized $O(1)$ | **every sequence** of $n$ operations costs $O(n)$; individual ones may be slow |
| expected $O(1)$ | fast **on average over the algorithm's coins**; a specific run may be slow (Lesson 4.4) |

These are three genuinely different promises, and reading one as another is a common and consequential mistake. Hash tables, notably, offer *expected* $O(1)$ lookup — a different failure mode again, and the reason adversarially-chosen keys can degrade a hash table to $\Theta(n)$ per operation.

## Watch out

- **You might think** amortized analysis involves probability — **but actually** there is no randomness in it at all. It is a worst-case bound on a total, divided by the number of operations, and it holds for every sequence including adversarial ones. **Expected** cost (Lesson 4.4) is the probabilistic notion, and confusing the two leads to wrong conclusions about what an adversary can do.
- **You might think** the growth factor 2 is essential — **but actually** any constant factor $>1$ works: growing by $1.5\times$ gives amortized $O(1)$ with a different constant (and better memory reuse, which is why several real implementations use it). What fails is growing by a constant *amount*: $+1$, $+100$, or $+1000$ all give $\Theta(n^2)$ for $n$ appends, because the copies never become rare. The distinction is factor versus amount, not the particular factor.
- **You might think** union-find is $O(1)$ per operation — **but actually** it is $O(\alpha(n))$ amortized, and there is a proven $\Omega(\alpha(n))$ lower bound, so the $\alpha$ is real and not an artefact of the analysis. It is *practically* constant since $\alpha(n) \le 4$ for any conceivable $n$, and saying "effectively constant" is fine — saying "constant" is false.

## One-liner

> Bound the total cost of a sequence, not the worst cost of one operation — because the expensive steps get rarer exactly as fast as they get costlier, and a geometric series is what makes doubling free.

## Problems

**P1 (🟢)** A dynamic array starts with capacity 1 and doubles when full.

(a) List the appends (by index $i$) that trigger a copy, for $i$ up to 32, and the copy cost of each. (b) Give the total cost of 32 appends, counting 1 per write plus 1 per element moved. (c) Repeat for a version that grows by **4 slots** instead of doubling, and give the total for 32 appends. (d) State each version's asymptotic cost for $n$ appends.

**P2 (🟡)** A **binary counter** starts at 0 and is incremented $n$ times. The cost of an increment is the number of bits it flips.

(a) Increment from 0 to 8 and record the cost of each step. (b) Use the aggregate method to bound the total cost of $n$ increments. *(Hint: how often does bit $j$ flip?)* (c) Give the amortized cost per increment. (d) Give a potential function that proves it, and verify it on the step from 7 to 8.

**P3 (🔴)** Run union-find on $\{0,\dots,7\}$ with union by rank and path compression, processing

$$\text{union}(0,1),\ \text{union}(2,3),\ \text{union}(4,5),\ \text{union}(6,7),\ \text{union}(0,2),\ \text{union}(4,6),\ \text{union}(0,4).$$

(a) Give the parent array and rank array after all seven unions, taking the convention that on a tie the first argument's root becomes the parent. (b) Now call `FIND(7)`. Give the path walked and the parent array afterwards. (c) A colleague proposes dropping union by rank and keeping only path compression, arguing "compression flattens everything anyway." Say what guarantee remains, and give the shape of an input that makes their version slower than the full one. (d) State why Kruskal's overall running time is unaffected by any of this.

<details>
<summary>Solutions</summary>

**P1** (a) A copy happens when the array is full, i.e. at appends $i = 2, 3, 5, 9, 17$ (and would next be 33). The copy at append $i$ moves $i-1$ elements:

| append $i$ | 2 | 3 | 5 | 9 | 17 |
|---|---|---|---|---|---|
| elements copied | 1 | 2 | 4 | 8 | 16 |

(b) Total $= 32$ writes $+ (1+2+4+8+16) = 32 + 31 = \mathbf{63}$. That is under $2n = 64$, matching the theory. (Machine-checked: 63.)

(c) Growing by 4 slots (starting from capacity 1, as before): capacities run $1, 5, 9, 13, \dots$, so copies happen at appends $2, 6, 10, 14, 18, 22, 26, 30$, moving $1, 5, 9, 13, 17, 21, 25, 29$ elements:

$$1 + 5 + 9 + 13 + 17 + 21 + 25 + 29 = 120.$$

Total $= 32 + 120 = \mathbf{152}$, against doubling's 63 — already **more than double**, at only $n = 32$, and the gap widens without bound. (Machine-checked.)

(d) Doubling: $\Theta(n)$ total, amortized $O(1)$ per append. Growing by a constant $c$: copies at sizes $c, 2c, \dots, n$ sum to $c(1 + 2 + \cdots + n/c) = \Theta(n^2/c)$, so **$\Theta(n^2)$** total and $\Theta(n)$ amortized per append. The constant $c$ changes the constant factor and not the class.

**P2** (a) Cost = number of bits flipped:

| step | binary | bits flipped | cost |
|---|---|---|---|
| $0\to1$ | $000\to001$ | 1 | 1 |
| $1\to2$ | $001\to010$ | 2 | 2 |
| $2\to3$ | $010\to011$ | 1 | 1 |
| $3\to4$ | $011\to100$ | 3 | 3 |
| $4\to5$ | $100\to101$ | 1 | 1 |
| $5\to6$ | $101\to110$ | 2 | 2 |
| $6\to7$ | $110\to111$ | 1 | 1 |
| $7\to8$ | $0111\to1000$ | 4 | 4 |

Total for 8 increments: $1+2+1+3+1+2+1+4 = 15$.

(b) **Aggregate.** Bit $j$ (counting from 0) flips once every $2^j$ increments, so over $n$ increments it flips $\lfloor n/2^j \rfloor$ times. Total flips:

$$\sum_{j \ge 0} \left\lfloor \frac{n}{2^j} \right\rfloor \;<\; n\sum_{j\ge0} \frac{1}{2^j} \;=\; 2n.$$

(Check at $n = 8$: $8 + 4 + 2 + 1 = 15$ ✓ — exactly the tally above.)

(c) Amortized cost $< 2n/n = \mathbf{2}$ bit-flips per increment, i.e. $O(1)$ — even though a single increment can flip $\Theta(\log n)$ bits.

(d) Take $\Phi = $ **the number of 1-bits in the counter**. It is 0 initially and never negative ✓.

An increment that flips $k$ trailing 1s to 0 and one 0 to 1 has actual cost $c_i = k+1$ and changes the bit-count by $\Delta\Phi = 1 - k$. So

$$\hat c_i = (k+1) + (1-k) = 2$$

for every increment. Amortized cost exactly 2. $\blacksquare$

*Verify on $7 \to 8$:* $0111 \to 1000$, so $k = 3$ trailing ones flip to zero and one zero flips to one: $c_i = 4$. Bit-count goes from 3 to 1, so $\Delta\Phi = -2$. Then $\hat c_i = 4 + (-2) = 2$ ✓ — the expensive step is paid for out of the potential that the seven cheap steps built up.

**P3** (a) Tracing (ties: first argument's root wins, and its rank increments):

| union | effect | ranks after |
|---|---|---|
| $(0,1)$ | $p[1] \gets 0$ | $r[0]=1$ |
| $(2,3)$ | $p[3] \gets 2$ | $r[2]=1$ |
| $(4,5)$ | $p[5] \gets 4$ | $r[4]=1$ |
| $(6,7)$ | $p[7] \gets 6$ | $r[6]=1$ |
| $(0,2)$ | ranks tie at 1: $p[2] \gets 0$ | $r[0]=2$ |
| $(4,6)$ | ranks tie at 1: $p[6] \gets 4$ | $r[4]=2$ |
| $(0,4)$ | ranks tie at 2: $p[4] \gets 0$ | $r[0]=3$ |

$$\text{parent} = [0,\,0,\,0,\,2,\,0,\,4,\,4,\,6], \qquad \text{rank} = [3,\,0,\,1,\,0,\,2,\,0,\,1,\,0].$$

(Machine-verified.)

(b) `FIND(7)`: walk $7 \to 6 \to 4 \to 0$, and $0$ is its own parent, so the root is **0**. The path walked is $7, 6, 4$. Path compression re-points each of them directly at 0:

$$\text{parent} = [0,\,0,\,0,\,2,\,\mathbf{0},\,0,\,\mathbf{0},\,\mathbf{0}].$$

(Entries 4, 6, 7 changed; note 5's parent stays 4, which is now itself a child of 0 — compression only flattens the nodes actually visited.)

(c) **What remains:** path compression alone still gives amortized $O(\log n)$ per operation — a real bound, and in fact compression alone achieves $O(\log n)$ amortized while rank alone achieves $O(\log n)$ worst-case. What is lost is the $\alpha(n)$ result, which needs **both**.

**The bad input shape:** without union by rank, `UNION` always attaches (say) the second root under the first, so repeatedly unioning a large tree *into* a fresh singleton builds a path. Concretely, do

$$\text{union}(1,0),\quad \text{union}(2,1),\quad \text{union}(3,2),\quad \dots,\quad \text{union}(n-1, n-2)$$

with the convention that the second argument's root is attached under the first — this creates a chain of length $n$. A single `FIND` on the deep end then costs $\Theta(n)$ before compression flattens it. With union by rank, the tree height never exceeds $\log_2 n$ in the first place, so no such chain can be built.

(The general moral: union by rank is a *preventative* measure and path compression is a *curative* one. Compression repairs a deep tree after you have paid to walk it once; rank stops it forming.)

(d) Because Kruskal is **dominated by its sort**. The find/union work is $O(m\,\alpha(n))$ with both optimizations and $O(m\log n)$ with either one alone — and the sort is already $\Theta(m\log m) = \Theta(m\log n)$. So even the weaker union-find is asymptotically free inside Kruskal, and the $\alpha(n)$ result improves a term that was never the bottleneck.

This is [Lesson 1.3's P3](01-03-the-master-theorem.md) moral again: **optimize the part that dominates.** Union-find's near-constant bound is a beautiful result, and for Kruskal specifically it buys nothing asymptotically — it matters where find/union is the main event, as in incremental connectivity or Tarjan's offline LCA.

</details>

## Flashback

**From Lesson 2.2 (Huffman coding):** Build a Huffman code for the frequencies

$$w{:}40,\quad x{:}20,\quad y{:}20,\quad z{:}20.$$

(a) Give the merge order and the codes. (b) Compute the expected length. (c) A fixed-length code needs 2 bits. Explain why Huffman does not beat it here, and state the general condition under which Huffman gives no saving at all.

<details>
<summary>Solution</summary>

(a) Merges, two smallest each time (there is a three-way tie at 20, so several runs are possible; one valid run):

| step | merge | result | queue after |
|---|---|---|---|
| 1 | $x{:}20 + y{:}20$ | 40 | $20, 40, 40$ |
| 2 | $z{:}20 + (xy){:}40$ | 60 | $40, 60$ |
| 3 | $w{:}40 + 60$ | 100 | done |

Tree: root → $w$ (leaf) and a node of weight 60; that node → $z$ (leaf) and $(xy)$; $(xy)$ → $x, y$. Codes:

$$w \to 0, \qquad z \to 10, \qquad x \to 110, \qquad y \to 111.$$

(b) Expected length:

$$L = \frac{40(1) + 20(2) + 20(3) + 20(3)}{100} = \frac{40 + 40 + 60 + 60}{100} = \mathbf{2.00 \text{ bits}}.$$

(c) Exactly the fixed-length cost — **no saving**. (A different tie-break gives the balanced tree with all four codes of length 2, also $L = 2.00$; the two trees differ in shape and agree in cost, which is the tie-breaking non-uniqueness from [Lesson 2.2's](02-02-huffman-coding.md) first Watch out.)

The reason is that the distribution is close to uniform. Huffman's saving comes from *skew* — giving short codes to symbols that occur often — and here no symbol occurs enough more often than another to earn one. The entropy is

$$H = -0.4\log_2 0.4 - 3(0.2\log_2 0.2) = 0.529 + 1.393 = 1.922 \text{ bits},$$

so even the theoretical floor is only 0.08 bits below the fixed-length code, and Huffman's integer lengths cannot capture that.

**The general condition:** Huffman gives no saving when all frequencies are (or round to) powers of two times a common value — most simply, when the distribution is **uniform over a power-of-two alphabet**, where the optimal tree is perfectly balanced and every codeword has the same length. More broadly, the saving is small whenever the distribution is near-uniform, and large when it is skewed — which is exactly the mirror of [Lesson 2.2's P3](02-02-huffman-coding.md), where extreme skew made Huffman *inefficient* relative to entropy for the opposite reason (integer lengths cannot go below 1 bit).

</details>

## Connections

- **Backward:** the geometric series that makes doubling cheap is the same one from [Lesson 1.2's](01-02-recurrences-recursion-trees-substitution.md) recursion trees, and the grow-by-one alternative is [Lesson 1.1's](01-01-asymptotic-notation.md) accidental quadratic in a data structure. The union-find here is the structure [Kruskal](02-03-minimum-spanning-trees-kruskal-and-prim.md) needed.
- **Forward:** Lesson 3.3's Dijkstra leans on a priority queue whose bounds are worst-case rather than amortized; Lesson 4.4's randomized algorithms introduce *expected* cost, completing the trio of guarantees in Example 2. The dynamic-array bound is what justified [Lesson 1.1's P3](01-01-asymptotic-notation.md) repair.
- **Sideways:** the "amortized ≠ worst-case" distinction is the reason garbage-collected runtimes advertise pause-time percentiles rather than averages, a systems concern [operating-systems](../../operating-systems/syllabus.md) takes up. The potential method is a Lyapunov-function argument in disguise — the same device used for stability in [dynamical-systems](../../dynamical-systems/syllabus.md), where a non-negative function that decreases along trajectories proves convergence.
