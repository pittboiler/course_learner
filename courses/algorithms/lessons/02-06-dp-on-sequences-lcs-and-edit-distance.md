# Algorithms · Lesson 2.6: DP on sequences — LCS & edit distance

> ⏱ ~15 min · Module 2: Greedy & dynamic programming · Builds on: [2.5 (dynamic programming & knapsack)](02-05-dynamic-programming-and-knapsack.md) · Unlocks: 3.1 (graph search)

## Why this matters

Knapsack's table was indexed by *how many items* and *how much capacity*. This lesson uses the same machinery on a different shape of subproblem — **prefixes of two sequences** — and that shape turns out to be one of the most useful in computing.

`diff` and `git merge` are longest-common-subsequence. Spell-checkers and fuzzy search are edit distance. So is DNA sequence alignment, which is the same recurrence with a biologically-motivated scoring matrix, and it is the most-executed dynamic program in science. Learning the two-sequence table once gives you all of them, because they differ only in the scoring, not in the structure.

The judgement content here is about **recovering the answer versus computing its cost**. The table gives you a number in $\Theta(mn)$ time and, if you are clever, $\Theta(\min(m,n))$ space — but the space trick destroys the information needed to reconstruct the actual alignment, which is usually the thing you wanted. Knowing that trade, and knowing there is a way around it, is what separates using a DP from citing one.

## The idea

Both problems compare two sequences by looking at their **prefixes**. Write $X = x_1\cdots x_m$ and $Y = y_1\cdots y_n$, and let the subproblem be "compare $x_1\cdots x_i$ with $y_1\cdots y_j$." There are $(m+1)(n+1)$ such pairs, so the table is two-dimensional and small.

The recursion comes from asking what happens at the **last characters**.

**Longest common subsequence.** A subsequence keeps order but may skip. Comparing $x_i$ with $y_j$:

- If $x_i = y_j$, they can be matched, and it is always safe to do so — so the answer is $1$ plus the LCS of the two shorter prefixes.
- If $x_i \ne y_j$, at least one of them is unused in the alignment. Try dropping each and keep the better.

**Edit distance.** How many single-character insertions, deletions and substitutions turn $X$ into $Y$? Look at the last characters again: either you delete $x_i$, or insert $y_j$, or match/substitute them against each other. Three options, take the cheapest.

The two recurrences are almost the same expression, and it is worth seeing them side by side because the *difference* is exactly the difference between the problems: LCS **maximizes matches**, edit distance **minimizes changes**.

The other half of the lesson is the backtrack. The table tells you the score; walking back from the corner, choosing at each cell which predecessor produced it, tells you the **alignment** — which characters matched, which were inserted, which deleted. That path is what `diff` prints.

## The formal version

**Longest common subsequence.** Let $L[i,j]$ be the length of the LCS of $x_1\cdots x_i$ and $y_1\cdots y_j$.

$$L[i,j] \;=\;
\begin{cases}
0 & i = 0 \text{ or } j = 0,\\[2pt]
L[i-1,j-1] + 1 & x_i = y_j,\\[2pt]
\max\big(L[i-1,j],\ L[i,j-1]\big) & x_i \ne y_j.
\end{cases}$$

*Why matching on equality is safe* (the subtle step): if $x_i = y_j$, some optimal alignment matches them. Suppose an optimal LCS does not. It cannot use both $x_i$ and $y_j$ matched to other characters without crossing — subsequences preserve order — so at most one of them is matched at all. If neither is used, appending the pair $x_i{=}y_j$ gives a longer common subsequence, contradiction. If, say, $x_i$ is matched to some $y_k$ with $k < j$, re-point that match to $y_j$ instead: still a valid common subsequence of the same length, and now it matches $x_i$ with $y_j$. So an optimal solution matching them exists. $\blacksquare$

**Edit distance (Levenshtein).** Let $D[i,j]$ be the minimum number of insertions, deletions and substitutions turning $x_1\cdots x_i$ into $y_1\cdots y_j$.

$$D[i,j] \;=\;
\begin{cases}
j & i = 0 \quad (\text{insert all of } y),\\[2pt]
i & j = 0 \quad (\text{delete all of } x),\\[2pt]
\min\big(\underbrace{D[i-1,j] + 1}_{\text{delete } x_i},\ \underbrace{D[i,j-1] + 1}_{\text{insert } y_j},\ \underbrace{D[i-1,j-1] + [\,x_i \ne y_j\,]}_{\text{match or substitute}}\big) & \text{otherwise},
\end{cases}$$

