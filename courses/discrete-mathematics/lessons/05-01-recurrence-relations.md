# Discrete Mathematics · Lesson 5.1: Recurrence relations

> ⏱ ~15 min · Module 5: Recurrences, Graphs & Trees · Builds on: 1.4 (mathematical induction & strong induction) · Unlocks: 5.2 (graphs: paths, connectivity, Euler & Hamilton)

## Why this matters

Whenever the next step of a process is built from the steps just before it — a bank balance from last month's balance, the number of ways to tile a strip from the shorter strips, the running time of an algorithm that calls itself on smaller inputs — you have a **recurrence**. A recurrence is a compressed description of an infinite sequence. The skill this lesson buys you is decompression: turning "each term is defined by its predecessors" into a **closed form** you can evaluate at $n = 10^6$ without computing the first million terms. That single move — recurrence to closed form — is how you get the $O(n\log n)$ out of merge sort and the growth rate out of a population model.

## The idea

A **recurrence relation** defines a sequence by saying how to get the next term from earlier ones, plus a few **initial conditions** to get started. The recurrence alone isn't enough — "each term is the sum of the two before it" describes Fibonacci *and* a thousand other sequences until you nail down the first two terms.

Three you already half-know:

- **Fibonacci:** $F_n = F_{n-1} + F_{n-2}$, with $F_0 = 0,\ F_1 = 1$. Each rabbit-count is last month's plus the month-before's.
- **Compound interest:** $B_n = 1.05\,B_{n-1}$, with $B_0 = 1000$. Next year's balance is this year's times $1.05$ — this one you can already solve: $B_n = 1000 \cdot 1.05^n$. Geometric growth is just the simplest recurrence.
- **A counting recurrence:** let $t_n$ = the number of ways to tile a $1\times n$ strip with $1\times 1$ squares and $1\times 2$ dominoes. The last tile is either a square (leaving a strip of length $n-1$) or a domino (leaving $n-2$), so $t_n = t_{n-1} + t_{n-2}$ — Fibonacci again, discovered by *reasoning about the structure*, not by pattern-matching.

Solving a recurrence means replacing the backward-looking rule with a formula that names $a_n$ directly in terms of $n$. There are two workhorses ahead: **unroll and guess** (then prove), and the **characteristic equation** (a formula for the whole family of linear ones).

## The formal version

A **linear homogeneous recurrence relation with constant coefficients of order $k$** is any relation of the form

$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \cdots + c_k a_{n-k}, \qquad c_k \ne 0,$$

