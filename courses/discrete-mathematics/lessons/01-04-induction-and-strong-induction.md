# Discrete Mathematics · Lesson 1.4: Mathematical induction & strong induction

> ⏱ ~15 min · Module 1: Logic & Proof · Builds on: 1.3 (proof techniques) · Unlocks: 2.1 (sets & set operations)

## Why this matters

Induction is how you prove a statement about *all* the natural numbers at once — infinitely many claims — with a finite argument. It's the natural weapon for anything defined by a formula in $n$, anything built recursively, and anything with a "for every step" flavor. In CS it *is* the proof that a recursive function is correct and that a loop's invariant survives every pass. In `[real-analysis](../../real-analysis/syllabus.md)` it underwrites definitions built one integer at a time. Once you internalize the domino picture, a whole class of "how do I even start?" problems becomes routine.

## The idea

Picture an infinite line of dominoes. You want to know: will they *all* fall? You only need to check two things. First, **the first one falls** — you push it. Second, **each domino, if it falls, knocks over the next**. If both hold, then every domino falls, no matter how far down the line — even though you never touched any but the first.

That's induction. To prove a statement $P(n)$ for every $n$ from some starting point on, you show:

1. **Base case** — $P$ is true at the start (push the first domino).
2. **Inductive step** — *whenever* $P(k)$ is true, $P(k+1)$ is true too (each domino knocks the next).

You don't check infinitely many cases. You check one case and one implication, and the implication does the infinite work for you. The subtle, crucial part: in the inductive step you get to **assume** $P(k)$ — that assumption is called the inductive hypothesis, and it's not cheating, because you're only ever using "if it fell, the next falls."

## The formal version

**Principle of Mathematical Induction.** Let $P(n)$ be a statement about integers $n \ge n_0$. If

$$P(n_0) \quad\text{and}\quad \forall k \ge n_0\,\big(P(k) \to P(k+1)\big),$$

then $P(n)$ holds for all $n \ge n_0$.

In words: prove it at the starting value, prove each case forces the next, and you get every case.

**Principle of Strong Induction.** Same setup, but in the step you may assume $P$ holds at *every* value from $n_0$ up to $k$, not just at $k$:

$$P(n_0) \quad\text{and}\quad \forall k \ge n_0\,\Big(\big(P(n_0)\land\cdots\land P(k)\big) \to P(k+1)\Big),$$

then $P(n)$ holds for all $n \ge n_0$.

In words: if you can reach case $k+1$ using *any or all* of the earlier cases (not necessarily just the one right before it), strong induction is the tool. Here $k$ is a generic index and $n_0$ is wherever the claim starts (often $0$, $1$, or $2$).

**Well-Ordering Principle.** Every nonempty set of nonnegative integers has a least element. In words: you can't have an infinite descending staircase of naturals — go down and you eventually hit bottom. This is the engine both forms of induction run on: if $P$ failed somewhere, the *smallest* counterexample would exist by well-ordering — but the base case rules out $n_0$, and the inductive step rules out every larger value (its predecessor(s) would already satisfy $P$), so no smallest counterexample can exist, hence none at all.

## Concrete instance

Claim: for every integer $n \ge 1$, the sum of the first $n$ odd numbers is $n^2$:

$$\sum_{i=1}^{n} (2i - 1) = n^2.$$

**Base case** ($n = 1$): the left side is $2(1)-1 = 1$; the right side is $1^2 = 1$. They match, so $P(1)$ holds.

**Inductive hypothesis:** assume $P(k)$ holds for some $k \ge 1$, i.e.

$$\sum_{i=1}^{k} (2i-1) = k^2.$$

**Inductive step:** show $P(k+1)$, i.e. that $\sum_{i=1}^{k+1}(2i-1) = (k+1)^2$. Split off the last term and use the hypothesis:

$$\sum_{i=1}^{k+1}(2i-1) = \underbrace{\sum_{i=1}^{k}(2i-1)}_{=\,k^2\ \text{by hypothesis}} + \big(2(k+1)-1\big) = k^2 + (2k+1) = (k+1)^2.$$

That's exactly $P(k+1)$. Base case plus step, so by induction the formula holds for all $n \ge 1$. $\blacksquare$

Notice the shape of every induction: **peel off one piece to expose the case you already assumed, then do a line of algebra.** The hypothesis is where $k^2$ came from — without invoking it, you'd be stuck.

## Worked examples

**Example 1 (mechanical — ordinary induction).** Prove $1 + 2 + \cdots + n = \dfrac{n(n+1)}{2}$ for all $n \ge 1$.

