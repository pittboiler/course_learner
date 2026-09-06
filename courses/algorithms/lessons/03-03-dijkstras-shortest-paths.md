# Algorithms · Lesson 3.3: Dijkstra's shortest paths

> ⏱ ~15 min · Module 3: Graph algorithms · Builds on: [3.2 (topological sort & SCC)](03-02-topological-sort-and-strongly-connected-components.md) · Unlocks: 3.4 (Bellman–Ford & Floyd–Warshall)

## Why this matters

[Lesson 3.1](03-01-graph-search-bfs-and-dfs.md) gave you shortest paths for free — as long as every edge costs the same. Roads have lengths, networks have latencies, currency trades have spreads, and the moment edges differ BFS is solving the wrong problem.

Dijkstra is the fix, and it is a greedy algorithm in exactly [Lesson 2.1's](02-01-the-greedy-method-and-interval-scheduling.md) sense: it commits irrevocably to one vertex at a time, and it needs an exchange-flavoured argument to justify the commitment. That argument has a precondition — **no negative edges** — and understanding *why* the precondition is there is more valuable than the algorithm, because it tells you exactly which real problems Dijkstra silently mis-answers.

The judgement content is three things. **One:** the correctness proof turns entirely on one inequality, and you should be able to point at where negativity breaks it. **Two:** the running time is not a property of Dijkstra but of the **priority queue** you hand it — the same pseudocode is $O(n^2)$, $O(m\log n)$ or $O(m + n\log n)$ depending on a data-structure choice, and on a dense graph the *simplest* option is the fastest. **Three:** the most tempting repair for negative edges — "add a constant to every weight" — is wrong, and being able to say precisely why is the entry ticket to Lesson 3.4's Johnson reweighting.

## The idea

Keep a tentative distance $d[v]$ for every vertex: **the length of the best path to $v$ found so far**, starting at $d[s]=0$ and $\infty$ elsewhere. Repeatedly do this:

> Take the **unsettled vertex with the smallest tentative distance**, declare it settled, and **[relax](../reference.md#relaxation)** its outgoing edges.

Relaxing $u\to v$ of weight $w$ means: if $d[u] + w < d[v]$, we found a shortcut, so lower $d[v]$.

The greedy claim is that when you pull out the smallest tentative distance, that number is already the *true* distance and will never improve. The reason is short. Any path to $u$ must leave the settled set at some point, at some frontier vertex $x$. We already know $d[x] \ge d[u]$, since $u$ was the minimum. And the rest of the path from $x$ onward has length $\ge 0$. So every alternative route to $u$ is at least $d[u]$ long. Done.

That last sentence is the whole precondition. **"The rest of the path has length $\ge 0$"** is false with a negative edge — a longer detour can be *cheaper*, so a vertex you already sealed can turn out wrong. Dijkstra never revisits a settled vertex, so the error is permanent.

BFS is the special case $w \equiv 1$: the FIFO queue is a priority queue for free, because distances come out in non-decreasing order anyway.

## The formal version

```
DIJKSTRA(G, s):
    d[v] <- ∞ for all v;   d[s] <- 0;   PQ <- {(0, s)}
    while PQ not empty:
        (dist, u) <- EXTRACT-MIN(PQ)
        if u already settled: continue          # stale entry
        settle u
        for each edge (u, v) with weight w:
            if d[u] + w < d[v]:
                d[v] <- d[u] + w;  parent[v] <- u
                PQ.insert((d[v], v))            # or DECREASE-KEY
```

**Theorem.** If every $w(u,v) \ge 0$, then when $u$ is settled, $d[u] = \delta(s,u)$.

*Proof.* Suppose not, and let $u$ be the first vertex settled with $d[u] > \delta(s,u)$. Take a true shortest path $s \rightsquigarrow u$ and let $y$ be its first vertex **not** settled, with predecessor $x$ (settled, so $d[x] = \delta(s,x)$ by minimality of $u$). Relaxing $x\to y$ already gave $d[y] \le \delta(s,x) + w(x,y) = \delta(s,y)$. Since $u$ was chosen as the minimum, $d[u] \le d[y] \le \delta(s,y)$. And $\delta(s,y) \le \delta(s,u)$ **because the rest of the path $y \rightsquigarrow u$ has non-negative length**. Chaining: $d[u] \le \delta(s,u)$, contradicting $d[u] > \delta(s,u)$. $\blacksquare$

One step used non-negativity: $\delta(s,y) \le \delta(s,u)$, i.e. **a prefix of a shortest path is no longer than the whole**. With a negative edge that fails, and so does everything after it.

**Cost.** The algorithm performs $n$ extract-mins and up to $m$ relaxations. Everything depends on [the queue](../reference.md#dijkstras-priority-queue-the-running-time-is-this-choice):

| priority queue | extract-min | decrease-key | total |
|---|---|---|---|
| unsorted array | $O(n)$ | $O(1)$ | $O(n^2 + m)$ |
| binary heap, decrease-key | $O(\log n)$ | $O(\log n)$ | $O((n+m)\log n)$ |
| binary heap, lazy (re-insert, skip stale) | $O(\log m)$ | — | $O(m\log n)$ |
| Fibonacci heap | $O(\log n)$ amortized | $O(1)$ amortized | $O(m + n\log n)$ |

The lazy variant is what almost everyone writes: instead of decreasing a key in place, push a *new* entry and ignore an entry whose vertex is already settled. The heap grows to $O(m)$ entries, but $\log m \le \log n^2 = 2\log n$, so the bound is unchanged and the code is ten lines shorter. The Fibonacci heap is [Lesson 2.4's](02-04-amortized-analysis-and-union-find.md) amortization at work — $O(1)$ *amortized* decrease-key — and its constants are bad enough that it is usually a theoretical win only.

**A DAG shortcut.** On an acyclic graph you do not need a priority queue at all: relax edges in **topological order** ([Lesson 3.2](03-02-topological-sort-and-strongly-connected-components.md)) and every vertex is finalized when you reach it. That is $\Theta(n+m)$ and, because it makes no greedy commitment, it works with **negative weights** too.

## Picture

![A six-vertex weighted digraph with source S on the left and target T on the right. Vertices A and C run along the top, B and D along the bottom. Each vertex is labelled with its final distance and the position in which Dijkstra settled it: S at 0 first, B at 2 second, A at 3 third, C at 8 fourth, D at 10 fifth, T at 14 sixth. Blue arrows mark the shortest-path tree S to B, B to A, B to D, A to C and C to T; the remaining edges are grey. Annotations note that A was first estimated at 4 and improved to 3, and that C also offers D a route of length 10.](assets/03-03-fig1.svg)

The graph: $S\to A\,(4)$, $S\to B\,(2)$, $B\to A\,(1)$, $B\to D\,(8)$, $A\to C\,(5)$, $A\to D\,(10)$, $C\to D\,(2)$, $C\to T\,(6)$, $D\to T\,(6)$.

**The picture's whole point is vertex $A$.** $S$ offers it a direct edge of length 4. If Dijkstra settled greedily by *edge* weight it would seal $A$ at 4 and be wrong, because going the long way round through $B$ costs $2 + 1 = 3$. It does not, because it settles by *tentative distance from $s$*, and $B$ at distance 2 comes out of the queue first. **The rule is "closest unsettled vertex", never "cheapest edge"** — that is the difference between Dijkstra and Prim's MST algorithm, which share this pseudocode almost line for line.

Two more things to read off. $D$ has **two** shortest paths, both of length 10 — $S\to B\to D$ and $S\to B\to A\to C\to D$ — so the shortest-path tree is not unique; the drawn one just reflects which relaxation happened first. And notice the algorithm settles $T$ last with $d[T] = 14$ even though $D$ sits at 10 with an edge of weight 6 into $T$: $10+6=16$ never beats the 14 already found through $C$.

## Worked examples

**Example 1 (mechanical): run the trace.** Same graph. "PQ" shows unsettled entries; stale ones are struck through in words.

| step | extract | relaxations | $d$ afterwards | PQ |
|---|---|---|---|---|
| 1 | $S\,(0)$ | $A \leftarrow 4$, $B \leftarrow 2$ | $A{:}4$, $B{:}2$ | $B{:}2, A{:}4$ |
| 2 | $B\,(2)$ | $A \leftarrow 3$ (beats 4), $D\leftarrow 10$ | $A{:}3$, $D{:}10$ | $A{:}3, A{:}4^\dagger, D{:}10$ |
| 3 | $A\,(3)$ | $C \leftarrow 8$; $A\to D$ gives 13, no change | $C{:}8$ | $A{:}4^\dagger, C{:}8, D{:}10$ |
| 4 | $C\,(8)$ | $C\to D$ gives 10, **ties**, no change; $T \leftarrow 14$ | $T{:}14$ | $D{:}10, T{:}14$ |
| 5 | $D\,(10)$ | $D \to T$ gives 16, no change | — | $T{:}14$ |
| 6 | $T\,(14)$ | — | — | empty |

$\dagger$ = stale entry, skipped when it surfaces because $A$ is already settled.

Final: $d = (S{:}0,\ B{:}2,\ A{:}3,\ C{:}8,\ D{:}10,\ T{:}14)$. Note the settle order $S,B,A,C,D,T$ is **non-decreasing in distance** — that is the invariant, visible.

**Example 2 (why you'd care): choosing the queue.** Two real graphs, same algorithm.

| | $n$ | $m$ | array $O(n^2{+}m)$ | binary heap $O((n{+}m)\log n)$ | Fibonacci $O(m{+}n\log n)$ |
|---|---|---|---|---|---|
| dense scheduling graph | $10^3$ | $4\times 10^5$ | $\mathbf{1.4\times 10^6}$ | $4.0\times10^6$ | $4.1\times10^5$ |
| road network | $10^6$ | $5\times 10^6$ | $10^{12}$ | $\mathbf{1.2\times 10^8}$ | $2.5\times 10^7$ |

On the dense graph the **unsorted array beats the binary heap** — the heap's $\log n$ factor buys nothing when you touch nearly every pair anyway, and the array has no pointer chasing. On the road network the array is a factor of $10^4$ slower and simply unusable.

The crossover is where $n^2 \approx m\log n$, i.e. $m \approx n^2/\log n$. Below it use a heap; above it, an array. Fibonacci heaps win both columns on paper and lose both in practice to constant factors — a clean example of [Lesson 1.1's](01-01-asymptotic-notation.md) warning that asymptotics hide the constants that decide real races.

## Watch out

- **You might think** Dijkstra just needs no *negative cycles* — **but actually** it needs no negative **edges** at all. On $S\to A\,(2)$, $S\to B\,(3)$, $B\to A\,(-2)$ there is no cycle whatsoever, yet Dijkstra settles $A$ at 2 and stops looking; the true distance is $3 - 2 = 1$. The graph is a DAG and the answer is still wrong.
- **You might think** you can shift all weights up by a constant to remove negatives — **but actually** adding $C$ to every edge adds $C \times (\text{number of edges on the path})$, which penalizes long paths differently from short ones and changes which path is shortest. On $S\to A\,(1)$, $A\to T\,(-2)$, $S\to T\,(0)$ the true shortest $S\to T$ is $-1$ via $A$; add 2 to everything and the direct edge (now 2) beats the two-edge route (now 3). The answer is not merely offset, it is a **different path**.
- **You might think** the settle order is the same thing as the tree structure — **but actually** Dijkstra can settle a vertex whose tree parent is settled much earlier, and ties mean the tree is not unique. Never let downstream code depend on which of several equal-cost paths you got.
- **You might think** the lazy heap's stale entries are a bug — **but actually** they are the standard implementation; the guard `if u already settled: continue` is what makes it correct, and omitting *that* is the real bug, because relaxing from a stale (too large) distance can raise correct values.
- **You might think** this is Prim's algorithm — **but actually** they differ in exactly one expression. Prim's key is $w(u,v)$, the edge weight alone; Dijkstra's is $d[u] + w(u,v)$, the distance from the source. Same queue, same loop, different problems.

## One-liner

> Repeatedly settle the closest unsettled vertex and relax its edges — correct precisely because a prefix of a path is never longer than the whole, which is exactly what a negative edge destroys.

## Problems

**P1 (🟢)** Run Dijkstra from $S$ on $S\to A\,(7)$, $S\to B\,(3)$, $B\to A\,(2)$, $B\to C\,(6)$, $A\to C\,(1)$, $A\to D\,(5)$, $C\to D\,(2)$, $C\to T\,(8)$, $D\to T\,(3)$.

(a) Give the settle order with distances. (b) List every relaxation that actually lowered a value. (c) Give the shortest $S\to T$ path and its length. (d) Which vertex's first estimate was furthest from its final value?

**P2 (🟡)** You must run single-source shortest paths on two graphs: a social graph with $n = 2\times 10^5$, $m = 10^6$, and a dense distance matrix with $n = 2000$, $m \approx 4\times 10^6$.

(a) For each, give the cost with an unsorted array and with a binary heap, and say which to use. (b) Derive the general crossover condition. (c) A colleague says "always use a Fibonacci heap, it has the best bound." Give the two-sentence rebuttal. (d) On the social graph you need shortest paths from **50 different sources**. Does that change any answer?

**P3 (🔴)** A currency-arbitrage tool models each exchange rate as an edge and wants the cheapest sequence of trades. Costs are logs of rates, so **negative edges are normal**. The engineer writes: *"Dijkstra is the fastest shortest-path algorithm, so let's find the most negative edge, add its magnitude to every edge to make everything non-negative, and run Dijkstra."*

(a) Give a three-vertex instance where this returns the wrong path, and say which path each version picks. (b) Explain in one sentence what goes wrong with the shift, in terms of what a path's cost becomes. (c) **[Johnson's reweighting](../reference.md#johnsons-reweighting)** instead sets $w'(u,v) = w(u,v) + h(u) - h(v)$ for a function $h$ on vertices. Show that this preserves which paths are shortest, and say what property $h$ must have for all $w'$ to be non-negative. (d) The tool's actual goal is to detect whether *any* profitable arbitrage cycle exists. Say whether reweighting can help with that, and name the algorithm that answers it.

<details>
<summary>Solutions</summary>

**P1** (a)

| step | extract | relaxations that fired | distances after |
|---|---|---|---|
| 1 | $S\,(0)$ | $A \leftarrow 7$, $B \leftarrow 3$ | $A{:}7$, $B{:}3$ |
| 2 | $B\,(3)$ | $A \leftarrow 5$, $C \leftarrow 9$ | $A{:}5$, $C{:}9$ |
| 3 | $A\,(5)$ | $C \leftarrow 6$, $D \leftarrow 10$ | $C{:}6$, $D{:}10$ |
| 4 | $C\,(6)$ | $D \leftarrow 8$, $T \leftarrow 14$ | $D{:}8$, $T{:}14$ |
| 5 | $D\,(8)$ | $T \leftarrow 11$ | $T{:}11$ |
| 6 | $T\,(11)$ | — | — |

Settle order:

$$S(0),\quad B(3),\quad A(5),\quad C(6),\quad D(8),\quad T(11).$$

(b) Lowering relaxations: $A{:}\infty\!\to\!7$, $B{:}\infty\!\to\!3$, $A{:}7\!\to\!5$, $C{:}\infty\!\to\!9$, $C{:}9\!\to\!6$, $D{:}\infty\!\to\!10$, $D{:}10\!\to\!8$, $T{:}\infty\!\to\!14$, $T{:}14\!\to\!11$. Nine in all — and note **four** of them improved an existing finite estimate, which is the behaviour BFS never shows.

(c) $S \to B \to A \to C \to D \to T = 3 + 2 + 1 + 2 + 3 = \mathbf{11}$ ✓. The shortest path uses **every** vertex — the direct-looking edges $S\to A$ (7) and $C\to T$ (8) are both traps.

(d) $T$: first estimated at 14, final 11, a gap of 3. ($A$ and $C$ each moved by 2 or 3 as well — $C$ went $9\to6$, also 3. Both answers are acceptable if justified; the point is that first estimates are not answers.)

**P2** (a)

| graph | array $n^2+m$ | binary heap $(n+m)\log_2 n$ | use |
|---|---|---|---|
| social, $n=2\times10^5$, $m=10^6$ | $4\times 10^{10}$ | $\approx 2.1\times 10^7$ | **heap** (2000× faster) |
| dense, $n=2000$, $m=4\times10^6$ | $8\times 10^{6}$ | $\approx 4.4\times 10^7$ | **array** (5× faster) |

(b) The array wins when $n^2 + m < (n+m)\log_2 n$. With $m \gg n$ this is $n^2 < m\log_2 n$, i.e.

$$m > \frac{n^2}{\log_2 n}.$$

Above that density (roughly, when the average degree exceeds $n/\log n$) the linear scan is cheaper than maintaining a heap. Below it, the heap.

(c) The Fibonacci heap's advantage is $O(1)$ *amortized* decrease-key, which only pays off when $m$ is much larger than $n$ — and precisely in that dense regime the unsorted array's $O(n^2)$ is already competitive. On top of that its constant factors and pointer-chasing typically cost 3–10× per operation, so the asymptotically better structure loses on real inputs at essentially every size people run. It is a genuine theoretical result and a poor default. (Compare [Lesson 1.5's](01-05-divide-and-conquer-beyond-sorting.md) galactic algorithms: better exponent, unreachable crossover.)

(d) **No — it reinforces the choice.** Fifty runs cost fifty times one run, so the *ratio* between the options is unchanged and the heap still wins on the social graph. What 50 sources *does* change is whether you should be running Dijkstra at all: at 50 sources you are a quarter of the way to a small all-pairs problem, so it is worth checking Lesson 3.4's Floyd–Warshall ($\Theta(n^3) = 8\times 10^{15}$ here — hopelessly worse) and Johnson's algorithm ($n$ Dijkstras after one Bellman–Ford). For $n = 2\times10^5$ the answer stays "50 separate Dijkstras", but the question is the right one to ask.

**P3** (a) Take

$$S \to A\ (1), \qquad A \to T\ (-2), \qquad S \to T\ (0).$$

True shortest $S \to T$: $S \to A \to T = 1 + (-2) = -1$, beating the direct edge at 0.

The most negative weight is $-2$, so the engineer adds 2 to everything: $S\to A\,(3)$, $A\to T\,(0)$, $S\to T\,(2)$. Dijkstra now finds $S\to T = 2$ via the **direct edge**, since the two-hop route costs 3. Subtracting the shift back gives the wrong path *and* the wrong cost.

(b) Adding $C$ to every edge turns a path's cost from $\sum w_e$ into $\sum w_e + C\cdot(\text{number of edges})$, so paths are penalized in proportion to their **length in hops** — a per-edge shift is not a per-path shift, and it therefore reorders paths with different hop counts.

(c) With $w'(u,v) = w(u,v) + h(u) - h(v)$, a path $v_0 \to v_1 \to \cdots \to v_k$ has cost

$$\sum_{i=1}^{k} \big(w(v_{i-1},v_i) + h(v_{i-1}) - h(v_i)\big) = \Big(\sum_{i=1}^{k} w(v_{i-1},v_i)\Big) + h(v_0) - h(v_k),$$

because the $h$ terms **telescope**. Every path from $v_0$ to $v_k$ — regardless of how many edges it uses — shifts by the *same* amount $h(v_0)-h(v_k)$, so the ranking of paths between a fixed pair is untouched and the argmin is preserved. That is exactly what the constant shift failed to do.

For all $w' \ge 0$ we need $h(v) - h(u) \le w(u,v)$ for every edge, i.e. $h(v) \le h(u) + w(u,v)$ — which is precisely the statement that $h$ satisfies the **triangle inequality along every edge**. Shortest-path distances from any source have this property, so Johnson's algorithm gets $h$ by adding a virtual vertex with 0-weight edges to everything and running Bellman–Ford once ([Lesson 3.4](03-04-bellman-ford-and-floyd-warshall.md)). Then $n$ Dijkstra runs solve all-pairs in $O(nm\log n)$ — better than $\Theta(n^3)$ on sparse graphs.

(d) **Reweighting cannot help**, and the reason is (c): $h$ exists **only if** there is no negative cycle. A negative cycle returns to its start, so all $h$ terms telescope to zero and its reweighted length equals its original negative length — no choice of $h$ can make every edge non-negative. Johnson's algorithm's Bellman–Ford pass therefore *fails* on exactly the instances the arbitrage tool cares about.

The right algorithm is **Bellman–Ford** itself, whose negative-cycle detection is the answer: run $|V|-1$ rounds of relaxation and then one more; if any edge still relaxes, a negative cycle is reachable, and following parent pointers from the relaxed vertex exhibits it. Detecting profitable arbitrage is Lesson 3.4's opening application, and it is the standard reason the "obsolete" algorithm is still in every toolkit.

</details>

## Flashback

**From Lesson 3.1 (Graph search):** BFS and DFS both cost $\Theta(n+m)$ with adjacency lists.

(a) Which one gives shortest paths, and shortest with respect to what? (b) A colleague replaces the BFS queue with a stack "to save memory" and reports that distances came out wrong. Diagnose. (c) What single change to the queue turns BFS into the algorithm of this lesson? (d) Name a graph on which BFS and Dijkstra return identical answers.

<details>
<summary>Solution</summary>

(a) **BFS**, and shortest with respect to the **number of edges** (hops) — not weight. DFS makes no distance claim at all; its tree depth can exceed the true distance arbitrarily.

(b) Swapping the queue for a stack turns BFS into DFS, and DFS's parent pointers do not form a shortest-path tree. Concretely, on $A\to B$, $A\to C$, $B\to C$ a stack can reach $C$ via $B$ and record depth 2, while $\delta(A,C)=1$. The memory saving is also illusory — both hold $O(n)$ vertices in the worst case. What the colleague changed was the *problem being solved*, not the implementation.

(c) Make it a **priority queue keyed by tentative distance** $d[u] + w(u,v)$, and add the relaxation step. FIFO order is what a priority queue degenerates to when every edge has the same weight, which is why BFS is the $w \equiv 1$ special case of Dijkstra.

(d) Any graph with **all edge weights equal** (in particular all 1). More precisely: whenever every edge has the same positive weight $c$, Dijkstra's distances are exactly $c$ times BFS's, and both settle vertices in the same order. If the weights differ at all, they can disagree — a 2-hop path of weight 100 versus a 3-hop path of weight 3.

</details>

## Connections

- **Backward:** this is [Lesson 2.1's](02-01-the-greedy-method-and-interval-scheduling.md) greedy method with a stated precondition, and the proof is the same shape — assume a first failure, exhibit a swap, contradict. The priority queue is [Lesson 2.4's](02-04-amortized-analysis-and-union-find.md) amortized analysis choosing your running time for you, and the DAG shortcut is [Lesson 3.2's](03-02-topological-sort-and-strongly-connected-components.md) topological sort doing the queue's job for free.
- **Forward:** Lesson 3.4 drops the non-negativity precondition and pays $\Theta(nm)$ for it, then goes all-pairs; Johnson's reweighting from P3 is what lets Dijkstra back in. Lesson 4.4's randomized algorithms and Lesson 4.3's approximations both reuse "commit greedily, then bound the damage."
- **Sideways:** Dijkstra with a heuristic added to the key is **A\***, the routing algorithm in every map application; the requirement that the heuristic never overestimate is exactly this lesson's non-negativity condition in disguise. The relaxation update $d[v] \leftarrow \min(d[v], d[u]+w)$ is the Bellman equation, which is [reinforcement-learning](../../reinforcement-learning/syllabus.md)'s value iteration with costs instead of rewards — Dijkstra is what value iteration becomes when the dynamics are deterministic and the costs are non-negative.
