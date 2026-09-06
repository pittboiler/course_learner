# Algorithms · Lesson 1.1: Asymptotic notation

> ⏱ ~15 min · Module 1: Analysis & divide-and-conquer · Builds on: [discrete-mathematics 1.4 (induction)](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md), [3.1 (counting)](../../discrete-mathematics/lessons/03-01-counting-rules-permutations-combinations.md) · Unlocks: 1.2 (recurrences)

## Why this matters

This course is about three moves: design an algorithm, prove it correct, prove how fast it runs. This lesson builds the instrument for the third one, and it is the one you will use every day even if you never design an algorithm again.

Here is why. You read far more code than you write, and most of it is someone else's — or a model's. The question that matters when you read it is not "does this work on the test case" but **"what does this cost when the input gets big?"** That question has an exact answer you can derive on paper in thirty seconds, and the answer is almost never in the code's appearance. A loop that looks linear is quadratic if the thing inside it scans. A "small optimization" that halves a constant is worthless next to one that changes the exponent.

The classic failure has a name — the **[accidental quadratic](../reference.md#the-accidental-quadratic)** — and it is the single most common performance bug in production software. It survives code review because it looks fine, it survives testing because test inputs are small, and it surfaces when a customer's data grows. Example 2 is one, drawn from real code shapes. By the end of this lesson you should be able to spot it by reading.

## The idea

Two ideas, and the second is the one people skip.

**First: only growth matters.** An algorithm taking $100n$ steps beats one taking $n^2$ steps for every $n > 100$, and the input eventually gets bigger than 100. So we throw away constant factors and low-order terms and keep the shape: $3n^2 + 10n + 7$ becomes "$n^2$". This feels lossy and is, but it is the only comparison that survives a change of language, machine, or decade.

**Second: the classification is coarse on purpose, and the coarseness is where the information is.** The useful reading of the growth table is not five columns but **three thresholds**:

- $n$ and $n\log n$ — the input size is essentially not the limit. You can process a billion records.
- $n^2$ — fine at a thousand, painful at a million. This is where things go wrong quietly, because a thousand is what your tests use.
- $n^3$ and $2^n$ — the input size *is* the limit, and no amount of optimization moves it. At $n = 60$, a $2^n$ algorithm takes longer than the age of civilization; making it a hundred times faster buys you $n = 66$.

That last point is worth sitting with. Constant-factor work moves you *along* a column; algorithmic work moves you *between* columns. Almost all the leverage is in the second kind, and knowing which kind you are doing is the judgement this notation exists to support.

The formalism below is just a careful way of saying "eventually, up to a constant." Every definition has the same shape: **beyond some point $n_0$, within some factor $c$.**

## The formal version

Let $f, g : \mathbb{N} \to \mathbb{R}^{\ge 0}$.

**Big-O — an upper bound.**
$$f(n) = O(g(n)) \iff \exists\, c > 0,\ n_0 > 0 \ \text{ such that } \ f(n) \le c\,g(n) \ \text{ for all } n \ge n_0.$$
In words: past some point, $f$ is at most a constant multiple of $g$. "$f$ grows no faster than $g$."

**Big-Omega — a lower bound.**
$$f(n) = \Omega(g(n)) \iff \exists\, c > 0,\ n_0 > 0 \ \text{ such that } \ f(n) \ge c\,g(n) \ \text{ for all } n \ge n_0.$$

**Big-Theta — a tight bound.**
$$f(n) = \Theta(g(n)) \iff f(n) = O(g(n)) \ \text{ and } \ f(n) = \Omega(g(n)),$$
equivalently $\exists\, c_1, c_2 > 0, n_0$ with $c_1 g(n) \le f(n) \le c_2 g(n)$ for all $n \ge n_0$. "$f$ grows at the same rate as $g$."

**Little-o and little-omega — strict.** These swap "for some $c$" for "for every $c$", which is much stronger:
$$f(n) = o(g(n)) \iff \forall\, c > 0\ \exists\, n_0 \ \text{ such that } \ f(n) < c\,g(n) \ \text{ for all } n \ge n_0 \iff \lim_{n\to\infty} \frac{f(n)}{g(n)} = 0,$$
and $f(n) = \omega(g(n))$ is the mirror image, $\lim f/g = \infty$. So $2n^2 = O(n^2)$ but **not** $o(n^2)$; $n^{1.99} = o(n^2)$.

The analogy that makes the five stick: $O, \Omega, \Theta, o, \omega$ are to growth rates roughly what $\le, \ge, =, <, >$ are to numbers.

**Facts worth having (all provable straight from the definitions):**

| fact | why it matters |
|---|---|
| $\log_a n = \Theta(\log_b n)$ for any $a,b>1$ | the base of a log never matters — it is a constant factor |
| $n^a = o(n^b)$ whenever $a < b$ | polynomials are ordered by exponent |
| $\log^k n = o(n^\epsilon)$ for every $k$ and every $\epsilon > 0$ | any log beats any polynomial, however small the exponent |
| $n^k = o(c^n)$ for $c > 1$ | any exponential beats any polynomial |
| $f_1 = O(g_1), f_2 = O(g_2) \Rightarrow f_1 + f_2 = O(\max(g_1,g_2))$ | in a sequence of phases, only the slowest phase counts |

**[Which input?](../reference.md#worst-average-and-best-case)** A running time depends on *which* input of size $n$, so quoting a single function needs a convention:

- **worst case** $T(n) = \max_{|x| = n} (\text{steps on } x)$ — the default in this course, and the only one that gives a guarantee;
- **average case** — expectation over an assumed input distribution, which you must state (Lesson 4.4);
- **best case** — almost always useless.

Sloppy usage to avoid: people write "quicksort is $O(n\log n)$" meaning the average case. Its worst case is $\Theta(n^2)$ (Lesson 1.4). Say which you mean.

## Picture

![A table of running times for input sizes 10 to a million against the growth functions n, n log n, n squared, n cubed and 2 to the n, assuming one operation per nanosecond. Cells above about fifteen minutes are outlined in red. Below, the three thresholds are named: n and n log n are unconstrained, n squared is the danger zone, and n cubed and exponential are limits no constant factor can move.](assets/01-01-fig1.svg)

Every number is one operation per nanosecond, which is roughly a modern core. Read down the $n^2$ column and you can see the whole problem with the accidental quadratic: at $n = 1000$ it is a millisecond and you will never notice, and at $n = 10^6$ it is a quarter of an hour. **Your tests live in row three and your customers live in row five.**

The $2^n$ column is the one that changes how you think about problem selection rather than implementation. Nothing you do to the constant matters there — which is exactly why Module 4 spends its time on reductions and approximations instead.

## Worked examples

**Example 1 (mechanical): $3n^2 + 10n + 7 = \Theta(n^2)$, with the constants.**

A $\Theta$ claim is an existence claim, so the proof is: exhibit $c_1$, $c_2$, $n_0$ and verify.

*Lower bound.* For every $n \ge 1$, the terms $10n$ and $7$ are non-negative, so
$$3n^2 + 10n + 7 \ \ge\ 3n^2.$$
Take $c_1 = 3$, valid from $n_0 = 1$.

*Upper bound.* For $n \ge 1$ we have $n \le n^2$ and $1 \le n^2$, so
$$3n^2 + 10n + 7 \ \le\ 3n^2 + 10n^2 + 7n^2 \ =\ 20n^2.$$
Take $c_2 = 20$, also valid from $n_0 = 1$.

So with $c_1 = 3$, $c_2 = 20$, $n_0 = 1$ the definition is satisfied and $3n^2 + 10n + 7 = \Theta(n^2)$. $\blacksquare$

(Checked at the boundary: at $n = 1$ the three quantities are $3$, $20$, $20$ — the upper bound is tight there and comfortable after. Verified against every $n \le 200$.)

Two habits from this. First, **the "replace every term by the biggest one" trick gives the upper bound almost every time**: bound each lower-order term by the leading term's shape. Second, the constants are not unique and nobody cares what they are — $c_2 = 1000$ would do. The content is that *some* constants exist.

**Example 2 (why you'd care): finding the accidental quadratic.** Here is a routine that removes duplicates from a list, in the shape it usually appears:

```
DEDUPE(A[1..n]):
    out <- empty list
    for i <- 1 to n:
        if A[i] is not in out:        <-- this is a scan
            append A[i] to out
    return out
```

It reads as one loop over $n$ items, so it looks linear. It is not.

The line `A[i] is not in out` searches an unsorted list, costing time proportional to `out`'s current length. When the input has no duplicates, `out` has length $i-1$ on iteration $i$, so the total is

$$\sum_{i=1}^{n} (i-1) \;=\; \frac{n(n-1)}{2} \;=\; \Theta(n^2).$$

Measured, with each membership test counted as one operation per element scanned: $n = 100$ gives $4{,}950$ operations, $n = 200$ gives $19{,}900$, $n = 400$ gives $79{,}800$. **Doubling $n$ multiplies the work by almost exactly 4** — the doubling signature of a quadratic, and the cheapest empirical test there is.

The repair is to change what the membership test costs, not to optimize the loop:

```
DEDUPE-FAST(A[1..n]):
    seen <- empty hash set
    out  <- empty list
    for i <- 1 to n:
        if A[i] not in seen:          <-- O(1) expected
            insert A[i] into seen
            append A[i] to out
    return out
```

Now each iteration is $O(1)$ expected and the whole routine is $\Theta(n)$ expected. Same $n = 400$ input: $400$ operations instead of $79{,}800$, a factor of $200$ — and the factor *grows with $n$*, which is the thing a constant-factor optimization can never do.

**The diagnostic to internalize.** Whenever you read a loop, ask what the operations *inside* it cost, and be suspicious of anything phrased as "is it in", "find it in", "remove it from", or string concatenation — each is $O(1)$ for some data structures and $O(n)$ for others, and the code looks identical either way. The nesting is hidden in the library call, and that is exactly why this bug survives review.

## Watch out

- **You might think** $O$ means "grows exactly like" — **but actually** it is only an *upper* bound, so $n = O(n^2)$ is a true and useless statement, and so is $n = O(2^n)$. When you mean "exactly this rate", say $\Theta$. Most published "the algorithm is $O(\cdot)$" claims mean $\Theta$, but the two are not the same and the difference matters when you are comparing two bounds rather than quoting one.
- **You might think** an asymptotically better algorithm is the faster one — **but actually** it is faster *eventually*, and "eventually" can be past any $n$ you will ever see. Strassen's matrix multiply (Lesson 1.5) beats the cubic method only above a crossover of a few hundred; insertion sort beats merge sort below about a dozen, which is why real sort implementations switch to it for small blocks. Asymptotics tell you which algorithm wins as $n \to \infty$ and say **nothing** about your $n$ — that needs the constants back, and a measurement.
- **You might think** the base of a logarithm needs stating — **but actually** $\log_a n$ and $\log_b n$ differ by the constant $\log_b a$, so inside $O$, $\Omega$ or $\Theta$ the base is invisible and $\Theta(\log n)$ is unambiguous. (The base *does* matter inside an exponent: $2^n$ and $3^n$ are genuinely different, since $3^n / 2^n = 1.5^n \to \infty$.)

## One-liner

> Throw away the constants and keep the shape, because constant-factor work moves you along a column and algorithmic work moves you between columns — and almost all the leverage is in the second kind.

## Problems

**P1 (🟢)** Rank these seven functions in non-decreasing order of growth, and say which pairs are $\Theta$ of each other:

$$n^2, \quad n\log_2 n, \quad 2^{\log_2 n}, \quad \sqrt{n}, \quad n^{1.585}, \quad \log_2 n, \quad 3n + 100.$$

Then give the value of each at $n = 2^{20}$ (to two significant figures) and say which of them are still feasible at that size on a machine doing $10^9$ operations per second.

**P2 (🟡)** Prove or disprove each, from the definitions — exhibiting $c$ and $n_0$ for a proof, and a contradiction for a disproof.

(a) $2^{n+1} = O(2^n)$.  (b) $2^{2n} = O(2^n)$.  (c) $n! = O(n^n)$.  (d) $\log_2(n!) = \Theta(n \log n)$.

**P3 (🔴)** A colleague submits this routine, which builds a report line for every record and joins them. `concat` returns a new string containing both arguments, and copying a string of length $L$ costs $\Theta(L)$.

```
BUILD-REPORT(R[1..n]):
    s <- ""
    for i <- 1 to n:
        line <- FORMAT(R[i])          -- costs Theta(1); result has length <= 80
        s <- concat(s, line)
    return s
```

(a) Derive the worst-case running time as a function of $n$, showing the sum. (b) The colleague argues it must be linear "because there is one loop and `FORMAT` is constant time." Say precisely what is wrong with that reasoning. (c) Give a repair with a better asymptotic cost, state that cost, and say what measurement would distinguish the two implementations *without* reading either one.

<details>
<summary>Solutions</summary>

**P1** First simplify: $2^{\log_2 n} = n$, and $3n + 100 = \Theta(n)$. So the order is

$$\log_2 n \ \prec\ \sqrt n \ \prec\ \underbrace{2^{\log_2 n} \ \equiv\ 3n+100}_{\text{both } \Theta(n)} \ \prec\ n\log_2 n \ \prec\ n^{1.585} \ \prec\ n^2,$$

where $\prec$ means "is $o$ of". The only $\Theta$-equivalent pair is $\{2^{\log_2 n},\ 3n+100\}$, both $\Theta(n)$.

At $n = 2^{20} = 1{,}048{,}576$:

| function | value | feasible at $10^9$ ops/s? |
|---|---|---|
| $\log_2 n$ | $20$ | instantly |
| $\sqrt n$ | $1.0 \times 10^3$ | instantly |
| $2^{\log_2 n} = n$ | $1.0 \times 10^6$ | ~1 ms |
| $3n + 100$ | $3.1 \times 10^6$ | ~3 ms |
| $n\log_2 n$ | $2.1 \times 10^7$ | ~21 ms |
| $n^{1.585}$ | $3.5 \times 10^9$ | ~3.5 s — borderline |
| $n^2$ | $1.1 \times 10^{12}$ | ~18 min — no |

Note $n$ and $3n+100$ sit in the same $\Theta$ class yet differ by a factor of three in wall-clock; that is exactly the information $\Theta$ discards, and exactly why you measure after you have chosen the right class.

**P2** (a) **True.** $2^{n+1} = 2\cdot 2^n$, so take $c = 2$ and $n_0 = 1$: $2^{n+1} \le 2\cdot 2^n$ for all $n \ge 1$. (Constant factors are free, and multiplying an exponential by a constant is a constant factor.)

(b) **False.** $2^{2n} = (2^n)^2 = 4^n$. Suppose $4^n \le c\,2^n$ for all $n \ge n_0$. Then $2^n \le c$ for all $n \ge n_0$, which fails as soon as $n > \log_2 c$ — and such an $n$ exists for every $c$. Contradiction. (Indeed $4^n = \omega(2^n)$.) **The moral: a constant *multiplier* on an exponential is free; a constant *in the exponent* is not.**

(c) **True.** $n! = 1 \cdot 2 \cdots n$ is a product of $n$ factors each at most $n$, so $n! \le n^n$ for all $n \ge 1$. Take $c = 1$, $n_0 = 1$. (It is a very loose bound — Stirling gives $n! = \Theta(\sqrt n\,(n/e)^n)$ — but $O$ only asks for an upper bound.)

(d) **True**, and this one is the workhorse behind the sorting lower bound in Lesson 1.4.

*Upper:* $n! \le n^n$ from (c), so $\log_2(n!) \le n\log_2 n$. Hence $\log_2(n!) = O(n\log n)$.

*Lower:* keep only the top half of the factors. For $n \ge 2$,
$$n! \;\ge\; \underbrace{\left(\tfrac n2\right)\left(\tfrac n2 + 1\right)\cdots n}_{\text{about } n/2 \text{ factors, each} \ \ge\ n/2} \;\ge\; \left(\frac n2\right)^{n/2},$$
so
$$\log_2(n!) \;\ge\; \frac n2 \log_2 \frac n2 \;=\; \frac n2 \log_2 n - \frac n2.$$
Now $\frac{n}{2}\log_2 n - \frac n2 \ge \frac14 n\log_2 n$ exactly when $\frac14 n\log_2 n \ge \frac n2$, i.e. when $\log_2 n \ge 2$, i.e. for all $n \ge 4$. So $\log_2(n!) = \Omega(n\log n)$ with $c = \frac14$ and $n_0 = 4$.

Both bounds give $\log_2(n!) = \Theta(n\log n)$. $\blacksquare$

**P3** (a) On iteration $i$, the string `s` already holds $i-1$ lines. Let $L$ be the maximum line length (here $L \le 80$, a constant). `concat` copies both arguments into a fresh string, so iteration $i$ costs $\Theta\big((i-1)L + L\big) = \Theta(iL)$. Summing:

$$T(n) \;=\; \sum_{i=1}^{n} \Theta(iL) \;=\; \Theta\!\left(L \sum_{i=1}^n i\right) \;=\; \Theta\!\left(L\cdot\frac{n(n+1)}{2}\right) \;=\; \Theta(n^2),$$

since $L$ is a constant. **Quadratic**, in a routine with one loop.

(b) Two things are wrong, and the second is the important one.

*The stated premise is false:* the loop body is **not** constant time. `FORMAT` is, but `concat` is not — its cost is proportional to the length of its first argument, which grows with $i$.

*The reasoning pattern is wrong:* "one loop, therefore linear" is only valid when every operation in the body is $O(1)$, and that is a fact about the **data structures**, not about the number of loops you can see. Nesting hides inside library calls. The correct rule is $T(n) = \sum_{\text{iterations}} (\text{cost of body})$, and the body's cost may itself depend on $i$. (The same error, in a different disguise, would call the routine linear because "there is no inner `for`".)

(c) **Repair:** collect the lines and join once at the end.

```
BUILD-REPORT-FAST(R[1..n]):
    parts <- empty list
    for i <- 1 to n:
        append FORMAT(R[i]) to parts   -- O(1) amortised (Lesson 2.4)
    return JOIN(parts)                 -- one pass, Theta(total length)
```

Appending to a dynamic array is $O(1)$ amortised (proved in Lesson 2.4), and `JOIN` walks the parts once and copies each character exactly once, for $\Theta(nL) = \Theta(n)$ total. So the repair is **$\Theta(n)$**, down from $\Theta(n^2)$.

**The black-box measurement:** run each implementation at $n$ and at $2n$ and take the ratio of times. The quadratic version's ratio tends to $4$; the linear version's tends to $2$. That distinguishes them without reading a line of either — and it is the standard way to catch an accidental quadratic in a dependency you do not control. (Measure at three sizes, not two: a single ratio can be corrupted by warm-up or cache effects, and a consistent $\approx 4, 4, 4$ is much harder to fake than one $4$.)

</details>

## Connections

- **Backward:** the sum $\sum_{i=1}^n i = n(n+1)/2$ in Example 2 and P3 is the closed form from [discrete-mathematics 3.1](../../discrete-mathematics/lessons/03-01-counting-rules-permutations-combinations.md), and every bound here is ultimately verified by [induction](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md).
- **Forward:** Lesson 1.2 turns a recursive algorithm into a recurrence and solves it into one of these classes; Lesson 1.4 proves a $\Omega(n\log n)$ *lower* bound using P2(d); Lesson 2.4 justifies the "$O(1)$ amortised" claim that P3's repair leans on. Every subsequent lesson quotes a bound in this notation.
- **Sideways:** the same asymptotic vocabulary measures error rather than time in [numerical-analysis](../../numerical-analysis/syllabus.md) (where $O(h^p)$ describes a step size going to zero, not an input going to infinity — the limit is at $0$, not $\infty$, which flips which term dominates). In [theory-of-computation 4.4](../../theory-of-computation/lessons/04-04-a-first-look-at-p-vs-np.md), "polynomial time" is defined precisely so that the class survives the change-of-model slowdowns — the reason $\mathrm{P}$ is closed under composition of polynomials rather than pinned to one exponent.
