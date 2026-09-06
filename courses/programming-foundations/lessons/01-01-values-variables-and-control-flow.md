# Programming & Data Structures · Lesson 1.1: Values, variables, and control flow

> ⏱ ~15 min · Module 1: Programming & recursion · Builds on: — · Unlocks: 1.2 (functions, contracts & invariants)

## Why this matters

Everything in this course is a claim about what some code *does* and what it *costs*. Both claims are worthless if you can't reliably say what a piece of code does in the first place — and "I'll just run it" is not available here, nor in a code review, nor at three in the morning when the thing has already run and produced the wrong number.

So the skill this lesson builds is **hand-tracing**: reading a fragment, maintaining the machine's state on paper, and predicting the output before anyone executes it. It is the single most useful thing a programmer can do without a computer, and it is the foundation of everything later: unwinding a call stack (1.3), counting operations (1.4), following a pointer through a linked list (2.3), walking a search tree (4.3).

The judgement content is that **most bugs live at boundaries**. A loop that is right for a hundred inputs and wrong for the empty one, or for a tie, or for the last element, is the normal case rather than the exception — and hand-tracing the boundary is how you find it. You will spend more of this lesson deliberately breaking correct-looking code than reading correct code.

## The idea

A running program is three things: a **store** mapping names to values, a **program counter** saying which instruction is next, and a rule for updating both. That is the whole model, and it is enough to trace anything in this course.

**Values and types.** A value is a piece of data — `7`, `3.5`, `"cat"`, `true`. Its **type** is the set it belongs to plus the operations that make sense on it. Types matter here for one reason: they tell you what a machine will do at the edges. A 32-bit integer wraps around past $2^{31}-1$; a floating-point number cannot represent $0.1$ exactly, so `0.1 + 0.2 = 0.30000000000000004`. Those are not language quirks, they are consequences of finite representation, and they are where "obviously correct" code stops being correct.

**Assignment is not equality.** `x ← x + 1` is nonsense as an equation and perfectly sensible as an instruction: *evaluate the right-hand side in the current store, then overwrite the name on the left*. The arrow is doing real work; conflating it with `=` is the first misconception to shed.

**Branching** picks one path. **Boolean operators** are usually *short-circuiting*: `A and B` never evaluates `B` when `A` is false. That is not an optimization detail — it is what makes `i < n and a[i] > 0` safe, and swapping the order of those two tests turns a working line into an out-of-bounds crash.

**Loops** are the only construct that makes a short program take a long time, which is why the rest of the course is largely about them. A loop is a small state machine: some variables, a condition, and a body that changes them. To understand it, write down the state.

