# Programming & Data Structures · Lesson 4.3: Recursion revisited — backtracking

> ⏱ ~15 min · Module 4: Graphs, sorting, and searching · Builds on: [4.2 (graphs: representations and traversal)](04-02-graphs-representations-and-traversal.md) · Course complete

## Why this matters

Every algorithm so far has had a plan. Sorting knows what to do; a BST descent knows which way to go; BFS knows which vertex is next. **Backtracking is what you use when there is no plan** — when the only way to find a solution is to try possibilities, and the only saving grace is that you can often tell early that a possibility is doomed.

Sudoku, n-queens, crossword filling, regular-expression matching, type inference, SAT solving, theorem proving, and every puzzle that has ever been called "just brute force" are this technique. So are a great many real problems — scheduling with constraints, packing, routing with side conditions — where the search space is exponential and the practical question is not *whether* you enumerate it but *how much of it you can avoid*.

It also closes the course. Backtracking is [Lesson 1.3's](01-03-recursion-and-the-call-stack.md) recursion applied to [Lesson 4.2's](04-02-graphs-representations-and-traversal.md) depth-first search over a graph that is never built — the vertices are partial solutions and the edges are choices, generated on demand because writing the graph down would be impossible.

The judgement content is what pruning does and does not buy. It can turn 16.7 million possibilities into 2,057 explored nodes — a factor of 8,000, and the difference between "impossible" and "instant". It **never changes the complexity class**. Knowing both halves of that is what separates using backtracking well from believing you have solved an intractable problem.

## The idea

**Search the tree of partial solutions.** A node is a partial answer — the first three queens placed, the first four cells filled. Its children are the ways to extend it by one step. Leaves are either complete solutions or dead ends.

