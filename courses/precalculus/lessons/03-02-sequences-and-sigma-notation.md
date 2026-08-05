# Precalculus · Lesson 3.2: Sequences and sigma notation

> ⏱ ~15 min · Module 3: Trigonometric functions, sequences, and series · Builds on: 1.1 (functions as objects) · Unlocks: 3.3 (series and the infinite geometric sum)

## Why this matters

Calculus is built on adding up infinitely many tiny pieces — a Riemann sum is nothing but $\sum$ of rectangle areas, and a Taylor series is a sum of infinitely many terms. Before you can take limits of sums, you need to write sums cleanly and add them up in closed form. This lesson gives you the notation ($\Sigma$) and two summation formulas you'll reuse from `calc-refresher` all the way through economics' compound-interest models. It also sets up the next lesson, where we let the sum run forever and watch a limit appear.

## The idea

A **sequence** is just a function whose inputs are the counting numbers $1, 2, 3, \dots$ instead of a continuous line. Feed it $n$, it hands back the $n$-th term $a_n$. So $2, 4, 6, 8, \dots$ is the function "double the position," and $3, 6, 12, 24, \dots$ is "start at 3 and keep multiplying by 2."

Two patterns are worth naming because they cover a huge share of real models:

- **Arithmetic** — you *add* the same step each time (a staircase). $2, 5, 8, 11, \dots$ adds $3$.
- **Geometric** — you *multiply* by the same factor each time (a chain reaction). $3, 6, 12, 24, \dots$ multiplies by $2$.

Once you have a sequence, you often want the running total of its first $n$ terms — a **partial sum**. Sigma notation ($\Sigma$, Greek capital S for "sum") is just shorthand for "add these up," and for arithmetic and geometric sequences there's a slick formula so you never have to add term by term.

## The formal version

A **sequence** is a function $a\colon \{1,2,3,\dots\} \to \mathbb{R}$; we write $a_n$ for the output at input $n$ (the **$n$-th term**) instead of $a(n)$.
*In words: a sequence is a list, and $a_n$ is the item in slot $n$.*

You can define it two ways:

- **Explicit** — a formula for $a_n$ directly from $n$: e.g. $a_n = 2n$.
- **Recursive** — a starting term plus a rule for the next from the current: e.g. $a_1 = 2$, $a_{n} = a_{n-1} + 2$.
*In words: explicit lets you jump straight to term 100; recursive tells you how to take one step.*

**Arithmetic sequence** — constant **common difference** $d = a_{n} - a_{n-1}$:
$$a_n = a_1 + (n-1)d.$$
*In words: start at $a_1$ and take $(n-1)$ steps of size $d$ to reach term $n$.*

**Geometric sequence** — constant **common ratio** $r = a_{n}/a_{n-1}$:
$$a_n = a_1\, r^{\,n-1}.$$
*In words: start at $a_1$ and multiply by $r$ a total of $(n-1)$ times.*

**Sigma notation** for a partial sum:
$$\sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n.$$
*In words: let the **index** $k$ run from the bottom value to the top value, plug each into $a_k$, and add the results.* The index is a dummy label — $\sum_{k=1}^{n}$ and $\sum_{i=1}^{n}$ mean the same thing.

**Two closed-form partial sums.** For an arithmetic sequence,
$$\sum_{k=1}^{n} a_k = \frac{n}{2}\,(a_1 + a_n).$$
*In words: (number of terms) times the average of the first and last term.* For a geometric sequence with $r \neq 1$,
$$\sum_{k=1}^{n} a_1 r^{\,k-1} = a_1\,\frac{1 - r^{\,n}}{1 - r}.$$
*In words: first term, scaled by a factor that depends only on the ratio and how many terms you took.*

## Concrete instance

**An arithmetic sum via the pairing trick.** Add the first six terms of $3, 7, 11, 15, \dots$ (here $a_1 = 3$, $d = 4$). In sigma form, since $a_k = 3 + (k-1)4 = 4k - 1$:
$$\sum_{k=1}^{6} (4k - 1) = 3 + 7 + 11 + 15 + 19 + 23.$$
Now Gauss's trick: write the sum forwards and backwards and add columns.
$$
\begin{array}{ccccccc}
3 & + & 7 & + & \cdots & + & 23\\
23 & + & 19 & + & \cdots & + & 3
\end{array}
$$
Every one of the $6$ vertical pairs sums to $a_1 + a_6 = 3 + 23 = 26$. So twice the sum is $6 \times 26 = 156$, and the sum is $\tfrac{1}{2}(156) = 78$. That is exactly the formula $\frac{n}{2}(a_1 + a_n) = \frac{6}{2}(3 + 23) = 3 \cdot 26 = 78$. Check by hand: $3+7+11+15+19+23 = 78$. ✓

