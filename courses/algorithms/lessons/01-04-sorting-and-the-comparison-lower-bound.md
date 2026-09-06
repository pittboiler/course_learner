# Algorithms · Lesson 1.4: Sorting by divide-and-conquer & the comparison lower bound

> ⏱ ~15 min · Module 1: Analysis & divide-and-conquer · Builds on: [1.2 (recurrences)](01-02-recurrences-recursion-trees-substitution.md), [1.3 (the master theorem)](01-03-the-master-theorem.md) · Unlocks: 1.5 (divide-and-conquer beyond sorting)

## Why this matters

Sorting is the standard example of divide-and-conquer, but that is not the reason it gets a lesson. The reason is that sorting is where you first prove a **lower bound** — a statement not about one algorithm but about *every possible* algorithm of a kind.

Upper bounds are easy in the sense that they only require you to exhibit something: here is merge sort, it runs in $\Theta(n\log n)$, done. A lower bound requires you to rule out every algorithm that has ever been written and every one that ever will be. There are very few such results, they are the most durable things in the subject, and the decision-tree argument here is the cleanest one you will meet.

The second thing this lesson gives you is a piece of professional skepticism. **"Quicksort is $O(n\log n)$" is false as usually stated** — its worst case is $\Theta(n^2)$, on an input you meet every day (already-sorted data). Knowing exactly which claim is true, and what the standard mitigations do and do not fix, is the judgement half of the lesson.

## The idea

Merge sort and quicksort are mirror images, and it is worth seeing them that way rather than as two unrelated algorithms.

**Merge sort does the work on the way up.** Splitting is trivial — cut the array in half at the midpoint, no thought required. All the intelligence is in the *merge*: interleaving two sorted halves into one sorted whole, in $\Theta(n)$.

**Quicksort does the work on the way down.** Partitioning is the intelligent step — pick a pivot and rearrange so that everything smaller is on its left and everything bigger on its right, in $\Theta(n)$. After that there is nothing to combine: the pieces are already in the right place relative to each other.

$$\text{merge sort} = \underbrace{\text{trivial split}}_{O(1)} + \text{recurse} + \underbrace{\text{clever combine}}_{\Theta(n)}, \qquad \text{quicksort} = \underbrace{\text{clever split}}_{\Theta(n)} + \text{recurse} + \underbrace{\text{trivial combine}}_{O(1)}.$$

Both give $T(n) = 2T(n/2) + \Theta(n) = \Theta(n\log n)$ — **when the split is balanced.** And there is the difference that matters: merge sort's split is balanced *by construction*, because the midpoint of an array is a fact about the array's length. Quicksort's balance depends on the pivot landing near the median, which depends on the data. When it does not, quicksort degrades all the way to $\Theta(n^2)$.