where the $c_i$ are constants. In words: each term is a fixed weighted sum of the $k$ terms before it — *linear* (no $a_{n-1}^2$, no $a_{n-1}a_{n-2}$), *homogeneous* (no stray $+7$ or $+n$ term), *constant coefficients* (the weights don't depend on $n$). It needs $k$ initial conditions to pin down a unique sequence.

The engine for solving these: guess that $a_n = x^n$ for some number $x$, substitute, and divide by $x^{n-k}$. That collapses the whole recurrence into one polynomial, the **characteristic equation**:

$$x^k = c_1 x^{k-1} + c_2 x^{k-2} + \cdots + c_k.$$

In words: the growth rates $x$ that "survive" the recurrence are exactly its roots. For order $2$ — the case you'll meet most — the equation is $x^2 = c_1 x + c_2$.

**Distinct-roots theorem (order 2).** If $x^2 = c_1 x + c_2$ has two *different* roots $r_1 \ne r_2$, then every solution has the form

$$a_n = A\,r_1^{\,n} + B\,r_2^{\,n},$$

and the constants $A, B$ are fixed by the two initial conditions. In words: the general solution is a blend of the two pure geometric modes, and the starting values decide the mix.

**Repeated-root theorem (order 2).** If the equation has a *single* root $r$ repeated twice (a double root), the second mode $r^n$ isn't "new," so we multiply by $n$ to get an independent partner:

$$a_n = c_1\,r^{\,n} + c_2\,n\,r^{\,n}.$$

In words: a double root contributes $r^n$ *and* $n\,r^n$. (Why the extra $n$? The same reason a repeated root of $x^2 = 0$ needs both $1$ and $x$ as solutions of $y'' = 0$: one geometric mode can't carry two initial conditions by itself.)

## Concrete instance

Solve $a_n = a_{n-1} + 2a_{n-2}$ with $a_0 = 2,\ a_1 = 1$.

**Step 1 — characteristic equation.** Guess $a_n = x^n$: then $x^n = x^{n-1} + 2x^{n-2}$. Divide by $x^{n-2}$:

$$x^2 = x + 2 \quad\Longleftrightarrow\quad x^2 - x - 2 = 0.$$

**Step 2 — roots.** Factor: $(x-2)(x+1) = 0$, so $r_1 = 2$ and $r_2 = -1$. Two distinct roots, so the general solution is

$$a_n = A\cdot 2^{\,n} + B\,(-1)^{\,n}.$$

**Step 3 — fit the initial conditions.** Plug in $n = 0$ and $n = 1$:

$$a_0:\quad A + B = 2, \qquad\qquad a_1:\quad 2A - B = 1.$$

Add the two equations: $3A = 3$, so $A = 1$, and then $B = 1$.

**Step 4 — closed form.**

$$\boxed{\,a_n = 2^{\,n} + (-1)^{\,n}\,}$$

**Step 5 — check $n = 2$.** The recurrence gives $a_2 = a_1 + 2a_0 = 1 + 2\cdot 2 = 5$. The closed form gives $2^2 + (-1)^2 = 4 + 1 = 5$. Agreement. (The sequence is $2, 1, 5, 7, 17, 31, \dots$ — you can verify $a_3 = 5 + 2\cdot 1 = 7 = 8 - 1$.)

## Worked examples

**Example 1 (unroll and guess, then prove).** Solve $a_n = 3a_{n-1}$ with $a_0 = 5$ — but pretend you don't know geometric sequences. Unroll:

$$a_n = 3a_{n-1} = 3(3a_{n-2}) = 3^2 a_{n-2} = 3^3 a_{n-3} = \cdots$$

After $n$ steps you've stripped down to $a_0$: the pattern is $a_n = 3^n a_0 = 5\cdot 3^n$. That's a **guess** from a finite number of steps. Make it airtight by **induction** (Lesson 1.4): *base* $a_0 = 5\cdot 3^0 = 5$ ✓; *step*, assume $a_{n-1} = 5\cdot 3^{n-1}$, then $a_n = 3a_{n-1} = 3\cdot 5\cdot 3^{n-1} = 5\cdot 3^n$ ✓. Unrolling *suggests* the answer; induction *certifies* it — never trust the guess alone.

**Example 2 (a repeated root).** Solve $a_n = 6a_{n-1} - 9a_{n-2}$ with $a_0 = 1,\ a_1 = 9$.

Characteristic equation: $x^2 - 6x + 9 = 0$, i.e. $(x-3)^2 = 0$. A **double root** $r = 3$. By the repeated-root theorem,

$$a_n = c_1\,3^{\,n} + c_2\,n\,3^{\,n}.$$

Fit initial conditions: $a_0 = c_1 = 1$. Then $a_1 = 3c_1 + 3c_2 = 3 + 3c_2 = 9$, so $c_2 = 2$. Closed form: $a_n = 3^n + 2n\,3^n = (1 + 2n)\,3^n$. Check $n=2$: recurrence gives $6\cdot 9 - 9\cdot 1 = 45$; formula gives $(1+4)\cdot 9 = 45$ ✓. Notice the $n\,3^n$ mode — a repeated root makes the sequence grow like $n$ *times* a geometric, faster than the pure geometric alone.

*A one-line taste of the other method.* Instead of guessing $x^n$, you can pack the whole sequence into a single "generating function" $G(x) = \sum_{n\ge 0} a_n x^n$, use the recurrence to write $G$ as one rational function, and read the coefficients back off. For $a_n = a_{n-1} + 2a_{n-2}$ this gives $G(x) = \frac{2 - x}{1 - x - 2x^2}$, and a partial-fraction split recovers the very same $2^n + (-1)^n$. Same answer, different bookkeeping — and the method that keeps working when the characteristic trick runs out (`combinatorics` builds it in full).

## Watch out

- **A recurrence without initial conditions solves nothing.** $F_n = F_{n-1} + F_{n-2}$ has infinitely many solutions; the seeds $F_0, F_1$ select one. An order-$k$ relation needs exactly $k$ seeds — no more, no fewer.
- **You might think a double root just gives $c_1 r^n + c_2 r^n$** — but that collapses to $(c_1+c_2)r^n$, a *single* constant, which can't satisfy two independent initial conditions. The repeated root genuinely needs the $n\,r^n$ partner. Forgetting the $n$ is the #1 error here.
- **"Homogeneous" is a real restriction.** $a_n = 2a_{n-1} + 3$ has that stray $+3$, so the bare characteristic-equation recipe doesn't apply as-is — you first solve the homogeneous part, then find one particular solution. (Same spirit as solving linear ODEs.)
- **Unrolling is a heuristic, not a proof.** Three matching terms can lie. Always close the loop with induction.

## One-liner

> A recurrence is a sequence folded up; unroll-and-prove or the characteristic equation unfolds it into a closed form, and a repeated root is the one case that hides an extra factor of $n$.

## Problems

**P1 (🟢)** Solve $a_n = 5a_{n-1} - 6a_{n-2}$ with $a_0 = 1,\ a_1 = 0$. Give the closed form and check it at $n = 2$.

**P2 (🟡)** Solve $a_n = 4a_{n-1} - 4a_{n-2}$ with $a_0 = 1,\ a_1 = 3$. (Watch the discriminant before you assume two roots.)

**P3 (🔴, optional — a runtime recurrence)** The Tower of Hanoi with $n$ disks takes $H_n = 2H_{n-1} + 1$ moves, with $H_1 = 1$. Unroll it to *guess* a closed form, then *prove* your guess by induction. (This is the discrete cousin of the divide-and-conquer runtime recurrences in `algorithms` — solving $T(n) = 2T(n-1)+1$ is exactly the reasoning behind reading a time bound off a recursive algorithm.)

<details>
<summary>Solutions</summary>

**P1** Characteristic equation: $x^2 - 5x + 6 = 0 \Rightarrow (x-2)(x-3) = 0$, distinct roots $r_1 = 2,\ r_2 = 3$. So $a_n = A\cdot 2^n + B\cdot 3^n$. Initial conditions: $a_0 = A + B = 1$ and $a_1 = 2A + 3B = 0$. From the first, $A = 1 - B$; substitute: $2(1-B) + 3B = 0 \Rightarrow 2 + B = 0 \Rightarrow B = -2$, so $A = 3$. Closed form: $\boxed{a_n = 3\cdot 2^n - 2\cdot 3^n}$. Check $n=2$: recurrence gives $5\cdot 0 - 6\cdot 1 = -6$; formula gives $3\cdot 4 - 2\cdot 9 = 12 - 18 = -6$ ✓.

**P2** Characteristic equation: $x^2 - 4x + 4 = 0 \Rightarrow (x-2)^2 = 0$. Discriminant is $16 - 16 = 0$: a **double root** $r = 2$. So $a_n = (c_1 + c_2 n)\,2^n$. Initial conditions: $a_0 = c_1 = 1$; $a_1 = (c_1 + c_2)\cdot 2 = 3 \Rightarrow c_1 + c_2 = \tfrac32 \Rightarrow c_2 = \tfrac12$. Closed form: $a_n = \left(1 + \tfrac{n}{2}\right)2^n = 2^n + n\,2^{n-1}$. Check $n=2$: recurrence gives $4\cdot 3 - 4\cdot 1 = 8$; formula gives $(1+1)\cdot 4 = 8$ ✓.

**P3** *Unroll:* $H_n = 2H_{n-1} + 1 = 2(2H_{n-2}+1) + 1 = 4H_{n-2} + 2 + 1 = 8H_{n-3} + 4 + 2 + 1 = \cdots$. After peeling down to $H_1 = 1$, the constant tail is $1 + 2 + 4 + \cdots + 2^{n-1} = 2^n - 1$ (geometric sum), and the leading term $2^{n-1}H_1 = 2^{n-1}$ is already inside it. **Guess:** $H_n = 2^n - 1$.

*Proof by induction on $n$.* Base $n=1$: $2^1 - 1 = 1 = H_1$ ✓. Step: assume $H_{n-1} = 2^{n-1} - 1$. Then
$$H_n = 2H_{n-1} + 1 = 2(2^{n-1} - 1) + 1 = 2^n - 2 + 1 = 2^n - 1,$$
completing the induction. So $\boxed{H_n = 2^n - 1}$ — the moves double with each added disk, which is why $64$ disks is astronomically many.

</details>

## Flashback

**From Lesson 1.4 (Mathematical induction & strong induction):** Prove by induction that the sum of the first $n$ odd numbers is a perfect square:
$$\sum_{k=1}^{n} (2k - 1) = n^2 \qquad \text{for all } n \ge 1.$$

<details>
<summary>Solution</summary>

*Base case* $n = 1$: the left side is $2(1) - 1 = 1$, and the right side is $1^2 = 1$ ✓.

*Inductive step:* assume $\sum_{k=1}^{n}(2k-1) = n^2$ for some $n \ge 1$. Then the sum up to $n+1$ is
$$\sum_{k=1}^{n+1}(2k-1) = \underbrace{\sum_{k=1}^{n}(2k-1)}_{= \,n^2 \text{ by hypothesis}} + \big(2(n+1) - 1\big) = n^2 + (2n + 1) = (n+1)^2.$$
This is exactly the claim for $n+1$. By induction it holds for all $n \ge 1$. (The picture: stacking successive L-shaped "gnomons" of $1, 3, 5, \dots$ unit squares builds up a solid $n\times n$ square.)

</details>

## Connections

- **Backward:** the verification half of this lesson *is* Lesson 1.4 — every closed form you guess by unrolling gets certified by induction, and the repeated-root and geometric-sum arguments lean on it directly.
- **Forward:** `combinatorics` develops the generating-function method teased above into a full technique for recurrences the characteristic equation can't reach; Lesson 5.3 uses the counting-recurrence style of reasoning (last-tile/last-edge case split) on trees.
- **Sideways (algorithms):** divide-and-conquer running times are recurrences like $T(n) = 2\,T(n/2) + n$, and the **Master Theorem** in `algorithms` is a lookup table of their closed-form growth rates — the same recurrence-to-closed-form move, specialized to runtimes.
- **Sideways (calculus):** the compound-interest recurrence $B_n = 1.05\,B_{n-1}$ giving $B_n = 1000\cdot 1.05^n$ is the discrete shadow of the exponential growth in `calc-refresher`; a single dominant root $r > 1$ is precisely geometric growth.