**A finite geometric sum.** Add the first five terms of $2, 6, 18, 54, \dots$ (here $a_1 = 2$, $r = 3$). Since $a_k = 2\cdot 3^{\,k-1}$:
$$\sum_{k=1}^{5} 2\cdot 3^{\,k-1} = 2 + 6 + 18 + 54 + 162.$$
Here's *why* the formula works — the telescoping trick. Call the sum $S = 2 + 6 + 18 + 54 + 162$. Multiply by the ratio: $3S = 6 + 18 + 54 + 162 + 486$. Subtract:
$$3S - S = 486 - 2 \implies 2S = 484 \implies S = 242.$$
Every middle term cancels; only the new last term and the original first term survive. In general that subtraction gives $S(r-1) = a_1(r^n - 1)$, i.e. the formula. Plugging in: $a_1\frac{1-r^n}{1-r} = 2\cdot\frac{1 - 3^5}{1 - 3} = 2\cdot\frac{1 - 243}{-2} = 2\cdot\frac{-242}{-2} = 242$. ✓

## Worked examples

**Example 1 (mechanical).** Find the 20th term and the sum of the first 20 terms of the arithmetic sequence $5, 9, 13, \dots$

Here $a_1 = 5$ and $d = 4$. The explicit term is $a_n = 5 + (n-1)4 = 4n + 1$, so $a_{20} = 4(20) + 1 = 81$. The partial sum is
$$\sum_{k=1}^{20} a_k = \frac{20}{2}(a_1 + a_{20}) = 10\,(5 + 81) = 10 \cdot 86 = 860.$$