Then the lower bound. Any algorithm that learns about its input **only by comparing pairs of elements** can be drawn as a binary tree: each internal node is a comparison, each branch is an outcome, each leaf is a final ordering it can output. To be correct it needs a distinct leaf for each of the $n!$ possible orderings — if two orderings shared a leaf, the algorithm would output the same answer for both and be wrong on one. A binary tree with $n!$ leaves has height at least $\log_2(n!)$, and that height *is* the worst-case number of comparisons. Since $\log_2(n!) = \Theta(n\log n)$ ([Lesson 1.1's P2(d)](01-01-asymptotic-notation.md)), no comparison sort beats $n\log n$.

## The formal version

**Merge sort.**

```
MERGE-SORT(A[1..n]):
    if n <= 1: return A
    mid   <- floor(n/2)
    L     <- MERGE-SORT(A[1..mid])
    R     <- MERGE-SORT(A[mid+1..n])
    return MERGE(L, R)
```

`MERGE` walks two sorted lists with one index each, repeatedly moving the smaller head to the output: $\Theta(n)$ time and $\Theta(n)$ extra space. So

$$T(n) = 2T(n/2) + \Theta(n) \;\overset{\text{case 2}}{=}\; \Theta(n\log n),$$

by the [master theorem](../reference.md#master-theorem) with $a = b = 2$ and watershed $n$. This holds for **every** input — best, average and worst are all $\Theta(n\log n)$.

*Correctness* is induction on $n$: singletons are sorted; if `L` and `R` are sorted then `MERGE` emits a sorted list, because at each step the smallest unemitted element overall is at the head of one of the two lists.

**Quicksort.**

```
QUICKSORT(A[1..n]):
    if n <= 1: return A
    p            <- CHOOSE-PIVOT(A)
    (lo, hi)     <- PARTITION(A, p)      -- lo: elements < p ; hi: elements > p
    return concat(QUICKSORT(lo), [p], QUICKSORT(hi))
```

`PARTITION` compares every element to the pivot once: exactly $n-1$ comparisons. The recurrence depends on where the pivot lands. If it splits the array into pieces of size $i$ and $n-1-i$:

$$T(n) = T(i) + T(n-1-i) + \Theta(n).$$

| pivot behaviour | recurrence | result |
|---|---|---|
| always the median | $T(n) = 2T(n/2) + \Theta(n)$ | $\Theta(n\log n)$ — best case |
| always an extreme | $T(n) = T(n-1) + \Theta(n)$ | $\Theta(n^2)$ — **worst case** |
| always the 1:9 point | $T(n) = T(n/10) + T(9n/10) + \Theta(n)$ | $\Theta(n\log n)$ |
| random pivot | — | $\Theta(n\log n)$ **expected** (Lesson 4.4) |

Note the third row: even a badly lopsided but *constant-ratio* split is still $\Theta(n\log n)$, by [Lesson 1.2's Example 2](01-02-recurrences-recursion-trees-substitution.md). Quicksort does not need good pivots; it needs pivots that are not consistently extreme.

**Theorem (comparison lower bound).** Any deterministic algorithm that sorts $n$ elements using only pairwise comparisons performs $\Omega(n\log n)$ comparisons in the worst case.

*Proof.* Model the algorithm as a **[decision tree](../reference.md#decision-tree)**: internal nodes are comparisons $a_i : a_j$, the two edges are the outcomes $\le$ and $>$, and leaves are output permutations. A given input follows one root-to-leaf path, and the number of comparisons on that input is that path's length; the worst case is the tree's height $h$.

Correctness forces the tree to have at least $n!$ leaves: for each of the $n!$ input orderings the algorithm must output a different permutation, and the output is determined by the leaf reached. A binary tree of height $h$ has at most $2^h$ leaves, so

$$2^h \ge n! \quad\Longrightarrow\quad h \ge \log_2(n!) \;=\; \Omega(n\log n),$$

the last step by [Lesson 1.1's P2(d)](01-01-asymptotic-notation.md). $\blacksquare$

**What the bound does and does not cover.** It constrains only algorithms whose sole access to the data is comparison. Sorts that *look inside* the values — counting sort, radix sort, bucket sort — are outside the model and can run in $\Theta(n)$, at the price of assuming something about the keys (bounded range, fixed width). The bound is not violated; it simply does not apply.

## Picture

![A decision tree for sorting three elements a, b, c. The root compares a to b; each branch leads to another comparison, and the leaves are the six possible orderings. The tree has height three, and a note explains that a binary tree of height h has at most two-to-the-h leaves, so h must be at least log base two of n factorial.](assets/01-04-fig1.svg)

Every comparison sort on three elements *is* this tree, up to relabelling. It has $3! = 6$ leaves, so its height is at least $\lceil \log_2 6\rceil = 3$ — and three comparisons genuinely suffice, so the bound is tight here.

The essential move is that the argument never mentions an algorithm. It counts *outputs the algorithm must be able to distinguish* and *information one comparison can supply* (one bit), and divides. That is the shape of nearly every lower-bound proof: **count the possibilities, count the information per step, divide.** You will see it again in [Lesson 1.1's](01-01-asymptotic-notation.md) growth reasoning and in the reduction arguments of Module 4.

## Worked examples

**Example 1 (why you'd care): quicksort's worst case is the input you see most.** Take `CHOOSE-PIVOT` to be "the last element" — the textbook default — and run it on an already-sorted array $[1, 2, \dots, n]$.

The pivot is $n$, the largest element. Partitioning puts all $n-1$ others on the left and nothing on the right, having spent $n-1$ comparisons. The recursion then does the same thing to $[1,\dots,n-1]$. So

$$T(n) = T(n-1) + (n-1) \quad\Longrightarrow\quad \text{total comparisons} = \sum_{k=1}^{n-1} k = \frac{n(n-1)}{2} = \Theta(n^2).$$

Measured exactly: $n = 8$ costs $28$ comparisons, $n = 16$ costs $120$, $n = 64$ costs $2016$, $n = 128$ costs $8128$ — precisely $n(n-1)/2$ every time.

**This is not a contrived input.** Already-sorted, reverse-sorted and nearly-sorted data are the *common* cases in practice: re-sorting a list that was sorted by a previous step, appending to a sorted file, sorting data that arrives in order. The naive quicksort's worst case is aligned with reality rather than orthogonal to it, which is what makes it dangerous rather than theoretical.

So the accurate claims are:

- merge sort is $\Theta(n\log n)$ — **worst case**;
- quicksort is $\Theta(n\log n)$ — **average case over random inputs**, and $\Theta(n^2)$ worst case;

and writing "quicksort is $O(n\log n)$" without saying which is the error, not a shorthand.

**Example 2 (mechanical): the lower bound, concretely.** How many comparisons must any comparison sort make in the worst case?

$$n = 3: \ \lceil\log_2 6\rceil = 3. \qquad n = 4: \ \lceil\log_2 24\rceil = 5. \qquad n = 5: \ \lceil\log_2 120\rceil = 7.$$
$$n = 10: \ \lceil\log_2 3628800\rceil = 22. \qquad n = 20: \ \lceil\log_2(20!)\rceil = 62.$$

Compare these to $n\log_2 n$, which is $4.8, 8, 11.6, 33.2, 86.4$ respectively. The information-theoretic floor is meaningfully *below* $n\log_2 n$ — about $n\log_2 n - 1.44n$ by Stirling — so there is genuine room between the bound and merge sort's cost, and closing it is what sorting-network and merge-insertion research is about. But the **class** is settled: both are $\Theta(n\log n)$, so no comparison sort can be asymptotically better than merge sort.

Read the numbers the other way for the useful consequence. At $n = 20$, at least $62$ comparisons are needed. If someone shows you a comparison-based sorting routine claiming $50$ comparisons on all inputs of size 20, you do not need to read it — it is wrong, and you know that from a counting argument alone.

## Watch out

- **You might think** the $\Omega(n\log n)$ bound means no sort can be linear — **but actually** it applies only to **comparison** sorts. Counting sort is $\Theta(n + k)$ for integer keys in $[0,k)$ and radix sort is $\Theta(d(n+k))$ for $d$-digit keys; both are linear under their assumptions because they read the keys' *structure* rather than only comparing. The bound is a statement about a model, and models have doors.
- **You might think** median-of-three pivoting fixes quicksort's worst case — **but actually** it fixes the *common* bad cases and not the worst case. Empirically it is a large win: on a sorted input of $n = 128$ it drops from $8128$ comparisons to $649$ (verified). But the worst case remains $\Theta(n^2)$ — McIlroy's "killer adversary" construction (1999) drives *any* deterministic pivot rule quadratic, because the adversary gets to choose the input **after** seeing the rule. The genuine fixes are randomizing the pivot, which makes the input-chooser move first (Lesson 4.4), or introsort, which counts recursion depth and falls back to heapsort.
- **You might think** merge sort's extra $\Theta(n)$ space is a detail — **but actually** it is the main reason quicksort is the default in practice despite the worse worst case: quicksort partitions in place with $O(\log n)$ stack, and on real hardware its sequential access pattern is much friendlier to caches. Asymptotics rank the two one way and deployments rank them the other, which is [Lesson 1.1's](01-01-asymptotic-notation.md) second Watch out playing out in the most-used algorithm there is.

## One-liner

> Merge sort is clever on the way up and quicksort on the way down, both $\Theta(n\log n)$ when the split is balanced — and counting leaves in a decision tree proves that no comparison sort, present or future, can do better.

## Problems

**P1 (🟢)** Run merge sort on $A = [5, 2, 8, 1, 9, 3]$.

(a) Draw the recursion tree, showing the sublists at each level. (b) Give the merged result at every internal node. (c) Count the comparisons your merges actually perform, and compare with the bound $n\lceil\log_2 n\rceil = 6\cdot 3 = 18$.

**P2 (🟡)** (a) Compute the exact number of comparisons naive (last-element pivot) quicksort makes on the sorted input $[1,2,\dots,32]$, and on $[1,2,\dots,64]$. Confirm the ratio is what a quadratic predicts. (b) State the smallest $n$ for which any comparison sort must use at least $10$ comparisons in the worst case. (c) Counting sort runs in $\Theta(n+k)$ on integer keys in $[0,k)$. Explain in two sentences why this does not contradict the $\Omega(n\log n)$ theorem, and give a value of $k$ for which counting sort is *worse* than merge sort.

**P3 (🔴)** A colleague proposes to guarantee $O(n\log n)$ worst-case time for quicksort by choosing the pivot as the median of the first, middle and last elements.

(a) Verify the improvement on the standard bad case: state what naive quicksort costs on a sorted input of size 128 and what median-of-three costs, and say why the change helps there. (b) Explain why this does **not** give a worst-case guarantee, framing your answer in terms of who chooses first — the algorithm designer or the adversary. (c) Give two different modifications that *do* provide a guarantee, say what kind of guarantee each provides (deterministic or expected), and name the cost of each.

<details>
<summary>Solutions</summary>

**P1** (a) Recursion tree, splitting at $\lfloor n/2\rfloor$:

```
                    [5, 2, 8, 1, 9, 3]
                   /                  \
           [5, 2, 8]                [1, 9, 3]
           /       \                /       \
        [5]     [2, 8]           [1]     [9, 3]
                /    \                   /    \
             [2]     [8]              [9]     [3]
```

(b) Merging back up, innermost first:

| merge | inputs | result | comparisons |
|---|---|---|---|
| 1 | $[2]$, $[8]$ | $[2,8]$ | 1 |
| 2 | $[5]$, $[2,8]$ | $[2,5,8]$ | 2 |
| 3 | $[9]$, $[3]$ | $[3,9]$ | 1 |
| 4 | $[1]$, $[3,9]$ | $[1,3,9]$ | 1 |
| 5 | $[2,5,8]$, $[1,3,9]$ | $[1,2,3,5,8,9]$ | 5 |

Final result $[1,2,3,5,8,9]$. ✓

(c) Total comparisons $= 1+2+1+1+5 = \mathbf{10}$, against the bound $18$. Merge sort's real comparison count is well under $n\log_2 n$ — a merge of two lists of length $p$ and $q$ uses at most $p+q-1$ comparisons and often fewer, because it stops as soon as one list empties (merge 4 used only 1: after $1$ is emitted, $[3,9]$ is appended with no further comparison).

Note the information-theoretic floor here is $\lceil\log_2 6!\rceil = \lceil\log_2 720\rceil = 10$ — merge sort hit it exactly on this input, though it does not in general.

**P2** (a) Naive quicksort on a sorted array of size $n$ uses exactly $n(n-1)/2$ comparisons:

$$n = 32:\ \frac{32\cdot 31}{2} = \mathbf{496}, \qquad n = 64:\ \frac{64\cdot 63}{2} = \mathbf{2016}.$$

Ratio $2016/496 = 4.06$. Doubling the input multiplied the work by about 4 — the doubling signature of a quadratic ([Lesson 1.1's Example 2](01-01-asymptotic-notation.md)). (Exactly $4$ in the limit: $\frac{2n(2n-1)/2}{n(n-1)/2} \to 4$.)

(b) We need the smallest $n$ with $\lceil\log_2(n!)\rceil \ge 10$:

| $n$ | 4 | 5 | **6** | 7 |
|---|---|---|---|---|
| $n!$ | 24 | 120 | **720** | 5040 |
| $\lceil\log_2(n!)\rceil$ | 5 | 7 | **10** | 13 |

So the answer is $\mathbf{n = 6}$. (At $n = 5$ the bound is only 7, and $\lceil\log_2 720\rceil = 10$ exactly — note $720 < 1024 = 2^{10}$, so the ceiling is what pushes it to 10.)

(c) Counting sort never compares two input elements to each other — it uses each key as an **array index**, which is an operation outside the comparison model. The $\Omega(n\log n)$ theorem constrains only algorithms whose sole source of information is pairwise comparisons, so an algorithm that reads the numeric value of a key is simply not covered.

Counting sort is worse than merge sort whenever $k$ dominates: with $k = n^2$, counting sort is $\Theta(n + n^2) = \Theta(n^2)$ while merge sort stays $\Theta(n\log n)$. (Concretely: sorting $1000$ 32-bit integers with counting sort would allocate an array of $2^{32}$ counters.) The linear-time claim is bought with an assumption about the key range, and it is only a bargain when that assumption is genuinely true.

**P3** (a) On a sorted input of size $128$, naive last-element quicksort uses $\frac{128\cdot127}{2} = \mathbf{8128}$ comparisons; median-of-three uses $\mathbf{649}$ (measured), against $n\log_2 n = 896$ — so it is not merely better, it is at the good end of the range.

It helps because on a sorted array the first, middle and last elements are the minimum, the true median, and the maximum. Median-of-three therefore selects **exactly the median**, giving a perfectly balanced split, and the same holds recursively on each sorted half. The rule is precisely tuned to the input family it is defending against.

(b) Because the order of play is wrong. A deterministic pivot rule is **fixed and public**; the adversary chooses the input **afterwards**, knowing the rule. So for any deterministic rule, one asks "which input makes this rule pick badly at every level?" and — for median-of-three — such inputs exist and force $\Theta(n^2)$. (McIlroy's 1999 "killer adversary" constructs one for any deterministic quicksort by answering comparisons adaptively, so this is not a gap in the analysis but a theorem.)

Median-of-three defends against the inputs people happen to feed it, which is genuinely valuable engineering; it does not defend against an input chosen to defeat it, which is what a worst-case guarantee means.

(c) Two fixes:

1. **Randomized pivot** — choose the pivot uniformly at random. This gives $\Theta(n\log n)$ **expected** time on *every* input, with the expectation over the algorithm's own coins rather than over a distribution of inputs. The adversary no longer moves last: it may choose any array, but it cannot predict the coins. This is an expected-time guarantee, not a worst-case one — a quadratic run is possible but has vanishing probability. Cost: a random number per partition, and the guarantee is probabilistic. (Lesson 4.4.)

2. **Introsort** — run quicksort but track recursion depth; if it exceeds $\sim 2\log_2 n$, switch that subproblem to heapsort. This gives a **deterministic worst-case** $O(n\log n)$, since heapsort is $\Theta(n\log n)$ unconditionally, while retaining quicksort's speed on ordinary inputs. Cost: you must implement a second sorting algorithm, and the constant is slightly worse on the rare inputs that trigger the fallback. This is what the C++ standard library does.

**The general moral:** when a deterministic heuristic has an adversarial worst case, you either change who moves last (randomize) or install a guaranteed fallback (hybridize). Tuning the heuristic further only moves which inputs are bad.

</details>

## Flashback

**From Lesson 1.2 (Recurrences):** Solve each by recursion tree, naming the shape (root-dominated, flat, or leaf-dominated) and the total.

(a) $T(n) = T(n-1) + n$  (b) $T(n) = 2T(n/2) + \log n$

<details>
<summary>Solution</summary>

(a) $T(n) = T(n-1) + n$. This is a **path**, not a branching tree: one node per level, doing $n, n-1, n-2, \dots$ work. Telescoping,

$$T(n) = n + (n-1) + \cdots + 1 = \frac{n(n+1)}{2} = \Theta(n^2).$$

Shape: the levels shrink, but only *arithmetically*, not geometrically — so no single level dominates and the answer is the whole sum. It is closest to **root-dominated** in that the top levels carry most of the work (the top half of the levels carry three-quarters of it), but the honest description is that this recurrence is outside the three-shape trichotomy, which is about *geometric* series. (It is also outside the master theorem — subtractive, not divisive, as in [Lesson 1.3's P2(b)](01-03-the-master-theorem.md).)

**This is exactly quicksort's worst-case recurrence**, which is why Example 1's answer was $\Theta(n^2)$.

(b) $T(n) = 2T(n/2) + \log n$. Level $i$ has $2^i$ nodes of size $n/2^i$, each doing $\log(n/2^i) = \log n - i$ work:

$$\text{level } i \text{ cost} = 2^i(\log_2 n - i),$$

which **grows** roughly geometrically — the node count doubles while the per-node cost falls only by 1. The last level ($i = \log_2 n$) has $n$ leaves at $\Theta(1)$ each, contributing $\Theta(n)$, and the sum of all earlier levels is $\Theta(n)$ as well. Total $\Theta(n)$ — **leaf-dominated**.

Cross-check with the master theorem: $a = b = 2$, watershed $n^{\log_2 2} = n$; $f(n) = \log n = O(n^{1-\epsilon})$ for, say, $\epsilon = 0.5$. **Case 1**, giving $\Theta(n)$. ✓

The moral both parts share: *where the work sits* is as informative as the total. In (a) it is at the top, in (b) at the bottom — and [Lesson 1.3's P3](01-03-the-master-theorem.md) showed that is precisely what tells you which end is worth optimizing.

</details>

## Connections

- **Backward:** merge sort's bound is [Lesson 1.3's](01-03-the-master-theorem.md) case 2 and quicksort's worst case is the subtractive recurrence the master theorem cannot touch; the lower bound rests on $\log_2(n!) = \Theta(n\log n)$, proved in [Lesson 1.1's P2(d)](01-01-asymptotic-notation.md). The decision tree is a rooted binary tree in the sense of [discrete-mathematics 5.3](../../discrete-mathematics/lessons/05-03-trees-and-graph-coloring.md), and counting its leaves is [pigeonhole](../../discrete-mathematics/lessons/03-03-inclusion-exclusion-and-pigeonhole.md) in disguise.
- **Forward:** Lesson 1.5 applies the same split-recurse-combine template where the combine step is the hard part; Lesson 2.3's Kruskal begins by sorting, and inherits this $\Theta(n\log n)$; Lesson 4.4 proves randomized quicksort's expected $O(n\log n)$, completing P3.
- **Sideways:** the decision-tree argument is an information-theoretic one — each comparison yields at most one bit, and you need $\log_2(n!)$ bits to identify a permutation — which is the entropy bound of [information-theory](../../information-theory/syllabus.md) wearing an algorithms hat. The same counting move proves the $\Omega(n\log n)$ bound for element-uniqueness and the $\lceil\log_2 n\rceil$ bound for searching a sorted array. In [theory-of-computation 1.2](../../theory-of-computation/lessons/01-02-nfa-and-the-subset-construction.md), the $2^k$ state lower bound is the same style of argument: count what must be distinguished, and divide by what one step can distinguish.
