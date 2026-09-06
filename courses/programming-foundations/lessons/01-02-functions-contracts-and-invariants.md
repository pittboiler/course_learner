# Programming & Data Structures · Lesson 1.2: Functions, contracts, and invariants

> ⏱ ~15 min · Module 1: Programming & recursion · Builds on: [1.1 (values, variables & control flow)](01-01-values-variables-and-control-flow.md) · Unlocks: 1.3 (recursion and the call stack)

## Why this matters

[Lesson 1.1](01-01-values-variables-and-control-flow.md) ended one element short of an answer: you can trace a loop on an example and watch it produce the right number, and still have no idea whether it is *correct*. Tracing checks one input. There are infinitely many.

A **contract** and a **loop invariant** are the two tools that close that gap. A contract says what a function demands of its caller and what it promises in return — so that "whose bug is this?" has an answer before anyone argues. An invariant is a statement true at every pass of a loop, which turns "it worked on my example" into a proof that covers every input at once.

This is also where the course stops being about code and starts being about *reasoning about* code. Every later lesson leans on it: binary search's correctness is an invariant ([4.1](04-01-searching-and-elementary-sorting.md)), a heap's shape is an invariant ([3.3](03-03-heaps-and-priority-queues.md)), a BST's ordering is an invariant ([3.1](03-01-binary-trees-and-binary-search-trees.md)), and "this data structure is in a valid state" is an invariant every single time.

The judgement content is that **a precondition nobody states is a precondition nobody obeys**, and that most broken code is not wrong in its middle — it is wrong at a boundary its author never wrote down.

## The idea

**A function is a promise with a price.** Two halves:

- the **precondition**: what must be true when it is called. The *caller's* obligation.
- the **postcondition**: what will be true when it returns, *given* the precondition held. The *callee's* obligation.

