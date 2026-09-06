# Algorithms · Lesson 1.3: The master theorem

> ⏱ ~15 min · Module 1: Analysis & divide-and-conquer · Builds on: [1.1 (asymptotic notation)](01-01-asymptotic-notation.md), [1.2 (recursion trees)](01-02-recurrences-recursion-trees-substitution.md) · Unlocks: 1.4 (sorting & the comparison lower bound)

## Why this matters

Divide-and-conquer algorithms almost all produce a recurrence of one shape:

$$T(n) = a\,T(n/b) + f(n) \qquad \text{— } a \text{ subproblems, each } 1/b \text{ the size, plus } f(n) \text{ to split and combine.}$$

Lesson 1.2 solved these by drawing a tree. The master theorem is that derivation done once, in general, so that you can read the answer off in about five seconds by comparing two quantities. It is the most-used single tool in algorithm analysis, and being fluent with it changes how you *design*: you can see, before writing anything, whether shaving a subproblem off the recursion would actually help.

Equally important, and the part people skip: **knowing when it does not apply.** The theorem has real hypotheses. Unequal splits break it, subtractive recurrences break it, and there is a gap between its cases that swallows perfectly ordinary recurrences. Quoting it where it does not hold is the characteristic error, and Example 2 is one you would plausibly meet.

## The idea