*Base* ($n=1$): left side $=1$, right side $=\frac{1\cdot 2}{2}=1$. ✓

*Hypothesis:* assume $\sum_{i=1}^{k} i = \dfrac{k(k+1)}{2}$.

*Step:*
$$\sum_{i=1}^{k+1} i = \frac{k(k+1)}{2} + (k+1) = (k+1)\!\left(\frac{k}{2}+1\right) = (k+1)\cdot\frac{k+2}{2} = \frac{(k+1)(k+2)}{2}.$$

That is the formula with $k+1$ in place of $k$. Done. ✓

**Example 2 (why you'd care — strong induction).** Prove every integer $n \ge 2$ is a product of primes (a single prime counts as a one-factor product).

Why *strong* induction? Because when you factor $n = a\cdot b$, the pieces $a$ and $b$ can be *anywhere* between $2$ and $n-1$ — not conveniently equal to $n-1$. Ordinary induction, which only hands you $P(n-1)$, can't reach them. Strong induction hands you all of $P(2),\dots,P(n-1)$ at once, which is exactly what you need.

*Base* ($n=2$): $2$ is prime, so it is a product of primes (itself). ✓

*Hypothesis:* assume every integer $m$ with $2 \le m \le k$ is a product of primes.

*Step:* consider $k+1$. Two cases.
- If $k+1$ is prime, it's a product of primes (itself) — done.
- If $k+1$ is composite, then $k+1 = a\cdot b$ with $2 \le a, b \le k$. By the (strong) hypothesis, both $a$ and $b$ are products of primes. Concatenating those two factorizations expresses $k+1$ as a product of primes.

Either way $P(k+1)$ holds, so by strong induction every $n \ge 2$ is a product of primes. $\blacksquare$

This is exactly the existence half of the Fundamental Theorem of Arithmetic, proved head-on in `[Lesson 4.1 (Divisibility & primes)](../lessons/04-01-divisibility-and-primes.md)`.

## Watch out

- **You might think** the base case is a formality you can skip — **but actually** it's load-bearing. Without it the dominoes never start: "$n = n+1$" survives every inductive step vacuously, yet is false everywhere. A missing or wrong base case is the most common way an induction proof silently fails.
- **You might think** assuming $P(k)$ to prove $P(k+1)$ is circular — "you're assuming what you want to prove." **But actually** you're proving an *implication*, $P(k)\to P(k+1)$, which is a genuinely weaker, provable thing; the base case is what converts that chain of implications into an unconditional truth.
- **You might think** strong induction is a different, more powerful axiom. **But actually** it's logically equivalent to ordinary induction (each proves the other) — "strong" just means you *use* more of the accumulated hypothesis. Reach for it exactly when reaching case $k+1$ needs an earlier case other than $k$: prime factorization, recurrences that look back two steps, "unravel to a smaller piece" arguments.

## One-liner

> Prove it once at the bottom and prove each rung lifts you to the next, and the whole infinite ladder is yours — the base case pushes the first domino, the inductive step lets it fall forever.

## Problems

**P1 (🟢)** Prove by induction that $\sum_{i=1}^{n} i^2 = \dfrac{n(n+1)(2n+1)}{6}$ for all $n \ge 1$.

**P2 (🟡)** A sequence is defined by $a_1 = 1$ and $a_{n} = a_{n-1} + 2n - 1$ for $n \ge 2$. Conjecture a closed form for $a_n$, then prove it by induction. *(This is your first taste of Lesson 5.1: guess-and-verify a recurrence's closed form.)*

**P3 (🔴, optional)** Define the Fibonacci numbers by $F_1 = F_2 = 1$ and $F_n = F_{n-1} + F_{n-2}$ for $n \ge 3$. Prove by strong induction that $F_n < 2^n$ for all $n \ge 1$. (Explain why ordinary induction from $F_{n-1}$ alone would not suffice.)

<details>
<summary>Solutions</summary>

**P1** *Base* ($n=1$): left side $= 1^2 = 1$; right side $= \frac{1\cdot 2\cdot 3}{6} = 1$. ✓

*Hypothesis:* assume $\sum_{i=1}^{k} i^2 = \dfrac{k(k+1)(2k+1)}{6}$.

*Step:*
$$\sum_{i=1}^{k+1} i^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2 = \frac{k(k+1)(2k+1) + 6(k+1)^2}{6} = \frac{(k+1)\big[k(2k+1) + 6(k+1)\big]}{6}.$$
Now $k(2k+1) + 6(k+1) = 2k^2 + 7k + 6 = (k+2)(2k+3)$, so the sum equals
$$\frac{(k+1)(k+2)(2k+3)}{6} = \frac{(k+1)\big((k+1)+1\big)\big(2(k+1)+1\big)}{6},$$
which is the formula at $n = k+1$. By induction it holds for all $n \ge 1$. $\blacksquare$

**P2** Compute a few terms: $a_1 = 1$, $a_2 = 1 + 3 = 4$, $a_3 = 4 + 5 = 9$, $a_4 = 9 + 7 = 16$. These are $1, 4, 9, 16$, so conjecture $a_n = n^2$.

*Base* ($n=1$): $a_1 = 1 = 1^2$. ✓

*Hypothesis:* assume $a_k = k^2$ for some $k \ge 1$.

*Step:* by the recurrence, $a_{k+1} = a_k + 2(k+1) - 1 = k^2 + 2k + 1 = (k+1)^2$. That's the closed form at $k+1$. By induction $a_n = n^2$ for all $n \ge 1$. $\blacksquare$

(This mirrors the "sum of odd numbers" concrete instance: each step adds the next odd number $2(k+1)-1$ to a perfect square and lands on the next perfect square.)

**P3** *Ordinary induction is not enough* because $F_{n}$ depends on *two* previous terms, $F_{n-1}$ and $F_{n-2}$; knowing only $P(n-1)$ leaves $F_{n-2}$ unbounded. Strong induction supplies both.

We prove $P(n): F_n < 2^n$. Since the step reaches back two terms, verify *two* base cases.

*Base:* $F_1 = 1 < 2 = 2^1$ ✓ and $F_2 = 1 < 4 = 2^2$ ✓.

*Hypothesis:* assume $F_m < 2^m$ for all $m$ with $1 \le m \le k$, where $k \ge 2$.

*Step:* for $k + 1 \ge 3$ the recurrence applies:
$$F_{k+1} = F_k + F_{k-1} < 2^k + 2^{k-1} \quad(\text{both by hypothesis, since } k-1, k \le k).$$
Now $2^k + 2^{k-1} = 2^{k-1}(2 + 1) = 3\cdot 2^{k-1} < 4\cdot 2^{k-1} = 2^{k+1}$. Hence $F_{k+1} < 2^{k+1}$. By strong induction, $F_n < 2^n$ for all $n \ge 1$. $\blacksquare$

</details>

## Flashback

**From Lesson 1.3 (Proof techniques):** Prove that if $n^2$ is even, then $n$ is even. Choose the proof technique deliberately and say why.

<details>
<summary>Solution</summary>

Direct proof is awkward here — from "$n^2$ is even" there's no clean handle on $n$ itself. So use the **contrapositive**: prove "if $n$ is odd, then $n^2$ is odd," which is logically equivalent to the original.

Suppose $n$ is odd. Then $n = 2m + 1$ for some integer $m$. Squaring,
$$n^2 = (2m+1)^2 = 4m^2 + 4m + 1 = 2\underbrace{(2m^2 + 2m)}_{\text{integer}} + 1,$$
which is of the form $2(\text{integer}) + 1$, hence odd. This proves the contrapositive, so the original statement holds: if $n^2$ is even, then $n$ is even. $\blacksquare$

(This exact lemma is the linchpin of the classic proof that $\sqrt 2$ is irrational — see Lesson 1.3.)

</details>

## Connections

- **Backward:** the inductive step is just a direct/contrapositive proof of a single implication $P(k)\to P(k+1)$ — everything from Lesson 1.3 lives inside it. Well-ordering is why induction is *valid*, tying it back to the structure of $\mathbb{N}$.
- **Forward:** strong induction proves the existence of prime factorizations in `[Lesson 4.1](../lessons/04-01-divisibility-and-primes.md)`; ordinary induction verifies the closed forms of recurrences in `[Lesson 5.1](../lessons/05-01-recurrence-relations.md)`; and the "a tree on $n$ vertices has $n-1$ edges" argument in `[Lesson 5.3](../lessons/05-03-trees-and-graph-coloring.md)` is induction on vertex count.
- **Sideways:** in `[proofs-primer](../../proofs-primer/syllabus.md)` and `[real-analysis](../../real-analysis/syllabus.md)`, induction justifies recursive definitions and inequalities defined term-by-term. In CS, this *is* how you prove a recursive function correct (induction on input size) and that a **loop invariant** holds — the base case is "true before the loop," the inductive step is "one iteration preserves it."
