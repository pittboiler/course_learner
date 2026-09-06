# Algorithms · Lesson 2.5: Dynamic programming & knapsack

> ⏱ ~15 min · Module 2: Greedy & dynamic programming · Builds on: [2.3 (greedy on graphs)](02-03-minimum-spanning-trees-kruskal-and-prim.md), [1.2 (recurrences)](01-02-recurrences-recursion-trees-substitution.md) · Unlocks: 2.6 (DP on sequences)

## Why this matters

Greedy commits to a choice and never reconsiders. That works when the problem has a *safe* local choice — an earliest finish time, a cheapest cut edge — and the last four lessons have been about proving when it does. This lesson is what to do when **no such choice exists.**

Dynamic programming's answer is: do not choose. Consider both options, solve the resulting subproblems, and keep whichever turned out better — and make that affordable by *remembering* the subproblem answers instead of recomputing them. That single move turns exponential search into polynomial time on a huge class of problems.

The judgement content is knowing which regime you are in. Given an optimization problem, "greedy or DP?" is the first question, and getting it wrong costs you either correctness (greedy when you needed DP) or a large constant factor (DP when greedy would have done). The knapsack problem is the standard place to learn the distinction, because the *fractional* version is greedy-solvable and the *0/1* version is not — same objects, one word different, entirely different algorithm.

## The idea

**0/1 knapsack.** You have a bag of capacity $W$ and $n$ items, item $i$ weighing $w_i$ and worth $v_i$. Take a subset of maximum total value that fits. Each item is taken whole or not at all.

The greedy instinct is to sort by value-per-weight and take greedily. It fails, and the failure is easy to see: with capacity 10 and items $(6,10), (5,7), (5,7)$, the ratios are $1.67, 1.4, 1.4$, so greedy takes the first item for value 10 and then cannot fit anything else. Taking the two "worse" items gives $14$. **The best local choice blocked the best global one**, and no repair to the rule fixes it — the problem is NP-hard (Lesson 4.2).

So consider both branches. Look at item $n$: either it is in the optimal solution or it is not.

- **Not in it:** the answer is the best you can do with items $1..n-1$ and capacity $W$.
- **In it:** the answer is $v_n$ plus the best you can do with items $1..n-1$ and capacity $W - w_n$.

Take the better. That is a correct recursion, and run naively it is exponential — $2^n$ leaves. But look at what it asks for: always "best value using the first $i$ items within capacity $w$." There are only $n \times W$ such questions, so the recursion must be asking the *same* questions over and over.

**Remember the answers and the exponential collapses to a table of size $nW$.** That is the whole technique.

Two conditions make it work, and they are what you check before reaching for DP:

- **[Optimal substructure](../reference.md#optimal-substructure)** — an optimal solution is built from optimal solutions to subproblems. (True here: if the best packing of capacity $W$ includes item $n$, then what it does with the other items must be the best packing of capacity $W-w_n$, or you could improve it.)
- **Overlapping subproblems** — the same subproblems recur many times. (True here: $n \times W$ distinct questions, exponentially many recursive calls.)

Divide-and-conquer has the first and *not* the second — merge sort's two halves are disjoint problems, never repeated — which is why [Module 1](01-05-divide-and-conquer-beyond-sorting.md) never needed a table.

## The formal version

**The recurrence.** Let $\mathrm{OPT}[i, w]$ be the maximum value obtainable from the first $i$ items with capacity $w$. Then

$$\mathrm{OPT}[i,w] \;=\;
\begin{cases}
0 & i = 0 \text{ or } w = 0,\\[2pt]
\mathrm{OPT}[i-1, w] & w_i > w \quad(\text{item } i \text{ does not fit}),\\[2pt]
\max\big(\underbrace{\mathrm{OPT}[i-1,w]}_{\text{skip } i},\ \underbrace{v_i + \mathrm{OPT}[i-1,\,w-w_i]}_{\text{take } i}\big) & \text{otherwise}.
\end{cases}$$

The answer is $\mathrm{OPT}[n, W]$.

```
KNAPSACK(items[1..n], W):
    for w <- 0 to W:  OPT[0][w] <- 0
    for i <- 1 to n:
        for w <- 0 to W:
            OPT[i][w] <- OPT[i-1][w]
            if w_i <= w:
                OPT[i][w] <- max(OPT[i][w], v_i + OPT[i-1][w - w_i])
    return OPT[n][W]
```

**Cost.** $\Theta(nW)$ time and $\Theta(nW)$ space (reducible to $\Theta(W)$ by keeping one row, at the cost of losing the backtrack).

**Recovering the solution.** The table gives the *value*; the *items* come from walking back:

```
w <- W;  S <- empty
for i <- n down to 1:
    if OPT[i][w] != OPT[i-1][w]:      -- item i was taken
        add i to S;  w <- w - w_i
return S
```

**Memoization versus bottom-up.** The same recurrence, two implementations:

| | top-down (memoized) | bottom-up (table) |
|---|---|---|
| control | recursion + a cache | nested loops |
| computes | only reachable subproblems | all of them |
| overhead | recursion, hashing | none |
| easier when | subproblem space is sparse or awkward to order | you need the whole table anyway |

Both are $\Theta(nW)$ here. Bottom-up is usually faster by a constant; memoization is usually easier to write from the recurrence.

**A crucial caveat about the cost.** $\Theta(nW)$ looks polynomial and is not — it is **[pseudo-polynomial](../reference.md#pseudo-polynomial)**. The input's *length* is $\Theta(n\log W)$ bits, because $W$ is written in binary. So $\Theta(nW)$ is exponential in the input size: adding one bit to $W$ doubles the runtime. 0/1 knapsack is NP-hard, and this algorithm is not a counterexample to that.

**DAG shortest paths, the same idea.** Any DP is a shortest-path computation on a directed acyclic graph whose nodes are subproblems and whose edges are "this subproblem needs that one." The topological order of that DAG is the order in which the loops must fill the table — and this is why the loops go the way they do. Lesson 3.2 makes the topological ordering explicit.

## Picture

![A five-by-six dynamic-programming table for 0/1 knapsack with items of weight-value (2,3), (3,4), (4,5) and (5,6) at capacity five. Rows are the number of items considered, columns the capacity. The bottom-right cell holds 7. Cells on the backtracking path are highlighted, showing that items 3 and 4 are skipped and items 2 and 1 are taken.](assets/02-05-fig1.svg)

Each cell answers one question — *best value from the first $i$ items within weight $w$* — and depends only on two cells in the row above: the one directly up (skip item $i$) and the one up-and-$w_i$-to-the-left (take it). That two-cell dependency is what makes the whole table fillable in one pass.

The highlighted path is the backtrack. Read it from the corner: $\mathrm{OPT}[4,5] = \mathrm{OPT}[3,5] = 7$, so item 4 was not taken; $\mathrm{OPT}[3,5] = \mathrm{OPT}[2,5] = 7$, so item 3 was not taken; $\mathrm{OPT}[2,5] = 7 \ne \mathrm{OPT}[1,5] = 3$, so item 2 **was** taken — move to $[1, 5-3] = [1,2]$; and there $3 \ne 0$, so item 1 was taken too. Chosen: $(3,4)$ and $(2,3)$, weight 5, value 7.

**The table stores values and the path stores decisions**, and you need the second to answer "which items," which is what a user actually wants.

## Worked examples

**Example 1 (mechanical): filling the table.** Items $(w,v) = (2,3),\ (3,4),\ (4,5),\ (5,6)$ and $W = 5$.

| | $w{=}0$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $i{=}0$ | 0 | 0 | 0 | 0 | 0 | 0 |
| $i{=}1$ $(2,3)$ | 0 | 0 | 3 | 3 | 3 | 3 |
| $i{=}2$ $(3,4)$ | 0 | 0 | 3 | 4 | 4 | **7** |
| $i{=}3$ $(4,5)$ | 0 | 0 | 3 | 4 | 5 | 7 |
| $i{=}4$ $(5,6)$ | 0 | 0 | 3 | 4 | 5 | **7** |

Two cells worth checking by hand:

- $\mathrm{OPT}[2,5]$: skip gives $\mathrm{OPT}[1,5] = 3$; take gives $4 + \mathrm{OPT}[1, 5-3] = 4 + \mathrm{OPT}[1,2] = 4 + 3 = 7$. Max is **7**.
- $\mathrm{OPT}[4,5]$: skip gives $\mathrm{OPT}[3,5] = 7$; take gives $6 + \mathrm{OPT}[3, 0] = 6 + 0 = 6$. Max is **7** — the single heaviest, most valuable item loses to a pair.

Answer **7**, achieved by items 1 and 2. (Machine-verified.)

**Example 2 (why you'd care): fractional versus 0/1.** Change one rule — allow taking *fractions* of items — and greedy becomes optimal.

*Fractional knapsack:* sort by $v_i/w_i$ descending, take whole items while they fit, then fill the remaining capacity with a fraction of the next. On the instance $(6,10), (5,7), (5,7)$ with $W = 10$: ratios $1.667, 1.4, 1.4$; take item 1 whole (value 10, 4 capacity left), then $\tfrac45$ of item 2 for $0.8 \times 7 = 5.6$. Total $\mathbf{15.6}$.

*Why greedy is right here:* an exchange argument. If an optimal solution uses less than the full amount of a higher-ratio item while using some of a lower-ratio one, swap a sliver — value goes up or stays equal. Fractions make the swap always possible, so the greedy choice is safe.

*0/1 on the same instance:* fractions are banned, so the swap argument dies at exactly the point where it needed a sliver. Greedy takes item 1 for **10**; DP finds items 2 and 3 for **14**. Verified by the table.

$$\text{fractional } 15.6 \;>\; \text{0/1 optimum } 14 \;>\; \text{0/1 greedy } 10.$$

**The general lesson.** The greedy proof needed the ability to make an *arbitrarily small* exchange. Integrality destroys that, and the problem's complexity jumps from $\Theta(n\log n)$ to NP-hard. That the fractional relaxation is easy while the integer version is hard is not a knapsack quirk — it is the central fact of integer programming, and the reason linear-programming relaxations are the standard attack on hard combinatorial problems (Lesson 4.3).

**A useful diagnostic:** if a greedy proof needs "swap a bit of $x$ for a bit of $y$," check whether your problem lets you take a *bit* of anything. If not, expect DP or hardness.

## Watch out

- **You might think** $\Theta(nW)$ means knapsack is solved in polynomial time — **but actually** $W$ is written in binary, so the input length is $\Theta(n\log W)$ and $\Theta(nW)$ is *exponential* in it. This is a **pseudo-polynomial** bound. Concretely: doubling the number of digits of $W$ squares the running time. 0/1 knapsack is NP-hard, and this is the single most common way people mistakenly believe they have refuted that.
- **You might think** DP is just recursion with a cache — **but actually** the cache only helps if the subproblems *overlap*. Memoizing merge sort does nothing, because its subproblems are all distinct. Before writing a table, check that the recursion revisits the same arguments; if it does not, you have divide-and-conquer and a table is pure overhead.
- **You might think** the table's final cell is the answer — **but actually** it is the answer's *value*. Which items achieve it requires the backtrack, and if you use the $\Theta(W)$ one-row space optimization you **throw away** the information the backtrack needs. Space-optimizing a DP and then wanting the solution itself is a standard self-inflicted wound; recovering it needs either the full table or a divide-and-conquer trick (Hirschberg's, in Lesson 2.6).

## One-liner

> When no local choice is safe, take both branches and remember the answers — the recursion is exponential, the distinct subproblems are few, and a table is what converts one into the other.

## Problems

**P1 (🟢)** Items $(w,v) = (1,1),\ (3,4),\ (4,5),\ (5,7)$ with capacity $W = 7$.

(a) Fill the $\mathrm{OPT}$ table (rows $i=0..4$, columns $w=0..7$). (b) State the optimal value. (c) Backtrack to name the items chosen and verify their weight fits and their value matches.

**P2 (🟡)** (a) Give a three-item instance on which greedy-by-ratio is **not** optimal for 0/1 knapsack, showing greedy's answer and the true optimum. (b) On your instance, give the fractional-knapsack answer and confirm it is at least the 0/1 optimum. (c) Explain in two sentences why the fractional optimum is always an upper bound on the 0/1 optimum.

**P3 (🔴)** A colleague reports: "I implemented the $\Theta(nW)$ knapsack DP. It runs instantly on 100 items with capacity 1,000, but hangs on 30 items with capacity 1,000,000,000."

(a) Explain the behaviour with numbers, giving the table size in each case. (b) Say precisely why this is consistent with knapsack being NP-hard, using the term *pseudo-polynomial*. (c) The colleague proposes "just use a hash map so we only store reachable capacities." Does this fix the asymptotics? Say what it does and does not help. (d) Name one situation in which the $\Theta(nW)$ algorithm is genuinely the right tool.

<details>
<summary>Solutions</summary>

**P1** (a) Items in order $(1,1), (3,4), (4,5), (5,7)$, capacity 7:

| | $w{=}0$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| $i{=}0$ | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| $i{=}1$ $(1,1)$ | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| $i{=}2$ $(3,4)$ | 0 | 1 | 1 | 4 | 5 | 5 | 5 | 5 |
| $i{=}3$ $(4,5)$ | 0 | 1 | 1 | 4 | 5 | 6 | 6 | 9 |
| $i{=}4$ $(5,7)$ | 0 | 1 | 1 | 4 | 5 | 7 | 8 | 9 |

Spot-check $\mathrm{OPT}[3,7]$: skip gives $\mathrm{OPT}[2,7] = 5$; take gives $5 + \mathrm{OPT}[2, 3] = 5 + 4 = 9$. Max 9 ✓.
Spot-check $\mathrm{OPT}[4,7]$: skip gives $\mathrm{OPT}[3,7] = 9$; take gives $7 + \mathrm{OPT}[3,2] = 7 + 1 = 8$. Max **9** ✓.

(b) Optimal value **9**.

(c) Backtrack from $[4,7]$: $\mathrm{OPT}[4,7] = 9 = \mathrm{OPT}[3,7]$, so **item 4 skipped**. $\mathrm{OPT}[3,7] = 9 \ne \mathrm{OPT}[2,7] = 5$, so **item 3 taken**; $w \gets 7-4 = 3$. $\mathrm{OPT}[2,3] = 4 \ne \mathrm{OPT}[1,3] = 1$, so **item 2 taken**; $w \gets 3-3 = 0$. $\mathrm{OPT}[1,0] = 0 = \mathrm{OPT}[0,0]$, so **item 1 skipped**.

Chosen: items 2 and 3, i.e. $(3,4)$ and $(4,5)$. Weight $3+4 = 7 \le 7$ ✓; value $4+5 = 9$ ✓ matching the table.

**P2** (a) Capacity $W = 10$, items

$$(6,10),\quad (5,7),\quad (5,7).$$

Ratios $10/6 = 1.667$, $7/5 = 1.4$, $7/5 = 1.4$. Greedy takes item 1 (value 10, capacity 4 left) and neither remaining item fits: **greedy = 10**. The optimum takes items 2 and 3, weight $5+5 = 10$, **value 14**. (Machine-verified with the DP.)

(b) Fractional: take item 1 whole (value 10, 4 capacity left), then $\tfrac45$ of item 2 for $0.8 \times 7 = 5.6$. Total $\mathbf{15.6} \ge 14$ ✓.

(c) Because **every 0/1 solution is also a legal fractional solution** — taking an item entirely is the special case of taking fraction 1. So the fractional problem maximizes over a strictly larger feasible set, and its optimum is at least the 0/1 optimum.

(This is why the fractional optimum is the standard *upper bound* used to prune branch-and-bound searches for 0/1 knapsack: it is cheap to compute and always valid.)

**P3** (a) The table has $(n+1)(W+1)$ cells.

| case | $n$ | $W$ | cells | verdict |
|---|---|---|---|---|
| first | 100 | $10^3$ | $\approx 10^5$ | instant |
| second | 30 | $10^9$ | $3.1\times 10^{10}$ | at 8 bytes per cell that is **248 GB** — it is not hanging, it is thrashing or out of memory |

The item count *fell* by more than 3×; the capacity rose by $10^6$, and the capacity is the term that dominates.

(b) The running time $\Theta(nW)$ is polynomial in $n$ and in **the numeric value** $W$, not in the input's *length*. Encoding the instance takes $\Theta(n\log W)$ bits, so writing $L$ for the input length, $W$ can be as large as $2^{L}$ and the running time is exponential in $L$. A bound polynomial in the numeric value of an input number but exponential in its encoded length is called **pseudo-polynomial**.

So there is no contradiction with NP-hardness: a genuinely polynomial algorithm would have to be polynomial in $n$ and $\log W$, and none is known (one would prove $\mathrm{P} = \mathrm{NP}$).

(c) **It does not fix the asymptotics, but it can help enormously in practice.**

*What it does:* the reachable capacities are the subset sums of the item weights, of which there are at most $\min(2^n,\ W+1)$. With $n = 30$ that is at most $2^{30} \approx 10^9$ — no better in the worst case — but if the weights are few and coarse (say all multiples of $10^6$), the number of distinct reachable sums may be tiny, and the sparse version finishes instantly.

*What it does not do:* the worst case is unchanged, because an adversary can choose 30 weights whose subset sums are all distinct (e.g. powers of two), making the reachable set as large as $2^{30}$. And it adds hashing overhead on the dense instances where the array was already fine.

So it is a genuine practical optimization with **no asymptotic content** — worth doing, worth not claiming too much for.

(d) When $W$ is genuinely small. The classic case is **small integer weights**: scheduling with a fixed number of time slots, cutting stock with lengths in centimetres, subset-sum where the target is bounded by a few thousand. There the $nW$ table is small and the algorithm is exact and fast, which beats every approximation. (The same reasoning makes the DP the engine inside FPTAS approximation schemes for knapsack — round the values to a coarse grid so the table is small, then solve exactly on the rounded instance. Lesson 4.3.)

</details>

## Flashback

**From Lesson 2.3 (Minimum spanning trees):** State the cut property, and use it to decide the following claim.

> *Claim:* In a connected weighted graph with all weights distinct, the second-cheapest edge of the whole graph is always in the MST.

Prove it or give a counterexample.

<details>
<summary>Solution</summary>

**Cut property:** for any partition of the vertices into non-empty $S$ and $V\setminus S$, a minimum-weight edge crossing the partition is in some MST; if it is the unique minimum crossing edge, it is in every MST.

**The claim is TRUE.** Let $e_1$ and $e_2$ be the cheapest and second-cheapest edges, with all weights distinct so $w(e_1) < w(e_2) < w(f)$ for every other edge $f$.

Write $e_2 = (u,v)$ and apply the cut property with $S = \{u\}$. The edges crossing this cut are exactly the edges incident to $u$. Two cases:

- If $e_1$ is **not** incident to $u$, then every edge crossing the cut other than $e_2$ has weight greater than $w(e_2)$, so $e_2$ is the unique minimum crossing edge and lies in every MST. ✓
- If $e_1$ **is** incident to $u$, this cut does not work — $e_1$ crosses it and is cheaper. Instead take $S = \{u, x\}$ where $e_1 = (u,x)$. Now $e_1$ no longer crosses the cut (both endpoints are inside), while $e_2 = (u,v)$ does (since $v \ne x$, as $e_1 \ne e_2$). Every other crossing edge is neither $e_1$ nor $e_2$, hence strictly heavier than $e_2$. So $e_2$ is again the unique minimum crossing edge, and lies in every MST. ✓

Either way $e_2 \in$ MST. $\blacksquare$

**The generalization worth noticing:** the same argument does **not** extend to the third-cheapest edge. If $e_1, e_2, e_3$ form a triangle, then $e_3$ is the heaviest edge on a cycle and by the cycle property is in **no** MST. Concretely, a triangle $ABC$ with $w(AB)=1$, $w(BC)=2$, $w(AC)=3$ has MST $\{AB, BC\}$ and excludes the third-cheapest edge entirely.

So "cheapest is safe" and "second-cheapest is safe" are theorems, and "third-cheapest is safe" is false — a good illustration that a pattern holding twice is not a proof. (Kruskal, of course, discovers exactly this: it takes edges in weight order and the first rejection can occur as early as the third edge.)

</details>

## Connections

- **Backward:** the recursion is solved by a table rather than a recursion tree because the subproblems repeat — the precise thing [Lesson 1.2's](01-02-recurrences-recursion-trees-substitution.md) trees assumed away. The fractional/0-1 contrast closes the loop on Module 2's greedy lessons: [2.1](02-01-the-greedy-method-and-interval-scheduling.md), [2.2](02-02-huffman-coding.md) and [2.3](02-03-minimum-spanning-trees-kruskal-and-prim.md) all had a safe exchange, and here there is none.
- **Forward:** Lesson 2.6 applies the same template to two sequences instead of a capacity; Lesson 3.4's Bellman–Ford and Floyd–Warshall are DPs over graph paths; Lesson 4.2 proves knapsack NP-hard, and Lesson 4.3 uses this very table as the engine of an approximation scheme.
- **Sideways:** the fractional-relaxation-is-easy / integer-version-is-hard split is the founding fact of integer programming in [operations-research](../../operations-research/syllabus.md), and the DP recurrence here is the discrete cousin of the Bellman equation in [reinforcement-learning](../../reinforcement-learning/syllabus.md) — same optimal-substructure argument, same "value of a state" table, with expectations in place of the max.