where $[\,x_i \ne y_j\,]$ is 1 if the characters differ and 0 if they match.

Note the base cases differ from LCS's: an empty prefix costs 0 matches but $j$ edits.

**Cost.** Both are $\Theta(mn)$ time and $\Theta(mn)$ space. Since each row depends only on the previous one, space drops to $\Theta(\min(m,n))$ by keeping two rows — **but then you cannot backtrack.**

**Recovering the alignment.** Walk back from $[m,n]$:

```
LCS-BACKTRACK:
    i, j <- m, n;  out <- empty
    while i > 0 and j > 0:
        if x_i = y_j:                 prepend x_i to out;  i, j <- i-1, j-1
        else if L[i-1][j] >= L[i][j-1]:  i <- i-1
        else:                            j <- j-1
    return out
```

Each step is $O(1)$ and the path has length at most $m + n$, so recovery is $\Theta(m+n)$ once the table exists.

**[Hirschberg's algorithm](../reference.md#hirschbergs-algorithm)** gets both: the alignment *and* $\Theta(\min(m,n))$ space, in $\Theta(mn)$ time. It computes the middle column's optimal crossing point with two space-efficient passes, then recurses on the two halves — divide-and-conquer layered on top of the DP. This is what production `diff` implementations use on large files, and it is why they do not need memory proportional to the product of the file sizes.

## Picture

![An eight-by-seven longest-common-subsequence table for X equal to ABCBDAB and Y equal to BDCABA. The corner cell holds 4. Cells along the backtracking path are outlined, with the four diagonal match cells highlighted in a different colour, spelling B, C, B, A when read from the top left.](assets/02-06-fig1.svg)

Each cell looks at three neighbours: up-left on a match, otherwise up and left. That local dependency is why one pass in row-major order fills the whole table correctly — everything a cell needs is already computed.

The outlined path is the backtrack from the corner, and the highlighted cells on it are the **diagonal** steps, which are exactly the matches. Reading them in order gives $B, C, B, A$ — the LCS, length 4.

Two things to read off the picture. First, the value only ever increases by 1 along a diagonal step, so **the corner value equals the number of diagonal steps on the path**. Second, where two neighbours tie, the path could have gone either way — so the LCS is not unique, and `ABCBDAB` / `BDCABA` also have `BDAB` and `BCAB` as length-4 common subsequences. Any tie-break rule gives a correct answer, which is why two `diff` implementations can report different but equally valid edit scripts.

## Worked examples

**Example 1 (mechanical): LCS of `ABCBDAB` and `BDCABA`.** The table, with $X$ down the side and $Y$ across:

| | $\varnothing$ | B | D | C | A | B | A |
|---|---|---|---|---|---|---|---|
| $\varnothing$ | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **A** | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| **B** | 0 | 1 | 1 | 1 | 1 | 2 | 2 |
| **C** | 0 | 1 | 1 | 2 | 2 | 2 | 2 |
| **B** | 0 | 1 | 1 | 2 | 2 | 3 | 3 |
| **D** | 0 | 1 | 2 | 2 | 2 | 3 | 3 |
| **A** | 0 | 1 | 2 | 2 | 3 | 3 | 4 |
| **B** | 0 | 1 | 2 | 2 | 3 | 4 | 4 |

Two cells by hand:

- $L[2,1]$: $x_2 = $ `B`, $y_1 = $ `B` — a match, so $L[1,0] + 1 = 0 + 1 = 1$ ✓.
- $L[6,6]$: $x_6 = $ `A`, $y_6 = $ `A` — a match, so $L[5,5] + 1 = 3 + 1 = 4$ ✓.

**Answer: 4.** Backtracking from $[7,6]$ gives the path

$$(7,6) \to (6,6)^\ast \to (5,5) \to (4,5)^\ast \to (3,4) \to (3,3)^\ast \to (2,2) \to (2,1)^\ast \to (1,0),$$

with $\ast$ marking the diagonal (match) steps at $(6,6), (4,5), (3,3), (2,1)$ — characters `A`, `B`, `C`, `B`. Reversed: **`BCBA`**. (All machine-verified.)

**Example 2 (why you'd care): edit distance, and reading the alignment.** Turn `kitten` into `sitting`.

| | $\varnothing$ | s | i | t | t | i | n | g |
|---|---|---|---|---|---|---|---|---|
| $\varnothing$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| **k** | 1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| **i** | 2 | 2 | 1 | 2 | 3 | 4 | 5 | 6 |
| **t** | 3 | 3 | 2 | 1 | 2 | 3 | 4 | 5 |
| **t** | 4 | 4 | 3 | 2 | 1 | 2 | 3 | 4 |
| **e** | 5 | 5 | 4 | 3 | 2 | **2** | 3 | 4 |
| **n** | 6 | 6 | 5 | 4 | 3 | 3 | **2** | **3** |

**Answer: 3.** Reading the backtrack gives the three edits:

$$\texttt{k}\to\texttt{s} \ (\text{substitute}), \qquad \texttt{e}\to\texttt{i} \ (\text{substitute}), \qquad \text{append } \texttt{g} \ (\text{insert}).$$

Check by hand: `kitten` → `sitten` → `sittin` → `sitting`. Three edits ✓, and no two edits suffice because the words differ in length by one and in two aligned positions.

**Where this shows up.** The same table with different costs is:

| application | scoring |
|---|---|
| `diff`, `git` | LCS on lines; unmatched lines become $-$ and $+$ |
| spell-check | edit distance with a threshold, often weighted by keyboard adjacency |
| DNA alignment (Needleman–Wunsch) | substitution matrix (BLOSUM/PAM) plus affine gap penalties |
| fuzzy string search | edit distance with early termination beyond a cutoff |

The structure never changes: two prefixes, three predecessors, one pass. **Learn the table once and you have all four.**

## Watch out

- **You might think** the LCS is unique — **but actually** ties in the $\max$ mean several optimal subsequences usually exist. `ABCBDAB` and `BDCABA` have `BCBA`, `BDAB` and `BCAB`, all of length 4. Any of them is correct, which is exactly why two `diff` implementations can produce different-looking but equally minimal edit scripts, and why diff output is not canonical.
- **You might think** subsequence means substring — **but actually** a **subsequence** may skip characters (order preserved, contiguity not required) while a **substring** must be contiguous. `BCBA` is a subsequence of `ABCBDAB` but not a substring. The longest common *substring* is a different problem with a different recurrence (reset to 0 on a mismatch instead of taking a max), and confusing them silently gives wrong answers.
- **You might think** the $\Theta(\min(m,n))$ space optimization is free — **but actually** it discards the table, and the backtrack needs the table. If all you want is the *distance*, keep two rows and enjoy the saving; if you want the *alignment*, you need the full table or Hirschberg's divide-and-conquer. Optimizing space first and discovering later that you need the path is a standard and annoying rework.

## One-liner

> Index the table by prefixes of both sequences, look at the last two characters, and take the best of three neighbours — the corner holds the score and the path back through it holds the alignment.

## Problems

**P1 (🟢)** Compute the LCS of $X = $ `AGGTAB` and $Y = $ `GXTXAYB`.

(a) Fill the table. (b) State the LCS length. (c) Backtrack to give one LCS, marking the diagonal steps.

**P2 (🟡)** Compute the edit distance between `flaw` and `lawn`.

(a) Fill the table. (b) State the distance. (c) Give an edit script achieving it. (d) The two words share the substring `law`. Explain in one sentence why the distance is not simply $|{\tt flaw}| + |{\tt lawn}| - 2|{\tt law}| = 2$, or confirm that it is.

**P3 (🔴)** A colleague implements LCS with the two-row space optimization to save memory on large files, then reports: "It gives the right length, but I cannot make it print the actual diff."

(a) Explain precisely what information was lost and why the backtrack needs it. (b) Give the space and time of the full-table version and of the two-row version, for $|X| = m$, $|Y| = n$. (c) Describe how Hirschberg's algorithm recovers the alignment in $\Theta(\min(m,n))$ space, and state its time. (d) A second colleague suggests instead "just re-run the two-row DP from each cell you need." Say roughly what that costs and why it is worse than Hirschberg.

<details>
<summary>Solutions</summary>

**P1** (a) $X = $ `AGGTAB` (rows), $Y = $ `GXTXAYB` (columns):

| | $\varnothing$ | G | X | T | X | A | Y | B |
|---|---|---|---|---|---|---|---|---|
| $\varnothing$ | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **A** | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| **G** | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| **G** | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| **T** | 0 | 1 | 1 | 2 | 2 | 2 | 2 | 2 |
| **A** | 0 | 1 | 1 | 2 | 2 | 3 | 3 | 3 |
| **B** | 0 | 1 | 1 | 2 | 2 | 3 | 3 | 4 |

(b) LCS length **4**.

(c) Backtrack from $[6,7]$: $x_6 = $ `B` $= y_7$ → **diagonal**, take `B`, go to $[5,6]$. There $x_5 = $ `A`, $y_6 = $ `Y`, mismatch; $L[4,6] = 2 < L[5,5] = 3$, so move left to $[5,5]$. There $x_5 = $ `A` $= y_5$ → **diagonal**, take `A`, go to $[4,4]$. There $x_4 = $ `T`, $y_4 = $ `X`, mismatch; $L[3,4] = 1 < L[4,3] = 2$, so move left to $[4,3]$. There $x_4 = $ `T` $= y_3$ → **diagonal**, take `T`, go to $[3,2]$. There $x_3 = $ `G`, $y_2 = $ `X`, mismatch; $L[2,2] = 1 \ge L[3,1] = 1$, move up to $[2,2]$. There $x_2 = $ `G`, $y_2 = $ `X`, mismatch; $L[1,2] = 0 < L[2,1] = 1$, move left to $[2,1]$. There $x_2 = $ `G` $= y_1$ → **diagonal**, take `G`, go to $[1,0]$ — stop.

Diagonals collected in reverse order: `B`, `A`, `T`, `G` → the LCS is **`GTAB`**. ✓ (Length 4, and it is indeed a subsequence of both.)

**P2** (a) $X = $ `flaw` (rows), $Y = $ `lawn` (columns):

| | $\varnothing$ | l | a | w | n |
|---|---|---|---|---|---|
| $\varnothing$ | 0 | 1 | 2 | 3 | 4 |
| **f** | 1 | 1 | 2 | 3 | 4 |
| **l** | 2 | 1 | 2 | 3 | 4 |
| **a** | 3 | 2 | 1 | 2 | 3 |
| **w** | 4 | 3 | 2 | 1 | **2** |

(b) Edit distance **2**.

(c) One script: **delete** the leading `f` (`flaw` → `law`), then **insert** `n` at the end (`law` → `lawn`). Two edits ✓.

(d) **It is 2, and the formula happens to give the right answer here — but the reasoning behind it is not valid in general.** The quantity $m + n - 2\ell$ (with $\ell$ the LCS length) counts deletions-plus-insertions only, i.e. it is the edit distance in the model where **substitution is not allowed** (or costs 2). Here $m = n = 4$ and the LCS is `law` of length 3, giving $4 + 4 - 6 = 2$ ✓, matching because this instance's optimal script happens to use no substitutions.

The formula fails when substitution helps. Compare `abc` and `xyz`: the LCS is empty, so the formula gives $3 + 3 - 0 = 6$, while the true Levenshtein distance is **3** (substitute each character). So *edit distance $\le m + n - 2\ell$ always, with equality exactly when no substitution is used in an optimal script* — the relation is an inequality, not an identity.

**P3** (a) The two-row version keeps only the current and previous rows, so when it finishes, **rows $0$ through $m-2$ have been overwritten**. The backtrack walks from $[m,n]$ back to $[0,0]$, and at each cell it must compare $L[i-1][j]$ against $L[i][j-1]$ to decide whether the path came from above or the left. Those cells are in rows that no longer exist. The *length* survives because it is a single number in the surviving row; the *path* does not, because it is spread across the whole table.

(b)

| version | time | space |
|---|---|---|
| full table | $\Theta(mn)$ | $\Theta(mn)$ |
| two rows | $\Theta(mn)$ | $\Theta(\min(m,n))$ (index the shorter sequence across) |

Same time; the saving is entirely in space, and the cost is the alignment.

(c) **Hirschberg's algorithm.** Split $X$ at its midpoint $i^\ast = m/2$. An optimal alignment must cross that row at exactly one column $j^\ast$. Find it with two space-efficient passes: run the two-row DP forward on $x_1..x_{i^\ast}$ against all of $Y$, and backward on $x_{i^\ast+1}..x_m$ against the reverse of $Y$; then $j^\ast$ is the column maximizing the sum of the two rows. That pins one point of the alignment in $\Theta(n)$ space. Now **recurse** on the two halves: $(x_1..x_{i^\ast},\ y_1..y_{j^\ast})$ and $(x_{i^\ast+1}..x_m,\ y_{j^\ast+1}..y_n)$.

Space is $\Theta(\min(m,n))$ (two rows plus $O(\log m)$ recursion depth). Time satisfies $T(m,n) = T(m/2, j^\ast) + T(m/2, n - j^\ast) + \Theta(mn)$; since the work halves at each level while the total width stays $n$, the sum telescopes to $\Theta(mn)$ — **the same time as the full table**, with a constant factor of about 2.

(This is [Lesson 1.5's](01-05-divide-and-conquer-beyond-sorting.md) divide-and-conquer bolted onto a DP: find one point of the answer cheaply, then recurse on both sides.)

(d) Recomputing the needed values on demand means, at each of the $\Theta(m+n)$ backtrack steps, re-running a $\Theta(mn)$ DP to learn two cells. That is $\Theta(mn(m+n))$ — cubic-ish, against Hirschberg's $\Theta(mn)$.

It is worse for the reason [Lesson 2.5](02-05-dynamic-programming-and-knapsack.md) warned about: it throws away computed subproblem answers and recomputes them, which is precisely the recomputation dynamic programming exists to avoid. Hirschberg is better because each recursive call **halves the problem** rather than redoing all of it, so the recomputation is geometric and sums to a constant factor instead of a linear one.

</details>

## Flashback

**From Lesson 2.4 (Amortized analysis):** A data structure supports an operation in **amortized** $O(1)$.

(a) State precisely what that guarantees about a sequence of $n$ operations. (b) State what it does **not** guarantee about any single operation. (c) A colleague measures the 99th-percentile latency of this operation under load and finds it 400× the mean, then reports a bug. Are they right? (d) Name the third guarantee in the family and how it differs from both.

<details>
<summary>Solution</summary>

(a) **Every** sequence of $n$ operations, starting from the initial state, costs $O(n)$ in total — with the constant independent of $n$ and of which sequence. It is a worst-case statement about the aggregate, holding for adversarially chosen sequences, with no probability anywhere.

(b) It guarantees **nothing** about any individual operation, which may cost as much as $\Theta(n)$. The dynamic array's append is the standard example: the append that triggers a doubling copies every element.

(c) **No, they are not right** — or at least the measurement is not evidence of a bug. Amortized $O(1)$ explicitly permits rare expensive operations, and a 99th-percentile far above the mean is the *expected signature* of exactly that: the occasional doubling copy shows up in the tail while the mean stays flat.

What they have found is a **mismatch between the guarantee and the requirement**, not a defect. If tail latency is the binding constraint, the correct response is to change the data structure — pre-allocate to a known capacity, or use one with worst-case per-operation bounds — not to file a bug against a structure that is meeting its stated contract. (This is [Lesson 2.4's Example 2](02-04-amortized-analysis-and-union-find.md) in the field.)

(d) **Expected** $O(1)$ — fast on average over the **algorithm's own random choices**, not over the input and not over the sequence. The three differ in what is being averaged, and in what an adversary can do:

| guarantee | averaged over | adversary can force a slow… |
|---|---|---|
| worst-case $O(1)$ | nothing | never |
| amortized $O(1)$ | the sequence | single operation, but not a sequence |
| expected $O(1)$ | the algorithm's coin flips | single run, with small probability; cannot bias the average by choosing input |

Hash tables are the standard *expected* case: an adversary who knows the hash function can choose colliding keys and force $\Theta(n)$ lookups — which is why security-sensitive code uses randomized (SipHash-style) hashing to put the coin flips out of the adversary's reach. Lesson 4.4 develops this.

</details>

## Connections

- **Backward:** the template is exactly [Lesson 2.5's](02-05-dynamic-programming-and-knapsack.md) — check optimal substructure, write the recurrence on the last decision, fill a table, backtrack for the solution — with the subproblem re-indexed from (items, capacity) to (prefix, prefix). Hirschberg's algorithm layers [Lesson 1.5's](01-05-divide-and-conquer-beyond-sorting.md) divide-and-conquer on top.
- **Forward:** Module 3 reads DP as shortest paths on a graph of subproblems, which Lesson 3.4's Bellman–Ford and Floyd–Warshall make literal. Lesson 4.3's approximation schemes use DP tables on rounded inputs.
- **Sideways:** this recurrence with a substitution matrix and affine gap penalties is Needleman–Wunsch, the foundation of [computational-biology](../../computational-biology/syllabus.md)'s sequence alignment — that course's alignment module *is* this lesson applied. The same table underlies `diff` and three-way merge in version control, and the "score in the corner, decisions in the path" split is the same one that separates the value function from the policy in [reinforcement-learning](../../reinforcement-learning/syllabus.md).
