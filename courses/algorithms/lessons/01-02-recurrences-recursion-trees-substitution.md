# Algorithms · Lesson 1.2: Recurrences — recursion trees & substitution

> ⏱ ~15 min · Module 1: Analysis & divide-and-conquer · Builds on: [1.1 (asymptotic notation)](01-01-asymptotic-notation.md), [discrete-mathematics 5.1 (recurrence relations)](../../discrete-mathematics/lessons/05-01-recurrence-relations.md) · Unlocks: 1.3 (the master theorem)

## Why this matters

Lesson 1.1 gave you a vocabulary for cost. This lesson gives you the machinery to compute one when the algorithm calls itself.

A recursive algorithm's running time is defined in terms of *its own* running time on smaller inputs — "sorting $n$ things costs two sorts of $n/2$ things, plus a merge." That is a **recurrence**, and it is not yet an answer. Turning it into a closed form is the step that tells you whether your idea is $\Theta(n\log n)$ or $\Theta(n^2)$, and the two look identical in code.

There is a judgement payoff too. When someone shows you a recursive routine and claims a running time, the claim is checkable in about a minute: write the recurrence, draw two levels of the tree, and see whether the work per level is growing, shrinking, or flat. That one look answers it. And when a claim is *wrong*, the error is usually not in the arithmetic — it is an induction that never closes, which P3 walks through.

## The idea

Two methods, and you want both because they fail in different places.

**The recursion tree** is the one to reach for first, because it is a picture. Draw the call at the root and write down the *non-recursive* work it does. Draw its children — the recursive calls — and write down theirs. Keep going. Now you have a tree in which every node is labelled with a cost, and

$$T(n) \;=\; \text{the sum of all the labels}.$$

That sum is usually easiest as **work per level $\times$ number of levels**. Three questions answer almost every recurrence:

1. How much work is at each level?
2. How many levels are there?
3. Is the per-level work growing, shrinking, or staying flat as you go down?

If it is flat, you get (work per level) $\times$ (number of levels). If it shrinks geometrically, the root dominates and the answer is $\Theta(\text{root work})$. If it grows geometrically, the leaves dominate and the answer is $\Theta(\text{number of leaves})$. That trichotomy is the whole content of the master theorem in Lesson 1.3 — you are deriving it by hand here first, which is the only way it stops being three formulas to memorize.

**Substitution** is guess-and-verify: guess a closed form and prove it by induction. It is more work, but it is the *rigorous* one — a recursion tree is a sketch, and turning a sketch into a proof means substitution. It also has one famous trap: sometimes the true statement is not provable by induction and a **stronger** statement is. That sounds backwards and is the single most useful thing in this lesson.

## The formal version

A **recurrence** for a running time gives $T(n)$ in terms of $T$ at smaller arguments, plus a base case. Two conventions we adopt silently from here on, both standard and both harmless:

- **Floors and ceilings are ignored.** Write $T(n/2)$ rather than $T(\lfloor n/2 \rfloor)$. This never changes the $\Theta$ class for the recurrences in this course.
- **The base case is $T(n) = \Theta(1)$ for $n$ below some constant**, and is usually left unwritten. It cannot change the answer as long as it is constant, because it only affects finitely many values.

**The recursion-tree method.** For $T(n) = a\,T(n/b) + f(n)$:

| | value |
|---|---|
| nodes at level $i$ | $a^i$ |
| subproblem size at level $i$ | $n/b^i$ |
| work per node at level $i$ | $f(n/b^i)$ |
| **work at level $i$** | $a^i\,f(n/b^i)$ |
| levels until size 1 | $\log_b n$ |
| number of leaves | $a^{\log_b n} = n^{\log_b a}$ |

so

$$T(n) \;=\; \underbrace{\sum_{i=0}^{\log_b n - 1} a^i f\!\left(\frac{n}{b^i}\right)}_{\text{internal work}} \;+\; \underbrace{\Theta\!\left(n^{\log_b a}\right)}_{\text{leaves}}.$$

