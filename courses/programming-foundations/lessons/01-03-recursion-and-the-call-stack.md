# Programming & Data Structures · Lesson 1.3: Recursion and the call stack

> ⏱ ~15 min · Module 1: Programming & recursion · Builds on: [1.2 (functions, contracts & invariants)](01-02-functions-contracts-and-invariants.md) · Unlocks: 1.4 (Big-O: counting operations)

## Why this matters

A recursive routine is a function whose contract is satisfied by *trusting itself* on a smaller input. That sounds circular and isn't — it is [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) induction with the loop taken out.

You need it because the structures in the rest of this course are themselves recursive. A tree is a node with two subtrees; a subtree is a tree. Nothing about a binary search tree ([3.1](03-01-binary-trees-and-binary-search-trees.md)) or a backtracking search ([4.3](04-03-recursion-revisited-backtracking.md)) is natural to express any other way, and reading those lessons without being fluent here is the main way this course goes wrong.

The judgement content is **two resources, not one**. A recursion costs time — the number of calls — and it costs **space**, the deepest the call stack ever gets, and those two numbers can differ by an exponential factor. Almost every "correct recursive program that crashes in production" is a space failure that its author only ever thought about in time. This lesson makes you count both.

## The idea

**Two cases, always.** A recursive definition has a **base case** it answers outright, and a **recursive case** that reduces the problem and calls itself. Miss the base case and it never stops; fail to actually shrink the input and it never stops either — those are different bugs with the same symptom.

**Why it is not circular.** The contract discipline from 1.2 explains it. `factorial(n)` promises to return $n!$ *given* $n \ge 0$. Writing `return n * factorial(n-1)` is allowed because the recursive call is on $n-1$, a strictly smaller instance, and there is a floor at 0 that is answered without recursing. The argument is induction: the base case is the basis, the recursive case is the step, and "the input strictly decreases toward the base" is the well-founded ordering that makes it valid. **Trust the recursive call to honour its contract; your job is only to be correct assuming it does.**