Look again at [Lesson 1.2's](01-02-recurrences-recursion-trees-substitution.md) tree. It has two ends, and the whole question is which one carries more work.

- **The root** does $f(n)$ work — the splitting and combining, once.
- **The leaves** are the base cases. There are $a^{\log_b n} = n^{\log_b a}$ of them, each costing $\Theta(1)$, for $\Theta(n^{\log_b a})$ total.

Call $n^{\log_b a}$ the **watershed**. It is what the recursion alone costs, ignoring $f$ entirely. Now compare:

- $f(n)$ **smaller** than the watershed $\Rightarrow$ work grows as you descend, the leaves dominate, and $T(n) = \Theta(n^{\log_b a})$.
- $f(n)$ **equal** to the watershed $\Rightarrow$ every level costs the same, and you pay it $\log_b n$ times: $T(n) = \Theta(n^{\log_b a}\log n)$.
- $f(n)$ **bigger** than the watershed $\Rightarrow$ work shrinks as you descend, the root dominates, and $T(n) = \Theta(f(n))$.

That is the entire theorem. The three cases are not three facts to memorize; they are the three ways a geometric series can behave, and you have already derived all three by hand.

Two pieces of fine print, both of which earn their keep. First, "smaller" and "bigger" must mean **polynomially** smaller or bigger — by a factor of $n^\epsilon$ — not merely smaller by a logarithm. That is the gap. Second, case 3 needs an extra **regularity** condition, which rules out pathological $f$ that oscillate; for every $f$ you will meet in practice it holds, but you should check it and know why it is there.

## The formal version

**[Master theorem](../reference.md#master-theorem).** Let $a \ge 1$ and $b > 1$ be constants, $f(n)$ a non-negative function, and

$$T(n) \;=\; a\,T(n/b) + f(n).$$

Write the watershed as $n^{\log_b a}$. Then:

**Case 1.** If $f(n) = O\!\left(n^{\log_b a - \epsilon}\right)$ for some constant $\epsilon > 0$, then
$$T(n) = \Theta\!\left(n^{\log_b a}\right).$$

**Case 2.** If $f(n) = \Theta\!\left(n^{\log_b a}\right)$, then
$$T(n) = \Theta\!\left(n^{\log_b a}\log n\right).$$

**Case 3.** If $f(n) = \Omega\!\left(n^{\log_b a + \epsilon}\right)$ for some constant $\epsilon > 0$, **and** the *[regularity condition](../reference.md#regularity-condition)*
$$a\,f(n/b) \;\le\; k\,f(n) \quad\text{for some constant } k < 1 \text{ and all sufficiently large } n$$
holds, then
$$T(n) = \Theta\big(f(n)\big).$$

In words: compare $f(n)$ to $n^{\log_b a}$; whichever is polynomially larger is the answer, and if they tie you pay an extra $\log n$.

**How to use it, every time:**

1. Read off $a$ (number of subproblems) and $b$ (shrink factor). *These are not interchangeable* — $a$ is how many, $b$ is how much smaller.
2. Compute the watershed exponent $\log_b a$.
3. Compare $f(n)$ with $n^{\log_b a}$ and pick the case.
4. If case 3, check regularity.

**An extended case 2** that is worth knowing because it comes up constantly: if $f(n) = \Theta(n^{\log_b a}\log^k n)$ for some $k \ge 0$, then $T(n) = \Theta(n^{\log_b a}\log^{k+1} n)$. (Ordinary case 2 is $k = 0$.) This is what covers $T(n) = 2T(n/2) + n\log n$, giving $\Theta(n\log^2 n)$.

**When the theorem does not apply.** All four of these are ordinary recurrences it cannot touch:

| recurrence | why not |
|---|---|
| $T(n) = T(n/3) + T(2n/3) + n$ | subproblems of **different sizes** — the form does not match |
| $T(n) = T(n-1) + n$ | **subtractive**, not divisive; $b$ would have to be $n/(n-1)$, not a constant |
| $T(n) = 2^n T(n/2) + n$ | $a$ is **not a constant** |
| $T(n) = 2T(n/2) + n/\log n$ | falls in the **gap** between cases 1 and 2 (Example 2) |

In every such case, fall back on a recursion tree.

## Picture

![Three panels, one per case of the master theorem. Each shows the condition on f of n, a verdict in words, a two-bar chart comparing the total work at the leaves against the work at the root, and the resulting bound. Case one has a tall leaves bar, case two has equal bars, case three has a tall root bar. A note at the bottom says that if f sits between two cases no case applies.](assets/01-03-fig1.svg)

The two bars are the only thing to remember. Everything else — the $\epsilon$, the regularity condition — is bookkeeping that makes "taller" precise.

Note the asymmetry in the answers, which is not arbitrary. In case 1 the answer is the *watershed*, not $f$: the leaves dominate, so the combining work is asymptotically free. In case 3 the answer is $f$, not the watershed: the root dominates, so the recursion is asymptotically free. **The answer is always the bigger of the two**, and case 2 is the tie.

## Worked examples

**Example 1 (mechanical): three applications, one per case.**

*(a) $T(n) = 9T(n/3) + n$.* Here $a = 9$, $b = 3$, so $\log_b a = \log_3 9 = 2$ and the watershed is $n^2$. Compare $f(n) = n$ against $n^2$: it is smaller, and polynomially so — $n = O(n^{2 - \epsilon})$ with $\epsilon = 1$. **Case 1**, so
$$T(n) = \Theta(n^2).$$

*(b) $T(n) = T(2n/3) + 1$.* Here $a = 1$, $b = 3/2$, so $\log_b a = \log_{3/2} 1 = 0$ and the watershed is $n^0 = 1$. Compare $f(n) = 1$ against $1$: they match. **Case 2**, so
$$T(n) = \Theta(n^0\log n) = \Theta(\log n).$$

(Sanity check: one subproblem per level shrinking by a constant factor, doing constant work — that is binary search with a different constant, and $\Theta(\log n)$ is right.)

*(c) $T(n) = 3T(n/4) + n\log n$.* Here $a = 3$, $b = 4$, so $\log_4 3 \approx 0.7925$ and the watershed is $n^{0.7925}$. Compare $f(n) = n\log n$: it is bigger, and polynomially so, since $n\log n = \Omega(n^{0.7925 + \epsilon})$ for any $\epsilon < 0.2$ (e.g. $\epsilon = 0.2$, because $n\log n \ge n^{0.9925}$ for large $n$). That points at **case 3**, so check regularity:
$$a f(n/b) = 3\cdot\frac n4\log\frac n4 = \frac34 n\log\frac n4 \;\le\; \frac34\,n\log n = \frac34 f(n),$$
so $k = 3/4 < 1$ works. **Case 3**, and
$$T(n) = \Theta(n\log n).$$

(Verified numerically: the ratio $a f(n/b)/f(n)$ is $0.375, 0.50, 0.5625, 0.60, 0.625$ at $n = 16, 64, 256, 1024, 4096$ — rising toward $3/4$ from below and never reaching it.)

**Example 2 (why you'd care): the gap, and what to do about it.** Consider

$$T(n) \;=\; 2T(n/2) + \frac{n}{\log n}.$$

Here $a = b = 2$, so the watershed is $n^{\log_2 2} = n$. And $f(n) = n/\log n$ is **smaller** than $n$ — so surely case 1?

No. Case 1 demands $f(n) = O(n^{1-\epsilon})$ for some **fixed** $\epsilon > 0$. That would require

$$\frac{n}{\log n} \le c\,n^{1-\epsilon} \quad\Longleftrightarrow\quad \frac{n^{\epsilon}}{\log n} \le c,$$

and $n^\epsilon/\log n \to \infty$ for every $\epsilon > 0$. So no $\epsilon$ works, and case 1 does not apply. It is not case 2 either ($n/\log n \ne \Theta(n)$), nor case 3 ($f$ is smaller, not bigger). **The recurrence falls in the gap and the master theorem says nothing at all.**

This is a place to be careful, because the failure is *asymptotic* and invisible at ordinary sizes — the same "eventually" caveat as [Lesson 1.1](01-01-asymptotic-notation.md). With $\epsilon = 0.1$, the inequality $n/\log n \le n^{0.9}$ actually **holds** for every $n$ up to about $2^{58} \approx 10^{17}$, and only fails beyond that. Testing values would have told you case 1 applied. The definition is a limit statement, and limits are not decided by tables.

*So solve it with a tree.* Level $i$ has $2^i$ nodes of size $n/2^i$, each costing $(n/2^i)/\log(n/2^i)$, so

$$\text{level } i \text{ cost} \;=\; 2^i \cdot \frac{n/2^i}{\log_2 n - i} \;=\; \frac{n}{\log_2 n - i}.$$

Summing over $i = 0, 1, \dots, \log_2 n - 1$ and substituting $j = \log_2 n - i$:

$$T(n) \;=\; \sum_{j=1}^{\log_2 n} \frac nj \;=\; n\,H_{\log_2 n} \;=\; \Theta(n\log\log n),$$

using the harmonic sum $H_m = \Theta(\log m)$. (Verified: $T(n)/(n\ln\log_2 n)$ is $1.067, 1.048, 1.039, 1.034$ at $n = 2^8, 2^{12}, 2^{16}, 2^{20}$ — converging to a constant, as $\Theta$ requires.)

**The lesson.** $\Theta(n\log\log n)$ is a perfectly sensible answer that the master theorem structurally cannot produce — its three cases only ever emit $n^{\log_b a}$, $n^{\log_b a}\log n$, or $f(n)$. When a recurrence does not fit, the fallback is not a bigger theorem; it is the tree you already know how to draw.

## Watch out

- **You might think** "$f(n)$ is smaller than the watershed" is enough for case 1 — **but actually** it must be smaller **by a factor of $n^\epsilon$**, and a logarithmic gap does not qualify (Example 2). The same trap sits on the other side: $f(n) = n^{\log_b a}\log n$ is bigger than the watershed but not polynomially bigger, so it is *not* case 3 — it is the extended case 2, giving $\Theta(n^{\log_b a}\log^2 n)$ rather than $\Theta(f(n))$.
- **You might think** the regularity condition in case 3 is a formality you can skip — **but actually** it is what licenses "the root dominates," and it fails for oscillating $f$ such as $f(n) = n^2(2 + \sin n)$. It always holds for the polynomial-times-polylog functions that arise from real algorithms, so in practice you check it in one line and move on — but check it, because a case-3 answer without it is unproved.
- **You might think** $a$ and $b$ can be read off casually — **but actually** confusing them silently changes the answer. In $T(n) = 4T(n/2) + n$ the watershed is $n^{\log_2 4} = n^2$; swap the roles and you would get $n^{\log_4 2} = n^{1/2}$ and conclude case 3 with $\Theta(n)$ — off by a factor of $n$. Say it out loud: **$a$ is how many, $b$ is how much smaller.**

## One-liner

> Compare the work at the leaves, $n^{\log_b a}$, against the work at the root, $f(n)$: the bigger one is the answer, a tie costs an extra $\log n$ — and if neither is bigger *polynomially*, the theorem does not apply and you draw the tree.

## Problems

**P1 (🟢)** Apply the master theorem to each, stating $a$, $b$, the watershed $n^{\log_b a}$, the case, and the answer.

(a) $T(n) = 8T(n/2) + n^2$  (b) $T(n) = 2T(n/4) + \sqrt n$  (c) $T(n) = 7T(n/2) + n^2$  (d) $T(n) = 16T(n/4) + n^3$

**P2 (🟡)** For each recurrence, say whether the master theorem applies. If it does, give the answer; if it does not, say precisely which hypothesis fails and give the answer by another method.

(a) $T(n) = 2T(n/2) + n\log n$  (b) $T(n) = T(n-2) + n$  (c) $T(n) = 4T(n/2) + n^2\log n$  (d) $T(n) = \sqrt n\,T(\sqrt n) + n$

**P3 (🔴)** A colleague is designing a divide-and-conquer routine that splits an array into subproblems of size $n/4$ and needs $\Theta(n)$ time to split and recombine. They can choose how many of the four quarters to recurse on, from $a = 1$ to $a = 16$ (they may revisit quarters).

(a) Give $T(n)$ as a function of $a$, and determine the resulting $\Theta$ class for every $a$ from 1 to 16 — you will find three regimes; give the boundaries exactly.
(b) They currently have $a = 5$ and want to beat $\Theta(n\log n)$. Say whether that is possible by reducing $a$, and to what.
(c) They propose instead to speed up the combine step from $\Theta(n)$ to $\Theta(\sqrt n)$, keeping $a = 5$. Compute the new running time and say whether the effort was worth it. Draw the general moral in one sentence.

<details>
<summary>Solutions</summary>

**P1** (a) $a = 8$, $b = 2$, watershed $n^{\log_2 8} = n^3$. Compare $f(n) = n^2$: smaller, polynomially ($\epsilon = 1$). **Case 1**: $T(n) = \Theta(n^3)$.

(b) $a = 2$, $b = 4$, watershed $n^{\log_4 2} = n^{1/2} = \sqrt n$. Compare $f(n) = \sqrt n$: equal. **Case 2**: $T(n) = \Theta(\sqrt n\,\log n)$.

(c) $a = 7$, $b = 2$, watershed $n^{\log_2 7} \approx n^{2.807}$. Compare $f(n) = n^2$: smaller, polynomially ($\epsilon \approx 0.8$). **Case 1**: $T(n) = \Theta(n^{\log_2 7}) = \Theta(n^{2.807})$. (This is Strassen's algorithm — Lesson 1.5.)

(d) $a = 16$, $b = 4$, watershed $n^{\log_4 16} = n^2$. Compare $f(n) = n^3$: bigger, polynomially ($\epsilon = 1$). Regularity: $16\,(n/4)^3 = 16n^3/64 = \tfrac14 n^3 \le \tfrac14 f(n)$, so $k = 1/4 < 1$. ✓ **Case 3**: $T(n) = \Theta(n^3)$.

**P2** (a) **Applies — extended case 2.** $a = b = 2$, watershed $n$. Here $f(n) = n\log n = \Theta(n^{\log_b a}\log^1 n)$, so with $k = 1$ the extended form gives $T(n) = \Theta(n\log^2 n)$.

(Note it is *not* case 3: $n\log n$ is bigger than $n$, but not by any factor $n^\epsilon$, since $\log n = o(n^\epsilon)$ for every $\epsilon > 0$.)

(b) **Does not apply** — the recurrence is **subtractive**, $T(n-2)$ rather than $T(n/b)$, so there is no constant $b > 1$ and the form does not match.

Solve by telescoping: $T(n) = T(n-2) + n$ unrolls to $T(n) = n + (n-2) + (n-4) + \cdots$, roughly $n/2$ terms averaging about $n/2$, so

$$T(n) = \sum_{j=0}^{n/2} (n - 2j) \approx \frac{n}{2}\cdot\frac{n}{2}\cdot\ldots = \Theta(n^2).$$

More precisely the sum is $\frac{n}{2}\cdot\frac{n+2}{2}\cdot\frac{1}{1} \sim n^2/4 = \Theta(n^2)$.

(c) **Applies — extended case 2.** $a = 4$, $b = 2$, watershed $n^{\log_2 4} = n^2$. And $f(n) = n^2\log n = \Theta(n^2\log^1 n)$, so $T(n) = \Theta(n^2\log^2 n)$.

(d) **Does not apply** — $a = \sqrt n$ is **not a constant**, violating the hypothesis that $a \ge 1$ be constant. (The subproblem size $\sqrt n$ is also not $n/b$ for constant $b$, so it fails twice.)

By a tree: each level does $\Theta(n)$ total work (the $\sqrt n$ subproblems of size $\sqrt n$ contribute $\sqrt n \cdot \sqrt n = n$), and the size goes $n \to n^{1/2} \to n^{1/4} \to \cdots$, reaching a constant after $\Theta(\log\log n)$ levels. So $T(n) = \Theta(n\log\log n)$.

**P3** (a) $T(n) = a\,T(n/4) + \Theta(n)$, with watershed $n^{\log_4 a}$. Compare with $f(n) = n = n^1$; the boundary is where $\log_4 a = 1$, i.e. $a = 4$.

| $a$ | $\log_4 a$ | case | $T(n)$ |
|---|---|---|---|
| $1, 2, 3$ | $< 1$ | 3 (root dominates) | $\Theta(n)$ |
| $4$ | $= 1$ | 2 (tie) | $\Theta(n\log n)$ |
| $5, \dots, 16$ | $> 1$ | 1 (leaves dominate) | $\Theta(n^{\log_4 a})$ |

The three regimes are exactly $a < 4$, $a = 4$, $a > 4$. (Regularity for the $a \le 3$ cases: $a(n/4) = (a/4)n \le \tfrac34 n$, so $k = 3/4 < 1$. ✓) At the extremes, $a = 1$ gives $\Theta(n)$ and $a = 16$ gives $\Theta(n^2)$.

(b) **Yes, but only by getting to $a \le 3$.** At $a = 5$ the running time is $\Theta(n^{\log_4 5}) = \Theta(n^{1.161})$, which is already worse than $n\log n$ asymptotically. Reducing to $a = 4$ gives exactly $\Theta(n\log n)$ — matching, not beating. To *beat* it they must reach $a \le 3$, which drops them into case 3 and $\Theta(n)$.

So the target is **3 subproblems, not 4** — and that jump from 4 to 3 is worth a whole factor of $\log n$, while the jump from 5 to 4 is worth a factor of $n^{0.161}$. Both are structural wins that no amount of constant-factor tuning could deliver.

(c) With $a = 5$ and $f(n) = \Theta(\sqrt n)$: the watershed is still $n^{\log_4 5} \approx n^{1.161}$, and $\sqrt n = n^{0.5}$ is polynomially smaller. Still **case 1**, so

$$T(n) = \Theta\!\left(n^{\log_4 5}\right) = \Theta(n^{1.161}) \quad\text{— exactly as before.}$$

**The effort bought nothing asymptotically.** In case 1 the leaves dominate, so the combine work is already asymptotically invisible; making it faster improves the constant and nothing else.

**The moral:** *optimize the part that dominates.* Read the case first — case 1 says the recursion is the bottleneck and you must reduce $a$; case 3 says the combine step is the bottleneck and speeding it up is exactly right; case 2 says both matter equally and either helps. Working on the wrong end is the most common way a careful optimization returns zero.

</details>

## Flashback

**From Lesson 1.1 (Asymptotic notation):** Decide each claim and justify briefly.

(a) Is $n^{\log_2 3} = O(n^{1.6})$? (b) Is $n\log n = O(n^{1.01})$? (c) Rank $n^{\log_4 5}$, $n\log n$, and $n$ by growth.

<details>
<summary>Solution</summary>

(a) **Yes.** $\log_2 3 \approx 1.58496 < 1.6$, and $n^a = o(n^b)$ whenever $a < b$, so in particular $n^{\log_2 3} = O(n^{1.6})$. (It is even $o(n^{1.6})$ — a strict bound.)

(b) **Yes.** For any $\epsilon > 0$, $\log n = o(n^\epsilon)$ — any logarithm loses to any positive power. Taking $\epsilon = 0.01$: $n\log n = n \cdot o(n^{0.01}) = o(n^{1.01})$, so certainly $O(n^{1.01})$.

The crossover is instructive: $\log_2 n \le n^{0.01}$ requires $n$ around $2^{1000}$, so this bound is true and utterly useless at any real size. **"Asymptotically smaller" and "smaller at your $n$" are different claims** — the same point Example 2 turned on, and the reason its gap is invisible below $10^{17}$.

(c) $\log_4 5 = \frac{\log_2 5}{\log_2 4} = \frac{2.3219}{2} \approx 1.161$. So:

$$n \;\prec\; n\log n \;\prec\; n^{\log_4 5},$$

where $\prec$ is "is $o$ of". The middle one beats $n$ by a logarithm; the last beats $n\log n$ because $n^{0.161}$ eventually exceeds $\log n$ (by the same fact as (b), applied with $\epsilon = 0.161$).

This is exactly the ranking P3 turns on: an algorithm at $n^{\log_4 5}$ is asymptotically *worse* than one at $n\log n$, even though $1.161$ looks close to $1$.

</details>

## Connections

- **Backward:** every case is a geometric series from [Lesson 1.2's](01-02-recurrences-recursion-trees-substitution.md) recursion tree — case 1 is the increasing series, case 3 the decreasing one, case 2 the flat one; and the comparisons rest on [Lesson 1.1's](01-01-asymptotic-notation.md) growth facts, especially $\log^k n = o(n^\epsilon)$.
- **Forward:** Lesson 1.4 uses case 2 for merge sort and shows why quicksort's worst case is *not* a master-theorem recurrence at all; Lesson 1.5 is a sequence of case-1 wins where the whole design goal is reducing $a$ — exactly P3's moral. Lesson 2.5's dynamic programming abandons this framework, because overlapping subproblems make the tree count work more than once.
- **Sideways:** the same watershed comparison governs [numerical-analysis](../../numerical-analysis/syllabus.md)'s adaptive quadrature and any recursive subdivision scheme, and the $a$-versus-$b$ trade-off reappears in [computer-architecture](../../computer-architecture/syllabus.md) as the cost of a recursive blocking strategy against cache levels.
