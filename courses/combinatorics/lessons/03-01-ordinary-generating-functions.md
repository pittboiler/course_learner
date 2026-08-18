# Enumerative & Algebraic Combinatorics · Lesson 3.1: Ordinary generating functions

> ⏱ ~15 min · Module 3: Generating functions · Builds on: [1.2](01-02-binomial-multinomial-coefficients.md) (binomial coefficients & stars-and-bars), [2.3](02-03-integer-partitions-ferrers.md) (the partition-GF preview) · Unlocks: [3.2](03-02-recurrences-generating-functions.md) (solving recurrences with OGFs)

## Why this matters

So far every count has been its own puzzle. Generating functions replace cleverness with *bookkeeping*: you pack a whole sequence $a_0, a_1, a_2, \dots$ into a single power series, and then algebra — multiplying, dividing, differentiating — does the counting for you. The reason this is the central trick of the course (and reappears everywhere downstream) is that **multiplying two series adds up the ways to split an object between two piles**. That one fact turns "count the pieces, then combine" into a product of series, gives you closed forms for recurrences (next lesson: Fibonacci, Catalan), and is the exact same machine as the probability generating function in statistics and the $Z$-transform in signal processing.

## The idea

Picture a clothesline. You hang your sequence on it, pinning $a_n$ to the peg labeled $x^n$:

$$A(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \cdots.$$

The $x$ is not a number you plug into — it is a **marker**, a place to hang the $n$-th term so it doesn't get confused with the others. You never ask "does this converge?" because you never evaluate it; $x^n$ is just the label "this is the count for size $n$." A single object, $A(x)$, now *is* the entire sequence.

Why bother? Because operations on the clothesline mean something combinatorial. Adding two series adds the sequences term by term ("do this **or** that"). And *multiplying* two series is the payoff: the coefficient of $x^n$ in a product collects every way to hit total size $n$ by taking size $i$ from the first factor and size $n-i$ from the second — a size-$n$ object built by **choosing from two piles**. That is the sum and product rules from Lesson 1.1, now automated by polynomial algebra.

## The formal version

**Definition (OGF).** The *ordinary generating function* of a sequence $(a_n)_{n\ge 0}$ is the formal power series
$$A(x) = \sum_{n\ge 0} a_n x^n.$$
We write $[x^n]\,A(x) = a_n$ for the **coefficient-extraction** operator: "$[x^n]$" means "read off the coefficient of $x^n$."

*In words:* $A(x)$ is a filing cabinet — drawer $n$ holds $a_n$, and $[x^n]$ opens drawer $n$.

**Formal power series.** These live in the ring $\mathbb{R}[[x]]$. Two series are equal exactly when *all* their coefficients match. You add and multiply them like polynomials:
$$\Big(\sum a_n x^n\Big)\Big(\sum b_n x^n\Big) = \sum_{n\ge 0} c_n x^n, \qquad c_n = \sum_{i=0}^{n} a_i\, b_{n-i}.$$
The $c_n$ is the **convolution** of $(a_n)$ and $(b_n)$. Nothing here needs a notion of limit: each $c_n$ is a *finite* sum, so the product is well-defined as a series regardless of whether anything "converges." A series is *invertible* (you can divide by it) exactly when $a_0 \ne 0$.

*In words:* multiplication convolves the two sequences, and "$x$ is a marker" is what lets us ignore convergence entirely.

**The convolution / product rule.**
$$[x^n]\,A(x)B(x) = \sum_{i=0}^{n} a_i\, b_{n-i}.$$
*In words:* to build a size-$n$ object from an $A$-part and a $B$-part, choose how much size $i$ goes to $A$ (the rest, $n-i$, goes to $B$) and multiply the counts — then sum over the split. This *is* the product rule.

Three series do all the heavy lifting.

**1. Geometric series.** Since $(1-x)\sum_{n\ge0} x^n = 1$ (every term past the constant cancels),
$$\frac{1}{1-x} = \sum_{n\ge 0} x^n, \qquad\text{and rescaling } x\mapsto cx:\quad \frac{1}{1-cx} = \sum_{n\ge 0} c^n x^n.$$
*In words:* $\frac{1}{1-x}$ is the OGF of the all-ones sequence; $\frac{1}{1-cx}$ is the OGF of the geometric sequence $c^n$. Read $\frac{1}{1-x}$ as the "catalog" of one nonnegative integer: pick exponent $e$, pay $x^e$.

**2. Newton's generalized binomial series.** For *any* real $\alpha$, define $\binom{\alpha}{n} = \dfrac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}$ (with $\binom{\alpha}{0}=1$). Then
$$(1+x)^{\alpha} = \sum_{n\ge 0} \binom{\alpha}{n} x^n.$$
*In words:* the binomial theorem from Lesson 1.2 still holds for fractional and negative exponents — but now it's an infinite series. When $\alpha$ is a nonnegative integer it truncates and you recover the finite theorem.

**3. The negative-power series (the workhorse).** Specialize to $\alpha = -k$ (a positive integer $k$) with $x \mapsto -x$:
$$\frac{1}{(1-x)^k} = \sum_{n\ge 0} \binom{n+k-1}{k-1}\, x^n.$$
*In words:* the coefficient of $x^n$ in $(1-x)^{-k}$ is exactly the stars-and-bars count $\binom{n+k-1}{k-1}$ — and we prove that below by turning the generalized binomial coefficient positive.

## Concrete instance

**A fully worked coefficient extraction, two ways.** Take
$$F(x) = \frac{1}{(1-x)(1-2x)}.$$

*Way 1 — convolution.* Write $F = A\cdot B$ with $A = \frac{1}{1-x}$ (so $a_i = 1$) and $B = \frac{1}{1-2x}$ (so $b_j = 2^j$). The product rule gives
$$[x^n]\,F(x) = \sum_{i=0}^{n} a_i\, b_{n-i} = \sum_{i=0}^{n} 1\cdot 2^{\,n-i} = 2^n + 2^{n-1} + \cdots + 2^0 = 2^{n+1}-1.$$

*Way 2 — partial fractions* (a preview of Lesson 3.2). Split $F(x) = \dfrac{2}{1-2x} - \dfrac{1}{1-x}$, so
$$[x^n]\,F(x) = 2\cdot 2^n - 1 = 2^{n+1} - 1.$$

They agree. Check the small drawers by hand: $F(x) = 1 + 3x + 7x^2 + 15x^3 + \cdots$, and indeed $2^{1}-1=1,\ 2^{2}-1=3,\ 2^{3}-1=7,\ 2^{4}-1=15$. The convolution route needs no cleverness; the partial-fraction route hands you a closed form. That tension — grind vs. closed form — is the whole story of the next lesson.

## Worked examples

**Example 1 (mechanical — linearity + geometric series).** Find the closed-form OGF of $a_n = 5\cdot 3^n - 2$.
Split the sequence and use one known series per piece:
$$A(x) = \sum_{n\ge0}(5\cdot 3^n - 2)x^n = 5\sum_{n\ge0} 3^n x^n - 2\sum_{n\ge0} x^n = \frac{5}{1-3x} - \frac{2}{1-x}.$$
That's it — building OGFs is mostly recognizing geometric pieces and adding. Over a common denominator, $A(x) = \dfrac{5(1-x) - 2(1-3x)}{(1-3x)(1-x)} = \dfrac{3+x}{(1-3x)(1-x)}$.

**Example 2 (why you'd care — re-deriving stars-and-bars).** How many ways can you write $n = e_1 + e_2 + \cdots + e_k$ with each $e_i$ a nonnegative integer? (In Lesson 1.2 this was stars-and-bars, answer $\binom{n+k-1}{k-1}$; here it falls out of one coefficient.)

Give each variable its own catalog. Variable $e_i$ can be any nonnegative integer, and choosing the value $e$ contributes the marker $x^{e}$, so its catalog is
$$1 + x + x^2 + \cdots = \frac{1}{1-x}.$$
Now multiply the $k$ catalogs. By the product rule, $[x^n]$ of the product sums, over all ways to pick $(e_1,\dots,e_k)$ with $x^{e_1}\cdots x^{e_k} = x^{n}$ — i.e. all tuples with $\sum e_i = n$ — the product of the (all $=1$) counts. So
$$\#\{(e_1,\dots,e_k): e_i\ge 0,\ \textstyle\sum e_i = n\} = [x^n]\left(\frac{1}{1-x}\right)^{k} = [x^n]\,\frac{1}{(1-x)^k}.$$
Finally evaluate that coefficient via the generalized binomial series. From $(1-x)^{-k} = \sum_n \binom{-k}{n}(-x)^n$, turn the negative upper index positive:
$$\binom{-k}{n} = \frac{(-k)(-k-1)\cdots(-k-n+1)}{n!} = (-1)^n \frac{k(k+1)\cdots(k+n-1)}{n!} = (-1)^n \binom{n+k-1}{n}.$$
The stray $(-1)^n$ cancels the $(-1)^n$ from $(-x)^n$, leaving
$$[x^n]\,\frac{1}{(1-x)^k} = \binom{n+k-1}{n} = \binom{n+k-1}{k-1}.$$
Stars-and-bars, recovered as a single coefficient. The bars are the $k-1$ boundaries between the $k$ catalogs; the product rule is doing the "distribute $n$ stars into $k$ bins" for you.

## Watch out

- **You might think** $\frac{1}{1-x}=\sum x^n$ is only valid for $|x|<1$ — **but** as a *formal* identity it needs no such caveat: it's the statement $(1-x)\sum x^n = 1$, a coefficient-by-coefficient truth. Convergence belongs to analysis; here $x$ is a bookkeeping marker, so plugging in a number is beside the point.
- **You might think** the product of the series is the termwise product $\sum a_n b_n x^n$ — **but** it's the *convolution* $\sum_n\big(\sum_i a_i b_{n-i}\big)x^n$. Drawer $n$ of $A\cdot B$ mixes many drawers of $A$ and $B$; that mixing is precisely the combinatorics.
- **You might think** you can divide by any series — **but** $A(x)$ has a multiplicative inverse only when $a_0 \ne 0$. $\frac{1}{1-x}$ works ($a_0=1$); $\frac{1}{x}$ is not a power series. Sign-check the negative binomial too: forget that $(-1)^n$ from $(-x)^n$ and your stars-and-bars count comes out with alternating signs.

## One-liner

> A generating function is a clothesline for a sequence, and multiplying two clotheslines convolves them — which is just the product rule choosing sizes from two piles.

## Problems

**P1 (🟢)** (a) Write the OGF of $a_n = 4^n + 2n$ in closed form. *(Recall $\sum_{n\ge0} n x^n = \frac{x}{(1-x)^2}$.)* (b) Using the convolution rule, extract $[x^n]$ of $\dfrac{1}{(1-x)(1-3x)}$, and give a closed form.

**P2 (🟡)** Prove the hockey-stick identity $\displaystyle\sum_{i=0}^{n}\binom{i+r-1}{r-1} = \binom{n+r}{r}$ by a generating-function argument. *(Hint: what sequence does $\frac{1}{1-x}\cdot\frac{1}{(1-x)^r}$ generate, and what is that product?)*

**P3 (🔴, optional)** Count the nonnegative integer solutions of $e_1+e_2+e_3+e_4 = 20$ subject to $e_1 \le 5$. Set up the generating function (the bounded variable gets a *finite* catalog) and extract the coefficient. *(This is inclusion–exclusion from Lesson 1.3 falling out of the algebra.)*

<details>
<summary>Solutions</summary>

**P1** (a) By linearity, $A(x)=\sum 4^n x^n + 2\sum n x^n = \dfrac{1}{1-4x} + \dfrac{2x}{(1-x)^2}.$

(b) Let $a_i = 1$ (from $\frac{1}{1-x}$) and $b_j = 3^j$ (from $\frac{1}{1-3x}$). Then
$$[x^n]\,\frac{1}{(1-x)(1-3x)} = \sum_{i=0}^{n} 1\cdot 3^{\,n-i} = 3^n + 3^{n-1} + \cdots + 1 = \frac{3^{n+1}-1}{2}.$$
(Cross-check by partial fractions: $\frac{1}{(1-x)(1-3x)} = \frac{3/2}{1-3x} - \frac{1/2}{1-x}$, giving $\frac{3}{2}3^n - \frac12 = \frac{3^{n+1}-1}{2}$. ✓)

**P2** The series $\frac{1}{(1-x)^r} = \sum_{i\ge0}\binom{i+r-1}{r-1}x^i$ (the negative-power series with $k=r$). Multiplying by $\frac{1}{1-x} = \sum x^j$ convolves that sequence with all-ones, i.e. takes **partial sums**:
$$[x^n]\,\frac{1}{1-x}\cdot\frac{1}{(1-x)^r} = \sum_{i=0}^{n}\binom{i+r-1}{r-1}\cdot 1 = \sum_{i=0}^{n}\binom{i+r-1}{r-1}.$$
But the same product is $\frac{1}{(1-x)^{r+1}}$, whose coefficient is $\binom{n+(r+1)-1}{(r+1)-1} = \binom{n+r}{r}$. Equating the two readings of $[x^n]$ gives $\sum_{i=0}^{n}\binom{i+r-1}{r-1} = \binom{n+r}{r}$. $\blacksquare$ *(Multiplying by $\frac{1}{1-x}$ = "take running totals" is a rule worth memorizing.)*

**P3** Variables $e_2,e_3,e_4$ each have the full catalog $\frac{1}{1-x}$; the constrained $e_1\in\{0,\dots,5\}$ has the finite catalog $1+x+\cdots+x^5 = \frac{1-x^6}{1-x}$. The generating function for the count is the product, and we want $[x^{20}]$:
$$[x^{20}]\;\frac{1-x^6}{1-x}\cdot\frac{1}{(1-x)^3} = [x^{20}]\;\frac{1-x^6}{(1-x)^4} = [x^{20}]\frac{1}{(1-x)^4} - [x^{14}]\frac{1}{(1-x)^4},$$
using that multiplying by $x^6$ shifts which coefficient you read. With $k=4$, $[x^m]\frac{1}{(1-x)^4} = \binom{m+3}{3}$, so the count is
$$\binom{23}{3} - \binom{17}{3} = 1771 - 680 = 1091.$$
The $-\binom{17}{3}$ term is exactly the inclusion–exclusion correction "subtract the solutions where $e_1 \ge 6$" — the $x^6$ in the numerator *is* the sieve. $\blacksquare$

</details>

## Flashback

**From Lesson 1.2 (binomial coefficients — Vandermonde):** Evaluate $\displaystyle\sum_{k=0}^{2}\binom{4}{k}\binom{3}{2-k}$ two ways — as a direct sum, and by recognizing it as a single binomial coefficient — and say which identity connects them.

<details>
<summary>Solution</summary>

*Direct.* The terms are $\binom{4}{0}\binom{3}{2} + \binom{4}{1}\binom{3}{1} + \binom{4}{2}\binom{3}{0} = 1\cdot 3 + 4\cdot 3 + 6\cdot 1 = 3 + 12 + 6 = 21.$

*By identity.* This is **Vandermonde's identity** $\sum_{k}\binom{m}{k}\binom{n}{p-k} = \binom{m+n}{p}$ with $m=4,\ n=3,\ p=2$, giving $\binom{7}{2} = 21.$ ✓

*The tie to this lesson:* Vandermonde is itself a convolution statement — $\binom{m+n}{p} = [x^p](1+x)^{m}(1+x)^{n}$, and expanding each factor with the binomial theorem and applying the product rule reproduces $\sum_k \binom{m}{k}\binom{n}{p-k}$. So today's product rule *is* the machine behind the identity you first proved by double counting.

</details>

## Connections

- **Backward (1.2):** stars-and-bars, once a bars-between-stars picture, is now the single coefficient $[x^n](1-x)^{-k}$; and the finite binomial theorem is just Newton's series when $\alpha$ is a nonnegative integer, so it truncates.
- **Forward (3.2):** feeding a recurrence into an OGF turns it into an *algebraic* equation you solve for $A(x)$, then read the closed form off by partial fractions (previewed above) — this is how the Fibonacci and Catalan closed forms drop out.
- **Sideways (2.3):** the partition generating functions $\prod_{k\ge1}\frac{1}{1-x^k}$ from the Ferrers lesson are OGFs; Euler's distinct-vs-odd theorem was exactly a product-of-series identity, and now you have the formal-power-series license that made those infinite products legal.
- **Sideways (probability & signals):** the *probability generating function* $E[x^X] = \sum_n P(X=n)x^n$ is an OGF, and its product rule says the PGF of a sum of independent variables is the product of their PGFs — convolution of distributions, the same fact you just used. In signal processing the identical object is the $Z$-transform. See `probability-theory`.