**[Choose, explore, un-choose](../reference.md#backtracking).** The whole technique is three lines:

```
SOLVE(partial):
    if partial is complete:        record it;  return
    for each candidate extension c:
        if c is consistent with partial:
            apply c                       # choose
            SOLVE(partial + c)            # explore
            undo c                        # un-choose
```

The **un-choose** is what makes it backtracking. The recursion descends one branch, and on the way back up it restores the state exactly, so the next branch starts from a clean slate. Forgetting it is the classic bug: the search silently explores a corrupted state space and reports nonsense.

**Pruning is the whole performance story.** The `if c is consistent` test is the difference between enumerating the entire space and exploring a small corner of it. Two ideas do most of the work:

- **Check as early as possible.** Rejecting a queen placement at row 2 kills every arrangement of the remaining rows below it. Waiting until all $n$ are placed and then checking throws that saving away.
- **Prefer the most constrained choice.** Fill the Sudoku cell with the fewest legal candidates first: fewer branches, and dead ends surface sooner.

**And it is [still exponential](../reference.md#backtracking-what-pruning-buys).** Pruning cuts the tree's size, sometimes enormously, but the tree is still exponential in the worst case. Backtracking is not a way to make hard problems easy; it is a way to make *some instances* of hard problems tractable. That distinction is what [`algorithms` Module 4](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) formalizes.

## The formal version

**Structure.** A backtracking algorithm is defined by four things:

| component | what it is |
|---|---|
| **state** | the partial solution built so far |
| **candidates** | the ways to extend it by one step |
| **consistency test** | which extensions are still viable — the pruning |
| **completeness test** | when the state is a full solution |

**Cost.** If the search tree has branching factor $b$ and depth $d$, the unpruned tree has $\Theta(b^d)$ nodes. Pruning removes subtrees, so the real cost is

$$\Theta(\text{number of nodes actually explored}),$$

which has no closed form in general — it depends on the instance. That is why backtracking is analyzed empirically as well as asymptotically, and why "how many nodes did it explore?" is the number to report.

**Subset-sum, worked.** Given $S = \{3, 7, 4, 2\}$ and target 9, is there a subset summing to 9? At each level, take the next item or skip it: $b = 2$, $d = 4$, so the full tree has $2^5 - 1 = 31$ nodes. With the pruning rules "stop if the running sum exceeds the target" and "stop on a hit", the search explores **23 nodes** and finds two solutions, $\{3,4,2\}$ and $\{7,2\}$. *(Machine-verified.)*

A 26% saving — real, and unimpressive. Small instances do not show pruning at its best.

**$n$-queens, where it does.** Place $n$ queens on an $n\times n$ board, no two attacking. Restricting to one queen per row makes $b = n$ and $d = n$, so the space is $n^n$; pruning rejects a placement the moment it shares a column or diagonal with an existing queen.

| $n$ | $n^n$ (raw space) | $n!$ (one per row and column) | nodes explored | solutions |
|---|---|---|---|---|
| 4 | 256 | 24 | **17** | 2 |
| 5 | 3,125 | 120 | **54** | 10 |
| 6 | 46,656 | 720 | **153** | 4 |
| 8 | 16,777,216 | 40,320 | **2,057** | 92 |

*(Machine-verified.)* At $n = 8$ that is **8,000×** fewer nodes than the raw space and 20× fewer than the permutations. Pruning is doing enormous work.

**And the class is unchanged.** The node count still grows exponentially in $n$ — it is roughly $2.5\times$ per step in that table, and at $n = 30$ the search is again out of reach. Pruning changed the *base* of the exponential, not the fact of it.

**Backtracking is DFS on an implicit graph.** The recursion is [Lesson 4.2's](04-02-graphs-representations-and-traversal.md) depth-first search, with two differences: the graph is generated on demand rather than stored (it is exponentially large, so storing it is impossible), and there is no `discovered` set (the tree has no cycles, so nothing can be revisited). The stack depth is $d$, the solution length — usually small, which is why backtracking's *memory* is modest even when its time is not.

## Picture

![A search tree for subset-sum with S equal to 3, 7, 4, 2 and target 9. The root is labelled 0. Each level branches two ways, take the next item on the left or skip it on the right, and each node is labelled with the running sum. Two nodes, labelled 10 and 11, are ringed in red and marked as pruned because the sum has already passed 9. Two nodes labelled 9 are ringed in blue and marked as solutions. Captions state that the two solutions are the sets 3, 4, 2 and 7, 2; that the search visits 23 nodes where without the sum-greater-than-target check it would visit all 31; that pruning is a constant-factor win here but on 8-queens cuts 16.7 million placements down to 2,057 nodes explored; and, in red, that what pruning never does is change the complexity class — the tree is smaller, not polynomial.](assets/04-03-fig1.svg)

**Read one path down the left edge: 0, 3, 10.** Taking 3 then 7 gives 10, which is already past the target of 9, so the node is red and the entire subtree beneath it — every choice about 4 and 2 — is never generated. **One test at depth 2 eliminated four leaves.** That is pruning in miniature, and it is why the check belongs as early as possible: at depth 2 it kills a quarter of the tree, at depth 3 an eighth.

**The two blue nodes are the answers, and they sit at different depths.** $\{7,2\}$ is found on the right side after skipping 3 and 4; $\{3,4,2\}$ on the left. The search finds them in whatever order its choice ordering dictates, which is worth remembering when a problem asks for *a* solution rather than all of them: the ordering decides how fast you find one, and reordering candidates is a legitimate and powerful optimization.

**23 nodes against 31 is the honest small-instance number.** The figure deliberately shows a case where pruning saves 26% rather than 99.99%, because that is what small instances look like and it is where over-claiming starts. The 8-queens figure in the caption — 16.7 million down to 2,057 — is the same technique on an instance large enough for exponential savings to compound.

**The red caption is the one to carry out of the course.** Both numbers are exponential. 2,057 is small because 8 is small, and the same program at $n = 30$ explores a number of nodes with no practical bound. **Pruning multiplies the tractable input size by a modest factor; it does not remove the wall.**

## Worked examples

**Example 1 (mechanical): 4-queens, partially.** Place one queen per row on a $4\times4$ board; a placement is legal if it shares no column and no diagonal with an existing queen.

Start with row 0, column 0. Then row 1: columns 0 and 1 are attacked (same column, adjacent diagonal), so the candidates are 2 and 3.

Take $(1, 2)$. Row 2: column 0 is attacked by $(0,0)$; column 1 is attacked diagonally by $(1,2)$; column 2 shares $(1,2)$'s column; column 3 is attacked diagonally by $(1,2)$. **Every column is attacked — dead end, backtrack.**

Take $(1, 3)$ instead. Row 2: columns 0 and 3 are taken; column 2 is diagonally attacked by $(1,3)$; column 1 is free. Place $(2,1)$. Row 3: column 0 taken, column 1 taken, column 2 diagonally attacked by $(2,1)$, column 3 taken. **Dead end again — backtrack twice**, abandoning $(0,0)$ entirely.

Restart with $(0,1)$: this leads to the solution $(0,1), (1,3), (2,0), (3,2)$ ✓.

**Note where the work was saved.** Rejecting row 2 under $(0,0),(1,2)$ meant never generating any of the 4 placements for row 3 beneath it. Across the whole search, 4-queens explores **17 nodes** against a raw space of $4^4 = 256$ — and it finds 2 solutions. *(Machine-verified.)*

**Example 2 (why you'd care): the ordering that changed everything.** A Sudoku solver fills cells left-to-right, top-to-bottom, trying digits 1–9 in each.

On a hard puzzle it can explore hundreds of millions of nodes, because a cell early in reading order may have 8 legal digits, and a contradiction 30 cells later forces the search to unwind through every combination in between.

Change one thing — **fill the cell with the fewest legal candidates first** (the *most-constrained-variable* heuristic) — and the same solver typically explores thousands of nodes on the same puzzles.

| ordering | branching at each step | typical nodes on a hard puzzle |
|---|---|---|
| reading order | up to 9 | $10^6$–$10^8$ |
| most-constrained-first | often 1–2 | $10^3$–$10^4$ |

**Why it works:** a cell with one legal candidate branches once and either succeeds or fails immediately, so contradictions surface at depth 1 instead of depth 30. The search tree's *branching factor* falls, and since the cost is $b^d$, cutting $b$ from 9 to 2 is a change in the base of an exponential.

**No pruning rule was added and no code became cleverer.** The candidate ordering changed. That is the highest-leverage knob in backtracking and the one most often left untouched — and it generalizes: try the most constrained variable, and within it the value most likely to succeed.

## Watch out

- **You might think** you can skip the un-choose step — **but actually** the sibling branch then inherits a corrupted state and the search explores a space that does not correspond to the problem. Every mutation on the way down needs an exact undo on the way up.
- **You might think** pruning changes the complexity — **but actually** it changes the base of the exponential and the constant, never the class. 8-queens exploring 2,057 nodes is still exponential in $n$, and $n = 30$ is out of reach.
- **You might think** the consistency test can go at the end — **but actually** testing only complete assignments is pure brute force. The saving comes entirely from rejecting *partial* states, and the earlier the test fires the larger the subtree it removes.
- **You might think** candidate order is arbitrary — **but actually** it is often the difference between $10^8$ and $10^4$ nodes, because it changes the effective branching factor. Most-constrained-first is the standard heuristic and it is nearly free.
- **You might think** backtracking uses a lot of memory — **but actually** it holds one root-to-leaf path, so space is $\Theta(d)$ — the solution's length, not the tree's size. It is time that is exponential, not space; the same time/space divergence as [Lesson 1.3's](01-03-recursion-and-the-call-stack.md) `fib`.
- **You might think** a fast solver means the problem is easy — **but actually** it means your *instances* have structure the pruning exploits. A crafted worst case will still take exponential time, which is precisely why NP-hardness is a statement about the worst case and not a prediction about your data.

## One-liner

> Choose, explore, un-choose — and put the consistency test as early and the most constrained choice as first as you can, because pruning buys you a smaller exponential and never a polynomial.

## Problems

**P1 (🟢)** Subset-sum with $S = [2, 5, 3]$ and target 8, taking or skipping each item in order.

(a) Draw the search tree, labelling each node with the running sum. (b) Mark the nodes pruned by the rule "stop if the sum exceeds the target". (c) Give the solutions found and the number of nodes explored. (d) How many nodes would an unpruned search explore?

**P2 (🟡)** A solver places $n$ non-attacking queens, one per row, testing each placement against the queens already placed.

(a) Give the size of the raw search space and of the space when one queen per row and column is enforced, for $n = 6$. (b) The measured node counts are 17, 54, 153 and 2,057 for $n = 4, 5, 6, 8$. Give the approximate growth factor per step and say what it implies. (c) At what $n$ would you expect the search to become impractical, assuming $10^9$ nodes per second? (d) A colleague says pruning "makes n-queens polynomial." Respond.

**P3 (🔴)** A scheduling service assigns 40 tasks to 5 time slots subject to constraints (some tasks conflict, some must precede others). It uses backtracking, filling tasks in the order they appear in the input, and times out on about 15% of requests.

(a) Give the raw search space size. (b) The engineer proposes doubling the timeout. Evaluate this quantitatively, given that a timing-out search typically explores $10^9$ nodes before giving up. (c) Give two changes that would reduce the explored nodes, and say which is likely to help more and why. (d) After the changes, 2% of requests still time out. The engineer proposes returning "no valid schedule" on timeout. Evaluate this, and give a better response.

<details>
<summary>Solutions</summary>

**P1** (a) $S = [2, 5, 3]$, target 8. At each level, take (left) or skip (right); nodes labelled with the running sum:

```
                        0
                   /         \
              take 2         skip 2
                 2               0
              /     \         /     \
         take 5   skip 5  take 5  skip 5
            7        2       5        0
          /  \     /  \    /  \     /  \
        10    7   5    2  8     5  3     0
```

(b) The rule "stop if the sum exceeds 8" fires at the node labelled **10** (from $2 + 5 + 3$), which is the only node whose sum passes the target. Its subtree would have been empty anyway (it is at the last level), so the saving here is nil — a useful reminder that pruning at the deepest level buys nothing.

Nothing else is pruned: every other running sum stays at or below 8.

(c) **Solutions:** the leaf labelled 8, reached by skip 2, take 5, take 3 — that is $\{5, 3\}$. Checking the others: $2+5+3 = 10$ ✗, $2+5 = 7$ ✗, $2+3 = 5$ ✗, $2$ ✗, $5$ ✗, $3$ ✗, $\{\}$ ✗. **One solution: $\{5, 3\}$.**

**Nodes explored: 14** — the full tree has 15 nodes ($2^4 - 1$) and one leaf (the 10) is reached and then rejected without generating children, but since it is a leaf it is still visited. Counting visited nodes: $1 + 2 + 4 + 8 = 15$, minus 0 skipped, so **15 visited**, of which one is rejected on arrival. (If the target had been exceeded higher up, whole subtrees would have gone unvisited — that is the case worth engineering for.)

(d) An unpruned search visits every node of the complete binary tree of depth 3:

$$2^0 + 2^1 + 2^2 + 2^3 = 15 \text{ nodes.}$$

**The same 15** — pruning saved nothing on this instance, because the only violating node was already a leaf. This is the honest small-instance result, and it is why the saving from pruning must be measured rather than assumed: it depends entirely on how high in the tree the contradictions surface.

**P2** (a) At $n = 6$:

- **Raw space** (any square for any queen, one per row): $n^n = 6^6 = \mathbf{46{,}656}$.
- **One per row and column** (a permutation of columns): $n! = 6! = \mathbf{720}$.

The column constraint alone cuts the space by a factor of 65.

(b) Growth factors between consecutive measured points:

| step | ratio |
|---|---|
| $4 \to 5$ | $54/17 \approx 3.2$ |
| $5 \to 6$ | $153/54 \approx 2.8$ |
| $6 \to 8$ | $2057/153 \approx 13.4$, i.e. $\approx 3.7$ per step |

So roughly a factor of **3 per unit increase in $n$** — the node count is growing like $\approx 3^n$.

**What it implies: the search is still exponential.** Pruning has reduced the base from $n$ (the raw $n^n$) to a constant around 3, which is an enormous practical improvement, but $3^n$ is exponential and no amount of further pruning within this framework makes it polynomial.

(c) At $\approx 3^n$ nodes and $10^9$ nodes per second, one second buys

$$3^n \le 10^9 \quad\Longrightarrow\quad n \le \frac{\ln 10^9}{\ln 3} \approx \frac{20.7}{1.10} \approx 18.8.$$

So around **$n = 19$** for a one-second search, $n \approx 25$ for an hour, and $n \approx 31$ for a year. **Impractical from roughly $n = 20$–25** for interactive use.

(This is finding *all* solutions. Finding a *single* solution is far easier — good heuristics solve $n = 1000$ in practice — because the search can stop at the first success and n-queens has abundant solutions. The distinction between "find one" and "find all" is worth keeping: they are the same algorithm with wildly different costs.)

(d) **The colleague is wrong, and the numbers in (b) are the refutation.**

Pruning reduced the search from $n^n$ (which at $n = 8$ is $1.7\times10^7$) to about $3^n$ (which at $n = 8$ is 2,057) — a factor of 8,000 at that size, and growing. It is a genuinely huge improvement.

But $3^n$ is exponential. Doubling $n$ from 15 to 30 multiplies the work by $3^{15} \approx 1.4\times10^7$, not by a constant. A polynomial algorithm would give a fixed-degree ratio: doubling $n$ would multiply the work by $2^k$ for some constant $k$.

**The general error to name:** a dramatic constant-or-base improvement feels like a change of kind and is not. The way to check is exactly (b) — measure the ratio between successive sizes. A ratio that stays roughly constant as $n$ grows means exponential; a ratio that falls toward a fixed number means polynomial. Here it sits near 3 and does not fall.

(Worth noting: n-queens specifically *does* have a polynomial construction — explicit solutions for every $n \ge 4$ are known — but that is a fact about this puzzle, not about backtracking. The search itself remains exponential.)

**P3** (a) 40 tasks each assigned to one of 5 slots:

$$5^{40} \approx \mathbf{9.1 \times 10^{27}} \text{ assignments.}$$

At $10^9$ per second, enumerating them all would take about $2.9\times10^{11}$ years.

(b) **Doubling the timeout is close to worthless.**

A search that explores $10^9$ nodes before timing out has covered

$$\frac{10^9}{9.1\times10^{27}} \approx 10^{-19}$$

of the space. Doubling the budget to $2\times10^9$ nodes covers $2\times10^{-19}$ — the fraction searched is still nineteen orders of magnitude from complete.

More usefully: if the node count grows like $b^d$ for some effective branching factor $b$, doubling the time buys $\log_b 2$ extra levels of depth — **less than one additional task assigned** for any $b \ge 2$. The engineer would double their compute bill to place, at most, one more task before giving up.

**Exponential search spaces do not respond to linear increases in budget.** That is the single most important practical consequence of the whole module.

(c) Two changes, in order of expected impact:

**1. Reorder the tasks — most-constrained-first.** Instead of the input order, at each step pick the task with the fewest legal remaining slots (and, on ties, the one involved in the most constraints). This directly attacks the effective branching factor $b$, and since the cost is $b^d$, cutting $b$ from 5 to 2 changes $5^{40} \approx 9\times10^{27}$ to $2^{40} \approx 10^{12}$ — a factor of $10^{16}$. Tasks with one legal slot branch once and fail immediately, surfacing contradictions at depth 1 instead of depth 30.

**2. Propagate constraints after each assignment (forward checking).** After placing a task, immediately remove that slot from the legal sets of every conflicting task. If any task's set becomes empty, backtrack at once rather than discovering the contradiction 20 levels deeper. This does not reduce $b$ directly but it makes doomed branches die at their cause.

**The reordering is likely to help more**, because it changes the *base* of the exponential while forward checking mostly cuts the depth at which failures are detected. In practice they compound — forward checking is what makes the constraint counts accurate enough for the reordering to be well informed — and together they are the standard reason constraint solvers handle problems of this size routinely.

(A third, cheaper option: detect that the problem decomposes. If the conflict graph has several connected components, each can be solved independently, turning $5^{40}$ into a product of much smaller searches.)

(d) **Returning "no valid schedule" on timeout is wrong, and the reason is that it is a lie about a distinction the system cannot make.**

A timeout means *"I did not finish searching"*. It does not mean *"no solution exists"* — the search covered a vanishing fraction of the space, and a valid schedule may sit in the part it never reached. Reporting unsatisfiability makes an unsound claim, and downstream code that trusts it will make wrong decisions: a user told their tasks cannot be scheduled will restructure work that was in fact schedulable.

The two outcomes are genuinely different and must stay distinguishable:

- **Proved unsatisfiable** — the search exhausted the space and found nothing. A real, useful, final answer.
- **Timed out** — no conclusion.

**Better responses**, in increasing order of usefulness:

1. **Return "timed out — no answer" explicitly**, distinct from "unsatisfiable". Honest and cheap, and it lets the caller retry, escalate, or ask a human.
2. **Return the best partial assignment found** — the deepest consistent state reached, e.g. 37 of 40 tasks placed with 3 unplaced. That is actionable: a human can resolve three tasks, where they could do nothing with a bare failure.
3. **Switch to an anytime method on timeout** — a local-search or greedy repair heuristic that always returns *some* complete assignment with a count of violated constraints. It gives up the guarantee of validity in exchange for always producing a usable answer, and it can run in the leftover time budget.

The engineering principle worth stating: **when an exact method cannot finish, degrade to a weaker guarantee, not to a false one.** The two honest responses to an intractable instance are "I don't know" and "here is an approximate answer with its quality stated" — and confusing either with "no solution exists" is the failure mode this problem is testing.

</details>

## Flashback

**From Lesson 4.2 (Graphs — representations and traversal):** A traversal loop takes a vertex from a bag, marks its undiscovered neighbours, and puts them in the bag.

(a) What do you get with a queue, and with a stack? (b) What does BFS's discovery order tell you, and what does DFS's not? (c) Give the cost of a full traversal with adjacency lists and with a matrix, at $n = 10^5$, $m = 2\times10^5$. (d) Why does the `discovered` mark matter?

<details>
<summary>Solution</summary>

(a) A **queue** gives breadth-first search; a **stack** gives depth-first search. The loop is otherwise identical — the container is the only difference, and it is the whole difference.

(b) **BFS's discovery order is distance order**: it finishes every vertex at $k$ hops before touching any at $k+1$, so `dist[v]` is the least number of edges from the source and the parent pointers form a shortest-path tree in hops.

**DFS's order tells you nothing about distance.** A vertex one hop from the source can appear anywhere in a DFS order and at any depth, because DFS commits to a path rather than exploring by rings. What DFS gives instead is that a finished vertex has everything reachable from it also finished — the property behind topological sort and component detection.

(c) With **adjacency lists**: $\Theta(n + m) = 5\times10^5$ steps. With an **adjacency matrix**: $\Theta(n^2) = 10^{10}$ steps — about **20,000× more**, running identical code, because iterating one vertex's neighbours means scanning all $n$ cells of its row including the $\approx 10^5$ zeros.

(d) Without it, any **cycle** makes the traversal run forever: the walk returns to a vertex it has already handled, re-enqueues its neighbours, and loops. The mark is what guarantees each vertex enters the bag at most once, which gives both termination and the $\Theta(n+m)$ bound.

(Backtracking is the exception that proves the rule: its implicit graph is a *tree*, so nothing can be revisited and no `discovered` set is needed — which is also why its memory is $\Theta(\text{depth})$ rather than $\Theta(\text{nodes})$.)

</details>

## Connections

- **Backward:** this is [Lesson 1.3's](01-03-recursion-and-the-call-stack.md) recursion and [Lesson 4.2's](04-02-graphs-representations-and-traversal.md) depth-first search combined on a graph that is never stored, with the call stack of [Lesson 2.4](02-04-stacks-and-queues.md) holding the current path. The pruning test is a [Lesson 1.2](01-02-functions-contracts-and-invariants.md) invariant — "this partial state is still extendable" — checked at every node, and the exponential node counts are [Lesson 1.4's](01-04-big-o-counting-operations.md) bottom row of the growth table with real numbers attached.
- **Forward (out of this course):** [`algorithms`](../../algorithms/syllabus.md) picks this up twice — Module 2's dynamic programming is what to do when the search tree has *repeated* subproblems rather than merely doomed ones, and Module 4 explains why these problems resist polynomial solution at all, with [4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) making "exponential search space" precise as NP and [4.3](../../algorithms/lessons/04-03-approximation-algorithms.md) and [4.4](../../algorithms/lessons/04-04-randomized-algorithms.md) giving the two honest alternatives when backtracking times out.
- **Sideways:** constraint propagation and variable-ordering heuristics are the core of SAT and CP solvers, which are what [`operations-research`](../../operations-research/syllabus.md) and modern verification tools run on; backtracking with memoization is how a type checker or a regular-expression engine explores its search space, which is [`programming-languages`](../../programming-languages/syllabus.md)' territory. The counting arguments behind the search-space sizes are [discrete-mathematics 3.1](../../discrete-mathematics/lessons/03-01-counting-rules-permutations-combinations.md)'s.