Together they are the [contract](../reference.md#precondition-and-postcondition-contract), and the point of writing it down is that it assigns blame. If `binary_search` misbehaves on an unsorted array and its precondition says "the array is sorted", that is the caller's bug. If the array *was* sorted and it still misbehaves, it is the function's. Without the stated precondition there is only an argument.

**Scope** is which names a piece of code can see. A parameter is a fresh local name bound to the argument's value at the moment of the call; assigning to it inside changes nothing outside. But if the value is a *reference* to a mutable structure, the callee can reach through it and change what the caller sees — **aliasing**, and the source of a whole family of bugs where a function's postcondition is silently false because someone else held a second pointer to the same array.

**A [loop invariant](../reference.md#loop-invariant)** is the real machinery. Pick a statement $I$ about the program's variables and prove three things:

1. **Initialization** — $I$ is true just before the loop starts.
2. **Maintenance** — if $I$ is true at the top of an iteration, it is still true at the top of the next.
3. **Termination** — the loop *does* stop, and when it does, $I$ plus the failed loop condition gives you the postcondition.

That is induction, wearing a hard hat. And the reason it is worth the effort is that it replaces infinitely many traces with three finite checks.

The part people skip is **initialization**, because it usually looks trivial. It usually is. It is also where the empty-input bug lives, every time.

## The formal version

**Contract notation.** Write a function's specification as

$$\{\,P\,\}\quad f\quad \{\,Q\,\}$$

meaning: if $P$ (the precondition) holds when $f$ is called, then $Q$ (the postcondition) holds when it returns. This is a **partial correctness** claim — it says nothing about whether $f$ returns at all. Adding a termination argument upgrades it to **total correctness**, and the two are genuinely separate: an infinite loop satisfies every postcondition vacuously.

**Example contract.**

```
MAX(a, n):
    pre:   n >= 1  and  a has at least n elements
    post:  returns v such that  v = a[k] for some k in [0, n)
                          and   v >= a[j] for all j in [0, n)
```

Note the postcondition has *two* clauses. The first says the answer is actually an element (ruling out "return 10⁹"), the second says it is at least as big as everything (ruling out "return a[0]"). Either alone is satisfiable by nonsense, and writing only one is a common way to specify a function badly.

**Loop invariant, formally.** For a loop with condition $C$ and body $B$, an invariant $I$ satisfies:

$$\text{init: } P \Rightarrow I, \qquad \text{maint: } \{I \wedge C\}\ B\ \{I\}, \qquad \text{term: } (I \wedge \lnot C) \Rightarrow Q.$$

**Worked instance.** For `MAX`:

```
m <- a[0]
i <- 1
while i < n:
    if a[i] > m:  m <- a[i]
    i <- i + 1
return m
```

*Invariant $I$:* **`m` is the maximum of `a[0..i−1]`, and $1 \le i \le n$.**

- **Initialization.** Before the first test, $i = 1$ and $m = a[0]$, which is the maximum of the one-element prefix `a[0..0]`. ✓ (This is exactly where the precondition $n \ge 1$ is spent — with $n = 0$ there is no `a[0]` and the invariant cannot even be established.)
- **Maintenance.** Assume $I$ holds with $i < n$. The body sets `m` to $\max(m, a[i])$, which by the assumption is $\max(a[0..i-1], a[i]) = \max(a[0..i])$; then $i$ increments, so `m` is the maximum of `a[0..i−1]` for the new $i$. ✓
- **Termination.** $i$ strictly increases and is bounded by $n$, so the loop ends, with $i = n$. The invariant then reads: `m` is the maximum of `a[0..n−1]` — the postcondition. ∎

**Choosing an invariant.** The reliable recipe: **write down what the answer variable means partway through.** "`m` is the answer for the part I have looked at so far" is the invariant for almost every accumulate-over-an-array loop, and the index bound ($1 \le i \le n$) is what makes the termination step work.

## Picture

![Three horizontal bands representing the same array at three moments. In the first, labelled before with i equals 0, the whole band is marked not looked at yet. In the second, labelled during with i strictly between 0 and n, the band is split by a marker at position i into a blue already-scanned prefix and a grey unscanned suffix. In the third, labelled after with i equals n, the whole band is blue. Above them the invariant reads: best is the answer for a[0 to i minus 1]. Below, the three obligations are listed: initialization true at i equals zero, maintenance extending the prefix by one, and termination at i equals n giving the whole array.](assets/01-02-fig1.svg)

The picture is the whole method in one shape: **a moving boundary, with a claim about everything to its left.**

**Initialization** is the leftmost band, where the boundary is at the very start and the claim is about the empty prefix. That is why the empty case is where invariants break — if your answer variable is initialized to something that is *not* the answer for zero elements, the invariant is false before the loop even begins, and no amount of correct body logic recovers it. Initializing a maximum to `0` instead of `a[0]` (or $-\infty$) is this bug, and it only shows on all-negative input.

**Maintenance** is the boundary sliding one step right. Notice what it does *not* require: you never reason about the whole array, only about extending a claim by one element. That is what makes the method scale to loops you could never trace.

**Termination** is the boundary reaching the end, at which point "the answer for everything to my left" means "the answer". The invariant and the exit condition together give the postcondition — neither alone does, which is why a loop that exits early (a `break`) needs its own separate argument.

## Worked examples

**Example 1 (mechanical): state the invariant.** This routine reverses an array in place:

```
lo <- 0
hi <- n - 1
while lo < hi:
    swap a[lo], a[hi]
    lo <- lo + 1
    hi <- hi - 1
```

*Invariant:* **the elements outside `a[lo..hi]` are already in their final reversed positions, and the elements inside are in their original relative order.**

- **Initialization:** $lo = 0$, $hi = n-1$, so "outside" is empty — vacuously true. ✓
- **Maintenance:** the swap puts `a[lo]` and `a[hi]` in each other's final places, then the window shrinks by one at each end, so the "outside" region grows to include exactly those two. ✓
- **Termination:** the gap $hi - lo$ falls by 2 each pass, so the loop ends with $lo \ge hi$. The remaining window has 0 or 1 elements — and a single middle element is *already* in its final position. So everything is placed. ✓

That last sentence is the whole reason the condition is `lo < hi` rather than `lo <= hi`. With `≤`, an odd-length array swaps its middle element with itself: harmless here, but the same off-by-one in a routine that *counts* swaps, or that has side effects, is not.

**Example 2 (why you'd care): the contract decides whose bug it is.** A team's `median(a, n)` returns the middle element of a sorted array. A caller passes unsorted data and gets nonsense.

| what is written down | who is at fault | what gets fixed |
|---|---|---|
| nothing | argued about in a meeting | eventually, something |
| **pre:** `a` is sorted ascending | the **caller** | the call site sorts first |
| **pre:** none; **post:** returns the median of `a` in any order | the **function** | `median` sorts internally, at $\Theta(n\log n)$ |

All three are defensible engineering positions — and they cost different amounts. The second is fast and pushes work to callers; the third is safe and pays $\Theta(n\log n)$ on every call even when the data was already sorted.

The one thing that is **not** defensible is the first row. An unstated precondition still exists — the function still only works on sorted input — it is just invisible, so callers violate it and the bug surfaces far from its cause. **Writing the contract down does not make the code better; it makes the failure attributable.** That is worth more.

The habit: whenever you write or read a function, ask *what must be true for this to work?* If the answer is anything other than "nothing", it belongs in the contract.

## Watch out

- **You might think** initialization is the trivial step — **but actually** it is where the empty-input bug lives. `max <- 0` reads as harmless and is false as an invariant for an all-negative array, because 0 is not the maximum of the empty prefix in that domain.
- **You might think** an invariant is just a comment — **but actually** it has to be a statement that is *checkably* true at the top of every iteration. "The array gets sorted" is not an invariant; "`a[0..i−1]` is sorted and contains the same elements it started with" is.
- **You might think** proving maintenance proves the loop correct — **but actually** you need all three parts. Maintenance alone is satisfied by a loop that never runs, and by one that never stops.
- **You might think** a parameter is a copy, so the callee cannot affect the caller — **but actually** if the value is a reference to a mutable structure, both names point at the same object. `f(a)` can permute your array while its stated postcondition talks only about the return value.
- **You might think** a precondition the caller always happens to satisfy costs nothing to omit — **but actually** the next caller is written by someone who never read the first one. The cost of the omission is paid later and by someone else.
- **You might think** total correctness follows from partial — **but actually** they are independent claims. A loop that never terminates satisfies *every* postcondition, which is why the termination argument (some quantity strictly decreases and is bounded) has to be made separately.

## One-liner

> Say what you demand and what you promise; then find the statement about your answer variable that survives every iteration, and check it at the start, in the middle, and at the exit.

## Problems

**P1 (🟢)** This routine counts how many elements of `a[0..n−1]` are strictly positive.

```
c <- 0
i <- 0
while i < n:
    if a[i] > 0:  c <- c + 1
    i <- i + 1
return c
```

(a) State the loop invariant. (b) Verify initialization. (c) Verify maintenance. (d) Give the termination argument and show it yields the postcondition.

**P2 (🟡)** A routine claims: *"returns the index of the first occurrence of `x` in `a[0..n−1]`, or `−1` if absent."*

```
i <- 0
while i < n:
    if a[i] == x:  return i
    i <- i + 1
return -1
```

(a) State the invariant that holds at the top of each iteration. (b) The loop can exit two ways. Show that each exit satisfies the postcondition. (c) A colleague "optimizes" the loop to `while i <= n`. Give the input on which this now fails and say how. (d) A second colleague changes the return to `i` unconditionally, arguing "if it wasn't found, `i` equals `n`, and callers can check that instead of `−1`." Evaluate this: is it correct, and what does it cost?

**P3 (🔴)** A payments team ships `apply_discounts(prices, n, rules)`, documented only as *"applies the discount rules to the price list."* It mutates `prices` in place and returns the new total. Two incidents follow: a report shows pre-discount prices where it should show post-discount, and a different report double-discounts a basket.

(a) Write a precondition and a postcondition that would have made both incidents attributable, and say which party each blames. (b) Explain, in terms of aliasing, how "shows pre-discount prices" and "double-discounts" can both come from the same undocumented behaviour. (c) The team proposes making the function return a *new* list and never mutate its input. State what this fixes, what it costs, and the one case where the cost matters. (d) They keep the mutating version but add an assertion. Give an assertion that would have caught the double-discount at the point of failure, and say why an invariant is the right shape of thing to assert here.

<details>
<summary>Solutions</summary>

**P1** (a) **Invariant $I$:** `c` equals the number of strictly positive elements in `a[0..i−1]`, and $0 \le i \le n$.

(b) **Initialization.** Before the first test, $i = 0$ and $c = 0$. The prefix `a[0..−1]` is empty and contains zero positive elements, so $c = 0$ is correct, and $0 \le 0 \le n$ ✓. (Note this works even when $n = 0$ — the invariant is established without touching the array, which is exactly why this routine has no empty-input bug and P2's variants below do.)

(c) **Maintenance.** Assume $I$ holds and $i < n$. Two cases:
- `a[i] > 0`: the body increments `c`, so `c` becomes (count in `a[0..i−1]`) + 1 = count in `a[0..i]`.
- `a[i] ≤ 0`: `c` is unchanged, and the count in `a[0..i]` equals the count in `a[0..i−1]` since `a[i]` contributes nothing.

Either way `c` is the count for `a[0..i]`; then `i` increments, so `c` is the count for `a[0..i−1]` with the new $i$. The bound $i \le n$ is preserved because the body ran only when $i < n$. ✓

(d) **Termination.** The quantity $n - i$ is a non-negative integer that strictly decreases each iteration, so the loop must end, and it ends with $i = n$ (the first value failing $i < n$, since $i$ rises by exactly 1).

At exit, $I$ with $i = n$ says: `c` is the number of strictly positive elements in `a[0..n−1]` — which is the postcondition. ∎

**P2** (a) **Invariant:** `x` does not occur in `a[0..i−1]`, and $0 \le i \le n$.

(That is the useful invariant, and it is worth noticing it is a *negative* statement. Search loops maintain "I haven't found it yet in the part I've looked at", which is what makes the eventual find meaningful.)

(b) Two exits:

- **`return i` from inside.** The guard `a[i] == x` just succeeded, so `x` occurs at index $i$. The invariant says it does not occur anywhere in `a[0..i−1]`, so $i$ is the **first** occurrence. ✓ (Without the invariant, all you would know is that it occurs *somewhere*, and "first" would be unproved.)
- **`return -1` after the loop.** The loop ended with $i = n$, so the invariant reads: `x` does not occur in `a[0..n−1]`, i.e. it is absent. ✓

(c) With `while i <= n`, the final iteration has $i = n$ and evaluates `a[n]` — one past the end. The failing input is **any array in which `x` is absent**, e.g. `a = [1, 2, 3]`, `x = 9`, $n = 3$: iterations at $i=0,1,2$ find nothing, then $i = 3$ reads `a[3]`.

How it fails is language-dependent and all of the options are bad: a bounds-check exception; or a silent read of adjacent memory which, if it happens to equal `x`, makes the function **return 3 — an index outside the array** — and the caller then indexes `a[3]` too. The second is worse, because it turns a crash into a wrong answer.

(d) **It is correct, and it is a real design, but it moves a cost rather than removing one.**

Correctness: the loop already exits with $i = n$ exactly when `x` is absent, so returning `i` unconditionally does encode both outcomes, and the caller's test `if result == n` is equivalent to `if result == -1`. This is precisely the C++ STL convention (`end()` as the not-found sentinel), so it is well-precedented.

What it costs:

| | `−1` sentinel | `n` sentinel |
|---|---|---|
| is the sentinel a *valid* index? | never | never for this array, but `n` is a plausible index for a *different* array |
| what happens if the caller forgets to check | `a[-1]` — crash in most languages, last element in a few | `a[n]` — out of bounds, same class of bug |
| does the caller need `n` in scope? | no | **yes** |

The last row is the real cost: the return value is no longer self-describing. `−1` means "absent" on its own; `n` means "absent" only relative to a length the caller must still be holding. In a codebase where the length travels separately from the array, that is a new opportunity to compare against the wrong `n`.

Neither is wrong. What *is* wrong is having both conventions in one codebase, which is the actual failure mode — and it is a documentation problem, i.e. a contract problem.

**P3** (a) A contract that makes both incidents attributable:

```
apply_discounts(prices, n, rules):
    pre:   n >= 0;  prices has n elements;  no discount in `rules` has
           already been applied to `prices` (the list is pre-discount)
    post:  prices[i] is the post-discount price for every i in [0, n);
           the input list IS MUTATED IN PLACE;
           returns the sum of prices[0..n-1] after mutation
```

The load-bearing clauses are the two that were missing:

- **"the input list is mutated in place"** — a *postcondition*, and its absence caused incident one. The report that showed pre-discount prices was presumably holding what it believed was an untouched list. Blaming: with this written down, the report is at fault for not copying; without it, the function is at fault for a surprising side effect.
- **"no discount has already been applied"** — a *precondition*, and its absence caused incident two. Blaming: this puts the double-discount squarely on the **caller** that invoked it twice.

(b) **Both come from in-place mutation plus a shared reference.** Suppose the basket list is created once and passed to several subsystems, all of which hold a reference to the *same* list object rather than copies.

- The **reporting** subsystem captured the list intending to display original prices. `apply_discounts` then overwrote the contents through the other alias, so the report — which never called the discount code and reasonably assumed its data was stable — renders discounted values. Incident one.
- The **checkout** subsystem, seeing a list of prices and having no way to tell whether discounts were applied (the list carries no such flag), calls `apply_discounts` again. The rules operate on the already-reduced numbers. Incident two.

One undocumented behaviour, two opposite-looking symptoms: someone saw a change they did not ask for, and someone else failed to see that a change had already happened. **Aliasing means a function's effects reach code that never called it**, which is exactly why "mutates its argument" belongs in the postcondition rather than in the reader's head.

(c) **Returning a fresh list.**

*Fixes:* both incidents, and the whole class. The input becomes immutable from the caller's perspective, so no alias can observe a surprise change, and calling it twice on the same input is now harmless — it just produces a second (identical) output rather than compounding. It also makes the function referentially transparent and trivially testable.

*Costs:* $\Theta(n)$ extra memory and one full copy per call. For a shopping basket ($n$ in the tens) that is free.

*Where the cost matters:* when $n$ is large and the function is called in a tight loop — e.g. re-pricing a million-line catalogue on every keystroke of a filter, where allocating and garbage-collecting a million-element list per call dominates everything else. That is the case where in-place mutation earns its keep, and the right response is to keep it **and** document it, not to leave it undocumented because it is fast.

(d) An assertion that catches the double-discount **where it happens**:

```
assert not any(p.discount_applied for p in prices), \
    "apply_discounts called on an already-discounted list"
```

which requires the price records to carry that flag — and needing to add the flag is itself the finding: **the precondition was not checkable, which is why it was violated silently.** A precondition you cannot test is a comment.

*Why an invariant is the right shape here.* The real property is not about one call, it is about the data structure's whole lifetime: **"every price in this list is in exactly one of two states, pre-discount or post-discount, and the whole list agrees."** That is a **representation invariant** — a claim about what a valid instance of the type looks like — and it is exactly the kind of thing this lesson's machinery is for. Assert it on entry and exit of every operation that touches the list, and both incidents fail loudly at their cause instead of quietly in a report three systems away.

This is the same move as every data structure in Modules 2–4: a heap is "every parent ≤ its children", a BST is "left subtree < node < right subtree", and each operation's job is to restore the invariant before it returns.

</details>

## Connections

- **Backward:** the four-part loop anatomy from [Lesson 1.1](01-01-values-variables-and-control-flow.md) maps one-to-one onto the three invariant obligations — initialization is the loop's setup, maintenance is body-plus-update, termination is the condition finally failing. The boundary cases that lesson said to trace are exactly the cases where initialization fails.
- **Forward:** Lesson 1.3's base case is a precondition in disguise ("this input is small enough to answer directly"), and recursion's correctness argument is induction, the same shape as an invariant. From Module 2 on, every data structure is defined by a **representation invariant** that its operations must restore: a heap's parent-child ordering ([3.3](03-03-heaps-and-priority-queues.md)), a BST's ordering ([3.1](03-01-binary-trees-and-binary-search-trees.md)), a dynamic array's `size ≤ capacity` ([2.2](02-02-arrays-and-dynamic-arrays.md)). Binary search in [4.1](04-01-searching-and-elementary-sorting.md) is the invariant argument at its sharpest.
- **Sideways:** initialization/maintenance/termination *is* mathematical induction — base case, inductive step, and a well-founded ordering — as built in [discrete-mathematics 1.4](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md). Contracts scale up to type systems and formal specification, which is where [programming-languages](../../programming-languages/syllabus.md) picks the thread up.