The identity $a^{\log_b n} = n^{\log_b a}$ is worth checking once: take $\log_b$ of both sides and you get $\log_b n \cdot \log_b a$ either way.

**The substitution method.** To prove $T(n) = O(g(n))$:

1. **Guess** the form — from a recursion tree, or from a similar recurrence.
2. **Assume** the bound holds for all smaller arguments: $T(k) \le c\,g(k)$ for $k < n$.
3. **Derive** it at $n$: substitute the hypothesis into the recurrence and show the result is $\le c\,g(n)$ — with *the same constant $c$*.
4. **Check the base case** is coverable by choosing $c$ large enough.

Step 3 is where proofs die, and always for the same reason: you end up with $c\,g(n) + (\text{something})$ rather than $c\,g(n)$, so the constant grows every level and the induction never closes. There is no fixing that by enlarging $c$ — the leftover is there for every $c$.

**The [strengthening trick](../reference.md#strengthening-the-hypothesis).** When the leftover is a *lower-order* term, prove a **stronger** statement with a subtracted term: guess $T(n) \le c\,g(n) - d$ instead of $T(n) \le c\,g(n)$. You now have more to prove but also more to assume, and the extra $-d$ in the hypothesis is exactly what absorbs the leftover. Example 1's second half does this.

**Telescoping** handles the one-call case directly: for $T(n) = T(n-1) + f(n)$, unroll to $T(n) = \sum_{k} f(k) + T(\text{base})$.

## Picture

![A recursion tree for T of n equals two T of n over two plus n. The root is labelled n, the two children n over two, the four grandchildren n over four, the eight below that n over eight, and the leaves are ones. Each level is annotated on the right with its total work, which is n at every level.](assets/01-02-fig1.svg)

The right-hand column is the whole method. Level 0 does $n$ work in one node; level 1 does $n/2$ in each of two nodes, so $n$ again; level 2 does $n/4$ in four nodes, so $n$ again. **The work is flat.** With $\log_2 n + 1$ levels, the total is $n(\log_2 n + 1) = \Theta(n\log n)$.

Flat is the interesting case, and it is what merge sort does. Notice how sensitive it is: if the root did $n^2$ work instead of $n$, the levels would shrink geometrically ($n^2, n^2/2, n^2/4, \dots$) and the root alone would dominate at $\Theta(n^2)$. If there were *three* children instead of two, the levels would grow ($n, \tfrac32 n, \tfrac94 n, \dots$) and the leaves would dominate at $\Theta(n^{\log_2 3})$. Same picture, three answers, decided by whether one number is above, below, or equal to another.

## Worked examples

**Example 1 (mechanical): $T(n) = 2T(n/2) + n$, both ways.**

*By recursion tree.* This is the Picture. Level $i$ has $2^i$ nodes of size $n/2^i$, each doing $n/2^i$ work, so level $i$ costs $2^i \cdot n/2^i = n$. The recursion stops at size 1, which is level $\log_2 n$. So

$$T(n) \;=\; \sum_{i=0}^{\log_2 n} n \;=\; n(\log_2 n + 1) \;=\; \Theta(n\log n).$$

(Verified exactly: with $T(1) = 1$, the recurrence gives $T(1024) = 11{,}264 = 1024 \times 11$, and $\log_2 1024 + 1 = 11$. The formula is not merely asymptotic here, it is exact on powers of two.)

*By substitution.* Guess $T(n) = O(n\log n)$, i.e. $T(n) \le c\,n\log_2 n$ for $n \ge 2$. Assume it for $n/2$:

$$T(n) \;=\; 2T(n/2) + n \;\le\; 2 \cdot c\,\frac n2 \log_2\frac n2 + n \;=\; c\,n(\log_2 n - 1) + n \;=\; c\,n\log_2 n - cn + n.$$

This is $\le c\,n\log_2 n$ exactly when $-cn + n \le 0$, i.e. $c \ge 1$. So take $c = 1$ and handle the base case by enlarging $c$ if needed. The induction closes. $\blacksquare$

Notice what made it close: the leftover was $-cn + n$, and the **negative** term came from $\log_2(n/2) = \log_2 n - 1$. That is not luck — it is why the guess had to be $n\log n$ and not $n$.

*The contrast, to see the trick.* Now try $T(n) = 2T(n/2) + 1$. A recursion tree says the leaves dominate: $n$ leaves of cost 1, so guess $T(n) = O(n)$, i.e. $T(n) \le cn$. Substituting:

$$T(n) \le 2 \cdot c\,\frac n2 + 1 = cn + 1 \;\not\le\; cn.$$

Off by one, for every $c$. **Strengthen** the guess to $T(n) \le cn - d$ with $d > 0$:

$$T(n) \le 2\left(c\,\frac n2 - d\right) + 1 = cn - 2d + 1 \;\le\; cn - d \quad\text{iff}\quad d \ge 1.$$

Take $d = 1$ and it closes. (The exact solution with $T(1) = 1$ is $T(n) = 2n - 1$ on powers of two — verified up to $n = 64$ — which is precisely $cn - d$ with $c = 2$, $d = 1$. The strengthened form was the *true* shape all along; the weaker guess was too loose to be provable.)

**Example 2 (why you'd care): an unbalanced split the master theorem cannot touch.** Consider

$$T(n) \;=\; T(n/3) + T(2n/3) + n,$$

which is what quicksort does if every pivot lands at the one-third point. The two subproblems have *different sizes*, so Lesson 1.3's master theorem does not apply at all — but the recursion tree does.

Work per level is still $n$: the children of a node of size $m$ have sizes $m/3$ and $2m/3$, which sum to $m$. So every level costs $n$, as long as the level is "full."

The levels are not all full, because the two branches shrink at different rates. Following the $n/3$ branch, sizes hit 1 after $\log_3 n$ levels; following the $2n/3$ branch, after $\log_{3/2} n$ levels. At $n = 1024$ that is $6.3$ and $17.1$ — the tree is nearly three times deeper on one side than the other. So

$$\underbrace{n\log_3 n}_{\text{all levels full to here}} \;\le\; T(n) \;\le\; \underbrace{n\log_{3/2} n}_{\text{no level can cost more than } n}.$$

Both bounds are $\Theta(n\log n)$, since $\log_3 n$ and $\log_{3/2} n$ differ from $\log_2 n$ only by constant factors ([Lesson 1.1](01-01-asymptotic-notation.md)). So $T(n) = \Theta(n\log n)$.

(Verified numerically: $T(n)/(n\log_2 n)$ sits at $1.08, 1.05, 1.05, 1.05$ for $n = 8, 256, 4096, 16384$ — bounded above and below, as $\Theta$ requires.)

**The point worth carrying.** A perfectly balanced split gave $\Theta(n\log n)$, and a lopsided 1:2 split gives $\Theta(n\log n)$ *too* — only the constant changes. Quicksort does not need good pivots, it needs pivots that are not catastrophically bad, and that is why randomization rescues it (Lesson 4.4). You can read that conclusion straight off the tree, and no closed-form formula would have told you.

## Watch out

- **You might think** a failed substitution means the guess is wrong — **but actually** it often means the guess is *too weak to be provable*, which is a different problem with a different fix. $T(n) \le cn$ fails for $T(n) = 2T(n/2)+1$ even though $T(n) = 2n-1$ really is $O(n)$; the cure is to prove the stronger $T(n) \le cn - d$. Strengthening the hypothesis to make an induction work is a general move, not a trick for recurrences.
- **You might think** you may absorb a leftover term by making $c$ bigger — **but actually** if the leftover is $+n$ against a target of $c\,n$, no $c$ works: the inequality $cn + n \le cn$ is false for every $c$. Enlarging $c$ only ever fixes **base cases**, never a failed inductive step. If your step needs a bigger $c$ than the hypothesis assumed, you have proved nothing (P3).
- **You might think** the recursion tree is a proof — **but actually** it is a derivation that tells you the answer, and the level-counting glosses over floors, ceilings and ragged bottoms. For a homework-grade argument it is fine; when the bound is load-bearing, confirm the guess by substitution. Use the tree to *find* the answer and substitution to *justify* it.

## One-liner

> Draw the tree and ask what one level costs and how many levels there are — flat means multiply, shrinking means the root wins, growing means the leaves win — then close it with an induction that keeps the same constant.

## Problems

**P1 (🟢)** Solve each by recursion tree, showing the work at level $i$, the number of levels, and the total.

(a) $T(n) = 2T(n/2) + n^2$  (b) $T(n) = 4T(n/2) + n$  (c) $T(n) = T(n/2) + 1$

For each, say which of the three shapes it is: root-dominated, flat, or leaf-dominated.

**P2 (🟡)** Use substitution to prove $T(n) = 2T(n/2) + n = O(n\log n)$ — you may reuse Example 1 — and then show that the naive guess $T(n) \le cn^2$ also "works" in the sense that the induction closes. Say in one sentence why that does not make $\Theta(n^2)$ the right answer, and what you would have to prove to establish $\Theta(n\log n)$.

**P3 (🔴)** A colleague submits this argument.

> **Claim.** $T(n) = 2T(n/2) + n$ is $O(n)$.
> **Proof.** By induction. Assume $T(k) \le ck$ for all $k < n$. Then
> $$T(n) = 2T(n/2) + n \le 2c\left(\frac n2\right) + n = cn + n = (c+1)n = O(n). \ \square$$

(a) Identify the exact step that is invalid, and say what the induction was required to produce. (b) Explain why choosing a larger $c$ at the start does not repair it. (c) Give a numerical check on the recurrence (with $T(1) = 1$) that *demonstrates* the claim is false, not merely unproved — state what quantity you would compute and what it does.

<details>
<summary>Solutions</summary>

**P1** (a) $T(n) = 2T(n/2) + n^2$. Level $i$ has $2^i$ nodes of size $n/2^i$, each doing $(n/2^i)^2$ work:

$$\text{level } i \text{ cost} = 2^i \cdot \frac{n^2}{4^i} = \frac{n^2}{2^i}.$$

The costs $n^2, \tfrac{n^2}2, \tfrac{n^2}4, \dots$ form a **decreasing geometric series** summing to less than $2n^2$. There are $\log_2 n$ levels and $n$ leaves contributing $\Theta(n)$, which is dominated. Total $\Theta(n^2)$ — **root-dominated**.

(b) $T(n) = 4T(n/2) + n$. Level $i$ has $4^i$ nodes of size $n/2^i$, each doing $n/2^i$ work:

$$\text{level } i \text{ cost} = 4^i \cdot \frac{n}{2^i} = 2^i n,$$

an **increasing geometric series**: $n, 2n, 4n, \dots$ The last level ($i = \log_2 n$) has $4^{\log_2 n} = n^2$ leaves, and the sum is dominated by that last term. Total $\Theta(n^2)$ — **leaf-dominated**.

(Same answer as (a), by opposite mechanisms. Worth noticing: knowing the answer is $n^2$ tells you nothing about *where* the time goes, and that matters if you want to optimize.)

(c) $T(n) = T(n/2) + 1$. One node per level, cost 1 each, and $\log_2 n$ levels before size 1. Total $\Theta(\log n)$ — **flat** (trivially: every level costs the same, namely 1). This is binary search.

**P2** *The $n\log n$ proof* is Example 1: assuming $T(n/2) \le c\,\frac n2\log_2\frac n2$ gives $T(n) \le c\,n\log_2 n - cn + n \le c\,n\log_2 n$ whenever $c \ge 1$. ✓

*The $n^2$ "proof."* Guess $T(n) \le cn^2$ and assume it for $n/2$:

$$T(n) \le 2c\left(\frac n2\right)^2 + n = \frac{c n^2}{2} + n \;\le\; cn^2 \quad\text{whenever}\quad n \le \frac{c n^2}{2},$$

i.e. whenever $cn \ge 2$ — true for all $n \ge 2$ with $c = 1$. The induction closes perfectly.

*Why that does not make $\Theta(n^2)$ the answer.* Because **$O$ is only an upper bound** ([Lesson 1.1](01-01-asymptotic-notation.md)): both $T(n) = O(n\log n)$ and $T(n) = O(n^2)$ are true statements, and the second is simply weaker and uninteresting. A successful substitution proof confirms an upper bound; it never certifies that the bound is tight.

To establish $\Theta(n\log n)$ you need the matching **lower** bound $T(n) = \Omega(n\log n)$ — a second induction, proving $T(n) \ge c'\,n\log_2 n$ for some $c' > 0$, which goes through by the same algebra with the inequality reversed.

**P3** (a) The invalid step is the final one: the derivation ends at $(c+1)n$, and the induction was required to end at $\mathbf{cn}$ — **the same constant it assumed**. Concluding "$= O(n)$" from $(c+1)n$ hides the problem behind the notation: the constant has grown by 1, and it grows by 1 at every level of the recursion, so after $\log_2 n$ levels it is $c + \log_2 n$, not a constant at all. An induction must reproduce its own hypothesis exactly.

(b) Because the failure is not about the size of $c$. Suppose you start with $c = 10^6$; the step still yields $(c+1)n$, which is still not $\le cn$. The required inequality $cn + n \le cn$ simplifies to $n \le 0$, false for every $c$ and every $n \ge 1$. **Enlarging $c$ can only ever absorb finitely many base cases**; it cannot repair an inductive step that loses ground each time.

(c) Compute the ratio $T(n)/n$ at increasing $n$. If $T(n)$ were $O(n)$ this ratio would be bounded by a constant. Running the recurrence with $T(1) = 1$:

| $n$ | 4 | 16 | 64 | 256 | 1024 |
|---|---|---|---|---|---|
| $T(n)/n$ | 3 | 5 | 7 | 9 | 11 |

The ratio is exactly $\log_2 n + 1$ — it **grows without bound**, so no constant $c$ satisfies $T(n) \le cn$ for all $n$, and the claim is false. (This is the numerical shadow of the same fact the algebra showed: the constant drifts by 1 per level, and there are $\log_2 n$ levels.)

The general habit: **when a bound is in doubt, tabulate $T(n)/g(n)$.** If it converges to a positive constant you likely have $\Theta(g)$; if it drifts, $g$ is the wrong class — and the *way* it drifts usually names the right one, as the $\log_2 n + 1$ does here.

</details>

## Connections

- **Backward:** recurrences and their closed forms are [discrete-mathematics 5.1](../../discrete-mathematics/lessons/05-01-recurrence-relations.md), where the tools were characteristic equations for linear recurrences; the divide-and-conquer recurrences here are a different family needing different methods. Every substitution proof is an [induction](../../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md), and the geometric sums in P1 are the closed forms from [precalculus 3.3](../../precalculus/lessons/03-03-series-and-infinite-geometric-sum.md).
- **Forward:** Lesson 1.3 packages the three shapes of the Picture into the master theorem so you can skip the tree — and shows what it cannot do, which is Example 2's unbalanced split. Lesson 1.4 solves merge sort's and quicksort's recurrences; Lesson 2.5's dynamic programming is what you do when the subproblems *overlap* and a tree would count the same work many times.
- **Sideways:** the recursion tree is the same object as the call tree a profiler shows you, with cost annotations instead of timings. In [theory-of-computation 2.3](../../theory-of-computation/lessons/02-03-cfl-pumping-lemma-and-closure.md), a very similar tree argument — a tall tree must repeat a label — proves an impossibility rather than a cost, which is a good illustration of how far one picture stretches.