**Example 2 (why you'd care — compound interest).** You deposit 1,000 dollars at the start of each year into an account earning 5% annually. Right after the 4th deposit, how much is in the account? Each deposit grows by a factor of $1.05$ per year it sits. The deposit made 3 years ago has compounded 3 times; the one just made hasn't compounded at all. So the balance is
$$1000(1.05)^3 + 1000(1.05)^2 + 1000(1.05)^1 + 1000(1.05)^0 = \sum_{k=1}^{4} 1000\,(1.05)^{k-1}.$$
This is geometric with $a_1 = 1000$, $r = 1.05$, $n = 4$:
$$1000\,\frac{1 - 1.05^4}{1 - 1.05} = 1000\,\frac{1 - 1.21550625}{-0.05} = 1000\,\frac{-0.21550625}{-0.05} = 1000 \cdot 4.310125 = 4310.13\text{ dollars.}$$
Every annuity, loan amortization, and bond price in finance is a geometric partial sum wearing a suit.

## Watch out

- You might think $a_n = a_1 + n\,d$, but actually it's $a_1 + (n-1)d$ — you take one *fewer* step than the term number, because term 1 has taken zero steps. Same off-by-one lives in the exponent $r^{\,n-1}$, not $r^{\,n}$.
- You might think the geometric sum formula works for any $r$, but actually $r = 1$ breaks it (division by $1 - 1 = 0$). When $r = 1$ every term equals $a_1$, so the sum is just $n\,a_1$ — handle that case separately.
- Watch the index bounds. $\sum_{k=0}^{n}$ has $n+1$ terms, not $n$; $\sum_{k=1}^{n}$ has $n$. Always count "top minus bottom, plus one."

## One-liner

> A sequence is a function on the counting numbers; arithmetic adds a fixed step, geometric multiplies by a fixed factor, and $\Sigma$ plus two formulas let you total either one without adding term by term.

## Problems

**P1 (🟢)** Write $\sum_{k=1}^{5} (3k - 1)$ out term by term, then evaluate it two ways: by direct addition and by the arithmetic-sum formula.

**P2 (🟡)** A geometric sequence has $a_2 = 12$ and $a_4 = 108$. Find $a_1$ and the common ratio $r$ (take $r > 0$), then compute the sum of the first 5 terms.

**P3 (🔴, optional)** A Riemann-sum warm-up for `calc-refresher`: write the total area of $n$ rectangles of equal width $\tfrac{1}{n}$ whose heights are $\tfrac{1}{n}, \tfrac{2}{n}, \dots, \tfrac{n}{n}$ as a single sigma expression, then use the fact $\sum_{k=1}^{n} k = \tfrac{n(n+1)}{2}$ to simplify it to a formula in $n$. What value does it approach as $n$ grows huge?

<details>
<summary>Solutions</summary>

**P1** The terms are $a_k = 3k - 1$ for $k = 1,\dots,5$: $2, 5, 8, 11, 14$. So
$$\sum_{k=1}^{5}(3k-1) = 2 + 5 + 8 + 11 + 14 = 40.$$
This is arithmetic with $a_1 = 2$, $a_5 = 14$, $n = 5$, so the formula gives $\frac{5}{2}(2 + 14) = \frac{5}{2}(16) = 40$. ✓ Both agree.

**P2** In a geometric sequence, $\frac{a_4}{a_2} = r^2 = \frac{108}{12} = 9$, so $r = 3$ (taking the positive root). Then $a_2 = a_1 r = 3a_1 = 12$ gives $a_1 = 4$. The first five terms are $4, 12, 36, 108, 324$. Their sum:
$$\sum_{k=1}^{5} 4\cdot 3^{\,k-1} = 4\,\frac{1 - 3^5}{1 - 3} = 4\,\frac{1 - 243}{-2} = 4\,\frac{-242}{-2} = 4 \cdot 121 = 484.$$
Check: $4 + 12 + 36 + 108 + 324 = 484$. ✓

**P3** Rectangle $k$ has width $\tfrac{1}{n}$ and height $\tfrac{k}{n}$, so its area is $\tfrac{1}{n}\cdot\tfrac{k}{n} = \tfrac{k}{n^2}$. Total area:
$$A_n = \sum_{k=1}^{n} \frac{k}{n^2} = \frac{1}{n^2}\sum_{k=1}^{n} k = \frac{1}{n^2}\cdot\frac{n(n+1)}{2} = \frac{n+1}{2n} = \frac{1}{2} + \frac{1}{2n}.$$
As $n$ grows huge, $\tfrac{1}{2n} \to 0$, so $A_n \to \tfrac{1}{2}$. That is exactly the area under the line $y = x$ from $0$ to $1$ — a triangle of base and height $1$, area $\tfrac12$. You just computed your first integral as a limit of sums.

</details>

## Flashback

**From Lesson 2.3 (Exponential and logarithmic functions):** A radioactive sample decays according to $A(t) = A_0\,e^{-0.04t}$ (with $t$ in years). Find its half-life. Then note: if you record the amount once per year, the readings $A(0), A(1), A(2), \dots$ form a *geometric* sequence — what is its common ratio?

<details>
<summary>Solution</summary>

Half-life is the time for $A$ to fall to $\tfrac{1}{2}A_0$. Set $A_0 e^{-0.04t} = \tfrac{1}{2}A_0$, cancel $A_0$, and take natural logs:
$$e^{-0.04t} = \tfrac{1}{2} \implies -0.04t = \ln\tfrac{1}{2} = -\ln 2 \implies t = \frac{\ln 2}{0.04} \approx \frac{0.6931}{0.04} \approx 17.3\text{ years.}$$
Yearly readings: $A(n) = A_0 e^{-0.04n} = A_0\,(e^{-0.04})^{n}$, which is geometric with common ratio $r = e^{-0.04} \approx 0.9608$. Each year the sample retains about $96\%$ of the previous year's amount. (A geometric sequence *is* exponential sampled at integer inputs — the same fact 3.3 will lean on.)

</details>

## Connections

- **Backward (1.1):** a sequence is literally the "function as object" idea from Lesson 1.1, with the domain narrowed from the whole real line to the counting numbers — same machinery, discrete inputs.
- **Forward (3.3):** let $n \to \infty$ in the geometric partial sum $a_1\frac{1-r^n}{1-r}$. When $|r| < 1$ the term $r^n$ dies and the sum settles to $\frac{a_1}{1-r}$ — an infinite sum tamed by a limit, which is the whole story of the next lesson.
- **Sideways (`calc-refresher`):** sigma notation is the language of Riemann sums (P3 is a preview) and of Taylor series; the arithmetic sum $\sum k = \frac{n(n+1)}{2}$ is the first of the power-sum formulas you'll use to evaluate integrals from the definition.
- **Sideways (economics):** every compound-interest, annuity, and present-value calculation is a geometric partial sum (Example 2); when the payments run forever with $|r|<1$, you get the perpetuity formula $\frac{a_1}{1-r}$ straight from Lesson 3.3.