That is a **[trace table](../reference.md#trace-table)**: one row per iteration, one column per variable. It is not a beginner's crutch — it is the technique, and it is what the "hand-trace" problems in every later lesson are asking for.

## The formal version

**The store and the trace.** Fix the variables a fragment touches. A **state** is one assignment of values to them. Executing one iteration is a function from states to states, and a trace table is the orbit of the initial state under that function. Tracing is applying it by hand.

**A [loop's anatomy](../reference.md#loop-anatomy).** Every loop has four parts, and naming them is how you find the bug:

| part | question it answers |
|---|---|
| **initialization** | what is true before the first iteration? |
| **condition** | when do we keep going? |
| **body** | how does the state change? |
| **update** | what moves us toward the condition failing? |

Miss the update and the loop never ends. Get the condition's boundary wrong by one and you read past the end of an array or skip the last element. Both are found by tracing the *first* and *last* iterations, never the middle ones.

**The half-open convention.** Ranges in this course are written $[a, b)$ — includes $a$, excludes $b$. So `for i in 0..n−1` visits exactly $n$ values, `a[0]` through `a[n−1]`, and the length is $b - a$ with no $\pm 1$ anywhere. This convention exists precisely because it makes off-by-one errors rarer, and it is worth adopting deliberately.

**The fencepost.** A fence of $n$ panels needs $n+1$ posts. The same arithmetic decides whether a loop over pairs of adjacent elements runs $n$ or $n-1$ times — and it is $n-1$, because `a[i]` and `a[i−1]` needs $i$ to start at 1.

**Where to look for boundary bugs.** In order of how often they bite:

1. the **empty** input ($n = 0$) — does the loop body run at all, and is the answer initialized to something sensible?
2. a **single** element ($n = 1$) — does a loop comparing neighbours run zero times, and is that handled?
3. **ties** — is the comparison `<` or `≤`, and does the difference show?
4. the **last** iteration — does the index reach $n-1$, or $n$?

## Picture

![An array of nine values labelled with their indices, above a trace table with eight rows. The columns are i, a[i], the test a[i] is greater than or equal to a[i minus 1], run, and best. Each row shows the state after one iteration; the row where run reaches 4 and best updates to 4 is outlined in blue. A caption notes that changing the greater-or-equal test to a strict greater-than makes the tie rows fail and drops the answer from 4 to 2.](assets/01-01-fig1.svg)

The code being traced finds the longest **non-decreasing run** in an array:

```
run  <- 1
best <- 1
for i in 1 .. n-1:
    if a[i] >= a[i-1]:  run <- run + 1
    else:               run <- 1
    if run > best:      best <- run
return best
```

Three things to read off the table.

**The loop starts at 1, not 0.** It compares `a[i]` with `a[i−1]`, so there is no iteration for `i = 0` — there is nothing to its left. That is the fencepost: nine elements, eight comparisons, eight rows.

**`run` resets, `best` never does.** Two variables with different jobs: one tracks the current run and is destroyed at every drop, one remembers the best seen and only ever increases. Confusing them — resetting `best` too — is the most common bug in this shape of loop, and the trace table shows it immediately at $i = 3$, where `run` falls to 1 while `best` stays at 3.

**The test is `≥`, and that is a decision.** Change it to `>` and the run resets at every repeated value, so the block `5, 5, 5` counts as three runs of length 1 instead of one run of length 3, and the answer drops from 4 to 2. The code still runs, still returns a number, still passes any test whose input has no duplicates. **A one-character change that only misbehaves on ties is exactly the kind of bug hand-tracing finds and testing misses.**

## Worked examples

**Example 1 (mechanical): trace to the boundary.** What does this return for `a = [4]`, and for `a = []`?

```
i <- 0
total <- 0
while i < n - 1:
    total <- total + a[i+1] - a[i]
    i <- i + 1
return total
```

For `a = [4]`, $n = 1$: the condition is `0 < 0`, false, so the body **never runs** and it returns 0. Correct — the sum of differences between adjacent elements of a one-element array is empty, hence 0.

For `a = []`, $n = 0$: the condition is `0 < −1`, false. Returns 0. Also fine.

Now the trap. Suppose someone "simplifies" the condition to `i <= n - 1`, reasoning that indices run up to $n-1$. For `a = [4]` that is `0 <= 0`, true — the body runs and evaluates `a[1]`, which does not exist. **The condition was correct because the body reads `a[i+1]`, not `a[i]`.** The bound on a loop is a fact about what the *body* touches, not about the array's length, and that is why you check it by tracing the last iteration rather than by pattern-matching.

**Example 2 (why you'd care): the same loop, three subtly different results.** Count how many elements of `a = [3, 3, 7, 2, 5, 5, 5, 1, 9]` are strictly greater than the one before.

| version | test | range | count |
|---|---|---|---|
| A | `a[i] > a[i-1]` | `1..n-1` | **3** |
| B | `a[i] >= a[i-1]` | `1..n-1` | **6** |
| C | `a[i] > a[i-1]` | `0..n-1` | crash, or garbage |

Version A's rises are at $i = 2$ (3→7), $i = 4$ (2→5) and $i = 8$ (1→9); the pairs `3,3` and `5,5` are ties, not rises. Version B counts those ties as well — 3 rises plus 3 ties = 6, double the answer. Version C reads `a[-1]`, which crashes in some languages and silently returns the *last* element in others, in which case the count is wrong by an amount that depends on data nobody thought about.

Three plausible-looking loops, three different answers, and only tracing tells them apart. The habit worth taking: **before writing anything about a loop, decide what it does on a tie and on the first element, and write that down.**

## Watch out

- **You might think** `x = y` and `x ← y` mean the same thing — **but actually** one is a claim and one is an instruction. After `x ← y`, changing `y` does not change `x`. Reading assignment as equality makes every trace come out wrong.
- **You might think** integer arithmetic is exact — **but actually** fixed-width integers wrap. The classic case is a binary-search midpoint `(lo + hi) / 2`, which overflows for large arrays; `lo + (hi - lo) / 2` does not. This bug was in Java's standard library for nine years.
- **You might think** floating-point equality works — **but actually** `0.1 + 0.2 == 0.3` is false. Compare floats with a tolerance, and never use one as a loop counter.
- **You might think** the order of `and` operands is a style choice — **but actually** short-circuiting makes `i < n and a[i] > 0` safe and `a[i] > 0 and i < n` a crash. The guard must come first.
- **You might think** a loop that works on your example works — **but actually** the failures live at $n = 0$, $n = 1$, ties, and the last index. Those four cases are where to spend your tracing.

## One-liner

> Keep the state on paper, one row per iteration — and spend your attention on the first iteration, the last one, and the ties, because that is where the bugs are.

## Problems

**P1 (🟢)** Trace this fragment on `a = [2, 5, 5, 1, 4]`, giving a row per iteration with columns `i`, `a[i]`, `c`.

```
c <- 0
for i in 1 .. n-1:
    if a[i] > a[i-1]:  c <- c + 1
return c
```

(a) Give the trace table and the return value. (b) What does it return for `a = [7]`? (c) What does it return for `a = [4, 4, 4, 4]`? (d) In one sentence, say what quantity `c` actually counts.

**P2 (🟡)** This routine is supposed to return the **second largest** value in an array of at least two distinct numbers.

```
m1 <- a[0]
m2 <- a[1]
for i in 0 .. n-1:
    if a[i] > m1:
        m2 <- m1
        m1 <- a[i]
return m2
```

(a) Trace it on `a = [3, 9, 5]` and give the result. (b) Trace it on `a = [9, 3, 5]` and give the result. (c) One of those is wrong. Identify the smallest change to the input that exposes the bug, and state the bug in one sentence. (d) The specification says "at least two **distinct** numbers." What does the routine do on `a = [4, 4, 7]`, and is that within spec?

**P3 (🔴)** A team ships this to compute the average gap between consecutive readings from a sensor.

```
sum <- 0
for i in 1 .. n-1:
    sum <- sum + (t[i] - t[i-1])
return sum / (n - 1)
```

(a) Trace it on `t = [10, 14, 20]` and give the result. (b) The sensor occasionally returns a single reading. Say exactly what happens and why. (c) A colleague proposes guarding with `if n == 0: return 0`. Does that fix it? Trace their version on the failing input. (d) A second colleague points out that `sum` always equals `t[n-1] - t[0]`, so the loop is unnecessary. Are they right? Say what is gained and what is lost by replacing the loop with that expression, including on the input from (b).

<details>
<summary>Solutions</summary>

**P1** (a) `a = [2, 5, 5, 1, 4]`, $n = 5$:

| $i$ | `a[i]` | `a[i-1]` | `a[i] > a[i-1]`? | `c` after |
|---|---|---|---|---|
| 1 | 5 | 2 | yes | 1 |
| 2 | 5 | 5 | **no** (tie) | 1 |
| 3 | 1 | 5 | no | 1 |
| 4 | 4 | 1 | yes | 2 |

Returns **2**.

(b) `a = [7]`, $n = 1$: the loop range `1 .. 0` is empty, so the body never runs. Returns **0**. (Correct — a single reading has no adjacent pairs.)

(c) `a = [4, 4, 4, 4]`: every comparison is a tie, and `>` is strict, so none counts. Returns **0**.

(d) It counts the number of positions where the array **strictly increases** — equivalently, the number of "ascents", which is one less than the number of maximal non-increasing blocks. Ties are not ascents, which is the whole content of choosing `>` over `≥`.

**P2** (a) `a = [3, 9, 5]`. Initial `m1 = 3`, `m2 = 9`.

| $i$ | `a[i]` | `a[i] > m1`? | `m1` | `m2` |
|---|---|---|---|---|
| 0 | 3 | no | 3 | 9 |
| 1 | 9 | yes | 9 | 3 |
| 2 | 5 | no | 9 | 3 |

Returns **3**. The true second largest is 5, so this is **wrong**.

(b) `a = [9, 3, 5]`. Initial `m1 = 9`, `m2 = 3`.

| $i$ | `a[i]` | `a[i] > m1`? | `m1` | `m2` |
|---|---|---|---|---|
| 0 | 9 | no | 9 | 3 |
| 1 | 3 | no | 9 | 3 |
| 2 | 5 | no | 9 | 3 |

Returns **3**. Also wrong — the answer is 5.

(c) Both are wrong, and the smallest exposing input is **two elements plus one middling third** — in fact `[1, 3, 2]` suffices: `m1 = 1`, `m2 = 3`; $i=1$ promotes 3 to `m1` and demotes 1 to `m2`; $i=2$ sees $2 > 3$ is false and does nothing. Returns 1 when the answer is 2.

**The bug:** the routine updates `m2` **only** when a new maximum arrives. A value that is bigger than the current second-largest but smaller than the largest is ignored entirely. The missing branch is `else if a[i] > m2: m2 <- a[i]`.

(The initialization is a second, independent bug: `m2 <- a[1]` before the loop, followed by a loop that re-reads `a[0]` and `a[1]`, means the first two elements are counted inconsistently. Setting `m1, m2 <- −∞, −∞` and looping from 0 with both branches is the clean fix.)

(d) On `a = [4, 4, 7]`: `m1 = 4`, `m2 = 4`; $i=0$ no; $i=1$ ($4 > 4$ false) no; $i=2$ ($7 > 4$) yes → `m2 = 4`, `m1 = 7`. Returns **4**.

Is that within spec? **The spec does not say** — it promised "at least two distinct numbers", and this input has a duplicate, so the routine's behaviour is unconstrained. That is not a defence, it is a warning: a precondition nobody checks is a precondition nobody obeys. Either the caller must be made to guarantee it, or the routine must decide what "second largest" means with duplicates (4, by the "second largest *value*" reading; 4 as well by the "second element in sorted order" reading — here they agree, but on `[7, 7]` they do not). Lesson 1.2 is about writing that decision down.

**P3** (a) `t = [10, 14, 20]`, $n = 3$: $i=1$ adds $14-10 = 4$, so `sum` = 4; $i=2$ adds $20-14 = 6$, so `sum` = 10. Returns $10 / 2 = \mathbf{5}$. ✓

(b) With a single reading, $n = 1$: the loop range `1 .. 0` is empty so `sum` stays 0, and the return is `0 / (1 - 1)` = **0 / 0 — a division by zero**. Depending on the language that is a crash, or `NaN` silently poisoning every downstream average. The loop was never the problem; the divisor was.

(c) **No, it does not fix it.** Their guard catches $n = 0$, which was never the failing case. Tracing $n = 1$ through their version: `n == 0` is false, so we fall through to exactly the same code and divide by zero again.

This is worth naming: they guarded the input that *looks* degenerate rather than the one the arithmetic actually breaks on. The correct guard is on the divisor — `if n < 2: return 0` (or, better, signal "undefined") — because the quantity being averaged is the $n-1$ **gaps**, not the $n$ readings.

(d) **They are right about the algebra and it is a real improvement, with one caveat.**

The sum telescopes: $\sum_{i=1}^{n-1}(t_i - t_{i-1}) = t_{n-1} - t_0$, every intermediate term cancelling. So the whole loop can be replaced by

$$\texttt{return } (t[n-1] - t[0]) / (n - 1).$$

**Gained:** $\Theta(n)$ becomes $\Theta(1)$ — an unbounded speedup, and the code no longer has a loop to get wrong. It also avoids accumulating floating-point rounding error across $n-1$ additions.

**Lost:** the loop was reading every element, so it would have caught a corrupt or missing intermediate reading; the closed form touches only the endpoints and is blind to everything between them. If the readings were ever non-monotonic or contained a sentinel value, the loop version would at least produce a visibly strange sum.

**On the input from (b) nothing changes**: $n = 1$ still divides by zero, since the telescoping identity is about the numerator and the bug is in the denominator. Both versions need the same guard — which is the point worth keeping: **an optimization is not a fix, and rewriting code around a bug tends to preserve it.**

</details>

## Connections

- **Forward:** Lesson 1.2 turns "I traced it and it looked right" into a claim you can actually prove — a **loop invariant** — using exactly the four-part loop anatomy above. Lesson 1.3 traces a loop that calls itself, and Lesson 1.4 counts the rows in a trace table instead of filling them in.
- **Sideways:** the store-plus-program-counter model is the informal version of the machine that [theory-of-computation 3.1](../../theory-of-computation/lessons/03-01-turing-machines.md) makes precise, and the boolean-operator reasoning is [discrete-mathematics](../../discrete-mathematics/syllabus.md)'s propositional logic doing a day job. The half-open convention $[a,b)$ is the same one that makes interval arithmetic clean in [calc-refresher](../../calc-refresher/syllabus.md).
