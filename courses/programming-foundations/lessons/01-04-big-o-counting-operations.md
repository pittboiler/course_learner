# Programming & Data Structures · Lesson 1.4: Big-O — counting operations

> ⏱ ~15 min · Module 1: Programming & recursion · Builds on: [1.3 (recursion and the call stack)](01-03-recursion-and-the-call-stack.md) · Unlocks: 2.1 (abstract data types)

## Why this matters

Every remaining lesson in this course ends in a cost table. "Use a hash table, not a list" and "sorted insertion ruins a BST" are only claims about running time, and you cannot evaluate either without a way to say how much work a piece of code does.

Big-O is that way. It throws away everything machine-specific — clock speed, language, whether your compiler unrolled the loop — and keeps the one thing that survives all of it: **how the work grows as the input grows**. That is a deliberately lossy summary, and knowing what it discards is as important as knowing what it keeps.

This lesson teaches Big-O **operationally**: count what the innermost line does, keep the term that dominates, drop the constants. The formal definitions with witnesses $c$ and $n_0$, and the proofs that go with them, belong to [`algorithms` 1.1](../../algorithms/lessons/01-01-asymptotic-notation.md) — this course uses the notation, that one builds it.

The judgement content is that **the class is not the whole story**. Two $\Theta(n^2)$ sorts can differ by a factor of 3; a $\Theta(n\log n)$ algorithm can lose to a $\Theta(n^2)$ one on every input you will ever see; and "which case?" — best, worst, average — changes the answer more often than the algorithm does.

## The idea

**Count the operation that dominates.** Pick the thing the code does most — a comparison, an array access, an arithmetic step — and count how many times it happens as a function of the input size $n$. You are not counting nanoseconds; you are counting *repetitions of the inner line*.

**Then simplify, in two moves.**

1. **Drop constant factors.** $3n$ and $n$ and $n/2$ are all $\Theta(n)$, because a machine three times faster erases the difference and no machine erases a change of growth rate.
2. **Keep only the dominant term.** $n^2 + 50n + 300$ is $\Theta(n^2)$, because past some size the $n^2$ swamps everything else. At $n = 1000$ the quadratic term is already 20 times the rest combined.

What survives is the **growth class**, and it is what actually decides whether a program finishes.