**The [call stack](../reference.md#call-stack-call-tree).** When a function is called, the machine pushes a **frame** holding its parameters, locals, and where to return to. When it returns, the frame is popped. So a chain of nested calls is a stack of frames, and the deepest that stack gets is the recursion's **space** cost — a real, finite resource, typically a few megabytes, which runs out at a depth of roughly $10^4$ to $10^5$ frames.

**The call tree.** Draw every call as a node, with children for the calls it makes. Then:

- **time** ≈ the number of *nodes* in the tree;
- **space** ≈ the length of the longest *root-to-leaf path*.

For a routine that calls itself once, the tree is a path and the two are equal. For one that calls itself twice, the tree branches and they diverge violently: `fib` has exponentially many nodes and only depth $n$.

**Recursion and iteration are interchangeable — at a price.** Any recursion can be rewritten as a loop with an explicit stack, and any loop can be written recursively. Which reads better depends on the problem; which *runs* better depends on whether the language eliminates tail calls. What is never optional is knowing the depth.

## The formal version

**Anatomy.**

```
FACTORIAL(n):
    pre: n >= 0
    if n = 0:  return 1                    # base case
    return n * FACTORIAL(n - 1)            # recursive case, on a smaller input
```

**Correctness by induction.** *Basis:* $\texttt{FACTORIAL}(0) = 1 = 0!$ ✓. *Step:* assume $\texttt{FACTORIAL}(n-1) = (n-1)!$ for some $n \ge 1$; then the routine returns $n \cdot (n-1)! = n!$ ✓. *Termination:* the argument is a non-negative integer that strictly decreases and stops at 0. ∎

Those three obligations are [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) initialization, maintenance and termination with the names changed.

**Counting.** Let $T(n)$ be the number of calls and $D(n)$ the maximum stack depth.

| routine | recursive calls per invocation | $T(n)$ | $D(n)$ |
|---|---|---|---|
| `FACTORIAL(n)` | 1, on $n-1$ | $n + 1$ | $n + 1$ |
| binary search on $n$ items | 1, on $n/2$ | $\Theta(\log n)$ | $\Theta(\log n)$ |
| naive `FIB(n)` | 2, on $n-1$ and $n-2$ | $2F(n{+}1) - 1$ | $n + 1$ |
| merge sort on $n$ items | 2, on $n/2$ each | $\Theta(n)$ calls, $\Theta(n\log n)$ work | $\Theta(\log n)$ |

The `FIB` row is the one to stare at. Its call count is $2F(n+1) - 1$ where $F$ is the Fibonacci sequence itself, so it grows like $\varphi^n \approx 1.618^n$ — exponential — while its depth is only $n$. *(Machine-verified for $n \le 24$.)*

| $n$ | calls | depth |
|---|---|---|
| 5 | 15 | 5 |
| 20 | 21,891 | 20 |
| 30 | 2,692,537 | 30 |
| 40 | 331,160,281 | 40 |
| 50 | 40,730,022,147 | 50 |

At $n = 50$ that is about **41 seconds** at a billion calls per second, for a number you can compute by hand in a minute. Memoizing — remembering each $F(k)$ the first time it is computed — reduces it to **41 calls**, one per distinct argument, because the redundancy is the entire cost.

**[Tail calls](../reference.md#tail-call).** A call is a **tail call** when it is the last thing the caller does, so the caller's frame has no work left and can be reused rather than stacked. `return FACTORIAL(n-1)` is a tail call; `return n * FACTORIAL(n-1)` is **not** — the multiplication happens after the call returns, so the frame must survive. Languages that guarantee tail-call elimination turn tail-recursive routines into loops with $\Theta(1)$ space; languages that do not (Python, Java) leave the depth exactly as written. **Whether your recursion is safe at depth $10^6$ is a fact about your language, not about your algorithm.**

## Picture

![A call tree for naive fib of 5. The root, labelled 5, has children 4 and 3; the 4 subtree expands into 3 and 2, and so on down to leaves labelled 1 and 0. The entire right subtree rooted at 3, together with its descendants, is drawn in red and annotated as an exact copy of a subtree already computed on the left. To the right, a separate diagram shows a stack of five frames labelled fib(5) down to fib(1), the deepest the stack ever gets, annotated depth 5 equals n frames. Captions state that fib of 5 makes 15 calls, that the general count is two F of n plus one minus one, and that time is the number of nodes while space is the longest root-to-leaf path.](assets/01-03-fig1.svg)

**The two numbers are in the same picture, measured differently.** Count the circles: 15, and that is the running time. Measure the longest path from root to a leaf: 5, and that is the memory. Nothing about the drawing makes one more visible than the other, which is exactly why people report the first and get caught by the second.

**The red subtree is the whole problem.** `fib(3)` is computed on the left, inside `fib(4)`, and then computed again from scratch on the right — and every one of *its* subtrees is duplicated too, recursively. The tree is exponentially larger than the set of distinct subproblems, of which there are only $n+1$. That gap between "calls made" and "distinct questions asked" is precisely what memoization closes, and recognizing it is a skill that pays off again in [`algorithms`](../../algorithms/syllabus.md) Module 2, where it is the entire basis of dynamic programming.

**Depth is $n$ even though the tree is huge.** The stack never holds more than one root-to-leaf path at a time, because siblings are explored one after another and each is popped before the next is pushed. So `fib` is exponential in time and merely linear in space — and a routine can equally be the other way round.

## Worked examples

**Example 1 (mechanical): unwind the stack.** Trace `FACTORIAL(4)`, showing every frame.

Descending — each line pushes a frame that cannot finish until the one below it returns:

| depth | frame | waiting to compute |
|---|---|---|
| 1 | `FACTORIAL(4)` | `4 * ?` |
| 2 | `FACTORIAL(3)` | `3 * ?` |
| 3 | `FACTORIAL(2)` | `2 * ?` |
| 4 | `FACTORIAL(1)` | `1 * ?` |
| 5 | `FACTORIAL(0)` | base case → **1** |

Now unwinding, each frame completing its pending multiplication and popping:

$$1 \;\to\; 1 \cdot 1 = 1 \;\to\; 2 \cdot 1 = 2 \;\to\; 3 \cdot 2 = 6 \;\to\; 4 \cdot 6 = \mathbf{24}.$$

Five calls, depth 5. **The multiplications all happen on the way back up** — which is exactly why this is not a tail call, and why the frames must be kept.

**Example 2 (why you'd care): the same routine, two ways, and only one survives.** Sum an array of $10^6$ numbers.

```
SUM-REC(a, i, n):                     SUM-ITER(a, n):
    if i = n:  return 0                   s <- 0
    return a[i] + SUM-REC(a, i+1, n)      for i in 0 .. n-1:  s <- s + a[i]
                                          return s
```

| | calls / iterations | stack depth | outcome at $n = 10^6$ |
|---|---|---|---|
| `SUM-REC` | $10^6 + 1$ | $10^6 + 1$ | **stack overflow** |
| `SUM-ITER` | $10^6$ | 1 | fine |

Both are $\Theta(n)$ in time and both are correct by induction. One of them crashes. Python's default recursion limit is **1000** frames, so `SUM-REC` fails at $n = 1000$ — three orders of magnitude before the "correct, linear-time" description suggests any trouble.

Note what the fix is *not*: raising the recursion limit only moves the cliff, because the real constraint is the operating system's stack size. The fix is either to iterate, or to use a language that eliminates the tail call — and `a[i] + SUM-REC(...)` is not a tail call as written, so it would need rewriting with an accumulator first:

```
SUM-ACC(a, i, n, acc):
    if i = n:  return acc
    return SUM-ACC(a, i+1, n, acc + a[i])       # now a genuine tail call
```

**Recursion depth is a resource you must budget, exactly like time.** The rule of thumb: recursion whose depth is $\Theta(\log n)$ is always safe; recursion whose depth is $\Theta(n)$ is safe only for small $n$ or in a language that eliminates tail calls.

## Watch out

- **You might think** a base case is enough to guarantee termination — **but actually** you also need the input to *reach* it. `f(n) = f(n-2)` with base case `n = 0` runs forever on odd $n$; the base case exists and is never hit.
- **You might think** time and space are the same for a recursion — **but actually** they are the node count and the depth of the same tree, and they can differ exponentially. `fib(40)` makes 331 million calls at depth 40.
- **You might think** a "correct, linear-time" recursion is safe at scale — **but actually** linear *depth* crashes. Python gives up at 1,000 frames.
- **You might think** raising the recursion limit fixes a stack overflow — **but actually** it moves the failure into the operating system's stack, where it is a segmentation fault instead of a clean exception. Change the algorithm, not the limit.
- **You might think** `return n * f(n-1)` is a tail call — **but actually** the multiplication is pending, so the frame must be kept. Only `return f(...)` with nothing left to do qualifies, and even then only if your language promises to eliminate it.
- **You might think** recursion is inherently slower than iteration — **but actually** the per-call overhead is a small constant. The gap in the `fib` example is not recursion's fault; it is *recomputation's*, and an iterative routine that recomputed as freely would be just as slow.

## One-liner

> Trust the recursive call to honour its contract on a smaller input — then count the nodes of the call tree for time and its depth for space, because those are different numbers and only one of them is on the tin.

## Problems

**P1 (🟢)** Consider

```
G(n):
    if n <= 1:  return 1
    return G(n - 1) + G(n - 1)
```

(a) Trace `G(3)`, drawing the call tree. (b) How many calls does `G(3)` make? `G(n)`? (c) What is the maximum stack depth for `G(n)`? (d) `G(n)` always returns $2^{n-1}$ for $n \ge 1$. Give a one-line routine computing the same value, and say what the recursion was spending its time on.

**P2 (🟡)** A search routine over a sorted array:

```
BSEARCH(a, lo, hi, x):
    if lo > hi:  return -1
    mid <- (lo + hi) / 2                    # integer division
    if a[mid] = x:   return mid
    if a[mid] < x:   return BSEARCH(a, mid+1, hi, x)
    else:            return BSEARCH(a, lo, mid-1, x)
```

(a) Trace it on `a = [2, 5, 8, 12, 16, 23, 38]`, `x = 23`, giving `lo`, `hi`, `mid` at each call. (b) Give the number of calls and the stack depth for an array of $n = 10^6$. (c) Is the recursive call a tail call? Justify. (d) Give an input of size $10^6$ on which this routine is unsafe in Python, or argue that none exists.

**P3 (🔴)** A team computes the number of ways to make change for an amount $A$ from coin denominations $c_1, \dots, c_k$:

```
WAYS(A, i):
    if A = 0:      return 1
    if A < 0 or i = k:  return 0
    return WAYS(A - c[i], i) + WAYS(A, i + 1)
```

(a) Trace `WAYS(4, 0)` with coins `[1, 2]` and give the answer and the number of calls. (b) The routine is correct but slow. Identify precisely what is being recomputed, and state how many *distinct* subproblems exist in terms of $A$ and $k$. (c) The team memoizes, caching each `(A, i)` result. Give the new call count in terms of $A$ and $k$, and the memory it needs. (d) In production $A$ is a monetary amount in cents up to $10^9$ and $k = 6$. Say whether memoization is enough, and what the memoized version's *stack depth* is — with the coin list `[1, 5, 10, 25, 100, 500]` and $A = 10^9$.

<details>
<summary>Solutions</summary>

**P1** (a) `G(3)` call tree:

```
                G(3)
              /      \
          G(2)        G(2)
         /    \      /    \
      G(1)  G(1)  G(1)  G(1)
```

Each `G(1)` hits the base case and returns 1; each `G(2)` returns $1+1 = 2$; `G(3)` returns $2+2 = \mathbf{4}$.

(b) **7 calls** for `G(3)`: 1 + 2 + 4. In general the tree is a *complete* binary tree of depth $n-1$, so

$$T(n) = 1 + 2 + 4 + \cdots + 2^{n-1} = 2^{n} - 1 \text{ calls.}$$

(c) **Depth $n$** — the path `G(n) → G(n−1) → ⋯ → G(1)`, which is $n$ frames. Exponential time, linear space, the same divergence as `fib`.

(d) `return 2^(n-1)` — or, staying with multiplication only, a loop doubling $n-1$ times.

What the recursion was spending its time on: **it computed the same value $2^n - 1$ times.** Both children of every node are the *identical* call `G(n−1)` — not merely similar, literally the same arguments — so the tree is a fully redundant expansion of a single subproblem per level. There are only $n$ distinct subproblems and the routine solves $2^n - 1$ of them. This is the `fib` pathology in its purest form, with the duplication so total that memoizing would collapse the tree to a path of $n$ nodes.

**P2** (a) `a = [2, 5, 8, 12, 16, 23, 38]`, indices 0–6, `x = 23`:

| call | `lo` | `hi` | `mid` | `a[mid]` | comparison | next |
|---|---|---|---|---|---|---|
| 1 | 0 | 6 | 3 | 12 | $12 < 23$ | search right: `lo = 4` |
| 2 | 4 | 6 | 5 | 23 | **equal** | return **5** |

Two calls, and the answer is index 5 ✓.

(b) Each call halves the range, so the number of calls is $\Theta(\log n)$ — at most $\lceil \log_2(10^6+1)\rceil = \mathbf{20}$.

The stack depth is the **same, 20**, because each call makes at most one recursive call and it is the last thing that happens, so the chain is a path with no branching. (Compare `fib`, where calls and depth diverge — here the call tree *is* the path.)

(c) **Yes, both recursive calls are tail calls.** The routine's last action in each branch is `return BSEARCH(...)` with no pending arithmetic — nothing is waiting to be combined with the result, unlike `return n * FACTORIAL(n-1)`. So a language with tail-call elimination runs this in $\Theta(1)$ space, and it is trivially rewritable as a loop:

```
while lo <= hi:
    mid <- (lo + hi) / 2
    if a[mid] = x: return mid
    if a[mid] < x: lo <- mid + 1
    else:          hi <- mid - 1
return -1
```

(d) **No such input exists — the routine is safe.** The depth is bounded by $\lceil \log_2 n \rceil = 20$ for $n = 10^6$, which is nowhere near Python's 1,000-frame limit. In fact the depth would not reach 1,000 until $n \approx 2^{1000}$, which exceeds the number of atoms in the observable universe.

This is the general rule worth carrying: **recursion that divides the input is always safe; recursion that decrements it is not.** Depth $\Theta(\log n)$ versus depth $\Theta(n)$ is the whole distinction, and it is decided by whether the recursive call gets $n/2$ or $n-1$.

(There is a separate, real bug here unrelated to recursion: `(lo + hi) / 2` overflows for arrays large enough that $lo + hi$ exceeds the integer range — the flaw that sat in Java's library for nine years. `lo + (hi - lo) / 2` is the fix. See [Lesson 1.1](01-01-values-variables-and-control-flow.md).)

**P3** (a) Coins `[1, 2]`, so $k = 2$. `WAYS(4, 0)`:

The two branches are "use another coin of denomination `c[i]`" (amount drops, index stays) and "stop using `c[i]` forever" (amount stays, index advances).

Working it out: with $i = 0$ (coin 1 available) the routine explores taking 1s; with $i = 1$ only the coin 2 remains; at $i = 2$ there are no coins left, so any leftover amount returns 0.

The answer is **3** — the ways being $\{1,1,1,1\}$, $\{1,1,2\}$, $\{2,2\}$.

Counting calls: the recursion visits every `(A, i)` reachable state, and states repeat. Tracing carefully gives **19 calls** for this small instance. The important structural observation is the next part.

(b) **What is recomputed:** the pair `(A, i)` completely determines the answer, and many different paths reach the same pair. For instance `WAYS(2, 1)` is reached both by taking two 1-coins from `WAYS(4, 0)` and by other routes; the whole subtree below it is rebuilt each time.

**Distinct subproblems:** $A$ ranges over $0, 1, \dots, A$ and $i$ over $0, \dots, k$, so there are at most

$$(A + 1)(k + 1) = \Theta(A k)$$

distinct states — a *polynomial* number, while the unmemoized recursion explores an exponential number of paths to them.

(c) With memoization each distinct state is computed once and thereafter returned from the cache in $O(1)$:

- **calls / work:** $\Theta(Ak)$ — each of the $\Theta(Ak)$ states does $O(1)$ work beyond its two lookups.
- **memory:** $\Theta(Ak)$ table entries, plus the stack.

For the (a) instance that is $5 \times 3 = 15$ states against 19 calls — no saving at all at this size, which is worth noticing: **memoization is an asymptotic win and a small-input loss**, because the table costs something to allocate and probe.

(d) **No, memoization is not enough, and the stack is the reason.**

*The table.* $A = 10^9$ and $k = 6$ gives $\Theta(Ak) = 6 \times 10^9$ entries. At 4 bytes each that is **24 GB**, and at 8 bytes 48 GB. The memoized algorithm is $\Theta(Ak)$, which is polynomial in the *value* of $A$ but exponential in its *length* in bits — the pseudo-polynomial trap, the same one that makes knapsack hard ([`algorithms` 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md)). Memoization removed the exponential redundancy and left an intractable table.

*The stack.* This is the sharper failure and the one the question is really about. The first branch, `WAYS(A - c[i], i)`, decrements the amount by $c_i$ **without advancing $i$**, so with $c_0 = 1$ the routine recurses

$$\texttt{WAYS}(10^9, 0) \to \texttt{WAYS}(10^9 - 1, 0) \to \texttt{WAYS}(10^9 - 2, 0) \to \cdots$$

to a depth of $10^9$ frames before the memo table can help — because **memoization caches results on the way back up, and the stack is consumed on the way down.** A cache cannot save you from a descent it has not returned from yet. At roughly 100 bytes a frame that is 100 GB of stack, so the program dies at depth $\approx 10^4$–$10^5$ having answered nothing.

*What to do instead:* fill the table **bottom-up and iteratively** — loop $i$ from $k-1$ down to 0 and $A$ upward, with no recursion at all. That removes the stack problem entirely and, with the standard one-dimensional rolling array, drops memory to $\Theta(A)$. It does not fix the $10^9$-entry table; for that you need a different algorithm, which is where the coin denominations' structure (or a generating-function argument) has to be exploited.

The general lesson: **memoization fixes redundant work, not unbounded depth.** They are the two resources this lesson separates, and they need separate fixes.

</details>

## Flashback

**From Lesson 1.1 (Values, variables, and control flow):** This fragment is meant to return the number of adjacent pairs in `a[0..n−1]` that are equal.

```
c <- 0
for i in 1 .. n-1:
    if a[i] == a[i-1]:  c <- c + 1
return c
```

(a) Trace it on `a = [4, 4, 4, 7]`. (b) What does it return for `a = []` and for `a = [9]`? (c) A colleague changes the loop to `for i in 0 .. n-1`. What breaks, and on which input does it show first? (d) In one sentence, why does the loop start at 1?

<details>
<summary>Solution</summary>

(a) `a = [4, 4, 4, 7]`, $n = 4$:

| $i$ | `a[i]` | `a[i-1]` | equal? | `c` after |
|---|---|---|---|---|
| 1 | 4 | 4 | yes | 1 |
| 2 | 4 | 4 | yes | 2 |
| 3 | 7 | 4 | no | 2 |

Returns **2** — three equal values in a row give two adjacent equal *pairs*, which is the fencepost showing up again.

(b) For `a = []` ($n=0$) the range `1..−1` is empty, so it returns **0**. For `a = [9]` ($n=1$) the range `1..0` is empty, so it also returns **0**. Both correct: neither has any adjacent pair.

(c) With `i` starting at 0 the first iteration evaluates `a[-1]`. In a language that bounds-checks this raises an error; in one that does not, it reads adjacent memory; in Python it silently wraps to the **last** element, so `a = [4, 4, 4, 7]` would compare `a[0] = 4` against `a[-1] = 7`, find them unequal, and by luck return the same answer 2 — while `a = [7, 4, 4, 7]` would compare `7` against `7`, count a spurious pair, and return 2 instead of 1.

**It shows first on any array whose first and last elements are equal** — and the silent-wrong-answer version is worse than the crash, because nothing signals it.

(d) Because the body reads `a[i-1]`, so index 0 has no left neighbour to compare against — the bound on a loop is a fact about what the **body** touches, not about the array's length.

</details>

## Connections

- **Backward:** the correctness argument here is [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) three obligations renamed — base case is initialization, recursive case is maintenance, "the input strictly decreases" is termination. The stack overflow in Example 2 is a precondition (`n` small enough) that nobody wrote down.
- **Forward:** Lesson 1.4 counts the nodes of a call tree instead of drawing them. Every structure from Module 3 on is recursive by definition — a tree is a node with subtrees — so [3.1](03-01-binary-trees-and-binary-search-trees.md)'s traversals and [4.3](04-03-recursion-revisited-backtracking.md)'s backtracking are this lesson applied. The stack in [2.4](02-04-stacks-and-queues.md) is the call stack made into a data structure you control.
- **Sideways:** the redundant-subtree observation is the entire premise of dynamic programming in [`algorithms` 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md), and turning a recurrence into a closed-form running time is [`algorithms` 1.2](../../algorithms/lessons/01-02-recurrences-recursion-trees-substitution.md). The induction underneath is [discrete-mathematics 1.4](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md); the Fibonacci growth rate $\varphi^n$ comes from the characteristic-equation method in [discrete-mathematics 5.1](../../discrete-mathematics/lessons/05-01-recurrence-relations.md).