**[Loops multiply, sequences add](../reference.md#counting-a-loop).** Two loops one after the other cost the sum of their counts; a loop inside a loop costs the product. That is the entire calculus, and almost every count in this course is one of a handful of shapes:

| shape | count |
|---|---|
| one pass over $n$ items | $n$ |
| a nested pass over all pairs | $n^2$ |
| a nested pass over ordered pairs ($j < i$) | $n(n-1)/2$ |
| halving until you reach 1 | $\lfloor \log_2 n \rfloor + 1$ |
| $n$ passes, each halving | $n \log_2 n$ |

**Which case?** A running time is a function of the *input*, not just its size, so "the running time for $n$ items" is ambiguous until you say which input. **Worst case** is the maximum over all inputs of size $n$ — the default, because it is the only one that is a guarantee. **Best case** is the minimum, which is usually useless but occasionally the whole point (an adaptive sort that is $\Theta(n)$ on nearly-sorted data). **Average case** needs an assumed distribution over inputs, and the assumption is usually the weakest part of the claim.

## The formal version

**Notation, used here without proof.** $f(n) = O(g(n))$ means $f$ grows no faster than $g$; $\Omega$ means no slower; $\Theta$ means both, i.e. the same rate. Write $\Theta$ when you mean "exactly this rate" — saying an algorithm is $O(n^2)$ is *true* of a linear one and tells the reader nothing.

The definitions with their witnesses, and the little-$o$ / little-$\omega$ refinements, are [`algorithms` 1.1](../../algorithms/lessons/01-01-asymptotic-notation.md)'s.

**Two summations do most of the work.**

$$\sum_{i=0}^{n-1} 1 = n, \qquad \sum_{i=0}^{n-1} i \;=\; 0 + 1 + \cdots + (n-1) \;=\; \frac{n(n-1)}{2}.$$

The second is why a triangular nested loop is $\Theta(n^2)$ and not $\Theta(n^2/2)$ — the half is a constant.

**The [growth classes](../reference.md#growth-at-a-billion-operations-per-second), in the order you will meet them.**

| class | typical source | $n = 10^6$ costs |
|---|---|---|
| $\Theta(1)$ | array index, hash lookup | 1 op |
| $\Theta(\log n)$ | binary search, balanced-tree descent | 20 ops |
| $\Theta(n)$ | one pass | $10^6$ |
| $\Theta(n\log n)$ | good sorting | $2\times10^7$ |
| $\Theta(n^2)$ | all pairs, elementary sorts | $10^{12}$ |
| $\Theta(2^n)$ | exhaustive subset search | astronomical past $n\approx 50$ |

**What Big-O deliberately hides, and when it matters.**

- **Constants.** Two $\Theta(n)$ routines can differ by 10×. Real, and invisible here.
- **Small $n$.** Insertion sort beats merge sort below roughly 30 elements, which is why production sorts switch to it for small subarrays.
- **Memory behaviour.** An array scan and a linked-list walk are both $\Theta(n)$ and differ by an order of magnitude in practice ([2.3](02-03-linked-lists.md)).
- **Which resource.** Time and space are separate counts. [Lesson 1.3](01-03-recursion-and-the-call-stack.md)'s recursion was exponential in one and linear in the other.

None of these makes Big-O wrong. They make it *a summary*, and the skill is knowing when the summary is the whole answer (it usually is, at scale) and when it is not.

## Picture

![A table of five loop shapes with their exact operation counts and growth classes: a single pass costs n and is Theta of n; a doubly nested pass over n by n costs n squared; a triangular nested pass where j runs to i costs n times n minus one over two, outlined in blue, and is still Theta of n squared; a halving while-loop costs floor of log base 2 of n plus one; and n passes each halving costs n log n. Below, a second table gives wall-clock times at a billion operations per second: at n equal to one thousand, linear is 1 microsecond, n log n is 10 microseconds and quadratic is 1 millisecond; at n equal to a million they are 1 millisecond, 20 milliseconds and 17 minutes; at n equal to a billion, 1 second, 30 seconds and 30 years.](assets/01-04-fig1.svg)

**The blue row is the one that is worth the ink.** The inner loop runs $0, 1, 2, \dots, n-1$ times, not $n$ times, so the exact count is $n(n-1)/2$ — about *half* the doubly-nested loop above it. And it is still $\Theta(n^2)$, because a factor of two is a constant. Both facts matter: the half is real if you are choosing between two quadratic algorithms, and irrelevant if you are choosing between quadratic and linearithmic.

**The bottom table is why the classes are worth caring about.** Read across the $n = 10^6$ row: 1 millisecond, 20 milliseconds, 17 minutes. That is not a tuning difference, it is the difference between an interactive feature and a batch job. Read down the $n^2$ column: 1 ms, 17 minutes, 30 years. **A thousand-fold increase in input turns a millisecond into a quarter of an hour**, which is the shape of every "it was fine in testing" incident.

And note what a faster machine buys. Making the computer 1,000× faster moves the 30-year $n^2$ job to 11 days. Changing the algorithm to $n\log n$ moves it to 30 seconds. **Hardware moves you along a column; algorithms move you between columns.**

## Worked examples

**Example 1 (mechanical): count four fragments.**

```
(a)  for i in 0 .. n-1:              (b)  for i in 0 .. n-1:
         s <- s + a[i]                        for j in 0 .. n-1:
                                                  if a[i] = a[j]: c <- c + 1

(c)  for i in 0 .. n-1:              (d)  i <- 1
         for j in 0 .. i-1:                   while i < n:
             if a[i] = a[j]: c <- c+1             s <- s + a[i]
                                                  i <- i * 2
```

| | exact count of the inner line | class |
|---|---|---|
| (a) | $n$ | $\Theta(n)$ |
| (b) | $n \cdot n = n^2$ | $\Theta(n^2)$ |
| (c) | $0 + 1 + \cdots + (n-1) = n(n-1)/2$ | $\Theta(n^2)$ |
| (d) | $\lfloor \log_2 (n-1) \rfloor + 1$ | $\Theta(\log n)$ |

At $n = 1000$: (a) 1,000, (b) 1,000,000, (c) **499,500**, (d) **10**. Note (b) and (c) differ by almost exactly 2× and share a class, while (d) is five orders of magnitude below either. *(All machine-verified.)*

(c) is worth one more look: it counts each *unordered pair* once, whereas (b) counts each ordered pair — including $i = j$. If the task is "how many pairs of equal elements", (b) overcounts by exactly a factor of 2 plus the $n$ self-matches, so it is not merely slower but **answering a different question**. Cost analysis and correctness are not independent.

**Example 2 (why you'd care): the class is not always the decision.** Two sorts on $n$ items:

| | class | exact comparisons at $n = 20$ | at $n = 10^6$ |
|---|---|---|---|
| insertion sort | $\Theta(n^2)$ | $\approx 100$ (average) | $2.5\times10^{11}$ |
| merge sort | $\Theta(n\log n)$ | $\approx 86$, plus allocation | $2\times10^7$ |

At $n = 10^6$ the asymptotics decide it and nothing else is close — a factor of **12,500**. At $n = 20$ they are within a hair of each other on comparison count, and insertion sort wins decisively in practice because it does no allocation, touches memory sequentially, and has a much smaller per-operation constant. This is why real library sorts (Timsort, introsort) are hybrids that switch to insertion sort below a threshold of about 16–32 elements.

The rule that falls out: **Big-O decides the algorithm; constants decide the implementation.** Reaching for asymptotics on a 20-element list is as much a mistake as ignoring them on a million-element one.

## Watch out

- **You might think** $O$ and $\Theta$ are interchangeable — **but actually** $O$ is an upper bound only. "Binary search is $O(n^2)$" is true and useless. Say $\Theta$ when you mean the exact rate.
- **You might think** dropping constants means they do not matter — **but actually** it means they do not matter *asymptotically*. A 10× constant is a 10× bill, and it is the whole reason `std::sort` is not a textbook merge sort.
- **You might think** "one loop, therefore linear" — **but actually** that holds only if every operation in the body is $\Theta(1)$. `for x in list: if x in other_list` is a loop containing a linear search, so it is $\Theta(n^2)$. **The cost hides in the library call**, and Module 2 is largely about knowing which calls are cheap.
- **You might think** a running time is a function of $n$ alone — **but actually** it is a function of the input; $n$ only bounds it. Always say which case. "Quicksort is $\Theta(n\log n)$" is false as a worst-case claim.
- **You might think** a faster machine can rescue a bad class — **but actually** a $10^9\times$ speedup moves a solvable $2^n$ from $n = 30$ to about $n = 60$. Growth beats hardware, always and by a lot.
- **You might think** counting operations means counting lines of code — **but actually** it means counting *executions* of the innermost repeated step. A three-line function inside a triple loop is $\Theta(n^3)$, and its line count is irrelevant.

## One-liner

> Count how many times the inner line runs, keep the term that wins, drop the constants — then remember that what you dropped is exactly what decides the small cases.

## Problems

**P1 (🟢)** Give the exact operation count and the $\Theta$ class for each, in terms of $n$.

(a) `for i in 0..n-1: for j in 0..n-1: s <- s + 1`
(b) `for i in 0..n-1: for j in i+1..n-1: s <- s + 1`
(c) `for i in 0..n-1: s <- s + 1` followed by `for j in 0..n-1: for k in 0..n-1: s <- s + 1`
(d) `i <- n; while i > 1: i <- i / 3`

**P2 (🟡)** A routine checks whether a list of $n$ names contains any duplicates:

```
for i in 0 .. n-1:
    for j in 0 .. n-1:
        if i != j and name[i] = name[j]:  return true
return false
```

(a) Give its worst-case and best-case counts, and name an input achieving each. (b) A colleague halves the work with `for j in i+1 .. n-1`. Give the new worst-case count and say whether the class changes. (c) A second colleague replaces the whole thing with "insert each name into a hash set; if it is already there, return true." Give the class and state the assumption it rests on. (d) At $n = 50{,}000$ names, give approximate operation counts for all three versions and say which of the three differences would be visible to a user.

**P3 (🔴)** A dashboard renders a table of $n$ orders. For each order it looks up the customer by scanning a list of $m$ customers. Profiling shows it is slow; $n = 20{,}000$ and $m = 5{,}000$.

(a) Give the current cost in terms of $n$ and $m$, and the operation count. (b) An engineer proposes caching the customer list in memory instead of re-fetching it, arguing "the fetch is the slow part." Assume they are right that the fetch dominated and that the change removes it entirely. Does the dashboard now scale? Justify in terms of growth, not measurement. (c) Give the change that fixes the class, its cost, and its extra memory. (d) Six months later $n = 2\times10^6$ and $m = 400{,}000$. Give the operation counts of the original and the fixed version, and state what the original's runtime becomes if it was 4 seconds at the original sizes.

<details>
<summary>Solutions</summary>

**P1** (a) The inner line runs $n$ times for each of $n$ values of `i`:

$$n \cdot n = n^2 \quad \Rightarrow \quad \Theta(n^2).$$

(b) For each `i`, the inner loop runs from $i+1$ to $n-1$, i.e. $n - 1 - i$ times. Summing over $i = 0, \dots, n-1$:

$$\sum_{i=0}^{n-1}(n-1-i) = (n-1) + (n-2) + \cdots + 1 + 0 = \frac{n(n-1)}{2} \quad \Rightarrow \quad \Theta(n^2).$$

Half the work of (a), and the same class.

(c) Sequences **add**:

$$n + n^2 \quad \Rightarrow \quad \Theta(n^2),$$

since the linear term is dominated. (Worth noticing: an entire linear pass is free, asymptotically, next to a quadratic one — which is why "we can afford one more scan" is usually true.)

(d) `i` starts at $n$ and is divided by 3 until it drops to 1, so the loop runs about $\log_3 n$ times — exactly $\lceil \log_3 n \rceil$:

$$\Theta(\log_3 n) = \Theta(\log n),$$

because $\log_3 n = \log_2 n / \log_2 3$ and the divisor is a constant. **The base of a logarithm is a constant factor, so it vanishes in $\Theta$** — which is why nobody writes the base in a complexity class.

**P2** (a) **Worst case** $n(n-1)$ comparisons — the two loops run fully, $n \cdot n$ iterations minus the $n$ where $i = j$. It is achieved by any input with **no duplicates**, e.g. $n$ distinct names, since the routine only returns early on a hit.

**Best case** is $\Theta(1)$: a constant number of comparisons, achieved when `name[0] = name[1]`, which is caught at $i = 0$, $j = 1$.

The gap between them is the whole reason to say which case you mean.

(b) With `j` from `i+1`, the count is $\sum_{i=0}^{n-1}(n-1-i) = n(n-1)/2$ — **half**. The class is **unchanged** at $\Theta(n^2)$.

It is also a genuine correctness improvement, not just speed: the original's `i != j` guard existed only to stop each name matching itself, and starting `j` above `i` removes the need for it while also never comparing the same *pair* twice.

(c) **$\Theta(n)$ expected.** Each of the $n$ names does one hash-set insert-and-check, and a hash set does that in $O(1)$ **expected** time.

The assumption: that the hash function distributes these particular names evenly over the buckets. It is an *expected* bound, not a worst-case one — with adversarial keys, or a bad hash function on structured data, every name lands in one bucket, each check scans a chain of length up to $n$, and the routine degrades to $\Theta(n^2)$ — exactly the thing it was supposed to fix. [Lesson 2.5](02-05-hash-tables.md) is about when that happens and what to do.

(d) At $n = 50{,}000$:

| version | count | at $10^9$ ops/sec |
|---|---|---|
| double loop | $n(n-1) \approx 2.5\times10^9$ | $\approx 2.5$ s |
| triangular loop | $n(n-1)/2 \approx 1.25\times10^9$ | $\approx 1.25$ s |
| hash set | $5\times10^4$ | $\approx 0.05$ ms |

**Which differences a user sees:** the 2.5 s → 1.25 s change is visible and unsatisfying — the page is still obviously slow, and the engineer who made it has spent effort to move from "broken" to "broken." The 1.25 s → 0.05 ms change is the one that removes the problem, and it is a change of *class*.

That contrast is the practical content of this lesson: **halving a quadratic is a constant-factor win that looks like progress and is not.** Reach for the change that moves you down a row of the growth table.

**P3** (a) For each of the $n$ orders it scans up to $m$ customers, so the cost is

$$\Theta(nm) = 20{,}000 \times 5{,}000 = 10^8 \text{ comparisons.}$$

(b) **No, it does not scale, and the reasoning is a class error dressed as a measurement.**

They are probably right about the measurement — a network fetch inside a loop is often the dominant constant — and removing it may well make the dashboard fast *today*. But the cost is still $\Theta(nm)$: caching changes the constant in front, not the growth. The comparison count is unchanged at $10^8$; only the price per comparison fell.

The test that exposes this without measuring anything: **double both $n$ and $m$ and ask what happens.** Under $\Theta(nm)$ the work goes up 4×, cache or no cache. A fix that survives doubling has to change the exponent, and this one does not.

(c) **Build a hash map from customer id to customer once, then look each order's customer up in $O(1)$ expected time.**

$$\Theta(m) \text{ to build} \;+\; \Theta(n) \text{ to look up} \;=\; \Theta(n + m).$$

At the current sizes that is $25{,}000$ operations instead of $10^8$ — **4,000× fewer**.

Extra memory: $\Theta(m)$ for the map, roughly one entry per customer. At $m = 5{,}000$ that is nothing; even at $m = 4\times10^5$ it is a few tens of megabytes. **Trading $\Theta(m)$ memory for a factor of $m$ in time is the single most common good trade in this course**, and it recurs as memoization ([1.3](01-03-recursion-and-the-call-stack.md)), indexing, and every use of a hash table.

(d) At $n = 2\times10^6$, $m = 4\times10^5$:

| version | count | ratio to before |
|---|---|---|
| original, $\Theta(nm)$ | $8\times10^{11}$ | $8000\times$ |
| fixed, $\Theta(n+m)$ | $2.4\times10^6$ | $96\times$ |

If the original took 4 seconds at $10^8$ comparisons, then at $8\times10^{11}$ it takes

$$4 \text{ s} \times 8000 = 32{,}000 \text{ s} \approx \mathbf{8.9 \text{ hours}}.$$

The fixed version, scaling linearly, goes from about 1 millisecond to about 96 milliseconds — still interactive.

The shape to remember: the inputs grew by 100× and 80×, and the quadratic-ish version's runtime grew by **8,000×**, because $\Theta(nm)$ multiplies the two growths together. This is why the six-months-later conversation happens so reliably, and why the right time to notice a $\Theta(nm)$ loop is while the data is still small enough that nobody has complained.

</details>

## Flashback

**From Lesson 1.2 (Functions, contracts, and invariants):** This routine claims to return the largest element of `a[0..n−1]`.

```
m <- 0
for i in 0 .. n-1:
    if a[i] > m:  m <- a[i]
return m
```

(a) State the loop invariant the author presumably intended. (b) Show that initialization fails, and give the smallest input on which the routine returns a wrong answer. (c) Give the fix, and state the precondition it needs. (d) Why is initialization the step that fails here rather than maintenance?

<details>
<summary>Solution</summary>

(a) The intended invariant is: **`m` is the maximum of `a[0..i−1]`**, with $0 \le i \le n$.

(b) **Initialization fails.** Before the first iteration $i = 0$, so the invariant claims `m` is the maximum of the *empty* prefix. There is no such thing, and the code has substituted `0` for it. That is only correct if the array is guaranteed to contain a non-negative value.

The smallest input exposing it is a **single negative element**: `a = [-3]`. The loop runs once, $-3 > 0$ is false, `m` stays 0, and the routine returns **0** — a value not in the array at all. (Note this also violates the second clause of a proper max postcondition, "the answer is an element of the array", from [Lesson 1.2](01-02-functions-contracts-and-invariants.md)'s `MAX` contract.)

(c) **Fix:** initialize from the data rather than from a guessed constant —

```
m <- a[0]
for i in 1 .. n-1:
    if a[i] > m:  m <- a[i]
```

with the invariant now established honestly at $i = 1$: `m` is the maximum of `a[0..0]`. (Initializing to $-\infty$ and looping from 0 also works where the language has one.)

**Precondition:** $n \ge 1$. The routine cannot return an element of an empty array, so the caller must guarantee non-emptiness — and that obligation now has to be written down rather than papered over with a sentinel.

(d) Because **maintenance never inspects where `m` came from.** The step "assume `m` is the max of `a[0..i−1]`; show it is the max of `a[0..i]`" is perfectly valid here — the body does exactly the right thing. The proof only breaks at the moment the invariant is first asserted, when there is no data to justify it.

That is the general pattern this lesson's flashback is for: **maintenance is about the body, initialization is about the setup, and a wrong initial value produces code whose loop is flawless and whose answer is wrong.** It is also why the failing input is always a degenerate or extreme one — an empty array, an all-negative array — rather than anything a casual test would contain.

</details>

## Connections

- **Backward:** the counts here are the trace tables of [Lesson 1.1](01-01-values-variables-and-control-flow.md) with the rows counted instead of filled in, and the recursion counts of [Lesson 1.3](01-03-recursion-and-the-call-stack.md) — nodes of a call tree for time, depth for space — are the same exercise on a branching shape.
- **Forward:** every remaining lesson ends in a cost table built this way. [2.1](02-01-abstract-data-types-and-interfaces.md) makes the cost *vector* the basis for choosing a data structure; [2.2](02-02-arrays-and-dynamic-arrays.md) needs the $\sum i$ sum for the doubling argument; [4.1](04-01-searching-and-elementary-sorting.md) puts the exact comparison counts of two quadratic sorts side by side and shows the class is not the whole answer.
- **Sideways:** the formal $O/\Omega/\Theta$ definitions, little-$o$, and proofs that one function is $o$ of another are [`algorithms` 1.1](../../algorithms/lessons/01-01-asymptotic-notation.md)'s; solving a recurrence for a closed-form running time is [`algorithms` 1.2](../../algorithms/lessons/01-02-recurrences-recursion-trees-substitution.md)'s. The summation identities come from [discrete-mathematics 3.1](../../discrete-mathematics/lessons/03-01-counting-rules-permutations-combinations.md), and the reason constants stop mattering — but only eventually — is the same limit reasoning as in [calc-refresher](../../calc-refresher/syllabus.md).
